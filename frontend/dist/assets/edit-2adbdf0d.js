import{ax as n,D as m,bx as c,a8 as t,aj as u,ag as i,aH as h}from"./index-a747811c.js";import{u as x}from"./use-params-c2f61bbe.js";import{C as f}from"./custom-breadcrumbs-4c4417ef.js";import{n as g,b as l}from"./product-details-description-39fc0b61.js";import"./axios-a647e08c.js";import"./table-pagination-custom-35112ce6.js";import"./image-13256a49.js";import"./confirm-dialog-342a8153.js";import"./form-provider-d26a9747.js";import"./upload-avatar-4058b3e8.js";import"./format-number-6c2edc06.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-9e7244b8.js";import"./TextField-5c8d940a.js";import"./FormControl-0c109cff.js";import"./FormLabel-b8b56886.js";import"./Select-0e3a3519.js";import"./Menu-85627bb4.js";import"./Checkbox-c13775e7.js";import"./SwitchBase-46064381.js";import"./Chip-db514ca4.js";import"./FormControlLabel-6cf4e384.js";import"./FormGroup-fa53ce87.js";import"./Switch-e7e5ad21.js";import"./editor-19399420.js";import"./highlight-4e2adf31.js";import"./Slider-fe6c58df.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-c4fe20dc.js";import"./Radio-f2722486.js";import"./Autocomplete-0c52570d.js";import"./Close-4ae4f15a.js";import"./yup-e9bc2068.js";import"./_product-66794ccf.js";import"./Card-edd4abf8.js";import"./CardHeader-28cee1fc.js";import"./LoadingButton-8c49b16f.js";import"./CircularProgress-bfa0a07e.js";import"./color-picker-dc826299.js";import"./Fab-fd2992d2.js";import"./Skeleton-462d258f.js";import"./Pagination-34cccbfd.js";import"./TablePagination-b959666e.js";import"./Rating-28d9d0d3.js";import"./DialogTitle-b5c3e23b.js";import"./DialogContent-8b63754b.js";import"./DialogActions-b339743b.js";import"./lightbox-9de8a593.js";import"./carousel-arrow-index-b86073ac.js";import"./use-carousel-f34e6c84.js";import"./markdown-926231c3.js";function b(){const a=n(),p=x(),{id:s}=p,[r,e]=m.useState({}),d=c();return m.useEffect(()=>{(async()=>{try{const{data:o,status:P}=await l.get(`products/${s}`);e(o)}catch(o){alert(o.response.data.message),d(i.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:a.themeStretch?!1:"lg",children:[t.jsx(f,{heading:"Edit",links:[{name:"Dashboard",href:i.dashboard.root},{name:"Product",href:i.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(g,{currentProduct:r})]})}function jt(){return t.jsxs(t.Fragment,{children:[t.jsx(h,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(b,{})]})}export{jt as default};
