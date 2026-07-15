// Builds carousel slide HTML (1080x1350 per slide) from data.mjs
import { carousels, HANDLE, URL } from "./data.mjs";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const COVERS = {
  "cover-journal": "../../products/out/covers/cracks-7-day-journal-cover.png",
  "cover-gap": "../../products/out/covers/stand-in-the-gap-cards-cover.png",
  "cover-stoprun": "../../products/out/covers/stop-running-worksheet-cover.png",
  "cover-workbook": "../../assets/unshackled-truth-workbook.jpg",
  "cover-launch": "../../products/out/covers/launch-point-planner-cover.png",
  "cover-freereflection": "../../products/out/covers/cracks-free-reflection-cover.png",
  "book-cover.jpg": "../../assets/book-cover.jpg",
};
const imgSrc = (name) => (name.startsWith("cover-") ? COVERS[name] : name === "book-cover.jpg" ? COVERS[name] : ["chris-at-16.jpg", "chris-now.jpg"].includes(name) ? `../../assets/${name}` : `../img/${name}`);

const CSS = `
@font-face { font-family:"Fraunces"; src:url("../../node_modules/@fontsource/fraunces/files/fraunces-latin-900-normal.woff2") format("woff2"); font-weight:900; }
@font-face { font-family:"Fraunces"; src:url("../../node_modules/@fontsource/fraunces/files/fraunces-latin-600-normal.woff2") format("woff2"); font-weight:600; }
@font-face { font-family:"Fraunces"; src:url("../../node_modules/@fontsource/fraunces/files/fraunces-latin-400-italic.woff2") format("woff2"); font-weight:400; font-style:italic; }
@font-face { font-family:"Inter"; src:url("../../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2") format("woff2"); font-weight:500; }
@font-face { font-family:"Inter"; src:url("../../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2") format("woff2"); font-weight:600; }
* { margin:0; padding:0; box-sizing:border-box; }
body { background:#111; font-family:Inter,sans-serif; }
.slide { width:1080px; height:1350px; position:relative; overflow:hidden; background:#0b0a08; color:#f2e8d5; }
.bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
.scrim { position:absolute; inset:0; background:linear-gradient(180deg, rgba(8,7,5,.78) 0%, rgba(8,7,5,.30) 46%, rgba(8,7,5,.86) 100%); }
.scrim.heavy { background:linear-gradient(180deg, rgba(8,7,5,.86) 0%, rgba(8,7,5,.55) 50%, rgba(8,7,5,.92) 100%); }
.frame { position:absolute; inset:34px; border:1.5px solid rgba(201,155,74,.5); pointer-events:none; }
.content { position:absolute; inset:34px; padding:72px 76px 96px; display:flex; flex-direction:column; }
.kicker { font-weight:600; font-size:27px; letter-spacing:.34em; text-indent:.34em; text-transform:uppercase; color:#c99b4a; }
.rule { width:64px; height:2px; background:#c99b4a; margin:26px 0 34px; }
h1 { font-family:Fraunces; font-weight:900; font-size:84px; line-height:1.12; text-wrap:balance; color:#f6efdf; text-shadow:0 3px 24px rgba(0,0,0,.55); }
h1.smaller { font-size:68px; }
.body { margin-top:30px; font-family:Fraunces; font-weight:400; font-style:italic; font-size:40px; line-height:1.45; color:#d9cdb2; max-width:840px; text-shadow:0 2px 16px rgba(0,0,0,.6); }
.quote-mark { font-family:Fraunces; font-weight:900; font-size:150px; line-height:.6; color:#c99b4a; margin-bottom:8px; }
.quote { font-family:Fraunces; font-weight:600; font-size:66px; line-height:1.3; text-wrap:balance; color:#f6efdf; text-shadow:0 3px 24px rgba(0,0,0,.6); }
.src { margin-top:36px; font-weight:600; font-size:26px; letter-spacing:.26em; text-indent:.26em; text-transform:uppercase; color:#c99b4a; }
.footer { position:absolute; left:110px; right:110px; bottom:64px; display:flex; justify-content:space-between; align-items:center; }
.brand { font-weight:600; font-size:24px; letter-spacing:.3em; text-indent:.3em; text-transform:uppercase; color:rgba(242,232,213,.75); }
.dots { display:flex; gap:12px; align-items:center; }
.dot { width:12px; height:12px; border-radius:50%; background:rgba(242,232,213,.32); }
.dot.on { background:#c99b4a; }
.swipe { font-weight:600; font-size:26px; letter-spacing:.2em; color:#c99b4a; }
.center { justify-content:center; text-align:center; align-items:center; }
.lt-label { font-weight:600; font-size:28px; letter-spacing:.34em; text-indent:.34em; text-transform:uppercase; }
.lie-box { border-left:6px solid rgba(217,205,178,.4); padding:8px 0 8px 40px; margin-top:44px; }
.lie { font-family:Fraunces; font-weight:600; font-style:italic; font-size:52px; line-height:1.3; color:#b9ac93; text-decoration:line-through; text-decoration-color:rgba(201,155,74,.8); text-decoration-thickness:4px; }
.truth-box { border-left:6px solid #c99b4a; padding:8px 0 8px 40px; margin-top:56px; }
.truth { font-family:Fraunces; font-weight:900; font-size:60px; line-height:1.25; color:#f6efdf; }
.ref { margin-top:22px; font-weight:600; font-size:27px; letter-spacing:.3em; text-indent:.3em; text-transform:uppercase; color:#c99b4a; }
.list { margin-top:40px; display:flex; flex-direction:column; gap:26px; }
.li { display:flex; gap:24px; align-items:baseline; font-family:Fraunces; font-weight:600; font-size:46px; line-height:1.3; color:#f2e8d5; text-shadow:0 2px 14px rgba(0,0,0,.65); }
.li::before { content:""; width:14px; height:14px; border-radius:50%; background:#c99b4a; flex:none; transform:translateY(-6px); }
.verse { font-family:Fraunces; font-weight:600; font-style:italic; font-size:62px; line-height:1.4; text-wrap:balance; color:#f6efdf; text-shadow:0 3px 24px rgba(0,0,0,.6); }
.url-pill { display:inline-block; margin-top:52px; padding:26px 54px; border:2px solid #c99b4a; border-radius:999px; font-weight:600; font-size:34px; letter-spacing:.12em; color:#f6efdf; background:rgba(8,7,5,.55); }
.note { margin-top:40px; font-weight:500; font-size:30px; line-height:1.5; color:#c9bda2; }
.cover-float { max-height:620px; max-width:520px; border-radius:10px; box-shadow:0 40px 90px rgba(0,0,0,.7), 0 0 0 1px rgba(201,155,74,.35); margin:48px 0 8px; }
.split-wrap { position:absolute; inset:0; display:grid; grid-template-rows:1fr 1fr; }
.split-wrap img { width:100%; height:100%; object-fit:cover; }
.split-wrap .half { position:relative; overflow:hidden; }
.split-line { position:absolute; left:0; right:0; top:calc(50% - 2px); height:4px; background:#c99b4a; z-index:3; }
.split-title { position:absolute; left:76px; right:76px; bottom:150px; z-index:4; }
.yeartag { position:absolute; top:28px; left:36px; z-index:4; font-weight:600; font-size:30px; letter-spacing:.3em; text-indent:.3em; color:#f6efdf; background:rgba(8,7,5,.65); padding:14px 26px; border-radius:8px; }
`;

