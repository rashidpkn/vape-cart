import{aU as p,F as a,j as t,aV as d,aE as h,b2 as i,aA as x,W as l}from"./index-9704d849.js";import"./confirm-dialog-915c11b0.js";import{d as u}from"./invoice-details-0d5ce032.js";import{u as f}from"./use-params-cbe02619.js";import"./DialogTitle-04bdde5d.js";import"./DialogContent-113b8157.js";import"./CircularProgress-c34e7eb5.js";import"./form-provider-12c266a1.js";import"./image-2ab4982d.js";import"./transition-bee6630b.js";import"./yup-74538f83.js";import"./address-list-dialog-692ec050.js";import"./TableContainer-3afd1c20.js";function b(){const o=p(),r=f(),{id:n}=r,[s,m]=a.useState({}),c=async()=>{try{const{data:e}=await x.get(`invoice/${n}`);m(e)}catch{}};return a.useEffect(()=>{c()},[]),t.jsxs(d,{maxWidth:o.themeStretch?!1:"lg",children:[t.jsx(h,{heading:s==null?void 0:s.invoiceNumber,links:[{name:"Dashboard",href:i.dashboard.root},{name:"Invoice",href:i.dashboard.invoice.root},{name:s==null?void 0:s.invoiceNumber}],sx:{mb:{xs:3,md:5}}}),t.jsx(u,{invoice:s})]})}function V(){return t.jsxs(t.Fragment,{children:[t.jsx(l,{children:t.jsx("title",{children:" Dashboard: Invoice Details"})}),t.jsx(b,{})]})}export{V as default};
