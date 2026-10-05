// Amalnama · wakes people up for calls and messages even when the app is closed (Web Push).
// The caller's own Firebase ID token is checked, and every Firestore read is made *as the caller*,
// so the app's security rules decide who can ring whom.
import webpush from "web-push";
import { createRemoteJWKSet, jwtVerify } from "jose";

const PRJ = process.env.FIREBASE_PROJECT || "notional-gist-510211-s1";
const TEST = process.env.AMALNAMA_TEST === "1"; // local emulator tests only, never set on Vercel
const FS = (TEST ? "http://127.0.0.1:8085/v1/" : "https://firestore.googleapis.com/v1/") + `projects/${PRJ}/databases/(default)/documents/`;
const JWKS = createRemoteJWKSet(new URL("https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com"));
const ORIGINS = ["https://uowyeasin-cyber.github.io", "http://127.0.0.1:8766", "http://localhost:8766"];
webpush.setVapidDetails("https://uowyeasin-cyber.github.io/AmalnamaForever/", process.env.VAPID_PUBLIC, process.env.VAPID_PRIVATE);

function val(v) {
  if (!v) return null;
  if ("stringValue" in v) return v.stringValue;
  if ("booleanValue" in v) return v.booleanValue;
  if ("integerValue" in v) return Number(v.integerValue);
  if ("doubleValue" in v) return v.doubleValue;
  if ("timestampValue" in v) return v.timestampValue;
  if ("nullValue" in v) return null;
  if ("arrayValue" in v) return (v.arrayValue.values || []).map(val);
  if ("mapValue" in v) return obj(v.mapValue.fields || {});
  return null;
}
function obj(f) { const o = {}; for (const k in f) o[k] = val(f[k]); return o; }
async function get(path, tok) {
  const r = await fetch(FS + path, { headers: { Authorization: "Bearer " + tok } });
  if (!r.ok) return null;
  const j = await r.json();
  return obj(j.fields || {});
}
async function pushTo(uid, payload, tok, opts) {
  const d = await get("push/" + uid, tok);
  if (!d || !Array.isArray(d.subs)) return 0;
  let n = 0;
  await Promise.all(d.subs.map(async (s) => {
    try { await webpush.sendNotification(JSON.parse(s), JSON.stringify(payload), opts); n++; } catch (e) { if (TEST) console.log("push err", e.statusCode || "", String(e.message).slice(0, 120)); }
  }));
  return n;
}
function preview(m) {
  if (!m) return "";
  if (m.type === "text") return String(m.text || "").slice(0, 120);
  return { image: "📷 Photo", video: "🎥 Video", audio: "🎤 Voice message", file: "📄 File" }[m.type] || "";
}

export default async function handler(req, res) {
  const origin = req.headers.origin || "";
  if (ORIGINS.includes(origin)) res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
  res.setHeader("Access-Control-Max-Age", "86400");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const tok = String(req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  let uid;
  try {
    const { payload } = TEST ? { payload: JSON.parse(Buffer.from(tok.split(".")[1], "base64url").toString()) } : await jwtVerify(tok, JWKS, { issuer: "https://securetoken.google.com/" + PRJ, audience: PRJ });
    uid = payload.user_id || payload.sub;
  } catch (e) { return res.status(401).json({ error: "bad token" }); }
  let b = req.body || {};
  if (typeof b === "string") { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  const me = await get("profiles/" + uid, tok);
  const name = (me && me.name) || "Amalnama";
  let sent = 0;
  try {
    if (b.call) {
      const c = await get("calls/" + encodeURIComponent(b.call), tok);
      if (!c || c.from !== uid) return res.status(403).json({ error: "not your call" });
      if (b.end) sent = await pushTo(c.to, { t: "end", id: b.call, kind: c.type, name }, tok, { TTL: 600, urgency: "high" });
      else if (c.status === "ringing") sent = await pushTo(c.to, { t: "call", id: b.call, kind: c.type, name }, tok, { TTL: 50, urgency: "high" });
    } else if (b.room) {
      const r = await get("rooms/" + encodeURIComponent(b.room), tok);
      if (!r || !(r.members || []).includes(uid)) return res.status(403).json({ error: "not in room" });
      const targets = (r.members || []).filter((u) => u !== uid && !(r.in || []).includes(u)).slice(0, 63);
      const ns = await Promise.all(targets.map((u) => pushTo(u, { t: "gcall", id: b.room, kind: r.type, name: r.name || "Group", from: name }, tok, { TTL: 50, urgency: "high" })));
      sent = ns.reduce((a, x) => a + x, 0);
    } else if (b.chat) {
      const c = await get("chats/" + encodeURIComponent(b.chat), tok);
      if (!c || !(c.members || []).includes(uid)) return res.status(403).json({ error: "not in chat" });
      const g = !!c.group;
      const payload = { t: "msg", chat: b.chat, group: g, title: g ? (c.name || "Group") : name, body: (g ? name + ": " : "") + preview(c.last), from: uid };
      const targets = (c.members || []).filter((u) => u !== uid).slice(0, 63);
      const ns = await Promise.all(targets.map((u) => pushTo(u, payload, tok, { TTL: 3600, urgency: "normal" })));
      sent = ns.reduce((a, x) => a + x, 0);
    } else return res.status(400).json({ error: "nothing to do" });
  } catch (e) { return res.status(500).json({ error: String(e && e.message || e).slice(0, 200) }); }
  return res.status(200).json({ ok: true, sent });
}
