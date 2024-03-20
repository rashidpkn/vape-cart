import{bI as T,ao as e,aM as I,aO as E,aP as b,aR as o,aH as g,bX as f,bc as v,bJ as L,be as O,D as r,bY as B,b3 as M,aQ as d,aV as j,ar as P,a_ as A,b0 as G,aE as $,b1 as F,aT as U,bs as W,bf as Y}from"./index-feebbf1a.js";import"./custom-breadcrumbs-d6d81004.js";import{P as _,a as H,b as N,c as V,d as J}from"./product-details-description-46123df6.js";import"./axios-038cfe9e.js";import"./table-pagination-custom-80f9e74a.js";import"./confirm-dialog-b9e141ff.js";import{a as Q}from"./_product-356a4fe5.js";import{u as X}from"./use-params-eb8f90be.js";import{u as q}from"./use-checkout-aa0d78b9.js";import"./form-provider-9a490e1c.js";import"./format-number-eb8fa3ee.js";import"./image-cce2e09f.js";import"./transition-bee6630b.js";import"./Checkbox-fc4debaa.js";import"./Switch-436da68c.js";import"./yup-db689d1d.js";import"./CircularProgress-b5d22d6d.js";import"./color-picker-fa339b93.js";import"./Rating-7d07ff5b.js";import"./DialogTitle-c5f67059.js";import"./DialogContent-8fffd9a5.js";import"./lightbox-eefa6ae3.js";import"./use-carousel-45169d04.js";function z({publish:c,backLink:u,editLink:s,liveLink:p,publishOptions:x,onChangePublish:h,sx:i,...m}){const n=T();return e.jsxs(e.Fragment,{children:[e.jsxs(I,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...i},...m,children:[e.jsx(E,{component:b,href:u,startIcon:e.jsx(o,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),e.jsx(g,{sx:{flexGrow:1}}),c==="published"&&e.jsx(f,{title:"Go Live",children:e.jsx(v,{component:b,href:p,children:e.jsx(o,{icon:"eva:external-link-fill"})})}),e.jsx(f,{title:"Edit",children:e.jsx(v,{component:b,href:s,children:e.jsx(o,{icon:"solar:pen-bold"})})})]}),e.jsx(L,{open:n.open,onClose:n.onClose,arrow:"top-right",sx:{width:140},children:x.map(a=>e.jsxs(O,{selected:a.value===c,onClick:()=>{n.onClose(),h(a.value)},children:[a.value==="published"&&e.jsx(o,{icon:"eva:cloud-upload-fill"}),a.value==="draft"&&e.jsx(o,{icon:"solar:file-text-bold"}),a.label]},a.value))})]})}const K=[{title:"100% Original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 Day Replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year Warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function Z(){const c=X(),{id:u}=c,[s,p]=r.useState({}),x=B();r.useEffect(()=>{(async()=>{try{const{data:l,status:ee}=await W.get(`products/${u}`,{params:{count:1}});p(l)}catch(l){alert(l.response.data.message),x(d.dashboard.product.root)}})()},[]);const h=M(),[i,m]=r.useState("description"),[n,a]=r.useState(""),{checkout:k,onAddCart:C,onGotoStep:w}=q();r.useEffect(()=>{s&&a(s==null?void 0:s.publish)},[s]);const y=r.useCallback(t=>{a(t)},[]),D=r.useCallback((t,l)=>{m(l)},[]),S=e.jsx(J,{}),R=s&&e.jsxs(e.Fragment,{children:[e.jsx(z,{backLink:d.dashboard.product.root,editLink:d.dashboard.product.edit(`${s==null?void 0:s.id}`),liveLink:d.product.details(`${s==null?void 0:s.id}`),publish:n||"",onChangePublish:y,publishOptions:Q}),e.jsxs(j,{container:!0,spacing:{xs:3,md:5,lg:8},children:[e.jsx(j,{xs:12,md:6,lg:7,children:s&&e.jsx(_,{product:s})}),e.jsx(j,{xs:12,md:6,lg:5,children:s&&e.jsx(H,{disabledActions:!0,product:s,cart:k.cart,onAddCart:C,onGotoStep:w})})]}),e.jsx(g,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:K.map(t=>e.jsxs(g,{sx:{textAlign:"center",px:5},children:[e.jsx(o,{icon:t.icon,width:32,sx:{color:"primary.main"}}),e.jsx(P,{variant:"subtitle1",sx:{mb:1,mt:2},children:t.title}),e.jsx(P,{variant:"body2",sx:{color:"text.secondary"},children:t.description})]},t.title))}),e.jsxs(A,{children:[e.jsx(G,{value:i,onChange:D,sx:{px:3,boxShadow:t=>`inset 0 -2px 0 0 ${$(t.palette.grey[500],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:"Reviews (0)"}].map(t=>e.jsx(F,{value:t.value,label:t.label},t.value))}),i==="description"&&e.jsx(N,{description:s==null?void 0:s.content}),i==="reviews"&&e.jsx(V,{ratings:s.ratings,reviews:s.reviews,totalRatings:s.totalRatings,totalReviews:s.totalReviews})]})]});return e.jsxs(U,{maxWidth:h.themeStretch?!1:"lg",children:[!s&&S,s&&R]})}function we(){return e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:e.jsx("title",{children:" Dashboard: Product Details"})}),e.jsx(Z,{})]})}export{we as default};