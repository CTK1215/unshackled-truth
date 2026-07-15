// Renders every html/<slug>.html to out/pdf/<slug>.pdf (US Letter) and
// out/covers/<slug>-cover.png (300dpi-equivalent front cover screenshot).
import { chromium } from "playwright-core";
import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const htmlDir = path.join(ROOT, "html");

const only = process.argv.slice(2); // optional slugs filter
const files = (await readdir(htmlDir)).filter(
  (f) => f.endsWith(".html") && (only.length === 0 || only.includes(f.replace(/\.html$/, "")))
);

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const page = await browser.newPage({ viewport: { width: 816, height: 1056 }, deviceScaleFactor: 3 });

for (const f of files) {
  const slug = f.replace(/\.html$/, "");
  await page.goto("file://" + path.join(htmlDir, f), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  // front cover PNG (3x of 816x1056 css px => 2448x3168, ~288dpi)
  const cover = page.locator("#cover");
  await cover.screenshot({ path: path.join(ROOT, "out/covers", `${slug}-cover.png`) });
  // full PDF
  await page.pdf({
    path: path.join(ROOT, "out/pdf", `${slug}.pdf`),
    format: "Letter",
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  });
  console.log(`rendered ${slug}`);
}
await browser.close();
