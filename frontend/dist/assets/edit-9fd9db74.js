import{b3 as a,cw as n,ao as t,aT as d,aQ as o,bf as p}from"./index-feebbf1a.js";import"./confirm-dialog-b9e141ff.js";import{C as c}from"./custom-breadcrumbs-d6d81004.js";import"./table-pagination-custom-80f9e74a.js";import{e as h}from"./invoice-details-dc4c44d7.js";import{u as x}from"./use-params-eb8f90be.js";import"./DialogTitle-c5f67059.js";import"./DialogContent-8fffd9a5.js";import"./Checkbox-fc4debaa.js";import"./format-number-eb8fa3ee.js";import"./CircularProgress-b5d22d6d.js";import"./custom-date-range-picker-a76c295c.js";import"./form-provider-9a490e1c.js";import"./image-cce2e09f.js";import"./transition-bee6630b.js";import"./Switch-436da68c.js";import"./yup-db689d1d.js";import"./address-list-dialog-8e4a17f1.js";import"./TableContainer-32aac236.js";function f(){const r=a(),s=x(),{id:e}=s,i=n.find(m=>m.id===e);return t.jsxs(d,{maxWidth:r.themeStretch?!1:"lg",children:[t.jsx(c,{heading:"Edit",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Invoice",href:o.dashboard.invoice.root},{name:i==null?void 0:i.invoiceNumber}],sx:{mb:{xs:3,md:5}}}),t.jsx(h,{currentInvoice:i})]})}function R(){return t.jsxs(t.Fragment,{children:[t.jsx(p,{children:t.jsx("title",{children:" Dashboard: Invoice Edit"})}),t.jsx(f,{})]})}export{R as default};