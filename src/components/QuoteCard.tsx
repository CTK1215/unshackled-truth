import Link from "next/link";
import { formatDate } from "@/lib/format";

/**
 * Shared card for letters (from inmates) and stories (from recovering addicts).
 * Both are short first-person pieces with an attribution.
 */
export function QuoteCard({
  href,
  excerpt,
  attribution,
  meta,
  date,
}: {
  href: string;
  excerpt: string;
  attribution: string;
  meta?: string;
  date: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-2xl border border-border bg-bg-elev p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-bg-elev-2"
    >
      <span
        aria-hidden
        className="font-display text-6xl leading-none text-accent/30"
      >
        &ldquo;
      </span>
      <p className="-mt-4 flex-1 text-pretty text-lg leading-relaxed text-fg">
        {excerpt}
      </p>
      <div className="mt-6 border-t border-border pt-4">
        <p className="font-display text-lg font-semibold text-accent">
          {attribution}
        </p>
        <p className="mt-0.5 text-sm text-fg-subtle">
          {meta ? `${meta} · ` : ""}
          {formatDate(date)}
        </p>
      </div>
    </Link>
  );
}
