import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

/**
 * Free sample-chapter funnel.
 *
 * Visitor enters their email → we email them Chapter One (PDF attached) and
 * notify Chris of the signup. If RESEND_AUDIENCE_ID is set, the contact is
 * also added to that Resend audience (your mailing list).
 *
 * Requirements to be fully live:
 *  - RESEND_API_KEY set
 *  - private/sample-chapter.pdf exists
 *  - Your domain verified in Resend (needed to email addresses other than
 *    your own; until then Resend's test sender only delivers to you)
 */

export const runtime = "nodejs";

const RESEND_URL = "https://api.resend.com";

function isValidEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields, humans don't.
  if (body.company && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const firstName = (body.firstName ?? "").trim().slice(0, 80);
  const email = (body.email ?? "").trim();

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("📖 Sample-chapter signup (email not configured):", {
      firstName,
      email,
    });
    return NextResponse.json(
      {
        error:
          "The free chapter isn't quite ready to send yet — please check back soon.",
      },
      { status: 503 },
    );
  }

  // Load the chapter PDF.
  let chapterB64: string;
  try {
    const filePath = path.join(
      process.cwd(),
      "private",
      siteConfig.book.sampleChapterFileName,
    );
    chapterB64 = (await readFile(filePath)).toString("base64");
  } catch {
    console.error("sample-chapter.pdf missing from private/");
    return NextResponse.json(
      {
        error:
          "The free chapter isn't quite ready to send yet — please check back soon.",
      },
      { status: 503 },
    );
  }

  const from =
    process.env.RESEND_FROM ?? "Unshackled Truth <onboarding@resend.dev>";
  const greeting = firstName ? `${firstName}, thank` : "Thank";

  // 1) Send the chapter to the reader.
  const sendRes = await fetch(`${RESEND_URL}/emails`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject: `Chapter One — ${siteConfig.book.title}`,
      html: `
        <p>${greeting} you for reading.</p>
        <p>Attached is <strong>Chapter One of ${siteConfig.book.title}</strong> —
        the beginning of a true story about prison, addiction, and the God who
        rewrites stories that look finished.</p>
        <p>If it grabs you, the full book is here:</p>
        <p>
          • Paperback, Kindle &amp; eBook: <a href="${siteConfig.book.amazonUrl}">Amazon</a>
          (free with Kindle Unlimited)
        </p>
        <p>Grace still breaks chains,<br/>${siteConfig.authorName}</p>
      `,
      attachments: [
        {
          filename: "The-Cracks-Beneath-the-Surface-Chapter-One.pdf",
          content: chapterB64,
        },
      ],
    }),
  });

  if (!sendRes.ok) {
    const detail = await sendRes.text();
    console.error("Resend sample-chapter error:", detail);
    return NextResponse.json(
      {
        error:
          "We couldn't send the chapter just now. Please try again in a few minutes.",
      },
      { status: 502 },
    );
  }

  // 2) Notify Chris of the signup (best-effort — don't fail the request).
  fetch(`${RESEND_URL}/emails`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [siteConfig.contact.inquiryEmail],
      subject: `📖 New free-chapter signup: ${email}`,
      html: `<p><strong>${firstName || "Someone"}</strong> (${email}) just requested Chapter One from ${siteConfig.url}.</p>`,
    }),
  }).catch((e) => console.error("Signup notification failed:", e));

  // 3) Add to the mailing list audience, if configured (best-effort).
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (audienceId) {
    fetch(`${RESEND_URL}/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        first_name: firstName || undefined,
        unsubscribed: false,
      }),
    }).catch((e) => console.error("Audience add failed:", e));
  }

  return NextResponse.json({ ok: true });
}
