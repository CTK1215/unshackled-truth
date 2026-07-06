// Re-check the CMS for new content at most every 60 seconds.
export const revalidate = 60;

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { formatDate } from "@/lib/format";
import { getPost, getPosts } from "@/lib/content";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="py-16 sm:py-24">
      <Container size="narrow">
        <Link
          href="/blog"
          className="text-sm font-medium text-fg-muted transition-colors hover:text-accent"
        >
          ← Back to all posts
        </Link>

        <div className="mt-8 flex items-center gap-3 text-xs">
          <span className="rounded-full border border-accent/30 px-3 py-1 font-medium text-accent">
            {post.category}
          </span>
          <span className="text-fg-subtle">
            {formatDate(post.date)} · {post.readingMinutes} min read
          </span>
        </div>

        <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-pretty text-xl leading-relaxed text-fg-muted">
          {post.excerpt}
        </p>

        <hr className="my-10 border-border" />

        <div
          className="prose-ut"
          dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
        />

        <hr className="my-12 border-border" />
        <p className="text-fg-muted">
          If this reached you, the book goes deeper.{" "}
          <Link href="/the-book" className="font-medium text-accent hover:underline">
            Read Unshackled Truth →
          </Link>
        </p>
      </Container>
    </article>
  );
}
