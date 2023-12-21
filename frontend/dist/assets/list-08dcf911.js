import{D as i,a9 as t,aa as O,bl as v,az as V,bk as z,aT as U,bc as H,ah as x,ak as W,af as S,ag as _,ai as T,at as N,bB as q,aI as G,bf as K,aL as M}from"./index-0c2a703b.js";import{C as $}from"./custom-breadcrumbs-2d27857c.js";import{i as J,j as Q,k as X}from"./product-details-description-5929802b.js";import{a as P}from"./api-1100fa52.js";import{T as Y,b as Z,a as ee,c as te}from"./table-pagination-custom-f46a4e0c.js";import"./image-040a56dc.js";import{g as oe}from"./_product-35acb143.js";import{u as se,f as re,e as ae}from"./axios-aeb86d58.js";import{u as ne,g as ie}from"./use-table-f0d2e9c8.js";import{T as le}from"./TablePagination-dd5e3528.js";import{S as g}from"./Skeleton-f069cb7d.js";import{C as ce}from"./confirm-dialog-ebab4555.js";import{T as de,a as he,b as pe}from"./TableContainer-e16b26c5.js";import"./form-provider-d4331558.js";import"./upload-avatar-6ed90205.js";import"./format-number-aaf23d7c.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-1edc3c71.js";import"./Checkbox-59175dc0.js";import"./SwitchBase-ae0b0f64.js";import"./Chip-3aaf9fe3.js";import"./FormControlLabel-ddbcf947.js";import"./FormGroup-ee8aef8c.js";import"./Switch-9d2e3a47.js";import"./editor-25b8a849.js";import"./highlight-5d2f9a95.js";import"./Slider-aba0d21e.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-0b7900f0.js";import"./Radio-d48e7c8e.js";import"./Autocomplete-6802852f.js";import"./Close-24ed4d34.js";import"./yup-42b968b0.js";import"./LoadingButton-2ff435f1.js";import"./CircularProgress-b0e40b76.js";import"./color-picker-ca9a2f70.js";import"./Fab-4d07d6f9.js";import"./Pagination-cdea871f.js";import"./Rating-221f89cc.js";import"./DialogTitle-74466561.js";import"./DialogContent-dff8e7c3.js";import"./DialogActions-ffa25fd1.js";import"./lightbox-c1a529aa.js";import"./carousel-arrow-index-1e4b913d.js";import"./use-carousel-ddac5ed7.js";import"./markdown-ce9000b5.js";import"./axios-d5068281.js";function ue(){const s=ae.product.list,{data:e,isLoading:d,error:r,isValidating:l}=se(s,re);return i.useMemo(()=>({products:(e==null?void 0:e.products)||[],productsLoading:d,productsError:r,productsValidating:l,productsEmpty:!d&&!(e!=null&&e.products.length)}),[e==null?void 0:e.products,r,d,l])}function me({...s}){return t.jsx(Y,{...s,children:t.jsx(le,{colSpan:12,children:t.jsxs(O,{spacing:3,direction:"row",alignItems:"center",children:[t.jsx(g,{sx:{borderRadius:1.5,width:48,height:48,flexShrink:0}}),t.jsx(g,{sx:{width:1,height:12}}),t.jsx(g,{sx:{width:180,height:12}}),t.jsx(g,{sx:{width:160,height:12}}),t.jsx(g,{sx:{width:140,height:12}}),t.jsx(g,{sx:{width:120,height:12}})]})})})}const ge=[{id:"name",label:"Product"},{id:"createdAt",label:"Create at",width:160},{id:"inventoryType",label:"Stock",width:160},{id:"price",label:"Price",width:140},{id:"publish",label:"Publish",width:110},{id:"",width:88}],be=[{value:"published",label:"Published"},{value:"draft",label:"Draft"}],j={name:"",publish:[],stock:[]};function xe(){const s=v(),e=ne(),d=V(),[r,l]=i.useState([]),[c,b]=i.useState(j),{productsLoading:n,productsEmpty:p}=ue(),[u,k]=i.useState([]),{user:{id:y}}=z();i.useEffect(()=>{(async()=>{try{const{data:{products:a,count:m}}=await P.get("products",{params:{userId:y}});k(a)}catch{alert("error Occure")}})()},[]);const f=U();i.useEffect(()=>{u.length&&l(u)},[u]);const h=fe({inputData:r,comparator:ie(e.order,e.orderBy),filters:c}),w=h.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),F=e.dense?60:80,R=!H(j,c);h.length;const C=i.useCallback((o,a)=>{e.onResetPage(),b(m=>({...m,[o]:a}))},[e]),L=i.useCallback(async o=>{try{const a=await P.delete(`product/${o}`),m=r.filter(I=>I.id!==o);l(m),e.onUpdatePageDeleteRow(w.length)}catch(a){alert(a.response.data.message)}},[w.length,e,r]),D=i.useCallback(async()=>{try{const o=await P.delete("products",{data:{ids:e.selected}}),a=r.filter(m=>!e.selected.includes(m.id));l(a),e.onUpdatePageDeleteRows({totalRows:r.length,totalRowsInPage:w.length,totalRowsFiltered:h.length})}catch(o){alert(o.response.data.message)}},[h.length,w.length,e,r]),E=i.useCallback(o=>{s.push(x.dashboard.product.edit(o))},[s]),A=i.useCallback(o=>{s.push(x.dashboard.product.details(o))},[s]),B=i.useCallback(()=>{b(j)},[]);return t.jsxs(t.Fragment,{children:[t.jsxs(W,{maxWidth:d.themeStretch?!1:"lg",children:[t.jsx($,{heading:"Products",links:[{name:"Dashboard",href:x.dashboard.root},{name:"Products",href:x.dashboard.product.root}],action:t.jsx(S,{component:_,href:x.dashboard.product.new,variant:"contained",startIcon:t.jsx(T,{icon:"mingcute:add-line"}),children:"New Product"}),sx:{mb:{xs:3,md:5}}}),t.jsxs(N,{children:[t.jsx(J,{filters:c,onFilters:C,stockOptions:oe,publishOptions:be}),R&&t.jsx(Q,{filters:c,onFilters:C,onResetFilters:B,results:h.length,sx:{p:2.5,pt:0}}),t.jsxs(de,{sx:{position:"relative",overflow:"unset"},children:[t.jsx(Z,{dense:e.dense,numSelected:e.selected.length,rowCount:r.length,onSelectAllRows:o=>e.onSelectAllRows(o,r.map(a=>a.id)),action:t.jsx(q,{title:"Delete",children:t.jsx(G,{color:"primary",onClick:f.onTrue,children:t.jsx(T,{icon:"solar:trash-bin-trash-bold"})})})}),t.jsx(K,{children:t.jsxs(he,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(ee,{order:e.order,orderBy:e.orderBy,headLabel:ge,rowCount:r.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:o=>e.onSelectAllRows(o,r.map(a=>a.id))}),t.jsx(pe,{children:n?[...Array(e.rowsPerPage)].map((o,a)=>t.jsx(me,{sx:{height:F}},a)):t.jsx(t.Fragment,{children:h.map(o=>t.jsx(X,{row:o,selected:e.selected.includes(o.id),onSelectRow:()=>e.onSelectRow(o.id),onDeleteRow:()=>L(o.id),onEditRow:()=>E(o.id),onViewRow:()=>A(o.id)},o.id))})})]})})]}),t.jsx(te,{count:h.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),t.jsx(ce,{open:f.value,onClose:f.onFalse,title:"Delete",content:t.jsxs(t.Fragment,{children:["Are you sure want to delete ",t.jsxs("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:t.jsx(S,{variant:"contained",color:"error",onClick:()=>{D(),f.onFalse()},children:"Delete"})})]})}function fe({inputData:s,comparator:e,filters:d}){const{name:r,stock:l,publish:c}=d,b=s.map((n,p)=>[n,p]);return b.sort((n,p)=>{const u=e(n[0],p[0]);return u!==0?u:n[1]-p[1]}),s=b.map(n=>n[0]),r&&(s=s.filter(n=>n.name.toLowerCase().indexOf(r.toLowerCase())!==-1)),l.length&&(s=s.filter(n=>l.includes(n.inventoryType))),c.length&&(s=s.filter(n=>c.includes(n.publish))),s}function ut(){return t.jsxs(t.Fragment,{children:[t.jsx(M,{children:t.jsx("title",{children:" Dashboard: Product List"})}),t.jsx(xe,{})]})}export{ut as default};
