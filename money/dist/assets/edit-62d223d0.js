import{aN as n,D as s,bO as c,af as t,aB as u,ay as a,aZ as h}from"./index-bff73988.js";import{u as f}from"./use-params-82ec7762.js";import{C as x}from"./custom-breadcrumbs-a01c71c6.js";import{a as l}from"./api-1100fa52.js";import{l as g}from"./product-details-description-52c4fd3b.js";import"./axios-5dee5bdd.js";import"./table-pagination-custom-a0caa06c.js";import"./confirm-dialog-1364a941.js";import"./axios-d5068281.js";import"./form-provider-b10decdd.js";import"./format-number-3a840442.js";import"./image-a5fc836c.js";import"./transition-bee6630b.js";import"./Checkbox-7d5daea2.js";import"./Chip-bc4b7150.js";import"./Switch-342232e2.js";import"./Autocomplete-84526929.js";import"./Close-55f1a626.js";import"./yup-792325c7.js";import"./CircularProgress-02cfd911.js";import"./_product-35acb143.js";import"./color-picker-0a7f4fdb.js";import"./Fab-04cc631b.js";import"./Slider-cff14a6e.js";import"./DialogTitle-75467479.js";import"./DialogContent-3a5dfa37.js";import"./lightbox-7ad215c5.js";import"./use-carousel-0d9b0eac.js";function P(){const i=n(),e=f(),{id:m}=e,[r,p]=s.useState({}),d=c();return s.useEffect(()=>{(async()=>{try{const{data:o,status:j}=await l.get(`products/${m}`);p(o)}catch(o){alert(o.response.data.message),d(a.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:i.themeStretch?!1:"lg",children:[t.jsx(x,{heading:"Edit",links:[{name:"Dashboard",href:a.dashboard.root},{name:"Product",href:a.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(g,{currentProduct:r})]})}function T(){return t.jsxs(t.Fragment,{children:[t.jsx(h,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(P,{})]})}export{T as default};
