# Contributing to Amalnama

Jazakallahu khairan for helping! Bug reports, translations, design ideas and code are all welcome.

## Ground rules

* Be kind and respectful — see the [Code of Conduct](CODE_OF_CONDUCT.md).
* Religious content (Quran, hadith, masail) must come from a reliable, cited source. Please include the reference in your pull request.
* Keep the app **free, ad‑free and private**: no trackers, no analytics, no third‑party ads.

## Getting started

```bash
git clone https://github.com/uowyeasin-cyber/AmalnamaForever.git
cd AmalnamaForever
python3 -m http.server 8766   # open http://127.0.0.1:8766
```

There is no build step. Edit a file, refresh the browser.

* To skip the launch animation while developing, run `sessionStorage.setItem("am-splash","skip")` in the console.
* To use the Firebase emulators for the community: `npx firebase-tools emulators:start --only firestore,auth`, then `localStorage.setItem("am-emu","1")` and reload.

## Making a change

1. Create a branch: `git checkout -b fix/short-description`.
2. Keep changes focused and match the existing style (plain ES5‑style JavaScript, no frameworks, 6‑language strings via the `B("bn","en","ms","ar","ur","sw")` helper).
3. When you change a cached file (`*.js`, `*.css`), bump its `?v=` number in `index.html` **and** `sw.js`, and bump the cache name `C` in `sw.js`.
4. If you touch `firestore.rules`, add or update a rules test and say so in the PR.
5. Run the checks: `for f in *.js tools/*.mjs server/push/api/*.js; do node --check "$f"; done`.
6. Open a pull request using the template and add screenshots for UI changes (phone width, 390 px).

## Translations

UI strings live in `lang-*.js` (dictionary for the original Bangla interface) and inline `B(...)` arrays in the modules. To improve a translation, edit the right file and mention the language in the PR title, e.g. `i18n(ur): ...`.

## Commit messages

Short and descriptive, e.g. `feat(chat): group calls up to 8 people` or `fix(hijri): own month names`.
