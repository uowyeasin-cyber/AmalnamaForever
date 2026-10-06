// Builds videos.json from the latest uploads of trusted Islamic YouTube channels (public RSS feeds).
// Run by .github/workflows/videos.yml every two hours; the live app also asks the same code on refresh.
import {writeFileSync, readFileSync, existsSync} from "node:fs";
import {buildVideos} from "./feeds-core.mjs";
let prev = [];
try { if (existsSync("videos.json")) prev = JSON.parse(readFileSync("videos.json", "utf8")).items || []; } catch (e) { /* first run */ }
const d = await buildVideos(prev, {parallel: 1, log: (m) => console.error(m)});
writeFileSync("videos.json", JSON.stringify(d));
console.log("videos:", d.items.length, "channels reached:", d.live);
