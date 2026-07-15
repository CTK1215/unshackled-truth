# Unshackled Truth Media — project state handoff

Last updated: 2026-07-14. Read this first in any new session (Cowork,
desktop, or web). It is the single source of truth for where everything
stands. Keep it updated when major state changes.

## Who and what

Chris Kelly (ctkelly1277@gmail.com): sentenced to life at 16, served 27
years, clean since September 2016, paroled 2021, home and free. Author of
the memoir "The Cracks Beneath the Surface" and the 18-week "Unshackled
Truth" workbook. This project is his site, store, content engine, and
ministry: reach visitors, sell products, help people in crisis.

## Standing working agreements (Chris's own instructions)

- Brutal honesty; push back when needed; we are a team.
- NO em dashes in anything, ever.
- Never invent content presented as real (no fake testimonies/letters).
- All first-person content comes from his memoir, workbook, and essays.
- No AI attribution in commits/PRs (see CLAUDE.md).
- Accuracy of biographical facts is paramount; when a number or date is
  uncertain, ask him.

## Key facts used across content (Chris-confirmed unless noted)

Sentenced at 16 (newspaper photo year 1999: INFERRED, confirm); 36-to-life
deal at 18; ~27 years served across 6 prisons; 18 years of heroin; clean
Sept 2016 with no withdrawal; paroled 2021, parole ended May 2022; two
degrees earned inside; engaged to Tina; building an RCFE and this ministry.
OPEN QUESTION he raised: the "23 years I believed them" line (from his
Hope essay) vs the 27-year timeline: he may want the split framed as
"lost for 23, serving God for the last 4". Await his exact framing before
reusing that number.

## Infrastructure map

- Site: unshackledtruthmedia.com. Next.js repo CTK1215/unshackled-truth,
  deployed by Vercel on merge to main. Branch used by Claude:
  claude/blog-drafts-drive-studio-3hivi1 (PRs #9-#12 all merged).
- CMS: Sanity project uu8dd45m, dataset production. Products/posts flow
  live within 60s of publishing, no deploy needed. Programmatic product
  creation documented in docs/agent-products.md; binary asset upload
  needs a write token Chris has not yet created.
- Email: Resend (free-chapter funnel sends Chapter One + the free
  reflection PDF from private/). UNVERIFIED end to end: Chris should
  test-signup and confirm delivery.
- Payments: Stripe checkout for store products; delivery after payment.
- Google Drive: "Unshackled Truth Brand" folder (id
  16bHJCs4hMUB_97E7slovu4UY6Yy4ZXcm) with subfolders: Week 1 Carousels
  (docs), Products (docs), "Analytics Drop (put Metricool CSV exports
  here)" (id 1-fVy0l_B5BUOQZH-mqytiMFqm9_cXAaW), Video Scripts Batch 1.
- Notion: "Unshackled Truth Product Dashboard" + Product/Launch/Content/
  Task trackers. Products were built from the Product Tracker.
- Zapier: connected with Instagram for Business (publish photos = can
  post carousels), Facebook Pages, YouTube, Google Business Profile.
  Google Drive actions enabled but NOT authenticated (auth link needed).
- Metricool: STARTER plan (no API). Chris schedules manually; TikTok,
  IG, FB connected there. Analytics arrive via CSV export into the
  Analytics Drop folder.
- Higgsfield: Plus plan. 12 photoreal brand scenes + 14 painterly scenes
  live in his generation history (downloadable into Drive; this cloud
  workspace cannot fetch their CDN directly: network policy).

## Products (7 built; PDFs delivered in chat bundle + source in tools/marketing)

Published on store: The Cracks Don't Define You 7-Day Journal $12.99
(file+cover attached by Chris); The Cracks Don't Define You: Free
Reflection (external link card to /free-chapter).
Drafts awaiting file+cover attach in Studio: Stand in the Gap Prayer
Cards $9.99; Faith Over Fear Truth Cards $9.99; Grace Over Shame 5-Day
Devotional $12.99; Stop Running Worksheet $6.99; Launch Point 30-Day
Planner $24.99.
PENDING DECISION: price cut proposal (cards to $4.99, Grace Over Shame
to $9.99, Stop Running to $4.99). Proposed, not yet approved.
Lead magnet: private/cracks-free-reflection.pdf ships in free-chapter
email (live). Etsy/Stan listing copy: Drive "Product Listing Copy" doc.

## Content engine

- Week 1: 14 carousels (56 slides) + bonus free-download carousel +
  share-your-story CTA carousel: delivered as zips in chat and partially
  posted by Chris (TikTok best channel; lie-vs-truth format best
  engagement). Captions/schedule: Drive doc "Week 1 Captions + Posting
  Schedule".
- Pipeline source now lives in tools/marketing (see its README).
- WEEKLY LOOP: a Routine fires into the Claude Code web session every
  Monday 01:00 UTC (Sunday evening Pacific): reads Analytics Drop CSVs,
  pulls IG/FB via Zapier, writes a performance report, builds the next
  week as a CONTINUOUS SERIALIZED STORY through the memoir chronology,
  writes 2 reel scripts, delivers to Drive + chat. Trigger id
  trig_015xafvYR3QWsxZ8HJPbN8VZ (owned by the web session, not Cowork).
- Video: 6 teleprompter scripts in Drive ("Video Scripts: Batch 1").
  Chris to film one 45-min sitting + 60s casual clip + 2-3 min reading
  (for future voice clone). Reels outperform carousels on Facebook.
- TikTok: ~7K followers. Plan: signed paperbacks via TikTok Shop, weekly
  LIVE (gifts), push to 10K for Creator Rewards. PDFs cannot be sold on
  TikTok Shop (policy).

## Site integrity rules implemented

- Sample/fake content only renders when the CMS is unconfigured (local
  dev). /stories and /letters show honest empty states until real
  permissioned submissions arrive (PR #12).
- Free offer is visible at /links (top button), /free-chapter (Two Free
  PDFs framing), and the store (free card).

## Open items

1. Chris: test the free-chapter email end to end.
2. Chris: attach files+covers to 5 product drafts (or provide Sanity
   write token for Claude to do it), after the pricing decision.
3. Chris: film Batch 1 videos; drop in Drive.
4. Chris: weekly: Metricool CSV into Analytics Drop; schedule new batch.
5. Chris: decide on 12 Higgsfield photoreal images (download into Drive
   for photo-backed slide re-render) or stay with CSS backgrounds.
6. Claude: Week 2 batch fires automatically Sunday.
7. Ideas parked: Etsy wall-art line, voice clone + reels, AI avatar
   (sparingly, with disclosure), offline prison RAG companion, Metricool
   Advanced API autopilot, "Pocket Pack" bundle.
