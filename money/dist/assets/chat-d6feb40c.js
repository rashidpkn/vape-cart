import{eq as xe,er as Fe,es as Ue,et as ze,eu as $e,ev as _,ew as re,ex as We,D as c,d3 as Ve,d5 as Ge,d6 as Y,ae as e,bn as Be,bm as pe,bo as me,ey as He,c9 as qe,a_ as P,aY as R,ca as Ye,aw as p,bs as z,cn as Xe,b4 as y,aC as x,aP as Qe,b6 as X,ez as Ke,ce as Ze,cO as ge,dW as $,as as f,ac as T,eg as fe,br as L,au as ve,c0 as J,at as je,aB as F,b5 as be,bC as Je,aq as I,bH as W,cN as ye,eA as es,eB as ss,eC as ns,bY as ts,cZ as rs,am as E,bu as ee,bt as we,eD as os,ch as as,eE as is,eF as ls,ee as cs,cf as ds,cQ as hs,aX as us,aQ as xs,aE as ps,aL as ms,b7 as gs}from"./index-2830f5ff.js";import{u as fs}from"./use-search-params-37250c5a.js";import{_ as vs}from"./_baseEach-185271e6.js";import{u as se,f as ne,m as Z,a as js,e as M,S as Q}from"./axios-926e08fd.js";import{u as bs,L as ys}from"./lightbox-7cc93d1c.js";import{A as ws}from"./AvatarGroup-b33e22f5.js";var oe=1e3*60,U=60*24,ae=U*30,ie=U*365;function Cs(s,n,r){var o,a,t;xe(2,arguments);var l=We(),i=(o=(a=r==null?void 0:r.locale)!==null&&a!==void 0?a:l.locale)!==null&&o!==void 0?o:Fe;if(!i.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var h=Ue(s,n);if(isNaN(h))throw new RangeError("Invalid time value");var d=ze($e(r),{addSuffix:!!(r!=null&&r.addSuffix),comparison:h}),v,j;h>0?(v=_(n),j=_(s)):(v=_(s),j=_(n));var b=String((t=r==null?void 0:r.roundingMethod)!==null&&t!==void 0?t:"round"),m;if(b==="floor")m=Math.floor;else if(b==="ceil")m=Math.ceil;else if(b==="round")m=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var u=j.getTime()-v.getTime(),g=u/oe,w=re(j)-re(v),k=(u-w)/oe,S=r==null?void 0:r.unit,C;if(S?C=String(S):g<1?C="second":g<60?C="minute":g<U?C="hour":k<ae?C="day":k<ie?C="month":C="year",C==="second"){var V=m(u/1e3);return i.formatDistance("xSeconds",V,d)}else if(C==="minute"){var G=m(g);return i.formatDistance("xMinutes",G,d)}else if(C==="hour"){var B=m(g/60);return i.formatDistance("xHours",B,d)}else if(C==="day"){var H=m(k/U);return i.formatDistance("xDays",H,d)}else if(C==="month"){var N=m(k/ae);return N===12&&S!=="month"?i.formatDistance("xYears",1,d):i.formatDistance("xMonths",N,d)}else if(C==="year"){var O=m(k/ie);return i.formatDistance("xYears",O,d)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function ks(s,n){return xe(1,arguments),Cs(s,Date.now(),n)}function le(s){return s.substring(2).toLowerCase()}function Ss(s,n){return n.documentElement.clientWidth<s.clientX||n.documentElement.clientHeight<s.clientY}function Ts(s){const{children:n,disableReactTree:r=!1,mouseEvent:o="onClick",onClickAway:a,touchEvent:t="onTouchEnd"}=s,l=c.useRef(!1),i=c.useRef(null),h=c.useRef(!1),d=c.useRef(!1);c.useEffect(()=>(setTimeout(()=>{h.current=!0},0),()=>{h.current=!1}),[]);const v=Ve(n.ref,i),j=Ge(u=>{const g=d.current;d.current=!1;const w=Y(i.current);if(!h.current||!i.current||"clientX"in u&&Ss(u,w))return;if(l.current){l.current=!1;return}let k;u.composedPath?k=u.composedPath().indexOf(i.current)>-1:k=!w.documentElement.contains(u.target)||i.current.contains(u.target),!k&&(r||!g)&&a(u)}),b=u=>g=>{d.current=!0;const w=n.props[u];w&&w(g)},m={ref:v};return t!==!1&&(m[t]=b(t)),c.useEffect(()=>{if(t!==!1){const u=le(t),g=Y(i.current),w=()=>{l.current=!0};return g.addEventListener(u,j),g.addEventListener("touchmove",w),()=>{g.removeEventListener(u,j),g.removeEventListener("touchmove",w)}}},[j,t]),o!==!1&&(m[o]=b(o)),c.useEffect(()=>{if(o!==!1){const u=le(o),g=Y(i.current);return g.addEventListener(u,j),()=>{g.removeEventListener(u,j)}}},[j,o]),e.jsx(c.Fragment,{children:c.cloneElement(n,m)})}function Rs(s,n,r,o){for(var a=-1,t=s==null?0:s.length;++a<t;){var l=s[a];n(o,l,r(l),s)}return o}var Is=Rs,Es=vs;function As(s,n,r,o){return Es(s,function(a,t,l){n(o,a,r(a),l)}),o}var Ms=As,Ds=Is,Ls=Ms,Ns=Be,Os=pe;function _s(s,n){return function(r,o){var a=Os(r)?Ds:Ls,t=n?n():{};return a(r,s,Ns(o),t)}}var Ps=_s,Fs=He,Us=Ps,zs=Us(function(s,n,r){Fs(s,r,n)}),$s=zs;const Ws=me($s),te={revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1};function Vs(){const s=[M.chat,{params:{endpoint:"contacts"}}],{data:n,isLoading:r,error:o,isValidating:a}=se(s,ne,te);return c.useMemo(()=>({contacts:(n==null?void 0:n.contacts)||[],contactsLoading:r,contactsError:o,contactsValidating:a,contactsEmpty:!r&&!(n!=null&&n.contacts.length)}),[n==null?void 0:n.contacts,o,r,a])}function Gs(){const s=[M.chat,{params:{endpoint:"conversations"}}],{data:n,isLoading:r,error:o,isValidating:a}=se(s,ne,te);return c.useMemo(()=>{const l=Ws(n==null?void 0:n.conversations,"id")||{},i=Object.keys(l)||[];return{conversations:{byId:l,allIds:i},conversationsLoading:r,conversationsError:o,conversationsValidating:a,conversationsEmpty:!r&&!i.length}},[n==null?void 0:n.conversations,o,r,a])}function Bs(s){const n=s?[M.chat,{params:{conversationId:s,endpoint:"conversation"}}]:null,{data:r,isLoading:o,error:a,isValidating:t}=se(n,ne,te);return c.useMemo(()=>({conversation:r==null?void 0:r.conversation,conversationLoading:o,conversationError:a,conversationValidating:t}),[r==null?void 0:r.conversation,a,o,t])}async function Hs(s,n){const r=[M.chat,{params:{endpoint:"conversations"}}],o=[M.chat,{params:{conversationId:s,endpoint:"conversation"}}];Z(o,a=>{const{conversation:t}=a;return{conversation:{...t,messages:[...t.messages,n]}}},!1),Z(r,a=>{const{conversations:t}=a;return{conversations:t.map(i=>i.id===s?{...i,messages:[...i.messages,n]}:i)}},!1)}async function qs(s){const n=[M.chat,{params:{endpoint:"conversations"}}],r={conversationData:s},o=await js.post(M.chat,r);return Z(n,a=>{const t=[...a.conversations,s];return{...a,conversations:t}},!1),o.data}function Ys({message:s,participants:n,currentUserId:r}){const o=n.find(i=>i.id===s.senderId),a=s.senderId===r?{type:"me"}:{avatarUrl:o==null?void 0:o.avatarUrl,firstName:o==null?void 0:o.name.split(" ")[0]},t=a.type==="me";return{hasImage:s.contentType==="image",me:t,senderDetails:a}}function Ce(){const[s,n]=c.useState(!1),[r,o]=c.useState(!1),a=c.useCallback(()=>{o(h=>!h)},[]),t=c.useCallback(()=>{o(!1)},[]),l=c.useCallback(()=>{n(!0)},[]),i=c.useCallback(()=>{n(!1)},[]);return{openMobile:s,collapseDesktop:r,onOpenMobile:l,onCloseMobile:i,onCloseDesktop:t,onCollapseDesktop:a}}function Xs(s){const n=c.useRef(null),r=c.useCallback(()=>{s&&n.current&&n.current&&(n.current.scrollTop=n.current.scrollHeight)},[s]);return c.useEffect(()=>{r()},[s]),{messagesEndRef:n}}function Qs(){const{user:s}=$(),n=qe(),[r,o]=c.useState("online"),a=c.useCallback(t=>{o(t.target.value)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(P,{variant:r,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(R,{src:s==null?void 0:s.photoURL,alt:s==null?void 0:s.displayName,onClick:n.onOpen,sx:{cursor:"pointer",width:48,height:48}})}),e.jsxs(Ye,{open:n.open,onClose:n.onClose,arrow:"top-left",sx:{p:0},children:[e.jsxs(p,{direction:"row",alignItems:"center",spacing:2,sx:{py:2,pr:1,pl:2.5},children:[e.jsx(z,{primary:s==null?void 0:s.displayName,secondary:s==null?void 0:s.email,secondaryTypographyProps:{component:"span"}}),e.jsx(Xe,{title:"Log out",children:e.jsx(y,{color:"error",children:e.jsx(x,{icon:"ic:round-power-settings-new"})})})]}),e.jsx(Qe,{sx:{borderStyle:"dashed"}}),e.jsxs(p,{sx:{p:1},children:[e.jsxs(X,{children:[e.jsx(P,{variant:r,sx:{[`& .${Ke.badge}`]:{position:"static",m:.75,width:12,height:12,flexShrink:0}}}),e.jsx(Ze,{native:!0,fullWidth:!0,value:r,onChange:a,input:e.jsx(ge,{sx:{pl:2}}),inputProps:{sx:{textTransform:"capitalize"}},children:["online","alway","busy","offline"].map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs(X,{children:[e.jsx(x,{icon:"solar:user-id-bold",width:24}),"Profile"]}),e.jsxs(X,{children:[e.jsx(x,{icon:"eva:settings-2-fill",width:24}),"Settings"]})]})]})]})}function ke({sx:s,...n}){return e.jsxs(p,{spacing:2,direction:"row",alignItems:"center",sx:{px:2.5,py:1.5,...s},...n,children:[e.jsx(Q,{variant:"circular",sx:{width:48,height:48}}),e.jsxs(p,{spacing:1,flexGrow:1,children:[e.jsx(Q,{sx:{width:.75,height:10}}),e.jsx(Q,{sx:{width:.5,height:10}})]})]})}ke.propTypes={sx:f.object};function Se({query:s,results:n,onClickResult:r}){const o=n.length,a=!o&&!!s;return e.jsxs(e.Fragment,{children:[e.jsxs(T,{paragraph:!0,variant:"h6",sx:{px:2.5},children:["Contacts (",o,")"]}),a?e.jsx(fe,{query:s,sx:{p:3,mx:"auto",width:"calc(100% - 40px)",bgcolor:"background.neutral"}}):e.jsx(e.Fragment,{children:n.map(t=>e.jsxs(L,{onClick:()=>r(t),sx:{px:2.5,py:1.5,typography:"subtitle2"},children:[e.jsx(R,{alt:t.name,src:t.avatarUrl,sx:{mr:2}}),t.name]},t.id))})]})}Se.propTypes={query:f.string,results:f.array,onClickResult:f.func};const ce=320,Ks=96;function Te({loading:s,contacts:n,conversations:r,selectedConversationId:o}){const a=ve(),t=J(),l=je("up","md"),{collapseDesktop:i,onCloseDesktop:h,onCollapseDesktop:d,openMobile:v,onOpenMobile:j,onCloseMobile:b}=Ce(),[m,u]=c.useState({query:"",results:[]});c.useEffect(()=>{l||h()},[h,l]);const g=c.useCallback(()=>{l?d():b()},[l,b,d]),w=c.useCallback(()=>{l||b(),t.push(F.dashboard.chat)},[l,b,t]),k=c.useCallback(A=>{if(u(D=>({...D,query:A})),A){const D=n.filter(q=>q.name.toLowerCase().includes(A));u(q=>({...q,results:D}))}},[n]),S=c.useCallback(()=>{u({query:"",results:[]})},[]),C=c.useCallback(A=>{S(),t.push(`${F.dashboard.chat}?id=${A.id}`)},[S,t]),V=e.jsx(y,{onClick:j,sx:{left:0,top:84,zIndex:9,width:32,height:32,position:"absolute",borderRadius:"0 12px 12px 0",bgcolor:a.palette.primary.main,boxShadow:a.customShadows.primary,color:a.palette.primary.contrastText,"&:hover":{bgcolor:a.palette.primary.darker}},children:e.jsx(x,{width:16,icon:"solar:users-group-rounded-bold"})}),G=e.jsx(e.Fragment,{children:[...Array(12)].map((A,D)=>e.jsx(ke,{},D))}),B=e.jsx(e.Fragment,{}),H=e.jsx(Se,{query:m.query,results:m.results,onClickResult:C}),N=e.jsx(Ts,{onClickAway:S,children:e.jsx(be,{fullWidth:!0,value:m.query,onChange:A=>k(A.target.value),placeholder:"Search contacts...",InputProps:{startAdornment:e.jsx(Je,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{mt:2.5}})}),O=e.jsxs(e.Fragment,{children:[e.jsxs(p,{direction:"row",alignItems:"center",justifyContent:"center",sx:{p:2.5,pb:0},children:[!i&&e.jsxs(e.Fragment,{children:[e.jsx(Qs,{}),e.jsx(I,{sx:{flexGrow:1}})]}),e.jsx(y,{onClick:g,children:e.jsx(x,{icon:i?"eva:arrow-ios-forward-fill":"eva:arrow-ios-back-fill"})}),!i&&e.jsx(y,{onClick:w,children:e.jsx(x,{width:24,icon:"solar:user-plus-bold"})})]}),e.jsx(I,{sx:{p:2.5,pt:0},children:!i&&N}),e.jsxs(W,{sx:{pb:1},children:[m.query&&H,s&&G,!m.query&&!!r.allIds.length&&B]})]});return e.jsxs(e.Fragment,{children:[!l&&V,l?e.jsx(p,{sx:{height:1,flexShrink:0,width:ce,borderRight:`solid 1px ${a.palette.divider}`,transition:a.transitions.create(["width"],{duration:a.transitions.duration.shorter}),...i&&{width:Ks}},children:O}):e.jsx(ye,{open:v,onClose:b,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:ce}},children:O})]})}Te.propTypes={contacts:f.array,conversations:f.object,loading:f.bool,selectedConversationId:f.string};var de=es,Zs=ss,Js=pe,he=de?de.isConcatSpreadable:void 0;function en(s){return Js(s)||Zs(s)||!!(he&&s&&s[he])}var sn=en,nn=ns,tn=sn;function Re(s,n,r,o,a){var t=-1,l=s.length;for(r||(r=tn),a||(a=[]);++t<l;){var i=s[t];n>0&&r(i)?n>1?Re(i,n-1,r,o,a):nn(a,i):o||(a[a.length]=i)}return a}var rn=Re,on=rn;function an(s){var n=s==null?0:s.length;return n?on(s,1):[]}var ln=an;const cn=me(ln);function Ie({participant:s,open:n,onClose:r}){return e.jsxs(ts,{fullWidth:!0,maxWidth:"xs",open:n,onClose:r,children:[e.jsx(y,{onClick:r,sx:{position:"absolute",right:8,top:8},children:e.jsx(x,{icon:"mingcute:close-line"})}),e.jsxs(rs,{sx:{py:5,px:3,display:"flex"},children:[e.jsx(R,{alt:s.name,src:s.avatarUrl,sx:{width:96,height:96,mr:3}}),e.jsxs(p,{spacing:1,children:[e.jsx(T,{variant:"caption",sx:{color:"primary.main"},children:s.role}),e.jsx(T,{variant:"subtitle1",children:s.name}),e.jsxs(p,{direction:"row",sx:{typography:"caption",color:"text.disabled"},children:[e.jsx(x,{icon:"mingcute:location-fill",width:16,sx:{flexShrink:0,mr:.5,mt:"2px"}}),s.address]}),e.jsxs(p,{spacing:1,direction:"row",sx:{pt:1.5},children:[e.jsx(y,{size:"small",color:"error",sx:{borderRadius:1,bgcolor:o=>E(o.palette.error.main,.08),"&:hover":{bgcolor:o=>E(o.palette.error.main,.16)}},children:e.jsx(x,{width:18,icon:"solar:phone-bold"})}),e.jsx(y,{size:"small",color:"info",sx:{borderRadius:1,bgcolor:o=>E(o.palette.info.main,.08),"&:hover":{bgcolor:o=>E(o.palette.info.main,.16)}},children:e.jsx(x,{width:18,icon:"solar:chat-round-dots-bold"})}),e.jsx(y,{size:"small",color:"primary",sx:{borderRadius:1,bgcolor:o=>E(o.palette.primary.main,.08),"&:hover":{bgcolor:o=>E(o.palette.primary.main,.16)}},children:e.jsx(x,{width:18,icon:"fluent:mail-24-filled"})}),e.jsx(y,{size:"small",color:"secondary",sx:{borderRadius:1,bgcolor:o=>E(o.palette.secondary.main,.08),"&:hover":{bgcolor:o=>E(o.palette.secondary.main,.16)}},children:e.jsx(x,{width:18,icon:"solar:videocamera-record-bold"})})]})]})]})]})}Ie.propTypes={onClose:f.func,open:f.bool,participant:f.object};function Ee({participants:s}){const[n,r]=c.useState(null),o=ee(!0),a=c.useCallback(d=>{r(d)},[]),t=()=>{r(null)},l=s.length,i=e.jsxs(L,{onClick:o.onToggle,sx:{pl:2.5,pr:1.5,height:40,flexShrink:0,flexGrow:"unset",typography:"overline",color:"text.secondary",bgcolor:"background.neutral"},children:[e.jsxs(I,{component:"span",sx:{flexGrow:1},children:["In room (",l,")"]}),e.jsx(x,{width:16,icon:o.value?"eva:arrow-ios-downward-fill":"eva:arrow-ios-forward-fill"})]}),h=e.jsx(W,{sx:{height:56*4},children:s.map(d=>e.jsxs(L,{onClick:()=>a(d),children:[e.jsx(P,{variant:d.status,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(R,{alt:d.name,src:d.avatarUrl})}),e.jsx(z,{sx:{ml:2},primary:d.name,secondary:d.role,primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{noWrap:!0,component:"span",typography:"caption"}})]},d.id))});return e.jsxs(e.Fragment,{children:[i,e.jsx("div",{children:e.jsx(we,{in:o.value,children:h})}),n&&e.jsx(Ie,{participant:n,open:!!n,onClose:t})]})}Ee.propTypes={participants:f.array};function Ae({participant:s}){const n=ee(!0),{name:r,avatarUrl:o,role:a,address:t,phoneNumber:l,email:i}=s,h=e.jsxs(p,{alignItems:"center",sx:{py:5},children:[e.jsx(R,{alt:r,src:o,sx:{width:96,height:96,mb:2}}),e.jsx(T,{variant:"subtitle1",children:r}),e.jsx(T,{variant:"body2",sx:{color:"text.secondary",mt:.5},children:a})]}),d=e.jsxs(L,{onClick:n.onToggle,sx:{pl:2.5,pr:1.5,height:40,flexShrink:0,flexGrow:"unset",typography:"overline",color:"text.secondary",bgcolor:"background.neutral"},children:[e.jsx(I,{component:"span",sx:{flexGrow:1},children:"Information"}),e.jsx(x,{width:16,icon:n.value?"eva:arrow-ios-downward-fill":"eva:arrow-ios-forward-fill"})]}),v=e.jsxs(p,{spacing:2,sx:{px:2,py:2.5,"& svg":{mr:1,flexShrink:0,color:"text.disabled"}},children:[e.jsxs(p,{direction:"row",children:[e.jsx(x,{icon:"mingcute:location-fill"}),e.jsx(T,{variant:"body2",children:t})]}),e.jsxs(p,{direction:"row",children:[e.jsx(x,{icon:"solar:phone-bold"}),e.jsx(T,{variant:"body2",children:l})]}),e.jsxs(p,{direction:"row",children:[e.jsx(x,{icon:"fluent:mail-24-filled"}),e.jsx(T,{variant:"body2",noWrap:!0,children:i})]})]});return e.jsxs(e.Fragment,{children:[h,d,e.jsx("div",{children:e.jsx(we,{in:n.value,children:v})})]})}Ae.propTypes={participant:f.object};function Me({attachments:s}){const n=ee(!0),r=s.length,o=e.jsxs(L,{disabled:!s.length,onClick:n.onToggle,sx:{pl:2.5,pr:1.5,height:40,flexShrink:0,flexGrow:"unset",typography:"overline",color:"text.secondary",bgcolor:"background.neutral"},children:[e.jsxs(I,{component:"span",sx:{flexGrow:1},children:["Attachments (",r,")"]}),e.jsx(x,{width:16,icon:!n.value&&"eva:arrow-ios-forward-fill"||!s.length&&"eva:arrow-ios-forward-fill"||"eva:arrow-ios-downward-fill"})]}),a=e.jsx(W,{sx:{px:2,py:2.5},children:s.map((t,l)=>e.jsxs(p,{spacing:1.5,direction:"row",alignItems:"center",sx:{mb:2},children:[e.jsx(p,{alignItems:"center",justifyContent:"center",sx:{width:40,height:40,flexShrink:0,borderRadius:1,overflow:"hidden",position:"relative",backgroundColor:"background.neutral"},children:e.jsx(os,{imageView:!0,file:t.preview,onDownload:()=>console.info("DOWNLOAD"),sx:{width:28,height:28}})}),e.jsx(z,{primary:t.name,secondary:as(t.createdAt),primaryTypographyProps:{noWrap:!0,typography:"body2"},secondaryTypographyProps:{mt:.25,noWrap:!0,component:"span",typography:"caption",color:"text.disabled"}})]},t.name+l))});return e.jsxs(e.Fragment,{children:[o,e.jsx(I,{sx:{overflow:"hidden",height:n.value?1:0,transition:t=>t.transitions.create(["height"],{duration:t.transitions.duration.shorter})},children:a})]})}Me.propTypes={attachments:f.array};const K=240;function De({participants:s,conversation:n}){const r=ve(),o=je("up","lg"),{collapseDesktop:a,onCloseDesktop:t,onCollapseDesktop:l,openMobile:i,onOpenMobile:h,onCloseMobile:d}=Ce();c.useEffect(()=>{o||t()},[t,o]);const v=c.useCallback(()=>{o?l():h()},[o]),j=s.length>1,b=is(cn(n.messages.map(g=>g.attachments))),m=e.jsxs(e.Fragment,{children:[j?e.jsx(Ee,{participants:s}):e.jsx(Ae,{participant:s[0]}),e.jsx(Me,{attachments:b})]}),u=e.jsx(y,{onClick:v,sx:{top:12,right:0,zIndex:9,width:32,height:32,borderRight:0,position:"absolute",borderRadius:"12px 0 0 12px",boxShadow:r.customShadows.z8,bgcolor:r.palette.background.paper,border:`solid 1px ${r.palette.divider}`,"&:hover":{bgcolor:r.palette.background.neutral},...o&&{...!a&&{right:K}}},children:o?e.jsx(x,{width:16,icon:a?"eva:arrow-ios-back-fill":"eva:arrow-ios-forward-fill"}):e.jsx(x,{width:16,icon:"eva:arrow-ios-back-fill"})});return e.jsxs(I,{sx:{position:"relative"},children:[u,o?e.jsx(p,{sx:{height:1,flexShrink:0,width:K,borderLeft:`solid 1px ${r.palette.divider}`,transition:r.transitions.create(["width"],{duration:r.transitions.duration.shorter}),...a&&{width:0}},children:!a&&m}):e.jsx(ye,{anchor:"right",open:i,onClose:d,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:K}},children:m})]})}De.propTypes={conversation:f.object,participants:f.array};function Le({message:s,participants:n,onOpenLightbox:r}){const{user:o}=$(),{me:a,senderDetails:t,hasImage:l}=Ys({message:s,participants:n,currentUserId:o.id}),{firstName:i,avatarUrl:h}=t,{body:d,createdAt:v}=s,j=e.jsxs(T,{noWrap:!0,variant:"caption",sx:{mb:1,color:"text.disabled",...!a&&{mr:"auto"}},children:[!a&&`${i},`,"  ",ks(new Date(v),{addSuffix:!0})]}),b=e.jsx(p,{sx:{p:1.5,minWidth:48,maxWidth:320,borderRadius:1,typography:"body2",bgcolor:"background.neutral",...a&&{color:"grey.800",bgcolor:"primary.lighter"},...l&&{p:0,bgcolor:"transparent"}},children:l?e.jsx(I,{component:"img",alt:"attachment",src:d,onClick:()=>r(d),sx:{minHeight:220,borderRadius:1.5,cursor:"pointer","&:hover":{opacity:.9}}}):d}),m=e.jsxs(p,{direction:"row",className:"message-actions",sx:{pt:.5,opacity:0,top:"100%",left:0,position:"absolute",transition:u=>u.transitions.create(["opacity"],{duration:u.transitions.duration.shorter}),...a&&{left:"unset",right:0}},children:[e.jsx(y,{size:"small",children:e.jsx(x,{icon:"solar:reply-bold",width:16})}),e.jsx(y,{size:"small",children:e.jsx(x,{icon:"eva:smiling-face-fill",width:16})}),e.jsx(y,{size:"small",children:e.jsx(x,{icon:"solar:trash-bin-trash-bold",width:16})})]});return e.jsxs(p,{direction:"row",justifyContent:a?"flex-end":"unset",sx:{mb:5},children:[!a&&e.jsx(R,{alt:i,src:h,sx:{width:32,height:32,mr:2}}),e.jsxs(p,{alignItems:"flex-end",children:[j,e.jsxs(p,{direction:"row",alignItems:"center",sx:{position:"relative","&:hover":{"& .message-actions":{opacity:1}}},children:[b,m]})]})]})}Le.propTypes={message:f.object,onOpenLightbox:f.func,participants:f.array};function Ne({messages:s=[],participants:n}){const{messagesEndRef:r}=Xs(s),o=s.filter(t=>t.contentType==="image").map(t=>({src:t.body})),a=bs(o);return e.jsxs(e.Fragment,{children:[e.jsx(W,{ref:r,sx:{px:3,py:5,height:1},children:e.jsx(I,{children:s.map(t=>e.jsx(Le,{message:t,participants:n,onOpenLightbox:()=>a.onOpen(t.body)},t.id))})}),e.jsx(ys,{index:a.selected,slides:o,open:a.open,close:a.onClose})]})}Ne.propTypes={messages:f.array,participants:f.array};function ue(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(s){const n=Math.random()*16|0;return(s==="x"?n:n&3|8).toString(16)})}function Oe({recipients:s,onAddRecipients:n,disabled:r,selectedConversationId:o}){const a=J(),{user:t}=$(),l=c.useRef(null),[i,h]=c.useState(""),d=c.useMemo(()=>({id:t.id,role:t.role,email:t.email,address:t.address,name:t.displayName,lastActivity:new Date,avatarUrl:t.photoURL,phoneNumber:t.phoneNumber,status:"online"}),[t]),v=c.useMemo(()=>({id:ue(),attachments:[],body:i,contentType:"text",createdAt:ls(new Date,{minutes:1}),senderId:d.id}),[i,d.id]),j=c.useMemo(()=>({id:ue(),messages:[v],participants:[...s,d],type:s.length>1?"GROUP":"ONE_TO_ONE",unreadCount:0}),[v,d,s]),b=c.useCallback(()=>{l.current&&l.current.click()},[]),m=c.useCallback(g=>{h(g.target.value)},[]),u=c.useCallback(async g=>{try{if(g.key==="Enter"){if(i)if(o)await Hs(o,v);else{const w=await qs(j);a.push(`${F.dashboard.chat}?id=${w.conversation.id}`),n([])}h("")}}catch(w){console.error(w)}},[j,i,v,n,a,o]);return e.jsxs(e.Fragment,{children:[e.jsx(ge,{value:i,onKeyUp:u,onChange:m,placeholder:"Type a message",disabled:r,startAdornment:e.jsx(y,{children:e.jsx(x,{icon:"eva:smiling-face-fill"})}),endAdornment:e.jsxs(p,{direction:"row",sx:{flexShrink:0},children:[e.jsx(y,{onClick:b,children:e.jsx(x,{icon:"solar:gallery-add-bold"})}),e.jsx(y,{onClick:b,children:e.jsx(x,{icon:"eva:attach-2-fill"})}),e.jsx(y,{children:e.jsx(x,{icon:"solar:microphone-bold"})})]}),sx:{px:1,height:56,flexShrink:0,borderTop:g=>`solid 1px ${g.palette.divider}`}}),e.jsx("input",{type:"file",ref:l,style:{display:"none"}})]})}Oe.propTypes={disabled:f.bool,onAddRecipients:f.func,recipients:f.array,selectedConversationId:f.string};function _e({participants:s}){const n=s.length>1,r=s[0],o=e.jsx(ws,{max:3,sx:{[`& .${cs.avatar}`]:{width:32,height:32}},children:s.map(t=>e.jsx(R,{alt:t.name,src:t.avatarUrl},t.id))}),a=e.jsxs(p,{flexGrow:1,direction:"row",alignItems:"center",spacing:2,children:[e.jsx(P,{variant:r.status,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(R,{src:r.avatarUrl,alt:r.name})}),e.jsx(z,{primary:r.name,secondary:r.status==="offline"?ds(r.lastActivity):r.status,secondaryTypographyProps:{component:"span",...r.status!=="offline"&&{textTransform:"capitalize"}}})]});return e.jsxs(e.Fragment,{children:[n?o:a,e.jsx(p,{flexGrow:1}),e.jsx(y,{children:e.jsx(x,{icon:"solar:phone-bold"})}),e.jsx(y,{children:e.jsx(x,{icon:"solar:videocamera-record-bold"})}),e.jsx(y,{children:e.jsx(x,{icon:"eva:more-vertical-fill"})})]})}_e.propTypes={participants:f.array};function Pe({contacts:s,onAddRecipients:n}){const[r,o]=c.useState(""),a=c.useCallback(t=>{o(""),n(t)},[n]);return e.jsxs(e.Fragment,{children:[e.jsx(T,{variant:"subtitle2",sx:{color:"text.primary",mr:2},children:"To:"}),e.jsx(hs,{sx:{minWidth:320},multiple:!0,limitTags:3,popupIcon:null,disableCloseOnSelect:!0,noOptionsText:e.jsx(fe,{query:r}),onChange:(t,l)=>a(l),onInputChange:(t,l)=>o(l),options:s,getOptionLabel:t=>t.name,isOptionEqualToValue:(t,l)=>t.id===l.id,renderInput:t=>e.jsx(be,{...t,placeholder:"+ Recipients"}),renderOption:(t,l,{selected:i})=>c.createElement("li",{...t,key:l.id},e.jsxs(I,{sx:{mr:1,width:32,height:32,overflow:"hidden",borderRadius:"50%",position:"relative"},children:[e.jsx(R,{alt:l.name,src:l.avatarUrl,sx:{width:1,height:1}}),e.jsx(p,{alignItems:"center",justifyContent:"center",sx:{top:0,left:0,width:1,height:1,opacity:0,position:"absolute",bgcolor:h=>E(h.palette.grey[900],.8),transition:h=>h.transitions.create(["opacity"],{easing:h.transitions.easing.easeInOut,duration:h.transitions.duration.shorter}),...i&&{opacity:1,color:"primary.main"}},children:e.jsx(x,{icon:"eva:checkmark-fill"})})]},l.id),l.name),renderTags:(t,l)=>t.map((i,h)=>c.createElement(us,{...l({index:h}),key:i.id,label:i.name,avatar:e.jsx(R,{alt:i.name,src:i.avatarUrl}),size:"small",variant:"soft"}))})]})}Pe.propTypes={contacts:f.array,onAddRecipients:f.func};function dn(){const s=J(),{user:n}=$(),r=xs(),a=fs().get("id")||"",[t,l]=c.useState([]),{contacts:i}=Vs(),{conversations:h,conversationsLoading:d}=Gs(),{conversation:v,conversationError:j}=Bs(`${a}`),b=v?v.participants.filter(S=>S.id!==n.id):[];c.useEffect(()=>{(j||!a)&&s.push(F.dashboard.chat)},[j,s,a]);const m=c.useCallback(S=>{l(S)},[]),u=!!v,g=e.jsx(p,{direction:"row",alignItems:"center",flexShrink:0,sx:{pr:1,pl:2.5,py:1,minHeight:72},children:a?e.jsx(e.Fragment,{children:u&&e.jsx(_e,{participants:b})}):e.jsx(Pe,{contacts:i,onAddRecipients:m})}),w=e.jsx(Te,{contacts:i,conversations:h,loading:d,selectedConversationId:a}),k=e.jsxs(p,{sx:{width:1,height:1,overflow:"hidden"},children:[e.jsx(Ne,{messages:v==null?void 0:v.messages,participants:b}),e.jsx(Oe,{recipients:t,onAddRecipients:m,selectedConversationId:a,disabled:!t.length&&!a})]});return e.jsxs(ps,{maxWidth:r.themeStretch?!1:"xl",children:[e.jsx(T,{variant:"h4",sx:{mb:{xs:3,md:5}},children:"Support"}),e.jsxs(p,{component:ms,direction:"row",sx:{height:"72vh"},children:[w,e.jsxs(p,{sx:{width:1,height:1,overflow:"hidden"},children:[g,e.jsxs(p,{direction:"row",sx:{width:1,height:1,overflow:"hidden",borderTop:S=>`solid 1px ${S.palette.divider}`},children:[k,u&&e.jsx(De,{conversation:v,participants:b})]})]})]})]})}function fn(){return e.jsxs(e.Fragment,{children:[e.jsx(gs,{children:e.jsx("title",{children:" Dashboard: Chat"})}),e.jsx(dn,{})]})}export{fn as default};
