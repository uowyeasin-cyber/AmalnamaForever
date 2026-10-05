// Amalnama configuration
// Google Calendar + Drive (Google Auth Platform → Clients → Amalnama Web)
window.AMALNAMA_CLIENT_ID = "132063455220-l2dj3ga1gk8hina1ojlh28na2h5i52jc.apps.googleusercontent.com";
// Community (Firebase project "Amalnama"). This web config is public by design; access is controlled by Firestore security rules.
window.AMALNAMA_FIREBASE = {
  apiKey: "AIzaSyCd-lVdRN81Bq9gPQbxWpjBmFYsy3OUKR8",
  authDomain: "notional-gist-510211-s1.firebaseapp.com",
  projectId: "notional-gist-510211-s1",
  storageBucket: "notional-gist-510211-s1.firebasestorage.app",
  messagingSenderId: "132063455220",
  appId: "1:132063455220:web:dbf4260f3546efb3b67ba1"
};
// Calls & messages ring even when the app is closed (Web Push, sent by the small "amalnama-push" service on Vercel)
window.AMALNAMA_PUSH = { url: "https://amalnama-push.vercel.app/api/ring", key: "BPLYUeh5esUz2pbZdFdbxaMJ2SGLdl9jbtLGflAR0ioVXuwzBob1wqE3DAkp6eFHElOOuhB1WkC6NFHISEFsTKI" };
