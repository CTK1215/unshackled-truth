import type { SchemaTypeDefinition } from "sanity";
import { post } from "./post";
import { letter } from "./letter";
import { story } from "./story";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, letter, story],
};
