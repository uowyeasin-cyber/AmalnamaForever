// Amalnama feeds — shared by the GitHub Action (tools/build-*.mjs, writes the JSON files)
// and the live endpoint (server/push/api/feed.js, answers the app's refresh button).
// No file system access here: callers pass in the previous data and save the result.

// ---------- Islamic video channels: [channel id, name, shelf]
export const CHANNELS = [
  ["UCNB_OaI4524fASt8h0IL8dw","Mufti Menk","trend"],["UC3vHW2h22WE-pNi5WJtRIjg","Yaqeen Institute","trend"],["UCtm8rtofLSnaIBi3noB0INg","Omar Suleiman","trend"],
  ["UCxStLx7yb96MGBfIMo20x7Q","Mizanur Rahman Azhari","trend"],["UCuxth2BimHUigZ344JhcFPw","Shaikh Ahmadullah","trend"],["UC0xsiI7ESjvehM_VSKqQJOw","Abu Taw Haa Muhammad Adnan","trend"],
  ["UClUa7-iHJNKEM2e_zWYSPQg","Yasir Qadhi","history"],["UCf0O2efB4K66UUaT7QJPVNA","Al Muqaddimah","history"],["UCHGAqdQBKTVON_FUCIYCh3Q","MercifulServant","history"],
  ["UCzBbekjXc2uqrY9C4bdwbbA","10 Minute Madrasah","life"],["UCjNY1NRozZEWKPHMp992gjg","The Productive Muslim Company","life"],["UCvJyEIx_it2jFYP5M1OzGng","One Message Foundation","life"],["UC5vCwookDYaSy6ACyKaAjNA","ilmfeed","life"],
  ["UCRtiU-lpcBSi-ipFKyfIkug","Nouman Ali Khan","edu"],["UCtsN0omQRQ3_XgnLNioqxPQ","Majed Mahmoud","edu"],["UCyxM7MgZkDe5stZpb6CiOcA","Digital Mimbar","edu"],["UC361kz8bZYcYuF7k5j2kXdw","Hamza Yusuf","edu"],
  ["UCx420FfPBbEboBvnYjIemzw","EFDawah","dawah"],["UCQHRLH8RQIrdGWMhf5heWiA","OnePath Network","dawah"],["UCPubBVDCzu7IWWnitlkEsNw","Towards Eternity","dawah"],["UCXHz5brnR9qwqvQvF3VJdgQ","The Deen Show","dawah"],["UCeCAQhKbU2ETNWxWxB94HgA","The Muslim Lantern","dawah"],
  ["UCmMcOjsVehVlEOteyrhjI2Q","Alafasy","tilawat"],
  ["UCLrUV5FkWV8lm9omd5vQApQ","Yaqeen Institute","edu"],["UCz4AXmFeSbi-0vPXI102Q5w","Muslim Central","edu"],
  ["UCHDFNoOk8WOXtHo8DIc8efQ","Mohammed Hijab","debate"],["UCeZBhrU8xHcik0ZgtDwjsdA","Sapience Institute","debate"],["UCK9GD2WRxJxbDz9croru9UQ","Ali Dawah","debate"],["UCQwkEQ6EQc4jM2QnrvubBHg","DawahWise","debate"],
  ["UCWJPKXhkcMGXafdtqGx1mEw","The Thinking Muslim","ummah"],
  ["UCA0NvWcBgj2FuKM3VcMoCDQ","Islamic History Bangla","golden"],["UCHt4a98NGuZmRPFccWOiU6w","Muslim Historian","golden"],["UCA8L1F66Lpp7OP9luYd_1Zg","MuslimHeritage","golden"],["UCERktIk4eMJza73_-Z--s4A","OttomanHistory","golden"],["UC0LSnqrwqtMwl2YwfUpO66g","Al Jazeera Documentary","golden"]];
