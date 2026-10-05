# Changelog

All notable changes to Amalnama. Dates are in 2026.

## [11.0.0] - 2026-10-06
### Added
- **Qibla compass**: live compass that points to the Kaaba. Shows the bearing and the distance to Makkah, glows and vibrates when you are aligned, and falls back to your Azan city when GPS is off.
- **Masjid & Surau tracker**: nearby mosques and suraus from OpenStreetMap within 1–10 km, with a map, directions, saved places, a "Prayed here" jamaah log and weekly stats. Works offline from the last results.
- **Hifz tracker**: memorisation progress for all 114 surahs, a juz heat-map, a daily ayah goal and streak, and spaced-repetition revision (1→60 days).
- **Family budget & goals**: create a family or join with a 10-character code (up to 12 members). Shared monthly budgets, expenses and savings goals (Hajj, Umrah…) sync live through Firestore.
### Security
- New `families` Firestore rules: only members can read or write; joining adds only yourself; owners manage members.

## [9.0.0] — 5 Oct
### Added
- Calls and messages ring even when the app is closed (Web Push with **Answer / Decline**, missed‑call notice).
- Three‑step first‑run setup: name → prayer times from GPS or city → daily habits.
- Course field for exams and assignments is now typeable, with suggestions from your classes.
- Back button walks through screens; refresh keeps you on the same screen.
### Changed
- Online Mufti uses a faster model first, with automatic fallback.
- Much smoother scrolling: no endless animations; "live" glows pulse briefly when a screen opens.
- Faster start: Firebase loads in parallel when the phone is idle.
### Fixed
- Hijri date showed Gregorian month names ("24 April 1448 BC") on some phones.

## [8.0.0] — 5 Oct
### Added
- WhatsApp‑style **groups** (create, add/remove members, admins, leave) and **group voice/video calls** (up to 8).
- Every routine item, to‑do (including untimed), event, exam and assignment goes to Google Calendar, and is removed from it when deleted.
### Changed
- App shell opens instantly from cache (service worker), lazy timezone list, cached Hijri dates.
### Fixed
- Mufti answers no longer garbled by the interface translator; spacing on the Today page.

## [7.0.0] — 5 Oct
### Added
- Floating "live" buttons: Pomodoro (Today), Posts & Messages (Media), Zakat calculator (Shariah).
- Timezone picker with automatic detection; redesigned screen‑time view; English premium brochure.
- Mufti answers render bold text and lists.

## [6.0.0] — 4 Oct
### Added
- Media tab (YouTube‑style) with a feed refreshed every 6 hours, guest access to the community, next‑prayer dashboard, masail books reader, finance categories, share sheet and brochure.

## Earlier
- Quran, azan, hadith (Sihah Sittah), finance planner, community, admin dashboard, six languages, Google Calendar & Drive sync.