/* CSS mood backgrounds (no external image needed) */
const MOODS = {
  "css-night": `background:
    radial-gradient(ellipse 120% 50% at 50% 118%, rgba(64,86,122,.34), transparent 60%),
    radial-gradient(ellipse 70% 30% at 78% -6%, rgba(120,150,200,.14), transparent 60%),
    repeating-linear-gradient(92deg, rgba(255,255,255,.014) 0 3px, transparent 3px 7px),
    linear-gradient(180deg,#0a0c12 0%,#11141d 55%,#080a0f 100%)`,
  "css-gold": `background:
    radial-gradient(ellipse 130% 55% at 50% 115%, rgba(201,155,74,.36), transparent 62%),
    radial-gradient(ellipse 60% 26% at 22% -4%, rgba(201,155,74,.10), transparent 60%),
    repeating-linear-gradient(88deg, rgba(255,255,255,.014) 0 3px, transparent 3px 7px),
    linear-gradient(180deg,#0d0a07 0%,#191207 58%,#0b0906 100%)`,
  "css-dawn": `background:
    radial-gradient(ellipse 150% 62% at 50% 108%, rgba(224,164,74,.55), rgba(160,96,40,.22) 42%, transparent 66%),
    radial-gradient(ellipse 60% 24% at 50% 100%, rgba(255,214,140,.5), transparent 60%),
    linear-gradient(180deg,#0a0b10 0%,#171008 62%,#241505 100%)`,
  "css-storm": `background:
    radial-gradient(ellipse 90% 42% at 50% 116%, rgba(201,155,74,.4), transparent 58%),
    radial-gradient(ellipse 130% 60% at 18% -12%, rgba(42,52,70,.8), transparent 60%),
    radial-gradient(ellipse 130% 60% at 88% -8%, rgba(30,36,50,.9), transparent 62%),
    linear-gradient(180deg,#0b0d13 0%,#10131b 60%,#0a0805 100%)`,
};

