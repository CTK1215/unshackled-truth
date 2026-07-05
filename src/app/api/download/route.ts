import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

/**
 * Secure eBook delivery.
 *
 * A buyer reaches this route only after Stripe Checkout, carrying a session_id.
 * We ask Stripe whether that session is actually paid before streaming the PDF,
 * so the file can never be downloaded without a completed purchase. The PDF
 * lives in /private (outside /public), so it is never directly reachable.
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
  try {
    const res = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
      { headers: { Authorization: `Bearer ${secret}` } },
    );
    const session = (await res.json()) as { payment_status?: string };
    paid = res.ok && session.payment_status === "paid";
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

  // Stream the PDF from the private folder.
  try {
    const filePath = path.join(
      process.cwd(),
      "private",
      siteConfig.book.ebookFileName,
    );
    const file = await readFile(filePath);
    const downloadName = `${siteConfig.book.title.replace(/[^\w\s-]/g, "").trim()}.pdf`;

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
