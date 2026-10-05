/* Amalnama · WhatsApp-style chat: profiles, 1-to-1 chats, groups, group calls, media (auto-deleted after 30 days), voice & video calls (WebRTC). */
(function(){
  var X=window.AMX;if(!X)return;var el=X.el,num=X.num,L=X.LANG;
  var D={
    chats:["চ্যাট","Chats","Sembang","الدردشات","چیٹس","Mazungumzo"],
    search:["খুঁজুন…","Search…","Cari…","بحث…","تلاش…","Tafuta…"],
    newChat:["নতুন চ্যাট","New chat","Sembang baharu","دردشة جديدة","نئی چیٹ","Mazungumzo mapya"],
    members:["সদস্যরা","Members","Ahli","الأعضاء","اراکین","Wanachama"],
    group:["কমিউনিটি গ্রুপ","Community group","Kumpulan komuniti","مجموعة المجتمع","کمیونٹی گروپ","Kikundi cha jumuiya"],
    groupSub:["সব সদস্যের সাথে","With all members","Bersama semua ahli","مع جميع الأعضاء","تمام اراکین کے ساتھ","Pamoja na wanachama wote"],
    noChats:["এখনো কোনো চ্যাট নেই। ✎ চেপে কাউকে মেসেজ দাও।","No chats yet. Tap ✎ to message someone.","Belum ada sembang. Ketik ✎ untuk menghantar mesej.","لا توجد دردشات بعد. اضغط ✎ لمراسلة أحد.","ابھی کوئی چیٹ نہیں۔ کسی کو پیغام بھیجنے کے لیے ✎ دبائیں۔","Bado hakuna mazungumzo. Gusa ✎ kumtumia mtu ujumbe."],
    noMembers:["এখনো অন্য কোনো সদস্য নেই","No other members yet","Belum ada ahli lain","لا يوجد أعضاء آخرون بعد","ابھی کوئی اور رکن نہیں","Bado hakuna wanachama wengine"],
    myProfile:["আমার প্রোফাইল","My profile","Profil saya","ملفي الشخصي","میری پروفائل","Wasifu wangu"],
    name:["নাম","Name","Nama","الاسم","نام","Jina"],
    about:["আমার সম্পর্কে","About","Tentang","نبذة","تعارف","Kuhusu"],
    changePhoto:["ছবি বদলাও","Change photo","Tukar foto","تغيير الصورة","تصویر بدلیں","Badilisha picha"],
    save:["সেভ","Save","Simpan","حفظ","محفوظ کریں","Hifadhi"],
    saved:["সেভ হয়েছে","Saved","Disimpan","تم الحفظ","محفوظ ہو گیا","Imehifadhiwa"],
    online:["অনলাইন","online","dalam talian","متصل","آن لائن","mtandaoni"],
    lastSeen:["শেষ দেখা","last seen","terakhir dilihat","آخر ظهور","آخری بار","alionekana"],
    typing:["লিখছে…","typing…","menaip…","يكتب…","لکھ رہا ہے…","anaandika…"],
    msg:["মেসেজ লেখো","Message","Mesej","رسالة","پیغام","Ujumbe"],
    image:["📷 ছবি","📷 Photo","📷 Foto","📷 صورة","📷 تصویر","📷 Picha"],
    video:["🎥 ভিডিও","🎥 Video","🎥 Video","🎥 فيديو","🎥 ویڈیو","🎥 Video"],
    audio:["🎤 ভয়েস মেসেজ","🎤 Voice message","🎤 Mesej suara","🎤 رسالة صوتية","🎤 صوتی پیغام","🎤 Ujumbe wa sauti"],
    file:["📄 ফাইল","📄 File","📄 Fail","📄 ملف","📄 فائل","📄 Faili"],
    gallery:["ছবি ও ভিডিও","Photo & video","Foto & video","صور وفيديو","تصویر و ویڈیو","Picha na video"],
    camera:["ক্যামেরা","Camera","Kamera","الكاميرا","کیمرہ","Kamera"],
    document:["ফাইল","Document","Dokumen","مستند","دستاویز","Hati"],
    sending:["পাঠানো হচ্ছে…","Sending…","Menghantar…","جارٍ الإرسال…","بھیجا جا رہا ہے…","Inatuma…"],
    tooBig:["ফাইল খুব বড় (সর্বোচ্চ ১৫ MB)","File is too large (max 15 MB)","Fail terlalu besar (maks 15 MB)","الملف كبير جدًا (الحد 15 ميغابايت)","فائل بہت بڑی ہے (زیادہ سے زیادہ 15 MB)","Faili ni kubwa mno (kiwango cha juu 15 MB)"],
    expires:["ছবি, ভিডিও, ভয়েস ও ফাইল ৩০ দিন পর নিজে থেকে মুছে যায়","Photos, videos, voice and files are deleted automatically after 30 days","Foto, video, suara dan fail dipadam secara automatik selepas 30 hari","تُحذف الصور والفيديو والرسائل الصوتية والملفات تلقائيًا بعد 30 يومًا","تصاویر، ویڈیو، آواز اور فائلیں 30 دن بعد خود بخود حذف ہو جاتی ہیں","Picha, video, sauti na faili hufutwa zenyewe baada ya siku 30"],
    expired:["মিডিয়ার মেয়াদ শেষ (৩০ দিন)","Media expired (30 days)","Media tamat tempoh (30 hari)","انتهت صلاحية الوسائط (30 يومًا)","میڈیا کی مدت ختم (30 دن)","Media imeisha muda (siku 30)"],
    open:["খুলুন","Open","Buka","فتح","کھولیں","Fungua"],
    deleteAll:["সবার জন্য মুছো","Delete for everyone","Padam untuk semua","حذف لدى الجميع","سب کے لیے حذف کریں","Futa kwa wote"],
    copy:["কপি","Copy","Salin","نسخ","کاپی","Nakili"],
    clear:["চ্যাট খালি করো (আমার জন্য)","Clear chat (for me)","Kosongkan sembang (untuk saya)","مسح الدردشة (لي)","چیٹ صاف کریں (میرے لیے)","Futa mazungumzo (kwangu)"],
    sure:["নিশ্চিত?","Are you sure?","Anda pasti?","هل أنت متأكد؟","کیا آپ کو یقین ہے؟","Una uhakika?"],
    voiceCall:["ভয়েস কল","Voice call","Panggilan suara","مكالمة صوتية","وائس کال","Simu ya sauti"],
    videoCall:["ভিডিও কল","Video call","Panggilan video","مكالمة فيديو","ویڈیو کال","Simu ya video"],
    calling:["কল হচ্ছে…","Calling…","Memanggil…","جارٍ الاتصال…","کال ہو رہی ہے…","Inapiga…"],
    incoming:["ভয়েস কল আসছে","Incoming voice call","Panggilan suara masuk","مكالمة صوتية واردة","آنے والی وائس کال","Simu ya sauti inaingia"],
    incomingVideo:["ভিডিও কল আসছে","Incoming video call","Panggilan video masuk","مكالمة فيديو واردة","آنے والی ویڈیو کال","Simu ya video inaingia"],
    accept:["ধরো","Accept","Terima","قبول","قبول","Pokea"],
    decline:["কেটে দাও","Decline","Tolak","رفض","مسترد","Kataa"],
    mute:["মিউট","Mute","Senyap","كتم","خاموش","Nyamazisha"],
    camOff:["ক্যামেরা","Camera","Kamera","الكاميرا","کیمرہ","Kamera"],
    flip:["ঘোরাও","Flip","Tukar","تبديل","بدلیں","Geuza"],
    end:["কল শেষ","End","Tamat","إنهاء","ختم","Kata"],
    connecting:["সংযোগ হচ্ছে…","Connecting…","Menyambung…","جارٍ الاتصال…","جڑ رہا ہے…","Inaunganisha…"],
    missed:["মিসড কল","Missed call","Panggilan terlepas","مكالمة فائتة","مس کال","Simu haikupokelewa"],
    declined:["কল কেটে দিয়েছে","Call declined","Panggilan ditolak","تم رفض المكالمة","کال مسترد","Simu imekataliwa"],
    callEnded:["কল শেষ","Call ended","Panggilan tamat","انتهت المكالمة","کال ختم","Simu imeisha"],
    busy:["অন্য কলে আছে","On another call","Dalam panggilan lain","في مكالمة أخرى","دوسری کال پر","Yuko kwenye simu nyingine"],
    noMedia:["মাইক/ক্যামেরা চালু করা যায়নি। ব্রাউজারে অনুমতি দাও।","Couldn't start the microphone/camera. Please allow access in the browser.","Tidak dapat memulakan mikrofon/kamera. Sila benarkan akses.","تعذر تشغيل الميكروفون/الكاميرا. يرجى السماح بالوصول.","مائیک/کیمرہ شروع نہیں ہو سکا۔ براہ کرم اجازت دیں۔","Imeshindwa kuwasha maikrofoni/kamera. Tafadhali ruhusu."],
    callFail:["সংযোগ হয়নি। Wi-Fi/মোবাইল ডেটা বদলে আবার চেষ্টা করো।","Couldn't connect. Try switching between Wi-Fi and mobile data.","Tidak dapat bersambung. Cuba tukar antara Wi-Fi dan data mudah alih.","تعذر الاتصال. جرّب التبديل بين Wi-Fi وبيانات الجوال.","رابطہ نہیں ہو سکا۔ Wi-Fi اور موبائل ڈیٹا بدل کر دیکھیں۔","Imeshindwa kuunganisha. Jaribu kubadilisha Wi-Fi na data ya simu."],
    recording:["রেকর্ড হচ্ছে…","Recording…","Merakam…","جارٍ التسجيل…","ریکارڈنگ…","Inarekodi…"],
    cancel:["বাতিল","Cancel","Batal","إلغاء","منسوخ","Ghairi"],
    send:["পাঠাও","Send","Hantar","إرسال","بھیجیں","Tuma"],
    you:["তুমি","You","Anda","أنت","آپ","Wewe"],
    private:["🔒 এই চ্যাট শুধু তোমরা দুজন দেখতে পারো","🔒 Only the two of you can see this chat","🔒 Hanya anda berdua boleh melihat sembang ini","🔒 لا يرى هذه الدردشة إلا أنتما","🔒 یہ چیٹ صرف آپ دونوں دیکھ سکتے ہیں","🔒 Ni nyinyi wawili tu mnaoweza kuona mazungumzo haya"],
    openNote:["কল আর নতুন মেসেজের রিং/নোটিফিকেশন আসে যখন অ্যাপ খোলা থাকে","Calls and new-message alerts ring while the app is open","Panggilan dan makluman mesej berbunyi semasa aplikasi dibuka","ترن المكالمات وتنبيهات الرسائل أثناء فتح التطبيق","کالز اور نئے پیغامات کی گھنٹی ایپ کھلی ہونے پر بجتی ہے","Simu na arifa za ujumbe hulia programu ikiwa wazi"],
    locked:["🔒 অ্যাডমিন গ্রুপ চ্যাট বন্ধ রেখেছেন","🔒 The admin has locked the group chat","🔒 Pentadbir telah mengunci sembang kumpulan","🔒 أغلق المشرف دردشة المجموعة","🔒 ایڈمن نے گروپ چیٹ بند کی ہے","🔒 Msimamizi amefunga mazungumzo ya kikundi"],
    error:["কিছু একটা ভুল হয়েছে","Something went wrong","Sesuatu tidak kena","حدث خطأ ما","کچھ غلط ہو گیا","Hitilafu imetokea"],
    notif:["নতুন মেসেজ","New message","Mesej baharu","رسالة جديدة","نیا پیغام","Ujumbe mpya"],
    newGroup:["নতুন গ্রুপ","New group","Kumpulan baharu","مجموعة جديدة","نیا گروپ","Kikundi kipya"],
    groupName:["গ্রুপের নাম","Group name","Nama kumpulan","اسم المجموعة","گروپ کا نام","Jina la kikundi"],
    pick:["সদস্য বাছাই করো","Choose members","Pilih ahli","اختر الأعضاء","اراکین منتخب کریں","Chagua wanachama"],
    create:["গ্রুপ তৈরি করো","Create group","Cipta kumpulan","إنشاء المجموعة","گروپ بنائیں","Unda kikundi"],
    info:["গ্রুপের তথ্য","Group info","Maklumat kumpulan","معلومات المجموعة","گروپ کی معلومات","Taarifa za kikundi"],
    leave:["গ্রুপ ছেড়ে দাও","Leave group","Keluar kumpulan","مغادرة المجموعة","گروپ چھوڑیں","Ondoka kikundini"],
    addMem:["সদস্য যোগ করো","Add members","Tambah ahli","إضافة أعضاء","اراکین شامل کریں","Ongeza wanachama"],
    remove:["সরাও","Remove","Buang","إزالة","ہٹائیں","Ondoa"],
    makeAdmin:["অ্যাডমিন বানাও","Make admin","Jadikan admin","تعيين مشرفًا","ایڈمن بنائیں","Fanya msimamizi"],
    admin:["অ্যাডমিন","admin","admin","مشرف","ایڈمن","msimamizi"],
    rename:["নাম বদলাও","Rename","Tukar nama","إعادة تسمية","نام بدلیں","Badilisha jina"],
    nMembers:["জন সদস্য","members","ahli","أعضاء","اراکین","wanachama"],
    sCreated:["গ্রুপ তৈরি করেছে","created the group","mencipta kumpulan","أنشأ المجموعة","نے گروپ بنایا","ameunda kikundi"],
    sAdded:["যোগ করেছে","added","menambah","أضاف","نے شامل کیا","ameongeza"],
    sLeft:["গ্রুপ ছেড়ে গেছে","left","keluar","غادر","نے گروپ چھوڑا","ameondoka"],
    sRemoved:["সরিয়ে দিয়েছে","removed","membuang","أزال","نے ہٹایا","ameondoa"],
    sRenamed:["নাম বদলে রেখেছে","renamed the group to","menukar nama kepada","غيّر الاسم إلى","نے نام رکھا","amebadilisha jina kuwa"],
    gCall:["গ্রুপ কল","Group call","Panggilan kumpulan","مكالمة جماعية","گروپ کال","Simu ya kikundi"],
    join:["যোগ দাও","Join","Sertai","انضمام","شامل ہوں","Jiunge"],
    ongoing:["চলমান কল — যোগ দিতে চাপো","Call in progress — tap to join","Panggilan sedang berlangsung — ketik untuk sertai","مكالمة جارية — اضغط للانضمام","کال جاری ہے — شامل ہونے کے لیے دبائیں","Simu inaendelea — gusa kujiunga"],
    callFull:["কলে সর্বোচ্চ ৮ জন থাকতে পারে","A group call can have up to 8 people","Maksimum 8 orang","الحد الأقصى ٨ أشخاص","زیادہ سے زیادہ 8 افراد","Hadi watu 8"],
    gPrivate:["🔒 এই গ্রুপ শুধু সদস্যরা দেখতে পারে","🔒 Only members can see this group","🔒 Hanya ahli boleh melihat kumpulan ini","🔒 لا يرى هذه المجموعة إلا أعضاؤها","🔒 یہ گروپ صرف اراکین دیکھ سکتے ہیں","🔒 Wanachama pekee wanaweza kuona kikundi hiki"],
    pushOn:["🔔 অ্যাপ বন্ধ থাকলেও কল ও মেসেজের রিং পেতে চালু করো","🔔 Get calls & messages even when the app is closed","🔔 Terima panggilan & mesej walaupun aplikasi ditutup","🔔 استقبل المكالمات والرسائل حتى والتطبيق مغلق","🔔 ایپ بند ہو تب بھی کالز اور پیغامات پائیں","🔔 Pokea simu na ujumbe hata programu ikiwa imefungwa"],
    pushDone:["✓ অ্যাপ বন্ধ থাকলেও কল ও মেসেজ আসবে","✓ Calls & messages will reach you even when the app is closed","✓ Panggilan & mesej akan sampai walaupun aplikasi ditutup","✓ ستصلك المكالمات والرسائل حتى والتطبيق مغلق","✓ ایپ بند ہو تب بھی کالز اور پیغامات آئیں گے","✓ Simu na ujumbe vitakufikia hata programu ikiwa imefungwa"],
    waiting:["অন্যদের জন্য অপেক্ষা…","Waiting for others…","Menunggu yang lain…","بانتظار الآخرين…","دوسروں کا انتظار…","Inasubiri wengine…"]
  };
  var LI={bn:0,en:1,ms:2,ar:3,ur:4,sw:5}[L];if(LI==null)LI=1;
  function t(k){var v=D[k];return v?v[LI]:k;}
  function IC(n,sz){var D={back:"M15 6l-6 6 6 6",video:"M3 6.5h12.5v11H3zM15.5 10.5l5.5-3v9l-5.5-3z",phone:"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",dots:"M12 5h.01M12 12h.01M12 19h.01",clip:"M20 11.5l-8 8a5 5 0 0 1-7-7l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7L9.7 17.2a1.7 1.7 0 0 1-2.4-2.4L15 7",mic:"M9 3h6v11H9zM5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21",send:"M3 20.5l18-8.5L3 3.5l2.5 7 9 1.5-9 1.5z",users:"M9 4.6a3.4 3.4 0 1 1 0 6.8 3.4 3.4 0 0 1 0-6.8zM2.8 20a6.2 6.2 0 0 1 12.4 0zM15.8 4.9a3.2 3.2 0 0 1 0 6.2M17.6 13.7a6 6 0 0 1 3.6 6.3"};
    if(n==="back"&&(L==="ar"||L==="ur"))D.back="M9 6l6 6-6 6";
    var NS="http://www.w3.org/2000/svg",s=document.createElementNS(NS,"svg");s.setAttribute("viewBox","0 0 24 24");s.setAttribute("width",sz||22);s.setAttribute("height",sz||22);s.setAttribute("aria-hidden","true");
    s.setAttribute("fill",n==="send"?"currentColor":"none");s.setAttribute("stroke",n==="send"?"none":"currentColor");s.setAttribute("stroke-width",n==="dots"?"3.2":"1.9");s.setAttribute("stroke-linecap","round");s.setAttribute("stroke-linejoin","round");
    var p=document.createElementNS(NS,"path");p.setAttribute("d",D[n]);s.appendChild(p);return s;}
  function setIco(b,n){b.textContent="";b.appendChild(IC(n,20));}

  var MAXB=15*1024*1024,PART=561000,DAY=86400000,KEEP=30*DAY;
  var ICE=(window.AMALNAMA_ICE&&window.AMALNAMA_ICE.length)?window.AMALNAMA_ICE:[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302"]}];

  var css=document.createElement("style");
  css.textContent=[
  '.wa-top{display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:16px;background:var(--surface);cursor:pointer}',
  '.wa-av{width:46px;height:46px;border-radius:50%;flex:none;object-fit:cover;background:var(--gold-soft);color:var(--gold);display:grid;place-items:center;font-weight:700;font-size:1.05rem;position:relative}',
  '.wa-av.sm{width:38px;height:38px;font-size:.9rem}.wa-av.xl{width:110px;height:110px;font-size:2.4rem}',
  '.wa-on{position:absolute;bottom:1px;inset-inline-end:1px;width:12px;height:12px;border-radius:50%;background:#25d366;border:2px solid var(--surface)}',
  '.wa-list{margin-top:10px;border:1px solid var(--line);border-radius:16px;background:var(--surface);overflow:hidden}',
  '.wa-item{display:flex;align-items:center;gap:12px;padding:10px 12px;border-top:1px solid var(--line);cursor:pointer;width:100%;background:none;border-inline:0;border-bottom:0;font:inherit;color:inherit;text-align:start}.wa-item:first-child{border-top:0}.wa-item:hover{background:var(--sunk)}',
  '.wa-item .mid{flex:1;min-width:0}.wa-item .nm{font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wa-item .lm{font-size:.84rem;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
  '.wa-item .rt{display:grid;justify-items:end;gap:4px;font-size:.72rem;color:var(--muted)}.wa-item.unread .lm{color:var(--ink);font-weight:600}.wa-item.unread .rt{color:#1fa855}',
  '.wa-dot{min-width:20px;height:20px;padding:0 6px;border-radius:99px;background:#25d366;color:#fff;font-size:.7rem;font-weight:700;display:grid;place-items:center}',
  '.wa-fab{position:fixed;inset-inline-end:18px;bottom:22px;z-index:60;width:56px;height:56px;border-radius:18px;border:0;background:var(--accent);color:var(--accent-ink);font-size:1.4rem;box-shadow:0 8px 22px rgba(0,0,0,.3);cursor:pointer}',
  '.wa-ov{position:fixed;inset:0;z-index:300;display:flex;flex-direction:column;background:var(--bg,var(--surface));color:var(--ink)}',
  '.wa-hd{display:flex;align-items:center;gap:10px;padding:calc(8px + env(safe-area-inset-top)) 10px 8px;background:var(--hero-bg,#0b2226);color:#f3ecdc;flex:none}',
  '.wa-hd .ib{border:0;background:none;color:inherit;font-size:1.25rem;width:40px;height:40px;border-radius:50%;cursor:pointer;display:grid;place-items:center;flex:none}.wa-hd .ib:hover{background:rgba(255,255,255,.1)}',
  '.wa-hd .who{flex:1;min-width:0;cursor:pointer}.wa-hd .who b{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wa-hd .who span{font-size:.75rem;opacity:.8}',
  '.wa-body{flex:1;overflow-y:auto;padding:10px 10px 6px;display:flex;flex-direction:column;gap:3px;background:var(--sunk);background-image:radial-gradient(color-mix(in oklab,var(--gold) 14%,transparent) 1px,transparent 1px);background-size:22px 22px}',
  '.wa-sys{align-self:center;font-size:.74rem;background:var(--surface);color:var(--muted);padding:5px 10px;border-radius:10px;margin:6px 0;text-align:center;max-width:90%}',
  '.wa-m{max-width:min(78%,520px);align-self:flex-start;background:var(--surface);border-radius:12px;border-start-start-radius:3px;padding:6px 9px 4px;box-shadow:0 1px 1px rgba(0,0,0,.08);position:relative;word-break:break-word}',
  '.wa-m.me{align-self:flex-end;background:color-mix(in oklab,var(--accent) 22%,var(--surface));border-start-start-radius:12px;border-start-end-radius:3px}',
  '.wa-m .tx{white-space:pre-wrap;line-height:1.45}.wa-m .ft{display:flex;gap:4px;justify-content:flex-end;align-items:center;font-size:.66rem;color:var(--muted);margin-top:2px}.wa-m .ft .tk.seen{color:#34b7f1}',
  '.wa-m .au{font-size:.72rem;font-weight:700;color:var(--accent);margin-bottom:2px}',
  '.wa-m img.ph,.wa-m video{display:block;max-width:100%;width:260px;max-height:340px;object-fit:cover;border-radius:9px;background:#0003;cursor:pointer}',
  '.wa-m audio{width:240px;max-width:100%;display:block}.wa-fc{display:flex;align-items:center;gap:10px;padding:6px 4px;min-width:200px}.wa-fc .ic{font-size:1.6rem}.wa-fc .xbtn{margin-inline-start:auto}',
  '.wa-m .ex{font-style:italic;color:var(--muted);font-size:.85rem}.wa-m.call .tx{display:flex;align-items:center;gap:8px}',
  '.wa-comp{display:flex;align-items:flex-end;gap:6px;padding:8px 8px calc(8px + env(safe-area-inset-bottom));background:var(--surface);border-top:1px solid var(--line);flex:none}',
  '.wa-comp textarea{flex:1;resize:none;max-height:120px;min-height:42px;font:inherit;color:var(--ink);background:var(--sunk);border:1px solid var(--line);border-radius:22px;padding:10px 14px;line-height:1.35}',
  '.wa-rb{width:44px;height:44px;flex:none;border-radius:50%;border:0;cursor:pointer;font-size:1.15rem;display:grid;place-items:center;background:var(--sunk);color:var(--ink)}.wa-rb.go{background:var(--accent);color:var(--accent-ink)}',
  '.wa-menu{position:absolute;bottom:62px;inset-inline-start:8px;z-index:5;background:var(--surface);border:1px solid var(--line);border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.25);display:grid;padding:6px;min-width:190px}',
  '.wa-menu button{border:0;background:none;font:inherit;color:var(--ink);text-align:start;padding:10px 12px;border-radius:10px;cursor:pointer}.wa-menu button:hover{background:var(--sunk)}',
  '.wa-prog{font-size:.78rem;color:var(--muted);padding:4px 12px;background:var(--surface);flex:none}',
  '.wa-call{position:fixed;inset:0;z-index:400;background:radial-gradient(120% 80% at 50% 0%,#1d5a55 0%,#0d3236 55%,#061a1d 100%);color:#fbf6ea;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:calc(40px + env(safe-area-inset-top)) 16px calc(36px + env(safe-area-inset-bottom));text-align:center}',
  '.wa-call video.rv{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#000}.wa-call video.lv{position:absolute;top:calc(16px + env(safe-area-inset-top));inset-inline-end:14px;width:110px;height:150px;object-fit:cover;border-radius:14px;border:2px solid rgba(255,255,255,.5);z-index:2;background:#000;transform:scaleX(-1)}',
  '.wa-call .top{position:relative;z-index:2;display:grid;justify-items:center;gap:10px}.wa-call .top b{font-size:1.5rem}.wa-call .top span{opacity:.85}',
  '.wa-call .ctl{position:relative;z-index:2;display:flex;gap:18px;justify-content:center;flex-wrap:wrap}',
  '.wa-cb{width:62px;height:62px;border-radius:50%;border:0;cursor:pointer;font-size:1.5rem;background:rgba(255,255,255,.18);color:#fff;display:grid;place-items:center}.wa-cb.off{background:#fff;color:#0d3236}.wa-cb.red{background:#e53935}.wa-cb.green{background:#25d366}',
  '.wa-cl{display:grid;justify-items:center;gap:6px;font-size:.75rem}',
  '.wa-call.vid .top{background:linear-gradient(#0009,#0000);padding:8px 18px;border-radius:14px}',
  '@keyframes waPulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,.6)}100%{box-shadow:0 0 0 22px rgba(37,211,102,0)}}.wa-cb.green.pulse{animation:waPulse 1.2s infinite}',
  '.wa-pf{display:grid;justify-items:center;gap:12px;padding:20px 16px}.wa-pf label{width:100%;max-width:420px}',
  '.wa-call{background:radial-gradient(120% 70% at 50% 0%,#1B5A50 0%,#0A2A2D 52%,#041214 100%);color:#F3EEDF}',
  '.wa-call::before{content:"";position:absolute;inset:0;opacity:.06;pointer-events:none;background-image:radial-gradient(#E8C98A 1px,transparent 1.5px);background-size:26px 26px}',
  '.wa-call.vid::before{display:none}.wa-call.vid{background:#000}.wa-call.vid .top .wa-av{display:none}',
  '.wa-call .top{gap:12px;margin-top:4vh}.wa-call .top b{font-family:"Marcellus",serif;font-weight:400;font-size:1.75rem;color:#F7E2A6;letter-spacing:.02em}',
  '.wa-call .top>span{display:inline-block;padding:5px 14px;border-radius:99px;background:rgba(255,255,255,.08);border:1px solid rgba(232,201,138,.25);font-size:.86rem;opacity:1}',
  '.wa-call .top .wa-av.xl{width:132px;height:132px;font-size:3rem;background:linear-gradient(145deg,#1F5E57,#0E3A3B);color:#F7E2A6;box-shadow:0 0 0 4px #0A2A2D,0 0 0 7px rgba(232,201,138,.8),0 24px 60px rgba(0,0,0,.55)}',
  '.wa-call .top .wa-av.xl::after{content:"";position:absolute;inset:-14px;border-radius:50%;border:2px solid rgba(232,201,138,.5);animation:waRip 2.2s ease-out infinite}',
  '@keyframes waRip{0%{transform:scale(.92);opacity:.9}100%{transform:scale(1.35);opacity:0}}',
  '.wa-call.vid .top{background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,0));padding:10px 22px 18px;border-radius:18px;margin-top:0}',
  '.wa-call .ctl{gap:14px;padding:14px 16px 10px;border-radius:34px;background:rgba(6,23,25,.62);border:1px solid rgba(232,201,138,.22);box-shadow:0 18px 40px rgba(0,0,0,.45);flex-wrap:nowrap;max-width:calc(100% - 20px)}',
  '.wa-cl{display:grid;justify-items:center;gap:6px;font-size:.7rem;color:#CFE0DA;min-width:58px}',
  '.wa-cb{width:58px;height:58px;font-size:0;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.16);color:#F3EEDF;transition:transform .15s,background .2s}.wa-cb:active{transform:scale(.92)}',
  '.wa-cb svg{width:26px;height:26px}.wa-cb.off{background:#F3EEDF;color:#0A2A2D;border-color:#F3EEDF}',
  '.wa-cb.red{width:74px;border-radius:29px;background:linear-gradient(135deg,#F26363,#C81E1E);border:0;color:#fff;box-shadow:0 10px 24px rgba(200,30,30,.45)}',
  '.wa-cb.green{width:74px;border-radius:29px;background:linear-gradient(135deg,#3EE0A4,#059669);border:0;color:#fff;box-shadow:0 10px 24px rgba(5,150,105,.45)}',
  '.wa-call video.lv{top:calc(74px + env(safe-area-inset-top));width:108px;height:152px;border-radius:18px;border:2px solid rgba(247,226,166,.85);box-shadow:0 14px 30px rgba(0,0,0,.5)}',
  '.wa-call.grp{background:radial-gradient(120% 70% at 50% 0%,#1B5A50 0%,#0A2A2D 52%,#041214 100%)}.wa-tile{border:1px solid rgba(232,201,138,.18)}',
  '.wa-sel{width:22px;height:22px;border-radius:50%;border:2px solid var(--line);flex:none;display:grid;place-items:center;font-size:.8rem;color:#fff}.wa-item[aria-pressed="true"] .wa-sel{background:#25d366;border-color:#25d366}',
  '.wa-chips{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}.wa-chips span{font-size:.78rem;padding:4px 10px;border-radius:99px;background:var(--sunk);border:1px solid var(--line)}',
  '.wa-badge{font-size:.66rem;padding:2px 7px;border-radius:99px;border:1px solid #25d366;color:#1fa855;margin-inline-start:6px}',
  '.wa-join[hidden]{display:none!important}.wa-join{display:flex;align-items:center;gap:10px;padding:9px 12px;background:#25d366;color:#05301a;font-weight:700;border:0;width:100%;cursor:pointer;font:inherit;flex:none}',
  '.wa-grid{position:absolute;inset:0;display:grid;gap:4px;padding:calc(64px + env(safe-area-inset-top)) 4px calc(120px + env(safe-area-inset-bottom));grid-auto-rows:1fr}',
  '.wa-tile{position:relative;border-radius:14px;overflow:hidden;background:#0a2a2d;display:grid;place-items:center;min-height:0}.wa-tile video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#000}.wa-tile.me video{transform:scaleX(-1)}',
  '.wa-tile .nm{position:absolute;inset-inline-start:8px;bottom:8px;font-size:.78rem;padding:3px 9px;border-radius:99px;background:rgba(0,0,0,.5);color:#fff;z-index:2;max-width:85%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
  '.wa-tile .wa-av.xl{width:84px;height:84px;font-size:2rem}.wa-tile.cn .wa-av{opacity:.5}',
  '.wa-call.grp .top{position:absolute;top:calc(12px + env(safe-area-inset-top));left:0;right:0;gap:2px}.wa-call.grp .top b{font-size:1.1rem}.wa-call.grp .ctl{position:absolute;bottom:calc(28px + env(safe-area-inset-bottom));left:0;right:0}'
  ].join("\n");
  document.head.appendChild(css);

  var rooms={},dismissed={},room=null,gRing=null;
  var ctx=null,db=null,FV=null,me=null,profs={},chats=[],unsubs=[],listEl=null,onUnread=null,openCid=null,callObj=null,curView=null;
  function q(c){return db.collection(c);}
  function cidFor(a,b){return a<b?a+"_"+b:b+"_"+a;}
  function other(c){return c.members[0]===me.uid?c.members[1]:c.members[0];}
  function gname(c){return (c&&c.name)||t("group");}
  function ts(v){return v&&v.toDate?v.toDate():v instanceof Date?v:null;}
  function ms(v){var d=ts(v);return d?d.getTime():0;}
  function hm(d){return num(d.toLocaleTimeString(L==="bn"?"bn-BD":L,{hour:"numeric",minute:"2-digit"}));}
  function when(v){var d=ts(v);if(!d)return "";var n=new Date();if(d.toDateString()===n.toDateString())return hm(d);
    return num(d.toLocaleDateString(L==="bn"?"bn-BD":L,{day:"numeric",month:"short"}));}
  function prof(uid){return profs[uid]||{uid:uid,name:"…",photo:""};}
  function isOnline(p){return p&&ms(p.lastSeen)>Date.now()-4*60000;}
  function avatar(p,cls,dot){p=p||{};var e;
    if(p.photo&&/^(https:\/\/|data:image\/)/.test(p.photo)){e=el("div",{class:"wa-av "+(cls||"")});var i=el("img",{src:p.photo,alt:"",referrerpolicy:"no-referrer",loading:"lazy",style:"width:100%;height:100%;border-radius:50%;object-fit:cover"});
      i.onerror=function(){i.remove();e.textContent=(String(p.name||"?").trim()[0]||"?").toUpperCase();};e.appendChild(i);}
    else e=el("div",{class:"wa-av "+(cls||"")},(String(p.name||"?").trim()[0]||"?").toUpperCase());
    if(dot&&isOnline(p))e.appendChild(el("span",{class:"wa-on"}));return e;}
  function oops(e){console.error(e);alert(t("error")+(e&&e.code?" ("+e.code+")":""));}
  function preview(m){if(!m)return "";if(m.type==="text")return m.text||"";if(m.type==="sys")return sysText(m);if(m.type==="call")return "📞 "+t(m.call&&m.call.kind==="video"?"videoCall":"voiceCall");return t(m.type)+(m.text?" · "+m.text:"");}
  function notify(title,body,tag){try{if(!("Notification" in window)||Notification.permission!=="granted")return;
    if(navigator.serviceWorker&&navigator.serviceWorker.controller)navigator.serviceWorker.ready.then(function(r){r.showNotification(title,{body:body,icon:"icon-192.png",tag:tag,renotify:true});});
    else new Notification(title,{body:body,icon:"icon-192.png",tag:tag});}catch(e){}}
  function askNotify(){try{if("Notification" in window&&Notification.permission==="default")Notification.requestPermission();}catch(e){}}

  // ---------- Web Push: ring this phone even when the app is closed ----------
  var PUSH=window.AMALNAMA_PUSH||null,pushOk=false;
  function b64u(s){var p="=".repeat((4-s.length%4)%4),b=atob((s+p).replace(/-/g,"+").replace(/_/g,"/")),a=new Uint8Array(b.length);for(var i=0;i<b.length;i++)a[i]=b.charCodeAt(i);return a;}
  function pushSupported(){return !!(PUSH&&PUSH.key&&"serviceWorker" in navigator&&"PushManager" in window&&"Notification" in window);}
  function ensurePush(){if(!pushSupported()||!me||Notification.permission!=="granted")return Promise.resolve(false);
    return navigator.serviceWorker.ready.then(function(reg){return reg.pushManager.getSubscription().then(function(sub){return sub||reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64u(PUSH.key)});});})
      .then(function(sub){var js=JSON.stringify(sub.toJSON?sub.toJSON():sub);var ref=q("push").doc(me.uid);
        return ref.get().then(function(d){var subs=(d.exists&&d.data().subs)||[];if(subs.indexOf(js)>=0){pushOk=true;return true;}
          var ep=JSON.parse(js).endpoint;subs=subs.filter(function(x){try{return JSON.parse(x).endpoint!==ep;}catch(e){return false;}});subs.push(js);
          return ref.set({subs:subs.slice(-5),updatedAt:FV.serverTimestamp()}).then(function(){pushOk=true;return true;});});})
      .catch(function(e){console.warn("push",e);return false;});}
  function pushRing(body){if(!PUSH||!PUSH.url||!me||!me.getIdToken)return;me.getIdToken().then(function(tk){return fetch(PUSH.url,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+tk},body:JSON.stringify(body)});}).catch(function(){});}
  function enablePush(btn){try{Notification.requestPermission().then(function(p){if(p==="granted")ensurePush().then(function(ok){if(btn){btn.textContent=ok?t("pushDone"):t("error");btn.disabled=true;}});});}catch(e){}}
  // a call / chat notification was tapped: what should open once the community is ready
  var intent=null;
  function readIntent(){try{var hm0=/[#&](call|chat)=([^&]+)(&a=1)?/.exec(location.hash||"");if(hm0){intent={k:hm0[1],v:decodeURIComponent(hm0[2]),answer:!!hm0[3]};history.replaceState(history.state,"",location.pathname+location.search);return true;}}catch(e){}return false;}
  readIntent();window.addEventListener("hashchange",function(){if(readIntent()&&me&&db)runIntent();});
  window.AMCHAT_INTENT=function(){return intent;};
  function runIntent(){if(!intent)return;var it=intent;
    if(it.k==="chat"){intent=null;setTimeout(function(){var c=chatById(it.v);if(c&&c.group)openGChat(it.v);else if(it.v.indexOf("_")>0)openChat(ctxOther(it.v));},1500);return;}
    if(it.k==="call"&&it.v.indexOf("r:")===0){intent=null;var rid=it.v.slice(2);setTimeout(function(){if(it.answer)joinRoom(rid);else if(rooms[rid])gIncoming(rooms[rid]);},1500);return;}
    // one-to-one: the incoming-call listener shows the call; answer it straight away if "Answer" was tapped
    if(it.k==="call"){var cid0=it.v.replace(/^c:/,"");intent=null;if(it.answer&&callObj&&callObj.acc&&callObj.ref.id===cid0&&!callObj.acc.b.disabled){callObj.acc.b.click();return;}autoAnswer=it.answer?cid0:null;}}
  var autoAnswer=null;

  // ---------- start / stop (called by the community module) ----------
  function start(c){stop();ctx=c;db=c.db;FV=c.FV;me=c.me;onUnread=c.onUnread;
    // my profile: create it from the join form / Google account the first time
    q("profiles").doc(me.uid).get().then(function(s){if(!s.exists){return q("profiles").doc(me.uid).set({uid:me.uid,name:(c.myName()||"Member").slice(0,40),photo:c.myPhoto()||"",about:"",updatedAt:FV.serverTimestamp(),lastSeen:FV.serverTimestamp()});}
      return beat();}).catch(function(e){console.warn("profile",e);});
    unsubs.push(q("profiles").limit(500).onSnapshot(function(s){s.docChanges().forEach(function(ch){if(ch.type==="removed")delete profs[ch.doc.id];else profs[ch.doc.id]=ch.doc.data({serverTimestamps:"estimate"});});
      if(listEl&&curView)curView();refreshOpenHeader();try{if(window.AMX&&AMX.v5stories)AMX.v5stories();}catch(x){}},function(e){console.warn(e);}));
    unsubs.push(q("chats").where("members","array-contains",me.uid).onSnapshot(function(s){
      var prev={};chats.forEach(function(c){prev[c.id]=c;});
      chats=s.docs.map(function(d){var x=d.data({serverTimestamps:"estimate"});x.id=d.id;return x;}).sort(function(a,b){return ms(b.updatedAt)-ms(a.updatedAt);});
      chats.forEach(function(c){var p=prev[c.id];if(p&&c.last&&c.last.uid!==me.uid&&ms(c.last.at)>ms(p.last&&p.last.at)&&(document.hidden||openCid!==c.id)){
        notify(c.group?gname(c):(prof(c.last.uid).name||t("notif")),(c.group?prof(c.last.uid).name+": ":"")+preview(c.last),"am-"+c.id);if(openCid!==c.id)beep(1);}});
      unread();if(listEl&&curView)curView();refreshOpenHeader();},function(e){console.warn(e);}));
    // incoming calls
    unsubs.push(q("calls").where("to","==",me.uid).where("status","==","ringing").onSnapshot(function(s){
      s.docChanges().forEach(function(ch){if(ch.type!=="added")return;var d=ch.doc.data({serverTimestamps:"estimate"});
        if(Date.now()-ms(d.createdAt)>60000)return;
        if(callObj||room){ch.doc.ref.update({status:"busy",endedAt:FV.serverTimestamp()}).catch(function(){});return;}
        incoming(ch.doc.id,d);});},function(e){console.warn(e);}));
    // group calls I'm invited to
    unsubs.push(q("rooms").where("members","array-contains",me.uid).onSnapshot(function(s){
      s.docChanges().forEach(function(ch){var id=ch.doc.id;if(ch.type==="removed"){delete rooms[id];return;}var d=ch.doc.data({serverTimestamps:"estimate"});d.id=id;rooms[id]=d;
        if(d.active&&d.by!==me.uid&&(d.in||[]).indexOf(me.uid)<0&&Date.now()-ms(d.createdAt)<60000&&!dismissed[id]&&!callObj&&!room)gIncoming(d);});
      if(gRing&&(!rooms[gRing.id]||!rooms[gRing.id].active))gRing.close();
      refreshOpenHeader();if(room)roomSync();},function(e){console.warn(e);}));
    var hb=setInterval(beat,3*60000);unsubs.push(function(){clearInterval(hb);});
    var vis=function(){if(!document.hidden)beat();};document.addEventListener("visibilitychange",vis);unsubs.push(function(){document.removeEventListener("visibilitychange",vis);});
    if(typeof Notification!=="undefined"&&Notification.permission==="granted")setTimeout(ensurePush,2500);
    runIntent();}
  var lastBeat=0;function beat(){if(!me||Date.now()-lastBeat<60000)return Promise.resolve();lastBeat=Date.now();return q("profiles").doc(me.uid).update({lastSeen:FV.serverTimestamp()}).catch(function(){});}
  function stop(){unsubs.splice(0).forEach(function(f){try{f();}catch(e){}});chats=[];profs={};rooms={};closeOv();if(callObj)hang("ended");if(room)leaveRoom();if(gRing)gRing.close();ctx=null;listEl=null;curView=null;}
  function unread(){var n=chats.filter(isUnread).length;if(onUnread)onUnread(n);return n;}
  function isUnread(c){return c.last&&c.last.uid!==me.uid&&ms(c.last.at)>ms(c.read&&c.read[me.uid]);}

  // ---------- chat list (inside Community → Chat tab) ----------
  function mount(box){listEl=box;box.innerHTML="";
    var mp=prof(me.uid);
    var top=el("div",{class:"wa-top",onclick:function(){profileView();}},avatar(mp.uid?mp:{name:ctx.myName(),photo:ctx.myPhoto()},"sm"),
      el("div",{style:"flex:1;min-width:0"},el("b",null,(mp.name&&mp.name!=="…")?mp.name:ctx.myName()),el("div",{class:"q-sub"},t("myProfile")+" ›")),
      el("div",{style:"display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end"},el("button",{class:"xbtn",type:"button",title:t("newGroup"),onclick:function(e){e.stopPropagation();newGroup();}},"👥 "+t("newGroup")),
        el("button",{class:"xbtn acc",type:"button",title:t("newChat"),onclick:function(e){e.stopPropagation();contacts();}},"✎ "+t("newChat"))));
    var srch=el("input",{class:"xin",placeholder:t("search"),style:"margin-top:10px"});
    var list=el("div",{class:"wa-list"});
    box.appendChild(top);
    if(pushSupported()&&Notification.permission!=="granted"&&Notification.permission!=="denied"){var pb=el("button",{class:"xbtn acc",type:"button",style:"width:100%;justify-content:center;margin-top:10px;padding:11px"},t("pushOn"));pb.onclick=function(){enablePush(pb);};box.appendChild(pb);}
    box.appendChild(srch);box.appendChild(list);
    box.appendChild(el("p",{class:"xnote"},"ℹ️ "+t("expires")+" · "+t("openNote")));
    function draw(){var f=srch.value.trim().toLowerCase();list.innerHTML="";
      var g=el("button",{class:"wa-item",type:"button",onclick:function(){openGroup();}},el("div",{class:"wa-av"},IC("users",22)),el("div",{class:"mid"},el("div",{class:"nm"},t("group")),el("div",{class:"lm"},t("groupSub"))));
      if(!f||t("group").toLowerCase().indexOf(f)>=0)list.appendChild(g);
      var shown=0;chats.forEach(function(c){if(c.group){if(f&&gname(c).toLowerCase().indexOf(f)<0)return;if(!c.last)return;
          var gcl=c.cleared&&c.cleared[me.uid];if(gcl&&ms(c.last.at)<=ms(gcl))return;var gun=isUnread(c),live=activeRoom(c.id);
          list.appendChild(el("button",{class:"wa-item"+(gun?" unread":""),type:"button",onclick:function(){openGChat(c.id);}},gAvatar(c,""),
            el("div",{class:"mid"},el("div",{class:"nm"},gname(c)),el("div",{class:"lm"},live?"📞 "+t("ongoing"):(c.last.type!=="sys"?(c.last.uid===me.uid?t("you"):prof(c.last.uid).name)+": ":"")+preview(c.last))),
            el("div",{class:"rt"},when(c.last.at),gun?el("span",{class:"wa-dot"},"●"):null)));shown++;return;}
        var o=prof(other(c));if(f&&String(o.name||"").toLowerCase().indexOf(f)<0)return;if(!c.last)return;
        var cl=c.cleared&&c.cleared[me.uid];if(cl&&ms(c.last.at)<=ms(cl))return;
        var un=isUnread(c),ty=c.typing&&ms(c.typing[other(c)])>Date.now()-6000;
        list.appendChild(el("button",{class:"wa-item"+(un?" unread":""),type:"button",onclick:function(){openChat(other(c));}},avatar(o,"",true),
          el("div",{class:"mid"},el("div",{class:"nm"},o.name||"—"),el("div",{class:"lm"},ty?t("typing"):(c.last.uid===me.uid?"✓ ":"")+preview(c.last))),
          el("div",{class:"rt"},when(c.last.at),un?el("span",{class:"wa-dot"},"●"):null)));shown++;});
      if(!shown&&!f)list.appendChild(el("p",{class:"muted",style:"padding:14px;margin:0;text-align:center"},t("noChats")));}
    srch.oninput=draw;curView=draw;draw();}

  function contacts(){var ov=overlay();
    var hd=el("div",{class:"wa-hd"},el("button",{class:"ib",type:"button","aria-label":"back",onclick:closeOv},IC("back")),el("div",{class:"who"},el("b",null,t("newChat")),el("span",null,t("members"))));
    var srch=el("input",{class:"xin",placeholder:t("search")});var list=el("div",{class:"wa-list",style:"margin-top:10px"});
    var bd=el("div",{style:"flex:1;overflow-y:auto;padding:12px"},srch,list);ov.appendChild(hd);ov.appendChild(bd);
    function draw(){var f=srch.value.trim().toLowerCase();list.innerHTML="";
      var ps=Object.keys(profs).map(function(k){return profs[k];}).filter(function(p){return p.uid!==me.uid&&(!f||String(p.name||"").toLowerCase().indexOf(f)>=0);})
        .sort(function(a,b){return String(a.name).localeCompare(String(b.name));});
      if(!f)list.appendChild(el("button",{class:"wa-item",type:"button",onclick:function(){newGroup();}},el("div",{class:"wa-av",style:"background:#25d366;color:#fff"},IC("users",22)),el("div",{class:"mid"},el("div",{class:"nm"},t("newGroup")))));
      if(!ps.length)list.appendChild(el("p",{class:"muted",style:"padding:14px;margin:0;text-align:center"},t("noMembers")));
      ps.forEach(function(p){list.appendChild(el("button",{class:"wa-item",type:"button",onclick:function(){openChat(p.uid);}},avatar(p,"",true),
        el("div",{class:"mid"},el("div",{class:"nm"},p.name||"—"),el("div",{class:"lm"},p.about||(isOnline(p)?t("online"):"")))));});}
    srch.oninput=draw;draw();ovRedraw=draw;}

  // ---------- my profile ----------
  function profileView(uid){uid=uid||me.uid;var mine=uid===me.uid;var p=prof(uid);var ov=overlay();
    ov.appendChild(el("div",{class:"wa-hd"},el("button",{class:"ib",type:"button","aria-label":"back",onclick:closeOv},IC("back")),el("div",{class:"who"},el("b",null,mine?t("myProfile"):p.name))));
    var box=el("div",{class:"wa-pf"});ov.appendChild(el("div",{style:"flex:1;overflow-y:auto"},box));
    var photo=p.photo||(mine?ctx.myPhoto():"");var avBox=el("div");function drawAv(){avBox.innerHTML="";avBox.appendChild(avatar({name:p.name,photo:photo},"xl"));}drawAv();box.appendChild(avBox);
    if(!mine){box.appendChild(el("b",{style:"font-size:1.3rem"},p.name||"—"));box.appendChild(el("div",{class:"q-sub"},isOnline(p)?t("online"):(p.lastSeen?t("lastSeen")+" "+when(p.lastSeen):"")));
      if(p.about)box.appendChild(el("p",{style:"white-space:pre-wrap;text-align:center"},p.about));
      box.appendChild(el("div",{class:"xrow",style:"justify-content:center"},el("button",{class:"xbtn acc",type:"button",onclick:function(){openChat(uid);}},"💬 "+t("msg")),
        el("button",{class:"xbtn",type:"button",onclick:function(){closeOv();startCall(uid,"audio");}},"📞 "+t("voiceCall")),el("button",{class:"xbtn",type:"button",onclick:function(){closeOv();startCall(uid,"video");}},"🎥 "+t("videoCall"))));return;}
    var fi=el("input",{type:"file",accept:"image/*",hidden:true});
    fi.onchange=function(){var f=fi.files[0];if(!f)return;shrink(f,256,0.82).then(function(b){return blobToDataURL(b);}).then(function(u){photo=u;drawAv();}).catch(oops);};
    box.appendChild(fi);box.appendChild(el("button",{class:"xbtn",type:"button",onclick:function(){fi.click();}},"📷 "+t("changePhoto")));
    var nm=el("input",{class:"xin",maxlength:"40",value:p.name&&p.name!=="…"?p.name:ctx.myName()});var ab=el("textarea",{class:"xin",maxlength:"140",rows:"2"});ab.value=p.about||"";
    var ok=el("span",{class:"q-sub"});
    var sv=el("button",{class:"xbtn acc",type:"button"},t("save"));
    sv.onclick=function(){var n=nm.value.trim();if(!n){nm.focus();return;}sv.disabled=true;
      q("profiles").doc(me.uid).set({uid:me.uid,name:n,photo:photo||"",about:ab.value.trim(),updatedAt:FV.serverTimestamp(),lastSeen:FV.serverTimestamp()},{merge:true})
      .then(function(){if(ctx.onName)ctx.onName(n);ok.textContent="✓ "+t("saved");}).catch(oops).then(function(){sv.disabled=false;});};
    box.appendChild(el("label",{class:"xlab"},t("name"),nm));box.appendChild(el("label",{class:"xlab"},t("about"),ab));box.appendChild(el("div",{class:"xrow"},sv,ok));}

  // ---------- overlay helper ----------
  var ovEl=null,ovRedraw=null,ovCleanup=[];
  function overlay(){closeOv(false,true);ovEl=el("div",{class:"wa-ov","data-noi18n":""});document.body.appendChild(ovEl);document.body.style.overflow="hidden";
    try{if(!(history.state&&history.state.waov))history.pushState({waov:1},"");}catch(e){}return ovEl;}
  function closeOv(fromPop,swap){ovCleanup.splice(0).forEach(function(f){try{f();}catch(e){}});if(ovEl){ovEl.remove();ovEl=null;document.body.style.overflow="";
      if(!fromPop&&!swap)try{if(history.state&&history.state.waov)history.back();}catch(e){}}openCid=null;ovRedraw=null;openHeader=null;}
  window.addEventListener("popstate",function(){if(ovEl)closeOv(true);});
  var openHeader=null;function refreshOpenHeader(){if(openHeader)openHeader();if(ovRedraw)ovRedraw();}

  // ---------- one-to-one conversation ----------
  function openChat(ouid){var cid=cidFor(me.uid,ouid),ref=q("chats").doc(cid);var ov=overlay();openCid=cid;
    var o=prof(ouid);var stat=el("span");var whoAv=el("div");
    var hd=el("div",{class:"wa-hd"},el("button",{class:"ib",type:"button","aria-label":"back",onclick:function(){closeOv();}},IC("back")),whoAv,
      el("div",{class:"who",onclick:function(){profileView(ouid);}},el("b",null,o.name||"—"),stat),
      el("button",{class:"ib",type:"button",title:t("videoCall"),onclick:function(){startCall(ouid,"video");}},IC("video")),
      el("button",{class:"ib",type:"button",title:t("voiceCall"),onclick:function(){startCall(ouid,"audio");}},IC("phone",20)),
      el("button",{class:"ib",type:"button",title:"⋮","aria-label":t("clear"),onclick:function(){if(confirm(t("clear")+" — "+t("sure"))){var u={};u["cleared."+me.uid]=FV.serverTimestamp();ensureChat().then(function(){return ref.update(u);}).catch(oops);}}},IC("dots")));
    var body=el("div",{class:"wa-body"});var prog=el("div",{class:"wa-prog",hidden:true});
    ov.appendChild(hd);ov.appendChild(body);ov.appendChild(prog);
    var chatDoc=null;
    openHeader=function(){o=prof(ouid);hd.querySelector(".who b").textContent=o.name||"—";whoAv.innerHTML="";whoAv.appendChild(avatar(o,"sm"));
      var c=chats.filter(function(x){return x.id===cid;})[0]||chatDoc;var ty=c&&c.typing&&ms(c.typing[ouid])>Date.now()-6000;
      stat.textContent=ty?t("typing"):isOnline(o)?t("online"):(o.lastSeen?t("lastSeen")+" "+when(o.lastSeen):"");};
    openHeader();
    var exists=false;
    function ensureChat(){if(exists)return Promise.resolve();var m=[me.uid,ouid].sort();var r={};r[me.uid]=FV.serverTimestamp();
      return ref.get().then(function(s){if(s.exists)return;return ref.set({members:m,updatedAt:FV.serverTimestamp(),read:r});}).then(function(){exists=true;});}
    ovCleanup.push(ref.onSnapshot(function(s){exists=s.exists;chatDoc=s.exists?s.data({serverTimestamps:"estimate"}):null;openHeader&&openHeader();paintTicks();if(exists&&!s.metadata.hasPendingWrites)listen();},function(){}));
    // composer
    var comp=composer({onText:function(txt){return ensureChat().then(function(){return sendMsg(cid,{type:"text",text:txt});});},
      onFile:function(f,kind){return ensureChat().then(function(){return sendMedia(cid,f,kind,prog);});},
      onTyping:function(){if(!exists)return;var u={};u["typing."+me.uid]=FV.serverTimestamp();ref.update(u).catch(function(){});}},true);
    ov.appendChild(comp);
    var msgs=[],first=true,lastRead=0;
    function markRead(){if(!exists||document.hidden)return;var lm=msgs.length?ms(msgs[msgs.length-1].createdAt):0;if(lm<=lastRead)return;lastRead=lm;var u={};u["read."+me.uid]=FV.serverTimestamp();ref.update(u).catch(function(){});}
    var vis=function(){if(!document.hidden)markRead();};document.addEventListener("visibilitychange",vis);ovCleanup.push(function(){document.removeEventListener("visibilitychange",vis);});
    function paintTicks(){var rd=chatDoc&&chatDoc.read&&ms(chatDoc.read[ouid]);body.querySelectorAll(".tk").forEach(function(k){var at=Number(k.dataset.at);var seen=rd&&at&&at<=rd;k.textContent=seen?"✓✓":"✓";k.classList.toggle("seen",!!seen);});}
    var listening=false;
    function listen(){if(listening)return;listening=true;
    ovCleanup.push(ref.collection("messages").orderBy("createdAt","desc").limit(150).onSnapshot(function(s){
      var atBottom=body.scrollHeight-body.scrollTop-body.clientHeight<80;
      msgs=s.docs.map(function(d){var x=d.data({serverTimestamps:"estimate"});x.id=d.id;x.ref=d.ref;return x;}).reverse();
      var cl=chatDoc&&chatDoc.cleared&&ms(chatDoc.cleared[me.uid]);
      body.innerHTML="";body.appendChild(el("div",{class:"wa-sys"},t("private")+" · "+t("expires")));
      var lastDay="";msgs.forEach(function(m){if(cl&&ms(m.createdAt)<=cl)return;var d=ts(m.createdAt)||new Date();var dk=d.toDateString();
        if(dk!==lastDay){lastDay=dk;body.appendChild(el("div",{class:"wa-sys"},num(d.toLocaleDateString(L==="bn"?"bn-BD":L,{weekday:"short",day:"numeric",month:"short",year:"numeric"}))));}
        body.appendChild(bubble(m,cid,false));});
      paintTicks();
      if(first||atBottom||s.docChanges().some(function(c){return c.type==="added"&&c.doc.data().uid===me.uid;}))body.scrollTop=body.scrollHeight;
      first=false;markRead();cleanupExpired(cid,msgs);},function(e){listening=false;console.error(e);}));}
    body.appendChild(el("div",{class:"wa-sys"},t("private")+" · "+t("expires")));}

  function sendMsg(cid,m){var ref=q("chats").doc(cid);m.uid=me.uid;m.createdAt=FV.serverTimestamp();
    var mref=m._id?ref.collection("messages").doc(m._id):ref.collection("messages").doc();delete m._id;
    return mref.set(m).then(function(){var u={updatedAt:FV.serverTimestamp(),last:{uid:me.uid,type:m.type,text:(m.text||"").slice(0,120),at:FV.serverTimestamp(),call:m.call||null}};u["read."+me.uid]=FV.serverTimestamp();u["typing."+me.uid]=null;
      return ref.update(u).then(function(){if(m.type!=="sys"&&m.type!=="call")pushRing({chat:cid});});});}

  // ---------- media ----------
  function blobToDataURL(b){return new Promise(function(res,rej){var r=new FileReader();r.onload=function(){res(r.result);};r.onerror=rej;r.readAsDataURL(b);});}
  function shrink(file,max,qual){return new Promise(function(res,rej){var img=new Image(),u=URL.createObjectURL(file);
    img.onload=function(){var w=img.naturalWidth,h=img.naturalHeight,s=Math.min(1,max/Math.max(w,h));var c=document.createElement("canvas");c.width=Math.round(w*s);c.height=Math.round(h*s);
      c.getContext("2d").drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(u);c.toBlob(function(b){b?res(b):rej(new Error("img"));},"image/jpeg",qual);};
    img.onerror=function(){URL.revokeObjectURL(u);rej(new Error("img"));};img.src=u;});}
  function b64(buf){var u=new Uint8Array(buf),s="",CH=0x8000;for(var i=0;i<u.length;i+=CH)s+=String.fromCharCode.apply(null,u.subarray(i,i+CH));return btoa(s);}
  function sendMedia(cid,file,kind,prog){
    var p=Promise.resolve(file),thumb=Promise.resolve("");
    if(kind==="image"&&!/gif$/.test(file.type)){p=shrink(file,1600,0.82);thumb=shrink(file,40,0.5).then(blobToDataURL).catch(function(){return "";});}
    return Promise.all([p,thumb]).then(function(r){var b=r[0];if(b.size>MAXB){alert(t("tooBig"));return;}
      return b.arrayBuffer().then(function(buf){var n=Math.max(1,Math.ceil(buf.byteLength/PART)),ref=q("chats").doc(cid),mid=ref.collection("messages").doc().id,mime=b.type||file.type||"application/octet-stream";
        prog.hidden=false;var i=0;
        function next(){if(i>=n)return Promise.resolve();prog.textContent="⬆ "+t("sending")+" "+num(Math.round(i/n*100))+"%";
          var part=b64(buf.slice(i*PART,(i+1)*PART));var k=i;i++;
          return ref.collection("blobs").doc(mid+"_"+k).set({uid:me.uid,d:part,i:k,n:n,mid:mid,mime:mime,createdAt:FV.serverTimestamp()}).then(next);}
        return next().then(function(){return sendMsg(cid,{_id:mid,type:kind,text:"",media:{n:n,mime:mime,name:(file.name||"").slice(0,120),size:b.size,thumb:r[1]||""}});});
      });}).then(function(){prog.hidden=true;},function(e){prog.hidden=true;oops(e);});}
  var cache={};
  function loadMedia(cid,m){var key=cid+"/"+m.id;if(cache[key])return cache[key];
    var ref=q("chats").doc(cid),n=(m.media&&m.media.n)||1,jobs=[];
    for(var i=0;i<n;i++)jobs.push(ref.collection("blobs").doc(m.id+"_"+i).get());
    cache[key]=Promise.all(jobs).then(function(ss){var s="";ss.forEach(function(x){if(!x.exists)throw new Error("missing");s+=x.data().d;});
      return fetch("data:"+(m.media.mime||"application/octet-stream")+";base64,"+s).then(function(r){return r.blob();});})
      .then(function(b){return URL.createObjectURL(b);});
    cache[key].catch(function(){delete cache[key];});return cache[key];}
  function isExpired(m){return ["image","video","audio","file"].indexOf(m.type)>=0&&ms(m.createdAt)&&ms(m.createdAt)<Date.now()-KEEP;}
  var cleaned={};
  function cleanupExpired(cid,msgs){msgs.forEach(function(m){if(!isExpired(m)||cleaned[m.id])return;cleaned[m.id]=1;var ref=q("chats").doc(cid),n=(m.media&&m.media.n)||1,b=db.batch();
      for(var i=0;i<n;i++)b.delete(ref.collection("blobs").doc(m.id+"_"+i));b.delete(m.ref);b.commit().catch(function(e){console.warn("cleanup",e);});});}
  function fmtSize(n){return n>1048576?(n/1048576).toFixed(1)+" MB":Math.max(1,Math.round(n/1024))+" KB";}

  function bubble(m,cid,group){var mine=m.uid===me.uid;var d=ts(m.createdAt);
    if(m.type==="sys")return el("div",{class:"wa-sys"},sysText(m));
    var b=el("div",{class:"wa-m"+(mine?" me":"")+(m.type==="call"?" call":"")});
    if(group&&!mine)b.appendChild(el("div",{class:"au"},(prof(m.uid).name!=="…"?prof(m.uid).name:m.name)||"—"));
    if(m.type==="text")b.appendChild(el("div",{class:"tx"},m.text));
    else if(m.type==="call"){var c=m.call||{};var lbl=c.status==="missed"?t("missed"):c.status==="declined"?t("declined"):t(c.kind==="video"?"videoCall":"voiceCall");
      b.appendChild(el("div",{class:"tx"},el("span",{style:"font-size:1.3rem"},c.kind==="video"?"🎥":"📞"),el("div",null,el("b",null,lbl),c.dur?el("div",{class:"q-sub"},num(Math.floor(c.dur/60))+":"+num(String(c.dur%60).padStart(2,"0"))):null),
        c.room?(activeRoom(cid)&&activeRoom(cid).id===c.room?el("button",{class:"xbtn sm acc",type:"button",style:"margin-inline-start:auto",onclick:function(){joinRoom(c.room);}},t("join")):null)
          :el("button",{class:"xbtn sm",type:"button",style:"margin-inline-start:auto",onclick:function(){startCall(mine?ctxOther(cid):m.uid,c.kind||"audio");}},c.kind==="video"?"🎥":"📞")));
      if(c.room)b.querySelector("b").textContent=t("gCall")+" · "+t(c.kind==="video"?"videoCall":"voiceCall");}
    else if(isExpired(m))b.appendChild(el("div",{class:"ex"},"⌛ "+t("expired")));
    else{var md=m.media||{};var slot=el("div");b.appendChild(slot);
      if(m.type==="image"){var im=el("img",{class:"ph",alt:"",src:md.thumb||"data:image/gif;base64,R0lGODlhAQABAAAAACw=",style:md.thumb?"filter:blur(6px)":""});slot.appendChild(im);
        loadMedia(cid,m).then(function(u){im.src=u;im.style.filter="";im.onclick=function(){viewImage(u);};}).catch(function(){slot.innerHTML="";slot.appendChild(el("div",{class:"ex"},"⌛ "+t("expired")));});}
      else if(m.type==="audio"){var bt=el("button",{class:"xbtn sm",type:"button"},"▶ "+t("audio"));slot.appendChild(bt);
        bt.onclick=function(){bt.disabled=true;loadMedia(cid,m).then(function(u){var a=el("audio",{controls:true,src:u,autoplay:true});slot.innerHTML="";slot.appendChild(a);}).catch(function(){bt.textContent="⌛ "+t("expired");});};}
      else{var isV=m.type==="video";var fc=el("div",{class:"wa-fc"},el("span",{class:"ic"},isV?"🎥":"📄"),el("div",{style:"min-width:0"},el("div",{style:"font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:170px"},md.name||t(m.type)),el("div",{class:"q-sub"},fmtSize(md.size||0))));
        var ob=el("button",{class:"xbtn sm acc",type:"button"},isV?"▶":"⬇");fc.appendChild(ob);slot.appendChild(fc);
        ob.onclick=function(){ob.disabled=true;ob.textContent="…";loadMedia(cid,m).then(function(u){if(isV){slot.innerHTML="";slot.appendChild(el("video",{controls:true,src:u,autoplay:true,playsinline:true}));}
          else{var a=el("a",{href:u,download:md.name||"file"});document.body.appendChild(a);a.click();a.remove();ob.disabled=false;ob.textContent="⬇";}}).catch(function(){ob.textContent="⌛";});};}
      if(m.text)b.appendChild(el("div",{class:"tx"},m.text));}
    var ft=el("div",{class:"ft"},d?hm(d):"…");if(mine&&!group)ft.appendChild(el("span",{class:"tk","data-at":String(ms(m.createdAt))},"✓"));b.appendChild(ft);
    // long-press / right-click menu
    function menu(e){e.preventDefault();var items=[];if(m.type==="text")items.push([t("copy"),function(){try{navigator.clipboard.writeText(m.text);}catch(x){}}]);
      if(mine||(group===true&&ctx.isAdmin))items.push(["🗑 "+t("deleteAll"),function(){if(!confirm(t("deleteAll")+" — "+t("sure")))return;
        if(group===true)return m.ref.delete().catch(oops);var bt=db.batch(),n=(m.media&&m.media.n)||0;for(var i=0;i<n;i++)bt.delete(q("chats").doc(cid).collection("blobs").doc(m.id+"_"+i));bt.delete(m.ref);bt.commit().catch(oops);}]);
      if(!items.length)return;showMenu(b,items);}
    b.addEventListener("contextmenu",menu);var lp=null;b.addEventListener("touchstart",function(e){lp=setTimeout(function(){menu(e);},550);},{passive:false});
    ["touchend","touchmove","touchcancel"].forEach(function(ev){b.addEventListener(ev,function(){clearTimeout(lp);});});
    return b;}
  function ctxOther(cid){var p=cid.split("_");return p[0]===me.uid?p[1]:p[0];}
  function showMenu(anchor,items){var m=el("div",{class:"wa-menu",style:"position:fixed;bottom:auto;top:30%;left:50%;transform:translateX(-50%)"});
    items.forEach(function(it){m.appendChild(el("button",{type:"button",onclick:function(){m.remove();it[1]();}},it[0]));});
    m.appendChild(el("button",{type:"button",onclick:function(){m.remove();}},t("cancel")));
    (ovEl||document.body).appendChild(m);setTimeout(function(){document.addEventListener("click",function h(ev){if(!m.contains(ev.target)){m.remove();document.removeEventListener("click",h,true);}},true);},0);}
  function viewImage(u){var v=el("div",{class:"wa-ov",style:"background:#000;z-index:350;align-items:center;justify-content:center",onclick:function(){v.remove();}},
    el("img",{src:u,style:"max-width:100%;max-height:100%;object-fit:contain"}));document.body.appendChild(v);}

  // ---------- composer (text, attach, voice) ----------
  function composer(o,allowMedia){var wrap=el("div",{class:"wa-comp",style:"position:relative"});
    var ta=el("textarea",{rows:"1",maxlength:"4000",placeholder:t("msg")});
    var att=el("button",{class:"wa-rb",type:"button",title:"📎","aria-label":t("gallery")},IC("clip"));var go=el("button",{class:"wa-rb go",type:"button",title:t("send"),"aria-label":t("send")},IC(allowMedia?"mic":"send",20));
    var fiG=el("input",{type:"file",accept:"image/*,video/*",hidden:true}),fiC=el("input",{type:"file",accept:"image/*",capture:"environment",hidden:true}),fiD=el("input",{type:"file",hidden:true});
    [fiG,fiC,fiD].forEach(function(fi){fi.onchange=function(){Array.prototype.slice.call(fi.files||[]).forEach(function(f){var k=/^image\//.test(f.type)?"image":/^video\//.test(f.type)?"video":/^audio\//.test(f.type)?"audio":"file";
      if(k!=="image"&&f.size>MAXB){alert(t("tooBig"));return;}o.onFile(f,k);});fi.value="";};wrap.appendChild(fi);});
    att.onclick=function(e){e.stopPropagation();var ex=wrap.querySelector(".wa-menu");if(ex){ex.remove();return;}
      var m=el("div",{class:"wa-menu"},el("button",{type:"button",onclick:function(){m.remove();fiG.click();}},"🖼 "+t("gallery")),el("button",{type:"button",onclick:function(){m.remove();fiC.click();}},"📷 "+t("camera")),
        el("button",{type:"button",onclick:function(){m.remove();fiD.click();}},"📄 "+t("document")));wrap.appendChild(m);
      setTimeout(function(){document.addEventListener("click",function h(){m.remove();document.removeEventListener("click",h);});},0);};
    function sync(){ta.style.height="auto";ta.style.height=Math.min(120,ta.scrollHeight)+"px";if(allowMedia){var w=ta.value.trim()?"send":"mic";if(go.dataset.ic!==w){go.dataset.ic=w;setIco(go,w);}}}
    var lastTy=0;ta.oninput=function(){sync();if(o.onTyping&&Date.now()-lastTy>4000){lastTy=Date.now();o.onTyping();}};
    function send(){var v=ta.value.trim();if(!v)return;ta.value="";sync();Promise.resolve(o.onText(v)).catch(function(e){ta.value=v;sync();oops(e);});ta.focus();}
    ta.onkeydown=function(e){if(e.key==="Enter"&&!e.shiftKey&&!/Android|iPhone|iPad/.test(navigator.userAgent)){e.preventDefault();send();}};
    var rec=null,chunks=[],recStart=0,recTimer=null,recBar=null;
    function startRec(){navigator.mediaDevices.getUserMedia({audio:true}).then(function(st){chunks=[];var mt=["audio/webm;codecs=opus","audio/mp4","audio/ogg"].filter(function(x){return window.MediaRecorder&&MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(x);})[0];
        rec=new MediaRecorder(st,mt?{mimeType:mt,audioBitsPerSecond:32000}:undefined);rec.ondataavailable=function(e){if(e.data&&e.data.size)chunks.push(e.data);};
        rec.onstop=function(){st.getTracks().forEach(function(x){x.stop();});clearInterval(recTimer);if(recBar){recBar.remove();recBar=null;}ta.hidden=false;att.hidden=false;
          if(rec._cancel||!chunks.length){rec=null;sync();return;}var b=new Blob(chunks,{type:rec.mimeType||"audio/webm"});rec=null;sync();
          var f=new File([b],"voice-"+Date.now()+"."+(/mp4/.test(b.type)?"m4a":/ogg/.test(b.type)?"ogg":"webm"),{type:b.type});o.onFile(f,"audio");};
        rec.start();recStart=Date.now();ta.hidden=true;att.hidden=true;go.dataset.ic="send";setIco(go,"send");
        var tm=el("span",{style:"flex:1;color:#e53935;font-weight:600"},"● "+t("recording")+" 0:00");
        recBar=el("div",{style:"display:flex;align-items:center;gap:8px;flex:1"},el("button",{class:"wa-rb",type:"button",onclick:function(){rec._cancel=true;rec.stop();}},"🗑"),tm);wrap.insertBefore(recBar,go);
        recTimer=setInterval(function(){var s=Math.floor((Date.now()-recStart)/1000);tm.textContent="● "+t("recording")+" "+num(Math.floor(s/60)+":"+String(s%60).padStart(2,"0"));if(s>=300)rec.stop();},500);})
      .catch(function(){alert(t("noMedia"));});}
    go.onclick=function(){if(rec){rec.stop();return;}if(ta.value.trim()||!allowMedia)send();else startRec();};
    wrap.appendChild(allowMedia?att:el("span"));wrap.appendChild(ta);wrap.appendChild(go);return wrap;}

  // ---------- community group chat (same look) ----------
  function openGroup(){var ov=overlay();var cfg=ctx.getCfg()||{};
    ov.appendChild(el("div",{class:"wa-hd"},el("button",{class:"ib",type:"button","aria-label":"back",onclick:function(){closeOv();}},IC("back")),el("div",{class:"wa-av sm"},IC("users",20)),el("div",{class:"who"},el("b",null,t("group")),el("span",null,t("groupSub")))));
    var body=el("div",{class:"wa-body"});ov.appendChild(body);
    var locked=!!cfg.chatLocked&&!ctx.isAdmin;
    if(cfg.chatLocked)ov.appendChild(el("div",{class:"wa-prog"},t("locked")));
    if(!locked)ov.appendChild(composer({onText:function(txt){return q("messages").add({uid:me.uid,name:ctx.myName(),photo:"",text:txt,createdAt:FV.serverTimestamp()});}},false));
    var first=true;
    ovCleanup.push(q("messages").orderBy("createdAt","desc").limit(150).onSnapshot(function(s){var atBottom=body.scrollHeight-body.scrollTop-body.clientHeight<80;body.innerHTML="";
      var docs=s.docs.slice().reverse();if(!docs.length)body.appendChild(el("div",{class:"wa-sys"},X.T("c.emptyChat")));
      docs.forEach(function(d){var m=d.data({serverTimestamps:"estimate"});m.id=d.id;m.ref=d.ref;m.type="text";body.appendChild(bubble(m,null,true));});
      if(first||atBottom)body.scrollTop=body.scrollHeight;first=false;},function(e){body.textContent=t("error");console.error(e);}));}

  // ---------- calls (WebRTC, signalling through Firestore) ----------
  var ac=null,ringT=null;
  function beep(n){try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();var o=ac.createOscillator(),g=ac.createGain();o.frequency.value=n===1?880:440;o.connect(g);g.connect(ac.destination);
    g.gain.setValueAtTime(0.0001,ac.currentTime);g.gain.exponentialRampToValueAtTime(0.25,ac.currentTime+0.02);g.gain.exponentialRampToValueAtTime(0.0001,ac.currentTime+(n===1?0.18:0.9));o.start();o.stop(ac.currentTime+(n===1?0.2:1));}catch(e){}}
  function ring(on,incomingRing){clearInterval(ringT);ringT=null;if(!on)return;var f=function(){beep(incomingRing?2:3);if(incomingRing&&navigator.vibrate)navigator.vibrate([400,200,400]);};f();ringT=setInterval(f,incomingRing?1800:3000);}
  function callUI(o){var p=prof(o.peer);var v=o.kind==="video";
    var w=el("div",{class:"wa-call","data-noi18n":""});var rv=el("video",{class:"rv",autoplay:true,playsinline:true,hidden:true});var lv=el("video",{class:"lv",autoplay:true,playsinline:true,muted:true,hidden:true});lv.muted=true;
    var ra=el("audio",{autoplay:true});
    var st=el("span",null,o.status);var top=el("div",{class:"top"},avatar(p,"xl"),el("b",null,p.name||"—"),st);
    var ctl=el("div",{class:"ctl"});w.appendChild(rv);w.appendChild(lv);w.appendChild(ra);w.appendChild(top);w.appendChild(ctl);document.body.appendChild(w);
    return {w:w,rv:rv,lv:lv,ra:ra,st:st,ctl:ctl,top:top};}
  // call controls: crisp line icons instead of emoji
  var CI={"🎙":["M12 3.2a3 3 0 0 1 3 3V12a3 3 0 0 1-6 0V6.2a3 3 0 0 1 3-3z","M5.6 11.2a6.4 6.4 0 0 0 12.8 0","M12 17.6V21","M8.6 21h6.8"],
    "🔇":["M12 3.2a3 3 0 0 1 3 3V12a3 3 0 0 1-6 0V6.2a3 3 0 0 1 3-3z","M5.6 11.2a6.4 6.4 0 0 0 12.8 0","M12 17.6V21","M8.6 21h6.8","M4 4l16 16"],
    "📷":["M4.2 7h10.6a1.7 1.7 0 0 1 1.7 1.7v6.6a1.7 1.7 0 0 1-1.7 1.7H4.2a1.7 1.7 0 0 1-1.7-1.7V8.7A1.7 1.7 0 0 1 4.2 7z","M16.5 10.4l5-2.9v9l-5-2.9"],
    "🚫":["M4.2 7h10.6a1.7 1.7 0 0 1 1.7 1.7v6.6a1.7 1.7 0 0 1-1.7 1.7H4.2a1.7 1.7 0 0 1-1.7-1.7V8.7A1.7 1.7 0 0 1 4.2 7z","M16.5 10.4l5-2.9v9l-5-2.9","M3 3l18 18"],
    "🔄":["M4.5 11.5a7.5 7.5 0 0 1 13-4.8L19.5 9","M19.5 4.2V9h-4.8","M19.5 12.5a7.5 7.5 0 0 1-13 4.8L4.5 15","M4.5 19.8V15h4.8"]};
  var PH="M6.6 3.5h3.1l1.7 4.6-2.2 1.4a10.6 10.6 0 0 0 5.3 5.3l1.4-2.2 4.6 1.7v3.1a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z";
  function callIco(e){var NS="http://www.w3.org/2000/svg",s=document.createElementNS(NS,"svg");s.setAttribute("viewBox","0 0 24 24");s.setAttribute("width","26");s.setAttribute("height","26");s.setAttribute("aria-hidden","true");
    function path(d,fill,tr){var p=document.createElementNS(NS,"path");p.setAttribute("d",d);if(fill){p.setAttribute("fill","currentColor");p.setAttribute("stroke","none");}else{p.setAttribute("fill","none");p.setAttribute("stroke","currentColor");p.setAttribute("stroke-width","1.9");p.setAttribute("stroke-linecap","round");p.setAttribute("stroke-linejoin","round");}if(tr)p.setAttribute("transform",tr);s.appendChild(p);}
    if(e==="✆")path(PH,true,"rotate(135 12 12)");else if(e==="📞")path(PH,true);else if(e==="🎥"){path("M3.5 7.2h11a1.6 1.6 0 0 1 1.6 1.6v6.4a1.6 1.6 0 0 1-1.6 1.6h-11a1.6 1.6 0 0 1-1.6-1.6V8.8a1.6 1.6 0 0 1 1.6-1.6z",true);path("M17.2 10.2l4.6-2.6v8.8l-4.6-2.6z",true);}
    else (CI[e]||[]).forEach(function(d){path(d);});return s;}
  function btn(icon,label,cls,fn){var b=el("button",{class:"wa-cb "+(cls||""),type:"button","aria-label":label,title:label,onclick:fn});b.appendChild(callIco(icon));
    b.setIco=function(e){b.textContent="";b.appendChild(callIco(e));};return {wrap:el("div",{class:"wa-cl"},b,el("span",null,label)),b:b};}
  function getMedia(kind,facing){return navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true},video:kind==="video"?{facingMode:facing||"user",width:{ideal:640},height:{ideal:480}}:false});}
  function newPC(c){var pc=new RTCPeerConnection({iceServers:ICE});
    pc.ontrack=function(e){var s=e.streams[0];if(c.kind==="video"&&e.track.kind==="video"){c.ui.rv.srcObject=s;c.ui.rv.hidden=false;c.ui.w.classList.add("vid");}c.ui.ra.srcObject=s;};
    pc.onconnectionstatechange=function(){var s=pc.connectionState;if(s==="connected"){connected(c);}else if(s==="failed"){c.ui.st.textContent=t("callFail");setTimeout(function(){hang("ended");},2500);}
      else if(s==="disconnected"){c.ui.st.textContent=t("connecting");}};
    var iceQ=[];c.addIce=function(cand){if(pc.remoteDescription&&pc.remoteDescription.type)pc.addIceCandidate(cand).catch(function(){});else iceQ.push(cand);};
    c.flushIce=function(){iceQ.splice(0).forEach(function(x){pc.addIceCandidate(x).catch(function(){});});};
    var mine=[];function put(x){c.ref.collection("ice").add({by:me.uid,c:JSON.stringify(x),t:Date.now()}).catch(function(){});}
    c.ready=function(){c.isReady=true;mine.splice(0).forEach(put);};if(!c.caller)c.isReady=true;
    pc.onicecandidate=function(e){if(!e.candidate)return;var j=e.candidate.toJSON();if(c.isReady)put(j);else mine.push(j);};
    return pc;}
  function listenIce(c){c.uns.push(c.ref.collection("ice").onSnapshot(function(s){s.docChanges().forEach(function(ch){if(ch.type!=="added")return;var d=ch.doc.data();if(d.by===me.uid)return;try{c.addIce(new RTCIceCandidate(JSON.parse(d.c)));}catch(e){}});},function(){}));}
  function controls(c){var ctl=c.ui.ctl;ctl.innerHTML="";
    var mu=btn("🎙",t("mute"),"",function(){var a=c.stream.getAudioTracks()[0];if(!a)return;a.enabled=!a.enabled;mu.b.classList.toggle("off",!a.enabled);mu.b.setIco(a.enabled?"🎙":"🔇");});ctl.appendChild(mu.wrap);
    if(c.kind==="video"){var cam=btn("📷",t("camOff"),"",function(){var v=c.stream.getVideoTracks()[0];if(!v)return;v.enabled=!v.enabled;cam.b.classList.toggle("off",!v.enabled);cam.b.setIco(v.enabled?"📷":"🚫");});ctl.appendChild(cam.wrap);
      var fl=btn("🔄",t("flip"),"",function(){c.facing=c.facing==="user"?"environment":"user";navigator.mediaDevices.getUserMedia({video:{facingMode:c.facing}}).then(function(ns){var nt=ns.getVideoTracks()[0];
        var snd=c.pc.getSenders().filter(function(s){return s.track&&s.track.kind==="video";})[0];if(snd)snd.replaceTrack(nt);c.stream.getVideoTracks().forEach(function(x){c.stream.removeTrack(x);x.stop();});c.stream.addTrack(nt);
        c.ui.lv.style.transform=c.facing==="user"?"scaleX(-1)":"none";}).catch(function(){});});ctl.appendChild(fl.wrap);}
    ctl.appendChild(btn("✆",t("end"),"red",function(){hang("ended");}).wrap);}
  function connected(c){if(c.on)return;c.on=Date.now();ring(false);c.ui.st.textContent="00:00";
    c.tick=setInterval(function(){var s=Math.floor((Date.now()-c.on)/1000);c.ui.st.textContent=num(String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0"));},1000);}
  function startCall(ouid,kind){if(callObj)return;if(me&&me.isAnonymous){if(ctx&&ctx.needGoogle)ctx.needGoogle();return;}if(!window.RTCPeerConnection||!navigator.mediaDevices){alert(t("callFail"));return;}
    var cid=cidFor(me.uid,ouid);var ref=q("calls").doc();var c=callObj={ref:ref,peer:ouid,kind:kind,caller:true,uns:[],cid:cid,facing:"user"};
    c.ui=callUI({peer:ouid,kind:kind,status:t("calling")});c.ui.ctl.appendChild(btn("✆",t("end"),"red",function(){hang(c.on?"ended":"cancel");}).wrap);
    getMedia(kind).then(function(st){if(callObj!==c){st.getTracks().forEach(function(x){x.stop();});return;}c.stream=st;if(kind==="video"){c.ui.lv.srcObject=st;c.ui.lv.hidden=false;}
      var pc=c.pc=newPC(c);st.getTracks().forEach(function(tr){pc.addTrack(tr,st);});
      return pc.createOffer().then(function(of){return pc.setLocalDescription(of).then(function(){
        return ref.set({from:me.uid,to:ouid,type:kind,status:"ringing",offer:{type:of.type,sdp:of.sdp},createdAt:FV.serverTimestamp(),chat:cid});});})
      .then(function(){if(callObj!==c)return;pushRing({call:ref.id});c.ready();ring(true,false);controls(c);c.ui.st.textContent=t("calling");listenIce(c);
        c.uns.push(ref.onSnapshot(function(s){var d=s.data();if(!d||callObj!==c)return;
          if(d.answer&&!c.answered){c.answered=true;c.ui.st.textContent=t("connecting");ring(false);pc.setRemoteDescription(new RTCSessionDescription(d.answer)).then(c.flushIce).catch(console.error);}
          if(d.status==="declined"||d.status==="busy"){c.ui.st.textContent=d.status==="busy"?t("busy"):t("declined");hang(d.status,true);}
          else if(d.status==="ended")hang("ended",true);},function(){}));
        c.timeout=setTimeout(function(){if(callObj===c&&!c.answered)hang("missed");},45000);});})
    .catch(function(e){console.error(e);alert(t("noMedia"));hang("cancel");});}
  function incoming(id,d){var ref=q("calls").doc(id);var c=callObj={ref:ref,peer:d.from,kind:d.type,caller:false,uns:[],cid:d.chat,facing:"user"};
    c.ui=callUI({peer:d.from,kind:d.type,status:t(d.type==="video"?"incomingVideo":"incoming")});ring(true,true);
    notify(prof(d.from).name,t(d.type==="video"?"incomingVideo":"incoming"),"am-call");
    var ctl=c.ui.ctl;ctl.appendChild(btn("✆",t("decline"),"red",function(){ref.update({status:"declined",endedAt:FV.serverTimestamp()}).catch(function(){});hang("declined",true);}).wrap);
    var acc=btn(d.type==="video"?"🎥":"📞",t("accept"),"green pulse",function(){acc.b.disabled=true;ring(false);c.ui.st.textContent=t("connecting");
      getMedia(d.type).then(function(st){c.stream=st;if(d.type==="video"){c.ui.lv.srcObject=st;c.ui.lv.hidden=false;}var pc=c.pc=newPC(c);st.getTracks().forEach(function(tr){pc.addTrack(tr,st);});
        return pc.setRemoteDescription(new RTCSessionDescription(d.offer)).then(function(){c.flushIce();return pc.createAnswer();}).then(function(an){return pc.setLocalDescription(an).then(function(){
          return ref.update({answer:{type:an.type,sdp:an.sdp},status:"accepted",acceptedAt:FV.serverTimestamp()});});}).then(function(){controls(c);listenIce(c);});})
      .catch(function(e){console.error(e);alert(t("noMedia"));ref.update({status:"declined"}).catch(function(){});hang("declined",true);});});
    c.acc=acc;ctl.appendChild(acc.wrap);if(autoAnswer===id){autoAnswer=null;setTimeout(function(){acc.b.click();},300);}
    c.uns.push(ref.onSnapshot(function(s){var x=s.data();if(callObj!==c)return;if(!x||x.status==="ended"||x.status==="missed"||x.status==="cancel"){hang("ended",true);}},function(){}));
    c.timeout=setTimeout(function(){if(callObj===c&&!c.pc)hang("missed",true);},50000);}
  function hang(why,remote){var c=callObj;if(!c)return;callObj=null;ring(false);clearTimeout(c.timeout);clearInterval(c.tick);
    c.uns.splice(0).forEach(function(f){try{f();}catch(e){}});
    try{c.stream&&c.stream.getTracks().forEach(function(x){x.stop();});}catch(e){}try{c.pc&&c.pc.close();}catch(e){}
    var dur=c.on?Math.round((Date.now()-c.on)/1000):0;
    if(!remote)c.ref.update({status:why==="cancel"?"cancel":why==="missed"?"missed":"ended",endedAt:FV.serverTimestamp()}).catch(function(){});
    if(c.caller&&!c.answered&&(why==="missed"||why==="cancel"))pushRing({call:c.ref.id,end:true});
    if(c.caller){var st=why==="missed"||why==="cancel"?"missed":why==="declined"||why==="busy"?"declined":"done";
      sendMsg(c.cid,{type:"call",text:"",call:{kind:c.kind,status:st,dur:dur}}).catch(function(e){console.warn(e);});
      // tidy the signalling data a little later
      setTimeout(function(){c.ref.collection("ice").get().then(function(s){var b=db.batch();s.docs.forEach(function(d){b.delete(d.ref);});b.delete(c.ref);return b.commit();}).catch(function(){});},4000);}
    setTimeout(function(){c.ui.w.remove();},why==="ended"||why==="cancel"?300:1500);}

  // =====================================================================
  // GROUPS (WhatsApp-style): create, chat, media, members, admins, leave
  // =====================================================================
  function chatById(id){return chats.filter(function(x){return x.id===id;})[0]||null;}
  function sysText(m){var x=String(m.text||"").split(":"),who=m.uid===me.uid?t("you"):prof(m.uid).name;
    var names=function(l){return String(l||"").split(",").filter(Boolean).map(function(u){return u===me.uid?t("you"):prof(u).name;}).join(", ");};
    if(x[0]==="created")return who+" "+t("sCreated");if(x[0]==="added")return who+" "+t("sAdded")+" "+names(x[1]);if(x[0]==="left")return who+" "+t("sLeft");
    if(x[0]==="removed")return who+" "+t("sRemoved")+" "+names(x[1]);if(x[0]==="renamed")return who+" "+t("sRenamed")+" “"+x.slice(1).join(":")+"”";return m.text||"";}
  function gAvatar(c,cls){if(c&&c.photo)return avatar({name:gname(c),photo:c.photo},cls);
    return el("div",{class:"wa-av "+(cls||""),style:"background:linear-gradient(135deg,#1e6a4e,#0e3a3b);color:#F7E2A6"},IC("users",cls==="xl"?50:cls==="sm"?18:22));}
  function activeRoom(cid){var r=null;Object.keys(rooms).forEach(function(k){var x=rooms[k];if(x.chat===cid&&x.active&&(x.in||[]).length&&Date.now()-ms(x.createdAt)<4*3600000)r=x;});return r;}
  // member picker (new group / add members)
  function pickMembers(title,exclude,label,onDone,withName){var ov=overlay();var sel=[];
    ov.appendChild(el("div",{class:"wa-hd"},el("button",{class:"ib",type:"button","aria-label":"back",onclick:closeOv},IC("back")),el("div",{class:"who"},el("b",null,title),el("span",null,t("pick")))));
    var nm=withName?el("input",{class:"xin",maxlength:"50",placeholder:t("groupName"),style:"margin-bottom:10px"}):null;
    var chips=el("div",{class:"wa-chips"});var srch=el("input",{class:"xin",placeholder:t("search"),style:"margin-top:10px"});var list=el("div",{class:"wa-list",style:"margin-top:10px"});
    var go=el("button",{class:"xbtn acc",type:"button",style:"width:100%;justify-content:center;padding:12px",disabled:true},label);
    var bd=el("div",{style:"flex:1;overflow-y:auto;padding:12px"},nm,chips,srch,list);ov.appendChild(bd);ov.appendChild(el("div",{class:"wa-comp"},go));
    function ok(){go.disabled=!sel.length||(withName&&!nm.value.trim());}
    function drawChips(){chips.innerHTML="";sel.forEach(function(u){chips.appendChild(el("span",null,prof(u).name));});ok();}
    function draw(){var f=srch.value.trim().toLowerCase();list.innerHTML="";
      var ps=Object.keys(profs).map(function(k){return profs[k];}).filter(function(p){return p.uid!==me.uid&&exclude.indexOf(p.uid)<0&&(!f||String(p.name||"").toLowerCase().indexOf(f)>=0);})
        .sort(function(a,b){return String(a.name).localeCompare(String(b.name));});
      if(!ps.length)list.appendChild(el("p",{class:"muted",style:"padding:14px;margin:0;text-align:center"},t("noMembers")));
      ps.forEach(function(p){var on=sel.indexOf(p.uid)>=0;var b=el("button",{class:"wa-item",type:"button","aria-pressed":String(on),onclick:function(){var i=sel.indexOf(p.uid);if(i>=0)sel.splice(i,1);else sel.push(p.uid);draw();drawChips();}},
        avatar(p,"",true),el("div",{class:"mid"},el("div",{class:"nm"},p.name||"—"),el("div",{class:"lm"},p.about||"")),el("span",{class:"wa-sel"},on?"✓":""));list.appendChild(b);});}
    srch.oninput=draw;if(nm)nm.oninput=ok;draw();ovRedraw=draw;
    go.onclick=function(){go.disabled=true;Promise.resolve(onDone(sel.slice(),nm?nm.value.trim():"")).catch(function(e){go.disabled=false;oops(e);});};}
  function newGroup(){pickMembers(t("newGroup"),[],t("create"),function(sel,name){var ref=q("chats").doc();var r={};r[me.uid]=FV.serverTimestamp();
      return ref.set({group:true,name:name.slice(0,50),photo:"",members:[me.uid].concat(sel),admins:[me.uid],createdBy:me.uid,updatedAt:FV.serverTimestamp(),read:r})
        .then(function(){return sendMsg(ref.id,{type:"sys",text:"created"});}).then(function(){openGChat(ref.id);});},true);}
  function openGChat(gid){var ref=q("chats").doc(gid);var ov=overlay();openCid=gid;var chatDoc=chatById(gid);
    var stat=el("span");var whoAv=el("div");var nameB=el("b",null,gname(chatDoc));
    var hd=el("div",{class:"wa-hd"},el("button",{class:"ib",type:"button","aria-label":"back",onclick:function(){closeOv();}},IC("back")),whoAv,
      el("div",{class:"who",onclick:function(){groupInfo(gid);}},nameB,stat),
      el("button",{class:"ib",type:"button",title:t("gCall")+" · "+t("videoCall"),onclick:function(){startGroupCall(gid,"video");}},IC("video")),
      el("button",{class:"ib",type:"button",title:t("gCall")+" · "+t("voiceCall"),onclick:function(){startGroupCall(gid,"audio");}},IC("phone",20)),
      el("button",{class:"ib",type:"button",title:t("info"),"aria-label":t("info"),onclick:function(){groupInfo(gid);}},IC("dots")));
    var banner=el("button",{class:"wa-join",type:"button",hidden:true},"📞 ",el("span",null,t("ongoing")));
    var body=el("div",{class:"wa-body"});var prog=el("div",{class:"wa-prog",hidden:true});
    ov.appendChild(hd);ov.appendChild(banner);ov.appendChild(body);ov.appendChild(prog);
    openHeader=function(){var c=chatById(gid)||chatDoc;if(c)chatDoc=c;nameB.textContent=gname(c);whoAv.innerHTML="";whoAv.appendChild(gAvatar(c,"sm"));
      var mem=(c&&c.members)||[];var ty=mem.filter(function(u){return u!==me.uid&&c.typing&&ms(c.typing[u])>Date.now()-6000;});
      stat.textContent=ty.length?prof(ty[0]).name+" "+t("typing"):mem.map(function(u){return u===me.uid?t("you"):prof(u).name;}).slice(0,6).join(", ")+(mem.length>6?" +"+num(mem.length-6):"");
      var ar=activeRoom(gid);banner.hidden=!(ar&&(!room||room.id!==ar.id));banner.onclick=function(){if(ar)joinRoom(ar.id);};};
    openHeader();
    ovCleanup.push(ref.onSnapshot(function(s){if(!s.exists){closeOv();return;}chatDoc=s.data({serverTimestamps:"estimate"});chatDoc.id=gid;if((chatDoc.members||[]).indexOf(me.uid)<0){closeOv();return;}openHeader&&openHeader();},function(){closeOv();}));
    ov.appendChild(composer({onText:function(txt){return sendMsg(gid,{type:"text",text:txt});},onFile:function(f,kind){return sendMedia(gid,f,kind,prog);},
      onTyping:function(){var u={};u["typing."+me.uid]=FV.serverTimestamp();ref.update(u).catch(function(){});}},true));
    var msgs=[],first=true,lastRead=0;
    function markRead(){if(document.hidden)return;var lm=msgs.length?ms(msgs[msgs.length-1].createdAt):0;if(lm<=lastRead)return;lastRead=lm;var u={};u["read."+me.uid]=FV.serverTimestamp();ref.update(u).catch(function(){});}
    var vis=function(){if(!document.hidden)markRead();};document.addEventListener("visibilitychange",vis);ovCleanup.push(function(){document.removeEventListener("visibilitychange",vis);});
    ovCleanup.push(ref.collection("messages").orderBy("createdAt","desc").limit(150).onSnapshot(function(s){var atBottom=body.scrollHeight-body.scrollTop-body.clientHeight<80;
      msgs=s.docs.map(function(d){var x=d.data({serverTimestamps:"estimate"});x.id=d.id;x.ref=d.ref;return x;}).reverse();
      var cl=chatDoc&&chatDoc.cleared&&ms(chatDoc.cleared[me.uid]);body.innerHTML="";body.appendChild(el("div",{class:"wa-sys"},t("gPrivate")+" · "+t("expires")));
      var lastDay="";msgs.forEach(function(m){if(cl&&ms(m.createdAt)<=cl)return;var d=ts(m.createdAt)||new Date();var dk=d.toDateString();
        if(dk!==lastDay){lastDay=dk;body.appendChild(el("div",{class:"wa-sys"},num(d.toLocaleDateString(L==="bn"?"bn-BD":L,{weekday:"short",day:"numeric",month:"short",year:"numeric"}))));}
        body.appendChild(bubble(m,gid,"g"));});
      if(first||atBottom||s.docChanges().some(function(c){return c.type==="added"&&c.doc.data().uid===me.uid;}))body.scrollTop=body.scrollHeight;first=false;markRead();cleanupExpired(gid,msgs);},
      function(e){console.warn(e);}));}
  function groupInfo(gid){var c=chatById(gid);if(!c)return;var ref=q("chats").doc(gid);var ov=overlay();var isAdm=(c.admins||[]).indexOf(me.uid)>=0;
    ov.appendChild(el("div",{class:"wa-hd"},el("button",{class:"ib",type:"button","aria-label":"back",onclick:function(){openGChat(gid);}},IC("back")),el("div",{class:"who"},el("b",null,t("info")))));
    var box=el("div",{class:"wa-pf"});ov.appendChild(el("div",{style:"flex:1;overflow-y:auto"},box));
    box.appendChild(gAvatar(c,"xl"));box.appendChild(el("b",{style:"font-size:1.3rem;text-align:center"},gname(c)));box.appendChild(el("div",{class:"q-sub"},num((c.members||[]).length)+" "+t("nMembers")));
    var row=el("div",{class:"xrow",style:"justify-content:center;flex-wrap:wrap"});box.appendChild(row);
    row.appendChild(el("button",{class:"xbtn",type:"button",onclick:function(){closeOv();startGroupCall(gid,"audio");}},"📞 "+t("voiceCall")));
    row.appendChild(el("button",{class:"xbtn",type:"button",onclick:function(){closeOv();startGroupCall(gid,"video");}},"🎥 "+t("videoCall")));
    if(isAdm){row.appendChild(el("button",{class:"xbtn",type:"button",onclick:function(){var n=prompt(t("groupName"),gname(c));if(n==null)return;n=n.trim().slice(0,50);if(!n||n===c.name)return;
        ref.update({name:n}).then(function(){return sendMsg(gid,{type:"sys",text:"renamed:"+n});}).then(function(){groupInfo(gid);}).catch(oops);}},"✎ "+t("rename")));
      row.appendChild(el("button",{class:"xbtn acc",type:"button",onclick:function(){pickMembers(t("addMem"),c.members||[],t("addMem"),function(sel){
        return ref.update({members:FV.arrayUnion.apply(FV,sel),updatedAt:FV.serverTimestamp()}).then(function(){return sendMsg(gid,{type:"sys",text:"added:"+sel.join(",")});}).then(function(){openGChat(gid);});});}},"＋ "+t("addMem")));}
    var list=el("div",{class:"wa-list",style:"width:100%;max-width:520px"});box.appendChild(list);
    (c.members||[]).slice().sort(function(a,b){return (a===me.uid?-1:b===me.uid?1:0)||String(prof(a).name).localeCompare(String(prof(b).name));}).forEach(function(u){var p=prof(u),adm=(c.admins||[]).indexOf(u)>=0;
      var r=el("div",{class:"wa-item",style:"cursor:default"},avatar(p,"sm",true),el("div",{class:"mid"},el("div",{class:"nm"},(u===me.uid?t("you"):p.name||"—"),adm?el("span",{class:"wa-badge"},t("admin")):null),el("div",{class:"lm"},p.about||"")));
      if(u!==me.uid){r.style.cursor="pointer";r.onclick=function(e){if(e.target.closest("button"))return;openChat(u);};}
      if(isAdm&&u!==me.uid){if(!adm)r.appendChild(el("button",{class:"xbtn sm",type:"button",onclick:function(){ref.update({admins:FV.arrayUnion(u)}).then(function(){groupInfo(gid);}).catch(oops);}},t("makeAdmin")));
        r.appendChild(el("button",{class:"xbtn sm",type:"button",onclick:function(){if(!confirm(t("remove")+" "+p.name+"? "+t("sure")))return;
          ref.update({members:FV.arrayRemove(u),admins:FV.arrayRemove(u),updatedAt:FV.serverTimestamp()}).then(function(){return sendMsg(gid,{type:"sys",text:"removed:"+u});}).then(function(){groupInfo(gid);}).catch(oops);}},"✕"));}
      list.appendChild(r);});
    box.appendChild(el("button",{class:"xbtn",type:"button",style:"color:#e53935;border-color:#e53935;margin-top:8px",onclick:function(){if(!confirm(t("leave")+" — "+t("sure")))return;leaveGroup(c);}},"⎋ "+t("leave")));}
  function leaveGroup(c){var ref=q("chats").doc(c.id);var rest=(c.members||[]).filter(function(u){return u!==me.uid;});var isAdm=(c.admins||[]).indexOf(me.uid)>=0;
    var p=sendMsg(c.id,{type:"sys",text:"left"}).catch(function(){});
    p.then(function(){if(!isAdm)return ref.update({members:FV.arrayRemove(me.uid),updatedAt:FV.serverTimestamp()});
      if(!rest.length)return ref.delete();var adm=(c.admins||[]).filter(function(u){return u!==me.uid;});if(!adm.length)adm=[rest[0]];
      return ref.update({members:rest,admins:adm,updatedAt:FV.serverTimestamp()});}).then(function(){closeOv();}).catch(oops);}

  // =====================================================================
  // GROUP CALLS (voice / video, up to 8 people, everyone connects directly)
  // =====================================================================
  function startGroupCall(gid,kind){if(me&&me.isAnonymous){if(ctx&&ctx.needGoogle)ctx.needGoogle();return;}if(callObj||room)return;
    if(!window.RTCPeerConnection||!navigator.mediaDevices){alert(t("callFail"));return;}
    var ar=activeRoom(gid);if(ar){joinRoom(ar.id);return;}
    var cref=q("chats").doc(gid),ref=q("rooms").doc(),st=null;
    getMedia(kind).then(function(s){st=s;return cref.get();}).then(function(cs){var c=cs.data();
        return ref.set({chat:gid,type:kind,by:me.uid,members:c.members,in:[me.uid],active:true,createdAt:FV.serverTimestamp(),name:gname(c)}).then(function(){
          sendMsg(gid,{type:"call",text:"",call:{kind:kind,room:ref.id,status:"started"}}).catch(function(){});pushRing({room:ref.id});enterRoom(ref,kind,st,gname(c));});})
      .catch(function(e){console.error(e);if(st)st.getTracks().forEach(function(x){x.stop();});alert(e&&e.name&&/NotAllowed|NotFound|NotReadable/.test(e.name)?t("noMedia"):t("callFail"));});}
  function joinRoom(rid){if(me&&me.isAnonymous){if(ctx&&ctx.needGoogle)ctx.needGoogle();return;}if(callObj||room)return;if(gRing)gRing.close();
    var ref=q("rooms").doc(rid),st=null;
    ref.get().then(function(s){var d=s.data();if(!d||!d.active){alert(t("callEnded"));return;}if((d.in||[]).length>=8){alert(t("callFull"));return;}
      return getMedia(d.type).then(function(x){st=x;return ref.collection("peers").where("to","==",me.uid).get();})
      .then(function(old){return Promise.all(old.docs.map(function(x){return x.ref.delete().catch(function(){});}));}).then(function(){return ref.update({in:FV.arrayUnion(me.uid)});}).then(function(){enterRoom(ref,d.type,st,d.name||t("gCall"));});})
    .catch(function(e){console.error(e);if(st)st.getTracks().forEach(function(x){x.stop();});alert(e&&e.name&&/NotAllowed|NotFound|NotReadable/.test(e.name)?t("noMedia"):t("callFail"));});}
  function gTile(uid,isMe){var p=prof(uid);var tile=el("div",{class:"wa-tile cn"+(isMe?" me":"")});var av=avatar(p,"xl");var v=el("video",{autoplay:true,playsinline:true,hidden:true});
    if(isMe){v.muted=true;}var a=isMe?null:el("audio",{autoplay:true});tile.appendChild(av);tile.appendChild(v);if(a)tile.appendChild(a);tile.appendChild(el("span",{class:"nm"},isMe?t("you"):(p.name||"—")));
    return {el:tile,v:v,a:a,av:av};}
  function gLayout(){if(!room)return;var n=room.grid.children.length;var cols=n<=2?1:2;room.grid.style.gridTemplateColumns="repeat("+cols+",1fr)";
    var others=Object.keys(room.peers).length;room.st.textContent=room.on?room.st.textContent:(others?t("connecting"):t("waiting"));}
  function enterRoom(ref,kind,stream,name){ring(false);
    var r=room={id:ref.id,ref:ref,kind:kind,stream:stream,peers:{},uns:[],facing:"user",joined:Date.now(),on:0};
    var w=el("div",{class:"wa-call grp"+(kind==="video"?" vid":""),"data-noi18n":""});var grid=el("div",{class:"wa-grid"});var st=el("span",null,t("waiting"));
    var top=el("div",{class:"top"},el("b",null,name||t("gCall")),st);var ctl=el("div",{class:"ctl"});w.appendChild(grid);w.appendChild(top);w.appendChild(ctl);document.body.appendChild(w);
    r.w=w;r.grid=grid;r.st=st;
    var mine=gTile(me.uid,true);grid.appendChild(mine.el);if(kind==="video"){mine.v.srcObject=stream;mine.v.hidden=false;mine.av.hidden=true;}mine.el.classList.remove("cn");r.meTile=mine;
    var mu=btn("🎙",t("mute"),"",function(){var a=stream.getAudioTracks()[0];if(!a)return;a.enabled=!a.enabled;mu.b.classList.toggle("off",!a.enabled);mu.b.setIco(a.enabled?"🎙":"🔇");});ctl.appendChild(mu.wrap);
    if(kind==="video"){var cam=btn("📷",t("camOff"),"",function(){var v=stream.getVideoTracks()[0];if(!v)return;v.enabled=!v.enabled;cam.b.classList.toggle("off",!v.enabled);cam.b.setIco(v.enabled?"📷":"🚫");});ctl.appendChild(cam.wrap);
      var fl=btn("🔄",t("flip"),"",function(){r.facing=r.facing==="user"?"environment":"user";navigator.mediaDevices.getUserMedia({video:{facingMode:r.facing}}).then(function(ns){var nt=ns.getVideoTracks()[0];
        Object.keys(r.peers).forEach(function(k){var pc=r.peers[k].pc;if(!pc)return;var snd=pc.getSenders().filter(function(s){return s.track&&s.track.kind==="video";})[0];if(snd)snd.replaceTrack(nt);});
        stream.getVideoTracks().forEach(function(x){stream.removeTrack(x);x.stop();});stream.addTrack(nt);mine.v.srcObject=stream;mine.el.classList.toggle("me",r.facing==="user");}).catch(function(){});});ctl.appendChild(fl.wrap);}
    ctl.appendChild(btn("✆",t("end"),"red",function(){leaveRoom();}).wrap);
    // offers sent to me
    r.uns.push(ref.collection("peers").where("to","==",me.uid).onSnapshot(function(s){s.docChanges().forEach(function(ch){if(ch.type!=="added"||room!==r)return;var d=ch.doc.data();
        if(!d.offer||d.answer)return;var from=d.from;if(r.peers[from])closePeer(from);answerPeer(from,ch.doc.ref,d.offer);});},function(e){console.warn(e);}));
    var unload=function(){leaveRoom();};window.addEventListener("pagehide",unload);r.uns.push(function(){window.removeEventListener("pagehide",unload);});
    roomSync();gLayout();}
  function peerPC(uid,dref){var r=room;var P=r.peers[uid]=r.peers[uid]||{};P.ref=dref;P.iceQ=[];P.mine=[];P.ready=false;
    if(!P.tile){P.tile=gTile(uid,false);r.grid.appendChild(P.tile.el);gLayout();}
    var pc=P.pc=new RTCPeerConnection({iceServers:ICE});r.stream.getTracks().forEach(function(tr){pc.addTrack(tr,r.stream);});
    pc.ontrack=function(e){var s=e.streams[0];if(!s)return;P.tile.a.srcObject=s;if(e.track.kind==="video"){P.tile.v.srcObject=s;P.tile.v.muted=true;P.tile.v.hidden=false;P.tile.av.hidden=true;}};
    pc.onconnectionstatechange=function(){var cs=pc.connectionState;if(cs==="connected"){P.tile.el.classList.remove("cn");if(!r.on){r.on=Date.now();r.tick=setInterval(function(){var x=Math.floor((Date.now()-r.on)/1000);r.st.textContent=num(String(Math.floor(x/60)).padStart(2,"0")+":"+String(x%60).padStart(2,"0"))+" · "+num(Object.keys(r.peers).length+1);},1000);}}
      else if(cs==="failed"){P.tile.el.classList.add("cn");}else if(cs==="disconnected")P.tile.el.classList.add("cn");};
    function put(x){dref.collection("ice").add({by:me.uid,c:JSON.stringify(x),t:Date.now()}).catch(function(){});}
    P.go=function(){P.ready=true;P.mine.splice(0).forEach(put);};
    pc.onicecandidate=function(e){if(!e.candidate)return;var j=e.candidate.toJSON();if(P.ready)put(j);else P.mine.push(j);};
    P.addIce=function(c){if(pc.remoteDescription&&pc.remoteDescription.type)pc.addIceCandidate(c).catch(function(){});else P.iceQ.push(c);};
    P.flush=function(){P.iceQ.splice(0).forEach(function(c){pc.addIceCandidate(c).catch(function(){});});};
    P.uns=[dref.collection("ice").onSnapshot(function(s){s.docChanges().forEach(function(ch){if(ch.type!=="added")return;var d=ch.doc.data();if(d.by===me.uid)return;try{P.addIce(new RTCIceCandidate(JSON.parse(d.c)));}catch(e){}});},function(){})];
    // a peer that never connects is dropped after a while (left without saying goodbye)
    P.to=setTimeout(function(){if(room===r&&r.peers[uid]===P&&pc.connectionState!=="connected")closePeer(uid,true);},30000);
    return P;}
  function offerPeer(uid){var r=room;var dref=r.ref.collection("peers").doc();var P=peerPC(uid,dref),pc=P.pc;
    pc.createOffer().then(function(of){return pc.setLocalDescription(of).then(function(){return dref.set({from:me.uid,to:uid,offer:{type:of.type,sdp:of.sdp},createdAt:Date.now()});});})
      .then(function(){if(room!==r)return;P.go();P.uns.push(dref.onSnapshot(function(s){var d=s.data();if(!d||!d.answer||P.answered)return;P.answered=true;pc.setRemoteDescription(new RTCSessionDescription(d.answer)).then(P.flush).catch(console.error);},function(){}));})
      .catch(function(e){console.warn("offer",e);});}
  function answerPeer(uid,dref,offer){var r=room;var P=peerPC(uid,dref),pc=P.pc;P.go();
    pc.setRemoteDescription(new RTCSessionDescription(offer)).then(function(){P.flush();return pc.createAnswer();}).then(function(an){return pc.setLocalDescription(an).then(function(){return dref.update({answer:{type:an.type,sdp:an.sdp}});});})
      .catch(function(e){console.warn("answer",e);});}
  function closePeer(uid,keepTile){var r=room;if(!r)return;var P=r.peers[uid];if(!P)return;clearTimeout(P.to);(P.uns||[]).forEach(function(f){try{f();}catch(e){}});try{P.pc&&P.pc.close();}catch(e){}
    delete r.peers[uid];if(P.tile&&P.tile.el)P.tile.el.remove();gLayout();}
  function roomSync(){var r=room;if(!r)return;var d=rooms[r.id];if(!d)return;if(!d.active){leaveRoom();return;}var inn=d.in||[];
    Object.keys(r.peers).forEach(function(u){if(inn.indexOf(u)<0)closePeer(u);});
    // the person with the smaller id starts each connection, so two people never call each other twice
    inn.forEach(function(u){if(u===me.uid||r.peers[u])return;if(me.uid<u)offerPeer(u);});gLayout();}
  function leaveRoom(){var r=room;if(!r)return;room=null;clearInterval(r.tick);r.uns.splice(0).forEach(function(f){try{f();}catch(e){}});
    Object.keys(r.peers).forEach(function(u){var P=r.peers[u];clearTimeout(P.to);(P.uns||[]).forEach(function(f){try{f();}catch(e){}});try{P.pc.close();}catch(e){}});
    try{r.stream.getTracks().forEach(function(x){x.stop();});}catch(e){}r.w.remove();
    db.runTransaction(function(tx){return tx.get(r.ref).then(function(s){if(!s.exists)return;var inn=(s.data().in||[]).filter(function(u){return u!==me.uid;});
      var u={in:inn};if(!inn.length){u.active=false;u.endedAt=FV.serverTimestamp();}tx.update(r.ref,u);});}).catch(function(e){console.warn("leave",e);
      r.ref.update({in:FV.arrayRemove(me.uid)}).then(function(){return r.ref.get();}).then(function(s){if(s.exists&&!(s.data().in||[]).length)return r.ref.update({active:false,endedAt:FV.serverTimestamp()});}).catch(function(){});});
    r.ref.collection("peers").where("from","==",me.uid).get().then(function(s){s.docs.forEach(function(d){d.ref.delete().catch(function(){});});}).catch(function(){});}
  function gIncoming(d){if(gRing)return;var c=chatById(d.chat)||{name:d.name};
    var w=el("div",{class:"wa-call","data-noi18n":""});var top=el("div",{class:"top"},gAvatar(c,"xl"),el("b",null,gname(c)),el("span",null,t(d.type==="video"?"incomingVideo":"incoming")+" · "+t("gCall")),
      el("span",{style:"font-size:.8rem;opacity:.75"},(d.in||[]).map(function(u){return prof(u).name;}).join(", ")));
    var ctl=el("div",{class:"ctl"});w.appendChild(top);w.appendChild(ctl);document.body.appendChild(w);ring(true,true);notify(gname(c),t(d.type==="video"?"incomingVideo":"incoming"),"am-gcall");
    var tm=setTimeout(function(){close();},45000);
    function close(){if(!gRing)return;gRing=null;clearTimeout(tm);ring(false);w.remove();}
    gRing={id:d.id,close:close};
    ctl.appendChild(btn("✆",t("decline"),"red",function(){dismissed[d.id]=1;close();}).wrap);
    ctl.appendChild(btn(d.type==="video"?"🎥":"📞",t("join"),"green pulse",function(){dismissed[d.id]=1;close();joinRoom(d.id);}).wrap);}

  window.AMCHAT={start:start,stop:stop,mount:mount,openChat:function(u){openChat(u);},openGroup:function(g){openGChat(g);},newGroup:function(){newGroup();},profile:function(u){return profs[u];},profiles:function(){return profs;},profileView:function(u){profileView(u);},contacts:function(){contacts();},avatar:avatar};
})();
