import{az as n,D as m,bC as c,a9 as t,ak as u,ah as i,aL as h}from"./index-95441d98.js";import{u as f}from"./use-params-822a0b4f.js";import{C as x}from"./custom-breadcrumbs-90c87360.js";import{l}from"./product-details-description-a96fad28.js";import{a as g}from"./api-1100fa52.js";import"./table-pagination-custom-afdd93c7.js";import"./image-34e9d6d2.js";import"./axios-654b3ec1.js";import"./confirm-dialog-9df3e908.js";import"./form-provider-9d7168bd.js";import"./upload-avatar-46604da1.js";import"./format-number-8c343db5.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-c7796921.js";import"./Checkbox-f90e4410.js";import"./SwitchBase-0110d66e.js";import"./Chip-be6c8e1c.js";import"./FormControlLabel-43e829f8.js";import"./FormGroup-31cd2550.js";import"./Switch-baf44259.js";import"./editor-d0955889.js";import"./highlight-62f0b3a8.js";import"./Slider-e5df01cf.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-b15d1a46.js";import"./Radio-f8629575.js";import"./Autocomplete-b1ba3838.js";import"./Close-05913795.js";import"./yup-5cc1e673.js";import"./_product-35acb143.js";import"./LoadingButton-8a9c1f66.js";import"./CircularProgress-24b8e944.js";import"./color-picker-b84428a9.js";import"./Fab-248340f4.js";import"./Skeleton-bf0acf58.js";import"./Pagination-0b9e19d8.js";import"./TablePagination-2a4a28b7.js";import"./Rating-943a202e.js";import"./DialogTitle-7b6411b8.js";import"./DialogContent-b947f8e3.js";import"./DialogActions-eabcf0be.js";import"./lightbox-9ad14ae7.js";import"./carousel-arrow-index-0c8f0eb9.js";import"./use-carousel-cd62d709.js";import"./markdown-f9f4a043.js";import"./axios-d5068281.js";function P(){const a=n(),s=f(),{id:p}=s,[r,e]=m.useState({}),d=c();return m.useEffect(()=>{(async()=>{try{const{data:o,status:j}=await g.get(`products/${p}`);e(o)}catch(o){alert(o.response.data.message),d(i.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:a.themeStretch?!1:"lg",children:[t.jsx(x,{heading:"Edit",links:[{name:"Dashboard",href:i.dashboard.root},{name:"Product",href:i.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(l,{currentProduct:r})]})}function ft(){return t.jsxs(t.Fragment,{children:[t.jsx(h,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(P,{})]})}export{ft as default};