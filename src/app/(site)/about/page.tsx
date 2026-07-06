import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { Figure } from "@/components/Figure";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind ${siteConfig.brand} — ${siteConfig.authorName}'s testimony.`,
};

// Your testimony, drawn from the book's back cover. Edit freely to expand it.
const testimony: string[] = [
  "From prison cells to freedom in Christ — my life is proof that no one is too far gone. What once defined me was crime, addiction, and shame. What defines me now is grace, redemption, and a God who never let go.",
  "I grew up in the wreckage of addiction, abuse, and broken promises. By the time I was sixteen, I was already drowning in anger, drugs, and violence — running from a wound I didn't know how to name. That wound led me to prison, where I believed “life meant life,” and hope had no place.",
  "But even in the darkest cells, God was there. His grace broke through the cracks in my rebellion, rewriting a story I thought was finished. Over time, I came to know the God who heals, forgives, and restores. He didn't just change my circumstances — He changed me.",
  "Now I write, I speak, and I stay in the fight — for the men still inside, for people clawing their way out of addiction, and for anyone who was told their story was already over. It isn't. If you have ever felt forgotten, unworthy, or trapped in cycles you can't escape, my story is living proof: grace still breaks chains.",
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
          {/* Then & now, floated so the testimony wraps around them */}
          <div className="float-right mb-4 ml-6 flex w-36 flex-col gap-5 sm:w-52">
            <Figure
              src="/chris-at-16.jpg"
              alt="Christopher Kelly at sixteen years old"
              caption="Me at 16 — already drowning, long before prison."
              hint="Add /chris-at-16.jpg"
              ratio="aspect-[4/5]"
            />
            <Figure
              src="/chris-now.jpg"
              alt="Christopher Kelly today"
              caption="Me now — living proof grace still breaks chains."
              hint="Add /chris-now.jpg"
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
