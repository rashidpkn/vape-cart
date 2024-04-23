import{aV as y,F as r,j as t,aG as w,b3 as m,ay as i,B as p,an as C,T as u,af as P,b4 as S,ad as k,b5 as D,aW as R,aB as T,W as I}from"./index-1fca97c3.js";import{P as B,a as W,b as A,c as E,C as F}from"./product-details-description-bb30298d.js";import"./axios-622c6aca.js";import"./confirm-dialog-5765cd42.js";import{u as G}from"./use-params-990d737e.js";import{u as M}from"./use-checkout-0d006a9c.js";import"./form-provider-6dfbb8b0.js";import"./Switch-ff24d672.js";import"./transition-bee6630b.js";import"./image-cb454ea8.js";import"./yup-a5c831e6.js";import"./CircularProgress-7ff08f69.js";import"./_product-bb64f0dd.js";import"./color-picker-47e23e5b.js";import"./Rating-8a1a5af8.js";import"./DialogTitle-31a73ac3.js";import"./DialogContent-61c12853.js";import"./lightbox-e32eb605.js";import"./carousel-arrow-index-1f9e8e21.js";const $=[{title:"100% Original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 Day Replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year Warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function V(){var d;const x=G(),{id:n}=x,h=y(),{checkout:c,onAddCart:g,onGotoStep:b}=M(),[o,j]=r.useState("description"),[e,l]=r.useState();r.useEffect(()=>{(async()=>{try{const{data:s,status:Y}=await T.get(`products/${n}`,{params:{count:1}});l(s)}catch(s){alert(s.response.data.message),navigate(m.dashboard.product.root)}})()},[n]);const f=r.useCallback((a,s)=>{j(s)},[]),v=e&&t.jsxs(t.Fragment,{children:[t.jsx(w,{links:[{name:"Home",href:"/"},{name:"Shop",href:m.product.root},{name:e==null?void 0:e.name}],sx:{mb:5}}),t.jsxs(i,{container:!0,spacing:{xs:3,md:5,lg:8},children:[t.jsx(i,{xs:12,md:6,lg:7,children:t.jsx(B,{product:e})}),t.jsx(i,{xs:12,md:6,lg:5,children:t.jsx(W,{product:e,cart:c.cart,onAddCart:g,onGotoStep:b,setProduct:l})})]}),t.jsx(p,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:$.map(a=>t.jsxs(p,{sx:{textAlign:"center",px:5},children:[t.jsx(C,{icon:a.icon,width:32,sx:{color:"primary.main"}}),t.jsx(u,{variant:"subtitle1",sx:{mb:1,mt:2},children:a.title}),t.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:a.description})]},a.title))}),t.jsxs(P,{children:[t.jsx(S,{value:o,onChange:f,sx:{px:3,boxShadow:a=>`inset 0 -2px 0 0 ${k(a.palette.grey[500],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:`Reviews (${(d=e.reviews)==null?void 0:d.length})`}].map(a=>t.jsx(D,{value:a.value,label:a.label},a.value))}),o==="description"&&t.jsx(A,{description:e==null?void 0:e.description}),o==="reviews"&&t.jsx(E,{ratings:e.ratings,reviews:e.reviews,totalRatings:e.totalRatings,totalReviews:e.totalReviews})]})]});return t.jsxs(R,{maxWidth:h.themeStretch?!1:"lg",sx:{mt:5,mb:15},children:[t.jsx(F,{totalItems:c.totalItems}),e&&v]})}function it(){return t.jsxs(t.Fragment,{children:[t.jsx(I,{children:t.jsx("title",{children:" Product: Details"})}),t.jsx(V,{})]})}export{it as default};
