"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll-triggered entrance animation. Children start slightly shifted +
 * transparent and glide in when they enter the viewport. Runs once.
 * Respects prefers-reduced-motion (renders static).
 */
export function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
}: {
  children: ReactNode;
  /** Stagger delay in ms. */
  delay?: number;
  from?: "up" | "left" | "right" | "none";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden =
    from === "up"
      ? "translate-y-7"
      : from === "left"
        ? "-translate-x-7"
        : from === "right"
          ? "translate-x-7"
          : "";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        shown ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${hidden}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
