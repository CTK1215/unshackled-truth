"use client";

import { useEffect, useState } from "react";

export type ImageStatus = "loading" | "ok" | "missing";

/**
 * Reliably checks whether an image URL actually loads, by probing it client-side
 * with a throwaway Image(). Avoids the broken-image flash you get from putting
 * onError on a server-rendered <img> (the error can fire before React hydrates).
 */
export function useImageExists(src: string): ImageStatus {
  const [status, setStatus] = useState<ImageStatus>("loading");

  useEffect(() => {
    let active = true;
    const img = new window.Image();
    img.onload = () => {
      if (active) setStatus("ok");
    };
    img.onerror = () => {
      if (active) setStatus("missing");
    };
    img.src = src;
    return () => {
      active = false;
    };
  }, [src]);

  return status;
}
