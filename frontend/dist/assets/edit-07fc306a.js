import{ax as n,D as m,bA as c,a8 as t,aj as u,ag as i,aH as h}from"./index-11738516.js";import{u as x}from"./use-params-b234aa43.js";import{C as f}from"./custom-breadcrumbs-1fe4acba.js";import{n as g,b as l}from"./product-details-description-d5a50a4e.js";import"./axios-21c34491.js";import"./table-pagination-custom-ac9764ec.js";import"./image-d6781c39.js";import"./confirm-dialog-ecf3e6f9.js";import"./form-provider-f96527b0.js";import"./upload-avatar-fa2c1658.js";import"./format-number-c753fa5f.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-bfb519dd.js";import"./TextField-641e8c4b.js";import"./FormControl-864e8d98.js";import"./FormLabel-1ef3c432.js";import"./Select-ec9274e6.js";import"./Menu-2f9bdcd2.js";import"./Checkbox-48ab4b6a.js";import"./SwitchBase-c89eddd3.js";import"./Chip-972c5843.js";import"./FormControlLabel-4b6d26c8.js";import"./FormGroup-4c70b305.js";import"./Switch-9770e40d.js";import"./editor-ec993798.js";import"./highlight-2bea92a4.js";import"./Slider-a7752647.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-e5687391.js";import"./Radio-f866b35a.js";import"./Autocomplete-a3087f19.js";import"./Close-b0d429b2.js";import"./yup-bca4f6dc.js";import"./_product-66794ccf.js";import"./Card-a66647c6.js";import"./CardHeader-518f5c39.js";import"./LoadingButton-1d55d601.js";import"./CircularProgress-ac93d5f1.js";import"./color-picker-e38211a8.js";import"./Fab-de4259c6.js";import"./Skeleton-c1e93ba8.js";import"./Pagination-cbfacd6d.js";import"./TablePagination-7a673b0c.js";import"./Rating-03f24606.js";import"./DialogTitle-977ce408.js";import"./DialogContent-46d96863.js";import"./DialogActions-ec25c736.js";import"./lightbox-e6ea2f5a.js";import"./carousel-arrow-index-95ddac22.js";import"./use-carousel-8338f8e3.js";import"./markdown-d75e9b9d.js";function b(){const a=n(),p=x(),{id:s}=p,[r,e]=m.useState({}),d=c();return m.useEffect(()=>{(async()=>{try{const{data:o,status:P}=await l.get(`products/${s}`);e(o)}catch(o){alert(o.response.data.message),d(i.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:a.themeStretch?!1:"lg",children:[t.jsx(f,{heading:"Edit",links:[{name:"Dashboard",href:i.dashboard.root},{name:"Product",href:i.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(g,{currentProduct:r})]})}function jt(){return t.jsxs(t.Fragment,{children:[t.jsx(h,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(b,{})]})}export{jt as default};