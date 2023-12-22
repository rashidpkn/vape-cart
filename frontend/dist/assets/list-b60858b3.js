import{aN as U,c1 as L,bg as A,D as i,ev as h,bS as D,ay as p,af as t,aB as k,aw as j,ax as B,az as P,aI as E,aK as I,am as N,aL as O,aU as _,ew as W,cj as z,aW as H,bX as q,es as K,aZ as V}from"./index-b7be9608.js";import{C as X}from"./custom-breadcrumbs-30dcd104.js";import"./user-new-edit-form-31978ffe.js";import{C as Z}from"./confirm-dialog-b2383a03.js";import{u as $,g as G,e as J}from"./use-table-2cec7962.js";import{c as M,b as Q,e as Y,f as ee,d as se}from"./table-pagination-custom-97218e51.js";import{e as te,f as ae,g as oe}from"./profile-followers-692fe20f.js";import{T as le,a as ne,b as re}from"./TableContainer-e89fc8c8.js";import"./form-provider-e03139a4.js";import"./format-number-570f4cb9.js";import"./fade-295cf198.js";import"./transition-bee6630b.js";import"./image-ff410a5f.js";import"./Checkbox-3242b68d.js";import"./SwitchBase-5497b107.js";import"./Chip-6dd3051b.js";import"./Radio-0cbc0ae4.js";import"./Switch-24adfb48.js";import"./Autocomplete-85eb26b3.js";import"./Close-b9deebd5.js";import"./yup-7a986a7c.js";import"./CircularProgress-5167d8ea.js";import"./DialogTitle-cb75bc43.js";import"./DialogContent-27d79729.js";import"./Alert-d3a0eaca.js";import"./AvatarGroup-10821c94.js";import"./Fab-4d073cf5.js";import"./lightbox-d5d85287.js";const ie=[{value:"all",label:"All"},...K],de=[{id:"name",label:"Name"},{id:"phoneNumber",label:"Phone Number",width:180},{id:"company",label:"Company",width:220},{id:"role",label:"Role",width:180},{id:"status",label:"Status",width:100},{id:"",width:88}],b={name:"",role:[],status:"all"};function ce(){const e=$(),x=U(),u=L(),d=A(),[l,m]=i.useState(h),[r,o]=i.useState(b),n=he({inputData:l,comparator:G(e.order,e.orderBy),filters:r}),c=n.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),R=e.dense?52:72,f=!D(b,r),C=!n.length&&f||!n.length,g=i.useCallback((s,a)=>{e.onResetPage(),o(w=>({...w,[s]:a}))},[e]),S=i.useCallback(s=>{const a=l.filter(w=>w.id!==s);m(a),e.onUpdatePageDeleteRow(c.length)},[c.length,e,l]),T=i.useCallback(()=>{const s=l.filter(a=>!e.selected.includes(a.id));m(s),e.onUpdatePageDeleteRows({totalRows:l.length,totalRowsInPage:c.length,totalRowsFiltered:n.length})},[n.length,c.length,e,l]),v=i.useCallback(s=>{u.push(p.dashboard.user.edit(s))},[u]),F=i.useCallback((s,a)=>{g("status",a)},[g]),y=i.useCallback(()=>{o(b)},[]);return t.jsxs(t.Fragment,{children:[t.jsxs(k,{maxWidth:x.themeStretch?!1:"lg",children:[t.jsx(X,{heading:"List",links:[{name:"Dashboard",href:p.dashboard.root},{name:"User",href:p.dashboard.user.root},{name:"List"}],action:t.jsx(j,{component:B,href:p.dashboard.user.new,variant:"contained",startIcon:t.jsx(P,{icon:"mingcute:add-line"}),children:"New User"}),sx:{mb:{xs:3,md:5}}}),t.jsxs(E,{children:[t.jsx(I,{value:r.status,onChange:F,sx:{px:2.5,boxShadow:s=>`inset 0 -2px 0 0 ${N(s.palette.grey[500],.08)}`},children:ie.map(s=>t.jsx(O,{iconPosition:"end",value:s.value,label:s.label,icon:t.jsxs(_,{variant:(s.value==="all"||s.value===r.status)&&"filled"||"soft",color:s.value==="active"&&"success"||s.value==="pending"&&"warning"||s.value==="banned"&&"error"||"default",children:[s.value==="all"&&h.length,s.value==="active"&&h.filter(a=>a.status==="active").length,s.value==="pending"&&h.filter(a=>a.status==="pending").length,s.value==="banned"&&h.filter(a=>a.status==="banned").length,s.value==="rejected"&&h.filter(a=>a.status==="rejected").length]})},s.value))}),t.jsx(te,{filters:r,onFilters:g,roleOptions:W}),f&&t.jsx(ae,{filters:r,onFilters:g,onResetFilters:y,results:n.length,sx:{p:2.5,pt:0}}),t.jsxs(le,{sx:{position:"relative",overflow:"unset"},children:[t.jsx(M,{dense:e.dense,numSelected:e.selected.length,rowCount:l.length,onSelectAllRows:s=>e.onSelectAllRows(s,l.map(a=>a.id)),action:t.jsx(z,{title:"Delete",children:t.jsx(H,{color:"primary",onClick:d.onTrue,children:t.jsx(P,{icon:"solar:trash-bin-trash-bold"})})})}),t.jsx(q,{children:t.jsxs(ne,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(Q,{order:e.order,orderBy:e.orderBy,headLabel:de,rowCount:l.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:s=>e.onSelectAllRows(s,l.map(a=>a.id))}),t.jsxs(re,{children:[n.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map(s=>t.jsx(oe,{row:s,selected:e.selected.includes(s.id),onSelectRow:()=>e.onSelectRow(s.id),onDeleteRow:()=>S(s.id),onEditRow:()=>v(s.id)},s.id)),t.jsx(Y,{height:R,emptyRows:J(e.page,e.rowsPerPage,l.length)}),t.jsx(ee,{notFound:C})]})]})})]}),t.jsx(se,{count:n.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),t.jsx(Z,{open:d.value,onClose:d.onFalse,title:"Delete",content:t.jsxs(t.Fragment,{children:["Are you sure want to delete ",t.jsxs("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:t.jsx(j,{variant:"contained",color:"error",onClick:()=>{T(),d.onFalse()},children:"Delete"})})]})}function he({inputData:e,comparator:x,filters:u}){const{name:d,status:l,role:m}=u,r=e.map((o,n)=>[o,n]);return r.sort((o,n)=>{const c=x(o[0],n[0]);return c!==0?c:o[1]-n[1]}),e=r.map(o=>o[0]),d&&(e=e.filter(o=>o.name.toLowerCase().indexOf(d.toLowerCase())!==-1)),l!=="all"&&(e=e.filter(o=>o.status===l)),m.length&&(e=e.filter(o=>m.includes(o.role))),e}function We(){return t.jsxs(t.Fragment,{children:[t.jsx(V,{children:t.jsx("title",{children:" Dashboard: User List"})}),t.jsx(ce,{})]})}export{We as default};