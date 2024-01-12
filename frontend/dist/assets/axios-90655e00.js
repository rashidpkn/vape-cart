import{a9 as se,aa as oe,dy as Ht,ab as ae,ag as it,am as ie,dz as Nt,D as R,ad as re,ae as ce,af as ue,ah as le,ai as fe,R as _t,e8 as de,e9 as he}from"./index-b6990d0c.js";import{a as pe}from"./axios-d5068281.js";function Ee(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function me(t){return parseFloat(t)}function ge(t){return se("MuiSkeleton",t)}oe("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Re=["animation","className","component","height","style","variant","width"];let rt=t=>t,kt,Ft,Mt,Ut;const be=t=>{const{classes:e,variant:n,animation:o,hasChildren:s,width:i,height:c}=t;return fe({root:["root",n,o,s&&"withChildren",s&&!i&&"fitContent",s&&!c&&"heightAuto"]},ge,e)},we=Ht(kt||(kt=rt`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),_e=Ht(Ft||(Ft=rt`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),ve=ae("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.animation!==!1&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const n=Ee(t.shape.borderRadius)||"px",o=me(t.shape.borderRadius);return it({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:ie(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${n}/${Math.round(o/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&Nt(Mt||(Mt=rt`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),we),({ownerState:t,theme:e})=>t.animation==="wave"&&Nt(Ut||(Ut=rt`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),_e,(e.vars||e).palette.action.hover)),Ce=R.forwardRef(function(e,n){const o=re({props:e,name:"MuiSkeleton"}),{animation:s="pulse",className:i,component:c="span",height:f,style:d,variant:O="text",width:E}=o,p=ce(o,Re),T=it({},o,{animation:s,component:c,variant:O,hasChildren:!!p.children}),w=be(T);return ue.jsx(ve,it({as:c,ref:n,className:le(w.root,i),ownerState:T},p,{style:it({width:E,height:f},d)}))}),en=Ce,U=()=>{},D=U(),ft=Object,r=t=>t===D,M=t=>typeof t=="function",W=(t,e)=>({...t,...e}),Se=t=>M(t.then),ot=new WeakMap;let Te=0;const Z=t=>{const e=typeof t,n=t&&t.constructor,o=n==Date;let s,i;if(ft(t)===t&&!o&&n!=RegExp){if(s=ot.get(t),s)return s;if(s=++Te+"~",ot.set(t,s),n==Array){for(s="@",i=0;i<t.length;i++)s+=Z(t[i])+",";ot.set(t,s)}if(n==ft){s="#";const c=ft.keys(t).sort();for(;!r(i=c.pop());)r(t[i])||(s+=i+":"+Z(t[i])+",");ot.set(t,s)}}else s=o?t.toJSON():e=="symbol"?t.toString():e=="string"?JSON.stringify(t):""+t;return s},F=new WeakMap,dt={},at={},vt="undefined",ct=typeof window!=vt,mt=typeof document!=vt,De=()=>ct&&typeof window.requestAnimationFrame!=vt,jt=(t,e)=>{const n=F.get(t);return[()=>!r(e)&&t.get(e)||dt,o=>{if(!r(e)){const s=t.get(e);e in at||(at[e]=s),n[5](e,W(s,o),s||dt)}},n[6],()=>!r(e)&&e in at?at[e]:!r(e)&&t.get(e)||dt]};let gt=!0;const Oe=()=>gt,[Rt,bt]=ct&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[U,U],ye=()=>{const t=mt&&document.visibilityState;return r(t)||t!=="hidden"},Ae=t=>(mt&&document.addEventListener("visibilitychange",t),Rt("focus",t),()=>{mt&&document.removeEventListener("visibilitychange",t),bt("focus",t)}),Ie=t=>{const e=()=>{gt=!0,t()},n=()=>{gt=!1};return Rt("online",e),Rt("offline",n),()=>{bt("online",e),bt("offline",n)}},Le={isOnline:Oe,isVisible:ye},Ve={initFocus:Ae,initReconnect:Ie},Wt=!_t.useId,tt=!ct||"Deno"in window,xe=t=>De()?window.requestAnimationFrame(t):setTimeout(t,1),ht=tt?R.useEffect:R.useLayoutEffect,pt=typeof navigator<"u"&&navigator.connection,Pt=!tt&&pt&&(["slow-2g","2g"].includes(pt.effectiveType)||pt.saveData),Ct=t=>{if(M(t))try{t=t()}catch{t=""}const e=t;return t=typeof t=="string"?t:(Array.isArray(t)?t.length:t)?Z(t):"",[t,e]};let Ne=0;const wt=()=>++Ne,Bt=0,Kt=1,Xt=2,ke=3;var Q={__proto__:null,ERROR_REVALIDATE_EVENT:ke,FOCUS_EVENT:Bt,MUTATE_EVENT:Xt,RECONNECT_EVENT:Kt};async function zt(...t){const[e,n,o,s]=t,i=W({populateCache:!0,throwOnError:!0},typeof s=="boolean"?{revalidate:s}:s||{});let c=i.populateCache;const f=i.rollbackOnError;let d=i.optimisticData;const O=i.revalidate!==!1,E=w=>typeof f=="function"?f(w):f!==!1,p=i.throwOnError;if(M(n)){const w=n,_=[],y=e.keys();for(const L of y)!/^\$(inf|sub)\$/.test(L)&&w(e.get(L)._k)&&_.push(L);return Promise.all(_.map(T))}return T(n);async function T(w){const[_]=Ct(w);if(!_)return;const[y,L]=jt(e,_),[a,H,G,P]=F.get(e),$=()=>{const C=a[_];return O&&(delete G[_],delete P[_],C&&C[0])?C[0](Xt).then(()=>y().data):y().data};if(t.length<3)return $();let v=o,A;const m=wt();H[_]=[m,0];const j=!r(d),V=y(),B=V.data,et=V._c,q=r(et)?B:et;if(j&&(d=M(d)?d(q,B):d,L({data:d,_c:q})),M(v))try{v=v(q)}catch(C){A=C}if(v&&Se(v))if(v=await v.catch(C=>{A=C}),m!==H[_][0]){if(A)throw A;return v}else A&&j&&E(A)&&(c=!0,L({data:q,_c:D}));if(c&&!A)if(M(c)){const C=c(v,q);L({data:C,error:D,_c:D})}else L({data:v,error:D,_c:D});if(H[_][1]=wt(),Promise.resolve($()).then(()=>{L({_c:D})}),A){if(p)throw A;return}return v}}const $t=(t,e)=>{for(const n in t)t[n][0]&&t[n][0](e)},Fe=(t,e)=>{if(!F.has(t)){const n=W(Ve,e),o={},s=zt.bind(D,t);let i=U;const c={},f=(E,p)=>{const T=c[E]||[];return c[E]=T,T.push(p),()=>T.splice(T.indexOf(p),1)},d=(E,p,T)=>{t.set(E,p);const w=c[E];if(w)for(const _ of w)_(p,T)},O=()=>{if(!F.has(t)&&(F.set(t,[o,{},{},{},s,d,f]),!tt)){const E=n.initFocus(setTimeout.bind(D,$t.bind(D,o,Bt))),p=n.initReconnect(setTimeout.bind(D,$t.bind(D,o,Kt)));i=()=>{E&&E(),p&&p(),F.delete(t)}}};return O(),[t,s,O,i]}return[t,F.get(t)[4]]},Me=(t,e,n,o,s)=>{const i=n.errorRetryCount,c=s.retryCount,f=~~((Math.random()+.5)*(1<<(c<8?c:8)))*n.errorRetryInterval;!r(i)&&c>i||setTimeout(o,f,s)},Ue=(t,e)=>Z(t)==Z(e),[Jt,We]=Fe(new Map),Pe=W({onLoadingSlow:U,onSuccess:U,onError:U,onErrorRetry:Me,onDiscarded:U,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Pt?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Pt?5e3:3e3,compare:Ue,isPaused:()=>!1,cache:Jt,mutate:We,fallback:{}},Le),$e=(t,e)=>{const n=W(t,e);if(e){const{use:o,fallback:s}=t,{use:i,fallback:c}=e;o&&i&&(n.use=o.concat(i)),s&&c&&(n.fallback=W(s,c))}return n},qe=R.createContext({}),He="$inf$",Gt=ct&&window.__SWR_DEVTOOLS_USE__,je=Gt?window.__SWR_DEVTOOLS_USE__:[],Be=()=>{Gt&&(window.__SWR_DEVTOOLS_REACT__=_t)},Ke=t=>M(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(t[1]===null?t[2]:t[1])||{}],Xe=()=>W(Pe,R.useContext(qe)),ze=t=>(e,n,o)=>t(e,n&&((...i)=>{const[c]=Ct(e),[,,,f]=F.get(Jt);if(c.startsWith(He))return n(...i);const d=f[c];return r(d)?n(...i):(delete f[c],d)}),o),Je=je.concat(ze),Ge=t=>function(...n){const o=Xe(),[s,i,c]=Ke(n),f=$e(o,c);let d=t;const{use:O}=f,E=(O||[]).concat(Je);for(let p=E.length;p--;)d=E[p](d);return d(s,i||f.fetcher||null,f)},Ye=(t,e,n)=>{const o=e[t]||(e[t]=[]);return o.push(n),()=>{const s=o.indexOf(n);s>=0&&(o[s]=o[o.length-1],o.pop())}};Be();const qt=_t.use||(t=>{if(t.status==="pending")throw t;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e}),t)}),Et={dedupe:!0},Qe=(t,e,n)=>{const{cache:o,compare:s,suspense:i,fallbackData:c,revalidateOnMount:f,revalidateIfStale:d,refreshInterval:O,refreshWhenHidden:E,refreshWhenOffline:p,keepPreviousData:T}=n,[w,_,y,L]=F.get(o),[a,H]=Ct(t),G=R.useRef(!1),P=R.useRef(!1),$=R.useRef(a),v=R.useRef(e),A=R.useRef(n),m=()=>A.current,j=()=>m().isVisible()&&m().isOnline(),[V,B,et,q]=jt(o,a),C=R.useRef({}).current,Qt=r(c)?n.fallback[a]:c,St=(u,l)=>{for(const b in C){const h=b;if(h==="data"){if(!s(u[h],l[h])&&(!r(u[h])||!s(st,l[h])))return!1}else if(l[h]!==u[h])return!1}return!0},Tt=R.useMemo(()=>{const u=(()=>!a||!e?!1:r(f)?m().isPaused()||i?!1:r(d)?!0:d:f)(),l=S=>{const N=W(S);return delete N._k,u?{isValidating:!0,isLoading:!0,...N}:N},b=V(),h=q(),x=l(b),J=b===h?x:l(h);let g=x;return[()=>{const S=l(V());return St(S,g)?(g.data=S.data,g.isLoading=S.isLoading,g.isValidating=S.isValidating,g.error=S.error,g):(g=S,S)},()=>J]},[o,a]),K=de.useSyncExternalStore(R.useCallback(u=>et(a,(l,b)=>{St(b,l)||u()}),[o,a]),Tt[0],Tt[1]),Dt=!G.current,Zt=w[a]&&w[a].length>0,X=K.data,z=r(X)?Qt:X,nt=K.error,Ot=R.useRef(z),st=T?r(X)?Ot.current:X:z,yt=(()=>Zt&&!r(nt)?!1:Dt&&!r(f)?f:m().isPaused()?!1:i?r(z)?!1:d:r(z)||d)(),At=!!(a&&e&&Dt&&yt),te=r(K.isValidating)?At:K.isValidating,ee=r(K.isLoading)?At:K.isLoading,Y=R.useCallback(async u=>{const l=v.current;if(!a||!l||P.current||m().isPaused())return!1;let b,h,x=!0;const J=u||{},g=!y[a]||!J.dedupe,S=()=>Wt?!P.current&&a===$.current&&G.current:a===$.current,N={isValidating:!1,isLoading:!1},Lt=()=>{B(N)},Vt=()=>{const I=y[a];I&&I[1]===h&&delete y[a]},xt={isValidating:!0};r(V().data)&&(xt.isLoading=!0);try{if(g&&(B(xt),n.loadingTimeout&&r(V().data)&&setTimeout(()=>{x&&S()&&m().onLoadingSlow(a,n)},n.loadingTimeout),y[a]=[l(H),wt()]),[b,h]=y[a],b=await b,g&&setTimeout(Vt,n.dedupingInterval),!y[a]||y[a][1]!==h)return g&&S()&&m().onDiscarded(a),!1;N.error=D;const I=_[a];if(!r(I)&&(h<=I[0]||h<=I[1]||I[1]===0))return Lt(),g&&S()&&m().onDiscarded(a),!1;const k=V().data;N.data=s(k,b)?k:b,g&&S()&&m().onSuccess(b,a,n)}catch(I){Vt();const k=m(),{shouldRetryOnError:ut}=k;k.isPaused()||(N.error=I,g&&S()&&(k.onError(I,a,k),(ut===!0||M(ut)&&ut(I))&&j()&&k.onErrorRetry(I,a,k,ne=>{const lt=w[a];lt&&lt[0]&&lt[0](Q.ERROR_REVALIDATE_EVENT,ne)},{retryCount:(J.retryCount||0)+1,dedupe:!0})))}return x=!1,Lt(),!0},[a,o]),It=R.useCallback((...u)=>zt(o,$.current,...u),[]);if(ht(()=>{v.current=e,A.current=n,r(X)||(Ot.current=X)}),ht(()=>{if(!a)return;const u=Y.bind(D,Et);let l=0;const h=Ye(a,w,(x,J={})=>{if(x==Q.FOCUS_EVENT){const g=Date.now();m().revalidateOnFocus&&g>l&&j()&&(l=g+m().focusThrottleInterval,u())}else if(x==Q.RECONNECT_EVENT)m().revalidateOnReconnect&&j()&&u();else{if(x==Q.MUTATE_EVENT)return Y();if(x==Q.ERROR_REVALIDATE_EVENT)return Y(J)}});return P.current=!1,$.current=a,G.current=!0,B({_k:H}),yt&&(r(z)||tt?u():xe(u)),()=>{P.current=!0,h()}},[a]),ht(()=>{let u;function l(){const h=M(O)?O(V().data):O;h&&u!==-1&&(u=setTimeout(b,h))}function b(){!V().error&&(E||m().isVisible())&&(p||m().isOnline())?Y(Et).then(l):l()}return l(),()=>{u&&(clearTimeout(u),u=-1)}},[O,E,p,a]),R.useDebugValue(st),i&&r(z)&&a){if(!Wt&&tt)throw new Error("Fallback data is required when using suspense in SSR.");v.current=e,A.current=n,P.current=!1;const u=L[a];if(!r(u)){const l=It(u);qt(l)}if(r(nt)){const l=Y(Et);r(st)||(l.status="fulfilled",l.value=!0),qt(l)}else throw nt}return{mutate:It,get data(){return C.data=!0,st},get error(){return C.error=!0,nt},get isValidating(){return C.isValidating=!0,te},get isLoading(){return C.isLoading=!0,ee}}},nn=Ge(Qe),Yt=pe.create({baseURL:he});Yt.interceptors.response.use(t=>t,t=>Promise.reject(t.response&&t.response.data||"Something went wrong"));const sn=async t=>{const[e,n]=Array.isArray(t)?t:[t];return(await Yt.get(e,{...n})).data},on={chat:"/api/chat",kanban:"/api/kanban",calendar:"/api/calendar",auth:{me:"/api/auth/me",login:"/api/auth/login",register:"/api/auth/register"},mail:{list:"/api/mail/list",details:"/api/mail/details",labels:"/api/mail/labels"},post:{list:"/api/post/list",details:"/api/post/details",latest:"/api/post/latest",search:"/api/post/search"},product:{list:"/api/product/list",details:"/api/product/details",search:"/api/product/search"}};export{en as S,Yt as a,on as e,sn as f,We as m,nn as u};