import type { Metadata } from "next";
import { NextStudio } from "next-sanity/studio";
import { isSanityConfigured } from "@/sanity/env";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Content Studio",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-16">
        <p className="eyebrow mb-3">Content Studio</p>
        <h1 className="font-display text-3xl font-semibold">
          Your dashboard is almost ready
        </h1>
        <p className="mt-4 leading-relaxed text-fg-muted">
          This is where you&rsquo;ll log in to write blog posts and add letters
          and stories — no code required. To switch it on, create a free Sanity
          project and add your project ID to the site&rsquo;s environment file.
        </p>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-fg-muted">
          <li>
            Run <code className="text-accent">npx sanity login</code> then{" "}
            <code className="text-accent">npx sanity init</code> in the project
            folder.
          </li>
          <li>
            Copy the project ID it gives you into{" "}
            <code className="text-accent">.env.local</code> as{" "}
            <code className="text-accent">NEXT_PUBLIC_SANITY_PROJECT_ID</code>.
          </li>
          <li>Restart the site and refresh this page.</li>
        </ol>
        <p className="mt-5 text-sm text-fg-subtle">
          Full step-by-step instructions are in the project README under
          &ldquo;Connect the CMS.&rdquo;
        </p>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
