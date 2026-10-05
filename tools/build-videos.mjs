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
  ["UCmMcOjsVehVlEOteyrhjI2Q","Alafasy","tilawat"]];
const dec=s=>s.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'");
const out=[];
for(const [id,name,cat] of CH){
  try{const r=await fetch("https://www.youtube.com/feeds/videos.xml?channel_id="+id,{headers:{"User-Agent":"Mozilla/5.0"}});if(!r.ok)throw new Error(r.status);
    const x=await r.text();const es=x.split("<entry>").slice(1,16);
    for(const e of es){const v=(e.match(/<yt:videoId>([^<]+)/)||[])[1],t=(e.match(/<title>([^<]*)/)||[])[1],p=(e.match(/<published>([^<]+)/)||[])[1],
        short=/\/shorts\//.test((e.match(/<link[^>]+href="([^"]+)"/)||[])[1]||""),views=+((e.match(/views="(\d+)"/)||[])[1]||0);
      if(v&&t&&!short)out.push({id:v,t:dec(t),ch:name,cat,pub:p,views});}
  }catch(err){console.error("skip",name,err.message);}
}
out.sort((a,b)=>(b.pub||"").localeCompare(a.pub||""));
writeFileSync("videos.json",JSON.stringify({updated:new Date().toISOString(),items:out}));
console.log("videos:",out.length);
