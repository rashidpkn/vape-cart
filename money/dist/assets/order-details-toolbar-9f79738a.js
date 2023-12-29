import{bi as U,bx as $,af as e,ao as i,aR as B,bg as A,c7 as q,aU as G,aW as f,az as x,bh as ae,au as l,aQ as J,by as H,aY as R,aw as v,aq as a,D as g,aX as le,bm as ie,aN as ce,bv as de,ay as N,aB as xe,aI as _,aK as he,am as pe,aL as je,bN as me,bp as Z,cy as ue,cz as O,aV as F,ac as M,aA as ge,aM as W,ax as be,bI as ye}from"./index-02adb112.js";import{C as ee}from"./confirm-dialog-2573924f.js";import{C as we}from"./custom-breadcrumbs-257a7cd6.js";import{u as fe,g as Ce,e as Te}from"./use-table-c03cc30d.js";import{T as Q,a as w,c as De,b as Pe,e as ve,f as Se,d as ke}from"./table-pagination-custom-0215cca0.js";import{a as z}from"./api-1100fa52.js";import{f as P}from"./format-number-9752a824.js";import{C as Re}from"./Checkbox-ede001ae.js";import{D as K,s as Ie}from"./custom-date-range-picker-c17af6d7.js";import{C as X}from"./Chip-8b014505.js";import{T as Fe,a as Oe,b as Ae}from"./TableContainer-5d3bcd1d.js";function se({row:r,selected:t,onViewRow:p,onSelectRow:s,onDeleteRow:h}){const{id:j,items:c,status:n,createdAt:m,customer:d,totalQuantity:u,subTotal:y}=r,I=U(),C=U(),T=$(),S=e.jsxs(Q,{hover:!0,selected:t,children:[e.jsx(w,{padding:"checkbox",children:e.jsx(Re,{checked:t,onClick:s})}),e.jsx(w,{children:e.jsxs(i,{onClick:p,sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:["#",j]})}),e.jsxs(w,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(B,{alt:d.name,src:d.avatarUrl,sx:{mr:2}}),e.jsx(A,{primary:d.name,secondary:d.email,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),e.jsx(w,{children:e.jsx(A,{primary:q(new Date(m),"dd MMM yyyy"),secondary:q(new Date(m),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsxs(w,{align:"center",children:[" ",u," "]}),e.jsxs(w,{children:[" ",P(y)," "]}),e.jsx(w,{children:e.jsx(G,{variant:"soft",color:n==="completed"&&"success"||n==="pending"&&"warning"||n==="cancelled"&&"error"||"default",children:n})}),e.jsxs(w,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(f,{color:C.value?"inherit":"default",onClick:C.onToggle,sx:{...C.value&&{bgcolor:"action.hover"}},children:e.jsx(x,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(f,{color:T.open?"inherit":"default",onClick:T.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})]})]}),L=e.jsx(Q,{children:e.jsx(w,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(ae,{in:C.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(l,{component:J,sx:{m:1.5},children:c.map(D=>e.jsxs(l,{direction:"row",alignItems:"center",sx:{p:k=>k.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:k=>`solid 2px ${k.palette.background.neutral}`}},children:[e.jsx(B,{src:D.images[0],variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(A,{primary:D.name,secondary:D.id,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(i,{children:["x",D.quantity]}),e.jsx(i,{sx:{width:110,textAlign:"right"},children:P(D.salePrice)})]},D.id))})})})});return e.jsxs(e.Fragment,{children:[S,L,e.jsxs(H,{open:T.open,onClose:T.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(R,{onClick:()=>{p(),T.onClose()},children:[e.jsx(x,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(R,{onClick:()=>{I.onTrue(),T.onClose()},sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(ee,{open:I.value,onClose:I.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(v,{variant:"contained",color:"error",onClick:h,children:"Delete"})})]})}se.propTypes={onDeleteRow:a.func,onSelectRow:a.func,onViewRow:a.func,row:a.object,selected:a.bool};function re({filters:r,onFilters:t,canReset:p,onResetFilters:s}){const h=$(),j=g.useCallback(m=>{t("name",m.target.value)},[t]),c=g.useCallback(m=>{t("startDate",m)},[t]),n=g.useCallback(m=>{t("endDate",m)},[t]);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsx(K,{label:"Start date",value:r.startDate,onChange:c,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),e.jsx(K,{label:"End date",value:r.endDate,onChange:n,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(le,{fullWidth:!0,value:r.name,onChange:j,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(ie,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(f,{onClick:h.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})]}),p&&e.jsx(v,{color:"error",sx:{flexShrink:0},onClick:s,startIcon:e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]}),e.jsxs(H,{open:h.open,onClose:h.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(R,{onClick:()=>{h.onClose()},children:[e.jsx(x,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(R,{onClick:()=>{h.onClose()},children:[e.jsx(x,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(R,{onClick:()=>{h.onClose()},children:[e.jsx(x,{icon:"solar:export-bold"}),"Export"]})]})]})}re.propTypes={canReset:a.bool,filters:a.object,onFilters:a.func,onResetFilters:a.func};function ne({filters:r,onFilters:t,onResetFilters:p,results:s,...h}){const j=Ie(r.startDate,r.endDate),c=()=>{t("status","all")},n=()=>{t("startDate",null),t("endDate",null)};return e.jsxs(l,{spacing:1.5,...h,children:[e.jsxs(i,{sx:{typography:"body2"},children:[e.jsx("strong",{children:s}),e.jsx(i,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(l,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[r.status!=="all"&&e.jsx(V,{label:"Status:",children:e.jsx(X,{size:"small",label:r.status,onDelete:c})}),r.startDate&&r.endDate&&e.jsx(V,{label:"Date:",children:e.jsx(X,{size:"small",label:j,onDelete:n})}),e.jsx(v,{color:"error",onClick:p,startIcon:e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}ne.propTypes={filters:a.object,onFilters:a.func,onResetFilters:a.func,results:a.number};function V({label:r,children:t,sx:p,...s}){return e.jsxs(l,{component:J,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...p},...s,children:[e.jsx(i,{component:"span",sx:{typography:"subtitle2"},children:r}),e.jsx(l,{spacing:1,direction:"row",flexWrap:"wrap",children:t})]})}V.propTypes={children:a.node,label:a.string,sx:a.object};const Be=[{value:"all",label:"All"},...ue],Le=[{id:"orderNumber",label:"Order",width:116},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"status",label:"Status",width:110},{id:"",width:88}],Y={name:"",status:"all",startDate:null,endDate:null};function Ye(){const[r,t]=g.useState([]),p=async()=>{try{const{data:o}=await z.get("/orders");t(o.reverse())}catch(o){console.log(o.message)}};g.useEffect(()=>{p()},[]);const s=fe({defaultOrderBy:"orderNumber"}),h=ce(),j=de(),c=U(),[n,m]=g.useState(Y),d=n.startDate&&n.endDate?n.startDate.getTime()>n.endDate.getTime():!1,u=Ee({inputData:r,comparator:Ce(s.order,s.orderBy),filters:n,dateError:d}),y=u.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage),I=s.dense?52:72,C=!!n.name||n.status!=="all"||!!n.startDate&&!!n.endDate,T=!u.length&&C||!u.length,S=g.useCallback((o,b)=>{s.onResetPage(),m(E=>({...E,[o]:b}))},[s]),L=g.useCallback(o=>{z.delete("orders",{data:{id:o}});const b=r.filter(E=>E.id!==o);t(b),s.onUpdatePageDeleteRow(y.length)},[y.length,s,r]),D=g.useCallback(()=>{z.delete("orders",{data:{id:s.selected}});const o=r.filter(b=>!s.selected.includes(b.id));t(o),s.onUpdatePageDeleteRows({totalRows:r.length,totalRowsInPage:y.length,totalRowsFiltered:u.length})},[u.length,y.length,s,r]),k=g.useCallback(()=>{m(Y)},[]),te=g.useCallback(o=>{j.push(N.dashboard.order.details(o))},[j]),oe=g.useCallback((o,b)=>{S("status",b)},[S]);return e.jsxs(e.Fragment,{children:[e.jsxs(xe,{maxWidth:h.themeStretch?!1:"lg",children:[e.jsx(we,{heading:"Orders",links:[{name:"Dashboard",href:N.dashboard.root},{name:"Orders",href:N.dashboard.order.root}],sx:{mb:{xs:3,md:5}}}),e.jsxs(_,{children:[e.jsx(he,{value:n.status,onChange:oe,sx:{px:2.5,boxShadow:o=>`inset 0 -2px 0 0 ${pe(o.palette.grey[500],.08)}`},children:Be.map(o=>e.jsx(je,{iconPosition:"end",value:o.value,label:o.label,icon:e.jsx(G,{variant:(o.value==="all"||o.value===n.status)&&"filled"||"soft",color:o.value==="completed"&&"success"||o.value==="pending"&&"warning"||o.value==="cancelled"&&"error"||"default",children:"0"})},o.value))}),e.jsx(re,{filters:n,onFilters:S,canReset:C,onResetFilters:k}),C&&e.jsx(ne,{filters:n,onFilters:S,onResetFilters:k,results:u.length,sx:{p:2.5,pt:0}}),e.jsxs(Fe,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(De,{dense:s.dense,numSelected:s.selected.length,rowCount:r.length,onSelectAllRows:o=>s.onSelectAllRows(o,r.map(b=>b.id)),action:e.jsx(me,{title:"Delete",children:e.jsx(f,{color:"primary",onClick:c.onTrue,children:e.jsx(x,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(Z,{children:e.jsxs(Oe,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Pe,{order:s.order,orderBy:s.orderBy,headLabel:Le,rowCount:r.length,numSelected:s.selected.length,onSort:s.onSort,onSelectAllRows:o=>s.onSelectAllRows(o,r.map(b=>b.id))}),e.jsxs(Ae,{children:[u.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(o=>e.jsx(se,{row:o,selected:s.selected.includes(o.id),onSelectRow:()=>s.onSelectRow(o.id),onDeleteRow:()=>L(o.id),onViewRow:()=>te(o.id)},o.id)),e.jsx(ve,{height:I,emptyRows:Te(s.page,s.rowsPerPage,r.length)}),e.jsx(Se,{notFound:T})]})]})})]}),e.jsx(ke,{count:u.length,page:s.page,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onRowsPerPageChange:s.onChangeRowsPerPage,onChangeDense:s.onChangeDense})]})]}),e.jsx(ee,{open:c.value,onClose:c.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",s.selected.length," "]})," items?"]}),action:e.jsx(v,{variant:"contained",color:"error",onClick:()=>{D(),c.onFalse()},children:"Delete"})})]})}function Ee({inputData:r,comparator:t,filters:p,dateError:s}){const{status:h,name:j,startDate:c,endDate:n}=p,m=r.map((d,u)=>[d,u]);return m.sort((d,u)=>{const y=t(d[0],u[0]);return y!==0?y:d[1]-u[1]}),r=m.map(d=>d[0]),j&&(r=r.filter(d=>d.orderNumber.toLowerCase().indexOf(j.toLowerCase())!==-1||d.customer.name.toLowerCase().indexOf(j.toLowerCase())!==-1||d.customer.email.toLowerCase().indexOf(j.toLowerCase())!==-1)),h!=="all"&&(r=r.filter(d=>d.status===h)),s||c&&n&&(r=r.filter(d=>O(d.createdAt)>=O(c)&&O(d.createdAt)<=O(n))),r}function Ne({customer:r,delivery:t,payment:p,shippingAddress:s}){const h=e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Customer Info",action:e.jsx(f,{children:e.jsx(x,{icon:"solar:pen-bold"})})}),e.jsxs(l,{direction:"row",sx:{p:3},children:[e.jsx(B,{alt:r==null?void 0:r.name,src:r==null?void 0:r.avatarUrl,sx:{width:48,height:48,mr:2}}),e.jsxs(l,{spacing:.5,alignItems:"flex-start",sx:{typography:"body2"},children:[e.jsx(M,{variant:"subtitle2",children:r==null?void 0:r.name}),e.jsx(i,{sx:{color:"text.secondary"},children:r==null?void 0:r.email}),e.jsx(v,{size:"small",color:"error",startIcon:e.jsx(x,{icon:"mingcute:add-line"}),sx:{mt:1},children:"Add to Blacklist"})]})]})]}),j=e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Delivery",action:e.jsx(f,{children:e.jsx(x,{icon:"solar:pen-bold"})})}),e.jsxs(l,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Ship by"}),t==null?void 0:t.shipBy]}),e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Speedy"}),t==null?void 0:t.speedy]}),e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Tracking No."}),e.jsx(ge,{underline:"always",color:"inherit",children:t==null?void 0:t.trackingNumber})]})]})]}),c=e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Shipping",action:e.jsx(f,{children:e.jsx(x,{icon:"solar:pen-bold"})})}),e.jsxs(l,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Address"}),s==null?void 0:s.fullAddress]}),e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Phone number"}),s==null?void 0:s.phoneNumber]})]})]}),n=e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Payment",action:e.jsx(f,{children:e.jsx(x,{icon:"solar:pen-bold"})})}),e.jsxs(l,{direction:"row",alignItems:"center",sx:{p:3,typography:"body2"},children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",flexGrow:1},children:"Type"}),"Cash",e.jsx(x,{icon:"logos:mastercard",width:24,sx:{ml:.5}})]})]});return e.jsxs(_,{children:[h,e.jsx(W,{sx:{borderStyle:"dashed"}}),j,e.jsx(W,{sx:{borderStyle:"dashed"}}),c,e.jsx(W,{sx:{borderStyle:"dashed"}}),n]})}Ne.propTypes={customer:a.object,delivery:a.object,payment:a.object,shippingAddress:a.object};function We({items:r=[],shipping:t,discount:p,taxes:s,subTotal:h,totalAmount:j}){const c=e.jsxs(l,{spacing:2,alignItems:"flex-end",sx:{my:3,textAlign:"right",typography:"body2"},children:[e.jsxs(l,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(i,{sx:{width:160,typography:"subtitle2"},children:P(h)||"-"})]}),e.jsxs(l,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(i,{sx:{width:160,...t&&{color:"error.main"}},children:t?`- ${P(t)}`:"-"})]}),e.jsxs(l,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(i,{sx:{width:160,...p&&{color:"error.main"}},children:p?`- ${P(p)}`:"-"})]}),e.jsxs(l,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Taxes"}),e.jsx(i,{sx:{width:160},children:s?P(s):"-"})]}),e.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx(i,{children:"Total"}),e.jsx(i,{sx:{width:160},children:P(j)||"-"})]})]});return e.jsxs(_,{children:[e.jsx(F,{title:"Details"}),e.jsxs(l,{sx:{px:3},children:[e.jsx(Z,{children:r==null?void 0:r.map(n=>e.jsxs(l,{direction:"row",alignItems:"center",sx:{py:3,minWidth:640,borderBottom:m=>`dashed 2px ${m.palette.background.neutral}`},children:[e.jsx(B,{src:n.images[0],variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(A,{primary:n.name,secondary:n.id,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(i,{sx:{typography:"body2"},children:["x",n.quantity]}),e.jsx(i,{sx:{width:110,textAlign:"right",typography:"subtitle2"},children:P(n.salePrice)})]},n.id))}),c]})]})}We.propTypes={discount:a.number,items:a.array,shipping:a.number,subTotal:a.number,taxes:a.number,totalAmount:a.number};function ze({status:r,backLink:t,createdAt:p,orderNumber:s,statusOptions:h,onChangeStatus:j}){const c=$();return e.jsxs(e.Fragment,{children:[e.jsxs(l,{spacing:3,direction:{xs:"column",md:"row"},sx:{mb:{xs:3,md:5}},children:[e.jsxs(l,{spacing:1,direction:"row",alignItems:"flex-start",children:[e.jsx(f,{component:be,href:t,children:e.jsx(x,{icon:"eva:arrow-ios-back-fill"})}),e.jsxs(l,{spacing:.5,children:[e.jsxs(l,{spacing:1,direction:"row",alignItems:"center",children:[e.jsxs(M,{variant:"h4",children:[" Order ",s," "]}),e.jsx(G,{variant:"soft",color:r==="completed"&&"success"||r==="pending"&&"warning"||r==="cancelled"&&"error"||"default",children:r})]}),e.jsx(M,{variant:"body2",sx:{color:"text.disabled"},children:ye(p)})]})]}),e.jsxs(l,{flexGrow:1,spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(v,{color:"inherit",variant:"outlined",endIcon:e.jsx(x,{icon:"eva:arrow-ios-downward-fill"}),onClick:c.onOpen,sx:{textTransform:"capitalize"},children:r}),e.jsx(v,{color:"inherit",variant:"outlined",startIcon:e.jsx(x,{icon:"solar:printer-minimalistic-bold"}),children:"Print"}),e.jsx(v,{color:"inherit",variant:"contained",startIcon:e.jsx(x,{icon:"solar:pen-bold"}),children:"Edit"})]})]}),e.jsx(H,{open:c.open,onClose:c.onClose,arrow:"top-right",sx:{width:140},children:h.map(n=>e.jsx(R,{selected:n.value===r,onClick:()=>{c.onClose(),j(n.value)},children:n.label},n.value))})]})}ze.propTypes={backLink:a.string,createdAt:a.instanceOf(Date),onChangeStatus:a.func,orderNumber:a.string,status:a.string,statusOptions:a.array};export{Ye as O,ze as a,We as b,Ne as c};
