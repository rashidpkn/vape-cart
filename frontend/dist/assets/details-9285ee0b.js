import{aV as p,F as a,j as t,aW as d,aG as h,b3 as i,aB as x,W as l}from"./index-8741151d.js";import"./confirm-dialog-67d85cd7.js";import{d as u}from"./invoice-details-c2c31c5b.js";import{u as f}from"./use-params-f61cc97f.js";import"./DialogTitle-f5fddd1c.js";import"./DialogContent-f49a3da2.js";import"./CircularProgress-2d93a1d0.js";import"./custom-date-range-picker-1a59ec65.js";import"./form-provider-ffcf404f.js";import"./Switch-23bdf950.js";import"./transition-bee6630b.js";import"./image-a38f243f.js";import"./yup-0915a13c.js";import"./address-list-dialog-26d53743.js";import"./TableContainer-1e44fc6e.js";function b(){const o=p(),r=f(),{id:n}=r,[s,m]=a.useState({}),c=async()=>{try{const{data:e}=await x.get(`invoice/${n}`);m(e)}catch{}};return a.useEffect(()=>{c()},[]),t.jsxs(d,{maxWidth:o.themeStretch?!1:"lg",children:[t.jsx(h,{heading:s==null?void 0:s.invoiceNumber,links:[{name:"Dashboard",href:i.dashboard.root},{name:"Invoice",href:i.dashboard.invoice.root},{name:s==null?void 0:s.invoiceNumber}],sx:{mb:{xs:3,md:5}}}),t.jsx(u,{invoice:s})]})}function V(){return t.jsxs(t.Fragment,{children:[t.jsx(l,{children:t.jsx("title",{children:" Dashboard: Invoice Details"})}),t.jsx(b,{})]})}export{V as default};
