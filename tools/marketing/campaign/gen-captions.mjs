import { carousels } from "./data.mjs";
import { writeFile } from "node:fs/promises";
const days = { Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday", Sat: "Saturday", Sun: "Sunday" };
let md = `# 7-Day Carousel Campaign: captions + posting schedule\n\nPost 2x daily (8:00 AM and 6:00 PM, your local time). Each carousel is 4 slides, numbered in its folder. Copy the caption below each post as-is (hashtags included). Every CTA points to unshackledtruthmedia.com/links.\n\n| Day | Time | Post | Goal |\n|---|---|---|---|\n`;
for (const c of carousels) md += `| ${days[c.day]} | ${c.slot} | ${c.slug} | ${c.goal} |\n`;
md += `\n---\n`;
for (const c of carousels) {
  md += `\n## ${days[c.day]} ${c.slot} · ${c.slug}\n\n**Goal:** ${c.goal}\n\n**Caption:**\n\n${c.caption}\n\n---\n`;
}
await writeFile("out/captions-and-schedule.md", md);
console.log("captions written");
