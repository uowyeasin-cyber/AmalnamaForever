# Architecture

Amalnama is a static Progressive Web App. There is no build step and no application server: GitHub Pages serves plain files, the browser does the work, and a few managed services fill the gaps.

## Modules

The app grew in layers. Each layer is an IIFE that reads helpers from the previous one and wraps `window.setView` to add its own screens.

| Layer | Files | Responsibility |
|---|---|---|
| Base | `index.html` (inline script) | Today, plan, routine, academic, events, week/month views; local storage; Google Drive sync; Calendar sync and delete queue; setup form |
| i18n | `i18n.js`, `lang-*.js` | Six languages, whole‑word translation of the Bangla base UI, RTL, Hijri month names |
| Google | `gshim.js` | Google Identity Services token client; Calendar and Drive REST calls behind an `mcp.callTool` style interface |
| Community | `features.js`, `chat.js` | Azan engine, posts, admin dashboard, guest access, chats, groups, 1:1 and group calls (WebRTC), Web Push client |
| v4 | `v4-core.js`, `v4-quran.js`, `v4-amal.js`, `v4-finance.js`, `v4-extra.js` | Design system, navigation, Quran, Amal and Shariah spaces, finance, settings, Pomodoro, Online Mufti |
| v5 | `v5.js`, `v5.css` | Hadith library, media, masail books, next‑prayer card, floating dock, navigation memory, first‑run wizard |
| Offline | `sw.js` | App shell cache (cache‑first, refreshed in the background), runtime caches, push notifications |

## Data

| Where | What |
|---|---|
| `localStorage` | Routine, to‑dos, events, academic items, finance (`am-v4`), settings, azan settings |
| Google Drive (`drive.file`) | One private JSON file with the same data, merged on every device |
| Google Calendar | Reminders for routine, to‑dos, events, exams and assignments |
| Cloud Firestore | `members`, `profiles`, `posts`, `messages` (community group), `chats` (1:1 and groups) with `messages` and `blobs`, `calls` and `rooms` (signalling), `push` (Web Push subscriptions), `config` |

## Calls

* **One‑to‑one:** the caller writes an offer to `calls/{id}`; the callee answers; ICE candidates go through `calls/{id}/ice`. Media flows peer‑to‑peer.
* **Groups (mesh, up to 8):** `rooms/{id}` lists who is in the call. For each pair, the person with the smaller user id creates an offer in `rooms/{id}/peers`, so two people never connect twice. Leaving is a transaction that removes you and closes the room when it is empty.
* **Ringing while closed:** see [`server/push`](../server/push).

## Security

All Firestore access is defined in [`firestore.rules`](../firestore.rules): approved members only; chats readable only by their members; group admins manage members; guests (anonymous sign‑in) can chat but cannot post or call; signalling documents are readable only by the people in the call; push subscriptions are writable only by their owner.

## Performance

* Versioned files (`?v=`) are served cache‑first; `index.html` opens from cache and refreshes in the background.
* Firebase loads in parallel only when the phone is idle (or immediately when a call notification is tapped).
* Continuous animations are avoided: "live" pulses run briefly when a screen opens, which keeps scrolling smooth on low‑end phones.
