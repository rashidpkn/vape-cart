import{b4 as p,F as o,j as t,aU as d,bx as h,aR as e,bu as x,W as u}from"./index-f9021dbd.js";import"./confirm-dialog-aefa8f33.js";import"./table-pagination-custom-532209c9.js";import{d as l}from"./invoice-details-6ccb8c42.js";import{u as f}from"./use-params-8fa97e5f.js";import"./DialogTitle-ae5956ef.js";import"./DialogContent-90861b47.js";import"./Checkbox-02cb7b46.js";import"./format-number-91b78f73.js";import"./CircularProgress-1760bc16.js";import"./custom-date-range-picker-9b1206ce.js";import"./form-provider-36cc4b55.js";import"./image-d8d1557a.js";import"./transition-bee6630b.js";import"./Switch-157692af.js";import"./yup-1cead020.js";import"./address-list-dialog-b5b999da.js";import"./TableContainer-c6afb961.js";function b(){const r=p(),a=f(),{id:m}=a,[i,n]=o.useState({}),c=async()=>{try{const{data:s}=await x.get(`invoice/${m}`);n(s)}catch{}};return o.useEffect(()=>{c()},[]),t.jsxs(d,{maxWidth:r.themeStretch?!1:"lg",children:[t.jsx(h,{heading:i==null?void 0:i.invoiceNumber,links:[{name:"Dashboard",href:e.dashboard.root},{name:"Invoice",href:e.dashboard.invoice.root},{name:i==null?void 0:i.invoiceNumber}],sx:{mb:{xs:3,md:5}}}),t.jsx(l,{invoice:i})]})}function V(){return t.jsxs(t.Fragment,{children:[t.jsx(u,{children:t.jsx("title",{children:" Dashboard: Invoice Details"})}),t.jsx(b,{})]})}export{V as default};