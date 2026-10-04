/* Amalnama · new tabs shell (Quran, Azan, Community). Loaded after the main app script. */
(function(){
  var T=function(k){return window.AM_T?window.AM_T(k):k;};
  var LANG=window.AM_LANG||"bn";
  function num(n){n=String(n);return LANG==="bn"?n.replace(/\d/g,function(d){return "০১২৩৪৫৬৭৮৯"[d];}):n;}
  function el(tag,attrs){var e=document.createElement(tag);if(attrs)for(var k in attrs){var v=attrs[k];if(v==null||v===false)continue;
      if(k==="text")e.textContent=v;else if(k==="html")e.innerHTML=v;else if(k.slice(0,2)==="on")e.addEventListener(k.slice(2),v);else if(k==="class")e.className=v;else e.setAttribute(k,v===true?"":v);}
    for(var i=2;i<arguments.length;i++){var c=arguments[i];if(c==null||c===false)continue;if(Array.isArray(c))c.forEach(function(x){if(x!=null&&x!==false)e.appendChild(typeof x==="string"?document.createTextNode(x):x);});else e.appendChild(typeof c==="string"?document.createTextNode(c):c);}
    return e;}
  window.AMX={T:T,num:num,el:el,LANG:LANG};

  var css=document.createElement("style");
  css.textContent=[
  '.tabs{display:flex!important;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch}.tabs::-webkit-scrollbar{display:none}',
  '.tabs button{flex:1 0 auto;min-width:58px;padding:8px 9px!important;white-space:nowrap;position:relative}',
  '.tabs button .dot{position:absolute;top:3px;inset-inline-end:4px;min-width:16px;height:16px;padding:0 4px;border-radius:99px;background:#d9534f;color:#fff;font-size:.62rem;line-height:16px;font-weight:700}',
  '.xhead{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}',
  '.xbtn{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:.86rem;font-weight:600;padding:8px 13px;border-radius:11px;cursor:pointer}',
  '.xbtn.acc{background:var(--accent);color:var(--accent-ink);border-color:transparent}.xbtn.gold{background:linear-gradient(135deg,#f3dc9c,#c9a24f);color:#1b1405;border-color:transparent}',
  '.xbtn.sm{padding:5px 10px;font-size:.78rem;font-weight:500}.xbtn.warn{color:var(--warn);border-color:color-mix(in oklab,var(--warn) 40%,transparent)}.xbtn:disabled{opacity:.5;cursor:default}',
  '.xin{font:inherit;color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:10px 12px;width:100%;min-width:0}',
  '.xrow{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.xgrid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.xgrid label,.xlab{display:grid;gap:4px;font-size:.8rem;color:var(--muted)}',
  '.xsw{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 0;border-top:1px solid var(--line)}.xsw:first-child{border-top:0}',
  '.xsw input[type=checkbox]{width:20px;height:20px;accent-color:var(--accent)}',
  '.xnote{font-size:.82rem;color:var(--muted);margin:10px 0 0}.xerr{color:var(--warn);font-size:.86rem}',
  /* quran */
  '.q-list{display:grid;gap:6px;margin-top:12px}.q-row{display:grid;grid-template-columns:42px 1fr auto;align-items:center;gap:12px;padding:10px 12px;border:1px solid var(--line);border-radius:14px;background:var(--surface);cursor:pointer;text-align:start;font:inherit;color:inherit;width:100%}',
  '.q-row:hover{border-color:var(--gold)}.q-no{width:38px;height:38px;display:grid;place-items:center;border-radius:11px;background:var(--gold-soft);color:var(--gold);font-weight:700;font-size:.85rem;transform:rotate(45deg)}.q-no span{transform:rotate(-45deg)}',
  '.q-en{font-weight:600}.q-sub{font-size:.76rem;color:var(--muted)}.q-arn{font-family:"Amiri Quran","Amiri",serif;font-size:1.35rem;color:var(--gold);direction:rtl}',
  '.q-top{position:sticky;top:58px;z-index:4;background:color-mix(in oklab,var(--surface) 92%,transparent);backdrop-filter:blur(8px);border:1px solid var(--line);border-radius:14px;padding:10px 12px;margin-top:12px}',
  '.q-title{text-align:center;margin:14px 0 4px}.q-title .ar{font-family:"Amiri Quran","Amiri",serif;font-size:2rem;color:var(--gold)}.q-bism{font-family:"Amiri Quran","Amiri",serif;text-align:center;font-size:1.6rem;color:var(--gold);margin:10px 0 4px;direction:rtl}',
  '.q-ayah{padding:14px 4px 12px;border-bottom:1px solid var(--line);scroll-margin-top:130px}.q-ayah.on{background:var(--accent-soft);border-radius:12px;padding-inline:10px}',
  '.q-at{font-family:"Amiri Quran","Amiri",serif;direction:rtl;text-align:right;line-height:2.25;font-size:calc(1.55rem * var(--qs,1))}',
  '.q-mk{font-family:"Amiri Quran","Amiri",serif;color:var(--gold);font-size:.9em;margin-inline:4px}',
  '.q-tr{margin-top:6px;font-size:.95rem;color:var(--ink);opacity:.9}.q-tr[dir=rtl]{text-align:right;font-family:"Noto Naskh Arabic","Noto Nastaliq Urdu",serif}.q-hide .q-tr{display:none}',
  '.q-act{display:flex;gap:6px;margin-top:8px;align-items:center}.q-act .n{font-size:.75rem;color:var(--muted);margin-inline-end:auto}',
  '.q-src{font-size:.72rem;color:var(--muted);text-align:center;margin:16px 0 0}',
  /* azan */
  '.az-next{text-align:center;padding:18px 12px;border-radius:18px;background:radial-gradient(120% 90% at 50% 0%,#12403f 0%,var(--hero-bg) 70%);color:#f3ecdc;border:1px solid color-mix(in oklab,var(--gold-2) 40%,transparent)}',
  '.az-next .big{font-size:1.9rem;font-weight:700;color:#f3dc9c}.az-next .cd{font-family:var(--mono);font-size:1.05rem;color:#bfe3d6}',
  '.az-p{display:grid;grid-template-columns:1fr auto auto;align-items:center;gap:12px;padding:11px 4px;border-top:1px solid var(--line)}.az-p:first-child{border-top:0}.az-p.nx{background:var(--gold-soft);border-radius:12px;padding-inline:10px}',
  '.az-p b{font-size:1rem}.az-p .t{font-family:var(--mono);font-size:1rem}.az-p input{width:20px;height:20px;accent-color:var(--accent)}',
  '#azbar{position:fixed;left:50%;transform:translateX(-50%);bottom:18px;z-index:120;display:flex;gap:10px;align-items:center;background:var(--hero-bg);color:#f3ecdc;border:1px solid var(--gold-2);border-radius:16px;padding:10px 14px;box-shadow:0 10px 30px rgba(0,0,0,.4);max-width:calc(100% - 24px)}',
  /* community */
  '.cm-tabs{display:flex;gap:6px;margin:12px 0}.cm-tabs button{flex:1;border:1px solid var(--line);background:var(--surface);color:var(--muted);font:inherit;font-weight:600;padding:9px;border-radius:12px;cursor:pointer;position:relative}.cm-tabs button.on{background:var(--accent);color:var(--accent-ink);border-color:transparent}',
  '.cm-tabs .dot{position:absolute;top:-6px;inset-inline-end:-4px;min-width:18px;height:18px;padding:0 5px;border-radius:99px;background:#25d366;color:#fff;font-size:.68rem;line-height:18px;font-weight:700}',
  '.cm-av{width:36px;height:36px;border-radius:50%;flex:none;object-fit:cover;background:var(--gold-soft);color:var(--gold);display:grid;place-items:center;font-weight:700}',
  '.cm-post{background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:12px 14px;margin-top:10px}.cm-post.ann{border-color:var(--gold);background:linear-gradient(0deg,var(--surface),var(--gold-soft))}',
  '.cm-ph{display:flex;align-items:center;gap:10px}.cm-ph .nm{font-weight:600}.cm-ph .tm{font-size:.74rem;color:var(--muted)}',
  '.cm-txt{white-space:pre-wrap;word-break:break-word;margin:8px 0 4px;line-height:1.6}',
  '.cm-acts{display:flex;gap:4px;flex-wrap:wrap}.cm-acts button{border:0;background:none;color:var(--muted);font:inherit;font-size:.82rem;padding:5px 8px;border-radius:9px;cursor:pointer}.cm-acts button:hover{background:var(--sunk)}.cm-acts button.on{color:#d9534f}',
  '.cm-cm{margin:8px 0 0;padding:8px 0 0;border-top:1px dashed var(--line);display:grid;gap:8px}.cm-c{display:flex;gap:8px;align-items:flex-start;font-size:.9rem}.cm-c .b{background:var(--sunk);border-radius:12px;padding:6px 10px;white-space:pre-wrap;word-break:break-word}',
  '.cm-comp{display:grid;gap:8px}.cm-comp textarea{font:inherit;color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:10px 12px;min-height:80px;resize:vertical}',
  '.cm-chat{height:min(60vh,520px);overflow-y:auto;display:flex;flex-direction:column;gap:8px;padding:10px;border:1px solid var(--line);border-radius:16px;background:var(--sunk)}',
  '.cm-m{display:flex;gap:8px;align-items:flex-end;max-width:85%}.cm-m.me{align-self:flex-end;flex-direction:row-reverse}.cm-m .cm-av{width:28px;height:28px;font-size:.75rem}',
  '.cm-m .bb{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:7px 11px;white-space:pre-wrap;word-break:break-word}.cm-m.me .bb{background:var(--accent);color:var(--accent-ink);border-color:transparent}',
  '.cm-m .who{font-size:.7rem;color:var(--muted);margin-bottom:2px}.cm-m .tm{font-size:.65rem;opacity:.7;margin-top:2px}.cm-m .x{border:0;background:none;color:var(--muted);cursor:pointer;font-size:.8rem}',
  '.cm-send{display:flex;gap:8px;margin-top:8px}.cm-send input{flex:1}',
  'body.xview .adbar{display:none!important}.cm-mem{display:flex;flex-wrap:wrap;align-items:center;gap:10px;padding:10px 0;border-top:1px solid var(--line)}.cm-mem>.xrow{width:100%;padding-inline-start:46px}.cm-mem:first-child{border-top:0}.cm-mem .info{flex:1;min-width:0}.cm-mem .info div{overflow:hidden;text-overflow:ellipsis}',
  '.cm-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.cm-stats div{background:var(--sunk);border-radius:14px;padding:10px;text-align:center}.cm-stats b{display:block;font-size:1.4rem;color:var(--accent)}.cm-stats span{font-size:.74rem;color:var(--muted)}',
  '.gbtn2{display:inline-flex;align-items:center;gap:10px;background:#fff;color:#1f1f1f;border:1px solid #dadce0;border-radius:99px;padding:10px 18px;font:inherit;font-weight:600;cursor:pointer}'
  ].join("");
  document.head.appendChild(css);
  var fl=document.createElement("link");fl.rel="stylesheet";fl.href="https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap";document.head.appendChild(fl);

  // ---- tabs + sections
  var nav=document.querySelector("nav.tabs"),month=document.getElementById("v-month");
  if(!nav||!month)return;
  var NEW=[["quran","📖 "+T("tab.quran")],["azan","🕌 "+T("tab.azan")],["comm","👥 "+T("tab.community")]];
  var after=month;
  NEW.forEach(function(p){
    var b=el("button",{role:"tab",id:"tab-"+p[0],"aria-selected":"false","data-v":p[0],"data-noi18n":""},p[1]);
    b.addEventListener("click",function(){window.setView(p[0]);});nav.appendChild(b);
    var s=el("section",{id:"v-"+p[0],hidden:true});after.insertAdjacentElement("afterend",s);after=s;});
  var mods={};window.AMX.register=function(k,m){mods[k]=m;};
  var orig=window.setView;
  window.setView=function(v){orig(v);document.body.classList.toggle("xview",NEW.some(function(p){return p[0]===v;}));NEW.forEach(function(p){var s=document.getElementById("v-"+p[0]);s.hidden=p[0]!==v;});
    if(mods[v]&&mods[v].open)try{mods[v].open(document.getElementById("v-"+v));}catch(e){console.error(e);}
    var tb=document.getElementById("tab-"+v);if(tb&&tb.scrollIntoView)try{tb.scrollIntoView({block:"nearest",inline:"nearest"});}catch(e){}};
  window.AMX.badge=function(v,n){var b=document.getElementById("tab-"+v);if(!b)return;var d=b.querySelector(".dot");
    if(!n){if(d)d.remove();return;}if(!d){d=el("span",{class:"dot"});b.appendChild(d);}d.textContent=n>9?"9+":String(n);};
  // open a tab from the URL hash (e.g. install shortcut ...#quran)
  var hv=(location.hash||"").slice(1);if(hv&&NEW.some(function(p){return p[0]===hv;}))setTimeout(function(){window.setView(hv);},300);
})();

