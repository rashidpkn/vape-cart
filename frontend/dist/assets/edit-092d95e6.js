import{az as n,D as m,bC as c,a9 as t,ak as u,ah as i,aL as h}from"./index-fe4b39cd.js";import{u as f}from"./use-params-6629cad1.js";import{C as x}from"./custom-breadcrumbs-c3a4184a.js";import{m as g}from"./product-details-description-d7edc097.js";import{a as l}from"./api-1100fa52.js";import"./table-pagination-custom-8f7c1895.js";import"./image-53edf818.js";import"./axios-ad540510.js";import"./confirm-dialog-b3d60482.js";import"./form-provider-12594010.js";import"./upload-avatar-8d102241.js";import"./format-number-cfcd7ddb.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-acf5e74b.js";import"./Checkbox-ed6f451b.js";import"./SwitchBase-c79b0540.js";import"./Chip-b90d29bc.js";import"./FormControlLabel-28ca214a.js";import"./FormGroup-34616835.js";import"./Switch-5669671b.js";import"./editor-1ae9678f.js";import"./highlight-c56d7c0b.js";import"./Slider-8796f46c.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-1d691493.js";import"./Radio-2ac6b598.js";import"./Autocomplete-81d85a2f.js";import"./Close-bf649757.js";import"./yup-baf1d63e.js";import"./_product-66794ccf.js";import"./LoadingButton-60cdda3b.js";import"./CircularProgress-83b7a710.js";import"./color-picker-79e7cf52.js";import"./Fab-708a1899.js";import"./Skeleton-ab1ff032.js";import"./Pagination-cb0de491.js";import"./TablePagination-898d2adc.js";import"./Rating-f2cb05bf.js";import"./DialogTitle-fae0472b.js";import"./DialogContent-b7c757b0.js";import"./DialogActions-c8c6bdf3.js";import"./lightbox-1ef433fc.js";import"./carousel-arrow-index-fc73c3b7.js";import"./use-carousel-d4209f89.js";import"./markdown-9a18a2cc.js";import"./axios-d5068281.js";function P(){const a=n(),s=f(),{id:p}=s,[r,e]=m.useState({}),d=c();return m.useEffect(()=>{(async()=>{try{const{data:o,status:j}=await l.get(`products/${p}`);e(o)}catch(o){alert(o.response.data.message),d(i.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:a.themeStretch?!1:"lg",children:[t.jsx(x,{heading:"Edit",links:[{name:"Dashboard",href:i.dashboard.root},{name:"Product",href:i.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(g,{currentProduct:r})]})}function ft(){return t.jsxs(t.Fragment,{children:[t.jsx(h,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(P,{})]})}export{ft as default};
