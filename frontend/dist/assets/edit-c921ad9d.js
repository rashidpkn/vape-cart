import{ay as n,D as m,bB as c,a8 as t,aj as u,ag as i,aK as h}from"./index-2747ce95.js";import{u as f}from"./use-params-b24bcfbe.js";import{C as x}from"./custom-breadcrumbs-5e602507.js";import{m as g}from"./product-details-description-553cce5b.js";import{a as l}from"./api-c89a90f9.js";import"./table-pagination-custom-ab95cd53.js";import"./image-c28d6729.js";import"./axios-9273f2b6.js";import"./confirm-dialog-57d15780.js";import"./form-provider-98fd6180.js";import"./upload-avatar-8b12ccab.js";import"./format-number-b62da4ff.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-c4d11f0f.js";import"./Checkbox-a14169da.js";import"./SwitchBase-ea1c0848.js";import"./Chip-ceb6ae81.js";import"./FormControlLabel-325b833f.js";import"./FormGroup-41743bb7.js";import"./Switch-91f52df1.js";import"./editor-e65989cf.js";import"./highlight-712e43a6.js";import"./Slider-e8a705c2.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-2d94fa3e.js";import"./Radio-34f5f9e8.js";import"./Autocomplete-5565dddd.js";import"./Close-944afd95.js";import"./yup-5be43a51.js";import"./_product-66794ccf.js";import"./LoadingButton-4972d424.js";import"./CircularProgress-a6981ecc.js";import"./color-picker-a6d47b03.js";import"./Fab-dabf8a70.js";import"./Skeleton-737c5479.js";import"./Pagination-fbaed4d2.js";import"./TablePagination-739d0f98.js";import"./Rating-974840fb.js";import"./DialogTitle-516ef45b.js";import"./DialogContent-ad7940c2.js";import"./DialogActions-64baf902.js";import"./lightbox-4fb777ad.js";import"./carousel-arrow-index-72d74ef9.js";import"./use-carousel-95254ac6.js";import"./markdown-9c91be1c.js";import"./axios-4a70c6fc.js";function j(){const a=n(),s=f(),{id:p}=s,[r,e]=m.useState({}),d=c();return m.useEffect(()=>{(async()=>{try{const{data:o,status:b}=await l.get(`products/${p}`);e(o)}catch(o){alert(o.response.data.message),d(i.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:a.themeStretch?!1:"lg",children:[t.jsx(x,{heading:"Edit",links:[{name:"Dashboard",href:i.dashboard.root},{name:"Product",href:i.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(g,{currentProduct:r})]})}function ft(){return t.jsxs(t.Fragment,{children:[t.jsx(h,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(j,{})]})}export{ft as default};
