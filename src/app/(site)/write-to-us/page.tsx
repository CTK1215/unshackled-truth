import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { StoryForm } from "@/components/StoryForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Write to Us — Voices from the Inside",
  description:
    "Still inside, or loving someone who is? Send a letter for Voices from the Inside — typed, or photos of handwritten pages. Names used only as you wish.",
};

const reasons = [
  {
    title: "From inside the wall",
    body: "If the book or this site reached you inside, your words may reach the next person. Letters can come through a loved one, typed or photographed.",
  },
  {
    title: "From the ones out here",
    body: "Wives, mothers, sons, friends — loving someone inside is its own sentence, and your side of the story belongs here too.",
  },
  {
    title: "Your name, your call",
    body: "First name, \"somewhere in Texas,\" or anonymous — signed only the way you ask. Last names, ID numbers, and facilities are never published.",
  },
];

export default function WriteToUsPage() {
  return (
    <section className="bg-vignette py-16 sm:py-24">
      <Container size="narrow">
        <p className="eyebrow mb-3">Voices from the Inside</p>
        <h1 className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          The wall doesn&rsquo;t stop a voice.
        </h1>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-fg-muted">
          Some of the truest words on this site were written in a cell. If
          you&rsquo;re inside and something here reached you — or you&rsquo;re
          out here carrying a letter from someone who is — send it in. Type it
          below, or attach photos of the handwritten pages exactly as they are.
          Chris spent decades behind the wall himself; these letters get read
          like they matter, because they do.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {reasons.map((r) => (
            <Reveal key={r.title}>
              <div className="h-full rounded-xl border border-border bg-bg-elev p-5">
                <h2 className="font-display text-lg font-semibold text-accent">
                  {r.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {r.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <StoryForm variant="letter" />
        </div>

        <p className="mt-8 text-sm text-fg-subtle">
          No way to get it online? Letters can be mailed the old way — reach
          out via the contact info in the footer and we&rsquo;ll share the
          address. Made it out and want to tell that story instead? Head to{" "}
          <a href="/share-your-story" className="text-accent hover:underline">
            Share Your Story
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
