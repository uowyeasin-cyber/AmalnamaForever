// Builds mazlum.json for the Mazlum Corner: the latest news, videos and lectures about oppressed
// Muslims anywhere in the world. Run by .github/workflows/videos.yml every two hours (after videos.json);
// the live app also asks the same code on refresh (server/push/api/feed.js).
import {writeFileSync, readFileSync, existsSync} from "node:fs";
import {buildMazlum} from "./feeds-core.mjs";
const read = (f) => { try { return existsSync(f) ? JSON.parse(readFileSync(f, "utf8")).items || [] : []; } catch (e) { return []; } };
let d = await buildMazlum({videos: read("videos.json"), prev: read("mazlum.json"), parallel: 4, log: (m) => console.error(m)});
// news videos from the app's own server when YouTube refused GitHub
if (!d.items.some((i) => i.k === "video")) {
  try { const r = await fetch("https://amalnama-push.vercel.app/api/feed?k=mazlum&t=" + Date.now(), {signal: AbortSignal.timeout(40000)}); const x = r.ok ? await r.json() : null;
    if (x && x.items && x.items.length >= d.items.length * 0.8) { d = x; console.error("used the live server"); } } catch (e) { console.error("live server", e.message); }
}
if (d.items.length < 20 && existsSync("mazlum.json")) { console.error("too few items, keeping the previous file"); process.exit(0); }
writeFileSync("mazlum.json", JSON.stringify(d));
console.log("mazlum:", d.items.length, d.counts);
