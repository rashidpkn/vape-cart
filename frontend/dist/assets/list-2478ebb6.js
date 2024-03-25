import{b4 as U,bK as L,bF as A,H as i,d1 as h,cd as k,p,j as t,aU as B,bx as D,B as j,R as E,I as P,a$ as I,b1 as N,aL as O,b2 as _,bb as H,d2 as W,b$ as $,bd as z,bC as q,d3 as K,W as V}from"./index-042f8405.js";import"./user-new-edit-form-d66ff0ee.js";import{C as G}from"./confirm-dialog-d5b4a43b.js";import{u as J,g as M,e as Q}from"./use-table-d628cbcd.js";import{c as X,b as Y,e as Z,f as ee,d as se}from"./table-pagination-custom-2b280fb4.js";import{e as te,f as ae,g as le}from"./profile-followers-083639fc.js";import{T as oe,a as ne,b as re}from"./TableContainer-8b6c82e0.js";import"./form-provider-98c3fbb8.js";import"./format-number-a38d1f54.js";import"./image-691f94f6.js";import"./transition-bee6630b.js";import"./Checkbox-ca302655.js";import"./Switch-485e6c61.js";import"./yup-820ee5f7.js";import"./CircularProgress-0e9a064f.js";import"./DialogTitle-ee0d12f9.js";import"./DialogContent-ff7b4e64.js";import"./Alert-f135122b.js";import"./AvatarGroup-5301c585.js";import"./Fab-a540494b.js";import"./lightbox-7e2b5f69.js";const ie=[{value:"all",label:"All"},...K],de=[{id:"name",label:"Name"},{id:"phoneNumber",label:"Phone Number",width:180},{id:"company",label:"Company",width:220},{id:"role",label:"Role",width:180},{id:"status",label:"Status",width:100},{id:"",width:88}],w={name:"",role:[],status:"all"};function ce(){const e=J(),b=U(),g=L(),d=A(),[o,u]=i.useState(h),[r,l]=i.useState(w),n=he({inputData:o,comparator:M(e.order,e.orderBy),filters:r}),c=n.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),R=e.dense?52:72,f=!k(w,r),C=!n.length&&f||!n.length,m=i.useCallback((s,a)=>{e.onResetPage(),l(x=>({...x,[s]:a}))},[e]),T=i.useCallback(s=>{const a=o.filter(x=>x.id!==s);u(a),e.onUpdatePageDeleteRow(c.length)},[c.length,e,o]),S=i.useCallback(()=>{const s=o.filter(a=>!e.selected.includes(a.id));u(s),e.onUpdatePageDeleteRows({totalRows:o.length,totalRowsInPage:c.length,totalRowsFiltered:n.length})},[n.length,c.length,e,o]),v=i.useCallback(s=>{g.push(p.dashboard.user.edit(s))},[g]),F=i.useCallback((s,a)=>{m("status",a)},[m]),y=i.useCallback(()=>{l(w)},[]);return t.jsxs(t.Fragment,{children:[t.jsxs(B,{maxWidth:b.themeStretch?!1:"lg",children:[t.jsx(D,{heading:"List",links:[{name:"Dashboard",href:p.dashboard.root},{name:"User",href:p.dashboard.user.root},{name:"List"}],action:t.jsx(j,{component:E,href:p.dashboard.user.new,variant:"contained",startIcon:t.jsx(P,{icon:"mingcute:add-line"}),children:"New User"}),sx:{mb:{xs:3,md:5}}}),t.jsxs(I,{children:[t.jsx(N,{value:r.status,onChange:F,sx:{px:2.5,boxShadow:s=>`inset 0 -2px 0 0 ${O(s.palette.grey[500],.08)}`},children:ie.map(s=>t.jsx(_,{iconPosition:"end",value:s.value,label:s.label,icon:t.jsxs(H,{variant:(s.value==="all"||s.value===r.status)&&"filled"||"soft",color:s.value==="active"&&"success"||s.value==="pending"&&"warning"||s.value==="banned"&&"error"||"default",children:[s.value==="all"&&h.length,s.value==="active"&&h.filter(a=>a.status==="active").length,s.value==="pending"&&h.filter(a=>a.status==="pending").length,s.value==="banned"&&h.filter(a=>a.status==="banned").length,s.value==="rejected"&&h.filter(a=>a.status==="rejected").length]})},s.value))}),t.jsx(te,{filters:r,onFilters:m,roleOptions:W}),f&&t.jsx(ae,{filters:r,onFilters:m,onResetFilters:y,results:n.length,sx:{p:2.5,pt:0}}),t.jsxs(oe,{sx:{position:"relative",overflow:"unset"},children:[t.jsx(X,{dense:e.dense,numSelected:e.selected.length,rowCount:o.length,onSelectAllRows:s=>e.onSelectAllRows(s,o.map(a=>a.id)),action:t.jsx($,{title:"Delete",children:t.jsx(z,{color:"primary",onClick:d.onTrue,children:t.jsx(P,{icon:"solar:trash-bin-trash-bold"})})})}),t.jsx(q,{children:t.jsxs(ne,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(Y,{order:e.order,orderBy:e.orderBy,headLabel:de,rowCount:o.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:s=>e.onSelectAllRows(s,o.map(a=>a.id))}),t.jsxs(re,{children:[n.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map(s=>t.jsx(le,{row:s,selected:e.selected.includes(s.id),onSelectRow:()=>e.onSelectRow(s.id),onDeleteRow:()=>T(s.id),onEditRow:()=>v(s.id)},s.id)),t.jsx(Z,{height:R,emptyRows:Q(e.page,e.rowsPerPage,o.length)}),t.jsx(ee,{notFound:C})]})]})})]}),t.jsx(se,{count:n.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),t.jsx(G,{open:d.value,onClose:d.onFalse,title:"Delete",content:t.jsxs(t.Fragment,{children:["Are you sure want to delete ",t.jsxs("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:t.jsx(j,{variant:"contained",color:"error",onClick:()=>{S(),d.onFalse()},children:"Delete"})})]})}function he({inputData:e,comparator:b,filters:g}){const{name:d,status:o,role:u}=g,r=e.map((l,n)=>[l,n]);return r.sort((l,n)=>{const c=b(l[0],n[0]);return c!==0?c:l[1]-n[1]}),e=r.map(l=>l[0]),d&&(e=e.filter(l=>l.name.toLowerCase().indexOf(d.toLowerCase())!==-1)),o!=="all"&&(e=e.filter(l=>l.status===o)),u.length&&(e=e.filter(l=>u.includes(l.role))),e}function Be(){return t.jsxs(t.Fragment,{children:[t.jsx(V,{children:t.jsx("title",{children:" Dashboard: User List"})}),t.jsx(ce,{})]})}export{Be as default};
