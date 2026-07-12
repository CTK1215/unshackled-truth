import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CoverImage } from "@/components/CoverImage";
import { SampleChapterForm } from "@/components/SampleChapterForm";
import { ButtonLink } from "@/components/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Read Chapter One Free",
  description: `Get the first chapter of ${siteConfig.book.title} free by email — a true story of prison, addiction, and the God who rewrites finished stories.`,
};

const bullets = [
  "The full first chapter as a PDF, straight to your inbox",
  "Bonus: “The Cracks Don't Define You” — a free 3-part reflection with journaling prompts",
  "The true beginning — no cleaned-up version",
  "No spam. One email with both PDFs, that's it.",
];

export default function FreeChapterPage() {
  return (
    <section className="bg-vignette py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-16">
          {/* Cover */}
          <div className="tilt-cover relative mx-auto w-full max-w-xs md:max-w-sm">
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-accent/10 blur-3xl" />
            <CoverImage
              src={siteConfig.book.coverImage}
              alt={`Cover of ${siteConfig.book.title}`}
              priority
              className="w-full rounded-lg border border-border shadow-2xl"
            />
          </div>

          {/* Pitch + form */}
          <div>
            <p className="eyebrow mb-3">Free Chapter</p>
            <h1 className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Read Chapter One.{" "}
              <span className="italic text-accent">Decide for yourself.</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-fg-muted">
              By sixteen I was drowning in anger, drugs, and violence. This is
              where the story starts — and it doesn&rsquo;t end where everyone
              expected it to. Enter your email and Chapter One is yours, free.
            </p>

            <ul className="mt-6 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-fg-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <SampleChapterForm />
            </div>

            <p className="mt-6 text-sm text-fg-subtle">
              Ready for the whole story?{" "}
              <ButtonLink href="/the-book" variant="ghost" className="!p-0 text-accent underline underline-offset-4">
                Get the full book →
              </ButtonLink>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
