/* Amalnama v4 · Finance: academic / personal / business, daily-weekly-monthly-yearly audit, financial plans (circle %), upcoming-expense reminders */
(function(){
  var V=window.V4;if(!V)return;var t=V.t,num=V.num,el=V.el,ic=V.ic;
  var B=function(bn,en,ms,ar,ur,sw){return [bn,en,ms,ar,ur,sw];};
  var SEG=[["academic",B("একাডেমিক","Academic","Akademik","دراسي","تعلیمی","Masomo"),"M3 9l9-5 9 5-9 5zM7 11.5V16c1.5 1.6 3.2 2.4 5 2.4s3.5-.8 5-2.4v-4.5M21 9v5"],
    ["personal",B("ব্যক্তিগত","Personal","Peribadi","شخصي","ذاتی","Binafsi"),"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20.5a7.5 7.5 0 0 1 15 0"],
    ["business",B("ব্যবসা","Business","Perniagaan","تجاري","کاروبار","Biashara"),"M4 9.5l1.5-5h13L20 9.5M4 9.5h16v10.5H4zM9 20v-5h6v5"]];
  var PER=[["d",B("দৈনিক","Daily","Harian","يومي","روزانہ","Kila siku"),B("আজকের","Today's","Hari ini","اليوم","آج کا","Ya leo")],["w",B("সাপ্তাহিক","Weekly","Mingguan","أسبوعي","ہفتہ وار","Kila wiki"),B("এই সপ্তাহের","This week's","Minggu ini","هذا الأسبوع","اس ہفتے کا","Wiki hii")],
    ["m",B("মাসিক","Monthly","Bulanan","شهري","ماہانہ","Kila mwezi"),B("এই মাসের","This month's","Bulan ini","هذا الشهر","اس مہینے کا","Mwezi huu")],["y",B("বার্ষিক","Yearly","Tahunan","سنوي","سالانہ","Kila mwaka"),B("এই বছরের","This year's","Tahun ini","هذا العام","اس سال کا","Mwaka huu")]];
  var CATS={academic:[B("টিউশন ফি","Tuition fee","Yuran pengajian","الرسوم الدراسية","ٹیوشن فیس","Ada ya masomo"),B("বই ও প্রিন্ট","Books & print","Buku & cetakan","كتب وطباعة","کتابیں اور پرنٹ","Vitabu na uchapishaji"),B("যাতায়াত","Transport","Pengangkutan","مواصلات","آمد و رفت","Usafiri"),B("অনলাইন কোর্স","Online course","Kursus dalam talian","دورة عبر الإنترنت","آن لائن کورس","Kozi mtandaoni"),B("খাবার","Food","Makanan","طعام","کھانا","Chakula"),
      B("খাতা-কলম","Stationery","Alat tulis","قرطاسية","اسٹیشنری","Vifaa vya kuandikia"),B("পরীক্ষার ফি","Exam fee","Yuran peperiksaan","رسوم الامتحان","امتحانی فیس","Ada ya mtihani"),B("হোস্টেল / থাকা","Hostel / housing","Asrama","السكن","ہاسٹل","Bweni"),B("ল্যাপটপ ও সফটওয়্যার","Laptop & software","Komputer & perisian","حاسوب وبرامج","لیپ ٹاپ اور سافٹ ویئر","Kompyuta na programu"),B("ইন্টারনেট","Internet","Internet","إنترنت","انٹرنیٹ","Intaneti"),B("ক্লাব ও ইভেন্ট","Clubs & events","Kelab & acara","أندية وفعاليات","کلب اور تقریبات","Vilabu na matukio")],
    personal:[B("খাবার","Food","Makanan","طعام","کھانا","Chakula"),B("বাজার","Groceries","Barangan dapur","بقالة","سودا سلف","Mahitaji ya nyumbani"),B("বাসা ভাড়া","Rent","Sewa","إيجار","کرایہ","Kodi"),B("বিদ্যুৎ-পানি-গ্যাস","Utilities","Utiliti","فواتير الخدمات","بجلی پانی گیس","Huduma"),B("মোবাইল ও নেট","Phone & internet","Telefon & internet","هاتف وإنترنت","موبائل اور نیٹ","Simu na intaneti"),B("যাতায়াত","Transport","Pengangkutan","مواصلات","آمد و رفت","Usafiri"),
      B("চিকিৎসা ও ওষুধ","Health & medicine","Kesihatan & ubat","صحة ودواء","علاج اور دوا","Afya na dawa"),B("পোশাক","Clothing","Pakaian","ملابس","کپڑے","Mavazi"),B("সাদাকা","Sadaqah","Sedekah","صدقة","صدقہ","Sadaka"),B("যাকাত","Zakat","Zakat","زكاة","زکوٰۃ","Zaka"),B("পরিবারকে সাহায্য","Family support","Bantuan keluarga","دعم الأسرة","گھر والوں کی مدد","Msaada wa familia"),B("কেনাকাটা","Shopping","Membeli-belah","تسوق","خریداری","Ununuzi"),
      B("বিনোদন","Leisure","Riadah","ترفيه","تفریح","Burudani"),B("উপহার","Gifts","Hadiah","هدايا","تحائف","Zawadi"),B("সঞ্চয়","Savings","Simpanan","ادخار","بچت","Akiba"),B("ঋণ পরিশোধ","Debt payment","Bayar hutang","سداد دين","قرض کی ادائیگی","Kulipa deni"),B("অন্যান্য","Other","Lain-lain","أخرى","دیگر","Mengine")],
    business:[B("পণ্য কেনা","Stock purchase","Pembelian stok","شراء البضاعة","مال کی خریداری","Ununuzi wa bidhaa"),B("ডেলিভারি","Delivery","Penghantaran","توصيل","ڈیلیوری","Usafirishaji"),B("ভাড়া","Rent","Sewa","إيجار","کرایہ","Kodi"),B("মার্কেটিং","Marketing","Pemasaran","تسويق","مارکیٹنگ","Masoko"),B("বেতন","Salaries","Gaji","رواتب","تنخواہیں","Mishahara"),B("বিদ্যুৎ-পানি","Utilities","Utiliti","خدمات","بجلی پانی","Huduma"),
      B("যন্ত্রপাতি","Equipment","Peralatan","معدات","آلات","Vifaa"),B("প্যাকেজিং","Packaging","Pembungkusan","تغليف","پیکجنگ","Ufungashaji"),B("সফটওয়্যার","Software","Perisian","برامج","سافٹ ویئر","Programu"),B("কর ও ফি","Tax & fees","Cukai & yuran","ضرائب ورسوم","ٹیکس اور فیس","Kodi na ada"),B("অন্যান্য","Other","Lain-lain","أخرى","دیگر","Mengine")]};
  var INCATS=[B("বেতন","Salary","Gaji","راتب","تنخواہ","Mshahara"),B("স্কলারশিপ","Scholarship","Biasiswa","منحة","وظیفہ","Ufadhili"),B("ফ্রিল্যান্স","Freelance","Bebas","عمل حر","فری لانس","Kazi huru"),B("বিক্রি","Sales","Jualan","مبيعات","فروخت","Mauzo"),B("ব্যবসার লাভ","Business profit","Untung perniagaan","ربح تجاري","کاروباری منافع","Faida ya biashara"),B("পরিবার থেকে","From family","Daripada keluarga","من العائلة","گھر والوں سے","Kutoka familia"),B("উপহার","Gift","Hadiah","هدية","تحفہ","Zawadi"),B("ফেরত","Refund","Bayaran balik","استرداد","واپسی","Marejesho"),B("অন্যান্য","Other","Lain-lain","أخرى","دیگر","Mengine")];
  var COL=["#3FB59B","#E2C27A","#6FA8DC","#E8836B","#B892E6","#8FE6C8"];
  function F(){var v=V.V();v.fin=v.fin||{cur:"RM",seg:"academic",per:"m",tx:[],plans:{academic:[],personal:[],business:[]},up:[]};var f=v.fin;f.plans=f.plans||{};SEG.forEach(function(s){f.plans[s[0]]=f.plans[s[0]]||[];});f.tx=f.tx||[];f.up=f.up||[];return f;}
  function id(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6);}
  function money(x){var f=F();return f.cur+" "+num(Math.round(x).toLocaleString("en-US"));}
  function range(per){var d=new Date(),s=V.ymd(d),e=s,x=new Date(s+"T12:00:00");
    if(per==="w"){var wd=x.getDay();var a=new Date(x.getTime()-wd*864e5);s=V.ymd(a);e=V.ymd(new Date(a.getTime()+6*864e5));}
    if(per==="m"){s=s.slice(0,8)+"01";var m=new Date(x.getFullYear(),x.getMonth()+1,0,12);e=V.ymd(m);}
    if(per==="y"){s=s.slice(0,4)+"-01-01";e=s.slice(0,4)+"-12-31";}
    return [s,e];}
  function prevRange(per){var r=range(per),s=new Date(r[0]+"T12:00:00"),e=new Date(r[1]+"T12:00:00"),len=Math.round((e-s)/864e5)+1;
    if(per==="m"){var p=new Date(s.getFullYear(),s.getMonth()-1,1,12),q=new Date(s.getFullYear(),s.getMonth(),0,12);return [V.ymd(p),V.ymd(q)];}
    if(per==="y"){var y=+r[0].slice(0,4)-1;return [y+"-01-01",y+"-12-31"];}
    return [V.ymd(new Date(s.getTime()-len*864e5)),V.ymd(new Date(s.getTime()-864e5))];}
  function txIn(seg,r){return F().tx.filter(function(x){return x.seg===seg&&x.date>=r[0]&&x.date<=r[1];});}
  function sums(list){var inc=0,out=0,cat={};list.forEach(function(x){if(x.amt>0)inc+=x.amt;else{out-=x.amt;cat[x.cat||"—"]=(cat[x.cat||"—"]||0)-x.amt;}});return {inc:inc,out:out,cat:cat};}
  function planProgress(p,seg){if(p.type==="save")return +p.saved||0;var r=range("m"),list=txIn(seg,r).filter(function(x){return x.amt<0&&(!p.cat||x.cat===p.cat);});return list.reduce(function(a,x){return a-x.amt;},0);}

  var root=null;
  V.section("finance",{open:function(r){root=r;draw();}});
  function draw(){var f=F(),seg=f.seg||"academic",per=f.per||"m",r=range(per),s=sums(txIn(seg,r)),P=PER.filter(function(x){return x[0]===per;})[0];
    root.innerHTML="";
    var cur=el("select",{class:"v4in",style:"width:auto;min-height:40px;padding:6px 10px","aria-label":"Currency"});["RM","৳","$","€","£","₹","Rs","SAR","AED","KES","PKR"].forEach(function(c){var o=el("option",{value:c},c);if(c===f.cur)o.selected=true;cur.appendChild(o);});
    cur.onchange=function(){f.cur=cur.value;V.save();draw();};
    root.appendChild(V.head(t(B("হিসাব","Finance","Kewangan","الحساب","حساب","Fedha")),t(B("একাডেমিক · ব্যক্তিগত · ব্যবসা","Academic · Personal · Business","Akademik · Peribadi · Perniagaan","دراسي · شخصي · تجاري","تعلیمی · ذاتی · کاروبار","Masomo · Binafsi · Biashara")),null,cur));
    // segments
    var sg=el("div",{role:"tablist",style:"display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px"});
    SEG.forEach(function(x){var on=x[0]===seg;var b=el("button",{type:"button",role:"tab","aria-selected":String(on),style:"min-height:64px;border-radius:18px;border:1.5px solid "+(on?"#E2C27A":"transparent")+";background:"+(on?"rgba(226,194,122,.12)":"#0E3236")+";color:"+(on?"#F4DFA6":"#CFE0DA")+";display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font:inherit;font-weight:600;font-size:.82rem;cursor:pointer",onclick:function(){f.seg=x[0];V.save();draw();}},V.icon([[x[2]]],22),t(x[1]));sg.appendChild(b);});
    root.appendChild(sg);
    var ps=V.seg(PER.map(function(x){return [x[0],t(x[1])];}),per,function(x){f.per=x;V.save();draw();});ps.style.marginTop="10px";root.appendChild(ps);
    // balance + rings
    var bal=s.inc-s.out,saveP=s.inc?Math.round(Math.max(0,bal)/s.inc*100):0,spendP=s.inc?Math.round(s.out/s.inc*100):(s.out?100:0);
    root.appendChild(el("section",{class:"v4card gold"},el("div",{class:"v4row"},el("div",{style:"flex:1;min-width:0"},el("div",{class:"v4muted",style:"color:#E9D9B0"},t(P[2])+" "+t(B("ব্যালান্স","balance","baki","الرصيد","بیلنس","salio"))),
        el("div",{style:"font-family:var(--fh);font-size:1.8rem;color:#F4DFA6;line-height:1.3"},(bal<0?"−":"")+money(Math.abs(bal)))),
        el("div",{style:"text-align:center"},V.ring(saveP,64,3.2,"#3ECF9E"),el("div",{style:"font-size:.7rem;color:#9FE3CF"},t(B("সঞ্চয়","Saved","Simpanan","ادخار","بچت","Akiba")))),
        el("div",{style:"text-align:center"},V.ring(spendP,64,3.2,"#E8836B"),el("div",{style:"font-size:.7rem;color:#F2B5A4"},t(B("খরচ","Spent","Belanja","إنفاق","خرچ","Matumizi"))))),
      el("div",{style:"display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px"},
        el("div",{style:"padding:10px;border-radius:14px;background:rgba(0,0,0,.2)"},el("div",{style:"font-size:.75rem;color:#9FE3CF"},t(B("আয়","Income","Pendapatan","الدخل","آمدنی","Mapato"))),el("div",{style:"font-weight:700"},money(s.inc))),
        el("div",{style:"padding:10px;border-radius:14px;background:rgba(0,0,0,.2)"},el("div",{style:"font-size:.75rem;color:#F2B5A4"},t(B("ব্যয়","Expense","Perbelanjaan","المصروف","خرچ","Matumizi"))),el("div",{style:"font-weight:700"},money(s.out))))));
    // where it went: donut + rings
    var cats=Object.keys(s.cat).map(function(k){return [k,s.cat[k]];}).sort(function(a,b){return b[1]-a[1];});
    var wc=el("section",{class:"v4card"},el("div",{class:"v4row",style:"justify-content:space-between;gap:8px"},el("h2",{style:"margin:0"},t(B("কোথায় খরচ হলো","Where the money went","Ke mana wang pergi","أين ذهب المال","پیسہ کہاں گیا","Pesa zilienda wapi"))),el("button",{type:"button",class:"v5fbtn",onclick:function(){addTx();}},ic("plus",16),t(B("লেনদেন যোগ","Add transaction","Tambah transaksi","إضافة معاملة","لین دین شامل کریں","Ongeza muamala")))));
    if(!cats.length)wc.appendChild(el("p",{class:"v4muted"},t(B("এই সময়ে কোনো খরচ যোগ হয়নি।","No expenses in this period yet.","Tiada perbelanjaan lagi.","لا مصروفات بعد.","ابھی کوئی خرچ نہیں۔","Hakuna matumizi bado."))));
    else{var donut=V.sv("svg",{viewBox:"0 0 36 36",width:132,height:132,"aria-hidden":"true",style:"transform:rotate(-90deg)"},V.sv("circle",{cx:18,cy:18,r:15.9,fill:"none",stroke:"rgba(255,255,255,.08)","stroke-width":4}));
      var acc=0;cats.forEach(function(c,i){var p=c[1]/s.out*100;donut.appendChild(V.sv("circle",{cx:18,cy:18,r:15.9,fill:"none",stroke:COL[i%COL.length],"stroke-width":4,pathLength:100,"stroke-dasharray":Math.max(p-1,0.5)+" 100","stroke-dashoffset":String(-acc)}));acc+=p;});
      var leg=el("div",{style:"flex:1;min-width:0;display:grid;gap:7px"});
      cats.forEach(function(c,i){var p=Math.round(c[1]/s.out*100);leg.appendChild(el("div",{class:"v4row",style:"gap:8px;font-size:.85rem"},V.ring(p,30,4,COL[i%COL.length],""),el("span",{style:"flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"},c[0]),el("span",{style:"font-family:var(--fh);color:"+COL[i%COL.length]},num(p)+"%")));});
      wc.appendChild(el("div",{class:"v4row",style:"gap:14px;margin-top:10px"},el("div",{style:"position:relative;width:132px;height:132px;flex:none"},donut,el("span",{style:"position:absolute;inset:0;display:grid;place-items:center;text-align:center;line-height:1.2"},el("span",null,el("span",{style:"display:block;font-size:.66rem;color:var(--muted)"},t(B("মোট ব্যয়","Total spent","Jumlah","الإجمالي","کل خرچ","Jumla"))),el("span",{style:"display:block;font-family:var(--fh);font-size:.95rem;color:#F7E2A6"},money(s.out))))),leg));}
    root.appendChild(wc);
    // upcoming expenses (reminders)
    root.appendChild(upcoming(seg));
    // plans
    var segName=t(SEG.filter(function(x){return x[0]===seg;})[0][1]);
    var pc=el("section",{class:"v4card",style:"background:linear-gradient(160deg,#0F3134,#0A2326);border:1px solid rgba(232,201,138,.3)"},el("div",{class:"v4row",style:"justify-content:space-between"},el("div",null,el("h2",null,segName+" "+t(B("আর্থিক পরিকল্পনা","financial plan","pelan kewangan","الخطة المالية","مالی منصوبہ","mpango wa fedha"))),el("div",{class:"v4muted"},t(B("এই মাসের লক্ষ্য ও বাজেট","This month's goals & budgets","Matlamat bulan ini","أهداف الشهر","اس ماہ کے اہداف","Malengo ya mwezi")))),
      el("button",{class:"v4btn",type:"button",onclick:function(){addPlan(seg);}},ic("plus",16),t(B("পরিকল্পনা","Plan","Pelan","خطة","منصوبہ","Mpango")))));
    var plans=f.plans[seg];
    if(!plans.length)pc.appendChild(el("p",{class:"v4muted"},t(B("এখনো কোনো পরিকল্পনা নেই। বাজেট বা সঞ্চয়ের লক্ষ্য যোগ করো — অগ্রগতি বৃত্তে % দেখাবে।","No plans yet. Add a budget or savings goal — progress shows as a % circle.","Tiada pelan lagi.","لا خطط بعد.","ابھی کوئی منصوبہ نہیں۔","Hakuna mipango bado."))));
    else{var g=el("div",{style:"display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:12px"});
      plans.forEach(function(p){var now=planProgress(p,seg),pct=p.goal?Math.round(now/p.goal*100):0,warn=p.type!=="save"&&pct>=90,col=warn?"#E8836B":p.type==="save"?"#3ECF9E":"#E8C98A";
        g.appendChild(el("button",{type:"button",style:"padding:12px 6px 10px;border-radius:18px;background:rgba(255,255,255,.035);border:1px solid rgba(232,201,138,.14);text-align:center;display:flex;flex-direction:column;align-items:center;color:inherit;font:inherit;cursor:pointer",onclick:function(){editPlan(seg,p);}},
          V.ring(pct,76,2.8,col),el("div",{style:"font-weight:600;font-size:.78rem;line-height:1.35;margin-top:6px;min-height:32px"},p.name),
          el("div",{style:"font-size:.68rem;color:var(--muted);line-height:1.4"},money(now),el("br"),"/ "+money(p.goal)),
          el("div",{style:"margin-top:5px;font-size:.66rem;padding:2px 8px;border-radius:999px;background:rgba(255,255,255,.06);color:"+col},p.type==="save"?t(B("সঞ্চয়ের লক্ষ্য","Savings goal","Simpanan","ادخار","بچت","Akiba")):warn?t(B("সীমার কাছাকাছি","Near the limit","Hampir had","قرب الحد","حد کے قریب","Karibu na kikomo")):t(B("বাকি ","Left ","Baki ","متبقٍ ","باقی ","Imebaki "))+money(Math.max(0,p.goal-now)))));});
      pc.appendChild(g);}
    root.appendChild(pc);
    // recent transactions
    var rc=el("section",{class:"v4card"},el("div",{class:"v4row",style:"justify-content:space-between;gap:8px"},el("h2",{style:"margin:0"},t(B("সাম্প্রতিক লেনদেন","Recent transactions","Transaksi terkini","آخر المعاملات","حالیہ لین دین","Miamala ya karibuni"))),el("button",{type:"button",class:"v5fpill",onclick:audit},t(B("অডিট রিপোর্ট","Audit report","Laporan audit","تقرير التدقيق","آڈٹ رپورٹ","Ripoti ya ukaguzi")))));
    var tl=f.tx.filter(function(x){return x.seg===seg;}).sort(function(a,b){return a.date<b.date?1:-1;}).slice(0,12);
    if(!tl.length)rc.appendChild(el("p",{class:"v4muted"},t(B("“লেনদেন যোগ” চেপে প্রথম আয় বা খরচ লেখো।","Tap “Add transaction” to record your first income or expense.","Tekan “Tambah transaksi”.","اضغط “إضافة معاملة”.","“لین دین شامل کریں” دبائیں۔","Gusa “Ongeza muamala”."))));
    tl.forEach(function(x){var pos=x.amt>0;rc.appendChild(el("div",{class:"v4row",style:"min-height:52px;border-bottom:1px solid rgba(255,255,255,.05)"},
      el("span",{style:"width:36px;height:36px;border-radius:12px;display:grid;place-items:center;font-weight:700;background:"+(pos?"rgba(63,181,155,.18)":"rgba(232,131,107,.18)")+";color:"+(pos?"#9FE3CF":"#F2B5A4")},pos?"+":"−"),
      el("span",{style:"flex:1;min-width:0"},el("b",{style:"display:block;font-weight:600;font-size:.92rem"},x.note||x.cat||"—"),el("small",{class:"v4muted"},(x.cat||"")+" · "+x.date)),
      el("span",{style:"font-weight:700;color:"+(pos?"#9FE3CF":"#F2B5A4")},(pos?"+":"−")+money(Math.abs(x.amt))),
      el("button",{class:"v4ico",type:"button","aria-label":t(B("মুছে ফেলো","Delete","Padam","حذف","حذف","Futa")),onclick:function(){if(!confirm(t(B("লেনদেনটা মুছবে?","Delete this transaction?","Padam?","حذف؟","حذف کریں؟","Futa?"))))return;f.tx=f.tx.filter(function(y){return y.id!==x.id;});V.save();draw();}},"×")));});
    root.appendChild(rc);}

  function addTx(){var f=F(),seg=f.seg;var kind="out";
    var amt=el("input",{class:"v4in",type:"number",inputmode:"decimal",min:"0",step:"any",placeholder:"0"});
    var cat=el("input",{class:"v4in",maxlength:"40",placeholder:t(B("খাত লেখো বা নিচ থেকে বেছে নাও","Type a category or pick one below","Taip kategori atau pilih","اكتب فئة أو اختر","زمرہ لکھیں یا منتخب کریں","Andika aina au chagua"))});
    var sug=el("div",{class:"v5chips",role:"listbox"});
    function mine(){var o={};(f.tx||[]).forEach(function(x){if(x.seg===seg&&x.cat&&(kind==="in"?x.amt>0:x.amt<0))o[x.cat]=(o[x.cat]||0)+1;});return Object.keys(o).sort(function(a,b){return o[b]-o[a];});}
    function drawSug(){sug.innerHTML="";var base=(kind==="in"?INCATS:CATS[seg]).map(function(c){return t(c);});var all=mine().concat(base).filter(function(x,i,a){return a.indexOf(x)===i;});
      all.forEach(function(c){sug.appendChild(el("button",{type:"button","aria-pressed":String(cat.value.trim()===c),onclick:function(){cat.value=c;drawSug();}},c));});}
    cat.oninput=drawSug;cat.value=t((kind==="in"?INCATS:CATS[seg])[0]);
    var note=el("input",{class:"v4in",maxlength:"60",placeholder:t(B("নোট (ঐচ্ছিক)","Note (optional)","Nota","ملاحظة","نوٹ","Maelezo"))});
    var date=el("input",{class:"v4in",type:"date",value:V.ymd()});
    var k=V.seg([["out",t(B("খরচ","Expense","Belanja","مصروف","خرچ","Matumizi"))],["in",t(B("আয়","Income","Pendapatan","دخل","آمدنی","Mapato"))]],kind,function(x){kind=x;k.querySelectorAll("button").forEach(function(b,i){b.setAttribute("aria-selected",String((i?"in":"out")===kind));});cat.value=t((kind==="in"?INCATS:CATS[seg])[0]);drawSug();});
    drawSug();
    var sh=V.sheet(t(B("লেনদেন যোগ","Add transaction","Tambah transaksi","إضافة معاملة","لین دین","Ongeza muamala")),el("div",{style:"display:grid;gap:10px"},k,
      el("label",{class:"v4lab"},t(B("পরিমাণ","Amount","Jumlah","المبلغ","رقم","Kiasi"))+" ("+f.cur+")",amt),el("label",{class:"v4lab"},t(B("খাত","Category","Kategori","الفئة","زمرہ","Aina")),cat),sug,
      el("div",{class:"v4f"},el("label",{class:"v4lab"},t(B("তারিখ","Date","Tarikh","التاريخ","تاریخ","Tarehe")),date),el("label",{class:"v4lab"},t(B("নোট","Note","Nota","ملاحظة","نوٹ","Maelezo")),note)),
      el("button",{class:"v4btn gold",type:"button",onclick:function(){var a=parseFloat(amt.value);if(!(a>0)){amt.focus();return;}var c=cat.value.trim()||t(B("অন্যান্য","Other","Lain-lain","أخرى","دیگر","Mengine"));
        f.tx.push({id:id(),seg:seg,amt:kind==="in"?a:-a,cat:c,note:note.value.trim(),date:date.value||V.ymd()});V.save();sh.close();draw();}},t(B("সেভ","Save","Simpan","حفظ","محفوظ","Hifadhi")))));}

  function addPlan(seg,p){var f=F();p=p||null;
    var name=el("input",{class:"v4in",maxlength:"40",value:p?p.name:"",placeholder:t(B("যেমন: মাসিক খরচ বাজেট","e.g. Monthly spending budget","cth. Bajet bulanan","مثلًا: ميزانية الشهر","مثلاً: ماہانہ بجٹ","mf. Bajeti ya mwezi"))});
    var goal=el("input",{class:"v4in",type:"number",inputmode:"decimal",min:"0",step:"any",value:p?p.goal:""});
    var type=el("select",{class:"v4in"},el("option",{value:"spend"},t(B("খরচের বাজেট (সীমা)","Spending budget (limit)","Bajet belanja","ميزانية إنفاق","خرچ کا بجٹ","Bajeti ya matumizi"))),el("option",{value:"save"},t(B("সঞ্চয়ের লক্ষ্য","Savings goal","Matlamat simpanan","هدف ادخار","بچت کا ہدف","Lengo la akiba"))));if(p)type.value=p.type;
    var cat=el("select",{class:"v4in"},el("option",{value:""},t(B("সব খাত","All categories","Semua","كل الفئات","سب","Zote"))));CATS[seg].forEach(function(c){var o=el("option",{value:t(c)},t(c));if(p&&p.cat===t(c))o.selected=true;cat.appendChild(o);});
    var saved=el("input",{class:"v4in",type:"number",inputmode:"decimal",min:"0",step:"any",value:p?(p.saved||""):""});
    var body=el("div",{style:"display:grid;gap:10px"},el("label",{class:"v4lab"},t(B("নাম","Name","Nama","الاسم","نام","Jina")),name),el("div",{class:"v4f"},el("label",{class:"v4lab"},t(B("ধরন","Type","Jenis","النوع","قسم","Aina")),type),el("label",{class:"v4lab"},t(B("লক্ষ্য","Target","Sasaran","الهدف","ہدف","Lengo"))+" ("+f.cur+")",goal)),
      el("label",{class:"v4lab"},t(B("খাত (বাজেটের জন্য)","Category (for budgets)","Kategori","الفئة","زمرہ","Aina")),cat),el("label",{class:"v4lab"},t(B("এ পর্যন্ত জমা (সঞ্চয়ের লক্ষ্যে)","Saved so far (savings goal)","Simpanan setakat ini","المدخر حتى الآن","اب تک بچت","Akiba hadi sasa")),saved),
      el("div",{class:"v4row"},el("button",{class:"v4btn gold",type:"button",style:"flex:1",onclick:function(){var g=parseFloat(goal.value);if(!name.value.trim()){name.focus();return;}if(!(g>0)){goal.focus();return;}
          var o=p||{id:id()};o.name=name.value.trim();o.goal=g;o.type=type.value;o.cat=cat.value;o.saved=parseFloat(saved.value)||0;if(!p)f.plans[seg].push(o);V.save();sh.close();draw();}},t(B("সেভ","Save","Simpan","حفظ","محفوظ","Hifadhi"))),
        p?el("button",{class:"v4btn",type:"button",onclick:function(){f.plans[seg]=f.plans[seg].filter(function(x){return x.id!==p.id;});V.save();sh.close();draw();}},t(B("মুছো","Delete","Padam","حذف","حذف","Futa"))):null));
    var sh=V.sheet(p?p.name:t(B("নতুন পরিকল্পনা","New plan","Pelan baharu","خطة جديدة","نیا منصوبہ","Mpango mpya")),body);}
  function editPlan(seg,p){addPlan(seg,p);}

  // ---- upcoming expenses = reminders
  function upcoming(seg){var f=F(),today=V.ymd();var list=f.up.filter(function(u){return u.seg===seg&&u.date>=today;}).sort(function(a,b){return a.date>b.date?1:-1;});
    var total=list.reduce(function(a,u){return a+(+u.amt||0);},0);
    var c=el("section",{class:"v4card gold"},el("div",{class:"v4row"},el("span",{style:"width:40px;height:40px;border-radius:14px;background:rgba(247,226,166,.12);display:grid;place-items:center;flex:none;color:#F7E2A6"},ic("bell",22)),
      el("div",{style:"flex:1;min-width:0"},el("h2",{style:"font-size:1.05rem"},t(B("আপকামিং খরচ","Upcoming expenses","Perbelanjaan akan datang","مصروفات قادمة","آنے والے اخراجات","Matumizi yajayo"))),el("div",{style:"font-size:.74rem;color:#E9D9B0"},t(B("পরিকল্পনা থেকে রিমাইন্ডার · ক্যালেন্ডারে যুক্ত","Reminders from your plan · added to Calendar","Peringatan · ke Kalendar","تذكيرات · في التقويم","یاد دہانی · کیلنڈر میں","Vikumbusho · kwenye Kalenda")))),
      el("div",{style:"text-align:end"},el("div",{style:"font-size:.7rem;color:#E9D9B0"},t(B("মোট","Total","Jumlah","المجموع","کل","Jumla"))),el("div",{style:"font-family:var(--fh);color:#F7E2A6"},money(total)))));
    var box=el("div",{style:"display:grid;gap:8px;margin-top:12px"});
    if(!list.length)box.appendChild(el("p",{class:"v4muted",style:"margin:0"},t(B("সামনের ভাড়া, ফি, বিল যোগ করো — সময়মতো মনে করিয়ে দেবে।","Add coming rent, fees or bills — you'll be reminded in time.","Tambah sewa, yuran atau bil.","أضف الإيجار والرسوم والفواتير.","کرایہ، فیس، بل شامل کریں۔","Ongeza kodi, ada au bili."))));
    list.forEach(function(u){var days=Math.round((new Date(u.date+"T12:00:00")-new Date(today+"T12:00:00"))/864e5),soon=days<=3,on=u.remind!==false;
      var d=new Date(u.date+"T12:00:00");
      box.appendChild(el("div",{class:"v4row",style:"padding:10px;border-radius:18px;background:rgba(0,0,0,.22);border:1px solid "+(soon?"rgba(232,131,107,.45)":"rgba(232,201,138,.15)")},
        el("span",{style:"width:46px;flex:none;border-radius:12px;overflow:hidden;text-align:center;background:#FBF3DE;color:#1A1406"},el("span",{style:"display:block;font-size:.62rem;font-weight:700;padding:2px 0;background:"+(soon?"#C9503A":"#1E6A4E")+";color:#fff"},new Intl.DateTimeFormat(V.L==="bn"?"bn":V.L,{month:"short"}).format(d)),el("span",{style:"display:block;font-family:var(--fh);font-size:1.15rem;line-height:1.5"},num(d.getDate()))),
        el("span",{style:"flex:1;min-width:0"},el("b",{style:"display:block;font-weight:600;font-size:.9rem"},u.title),el("small",{style:"display:block;font-size:.72rem;color:#CDBF98"},u.plan?t(B("পরিকল্পনা: ","Plan: ","Pelan: ","الخطة: ","منصوبہ: ","Mpango: "))+u.plan:""),
          el("span",{style:"display:inline-block;margin-top:3px;font-size:.68rem;padding:1px 8px;border-radius:999px;background:"+(on?(soon?"rgba(232,131,107,.18)":"rgba(62,207,158,.14)"):"rgba(255,255,255,.06)")+";color:"+(on?(soon?"#F2B5A4":"#8FE6C8"):"#9DB8B1")},
            (days===0?t(B("আজ","Today","Hari ini","اليوم","آج","Leo")):num(days)+" "+t(B("দিন বাকি","days left","hari lagi","يوم متبقٍ","دن باقی","siku zimebaki")))+" · "+(on?t(B("মনে করাবে ","remind ","ingatkan ","تذكير ","یاد ","kumbusha "))+num(u.before||1)+" "+t(B("দিন আগে","day(s) before","hari sebelum","قبل بيوم","دن پہلے","siku kabla")):t(B("রিমাইন্ডার বন্ধ","reminder off","peringatan mati","التذكير متوقف","یاد دہانی بند","kikumbusho kimezimwa"))))),
        el("span",{style:"display:flex;flex-direction:column;align-items:flex-end;gap:2px"},el("span",{style:"font-family:var(--fh);color:#F2B5A4"},money(u.amt)),
          el("button",{type:"button","aria-pressed":String(on),"aria-label":t(on?B("রিমাইন্ডার বন্ধ করো","Turn reminder off","Matikan","إيقاف","بند کریں","Zima"):B("রিমাইন্ডার চালু করো","Turn reminder on","Hidupkan","تشغيل","چالو کریں","Washa")),
            style:"width:44px;height:36px;border-radius:12px;display:grid;place-items:center;cursor:pointer;border:1px solid "+(on?"#E8C98A":"rgba(255,255,255,.2)")+";background:"+(on?"rgba(232,201,138,.16)":"transparent")+";color:"+(on?"#F7E2A6":"#9DB8B1"),
            onclick:function(){u.remind=!on;V.save();if(u.remind){V.askNotify&&V.askNotify();toCalendar(u);}else removeCal(u);draw();}},ic("bell",18)))));});
    c.appendChild(box);
    c.appendChild(el("button",{class:"v4btn ghost",type:"button",style:"margin-top:10px",onclick:function(){addUp(seg);}},ic("plus",16),t(B("আপকামিং খরচ যোগ করো","Add an upcoming expense","Tambah perbelanjaan","أضف مصروفًا","خرچ شامل کریں","Ongeza matumizi"))));
    return c;}
  function addUp(seg){var f=F();
    var title=el("input",{class:"v4in",maxlength:"50",placeholder:t(B("যেমন: বাসা ভাড়া","e.g. Rent","cth. Sewa","مثلًا: الإيجار","مثلاً: کرایہ","mf. Kodi"))});
    var amt=el("input",{class:"v4in",type:"number",inputmode:"decimal",min:"0",step:"any"});
    var date=el("input",{class:"v4in",type:"date",value:V.ymd(new Date(Date.now()+3*864e5))});
    var plan=el("select",{class:"v4in"},el("option",{value:""},"—"));f.plans[seg].forEach(function(p){plan.appendChild(el("option",{value:p.name},p.name));});
    var before=el("select",{class:"v4in"});[0,1,2,3,7].forEach(function(n){before.appendChild(el("option",{value:n},n===0?t(B("ঐ দিন সকালে","That morning","Pagi itu","صباح اليوم","اسی دن صبح","Asubuhi hiyo")):num(n)+" "+t(B("দিন আগে","day(s) before","hari sebelum","أيام قبل","دن پہلے","siku kabla"))));});before.value="1";
    var cal=el("input",{type:"checkbox"});cal.checked=true;
    var sh=V.sheet(t(B("আপকামিং খরচ","Upcoming expense","Perbelanjaan akan datang","مصروف قادم","آنے والا خرچ","Matumizi yajayo")),el("div",{style:"display:grid;gap:10px"},
      el("label",{class:"v4lab"},t(B("কী খরচ","What","Apa","ماذا","کیا","Nini")),title),el("div",{class:"v4f"},el("label",{class:"v4lab"},t(B("পরিমাণ","Amount","Jumlah","المبلغ","رقم","Kiasi"))+" ("+f.cur+")",amt),el("label",{class:"v4lab"},t(B("তারিখ","Date","Tarikh","التاريخ","تاریخ","Tarehe")),date)),
      el("div",{class:"v4f"},el("label",{class:"v4lab"},t(B("পরিকল্পনা","Plan","Pelan","الخطة","منصوبہ","Mpango")),plan),el("label",{class:"v4lab"},t(B("রিমাইন্ডার","Reminder","Peringatan","تذكير","یاد دہانی","Kikumbusho")),before)),
      el("label",{class:"v4row",style:"font-size:.85rem;color:var(--muted)"},cal,t(B("Google Calendar-এও রিমাইন্ডার দাও","Also add a Google Calendar reminder","Juga ke Google Calendar","أضف إلى تقويم Google","Google Calendar میں بھی","Pia kwenye Google Calendar"))),
      el("button",{class:"v4btn gold",type:"button",onclick:function(){var a=parseFloat(amt.value);if(!title.value.trim()){title.focus();return;}if(!(a>0)){amt.focus();return;}
        var u={id:id(),seg:seg,title:title.value.trim(),amt:a,date:date.value,plan:plan.value,before:+before.value,remind:true};f.up.push(u);V.save();sh.close();draw();
        if(V.askNotify)V.askNotify();if(cal.checked)toCalendar(u);}},t(B("সেভ","Save","Simpan","حفظ","محفوظ","Hifadhi")))));}

  // Google Calendar (only if the user turned on Calendar reminders in Amalnama)
  function mcp(){var c=window.claude;return c&&c.use?c.use("mcp"):Promise.resolve(null);}
  function toCalendar(u){mcp().then(function(m){if(!m)return;var tzn=V.tz();
      return m.callTool("Google Calendar","create_event",{summary:"💳 "+u.title+" · "+money(u.amt),description:"Amalnama · "+(u.plan||""),allDay:true,startTime:u.date+"T00:00:00",endTime:V.ymd(new Date(new Date(u.date+"T12:00:00").getTime()+864e5))+"T00:00:00",timeZone:tzn,
        overrideReminders:[{method:"popup",minutes:Math.max(0,(u.before||0)*1440-540)}]}).then(function(r){var p=r&&r.payload;if(p&&p.id){u.cal=p.id;V.save();V.toast(t(B("✓ Google Calendar-এ যোগ হয়েছে","✓ Added to Google Calendar","✓ Ditambah ke Kalendar","✓ أضيف إلى التقويم","✓ کیلنڈر میں شامل","✓ Imeongezwa kwenye Kalenda")));}});})
    .catch(function(e){if(e&&e.code==="cal_off"&&window.amGoogle&&window.amGoogle.connected())V.toast(t(B("Calendar রিমাইন্ডার চালু নেই — আরও › সেটিংস থেকে চালু করো","Calendar reminders are off — turn them on in More › Settings","Peringatan Kalendar dimatikan","تذكيرات التقويم متوقفة","کیلنڈر یاد دہانی بند ہے","Vikumbusho vya Kalenda vimezimwa")),4000);});}
  function removeCal(u){if(!u.cal)return;mcp().then(function(m){if(m)return m.callTool("Google Calendar","delete_event",{eventId:u.cal});}).then(function(){u.cal=null;V.save();}).catch(function(){});}
  // local reminder (in the app / notification) for upcoming expenses
  function remTick(){var f=F(),today=V.ymd(),done={};try{done=JSON.parse(localStorage.getItem("am-v4-up")||"{}");}catch(e){}
    f.up.forEach(function(u){if(u.remind===false||done[u.id])return;var at=V.ymd(new Date(new Date(u.date+"T12:00:00").getTime()-(u.before||0)*864e5));if(today<at||today>u.date)return;
      done[u.id]=1;var title=t(B("আপকামিং খরচ","Upcoming expense","Perbelanjaan akan datang","مصروف قادم","آنے والا خرچ","Matumizi yajayo"))+": "+u.title,body=money(u.amt)+" · "+u.date;
      if("Notification" in window&&Notification.permission==="granted"&&navigator.serviceWorker)navigator.serviceWorker.ready.then(function(r){r.showNotification(title,{body:body,icon:"icon-192.png",tag:"up-"+u.id,data:{url:"./#finance"}});}).catch(function(){});
      else V.toast(title+" · "+body,5000);});
    try{localStorage.setItem("am-v4-up",JSON.stringify(done));}catch(e){}}
  setTimeout(remTick,5000);setInterval(remTick,10*60000);

  // ---- audit report
  function audit(){var f=F(),seg=f.seg,per=f.per,r=range(per),pr=prevRange(per),a=sums(txIn(seg,r)),b=sums(txIn(seg,pr));
    var ch=b.out?Math.round((a.out-b.out)/b.out*100):null;
    var body=el("div",{style:"display:grid;gap:10px"},
      el("div",{class:"v4muted"},r[0]+" → "+r[1]),
      el("div",{class:"v4row",style:"gap:14px"},V.ring(a.inc?Math.min(100,a.out/a.inc*100):0,90,3,"#E8836B"),el("div",null,
        el("div",null,t(B("আয়: ","Income: ","Pendapatan: ","الدخل: ","آمدنی: ","Mapato: "))+money(a.inc)),el("div",null,t(B("ব্যয়: ","Expense: ","Belanja: ","المصروف: ","خرچ: ","Matumizi: "))+money(a.out)),
        el("div",{style:"color:"+(a.inc-a.out>=0?"#8FE6C8":"#F2B5A4")},t(B("ব্যালান্স: ","Balance: ","Baki: ","الرصيد: ","بیلنس: ","Salio: "))+money(a.inc-a.out)))),
      el("div",{class:"v4card",style:"margin:0"},el("b",null,t(B("আগের সময়ের তুলনায়","Compared with the previous period","Berbanding tempoh lalu","مقارنة بالفترة السابقة","پچھلے دورانیے سے موازنہ","Ikilinganishwa na kipindi kilichopita"))),
        el("p",{style:"margin:6px 0 0"},ch==null?t(B("আগের সময়ের ডেটা নেই।","No data for the previous period.","Tiada data.","لا بيانات.","ڈیٹا نہیں۔","Hakuna data.")):(ch>0?"▲ ":"▼ ")+num(Math.abs(ch))+"% "+(ch>0?t(B("বেশি খরচ","more spending","lebih belanja","إنفاق أكثر","زیادہ خرچ","matumizi zaidi")):t(B("কম খরচ","less spending","kurang belanja","إنفاق أقل","کم خرچ","matumizi kidogo"))))),
      el("p",{class:"v4muted",style:"margin:0"},a.inc&&a.out/a.inc>0.9?t(B("পরামর্শ: আয়ের ৯০%-এর বেশি খরচ হয়েছে। আগামী সময়ে সবচেয়ে বড় খাতটা ১০% কমানোর লক্ষ্য রাখো, আর আয়ের অন্তত ২.৫% সাদাকা/সঞ্চয়ে রাখো।","Tip: over 90% of income was spent. Aim to cut the biggest category by 10% next period, and keep at least 2.5% for sadaqah/savings.","Tip: lebih 90% pendapatan dibelanjakan.","نصيحة: أنفقت أكثر من ٩٠٪.","مشورہ: آمدنی کا ۹۰٪ سے زیادہ خرچ ہوا۔","Ushauri: zaidi ya 90% ya mapato yametumika.")):t(B("পরামর্শ: ভালো চলছে — উদ্বৃত্তের একটা অংশ সঞ্চয়ের লক্ষ্যে সরিয়ে রাখো।","Tip: going well — move part of the surplus into a savings goal.","Tip: bagus — simpan sebahagian lebihan.","نصيحة: جيد — ادّخر جزءًا من الفائض.","مشورہ: اچھا جا رہا ہے — کچھ بچت کریں۔","Ushauri: vizuri — weka akiba sehemu ya ziada."))));
    V.sheet(t(B("অডিট রিপোর্ট","Audit report","Laporan audit","تقرير التدقيق","آڈٹ رپورٹ","Ripoti ya ukaguzi"))+" · "+t(PER.filter(function(x){return x[0]===per;})[0][1]),body);}
  V.finance={F:F,money:money};
})();
