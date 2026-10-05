/* Amalnama v4 · More menu, Pomodoro, Islamic videos (with after-prayer algorithm), Online Mufti (AI with references) */
(function(){
  var V=window.V4;if(!V)return;var t=V.t,num=V.num,el=V.el,ic=V.ic;
  var B=function(bn,en,ms,ar,ur,sw){return [bn,en,ms,ar,ur,sw];};
  var ADMIN="uowyeasin@gmail.com";

  // ---------- More
  function item(icon,title,sub,go,right){return el("button",{class:"v4li",type:"button",style:"width:100%;text-align:start;color:inherit;font:inherit;cursor:pointer",onclick:go},
    el("span",{style:"width:42px;height:42px;border-radius:14px;display:grid;place-items:center;background:rgba(232,201,138,.1);color:#F7E2A6;flex:none"},ic(icon,22)),
    el("span",{class:"t"},el("b",null,title),sub?el("small",null,sub):null),right||el("span",{class:"v4muted",style:"font-size:1.2rem"},V.RTL?"‹":"›"));}
  function showSec(id){window.setView(id==="settings"?"settings":"backup");}
  V.section("more",{open:function(r){r.innerHTML="";document.querySelectorAll(".backup").forEach(function(s){s.classList.remove("v4open");});
    r.appendChild(V.head(t(B("আরও","More","Lagi","المزيد","مزید","Zaidi")),"Amalnama"));
    var g=window.amGoogle,conn=g&&g.connected&&g.connected();
    r.appendChild(el("div",{class:"v4card gold"},el("div",{class:"v4row"},el("span",{class:"v4live"}),el("div",{style:"flex:1"},
        el("b",null,conn?t(B("Google সংযুক্ত · সিঙ্ক চালু","Google connected · sync on","Google bersambung","Google متصل","Google منسلک","Google imeunganishwa")):t(B("Google দিয়ে সংযোগ করো","Connect with Google","Sambung dengan Google","اتصل بـ Google","Google سے جڑیں","Unganisha na Google"))),
        el("div",{class:"v4muted"},conn?(g.calendarOn()?t(B("Calendar রিমাইন্ডার চালু","Calendar reminders on","Peringatan Kalendar aktif","تذكيرات التقويم مفعلة","کیلنڈر یاد دہانی چالو","Vikumbusho vya Kalenda vimewashwa")):t(B("Calendar রিমাইন্ডার বন্ধ","Calendar reminders off","Peringatan Kalendar mati","تذكيرات التقويم متوقفة","کیلنڈر یاد دہانی بند","Vikumbusho vya Kalenda vimezimwa"))):t(B("ল্যাপটপ-মোবাইল সিঙ্ক ও ব্যাকআপের জন্য (ঐচ্ছিক)","For laptop–phone sync and backup (optional)","Untuk penyegerakan (pilihan)","للمزامنة (اختياري)","سنک کے لیے (اختیاری)","Kwa usawazishaji (hiari)")))),
      conn?(g.calendarOn()?null:el("button",{class:"v4btn",type:"button",onclick:function(){g.enableCalendar();}},t(B("Calendar চালু","Turn on Calendar","Hidupkan","تشغيل","چالو","Washa")))):el("button",{class:"v4btn gold",type:"button",onclick:function(){g&&g.connect();}},t(B("সংযোগ","Connect","Sambung","اتصال","جڑیں","Unganisha"))))));
    var list=el("div",{class:"v4list"});
    list.appendChild(item("timer",t(B("পোমোডোরো ফোকাস","Pomodoro focus","Fokus Pomodoro","تركيز بومودورو","پومودورو فوکس","Pomodoro")),t(B("২৫ মিনিট পড়া · ৫ মিনিট বিরতি","25 min focus · 5 min break","25 minit fokus","٢٥ دقيقة تركيز","۲۵ منٹ فوکس","Dakika 25")),function(){window.setView("pomodoro");}));
    list.appendChild(item("video",t(B("ইসলামিক ভিডিও","Islamic videos","Video Islamik","فيديوهات إسلامية","اسلامی ویڈیوز","Video za Kiislamu")),t(B("নামাজের পরের তিলাওয়াত তোমার জন্য বাছাই","Recitations picked for you after each prayer","Bacaan dipilih untuk anda","تلاوات مختارة لك","آپ کے لیے منتخب تلاوت","Visomo vilivyochaguliwa")),function(){window.setView("videos");}));
    list.appendChild(item("phone",t(B("স্ক্রিন টাইম","Screen time","Masa skrin","وقت الشاشة","اسکرین ٹائم","Muda wa skrini")),screenSub(),screenSheet));
    list.appendChild(item("globe",t(B("ভাষা","Language","Bahasa","اللغة","زبان","Lugha")),(window.AM_LANGS&&window.AM_LANGS[V.L]?window.AM_LANGS[V.L].n:V.L),function(){if(window.AM_langPicker)window.AM_langPicker(false);}));
    list.appendChild(item("bell",t(B("নোটিফিকেশন","Notifications","Pemberitahuan","الإشعارات","اطلاعات","Arifa")),notifSub(),function(){if("Notification" in window&&Notification.permission==="default")Notification.requestPermission().then(function(){window.setView("more");});else V.toast(notifSub(),3500);}));
    list.appendChild(item("gear",t(B("সেটিংস","Settings","Tetapan","الإعدادات","ترتیبات","Mipangilio")),t(B("নাম, শহর, টাইমজোন, রিমাইন্ডার","Name, city, timezone, reminders","Nama, bandar, zon masa","الاسم، المدينة، المنطقة الزمنية","نام، شہر، ٹائم زون","Jina, mji, saa")),function(){showSec("settings");}));
    list.appendChild(item("cloud",t(B("ব্যাকআপ ও রিস্টোর","Backup & restore","Sandaran & pulih","النسخ الاحتياطي","بیک اپ","Hifadhi nakala")),t(B("ফাইলে সেভ বা ফিরিয়ে আনো","Save to a file or bring it back","Simpan ke fail","حفظ في ملف","فائل میں محفوظ","Hifadhi kwenye faili")),function(){showSec("backup");}));
    list.appendChild(item("install",t(B("অ্যাপ ইনস্টল","Install the app","Pasang aplikasi","تثبيت التطبيق","ایپ انسٹال","Sakinisha programu")),t(B("ফোন বা কম্পিউটারে এক ক্লিকে","One tap on phone or computer","Satu ketik","بنقرة واحدة","ایک کلک","Mguso mmoja")),function(){location.href="install.html";}));
    list.appendChild(item("feedback",t(B("মতামত দাও","Send feedback","Maklum balas","ملاحظات","رائے دیں","Maoni")),t(B("সমস্যা বা নতুন আইডিয়া জানাও","Report a problem or suggest an idea","Lapor masalah","أبلغ عن مشكلة","مسئلہ بتائیں","Ripoti tatizo")),feedback));
    list.appendChild(item("info",t(B("অ্যাপ সম্পর্কে","About","Tentang","حول","تعارف","Kuhusu")),t(B("নতুন ভার্সন · প্রাইভেসি · শর্তাবলি","New version · Privacy · Terms","Versi baharu · Privasi","إصدار جديد · الخصوصية","نیا ورژن · پرائیویسی","Toleo jipya · Faragha")),function(){location.href="about.html";}));
    r.appendChild(list);
    // admin (only uowyeasin@gmail.com — enforced again by Firestore rules)
    var em="";try{em=(localStorage.getItem("am-gemail")||"").toLowerCase();}catch(e){}
    var adm=el("div",{id:"v4adm"});r.appendChild(adm);
    function showAdm(){adm.innerHTML="";adm.appendChild(el("div",{class:"v4list",style:"margin-top:8px"},item("shield",t(B("অ্যাডমিন ড্যাশবোর্ড","Admin dashboard","Papan pemuka admin","لوحة المشرف","ایڈمن ڈیش بورڈ","Dashibodi ya admin")),t(B("সদস্য, অ্যাক্টিভিটি, যোগদানের অনুরোধ","Members, activity, join requests","Ahli, aktiviti, permintaan","الأعضاء، النشاط، الطلبات","اراکین، سرگرمی، درخواستیں","Wanachama, shughuli, maombi")),function(){if(window.AMX.v5open)window.AMX.v5open("admin");window.setView("comm");})));}
    if(em===ADMIN||window.AMX.isAdmin)showAdm();
    r.appendChild(el("p",{class:"v4muted",style:"text-align:center;margin-top:18px"},"Amalnama · "+t(B("নতুন ভার্সন","New version","Versi baharu","إصدار جديد","نیا ورژن","Toleo jipya"))+" 4.0"));}});
  function notifSub(){if(!("Notification" in window))return t(B("এই ব্রাউজারে নেই","Not supported here","Tidak disokong","غير مدعوم","دستیاب نہیں","Haitumiki"));
    return Notification.permission==="granted"?t(B("চালু ✓","On ✓","Aktif ✓","مفعلة ✓","چالو ✓","Imewashwa ✓")):Notification.permission==="denied"?t(B("ব্রাউজারের সেটিংসে বন্ধ","Blocked in browser settings","Disekat","محظورة","بلاک","Imezuiwa")):t(B("চালু করতে চাপো","Tap to turn on","Ketik untuk hidupkan","اضغط للتفعيل","چالو کرنے کو دبائیں","Gusa kuwasha"));}
  function screenSub(){var s=V.screen();return t(B("আজ অ্যাপে ","Today in app: ","Hari ini: ","اليوم: ","آج ایپ میں: ","Leo: "))+num(s.app)+" "+t(B("মিনিট","min","minit","دقيقة","منٹ","dakika"))+(s.phone!=null?" · "+t(B("ফোনে ","phone ","telefon ","الهاتف ","فون ","simu "))+num(Math.floor(s.phone/60))+"h "+num(s.phone%60)+"m":"");}
  function hm(m){m=Math.round(m||0);var h=Math.floor(m/60),mm=m%60;return h?num(h)+"h "+num(mm)+"m":num(mm)+" "+t(B("মিনিট","min","minit","دقيقة","منٹ","dakika"));}
  function screenSheet(){var v=V.V();v.st=v.st||{on:true,days:{}};v.st.days=v.st.days||{};var goal=v.st.goal||180;
    var on=el("input",{type:"checkbox",style:"width:22px;height:22px;accent-color:#C9A050"});on.checked=v.st.on!==false;
    var s=V.screen(),h=el("input",{class:"v4in",type:"number",inputmode:"numeric",min:"0",max:"24",placeholder:"0",value:s.phone!=null?Math.floor(s.phone/60):""}),m=el("input",{class:"v4in",type:"number",inputmode:"numeric",min:"0",max:"59",placeholder:"0",value:s.phone!=null?s.phone%60:""});
    var gsel=el("select",{class:"v4in"});[60,120,180,240,300,360].forEach(function(x){gsel.appendChild(el("option",{value:String(x)},num(x/60)+" "+t(B("ঘণ্টা","hours","jam","ساعات","گھنٹے","saa"))));});gsel.value=String(goal);
    function card(lab,val,sub,col){return el("div",{style:"flex:1;min-width:0;padding:12px 14px;border-radius:18px;background:#0E3236;border:1px solid rgba(232,201,138,.18)"},el("small",{class:"v4muted",style:"display:block;font-size:.72rem"},lab),el("b",{style:"display:block;font-family:var(--fh);font-size:1.45rem;color:"+(col||"#F7E2A6")+";margin-top:2px"},val),sub?el("small",{class:"v4muted",style:"font-size:.7rem"},sub):null);}
    var appCard=el("div",{style:"display:flex;gap:10px"});
    function drawCards(){appCard.innerHTML="";var x=V.screen();var ph=x.phone,g=parseInt(gsel.value,10)||180;
      appCard.appendChild(card(t(B("আজ Amalnama-তে","Today in Amalnama","Hari ini dalam Amalnama","اليوم في عملنامه","آج Amalnama میں","Leo ndani ya Amalnama")),x.app<1?"<"+num(1)+" "+t(B("মিনিট","min","minit","دقيقة","منٹ","dakika")):hm(x.app),t(B("নিজে থেকে গোনা হচ্ছে ●","Counted automatically ●","Dikira automatik ●","يُحسب تلقائيًا ●","خودبخود گنا جا رہا ●","Inahesabiwa yenyewe ●")),"#3ECF9E"));
      appCard.appendChild(card(t(B("আজ ফোনে","Phone today","Telefon hari ini","الهاتف اليوم","آج فون پر","Simu leo")),ph!=null?hm(ph):"—",ph!=null?(ph>g?t(B("লক্ষ্যের চেয়ে বেশি","Over your limit","Melebihi had","فوق الحد","حد سے زیادہ","Zaidi ya kikomo")):t(B("লক্ষ্যের মধ্যে ✓","Within your limit ✓","Dalam had ✓","ضمن الحد ✓","حد کے اندر ✓","Ndani ya kikomo ✓"))):t(B("নিচে লেখো","Type it below","Taip di bawah","اكتبه أدناه","نیچے لکھیں","Andika chini")),ph!=null&&ph>g?"#E8836B":"#F7E2A6"));}
    drawCards();var live=setInterval(function(){if(!appCard.isConnected){clearInterval(live);return;}drawCards();},15000);
    // last 7 days chart (every day shown, even empty ones)
    var chart=el("div",{style:"display:grid;grid-template-columns:repeat(7,1fr);gap:8px;align-items:end;height:150px;padding:10px 10px 0;border-radius:18px;background:#0B2A2D"});
    function drawChart(){chart.innerHTML="";var g=parseInt(gsel.value,10)||180,days=[];for(var k=6;k>=0;k--){var d=new Date(Date.now()-k*86400000);days.push(V.ymd(d));}
      var mx=Math.max.apply(null,days.map(function(d){var x=v.st.days[d]||{};return Math.max(x.phone||0,x.app||0);}).concat([g]));
      days.forEach(function(d,ix){var x=v.st.days[d]||{},val=x.phone!=null?x.phone:(x.app||0),pct=Math.max(3,Math.round(val/mx*100)),over=x.phone!=null&&x.phone>g;
        var wd=new Intl.DateTimeFormat(V.L==="bn"?"bn":V.L,{weekday:"short"}).format(new Date(d+"T12:00:00"));
        chart.appendChild(el("div",{style:"display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;gap:4px;min-width:0"},
          el("small",{style:"font-size:.6rem;color:#CFE3DE;white-space:nowrap"},val?(val>=60?num(Math.floor(val/60))+"h":num(Math.round(val))+"m"):""),
          el("div",{style:"width:100%;max-width:26px;height:"+pct+"%;border-radius:8px 8px 3px 3px;background:"+(over?"linear-gradient(#F0A08C,#C8553D)":x.phone!=null?"linear-gradient(#F7E2A6,#B88A3E)":"linear-gradient(#5EE0B5,#1E8A68)")+(ix===6?";box-shadow:0 0 0 2px rgba(247,226,166,.6)":"")}),
          el("small",{class:"v4muted",style:"font-size:.62rem;padding-bottom:6px"},wd)));});}
    drawChart();gsel.onchange=function(){drawCards();drawChart();};
    var legend=el("div",{style:"display:flex;gap:12px;flex-wrap:wrap;font-size:.7rem",class:"v4muted"},
      el("span",null,el("i",{style:"display:inline-block;width:9px;height:9px;border-radius:3px;background:#C9A050;margin-inline-end:5px"}),t(B("ফোনের সময়","Phone time","Masa telefon","وقت الهاتف","فون کا وقت","Muda wa simu"))),
      el("span",null,el("i",{style:"display:inline-block;width:9px;height:9px;border-radius:3px;background:#3ECF9E;margin-inline-end:5px"}),t(B("শুধু অ্যাপের সময়","App time only","Masa aplikasi","وقت التطبيق","صرف ایپ کا وقت","Muda wa programu"))),
      el("span",null,el("i",{style:"display:inline-block;width:9px;height:9px;border-radius:3px;background:#E8836B;margin-inline-end:5px"}),t(B("লক্ষ্যের বেশি","Over limit","Melebihi had","فوق الحد","حد سے زیادہ","Zaidi ya kikomo"))));
    var sh=V.sheet(t(B("স্ক্রিন টাইম","Screen time","Masa skrin","وقت الشاشة","اسکرین ٹائم","Muda wa skrini")),el("div",{style:"display:grid;gap:12px"},
      appCard,chart,legend,
      el("div",{class:"v4f"},el("label",{class:"v4lab"},t(B("আজ ফোনে (ঘণ্টা)","Phone today (hours)","Telefon hari ini (jam)","الهاتف اليوم (ساعات)","آج فون (گھنٹے)","Simu leo (saa)")),h),el("label",{class:"v4lab"},t(B("মিনিট","Minutes","Minit","دقائق","منٹ","Dakika")),m)),
      el("p",{class:"v4muted",style:"margin:-4px 0 0;font-size:.74rem"},t(B("ফোনের মোট সময় ব্রাউজার-অ্যাপ নিজে পড়তে পারে না — Settings › Digital Wellbeing (Android) বা Screen Time (iPhone) দেখে লেখো।","A web app can't read the phone's total — check Settings › Digital Wellbeing (Android) or Screen Time (iPhone) and type it.","Lihat Digital Wellbeing / Screen Time dan taip.","راجع Digital Wellbeing / Screen Time واكتبه.","Digital Wellbeing / Screen Time دیکھ کر لکھیں۔","Angalia Digital Wellbeing / Screen Time uandike."))),
      el("label",{class:"v4lab"},t(B("দৈনিক ফোন-সময়ের লক্ষ্য","Daily phone limit","Had harian telefon","الحد اليومي للهاتف","روزانہ فون کی حد","Kikomo cha kila siku")),gsel),
      el("label",{class:"v4row",style:"justify-content:space-between;gap:10px"},el("span",null,t(B("অ্যাপে কাটানো সময় গোনো","Count time spent in the app","Kira masa dalam aplikasi","احسب الوقت في التطبيق","ایپ میں وقت گنیں","Hesabu muda ndani ya programu"))),on),
      el("button",{class:"v4btn gold",type:"button",onclick:function(){v.st.on=on.checked;v.st.goal=parseInt(gsel.value,10)||180;var hh=parseInt(h.value,10),mm=parseInt(m.value,10);
        var d=v.st.days[V.ymd()]=v.st.days[V.ymd()]||{app:0,phone:null};d.phone=(isNaN(hh)&&isNaN(mm))?null:Math.min(1440,(hh||0)*60+(mm||0));V.save();clearInterval(live);sh.close();
        V.toast(t(B("সেভ হয়েছে ✓","Saved ✓","Disimpan ✓","تم الحفظ ✓","محفوظ ✓","Imehifadhiwa ✓")));if(V.refreshNote)V.refreshNote();window.setView("more");}},t(B("সেভ","Save","Simpan","حفظ","محفوظ","Hifadhi")))));}
  function feedback(){var ta=el("textarea",{class:"v4in",rows:"5",maxlength:"1000",placeholder:t(B("কী ভালো লাগল, কী সমস্যা হলো, নতুন কী চাও…","What you liked, what went wrong, what you'd like next…","Apa yang anda suka…","ما أعجبك، ما المشكلة…","کیا اچھا لگا، کیا مسئلہ…","Ulichopenda, tatizo…"))});
    var sh=V.sheet(t(B("মতামত","Feedback","Maklum balas","ملاحظات","رائے","Maoni")),el("div",{style:"display:grid;gap:10px"},ta,
      el("button",{class:"v4btn gold",type:"button",onclick:function(){var body=ta.value.trim();if(!body){ta.focus();return;}
        location.href="mailto:"+ADMIN+"?subject="+encodeURIComponent("Amalnama feedback")+"&body="+encodeURIComponent(body+"\n\n— "+navigator.userAgent);sh.close();}},t(B("ইমেইলে পাঠাও","Send by email","Hantar e-mel","أرسل بالبريد","ای میل","Tuma kwa barua pepe")))));}

  // ---------- Pomodoro
  var PM={mode:"focus",left:25*60,run:false,timer:null,end:0,cyc:0};
  var LEN={focus:25,short:5,long:15};
  function pmDay(){var v=V.V();v.pomo=v.pomo||{};return v.pomo[V.ymd()]||0;}
  function beep(){try{var C=new (window.AudioContext||window.webkitAudioContext)();[0,0.35,0.7].forEach(function(s){var o=C.createOscillator(),g=C.createGain();o.type="sine";o.frequency.value=880;o.connect(g);g.connect(C.destination);
      g.gain.setValueAtTime(0.0001,C.currentTime+s);g.gain.exponentialRampToValueAtTime(0.25,C.currentTime+s+0.02);g.gain.exponentialRampToValueAtTime(0.0001,C.currentTime+s+0.3);o.start(C.currentTime+s);o.stop(C.currentTime+s+0.32);});}catch(e){}}
  var proot=null;
  function pmTick(){if(!PM.run)return;PM.left=Math.max(0,Math.round((PM.end-Date.now())/1000));if(PM.left<=0){PM.run=false;clearInterval(PM.timer);beep();
      if(PM.mode==="focus"){var v=V.V();v.pomo=v.pomo||{};v.pomo[V.ymd()]=(v.pomo[V.ymd()]||0)+1;V.save();PM.cyc++;PM.mode=PM.cyc%4===0?"long":"short";}else PM.mode="focus";
      PM.left=LEN[PM.mode]*60;var msg=PM.mode==="focus"?t(B("বিরতি শেষ — আবার শুরু করো","Break over — back to focus","Rehat tamat","انتهت الاستراحة","وقفہ ختم","Mapumziko yamekwisha")):t(B("মাশাআল্লাহ! একটা পোমোডোরো শেষ — বিরতি নাও","MashaAllah! Pomodoro done — take a break","Pomodoro selesai","انتهت الجلسة","پومودورو مکمل","Pomodoro imekamilika"));
      if("Notification" in window&&Notification.permission==="granted"&&navigator.serviceWorker)navigator.serviceWorker.ready.then(function(r){r.showNotification("⏱ Pomodoro",{body:msg,icon:"icon-192.png",tag:"pomo"});}).catch(function(){});else V.toast(msg);}
    if(proot&&!proot.hidden)pmDraw();}
  function pmDraw(){if(!proot)return;var r=proot;r.innerHTML="";var tot=LEN[PM.mode]*60,p=Math.round((tot-PM.left)/tot*100),mm=Math.floor(PM.left/60),ss=PM.left%60;
    r.appendChild(V.head(t(B("পোমোডোরো ফোকাস","Pomodoro focus","Fokus Pomodoro","تركيز بومودورو","پومودورو فوکس","Pomodoro")),t(B("আজ ","Today: ","Hari ini: ","اليوم: ","آج: ","Leo: "))+num(pmDay())+" "+t(B("টা সেশন","sessions","sesi","جلسات","سیشن","vipindi")),"more"));
    r.appendChild(V.seg([["focus",t(B("ফোকাস","Focus","Fokus","تركيز","فوکس","Kuzingatia"))],["short",t(B("ছোট বিরতি","Short break","Rehat pendek","استراحة قصيرة","مختصر وقفہ","Mapumziko mafupi"))],["long",t(B("লম্বা বিরতি","Long break","Rehat panjang","استراحة طويلة","لمبا وقفہ","Mapumziko marefu"))]],PM.mode,function(x){PM.mode=x;PM.run=false;clearInterval(PM.timer);PM.left=LEN[x]*60;pmDraw();}));
    var lab=V.ring(p,240,1.8,PM.mode==="focus"?"#E8C98A":"#3ECF9E",el("span",null,el("span",{class:"t",style:"display:block;font-family:var(--fh);font-size:3rem;color:#FBF3DE"},num(String(mm).padStart(2,"0")+":"+String(ss).padStart(2,"0"))),el("span",{style:"display:block;font-size:.85rem;color:var(--muted)"},PM.mode==="focus"?t(B("মনোযোগ দাও","Stay focused","Fokus","ركّز","توجہ دیں","Zingatia")):t(B("বিশ্রাম","Rest","Rehat","راحة","آرام","Pumzika")))));
    r.appendChild(el("div",{class:"v4pomo"},lab));
    r.appendChild(el("div",{class:"v4row",style:"justify-content:center;gap:10px"},
      el("button",{class:"v4btn gold",type:"button",style:"min-width:140px",onclick:function(){if(PM.run){PM.run=false;clearInterval(PM.timer);}else{PM.run=true;PM.end=Date.now()+PM.left*1000;clearInterval(PM.timer);PM.timer=setInterval(pmTick,1000);if(V.askNotify)V.askNotify();}pmDraw();}},PM.run?t(B("থামাও","Pause","Jeda","إيقاف","روکیں","Simamisha")):t(B("শুরু করো","Start","Mula","ابدأ","شروع","Anza"))),
      el("button",{class:"v4btn",type:"button",onclick:function(){PM.run=false;clearInterval(PM.timer);PM.left=LEN[PM.mode]*60;pmDraw();}},t(B("রিসেট","Reset","Set semula","إعادة","ری سیٹ","Weka upya")))));
    var lens=el("div",{class:"v4card"},el("b",null,t(B("সময় (মিনিট)","Lengths (minutes)","Tempoh (minit)","المدة (دقائق)","دورانیہ (منٹ)","Muda (dakika)"))));
    var f=el("div",{class:"v4f",style:"grid-template-columns:1fr 1fr 1fr;margin-top:8px"});
    [["focus",B("ফোকাস","Focus","Fokus","تركيز","فوکس","Kuzingatia")],["short",B("ছোট","Short","Pendek","قصيرة","مختصر","Fupi")],["long",B("লম্বা","Long","Panjang","طويلة","لمبا","Ndefu")]].forEach(function(x){var i=el("input",{class:"v4in",type:"number",min:"1",max:"120",value:LEN[x[0]]});
      i.onchange=function(){var n=Math.max(1,Math.min(120,parseInt(i.value,10)||LEN[x[0]]));LEN[x[0]]=n;var v=V.V();v.pomoLen=LEN;V.save();if(!PM.run&&PM.mode===x[0]){PM.left=n*60;pmDraw();}};f.appendChild(el("label",{class:"v4lab"},t(x[1]),i));});
    lens.appendChild(f);r.appendChild(lens);
    r.appendChild(el("p",{class:"v4muted",style:"text-align:center"},t(B("প্রতি ৪টা ফোকাসের পর লম্বা বিরতি। শুরুতে বিসমিল্লাহ বলো।","A long break after every 4 focus sessions. Begin with Bismillah.","Rehat panjang selepas 4 sesi.","استراحة طويلة بعد ٤ جلسات.","ہر ۴ سیشن کے بعد لمبا وقفہ۔","Mapumziko marefu baada ya vipindi 4."))));}
  try{var pl=V.V().pomoLen;if(pl)LEN=pl;PM.left=LEN.focus*60;}catch(e){}
  V.section("pomodoro",{open:function(r){proot=r;pmDraw();}});
  V.pomo=function(){if(PM.run)PM.left=Math.max(0,Math.round((PM.end-Date.now())/1000));return {run:PM.run,left:PM.left,mode:PM.mode};};

  // ---------- Videos (YouTube-style, in-app, privacy-enhanced player)
  var VIDS=[
    ["ZdsddmOvu5E","Surah Yasin · Mishary Alafasy","Alafasy",{fajr:5},36],["z-W_NfyAP3Q","Surah Yasin (full) · Mishary Rashid Al Afasy","IslamWelcomesAll",{fajr:4},36],
    ["eK5yTIzEPIU","Surah Al-Fath (Full) · with translation","Quran Recitation",{dhuhr:5},48],["W_Qs8nqHOwo","Surah Al-Fath · Sheikh Shuraim","IQRA AL-QURAN",{dhuhr:4},48],
    ["T-JOl5J1i3E","Surah An-Naba · Mishary Al Afasy","Ar-Rahmaan Quran Channel",{asr:5},78],["PS0D4ZHxUEo","Surah An-Naba · Mishari Rashid Alafasy","Authentic Duas",{asr:4},78],
    ["N78PGdl2-Wo","Surah Al-Waqiah · Sheikh Shuraim","IQRA AL-QURAN",{maghrib:5},56],["lp3_OTORriM","Surah Al-Waqiah · full recitation & translation","Islamic Education Corner",{maghrib:4},56],["A7QGjQ78ZPY","Surah Al-Waqiah · Zikrullah TV","Zikrullah TV",{maghrib:3},56],
    ["J7SQIhY7_WE","Surah Al-Mulk · Mishary Alafasy","alshuja",{isha:5},67],["njwCuegxxU4","Surah Al-Mulk · Mishary Alafasy (English)","Inspiriting Reminders",{isha:4},67],
    ["fE2STDB8j-w","Ayat al-Kursi · Mishary Rashid Alafasy","WayToJannah",{all:3},2],["Rwl0xvVORwU","Ayat al-Kursi · Mishary Alafasy","Yazan Altwil",{all:2},2],
    ["2elvyy2efC4","The 4 Quls · Kafirun, Ikhlas, Falaq, Nas","Quran Recitation with Nazim",{all:3},112],["ctpAhBbUkJE","Powerful recitation of the 4 Quls","Tilawat of Quran",{all:2},112],
    ["Qz41auzaPFk","Last 3 verses of Surah Al-Hashr","Muslims Education",{all:3},59],["dn4BYMRIa94","Surah Al-Hashr · last 3 ayat","E-Learn Quran Academy",{all:2},59],
    ["k6OeZUYOI_Q","Al-Fatiha · Ayat al-Kursi · 4 Quls · Omar Hisham","Omar Hisham Al Arabi",{all:2},1]];
  var vseed=Math.random(),vroot=null,playing=null;
  function rank(){var p=V.currentPrayer?V.currentPrayer():"fajr",h=(V.V().vh)||{};
    return VIDS.map(function(v,i){var w=v[3],s=(w[p]||0)*10+(w.all||0)*4;var seen=h[v[0]]||0;s-=seen*3;s+=((Math.sin((i+1)*9301+vseed*49297)+1)/2)*3;return {v:v,s:s,top:!!w[p]};})
      .sort(function(a,b){return b.s-a.s;});}
  V.section("videos",{open:function(r){vroot=r;vdraw();}});
  function vdraw(){var r=vroot;r.innerHTML="";var p=V.currentPrayer?V.currentPrayer():"fajr";
    r.appendChild(V.head(t(B("ইসলামিক ভিডিও","Islamic videos","Video Islamik","فيديوهات إسلامية","اسلامی ویڈیوز","Video za Kiislamu")),t(B("এখন তোমার জন্য: ","Now for you: ","Untuk anda: ","الآن لك: ","ابھی آپ کے لیے: ","Sasa kwako: "))+(V.PN?t(V.PN[p]):"")+" "+t(B("নামাজের পরের তিলাওয়াত","after-prayer recitation","bacaan selepas solat","تلاوة بعد الصلاة","نماز کے بعد تلاوت","kisomo baada ya swala")),"more",
      el("button",{class:"v4ico",type:"button","aria-label":t(B("রিফ্রেশ","Refresh","Muat semula","تحديث","ریفریش","Onyesha upya")),onclick:function(){vseed=Math.random();playing=null;vdraw();}},ic("refresh",22))));
    if(playing){r.appendChild(el("div",{class:"v4player"},el("iframe",{src:"https://www.youtube-nocookie.com/embed/"+playing[0]+"?autoplay=1&rel=0&modestbranding=1&playsinline=1",title:playing[1],allow:"autoplay; encrypted-media; picture-in-picture",allowfullscreen:true,referrerpolicy:"strict-origin-when-cross-origin"})));
      r.appendChild(el("div",{class:"v4row",style:"margin:10px 0 14px"},el("div",{style:"flex:1"},el("b",null,playing[1]),el("div",{class:"v4muted"},playing[2])),
        el("button",{class:"v4btn",type:"button",onclick:function(){if(window.AMX.quran)window.AMX.quran.open(playing[4],1);}},ic("book",18),t(B("পড়ো","Read","Baca","اقرأ","پڑھیں","Soma")))));}
    var box=el("div",{class:"v4vid"});
    rank().forEach(function(x){var v=x.v;if(playing&&playing[0]===v[0])return;
      box.appendChild(el("div",null,el("button",{class:"th",type:"button","aria-label":v[1],onclick:function(){var h=V.V();h.vh=h.vh||{};h.vh[v[0]]=(h.vh[v[0]]||0)+1;V.save();playing=v;vdraw();window.scrollTo({top:0,behavior:"smooth"});}},
          el("img",{src:"https://i.ytimg.com/vi/"+v[0]+"/hqdefault.jpg",alt:"",loading:"lazy"}),el("span",{class:"pl"},el("span",null,ic("play",22))),x.top?el("span",{class:"tag"},t(B("এখন তোমার জন্য","Now for you","Untuk anda","الآن لك","ابھی آپ کے لیے","Sasa kwako"))):null),
        el("div",{class:"v4row",style:"margin-top:8px;align-items:flex-start"},el("span",{style:"width:36px;height:36px;border-radius:50%;background:#13403F;color:#E2C27A;display:grid;place-items:center;font-weight:700;flex:none"},v[2].charAt(0)),
          el("div",{style:"flex:1;min-width:0"},el("b",{style:"display:block;font-size:.92rem;line-height:1.4"},v[1]),el("small",{class:"v4muted"},v[2])))));});
    r.appendChild(box);
    r.appendChild(el("p",{class:"v4muted",style:"margin-top:12px"},t(B("ভিডিওগুলো YouTube থেকে অ্যাপের ভেতরেই চলে। তুমি যা দেখো ও কোন ওয়াক্ত চলছে তা দেখে সাজানো হয়।","Videos play inside the app from YouTube, ordered by what you watch and the current prayer time.","Video dimainkan dalam aplikasi.","تُعرض الفيديوهات داخل التطبيق.","ویڈیوز ایپ کے اندر چلتی ہیں۔","Video zinachezwa ndani ya programu."))));}

  // ---------- Online Mufti (AI) with Quran / Hadith / Ijma / Qiyas references
  var SYS="You are \"Online Mufti\" inside the Amalnama app — a careful, humble Islamic knowledge assistant. Answer in the user's language (detect it from the question; default Bangla). "+
    "Base answers on the Quran, authentic Sunnah, Ijma and Qiyas. ALWAYS end with a short 'References' list: Quran as Surah name + number:ayah; hadith as collection + number (sunnah.com numbering) with grade when known; mention Ijma/Qiyas or the madhhab view where relevant. "+
    "Never invent references; if unsure, say so. Where the four madhhabs differ, briefly show the main views (note the Hanafi view since many users are from South Asia). "+
    "Keep answers concise, practical, gentle, with a suggestion for action. For personal, family, divorce, inheritance shares, finance contracts, medical or legal matters, or anything serious, remind the user to confirm with a qualified local mufti. "+
    "Do not issue takfir, do not discuss sectarian attacks, stay respectful. You are an AI and not a human mufti.";
  // flash-lite answers in a few seconds; the bigger model is the backup (it thinks long and can stall on slow phone networks)
  var MODELS=["gemini-3.5-flash-lite","gemini-3.5-flash"];
  var ai=null,aiErr=null,mroot=null,busy=false;
  function loadAI(){if(ai)return Promise.resolve(ai);var Vn="12.19.0";
    return Promise.all([import("https://www.gstatic.com/firebasejs/"+Vn+"/firebase-app.js"),import("https://www.gstatic.com/firebasejs/"+Vn+"/firebase-ai.js")]).then(function(m){
      var A=m[0],AI=m[1],app=(A.getApps().filter(function(a){return a.name==="mufti";})[0])||A.initializeApp(window.AMALNAMA_FIREBASE,"mufti");
      ai={AI:AI,inst:AI.getAI(app,{backend:new AI.GoogleAIBackend()})};return ai;});}
  function ask(hist,q,onChunk){return loadAI().then(function(a){var i=0;
      function attempt(){var model=a.AI.getGenerativeModel(a.inst,{model:MODELS[i],systemInstruction:SYS,generationConfig:{temperature:0.3,maxOutputTokens:4096}},{timeout:60000});
        var chat=model.startChat({history:hist.slice(-10).map(function(h){return {role:h.r==="me"?"user":"model",parts:[{text:String(h.x).slice(0,4000)}]};})});
        return chat.sendMessageStream(q).then(function(res){var all="";return (async function(){for await(var c of res.stream){var tx="";try{tx=c.text();}catch(e){}all+=tx;if(all)onChunk(all);}return all;})();})
          .then(function(all){if(!String(all||"").trim())throw new Error("empty answer");return all;})
          .catch(function(e){console.warn("Mufti AI",MODELS[i],e);if(i<MODELS.length-1){i++;onChunk("…");return attempt();}throw e;});}
      return attempt();});}
  var OFF=[[/নামাজ|সালাত|salah|prayer|solat/i,B("পাঁচ ওয়াক্ত নামাজ প্রত্যেক প্রাপ্তবয়স্ক মুসলিমের ওপর ফরজ। সময়মতো আদায়ই আল্লাহর কাছে সবচেয়ে প্রিয় আমলগুলোর একটি।\n\nরেফারেন্স:\n• সূরা নিসা ৪:১০৩\n• বুখারী ৫২৭","The five daily prayers are obligatory on every adult Muslim; praying on time is among the deeds most beloved to Allah.\n\nReferences:\n• An-Nisa 4:103\n• Bukhari 527","","","","")],
    [/যাকাত|zakat|zakah/i,B("নিসাব পরিমাণ সম্পদ এক চান্দ্র বছর থাকলে ২.৫% যাকাত দিতে হয়। শরিয়াহ › যাকাত ক্যালকুলেটরে হিসাব করো।\n\nরেফারেন্স:\n• সূরা তাওবা ৯:৬০, ১০৩\n• আবু দাউদ ১৫৭৩","Zakat of 2.5% is due on wealth at or above the nisab held for one lunar year. Use Shariah › Zakat calculator.\n\nReferences:\n• At-Tawbah 9:60, 103\n• Abu Dawud 1573","","","","")],
    [/রোজা|সিয়াম|fast|puasa|sawm/i,B("রমজানের রোজা ফরজ; ভুলে খেলে রোজা ভাঙে না, ইচ্ছাকৃত খেলে ভাঙে।\n\nরেফারেন্স:\n• সূরা বাকারা ২:১৮৩–১৮৭\n• বুখারী ১৯৩৩","Fasting Ramadan is obligatory; eating by mistake does not break the fast, eating deliberately does.\n\nReferences:\n• Al-Baqarah 2:183–187\n• Bukhari 1933","","","","")]];
  function offline(q){for(var i=0;i<OFF.length;i++)if(OFF[i][0].test(q))return t(OFF[i][1]);
    return t(B("এই মুহূর্তে লাইভ উত্তর আনা যাচ্ছে না (ইন্টারনেট বা সার্ভার)। একটু পরে আবার জিজ্ঞেস করো, অথবা নিকটস্থ নির্ভরযোগ্য মুফতির কাছে জানতে চাও।","I can't fetch a live answer right now (internet or server). Please ask again shortly, or consult a trusted local mufti.","Tidak dapat menjawab sekarang. Cuba lagi.","تعذر الإجابة الآن. حاول لاحقًا.","ابھی جواب نہیں مل سکا۔ بعد میں کوشش کریں۔","Haiwezekani sasa. Jaribu tena."));}
  V.section("mufti",{open:function(r){mroot=r;mdraw();}});
  // light markdown for answers: **bold**, *italic*, headings, bullet and numbered lists (built safely, no innerHTML)
  function md(box,txt){box.innerHTML="";var list=null;
    function inline(p,str){var re=/(\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\n]+)\*)/g,last=0,mm;while((mm=re.exec(str))){if(mm.index>last)p.appendChild(document.createTextNode(str.slice(last,mm.index)));
        p.appendChild(mm[2]||mm[3]?el("strong",null,mm[2]||mm[3]):el("em",null,mm[4]));last=re.lastIndex;}if(last<str.length)p.appendChild(document.createTextNode(str.slice(last)));return p;}
    String(txt||"").replace(/\r/g,"").split("\n").forEach(function(line){var l=line.trim();var b=/^([-*•]|\d+[.)])\s+(.*)$/.exec(l);
      if(b){var ord=/\d/.test(b[1]);if(!list||list.ord!==ord){list=el(ord?"ol":"ul",{style:"margin:6px 0;padding-inline-start:22px;display:grid;gap:4px"});list.ord=ord;box.appendChild(list);}list.appendChild(inline(el("li"),b[2]));return;}
      list=null;if(!l){return;}var h=/^#{1,4}\s+(.*)$/.exec(l);
      if(h){box.appendChild(inline(el("div",{style:"font-weight:700;color:#F7E2A6;margin:8px 0 2px"}),h[1]));return;}
      if(/^-{3,}$/.test(l)){box.appendChild(el("hr",{style:"border:0;border-top:1px solid rgba(232,201,138,.25);margin:8px 0"}));return;}
      box.appendChild(inline(el("p",{style:"margin:0 0 6px"}),l));});}
  function mdraw(){var r=mroot,v=V.V();v.mufti=v.mufti||[];r.innerHTML="";
    var hdr=el("div",{class:"v4h"},el("button",{class:"v4back",type:"button","aria-label":"Back",onclick:function(){window.setView("today");}},ic("back",20)),
      el("span",{style:"width:52px;height:52px;border-radius:50%;padding:2px;background:conic-gradient(from 200deg,#F7E2A6,#B88A3E,#F7E2A6,#C9A050,#F7E2A6);flex:none"},(function(){var s=V.muftiAvatar("mf");s.setAttribute("width","48");s.setAttribute("height","48");s.style.display="block";return s;})()),
      el("h1",{style:"font-size:1.25rem"},t(B("অনলাইন মুফতি","Online Mufti","Mufti dalam talian","المفتي عبر الإنترنت","آن لائن مفتی","Mufti mtandaoni")),el("span",{class:"sub"},el("span",{class:"v4live",style:"margin-inline-end:6px;vertical-align:middle"}),t(B("লাইভ · কুরআন, হাদিস, ইজমা ও কিয়াসের রেফারেন্সসহ","Live · with Quran, Hadith, Ijma & Qiyas references","Langsung · dengan rujukan","مباشر · مع المراجع","لائیو · حوالوں کے ساتھ","Moja kwa moja · na marejeo")))),
      v.mufti.length?el("button",{class:"v4ico",type:"button","aria-label":t(B("নতুন আলাপ","New chat","Sembang baharu","محادثة جديدة","نئی گفتگو","Mazungumzo mapya")),onclick:function(){v.mufti=[];V.save();mdraw();}},ic("refresh",20)):null);
    r.appendChild(hdr);
    var log=el("div",{style:"display:grid;gap:10px;margin-top:6px",role:"log","aria-live":"polite","data-noi18n":""});
    if(!v.mufti.length){log.appendChild(el("div",{class:"v4bubble ai"},t(B("আসসালামু আলাইকুম! দ্বীনের যেকোনো প্রশ্ন করো — আমি কুরআন, সহিহ হাদিস, ইজমা ও কিয়াসের রেফারেন্সসহ সংক্ষেপে উত্তর দেব। জটিল ব্যক্তিগত বিষয়ে স্থানীয় মুফতির সাথে নিশ্চিত হয়ে নিও।","Assalamu alaykum! Ask any question about the deen — I'll answer briefly with references from the Quran, authentic hadith, Ijma and Qiyas. For complex personal matters, confirm with a local mufti.","Assalamualaikum! Tanya apa sahaja tentang agama.","السلام عليكم! اسأل عن أي مسألة في الدين.","السلام علیکم! دین کا کوئی بھی سوال پوچھیں۔","Assalamu alaykum! Uliza swali lolote la dini."))));
      var sug=el("div",{style:"display:flex;flex-wrap:wrap;gap:6px"});[B("সফরে নামাজ কসর কখন?","When do I shorten prayer when travelling?","Bila boleh qasar?","متى أقصر الصلاة؟","سفر میں قصر کب؟","Lini kufupisha swala?"),B("ছাত্র অবস্থায় যাকাত দিতে হবে?","Do I pay zakat as a student?","Pelajar wajib zakat?","هل على الطالب زكاة؟","طالب علم پر زکوٰۃ؟","Mwanafunzi alipe zaka?"),B("ফজর মিস হলে কী করব?","What should I do if I miss Fajr?","Jika terlepas Subuh?","إذا فاتني الفجر؟","فجر چھوٹ جائے تو؟","Nikikosa Alfajiri?")].forEach(function(q){sug.appendChild(el("button",{class:"v4pill",type:"button",onclick:function(){send(t(q));}},t(q)));});log.appendChild(sug);}
    v.mufti.forEach(function(m){var bb=el("div",{class:"v4bubble "+(m.r==="me"?"me":"ai")});if(m.r==="me")bb.textContent=m.x;else md(bb,m.x);log.appendChild(bb);});
    r.appendChild(log);
    var inp=el("textarea",{class:"v4in",rows:"1",maxlength:"800",placeholder:t(B("প্রশ্ন লেখো…","Type your question…","Tulis soalan…","اكتب سؤالك…","سوال لکھیں…","Andika swali…")),style:"resize:none;flex:1"});
    inp.addEventListener("keydown",function(e){if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();go();}});
    function go(){var q=inp.value.trim();if(q)send(q);}
    r.appendChild(el("div",{style:"position:sticky;bottom:calc(92px + env(safe-area-inset-bottom,0px));margin-top:12px;display:flex;gap:8px;align-items:flex-end;padding:8px;border-radius:20px;background:rgba(8,31,34,.96);border:1px solid rgba(232,201,138,.3)"},inp,
      el("button",{class:"v4btn gold",type:"button","aria-label":t(B("পাঠাও","Send","Hantar","إرسال","بھیجیں","Tuma")),onclick:go,disabled:busy?true:null},ic("send",18))));
    r.appendChild(el("p",{class:"v4muted",style:"text-align:center;font-size:.72rem"},t(B("AI সহকারী, মানব মুফতি নয় · গুরুত্বপূর্ণ বিষয়ে স্থানীয় আলিমের পরামর্শ নাও","AI assistant, not a human mufti · confirm important matters with a local scholar","Pembantu AI, bukan mufti","مساعد ذكي وليس مفتيًا","AI معاون، انسان مفتی نہیں","Msaidizi wa AI, si mufti"))));
    setTimeout(function(){window.scrollTo({top:document.body.scrollHeight});},30);}
  function send(q){if(busy)return;var v=V.V();v.mufti=v.mufti||[];var hist=v.mufti.slice();v.mufti.push({r:"me",x:q});busy=true;mdraw();
    var log=mroot.querySelector("[role=log]"),b=el("div",{class:"v4bubble ai"},"…");log.appendChild(b);
    ask(hist,q,function(s){md(b,s);}).then(function(all){v.mufti.push({r:"ai",x:all||offline(q)});})
      .catch(function(e){aiErr=e;try{console.warn("Mufti AI",e);}catch(x){}v.mufti.push({r:"ai",x:offline(q)});})
      .then(function(){v.mufti=v.mufti.slice(-40);V.save();busy=false;mdraw();});}
})();
