import{aU as p,F as a,j as t,aV as d,aF as h,b2 as i,aA as x,W as l}from"./index-b8354e19.js";import"./confirm-dialog-1f110366.js";import{d as u}from"./invoice-details-5c3895c9.js";import{u as f}from"./use-params-547a3b14.js";import"./DialogTitle-ca1bc48c.js";import"./DialogContent-b5af31c5.js";import"./CircularProgress-22dad298.js";import"./custom-date-range-picker-7411c9ac.js";import"./form-provider-fec34da4.js";import"./Switch-6dd1074d.js";import"./transition-bee6630b.js";import"./image-ab67bd03.js";import"./yup-d2ef2170.js";import"./address-list-dialog-a3eee314.js";import"./TableContainer-0cda5818.js";function b(){const o=p(),r=f(),{id:n}=r,[s,m]=a.useState({}),c=async()=>{try{const{data:e}=await x.get(`invoice/${n}`);m(e)}catch{}};return a.useEffect(()=>{c()},[]),t.jsxs(d,{maxWidth:o.themeStretch?!1:"lg",children:[t.jsx(h,{heading:s==null?void 0:s.invoiceNumber,links:[{name:"Dashboard",href:i.dashboard.root},{name:"Invoice",href:i.dashboard.invoice.root},{name:s==null?void 0:s.invoiceNumber}],sx:{mb:{xs:3,md:5}}}),t.jsx(u,{invoice:s})]})}function k(){return t.jsxs(t.Fragment,{children:[t.jsx(l,{children:t.jsx("title",{children:" Dashboard: Invoice Details"})}),t.jsx(b,{})]})}export{k as default};
