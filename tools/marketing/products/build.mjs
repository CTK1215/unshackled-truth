// Builds product HTML files from ./data/*.mjs content modules.
// Each product => html/<slug>.html with cover, interior pages, back cover.
import { readdir } from "node:fs/promises";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));

/* ---------- SVG motif library (gold line art) ---------- */
const G = "#c99b4a";
const motifs = {
  crack: `<svg class="motif-svg" viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 8 L92 60 L110 92 L88 132 L106 168 L90 204 L102 252" stroke="${G}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M92 60 L64 84 M110 92 L138 108 M88 132 L58 150 M106 168 L136 186" stroke="${G}" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
    <ellipse cx="100" cy="252" rx="52" ry="7" stroke="${G}" stroke-width="1.5" opacity="0.4"/>
  </svg>`,
  heartcrack: `<svg class="motif-svg" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M110 178 C 30 122, 14 62, 52 34 C 82 12, 108 30, 110 52 C 112 30, 138 12, 168 34 C 206 62, 190 122, 110 178 Z" stroke="${G}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M110 52 L100 84 L118 108 L102 136 L112 160" stroke="${G}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
    <path d="M110 30 L110 14 M138 20 L146 6 M82 20 L74 6" stroke="${G}" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
  </svg>`,
  hands: `<svg class="motif-svg" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 22 C 96 60, 84 84, 70 100 C 56 116, 52 140, 58 166 C 62 186, 74 204, 100 218 C 126 204, 138 186, 142 166 C 148 140, 144 116, 130 100 C 116 84, 104 60, 100 22 Z" stroke="${G}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M100 52 C 98 84, 92 104, 84 118 M100 52 C 102 84, 108 104, 116 118" stroke="${G}" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <path d="M52 96 L34 84 M148 96 L166 84 M64 70 L48 54 M136 70 L152 54" stroke="${G}" stroke-width="2" stroke-linecap="round" opacity="0.45"/>
  </svg>`,
  shield: `<svg class="motif-svg" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 16 L172 44 C 172 122, 152 180, 100 224 C 48 180, 28 122, 28 44 Z" stroke="${G}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M100 62 C 88 84, 76 96, 76 118 C 76 140, 86 154, 100 162 C 114 154, 124 140, 124 118 C 124 106, 118 96, 112 88 C 108 100, 104 104, 100 106 C 102 92, 102 76, 100 62 Z" stroke="${G}" stroke-width="2.5" stroke-linejoin="round" opacity="0.9"/>
  </svg>`,
  sunrise: `<svg class="motif-svg" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 130 A 70 70 0 0 1 190 130" stroke="${G}" stroke-width="3" stroke-linecap="round"/>
    <path d="M120 22 L120 44 M62 42 L76 58 M178 42 L164 58 M30 96 L52 102 M210 96 L188 102" stroke="${G}" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
    <path d="M16 130 L224 130 M40 150 L200 150 M64 170 L176 170" stroke="${G}" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
  </svg>`,
  compass: `<svg class="motif-svg" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="110" cy="110" r="88" stroke="${G}" stroke-width="3"/>
    <circle cx="110" cy="110" r="70" stroke="${G}" stroke-width="1.5" opacity="0.4"/>
    <path d="M110 40 L126 110 L110 180 L94 110 Z" stroke="${G}" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="110" cy="110" r="7" fill="${G}"/>
    <path d="M110 16 L110 28 M110 192 L110 204 M16 110 L28 110 M192 110 L204 110" stroke="${G}" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
  </svg>`,
  pen: `<svg class="motif-svg" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M150 26 L194 70 L92 172 L40 180 L48 128 Z" stroke="${G}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M134 42 L178 86 M48 128 L92 172" stroke="${G}" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <path d="M28 206 C 70 196, 150 196, 192 206" stroke="${G}" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
  </svg>`,
  door: `<svg class="motif-svg" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 224 L40 60 A 60 60 0 0 1 160 60 L160 224" stroke="${G}" stroke-width="3" stroke-linecap="round"/>
    <path d="M60 224 L60 66 A 40 40 0 0 1 140 66 L140 224" stroke="${G}" stroke-width="1.5" opacity="0.45"/>
    <path d="M100 108 L100 96 M100 96 l-7 8 M100 96 l7 8" stroke="${G}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M84 152 a16 16 0 1 1 32 0 l0 20 a16 16 0 1 1 -32 0 Z" stroke="${G}" stroke-width="2.5" opacity="0.9"/>
    <path d="M16 224 L184 224" stroke="${G}" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
};

/* ---------- helpers ---------- */
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const lines = (n) =>
  `<div class="writelines">${'<div class="ln"></div>'.repeat(n)}</div>`;

const footer = (left, num) =>
  `<div class="footer"><span>${esc(left)}</span><span><span class="gold">unshackledtruthmedia.com</span>&nbsp;&nbsp;·&nbsp;&nbsp;${num}</span></div>`;

/* ---------- page templates ---------- */
function coverPage(p) {
  return `<section class="page dark cover" id="cover">
    <div class="cover-frame"></div>
    <div class="cover-inner">
      <div>
        <div class="cover-brand">Unshackled Truth Media</div>
        <div class="cover-rule"></div>
        <div class="cover-kicker">${esc(p.kicker)}</div>
      </div>
      <h1 class="cover-title">${p.coverTitle}</h1>
      <p class="cover-sub">${esc(p.subtitle)}</p>
      <div class="cover-motif">${motifs[p.motif] ?? motifs.crack}</div>
      <div>
        <div class="cover-author">Christopher Kelly</div>
        <div class="cover-site">unshackledtruthmedia.com</div>
      </div>
    </div>
  </section>`;
}

function backCoverPage(p) {
  return `<section class="page dark">
    <div class="cover-frame"></div>
    <div class="cover-inner" style="justify-content:center">
      <div class="back-blurb">${p.backBlurb.map((t) => `<p>${esc(t)}</p>`).join("")}</div>
      <div class="back-verse">&ldquo;${esc(p.backVerse.text)}&rdquo;<span class="ref">${esc(p.backVerse.ref)}</span></div>
      <div style="margin-top:0.55in">
        <div class="cover-brand" style="font-size:9pt">Unshackled Truth Media</div>
        <div class="cover-site">unshackledtruthmedia.com &nbsp;·&nbsp; @unshackledtruthmedia</div>
        <div class="cover-site" style="margin-top:0.06in">&copy; ${new Date().getFullYear()} Christopher Kelly. For personal use only.</div>
      </div>
    </div>
  </section>`;
}

function introPage(p, pageNo) {
  const it = p.intro;
  return `<section class="page interior">
    <div class="eyebrow">${esc(it.eyebrow)}</div>
    <h1 class="int">${esc(it.title)}</h1>
    ${it.lead ? `<p class="lead">${esc(it.lead)}</p>` : ""}
    ${it.paras.map((t) => `<p class="body" style="margin-top:0.14in">${esc(t)}</p>`).join("")}
    ${it.quote ? `<div class="quote"><div class="q">&ldquo;${esc(it.quote.text)}&rdquo;</div><div class="src">${esc(it.quote.src)}</div></div>` : ""}
    ${it.sign ? `<p class="body" style="margin-top:0.2in;font-family:Fraunces;font-style:italic;font-size:12.5pt;color:var(--ink)">${esc(it.sign)}</p>` : ""}
    ${footer(p.footerLeft, pageNo)}
  </section>`;
}

function howPage(p, pageNo) {
  const h = p.how;
  return `<section class="page interior">
    <div class="eyebrow">How to use this</div>
    <h1 class="int">${esc(h.title)}</h1>
    ${h.steps
      .map(
        (s, i) => `
      <h2 class="int"><span style="color:var(--gold)">${i + 1}.</span> ${esc(s.t)}</h2>
      <p class="body">${esc(s.d)}</p>`
      )
      .join("")}
    ${h.note ? `<div class="verse-band" style="margin-top:0.3in"><div class="v">${esc(h.note)}</div></div>` : ""}
    ${footer(p.footerLeft, pageNo)}
  </section>`;
}

/* journal / devotional / planner day spread(s) */
function dayPages(p, d, idx, startNo) {
  const pages = [];
  // Page A: reading
  pages.push(`<section class="page interior">
    <div class="daytag">${esc(d.tag)}</div>
    <h1 class="int">${esc(d.title)}</h1>
    ${d.reading.map((t) => `<p class="body" style="font-size:11.5pt">${esc(t)}</p>`).join("")}
    ${d.quote ? `<div class="quote"><div class="q">&ldquo;${esc(d.quote.text)}&rdquo;</div><div class="src">${esc(d.quote.src)}</div></div>` : ""}
    ${d.verse ? `<div class="verse-band"><div class="v">&ldquo;${esc(d.verse.text)}&rdquo;</div><div class="ref">${esc(d.verse.ref)}</div></div>` : ""}
    ${footer(p.footerLeft, startNo)}
  </section>`);
  // Page B: response
  const promptBlocks = d.prompts
    .map((q) => `<div class="prompt">${esc(q.q)}</div>${lines(q.lines ?? 4)}`)
    .join("");
  pages.push(`<section class="page interior">
    <div class="daytag">${esc(d.tag)} · Your turn</div>
    ${promptBlocks}
    ${
      d.action
        ? `<div class="verse-band" style="margin-top:0.26in"><div class="ref" style="margin-top:0">One move today</div><div class="v" style="font-style:normal;font-family:Inter;font-size:10.5pt;line-height:1.6">${esc(d.action)}</div></div>`
        : ""
    }
    ${d.prayer ? `<div class="quote" style="margin-top:0.24in"><div class="q">${esc(d.prayer)}</div><div class="src">Pray it honest</div></div>` : ""}
    ${footer(p.footerLeft, startNo + 1)}
  </section>`);
  return pages;
}

function cardSheets(p, startNo) {
  const pages = [];
  const cards = p.cards;
  for (let i = 0; i < cards.length; i += 4) {
    const four = cards.slice(i, i + 4);
    pages.push(`<section class="page interior" style="padding:0.6in">
      <div class="cardsheet">
        ${four
          .map(
            (c, j) => `<div class="card">
          <div class="no">${esc(p.cardLabel)} ${String(i + j + 1).padStart(2, "0")}</div>
          <div class="truth">${esc(c.truth)}</div>
          <div>
            <div class="scripture">&ldquo;${esc(c.verse)}&rdquo;</div>
            <div class="ref">${esc(c.ref)}</div>
            <div class="action"><b>${esc(c.actionLabel ?? "Today")}</b> &nbsp;${esc(c.action)}</div>
          </div>
        </div>`
          )
          .join("")}
      </div>
      ${footer(p.footerLeft, startNo + pages.length)}
    </section>`);
  }
  return pages;
}

function worksheetPages(p, startNo) {
  return p.worksheets.map((w, k) => {
    const blocks = w.blocks
      .map((b) => {
        if (b.type === "prompt") return `<div class="prompt">${esc(b.q)}</div>${lines(b.lines ?? 3)}`;
        if (b.type === "checks")
          return `<div class="prompt">${esc(b.q)}</div>` + b.items.map((it) => `<div class="checkrow"><div class="box"></div><div class="lbl">${esc(it)}</div></div>`).join("");
        if (b.type === "verse") return `<div class="verse-band"><div class="v">&ldquo;${esc(b.text)}&rdquo;</div><div class="ref">${esc(b.ref)}</div></div>`;
        if (b.type === "note") return `<p class="body" style="margin-top:0.1in">${esc(b.text)}</p>`;
        return "";
      })
      .join("");
    return `<section class="page interior">
      <div class="daytag">${esc(w.tag)}</div>
      <h1 class="int" style="font-size:24pt">${esc(w.title)}</h1>
      ${w.lead ? `<p class="body">${esc(w.lead)}</p>` : ""}
      ${blocks}
      ${footer(p.footerLeft, startNo + k)}
    </section>`;
  });
}

/* planner: one page per day + weekly review pages */
function plannerDayPage(p, d, pageNo) {
  return `<section class="page interior" style="padding:0.75in 0.9in 0.85in">
    <div style="display:flex;justify-content:space-between;align-items:baseline">
      <div class="daytag">Day ${d.n} · ${esc(d.week)}</div>
      <div class="eyebrow" style="letter-spacing:0.2em">${esc(d.motto)}</div>
    </div>
    <h1 class="int" style="font-size:22pt;margin-bottom:0.08in">${esc(d.title)}</h1>
    <p class="body" style="font-size:10.5pt">${esc(d.charge)}</p>
    <div class="verse-band" style="margin:0.16in 0">
      <div class="v" style="font-size:11pt">&ldquo;${esc(d.verse.text)}&rdquo;</div>
      <div class="ref">${esc(d.verse.ref)}</div>
    </div>
    <div class="prompt" style="margin-top:0.12in">Today's one move</div>
    <p class="body" style="font-size:10.5pt;color:var(--ink)">${esc(d.move)}</p>
    ${lines(2)}
    <div class="prompt" style="margin-top:0.16in">Daily anchors</div>
    <div class="checkrow"><div class="box"></div><div class="lbl">Word: read ${esc(d.reading)}</div></div>
    <div class="checkrow"><div class="box"></div><div class="lbl">Prayer: honest, out loud, like talking to a friend</div></div>
    <div class="checkrow"><div class="box"></div><div class="lbl">Reach out: one honest text, call, or conversation</div></div>
    <div class="prompt" style="margin-top:0.16in">Tonight's gut check: ${esc(d.evening)}</div>
    ${lines(3)}
    ${footer(p.footerLeft, pageNo)}
  </section>`;
}

function weeklyReviewPage(p, w, pageNo) {
  return `<section class="page interior">
    <div class="daytag">Week ${w.n} Reckoning</div>
    <h1 class="int" style="font-size:24pt">${esc(w.title)}</h1>
    <p class="body">${esc(w.lead)}</p>
    ${w.prompts.map((q) => `<div class="prompt">${esc(q)}</div>${lines(3)}`).join("")}
    <div class="verse-band" style="margin-top:0.2in"><div class="v">&ldquo;${esc(w.verse.text)}&rdquo;</div><div class="ref">${esc(w.verse.ref)}</div></div>
    ${footer(p.footerLeft, pageNo)}
  </section>`;
}

function closingPage(p, pageNo) {
  const c = p.closing;
  return `<section class="page interior">
    <div class="eyebrow">${esc(c.eyebrow)}</div>
    <h1 class="int">${esc(c.title)}</h1>
    ${c.paras.map((t) => `<p class="body" style="font-size:11.5pt">${esc(t)}</p>`).join("")}
    <h2 class="int" style="margin-top:0.34in">Keep going</h2>
    ${c.next
      .map(
        (n) => `<div class="checkrow" style="margin:0.12in 0"><div class="box" style="border-radius:999px"></div><div class="lbl"><b style="color:var(--ink)">${esc(n.t)}</b> &nbsp;${esc(n.d)}</div></div>`
      )
      .join("")}
    ${footer(p.footerLeft, pageNo)}
  </section>`;
}

/* ---------- assemble ---------- */
export function buildProduct(p) {
  const pages = [coverPage(p)];
  let no = 2;
  if (p.intro) { pages.push(introPage(p, no)); no += 1; }
  if (p.how) { pages.push(howPage(p, no)); no += 1; }
  if (p.days) for (let i = 0; i < p.days.length; i++) { pages.push(...dayPages(p, p.days[i], i, no)); no += 2; }
  if (p.plannerWeeks) {
    for (const w of p.plannerWeeks) {
      for (const d of w.days) { pages.push(plannerDayPage(p, d, no)); no += 1; }
      pages.push(weeklyReviewPage(p, w.review, no)); no += 1;
    }
  }
  if (p.cards) { const cs = cardSheets(p, no); pages.push(...cs); no += cs.length; }
  if (p.worksheets) { const ws = worksheetPages(p, no); pages.push(...ws); no += ws.length; }
  if (p.closing) { pages.push(closingPage(p, no)); no += 1; }
  pages.push(backCoverPage(p));
  return `<!doctype html><html><head><meta charset="utf-8">
  <link rel="stylesheet" href="./shared.css">
  <style>@page { size: Letter; margin: 0; } ${p.extraCss ?? ""}</style>
  <title>${esc(p.title)}</title></head><body>${pages.join("\n")}</body></html>`;
}

const dataDir = path.join(ROOT, "data");
const files = (await readdir(dataDir)).filter((f) => f.endsWith(".mjs"));
for (const f of files) {
  const mod = await import(path.join(dataDir, f));
  const p = mod.default;
  const html = buildProduct(p);
  const out = path.join(ROOT, "html", `${p.slug}.html`);
  await writeFile(out, html);
  console.log(`built ${p.slug}.html`);
}
