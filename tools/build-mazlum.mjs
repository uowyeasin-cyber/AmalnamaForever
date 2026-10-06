// Builds mazlum.json for the Mazlum Corner: the latest news, videos and lectures about
// oppressed Muslims (Palestine, Sudan, Yemen, Iran, Uyghurs, Kashmir, Rohingya).
// Sources: Google News RSS (English + Bangla), BBC Bangla, Al Jazeera, and the public
// YouTube feeds of news channels. Lectures come from videos.json (built just before this).
// Run by .github/workflows/videos.yml every two hours.
import {writeFileSync, readFileSync, existsSync} from "node:fs";

export const REGIONS = {
  palestine: /gaza|palestin|west bank|rafah|khan ?younis|jenin|nablus|tulkarm|al-?aqsa|jerusalem|hebron|গাজা|ফিলিস্তিন|পশ্চিম তীর|আল-?আকসা|غزة|فلسطين|الضفة|الأقصى/i,
  sudan: /sudan|darfur|el[- ]?fasher|khartoum|kordofan|সুদান|দারফুর|السودان|الفاشر|دارفور/i,
  yemen: /yemen|houthi|sanaa|sana'a|hodeidah|\baden\b|ইয়েমেন|হুথি|اليمن|الحوثي|صنعاء/i,
  iran: /\biran(?!ian rial)|tehran|isfahan|tabriz|ইরান|তেহরান|إيران|طهران/i,
  uyghur: /uyghur|uighur|xinjiang|east turkistan|উইঘুর|জিনজিয়াং|الأويغور|الإيغور|شينجيانغ/i,
  kashmir: /kashmir|srinagar|কাশ্মীর|كشمير/i,
  rohingya: /rohingya|rakhine|arakan|cox'?s bazar|bhasan char|রোহিঙ্গা|আরাকান|রাখাইন|কক্সবাজার|الروهينغا|أراكان/i,
};
const NEWSQ = {
  palestine: ["Gaza OR \"West Bank\" OR Palestinians", "গাজা OR ফিলিস্তিন"],
  sudan: ["Sudan Darfur OR \"El Fasher\" OR RSF civilians", "সুদান"],
  yemen: ["Yemen humanitarian OR Houthi OR civilians", "ইয়েমেন"],
  iran: ["Iran strikes civilians OR Iran war", "ইরান হামলা"],
  uyghur: ["Uyghur OR Uyghurs OR \"Xinjiang camps\"", "উইঘুর"],
  kashmir: ["Kashmir Kashmiris OR \"Jammu and Kashmir\"", "কাশ্মীর"],
  rohingya: ["Rohingya OR Rakhine OR Arakan", "রোহিঙ্গা OR আরাকান"],
};
// news channels on YouTube (videos are kept only when they are about one of the regions)
const YT = [
  ["UCNye-wNBqNL5ZzHSJj3l8Bg", "Al Jazeera English"], ["UCR0fZh5SBxxMNYdg0VzRFkg", "Middle East Eye"],
  ["UCV3Nm3T-XAgVhKH9jT0ViRg", "AJ+"], ["UC7fWeaHhqgM4Ry-RMpM2YYw", "TRT World"],
  ["UCfiwzLy-8yKzIbsmZTzxDgw", "Al Jazeera Arabic"], ["UCWJPKXhkcMGXafdtqGx1mEw", "The Thinking Muslim"],
];
const RSS = [["https://www.aljazeera.com/xml/rss/all.xml", "Al Jazeera", "en"], ["https://feeds.bbci.co.uk/bengali/rss.xml", "BBC বাংলা", "bn"]];

const UA = {"User-Agent": "Mozilla/5.0 (compatible; AmalnamaBot/1.0; +https://uowyeasin-cyber.github.io/AmalnamaForever/)"};
const dec = (s) => String(s || "").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/<[^>]+>/g, "").trim();
const tag = (x, t) => { const m = x.match(new RegExp("<" + t + "[^>]*>([\\s\\S]*?)</" + t + ">")); return m ? dec(m[1]) : ""; };
async function get(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try { const r = await fetch(url, {headers: UA, signal: AbortSignal.timeout(12000)}); if (r.ok) return await r.text(); if (r.status < 500 && r.status !== 404 && r.status !== 429) break; }
    catch (e) { /* retry */ }
    if (i < tries - 1) await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
  }
  return null;
}
function regionOf(text) { for (const [k, re] of Object.entries(REGIONS)) if (re.test(text)) return k; return null; }
const iso = (d) => { const t = Date.parse(d); return isNaN(t) ? new Date().toISOString() : new Date(t).toISOString(); };

