import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand} — ${siteConfig.book.subtitle}`,
    template: `%s · ${siteConfig.brand}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    title: siteConfig.brand,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.brand,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.brand,
    description: siteConfig.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="bg-bg text-fg">{children}</body>
    </html>
  );
}
