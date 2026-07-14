// Re-check the CMS for new content at most every 60 seconds.
export const revalidate = 60;

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
          <Link href="/share-your-story" className="text-accent hover:underline">
            Send it in
          </Link>
          .
        </p>

        {stories.length === 0 && (
          <div className="mt-14 rounded-2xl border border-border bg-bg-elev p-8 sm:p-10">
            <h2 className="font-display text-2xl font-semibold">
              This page is waiting for its first story. On purpose.
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-fg-muted">
              <p>
                Nothing on this page will ever be invented. Every story
                published here will be a real one, from a real person in
                recovery or rebuilding after prison, shared with their
                permission, named or anonymous as they choose. Until those
                stories arrive, this page stays honest and stays open.
              </p>
              <p>
                Why it matters: advice is cheap, but proof is priceless.
                Somebody on their first day clean needs to hear from somebody
                on their thousandth. Somebody&rsquo;s first night in a cell
                needs to know a man served twenty-seven years and came home
                free. Your story could be that proof.
              </p>
              <p>
                If you made it out, of addiction, of prison, of the life,{" "}
                <Link
                  href="/share-your-story"
                  className="text-accent hover:underline"
                >
                  share your story
                </Link>
                . Written or recorded, polished or raw. In the meantime, my own
                story is on the{" "}
                <Link href="/about" className="text-accent hover:underline">
                  About page
                </Link>{" "}
                and in{" "}
                <Link href="/blog" className="text-accent hover:underline">
                  the blog
                </Link>
                , and I&rsquo;ll go first as many times as it takes.
              </p>
            </div>
          </div>
        )}

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
