import{aF as P,aO as b,aP as C,H as r,j as t,aH as w,ao as p,aB as i,ah as S,af as D,aR as R,b as T,W as k}from"./index-c6e15d29.js";import"./form-provider-dfd51611.js";import{P as y,e as E,a as F,C as H}from"./product-details-description-ae602495.js";import"./lightbox-0a730d05.js";import"./confirm-dialog-4b859315.js";import{u as I}from"./use-params-082e38fe.js";import{P as $}from"./product-details-summary-78aa9f5d.js";import{T as B,a as G}from"./Tabs-246f2d90.js";import"./file-thumbnail-38db141c.js";import"./fade-295cf198.js";import"./transition-bee6630b.js";import"./image-2429e26c.js";import"./Radio-819d84f5.js";import"./Rating-943ef270.js";import"./yup-9095ce7b.js";import"./CircularProgress-1250a485.js";import"./DialogTitle-47948105.js";import"./DialogContent-5f328cb2.js";import"./index-5ae4508e.js";import"./use-carousel-cef7f03f.js";function W(){var m;const d=P(),u=I(),{id:n}=u,x=b(),{checkout:c,onAddCart:h,onGotoStep:g}=C(),[o,j]=r.useState("description"),[e,l]=r.useState();r.useEffect(()=>{(async()=>{try{const{data:a}=await T.get(`products/${n}`,{params:{count:1}});l(a)}catch(a){alert(a.response.data.message),d(p.dashboard.product.root)}})()},[n]);const v=r.useCallback((s,a)=>{j(a)},[]),f=e&&t.jsxs(t.Fragment,{children:[t.jsx(w,{links:[{name:"Home",href:"/"},{name:"Shop",href:p.product.root},{name:e==null?void 0:e.name}],sx:{mb:5}}),t.jsxs(i,{container:!0,spacing:{xs:3,md:5,lg:8},children:[t.jsx(i,{xs:12,md:6,lg:7,children:t.jsx(y,{product:e})}),t.jsx(i,{xs:12,md:6,lg:5,children:t.jsx($,{product:e,cart:c.cart,onAddCart:h,onGotoStep:g,setProduct:l})})]}),t.jsxs(S,{children:[t.jsx(B,{value:o,onChange:v,sx:{px:3,boxShadow:s=>`inset 0 -2px 0 0 ${D(s.palette.grey[500],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:`Reviews (${(m=e.reviews)==null?void 0:m.length})`}].map(s=>t.jsx(G,{value:s.value,label:s.label},s.value))}),o==="description"&&t.jsx(E,{description:e==null?void 0:e.content}),o==="reviews"&&t.jsx(F,{ratings:e.ratings,reviews:e.reviews,totalRatings:e.totalRatings,totalReviews:e.totalReviews})]})]});return t.jsxs(R,{maxWidth:x.themeStretch?!1:"lg",sx:{mt:5,mb:15},children:[t.jsx(H,{totalItems:c.totalItems}),e&&f]})}function rt(){return t.jsxs(t.Fragment,{children:[t.jsx(k,{children:t.jsx("title",{children:" Product: Details"})}),t.jsx(W,{})]})}export{rt as default};
