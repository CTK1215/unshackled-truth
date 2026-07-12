import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { StoryForm } from "@/components/StoryForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Share Your Story",
  description:
    "Were you incarcerated? In recovery? Your story could be the proof someone needs that change is possible. Send it in — told in your own words.",
};

const reasons = [
  {
    title: "Your story is evidence",
    body: "Somebody out there believes they're too far gone. A story from someone who stood where they're standing is proof they're not.",
  },
  {
    title: "Your words, your name",
    body: "We publish it in your voice, edited only for length and clarity. Use your full name, first name, or ask us to withhold it.",
  },
  {
    title: "Nothing goes up without you",
    body: "Chris reads every submission personally and you'll hear back before anything is published. You can ask for it to come down at any time.",
  },
];

export default function ShareYourStoryPage() {
  return (
    <section className="bg-vignette py-16 sm:py-24">
      <Container size="narrow">
        <p className="eyebrow mb-3">Share Your Story</p>
        <h1 className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          You made it out. Tell somebody how.
        </h1>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-fg-muted">
          This site exists to prove no one is too far gone — and one testimony
          can't prove that alone. If you've been incarcerated, walked through
          addiction, or watched God rebuild a life the world gave up on, your
          story belongs here. Write it below, or attach it as a document, a
          photo of handwritten pages — however it comes out of you.
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
          <StoryForm />
        </div>

        <p className="mt-8 text-sm text-fg-subtle">
          Still inside, or writing for someone who is? Stories can also be
          mailed or sent by a family member — reach out via the contact info in
          the footer and we'll make it work.
        </p>
      </Container>
    </section>
  );
}
