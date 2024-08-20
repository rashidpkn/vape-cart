import{r as y,R as T,o as H,q as xe,l as Te,a as Ie,k as Ce,j as l,W as _e,I as je,n as ue,B as ge,M as Le,d as te,s as pe,F as Ne,t as we,v as $e,w as ke}from"./index-e20cc903.js";const G=e=>typeof e=="number"&&!isNaN(e),X=e=>typeof e=="string",$=e=>typeof e=="function",ae=e=>X(e)||$(e)?e:null,ce=e=>y.isValidElement(e)||X(e)||$(e)||G(e);function Se(e,t,s){s===void 0&&(s=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${s}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,s)})})}function re(e){let{enter:t,exit:s,appendPosition:r=!1,collapse:o=!0,collapseDuration:d=300}=e;return function(n){let{children:h,position:f,preventExitTransition:g,done:c,nodeRef:v,isIn:a,playToast:j}=n;const b=r?`${t}--${f}`:t,p=r?`${s}--${f}`:s,_=y.useRef(0);return y.useLayoutEffect(()=>{const E=v.current,m=b.split(" "),i=x=>{x.target===v.current&&(j(),E.removeEventListener("animationend",i),E.removeEventListener("animationcancel",i),_.current===0&&x.type!=="animationcancel"&&E.classList.remove(...m))};E.classList.add(...m),E.addEventListener("animationend",i),E.addEventListener("animationcancel",i)},[]),y.useEffect(()=>{const E=v.current,m=()=>{E.removeEventListener("animationend",m),o?Se(E,c,d):c()};a||(g?m():(_.current=1,E.className+=` ${p}`,E.addEventListener("animationend",m)))},[a]),T.createElement(T.Fragment,null,h)}}function me(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const N=new Map;let K=[];const de=new Set,Pe=e=>de.forEach(t=>t(e)),he=()=>N.size>0;function ye(e,t){var s;if(t)return!((s=N.get(t))==null||!s.isToastActive(e));let r=!1;return N.forEach(o=>{o.isToastActive(e)&&(r=!0)}),r}function ve(e,t){ce(e)&&(he()||K.push({content:e,options:t}),N.forEach(s=>{s.buildToast(e,t)}))}function fe(e,t){N.forEach(s=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===s.id&&s.toggle(e,t==null?void 0:t.id):s.toggle(e,t==null?void 0:t.id)})}function Ae(e){const{subscribe:t,getSnapshot:s,setProps:r}=y.useRef(function(d){const n=d.containerId||1;return{subscribe(h){const f=function(c,v,a){let j=1,b=0,p=[],_=[],E=[],m=v;const i=new Map,x=new Set,P=()=>{E=Array.from(i.values()),x.forEach(u=>u())},M=u=>{_=u==null?[]:_.filter(C=>C!==u),P()},L=u=>{const{toastId:C,onOpen:w,updateId:R,children:B}=u.props,Y=R==null;u.staleId&&i.delete(u.staleId),i.set(C,u),_=[..._,u.props.toastId].filter(z=>z!==u.staleId),P(),a(me(u,Y?"added":"updated")),Y&&$(w)&&w(y.isValidElement(B)&&B.props)};return{id:c,props:m,observe:u=>(x.add(u),()=>x.delete(u)),toggle:(u,C)=>{i.forEach(w=>{C!=null&&C!==w.props.toastId||$(w.toggle)&&w.toggle(u)})},removeToast:M,toasts:i,clearQueue:()=>{b-=p.length,p=[]},buildToast:(u,C)=>{if((A=>{let{containerId:k,toastId:S,updateId:D}=A;const q=k?k!==c:c!==1,J=i.has(S)&&D==null;return q||J})(C))return;const{toastId:w,updateId:R,data:B,staleId:Y,delay:z}=C,Q=()=>{M(w)},ee=R==null;ee&&b++;const O={...m,style:m.toastStyle,key:j++,...Object.fromEntries(Object.entries(C).filter(A=>{let[k,S]=A;return S!=null})),toastId:w,updateId:R,data:B,closeToast:Q,isIn:!1,className:ae(C.className||m.toastClassName),bodyClassName:ae(C.bodyClassName||m.bodyClassName),progressClassName:ae(C.progressClassName||m.progressClassName),autoClose:!C.isLoading&&(F=C.autoClose,U=m.autoClose,F===!1||G(F)&&F>0?F:U),deleteToast(){const A=i.get(w),{onClose:k,children:S}=A.props;$(k)&&k(y.isValidElement(S)&&S.props),a(me(A,"removed")),i.delete(w),b--,b<0&&(b=0),p.length>0?L(p.shift()):P()}};var F,U;O.closeButton=m.closeButton,C.closeButton===!1||ce(C.closeButton)?O.closeButton=C.closeButton:C.closeButton===!0&&(O.closeButton=!ce(m.closeButton)||m.closeButton);let W=u;y.isValidElement(u)&&!X(u.type)?W=y.cloneElement(u,{closeToast:Q,toastProps:O,data:B}):$(u)&&(W=u({closeToast:Q,toastProps:O,data:B}));const V={content:W,props:O,staleId:Y};m.limit&&m.limit>0&&b>m.limit&&ee?p.push(V):G(z)?setTimeout(()=>{L(V)},z):L(V)},setProps(u){m=u},setToggle:(u,C)=>{i.get(u).toggle=C},isToastActive:u=>_.some(C=>C===u),getSnapshot:()=>m.newestOnTop?E.reverse():E}}(n,d,Pe);N.set(n,f);const g=f.observe(h);return K.forEach(c=>ve(c.content,c.options)),K=[],()=>{g(),N.delete(n)}},setProps(h){var f;(f=N.get(n))==null||f.setProps(h)},getSnapshot(){var h;return(h=N.get(n))==null?void 0:h.getSnapshot()}}}(e)).current;r(e);const o=y.useSyncExternalStore(t,s,s);return{getToastToRender:function(d){if(!o)return[];const n=new Map;return o.forEach(h=>{const{position:f}=h.props;n.has(f)||n.set(f,[]),n.get(f).push(h)}),Array.from(n,h=>d(h[0],h[1]))},isToastActive:ye,count:o==null?void 0:o.length}}function De(e){const[t,s]=y.useState(!1),[r,o]=y.useState(!1),d=y.useRef(null),n=y.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:h,pauseOnHover:f,closeToast:g,onClick:c,closeOnClick:v}=e;var a,j;function b(){s(!0)}function p(){s(!1)}function _(i){const x=d.current;n.canDrag&&x&&(n.didMove=!0,t&&p(),n.delta=e.draggableDirection==="x"?i.clientX-n.start:i.clientY-n.start,n.start!==i.clientX&&(n.canCloseOnClick=!1),x.style.transform=`translate3d(${e.draggableDirection==="x"?`${n.delta}px, var(--y)`:`0, calc(${n.delta}px + var(--y))`},0)`,x.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function E(){document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",E);const i=d.current;if(n.canDrag&&n.didMove&&i){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return o(!0),e.closeToast(),void e.collapseAll();i.style.transition="transform 0.2s, opacity 0.2s",i.style.removeProperty("transform"),i.style.removeProperty("opacity")}}(j=N.get((a={id:e.toastId,containerId:e.containerId,fn:s}).containerId||1))==null||j.setToggle(a.id,a.fn),y.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||p(),window.addEventListener("focus",b),window.addEventListener("blur",p),()=>{window.removeEventListener("focus",b),window.removeEventListener("blur",p)}},[e.pauseOnFocusLoss]);const m={onPointerDown:function(i){if(e.draggable===!0||e.draggable===i.pointerType){n.didMove=!1,document.addEventListener("pointermove",_),document.addEventListener("pointerup",E);const x=d.current;n.canCloseOnClick=!0,n.canDrag=!0,x.style.transition="none",e.draggableDirection==="x"?(n.start=i.clientX,n.removalDistance=x.offsetWidth*(e.draggablePercent/100)):(n.start=i.clientY,n.removalDistance=x.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(i){const{top:x,bottom:P,left:M,right:L}=d.current.getBoundingClientRect();i.nativeEvent.type!=="touchend"&&e.pauseOnHover&&i.clientX>=M&&i.clientX<=L&&i.clientY>=x&&i.clientY<=P?p():b()}};return h&&f&&(m.onMouseEnter=p,e.stacked||(m.onMouseLeave=b)),v&&(m.onClick=i=>{c&&c(i),n.canCloseOnClick&&g()}),{playToast:b,pauseToast:p,isRunning:t,preventExitTransition:r,toastRef:d,eventHandlers:m}}function Me(e){let{delay:t,isRunning:s,closeToast:r,type:o="default",hide:d,className:n,style:h,controlledProgress:f,progress:g,rtl:c,isIn:v,theme:a}=e;const j=d||f&&g===0,b={...h,animationDuration:`${t}ms`,animationPlayState:s?"running":"paused"};f&&(b.transform=`scaleX(${g})`);const p=H("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${a}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":c}),_=$(n)?n({rtl:c,type:o,defaultClassName:p}):H(p,n),E={[f&&g>=1?"onTransitionEnd":"onAnimationEnd"]:f&&g<1?null:()=>{v&&r()}};return T.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":j},T.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${a} Toastify__progress-bar--${o}`}),T.createElement("div",{role:"progressbar","aria-hidden":j?"true":"false","aria-label":"notification timer",className:_,style:b,...E}))}let Re=1;const Ee=()=>""+Re++;function Oe(e){return e&&(X(e.toastId)||G(e.toastId))?e.toastId:Ee()}function Z(e,t){return ve(e,t),t.toastId}function oe(e,t){return{...t,type:t&&t.type||e,toastId:Oe(t)}}function se(e){return(t,s)=>Z(t,oe(e,s))}function I(e,t){return Z(e,oe("default",t))}I.loading=(e,t)=>Z(e,oe("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),I.promise=function(e,t,s){let r,{pending:o,error:d,success:n}=t;o&&(r=X(o)?I.loading(o,s):I.loading(o.render,{...s,...o}));const h={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},f=(c,v,a)=>{if(v==null)return void I.dismiss(r);const j={type:c,...h,...s,data:a},b=X(v)?{render:v}:v;return r?I.update(r,{...j,...b}):I(b.render,{...j,...b}),a},g=$(e)?e():e;return g.then(c=>f("success",n,c)).catch(c=>f("error",d,c)),g},I.success=se("success"),I.info=se("info"),I.error=se("error"),I.warning=se("warning"),I.warn=I.warning,I.dark=(e,t)=>Z(e,oe("default",{theme:"dark",...t})),I.dismiss=function(e){(function(t){var s;if(he()){if(t==null||X(s=t)||G(s))N.forEach(r=>{r.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const r=N.get(t.containerId);r?r.removeToast(t.id):N.forEach(o=>{o.removeToast(t.id)})}}else K=K.filter(r=>t!=null&&r.options.toastId!==t)})(e)},I.clearWaitingQueue=function(e){e===void 0&&(e={}),N.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},I.isActive=ye,I.update=function(e,t){t===void 0&&(t={});const s=((r,o)=>{var d;let{containerId:n}=o;return(d=N.get(n||1))==null?void 0:d.toasts.get(r)})(e,t);if(s){const{props:r,content:o}=s,d={delay:100,...r,...t,toastId:t.toastId||e,updateId:Ee()};d.toastId!==e&&(d.staleId=e);const n=d.render||o;delete d.render,Z(n,d)}},I.done=e=>{I.update(e,{progress:1})},I.onChange=function(e){return de.add(e),()=>{de.delete(e)}},I.play=e=>fe(!0,e),I.pause=e=>fe(!1,e);const Be=typeof window<"u"?y.useLayoutEffect:y.useEffect,ne=e=>{let{theme:t,type:s,isLoading:r,...o}=e;return T.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${s})`,...o})},le={info:function(e){return T.createElement(ne,{...e},T.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return T.createElement(ne,{...e},T.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return T.createElement(ne,{...e},T.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return T.createElement(ne,{...e},T.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return T.createElement("div",{className:"Toastify__spinner"})}},ze=e=>{const{isRunning:t,preventExitTransition:s,toastRef:r,eventHandlers:o,playToast:d}=De(e),{closeButton:n,children:h,autoClose:f,onClick:g,type:c,hideProgressBar:v,closeToast:a,transition:j,position:b,className:p,style:_,bodyClassName:E,bodyStyle:m,progressClassName:i,progressStyle:x,updateId:P,role:M,progress:L,rtl:u,toastId:C,deleteToast:w,isIn:R,isLoading:B,closeOnClick:Y,theme:z}=e,Q=H("Toastify__toast",`Toastify__toast-theme--${z}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":u},{"Toastify__toast--close-on-click":Y}),ee=$(p)?p({rtl:u,position:b,type:c,defaultClassName:Q}):H(Q,p),O=function(V){let{theme:A,type:k,isLoading:S,icon:D}=V,q=null;const J={theme:A,type:k};return D===!1||($(D)?q=D({...J,isLoading:S}):y.isValidElement(D)?q=y.cloneElement(D,J):S?q=le.spinner():(be=>be in le)(k)&&(q=le[k](J))),q}(e),F=!!L||!f,U={closeToast:a,type:c,theme:z};let W=null;return n===!1||(W=$(n)?n(U):y.isValidElement(n)?y.cloneElement(n,U):function(V){let{closeToast:A,theme:k,ariaLabel:S="close"}=V;return T.createElement("button",{className:`Toastify__close-button Toastify__close-button--${k}`,type:"button",onClick:D=>{D.stopPropagation(),A(D)},"aria-label":S},T.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},T.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(U)),T.createElement(j,{isIn:R,done:w,position:b,preventExitTransition:s,nodeRef:r,playToast:d},T.createElement("div",{id:C,onClick:g,"data-in":R,className:ee,...o,style:_,ref:r},T.createElement("div",{...R&&{role:M},className:$(E)?E({type:c}):H("Toastify__toast-body",E),style:m},O!=null&&T.createElement("div",{className:H("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!B})},O),T.createElement("div",null,h)),W,T.createElement(Me,{...P&&!F?{key:`pb-${P}`}:{},rtl:u,theme:z,delay:f,isRunning:t,isIn:R,closeToast:a,hide:v,type:c,style:x,className:i,controlledProgress:F,progress:L||0})))},ie=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Fe=re(ie("bounce",!0));re(ie("slide",!0));re(ie("zoom"));re(ie("flip"));const He={position:"top-right",transition:Fe,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Ve(e){let t={...He,...e};const s=e.stacked,[r,o]=y.useState(!0),d=y.useRef(null),{getToastToRender:n,isToastActive:h,count:f}=Ae(t),{className:g,style:c,rtl:v,containerId:a}=t;function j(p){const _=H("Toastify__toast-container",`Toastify__toast-container--${p}`,{"Toastify__toast-container--rtl":v});return $(g)?g({position:p,rtl:v,defaultClassName:_}):H(_,ae(g))}function b(){s&&(o(!0),I.play())}return Be(()=>{if(s){var p;const _=d.current.querySelectorAll('[data-in="true"]'),E=12,m=(p=t.position)==null?void 0:p.includes("top");let i=0,x=0;Array.from(_).reverse().forEach((P,M)=>{const L=P;L.classList.add("Toastify__toast--stacked"),M>0&&(L.dataset.collapsed=`${r}`),L.dataset.pos||(L.dataset.pos=m?"top":"bot");const u=i*(r?.2:1)+(r?0:E*M);L.style.setProperty("--y",`${m?u:-1*u}px`),L.style.setProperty("--g",`${E}`),L.style.setProperty("--s",""+(1-(r?x:0))),i+=L.offsetHeight,x+=.025})}},[r,f,s]),T.createElement("div",{ref:d,className:"Toastify",id:a,onMouseEnter:()=>{s&&(o(!1),I.pause())},onMouseLeave:b},n((p,_)=>{const E=_.length?{...c}:{...c,pointerEvents:"none"};return T.createElement("div",{className:j(p),style:E,key:`container-${p}`},_.map(m=>{let{content:i,props:x}=m;return T.createElement(ze,{...x,stacked:s,collapseAll:b,isIn:h(x.toastId,x.containerId),style:x.style,key:`toast-${x.key}`},i)}))}))}function Ye(){const e=new URLSearchParams(xe().search).get("category"),{onAddCart:t}=Te();Ie();const[s,r]=y.useState([]),[o,d]=y.useState(!1),n=y.useCallback(async()=>{try{const{data:a}=await Ce.get("/products",{params:{perPage:2e3,category:e,status:"Published"}});r(a.products),d(!0)}catch{}},[e]),h=async a=>{try{t({id:a.id,name:a.name,price:a.salePrice||a.regularPrice,images:a.images,subTotal:a.salePrice,userId:a.userId,quantity:1}),I.success(`${a.name} is now in your cart at a price of AED${a.salePrice}.`)}catch(j){console.log(j)}};y.useEffect(()=>{n()},[e]);const[f,g]=y.useState(!1),[c,v]=y.useState({});return l.jsxs(l.Fragment,{children:[l.jsx(Ve,{}),l.jsx(_e,{children:l.jsx("title",{children:"Shop Page "})}),l.jsxs("main",{className:"search",children:[l.jsx("h1",{children:"Shop"}),!!s.length&&l.jsx("div",{className:"products",children:s.map(a=>l.jsxs("div",{className:"product",children:[l.jsxs("div",{className:"img",children:[l.jsx("img",{src:a.images[0],alt:""}),l.jsx("div",{className:"cart",onClick:()=>{v(a),a.type==="Simple"?h(a):g(!0)},children:l.jsx(je,{icon:"eva:shopping-cart-outline",className:"cart-icon"})})]}),l.jsx(ue,{to:`/product/${a.id}`,children:l.jsx("p",{className:"name",children:a.name})}),l.jsxs("div",{className:"info",children:[l.jsx("p",{className:"category",children:a.category}),a.type==="Simple"&&l.jsxs("p",{children:[l.jsxs("del",{children:[" AED $",a.regularPrice]})," AED $",a.salePrice]})]})]},a.id))}),!s.length&&o&&l.jsxs("div",{className:"no-product",children:[l.jsxs("h2",{children:["Unfortunately, we couldn't find any products with ",name," name."]}),l.jsx(ue,{to:"/",children:l.jsx(ge,{variant:"contained",color:"success",children:"Home Page"})})]})]}),l.jsx(qe,{openVariations:f,setOpenVariations:g,selectedProduct:c,setSelectedProduct:v,_AddCart:h})]})}const qe=({openVariations:e,setOpenVariations:t,selectedProduct:s={images:[]},setSelectedProduct:r,_AddCart:o})=>{var h,f;const[d,n]=y.useState("");return l.jsx(Le,{open:e,onClose:g=>t(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:l.jsx(te,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:600,width:"100%",bgcolor:"background.paper",boxShadow:24,p:4,borderRadius:"8px",border:"none"},children:l.jsxs(te,{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",children:[l.jsx("img",{src:(h=s==null?void 0:s.images)==null?void 0:h[0],height:400,alt:"",style:{height:"400px",borderRadius:"8px"}}),l.jsxs(te,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},width:400,children:[l.jsx(pe,{id:"modal-modal-title",variant:"h6",component:"h2",textAlign:"center",mt:3,children:s.name}),l.jsx(pe,{id:"modal-modal-title",variant:"h6",component:"h2",textAlign:"center",mt:3,children:!!d&&l.jsxs(l.Fragment,{children:[l.jsxs("del",{children:[" AED ",s.regularPrice]})," AED ",s.salePrice]})})]}),!!d&&l.jsx(te,{sx:{display:"flex",justifyContent:"flex-end"},width:400,children:l.jsxs("p",{style:{fontSize:"12px"},children:["Available : ",s.quantity]})}),l.jsxs(Ne,{sx:{width:"400px",mt:3},children:[l.jsx(we,{id:"variations",children:"Select Variations"}),l.jsx($e,{labelId:"variations",label:"Select Variations",value:d,onChange:g=>{console.log(g.target.value),n(g.target.value);const{track:c,quantity:v,regularPrice:a,salePrice:j,image:b}=s.variations.find(p=>JSON.stringify(p.attributes)===JSON.stringify(g.target.value));r(p=>({...p,track:c,quantity:v,regularPrice:a,salePrice:j}))},children:(f=s.variations)==null?void 0:f.map((g,c)=>l.jsxs(ke,{value:g.attributes,children:[Object.keys(g.attributes).map(v=>`${v.replace(/([A-Z])/," $1").replace(/^./,a=>a.toUpperCase())} : ${g.attributes[v]}`).join(", ")," "]},c))})]}),l.jsx(ge,{variant:"contained",color:"warning",sx:{width:"400px",mt:3},size:"large",onClick:()=>{const g=`${s.name}-${Object.keys(d).map(v=>d[v]).join("-")}`,c={...s,name:g};console.log(c),o(c),t(!1)},children:"Add to Cart"})]})})})};export{Ye as default};