const out = [];
const seen = new Set();
function push(it) {
  const key = it.id || it.t.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim().slice(0, 70);
  if (!it.t || seen.has(key)) return; seen.add(key); out.push(it);
}
const MAXAGE = 21 * 864e5;

// 1 · Google News per region, English + Bangla
for (const [r, [en, bn]] of Object.entries(NEWSQ)) {
  for (const [q, hl, gl, lang] of [[en, "en-US", "US", "en"], [bn, "bn", "BD", "bn"]]) {
    const x = await get(`https://news.google.com/rss/search?q=${encodeURIComponent(q + " when:7d")}&hl=${hl}&gl=${gl}&ceid=${gl}:${hl.split("-")[0]}`);
    if (!x) { console.error("news skip", r, lang); continue; }
    for (const e of x.split("<item>").slice(1, 26)) {
      let t = tag(e, "title"), src = tag(e, "source");
      if (src && t.endsWith(" - " + src)) t = t.slice(0, -(src.length + 3));
      const pub = iso(tag(e, "pubDate"));
      if (Date.now() - Date.parse(pub) > MAXAGE) continue;
      push({k: "article", r, t, u: tag(e, "link"), src: src || "Google News", pub, lang});
    }
  }
}
// 2 · publisher feeds (with pictures when they have them), kept only when they match a region
for (const [url, name, lang] of RSS) {
  const x = await get(url); if (!x) { console.error("rss skip", name); continue; }
  for (const e of x.split("<item").slice(1, 60)) {
    const t = tag(e, "title"), d = tag(e, "description"), r = regionOf(t + " " + d); if (!r) continue;
    const img = (e.match(/<media:(?:thumbnail|content)[^>]+url="([^"]+)"/) || e.match(/<enclosure[^>]+url="([^"]+)"/) || [])[1] || "";
    push({k: "article", r, t, u: tag(e, "link") || (e.match(/<link>([^<]+)/) || [])[1], src: name, pub: iso(tag(e, "pubDate")), lang, img: img.replace(/&amp;/g, "&"), d: d.slice(0, 220)});
  }
}
// 3 · news videos
for (const [id, name] of YT) {
  const x = await get("https://www.youtube.com/feeds/videos.xml?channel_id=" + id); if (!x) { console.error("yt skip", name); continue; }
  for (const e of x.split("<entry>").slice(1, 16)) {
    const v = (e.match(/<yt:videoId>([^<]+)/) || [])[1], t = tag(e, "title"), d = tag(e, "media:description");
    if (!v || /\/shorts\//.test((e.match(/<link[^>]+href="([^"]+)"/) || [])[1] || "")) continue;
    const r = regionOf(t + " " + d.slice(0, 400)); if (!r) continue;
    push({k: "video", r, t, id: v, src: name, pub: iso(tag(e, "published")), lang: /[؀-ۿ]/.test(t) ? "ar" : "en"});
  }
}
// 4 · lectures and reminders from the trusted Islamic channels (videos.json)
if (existsSync("videos.json")) {
  try {
    for (const v of JSON.parse(readFileSync("videos.json", "utf8")).items || []) {
      const r = regionOf(v.t); if (r) push({k: "lecture", r, t: v.t, id: v.id, src: v.ch, pub: v.pub, lang: /[ঀ-৿]/.test(v.t) ? "bn" : "en"});
    }
  } catch (e) { console.error("videos.json", e.message); }
}

out.sort((a, b) => (b.pub || "").localeCompare(a.pub || ""));
// keep it light: at most 45 items per region
const per = {}, items = out.filter((it) => (per[it.r] = (per[it.r] || 0) + 1) <= 45);
const counts = {}; items.forEach((i) => { counts[i.r] = (counts[i.r] || 0) + 1; });
if (items.length < 20 && existsSync("mazlum.json")) { console.error("too few items, keeping the previous file"); process.exit(0); }
writeFileSync("mazlum.json", JSON.stringify({updated: new Date().toISOString(), counts, items}));
console.log("mazlum:", items.length, counts);
