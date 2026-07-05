/** Shown at the top of the Book page after returning from Stripe Checkout. */
export function PurchaseBanner({
  status,
  sessionId,
}: {
  status?: string;
  sessionId?: string;
}) {
  if (status === "success") {
    return (
      <div className="mb-10 rounded-2xl border border-accent/50 bg-accent/10 p-6 text-center">
        <p className="font-display text-2xl font-semibold text-accent">
          Thank you — your purchase is complete.
        </p>
        <p className="mt-2 text-fg-muted">
          Your eBook is ready to download. Keep the file somewhere safe.
        </p>
        {sessionId && (
          <a
            href={`/api/download?session_id=${encodeURIComponent(sessionId)}`}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-contrast transition-colors hover:bg-accent-hover"
          >
            ↓ Download your eBook (PDF)
          </a>
        )}
      </div>
    );
  }

  if (status === "cancelled") {
    return (
      <div className="mb-10 rounded-2xl border border-border bg-bg-elev p-5 text-center text-fg-muted">
        No worries — your checkout was cancelled and you weren&rsquo;t charged.
        You can still grab the book below whenever you&rsquo;re ready.
      </div>
    );
  }

  return null;
}
