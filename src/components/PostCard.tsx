import Link from "next/link";
import type { Post } from "@/lib/types";
import { formatDate } from "@/lib/format";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-bg-elev p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-bg-elev-2"
    >
      <div className="flex items-center gap-3 text-xs">
        <span className="rounded-full border border-accent/30 px-3 py-1 font-medium text-accent">
          {post.category}
        </span>
        <span className="text-fg-subtle">{post.readingMinutes} min read</span>
      </div>

      <h3 className="mt-4 font-display text-2xl font-semibold leading-snug transition-colors group-hover:text-accent">
        {post.title}
      </h3>

      <p className="mt-3 flex-1 text-pretty leading-relaxed text-fg-muted">
        {post.excerpt}
      </p>

      <div className="mt-5 flex items-center justify-between text-sm">
        <span className="text-fg-subtle">{formatDate(post.date)}</span>
        <span className="font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
          Read →
        </span>
      </div>
    </Link>
  );
}
