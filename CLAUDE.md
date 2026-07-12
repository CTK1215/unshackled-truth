@AGENTS.md

# Unshackled Truth — project notes

## Repo conventions
- NO AI attribution anywhere: never add "Co-Authored-By", "Generated with",
  session links, or similar AI/tool credits to commit messages, PR titles,
  PR bodies, or code comments. The owner has explicitly opted out.

Personal testimony / author site for a formerly-incarcerated writer: sells his
book (Amazon + direct Stripe eBook), hosts a blog (life inside, God, the free
world, recovery), letters from inmates, recovery stories, an about/testimony
page, and speaking-engagement booking.

## Architecture
- Next.js (App Router) + TypeScript + Tailwind v4. Fonts: Fraunces (display) + Inter.
- Dark, dramatic theme; gold (`--accent`) = light/redemption. Tokens in `src/app/globals.css`.
- `src/app/(site)/` = public pages (share header/footer layout). `src/app/studio/` = Sanity dashboard (no chrome). `src/app/api/` = contact + checkout.
- **`src/lib/site.ts`** = single source of editable facts (name, book, links, contact).
- Content flows through `src/lib/content.ts`: returns `sample-data.ts` until `NEXT_PUBLIC_SANITY_PROJECT_ID` is set, then fetches Sanity via `src/lib/sanity/queries.ts`.
- Services are env-gated with graceful fallbacks: Resend (contact email → logs if unset), Stripe (checkout → friendly notice if unset), Sanity (CMS → sample content + `/studio` setup notice if unset). REST calls, no SDK deps for Stripe/Resend.

## Still placeholder (needs real input from the user)
Author name, book title/subtitle/Amazon ASIN/price, real cover image in `public/`,
contact email+phone, About-page testimony, and real posts/letters/stories via the CMS.
See README "Content checklist".

