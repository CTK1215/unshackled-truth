"use client";

/**
 * Sanity Studio configuration — powers the content dashboard at /studio.
 * Project id and dataset come from your .env.local (see README "Connect the CMS").
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemas";

export default defineConfig({
  name: "unshackled-truth",
  title: "Unshackled Truth",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
