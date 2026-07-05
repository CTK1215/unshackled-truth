"use client";

import Image from "next/image";
import { useImageExists } from "./useImageExists";

/**
 * Book cover that shows the real cover (public/book-cover.jpg) when it exists,
 * and the styled placeholder SVG until then. Auto-upgrades once the file is
 * added — no code change needed.
 */
export function CoverImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const status = useImageExists(src);
  const shown = status === "ok" ? src : "/book-cover-placeholder.svg";
  return (
    <Image
      src={shown}
      alt={alt}
      width={600}
      height={900}
      priority={priority}
      className={className}
    />
  );
}
