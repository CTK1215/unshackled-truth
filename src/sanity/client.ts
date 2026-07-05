import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

/**
 * Read-only Sanity client for fetching published content on the site.
 * Only used when a project id is configured.
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // fast, cached published content
});
