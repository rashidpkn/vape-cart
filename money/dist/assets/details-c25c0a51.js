import{c5 as T,ae as e,aw as I,az as L,aA as b,aC as o,aq as g,ci as v,b4 as f,c6 as B,b6 as E,bx as O,D as r,cj as A,aQ as G,aB as d,aG as j,ac as w,aL as M,aN as $,am as F,aO as N,aE as U,bw as W,b7 as Y}from"./index-710a0060.js";import{d as _,e as q,g as z,h as H}from"./product-details-description-ff256645.js";import"./axios-bb9e088f.js";import"./confirm-dialog-3e7f03d7.js";import{f as Q}from"./_product-590f1ea5.js";import{u as V}from"./use-checkout-d420e419.js";import"./color-picker-cc33d9b5.js";import"./Fab-9569d8e6.js";import"./Slider-dbd5ed6e.js";import"./DialogTitle-ab7b3afd.js";import"./DialogContent-557f4646.js";import"./lightbox-8ade5925.js";function J({publish:l,backLink:u,editLink:s,liveLink:h,publishOptions:x,onChangePublish:p,sx:c,...m}){const i=T();return e.jsxs(e.Fragment,{children:[e.jsxs(I,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...c},...m,children:[e.jsx(L,{component:b,href:u,startIcon:e.jsx(o,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),e.jsx(g,{sx:{flexGrow:1}}),l==="published"&&e.jsx(v,{title:"Go Live",children:e.jsx(f,{component:b,href:h,children:e.jsx(o,{icon:"eva:external-link-fill"})})}),e.jsx(v,{title:"Edit",children:e.jsx(f,{component:b,href:s,children:e.jsx(o,{icon:"solar:pen-bold"})})})]}),e.jsx(B,{open:i.open,onClose:i.onClose,arrow:"top-right",sx:{width:140},children:x.map(t=>e.jsxs(E,{selected:t.value===l,onClick:()=>{i.onClose(),p(t.value)},children:[t.value==="published"&&e.jsx(o,{icon:"eva:cloud-upload-fill"}),t.value==="draft"&&e.jsx(o,{icon:"solar:file-text-bold"}),t.label]},t.value))})]})}const K=[{title:"100% Original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 Day Replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year Warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function X(){const l=O(),{id:u}=l,[s,h]=r.useState({}),x=A();r.useEffect(()=>{(async()=>{try{const{data:n}=await W.get(`products/${u}`);h(n)}catch(n){alert(n.response.data.message),x(d.dashboard.product.root)}})()},[]);const p=G(),[c,m]=r.useState("reviews"),[i,t]=r.useState(""),{checkout:C,onAddCart:k,onGotoStep:P}=V();r.useEffect(()=>{s&&t(s==null?void 0:s.publish)},[s]);const y=r.useCallback(a=>{t(a)},[]),S=r.useCallback((a,n)=>{m(n)},[]),D=e.jsx(H,{}),R=s&&e.jsxs(e.Fragment,{children:[e.jsx(J,{backLink:d.dashboard.product.root,editLink:d.dashboard.product.edit(`${s==null?void 0:s.id}`),liveLink:d.product.details(`${s==null?void 0:s.id}`),publish:i||"",onChangePublish:y,publishOptions:Q}),e.jsxs(j,{container:!0,spacing:{xs:3,md:5,lg:8},children:[e.jsx(j,{xs:12,md:6,lg:7,children:s&&e.jsx(_,{product:s})}),e.jsx(j,{xs:12,md:6,lg:5,children:s&&e.jsx(q,{disabledActions:!0,product:s,cart:C.cart,onAddCart:k,onGotoStep:P})})]}),e.jsx(g,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:K.map(a=>e.jsxs(g,{sx:{textAlign:"center",px:5},children:[e.jsx(o,{icon:a.icon,width:32,sx:{color:"primary.main"}}),e.jsx(w,{variant:"subtitle1",sx:{mb:1,mt:2},children:a.title}),e.jsx(w,{variant:"body2",sx:{color:"text.secondary"},children:a.description})]},a.title))}),e.jsxs(M,{children:[e.jsx($,{value:c,onChange:S,sx:{px:3,boxShadow:a=>`inset 0 -2px 0 0 ${F(a.palette.grey[500],.08)}`},children:[{value:"reviews",label:"Reviews (0)"}].map(a=>e.jsx(N,{value:a.value,label:a.label},a.value))}),c==="reviews"&&e.jsx(z,{ratings:s.ratings,reviews:s.reviews,totalRatings:s.totalRatings,totalReviews:s.totalReviews})]})]});return e.jsxs(U,{maxWidth:p.themeStretch?!1:"lg",children:[!s&&D,s&&R]})}function ue(){return e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:e.jsx("title",{children:" Dashboard: Product Details"})}),e.jsx(X,{})]})}export{ue as default};
