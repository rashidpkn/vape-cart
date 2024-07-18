import{aC as w,aU as y,b2 as P,F as r,j as e,aE as S,b3 as m,ax as i,B as p,am as k,T as x,af as D,ad as R,aV as T,aA as I,W as A}from"./index-5162a7b2.js";import"./form-provider-54613372.js";import{P as E,e as B,a as F,C as M}from"./product-details-description-6409959b.js";import"./axios-e9b95c57.js";import"./confirm-dialog-5e9eb789.js";import{u as W}from"./use-params-f68ae09e.js";import{P as $}from"./product-details-summary-1a8242b7.js";import{T as G,a as U}from"./Tabs-a6f5ece5.js";import"./file-thumbnail-2dc6129b.js";import"./image-e7af7e6c.js";import"./transition-bee6630b.js";import"./Rating-1bcda71e.js";import"./yup-221aff84.js";import"./CircularProgress-498b8c80.js";import"./DialogTitle-6a929b3a.js";import"./DialogContent-1be49317.js";import"./lightbox-dd3de22e.js";import"./index-60de4f35.js";const V=[{title:"100% Original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 Day Replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year Warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function Y(){var d;const u=w(),h=W(),{id:n}=h,g=y(),{checkout:c,onAddCart:j,onGotoStep:b}=P(),[o,f]=r.useState("description"),[t,l]=r.useState();r.useEffect(()=>{(async()=>{try{const{data:s}=await I.get(`products/${n}`,{params:{count:1}});l(s)}catch(s){alert(s.response.data.message),u(m.dashboard.product.root)}})()},[n]);const v=r.useCallback((a,s)=>{f(s)},[]),C=t&&e.jsxs(e.Fragment,{children:[e.jsx(S,{links:[{name:"Home",href:"/"},{name:"Shop",href:m.product.root},{name:t==null?void 0:t.name}],sx:{mb:5}}),e.jsxs(i,{container:!0,spacing:{xs:3,md:5,lg:8},children:[e.jsx(i,{xs:12,md:6,lg:7,children:e.jsx(E,{product:t})}),e.jsx(i,{xs:12,md:6,lg:5,children:e.jsx($,{product:t,cart:c.cart,onAddCart:j,onGotoStep:b,setProduct:l})})]}),e.jsx(p,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:V.map(a=>e.jsxs(p,{sx:{textAlign:"center",px:5},children:[e.jsx(k,{icon:a.icon,width:32,sx:{color:"primary.main"}}),e.jsx(x,{variant:"subtitle1",sx:{mb:1,mt:2},children:a.title}),e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:a.description})]},a.title))}),e.jsxs(D,{children:[e.jsx(G,{value:o,onChange:v,sx:{px:3,boxShadow:a=>`inset 0 -2px 0 0 ${R(a.palette.grey[500],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:`Reviews (${(d=t.reviews)==null?void 0:d.length})`}].map(a=>e.jsx(U,{value:a.value,label:a.label},a.value))}),o==="description"&&e.jsx(B,{description:t==null?void 0:t.description}),o==="reviews"&&e.jsx(F,{ratings:t.ratings,reviews:t.reviews,totalRatings:t.totalRatings,totalReviews:t.totalReviews})]})]});return e.jsxs(T,{maxWidth:g.themeStretch?!1:"lg",sx:{mt:5,mb:15},children:[e.jsx(M,{totalItems:c.totalItems}),t&&C]})}function ie(){return e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsx("title",{children:" Product: Details"})}),e.jsx(Y,{})]})}export{ie as default};
