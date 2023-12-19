import{a8 as e,a9 as O,bk as v,ay as H,D as i,bj as U,aS as _,bb as N,ag as b,aj as V,ae as S,af as W,ah as T,as as z,bA as K,aH as q,be as G,aK as $}from"./index-80ed1a65.js";import{C as J}from"./custom-breadcrumbs-d8f83c0f.js";import{b as P,k as M,l as Q,m as X}from"./product-details-description-9868e0f4.js";import"./axios-82e8c727.js";import{T as Y,b as Z,a as ee,c as te}from"./table-pagination-custom-d7e34a62.js";import"./image-54d982f3.js";import{g as se}from"./_product-66794ccf.js";import{a as oe}from"./product-ee7cd9ea.js";import{u as re,g as ae}from"./use-table-1c6afd17.js";import{T as ne}from"./TablePagination-0d888b24.js";import{S as u}from"./Skeleton-9157a7f0.js";import{C as ie}from"./confirm-dialog-4c03754a.js";import{T as le,a as de,b as ce}from"./TableContainer-a0ef1236.js";import"./form-provider-d1c92717.js";import"./upload-avatar-3759b190.js";import"./format-number-ba689ea4.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-9d2cd837.js";import"./Checkbox-5d5b6085.js";import"./SwitchBase-e1bf7dff.js";import"./Chip-7541428a.js";import"./FormControlLabel-5e3136f2.js";import"./FormGroup-e2f17784.js";import"./Switch-803759d5.js";import"./editor-3d227a32.js";import"./highlight-e6757fb7.js";import"./Slider-009caab2.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-1a32c639.js";import"./Radio-9bef1a5f.js";import"./Autocomplete-d223b2ab.js";import"./Close-7086e489.js";import"./yup-6ed98c1a.js";import"./LoadingButton-f18783df.js";import"./CircularProgress-0735bdd2.js";import"./color-picker-5986b564.js";import"./Fab-79214274.js";import"./Pagination-6737d897.js";import"./Rating-618b6dfe.js";import"./DialogTitle-d8429542.js";import"./DialogContent-c0280382.js";import"./DialogActions-84e06f81.js";import"./lightbox-2a714089.js";import"./carousel-arrow-index-958331b9.js";import"./use-carousel-1963eff3.js";import"./markdown-d5f90189.js";import"./index-dc4b4252.js";function he({...o}){return e.jsx(Y,{...o,children:e.jsx(ne,{colSpan:12,children:e.jsxs(O,{spacing:3,direction:"row",alignItems:"center",children:[e.jsx(u,{sx:{borderRadius:1.5,width:48,height:48,flexShrink:0}}),e.jsx(u,{sx:{width:1,height:12}}),e.jsx(u,{sx:{width:180,height:12}}),e.jsx(u,{sx:{width:160,height:12}}),e.jsx(u,{sx:{width:140,height:12}}),e.jsx(u,{sx:{width:120,height:12}})]})})})}const me=[{id:"name",label:"Product"},{id:"createdAt",label:"Create at",width:160},{id:"inventoryType",label:"Stock",width:160},{id:"price",label:"Price",width:140},{id:"publish",label:"Publish",width:110},{id:"",width:88}],pe=[{value:"published",label:"Published"},{value:"draft",label:"Draft"}],j={name:"",publish:[],stock:[]};function ue(){const o=v(),t=re(),f=H(),[n,c]=i.useState([]),[l,g]=i.useState(j),{productsLoading:a,productsEmpty:h}=oe(),[m,y]=i.useState([]),{user:{id:k}}=U();i.useEffect(()=>{(async()=>{try{const{data:{products:r,count:p}}=await P.get("products",{params:{userId:k}});y(r)}catch{alert("error Occure")}})()},[]);const x=_();i.useEffect(()=>{m.length&&c(m)},[m]);const d=ge({inputData:n,comparator:ae(t.order,t.orderBy),filters:l}),w=d.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage),F=t.dense?60:80,C=!N(j,l);d.length;const R=i.useCallback((s,r)=>{t.onResetPage(),g(p=>({...p,[s]:r}))},[t]),A=i.useCallback(async s=>{try{const r=await P.delete(`product/${s}`),p=n.filter(L=>L.id!==s);c(p),t.onUpdatePageDeleteRow(w.length)}catch(r){alert(r.response.data.message)}},[w.length,t,n]),D=i.useCallback(async()=>{try{const s=await P.delete("products",{data:{ids:t.selected}}),r=n.filter(p=>!t.selected.includes(p.id));c(r),t.onUpdatePageDeleteRows({totalRows:n.length,totalRowsInPage:w.length,totalRowsFiltered:d.length})}catch(s){alert(s.response.data.message)}},[d.length,w.length,t,n]),B=i.useCallback(s=>{o.push(b.dashboard.product.edit(s))},[o]),E=i.useCallback(s=>{o.push(b.dashboard.product.details(s))},[o]),I=i.useCallback(()=>{g(j)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(V,{maxWidth:f.themeStretch?!1:"lg",children:[e.jsx(J,{heading:"Products",links:[{name:"Dashboard",href:b.dashboard.root},{name:"Products",href:b.dashboard.product.root}],action:e.jsx(S,{component:W,href:b.dashboard.product.new,variant:"contained",startIcon:e.jsx(T,{icon:"mingcute:add-line"}),children:"New Product"}),sx:{mb:{xs:3,md:5}}}),e.jsxs(z,{children:[e.jsx(M,{filters:l,onFilters:R,stockOptions:se,publishOptions:pe}),C&&e.jsx(Q,{filters:l,onFilters:R,onResetFilters:I,results:d.length,sx:{p:2.5,pt:0}}),e.jsxs(le,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(Z,{dense:t.dense,numSelected:t.selected.length,rowCount:n.length,onSelectAllRows:s=>t.onSelectAllRows(s,n.map(r=>r.id)),action:e.jsx(K,{title:"Delete",children:e.jsx(q,{color:"primary",onClick:x.onTrue,children:e.jsx(T,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(G,{children:e.jsxs(de,{size:t.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(ee,{order:t.order,orderBy:t.orderBy,headLabel:me,rowCount:n.length,numSelected:t.selected.length,onSort:t.onSort,onSelectAllRows:s=>t.onSelectAllRows(s,n.map(r=>r.id))}),e.jsx(ce,{children:a?[...Array(t.rowsPerPage)].map((s,r)=>e.jsx(he,{sx:{height:F}},r)):e.jsx(e.Fragment,{children:d.map(s=>e.jsx(X,{row:s,selected:t.selected.includes(s.id),onSelectRow:()=>t.onSelectRow(s.id),onDeleteRow:()=>A(s.id),onEditRow:()=>B(s.id),onViewRow:()=>E(s.id)},s.id))})})]})})]}),e.jsx(te,{count:d.length,page:t.page,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onRowsPerPageChange:t.onChangeRowsPerPage,dense:t.dense,onChangeDense:t.onChangeDense})]})]}),e.jsx(ie,{open:x.value,onClose:x.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",t.selected.length," "]})," items?"]}),action:e.jsx(S,{variant:"contained",color:"error",onClick:()=>{D(),x.onFalse()},children:"Delete"})})]})}function ge({inputData:o,comparator:t,filters:f}){const{name:n,stock:c,publish:l}=f,g=o.map((a,h)=>[a,h]);return g.sort((a,h)=>{const m=t(a[0],h[0]);return m!==0?m:a[1]-h[1]}),o=g.map(a=>a[0]),n&&(o=o.filter(a=>a.name.toLowerCase().indexOf(n.toLowerCase())!==-1)),c.length&&(o=o.filter(a=>c.includes(a.inventoryType))),l.length&&(o=o.filter(a=>l.includes(a.publish))),o}function ct(){return e.jsxs(e.Fragment,{children:[e.jsx($,{children:e.jsx("title",{children:" Dashboard: Product List"})}),e.jsx(ue,{})]})}export{ct as default};
