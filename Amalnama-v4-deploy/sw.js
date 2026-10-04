const C="amalnama-v6",R="amalnama-rt-v2",A=["./","./index.html","./config.js","./gshim.js","./i18n.js?v=1","./features.js?v=4","./chat.js?v=4","./v4.css?v=4","./v4-core.js?v=4","./v4-quran.js?v=4","./v4-amal.js?v=4","./v4-finance.js?v=4","./v4-extra.js?v=4","./manifest.webmanifest","./icon-192.png","./icon-512.png","./favicon.ico"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&x!==R).map(x=>caches.delete(x)))));self.clients.claim();});
const put=(n,req,res)=>{if(res&&res.status===200){const cp=res.clone();caches.open(n).then(c=>c.put(req,cp)).catch(()=>{});}return res;};
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;const u=new URL(e.request.url);
 if((u.origin===location.origin||u.host==="upload.wikimedia.org")&&/\.mp3$/.test(u.pathname)){ // audio: keep one full copy, works offline
   e.respondWith(caches.match(u.href,{ignoreSearch:true}).then(r=>r||fetch(u.href,{mode:"cors"}).then(res=>put(R,u.href,res))));return;}
 if(u.origin===location.origin){e.respondWith(fetch(e.request).then(r=>put(C,e.request,r)).catch(()=>caches.match(e.request).then(r=>r||caches.match("./"))));return;}
 if(/fonts\.(googleapis|gstatic)\.com$/.test(u.host)||(u.host==="www.gstatic.com"&&u.pathname.startsWith("/firebasejs/"))){
   e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>put(R,e.request,res))));return;}
 if(u.host==="api.alquran.cloud"||(u.host==="api.quran.com"&&u.pathname.indexOf("/verses/indopak")>0)){ // Quran text: offline after first read
   e.respondWith(caches.open(R).then(c=>c.match(e.request).then(hit=>{const net=fetch(e.request).then(res=>put(R,e.request,res));return hit?(net.catch(()=>{}),hit):net;})));return;}
});
self.addEventListener("notificationclick",e=>{e.notification.close();const url=(e.notification.data&&e.notification.data.url)||"./";
 e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(ws=>{for(const w of ws){if("focus" in w){if(url!=="./"&&"navigate" in w)w.navigate(url).catch(()=>{});return w.focus();}}return self.clients.openWindow(url);}));});
