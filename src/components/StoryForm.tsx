"use client";

import { useState } from "react";
import { Button } from "./Button";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-border bg-bg px-4 py-3 text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors";

const labelClass = "block text-sm font-medium text-fg mb-1.5";

// Vercel serverless functions cap the request body at ~4.5 MB, so keep the
// attachment safely under it.
const MAX_FILE_BYTES = 4 * 1024 * 1024;

export function StoryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const file = data.get("attachment");
    if (file instanceof File && file.size > MAX_FILE_BYTES) {
      setStatus("error");
      setError(
        "That file is over 4 MB. Please attach a smaller photo or document — or send the story text here and email the file to us directly.",
      );
      return;
    }
    const story = String(data.get("story") ?? "").trim();
    const hasFile = file instanceof File && file.size > 0;
    if (!story && !hasFile) {
      setStatus("error");
      setError("Please write your story or attach it as a file.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/story", { method: "POST", body: data });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Couldn't send your story. Please try again in a few minutes.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-bg-elev p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-2xl text-accent">
          ✓
        </div>
        <h3 className="font-display text-2xl font-semibold">
          Your story is on its way
        </h3>
        <p className="mt-2 text-fg-muted">
          Thank you for trusting us with it. Chris reads every submission
          personally — if it&rsquo;s a fit for the site, you&rsquo;ll hear back
          before anything is published.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-bg-elev p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name *
          </label>
          <input
            id="name"
            name="name"
            required
            className={inputClass}
            placeholder="First name is fine"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="milestone" className={labelClass}>
          Where you are on the road (optional)
        </label>
        <input
          id="milestone"
          name="milestone"
          className={inputClass}
          placeholder="e.g. 2 years clean · home since 2023 · still inside, going home next year"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="story" className={labelClass}>
          Your story
        </label>
        <textarea
          id="story"
          name="story"
          rows={10}
          className={inputClass}
          placeholder="Write it here in your own words — where you've been, what changed, and where you are now. No polish needed; honest beats perfect. (Or attach it as a file below.)"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="attachment" className={labelClass}>
          Photo or file (optional — up to 4 MB)
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          accept="image/*,.pdf,.doc,.docx,.txt"
          className={`${inputClass} file:mr-4 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-1.5 file:text-sm file:font-semibold file:text-accent-contrast`}
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
        <p className="mt-1.5 text-xs text-fg-subtle">
          {fileName
            ? `Attached: ${fileName}`
            : "A photo of you, or your story as a document or scanned pages."}
        </p>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-lg border border-border bg-bg p-4">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 accent-[var(--accent)]"
        />
        <label htmlFor="consent" className="text-sm leading-relaxed text-fg-muted">
          I wrote this story (or have the right to share it) and I give
          Unshackled Truth Media permission to publish it on the site, edited
          lightly for length and clarity. I understand I can ask for it to be
          taken down at any time. *
        </label>
      </div>

      {/* Honeypot for bots — hidden from humans */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {status === "error" && error && (
        <p className="mt-4 rounded-lg border border-ember/50 bg-ember/10 px-4 py-3 text-sm text-fg">
          {error}
        </p>
      )}

      <div className="mt-6">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send My Story"}
        </Button>
      </div>
    </form>
  );
}
