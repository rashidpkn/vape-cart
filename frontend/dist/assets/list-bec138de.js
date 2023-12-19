import{a6 as N,ay as H,bk as _,aS as V,D as c,c2 as W,ag as g,a8 as e,aj as z,ae as S,af as U,ah as x,as as y,be as I,a9 as F,aw as K,au as $,ao as q,av as G,aF as J,c3 as M,bA as w,aH as C,c1 as P,aK as Q}from"./index-80ed1a65.js";import{C as X}from"./confirm-dialog-4c03754a.js";import{C as Y}from"./custom-breadcrumbs-d8f83c0f.js";import{u as Z,g as ee,e as te}from"./use-table-1c6afd17.js";import{b as oe,a as ae,d as se,e as re,c as le}from"./table-pagination-custom-d7e34a62.js";import{I as b,a as ne,b as ie}from"./invoice-details-776c5160.js";import{T as ce,a as de,b as me}from"./TableContainer-a0ef1236.js";import"./DialogTitle-d8429542.js";import"./DialogContent-c0280382.js";import"./DialogActions-84e06f81.js";import"./TablePagination-0d888b24.js";import"./Checkbox-5d5b6085.js";import"./SwitchBase-e1bf7dff.js";import"./format-number-ba689ea4.js";import"./CircularProgress-0735bdd2.js";import"./DatePicker-e0782408.js";import"./ListItem-e96270a3.js";import"./ListItemSecondaryAction-cac6c617.js";import"./Chip-7541428a.js";import"./custom-date-range-picker-e6e02322.js";import"./form-provider-d1c92717.js";import"./upload-avatar-3759b190.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-9d2cd837.js";import"./image-54d982f3.js";import"./FormControlLabel-5e3136f2.js";import"./FormGroup-e2f17784.js";import"./Switch-803759d5.js";import"./editor-3d227a32.js";import"./highlight-e6757fb7.js";import"./Slider-009caab2.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-1a32c639.js";import"./Radio-9bef1a5f.js";import"./Autocomplete-d223b2ab.js";import"./Close-7086e489.js";import"./yup-6ed98c1a.js";import"./address-list-dialog-b4aa831d.js";import"./LoadingButton-f18783df.js";const ue=[{id:"invoiceNumber",label:"Customer"},{id:"createDate",label:"Create"},{id:"dueDate",label:"Due"},{id:"price",label:"Amount"},{id:"sent",label:"Sent",align:"center"},{id:"status",label:"Status"},{id:""}],k={name:"",service:[],status:"all",startDate:null,endDate:null};function pe(){const s=N(),T=H(),m=_(),t=Z({defaultOrderBy:"createDate"}),d=V(),[l,u]=c.useState(W),[r,p]=c.useState(k),h=r.startDate&&r.endDate?r.startDate.getTime()>r.endDate.getTime():!1,a=he({inputData:l,comparator:ee(t.order,t.orderBy),filters:r,dateError:h}),i=a.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage),f=t.dense?56:76,R=!!r.name||!!r.service.length||r.status!=="all"||!!r.startDate&&!!r.endDate,A=!a.length&&R||!a.length,j=o=>l.filter(n=>n.status===o).length,L=[{value:"all",label:"All",color:"default",count:l.length},{value:"paid",label:"Paid",color:"success",count:j("paid")},{value:"pending",label:"Pending",color:"warning",count:j("pending")},{value:"overdue",label:"Overdue",color:"error",count:j("overdue")},{value:"draft",label:"Draft",color:"default",count:j("draft")}],v=c.useCallback((o,n)=>{t.onResetPage(),p(D=>({...D,[o]:n}))},[t]);c.useCallback(o=>{const n=l.filter(D=>D.id!==o);u(n),t.onUpdatePageDeleteRow(i.length)},[i.length,t,l]);const B=c.useCallback(()=>{const o=l.filter(n=>!t.selected.includes(n.id));u(o),t.onUpdatePageDeleteRows({totalRows:l.length,totalRowsInPage:i.length,totalRowsFiltered:a.length})},[a.length,i.length,t,l]);c.useCallback(o=>{m.push(g.dashboard.invoice.edit(o))},[m]),c.useCallback(o=>{m.push(g.dashboard.invoice.details(o))},[m]);const E=c.useCallback((o,n)=>{v("status",n)},[v]),O=c.useCallback(()=>{p(k)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{maxWidth:T.themeStretch?!1:"lg",children:[e.jsx(Y,{heading:"Invoice",links:[{name:"Dashboard",href:g.dashboard.root},{name:"Invoice",href:g.dashboard.invoice.root}],action:e.jsx(S,{component:U,href:g.dashboard.invoice.new,variant:"contained",startIcon:e.jsx(x,{icon:"mingcute:add-line"}),children:"New Invoice"}),sx:{mb:{xs:3,md:5}}}),e.jsx(y,{sx:{mb:{xs:3,md:5}},children:e.jsx(I,{children:e.jsxs(F,{direction:"row",divider:e.jsx(K,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:[e.jsx(b,{title:"Total",total:0,percent:0,price:0,icon:"solar:bill-list-bold-duotone",color:s.palette.info.main}),e.jsx(b,{title:"Paid",total:0,percent:0,price:0,icon:"solar:file-check-bold-duotone",color:s.palette.success.main}),e.jsx(b,{title:"Pending",total:0,percent:0,price:0,icon:"solar:sort-by-time-bold-duotone",color:s.palette.warning.main}),e.jsx(b,{title:"Overdue",total:0,percent:0,price:0,icon:"solar:bell-bing-bold-duotone",color:s.palette.error.main}),e.jsx(b,{title:"Draft",total:0,percent:0,price:0,icon:"solar:file-corrupted-bold-duotone",color:s.palette.text.secondary})]})})}),e.jsxs(y,{children:[e.jsx($,{value:r.status,onChange:E,sx:{px:2.5,boxShadow:`inset 0 -2px 0 0 ${q(s.palette.grey[500],.08)}`},children:L.map(o=>e.jsx(G,{value:o.value,label:o.label,iconPosition:"end",icon:e.jsx(J,{variant:(o.value==="all"||o.value===r.status)&&"filled"||"soft",color:o.color,children:"0"})},o.value))}),e.jsx(ne,{filters:r,onFilters:v,dateError:h,serviceOptions:M.map(o=>o.name)}),R&&e.jsx(ie,{filters:r,onFilters:v,onResetFilters:O,results:a.length,sx:{p:2.5,pt:0}}),e.jsxs(ce,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(oe,{dense:t.dense,numSelected:t.selected.length,rowCount:l.length,onSelectAllRows:o=>t.onSelectAllRows(o,l.map(n=>n.id)),action:e.jsxs(F,{direction:"row",children:[e.jsx(w,{title:"Sent",children:e.jsx(C,{color:"primary",children:e.jsx(x,{icon:"iconamoon:send-fill"})})}),e.jsx(w,{title:"Download",children:e.jsx(C,{color:"primary",children:e.jsx(x,{icon:"eva:download-outline"})})}),e.jsx(w,{title:"Print",children:e.jsx(C,{color:"primary",children:e.jsx(x,{icon:"solar:printer-minimalistic-bold"})})}),e.jsx(w,{title:"Delete",children:e.jsx(C,{color:"primary",onClick:d.onTrue,children:e.jsx(x,{icon:"solar:trash-bin-trash-bold"})})})]})}),e.jsx(I,{children:e.jsxs(de,{size:t.dense?"small":"medium",sx:{minWidth:800},children:[e.jsx(ae,{order:t.order,orderBy:t.orderBy,headLabel:ue,rowCount:l.length,numSelected:t.selected.length,onSort:t.onSort,onSelectAllRows:o=>t.onSelectAllRows(o,l.map(n=>n.id))}),e.jsxs(me,{children:[e.jsx(se,{height:f,emptyRows:te(t.page,t.rowsPerPage,l.length)}),e.jsx(re,{notFound:A})]})]})})]}),e.jsx(le,{count:a.length,page:t.page,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onRowsPerPageChange:t.onChangeRowsPerPage,dense:t.dense,onChangeDense:t.onChangeDense})]})]}),e.jsx(X,{open:d.value,onClose:d.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",t.selected.length," "]})," items?"]}),action:e.jsx(S,{variant:"contained",color:"error",onClick:()=>{B(),d.onFalse()},children:"Delete"})})]})}function he({inputData:s,comparator:T,filters:m,dateError:t}){const{name:d,status:l,service:u,startDate:r,endDate:p}=m,h=s.map((a,i)=>[a,i]);return h.sort((a,i)=>{const f=T(a[0],i[0]);return f!==0?f:a[1]-i[1]}),s=h.map(a=>a[0]),d&&(s=s.filter(a=>a.invoiceNumber.toLowerCase().indexOf(d.toLowerCase())!==-1||a.invoiceTo.name.toLowerCase().indexOf(d.toLowerCase())!==-1)),l!=="all"&&(s=s.filter(a=>a.status===l)),u.length&&(s=s.filter(a=>a.items.some(i=>u.includes(i.service)))),t||r&&p&&(s=s.filter(a=>P(a.createDate)>=P(r)&&P(a.createDate)<=P(p))),s}function tt(){return e.jsxs(e.Fragment,{children:[e.jsx(Q,{children:e.jsx("title",{children:" Dashboard: Invoice List"})}),e.jsx(pe,{})]})}export{tt as default};