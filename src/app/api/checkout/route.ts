import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

/**
 * Creates a Stripe Checkout session for a direct digital sale — either the
 * eBook or the fillable workbook (POST body: { "product": "ebook" | "workbook" }).
 *
 * Enable it by setting STRIPE_SECRET_KEY in .env.local (see README). Until then
 * this returns a friendly message and the site steers buyers to Amazon.
 *
 * Uses Stripe's REST API directly, so no extra dependency is required.
 */

export async function POST(request: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;

  if (!secret) {
    return NextResponse.json(
      {
        error:
          "Direct checkout isn't set up yet. Please use the “Buy on Amazon” option for now.",
      },
      { status: 200 },
    );
  }

  const body = (await request.json().catch(() => ({}))) as {
    product?: string;
  };

  // Three product sources: the eBook and workbook (configured in site.ts) and
  // CMS store products ("store:<slug>", priced + delivered from Sanity).
  let product: string;
  let returnPath: string;
  let item: { name: string; description: string; priceUsd: number };

  if (body.product?.startsWith("store:")) {
    const slug = body.product.slice("store:".length);
    const { fetchProductWithFile } = await import("@/lib/sanity/queries");
    const storeProduct = await fetchProductWithFile(slug).catch(() => null);
    if (
      !storeProduct ||
      !storeProduct.fileUrl ||
      !storeProduct.priceUsd ||
      storeProduct.priceUsd <= 0
    ) {
      return NextResponse.json(
        { error: "This product isn't available for purchase yet." },
        { status: 404 },
      );
    }
    product = `store:${slug}`;
    returnPath = "/store";
    item = {
      name: `${storeProduct.title} (PDF)`,
      description: storeProduct.tagline ?? storeProduct.category,
      priceUsd: storeProduct.priceUsd,
    };
  } else if (body.product === "workbook") {
    product = "workbook";
    returnPath = "/the-book";
    item = {
      name: `${siteConfig.workbook.title} — ${siteConfig.workbook.subtitle} (Fillable PDF)`,
      description: "Instant download after checkout.",
      priceUsd: siteConfig.workbook.priceUsd,
    };
  } else {
    product = "ebook";
    returnPath = "/the-book";
    item = {
      name: `${siteConfig.book.title} — eBook (PDF)`,
      description: siteConfig.book.subtitle,
      priceUsd: siteConfig.book.ebookPriceUsd,
    };
  }

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;
  const amountCents = Math.round(item.priceUsd * 100);

  const params = new URLSearchParams();
  params.set("mode", "payment");
  // metadata.product is what the download route trusts to pick the right file.
  params.set("metadata[product]", product);
  params.set(
    "success_url",
    `${origin}${returnPath}?purchase=success&product=${encodeURIComponent(product)}&session_id={CHECKOUT_SESSION_ID}`,
  );
  params.set("cancel_url", `${origin}${returnPath}?purchase=cancelled`);
  params.set("line_items[0][quantity]", "1");
  params.set("line_items[0][price_data][currency]", "usd");
  params.set("line_items[0][price_data][unit_amount]", String(amountCents));
  params.set("line_items[0][price_data][product_data][name]", item.name);
  params.set(
    "line_items[0][price_data][product_data][description]",
    item.description,
  );

  try {
    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = (await res.json()) as { url?: string; error?: { message?: string } };

    if (!res.ok || !data.url) {
      console.error("Stripe error:", data.error);
      return NextResponse.json(
        { error: "Couldn't start checkout. Please try Amazon or try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ url: data.url });
  } catch (err) {
    console.error("Checkout route error:", err);
    return NextResponse.json(
      { error: "Couldn't start checkout. Please try Amazon or try again." },
      { status: 500 },
    );
  }
}
