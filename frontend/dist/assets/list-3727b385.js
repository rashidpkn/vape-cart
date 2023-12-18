import{a8 as e,a9 as O,bg as v,ax as H,D as n,bf as U,aP as _,b8 as N,ag as b,aj as V,ae as S,af as W,ah as T,bw as z,aF as q,bb as G,aH as K}from"./index-a747811c.js";import{C as $}from"./custom-breadcrumbs-4c4417ef.js";import{b as P,k as J,l as M,m as Q}from"./product-details-description-39fc0b61.js";import"./axios-a647e08c.js";import{T as X,b as Y,a as Z,c as ee}from"./table-pagination-custom-35112ce6.js";import"./image-13256a49.js";import{g as te}from"./_product-66794ccf.js";import{u as oe}from"./product-915cb618.js";import{u as se,g as re}from"./use-table-ff505df5.js";import{T as ae}from"./TablePagination-b959666e.js";import{S as u}from"./Skeleton-462d258f.js";import{C as ie}from"./confirm-dialog-342a8153.js";import{C as ne}from"./Card-edd4abf8.js";import{T as le,a as de,b as ce}from"./TableContainer-e899b1a5.js";import"./form-provider-d26a9747.js";import"./upload-avatar-4058b3e8.js";import"./format-number-6c2edc06.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-9e7244b8.js";import"./TextField-5c8d940a.js";import"./FormControl-0c109cff.js";import"./FormLabel-b8b56886.js";import"./Select-0e3a3519.js";import"./Menu-85627bb4.js";import"./Checkbox-c13775e7.js";import"./SwitchBase-46064381.js";import"./Chip-db514ca4.js";import"./FormControlLabel-6cf4e384.js";import"./FormGroup-fa53ce87.js";import"./Switch-e7e5ad21.js";import"./editor-19399420.js";import"./highlight-4e2adf31.js";import"./Slider-fe6c58df.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-c4fe20dc.js";import"./Radio-f2722486.js";import"./Autocomplete-0c52570d.js";import"./Close-4ae4f15a.js";import"./yup-e9bc2068.js";import"./CardHeader-28cee1fc.js";import"./LoadingButton-8c49b16f.js";import"./CircularProgress-bfa0a07e.js";import"./color-picker-dc826299.js";import"./Fab-fd2992d2.js";import"./Pagination-34cccbfd.js";import"./Rating-28d9d0d3.js";import"./DialogTitle-b5c3e23b.js";import"./DialogContent-8b63754b.js";import"./DialogActions-b339743b.js";import"./lightbox-9de8a593.js";import"./carousel-arrow-index-b86073ac.js";import"./use-carousel-f34e6c84.js";import"./markdown-926231c3.js";import"./index-573a4cf0.js";function he({...s}){return e.jsx(X,{...s,children:e.jsx(ae,{colSpan:12,children:e.jsxs(O,{spacing:3,direction:"row",alignItems:"center",children:[e.jsx(u,{sx:{borderRadius:1.5,width:48,height:48,flexShrink:0}}),e.jsx(u,{sx:{width:1,height:12}}),e.jsx(u,{sx:{width:180,height:12}}),e.jsx(u,{sx:{width:160,height:12}}),e.jsx(u,{sx:{width:140,height:12}}),e.jsx(u,{sx:{width:120,height:12}})]})})})}const me=[{id:"name",label:"Product"},{id:"createdAt",label:"Create at",width:160},{id:"inventoryType",label:"Stock",width:160},{id:"price",label:"Price",width:140},{id:"publish",label:"Publish",width:110},{id:"",width:88}],pe=[{value:"published",label:"Published"},{value:"draft",label:"Draft"}],j={name:"",publish:[],stock:[]};function ue(){const s=v(),t=se(),f=H(),[i,c]=n.useState([]),[l,g]=n.useState(j),{productsLoading:a,productsEmpty:h}=oe(),[m,y]=n.useState([]),{user:{id:k}}=U();n.useEffect(()=>{(async()=>{try{const{data:{products:r,count:p}}=await P.get("products",{params:{userId:k}});y(r)}catch{alert("error Occure")}})()},[]);const x=_();n.useEffect(()=>{m.length&&c(m)},[m]);const d=ge({inputData:i,comparator:re(t.order,t.orderBy),filters:l}),w=d.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage),F=t.dense?60:80,C=!N(j,l);d.length;const R=n.useCallback((o,r)=>{t.onResetPage(),g(p=>({...p,[o]:r}))},[t]),D=n.useCallback(async o=>{try{const r=await P.delete(`product/${o}`),p=i.filter(L=>L.id!==o);c(p),t.onUpdatePageDeleteRow(w.length)}catch(r){alert(r.response.data.message)}},[w.length,t,i]),A=n.useCallback(async()=>{try{const o=await P.delete("products",{data:{ids:t.selected}}),r=i.filter(p=>!t.selected.includes(p.id));c(r),t.onUpdatePageDeleteRows({totalRows:i.length,totalRowsInPage:w.length,totalRowsFiltered:d.length})}catch(o){alert(o.response.data.message)}},[d.length,w.length,t,i]),B=n.useCallback(o=>{s.push(b.dashboard.product.edit(o))},[s]),E=n.useCallback(o=>{s.push(b.dashboard.product.details(o))},[s]),I=n.useCallback(()=>{g(j)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(V,{maxWidth:f.themeStretch?!1:"lg",children:[e.jsx($,{heading:"Products",links:[{name:"Dashboard",href:b.dashboard.root},{name:"Products",href:b.dashboard.product.root}],action:e.jsx(S,{component:W,href:b.dashboard.product.new,variant:"contained",startIcon:e.jsx(T,{icon:"mingcute:add-line"}),children:"New Product"}),sx:{mb:{xs:3,md:5}}}),e.jsxs(ne,{children:[e.jsx(J,{filters:l,onFilters:R,stockOptions:te,publishOptions:pe}),C&&e.jsx(M,{filters:l,onFilters:R,onResetFilters:I,results:d.length,sx:{p:2.5,pt:0}}),e.jsxs(le,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(Y,{dense:t.dense,numSelected:t.selected.length,rowCount:i.length,onSelectAllRows:o=>t.onSelectAllRows(o,i.map(r=>r.id)),action:e.jsx(z,{title:"Delete",children:e.jsx(q,{color:"primary",onClick:x.onTrue,children:e.jsx(T,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(G,{children:e.jsxs(de,{size:t.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Z,{order:t.order,orderBy:t.orderBy,headLabel:me,rowCount:i.length,numSelected:t.selected.length,onSort:t.onSort,onSelectAllRows:o=>t.onSelectAllRows(o,i.map(r=>r.id))}),e.jsx(ce,{children:a?[...Array(t.rowsPerPage)].map((o,r)=>e.jsx(he,{sx:{height:F}},r)):e.jsx(e.Fragment,{children:d.map(o=>e.jsx(Q,{row:o,selected:t.selected.includes(o.id),onSelectRow:()=>t.onSelectRow(o.id),onDeleteRow:()=>D(o.id),onEditRow:()=>B(o.id),onViewRow:()=>E(o.id)},o.id))})})]})})]}),e.jsx(ee,{count:d.length,page:t.page,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onRowsPerPageChange:t.onChangeRowsPerPage,dense:t.dense,onChangeDense:t.onChangeDense})]})]}),e.jsx(ie,{open:x.value,onClose:x.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",t.selected.length," "]})," items?"]}),action:e.jsx(S,{variant:"contained",color:"error",onClick:()=>{A(),x.onFalse()},children:"Delete"})})]})}function ge({inputData:s,comparator:t,filters:f}){const{name:i,stock:c,publish:l}=f,g=s.map((a,h)=>[a,h]);return g.sort((a,h)=>{const m=t(a[0],h[0]);return m!==0?m:a[1]-h[1]}),s=g.map(a=>a[0]),i&&(s=s.filter(a=>a.name.toLowerCase().indexOf(i.toLowerCase())!==-1)),c.length&&(s=s.filter(a=>c.includes(a.inventoryType))),l.length&&(s=s.filter(a=>l.includes(a.publish))),s}function xt(){return e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx("title",{children:" Dashboard: Product List"})}),e.jsx(ue,{})]})}export{xt as default};