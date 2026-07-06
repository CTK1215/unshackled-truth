import type { Post, Letter, Story } from "./types";
import { samplePosts, sampleLetters, sampleStories } from "./sample-data";

/**
 * ============================================================================
 *  CONTENT DATA LAYER
 * ============================================================================
 *  Every page reads content through these functions. Today they return the
 *  sample content in ./sample-data.ts so the site runs with zero setup.
 *
 *  When the Sanity CMS is connected (see README "Connect the CMS"), these
 *  functions fetch your real posts/letters/stories from the dashboard instead.
 *  The swap happens in one place — pages never change.
 * ============================================================================
 */

/** True once a Sanity project id is present in the environment. */
export function isCmsConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
}

const byDateDesc = <T extends { date: string }>(a: T, b: T) =>
  b.date.localeCompare(a.date);

/* ----------------------------- Blog posts ------------------------------ */

export async function getPosts(): Promise<Post[]> {
  if (isCmsConfigured()) {
    const { fetchPosts } = await import("./sanity/queries");
    const posts = await fetchPosts();
    // Until the first real post is published, keep showing the samples so the
    // site never looks empty.
    if (posts.length > 0) return posts;
  }
  return [...samplePosts].sort(byDateDesc);
}

export async function getFeaturedPosts(limit = 3): Promise<Post[]> {
  const posts = await getPosts();
  const featured = posts.filter((p) => p.featured);
  return (featured.length ? featured : posts).slice(0, limit);
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

/* ------------------------------- Letters ------------------------------- */

export async function getLetters(): Promise<Letter[]> {
  if (isCmsConfigured()) {
    const { fetchLetters } = await import("./sanity/queries");
    const letters = await fetchLetters();
    if (letters.length > 0) return letters;
  }
  return [...sampleLetters].sort(byDateDesc);
}

export async function getLetter(slug: string): Promise<Letter | null> {
  const letters = await getLetters();
  return letters.find((l) => l.slug === slug) ?? null;
}

/* ------------------------------- Stories ------------------------------- */

export async function getStories(): Promise<Story[]> {
  if (isCmsConfigured()) {
    const { fetchStories } = await import("./sanity/queries");
    const stories = await fetchStories();
    if (stories.length > 0) return stories;
  }
  return [...sampleStories].sort(byDateDesc);
}

export async function getStory(slug: string): Promise<Story | null> {
  const stories = await getStories();
  return stories.find((s) => s.slug === slug) ?? null;
}
