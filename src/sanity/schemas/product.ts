import { defineField, defineType } from "sanity";

/**
 * A product sold (or announced) in the site store: journals, reflection
 * guides, card packs, devotionals, and other resources. Created either in the
 * Studio dashboard or programmatically via the Sanity HTTP API (see
 * docs/agent-products.md for the agent integration).
 */
export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (the URL / checkout id)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Journal",
          "Reflection Guide",
          "Card Pack",
          "Devotional",
          "Workbook",
          "Other",
        ],
        layout: "dropdown",
      },
      initialValue: "Journal",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline (one line shown under the title)",
      type: "string",
      validation: (r) => r.max(140),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (r) => r.required().max(1000),
    }),
    defineField({
      name: "priceUsd",
      title: "Price (USD)",
      type: "number",
      description: "Leave empty for a not-yet-for-sale “coming soon” product.",
      validation: (r) => r.min(0).max(500),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "file",
      title: "Product file (PDF delivered after purchase)",
      type: "file",
      options: { accept: ".pdf" },
      description:
        "Required to sell the product directly on the site. Delivered only after a verified Stripe payment.",
    }),
    defineField({
      name: "externalUrl",
      title: "External buy link (optional)",
      type: "url",
      description:
        "If this product is sold elsewhere (e.g. Amazon), link it here instead of/in addition to the direct file.",
    }),
    defineField({
      name: "featured",
      title: "Feature at the top of the store?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "date",
      title: "Listed date",
      type: "date",
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (r) => r.required(),
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
});
