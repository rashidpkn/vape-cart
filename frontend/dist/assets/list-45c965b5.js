import{aH as N,b4 as V,bK as _,bF as $,H as n,bu as v,p as r,j as e,a as U,bx as W,B as R,R as z,I as c,a$ as D,bC as C,S as P,b3 as K,b1 as q,aL as G,b2 as J,bb as M,cx as Q,b$ as x,bd as g,W as X}from"./index-042f8405.js";import{C as Y}from"./confirm-dialog-d5b4a43b.js";import{u as Z,e as ee}from"./use-table-d628cbcd.js";import{c as te,b as oe,e as ae,f as le,d as se}from"./table-pagination-custom-2b280fb4.js";import{I as d,a as ne,b as ie,c as re}from"./invoice-details-0027ae92.js";import{T as ce,a as de,b as ue}from"./TableContainer-8b6c82e0.js";import"./DialogTitle-ee0d12f9.js";import"./DialogContent-ff7b4e64.js";import"./Checkbox-ca302655.js";import"./format-number-a38d1f54.js";import"./CircularProgress-0e9a064f.js";import"./custom-date-range-picker-7f11d018.js";import"./form-provider-98c3fbb8.js";import"./image-691f94f6.js";import"./transition-bee6630b.js";import"./Switch-485e6c61.js";import"./yup-820ee5f7.js";import"./address-list-dialog-1a0d4a86.js";const he=[{id:"invoiceNumber",label:"Customer"},{id:"createDate",label:"Create"},{id:"dueDate",label:"Due"},{id:"price",label:"Amount"},{id:"status",label:"Status"},{id:""}],T={name:"",service:[],status:"all",startDate:null,endDate:null};function me(){const i=N();V();const u=_(),o=Z({defaultOrderBy:"createDate"}),h=$(),[a,j]=n.useState([]),I=async()=>{try{const{data:t}=await v.get("invoice");console.log(t),j(t)}catch{}};n.useEffect(()=>{I()},[]);const[s,w]=n.useState(T),S=s.startDate&&s.endDate?s.startDate.getTime()>s.endDate.getTime():!1,y=o.dense?56:76,f=!!s.name||!!s.service.length||s.status!=="all"||!!s.startDate&&!!s.endDate,F=!a.length&&f||!a.length,m=t=>a.filter(l=>l.status===t).length,k=[{value:"all",label:"All",color:"default",count:a.length},{value:"paid",label:"Paid",color:"success",count:m("paid")},{value:"pending",label:"Pending",color:"warning",count:m("pending")},{value:"overdue",label:"Overdue",color:"error",count:m("overdue")},{value:"draft",label:"Draft",color:"default",count:m("draft")}],p=n.useCallback((t,l)=>{o.onResetPage(),w(b=>({...b,[t]:l}))},[o]),A=n.useCallback(t=>{v.delete("invoice",{data:{id:t}}).then(b=>{alert("Invoice in deleted")});const l=a.filter(b=>b.id!==t);j(l),o.onUpdatePageDeleteRow(a.length)},[a.length,o,a]),B=n.useCallback(()=>{v.delete("invoice",{data:{id:o.selected}}).then(l=>{alert("Invoice in deleted")});const t=a.filter(l=>!o.selected.includes(l.id));j(t),o.onUpdatePageDeleteRows({totalRows:a.length,totalRowsInPage:a.length,totalRowsFiltered:a.length})},[a.length,a.length,o,a]),E=n.useCallback(t=>{u.push(r.dashboard.invoice.edit(t))},[u]),L=n.useCallback(t=>{u.push(r.dashboard.invoice.details(t))},[u]),O=n.useCallback((t,l)=>{p("status",l)},[p]),H=n.useCallback(()=>{w(T)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(U,{px:5,children:[e.jsx(W,{heading:"Invoice",links:[{name:"Dashboard",href:r.dashboard.root},{name:"Invoice",href:r.dashboard.invoice.root}],action:e.jsx(R,{component:z,href:r.dashboard.invoice.new,variant:"contained",startIcon:e.jsx(c,{icon:"mingcute:add-line"}),children:"New Invoice"}),sx:{mb:{xs:3,md:5}}}),e.jsx(D,{sx:{mb:{xs:3,md:5}},children:e.jsx(C,{children:e.jsxs(P,{direction:"row",divider:e.jsx(K,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:[e.jsx(d,{title:"Total",total:0,percent:0,price:0,icon:"solar:bill-list-bold-duotone",color:i.palette.info.main}),e.jsx(d,{title:"Paid",total:0,percent:0,price:0,icon:"solar:file-check-bold-duotone",color:i.palette.success.main}),e.jsx(d,{title:"Pending",total:0,percent:0,price:0,icon:"solar:sort-by-time-bold-duotone",color:i.palette.warning.main}),e.jsx(d,{title:"Overdue",total:0,percent:0,price:0,icon:"solar:bell-bing-bold-duotone",color:i.palette.error.main}),e.jsx(d,{title:"Draft",total:0,percent:0,price:0,icon:"solar:file-corrupted-bold-duotone",color:i.palette.text.secondary})]})})}),e.jsxs(D,{children:[e.jsx(q,{value:s.status,onChange:O,sx:{px:2.5,boxShadow:`inset 0 -2px 0 0 ${G(i.palette.grey[500],.08)}`},children:k.map(t=>e.jsx(J,{value:t.value,label:t.label,iconPosition:"end",icon:e.jsx(M,{variant:(t.value==="all"||t.value===s.status)&&"filled"||"soft",color:t.color,children:"0"})},t.value))}),e.jsx(ne,{filters:s,onFilters:p,dateError:S,serviceOptions:Q.map(t=>t.name)}),f&&e.jsx(ie,{filters:s,onFilters:p,onResetFilters:H,results:a.length,sx:{p:2.5,pt:0}}),e.jsxs(ce,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(te,{dense:o.dense,numSelected:o.selected.length,rowCount:a.length,onSelectAllRows:t=>o.onSelectAllRows(t,a.map(l=>l.id)),action:e.jsxs(P,{direction:"row",children:[e.jsx(x,{title:"Sent",children:e.jsx(g,{color:"primary",children:e.jsx(c,{icon:"iconamoon:send-fill"})})}),e.jsx(x,{title:"Download",children:e.jsx(g,{color:"primary",children:e.jsx(c,{icon:"eva:download-outline"})})}),e.jsx(x,{title:"Print",children:e.jsx(g,{color:"primary",children:e.jsx(c,{icon:"solar:printer-minimalistic-bold"})})}),e.jsx(x,{title:"Delete",children:e.jsx(g,{color:"primary",onClick:h.onTrue,children:e.jsx(c,{icon:"solar:trash-bin-trash-bold"})})})]})}),e.jsx(C,{children:e.jsxs(de,{size:o.dense?"small":"medium",sx:{minWidth:800},children:[e.jsx(oe,{order:o.order,orderBy:o.orderBy,headLabel:he,rowCount:a.length,numSelected:o.selected.length,onSort:o.onSort,onSelectAllRows:t=>o.onSelectAllRows(t,a.map(l=>l.id))}),e.jsxs(ue,{children:[a.slice(o.page*o.rowsPerPage,o.page*o.rowsPerPage+o.rowsPerPage).map(t=>e.jsx(re,{row:t,selected:o.selected.includes(t.id),onSelectRow:()=>o.onSelectRow(t.id),onViewRow:()=>L(t.id),onEditRow:()=>E(t.id),onDeleteRow:()=>A(t.id)},t.id)),e.jsx(ae,{height:y,emptyRows:ee(o.page,o.rowsPerPage,a.length)}),e.jsx(le,{notFound:F})]})]})})]}),e.jsx(se,{count:a.length,page:o.page,rowsPerPage:o.rowsPerPage,onPageChange:o.onChangePage,onRowsPerPageChange:o.onChangeRowsPerPage,dense:o.dense,onChangeDense:o.onChangeDense})]})]}),e.jsx(Y,{open:h.value,onClose:h.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",o.selected.length," "]})," items?"]}),action:e.jsx(R,{variant:"contained",color:"error",onClick:()=>{B(),h.onFalse()},children:"Delete"})})]})}function Ae(){return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsx("title",{children:" Dashboard: Invoice List"})}),e.jsx(me,{})]})}export{Ae as default};
