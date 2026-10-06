// Builds videos.json from the latest uploads of trusted Islamic YouTube channels (public RSS feeds).
// Run by .github/workflows/videos.yml every two hours; the live app also asks the same code on refresh.
import {writeFileSync, readFileSync, existsSync} from "node:fs";
import {buildVideos} from "./feeds-core.mjs";
let prev = [];
try { if (existsSync("videos.json")) prev = JSON.parse(readFileSync("videos.json", "utf8")).items || []; } catch (e) { /* first run */ }
let d = await buildVideos(prev, {parallel: 1, log: (m) => console.error(m)});
// YouTube sometimes refuses GitHub's servers; then take the list from the app's own server, which reaches it fine
if (d.live < 10) {
  try { const r = await fetch("https://amalnama-push.vercel.app/api/feed?k=videos&t=" + Date.now(), {signal: AbortSignal.timeout(40000)}); const x = r.ok ? await r.json() : null;
    if (x && x.items && x.items.length > d.items.length / 2 && x.live > d.live) { d = x; console.error("used the live server"); } } catch (e) { console.error("live server", e.message); }
}
writeFileSync("videos.json", JSON.stringify(d));
console.log("videos:", d.items.length, "channels reached:", d.live);
