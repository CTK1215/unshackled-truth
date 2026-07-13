"use client";

import { useState } from "react";
import { Button } from "./Button";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-border bg-bg px-4 py-3 text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors";

export function SampleChapterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/sample", {
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
      setError("Couldn't send it just now. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-accent/10 p-8 text-center">
        <p className="font-display text-2xl font-semibold text-accent">
          Chapter One is on its way 📬
        </p>
        <p className="mt-2 text-fg-muted">
          Check your inbox (and the spam folder, just in case). The PDF is
          attached — no strings, no spam.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-bg-elev p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div>
          <label htmlFor="sc-name" className="mb-1.5 block text-sm font-medium">
            First name
          </label>
          <input
            id="sc-name"
            name="firstName"
            autoComplete="given-name"
            className={inputClass}
            placeholder="Optional"
          />
        </div>
        <div>
          <label htmlFor="sc-email" className="mb-1.5 block text-sm font-medium">
            Email *
          </label>
          <input
            id="sc-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
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
        <p className="mt-4 rounded-lg border border-ember/50 bg-ember/10 px-4 py-3 text-sm">
          {error}
        </p>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting"
            ? "Sending…"
            : "Send Me Both PDFs — Free"}
        </Button>
        <p className="text-xs text-fg-subtle">
          One email with both PDFs. Unsubscribe anytime.
        </p>
      </div>
    </form>
  );
}
