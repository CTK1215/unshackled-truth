import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

/**
 * "Share your story" endpoint.
 *
 * Accepts multipart form data (name, email, optional milestone, story text,
 * optional photo/document attachment) and emails it to
 * siteConfig.contact.storyEmail via Resend. Without RESEND_API_KEY it logs the
 * submission and still succeeds, same pattern as the speaking form.
 */

export const runtime = "nodejs";

// Vercel serverless request bodies cap out around 4.5 MB.
const MAX_FILE_BYTES = 4 * 1024 * 1024;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (String(data.get("company") ?? "").trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const milestone = String(data.get("milestone") ?? "").trim();
  const story = String(data.get("story") ?? "").trim();
  const consent = data.get("consent");
  const file = data.get("attachment");
  const hasFile = file instanceof File && file.size > 0;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Please fill in your name and email." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (!story && !hasFile) {
    return NextResponse.json(
      { error: "Please write your story or attach it as a file." },
      { status: 400 },
    );
  }
  if (!consent) {
    return NextResponse.json(
      { error: "Please check the permission box so we can publish your story." },
      { status: 400 },
    );
  }
  if (hasFile && file.size > MAX_FILE_BYTES) {
    return NextResponse.json(
      { error: "The attached file is over 4 MB — please send a smaller one." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  // No email provider configured yet — log and succeed so the form works.
  if (!apiKey) {
    console.log("\n📖 New story submission (email not configured):");
    console.log({
      name,
      email,
      milestone,
      story: story.slice(0, 2000),
      attachment: hasFile ? `${file.name} (${file.size} bytes)` : "—",
    });
    return NextResponse.json({ ok: true });
  }

  const html = `
    <h2>New story submission</h2>
    <table style="border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;vertical-align:top">Name</td><td style="padding:4px 0">${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;vertical-align:top">Email</td><td style="padding:4px 0">${escapeHtml(email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;vertical-align:top">Where they are</td><td style="padding:4px 0">${escapeHtml(milestone || "—")}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;vertical-align:top">Permission to publish</td><td style="padding:4px 0">Yes — granted via the form</td></tr>
    </table>
    <h3>Story</h3>
    <p style="white-space:pre-wrap">${story ? escapeHtml(story) : "(sent as an attachment)"}</p>
  `;

  const payload: Record<string, unknown> = {
    from: process.env.RESEND_FROM ?? "Unshackled Truth <onboarding@resend.dev>",
    to: [siteConfig.contact.storyEmail],
    reply_to: email,
    subject: `Story submission from ${name}${milestone ? ` (${milestone})` : ""}`,
    html,
  };

  if (hasFile) {
    const buf = Buffer.from(await file.arrayBuffer());
    payload.attachments = [
      { filename: file.name || "story-attachment", content: buf.toString("base64") },
    ];
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend story error:", detail);
      return NextResponse.json(
        {
          error: `Couldn't send right now. Please email your story to ${siteConfig.contact.storyEmail} directly.`,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Story route error:", err);
    return NextResponse.json(
      {
        error: `Couldn't send right now. Please email your story to ${siteConfig.contact.storyEmail} directly.`,
      },
      { status: 500 },
    );
  }
}
