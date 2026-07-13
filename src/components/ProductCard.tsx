import Image from "next/image";
import type { Product } from "@/lib/types";
import { BuyEbookButton } from "./BuyEbookButton";
import { ButtonLink } from "./Button";

/** Store card for a product. Buyable when it has a price + file; otherwise
 *  links out (externalUrl) or shows a "coming soon" state. */
export function ProductCard({ product }: { product: Product }) {
  const buyable = product.hasFile && (product.priceUsd ?? 0) > 0;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-elev transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
      {/* Cover */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-border bg-bg-elev-2">
        {product.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- remote CMS image, unknown domain config
          <img
            src={product.imageUrl}
            alt={`Cover of ${product.title}`}
            className="h-full w-full object-contain p-4"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-fg-subtle">
            <Image src="/logo.png" alt="" width={56} height={56} className="opacity-40" />
            <span className="text-xs uppercase tracking-widest">
              {product.category}
            </span>
          </div>
        )}
        {!buyable && !product.externalUrl && (
          <span className="absolute right-3 top-3 rounded-full bg-bg/80 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">
            Coming soon
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          {product.category}
        </span>
        <h3 className="mt-2 font-display text-xl font-semibold leading-snug">
          {product.title}
        </h3>
        {product.tagline && (
          <p className="mt-1 text-sm italic text-fg-muted">{product.tagline}</p>
        )}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
          {product.description}
        </p>

        <div className="mt-5">
          {buyable ? (
            <BuyEbookButton
              priceUsd={product.priceUsd!}
              product={`store:${product.slug}`}
              label="Buy"
            />
          ) : product.externalUrl ? (
            <ButtonLink href={product.externalUrl} variant="outline" external>
              {(product.priceUsd ?? 0) > 0 ? "View / Buy →" : "Get It Free →"}
            </ButtonLink>
          ) : (
            <p className="text-sm text-fg-subtle">
              In the works — join the free-chapter list to hear when it lands.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
