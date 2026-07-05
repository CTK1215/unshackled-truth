import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

/**
 * Speaking-inquiry endpoint.
 *
 * - With RESEND_API_KEY set, it emails the inquiry to siteConfig.contact.inquiryEmail.
 * - Without it (dev / before setup), it logs the inquiry to the server console
 *   and still returns success so the form is fully testable.
 *
 * Set these in .env.local to enable real email (see README):
 *   RESEND_API_KEY=re_...
 *   RESEND_FROM="Unshackled Truth <onboarding@resend.dev>"
 */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (body.company && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and a message." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const fields = {
    Name: name,
    Email: email,
    Organization: body.organization ?? "—",
    "Event type": body.eventType ?? "—",
    "Event date": body.eventDate ?? "—",
    Message: message,
  };

  const apiKey = process.env.RESEND_API_KEY;

  // No email provider configured yet — log and succeed so the form works.
  if (!apiKey) {
    console.log("\n📨 New speaking inquiry (email not configured):");
    console.log(fields);
    return NextResponse.json({ ok: true });
  }

  const html = `
    <h2>New speaking inquiry</h2>
    <table style="border-collapse:collapse">
      ${Object.entries(fields)
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;vertical-align:top">${k}</td><td style="padding:4px 0">${escapeHtml(
              String(v),
            ).replace(/\n/g, "<br>")}</td></tr>`,
        )
        .join("")}
    </table>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.RESEND_FROM ??
          "Unshackled Truth <onboarding@resend.dev>",
        to: [siteConfig.contact.inquiryEmail],
        reply_to: email,
        subject: `Speaking request from ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error:", detail);
      return NextResponse.json(
        { error: "Couldn't send right now. Please email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Couldn't send right now. Please email us directly." },
      { status: 500 },
    );
  }
}
