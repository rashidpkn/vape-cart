import{aQ as m,bx as u,D as o,ck as p,ae as t,aE as h,by as x,aB as r,bw as f,b7 as b}from"./index-375c29a3.js";import{k as g}from"./product-details-description-3f101a52.js";import"./axios-c65ed644.js";import"./confirm-dialog-10365595.js";import"./_product-2b774469.js";import"./color-picker-f549cb42.js";import"./Fab-6ec5bb6e.js";import"./Slider-ece84d23.js";import"./DialogTitle-cf6b319f.js";import"./DialogContent-7b93ec9d.js";import"./lightbox-186ba03a.js";import"./carousel-arrow-index-9cf0c8c6.js";function l(){const e=m(),i=u(),{id:d}=i,[s,n]=o.useState({}),c=p();return o.useEffect(()=>{(async()=>{try{const{data:a,status:P}=await f.get(`products/${d}`);n(a)}catch(a){alert(a.response.data.message),c(r.dashboard.product.root)}})()},[]),t.jsxs(h,{maxWidth:e.themeStretch?!1:"lg",children:[t.jsx(x,{heading:"Edit",links:[{name:"Dashboard",href:r.dashboard.root},{name:"Product",href:r.dashboard.product.root},{name:s==null?void 0:s.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(g,{currentProduct:s})]})}function Q(){return t.jsxs(t.Fragment,{children:[t.jsx(b,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(l,{})]})}export{Q as default};