function footer(i, isFirst) {
  const dots = [0, 1, 2, 3].map((k) => `<div class="dot ${k === i ? "on" : ""}"></div>`).join("");
  return `<div class="footer"><div class="brand">Unshackled Truth Media</div>${isFirst ? `<div class="swipe">SWIPE &rarr;</div>` : `<div class="dots">${dots}</div>`}</div>`;
}

function slideHtml(s, i) {
  const first = i === 0;
  const bgTag = (name, heavy = false) =>
    name.startsWith("css-")
      ? `<div class="bg" style="${MOODS[name]}"></div>`
      : `<img class="bg" src="${imgSrc(name)}" style="filter:brightness(.72) saturate(.82) contrast(1.05)"><div class="scrim ${heavy ? "heavy" : ""}"></div>`;
  let inner = "";
  if (s.type === "hook") {
    inner = `${bgTag(s.bg)}<div class="frame"></div><div class="content" style="justify-content:flex-end;padding-bottom:190px">
      <div class="kicker">${esc(s.kicker)}</div><div class="rule"></div>
      <h1>${esc(s.title)}</h1></div>`;
  } else if (s.type === "quote") {
    inner = `${bgTag(s.bg, true)}<div class="frame"></div><div class="content center">
      <div class="quote-mark">&ldquo;</div>
      <div class="quote">${esc(s.text)}</div>
      <div class="src">${esc(s.src)}</div></div>`;
  } else if (s.type === "text") {
    inner = `${bgTag(s.bg, true)}<div class="frame"></div><div class="content" style="justify-content:flex-end;padding-bottom:190px">
      <div class="kicker">${esc(s.kicker)}</div><div class="rule"></div>
      <h1 class="smaller">${esc(s.title)}</h1>
      ${s.body ? `<div class="body">${esc(s.body)}</div>` : ""}</div>`;
  } else if (s.type === "lietruth") {
    inner = `${bgTag(s.bg, true)}<div class="frame"></div><div class="content" style="justify-content:center">
      <div class="lt-label" style="color:#b9ac93">The lie</div>
      <div class="lie-box"><div class="lie">${esc(s.lie)}</div></div>
      <div class="lt-label" style="color:#c99b4a;margin-top:70px">God's truth</div>
      <div class="truth-box"><div class="truth">&ldquo;${esc(s.truth)}&rdquo;</div><div class="ref">${esc(s.ref)}</div></div></div>`;
  } else if (s.type === "list") {
    inner = `${bgTag(s.bg, true)}<div class="frame"></div><div class="content" style="justify-content:center">
      <div class="kicker">${esc(s.kicker)}</div><div class="rule"></div>
      <h1 class="smaller" style="font-size:58px">${esc(s.title)}</h1>
      <div class="list">${s.items.map((it) => `<div class="li"><span>${esc(it)}</span></div>`).join("")}</div></div>`;
  } else if (s.type === "verse") {
    inner = `${bgTag(s.bg, true)}<div class="frame"></div><div class="content center">
      <div class="quote-mark">&ldquo;</div>
      <div class="verse">${esc(s.text)}</div>
      <div class="ref" style="margin-top:44px">${esc(s.ref)}</div></div>`;
  } else if (s.type === "photo") {
    inner = `${bgTag(s.bg)}<div class="frame"></div><div class="content" style="justify-content:flex-end;padding-bottom:190px">
      <div class="kicker">${esc(s.kicker)}</div><div class="rule"></div>
      <h1 class="smaller">${esc(s.title)}</h1>
      ${s.body ? `<div class="body" style="font-size:36px">${esc(s.body)}</div>` : ""}</div>`;
  } else if (s.type === "split") {
    inner = `<div class="split-wrap">
      <div class="half"><img src="${imgSrc(s.topImg)}"><div class="yeartag">1999</div></div>
      <div class="half"><img src="${imgSrc(s.bottomImg)}"><div class="yeartag" style="top:auto;bottom:150px;left:auto;right:36px">2026</div></div>
      </div><div class="split-line"></div>
      <div class="scrim" style="background:linear-gradient(180deg,transparent 40%, rgba(8,7,5,.9) 100%)"></div>
      <div class="frame" style="z-index:5"></div>
      <div class="split-title"><div class="kicker">${esc(s.kicker)}</div><div class="rule"></div><h1 class="smaller" style="font-size:60px">${esc(s.title)}</h1></div>`;
  } else if (s.type === "cta") {
    const isCover = s.bg.startsWith("cover-") || s.bg === "book-cover.jpg";
    if (isCover) {
      inner = `<div class="bg" style="background:radial-gradient(ellipse 120% 60% at 50% 110%, rgba(201,155,74,.25), transparent 60%), linear-gradient(180deg,#0d0b08,#171208 60%,#0d0b08)"></div>
        <div class="frame"></div><div class="content center" style="padding-top:90px">
        <h1 class="smaller" style="font-size:58px">${esc(s.title)}</h1>
        <img class="cover-float" src="${imgSrc(s.bg)}">
        <div class="body" style="font-style:normal;font-family:Inter;font-weight:500;font-size:32px;margin-top:26px">${esc(s.body)}</div>
        <div class="url-pill">${URL}</div>
        <div class="note">${esc(s.note)}</div></div>`;
    } else {
      inner = `${bgTag(s.bg, true)}<div class="frame"></div><div class="content center">
        <h1 class="smaller">${esc(s.title)}</h1>
        <div class="body" style="font-style:normal;font-family:Inter;font-weight:500;font-size:34px">${esc(s.body)}</div>
        <div class="url-pill">${URL}</div>
        <div class="note">${esc(s.note)}</div></div>`;
    }
  }
  return `<section class="slide" id="s${i}">${inner}${footer(i, first)}</section>`;
}

await mkdir(path.join(ROOT, "html"), { recursive: true });
for (const c of carousels) {
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style><title>${c.slug}</title></head><body>${c.slides.map(slideHtml).join("\n")}</body></html>`;
  await writeFile(path.join(ROOT, "html", `${c.slug}.html`), html);
  console.log("built", c.slug);
}
