import{aN as c,D as r,af as t,aB as d,ay as s,aZ as h}from"./index-3f3d5e6e.js";import"./confirm-dialog-506b72e2.js";import{C as f}from"./custom-breadcrumbs-e59d9218.js";import"./table-pagination-custom-b63bf716.js";import{a as x}from"./api-3aac980b.js";import{d as l}from"./invoice-details-2cf86739.js";import{u}from"./use-params-9b742080.js";import"./DialogTitle-eae1cf96.js";import"./DialogContent-195896cb.js";import"./Checkbox-23813314.js";import"./axios-e0d8a382.js";import"./format-number-953f2a0f.js";import"./CircularProgress-f3d3d5c2.js";import"./custom-date-range-picker-61b243b7.js";import"./Chip-b2ed44b0.js";import"./form-provider-09d1682d.js";import"./image-ba19f338.js";import"./transition-bee6630b.js";import"./Switch-c896389b.js";import"./Autocomplete-8253693b.js";import"./Close-7dd9fc6c.js";import"./yup-ec2b30c5.js";import"./address-list-dialog-de65fa3e.js";import"./TableContainer-247c9332.js";function v(){const a=c(),e=u(),{id:m}=e,[o,n]=r.useState({}),p=async()=>{try{const{data:i}=await x.get(`invoice/${m}`);n(i)}catch{}};return r.useEffect(()=>{p()},[]),t.jsxs(d,{maxWidth:a.themeStretch?!1:"lg",children:[t.jsx(f,{heading:o==null?void 0:o.invoiceNumber,links:[{name:"Dashboard",href:s.dashboard.root},{name:"Invoice",href:s.dashboard.invoice.root},{name:o==null?void 0:o.invoiceNumber}],sx:{mb:{xs:3,md:5}}}),t.jsx(l,{invoice:o})]})}function H(){return t.jsxs(t.Fragment,{children:[t.jsx(h,{children:t.jsx("title",{children:" Dashboard: Invoice Details"})}),t.jsx(v,{})]})}export{H as default};
