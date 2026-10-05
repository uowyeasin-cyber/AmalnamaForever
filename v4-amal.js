/* Amalnama v4 · Amal (Quran, Hadith, Azan, Dua, post-prayer amal) and Shariah (masail, Sihah Sittah, Zakat, Islamic days) */
(function(){
  var V=window.V4;if(!V)return;var t=V.t,num=V.num,el=V.el,ic=V.ic;
  var B=function(bn,en,ms,ar,ur,sw){return [bn,en,ms,ar,ur,sw];};

  // ---------- post-prayer amal
  var PRAYERS=["fajr","dhuhr","asr","maghrib","isha"];
  var PN={fajr:B("ফজর","Fajr","Subuh","الفجر","فجر","Alfajiri"),dhuhr:B("যোহর","Dhuhr","Zohor","الظهر","ظہر","Adhuhuri"),asr:B("আসর","Asr","Asar","العصر","عصر","Alasiri"),maghrib:B("মাগরিব","Maghrib","Maghrib","المغرب","مغرب","Magharibi"),isha:B("এশা","Isha","Isyak","العشاء","عشاء","Isha")};
  var AFTER={fajr:[36,B("সূরা ইয়াসিন","Surah Yasin","Surah Yasin","سورة يس","سورۂ یٰسین","Surat Yasin")],dhuhr:[48,B("সূরা আল-ফাতহ","Surah al-Fath","Surah al-Fath","سورة الفتح","سورۂ فتح","Surat al-Fath")],
    asr:[78,B("সূরা আন-নাবা","Surah an-Naba","Surah an-Naba'","سورة النبأ","سورۂ نبأ","Surat an-Naba")],maghrib:[56,B("সূরা আল-ওয়াকিয়া","Surah al-Waqi'ah","Surah al-Waqi'ah","سورة الواقعة","سورۂ واقعہ","Surat al-Waqi'a")],
    isha:[67,B("সূরা আল-মুলক","Surah al-Mulk","Surah al-Mulk","سورة الملك","سورۂ ملک","Surat al-Mulk")]};
  var EVERY=[[2,255,255,B("আয়াতুল কুরসি","Ayat al-Kursi","Ayat al-Kursi","آية الكرسي","آیت الکرسی","Ayat al-Kursi")],[109,1,6,B("৪ কুল (কাফিরুন, ইখলাস, ফালাক, নাস)","The 4 Quls (Kafirun, Ikhlas, Falaq, Nas)","4 Qul","المعوذات الأربع","چار قل","Qul nne")],[59,22,24,B("সূরা হাশরের শেষ ৩ আয়াত","Last 3 ayat of Surah al-Hashr","3 ayat akhir al-Hashr","خواتيم سورة الحشر","سورۂ حشر کی آخری ۳ آیات","Aya 3 za mwisho za al-Hashr")]];
  V.AFTER=AFTER;V.PN=PN;V.EVERY=EVERY;
  function currentPrayer(){var X=window.AMX,tm=X&&X.azanTimes?X.azanTimes():{},n=X&&X.nowMin?X.nowMin():null,best=null;
    if(n==null){var d=new Date();n=d.getHours()*60+d.getMinutes();}
    PRAYERS.forEach(function(p){var m=/^(\d{1,2}):(\d{2})/.exec(tm[p]||"");if(!m)return;var x=(+m[1])*60+(+m[2]);if(x<=n&&(!best||x>best.m))best={p:p,m:x};});
    return best?best.p:(n<300?"isha":"fajr");}
  V.currentPrayer=currentPrayer;
  function openQ(s,a){if(window.AMX.quran)window.AMX.quran.open(s,a,true);else window.setView("quran");}
  function afterCard(p){p=p||currentPrayer();var a=AFTER[p];
    var c=el("div",{class:"v4card gold"},el("div",{class:"v4row"},el("span",{style:"width:44px;height:44px;border-radius:14px;display:grid;place-items:center;background:rgba(247,226,166,.12);color:#F7E2A6;flex:none"},ic("mosque",24)),
      el("div",{style:"flex:1"},el("h2",null,t(PN[p])+" "+t(B("নামাজের পর","— after the prayer","— selepas solat","— بعد الصلاة","— نماز کے بعد","— baada ya swala"))),el("div",{class:"v4muted"},t(B("এক ট্যাপে পড়ো বা শোনো","Read or listen in one tap","Baca atau dengar","اقرأ أو استمع","پڑھیں یا سنیں","Soma au sikiliza"))))),
      el("div",{class:"v4list"},
        el("button",{class:"v4li",type:"button",style:"text-align:start;color:inherit;font:inherit;cursor:pointer",onclick:function(){openQ(a[0],1);}},ic("book",22),el("span",{class:"t"},el("b",null,t(a[1])),el("small",null,t(B("এই ওয়াক্তের বিশেষ সূরা","This prayer's surah","Surah waktu ini","سورة هذا الوقت","اس وقت کی سورت","Sura ya wakati huu")))),ic("play",18)),
        EVERY.map(function(e){return el("button",{class:"v4li",type:"button",style:"text-align:start;color:inherit;font:inherit;cursor:pointer",onclick:function(){openQ(e[0],e[1]);}},ic("star",22),el("span",{class:"t"},el("b",null,t(e[3])),el("small",null,t(B("প্রতি ওয়াক্তের পর","After every prayer","Selepas setiap solat","بعد كل صلاة","ہر نماز کے بعد","Baada ya kila swala")))),ic("play",18));})));
    var sel=V.seg(PRAYERS.map(function(x){return [x,t(PN[x])];}),p,function(x){c.replaceWith(afterCard(x));});sel.style.marginTop="12px";c.appendChild(sel);
    return c;}
  V.afterCard=afterCard;

  // one combined notification after each prayer, in the user's language
  var NK="am-v4-after";
  function afterTick(){var X=window.AMX;if(!X||!X.azanTimes)return;var tm=X.azanTimes(),n=X.nowMin?X.nowMin():null;if(n==null)return;var d=V.ymd(),st={};
    try{st=JSON.parse(localStorage.getItem(NK)||"{}");}catch(e){}if(st.d!==d)st={d:d,l:[]};var lag=(V.V().afterMin!=null?+V.V().afterMin:15);
    PRAYERS.forEach(function(p){var m=/^(\d{1,2}):(\d{2})/.exec(tm[p]||"");if(!m||st.l.indexOf(p)>=0)return;var x=(+m[1])*60+(+m[2])+lag;
      if(n>=x&&n<x+20){st.l.push(p);show(p);}else if(n>=x+20)st.l.push(p);});
    try{localStorage.setItem(NK,JSON.stringify(st));}catch(e){}}
  function show(p){if(V.V().afterOn===false)return;var a=AFTER[p];
    var title=t(PN[p])+" "+t(B("নামাজের পর আমল","— your after-prayer amal","— amalan selepas solat","— أعمال بعد الصلاة","— نماز کے بعد کے اعمال","— amali baada ya swala"));
    var body=t(a[1])+" · "+EVERY.map(function(e){return t(e[3]);}).join(" · ");
    if("Notification" in window&&Notification.permission==="granted"){var opt={body:body,icon:"icon-192.png",badge:"icon-192.png",tag:"after-"+p,data:{url:"./#amal"}};
      if(navigator.serviceWorker&&navigator.serviceWorker.ready)navigator.serviceWorker.ready.then(function(r){return r.showNotification(title,opt);}).catch(function(){try{new Notification(title,opt);}catch(e){}});
      else try{new Notification(title,opt);}catch(e){}}
    else if(!document.hidden)V.toast(title);}
  setInterval(afterTick,30000);setTimeout(afterTick,4000);

  // ---------- Amal hub
  function tile(icon,title,sub,go){return el("button",{class:"v4tile",type:"button",onclick:go},el("span",{class:"ic"},ic(icon,28)),el("span",null,el("b",null,title),el("small",null,sub)));}
  V.section("amal",{open:function(r){r.innerHTML="";
    r.appendChild(V.head(t(B("আমল","Amal","Amal","الأعمال","اعمال","Amali")),t(B("কুরআন · হাদিস · আযান · দোয়া","Quran · Hadith · Azan · Dua","Al-Quran · Hadis · Azan · Doa","القرآن · الحديث · الأذان · الدعاء","قرآن · حدیث · اذان · دعا","Qur'ani · Hadithi · Adhana · Dua"))));
    r.appendChild(el("div",{class:"v4grid"},
      tile("book",t(B("কুরআন","Quran","Al-Quran","القرآن","قرآن","Qur'ani")),t(B("উসমানি ও নূরানী · ক্বারী বদলাও · পেছনেও চলবে","Uthmani & Nurani · change qari · plays in background","Uthmani & Nurani · tukar qari","عثماني ونوراني · تغيير القارئ","عثمانی اور نورانی · قاری بدلیں","Uthmani na Nurani · badilisha qari")),function(){window.setView("quran");}),
      tile("hadith",t(B("হাদিস","Hadith","Hadis","الحديث","حدیث","Hadithi")),t(B("সিহাহ সিত্তাহ · ইবারত ও অর্থ","Sihah Sittah · Arabic & meaning","Kutub Sittah · teks & makna","الكتب الستة · النص والمعنى","صحاح ستہ · عبارت و ترجمہ","Vitabu sita · maandishi na maana")),function(){window.setView("hadith");}),
      tile("mosque",t(B("আযান","Azan","Azan","الأذان","اذان","Adhana")),t(B("মুয়াজ্জিন বেছে নাও · মধুর আওয়াজ · সময় সেট","Choose muezzin · soft sound · set times","Pilih muazzin · masa","اختر المؤذن · الأوقات","مؤذن منتخب کریں · اوقات","Chagua muadhini · nyakati")),function(){window.setView("azan");}),
      tile("hands",t(B("দোয়া","Dua","Doa","الدعاء","دعا","Dua")),t(B("কুরআনি ও মাসনুন দোয়া","Quranic & Masnun duas","Doa al-Quran & ma'thur","أدعية قرآنية ومأثورة","قرآنی اور مسنون دعائیں","Dua za Qur'ani na Sunna")),function(){window.setView("dua");})));
    r.appendChild(afterCard());
    var lag=el("select",{class:"v4in",style:"width:auto"});[5,10,15,20,30].forEach(function(m){var o=el("option",{value:m},num(m)+" "+t(B("মিনিট পরে","min after","minit selepas","دقيقة بعد","منٹ بعد","dakika baada")));if((V.V().afterMin||15)==m)o.selected=true;lag.appendChild(o);});
    lag.onchange=function(){V.V().afterMin=+lag.value;V.save();};
    var on=el("input",{type:"checkbox"});on.checked=V.V().afterOn!==false;on.onchange=function(){V.V().afterOn=on.checked;V.save();if(on.checked)askNotify();};
    r.appendChild(el("div",{class:"v4card"},el("label",{class:"v4row",style:"justify-content:space-between"},el("span",null,el("b",{style:"display:block"},t(B("নামাজের পর একটাই নোটিফিকেশন","One notification after each prayer","Satu notifikasi selepas solat","إشعار واحد بعد كل صلاة","ہر نماز کے بعد ایک اطلاع","Arifa moja baada ya swala"))),el("small",{class:"v4muted"},t(B("সূরা + আয়াতুল কুরসি + ৪ কুল + হাশরের শেষ ৩ আয়াত, তোমার ভাষায়","Surah + Ayat al-Kursi + 4 Quls + end of al-Hashr, in your language","Dalam bahasa anda","بلغتك","آپ کی زبان میں","Kwa lugha yako")))),on),
      el("div",{class:"v4row",style:"margin-top:10px;justify-content:space-between"},el("span",{class:"v4muted"},t(B("কখন","When","Bila","متى","کب","Lini"))),lag)));}});
  function askNotify(){if(!("Notification" in window)||Notification.permission!=="default")return;Notification.requestPermission().catch(function(){});}
  V.askNotify=askNotify;

  // ---------- Hadith (Sihah Sittah)
  var BOOKS=[
    ["bukhari",B("সহিহ বুখারী","Sahih al-Bukhari","Sahih al-Bukhari","صحيح البخاري","صحیح بخاری","Sahih al-Bukhari"),B("ইমাম মুহাম্মাদ ইবনে ইসমাঈল আল-বুখারী (রহ.) · ~৭৫৬৩ হাদিস","Imam al-Bukhari · ~7,563 hadith","Imam al-Bukhari","الإمام البخاري","امام بخاری","Imam al-Bukhari")],
    ["muslim",B("সহিহ মুসলিম","Sahih Muslim","Sahih Muslim","صحيح مسلم","صحیح مسلم","Sahih Muslim"),B("ইমাম মুসলিম ইবনুল হাজ্জাজ (রহ.) · ~৭৫০০ হাদিস","Imam Muslim · ~7,500 hadith","Imam Muslim","الإمام مسلم","امام مسلم","Imam Muslim")],
    ["abudawud",B("সুনান আবু দাউদ","Sunan Abi Dawud","Sunan Abi Dawud","سنن أبي داود","سنن ابی داؤد","Sunan Abi Dawud"),B("ইমাম আবু দাউদ (রহ.) · ~৫২৭৪ হাদিস","Imam Abu Dawud · ~5,274 hadith","Imam Abu Dawud","الإمام أبو داود","امام ابوداؤد","Imam Abu Dawud")],
    ["tirmidhi",B("জামে আত-তিরমিযী","Jami' at-Tirmidhi","Jami' at-Tirmidhi","جامع الترمذي","جامع ترمذی","Jami' at-Tirmidhi"),B("ইমাম তিরমিযী (রহ.) · ~৩৯৫৬ হাদিস","Imam at-Tirmidhi · ~3,956 hadith","Imam at-Tirmidhi","الإمام الترمذي","امام ترمذی","Imam at-Tirmidhi")],
    ["nasai",B("সুনান আন-নাসায়ী","Sunan an-Nasa'i","Sunan an-Nasa'i","سنن النسائي","سنن نسائی","Sunan an-Nasa'i"),B("ইমাম নাসায়ী (রহ.) · ~৫৭৫৮ হাদিস","Imam an-Nasa'i · ~5,758 hadith","Imam an-Nasa'i","الإمام النسائي","امام نسائی","Imam an-Nasa'i")],
    ["ibnmajah",B("সুনান ইবনে মাজাহ","Sunan Ibn Majah","Sunan Ibn Majah","سنن ابن ماجه","سنن ابن ماجہ","Sunan Ibn Majah"),B("ইমাম ইবনে মাজাহ (রহ.) · ~৪৩৪১ হাদিস","Imam Ibn Majah · ~4,341 hadith","Imam Ibn Majah","الإمام ابن ماجه","امام ابن ماجہ","Imam Ibn Majah")]];
  var SAHIH=B("সহিহ","Sahih","Sahih","صحيح","صحیح","Sahih"),HASAN=B("হাসান","Hasan","Hasan","حسن","حسن","Hasan");
  var H={
    bukhari:[
      [1,"إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى","সকল কাজ নিয়তের ওপর নির্ভরশীল; আর প্রত্যেক মানুষ তা-ই পাবে, যার সে নিয়ত করেছে।","Actions are only by intentions, and every person will have only what he intended.","উমর ইবনুল খাত্তাব (রা.)","Umar ibn al-Khattab",SAHIH,"ওহির সূচনা","Revelation"],
      [5027,"خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ","তোমাদের মধ্যে সে-ই সর্বোত্তম, যে কুরআন শেখে এবং অন্যকে শেখায়।","The best of you are those who learn the Quran and teach it.","উসমান ইবনে আফফান (রা.)","Uthman ibn Affan",SAHIH,"কুরআনের ফজিলত","Virtues of the Quran"],
      [13,"لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ","তোমাদের কেউ প্রকৃত মুমিন হবে না, যতক্ষণ না সে নিজের জন্য যা পছন্দ করে, তার ভাইয়ের জন্যও তা পছন্দ করে।","None of you truly believes until he loves for his brother what he loves for himself.","আনাস ইবনে মালিক (রা.)","Anas ibn Malik",SAHIH,"ঈমান","Faith"],
      [6018,"مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ","যে আল্লাহ ও শেষ দিবসে বিশ্বাস রাখে, সে যেন ভালো কথা বলে অথবা চুপ থাকে। (হাদিসের অংশ)","Whoever believes in Allah and the Last Day, let him speak good or remain silent. (part of the hadith)","আবু হুরায়রা (রা.)","Abu Hurayrah",SAHIH,"আদব","Good manners"]],
    muslim:[
      [223,"الطُّهُورُ شَطْرُ الإِيمَانِ","পবিত্রতা ঈমানের অর্ধেক। (হাদিসের অংশ)","Purity is half of faith. (part of the hadith)","আবু মালিক আল-আশআরী (রা.)","Abu Malik al-Ash'ari",SAHIH,"পবিত্রতা","Purification"],
      [2699,"وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ","যে ব্যক্তি জ্ঞান অন্বেষণের পথে চলে, আল্লাহ তার জন্য জান্নাতের পথ সহজ করে দেন। (হাদিসের অংশ)","Whoever travels a path seeking knowledge, Allah makes easy for him a path to Paradise. (part of the hadith)","আবু হুরায়রা (রা.)","Abu Hurayrah",SAHIH,"যিকর, দোয়া ও তাওবা","Remembrance and supplication"],
      [2564,"إِنَّ اللَّهَ لاَ يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ","নিশ্চয়ই আল্লাহ তোমাদের চেহারা ও সম্পদের দিকে তাকান না; বরং তিনি তাকান তোমাদের অন্তর ও আমলের দিকে।","Allah does not look at your appearance or your wealth, but He looks at your hearts and your deeds.","আবু হুরায়রা (রা.)","Abu Hurayrah",SAHIH,"সদাচরণ","Good conduct"],
      [2588,"مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ","সদকা কখনো সম্পদ কমায় না। (হাদিসের অংশ)","Charity never decreases wealth. (part of the hadith)","আবু হুরায়রা (রা.)","Abu Hurayrah",SAHIH,"সদাচরণ","Good conduct"]],
    abudawud:[
      [1522,"لاَ تَدَعَنَّ فِي دُبُرِ كُلِّ صَلاَةٍ تَقُولُ: اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ","প্রতি নামাজের শেষে এ দোয়া ছাড়বে না: হে আল্লাহ! তোমার যিকর, তোমার শুকরিয়া ও সুন্দরভাবে তোমার ইবাদত করতে আমাকে সাহায্য করো।","Never leave saying at the end of every prayer: O Allah, help me to remember You, thank You, and worship You well.","মুয়াজ ইবনে জাবাল (রা.)","Mu'adh ibn Jabal",SAHIH,"নামাজ","Prayer"],
      [4941,"الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا أَهْلَ الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ","দয়াশীলদের প্রতি পরম দয়ালু দয়া করেন। পৃথিবীবাসীর প্রতি দয়া করো, আসমানে যিনি আছেন তিনি তোমাদের প্রতি দয়া করবেন।","The merciful are shown mercy by the Most Merciful. Be merciful to those on earth, and the One above the heavens will be merciful to you.","আব্দুল্লাহ ইবনে আমর (রা.)","Abdullah ibn Amr",SAHIH,"আদব","General behaviour"],
      [4031,"مَنْ تَشَبَّهَ بِقَوْمٍ فَهُوَ مِنْهُمْ","যে ব্যক্তি কোনো সম্প্রদায়ের সাদৃশ্য গ্রহণ করে, সে তাদেরই অন্তর্ভুক্ত।","Whoever imitates a people is one of them.","আব্দুল্লাহ ইবনে উমর (রা.)","Abdullah ibn Umar",HASAN,"পোশাক","Clothing"]],
    tirmidhi:[
      [1987,"اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ","যেখানেই থাকো আল্লাহকে ভয় করো; মন্দ কাজের পর ভালো কাজ করো, তা মন্দকে মুছে দেবে; আর মানুষের সাথে উত্তম চরিত্রে আচরণ করো।","Fear Allah wherever you are, follow a bad deed with a good one and it will erase it, and treat people with good character.","আবু যর (রা.)","Abu Dharr",HASAN,"সদ্ব্যবহার","Righteousness"],
      [2516,"احْفَظِ اللَّهَ يَحْفَظْكَ، احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ","আল্লাহর (বিধানের) হেফাজত করো, তিনি তোমাকে হেফাজত করবেন; আল্লাহর হেফাজত করো, তাঁকে তোমার সামনে পাবে। (হাদিসের অংশ)","Be mindful of Allah and He will protect you; be mindful of Allah and you will find Him before you. (part of the hadith)","ইবনে আব্বাস (রা.)","Ibn Abbas",SAHIH,"কিয়ামত ও অন্তর","The Day of Judgement"],
      [2317,"مِنْ حُسْنِ إِسْلاَمِ الْمَرْءِ تَرْكُهُ مَا لاَ يَعْنِيهِ","অনর্থক বিষয় ছেড়ে দেওয়া মানুষের ইসলামের সৌন্দর্যের অংশ।","Part of the excellence of a person's Islam is leaving what does not concern him.","আবু হুরায়রা (রা.)","Abu Hurayrah",HASAN,"যুহদ","Zuhd"]],
    nasai:[
      [4197,"إِنَّمَا الدِّينُ النَّصِيحَةُ","দ্বীন হলো কল্যাণকামিতা — আল্লাহ, তাঁর কিতাব, তাঁর রাসূল, মুসলিম নেতৃবৃন্দ ও সাধারণ মুসলিমদের জন্য। (হাদিসের সারাংশ)","The religion is sincere advice — to Allah, His Book, His Messenger, the leaders of the Muslims and their common folk. (summary)","তামীম আদ-দারী (রা.)","Tamim ad-Dari",SAHIH,"বাইআত","Allegiance"],
      [1642,"وَكَانَ أَحَبُّ الدِّينِ إِلَيْهِ مَا دَاوَمَ عَلَيْهِ صَاحِبُهُ","তাঁর কাছে সবচেয়ে প্রিয় আমল ছিল সেটি, যা আমলকারী নিয়মিত করে। (হাদিসের অংশ)","The most beloved of deeds to him was that which its doer did consistently. (part of the hadith)","আয়েশা (রা.)","Aishah",SAHIH,"কিয়ামুল লাইল","Night prayer"]],
    ibnmajah:[
      [224,"طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ","জ্ঞান অন্বেষণ করা প্রত্যেক মুসলিমের ওপর ফরজ। (হাদিসের অংশ)","Seeking knowledge is an obligation upon every Muslim. (part of the hadith)","আনাস ইবনে মালিক (রা.)","Anas ibn Malik",B("সহিহ (আলবানী)","Sahih (al-Albani)","Sahih (al-Albani)","صحيح (الألباني)","صحیح (البانی)","Sahih (al-Albani)"),"ভূমিকা","Introduction"],
      [220,"مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ","আল্লাহ যার কল্যাণ চান, তাকে দ্বীনের গভীর জ্ঞান দান করেন।","When Allah wills good for someone, He gives him understanding of the religion.","মুআবিয়া (রা.)","Mu'awiyah",SAHIH,"ভূমিকা","Introduction"],
      [4251,"كُلُّ ابْنِ آدَمَ خَطَّاءٌ، وَخَيْرُ الْخَطَّائِينَ التَّوَّابُونَ","প্রত্যেক আদম সন্তান ভুল করে; আর ভুলকারীদের মধ্যে উত্তম তারা, যারা তাওবা করে।","Every son of Adam errs, and the best of those who err are those who repent.","আনাস ইবনে মালিক (রা.)","Anas ibn Malik",HASAN,"যুহদ","Zuhd"]]};
  function hKey(b,n){return b+":"+n;}
  var hb="bukhari";
  V.section("hadith",{open:function(r){var V0=V.V();V0.hbm=V0.hbm||[];r.innerHTML="";
    r.appendChild(V.head(t(B("হাদিস","Hadith","Hadis","الحديث","حدیث","Hadithi")),t(B("সিহাহ সিত্তাহ · ইবারত ও অর্থ","Sihah Sittah · Arabic text & meaning","Kutub Sittah","الكتب الستة","صحاح ستہ","Vitabu sita")),"amal"));
    var grid=el("div",{style:"display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px"});
    BOOKS.forEach(function(b){grid.appendChild(el("button",{type:"button","aria-pressed":String(b[0]===hb),class:"v4pill"+(b[0]===hb?" on":""),style:"min-height:44px;justify-content:center;font-size:.78rem;text-align:center;padding:4px 6px",onclick:function(){hb=b[0];draw();}},t(b[1])));});
    r.appendChild(grid);var box=el("div");r.appendChild(box);
    function draw(){grid.querySelectorAll("button").forEach(function(x,i){var on=BOOKS[i][0]===hb;x.classList.toggle("on",on);x.setAttribute("aria-pressed",String(on));});
      box.innerHTML="";var bk=BOOKS.filter(function(x){return x[0]===hb;})[0];
      box.appendChild(el("div",{class:"v4card gold"},el("h2",null,t(bk[1])),el("div",{class:"v4muted"},t(bk[2]))));
      H[hb].forEach(function(h){var k=hKey(hb,h[0]),on=V0.hbm.indexOf(k)>=0;
        var bm=el("button",{class:"v4ico",type:"button","aria-pressed":String(on),"aria-label":t(B("বুকমার্ক","Bookmark","Penanda","إشارة","بک مارک","Alamisho"))},ic("bookmark",20));if(on)bm.querySelector("path").setAttribute("fill-opacity","1");
        bm.onclick=function(){var i=V0.hbm.indexOf(k);if(i>=0)V0.hbm.splice(i,1);else V0.hbm.push(k);V.save();draw();};
        var en=V.L!=="bn";
        box.appendChild(el("article",{class:"v4card"},
          el("div",{class:"v4row",style:"justify-content:space-between"},el("span",{class:"v4pill",style:"cursor:default"},t(bk[1])+" "+num(h[0])),bm),
          el("div",{class:"v4muted",style:"margin-top:8px"},t(B("ইবারত","Arabic text","Teks Arab","النص","عبارت","Maandishi"))),
          el("p",{class:"v4arb",lang:"ar",style:"margin:4px 0"},h[1]),
          el("div",{class:"v4muted"},t(B("অর্থ","Meaning","Makna","المعنى","ترجمہ","Maana"))),
          el("p",{style:"margin:4px 0;line-height:1.7"},en?h[3]:h[2]),
          el("span",{class:"v4ref"},t(B("বর্ণনাকারী: ","Narrator: ","Perawi: ","الراوي: ","راوی: ","Msimulizi: "))+(en?h[5]:h[4])+" · "+t(B("অধ্যায়: ","Chapter: ","Bab: ","الباب: ","باب: ","Mlango: "))+(en?h[8]:h[7])+" · "+t(h[6]))));});
      box.appendChild(el("p",{class:"v4muted",style:"margin-top:10px"},t(B("নম্বর sunnah.com-এর ক্রম অনুযায়ী। বিস্তারিত মাসআলার জন্য নির্ভরযোগ্য আলিমের শরণাপন্ন হও।","Numbering follows sunnah.com. For detailed rulings consult a qualified scholar.","Penomboran ikut sunnah.com.","الترقيم حسب sunnah.com.","نمبرنگ sunnah.com کے مطابق۔","Namba kwa mujibu wa sunnah.com."))));}
    draw();}});

  // ---------- Dua
  var DQ=[
    ["2:201","رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ","হে আমাদের রব! আমাদের দুনিয়াতে কল্যাণ দাও, আখিরাতেও কল্যাণ দাও এবং আমাদের জাহান্নামের আযাব থেকে রক্ষা করো।","Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire."],
    ["20:114","رَّبِّ زِدْنِي عِلْمًا","হে আমার রব! আমার জ্ঞান বাড়িয়ে দাও।","My Lord, increase me in knowledge."],
    ["20:25-28","رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ۝ وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ۝ يَفْقَهُوا قَوْلِي","হে আমার রব! আমার বুক প্রশস্ত করে দাও, আমার কাজ সহজ করে দাও, আমার জিহ্বার জড়তা দূর করো, যাতে তারা আমার কথা বুঝতে পারে।","My Lord, expand my chest, ease my task, and untie the knot from my tongue so they may understand my speech."],
    ["3:8","رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ","হে আমাদের রব! হিদায়াত দেওয়ার পর আমাদের অন্তর বক্র করো না, তোমার পক্ষ থেকে আমাদের রহমত দাও; নিশ্চয়ই তুমি মহাদাতা।","Our Lord, let not our hearts deviate after You have guided us, and grant us mercy from Yourself. You are the Bestower."],
    ["17:24","رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا","হে আমার রব! তাঁদের প্রতি দয়া করো, যেমন তাঁরা শৈশবে আমাকে লালন-পালন করেছেন।","My Lord, have mercy on them as they raised me when I was small."],
    ["21:87","لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ","তুমি ছাড়া কোনো ইলাহ নেই; তুমি পবিত্র; নিশ্চয়ই আমি জালিমদের অন্তর্ভুক্ত ছিলাম।","There is no god but You, glory be to You; I have been among the wrongdoers."],
    ["7:23","رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ","হে আমাদের রব! আমরা নিজেদের ওপর জুলুম করেছি; তুমি যদি আমাদের ক্ষমা ও দয়া না করো, আমরা অবশ্যই ক্ষতিগ্রস্ত হব।","Our Lord, we have wronged ourselves; if You do not forgive us and have mercy on us, we will surely be among the losers."],
    ["25:74","رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا","হে আমাদের রব! আমাদের স্ত্রী-সন্তানদের আমাদের চোখের শীতলতা বানাও এবং আমাদের মুত্তাকিদের নেতা বানাও।","Our Lord, grant us from our spouses and offspring comfort to our eyes, and make us leaders of the righteous."]];
  var DM=[
    [B("সাইয়্যেদুল ইস্তিগফার","Master of seeking forgiveness","Penghulu istighfar","سيد الاستغفار","سید الاستغفار","Bwana wa istighfar"),"اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ","হে আল্লাহ! তুমি আমার রব, তুমি ছাড়া কোনো ইলাহ নেই। তুমি আমাকে সৃষ্টি করেছ, আমি তোমার বান্দা; সাধ্যমতো তোমার অঙ্গীকারে আছি। আমার কৃতকর্মের অনিষ্ট থেকে তোমার আশ্রয় চাই; তোমার নিয়ামত স্বীকার করি, আমার গুনাহও স্বীকার করি; আমাকে ক্ষমা করো, তুমি ছাড়া কেউ গুনাহ ক্ষমা করে না।","O Allah, You are my Lord; there is no god but You. You created me and I am Your servant, and I keep Your covenant as best I can. I seek refuge in You from the evil I have done. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me, for none forgives sins but You.","বুখারী ৬৩০৬","Bukhari 6306"],
    [B("নামাজের পর","After the prayer","Selepas solat","بعد الصلاة","نماز کے بعد","Baada ya swala"),"أَسْتَغْفِرُ اللَّهَ (٣) · اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ","আমি আল্লাহর কাছে ক্ষমা চাই (৩ বার)। হে আল্লাহ! তুমিই শান্তি, তোমার কাছ থেকেই শান্তি; তুমি বরকতময়, হে মহিমা ও সম্মানের অধিকারী।","I seek Allah's forgiveness (3×). O Allah, You are Peace and from You is peace; blessed are You, O Possessor of majesty and honour.","মুসলিম ৫৯১","Muslim 591"],
    [B("সকাল-সন্ধ্যা (৩ বার)","Morning & evening (3×)","Pagi & petang (3×)","الصباح والمساء (٣)","صبح و شام (۳ بار)","Asubuhi na jioni (3×)"),"بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ","আল্লাহর নামে, যাঁর নামের সাথে আসমান ও জমিনের কোনো কিছুই ক্ষতি করতে পারে না; তিনি সর্বশ্রোতা, সর্বজ্ঞ।","In the name of Allah, with whose name nothing on earth or in the heavens can cause harm, and He is the All-Hearing, All-Knowing.","আবু দাউদ ৫০৮৮","Abu Dawud 5088"],
    [B("ঘর থেকে বের হওয়ার সময়","Leaving home","Keluar rumah","الخروج من المنزل","گھر سے نکلتے وقت","Kutoka nyumbani"),"بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ","আল্লাহর নামে বের হলাম, আল্লাহর ওপর ভরসা করলাম; আল্লাহ ছাড়া কোনো শক্তি ও সামর্থ্য নেই।","In the name of Allah, I trust in Allah; there is no might nor power except with Allah.","আবু দাউদ ৫০৯৫","Abu Dawud 5095"],
    [B("ঘুমানোর আগে","Before sleeping","Sebelum tidur","قبل النوم","سونے سے پہلے","Kabla ya kulala"),"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا","হে আল্লাহ! তোমার নামেই মরি (ঘুমাই) ও জীবিত হই (জাগি)।","In Your name, O Allah, I die and I live.","বুখারী ৬৩২৪","Bukhari 6324"],
    [B("ঘুম থেকে উঠে","On waking up","Bangun tidur","عند الاستيقاظ","جاگنے پر","Ukiamka"),"الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ","সব প্রশংসা আল্লাহর, যিনি মৃত্যুর (ঘুমের) পর আমাদের জীবিত করেছেন, আর তাঁর কাছেই ফিরে যেতে হবে।","All praise is for Allah who gave us life after causing us to die, and to Him is the return.","বুখারী ৬৩২৪","Bukhari 6324"],
    [B("ওযুর পর","After wudu","Selepas wuduk","بعد الوضوء","وضو کے بعد","Baada ya udhu"),"أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ","আমি সাক্ষ্য দিচ্ছি, আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি এক, তাঁর কোনো শরিক নেই; আর মুহাম্মাদ ﷺ তাঁর বান্দা ও রাসূল।","I bear witness that there is no god but Allah alone, without partner, and that Muhammad is His servant and Messenger.","মুসলিম ২৩৪","Muslim 234"],
    [B("দুশ্চিন্তা ও ঋণ থেকে","From worry and debt","Dari kerisauan & hutang","من الهم والدين","فکر اور قرض سے","Wasiwasi na deni"),"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ","হে আল্লাহ! আমি তোমার আশ্রয় চাই দুশ্চিন্তা ও দুঃখ, অক্ষমতা ও অলসতা, কৃপণতা ও ভীরুতা, ঋণের বোঝা এবং মানুষের দমন থেকে।","O Allah, I seek refuge in You from worry and grief, helplessness and laziness, miserliness and cowardice, the burden of debt and being overpowered by men.","বুখারী ৬৩৬৯","Bukhari 6369"],
    [B("খাওয়ার পর","After eating","Selepas makan","بعد الطعام","کھانے کے بعد","Baada ya kula"),"الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلاَ قُوَّةٍ","সব প্রশংসা আল্লাহর, যিনি আমার কোনো শক্তি-সামর্থ্য ছাড়াই আমাকে এ খাবার খাওয়ালেন ও রিজিক দিলেন।","All praise is for Allah who fed me this and provided it for me without any might or power from me.","তিরমিযী ৩৪৫৮","Tirmidhi 3458"]];
  var dtab="q";
  V.section("dua",{open:function(r){r.innerHTML="";var en=V.L!=="bn";
    r.appendChild(V.head(t(B("দোয়া","Dua","Doa","الدعاء","دعا","Dua")),null,"amal"));
    var s=V.seg([["q",t(B("কুরআনি","Quranic","Al-Quran","قرآنية","قرآنی","Za Qur'ani"))],["m",t(B("মাসনুন","Masnun","Ma'thur","مأثورة","مسنون","Za Sunna"))]],dtab,function(x){dtab=x;window.AMX&&r&&draw();s.querySelectorAll("button").forEach(function(b,i){b.setAttribute("aria-selected",String((i?"m":"q")===dtab));});});
    r.appendChild(s);var box=el("div");r.appendChild(box);
    function draw(){box.innerHTML="";
      if(dtab==="q")DQ.forEach(function(d){box.appendChild(el("article",{class:"v4card"},el("span",{class:"v4pill",style:"cursor:default"},t(B("সূরা ","Quran ","Al-Quran ","القرآن ","قرآن ","Qur'ani "))+num(d[0])),el("p",{class:"v4arb",lang:"ar",style:"margin:8px 0"},d[1]),el("p",{style:"margin:0;line-height:1.7"},en?d[3]:d[2])));});
      else DM.forEach(function(d){box.appendChild(el("article",{class:"v4card"},el("b",{style:"color:var(--gold-2)"},t(d[0])),el("p",{class:"v4arb",lang:"ar",style:"margin:8px 0"},d[1]),el("p",{style:"margin:0;line-height:1.7"},en?d[3]:d[2]),el("span",{class:"v4ref"},en?d[5]:d[4])));});}
    draw();}});

  // ---------- Shariah
  var MASAIL=[
    [B("ওযু ভঙ্গের কারণ","What breaks wudu","Perkara membatalkan wuduk","نواقض الوضوء","وضو توڑنے والی چیزیں","Yanayobatilisha udhu"),B("প্রস্রাব-পায়খানা বা বায়ু বের হওয়া, গভীর ঘুম, অজ্ঞান হওয়া ইত্যাদি। রক্ত বের হওয়া ও নারীকে স্পর্শ নিয়ে মাযহাবগুলোর মতভেদ আছে — তোমার মাযহাবের আলিমকে জিজ্ঞেস করো।","Anything leaving the private parts (urine, stool, wind), deep sleep, losing consciousness. Schools differ on bleeding and touching — ask a scholar of your madhhab.","Keluar sesuatu dari qubul/dubur, tidur nyenyak, hilang akal. Mazhab berbeza tentang darah dan sentuhan.","الخارج من السبيلين، النوم المستغرق، زوال العقل؛ وفي الدم واللمس خلاف بين المذاهب.","پیشاب، پاخانہ، ہوا کا خارج ہونا، گہری نیند، بے ہوشی؛ خون اور چھونے میں اختلاف ہے۔","Kinachotoka tupu mbili, usingizi mzito, kupoteza fahamu; madhehebu yanatofautiana kuhusu damu na kugusa."),"সূরা মায়িদা ৫:৬ · বুখারী ১৩৫"],
    [B("নামাজ কাযা হলে","A missed prayer","Solat tertinggal","الصلاة الفائتة","قضا نماز","Swala iliyopita"),B("ঘুম বা ভুলে নামাজ ছুটে গেলে মনে পড়ামাত্র আদায় করে নাও; এটাই তার কাফফারা।","If you slept through or forgot a prayer, pray it as soon as you remember — that is its expiation.","Jika tertidur atau terlupa, solat sebaik teringat.","من نام عن صلاة أو نسيها فليصلها إذا ذكرها.","جب یاد آئے فوراً ادا کریں۔","Ukilala au kusahau, swali unapokumbuka."),"বুখারী ৫৯৭ · মুসলিম ৬৮৪"],
    [B("মুসাফিরের নামাজ (কসর)","Traveller's prayer (qasr)","Solat musafir (qasar)","صلاة المسافر","مسافر کی نماز","Swala ya msafiri"),B("সফরে চার রাকাতের ফরজ নামাজ দুই রাকাত পড়া হয়। কত দূরত্বে সফর ধরা হবে তা নিয়ে মাযহাবভেদে মত আছে (প্রায় ৭৭–৮৮ কিমি)।","On a journey the 4-rak'ah obligatory prayers are shortened to 2. The distance that counts as travel differs by school (about 77–88 km).","Solat 4 rakaat dipendekkan kepada 2 dalam musafir; jarak berbeza mengikut mazhab.","تُقصر الرباعية في السفر، والمسافة مختلف فيها.","سفر میں چار رکعت فرض دو پڑھی جاتی ہیں۔","Safarini rakaa 4 za faradhi husaliwa 2."),"সূরা নিসা ৪:১০১ · মুসলিম ৬৮৫"],
    [B("রোজা ভঙ্গ","What breaks the fast","Membatalkan puasa","مفطرات الصيام","روزہ توڑنے والی چیزیں","Yanayofunguza saumu"),B("ইচ্ছাকৃত খাওয়া-পান ও সহবাস রোজা ভাঙে। ভুলে খেলে রোজা ভাঙে না — বাকি রোজা পূর্ণ করো।","Deliberate eating, drinking and intercourse break the fast. Eating by mistake does not — complete your fast.","Makan, minum dengan sengaja membatalkan; terlupa tidak membatalkan.","الأكل والشرب عمدًا يفطر، والناسي يتم صومه.","جان بوجھ کر کھانا پینا روزہ توڑتا ہے؛ بھول کر نہیں۔","Kula kwa makusudi kunafunguza; kwa kusahau hakufunguzi."),"সূরা বাকারা ২:১৮৭ · বুখারী ১৯৩৩"],
    [B("যাকাত কার ওপর ফরজ","Who must pay zakat","Siapa wajib zakat","على من تجب الزكاة","زکوٰۃ کس پر فرض","Nani analipa zaka"),B("প্রাপ্তবয়স্ক মুসলিমের কাছে নিসাব পরিমাণ সম্পদ এক চান্দ্র বছর থাকলে ২.৫% যাকাত দিতে হয়। নিচের ক্যালকুলেটর ব্যবহার করো।","A Muslim whose wealth stays at or above the nisab for one lunar year pays 2.5%. Use the calculator below.","Harta cukup nisab selama setahun hijrah: 2.5%.","من ملك النصاب وحال عليه الحول: ربع العشر.","نصاب کے برابر مال پر ایک قمری سال گزرے تو ڈھائی فیصد۔","Mali ya nisabu kwa mwaka mmoja: 2.5%."),"সূরা তাওবা ৯:৬০ · আবু দাউদ ১৫৭৩"]];
  var BOOKLIST=[
    [B("বেহেশতি জেওর","Bahishti Zewar","Bahishti Zewar","بهشتي زيور","بہشتی زیور","Bahishti Zewar"),"মাওলানা আশরাফ আলী থানভী (রহ.)","Bahishti Zewar"],
    [B("ফাতাওয়ায়ে আলমগীরী","Fatawa Alamgiri","Fatawa Alamgiri","الفتاوى الهندية","فتاویٰ عالمگیری","Fatawa Alamgiri"),"হানাফি ফিকহের সংকলন","Fatawa Alamgiri"],
    [B("রিয়াদুস সালেহীন","Riyad as-Salihin","Riyadus Salihin","رياض الصالحين","ریاض الصالحین","Riyadh as-Salihin"),"ইমাম নববী (রহ.)","Riyad as-Salihin"],
    [B("ফিকহুস সুন্নাহ","Fiqh us-Sunnah","Fiqh as-Sunnah","فقه السنة","فقہ السنہ","Fiqh us-Sunnah"),"সাইয়্যেদ সাবিক","Fiqh us-Sunnah"],
    [B("আল-ফিকহুল মুয়াস্সার","Al-Fiqh al-Muyassar","Al-Fiqh al-Muyassar","الفقه الميسر","الفقہ المیسر","Al-Fiqh al-Muyassar"),"সহজ ফিকহ","Al-Fiqh al-Muyassar"],
    [B("মুখতাসারুল কুদূরী","Mukhtasar al-Quduri","Mukhtasar al-Quduri","مختصر القدوري","مختصر القدوری","Mukhtasar al-Quduri"),"ইমাম কুদূরী (রহ.)","Mukhtasar al-Quduri"]];
  V.section("shariah",{open:function(r){r.innerHTML="";var en=V.L!=="bn";
    r.appendChild(V.head(t(B("শরিয়াহ","Shariah","Syariah","الشريعة","شریعت","Sharia")),t(B("মাসআলা · হাদিস · যাকাত · ইসলামিক দিন","Masail · Hadith · Zakat · Islamic days","Masalah · Hadis · Zakat · Hari Islam","مسائل · حديث · زكاة · مناسبات","مسائل · حدیث · زکوٰۃ · اسلامی دن","Masuala · Hadithi · Zaka · Siku"))));
    r.appendChild(el("div",{class:"v4grid"},
      tile("book",t(B("মাসআলার বই","Masail books","Kitab masalah","كتب المسائل","مسائل کی کتابیں","Vitabu vya masuala")),t(B("নির্ভরযোগ্য ফিকহ","Trusted fiqh","Fiqh muktabar","فقه معتمد","معتبر فقہ","Fiqhi ya kuaminika")),function(){go("v4books");}),
      tile("hadith",t(B("সিহাহ সিত্তাহ","Sihah Sittah","Kutub Sittah","الكتب الستة","صحاح ستہ","Vitabu sita")),t(B("ইবারত ও অর্থ","Text & meaning","Teks & makna","النص والمعنى","عبارت و ترجمہ","Maandishi na maana")),function(){window.setView("hadith");}),
      tile("calc",t(B("যাকাত ক্যালকুলেটর","Zakat calculator","Kalkulator zakat","حاسبة الزكاة","زکوٰۃ کیلکولیٹر","Kikokotoo cha zaka")),t(B("নিসাব ও ২.৫%","Nisab & 2.5%","Nisab & 2.5%","النصاب و٢٫٥٪","نصاب اور ڈھائی فیصد","Nisabu na 2.5%")),function(){go("v4zakat");}),
      tile("moon",t(B("ইসলামিক দিন","Islamic days","Hari Islam","المناسبات الإسلامية","اسلامی دن","Siku za Kiislamu")),t(B("আজ ও সামনে","Today & upcoming","Hari ini & akan datang","اليوم والقادمة","آج اور آنے والے","Leo na zijazo")),function(){go("v4idays");})));
    function go(id){var x=document.getElementById(id);if(x)x.scrollIntoView({block:"start",behavior:"smooth"});}
    // Islamic days
    var idc=el("div",{class:"v4card",id:"v4idays"},el("h2",null,t(B("ইসলামিক গুরুত্বপূর্ণ দিন","Important Islamic days","Hari penting Islam","المناسبات الإسلامية","اہم اسلامی دن","Siku muhimu za Kiislamu"))),
      el("div",{class:"v4muted"},t(B("আজ: ","Today: ","Hari ini: ","اليوم: ","آج: ","Leo: "))+V.hijri()+" · "+t(B("উম্মুল কুরা ক্যালেন্ডার; চাঁদ দেখার ওপর ১ দিন এদিক-ওদিক হতে পারে","Umm al-Qura calendar; may differ by a day with local moon sighting","Kalendar Umm al-Qura; mungkin beza sehari","تقويم أم القرى؛ قد يختلف يومًا","ام القریٰ کیلنڈر؛ ایک دن کا فرق ممکن","Kalenda ya Umm al-Qura"))));
    var list=el("div",{class:"v4list"});V.islamicDays(400).slice(0,14).forEach(function(d){
      list.appendChild(el("div",{class:"v4li"},el("span",{style:"width:52px;text-align:center;flex:none;border-radius:12px;overflow:hidden;background:#FBF3DE;color:#1A1406"},
        el("span",{style:"display:block;font-size:.66rem;font-weight:700;padding:2px 0;background:"+(d.minor?"#1E6A4E":"#C9A050")+";color:#fff"},new Intl.DateTimeFormat(V.L==="bn"?"bn":V.L,{month:"short"}).format(d.date)),
        el("span",{style:"display:block;font-family:var(--fh);font-size:1.2rem;line-height:1.5"},num(d.date.getDate()))),
        el("span",{class:"t"},el("b",null,d.name),el("small",null,d.in===0?t(B("আজ","Today","Hari ini","اليوم","آج","Leo")):num(d.in)+" "+t(B("দিন পর","days to go","hari lagi","يومًا","دن بعد","siku zijazo"))))));});
    idc.appendChild(list);
    // masail + books
    var bk=el("div",{class:"v4card",id:"v4books"},el("h2",null,t(B("সাধারণ মাসআলা","Common masail","Masalah lazim","مسائل شائعة","عام مسائل","Masuala ya kawaida"))));
    MASAIL.forEach(function(m){bk.appendChild(el("details",{style:"margin-top:8px;padding:10px 12px;border-radius:16px;background:#0E3236"},el("summary",{style:"cursor:pointer;font-weight:600;min-height:28px"},t(m[0])),el("p",{style:"margin:8px 0 0;line-height:1.7"},t(m[1])),el("span",{class:"v4ref"},m[2])));});
    bk.appendChild(el("h2",{style:"margin-top:16px"},t(B("মাসআলার নির্ভরযোগ্য বই","Trusted books of masail","Kitab rujukan","كتب معتمدة","معتبر کتابیں","Vitabu vya kuaminika"))));
    var bl=el("div",{class:"v4list"});BOOKLIST.forEach(function(b,bi){bl.appendChild(el("button",{class:"v4li",type:"button",style:"color:inherit;width:100%;text-align:start;font:inherit;cursor:pointer",onclick:function(){if(window.V5&&V5.openBook)V5.openBook(bi);}},ic("book",22),el("span",{class:"t"},el("b",null,t(b[0])),el("small",null,b[1])),el("small",{class:"v4muted"},t(B("পড়ো ›","Read ›","Baca ›","اقرأ ›","پڑھیں ›","Soma ›")))));});
    bk.appendChild(bl);bk.appendChild(el("p",{class:"v4muted",style:"margin-top:8px"},t(B("সংক্ষিপ্ত সাধারণ তথ্য; ব্যক্তিগত ফতোয়ার জন্য নির্ভরযোগ্য মুফতির কাছে যাও।","Short general information; for a personal fatwa ask a qualified mufti.","Maklumat umum; untuk fatwa rujuk mufti.","معلومات عامة؛ للفتوى راجع مفتيًا.","عمومی معلومات؛ فتویٰ کے لیے مفتی سے رجوع کریں۔","Taarifa za jumla; kwa fatwa muulize mufti."))));
    r.appendChild(zakat());r.appendChild(idc);r.appendChild(bk);}});

  // ---------- Zakat calculator
  function zakat(){var Z=V.V().zakat||{gp:"",sp:"",cash:"",gold:"",silver:"",biz:"",recv:"",debt:"",basis:"silver"};var cur=(V.V().fin&&V.V().fin.cur)||"RM";
    var c=el("div",{class:"v4card gold",id:"v4zakat"},el("h2",null,t(B("যাকাত ক্যালকুলেটর","Zakat calculator","Kalkulator zakat","حاسبة الزكاة","زکوٰۃ کیلکولیٹر","Kikokotoo cha zaka"))),
      el("div",{class:"v4muted"},t(B("নিসাব: স্বর্ণ ৮৭.৪৮ গ্রাম বা রুপা ৬১২.৩৬ গ্রাম · হার ২.৫% · সম্পদ এক চান্দ্র বছর থাকলে","Nisab: 87.48 g gold or 612.36 g silver · rate 2.5% · after one lunar year","Nisab: emas 87.48 g atau perak 612.36 g · 2.5%","النصاب: ٨٧٫٤٨ غ ذهب أو ٦١٢٫٣٦ غ فضة · ٢٫٥٪","نصاب: سونا ۸۷.۴۸ گرام یا چاندی ۶۱۲.۳۶ گرام · ڈھائی فیصد","Nisabu: dhahabu 87.48 g au fedha 612.36 g · 2.5%"))));
    function inp(k,lab){var i=el("input",{class:"v4in",type:"number",inputmode:"decimal",min:"0",step:"any",value:Z[k]||""});i.oninput=function(){Z[k]=i.value;calc();};return el("label",{class:"v4lab"},lab,i);}
    var basis=el("select",{class:"v4in"},el("option",{value:"silver"},t(B("রুপার নিসাব (বেশি সতর্ক)","Silver nisab (more cautious)","Nisab perak","نصاب الفضة","چاندی کا نصاب","Nisabu ya fedha"))),el("option",{value:"gold"},t(B("স্বর্ণের নিসাব","Gold nisab","Nisab emas","نصاب الذهب","سونے کا نصاب","Nisabu ya dhahabu"))));basis.value=Z.basis||"silver";basis.onchange=function(){Z.basis=basis.value;calc();};
    var f=el("div",{class:"v4f",style:"margin-top:12px"},
      inp("gp",t(B("স্বর্ণের দাম/গ্রাম","Gold price per g","Harga emas/g","سعر الذهب/غ","سونا فی گرام","Bei ya dhahabu/g"))+" ("+cur+")"),inp("sp",t(B("রুপার দাম/গ্রাম","Silver price per g","Harga perak/g","سعر الفضة/غ","چاندی فی گرام","Bei ya fedha/g"))+" ("+cur+")"),
      inp("cash",t(B("নগদ ও ব্যাংক","Cash & bank","Tunai & bank","النقد والبنك","نقد و بینک","Pesa na benki"))),inp("gold",t(B("স্বর্ণ (গ্রাম)","Gold (g)","Emas (g)","ذهب (غ)","سونا (گرام)","Dhahabu (g)"))),
      inp("silver",t(B("রুপা (গ্রাম)","Silver (g)","Perak (g)","فضة (غ)","چاندی (گرام)","Fedha (g)"))),inp("biz",t(B("ব্যবসার পণ্য","Business stock","Stok perniagaan","عروض التجارة","کاروباری مال","Bidhaa za biashara"))),
      inp("recv",t(B("পাওনা (ফেরত পাবে)","Money owed to you","Hutang orang kepada anda","ديون لك","قابلِ وصول رقم","Unaodai"))),inp("debt",t(B("তাৎক্ষণিক ঋণ","Debts due now","Hutang semasa","ديون حالّة","فوری قرض","Madeni ya sasa"))),
      el("label",{class:"v4lab full"},t(B("নিসাবের ভিত্তি","Nisab basis","Asas nisab","أساس النصاب","نصاب کی بنیاد","Msingi wa nisabu")),basis));
    var out=el("div",{style:"display:flex;align-items:center;gap:14px;margin-top:14px"});
    c.appendChild(f);c.appendChild(out);
    function calc(){var n=function(k){return Math.max(0,parseFloat(Z[k])||0);};V.V().zakat=Z;V.save();
      var wealth=n("cash")+n("gold")*n("gp")+n("silver")*n("sp")+n("biz")+n("recv")-n("debt");
      var nisab=Z.basis==="gold"?87.48*n("gp"):612.36*n("sp");out.innerHTML="";
      if(!nisab){out.appendChild(el("p",{class:"v4muted",style:"margin:0"},t(B("নিসাব হিসাব করতে স্বর্ণ/রুপার আজকের দাম দাও।","Enter today's gold/silver price to work out the nisab.","Masukkan harga emas/perak hari ini.","أدخل سعر الذهب/الفضة اليوم.","آج کا سونا/چاندی کا ریٹ لکھیں۔","Weka bei ya leo ya dhahabu/fedha."))));return;}
      var due=wealth>=nisab?wealth*0.025:0,p=Math.min(100,wealth/nisab*100);
      out.appendChild(V.ring(p,84,3,due?"#3ECF9E":"#E8C98A"));
      out.appendChild(el("div",null,el("div",{class:"v4muted"},t(B("নিসাব","Nisab","Nisab","النصاب","نصاب","Nisabu"))+": "+cur+" "+num(Math.round(nisab).toLocaleString("en-US"))),
        el("div",{class:"v4muted"},t(B("যাকাতযোগ্য সম্পদ","Zakatable wealth","Harta berzakat","المال الزكوي","قابلِ زکوٰۃ مال","Mali ya zaka"))+": "+cur+" "+num(Math.round(wealth).toLocaleString("en-US"))),
        el("div",{style:"font-family:var(--fh);font-size:1.5rem;color:#F7E2A6"},due?cur+" "+num((Math.round(due*100)/100).toLocaleString("en-US")):t(B("যাকাত ফরজ নয়","No zakat due","Tiada zakat","لا زكاة","زکوٰۃ واجب نہیں","Hakuna zaka")))));}
    calc();return c;}
})();
