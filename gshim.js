/* Amalnama · Google Calendar + Drive bridge (browser-only, Google Identity Services) */
(function(){
  var SCOPES="https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/drive.file";
  var tok=null,exp=0,tc=null,waiters=[];
  try{var sv=JSON.parse(sessionStorage.getItem("am-gtok")||"null");if(sv&&sv.exp>Date.now()+60000){tok=sv.tok;exp=sv.exp;}}catch(e){}
  function keep(){try{if(tok)sessionStorage.setItem("am-gtok",JSON.stringify({tok:tok,exp:exp}));else sessionStorage.removeItem("am-gtok");}catch(e){}}
  function CID(){return window.AMALNAMA_CLIENT_ID||"";}
  function err(code,msg){var e=new Error(msg||code);e.code=code;return e;}
  function ready(){return !!tok&&Date.now()<exp-60000;}
  function initTC(){
    if(tc)return tc;if(!CID()||!(window.google&&google.accounts&&google.accounts.oauth2))return null;
    tc=google.accounts.oauth2.initTokenClient({client_id:CID(),scope:SCOPES,
      callback:function(r){if(r&&r.access_token){tok=r.access_token;exp=Date.now()+(Number(r.expires_in)||3600)*1000;try{localStorage.setItem("am-gconnected","1");}catch(e){}keep();ui();done(true);window.dispatchEvent(new Event("am-google"));}else done(false);},
      error_callback:function(){done(false);}});
    return tc;}
  function done(v){waiters.splice(0).forEach(function(f){f(v);});ui();}
  function connect(){return new Promise(function(res){if(!initTC()){res(false);ui("nolib");return;}waiters.push(res);tc.requestAccessToken({prompt:""});});}
  function signOut(){try{if(tok)google.accounts.oauth2.revoke(tok,function(){});}catch(e){}tok=null;keep();try{localStorage.removeItem("am-gconnected");}catch(e){}ui();}
  async function api(method,url,body,raw){
    if(!ready())throw err(tok?"needs_reauth":"server_not_connected");
    var h={Authorization:"Bearer "+tok},b;
    if(raw){h["Content-Type"]=raw;b=body;}else if(body!==undefined){h["Content-Type"]="application/json";b=JSON.stringify(body);}
    var r=await fetch(url,{method:method,headers:h,body:b});
    if(r.status===401){tok=null;keep();ui();throw err("needs_reauth");}
    if(r.status===204)return {};
    if(!r.ok){var t="";try{t=await r.text();}catch(e){}var e=err(r.status===403?"not_in_manifest":"tool_error",t);e.status=r.status;throw e;}
    var ct=r.headers.get("content-type")||"";return ct.indexOf("json")>=0?r.json():r.text();}
  var CAL="https://www.googleapis.com/calendar/v3/calendars/primary/events";
  function evBody(i){var o={};
    if(i.allDay){if(i.startTime)o.start={date:i.startTime.slice(0,10)};if(i.endTime)o.end={date:i.endTime.slice(0,10)};}
    else{if(i.startTime)o.start={dateTime:i.startTime,timeZone:i.timeZone};if(i.endTime)o.end={dateTime:i.endTime,timeZone:i.timeZone};}
    ["summary","location","description","colorId"].forEach(function(k){if(i[k]!=null&&i[k]!=="")o[k]=i[k];});
    if(i.recurrenceData)o.recurrence=i.recurrenceData;
    if(i.overrideReminders)o.reminders={useDefault:false,overrides:i.overrideReminders};
    return o;}
  function b64(s){var u=new TextEncoder().encode(s),x="";for(var i=0;i<u.length;i++)x+=String.fromCharCode(u[i]);return btoa(x);}
  var tools={
    "Google Calendar":{
      create_event:function(i){return api("POST",CAL,evBody(i));},
      update_event:function(i){return api("PATCH",CAL+"/"+encodeURIComponent(i.eventId)+"?sendUpdates=none",evBody(i));},
      delete_event:function(i){return api("DELETE",CAL+"/"+encodeURIComponent(i.eventId)+"?sendUpdates=none").catch(function(e){if(e.status===404||e.status===410)return {};throw e;});}},
    "Google Drive":{
      search_files:async function(i){var name=((i.query||"").match(/'(.*)'/)||[])[1]||"";
        var q=encodeURIComponent("name = '"+name.replace(/'/g,"\\'")+"' and trashed = false");
        var r=await api("GET","https://www.googleapis.com/drive/v3/files?q="+q+"&fields=files(id,name,createdTime,modifiedTime)&pageSize=25&orderBy=createdTime%20desc&spaces=drive");
        return {files:(r.files||[]).map(function(f){return {id:f.id,title:f.name,createdTime:f.createdTime,modifiedTime:f.modifiedTime};})};},
      download_file_content:async function(i){var t=await api("GET","https://www.googleapis.com/drive/v3/files/"+encodeURIComponent(i.fileId)+"?alt=media");return {content:b64(typeof t==="string"?t:JSON.stringify(t))};},
      create_file:async function(i){var bd="amalnama"+Date.now(),mt=i.contentMimeType||"application/json";
        var body="--"+bd+"\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n"+JSON.stringify({name:i.title,mimeType:mt})+"\r\n--"+bd+"\r\nContent-Type: "+mt+"; charset=UTF-8\r\n\r\n"+(i.textContent||"")+"\r\n--"+bd+"--";
        var r=await api("POST","https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,createdTime",body,"multipart/related; boundary="+bd);
        return {id:r.id,title:r.name,createdTime:r.createdTime};},
      trash_file:function(i){return api("PATCH","https://www.googleapis.com/drive/v3/files/"+encodeURIComponent(i.fileId),{trashed:true});}}};
  var mcpShim={callTool:async function(s,t,i){var f=tools[s]&&tools[s][t];if(!f)throw err("not_in_manifest");return {payload:await f(i||{})};}};
  window.claude={use:async function(k){return k==="mcp"?mcpShim:null;}};
  window.amGoogle={connect:connect,signOut:signOut,ready:ready};
  // ---- connect bar UI
  function ui(state){
    var bar=document.getElementById("gbar");if(!bar)return;
    var txt=bar.querySelector(".gtxt"),btn=bar.querySelector(".gbtn");
    if(ready()){bar.classList.add("on");txt.innerHTML="<b>Google সংযুক্ত</b> · Calendar রিমাইন্ডার ও ল্যাপটপ-মোবাইল সিঙ্ক চালু";btn.textContent="সংযোগ বিচ্ছিন্ন";btn.onclick=signOut;return;}
    bar.classList.remove("on");
    if(!CID()){txt.innerHTML="<b>Google সংযোগ এখনো সেট করা হয়নি।</b> config.js-এ Client ID বসাও। ততক্ষণ ডেটা এই ডিভাইসে সেভ হবে।";btn.hidden=true;return;}
    btn.hidden=false;
    var again=false;try{again=!!localStorage.getItem("am-gconnected");}catch(e){}
    txt.innerHTML=again?"<b>আবার সংযোগ করো</b> · সিঙ্ক আর Calendar চালু রাখতে এক ক্লিক":"<b>Google দিয়ে সংযোগ করো</b> · Calendar-এ অটো রিমাইন্ডার আর ল্যাপটপ-মোবাইল সিঙ্কের জন্য";
    btn.innerHTML='<svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg><span>'+(again?"আবার সংযোগ":"Google দিয়ে সংযোগ")+'</span>';
    btn.onclick=function(){connect();};}
  window.addEventListener("am-google",function(){if(window.syncNow)window.syncNow({first:true});});
  document.addEventListener("DOMContentLoaded",function(){ui();});
  window.addEventListener("load",function(){ui();});
})();
