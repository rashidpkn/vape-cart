import{b4 as U,bJ as L,bE as A,H as i,d0 as h,cc as B,p,j as t,aU as k,B as j,R as D,I as P,a$ as E,b1 as I,aL as N,b2 as _,bb as O,d1 as H,b_ as W,bd as z,bB as $,d2 as q,W as J}from"./index-5abd2fc6.js";import{C as V}from"./custom-breadcrumbs-c7a464a8.js";import"./user-new-edit-form-642fb696.js";import{C as G}from"./confirm-dialog-41a0d629.js";import{u as K,g as M,e as Q}from"./use-table-2f6262a7.js";import{c as X,b as Y,e as Z,f as ee,d as se}from"./table-pagination-custom-e0cfbd9e.js";import{e as te,f as ae,g as oe}from"./profile-followers-33b8601e.js";import{T as le,a as ne,b as re}from"./TableContainer-04c4ff2e.js";import"./form-provider-18beb9cd.js";import"./format-number-4c6f0f97.js";import"./image-76177698.js";import"./transition-bee6630b.js";import"./Checkbox-9b69a79b.js";import"./Switch-7ef21d4a.js";import"./yup-1ca7bc00.js";import"./CircularProgress-b0876ac3.js";import"./DialogTitle-886d0b88.js";import"./DialogContent-a5e57403.js";import"./Alert-40f408bc.js";import"./AvatarGroup-5dc9e81c.js";import"./Fab-9e1199f6.js";import"./lightbox-987520e4.js";const ie=[{value:"all",label:"All"},...q],de=[{id:"name",label:"Name"},{id:"phoneNumber",label:"Phone Number",width:180},{id:"company",label:"Company",width:220},{id:"role",label:"Role",width:180},{id:"status",label:"Status",width:100},{id:"",width:88}],w={name:"",role:[],status:"all"};function ce(){const e=K(),b=U(),g=L(),d=A(),[l,u]=i.useState(h),[r,o]=i.useState(w),n=he({inputData:l,comparator:M(e.order,e.orderBy),filters:r}),c=n.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),R=e.dense?52:72,f=!B(w,r),C=!n.length&&f||!n.length,m=i.useCallback((s,a)=>{e.onResetPage(),o(x=>({...x,[s]:a}))},[e]),T=i.useCallback(s=>{const a=l.filter(x=>x.id!==s);u(a),e.onUpdatePageDeleteRow(c.length)},[c.length,e,l]),S=i.useCallback(()=>{const s=l.filter(a=>!e.selected.includes(a.id));u(s),e.onUpdatePageDeleteRows({totalRows:l.length,totalRowsInPage:c.length,totalRowsFiltered:n.length})},[n.length,c.length,e,l]),v=i.useCallback(s=>{g.push(p.dashboard.user.edit(s))},[g]),F=i.useCallback((s,a)=>{m("status",a)},[m]),y=i.useCallback(()=>{o(w)},[]);return t.jsxs(t.Fragment,{children:[t.jsxs(k,{maxWidth:b.themeStretch?!1:"lg",children:[t.jsx(V,{heading:"List",links:[{name:"Dashboard",href:p.dashboard.root},{name:"User",href:p.dashboard.user.root},{name:"List"}],action:t.jsx(j,{component:D,href:p.dashboard.user.new,variant:"contained",startIcon:t.jsx(P,{icon:"mingcute:add-line"}),children:"New User"}),sx:{mb:{xs:3,md:5}}}),t.jsxs(E,{children:[t.jsx(I,{value:r.status,onChange:F,sx:{px:2.5,boxShadow:s=>`inset 0 -2px 0 0 ${N(s.palette.grey[500],.08)}`},children:ie.map(s=>t.jsx(_,{iconPosition:"end",value:s.value,label:s.label,icon:t.jsxs(O,{variant:(s.value==="all"||s.value===r.status)&&"filled"||"soft",color:s.value==="active"&&"success"||s.value==="pending"&&"warning"||s.value==="banned"&&"error"||"default",children:[s.value==="all"&&h.length,s.value==="active"&&h.filter(a=>a.status==="active").length,s.value==="pending"&&h.filter(a=>a.status==="pending").length,s.value==="banned"&&h.filter(a=>a.status==="banned").length,s.value==="rejected"&&h.filter(a=>a.status==="rejected").length]})},s.value))}),t.jsx(te,{filters:r,onFilters:m,roleOptions:H}),f&&t.jsx(ae,{filters:r,onFilters:m,onResetFilters:y,results:n.length,sx:{p:2.5,pt:0}}),t.jsxs(le,{sx:{position:"relative",overflow:"unset"},children:[t.jsx(X,{dense:e.dense,numSelected:e.selected.length,rowCount:l.length,onSelectAllRows:s=>e.onSelectAllRows(s,l.map(a=>a.id)),action:t.jsx(W,{title:"Delete",children:t.jsx(z,{color:"primary",onClick:d.onTrue,children:t.jsx(P,{icon:"solar:trash-bin-trash-bold"})})})}),t.jsx($,{children:t.jsxs(ne,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(Y,{order:e.order,orderBy:e.orderBy,headLabel:de,rowCount:l.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:s=>e.onSelectAllRows(s,l.map(a=>a.id))}),t.jsxs(re,{children:[n.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map(s=>t.jsx(oe,{row:s,selected:e.selected.includes(s.id),onSelectRow:()=>e.onSelectRow(s.id),onDeleteRow:()=>T(s.id),onEditRow:()=>v(s.id)},s.id)),t.jsx(Z,{height:R,emptyRows:Q(e.page,e.rowsPerPage,l.length)}),t.jsx(ee,{notFound:C})]})]})})]}),t.jsx(se,{count:n.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),t.jsx(G,{open:d.value,onClose:d.onFalse,title:"Delete",content:t.jsxs(t.Fragment,{children:["Are you sure want to delete ",t.jsxs("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:t.jsx(j,{variant:"contained",color:"error",onClick:()=>{S(),d.onFalse()},children:"Delete"})})]})}function he({inputData:e,comparator:b,filters:g}){const{name:d,status:l,role:u}=g,r=e.map((o,n)=>[o,n]);return r.sort((o,n)=>{const c=b(o[0],n[0]);return c!==0?c:o[1]-n[1]}),e=r.map(o=>o[0]),d&&(e=e.filter(o=>o.name.toLowerCase().indexOf(d.toLowerCase())!==-1)),l!=="all"&&(e=e.filter(o=>o.status===l)),u.length&&(e=e.filter(o=>u.includes(o.role))),e}function De(){return t.jsxs(t.Fragment,{children:[t.jsx(J,{children:t.jsx("title",{children:" Dashboard: User List"})}),t.jsx(ce,{})]})}export{De as default};
