import{aU as c,F as s,aD as p,j as t,aV as u,aF as h,b2 as o,aA as x,W as f}from"./index-b8354e19.js";import{u as g}from"./use-params-547a3b14.js";import{f as l}from"./product-details-description-78e86950.js";import"./axios-4d2ef999.js";import"./confirm-dialog-1f110366.js";import"./form-provider-fec34da4.js";import"./Switch-6dd1074d.js";import"./transition-bee6630b.js";import"./image-ab67bd03.js";import"./yup-d2ef2170.js";import"./CircularProgress-22dad298.js";import"./_product-2bc14852.js";import"./CardHeader-d434b8a0.js";import"./color-picker-eaf5a7f5.js";import"./Rating-42430359.js";import"./DialogTitle-ca1bc48c.js";import"./DialogContent-b5af31c5.js";import"./lightbox-b2e2ed54.js";import"./carousel-arrow-index-bd3e1944.js";function j(){const e=c(),i=g(),{id:m}=i,[r,d]=s.useState({}),n=p();return s.useEffect(()=>{(async()=>{try{const{data:a,status:b}=await x.get(`products/${m}`);d(a)}catch(a){alert(a.response.data.message),n(o.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:e.themeStretch?!1:"lg",children:[t.jsx(h,{heading:"Edit",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Product",href:o.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(l,{currentProduct:r})]})}function G(){return t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(j,{})]})}export{G as default};