import{b3 as p,D as a,bY as c,ao as t,aT as u,aQ as s,bs as h,bf as f}from"./index-feebbf1a.js";import{u as x}from"./use-params-eb8f90be.js";import{C as b}from"./custom-breadcrumbs-d6d81004.js";import{h as g}from"./product-details-description-46123df6.js";import"./axios-038cfe9e.js";import"./table-pagination-custom-80f9e74a.js";import"./confirm-dialog-b9e141ff.js";import"./form-provider-9a490e1c.js";import"./format-number-eb8fa3ee.js";import"./image-cce2e09f.js";import"./transition-bee6630b.js";import"./Checkbox-fc4debaa.js";import"./Switch-436da68c.js";import"./yup-db689d1d.js";import"./CircularProgress-b5d22d6d.js";import"./_product-356a4fe5.js";import"./color-picker-fa339b93.js";import"./Rating-7d07ff5b.js";import"./DialogTitle-c5f67059.js";import"./DialogContent-8fffd9a5.js";import"./lightbox-eefa6ae3.js";import"./use-carousel-45169d04.js";function l(){const e=p(),i=x(),{id:m}=i,[r,d]=a.useState({}),n=c();return a.useEffect(()=>{(async()=>{try{const{data:o,status:j}=await h.get(`products/${m}`);d(o)}catch(o){alert(o.response.data.message),n(s.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:e.themeStretch?!1:"lg",children:[t.jsx(b,{heading:"Edit",links:[{name:"Dashboard",href:s.dashboard.root},{name:"Product",href:s.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(g,{currentProduct:r})]})}function H(){return t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(l,{})]})}export{H as default};
