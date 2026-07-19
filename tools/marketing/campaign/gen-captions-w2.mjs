import { carousels } from "./data-week2.mjs";
import { writeFile } from "node:fs/promises";
const days = { Mon:"Monday",Tue:"Tuesday",Wed:"Wednesday",Thu:"Thursday",Fri:"Friday",Sat:"Saturday",Sun:"Sunday" };
let md = `# Week 2 Carousels: captions + posting schedule\n\nArc: "Back to the beginning." The serialized origin story, connection-first, no product selling. Each carousel is 5 slides; slide 5 is a connection closer that drives story submissions. Post 2x daily (8:00 AM and 6:00 PM local).\n\n| Day | Time | Post | Goal |\n|---|---|---|---|\n`;
for (const c of carousels) md += `| ${days[c.day]||c.day} | ${c.slot} | ${c.slug} | ${c.goal} |\n`;
md += `\n---\n`;
for (const c of carousels) md += `\n## ${days[c.day]||c.day} ${c.slot} · ${c.slug}\n\n**Goal:** ${c.goal}\n\n**Caption:**\n\n${c.caption}\n\n---\n`;
await writeFile("out/week2-captions-and-schedule.md", md);
console.log("week2 captions written");
