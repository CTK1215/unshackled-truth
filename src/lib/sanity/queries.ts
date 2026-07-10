import { toHTML } from "@portabletext/to-html";
import type { PortableTextBlock } from "@portabletext/types";
import { sanityClient } from "@/sanity/client";
import type {
  Post,
  Letter,
  Story,
  BlogCategory,
  Product,
  ProductCategory,
} from "../types";

/**
 * Real CMS queries. These run only when NEXT_PUBLIC_SANITY_PROJECT_ID is set
 * (see src/lib/content.ts). They fetch documents from the Sanity dashboard and
 * map them into the same shapes the pages already use, so nothing else changes.
 */

/** Rough reading-time estimate from the rendered text. */
function readingMinutes(html: string): number {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function bodyToHtml(body: PortableTextBlock[] | undefined): string {
  if (!body) return "";
  return toHTML(body, {
    components: {
      block: {
        blockquote: ({ children }) => `<blockquote>${children}</blockquote>`,
      },
    },
  });
}

interface RawDoc {
  slug?: { current?: string };
  date?: string;
  excerpt?: string;
  body?: PortableTextBlock[];
}

interface RawPost extends RawDoc {
  title?: string;
  category?: BlogCategory;
  featured?: boolean;
}
interface RawLetter extends RawDoc {
  fromName?: string;
  fromLocation?: string;
}
interface RawStory extends RawDoc {
  name?: string;
  milestone?: string;
}

export async function fetchPosts(): Promise<Post[]> {
  const docs = await sanityClient.fetch<RawPost[]>(
    `*[_type == "post"] | order(date desc){
      title, slug, category, date, excerpt, featured, body
    }`,
  );
  return docs.map((d) => {
    const bodyHtml = bodyToHtml(d.body);
    return {
      slug: d.slug?.current ?? "",
      title: d.title ?? "Untitled",
      excerpt: d.excerpt ?? "",
      category: (d.category ?? "Life Inside") as BlogCategory,
      date: d.date ?? "",
      featured: Boolean(d.featured),
      readingMinutes: readingMinutes(bodyHtml),
      bodyHtml,
    };
  });
}

export async function fetchLetters(): Promise<Letter[]> {
  const docs = await sanityClient.fetch<RawLetter[]>(
    `*[_type == "letter"] | order(date desc){
      fromName, fromLocation, slug, date, excerpt, body
    }`,
  );
  return docs.map((d) => ({
    slug: d.slug?.current ?? "",
    fromName: d.fromName ?? "Anonymous",
    fromLocation: d.fromLocation,
    date: d.date ?? "",
    excerpt: d.excerpt ?? "",
    bodyHtml: bodyToHtml(d.body),
  }));
}

export async function fetchStories(): Promise<Story[]> {
  const docs = await sanityClient.fetch<RawStory[]>(
    `*[_type == "story"] | order(date desc){
      name, milestone, slug, date, excerpt, body
    }`,
  );
  return docs.map((d) => ({
    slug: d.slug?.current ?? "",
    name: d.name ?? "Anonymous",
    milestone: d.milestone,
    date: d.date ?? "",
    excerpt: d.excerpt ?? "",
    bodyHtml: bodyToHtml(d.body),
  }));
}

/* ------------------------------- Products ------------------------------ */

interface RawProduct {
  slug?: { current?: string };
  title?: string;
  category?: ProductCategory;
  tagline?: string;
  description?: string;
  priceUsd?: number;
  imageUrl?: string;
  fileUrl?: string;
  externalUrl?: string;
  featured?: boolean;
  date?: string;
}

const PRODUCT_PROJECTION = `{
  title, slug, category, tagline, description, priceUsd, externalUrl,
  featured, date,
  "imageUrl": coverImage.asset->url,
  "fileUrl": file.asset->url
}`;

function mapProduct(d: RawProduct): Product {
  return {
    slug: d.slug?.current ?? "",
    title: d.title ?? "Untitled",
    category: (d.category ?? "Other") as ProductCategory,
    tagline: d.tagline,
    description: d.description ?? "",
    priceUsd: d.priceUsd,
    imageUrl: d.imageUrl,
    hasFile: Boolean(d.fileUrl),
    externalUrl: d.externalUrl,
    featured: Boolean(d.featured),
    date: d.date ?? "",
  };
}

export async function fetchProducts(): Promise<Product[]> {
  const docs = await sanityClient.fetch<RawProduct[]>(
    `*[_type == "product"] | order(featured desc, date desc) ${PRODUCT_PROJECTION}`,
  );
  return docs.map(mapProduct);
}

/** Server-only: fetch one product including its private file URL. */
export async function fetchProductWithFile(
  slug: string,
): Promise<(Product & { fileUrl?: string }) | null> {
  const d = await sanityClient.fetch<RawProduct | null>(
    `*[_type == "product" && slug.current == $slug][0] ${PRODUCT_PROJECTION}`,
    { slug },
  );
  if (!d) return null;
  return { ...mapProduct(d), fileUrl: d.fileUrl };
}
