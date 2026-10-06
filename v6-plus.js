/* Amalnama v6+ · Qibla compass · nearby Masjid & Surau tracker · Hifz (Quran memorisation) tracker · Family shared budgets & goals */
(function(){
  var V=window.V4;if(!V)return;var t=V.t,num=V.num,el=V.el,ic=V.ic;
  var B=function(bn,en,ms,ar,ur,sw){return [bn,en,ms||en,ar||en,ur||en,sw||en];};
  function T(bn,en,ms,ar,ur,sw){return t(B(bn,en,ms,ar,ur,sw));}
  function svgI(paths,size,fill){var NS="http://www.w3.org/2000/svg",s=document.createElementNS(NS,"svg");s.setAttribute("viewBox","0 0 24 24");s.setAttribute("width",size||26);s.setAttribute("height",size||26);s.setAttribute("aria-hidden","true");
    [].concat(paths).forEach(function(d){var p=document.createElementNS(NS,"path");p.setAttribute("d",d);p.setAttribute("fill",fill?"currentColor":"none");if(!fill){p.setAttribute("stroke","currentColor");p.setAttribute("stroke-width","1.8");p.setAttribute("stroke-linecap","round");p.setAttribute("stroke-linejoin","round");}s.appendChild(p);});return s;}
  var ICO={qibla:["M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19z","M12 6l2.6 6-2.6 6-2.6-6z","M12 12h.01"],
    mosque:["M4 20.5V12a8 8 0 0 1 16 0v8.5","M2.5 20.5h19","M12 4V2.5","M10 20.5v-4a2 2 0 0 1 4 0v4","M7 13h.01M17 13h.01"],
    hifz:["M4 5.5A2 2 0 0 1 6 3.5h13v15H6a2 2 0 0 0-2 2z","M4 20.5V5.5","M9 8.5l2 2 4-4","M8.5 14h6"],
    family:["M8 8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z","M16.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z","M2.5 20a5.5 5.5 0 0 1 11 0","M13.5 20a4.5 4.5 0 0 1 8 -2.8"],
    pin:["M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z","M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"],
    star:["M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8L3.5 9.7l5.9-.9z"],
    check:["M5 12.5l4.5 4.5L19 7.5"],nav:["M3.5 11.5L20.5 3.5l-8 17-1.8-7.2z"]};
  function save(){V.save();}
  function D(){var v=V.V();v.plus=v.plus||{};return v.plus;}
  function km(m){return m<1000?num(Math.round(m))+" m":num((m/1000).toFixed(m<10000?1:0))+" km";}
  function hav(a,b,c,d){var R=6371e3,r=Math.PI/180,x=(c-a)*r,y=(d-b)*r,h=Math.sin(x/2)*Math.sin(x/2)+Math.cos(a*r)*Math.cos(c*r)*Math.sin(y/2)*Math.sin(y/2);return 2*R*Math.asin(Math.sqrt(h));}
  function bearing(a,b,c,d){var r=Math.PI/180,y=Math.sin((d-b)*r)*Math.cos(c*r),x=Math.cos(a*r)*Math.sin(c*r)-Math.sin(a*r)*Math.cos(c*r)*Math.cos((d-b)*r);return (Math.atan2(y,x)/r+360)%360;}
  function compass16(deg){var n=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];return n[Math.round(deg/22.5)%16];}
  // location: GPS first, then the place used for prayer times
  function locate(){return new Promise(function(res,rej){
    function fallback(){try{var a=JSON.parse(localStorage.getItem("am-azan")||"{}").api;if(a&&a.lat!=null)return res({lat:+a.lat,lng:+a.lng,src:"azan"});}catch(e){}var c=D().loc;if(c)return res({lat:c.lat,lng:c.lng,src:"saved"});rej(new Error("noloc"));}
    if(!navigator.geolocation)return fallback();
    navigator.geolocation.getCurrentPosition(function(p){var o={lat:p.coords.latitude,lng:p.coords.longitude,src:"gps",acc:p.coords.accuracy};D().loc={lat:o.lat,lng:o.lng};save();res(o);},fallback,{enableHighAccuracy:true,timeout:15000,maximumAge:300000});});}
  function card(cls){var c=el("div",{class:"v4card "+(cls||"")});for(var i=1;i<arguments.length;i++)if(arguments[i])c.appendChild(arguments[i]);return c;}
  function msg(text){return el("p",{class:"v4muted",style:"margin:6px 0"},text);}

  // =====================================================================
  // 1 · QIBLA COMPASS
  // =====================================================================
  var KAABA=[21.422487,39.826206],qState={heading:null,on:false,handler:null};
  function stopCompass(){if(qState.handler){window.removeEventListener("deviceorientationabsolute",qState.handler,true);window.removeEventListener("deviceorientation",qState.handler,true);qState.handler=null;}}
  V.section("qibla",{open:function(r){r.innerHTML="";stopCompass();
    r.appendChild(V.head(T("কিবলা","Qibla","Kiblat","القبلة","قبلہ","Kibla"),T("কাবার দিক · লাইভ কম্পাস","Direction of the Kaaba · live compass","Arah Kaabah · kompas langsung","اتجاه الكعبة · بوصلة حية","کعبہ کی سمت · لائیو کمپاس","Mwelekeo wa Kaaba"),"amal"));
    var stage=el("div",{class:"v9q"});r.appendChild(stage);
    var info=el("div",{class:"v9qi"});r.appendChild(info);
    var tips=card("",el("h2",null,T("সঠিক দিক পেতে","For an accurate direction","Untuk arah tepat","لدقة أفضل","درست سمت کے لیے","Kwa usahihi")),
      el("ul",{class:"v9ul"},el("li",null,T("ফোন সমতল করে ধরো, ধাতব জিনিস ও চুম্বক থেকে দূরে রাখো।","Hold the phone flat, away from metal and magnets.","Pegang telefon rata, jauh dari logam.","أمسك الهاتف مسطحًا بعيدًا عن المعادن.","فون کو سیدھا رکھیں، دھات سے دور۔","Shika simu bapa, mbali na chuma.")),
        el("li",null,T("কম্পাস ভুল দেখালে ফোনটা বাতাসে ৮ আকারে কয়েকবার ঘোরাও।","If it looks wrong, move the phone in a figure 8 to calibrate.","Gerakkan telefon membentuk angka 8 untuk kalibrasi.","حرّك الهاتف على شكل رقم 8 للمعايرة.","غلط لگے تو فون کو 8 کی شکل میں گھمائیں۔","Zungusha simu kama namba 8.")),
        el("li",null,T("দিকটা মিলে গেলে কাবা সোনালি হয়ে জ্বলবে আর ফোন হালকা কাঁপবে।","When you face the Qibla, the Kaaba glows gold and the phone vibrates.","Apabila tepat, Kaabah bersinar dan telefon bergetar.","عند الاتجاه الصحيح تتوهج الكعبة ويهتز الهاتف.","سمت درست ہو تو کعبہ چمکے گا۔","Ukielekea sawa, Kaaba itang'aa."))));
    r.appendChild(tips);
    stage.appendChild(el("div",{class:"v9qload"},el("span",{class:"sp"}),T("লোকেশন খোঁজা হচ্ছে…","Finding your location…","Mencari lokasi…","جارٍ تحديد الموقع…","لوکیشن تلاش…","Inatafuta mahali…")));
    locate().then(function(loc){var qb=bearing(loc.lat,loc.lng,KAABA[0],KAABA[1]),dist=hav(loc.lat,loc.lng,KAABA[0],KAABA[1]);
      stage.innerHTML="";var NS="http://www.w3.org/2000/svg";
      var dial=document.createElementNS(NS,"svg");dial.setAttribute("viewBox","0 0 300 300");dial.setAttribute("class","dial");
      var g=document.createElementNS(NS,"g");dial.appendChild(g);
      function sv(tag,a){var e=document.createElementNS(NS,tag);for(var k in a)e.setAttribute(k,a[k]);return e;}
      g.appendChild(sv("circle",{cx:150,cy:150,r:140,fill:"url(#qg)",stroke:"rgba(232,201,138,.55)","stroke-width":2}));
      var defs=sv("defs",{}),rg=sv("radialGradient",{id:"qg",cx:"50%",cy:"40%",r:"60%"});rg.appendChild(sv("stop",{offset:"0","stop-color":"#1B5A50"}));rg.appendChild(sv("stop",{offset:"1","stop-color":"#0A2427"}));defs.appendChild(rg);dial.insertBefore(defs,g);
      for(var d=0;d<360;d+=5){var big=d%30===0,a=d*Math.PI/180,r1=big?120:128,r2=136;g.appendChild(sv("line",{x1:150+r1*Math.sin(a),y1:150-r1*Math.cos(a),x2:150+r2*Math.sin(a),y2:150-r2*Math.cos(a),stroke:big?"#E8C98A":"rgba(232,201,138,.4)","stroke-width":big?2:1}));}
      [["N",0,"#E8836B"],["E",90,"#F3EEDF"],["S",180,"#F3EEDF"],["W",270,"#F3EEDF"]].forEach(function(c){var a=c[1]*Math.PI/180;var tx=sv("text",{x:150+104*Math.sin(a),y:150-104*Math.cos(a)+6,"text-anchor":"middle","font-size":17,"font-weight":700,fill:c[2],"font-family":"Marcellus,serif"});tx.textContent=c[0];g.appendChild(tx);});
      // qibla needle + kaaba
      var qa=qb*Math.PI/180,kx=150+92*Math.sin(qa),ky=150-92*Math.cos(qa);
      g.appendChild(sv("line",{x1:150,y1:150,x2:kx,y2:ky,stroke:"#F7E2A6","stroke-width":4,"stroke-linecap":"round"}));
      var kb=sv("g",{transform:"translate("+kx+" "+ky+")"});kb.appendChild(sv("rect",{x:-13,y:-13,width:26,height:26,rx:3,fill:"#111",stroke:"#E8C98A","stroke-width":2}));kb.appendChild(sv("rect",{x:-13,y:-6,width:26,height:4,fill:"#E8C98A"}));g.appendChild(kb);
      g.appendChild(sv("circle",{cx:150,cy:150,r:7,fill:"#E8C98A"}));
      var wrap=el("div",{class:"dialwrap"});wrap.appendChild(dial);wrap.appendChild(el("div",{class:"pointer"}));stage.appendChild(wrap);
      var status=el("div",{class:"v9qs"},T("কম্পাস চালু করতে নিচে চাপো","Tap below to start the compass","Ketik untuk mula kompas","اضغط لتشغيل البوصلة","کمپاس شروع کرنے کو دبائیں","Gusa kuanzisha dira"));stage.appendChild(status);
      info.innerHTML="";info.appendChild(el("div",{class:"v9qgrid"},
        el("div",null,el("small",null,T("কিবলার দিক","Qibla direction","Arah kiblat","اتجاه القبلة","قبلہ کی سمت","Mwelekeo")),el("b",null,num(Math.round(qb))+"° "+compass16(qb))),
        el("div",null,el("small",null,T("মক্কার দূরত্ব","Distance to Makkah","Jarak ke Makkah","المسافة إلى مكة","مکہ تک فاصلہ","Umbali hadi Makka")),el("b",null,num(Math.round(dist/1000).toLocaleString("en-US"))+" km")),
        el("div",null,el("small",null,T("তোমার অবস্থান","Your location","Lokasi anda","موقعك","آپ کا مقام","Mahali pako")),el("b",null,loc.src==="gps"?"GPS ✓":T("আনুমানিক","Approximate","Anggaran","تقريبي","تخمینی","Takriban")))));
      var aligned=false;
      function paint(h){qState.heading=h;g.setAttribute("transform","rotate("+(-h)+" 150 150)");var diff=Math.abs(((qb-h+540)%360)-180);var ok=diff<5;
        wrap.classList.toggle("ok",ok);status.textContent=ok?T("✓ তুমি কিবলার দিকে আছো","✓ You are facing the Qibla","✓ Anda menghadap kiblat","✓ أنت باتجاه القبلة","✓ آپ قبلہ رخ ہیں","✓ Umeelekea Kibla"):(T("আরও ঘোরো","Turn","Pusing","استدر","مزید گھمائیں","Geuka")+" "+num(Math.round(diff))+"° "+(((qb-h+360)%360)<180?T("ডানে →","right →","ke kanan →","يمينًا ←","دائیں →","kulia →"):T("← বামে","← left","← ke kiri","→ يسارًا","← بائیں","← kushoto")));
        if(ok&&!aligned&&navigator.vibrate)navigator.vibrate(60);aligned=ok;}
      function startCompass(){stopCompass();var got=false;
        qState.handler=function(e){var h=null;if(e.webkitCompassHeading!=null)h=e.webkitCompassHeading;else if(e.absolute&&e.alpha!=null)h=360-e.alpha;else if(e.type==="deviceorientationabsolute"&&e.alpha!=null)h=360-e.alpha;if(h==null)return;got=true;
          var so=(screen.orientation&&screen.orientation.angle)||0;paint((h+so+360)%360);};
        if("ondeviceorientationabsolute" in window)window.addEventListener("deviceorientationabsolute",qState.handler,true);else window.addEventListener("deviceorientation",qState.handler,true);
        setTimeout(function(){if(!got){status.textContent=T("এই ডিভাইসে কম্পাস নেই — উপরের ডিগ্রি দেখে উত্তর (N) থেকে দিক মেলাও।","No compass on this device — use the degrees above, measured from North.","Tiada kompas — guna darjah dari Utara.","لا توجد بوصلة — استخدم الدرجات من الشمال.","کمپاس نہیں — شمال سے ڈگری دیکھیں۔","Hakuna dira — tumia nyuzi kutoka Kaskazini.");paint(0);wrap.classList.remove("ok");}},2500);}
      var go=el("button",{class:"v4btn gold",type:"button",style:"justify-content:center;width:100%;margin-top:10px",onclick:function(){
          if(window.DeviceOrientationEvent&&typeof DeviceOrientationEvent.requestPermission==="function")DeviceOrientationEvent.requestPermission().then(function(p){if(p==="granted")startCompass();}).catch(function(){});else startCompass();go.remove();}},
        svgI(ICO.qibla,18),T("কম্পাস চালু করো","Start compass","Mula kompas","تشغيل البوصلة","کمپاس شروع کریں","Anzisha dira"));
      stage.appendChild(go);paint(0);status.textContent=T("কম্পাস চালু করতে নিচে চাপো","Tap below to start the compass","Ketik untuk mula kompas","اضغط لتشغيل البوصلة","کمپاس شروع کرنے کو دبائیں","Gusa kuanzisha dira");
      if(!(window.DeviceOrientationEvent&&typeof DeviceOrientationEvent.requestPermission==="function")){startCompass();go.remove();status.textContent=T("কম্পাস চালু হচ্ছে…","Starting compass…","Memulakan kompas…","جارٍ تشغيل البوصلة…","کمپاس شروع…","Inaanzisha dira…");}
    }).catch(function(){stage.innerHTML="";stage.appendChild(msg(T("লোকেশন পাওয়া যায়নি। লোকেশনের অনুমতি দাও বা আযান পেজে শহর সেট করো।","Couldn't get your location. Allow location, or set your city on the Azan page.","Lokasi tidak diperoleh. Benarkan lokasi atau tetapkan bandar.","تعذر تحديد الموقع. اسمح بالموقع أو حدد مدينتك.","لوکیشن نہیں ملی۔ اجازت دیں یا شہر سیٹ کریں۔","Mahali hapajapatikana.")));
      stage.appendChild(el("button",{class:"v4btn",type:"button",onclick:function(){window.setView("azan");}},T("আযান ও শহর সেট করো","Set city on Azan page","Tetapkan bandar","حدد المدينة","شہر سیٹ کریں","Weka mji")));});}});
  V.space("qibla","amal");
  var pv=window.setView;window.setView=function(v){if(v!=="qibla")stopCompass();pv(v);};

  // =====================================================================
  // 2 · MASJID & SURAU TRACKER (OpenStreetMap) + jamaah log
  // =====================================================================
  var OVP=["https://overpass-api.de/api/interpreter","https://maps.mail.ru/osm/tools/overpass/api/interpreter","https://overpass.private.coffee/api/interpreter","https://overpass.kumi.systems/api/interpreter"];
  function overpass(lat,lng,rad){var q='[out:json][timeout:20];nwr["amenity"="place_of_worship"]["religion"="muslim"](around:'+rad+','+lat.toFixed(5)+','+lng.toFixed(5)+');out center tags 120;';
    function tryAt(i){var ac=window.AbortController?new AbortController():null,tm=ac&&setTimeout(function(){ac.abort();},12000);return fetch(OVP[i]+"?data="+encodeURIComponent(q),{signal:ac&&ac.signal}).then(function(r){clearTimeout(tm);if(!r.ok)throw new Error(r.status);return r.json();}).catch(function(e){clearTimeout(tm);if(i<OVP.length-1)return tryAt(i+1);throw e;});}
    var ck="am-mq-"+lat.toFixed(2)+","+lng.toFixed(2)+","+rad;return tryAt(0).then(function(j){try{localStorage.setItem(ck,JSON.stringify(j));}catch(e){}return j;},function(e){var c=null;try{c=JSON.parse(localStorage.getItem(ck)||"null");}catch(x){}if(c)return c;throw e;}).then(function(j){return (j.elements||[]).map(function(e){var la=e.lat!=null?e.lat:e.center&&e.center.lat,lo=e.lon!=null?e.lon:e.center&&e.center.lon,tg=e.tags||{};
      var nm=tg["name:"+V.L]||tg.name||tg["name:en"]||"";var su=/surau|musolla|musalla|musholla|mushola|prayer room|bilik solat|namazkhana|জামাতখানা|nam?azghar/i.test(nm+" "+(tg.building||"")+" "+(tg.place_of_worship||""))||tg.building==="surau";
      return {id:e.type+"/"+e.id,lat:la,lng:lo,name:nm,type:su?"surau":"masjid",addr:[tg["addr:housenumber"],tg["addr:street"],tg["addr:city"]].filter(Boolean).join(", ")};}).filter(function(m){return m.lat!=null;});});}
  function jlog(){var d=D();d.jamaah=d.jamaah||{};return d.jamaah;}
  function weekStats(){var j=jlog(),n=0,places={},today=V.ymd(),t0=new Date(today+"T12:00:00").getTime();
    Object.keys(j).forEach(function(day){var dt=new Date(day+"T12:00:00").getTime();if(t0-dt<=6*864e5&&t0-dt>=0){(j[day]||[]).forEach(function(x){n++;places[x.m]=1;});}});
    var all={};Object.keys(j).forEach(function(day){(j[day]||[]).forEach(function(x){all[x.m]=1;});});
    return {week:n,today:(j[today]||[]).length,places:Object.keys(places).length,ever:Object.keys(all).length};}
  var PRN=[["fajr",B("ফজর","Fajr","Subuh","الفجر","فجر","Alfajiri")],["dhuhr",B("যোহর","Dhuhr","Zohor","الظهر","ظہر","Adhuhuri")],["asr",B("আসর","Asr","Asar","العصر","عصر","Alasiri")],["maghrib",B("মাগরিব","Maghrib","Maghrib","المغرب","مغرب","Magharibi")],["isha",B("এশা","Isha","Isyak","العشاء","عشاء","Isha")],["jumuah",B("জুমা","Jumu'ah","Jumaat","الجمعة","جمعہ","Ijumaa")]];
  function logPrayer(m,done){var box=el("div",{class:"v9chips"});PRN.forEach(function(p){box.appendChild(el("button",{type:"button",onclick:function(){var j=jlog(),d=V.ymd();j[d]=j[d]||[];
      if(!j[d].some(function(x){return x.p===p[0];}))j[d].push({p:p[0],m:m.id,n:(m.name||"").slice(0,60)});save();sh.close();V.toast(T("জামাতে নামাজ লেখা হলো ✓","Prayer in jamaah logged ✓","Solat berjemaah dicatat ✓","سُجّلت صلاة الجماعة ✓","باجماعت نماز درج ✓","Imeandikwa ✓"));if(done)done();}},t(p[1])));});
    var sh=V.sheet(T("কোন নামাজ জামাতে পড়লে?","Which prayer did you pray in jamaah?","Solat berjemaah yang mana?","أي صلاة صليت جماعة؟","کون سی نماز باجماعت؟","Swala ipi kwa jamaa?"),el("div",null,el("p",{class:"v4muted",style:"margin:0 0 10px"},(m.name||T("নামহীন","Unnamed","Tanpa nama","بلا اسم","بے نام","Bila jina"))),box));}
  V.section("mosques",{open:function(r){r.innerHTML="";var st={rad:2000,filter:"all",list:[],loc:null};
    r.appendChild(V.head(T("মসজিদ ও সুরাউ","Masjid & Surau","Masjid & Surau","المساجد والمصليات","مسجد و مصلیٰ","Misikiti"),T("কাছের মসজিদ খোঁজো · জামাত ট্র্যাক করো","Find nearby · track your jamaah","Cari berhampiran · jejak jemaah","الأقرب · تتبع الجماعة","قریبی · جماعت ٹریک","Karibu · fuatilia jamaa"),"amal"));
    var ws=weekStats();
    r.appendChild(el("div",{class:"v9stats"},
      el("div",null,el("b",null,num(ws.today)),el("small",null,T("আজ জামাতে","In jamaah today","Berjemaah hari ini","جماعة اليوم","آج باجماعت","Leo kwa jamaa"))),
      el("div",null,el("b",null,num(ws.week)),el("small",null,T("এই সপ্তাহে","This week","Minggu ini","هذا الأسبوع","اس ہفتے","Wiki hii"))),
      el("div",null,el("b",null,num(ws.ever)),el("small",null,T("মসজিদ গিয়েছ","Mosques visited","Masjid dilawati","مساجد زرتها","مساجد گئے","Misikiti")))));
    var map=el("div",{class:"v9map"});r.appendChild(map);
    var bar=el("div",{class:"v9bar"});r.appendChild(bar);
    var list=el("div",{class:"v4list",style:"margin-top:10px"});r.appendChild(list);
    r.appendChild(el("p",{class:"v4muted",style:"font-size:.72rem;text-align:center;margin-top:10px"},"© OpenStreetMap contributors · "+T("ভুল বা নতুন মসজিদ? openstreetmap.org-এ যোগ করা যায়","Missing a masjid? Anyone can add it on openstreetmap.org","Tiada? Tambah di openstreetmap.org","مفقود؟ أضفه في openstreetmap.org","غائب؟ openstreetmap.org پر شامل کریں","Haupo? Ongeza openstreetmap.org")));
    function chips(){bar.innerHTML="";
      [[1000,"1 km"],[2000,"2 km"],[5000,"5 km"],[10000,"10 km"]].forEach(function(x){bar.appendChild(el("button",{type:"button","aria-pressed":String(st.rad===x[0]),onclick:function(){st.rad=x[0];load();}},x[1]));});
      bar.appendChild(el("span",{class:"sep"}));
      [["all",T("সব","All","Semua","الكل","سب","Zote")],["masjid",T("মসজিদ","Masjid","Masjid","مسجد","مسجد","Msikiti")],["surau",T("সুরাউ","Surau","Surau","مصلى","مصلیٰ","Surau")],["fav",T("★ প্রিয়","★ Saved","★ Disimpan","★ المحفوظة","★ محفوظ","★ Vipendwa")]].forEach(function(x){bar.appendChild(el("button",{type:"button","aria-pressed":String(st.filter===x[0]),onclick:function(){st.filter=x[0];chips();draw();}},x[1]));});}
    function favs(){var d=D();d.favM=d.favM||{};return d.favM;}
    function draw(){list.innerHTML="";var f=favs();var L=st.list.filter(function(m){return st.filter==="all"||(st.filter==="fav"?!!f[m.id]:m.type===st.filter);});
      if(st.filter==="fav")Object.keys(f).forEach(function(id){if(!L.some(function(m){return m.id===id;}))L.push(f[id]);});
      L.forEach(function(m){if(st.loc){m.dist=hav(st.loc.lat,st.loc.lng,m.lat,m.lng);m.brg=bearing(st.loc.lat,st.loc.lng,m.lat,m.lng);}});L.sort(function(a,b){return (a.dist||0)-(b.dist||0);});
      if(!L.length){list.appendChild(msg(st.loading?"…":T("এই দূরত্বে কিছু পাওয়া যায়নি — দূরত্ব বাড়াও।","Nothing found in this radius — try a larger distance.","Tiada — cuba jarak lebih jauh.","لا شيء — جرّب مسافة أكبر.","کچھ نہیں ملا — فاصلہ بڑھائیں۔","Hakuna — ongeza umbali.")));return;}
      L.slice(0,60).forEach(function(m){var fav=!!f[m.id];
        var arrow=el("span",{class:"v9arr",style:"transform:rotate("+Math.round(m.brg||0)+"deg)"},svgI(ICO.nav,16,true));
        var row=el("div",{class:"v4li v9m"},
          el("span",{class:"v9mi "+m.type},svgI(ICO.mosque,22)),
          el("span",{class:"t"},el("b",null,m.name||(m.type==="surau"?T("সুরাউ","Surau","Surau","مصلى","مصلیٰ","Surau"):T("মসজিদ","Masjid","Masjid","مسجد","مسجد","Msikiti"))),
            el("small",null,(m.dist!=null?km(m.dist)+" · ":"")+(m.type==="surau"?T("সুরাউ","Surau","Surau","مصلى","مصلیٰ","Surau"):T("মসজিদ","Masjid","Masjid","مسجد","مسجد","Msikiti"))+(m.addr?" · "+m.addr:""))),
          arrow);
        var acts=el("div",{class:"v9acts"},
          el("a",{class:"v9a",href:"https://www.google.com/maps/dir/?api=1&destination="+m.lat+","+m.lng,target:"_blank",rel:"noopener"},svgI(ICO.pin,16),T("পথ দেখাও","Directions","Arah","الاتجاهات","راستہ","Njia")),
          el("button",{class:"v9a",type:"button",onclick:function(){logPrayer(m,function(){window.setView("mosques");});}},svgI(ICO.check,16),T("জামাতে পড়েছি","Prayed here","Solat di sini","صليت هنا","یہاں پڑھی","Niliswali hapa")),
          el("button",{class:"v9a"+(fav?" on":""),type:"button",onclick:function(){var F=favs();if(F[m.id])delete F[m.id];else F[m.id]={id:m.id,lat:m.lat,lng:m.lng,name:m.name,type:m.type,addr:m.addr};save();draw();}},svgI(ICO.star,16,fav),fav?T("সেভ করা","Saved","Disimpan","محفوظ","محفوظ","Imehifadhiwa"):T("সেভ","Save","Simpan","حفظ","محفوظ","Hifadhi")));
        var wrap=el("div",{class:"v9mw"},row,acts);list.appendChild(wrap);});}
    function drawMap(){map.innerHTML="";if(!st.loc)return;var d=st.rad/111000*1.1,dl=d/Math.cos(st.loc.lat*Math.PI/180);
      map.appendChild(el("iframe",{title:"Map",loading:"lazy",referrerpolicy:"no-referrer",src:"https://www.openstreetmap.org/export/embed.html?bbox="+[st.loc.lng-dl,st.loc.lat-d,st.loc.lng+dl,st.loc.lat+d].map(function(x){return x.toFixed(5);}).join("%2C")+"&layer=mapnik&marker="+st.loc.lat.toFixed(5)+"%2C"+st.loc.lng.toFixed(5)}));}
    function load(){chips();st.loading=true;draw();
      (st.loc?Promise.resolve(st.loc):locate()).then(function(loc){st.loc=loc;drawMap();return overpass(loc.lat,loc.lng,st.rad);}).then(function(l){st.list=l;st.loading=false;draw();})
        .catch(function(e){st.loading=false;list.innerHTML="";list.appendChild(msg(e&&e.message==="noloc"?T("লোকেশন পাওয়া যায়নি — অনুমতি দাও।","Location unavailable — please allow location.","Lokasi tiada — benarkan lokasi.","الموقع غير متاح.","لوکیشن دستیاب نہیں۔","Mahali hapapatikani."):T("মসজিদের তালিকা আনা যায়নি — ইন্টারনেট দেখে আবার চেষ্টা করো।","Couldn't load mosques — check the internet and try again.","Gagal memuat — cuba lagi.","تعذر التحميل — حاول مجددًا.","لوڈ نہیں ہو سکا۔","Imeshindikana.")));
          list.appendChild(el("button",{class:"v4btn",type:"button",onclick:load},T("আবার চেষ্টা","Try again","Cuba lagi","إعادة","دوبارہ","Jaribu tena")));});}
    load();}});
  V.space("mosques","amal");

  // =====================================================================
  // 3 · HIFZ · Quran memorisation tracker (spaced revision)
  // =====================================================================
  var SUR=[["Al-Faatiha","ٱلْفَاتِحَةِ",7],["Al-Baqara","البَقَرَةِ",286],["Aal-i-Imraan","آلِ عِمۡرَانَ",200],["An-Nisaa","النِّسَاءِ",176],["Al-Maaida","المَائـِدَةِ",120],["Al-An'aam","الأَنۡعَامِ",165],["Al-A'raaf","الأَعۡرَافِ",206],["Al-Anfaal","الأَنفَالِ",75],["At-Tawba","التَّوۡبَةِ",129],["Yunus","يُونُسَ",109],["Hud","هُودٍ",123],["Yusuf","يُوسُفَ",111],["Ar-Ra'd","الرَّعۡدِ",43],["Ibrahim","إِبۡرَاهِيمَ",52],["Al-Hijr","الحِجۡرِ",99],["An-Nahl","النَّحۡلِ",128],["Al-Israa","الإِسۡرَاءِ",111],["Al-Kahf","الكَهۡفِ",110],["Maryam","مَرۡيَمَ",98],["Taa-Haa","طه",135],["Al-Anbiyaa","الأَنبِيَاءِ",112],["Al-Hajj","الحَجِّ",78],["Al-Muminoon","المُؤۡمِنُونَ",118],["An-Noor","النُّورِ",64],["Al-Furqaan","الفُرۡقَانِ",77],["Ash-Shu'araa","الشُّعَرَاءِ",227],["An-Naml","النَّمۡلِ",93],["Al-Qasas","القَصَصِ",88],["Al-Ankaboot","العَنكَبُوتِ",69],["Ar-Room","الرُّومِ",60],["Luqman","لُقۡمَانَ",34],["As-Sajda","السَّجۡدَةِ",30],["Al-Ahzaab","الأَحۡزَابِ",73],["Saba","سَبَإٍ",54],["Faatir","فَاطِرٍ",45],["Yaseen","يسٓ",83],["As-Saaffaat","الصَّافَّاتِ",182],["Saad","صٓ",88],["Az-Zumar","الزُّمَرِ",75],["Ghafir","غَافِرٍ",85],["Fussilat","فُصِّلَتۡ",54],["Ash-Shura","الشُّورَىٰ",53],["Az-Zukhruf","الزُّخۡرُفِ",89],["Ad-Dukhaan","الدُّخَانِ",59],["Al-Jaathiya","الجَاثِيَةِ",37],["Al-Ahqaf","الأَحۡقَافِ",35],["Muhammad","مُحَمَّدٍ",38],["Al-Fath","الفَتۡحِ",29],["Al-Hujuraat","الحُجُرَاتِ",18],["Qaaf","قٓ",45],["Adh-Dhaariyat","الذَّارِيَاتِ",60],["At-Tur","الطُّورِ",49],["An-Najm","النَّجۡمِ",62],["Al-Qamar","القَمَرِ",55],["Ar-Rahmaan","الرَّحۡمَٰن",78],["Al-Waaqia","الوَاقِعَةِ",96],["Al-Hadid","الحَدِيدِ",29],["Al-Mujaadila","المُجَادلَةِ",22],["Al-Hashr","الحَشۡرِ",24],["Al-Mumtahana","المُمۡتَحنَةِ",13],["As-Saff","الصَّفِّ",14],["Al-Jumu'a","الجُمُعَةِ",11],["Al-Munaafiqoon","المُنَافِقُونَ",11],["At-Taghaabun","التَّغَابُنِ",18],["At-Talaaq","الطَّلَاقِ",12],["At-Tahrim","التَّحۡرِيمِ",12],["Al-Mulk","المُلۡكِ",30],["Al-Qalam","القَلَمِ",52],["Al-Haaqqa","الحَاقَّةِ",52],["Al-Ma'aarij","المَعَارِجِ",44],["Nooh","نُوحٍ",28],["Al-Jinn","الجِنِّ",28],["Al-Muzzammil","المُزَّمِّلِ",20],["Al-Muddaththir","المُدَّثِّرِ",56],["Al-Qiyaama","القِيَامَةِ",40],["Al-Insaan","الإِنسَانِ",31],["Al-Mursalaat","المُرۡسَلَاتِ",50],["An-Naba","النَّبَإِ",40],["An-Naazi'aat","النَّازِعَاتِ",46],["Abasa","عَبَسَ",42],["At-Takwir","التَّكۡوِيرِ",29],["Al-Infitaar","الانفِطَارِ",19],["Al-Mutaffifin","المُطَفِّفِينَ",36],["Al-Inshiqaaq","الانشِقَاقِ",25],["Al-Burooj","البُرُوجِ",22],["At-Taariq","الطَّارِقِ",17],["Al-A'laa","الأَعۡلَىٰ",19],["Al-Ghaashiya","الغَاشِيَةِ",26],["Al-Fajr","الفَجۡرِ",30],["Al-Balad","البَلَدِ",20],["Ash-Shams","الشَّمۡسِ",15],["Al-Lail","اللَّيۡلِ",21],["Ad-Dhuhaa","الضُّحَىٰ",11],["Ash-Sharh","الشَّرۡحِ",8],["At-Tin","التِّينِ",8],["Al-Alaq","العَلَقِ",19],["Al-Qadr","القَدۡرِ",5],["Al-Bayyina","البَيِّنَةِ",8],["Az-Zalzala","الزَّلۡزَلَةِ",8],["Al-Aadiyaat","العَادِيَاتِ",11],["Al-Qaari'a","القَارِعَةِ",11],["At-Takaathur","التَّكَاثُرِ",8],["Al-Asr","العَصۡرِ",3],["Al-Humaza","الهُمَزَةِ",9],["Al-Fil","الفِيلِ",5],["Quraish","قُرَيۡشٍ",4],["Al-Maa'un","المَاعُونِ",7],["Al-Kawthar","الكَوۡثَرِ",3],["Al-Kaafiroon","الكَافِرُونَ",6],["An-Nasr","النَّصۡرِ",3],["Al-Masad","المَسَدِ",5],["Al-Ikhlaas","الإِخۡلَاصِ",4],["Al-Falaq","الفَلَقِ",5],["An-Naas","النَّاسِ",6]];
  var JUZ=[[1,1],[2,142],[2,253],[3,93],[4,24],[4,148],[5,82],[6,111],[7,88],[8,41],[9,93],[11,6],[12,53],[15,1],[17,1],[18,75],[21,1],[23,1],[25,21],[27,56],[29,46],[33,31],[36,28],[39,32],[41,47],[46,1],[51,31],[58,1],[67,1],[78,1]];
  var TOTAL=6236,GAPS=[1,2,4,7,15,30,60];
  function H(){var d=D();d.hifz=d.hifz||{s:{},log:{},goal:5};return d.hifz;}
  function sOf(n){var h=H();return h.s[n]||{m:0,lvl:0,next:null};}
  function memTotal(){var h=H(),n=0;Object.keys(h.s).forEach(function(k){n+=Math.min(SUR[k-1][2],h.s[k].m||0);});return n;}
  function addDays(d,n){var x=new Date(d+"T12:00:00");x.setDate(x.getDate()+n);return V.ymd(x);}
  function due(){var today=V.ymd(),h=H();return Object.keys(h.s).filter(function(k){var s=h.s[k];return s.m>0&&s.next&&s.next<=today;}).map(Number).sort(function(a,b){return a-b;});}
  function streak(){var h=H(),n=0,d=V.ymd();if(!(h.log[d]>0))d=addDays(d,-1);while(h.log[d]>0){n++;d=addDays(d,-1);}return n;}
  function setMem(n,val){var h=H(),s=h.s[n]||{m:0,lvl:0,next:null},max=SUR[n-1][2];val=Math.max(0,Math.min(max,val|0));var delta=val-(s.m||0);s.m=val;
    if(delta>0){var d=V.ymd();h.log[d]=(h.log[d]||0)+delta;if(!s.next)s.next=addDays(d,1);}if(val===0){s.next=null;s.lvl=0;}h.s[n]=s;save();}
  function juzPct(){var h=H(),out=[];for(var j=0;j<30;j++){var a=JUZ[j],b=JUZ[j+1]||[115,1],tot=0,got=0;
      for(var s=a[0];s<=Math.min(b[0],114);s++){var from=s===a[0]?a[1]:1,to=s===b[0]?b[1]-1:SUR[s-1][2];if(s===115||to<from)continue;var len=to-from+1,m=(h.s[s]&&h.s[s].m)||0;tot+=len;got+=Math.max(0,Math.min(m,to)-from+1);}
      out.push(tot?got/tot:0);}return out;}
  function surahSheet(n,after){var s=sOf(n),meta=SUR[n-1],max=meta[2];var val=s.m||0;
    var big=el("div",{class:"v9hval"});var rng=el("input",{type:"range",min:"0",max:String(max),value:String(val),class:"v9range"});
    function show(){big.textContent=num(val)+" / "+num(max)+" "+T("আয়াত","ayahs","ayat","آية","آیات","aya");}show();rng.oninput=function(){val=+rng.value;show();};
    var q=el("div",{class:"v9chips"});[[1,"+1"],[5,"+5"],[10,"+10"]].forEach(function(x){q.appendChild(el("button",{type:"button",onclick:function(){val=Math.min(max,val+x[0]);rng.value=val;show();}},x[1]));});
    q.appendChild(el("button",{type:"button",onclick:function(){val=max;rng.value=val;show();}},T("পুরো সূরা ✓","Whole surah ✓","Seluruh surah ✓","السورة كاملة ✓","پوری سورت ✓","Sura nzima ✓")));
    q.appendChild(el("button",{type:"button",onclick:function(){val=0;rng.value=0;show();}},T("রিসেট","Reset","Set semula","إعادة","ری سیٹ","Weka upya")));
    var sh=V.sheet(num(n)+". "+meta[0]+" · "+meta[1],el("div",{style:"display:grid;gap:12px"},
      el("p",{class:"v4muted",style:"margin:0"},T("শুরু থেকে কত আয়াত মুখস্থ হয়েছে?","How many ayahs have you memorised from the start?","Berapa ayat dihafal dari awal?","كم آية حفظت من البداية؟","شروع سے کتنی آیات یاد ہوئیں؟","Aya ngapi umehifadhi?")),
      big,rng,q,
      el("div",{class:"v4row",style:"gap:8px;flex-wrap:wrap"},
        el("button",{class:"v4btn gold",type:"button",onclick:function(){setMem(n,val);sh.close();if(after)after();}},T("সেভ","Save","Simpan","حفظ","محفوظ","Hifadhi")),
        el("button",{class:"v4btn",type:"button",onclick:function(){sh.close();window.setView("quran");}},T("কুরআনে খোলো","Open Quran","Buka Al-Quran","افتح المصحف","قرآن کھولیں","Fungua Qur'ani")))));}
  function review(n,ok,after){var h=H(),s=h.s[n];if(!s)return;s.lvl=ok?Math.min(GAPS.length-1,(s.lvl||0)+1):0;s.next=addDays(V.ymd(),GAPS[s.lvl]);s.last=V.ymd();save();
    V.toast(ok?T("মাশাআল্লাহ! পরের রিভিশন "+num(GAPS[s.lvl])+" দিন পর","MashaAllah! Next revision in "+GAPS[s.lvl]+" days","MasyaAllah! Ulang kaji dalam "+GAPS[s.lvl]+" hari","ما شاء الله! المراجعة بعد "+GAPS[s.lvl]+" أيام","ماشاءاللہ! "+GAPS[s.lvl]+" دن بعد","MashaAllah! Siku "+GAPS[s.lvl]):T("কাল আবার রিভিশন দাও","Revise again tomorrow","Ulang kaji esok","راجع غدًا","کل دوبارہ","Rudia kesho"));if(after)after();}
  V.section("hifz",{open:function(r){var st={f:"all",q:""};function draw(){r.innerHTML="";var h=H();
      r.appendChild(V.head(T("হিফজ ট্র্যাকার","Hifz tracker","Penjejak hafazan","متابعة الحفظ","حفظ ٹریکر","Kufuatilia hifdhi"),T("কুরআন মুখস্থ · রিভিশন · লক্ষ্য","Memorise · revise · daily goal","Hafal · ulang kaji · sasaran","حفظ · مراجعة · هدف","یاد · دہرائی · ہدف","Hifadhi · rudia · lengo"),"amal"));
      var tot=memTotal(),pct=tot/TOTAL*100,done=Object.keys(h.s).filter(function(k){return h.s[k].m>=SUR[k-1][2];}).length,today=h.log[V.ymd()]||0,goal=h.goal||5;
      var hero=el("div",{class:"v4card gold v9hero"},V.ring(pct,96,4,"#3ECF9E"),
        el("div",{style:"flex:1;min-width:0"},el("div",{class:"v9big"},num(tot.toLocaleString("en-US"))+" / "+num("6,236")),el("small",{class:"v4muted"},T("আয়াত মুখস্থ","ayahs memorised","ayat dihafal","آية محفوظة","آیات یاد","aya")),
          el("div",{class:"v9mini"},el("span",null,"📗 "+num(done)+" "+T("সূরা সম্পূর্ণ","surahs done","surah siap","سورة","سورتیں","sura")),el("span",null,"🔥 "+num(streak())+" "+T("দিনের ধারা","day streak","hari berturut","يوم متتالي","دن مسلسل","siku")))));
      r.appendChild(hero);
      var gbar=el("div",{class:"v9goal"},el("div",{class:"tx"},el("b",null,T("আজকের লক্ষ্য","Today's goal","Sasaran hari ini","هدف اليوم","آج کا ہدف","Lengo la leo")),el("span",null,num(Math.min(today,goal))+" / "+num(goal)+" "+T("আয়াত","ayahs","ayat","آية","آیات","aya"))),
        el("div",{class:"tr"},el("div",{class:"fl",style:"width:"+Math.min(100,today/goal*100)+"%"})),
        el("button",{type:"button",class:"v9link",onclick:function(){var g=prompt(T("প্রতিদিন কত আয়াত নতুন মুখস্থ করবে?","How many new ayahs per day?","Berapa ayat sehari?","كم آية يوميًا؟","روزانہ کتنی آیات؟","Aya ngapi kwa siku?"),goal);g=parseInt(g,10);if(g>0&&g<300){h.goal=g;save();draw();}}},T("লক্ষ্য বদলাও","Change goal","Tukar sasaran","تغيير الهدف","ہدف بدلیں","Badili lengo")));
      r.appendChild(gbar);
      var d=due();var dc=el("div",{class:"v4card"},el("h2",null,"🔁 "+T("আজকের রিভিশন","Revision due today","Ulang kaji hari ini","مراجعة اليوم","آج کی دہرائی","Marudio ya leo")+(d.length?" · "+num(d.length):"")));
      if(!d.length)dc.appendChild(msg(tot?T("আজ রিভিশন বাকি নেই। আলহামদুলিল্লাহ!","Nothing due today. Alhamdulillah!","Tiada hari ini. Alhamdulillah!","لا شيء اليوم. الحمد لله!","آج کچھ نہیں۔ الحمدللہ!","Hakuna leo. Alhamdulillah!"):T("নিচের তালিকা থেকে যে সূরা মুখস্থ আছে সেটা চাপো।","Tap a surah below to record what you have memorised.","Ketik surah di bawah untuk mula.","اضغط سورة أدناه للبدء.","نیچے سورت دبائیں۔","Gusa sura hapa chini.")));
      d.slice(0,8).forEach(function(n){dc.appendChild(el("div",{class:"v4li"},el("span",{class:"v9n"},num(n)),el("span",{class:"t"},el("b",null,SUR[n-1][0]),el("small",null,num(sOf(n).m)+" "+T("আয়াত","ayahs","ayat","آية","آیات","aya"))),
        el("button",{class:"v9ok",type:"button",onclick:function(){review(n,true,draw);}},"✓"),el("button",{class:"v9no",type:"button",onclick:function(){review(n,false,draw);}},"✗")));});
      r.appendChild(dc);
      var jz=juzPct(),jg=el("div",{class:"v9juz"});jz.forEach(function(p,i){jg.appendChild(el("div",{title:"Juz "+(i+1),style:"--p:"+Math.round(p*100)+"%"},el("b",null,num(i+1)),el("small",null,num(Math.round(p*100))+"%")));});
      r.appendChild(el("div",{class:"v4card"},el("h2",null,T("পারা অনুযায়ী অগ্রগতি","Progress by juz","Kemajuan juzuk","التقدم بالأجزاء","پارہ وار پیش رفت","Maendeleo kwa juzuu")),jg));
      var srch=el("input",{class:"v4in",placeholder:T("সূরা খোঁজো","Search surah","Cari surah","ابحث عن سورة","سورت تلاش","Tafuta sura"),value:st.q});
      var fl=V.seg([["all",T("সব","All","Semua","الكل","سب","Zote")],["prog",T("চলছে","In progress","Sedang","جارٍ","جاری","Inaendelea")],["done",T("মুখস্থ","Memorised","Dihafal","محفوظ","یاد","Imehifadhiwa")]],st.f,function(x){st.f=x;draw();});
      var lst=el("div",{class:"v4list"});
      function rows(){lst.innerHTML="";var q=st.q.trim().toLowerCase();SUR.forEach(function(m,i){var n=i+1,s=sOf(n),p=s.m/m[2];
        if(st.f==="prog"&&!(s.m>0&&s.m<m[2]))return;if(st.f==="done"&&s.m<m[2])return;if(q&&(m[0].toLowerCase().indexOf(q)<0&&String(n)!==q&&m[1].indexOf(q)<0))return;
        lst.appendChild(el("button",{class:"v4li v9s",type:"button",onclick:function(){surahSheet(n,draw);}},el("span",{class:"v9n"+(p>=1?" done":"")},p>=1?"✓":num(n)),
          el("span",{class:"t"},el("b",null,m[0]),el("small",null,num(s.m)+" / "+num(m[2])+" "+T("আয়াত","ayahs","ayat","آية","آیات","aya")),el("span",{class:"v9pb"},el("i",{style:"width:"+Math.round(p*100)+"%"}))),
          el("span",{class:"ar"},m[1])));});}
      srch.oninput=function(){st.q=srch.value;rows();};rows();
      r.appendChild(el("div",{class:"v4card"},el("h2",null,T("সব সূরা","All surahs","Semua surah","كل السور","تمام سورتیں","Sura zote")),srch,el("div",{style:"margin:10px 0"},fl),lst));}
    draw();}});
  V.space("hifz","amal");

  // =====================================================================
  // 4 · FAMILY · shared budgets & goals (Firestore, real time)
  // =====================================================================
  var fam={unsub:[],fid:null,doc:null,budgets:[],goals:[],tx:[],tab:"home",root:null,ctx:null};
  function fstop(){fam.unsub.splice(0).forEach(function(f){try{f();}catch(e){}});}
  function money(n){var c=(fam.doc&&fam.doc.cur)||"RM";return c+" "+num(Math.round(n||0).toLocaleString("en-US"));}
  function code(){var A="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",s="";var a=new Uint32Array(10);crypto.getRandomValues(a);for(var i=0;i<10;i++)s+=A[a[i]%A.length];return s;}
  function monthStart(){return V.ymd().slice(0,8)+"01";}
  function fbErr(e){console.warn(e);V.toast(T("সমস্যা হয়েছে: ","Something went wrong: ","Ralat: ","خطأ: ","مسئلہ: ","Hitilafu: ")+(e&&e.code||""),3500);}
  V.section("family",{open:function(r){fam.root=r;fam.tab=fam.tab||"home";boot();}});
  V.space("family","finance");
  function boot(){var r=fam.root;r.innerHTML="";r.appendChild(V.head(T("পারিবারিক বাজেট","Family budget","Bajet keluarga","ميزانية العائلة","فیملی بجٹ","Bajeti ya familia"),T("একসাথে খরচ ও লক্ষ্য","Shared spending & goals","Perbelanjaan & sasaran bersama","إنفاق وأهداف مشتركة","مشترکہ خرچ و اہداف","Matumizi na malengo pamoja"),"finance"));
    var box=el("div");r.appendChild(box);box.appendChild(msg("…"));
    if(!window.AMX||!AMX.fb){box.innerHTML="";box.appendChild(msg(T("ইন্টারনেট দরকার","Internet needed","Perlu internet","يلزم الإنترنت","انٹرنیٹ درکار","Mtandao unahitajika")));return;}
    AMX.fb().then(function(c){fam.ctx=c;if(!c.user)return welcome(box,true);
      if(fam.fid&&fam.doc)return home();
      var saved=D().family;return c.db.collection("families").where("members","array-contains",c.user.uid).get().then(function(s){var docs=s.docs;
        var pick=docs.filter(function(d){return d.id===saved;})[0]||docs[0];if(pick){listen(pick.id);}else welcome(box,false);});}).catch(function(e){box.innerHTML="";box.appendChild(msg(T("সংযোগ করা যায়নি — ইন্টারনেট দেখো।","Couldn't connect — check the internet.","Tidak dapat bersambung.","تعذر الاتصال.","رابطہ نہیں ہوا۔","Imeshindikana kuunganisha.")));console.warn(e);});}
  function myName(){var c=fam.ctx;try{var st=JSON.parse(localStorage.getItem("am-settings")||"{}");if(st.name)return st.name;}catch(e){}return (c&&c.user&&c.user.displayName)||"";}
  function welcome(box,needAuth){box.innerHTML="";
    box.appendChild(el("div",{class:"v4card gold v9fw"},el("div",{class:"v9fi"},svgI(ICO.family,40)),
      el("h2",null,T("পরিবারের সবাই মিলে হিসাব","Budget together as a family","Bajet bersama keluarga","ميزانية العائلة معًا","خاندان کے ساتھ بجٹ","Bajeti pamoja")),
      el("p",{class:"v4muted"},T("একটা পরিবার তৈরি করো বা কোড দিয়ে যোগ দাও। খরচ, বাজেট আর সঞ্চয়ের লক্ষ্য সবার ফোনে সাথে সাথে আপডেট হবে।","Create a family or join with a code. Spending, budgets and savings goals update on everyone's phone instantly.","Cipta keluarga atau sertai dengan kod.","أنشئ عائلة أو انضم برمز.","فیملی بنائیں یا کوڈ سے شامل ہوں۔","Unda familia au jiunge kwa msimbo."))));
    var nm=el("input",{class:"v4in",maxlength:"40",placeholder:T("তোমার নাম","Your name","Nama anda","اسمك","آپ کا نام","Jina lako"),value:myName()});
    var fn=el("input",{class:"v4in",maxlength:"40",placeholder:T("পরিবারের নাম — যেমন: আরাফাত পরিবার","Family name — e.g. The Arafats","Nama keluarga","اسم العائلة","خاندان کا نام","Jina la familia")});
    var cur=el("select",{class:"v4in"});["RM","৳ BDT","$ USD","€ EUR","£ GBP","SAR","AED","PKR","INR","IDR","KES","SGD"].forEach(function(x){cur.appendChild(el("option",{value:x.split(" ").pop()==="BDT"?"৳":x.split(" ")[0]},x));});
    var cd=el("input",{class:"v4in",maxlength:"12",placeholder:T("পরিবারের কোড","Family code","Kod keluarga","رمز العائلة","فیملی کوڈ","Msimbo wa familia"),style:"text-transform:uppercase;letter-spacing:.15em"});
    function ensure(){var c=fam.ctx;if(c.user)return Promise.resolve(c.user);return c.auth.signInAnonymously().then(function(x){c.user=x.user;return x.user;});}
    var mk=el("button",{class:"v4btn gold",type:"button",style:"justify-content:center",onclick:function(){var n=nm.value.trim(),f=fn.value.trim();if(!n){nm.focus();return;}if(!f){fn.focus();return;}mk.disabled=true;
      ensure().then(function(u){var c=fam.ctx,id=code(),names={};names[u.uid]=n.slice(0,40);
        return c.db.collection("families").doc(id).set({name:f.slice(0,40),owner:u.uid,members:[u.uid],names:names,cur:cur.value,createdAt:c.FV.serverTimestamp()}).then(function(){listen(id);});}).catch(function(e){mk.disabled=false;fbErr(e);});}},T("পরিবার তৈরি করো","Create family","Cipta keluarga","إنشاء عائلة","فیملی بنائیں","Unda familia"));
    var jn=el("button",{class:"v4btn",type:"button",style:"justify-content:center",onclick:function(){var n=nm.value.trim(),id=cd.value.trim().toUpperCase().replace(/[^A-Z0-9]/g,"");if(!n){nm.focus();return;}if(id.length<6){cd.focus();return;}jn.disabled=true;
      ensure().then(function(u){var c=fam.ctx,ref=c.db.collection("families").doc(id);return ref.get().then(function(s){if(!s.exists)throw {code:"not-found"};var d=s.data();if((d.members||[]).length>=12)throw {code:"full"};
          var up={members:c.FV.arrayUnion(u.uid)};up["names."+u.uid]=n.slice(0,40);return ref.update(up);}).then(function(){listen(id);});})
        .catch(function(e){jn.disabled=false;if(e&&e.code==="not-found")V.toast(T("এই কোডে কোনো পরিবার নেই","No family with this code","Kod tidak sah","لا توجد عائلة بهذا الرمز","اس کوڈ سے کوئی فیملی نہیں","Hakuna familia"),3000);else fbErr(e);});}},T("কোড দিয়ে যোগ দাও","Join with code","Sertai dengan kod","انضم بالرمز","کوڈ سے شامل ہوں","Jiunge kwa msimbo"));
    box.appendChild(el("div",{class:"v4card",style:"display:grid;gap:10px"},el("label",{class:"v4lab"},T("তোমার নাম","Your name","Nama anda","اسمك","آپ کا نام","Jina lako"),nm),
      el("h2",{style:"margin:6px 0 0"},T("নতুন পরিবার","New family","Keluarga baharu","عائلة جديدة","نئی فیملی","Familia mpya")),fn,cur,mk,
      el("h2",{style:"margin:10px 0 0"},T("অথবা যোগ দাও","Or join one","Atau sertai","أو انضم","یا شامل ہوں","Au jiunge")),cd,jn,
      needAuth?el("p",{class:"v4muted",style:"font-size:.75rem;margin:0"},T("Google দিয়ে কমিউনিটিতে ঢোকা থাকলে সেই অ্যাকাউন্টই ব্যবহার হবে; না থাকলে এই ফোনের জন্য একটা অতিথি অ্যাকাউন্ট তৈরি হবে।","If you're signed in to the community with Google, that account is used; otherwise a guest account is created for this phone.","Akaun Google digunakan jika ada; jika tidak, akaun tetamu.","يُستخدم حساب Google إن وجد، وإلا حساب ضيف.","Google اکاؤنٹ ہو تو وہی، ورنہ مہمان اکاؤنٹ۔","Akaunti ya Google au ya mgeni.")):null));}
  function listen(id){fstop();var c=fam.ctx,ref=c.db.collection("families").doc(id);fam.fid=id;D().family=id;save();
    fam.unsub.push(ref.onSnapshot(function(s){if(!s.exists||(s.data().members||[]).indexOf(c.user.uid)<0){fstop();fam.fid=null;fam.doc=null;D().family=null;save();if(fam.root&&fam.root.isConnected)boot();return;}fam.doc=s.data();draw();},function(e){fbErr(e);}));
    fam.unsub.push(ref.collection("budgets").onSnapshot(function(s){fam.budgets=s.docs.map(function(d){var x=d.data();x.id=d.id;return x;});draw();},function(){}));
    fam.unsub.push(ref.collection("goals").onSnapshot(function(s){fam.goals=s.docs.map(function(d){var x=d.data();x.id=d.id;return x;});draw();},function(){}));
    fam.unsub.push(ref.collection("tx").where("date",">=",monthStart()).onSnapshot(function(s){fam.tx=s.docs.map(function(d){var x=d.data({serverTimestamps:"estimate"});x.id=d.id;x.ref=d.ref;return x;}).sort(function(a,b){return (b.date+(b.t||0))>(a.date+(a.t||0))?1:-1;});draw();},function(){}));}
  function home(){draw();}
  function spentBy(){var m={},tot=0;fam.tx.forEach(function(x){if(x.kind==="goal")return;m[x.cat]=(m[x.cat]||0)+x.amt;tot+=x.amt;});return {m:m,tot:tot};}
  var drawT=null;function draw(){clearTimeout(drawT);drawT=setTimeout(draw0,30);}
  function draw0(){var r=fam.root;if(!r||!r.isConnected||!fam.doc)return;var c=fam.ctx,d=fam.doc,me=c.user.uid;r.innerHTML="";
    r.appendChild(V.head(d.name,num((d.members||[]).length)+" "+T("জন সদস্য","members","ahli","أعضاء","اراکین","wanachama"),"finance"));
    var sp=spentBy(),bud=fam.budgets.reduce(function(a,b){return a+(b.limit||0);},0);
    r.appendChild(el("div",{class:"v4card gold v9hero"},V.ring(bud?sp.tot/bud*100:0,96,4,bud&&sp.tot>bud?"#E8836B":"#3ECF9E"),
      el("div",{style:"flex:1;min-width:0"},el("small",{class:"v4muted"},T("এই মাসে খরচ","Spent this month","Belanja bulan ini","المصروف هذا الشهر","اس ماہ خرچ","Matumizi mwezi huu")),el("div",{class:"v9big"},money(sp.tot)),
        el("small",{class:"v4muted"},bud?T("বাজেট ","Budget ","Bajet ","الميزانية ","بجٹ ","Bajeti ")+money(bud)+" · "+T("বাকি ","left ","baki ","المتبقي ","باقی ","imebaki ")+money(Math.max(0,bud-sp.tot)):T("এখনো বাজেট নেই","No budget yet","Tiada bajet","لا ميزانية","بجٹ نہیں","Hakuna bajeti")))));
    var mem=el("div",{class:"v9mem"});(d.members||[]).forEach(function(u){var n=(d.names&&d.names[u])||"—";mem.appendChild(el("span",{class:u===d.owner?"own":""},el("i",null,(n.trim()[0]||"?").toUpperCase()),n+(u===me?" ("+T("তুমি","you","anda","أنت","آپ","wewe")+")":"")));});
    r.appendChild(mem);
    r.appendChild(el("div",{class:"v4row",style:"gap:8px;margin:12px 0"},
      el("button",{class:"v4btn gold",type:"button",style:"flex:1;justify-content:center",onclick:addTx},"＋ "+T("খরচ যোগ","Add expense","Tambah belanja","أضف مصروفًا","خرچ شامل","Ongeza matumizi")),
      el("button",{class:"v4btn",type:"button",style:"flex:1;justify-content:center",onclick:invite},T("সদস্য আনো","Invite","Jemput","دعوة","دعوت","Alika"))));
    r.appendChild(V.seg([["home",T("বাজেট","Budgets","Bajet","الميزانيات","بجٹ","Bajeti")],["goals",T("লক্ষ্য","Goals","Sasaran","الأهداف","اہداف","Malengo")],["act",T("কার্যকলাপ","Activity","Aktiviti","النشاط","سرگرمی","Shughuli")],["set",T("সেটিংস","Settings","Tetapan","الإعدادات","ترتیبات","Mipangilio")]],fam.tab,function(x){fam.tab=x;draw();}));
    var body=el("div",{style:"margin-top:12px;display:grid;gap:10px"});r.appendChild(body);var ref=c.db.collection("families").doc(fam.fid);
    if(fam.tab==="home"){if(!fam.budgets.length)body.appendChild(msg(T("খাত অনুযায়ী মাসিক বাজেট যোগ করো — যেমন বাজার, বিদ্যুৎ, পড়াশোনা।","Add a monthly budget per category — e.g. groceries, bills, school.","Tambah bajet bulanan ikut kategori.","أضف ميزانية شهرية لكل فئة.","ہر مد کا ماہانہ بجٹ شامل کریں۔","Ongeza bajeti kwa kila aina.")));
      fam.budgets.sort(function(a,b){return (b.limit||0)-(a.limit||0);}).forEach(function(b){var s=sp.m[b.cat]||0,p=b.limit?s/b.limit:0;
        body.appendChild(el("div",{class:"v9bud"},el("div",{class:"tx"},el("b",null,b.cat),el("span",null,money(s)+" / "+money(b.limit))),el("div",{class:"tr"},el("div",{class:"fl"+(p>1?" over":p>.8?" warn":""),style:"width:"+Math.min(100,p*100)+"%"})),
          el("button",{class:"v9x",type:"button","aria-label":"remove",onclick:function(){if(confirm(T("এই বাজেট মুছবে?","Delete this budget?","Padam bajet?","حذف الميزانية؟","بجٹ حذف؟","Futa bajeti?")))ref.collection("budgets").doc(b.id).delete().catch(fbErr);}},"✕")));});
      var others=Object.keys(sp.m).filter(function(k){return !fam.budgets.some(function(b){return b.cat===k;});});
      if(others.length)body.appendChild(el("p",{class:"v4muted",style:"margin:0;font-size:.8rem"},T("বাজেটের বাইরে: ","Outside budgets: ","Di luar bajet: ","خارج الميزانيات: ","بجٹ سے باہر: ","Nje ya bajeti: ")+others.map(function(k){return k+" "+money(sp.m[k]);}).join(" · ")));
      body.appendChild(el("button",{class:"v4btn",type:"button",style:"justify-content:center",onclick:function(){var cat=el("input",{class:"v4in",maxlength:"30",placeholder:T("খাত — যেমন বাজার","Category — e.g. Groceries","Kategori","الفئة","مد","Aina")}),lim=el("input",{class:"v4in",type:"number",min:"1",inputmode:"decimal",placeholder:T("মাসিক সীমা","Monthly limit","Had bulanan","الحد الشهري","ماہانہ حد","Kikomo")});
        var sh=V.sheet(T("নতুন বাজেট","New budget","Bajet baharu","ميزانية جديدة","نیا بجٹ","Bajeti mpya"),el("div",{style:"display:grid;gap:10px"},cat,lim,el("button",{class:"v4btn gold",type:"button",onclick:function(){var cv=cat.value.trim(),lv=parseFloat(lim.value);if(!cv||!(lv>0))return;ref.collection("budgets").add({cat:cv.slice(0,30),limit:lv,by:me}).then(function(){sh.close();}).catch(fbErr);}},T("সেভ","Save","Simpan","حفظ","محفوظ","Hifadhi"))));}},"＋ "+T("বাজেট যোগ","Add budget","Tambah bajet","أضف ميزانية","بجٹ شامل","Ongeza bajeti")));}
    else if(fam.tab==="goals"){if(!fam.goals.length)body.appendChild(msg(T("একসাথে সঞ্চয়ের লক্ষ্য রাখো — হজ, উমরাহ, ইমার্জেন্সি ফান্ড, কুরবানি…","Save together — Hajj, Umrah, emergency fund, Qurbani…","Simpan bersama — Haji, Umrah…","ادخروا معًا — الحج، العمرة…","مل کر بچت — حج، عمرہ…","Weka akiba — Hija, Umra…")));
      fam.goals.forEach(function(g){var p=g.target?(g.saved||0)/g.target:0;
        body.appendChild(el("div",{class:"v4card v9g"},el("div",{style:"display:flex;gap:12px;align-items:center"},V.ring(p*100,64,3,"#C9A050"),
          el("div",{style:"flex:1;min-width:0"},el("b",null,g.name),el("div",{class:"v4muted",style:"font-size:.85rem"},money(g.saved)+" / "+money(g.target)+(g.due?" · "+g.due:""))),
          el("button",{class:"v4btn gold",type:"button",onclick:function(){var a=el("input",{class:"v4in",type:"number",min:"1",inputmode:"decimal",placeholder:T("পরিমাণ","Amount","Jumlah","المبلغ","رقم","Kiasi")});
            var sh=V.sheet(T("সঞ্চয় যোগ: ","Add savings: ","Tambah simpanan: ","أضف إلى: ","بچت شامل: ","Ongeza akiba: ")+g.name,el("div",{style:"display:grid;gap:10px"},a,el("button",{class:"v4btn gold",type:"button",onclick:function(){var v=parseFloat(a.value);if(!(v>0))return;
              var b=c.db.batch();b.update(ref.collection("goals").doc(g.id),{saved:c.FV.increment(v)});b.set(ref.collection("tx").doc(),{amt:v,cat:g.name.slice(0,30),kind:"goal",goal:g.id,note:"",by:me,date:V.ymd(),t:Date.now()});b.commit().then(function(){sh.close();}).catch(fbErr);}},T("যোগ করো","Add","Tambah","أضف","شامل","Ongeza"))));}},"＋"))));});
      body.appendChild(el("button",{class:"v4btn",type:"button",style:"justify-content:center",onclick:function(){var n=el("input",{class:"v4in",maxlength:"40",placeholder:T("লক্ষ্যের নাম — যেমন উমরাহ","Goal — e.g. Umrah","Sasaran","الهدف","ہدف","Lengo")}),tg=el("input",{class:"v4in",type:"number",min:"1",inputmode:"decimal",placeholder:T("লক্ষ্য পরিমাণ","Target amount","Jumlah sasaran","المبلغ المستهدف","ہدف رقم","Kiasi")}),du=el("input",{class:"v4in",type:"date"});
        var sh=V.sheet(T("নতুন লক্ষ্য","New goal","Sasaran baharu","هدف جديد","نیا ہدف","Lengo jipya"),el("div",{style:"display:grid;gap:10px"},n,tg,el("label",{class:"v4lab"},T("কবের মধ্যে (ঐচ্ছিক)","By (optional)","Tarikh (pilihan)","بحلول (اختياري)","تک (اختیاری)","Hadi (hiari)"),du),
          el("button",{class:"v4btn gold",type:"button",onclick:function(){var nv=n.value.trim(),tv=parseFloat(tg.value);if(!nv||!(tv>0))return;ref.collection("goals").add({name:nv.slice(0,40),target:tv,saved:0,due:du.value||"",by:me}).then(function(){sh.close();}).catch(fbErr);}},T("সেভ","Save","Simpan","حفظ","محفوظ","Hifadhi"))));}},"＋ "+T("লক্ষ্য যোগ","Add goal","Tambah sasaran","أضف هدفًا","ہدف شامل","Ongeza lengo")));}
    else if(fam.tab==="act"){if(!fam.tx.length)body.appendChild(msg(T("এই মাসে এখনো কিছু নেই।","Nothing this month yet.","Tiada lagi bulan ini.","لا شيء هذا الشهر.","اس ماہ کچھ نہیں۔","Hakuna bado.")));
      var lst=el("div",{class:"v4list"});fam.tx.slice(0,60).forEach(function(x){var who=(d.names&&d.names[x.by])||"—";
        lst.appendChild(el("div",{class:"v4li"},el("span",{class:"v9n"+(x.kind==="goal"?" done":"")},(who.trim()[0]||"?").toUpperCase()),el("span",{class:"t"},el("b",null,(x.kind==="goal"?"🎯 ":"")+x.cat),el("small",null,who+" · "+num(x.date.slice(8))+"/"+num(x.date.slice(5,7))+(x.note?" · "+x.note:""))),
          el("b",{style:"white-space:nowrap;color:"+(x.kind==="goal"?"#3ECF9E":"#F7E2A6")},money(x.amt)),x.by===me&&x.kind!=="goal"?el("button",{class:"v9x",type:"button","aria-label":"delete",onclick:function(){if(confirm(T("মুছবে?","Delete?","Padam?","حذف؟","حذف؟","Futa?")))x.ref.delete().catch(fbErr);}},"✕"):null));});
      body.appendChild(lst);}
    else{var code0=fam.fid;
      body.appendChild(el("div",{class:"v4card"},el("h2",null,T("পরিবারের কোড","Family code","Kod keluarga","رمز العائلة","فیملی کوڈ","Msimbo")),el("div",{class:"v9code"},code0),el("p",{class:"v4muted",style:"margin:6px 0 0;font-size:.8rem"},T("এই কোড শুধু পরিবারের সদস্যদের দাও।","Share this code only with your family.","Kongsi kod hanya dengan keluarga.","شارك الرمز مع عائلتك فقط.","یہ کوڈ صرف خاندان کو دیں۔","Shiriki na familia tu."))));
      if(d.owner===me){var nn=el("input",{class:"v4in",maxlength:"40",value:d.name});body.appendChild(el("div",{class:"v4card",style:"display:grid;gap:8px"},el("label",{class:"v4lab"},T("পরিবারের নাম","Family name","Nama keluarga","اسم العائلة","خاندان کا نام","Jina"),nn),
        el("button",{class:"v4btn",type:"button",onclick:function(){var v=nn.value.trim();if(v)ref.update({name:v.slice(0,40)}).then(function(){V.toast("✓");}).catch(fbErr);}},T("নাম সেভ","Save name","Simpan nama","حفظ الاسم","نام محفوظ","Hifadhi jina"))));
        (d.members||[]).filter(function(u){return u!==me;}).forEach(function(u){body.appendChild(el("div",{class:"v4li"},el("span",{class:"t"},el("b",null,(d.names&&d.names[u])||"—")),el("button",{class:"v4btn",type:"button",onclick:function(){if(!confirm(T("সরাবে?","Remove?","Buang?","إزالة؟","ہٹائیں؟","Ondoa?")))return;var up={members:c.FV.arrayRemove(u)};up["names."+u]=c.FV.delete();ref.update(up).catch(fbErr);}},T("সরাও","Remove","Buang","إزالة","ہٹائیں","Ondoa"))));});}
      body.appendChild(el("button",{class:"v4btn",type:"button",style:"justify-content:center;color:#E8836B",onclick:function(){if(!confirm(T("পরিবার ছেড়ে দেবে?","Leave this family?","Keluar keluarga?","مغادرة العائلة؟","فیملی چھوڑیں؟","Ondoka?")))return;
          var others=(d.members||[]).filter(function(u){return u!==me;});
          if(d.owner===me&&!others.length){ref.delete().then(function(){fstop();fam.fid=null;fam.doc=null;D().family=null;save();boot();}).catch(fbErr);return;}
          var up={members:c.FV.arrayRemove(me)};up["names."+me]=c.FV.delete();if(d.owner===me)up.owner=others[0];ref.update(up).catch(fbErr);}},T("পরিবার ছেড়ে দাও","Leave family","Keluar keluarga","مغادرة","فیملی چھوڑیں","Ondoka")));}}
  function addTx(){var c=fam.ctx,ref=c.db.collection("families").doc(fam.fid);
    var amt=el("input",{class:"v4in",type:"number",min:"0.01",step:"any",inputmode:"decimal",placeholder:T("পরিমাণ","Amount","Jumlah","المبلغ","رقم","Kiasi")}),cat=el("input",{class:"v4in",maxlength:"30",placeholder:T("খাত","Category","Kategori","الفئة","مد","Aina")}),note=el("input",{class:"v4in",maxlength:"60",placeholder:T("নোট (ঐচ্ছিক)","Note (optional)","Nota","ملاحظة","نوٹ","Maelezo")}),dt=el("input",{class:"v4in",type:"date",value:V.ymd()});
    var ch=el("div",{class:"v9chips"});fam.budgets.map(function(b){return b.cat;}).concat(["Groceries","Bills","Rent","School","Transport","Sadaqah"].filter(function(x){return !fam.budgets.some(function(b){return b.cat===x;});})).slice(0,10).forEach(function(k){ch.appendChild(el("button",{type:"button",onclick:function(){cat.value=k;}},k));});
    var sh=V.sheet(T("খরচ যোগ","Add expense","Tambah belanja","أضف مصروفًا","خرچ شامل","Ongeza matumizi"),el("div",{style:"display:grid;gap:10px"},amt,cat,ch,note,dt,
      el("button",{class:"v4btn gold",type:"button",onclick:function(){var a=parseFloat(amt.value),k=cat.value.trim();if(!(a>0)){amt.focus();return;}if(!k){cat.focus();return;}
        ref.collection("tx").add({amt:a,cat:k.slice(0,30),note:note.value.trim().slice(0,60),kind:"exp",by:c.user.uid,date:dt.value||V.ymd(),t:Date.now()}).then(function(){sh.close();V.toast("✓");}).catch(fbErr);}},T("সেভ","Save","Simpan","حفظ","محفوظ","Hifadhi"))));setTimeout(function(){amt.focus();},200);}
  function invite(){var txt=T("Amalnama-তে আমাদের পারিবারিক বাজেটে যোগ দাও। কোড: ","Join our family budget on Amalnama. Code: ","Sertai bajet keluarga kami di Amalnama. Kod: ","انضم إلى ميزانية عائلتنا في عملنامه. الرمز: ","Amalnama پر ہمارے فیملی بجٹ میں شامل ہوں۔ کوڈ: ","Jiunge na bajeti yetu kwenye Amalnama. Msimbo: ")+fam.fid+" · https://uowyeasin-cyber.github.io/AmalnamaForever/";
    if(navigator.share)navigator.share({title:"Amalnama",text:txt}).catch(function(){});else{try{navigator.clipboard.writeText(txt);V.toast(T("কপি হয়েছে","Copied","Disalin","تم النسخ","کاپی","Imenakiliwa"));}catch(e){}}}
  var pv2=window.setView;window.setView=function(v){if(v!=="family"&&fam.unsub.length&&!document.getElementById("v-family").contains(document.activeElement)){/* keep listening while the app is open; cheap */}pv2(v);};

  // =====================================================================
  // ENTRY POINTS · new tiles on Amal, a family card on Finance
  // =====================================================================
  function tile(icon,title,sub,go,cls){return el("button",{class:"v4tile "+(cls||""),type:"button",onclick:go},el("span",{class:"ic"},svgI(icon,28)),el("span",null,el("b",null,title),el("small",null,sub)));}
  function amalTiles(){var r=document.getElementById("v-amal");if(!r)return;var g=r.querySelector(".v4grid");if(!g||g.querySelector(".v9t"))return;
    g.appendChild(tile(ICO.qibla,T("কিবলা","Qibla","Kiblat","القبلة","قبلہ","Kibla"),T("লাইভ কম্পাস","Live compass","Kompas langsung","بوصلة حية","لائیو کمپاس","Dira"),function(){window.setView("qibla");},"v9t"));
    g.appendChild(tile(ICO.mosque,T("মসজিদ ও সুরাউ","Masjid & Surau","Masjid & Surau","المساجد","مسجد و مصلیٰ","Misikiti"),T("কাছের মসজিদ · জামাত","Nearby · jamaah log","Berhampiran · jemaah","الأقرب · الجماعة","قریبی · جماعت","Karibu · jamaa"),function(){window.setView("mosques");},"v9t"));
    var hz=tile(ICO.hifz,T("হিফজ ট্র্যাকার","Hifz tracker","Penjejak hafazan","متابعة الحفظ","حفظ ٹریکر","Hifdhi"),(function(){var p=memTotal();return p?num(Math.round(p/TOTAL*1000)/10)+"% · "+T("আজকের রিভিশন ","due today ","hari ini ","اليوم ","آج ","leo ")+num(due().length):T("মুখস্থ · রিভিশন · লক্ষ্য","Memorise · revise · goals","Hafal · ulang kaji","حفظ · مراجعة","یاد · دہرائی","Hifadhi · rudia");})(),function(){window.setView("hifz");},"v9t");
    hz.style.gridColumn="1 / -1";g.appendChild(hz);}
  function familyCard(){var r=document.getElementById("v-finance");if(!r||r.querySelector(".v9famcard"))return;var h=r.querySelector(".v4h");if(!h)return;
    h.insertAdjacentElement("afterend",el("button",{class:"v4card v9famcard",type:"button",onclick:function(){window.setView("family");}},el("span",{class:"v9fi sm"},svgI(ICO.family,24)),
      el("span",{style:"flex:1;min-width:0;text-align:start"},el("b",null,T("পারিবারিক বাজেট ও লক্ষ্য","Family budget & goals","Bajet & sasaran keluarga","ميزانية وأهداف العائلة","فیملی بجٹ و اہداف","Bajeti ya familia")),el("small",null,T("সবাই মিলে খরচ আর সঞ্চয় — লাইভ","Spend and save together — live","Belanja & simpan bersama","أنفقوا وادخروا معًا","مل کر خرچ و بچت","Pamoja — moja kwa moja"))),el("span",{class:"v4muted"},V.RTL?"‹":"›")));}
  var mo=null;
  var pv3=window.setView;window.setView=function(v){pv3(v);try{if(v==="amal")setTimeout(amalTiles,0);if(v==="finance"){setTimeout(familyCard,0);var f=document.getElementById("v-finance");if(f&&!mo){mo=new MutationObserver(function(){if(!f.querySelector(".v9famcard"))familyCard();});mo.observe(f,{childList:true});}}}catch(e){}};
  // loaded after the first screen: finish the page that is already open
  try{var cur=document.querySelector("section.v4s:not([hidden])");if(cur){if(cur.id==="v-amal")amalTiles();if(cur.id==="v-finance")familyCard();}}catch(e){}
})();
