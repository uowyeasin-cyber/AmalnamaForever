// Builds mazlum.json for the Mazlum Corner: the latest news, videos and lectures about oppressed
// Muslims anywhere in the world. Run by .github/workflows/videos.yml every two hours (after videos.json);
// the live app also asks the same code on refresh (server/push/api/feed.js).
import {writeFileSync, readFileSync, existsSync} from "node:fs";
import {buildMazlum} from "./feeds-core.mjs";
const read = (f) => { try { return existsSync(f) ? JSON.parse(readFileSync(f, "utf8")).items || [] : []; } catch (e) { return []; } };
const d = await buildMazlum({videos: read("videos.json"), prev: read("mazlum.json"), parallel: 4, log: (m) => console.error(m)});
if (d.items.length < 20 && existsSync("mazlum.json")) { console.error("too few items, keeping the previous file"); process.exit(0); }
writeFileSync("mazlum.json", JSON.stringify(d));
console.log("mazlum:", d.items.length, d.counts);
