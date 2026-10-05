/* Amalnama · languages (bn, en, ms, ar, ur, sw). Loaded in <head>. */
(function(){
  var LANGS={bn:{n:"বাংলা",f:"Bangla"},en:{n:"English",f:"English"},ms:{n:"Bahasa Melayu",f:"Malay"},ar:{n:"العربية",f:"Arabic",rtl:1},ur:{n:"اردو",f:"Urdu",rtl:1},sw:{n:"Kiswahili",f:"Swahili"}};
  var BN_KEYS={"tab.quran":"কুরআন","tab.azan":"আজান","tab.community":"কমিউনিটি","tab.more":"আরও","lang.title":"ভাষা","lang.pick":"তোমার ভাষা বেছে নাও","q.title":"আল-কুরআন","q.search":"সূরা খোঁজো (নাম বা নম্বর)","q.ayahs":"আয়াত","q.meccan":"মাক্কী","q.medinan":"মাদানী","q.back":"সব সূরা","q.playAll":"পুরো সূরা শোনো","q.pause":"থামাও","q.stop":"বন্ধ করো","q.play":"শোনো","q.showTr":"অনুবাদ দেখাও","q.fontSize":"আরবি লেখার আকার","q.reciter":"ক্বারী: মিশারি রাশিদ আল-আফাসি","q.loading":"লোড হচ্ছে…","q.error":"লোড করা যায়নি। ইন্টারনেট দেখে আবার চেষ্টা করো।","q.retry":"আবার চেষ্টা করো","q.continue":"যেখানে ছিলে সেখান থেকে পড়ো","q.ayah":"আয়াত","q.autoNext":"পরের আয়াত নিজে থেকে চালাও","q.bookmark":"বুকমার্ক","q.bookmarked":"বুকমার্ক করা হয়েছে","q.source":"লেখা ও অনুবাদ: AlQuran.cloud · অডিও: Islamic Network CDN","a.title":"আজান ও সালাতের সময়","a.enable":"সালাতের সময় আজান বাজাও","a.notify":"সাথে নোটিফিকেশনও দেখাও","a.test":"আজান শুনে দেখো","a.stop":"আজান বন্ধ করো","a.volume":"ভলিউম","a.next":"পরের সালাত","a.in":"বাকি","a.auto":"আমার শহর থেকে সালাতের সময় নিজে থেকে নাও","a.city":"শহর","a.country":"দেশ","a.method":"হিসাবের পদ্ধতি","a.fetch":"সালাতের সময় আনো","a.useLocation":"আমার লোকেশন ব্যবহার করো","a.saved":"সালাতের সময় সেভ হয়েছে","a.fromRoutine":"তোমার রুটিনের সময় ব্যবহার হচ্ছে","a.fromApi":"সময় হিসাব করা হয়েছে:","a.applyRoutine":"আমার রুটিন আর Google Calendar-ও আপডেট করো","a.note":"Amalnama খোলা থাকলে আজান বাজবে (ল্যাপটপে ব্যাকগ্রাউন্ডেও)। অ্যাপ পুরো বন্ধ থাকলে Google Calendar-এর রিমাইন্ডার তোমাকে জানাবে।","a.tapToAllow":"শব্দ চালু করতে একবার চাপো","a.itsTime":"এখন সময়:","a.credit":"আজানের অডিও: Wikimedia Commons (CC0)","p.fajr":"ফজর","p.sunrise":"সূর্যোদয়","p.dhuhr":"যোহর","p.asr":"আসর","p.maghrib":"মাগরিব","p.isha":"ইশা","c.title":"Amalnama কমিউনিটি","c.intro":"Amalnama ব্যবহারকারীদের একটা প্রাইভেট জায়গা: শেয়ার করা, একে অপরকে উৎসাহ দেওয়া আর চ্যাট। অ্যাডমিন অনুমতি দিলে নতুন সদস্য যুক্ত হয়।","c.signin":"Google দিয়ে সাইন ইন করো","c.signout":"সাইন আউট","c.request":"যোগ দেওয়ার অনুরোধ পাঠাও","c.name":"তোমার নাম","c.country":"দেশ (ঐচ্ছিক)","c.introField":"তোমার সম্পর্কে এক লাইন (ঐচ্ছিক)","c.pending":"তোমার অনুরোধ পাঠানো হয়েছে। অ্যাডমিন অনুমতি দিলেই ঢুকতে পারবে।","c.blocked":"তুমি কমিউনিটিতে ঢুকতে পারবে না। ভুল মনে হলে অ্যাডমিনের সাথে যোগাযোগ করো।","c.cancelReq":"অনুরোধ বাতিল করো","c.feed":"পোস্ট","c.chat":"চ্যাট","c.admin":"অ্যাডমিন","c.write":"ভালো কিছু শেয়ার করো…","c.post":"পোস্ট করো","c.send":"পাঠাও","c.typeMsg":"মেসেজ লেখো…","c.like":"লাইক","c.comment":"মন্তব্য","c.comments":"মন্তব্য","c.writeComment":"মন্তব্য লেখো…","c.delete":"মুছে ফেলো","c.confirmDelete":"এটা মুছে ফেলবে?","c.empty":"এখনো কোনো পোস্ট নেই। প্রথম পোস্টটা তুমি দাও!","c.emptyChat":"এখনো কোনো মেসেজ নেই। সালাম দিয়ে শুরু করো!","c.announce":"ঘোষণা","c.asAnnounce":"ঘোষণা হিসেবে পোস্ট করো (উপরে থাকবে)","c.pinned":"পিন করা","c.pin":"পিন করো","c.unpin":"পিন সরাও","c.edited":"সম্পাদিত","c.justNow":"এইমাত্র","c.minAgo":"মিনিট আগে","c.hrAgo":"ঘণ্টা আগে","c.dayAgo":"দিন আগে","c.error":"কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করো।","c.popupBlocked":"সাইন-ইন উইন্ডো আটকে গেছে। পপ-আপ চালু করে আবার চেষ্টা করো।","c.guidelines":"ভদ্র ও সম্মানজনক থাকো। স্প্যাম বা অন্যের ব্যক্তিগত তথ্য দিও না।","c.signedAs":"সাইন ইন করা আছে:","ad.title":"অ্যাডমিন প্যানেল","ad.pending":"যোগ দেওয়ার অনুরোধ","ad.members":"সদস্য","ad.blocked":"ব্লক করা","ad.approve":"অনুমতি দাও","ad.reject":"বাতিল করো","ad.block":"ব্লক করো","ad.unblock":"আনব্লক করো","ad.remove":"সরিয়ে দাও","ad.noPending":"কোনো অপেক্ষমাণ অনুরোধ নেই","ad.stats":"এক নজরে","ad.totalMembers":"অনুমোদিত সদস্য","ad.totalPosts":"পোস্ট","ad.totalMsgs":"চ্যাট মেসেজ","ad.welcome":"স্বাগত বার্তা (যোগ দেওয়ার পেজে দেখাবে)","ad.save":"সেভ করো","ad.saved":"সেভ হয়েছে","ad.requested":"অনুরোধের সময়","ad.clearChat":"সব চ্যাট মেসেজ মুছে ফেলো","ad.newReq":"টা নতুন যোগ দেওয়ার অনুরোধ","ad.chatLocked":"চ্যাট লক করো (শুধু অ্যাডমিন মেসেজ দিতে পারবে)","ad.chatIsLocked":"অ্যাডমিন চ্যাট লক করে রেখেছে"};
  var L="bn",chosen=false;
  try{var s=localStorage.getItem("am-lang");if(s&&LANGS[s]){L=s;chosen=true;}}catch(e){}
  if(!chosen){var nl=(navigator.languages||[navigator.language||""]).map(function(x){return String(x).slice(0,2).toLowerCase();});
    for(var i=0;i<nl.length;i++){if(nl[i]==="id"){L="ms";break;}if(LANGS[nl[i]]&&nl[i]!=="en"){L=nl[i];break;}}}
  window.AM_LANGS=LANGS;window.AM_LANG=L;window.AM_LANG_CHOSEN=chosen;
  window.AM_DICT=window.AM_DICT||{};
  var root=document.documentElement;root.lang=L;if(LANGS[L].rtl)root.dir="rtl";
  if(L!=="bn"){root.classList.add("i18n-pending");document.write('<script src="lang-'+L+'.js?v=1"><\/script>');}
  window.AM_T=function(k){var d=window.AM_DICT[L];return (d&&d.keys&&d.keys[k])||(L==="bn"?BN_KEYS[k]:null)||(window.AM_DICT.en&&window.AM_DICT.en.keys[k])||BN_KEYS[k]||k;};
  window.AM_setLang=function(l){try{localStorage.setItem("am-lang",l);}catch(e){}location.reload();};

  // ---- translator (Bangla UI -> chosen language)
  var RE=null,UI=null;
  function build(){var d=window.AM_DICT[L];if(!d)return false;UI=d.ui;
    var ks=Object.keys(UI).filter(function(k){return k.length>=2;}).sort(function(a,b){return b.length-a.length;});
    RE=new RegExp(ks.map(function(k){return k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");}).join("|"),"g");return true;}
  // a Bangla letter (not a digit) — dictionary words are only swapped when they stand alone, never inside another word
  var BL=/[\u0980-\u09E5\u09F0-\u09FF]/;
  var BD=/[০-৯]/g;
  function tr(s){if(!s||!/[ঀ-৿]/.test(s))return s;
    var t=s.trim();if(UI[t]!=null)s=s.replace(t,UI[t]);else s=s.replace(RE,function(m,o,str){var b=str.charAt(o-1),a=str.charAt(o+m.length);if((b&&BL.test(b)&&BL.test(m.charAt(0)))||(a&&BL.test(a)&&BL.test(m.charAt(m.length-1))))return m;return UI[m];});
    return s.replace(BD,function(d){return "০১২৩৪৫৬৭৮৯".indexOf(d);}).replace(/।/g,L==="ur"?"۔":".");}
  window.AM_tr=function(s){return (L==="bn"||!UI)?s:tr(String(s));};
  function skip(el){for(var e=el;e&&e!==document.body;e=e.parentNode){if(e.nodeType===1&&(e.hasAttribute("data-noi18n")||/^(SCRIPT|STYLE|TEXTAREA)$/.test(e.tagName)||e.isContentEditable))return true;}return false;}
  var ATTR=["placeholder","title","aria-label"];
  function doEl(el){ATTR.forEach(function(a){var v=el.getAttribute&&el.getAttribute(a);if(v&&/[ঀ-৿]/.test(v)){var n=tr(v);if(n!==v)el.setAttribute(a,n);}});
    if(el.tagName==="INPUT"&&(el.type==="button"||el.type==="submit")&&/[ঀ-৿]/.test(el.value))el.value=tr(el.value);}
  function walk(node){if(node.nodeType===3){if(!skip(node.parentNode)){var v=node.nodeValue,n=tr(v);if(n!==v)node.nodeValue=n;}return;}
    if(node.nodeType!==1||skip(node))return;doEl(node);
    var w=document.createTreeWalker(node,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,{acceptNode:function(x){if(x.nodeType===1){if(x.hasAttribute("data-noi18n")||/^(SCRIPT|STYLE|TEXTAREA)$/.test(x.tagName))return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT;}return NodeFilter.FILTER_ACCEPT;}});
    var x;while((x=w.nextNode())){if(x.nodeType===3){var v2=x.nodeValue;if(/[ঀ-৿]/.test(v2)){var n2=tr(v2);if(n2!==v2)x.nodeValue=n2;}}else doEl(x);}}
  function start(){
    if(L==="bn"||!build()){root.classList.remove("i18n-pending");return;}
    // dates in the chosen language
    try{var loc={en:"en-GB",ms:"ms-MY",ar:"ar-SA-u-nu-latn",ur:"ur-PK-u-nu-latn",sw:"sw-TZ"}[L];
      window.hijri=function(s){try{var p=s.split("-").map(Number);return new Intl.DateTimeFormat(loc+(loc.indexOf("-u-")>0?"-ca-islamic-umalqura":"-u-ca-islamic-umalqura"),{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(Date.UTC(p[0],p[1]-1,p[2])));}catch(e){return "";}};}catch(e){}
    ["alert","confirm","prompt"].forEach(function(f){var o=window[f];window[f]=function(m){var a=[].slice.call(arguments);a[0]=window.AM_tr(m);return o.apply(window,a);};});
    document.title=tr(document.title);
    try{var hs=document.querySelector("#dates .hj");if(hs&&typeof TODAY!=="undefined")hs.textContent=window.hijri(TODAY);}catch(e){}
    walk(document.body);
    new MutationObserver(function(ms){ms.forEach(function(m){if(m.type==="characterData")walk(m.target);else if(m.type==="attributes")doEl(m.target);else m.addedNodes.forEach(walk);});})
      .observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:ATTR});
    root.classList.remove("i18n-pending");
    // re-render dates once with the new hijri()
    try{if(typeof renderToday==="function")renderToday();}catch(e){}
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
  setTimeout(function(){root.classList.remove("i18n-pending");},2500);

  // ---- language picker
  function picker(first){
    var old=document.getElementById("langdlg");if(old)old.remove();
    var d=document.createElement("div");d.id="langdlg";d.setAttribute("data-noi18n","");
    d.innerHTML='<div class="lp-card" role="dialog" aria-modal="true"><div class="lp-ic">🌐</div><h2></h2><div class="lp-list"></div>'+(first?'':'<button class="lp-x" type="button">✕</button>')+'</div>';
    d.querySelector("h2").textContent=first?"Choose your language · ভাষা বেছে নাও":window.AM_T("lang.pick");
    var list=d.querySelector(".lp-list");
    Object.keys(LANGS).forEach(function(k){var b=document.createElement("button");b.type="button";b.className="lp-b"+(k===L?" on":"");
      b.innerHTML='<b></b><small></small>';b.querySelector("b").textContent=LANGS[k].n;b.querySelector("small").textContent=LANGS[k].f;
      if(LANGS[k].rtl)b.querySelector("b").dir="rtl";
      b.onclick=function(){if(k===L&&!first){d.remove();return;}if(k===L){try{localStorage.setItem("am-lang",k);}catch(e){}d.remove();return;}window.AM_setLang(k);};list.appendChild(b);});
    var x=d.querySelector(".lp-x");if(x)x.onclick=function(){d.remove();};
    d.addEventListener("click",function(e){if(e.target===d&&!first)d.remove();});
    document.body.appendChild(d);}
  window.AM_langPicker=picker;
  function addBtn(){var h=document.querySelector("header.hero");if(!h||document.getElementById("langbtn"))return;
    var b=document.createElement("button");b.id="langbtn";b.type="button";b.setAttribute("data-noi18n","");b.setAttribute("aria-label","Language");
    b.textContent="🌐 "+(L==="bn"?"বাংলা":L.toUpperCase());b.onclick=function(){picker(false);};h.appendChild(b);
    if(!chosen)picker(true);}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",addBtn);else addBtn();

  var css=document.createElement("style");
  css.textContent='html.i18n-pending body{visibility:hidden}'+
  'header.hero{position:relative}#langbtn{position:absolute;top:10px;inset-inline-end:10px;z-index:3;border:1px solid rgba(233,205,140,.55);background:rgba(6,26,29,.55);color:#f3dc9c;border-radius:99px;padding:5px 11px;font:inherit;font-size:.78rem;font-weight:600;cursor:pointer;backdrop-filter:blur(4px)}'+
  '#langdlg{position:fixed;inset:0;z-index:200;background:rgba(3,14,16,.72);display:flex;align-items:center;justify-content:center;padding:16px}'+
  '#langdlg .lp-card{position:relative;background:var(--surface,#0f2a2e);color:var(--ink,#fbf6ea);border:1px solid var(--gold,#c9a24f);border-radius:20px;padding:22px 18px 18px;width:100%;max-width:380px;box-shadow:0 20px 60px rgba(0,0,0,.5);text-align:center}'+
  '#langdlg .lp-ic{font-size:2rem}#langdlg h2{font-size:1.05rem;margin:6px 0 14px}#langdlg .lp-list{display:grid;grid-template-columns:1fr 1fr;gap:10px}'+
  '#langdlg .lp-b{display:flex;flex-direction:column;align-items:center;gap:2px;padding:12px 8px;border-radius:14px;border:1px solid var(--line,#2c4b4f);background:var(--bg,transparent);color:inherit;font:inherit;cursor:pointer}'+
  '#langdlg .lp-b b{font-size:1.05rem}#langdlg .lp-b small{opacity:.7;font-size:.75rem}#langdlg .lp-b.on{border-color:var(--gold,#c9a24f);background:var(--gold-soft,rgba(201,162,79,.15))}'+
  '#langdlg .lp-x{position:absolute;top:8px;inset-inline-end:10px;border:0;background:none;color:inherit;font-size:1.1rem;cursor:pointer}'+
  'html[dir=rtl] body{font-family:"Noto Naskh Arabic","Noto Nastaliq Urdu",var(--font,system-ui),sans-serif}html[lang=ur] body{font-family:"Noto Nastaliq Urdu","Noto Naskh Arabic",system-ui,sans-serif;line-height:1.9}'+
  'html[dir=rtl] input[type=time],html[dir=rtl] input[type=date],html[dir=rtl] input[inputmode=numeric]{direction:ltr;text-align:right}';
  (document.head||root).appendChild(css);
  if(LANGS[L].rtl){var fl=document.createElement("link");fl.rel="stylesheet";fl.href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap";(document.head||root).appendChild(fl);}
})();
