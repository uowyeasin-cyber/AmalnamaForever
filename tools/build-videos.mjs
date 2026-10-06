// Builds videos.json from the latest uploads of trusted Islamic YouTube channels (public RSS feeds).
// Run by .github/workflows/videos.yml every few hours so the app always has fresh videos.
import {writeFileSync} from "node:fs";
const CH=[
  ["UCNB_OaI4524fASt8h0IL8dw","Mufti Menk","trend"],["UC3vHW2h22WE-pNi5WJtRIjg","Yaqeen Institute","trend"],["UCtm8rtofLSnaIBi3noB0INg","Omar Suleiman","trend"],
  ["UCxStLx7yb96MGBfIMo20x7Q","Mizanur Rahman Azhari","trend"],["UCuxth2BimHUigZ344JhcFPw","Shaikh Ahmadullah","trend"],["UC0xsiI7ESjvehM_VSKqQJOw","Abu Taw Haa Muhammad Adnan","trend"],
  ["UClUa7-iHJNKEM2e_zWYSPQg","Yasir Qadhi","history"],["UCf0O2efB4K66UUaT7QJPVNA","Al Muqaddimah","history"],["UCHGAqdQBKTVON_FUCIYCh3Q","MercifulServant","history"],
  ["UCzBbekjXc2uqrY9C4bdwbbA","10 Minute Madrasah","life"],["UCjNY1NRozZEWKPHMp992gjg","The Productive Muslim Company","life"],["UCvJyEIx_it2jFYP5M1OzGng","One Message Foundation","life"],["UC5vCwookDYaSy6ACyKaAjNA","ilmfeed","life"],
  ["UCRtiU-lpcBSi-ipFKyfIkug","Nouman Ali Khan","edu"],["UCtsN0omQRQ3_XgnLNioqxPQ","Majed Mahmoud","edu"],["UCyxM7MgZkDe5stZpb6CiOcA","Digital Mimbar","edu"],["UC361kz8bZYcYuF7k5j2kXdw","Hamza Yusuf","edu"],
  ["UCx420FfPBbEboBvnYjIemzw","EFDawah","dawah"],["UCQHRLH8RQIrdGWMhf5heWiA","OnePath Network","dawah"],["UCPubBVDCzu7IWWnitlkEsNw","Towards Eternity","dawah"],["UCXHz5brnR9qwqvQvF3VJdgQ","The Deen Show","dawah"],["UCeCAQhKbU2ETNWxWxB94HgA","The Muslim Lantern","dawah"],
  ["UCmMcOjsVehVlEOteyrhjI2Q","Alafasy","tilawat"],
  ["UCLrUV5FkWV8lm9omd5vQApQ","Yaqeen Institute","edu"],["UCz4AXmFeSbi-0vPXI102Q5w","Muslim Central","edu"],
  ["UCHDFNoOk8WOXtHo8DIc8efQ","Mohammed Hijab","debate"],["UCeZBhrU8xHcik0ZgtDwjsdA","Sapience Institute","debate"],["UCK9GD2WRxJxbDz9croru9UQ","Ali Dawah","debate"],["UCQwkEQ6EQc4jM2QnrvubBHg","DawahWise","debate"],
  ["UCWJPKXhkcMGXafdtqGx1mEw","The Thinking Muslim","ummah"],
  ["UCA0NvWcBgj2FuKM3VcMoCDQ","Islamic History Bangla","golden"],["UCHt4a98NGuZmRPFccWOiU6w","Muslim Historian","golden"],["UCA8L1F66Lpp7OP9luYd_1Zg","MuslimHeritage","golden"],["UCERktIk4eMJza73_-Z--s4A","OttomanHistory","golden"],["UC0LSnqrwqtMwl2YwfUpO66g","Al Jazeera Documentary","golden"]];
// a title can move a video to a better shelf
const RECAT=[[/\bdebate|\bvs\.?\s|atheis|christian(?:ity)? ?(?:apolog|debate)|speakers'? corner|refut/i,"debate"],
  [/golden age|invent|scien|astronom|algebra|medicine in islam|ibn (?:sina|rushd|khaldun|battuta|haytham)|al-?khwarizmi|andalus|cordoba|abbasid|umayyad|ottoman|mughal|baghdad|house of wisdom|civili[sz]ation|caliphate|khilafah|salahuddin|saladin|sultan|conquest|সোনালী|খিলাফত|উসমানীয়|সালাহউদ্দিন|সুলতান|বিজ্ঞান/i,"golden"],
  [/gaza|palestin|al-?aqsa|sudan|yemen|uyghur|kashmir|rohingya|ummah|গাজা|ফিলিস্তিন|রোহিঙ্গা|উম্মাহ/i,"ummah"]];
const dec=s=>s.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'");
const out=[];
// channels are fetched six at a time; YouTube's feed sometimes answers 404 by mistake, so each one gets three quick tries
async function one([id,name,cat]){
  try{let x=null,st=0;for(let i=0;i<3&&x==null;i++){try{const r=await fetch("https://www.youtube.com/feeds/videos.xml?channel_id="+id,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout(12000)});st=r.status;if(r.ok)x=await r.text();}catch(e){st=e.message;}if(x==null&&i<2)await new Promise(r=>setTimeout(r,1000*(i+1)));}
    if(x==null)throw new Error(st);const es=x.split("<entry>").slice(1,16);
    for(const e of es){const v=(e.match(/<yt:videoId>([^<]+)/)||[])[1],t=(e.match(/<title>([^<]*)/)||[])[1],p=(e.match(/<published>([^<]+)/)||[])[1],
        short=/\/shorts\//.test((e.match(/<link[^>]+href="([^"]+)"/)||[])[1]||""),views=+((e.match(/views="(\d+)"/)||[])[1]||0);
      if(v&&t&&!short&&!out.some(o=>o.id===v)){const tt=dec(t);let c2=cat;if(cat!=="tilawat")for(const [re,k] of RECAT)if(re.test(tt)){c2=k;break;}out.push({id:v,t:tt,ch:name,cat:c2,pub:p,views});}}
  }catch(err){console.error("skip",name,err.message);}
}
for(let i=0;i<CH.length;i+=6)await Promise.all(CH.slice(i,i+6).map(one));
out.sort((a,b)=>(b.pub||"").localeCompare(a.pub||""));
writeFileSync("videos.json",JSON.stringify({updated:new Date().toISOString(),items:out}));
console.log("videos:",out.length);
