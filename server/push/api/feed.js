// Amalnama · live feeds for the app's refresh button (Mazlum Corner and Islamic videos).
// Uses the same code as the two-hourly GitHub Action — tools/feeds-core.mjs, loaded from the repository —
// so both always agree. The CDN keeps each answer for a few minutes.
export const config = {maxDuration: 30};
const REPO = "https://raw.githubusercontent.com/uowyeasin-cyber/AmalnamaForever/main/";
const SITE = "https://uowyeasin-cyber.github.io/AmalnamaForever/";
let core = null, coreAt = 0;
async function loadCore() {
  if (core && Date.now() - coreAt < 36e5) return core;
  const r = await fetch(REPO + "tools/feeds-core.mjs", {signal: AbortSignal.timeout(6000)});
  if (!r.ok) throw new Error("core " + r.status);
  core = await import("data:text/javascript;base64," + Buffer.from(await r.text()).toString("base64"));
  coreAt = Date.now();
  return core;
}
async function base(f) {
  try { const r = await fetch(SITE + f + "?t=" + Date.now(), {signal: AbortSignal.timeout(5000)}); return r.ok ? (await r.json()).items || [] : []; }
  catch (e) { return []; }
}
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") return res.status(204).end();
  const k = req.query && req.query.k === "videos" ? "videos" : "mazlum";
  try {
    const c = await loadCore();
    let d;
    if (k === "videos") d = await c.buildVideos(await base("videos.json"), {parallel: 8});
    else { const [v, p] = await Promise.all([base("videos.json"), base("mazlum.json")]); d = await c.buildMazlum({videos: v, prev: p, parallel: 10}); }
    res.setHeader("Cache-Control", "public, max-age=60, s-maxage=120, stale-while-revalidate=1800");
    return res.status(200).json(d);
  } catch (e) { return res.status(500).json({error: String((e && e.message) || e).slice(0, 200)}); }
}
