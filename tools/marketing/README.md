# Marketing content pipeline

Generates the social carousels and the digital product PDFs for
Unshackled Truth Media. Any Claude session (web, Cowork, desktop) can run
this from a checkout of the repo.

## One-time setup (per machine/session)

```bash
npm install                     # repo deps
cd tools/marketing
npm init -y
npm install @fontsource/fraunces @fontsource/inter playwright-core
```

Playwright needs a Chromium binary. In Claude's cloud sessions one is
preinstalled at `/opt/pw-browsers/chromium`; on a local machine run
`npx playwright install chromium` and update the `executablePath` in the
two `render.mjs` files (or remove it to use the default).

## Carousels (`campaign/`)

- `data.mjs` — every carousel: slides, captions, hashtags, schedule.
  This file IS the campaign; edit or append here.
- `build.mjs` — turns data into 1080x1350 slide HTML (dark + gold brand,
  Fraunces/Inter, CSS mood backgrounds or photos).
- `render.mjs [slug...]` — screenshots each slide to `out/<slug>/`.
- `gen-captions.mjs` — writes `out/captions-and-schedule.md`.

Photo baselines (real photos referenced by some slides) live in the
repo `public/` folder and in the Google Drive "Unshackled Truth Brand"
folder. Slides with `bg: "css-*"` need no images at all.

## Products (`products/`)

- `data/*.mjs` — one module per product: cover copy, intro, days/cards/
  worksheets, closing, back cover. All content sourced from Chris's
  memoir, workbook, and blog essays.
- `build.mjs` — assembles print-ready HTML (US Letter).
- `render.mjs [slug...]` — outputs `out/pdf/<slug>.pdf` and a high-res
  front cover PNG to `out/covers/`.

Finished PDFs are uploaded to Sanity as product file assets (see
`docs/agent-products.md`). The free reflection also ships from
`private/cracks-free-reflection.pdf` via the free-chapter email.

## House rules

- No em dashes anywhere in generated content.
- First-person lines must come from Chris's actual writings.
- Never invent testimonies, letters, or stories.
