import{az as c,D as r,a9 as t,ak as d,ah as m,aL as h}from"./index-0c2a703b.js";import"./confirm-dialog-ebab4555.js";import{C as x}from"./custom-breadcrumbs-2d27857c.js";import"./table-pagination-custom-f46a4e0c.js";import{d as f}from"./invoice-details-0efabbf6.js";import{a as l}from"./api-1100fa52.js";import{u}from"./use-params-223e2345.js";import"./DialogTitle-74466561.js";import"./DialogContent-dff8e7c3.js";import"./DialogActions-ffa25fd1.js";import"./TablePagination-dd5e3528.js";import"./Checkbox-59175dc0.js";import"./SwitchBase-ae0b0f64.js";import"./format-number-aaf23d7c.js";import"./CircularProgress-b0e40b76.js";import"./DatePicker-d9595d2f.js";import"./ListItem-9ff5a3a5.js";import"./ListItemSecondaryAction-6e2822e7.js";import"./Chip-3aaf9fe3.js";import"./custom-date-range-picker-e5dae14b.js";import"./form-provider-d4331558.js";import"./upload-avatar-6ed90205.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-1edc3c71.js";import"./image-040a56dc.js";import"./FormControlLabel-ddbcf947.js";import"./FormGroup-ee8aef8c.js";import"./Switch-9d2e3a47.js";import"./editor-25b8a849.js";import"./highlight-5d2f9a95.js";import"./Slider-aba0d21e.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-0b7900f0.js";import"./Radio-d48e7c8e.js";import"./Autocomplete-6802852f.js";import"./Close-24ed4d34.js";import"./yup-42b968b0.js";import"./address-list-dialog-04fcf2a8.js";import"./LoadingButton-2ff435f1.js";import"./TableContainer-e16b26c5.js";import"./axios-d5068281.js";function v(){const s=c(),a=u(),{id:e}=a,[o,p]=r.useState({}),n=async()=>{try{const{data:i}=await l.get(`invoice/${e}`);p(i)}catch{}};return r.useEffect(()=>{n()},[]),t.jsxs(d,{maxWidth:s.themeStretch?!1:"lg",children:[t.jsx(x,{heading:o==null?void 0:o.invoiceNumber,links:[{name:"Dashboard",href:m.dashboard.root},{name:"Invoice",href:m.dashboard.invoice.root},{name:o==null?void 0:o.invoiceNumber}],sx:{mb:{xs:3,md:5}}}),t.jsx(f,{invoice:o})]})}function at(){return t.jsxs(t.Fragment,{children:[t.jsx(h,{children:t.jsx("title",{children:" Dashboard: Invoice Details"})}),t.jsx(v,{})]})}export{at as default};
