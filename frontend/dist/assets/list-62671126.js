import{aN as U,bv as L,bi as A,D as i,d2 as h,bj as D,ay as p,af as t,aB as k,aw as j,ax as B,az as P,aI as E,aK as N,am as I,aL as O,aU as _,d3 as W,bN as z,aW as H,bp as q,d4 as K,aZ as V}from"./index-b6990d0c.js";import{C as Z}from"./custom-breadcrumbs-78515c0c.js";import"./user-new-edit-form-2bee062d.js";import{C as $}from"./confirm-dialog-6cde114c.js";import{u as G,g as J,e as M}from"./use-table-ddc11dd8.js";import{c as Q,b as X,e as Y,f as ee,d as se}from"./table-pagination-custom-55fcf396.js";import{e as te,f as ae,g as oe}from"./profile-followers-dde74609.js";import{T as le,a as ne,b as re}from"./TableContainer-676fa59e.js";import"./form-provider-7df6f027.js";import"./format-number-72303a76.js";import"./image-ebb61063.js";import"./transition-bee6630b.js";import"./Checkbox-5277b66a.js";import"./Chip-33a09df3.js";import"./Switch-604d08bf.js";import"./Autocomplete-2e785a0d.js";import"./Close-b432f479.js";import"./yup-346cade4.js";import"./CircularProgress-d226df1a.js";import"./DialogTitle-65a890c1.js";import"./DialogContent-e22d6a29.js";import"./Alert-0e4a94f9.js";import"./AvatarGroup-9edd8438.js";import"./Fab-1d6ad9d8.js";import"./lightbox-3847ebe1.js";const ie=[{value:"all",label:"All"},...K],de=[{id:"name",label:"Name"},{id:"phoneNumber",label:"Phone Number",width:180},{id:"company",label:"Company",width:220},{id:"role",label:"Role",width:180},{id:"status",label:"Status",width:100},{id:"",width:88}],w={name:"",role:[],status:"all"};function ce(){const e=G(),x=U(),m=L(),d=A(),[l,u]=i.useState(h),[r,o]=i.useState(w),n=he({inputData:l,comparator:J(e.order,e.orderBy),filters:r}),c=n.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),R=e.dense?52:72,f=!D(w,r),C=!n.length&&f||!n.length,g=i.useCallback((s,a)=>{e.onResetPage(),o(b=>({...b,[s]:a}))},[e]),T=i.useCallback(s=>{const a=l.filter(b=>b.id!==s);u(a),e.onUpdatePageDeleteRow(c.length)},[c.length,e,l]),v=i.useCallback(()=>{const s=l.filter(a=>!e.selected.includes(a.id));u(s),e.onUpdatePageDeleteRows({totalRows:l.length,totalRowsInPage:c.length,totalRowsFiltered:n.length})},[n.length,c.length,e,l]),S=i.useCallback(s=>{m.push(p.dashboard.user.edit(s))},[m]),F=i.useCallback((s,a)=>{g("status",a)},[g]),y=i.useCallback(()=>{o(w)},[]);return t.jsxs(t.Fragment,{children:[t.jsxs(k,{maxWidth:x.themeStretch?!1:"lg",children:[t.jsx(Z,{heading:"List",links:[{name:"Dashboard",href:p.dashboard.root},{name:"User",href:p.dashboard.user.root},{name:"List"}],action:t.jsx(j,{component:B,href:p.dashboard.user.new,variant:"contained",startIcon:t.jsx(P,{icon:"mingcute:add-line"}),children:"New User"}),sx:{mb:{xs:3,md:5}}}),t.jsxs(E,{children:[t.jsx(N,{value:r.status,onChange:F,sx:{px:2.5,boxShadow:s=>`inset 0 -2px 0 0 ${I(s.palette.grey[500],.08)}`},children:ie.map(s=>t.jsx(O,{iconPosition:"end",value:s.value,label:s.label,icon:t.jsxs(_,{variant:(s.value==="all"||s.value===r.status)&&"filled"||"soft",color:s.value==="active"&&"success"||s.value==="pending"&&"warning"||s.value==="banned"&&"error"||"default",children:[s.value==="all"&&h.length,s.value==="active"&&h.filter(a=>a.status==="active").length,s.value==="pending"&&h.filter(a=>a.status==="pending").length,s.value==="banned"&&h.filter(a=>a.status==="banned").length,s.value==="rejected"&&h.filter(a=>a.status==="rejected").length]})},s.value))}),t.jsx(te,{filters:r,onFilters:g,roleOptions:W}),f&&t.jsx(ae,{filters:r,onFilters:g,onResetFilters:y,results:n.length,sx:{p:2.5,pt:0}}),t.jsxs(le,{sx:{position:"relative",overflow:"unset"},children:[t.jsx(Q,{dense:e.dense,numSelected:e.selected.length,rowCount:l.length,onSelectAllRows:s=>e.onSelectAllRows(s,l.map(a=>a.id)),action:t.jsx(z,{title:"Delete",children:t.jsx(H,{color:"primary",onClick:d.onTrue,children:t.jsx(P,{icon:"solar:trash-bin-trash-bold"})})})}),t.jsx(q,{children:t.jsxs(ne,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(X,{order:e.order,orderBy:e.orderBy,headLabel:de,rowCount:l.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:s=>e.onSelectAllRows(s,l.map(a=>a.id))}),t.jsxs(re,{children:[n.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map(s=>t.jsx(oe,{row:s,selected:e.selected.includes(s.id),onSelectRow:()=>e.onSelectRow(s.id),onDeleteRow:()=>T(s.id),onEditRow:()=>S(s.id)},s.id)),t.jsx(Y,{height:R,emptyRows:M(e.page,e.rowsPerPage,l.length)}),t.jsx(ee,{notFound:C})]})]})})]}),t.jsx(se,{count:n.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),t.jsx($,{open:d.value,onClose:d.onFalse,title:"Delete",content:t.jsxs(t.Fragment,{children:["Are you sure want to delete ",t.jsxs("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:t.jsx(j,{variant:"contained",color:"error",onClick:()=>{v(),d.onFalse()},children:"Delete"})})]})}function he({inputData:e,comparator:x,filters:m}){const{name:d,status:l,role:u}=m,r=e.map((o,n)=>[o,n]);return r.sort((o,n)=>{const c=x(o[0],n[0]);return c!==0?c:o[1]-n[1]}),e=r.map(o=>o[0]),d&&(e=e.filter(o=>o.name.toLowerCase().indexOf(d.toLowerCase())!==-1)),l!=="all"&&(e=e.filter(o=>o.status===l)),u.length&&(e=e.filter(o=>u.includes(o.role))),e}function Ie(){return t.jsxs(t.Fragment,{children:[t.jsx(V,{children:t.jsx("title",{children:" Dashboard: User List"})}),t.jsx(ce,{})]})}export{Ie as default};