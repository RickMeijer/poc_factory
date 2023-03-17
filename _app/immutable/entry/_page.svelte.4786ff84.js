import{S as ce,i as de,s as se,e as pe,b as M,g as L,d as q,h as w,C as Me,M as Ne,k as D,l as T,m as N,N as ve,O as _e,F as G,G as Oe,H as Re,I as Le,P as Ye,Q as ke,R as he,T as Be,a as B,q as O,c as U,r as R,n as A,p as z,E as V,u as Q,L as be,o as Ae,U as Ue,w as ie,V as Ce,y as J,z as X,W as ye,X as we,A as Z,f as Ie,Y as Fe,B as H,v as De}from"../chunks/index.42aa7717.js";function qe(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var K={},ze={get exports(){return K},set exports(n){K=n}},Te;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/Te=function(){var n={},t={};return n.on=function(e,o){var a={name:e,handler:o};return t[e]=t[e]||[],t[e].unshift(a),a},n.off=function(e){var o=t[e.name].indexOf(e);o!==-1&&t[e.name].splice(o,1)},n.trigger=function(e,o){var a=t[e],s;if(a)for(s=a.length;s--;)a[s].handler(o)},n};var je=Te,$={},Ge={get exports(){return $},set exports(n){$=n}},x={},Qe={get exports(){return x},set exports(n){x=n}},oe,Ee;function We(){if(Ee)return oe;Ee=1;var n=1e3,t=n*60,e=t*60,o=e*24,a=o*7,s=o*365.25;oe=function(r,u){u=u||{};var d=typeof r;if(d==="string"&&r.length>0)return f(r);if(d==="number"&&isFinite(r))return u.long?i(r):c(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function f(r){if(r=String(r),!(r.length>100)){var u=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r);if(u){var d=parseFloat(u[1]),v=(u[2]||"ms").toLowerCase();switch(v){case"years":case"year":case"yrs":case"yr":case"y":return d*s;case"weeks":case"week":case"w":return d*a;case"days":case"day":case"d":return d*o;case"hours":case"hour":case"hrs":case"hr":case"h":return d*e;case"minutes":case"minute":case"mins":case"min":case"m":return d*t;case"seconds":case"second":case"secs":case"sec":case"s":return d*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return d;default:return}}}}function c(r){var u=Math.abs(r);return u>=o?Math.round(r/o)+"d":u>=e?Math.round(r/e)+"h":u>=t?Math.round(r/t)+"m":u>=n?Math.round(r/n)+"s":r+"ms"}function i(r){var u=Math.abs(r);return u>=o?l(r,u,o,"day"):u>=e?l(r,u,e,"hour"):u>=t?l(r,u,t,"minute"):u>=n?l(r,u,n,"second"):r+" ms"}function l(r,u,d,v){var C=u>=d*1.5;return Math.round(r/d)+" "+v+(C?"s":"")}return oe}function Je(n){e.debug=e,e.default=e,e.coerce=i,e.disable=s,e.enable=a,e.enabled=f,e.humanize=We(),e.destroy=l,Object.keys(n).forEach(r=>{e[r]=n[r]}),e.names=[],e.skips=[],e.formatters={};function t(r){let u=0;for(let d=0;d<r.length;d++)u=(u<<5)-u+r.charCodeAt(d),u|=0;return e.colors[Math.abs(u)%e.colors.length]}e.selectColor=t;function e(r){let u,d=null,v,C;function p(...g){if(!p.enabled)return;const y=p,b=Number(new Date),E=b-(u||b);y.diff=E,y.prev=u,y.curr=b,u=b,g[0]=e.coerce(g[0]),typeof g[0]!="string"&&g.unshift("%O");let I=0;g[0]=g[0].replace(/%([a-zA-Z%])/g,(h,k)=>{if(h==="%%")return"%";I++;const S=e.formatters[k];if(typeof S=="function"){const P=g[I];h=S.call(y,P),g.splice(I,1),I--}return h}),e.formatArgs.call(y,g),(y.log||e.log).apply(y,g)}return p.namespace=r,p.useColors=e.useColors(),p.color=e.selectColor(r),p.extend=o,p.destroy=e.destroy,Object.defineProperty(p,"enabled",{enumerable:!0,configurable:!1,get:()=>d!==null?d:(v!==e.namespaces&&(v=e.namespaces,C=e.enabled(r)),C),set:g=>{d=g}}),typeof e.init=="function"&&e.init(p),p}function o(r,u){const d=e(this.namespace+(typeof u>"u"?":":u)+r);return d.log=this.log,d}function a(r){e.save(r),e.namespaces=r,e.names=[],e.skips=[];let u;const d=(typeof r=="string"?r:"").split(/[\s,]+/),v=d.length;for(u=0;u<v;u++)d[u]&&(r=d[u].replace(/\*/g,".*?"),r[0]==="-"?e.skips.push(new RegExp("^"+r.slice(1)+"$")):e.names.push(new RegExp("^"+r+"$")))}function s(){const r=[...e.names.map(c),...e.skips.map(c).map(u=>"-"+u)].join(",");return e.enable(""),r}function f(r){if(r[r.length-1]==="*")return!0;let u,d;for(u=0,d=e.skips.length;u<d;u++)if(e.skips[u].test(r))return!1;for(u=0,d=e.names.length;u<d;u++)if(e.names[u].test(r))return!0;return!1}function c(r){return r.toString().substring(2,r.toString().length-2).replace(/\.\*\?$/,"*")}function i(r){return r instanceof Error?r.stack||r.message:r}function l(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}var Xe=Je;(function(n,t){t.formatArgs=o,t.save=a,t.load=s,t.useColors=e,t.storage=f(),t.destroy=(()=>{let i=!1;return()=>{i||(i=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function e(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function o(i){if(i[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+i[0]+(this.useColors?"%c ":" ")+"+"+n.exports.humanize(this.diff),!this.useColors)return;const l="color: "+this.color;i.splice(1,0,l,"color: inherit");let r=0,u=0;i[0].replace(/%[a-zA-Z%]/g,d=>{d!=="%%"&&(r++,d==="%c"&&(u=r))}),i.splice(u,0,l)}t.log=console.debug||console.log||(()=>{});function a(i){try{i?t.storage.setItem("debug",i):t.storage.removeItem("debug")}catch{}}function s(){let i;try{i=t.storage.getItem("debug")}catch{}return!i&&typeof process<"u"&&"env"in process&&(i={}.DEBUG),i}function f(){try{return localStorage}catch{}}n.exports=Xe(t);const{formatters:c}=n.exports;c.j=function(i){try{return JSON.stringify(i)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}}})(Qe,x);var ee={},Ze={get exports(){return ee},set exports(n){ee=n}},te={},He={get exports(){return te},set exports(n){te=n}};(function(n,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},n.exports=t.default})(He,te);(function(n,t){Object.defineProperty(t,"__esModule",{value:!0});var e=te,o=a(e);function a(s){return s&&s.__esModule?s:{default:s}}t.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},n.exports=t.default})(Ze,ee);var ne={},Ke={get exports(){return ne},set exports(n){ne=n}};(function(n,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],n.exports=t.default})(Ke,ne);var re={},$e={get exports(){return re},set exports(n){re=n}};(function(n,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe","getSphericalProperties","setSphericalProperties"],n.exports=t.default})($e,re);(function(n,t){Object.defineProperty(t,"__esModule",{value:!0});var e=x,o=r(e),a=ee,s=r(a),f=ne,c=r(f),i=re,l=r(i);function r(v){return v&&v.__esModule?v:{default:v}}const u=(0,o.default)("youtube-player"),d={};d.proxyEvents=v=>{const C={};for(const p of c.default){const g="on"+p.slice(0,1).toUpperCase()+p.slice(1);C[g]=y=>{u('event "%s"',g,y),v.trigger(p,y)}}return C},d.promisifyPlayer=(v,C=!1)=>{const p={};for(const g of l.default)C&&s.default[g]?p[g]=(...y)=>v.then(b=>{const E=s.default[g],I=b.getPlayerState(),_=b[g].apply(b,y);return E.stateChangeRequired||Array.isArray(E.acceptableStates)&&!E.acceptableStates.includes(I)?new Promise(h=>{const k=()=>{const S=b.getPlayerState();let P;typeof E.timeout=="number"&&(P=setTimeout(()=>{b.removeEventListener("onStateChange",k),h()},E.timeout)),Array.isArray(E.acceptableStates)&&E.acceptableStates.includes(S)&&(b.removeEventListener("onStateChange",k),clearTimeout(P),h())};b.addEventListener("onStateChange",k)}).then(()=>_):_}):p[g]=(...y)=>v.then(b=>b[g].apply(b,y));return p},t.default=d,n.exports=t.default})(Ge,$);var ae={},xe={get exports(){return ae},set exports(n){ae=n}},et=function(t,e,o){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");typeof e=="function"&&(o=e,e={}),e=e||{},o=o||function(){},s.type=e.type||"text/javascript",s.charset=e.charset||"utf8",s.async="async"in e?!!e.async:!0,s.src=t,e.attrs&&tt(s,e.attrs),e.text&&(s.text=""+e.text);var f="onload"in s?Pe:nt;f(s,o),s.onload||Pe(s,o),a.appendChild(s)};function tt(n,t){for(var e in t)n.setAttribute(e,t[e])}function Pe(n,t){n.onload=function(){this.onerror=this.onload=null,t(null,n)},n.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),n)}}function nt(n,t){n.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,n))}}(function(n,t){Object.defineProperty(t,"__esModule",{value:!0});var e=et,o=a(e);function a(s){return s&&s.__esModule?s:{default:s}}t.default=s=>new Promise(c=>{if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){c(window.YT);return}else{const l=window.location.protocol==="http:"?"http:":"https:";(0,o.default)(l+"//www.youtube.com/iframe_api",r=>{r&&s.trigger("error",r)})}const i=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{i&&i(),c(window.YT)}}),n.exports=t.default})(xe,ae);(function(n,t){Object.defineProperty(t,"__esModule",{value:!0});var e=je,o=i(e),a=$,s=i(a),f=ae,c=i(f);function i(r){return r&&r.__esModule?r:{default:r}}let l;t.default=(r,u={},d=!1)=>{const v=(0,o.default)();if(l||(l=(0,c.default)(v)),u.events)throw new Error("Event handlers cannot be overwritten.");if(typeof r=="string"&&!document.getElementById(r))throw new Error('Element "'+r+'" does not exist.');u.events=s.default.proxyEvents(v);const C=new Promise(g=>{typeof r=="object"&&r.playVideo instanceof Function?g(r):l.then(y=>{const b=new y.Player(r,u);return v.on("ready",()=>{g(b)}),null})}),p=s.default.promisifyPlayer(C,d);return p.on=v.on,p.off=v.off,p},n.exports=t.default})(ze,K);const rt=qe(K);function le(n){let t,e,o,a;const s=n[3].default,f=Me(s,n,n[2],null);let c=[{href:n[0]},{disabled:n[1]},{class:"svelte-101lbxk"}],i={};for(let l=0;l<c.length;l+=1)i=Ne(i,c[l]);return{c(){t=D(n[0]?"a":"button"),f&&f.c(),this.h()},l(l){t=T(l,((n[0]?"a":"button")||"null").toUpperCase(),{href:!0,disabled:!0,class:!0});var r=N(t);f&&f.l(r),r.forEach(w),this.h()},h(){/-/.test(n[0]?"a":"button")?ve(t,i):_e(t,i)},m(l,r){M(l,t,r),f&&f.m(t,null),e=!0,o||(a=[G(t,"click",n[4]),G(t,"keydown",n[5])],o=!0)},p(l,r){f&&f.p&&(!e||r&4)&&Oe(f,s,l,l[2],e?Le(s,l[2],r,null):Re(l[2]),null),i=Ye(c,[(!e||r&1)&&{href:l[0]},(!e||r&2)&&{disabled:l[1]},{class:"svelte-101lbxk"}]),/-/.test(l[0]?"a":"button")?ve(t,i):_e(t,i)},i(l){e||(L(f,l),e=!0)},o(l){q(f,l),e=!1},d(l){l&&w(t),f&&f.d(l),o=!1,ke(a)}}}function at(n){let t=n[0]?"a":"button",e,o,a=(n[0]?"a":"button")&&le(n);return{c(){a&&a.c(),e=pe()},l(s){a&&a.l(s),e=pe()},m(s,f){a&&a.m(s,f),M(s,e,f),o=!0},p(s,[f]){s[0],t?se(t,s[0]?"a":"button")?(a.d(1),a=le(s),a.c(),a.m(e.parentNode,e)):a.p(s,f):(a=le(s),a.c(),a.m(e.parentNode,e)),t=s[0]?"a":"button"},i(s){o||(L(a),o=!0)},o(s){q(a),o=!1},d(s){s&&w(e),a&&a.d(s)}}}function st(n,t,e){let{$$slots:o={},$$scope:a}=t,{href:s=""}=t,{disabled:f=!1}=t;function c(l){he.call(this,n,l)}function i(l){he.call(this,n,l)}return n.$$set=l=>{"href"in l&&e(0,s=l.href),"disabled"in l&&e(1,f=l.disabled),"$$scope"in l&&e(2,a=l.$$scope)},[s,f,a,o,c,i]}class ue extends ce{constructor(t){super(),de(this,t,st,at,se,{href:0,disabled:1})}}const{window:fe}=Ue;function ot(n){let t,e,o,a,s,f,c,i=n[2](n[0])+"",l,r,u,d,v,C,p,g=n[2](n[1])+"",y,b,E,I,_,h,k;return Be(n[12]),{c(){t=D("div"),e=D("div"),o=B(),a=D("div"),s=B(),f=D("div"),c=D("div"),l=O(i),r=B(),u=D("button"),d=O("]"),v=B(),C=D("div"),p=D("div"),y=O(g),b=B(),E=D("button"),I=O("["),this.h()},l(S){t=T(S,"DIV",{class:!0});var P=N(t);e=T(P,"DIV",{class:!0}),N(e).forEach(w),o=U(P),a=T(P,"DIV",{class:!0}),N(a).forEach(w),s=U(P),f=T(P,"DIV",{class:!0});var m=N(f);c=T(m,"DIV",{class:!0});var F=N(c);l=R(F,i),F.forEach(w),r=U(m),u=T(m,"BUTTON",{class:!0});var Y=N(u);d=R(Y,"]"),Y.forEach(w),m.forEach(w),v=U(P),C=T(P,"DIV",{class:!0});var j=N(C);p=T(j,"DIV",{class:!0});var me=N(p);y=R(me,g),me.forEach(w),b=U(j),E=T(j,"BUTTON",{class:!0});var ge=N(E);I=R(ge,"["),ge.forEach(w),j.forEach(w),P.forEach(w),this.h()},h(){A(e,"class","track svelte-b4b55g"),A(a,"class","selection svelte-b4b55g"),z(a,"left",n[7]),z(a,"right",n[6]),A(c,"class","valueLabel svelte-b4b55g"),A(u,"class","svelte-b4b55g"),A(f,"class","start svelte-b4b55g"),z(f,"left",n[7]),A(p,"class","valueLabel svelte-b4b55g"),A(E,"class","svelte-b4b55g"),A(C,"class","stop svelte-b4b55g"),z(C,"right",n[6]),A(t,"class",_="controls "+n[3]+" svelte-b4b55g")},m(S,P){M(S,t,P),V(t,e),n[13](e),V(t,o),V(t,a),V(t,s),V(t,f),V(f,c),V(c,l),V(f,r),V(f,u),V(u,d),V(t,v),V(t,C),V(C,p),V(p,y),V(C,b),V(C,E),V(E,I),h||(k=[G(fe,"mouseup",n[9]),G(fe,"resize",n[12]),G(f,"mousedown",n[8]),G(C,"mousedown",n[8])],h=!0)},p(S,[P]){P&128&&z(a,"left",S[7]),P&64&&z(a,"right",S[6]),P&5&&i!==(i=S[2](S[0])+"")&&Q(l,i),P&128&&z(f,"left",S[7]),P&6&&g!==(g=S[2](S[1])+"")&&Q(y,g),P&64&&z(C,"right",S[6]),P&8&&_!==(_="controls "+S[3]+" svelte-b4b55g")&&A(t,"class",_)},i:be,o:be,d(S){S&&w(t),n[13](null),h=!1,ke(k)}}}function lt(n,t,e){let o,a,{min:s}=t,{max:f}=t,{minValue:c}=t,{maxValue:i}=t,{label:l=_=>_.toString()}=t,{class:r=""}=t,u,d,v,C,p;function g(_){const k=(_.pageX-C)/v*f;u&&k<i&&k>=s?e(0,c=k):k>c&&k<=f&&e(1,i=k)}function y(_){const h=_.currentTarget;u=h==null?void 0:h.classList.contains("start"),window.addEventListener("mousemove",g)}function b(){window.removeEventListener("mousemove",g)}Ae(()=>{const _=d.getBoundingClientRect();v=_.width,C=_.left});function E(){e(5,p=fe.innerWidth)}function I(_){ie[_?"unshift":"push"](()=>{d=_,e(4,d)})}return n.$$set=_=>{"min"in _&&e(10,s=_.min),"max"in _&&e(11,f=_.max),"minValue"in _&&e(0,c=_.minValue),"maxValue"in _&&e(1,i=_.maxValue),"label"in _&&e(2,l=_.label),"class"in _&&e(3,r=_.class)},n.$$.update=()=>{n.$$.dirty&2049&&e(7,o=`${c/f*100}%`),n.$$.dirty&2050&&e(6,a=`${100-i/f*100}%`)},[c,i,l,r,d,p,a,o,y,b,s,f,E,I]}class it extends ce{constructor(t){super(),de(this,t,lt,ot,se,{min:10,max:11,minValue:0,maxValue:1,label:2,class:3})}}function Ve(n){let t,e,o,a,s,f;e=new ue({props:{$$slots:{default:[ut]},$$scope:{ctx:n}}}),e.$on("click",n[8]);let c=n[0]&&n[1]&&Se(n);return s=new ue({props:{$$slots:{default:[ct]},$$scope:{ctx:n}}}),s.$on("click",n[10]),{c(){t=D("div"),J(e.$$.fragment),o=B(),c&&c.c(),a=B(),J(s.$$.fragment),this.h()},l(i){t=T(i,"DIV",{class:!0});var l=N(t);X(e.$$.fragment,l),o=U(l),c&&c.l(l),a=U(l),X(s.$$.fragment,l),l.forEach(w),this.h()},h(){A(t,"class","controls svelte-102b5v9")},m(i,l){M(i,t,l),Z(e,t,null),V(t,o),c&&c.m(t,null),V(t,a),Z(s,t,null),f=!0},p(i,l){const r={};l&32777&&(r.$$scope={dirty:l,ctx:i}),e.$set(r),i[0]&&i[1]?c?(c.p(i,l),l&3&&L(c,1)):(c=Se(i),c.c(),L(c,1),c.m(t,a)):c&&(De(),q(c,1,1,()=>{c=null}),Ie());const u={};l&32794&&(u.$$scope={dirty:l,ctx:i}),s.$set(u)},i(i){f||(L(e.$$.fragment,i),L(c),L(s.$$.fragment,i),f=!0)},o(i){q(e.$$.fragment,i),q(c),q(s.$$.fragment,i),f=!1},d(i){i&&w(t),H(e),c&&c.d(),H(s)}}}function ut(n){let t,e=W(n[0]||n[3])+"",o;return{c(){t=O("start loop at "),o=O(e)},l(a){t=R(a,"start loop at "),o=R(a,e)},m(a,s){M(a,t,s),M(a,o,s)},p(a,s){s&9&&e!==(e=W(a[0]||a[3])+"")&&Q(o,e)},d(a){a&&w(t),a&&w(o)}}}function Se(n){let t,e;return t=new ue({props:{$$slots:{default:[ft]},$$scope:{ctx:n}}}),t.$on("click",n[9]),{c(){J(t.$$.fragment)},l(o){X(t.$$.fragment,o)},m(o,a){Z(t,o,a),e=!0},p(o,a){const s={};a&32768&&(s.$$scope={dirty:a,ctx:o}),t.$set(s)},i(o){e||(L(t.$$.fragment,o),e=!0)},o(o){q(t.$$.fragment,o),e=!1},d(o){H(t,o)}}}function ft(n){let t;return{c(){t=O("reset")},l(e){t=R(e,"reset")},m(e,o){M(e,t,o)},d(e){e&&w(t)}}}function ct(n){let t,e=W(n[1]===n[4]?n[3]:n[1])+"",o;return{c(){t=O("stop loop at "),o=O(e)},l(a){t=R(a,"stop loop at "),o=R(a,e)},m(a,s){M(a,t,s),M(a,o,s)},p(a,s){s&26&&e!==(e=W(a[1]===a[4]?a[3]:a[1])+"")&&Q(o,e)},d(a){a&&w(t),a&&w(o)}}}function dt(n){let t,e,o,a,s,f,c,i,l,r,u,d,v,C,p,g,y,b,E,I,_,h=n[2]&&Ve(n);function k(m){n[11](m)}function S(m){n[12](m)}let P={min:0,max:n[4],label:W};return n[0]!==void 0&&(P.minValue=n[0]),n[1]!==void 0&&(P.maxValue=n[1]),r=new it({props:P}),ie.push(()=>Ce(r,"minValue",k)),ie.push(()=>Ce(r,"maxValue",S)),{c(){t=D("div"),e=D("div"),o=O(`Youtube id
		`),a=D("input"),s=B(),h&&h.c(),f=B(),c=D("div"),i=B(),l=D("div"),J(r.$$.fragment),v=B(),C=O(n[3]),p=O(" | "),g=O(n[0]),y=O(" | "),b=O(n[1]),this.h()},l(m){t=T(m,"DIV",{class:!0});var F=N(t);e=T(F,"DIV",{class:!0});var Y=N(e);o=R(Y,`Youtube id
		`),a=T(Y,"INPUT",{type:!0,class:!0}),Y.forEach(w),s=U(F),h&&h.l(F),f=U(F),c=T(F,"DIV",{id:!0}),N(c).forEach(w),i=U(F),l=T(F,"DIV",{class:!0});var j=N(l);X(r.$$.fragment,j),j.forEach(w),F.forEach(w),v=U(m),C=R(m,n[3]),p=R(m," | "),g=R(m,n[0]),y=R(m," | "),b=R(m,n[1]),this.h()},h(){A(a,"type","text"),A(a,"class","svelte-102b5v9"),A(e,"class","videoId-input svelte-102b5v9"),A(c,"id","player"),A(l,"class","video-controls svelte-102b5v9"),ye(l,"muted",n[5]),A(t,"class","video-container svelte-102b5v9")},m(m,F){M(m,t,F),V(t,e),V(e,o),V(e,a),we(a,n[2]),V(t,s),h&&h.m(t,null),V(t,f),V(t,c),V(t,i),V(t,l),Z(r,l,null),M(m,v,F),M(m,C,F),M(m,p,F),M(m,g,F),M(m,y,F),M(m,b,F),E=!0,I||(_=G(a,"input",n[7]),I=!0)},p(m,[F]){F&4&&a.value!==m[2]&&we(a,m[2]),m[2]?h?(h.p(m,F),F&4&&L(h,1)):(h=Ve(m),h.c(),L(h,1),h.m(t,f)):h&&(De(),q(h,1,1,()=>{h=null}),Ie());const Y={};F&16&&(Y.max=m[4]),!u&&F&1&&(u=!0,Y.minValue=m[0],Fe(()=>u=!1)),!d&&F&2&&(d=!0,Y.maxValue=m[1],Fe(()=>d=!1)),r.$set(Y),(!E||F&32)&&ye(l,"muted",m[5]),(!E||F&8)&&Q(C,m[3]),(!E||F&1)&&Q(g,m[0]),(!E||F&2)&&Q(b,m[1])},i(m){E||(L(h),L(r.$$.fragment,m),E=!0)},o(m){q(h),q(r.$$.fragment,m),E=!1},d(m){m&&w(t),h&&h.d(),H(r),m&&w(v),m&&w(C),m&&w(p),m&&w(g),m&&w(y),m&&w(b),I=!1,_()}}}function W(n){if(!n)return"";const t=Math.floor(n/60);let e=Math.round(n-t*60).toString().padStart(2,"0");return`${t}:${e}`}function mt(n,t,e){let o=0,a,s,f,c=0,i,l=0,r=!1;Ae(()=>{e(2,s=sessionStorage.getItem("youtubeId")||""),e(6,f=rt("player",{height:"100%",width:"100%",playerVars:{modestbranding:1,rel:0,controls:0,autoplay:0}})),f.on("stateChange",async({data:b})=>{i&&cancelAnimationFrame(i),e(5,r=!1),b===1&&(e(5,r=!0),i=requestAnimationFrame(u),e(4,l=l||await f.getDuration()),e(1,a=a||l))})});async function u(){e(3,c=await f.getCurrentTime()),i=requestAnimationFrame(u)}function d(){s=this.value,e(2,s)}const v=()=>e(0,o=c),C=()=>(e(0,o=0),e(1,a=l)),p=()=>e(1,a=c);function g(b){o=b,e(0,o)}function y(b){a=b,e(1,a)}return n.$$.update=()=>{n.$$.dirty&4&&s&&sessionStorage.setItem("youtubeId",s),n.$$.dirty&69&&s&&f.loadVideoById(s,o,"480"),n.$$.dirty&75&&f&&c>=a&&f.seekTo(o,!0)},[o,a,s,c,l,r,f,d,v,C,p,g,y]}class pt extends ce{constructor(t){super(),de(this,t,mt,dt,se,{})}}export{pt as default};