import { defineField, defineType } from "sanity";

export const story = defineType({
  name: "story",
  title: "Story (from recovery)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name (as they wish to be credited)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (the URL anchor)",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "milestone",
      title: "Milestone (optional)",
      type: "string",
      description: 'e.g. "5 years sober"',
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
      title: "Full story",
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
  preview: { select: { title: "name", subtitle: "milestone" } },
});
