import{aO as n,bu as m,db as d,af as s,aC as c,bv as h,az as i,b5 as x}from"./index-bb505ec4.js";import"./confirm-dialog-45f1a66e.js";import"./table-pagination-custom-4c8c08f8.js";import"./api-3aac980b.js";import{e as p}from"./invoice-details-aeb941ba.js";import"./axios-e0d8a382.js";import"./custom-date-range-picker-166fd992.js";import"./TableContainer-c51d524a.js";function b(){const e=n(),a=m(),{id:o}=a,t=d.find(r=>r.id===o);return s.jsxs(c,{maxWidth:e.themeStretch?!1:"lg",children:[s.jsx(h,{heading:"Edit",links:[{name:"Dashboard",href:i.dashboard.root},{name:"Invoice",href:i.dashboard.invoice.root},{name:t==null?void 0:t.invoiceNumber}],sx:{mb:{xs:3,md:5}}}),s.jsx(p,{currentInvoice:t})]})}function I(){return s.jsxs(s.Fragment,{children:[s.jsx(x,{children:s.jsx("title",{children:" Dashboard: Invoice Edit"})}),s.jsx(b,{})]})}export{I as default};