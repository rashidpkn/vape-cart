import{aU as c,F as s,aD as p,j as t,aV as u,aF as h,b2 as o,aA as x,W as f}from"./index-ca193875.js";import{u as g}from"./use-params-e3294563.js";import{f as l}from"./product-details-description-a15b727e.js";import"./axios-71108584.js";import"./confirm-dialog-f473af4e.js";import"./form-provider-64735145.js";import"./Switch-a148ce3f.js";import"./transition-bee6630b.js";import"./image-ffbeacf9.js";import"./yup-9f0ecdc4.js";import"./CircularProgress-5cb8e37e.js";import"./_product-2bc14852.js";import"./CardHeader-ef4f4e85.js";import"./color-picker-a4f361f3.js";import"./Rating-9f8d0f57.js";import"./DialogTitle-9a1b9344.js";import"./DialogContent-45fb3644.js";import"./lightbox-26532e15.js";import"./carousel-arrow-index-55bccc87.js";function j(){const e=c(),i=g(),{id:m}=i,[r,d]=s.useState({}),n=p();return s.useEffect(()=>{(async()=>{try{const{data:a,status:b}=await x.get(`products/${m}`);d(a)}catch(a){alert(a.response.data.message),n(o.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:e.themeStretch?!1:"lg",children:[t.jsx(h,{heading:"Edit",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Product",href:o.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(l,{currentProduct:r})]})}function G(){return t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(j,{})]})}export{G as default};
