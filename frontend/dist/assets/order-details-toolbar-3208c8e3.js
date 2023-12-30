import{bi as M,bx as G,af as e,ao as i,aR as E,bg as L,c7 as Q,aU as H,aW as f,az as h,bh as le,au as a,aQ as Z,by as _,aY as I,aw as S,aq as l,D as b,aX as ie,bm as ce,aN as de,bv as xe,ay as A,aB as he,aI as q,aK as pe,am as me,aL as ue,bN as je,bp as ee,cy as ge,cz as B,aV as F,ac as V,aA as be,aM as z,ax as ye,bI as we}from"./index-3935f2f5.js";import{C as te}from"./confirm-dialog-0ca673b0.js";import{C as fe}from"./custom-breadcrumbs-859b675c.js";import{u as Ce,g as Te,e as ve}from"./use-table-2091dd6f.js";import{T as K,a as w,c as De,b as Se,e as ke,f as Pe,d as Re}from"./table-pagination-custom-fce7d758.js";import{a as U}from"./api-1100fa52.js";import{f as D}from"./format-number-f1427ce0.js";import{C as Ie}from"./Checkbox-c380d3f2.js";import{D as X,s as Oe}from"./custom-date-range-picker-8c0baefe.js";import{C as Y}from"./Chip-83eb75cf.js";import{T as Fe,a as Be,b as Le}from"./TableContainer-c72fe4ba.js";function ne({row:n,selected:o,onViewRow:m,onSelectRow:t,onDeleteRow:p}){const{id:u,items:c,status:s,createdAt:j,customer:d,totalQuantity:g,subTotal:y}=n,O=M(),C=M(),T=G(),k=e.jsxs(K,{hover:!0,selected:o,children:[e.jsx(w,{padding:"checkbox",children:e.jsx(Ie,{checked:o,onClick:t})}),e.jsx(w,{children:e.jsxs(i,{onClick:m,sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:["#",u]})}),e.jsxs(w,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(E,{alt:d.name,src:d.avatarUrl,sx:{mr:2}}),e.jsx(L,{primary:d.name,secondary:d.email,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),e.jsx(w,{children:e.jsx(L,{primary:Q(new Date(j),"dd MMM yyyy"),secondary:Q(new Date(j),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsxs(w,{align:"center",children:[" ",g," "]}),e.jsxs(w,{children:[" ",D(y)," "]}),e.jsx(w,{children:e.jsx(H,{variant:"soft",color:s==="completed"&&"success"||s==="pending"&&"warning"||s==="cancelled"&&"error"||"default",children:s})}),e.jsxs(w,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(f,{color:C.value?"inherit":"default",onClick:C.onToggle,sx:{...C.value&&{bgcolor:"action.hover"}},children:e.jsx(h,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(f,{color:T.open?"inherit":"default",onClick:T.onOpen,children:e.jsx(h,{icon:"eva:more-vertical-fill"})})]})]}),N=e.jsx(K,{children:e.jsx(w,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(le,{in:C.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(a,{component:Z,sx:{m:1.5},children:c.map(v=>e.jsxs(a,{direction:"row",alignItems:"center",sx:{p:P=>P.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:P=>`solid 2px ${P.palette.background.neutral}`}},children:[e.jsx(E,{src:v.images[0],variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(L,{primary:v.name,secondary:v.id,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(i,{children:["x",v.quantity]}),e.jsx(i,{sx:{width:110,textAlign:"right"},children:D(v.salePrice)})]},v.id))})})})});return e.jsxs(e.Fragment,{children:[k,N,e.jsxs(_,{open:T.open,onClose:T.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(I,{onClick:()=>{m(),T.onClose()},children:[e.jsx(h,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(I,{onClick:()=>{O.onTrue(),T.onClose()},sx:{color:"error.main"},children:[e.jsx(h,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(te,{open:O.value,onClose:O.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(S,{variant:"contained",color:"error",onClick:p,children:"Delete"})})]})}ne.propTypes={onDeleteRow:l.func,onSelectRow:l.func,onViewRow:l.func,row:l.object,selected:l.bool};function re({filters:n,onFilters:o,canReset:m,onResetFilters:t}){const p=G(),u=b.useCallback(j=>{o("name",j.target.value)},[o]),c=b.useCallback(j=>{o("startDate",j)},[o]),s=b.useCallback(j=>{o("endDate",j)},[o]);return e.jsxs(e.Fragment,{children:[e.jsxs(a,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsx(X,{label:"Start date",value:n.startDate,onChange:c,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),e.jsx(X,{label:"End date",value:n.endDate,onChange:s,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:200}}}),e.jsxs(a,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(ie,{fullWidth:!0,value:n.name,onChange:u,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(ce,{position:"start",children:e.jsx(h,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(f,{onClick:p.onOpen,children:e.jsx(h,{icon:"eva:more-vertical-fill"})})]}),m&&e.jsx(S,{color:"error",sx:{flexShrink:0},onClick:t,startIcon:e.jsx(h,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]}),e.jsxs(_,{open:p.open,onClose:p.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(I,{onClick:()=>{p.onClose()},children:[e.jsx(h,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(I,{onClick:()=>{p.onClose()},children:[e.jsx(h,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(I,{onClick:()=>{p.onClose()},children:[e.jsx(h,{icon:"solar:export-bold"}),"Export"]})]})]})}re.propTypes={canReset:l.bool,filters:l.object,onFilters:l.func,onResetFilters:l.func};function se({filters:n,onFilters:o,onResetFilters:m,results:t,...p}){const u=Oe(n.startDate,n.endDate),c=()=>{o("status","all")},s=()=>{o("startDate",null),o("endDate",null)};return e.jsxs(a,{spacing:1.5,...p,children:[e.jsxs(i,{sx:{typography:"body2"},children:[e.jsx("strong",{children:t}),e.jsx(i,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(a,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[n.status!=="all"&&e.jsx($,{label:"Status:",children:e.jsx(Y,{size:"small",label:n.status,onDelete:c})}),n.startDate&&n.endDate&&e.jsx($,{label:"Date:",children:e.jsx(Y,{size:"small",label:u,onDelete:s})}),e.jsx(S,{color:"error",onClick:m,startIcon:e.jsx(h,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}se.propTypes={filters:l.object,onFilters:l.func,onResetFilters:l.func,results:l.number};function $({label:n,children:o,sx:m,...t}){return e.jsxs(a,{component:Z,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...m},...t,children:[e.jsx(i,{component:"span",sx:{typography:"subtitle2"},children:n}),e.jsx(a,{spacing:1,direction:"row",flexWrap:"wrap",children:o})]})}$.propTypes={children:l.node,label:l.string,sx:l.object};const Ee=[{value:"all",label:"All"},...ge],Ne=[{id:"orderNumber",label:"Order",width:116},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"status",label:"Status",width:110},{id:"",width:88}],J={name:"",status:"all",startDate:null,endDate:null};function Je(){const[n,o]=b.useState([]),m=async()=>{try{const{data:r}=await U.get("/orders");o(r.reverse())}catch(r){console.log(r.message)}};b.useEffect(()=>{m()},[]);const t=Ce({defaultOrderBy:"orderNumber"}),p=de(),u=xe(),c=M(),[s,j]=b.useState(J),d=s.startDate&&s.endDate?s.startDate.getTime()>s.endDate.getTime():!1,g=We({inputData:n,comparator:Te(t.order,t.orderBy),filters:s,dateError:d}),y=g.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage),O=t.dense?52:72,C=!!s.name||s.status!=="all"||!!s.startDate&&!!s.endDate,T=!g.length&&C||!g.length,k=b.useCallback((r,x)=>{t.onResetPage(),j(W=>({...W,[r]:x}))},[t]),N=b.useCallback(r=>{U.delete("orders",{data:{id:r}});const x=n.filter(W=>W.id!==r);o(x),t.onUpdatePageDeleteRow(y.length)},[y.length,t,n]),v=b.useCallback(()=>{U.delete("orders",{data:{id:t.selected}});const r=n.filter(x=>!t.selected.includes(x.id));o(r),t.onUpdatePageDeleteRows({totalRows:n.length,totalRowsInPage:y.length,totalRowsFiltered:g.length})},[g.length,y.length,t,n]),P=b.useCallback(()=>{j(J)},[]),oe=b.useCallback(r=>{u.push(A.dashboard.order.details(r))},[u]);b.useCallback((r,x)=>{k("status",x)},[k]);const[R,ae]=b.useState("all");return e.jsxs(e.Fragment,{children:[e.jsxs(he,{maxWidth:p.themeStretch?!1:"lg",children:[e.jsx(fe,{heading:"Orders",links:[{name:"Dashboard",href:A.dashboard.root},{name:"Orders",href:A.dashboard.order.root}],sx:{mb:{xs:3,md:5}}}),e.jsxs(q,{children:[e.jsx(pe,{value:R,onChange:(r,x)=>ae(x),sx:{px:2.5,boxShadow:r=>`inset 0 -2px 0 0 ${me(r.palette.grey[500],.08)}`},children:Ee.map(r=>e.jsx(ue,{iconPosition:"end",value:r.value,label:r.label,icon:e.jsxs(H,{variant:(r.value==="all"||r.value===s.status)&&"filled"||"soft",color:r.value==="completed"&&"success"||r.value==="pending"&&"warning"||r.value==="cancelled"&&"error"||"default",children:[r.value==="all"&&n.length,r.value==="pending"&&n.filter(x=>x.status==="Order received"||x.status==="pending").length,r.value==="completed"&&n.filter(x=>x.status==="completed").length,r.value==="cancelled"&&n.filter(x=>x.status==="cancelled").length,r.value==="refunded"&&n.filter(x=>x.status==="refunded").length]})},r.value))}),e.jsx(re,{filters:s,onFilters:k,canReset:C,onResetFilters:P}),C&&e.jsx(se,{filters:s,onFilters:k,onResetFilters:P,results:g.length,sx:{p:2.5,pt:0}}),e.jsxs(Fe,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(De,{dense:t.dense,numSelected:t.selected.length,rowCount:n.length,onSelectAllRows:r=>t.onSelectAllRows(r,n.map(x=>x.id)),action:e.jsx(je,{title:"Delete",children:e.jsx(f,{color:"primary",onClick:c.onTrue,children:e.jsx(h,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(ee,{children:e.jsxs(Be,{size:t.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Se,{order:t.order,orderBy:t.orderBy,headLabel:Ne,rowCount:n.length,numSelected:t.selected.length,onSort:t.onSort,onSelectAllRows:r=>t.onSelectAllRows(r,n.map(x=>x.id))}),e.jsxs(Le,{children:[g.filter(r=>R==="all"||R==="pending"&&(r.status==="pending"||r.status==="Order received")||R==="completed"&&r.status==="completed"||R==="cancelled"&&r.status==="cancelled"||R==="refunded"&&r.status==="refunded").map(r=>e.jsx(ne,{row:r,selected:t.selected.includes(r.id),onSelectRow:()=>t.onSelectRow(r.id),onDeleteRow:()=>N(r.id),onViewRow:()=>oe(r.id)},r.id)),e.jsx(ke,{height:O,emptyRows:ve(t.page,t.rowsPerPage,n.length)}),e.jsx(Pe,{notFound:T})]})]})})]}),e.jsx(Re,{count:g.length,page:t.page,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onRowsPerPageChange:t.onChangeRowsPerPage,onChangeDense:t.onChangeDense})]})]}),e.jsx(te,{open:c.value,onClose:c.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",t.selected.length," "]})," items?"]}),action:e.jsx(S,{variant:"contained",color:"error",onClick:()=>{v(),c.onFalse()},children:"Delete"})})]})}function We({inputData:n,comparator:o,filters:m,dateError:t}){const{status:p,name:u,startDate:c,endDate:s}=m,j=n.map((d,g)=>[d,g]);return j.sort((d,g)=>{const y=o(d[0],g[0]);return y!==0?y:d[1]-g[1]}),n=j.map(d=>d[0]),u&&(n=n.filter(d=>d.orderNumber.toLowerCase().indexOf(u.toLowerCase())!==-1||d.customer.name.toLowerCase().indexOf(u.toLowerCase())!==-1||d.customer.email.toLowerCase().indexOf(u.toLowerCase())!==-1)),p!=="all"&&(n=n.filter(d=>d.status===p)),t||c&&s&&(n=n.filter(d=>B(d.createdAt)>=B(c)&&B(d.createdAt)<=B(s))),n}function Ae({customer:n,delivery:o,payment:m,shippingAddress:t}){const p=e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Customer Info",action:e.jsx(f,{children:e.jsx(h,{icon:"solar:pen-bold"})})}),e.jsxs(a,{direction:"row",sx:{p:3},children:[e.jsx(E,{alt:n==null?void 0:n.name,src:n==null?void 0:n.avatarUrl,sx:{width:48,height:48,mr:2}}),e.jsxs(a,{spacing:.5,alignItems:"flex-start",sx:{typography:"body2"},children:[e.jsx(V,{variant:"subtitle2",children:n==null?void 0:n.name}),e.jsx(i,{sx:{color:"text.secondary"},children:n==null?void 0:n.email}),e.jsx(S,{size:"small",color:"error",startIcon:e.jsx(h,{icon:"mingcute:add-line"}),sx:{mt:1},children:"Add to Blacklist"})]})]})]}),u=e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Delivery",action:e.jsx(f,{children:e.jsx(h,{icon:"solar:pen-bold"})})}),e.jsxs(a,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(a,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Ship by"}),o==null?void 0:o.shipBy]}),e.jsxs(a,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Speedy"}),o==null?void 0:o.speedy]}),e.jsxs(a,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Tracking No."}),e.jsx(be,{underline:"always",color:"inherit",children:o==null?void 0:o.trackingNumber})]})]})]}),c=e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Shipping",action:e.jsx(f,{children:e.jsx(h,{icon:"solar:pen-bold"})})}),e.jsxs(a,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(a,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Suite"}),t==null?void 0:t.fullAddress.split(",")[0]]}),e.jsxs(a,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Street Address"}),t==null?void 0:t.fullAddress.split(",")[1]]}),e.jsxs(a,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"City"}),t==null?void 0:t.fullAddress.split(",")[2]]}),e.jsxs(a,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Country"}),t==null?void 0:t.fullAddress.split(",")[4]]}),e.jsxs(a,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Phone number"}),t==null?void 0:t.phoneNumber]})]})]}),s=e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Payment",action:e.jsx(f,{children:e.jsx(h,{icon:"solar:pen-bold"})})}),e.jsxs(a,{direction:"row",alignItems:"center",sx:{p:3,typography:"body2"},children:[e.jsx(i,{component:"span",sx:{color:"text.secondary",flexGrow:1},children:"Type"}),"Cash",e.jsx(h,{icon:"logos:mastercard",width:24,sx:{ml:.5}})]})]});return e.jsxs(q,{children:[p,e.jsx(z,{sx:{borderStyle:"dashed"}}),u,e.jsx(z,{sx:{borderStyle:"dashed"}}),c,e.jsx(z,{sx:{borderStyle:"dashed"}}),s]})}Ae.propTypes={customer:l.object,delivery:l.object,payment:l.object,shippingAddress:l.object};function ze({items:n=[],shipping:o,discount:m,taxes:t,subTotal:p,totalAmount:u}){const c=e.jsxs(a,{spacing:2,alignItems:"flex-end",sx:{my:3,textAlign:"right",typography:"body2"},children:[e.jsxs(a,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(i,{sx:{width:160,typography:"subtitle2"},children:D(p)||"-"})]}),e.jsxs(a,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(i,{sx:{width:160,...o&&{color:"error.main"}},children:o?`- ${D(o)}`:"-"})]}),e.jsxs(a,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(i,{sx:{width:160,...m&&{color:"error.main"}},children:m?`- ${D(m)}`:"-"})]}),e.jsxs(a,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Taxes"}),e.jsx(i,{sx:{width:160},children:t?D(t):"-"})]}),e.jsxs(a,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx(i,{children:"Total"}),e.jsx(i,{sx:{width:160},children:D(u)||"-"})]})]});return e.jsxs(q,{children:[e.jsx(F,{title:"Details"}),e.jsxs(a,{sx:{px:3},children:[e.jsx(ee,{children:n==null?void 0:n.map(s=>e.jsxs(a,{direction:"row",alignItems:"center",sx:{py:3,minWidth:640,borderBottom:j=>`dashed 2px ${j.palette.background.neutral}`},children:[e.jsx(E,{src:s.images[0],variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(L,{primary:s.name,secondary:s.id,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(i,{sx:{typography:"body2"},children:["x",s.quantity]}),e.jsx(i,{sx:{width:110,textAlign:"right",typography:"subtitle2"},children:D(s.salePrice)})]},s.id))}),c]})]})}ze.propTypes={discount:l.number,items:l.array,shipping:l.number,subTotal:l.number,taxes:l.number,totalAmount:l.number};function Ue({status:n,backLink:o,createdAt:m,orderNumber:t,statusOptions:p,onChangeStatus:u}){const c=G();return e.jsxs(e.Fragment,{children:[e.jsxs(a,{spacing:3,direction:{xs:"column",md:"row"},sx:{mb:{xs:3,md:5}},children:[e.jsxs(a,{spacing:1,direction:"row",alignItems:"flex-start",children:[e.jsx(f,{component:ye,href:o,children:e.jsx(h,{icon:"eva:arrow-ios-back-fill"})}),e.jsxs(a,{spacing:.5,children:[e.jsxs(a,{spacing:1,direction:"row",alignItems:"center",children:[e.jsxs(V,{variant:"h4",children:[" Order ",t," "]}),e.jsx(H,{variant:"soft",color:n==="completed"&&"success"||n==="pending"&&"warning"||n==="cancelled"&&"error"||"default",children:n})]}),e.jsx(V,{variant:"body2",sx:{color:"text.disabled"},children:we(m)})]})]}),e.jsxs(a,{flexGrow:1,spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(S,{color:"inherit",variant:"outlined",endIcon:e.jsx(h,{icon:"eva:arrow-ios-downward-fill"}),onClick:c.onOpen,sx:{textTransform:"capitalize"},children:n}),e.jsx(S,{color:"inherit",variant:"outlined",startIcon:e.jsx(h,{icon:"solar:printer-minimalistic-bold"}),children:"Print"}),e.jsx(S,{color:"inherit",variant:"contained",startIcon:e.jsx(h,{icon:"solar:pen-bold"}),children:"Edit"})]})]}),e.jsx(_,{open:c.open,onClose:c.onClose,arrow:"top-right",sx:{width:140},children:p.map(s=>e.jsx(I,{selected:s.value===n,onClick:()=>{c.onClose(),u(s.value)},children:s.label},s.value))})]})}Ue.propTypes={backLink:l.string,createdAt:l.instanceOf(Date),onChangeStatus:l.func,orderNumber:l.string,status:l.string,statusOptions:l.array};export{Je as O,Ue as a,ze as b,Ae as c};
