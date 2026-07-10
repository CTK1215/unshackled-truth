"use client";

import { useState } from "react";
import { Button } from "./Button";

/**
 * Starts a Stripe Checkout session for a direct digital sale (the eBook by
 * default, or the fillable workbook via product="workbook").
 * If Stripe isn't configured yet, the API responds with a clear message and
 * we show it inline instead of failing silently.
 */
export function BuyEbookButton({
  priceUsd,
  product = "ebook",
  label = "Buy the eBook",
}: {
  priceUsd: number;
  /** "ebook", "workbook", or "store:<slug>" for a CMS store product. */
  product?: string;
  label?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  async function checkout() {
    setLoading(true);
    setNote(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      setNote(
        data.error ??
          "Direct checkout isn't available yet — please use the Amazon link for now.",
      );
    } catch {
      setNote("Something went wrong starting checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Button size="lg" onClick={checkout} disabled={loading}>
        {loading ? "Starting checkout…" : `${label} — $${priceUsd.toFixed(2)}`}
      </Button>
      {note && <p className="mt-3 text-sm text-fg-muted">{note}</p>}
    </div>
  );
}
