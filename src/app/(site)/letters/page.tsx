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

        {letters.length === 0 && (
          <div className="mt-14 rounded-2xl border border-border bg-bg-elev p-8 sm:p-10">
            <h2 className="font-display text-2xl font-semibold">
              The first letters are still in the mail.
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-fg-muted">
              <p>
                This page will hold real letters from men and women who are
                still inside, published only with the writer&rsquo;s
                permission, with names and locations shown only as each writer
                wishes. Nothing here will ever be made up. A wall can take
                someone&rsquo;s freedom; it should not erase their voice.
              </p>
              <p>
                Why it matters: I spent twenty-seven years behind that wall,
                and the world mostly talked about people like me, not with us.
                These letters are the &ldquo;with us.&rdquo; They tell families
                what hope looks like from the inside, and they tell the next
                man in the cell that somebody made the walk before him.
              </p>
              <p>
                If this site or the book reached you inside, or you love
                someone it could reach,{" "}
                <Link
                  href="/write-to-us"
                  className="text-accent hover:underline"
                >
                  here is how to write to us
                </Link>
                . Until the letters arrive, the &ldquo;Life Inside&rdquo;
                posts on{" "}
                <Link href="/blog" className="text-accent hover:underline">
                  the blog
                </Link>{" "}
                carry that voice, starting with mine.
              </p>
            </div>
          </div>
        )}

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
