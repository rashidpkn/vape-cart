import{aO as c,H as s,aF as p,j as t,aR as u,aH as h,ao as a,b as x,W as f}from"./index-7327ab00.js";import{u as g}from"./use-params-ba86894f.js";import{P as l}from"./product-new-edit-form-a3a66863.js";import"./product-details-description-7b79aff9.js";import"./confirm-dialog-7fc6a587.js";import"./form-provider-41e81275.js";import"./yup-79c4420f.js";import"./CircularProgress-5f8814b1.js";import"./Grid-61c6256d.js";import"./Radio-ca1e0722.js";import"./CardHeader-da6b68d6.js";import"./image-0175400e.js";import"./lightbox-7f372fd5.js";import"./Rating-34a14843.js";import"./DialogTitle-778305b8.js";import"./DialogContent-8216996b.js";import"./index-79dc0392.js";import"./use-carousel-f2fb5be4.js";import"./file-thumbnail-6e25d854.js";import"./fade-295cf198.js";import"./transition-bee6630b.js";function P(){const e=c(),i=g(),{id:m}=i,[r,d]=s.useState({}),n=p();return s.useEffect(()=>{(async()=>{try{const{data:o}=await x.get(`products/${m}`);d(o)}catch(o){alert(o.response.data.message),n(a.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:e.themeStretch?!1:"lg",children:[t.jsx(h,{heading:"Edit",links:[{name:"Dashboard",href:a.dashboard.root},{name:"Product",href:a.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(l,{currentProduct:r})]})}function G(){return t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(P,{})]})}export{G as default};
