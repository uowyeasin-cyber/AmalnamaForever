# Security policy

## Supported versions

Only the live version at <https://uowyeasin-cyber.github.io/AmalnamaForever/> (the `main` branch) receives fixes.

## Reporting a vulnerability

Please **do not** open a public issue. Use GitHub's private reporting instead:
**Security → Report a vulnerability** ([open a private advisory](https://github.com/uowyeasin-cyber/AmalnamaForever/security/advisories/new)).

Include steps to reproduce, the affected page or file, and the impact. You will get a reply as soon as possible, and credit in the release notes if you wish.

## Scope

* `firestore.rules` (access to posts, chats, groups, calls, push subscriptions)
* The push function in `server/push`
* Cross‑site scripting or data leaks in the web app

The Firebase web configuration in `config.js` is public by design and is not a vulnerability on its own.
