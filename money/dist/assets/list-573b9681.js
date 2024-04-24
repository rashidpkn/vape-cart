import{ae as t,bE as v,bF as I,aw as O,D as l,c0 as V,aQ as z,b$ as H,bu as U,bv as W,bw as P,aB as x,aE as _,by as N,az as R,aA as K,aC as S,aL as $,cB as q,cn as G,b4 as J,bH as M,bI as Q,bJ as X,bK as Y,cC as Z,b7 as ee}from"./index-2830f5ff.js";import{i as te,j as se,k as oe}from"./product-details-description-89b66bce.js";import{g as re}from"./_product-fc4b357e.js";import{S as p,u as ae,f as ne,e as le}from"./axios-926e08fd.js";import{g as ie}from"./utils-74d4caeb.js";import{u as ce}from"./use-table-eb0d8358.js";import{C as de}from"./confirm-dialog-796c762c.js";import{T as he}from"./TableContainer-da28f4a0.js";import"./color-picker-fd155585.js";import"./Fab-3090af40.js";import"./Slider-4511c896.js";import"./lightbox-7cc93d1c.js";import"./carousel-arrow-index-d7d0eda6.js";function ue({...o}){return t.jsx(v,{...o,children:t.jsx(I,{colSpan:12,children:t.jsxs(O,{spacing:3,direction:"row",alignItems:"center",children:[t.jsx(p,{sx:{borderRadius:1.5,width:48,height:48,flexShrink:0}}),t.jsx(p,{sx:{width:1,height:12}}),t.jsx(p,{sx:{width:180,height:12}}),t.jsx(p,{sx:{width:160,height:12}}),t.jsx(p,{sx:{width:140,height:12}}),t.jsx(p,{sx:{width:120,height:12}})]})})})}function ge(){const o=le.product.list,{data:e,isLoading:d,error:r,isValidating:i}=ae(o,ne);return l.useMemo(()=>({products:(e==null?void 0:e.products)||[],productsLoading:d,productsError:r,productsValidating:i,productsEmpty:!d&&!(e!=null&&e.products.length)}),[e==null?void 0:e.products,r,d,i])}const pe=[{id:"name",label:"Product"},{id:"createdAt",label:"Create at",width:160},{id:"inventoryType",label:"Stock",width:160},{id:"price",label:"Price",width:140},{id:"publish",label:"Publish",width:110},{id:"",width:88}],me=[{value:"published",label:"Published"},{value:"draft",label:"Draft"}],j={name:"",publish:[],stock:[]};function be(){const o=V(),e=ce(),d=z(),[r,i]=l.useState([]),[c,m]=l.useState(j),{productsLoading:n,productsEmpty:b}=ge(),[h,T]=l.useState([]);H(),l.useEffect(()=>{(async()=>{try{const{data:{products:a,count:g}}=await P.get("products");T(a)}catch{alert("error Occure")}})()},[]);const w=U();l.useEffect(()=>{h.length&&i(h)},[h]);const u=xe({inputData:r,comparator:ie(e.order,e.orderBy),filters:c}),f=u.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),y=e.dense?60:80,k=!W(j,c),C=l.useCallback((s,a)=>{e.onResetPage(),m(g=>({...g,[s]:a}))},[e]),F=l.useCallback(async s=>{try{const a=await P.delete(`products/${s}`),g=r.filter(D=>D.id!==s);i(g),e.onUpdatePageDeleteRow(f.length)}catch(a){alert(a.response.data.message)}},[f.length,e,r]),E=l.useCallback(async()=>{try{const s=await P.delete("products",{data:{ids:e.selected}}),a=r.filter(g=>!e.selected.includes(g.id));i(a),e.onUpdatePageDeleteRows({totalRows:r.length,totalRowsInPage:f.length,totalRowsFiltered:u.length})}catch(s){alert(s.response.data.message)}},[u.length,f.length,e,r]),L=l.useCallback(s=>{o.push(x.dashboard.product.edit(s))},[o]),A=l.useCallback(s=>{o.push(x.dashboard.product.details(s))},[o]),B=l.useCallback(()=>{m(j)},[]);return t.jsxs(t.Fragment,{children:[t.jsxs(_,{maxWidth:d.themeStretch?!1:"lg",children:[t.jsx(N,{heading:"Products",links:[{name:"Dashboard",href:x.dashboard.root},{name:"Products",href:x.dashboard.product.root}],action:t.jsx(R,{component:K,href:x.dashboard.product.new,variant:"contained",startIcon:t.jsx(S,{icon:"mingcute:add-line"}),children:"New Product"}),sx:{mb:{xs:3,md:5}}}),t.jsxs($,{children:[t.jsx(te,{filters:c,onFilters:C,stockOptions:re,publishOptions:me}),k&&t.jsx(se,{filters:c,onFilters:C,onResetFilters:B,results:u.length,sx:{p:2.5,pt:0}}),t.jsxs(he,{sx:{position:"relative",overflow:"unset"},children:[t.jsx(q,{dense:e.dense,numSelected:e.selected.length,rowCount:r.length,onSelectAllRows:s=>e.onSelectAllRows(s,r.map(a=>a.id)),action:t.jsx(G,{title:"Delete",children:t.jsx(J,{color:"primary",onClick:w.onTrue,children:t.jsx(S,{icon:"solar:trash-bin-trash-bold"})})})}),t.jsx(M,{children:t.jsxs(Q,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(X,{order:e.order,orderBy:e.orderBy,headLabel:pe,rowCount:r.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:s=>e.onSelectAllRows(s,r.map(a=>a.id))}),t.jsx(Y,{children:n?[...Array(e.rowsPerPage)].map((s,a)=>t.jsx(ue,{sx:{height:y}},a)):t.jsx(t.Fragment,{children:u.map(s=>t.jsx(oe,{row:s,selected:e.selected.includes(s.id),onSelectRow:()=>e.onSelectRow(s.id),onDeleteRow:()=>F(s.id),onEditRow:()=>L(s.id),onViewRow:()=>A(s.id)},s.id))})})]})})]}),t.jsx(Z,{count:u.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),t.jsx(de,{open:w.value,onClose:w.onFalse,title:"Delete",content:t.jsxs(t.Fragment,{children:["Are you sure want to delete ",t.jsxs("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:t.jsx(R,{variant:"contained",color:"error",onClick:()=>{E(),w.onFalse()},children:"Delete"})})]})}function xe({inputData:o,comparator:e,filters:d}){const{name:r,stock:i,publish:c}=d,m=o.map((n,b)=>[n,b]);return m.sort((n,b)=>{const h=e(n[0],b[0]);return h!==0?h:n[1]-b[1]}),o=m.map(n=>n[0]),r&&(o=o.filter(n=>n.name.toLowerCase().indexOf(r.toLowerCase())!==-1)),i.length&&(o=o.filter(n=>i.includes(n.inventoryType))),c.length&&(o=o.filter(n=>c.includes(n.publish))),o}function Ae(){return t.jsxs(t.Fragment,{children:[t.jsx(ee,{children:t.jsx("title",{children:" Dashboard: Product List"})}),t.jsx(be,{})]})}export{Ae as default};
