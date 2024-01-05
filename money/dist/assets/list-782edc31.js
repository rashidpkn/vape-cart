import{D as l,af as t,au as v,bT as B,aO as I,bS as V,bs as z,bt as U,az as x,aC as H,bv as W,ax as R,ay as _,aA as S,aJ as N,cd as q,b2 as G,bC as J,b5 as K}from"./index-bb505ec4.js";import{a as P}from"./api-3aac980b.js";import{i as M,j as $,k as Q}from"./product-details-description-e91edbf7.js";import{g as X}from"./_product-b2bf45f1.js";import{u as Y,f as Z,e as ee,S as g}from"./axios-9e9c613c.js";import{u as te,g as se}from"./use-table-52e73dff.js";import{T as oe,a as re,c as ae,b as ne,d as le}from"./table-pagination-custom-4c8c08f8.js";import{C as ie}from"./confirm-dialog-45f1a66e.js";import{T as de,a as ce,b as he}from"./TableContainer-c51d524a.js";import"./axios-e0d8a382.js";import"./color-picker-8bcc7cd4.js";import"./Fab-ae298e8c.js";import"./Slider-440d43a7.js";import"./lightbox-3b1c01aa.js";import"./carousel-arrow-index-b8f06b7f.js";function ue(){const o=ee.product.list,{data:e,isLoading:c,error:r,isValidating:i}=Y(o,Z);return l.useMemo(()=>({products:(e==null?void 0:e.products)||[],productsLoading:c,productsError:r,productsValidating:i,productsEmpty:!c&&!(e!=null&&e.products.length)}),[e==null?void 0:e.products,r,c,i])}function pe({...o}){return t.jsx(oe,{...o,children:t.jsx(re,{colSpan:12,children:t.jsxs(v,{spacing:3,direction:"row",alignItems:"center",children:[t.jsx(g,{sx:{borderRadius:1.5,width:48,height:48,flexShrink:0}}),t.jsx(g,{sx:{width:1,height:12}}),t.jsx(g,{sx:{width:180,height:12}}),t.jsx(g,{sx:{width:160,height:12}}),t.jsx(g,{sx:{width:140,height:12}}),t.jsx(g,{sx:{width:120,height:12}})]})})})}const ge=[{id:"name",label:"Product"},{id:"createdAt",label:"Create at",width:160},{id:"inventoryType",label:"Stock",width:160},{id:"price",label:"Price",width:140},{id:"publish",label:"Publish",width:110},{id:"",width:88}],me=[{value:"published",label:"Published"},{value:"draft",label:"Draft"}],j={name:"",publish:[],stock:[]};function be(){const o=B(),e=te(),c=I(),[r,i]=l.useState([]),[d,m]=l.useState(j),{productsLoading:n,productsEmpty:b}=ue(),[h,T]=l.useState([]);V(),l.useEffect(()=>{(async()=>{try{const{data:{products:a,count:p}}=await P.get("products");T(a)}catch{alert("error Occure")}})()},[]);const w=z();l.useEffect(()=>{h.length&&i(h)},[h]);const u=xe({inputData:r,comparator:se(e.order,e.orderBy),filters:d}),f=u.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),y=e.dense?60:80,k=!U(j,d),C=l.useCallback((s,a)=>{e.onResetPage(),m(p=>({...p,[s]:a}))},[e]),F=l.useCallback(async s=>{try{const a=await P.delete(`product/${s}`),p=r.filter(O=>O.id!==s);i(p),e.onUpdatePageDeleteRow(f.length)}catch(a){alert(a.response.data.message)}},[f.length,e,r]),L=l.useCallback(async()=>{try{const s=await P.delete("products",{data:{ids:e.selected}}),a=r.filter(p=>!e.selected.includes(p.id));i(a),e.onUpdatePageDeleteRows({totalRows:r.length,totalRowsInPage:f.length,totalRowsFiltered:u.length})}catch(s){alert(s.response.data.message)}},[u.length,f.length,e,r]),A=l.useCallback(s=>{o.push(x.dashboard.product.edit(s))},[o]),D=l.useCallback(s=>{o.push(x.dashboard.product.details(s))},[o]),E=l.useCallback(()=>{m(j)},[]);return t.jsxs(t.Fragment,{children:[t.jsxs(H,{maxWidth:c.themeStretch?!1:"lg",children:[t.jsx(W,{heading:"Products",links:[{name:"Dashboard",href:x.dashboard.root},{name:"Products",href:x.dashboard.product.root}],action:t.jsx(R,{component:_,href:x.dashboard.product.new,variant:"contained",startIcon:t.jsx(S,{icon:"mingcute:add-line"}),children:"New Product"}),sx:{mb:{xs:3,md:5}}}),t.jsxs(N,{children:[t.jsx(M,{filters:d,onFilters:C,stockOptions:X,publishOptions:me}),k&&t.jsx($,{filters:d,onFilters:C,onResetFilters:E,results:u.length,sx:{p:2.5,pt:0}}),t.jsxs(de,{sx:{position:"relative",overflow:"unset"},children:[t.jsx(ae,{dense:e.dense,numSelected:e.selected.length,rowCount:r.length,onSelectAllRows:s=>e.onSelectAllRows(s,r.map(a=>a.id)),action:t.jsx(q,{title:"Delete",children:t.jsx(G,{color:"primary",onClick:w.onTrue,children:t.jsx(S,{icon:"solar:trash-bin-trash-bold"})})})}),t.jsx(J,{children:t.jsxs(ce,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(ne,{order:e.order,orderBy:e.orderBy,headLabel:ge,rowCount:r.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:s=>e.onSelectAllRows(s,r.map(a=>a.id))}),t.jsx(he,{children:n?[...Array(e.rowsPerPage)].map((s,a)=>t.jsx(pe,{sx:{height:y}},a)):t.jsx(t.Fragment,{children:u.map(s=>t.jsx(Q,{row:s,selected:e.selected.includes(s.id),onSelectRow:()=>e.onSelectRow(s.id),onDeleteRow:()=>F(s.id),onEditRow:()=>A(s.id),onViewRow:()=>D(s.id)},s.id))})})]})})]}),t.jsx(le,{count:u.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),t.jsx(ie,{open:w.value,onClose:w.onFalse,title:"Delete",content:t.jsxs(t.Fragment,{children:["Are you sure want to delete ",t.jsxs("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:t.jsx(R,{variant:"contained",color:"error",onClick:()=>{L(),w.onFalse()},children:"Delete"})})]})}function xe({inputData:o,comparator:e,filters:c}){const{name:r,stock:i,publish:d}=c,m=o.map((n,b)=>[n,b]);return m.sort((n,b)=>{const h=e(n[0],b[0]);return h!==0?h:n[1]-b[1]}),o=m.map(n=>n[0]),r&&(o=o.filter(n=>n.name.toLowerCase().indexOf(r.toLowerCase())!==-1)),i.length&&(o=o.filter(n=>i.includes(n.inventoryType))),d.length&&(o=o.filter(n=>d.includes(n.publish))),o}function Oe(){return t.jsxs(t.Fragment,{children:[t.jsx(K,{children:t.jsx("title",{children:" Dashboard: Product List"})}),t.jsx(be,{})]})}export{Oe as default};
