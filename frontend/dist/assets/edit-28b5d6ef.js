import{aU as c,F as s,aD as p,j as t,aV as u,aF as h,b2 as o,aA as x,W as f}from"./index-1bfc0e48.js";import{u as g}from"./use-params-38be3181.js";import{P as l}from"./product-new-edit-form-af8f00d8.js";import"./product-details-description-cd6f664b.js";import"./axios-1f181e3d.js";import"./confirm-dialog-4456da0c.js";import"./form-provider-f64ae7e2.js";import"./yup-81018e0c.js";import"./CircularProgress-4d252287.js";import"./CardHeader-4ba62ae9.js";import"./image-b4d1a8a3.js";import"./color-picker-97905764.js";import"./Rating-61abf6eb.js";import"./DialogTitle-6ae8e21c.js";import"./DialogContent-42da5d67.js";import"./lightbox-8e244fec.js";import"./carousel-arrow-index-28fdb174.js";import"./Switch-7b9914fd.js";import"./transition-bee6630b.js";function P(){const e=c(),i=g(),{id:m}=i,[r,d]=s.useState({}),n=p();return s.useEffect(()=>{(async()=>{try{const{data:a,status:b}=await x.get(`products/${m}`);d(a)}catch(a){alert(a.response.data.message),n(o.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:e.themeStretch?!1:"lg",children:[t.jsx(h,{heading:"Edit",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Product",href:o.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(l,{currentProduct:r})]})}function G(){return t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(P,{})]})}export{G as default};
