import{aC as m,aD as u,r as e,a as p,j as t,K as h,e as x,p as a,k as f,W as g}from"./index-e20cc903.js";import{P as l}from"./product-new-edit-form-3ec44221.js";import"./product-table-toolbar-d5811913.js";import"./table-pagination-custom-6c3a31e8.js";import"./confirm-dialog-a6322c3a.js";import"./Grid-e9754da1.js";import"./TableRow-43116194.js";import"./CardHeader-7b6fa0ce.js";import"./Alert-cee1d402.js";import"./LastPage-dff6477c.js";function P(){const o=m(),d=u(),{id:i}=d,[r,n]=e.useState({}),c=p();return e.useEffect(()=>{(async()=>{try{const{data:s}=await f.get(`products/${i}`);n(s)}catch(s){alert(s.response.data.message),c(a.dashboard.product.root)}})()},[]),t.jsxs(h,{maxWidth:o.themeStretch?!1:"lg",children:[t.jsx(x,{heading:"Edit",links:[{name:"Dashboard",href:a.dashboard.root},{name:"Product",href:a.dashboard.product.root},{name:r==null?void 0:r.name}],sx:{mb:{xs:3,md:5}}}),t.jsx(l,{currentProduct:r})]})}function N(){return t.jsxs(t.Fragment,{children:[t.jsx(g,{children:t.jsx("title",{children:" Dashboard: Product Edit"})}),t.jsx(P,{})]})}export{N as default};
