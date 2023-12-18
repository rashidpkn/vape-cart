import{a6 as N,ax as _,bg as H,aP as V,D as c,b_ as W,ag as g,a8 as e,aj as z,ae as S,af as U,ah as x,bb as y,a9 as I,av as $,at as Z,ao as q,au as G,aE as J,b$ as K,bw as w,aF as C,bZ as P,aH as M}from"./index-a747811c.js";import{C as Q}from"./confirm-dialog-342a8153.js";import{C as X}from"./custom-breadcrumbs-4c4417ef.js";import{u as Y,g as ee,e as te}from"./use-table-ff505df5.js";import{b as oe,a as ae,d as se,e as re,c as le}from"./table-pagination-custom-35112ce6.js";import{I as b,a as ne,b as ie}from"./invoice-details-a0986d8a.js";import{C as F}from"./Card-edd4abf8.js";import{T as ce,a as de,b as me}from"./TableContainer-e899b1a5.js";import"./DialogTitle-b5c3e23b.js";import"./DialogContent-8b63754b.js";import"./DialogActions-b339743b.js";import"./TablePagination-b959666e.js";import"./Select-0e3a3519.js";import"./Menu-85627bb4.js";import"./Checkbox-c13775e7.js";import"./SwitchBase-46064381.js";import"./format-number-6c2edc06.js";import"./CircularProgress-bfa0a07e.js";import"./FormControl-0c109cff.js";import"./TextField-5c8d940a.js";import"./FormLabel-b8b56886.js";import"./DatePicker-edc6af47.js";import"./ListItem-9c16c624.js";import"./ListItemSecondaryAction-0c6c8d71.js";import"./Chip-db514ca4.js";import"./custom-date-range-picker-f95da71c.js";import"./form-provider-d26a9747.js";import"./upload-avatar-4058b3e8.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-9e7244b8.js";import"./image-13256a49.js";import"./FormControlLabel-6cf4e384.js";import"./FormGroup-fa53ce87.js";import"./Switch-e7e5ad21.js";import"./editor-19399420.js";import"./highlight-4e2adf31.js";import"./Slider-fe6c58df.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-c4fe20dc.js";import"./Radio-f2722486.js";import"./Autocomplete-0c52570d.js";import"./Close-4ae4f15a.js";import"./yup-e9bc2068.js";import"./address-list-dialog-f2c84a70.js";import"./LoadingButton-8c49b16f.js";const pe=[{id:"invoiceNumber",label:"Customer"},{id:"createDate",label:"Create"},{id:"dueDate",label:"Due"},{id:"price",label:"Amount"},{id:"sent",label:"Sent",align:"center"},{id:"status",label:"Status"},{id:""}],k={name:"",service:[],status:"all",startDate:null,endDate:null};function ue(){const s=N(),T=_(),m=H(),t=Y({defaultOrderBy:"createDate"}),d=V(),[l,p]=c.useState(W),[r,u]=c.useState(k),h=r.startDate&&r.endDate?r.startDate.getTime()>r.endDate.getTime():!1,a=he({inputData:l,comparator:ee(t.order,t.orderBy),filters:r,dateError:h}),i=a.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage),f=t.dense?56:76,R=!!r.name||!!r.service.length||r.status!=="all"||!!r.startDate&&!!r.endDate,A=!a.length&&R||!a.length,j=o=>l.filter(n=>n.status===o).length,L=[{value:"all",label:"All",color:"default",count:l.length},{value:"paid",label:"Paid",color:"success",count:j("paid")},{value:"pending",label:"Pending",color:"warning",count:j("pending")},{value:"overdue",label:"Overdue",color:"error",count:j("overdue")},{value:"draft",label:"Draft",color:"default",count:j("draft")}],v=c.useCallback((o,n)=>{t.onResetPage(),u(D=>({...D,[o]:n}))},[t]);c.useCallback(o=>{const n=l.filter(D=>D.id!==o);p(n),t.onUpdatePageDeleteRow(i.length)},[i.length,t,l]);const B=c.useCallback(()=>{const o=l.filter(n=>!t.selected.includes(n.id));p(o),t.onUpdatePageDeleteRows({totalRows:l.length,totalRowsInPage:i.length,totalRowsFiltered:a.length})},[a.length,i.length,t,l]);c.useCallback(o=>{m.push(g.dashboard.invoice.edit(o))},[m]),c.useCallback(o=>{m.push(g.dashboard.invoice.details(o))},[m]);const E=c.useCallback((o,n)=>{v("status",n)},[v]),O=c.useCallback(()=>{u(k)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{maxWidth:T.themeStretch?!1:"lg",children:[e.jsx(X,{heading:"Invoice",links:[{name:"Dashboard",href:g.dashboard.root},{name:"Invoice",href:g.dashboard.invoice.root}],action:e.jsx(S,{component:U,href:g.dashboard.invoice.new,variant:"contained",startIcon:e.jsx(x,{icon:"mingcute:add-line"}),children:"New Invoice"}),sx:{mb:{xs:3,md:5}}}),e.jsx(F,{sx:{mb:{xs:3,md:5}},children:e.jsx(y,{children:e.jsxs(I,{direction:"row",divider:e.jsx($,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:[e.jsx(b,{title:"Total",total:0,percent:0,price:0,icon:"solar:bill-list-bold-duotone",color:s.palette.info.main}),e.jsx(b,{title:"Paid",total:0,percent:0,price:0,icon:"solar:file-check-bold-duotone",color:s.palette.success.main}),e.jsx(b,{title:"Pending",total:0,percent:0,price:0,icon:"solar:sort-by-time-bold-duotone",color:s.palette.warning.main}),e.jsx(b,{title:"Overdue",total:0,percent:0,price:0,icon:"solar:bell-bing-bold-duotone",color:s.palette.error.main}),e.jsx(b,{title:"Draft",total:0,percent:0,price:0,icon:"solar:file-corrupted-bold-duotone",color:s.palette.text.secondary})]})})}),e.jsxs(F,{children:[e.jsx(Z,{value:r.status,onChange:E,sx:{px:2.5,boxShadow:`inset 0 -2px 0 0 ${q(s.palette.grey[500],.08)}`},children:L.map(o=>e.jsx(G,{value:o.value,label:o.label,iconPosition:"end",icon:e.jsx(J,{variant:(o.value==="all"||o.value===r.status)&&"filled"||"soft",color:o.color,children:"0"})},o.value))}),e.jsx(ne,{filters:r,onFilters:v,dateError:h,serviceOptions:K.map(o=>o.name)}),R&&e.jsx(ie,{filters:r,onFilters:v,onResetFilters:O,results:a.length,sx:{p:2.5,pt:0}}),e.jsxs(ce,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(oe,{dense:t.dense,numSelected:t.selected.length,rowCount:l.length,onSelectAllRows:o=>t.onSelectAllRows(o,l.map(n=>n.id)),action:e.jsxs(I,{direction:"row",children:[e.jsx(w,{title:"Sent",children:e.jsx(C,{color:"primary",children:e.jsx(x,{icon:"iconamoon:send-fill"})})}),e.jsx(w,{title:"Download",children:e.jsx(C,{color:"primary",children:e.jsx(x,{icon:"eva:download-outline"})})}),e.jsx(w,{title:"Print",children:e.jsx(C,{color:"primary",children:e.jsx(x,{icon:"solar:printer-minimalistic-bold"})})}),e.jsx(w,{title:"Delete",children:e.jsx(C,{color:"primary",onClick:d.onTrue,children:e.jsx(x,{icon:"solar:trash-bin-trash-bold"})})})]})}),e.jsx(y,{children:e.jsxs(de,{size:t.dense?"small":"medium",sx:{minWidth:800},children:[e.jsx(ae,{order:t.order,orderBy:t.orderBy,headLabel:pe,rowCount:l.length,numSelected:t.selected.length,onSort:t.onSort,onSelectAllRows:o=>t.onSelectAllRows(o,l.map(n=>n.id))}),e.jsxs(me,{children:[e.jsx(se,{height:f,emptyRows:te(t.page,t.rowsPerPage,l.length)}),e.jsx(re,{notFound:A})]})]})})]}),e.jsx(le,{count:a.length,page:t.page,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onRowsPerPageChange:t.onChangeRowsPerPage,dense:t.dense,onChangeDense:t.onChangeDense})]})]}),e.jsx(Q,{open:d.value,onClose:d.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",t.selected.length," "]})," items?"]}),action:e.jsx(S,{variant:"contained",color:"error",onClick:()=>{B(),d.onFalse()},children:"Delete"})})]})}function he({inputData:s,comparator:T,filters:m,dateError:t}){const{name:d,status:l,service:p,startDate:r,endDate:u}=m,h=s.map((a,i)=>[a,i]);return h.sort((a,i)=>{const f=T(a[0],i[0]);return f!==0?f:a[1]-i[1]}),s=h.map(a=>a[0]),d&&(s=s.filter(a=>a.invoiceNumber.toLowerCase().indexOf(d.toLowerCase())!==-1||a.invoiceTo.name.toLowerCase().indexOf(d.toLowerCase())!==-1)),l!=="all"&&(s=s.filter(a=>a.status===l)),p.length&&(s=s.filter(a=>a.items.some(i=>p.includes(i.service)))),t||r&&u&&(s=s.filter(a=>P(a.createDate)>=P(r)&&P(a.createDate)<=P(u))),s}function nt(){return e.jsxs(e.Fragment,{children:[e.jsx(M,{children:e.jsx("title",{children:" Dashboard: Invoice List"})}),e.jsx(ue,{})]})}export{nt as default};