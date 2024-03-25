import{H as l,j as t,S as I,bK as O,b4 as v,bJ as V,bF as H,cd as U,bu as P,p as g,a as z,bx as _,B as C,R as N,I as S,a$ as W,b$ as $,bd as K,bC as q,W as G}from"./index-042f8405.js";import{e as J,f as M,g as Q}from"./product-details-description-781137a6.js";import{b as X}from"./_product-356a4fe5.js";import{u as Y,f as Z,e as ee,S as m}from"./axios-04b35fb2.js";import{u as te,g as se}from"./use-table-d628cbcd.js";import{T as oe,a as re,c as ae,b as ne,d as le}from"./table-pagination-custom-2b280fb4.js";import{C as ie}from"./confirm-dialog-d5b4a43b.js";import{T as de,a as ce,b as ue}from"./TableContainer-8b6c82e0.js";import"./form-provider-98c3fbb8.js";import"./format-number-a38d1f54.js";import"./image-691f94f6.js";import"./transition-bee6630b.js";import"./Checkbox-ca302655.js";import"./Switch-485e6c61.js";import"./yup-820ee5f7.js";import"./CircularProgress-0e9a064f.js";import"./color-picker-0bd47d3e.js";import"./Rating-08361367.js";import"./DialogTitle-ee0d12f9.js";import"./DialogContent-ff7b4e64.js";import"./lightbox-7e2b5f69.js";import"./use-carousel-f23fb92b.js";function he(){const o=ee.product.list,{data:e,isLoading:r,error:d,isValidating:i}=Y(o,Z);return l.useMemo(()=>({products:(e==null?void 0:e.products)||[],productsLoading:r,productsError:d,productsValidating:i,productsEmpty:!r&&!(e!=null&&e.products.length)}),[e==null?void 0:e.products,d,r,i])}function pe({...o}){return t.jsx(oe,{...o,children:t.jsx(re,{colSpan:12,children:t.jsxs(I,{spacing:3,direction:"row",alignItems:"center",children:[t.jsx(m,{sx:{borderRadius:1.5,width:48,height:48,flexShrink:0}}),t.jsx(m,{sx:{width:1,height:12}}),t.jsx(m,{sx:{width:180,height:12}}),t.jsx(m,{sx:{width:160,height:12}}),t.jsx(m,{sx:{width:140,height:12}}),t.jsx(m,{sx:{width:120,height:12}})]})})})}const me=[{id:"name",label:"Product"},{id:"createdAt",label:"Create at",width:160},{id:"inventoryType",label:"Stock",width:160},{id:"price",label:"Price",width:140},{id:"publish",label:"Publish",width:110},{id:"",width:88}],ge=[{value:"published",label:"Published"},{value:"draft",label:"Draft"}],j={name:"",publish:[],stock:[]};function be(){const o=O(),e=te();v();const[r,d]=l.useState([]),[i,u]=l.useState(j),{productsLoading:b,productsEmpty:n}=he(),[c,x]=l.useState([]),{user:{id:T}}=V();l.useEffect(()=>{(async()=>{try{const{data:{products:a,count:p}}=await P.get("products",{params:{userId:T}});x(a)}catch{alert("error Occure")}})()},[]);const w=H();l.useEffect(()=>{c.length&&d(c)},[c]);const h=xe({inputData:r,comparator:se(e.order,e.orderBy),filters:i}),f=h.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),y=e.dense?60:80,k=!U(j,i),R=l.useCallback((s,a)=>{e.onResetPage(),u(p=>({...p,[s]:a}))},[e]),F=l.useCallback(async s=>{try{const a=await P.delete(`products/${s}`),p=r.filter(D=>D.id!==s);d(p),e.onUpdatePageDeleteRow(f.length)}catch(a){alert(a.response.data.message)}},[f.length,e,r]),L=l.useCallback(async()=>{try{const s=await P.delete("products",{data:{ids:e.selected}}),a=r.filter(p=>!e.selected.includes(p.id));d(a),e.onUpdatePageDeleteRows({totalRows:r.length,totalRowsInPage:f.length,totalRowsFiltered:h.length})}catch(s){alert(s.response.data.message)}},[h.length,f.length,e,r]),B=l.useCallback(s=>{o.push(g.dashboard.product.edit(s))},[o]),E=l.useCallback(s=>{o.push(g.dashboard.product.details(s))},[o]),A=l.useCallback(()=>{u(j)},[]);return t.jsxs(t.Fragment,{children:[t.jsxs(z,{px:5,children:[t.jsx(_,{heading:"Products",links:[{name:"Dashboard",href:g.dashboard.root},{name:"Products",href:g.dashboard.product.root}],action:t.jsx(C,{component:N,href:g.dashboard.product.new,variant:"contained",startIcon:t.jsx(S,{icon:"mingcute:add-line"}),children:"New Product"}),sx:{mb:{xs:3,md:5}}}),t.jsxs(W,{children:[t.jsx(J,{filters:i,onFilters:R,stockOptions:X,publishOptions:ge}),k&&t.jsx(M,{filters:i,onFilters:R,onResetFilters:A,results:h.length,sx:{p:2.5,pt:0}}),t.jsxs(de,{sx:{position:"relative",overflow:"unset"},children:[t.jsx(ae,{dense:e.dense,numSelected:e.selected.length,rowCount:r.length,onSelectAllRows:s=>e.onSelectAllRows(s,r.map(a=>a.id)),action:t.jsx($,{title:"Delete",children:t.jsx(K,{color:"primary",onClick:w.onTrue,children:t.jsx(S,{icon:"solar:trash-bin-trash-bold"})})})}),t.jsx(q,{children:t.jsxs(ce,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(ne,{order:e.order,orderBy:e.orderBy,headLabel:me,rowCount:r.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:s=>e.onSelectAllRows(s,r.map(a=>a.id))}),t.jsx(ue,{children:b?[...Array(e.rowsPerPage)].map((s,a)=>t.jsx(pe,{sx:{height:y}},a)):t.jsx(t.Fragment,{children:h.map(s=>t.jsx(Q,{row:s,selected:e.selected.includes(s.id),onSelectRow:()=>e.onSelectRow(s.id),onDeleteRow:()=>F(s.id),onEditRow:()=>B(s.id),onViewRow:()=>E(s.id)},s.id))})})]})})]}),t.jsx(le,{count:h.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),t.jsx(ie,{open:w.value,onClose:w.onFalse,title:"Delete",content:t.jsxs(t.Fragment,{children:["Are you sure want to delete ",t.jsxs("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:t.jsx(C,{variant:"contained",color:"error",onClick:()=>{L(),w.onFalse()},children:"Delete"})})]})}function xe({inputData:o,comparator:e,filters:r}){const{name:d,stock:i,publish:u}=r,b=o.map((n,c)=>[n,c]);return b.sort((n,c)=>{const x=e(n[0],c[0]);return x!==0?x:n[1]-c[1]}),o=b.map(n=>n[0]),d&&(o=o.filter(n=>n.name.toLowerCase().indexOf(d.toLowerCase())!==-1)),i.length&&(o=o.filter(n=>i.includes(n.inventoryType))),u.length&&(o=o.filter(n=>u.includes(n.publish))),o}function ze(){return t.jsxs(t.Fragment,{children:[t.jsx(G,{children:t.jsx("title",{children:" Dashboard: Product List"})}),t.jsx(be,{})]})}export{ze as default};
