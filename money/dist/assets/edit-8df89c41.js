import{aN as n,D as s,bO as c,af as t,aB as u,ay as a,aZ as h}from"./index-ca818f1c.js";import{u as f}from"./use-params-6f6b1aec.js";import{C as x}from"./custom-breadcrumbs-115ba0ab.js";import{a as l}from"./api-3aac980b.js";import{l as g}from"./product-details-description-40e30eb7.js";import"./axios-38c60290.js";import"./table-pagination-custom-cba7aefa.js";import"./confirm-dialog-a4fd4466.js";import"./axios-e0d8a382.js";import"./form-provider-eaf5fe2d.js";import"./format-number-5cfd0eba.js";import"./image-b0db7613.js";import"./transition-bee6630b.js";import"./Checkbox-6db44c15.js";import"./Chip-b2784ef6.js";import"./Switch-439ea8bc.js";import"./Autocomplete-be5cd27c.js";import"./Close-d6869f02.js";import"./yup-0a75cf35.js";import"./CircularProgress-fe8053ef.js";import"./_product-35acb143.js";import"./color-picker-d14e6e8f.js";import"./Fab-2ae7d8a6.js";import"./Slider-d3eab358.js";import"./DialogTitle-c80c13b1.js";import"./DialogContent-0f61d9a7.js";import"./lightbox-d4eee371.js";import"./use-carousel-701f61f2.js";function P(){const i=n(),e=f(),{id:m}=e,[r,p]=s.useState({}),d=c();return s.useEffect(()=>{(async()=>{try{const{data:o,status:j}=await l.get(`products/${m}`);p(o)}catch(o){alert(o.response.data.message),d(a.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:i.themeStretch?!1:"lg",children:[t.jsx(x,{heading:"Edit",links:[{name:"Dashboard",href:a.dashboard.root},{name:"Product",href:a.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(g,{currentProduct:r})]})}function T(){return t.jsxs(t.Fragment,{children:[t.jsx(h,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(P,{})]})}export{T as default};
