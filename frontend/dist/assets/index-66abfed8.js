import{D as l,dO as Te}from"./index-08ed3728.js";import{w as Ve,S as pe,s as De,c as be,i as n,g as Ce,U as ne,b as se,d as v,h as Ie,u as j,j as ve,I as ie,r as Ae,k as oe,m as Le}from"./axios-04e1c815.js";const z={dedupe:!0},ke=(ue,D,f)=>{const{cache:S,compare:N,suspense:F,fallbackData:G,revalidateOnMount:A,revalidateIfStale:L,refreshInterval:k,refreshWhenHidden:Y,refreshWhenOffline:B,keepPreviousData:ce}=f,[O,le,E]=pe.get(S),[e,J]=De(ue),y=l.useRef(!1),b=l.useRef(!1),_=l.useRef(e),M=l.useRef(D),U=l.useRef(f),o=()=>U.current,x=()=>o().isVisible()&&o().isOnline(),[h,q,fe,de]=be(S,e),C=l.useRef({}).current,Re=n(G)?f.fallback[e]:G,K=(t,a)=>{for(const i in C){const r=i;if(r==="data"){if(!N(t[r],a[r])&&(!n(t[r])||!N(P,a[r])))return!1}else if(a[r]!==t[r])return!1}return!0},Q=l.useMemo(()=>{const t=(()=>!e||!D?!1:n(A)?o().isPaused()||F?!1:n(L)?!0:L:A)(),a=u=>{const R=Le(u);return delete R._k,t?{isValidating:!0,isLoading:!0,...R}:R},i=h(),r=de(),d=a(i),p=i===r?d:a(r);let s=d;return[()=>{const u=a(h());return K(u,s)?(s.data=u.data,s.isLoading=u.isLoading,s.isValidating=u.isValidating,s.error=u.error,s):(s=u,u)},()=>p]},[S,e]),m=Te.useSyncExternalStore(l.useCallback(t=>fe(e,(a,i)=>{K(i,a)||t()}),[S,e]),Q[0],Q[1]),X=!y.current,ge=O[e]&&O[e].length>0,T=m.data,V=n(T)?Re:T,w=m.error,Z=l.useRef(V),P=ce?n(T)?Z.current:T:V,$=(()=>ge&&!n(w)?!1:X&&!n(A)?A:o().isPaused()?!1:F?n(V)?!1:L:n(V)||L)(),ee=!!(e&&D&&X&&$),Ee=n(m.isValidating)?ee:m.isValidating,he=n(m.isLoading)?ee:m.isLoading,I=l.useCallback(async t=>{const a=M.current;if(!e||!a||b.current||o().isPaused())return!1;let i,r,d=!0;const p=t||{},s=!E[e]||!p.dedupe,u=()=>oe?!b.current&&e===_.current&&y.current:e===_.current,R={isValidating:!1,isLoading:!1},te=()=>{q(R)},re=()=>{const c=E[e];c&&c[1]===r&&delete E[e]},ae={isValidating:!0};n(h().data)&&(ae.isLoading=!0);try{if(s&&(q(ae),f.loadingTimeout&&n(h().data)&&setTimeout(()=>{d&&u()&&o().onLoadingSlow(e,f)},f.loadingTimeout),E[e]=[a(J),Ce()]),[i,r]=E[e],i=await i,s&&setTimeout(re,f.dedupingInterval),!E[e]||E[e][1]!==r)return s&&u()&&o().onDiscarded(e),!1;R.error=ne;const c=le[e];if(!n(c)&&(r<=c[0]||r<=c[1]||c[1]===0))return te(),s&&u()&&o().onDiscarded(e),!1;const g=h().data;R.data=N(g,i)?g:i,s&&u()&&o().onSuccess(i,e,f)}catch(c){re();const g=o(),{shouldRetryOnError:W}=g;g.isPaused()||(R.error=c,s&&u()&&(g.onError(c,e,g),(W===!0||se(W)&&W(c))&&x()&&g.onErrorRetry(c,e,g,me=>{const H=O[e];H&&H[0]&&H[0](v.ERROR_REVALIDATE_EVENT,me)},{retryCount:(p.retryCount||0)+1,dedupe:!0})))}return d=!1,te(),!0},[e,S]),Se=l.useCallback((...t)=>Ie(S,_.current,...t),[]);if(j(()=>{M.current=D,U.current=f,n(T)||(Z.current=T)}),j(()=>{if(!e)return;const t=I.bind(ne,z);let a=0;const r=ve(e,O,(d,p={})=>{if(d==v.FOCUS_EVENT){const s=Date.now();o().revalidateOnFocus&&s>a&&x()&&(a=s+o().focusThrottleInterval,t())}else if(d==v.RECONNECT_EVENT)o().revalidateOnReconnect&&x()&&t();else{if(d==v.MUTATE_EVENT)return I();if(d==v.ERROR_REVALIDATE_EVENT)return I(p)}});return b.current=!1,_.current=e,y.current=!0,q({_k:J}),$&&(n(V)||ie?t():Ae(t)),()=>{b.current=!0,r()}},[e]),j(()=>{let t;function a(){const r=se(k)?k(h().data):k;r&&t!==-1&&(t=setTimeout(i,r))}function i(){!h().error&&(Y||o().isVisible())&&(B||o().isOnline())?I(z).then(a):a()}return a(),()=>{t&&(clearTimeout(t),t=-1)}},[k,Y,B,e]),l.useDebugValue(P),F&&n(V)&&e)throw!oe&&ie?new Error("Fallback data is required when using suspense in SSR."):(M.current=D,U.current=f,b.current=!1,n(w)?I(z):w);return{mutate:Se,get data(){return C.data=!0,P},get error(){return C.error=!0,w},get isValidating(){return C.isValidating=!0,Ee},get isLoading(){return C.isLoading=!0,he}}},we=Ve(ke);export{we as u};