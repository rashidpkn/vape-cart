import{bE as W,bL as K,j as e,a as i,b8 as L,bD as B,cg as G,bb as V,bd as S,I as u,cu as oe,S as o,b6 as X,bM as Y,bf as $,B as D,aP as a,b7 as q,H as b,b4 as ae,bJ as le,bu as U,p as z,aU as ie,a$ as _,b1 as ce,aL as de,b2 as xe,b_ as he,bB as Z,ct as pe,cv as F,bc as O,T as H,aT as ue,b3 as A,R as je,bV as me}from"./index-5abd2fc6.js";import{C as ee}from"./confirm-dialog-41a0d629.js";import{C as ge}from"./custom-breadcrumbs-c7a464a8.js";import{u as be,g as ye,e as we}from"./use-table-2f6262a7.js";import{T as Q,a as w,c as fe,b as Ce,e as Te,f as Se,d as ve}from"./table-pagination-custom-e0cfbd9e.js";import{f as T}from"./format-number-4c6f0f97.js";import{C as De}from"./Checkbox-9b69a79b.js";import{s as Pe}from"./custom-date-range-picker-6558a6a7.js";import{T as Re,a as ke,b as Ie}from"./TableContainer-04c4ff2e.js";function ne({row:t,selected:l,onViewRow:h,onSelectRow:n,onDeleteRow:m}){const{id:p,items:x,status:s,createdAt:g,customer:c,totalQuantity:j,subTotal:y}=t,R=W(),v=W(),f=K(),k=e.jsxs(Q,{hover:!0,selected:l,children:[e.jsx(w,{padding:"checkbox",children:e.jsx(De,{checked:l,onClick:n})}),e.jsx(w,{children:e.jsxs(i,{onClick:h,sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:["#",p]})}),e.jsxs(w,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(L,{alt:c.name,src:c.avatarUrl,sx:{mr:2}}),e.jsx(B,{primary:c.name,secondary:c.email,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),e.jsx(w,{children:e.jsx(B,{primary:G(new Date(g),"dd MMM yyyy"),secondary:G(new Date(g),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsxs(w,{align:"center",children:[" ",j," "]}),e.jsxs(w,{children:[" ",T(y)," "]}),e.jsx(w,{children:e.jsx(V,{variant:"soft",color:s==="completed"&&"success"||s==="pending"&&"warning"||s==="cancelled"&&"error"||"default",children:s})}),e.jsxs(w,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(S,{color:v.value?"inherit":"default",onClick:v.onToggle,sx:{...v.value&&{bgcolor:"action.hover"}},children:e.jsx(u,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(S,{color:f.open?"inherit":"default",onClick:f.onOpen,children:e.jsx(u,{icon:"eva:more-vertical-fill"})})]})]}),E=e.jsx(Q,{children:e.jsx(w,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(oe,{in:v.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(o,{component:X,sx:{m:1.5},children:x.map(C=>e.jsxs(o,{direction:"row",alignItems:"center",sx:{p:I=>I.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:I=>`solid 2px ${I.palette.background.neutral}`}},children:[e.jsx(L,{src:C.images[0],variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(B,{primary:C.name,secondary:C.id,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(i,{children:["x",C.quantity]}),e.jsx(i,{sx:{width:110,textAlign:"right"},children:T(C.salePrice)})]},C.id))})})})});return e.jsxs(e.Fragment,{children:[k,E,e.jsxs(Y,{open:f.open,onClose:f.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs($,{onClick:()=>{h(),f.onClose()},children:[e.jsx(u,{icon:"solar:eye-bold"}),"View"]}),e.jsxs($,{onClick:()=>{R.onTrue(),f.onClose()},sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(ee,{open:R.value,onClose:R.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(D,{variant:"contained",color:"error",onClick:m,children:"Delete"})})]})}ne.propTypes={onDeleteRow:a.func,onSelectRow:a.func,onViewRow:a.func,row:a.object,selected:a.bool};a.bool,a.object,a.func,a.func;function te({filters:t,onFilters:l,onResetFilters:h,results:n,...m}){const p=Pe(t.startDate,t.endDate),x=()=>{l("status","all")},s=()=>{l("startDate",null),l("endDate",null)};return e.jsxs(o,{spacing:1.5,...m,children:[e.jsxs(i,{sx:{typography:"body2"},children:[e.jsx("strong",{children:n}),e.jsx(i,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(o,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[t.status!=="all"&&e.jsx(M,{label:"Status:",children:e.jsx(q,{size:"small",label:t.status,onDelete:x})}),t.startDate&&t.endDate&&e.jsx(M,{label:"Date:",children:e.jsx(q,{size:"small",label:p,onDelete:s})}),e.jsx(D,{color:"error",onClick:h,startIcon:e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}te.propTypes={filters:a.object,onFilters:a.func,onResetFilters:a.func,results:a.number};function M({label:t,children:l,sx:h,...n}){return e.jsxs(o,{component:X,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...h},...n,children:[e.jsx(i,{component:"span",sx:{typography:"subtitle2"},children:t}),e.jsx(o,{spacing:1,direction:"row",flexWrap:"wrap",children:l})]})}M.propTypes={children:a.node,label:a.string,sx:a.object};const Oe=[{value:"all",label:"All"},...pe],Fe=[{id:"orderNumber",label:"Order",width:116},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"status",label:"Status",width:110},{id:"",width:88}],J={name:"",status:"all",startDate:null,endDate:null};function Ge(){const[t,l]=b.useState([]),h=async()=>{try{const{data:r}=await U.get("/orders");l(r.reverse())}catch(r){console.log(r.message)}};b.useEffect(()=>{h()},[]);const n=be({defaultOrderBy:"orderNumber"}),m=ae(),p=le(),x=W(),[s,g]=b.useState(J),c=s.startDate&&s.endDate?s.startDate.getTime()>s.endDate.getTime():!1,j=Be({inputData:t,comparator:ye(n.order,n.orderBy),filters:s,dateError:c}),y=j.slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage),R=n.dense?52:72,v=!!s.name||s.status!=="all"||!!s.startDate&&!!s.endDate,f=!j.length&&v||!j.length,k=b.useCallback((r,d)=>{n.onResetPage(),g(N=>({...N,[r]:d}))},[n]),E=b.useCallback(r=>{U.delete("orders",{data:{id:r}});const d=t.filter(N=>N.id!==r);l(d),n.onUpdatePageDeleteRow(y.length)},[y.length,n,t]),C=b.useCallback(()=>{U.delete("orders",{data:{id:n.selected}});const r=t.filter(d=>!n.selected.includes(d.id));l(r),n.onUpdatePageDeleteRows({totalRows:t.length,totalRowsInPage:y.length,totalRowsFiltered:j.length})},[j.length,y.length,n,t]),I=b.useCallback(()=>{g(J)},[]),re=b.useCallback(r=>{p.push(z.dashboard.order.details(r))},[p]);b.useCallback((r,d)=>{k("status",d)},[k]);const[P,se]=b.useState("all");return e.jsxs(e.Fragment,{children:[e.jsxs(ie,{maxWidth:m.themeStretch?!1:"lg",children:[e.jsx(ge,{heading:"Orders",links:[{name:"Dashboard",href:z.dashboard.root},{name:"Orders",href:z.dashboard.order.root}],sx:{mb:{xs:3,md:5}}}),e.jsxs(_,{children:[e.jsx(ce,{value:P,onChange:(r,d)=>se(d),sx:{px:2.5,boxShadow:r=>`inset 0 -2px 0 0 ${de(r.palette.grey[500],.08)}`},children:Oe.map(r=>e.jsx(xe,{iconPosition:"end",value:r.value,label:r.label,icon:e.jsxs(V,{variant:(r.value==="all"||r.value===s.status)&&"filled"||"soft",color:r.value==="completed"&&"success"||r.value==="pending"&&"warning"||r.value==="cancelled"&&"error"||"default",children:[r.value==="all"&&t.length,r.value==="pending"&&t.filter(d=>d.status==="Order received"||d.status==="pending").length,r.value==="completed"&&t.filter(d=>d.status==="completed").length,r.value==="cancelled"&&t.filter(d=>d.status==="cancelled").length,r.value==="refunded"&&t.filter(d=>d.status==="refunded").length]})},r.value))}),v&&e.jsx(te,{filters:s,onFilters:k,onResetFilters:I,results:j.length,sx:{p:2.5,pt:0}}),e.jsxs(Re,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(fe,{dense:n.dense,numSelected:n.selected.length,rowCount:t.length,onSelectAllRows:r=>n.onSelectAllRows(r,t.map(d=>d.id)),action:e.jsx(he,{title:"Delete",children:e.jsx(S,{color:"primary",onClick:x.onTrue,children:e.jsx(u,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(Z,{children:e.jsxs(ke,{size:n.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Ce,{order:n.order,orderBy:n.orderBy,headLabel:Fe,rowCount:t.length,numSelected:n.selected.length,onSort:n.onSort,onSelectAllRows:r=>n.onSelectAllRows(r,t.map(d=>d.id))}),e.jsxs(Ie,{children:[j.filter(r=>P==="all"||P==="pending"&&(r.status==="pending"||r.status==="Order received")||P==="completed"&&r.status==="completed"||P==="cancelled"&&r.status==="cancelled"||P==="refunded"&&r.status==="refunded").map(r=>e.jsx(ne,{row:r,selected:n.selected.includes(r.id),onSelectRow:()=>n.onSelectRow(r.id),onDeleteRow:()=>E(r.id),onViewRow:()=>re(r.id)},r.id)),e.jsx(Te,{height:R,emptyRows:we(n.page,n.rowsPerPage,t.length)}),e.jsx(Se,{notFound:f})]})]})})]}),e.jsx(ve,{count:j.length,page:n.page,rowsPerPage:n.rowsPerPage,onPageChange:n.onChangePage,onRowsPerPageChange:n.onChangeRowsPerPage,onChangeDense:n.onChangeDense})]})]}),e.jsx(ee,{open:x.value,onClose:x.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",n.selected.length," "]})," items?"]}),action:e.jsx(D,{variant:"contained",color:"error",onClick:()=>{C(),x.onFalse()},children:"Delete"})})]})}function Be({inputData:t,comparator:l,filters:h,dateError:n}){const{status:m,name:p,startDate:x,endDate:s}=h,g=t.map((c,j)=>[c,j]);return g.sort((c,j)=>{const y=l(c[0],j[0]);return y!==0?y:c[1]-j[1]}),t=g.map(c=>c[0]),p&&(t=t.filter(c=>c.orderNumber.toLowerCase().indexOf(p.toLowerCase())!==-1||c.customer.name.toLowerCase().indexOf(p.toLowerCase())!==-1||c.customer.email.toLowerCase().indexOf(p.toLowerCase())!==-1)),m!=="all"&&(t=t.filter(c=>c.status===m)),n||x&&s&&(t=t.filter(c=>F(c.createdAt)>=F(x)&&F(c.createdAt)<=F(s))),t}function Le({customer:t,delivery:l,payment:h,shippingAddress:n}){const m=e.jsxs(e.Fragment,{children:[e.jsx(O,{title:"Customer Info",action:e.jsx(S,{children:e.jsx(u,{icon:"solar:pen-bold"})})}),e.jsxs(o,{direction:"row",sx:{p:3},children:[e.jsx(L,{alt:t==null?void 0:t.name,src:t==null?void 0:t.avatarUrl,sx:{width:48,height:48,mr:2}}),e.jsxs(o,{spacing:.5,alignItems:"flex-start",sx:{typography:"body2"},children:[e.jsx(H,{variant:"subtitle2",children:t==null?void 0:t.name}),e.jsx(i,{sx:{color:"text.secondary"},children:t==null?void 0:t.email}),e.jsx(D,{size:"small",color:"error",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),sx:{mt:1},children:"Add to Blacklist"})]})]})]}),p=e.jsxs(e.Fragment,{children:[e.jsx(O,{title:"Delivery",action:e.jsx(S,{children:e.jsx(u,{icon:"solar:pen-bold"})})}),e.jsxs(o,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Ship by"}),l==null?void 0:l.shipBy]}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Speedy"}),l==null?void 0:l.speedy]}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Tracking No."}),e.jsx(ue,{underline:"always",color:"inherit",children:l==null?void 0:l.trackingNumber})]})]})]}),x=e.jsxs(e.Fragment,{children:[e.jsx(O,{title:"Shipping",action:e.jsx(S,{children:e.jsx(u,{icon:"solar:pen-bold"})})}),e.jsxs(o,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Suite"}),n==null?void 0:n.fullAddress.split(",")[0]]}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Street Address"}),n==null?void 0:n.fullAddress.split(",")[1]]}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"City"}),n==null?void 0:n.fullAddress.split(",")[2]]}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Country"}),n==null?void 0:n.fullAddress.split(",")[4]]}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Phone number"}),n==null?void 0:n.phoneNumber]})]})]}),s=e.jsxs(e.Fragment,{children:[e.jsx(O,{title:"Payment",action:e.jsx(S,{children:e.jsx(u,{icon:"solar:pen-bold"})})}),e.jsxs(o,{direction:"row",alignItems:"center",sx:{p:3,typography:"body2"},children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",flexGrow:1},children:"Type"}),"Cash",e.jsx(u,{icon:"la:money-bill-wave",width:24,sx:{ml:.5,color:"#85bb65"}})]})]});return e.jsxs(_,{children:[m,e.jsx(A,{sx:{borderStyle:"dashed"}}),p,e.jsx(A,{sx:{borderStyle:"dashed"}}),x,e.jsx(A,{sx:{borderStyle:"dashed"}}),s]})}Le.propTypes={customer:a.object,delivery:a.object,payment:a.object,shippingAddress:a.object};function Ee({items:t=[],shipping:l,discount:h,taxes:n,subTotal:m,totalAmount:p}){const x=e.jsxs(o,{spacing:2,alignItems:"flex-end",sx:{my:3,textAlign:"right",typography:"body2"},children:[e.jsxs(o,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(i,{sx:{width:160,typography:"subtitle2"},children:T(m)||"-"})]}),e.jsxs(o,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(i,{sx:{width:160,...l&&{color:"error.main"}},children:l?`- ${T(l)}`:"-"})]}),e.jsxs(o,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(i,{sx:{width:160,...h&&{color:"error.main"}},children:h?`- ${T(h)}`:"-"})]}),e.jsxs(o,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Taxes"}),e.jsx(i,{sx:{width:160},children:n?T(n):"-"})]}),e.jsxs(o,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx(i,{children:"Total"}),e.jsx(i,{sx:{width:160},children:T(p)||"-"})]})]});return e.jsxs(_,{children:[e.jsx(O,{title:"Details"}),e.jsxs(o,{sx:{px:3},children:[e.jsx(Z,{children:t==null?void 0:t.map(s=>e.jsxs(o,{direction:"row",alignItems:"center",sx:{py:3,minWidth:640,borderBottom:g=>`dashed 2px ${g.palette.background.neutral}`},children:[e.jsx(L,{src:s.images[0],variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(B,{primary:s.name,secondary:s.id,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(i,{sx:{typography:"body2"},children:["x",s.quantity]}),e.jsx(i,{sx:{width:110,textAlign:"right",typography:"subtitle2"},children:T(s.salePrice)})]},s.id))}),x]})]})}Ee.propTypes={discount:a.number,items:a.array,shipping:a.number,subTotal:a.number,taxes:a.number,totalAmount:a.number};function Ne({status:t,backLink:l,createdAt:h,orderNumber:n,statusOptions:m,onChangeStatus:p}){const x=K();return e.jsxs(e.Fragment,{children:[e.jsxs(o,{spacing:3,direction:{xs:"column",md:"row"},sx:{mb:{xs:3,md:5}},children:[e.jsxs(o,{spacing:1,direction:"row",alignItems:"flex-start",children:[e.jsx(S,{component:je,href:l,children:e.jsx(u,{icon:"eva:arrow-ios-back-fill"})}),e.jsxs(o,{spacing:.5,children:[e.jsxs(o,{spacing:1,direction:"row",alignItems:"center",children:[e.jsxs(H,{variant:"h4",children:[" Order ",n," "]}),e.jsx(V,{variant:"soft",color:t==="completed"&&"success"||t==="pending"&&"warning"||t==="cancelled"&&"error"||"default",children:t})]}),e.jsx(H,{variant:"body2",sx:{color:"text.disabled"},children:me(h)})]})]}),e.jsxs(o,{flexGrow:1,spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(D,{color:"inherit",variant:"outlined",endIcon:e.jsx(u,{icon:"eva:arrow-ios-downward-fill"}),onClick:x.onOpen,sx:{textTransform:"capitalize"},children:t}),e.jsx(D,{color:"inherit",variant:"outlined",startIcon:e.jsx(u,{icon:"solar:printer-minimalistic-bold"}),children:"Print"}),e.jsx(D,{color:"inherit",variant:"contained",startIcon:e.jsx(u,{icon:"solar:pen-bold"}),children:"Edit"})]})]}),e.jsx(Y,{open:x.open,onClose:x.onClose,arrow:"top-right",sx:{width:140},children:m.map(s=>e.jsx($,{selected:s.value===t,onClick:()=>{x.onClose(),p(s.value)},children:s.label},s.value))})]})}Ne.propTypes={backLink:a.string,createdAt:a.instanceOf(Date),onChangeStatus:a.func,orderNumber:a.string,status:a.string,statusOptions:a.array};export{Ge as O,Ne as a,Ee as b,Le as c};
