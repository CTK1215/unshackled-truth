import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Honest writing about life inside, faith and God, the free world, and recovery.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">The Blog</p>
          <h1 className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Notes from both sides of the wall
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-fg-muted">
            Writing about life inside, God, recovery, and learning to live in the
            free world. New posts land here as they&rsquo;re written.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="mt-16 text-fg-muted">
            No posts yet — check back soon.
          </p>
        ) : (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
