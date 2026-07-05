"use client";

import { useImageExists } from "./useImageExists";

/**
 * An image with a caption that shows a tasteful placeholder frame until the
 * real file is added to /public. Once the file exists, the photo appears
 * automatically — no code change needed.
 */
export function Figure({
  src,
  alt,
  caption,
  hint,
  className = "",
  ratio = "aspect-[4/5]",
}: {
  src: string;
  alt: string;
  caption?: string;
  hint?: string;
  className?: string;
  ratio?: string;
}) {
  const status = useImageExists(src);

  return (
    <figure className={className}>
      {status === "ok" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={`${ratio} w-full rounded-xl border border-border object-cover`}
        />
      ) : (
        <div
          className={`${ratio} flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-bg-elev p-6 text-center`}
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-fg-subtle">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8.5" cy="10" r="1.5" fill="currentColor" />
            <path d="m4 17 5-4 4 3 3-2 4 3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
          <p className="text-sm text-fg-subtle">{hint ?? `Add ${src}`}</p>
        </div>
      )}
      {caption && (
        <figcaption className="mt-3 text-sm text-fg-subtle">{caption}</figcaption>
      )}
    </figure>
  );
}
