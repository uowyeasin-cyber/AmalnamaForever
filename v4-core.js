/* Amalnama v4 · core: theme, splash, premium nav, live Mufti button, spaces, hero, Today's note, screen time */
(function(){
  var X=window.AMX;if(!X)return;
  var L=X.LANG||"bn",LI={bn:0,en:1,ms:2,ar:3,ur:4,sw:5}[L];if(LI==null)LI=1;
  var RTL=(L==="ar"||L==="ur");
  function t(a){if(!Array.isArray(a))return a;return a[LI]!=null&&a[LI]!==""?a[LI]:(a[1]||a[0]);}
  var BN="০১২৩৪৫৬৭৮৯",AR="٠١٢٣٤٥٦٧٨٩";
  function num(n){n=String(n);if(L==="bn")return n.replace(/\d/g,function(d){return BN[d];});if(L==="ar")return n.replace(/\d/g,function(d){return AR[d];});return n;}
  var SVGNS="http://www.w3.org/2000/svg";
  function el(tag,attrs){var e=document.createElement(tag);setA(e,attrs);for(var i=2;i<arguments.length;i++)add(e,arguments[i]);return e;}
  function sv(tag,attrs){var e=document.createElementNS(SVGNS,tag);if(attrs)for(var k in attrs){if(attrs[k]!=null)e.setAttribute(k,attrs[k]);}for(var i=2;i<arguments.length;i++)add(e,arguments[i]);return e;}
  function setA(e,attrs){if(!attrs)return;for(var k in attrs){var v=attrs[k];if(v==null||v===false)continue;
    if(k==="text")e.textContent=v;else if(k==="class")e.className=v;else if(k.slice(0,2)==="on")e.addEventListener(k.slice(2),v);else e.setAttribute(k,v===true?"":v);}}
  function add(e,c){if(c==null||c===false)return;if(Array.isArray(c)){c.forEach(function(x){add(e,x);});return;}e.appendChild(typeof c==="string"||typeof c==="number"?document.createTextNode(String(c)):c);}
  // icon from path list: [d, filled?]
  function icon(paths,size){var s=sv("svg",{viewBox:"0 0 24 24",width:size||24,height:size||24,fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"});
    paths.forEach(function(p){var o={d:p[0]};if(p[1])o.fill="currentColor",o["fill-opacity"]=p[1];s.appendChild(sv("path",o));});return s;}
  var I={
    today:[["M6.5 18.5a5.5 5.5 0 0 1 11 0z",".22"],["M2.5 18.5h19M12 3.5v3M4.6 8.2l2.1 2.1M19.4 8.2l-2.1 2.1M8 21.5h8"]],
    amal:[["M12 8.5C10 7 7 6.4 3.5 6.8v9.4c3.5-.4 6.5.2 8.5 1.7 2-1.5 5-2.1 8.5-1.7V6.8C17 6.4 14 7 12 8.5z",".2"],["M12 8.5v9.4M5 18.8l7 3 7-3"],["M12 1.8l.8 1.7 1.8.2-1.3 1.2.4 1.8-1.7-.9-1.7.9.4-1.8-1.3-1.2 1.8-.2z","1"]],
    shariah:[["M2 13.5h5a2.5 2.5 0 0 1-5 0zM17 13.5h5a2.5 2.5 0 0 1-5 0z",".25"],["M12 4.5v15.5M8 20h8M4.5 7h15M2 13.5l2.5-6.5 2.5 6.5M17 13.5l2.5-6.5 2.5 6.5"]],
    finance:[["M2.8 6.5h18.4v13H2.8z",".18"],["M6.5 6.5l8.5-3.3 1.6 3.3"],["M14.5 11h6.7v4.6h-6.7z",".35"]],
    comm:[["M3 6.5a2.5 2.5 0 0 1 2.5-2.5h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z",".18"],["M10 9v6l5-3z","1"]],
    more:[["M4 4h6.5v6.5H4zM13.5 13.5H20V20h-6.5z",".22"],["M13.5 4H20v6.5h-6.5zM4 13.5h6.5V20H4z"]],
    back:[[RTL?"M9 6l6 6-6 6":"M15 6l-6 6 6 6"]],
    plus:[["M12 5v14M5 12h14"]],
    bell:[["M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z",".18"],["M10 20.5a2.2 2.2 0 0 0 4 0"]],
    book:[["M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z",".18"],["M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5"]],
    hadith:[["M5 3.5h10l4 4v13H5z",".18"],["M15 3.5v4h4M8.5 12h7M8.5 15.5h7M8.5 8.5h3"]],
    mosque:[["M12 3c2.6 1.7 4.5 3.6 4.5 6.5h-9C7.5 6.6 9.4 4.7 12 3z",".25"],["M5 21V12h14v9M3 21h18M10 21v-4a2 2 0 0 1 4 0v4M3.5 12V7M20.5 12V7"]],
    hands:[["M7 21v-6.5L4.5 9.8a1.6 1.6 0 0 1 2.7-1.6L10 12V4.8a1.5 1.5 0 0 1 3 0V12",".15"],["M17 21v-6.5l2.5-4.7a1.6 1.6 0 0 0-2.7-1.6L14 12"]],
    scale:I_scale(),
    calc:[["M5 3h14v18H5z",".15"],["M8 7h8M8 11h2M12 11h2M16 11v6M8 14h2M12 14h2M8 17h2M12 17h2"]],
    moon:[["M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z",".22"]],
    timer:[["M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z",".15"],["M12 9v4l2.5 2M9.5 2.5h5"]],
    play:[["M8 5.5v13l11-6.5z","1"]],
    pause:[["M7 5h3.5v14H7zM13.5 5H17v14h-3.5z","1"]],
    next:[["M6 6v12l9-6z","1"],["M17 6v12"]],
    prev:[["M18 6v12L9 12z","1"],["M7 6v12"]],
    video:[["M3 6h13v12H3z",".18"],["M16 10l5-3v10l-5-3"]],
    gear:[["M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z",".2"],["M19.4 13.5l1.6 1.2-2 3.4-1.9-.6a7.6 7.6 0 0 1-1.7 1l-.4 2H11l-.4-2a7.6 7.6 0 0 1-1.7-1l-1.9.6-2-3.4 1.6-1.2a7.4 7.4 0 0 1 0-2L5 10.3l2-3.4 1.9.6c.5-.4 1.1-.8 1.7-1l.4-2h4l.4 2c.6.2 1.2.6 1.7 1l1.9-.6 2 3.4-1.6 1.2a7.4 7.4 0 0 1 0 2z"]],
    cloud:[["M7 18.5a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.4 1.8A3.6 3.6 0 0 1 17.5 18.5z",".18"],["M12 11v6M9.5 14.5L12 17l2.5-2.5"]],
    chat:[["M4 5h16v11H9l-5 4z",".18"]],
    info:[["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",".15"],["M12 11v5.5M12 7.6v.1"]],
    globe:[["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",".15"],["M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"]],
    shield:[["M12 3l7.5 3v6c0 4.6-3.1 8-7.5 9-4.4-1-7.5-4.4-7.5-9V6z",".18"],["M9 12l2 2 4-4"]],
    star:[["M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z",".2"]],
    bookmark:[["M6.5 4h11v16.5L12 16.8l-5.5 3.7z",".18"]],
    send:[["M4 12l16-8-6 16-2.5-6.5z",".2"]],
    refresh:[["M20 11a8 8 0 0 0-14.5-4.6L4 8M4 4v4h4M4 13a8 8 0 0 0 14.5 4.6L20 16M20 20v-4h-4"]],
    phone:[["M7 2.5h10v19H7z",".15"],["M10.5 18.5h3"]],
    feedback:[["M4 5h16v11H9l-5 4z",".18"],["M8.5 9.5h7M8.5 12.5h4"]],
    install:[["M12 3v12M7.5 10.5L12 15l4.5-4.5"],["M4 17v3h16v-3",".15"]],
    users:[["M9 4.6a3.4 3.4 0 1 1 0 6.8 3.4 3.4 0 0 1 0-6.8z",".22"],["M2.8 20a6.2 6.2 0 0 1 12.4 0z"],["M17 8v6M14 11h6"]]
  };
  function I_scale(){return [["M12 4v16M7 20h10M5 7h14M5 7l-3 6.5a3 3 0 0 0 6 0zM19 7l-3 6.5a3 3 0 0 0 6 0z",".15"]];}
  function ic(name,size){return icon(I[name]||I.info,size);}

  // ---- storage (synced through the main app's Google Drive file as "v4")
  var V={};try{V=JSON.parse(localStorage.getItem("am-v4")||"{}")||{};}catch(e){V={};}
  function save(){V.updatedAt=new Date().toISOString();try{localStorage.setItem("am-v4",JSON.stringify(V));}catch(e){}if(window.__dirty)try{window.__dirty();}catch(e){}}
  function merge(R){if(!R||!R.updatedAt)return false;if((R.updatedAt||"")<=(V.updatedAt||""))return false;V=R;try{localStorage.setItem("am-v4",JSON.stringify(V));}catch(e){}return true;}

  // ---- small UI kit
  function ring(p,size,stroke,color,label,track){size=size||64;stroke=stroke||3.2;p=Math.max(0,Math.min(100,Math.round(p||0)));
    var s=sv("svg",{viewBox:"0 0 36 36",width:size,height:size,"aria-hidden":"true"},
      sv("circle",{cx:18,cy:18,r:15.9,fill:"none",stroke:track||"rgba(255,255,255,.1)","stroke-width":stroke}),
      sv("circle",{cx:18,cy:18,r:15.9,fill:"none",stroke:color||"#3ECF9E","stroke-width":stroke,"stroke-linecap":"round",pathLength:100,"stroke-dasharray":p+" 100"}));
    var b=el("b",{style:"font-size:"+Math.round(size*0.24)+"px;color:"+(color||"#3ECF9E")},label!=null?label:num(p)+"%");
    return el("div",{class:"v4ring",style:"width:"+size+"px;height:"+size+"px",role:"img","aria-label":num(p)+"%"},s,b);}
  function sheet(title,body,opts){var wrap=el("div",{class:"v4sheet",role:"dialog","aria-modal":"true","aria-label":title});
    var inner=el("div",null,el("div",{class:"grab"}),title?el("h2",{style:"margin:0 0 12px;font-size:1.2rem"},title):null,body);
    wrap.appendChild(inner);wrap.addEventListener("click",function(e){if(e.target===wrap)close();});
    function close(){wrap.remove();document.removeEventListener("keydown",esc);if(opts&&opts.onClose)opts.onClose();}
    function esc(e){if(e.key==="Escape")close();}document.addEventListener("keydown",esc);
    document.body.appendChild(wrap);var f=inner.querySelector("input,button,select,textarea");if(f)try{f.focus({preventScroll:true});}catch(e){}
    return {close:close,el:inner};}
  function toast(msg,ms){var o=document.querySelector(".v4toast");if(o)o.remove();var d=el("div",{class:"v4toast",role:"status"},msg);document.body.appendChild(d);setTimeout(function(){d.remove();},ms||2600);}
  function head(title,sub,back,extra){return el("div",{class:"v4h"},back?el("button",{class:"v4back",type:"button","aria-label":t(["ফিরে যাও","Back","Kembali","رجوع","واپس","Rudi"]),onclick:function(){window.setView(back);}},ic("back",20)):null,
    el("h1",null,title,sub?el("span",{class:"sub"},sub):null),extra||null);}
  function seg(items,cur,onpick){var s=el("div",{class:"v4seg",role:"tablist"});items.forEach(function(it){s.appendChild(el("button",{type:"button",role:"tab","aria-selected":String(it[0]===cur),onclick:function(){onpick(it[0]);}},it[1]));});return s;}

  // ---- time helpers (follow the device timezone automatically)
  function tz(){try{return (typeof TZ!=="undefined"&&TZ)||Intl.DateTimeFormat().resolvedOptions().timeZone;}catch(e){return "UTC";}}
  function ymd(d){return new Intl.DateTimeFormat("en-CA",{timeZone:tz(),year:"numeric",month:"2-digit",day:"2-digit"}).format(d||new Date());}
  function hijri(d){try{return window.AM_hijri?window.AM_hijri(d||new Date(),L,tz()):"";}catch(e){return "";}}
  var HPF=null,HPZ="",HPC={};
  function hparts(d){try{var z=tz(),key=z+"|"+d.getTime();if(HPC[key])return HPC[key];if(!HPF||HPZ!==z){HPF=new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn",{day:"numeric",month:"numeric",year:"numeric",timeZone:z});HPZ=z;}var p=HPF.formatToParts(d);
    var g=function(k){return +((p.find(function(x){return x.type===k;})||{}).value||0);};return (HPC[key]={d:g("day"),m:g("month"),y:g("year")});}catch(e){return null;}}

  // ---- Islamic important days (local, from the Umm al-Qura calendar)
  var IDAYS=[
    [1,1,["ইসলামি নববর্ষ (১ মুহাররম)","Islamic New Year (1 Muharram)","Tahun Baru Hijrah","رأس السنة الهجرية","اسلامی نیا سال","Mwaka Mpya wa Kiislamu"]],
    [1,10,["আশুরা (১০ মুহাররম) · রোজা সুন্নাত","Ashura (10 Muharram) · Sunnah fast","Hari Asyura · puasa sunat","يوم عاشوراء · صيام سنة","یومِ عاشور · سنت روزہ","Ashura · funga ya Sunna"]],
    [3,12,["১২ রবিউল আউয়াল","12 Rabi' al-Awwal","12 Rabiulawal","١٢ ربيع الأول","١٢ ربیع الاول","12 Rabi' al-Awwal"]],
    [7,27,["২৭ রজব","27 Rajab","27 Rejab","٢٧ رجب","٢٧ رجب","27 Rajab"]],
    [8,15,["১৫ শাবান","15 Sha'ban","15 Syaaban","١٥ شعبان","١٥ شعبان","15 Sha'ban"]],
    [9,1,["রমজান শুরু","Ramadan begins","Ramadan bermula","بداية رمضان","رمضان کا آغاز","Ramadhani inaanza"]],
    [9,21,["রমজানের শেষ দশক (লাইলাতুল কদর খোঁজো)","Last ten nights of Ramadan (seek Laylat al-Qadr)","10 malam terakhir Ramadan","العشر الأواخر","آخری عشرہ","Siku kumi za mwisho"]],
    [10,1,["ঈদুল ফিতর","Eid al-Fitr","Hari Raya Aidilfitri","عيد الفطر","عید الفطر","Idd el-Fitr"]],
    [12,8,["হজ শুরু (৮ যিলহজ)","Hajj begins (8 Dhul Hijjah)","Haji bermula","بداية الحج","حج کا آغاز","Hijja inaanza"]],
    [12,9,["আরাফার দিন · রোজা","Day of Arafah · fast","Hari Arafah · puasa","يوم عرفة · صيام","یومِ عرفہ · روزہ","Siku ya Arafa · funga"]],
    [12,10,["ঈদুল আযহা","Eid al-Adha","Hari Raya Aidiladha","عيد الأضحى","عید الاضحیٰ","Idd el-Hajj"]]
  ];
  var WHITE=["আইয়ামে বীয (১৩-১৫) · রোজা","Ayyam al-Bid (13–15) · fast","Hari Putih (13–15) · puasa","الأيام البيض · صيام","ایامِ بیض · روزہ","Ayyam al-Bid · funga"];
  var IDC={};
  function islamicDays(n){var d=new Date();d.setHours(12,0,0,0);var ck=d.getTime()+"|"+(n||400)+"|"+L;if(IDC[ck])return IDC[ck];var out=[];
    for(var i=0;i<(n||400)&&out.length<40;i++){var x=new Date(d.getTime()+i*864e5),h=hparts(x);if(!h)break;
      IDAYS.forEach(function(it){if(it[0]===h.m&&it[1]===h.d)out.push({date:x,in:i,name:t(it[2]),h:h});});
      if(h.d===13&&!(h.m===12))out.push({date:x,in:i,name:t(WHITE),h:h,minor:1});}
    IDC={};IDC[ck]=out;return out;}

  window.V4={t:t,num:num,el:el,sv:sv,ic:ic,icon:icon,I:I,V:function(){return V;},save:save,merge:merge,ring:ring,sheet:sheet,toast:toast,head:head,seg:seg,
    L:L,LI:LI,RTL:RTL,tz:tz,ymd:ymd,hijri:hijri,hparts:hparts,islamicDays:islamicDays};

  // ---- fonts
  var fl=el("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;500;600;700&family=Tiro+Bangla&family=Amiri:wght@400;700&family=Marcellus&family=Scheherazade+New:wght@400;700&display=swap"});document.head.appendChild(fl);
  try{var tc=document.querySelector('meta[name="theme-color"]');if(tc)tc.setAttribute("content","#061719");}catch(e){}

  // ---- emblem (arch-Kaaba with the gold star)
  function emblem(cls,id){id=id||"em";var s=sv("svg",{class:cls,viewBox:"0 0 120 150","aria-hidden":"true"},
      sv("defs",null,
        sv("linearGradient",{id:id+"-a",x1:0,y1:0,x2:0,y2:1},sv("stop",{offset:0,"stop-color":"#1F5E54"}),sv("stop",{offset:1,"stop-color":"#06191B"})),
        sv("radialGradient",{id:id+"-g"},sv("stop",{offset:0,"stop-color":"#FFE7A3","stop-opacity":".9"}),sv("stop",{offset:1,"stop-color":"#FFE7A3","stop-opacity":"0"}))),
      sv("path",{class:"fill",d:"M12 146V72C12 42 34 20 60 7c26 13 48 35 48 65v74z",fill:"url(#"+id+"-a)"}),
      sv("path",{class:"draw",d:"M12 146V72C12 42 34 20 60 7c26 13 48 35 48 65v74z",fill:"none",stroke:"#E8C98A","stroke-width":"2.2",pathLength:1}),
      sv("path",{class:"draw",d:"M25 146V75c0-24 15-41 35-53 20 12 35 29 35 53v71",fill:"none",stroke:"#E8C98A","stroke-opacity":".45","stroke-width":"1.2",pathLength:1}),
      sv("g",{class:"pc",style:"--dx:-26px;--dy:14px;--r:-18deg"},sv("path",{d:"M37 98l23 10v27l-23-10z",fill:"#121212"})),
      sv("g",{class:"pc",style:"--dx:26px;--dy:14px;--r:18deg"},sv("path",{d:"M83 98l-23 10v27l23-10z",fill:"#1E1E1E"})),
      sv("g",{class:"pc",style:"--dx:0px;--dy:-24px;--r:0deg"},sv("path",{d:"M37 98l23-10 23 10-23 10z",fill:"#2E2E2E"})),
      sv("g",{class:"pc",style:"--dx:0px;--dy:22px;--r:0deg"},sv("path",{d:"M37 103l23 10v5l-23-10zM83 103l-23 10v5l23-10z",fill:"#E8C98A"})),
      sv("circle",{class:"ehalo",cx:60,cy:52,r:20,fill:"url(#"+id+"-g)"}),
      sv("polygon",{class:"estar",points:"60.0,41.0 62.1,47.0 67.8,44.2 65.0,49.9 71.0,52.0 65.0,54.1 67.8,59.8 62.1,57.0 60.0,63.0 57.9,57.0 52.2,59.8 55.0,54.1 49.0,52.0 55.0,49.9 52.2,44.2 57.9,47.0",fill:"#F7E2A6"}));
    return s;}
  V4.emblem=emblem;

  // ---- splash: plays every time the app is opened (and when it comes back after a while in the background)
  (function(){var skip=false;try{skip=sessionStorage.getItem("am-splash")==="skip"||sessionStorage.getItem("am-splashed")==="1";sessionStorage.setItem("am-splashed","1");}catch(e){}if(skip){var pr=document.getElementById("v0pre");if(pr)pr.remove();return;}
    function play(){if(document.getElementById("v4splash"))return;
      var sp=el("div",{id:"v4splash","aria-hidden":"true"},
        el("div",{class:"c"},emblem("em","sp"),el("div",{class:"wm"},"Amalnama"),el("div",{class:"ar"},"عملنامه")),
        el("div",{class:"sal"},el("div",{class:"a"},"السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ"),el("div",{class:"dots"},el("i"),el("i"),el("i"))));
      document.body.appendChild(sp);var pre=document.getElementById("v0pre");if(pre)setTimeout(function(){pre.remove();},60);
      function out(){sp.classList.add("out");setTimeout(function(){sp.remove();},700);}
      sp.addEventListener("click",out);setTimeout(out,2900);}
    play();
    var hiddenAt=0;document.addEventListener("visibilitychange",function(){if(document.hidden)hiddenAt=Date.now();else if(hiddenAt&&Date.now()-hiddenAt>1800000){hiddenAt=0;play();}});})();

  // ---- hero: new emblem, Islamic day, Today's note, live dot
  function upgradeHero(){var h=document.querySelector(".hero .inner");if(!h||h.querySelector(".v4em"))return;
    h.insertBefore(emblem("v4em","hero"),h.firstChild);
    var dates=document.getElementById("dates");if(dates&&!document.getElementById("v4day")){var b=el("div",{id:"v4day"});dates.parentNode.insertBefore(b,dates.nextSibling);}
    var s=document.getElementById("sync");if(s){s.setAttribute("role","button");s.setAttribute("tabindex","0");s.addEventListener("click",function(){
      if(document.documentElement.classList.contains("g-wait")&&window.amGoogle)window.amGoogle.soft();else toast((s.textContent||"").trim()||t(["সিঙ্ক চালু","Sync on","Penyegerakan aktif","المزامنة تعمل","سنک جاری","Usawazishaji umewashwa"]));});}
    var q=document.getElementById("quote");if(q&&!document.getElementById("v4note")){q.insertAdjacentElement("afterend",el("div",{id:"v4note",class:"v4note"}));}
    dayBadge();note();}
  function dayBadge(){var b=document.getElementById("v4day");if(!b)return;var list=islamicDays(60);b.innerHTML="";
    var main=list.filter(function(x){return !x.minor;})[0],any=list[0];var x=(any&&any.in===0)?any:main||any;if(!x)return;
    b.className="v4day";b.appendChild(ic("moon",14));b.appendChild(document.createTextNode(" "+(x.in===0?t(["আজ","Today","Hari ini","اليوم","آج","Leo"])+": ":num(x.in)+" "+t(["দিন পর","days","hari lagi","أيام","دن بعد","siku"])+" · ")+x.name));
    b.style.cursor="pointer";b.onclick=function(){window.setView("shariah");setTimeout(function(){var d=document.getElementById("v4idays");if(d)d.scrollIntoView({block:"start"});},80);};}

  // ---- screen time (time spent in Amalnama + optional phone total typed by the user)
  var ST={start:null};
  function stDay(){V.st=V.st||{on:true,days:{}};var d=ymd();V.st.days[d]=V.st.days[d]||{app:0,phone:null};return V.st.days[d];}
  function stTick(){if(!V.st||V.st.on===false)return;var now=Date.now();if(ST.start){var x=stDay();x.app+=Math.min(now-ST.start,60000)/60000;ST.start=now;
      try{localStorage.setItem("am-v4",JSON.stringify(V));}catch(e){}}}
  document.addEventListener("visibilitychange",function(){if(document.hidden){stTick();ST.start=null;}else ST.start=Date.now();});
  ST.start=document.hidden?null:Date.now();setInterval(stTick,30000);
  V4.screen=function(){stTick();var x=stDay();return {app:Math.round(x.app),phone:x.phone};};

  // ---- Today's note: user's own note, otherwise the best suggestion from activity + screen time
  function stats(){var r={pct:null,salat:null,todoOpen:0};
    try{var p=document.getElementById("ringPct");if(p)r.pct=parseInt(String(p.textContent).replace(/[০-৯]/g,function(c){return BN.indexOf(c);}),10);}catch(e){}
    try{var s=document.getElementById("mSalat");if(s){var m=String(s.textContent).replace(/[০-৯]/g,function(c){return BN.indexOf(c);}).match(/(\d+)\s*\/\s*5/);if(m)r.salat=+m[1];}}catch(e){}
    try{if(typeof todoList==="function"&&typeof TODAY!=="undefined"){r.todoOpen=todoList(TODAY).filter(function(i){return !i.done;}).length;}}catch(e){}
    return r;}
  function suggestion(){var s=stats(),sc=V4.screen(),h=new Date().getHours(),phone=sc.phone,why=[];
    var S=function(a,b){return {text:t(a),basedOn:t(b)};};
    if(phone!=null&&phone>=((V.st&&V.st.goal)||240))return S(["আজ ফোনে "+num(Math.floor(phone/60))+" ঘণ্টা+ কেটেছে। পরের ৩০ মিনিট ফোন দূরে রেখে কুরআনের এক পৃষ্ঠা আর ১০০ বার ইস্তিগফার করো।","Over "+Math.floor(phone/60)+" hours on the phone today. Put it away for 30 minutes: one page of Quran and 100× istighfar.","Lebih "+Math.floor(phone/60)+" jam di telefon hari ini. Letak telefon 30 minit: satu muka surat al-Quran dan 100× istighfar.","أكثر من "+Math.floor(phone/60)+" ساعات على الهاتف اليوم. ضعه جانبًا ٣٠ دقيقة: صفحة من القرآن و١٠٠ استغفار.","آج فون پر "+Math.floor(phone/60)+" گھنٹے سے زیادہ۔ ۳۰ منٹ فون دور رکھیں: قرآن کا ایک صفحہ اور ۱۰۰ بار استغفار۔","Zaidi ya saa "+Math.floor(phone/60)+" kwenye simu leo. Iweke kando dakika 30: ukurasa mmoja wa Qur'ani na istighfar 100."],["স্ক্রিন টাইম","Screen time","Masa skrin","وقت الشاشة","اسکرین ٹائم","Muda wa skrini"]);
    if(s.salat!=null&&s.salat<5&&h>=13)return S(["আজ "+num(s.salat)+"/৫ ওয়াক্ত হয়েছে। পরের ওয়াক্তের আযানের ১০ মিনিট আগে সব কাজ রেখে ওযু করে নাও।","Prayers today: "+s.salat+"/5. Ten minutes before the next adhan, stop everything and make wudu.","Solat hari ini: "+s.salat+"/5. 10 minit sebelum azan seterusnya, berhenti dan ambil wuduk.","الصلوات اليوم: "+s.salat+"/٥. قبل الأذان القادم بعشر دقائق توضأ واترك ما بيدك.","آج نمازیں: "+s.salat+"/۵۔ اگلی اذان سے ۱۰ منٹ پہلے سب چھوڑ کر وضو کر لیں۔","Swala leo: "+s.salat+"/5. Dakika 10 kabla ya adhana ijayo, acha kila kitu utawadhe."],["সালাতের হিসাব","Prayer log","Rekod solat","سجل الصلاة","نماز کا حساب","Rekodi ya swala"]);
    if(s.todoOpen>=3)return S(["আজ "+num(s.todoOpen)+"টা কাজ বাকি। সবচেয়ে কঠিনটা আগে ২৫ মিনিটের পোমোডোরো দিয়ে শুরু করো।",s.todoOpen+" tasks left today. Start the hardest one with a 25-minute Pomodoro.",s.todoOpen+" tugasan berbaki. Mulakan yang paling sukar dengan Pomodoro 25 minit.","بقي "+s.todoOpen+" مهام اليوم. ابدأ بأصعبها بجلسة بومودورو ٢٥ دقيقة.","آج "+s.todoOpen+" کام باقی۔ سب سے مشکل کام ۲۵ منٹ کے پومودورو سے شروع کریں۔","Kazi "+s.todoOpen+" zimebaki. Anza ngumu zaidi kwa Pomodoro ya dakika 25."],["To-Do","To-Do","To-Do","المهام","To-Do","Kazi"]);
    if(s.pct!=null&&s.pct>=80)return S(["মাশাআল্লাহ, আজ "+num(s.pct)+"% সম্পন্ন! শুকরিয়া জানাতে ঘুমানোর আগে সূরা আল-মুলক পড়ো।","MashaAllah, "+s.pct+"% done today! Thank Allah — read Surah al-Mulk before sleeping.","MasyaAllah, "+s.pct+"% selesai! Baca Surah al-Mulk sebelum tidur.","ما شاء الله، أنجزت "+s.pct+"٪! اقرأ سورة الملك قبل النوم.","ماشاءاللہ، آج "+s.pct+"٪ مکمل! سونے سے پہلے سورۂ ملک پڑھیں۔","MashaAllah, "+s.pct+"% leo! Soma Surat al-Mulk kabla ya kulala."],["আজকের অগ্রগতি","Today's progress","Kemajuan hari ini","تقدم اليوم","آج کی پیش رفت","Maendeleo ya leo"]);
    if(sc.app>=45)return S(["আজ অ্যাপে "+num(sc.app)+" মিনিট। পরিকল্পনা হয়ে গেলে এবার কাজে নামো — বাকি সময় বারাকাহ চাও।","You've spent "+sc.app+" min in the app today. Plan's done — now act, and ask Allah for barakah.","Sudah "+sc.app+" minit dalam aplikasi. Rancangan siap — kini laksanakan.","قضيت "+sc.app+" دقيقة في التطبيق. الخطة جاهزة — ابدأ العمل.","آج ایپ میں "+sc.app+" منٹ۔ منصوبہ تیار — اب عمل کریں۔","Dakika "+sc.app+" ndani ya programu leo. Mpango tayari — sasa tenda."],["অ্যাপে কাটানো সময়","Time in app","Masa dalam aplikasi","الوقت في التطبيق","ایپ میں وقت","Muda ndani ya programu"]);
    if(h<11)return S(["সকালের যিকর আর ফজরের পর সূরা ইয়াসিন দিয়ে দিন শুরু করো; আজকের সবচেয়ে জরুরি একটা কাজ লিখে রাখো।","Start with the morning adhkar and Surah Yasin after Fajr; write down today's single most important task.","Mulakan dengan zikir pagi dan Surah Yasin selepas Subuh; tulis satu tugasan paling penting.","ابدأ بأذكار الصباح وسورة يس بعد الفجر، واكتب أهم مهمة اليوم.","صبح کے اذکار اور فجر کے بعد سورۂ یٰسین سے دن شروع کریں؛ آج کا سب سے ضروری کام لکھیں۔","Anza na adhkar za asubuhi na Yasin baada ya Alfajiri; andika kazi muhimu zaidi ya leo."],["সময়","Time of day","Waktu","الوقت","وقت","Wakati"]);
    return S(["প্রতি ওয়াক্তের পর আয়াতুল কুরসি আর ৪ কুল পড়ো — নামাজ শেষে অ্যাপ নিজেই মনে করিয়ে দেবে।","After every prayer read Ayat al-Kursi and the 4 Quls — the app reminds you after each salah.","Selepas setiap solat baca Ayat al-Kursi dan 4 Qul — aplikasi akan mengingatkan.","بعد كل صلاة اقرأ آية الكرسي والمعوذات — سيذكرك التطبيق.","ہر نماز کے بعد آیت الکرسی اور چار قل — ایپ یاد دلائے گی۔","Baada ya kila swala soma Ayat al-Kursi na Qul nne — programu itakukumbusha."],["সার্বিক আমল","Overall activity","Aktiviti keseluruhan","النشاط العام","مجموعی سرگرمی","Shughuli kwa ujumla"]);}
  function note(){var n=document.getElementById("v4note");if(!n)return;n.innerHTML="";var own=V.note&&V.noteDay===ymd()?V.note:(V.notePin?V.note:"");
    var editB=el("button",{type:"button",onclick:editNote},own?t(["বদলাও","Edit","Ubah","تعديل","ترمیم","Hariri"]):t(["+ নিজের নোট","+ My note","+ Nota saya","+ ملاحظتي","+ میرا نوٹ","+ Kumbukumbu yangu"]));
    n.appendChild(el("div",{class:"k"},el("span",null,"✦ "+t(["আজকের কথা","Today's note","Nota hari ini","كلمة اليوم","آج کی بات","Ujumbe wa leo"])),editB));
    if(own){n.appendChild(el("p",null,own));return;}
    var s=suggestion();n.appendChild(el("p",null,s.text));n.appendChild(el("span",{class:"tag"},t(["ভিত্তি: ","Based on: ","Berdasarkan: ","بناءً على: ","بنیاد: ","Kulingana na: "])+s.basedOn));}
  function editNote(){var ta=el("textarea",{class:"v4in",rows:"4",maxlength:"300",placeholder:t(["আজ নিজেকে কী মনে করিয়ে দিতে চাও?","What do you want to remind yourself today?","Apa yang mahu diingatkan hari ini?","بماذا تريد أن تذكّر نفسك اليوم؟","آج خود کو کیا یاد دلانا ہے؟","Unataka kujikumbusha nini leo?"])});ta.value=V.note||"";
    var pin=el("input",{type:"checkbox"});pin.checked=!!V.notePin;
    var sh=sheet(t(["আজকের কথা","Today's note","Nota hari ini","كلمة اليوم","آج کی بات","Ujumbe wa leo"]),el("div",{style:"display:grid;gap:10px"},ta,
      el("label",{class:"v4row",style:"font-size:.85rem;color:var(--muted)"},pin,t(["প্রতিদিন দেখাও (না হলে শুধু আজ)","Show every day (otherwise today only)","Papar setiap hari","اعرضها كل يوم","ہر روز دکھائیں","Onyesha kila siku"])),
      el("div",{class:"v4row"},el("button",{class:"v4btn gold",type:"button",onclick:function(){V.note=ta.value.trim();V.noteDay=ymd();V.notePin=pin.checked;save();sh.close();note();}},t(["সেভ","Save","Simpan","حفظ","محفوظ","Hifadhi"])),
        el("button",{class:"v4btn",type:"button",onclick:function(){V.note="";V.notePin=false;save();sh.close();note();}},t(["সাজেশন দেখাও","Show suggestion","Tunjuk cadangan","اعرض الاقتراح","تجویز دکھائیں","Onyesha pendekezo"])))));}
  V4.refreshNote=note;

  // ---- notice board: add the next Event after Exam and Assignment
  function eventCard(){var duo=document.querySelector(".duo");if(!duo)return;var b=document.getElementById("adEvent");
    var list=[];try{if(typeof events!=="undefined")list=Object.values(events);}catch(e){}
    var today=ymd(),nx=list.filter(function(e){return e&&e.start&&String(e.start).slice(0,10)>=today;}).sort(function(a,b){return a.start>b.start?1:-1;})[0];
    if(!b){b=el("button",{class:"ad2 v4ev",id:"adEvent",type:"button",onclick:function(){window.setView("events");}});duo.appendChild(b);}
    b.innerHTML="";var K=t(["ইভেন্ট","Event","Acara","فعالية","ایونٹ","Tukio"]);
    if(!nx){b.appendChild(el("span",{class:"cd"},el("b",null,"+"),el("small",null,K)));b.appendChild(el("span",{class:"tt"},el("span",{class:"k"},el("span",null,K)),el("b",{class:"t"},t(["আসন্ন ইভেন্ট যোগ করো","Add an upcoming event","Tambah acara","أضف فعالية","آنے والا ایونٹ شامل کریں","Ongeza tukio"])),el("span",{class:"s"},t(["সেমিনার, প্রোগ্রাম, দাওয়াত","Seminars, programmes, invitations","Seminar, program, jemputan","ندوات، برامج، دعوات","سیمینار، پروگرام، دعوت","Semina, programu, mialiko"]))));return;}
    var days=Math.round((new Date(String(nx.start).slice(0,10)+"T12:00:00")-new Date(today+"T12:00:00"))/864e5);
    b.appendChild(el("span",{class:"cd"},el("b",null,num(days)),el("small",null,t(["দিন","days","hari","يوم","دن","siku"]))));
    b.appendChild(el("span",{class:"tt"},el("span",{class:"k"},el("span",null,K)),el("b",{class:"t"},nx.title||""),el("span",{class:"s"},(nx.loc?nx.loc+" · ":"")+String(nx.start).slice(0,10))));}

  // ---- new sections + spaces
  var TODAYV=["today","plan","routine","acad","events","week","month"];
  var SPACE={amal:"amal",quran:"amal",azan:"amal",hadith:"amal",dua:"amal",shariah:"shariah",finance:"finance",comm:"comm",more:"more",pomodoro:"more",videos:"comm",mufti:"mufti",admin:"more",settings:"more",backup:"more",books:"shariah"};
  var MY=[];
  V4.space=function(k,sp){SPACE[k]=sp;};
  V4.section=function(k,mod){var s=document.getElementById("v-"+k);if(!s){s=el("section",{id:"v-"+k,class:"v4s",hidden:true});
      var all=document.querySelectorAll("section[id^='v-']");all[all.length-1].insertAdjacentElement("afterend",s);}
    if(MY.indexOf(k)<0)MY.push(k);X.register(k,mod);return s;};
  var prevSet=window.setView;
  window.setView=function(v){prevSet(v);
    MY.forEach(function(k){var s=document.getElementById("v-"+k);if(s)s.hidden=k!==v;});
    var sp=TODAYV.indexOf(v)>=0?"today":(SPACE[v]||"today");
    document.body.classList.toggle("v4x",sp!=="today");document.body.classList.toggle("v4m",v==="mufti");document.body.classList.toggle("v4more",v==="more");
    curSpace=sp;paintNav();subHead(v);
    if(sp!=="today"||TODAYV.indexOf(v)>0)try{window.scrollTo({top:0});}catch(e){}
    if(v==="today"){eventCard();note();dayBadge();}
    /* the address bar and back button are handled in v5.js (navigation memory) */};
  // titles + back for the existing Quran / Azan / Community views
  function subHead(v){var map={quran:[["কুরআন","Quran","Al-Quran","القرآن","قرآن","Qur'ani"],"amal"],azan:[["আযান ও নামাজের সময়","Azan & prayer times","Azan & waktu solat","الأذان ومواقيت الصلاة","اذان اور نماز کے اوقات","Adhana na nyakati za swala"],"amal"],comm:[["কমিউনিটি","Community","Komuniti","المجتمع","کمیونٹی","Jumuiya"],null]};
    var hd=document.getElementById("v4subhead");if(hd)hd.remove();var m=map[v];if(!m)return;var s=document.getElementById("v-"+v);if(!s)return;
    hd=head(t(m[0]),null,m[1]);hd.id="v4subhead";s.parentNode.insertBefore(hd,s);}

  // ---- premium bottom nav + always-live Mufti
  var NAV=[["today",["আজ","Today","Hari ini","اليوم","آج","Leo"]],["amal",["আমল","Amal","Amal","الأعمال","اعمال","Amali"]],["finance",["হিসাব","Finance","Kewangan","الحساب","حساب","Fedha"]],["comm",["মিডিয়া","Media","Media","الوسائط","میڈیا","Media"]],["shariah",["শরিয়াহ","Shariah","Syariah","الشريعة","شریعت","Sharia"]],["more",["আরও","More","Lagi","المزيد","مزید","Zaidi"]]];
  var curSpace="today",navEl=null;
  function buildNav(){navEl=el("div",{id:"v4nav"});var bar=el("nav",{class:"bar","aria-label":"Main"});
    NAV.forEach(function(n){var b=el("button",{type:"button","data-s":n[0],onclick:function(){window.setView(n[0]==="today"?"today":n[0]);}},ic(n[0]),el("span",null,t(n[1])));bar.appendChild(b);});
    navEl.appendChild(bar);document.body.appendChild(navEl);
    var mb=el("button",{id:"v4mufti",type:"button","aria-label":t(["অনলাইন মুফতি (সবসময় লাইভ)","Online Mufti (always live)","Mufti dalam talian","المفتي عبر الإنترنت","آن لائن مفتی","Mufti mtandaoni"]),onclick:function(){window.setView("mufti");}},muftiAvatar("nb"));
    document.body.appendChild(mb);paintNav();}
  function paintNav(){if(!navEl)return;navEl.querySelectorAll("button[data-s]").forEach(function(b){if(b.dataset.s===curSpace)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current");});}
  V4.badge=function(space,n){if(!navEl)return;var b=navEl.querySelector('button[data-s="'+space+'"]');if(!b)return;var d=b.querySelector(".dot");if(!n){if(d)d.remove();return;}if(!d){d=el("span",{class:"dot"});b.appendChild(d);}d.textContent=n>9?"9+":num(n);};
  // keep the community badge in sync with the old tab badge
  var ob=X.badge;X.badge=function(v,n){if(ob)ob(v,n);if(v==="comm")V4.badge("comm",n);};

  // ---- 3D Mufti avatar: cream tupi cap, white beard, brown vest, cream kurta, plain face (no eyes, nose or mouth)
  function muftiAvatar(p){var g=function(id){return "url(#"+p+"-"+id+")";};
    function anim(tag,a){return p==="nb"?null:sv(tag,a);} // the floating button stays still (smooth scrolling); its "live" glow is pure CSS
    return sv("svg",{viewBox:"0 0 120 120","aria-hidden":"true"},
      sv("defs",null,
        sv("radialGradient",{id:p+"-bg",cx:"50%",cy:"38%",r:"72%"},sv("stop",{offset:0,"stop-color":"#22685E"}),sv("stop",{offset:1,"stop-color":"#071F22"})),
        sv("radialGradient",{id:p+"-glow"},sv("stop",{offset:0,"stop-color":"#FFE7A3","stop-opacity":".5"}),sv("stop",{offset:1,"stop-color":"#FFE7A3","stop-opacity":"0"})),
        sv("radialGradient",{id:p+"-sk",cx:"40%",cy:"34%",r:"78%"},sv("stop",{offset:0,"stop-color":"#FFE6D2"}),sv("stop",{offset:".55","stop-color":"#F0BE98"}),sv("stop",{offset:1,"stop-color":"#C98763"})),
        sv("linearGradient",{id:p+"-cap",x1:0,y1:0,x2:1,y2:1},sv("stop",{offset:0,"stop-color":"#FFFCF2"}),sv("stop",{offset:".55","stop-color":"#F1E6C8"}),sv("stop",{offset:1,"stop-color":"#C8B385"})),
        sv("linearGradient",{id:p+"-sh",x1:0,y1:0,x2:1,y2:0},sv("stop",{offset:0,"stop-color":"#fff","stop-opacity":"0"}),sv("stop",{offset:".5","stop-color":"#fff","stop-opacity":".85"}),sv("stop",{offset:1,"stop-color":"#fff","stop-opacity":"0"}),
          anim("animateTransform",{attributeName:"gradientTransform",type:"translate",values:"-1 0;1 0;1 0",keyTimes:"0;.6;1",dur:"3.6s",repeatCount:"indefinite"})),
        sv("radialGradient",{id:p+"-bd",cx:"45%",cy:"22%",r:"88%"},sv("stop",{offset:0,"stop-color":"#FFFFFF"}),sv("stop",{offset:".7","stop-color":"#ECEFF2"}),sv("stop",{offset:1,"stop-color":"#BCC4CB"})),
        sv("linearGradient",{id:p+"-kt",x1:0,y1:0,x2:0,y2:1},sv("stop",{offset:0,"stop-color":"#FFF8E8"}),sv("stop",{offset:1,"stop-color":"#D6C49C"})),
        sv("linearGradient",{id:p+"-vs",x1:0,y1:0,x2:1,y2:1},sv("stop",{offset:0,"stop-color":"#9A6740"}),sv("stop",{offset:1,"stop-color":"#4A2C18"})),
        sv("clipPath",{id:p+"-cl"},sv("circle",{cx:60,cy:60,r:60}))),
      sv("g",{"clip-path":g("cl")},
        sv("circle",{cx:60,cy:60,r:60,fill:g("bg")}),
        sv("circle",{cx:60,cy:50,r:46,fill:g("glow")},anim("animate",{attributeName:"opacity",values:".5;1;.5",dur:"2.8s",repeatCount:"indefinite"})),
        sv("g",null,anim("animateTransform",{attributeName:"transform",type:"translate",values:"0 0;0 -1.6;0 0",dur:"3.4s",repeatCount:"indefinite"}),
          sv("path",{d:"M8 126C10 100 30 88 60 88S110 100 112 126Z",fill:g("kt")}),
          sv("rect",{x:"57.6",y:"90",width:"4.8",height:"36",rx:"1.5",fill:"#E9DAB4"}),
          sv("circle",{cx:60,cy:98,r:1.8,fill:"#C9A050"}),sv("circle",{cx:60,cy:106,r:1.8,fill:"#C9A050"}),sv("circle",{cx:60,cy:114,r:1.8,fill:"#C9A050"}),
          sv("path",{d:"M13 126C15 106 25 95 42 91L52 126Z",fill:g("vs")}),sv("path",{d:"M107 126C105 106 95 95 78 91L68 126Z",fill:g("vs")}),
          sv("path",{d:"M42 91L52 126M78 91L68 126",stroke:"#C08A58","stroke-width":"1.4",fill:"none",opacity:".8"}),
          sv("rect",{x:51,y:72,width:18,height:20,rx:7,fill:"#D99D76"}),
          sv("g",null,anim("animateTransform",{attributeName:"transform",type:"rotate",values:"-2 60 84;2 60 84;-2 60 84",dur:"6.5s",repeatCount:"indefinite"}),
            sv("ellipse",{cx:37,cy:58,rx:4.2,ry:6.6,fill:"#E3A985"}),sv("ellipse",{cx:83,cy:58,rx:4.2,ry:6.6,fill:"#E3A985"}),
            sv("ellipse",{cx:60,cy:56,rx:23,ry:26,fill:g("sk")}),
            sv("ellipse",{cx:52,cy:50,rx:8,ry:5,fill:"#fff",opacity:".24"}),
            sv("ellipse",{cx:46,cy:62,rx:4.5,ry:2.6,fill:"#E8907C",opacity:".3"}),sv("ellipse",{cx:74,cy:62,rx:4.5,ry:2.6,fill:"#E8907C",opacity:".3"}),
            sv("path",{d:"M37 45C36 53 37 60 39.5 65L42.5 62C41.5 56 41.5 50 42.5 45Z",fill:"#BEC4C9"}),sv("path",{d:"M83 45C84 53 83 60 80.5 65L77.5 62C78.5 56 78.5 50 77.5 45Z",fill:"#BEC4C9"}),
            sv("path",{d:"M38 60C38 84 48 102 60 102S82 84 82 60C78 68 70 72 60 72S42 68 38 60Z",fill:g("bd")}),
            sv("path",{d:"M47 78Q49 90 54 97M60 80V99M73 78Q71 90 66 97",stroke:"#C6CDD3","stroke-width":"1",fill:"none",opacity:".75"}),
            sv("path",{d:"M46 71C52 66 57 66 60 68.5C63 66 68 66 74 71C68 73.5 64 73 60 71.5C56 73 52 73.5 46 71Z",fill:"#F5F7F9",stroke:"#C9CFD4","stroke-width":".6"}),
            sv("ellipse",{cx:60,cy:45.5,rx:22,ry:3,fill:"#000",opacity:".12"}),
            sv("path",{d:"M36 44C35 26 46 17 60 17S85 26 84 44C77 41 69 39.5 60 39.5S43 41 36 44Z",fill:g("cap")}),
            sv("path",{d:"M40.5 35C46 31.5 53 30 60 30S74 31.5 79.5 35M45 26.5C50 24 55 23 60 23S70 24 75 26.5M60 17.5V39",stroke:"#CBB78A","stroke-width":"1","stroke-dasharray":"1.6 2",fill:"none"}),
            sv("path",{d:"M36 44C35 26 46 17 60 17S85 26 84 44C77 41 69 39.5 60 39.5S43 41 36 44Z",fill:g("sh"),opacity:".5"}),
            sv("path",{d:"M36 44C43 41 51 39.5 60 39.5S77 41 84 44L84.3 47.5C77 44.6 69 43.2 60 43.2S43 44.6 35.7 47.5Z",fill:"#D6C397"})))),
      sv("circle",{cx:60,cy:60,r:57,fill:"none",stroke:"#E8C98A","stroke-opacity":".7","stroke-width":"1.4","stroke-dasharray":"3 7"},anim("animateTransform",{attributeName:"transform",type:"rotate",from:"0 60 60",to:"360 60 60",dur:"18s",repeatCount:"indefinite"})),
      sv("circle",{cx:101,cy:101,r:9,fill:"#22C55E",opacity:".55"},anim("animate",{attributeName:"r",values:"9;17;9",dur:"1.8s",repeatCount:"indefinite"}),anim("animate",{attributeName:"opacity",values:".55;0;.55",dur:"1.8s",repeatCount:"indefinite"})),
      sv("circle",{cx:101,cy:101,r:9,fill:"#22C55E",stroke:"#071F22","stroke-width":"3.5"}));}
  V4.muftiAvatar=muftiAvatar;

  // ---- favicon: arch-Kaaba with the glowing star
  try{var fav=document.querySelector('link[rel="icon"][sizes="any"]');if(fav)fav.href="favicon.ico?v=4";}catch(e){}

  function boot(){upgradeHero();buildNav();eventCard();
    var hv=(location.hash||"").slice(1);
    if(hv&&(MY.indexOf(hv)>=0||SPACE[hv]))setTimeout(function(){window.setView(hv);},350);
    else window.setView((typeof view!=="undefined"&&view)||"today");
    setInterval(function(){if(curSpace==="today"&&!document.hidden){note();}},5*60000);}
  V4.boot=boot;
})();
