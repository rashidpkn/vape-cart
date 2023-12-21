import{az as L,bl as U,aT as k,D as i,ew as m,bc as A,ah as g,a9 as s,ak as D,af as j,ag as B,ai as P,at as E,av as I,ap as N,aw as O,aG as _,ex as z,bB as H,aI as W,bf as q,et as G,aL as V}from"./index-35891951.js";import{C as $}from"./custom-breadcrumbs-c1bf84df.js";import"./user-new-edit-form-0c255432.js";import{C as J}from"./confirm-dialog-b30796ef.js";import{u as K,g as M,e as Q}from"./use-table-75401b62.js";import{b as X,a as Y,d as Z,e as ee,c as te}from"./table-pagination-custom-23f95e1c.js";import{e as se,f as ae,g as oe}from"./profile-followers-80f220fa.js";import{T as le,a as re,b as ne}from"./TableContainer-4b8f8c40.js";import"./form-provider-5eb7d23e.js";import"./upload-avatar-6aae9f40.js";import"./format-number-68427273.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-26c61562.js";import"./image-c00a6bf5.js";import"./Checkbox-65c87891.js";import"./SwitchBase-8639ee58.js";import"./Chip-b7a143a7.js";import"./FormControlLabel-f7956fca.js";import"./FormGroup-0a38259b.js";import"./Switch-be088c3a.js";import"./editor-980048e5.js";import"./highlight-bd9d4c75.js";import"./Slider-e30c3ffb.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-e402658a.js";import"./Radio-4b079785.js";import"./Autocomplete-9caf1bba.js";import"./Close-2be6e8a0.js";import"./yup-8a65e45c.js";import"./LoadingButton-8f378097.js";import"./CircularProgress-63d2d197.js";import"./DialogTitle-c22e8075.js";import"./DialogContent-081eab7b.js";import"./DialogActions-cd4d2a89.js";import"./TablePagination-d451ce3b.js";import"./Alert-23827cf2.js";import"./AvatarGroup-f77c9b71.js";import"./Fab-b489dbd6.js";import"./lightbox-d0191051.js";const ie=[{value:"all",label:"All"},...G],de=[{id:"name",label:"Name"},{id:"phoneNumber",label:"Phone Number",width:180},{id:"company",label:"Company",width:220},{id:"role",label:"Role",width:180},{id:"status",label:"Status",width:100},{id:"",width:88}],b={name:"",role:[],status:"all"};function ce(){const e=K(),x=L(),u=U(),d=k(),[l,h]=i.useState(m),[n,o]=i.useState(b),r=me({inputData:l,comparator:M(e.order,e.orderBy),filters:n}),c=r.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),R=e.dense?52:72,f=!A(b,n),C=!r.length&&f||!r.length,p=i.useCallback((t,a)=>{e.onResetPage(),o(w=>({...w,[t]:a}))},[e]),T=i.useCallback(t=>{const a=l.filter(w=>w.id!==t);h(a),e.onUpdatePageDeleteRow(c.length)},[c.length,e,l]),v=i.useCallback(()=>{const t=l.filter(a=>!e.selected.includes(a.id));h(t),e.onUpdatePageDeleteRows({totalRows:l.length,totalRowsInPage:c.length,totalRowsFiltered:r.length})},[r.length,c.length,e,l]),S=i.useCallback(t=>{u.push(g.dashboard.user.edit(t))},[u]),F=i.useCallback((t,a)=>{p("status",a)},[p]),y=i.useCallback(()=>{o(b)},[]);return s.jsxs(s.Fragment,{children:[s.jsxs(D,{maxWidth:x.themeStretch?!1:"lg",children:[s.jsx($,{heading:"List",links:[{name:"Dashboard",href:g.dashboard.root},{name:"User",href:g.dashboard.user.root},{name:"List"}],action:s.jsx(j,{component:B,href:g.dashboard.user.new,variant:"contained",startIcon:s.jsx(P,{icon:"mingcute:add-line"}),children:"New User"}),sx:{mb:{xs:3,md:5}}}),s.jsxs(E,{children:[s.jsx(I,{value:n.status,onChange:F,sx:{px:2.5,boxShadow:t=>`inset 0 -2px 0 0 ${N(t.palette.grey[500],.08)}`},children:ie.map(t=>s.jsx(O,{iconPosition:"end",value:t.value,label:t.label,icon:s.jsxs(_,{variant:(t.value==="all"||t.value===n.status)&&"filled"||"soft",color:t.value==="active"&&"success"||t.value==="pending"&&"warning"||t.value==="banned"&&"error"||"default",children:[t.value==="all"&&m.length,t.value==="active"&&m.filter(a=>a.status==="active").length,t.value==="pending"&&m.filter(a=>a.status==="pending").length,t.value==="banned"&&m.filter(a=>a.status==="banned").length,t.value==="rejected"&&m.filter(a=>a.status==="rejected").length]})},t.value))}),s.jsx(se,{filters:n,onFilters:p,roleOptions:z}),f&&s.jsx(ae,{filters:n,onFilters:p,onResetFilters:y,results:r.length,sx:{p:2.5,pt:0}}),s.jsxs(le,{sx:{position:"relative",overflow:"unset"},children:[s.jsx(X,{dense:e.dense,numSelected:e.selected.length,rowCount:l.length,onSelectAllRows:t=>e.onSelectAllRows(t,l.map(a=>a.id)),action:s.jsx(H,{title:"Delete",children:s.jsx(W,{color:"primary",onClick:d.onTrue,children:s.jsx(P,{icon:"solar:trash-bin-trash-bold"})})})}),s.jsx(q,{children:s.jsxs(re,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[s.jsx(Y,{order:e.order,orderBy:e.orderBy,headLabel:de,rowCount:l.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:t=>e.onSelectAllRows(t,l.map(a=>a.id))}),s.jsxs(ne,{children:[r.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map(t=>s.jsx(oe,{row:t,selected:e.selected.includes(t.id),onSelectRow:()=>e.onSelectRow(t.id),onDeleteRow:()=>T(t.id),onEditRow:()=>S(t.id)},t.id)),s.jsx(Z,{height:R,emptyRows:Q(e.page,e.rowsPerPage,l.length)}),s.jsx(ee,{notFound:C})]})]})})]}),s.jsx(te,{count:r.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),s.jsx(J,{open:d.value,onClose:d.onFalse,title:"Delete",content:s.jsxs(s.Fragment,{children:["Are you sure want to delete ",s.jsxs("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:s.jsx(j,{variant:"contained",color:"error",onClick:()=>{v(),d.onFalse()},children:"Delete"})})]})}function me({inputData:e,comparator:x,filters:u}){const{name:d,status:l,role:h}=u,n=e.map((o,r)=>[o,r]);return n.sort((o,r)=>{const c=x(o[0],r[0]);return c!==0?c:o[1]-r[1]}),e=n.map(o=>o[0]),d&&(e=e.filter(o=>o.name.toLowerCase().indexOf(d.toLowerCase())!==-1)),l!=="all"&&(e=e.filter(o=>o.status===l)),h.length&&(e=e.filter(o=>h.includes(o.role))),e}function Ye(){return s.jsxs(s.Fragment,{children:[s.jsx(V,{children:s.jsx("title",{children:" Dashboard: User List"})}),s.jsx(ce,{})]})}export{Ye as default};