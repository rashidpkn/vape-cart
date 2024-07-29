import{c$ as ge,d0 as Ge,d1 as Ve,d2 as We,d3 as Be,d4 as U,d5 as ae,d6 as He,a4 as c,bV as qe,d7 as Ye,d8 as X,j as e,aP as Xe,bv as z,d9 as fe,da as Ke,bP as Qe,bQ as Je,bW as K,b8 as A,bX as Ze,db as es,dc as ss,dd as ts,de as ns,df as rs,dg as ve,cg as be,dh as os,aU as as,di as G,aX as is,S as g,b_ as B,bm as ls,aJ as C,aK as p,cd as cs,aY as Q,dj as ds,c5 as hs,dk as je,dl as H,P as f,g as R,cQ as ye,cO as $,u as we,az as se,bw as Ce,p as V,bA as ke,aI as us,aS as T,aZ as q,dm as Se,dn as ps,dp as xs,dq as ms,c9 as gs,aM as E,aA as te,ck as Re,dr as fs,cp as vs,ds as bs,dt as js,du as ys,bu as ws,bF as Cs,aR as ks,W as Ss}from"./index-b8ace7df.js";import{u as Rs}from"./use-search-params-a1b22269.js";import{u as ne,f as re,m as ee,b as As,e as P,S as J,a as Ts,L as Is}from"./lightbox-8cefe33e.js";import{D as Es}from"./DialogContent-1c11f449.js";var ie=1e3*60,W=60*24,le=W*30,ce=W*365;function Ms(s,t,n){var o,a,r;ge(2,arguments);var i=He(),l=(o=(a=n==null?void 0:n.locale)!==null&&a!==void 0?a:i.locale)!==null&&o!==void 0?o:Ge;if(!l.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var u=Ve(s,t);if(isNaN(u))throw new RangeError("Invalid time value");var d=We(Be(n),{addSuffix:!!(n!=null&&n.addSuffix),comparison:u}),b,v;u>0?(b=U(t),v=U(s)):(b=U(s),v=U(t));var y=String((r=n==null?void 0:n.roundingMethod)!==null&&r!==void 0?r:"round"),x;if(y==="floor")x=Math.floor;else if(y==="ceil")x=Math.ceil;else if(y==="round")x=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var h=v.getTime()-b.getTime(),m=h/ie,j=ae(v)-ae(b),w=(h-j)/ie,S=n==null?void 0:n.unit,k;if(S?k=String(S):m<1?k="second":m<60?k="minute":m<W?k="hour":w<le?k="day":w<ce?k="month":k="year",k==="second"){var M=x(h/1e3);return l.formatDistance("xSeconds",M,d)}else if(k==="minute"){var D=x(m);return l.formatDistance("xMinutes",D,d)}else if(k==="hour"){var O=x(m/60);return l.formatDistance("xHours",O,d)}else if(k==="day"){var _=x(w/W);return l.formatDistance("xDays",_,d)}else if(k==="month"){var N=x(w/le);return N===12&&S!=="month"?l.formatDistance("xYears",1,d):l.formatDistance("xMonths",N,d)}else if(k==="year"){var I=x(w/ce);return l.formatDistance("xYears",I,d)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function Ns(s,t){return ge(1,arguments),Ms(s,Date.now(),t)}function de(s){return s.substring(2).toLowerCase()}function Ls(s,t){return t.documentElement.clientWidth<s.clientX||t.documentElement.clientHeight<s.clientY}function Os(s){const{children:t,disableReactTree:n=!1,mouseEvent:o="onClick",onClickAway:a,touchEvent:r="onTouchEnd"}=s,i=c.useRef(!1),l=c.useRef(null),u=c.useRef(!1),d=c.useRef(!1);c.useEffect(()=>(setTimeout(()=>{u.current=!0},0),()=>{u.current=!1}),[]);const b=qe(t.ref,l),v=Ye(h=>{const m=d.current;d.current=!1;const j=X(l.current);if(!u.current||!l.current||"clientX"in h&&Ls(h,j))return;if(i.current){i.current=!1;return}let w;h.composedPath?w=h.composedPath().indexOf(l.current)>-1:w=!j.documentElement.contains(h.target)||l.current.contains(h.target),!w&&(n||!m)&&a(h)}),y=h=>m=>{d.current=!0;const j=t.props[h];j&&j(m)},x={ref:b};return r!==!1&&(x[r]=y(r)),c.useEffect(()=>{if(r!==!1){const h=de(r),m=X(l.current),j=()=>{i.current=!0};return m.addEventListener(h,v),m.addEventListener("touchmove",j),()=>{m.removeEventListener(h,v),m.removeEventListener("touchmove",j)}}},[v,r]),o!==!1&&(x[o]=y(o)),c.useEffect(()=>{if(o!==!1){const h=de(o),m=X(l.current);return m.addEventListener(h,v),()=>{m.removeEventListener(h,v)}}},[v,o]),e.jsx(c.Fragment,{children:c.cloneElement(t,x)})}const Ps=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],he={small:-16,medium:null},Ds=s=>{const{classes:t}=s;return Ze({root:["root"],avatar:["avatar"]},es,t)},_s=Xe("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(s,t)=>z({[`& .${fe.avatar}`]:t.avatar},t.root)})(({theme:s,ownerState:t})=>{const n=t.spacing&&he[t.spacing]!==void 0?he[t.spacing]:-t.spacing;return{[`& .${Ke.root}`]:{border:`2px solid ${(s.vars||s).palette.background.default}`,boxSizing:"content-box",marginLeft:n??-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}}),Fs=c.forwardRef(function(t,n){var o;const a=Qe({props:t,name:"MuiAvatarGroup"}),{children:r,className:i,component:l="div",componentsProps:u={},max:d=5,renderSurplus:b,slotProps:v={},spacing:y="medium",total:x,variant:h="circular"}=a,m=Je(a,Ps);let j=d<2?2:d;const w=z({},a,{max:d,spacing:y,component:l,variant:h}),S=Ds(w),k=c.Children.toArray(r).filter(I=>c.isValidElement(I)),M=x||k.length;M===j&&(j+=1),j=Math.min(M+1,j);const D=Math.min(k.length,j-1),O=Math.max(M-j,M-D,0),_=b?b(O):`+${O}`,N=(o=v.additionalAvatar)!=null?o:u.additionalAvatar;return e.jsxs(_s,z({as:l,ownerState:w,className:K(S.root,i),ref:n},m,{children:[O?e.jsx(A,z({variant:h},N,{className:K(S.avatar,N==null?void 0:N.className),children:_})):null,k.slice(0,D).reverse().map(I=>c.cloneElement(I,{className:K(I.props.className,S.avatar),variant:I.props.variant||h}))]}))}),$s=Fs;var Us=ss,zs=ts;function Gs(s,t){return s&&Us(s,t,zs)}var Vs=Gs,Ws=ns;function Bs(s,t){return function(n,o){if(n==null)return n;if(!Ws(n))return s(n,o);for(var a=n.length,r=t?a:-1,i=Object(n);(t?r--:++r<a)&&o(i[r],r,i)!==!1;);return n}}var Hs=Bs,qs=Vs,Ys=Hs,Xs=Ys(qs),Ks=Xs;function Qs(s,t,n,o){for(var a=-1,r=s==null?0:s.length;++a<r;){var i=s[a];t(o,i,n(i),s)}return o}var Js=Qs,Zs=Ks;function et(s,t,n,o){return Zs(s,function(a,r,i){t(o,a,n(a),i)}),o}var st=et,tt=Js,nt=st,rt=rs,ot=ve;function at(s,t){return function(n,o){var a=ot(n)?tt:nt,r=t?t():{};return a(n,s,rt(o),r)}}var it=at,lt=os,ct=it,dt=ct(function(s,t,n){lt(s,n,t)}),ht=dt;const ut=be(ht),oe={revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1};function pt(){const s=[P.chat,{params:{endpoint:"contacts"}}],{data:t,isLoading:n,error:o,isValidating:a}=ne(s,re,oe);return c.useMemo(()=>({contacts:(t==null?void 0:t.contacts)||[],contactsLoading:n,contactsError:o,contactsValidating:a,contactsEmpty:!n&&!(t!=null&&t.contacts.length)}),[t==null?void 0:t.contacts,o,n,a])}function xt(){const s=[P.chat,{params:{endpoint:"conversations"}}],{data:t,isLoading:n,error:o,isValidating:a}=ne(s,re,oe);return c.useMemo(()=>{const i=ut(t==null?void 0:t.conversations,"id")||{},l=Object.keys(i)||[];return{conversations:{byId:i,allIds:l},conversationsLoading:n,conversationsError:o,conversationsValidating:a,conversationsEmpty:!n&&!l.length}},[t==null?void 0:t.conversations,o,n,a])}function mt(s){const t=s?[P.chat,{params:{conversationId:s,endpoint:"conversation"}}]:null,{data:n,isLoading:o,error:a,isValidating:r}=ne(t,re,oe);return c.useMemo(()=>({conversation:n==null?void 0:n.conversation,conversationLoading:o,conversationError:a,conversationValidating:r}),[n==null?void 0:n.conversation,a,o,r])}async function gt(s,t){const n=[P.chat,{params:{endpoint:"conversations"}}],o=[P.chat,{params:{conversationId:s,endpoint:"conversation"}}];ee(o,a=>{const{conversation:r}=a;return{conversation:{...r,messages:[...r.messages,t]}}},!1),ee(n,a=>{const{conversations:r}=a;return{conversations:r.map(l=>l.id===s?{...l,messages:[...l.messages,t]}:l)}},!1)}async function ft(s){const t=[P.chat,{params:{endpoint:"conversations"}}],n={conversationData:s},o=await As.post(P.chat,n);return ee(t,a=>{const r=[...a.conversations,s];return{...a,conversations:r}},!1),o.data}function vt({message:s,participants:t,currentUserId:n}){const o=t.find(l=>l.id===s.senderId),a=s.senderId===n?{type:"me"}:{avatarUrl:o==null?void 0:o.avatarUrl,firstName:o==null?void 0:o.name.split(" ")[0]},r=a.type==="me";return{hasImage:s.contentType==="image",me:r,senderDetails:a}}function Ae(){const[s,t]=c.useState(!1),[n,o]=c.useState(!1),a=c.useCallback(()=>{o(u=>!u)},[]),r=c.useCallback(()=>{o(!1)},[]),i=c.useCallback(()=>{t(!0)},[]),l=c.useCallback(()=>{t(!1)},[]);return{openMobile:s,collapseDesktop:n,onOpenMobile:i,onCloseMobile:l,onCloseDesktop:r,onCollapseDesktop:a}}function bt(s){const t=c.useRef(null),n=c.useCallback(()=>{s&&t.current&&t.current&&(t.current.scrollTop=t.current.scrollHeight)},[s]);return c.useEffect(()=>{n()},[s]),{messagesEndRef:t}}function jt(){const{user:s}=H(),t=as(),[n,o]=c.useState("online"),a=c.useCallback(r=>{o(r.target.value)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(G,{variant:n,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(A,{src:s==null?void 0:s.photoURL,alt:s==null?void 0:s.displayName,onClick:t.onOpen,sx:{cursor:"pointer",width:48,height:48}})}),e.jsxs(is,{open:t.open,onClose:t.onClose,arrow:"top-left",sx:{p:0},children:[e.jsxs(g,{direction:"row",alignItems:"center",spacing:2,sx:{py:2,pr:1,pl:2.5},children:[e.jsx(B,{primary:s==null?void 0:s.displayName,secondary:s==null?void 0:s.email,secondaryTypographyProps:{component:"span"}}),e.jsx(ls,{title:"Log out",children:e.jsx(C,{color:"error",children:e.jsx(p,{icon:"ic:round-power-settings-new"})})})]}),e.jsx(cs,{sx:{borderStyle:"dashed"}}),e.jsxs(g,{sx:{p:1},children:[e.jsxs(Q,{children:[e.jsx(G,{variant:n,sx:{[`& .${ds.badge}`]:{position:"static",m:.75,width:12,height:12,flexShrink:0}}}),e.jsx(hs,{native:!0,fullWidth:!0,value:n,onChange:a,input:e.jsx(je,{sx:{pl:2}}),inputProps:{sx:{textTransform:"capitalize"}},children:["online","alway","busy","offline"].map(r=>e.jsx("option",{value:r,children:r},r))})]}),e.jsxs(Q,{children:[e.jsx(p,{icon:"solar:user-id-bold",width:24}),"Profile"]}),e.jsxs(Q,{children:[e.jsx(p,{icon:"eva:settings-2-fill",width:24}),"Settings"]})]})]})]})}function Te({sx:s,...t}){return e.jsxs(g,{spacing:2,direction:"row",alignItems:"center",sx:{px:2.5,py:1.5,...s},...t,children:[e.jsx(J,{variant:"circular",sx:{width:48,height:48}}),e.jsxs(g,{spacing:1,flexGrow:1,children:[e.jsx(J,{sx:{width:.75,height:10}}),e.jsx(J,{sx:{width:.5,height:10}})]})]})}Te.propTypes={sx:f.object};function Ie({query:s,results:t,onClickResult:n}){const o=t.length,a=!o&&!!s;return e.jsxs(e.Fragment,{children:[e.jsxs(R,{paragraph:!0,variant:"h6",sx:{px:2.5},children:["Contacts (",o,")"]}),a?e.jsx(ye,{query:s,sx:{p:3,mx:"auto",width:"calc(100% - 40px)",bgcolor:"background.neutral"}}):e.jsx(e.Fragment,{children:t.map(r=>e.jsxs($,{onClick:()=>n(r),sx:{px:2.5,py:1.5,typography:"subtitle2"},children:[e.jsx(A,{alt:r.name,src:r.avatarUrl,sx:{mr:2}}),r.name]},r.id))})]})}Ie.propTypes={query:f.string,results:f.array,onClickResult:f.func};const ue=320,yt=96;function Ee({loading:s,contacts:t,conversations:n,selectedConversationId:o}){const a=we(),r=se(),i=Ce("up","md"),{collapseDesktop:l,onCloseDesktop:u,onCollapseDesktop:d,openMobile:b,onOpenMobile:v,onCloseMobile:y}=Ae(),[x,h]=c.useState({query:"",results:[]});c.useEffect(()=>{i||u()},[u,i]);const m=c.useCallback(()=>{i?d():y()},[i,y,d]),j=c.useCallback(()=>{i||y(),r.push(V.dashboard.chat)},[i,y,r]),w=c.useCallback(L=>{if(h(F=>({...F,query:L})),L){const F=t.filter(Y=>Y.name.toLowerCase().includes(L));h(Y=>({...Y,results:F}))}},[t]),S=c.useCallback(()=>{h({query:"",results:[]})},[]),k=c.useCallback(L=>{S(),r.push(`${V.dashboard.chat}?id=${L.id}`)},[S,r]),M=e.jsx(C,{onClick:v,sx:{left:0,top:84,zIndex:9,width:32,height:32,position:"absolute",borderRadius:"0 12px 12px 0",bgcolor:a.palette.primary.main,boxShadow:a.customShadows.primary,color:a.palette.primary.contrastText,"&:hover":{bgcolor:a.palette.primary.darker}},children:e.jsx(p,{width:16,icon:"solar:users-group-rounded-bold"})}),D=e.jsx(e.Fragment,{children:[...Array(12)].map((L,F)=>e.jsx(Te,{},F))}),O=e.jsx(e.Fragment,{}),_=e.jsx(Ie,{query:x.query,results:x.results,onClickResult:k}),N=e.jsx(Os,{onClickAway:S,children:e.jsx(ke,{fullWidth:!0,value:x.query,onChange:L=>w(L.target.value),placeholder:"Search contacts...",InputProps:{startAdornment:e.jsx(us,{position:"start",children:e.jsx(p,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{mt:2.5}})}),I=e.jsxs(e.Fragment,{children:[e.jsxs(g,{direction:"row",alignItems:"center",justifyContent:"center",sx:{p:2.5,pb:0},children:[!l&&e.jsxs(e.Fragment,{children:[e.jsx(jt,{}),e.jsx(T,{sx:{flexGrow:1}})]}),e.jsx(C,{onClick:m,children:e.jsx(p,{icon:l?"eva:arrow-ios-forward-fill":"eva:arrow-ios-back-fill"})}),!l&&e.jsx(C,{onClick:j,children:e.jsx(p,{width:24,icon:"solar:user-plus-bold"})})]}),e.jsx(T,{sx:{p:2.5,pt:0},children:!l&&N}),e.jsxs(q,{sx:{pb:1},children:[x.query&&_,s&&D,!x.query&&!!n.allIds.length&&O]})]});return e.jsxs(e.Fragment,{children:[!i&&M,i?e.jsx(g,{sx:{height:1,flexShrink:0,width:ue,borderRight:`solid 1px ${a.palette.divider}`,transition:a.transitions.create(["width"],{duration:a.transitions.duration.shorter}),...l&&{width:yt}},children:I}):e.jsx(Se,{open:b,onClose:y,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:ue}},children:I})]})}Ee.propTypes={contacts:f.array,conversations:f.object,loading:f.bool,selectedConversationId:f.string};var pe=ps,wt=xs,Ct=ve,xe=pe?pe.isConcatSpreadable:void 0;function kt(s){return Ct(s)||wt(s)||!!(xe&&s&&s[xe])}var St=kt,Rt=ms,At=St;function Me(s,t,n,o,a){var r=-1,i=s.length;for(n||(n=At),a||(a=[]);++r<i;){var l=s[r];t>0&&n(l)?t>1?Me(l,t-1,n,o,a):Rt(a,l):o||(a[a.length]=l)}return a}var Tt=Me,It=Tt;function Et(s){var t=s==null?0:s.length;return t?It(s,1):[]}var Mt=Et;const Nt=be(Mt);function Ne({participant:s,open:t,onClose:n}){return e.jsxs(gs,{fullWidth:!0,maxWidth:"xs",open:t,onClose:n,children:[e.jsx(C,{onClick:n,sx:{position:"absolute",right:8,top:8},children:e.jsx(p,{icon:"mingcute:close-line"})}),e.jsxs(Es,{sx:{py:5,px:3,display:"flex"},children:[e.jsx(A,{alt:s.name,src:s.avatarUrl,sx:{width:96,height:96,mr:3}}),e.jsxs(g,{spacing:1,children:[e.jsx(R,{variant:"caption",sx:{color:"primary.main"},children:s.role}),e.jsx(R,{variant:"subtitle1",children:s.name}),e.jsxs(g,{direction:"row",sx:{typography:"caption",color:"text.disabled"},children:[e.jsx(p,{icon:"mingcute:location-fill",width:16,sx:{flexShrink:0,mr:.5,mt:"2px"}}),s.address]}),e.jsxs(g,{spacing:1,direction:"row",sx:{pt:1.5},children:[e.jsx(C,{size:"small",color:"error",sx:{borderRadius:1,bgcolor:o=>E(o.palette.error.main,.08),"&:hover":{bgcolor:o=>E(o.palette.error.main,.16)}},children:e.jsx(p,{width:18,icon:"solar:phone-bold"})}),e.jsx(C,{size:"small",color:"info",sx:{borderRadius:1,bgcolor:o=>E(o.palette.info.main,.08),"&:hover":{bgcolor:o=>E(o.palette.info.main,.16)}},children:e.jsx(p,{width:18,icon:"solar:chat-round-dots-bold"})}),e.jsx(C,{size:"small",color:"primary",sx:{borderRadius:1,bgcolor:o=>E(o.palette.primary.main,.08),"&:hover":{bgcolor:o=>E(o.palette.primary.main,.16)}},children:e.jsx(p,{width:18,icon:"fluent:mail-24-filled"})}),e.jsx(C,{size:"small",color:"secondary",sx:{borderRadius:1,bgcolor:o=>E(o.palette.secondary.main,.08),"&:hover":{bgcolor:o=>E(o.palette.secondary.main,.16)}},children:e.jsx(p,{width:18,icon:"solar:videocamera-record-bold"})})]})]})]})]})}Ne.propTypes={onClose:f.func,open:f.bool,participant:f.object};function Le({participants:s}){const[t,n]=c.useState(null),o=te(!0),a=c.useCallback(d=>{n(d)},[]),r=()=>{n(null)},i=s.length,l=e.jsxs($,{onClick:o.onToggle,sx:{pl:2.5,pr:1.5,height:40,flexShrink:0,flexGrow:"unset",typography:"overline",color:"text.secondary",bgcolor:"background.neutral"},children:[e.jsxs(T,{component:"span",sx:{flexGrow:1},children:["In room (",i,")"]}),e.jsx(p,{width:16,icon:o.value?"eva:arrow-ios-downward-fill":"eva:arrow-ios-forward-fill"})]}),u=e.jsx(q,{sx:{height:56*4},children:s.map(d=>e.jsxs($,{onClick:()=>a(d),children:[e.jsx(G,{variant:d.status,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(A,{alt:d.name,src:d.avatarUrl})}),e.jsx(B,{sx:{ml:2},primary:d.name,secondary:d.role,primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{noWrap:!0,component:"span",typography:"caption"}})]},d.id))});return e.jsxs(e.Fragment,{children:[l,e.jsx("div",{children:e.jsx(Re,{in:o.value,children:u})}),t&&e.jsx(Ne,{participant:t,open:!!t,onClose:r})]})}Le.propTypes={participants:f.array};function Oe({participant:s}){const t=te(!0),{name:n,avatarUrl:o,role:a,address:r,phoneNumber:i,email:l}=s,u=e.jsxs(g,{alignItems:"center",sx:{py:5},children:[e.jsx(A,{alt:n,src:o,sx:{width:96,height:96,mb:2}}),e.jsx(R,{variant:"subtitle1",children:n}),e.jsx(R,{variant:"body2",sx:{color:"text.secondary",mt:.5},children:a})]}),d=e.jsxs($,{onClick:t.onToggle,sx:{pl:2.5,pr:1.5,height:40,flexShrink:0,flexGrow:"unset",typography:"overline",color:"text.secondary",bgcolor:"background.neutral"},children:[e.jsx(T,{component:"span",sx:{flexGrow:1},children:"Information"}),e.jsx(p,{width:16,icon:t.value?"eva:arrow-ios-downward-fill":"eva:arrow-ios-forward-fill"})]}),b=e.jsxs(g,{spacing:2,sx:{px:2,py:2.5,"& svg":{mr:1,flexShrink:0,color:"text.disabled"}},children:[e.jsxs(g,{direction:"row",children:[e.jsx(p,{icon:"mingcute:location-fill"}),e.jsx(R,{variant:"body2",children:r})]}),e.jsxs(g,{direction:"row",children:[e.jsx(p,{icon:"solar:phone-bold"}),e.jsx(R,{variant:"body2",children:i})]}),e.jsxs(g,{direction:"row",children:[e.jsx(p,{icon:"fluent:mail-24-filled"}),e.jsx(R,{variant:"body2",noWrap:!0,children:l})]})]});return e.jsxs(e.Fragment,{children:[u,d,e.jsx("div",{children:e.jsx(Re,{in:t.value,children:b})})]})}Oe.propTypes={participant:f.object};function Pe({attachments:s}){const t=te(!0),n=s.length,o=e.jsxs($,{disabled:!s.length,onClick:t.onToggle,sx:{pl:2.5,pr:1.5,height:40,flexShrink:0,flexGrow:"unset",typography:"overline",color:"text.secondary",bgcolor:"background.neutral"},children:[e.jsxs(T,{component:"span",sx:{flexGrow:1},children:["Attachments (",n,")"]}),e.jsx(p,{width:16,icon:!t.value&&"eva:arrow-ios-forward-fill"||!s.length&&"eva:arrow-ios-forward-fill"||"eva:arrow-ios-downward-fill"})]}),a=e.jsx(q,{sx:{px:2,py:2.5},children:s.map((r,i)=>e.jsxs(g,{spacing:1.5,direction:"row",alignItems:"center",sx:{mb:2},children:[e.jsx(g,{alignItems:"center",justifyContent:"center",sx:{width:40,height:40,flexShrink:0,borderRadius:1,overflow:"hidden",position:"relative",backgroundColor:"background.neutral"},children:e.jsx(fs,{imageView:!0,file:r.preview,onDownload:()=>console.info("DOWNLOAD"),sx:{width:28,height:28}})}),e.jsx(B,{primary:r.name,secondary:vs(r.createdAt),primaryTypographyProps:{noWrap:!0,typography:"body2"},secondaryTypographyProps:{mt:.25,noWrap:!0,component:"span",typography:"caption",color:"text.disabled"}})]},r.name+i))});return e.jsxs(e.Fragment,{children:[o,e.jsx(T,{sx:{overflow:"hidden",height:t.value?1:0,transition:r=>r.transitions.create(["height"],{duration:r.transitions.duration.shorter})},children:a})]})}Pe.propTypes={attachments:f.array};const Z=240;function De({participants:s,conversation:t}){const n=we(),o=Ce("up","lg"),{collapseDesktop:a,onCloseDesktop:r,onCollapseDesktop:i,openMobile:l,onOpenMobile:u,onCloseMobile:d}=Ae();c.useEffect(()=>{o||r()},[r,o]);const b=c.useCallback(()=>{o?i():u()},[o]),v=s.length>1,y=bs(Nt(t.messages.map(m=>m.attachments))),x=e.jsxs(e.Fragment,{children:[v?e.jsx(Le,{participants:s}):e.jsx(Oe,{participant:s[0]}),e.jsx(Pe,{attachments:y})]}),h=e.jsx(C,{onClick:b,sx:{top:12,right:0,zIndex:9,width:32,height:32,borderRight:0,position:"absolute",borderRadius:"12px 0 0 12px",boxShadow:n.customShadows.z8,bgcolor:n.palette.background.paper,border:`solid 1px ${n.palette.divider}`,"&:hover":{bgcolor:n.palette.background.neutral},...o&&{...!a&&{right:Z}}},children:o?e.jsx(p,{width:16,icon:a?"eva:arrow-ios-back-fill":"eva:arrow-ios-forward-fill"}):e.jsx(p,{width:16,icon:"eva:arrow-ios-back-fill"})});return e.jsxs(T,{sx:{position:"relative"},children:[h,o?e.jsx(g,{sx:{height:1,flexShrink:0,width:Z,borderLeft:`solid 1px ${n.palette.divider}`,transition:n.transitions.create(["width"],{duration:n.transitions.duration.shorter}),...a&&{width:0}},children:!a&&x}):e.jsx(Se,{anchor:"right",open:l,onClose:d,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:Z}},children:x})]})}De.propTypes={conversation:f.object,participants:f.array};function _e({message:s,participants:t,onOpenLightbox:n}){const{user:o}=H(),{me:a,senderDetails:r,hasImage:i}=vt({message:s,participants:t,currentUserId:o.id}),{firstName:l,avatarUrl:u}=r,{body:d,createdAt:b}=s,v=e.jsxs(R,{noWrap:!0,variant:"caption",sx:{mb:1,color:"text.disabled",...!a&&{mr:"auto"}},children:[!a&&`${l},`,"  ",Ns(new Date(b),{addSuffix:!0})]}),y=e.jsx(g,{sx:{p:1.5,minWidth:48,maxWidth:320,borderRadius:1,typography:"body2",bgcolor:"background.neutral",...a&&{color:"grey.800",bgcolor:"primary.lighter"},...i&&{p:0,bgcolor:"transparent"}},children:i?e.jsx(T,{component:"img",alt:"attachment",src:d,onClick:()=>n(d),sx:{minHeight:220,borderRadius:1.5,cursor:"pointer","&:hover":{opacity:.9}}}):d}),x=e.jsxs(g,{direction:"row",className:"message-actions",sx:{pt:.5,opacity:0,top:"100%",left:0,position:"absolute",transition:h=>h.transitions.create(["opacity"],{duration:h.transitions.duration.shorter}),...a&&{left:"unset",right:0}},children:[e.jsx(C,{size:"small",children:e.jsx(p,{icon:"solar:reply-bold",width:16})}),e.jsx(C,{size:"small",children:e.jsx(p,{icon:"eva:smiling-face-fill",width:16})}),e.jsx(C,{size:"small",children:e.jsx(p,{icon:"solar:trash-bin-trash-bold",width:16})})]});return e.jsxs(g,{direction:"row",justifyContent:a?"flex-end":"unset",sx:{mb:5},children:[!a&&e.jsx(A,{alt:l,src:u,sx:{width:32,height:32,mr:2}}),e.jsxs(g,{alignItems:"flex-end",children:[v,e.jsxs(g,{direction:"row",alignItems:"center",sx:{position:"relative","&:hover":{"& .message-actions":{opacity:1}}},children:[y,x]})]})]})}_e.propTypes={message:f.object,onOpenLightbox:f.func,participants:f.array};function Fe({messages:s=[],participants:t}){const{messagesEndRef:n}=bt(s),o=s.filter(r=>r.contentType==="image").map(r=>({src:r.body})),a=Ts(o);return e.jsxs(e.Fragment,{children:[e.jsx(q,{ref:n,sx:{px:3,py:5,height:1},children:e.jsx(T,{children:s.map(r=>e.jsx(_e,{message:r,participants:t,onOpenLightbox:()=>a.onOpen(r.body)},r.id))})}),e.jsx(Is,{index:a.selected,slides:o,open:a.open,close:a.onClose})]})}Fe.propTypes={messages:f.array,participants:f.array};function me(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(s){const t=Math.random()*16|0;return(s==="x"?t:t&3|8).toString(16)})}function $e({recipients:s,onAddRecipients:t,disabled:n,selectedConversationId:o}){const a=se(),{user:r}=H(),i=c.useRef(null),[l,u]=c.useState(""),d=c.useMemo(()=>({id:r.id,role:r.role,email:r.email,address:r.address,name:r.displayName,lastActivity:new Date,avatarUrl:r.photoURL,phoneNumber:r.phoneNumber,status:"online"}),[r]),b=c.useMemo(()=>({id:me(),attachments:[],body:l,contentType:"text",createdAt:js(new Date,{minutes:1}),senderId:d.id}),[l,d.id]),v=c.useMemo(()=>({id:me(),messages:[b],participants:[...s,d],type:s.length>1?"GROUP":"ONE_TO_ONE",unreadCount:0}),[b,d,s]),y=c.useCallback(()=>{i.current&&i.current.click()},[]),x=c.useCallback(m=>{u(m.target.value)},[]),h=c.useCallback(async m=>{try{if(m.key==="Enter"){if(l)if(o)await gt(o,b);else{const j=await ft(v);a.push(`${V.dashboard.chat}?id=${j.conversation.id}`),t([])}u("")}}catch(j){console.error(j)}},[v,l,b,t,a,o]);return e.jsxs(e.Fragment,{children:[e.jsx(je,{value:l,onKeyUp:h,onChange:x,placeholder:"Type a message",disabled:n,startAdornment:e.jsx(C,{children:e.jsx(p,{icon:"eva:smiling-face-fill"})}),endAdornment:e.jsxs(g,{direction:"row",sx:{flexShrink:0},children:[e.jsx(C,{onClick:y,children:e.jsx(p,{icon:"solar:gallery-add-bold"})}),e.jsx(C,{onClick:y,children:e.jsx(p,{icon:"eva:attach-2-fill"})}),e.jsx(C,{children:e.jsx(p,{icon:"solar:microphone-bold"})})]}),sx:{px:1,height:56,flexShrink:0,borderTop:m=>`solid 1px ${m.palette.divider}`}}),e.jsx("input",{type:"file",ref:i,style:{display:"none"}})]})}$e.propTypes={disabled:f.bool,onAddRecipients:f.func,recipients:f.array,selectedConversationId:f.string};function Ue({participants:s}){const t=s.length>1,n=s[0],o=e.jsx($s,{max:3,sx:{[`& .${fe.avatar}`]:{width:32,height:32}},children:s.map(r=>e.jsx(A,{alt:r.name,src:r.avatarUrl},r.id))}),a=e.jsxs(g,{flexGrow:1,direction:"row",alignItems:"center",spacing:2,children:[e.jsx(G,{variant:n.status,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(A,{src:n.avatarUrl,alt:n.name})}),e.jsx(B,{primary:n.name,secondary:n.status==="offline"?ys(n.lastActivity):n.status,secondaryTypographyProps:{component:"span",...n.status!=="offline"&&{textTransform:"capitalize"}}})]});return e.jsxs(e.Fragment,{children:[t?o:a,e.jsx(g,{flexGrow:1}),e.jsx(C,{children:e.jsx(p,{icon:"solar:phone-bold"})}),e.jsx(C,{children:e.jsx(p,{icon:"solar:videocamera-record-bold"})}),e.jsx(C,{children:e.jsx(p,{icon:"eva:more-vertical-fill"})})]})}Ue.propTypes={participants:f.array};function ze({contacts:s,onAddRecipients:t}){const[n,o]=c.useState(""),a=c.useCallback(r=>{o(""),t(r)},[t]);return e.jsxs(e.Fragment,{children:[e.jsx(R,{variant:"subtitle2",sx:{color:"text.primary",mr:2},children:"To:"}),e.jsx(ws,{sx:{minWidth:320},multiple:!0,limitTags:3,popupIcon:null,disableCloseOnSelect:!0,noOptionsText:e.jsx(ye,{query:n}),onChange:(r,i)=>a(i),onInputChange:(r,i)=>o(i),options:s,getOptionLabel:r=>r.name,isOptionEqualToValue:(r,i)=>r.id===i.id,renderInput:r=>e.jsx(ke,{...r,placeholder:"+ Recipients"}),renderOption:(r,i,{selected:l})=>c.createElement("li",{...r,key:i.id},e.jsxs(T,{sx:{mr:1,width:32,height:32,overflow:"hidden",borderRadius:"50%",position:"relative"},children:[e.jsx(A,{alt:i.name,src:i.avatarUrl,sx:{width:1,height:1}}),e.jsx(g,{alignItems:"center",justifyContent:"center",sx:{top:0,left:0,width:1,height:1,opacity:0,position:"absolute",bgcolor:u=>E(u.palette.grey[900],.8),transition:u=>u.transitions.create(["opacity"],{easing:u.transitions.easing.easeInOut,duration:u.transitions.duration.shorter}),...l&&{opacity:1,color:"primary.main"}},children:e.jsx(p,{icon:"eva:checkmark-fill"})})]},i.id),i.name),renderTags:(r,i)=>r.map((l,u)=>c.createElement(Cs,{...i({index:u}),key:l.id,label:l.name,avatar:e.jsx(A,{alt:l.name,src:l.avatarUrl}),size:"small",variant:"soft"}))})]})}ze.propTypes={contacts:f.array,onAddRecipients:f.func};function Lt(){const s=se(),{user:t}=H(),o=Rs().get("id")||"",[a,r]=c.useState([]),{contacts:i}=pt(),{conversations:l,conversationsLoading:u}=xt(),{conversation:d,conversationError:b}=mt(`${o}`),v=d?d.participants.filter(w=>w.id!==t.id):[];c.useEffect(()=>{(b||!o)&&s.push(V.dashboard.chat)},[b,s,o]);const y=c.useCallback(w=>{r(w)},[]),x=!!d,h=e.jsx(g,{direction:"row",alignItems:"center",flexShrink:0,sx:{pr:1,pl:2.5,py:1,minHeight:72},children:o?e.jsx(e.Fragment,{children:x&&e.jsx(Ue,{participants:v})}):e.jsx(ze,{contacts:i,onAddRecipients:y})}),m=e.jsx(Ee,{contacts:i,conversations:l,loading:u,selectedConversationId:o}),j=e.jsxs(g,{sx:{width:1,height:1,overflow:"hidden"},children:[e.jsx(Fe,{messages:d==null?void 0:d.messages,participants:v}),e.jsx($e,{recipients:a,onAddRecipients:y,selectedConversationId:o,disabled:!a.length&&!o})]});return e.jsxs(T,{px:5,children:[e.jsx(R,{variant:"h4",sx:{mb:{xs:3,md:5}},children:"Support"}),e.jsxs(g,{component:ks,direction:"row",sx:{height:"72vh"},children:[m,e.jsxs(g,{sx:{width:1,height:1,overflow:"hidden"},children:[h,e.jsxs(g,{direction:"row",sx:{width:1,height:1,overflow:"hidden",borderTop:w=>`solid 1px ${w.palette.divider}`},children:[j,x&&e.jsx(De,{conversation:d,participants:v})]})]})]})]})}function Ft(){return e.jsxs(e.Fragment,{children:[e.jsx(Ss,{children:e.jsx("title",{children:" Dashboard: Chat"})}),e.jsx(Lt,{})]})}export{Ft as default};
