"use client";

import { useState } from "react";
import { Button } from "./Button";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-border bg-bg px-4 py-3 text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors";

const labelClass = "block text-sm font-medium text-fg mb-1.5";

export function SpeakingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
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
      setError("Couldn't send your request. Please email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-bg-elev p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-2xl text-accent">
          ✓
        </div>
        <h3 className="font-display text-2xl font-semibold">Message sent</h3>
        <p className="mt-2 text-fg-muted">
          Thank you for reaching out. You&rsquo;ll get a reply soon — usually
          within a few days.
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
          <input id="name" name="name" required className={inputClass} />
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
        <div>
          <label htmlFor="organization" className={labelClass}>
            Organization / church
          </label>
          <input
            id="organization"
            name="organization"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="eventDate" className={labelClass}>
            Event date (if known)
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="eventType" className={labelClass}>
          Type of event
        </label>
        <select id="eventType" name="eventType" className={inputClass}>
          <option>Church service</option>
          <option>Recovery / addiction group</option>
          <option>Prison or re-entry program</option>
          <option>Youth group</option>
          <option>Conference</option>
          <option>Other</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Tell me about your event *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="Who's the audience, roughly how many people, location, and anything you'd like me to speak to."
        />
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
          {status === "submitting" ? "Sending…" : "Send Speaking Request"}
        </Button>
      </div>
    </form>
  );
}
