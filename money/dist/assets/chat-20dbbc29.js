import{ee as xe,ef as Fe,eg as Ue,eh as ze,ei as $e,ej as _,ek as re,el as Ve,D as c,c_ as We,d0 as Ge,d1 as Y,ae as e,bn as Be,bm as pe,bo as me,em as He,c5 as qe,a_ as P,aY as R,c6 as Ye,aw as p,bs as z,ci as Xe,b4 as y,aC as x,aP as Ke,b6 as X,en as Qe,cQ as Je,cK as ge,dN as $,as as f,ac as S,dU as fe,br as L,au as ve,b_ as Z,at as je,aB as F,b5 as be,bC as Ze,aq as T,bH as V,cJ as ye,eo as es,ep as ss,eq as ns,bX as ts,am as I,bu as ee,bt as we,er as rs,cc as os,es as as,et as is,e2 as ls,ca as cs,cy as ds,aX as hs,aQ as us,aL as xs,b7 as ps}from"./index-f1bd24a1.js";import{u as ms}from"./use-search-params-153c3a94.js";import{_ as gs}from"./_baseEach-be540c51.js";import{u as se,f as ne,m as J,a as fs,e as M,S as K}from"./axios-0c0185db.js";import{D as vs}from"./DialogContent-e09c4cd5.js";import{u as js,L as bs}from"./lightbox-af827fa1.js";import{A as ys}from"./AvatarGroup-6d78bd43.js";var oe=1e3*60,U=60*24,ae=U*30,ie=U*365;function ws(s,n,o){var r,a,t;xe(2,arguments);var l=Ve(),i=(r=(a=o==null?void 0:o.locale)!==null&&a!==void 0?a:l.locale)!==null&&r!==void 0?r:Fe;if(!i.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var h=Ue(s,n);if(isNaN(h))throw new RangeError("Invalid time value");var d=ze($e(o),{addSuffix:!!(o!=null&&o.addSuffix),comparison:h}),j,v;h>0?(j=_(n),v=_(s)):(j=_(s),v=_(n));var b=String((t=o==null?void 0:o.roundingMethod)!==null&&t!==void 0?t:"round"),m;if(b==="floor")m=Math.floor;else if(b==="ceil")m=Math.ceil;else if(b==="round")m=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var u=v.getTime()-j.getTime(),g=u/oe,w=re(v)-re(j),C=(u-w)/oe,A=o==null?void 0:o.unit,k;if(A?k=String(A):g<1?k="second":g<60?k="minute":g<U?k="hour":C<ae?k="day":C<ie?k="month":k="year",k==="second"){var W=m(u/1e3);return i.formatDistance("xSeconds",W,d)}else if(k==="minute"){var G=m(g);return i.formatDistance("xMinutes",G,d)}else if(k==="hour"){var B=m(g/60);return i.formatDistance("xHours",B,d)}else if(k==="day"){var H=m(C/U);return i.formatDistance("xDays",H,d)}else if(k==="month"){var N=m(C/ae);return N===12&&A!=="month"?i.formatDistance("xYears",1,d):i.formatDistance("xMonths",N,d)}else if(k==="year"){var O=m(C/ie);return i.formatDistance("xYears",O,d)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function Cs(s,n){return xe(1,arguments),ws(s,Date.now(),n)}function le(s){return s.substring(2).toLowerCase()}function ks(s,n){return n.documentElement.clientWidth<s.clientX||n.documentElement.clientHeight<s.clientY}function Ss(s){const{children:n,disableReactTree:o=!1,mouseEvent:r="onClick",onClickAway:a,touchEvent:t="onTouchEnd"}=s,l=c.useRef(!1),i=c.useRef(null),h=c.useRef(!1),d=c.useRef(!1);c.useEffect(()=>(setTimeout(()=>{h.current=!0},0),()=>{h.current=!1}),[]);const j=We(n.ref,i),v=Ge(u=>{const g=d.current;d.current=!1;const w=Y(i.current);if(!h.current||!i.current||"clientX"in u&&ks(u,w))return;if(l.current){l.current=!1;return}let C;u.composedPath?C=u.composedPath().indexOf(i.current)>-1:C=!w.documentElement.contains(u.target)||i.current.contains(u.target),!C&&(o||!g)&&a(u)}),b=u=>g=>{d.current=!0;const w=n.props[u];w&&w(g)},m={ref:j};return t!==!1&&(m[t]=b(t)),c.useEffect(()=>{if(t!==!1){const u=le(t),g=Y(i.current),w=()=>{l.current=!0};return g.addEventListener(u,v),g.addEventListener("touchmove",w),()=>{g.removeEventListener(u,v),g.removeEventListener("touchmove",w)}}},[v,t]),r!==!1&&(m[r]=b(r)),c.useEffect(()=>{if(r!==!1){const u=le(r),g=Y(i.current);return g.addEventListener(u,v),()=>{g.removeEventListener(u,v)}}},[v,r]),e.jsx(c.Fragment,{children:c.cloneElement(n,m)})}function Ts(s,n,o,r){for(var a=-1,t=s==null?0:s.length;++a<t;){var l=s[a];n(r,l,o(l),s)}return r}var Rs=Ts,Is=gs;function Es(s,n,o,r){return Is(s,function(a,t,l){n(r,a,o(a),l)}),r}var As=Es,Ms=Rs,Ds=As,Ls=Be,Ns=pe;function Os(s,n){return function(o,r){var a=Ns(o)?Ms:Ds,t=n?n():{};return a(o,s,Ls(r),t)}}var _s=Os,Ps=He,Fs=_s,Us=Fs(function(s,n,o){Ps(s,o,n)}),zs=Us;const $s=me(zs),te={revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1};function Vs(){const s=[M.chat,{params:{endpoint:"contacts"}}],{data:n,isLoading:o,error:r,isValidating:a}=se(s,ne,te);return c.useMemo(()=>({contacts:(n==null?void 0:n.contacts)||[],contactsLoading:o,contactsError:r,contactsValidating:a,contactsEmpty:!o&&!(n!=null&&n.contacts.length)}),[n==null?void 0:n.contacts,r,o,a])}function Ws(){const s=[M.chat,{params:{endpoint:"conversations"}}],{data:n,isLoading:o,error:r,isValidating:a}=se(s,ne,te);return c.useMemo(()=>{const l=$s(n==null?void 0:n.conversations,"id")||{},i=Object.keys(l)||[];return{conversations:{byId:l,allIds:i},conversationsLoading:o,conversationsError:r,conversationsValidating:a,conversationsEmpty:!o&&!i.length}},[n==null?void 0:n.conversations,r,o,a])}function Gs(s){const n=s?[M.chat,{params:{conversationId:s,endpoint:"conversation"}}]:null,{data:o,isLoading:r,error:a,isValidating:t}=se(n,ne,te);return c.useMemo(()=>({conversation:o==null?void 0:o.conversation,conversationLoading:r,conversationError:a,conversationValidating:t}),[o==null?void 0:o.conversation,a,r,t])}async function Bs(s,n){const o=[M.chat,{params:{endpoint:"conversations"}}],r=[M.chat,{params:{conversationId:s,endpoint:"conversation"}}];J(r,a=>{const{conversation:t}=a;return{conversation:{...t,messages:[...t.messages,n]}}},!1),J(o,a=>{const{conversations:t}=a;return{conversations:t.map(i=>i.id===s?{...i,messages:[...i.messages,n]}:i)}},!1)}async function Hs(s){const n=[M.chat,{params:{endpoint:"conversations"}}],o={conversationData:s},r=await fs.post(M.chat,o);return J(n,a=>{const t=[...a.conversations,s];return{...a,conversations:t}},!1),r.data}function qs({message:s,participants:n,currentUserId:o}){const r=n.find(i=>i.id===s.senderId),a=s.senderId===o?{type:"me"}:{avatarUrl:r==null?void 0:r.avatarUrl,firstName:r==null?void 0:r.name.split(" ")[0]},t=a.type==="me";return{hasImage:s.contentType==="image",me:t,senderDetails:a}}function Ce(){const[s,n]=c.useState(!1),[o,r]=c.useState(!1),a=c.useCallback(()=>{r(h=>!h)},[]),t=c.useCallback(()=>{r(!1)},[]),l=c.useCallback(()=>{n(!0)},[]),i=c.useCallback(()=>{n(!1)},[]);return{openMobile:s,collapseDesktop:o,onOpenMobile:l,onCloseMobile:i,onCloseDesktop:t,onCollapseDesktop:a}}function Ys(s){const n=c.useRef(null),o=c.useCallback(()=>{s&&n.current&&n.current&&(n.current.scrollTop=n.current.scrollHeight)},[s]);return c.useEffect(()=>{o()},[s]),{messagesEndRef:n}}function Xs(){const{user:s}=$(),n=qe(),[o,r]=c.useState("online"),a=c.useCallback(t=>{r(t.target.value)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(P,{variant:o,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(R,{src:s==null?void 0:s.photoURL,alt:s==null?void 0:s.displayName,onClick:n.onOpen,sx:{cursor:"pointer",width:48,height:48}})}),e.jsxs(Ye,{open:n.open,onClose:n.onClose,arrow:"top-left",sx:{p:0},children:[e.jsxs(p,{direction:"row",alignItems:"center",spacing:2,sx:{py:2,pr:1,pl:2.5},children:[e.jsx(z,{primary:s==null?void 0:s.displayName,secondary:s==null?void 0:s.email,secondaryTypographyProps:{component:"span"}}),e.jsx(Xe,{title:"Log out",children:e.jsx(y,{color:"error",children:e.jsx(x,{icon:"ic:round-power-settings-new"})})})]}),e.jsx(Ke,{sx:{borderStyle:"dashed"}}),e.jsxs(p,{sx:{p:1},children:[e.jsxs(X,{children:[e.jsx(P,{variant:o,sx:{[`& .${Qe.badge}`]:{position:"static",m:.75,width:12,height:12,flexShrink:0}}}),e.jsx(Je,{native:!0,fullWidth:!0,value:o,onChange:a,input:e.jsx(ge,{sx:{pl:2}}),inputProps:{sx:{textTransform:"capitalize"}},children:["online","alway","busy","offline"].map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs(X,{children:[e.jsx(x,{icon:"solar:user-id-bold",width:24}),"Profile"]}),e.jsxs(X,{children:[e.jsx(x,{icon:"eva:settings-2-fill",width:24}),"Settings"]})]})]})]})}function ke({sx:s,...n}){return e.jsxs(p,{spacing:2,direction:"row",alignItems:"center",sx:{px:2.5,py:1.5,...s},...n,children:[e.jsx(K,{variant:"circular",sx:{width:48,height:48}}),e.jsxs(p,{spacing:1,flexGrow:1,children:[e.jsx(K,{sx:{width:.75,height:10}}),e.jsx(K,{sx:{width:.5,height:10}})]})]})}ke.propTypes={sx:f.object};function Se({query:s,results:n,onClickResult:o}){const r=n.length,a=!r&&!!s;return e.jsxs(e.Fragment,{children:[e.jsxs(S,{paragraph:!0,variant:"h6",sx:{px:2.5},children:["Contacts (",r,")"]}),a?e.jsx(fe,{query:s,sx:{p:3,mx:"auto",width:"calc(100% - 40px)",bgcolor:"background.neutral"}}):e.jsx(e.Fragment,{children:n.map(t=>e.jsxs(L,{onClick:()=>o(t),sx:{px:2.5,py:1.5,typography:"subtitle2"},children:[e.jsx(R,{alt:t.name,src:t.avatarUrl,sx:{mr:2}}),t.name]},t.id))})]})}Se.propTypes={query:f.string,results:f.array,onClickResult:f.func};const ce=320,Ks=96;function Te({loading:s,contacts:n,conversations:o,selectedConversationId:r}){const a=ve(),t=Z(),l=je("up","md"),{collapseDesktop:i,onCloseDesktop:h,onCollapseDesktop:d,openMobile:j,onOpenMobile:v,onCloseMobile:b}=Ce(),[m,u]=c.useState({query:"",results:[]});c.useEffect(()=>{l||h()},[h,l]);const g=c.useCallback(()=>{l?d():b()},[l,b,d]),w=c.useCallback(()=>{l||b(),t.push(F.dashboard.chat)},[l,b,t]),C=c.useCallback(E=>{if(u(D=>({...D,query:E})),E){const D=n.filter(q=>q.name.toLowerCase().includes(E));u(q=>({...q,results:D}))}},[n]),A=c.useCallback(()=>{u({query:"",results:[]})},[]),k=c.useCallback(E=>{A(),t.push(`${F.dashboard.chat}?id=${E.id}`)},[A,t]),W=e.jsx(y,{onClick:v,sx:{left:0,top:84,zIndex:9,width:32,height:32,position:"absolute",borderRadius:"0 12px 12px 0",bgcolor:a.palette.primary.main,boxShadow:a.customShadows.primary,color:a.palette.primary.contrastText,"&:hover":{bgcolor:a.palette.primary.darker}},children:e.jsx(x,{width:16,icon:"solar:users-group-rounded-bold"})}),G=e.jsx(e.Fragment,{children:[...Array(12)].map((E,D)=>e.jsx(ke,{},D))}),B=e.jsx(e.Fragment,{}),H=e.jsx(Se,{query:m.query,results:m.results,onClickResult:k}),N=e.jsx(Ss,{onClickAway:A,children:e.jsx(be,{fullWidth:!0,value:m.query,onChange:E=>C(E.target.value),placeholder:"Search contacts...",InputProps:{startAdornment:e.jsx(Ze,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{mt:2.5}})}),O=e.jsxs(e.Fragment,{children:[e.jsxs(p,{direction:"row",alignItems:"center",justifyContent:"center",sx:{p:2.5,pb:0},children:[!i&&e.jsxs(e.Fragment,{children:[e.jsx(Xs,{}),e.jsx(T,{sx:{flexGrow:1}})]}),e.jsx(y,{onClick:g,children:e.jsx(x,{icon:i?"eva:arrow-ios-forward-fill":"eva:arrow-ios-back-fill"})}),!i&&e.jsx(y,{onClick:w,children:e.jsx(x,{width:24,icon:"solar:user-plus-bold"})})]}),e.jsx(T,{sx:{p:2.5,pt:0},children:!i&&N}),e.jsxs(V,{sx:{pb:1},children:[m.query&&H,s&&G,!m.query&&!!o.allIds.length&&B]})]});return e.jsxs(e.Fragment,{children:[!l&&W,l?e.jsx(p,{sx:{height:1,flexShrink:0,width:ce,borderRight:`solid 1px ${a.palette.divider}`,transition:a.transitions.create(["width"],{duration:a.transitions.duration.shorter}),...i&&{width:Ks}},children:O}):e.jsx(ye,{open:j,onClose:b,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:ce}},children:O})]})}Te.propTypes={contacts:f.array,conversations:f.object,loading:f.bool,selectedConversationId:f.string};var de=es,Qs=ss,Js=pe,he=de?de.isConcatSpreadable:void 0;function Zs(s){return Js(s)||Qs(s)||!!(he&&s&&s[he])}var en=Zs,sn=ns,nn=en;function Re(s,n,o,r,a){var t=-1,l=s.length;for(o||(o=nn),a||(a=[]);++t<l;){var i=s[t];n>0&&o(i)?n>1?Re(i,n-1,o,r,a):sn(a,i):r||(a[a.length]=i)}return a}var tn=Re,rn=tn;function on(s){var n=s==null?0:s.length;return n?rn(s,1):[]}var an=on;const ln=me(an);function Ie({participant:s,open:n,onClose:o}){return e.jsxs(ts,{fullWidth:!0,maxWidth:"xs",open:n,onClose:o,children:[e.jsx(y,{onClick:o,sx:{position:"absolute",right:8,top:8},children:e.jsx(x,{icon:"mingcute:close-line"})}),e.jsxs(vs,{sx:{py:5,px:3,display:"flex"},children:[e.jsx(R,{alt:s.name,src:s.avatarUrl,sx:{width:96,height:96,mr:3}}),e.jsxs(p,{spacing:1,children:[e.jsx(S,{variant:"caption",sx:{color:"primary.main"},children:s.role}),e.jsx(S,{variant:"subtitle1",children:s.name}),e.jsxs(p,{direction:"row",sx:{typography:"caption",color:"text.disabled"},children:[e.jsx(x,{icon:"mingcute:location-fill",width:16,sx:{flexShrink:0,mr:.5,mt:"2px"}}),s.address]}),e.jsxs(p,{spacing:1,direction:"row",sx:{pt:1.5},children:[e.jsx(y,{size:"small",color:"error",sx:{borderRadius:1,bgcolor:r=>I(r.palette.error.main,.08),"&:hover":{bgcolor:r=>I(r.palette.error.main,.16)}},children:e.jsx(x,{width:18,icon:"solar:phone-bold"})}),e.jsx(y,{size:"small",color:"info",sx:{borderRadius:1,bgcolor:r=>I(r.palette.info.main,.08),"&:hover":{bgcolor:r=>I(r.palette.info.main,.16)}},children:e.jsx(x,{width:18,icon:"solar:chat-round-dots-bold"})}),e.jsx(y,{size:"small",color:"primary",sx:{borderRadius:1,bgcolor:r=>I(r.palette.primary.main,.08),"&:hover":{bgcolor:r=>I(r.palette.primary.main,.16)}},children:e.jsx(x,{width:18,icon:"fluent:mail-24-filled"})}),e.jsx(y,{size:"small",color:"secondary",sx:{borderRadius:1,bgcolor:r=>I(r.palette.secondary.main,.08),"&:hover":{bgcolor:r=>I(r.palette.secondary.main,.16)}},children:e.jsx(x,{width:18,icon:"solar:videocamera-record-bold"})})]})]})]})]})}Ie.propTypes={onClose:f.func,open:f.bool,participant:f.object};function Ee({participants:s}){const[n,o]=c.useState(null),r=ee(!0),a=c.useCallback(d=>{o(d)},[]),t=()=>{o(null)},l=s.length,i=e.jsxs(L,{onClick:r.onToggle,sx:{pl:2.5,pr:1.5,height:40,flexShrink:0,flexGrow:"unset",typography:"overline",color:"text.secondary",bgcolor:"background.neutral"},children:[e.jsxs(T,{component:"span",sx:{flexGrow:1},children:["In room (",l,")"]}),e.jsx(x,{width:16,icon:r.value?"eva:arrow-ios-downward-fill":"eva:arrow-ios-forward-fill"})]}),h=e.jsx(V,{sx:{height:56*4},children:s.map(d=>e.jsxs(L,{onClick:()=>a(d),children:[e.jsx(P,{variant:d.status,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(R,{alt:d.name,src:d.avatarUrl})}),e.jsx(z,{sx:{ml:2},primary:d.name,secondary:d.role,primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{noWrap:!0,component:"span",typography:"caption"}})]},d.id))});return e.jsxs(e.Fragment,{children:[i,e.jsx("div",{children:e.jsx(we,{in:r.value,children:h})}),n&&e.jsx(Ie,{participant:n,open:!!n,onClose:t})]})}Ee.propTypes={participants:f.array};function Ae({participant:s}){const n=ee(!0),{name:o,avatarUrl:r,role:a,address:t,phoneNumber:l,email:i}=s,h=e.jsxs(p,{alignItems:"center",sx:{py:5},children:[e.jsx(R,{alt:o,src:r,sx:{width:96,height:96,mb:2}}),e.jsx(S,{variant:"subtitle1",children:o}),e.jsx(S,{variant:"body2",sx:{color:"text.secondary",mt:.5},children:a})]}),d=e.jsxs(L,{onClick:n.onToggle,sx:{pl:2.5,pr:1.5,height:40,flexShrink:0,flexGrow:"unset",typography:"overline",color:"text.secondary",bgcolor:"background.neutral"},children:[e.jsx(T,{component:"span",sx:{flexGrow:1},children:"Information"}),e.jsx(x,{width:16,icon:n.value?"eva:arrow-ios-downward-fill":"eva:arrow-ios-forward-fill"})]}),j=e.jsxs(p,{spacing:2,sx:{px:2,py:2.5,"& svg":{mr:1,flexShrink:0,color:"text.disabled"}},children:[e.jsxs(p,{direction:"row",children:[e.jsx(x,{icon:"mingcute:location-fill"}),e.jsx(S,{variant:"body2",children:t})]}),e.jsxs(p,{direction:"row",children:[e.jsx(x,{icon:"solar:phone-bold"}),e.jsx(S,{variant:"body2",children:l})]}),e.jsxs(p,{direction:"row",children:[e.jsx(x,{icon:"fluent:mail-24-filled"}),e.jsx(S,{variant:"body2",noWrap:!0,children:i})]})]});return e.jsxs(e.Fragment,{children:[h,d,e.jsx("div",{children:e.jsx(we,{in:n.value,children:j})})]})}Ae.propTypes={participant:f.object};function Me({attachments:s}){const n=ee(!0),o=s.length,r=e.jsxs(L,{disabled:!s.length,onClick:n.onToggle,sx:{pl:2.5,pr:1.5,height:40,flexShrink:0,flexGrow:"unset",typography:"overline",color:"text.secondary",bgcolor:"background.neutral"},children:[e.jsxs(T,{component:"span",sx:{flexGrow:1},children:["Attachments (",o,")"]}),e.jsx(x,{width:16,icon:!n.value&&"eva:arrow-ios-forward-fill"||!s.length&&"eva:arrow-ios-forward-fill"||"eva:arrow-ios-downward-fill"})]}),a=e.jsx(V,{sx:{px:2,py:2.5},children:s.map((t,l)=>e.jsxs(p,{spacing:1.5,direction:"row",alignItems:"center",sx:{mb:2},children:[e.jsx(p,{alignItems:"center",justifyContent:"center",sx:{width:40,height:40,flexShrink:0,borderRadius:1,overflow:"hidden",position:"relative",backgroundColor:"background.neutral"},children:e.jsx(rs,{imageView:!0,file:t.preview,onDownload:()=>console.info("DOWNLOAD"),sx:{width:28,height:28}})}),e.jsx(z,{primary:t.name,secondary:os(t.createdAt),primaryTypographyProps:{noWrap:!0,typography:"body2"},secondaryTypographyProps:{mt:.25,noWrap:!0,component:"span",typography:"caption",color:"text.disabled"}})]},t.name+l))});return e.jsxs(e.Fragment,{children:[r,e.jsx(T,{sx:{overflow:"hidden",height:n.value?1:0,transition:t=>t.transitions.create(["height"],{duration:t.transitions.duration.shorter})},children:a})]})}Me.propTypes={attachments:f.array};const Q=240;function De({participants:s,conversation:n}){const o=ve(),r=je("up","lg"),{collapseDesktop:a,onCloseDesktop:t,onCollapseDesktop:l,openMobile:i,onOpenMobile:h,onCloseMobile:d}=Ce();c.useEffect(()=>{r||t()},[t,r]);const j=c.useCallback(()=>{r?l():h()},[r]),v=s.length>1,b=as(ln(n.messages.map(g=>g.attachments))),m=e.jsxs(e.Fragment,{children:[v?e.jsx(Ee,{participants:s}):e.jsx(Ae,{participant:s[0]}),e.jsx(Me,{attachments:b})]}),u=e.jsx(y,{onClick:j,sx:{top:12,right:0,zIndex:9,width:32,height:32,borderRight:0,position:"absolute",borderRadius:"12px 0 0 12px",boxShadow:o.customShadows.z8,bgcolor:o.palette.background.paper,border:`solid 1px ${o.palette.divider}`,"&:hover":{bgcolor:o.palette.background.neutral},...r&&{...!a&&{right:Q}}},children:r?e.jsx(x,{width:16,icon:a?"eva:arrow-ios-back-fill":"eva:arrow-ios-forward-fill"}):e.jsx(x,{width:16,icon:"eva:arrow-ios-back-fill"})});return e.jsxs(T,{sx:{position:"relative"},children:[u,r?e.jsx(p,{sx:{height:1,flexShrink:0,width:Q,borderLeft:`solid 1px ${o.palette.divider}`,transition:o.transitions.create(["width"],{duration:o.transitions.duration.shorter}),...a&&{width:0}},children:!a&&m}):e.jsx(ye,{anchor:"right",open:i,onClose:d,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:Q}},children:m})]})}De.propTypes={conversation:f.object,participants:f.array};function Le({message:s,participants:n,onOpenLightbox:o}){const{user:r}=$(),{me:a,senderDetails:t,hasImage:l}=qs({message:s,participants:n,currentUserId:r.id}),{firstName:i,avatarUrl:h}=t,{body:d,createdAt:j}=s,v=e.jsxs(S,{noWrap:!0,variant:"caption",sx:{mb:1,color:"text.disabled",...!a&&{mr:"auto"}},children:[!a&&`${i},`,"  ",Cs(new Date(j),{addSuffix:!0})]}),b=e.jsx(p,{sx:{p:1.5,minWidth:48,maxWidth:320,borderRadius:1,typography:"body2",bgcolor:"background.neutral",...a&&{color:"grey.800",bgcolor:"primary.lighter"},...l&&{p:0,bgcolor:"transparent"}},children:l?e.jsx(T,{component:"img",alt:"attachment",src:d,onClick:()=>o(d),sx:{minHeight:220,borderRadius:1.5,cursor:"pointer","&:hover":{opacity:.9}}}):d}),m=e.jsxs(p,{direction:"row",className:"message-actions",sx:{pt:.5,opacity:0,top:"100%",left:0,position:"absolute",transition:u=>u.transitions.create(["opacity"],{duration:u.transitions.duration.shorter}),...a&&{left:"unset",right:0}},children:[e.jsx(y,{size:"small",children:e.jsx(x,{icon:"solar:reply-bold",width:16})}),e.jsx(y,{size:"small",children:e.jsx(x,{icon:"eva:smiling-face-fill",width:16})}),e.jsx(y,{size:"small",children:e.jsx(x,{icon:"solar:trash-bin-trash-bold",width:16})})]});return e.jsxs(p,{direction:"row",justifyContent:a?"flex-end":"unset",sx:{mb:5},children:[!a&&e.jsx(R,{alt:i,src:h,sx:{width:32,height:32,mr:2}}),e.jsxs(p,{alignItems:"flex-end",children:[v,e.jsxs(p,{direction:"row",alignItems:"center",sx:{position:"relative","&:hover":{"& .message-actions":{opacity:1}}},children:[b,m]})]})]})}Le.propTypes={message:f.object,onOpenLightbox:f.func,participants:f.array};function Ne({messages:s=[],participants:n}){const{messagesEndRef:o}=Ys(s),r=s.filter(t=>t.contentType==="image").map(t=>({src:t.body})),a=js(r);return e.jsxs(e.Fragment,{children:[e.jsx(V,{ref:o,sx:{px:3,py:5,height:1},children:e.jsx(T,{children:s.map(t=>e.jsx(Le,{message:t,participants:n,onOpenLightbox:()=>a.onOpen(t.body)},t.id))})}),e.jsx(bs,{index:a.selected,slides:r,open:a.open,close:a.onClose})]})}Ne.propTypes={messages:f.array,participants:f.array};function ue(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(s){const n=Math.random()*16|0;return(s==="x"?n:n&3|8).toString(16)})}function Oe({recipients:s,onAddRecipients:n,disabled:o,selectedConversationId:r}){const a=Z(),{user:t}=$(),l=c.useRef(null),[i,h]=c.useState(""),d=c.useMemo(()=>({id:t.id,role:t.role,email:t.email,address:t.address,name:t.displayName,lastActivity:new Date,avatarUrl:t.photoURL,phoneNumber:t.phoneNumber,status:"online"}),[t]),j=c.useMemo(()=>({id:ue(),attachments:[],body:i,contentType:"text",createdAt:is(new Date,{minutes:1}),senderId:d.id}),[i,d.id]),v=c.useMemo(()=>({id:ue(),messages:[j],participants:[...s,d],type:s.length>1?"GROUP":"ONE_TO_ONE",unreadCount:0}),[j,d,s]),b=c.useCallback(()=>{l.current&&l.current.click()},[]),m=c.useCallback(g=>{h(g.target.value)},[]),u=c.useCallback(async g=>{try{if(g.key==="Enter"){if(i)if(r)await Bs(r,j);else{const w=await Hs(v);a.push(`${F.dashboard.chat}?id=${w.conversation.id}`),n([])}h("")}}catch(w){console.error(w)}},[v,i,j,n,a,r]);return e.jsxs(e.Fragment,{children:[e.jsx(ge,{value:i,onKeyUp:u,onChange:m,placeholder:"Type a message",disabled:o,startAdornment:e.jsx(y,{children:e.jsx(x,{icon:"eva:smiling-face-fill"})}),endAdornment:e.jsxs(p,{direction:"row",sx:{flexShrink:0},children:[e.jsx(y,{onClick:b,children:e.jsx(x,{icon:"solar:gallery-add-bold"})}),e.jsx(y,{onClick:b,children:e.jsx(x,{icon:"eva:attach-2-fill"})}),e.jsx(y,{children:e.jsx(x,{icon:"solar:microphone-bold"})})]}),sx:{px:1,height:56,flexShrink:0,borderTop:g=>`solid 1px ${g.palette.divider}`}}),e.jsx("input",{type:"file",ref:l,style:{display:"none"}})]})}Oe.propTypes={disabled:f.bool,onAddRecipients:f.func,recipients:f.array,selectedConversationId:f.string};function _e({participants:s}){const n=s.length>1,o=s[0],r=e.jsx(ys,{max:3,sx:{[`& .${ls.avatar}`]:{width:32,height:32}},children:s.map(t=>e.jsx(R,{alt:t.name,src:t.avatarUrl},t.id))}),a=e.jsxs(p,{flexGrow:1,direction:"row",alignItems:"center",spacing:2,children:[e.jsx(P,{variant:o.status,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(R,{src:o.avatarUrl,alt:o.name})}),e.jsx(z,{primary:o.name,secondary:o.status==="offline"?cs(o.lastActivity):o.status,secondaryTypographyProps:{component:"span",...o.status!=="offline"&&{textTransform:"capitalize"}}})]});return e.jsxs(e.Fragment,{children:[n?r:a,e.jsx(p,{flexGrow:1}),e.jsx(y,{children:e.jsx(x,{icon:"solar:phone-bold"})}),e.jsx(y,{children:e.jsx(x,{icon:"solar:videocamera-record-bold"})}),e.jsx(y,{children:e.jsx(x,{icon:"eva:more-vertical-fill"})})]})}_e.propTypes={participants:f.array};function Pe({contacts:s,onAddRecipients:n}){const[o,r]=c.useState(""),a=c.useCallback(t=>{r(""),n(t)},[n]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{variant:"subtitle2",sx:{color:"text.primary",mr:2},children:"To:"}),e.jsx(ds,{sx:{minWidth:320},multiple:!0,limitTags:3,popupIcon:null,disableCloseOnSelect:!0,noOptionsText:e.jsx(fe,{query:o}),onChange:(t,l)=>a(l),onInputChange:(t,l)=>r(l),options:s,getOptionLabel:t=>t.name,isOptionEqualToValue:(t,l)=>t.id===l.id,renderInput:t=>e.jsx(be,{...t,placeholder:"+ Recipients"}),renderOption:(t,l,{selected:i})=>c.createElement("li",{...t,key:l.id},e.jsxs(T,{sx:{mr:1,width:32,height:32,overflow:"hidden",borderRadius:"50%",position:"relative"},children:[e.jsx(R,{alt:l.name,src:l.avatarUrl,sx:{width:1,height:1}}),e.jsx(p,{alignItems:"center",justifyContent:"center",sx:{top:0,left:0,width:1,height:1,opacity:0,position:"absolute",bgcolor:h=>I(h.palette.grey[900],.8),transition:h=>h.transitions.create(["opacity"],{easing:h.transitions.easing.easeInOut,duration:h.transitions.duration.shorter}),...i&&{opacity:1,color:"primary.main"}},children:e.jsx(x,{icon:"eva:checkmark-fill"})})]},l.id),l.name),renderTags:(t,l)=>t.map((i,h)=>c.createElement(hs,{...l({index:h}),key:i.id,label:i.name,avatar:e.jsx(R,{alt:i.name,src:i.avatarUrl}),size:"small",variant:"soft"}))})]})}Pe.propTypes={contacts:f.array,onAddRecipients:f.func};function cn(){const s=Z(),{user:n}=$();us();const r=ms().get("id")||"",[a,t]=c.useState([]),{contacts:l}=Vs(),{conversations:i,conversationsLoading:h}=Ws(),{conversation:d,conversationError:j}=Gs(`${r}`),v=d?d.participants.filter(C=>C.id!==n.id):[];c.useEffect(()=>{(j||!r)&&s.push(F.dashboard.chat)},[j,s,r]);const b=c.useCallback(C=>{t(C)},[]),m=!!d,u=e.jsx(p,{direction:"row",alignItems:"center",flexShrink:0,sx:{pr:1,pl:2.5,py:1,minHeight:72},children:r?e.jsx(e.Fragment,{children:m&&e.jsx(_e,{participants:v})}):e.jsx(Pe,{contacts:l,onAddRecipients:b})}),g=e.jsx(Te,{contacts:l,conversations:i,loading:h,selectedConversationId:r}),w=e.jsxs(p,{sx:{width:1,height:1,overflow:"hidden"},children:[e.jsx(Ne,{messages:d==null?void 0:d.messages,participants:v}),e.jsx(Oe,{recipients:a,onAddRecipients:b,selectedConversationId:r,disabled:!a.length&&!r})]});return e.jsxs(T,{px:5,children:[e.jsx(S,{variant:"h4",sx:{mb:{xs:3,md:5}},children:"Support"}),e.jsxs(p,{component:xs,direction:"row",sx:{height:"72vh"},children:[g,e.jsxs(p,{sx:{width:1,height:1,overflow:"hidden"},children:[u,e.jsxs(p,{direction:"row",sx:{width:1,height:1,overflow:"hidden",borderTop:C=>`solid 1px ${C.palette.divider}`},children:[w,m&&e.jsx(De,{conversation:d,participants:v})]})]})]})]})}function fn(){return e.jsxs(e.Fragment,{children:[e.jsx(ps,{children:e.jsx("title",{children:" Dashboard: Chat"})}),e.jsx(cn,{})]})}export{fn as default};
