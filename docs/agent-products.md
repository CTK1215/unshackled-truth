# Connecting a product-creation agent to the store

The store page (`/store`) lists every `product` document in the Sanity CMS.
Any tool that can make HTTP requests — including a GPT/Claude agent — can
create products by calling Sanity's API with a write token. The site re-checks
the CMS every 60 seconds, so new products appear on the live site
automatically. **No code changes or deploys needed.**

## One-time setup (Chris does this once)

1. Go to https://www.sanity.io/manage/project/uu8dd45m
2. **API** tab → **Tokens** → **Add API token**
   - Name: `product-agent`
   - Permissions: **Editor**
3. Copy the token (starts with `sk...`) and give it to the agent **privately**
   (paste it into the agent's configuration — never into a public chat, a
   website, or this repository).

> Treat this token like a password: it can write to your CMS. If it ever
> leaks, delete it on the same page and make a new one.

## What the agent needs to know (paste this section to the agent)

You can publish products to the Unshackled Truth Media store via the Sanity
Content API. Project `uu8dd45m`, dataset `production`. Authenticate every
request with `Authorization: Bearer <TOKEN>`.

### 1. Upload the product PDF

```
POST https://uu8dd45m.api.sanity.io/v2024-10-01/assets/files/production
Content-Type: application/pdf
Authorization: Bearer <TOKEN>

<raw PDF bytes>
```

The response contains `document._id` (e.g. `file-abc123-pdf`). Keep it.

### 2. Upload the cover image (optional but recommended)

```
POST https://uu8dd45m.api.sanity.io/v2024-10-01/assets/images/production
Content-Type: image/jpeg   (or image/png)
Authorization: Bearer <TOKEN>

<raw image bytes>
```

The response contains `document._id` (e.g. `image-def456-1200x1600-jpg`).

### 3. Create the product document

```
POST https://uu8dd45m.api.sanity.io/v2024-10-01/data/mutate/production
Content-Type: application/json
Authorization: Bearer <TOKEN>

{
  "mutations": [
    {
      "create": {
        "_type": "product",
        "title": "Grace Over Shame Journal",
        "slug": { "_type": "slug", "current": "grace-over-shame-journal" },
        "category": "Journal",
        "tagline": "90 days of guided writing for the road out.",
        "description": "One to three sentences describing the product.",
        "priceUsd": 12.99,
        "date": "2026-07-10",
        "featured": false,
        "file": {
          "_type": "file",
          "asset": { "_type": "reference", "_ref": "<file asset _id from step 1>" }
        },
        "coverImage": {
          "_type": "image",
          "asset": { "_type": "reference", "_ref": "<image asset _id from step 2>" }
        }
      }
    }
  ]
}
```

### Field rules

- `category` must be exactly one of: `Journal`, `Reflection Guide`,
  `Card Pack`, `Devotional`, `Workbook`, `Other`.
- `slug.current`: lowercase letters, numbers, and hyphens only; must be
  unique across products (it is the checkout identifier).
- `priceUsd`: omit it to list the product as **"coming soon"** (visible but
  not buyable). A product is only buyable when it has BOTH a price > 0 and a
  file.
- `date`: ISO `YYYY-MM-DD`.
- Do not set `_id` — let Sanity generate it.

### Updating or unpublishing

- Update: use a `patch` mutation with the document `_id`.
- Remove from the store: `delete` mutation with the `_id`, or ask Chris to
  delete it in the Studio dashboard.

## How selling works (context, not agent-facing)

Buy button → `/api/checkout` (`product: "store:<slug>"`) → Stripe Checkout →
back to `/store` with a session id → `/api/download` verifies the session is
PAID with Stripe, then streams the product's PDF. Files are never linked
publicly; delivery only happens after verified payment.

## Chris's manual option

Everything the agent does via API, you can also do by hand at
`unshackledtruthmedia.com/studio` → **Product** → ➕. Same fields, same
60-second appearance on the site.
