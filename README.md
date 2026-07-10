# Unshackled Truth

The website for your book, testimony, blog, letters from inside, recovery
stories, and speaking engagements. Built with Next.js.

It **runs immediately with sample content** so you can see the finished site
today. You then swap in your real details and turn on the services (CMS, email,
payments) one at a time — none of them are required for the site to work.

---

## Run it on your computer

```bash
npm install      # first time only
npm run dev
```

Then open **http://localhost:3000**.

To build the production version: `npm run build` then `npm run start`.

---

## The one file to edit first

Open **`src/lib/site.ts`** and replace the placeholders with your real details:

- Your **name**
- Your **book** title, subtitle, Amazon link, and eBook price
- Your **contact** email and phone (for the speaking page + footer)
- Your **social** links (leave blank to hide them)

Save, and the whole site updates.

### Add your book cover

Drop your cover image into the **`public/`** folder (e.g. `public/book-cover.jpg`),
then set `book.coverImage` in `src/lib/site.ts` to `"/book-cover.jpg"`.

---

## Turning on the services

Copy `.env.example` to **`.env.local`** and fill in only what you want to use.
Restart `npm run dev` after changing it.

### Connect the CMS (write blog posts, letters & stories in a dashboard)

Your content dashboard lives at **http://localhost:3000/studio**. Until it's
connected it shows setup instructions. To connect it:

1. In the project folder run:
   ```bash
   npx sanity login      # create/sign in to a free Sanity account
   npx sanity init       # creates a project — choose "production" dataset,
                         # and when asked, DO NOT overwrite existing files
   ```
2. `sanity init` prints a **Project ID**. Put it in `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   ```
3. Restart the site. Go to `/studio`, log in, and start adding posts, letters,
   and stories. They appear on the site automatically. (Until you add any, the
   site keeps showing the sample content.)

> The dashboard is part of this site, so it deploys with it — after launch it
> lives at `yourdomain.com/studio`.

### Speaking-form email (Resend)

Without this, form submissions are printed to the server console. To get them
emailed to you:

1. Create a free account at **resend.com** and make an API key.
2. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_key
   RESEND_FROM="Unshackled Truth <onboarding@resend.dev>"
   ```
   (`onboarding@resend.dev` works right away for testing; later you can verify
   your own domain in Resend and send from your own address.)

Inquiries are delivered to the `inquiryEmail` set in `src/lib/site.ts`.

### Direct digital sales (Stripe) — eBook + workbook

Amazon handles print/Kindle. The site also sells two PDFs directly: the eBook
and the fillable **Unshackled Truth workbook** (18 weekly studies, sold on the
Book page). Both use the same checkout and secure download flow, and both PDFs
live in `private/`. To enable direct sales:

1. Create an account at **stripe.com**.
2. Copy your **secret key** (start with a test key `sk_test_...`) into `.env.local`:
   ```
   STRIPE_SECRET_KEY=sk_test_your_key
   ```
3. The "Buy the eBook" and "Buy the Workbook" buttons on the Book page now
   open Stripe Checkout, and buyers get a download link after paying.

> After payment, the buyer lands back on the Book page with a download button.
> The download route double-checks with Stripe that the session was actually
> paid — and which product it was for — before releasing the file.

---

## Project map

```
src/
  app/
    (site)/            # all public pages (home, book, blog, letters, ...)
    studio/            # the CMS dashboard (/studio)
    api/               # contact form + Stripe checkout endpoints
  components/          # header, footer, buttons, cards, forms
  lib/
    site.ts            # ← your details (edit this)
    content.ts         # where pages get posts/letters/stories
    sample-data.ts     # placeholder content used until the CMS is connected
  sanity/              # CMS schemas + client
```

---

## Put it online (deploy)

The easiest host is **Vercel** (made by the Next.js team, free tier):

1. Push this folder to a GitHub repository.
2. Go to **vercel.com**, "Add New Project", and import that repo.
3. In the project's **Settings → Environment Variables**, add the same values
   from your `.env.local`.
4. Deploy. You'll get a live URL; you can then connect your custom domain.

---

## Images to drop into `public/`

Save these three files into the `public/` folder with these **exact names**.
Each one appears automatically on the site as soon as the file exists (the site
shows a tasteful placeholder until then — nothing looks broken in the meantime):

| Save as | Where it shows |
|---------|----------------|
| `public/logo.png` | Header + footer logo |
| `public/book-cover.jpg` | Book cover on the home and Book pages |
| `public/chris-at-16.jpg` | Photo on the About page |

The **first-day-out video** is already added (`public/media/first-day-out.mp4`)
and shows on the About page.

## Content checklist

- [ ] Fill in `src/lib/site.ts` (subtitle, description, public contact email/phone)
- [ ] Add the three images above to `public/`
- [ ] Update the testimony on the About page (`src/app/(site)/about/page.tsx`)
- [ ] Connect the CMS and add real blog posts / letters / stories
- [ ] Turn on Resend so speaking requests reach your inbox
- [ ] Turn on Stripe + drop your PDFs in `private/` for direct eBook/workbook sales
- [ ] Deploy to Vercel and connect your domain
