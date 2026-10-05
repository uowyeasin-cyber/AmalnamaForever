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
  // ---- v5: Instagram-style community · WhatsApp-style chat · YouTube-style videos · admin dashboard
  var LIx={bn:0,en:1,ms:2,ar:3,ur:4,sw:5}[L];if(LIx==null)LIx=1;
  function W(a){return a[LIx]||a[1]||a[0];}
  function Bq(bn,en,ms,ar,ur,sw){return [bn,en,ms,ar,ur,sw];}
  var NS="http://www.w3.org/2000/svg";
  function svg(d,o){o=o||{};var s=document.createElementNS(NS,"svg");s.setAttribute("viewBox","0 0 24 24");s.setAttribute("width",o.s||24);s.setAttribute("height",o.s||24);s.setAttribute("aria-hidden","true");
    s.setAttribute("fill",o.fill||"none");s.setAttribute("stroke",o.stroke||"currentColor");s.setAttribute("stroke-width",o.w||"1.9");s.setAttribute("stroke-linecap","round");s.setAttribute("stroke-linejoin","round");
    [].concat(d).forEach(function(x){var p=document.createElementNS(NS,"path");p.setAttribute("d",x);s.appendChild(p);});return s;}
  var P={plus:"M12 8v8M8 12h8",sq:"M8.5 3.5h7a5 5 0 0 1 5 5v7a5 5 0 0 1-5 5h-7a5 5 0 0 1-5-5v-7a5 5 0 0 1 5-5z",
    heart:"M12 20.5s-8-4.6-8-10.7A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8 2.8c0 6.1-8 10.7-8 10.7z",send:"M21 3.5L10.5 13.8M21 3.5l-6.5 17-4-7.7-7.7-4z",
    cmt:"M20.5 12a8.5 8.5 0 0 1-12.3 7.6L3.5 20.5l1-4.3A8.5 8.5 0 1 1 20.5 12z",save:"M6.5 4h11v16.5L12 16.8l-5.5 3.7z",shield:"M12 3l7.5 3v5.5c0 4.6-3.2 8.4-7.5 9.5-4.3-1.1-7.5-4.9-7.5-9.5V6zM9 12l2 2 4-4",
    mosque:"M8 21V10.5l3-4 3 4V21M7 21h8M11 6.5V3M17.5 9a4 4 0 0 1 0 6",book:"M12 8C10 6.5 7 6 4 6.5v7.5c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V6.5C17 6 14 6.5 12 8zM12 8v7.5",
    img:"M4 5h16v14H4zM9 10.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6zM20 16l-5-5-8 8"};
  var PAL=[["#0E3236","#F4DFA6"],["#F4EBDD","#3A2A16"],["#1C3550","#E6F0FA"],["#1F3D2F","#DFF5EA"],["#3A2A56","#EDE3FA"],["#5A1E22","#FBE3E0"],["#2A2312","#F7E2A6"],["#103A37","#CFEFE4"]];
  var IGR="conic-gradient(from 210deg,#F9CE34,#EE2A7B,#6228D7,#F9CE34)";
  var vidBox=null;
  function hashN(s){var h=0;s=String(s||"");for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return Math.abs(h);}
  function setBodyTheme(){var on=document.getElementById("v-comm")&&!document.getElementById("v-comm").hidden;var th=!on||(sub==="admin"&&state==="in")?"":sub==="chat"&&state==="in"?"wa":sub==="videos"?"yt":"ig";
    ["ig","wa","yt"].forEach(function(k){document.body.classList.toggle("v5-"+k,th===k);});}
  X.v5theme=setBodyTheme;X.v5open=function(s){sub=s;if(root)render();};
  function saved(){try{return JSON.parse(localStorage.getItem("am-v5-saved")||"[]");}catch(e){return [];}}
  function setSaved(a){try{localStorage.setItem("am-v5-saved",JSON.stringify(a));}catch(e){}}
  function sheetV4(title,body){return window.V4&&V4.sheet?V4.sheet(title,body):null;}
  function toast(m){if(window.V4&&V4.toast)V4.toast(m);}
  function avRing(name,photo,uid,size,ring){var a=av(photo,name,uid);a.classList.add("v5av");var w=el("span",{class:"v5ring",style:"width:"+size+"px;height:"+size+"px;background:"+(ring||"#DBDBDB")},a);return w;}
  function isActive(uid,hrs){var pp=window.AMCHAT&&AMCHAT.profile(uid);var d=pp&&ts(pp.lastSeen);return !!(d&&Date.now()-d.getTime()<(hrs||24)*3600000);}
  // ---- main render
  function render(e){if(!root)return;dropC();subUnsub.splice(0).forEach(function(f){try{f();}catch(x){}});root.innerHTML="";root.setAttribute("data-noi18n","");root.classList.add("v5c");
    var th=sub==="chat"&&state==="in"?"wa":sub==="videos"?"yt":"ig";root.setAttribute("data-th",th);setBodyTheme();
    var wrap=el("div",{class:"v5bleed"});root.appendChild(wrap);
    // header
    var hd=el("header",{class:"v5c-hd"},el("span",{class:"wm"},"Amalnama"),el("span",{style:"flex:1"}));
    if(state==="in"){
      hd.appendChild(el("button",{type:"button",class:"ib","aria-label":W(Bq("নতুন পোস্ট","New post","Hantaran baharu","منشور جديد","نئی پوسٹ","Chapisho jipya")),onclick:compose},svg([P.sq,P.plus],{s:25})));
      hd.appendChild(el("button",{type:"button",class:"ib","aria-label":W(Bq("নোটিফিকেশন","Activity","Aktiviti","النشاط","سرگرمی","Shughuli")),onclick:activity},svg(P.heart,{s:25})));
      var cb=el("button",{type:"button",class:"ib","aria-label":W(Bq("চ্যাট","Chats","Sembang","الدردشات","چیٹس","Mazungumzo")),onclick:function(){sub="chat";render();}},svg(P.send,{s:25}));
      cb.id="cm-chattab";if(chatUnread)cb.appendChild(el("span",{class:"dot"},num(chatUnread)));hd.appendChild(cb);
      if(isAdmin){var ab=el("button",{type:"button",class:"ib",id:"cm-admtab","aria-label":W(Bq("অ্যাডমিন ড্যাশবোর্ড","Admin dashboard","Papan pemuka admin","لوحة المشرف","ایڈمن ڈیش بورڈ","Dashibodi ya admin")),onclick:function(){sub="admin";render();}},svg(P.shield,{s:24}));
        if(lastPending>0)ab.appendChild(el("span",{class:"dot"},num(lastPending)));hd.appendChild(ab);}}
    wrap.appendChild(hd);
    if(sub!=="admin"){var tabs=el("nav",{class:"v5c-tabs"});
      [["feed",Bq("পোস্ট","Posts","Hantaran","المنشورات","پوسٹس","Machapisho")],["chat",Bq("চ্যাট","Chats","Sembang","الدردشات","چیٹس","Mazungumzo")],["videos",Bq("ভিডিও","Videos","Video","فيديو","ویڈیو","Video")]].forEach(function(p){
        var b=el("button",{type:"button","aria-current":sub===p[0]?"page":null,onclick:function(){if(sub===p[0])return;sub=p[0];render();}},W(p[1]));tabs.appendChild(b);});
      wrap.appendChild(tabs);}
    body=el("div",{class:"v5c-body"});wrap.appendChild(body);
    if(sub==="videos"){vidBox=el("div");body.appendChild(vidBox);if(window.V5&&V5.videos)V5.videos(vidBox);return;}
    if(state===""||state==="load"){body.appendChild(el("div",{class:"v5c-card"},el("p",{class:"mut"},T("q.loading"))));return;}
    if(state==="err"){body.appendChild(el("div",{class:"v5c-card"},el("p",{class:"xerr"},T("c.error")+(e&&e.code?" ("+e.code+")":""))));return;}
    if(state!=="in"){joinCard();return;}
    if(sub==="admin"&&isAdmin){admin();return;}
    if(sub==="chat"){chat();return;}
    stories();feed();}
  function joinCard(){var c=el("div",{class:"v5c-card"});body.appendChild(c);
    c.appendChild(el("div",{class:"tt"},W(Bq("কমিউনিটিতে যোগ দাও","Join the community","Sertai komuniti","انضم إلى المجتمع","کمیونٹی میں شامل ہوں","Jiunge na jumuiya"))));
    c.appendChild(el("div",{class:"st"},W(Bq("অ্যাডমিন অনুমতি দিলে পোস্ট, চ্যাট আর কল খুলে যাবে","Posts, chats and calls open once the admin approves","Hantaran, sembang dan panggilan dibuka selepas admin meluluskan","تُفتح المنشورات والدردشة بعد موافقة المشرف","ایڈمن کی منظوری کے بعد پوسٹس، چیٹ اور کال کھلیں گی","Machapisho na mazungumzo yatafunguka admin akikubali"))));
    if(cfg.welcome)c.appendChild(el("p",{class:"wl"},cfg.welcome));
    if(state==="out"){var b=el("button",{class:"v5c-blue",type:"button"},T("c.signin"));b.onclick=function(){signIn(b);};
      var gw=el("div",{class:"gw"});c.appendChild(gw);gw.appendChild(b);gisButton(gw,b);c.appendChild(el("p",{class:"nt"},T("c.guidelines")));return;}
    if(state==="join"){var nm=el("input",{class:"v5c-in",maxlength:"60",value:(me.displayName||""),placeholder:T("c.name")}),co=el("input",{class:"v5c-in",maxlength:"40",placeholder:T("c.country")}),it=el("input",{class:"v5c-in",maxlength:"140",placeholder:T("c.introField")});
      var go=el("button",{class:"v5c-blue",type:"button"},W(Bq("যোগ দেওয়ার আবেদন পাঠাও","Send a join request","Hantar permohonan","أرسل طلب الانضمام","شمولیت کی درخواست بھیجیں","Tuma ombi la kujiunga")));
      go.onclick=function(){var n=nm.value.trim();if(!n){nm.focus();return;}go.disabled=true;
        db.collection("members").doc(me.uid).set({uid:me.uid,name:n,email:me.email,photo:myPhoto(),status:"pending",requestedAt:FV.serverTimestamp(),country:co.value.trim(),lang:L,intro:it.value.trim()})
        .catch(function(e){go.disabled=false;oops(e);});};
      c.appendChild(el("div",{class:"fm"},nm,co,it,go));c.appendChild(el("p",{class:"nt"},T("c.guidelines")));}
    if(state==="pending"){c.appendChild(el("button",{class:"v5c-blue wait",type:"button",disabled:true},W(Bq("আবেদন পাঠানো হয়েছে · অপেক্ষায়","Request sent · waiting","Permohonan dihantar · menunggu","تم إرسال الطلب · بانتظار","درخواست بھیج دی · انتظار","Ombi limetumwa · subiri"))));
      c.appendChild(el("button",{class:"v5c-link",type:"button",onclick:function(){db.collection("members").doc(me.uid).delete().catch(oops);}},T("c.cancelReq")));}
    if(state==="blocked")c.appendChild(el("p",{class:"xerr"},T("c.blocked")));
    if(me)c.appendChild(el("button",{class:"v5c-link",type:"button",onclick:function(){clear();auth.signOut();}},T("c.signout")+" · "+me.email));}
  // ---- stories row (members, ring = active in last 24 h)
  var storyEl=null;
  function stories(){storyEl=el("div",{class:"v5c-stories"});body.appendChild(storyEl);drawStories();}
  function drawStories(){if(!storyEl||!storyEl.isConnected)return;storyEl.innerHTML="";
    var mine=el("button",{type:"button",onclick:meMenu},avRing(myName(),myPhoto(),me.uid,68,"#DBDBDB"),el("span",{class:"n"},W(Bq("তুমি","You","Anda","أنت","آپ","Wewe"))));storyEl.appendChild(mine);
    var ps=window.AMCHAT&&AMCHAT.profiles?AMCHAT.profiles():{};
    Object.keys(ps).map(function(k){return ps[k];}).filter(function(p){return p&&p.uid&&p.uid!==me.uid;})
      .sort(function(a,b){return (ts(b.lastSeen)||0)-(ts(a.lastSeen)||0);}).slice(0,30).forEach(function(p){
        storyEl.appendChild(el("button",{type:"button",onclick:function(){if(window.AMCHAT)AMCHAT.openChat(p.uid);}},avRing(p.name,p.photo,p.uid,68,isActive(p.uid,24)?IGR:"#DBDBDB"),el("span",{class:"n"},p.name||"—")));});}
  X.v5stories=drawStories;
  function meMenu(){var items=el("div",{class:"v5c-menu"});var sh=null;
    function it(lbl,fn){items.appendChild(el("button",{type:"button",onclick:function(){if(sh)sh.close();fn();}},lbl));}
    it(W(Bq("আমার প্রোফাইল","My profile","Profil saya","ملفي","میری پروفائل","Wasifu wangu")),function(){if(window.AMCHAT&&AMCHAT.profileView)AMCHAT.profileView();});
    it(W(Bq("সেভ করা পোস্ট","Saved posts","Hantaran disimpan","المحفوظات","محفوظ پوسٹس","Yaliyohifadhiwa")),function(){onlySaved=!onlySaved;render();});
    if(isAdmin)it(W(Bq("অ্যাডমিন ড্যাশবোর্ড","Admin dashboard","Papan pemuka admin","لوحة المشرف","ایڈمن ڈیش بورڈ","Dashibodi ya admin")),function(){sub="admin";render();});
    it(T("c.signout"),function(){clear();auth.signOut();});
    sh=sheetV4(me.email,items);}
  var onlySaved=false,feedDocs=[];
  // ---- feed
  function feed(){var list=el("div",{class:"v5c-feed"});body.appendChild(list);
    if(onlySaved)body.insertBefore(el("div",{class:"v5c-flt"},W(Bq("শুধু সেভ করা পোস্ট","Saved posts only","Hantaran disimpan sahaja","المحفوظات فقط","صرف محفوظ","Yaliyohifadhiwa tu")),el("button",{type:"button",onclick:function(){onlySaved=false;render();}},"✕")),list);
    subUnsub.push(db.collection("posts").orderBy("createdAt","desc").limit(60).onSnapshot(function(s){
      var docs=s.docs.map(function(d){var x=d.data({serverTimestamps:"estimate"});x.id=d.id;return x;});
      docs.sort(function(a,b){if(!!b.pinned!==!!a.pinned)return b.pinned?1:-1;return (ts(b.createdAt)||0)-(ts(a.createdAt)||0);});feedDocs=docs;
      var open={};list.querySelectorAll(".v5p[data-open]").forEach(function(p){open[p.dataset.id]=1;});
      dropC();list.innerHTML="";var sv=saved();var shown=onlySaved?docs.filter(function(p){return sv.indexOf(p.id)>=0;}):docs;
      if(!shown.length)list.appendChild(el("p",{class:"v5c-empty"},onlySaved?"—":T("c.empty")));
      shown.forEach(function(p){list.appendChild(post(p,open[p.id]));});},function(e){list.textContent=T("c.error");console.error(e);}));}
  function post(p,wasOpen){var mine=p.uid===me.uid,likes=p.likes||[],liked=likes.indexOf(me.uid)>=0,sv=saved(),isSaved=sv.indexOf(p.id)>=0;
    var card=el("article",{class:"v5p","data-id":p.id});
    var subl=(p.announce?W(Bq("অ্যাডমিন","Admin","Admin","المشرف","ایڈمن","Admin"))+" · ":"")+ago(p.createdAt)+(p.pinned?" · "+W(Bq("পিন করা","Pinned","Disemat","مثبّت","پن شدہ","Imebandikwa")):"")+(p.edited?" · "+T("c.edited"):"");
    var more=el("button",{type:"button",class:"ib","aria-label":W(Bq("আরও","More","Lagi","المزيد","مزید","Zaidi"))},svg(["M5 12h.01","M12 12h.01","M19 12h.01"],{w:"3.2"}));
    more.onclick=function(){var m=el("div",{class:"v5c-menu"});var sh=null;function it(l,f){m.appendChild(el("button",{type:"button",onclick:function(){if(sh)sh.close();f();}},l));}
      if(p.text)it(W(Bq("লেখা কপি করো","Copy text","Salin teks","نسخ النص","متن کاپی","Nakili maandishi")),function(){try{navigator.clipboard.writeText(p.text);toast("✓");}catch(e){}});
      if(isAdmin)it(p.pinned?T("c.unpin"):T("c.pin"),function(){db.collection("posts").doc(p.id).update({pinned:!p.pinned}).catch(oops);});
      if(mine||isAdmin)it(T("c.delete"),function(){if(confirm(T("c.confirmDelete")))db.collection("posts").doc(p.id).delete().catch(oops);});
      sh=sheetV4(p.name||"",m);};
    card.appendChild(el("div",{class:"ph"},avRing(p.name,p.photo,p.uid,36,p.announce||isActive(p.uid,24)?IGR:"#DBDBDB"),el("div",{class:"who"},el("b",null,p.name||"—"),el("small",null,subl)),more));
    var text=String(p.text||""),media;
    if(p.image){media=el("div",{class:"media"},el("img",{src:p.image,alt:"",loading:"lazy"}));}
    else if(text&&text.length<=220){var pal=PAL[(p.bg!=null?p.bg:hashN(p.id))%PAL.length];var lines=text.split(/\n+/);var head=lines.shift();
      if(head.length>90&&!lines.length){lines=[head];head="";}
      media=el("div",{class:"media sq",style:"background:"+pal[0]+";color:"+pal[1]},svg(p.announce?P.mosque:hashN(p.id)%2?P.book:P.heart,{s:56,w:"1.4"}),head?el("div",{class:"h"},head):null,lines.length?el("div",{class:"s"},lines.join(" · ")):null);text="";}
    if(media){card.appendChild(media);var lastTap=0;media.addEventListener("click",function(){var n=Date.now();if(n-lastTap<350&&!liked)toggleLike();lastTap=n;});}
    function toggleLike(){db.collection("posts").doc(p.id).update({likes:liked?FV.arrayRemove(me.uid):FV.arrayUnion(me.uid)}).catch(oops);}
    var cbox=el("div",{class:"v5p-cm",hidden:true});var cu=null;
    var acts=el("div",{class:"acts"},
      el("button",{type:"button",class:"ib"+(liked?" on":""),"aria-pressed":String(liked),"aria-label":W(Bq("পছন্দ","Like","Suka","إعجاب","پسند","Penda")),onclick:toggleLike},svg(P.heart,{s:26,fill:liked?"#E3304B":"none",stroke:liked?"#E3304B":"currentColor"})),
      el("button",{type:"button",class:"ib","aria-label":T("c.comment"),onclick:function(){togC();}},svg(P.cmt,{s:25})),
      el("button",{type:"button",class:"ib","aria-label":W(Bq("শেয়ার","Share","Kongsi","مشاركة","شیئر","Shiriki")),onclick:function(){var s=(p.text||"")+"\n— "+(p.name||"")+" · Amalnama";try{if(navigator.share)navigator.share({text:s});else{navigator.clipboard.writeText(s);toast("✓");}}catch(e){}}},svg(P.send,{s:24})),
      el("span",{style:"flex:1"}),
      el("button",{type:"button",class:"ib","aria-pressed":String(isSaved),"aria-label":W(Bq("সেভ","Save","Simpan","حفظ","محفوظ","Hifadhi")),onclick:function(){var a=saved(),i=a.indexOf(p.id);if(i>=0)a.splice(i,1);else a.unshift(p.id);setSaved(a.slice(0,300));
        var b=this,on=i<0;b.setAttribute("aria-pressed",String(on));b.querySelector("path").setAttribute("fill",on?"currentColor":"none");toast(on?W(Bq("সেভ হয়েছে","Saved","Disimpan","تم الحفظ","محفوظ","Imehifadhiwa")):W(Bq("সরানো হয়েছে","Removed","Dibuang","أزيل","ہٹا دیا","Imeondolewa")));}},svg(P.save,{s:24,fill:isSaved?"currentColor":"none"})));
    card.appendChild(acts);
    var cap=el("div",{class:"cap"});
    if(likes.length)cap.appendChild(el("b",{class:"lk"},num(likes.length)+" "+W(Bq("জন পছন্দ করেছে","likes","suka","إعجاب","پسند","wamependa"))));
    if(text){var long=text.length>260;var tx=el("span",{class:"tx"},long?text.slice(0,240)+"… ":text);var line=el("div",{class:"ln"},el("b",null,p.name||"—")," ",tx);
      if(long)line.appendChild(el("button",{type:"button",class:"v5c-more",onclick:function(){tx.textContent=text;this.remove();}},W(Bq("আরও","more","lagi","المزيد","مزید","zaidi"))));cap.appendChild(line);}
    cap.appendChild(el("button",{type:"button",class:"v5c-more",onclick:function(){togC();}},W(Bq("মন্তব্য দেখো ও লেখো","View & add comments","Lihat & tulis komen","عرض التعليقات","تبصرے دیکھیں","Tazama maoni"))));
    card.appendChild(cap);card.appendChild(cbox);
    function togC(){if(cbox.hidden)openC();else{cbox.hidden=true;card.removeAttribute("data-open");if(cu){cu();var j=cUnsubs.indexOf(cu);if(j>=0)cUnsubs.splice(j,1);cu=null;}}}
    function openC(){cbox.hidden=false;card.setAttribute("data-open","");cbox.innerHTML="";var cl=el("div",{class:"cl"});cbox.appendChild(cl);
      var ci=el("input",{class:"v5c-in",maxlength:"1000",placeholder:T("c.writeComment")}),cs=el("button",{class:"v5c-post",type:"button"},T("c.send"));
      function send(){var t=ci.value.trim();if(!t)return;cs.disabled=true;db.collection("posts").doc(p.id).collection("comments").add({uid:me.uid,name:myName(),photo:myPhoto(),text:t,createdAt:FV.serverTimestamp()}).then(function(){ci.value="";}).catch(oops).then(function(){cs.disabled=false;});}
      cs.onclick=send;ci.onkeydown=function(e){if(e.key==="Enter"){e.preventDefault();send();}};
      cbox.appendChild(el("div",{class:"snd"},ci,cs));
      cu=db.collection("posts").doc(p.id).collection("comments").orderBy("createdAt").limit(100).onSnapshot(function(s){cl.innerHTML="";
        s.docs.forEach(function(d){var c=d.data({serverTimestamps:"estimate"});var own=c.uid===me.uid;
          cl.appendChild(el("div",{class:"c"},av(c.photo,c.name,c.uid),el("div",{style:"min-width:0;flex:1"},el("div",null,el("b",null,c.name||"—")," ",c.text),
            el("small",null,ago(c.createdAt)," ",(own||isAdmin)?el("button",{class:"v5c-more",type:"button",onclick:function(){if(confirm(T("c.confirmDelete")))d.ref.delete().catch(oops);}},T("c.delete")):null))));});},function(){});
      cUnsubs.push(cu);}
    if(wasOpen)openC();return card;}
  // ---- new post (text card or photo)
  function shrinkImg(file){return new Promise(function(res,rej){var u=URL.createObjectURL(file),im=new Image();im.onload=function(){var mx=1080,w=im.width,h=im.height,k=Math.min(1,mx/Math.max(w,h));
      var c=document.createElement("canvas");c.width=Math.round(w*k);c.height=Math.round(h*k);c.getContext("2d").drawImage(im,0,0,c.width,c.height);URL.revokeObjectURL(u);
      var q=.8,d=c.toDataURL("image/jpeg",q);while(d.length>850000&&q>.35){q-=.1;d=c.toDataURL("image/jpeg",q);}
      if(d.length>850000){var c2=document.createElement("canvas");c2.width=Math.round(c.width*.7);c2.height=Math.round(c.height*.7);c2.getContext("2d").drawImage(c,0,0,c2.width,c2.height);d=c2.toDataURL("image/jpeg",.7);}
      res(d);};im.onerror=function(){URL.revokeObjectURL(u);rej(new Error("img"));};im.src=u;});}
  function compose(ann){var bg=0,img="";var ta=el("textarea",{class:"v5c-ta",maxlength:"3000",rows:"4",placeholder:T("c.write")});
    var prev=el("div",{class:"v5c-prev"});var fi=el("input",{type:"file",accept:"image/*",hidden:true});
    var sw=el("div",{class:"v5c-sw",role:"radiogroup","aria-label":W(Bq("কার্ডের রং","Card colour","Warna kad","لون البطاقة","کارڈ کا رنگ","Rangi ya kadi"))});
    PAL.forEach(function(c,i){sw.appendChild(el("button",{type:"button",role:"radio","aria-checked":String(i===bg),"aria-label":String(i+1),style:"background:"+c[0]+";color:"+c[1],onclick:function(){bg=i;sw.querySelectorAll("button").forEach(function(b,j){b.setAttribute("aria-checked",String(j===i));});draw();}},"Aa"));});
    function draw(){prev.innerHTML="";if(img){prev.appendChild(el("img",{src:img,alt:""}));prev.appendChild(el("button",{type:"button",class:"x","aria-label":"✕",onclick:function(){img="";draw();}},"✕"));return;}
      var t=ta.value.trim();if(t&&t.length<=220){var pal=PAL[bg],ls=t.split(/\n+/),h=ls.shift();prev.appendChild(el("div",{class:"sq",style:"background:"+pal[0]+";color:"+pal[1]},el("div",{class:"h"},h),ls.length?el("div",{class:"s"},ls.join(" · ")):null));}}
    ta.oninput=draw;
    fi.onchange=function(){var f=fi.files&&fi.files[0];if(!f)return;shrinkImg(f).then(function(d){img=d;draw();}).catch(function(){toast(T("c.error"));});fi.value="";};
    var annCb=el("input",{type:"checkbox"});if(ann===true)annCb.checked=true;
    var go=el("button",{class:"v5c-blue",type:"button"},T("c.post"));
    var bodyEl=el("div",{class:"v5c-comp"},ta,el("div",{class:"row"},el("button",{type:"button",class:"v5c-pill",onclick:function(){fi.click();}},svg(P.img,{s:18}),W(Bq("ছবি যোগ করো","Add photo","Tambah foto","أضف صورة","تصویر شامل کریں","Ongeza picha"))),sw),prev,fi,
      isAdmin?el("label",{class:"chk"},annCb,W(Bq("ঘোষণা হিসেবে পিন করো","Pin as announcement","Semat sebagai pengumuman","تثبيت كإعلان","اعلان کے طور پر پن","Bandika kama tangazo"))):null,go);
    var sh=sheetV4(W(Bq("নতুন পোস্ট","New post","Hantaran baharu","منشور جديد","نئی پوسٹ","Chapisho jipya")),bodyEl);
    go.onclick=function(){var t=ta.value.trim();if(!t&&!img){ta.focus();return;}go.disabled=true;var a=isAdmin&&annCb.checked;
      var d={uid:me.uid,name:myName(),photo:myPhoto(),text:t,createdAt:FV.serverTimestamp(),announce:a,pinned:a,likes:[],bg:bg};if(img)d.image=img;
      db.collection("posts").add(d).then(function(){if(sh)sh.close();sub="feed";if(root&&state==="in")render();toast(W(Bq("পোস্ট হয়েছে","Posted","Dihantar","تم النشر","پوسٹ ہو گئی","Imechapishwa")));})
      .catch(function(e){go.disabled=false;if(e&&e.code==="permission-denied"&&img)alert(W(Bq("ছবিসহ পোস্টের জন্য Firebase-এ নতুন Firestore rules প্রকাশ (Publish) করতে হবে।","Photo posts need the new Firestore rules to be published in Firebase.","Hantaran foto memerlukan peraturan Firestore baharu.","تحتاج منشورات الصور إلى نشر قواعد Firestore الجديدة.","تصویری پوسٹ کے لیے نئے Firestore rules شائع کریں۔","Picha zinahitaji sheria mpya za Firestore.")));else oops(e);});};}
  // ---- activity (likes on my posts)
  function activity(){var box=el("div",{class:"v5c-act"});var mineP=feedDocs.filter(function(p){return p.uid===me.uid&&(p.likes||[]).length;});
    if(!mineP.length)box.appendChild(el("p",{class:"mut"},W(Bq("এখনো কোনো নতুন অ্যাক্টিভিটি নেই","No activity yet","Tiada aktiviti lagi","لا يوجد نشاط بعد","ابھی کوئی سرگرمی نہیں","Hakuna shughuli bado"))));
    mineP.forEach(function(p){var names=(p.likes||[]).map(function(u){var pp=window.AMCHAT&&AMCHAT.profile(u);return pp&&pp.name;}).filter(Boolean);
      box.appendChild(el("div",{class:"it"},svg(P.heart,{s:20,fill:"#E3304B",stroke:"#E3304B"}),el("span",null,el("b",null,names.slice(0,3).join(", ")||num((p.likes||[]).length)),(names.length>3?" +"+num(names.length-3):"")+" "+W(Bq("তোমার পোস্ট পছন্দ করেছে","liked your post","menyukai hantaran anda","أعجبهم منشورك","نے آپ کی پوسٹ پسند کی","wamependa chapisho lako"))+": “"+String(p.text||"📷").slice(0,40)+"”")));});
    sheetV4(W(Bq("অ্যাক্টিভিটি","Activity","Aktiviti","النشاط","سرگرمی","Shughuli")),box);}
  var subUnsub=[],cUnsubs=[];
  function dropC(){cUnsubs.splice(0).forEach(function(f){try{f();}catch(e){}});}
  function renderSub(){render();}
  // ---- chat (WhatsApp style list)
  function chat(){var box=el("div",{class:"v5wa-list"});body.appendChild(box);if(window.AMCHAT&&chatOn){AMCHAT.mount(box);return;}
    box.appendChild(el("p",{class:"mut",style:"padding:20px;text-align:center"},T("q.loading")));}
  // ---- admin dashboard
  var allMembers=[];
  var profs={},postsBy={},postsAt=[];
  function watchAdmin(){unsub.push(db.collection("profiles").onSnapshot(function(s){profs={};s.docs.forEach(function(d){profs[d.id]=d.data({serverTimestamps:"estimate"});});if(sub==="admin"&&body)renderAdminLists();},function(){}));
    unsub.push(db.collection("posts").orderBy("createdAt","desc").limit(300).onSnapshot(function(s){postsBy={};postsAt=[];s.docs.forEach(function(d){var x=d.data({serverTimestamps:"estimate"}),u=x.uid;postsBy[u]=(postsBy[u]||0)+1;postsAt.push([u,ts(x.createdAt)]);});if(sub==="admin"&&body)renderAdminLists();},function(){}));
    unsub.push(db.collection("members").onSnapshot(function(s){allMembers=s.docs.map(function(d){return d.data({serverTimestamps:"estimate"});});
      var pend=allMembers.filter(function(m){return m.status==="pending";}).length;
      if(lastPending>=0&&pend>lastPending&&"Notification" in window&&Notification.permission==="granted"){try{new Notification("👥 Amalnama",{body:num(pend)+" "+T("ad.newReq"),icon:"icon-192.png",tag:"am-join"});}catch(e){}}
      lastPending=pend;setAdminBadge(pend);if(sub==="admin"&&body)renderAdminLists();},function(e){console.error(e);}));}
  function setAdminBadge(n){var tot=(n>0?n:0)+(chatUnread||0);X.badge("comm",tot);var cb=document.getElementById("cm-chattab");if(cb){var cd=cb.querySelector(".dot");if(chatUnread){if(!cd){cd=el("span",{class:"dot"});cb.appendChild(cd);}cd.textContent=num(chatUnread);}else if(cd)cd.remove();}
    var b=document.getElementById("cm-admtab");if(b){var d=b.querySelector(".dot");if(n>0){if(!d){d=el("span",{class:"dot"});b.appendChild(d);}d.textContent=num(n);}else if(d)d.remove();}}
  var admBox=null;
  function admin(){root.setAttribute("data-th","adm");document.body.classList.remove("v5-ig");
    admBox=el("div",{class:"v5adm"});body.appendChild(admBox);renderAdminLists();}
  function dayKey(d){return d?d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate():"";}
  function renderAdminLists(){if(!admBox||!admBox.isConnected)return;var a=admBox;a.innerHTML="";
    a.appendChild(el("div",{class:"top"},el("button",{type:"button",class:"v5sq","aria-label":W(Bq("ফিরে যাও","Back","Kembali","رجوع","واپس","Rudi")),onclick:function(){sub="feed";render();}},svg(L==="ar"||L==="ur"?"M9 6l6 6-6 6":"M15 6l-6 6 6 6",{s:20,w:"2.2"})),
      el("div",{style:"flex:1"},el("h1",null,W(Bq("অ্যাডমিন ড্যাশবোর্ড","Admin dashboard","Papan pemuka admin","لوحة المشرف","ایڈمن ڈیش بورڈ","Dashibodi ya admin"))),el("small",null,W(Bq("শুধু ","Only ","Hanya ","فقط ","صرف ","Pekee "))+ADMINS[0])),
      el("span",{class:"badge"},svg(P.shield,{s:22}))));
    var ap=allMembers.filter(function(m){return m.status==="approved";}),pend=allMembers.filter(function(m){return m.status==="pending";}).sort(function(x,y){return (ts(y.requestedAt)||0)-(ts(x.requestedAt)||0);}),blk=allMembers.filter(function(m){return m.status==="blocked";});
    var today=dayKey(new Date());var activeToday=Object.keys(profs).filter(function(u){return dayKey(ts(profs[u].lastSeen))===today;}).length;
    var wk=Date.now()-7*864e5,wkPosts=postsAt.filter(function(x){return x[1]&&x[1].getTime()>wk;}).length;
    var st=el("div",{class:"stats"});
    [[ap.length+1,Bq("মোট সদস্য","Members","Ahli","الأعضاء","اراکین","Wanachama"),"#F4DFA6","rgba(226,194,122,.3)"],[activeToday,Bq("আজ সক্রিয়","Active today","Aktif hari ini","نشطون اليوم","آج فعال","Hai leo"),"#9FE3CF",""],
     [pend.length,Bq("অপেক্ষমাণ আবেদন","Pending requests","Permohonan","طلبات معلقة","زیر التوا درخواستیں","Maombi yanayosubiri"),"#E8A08C",pend.length?"rgba(232,160,140,.45)":""],[wkPosts,Bq("এই সপ্তাহে পোস্ট","Posts this week","Hantaran minggu ini","منشورات الأسبوع","اس ہفتے پوسٹس","Machapisho wiki hii"),"#F3EEDF",""]].forEach(function(x){
      st.appendChild(el("div",{style:x[3]?"border-color:"+x[3]:""},el("b",{style:"color:"+x[2]},num(x[0])),el("span",null,W(x[1]))));});
    a.appendChild(st);
    // last 7 days: members seen or posting each day
    var days=[];for(var i=6;i>=0;i--){var d=new Date(Date.now()-i*864e5);days.push({k:dayKey(d),d:d,u:{}});}
    Object.keys(profs).forEach(function(u){var k=dayKey(ts(profs[u].lastSeen));days.forEach(function(x){if(x.k===k)x.u[u]=1;});});
    postsAt.forEach(function(p){var k=dayKey(p[1]);days.forEach(function(x){if(x.k===k)x.u[p[0]]=1;});});
    var mx=Math.max.apply(null,days.map(function(x){return Object.keys(x.u).length;}).concat([1]));
    var bars=el("div",{class:"bars"});var wdf;try{wdf=new Intl.DateTimeFormat(L==="bn"?"bn-BD":L,{weekday:"narrow"});}catch(e){}
    days.forEach(function(x,i){var n=Object.keys(x.u).length;bars.appendChild(el("div",{title:num(n)},el("i",{style:"height:"+Math.max(4,Math.round(n/mx*80))+"px;background:"+(i===6?"#E2C27A":"#3FB59B")}),el("span",null,wdf?wdf.format(x.d):"")));});
    a.appendChild(el("section",{class:"box"},el("div",{class:"bh"},el("h2",null,W(Bq("গত ৭ দিনে সক্রিয় সদস্য","Active members · last 7 days","Ahli aktif · 7 hari","الأعضاء النشطون · ٧ أيام","فعال اراکین · ٧ دن","Wanachama hai · siku 7"))),el("small",null,W(Bq("পোস্ট ও শেষ দেখা","posts & last seen","hantaran & terakhir dilihat","المنشورات وآخر ظهور","پوسٹس اور آخری بار","machapisho na mwisho kuonekana")))),bars));
    // pending
    a.appendChild(el("h2",{class:"sh"},W(Bq("যোগ দেওয়ার আবেদন","Join requests","Permohonan menyertai","طلبات الانضمام","شمولیت کی درخواستیں","Maombi ya kujiunga"))," ",el("span",{style:"color:#E8A08C"},"("+num(pend.length)+")")));
    if(!pend.length)a.appendChild(el("div",{class:"none"},T("ad.noPending")));
    pend.forEach(function(m){var ref=db.collection("members").doc(m.uid);
      a.appendChild(el("div",{class:"req"},el("div",{class:"r1"},av(m.photo,m.name),el("div",{style:"flex:1;min-width:0"},el("b",null,m.name||"—"),el("small",null,[m.country,m.lang,ago(m.requestedAt)].filter(Boolean).join(" · ")),el("small",null,m.email||""))),
        m.intro?el("div",{class:"intro"},"“"+m.intro+"”"):null,
        el("div",{class:"r2"},el("button",{type:"button",class:"ok",onclick:function(){ref.update({status:"approved",approvedAt:FV.serverTimestamp(),approvedBy:me.email}).then(function(){toast((m.name||"")+" — "+W(Bq("অনুমতি দেওয়া হলো","approved","diluluskan","تمت الموافقة","منظور","amekubaliwa")));}).catch(oops);}},W(Bq("অনুমতি দাও","Approve","Luluskan","موافقة","منظور کریں","Kubali"))),
          el("button",{type:"button",class:"no",onclick:function(){ref.delete().then(function(){toast((m.name||"")+" — "+W(Bq("আবেদন বাতিল","request declined","ditolak","رُفض الطلب","مسترد","limekataliwa")));}).catch(oops);}},W(Bq("বাতিল","Decline","Tolak","رفض","مسترد","Kataa")))),
        el("button",{type:"button",class:"blk",onclick:function(){if(confirm(T("ad.block")+": "+m.name+"?"))ref.update({status:"blocked"}).catch(oops);}},T("ad.block"))));});
    // members + activity
    a.appendChild(el("h2",{class:"sh"},W(Bq("সদস্য ও তাদের অ্যাক্টিভিটি","Members & activity","Ahli & aktiviti","الأعضاء ونشاطهم","اراکین اور سرگرمی","Wanachama na shughuli"))));
    var ml=el("div",{class:"mem"});a.appendChild(ml);
    ap.slice().sort(function(x,y){return (ts(profs[y.uid]&&profs[y.uid].lastSeen)||0)-(ts(profs[x.uid]&&profs[x.uid].lastSeen)||0);}).forEach(function(m){var pf=profs[m.uid],ls=pf&&ts(pf.lastSeen),on=ls&&Date.now()-ls.getTime()<4*60000,act=ls&&Date.now()-ls.getTime()<3*864e5;
      var ref=db.collection("members").doc(m.uid),pref=db.collection("profiles").doc(m.uid);
      var row=el("div",{class:"m"},el("span",{class:"av"},av(m.photo||(pf&&pf.photo),m.name),el("i",{style:"background:"+(on?"#3FB59B":"#6E8C86")})),
        el("div",{style:"flex:1;min-width:0"},el("b",null,(pf&&pf.name)||m.name||"—"),el("small",null,(on?T("c.justNow")+" · "+W(Bq("অনলাইন","online","dalam talian","متصل","آن لائن","mtandaoni")):ls?W(Bq("শেষ দেখা ","last seen ","dilihat ","آخر ظهور ","آخری بار ","alionekana "))+ago(ls):"—")+" · "+num(postsBy[m.uid]||0)+" "+W(Bq("পোস্ট","posts","hantaran","منشورات","پوسٹس","machapisho")))),
        el("span",{class:"tag",style:"color:"+(act?"#9FE3CF":"#A9C3BC")},act?W(Bq("সক্রিয়","Active","Aktif","نشط","فعال","Hai")):W(Bq("নিষ্ক্রিয়","Inactive","Tidak aktif","غير نشط","غیر فعال","Si hai"))),
        el("button",{type:"button",class:"dots","aria-label":W(Bq("আরও","More","Lagi","المزيد","مزید","Zaidi")),onclick:function(){var mm=el("div",{class:"v5c-menu"});var sh=null;function it(l,f){mm.appendChild(el("button",{type:"button",onclick:function(){if(sh)sh.close();f();}},l));}
          it(T("ad.block"),function(){if(confirm(T("ad.block")+": "+m.name+"?")){pref.delete().catch(function(){});ref.update({status:"blocked"}).catch(oops);}});
          it(T("ad.remove"),function(){if(confirm(T("ad.remove")+": "+m.name+"?")){pref.delete().catch(function(){});ref.delete().catch(oops);}});
          sh=sheetV4(m.name+" · "+(m.email||""),mm);}},svg(["M5 12h.01","M12 12h.01","M19 12h.01"],{w:"3.2",s:20})));
      ml.appendChild(row);});
    if(!ap.length)ml.appendChild(el("div",{class:"none"},"—"));
    if(blk.length){var bl=el("details",{class:"blkd"},el("summary",null,T("ad.blocked")+" ("+num(blk.length)+")"));blk.forEach(function(m){var ref=db.collection("members").doc(m.uid);
      bl.appendChild(el("div",{class:"m"},av(m.photo,m.name),el("div",{style:"flex:1"},el("b",null,m.name||"—"),el("small",null,m.email||"")),el("button",{type:"button",class:"no",onclick:function(){ref.update({status:"approved"}).catch(oops);}},T("ad.unblock"))));});a.appendChild(bl);}
    // actions
    var locked=!!cfg.chatLocked;
    a.appendChild(el("div",{class:"acts"},el("button",{type:"button",class:"ann",onclick:function(){compose(true);}},W(Bq("ঘোষণা পোস্ট","Post announcement","Hantar pengumuman","نشر إعلان","اعلان پوسٹ","Chapisha tangazo"))),
      el("button",{type:"button",class:"lock"+(locked?" on":""),"aria-pressed":String(locked),onclick:function(){db.collection("config").doc("community").set({chatLocked:!locked,updatedAt:FV.serverTimestamp()},{merge:true}).then(function(){cfg.chatLocked=!locked;renderAdminLists();}).catch(oops);}},
        locked?W(Bq("গ্রুপ চ্যাট বন্ধ","Group chat closed","Sembang kumpulan ditutup","الدردشة الجماعية مغلقة","گروپ چیٹ بند","Gumzo la kikundi limefungwa")):W(Bq("গ্রুপ চ্যাট খোলা","Group chat open","Sembang kumpulan dibuka","الدردشة الجماعية مفتوحة","گروپ چیٹ کھلی","Gumzo la kikundi wazi")))));
    var wl=el("textarea",{class:"v5c-ta dk",maxlength:"1000",rows:"3",placeholder:T("ad.welcome")});wl.value=cfg.welcome||"";
    var sv=el("button",{type:"button",class:"ann",onclick:function(){sv.disabled=true;db.collection("config").doc("community").set({welcome:wl.value.trim(),updatedAt:FV.serverTimestamp()},{merge:true}).then(function(){toast("✓ "+T("ad.saved"));}).catch(oops).then(function(){sv.disabled=false;});}},T("ad.save"));
    var clr=el("button",{type:"button",class:"no",onclick:function(){if(!confirm(T("ad.clearChat")+"?"))return;clr.disabled=true;db.collection("messages").limit(400).get().then(function(s){var b=db.batch();s.docs.forEach(function(d){b.delete(d.ref);});return b.commit();}).catch(oops).then(function(){clr.disabled=false;toast("✓");});}},T("ad.clearChat"));
    a.appendChild(el("details",{class:"blkd"},el("summary",null,W(Bq("আরও সেটিংস","More settings","Tetapan lain","إعدادات أخرى","مزید ترتیبات","Mipangilio zaidi"))),el("label",{class:"v5lab"},T("ad.welcome"),wl),el("div",{class:"acts"},sv,clr)));}
  function drawStats(){}
  X.register("comm",{open:function(r){root=r;if(!fb){render();init().catch(function(e){state="err";render(e);});}else render();}});
  // returning users: connect quietly so admins see new join requests on the tab badge
  try{if(localStorage.getItem("am-comm")==="1")setTimeout(function(){root=root||document.getElementById("v-comm");init().catch(function(){});},4000);}catch(e){}
})();
