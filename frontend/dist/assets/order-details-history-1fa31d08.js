import{aw as t,bg as U,D as g,a8 as e,a9 as r,aM as K,ah as u,aF as y,ae as f,bh as H,aG as I,ad as a,aA as _,ax as X,be as Y,aP as ee,b_ as w,ag as O,aj as se,at as re,ao as te,au as ne,aE as $,bz as oe,b8 as G,b$ as ae,c0 as P,aB as M,ac as k,ai as le,av as L,aZ as ie,af as de,bw as T}from"./index-26f85d8d.js";import{C as ce}from"./confirm-dialog-8d2f5419.js";import{C as xe}from"./custom-breadcrumbs-00c2f076.js";import{u as he,g as pe,e as me}from"./use-table-301ceeba.js";import{b as ue,a as je,d as ge,e as be,c as ye}from"./table-pagination-custom-d504c0f7.js";import{a as C}from"./format-number-c9f1dcb3.js";import{D as N}from"./DatePicker-15cae928.js";import{T as fe}from"./TextField-6705370b.js";import{s as we}from"./custom-date-range-picker-fb6a4fa3.js";import{M as W}from"./Chip-5f4632f5.js";import{C as R}from"./Card-c4857d5e.js";import{T as Ce,a as Te,b as ve}from"./TableContainer-791cf2cb.js";import{C as v}from"./CardHeader-f833d3a3.js";import{T as De,t as Se,a as Pe,b as Ie,c as ke,d as Re,e as Ae}from"./TimelineItem-b7f78e4d.js";t.func,t.func,t.func,t.object,t.bool;function V({filters:s,onFilters:l,canReset:h,onResetFilters:d}){const n=U(),p=g.useCallback(j=>{l("name",j.target.value)},[l]),o=g.useCallback(j=>{l("startDate",j)},[l]),c=g.useCallback(j=>{l("endDate",j)},[l]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsx(N,{label:"Start date",value:s.startDate,onChange:o,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),e.jsx(N,{label:"End date",value:s.endDate,onChange:c,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),e.jsxs(r,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(fe,{fullWidth:!0,value:s.name,onChange:p,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(K,{position:"start",children:e.jsx(u,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(y,{onClick:n.onOpen,children:e.jsx(u,{icon:"eva:more-vertical-fill"})})]}),h&&e.jsx(f,{color:"error",sx:{flexShrink:0},onClick:d,startIcon:e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]}),e.jsxs(H,{open:n.open,onClose:n.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(I,{onClick:()=>{n.onClose()},children:[e.jsx(u,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(I,{onClick:()=>{n.onClose()},children:[e.jsx(u,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(I,{onClick:()=>{n.onClose()},children:[e.jsx(u,{icon:"solar:export-bold"}),"Export"]})]})]})}V.propTypes={canReset:t.bool,filters:t.object,onFilters:t.func,onResetFilters:t.func};function q({filters:s,onFilters:l,onResetFilters:h,results:d,...n}){const p=we(s.startDate,s.endDate),o=()=>{l("status","all")},c=()=>{l("startDate",null),l("endDate",null)};return e.jsxs(r,{spacing:1.5,...n,children:[e.jsxs(a,{sx:{typography:"body2"},children:[e.jsx("strong",{children:d}),e.jsx(a,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(r,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[s.status!=="all"&&e.jsx(B,{label:"Status:",children:e.jsx(W,{size:"small",label:s.status,onDelete:o})}),s.startDate&&s.endDate&&e.jsx(B,{label:"Date:",children:e.jsx(W,{size:"small",label:p,onDelete:c})}),e.jsx(f,{color:"error",onClick:h,startIcon:e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}q.propTypes={filters:t.object,onFilters:t.func,onResetFilters:t.func,results:t.number};function B({label:s,children:l,sx:h,...d}){return e.jsxs(r,{component:_,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...h},...d,children:[e.jsx(a,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(r,{spacing:1,direction:"row",flexWrap:"wrap",children:l})]})}B.propTypes={children:t.node,label:t.string,sx:t.object};const Fe=[{value:"all",label:"All"},...ae],Oe=[{id:"orderNumber",label:"Order",width:116},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"status",label:"Status",width:110},{id:"",width:88}],z={name:"",status:"all",startDate:null,endDate:null};function Ye(){const s=he({defaultOrderBy:"orderNumber"}),l=X(),h=Y(),d=ee(),[n,p]=g.useState(w),[o,c]=g.useState(z),j=o.startDate&&o.endDate?o.startDate.getTime()>o.endDate.getTime():!1,x=Le({inputData:n,comparator:pe(s.order,s.orderBy),filters:o,dateError:j}),b=x.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage),D=s.dense?52:72,A=!!o.name||o.status!=="all"||!!o.startDate&&!!o.endDate,Q=!x.length&&A||!x.length,S=g.useCallback((i,m)=>{s.onResetPage(),c(F=>({...F,[i]:m}))},[s]);g.useCallback(i=>{const m=n.filter(F=>F.id!==i);p(m),s.onUpdatePageDeleteRow(b.length)},[b.length,s,n]);const Z=g.useCallback(()=>{const i=n.filter(m=>!s.selected.includes(m.id));p(i),s.onUpdatePageDeleteRows({totalRows:n.length,totalRowsInPage:b.length,totalRowsFiltered:x.length})},[x.length,b.length,s,n]),E=g.useCallback(()=>{c(z)},[]);g.useCallback(i=>{h.push(O.dashboard.order.details(i))},[h]);const J=g.useCallback((i,m)=>{S("status",m)},[S]);return e.jsxs(e.Fragment,{children:[e.jsxs(se,{maxWidth:l.themeStretch?!1:"lg",children:[e.jsx(xe,{heading:"List",links:[{name:"Dashboard",href:O.dashboard.root},{name:"Order",href:O.dashboard.order.root},{name:"List"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(R,{children:[e.jsx(re,{value:o.status,onChange:J,sx:{px:2.5,boxShadow:i=>`inset 0 -2px 0 0 ${te(i.palette.grey[500],.08)}`},children:Fe.map(i=>e.jsx(ne,{iconPosition:"end",value:i.value,label:i.label,icon:e.jsxs($,{variant:(i.value==="all"||i.value===o.status)&&"filled"||"soft",color:i.value==="completed"&&"success"||i.value==="pending"&&"warning"||i.value==="cancelled"&&"error"||"default",children:[i.value==="all"&&w.length,i.value==="completed"&&w.filter(m=>m.status==="completed").length,i.value==="pending"&&w.filter(m=>m.status==="pending").length,i.value==="cancelled"&&w.filter(m=>m.status==="cancelled").length,i.value==="refunded"&&w.filter(m=>m.status==="refunded").length]})},i.value))}),e.jsx(V,{filters:o,onFilters:S,canReset:A,onResetFilters:E}),A&&e.jsx(q,{filters:o,onFilters:S,onResetFilters:E,results:x.length,sx:{p:2.5,pt:0}}),e.jsxs(Ce,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(ue,{dense:s.dense,numSelected:s.selected.length,rowCount:n.length,onSelectAllRows:i=>s.onSelectAllRows(i,n.map(m=>m.id)),action:e.jsx(oe,{title:"Delete",children:e.jsx(y,{color:"primary",onClick:d.onTrue,children:e.jsx(u,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(G,{children:e.jsxs(Te,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(je,{order:s.order,orderBy:s.orderBy,headLabel:Oe,rowCount:n.length,numSelected:s.selected.length,onSort:s.onSort,onSelectAllRows:i=>s.onSelectAllRows(i,n.map(m=>m.id))}),e.jsxs(ve,{children:[e.jsx(ge,{height:D,emptyRows:me(s.page,s.rowsPerPage,n.length)}),e.jsx(be,{notFound:Q})]})]})})]}),e.jsx(ye,{count:x.length,page:s.page,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onRowsPerPageChange:s.onChangeRowsPerPage,dense:s.dense,onChangeDense:s.onChangeDense})]})]}),e.jsx(ce,{open:d.value,onClose:d.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",s.selected.length," "]})," items?"]}),action:e.jsx(f,{variant:"contained",color:"error",onClick:()=>{Z(),d.onFalse()},children:"Delete"})})]})}function Le({inputData:s,comparator:l,filters:h,dateError:d}){const{status:n,name:p,startDate:o,endDate:c}=h,j=s.map((x,b)=>[x,b]);return j.sort((x,b)=>{const D=l(x[0],b[0]);return D!==0?D:x[1]-b[1]}),s=j.map(x=>x[0]),p&&(s=s.filter(x=>x.orderNumber.toLowerCase().indexOf(p.toLowerCase())!==-1||x.customer.name.toLowerCase().indexOf(p.toLowerCase())!==-1||x.customer.email.toLowerCase().indexOf(p.toLowerCase())!==-1)),n!=="all"&&(s=s.filter(x=>x.status===n)),d||o&&c&&(s=s.filter(x=>P(x.createdAt)>=P(o)&&P(x.createdAt)<=P(c))),s}function Be({customer:s,delivery:l,payment:h,shippingAddress:d}){const n=e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Customer Info",action:e.jsx(y,{children:e.jsx(u,{icon:"solar:pen-bold"})})}),e.jsxs(r,{direction:"row",sx:{p:3},children:[e.jsx(M,{alt:s.name,src:s.avatarUrl,sx:{width:48,height:48,mr:2}}),e.jsxs(r,{spacing:.5,alignItems:"flex-start",sx:{typography:"body2"},children:[e.jsx(k,{variant:"subtitle2",children:s.name}),e.jsx(a,{sx:{color:"text.secondary"},children:s.email}),e.jsxs(a,{children:["IP Address:",e.jsx(a,{component:"span",sx:{color:"text.secondary",ml:.25},children:s.ipAddress})]}),e.jsx(f,{size:"small",color:"error",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),sx:{mt:1},children:"Add to Blacklist"})]})]})]}),p=e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Delivery",action:e.jsx(y,{children:e.jsx(u,{icon:"solar:pen-bold"})})}),e.jsxs(r,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(a,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Ship by"}),l.shipBy]}),e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(a,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Speedy"}),l.speedy]}),e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(a,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Tracking No."}),e.jsx(le,{underline:"always",color:"inherit",children:l.trackingNumber})]})]})]}),o=e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Shipping",action:e.jsx(y,{children:e.jsx(u,{icon:"solar:pen-bold"})})}),e.jsxs(r,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(a,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Address"}),d.fullAddress]}),e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(a,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Phone number"}),d.phoneNumber]})]})]}),c=e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Payment",action:e.jsx(y,{children:e.jsx(u,{icon:"solar:pen-bold"})})}),e.jsxs(r,{direction:"row",alignItems:"center",sx:{p:3,typography:"body2"},children:[e.jsx(a,{component:"span",sx:{color:"text.secondary",flexGrow:1},children:"Phone number"}),h.cardNumber,e.jsx(u,{icon:"logos:mastercard",width:24,sx:{ml:.5}})]})]});return e.jsxs(R,{children:[n,e.jsx(L,{sx:{borderStyle:"dashed"}}),p,e.jsx(L,{sx:{borderStyle:"dashed"}}),o,e.jsx(L,{sx:{borderStyle:"dashed"}}),c]})}Be.propTypes={customer:t.object,delivery:t.object,payment:t.object,shippingAddress:t.object};function Ee({items:s,shipping:l,discount:h,taxes:d,subTotal:n,totalAmount:p}){const o=e.jsxs(r,{spacing:2,alignItems:"flex-end",sx:{my:3,textAlign:"right",typography:"body2"},children:[e.jsxs(r,{direction:"row",children:[e.jsx(a,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(a,{sx:{width:160,typography:"subtitle2"},children:C(n)||"-"})]}),e.jsxs(r,{direction:"row",children:[e.jsx(a,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(a,{sx:{width:160,...l&&{color:"error.main"}},children:l?`- ${C(l)}`:"-"})]}),e.jsxs(r,{direction:"row",children:[e.jsx(a,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(a,{sx:{width:160,...h&&{color:"error.main"}},children:h?`- ${C(h)}`:"-"})]}),e.jsxs(r,{direction:"row",children:[e.jsx(a,{sx:{color:"text.secondary"},children:"Taxes"}),e.jsx(a,{sx:{width:160},children:d?C(d):"-"})]}),e.jsxs(r,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx(a,{children:"Total"}),e.jsx(a,{sx:{width:160},children:C(p)||"-"})]})]});return e.jsxs(R,{children:[e.jsx(v,{title:"Details"}),e.jsxs(r,{sx:{px:3},children:[e.jsx(G,{children:s.map(c=>e.jsxs(r,{direction:"row",alignItems:"center",sx:{py:3,minWidth:640,borderBottom:j=>`dashed 2px ${j.palette.background.neutral}`},children:[e.jsx(M,{src:c.coverUrl,variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(ie,{primary:c.name,secondary:c.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(a,{sx:{typography:"body2"},children:["x",c.quantity]}),e.jsx(a,{sx:{width:110,textAlign:"right",typography:"subtitle2"},children:C(c.price)})]},c.id))}),o]})]})}Ee.propTypes={discount:t.number,items:t.array,shipping:t.number,subTotal:t.number,taxes:t.number,totalAmount:t.number};function Ne({status:s,backLink:l,createdAt:h,orderNumber:d,statusOptions:n,onChangeStatus:p}){const o=U();return e.jsxs(e.Fragment,{children:[e.jsxs(r,{spacing:3,direction:{xs:"column",md:"row"},sx:{mb:{xs:3,md:5}},children:[e.jsxs(r,{spacing:1,direction:"row",alignItems:"flex-start",children:[e.jsx(y,{component:de,href:l,children:e.jsx(u,{icon:"eva:arrow-ios-back-fill"})}),e.jsxs(r,{spacing:.5,children:[e.jsxs(r,{spacing:1,direction:"row",alignItems:"center",children:[e.jsxs(k,{variant:"h4",children:[" Order ",d," "]}),e.jsx($,{variant:"soft",color:s==="completed"&&"success"||s==="pending"&&"warning"||s==="cancelled"&&"error"||"default",children:s})]}),e.jsx(k,{variant:"body2",sx:{color:"text.disabled"},children:T(h)})]})]}),e.jsxs(r,{flexGrow:1,spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(f,{color:"inherit",variant:"outlined",endIcon:e.jsx(u,{icon:"eva:arrow-ios-downward-fill"}),onClick:o.onOpen,sx:{textTransform:"capitalize"},children:s}),e.jsx(f,{color:"inherit",variant:"outlined",startIcon:e.jsx(u,{icon:"solar:printer-minimalistic-bold"}),children:"Print"}),e.jsx(f,{color:"inherit",variant:"contained",startIcon:e.jsx(u,{icon:"solar:pen-bold"}),children:"Edit"})]})]}),e.jsx(H,{open:o.open,onClose:o.onClose,arrow:"top-right",sx:{width:140},children:n.map(c=>e.jsx(I,{selected:c.value===s,onClick:()=>{o.onClose(),p(c.value)},children:c.label},c.value))})]})}Ne.propTypes={backLink:t.string,createdAt:t.instanceOf(Date),onChangeStatus:t.func,orderNumber:t.string,status:t.string,statusOptions:t.array};function We({history:s}){const l=e.jsxs(r,{spacing:2,component:_,variant:"outlined",sx:{p:2.5,minWidth:260,flexShrink:0,borderRadius:2,typography:"body2",borderStyle:"dashed"},children:[e.jsxs(r,{spacing:.5,children:[e.jsx(a,{sx:{color:"text.disabled"},children:"Order time"}),T(s.orderTime)]}),e.jsxs(r,{spacing:.5,children:[e.jsx(a,{sx:{color:"text.disabled"},children:"Payment time"}),T(s.orderTime)]}),e.jsxs(r,{spacing:.5,children:[e.jsx(a,{sx:{color:"text.disabled"},children:"Delivery time for the carrier"}),T(s.orderTime)]}),e.jsxs(r,{spacing:.5,children:[e.jsx(a,{sx:{color:"text.disabled"},children:"Completion time"}),T(s.orderTime)]})]}),h=e.jsx(De,{sx:{p:0,m:0,[`& .${Se.root}:before`]:{flex:0,padding:0}},children:s.timeline.map((d,n)=>{const p=n===0,o=n===s.timeline.length-1;return e.jsxs(Pe,{children:[e.jsxs(Ie,{children:[e.jsx(ke,{color:p&&"primary"||"grey"}),o?null:e.jsx(Re,{})]}),e.jsxs(Ae,{children:[e.jsx(k,{variant:"subtitle2",children:d.title}),e.jsx(a,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:T(d.time)})]})]},d.title)})});return e.jsxs(R,{children:[e.jsx(v,{title:"History"}),e.jsxs(r,{spacing:3,alignItems:{md:"flex-start"},direction:{xs:"column-reverse",md:"row"},sx:{p:3},children:[h,l]})]})}We.propTypes={history:t.object};export{Ye as O,Ne as a,Ee as b,We as c,Be as d};
