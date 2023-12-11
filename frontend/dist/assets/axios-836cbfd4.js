import{E as $e,D as Y,dr as Ot}from"./index-bf334511.js";function Ke(e,t){return function(){return e.apply(t,arguments)}}const{toString:At}=Object.prototype,{getPrototypeOf:Oe}=Object,Z=(e=>t=>{const n=At.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>Z(t)===e),ee=e=>t=>typeof t===e,{isArray:j}=Array,q=ee("undefined");function Tt(e){return e!==null&&!q(e)&&e.constructor!==null&&!q(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ge=C("ArrayBuffer");function _t(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ge(e.buffer),t}const Ct=ee("string"),O=ee("function"),Xe=ee("number"),te=e=>e!==null&&typeof e=="object",Nt=e=>e===!0||e===!1,$=e=>{if(Z(e)!=="object")return!1;const t=Oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},gt=C("Date"),xt=C("File"),Pt=C("Blob"),Dt=C("FileList"),Ft=e=>te(e)&&O(e.pipe),Lt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=Z(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},Ut=C("URLSearchParams"),Bt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function z(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),j(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ye(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Qe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ze=e=>!q(e)&&e!==Qe;function he(){const{caseless:e}=Ze(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ye(t,s)||s;$(t[o])&&$(r)?t[o]=he(t[o],r):$(r)?t[o]=he({},r):j(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&z(arguments[r],n);return t}const It=(e,t,n,{allOwnKeys:r}={})=>(z(t,(s,o)=>{n&&O(s)?e[o]=Ke(s,n):e[o]=s},{allOwnKeys:r}),e),jt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Mt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ht=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&Oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},qt=e=>{if(!e)return null;if(j(e))return e;let t=e.length;if(!Xe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Vt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Oe(Uint8Array)),zt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},vt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Jt=C("HTMLFormElement"),Wt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ue=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),$t=C("RegExp"),et=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};z(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},Kt=e=>{et(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Gt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return j(e)?r(e):r(String(e).split(t)),n},Xt=()=>{},Yt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ae="abcdefghijklmnopqrstuvwxyz",Be="0123456789",tt={DIGIT:Be,ALPHA:ae,ALPHA_DIGIT:ae+ae.toUpperCase()+Be},Qt=(e=16,t=tt.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Zt(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const en=e=>{const t=new Array(10),n=(r,s)=>{if(te(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=j(r)?[]:{};return z(r,(i,c)=>{const d=n(i,s+1);!q(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},tn=C("AsyncFunction"),nn=e=>e&&(te(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:j,isArrayBuffer:Ge,isBuffer:Tt,isFormData:Lt,isArrayBufferView:_t,isString:Ct,isNumber:Xe,isBoolean:Nt,isObject:te,isPlainObject:$,isUndefined:q,isDate:gt,isFile:xt,isBlob:Pt,isRegExp:$t,isFunction:O,isStream:Ft,isURLSearchParams:Ut,isTypedArray:Vt,isFileList:Dt,forEach:z,merge:he,extend:It,trim:Bt,stripBOM:jt,inherits:Mt,toFlatObject:Ht,kindOf:Z,kindOfTest:C,endsWith:kt,toArray:qt,forEachEntry:zt,matchAll:vt,isHTMLForm:Jt,hasOwnProperty:Ue,hasOwnProp:Ue,reduceDescriptors:et,freezeMethods:Kt,toObjectSet:Gt,toCamelCase:Wt,noop:Xt,toFiniteNumber:Yt,findKey:Ye,global:Qe,isContextDefined:Ze,ALPHABET:tt,generateString:Qt,isSpecCompliantForm:Zt,toJSONObject:en,isAsyncFn:tn,isThenable:nn};function E(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(E,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const nt=E.prototype,rt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{rt[e]={value:e}});Object.defineProperties(E,rt);Object.defineProperty(nt,"isAxiosError",{value:!0});E.from=(e,t,n,r,s,o)=>{const i=Object.create(nt);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),E.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const rn=null;function me(e){return a.isPlainObject(e)||a.isArray(e)}function st(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ie(e,t,n){return e?e.concat(t).map(function(s,o){return s=st(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function sn(e){return a.isArray(e)&&!e.some(me)}const on=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ne(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,b){return!a.isUndefined(b[h])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new E("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,h,b){let R=f;if(f&&!b&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&sn(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(R=a.toArray(f)))return h=st(h),R.forEach(function(B,M){!(a.isUndefined(B)||B===null)&&t.append(i===!0?Ie([h],M,o):i===null?h:h+"[]",u(B))}),!1}return me(f)?!0:(t.append(Ie(b,h,o),u(f)),!1)}const p=[],y=Object.assign(on,{defaultVisitor:l,convertValue:u,isVisitable:me});function m(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(R,A){(!(a.isUndefined(R)||R===null)&&s.call(t,R,a.isString(A)?A.trim():A,h,y))===!0&&m(R,h?h.concat(A):[A])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return m(e),t}function je(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ae(e,t){this._pairs=[],e&&ne(e,this,t)}const ot=Ae.prototype;ot.append=function(t,n){this._pairs.push([t,n])};ot.toString=function(t){const n=t?function(r){return t.call(this,r,je)}:je;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function an(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function it(e,t,n){if(!t)return e;const r=n&&n.encode||an,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new Ae(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class cn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Me=cn,at={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},un=typeof URLSearchParams<"u"?URLSearchParams:Ae,ln=typeof FormData<"u"?FormData:null,fn=typeof Blob<"u"?Blob:null,dn=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),pn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),T={isBrowser:!0,classes:{URLSearchParams:un,FormData:ln,Blob:fn},isStandardBrowserEnv:dn,isStandardBrowserWebWorkerEnv:pn,protocols:["http","https","file","blob","url","data"]};function hn(e,t){return ne(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function mn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function En(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function ct(e){function t(n,r,s,o){let i=n[o++];const c=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=En(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(mn(r),s,n,0)}),n}return null}const yn={"Content-Type":void 0};function wn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const re={transitional:at,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(ct(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return hn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return ne(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),wn(t)):t}],transformResponse:[function(t){const n=this.transitional||re.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?E.from(c,E.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){re.headers[t]={}});a.forEach(["post","put","patch"],function(t){re.headers[t]=a.merge(yn)});const Te=re,bn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Rn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&bn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},He=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function K(e){return e===!1||e==null?e:a.isArray(e)?e.map(K):String(e)}function Sn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const On=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ce(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function An(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Tn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class se{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,u){const l=k(d);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||d]=K(c))}const i=(c,d)=>a.forEach(c,(u,l)=>o(u,l,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!On(t)?i(Rn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=k(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Sn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=k(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ce(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=k(i),i){const c=a.findKey(r,i);c&&(!n||ce(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ce(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=K(s),delete n[o];return}const c=t?An(o):String(o).trim();c!==o&&delete n[o],n[c]=K(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[He]=this[He]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=k(i);r[c]||(Tn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}se.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(se.prototype);a.freezeMethods(se);const x=se;function ue(e,t){const n=this||Te,r=t||n,s=x.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ut(e){return!!(e&&e.__CANCEL__)}function v(e,t,n){E.call(this,e??"canceled",E.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(v,E,{__CANCEL__:!0});function _n(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new E("Request failed with status code "+n.status,[E.ERR_BAD_REQUEST,E.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Cn=T.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,c){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Nn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function gn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function lt(e,t){return e&&!Nn(t)?gn(e,t):t}const xn=T.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Pn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Dn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const u=Date.now(),l=r[o];i||(i=u),n[s]=d,r[s]=u;let p=o,y=0;for(;p!==s;)y+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const m=l&&u-l;return m?Math.round(y*1e3/m):void 0}}function ke(e,t){let n=0;const r=Dn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,d=r(c),u=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:d||void 0,estimated:d&&i&&u?(i-o)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const Fn=typeof XMLHttpRequest<"u",Ln=Fn&&function(e){return new Promise(function(n,r){let s=e.data;const o=x.from(e.headers).normalize(),i=e.responseType;let c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&(T.isStandardBrowserEnv||T.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(m+":"+f))}const l=lt(e.baseURL,e.url);u.open(e.method.toUpperCase(),it(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function p(){if(!u)return;const m=x.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:m,config:e,request:u};_n(function(R){n(R),d()},function(R){r(R),d()},h),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(r(new E("Request aborted",E.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new E("Network Error",E.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||at;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new E(f,h.clarifyTimeoutError?E.ETIMEDOUT:E.ECONNABORTED,e,u)),u=null},T.isStandardBrowserEnv){const m=(e.withCredentials||xn(l))&&e.xsrfCookieName&&Cn.read(e.xsrfCookieName);m&&o.set(e.xsrfHeaderName,m)}s===void 0&&o.setContentType(null),"setRequestHeader"in u&&a.forEach(o.toJSON(),function(f,h){u.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",ke(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",ke(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=m=>{u&&(r(!m||m.type?new v(null,e,u):m),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const y=Pn(l);if(y&&T.protocols.indexOf(y)===-1){r(new E("Unsupported protocol "+y+":",E.ERR_BAD_REQUEST,e));return}u.send(s||null)})},G={http:rn,xhr:Ln};a.forEach(G,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Un={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?G[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new E(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(G,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:G};function le(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new v(null,e)}function qe(e){return le(e),e.headers=x.from(e.headers),e.data=ue.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Un.getAdapter(e.adapter||Te.adapter)(e).then(function(r){return le(e),r.data=ue.call(e,e.transformResponse,r),r.headers=x.from(r.headers),r},function(r){return ut(r)||(le(e),r&&r.response&&(r.response.data=ue.call(e,e.transformResponse,r.response),r.response.headers=x.from(r.response.headers))),Promise.reject(r)})}const Ve=e=>e instanceof x?e.toJSON():e;function I(e,t){t=t||{};const n={};function r(u,l,p){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:p},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,p){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,p)}else return r(u,l,p)}function o(u,l){if(!a.isUndefined(l))return r(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,p){if(p in t)return r(u,l);if(p in e)return r(void 0,u)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>s(Ve(u),Ve(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=d[l]||s,y=p(e[l],t[l],l);a.isUndefined(y)&&p!==c||(n[l]=y)}),n}const ft="1.4.0",_e={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{_e[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ze={};_e.transitional=function(t,n,r){function s(o,i){return"[Axios v"+ft+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new E(s(i," has been removed"+(n?" in "+n:"")),E.ERR_DEPRECATED);return n&&!ze[i]&&(ze[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Bn(e,t,n){if(typeof e!="object")throw new E("options must be an object",E.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new E("option "+o+" must be "+d,E.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new E("Unknown option "+o,E.ERR_BAD_OPTION)}}const Ee={assertOptions:Bn,validators:_e},P=Ee.validators;class Q{constructor(t){this.defaults=t,this.interceptors={request:new Me,response:new Me}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=I(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Ee.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Ee.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=x.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const u=[];this.interceptors.response.forEach(function(h){u.push(h.fulfilled,h.rejected)});let l,p=0,y;if(!d){const f=[qe.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,u),y=f.length,l=Promise.resolve(n);p<y;)l=l.then(f[p++],f[p++]);return l}y=c.length;let m=n;for(p=0;p<y;){const f=c[p++],h=c[p++];try{m=f(m)}catch(b){h.call(this,b);break}}try{l=qe.call(this,m)}catch(f){return Promise.reject(f)}for(p=0,y=u.length;p<y;)l=l.then(u[p++],u[p++]);return l}getUri(t){t=I(this.defaults,t);const n=lt(t.baseURL,t.url);return it(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){Q.prototype[t]=function(n,r){return this.request(I(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(I(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}Q.prototype[t]=n(),Q.prototype[t+"Form"]=n(!0)});const X=Q;class Ce{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new v(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Ce(function(s){t=s}),cancel:t}}}const In=Ce;function jn(e){return function(n){return e.apply(null,n)}}function Mn(e){return a.isObject(e)&&e.isAxiosError===!0}const ye={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ye).forEach(([e,t])=>{ye[t]=e});const Hn=ye;function dt(e){const t=new X(e),n=Ke(X.prototype.request,t);return a.extend(n,X.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return dt(I(e,s))},n}const w=dt(Te);w.Axios=X;w.CanceledError=v;w.CancelToken=In;w.isCancel=ut;w.VERSION=ft;w.toFormData=ne;w.AxiosError=E;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=jn;w.isAxiosError=Mn;w.mergeConfig=I;w.AxiosHeaders=x;w.formToJSON=e=>ct(a.isHTMLForm(e)?new FormData(e):e);w.HttpStatusCode=Hn;w.default=w;const kn=w,D=new WeakMap,fe={},J={},F=()=>{},g=F(),de=Object,_=e=>e===g,L=e=>typeof e=="function",U=(e,t)=>({...e,...t}),Ne="undefined",oe=typeof window!=Ne,we=typeof document!=Ne,qn=()=>oe&&typeof window.requestAnimationFrame!=Ne,Vn=(e,t)=>{const n=D.get(e);return[()=>!_(t)&&e.get(t)||fe,r=>{if(!_(t)){const s=e.get(t);t in J||(J[t]=s),n[5](t,U(s,r),s||fe)}},n[6],()=>!_(t)&&t in J?J[t]:!_(t)&&e.get(t)||fe]},W=new WeakMap;let zn=0;const V=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let s,o;if(de(e)===e&&!r&&n!=RegExp){if(s=W.get(e),s)return s;if(s=++zn+"~",W.set(e,s),n==Array){for(s="@",o=0;o<e.length;o++)s+=V(e[o])+",";W.set(e,s)}if(n==de){s="#";const i=de.keys(e).sort();for(;!_(o=i.pop());)_(e[o])||(s+=o+":"+V(e[o])+",");W.set(e,s)}}else s=r?e.toJSON():t=="symbol"?e.toString():t=="string"?JSON.stringify(e):""+e;return s};let be=!0;const vn=()=>be,[Re,Se]=oe&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[F,F],Jn=()=>{const e=we&&document.visibilityState;return _(e)||e!=="hidden"},Wn=e=>(we&&document.addEventListener("visibilitychange",e),Re("focus",e),()=>{we&&document.removeEventListener("visibilitychange",e),Se("focus",e)}),$n=e=>{const t=()=>{be=!0,e()},n=()=>{be=!1};return Re("online",t),Re("offline",n),()=>{Se("online",t),Se("offline",n)}},Kn={isOnline:vn,isVisible:Jn},Gn={initFocus:Wn,initReconnect:$n},pr=!$e.useId,ge=!oe||"Deno"in window,hr=e=>qn()?window.requestAnimationFrame(e):setTimeout(e,1),mr=ge?Y.useEffect:Y.useLayoutEffect,pe=typeof navigator<"u"&&navigator.connection,ve=!ge&&pe&&(["slow-2g","2g"].includes(pe.effectiveType)||pe.saveData),pt=e=>{if(L(e))try{e=e()}catch{e=""}const t=e;return e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?V(e):"",[e,t]};let Xn=0;const Je=()=>++Xn,ht=0,mt=1,Et=2,Yn=3;var Er={__proto__:null,ERROR_REVALIDATE_EVENT:Yn,FOCUS_EVENT:ht,MUTATE_EVENT:Et,RECONNECT_EVENT:mt};async function Qn(...e){const[t,n,r,s]=e,o=U({populateCache:!0,throwOnError:!0},typeof s=="boolean"?{revalidate:s}:s||{});let i=o.populateCache;const c=o.rollbackOnError;let d=o.optimisticData;const u=o.revalidate!==!1,l=m=>typeof c=="function"?c(m):c!==!1,p=o.throwOnError;if(L(n)){const m=n,f=[],h=t.keys();for(let b=h.next();!b.done;b=h.next()){const R=b.value;!/^\$(inf|sub)\$/.test(R)&&m(t.get(R)._k)&&f.push(R)}return Promise.all(f.map(y))}return y(n);async function y(m){const[f]=pt(m);if(!f)return;const[h,b]=Vn(t,f),[R,A,B]=D.get(t),M=R[f],xe=()=>u&&(delete B[f],M&&M[0])?M[0](Et).then(()=>h().data):h().data;if(e.length<3)return xe();let S=r,N;const Pe=Je();A[f]=[Pe,0];const De=!_(d),Fe=h(),Rt=Fe.data,Le=Fe._c,H=_(Le)?Rt:Le;if(De&&(d=L(d)?d(H):d,b({data:d,_c:H})),L(S))try{S=S(H)}catch(ie){N=ie}if(S&&L(S.then))if(S=await S.catch(ie=>{N=ie}),Pe!==A[f][0]){if(N)throw N;return S}else N&&De&&l(N)&&(i=!0,S=H,b({data:S,_c:g}));i&&(N||(L(i)&&(S=i(S,H)),b({data:S,_c:g}))),A[f][1]=Je();const St=await xe();if(b({_c:g}),N){if(p)throw N;return}return i?St:S}}const We=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},Zn=(e,t)=>{if(!D.has(e)){const n=U(Gn,t),r={},s=Qn.bind(g,e);let o=F;const i={},c=(l,p)=>{const y=i[l]||[];return i[l]=y,y.push(p),()=>y.splice(y.indexOf(p),1)},d=(l,p,y)=>{e.set(l,p);const m=i[l];if(m)for(const f of m)f(p,y)},u=()=>{if(!D.has(e)&&(D.set(e,[r,{},{},{},s,d,c]),!ge)){const l=n.initFocus(setTimeout.bind(g,We.bind(g,r,ht))),p=n.initReconnect(setTimeout.bind(g,We.bind(g,r,mt)));o=()=>{l&&l(),p&&p(),D.delete(e)}}};return u(),[e,s,u,o]}return[e,D.get(e)[4]]},er=(e,t,n,r,s)=>{const o=n.errorRetryCount,i=s.retryCount,c=~~((Math.random()+.5)*(1<<(i<8?i:8)))*n.errorRetryInterval;!_(o)&&i>o||setTimeout(r,c,s)},tr=(e,t)=>V(e)==V(t),[yt,nr]=Zn(new Map),rr=U({onLoadingSlow:F,onSuccess:F,onError:F,onErrorRetry:er,onDiscarded:F,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:ve?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:ve?5e3:3e3,compare:tr,isPaused:()=>!1,cache:yt,mutate:nr,fallback:{}},Kn),sr=(e,t)=>{const n=U(e,t);if(t){const{use:r,fallback:s}=e,{use:o,fallback:i}=t;r&&o&&(n.use=r.concat(o)),s&&i&&(n.fallback=U(s,i))}return n},or=Y.createContext({}),wt=oe&&window.__SWR_DEVTOOLS_USE__,ir=wt?window.__SWR_DEVTOOLS_USE__:[],ar=()=>{wt&&(window.__SWR_DEVTOOLS_REACT__=$e)},cr=e=>L(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}],ur=()=>U(rr,Y.useContext(or)),lr=e=>(t,n,r)=>e(t,n&&((...o)=>{const[i]=pt(t),[,,,c]=D.get(yt),d=c[i];return d?(delete c[i],d):n(...o)}),r),fr=ir.concat(lr),yr=e=>function(...n){const r=ur(),[s,o,i]=cr(n),c=sr(r,i);let d=e;const{use:u}=c,l=(u||[]).concat(fr);for(let p=l.length;p--;)d=l[p](d);return d(s,o||c.fetcher||null,c)},wr=(e,t,n)=>{const r=t[e]||(t[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s>=0&&(r[s]=r[r.length-1],r.pop())}};ar();const bt=kn.create({baseURL:Ot});bt.interceptors.response.use(e=>e,e=>Promise.reject(e.response&&e.response.data||"Something went wrong"));const br=async e=>{const[t,n]=Array.isArray(e)?e:[e];return(await bt.get(t,{...n})).data},Rr={chat:"/api/chat",kanban:"/api/kanban",calendar:"/api/calendar",auth:{me:"/api/auth/me",login:"/api/auth/login",register:"/api/auth/register"},mail:{list:"/api/mail/list",details:"/api/mail/details",labels:"/api/mail/labels"},post:{list:"/api/post/list",details:"/api/post/details",latest:"/api/post/latest",search:"/api/post/search"},product:{list:"/api/product/list",details:"/api/product/details",search:"/api/product/search"}};export{ge as I,D as S,g as U,kn as a,L as b,Vn as c,Er as d,Rr as e,br as f,Je as g,Qn as h,_ as i,wr as j,pr as k,nr as l,U as m,bt as n,hr as r,pt as s,mr as u,yr as w};