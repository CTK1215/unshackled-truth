import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

/**
 * Secure digital-product delivery (eBook or fillable workbook).
 *
 * A buyer reaches this route only after Stripe Checkout, carrying a session_id.
 * We ask Stripe whether that session is actually paid before streaming the PDF,
 * so the file can never be downloaded without a completed purchase. Which file
 * to serve comes from the session's own metadata (set at checkout), so a buyer
 * only ever gets the product they paid for. The PDFs live in /private (outside
 * /public), so they are never directly reachable.
 */

export const runtime = "nodejs";

export async function GET(request: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json(
      { error: "Downloads aren't available yet." },
      { status: 503 },
    );
  }

  const sessionId = new URL(request.url).searchParams.get("session_id");
  if (!sessionId) {
    return NextResponse.json(
      { error: "Missing purchase reference." },
      { status: 400 },
    );
  }

  // Verify the checkout session with Stripe.
  let paid = false;
  let product = "ebook";
  try {
    const res = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
      { headers: { Authorization: `Bearer ${secret}` } },
    );
    const session = (await res.json()) as {
      payment_status?: string;
      metadata?: { product?: string };
    };
    paid = res.ok && session.payment_status === "paid";
    if (
      session.metadata?.product === "workbook" ||
      session.metadata?.product?.startsWith("store:")
    ) {
      product = session.metadata.product;
    }
  } catch (err) {
    console.error("Download verify error:", err);
    return NextResponse.json(
      { error: "Couldn't verify your purchase. Please contact support." },
      { status: 502 },
    );
  }

  if (!paid) {
    return NextResponse.json(
      { error: "This purchase isn't complete." },
      { status: 402 },
    );
  }

  // Store products: stream the file from the CMS after payment verification.
  if (product.startsWith("store:")) {
    try {
      const slug = product.slice("store:".length);
      const { fetchProductWithFile } = await import("@/lib/sanity/queries");
      const storeProduct = await fetchProductWithFile(slug);
      if (!storeProduct?.fileUrl) throw new Error(`no file for ${slug}`);

      const fileRes = await fetch(storeProduct.fileUrl);
      if (!fileRes.ok) throw new Error(`asset fetch ${fileRes.status}`);
      const buf = new Uint8Array(await fileRes.arrayBuffer());
      const downloadName = `${storeProduct.title.replace(/[^\w\s-]/g, "").trim()}.pdf`;

      return new NextResponse(buf, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${downloadName}"`,
          "Cache-Control": "no-store",
        },
      });
    } catch (err) {
      console.error("Store product delivery error:", err);
      return NextResponse.json(
        {
          error:
            "Your payment went through, but the file isn't ready. Please contact us and we'll send it right over.",
        },
        { status: 500 },
      );
    }
  }

  // eBook / workbook: stream the purchased PDF from the private folder.
  try {
    const fileName =
      product === "workbook"
        ? siteConfig.workbook.fileName
        : siteConfig.book.ebookFileName;
    const title =
      product === "workbook"
        ? `${siteConfig.workbook.title} Workbook`
        : siteConfig.book.title;
    const filePath = path.join(process.cwd(), "private", fileName);
    const file = await readFile(filePath);
    const downloadName = `${title.replace(/[^\w\s-]/g, "").trim()}.pdf`;

    return new NextResponse(new Uint8Array(file), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${downloadName}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("eBook file missing:", err);
    return NextResponse.json(
      {
        error:
          "Your payment went through, but the file isn't ready. Please contact us and we'll send it right over.",
      },
      { status: 500 },
    );
  }
}
