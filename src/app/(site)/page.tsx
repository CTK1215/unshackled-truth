import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { PostCard } from "@/components/PostCard";
import { QuoteCard } from "@/components/QuoteCard";
import { siteConfig } from "@/lib/site";
import { getFeaturedPosts, getLetters, getStories } from "@/lib/content";

export default async function HomePage() {
  const [posts, letters, stories] = await Promise.all([
    getFeaturedPosts(3),
    getLetters(),
    getStories(),
  ]);
  const featuredLetter = letters[0];
  const featuredStory = stories[0];

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-vignette relative overflow-hidden">
        <Container className="relative py-24 sm:py-32 md:py-40">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow mb-5">Testimony · Recovery · Redemption</p>
            <h1 className="text-balance font-display text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
              The truth,{" "}
              <span className="italic text-accent">unshackled</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted sm:text-xl">
              {siteConfig.tagline}{" "}
              A story that starts in a cell and doesn&rsquo;t end there — written
              for the men still inside, the ones fighting to stay clean, and
              anyone who needs proof that a life can be rebuilt.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/the-book" size="lg">
                Read the Book
              </ButtonLink>
              <ButtonLink href="/about" variant="outline" size="lg">
                My Story
              </ButtonLink>
            </div>
          </div>
        </Container>
        {/* bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* BOOK FEATURE                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/10 blur-2xl" />
              <Image
                src={siteConfig.book.coverImage}
                alt={`Cover of ${siteConfig.book.title}`}
                width={600}
                height={900}
                priority
                className="w-full rounded-lg border border-border shadow-2xl"
              />
            </div>
            <div>
              <p className="eyebrow mb-3">The Book</p>
              <h2 className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl">
                {siteConfig.book.title}
              </h2>
              <p className="mt-2 text-xl italic text-fg-muted">
                {siteConfig.book.subtitle}
              </p>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-fg-muted">
                {siteConfig.book.description.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/the-book" size="lg">
                  Get Your Copy
                </ButtonLink>
                <ButtonLink
                  href={siteConfig.book.amazonUrl}
                  variant="outline"
                  size="lg"
                  external
                >
                  Buy on Amazon
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* VOICES — letter + story side by side                            */}
      {/* ---------------------------------------------------------------- */}
      {(featuredLetter || featuredStory) && (
        <section className="border-y border-border bg-bg-elev py-20 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="Voices"
              title="The words are getting through"
              intro="Letters from men still inside, and stories from people finding their way back. This is who the work is for."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {featuredLetter && (
                <QuoteCard
                  href={`/letters#${featuredLetter.slug}`}
                  excerpt={featuredLetter.excerpt}
                  attribution={featuredLetter.fromName}
                  meta="From inside"
                  date={featuredLetter.date}
                />
              )}
              {featuredStory && (
                <QuoteCard
                  href={`/stories#${featuredStory.slug}`}
                  excerpt={featuredStory.excerpt}
                  attribution={featuredStory.name}
                  meta={featuredStory.milestone}
                  date={featuredStory.date}
                />
              )}
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm">
              <Link href="/letters" className="font-medium text-accent hover:underline">
                Read all letters →
              </Link>
              <Link href="/stories" className="font-medium text-accent hover:underline">
                Read all stories →
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* LATEST WRITING                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="From the Blog"
              title="Life inside, God, and the free world"
              intro="Honest writing from a life on both sides of the wall."
            />
            <Link
              href="/blog"
              className="shrink-0 font-medium text-accent hover:underline"
            >
              All posts →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* SPEAKING CTA                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-vignette px-8 py-16 text-center sm:px-16">
            <p className="eyebrow mb-4">Speaking & Events</p>
            <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Bring this testimony to your church, recovery group, or event
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-fg-muted">
              Prisons, re-entry programs, recovery meetings, youth groups,
              congregations — wherever people need to hear that change is real.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/speaking" size="lg">
                Book a Speaking Engagement
              </ButtonLink>
              <ButtonLink
                href={`mailto:${siteConfig.contact.email}`}
                variant="outline"
                size="lg"
              >
                Email {siteConfig.authorName.split(" ")[0]}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
