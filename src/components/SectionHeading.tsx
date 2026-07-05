import type { ReactNode } from "react";

/** Eyebrow label + dramatic serif heading, used to open page sections. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${alignment} max-w-2xl ${className}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-pretty text-lg leading-relaxed text-fg-muted">
          {intro}
        </p>
      )}
    </div>
  );
}
