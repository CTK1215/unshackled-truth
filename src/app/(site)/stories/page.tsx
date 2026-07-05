import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { formatDate } from "@/lib/format";
import { getStories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Stories from people in recovery who found their way back — in their own words.",
};

export default async function StoriesPage() {
  const stories = await getStories();

  return (
    <section className="py-16 sm:py-24">
      <Container size="narrow">
        <p className="eyebrow mb-3">Stories</p>
        <h1 className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Stories from the way back
        </h1>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-fg-muted">
          People in recovery, telling the truth about how they got here. Every
          one of these is proof for someone who needs it today. Want to share
          yours?{" "}
          <Link href="/speaking" className="text-accent hover:underline">
            Send it in
          </Link>
          .
        </p>

        <div className="mt-14 space-y-10">
          {stories.map((story) => (
            <article
              key={story.slug}
              id={story.slug}
              className="scroll-mt-24 rounded-2xl border border-border bg-bg-elev p-7 sm:p-9"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-display text-2xl font-semibold text-accent">
                  {story.name}
                </p>
                {story.milestone && (
                  <span className="rounded-full border border-accent/30 px-3 py-1 text-xs font-medium text-accent">
                    {story.milestone}
                  </span>
                )}
              </div>
              <div
                className="prose-ut mt-5"
                dangerouslySetInnerHTML={{ __html: story.bodyHtml }}
              />
              <p className="mt-5 text-sm text-fg-subtle">
                {formatDate(story.date)}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
