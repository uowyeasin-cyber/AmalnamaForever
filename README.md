# 🕋 Amalnama

দৈনিক আমলনামা: ইবাদত, ক্লাস, পড়াশোনা আর To-Do এক জায়গায়। Google Calendar-এ অটো রিমাইন্ডার আর ল্যাপটপ-মোবাইল সিঙ্কসহ।

**Live:** https://uowyeasin-cyber.github.io/AmalnamaForever/

## Features
- ৫ ওয়াক্ত সালাত, ক্লাস, পড়াশোনা, দৈনন্দিন কাজ আর To-Do: যেকোনো ডিপার্টমেন্টের জন্য নিজের মতো সাজানো যায়
- যোগ বা এডিট করলে **Google Calendar**-এ রিমাইন্ডারসহ অটো সেট হয় (প্রতিটা কাজে ৫টা পর্যন্ত রিমাইন্ডার)
- নিজের **Google Drive**-এর মাধ্যমে ল্যাপটপ আর মোবাইলে একসাথে সিঙ্ক
- দৈনিক চেকলিস্ট, প্রোগ্রেস রিং, সাপ্তাহিক ও মাসিক রিপোর্ট
- পরীক্ষা, অ্যাসাইনমেন্ট আর ইভেন্ট ট্র্যাকার
- Installable PWA (Kaaba আইকন), অফলাইনে চলে, বাংলা ইন্টারফেস, হিজরি তারিখ

## Tech
Vanilla HTML/CSS/JS · Google Identity Services (OAuth token model) · Google Calendar API v3 · Google Drive API v3 (`drive.file` scope) · Service Worker + Web App Manifest.
No backend; সব ডেটা থাকে ব্যবহারকারীর নিজের ব্রাউজার আর Google Drive-এ।

## Setup
`config.js`-এ Google OAuth Web Client ID বসাও (Authorized JavaScript origin: `https://uowyeasin-cyber.github.io`).
