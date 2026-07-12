// Re-check the CMS for new content at most every 60 seconds.
export const revalidate = 60;

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { formatDate } from "@/lib/format";
import { getLetters } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Voices from the Inside",
  description:
    "Letters from men and women still inside — in their own words.",
};

export default async function LettersPage() {
  const letters = await getLetters();

  return (
    <section className="py-16 sm:py-24">
      <Container size="narrow">
        <p className="eyebrow mb-3">Letters</p>
        <h1 className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Voices from the Inside
        </h1>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-fg-muted">
          Real words from people still behind the wall. Shared with permission,
          with names used only as each writer wished. If the book or this site
          reached you inside,{" "}
          <Link href="/write-to-us" className="text-accent hover:underline">
            write to us
          </Link>{" "}
          — your words may help the next person.
        </p>

        <div className="mt-14 space-y-10">
          {letters.map((letter) => (
            <article
              key={letter.slug}
              id={letter.slug}
              className="scroll-mt-24 rounded-2xl border border-border bg-bg-elev p-7 sm:p-9"
            >
              <span
                aria-hidden
                className="font-display text-5xl leading-none text-accent/30"
              >
                &ldquo;
              </span>
              <div
                className="prose-ut -mt-3"
                dangerouslySetInnerHTML={{ __html: letter.bodyHtml }}
              />
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-display text-lg font-semibold text-accent">
                  — {letter.fromName}
                </p>
                <p className="mt-0.5 text-sm text-fg-subtle">
                  {letter.fromLocation ? `${letter.fromLocation} · ` : ""}
                  {formatDate(letter.date)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
