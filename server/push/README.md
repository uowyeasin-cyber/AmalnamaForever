# amalnama-push

A tiny serverless function that makes calls and messages **ring even when the app is closed**, using the standard [Web Push](https://developer.mozilla.org/docs/Web/API/Push_API) protocol (VAPID). It runs free on Vercel's Hobby plan and needs no database of its own.

Live endpoint: `https://amalnama-push.vercel.app/api/ring`

## How it works

1. A member allows notifications; the app saves its push subscription in Firestore at `push/{uid}` (only the owner can write it).
2. When someone starts a call, starts a group call or sends a message, the app calls `POST /api/ring` with the user's **Firebase ID token** and one of:
   - `{ "call": "<callId>" }` — ring the person being called · `{ "call": "<callId>", "end": true }` — turn it into a missed call
   - `{ "room": "<roomId>" }` — ring group members who haven't joined
   - `{ "chat": "<chatId>" }` — notify the other members of a chat or group
3. The function verifies the token against Google's public keys, then reads Firestore **as that user** through the REST API. The app's [`firestore.rules`](../../firestore.rules) therefore decide what the caller may see, and the function checks that they really started the call or belong to the chat.
4. It sends an encrypted Web Push to each of the recipient's devices. The service worker ([`sw.js`](../../sw.js)) shows the notification with **Answer / Decline** buttons.

## Deploy

```bash
cd server/push
npx web-push generate-vapid-keys          # once
vercel env add VAPID_PUBLIC production
vercel env add VAPID_PRIVATE production    # keep this secret
vercel env add FIREBASE_PROJECT production
vercel --prod
```

Then put the URL and the **public** key in `config.js`:

```js
window.AMALNAMA_PUSH = { url: "https://<your-project>.vercel.app/api/ring", key: "<VAPID public key>" };
```

`AMALNAMA_TEST=1` switches the function to the local Firestore emulator for tests; never set it in production.
