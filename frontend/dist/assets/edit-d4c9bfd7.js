import{aN as n,D as s,bO as c,af as t,aB as u,ay as a,aZ as h}from"./index-343c25b2.js";import{u as f}from"./use-params-9fa9607e.js";import{C as x}from"./custom-breadcrumbs-a09f3a8f.js";import{a as l}from"./api-1100fa52.js";import{l as g}from"./product-details-description-54e10a79.js";import"./axios-adafde38.js";import"./table-pagination-custom-45155400.js";import"./confirm-dialog-3bede93d.js";import"./axios-d5068281.js";import"./form-provider-f340631b.js";import"./format-number-d95089b1.js";import"./image-41f2b48c.js";import"./transition-bee6630b.js";import"./Checkbox-f307b735.js";import"./Chip-13e54ecc.js";import"./Switch-da62d3f2.js";import"./Autocomplete-391048d5.js";import"./Close-0c1be022.js";import"./yup-41876389.js";import"./CircularProgress-82521cfb.js";import"./_product-35acb143.js";import"./color-picker-81eb9eb5.js";import"./Fab-d72dfc86.js";import"./Slider-82b496fb.js";import"./DialogTitle-24a2b37c.js";import"./DialogContent-b766597b.js";import"./lightbox-a43a4ca4.js";import"./use-carousel-620f5197.js";function P(){const i=n(),e=f(),{id:m}=e,[r,p]=s.useState({}),d=c();return s.useEffect(()=>{(async()=>{try{const{data:o,status:j}=await l.get(`products/${m}`);p(o)}catch(o){alert(o.response.data.message),d(a.dashboard.product.root)}})()},[]),t.jsxs(u,{maxWidth:i.themeStretch?!1:"lg",children:[t.jsx(x,{heading:"Edit",links:[{name:"Dashboard",href:a.dashboard.root},{name:"Product",href:a.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(g,{currentProduct:r})]})}function T(){return t.jsxs(t.Fragment,{children:[t.jsx(h,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(P,{})]})}export{T as default};
