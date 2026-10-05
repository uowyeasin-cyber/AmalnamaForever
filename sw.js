const C="amalnama-v10",R="amalnama-rt-v3",A=["./","./index.html","./config.js","./gshim.js","./i18n.js?v=2","./features.js?v=8","./chat.js?v=8","./v4.css?v=8","./v5.css?v=8","./v4-core.js?v=8","./v4-quran.js?v=8","./v4-amal.js?v=8","./v4-finance.js?v=8","./v4-extra.js?v=8","./v5.js?v=8","./manifest.webmanifest","./icon-192.png","./icon-512.png","./favicon.ico"];
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
self.addEventListener("notificationclick",e=>{e.notification.close();const url=(e.notification.data&&e.notification.data.url)||"./";
 e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(ws=>{for(const w of ws){if("focus" in w){if(url!=="./"&&"navigate" in w)w.navigate(url).catch(()=>{});return w.focus();}}return self.clients.openWindow(url);}));});
