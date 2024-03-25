import{H as l,j as t,S as O,bJ as v,b4 as V,bI as U,bE as H,cc as _,bu as P,p as x,aU as z,B as C,R as W,I as S,a$ as N,b_ as $,bd as q,bB as G,W as J}from"./index-5abd2fc6.js";import{C as K}from"./custom-breadcrumbs-c7a464a8.js";import{e as M,f as Q,g as X}from"./product-details-description-d877b72b.js";import{b as Y}from"./_product-356a4fe5.js";import{u as Z,f as ee,e as te,S as m}from"./axios-a4da7e6b.js";import{u as se,g as oe}from"./use-table-2f6262a7.js";import{T as re,a as ae,c as ne,b as le,d as ie}from"./table-pagination-custom-e0cfbd9e.js";import{C as de}from"./confirm-dialog-41a0d629.js";import{T as ce,a as he,b as ue}from"./TableContainer-04c4ff2e.js";import"./form-provider-18beb9cd.js";import"./format-number-4c6f0f97.js";import"./image-76177698.js";import"./transition-bee6630b.js";import"./Checkbox-9b69a79b.js";import"./Switch-7ef21d4a.js";import"./yup-1ca7bc00.js";import"./CircularProgress-b0876ac3.js";import"./color-picker-52bc711e.js";import"./Rating-a5cecd14.js";import"./DialogTitle-886d0b88.js";import"./DialogContent-a5e57403.js";import"./lightbox-987520e4.js";import"./use-carousel-c81d7268.js";function pe(){const o=te.product.list,{data:e,isLoading:c,error:r,isValidating:i}=Z(o,ee);return l.useMemo(()=>({products:(e==null?void 0:e.products)||[],productsLoading:c,productsError:r,productsValidating:i,productsEmpty:!c&&!(e!=null&&e.products.length)}),[e==null?void 0:e.products,r,c,i])}function me({...o}){return t.jsx(re,{...o,children:t.jsx(ae,{colSpan:12,children:t.jsxs(O,{spacing:3,direction:"row",alignItems:"center",children:[t.jsx(m,{sx:{borderRadius:1.5,width:48,height:48,flexShrink:0}}),t.jsx(m,{sx:{width:1,height:12}}),t.jsx(m,{sx:{width:180,height:12}}),t.jsx(m,{sx:{width:160,height:12}}),t.jsx(m,{sx:{width:140,height:12}}),t.jsx(m,{sx:{width:120,height:12}})]})})})}const ge=[{id:"name",label:"Product"},{id:"createdAt",label:"Create at",width:160},{id:"inventoryType",label:"Stock",width:160},{id:"price",label:"Price",width:140},{id:"publish",label:"Publish",width:110},{id:"",width:88}],be=[{value:"published",label:"Published"},{value:"draft",label:"Draft"}],j={name:"",publish:[],stock:[]};function xe(){const o=v(),e=se(),c=V(),[r,i]=l.useState([]),[d,g]=l.useState(j),{productsLoading:n,productsEmpty:b}=pe(),[h,T]=l.useState([]),{user:{id:y}}=U();l.useEffect(()=>{(async()=>{try{const{data:{products:a,count:p}}=await P.get("products",{params:{userId:y}});T(a)}catch{alert("error Occure")}})()},[]);const w=H();l.useEffect(()=>{h.length&&i(h)},[h]);const u=we({inputData:r,comparator:oe(e.order,e.orderBy),filters:d}),f=u.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),k=e.dense?60:80,F=!_(j,d),R=l.useCallback((s,a)=>{e.onResetPage(),g(p=>({...p,[s]:a}))},[e]),E=l.useCallback(async s=>{try{const a=await P.delete(`products/${s}`),p=r.filter(D=>D.id!==s);i(p),e.onUpdatePageDeleteRow(f.length)}catch(a){alert(a.response.data.message)}},[f.length,e,r]),L=l.useCallback(async()=>{try{const s=await P.delete("products",{data:{ids:e.selected}}),a=r.filter(p=>!e.selected.includes(p.id));i(a),e.onUpdatePageDeleteRows({totalRows:r.length,totalRowsInPage:f.length,totalRowsFiltered:u.length})}catch(s){alert(s.response.data.message)}},[u.length,f.length,e,r]),B=l.useCallback(s=>{o.push(x.dashboard.product.edit(s))},[o]),I=l.useCallback(s=>{o.push(x.dashboard.product.details(s))},[o]),A=l.useCallback(()=>{g(j)},[]);return t.jsxs(t.Fragment,{children:[t.jsxs(z,{maxWidth:c.themeStretch?!1:"lg",children:[t.jsx(K,{heading:"Products",links:[{name:"Dashboard",href:x.dashboard.root},{name:"Products",href:x.dashboard.product.root}],action:t.jsx(C,{component:W,href:x.dashboard.product.new,variant:"contained",startIcon:t.jsx(S,{icon:"mingcute:add-line"}),children:"New Product"}),sx:{mb:{xs:3,md:5}}}),t.jsxs(N,{children:[t.jsx(M,{filters:d,onFilters:R,stockOptions:Y,publishOptions:be}),F&&t.jsx(Q,{filters:d,onFilters:R,onResetFilters:A,results:u.length,sx:{p:2.5,pt:0}}),t.jsxs(ce,{sx:{position:"relative",overflow:"unset"},children:[t.jsx(ne,{dense:e.dense,numSelected:e.selected.length,rowCount:r.length,onSelectAllRows:s=>e.onSelectAllRows(s,r.map(a=>a.id)),action:t.jsx($,{title:"Delete",children:t.jsx(q,{color:"primary",onClick:w.onTrue,children:t.jsx(S,{icon:"solar:trash-bin-trash-bold"})})})}),t.jsx(G,{children:t.jsxs(he,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(le,{order:e.order,orderBy:e.orderBy,headLabel:ge,rowCount:r.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:s=>e.onSelectAllRows(s,r.map(a=>a.id))}),t.jsx(ue,{children:n?[...Array(e.rowsPerPage)].map((s,a)=>t.jsx(me,{sx:{height:k}},a)):t.jsx(t.Fragment,{children:u.map(s=>t.jsx(X,{row:s,selected:e.selected.includes(s.id),onSelectRow:()=>e.onSelectRow(s.id),onDeleteRow:()=>E(s.id),onEditRow:()=>B(s.id),onViewRow:()=>I(s.id)},s.id))})})]})})]}),t.jsx(ie,{count:u.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),t.jsx(de,{open:w.value,onClose:w.onFalse,title:"Delete",content:t.jsxs(t.Fragment,{children:["Are you sure want to delete ",t.jsxs("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:t.jsx(C,{variant:"contained",color:"error",onClick:()=>{L(),w.onFalse()},children:"Delete"})})]})}function we({inputData:o,comparator:e,filters:c}){const{name:r,stock:i,publish:d}=c,g=o.map((n,b)=>[n,b]);return g.sort((n,b)=>{const h=e(n[0],b[0]);return h!==0?h:n[1]-b[1]}),o=g.map(n=>n[0]),r&&(o=o.filter(n=>n.name.toLowerCase().indexOf(r.toLowerCase())!==-1)),i.length&&(o=o.filter(n=>i.includes(n.inventoryType))),d.length&&(o=o.filter(n=>d.includes(n.publish))),o}function We(){return t.jsxs(t.Fragment,{children:[t.jsx(J,{children:t.jsx("title",{children:" Dashboard: Product List"})}),t.jsx(xe,{})]})}export{We as default};