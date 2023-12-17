import{a6 as N,ax as H,bg as _,aP as z,D as c,c1 as V,ag as g,a8 as e,aj as W,ae as S,af as U,ah as x,bb as y,a9 as I,av as $,at as q,ao as G,au as J,aE as K,c2 as M,bz as w,aF as C,c0 as P,aH as Q}from"./index-086ce406.js";import{C as X}from"./confirm-dialog-b88853a3.js";import{C as Y}from"./custom-breadcrumbs-5a71242b.js";import{u as Z,g as ee,e as te}from"./use-table-49c4e45e.js";import{b as oe,a as ae,d as se,e as re,c as le}from"./table-pagination-custom-e93cd0a6.js";import{I as b,a as ne,b as ie}from"./invoice-details-f2a0d5cf.js";import{C as F}from"./Card-0cb6ed66.js";import{T as ce,a as de,b as me}from"./TableContainer-6aa76a7b.js";import"./DialogTitle-29b400d0.js";import"./DialogContent-c865fac6.js";import"./DialogActions-20699274.js";import"./TablePagination-bc382a52.js";import"./Select-ee45cab4.js";import"./Menu-95a5b99b.js";import"./Checkbox-e4569f7c.js";import"./SwitchBase-8d2ece05.js";import"./FormControlLabel-d079e2e2.js";import"./Switch-caf70fe6.js";import"./format-number-17cc7955.js";import"./CircularProgress-c73f185e.js";import"./FormControl-e114322c.js";import"./TextField-346b5019.js";import"./FormLabel-f4a6b8d7.js";import"./DatePicker-3af32417.js";import"./ListItem-e57179c3.js";import"./ListItemSecondaryAction-a1f977b3.js";import"./Chip-a945ee22.js";import"./custom-date-range-picker-4b0b1408.js";import"./form-provider-eed4dd0f.js";import"./upload-avatar-3eae477b.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-9e96ec43.js";import"./image-25eb502d.js";import"./FormGroup-3074abc3.js";import"./editor-24695458.js";import"./highlight-5d37541e.js";import"./Slider-d605b3dc.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-38a86f08.js";import"./Radio-dc351094.js";import"./Autocomplete-f678b2c3.js";import"./Close-e3e22e95.js";import"./yup-ef423860.js";import"./address-list-dialog-cd2bc5c6.js";import"./LoadingButton-30c50ee4.js";const pe=[{id:"invoiceNumber",label:"Customer"},{id:"createDate",label:"Create"},{id:"dueDate",label:"Due"},{id:"price",label:"Amount"},{id:"sent",label:"Sent",align:"center"},{id:"status",label:"Status"},{id:""}],L={name:"",service:[],status:"all",startDate:null,endDate:null};function ue(){const s=N(),T=H(),m=_(),t=Z({defaultOrderBy:"createDate"}),d=z(),[l,p]=c.useState(V),[r,u]=c.useState(L),h=r.startDate&&r.endDate?r.startDate.getTime()>r.endDate.getTime():!1,a=he({inputData:l,comparator:ee(t.order,t.orderBy),filters:r,dateError:h}),i=a.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage),f=t.dense?56:76,R=!!r.name||!!r.service.length||r.status!=="all"||!!r.startDate&&!!r.endDate,k=!a.length&&R||!a.length,j=o=>l.filter(n=>n.status===o).length,A=[{value:"all",label:"All",color:"default",count:l.length},{value:"paid",label:"Paid",color:"success",count:j("paid")},{value:"pending",label:"Pending",color:"warning",count:j("pending")},{value:"overdue",label:"Overdue",color:"error",count:j("overdue")},{value:"draft",label:"Draft",color:"default",count:j("draft")}],v=c.useCallback((o,n)=>{t.onResetPage(),u(D=>({...D,[o]:n}))},[t]);c.useCallback(o=>{const n=l.filter(D=>D.id!==o);p(n),t.onUpdatePageDeleteRow(i.length)},[i.length,t,l]);const B=c.useCallback(()=>{const o=l.filter(n=>!t.selected.includes(n.id));p(o),t.onUpdatePageDeleteRows({totalRows:l.length,totalRowsInPage:i.length,totalRowsFiltered:a.length})},[a.length,i.length,t,l]);c.useCallback(o=>{m.push(g.dashboard.invoice.edit(o))},[m]),c.useCallback(o=>{m.push(g.dashboard.invoice.details(o))},[m]);const E=c.useCallback((o,n)=>{v("status",n)},[v]),O=c.useCallback(()=>{u(L)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(W,{maxWidth:T.themeStretch?!1:"lg",children:[e.jsx(Y,{heading:"List",links:[{name:"Dashboard",href:g.dashboard.root},{name:"Invoice",href:g.dashboard.invoice.root},{name:"List"}],action:e.jsx(S,{component:U,href:g.dashboard.invoice.new,variant:"contained",startIcon:e.jsx(x,{icon:"mingcute:add-line"}),children:"New Invoice"}),sx:{mb:{xs:3,md:5}}}),e.jsx(F,{sx:{mb:{xs:3,md:5}},children:e.jsx(y,{children:e.jsxs(I,{direction:"row",divider:e.jsx($,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:[e.jsx(b,{title:"Total",total:0,percent:0,price:0,icon:"solar:bill-list-bold-duotone",color:s.palette.info.main}),e.jsx(b,{title:"Paid",total:0,percent:0,price:0,icon:"solar:file-check-bold-duotone",color:s.palette.success.main}),e.jsx(b,{title:"Pending",total:0,percent:0,price:0,icon:"solar:sort-by-time-bold-duotone",color:s.palette.warning.main}),e.jsx(b,{title:"Overdue",total:0,percent:0,price:0,icon:"solar:bell-bing-bold-duotone",color:s.palette.error.main}),e.jsx(b,{title:"Draft",total:0,percent:0,price:0,icon:"solar:file-corrupted-bold-duotone",color:s.palette.text.secondary})]})})}),e.jsxs(F,{children:[e.jsx(q,{value:r.status,onChange:E,sx:{px:2.5,boxShadow:`inset 0 -2px 0 0 ${G(s.palette.grey[500],.08)}`},children:A.map(o=>e.jsx(J,{value:o.value,label:o.label,iconPosition:"end",icon:e.jsx(K,{variant:(o.value==="all"||o.value===r.status)&&"filled"||"soft",color:o.color,children:o.count})},o.value))}),e.jsx(ne,{filters:r,onFilters:v,dateError:h,serviceOptions:M.map(o=>o.name)}),R&&e.jsx(ie,{filters:r,onFilters:v,onResetFilters:O,results:a.length,sx:{p:2.5,pt:0}}),e.jsxs(ce,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(oe,{dense:t.dense,numSelected:t.selected.length,rowCount:l.length,onSelectAllRows:o=>t.onSelectAllRows(o,l.map(n=>n.id)),action:e.jsxs(I,{direction:"row",children:[e.jsx(w,{title:"Sent",children:e.jsx(C,{color:"primary",children:e.jsx(x,{icon:"iconamoon:send-fill"})})}),e.jsx(w,{title:"Download",children:e.jsx(C,{color:"primary",children:e.jsx(x,{icon:"eva:download-outline"})})}),e.jsx(w,{title:"Print",children:e.jsx(C,{color:"primary",children:e.jsx(x,{icon:"solar:printer-minimalistic-bold"})})}),e.jsx(w,{title:"Delete",children:e.jsx(C,{color:"primary",onClick:d.onTrue,children:e.jsx(x,{icon:"solar:trash-bin-trash-bold"})})})]})}),e.jsx(y,{children:e.jsxs(de,{size:t.dense?"small":"medium",sx:{minWidth:800},children:[e.jsx(ae,{order:t.order,orderBy:t.orderBy,headLabel:pe,rowCount:l.length,numSelected:t.selected.length,onSort:t.onSort,onSelectAllRows:o=>t.onSelectAllRows(o,l.map(n=>n.id))}),e.jsxs(me,{children:[e.jsx(se,{height:f,emptyRows:te(t.page,t.rowsPerPage,l.length)}),e.jsx(re,{notFound:k})]})]})})]}),e.jsx(le,{count:a.length,page:t.page,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onRowsPerPageChange:t.onChangeRowsPerPage,dense:t.dense,onChangeDense:t.onChangeDense})]})]}),e.jsx(X,{open:d.value,onClose:d.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",t.selected.length," "]})," items?"]}),action:e.jsx(S,{variant:"contained",color:"error",onClick:()=>{B(),d.onFalse()},children:"Delete"})})]})}function he({inputData:s,comparator:T,filters:m,dateError:t}){const{name:d,status:l,service:p,startDate:r,endDate:u}=m,h=s.map((a,i)=>[a,i]);return h.sort((a,i)=>{const f=T(a[0],i[0]);return f!==0?f:a[1]-i[1]}),s=h.map(a=>a[0]),d&&(s=s.filter(a=>a.invoiceNumber.toLowerCase().indexOf(d.toLowerCase())!==-1||a.invoiceTo.name.toLowerCase().indexOf(d.toLowerCase())!==-1)),l!=="all"&&(s=s.filter(a=>a.status===l)),p.length&&(s=s.filter(a=>a.items.some(i=>p.includes(i.service)))),t||r&&u&&(s=s.filter(a=>P(a.createDate)>=P(r)&&P(a.createDate)<=P(u))),s}function nt(){return e.jsxs(e.Fragment,{children:[e.jsx(Q,{children:e.jsx("title",{children:" Dashboard: Invoice List"})}),e.jsx(ue,{})]})}export{nt as default};