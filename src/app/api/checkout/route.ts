import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

/**
 * Creates a Stripe Checkout session for the direct eBook sale.
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
          "Direct eBook checkout isn't set up yet. Please use the “Buy on Amazon” option for now.",
      },
      { status: 200 },
    );
  }

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;
  const amountCents = Math.round(siteConfig.book.ebookPriceUsd * 100);

  const params = new URLSearchParams();
  params.set("mode", "payment");
  params.set(
    "success_url",
    `${origin}/the-book?purchase=success&session_id={CHECKOUT_SESSION_ID}`,
  );
  params.set("cancel_url", `${origin}/the-book?purchase=cancelled`);
  params.set("line_items[0][quantity]", "1");
  params.set("line_items[0][price_data][currency]", "usd");
  params.set("line_items[0][price_data][unit_amount]", String(amountCents));
  params.set(
    "line_items[0][price_data][product_data][name]",
    `${siteConfig.book.title} — eBook (PDF)`,
  );
  params.set(
    "line_items[0][price_data][product_data][description]",
    siteConfig.book.subtitle,
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