/* QURAN: moved to v4-quran.js (Uthmani + Nurani, qari choice, surah after surah) */
/* ================= AZAN ================= */
(function(){
  var X=window.AMX;if(!X)return;var T=X.T,el=X.el,num=X.num,L=X.LANG;
  var P=["fajr","dhuhr","asr","maghrib","isha"],RID={fajr:"fajr",dhuhr:"zohor",asr:"asar",maghrib:"maghrib",isha:"isyak"};
  var API={fajr:"Fajr",sunrise:"Sunrise",dhuhr:"Dhuhr",asr:"Asr",maghrib:"Maghrib",isha:"Isha"};
  var tz=(typeof TZ!=="undefined"&&TZ)||Intl.DateTimeFormat().resolvedOptions().timeZone;
  var C={on:true,notify:false,vol:0.85,voice:"a9",soft:true,man:{},src:"routine",city:"",country:"",method:"",school:"0",api:null,pr:{fajr:true,dhuhr:true,asr:true,maghrib:true,isha:true},played:{d:"",l:[]}};
  try{var s=JSON.parse(localStorage.getItem("am-azan")||"null");if(s)for(var k in s)C[k]=s[k];}catch(e){}
  if(!C.city){try{var ss=JSON.parse(localStorage.getItem("am-settings")||"{}");if(ss.city)C.city=ss.city;}catch(e){}}
  function save(){try{localStorage.setItem("am-azan",JSON.stringify(C));}catch(e){}}
  function today(){return new Intl.DateTimeFormat("en-CA",{timeZone:tz,year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());}
  function nowMin(){var p=new Intl.DateTimeFormat("en-GB",{timeZone:tz,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false}).formatToParts(new Date());
    var g=function(t){return +((p.find(function(x){return x.type===t;})||{}).value||0);};return (g("hour")%24)*60+g("minute")+g("second")/60;}
  function toMin(hm){if(!hm)return null;var m=/^(\d{1,2}):(\d{2})/.exec(hm);return m?(+m[1])*60+(+m[2]):null;}
  function fmt(hm){var m=toMin(hm);if(m==null)return "—";var h=Math.floor(m/60),mm=m%60,ap=h<12?"AM":"PM";h=h%12||12;return num(h+":"+String(mm).padStart(2,"0"))+" "+ap;}
  function routineTimes(){var r=null;try{r=(typeof routine!=="undefined"&&routine)||JSON.parse(localStorage.getItem("rc-routine-v1")||"{}");}catch(e){r={};}
    var o={};P.forEach(function(p){var it=r&&r[RID[p]];if(it&&it.start)o[p]=it.start;});return o;}
  function times(){var base=(C.src==="api"&&C.api&&C.api.t)?C.api.t:routineTimes();if(C.src==="manual"){var o={};for(var k in base)o[k]=base[k];P.forEach(function(p){if(C.man&&C.man[p])o[p]=C.man[p];});return o;}return base;}
  X.azanTimes=times;X.nowMin=function(){return nowMin();};
  // ---- fetch from AlAdhan
  function fetchTimes(opts){var d=today().split("-"),ds=d[2]+"-"+d[1]+"-"+d[0];
    var q="?school="+encodeURIComponent(C.school||"0")+(C.method?"&method="+encodeURIComponent(C.method):"");
    var u=opts&&opts.lat!=null?"https://api.aladhan.com/v1/timings/"+ds+q+"&latitude="+opts.lat+"&longitude="+opts.lng
      :"https://api.aladhan.com/v1/timingsByCity/"+ds+q+"&city="+encodeURIComponent(C.city)+"&country="+encodeURIComponent(C.country||"");
    return fetch(u).then(function(r){return r.json();}).then(function(j){if(j.code!==200||!j.data)throw new Error("x");
      var t={};Object.keys(API).forEach(function(k){t[k]=String(j.data.timings[API[k]]).slice(0,5);});
      C.api={d:today(),t:t,label:opts&&opts.lat!=null?(opts.label||"GPS"):(C.city+(C.country?", "+C.country:"")),meth:j.data.meta&&j.data.meta.method?j.data.meta.method.name:"",lat:opts&&opts.lat,lng:opts&&opts.lng};
      save();return C.api;});}
  function refreshDaily(){if(C.src==="api"&&C.api&&C.api.d!==today()&&navigator.onLine!==false){
    (C.api.lat!=null?fetchTimes({lat:C.api.lat,lng:C.api.lng,label:C.api.label}):fetchTimes()).then(function(){if(root&&!root.hidden)render();}).catch(function(){});}}
  // ---- audio
  var VOICES=[["a9","Mishary Rashid Alafasy","https://cdn.aladhan.com/audio/adhans/a9.mp3"],["a7","Mishary Alafasy (2)","https://cdn.aladhan.com/audio/adhans/a7.mp3"],["a4","Mishary Alafasy · Dubai","https://cdn.aladhan.com/audio/adhans/a4.mp3"],
    ["a1","Ahmad al-Nafees","https://cdn.aladhan.com/audio/adhans/a1.mp3"],["a2","Hafiz Mustafa Özcan (Türkiye)","https://cdn.aladhan.com/audio/adhans/a2.mp3"],["a11","Mansour Al-Zahrani","https://cdn.aladhan.com/audio/adhans/a11-mansour-al-zahrani.mp3"],
    ["wm","Beautiful Adhan (Wikimedia)","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b0/Beautiful_adhan.ogg/Beautiful_adhan.ogg.mp3"]];
  function vurl(){var v=VOICES.filter(function(x){return x[0]===C.voice;})[0]||VOICES[0];return v[2];}
  var au=new Audio();au.src=vurl();au.preload="none";var unlocked=false,fadeT=null;
  function unlock(){if(unlocked)return;unlocked=true;try{au.muted=true;var p=au.play();if(p&&p.then)p.then(function(){au.pause();au.currentTime=0;au.muted=false;}).catch(function(){au.muted=false;unlocked=false;});}catch(e){au.muted=false;}}
  // iOS needs the audio element to be started once by a tap; other browsers allow it after any interaction
  var IOS=/iPhone|iPad|iPod/i.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
  if(IOS&&C.on)["pointerdown","touchstart"].forEach(function(ev){document.addEventListener(ev,unlock,{passive:true,capture:true});});
  function bar(txt){var b=document.getElementById("azbar");if(b)b.remove();if(!txt)return;
    b=el("div",{id:"azbar",role:"status"},el("span",null,"🕌 "+txt),el("button",{class:"xbtn sm",type:"button",onclick:function(){stop();}},"■ "+T("a.stop")));document.body.appendChild(b);}
  function play(name){var target=Math.max(0,Math.min(1,+C.vol||0.85));if(au.src.indexOf(vurl())<0)au.src=vurl();au.currentTime=0;clearInterval(fadeT);
    if(C.soft){au.volume=Math.min(0.08,target);var t0=Date.now();fadeT=setInterval(function(){var k=Math.min(1,(Date.now()-t0)/9000);au.volume=Math.max(0,Math.min(1,0.08+(target-0.08)*k*k));if(k>=1)clearInterval(fadeT);},200);}else au.volume=target;
    var pr=au.play();
    bar(T("a.itsTime")+" "+name);
    if(pr&&pr.catch)pr.catch(function(){var b=document.getElementById("azbar");if(b){b.firstChild.textContent="🔔 "+T("a.itsTime")+" "+name+" — "+T("a.tapToAllow");b.onclick=function(){au.play().catch(function(){});};}});}
  function stop(){au.pause();au.currentTime=0;bar("");}
  au.addEventListener("ended",function(){bar("");});
  function notify(name,hm){if(!C.notify||!("Notification" in window)||Notification.permission!=="granted")return;
    var title="🕌 "+T("a.itsTime")+" "+name,opt={body:fmt(hm)+" · Amalnama",icon:"icon-192.png",badge:"icon-192.png",tag:"azan-"+name,renotify:true};
    if(navigator.serviceWorker&&navigator.serviceWorker.ready)navigator.serviceWorker.ready.then(function(r){return r.showNotification(title,opt);}).catch(function(){try{new Notification(title,opt);}catch(e){}});
    else try{new Notification(title,opt);}catch(e){}}
  function tick(){refreshDaily();if(!C.on)return;var d=today();if(C.played.d!==d)C.played={d:d,l:[]};
    var t=times(),n=nowMin();
    P.forEach(function(p){var m=toMin(t[p]);if(m==null||!C.pr[p]||C.played.l.indexOf(p)>=0)return;
      if(n>=m&&n<m+3){C.played.l.push(p);save();play(T("p."+p));notify(T("p."+p),t[p]);}
      else if(n>=m+3&&C.played.l.indexOf(p)<0){C.played.l.push(p);save();}});
    if(root&&!root.hidden)updNext();}
  // mark prayers already passed today as done when the app opens, so an old one doesn't play late
  (function(){var d=today();if(C.played.d!==d)C.played={d:d,l:[]};var t=times(),n=nowMin();P.forEach(function(p){var m=toMin(t[p]);if(m!=null&&n>=m+3&&C.played.l.indexOf(p)<0)C.played.l.push(p);});save();})();
  setInterval(tick,15000);setTimeout(tick,2000);
  document.addEventListener("visibilitychange",function(){if(!document.hidden)tick();});

  // ---- UI
  var root=null,nextEl=null;
  function nextPrayer(){var t=times(),n=nowMin(),best=null;
    P.forEach(function(p){var m=toMin(t[p]);if(m==null)return;var diff=m-n;if(diff<0)diff+=1440;if(!best||diff<best.diff)best={p:p,diff:diff,hm:t[p]};});return best;}
  function updNext(){if(!nextEl)return;var b=nextPrayer();nextEl.innerHTML="";
    if(!b){nextEl.appendChild(el("div",null,"—"));return;}
    var h=Math.floor(b.diff/60),m=Math.floor(b.diff%60);
    nextEl.appendChild(el("div",{style:"font-size:.85rem;opacity:.8"},T("a.next")));
    nextEl.appendChild(el("div",{class:"big"},T("p."+b.p)+" · "+fmt(b.hm)));
    nextEl.appendChild(el("div",{class:"cd"},T("a.in")+" "+num(h)+"h "+num(m)+"m"));
    if(root)root.querySelectorAll(".az-p").forEach(function(r){r.classList.toggle("nx",r.dataset.p===b.p);});}
  function sw(label,checked,onch){var c=el("input",{type:"checkbox"});c.checked=!!checked;c.onchange=function(){onch(c.checked,c);};return el("label",{class:"xsw"},el("span",null,label),c);}
  function render(){
    if(C.src==="routine"&&!Object.keys(routineTimes()).length)C.src="api";
    root.innerHTML="";var t=times();
    nextEl=el("div",{class:"az-next"});
    var list=el("div",{class:"card"},el("h2",{style:"margin-bottom:6px"},"🕌 "+T("a.title")));
    P.forEach(function(p){var c=el("input",{type:"checkbox",title:T("a.enable")});c.checked=C.pr[p]!==false;c.onchange=function(){C.pr[p]=c.checked;save();};
      var row=el("div",{class:"az-p","data-p":p},el("b",null,T("p."+p)),el("span",{class:"t"},fmt(t[p])),c);
      list.appendChild(row);
      if(p==="fajr"&&C.src==="api"&&C.api&&C.api.t&&C.api.t.sunrise)list.appendChild(el("div",{class:"az-p","data-p":"sunrise",style:"opacity:.7"},el("b",null,"☀ "+T("p.sunrise")),el("span",{class:"t"},fmt(C.api.t.sunrise)),el("span")));});
    list.appendChild(el("p",{class:"xnote"},C.src==="manual"?(({bn:"তোমার ঠিক করা সময়",en:"Your own times",ms:"Masa anda",ar:"أوقاتك",ur:"آپ کے اوقات",sw:"Nyakati zako"})[L]||""):C.src==="api"&&C.api?T("a.fromApi")+" "+C.api.label+(C.api.meth?" · "+C.api.meth:""):T("a.fromRoutine")));
    var vol=el("input",{type:"range",min:"0",max:"1",step:"0.05",value:String(C.vol),style:"width:140px"});vol.oninput=function(){C.vol=+vol.value;au.volume=C.vol;save();};
    var testB=el("button",{class:"xbtn acc",type:"button",onclick:function(){if(!au.paused){stop();testB.textContent="▶ "+T("a.test");}else{play(T("a.test"));testB.textContent="■ "+T("a.stop");}}},"▶ "+T("a.test"));
    au.addEventListener("pause",function(){testB.textContent="▶ "+T("a.test");});
    var opts=el("div",{class:"card"},
      sw(T("a.enable"),C.on,function(v){C.on=v;save();}),
      sw(T("a.notify"),C.notify,function(v,c){C.notify=v;save();if(v&&"Notification" in window&&Notification.permission==="default")Notification.requestPermission().then(function(p){if(p!=="granted"){C.notify=false;c.checked=false;save();}});}),
      el("div",{class:"xsw"},el("span",null,T("a.volume")),vol),
      (function(){var sel=el("select",{class:"xin",style:"max-width:60%","data-noi18n":""});VOICES.forEach(function(v){var o=el("option",{value:v[0]},v[1]);if(v[0]===C.voice)o.selected=true;sel.appendChild(o);});
        sel.onchange=function(){C.voice=sel.value;save();stop();au.src=vurl();};return el("div",{class:"xsw"},el("span",null,({bn:"মুয়াজ্জিন / কণ্ঠ",en:"Muezzin / voice",ms:"Muazzin / suara",ar:"المؤذن / الصوت",ur:"مؤذن / آواز",sw:"Muadhini / sauti"})[L]||"Muezzin"),sel);})(),
      sw(({bn:"নরম শুরু (ধীরে ধীরে আওয়াজ বাড়বে)",en:"Soft start (volume rises gently)",ms:"Mula lembut (suara naik perlahan)",ar:"بداية هادئة (يرتفع الصوت تدريجيًا)",ur:"نرم آغاز (آواز آہستہ بڑھے)",sw:"Anza polepole (sauti inapanda taratibu)"})[L]||"Soft start",C.soft,function(v){C.soft=v;save();}),
      el("div",{class:"xrow",style:"margin-top:8px"},testB));
    // source
    var city=el("input",{class:"xin",value:C.city||"",placeholder:"Kuala Lumpur","data-noi18n":""}),country=el("input",{class:"xin",value:C.country||"",placeholder:"Malaysia","data-noi18n":""});
    var meth=el("select",{class:"xin"});[["","Auto"],["3","Muslim World League"],["1","Karachi (Univ. of Islamic Sciences)"],["2","ISNA (North America)"],["4","Umm al-Qura, Makkah"],["5","Egyptian Authority"],["17","JAKIM (Malaysia)"],["11","MUIS (Singapore)"],["20","KEMENAG (Indonesia)"],["16","Dubai"],["10","Qatar"],["9","Kuwait"],["13","Diyanet (Turkey)"],["7","Tehran"]]
      .forEach(function(o){var op=el("option",{value:o[0]},o[1]);if(String(C.method)===o[0])op.selected=true;meth.appendChild(op);});
    var school=el("select",{class:"xin"});[["0","Asr: Shafi'i / Maliki / Hanbali"],["1","Asr: Hanafi"]].forEach(function(o){var op=el("option",{value:o[0]},o[1]);if(String(C.school)===o[0])op.selected=true;school.appendChild(op);});
    var st=el("p",{class:"xnote"});
    var srcR=el("input",{type:"radio",name:"azsrc"}),srcA=el("input",{type:"radio",name:"azsrc"}),srcM=el("input",{type:"radio",name:"azsrc"});srcR.checked=C.src==="routine";srcA.checked=C.src==="api";srcM.checked=C.src==="manual";srcM.onchange=function(){C.src="manual";save();render();};
    srcR.onchange=function(){C.src="routine";save();render();};srcA.onchange=function(){C.src="api";save();if(!C.api)st.textContent="";render();};
    function got(){st.textContent="✓ "+T("a.saved");C.src="api";save();render();}
    var getB=el("button",{class:"xbtn acc",type:"button",onclick:function(){C.city=city.value.trim();C.country=country.value.trim();C.method=meth.value;C.school=school.value;save();
      if(!C.city){city.focus();return;}st.textContent=T("q.loading");fetchTimes().then(got).catch(function(){st.textContent=T("q.error");});}},"⟳ "+T("a.fetch"));
    var locB=el("button",{class:"xbtn",type:"button",onclick:function(){if(!navigator.geolocation)return;C.method=meth.value;C.school=school.value;st.textContent=T("q.loading");
      navigator.geolocation.getCurrentPosition(function(pos){fetchTimes({lat:pos.coords.latitude.toFixed(4),lng:pos.coords.longitude.toFixed(4),label:"📍 "+pos.coords.latitude.toFixed(2)+", "+pos.coords.longitude.toFixed(2)}).then(got).catch(function(){st.textContent=T("q.error");});},
        function(){st.textContent=T("q.error");},{timeout:15000,maximumAge:3600000});}},"📍 "+T("a.useLocation"));
    var applyB=el("button",{class:"xbtn gold",type:"button",onclick:function(){applyRoutine(applyB);}},"📅 "+T("a.applyRoutine"));
    var srcCard=el("div",{class:"card"},
      el("label",{class:"xsw"},el("span",null,T("a.fromRoutine")),srcR),
      el("label",{class:"xsw"},el("span",null,T("a.auto")),srcA),
      el("label",{class:"xsw"},el("span",null,({bn:"নিজে সময় ঠিক করো",en:"Set the times myself",ms:"Tetapkan masa sendiri",ar:"أحدد الأوقات بنفسي",ur:"اوقات خود مقرر کریں",sw:"Weka nyakati mwenyewe"})[L]||"Manual"),srcM),
      C.src==="manual"?el("div",{class:"xgrid",style:"grid-template-columns:repeat(5,1fr);margin-top:6px"},P.map(function(p){var i=el("input",{class:"xin",type:"time",value:(C.man&&C.man[p])||t[p]||""});i.onchange=function(){C.man=C.man||{};C.man[p]=i.value;save();render();};return el("label",{class:"xlab"},T("p."+p),i);})):null,
      C.src==="api"?el("div",{style:"display:grid;gap:8px;margin-top:6px"},
        el("div",{class:"xgrid"},el("label",null,T("a.city"),city),el("label",null,T("a.country"),country)),
        el("label",{class:"xlab"},T("a.method"),meth),el("label",{class:"xlab"},"Asr",school),
        el("div",{class:"xrow"},getB,locB),C.api?applyB:null,st):null);
    root.appendChild(nextEl);root.appendChild(list);root.appendChild(opts);root.appendChild(srcCard);
    root.appendChild(el("p",{class:"xnote"},"ℹ️ "+T("a.note")));
    root.appendChild(el("p",{class:"xnote",style:"font-size:.72rem"},"Adhan audio: AlAdhan.com, Wikimedia Commons · Prayer times: AlAdhan.com"));
    updNext();}
  function applyRoutine(btn){if(!C.api||typeof saveR!=="function")return;var t=C.api.t,n=0,jobs=[];
    var plus=function(hm,m){var x=toMin(hm)+m;return String(Math.floor(x/60)%24).padStart(2,"0")+":"+String(x%60).padStart(2,"0");};
    P.forEach(function(p){var r=typeof routine!=="undefined"&&routine[RID[p]];if(!r||!t[p]||r.start===t[p])return;var prev=JSON.parse(JSON.stringify(r));
      r.start=t[p];r.end=plus(t[p],20);saveR(r,true);n++;if(typeof syncRoutine==="function")jobs.push(Promise.resolve(syncRoutine(r,prev)).catch(function(){}));});
    btn.disabled=true;Promise.all(jobs).then(function(){btn.disabled=false;btn.textContent="✓ "+T("a.saved")+(n?" ("+num(n)+")":"");try{if(typeof renderToday==="function")renderToday();}catch(e){}});}
  X.register("azan",{open:function(r){root=r;render();}});
})();

/* ================= COMMUNITY + ADMIN (Firebase) ================= */
(function(){
  var X=window.AMX;if(!X)return;var T=X.T,el=X.el,num=X.num,L=X.LANG;
  var ADMINS=["uowyeasin@gmail.com"];
  var V="12.19.0",SDK=["app","auth","firestore"].map(function(n){return "https://www.gstatic.com/firebasejs/"+V+"/firebase-"+n+"-compat.js";});
  var fb=null,auth=null,db=null,FV=null,me=null,member=null,isAdmin=false,cfg={},sub="feed";
  var unsub=[],root=null,body=null,state="",lastPending=-1;
  function loadScript(u){return new Promise(function(res,rej){var s=document.createElement("script");s.src=u;s.onload=res;s.onerror=rej;document.head.appendChild(s);});}
  function init(){if(fb)return Promise.resolve();
    return SDK.reduce(function(p,u){return p.then(function(){return loadScript(u);});},Promise.resolve()).then(function(){
      fb=window.firebase;if(!fb.apps.length)fb.initializeApp(window.AMALNAMA_FIREBASE);auth=fb.auth();db=fb.firestore();FV=fb.firestore.FieldValue;
      try{if(localStorage.getItem("am-emu")==="1"&&/^(localhost|127\.0\.0\.1)$/.test(location.hostname)){auth.useEmulator("http://127.0.0.1:9099");db.useEmulator("127.0.0.1",8085);}}catch(e){}
      auth.onAuthStateChanged(onUser);
      return auth.getRedirectResult().catch(function(){});});}
  function clear(){unsub.splice(0).forEach(function(f){try{f();}catch(e){}});if(window.AMCHAT)AMCHAT.stop();chatOn=false;chatUnread=0;}
  var chatOn=false,chatUnread=0;
  function enterChat(){if(chatOn||!window.AMCHAT||!me)return;chatOn=true;
    AMCHAT.start({db:db,FV:FV,me:me,isAdmin:isAdmin,getCfg:function(){return cfg;},myName:myName,myPhoto:function(){return (me&&me.photoURL)||"";},
      onUnread:function(n){chatUnread=n;setAdminBadge(lastPending);},
      onName:function(n){if(member)db.collection("members").doc(me.uid).update({name:n}).catch(function(){});}});}
  function onUser(u){clear();me=u;member=null;isAdmin=!!(u&&u.email&&ADMINS.indexOf(u.email.toLowerCase())>=0);X.isAdmin=isAdmin;
    try{if(u)localStorage.setItem("am-comm","1");else localStorage.removeItem("am-comm");}catch(e){}
    if(!u){state="out";render();return;}
    unsub.push(db.collection("config").doc("community").onSnapshot(function(s){cfg=s.exists?s.data():{};if(state==="in"&&sub==="chat")renderSub();if(state!=="in")render();},function(){}));
    if(isAdmin){state="in";render();watchAdmin();enterChat();return;}
    state="load";render();
    unsub.push(db.collection("members").doc(u.uid).onSnapshot(function(s){member=s.exists?s.data():null;
      var ns=!member?"join":member.status==="approved"?"in":member.status==="blocked"?"blocked":"pending";
      if(ns!==state){state=ns;render();}if(ns==="in")enterChat();else if(chatOn){AMCHAT.stop();chatOn=false;chatUnread=0;}},function(e){state="err";render(e);}));}
  // ---- sign in
  function signIn(btn){btn&&(btn.disabled=true);var err=el("p",{class:"xerr"});
    init().then(function(){var pv=new fb.auth.GoogleAuthProvider();pv.setCustomParameters({prompt:"select_account"});
      return auth.signInWithPopup(pv).catch(function(e){
        if(e&&/popup-blocked|operation-not-supported|web-storage-unsupported/.test(e.code||""))return auth.signInWithRedirect(pv);
        if(e&&/popup-closed|cancelled-popup/.test(e.code||""))return;throw e;});})
    .catch(function(e){console.error(e);if(btn){btn.disabled=false;err.textContent=T("c.error")+" ("+((e&&e.code)||"")+")";btn.parentNode.appendChild(err);}})
    .then(function(){if(btn)btn.disabled=false;});}
  // Google's own "Sign in with Google" button: shows the app name (Amalnama) instead of the firebaseapp.com address
  function gisButton(box,fallback){var emu=false;try{emu=localStorage.getItem("am-emu")==="1";}catch(e){}
    if(emu||!window.AMALNAMA_CLIENT_ID)return;var tries=0;
    (function go(){var g=window.google&&google.accounts&&google.accounts.id;if(!g){if(++tries<20)setTimeout(go,300);return;}
      try{g.initialize({client_id:window.AMALNAMA_CLIENT_ID,auto_select:false,cancel_on_tap_outside:true,use_fedcm_for_button:true,
        callback:function(r){if(!r||!r.credential)return;init().then(function(){return auth.signInWithCredential(fb.auth.GoogleAuthProvider.credential(r.credential));})
          .catch(function(e){console.warn("gis sign-in",e);fallback.style.display="";signIn(fallback);});}});
        var holder=el("div");box.insertBefore(holder,fallback);
        g.renderButton(holder,{type:"standard",theme:"filled_blue",size:"large",shape:"pill",text:"signin_with",locale:L==="bn"?"bn":L,logo_alignment:"left"});
        fallback.style.display="none";}catch(e){console.warn(e);}})();}
  // ---- helpers
  function ts(v){return v&&v.toDate?v.toDate():v instanceof Date?v:null;}
  function ago(v){var d=ts(v);if(!d)return T("c.justNow");var s=(Date.now()-d.getTime())/1000;
    if(s<60)return T("c.justNow");if(s<3600)return num(Math.floor(s/60))+" "+T("c.minAgo");if(s<86400)return num(Math.floor(s/3600))+" "+T("c.hrAgo");
    if(s<604800)return num(Math.floor(s/86400))+" "+T("c.dayAgo");return d.toLocaleDateString(L==="bn"?"bn-BD":L);}
  function av(photo,name,uid){var pp=uid&&window.AMCHAT&&AMCHAT.profile(uid);if(pp){if(pp.photo)photo=pp.photo;if(pp.name&&pp.name!=="…")name=pp.name;}
    if(photo&&/^data:image\//.test(photo)){var di=el("img",{class:"cm-av",src:photo,alt:""});return di;}
    if(photo&&/^https:\/\//.test(photo)){var i=el("img",{class:"cm-av",src:photo,alt:"",referrerpolicy:"no-referrer",loading:"lazy"});i.onerror=function(){i.replaceWith(av("",name));};return i;}
    return el("div",{class:"cm-av"},(String(name||"?").trim()[0]||"?").toUpperCase());}
  function myName(){var pp=me&&window.AMCHAT&&AMCHAT.profile(me.uid);if(pp&&pp.name&&pp.name!=="…")return pp.name;return (member&&member.name)||(me&&me.displayName)||(me&&me.email||"").split("@")[0];}
  function myPhoto(){return (me&&me.photoURL)||"";}
  function oops(e){console.error(e);alert(T("c.error")+(e&&e.code?" ("+e.code+")":""));}
  // ---- main render
  function render(e){if(!root)return;root.innerHTML="";root.setAttribute("data-noi18n","");
    var head=el("div",{class:"card",style:"margin-top:0"},el("div",{class:"xhead"},el("h2",null,"👥 "+T("c.title")),
      me?el("button",{class:"xbtn sm",type:"button",onclick:function(){clear();auth.signOut();}},T("c.signout")):null),
      me?el("div",{class:"q-sub",style:"margin-top:4px"},T("c.signedAs")+" "+me.email+(isAdmin?" · ⭐ "+T("c.admin"):"")):null);
    root.appendChild(head);
    if(state===""||state==="load"){head.appendChild(el("p",{class:"muted"},T("q.loading")));return;}
    if(state==="err"){head.appendChild(el("p",{class:"xerr"},T("c.error")+(e&&e.code?" ("+e.code+")":"")));return;}
    if(state==="out"){head.appendChild(el("p",{style:"margin:10px 0"},T("c.intro")));
      var b=el("button",{class:"gbtn2",type:"button",html:'<svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>'});
      b.appendChild(document.createTextNode(T("c.signin")));b.onclick=function(){signIn(b);};
      var gw=el("div",{style:"min-height:44px"});head.appendChild(gw);gw.appendChild(b);gisButton(gw,b);head.appendChild(el("p",{class:"xnote"},T("c.guidelines")));return;}
    if(cfg.welcome&&state!=="in")head.appendChild(el("p",{class:"cm-txt",style:"background:var(--gold-soft);padding:10px 12px;border-radius:12px"},cfg.welcome));
    if(state==="join"){var nm=el("input",{class:"xin",maxlength:"60",value:(me.displayName||"")}),co=el("input",{class:"xin",maxlength:"40"}),it=el("input",{class:"xin",maxlength:"140"});
      var go=el("button",{class:"xbtn acc",type:"button"},"✉ "+T("c.request"));
      go.onclick=function(){var n=nm.value.trim();if(!n){nm.focus();return;}go.disabled=true;
        db.collection("members").doc(me.uid).set({uid:me.uid,name:n,email:me.email,photo:myPhoto(),status:"pending",requestedAt:FV.serverTimestamp(),country:co.value.trim(),lang:L,intro:it.value.trim()})
        .catch(function(e){go.disabled=false;oops(e);});};
      head.appendChild(el("p",{style:"margin:10px 0"},T("c.intro")));
      head.appendChild(el("div",{style:"display:grid;gap:8px"},el("label",{class:"xlab"},T("c.name"),nm),el("div",{class:"xgrid"},el("label",null,T("c.country"),co),el("label",null,T("c.introField"),it)),el("div",null,go)));
      head.appendChild(el("p",{class:"xnote"},T("c.guidelines")));return;}
    if(state==="pending"){head.appendChild(el("p",{style:"margin:12px 0;font-weight:600"},"⏳ "+T("c.pending")));
      head.appendChild(el("button",{class:"xbtn sm warn",type:"button",onclick:function(){db.collection("members").doc(me.uid).delete().catch(oops);}},T("c.cancelReq")));return;}
    if(state==="blocked"){head.appendChild(el("p",{class:"xerr",style:"margin:12px 0"},"⛔ "+T("c.blocked")));return;}
    // approved / admin
    var tabs=el("div",{class:"cm-tabs"});[["feed","📰 "+T("c.feed")],["chat","💬 "+T("c.chat")]].concat(isAdmin?[["admin","🛡 "+T("c.admin")]]:[]).forEach(function(p){
      var b=el("button",{type:"button",class:sub===p[0]?"on":""},p[1]);b.onclick=function(){sub=p[0];tabs.querySelectorAll("button").forEach(function(x){x.classList.remove("on");});b.classList.add("on");renderSub();};
      if(p[0]==="admin")b.id="cm-admtab";if(p[0]==="chat"){b.id="cm-chattab";if(chatUnread)b.appendChild(el("span",{class:"dot"},String(chatUnread)));}tabs.appendChild(b);});
    root.appendChild(tabs);body=el("div");root.appendChild(body);renderSub();
    if(isAdmin)setAdminBadge(lastPending);}
  var subUnsub=[],cUnsubs=[];
  function dropC(){cUnsubs.splice(0).forEach(function(f){try{f();}catch(e){}});}
  function renderSub(){dropC();subUnsub.splice(0).forEach(function(f){try{f();}catch(e){}});if(!body)return;body.innerHTML="";
    if(sub==="feed")feed();else if(sub==="chat")chat();else if(sub==="admin"&&isAdmin)admin();}
  // ---- feed
  function feed(){var ta=el("textarea",{maxlength:"3000",placeholder:T("c.write")});var ann=el("input",{type:"checkbox"});
    var pb=el("button",{class:"xbtn acc",type:"button"},T("c.post"));
    pb.onclick=function(){var t=ta.value.trim();if(!t)return;pb.disabled=true;var a=isAdmin&&ann.checked;
      db.collection("posts").add({uid:me.uid,name:myName(),photo:myPhoto(),text:t,createdAt:FV.serverTimestamp(),announce:a,pinned:a,likes:[]})
      .then(function(){ta.value="";ann.checked=false;}).catch(oops).then(function(){pb.disabled=false;});};
    body.appendChild(el("div",{class:"card cm-comp",style:"margin-top:0"},ta,el("div",{class:"xhead"},isAdmin?el("label",{class:"xrow",style:"gap:6px;font-size:.82rem;color:var(--muted)"},ann,"📌 "+T("c.asAnnounce")):el("span"),pb)));
    var list=el("div");body.appendChild(list);
    subUnsub.push(db.collection("posts").orderBy("createdAt","desc").limit(60).onSnapshot(function(s){
      var docs=s.docs.map(function(d){var x=d.data({serverTimestamps:"estimate"});x.id=d.id;return x;});
      docs.sort(function(a,b){if(!!b.pinned!==!!a.pinned)return b.pinned?1:-1;return (ts(b.createdAt)||0)-(ts(a.createdAt)||0);});
      var open={};list.querySelectorAll(".cm-post[data-open]").forEach(function(p){open[p.dataset.id]=1;});
      dropC();list.innerHTML="";if(!docs.length)list.appendChild(el("p",{class:"muted",style:"text-align:center;margin:20px 0"},T("c.empty")));
      docs.forEach(function(p){list.appendChild(post(p,open[p.id]));});},function(e){list.textContent=T("c.error");console.error(e);}));}
  function post(p,wasOpen){var mine=p.uid===me.uid,liked=(p.likes||[]).indexOf(me.uid)>=0;
    var card=el("div",{class:"cm-post"+(p.announce?" ann":""),"data-id":p.id});
    card.appendChild(el("div",{class:"cm-ph"},av(p.photo,p.name,p.uid),el("div",{style:"flex:1;min-width:0"},el("div",{class:"nm"},p.name||"—",p.announce?el("span",{class:"chip",style:"margin-inline-start:6px"},"📢 "+T("c.announce")):null),
      el("div",{class:"tm"},ago(p.createdAt)+(p.pinned?" · 📌 "+T("c.pinned"):"")+(p.edited?" · "+T("c.edited"):"")))));
    card.appendChild(el("div",{class:"cm-txt"},p.text));
    var acts=el("div",{class:"cm-acts"});
    acts.appendChild(el("button",{type:"button",class:liked?"on":"",onclick:function(){db.collection("posts").doc(p.id).update({likes:liked?FV.arrayRemove(me.uid):FV.arrayUnion(me.uid)}).catch(oops);}},(liked?"❤️ ":"🤍 ")+num((p.likes||[]).length)));
    var cbox=el("div",{class:"cm-cm",hidden:true});
    var cb=el("button",{type:"button"},"💬 "+T("c.comment"));var cu=null;
    function openC(){cbox.hidden=false;card.setAttribute("data-open","");cbox.innerHTML="";var cl=el("div",{style:"display:grid;gap:8px"});cbox.appendChild(cl);
      var ci=el("input",{class:"xin",maxlength:"1000",placeholder:T("c.writeComment")}),cs=el("button",{class:"xbtn sm acc",type:"button"},T("c.send"));
      function send(){var t=ci.value.trim();if(!t)return;cs.disabled=true;db.collection("posts").doc(p.id).collection("comments").add({uid:me.uid,name:myName(),photo:myPhoto(),text:t,createdAt:FV.serverTimestamp()}).then(function(){ci.value="";}).catch(oops).then(function(){cs.disabled=false;});}
      cs.onclick=send;ci.onkeydown=function(e){if(e.key==="Enter"){e.preventDefault();send();}};
      cbox.appendChild(el("div",{class:"cm-send"},ci,cs));
      cu=db.collection("posts").doc(p.id).collection("comments").orderBy("createdAt").limit(100).onSnapshot(function(s){cl.innerHTML="";
        s.docs.forEach(function(d){var c=d.data({serverTimestamps:"estimate"});var own=c.uid===me.uid;
          cl.appendChild(el("div",{class:"cm-c"},av(c.photo,c.name,c.uid),el("div",{style:"min-width:0"},el("div",{class:"b"},el("b",{style:"font-size:.8rem"},c.name||"—"),el("br"),c.text),
            el("div",{class:"q-sub"},ago(c.createdAt),(own||isAdmin)?el("button",{class:"xbtn sm",style:"border:0;padding:2px 6px",type:"button",onclick:function(){if(confirm(T("c.confirmDelete")))d.ref.delete().catch(oops);}},"🗑"):null))));});},function(){});
      cUnsubs.push(cu);}
    cb.onclick=function(){if(cbox.hidden)openC();else{cbox.hidden=true;card.removeAttribute("data-open");if(cu){cu();var j=cUnsubs.indexOf(cu);if(j>=0)cUnsubs.splice(j,1);cu=null;}}};
    acts.appendChild(cb);
    if(isAdmin)acts.appendChild(el("button",{type:"button",onclick:function(){db.collection("posts").doc(p.id).update({pinned:!p.pinned}).catch(oops);}},"📌 "+(p.pinned?T("c.unpin"):T("c.pin"))));
    if(mine||isAdmin)acts.appendChild(el("button",{type:"button",onclick:function(){if(confirm(T("c.confirmDelete")))db.collection("posts").doc(p.id).delete().catch(oops);}},"🗑 "+T("c.delete")));
    card.appendChild(acts);card.appendChild(cbox);if(wasOpen)openC();return card;}
  // ---- chat
  function chat(){if(window.AMCHAT&&chatOn){AMCHAT.mount(body);return;}var box=el("div",{class:"cm-chat"});var inp=el("input",{class:"xin",maxlength:"1000",placeholder:T("c.typeMsg")});var sb=el("button",{class:"xbtn acc",type:"button"},"➤ "+T("c.send"));
    var locked=!!cfg.chatLocked&&!isAdmin;
    body.appendChild(box);
    if(cfg.chatLocked)body.appendChild(el("p",{class:"xnote"},"🔒 "+T("ad.chatIsLocked")));
    if(!locked)body.appendChild(el("div",{class:"cm-send"},inp,sb));
    function send(){var t=inp.value.trim();if(!t)return;sb.disabled=true;
      db.collection("messages").add({uid:me.uid,name:myName(),photo:myPhoto(),text:t,createdAt:FV.serverTimestamp()}).then(function(){inp.value="";inp.focus();}).catch(oops).then(function(){sb.disabled=false;});}
    sb.onclick=send;inp.onkeydown=function(e){if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}};
    subUnsub.push(db.collection("messages").orderBy("createdAt","desc").limit(150).onSnapshot(function(s){
      var atBottom=box.scrollHeight-box.scrollTop-box.clientHeight<60;box.innerHTML="";
      var docs=s.docs.slice().reverse();if(!docs.length)box.appendChild(el("p",{class:"muted",style:"margin:auto;text-align:center"},T("c.emptyChat")));
      docs.forEach(function(d){var m=d.data({serverTimestamps:"estimate"}),own=m.uid===me.uid;var dt=ts(m.createdAt);
        box.appendChild(el("div",{class:"cm-m"+(own?" me":"")},own?null:av(m.photo,m.name),
          el("div",{style:"min-width:0"},own?null:el("div",{class:"who"},m.name||"—"),el("div",{class:"bb"},m.text),
            el("div",{class:"tm xrow",style:"gap:4px;"+(own?"justify-content:flex-end":"")},dt?num(dt.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})):"…",
              (own||isAdmin)?el("button",{class:"x",type:"button",title:T("c.delete"),onclick:function(){if(confirm(T("c.confirmDelete")))d.ref.delete().catch(oops);}},"🗑"):null))));});
      if(atBottom||s.docChanges().some(function(c){return c.type==="added"&&c.doc.data().uid===me.uid;})||!box.dataset.init){box.scrollTop=box.scrollHeight;box.dataset.init="1";}
    },function(e){box.textContent=T("c.error");console.error(e);}));}
  // ---- admin
  var allMembers=[];
  var profs={},postsBy={};
  function watchAdmin(){unsub.push(db.collection("profiles").onSnapshot(function(s){profs={};s.docs.forEach(function(d){profs[d.id]=d.data({serverTimestamps:"estimate"});});if(sub==="admin"&&body)renderAdminLists();},function(){}));
    unsub.push(db.collection("posts").orderBy("createdAt","desc").limit(300).onSnapshot(function(s){postsBy={};s.docs.forEach(function(d){var u=d.data().uid;postsBy[u]=(postsBy[u]||0)+1;});if(sub==="admin"&&body)renderAdminLists();},function(){}));
    unsub.push(db.collection("members").onSnapshot(function(s){allMembers=s.docs.map(function(d){return d.data({serverTimestamps:"estimate"});});
      var pend=allMembers.filter(function(m){return m.status==="pending";}).length;
      if(lastPending>=0&&pend>lastPending&&"Notification" in window&&Notification.permission==="granted"){try{new Notification("👥 Amalnama",{body:num(pend)+" "+T("ad.newReq"),icon:"icon-192.png",tag:"am-join"});}catch(e){}}
      lastPending=pend;setAdminBadge(pend);if(sub==="admin"&&body)renderAdminLists();},function(e){console.error(e);}));}
  function setAdminBadge(n){var tot=(n>0?n:0)+(chatUnread||0);X.badge("comm",tot);var cb=document.getElementById("cm-chattab");if(cb){var cd=cb.querySelector(".dot");if(chatUnread){if(!cd){cd=el("span",{class:"dot"});cb.appendChild(cd);}cd.textContent=chatUnread;}else if(cd)cd.remove();}
    var b=document.getElementById("cm-admtab");if(b){var d=b.querySelector(".dot");if(n>0){if(!d){d=el("span",{class:"dot"});b.appendChild(d);}d.textContent=n;}else if(d)d.remove();}}
  var admLists=null,statsEl=null;
  function admin(){statsEl=el("div",{class:"cm-stats"});
    body.appendChild(el("div",{class:"card",style:"margin-top:0"},el("h2",{style:"margin-bottom:10px"},"🛡 "+T("ad.title")+" · "+T("ad.stats")),statsEl));
    admLists=el("div");body.appendChild(admLists);renderAdminLists();
    var wl=el("textarea",{class:"xin",maxlength:"1000",rows:"3"});wl.value=cfg.welcome||"";
    var lk=el("input",{type:"checkbox"});lk.checked=!!cfg.chatLocked;var ok=el("span",{class:"q-sub"});
    var sv=el("button",{class:"xbtn acc",type:"button",onclick:function(){sv.disabled=true;db.collection("config").doc("community").set({welcome:wl.value.trim(),chatLocked:lk.checked,updatedAt:FV.serverTimestamp()},{merge:true})
      .then(function(){ok.textContent="✓ "+T("ad.saved");}).catch(oops).then(function(){sv.disabled=false;});}},T("ad.save"));
    var clr=el("button",{class:"xbtn warn",type:"button",onclick:function(){if(!confirm(T("ad.clearChat")+"?"))return;clr.disabled=true;
      db.collection("messages").limit(400).get().then(function(s){var b=db.batch();s.docs.forEach(function(d){b.delete(d.ref);});return b.commit();}).catch(oops).then(function(){clr.disabled=false;});}},"🗑 "+T("ad.clearChat"));
    body.appendChild(el("div",{class:"card"},el("label",{class:"xlab"},T("ad.welcome"),wl),el("label",{class:"xsw"},el("span",null,"🔒 "+T("ad.chatLocked")),lk),el("div",{class:"xrow"},sv,ok),el("div",{style:"margin-top:12px"},clr)));
    // counts
    function cnt(c,i){try{return db.collection(c).count().get().then(function(s){return s.data().count;});}catch(e){return db.collection(c).limit(500).get().then(function(s){return s.size;});}}
    Promise.all([cnt("posts"),cnt("messages")]).catch(function(){return ["—","—"];}).then(function(r){statsEl.dataset.p=r[0];statsEl.dataset.m=r[1];drawStats();});}
  function drawStats(){if(!statsEl)return;statsEl.innerHTML="";var ap=allMembers.filter(function(m){return m.status==="approved";}).length;
    [[ap,T("ad.totalMembers")],[statsEl.dataset.p||"…",T("ad.totalPosts")],[statsEl.dataset.m||"…",T("ad.totalMsgs")]].forEach(function(x){statsEl.appendChild(el("div",null,el("b",null,num(x[0])),el("span",null,x[1])));});}
  function renderAdminLists(){if(!admLists)return;drawStats();admLists.innerHTML="";
    var groups=[["pending","⏳ "+T("ad.pending")],["approved","✅ "+T("ad.members")],["blocked","⛔ "+T("ad.blocked")]];
    groups.forEach(function(g){var ms=allMembers.filter(function(m){return m.status===g[0];}).sort(function(a,b){return (ts(b.requestedAt)||0)-(ts(a.requestedAt)||0);});
      var card=el("div",{class:"card"},el("h2",{style:"margin-bottom:6px"},g[1]+" ("+num(ms.length)+")"));
      if(!ms.length)card.appendChild(el("p",{class:"muted"},g[0]==="pending"?T("ad.noPending"):"—"));
      ms.forEach(function(m){var ref=db.collection("members").doc(m.uid);
        var pref=db.collection("profiles").doc(m.uid);
        function set(st){var o={status:st};if(st==="approved"){o.approvedAt=FV.serverTimestamp();o.approvedBy=me.email;}if(st==="blocked")pref.delete().catch(function(){});return ref.update(o).catch(oops);}
        function del(){pref.delete().catch(function(){});return ref.delete().catch(oops);}
        var btns=el("div",{class:"xrow",style:"gap:6px"});
        if(g[0]==="pending"){btns.appendChild(el("button",{class:"xbtn sm acc",type:"button",onclick:function(){set("approved");}},"✓ "+T("ad.approve")));
          btns.appendChild(el("button",{class:"xbtn sm",type:"button",onclick:function(){ref.delete().catch(oops);}},"✕ "+T("ad.reject")));
          btns.appendChild(el("button",{class:"xbtn sm warn",type:"button",onclick:function(){set("blocked");}},"⛔ "+T("ad.block")));}
        if(g[0]==="approved"){btns.appendChild(el("button",{class:"xbtn sm warn",type:"button",onclick:function(){if(confirm(T("ad.block")+": "+m.name+"?"))set("blocked");}},"⛔ "+T("ad.block")));
          btns.appendChild(el("button",{class:"xbtn sm",type:"button",onclick:function(){if(confirm(T("ad.remove")+": "+m.name+"?"))del();}},T("ad.remove")));}
        if(g[0]==="blocked"){btns.appendChild(el("button",{class:"xbtn sm",type:"button",onclick:function(){set("approved");}},T("ad.unblock")));
          btns.appendChild(el("button",{class:"xbtn sm",type:"button",onclick:function(){del();}},T("ad.remove")));}
        card.appendChild(el("div",{class:"cm-mem"},av(m.photo,m.name),el("div",{class:"info"},el("div",{style:"font-weight:600"},m.name||"—"),
          el("div",{class:"q-sub"},m.email+(m.country?" · "+m.country:"")+(m.lang?" · "+m.lang:"")),m.intro?el("div",{class:"q-sub",style:"white-space:normal"},"“"+m.intro+"”"):null,
          el("div",{class:"q-sub"},T("ad.requested")+": "+ago(m.requestedAt)),
          (function(){var pf=profs[m.uid],ls=pf&&pf.lastSeen,on=ls&&ts(ls)>Date.now()-4*60000,AL={bn:["সক্রিয়","অনলাইন","শেষ দেখা","পোস্ট"],en:["Activity","online","last seen","posts"],ms:["Aktiviti","dalam talian","kali terakhir","hantaran"],ar:["النشاط","متصل","آخر ظهور","منشورات"],ur:["سرگرمی","آن لائن","آخری بار","پوسٹس"],sw:["Shughuli","mtandaoni","alionekana","machapisho"]}[L]||["Activity","online","last seen","posts"];
            return el("div",{class:"q-sub",style:"color:"+(on?"#22C55E":"var(--muted)")},"● "+AL[0]+": "+(on?AL[1]:ls?AL[2]+" "+ago(ls):"—")+" · "+num(postsBy[m.uid]||0)+" "+AL[3]);})()),btns));});
      admLists.appendChild(card);});}
  X.register("comm",{open:function(r){root=r;if(!fb){render();init().catch(function(e){state="err";render(e);});}else render();}});
  // returning users: connect quietly so admins see new join requests on the tab badge
  try{if(localStorage.getItem("am-comm")==="1")setTimeout(function(){root=root||document.getElementById("v-comm");init().catch(function(){});},4000);}catch(e){}
})();
