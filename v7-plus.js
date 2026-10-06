/* Amalnama v12 · Mazlum Corner — the latest news, videos and lectures about oppressed Muslims.
   Every update shows who is responsible, who is suffering, where, why, and what we can do.
   Data: mazlum.json, rebuilt every two hours by .github/workflows/videos.yml. */
(function(){
  if(!window.V4)return;var V=V4,el=V.el,num=V.num;
  function T(bn,en){return V.L==="bn"?bn:en;}
  function P(a){return V.L==="bn"?a[0]:a[1];}
  // ---- region profiles (facts from UN OCHA, OHCHR, Amnesty, HRW · reviewed October 2026)
  var REG=[
    {k:"palestine",flag:"🇵🇸",n:["ফিলিস্তিন","Palestine"],c:"#149954",
      z:["ইসরায়েলি সেনাবাহিনী ও দখলদার কর্তৃপক্ষ; পশ্চিম তীরে সশস্ত্র বসতি স্থাপনকারীরা","Israeli military and occupation authorities; armed settlers in the West Bank"],
      m:["গাজা ও পশ্চিম তীরের ফিলিস্তিনি জনগণ — বিশেষ করে শিশু, নারী ও বাস্তুচ্যুত পরিবার","Palestinians in Gaza and the West Bank — above all children, women and displaced families"],
      s:["গাজা উপত্যকা, পশ্চিম তীর ও পূর্ব জেরুজালেম (আল-আকসা)","Gaza Strip, West Bank and East Jerusalem (Al-Aqsa)"],
      r:["দীর্ঘ দখলদারিত্ব ও অবরোধ; অক্টোবর ২০২৫-এর যুদ্ধবিরতির পরও হামলা ও ত্রাণে বাধা","Decades of occupation and blockade; strikes and aid restrictions continue after the October 2025 ceasefire"],
      d:["জাতিসংঘ OCHA (সেপ্টেম্বর ২০২৬): যুদ্ধবিরতির পরও গাজায় ১,৩৮১ জন নিহত ও ৪,৭৫৭ জন আহত; ত্রাণ ঢোকায় বড় বাধা। পশ্চিম তীরে ২০২৬ সালে ১,৬০০-র বেশি বসতি স্থাপনকারী হামলা এবং ৪,৩০০-র বেশি মানুষ বাস্তুচ্যুত।","UN OCHA (September 2026): 1,381 killed and 4,757 injured in Gaza since the ceasefire, with major limits on aid. In the West Bank, more than 1,600 settler attacks and over 4,300 people displaced in 2026."],
      g:[["UNRWA","https://donate.unrwa.org/"],["PCRF","https://www.pcrf.net/"],["Islamic Relief","https://www.islamic-relief.org/"]],
      src:[["UN OCHA","https://www.ochaopt.org/content/humanitarian-situation-report-18-september-2026"]]},
    {k:"sudan",flag:"🇸🇩",n:["সুদান","Sudan"],c:"#D21034",
      z:["র‍্যাপিড সাপোর্ট ফোর্সেস (RSF) আধাসামরিক বাহিনী; যুদ্ধরত সেনাবাহিনীর বিরুদ্ধেও বেসামরিক হামলার অভিযোগ","The paramilitary Rapid Support Forces (RSF); the army is also accused of attacks on civilians"],
      m:["দারফুরের মাসালিত, ফুর ও জাঘাওয়াসহ সুদানের বেসামরিক মানুষ","Civilians across Sudan, including the Masalit, Fur and Zaghawa of Darfur"],
      s:["আল-ফাশির ও দারফুর, কোর্দোফান, ব্লু নাইল","El Fasher and Darfur, Kordofan, Blue Nile"],
      r:["২০২৩ থেকে সেনাবাহিনী ও RSF-এর ক্ষমতার যুদ্ধ; জাতিগত লক্ষ্যভিত্তিক হত্যা","A power struggle between the army and the RSF since 2023, with ethnically targeted killings"],
      d:["জাতিসংঘের তদন্তকারীরা (২০২৬) আল-ফাশিরে RSF-এর গণহত্যা ও যৌন সহিংসতাকে যুদ্ধাপরাধ ও গণহত্যার আলামত বলেছেন। দুর্ভিক্ষ আর বিশ্বের সবচেয়ে বড় বাস্তুচ্যুতি সংকট চলছে।","UN investigators (2026) found that RSF mass killings and sexual violence in El Fasher amount to war crimes with hallmarks of genocide. Famine and the world's largest displacement crisis continue."],
      g:[["UNHCR","https://donate.unhcr.org/"],["MSF","https://www.msf.org/donate"],["WFP","https://www.wfp.org/donate"]],
      src:[["UN News","https://news.un.org/en/story/2026/02/1166997"],["Amnesty","https://www.amnesty.org/en/latest/news/2026/07/sudan-rsf-atrocities-in-el-fasher-a-stain-on-the-conscience-of-humanity-new-report/"]]},
    {k:"yemen",flag:"🇾🇪",n:["ইয়েমেন","Yemen"],c:"#CE1126",
      z:["যুদ্ধরত সব পক্ষ — হুথি (আনসারুল্লাহ), সৌদি-সমর্থিত বাহিনী ও বিদেশি বিমান হামলা; ত্রাণে বাধা","All warring sides — the Houthis (Ansar Allah), Saudi-backed forces and foreign airstrikes; obstruction of aid"],
      m:["ইয়েমেনের সাধারণ মানুষ — ২.৩ কোটির সাহায্য দরকার, ২৫ লাখ শিশু অপুষ্ট","Ordinary Yemenis — 23 million need aid and 2.5 million children are malnourished"],
      s:["সানা, হোদেইদা, তাইজ, মারিব ও লোহিত সাগরের উপকূল","Sanaa, Hodeidah, Taiz, Marib and the Red Sea coast"],
      r:["২০১৪ থেকে গৃহযুদ্ধ ও আঞ্চলিক প্রক্সি লড়াই; ২০২৬-এ নতুন যুদ্ধ ও বাস্তুচ্যুতি","Civil war and regional proxy fighting since 2014; renewed fighting and displacement in 2026"],
      d:["৪৫ লাখের বেশি মানুষ বাস্তুচ্যুত। তহবিল কমে যাওয়ায় ৩,০০০-এর বেশি পুষ্টিকেন্দ্র বন্ধ হয়ে গেছে।","More than 4.5 million people are displaced. Over 3,000 nutrition sites have closed because of funding cuts."],
      g:[["WFP","https://www.wfp.org/donate"],["UNICEF","https://www.unicef.org/"],["Islamic Relief","https://www.islamic-relief.org/"]],
      src:[["UN OCHA","https://www.unocha.org/yemen"],["Concern","https://concernusa.org/news/yemen-crisis-explained/"]]},
    {k:"iran",flag:"🇮🇷",n:["ইরান","Iran"],c:"#239F40",
      z:["ফেব্রুয়ারি ২০২৬ থেকে মার্কিন-ইসরায়েলি বিমান হামলা; যুদ্ধে ইরানের পাল্টা হামলাও উপসাগরীয় দেশের মানুষকে আঘাত করেছে","US-Israeli airstrikes since February 2026; Iran's counter-strikes have also hit civilians in Gulf states"],
      m:["ইরানের সাধারণ মানুষ — জাতিসংঘের হিসাবে ৩,৪০০-র বেশি বেসামরিক নিহত, শত শত শিশুসহ","Ordinary Iranians — over 3,400 civilians killed according to the UN, hundreds of them children"],
      s:["তেহরান, ইস্পাহান ও ইরানের নানা শহর; হরমুজ প্রণালী অঞ্চল","Tehran, Isfahan and other Iranian cities; the Strait of Hormuz"],
      r:["২৮ ফেব্রুয়ারি ২০২৬ থেকে যুদ্ধ; হাসপাতাল, বিশ্ববিদ্যালয় ও জ্বালানি স্থাপনায় হামলা","War since 28 February 2026; hospitals, universities and energy sites have been hit"],
      d:["বারবার যুদ্ধবিরতি ভেঙেছে। লাখো মানুষ বাস্তুচ্যুত, লাখো শিশু স্কুলে যেতে পারছে না।","Ceasefires have repeatedly collapsed. Hundreds of thousands are displaced and millions of children are out of school."],
      g:[["UNICEF","https://www.unicef.org/"],["Red Crescent (IFRC)","https://www.ifrc.org/"]],
      src:[["UN News","https://news.un.org/en/story/2026/07/1167979"]]},
    {k:"uyghur",flag:"☪️",n:["উইঘুর","Uyghurs"],c:"#3B9FDB",
      z:["চীনা সরকার ও শিনজিয়াং কর্তৃপক্ষ","The Chinese government and Xinjiang authorities"],
      m:["উইঘুর, কাজাখ ও অন্যান্য তুর্কি মুসলিম জনগোষ্ঠী","Uyghurs, Kazakhs and other Turkic Muslim peoples"],
      s:["শিনজিয়াং (পূর্ব তুর্কিস্তান), চীন","Xinjiang (East Turkistan), China"],
      r:["গণ-আটক ক্যাম্প, কড়া নজরদারি, ধর্মচর্চায় নিষেধাজ্ঞা ও জোরপূর্বক শ্রম","Mass detention camps, heavy surveillance, limits on religious practice and forced labour"],
      d:["জাতিসংঘ মানবাধিকার দপ্তর (২০২২) বলেছে এগুলো মানবতাবিরোধী অপরাধ হতে পারে। ২০২৬-এ জাতিসংঘের বিশেষজ্ঞরা আবার জোরপূর্বক শ্রমের খবরে উদ্বেগ জানিয়েছেন।","The UN Human Rights Office (2022) said these may amount to crimes against humanity. In 2026 UN experts again raised alarm over forced labour."],
      g:[["Uyghur Human Rights Project","https://uhrp.org/"]],
      src:[["OHCHR","https://www.ohchr.org/en/press-releases/2026/01/un-experts-alarmed-reports-forced-labour-uyghur-tibetan-and-other-minorities"]]},
    {k:"kashmir",flag:"🏔️",n:["কাশ্মীর","Kashmir"],c:"#0E7C4A",
      z:["ভারতীয় নিরাপত্তা বাহিনী ও কর্তৃপক্ষ (মানবাধিকার সংস্থাগুলোর প্রতিবেদন অনুযায়ী)","Indian security forces and authorities (according to human rights groups)"],
      m:["কাশ্মীরি মুসলিম জনগণ, সাংবাদিক ও মানবাধিকার কর্মী","Kashmiri Muslims, journalists and human rights defenders"],
      s:["ভারত-শাসিত জম্মু ও কাশ্মীর (শ্রীনগর ও উপত্যকা)","Indian-administered Jammu and Kashmir (Srinagar and the valley)"],
      r:["২০১৯-এ বিশেষ মর্যাদা বাতিলের পর কড়া নিয়ন্ত্রণ; বিচার ছাড়া আটক ও মত প্রকাশে বাধা","Tight control since special status was revoked in 2019; detention without trial and limits on free speech"],
      d:["HRW ও Amnesty (২০২৬): UAPA ও PSA আইনে দীর্ঘ আটক, সাংবাদিকদের হয়রানি এবং জমির অধিকার লঙ্ঘনের অভিযোগ।","HRW and Amnesty (2026): long detentions under the UAPA and PSA laws, harassment of journalists and land-rights violations."],
      g:[["Amnesty International","https://www.amnesty.org/en/get-involved/"]],
      src:[["HRW","https://www.hrw.org/world-report/2026/country-chapters/india"],["Amnesty","https://www.amnesty.org/en/latest/research/2026/03/india-kashmiri-journalist-irfan-mehraj-three-years-detention/"]]},
    {k:"rohingya",flag:"🇲🇲",n:["রোহিঙ্গা","Rohingya"],c:"#F5B800",
      z:["মিয়ানমারের সামরিক জান্তা ও আরাকান আর্মি","Myanmar's military junta and the Arakan Army"],
      m:["রোহিঙ্গা মুসলিম — রাখাইনে আটকে থাকা মানুষ ও বাংলাদেশের ১০ লাখের বেশি শরণার্থী","Rohingya Muslims — those trapped in Rakhine and over a million refugees in Bangladesh"],
      s:["রাখাইন (আরাকান), মিয়ানমার; কক্সবাজার ও ভাসানচর, বাংলাদেশ","Rakhine (Arakan), Myanmar; Cox's Bazar and Bhasan Char, Bangladesh"],
      r:["নাগরিকত্ব অস্বীকার ও ২০১৭-র গণহত্যা; এখন নির্যাতন, জোরপূর্বক শ্রম ও জমি দখল","Denied citizenship and the 2017 genocide; now torture, forced labour and land seizures"],
      d:["জাতিসংঘ মানবাধিকার দপ্তর (সেপ্টেম্বর ২০২৬): সেনাবাহিনী ও আরাকান আর্মি দুজনই গুরুতর নির্যাতন করছে। ২০২৬-এর এপ্রিল পর্যন্ত প্রায় দেড় লাখ নতুন শরণার্থী বাংলাদেশে এসেছে; সমুদ্রপথে পালাতে গিয়ে বহু মৃত্যু।","UN Human Rights Office (September 2026): both the army and the Arakan Army commit grave abuses. Nearly 150,000 new refugees reached Bangladesh by April 2026, and many die fleeing by sea."],
      g:[["UNHCR","https://donate.unhcr.org/"],["BRAC","https://www.brac.net/"],["MSF","https://www.msf.org/donate"]],
      src:[["OHCHR","https://www.ohchr.org/en/stories/2026/09/myanmars-rohingya-and-other-minorities-face-renewed-terror-illicit-economies-boom"]]},
    {k:"lebanon",flag:"🇱🇧",n:["লেবানন","Lebanon"],c:"#00A651",
      z:["ইসরায়েলি বিমান হামলা (জাতিসংঘের প্রতিবেদন অনুযায়ী); হিজবুল্লাহ-ইসরায়েল যুদ্ধে বেসামরিক মানুষ মাঝখানে","Israeli airstrikes (according to UN reports); civilians caught between Hezbollah and Israel"],
      m:["দক্ষিণ লেবানন ও বৈরুতের সাধারণ মানুষ — বিশেষ করে শিশু ও বাস্তুচ্যুত পরিবার","Ordinary people in southern Lebanon and Beirut — especially children and displaced families"],
      s:["দক্ষিণ লেবানন, বেকা উপত্যকা ও বৈরুতের দক্ষিণ শহরতলি","Southern Lebanon, the Bekaa valley and Beirut's southern suburbs"],
      r:["২০২৬-এর আঞ্চলিক যুদ্ধের অংশ হিসেবে হামলা; যুদ্ধবিরতির পরও আক্রমণ","Strikes as part of the 2026 regional war; attacks continue despite truces"],
      d:["জাতিসংঘ (জুন ২০২৬): যুদ্ধবিরতির মধ্যেও লেবাননে প্রতিদিন গড়ে ১২টি শিশু নিহত বা আহত হচ্ছে। হাজার হাজার পরিবার ঘরছাড়া।","UN (June 2026): even during the truce, an average of 12 children a day are killed or maimed in Lebanon. Thousands of families have fled their homes."],
      g:[["UNICEF","https://www.unicef.org/"],["Lebanese Red Cross","https://www.redcross.org.lb/"]],
      src:[["UN News","https://news.un.org/en/story/2026/06/1167736"],["OHCHR","https://www.ohchr.org/en/press-releases/2026/04/turk-condemns-deadly-wave-israeli-strikes-lebanon"]]},
    {k:"india",flag:"🇮🇳",n:["ভারতের মুসলিম","Muslims in India"],c:"#FF9933",
      z:["কিছু রাজ্য সরকার, পুলিশ ও উগ্র হিন্দুত্ববাদী গোষ্ঠী (মানবাধিকার সংস্থাগুলোর প্রতিবেদন অনুযায়ী)","Some state governments, police and Hindu nationalist mobs (according to human rights groups)"],
      m:["ভারতের মুসলিম নাগরিক — বিশেষ করে বাংলাভাষী মুসলিম, ছোট ব্যবসায়ী ও শ্রমিক","Indian Muslims — especially Bengali-speaking Muslims, small traders and workers"],
      s:["আসাম, উত্তর প্রদেশ, গুজরাট, পশ্চিমবঙ্গ, দিল্লি ও অন্যান্য রাজ্য","Assam, Uttar Pradesh, Gujarat, West Bengal, Delhi and other states"],
      r:["বুলডোজারে ঘর-মসজিদ ভাঙা, গণপিটুনি, 'বাংলাদেশি' সন্দেহে বের করে দেওয়া (পুশইন)","Bulldozer demolitions of homes and mosques, mob lynchings, expulsions of people branded 'Bangladeshi'"],
      d:["HRW World Report 2026: মুসলিমদের বাড়ি ভাঙা, বিচার ছাড়া বহিষ্কার এবং সমালোচকদের মামলায় ফাঁসানোর অভিযোগ।","HRW World Report 2026: demolitions of Muslim homes, expulsions without due process and prosecution of critics."],
      g:[["Amnesty International","https://www.amnesty.org/en/get-involved/"]],
      src:[["HRW","https://www.hrw.org/world-report/2026/country-chapters/india"],["HRW","https://www.hrw.org/news/2026/02/04/india-religious-minorities-critics-unlawfully-targeted"]]},
    {k:"world",flag:"🌐",n:["বিশ্বজুড়ে","Worldwide"],c:"#7C5CC4",
      z:["খবরে উল্লিখিত হামলাকারী বা দায়ী পক্ষ","The attacker or party named in the report"],
      m:["সেই এলাকার মুসলিম ব্যক্তি, মসজিদ বা সম্প্রদায়","The Muslim people, mosque or community in the report"],
      s:["খবরে উল্লিখিত দেশ ও শহর — ইউরোপ, আমেরিকা, আফ্রিকা, এশিয়া","The country and city named in the report — Europe, the Americas, Africa, Asia"],
      r:["ইসলামবিদ্বেষ, ঘৃণামূলক অপরাধ, মসজিদে হামলা, হিজাব বা ধর্মচর্চায় নিষেধাজ্ঞা","Islamophobia, hate crimes, attacks on mosques, bans on hijab or worship"],
      d:["অঞ্চলের নির্দিষ্ট তালিকার বাইরে পৃথিবীর যেকোনো জায়গায় মুসলিমদের ওপর হামলা বা বৈষম্যের খবর এখানে আসে। প্রতিটা খবরের মূল সূত্র খুলে বিস্তারিত পড়ো।","Reports of attacks on or discrimination against Muslims anywhere in the world outside the listed regions. Open each report's source for the details."],
      g:[["Islamic Relief","https://www.islamic-relief.org/"],["CAIR","https://www.cair.com/"]],
      src:[["Google News","https://news.google.com/"]]}];
  var RK={};REG.forEach(function(r){RK[r.k]=r;});
  var TODO=[["🤲 দোয়া ও কুনুতে নাজিলা — নামাজে নিয়মিত মজলুমদের জন্য দোয়া করো।","🤲 Make dua and qunut an-nazilah — pray for the oppressed in your salah."],
    ["💝 যাচাই করা সংস্থায় দান করো — নিচের লিংকগুলো দেখো।","💝 Give to verified charities — see the links below."],
    ["📢 সত্য খবর ছড়াও, গুজব নয় — শেয়ারের আগে সূত্র যাচাই করো।","📢 Share verified news, not rumours — check the source before you share."],
    ["✉️ নিজের দেশের জনপ্রতিনিধি ও দূতাবাসে শান্তিপূর্ণভাবে চিঠি বা পিটিশন দাও।","✉️ Write peacefully to your representatives and embassies, or sign petitions."],
    ["🛒 নৈতিক কেনাকাটা — নির্যাতনে জড়িত বলে প্রমাণিত কোম্পানির পণ্য শান্তিপূর্ণভাবে বর্জন করো।","🛒 Shop ethically — peacefully avoid products of companies shown to be complicit in abuse."],
    ["👨‍👩‍👧 পরিবার ও সন্তানদের জানাও, শরণার্থীদের পাশে দাঁড়াও।","👨‍👩‍👧 Teach your family about it and stand by refugees near you."]];
  var KIND={video:["ভিডিও","Video"],article:["খবর","News"],lecture:["লেকচার","Lecture"]};
  // ---- data
  var DATA=null,loading=null;
  try{DATA=JSON.parse(localStorage.getItem("am-mz")||"null");}catch(e){}
  // live: the app's own server builds the feed on request (cached 1–5 minutes); mazlum.json is the two-hourly backup
  var LIVE=(window.AMALNAMA_PUSH&&AMALNAMA_PUSH.url||"").replace(/\/api\/ring.*$/,"/api/feed");
  function getJ(u,ms){var ac=window.AbortController?new AbortController():null,tm=ac&&setTimeout(function(){ac.abort();},ms);
    return fetch(u,{signal:ac&&ac.signal,cache:"no-store"}).then(function(r){clearTimeout(tm);if(!r.ok)throw new Error(r.status);return r.json();}).then(function(d){if(!d||!d.items||d.items.length<20)throw new Error("few");return d;});}
  function keep(d){if(!d||!d.items)return DATA;if(DATA&&DATA.updated&&Date.parse(d.updated)<Date.parse(DATA.updated)&&!(d.items.length>DATA.items.length))return DATA;DATA=d;try{localStorage.setItem("am-mz",JSON.stringify(d));}catch(e){}return DATA;}
  function load(force){if(loading&&!force)return loading;
    var bucket=force?Math.floor(Date.now()/6e4):Math.floor(Date.now()/3e5);
    var stat=getJ("mazlum.json?t="+Math.floor(Date.now()/9e5),12000).then(keep).catch(function(){return DATA;});
    var live=LIVE?getJ(LIVE+"?k=mazlum&t="+bucket,25000).then(keep).catch(function(){return null;}):Promise.resolve(null);
    loading=live.then(function(d){return d||stat;});return loading;}
  function ago(p){var d=Date.parse(p);if(!d)return "";var m=Math.max(1,Math.floor((Date.now()-d)/6e4));if(m<60)return num(m)+T(" মিনিট আগে","m ago");var h=Math.floor(m/60);if(h<24)return num(h)+T(" ঘণ্টা আগে","h ago");return num(Math.floor(h/24))+T(" দিন আগে","d ago");}
  // ---- round live Palestine flag
  function flag(size){var NS="http://www.w3.org/2000/svg",s=document.createElementNS(NS,"svg");s.setAttribute("viewBox","0 0 60 60");s.setAttribute("width",size);s.setAttribute("height",size);s.setAttribute("aria-hidden","true");
    s.innerHTML='<defs><clipPath id="mzc'+size+'"><circle cx="30" cy="30" r="30"/></clipPath></defs><g clip-path="url(#mzc'+size+')"><rect width="60" height="20" fill="#111"/><rect y="20" width="60" height="20" fill="#fff"/><rect y="40" width="60" height="20" fill="#149954"/><path d="M0 0L30 30L0 60z" fill="#E4312B"/></g><circle cx="30" cy="30" r="29" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="2"/>';return s;}
  function liveIcon(size){return el("span",{class:"mz-live",style:"width:"+size+"px;height:"+size+"px"},flag(size),el("i",null,"LIVE"));}
  window.AMZ={flag:flag,liveIcon:liveIcon};
  // ---- one update
  function facts(r,open){var dl=el("dl",{class:"mz-facts"+(open?" open":"")});
    [["⚔️",T("জালিম","Oppressor"),P(r.z)],["💔",T("মজলুম","Oppressed"),P(r.m)],["📍",T("স্থান","Where"),P(r.s)],["❓",T("কারণ","Why"),P(r.r)]].forEach(function(f){dl.appendChild(el("div",null,el("dt",null,f[0]+" "+f[1]),el("dd",null,f[2])));});return dl;}
  function todoSheet(r){var box=el("div",{class:"mz-todo"});
    box.appendChild(el("p",{class:"v4muted",style:"margin:0 0 10px"},P(r.d)));
    var ul=el("ol",null);TODO.forEach(function(x){ul.appendChild(el("li",null,P(x)));});box.appendChild(ul);
    box.appendChild(el("h3",null,T("যাচাই করা দানের জায়গা","Verified places to give")));
    var g=el("div",{class:"mz-links"});r.g.forEach(function(x){g.appendChild(el("a",{href:x[1],target:"_blank",rel:"noopener"},x[0]+" ↗"));});box.appendChild(g);
    box.appendChild(el("h3",null,T("সূত্র","Sources")));
    var s=el("div",{class:"mz-links"});r.src.forEach(function(x){s.appendChild(el("a",{href:x[1],target:"_blank",rel:"noopener"},x[0]+" ↗"));});box.appendChild(s);
    V.sheet(r.flag+" "+P(r.n)+" · "+T("আমাদের করণীয়","What we can do"),box);}
  function thumb(it,r){var th=el("div",{class:"mz-th"});
    if(it.id){th.appendChild(el("img",{src:"https://i.ytimg.com/vi/"+it.id+"/mqdefault.jpg",alt:"",loading:"lazy"}));th.appendChild(el("span",{class:"pl"},V.icon([["M8 5.5v13l11-6.5z","1"]],22)));
      th.onclick=function(){th.innerHTML="";th.classList.add("on");th.appendChild(el("iframe",{src:"https://www.youtube-nocookie.com/embed/"+it.id+"?autoplay=1&rel=0&playsinline=1",title:it.t,allow:"autoplay; encrypted-media; picture-in-picture; fullscreen",allowfullscreen:true,referrerpolicy:"strict-origin-when-cross-origin"}));};}
    else if(it.img){th.appendChild(el("img",{src:it.img,alt:"",loading:"lazy",referrerpolicy:"no-referrer",onerror:function(){this.remove();}}));}
    else{th.classList.add("art");th.style.setProperty("--c",r.c);th.appendChild(el("span",{class:"fl"},r.k==="palestine"?flag(54):r.flag));th.appendChild(el("span",{class:"sr"},it.src||""));}
    th.appendChild(el("span",{class:"kd "+it.k},P(KIND[it.k]||KIND.article)));return th;}
  function card(it){var r=RK[it.r];if(!r)return null;
    var c=el("article",{class:"mz-it"});c.appendChild(thumb(it,r));
    var b=el("div",{class:"mz-b"});
    b.appendChild(el("div",{class:"mz-meta"},el("span",{class:"rg",style:"--c:"+r.c},r.flag+" "+P(r.n)),el("small",null,(it.src||"")+" · "+ago(it.pub))));
    var title=el(it.u?"a":"b",it.u?{class:"tt",href:it.u,target:"_blank",rel:"noopener"}:{class:"tt"},it.t);b.appendChild(title);
    var f=facts(r,false);b.appendChild(f);
    b.appendChild(el("div",{class:"mz-acts"},
      el("button",{type:"button",onclick:function(){f.classList.toggle("open");this.textContent=f.classList.contains("open")?T("কম দেখাও ▴","Less ▴"):T("বিস্তারিত ▾","Details ▾");}},T("বিস্তারিত ▾","Details ▾")),
      el("button",{type:"button",class:"gold",onclick:function(){todoSheet(r);}},"🤲 "+T("আমাদের করণীয়","What we can do")),
      el("button",{type:"button","aria-label":T("শেয়ার","Share"),onclick:function(){var u=it.u||(it.id?"https://youtu.be/"+it.id:"");var s="["+P(r.n)+"] "+it.t+"\n"+u+"\n— Amalnama · "+T("মজলুম কর্নার","Mazlum Corner");try{if(navigator.share)navigator.share({text:s});else{navigator.clipboard.writeText(s);V.toast("✓");}}catch(e){}}},"↗")));
    c.appendChild(b);return c;}
  // ---- whole corner (standalone page or embedded in Media)
  var st={reg:"all",kind:"all",n:16};
  function render(root,opts){opts=opts||root._mzo||{};root._mzo=opts;root.innerHTML="";root.classList.add("mz");
    var hero=el("div",{class:"mz-hero"},liveIcon(64),
      el("div",{style:"flex:1;min-width:0"},el("b",null,T("মজলুম কর্নার","Mazlum Corner")),
        el("small",null,T("নির্যাতিত মুসলিমদের সর্বশেষ খবর, ভিডিও ও লেকচার","Latest news, videos and lectures on oppressed Muslims")),
        el("small",{class:"up"},DATA&&DATA.updated?"● "+T("আপডেট ","Updated ")+ago(DATA.updated):T("লোড হচ্ছে…","Loading…"))),
      el("button",{type:"button",class:"rf","aria-label":T("রিফ্রেশ","Refresh"),onclick:function(){refresh(root);}},V.icon([["M4.5 11.5a7.5 7.5 0 0 1 13-4.8L19.5 9","M19.5 4.2V9h-4.8","M19.5 12.5a7.5 7.5 0 0 1-13 4.8L4.5 15","M4.5 19.8V15h4.8"]],20)));
    root.appendChild(hero);
    var counts=(DATA&&DATA.counts)||{};
    var ch=el("div",{class:"mz-chips",role:"tablist"});
    [["all","🌍",T("সব অঞ্চল","All regions")]].concat(REG.map(function(r){return [r.k,r.flag,P(r.n)];})).forEach(function(x){
      ch.appendChild(el("button",{type:"button",role:"tab","aria-selected":String(st.reg===x[0]),onclick:function(){st.reg=x[0];st.n=16;render(root);}},x[1]+" "+x[2],counts[x[0]]?el("i",null,num(counts[x[0]])):null));});
    root.appendChild(ch);
    if(st.reg!=="all"){var r=RK[st.reg];root.appendChild(el("div",{class:"mz-prof",style:"--c:"+r.c},el("div",{class:"hd"},el("span",{class:"fl"},r.k==="palestine"?flag(40):r.flag),el("b",null,P(r.n))),facts(r,true),el("p",null,P(r.d)),
      el("button",{type:"button",class:"v4btn gold",style:"width:100%;justify-content:center",onclick:function(){todoSheet(r);}},"🤲 "+T("আমাদের করণীয়","What we can do"))));}
    root.appendChild(V.seg([["all",T("সব","All")],["video",T("ভিডিও","Videos")],["article",T("খবর","News")],["lecture",T("লেকচার","Lectures")]],st.kind,function(k){st.kind=k;st.n=16;render(root);}));
    var list=el("div",{class:"mz-list"});root.appendChild(list);
    if(!DATA){list.appendChild(el("div",{class:"mz-empty"},el("span",{class:"sp"}),T("সর্বশেষ আপডেট আনা হচ্ছে…","Fetching the latest updates…")));load().then(function(){if(root.isConnected)render(root);});return;}
    var items=(DATA.items||[]).filter(function(it){return RK[it.r]&&(st.reg==="all"||it.r===st.reg)&&(st.kind==="all"||it.k===st.kind);});
    // newest first; Bangla readers get Bangla reports nudged up
    var boost=function(i){return (Date.parse(i.pub)||0)+(V.L==="bn"&&i.lang==="bn"?6*36e5:0);};items.sort(function(a,b){return boost(b)-boost(a);});
    if(!items.length)list.appendChild(el("p",{class:"mz-empty"},T("এই মুহূর্তে কিছু নেই — একটু পরে রিফ্রেশ করো।","Nothing here right now — refresh a little later.")));
    items.slice(0,st.n).forEach(function(it){var c=card(it);if(c)list.appendChild(c);});
    if(items.length>st.n)root.appendChild(el("button",{type:"button",class:"v4btn",style:"width:100%;justify-content:center;margin-top:12px",onclick:function(){st.n+=16;render(root);}},T("আরও দেখাও","Show more")+" ("+num(items.length-st.n)+")"));
    root.appendChild(el("p",{class:"mz-foot"},T("সূত্র: Google News, BBC বাংলা, Al Jazeera, Middle East Eye, TRT World ও বিশ্বস্ত ইসলামিক চ্যানেল। ↻ চাপলেই সাথে সাথে সর্বশেষ খবর আসে।","Sources: Google News, BBC Bangla, Al Jazeera, Middle East Eye, TRT World and trusted Islamic channels. Tap ↻ for the very latest, straight away.")));
    if(!opts.embed)pull(root);}
  function refresh(root){var b=root.querySelector(".mz-hero .rf");if(b)b.classList.add("spin");var before=DATA&&DATA.updated;
    load(true).then(function(){if(!root.isConnected)return;render(root);V.toast(DATA&&DATA.updated!==before?T("নতুন আপডেট এসেছে","New updates loaded"):T("সব আপডেট দেখানো হচ্ছে","You're up to date"));});}
  function pull(root){if(root._mzpull)return;root._mzpull=1;var y0=null,dy=0;
    root.addEventListener("touchstart",function(e){y0=window.scrollY>2?null:e.touches[0].clientY;dy=0;},{passive:true});
    root.addEventListener("touchmove",function(e){if(y0!=null)dy=e.touches[0].clientY-y0;},{passive:true});
    root.addEventListener("touchend",function(){if(y0!=null&&dy>110)refresh(root);y0=null;});}
  AMZ.render=function(root,opts){render(root,opts);if(!DATA||Date.now()-Date.parse(DATA.updated||0)>15*6e4)load(false).then(function(){if(root.isConnected)render(root);});};
  V.section("mazlum",{open:function(r){r.innerHTML="";r.appendChild(V.head(T("মজলুম কর্নার","Mazlum Corner"),T("নির্যাতিত মুসলিম উম্মাহর খবর","News of the oppressed Ummah"),"more"));var box=el("div");r.appendChild(box);AMZ.render(box);}});
  V.space("mazlum","more");
  // ---- entry: round live flag on the More page
  function moreCard(){var r=document.getElementById("v-more");if(!r||r.querySelector(".mz-entry"))return;var h=r.querySelector(".v4h");if(!h)return;
    h.insertAdjacentElement("afterend",el("button",{type:"button",class:"v4card mz-entry",onclick:function(){window.setView("mazlum");}},liveIcon(58),
      el("span",{style:"flex:1;min-width:0;text-align:start"},el("b",null,T("মজলুম কর্নার","Mazlum Corner")),el("small",null,T("ফিলিস্তিন · সুদান · লেবানন · ইয়েমেন · ইরান · উইঘুর · কাশ্মীর · রোহিঙ্গা · ভারত · বিশ্বজুড়ে","Palestine · Sudan · Lebanon · Yemen · Iran · Uyghur · Kashmir · Rohingya · India · worldwide"))),
      el("span",{class:"v4muted"},V.RTL?"‹":"›")));}
  var mo=null,pv=window.setView;window.setView=function(v){pv(v);try{if(v==="more"){setTimeout(moreCard,0);var m=document.getElementById("v-more");if(m&&!mo){mo=new MutationObserver(function(){if(!m.querySelector(".mz-entry"))moreCard();});mo.observe(m,{childList:true});}}}catch(e){}};
  // loaded after the first screen: finish the page that is already open
  try{var cur=document.querySelector("section.v4s:not([hidden])");if(cur&&cur.id==="v-more")moreCard();
    var yt=document.querySelector(".v5yt");if(yt&&yt.isConnected&&!yt.querySelector(".mz-chip")&&!yt.querySelector("iframe")&&window.V5&&V5.videos)V5.videos(yt,yt._opts);}catch(e){}
})();
