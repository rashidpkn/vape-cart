import{aN as c,D as r,af as t,aB as d,ay as s,aZ as h}from"./index-3adde4c0.js";import"./confirm-dialog-a3d535db.js";import{C as f}from"./custom-breadcrumbs-ae8c15c8.js";import"./table-pagination-custom-8adf02a6.js";import{a as x}from"./api-1100fa52.js";import{d as l}from"./invoice-details-08727cf9.js";import{u}from"./use-params-d3ff4e34.js";import"./DialogTitle-fca3c765.js";import"./DialogContent-a1764ff9.js";import"./Checkbox-1d27f0b0.js";import"./axios-d5068281.js";import"./format-number-326f4e94.js";import"./CircularProgress-11b9a1d7.js";import"./custom-date-range-picker-e6f7843b.js";import"./Chip-7162da89.js";import"./form-provider-8f0db5c8.js";import"./image-bb749e0c.js";import"./transition-bee6630b.js";import"./Switch-a0c0f5bb.js";import"./Autocomplete-c57031c7.js";import"./Close-03cf31c2.js";import"./yup-5b2eef19.js";import"./address-list-dialog-05054a94.js";import"./TableContainer-dffc8614.js";function v(){const a=c(),e=u(),{id:m}=e,[o,n]=r.useState({}),p=async()=>{try{const{data:i}=await x.get(`invoice/${m}`);n(i)}catch{}};return r.useEffect(()=>{p()},[]),t.jsxs(d,{maxWidth:a.themeStretch?!1:"lg",children:[t.jsx(f,{heading:o==null?void 0:o.invoiceNumber,links:[{name:"Dashboard",href:s.dashboard.root},{name:"Invoice",href:s.dashboard.invoice.root},{name:o==null?void 0:o.invoiceNumber}],sx:{mb:{xs:3,md:5}}}),t.jsx(l,{invoice:o})]})}function H(){return t.jsxs(t.Fragment,{children:[t.jsx(h,{children:t.jsx("title",{children:" Dashboard: Invoice Details"})}),t.jsx(v,{})]})}export{H as default};