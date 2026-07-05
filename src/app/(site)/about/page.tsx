import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { Figure } from "@/components/Figure";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind ${siteConfig.brand} — ${siteConfig.authorName}'s testimony.`,
};

// Edit this testimony freely — it's placeholder text written to fit the theme.
const testimony: string[] = [
  "I wasn't supposed to make it out of the life I was living. Statistically, a lot of men like me don't. This is the short version of how I did — and why I can't stop talking about it.",
  "I grew up learning that survival meant never showing what was underneath. That armor got me through a childhood it wasn't built to survive, and then it got me into a courtroom, and then it got me a number instead of a name.",
  "Prison is where the armor finally cracked. Not because I was strong, but because I had finally run out of places to hide. On a bottom bunk, out of options and out of myself, I met God — not the God of the parole-board performance, but the one who was there in the dark asking if I was finally ready to be honest.",
  "I was. It didn't fix everything overnight. But it started something that the free world didn't undo when the gate opened. I got clean. I stayed clean. I learned that freedom is a skill you practice, one honest choice at a time.",
  "Now I write, I speak, and I stay in the fight — for the men still inside, for people clawing their way out of addiction, and for anyone who was told their story was already over. It isn't. That's the whole message. That's the unshackled truth.",
];

const facts = [
  { label: "Writing about", value: "Life inside · Faith · Recovery" },
  { label: "Speaking for", value: "Churches · Prisons · Recovery groups" },
  { label: "The book", value: siteConfig.book.title },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-vignette py-16 sm:py-24">
        <Container size="narrow">
          <p className="eyebrow mb-3">About {siteConfig.authorName}</p>
          <h1 className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            From a number back to a name
          </h1>
          <p className="mt-6 text-pretty text-xl leading-relaxed text-fg-muted">
            {siteConfig.tagline}
          </p>
        </Container>
      </section>

      <section className="pb-8">
        <Container size="narrow">
          <div className="grid gap-4 sm:grid-cols-3">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-xl border border-border bg-bg-elev p-5"
              >
                <p className="text-xs uppercase tracking-wider text-fg-subtle">
                  {f.label}
                </p>
                <p className="mt-1.5 font-medium text-fg">{f.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container size="narrow">
          {/* Photo at 16, floated so the testimony wraps around it */}
          <div className="float-right mb-4 ml-6 w-36 sm:w-52">
            <Figure
              src="/chris-at-16.jpg"
              alt="Christopher Kelly at sixteen years old"
              caption="Me at 16 — long before any of this."
              hint="Add /chris-at-16.jpg"
              ratio="aspect-[4/5]"
            />
          </div>

          <div className="prose-ut">
            {testimony.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* First day out — video */}
      <section className="py-8 sm:py-12">
        <Container size="narrow">
          <p className="eyebrow mb-3">The day everything changed</p>
          <h2 className="text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl">
            My first day out
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-fg-muted">
            The gate opens and the whole world is loud and bright and yours
            again. This is that moment — the first day of the rest of a life I
            almost didn&rsquo;t get to live.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-2xl">
            <video
              controls
              preload="metadata"
              poster="/media/first-day-out-poster.jpg"
              className="aspect-video w-full bg-black"
            >
              <source src="/media/first-day-out.mp4" type="video/mp4" />
              Your browser doesn&rsquo;t support embedded video. You can
              <a href="/media/first-day-out.mp4"> download it here</a>.
            </video>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container size="narrow">
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/the-book" size="lg">
              Read the Book
            </ButtonLink>
            <ButtonLink href="/speaking" variant="outline" size="lg">
              Invite Me to Speak
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
