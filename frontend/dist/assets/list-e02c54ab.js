import{ab as M,aS as U,aT as _,az as $,F as l,aC as p,an as m,j as e,B as q,aH as G,af as R,ag as C,S as y,ak as J,ad as K,au as Q,aV as X,aM as g,aN as x,ao as b,ah as Y,ai as Z,aj as ee,ba as te,bb as ae,aW as oe,al as se,W as le}from"./index-ee6981cf.js";import{C as ne}from"./confirm-dialog-143c7884.js";import{u as re,e as ie}from"./use-table-1e89badd.js";import{I as i,a as ce,b as de}from"./invoice-details-9cef71d5.js";import{T as ue,a as he}from"./Tabs-33514a94.js";import{T as pe}from"./TableContainer-223c9e98.js";import"./DialogTitle-d430fcf5.js";import"./DialogContent-7d6b9abe.js";import"./CircularProgress-f7b8589f.js";import"./form-provider-c207369f.js";import"./file-thumbnail-301959b2.js";import"./fade-295cf198.js";import"./transition-bee6630b.js";import"./image-4aa132da.js";import"./Radio-41c8777c.js";import"./address-list-dialog-a762b171.js";import"./yup-2083d4d1.js";const me=[{id:"invoiceNumber",label:"Customer"},{id:"createDate",label:"Create"},{id:"dueDate",label:"Due"},{id:"price",label:"Amount"},{id:"status",label:"Status"},{id:""}],S={name:"",service:[],status:"all",startDate:null,endDate:null};function ge(){const r=M(),c=U(),a=re({defaultOrderBy:"createDate"}),d=_(),{user:{id:T}}=$(),[f,I]=l.useState([]),[w,F]=l.useState([]),[o,j]=l.useState([]),k=async()=>{try{const{data:{products:t}}=await p.get("products",{params:{userId:T,perPage:100}});F(t.map(s=>s.id))}catch{alert("Error occurred while fetching products.")}},A=async()=>{try{const{data:t}=await p.get("invoice");I(t)}catch{}};l.useEffect(()=>{A(),k()},[]),l.useEffect(()=>{j(f.filter(t=>t.items.some(s=>w.includes(s.id))).reverse())},[f,w]);const[n,P]=l.useState(S);n.startDate&&n.endDate&&n.startDate.getTime()>n.endDate.getTime();const B=a.dense?56:76,D=!!n.name||!!n.service.length||n.status!=="all"||!!n.startDate&&!!n.endDate,E=!o.length&&D||!o.length,u=t=>o.filter(s=>s.status===t).length,L=[{value:"all",label:"All",color:"default",count:o.length},{value:"paid",label:"Paid",color:"success",count:u("paid")},{value:"pending",label:"Pending",color:"warning",count:u("pending")},{value:"overdue",label:"Overdue",color:"error",count:u("overdue")},{value:"draft",label:"Draft",color:"default",count:u("draft")}],v=l.useCallback((t,s)=>{a.onResetPage(),P(h=>({...h,[t]:s}))},[a]),H=l.useCallback(t=>{p.delete("invoice",{data:{id:t}}).then(h=>{alert("Invoice in deleted")});const s=o.filter(h=>h.id!==t);j(s),a.onUpdatePageDeleteRow(o.length)},[o.length,a,o]),V=l.useCallback(()=>{p.delete("invoice",{data:{id:a.selected}}).then(s=>{alert("Invoice in deleted")});const t=o.filter(s=>!a.selected.includes(s.id));j(t),a.onUpdatePageDeleteRows({totalRows:o.length,totalRowsInPage:o.length,totalRowsFiltered:o.length})},[o.length,o.length,a,o]),N=l.useCallback(t=>{c.push(m.dashboard.invoice.edit(t))},[c]),O=l.useCallback(t=>{c.push(m.dashboard.invoice.details(t))},[c]),W=l.useCallback((t,s)=>{v("status",s)},[v]),z=l.useCallback(()=>{P(S)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(q,{px:5,children:[e.jsx(G,{heading:"Invoice",links:[{name:"Dashboard",href:m.dashboard.root},{name:"Invoice",href:m.dashboard.invoice.root}],sx:{mb:{xs:3,md:5}}}),e.jsx(R,{sx:{mb:{xs:3,md:5}},children:e.jsx(C,{children:e.jsxs(y,{direction:"row",divider:e.jsx(J,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:[e.jsx(i,{title:"Total",total:0,percent:0,price:0,icon:"solar:bill-list-bold-duotone",color:r.palette.info.main}),e.jsx(i,{title:"Paid",total:0,percent:0,price:0,icon:"solar:file-check-bold-duotone",color:r.palette.success.main}),e.jsx(i,{title:"Pending",total:0,percent:0,price:0,icon:"solar:sort-by-time-bold-duotone",color:r.palette.warning.main}),e.jsx(i,{title:"Overdue",total:0,percent:0,price:0,icon:"solar:bell-bing-bold-duotone",color:r.palette.error.main}),e.jsx(i,{title:"Draft",total:0,percent:0,price:0,icon:"solar:file-corrupted-bold-duotone",color:r.palette.text.secondary})]})})}),e.jsxs(R,{children:[e.jsx(ue,{value:n.status,onChange:W,sx:{px:2.5,boxShadow:`inset 0 -2px 0 0 ${K(r.palette.grey[500],.08)}`},children:L.map(t=>e.jsx(he,{value:t.value,label:t.label,iconPosition:"end",icon:e.jsx(Q,{variant:(t.value==="all"||t.value===n.status)&&"filled"||"soft",color:t.color,children:"0"})},t.value))}),D&&e.jsx(ce,{filters:n,onFilters:v,onResetFilters:z,results:o.length,sx:{p:2.5,pt:0}}),e.jsxs(pe,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(X,{dense:a.dense,numSelected:a.selected.length,rowCount:o.length,onSelectAllRows:t=>a.onSelectAllRows(t,o.map(s=>s.id)),action:e.jsxs(y,{direction:"row",children:[e.jsx(g,{title:"Sent",children:e.jsx(x,{color:"primary",children:e.jsx(b,{icon:"iconamoon:send-fill"})})}),e.jsx(g,{title:"Download",children:e.jsx(x,{color:"primary",children:e.jsx(b,{icon:"eva:download-outline"})})}),e.jsx(g,{title:"Print",children:e.jsx(x,{color:"primary",children:e.jsx(b,{icon:"solar:printer-minimalistic-bold"})})}),e.jsx(g,{title:"Delete",children:e.jsx(x,{color:"primary",onClick:d.onTrue,children:e.jsx(b,{icon:"solar:trash-bin-trash-bold"})})})]})}),e.jsx(C,{children:e.jsxs(Y,{size:a.dense?"small":"medium",sx:{minWidth:800},children:[e.jsx(Z,{order:a.order,orderBy:a.orderBy,headLabel:me,rowCount:o.length,numSelected:a.selected.length,onSort:a.onSort,onSelectAllRows:t=>a.onSelectAllRows(t,o.map(s=>s.id))}),e.jsxs(ee,{children:[o.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(t=>e.jsx(de,{row:t,selected:a.selected.includes(t.id),onSelectRow:()=>a.onSelectRow(t.id),onViewRow:()=>O(t.id),onEditRow:()=>N(t.id),onDeleteRow:()=>H(t.id)},t.id)),e.jsx(te,{height:B,emptyRows:ie(a.page,a.rowsPerPage,o.length)}),e.jsx(ae,{notFound:E})]})]})})]}),e.jsx(oe,{count:o.length,page:a.page,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage,dense:a.dense,onChangeDense:a.onChangeDense})]})]}),e.jsx(ne,{open:d.value,onClose:d.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",a.selected.length," "]})," items?"]}),action:e.jsx(se,{variant:"contained",color:"error",onClick:()=>{V(),d.onFalse()},children:"Delete"})})]})}function Be(){return e.jsxs(e.Fragment,{children:[e.jsx(le,{children:e.jsx("title",{children:" Dashboard: Invoice List"})}),e.jsx(ge,{})]})}export{Be as default};
