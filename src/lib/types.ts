/** Shared content types used across the site and the CMS data layer. */

export type BlogCategory =
  | "Life Inside"
  | "Faith & God"
  | "The Free World"
  | "Recovery";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  /** ISO date string, e.g. "2026-05-14" */
  date: string;
  readingMinutes: number;
  /** HTML string for the body (sample content). CMS bodies render similarly. */
  bodyHtml: string;
  featured?: boolean;
}

export interface Letter {
  slug: string;
  /** How the writer wishes to be credited, e.g. "Marcus, age 34". */
  fromName: string;
  /** Facility or location, optional — e.g. "State Correctional Facility". */
  fromLocation?: string;
  date: string;
  excerpt: string;
  bodyHtml: string;
}

export interface Story {
  slug: string;
  name: string;
  /** e.g. "5 years sober" */
  milestone?: string;
  date: string;
  excerpt: string;
  bodyHtml: string;
}
