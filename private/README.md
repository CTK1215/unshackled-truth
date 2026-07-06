# Private files — your eBook + sample chapter go here

## Free-chapter funnel

Export **Chapter One** as its own PDF and save it here as:

```
sample-chapter.pdf
```

Visitors on /free-chapter enter their email and receive that PDF
automatically (and you get a signup notification).


This folder is **not** part of the public website. Nothing in here can be opened
by visitors through a URL. It is only readable by the server, and only handed to
someone **after** they complete a Stripe payment (see `src/app/api/download`).

## To sell your book as a PDF

1. Export your finished manuscript as a single PDF.
2. Put it in this folder and name it exactly:

   ```
   the-cracks-beneath-the-surface.pdf
   ```

   (Or use any name you like and update `book.ebookFileName` in
   `src/lib/site.ts` to match.)

3. That's it. You upload **one** copy. When someone buys the eBook on the site,
   Stripe collects the payment and the site automatically delivers that PDF to
   them — you never make or send copies by hand.

## Important

Because this file is your full manuscript, the GitHub repository for this site
is kept **private**. Do not make the repo public, or the PDF could be downloaded
from GitHub directly. (If you ever want the repo public, ask your developer to
move the PDF to private cloud storage like Vercel Blob instead.)
