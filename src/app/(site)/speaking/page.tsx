import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SpeakingForm } from "@/components/SpeakingForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Invite the Unshackled Truth testimony to your church, recovery group, prison ministry, or event.",
};

const audiences = [
  "Churches & congregations",
  "Recovery & addiction groups",
  "Prisons & re-entry programs",
  "Youth & at-risk programs",
  "Conferences & retreats",
];

export default function SpeakingPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Speaking & Events</p>
          <h1 className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Invite this testimony to your people
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-fg-muted">
            Some audiences need more than a program — they need to see someone
            who made it out and hear exactly how. I speak plainly, from lived
            experience, about prison, addiction, faith, and the long work of
            becoming free. Fill out the form and I&rsquo;ll be in touch.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Form */}
          <div>
            <SpeakingForm />
          </div>

          {/* Sidebar: direct contact + audiences */}
          <aside className="space-y-8">
            <div className="rounded-2xl border border-border bg-bg-elev p-6">
              <p className="eyebrow mb-4">Prefer to reach out directly?</p>
              <ul className="space-y-3 text-fg">
                <li>
                  <span className="block text-xs uppercase tracking-wider text-fg-subtle">
                    Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-accent hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-fg-subtle">
                    Phone
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-accent hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-bg-elev p-6">
              <p className="eyebrow mb-4">Who I speak to</p>
              <ul className="space-y-2.5">
                {audiences.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-fg-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
