import{aN as y,D as r,af as t,ay as l,aD as i,ao as m,az as C,ac as d,aI as w,aK as P,am as D,aL as S,aB as k,aZ as R}from"./index-17cc091e.js";import{C as T}from"./custom-breadcrumbs-377191b7.js";import{a as I}from"./api-1100fa52.js";import{d as A,e as B,f as E,g as M,C as W}from"./product-details-description-c1f23fa1.js";import"./axios-8a9463a0.js";import"./table-pagination-custom-824be524.js";import"./confirm-dialog-91d35ebc.js";import{u as $}from"./use-params-bb79e479.js";import{u as F}from"./use-checkout-94be20e7.js";import"./axios-d5068281.js";import"./form-provider-e1d1faba.js";import"./format-number-d2248014.js";import"./image-8eb8972e.js";import"./transition-bee6630b.js";import"./Checkbox-61abced2.js";import"./Chip-f0142b13.js";import"./Switch-9f20db87.js";import"./Autocomplete-8f454120.js";import"./Close-af75246b.js";import"./yup-003e6d93.js";import"./CircularProgress-92c971a1.js";import"./_product-b2bf45f1.js";import"./color-picker-81adb062.js";import"./Fab-311ceb35.js";import"./Slider-21c163bd.js";import"./DialogTitle-9980108a.js";import"./DialogContent-ebb89e06.js";import"./lightbox-e19a01fc.js";import"./use-carousel-f9409f84.js";const G=[{title:"100% Original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 Day Replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year Warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function Y(){var c;const p=$(),{id:u}=p,x=y(),{checkout:n,onAddCart:h,onGotoStep:g}=F(),[o,f]=r.useState("description"),[e,j]=r.useState();r.useEffect(()=>{(async()=>{try{const{data:s,status:z}=await I.get(`products/${u}`);j(s)}catch(s){alert(s.response.data.message),navigate(l.dashboard.product.root)}})()},[]);const b=r.useCallback((a,s)=>{f(s)},[]),v=e&&t.jsxs(t.Fragment,{children:[t.jsx(T,{links:[{name:"Home",href:"/"},{name:"Shop",href:l.product.root},{name:e==null?void 0:e.name}],sx:{mb:5}}),t.jsxs(i,{container:!0,spacing:{xs:3,md:5,lg:8},children:[t.jsx(i,{xs:12,md:6,lg:7,children:t.jsx(A,{product:e})}),t.jsx(i,{xs:12,md:6,lg:5,children:t.jsx(B,{product:e,cart:n.cart,onAddCart:h,onGotoStep:g})})]}),t.jsx(m,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:G.map(a=>t.jsxs(m,{sx:{textAlign:"center",px:5},children:[t.jsx(C,{icon:a.icon,width:32,sx:{color:"primary.main"}}),t.jsx(d,{variant:"subtitle1",sx:{mb:1,mt:2},children:a.title}),t.jsx(d,{variant:"body2",sx:{color:"text.secondary"},children:a.description})]},a.title))}),t.jsxs(w,{children:[t.jsx(P,{value:o,onChange:b,sx:{px:3,boxShadow:a=>`inset 0 -2px 0 0 ${D(a.palette.grey[500],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:`Reviews (${(c=e.reviews)==null?void 0:c.length})`}].map(a=>t.jsx(S,{value:a.value,label:a.label},a.value))}),o==="description"&&t.jsx(E,{description:e==null?void 0:e.description}),o==="reviews"&&t.jsx(M,{ratings:e.ratings,reviews:e.reviews,totalRatings:e.totalRatings,totalReviews:e.totalReviews})]})]});return t.jsxs(k,{maxWidth:x.themeStretch?!1:"lg",sx:{mt:5,mb:15},children:[t.jsx(W,{totalItems:n.totalItems}),e&&v]})}function gt(){return t.jsxs(t.Fragment,{children:[t.jsx(R,{children:t.jsx("title",{children:" Product: Details"})}),t.jsx(Y,{})]})}export{gt as default};