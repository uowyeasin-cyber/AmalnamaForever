/* Amalnama v4 · Quran: Uthmani & Nurani (printed white page) reading, qari choice, surah after surah, background play, ayah & surah bookmarks */
(function(){
  var X=window.AMX,V=window.V4;if(!X||!V)return;var t=V.t,num=V.num,el=V.el,ic=V.ic,T=X.T,L=V.L;
  var B=function(bn,en,ms,ar,ur,sw){return [bn,en,ms,ar,ur,sw];};
  var API="https://api.alquran.cloud/v1/";
  var ED={bn:"bn.bengali",en:"en.sahih",ms:"ms.basmeih",ur:"ur.jalandhry",sw:"sw.barwani",ar:"ar.muyassar"}[L]||"en.sahih";
  var RTLTR=(L==="ar"||L==="ur");
  var AR=function(n){return String(n).replace(/\d/g,function(d){return "٠١٢٣٤٥٦٧٨٩"[d];});};
  var BISM=/^﻿?بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/;
  var QARI=[["ar.alafasy",128,"Mishary Rashid Alafasy",B("মধুর মুরাত্তাল","Melodious murattal","Murattal merdu","مرتل عذب","خوش الحان مرتل","Murattal tamu")],
    ["ar.abdulbasitmurattal",192,"Abdul Basit Abdus Samad",B("ক্লাসিক মুরাত্তাল","Classic murattal","Murattal klasik","مرتل كلاسيكي","کلاسک مرتل","Murattal ya kale")],
    ["ar.abdurrahmaansudais",192,"Abdur-Rahman As-Sudais",B("মসজিদুল হারাম","Masjid al-Haram","Masjidil Haram","المسجد الحرام","مسجد الحرام","Masjid al-Haram")],
    ["ar.mahermuaiqly",128,"Maher Al-Muaiqly",B("মসজিদুল হারাম","Masjid al-Haram","Masjidil Haram","المسجد الحرام","مسجد الحرام","Masjid al-Haram")],
    ["ar.saoodshuraym",64,"Saud Ash-Shuraim",B("মসজিদুল হারাম","Masjid al-Haram","Masjidil Haram","المسجد الحرام","مسجد الحرام","Masjid al-Haram")],
    ["ar.hudhaify",128,"Ali Al-Hudhaify",B("মসজিদে নববী","Masjid an-Nabawi","Masjid Nabawi","المسجد النبوي","مسجد نبوی","Masjid an-Nabawi")],
    ["ar.husary",128,"Mahmoud Khalil Al-Husary",B("ধীর ও স্পষ্ট","Slow & clear","Perlahan & jelas","متأنٍ وواضح","آہستہ اور واضح","Polepole na wazi")],
    ["ar.minshawi",128,"Muhammad Siddiq Al-Minshawi",B("হৃদয়ছোঁয়া","Heart-touching","Menyentuh hati","مؤثر","دل کو چھونے والی","Ya kugusa moyo")],
    ["ar.ahmedajamy",128,"Ahmed Al-Ajamy",B("শান্ত কণ্ঠ","Calm voice","Suara tenang","صوت هادئ","پرسکون آواز","Sauti tulivu")]];
  var S={list:null,data:null,idx:-1,showTr:true,size:1,auto:true,autoSurah:true,qari:0,mode:"usmani",bm:[],bms:[],last:null,tab:"list"};
  try{var st=JSON.parse(localStorage.getItem("am-quran")||"{}");["size","showTr","auto","autoSurah","qari","mode","bm","bms","last"].forEach(function(k){if(st[k]!=null)S[k]=st[k];});}catch(e){}
  if(S.qari>=QARI.length)S.qari=0;
  function save(){try{localStorage.setItem("am-quran",JSON.stringify({size:S.size,showTr:S.showTr,auto:S.auto,autoSurah:S.autoSurah,qari:S.qari,mode:S.mode,bm:S.bm,bms:S.bms,last:S.last}));}catch(e){}}
  var audio=new Audio();audio.preload="auto";
  var root=null,listEl=null,player=null,cache={},ipCache={};
  function getJSON(u){return fetch(u).then(function(r){if(!r.ok)throw new Error(r.status);return r.json();}).then(function(j){if(j.code!==200)throw new Error(j.status);return j.data;});}
  function loadList(){if(S.list)return Promise.resolve(S.list);
    try{var c=JSON.parse(localStorage.getItem("am-q-list")||"null");if(c&&c.length===114){S.list=c;return Promise.resolve(c);}}catch(e){}
    return getJSON(API+"surah").then(function(d){S.list=d.map(function(s){return {n:s.number,ar:s.name,en:s.englishName,tr:s.englishNameTranslation,c:s.numberOfAyahs,t:s.revelationType};});
      try{localStorage.setItem("am-q-list",JSON.stringify(S.list));}catch(e){}return S.list;});}
  function loadSurah(n){if(cache[n])return Promise.resolve(cache[n]);
    return Promise.all([loadList(),getJSON(API+"surah/"+n+"/editions/quran-uthmani,"+ED)]).then(function(r){var meta=r[0][n-1],eds=r[1],ar=eds[0].ayahs,tr=eds[1]?eds[1].ayahs:[];
      var rk={};ar.forEach(function(a){rk[a.ruku]=1;});
      cache[n]={n:n,meta:meta,juz:ar[0].juz,page:ar[0].page,ruku:Object.keys(rk).length,ayahs:ar.map(function(a,i){var x=a.text;if(n!==1&&n!==9&&i===0)x=x.replace(BISM,"");else x=x.replace(/^﻿/,"");
        return {g:a.number,k:a.numberInSurah,ar:x,tr:tr[i]?tr[i].text:""};})};return cache[n];});}
  function loadIndopak(n){if(ipCache[n])return Promise.resolve(ipCache[n]);
    return fetch("https://api.quran.com/api/v4/quran/verses/indopak?chapter_number="+n).then(function(r){if(!r.ok)throw new Error(r.status);return r.json();})
      .then(function(j){var m={};(j.verses||[]).forEach(function(v){m[+v.verse_key.split(":")[1]]=String(v.text_indopak||"").replace(/[​‏]/g,"").trim();});ipCache[n]=m;return m;});}
  function loading(){root.innerHTML="";root.appendChild(el("div",{class:"v4card",style:"text-align:center"},el("p",{class:"v4muted"},T("q.loading"))));}
  function fail(retry){root.innerHTML="";root.appendChild(el("div",{class:"v4card",style:"text-align:center"},el("p",{style:"color:var(--warn)"},T("q.error")),el("button",{class:"v4btn",type:"button",onclick:retry},T("q.retry"))));}

  // ---------- list
  function renderList(){S.view="list";loading();
    loadList().then(function(list){root.innerHTML="";
      if(S.last&&list[S.last.s-1])root.appendChild(el("button",{class:"v4card gold",type:"button",style:"display:flex;align-items:center;gap:12px;width:100%;text-align:start;color:inherit;font:inherit;cursor:pointer;margin-top:0",onclick:function(){open(S.last.s,S.last.a);}},
        el("span",{style:"width:44px;height:44px;border-radius:14px;display:grid;place-items:center;background:rgba(247,226,166,.14);color:#F7E2A6;flex:none"},ic("play",20)),
        el("span",{style:"flex:1"},el("b",{style:"display:block"},T("q.continue")),el("small",{class:"v4muted"},list[S.last.s-1].en+" · "+num(S.last.s)+":"+num(S.last.a))),
        el("span",{style:"font-family:Amiri,serif;font-size:1.3rem;color:#E8C98A"},list[S.last.s-1].ar.replace(/^سُورَةُ\s*/,""))));
      var tabs=V.seg([["list",t(B("সূরা তালিকা","Surahs","Surah","السور","سورتیں","Sura"))],["marks",t(B("বুকমার্ক","Bookmarks","Penanda","المحفوظات","بک مارکس","Alamisho"))]],S.tab,function(x){S.tab=x;renderList();});tabs.style.marginTop="12px";root.appendChild(tabs);
      var box=el("div",{class:"v4list","data-noi18n":""});
      if(S.tab==="marks"){
        if(!S.bm.length&&!S.bms.length)box.appendChild(el("p",{class:"v4muted"},t(B("আয়াতের পাশে বা সূরার পাশে বুকমার্ক চাপলে এখানে আসবে।","Tap the bookmark next to an ayah or a surah to keep it here.","Tekan penanda pada ayat atau surah.","اضغط الإشارة بجانب الآية أو السورة.","آیت یا سورت کے ساتھ بک مارک دبائیں۔","Gusa alamisho kando ya aya au sura."))));
        S.bms.forEach(function(n){var s=list[n-1];if(s)box.appendChild(row(s,true));});
        S.bm.forEach(function(k){var p=k.split(":"),s=list[+p[0]-1];if(!s)return;box.appendChild(el("button",{class:"v4li",type:"button",style:"width:100%;text-align:start;color:inherit;font:inherit;cursor:pointer",onclick:function(){open(+p[0],+p[1]);}},
          ic("bookmark",20),el("span",{class:"t"},el("b",null,s.en+" · "+t(B("আয়াত ","Ayah ","Ayat ","آية ","آیت ","Aya "))+num(p[1])),el("small",null,s.tr)),el("span",{style:"font-family:Amiri,serif;color:#E2C27A;font-size:1.2rem"},s.ar.replace(/^سُورَةُ\s*/,""))));});
        root.appendChild(box);return;}
      var q=el("input",{class:"v4in",type:"search",placeholder:T("q.search"),"data-noi18n":"",style:"margin-top:10px"});root.appendChild(q);root.appendChild(box);
      function draw(){var f=q.value.trim().toLowerCase().replace(/[-'\s]/g,"");box.innerHTML="";
        list.filter(function(s){if(!f)return true;return String(s.n)===f||(s.en+s.tr).toLowerCase().replace(/[-'\s]/g,"").indexOf(f)>=0||s.ar.indexOf(q.value.trim())>=0;}).forEach(function(s){box.appendChild(row(s));});}
      q.addEventListener("input",draw);draw();
    }).catch(function(){fail(renderList);});}
  function row(s){var on=S.bms.indexOf(s.n)>=0;
    var star=el("button",{class:"v4ico",type:"button","aria-pressed":String(on),"aria-label":t(B("সূরা বুকমার্ক","Bookmark surah","Tanda surah","حفظ السورة","سورت بک مارک","Alamisha sura"))},ic("bookmark",20));
    if(on)star.querySelector("path").setAttribute("fill-opacity","1");
    star.onclick=function(e){e.stopPropagation();var i=S.bms.indexOf(s.n);if(i>=0)S.bms.splice(i,1);else S.bms.push(s.n);save();renderList();};
    var r=el("div",{class:"v4li",role:"button",tabindex:"0",style:"cursor:pointer",onclick:function(){open(s.n);},onkeydown:function(e){if(e.key==="Enter")open(s.n);}},
      el("span",{style:"width:38px;height:38px;border-radius:12px;border:1.5px solid rgba(226,194,122,.5);color:#F4DFA6;display:grid;place-items:center;font-weight:700;font-size:.8rem;transform:rotate(45deg);flex:none"},el("span",{style:"transform:rotate(-45deg)"},num(s.n))),
      el("span",{class:"t"},el("b",null,s.en),el("small",null,s.tr+" · "+(s.t==="Meccan"?T("q.meccan"):T("q.medinan"))+" · "+num(s.c)+" "+T("q.ayahs"))),
      el("span",{style:"font-family:Amiri,serif;font-size:1.25rem;color:#E2C27A"},s.ar.replace(/^سُورَةُ\s*/,"")),star);
    return r;}

  // ---------- reader
  function open(n,goto,autoplay){S.view="read";stopIf(n);loading();try{window.scrollTo({top:0});}catch(e){}
    var jobs=[loadSurah(n)];if(S.mode==="nurani")jobs.push(loadIndopak(n).catch(function(){return null;}));
    return Promise.all(jobs).then(function(r){S.data=r[0];S.ip=r[1]||null;draw(goto);if(autoplay)playAyah(Math.max(0,(goto||1)-1));})
      .catch(function(){fail(function(){open(n,goto,autoplay);});});}
  function stopIf(n){if(S.data&&S.data.n!==n&&!audio.paused&&!S.continuing){audio.pause();S.idx=-1;}}
  function draw(goto){var d=S.data,m=d.meta;root.innerHTML="";
    var top=el("div",{class:"v4row",style:"gap:8px;flex-wrap:wrap"},
      el("button",{class:"v4btn",type:"button",onclick:function(){S.view="list";renderList();}},(V.RTL?"→ ":"← ")+T("q.back")),
      el("span",{style:"flex:1"}),
      V.seg([["usmani",t(B("উসমানি","Uthmani","Uthmani","عثماني","عثمانی","Uthmani"))],["nurani",t(B("নূরানী","Nurani","Nurani","نوراني","نورانی","Nurani"))]],S.mode,function(x){S.mode=x;save();open(d.n,curAyah());}));
    root.appendChild(top);
    var tools=el("div",{class:"v4row",style:"margin-top:8px;gap:8px;flex-wrap:wrap;font-size:.8rem;color:var(--muted)"});
    var trC=el("input",{type:"checkbox"});trC.checked=S.showTr;trC.onchange=function(){S.showTr=trC.checked;save();draw(curAyah());};
    tools.appendChild(el("label",{class:"v4row",style:"gap:6px"},trC,T("q.showTr")));
    tools.appendChild(el("button",{class:"v4pill",type:"button","aria-label":"A-",onclick:function(){S.size=Math.max(0.8,+(S.size-0.1).toFixed(1));save();applySize();}},"A−"));
    tools.appendChild(el("button",{class:"v4pill",type:"button","aria-label":"A+",onclick:function(){S.size=Math.min(1.8,+(S.size+0.1).toFixed(1));save();applySize();}},"A+"));
    var sb=S.bms.indexOf(d.n)>=0;tools.appendChild(el("button",{class:"v4pill"+(sb?" on":""),type:"button","aria-pressed":String(sb),onclick:function(){var i=S.bms.indexOf(d.n);if(i>=0)S.bms.splice(i,1);else S.bms.push(d.n);save();draw(curAyah());}},ic("bookmark",14),t(B("সূরা বুকমার্ক","Bookmark surah","Tanda surah","حفظ السورة","سورت بک مارک","Alamisha sura"))));
    root.appendChild(tools);
    if(S.mode==="nurani")drawNurani(d,m);else drawUsmani(d,m);
    applySize();paintPlayer();
    if(goto>1)setTimeout(function(){var e=document.getElementById("qa-"+goto);if(e)e.scrollIntoView({block:"center"});},80);
    S.last={s:d.n,a:goto||1};save();}
  function curAyah(){return S.idx>=0&&S.data?S.data.ayahs[S.idx].k:(S.last&&S.data&&S.last.s===S.data.n?S.last.a:1);}
  function applySize(){if(listEl)listEl.style.setProperty("--qs",S.size);var p=root.querySelector(".v4page");if(p)p.style.setProperty("--nq",Math.round(27*S.size)+"px");}
  function drawUsmani(d,m){
    root.appendChild(el("div",{class:"v4card gold",style:"text-align:center"},el("div",{style:"font-family:Amiri,serif;font-size:2rem;color:#F4DFA6;line-height:1.4"},m.ar),
      el("b",{style:"display:block"},num(m.n)+". "+m.en+" · "+m.tr),el("div",{class:"v4muted"},(m.t==="Meccan"?T("q.meccan"):T("q.medinan"))+" · "+num(m.c)+" "+T("q.ayahs")),
      d.n!==1&&d.n!==9?el("div",{style:"font-family:Amiri,serif;font-size:1.4rem;color:#E2C27A;margin-top:8px"},"بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"):null));
    listEl=el("div",{"data-noi18n":""});
    d.ayahs.forEach(function(a,i){var bm=S.bm.indexOf(d.n+":"+a.k)>=0;
      var bmB=el("button",{class:"v4ico",type:"button","aria-pressed":String(bm),"aria-label":T("q.bookmark")},ic("bookmark",20));if(bm)bmB.querySelector("path").setAttribute("fill-opacity","1");
      bmB.onclick=function(){toggleBm(a.k);draw(a.k);};
      listEl.appendChild(el("div",{class:"v4card",id:"qa-"+a.k,style:i===S.idx?"border-color:rgba(226,194,122,.6);background:linear-gradient(160deg,#164744,#0C2B2E)":""},
        el("div",{class:"v4row",style:"justify-content:space-between"},el("span",{style:"min-width:32px;height:32px;border-radius:10px;background:rgba(226,194,122,.14);color:#F4DFA6;display:grid;place-items:center;font-size:.8rem;font-weight:700"},num(a.k)),
          el("span",{class:"v4row",style:"gap:2px"},el("button",{class:"v4ico",type:"button","aria-label":T("q.play"),style:"color:#9FE3CF",onclick:function(){playAyah(i);}},ic("play",18)),bmB)),
        el("div",{lang:"ar",dir:"rtl",style:"font-family:Amiri,serif;font-size:calc(1.55rem * var(--qs,1));line-height:2.1;color:#F8F1E4;margin-top:6px"},a.ar,el("span",{style:"color:#E8C98A;font-size:.8em"}," ﴿"+AR(a.k)+"﴾")),
        S.showTr&&a.tr?el("div",{dir:RTLTR?"rtl":null,style:"font-size:.95rem;line-height:1.65;color:#CFE0DA;margin-top:4px"},a.tr):null));});
    root.appendChild(listEl);}
  function drawNurani(d,m){var ip=S.ip||{};listEl=null;
    var txt=el("div",{class:"txt",lang:"ar"});
    d.ayahs.forEach(function(a,i){var s=el("span",{class:"ay"+(i===S.idx?" cur":""),id:"qa-"+a.k,role:"button",tabindex:"0",onclick:function(){playAyah(i);},onkeydown:function(e){if(e.key==="Enter")playAyah(i);}},(ip[a.k]||a.ar)+" ",el("span",{class:"mk"},AR(a.k)));
      txt.appendChild(s);txt.appendChild(document.createTextNode(" "));});
    root.appendChild(el("div",{class:"v4page","data-noi18n":""},el("div",{class:"b1"},el("div",{class:"b2"},
      el("div",{class:"top"},el("span",null,"سُوْرَةُ "+m.ar.replace(/^سُورَةُ\s*/,"")),el("span",null,t(B("নূরানী","Nurani","Nurani","نوراني","نورانی","Nurani"))),el("span",null,"اَلْجُزْءُ "+AR(d.juz))),
      el("div",{class:"cart"},el("span",null,"اٰيَاتُهَا",el("br"),AR(m.c)),el("span",{class:"nm"},"سُوْرَةُ "+m.ar.replace(/^سُورَةُ\s*/,"")+" "+(m.t==="Meccan"?"مَكِّيَّةٌ":"مَدَنِيَّةٌ")),el("span",null,"رُكُوْعَاتُهَا",el("br"),AR(d.ruku))),
      d.n!==1&&d.n!==9?el("div",{class:"bis"},"بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ"):null,txt,
      el("div",{class:"pg"},el("span",null,el("i",null,AR(d.page))))))));
    var c=d.ayahs[S.idx>=0?S.idx:0];
    if(S.showTr&&c&&c.tr)root.appendChild(el("div",{class:"v4card",id:"q-curtr"},el("div",{class:"v4row",style:"align-items:flex-start"},el("span",{style:"min-width:32px;height:32px;border-radius:10px;background:rgba(226,194,122,.14);color:#F4DFA6;display:grid;place-items:center;font-size:.8rem;font-weight:700"},num(c.k)),el("span",{dir:RTLTR?"rtl":null,style:"flex:1;line-height:1.65"},c.tr))));
    root.appendChild(el("p",{class:"v4muted"},t(B("আয়াতে চাপ দিলে সেখান থেকে তিলাওয়াত শুরু হবে। নূরানী লেখা: IndoPak (quran.com)।","Tap an ayah to recite from there. Nurani script: IndoPak (quran.com).","Ketik ayat untuk mula. Skrip IndoPak.","اضغط على آية لبدء التلاوة.","آیت پر ٹیپ کریں۔ رسم الخط: انڈوپاک۔","Gusa aya kuanza kusoma."))));}
  function toggleBm(k){var key=S.data.n+":"+k,j=S.bm.indexOf(key);if(j>=0)S.bm.splice(j,1);else S.bm.push(key);S.last={s:S.data.n,a:k};save();}

  // ---------- audio
  function src(a){var q=QARI[S.qari];return "https://cdn.islamic.network/quran/audio/"+q[1]+"/"+q[0]+"/"+a.g+".mp3";}
  function playAyah(i){var d=S.data;if(!d)return;if(i>=d.ayahs.length){if(S.autoSurah&&d.n<114){S.continuing=true;open(d.n+1,1,true).then(function(){S.continuing=false;});return;}stop();return;}
    if(i<0)i=0;S.idx=i;audio.src=src(d.ayahs[i]);var p=audio.play();if(p&&p.catch)p.catch(function(){paintPlayer();});
    S.last={s:d.n,a:d.ayahs[i].k};save();mark(true);paintPlayer();meta();}
  function stop(){audio.pause();S.idx=-1;mark();paintPlayer();}
  function toggle(){if(!S.data)return;if(!audio.src||S.idx<0){playAyah(Math.max(0,(curAyah()||1)-1));return;}if(audio.paused)audio.play().catch(function(){});else audio.pause();}
  function mark(scroll){if(!root||!S.data)return;root.querySelectorAll(".ay.cur").forEach(function(e){e.classList.remove("cur");});
    if(S.idx<0)return;var k=S.data.ayahs[S.idx].k,e=document.getElementById("qa-"+k);if(!e)return;
    if(S.mode==="nurani"){e.classList.add("cur");var ct=document.getElementById("q-curtr");if(ct&&S.showTr){var a=S.data.ayahs[S.idx];ct.querySelector("span").textContent=num(a.k);ct.querySelectorAll("span")[1].textContent=a.tr;}}
    else{root.querySelectorAll("[id^=qa-]").forEach(function(x){x.style.borderColor="";x.style.background="";});e.style.borderColor="rgba(226,194,122,.6)";e.style.background="linear-gradient(160deg,#164744,#0C2B2E)";}
    if(scroll&&!document.hidden&&root.offsetParent)e.scrollIntoView({block:"center",behavior:"smooth"});}
  audio.addEventListener("ended",function(){if(S.auto)playAyah(S.idx+1);else paintPlayer();});
  audio.addEventListener("play",paintPlayer);audio.addEventListener("pause",paintPlayer);
  audio.addEventListener("error",function(){V.toast(T("q.error"));paintPlayer();});
  function meta(){if(!("mediaSession" in navigator)||!S.data)return;var m=S.data.meta,a=S.data.ayahs[S.idx]||{k:1};
    try{navigator.mediaSession.metadata=new MediaMetadata({title:m.en+" · "+a.k,artist:QARI[S.qari][2],album:"Amalnama · Quran",artwork:[{src:"icon-192.png",sizes:"192x192",type:"image/png"},{src:"icon-512.png",sizes:"512x512",type:"image/png"}]});
      navigator.mediaSession.setActionHandler("play",function(){audio.play();});navigator.mediaSession.setActionHandler("pause",function(){audio.pause();});
      navigator.mediaSession.setActionHandler("nexttrack",function(){if(S.data.n<114){S.continuing=true;open(S.data.n+1,1,true).then(function(){S.continuing=false;});}});
      navigator.mediaSession.setActionHandler("previoustrack",function(){if(S.data.n>1){S.continuing=true;open(S.data.n-1,1,true).then(function(){S.continuing=false;});}});}catch(e){}}

  // ---------- player bar (stays above the nav while the Quran view is open)
  function paintPlayer(){if(!player){player=el("div",{id:"q-player",style:"position:fixed;left:10px;right:10px;bottom:calc(90px + env(safe-area-inset-bottom,0px));z-index:65;max-width:700px;margin:0 auto;padding:10px 12px;border-radius:24px;background:#0B2A2D;border:1px solid rgba(226,194,122,.35);box-shadow:0 14px 30px rgba(0,0,0,.45)","data-noi18n":""});document.body.appendChild(player);}
    var showing=root&&!root.hidden&&S.view==="read";player.hidden=!showing&&audio.paused;
    if(player.hidden)return;player.innerHTML="";var d=S.data,playing=!audio.paused;
    player.appendChild(el("div",{class:"v4row",style:"gap:6px"},
      el("button",{type:"button",style:"flex:1;min-width:0;min-height:44px;border:0;background:transparent;text-align:start;padding:0;color:inherit;font:inherit;cursor:pointer",onclick:qariSheet},
        el("span",{style:"display:block;font-size:.72rem;color:#9FE3CF"},t(B("ক্বারী · বদলাতে চাপো","Qari · tap to change","Qari · ketik untuk tukar","القارئ · اضغط للتغيير","قاری · بدلنے کو دبائیں","Qari · gusa kubadilisha"))),
        el("span",{style:"display:block;font-weight:700;font-size:.9rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"},QARI[S.qari][2]),
        d?el("span",{style:"display:block;font-size:.72rem;color:var(--muted)"},d.meta.en+(S.idx>=0?" · "+num(d.ayahs[S.idx].k):"")):null),
      el("button",{class:"v4ico",type:"button","aria-label":t(B("আগের সূরা","Previous surah","Surah sebelum","السورة السابقة","پچھلی سورت","Sura iliyotangulia")),onclick:function(){if(d&&d.n>1)open(d.n-1,1,playing);}},ic("prev",22)),
      el("button",{type:"button","aria-label":playing?T("q.pause"):T("q.play"),onclick:toggle,style:"width:52px;height:52px;border-radius:50%;border:0;background:linear-gradient(135deg,#F7E2A6,#C9A050);color:#1A1406;display:grid;place-items:center;cursor:pointer;flex:none"},ic(playing?"pause":"play",22)),
      el("button",{class:"v4ico",type:"button","aria-label":t(B("পরের সূরা","Next surah","Surah seterusnya","السورة التالية","اگلی سورت","Sura inayofuata")),onclick:function(){if(d&&d.n<114)open(d.n+1,1,playing);}},ic("next",22))));
    var au=el("button",{class:"v4pill"+(S.autoSurah?" on":""),type:"button","aria-pressed":String(S.autoSurah),onclick:function(){S.autoSurah=!S.autoSurah;save();paintPlayer();}},t(B("সূরার পর সূরা","Surah after surah","Surah demi surah","سورة بعد سورة","سورت کے بعد سورت","Sura baada ya sura")));
    var aa=el("button",{class:"v4pill"+(S.auto?" on":""),type:"button","aria-pressed":String(S.auto),onclick:function(){S.auto=!S.auto;save();paintPlayer();}},T("q.autoNext"));
    player.appendChild(el("div",{class:"v4row",style:"gap:6px;margin-top:8px;flex-wrap:wrap"},au,aa,el("span",{style:"display:inline-flex;align-items:center;min-height:30px;padding:0 10px;border-radius:999px;background:rgba(63,181,155,.16);color:#9FE3CF;font-size:.72rem;font-weight:600"},t(B("স্ক্রিন বন্ধ হলেও চলবে","Keeps playing with screen off","Terus main walau skrin mati","يعمل مع إطفاء الشاشة","اسکرین بند ہو تب بھی","Inaendelea skrini ikizimwa")))));}
  function qariSheet(){var box=el("div",{style:"display:grid;gap:8px"});
    var sh=V.sheet(t(B("ক্বারী বেছে নাও","Choose a qari","Pilih qari","اختر القارئ","قاری منتخب کریں","Chagua qari")),box);
    QARI.forEach(function(q,i){var on=i===S.qari;box.appendChild(el("button",{type:"button","aria-pressed":String(on),style:"min-height:56px;display:flex;align-items:center;gap:12px;padding:0 14px;border-radius:16px;border:1.5px solid "+(on?"#E2C27A":"rgba(255,255,255,.08)")+";background:"+(on?"rgba(226,194,122,.12)":"#103538")+";text-align:start;color:inherit;font:inherit;cursor:pointer",
      onclick:function(){S.qari=i;save();sh.close();if(!audio.paused&&S.idx>=0){var t0=S.idx;playAyah(t0);}else paintPlayer();}},
      el("span",{style:"width:36px;height:36px;border-radius:50%;background:#13403F;color:#E2C27A;display:grid;place-items:center;font-weight:700;flex:none"},q[2].charAt(0)),
      el("span",{style:"flex:1"},el("b",{style:"display:block;font-weight:600"},q[2]),el("small",{class:"v4muted"},t(q[3])))));});}

  // ---------- module
  var pending=null;
  X.register("quran",{open:function(r){root=r;r.setAttribute("data-noi18n","");
    if(pending){var p=pending;pending=null;r.dataset.v4="1";open(p[0],p[1],p[2]);return;}
    if(!r.dataset.v4){r.dataset.v4="1";if(S.view==="read"&&S.data)draw(curAyah());else renderList();}else paintPlayer();}});
  var ps=window.setView;window.setView=function(v){ps(v);if(player)paintPlayer();};
  X.quran={open:function(n,a,play){pending=[n,a||1,!!play];window.setView("quran");}};
  X.quranAudio=audio;
})();
