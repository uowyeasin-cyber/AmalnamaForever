const C="amalnama-v15",R="amalnama-rt-v3",A=["./","./index.html","./config.js","./gshim.js","./i18n.js?v=3","./features.js?v=13","./chat.js?v=13","./v4.css?v=13","./v5.css?v=13","./v4-core.js?v=13","./v4-quran.js?v=13","./v4-amal.js?v=13","./v4-finance.js?v=13","./v4-extra.js?v=13","./v5.js?v=13","./v6-plus.js?v=13","./v7-plus.js?v=13","./manifest.webmanifest","./icon-192.png","./icon-512.png","./favicon.ico"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A.map(u=>new Request(u,{cache:"reload"})))));self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&x!==R).map(x=>caches.delete(x)))));self.clients.claim();});
const put=(n,req,res)=>{if(res&&res.status===200){const cp=res.clone();caches.open(n).then(c=>c.put(req,cp)).catch(()=>{});}return res;};
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;const u=new URL(e.request.url);
 if((u.origin===location.origin||u.host==="upload.wikimedia.org")&&/\.mp3$/.test(u.pathname)){ // audio: keep one full copy, works offline
   e.respondWith(caches.match(u.href,{ignoreSearch:true}).then(r=>r||fetch(u.href,{mode:"cors"}).then(res=>put(R,u.href,res))));return;}
 if(u.origin===location.origin){
   // app shell: open instantly from the cache, refresh it quietly in the background (new versions arrive on the next launch)
   if(e.request.mode==="navigate"||u.pathname.endsWith("/")||u.pathname.endsWith("/index.html")){
     e.respondWith(caches.open(C).then(c=>c.match(e.request,{ignoreSearch:true}).then(hit=>hit||c.match("./")).then(hit=>{const net=fetch(e.request).then(r=>put(C,e.request,r));if(hit){e.waitUntil(net.catch(()=>{}));return hit;}return net;})));return;}
   // versioned files (?v=) never change: cache first
   if(/[?&]v=/.test(u.search)){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>put(C,e.request,res))));return;}
   // everything else (videos.json, PDFs…): network first, but don't wait forever on a slow connection
   e.respondWith(new Promise(res=>{let done=false;const fb=()=>caches.match(e.request).then(r=>{if(r&&!done){done=true;res(r);}});const tm=setTimeout(fb,3500);
     fetch(e.request).then(r=>{clearTimeout(tm);put(C,e.request,r);if(!done){done=true;res(r);}}).catch(()=>{clearTimeout(tm);caches.match(e.request).then(r=>{if(!done){done=true;res(r||Response.error());}});});}));return;}
 if(/fonts\.(googleapis|gstatic)\.com$/.test(u.host)||(u.host==="www.gstatic.com"&&u.pathname.startsWith("/firebasejs/"))){
   e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>put(R,e.request,res))));return;}
 if((u.host==="cdn.jsdelivr.net"&&u.pathname.indexOf("/hadith-api@")>0)||u.host==="i.ytimg.com"||u.host==="api.alquran.cloud"||(u.host==="api.quran.com"&&u.pathname.indexOf("/verses/indopak")>0)){ // Quran text: offline after first read
   e.respondWith(caches.open(R).then(c=>c.match(e.request).then(hit=>{const net=fetch(e.request).then(res=>put(R,e.request,res));return hit?(net.catch(()=>{}),hit):net;})));return;}
});
// ---- calls & messages while the app is closed (Web Push)
const ICON="icon-192.png";
function anyVisible(){return self.clients.matchAll({type:"window",includeUncontrolled:true}).then(ws=>ws.some(w=>w.visibilityState==="visible"&&w.focused!==false));}
self.addEventListener("push",e=>{let d={};try{d=e.data?e.data.json():{};}catch(x){}const base=self.registration.scope;
  if(d.t==="end"){e.waitUntil(self.registration.getNotifications({tag:"call-"+d.id}).then(ns=>{ns.forEach(n=>n.close());
      return self.registration.showNotification("📞 "+(d.name||"Amalnama"),{body:"মিসড কল · Missed call",tag:"missed-"+d.id,icon:ICON,badge:ICON,data:{url:base}});}));return;}
  if(d.t==="call"||d.t==="gcall"){const v=d.kind==="video",g=d.t==="gcall";
    const title=(v?"🎥 ":"📞 ")+(g?(d.name||"Group"):(d.name||"Amalnama"));
    const body=(g?(d.from?d.from+" · ":"")+"গ্রুপ ":"")+(v?"ভিডিও কল আসছে · Incoming video call":"কল আসছে · Incoming call");
    e.waitUntil(anyVisible().then(vis=>vis?null:self.registration.showNotification(title,{body,tag:"call-"+d.id,renotify:true,requireInteraction:true,silent:false,
      vibrate:[700,300,700,300,700,300,700,300,700,300,700],icon:ICON,badge:ICON,
      actions:[{action:"answer",title:"✅ ধরো · Answer"},{action:"decline",title:"✖ কেটে দাও · Decline"}],
      data:{url:base+"#call="+(g?"r:":"c:")+encodeURIComponent(d.id)}})));return;}
  if(d.t==="msg"){e.waitUntil(anyVisible().then(vis=>vis?null:self.registration.showNotification(d.title||"Amalnama",{body:d.body||"",tag:"chat-"+d.chat,renotify:true,icon:ICON,badge:ICON,
      data:{url:base+"#chat="+encodeURIComponent(d.chat)}})));return;}
});
self.addEventListener("notificationclick",e=>{e.notification.close();if(e.action==="decline")return;let url=(e.notification.data&&e.notification.data.url)||"./";
 if(e.action==="answer")url+="&a=1";
 e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(ws=>{for(const w of ws){if("focus" in w){if(url!=="./"&&"navigate" in w)w.navigate(url).catch(()=>{});return w.focus();}}return self.clients.openWindow(url);}));});
