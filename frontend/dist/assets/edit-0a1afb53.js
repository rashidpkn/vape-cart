import{aU as c,F as s,aC as p,j as t,aV as u,aE as h,b2 as o,aA as x,W as f}from"./index-65dcd3da.js";import{u as g}from"./use-params-1cc0e0c2.js";import{P as l}from"./product-new-edit-form-c87cfcb2.js";import"./product-details-description-5e8fe3f9.js";import"./axios-71549e7f.js";import"./confirm-dialog-9aa69476.js";import"./form-provider-1a9fe27b.js";import"./yup-2f828919.js";import"./CircularProgress-c182aaee.js";import"./createProducts-6b8714cd.js";import"./CardHeader-58e72ff2.js";import"./image-6af13758.js";import"./transition-bee6630b.js";import"./Rating-341b9b20.js";import"./DialogTitle-8b01e832.js";import"./DialogContent-eb914da5.js";import"./lightbox-2a5c32ea.js";import"./index-90916f7c.js";function P(){const e=c(),i=g(),{id:m}=i,[r,d]=s.useState({}),n=p();return s.useEffect(()=>{(async()=>{try{const{data:a}=await x.get(`products/${m}`);d(a)}catch(a){alert(a.response.data.message),n(o.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:e.themeStretch?!1:"lg",children:[t.jsx(h,{heading:"Edit",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Product",href:o.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(l,{currentProduct:r})]})}function q(){return t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(P,{})]})}export{q as default};
