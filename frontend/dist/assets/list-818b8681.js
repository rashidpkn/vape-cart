import{b3 as U,bG as L,bB as A,D as i,c$ as h,c9 as D,aQ as p,ao as t,aT as k,aO as P,aP as B,aR as j,a_ as E,b0 as I,aE as N,b1 as O,ba as _,d0 as H,bX as W,bc as z,by as $,d1 as q,bf as G}from"./index-feebbf1a.js";import{C as Q}from"./custom-breadcrumbs-d6d81004.js";import"./user-new-edit-form-c6928387.js";import{C as V}from"./confirm-dialog-b9e141ff.js";import{u as X,g as J,e as K}from"./use-table-8f54a1df.js";import{c as M,b as Y,e as Z,f as ee,d as se}from"./table-pagination-custom-80f9e74a.js";import{e as te,f as ae,g as oe}from"./profile-followers-7a02d18a.js";import{T as le,a as ne,b as re}from"./TableContainer-32aac236.js";import"./form-provider-9a490e1c.js";import"./format-number-eb8fa3ee.js";import"./image-cce2e09f.js";import"./transition-bee6630b.js";import"./Checkbox-fc4debaa.js";import"./Switch-436da68c.js";import"./yup-db689d1d.js";import"./CircularProgress-b5d22d6d.js";import"./DialogTitle-c5f67059.js";import"./DialogContent-8fffd9a5.js";import"./Alert-23e77d99.js";import"./AvatarGroup-bed1bd20.js";import"./Fab-9eff2f7a.js";import"./lightbox-eefa6ae3.js";const ie=[{value:"all",label:"All"},...q],de=[{id:"name",label:"Name"},{id:"phoneNumber",label:"Phone Number",width:180},{id:"company",label:"Company",width:220},{id:"role",label:"Role",width:180},{id:"status",label:"Status",width:100},{id:"",width:88}],w={name:"",role:[],status:"all"};function ce(){const e=X(),b=U(),g=L(),d=A(),[l,u]=i.useState(h),[r,o]=i.useState(w),n=he({inputData:l,comparator:J(e.order,e.orderBy),filters:r}),c=n.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),R=e.dense?52:72,f=!D(w,r),C=!n.length&&f||!n.length,m=i.useCallback((s,a)=>{e.onResetPage(),o(x=>({...x,[s]:a}))},[e]),T=i.useCallback(s=>{const a=l.filter(x=>x.id!==s);u(a),e.onUpdatePageDeleteRow(c.length)},[c.length,e,l]),S=i.useCallback(()=>{const s=l.filter(a=>!e.selected.includes(a.id));u(s),e.onUpdatePageDeleteRows({totalRows:l.length,totalRowsInPage:c.length,totalRowsFiltered:n.length})},[n.length,c.length,e,l]),v=i.useCallback(s=>{g.push(p.dashboard.user.edit(s))},[g]),F=i.useCallback((s,a)=>{m("status",a)},[m]),y=i.useCallback(()=>{o(w)},[]);return t.jsxs(t.Fragment,{children:[t.jsxs(k,{maxWidth:b.themeStretch?!1:"lg",children:[t.jsx(Q,{heading:"List",links:[{name:"Dashboard",href:p.dashboard.root},{name:"User",href:p.dashboard.user.root},{name:"List"}],action:t.jsx(P,{component:B,href:p.dashboard.user.new,variant:"contained",startIcon:t.jsx(j,{icon:"mingcute:add-line"}),children:"New User"}),sx:{mb:{xs:3,md:5}}}),t.jsxs(E,{children:[t.jsx(I,{value:r.status,onChange:F,sx:{px:2.5,boxShadow:s=>`inset 0 -2px 0 0 ${N(s.palette.grey[500],.08)}`},children:ie.map(s=>t.jsx(O,{iconPosition:"end",value:s.value,label:s.label,icon:t.jsxs(_,{variant:(s.value==="all"||s.value===r.status)&&"filled"||"soft",color:s.value==="active"&&"success"||s.value==="pending"&&"warning"||s.value==="banned"&&"error"||"default",children:[s.value==="all"&&h.length,s.value==="active"&&h.filter(a=>a.status==="active").length,s.value==="pending"&&h.filter(a=>a.status==="pending").length,s.value==="banned"&&h.filter(a=>a.status==="banned").length,s.value==="rejected"&&h.filter(a=>a.status==="rejected").length]})},s.value))}),t.jsx(te,{filters:r,onFilters:m,roleOptions:H}),f&&t.jsx(ae,{filters:r,onFilters:m,onResetFilters:y,results:n.length,sx:{p:2.5,pt:0}}),t.jsxs(le,{sx:{position:"relative",overflow:"unset"},children:[t.jsx(M,{dense:e.dense,numSelected:e.selected.length,rowCount:l.length,onSelectAllRows:s=>e.onSelectAllRows(s,l.map(a=>a.id)),action:t.jsx(W,{title:"Delete",children:t.jsx(z,{color:"primary",onClick:d.onTrue,children:t.jsx(j,{icon:"solar:trash-bin-trash-bold"})})})}),t.jsx($,{children:t.jsxs(ne,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(Y,{order:e.order,orderBy:e.orderBy,headLabel:de,rowCount:l.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:s=>e.onSelectAllRows(s,l.map(a=>a.id))}),t.jsxs(re,{children:[n.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map(s=>t.jsx(oe,{row:s,selected:e.selected.includes(s.id),onSelectRow:()=>e.onSelectRow(s.id),onDeleteRow:()=>T(s.id),onEditRow:()=>v(s.id)},s.id)),t.jsx(Z,{height:R,emptyRows:K(e.page,e.rowsPerPage,l.length)}),t.jsx(ee,{notFound:C})]})]})})]}),t.jsx(se,{count:n.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),t.jsx(V,{open:d.value,onClose:d.onFalse,title:"Delete",content:t.jsxs(t.Fragment,{children:["Are you sure want to delete ",t.jsxs("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:t.jsx(P,{variant:"contained",color:"error",onClick:()=>{S(),d.onFalse()},children:"Delete"})})]})}function he({inputData:e,comparator:b,filters:g}){const{name:d,status:l,role:u}=g,r=e.map((o,n)=>[o,n]);return r.sort((o,n)=>{const c=b(o[0],n[0]);return c!==0?c:o[1]-n[1]}),e=r.map(o=>o[0]),d&&(e=e.filter(o=>o.name.toLowerCase().indexOf(d.toLowerCase())!==-1)),l!=="all"&&(e=e.filter(o=>o.status===l)),u.length&&(e=e.filter(o=>u.includes(o.role))),e}function Be(){return t.jsxs(t.Fragment,{children:[t.jsx(G,{children:t.jsx("title",{children:" Dashboard: User List"})}),t.jsx(ce,{})]})}export{Be as default};