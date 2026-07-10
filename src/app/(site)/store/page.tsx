// Re-check the CMS for new content at most every 60 seconds.
export const revalidate = 60;

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ProductCard } from "@/components/ProductCard";
import { BuyEbookButton } from "@/components/BuyEbookButton";
import { PurchaseBanner } from "@/components/PurchaseBanner";
import { Reveal } from "@/components/Reveal";
import { getProducts } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Store",
  description:
    "Journals, reflection guides, card packs, and devotionals from Unshackled Truth Media — tools for the road out.",
};

export default async function StorePage({
  searchParams,
}: {
  searchParams: Promise<{
    purchase?: string;
    session_id?: string;
    product?: string;
  }>;
}) {
  const [products, params] = await Promise.all([getProducts(), searchParams]);
  const { workbook } = siteConfig;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <PurchaseBanner
          status={params.purchase}
          sessionId={params.session_id}
          product={params.product}
        />

        <div className="max-w-2xl">
          <p className="eyebrow mb-3">The Store</p>
          <h1 className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Tools for the road out
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-fg-muted">
            Journals, guides, and devotionals built from the same truths as the
            book — practical companions for recovery, faith, and the daily work
            of staying free. Every purchase supports the mission of reaching
            people inside.
          </p>
        </div>

        {/* Featured: the workbook (sold via the existing secure flow) */}
        <Reveal className="mt-14">
          <div className="grid gap-8 overflow-hidden rounded-3xl border border-accent/30 bg-bg-elev md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
            <div className="relative min-h-56 border-b border-border bg-bg-elev-2 md:border-b-0 md:border-r">
              <Image
                src="/unshackled-truth-workbook.jpg"
                alt={`Cover of the ${workbook.title} workbook`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 38vw, 100vw"
              />
            </div>
            <div className="p-8 sm:p-10">
              <span className="text-xs font-medium uppercase tracking-widest text-accent">
                Featured · Workbook
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold">
                {workbook.title}{" "}
                <span className="italic text-fg-muted">
                  — {workbook.subtitle}
                </span>
              </h2>
              <div className="mt-4 space-y-3 leading-relaxed text-fg-muted">
                {workbook.description.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted">
                {workbook.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <BuyEbookButton
                  priceUsd={workbook.priceUsd}
                  product="workbook"
                  label="Buy the Workbook"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Product grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 110}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-sm text-fg-subtle">
          Looking for the book itself?{" "}
          <Link href="/the-book" className="text-accent hover:underline">
            It has its own page →
          </Link>
        </p>
      </Container>
    </section>
  );
}
