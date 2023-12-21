import{aT as z,bn as H,a9 as e,ae as i,aD as B,b1 as A,bT as Q,aG as $,aI as f,ai as x,bb as ae,aa as l,aC as Y,bo as V,aK as R,af as v,ay as a,D as g,aJ as le,aQ as ie,az as ce,bl as de,ah as N,ak as xe,at as _,av as he,ap as pe,aw as je,bB as me,bf as Z,c0 as ue,c1 as O,aH as F,ad as M,aj as ge,ax as W,ag as be,by as ye}from"./index-b8fc31ad.js";import{C as ee}from"./confirm-dialog-7ddcf535.js";import{C as we}from"./custom-breadcrumbs-e0a81333.js";import{u as fe,g as Ce,e as Te}from"./use-table-2dbbd1fd.js";import{T as q,b as De,a as Pe,d as ve,e as ke,c as Se}from"./table-pagination-custom-c9ec93fb.js";import{a as P}from"./format-number-4a57ba84.js";import{T as w}from"./TablePagination-16513e40.js";import{C as Re}from"./Checkbox-62006455.js";import{D as J}from"./DatePicker-45a15a74.js";import{s as Ie}from"./custom-date-range-picker-cd0ec28e.js";import{M as K}from"./Chip-1f2d59f0.js";import{a as U}from"./api-1100fa52.js";import{T as Fe,a as Oe,b as Ae}from"./TableContainer-4621d98c.js";function se({row:r,selected:o,onViewRow:p,onSelectRow:s,onDeleteRow:h}){const{id:j,items:c,status:n,createdAt:m,customer:d,totalQuantity:u,subTotal:y}=r,I=z(),C=z(),T=H(),k=e.jsxs(q,{hover:!0,selected:o,children:[e.jsx(w,{padding:"checkbox",children:e.jsx(Re,{checked:o,onClick:s})}),e.jsx(w,{children:e.jsxs(i,{onClick:p,sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:["#",j]})}),e.jsxs(w,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(B,{alt:d.name,src:d.avatarUrl,sx:{mr:2}}),e.jsx(A,{primary:d.name,secondary:d.email,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),e.jsx(w,{children:e.jsx(A,{primary:Q(new Date(m),"dd MMM yyyy"),secondary:Q(new Date(m),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsxs(w,{align:"center",children:[" ",u," "]}),e.jsxs(w,{children:[" ",P(y)," "]}),e.jsx(w,{children:e.jsx($,{variant:"soft",color:n==="completed"&&"success"||n==="pending"&&"warning"||n==="cancelled"&&"error"||"default",children:n})}),e.jsxs(w,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(f,{color:C.value?"inherit":"default",onClick:C.onToggle,sx:{...C.value&&{bgcolor:"action.hover"}},children:e.jsx(x,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(f,{color:T.open?"inherit":"default",onClick:T.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})]})]}),L=e.jsx(q,{children:e.jsx(w,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(ae,{in:C.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(l,{component:Y,sx:{m:1.5},children:c.map(D=>e.jsxs(l,{direction:"row",alignItems:"center",sx:{p:S=>S.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:S=>`solid 2px ${S.palette.background.neutral}`}},children:[e.jsx(B,{src:D.images[0],variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(A,{primary:D.name,secondary:D.id,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(i,{children:["x",D.quantity]}),e.jsx(i,{sx:{width:110,textAlign:"right"},children:P(D.salePrice)})]},D.id))})})})});return e.jsxs(e.Fragment,{children:[k,L,e.jsxs(V,{open:T.open,onClose:T.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(R,{onClick:()=>{p(),T.onClose()},children:[e.jsx(x,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(R,{onClick:()=>{I.onTrue(),T.onClose()},sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(ee,{open:I.value,onClose:I.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(v,{variant:"contained",color:"error",onClick:h,children:"Delete"})})]})}se.propTypes={onDeleteRow:a.func,onSelectRow:a.func,onViewRow:a.func,row:a.object,selected:a.bool};function re({filters:r,onFilters:o,canReset:p,onResetFilters:s}){const h=H(),j=g.useCallback(m=>{o("name",m.target.value)},[o]),c=g.useCallback(m=>{o("startDate",m)},[o]),n=g.useCallback(m=>{o("endDate",m)},[o]);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsx(J,{label:"Start date",value:r.startDate,onChange:c,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),e.jsx(J,{label:"End date",value:r.endDate,onChange:n,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(le,{fullWidth:!0,value:r.name,onChange:j,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(ie,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(f,{onClick:h.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})]}),p&&e.jsx(v,{color:"error",sx:{flexShrink:0},onClick:s,startIcon:e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]}),e.jsxs(V,{open:h.open,onClose:h.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(R,{onClick:()=>{h.onClose()},children:[e.jsx(x,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(R,{onClick:()=>{h.onClose()},children:[e.jsx(x,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(R,{onClick:()=>{h.onClose()},children:[e.jsx(x,{icon:"solar:export-bold"}),"Export"]})]})]})}re.propTypes={canReset:a.bool,filters:a.object,onFilters:a.func,onResetFilters:a.func};function ne({filters:r,onFilters:o,onResetFilters:p,results:s,...h}){const j=Ie(r.startDate,r.endDate),c=()=>{o("status","all")},n=()=>{o("startDate",null),o("endDate",null)};return e.jsxs(l,{spacing:1.5,...h,children:[e.jsxs(i,{sx:{typography:"body2"},children:[e.jsx("strong",{children:s}),e.jsx(i,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(l,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[r.status!=="all"&&e.jsx(G,{label:"Status:",children:e.jsx(K,{size:"small",label:r.status,onDelete:c})}),r.startDate&&r.endDate&&e.jsx(G,{label:"Date:",children:e.jsx(K,{size:"small",label:j,onDelete:n})}),e.jsx(v,{color:"error",onClick:p,startIcon:e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}ne.propTypes={filters:a.object,onFilters:a.func,onResetFilters:a.func,results:a.number};function G({label:r,children:o,sx:p,...s}){return e.jsxs(l,{component:Y,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...p},...s,children:[e.jsx(i,{component:"span",sx:{typography:"subtitle2"},children:r}),e.jsx(l,{spacing:1,direction:"row",flexWrap:"wrap",children:o})]})}G.propTypes={children:a.node,label:a.string,sx:a.object};const Be=[{value:"all",label:"All"},...ue],Le=[{id:"orderNumber",label:"Order",width:116},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"status",label:"Status",width:110},{id:"",width:88}],X={name:"",status:"all",startDate:null,endDate:null};function Ze(){const[r,o]=g.useState([]),p=async()=>{try{const{data:t}=await U.get("/orders");o(t)}catch(t){console.log(t.message)}};g.useEffect(()=>{p()},[]);const s=fe({defaultOrderBy:"orderNumber"}),h=ce(),j=de(),c=z(),[n,m]=g.useState(X),d=n.startDate&&n.endDate?n.startDate.getTime()>n.endDate.getTime():!1,u=Ee({inputData:r,comparator:Ce(s.order,s.orderBy),filters:n,dateError:d}),y=u.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage),I=s.dense?52:72,C=!!n.name||n.status!=="all"||!!n.startDate&&!!n.endDate,T=!u.length&&C||!u.length,k=g.useCallback((t,b)=>{s.onResetPage(),m(E=>({...E,[t]:b}))},[s]),L=g.useCallback(t=>{U.delete("orders",{data:{id:t}});const b=r.filter(E=>E.id!==t);o(b),s.onUpdatePageDeleteRow(y.length)},[y.length,s,r]),D=g.useCallback(()=>{U.delete("orders",{data:{id:s.selected}});const t=r.filter(b=>!s.selected.includes(b.id));o(t),s.onUpdatePageDeleteRows({totalRows:r.length,totalRowsInPage:y.length,totalRowsFiltered:u.length})},[u.length,y.length,s,r]),S=g.useCallback(()=>{m(X)},[]),oe=g.useCallback(t=>{j.push(N.dashboard.order.details(t))},[j]),te=g.useCallback((t,b)=>{k("status",b)},[k]);return e.jsxs(e.Fragment,{children:[e.jsxs(xe,{maxWidth:h.themeStretch?!1:"lg",children:[e.jsx(we,{heading:"Orders",links:[{name:"Dashboard",href:N.dashboard.root},{name:"Orders",href:N.dashboard.order.root}],sx:{mb:{xs:3,md:5}}}),e.jsxs(_,{children:[e.jsx(he,{value:n.status,onChange:te,sx:{px:2.5,boxShadow:t=>`inset 0 -2px 0 0 ${pe(t.palette.grey[500],.08)}`},children:Be.map(t=>e.jsx(je,{iconPosition:"end",value:t.value,label:t.label,icon:e.jsx($,{variant:(t.value==="all"||t.value===n.status)&&"filled"||"soft",color:t.value==="completed"&&"success"||t.value==="pending"&&"warning"||t.value==="cancelled"&&"error"||"default",children:"0"})},t.value))}),e.jsx(re,{filters:n,onFilters:k,canReset:C,onResetFilters:S}),C&&e.jsx(ne,{filters:n,onFilters:k,onResetFilters:S,results:u.length,sx:{p:2.5,pt:0}}),e.jsxs(Fe,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(De,{dense:s.dense,numSelected:s.selected.length,rowCount:r.length,onSelectAllRows:t=>s.onSelectAllRows(t,r.map(b=>b.id)),action:e.jsx(me,{title:"Delete",children:e.jsx(f,{color:"primary",onClick:c.onTrue,children:e.jsx(x,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(Z,{children:e.jsxs(Oe,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Pe,{order:s.order,orderBy:s.orderBy,headLabel:Le,rowCount:r.length,numSelected:s.selected.length,onSort:s.onSort,onSelectAllRows:t=>s.onSelectAllRows(t,r.map(b=>b.id))}),e.jsxs(Ae,{children:[u.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(t=>e.jsx(se,{row:t,selected:s.selected.includes(t.id),onSelectRow:()=>s.onSelectRow(t.id),onDeleteRow:()=>L(t.id),onViewRow:()=>oe(t.id)},t.id)),e.jsx(ve,{height:I,emptyRows:Te(s.page,s.rowsPerPage,r.length)}),e.jsx(ke,{notFound:T})]})]})})]}),e.jsx(Se,{count:u.length,page:s.page,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onRowsPerPageChange:s.onChangeRowsPerPage,onChangeDense:s.onChangeDense})]})]}),e.jsx(ee,{open:c.value,onClose:c.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",s.selected.length," "]})," items?"]}),action:e.jsx(v,{variant:"contained",color:"error",onClick:()=>{D(),c.onFalse()},children:"Delete"})})]})}function Ee({inputData:r,comparator:o,filters:p,dateError:s}){const{status:h,name:j,startDate:c,endDate:n}=p,m=r.map((d,u)=>[d,u]);return m.sort((d,u)=>{const y=o(d[0],u[0]);return y!==0?y:d[1]-u[1]}),r=m.map(d=>d[0]),j&&(r=r.filter(d=>d.orderNumber.toLowerCase().indexOf(j.toLowerCase())!==-1||d.customer.name.toLowerCase().indexOf(j.toLowerCase())!==-1||d.customer.email.toLowerCase().indexOf(j.toLowerCase())!==-1)),h!=="all"&&(r=r.filter(d=>d.status===h)),s||c&&n&&(r=r.filter(d=>O(d.createdAt)>=O(c)&&O(d.createdAt)<=O(n))),r}function Ne({customer:r,delivery:o,payment:p,shippingAddress:s}){const h=e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Customer Info",action:e.jsx(f,{children:e.jsx(x,{icon:"solar:pen-bold"})})}),e.jsxs(l,{direction:"row",sx:{p:3},children:[e.jsx(B,{alt:r==null?void 0:r.name,src:r==null?void 0:r.avatarUrl,sx:{width:48,height:48,mr:2}}),e.jsxs(l,{spacing:.5,alignItems:"flex-start",sx:{typography:"body2"},children:[e.jsx(M,{variant:"subtitle2",children:r==null?void 0:r.name}),e.jsx(i,{sx:{color:"text.secondary"},children:r==null?void 0:r.email}),e.jsx(v,{size:"small",color:"error",startIcon:e.jsx(x,{icon:"mingcute:add-line"}),sx:{mt:1},children:"Add to Blacklist"})]})]})]}),j=e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Delivery",action:e.jsx(f,{children:e.jsx(x,{icon:"solar:pen-bold"})})}),e.jsxs(l,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Ship by"}),o==null?void 0:o.shipBy]}),e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Speedy"}),o==null?void 0:o.speedy]}),e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Tracking No."}),e.jsx(ge,{underline:"always",color:"inherit",children:o==null?void 0:o.trackingNumber})]})]})]}),c=e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Shipping",action:e.jsx(f,{children:e.jsx(x,{icon:"solar:pen-bold"})})}),e.jsxs(l,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Address"}),s==null?void 0:s.fullAddress]}),e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Phone number"}),s==null?void 0:s.phoneNumber]})]})]}),n=e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Payment",action:e.jsx(f,{children:e.jsx(x,{icon:"solar:pen-bold"})})}),e.jsxs(l,{direction:"row",alignItems:"center",sx:{p:3,typography:"body2"},children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",flexGrow:1},children:"Type"}),"Cash",e.jsx(x,{icon:"logos:mastercard",width:24,sx:{ml:.5}})]})]});return e.jsxs(_,{children:[h,e.jsx(W,{sx:{borderStyle:"dashed"}}),j,e.jsx(W,{sx:{borderStyle:"dashed"}}),c,e.jsx(W,{sx:{borderStyle:"dashed"}}),n]})}Ne.propTypes={customer:a.object,delivery:a.object,payment:a.object,shippingAddress:a.object};function We({items:r=[],shipping:o,discount:p,taxes:s,subTotal:h,totalAmount:j}){const c=e.jsxs(l,{spacing:2,alignItems:"flex-end",sx:{my:3,textAlign:"right",typography:"body2"},children:[e.jsxs(l,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(i,{sx:{width:160,typography:"subtitle2"},children:P(h)||"-"})]}),e.jsxs(l,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(i,{sx:{width:160,...o&&{color:"error.main"}},children:o?`- ${P(o)}`:"-"})]}),e.jsxs(l,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(i,{sx:{width:160,...p&&{color:"error.main"}},children:p?`- ${P(p)}`:"-"})]}),e.jsxs(l,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Taxes"}),e.jsx(i,{sx:{width:160},children:s?P(s):"-"})]}),e.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx(i,{children:"Total"}),e.jsx(i,{sx:{width:160},children:P(j)||"-"})]})]});return e.jsxs(_,{children:[e.jsx(F,{title:"Details"}),e.jsxs(l,{sx:{px:3},children:[e.jsx(Z,{children:r==null?void 0:r.map(n=>e.jsxs(l,{direction:"row",alignItems:"center",sx:{py:3,minWidth:640,borderBottom:m=>`dashed 2px ${m.palette.background.neutral}`},children:[e.jsx(B,{src:n.coverUrl,variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(A,{primary:n.name,secondary:n.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(i,{sx:{typography:"body2"},children:["x",n.quantity]}),e.jsx(i,{sx:{width:110,textAlign:"right",typography:"subtitle2"},children:P(n.price)})]},n.id))}),c]})]})}We.propTypes={discount:a.number,items:a.array,shipping:a.number,subTotal:a.number,taxes:a.number,totalAmount:a.number};function Ue({status:r,backLink:o,createdAt:p,orderNumber:s,statusOptions:h,onChangeStatus:j}){const c=H();return e.jsxs(e.Fragment,{children:[e.jsxs(l,{spacing:3,direction:{xs:"column",md:"row"},sx:{mb:{xs:3,md:5}},children:[e.jsxs(l,{spacing:1,direction:"row",alignItems:"flex-start",children:[e.jsx(f,{component:be,href:o,children:e.jsx(x,{icon:"eva:arrow-ios-back-fill"})}),e.jsxs(l,{spacing:.5,children:[e.jsxs(l,{spacing:1,direction:"row",alignItems:"center",children:[e.jsxs(M,{variant:"h4",children:[" Order ",s," "]}),e.jsx($,{variant:"soft",color:r==="completed"&&"success"||r==="pending"&&"warning"||r==="cancelled"&&"error"||"default",children:r})]}),e.jsx(M,{variant:"body2",sx:{color:"text.disabled"},children:ye(p)})]})]}),e.jsxs(l,{flexGrow:1,spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(v,{color:"inherit",variant:"outlined",endIcon:e.jsx(x,{icon:"eva:arrow-ios-downward-fill"}),onClick:c.onOpen,sx:{textTransform:"capitalize"},children:r}),e.jsx(v,{color:"inherit",variant:"outlined",startIcon:e.jsx(x,{icon:"solar:printer-minimalistic-bold"}),children:"Print"}),e.jsx(v,{color:"inherit",variant:"contained",startIcon:e.jsx(x,{icon:"solar:pen-bold"}),children:"Edit"})]})]}),e.jsx(V,{open:c.open,onClose:c.onClose,arrow:"top-right",sx:{width:140},children:h.map(n=>e.jsx(R,{selected:n.value===r,onClick:()=>{c.onClose(),j(n.value)},children:n.label},n.value))})]})}Ue.propTypes={backLink:a.string,createdAt:a.instanceOf(Date),onChangeStatus:a.func,orderNumber:a.string,status:a.string,statusOptions:a.array};a.object;export{Ze as O,Ue as a,We as b,Ne as c};
