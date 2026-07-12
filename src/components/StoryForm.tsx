"use client";

import { useState } from "react";
import { Button } from "./Button";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Shared submission form for reader contributions, emailed to
 * siteConfig.contact.storyEmail via /api/story.
 *
 * - "story":  recovery/re-entry stories from people who made it out.
 * - "letter": Voices from the Inside — from someone currently incarcerated,
 *             or sent in by a loved one on their behalf.
 */
type Variant = "story" | "letter";

const inputClass =
  "w-full rounded-lg border border-border bg-bg px-4 py-3 text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors";

const labelClass = "block text-sm font-medium text-fg mb-1.5";

// Vercel serverless functions cap the request body at ~4.5 MB, so keep the
// attachment safely under it.
const MAX_FILE_BYTES = 4 * 1024 * 1024;

const COPY: Record<
  Variant,
  {
    bodyLabel: string;
    bodyPlaceholder: string;
    fileHint: string;
    consent: string;
    successTitle: string;
    successBody: string;
    submit: string;
  }
> = {
  story: {
    bodyLabel: "Your story",
    bodyPlaceholder:
      "Write it here in your own words — where you've been, what changed, and where you are now. No polish needed; honest beats perfect. (Or attach it as a file below.)",
    fileHint: "A photo of you, or your story as a document or scanned pages.",
    consent:
      "I wrote this story (or have the right to share it) and I give Unshackled Truth Media permission to publish it on the site, edited lightly for length and clarity. I understand I can ask for it to be taken down at any time. *",
    successTitle: "Your story is on its way",
    successBody:
      "Thank you for trusting us with it. Chris reads every submission personally — if it's a fit for the site, you'll hear back before anything is published.",
    submit: "Send My Story",
  },
  letter: {
    bodyLabel: "The letter",
    bodyPlaceholder:
      "Type the letter here — or if it's handwritten, skip this box and attach photos of the pages below. Don't clean it up; the real words are the ones that reach people.",
    fileHint:
      "Photos or scans of handwritten pages work great — attach them here.",
    consent:
      "This letter is mine to share — I wrote it, or its writer gave me permission to send it in. Unshackled Truth Media may publish it, lightly edited, signed only the way we've asked above. Last names, ID numbers, and facility details are never published. It can be taken down at any time on request. *",
    successTitle: "The letter is on its way",
    successBody:
      "Thank you — words from inside carry weight nothing else does. Chris reads every letter personally, and you'll hear back before anything is published.",
    submit: "Send the Letter",
  },
};

export function StoryForm({ variant = "story" }: { variant?: Variant }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const copy = COPY[variant];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const file = data.get("attachment");
    if (file instanceof File && file.size > MAX_FILE_BYTES) {
      setStatus("error");
      setError(
        "That file is over 4 MB. Please attach a smaller photo or document — or send the text here and email the file to us directly.",
      );
      return;
    }
    const story = String(data.get("story") ?? "").trim();
    const hasFile = file instanceof File && file.size > 0;
    if (!story && !hasFile) {
      setStatus("error");
      setError(
        variant === "letter"
          ? "Please type the letter or attach it as photos or a file."
          : "Please write your story or attach it as a file.",
      );
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
      setError("Couldn't send it right now. Please try again in a few minutes.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-bg-elev p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-2xl text-accent">
          ✓
        </div>
        <h3 className="font-display text-2xl font-semibold">
          {copy.successTitle}
        </h3>
        <p className="mt-2 text-fg-muted">{copy.successBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-bg-elev p-6 sm:p-8"
    >
      <input type="hidden" name="kind" value={variant} />

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

      {variant === "letter" ? (
        <>
          <div className="mt-5">
            <label htmlFor="sender" className={labelClass}>
              Who is this from? *
            </label>
            <select id="sender" name="sender" required className={inputClass}>
              <option>Me — I&rsquo;m writing from inside</option>
              <option>My loved one inside — I&rsquo;m sending it for them</option>
              <option>Me — a family member, writing from out here</option>
            </select>
          </div>
          <div className="mt-5">
            <label htmlFor="signAs" className={labelClass}>
              How should we sign it? (optional)
            </label>
            <input
              id="signAs"
              name="signAs"
              className={inputClass}
              placeholder='e.g. "Marcus, somewhere in Texas" · first name only · Anonymous'
            />
          </div>
        </>
      ) : (
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
      )}

      <div className="mt-5">
        <label htmlFor="story" className={labelClass}>
          {copy.bodyLabel}
        </label>
        <textarea
          id="story"
          name="story"
          rows={10}
          className={inputClass}
          placeholder={copy.bodyPlaceholder}
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
          {fileName ? `Attached: ${fileName}` : copy.fileHint}
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
        <label
          htmlFor="consent"
          className="text-sm leading-relaxed text-fg-muted"
        >
          {copy.consent}
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
          {status === "submitting" ? "Sending…" : copy.submit}
        </Button>
      </div>
    </form>
  );
}
