import{aC as D,aU as R,F as r,j as t,aE as T,b2 as m,ax as i,B as p,am as I,T as u,af as A,b3 as E,ad as $,b4 as B,aV as F,aA as x,W as M}from"./index-9704d849.js";import"./form-provider-12c266a1.js";import{P as W,a as G,f as U,b as V,C as Y}from"./product-details-description-6caf9f0c.js";import"./axios-f1742306.js";import"./confirm-dialog-915c11b0.js";import{u as H}from"./use-params-cbe02619.js";import{u as L}from"./use-checkout-054ef1e0.js";import"./image-2ab4982d.js";import"./transition-bee6630b.js";import"./Rating-ef33e670.js";import"./yup-74538f83.js";import"./CircularProgress-c34e7eb5.js";import"./DialogTitle-04bdde5d.js";import"./DialogContent-113b8157.js";import"./index-eeae51c1.js";import"./lightbox-e92c2994.js";import"./_product-55188478.js";const N=[{title:"100% Original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 Day Replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year Warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function O(){var d;const h=D(),g=H(),{id:c}=g,b=R(),{checkout:n,onAddCart:j,onGotoStep:f}=L(),[o,v]=r.useState("description"),[e,l]=r.useState(),[w,C]=r.useState([]);r.useEffect(()=>{(async()=>{try{const{data:s}=await x.get(`products/${c}`,{params:{count:1}});l(s);const S=s.name.split(" ")[0].toLowerCase(),{data:k}=await x.get(`/products/similar-product/${S}`);C(k)}catch(s){alert(s.response.data.message),h(m.dashboard.product.root)}})()},[c]);const y=r.useCallback((a,s)=>{v(s)},[]),P=e&&t.jsxs(t.Fragment,{children:[t.jsx(T,{links:[{name:"Home",href:"/"},{name:"Shop",href:m.product.root},{name:e==null?void 0:e.name}],sx:{mb:5}}),t.jsxs(i,{container:!0,spacing:{xs:3,md:5,lg:8},children:[t.jsx(i,{xs:12,md:6,lg:7,children:t.jsx(W,{product:e})}),t.jsx(i,{xs:12,md:6,lg:5,children:t.jsx(G,{product:e,cart:n.cart,onAddCart:j,onGotoStep:f,setProduct:l,similarProduct:w})})]}),t.jsx(p,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:N.map(a=>t.jsxs(p,{sx:{textAlign:"center",px:5},children:[t.jsx(I,{icon:a.icon,width:32,sx:{color:"primary.main"}}),t.jsx(u,{variant:"subtitle1",sx:{mb:1,mt:2},children:a.title}),t.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:a.description})]},a.title))}),t.jsxs(A,{children:[t.jsx(E,{value:o,onChange:y,sx:{px:3,boxShadow:a=>`inset 0 -2px 0 0 ${$(a.palette.grey[500],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:`Reviews (${(d=e.reviews)==null?void 0:d.length})`}].map(a=>t.jsx(B,{value:a.value,label:a.label},a.value))}),o==="description"&&t.jsx(U,{description:e==null?void 0:e.description}),o==="reviews"&&t.jsx(V,{ratings:e.ratings,reviews:e.reviews,totalRatings:e.totalRatings,totalReviews:e.totalReviews})]})]});return t.jsxs(F,{maxWidth:b.themeStretch?!1:"lg",sx:{mt:5,mb:15},children:[t.jsx(Y,{totalItems:n.totalItems}),e&&P]})}function lt(){return t.jsxs(t.Fragment,{children:[t.jsx(M,{children:t.jsx("title",{children:" Product: Details"})}),t.jsx(O,{})]})}export{lt as default};
