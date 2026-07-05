"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { ButtonLink } from "./Button";
import { useImageExists } from "./useImageExists";

const NAV = [
  { href: "/the-book", label: "The Book" },
  { href: "/blog", label: "Blog" },
  { href: "/letters", label: "Letters" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const logoStatus = useImageExists("/logo.png");

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          {logoStatus === "ok" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/logo.png"
              alt={siteConfig.brand}
              className="h-10 w-10 rounded-md object-contain"
            />
          ) : (
            <span
              aria-hidden
              className="flex h-9 w-9 items-center justify-center rounded-md border border-accent/40 text-accent transition-colors group-hover:border-accent"
            >
              {/* broken-chain link mark (fallback until logo.png is added) */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8.5 12h-2a3.5 3.5 0 0 1 0-7h2M15.5 12h2a3.5 3.5 0 0 1 0 7h-2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M9 8.5 15 15.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeDasharray="0.1 4"
                />
              </svg>
            </span>
          )}
          <span className="font-display text-lg font-semibold tracking-tight">
            {siteConfig.brand}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-accent"
                  : "text-fg-muted hover:text-fg"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/the-book" size="md">
            Get the Book
          </ButtonLink>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-fg md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-bg-elev md:hidden">
          <div className="flex flex-col px-5 py-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-base font-medium ${
                  isActive(item.href) ? "text-accent" : "text-fg"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href="/the-book"
              size="lg"
              className="mt-3 w-full"
            >
              Get the Book
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
