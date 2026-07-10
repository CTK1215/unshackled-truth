import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";
import { BrandLogo } from "./BrandLogo";

const socials = [
  { key: "tiktok", label: "TikTok" },
  { key: "instagram", label: "Instagram" },
  { key: "facebook", label: "Facebook" },
  { key: "youtube", label: "YouTube" },
  { key: "x", label: "X" },
] as const;

export function Footer() {
  const year = 2026;
  const activeSocials = socials.filter(
    (s) => siteConfig.social[s.key] && siteConfig.social[s.key].length > 0,
  );

  return (
    <footer className="mt-24 border-t border-border bg-bg-elev">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <BrandLogo className="mb-3 h-14 w-14 rounded-md object-contain" />
            <p className="font-display text-xl font-semibold">
              {siteConfig.brand}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2.5 text-sm">
              {[
                ["/the-book", "The Book"],
                ["/store", "Store"],
                ["/free-chapter", "Free Chapter"],
                ["/blog", "Blog"],
                ["/letters", "Voices from the Inside"],
                ["/stories", "Stories"],
                ["/about", "About"],
                ["/speaking", "Speaking"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-fg-muted transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Get in touch</p>
            <ul className="space-y-2.5 text-sm text-fg-muted">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
            {activeSocials.length > 0 && (
              <div className="mt-5 flex gap-4 text-sm">
                {activeSocials.map((s) => (
                  <a
                    key={s.key}
                    href={siteConfig.social[s.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg-muted transition-colors hover:text-accent"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.authorName}. All rights reserved.
          </p>
          <p>Every word here was written free.</p>
        </div>
      </Container>
    </footer>
  );
}
