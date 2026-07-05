import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./src/sanity/env";

/** Used by the `npx sanity` CLI (e.g. `npx sanity deploy`). */
export default defineCliConfig({
  api: { projectId, dataset },
  autoUpdates: true,
});
