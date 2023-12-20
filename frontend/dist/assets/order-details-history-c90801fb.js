import{aS as M,bm as V,a8 as e,ad as i,aC as L,b0 as B,bS as J,aF as _,aH as f,ah as p,ba as le,a9 as t,aB as q,bn as Q,aJ as A,ae as P,ax as l,D as g,aI as ie,aP as ce,ay as de,bk as xe,ag as H,aj as he,as as N,au as pe,ao as me,av as je,bA as ue,be as ee,c0 as ge,c1 as O,aG as I,ac as E,ai as be,aw as $,af as ye,bx as R}from"./index-45b7eda6.js";import{C as se}from"./confirm-dialog-88ff0038.js";import{C as we}from"./custom-breadcrumbs-03780d8e.js";import{u as fe,g as Ce,e as Te}from"./use-table-2aa83205.js";import{T as K,b as ve,a as De,d as Pe,e as Se,c as ke}from"./table-pagination-custom-993e831e.js";import{a as D}from"./format-number-c3b6bd9b.js";import{T as w}from"./TablePagination-7babd54e.js";import{C as Re}from"./Checkbox-a21bec51.js";import{D as X}from"./DatePicker-1d072b8a.js";import{s as Ie}from"./custom-date-range-picker-3055a4ae.js";import{M as Y}from"./Chip-0a4e5a9a.js";import{a as z}from"./api-2794ba32.js";import{T as Ae,a as Fe,b as Oe}from"./TableContainer-c3273806.js";import{T as Be,t as Le,a as Ee,b as Ne,c as We,d as Ue,e as He}from"./TimelineItem-12ba4900.js";function re({row:r,selected:a,onViewRow:x,onSelectRow:s,onDeleteRow:c}){const{id:m,items:d,status:n,createdAt:j,customer:h,totalQuantity:u,subTotal:y}=r,F=M(),C=M(),T=V(),S=e.jsxs(K,{hover:!0,selected:a,children:[e.jsx(w,{padding:"checkbox",children:e.jsx(Re,{checked:a,onClick:s})}),e.jsx(w,{children:e.jsxs(i,{onClick:x,sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:["#",m]})}),e.jsxs(w,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(L,{alt:h.name,src:h.avatarUrl,sx:{mr:2}}),e.jsx(B,{primary:h.name,secondary:h.email,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),e.jsx(w,{children:e.jsx(B,{primary:J(new Date(j),"dd MMM yyyy"),secondary:J(new Date(j),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsxs(w,{align:"center",children:[" ",u," "]}),e.jsxs(w,{children:[" ",D(y)," "]}),e.jsx(w,{children:e.jsx(_,{variant:"soft",color:n==="completed"&&"success"||n==="pending"&&"warning"||n==="cancelled"&&"error"||"default",children:n})}),e.jsxs(w,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(f,{color:C.value?"inherit":"default",onClick:C.onToggle,sx:{...C.value&&{bgcolor:"action.hover"}},children:e.jsx(p,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(f,{color:T.open?"inherit":"default",onClick:T.onOpen,children:e.jsx(p,{icon:"eva:more-vertical-fill"})})]})]}),W=e.jsx(K,{children:e.jsx(w,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(le,{in:C.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(t,{component:q,sx:{m:1.5},children:d.map(v=>e.jsxs(t,{direction:"row",alignItems:"center",sx:{p:k=>k.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:k=>`solid 2px ${k.palette.background.neutral}`}},children:[e.jsx(L,{src:`http://localhost:3000${v.images[0]}`,variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(B,{primary:v.name,secondary:v.id,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(i,{children:["x",v.quantity]}),e.jsx(i,{sx:{width:110,textAlign:"right"},children:D(v.salePrice)})]},v.id))})})})});return e.jsxs(e.Fragment,{children:[S,W,e.jsxs(Q,{open:T.open,onClose:T.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(A,{onClick:()=>{F.onTrue(),T.onClose()},sx:{color:"error.main"},children:[e.jsx(p,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(A,{onClick:()=>{x(),T.onClose()},children:[e.jsx(p,{icon:"solar:eye-bold"}),"View"]})]}),e.jsx(se,{open:F.value,onClose:F.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(P,{variant:"contained",color:"error",onClick:c,children:"Delete"})})]})}re.propTypes={onDeleteRow:l.func,onSelectRow:l.func,onViewRow:l.func,row:l.object,selected:l.bool};function ne({filters:r,onFilters:a,canReset:x,onResetFilters:s}){const c=V(),m=g.useCallback(j=>{a("name",j.target.value)},[a]),d=g.useCallback(j=>{a("startDate",j)},[a]),n=g.useCallback(j=>{a("endDate",j)},[a]);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsx(X,{label:"Start date",value:r.startDate,onChange:d,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),e.jsx(X,{label:"End date",value:r.endDate,onChange:n,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),e.jsxs(t,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(ie,{fullWidth:!0,value:r.name,onChange:m,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(ce,{position:"start",children:e.jsx(p,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(f,{onClick:c.onOpen,children:e.jsx(p,{icon:"eva:more-vertical-fill"})})]}),x&&e.jsx(P,{color:"error",sx:{flexShrink:0},onClick:s,startIcon:e.jsx(p,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]}),e.jsxs(Q,{open:c.open,onClose:c.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(A,{onClick:()=>{c.onClose()},children:[e.jsx(p,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(A,{onClick:()=>{c.onClose()},children:[e.jsx(p,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(A,{onClick:()=>{c.onClose()},children:[e.jsx(p,{icon:"solar:export-bold"}),"Export"]})]})]})}ne.propTypes={canReset:l.bool,filters:l.object,onFilters:l.func,onResetFilters:l.func};function te({filters:r,onFilters:a,onResetFilters:x,results:s,...c}){const m=Ie(r.startDate,r.endDate),d=()=>{a("status","all")},n=()=>{a("startDate",null),a("endDate",null)};return e.jsxs(t,{spacing:1.5,...c,children:[e.jsxs(i,{sx:{typography:"body2"},children:[e.jsx("strong",{children:s}),e.jsx(i,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(t,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[r.status!=="all"&&e.jsx(G,{label:"Status:",children:e.jsx(Y,{size:"small",label:r.status,onDelete:d})}),r.startDate&&r.endDate&&e.jsx(G,{label:"Date:",children:e.jsx(Y,{size:"small",label:m,onDelete:n})}),e.jsx(P,{color:"error",onClick:x,startIcon:e.jsx(p,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}te.propTypes={filters:l.object,onFilters:l.func,onResetFilters:l.func,results:l.number};function G({label:r,children:a,sx:x,...s}){return e.jsxs(t,{component:q,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...x},...s,children:[e.jsx(i,{component:"span",sx:{typography:"subtitle2"},children:r}),e.jsx(t,{spacing:1,direction:"row",flexWrap:"wrap",children:a})]})}G.propTypes={children:l.node,label:l.string,sx:l.object};const $e=[{value:"all",label:"All"},...ge],ze=[{id:"orderNumber",label:"Order",width:116},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"status",label:"Status",width:110},{id:"",width:88}],Z={name:"",status:"all",startDate:null,endDate:null};function is(){const[r,a]=g.useState([]),x=async()=>{try{const{data:o}=await z.get("/orders");a(o)}catch(o){console.log(o.message)}};g.useEffect(()=>{x()},[]);const s=fe({defaultOrderBy:"orderNumber"}),c=de(),m=xe(),d=M(),[n,j]=g.useState(Z),h=n.startDate&&n.endDate?n.startDate.getTime()>n.endDate.getTime():!1,u=Me({inputData:r,comparator:Ce(s.order,s.orderBy),filters:n,dateError:h}),y=u.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage),F=s.dense?52:72,C=!!n.name||n.status!=="all"||!!n.startDate&&!!n.endDate,T=!u.length&&C||!u.length,S=g.useCallback((o,b)=>{s.onResetPage(),j(U=>({...U,[o]:b}))},[s]),W=g.useCallback(o=>{z.delete("orders",{data:{id:o}});const b=r.filter(U=>U.id!==o);a(b),s.onUpdatePageDeleteRow(y.length)},[y.length,s,r]),v=g.useCallback(()=>{z.delete("orders",{data:{id:s.selected}});const o=r.filter(b=>!s.selected.includes(b.id));a(o),s.onUpdatePageDeleteRows({totalRows:r.length,totalRowsInPage:y.length,totalRowsFiltered:u.length})},[u.length,y.length,s,r]),k=g.useCallback(()=>{j(Z)},[]),oe=g.useCallback(o=>{m.push(H.dashboard.order.details(o))},[m]),ae=g.useCallback((o,b)=>{S("status",b)},[S]);return e.jsxs(e.Fragment,{children:[e.jsxs(he,{maxWidth:c.themeStretch?!1:"lg",children:[e.jsx(we,{heading:"Orders",links:[{name:"Dashboard",href:H.dashboard.root},{name:"Orders",href:H.dashboard.order.root}],sx:{mb:{xs:3,md:5}}}),e.jsxs(N,{children:[e.jsx(pe,{value:n.status,onChange:ae,sx:{px:2.5,boxShadow:o=>`inset 0 -2px 0 0 ${me(o.palette.grey[500],.08)}`},children:$e.map(o=>e.jsx(je,{iconPosition:"end",value:o.value,label:o.label,icon:e.jsx(_,{variant:(o.value==="all"||o.value===n.status)&&"filled"||"soft",color:o.value==="completed"&&"success"||o.value==="pending"&&"warning"||o.value==="cancelled"&&"error"||"default",children:"0"})},o.value))}),e.jsx(ne,{filters:n,onFilters:S,canReset:C,onResetFilters:k}),C&&e.jsx(te,{filters:n,onFilters:S,onResetFilters:k,results:u.length,sx:{p:2.5,pt:0}}),e.jsxs(Ae,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(ve,{dense:s.dense,numSelected:s.selected.length,rowCount:r.length,onSelectAllRows:o=>s.onSelectAllRows(o,r.map(b=>b.id)),action:e.jsx(ue,{title:"Delete",children:e.jsx(f,{color:"primary",onClick:d.onTrue,children:e.jsx(p,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(ee,{children:e.jsxs(Fe,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(De,{order:s.order,orderBy:s.orderBy,headLabel:ze,rowCount:r.length,numSelected:s.selected.length,onSort:s.onSort,onSelectAllRows:o=>s.onSelectAllRows(o,r.map(b=>b.id))}),e.jsxs(Oe,{children:[u.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(o=>e.jsx(re,{row:o,selected:s.selected.includes(o.id),onSelectRow:()=>s.onSelectRow(o.id),onDeleteRow:()=>W(o.id),onViewRow:()=>oe(o.id)},o.id)),e.jsx(Pe,{height:F,emptyRows:Te(s.page,s.rowsPerPage,r.length)}),e.jsx(Se,{notFound:T})]})]})})]}),e.jsx(ke,{count:u.length,page:s.page,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onRowsPerPageChange:s.onChangeRowsPerPage,onChangeDense:s.onChangeDense})]})]}),e.jsx(se,{open:d.value,onClose:d.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",s.selected.length," "]})," items?"]}),action:e.jsx(P,{variant:"contained",color:"error",onClick:()=>{v(),d.onFalse()},children:"Delete"})})]})}function Me({inputData:r,comparator:a,filters:x,dateError:s}){const{status:c,name:m,startDate:d,endDate:n}=x,j=r.map((h,u)=>[h,u]);return j.sort((h,u)=>{const y=a(h[0],u[0]);return y!==0?y:h[1]-u[1]}),r=j.map(h=>h[0]),m&&(r=r.filter(h=>h.orderNumber.toLowerCase().indexOf(m.toLowerCase())!==-1||h.customer.name.toLowerCase().indexOf(m.toLowerCase())!==-1||h.customer.email.toLowerCase().indexOf(m.toLowerCase())!==-1)),c!=="all"&&(r=r.filter(h=>h.status===c)),s||d&&n&&(r=r.filter(h=>O(h.createdAt)>=O(d)&&O(h.createdAt)<=O(n))),r}function Ge({customer:r,delivery:a,payment:x,shippingAddress:s}){const c=e.jsxs(e.Fragment,{children:[e.jsx(I,{title:"Customer Info",action:e.jsx(f,{children:e.jsx(p,{icon:"solar:pen-bold"})})}),e.jsxs(t,{direction:"row",sx:{p:3},children:[e.jsx(L,{alt:r.name,src:r.avatarUrl,sx:{width:48,height:48,mr:2}}),e.jsxs(t,{spacing:.5,alignItems:"flex-start",sx:{typography:"body2"},children:[e.jsx(E,{variant:"subtitle2",children:r.name}),e.jsx(i,{sx:{color:"text.secondary"},children:r.email}),e.jsxs(i,{children:["IP Address:",e.jsx(i,{component:"span",sx:{color:"text.secondary",ml:.25},children:r.ipAddress})]}),e.jsx(P,{size:"small",color:"error",startIcon:e.jsx(p,{icon:"mingcute:add-line"}),sx:{mt:1},children:"Add to Blacklist"})]})]})]}),m=e.jsxs(e.Fragment,{children:[e.jsx(I,{title:"Delivery",action:e.jsx(f,{children:e.jsx(p,{icon:"solar:pen-bold"})})}),e.jsxs(t,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(t,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Ship by"}),a.shipBy]}),e.jsxs(t,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Speedy"}),a.speedy]}),e.jsxs(t,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Tracking No."}),e.jsx(be,{underline:"always",color:"inherit",children:a.trackingNumber})]})]})]}),d=e.jsxs(e.Fragment,{children:[e.jsx(I,{title:"Shipping",action:e.jsx(f,{children:e.jsx(p,{icon:"solar:pen-bold"})})}),e.jsxs(t,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(t,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Address"}),s.fullAddress]}),e.jsxs(t,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Phone number"}),s.phoneNumber]})]})]}),n=e.jsxs(e.Fragment,{children:[e.jsx(I,{title:"Payment",action:e.jsx(f,{children:e.jsx(p,{icon:"solar:pen-bold"})})}),e.jsxs(t,{direction:"row",alignItems:"center",sx:{p:3,typography:"body2"},children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",flexGrow:1},children:"Phone number"}),x.cardNumber,e.jsx(p,{icon:"logos:mastercard",width:24,sx:{ml:.5}})]})]});return e.jsxs(N,{children:[c,e.jsx($,{sx:{borderStyle:"dashed"}}),m,e.jsx($,{sx:{borderStyle:"dashed"}}),d,e.jsx($,{sx:{borderStyle:"dashed"}}),n]})}Ge.propTypes={customer:l.object,delivery:l.object,payment:l.object,shippingAddress:l.object};function Ve({items:r,shipping:a,discount:x,taxes:s,subTotal:c,totalAmount:m}){const d=e.jsxs(t,{spacing:2,alignItems:"flex-end",sx:{my:3,textAlign:"right",typography:"body2"},children:[e.jsxs(t,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(i,{sx:{width:160,typography:"subtitle2"},children:D(c)||"-"})]}),e.jsxs(t,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(i,{sx:{width:160,...a&&{color:"error.main"}},children:a?`- ${D(a)}`:"-"})]}),e.jsxs(t,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(i,{sx:{width:160,...x&&{color:"error.main"}},children:x?`- ${D(x)}`:"-"})]}),e.jsxs(t,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Taxes"}),e.jsx(i,{sx:{width:160},children:s?D(s):"-"})]}),e.jsxs(t,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx(i,{children:"Total"}),e.jsx(i,{sx:{width:160},children:D(m)||"-"})]})]});return e.jsxs(N,{children:[e.jsx(I,{title:"Details"}),e.jsxs(t,{sx:{px:3},children:[e.jsx(ee,{children:r.map(n=>e.jsxs(t,{direction:"row",alignItems:"center",sx:{py:3,minWidth:640,borderBottom:j=>`dashed 2px ${j.palette.background.neutral}`},children:[e.jsx(L,{src:n.coverUrl,variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(B,{primary:n.name,secondary:n.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(i,{sx:{typography:"body2"},children:["x",n.quantity]}),e.jsx(i,{sx:{width:110,textAlign:"right",typography:"subtitle2"},children:D(n.price)})]},n.id))}),d]})]})}Ve.propTypes={discount:l.number,items:l.array,shipping:l.number,subTotal:l.number,taxes:l.number,totalAmount:l.number};function _e({status:r,backLink:a,createdAt:x,orderNumber:s,statusOptions:c,onChangeStatus:m}){const d=V();return e.jsxs(e.Fragment,{children:[e.jsxs(t,{spacing:3,direction:{xs:"column",md:"row"},sx:{mb:{xs:3,md:5}},children:[e.jsxs(t,{spacing:1,direction:"row",alignItems:"flex-start",children:[e.jsx(f,{component:ye,href:a,children:e.jsx(p,{icon:"eva:arrow-ios-back-fill"})}),e.jsxs(t,{spacing:.5,children:[e.jsxs(t,{spacing:1,direction:"row",alignItems:"center",children:[e.jsxs(E,{variant:"h4",children:[" Order ",s," "]}),e.jsx(_,{variant:"soft",color:r==="completed"&&"success"||r==="pending"&&"warning"||r==="cancelled"&&"error"||"default",children:r})]}),e.jsx(E,{variant:"body2",sx:{color:"text.disabled"},children:R(x)})]})]}),e.jsxs(t,{flexGrow:1,spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(P,{color:"inherit",variant:"outlined",endIcon:e.jsx(p,{icon:"eva:arrow-ios-downward-fill"}),onClick:d.onOpen,sx:{textTransform:"capitalize"},children:r}),e.jsx(P,{color:"inherit",variant:"outlined",startIcon:e.jsx(p,{icon:"solar:printer-minimalistic-bold"}),children:"Print"}),e.jsx(P,{color:"inherit",variant:"contained",startIcon:e.jsx(p,{icon:"solar:pen-bold"}),children:"Edit"})]})]}),e.jsx(Q,{open:d.open,onClose:d.onClose,arrow:"top-right",sx:{width:140},children:c.map(n=>e.jsx(A,{selected:n.value===r,onClick:()=>{d.onClose(),m(n.value)},children:n.label},n.value))})]})}_e.propTypes={backLink:l.string,createdAt:l.instanceOf(Date),onChangeStatus:l.func,orderNumber:l.string,status:l.string,statusOptions:l.array};function qe({history:r}){const a=e.jsxs(t,{spacing:2,component:q,variant:"outlined",sx:{p:2.5,minWidth:260,flexShrink:0,borderRadius:2,typography:"body2",borderStyle:"dashed"},children:[e.jsxs(t,{spacing:.5,children:[e.jsx(i,{sx:{color:"text.disabled"},children:"Order time"}),R(r.orderTime)]}),e.jsxs(t,{spacing:.5,children:[e.jsx(i,{sx:{color:"text.disabled"},children:"Payment time"}),R(r.orderTime)]}),e.jsxs(t,{spacing:.5,children:[e.jsx(i,{sx:{color:"text.disabled"},children:"Delivery time for the carrier"}),R(r.orderTime)]}),e.jsxs(t,{spacing:.5,children:[e.jsx(i,{sx:{color:"text.disabled"},children:"Completion time"}),R(r.orderTime)]})]}),x=e.jsx(Be,{sx:{p:0,m:0,[`& .${Le.root}:before`]:{flex:0,padding:0}},children:r.timeline.map((s,c)=>{const m=c===0,d=c===r.timeline.length-1;return e.jsxs(Ee,{children:[e.jsxs(Ne,{children:[e.jsx(We,{color:m&&"primary"||"grey"}),d?null:e.jsx(Ue,{})]}),e.jsxs(He,{children:[e.jsx(E,{variant:"subtitle2",children:s.title}),e.jsx(i,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:R(s.time)})]})]},s.title)})});return e.jsxs(N,{children:[e.jsx(I,{title:"History"}),e.jsxs(t,{spacing:3,alignItems:{md:"flex-start"},direction:{xs:"column-reverse",md:"row"},sx:{p:3},children:[x,a]})]})}qe.propTypes={history:l.object};export{is as O,_e as a,Ve as b,qe as c,Ge as d};
