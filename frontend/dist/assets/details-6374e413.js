import{b4 as C,H as r,j as t,p as l,aW as i,a as d,I as w,T as m,a$ as y,b1 as P,aL as S,b2 as k,aU as D,bu as R,W as T}from"./index-5abd2fc6.js";import{C as I}from"./custom-breadcrumbs-c7a464a8.js";import{P as W,a as $,b as A,c as E,C as M}from"./product-details-description-d877b72b.js";import"./axios-a4da7e6b.js";import"./table-pagination-custom-e0cfbd9e.js";import"./confirm-dialog-41a0d629.js";import{u as B}from"./use-params-5005962e.js";import{u as F}from"./use-checkout-aaf77807.js";import"./form-provider-18beb9cd.js";import"./format-number-4c6f0f97.js";import"./image-76177698.js";import"./transition-bee6630b.js";import"./Checkbox-9b69a79b.js";import"./Switch-7ef21d4a.js";import"./yup-1ca7bc00.js";import"./CircularProgress-b0876ac3.js";import"./_product-356a4fe5.js";import"./color-picker-52bc711e.js";import"./Rating-a5cecd14.js";import"./DialogTitle-886d0b88.js";import"./DialogContent-a5e57403.js";import"./lightbox-987520e4.js";import"./use-carousel-c81d7268.js";const G=[{title:"100% Original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 Day Replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year Warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function H(){var c;const p=B(),{id:u}=p,x=C(),{checkout:n,onAddCart:h,onGotoStep:g}=F(),[o,b]=r.useState("description"),[e,j]=r.useState();r.useEffect(()=>{(async()=>{try{const{data:a,status:U}=await R.get(`products/${u}`,{params:{count:1}});j(a)}catch(a){alert(a.response.data.message),navigate(l.dashboard.product.root)}})()},[]);const f=r.useCallback((s,a)=>{b(a)},[]),v=e&&t.jsxs(t.Fragment,{children:[t.jsx(I,{links:[{name:"Home",href:"/"},{name:"Shop",href:l.product.root},{name:e==null?void 0:e.name}],sx:{mb:5}}),t.jsxs(i,{container:!0,spacing:{xs:3,md:5,lg:8},children:[t.jsx(i,{xs:12,md:6,lg:7,children:t.jsx(W,{product:e})}),t.jsx(i,{xs:12,md:6,lg:5,children:t.jsx($,{product:e,cart:n.cart,onAddCart:h,onGotoStep:g})})]}),t.jsx(d,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:G.map(s=>t.jsxs(d,{sx:{textAlign:"center",px:5},children:[t.jsx(w,{icon:s.icon,width:32,sx:{color:"primary.main"}}),t.jsx(m,{variant:"subtitle1",sx:{mb:1,mt:2},children:s.title}),t.jsx(m,{variant:"body2",sx:{color:"text.secondary"},children:s.description})]},s.title))}),t.jsxs(y,{children:[t.jsx(P,{value:o,onChange:f,sx:{px:3,boxShadow:s=>`inset 0 -2px 0 0 ${S(s.palette.grey[500],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:`Reviews (${(c=e.reviews)==null?void 0:c.length})`}].map(s=>t.jsx(k,{value:s.value,label:s.label},s.value))}),o==="description"&&t.jsx(A,{description:e==null?void 0:e.description}),o==="reviews"&&t.jsx(E,{ratings:e.ratings,reviews:e.reviews,totalRatings:e.totalRatings,totalReviews:e.totalReviews})]})]});return t.jsxs(D,{maxWidth:x.themeStretch?!1:"lg",sx:{mt:5,mb:15},children:[t.jsx(M,{totalItems:n.totalItems}),e&&v]})}function dt(){return t.jsxs(t.Fragment,{children:[t.jsx(T,{children:t.jsx("title",{children:" Product: Details"})}),t.jsx(H,{})]})}export{dt as default};
