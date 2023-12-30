import{aN as L,bv as U,bi as D,D as r,bj as B,ay as b,af as s,aB as k,aw as P,ax as A,az as j,aI as E,aK as I,am as N,aL as O,aU as W,d2 as _,bN as z,aW as H,bp as q,d3 as K,d4 as V,d5 as Z,aZ as $}from"./index-b380339e.js";import{C as G}from"./custom-breadcrumbs-65593e42.js";import"./user-new-edit-form-fda54513.js";import{C as J}from"./confirm-dialog-78e21022.js";import{u as M,g as Q,e as X}from"./use-table-171eb8a0.js";import{c as Y,b as ee,e as se,f as te,d as ae}from"./table-pagination-custom-3ca84437.js";import{e as oe,f as ne,g as le}from"./profile-followers-9f4ac540.js";import{T as re,a as ie,b as de}from"./TableContainer-1c725f2b.js";import"./form-provider-5c0be388.js";import"./format-number-acfe5d5d.js";import"./image-cd859f0e.js";import"./transition-bee6630b.js";import"./Checkbox-58312f2b.js";import"./Chip-8d1444bd.js";import"./Switch-94fb05e0.js";import"./Autocomplete-8cf42d6f.js";import"./Close-749ec6b9.js";import"./yup-d84d32cb.js";import"./CircularProgress-d30d3386.js";import"./DialogTitle-7f222e01.js";import"./DialogContent-f3be137f.js";import"./Alert-ab5f6dea.js";import"./AvatarGroup-dd5f6523.js";import"./Fab-5e4d3007.js";import"./lightbox-158ea6c0.js";const ce=[{value:"all",label:"All"}],he=[{id:"name",label:"Name"},{id:"phoneNumber",label:"Phone Number",width:180},{id:"company",label:"Company",width:100},{id:"tradeLicense",label:"Trade License",width:180},{id:"contactPersonInTouch",label:"Contact Person In Touch",width:220},{id:"",width:88}],w={name:"",role:[],status:"all"};function me(){const e=M(),x=L(),m=U(),i=D(),[o,c]=r.useState([]),u=async()=>{const t=await K(V(Z,"users")),n=[];t.forEach(h=>{n.push(h.data())}),console.log(n),c(n)};r.useEffect(()=>{u()},[]);const[a,d]=r.useState(w),l=ue({inputData:o,comparator:Q(e.order,e.orderBy),filters:a}),g=l.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),C=e.dense?52:72,f=!B(w,a),R=!l.length&&f||!l.length,p=r.useCallback((t,n)=>{e.onResetPage(),d(h=>({...h,[t]:n}))},[e]),T=r.useCallback(t=>{const n=o.filter(h=>h.id!==t);c(n),e.onUpdatePageDeleteRow(g.length)},[g.length,e,o]),S=r.useCallback(()=>{const t=o.filter(n=>!e.selected.includes(n.id));c(t),e.onUpdatePageDeleteRows({totalRows:o.length,totalRowsInPage:g.length,totalRowsFiltered:l.length})},[l.length,g.length,e,o]),F=r.useCallback(t=>{m.push(b.dashboard.user.edit(t))},[m]),y=r.useCallback((t,n)=>{p("status",n)},[p]),v=r.useCallback(()=>{d(w)},[]);return s.jsxs(s.Fragment,{children:[s.jsxs(k,{maxWidth:x.themeStretch?!1:"lg",children:[s.jsx(G,{heading:"List",links:[{name:"Dashboard",href:b.dashboard.root},{name:"User",href:b.dashboard.user.root},{name:"List"}],action:s.jsx(P,{component:A,href:b.dashboard.user.new,variant:"contained",startIcon:s.jsx(j,{icon:"mingcute:add-line"}),children:"New User"}),sx:{mb:{xs:3,md:5}}}),s.jsxs(E,{children:[s.jsx(I,{value:a.status,onChange:y,sx:{px:2.5,boxShadow:t=>`inset 0 -2px 0 0 ${N(t.palette.grey[500],.08)}`},children:ce.map(t=>s.jsx(O,{iconPosition:"end",value:t.value,label:t.label,icon:s.jsx(W,{variant:(t.value==="all"||t.value===a.status)&&"filled"||"soft",children:t.value==="all"&&o.length})},t.value))}),s.jsx(oe,{filters:a,onFilters:p,roleOptions:_}),f&&s.jsx(ne,{filters:a,onFilters:p,onResetFilters:v,results:l.length,sx:{p:2.5,pt:0}}),s.jsxs(re,{sx:{position:"relative",overflow:"unset"},children:[s.jsx(Y,{dense:e.dense,numSelected:e.selected.length,rowCount:o.length,onSelectAllRows:t=>e.onSelectAllRows(t,o.map(n=>n.id)),action:s.jsx(z,{title:"Delete",children:s.jsx(H,{color:"primary",onClick:i.onTrue,children:s.jsx(j,{icon:"solar:trash-bin-trash-bold"})})})}),s.jsx(q,{children:s.jsxs(ie,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[s.jsx(ee,{order:e.order,orderBy:e.orderBy,headLabel:he,rowCount:o.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:t=>e.onSelectAllRows(t,o.map(n=>n.id))}),s.jsxs(de,{children:[l.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map(t=>s.jsx(le,{row:t,selected:e.selected.includes(t.id),onSelectRow:()=>e.onSelectRow(t.id),onDeleteRow:()=>T(t.id),onEditRow:()=>F(t.id)},t.id)),s.jsx(se,{height:C,emptyRows:X(e.page,e.rowsPerPage,o.length)}),s.jsx(te,{notFound:R})]})]})})]}),s.jsx(ae,{count:l.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),s.jsx(J,{open:i.value,onClose:i.onFalse,title:"Delete",content:s.jsxs(s.Fragment,{children:["Are you sure want to delete ",s.jsxs("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:s.jsx(P,{variant:"contained",color:"error",onClick:()=>{S(),i.onFalse()},children:"Delete"})})]})}function ue({inputData:e,comparator:x,filters:m}){const{name:i,status:o,role:c}=m,u=e.map((a,d)=>[a,d]);return u.sort((a,d)=>{const l=x(a[0],d[0]);return l!==0?l:a[1]-d[1]}),e=u.map(a=>a[0]),i&&(e=e.filter(a=>a.name.toLowerCase().indexOf(i.toLowerCase())!==-1)),o!=="all"&&(e=e.filter(a=>a.status===o)),c.length&&(e=e.filter(a=>c.includes(a.role))),e}function We(){return s.jsxs(s.Fragment,{children:[s.jsx($,{children:s.jsx("title",{children:" Dashboard: User List"})}),s.jsx(me,{})]})}export{We as default};
