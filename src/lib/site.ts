/**
 * ============================================================================
 *  SITE CONFIG  —  Edit this file to update the basic facts across the site.
 * ============================================================================
 *  This is the single place to change your name, book details, links, and
 *  contact info. Everything on the site reads from here.
 *
 *  Items still marked "TODO / confirm" below need your exact wording — update
 *  them and re-deploy (a one-line change each).
 * ============================================================================
 */

export const siteConfig = {
  /** Your public/author name as it should appear on the site. */
  authorName: "Christopher Kelly",

  /**
   * Brand name shown in the header/logo and titles.
   * NOTE: This is your overall brand/ministry name (from the project name).
   * Your BOOK is "The Cracks Beneath the Surface" (set below). If you'd rather
   * the whole site be named after the book or yourself, change this one line.
   */
  brand: "Unshackled Truth",

  /** One-line description used for SEO and social previews. */
  tagline:
    "One man's testimony from behind bars to the free world — the truth, unshackled.",

  /** Full URL of the live site once deployed (used for SEO metadata). */
  url: "https://unshackledtruth.com",

  /** ---- The Book ------------------------------------------------------- */
  book: {
    title: "The Cracks Beneath the Surface",
    // TODO / confirm: replace with your exact subtitle from the cover.
    subtitle: "Unmasking and Confronting the Struggles We Hide",
    // Placeholder for now. To use your real cover: save the image as
    // public/book-cover.jpg and change this line to "/book-cover.jpg".
    coverImage: "/book-cover-placeholder.svg",
    // Clean canonical Amazon product link (ASIN B0G1HZQ5JL):
    amazonUrl: "https://www.amazon.com/dp/B0G1HZQ5JL",
    // Price for the direct eBook/PDF sale on this site (USD) — confirm this:
    ebookPriceUsd: 9.99,
    // The PDF you upload to the private/ folder for direct-sale delivery:
    ebookFileName: "the-cracks-beneath-the-surface.pdf",
    // TODO / confirm: paste your real back-cover description (1–3 paragraphs).
    description: [
      "We all learn to smooth things over on top — to look fine, to look faithful, to look fine. But the cracks beneath the surface don't disappear just because we've painted over them.",
      "This is an honest, unflinching look at the struggles we hide, and how facing them in the light of God is the only way they ever truly heal.",
    ],
  },

  /** ---- Contact / Speaking --------------------------------------------- */
  contact: {
    // TODO / confirm: the email + phone you want shown publicly on the site.
    email: "you@unshackledtruth.com",
    phone: "(555) 123-4567",
    // Where speaking-inquiry form submissions are emailed (your inbox):
    inquiryEmail: "ctkelly1277@gmail.com",
  },

  /** ---- Social links (leave "" to hide) -------------------------------- */
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
    x: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
