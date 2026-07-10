import type { Metadata } from "next";
import { CoverImage } from "@/components/CoverImage";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { BuyEbookButton } from "@/components/BuyEbookButton";
import { PurchaseBanner } from "@/components/PurchaseBanner";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Book",
  description: `${siteConfig.book.title} — ${siteConfig.book.subtitle}. ${siteConfig.tagline}`,
};

const highlights = [
  {
    title: "Written from the inside",
    body: "Not a lecture about people in prison — a story told by someone who lived it, in his own voice.",
  },
  {
    title: "Hope without the sugar-coating",
    body: "The lowest moments are on the page, unedited. So is the way out. Both are true.",
  },
  {
    title: "For the ones still fighting",
    body: "For inmates, families, people in recovery, and anyone who loves someone trying to change.",
  },
];

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{
    purchase?: string;
    session_id?: string;
    product?: string;
  }>;
}) {
  const { book, workbook } = siteConfig;
  const { purchase, session_id, product } = await searchParams;
  return (
    <>
      <section className="bg-vignette py-16 sm:py-24">
        <Container>
          <PurchaseBanner
            status={purchase}
            sessionId={session_id}
            product={product}
          />
          <div className="grid items-start gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16">
            {/* Cover */}
            <div className="relative mx-auto w-full max-w-sm md:sticky md:top-24">
              <div className="tilt-cover">
              <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-accent/10 blur-3xl" />
              <CoverImage
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                priority
                className="w-full rounded-lg border border-border shadow-2xl"
              />
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="eyebrow mb-3">The Book</p>
              <h1 className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                {book.title}
              </h1>
              <p className="mt-3 text-xl italic text-fg-muted">
                {book.subtitle}
              </p>

              <div className="mt-7 space-y-4 text-lg leading-relaxed text-fg-muted">
                {book.description.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              {/* Purchase options */}
              <div className="mt-9 rounded-2xl border border-border bg-bg-elev p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
                  Get your copy
                </p>
                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <ButtonLink href={book.amazonUrl} size="lg" external>
                    Buy on Amazon
                  </ButtonLink>
                  <BuyEbookButton priceUsd={book.ebookPriceUsd} />
                </div>
                <p className="mt-4 text-sm text-fg-subtle">
                  Print &amp; Kindle editions are on Amazon. The eBook (PDF) is
                  available to buy directly here — instant download after
                  checkout.
                </p>
                <p className="mt-3 text-sm">
                  <a
                    href="/free-chapter"
                    className="font-medium text-accent underline underline-offset-4 hover:text-accent-hover"
                  >
                    Not sure yet? Read Chapter One free →
                  </a>
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-xl border border-border bg-bg-elev p-5"
                  >
                    <h3 className="font-display text-lg font-semibold text-accent">
                      {h.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                      {h.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Companion workbook */}
          <div
            id="workbook"
            className="mt-16 rounded-3xl border border-accent/30 bg-bg-elev p-8 sm:p-10 md:mt-24"
          >
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-12">
              <div>
                <p className="eyebrow mb-3">The Companion Workbook</p>
                <h2 className="text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  {workbook.title}
                  <span className="mt-1 block text-xl italic text-fg-muted sm:text-2xl">
                    {workbook.subtitle}
                  </span>
                </h2>
                <div className="mt-5 space-y-4 leading-relaxed text-fg-muted">
                  {workbook.description.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <div className="mt-7">
                  <BuyEbookButton
                    priceUsd={workbook.priceUsd}
                    product="workbook"
                    label="Buy the Workbook"
                  />
                </div>
                <p className="mt-4 text-sm text-fg-subtle">
                  Fillable PDF — instant download after checkout. Yours to keep,
                  print, and work through at your own pace.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4">
                {workbook.highlights.map((h) => (
                  <div
                    key={h}
                    className="rounded-xl border border-border bg-bg p-5"
                  >
                    <p className="font-display text-lg font-semibold text-accent">
                      {h}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
