import{ay as n,D as m,bB as c,a8 as t,aj as u,ag as i,aK as h}from"./index-45b7eda6.js";import{u as f}from"./use-params-e3e6c6ea.js";import{C as x}from"./custom-breadcrumbs-03780d8e.js";import{m as g}from"./product-details-description-0715ebaf.js";import{a as l}from"./api-2794ba32.js";import"./table-pagination-custom-993e831e.js";import"./image-314d9a54.js";import"./axios-d0e38820.js";import"./confirm-dialog-88ff0038.js";import"./form-provider-afa06415.js";import"./upload-avatar-34c21afd.js";import"./format-number-c3b6bd9b.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-d32af1f1.js";import"./Checkbox-a21bec51.js";import"./SwitchBase-bf541d8f.js";import"./Chip-0a4e5a9a.js";import"./FormControlLabel-9acac97d.js";import"./FormGroup-22b55bde.js";import"./Switch-e81e7f77.js";import"./editor-d8fc96b6.js";import"./highlight-d7d7e931.js";import"./Slider-b006ff28.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-64e1d1b9.js";import"./Radio-978469cf.js";import"./Autocomplete-aea62004.js";import"./Close-9ba30271.js";import"./yup-952ad5b9.js";import"./_product-66794ccf.js";import"./LoadingButton-a53d3493.js";import"./CircularProgress-4e39f7ad.js";import"./color-picker-db2a675f.js";import"./Fab-194baeef.js";import"./Skeleton-f4ecec01.js";import"./Pagination-c45b1f73.js";import"./TablePagination-7babd54e.js";import"./Rating-64d0f076.js";import"./DialogTitle-45af3500.js";import"./DialogContent-62c60ba2.js";import"./DialogActions-6df8dc59.js";import"./lightbox-655893f7.js";import"./carousel-arrow-index-1f1c2f9a.js";import"./use-carousel-b5e537be.js";import"./markdown-8c8672d1.js";import"./axios-4a70c6fc.js";function j(){const a=n(),s=f(),{id:p}=s,[r,e]=m.useState({}),d=c();return m.useEffect(()=>{(async()=>{try{const{data:o,status:b}=await l.get(`products/${p}`);e(o)}catch(o){alert(o.response.data.message),d(i.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:a.themeStretch?!1:"lg",children:[t.jsx(x,{heading:"Edit",links:[{name:"Dashboard",href:i.dashboard.root},{name:"Product",href:i.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(g,{currentProduct:r})]})}function ft(){return t.jsxs(t.Fragment,{children:[t.jsx(h,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(j,{})]})}export{ft as default};
