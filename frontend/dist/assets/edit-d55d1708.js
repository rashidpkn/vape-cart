import{aU as c,F as s,aC as p,j as t,aV as u,aE as h,b2 as o,aA as x,W as f}from"./index-9704d849.js";import{u as g}from"./use-params-cbe02619.js";import{P as l}from"./product-new-edit-form-abce8dea.js";import"./product-details-description-6caf9f0c.js";import"./axios-f1742306.js";import"./confirm-dialog-915c11b0.js";import"./form-provider-12c266a1.js";import"./yup-74538f83.js";import"./CircularProgress-c34e7eb5.js";import"./CardHeader-3fabebfa.js";import"./image-2ab4982d.js";import"./transition-bee6630b.js";import"./Rating-ef33e670.js";import"./DialogTitle-04bdde5d.js";import"./DialogContent-113b8157.js";import"./index-eeae51c1.js";import"./lightbox-e92c2994.js";function P(){const e=c(),i=g(),{id:m}=i,[r,d]=s.useState({}),n=p();return s.useEffect(()=>{(async()=>{try{const{data:a}=await x.get(`products/${m}`);d(a)}catch(a){alert(a.response.data.message),n(o.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:e.themeStretch?!1:"lg",children:[t.jsx(h,{heading:"Edit",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Product",href:o.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(l,{currentProduct:r})]})}function $(){return t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(P,{})]})}export{$ as default};
