import{aN as n,D as s,bO as c,af as t,aB as u,ay as a,aZ as h}from"./index-3adde4c0.js";import{u as f}from"./use-params-d3ff4e34.js";import{C as x}from"./custom-breadcrumbs-ae8c15c8.js";import{a as l}from"./api-1100fa52.js";import{l as g}from"./product-details-description-4ea34ca4.js";import"./table-pagination-custom-8adf02a6.js";import"./axios-ff73fb8d.js";import"./confirm-dialog-a3d535db.js";import"./axios-d5068281.js";import"./form-provider-8f0db5c8.js";import"./format-number-326f4e94.js";import"./image-bb749e0c.js";import"./transition-bee6630b.js";import"./Checkbox-1d27f0b0.js";import"./Chip-7162da89.js";import"./Switch-a0c0f5bb.js";import"./Autocomplete-c57031c7.js";import"./Close-03cf31c2.js";import"./yup-5b2eef19.js";import"./CircularProgress-11b9a1d7.js";import"./_product-35acb143.js";import"./color-picker-e078b46b.js";import"./Fab-9de6f140.js";import"./Slider-7b1b6dc5.js";import"./DialogTitle-fca3c765.js";import"./DialogContent-a1764ff9.js";import"./lightbox-d2d55692.js";import"./use-carousel-b037859e.js";function P(){const i=n(),e=f(),{id:m}=e,[r,p]=s.useState({}),d=c();return s.useEffect(()=>{(async()=>{try{const{data:o,status:j}=await l.get(`products/${m}`);p(o)}catch(o){alert(o.response.data.message),d(a.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:i.themeStretch?!1:"lg",children:[t.jsx(x,{heading:"Edit",links:[{name:"Dashboard",href:a.dashboard.root},{name:"Product",href:a.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(g,{currentProduct:r})]})}function T(){return t.jsxs(t.Fragment,{children:[t.jsx(h,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(P,{})]})}export{T as default};