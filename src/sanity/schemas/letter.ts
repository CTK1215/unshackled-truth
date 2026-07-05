import { defineField, defineType } from "sanity";

export const letter = defineType({
  name: "letter",
  title: "Letter (from inside)",
  type: "document",
  fields: [
    defineField({
      name: "fromName",
      title: "From (how the writer wishes to be credited)",
      type: "string",
      description: 'e.g. "Marcus, age 34" or "A brother inside"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (the URL anchor)",
      type: "slug",
      options: { source: "fromName", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "fromLocation",
      title: "Facility / location (optional)",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt (short pull-quote)",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(280),
    }),
    defineField({
      name: "body",
      title: "Full letter",
      type: "array",
      of: [{ type: "block" }],
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
  preview: { select: { title: "fromName", subtitle: "fromLocation" } },
});
