import{b4 as c,F as a,c0 as p,j as t,aU as u,bx as h,aR as s,bu as x,W as f}from"./index-f9021dbd.js";import{u as b}from"./use-params-8fa97e5f.js";import{h as g}from"./product-details-description-38d15699.js";import"./axios-b7b83db7.js";import"./table-pagination-custom-532209c9.js";import"./confirm-dialog-aefa8f33.js";import"./form-provider-36cc4b55.js";import"./format-number-91b78f73.js";import"./image-d8d1557a.js";import"./transition-bee6630b.js";import"./Checkbox-02cb7b46.js";import"./Switch-157692af.js";import"./yup-1cead020.js";import"./CircularProgress-1760bc16.js";import"./_product-6d7b769f.js";import"./color-picker-4982d027.js";import"./Rating-7d2a34ee.js";import"./DialogTitle-ae5956ef.js";import"./DialogContent-90861b47.js";import"./lightbox-debd7e7e.js";import"./use-carousel-807856ff.js";function l(){const e=c(),i=b(),{id:m}=i,[r,d]=a.useState({}),n=p();return a.useEffect(()=>{(async()=>{try{const{data:o,status:P}=await x.get(`products/${m}`);d(o)}catch(o){alert(o.response.data.message),n(s.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:e.themeStretch?!1:"lg",children:[t.jsx(h,{heading:"Edit",links:[{name:"Dashboard",href:s.dashboard.root},{name:"Product",href:s.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(g,{currentProduct:r})]})}function I(){return t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(l,{})]})}export{I as default};
