import { Container } from "./Container";

/**
 * The site's anchor verse — 2 Corinthians 5:17 — on a deep blue gradient band,
 * echoing the Unshackled Truth Media brand. The dove floats gently.
 */
export function VerseBand() {
  return (
    <section aria-label="2 Corinthians 5:17" className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#2b82db] via-[#123f77] to-[#081a33] px-8 py-16 text-center sm:py-20">
          {/* soft radial glow behind the dove */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(255,255,255,0.25),transparent)]"
          />

          {/* dove */}
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="animate-float mx-auto mb-7 h-12 w-12 text-white/95 drop-shadow-[0_4px_14px_rgba(255,255,255,0.35)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* body + head */}
            <path d="M20.5 6.5c-1.2-.3-2.4-.2-3.4.3-.4-1.2-1.3-2.2-2.6-2.6.5.7.8 1.5.8 2.4-2.9-.9-6.2.3-7.8 3.1-.9 1.6-1.1 3.4-.6 5-2 .4-3.7 1.7-4.4 3.6 1.5-.7 3.2-.8 4.8-.3 1.4 3 4.8 4.6 8 3.6 3.6-1.1 5.7-4.7 5-8.3.9-.7 1.6-1.7 1.9-2.9-.7.4-1.5.6-2.3.6 0-1.7-.5-3.2-1.4-4.5z" />
            {/* wing sweep */}
            <path d="M13.5 9.5c-1.5 1.5-3.5 2.3-6 2.5" />
          </svg>

          <blockquote className="mx-auto max-w-3xl">
            <p className="text-balance font-display text-2xl font-semibold leading-snug text-white sm:text-3xl md:text-4xl">
              &ldquo;Therefore, if anyone is in Christ, he is a new creation.
              The old has passed away; behold, the new has come.&rdquo;
            </p>
            <footer className="mt-5 text-base font-medium tracking-wide text-white/85 sm:text-lg">
              2 Corinthians 5:17
            </footer>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
