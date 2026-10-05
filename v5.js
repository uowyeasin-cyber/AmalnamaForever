/* Amalnama v5 · design-matched screens: Sihah Sittah library, Media (YouTube-style, auto-refreshing), masail books reader, next-prayer dashboard, settings, share brochure */
(function(){
  var V=window.V4;if(!V)return;var t=V.t,num=V.num,el=V.el,ic=V.ic;
  var B=function(bn,en,ms,ar,ur,sw){return [bn,en,ms,ar,ur,sw];};
  // =====================================================================
  // HADITH · full Sihah Sittah library (Arabic ibarat + meaning), chapter by chapter
  // Source: fawazahmed0/hadith-api (jsDelivr CDN, public domain data)
  // =====================================================================
  var HAPI="https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/";
  var HSEC={"bukhari":[[1,"ওহির সূচনা","Revelation",1,7],[2,"ঈমান","Belief",8,58],[3,"ইলম (জ্ঞান)","Knowledge",59,134],[4,"অজু","Ablutions (Wudu')",135,247],[5,"গোসল","Bathing (Ghusl)",248,293],[6,"হায়েজ","Menstrual Periods",294,333],[7,"তায়াম্মুম","Rubbing hands and feet with dust (Tayammum)",334,348],[8,"সালাত","Prayers (Salat)",349,520],[9,"সালাতের ওয়াক্ত","Times of the Prayers",522,602],[10,"আযান","Call to Prayers (Adhaan)",603,875],[11,"জুমুআ","Friday Prayer",876,941],[12,"ভয়কালীন সালাত","Fear Prayer",942,947],[13,"দুই ঈদ","The Two Festivals (Eids)",948,989],[14,"বিতর","Witr Prayer",990,1004],[15,"ইস্তিসকা (বৃষ্টির দোয়া)","Invoking Allah for Rain (Istisqaa)",1005,1039],[16,"সূর্যগ্রহণ","Eclipses",1040,1066],[17,"তিলাওয়াতের সিজদা","Prostration During Recital of Qur'an",1067,1079],[18,"সালাত কসর করা","Shortening the Prayers (At-Taqseer)",1080,1119],[19,"তাহাজ্জুদ","Prayer at Night (Tahajjud)",1120,1187],[20,"মক্কা ও মদিনার মসজিদে সালাতের ফজিলত","Virtues of Prayer at Masjid Makkah and Madinah",1188,1197],[21,"সালাতের মধ্যে কাজ","Actions while Praying",1198,1223],[22,"সালাতে ভুল (সাহু)","Forgetfulness in Prayer",1224,1236],[23,"জানাযা","Funerals (Al-Janaa'iz)",1237,1394],[24,"যাকাত","Obligatory Charity Tax (Zakat)",1395,1512],[25,"হজ","Hajj (Pilgrimage)",1513,1772],[26,"উমরা","`Umrah (Minor pilgrimage)",1773,1805],[27,"হজে বাধাপ্রাপ্ত ব্যক্তি","Pilgrims Prevented from Completing the Pilgrimage",1806,1820],[28,"ইহরাম অবস্থায় শিকারের কাফফারা","Penalty of Hunting while on Pilgrimage",1821,1866],[29,"মদিনার ফজিলত","Virtues of Madinah",1867,1890],[30,"সাওম (রোজা)","Fasting",1891,2007],[31,"রমজানের রাতের সালাত (তারাবিহ)","Praying at Night in Ramadaan (Taraweeh)",2008,2013],[32,"লাইলাতুল কদরের ফজিলত","Virtues of the Night of Qadr",2014,2024],[33,"ইতিকাফ","Retiring to a Mosque for Remembrance of Allah (I'tikaf)",2025,2046],[34,"ক্রয়-বিক্রয়","Sales and Trade",2047,2238],[35,"সালাম (অগ্রিম মূল্যে ক্রয়)","Sales in which a Price is paid for Goods to be Delivered Later (As-Salam)",2239,2256],[36,"শুফআ (অগ্রক্রয়ের অধিকার)","Shuf'a",2257,2259],[37,"ইজারা (ভাড়া ও মজুরি)","Hiring",2260,2286],[38,"হাওয়ালা (ঋণ হস্তান্তর)","Transferance of a Debt from One Person to Another (Al-Hawaala)",2287,2289],[39,"কাফালা (জামিন)","Kafalah",2290,2298],[40,"ওকালত (প্রতিনিধিত্ব)","Representation, Authorization, Business by Proxy",2299,2319],[41,"কৃষিকাজ","Agriculture",2320,2350],[42,"পানি বণ্টন","Distribution of Water",2351,2383],[43,"ঋণ ও দেউলিয়াত্ব","Loans, Payment of Loans, Freezing of Property, Bankruptcy",2385,2409],[44,"ঝগড়া-বিবাদ","Khusoomaat",2410,2425],[45,"লুকতা (কুড়িয়ে পাওয়া জিনিস)","Lost Things Picked up by Someone (Luqatah)",2426,2439],[46,"জুলুম","Oppressions",2440,2482],[47,"অংশীদারি","Partnership",2483,2507],[48,"বন্ধক","Mortgaging",2508,2515],[49,"দাসমুক্তি","Manumission of Slaves",2517,2559],[50,"মুকাতাব","Makaatib",2560,2565],[51,"হিবা (উপহার)","Gifts",2566,2636],[52,"সাক্ষ্য","Witnesses",2637,2689],[53,"সন্ধি ও মীমাংসা","Peacemaking",2690,2710],[54,"শর্তাবলি","Conditions",2712,2737],[55,"ওসিয়ত","Wills and Testaments (Wasaayaa)",2738,2781],[56,"জিহাদ","Fighting for the Cause of Allah (Jihaad)",2782,3090],[57,"খুমুস (গনিমতের এক-পঞ্চমাংশ)","One-fifth of Booty to the Cause of Allah (Khumus)",3091,3155],[58,"জিযিয়া ও চুক্তি","Jizyah and Mawaada'ah",3157,3189],[59,"সৃষ্টির সূচনা","Beginning of Creation",3190,3325],[60,"নবীগণ","Prophets",3326,3488],[61,"নবী ﷺ ও সাহাবিদের মর্যাদা","Virtues and Merits of the Prophet (pbuh) and his Companions",3489,3648],[62,"সাহাবিদের ফজিলত","Companions of the Prophet",3649,3775],[63,"আনসারদের মর্যাদা","Merits of the Helpers in Madinah (Ansaar)",3776,3948],[64,"মাগাযি (যুদ্ধাভিযান)","Military Expeditions led by the Prophet (pbuh) (Al-Maghaazi)",3949,4473],[65,"তাফসির","Prophetic Commentary on the Qur'an (Tafseer of the Prophet (pbuh))",4474,4977],[66,"কুরআনের ফজিলত","Virtues of the Qur'an",4979,5062],[67,"বিবাহ","Wedlock, Marriage (Nikaah)",5063,5250],[68,"তালাক","Divorce",5251,5350],[69,"পরিবারের ভরণপোষণ","Supporting the Family",5351,5372],[70,"খাদ্য","Food, Meals",5373,5466],[71,"আকিকা","Sacrifice on Occasion of Birth (`Aqiqa)",5467,5474],[72,"শিকার ও জবাই","Hunting, Slaughtering",5475,5544],[73,"কুরবানি","Al-Adha Festival Sacrifice (Adaahi)",5545,5574],[74,"পানীয়","Drinks",5575,5639],[75,"রোগী","Patients",5640,5677],[76,"চিকিৎসা","Medicine",5678,5782],[77,"পোশাক","Dress",5783,5969],[78,"আদব (শিষ্টাচার)","Good Manners and Form (Al-Adab)",5970,6226],[79,"অনুমতি প্রার্থনা","Asking Permission",6227,6303],[80,"দোয়া","Invocations",6304,6411],[81,"রিকাক (হৃদয় নরম করা)","To make the Heart Tender (Ar-Riqaq)",6412,6593],[82,"তাকদির","Divine Will (Al-Qadar)",6594,6620],[83,"কসম ও মানত","Oaths and Vows",6621,6707],[84,"কসমের কাফফারা","Expiation for Unfulfilled Oaths",6708,6722],[85,"ফারায়েজ (উত্তরাধিকার)","Laws of Inheritance (Al-Faraa'id)",6723,6771],[86,"হুদুদ (দণ্ডবিধি)","Limits and Punishments set by Allah (Hudood)",6772,6860],[87,"দিয়াত (রক্তপণ)","Blood Money (Ad-Diyat)",6861,6917],[88,"মুরতাদ","Apostates",6918,6939],[89,"বলপ্রয়োগ","(Statements made under) Coercion",6940,6952],[90,"কৌশল (হিয়াল)","Tricks",6953,6981],[91,"স্বপ্নের ব্যাখ্যা","Interpretation of Dreams",6982,7047],[92,"ফিতনা ও কিয়ামতের আলামত","Afflictions and the End of the World",7048,7136],[93,"বিচার ও শাসন","Judgments (Ahkaam)",7137,7225],[94,"আকাঙ্ক্ষা","Wishes",7226,7245],[95,"সত্যবাদীর দেওয়া খবর গ্রহণ","Accepting Information Given by a Truthful Person",7246,7267],[96,"কুরআন ও সুন্নাহ আঁকড়ে ধরা","Holding Fast to the Qur'an and Sunnah",7268,7370],[97,"তাওহিদ","Oneness, Uniqueness of Allah (Tawheed)",7371,7563]],"muslim":[[1,"ঈমান","The Book of Faith",93,533],[2,"পবিত্রতা","The Book of Purification",534,678],[3,"হায়েজ","The Book of Menstruation",679,836],[4,"সালাত","The Book of Prayers",837,1160],[5,"মসজিদ ও সালাতের স্থান","The Book of Mosques and Places of Prayer",1161,1569],[6,"মুসাফিরের সালাত","The Book of Prayer - Travellers",1570,1950],[7,"জুমুআ","The Book of Prayer - Friday",1951,2043],[8,"দুই ঈদের সালাত","The Book of Prayer - Two Eids",2044,2069],[9,"ইস্তিসকা","The Book of Prayer - Rain",2070,2088],[10,"সূর্যগ্রহণের সালাত","The Book of Prayer - Eclipses",2089,2122],[11,"জানাযা","The Book of Prayer - Funerals",2123,2262],[12,"যাকাত","The Book of Zakat",2263,2494],[13,"সাওম (রোজা)","The Book of Fasting",2495,2779],[14,"ইতিকাফ","The Book of I'tikaf",2780,2790],[15,"হজ","The Book of Pilgrimage",2791,3397],[16,"বিবাহ","The Book of Marriage",388,3567],[17,"দুধপান","The Book of Suckling",3568,3651],[18,"তালাক","The Book of Divorce",3652,3742],[19,"লিআন","The Book of Invoking Curses",3743,3769],[20,"দাসমুক্তি","The Book of Emancipating Slaves",3770,3800],[21,"ক্রয়-বিক্রয়","The Book of Transactions",3801,3961],[22,"মুসাকাত (বর্গাচাষ)","The Book of Musaqah",3962,4139],[23,"ফারায়েজ (উত্তরাধিকার)","The Book of the Rules of Inheritance",4140,4162],[24,"হিবা (উপহার)","The Book of Gifts",4163,4203],[25,"ওসিয়ত","The Book of Wills",4204,4234],[26,"মানত","The Book of Vows",4235,4253],[27,"কসম","The Book of Oaths",4254,4341],[28,"কাসামা, কিসাস ও দিয়াত","The Book of Oaths, Muharibin, Qasas (Retaliation), and Diyat (Blood Money)",4342,4397],[29,"হুদুদ (দণ্ডবিধি)","The Book of Legal Punishments",4398,4469],[30,"বিচারকার্য","The Book of Judicial Decisions",4470,4497],[31,"লুকতা (হারানো জিনিস)","The Book of Lost Property",4498,4518],[32,"জিহাদ ও অভিযান","The Book of Jihad and Expeditions",4519,4700],[33,"ইমারত (নেতৃত্ব ও শাসন)","The Book on Government",4701,4967],[34,"শিকার, জবাই ও হালাল খাদ্য","The Book of Hunting, Slaughter, and what may be Eaten",4972,5063],[35,"কুরবানি","The Book of Sacrifices",5064,5126],[36,"পানীয়","The Book of Drinks",5114,5383],[37,"পোশাক ও সাজসজ্জা","The Book of Clothes and Adornment",5385,5585],[38,"আদব (শিষ্টাচার)","The Book of Manners and Etiquette",5586,5645],[39,"সালাম","The Book of Greetings",5646,5861],[40,"সঠিক শব্দ প্রয়োগ","The Book Concerning the Use of Correct Words",5862,5884],[41,"কবিতা","The Book of Poetry",5887,5896],[42,"স্বপ্ন","The Book of Dreams",5897,5937],[43,"ফজিলত (নবী ﷺ-এর মর্যাদা)","The Book of Virtues",384,6168],[44,"সাহাবিদের ফজিলত","The Book of the Merits of the Companions",6169,6499],[45,"সদাচার ও আত্মীয়তা রক্ষা","The Book of Virtue, Enjoining Good Manners, and Joining of the Ties of Kinship",6500,6722],[46,"তাকদির","The Book of Destiny",6723,6774],[47,"ইলম (জ্ঞান)","The Book of Knowledge",6775,6804],[48,"জিকির, দোয়া, তওবা ও ইস্তিগফার","The Book Pertaining to the Remembrance of Allah, Supplication, Repentance and Seeking Forgiveness",6805,6936],[49,"হৃদয় নরম করার হাদিস","The Book of Heart-Melting Traditions",6937,6951],[50,"তওবা","The Book of Repentance",6952,7023],[51,"মুনাফিকদের বৈশিষ্ট্য","Characteristics of The Hypocrites And Rulings Concerning Them",7024,7044],[52,"কিয়ামত, জান্নাত ও জাহান্নামের বিবরণ","Characteristics of the Day of Judgment, Paradise, and Hell",7045,7129],[53,"জান্নাত ও তার নিয়ামত","The Book of Paradise, its Description, its Bounties and its Inhabitants",7130,7234],[54,"ফিতনা ও কিয়ামতের আলামত","The Book of Tribulations and Portents of the Last Hour",7235,7416],[55,"যুহদ ও হৃদয় নরম করা","The Book of Zuhd and Softening of Hearts",7417,7522],[56,"তাফসির","The Book of Commentary on the Qur'an",7523,7563]],"abudawud":[[1,"পবিত্রতা","Purification (Kitab Al-Taharah)",1,390],[2,"সালাত","Prayer (Kitab Al-Salat)",391,1160],[3,"ইস্তিসকা (বৃষ্টির দোয়া)","The Book Of The Prayer For Rain (Kitab al-Istisqa')",1161,1197],[4,"সফরের সালাত","Prayer (Kitab Al-Salat): Detailed Rules of Law about the Prayer during Journey",1198,1249],[5,"নফল সালাত","Prayer (Kitab Al-Salat): Voluntary Prayers",1250,1370],[6,"রমজানের বিধান","Prayer (Kitab Al-Salat): Detailed Injunctions about Ramadan",1371,1400],[7,"তিলাওয়াতের সিজদা","Prayer (Kitab Al-Salat): Prostration while reciting the Qur'an",1401,1415],[8,"বিতর","Prayer (Kitab Al-Salat): Detailed Injunctions about Witr",1416,1555],[9,"যাকাত","Zakat (Kitab Al-Zakat)",1556,1700],[10,"হারানো ও কুড়িয়ে পাওয়া জিনিস","The Book of Lost and Found Items",1701,1720],[11,"হজের বিধান","The Rites of Hajj (Kitab Al-Manasik Wa'l-Hajj)",1721,2045],[12,"বিবাহ","Marriage (Kitab Al-Nikah)",2046,2174],[13,"তালাক","Divorce (Kitab Al-Talaq)",2175,2312],[14,"সাওম (রোজা)","Fasting (Kitab Al-Siyam)",2313,2476],[15,"জিহাদ","Jihad (Kitab Al-Jihad)",2477,2787],[16,"কুরবানি","Sacrifice (Kitab Al-Dahaya)",2788,2843],[17,"শিকার","Game (Kitab Al-Said)",2844,2861],[18,"ওসিয়ত","Wills (Kitab Al-Wasaya)",2862,2884],[19,"ফারায়েজ (উত্তরাধিকার)","Shares of Inheritance (Kitab Al-Fara'id)",2885,2927],[20,"খারাজ, ফাই ও শাসন","Tribute, Spoils, and Rulership (Kitab Al-Kharaj, Wal-Fai' Wal-Imarah)",2928,3088],[21,"জানাযা","Funerals (Kitab Al-Jana'iz)",3089,3241],[22,"কসম ও মানত","Oaths and Vows (Kitab Al-Aiman Wa Al-Nudhur)",3242,3325],[23,"ক্রয়-বিক্রয়","Commercial Transactions (Kitab Al-Buyu)",3326,3415],[24,"ইজারা (মজুরি)","Wages (Kitab Al-Ijarah)",3416,3570],[25,"বিচারকার্য","The Office of the Judge (Kitab Al-Aqdiyah)",3571,3640],[26,"ইলম (জ্ঞান)","Knowledge (Kitab Al-Ilm)",3641,3668],[27,"পানীয়","Drinks (Kitab Al-Ashribah)",3669,3735],[28,"খাদ্য","Foods (Kitab Al-At'imah)",3736,3854],[29,"চিকিৎসা","Medicine (Kitab Al-Tibb)",3855,3903],[30,"গণকবিদ্যা ও কুলক্ষণ","Divination and Omens (Kitab Al-Kahanah Wa Al-Tatayyur)",3904,3925],[31,"দাসমুক্তি","The Book of Manumission of Slaves",3926,3968],[32,"কুরআনের কিরাআত","Dialects and Readings of the Qur'an (Kitab Al-Huruf Wa Al-Qira'at)",3969,4008],[33,"হাম্মাম (গোসলখানা)","Hot Baths (Kitab Al-Hammam)",4009,4019],[34,"পোশাক","Clothing (Kitab Al-Libas)",4020,4158],[35,"চুল আঁচড়ানো ও সাজসজ্জা","Combing the Hair (Kitab Al-Tarajjul)",4159,4213],[36,"আংটি","Signet-Rings (Kitab Al-Khatam)",4214,4239],[37,"ফিতনা ও যুদ্ধ","Trials and Fierce Battles (Kitab Al-Fitan Wa Al-Malahim)",4240,4278],[38,"মাহদি","The Promised Deliverer (Kitab Al-Mahdi)",4279,4290],[39,"মালাহিম (মহাযুদ্ধ)","Battles (Kitab Al-Malahim)",4291,4350],[40,"হুদুদ (দণ্ডবিধি)","Prescribed Punishments (Kitab Al-Hudud)",4351,4493],[41,"দিয়াত (রক্তপণ)","Types of Blood-Wit (Kitab Al-Diyat)",4494,4595],[42,"সুন্নাহ","Model Behavior of the Prophet (Kitab Al-Sunnah)",4596,4772],[43,"আদব (শিষ্টাচার)","General Behavior (Kitab Al-Adab)",4773,5274]],"tirmidhi":[[1,"পবিত্রতা","The Book on Purification",1,148],[2,"সালাত","The Book on Salat (Prayer)",149,451],[3,"বিতর","The Book on Al-Witr",452,487],[4,"জুমুআ","The Book on the Day of Friday",488,529],[5,"দুই ঈদ","The Book on the Two Eids",530,543],[6,"সফর","The Book on Traveling",544,616],[7,"যাকাত","The Book on Zakat",617,681],[8,"সাওম (রোজা)","The Book on Fasting",682,808],[9,"হজ","The Book on Hajj",809,964],[10,"জানাযা","The Book on Jana''iz (Funerals)",965,1079],[11,"বিবাহ","The Book on Marriage",1080,1145],[12,"দুধপান","The Book on Suckling",1146,1174],[13,"তালাক ও লিআন","The Book on Divorce and Li'an",1175,1204],[14,"ক্রয়-বিক্রয়","The Book on Business",1205,1321],[15,"রাসূল ﷺ-এর বিচার","The Chapters On Judgements From The Messenger of Allah",1322,1385],[16,"দিয়াত (রক্তপণ)","The Book on Blood Money",1386,1422],[17,"হুদুদ (দণ্ডবিধি)","The Book on Legal Punishments (Al-Hudud)",1423,1463],[18,"শিকার","The Book on Hunting",1464,1492],[19,"কুরবানি","The Book on Sacrifices",1493,1523],[20,"মানত ও কসম","The Book on Vows and Oaths",1524,1547],[21,"যুদ্ধাভিযান","The Book on Military Expeditions",1548,1618],[22,"জিহাদের ফজিলত","The Book on Virtues of Jihad",1619,1669],[23,"জিহাদ","The Book on Jihad",1670,1719],[24,"পোশাক","The Book on Clothing",1720,1787],[25,"খাদ্য","The Book on Food",1788,1860],[26,"পানীয়","The Book on Drinks",1861,1896],[27,"সদাচার ও আত্মীয়তা রক্ষা","Chapters on Righteousness And Maintaining Good Relations With Relatives",1897,2035],[28,"চিকিৎসা","Chapters on Medicine",2036,2089],[29,"উত্তরাধিকার","Chapters On Inheritance",2090,2115],[30,"ওসিয়ত","Chapters On Wasaya (Wills and Testament)",2116,2124],[31,"ওয়ালা ও উপহার","Chapters On Wala' And Gifts",2125,2132],[32,"তাকদির","Chapters On Al-Qadar",2133,2298],[33,"ফিতনা","Chapters On Al-Fitan",2158,2269],[34,"স্বপ্ন","Chapters On Dreams",2270,2294],[35,"সাক্ষ্য","Chapters On Witnesses",2295,2303],[36,"যুহদ (দুনিয়াবিমুখতা)","Chapters On Zuhd",2304,2414],[37,"কিয়ামত, রিকাক ও তাকওয়া","Chapters on the description of the Day of Judgement, Ar-Riqaq, and Al-Wara'",2415,2522],[38,"জান্নাতের বিবরণ","Chapters on the description of Paradise",2523,2735],[39,"জাহান্নামের বিবরণ","The Book on the Description of Hellfire",2573,2795],[40,"ঈমান","The Book on Faith",2606,2644],[41,"ইলম (জ্ঞান)","Chapters on Knowledge",2645,2687],[42,"অনুমতি প্রার্থনা","Chapters on Seeking Permission",2688,2734],[43,"আদব (শিষ্টাচার)","Chapters on Manners",2736,2858],[44,"দৃষ্টান্ত","Chapters on Parables",2859,2874],[45,"কুরআনের ফজিলত","Chapters on The Virtues of the Qur'an",2875,2926],[46,"কিরাআত","Chapters on Recitation",2927,2949],[47,"তাফসির","Chapters on Tafsir",2950,3723],[48,"দোয়া","Chapters on Supplication",3370,3604.1],[49,"মানাকিব (মর্যাদা)","Chapters on Virtues",3605,3956]],"nasai":[[1,"পবিত্রতা","The Book of Purification",1,324],[2,"পানি","The Book of Water",325,347],[3,"হায়েজ ও ইস্তিহাযা","The Book of Menstruation and Istihadah",348,395],[4,"গোসল ও তায়াম্মুম","The Book of Ghusl and Tayammum",396,447],[5,"সালাত","The Book of Salah",448,493],[6,"সালাতের ওয়াক্ত","The Book of the Times (of Prayer)",494,625],[7,"আযান","The Book of the Adhan (The Call to Prayer)",626,687],[8,"মসজিদ","The Book of the Masjids",688,741],[9,"কিবলা","The Book of the Qiblah",742,776],[10,"ইমামতি","The Book of Leading the Prayer (Al-Imamah)",777,875],[11,"সালাত শুরু করা","The Book of the Commencement of the Prayer",876,1028],[12,"তাতবিক (রুকুতে হাত রাখা)","The Book of The At-Tatbiq (Clasping One's Hands Together)",1029,1178],[13,"সালাতে ভুল (সাহু)","The Book of Forgetfulness (In Prayer)",1179,1366],[14,"জুমুআ","The Book of Jumu'ah (Friday Prayer)",1367,1432],[15,"সফরে সালাত কসর","The Book of Shortening the Prayer When Traveling",1433,1458],[16,"সূর্যগ্রহণ","The Book of Eclipses",1459,1503],[17,"ইস্তিসকা (বৃষ্টির দোয়া)","The Book of Praying for Rain (Al-Istisqa')",1504,1528],[18,"ভয়কালীন সালাত","The Book of the Fear Prayer",1529,1555],[19,"দুই ঈদের সালাত","The Book of the Prayer for the Two 'Eids",1556,1597],[20,"কিয়ামুল লাইল ও দিনের নফল সালাত","The Book of Qiyam Al-Lail (The Night Prayer) and Voluntary Prayers During the Day",1598,1817],[21,"জানাযা","The Book of Funerals",1818,2089],[22,"সাওম (রোজা)","The Book of Fasting",2090,2434],[23,"যাকাত","The Book of Zakah",2435,2618],[24,"হজ","The Book of Hajj",2619,3084],[25,"জিহাদ","The Book of Jihad",3085,3195],[26,"বিবাহ","The Book of Marriage",3196,3388],[27,"তালাক","The Book of Divorce",3389,3560],[28,"ঘোড়া, দৌড় ও তীর নিক্ষেপ","The Book of Horses, Races and Shooting",3561,3593],[29,"ওয়াকফ","The Book of Endowments",3594,3610],[30,"ওসিয়ত","The Book of Wills",3611,3671],[31,"দান (নুহল)","The Book of Presents",3672,3687],[32,"হিবা (উপহার)","The Book of Gifts",3688,3705],[33,"রুকবা","The Book of ar-Ruqba",3706,3719],[34,"উমরা","The Book of 'Umra",3720,3760],[35,"কৃষিকাজ","The Book of Agriculture",3761,3856],[36,"স্ত্রীদের প্রতি সদাচরণ","The Book of the Kind Treatment of Women",3939,3965],[37,"রক্তপাতের নিষেধাজ্ঞা","The Book of Fighting [The Prohibition of Bloodshed]",3966,4132],[38,"ফাই বণ্টন","The Book of Distribution of Al-Fay'",4133,4148],[39,"বাইআত","The Book of al-Bay'ah",4149,4211],[40,"আকিকা","The Book of al-'Aqiqah",4212,4221],[41,"ফারা ও আতিরা","The Book of al-Fara' and al-'Atirah",4222,4262],[42,"শিকার ও জবাই","The Book of Hunting and Slaughtering",4263,4360],[43,"কুরবানি","The Book of ad-Dahaya (Sacrifices)",4361,4448],[44,"আর্থিক লেনদেন","The Book of Financial Transactions",4449,4705],[45,"কাসামা, কিসাস ও দিয়াত","The Book of Oaths (qasamah), Retaliation and Blood Money",4706,4869],[46,"চোরের হাত কাটা","The Book of Cutting off the Hand of the Thief",4870,4984],[47,"ঈমান ও তার নিদর্শন","The Book Of Faith and its Signs",4985,5039],[48,"সাজসজ্জা","The Book of Adornment",5040,5378],[49,"বিচারকের আদব","The Book of the Etiquette of Judges",5379,5427],[50,"আল্লাহর আশ্রয় প্রার্থনা","The Book of Seeking Refuge with Allah",5428,5539],[51,"পানীয়","The Book of Drinks",5540,5758]],"ibnmajah":[[1,"পবিত্রতা ও তার সুন্নাহ","The Book of Purification and its Sunnah",267,666],[2,"সালাত","The Book of the Prayer",667,705],[3,"আযান ও তার সুন্নাহ","The Book of the Adhan and the Sunnah Regarding It",706,734],[4,"মসজিদ ও জামাআত","The Book On The Mosques And The Congregations",735,802],[5,"সালাত কায়েম ও তার সুন্নাহ","Establishing the Prayer and the Sunnah Regarding Them",803,1432],[6,"জানাযা","Chapters Regarding Funerals",1433,1637],[7,"সাওম (রোজা)","Fasting",1638,1782],[8,"যাকাত","The Chapters Regarding Zakat",1783,1844],[9,"বিবাহ","The Chapters on Marriage",1845,2015],[10,"তালাক","The Chapters on Divorce",2016,2477],[11,"কাফফারা","The Chapters on Expiation",2090,2136],[12,"ব্যবসা-বাণিজ্য","The Chapters on Business Transactions",2137,2307],[13,"বিচারকার্য","The Chapters on Rulings",2308,2374],[14,"হিবা (উপহার)","The Chapters on Gifts",2375,2389],[15,"সদকা","The Chapters on Charity",2390,2528],[16,"বন্ধক","The Chapters on Pawning",2436,2491],[17,"শুফআ (অগ্রক্রয়ের অধিকার)","The Chapters on Pre-emption",2492,2501],[18,"হারানো জিনিস","The Chapters on Lost Property",2502,2511],[19,"দাসমুক্তি","The Chapters on Manumission (of Slaves)",2512,2532],[20,"হুদুদ (দণ্ডবিধি)","The Chapters on Legal Punishments",2533,2614],[21,"দিয়াত (রক্তপণ)","The Chapters on Blood Money",2615,2694],[22,"ওসিয়ত","The Chapters on Wills",2695,2718],[23,"উত্তরাধিকার","Chapters on Shares of Inheritance",2719,2752],[24,"জিহাদ","The Chapters on Jihad",2753,2881],[25,"হজের বিধান","Chapters on Hajj Rituals",2882,3119],[26,"কুরবানি","Chapters on Sacrifices",3120,3161],[27,"জবাই","Chapters on Slaughtering",3162,3199],[28,"শিকার","Chapters on Hunting",3200,3250],[29,"খাদ্য","Chapters on Food",3251,3370],[30,"পানীয়","Chapters on Drinks",3371,3435],[31,"চিকিৎসা","Chapters on Medicine",3436,3549],[32,"পোশাক","Chapters on Dress",3550,3656],[33,"আদব (শিষ্টাচার)","Etiquette",3657,3826],[34,"দোয়া","Supplication",3827,3892],[35,"স্বপ্নের ব্যাখ্যা","Interpretation of Dreams",3893,3926],[36,"ফিতনা","Tribulations",3927,4099],[37,"যুহদ (দুনিয়াবিমুখতা)","Zuhd",4100,4341]]};
  var HBOOKS=[
    ["bukhari","صحيح البخاري",B("সহিহ বুখারি","Sahih al-Bukhari","Sahih al-Bukhari","صحيح البخاري","صحیح بخاری","Sahih al-Bukhari"),B("ইমাম মুহাম্মাদ ইবনে ইসমাঈল আল-বুখারি (রহ.)","Imam Muhammad ibn Isma'il al-Bukhari","Imam al-Bukhari","الإمام محمد بن إسماعيل البخاري","امام محمد بن اسماعیل بخاری","Imam al-Bukhari"),7563],
    ["muslim","صحيح مسلم",B("সহিহ মুসলিম","Sahih Muslim","Sahih Muslim","صحيح مسلم","صحیح مسلم","Sahih Muslim"),B("ইমাম মুসলিম ইবনুল হাজ্জাজ (রহ.)","Imam Muslim ibn al-Hajjaj","Imam Muslim","الإمام مسلم بن الحجاج","امام مسلم بن حجاج","Imam Muslim"),7563],
    ["abudawud","سنن أبي داود",B("সুনানে আবু দাউদ","Sunan Abi Dawud","Sunan Abi Dawud","سنن أبي داود","سنن ابی داود","Sunan Abi Dawud"),B("ইমাম আবু দাউদ সুলাইমান ইবনুল আশআস (রহ.)","Imam Abu Dawud Sulayman ibn al-Ash'ath","Imam Abu Dawud","الإمام أبو داود السجستاني","امام ابو داود","Imam Abu Dawud"),5274],
    ["tirmidhi","جامع الترمذي",B("জামে তিরমিজি","Jami' at-Tirmidhi","Jami' at-Tirmidhi","جامع الترمذي","جامع ترمذی","Jami' at-Tirmidhi"),B("ইমাম মুহাম্মাদ ইবনে ঈসা আত-তিরমিজি (রহ.)","Imam Muhammad ibn 'Isa at-Tirmidhi","Imam at-Tirmidhi","الإمام محمد بن عيسى الترمذي","امام ترمذی","Imam at-Tirmidhi"),3956],
    ["nasai","سنن النسائي",B("সুনানে নাসায়ি","Sunan an-Nasa'i","Sunan an-Nasa'i","سنن النسائي","سنن نسائی","Sunan an-Nasa'i"),B("ইমাম আহমাদ ইবনে শুআইব আন-নাসায়ি (রহ.)","Imam Ahmad ibn Shu'ayb an-Nasa'i","Imam an-Nasa'i","الإمام أحمد بن شعيب النسائي","امام نسائی","Imam an-Nasa'i"),5758],
    ["ibnmajah","سنن ابن ماجه",B("সুনানে ইবনে মাজাহ","Sunan Ibn Majah","Sunan Ibn Majah","سنن ابن ماجه","سنن ابن ماجہ","Sunan Ibn Majah"),B("ইমাম মুহাম্মাদ ইবনে ইয়াজিদ ইবনে মাজাহ (রহ.)","Imam Muhammad ibn Yazid Ibn Majah","Imam Ibn Majah","الإمام ابن ماجه القزويني","امام ابن ماجہ","Imam Ibn Majah"),4341]];
  // meaning edition for each app language (Arabic users read the ibarat itself)
  function mEd(book){var L=V.L;var m={bn:"ben",en:"eng",ms:"ind",ur:"urd",sw:"eng",ar:"eng"}[L]||"eng";return m+"-"+book;}
  var hcache={};
  function hget(url){if(hcache[url])return hcache[url];var p=fetch(url).then(function(r){if(!r.ok)throw new Error("http "+r.status);return r.json();});hcache[url]=p;p.catch(function(){delete hcache[url];});return p;}
  function hsection(book,sec){return Promise.all([hget(HAPI+"ara-"+book+"/sections/"+sec+".min.json"),hget(HAPI+mEd(book)+"/sections/"+sec+".min.json").catch(function(){return {hadiths:[]};})])
    .then(function(r){var mm={};(r[1].hadiths||[]).forEach(function(h){mm[h.hadithnumber]=h;});
      return (r[0].hadiths||[]).map(function(h){var m=mm[h.hadithnumber]||{};return {n:h.hadithnumber,ar:h.text||"",tr:m.text||"",g:(m.grades&&m.grades.length?m.grades:h.grades)||[],ref:h.reference||m.reference};})
        .filter(function(h){return h.ar||h.tr;});});}
  function hone(book,n){return Promise.all([hget(HAPI+"ara-"+book+"/"+n+".min.json"),hget(HAPI+mEd(book)+"/"+n+".min.json").catch(function(){return {hadiths:[]};})])
    .then(function(r){var a=(r[0].hadiths||[])[0]||{},m=(r[1].hadiths||[])[0]||{};var sec=Object.keys(r[0].metadata&&r[0].metadata.section||{})[0];
      return {n:n,ar:a.text||"",tr:m.text||"",g:(m.grades&&m.grades.length?m.grades:a.grades)||[],sec:sec?+sec:null};});}
  var GR={"sahih":B("সহিহ","Sahih","Sahih","صحيح","صحیح","Sahih"),"hasan":B("হাসান","Hasan","Hasan","حسن","حسن","Hasan"),"hasan sahih":B("হাসান সহিহ","Hasan Sahih","Hasan Sahih","حسن صحيح","حسن صحیح","Hasan Sahih"),
    "da'if":B("যঈফ","Da'if","Da'if","ضعيف","ضعیف","Da'if"),"daif":B("যঈফ","Da'if","Da'if","ضعيف","ضعیف","Da'if"),"maudu":B("মাওযু","Mawdu'","Maudhu'","موضوع","موضوع","Mawdu'"),"munkar":B("মুনকার","Munkar","Munkar","منكر","منکر","Munkar"),"shadh":B("শায","Shadh","Syaz","شاذ","شاذ","Shadh")};
  function gradeOf(book,h){if(book==="bukhari"||book==="muslim")return {txt:t(GR.sahih),ok:true};
    var g=(h.g||[]).filter(function(x){return /albani/i.test(x.name||"");})[0]||(h.g||[])[0];if(!g||!g.grade)return null;
    var raw=String(g.grade).toLowerCase().replace(/[’`]/g,"'").trim(),key=Object.keys(GR).filter(function(k){return raw.indexOf(k)===0;}).sort(function(a,b){return b.length-a.length;})[0];
    return {txt:(key?t(GR[key]):g.grade)+(g.name?" · "+g.name:""),ok:!/da'?if|maudu|munkar|shadh|mawdu/.test(raw)};}
  var hs={b:0,view:"ch",sec:null,shown:20,q:""};
  function hbm(){var v=V.V();v.hbm=v.hbm||[];return v.hbm;}
  function bookByKey(k){return HBOOKS.filter(function(b){return b[0]===k;})[0];}
  function secInfo(book,s){return (HSEC[book]||[]).filter(function(x){return x[0]===s;})[0];}
  function secOfNum(book,n){return (HSEC[book]||[]).filter(function(x){return n>=x[3]&&n<=x[4];})[0];}
  var HROOT=null;
  V.section("hadith",{open:function(r){HROOT=r;hdraw();}});
  function hdraw(){var r=HROOT;if(!r)return;r.innerHTML="";r.className="v4s v5hd";var bk=HBOOKS[hs.b];
    var top=el("div",{class:"v5hd-top"},
      el("button",{class:"v5sq",type:"button","aria-label":t(B("ফিরে যাও","Back","Kembali","رجوع","واپس","Rudi")),onclick:function(){if(hs.view==="sec"){hs.view="ch";hdraw();}else window.setView("amal");}},ic("back",20)),
      el("div",{style:"flex:1;min-width:0"},el("h1",null,t(B("হাদিস","Hadith","Hadis","الحديث","حدیث","Hadithi"))),el("div",{class:"sub"},t(B("সিহাহ সিত্তাহ · ইবারত ও অর্থসহ","Sihah Sittah · Arabic text with meaning","Kutub as-Sittah · teks Arab & makna","الكتب الستة · النص والمعنى","صحاح ستہ · عبارت اور ترجمہ","Vitabu Sita · maandishi na maana")))),
      el("button",{class:"v5sq",type:"button","aria-label":t(B("হাদিস নম্বর দিয়ে খোঁজো","Find by hadith number","Cari nombor hadis","ابحث برقم الحديث","نمبر سے تلاش","Tafuta kwa nambari")),onclick:hsearch},
        V.icon([["M11 17.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM20 20l-4-4"]],20)));
    r.appendChild(top);
    var grid=el("div",{class:"v5hd-books"});
    HBOOKS.forEach(function(b,i){grid.appendChild(el("button",{type:"button","aria-pressed":String(i===hs.b),onclick:function(){hs.b=i;hs.view="ch";hs.sec=null;hdraw();}},
      el("span",{class:"ar",dir:"rtl",lang:"ar"},b[1]),el("span",{class:"bn"},t(b[2]))));});
    r.appendChild(grid);
    var hero=el("section",{class:"v5hd-hero"},el("span",{class:"dm","aria-hidden":"true"}),el("div",{class:"ar",dir:"rtl",lang:"ar"},bk[1]),el("div",{class:"bn"},t(bk[2])),
      el("div",{class:"by"},t(B("সংকলক: ","Compiler: ","Penyusun: ","الجامع: ","مرتب: ","Mkusanyaji: "))+t(bk[3])),
      el("div",{class:"chips"},el("span",{class:"c1"},num(HSEC[bk[0]].length)+" "+t(B("অধ্যায়","chapters","bab","كتابًا","ابواب","milango"))),el("span",{class:"c2"},t(B("আরবি ইবারত","Arabic text","Teks Arab","النص العربي","عربی عبارت","Maandishi ya Kiarabu"))),
        el("span",{class:"c3"},"~"+num(bk[4])+" "+t(B("হাদিস","hadith","hadis","حديث","احادیث","hadithi")))));
    r.appendChild(hero);
    if(hs.view==="sec"&&hs.sec!=null){hsecView(r,bk);return;}
    r.appendChild(V.seg([["ch",t(B("অধ্যায়সমূহ","Chapters","Bab","الكتب","ابواب","Milango"))],["bm",t(B("বুকমার্ক","Bookmarks","Penanda","المحفوظات","بک مارکس","Alamisho"))+(hbm().length?" ("+num(hbm().length)+")":"")]],hs.view==="bm"?"bm":"ch",function(k){hs.view=k;hdraw();}));
    if(hs.view==="bm"){hbmView(r);return;}
    var fl=el("input",{class:"v5hd-filter",type:"search",placeholder:t(B("অধ্যায় খুঁজো…","Filter chapters…","Tapis bab…","ابحث في الكتب…","باب تلاش کریں…","Chuja milango…")),value:hs.q||""});
    var list=el("div",{class:"v5hd-chs"});r.appendChild(fl);r.appendChild(list);
    function dl(){var q=(fl.value||"").trim().toLowerCase();hs.q=fl.value;list.innerHTML="";
      HSEC[bk[0]].forEach(function(c){if(q&&(c[1]+" "+c[2]).toLowerCase().indexOf(q)<0&&String(c[0])!==q)return;
        list.appendChild(el("button",{type:"button",onclick:function(){hs.view="sec";hs.sec=c[0];hs.shown=20;hdraw();window.scrollTo({top:0});}},
          el("span",{class:"no"},num(c[0])),el("span",{class:"tt"},el("b",null,V.L==="bn"?c[1]:c[2]),el("small",null,(V.L==="bn"?c[2]+" · ":"")+t(B("হাদিস ","Hadith ","Hadis ","الأحاديث ","احادیث ","Hadithi "))+num(c[3])+"–"+num(c[4]))),
          V.icon([[V.RTL?"M15 6l-6 6 6 6":"M9 6l6 6-6 6"]],16)));});
      if(!list.children.length)list.appendChild(el("p",{class:"v4muted",style:"text-align:center"},"—"));}
    fl.oninput=dl;dl();
    r.appendChild(el("p",{class:"v5hd-src"},t(B("ইবারত ও অনুবাদ: hadith-api (fawazahmed0)। ক্রমিক নম্বর প্রচলিত মুদ্রণ অনুযায়ী। বিস্তারিত মাসআলার জন্য নির্ভরযোগ্য আলিমের শরণাপন্ন হও।","Text and translation: hadith-api (fawazahmed0). Numbering follows the common printed editions. For rulings consult a qualified scholar.","Teks & terjemahan: hadith-api. Rujuk ulama untuk hukum.","النص والترجمة: hadith-api. للأحكام ارجع إلى أهل العلم.","متن و ترجمہ: hadith-api۔ مسائل کے لیے مستند عالم سے رجوع کریں۔","Maandishi: hadith-api. Kwa hukumu muulize mwanachuoni."))));}
  function hcard(bk,h,secName){var key=bk[0]+":"+h.n,on=hbm().indexOf(key)>=0,g=gradeOf(bk[0],h);
    var mark=el("button",{class:"bm",type:"button","aria-pressed":String(on),"aria-label":t(B("বুকমার্ক","Bookmark","Penanda","حفظ","بک مارک","Alamisho"))},V.icon([["M6.5 4h11v16.5L12 16.8l-5.5 3.7z",on?"1":null]],20));
    mark.onclick=function(){var a=hbm(),i=a.indexOf(key);if(i>=0)a.splice(i,1);else a.push(key);V.save();var o=i<0;mark.setAttribute("aria-pressed",String(o));mark.querySelector("path").setAttribute("fill",o?"currentColor":"none");if(o)mark.querySelector("path").setAttribute("fill-opacity","1");V.toast(o?t(B("বুকমার্ক করা হলো","Bookmarked","Ditanda","تم الحفظ","محفوظ","Imewekwa alamisho")):t(B("বুকমার্ক সরানো হলো","Removed","Dibuang","أزيل","ہٹا دیا","Imeondolewa")));};
    var share=el("button",{class:"bm",type:"button","aria-label":t(B("শেয়ার","Share","Kongsi","مشاركة","شیئر","Shiriki"))},V.icon([["M21 3.5L10.5 13.8M21 3.5l-6.5 17-4-7.7-7.7-4z"]],19));
    share.onclick=function(){var txt=h.ar+"\n\n"+h.tr+"\n— "+t(bk[2])+" "+h.n;try{if(navigator.share)navigator.share({text:txt});else{navigator.clipboard.writeText(txt);V.toast(t(B("কপি হয়েছে","Copied","Disalin","تم النسخ","کاپی","Imenakiliwa")));}}catch(e){}};
    var tr=String(h.tr||"").replace(/^\s*[।|]\s*/,"");
    return el("article",{class:"v5hd-card"},
      el("div",{class:"hd"},el("span",{class:"ref"},t(bk[2])+" · "+t(B("হাদিস ","Hadith ","Hadis ","حديث ","حدیث ","Hadithi "))+num(h.n)),el("span",{style:"flex:1"}),share,mark),
      el("div",{class:"lb"},t(B("ইবারত","Arabic text","Teks Arab","النص","عبارت","Maandishi"))),
      el("div",{class:"ar",dir:"rtl",lang:"ar"},h.ar||"—"),
      V.L==="ar"?null:el("div",{class:"hr"}),
      V.L==="ar"?null:el("div",{class:"lb"},t(B("অর্থ","Meaning","Makna","المعنى","ترجمہ","Maana"))),
      V.L==="ar"?null:el("div",{class:"tr"},tr||t(B("এই হাদিসের অনুবাদ এখনো পাওয়া যায়নি।","Translation not available for this hadith.","Terjemahan tiada.","الترجمة غير متوفرة.","ترجمہ دستیاب نہیں۔","Tafsiri haipatikani."))),
      el("div",{class:"ft"},el("span",null,secName||""),g?el("span",{class:g.ok?"ok":"weak"},t(B("মান: ","Grade: ","Taraf: ","الدرجة: ","درجہ: ","Daraja: "))+g.txt):null));}
  function hload(box,msg){box.innerHTML="";box.appendChild(el("div",{class:"v5hd-load"},el("span",{class:"sp"}),msg||t(B("হাদিস লোড হচ্ছে…","Loading hadith…","Memuatkan…","جارٍ التحميل…","لوڈ ہو رہا ہے…","Inapakia…"))));}
  function hfail(box,retry){box.innerHTML="";box.appendChild(el("div",{class:"v5hd-load"},t(B("লোড করা যায়নি — ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করো।","Could not load — check your connection and try again.","Gagal memuat.","تعذر التحميل.","لوڈ نہیں ہوا۔","Imeshindwa kupakia.")),el("button",{class:"v4btn",type:"button",onclick:retry},t(B("আবার চেষ্টা","Retry","Cuba lagi","إعادة","دوبارہ","Jaribu tena")))));}
  function hsecView(r,bk){var c=secInfo(bk[0],hs.sec);if(!c){hs.view="ch";hdraw();return;}
    var all=HSEC[bk[0]],ix=all.indexOf(c);
    r.appendChild(el("div",{class:"v5hd-sech"},el("span",{class:"no"},num(c[0])),el("div",{style:"flex:1;min-width:0"},el("b",null,V.L==="bn"?c[1]:c[2]),el("small",null,(V.L==="bn"?c[2]+" · ":"")+t(B("হাদিস ","Hadith ","Hadis ","الأحاديث ","احادیث ","Hadithi "))+num(c[3])+"–"+num(c[4])))));
    var box=el("div",{class:"v5hd-list"});r.appendChild(box);
    function go(){hload(box);hsection(bk[0],c[0]).then(function(list){box.innerHTML="";var n=Math.min(list.length,hs.shown);
        list.slice(0,n).forEach(function(h){box.appendChild(hcard(bk,h,V.L==="bn"?c[1]:c[2]));});
        if(list.length>n)box.appendChild(el("button",{class:"v5hd-more",type:"button",onclick:function(){hs.shown+=20;go2(list);}},t(B("আরও হাদিস দেখো","Show more hadith","Lagi","المزيد","مزید","Zaidi"))+" ("+num(list.length-n)+")"));
        nav();}).catch(function(){hfail(box,go);});}
    function go2(list){box.innerHTML="";var n=Math.min(list.length,hs.shown);list.slice(0,n).forEach(function(h){box.appendChild(hcard(bk,h,V.L==="bn"?c[1]:c[2]));});
      if(list.length>n)box.appendChild(el("button",{class:"v5hd-more",type:"button",onclick:function(){hs.shown+=20;go2(list);}},t(B("আরও হাদিস দেখো","Show more hadith","Lagi","المزيد","مزید","Zaidi"))+" ("+num(list.length-n)+")"));nav();}
    function nav(){var w=el("div",{class:"v5hd-nav"});
      if(ix>0)w.appendChild(el("button",{type:"button",onclick:function(){hs.sec=all[ix-1][0];hs.shown=20;hdraw();window.scrollTo({top:0});}},"‹ "+(V.L==="bn"?all[ix-1][1]:all[ix-1][2])));else w.appendChild(el("span"));
      if(ix<all.length-1)w.appendChild(el("button",{type:"button",onclick:function(){hs.sec=all[ix+1][0];hs.shown=20;hdraw();window.scrollTo({top:0});}},(V.L==="bn"?all[ix+1][1]:all[ix+1][2])+" ›"));
      box.appendChild(w);}
    go();}
  function hbmView(r){var box=el("div",{class:"v5hd-list"});r.appendChild(box);var keys=hbm().slice().reverse();
    if(!keys.length){box.appendChild(el("p",{class:"v5hd-load"},t(B("এখনো কোনো বুকমার্ক নেই। হাদিসের পাশে বুকমার্ক চিহ্ন চাপো।","No bookmarks yet. Tap the bookmark on any hadith.","Tiada penanda lagi.","لا توجد محفوظات.","ابھی کوئی بک مارک نہیں۔","Hakuna alamisho bado."))));return;}
    hload(box);
    Promise.all(keys.map(function(k){var p=k.split(":"),bk=bookByKey(p[0]);if(!bk)return Promise.resolve(null);return hone(p[0],+p[1]).then(function(h){return {bk:bk,h:h};}).catch(function(){return null;});}))
      .then(function(arr){box.innerHTML="";arr.forEach(function(x){if(!x)return;var s=x.h.sec!=null?secInfo(x.bk[0],x.h.sec):secOfNum(x.bk[0],x.h.n);box.appendChild(hcard(x.bk,x.h,s?(V.L==="bn"?s[1]:s[2]):""));});
        if(!box.children.length)hfail(box,function(){hdraw();});});}
  function hsearch(){var sel=el("select",{class:"v5in"});HBOOKS.forEach(function(b,i){var o=el("option",{value:String(i)},t(b[2]));if(i===hs.b)o.selected=true;sel.appendChild(o);});
    var n=el("input",{class:"v5in",type:"number",min:"1",inputmode:"numeric",placeholder:t(B("হাদিস নম্বর (যেমন ৫০২৭)","Hadith number (e.g. 5027)","Nombor hadis","رقم الحديث","حدیث نمبر","Nambari ya hadithi"))});
    var out=el("div");
    var go=el("button",{class:"v4btn",type:"button",style:"width:100%;justify-content:center"},t(B("খোঁজো","Find","Cari","ابحث","تلاش","Tafuta")));
    var sh=V.sheet(t(B("হাদিস খোঁজো","Find a hadith","Cari hadis","ابحث عن حديث","حدیث تلاش کریں","Tafuta hadithi")),el("div",{style:"display:grid;gap:10px"},el("label",{class:"v5lab"},t(B("কিতাব","Book","Kitab","الكتاب","کتاب","Kitabu")),sel),el("label",{class:"v5lab"},t(B("নম্বর","Number","Nombor","الرقم","نمبر","Nambari")),n),go,out));
    go.onclick=function(){var b=HBOOKS[+sel.value],k=parseInt(n.value,10);if(!k){n.focus();return;}hload(out);
      hone(b[0],k).then(function(h){if(!h.ar&&!h.tr)throw 0;out.innerHTML="";var s=h.sec!=null?secInfo(b[0],h.sec):secOfNum(b[0],k);out.appendChild(hcard(b,h,s?(V.L==="bn"?s[1]:s[2]):""));
        if(s)out.appendChild(el("button",{class:"v4btn ghost",type:"button",style:"width:100%;justify-content:center;margin-top:8px",onclick:function(){sh.close();hs.b=+sel.value;hs.view="sec";hs.sec=s[0];hs.shown=200;hdraw();}},t(B("পুরো অধ্যায় খোলো","Open the whole chapter","Buka bab","افتح الكتاب","پورا باب کھولیں","Fungua mlango"))));})
      .catch(function(){out.innerHTML="";out.appendChild(el("p",{class:"v4muted"},t(B("এই নম্বরের হাদিস পাওয়া যায়নি।","No hadith found with that number.","Tidak dijumpai.","لم يُعثر عليه.","نہیں ملی۔","Haikupatikana."))));});};
    n.onkeydown=function(e){if(e.key==="Enter")go.click();};}
  // =====================================================================
  // VIDEOS · YouTube style (in-app privacy-enhanced player, prayer-time picks, categories, pull to refresh)
  // =====================================================================
  var VC={trend:[B("ট্রেন্ডিং","Trending","Trending","الأكثر رواجًا","ٹرینڈنگ","Zinazovuma"),"#5A1E22"],
    history:[B("ইসলামিক ইতিহাস","Islamic history","Sejarah Islam","التاريخ الإسلامي","اسلامی تاریخ","Historia ya Kiislamu"),"#3A2A16"],
    life:[B("লাইফস্টাইল","Lifestyle","Gaya hidup","أسلوب الحياة","طرزِ زندگی","Mtindo wa maisha"),"#1F3D2F"],
    edu:[B("শিক্ষা","Learning","Pendidikan","تعليم","تعلیم","Elimu"),"#1C3550"],
    dawah:[B("দাওয়াহ","Dawah","Dakwah","دعوة","دعوت","Daawa"),"#2E2440"],
    tilawat:[B("তিলাওয়াত","Recitation","Tilawah","تلاوة","تلاوت","Kisomo"),"#2A2312"]};
  // [youtubeId, title, channel, category, duration]
  var VL=[
    ["k1gWUIjFes8","জীবনে বারাকাহ লাভের উপায়","Mizanur Rahman Azhari","trend","১:০৭:১৫"],
    ["XLIj06_aZGs","When You Hit Your Lowest Point · Khutbah","Yaqeen Institute · Omar Suleiman","trend","১৮:২৮"],
    ["x5SH22rCjZQ","How to be happy in this life","Mufti Menk","trend","৪:২৬"],
    ["VOUp3ZZ9t3A","Seerah of Prophet Muhammad ﷺ · Part 1","Yasir Qadhi","history","৪৫:৩১"],
    ["GGotnIfQaQg","Lessons from the Golden Era of Andalusia","Al Jazeera English","history","৪৩:৪০"],
    ["Fex0MzwK2cg","ইসলামী খিলাফতের ইতিহাস (৬৩২–১৯২৪)","History TV Bangla","history","৩১:৩৩"],
    ["f9c4Y7Vf7G0","The History of the Ottoman Empire","Knowledgia","history","১:৩০:৪৩"],
    ["TiEjshtVm1o","The Morning Routine of the Prophet ﷺ","One Message Foundation","life","৪৪:২১"],
    ["XLTJoood6p0","ঘরের ১৫টি সুন্নত","10 Minute Madrasah","life","৮:০২"],
    ["NBPBSLr5j5E","Reflection & Self Improvement","Mufti Menk","life","৩৬:৪১"],
    ["2ZEmsdEOpbk","How to Pray Salah · Step by Step","Majed Mahmoud","edu","২১:৩২"],
    ["P29LMOHhpjE","How to Make Wudu · Step by Step","Majed Mahmoud","edu","১৩:০২"],
    ["FJe03w1cbkI","প্র্যাকটিক্যাল নামাজ পড়ার সঠিক নিয়ম","Shaikh Ahmadullah · Quranic Life","edu","৪৭:৪৯"],
    ["WczrvJ29HJQ","সূরা আদ-দুহা-এর তাফসির","Mizanur Rahman Azhari","edu","৫৫:২৪"],
    ["-S7qjNpWrxI","Prophet Muhammad ﷺ — A Perfect Role Model","Mizanur Rahman Azhari","dawah","১:০১:৫০"],
    ["3iiICUN5mfU","A revert shares how he found Islam","EFDawah","dawah","১৪:২৪"],
    ["9M-T0pFPPr4","From depression to Islam · a revert story","Towards Eternity","dawah","২৬:৩০"]];
  // after-prayer recitations (slot) and every-prayer amal
  var VR={fajr:[["ZdsddmOvu5E","সূরা ইয়াসিন · পূর্ণ তিলাওয়াত","Mishary Alafasy"],["z-W_NfyAP3Q","Surah Yasin (full)","Mishary Rashid Al Afasy"]],
    dhuhr:[["eK5yTIzEPIU","সূরা আল-ফাতহ · পূর্ণ তিলাওয়াত","Quran Recitation"],["W_Qs8nqHOwo","Surah Al-Fath","Sheikh Shuraim"]],
    asr:[["T-JOl5J1i3E","সূরা আন-নাবা · পূর্ণ তিলাওয়াত","Mishary Al Afasy"],["PS0D4ZHxUEo","Surah An-Naba","Mishari Rashid Alafasy"]],
    maghrib:[["N78PGdl2-Wo","সূরা আল-ওয়াকিয়া · পূর্ণ তিলাওয়াত","Sheikh Shuraim"],["lp3_OTORriM","Surah Al-Waqiah with translation","Islamic Education Corner"]],
    isha:[["J7SQIhY7_WE","সূরা আল-মুলক · পূর্ণ তিলাওয়াত","Mishary Alafasy"],["njwCuegxxU4","Surah Al-Mulk (English)","Inspiriting Reminders"]]};
  var VE=[["fE2STDB8j-w","আয়াতুল কুরসি · অর্থসহ","Mishary Rashid Alafasy"],["2elvyy2efC4","৪ কুল: কাফিরুন, ইখলাস, ফালাক, নাস","Quran Recitation with Nazim"],["Qz41auzaPFk","সূরা হাশরের শেষ ৩ আয়াত","Muslims Education"],["k6OeZUYOI_Q","আল-ফাতিহা · আয়াতুল কুরসি · ৪ কুল","Omar Hisham Al Arabi"]];
  var PNM={fajr:B("ফজরের পর","After Fajr","Selepas Subuh","بعد الفجر","فجر کے بعد","Baada ya Alfajiri"),dhuhr:B("যোহরের পর","After Dhuhr","Selepas Zohor","بعد الظهر","ظہر کے بعد","Baada ya Adhuhuri"),asr:B("আসরের পর","After Asr","Selepas Asar","بعد العصر","عصر کے بعد","Baada ya Alasiri"),maghrib:B("মাগরিবের পর","After Maghrib","Selepas Maghrib","بعد المغرب","مغرب کے بعد","Baada ya Magharibi"),isha:B("এশার পর","After Isha","Selepas Isyak","بعد العشاء","عشاء کے بعد","Baada ya Isha")};
  var vs={cat:"all",cur:null,seed:Math.random(),playing:false};
  function vslot(){var p="fajr";try{if(V.currentPrayer)p=V.currentPrayer()||"fajr";}catch(e){}return VR[p]?p:"fajr";}
  function vhist(){var v=V.V();v.vh=v.vh||{};return v.vh;}
  // fresh videos: videos.json is rebuilt every few hours from trusted channels (GitHub Action)
  var DYN=[],dynAt=0,dynLoading=null;
  function vload(force,root){if(dynLoading&&!force)return dynLoading;
    dynLoading=fetch("videos.json?t="+(force?Date.now():Math.floor(Date.now()/36e5)),{cache:force?"reload":"default"}).then(function(r){return r.ok?r.json():null;}).then(function(d){
      if(d&&d.items){DYN=d.items.filter(function(x){return x&&x.id&&VC[x.cat];}).map(function(x){return [x.id,x.t,x.ch,x.cat,"",x.pub||""];});dynAt=Date.now();if(root&&root.isConnected)vrender(root,root._opts);}
      return DYN;}).catch(function(){return DYN;});return dynLoading;}
  function isNew(v){var d=v[5]&&Date.parse(v[5]);return d&&Date.now()-d<3*864e5;}
  function vshuffle(list){var h=vhist();return list.map(function(x,i){var r=((Math.sin((i+1)*9301+vs.seed*49297)+1)/2)*3;var d=x[5]&&Date.parse(x[5]);var fresh=d?Math.max(0,3-(Date.now()-d)/864e5):0;return {x:x,s:r+fresh-(h[x[0]]||0)*1.5};}).sort(function(a,b){return b.s-a.s;}).map(function(o){return o.x;});}
  function vrefresh(root){vs.seed=Math.random();vload(true,root).then(function(){vrender(root,root._opts);V.toast(t(B("নতুন ভিডিও সাজানো হলো","Fresh videos loaded","Video baharu dimuatkan","تم تحميل فيديوهات جديدة","نئی ویڈیوز آ گئیں","Video mpya zimepakiwa")));});}
  function vplay(item,root){var h=vhist();h[item[0]]=(h[item[0]]||0)+1;V.save();vs.cur=item;vs.playing=true;vrender(root,root._opts);try{root.scrollIntoView({behavior:"smooth",block:"start"});}catch(e){}}
  function vthumb(id,cls){var im=el("img",{src:"https://i.ytimg.com/vi/"+id+"/mqdefault.jpg",alt:"",loading:"lazy",class:cls||""});return im;}
  function vrender(root,opts){root._opts=opts||root._opts||{};opts=root._opts;root.innerHTML="";root.classList.add("v5yt");if(!dynAt)vload(false,root);
    var slot=vslot();var recs=VR[slot].map(function(x){return [x[0],x[1],x[2],"tilawat","",t(PNM[slot]),true];}).concat(VE.map(function(x){return [x[0],x[1],x[2],"tilawat","",t(B("প্রতি নামাজের পর","After every prayer","Selepas setiap solat","بعد كل صلاة","ہر نماز کے بعد","Baada ya kila swala")),false];}));
    var list=vshuffle(DYN.concat(VL));if(!vs.cur)vs.cur=recs[0];
    var cur=vs.cur;
    var hd=el("header",{class:"v5yt-hd"},
      el("span",{class:"logo"},V.sv("svg",{width:28,height:20,viewBox:"0 0 28 20","aria-hidden":"true"},V.sv("rect",{width:28,height:20,rx:6,fill:"#E3242B"}),V.sv("path",{d:"M11.5 6v8l6.5-4z",fill:"#fff"})),"Amalnama "+t(B("ভিডিও","Videos","Video","فيديو","ویڈیو","Video"))),
      el("button",{type:"button","aria-label":t(B("নতুন ভিডিও","Refresh","Muat semula","تحديث","ریفریش","Onyesha upya")),onclick:function(){vrefresh(root);}},ic("refresh",21)),
      el("button",{type:"button","aria-label":t(B("খোঁজো","Search","Cari","بحث","تلاش","Tafuta")),onclick:function(){vsearch(root,list.concat(recs));}},V.icon([["M11 17.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM20 20l-4-4"]],22)),
      (opts.extra||[]).map(function(f){return f();}));
    root.appendChild(hd);
    var pl=el("div",{class:"v5yt-player"});
    if(vs.playing){pl.appendChild(el("iframe",{src:"https://www.youtube-nocookie.com/embed/"+cur[0]+"?autoplay=1&rel=0&modestbranding=1&playsinline=1",title:cur[1],allow:"autoplay; encrypted-media; picture-in-picture; fullscreen",allowfullscreen:true,referrerpolicy:"strict-origin-when-cross-origin"}));}
    else{pl.appendChild(vthumb(cur[0],"bg"));pl.appendChild(el("button",{class:"big",type:"button","aria-label":t(B("চালাও","Play","Main","تشغيل","چلائیں","Cheza")),onclick:function(){vs.playing=true;vrender(root);}},V.icon([["M8 5.5v13l11-6.5z","1"]],26)));
      pl.appendChild(el("span",{class:"note"},t(B("অ্যাপের ভেতরেই চলবে","Plays inside the app","Dimainkan dalam aplikasi","يُعرض داخل التطبيق","ایپ کے اندر چلے گی","Inachezwa ndani ya programu"))));}
    root.appendChild(pl);
    root.appendChild(el("div",{class:"v5yt-now"},el("b",null,cur[1]),el("small",null,cur[2]+" · "+t((VC[cur[3]]||VC.tilawat)[0]))));
    root.appendChild(el("div",{class:"v5yt-sec"},el("b",null,t(B("এখন তোমার জন্য","Now for you","Untuk anda sekarang","الآن لك","ابھی آپ کے لیے","Sasa kwako"))),el("small",null,t(B("নামাজের সময় অনুযায়ী বাছাই","Picked by prayer time","Ikut waktu solat","حسب وقت الصلاة","نماز کے وقت کے مطابق","Kwa wakati wa swala")))));
    var rc=el("div",{class:"v5yt-recs"});
    recs.forEach(function(v){rc.appendChild(el("button",{type:"button",class:v[6]?"hot":"",onclick:function(){vplay(v,root);}},el("span",{class:"th"},vthumb(v[0]),el("span",{class:"tag"},v[5])),el("span",{class:"tt"},v[1])));});
    root.appendChild(rc);
    var chips=el("div",{class:"v5yt-chips",role:"tablist"});
    [["all",B("সব","All","Semua","الكل","سب","Zote")]].concat(Object.keys(VC).filter(function(k){return k!=="tilawat";}).map(function(k){return [k,VC[k][0]];})).forEach(function(c){
      chips.appendChild(el("button",{type:"button",role:"tab","aria-selected":String(vs.cat===c[0]),onclick:function(){vs.cat=c[0];vrender(root);}},t(c[1])));});
    root.appendChild(chips);
    var lst=el("div",{class:"v5yt-list"});
    list.filter(function(v){return vs.cat==="all"||v[3]===vs.cat;}).forEach(function(v){if(v[0]===cur[0])return;
      lst.appendChild(el("button",{type:"button",onclick:function(){vplay(v,root);}},el("span",{class:"th"},vthumb(v[0]),v[4]?el("span",{class:"dur"},V.L==="bn"?v[4]:v[4].replace(/[০-৯]/g,function(d){return "০১২৩৪৫৬৭৮৯".indexOf(d);})):null),
        el("span",{class:"tt"},el("b",null,v[1]),el("small",null,v[2]),el("small",null,t(VC[v[3]][0])+(v[5]?" · "+vago(v[5]):""),isNew(v)?el("i",{class:"nw"},t(B("নতুন","New","Baharu","جديد","نیا","Mpya"))):null))));});
    root.appendChild(lst);
    root.appendChild(el("p",{class:"v5yt-foot"},t(B("নিচে টেনে রিফ্রেশ করলে নতুন ভিডিও আসবে","Pull down to refresh for new videos","Tarik ke bawah untuk muat semula","اسحب للأسفل للتحديث","نئی ویڈیوز کے لیے نیچے کھینچیں","Vuta chini kuonyesha upya"))));
    vpull(root);}
  function vsearch(root,all){var inp=el("input",{class:"v5in",type:"search",placeholder:t(B("ভিডিও খুঁজো…","Search videos…","Cari video…","ابحث…","تلاش…","Tafuta…"))});var out=el("div",{class:"v5yt-sr"});
    var sh=V.sheet(t(B("ভিডিও খোঁজো","Search videos","Cari video","ابحث عن فيديو","ویڈیو تلاش","Tafuta video")),el("div",null,inp,out));
    function d(){var q=inp.value.trim().toLowerCase();out.innerHTML="";all.filter(function(v){return !q||(v[1]+" "+v[2]).toLowerCase().indexOf(q)>=0;}).slice(0,20).forEach(function(v){
      out.appendChild(el("button",{type:"button",onclick:function(){sh.close();vplay(v,root);}},vthumb(v[0]),el("span",null,el("b",null,v[1]),el("small",null,v[2]))));});}
    inp.oninput=d;d();}
  function vpull(root){if(root._pull)return;root._pull=1;var y0=null,dy=0,ind=null;
    root.addEventListener("touchstart",function(e){if(window.scrollY>2){y0=null;return;}y0=e.touches[0].clientY;dy=0;},{passive:true});
    root.addEventListener("touchmove",function(e){if(y0==null)return;dy=e.touches[0].clientY-y0;if(dy>10){if(!ind){ind=el("div",{class:"v5yt-pull"},ic("refresh",20));root.insertBefore(ind,root.firstChild);}ind.style.height=Math.min(60,dy/2)+"px";ind.style.opacity=Math.min(1,dy/120);}},{passive:true});
    root.addEventListener("touchend",function(){if(y0==null)return;var go=dy>110;y0=null;if(ind){ind.remove();ind=null;}if(go)vrefresh(root);});}
  function vago(p){var d=Date.parse(p);if(!d)return "";var h=Math.floor((Date.now()-d)/36e5);if(h<1)return t(B("এইমাত্র","just now","baru","الآن","ابھی","sasa hivi"));if(h<24)return num(h)+t(B(" ঘণ্টা আগে","h ago"," jam lalu"," س"," گھنٹے پہلے"," saa"));return num(Math.floor(h/24))+t(B(" দিন আগে","d ago"," hari lalu"," يوم"," دن پہلے"," siku"));}
  window.V5=window.V5||{};V5.videos=function(root,opts){vrender(root,opts);};
  V.section("videos",{open:function(r){r.innerHTML="";var w=el("div",{class:"v5bleed"});r.appendChild(w);
    w.appendChild(el("button",{class:"v5yt-back",type:"button","aria-label":t(B("ফিরে যাও","Back","Kembali","رجوع","واپس","Rudi")),onclick:function(){window.setView("more");}},ic("back",20)));
    var box=el("div");w.appendChild(box);vrender(box);}});
  // =====================================================================
  // MASAIL BOOKS · read inside the app (Internet Archive reader), editions per language
  // =====================================================================
  var LN={bn:"বাংলা",en:"English",ms:"Melayu/Indonesia",ar:"العربية",ur:"اردو",sw:"Kiswahili",hi:"हिन्दी"};
  // [language, archive.org identifier, note]
  var EDS=[
    [["bn","BehestiZewareFull"],["ur","BahishtiZewarByShaykhAshrafAliThanvir.a"],["en","BahishtiZewar_201307"]],
    [["ur","fatawaalamgiriurduvolume1","১/Vol 1"],["ur","fatawaalamgiriurduvolume2","২/Vol 2"],["ar","in.ernet.dli.2015.289015"],["hi","fatawa-alamgiri-vol-3-with-cover-page-compressed","Vol 3"]],
    [["bn","20200723_20200723_1444","১/Vol 1"],["bn","20200723_20200723_1445","২/Vol 2"],["bn","20200723_20200723_1701","৩/Vol 3"],["bn","20200723_20200723_1458","৪/Vol 4"],["en","riyad-us-saliheen-pdf"],["ar","RIYADASSALIHIN_201610"],["ur","riaz-us-saliheen-jild-1"],["ms","riyadhus-shalihin-buku-2-imam-nawawi"]],
    [["bn","20260721_20260721_0411","১/Vol 1"],["bn","quran-and-sahih-hadith-islamic-book-bangla-islamic-book"],["en","fiqh-us-sunnah-five-volumes"],["ms","Fiqih_Sunnah_Ebook_130"]],
    [["en","SimpleFiqhTranslationOfAl-fiqhUlMuyassar"],["ur","al-fiqh-ul-muyassar-urdu"],["ar","AlFiqhUlMuyassar_201701"]],
    [["bn","AsrafulHedyaBookAndSorheMuktasarulKoduri"],["ar","Mukhtasar-Al-Quduri"],["en","the-mukhtasar-al-quduri-imam-abul-husayn-ahmad-ibn-x-muh-1"],["ur","anwaar-ul-quduri-urdu-sharh-al-quduri-3volumes"]]];
  var BT=[B("বেহেশতি জেওর","Bahishti Zewar","Bahishti Zewar","بهشتي زيور","بہشتی زیور","Bahishti Zewar"),B("ফাতাওয়ায়ে আলমগীরী","Fatawa Alamgiri","Fatawa Alamgiri","الفتاوى الهندية","فتاویٰ عالمگیری","Fatawa Alamgiri"),
    B("রিয়াদুস সালেহীন","Riyad as-Salihin","Riyadus Salihin","رياض الصالحين","ریاض الصالحین","Riyadh as-Salihin"),B("ফিকহুস সুন্নাহ","Fiqh us-Sunnah","Fiqh as-Sunnah","فقه السنة","فقہ السنہ","Fiqh us-Sunnah"),
    B("আল-ফিকহুল মুয়াস্সার","Al-Fiqh al-Muyassar","Al-Fiqh al-Muyassar","الفقه الميسر","الفقہ المیسر","Al-Fiqh al-Muyassar"),B("মুখতাসারুল কুদূরী","Mukhtasar al-Quduri","Mukhtasar al-Quduri","مختصر القدوري","مختصر القدوری","Mukhtasar al-Quduri")];
  var BQ=["bahishti zewar OR behishti zewar OR behesti zeware","fatawa alamgiri OR fatawa hindiyya","riyad salihin OR riyadus saleheen OR riyadhus shalihin","fiqh us sunnah OR fiqih sunnah","fiqh muyassar","quduri"];
  window.V5=window.V5||{};
  V5.openBook=function(i){var eds=EDS[i]||[];var pref=eds.filter(function(e){return e[0]===V.L;})[0]||eds.filter(function(e){return e[0]==="en";})[0]||eds[0];
    var ov=el("div",{class:"v5rd",role:"dialog","aria-modal":"true","aria-label":t(BT[i])});
    var frame=el("div",{class:"fr"});
    function open(id){frame.innerHTML="";frame.appendChild(el("div",{class:"ld"},el("span",{class:"sp"}),t(B("বই খুলছে…","Opening the book…","Membuka buku…","جارٍ فتح الكتاب…","کتاب کھل رہی ہے…","Kitabu kinafunguka…"))));
      var f=el("iframe",{src:"https://archive.org/embed/"+encodeURIComponent(id),title:t(BT[i]),allow:"fullscreen",allowfullscreen:true,referrerpolicy:"no-referrer-when-downgrade"});
      f.onload=function(){var l=frame.querySelector(".ld");if(l)l.remove();};frame.appendChild(f);
      chips.querySelectorAll("button").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.id===id));});}
    var chips=el("div",{class:"ch",role:"tablist"});
    eds.forEach(function(e){chips.appendChild(el("button",{type:"button","data-id":e[1],onclick:function(){open(e[1]);}},(LN[e[0]]||e[0])+(e[2]?" · "+e[2]:"")));});
    chips.appendChild(el("button",{type:"button",class:"more",onclick:function(){more();}},"+ "+t(B("আরও সংস্করণ","More editions","Edisi lain","طبعات أخرى","مزید ایڈیشن","Matoleo zaidi"))));
    function close(){ov.remove();document.body.style.overflow="";document.removeEventListener("keydown",esc);}
    function esc(e){if(e.key==="Escape")close();}
    ov.appendChild(el("div",{class:"hd"},el("button",{type:"button",class:"v5sq","aria-label":t(B("বন্ধ করো","Close","Tutup","إغلاق","بند کریں","Funga")),onclick:close},ic("back",20)),
      el("div",{style:"flex:1;min-width:0"},el("b",null,t(BT[i])),el("small",null,t(B("অ্যাপের ভেতরেই পড়ো · Internet Archive","Read inside the app · Internet Archive","Baca dalam aplikasi","اقرأ داخل التطبيق","ایپ کے اندر پڑھیں","Soma ndani ya programu"))))));
    ov.appendChild(chips);ov.appendChild(frame);
    document.body.appendChild(ov);document.body.style.overflow="hidden";document.addEventListener("keydown",esc);
    function more(){frame.innerHTML="";var list=el("div",{class:"ml"});frame.appendChild(list);list.appendChild(el("div",{class:"ld"},el("span",{class:"sp"})));
      var u="https://archive.org/advancedsearch.php?q="+encodeURIComponent("title:("+BQ[i]+") AND mediatype:texts")+"&fl[]=identifier&fl[]=title&fl[]=language&sort[]=downloads+desc&rows=30&output=json";
      fetch(u).then(function(r){return r.json();}).then(function(d){list.innerHTML="";(d.response&&d.response.docs||[]).forEach(function(x){
          list.appendChild(el("button",{type:"button",onclick:function(){open(x.identifier);}},ic("book",20),el("span",null,el("b",null,String(x.title||x.identifier)),el("small",null,[].concat(x.language||[]).join(", ")))));});
        if(!list.children.length)list.appendChild(el("p",{class:"v4muted"},"—"));})
      .catch(function(){list.innerHTML="";list.appendChild(el("p",{class:"v4muted"},t(B("ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করো।","Check your connection and try again.","Semak sambungan.","تحقق من الاتصال.","کنکشن دیکھیں۔","Angalia muunganisho."))));});}
    if(pref)open(pref[1]);else more();};
  // =====================================================================
  // TODAY · next-prayer dashboard
  // =====================================================================
  var PR=["fajr","dhuhr","asr","maghrib","isha"];
  var PRN={fajr:B("ফজর","Fajr","Subuh","الفجر","فجر","Alfajiri"),dhuhr:B("যোহর","Dhuhr","Zohor","الظهر","ظہر","Adhuhuri"),asr:B("আসর","Asr","Asar","العصر","عصر","Alasiri"),maghrib:B("মাগরিব","Maghrib","Maghrib","المغرب","مغرب","Magharibi"),isha:B("এশা","Isha","Isyak","العشاء","عشاء","Isha")};
  function tmin(hm){var m=/^(\d{1,2}):(\d{2})/.exec(hm||"");return m?(+m[1])*60+(+m[2]):null;}
  function fmt12(m){var h=Math.floor(m/60)%24,mm=m%60,ap=h<12?"AM":"PM";h=h%12||12;return num(h+":"+String(mm).padStart(2,"0"))+" "+ap;}
  function nextInfo(){var X=window.AMX;if(!X||!X.azanTimes)return null;var tm=X.azanTimes()||{},n=X.nowMin?X.nowMin():null;if(n==null){var d=new Date();n=d.getHours()*60+d.getMinutes();}
    var list=PR.map(function(p){return {p:p,m:tmin(tm[p])};}).filter(function(x){return x.m!=null;});if(!list.length)return null;
    var nx=list.filter(function(x){return x.m>n;})[0],tomorrow=false;if(!nx){nx=list[0];tomorrow=true;}
    var left=Math.round((tomorrow?nx.m+1440:nx.m)-n);var cur=list.filter(function(x){return x.m<=n;}).pop();return {list:list,nx:nx,left:left,cur:cur&&cur.p};}
  var npEl=null;
  function npDraw(){var info=nextInfo();if(!npEl)return;npEl.innerHTML="";
    if(!info){npEl.appendChild(el("div",{class:"np-top"},el("small",null,t(B("নামাজের সময়","Prayer times","Waktu solat","مواقيت الصلاة","نماز کے اوقات","Nyakati za swala"))),el("b",null,t(B("শহর দিয়ে সময় সেট করো ›","Set your city for times ›","Tetapkan bandar ›","حدد مدينتك ›","شہر سیٹ کریں ›","Weka mji wako ›")))));return;}
    var h=Math.floor(info.left/60),m=info.left%60;
    npEl.appendChild(el("div",{class:"np-top"},el("small",null,t(B("পরবর্তী নামাজ","Next prayer","Solat seterusnya","الصلاة القادمة","اگلی نماز","Swala ijayo"))),
      el("b",null,t(PRN[info.nx.p])+" · "+fmt12(info.nx.m)),el("span",{class:"left"},t(B("বাকি ","in ","dalam ","بعد ","باقی ","baada ya "))+num(h)+"h "+num(m)+"m")));
    var row=el("div",{class:"np-row"});info.list.forEach(function(x){row.appendChild(el("span",{class:"np-p"+(x.p===info.nx.p?" nx":x.p===info.cur?" cur":"")},el("small",null,t(PRN[x.p])),el("b",null,fmt12(x.m).replace(/ (AM|PM)$/,"")),el("i",null,x.m<720?"AM":"PM")));});
    npEl.appendChild(row);}
  function npMount(){var hero=document.querySelector(".duo")||document.querySelector("header.hero");if(!hero)return;
    if(!npEl){npEl=el("button",{type:"button",class:"v5np","aria-label":t(B("আযান ও নামাজের সময় খোলো","Open azan & prayer times","Buka azan","افتح الأذان","اذان کھولیں","Fungua adhana")),onclick:function(){window.setView("azan");}});}
    if(!npEl.isConnected)hero.insertAdjacentElement("afterend",npEl);npDraw();}
  setInterval(function(){if(npEl&&npEl.isConnected)npDraw();},30000);
  setTimeout(npMount,600);

  // =====================================================================
  // SETTINGS + BACKUP as their own screens (they were hidden inside Today before)
  // =====================================================================
  function adopt(sec,node,title,sub){sec.innerHTML="";sec.appendChild(V.head(title,sub,"more"));if(node){node.classList.add("v4open");sec.appendChild(node);}}
  V.section("settings",{open:function(r){adopt(r,document.getElementById("settings"),t(B("সেটিংস","Settings","Tetapan","الإعدادات","ترتیبات","Mipangilio")),t(B("নাম, শহর, টাইমজোন, রিমাইন্ডার","Name, city, timezone, reminders","Nama, bandar, zon masa","الاسم، المدينة، المنطقة الزمنية","نام، شہر، ٹائم زون","Jina, mji, saa")));}});
  V.section("backup",{open:function(r){adopt(r,document.querySelector(".backup:not(#settings)"),t(B("ব্যাকআপ ও রিস্টোর","Backup & restore","Sandaran & pulih","النسخ الاحتياطي","بیک اپ","Hifadhi nakala")),t(B("ফাইলে সেভ বা ফিরিয়ে আনো","Save to a file or bring it back","Simpan ke fail","حفظ في ملف","فائل میں محفوظ","Hifadhi kwenye faili")));}});

  // =====================================================================
  // SHARE WITH FRIENDS · premium brochure PDF (QR + link + features)
  // =====================================================================
  var APPURL="https://uowyeasin-cyber.github.io/AmalnamaForever/";
  V5.share=function(){var box=el("div",{class:"v5share"},
      el("div",{class:"pv"},el("img",{src:"icon-192.png",alt:""}),el("div",null,el("b",null,"Amalnama"),el("small",null,t(B("ফ্রি · বিজ্ঞাপন নেই · ৬ ভাষা","Free · no ads · 6 languages","Percuma · tiada iklan · 6 bahasa","مجاني · بلا إعلانات · ٦ لغات","مفت · اشتہار نہیں · ٦ زبانیں","Bure · bila matangazo · lugha 6"))))),
      el("a",{class:"v4btn gold",href:"Amalnama-Brochure.pdf",download:"Amalnama-Brochure.pdf",style:"justify-content:center;text-decoration:none"},ic("install",18),t(B("ব্রোশিওর PDF ডাউনলোড","Download brochure PDF","Muat turun brosur PDF","تنزيل الكتيب PDF","بروشر PDF ڈاؤن لوڈ","Pakua brosha PDF"))),
      el("button",{class:"v4btn",type:"button",style:"justify-content:center",onclick:function(){var txt=t(B("Amalnama — নামাজ, কুরআন, হাদিস, হিসাব আর ইসলামিক মিডিয়া এক অ্যাপে। ফ্রি, বিজ্ঞাপন নেই:","Amalnama — prayer, Quran, hadith, finance and Islamic media in one app. Free, no ads:","Amalnama — solat, Al-Quran, hadis dan kewangan dalam satu aplikasi. Percuma:","عملنامه — الصلاة والقرآن والحديث في تطبيق واحد. مجاني:","عملنامہ — نماز، قرآن، حدیث ایک ایپ میں۔ مفت:","Amalnama — swala, Qur'ani na hadithi katika programu moja. Bure:"));
        fetch("Amalnama-Brochure.pdf").then(function(r){return r.blob();}).then(function(bl){var f=new File([bl],"Amalnama-Brochure.pdf",{type:"application/pdf"});
          if(navigator.canShare&&navigator.canShare({files:[f]}))return navigator.share({files:[f],title:"Amalnama",text:txt+" "+APPURL});
          if(navigator.share)return navigator.share({title:"Amalnama",text:txt,url:APPURL});throw 0;})
        .catch(function(e){if(e&&e.name==="AbortError")return;try{navigator.clipboard.writeText(txt+" "+APPURL);V.toast(t(B("লিংক কপি হয়েছে","Link copied","Pautan disalin","تم نسخ الرابط","لنک کاپی ہو گیا","Kiungo kimenakiliwa")));}catch(x){}});}},
        ic("send",18),t(B("বন্ধুদের পাঠাও (WhatsApp, Messenger…)","Send to friends (WhatsApp, Messenger…)","Hantar kepada rakan","أرسل للأصدقاء","دوستوں کو بھیجیں","Tuma kwa marafiki"))),
      el("button",{class:"v4btn",type:"button",style:"justify-content:center",onclick:function(){try{navigator.clipboard.writeText(APPURL);V.toast(t(B("লিংক কপি হয়েছে","Link copied","Pautan disalin","تم نسخ الرابط","لنک کاپی ہو گیا","Kiungo kimenakiliwa")));}catch(e){}}},APPURL.replace("https://","").replace(/\/$/,"")));
    V.sheet(t(B("বন্ধুদের সাথে শেয়ার করো","Share with friends","Kongsi dengan rakan","شارك مع الأصدقاء","دوستوں کے ساتھ شیئر کریں","Shiriki na marafiki")),box);};
  function shareItem(){var r=document.getElementById("v-more");if(!r||r.querySelector(".v5shareitem"))return;var list=r.querySelector(".v4list");if(!list)return;
    var b=el("button",{type:"button",class:"v4li v5shareitem",style:"width:100%;text-align:start;color:inherit;font:inherit;cursor:pointer",onclick:V5.share},el("span",{style:"width:42px;height:42px;border-radius:14px;display:grid;place-items:center;background:linear-gradient(135deg,#F3DC9C,#C9A24F);color:#1A1406;flex:none"},ic("send",22)),el("span",{class:"t"},el("b",null,t(B("বন্ধুদের সাথে শেয়ার করো","Share with friends","Kongsi dengan rakan","شارك مع الأصدقاء","دوستوں کے ساتھ شیئر کریں","Shiriki na marafiki"))),
      el("small",null,t(B("প্রিমিয়াম ব্রোশিওর PDF · QR কোড ও লিংক","Premium brochure PDF · QR code & link","Brosur PDF · kod QR & pautan","كتيب PDF · رمز QR ورابط","بروشر PDF · QR اور لنک","Brosha PDF · QR na kiungo")))),el("span",{class:"v4muted",style:"font-size:1.2rem"},V.RTL?"‹":"›"));
    list.insertBefore(b,list.firstChild);}

  // =====================================================================
  // FLOATING DOCK · small "live" buttons in the Mufti style, above the Mufti button
  // Today → Pomodoro · Media → Posts + Messages · Shariah → Zakat calculator
  // =====================================================================
  var curV="today",dockEl=null,pomoT=null;
  var SVGP={posts:'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><path d="M8 9h8M8 13h8M8 17h5"/></svg>',
    chat:'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.4 7.6L3.5 20.5l1.4-4.4A8.5 8.5 0 1 1 20.5 11.5z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" stroke-width="2.6"/></svg>'};
  function fab(o){var inner=el("span",{class:"in"});if(o.svg)inner.innerHTML=o.svg;else inner.appendChild(ic(o.icon,22));
    var b=el("button",{type:"button",class:"v6fab"+(o.cls?" "+o.cls:""),"aria-label":o.label,title:o.label,onclick:o.go},inner,el("span",{class:"live","aria-hidden":"true"}),el("span",{class:"lb","aria-hidden":"true"},o.label));
    if(o.id)b.id=o.id;if(o.badge)b.appendChild(el("span",{class:"dot"},num(o.badge)));return b;}
  function pomoBadge(b){clearInterval(pomoT);function d(){var s=V.pomo&&V.pomo();var x=b.querySelector(".tm");if(!s||!s.run){if(x)x.remove();b.classList.remove("on");return;}
      if(!x){x=el("span",{class:"tm"});b.appendChild(x);}b.classList.add("on");x.textContent=num(String(Math.floor(s.left/60)).padStart(2,"0")+":"+String(s.left%60).padStart(2,"0"));}
    d();pomoT=setInterval(function(){if(!b.isConnected){clearInterval(pomoT);return;}d();},1000);}
  V5.dock=function(){if(!dockEl){dockEl=el("div",{id:"v6dock"});document.body.appendChild(dockEl);}
    var list=[],v=curV;
    if(v==="today")list.push({cls:"pomo",icon:"timer",label:t(B("পোমোডোরো ফোকাস","Pomodoro focus","Fokus Pomodoro","تركيز بومودورو","پومودورو فوکس","Pomodoro")),go:function(){window.setView("pomodoro");}});
    if(v==="shariah")list.push({icon:"calc",label:t(B("যাকাত ক্যালকুলেটর","Zakat calculator","Kalkulator zakat","حاسبة الزكاة","زکوٰۃ کیلکولیٹر","Kikokotoo cha zaka")),go:function(){if(V.openZakat)V.openZakat();}});
    if(v==="comm"&&(!window.AMX||!AMX.commSub||AMX.commSub()==="videos")){
      list.push({svg:SVGP.posts,label:t(B("পোস্ট","Posts","Hantaran","المنشورات","پوسٹس","Machapisho")),go:function(){AMX.commGo("feed");}});
      list.push({svg:SVGP.chat,id:"cm-chattab",badge:window.AMX&&AMX.chatUnread?AMX.chatUnread():0,label:t(B("মেসেজ","Messages","Mesej","الرسائل","پیغامات","Ujumbe")),go:function(){AMX.commGo("chat");}});}
    var key=v+":"+list.length;if(dockEl.dataset.k===key)return;dockEl.dataset.k=key;dockEl.innerHTML="";
    list.forEach(function(o,i){var b=fab(o);b.style.animationDelay=(i*0.4)+"s";dockEl.appendChild(b);if(o.cls==="pomo")pomoBadge(b);});
    dockEl.classList.remove("hello");void dockEl.offsetWidth;if(list.length)dockEl.classList.add("hello");};
  var prev2=window.setView;
  window.setView=function(v){prev2(v);curV=v;try{if(v==="comm"&&window.AMX&&AMX.commSub&&AMX.commSub()!=="videos"&&dockEl)dockEl.dataset.k="";V5.dock();}catch(e){}};
  setTimeout(function(){try{V5.dock();}catch(e){}},700);

  // =====================================================================
  // NAVIGATION MEMORY · back button walks back through screens; a refresh reopens the same screen
  // =====================================================================
  var navPop=false,lastNav=null,SPACES=["today","amal","finance","comm","shariah","more"];
  function validView(v){return !!v&&/^[a-z]+$/.test(v)&&(SPACES.indexOf(v)>=0||!!document.getElementById("v-"+v));}
  var prev3=window.setView;
  window.setView=function(v){prev3(v);try{if(!validView(v))return;var url=location.pathname+location.search+"#"+v;
      if(!navPop&&v!==lastNav){if(lastNav===null||(history.state&&history.state.amv===v))history.replaceState({amv:v},"",url);else history.pushState({amv:v},"",url);}
      lastNav=v;sessionStorage.setItem("am-view",v);}catch(e){}};
  window.addEventListener("popstate",function(e){var st=e.state;if(!st||!st.amv||st.amv===lastNav)return;navPop=true;try{window.setView(st.amv);}catch(x){}navPop=false;});
  setTimeout(function(){try{var h=(location.hash||"").slice(1),sv=sessionStorage.getItem("am-view");var want=validView(h)?h:validView(sv)?sv:null;if(want&&want!==lastNav)window.setView(want);}catch(e){}},450);
  // replay the short "live" pulse on the floating buttons each time a screen opens
  var prev4=window.setView;window.setView=function(v){prev4(v);try{var b=document.body;b.classList.remove("v9p");void b.offsetWidth;b.classList.add("v9p");}catch(e){}};

  // =====================================================================
  // FIRST-RUN SETUP · three friendly steps instead of a long form (name → prayer times → your day)
  // =====================================================================
  function needSetup(){try{if(!window.AM_LANG_CHOSEN)return false;var st=JSON.parse(localStorage.getItem("am-settings")||"{}");if(st.setupDone)return false;
      if(typeof routine!=="undefined"&&routine&&Object.keys(routine).length)return false;return !!document.getElementById("setupform");}catch(e){return false;}}
  function wizard(){if(document.getElementById("v9wiz"))return;var ov=el("div",{id:"v9wiz",role:"dialog","aria-modal":"true","data-noi18n":""});document.body.appendChild(ov);document.body.style.overflow="hidden";
    var S={name:"",uni:"",dept:"",city:"",country:"",times:null,label:"",quran:true,study:true,sleep:true,plan:true,remind:true};
    try{var old=JSON.parse(localStorage.getItem("am-settings")||"{}");S.name=old.name||"";S.city=old.city||"";}catch(e){}
    var step=0;
    function dots(){var d=el("div",{class:"dots"});for(var i=0;i<3;i++)d.appendChild(el("i",{class:i===step?"on":i<step?"done":""}));return d;}
    function field(lab,inp){return el("label",{class:"fl"},el("span",null,lab),inp);}
    function inp(v,ph,max){var i=el("input",{type:"text",maxlength:String(max||60),placeholder:ph||"",value:v||""});return i;}
    function draw(){ov.innerHTML="";var card=el("div",{class:"wz"});ov.appendChild(card);
      card.appendChild(el("div",{class:"top"},el("img",{src:"icon-192.png",alt:""}),dots(),el("button",{type:"button",class:"skip",onclick:finishLater},t(B("পরে","Later","Nanti","لاحقًا","بعد میں","Baadaye")))));
      if(step===0){var n=inp(S.name,t(B("যেমন: Rahim","e.g. Rahim","cth: Rahim","مثال: رحيم","مثلاً: رحیم","mf: Rahim")),40),u=inp(S.uni,"UOWM, DU, BUET…"),dp=inp(S.dept,"CSE, BBA…");
        card.appendChild(el("h1",null,t(B("আসসালামু আলাইকুম 👋","Assalamu alaikum 👋","Assalamualaikum 👋","السلام عليكم 👋","السلام علیکم 👋","Assalamu alaikum 👋"))));
        card.appendChild(el("p",{class:"sub"},t(B("৩০ সেকেন্ডে তোমার Amalnama সাজিয়ে নাও। সব পরে বদলানো যাবে।","Set up your Amalnama in 30 seconds. You can change everything later.","Sediakan Amalnama dalam 30 saat.","جهّز عملنامه في ٣٠ ثانية.","۳۰ سیکنڈ میں Amalnama تیار کریں۔","Andaa Amalnama kwa sekunde 30."))));
        card.appendChild(field(t(B("তোমার নাম","Your name","Nama anda","اسمك","آپ کا نام","Jina lako")),n));
        var more=el("details",{class:"more"},el("summary",null,t(B("ছাত্র/ছাত্রী? বিশ্ববিদ্যালয় যোগ করো (ঐচ্ছিক)","Student? Add your university (optional)","Pelajar? Tambah universiti (pilihan)","طالب؟ أضف جامعتك (اختياري)","طالب علم؟ یونیورسٹی شامل کریں (اختیاری)","Mwanafunzi? Ongeza chuo (hiari)"))),
          field(t(B("বিশ্ববিদ্যালয় / প্রতিষ্ঠান","University / institute","Universiti","الجامعة","یونیورسٹی","Chuo")),u),field(t(B("ডিপার্টমেন্ট / প্রোগ্রাম","Department / programme","Jabatan / program","القسم","شعبہ","Idara")),dp));
        if(S.uni||S.dept)more.open=true;card.appendChild(more);
        card.appendChild(el("button",{type:"button",class:"go",onclick:function(){S.name=n.value.trim();S.uni=u.value.trim();S.dept=dp.value.trim();step=1;draw();}},t(B("এগিয়ে যাও","Continue","Teruskan","متابعة","آگے بڑھیں","Endelea"))+" →"));
        setTimeout(function(){n.focus();},200);}
      else if(step===1){card.appendChild(el("h1",null,"🕌 "+t(B("নামাজের সময়","Prayer times","Waktu solat","مواقيت الصلاة","نماز کے اوقات","Nyakati za swala"))));
        card.appendChild(el("p",{class:"sub"},t(B("তোমার এলাকার সঠিক সময়ে আযান, রিমাইন্ডার আর পরের নামাজের কাউন্টডাউন পাবে।","Get azan, reminders and a countdown at the right times for where you are.","Azan, peringatan dan kiraan detik ikut lokasi anda.","أذان وتذكيرات وعدّ تنازلي حسب موقعك.","آپ کے علاقے کے مطابق اذان اور یاد دہانی۔","Adhana na vikumbusho kwa eneo lako."))));
        var msg=el("p",{class:"msg"});var box=el("div",{class:"times"});
        function show(api){S.times=api.t;S.label=api.label||"";box.innerHTML="";[["fajr",B("ফজর","Fajr","Subuh","الفجر","فجر","Alfajiri")],["dhuhr",B("যোহর","Dhuhr","Zohor","الظهر","ظہر","Adhuhuri")],["asr",B("আসর","Asr","Asar","العصر","عصر","Alasiri")],["maghrib",B("মাগরিব","Maghrib","Maghrib","المغرب","مغرب","Magharibi")],["isha",B("এশা","Isha","Isyak","العشاء","عشاء","Isha")]].forEach(function(p){
            box.appendChild(el("div",null,el("small",null,t(p[1])),el("b",null,num(api.t[p[0]]||"—"))));});msg.textContent="✓ "+(api.label||"");msg.className="msg ok";nx.disabled=false;}
        var gps=el("button",{type:"button",class:"gps",onclick:function(){if(!navigator.geolocation){msg.textContent=t(B("এই ফোনে লোকেশন নেই — শহর লেখো","Location isn't available — type your city","Lokasi tiada — taip bandar","الموقع غير متاح — اكتب مدينتك","لوکیشن دستیاب نہیں — شہر لکھیں","Mahali hapapatikani — andika mji"));return;}
            gps.disabled=true;msg.className="msg";msg.textContent=t(B("লোকেশন খোঁজা হচ্ছে…","Finding your location…","Mencari lokasi…","جارٍ تحديد الموقع…","لوکیشن تلاش…","Inatafuta mahali…"));
            navigator.geolocation.getCurrentPosition(function(pos){var lat=+pos.coords.latitude.toFixed(4),lng=+pos.coords.longitude.toFixed(4);
              (window.AMX&&AMX.azanUse?AMX.azanUse({lat:lat,lng:lng,label:t(B("আমার লোকেশন","My location","Lokasi saya","موقعي","میری لوکیشن","Mahali pangu"))}):Promise.reject()).then(show).catch(function(){msg.textContent=t(B("সময় আনা যায়নি — ইন্টারনেট দেখো বা শহর লেখো","Couldn't get times — check the internet or type your city","Gagal — taip bandar","تعذر — اكتب المدينة","نہیں ملا — شہر لکھیں","Imeshindikana — andika mji"));}).then(function(){gps.disabled=false;});},
              function(){gps.disabled=false;msg.textContent=t(B("লোকেশনের অনুমতি পাওয়া যায়নি — নিচে শহর লেখো","Location permission was declined — type your city below","Kebenaran lokasi ditolak — taip bandar","رُفض إذن الموقع — اكتب مدينتك","اجازت نہیں ملی — شہر لکھیں","Ruhusa imekataliwa — andika mji"));},{timeout:15000,maximumAge:600000});}},
          "📍 "+t(B("আমার লোকেশন দিয়ে সময় নাও","Use my location","Guna lokasi saya","استخدم موقعي","میری لوکیشن استعمال کریں","Tumia mahali pangu")));
        card.appendChild(gps);card.appendChild(el("div",{class:"or"},t(B("অথবা","or","atau","أو","یا","au"))));
        var ci=inp(S.city,t(B("শহর — যেমন: Dhaka, Kuala Lumpur","City — e.g. Dhaka, Kuala Lumpur","Bandar — cth: Kuala Lumpur","المدينة — مثال: مكة","شہر — مثلاً: کراچی","Mji — mf: Nairobi")),40),co=inp(S.country,t(B("দেশ (ঐচ্ছিক)","Country (optional)","Negara (pilihan)","الدولة (اختياري)","ملک (اختیاری)","Nchi (hiari)")),40);
        var fb=el("button",{type:"button",class:"ghost",onclick:function(){var c=ci.value.trim();if(!c){ci.focus();return;}S.city=c;S.country=co.value.trim();fb.disabled=true;msg.className="msg";msg.textContent="…";
            (window.AMX&&AMX.azanUse?AMX.azanUse({city:c,country:S.country}):Promise.reject()).then(show).catch(function(){msg.textContent=t(B("এই শহর পাওয়া যায়নি — বানান বা দেশ দেখো","City not found — check spelling or add the country","Bandar tidak dijumpai","لم يُعثر على المدينة","شہر نہیں ملا","Mji haukupatikana"));}).then(function(){fb.disabled=false;});}},t(B("সময় আনো","Get times","Dapatkan waktu","احصل على المواقيت","اوقات لائیں","Pata nyakati")));
        card.appendChild(el("div",{class:"row2"},ci,co));card.appendChild(fb);card.appendChild(msg);card.appendChild(box);
        var nx=el("button",{type:"button",class:"go",disabled:!S.times,onclick:function(){step=2;draw();}},t(B("এগিয়ে যাও","Continue","Teruskan","متابعة","آگے بڑھیں","Endelea"))+" →");
        card.appendChild(nx);card.appendChild(el("button",{type:"button",class:"link",onclick:function(){step=2;draw();}},t(B("এখন না, পরে সেট করবো","Not now, I'll set it later","Bukan sekarang","ليس الآن","ابھی نہیں","Si sasa"))));
        if(S.times)show({t:S.times,label:S.label});}
      else{card.appendChild(el("h1",null,"✨ "+t(B("তোমার দিন","Your day","Hari anda","يومك","آپ کا دن","Siku yako"))));
        card.appendChild(el("p",{class:"sub"},t(B("কোনগুলো দিয়ে শুরু করবে? চাপ দিয়ে বেছে নাও।","What would you like to start with? Tap to choose.","Pilih untuk bermula.","اختر ما تبدأ به.","کس سے شروع کریں؟","Chagua kuanza."))));
        var opts=[["remind","🔔",B("নামাজের ১০ মিনিট আগে মনে করিয়ে দাও","Remind me 10 min before each prayer","Ingatkan 10 minit sebelum solat","ذكّرني قبل الصلاة بعشر دقائق","نماز سے 10 منٹ پہلے یاد دلائیں","Nikumbushe dakika 10 kabla ya swala")],
          ["quran","📖",B("ফজরের পর কুরআন তিলাওয়াত","Quran after Fajr","Al-Quran selepas Subuh","القرآن بعد الفجر","فجر کے بعد قرآن","Qur'ani baada ya Alfajiri")],
          ["study","📚",B("রাতে পড়াশোনা ৮–১০টা","Study 8–10 pm","Belajar 8–10 malam","مذاكرة ٨–١٠ مساءً","رات 8–10 پڑھائی","Kusoma saa 2–4 usiku")],
          ["sleep","🌙",B("রাত ১১টায় ঘুম","Sleep at 11 pm","Tidur 11 malam","النوم ١١ مساءً","رات 11 بجے سونا","Kulala saa 5 usiku")],
          ["plan","🗓",B("রবিবার সাপ্তাহিক পরিকল্পনা","Weekly plan on Sunday","Rancangan mingguan Ahad","خطة أسبوعية يوم الأحد","اتوار کو ہفتہ وار منصوبہ","Mpango wa wiki Jumapili")]];
        var list=el("div",{class:"opts"});opts.forEach(function(o){var b=el("button",{type:"button","aria-pressed":String(!!S[o[0]]),onclick:function(){S[o[0]]=!S[o[0]];b.setAttribute("aria-pressed",String(S[o[0]]));}},el("span",{class:"e"},o[1]),el("span",{class:"tx"},t(o[2])),el("span",{class:"ck"},"✓"));list.appendChild(b);});
        card.appendChild(list);
        var go=el("button",{type:"button",class:"go",onclick:function(){go.disabled=true;go.textContent="…";finish();}},t(B("শুরু করো","Start","Mula","ابدأ","شروع کریں","Anza"))+" ✨");card.appendChild(go);}
      if(step>0)card.appendChild(el("button",{type:"button",class:"back",onclick:function(){step--;draw();}},"‹ "+t(B("পেছনে","Back","Kembali","رجوع","واپس","Rudi"))));}
    function setVal(id,v){var e=document.getElementById(id);if(e!=null&&v!=null)e.value=v;}
    function finish(){setVal("s-name",S.name);setVal("s-city",S.city||"");setVal("s-uni",S.uni);setVal("s-dept",S.dept);
      if(S.times){setVal("s-fajr",S.times.fajr);setVal("s-zohor",S.times.dhuhr);setVal("s-asar",S.times.asr);setVal("s-maghrib",S.times.maghrib);setVal("s-isyak",S.times.isha);}
      ["quran","study","sleep","plan"].forEach(function(k){var c=document.getElementById("s-"+k);if(c)c.checked=!!S[k];});setVal("s-remsalat",S.remind?"10, 0":"0");
      try{document.getElementById("setupform").requestSubmit();}catch(e){var f=document.getElementById("setupform");f.dispatchEvent(new Event("submit",{cancelable:true}));}
      setTimeout(function(){ov.remove();document.body.style.overflow="";},6000);}
    function finishLater(){ov.remove();document.body.style.overflow="";try{sessionStorage.setItem("am-wiz-later","1");}catch(e){}}
    draw();}
  setTimeout(function(){try{if(needSetup()&&sessionStorage.getItem("am-wiz-later")!=="1"){var s=document.getElementById("setup");if(s)s.style.display="none";wizard();}}catch(e){}},300);
  V5.setup=wizard;
  // keep page themes (Instagram white / WhatsApp / YouTube dark) in step with the open screen
  var prev=window.setView;
  window.setView=function(v){prev(v);try{if(v==="comm"){var hd=document.getElementById("v4subhead");if(hd)hd.remove();}if(window.AMX&&AMX.v5theme)AMX.v5theme();else if(v!=="comm")["ig","wa","yt"].forEach(function(k){document.body.classList.remove("v5-"+k);});if(v==="videos")document.body.classList.add("v5-yt");if(v==="today")npMount();if(v==="more")shareItem();}catch(e){}};
})();
