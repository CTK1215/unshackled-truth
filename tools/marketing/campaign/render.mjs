import { chromium } from "playwright-core";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const only = process.argv.slice(2);
const files = (await readdir(path.join(ROOT, "html"))).filter(
  (f) => f.endsWith(".html") && (only.length === 0 || only.includes(f.replace(/\.html$/, "")))
);
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
for (const f of files) {
  const slug = f.replace(/\.html$/, "");
  const dir = path.join(ROOT, "out", slug);
  await mkdir(dir, { recursive: true });
  await page.goto("file://" + path.join(ROOT, "html", f), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  for (let i = 0; i < 4; i++) {
    const el = page.locator(`#s${i}`);
    await el.screenshot({ path: path.join(dir, `${slug}-slide${i + 1}.png`) });
  }
  console.log("rendered", slug);
}
await browser.close();
