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
  brand: "Unshackled Truth Media",

  /** One-line description used for SEO and social previews. */
  tagline:
    "From prison cells to freedom in Christ — proof that no one is too far gone.",

  /** Full URL of the live site (used for SEO metadata). */
  url: "https://unshackledtruthmedia.com",

  /** ---- The Book ------------------------------------------------------- */
  book: {
    title: "The Cracks Beneath the Surface",
    subtitle:
      "Unmasking the Lies, Confronting the Pain, and Finding God in the Midst of It All",
    // Save your real cover as public/book-cover.jpg. Until that file exists,
    // the site automatically shows the styled placeholder instead.
    coverImage: "/book-cover.jpg",
    // Clean canonical Amazon product link (ASIN B0G1HZQ5JL):
    amazonUrl: "https://www.amazon.com/dp/B0G1HZQ5JL",
    // Price for the direct eBook/PDF sale on this site (USD):
    ebookPriceUsd: 6.99,
    // The PDF in the private/ folder for direct-sale delivery:
    ebookFileName: "the-cracks-beneath-the-surface.pdf",
    // The free sample chapter (email-gated). Export Chapter One as a PDF and
    // save it as private/sample-chapter.pdf to switch the funnel on.
    sampleChapterFileName: "sample-chapter.pdf",
    // The real back-cover description:
    description: [
      "I grew up in the wreckage of addiction, abuse, and broken promises. By the time I was sixteen, I was already drowning in anger, drugs, and violence — running from a wound I didn't know how to name. That wound led me to prison, where I believed “life meant life,” and hope had no place.",
      "But even in the darkest cells, God was there. His grace broke through the cracks in my rebellion, rewriting a story I thought was finished. Over time, I came to know the God who heals, forgives, and restores. He didn't just change my circumstances — He changed me.",
      "This book is not theory. It is testimony. It is the story of a man who murdered, who was lost, who thought he was beyond repair — and of a God who brings beauty out of ashes. If you have ever felt forgotten, unworthy, or trapped in cycles you can't escape, my story is living proof: grace still breaks chains.",
    ],
  },

  /** ---- The Workbook (fillable PDF, sold directly on this site) --------- */
  workbook: {
    title: "Unshackled Truth",
    subtitle: "A Faith-Based Workbook for Breaking Free",
    // Price for the direct fillable-PDF sale on this site (USD) — change this
    // one line to adjust it:
    priceUsd: 9.99,
    // The PDF in the private/ folder for direct-sale delivery:
    fileName: "unshackled-truth-workbook.pdf",
    description: [
      "This isn't a workbook of nice thoughts to skim through — it's a tool for real change. Eighteen weeks of guided study, reflection, and honest work: who God is, identity in Christ, grace over shame, breaking strongholds, overcoming temptation, and finishing the race.",
      "Every page is fillable — type your answers right into the PDF on a phone, tablet, or computer, or print it and write by hand. Work through it alone, with a mentor, or in a group.",
    ],
    highlights: [
      "18 weekly studies — 136 pages",
      "Fillable PDF — type in it or print it",
      "Built for recovery, one week at a time",
    ],
  },

  /** ---- Contact / Speaking --------------------------------------------- */
  contact: {
    // Public email shown on the site (you're setting this address up now):
    email: "Chris@UnshackledTruthMedia.com",
    phone: "(909) 353-7661",
    // Where speaking-inquiry form submissions are emailed. Keep this as your
    // Gmail until Chris@UnshackledTruthMedia.com is live, then switch it.
    inquiryEmail: "ctkelly1277@gmail.com",
  },

  /** ---- Social links (leave "" to hide) -------------------------------- */
  social: {
    tiktok: "",
    instagram: "",
    facebook: "",
    youtube: "",
    x: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
