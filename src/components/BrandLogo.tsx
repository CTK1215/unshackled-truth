"use client";

import { useImageExists } from "./useImageExists";

/** Renders the logo image, or nothing if /logo.png hasn't been added yet. */
export function BrandLogo({ className = "" }: { className?: string }) {
  const status = useImageExists("/logo.png");
  if (status !== "ok") return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo.png" alt="Unshackled Truth Media" className={className} />
  );
}
