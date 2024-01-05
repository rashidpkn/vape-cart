import{c0 as T,af as e,au as I,ax as L,ay as b,aA as o,ao as f,cd as g,b2 as v,c1 as E,b4 as O,bu as A,D as r,ce as B,aO as M,az as d,aE as j,ac as C,aJ as G,aL as $,am as F,aM as U,aC as W,b5 as N}from"./index-bb505ec4.js";import{a as Y}from"./api-3aac980b.js";import{d as _,e as z,f as H,g as J,h as V}from"./product-details-description-e91edbf7.js";import"./axios-9e9c613c.js";import"./table-pagination-custom-4c8c08f8.js";import"./confirm-dialog-45f1a66e.js";import{f as q}from"./_product-b2bf45f1.js";import{u as K}from"./use-checkout-03e3cd73.js";import"./axios-e0d8a382.js";import"./color-picker-8bcc7cd4.js";import"./Fab-ae298e8c.js";import"./Slider-440d43a7.js";import"./lightbox-3b1c01aa.js";import"./carousel-arrow-index-b8f06b7f.js";function Q({publish:c,backLink:u,editLink:s,liveLink:x,publishOptions:h,onChangePublish:p,sx:i,...m}){const n=T();return e.jsxs(e.Fragment,{children:[e.jsxs(I,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...i},...m,children:[e.jsx(L,{component:b,href:u,startIcon:e.jsx(o,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),e.jsx(f,{sx:{flexGrow:1}}),c==="published"&&e.jsx(g,{title:"Go Live",children:e.jsx(v,{component:b,href:x,children:e.jsx(o,{icon:"eva:external-link-fill"})})}),e.jsx(g,{title:"Edit",children:e.jsx(v,{component:b,href:s,children:e.jsx(o,{icon:"solar:pen-bold"})})})]}),e.jsx(E,{open:n.open,onClose:n.onClose,arrow:"top-right",sx:{width:140},children:h.map(t=>e.jsxs(O,{selected:t.value===c,onClick:()=>{n.onClose(),p(t.value)},children:[t.value==="published"&&e.jsx(o,{icon:"eva:cloud-upload-fill"}),t.value==="draft"&&e.jsx(o,{icon:"solar:file-text-bold"}),t.label]},t.value))})]})}const X=[{title:"100% Original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 Day Replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year Warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function Z(){const c=A(),{id:u}=c,[s,x]=r.useState({}),h=B();r.useEffect(()=>{(async()=>{try{const{data:l,status:ee}=await Y.get(`products/${u}`);x(l)}catch(l){alert(l.response.data.message),h(d.dashboard.product.root)}})()},[]);const p=M(),[i,m]=r.useState("description"),[n,t]=r.useState(""),{checkout:P,onAddCart:k,onGotoStep:w}=K();r.useEffect(()=>{s&&t(s==null?void 0:s.publish)},[s]);const y=r.useCallback(a=>{t(a)},[]),D=r.useCallback((a,l)=>{m(l)},[]),S=e.jsx(V,{}),R=s&&e.jsxs(e.Fragment,{children:[e.jsx(Q,{backLink:d.dashboard.product.root,editLink:d.dashboard.product.edit(`${s==null?void 0:s.id}`),liveLink:d.product.details(`${s==null?void 0:s.id}`),publish:n||"",onChangePublish:y,publishOptions:q}),e.jsxs(j,{container:!0,spacing:{xs:3,md:5,lg:8},children:[e.jsx(j,{xs:12,md:6,lg:7,children:s&&e.jsx(_,{product:s})}),e.jsx(j,{xs:12,md:6,lg:5,children:s&&e.jsx(z,{disabledActions:!0,product:s,cart:P.cart,onAddCart:k,onGotoStep:w})})]}),e.jsx(f,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:X.map(a=>e.jsxs(f,{sx:{textAlign:"center",px:5},children:[e.jsx(o,{icon:a.icon,width:32,sx:{color:"primary.main"}}),e.jsx(C,{variant:"subtitle1",sx:{mb:1,mt:2},children:a.title}),e.jsx(C,{variant:"body2",sx:{color:"text.secondary"},children:a.description})]},a.title))}),e.jsxs(G,{children:[e.jsx($,{value:i,onChange:D,sx:{px:3,boxShadow:a=>`inset 0 -2px 0 0 ${F(a.palette.grey[500],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:"Reviews (0)"}].map(a=>e.jsx(U,{value:a.value,label:a.label},a.value))}),i==="description"&&e.jsx(H,{description:s==null?void 0:s.content}),i==="reviews"&&e.jsx(J,{ratings:s.ratings,reviews:s.reviews,totalRatings:s.totalRatings,totalReviews:s.totalReviews})]})]});return e.jsxs(W,{maxWidth:p.themeStretch?!1:"lg",children:[!s&&S,s&&R]})}function me(){return e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsx("title",{children:" Dashboard: Product Details"})}),e.jsx(Z,{})]})}export{me as default};
