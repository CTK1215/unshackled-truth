import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Everything Unshackled Truth Media in one tap — the free chapter, the book, the store, and how to share your story.",
};

/**
 * The link-in-bio landing page (unshackledtruthmedia.com/links).
 * Social profiles point here; every destination is one tap away.
 */
const links = [
  {
    href: "/free-chapter",
    emoji: "📖",
    title: "Read Chapter One Free",
    sub: "The start of the story, straight to your inbox",
    featured: true,
  },
  {
    href: "/the-book",
    emoji: "📕",
    title: "Get the Book",
    sub: `${siteConfig.book.title} — paperback, Kindle & Kindle Unlimited`,
    featured: false,
  },
  {
    href: "/store",
    emoji: "🛒",
    title: "The Store",
    sub: "The First 30 recovery journal, the workbook & more",
    featured: false,
  },
  {
    href: "/share-your-story",
    emoji: "✍️",
    title: "Share Your Story",
    sub: "Made it out? Your story could free the next person",
    featured: false,
  },
  {
    href: "/speaking",
    emoji: "🎤",
    title: "Book Me to Speak",
    sub: "Churches, recovery groups, prisons & re-entry programs",
    featured: false,
  },
];

export default function LinksPage() {
  return (
    <section className="bg-vignette py-14 sm:py-20">
      <Container size="narrow">
        <div className="mx-auto max-w-md">
          {/* Header */}
          <div className="text-center">
            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-accent/60">
              <Image
                src="/chris-now.jpg"
                alt={siteConfig.authorName}
                fill
                className="object-cover"
                sizes="96px"
                priority
              />
            </div>
            <h1 className="mt-4 font-display text-3xl font-semibold">
              {siteConfig.authorName}
            </h1>
            <p className="mt-2 text-pretty leading-relaxed text-fg-muted">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="mt-8 space-y-3.5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-0.5 ${
                  l.featured
                    ? "border-accent bg-accent/10 hover:bg-accent/15"
                    : "border-border bg-bg-elev hover:border-accent/50"
                }`}
              >
                <span className="text-2xl" aria-hidden>
                  {l.emoji}
                </span>
                <span className="min-w-0">
                  <span
                    className={`block font-display text-lg font-semibold ${
                      l.featured ? "text-accent" : "text-fg"
                    }`}
                  >
                    {l.title}
                  </span>
                  <span className="block text-sm text-fg-muted">{l.sub}</span>
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-fg-subtle">
            Grace still breaks chains.
          </p>
        </div>
      </Container>
    </section>
  );
}