// a title can move a video to a better shelf
const RECAT = [[/\bdebate|\bvs\.?\s|atheis|christian(?:ity)? ?(?:apolog|debate)|speakers'? corner|refut/i,"debate"],
  [/golden age|invent|scien|astronom|algebra|medicine in islam|ibn (?:sina|rushd|khaldun|battuta|haytham)|al-?khwarizmi|andalus|cordoba|abbasid|umayyad|ottoman|mughal|baghdad|house of wisdom|civili[sz]ation|caliphate|khilafah|salahuddin|saladin|sultan|conquest|সোনালী|খিলাফত|উসমানীয়|সালাহউদ্দিন|সুলতান|বিজ্ঞান/i,"golden"],
  [/gaza|palestin|al-?aqsa|sudan|yemen|uyghur|kashmir|rohingya|ummah|গাজা|ফিলিস্তিন|রোহিঙ্গা|উম্মাহ/i,"ummah"]];

// ---------- Mazlum Corner regions (order matters: the first match wins)
export const REGIONS = {
  palestine: /gaza|palestin|west bank|rafah|khan ?younis|jenin|nablus|tulkarm|al-?aqsa|jerusalem|hebron|গাজা|ফিলিস্তিন|পশ্চিম তীর|আল-?আকসা|غزة|فلسطين|الضفة|الأقصى/i,
  sudan: /sudan|darfur|el[- ]?fasher|khartoum|kordofan|সুদান|দারফুর|السودان|الفاشر|دارفور/i,
  lebanon: /lebanon|beirut|south(?:ern)? lebanon|লেবানন|বৈরুত|لبنان|بيروت/i,
  yemen: /yemen|houthi|sanaa|sana'a|hodeidah|\baden\b|ইয়েমেন|হুথি|اليمن|الحوثي|صنعاء/i,
  iran: /\biran(?!ian rial)|tehran|isfahan|tabriz|ইরান|তেহরান|إيران|طهران/i,
  uyghur: /uyghur|uighur|xinjiang|east turkistan|উইঘুর|জিনজিয়াং|الأويغور|الإيغور|شينجيانغ/i,
  kashmir: /kashmir|srinagar|কাশ্মীর|كشمير/i,
  rohingya: /rohingya|rakhine|arakan|cox'?s bazar|bhasan char|রোহিঙ্গা|আরাকান|রাখাইন|কক্সবাজার|الروهينغا|أراكان/i,
  india: /indian muslims?|muslims? in india|bulldozer|mob lynch|assam.*(?:evict|muslim)|push-?back|পুশ ?ইন|ভারতে মুসলিম|ভারতের মুসলমান|বুলডোজার/i,
  world: /islamophob|anti-?muslim|mosque (?:attack|fire|vandal|arson)|attack(?:ed)? (?:on )?(?:a )?mosque|hijab ban|muslims? (?:attacked|killed|persecut|targeted|detained)|persecution of muslims|ইসলামবিদ্বেষ|মসজিদে হামলা|মুসলিমদের ওপর হামলা|মুসলিম নির্যাতন/i,
};
// Google News searches per region: [English, Bangla]
const NEWSQ = {
  palestine: ["Gaza OR \"West Bank\" OR Palestinians", "গাজা OR ফিলিস্তিন"],
  sudan: ["Sudan Darfur OR \"El Fasher\" OR RSF civilians", "সুদান"],
  lebanon: ["Lebanon Israeli strikes civilians", "লেবানন হামলা"],
  yemen: ["Yemen humanitarian OR Houthi OR civilians", "ইয়েমেন"],
  iran: ["Iran strikes civilians OR Iran war", "ইরান হামলা"],
  uyghur: ["Uyghur OR Uyghurs OR \"Xinjiang camps\"", "উইঘুর"],
  kashmir: ["Kashmir Kashmiris OR \"Jammu and Kashmir\"", "কাশ্মীর"],
  rohingya: ["Rohingya OR Rakhine OR Arakan", "রোহিঙ্গা OR আরাকান"],
  india: ["\"Indian Muslims\" OR \"Muslims in India\" demolition OR lynching OR pushback", "ভারতে মুসলিম OR পুশইন"],
  // anywhere else in the world
  world: ["Islamophobia OR \"anti-Muslim\" OR \"mosque attacked\" OR \"persecution of Muslims\"", "ইসলামবিদ্বেষ OR \"মসজিদে হামলা\" OR \"মুসলিমদের ওপর হামলা\""],
};
const NEWSYT = [
  ["UCNye-wNBqNL5ZzHSJj3l8Bg", "Al Jazeera English"], ["UCR0fZh5SBxxMNYdg0VzRFkg", "Middle East Eye"],
  ["UCV3Nm3T-XAgVhKH9jT0ViRg", "AJ+"], ["UC7fWeaHhqgM4Ry-RMpM2YYw", "TRT World"],
  ["UCfiwzLy-8yKzIbsmZTzxDgw", "Al Jazeera Arabic"], ["UCWJPKXhkcMGXafdtqGx1mEw", "The Thinking Muslim"],
];
const RSS = [["https://www.aljazeera.com/xml/rss/all.xml", "Al Jazeera", "en"], ["https://feeds.bbci.co.uk/bengali/rss.xml", "BBC বাংলা", "bn"],
  ["https://www.middleeasteye.net/rss", "Middle East Eye", "en"]];

// ---------- helpers
const UA = {"User-Agent": "Mozilla/5.0 (compatible; AmalnamaBot/1.0; +https://uowyeasin-cyber.github.io/AmalnamaForever/)"};
const dec = (s) => String(s || "").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/<[^>]+>/g, "").trim();
const tag = (x, t) => { const m = x.match(new RegExp("<" + t + "[^>]*>([\\s\\S]*?)</" + t + ">")); return m ? dec(m[1]) : ""; };
const iso = (d) => { const t = Date.parse(d); return isNaN(t) ? new Date().toISOString() : new Date(t).toISOString(); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export async function get(url, tries = 3, timeout = 10000) {
  for (let i = 0; i < tries; i++) {
    try { const r = await fetch(url, {headers: UA, signal: AbortSignal.timeout(timeout)}); if (r.ok) return await r.text(); if (r.status < 500 && r.status !== 404 && r.status !== 429) break; }
    catch (e) { /* retry */ }
    if (i < tries - 1) await sleep(700 * (i + 1));
  }
  return null;
}
export function regionOf(text) { for (const [k, re] of Object.entries(REGIONS)) if (re.test(text)) return k; return null; }
async function pool(list, n, fn) { const out = []; let i = 0; await Promise.all(Array.from({length: n}, async () => { while (i < list.length) { const k = i++; out[k] = await fn(list[k]); } })); return out; }
const ytFeed = (id) => get("https://www.youtube.com/feeds/videos.xml?channel_id=" + id, 3);
function ytEntries(x) {
  return x.split("<entry>").slice(1, 16).map((e) => ({
    id: (e.match(/<yt:videoId>([^<]+)/) || [])[1], t: tag(e, "title"), d: tag(e, "media:description"), pub: (e.match(/<published>([^<]+)/) || [])[1],
    short: /\/shorts\//.test((e.match(/<link[^>]+href="([^"]+)"/) || [])[1] || ""), views: +((e.match(/views="(\d+)"/) || [])[1] || 0),
  })).filter((v) => v.id && v.t && !v.short);
}

// ---------- videos.json
export async function buildVideos(prev = [], {parallel = 1, log = () => {}} = {}) {
  const out = [], ok = new Set();
  await pool(CHANNELS, parallel, async ([id, name, cat]) => {
    const x = await ytFeed(id); if (parallel === 1) await sleep(400);
    if (!x) { log("skip " + name); return; }
    ok.add(name);
    for (const v of ytEntries(x)) {
      if (out.some((o) => o.id === v.id)) continue;
      let c2 = cat; if (cat !== "tilawat") for (const [re, k] of RECAT) if (re.test(v.t)) { c2 = k; break; }
      out.push({id: v.id, t: v.t, ch: name, cat: c2, pub: v.pub, views: v.views});
    }
  });
  // keep earlier videos of channels that failed this time, so a shelf never empties
  const cut = Date.now() - 60 * 864e5;
  for (const v of prev) if (!ok.has(v.ch) && !out.some((o) => o.id === v.id) && Date.parse(v.pub || 0) > cut) out.push(v);
  out.sort((a, b) => (b.pub || "").localeCompare(a.pub || ""));
  return {updated: new Date().toISOString(), live: ok.size, items: out};
}

// ---------- mazlum.json
export async function buildMazlum({videos = [], prev = [], parallel = 6, log = () => {}} = {}) {
  const out = [], seen = new Set(), MAXAGE = 21 * 864e5;
  const push = (it) => { const key = it.id || String(it.t).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim().slice(0, 70); if (!it.t || seen.has(key)) return; seen.add(key); out.push(it); };
  const jobs = [];
  for (const [r, [en, bn]] of Object.entries(NEWSQ)) for (const [q, hl, gl, lang] of [[en, "en-US", "US", "en"], [bn, "bn", "BD", "bn"]]) jobs.push({type: "news", r, q, hl, gl, lang});
  for (const [url, name, lang] of RSS) jobs.push({type: "rss", url, name, lang});
  for (const [id, name] of NEWSYT) jobs.push({type: "yt", id, name});
  const res = await pool(jobs, parallel, async (j) => {
    if (j.type === "news") return [j, await get(`https://news.google.com/rss/search?q=${encodeURIComponent(j.q + " when:7d")}&hl=${j.hl}&gl=${j.gl}&ceid=${j.gl}:${j.hl.split("-")[0]}`, 2)];
    if (j.type === "rss") return [j, await get(j.url, 2)];
    return [j, await ytFeed(j.id)];
  });
  let ok = 0;
  for (const [j, x] of res) {
    if (!x) { log("skip " + (j.name || j.r + " " + j.lang)); continue; } ok++;
    if (j.type === "news") {
      for (const e of x.split("<item>").slice(1, 26)) {
        let t = tag(e, "title"), src = tag(e, "source"); if (src && t.endsWith(" - " + src)) t = t.slice(0, -(src.length + 3));
        const pub = iso(tag(e, "pubDate")); if (Date.now() - Date.parse(pub) > MAXAGE) continue;
        // the "world" search is broad: keep only reports that are really about Muslims being harmed
        if (j.r === "world" && !REGIONS.world.test(t) && !/muslim|mosque|islam|মুসলিম|মসজিদ/i.test(t)) continue;
        push({k: "article", r: (j.r === "world" && regionOf(t)) || j.r, t, u: tag(e, "link"), src: src || "Google News", pub, lang: j.lang});
      }
    } else if (j.type === "rss") {
      for (const e of x.split("<item").slice(1, 60)) {
        const t = tag(e, "title"), d = tag(e, "description"), r = regionOf(t + " " + d); if (!r) continue;
        const img = (e.match(/<media:(?:thumbnail|content)[^>]+url="([^"]+)"/) || e.match(/<enclosure[^>]+url="([^"]+)"/) || [])[1] || "";
        push({k: "article", r, t, u: tag(e, "link") || (e.match(/<link>([^<]+)/) || [])[1], src: j.name, pub: iso(tag(e, "pubDate")), lang: j.lang, img: img.replace(/&amp;/g, "&"), d: d.slice(0, 220)});
      }
    } else {
      for (const v of ytEntries(x)) { const r = regionOf(v.t + " " + v.d.slice(0, 400)); if (r) push({k: "video", r, t: v.t, id: v.id, src: j.name, pub: iso(v.pub), lang: /[؀-ۿ]/.test(v.t) ? "ar" : "en"}); }
    }
  }
  for (const v of videos) { const r = regionOf(v.t); if (r) push({k: "lecture", r, t: v.t, id: v.id, src: v.ch, pub: v.pub, lang: /[ঀ-৿]/.test(v.t) ? "bn" : "en"}); }
  // videos from the last build stay a while when a channel could not be reached
  for (const it of prev) if (it.k !== "article" && Date.now() - Date.parse(it.pub) < MAXAGE) push(it);
  out.sort((a, b) => (b.pub || "").localeCompare(a.pub || ""));
  const per = {}, items = out.filter((it) => (per[it.r] = (per[it.r] || 0) + 1) <= 45);
  const counts = {}; items.forEach((i) => { counts[i.r] = (counts[i.r] || 0) + 1; });
  return {updated: new Date().toISOString(), sources: ok, counts, items};
}
