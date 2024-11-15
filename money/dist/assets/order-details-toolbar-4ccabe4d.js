import{br as X,aB as $,aV as G,j as e,b8 as W,b9 as y,bS as ee,aT as d,ba as H,c2 as _,c3 as q,c4 as N,c5 as M,c6 as ne,aK as S,aL as j,c7 as se,S as o,c8 as ae,B as R,aY as Q,aZ as O,bI as J,P as i,a4 as T,bz as re,aA as te,bJ as le,a$ as E,p as U,bB as oe,aS as K,bv as ie,aN as de,bw as ce,bT as he,c9 as xe,ca as pe,b4 as ge,bE as je,bp as ue,a_ as be,b5 as me,b6 as ye,b7 as we,cb as fe,cc as Ce,cd as Se,bH as ve,c1 as Te,b1 as Pe,b2 as ke,ce as D,b3 as Ie,aW as A,g as V,e as Re,cf as z,R as De,cg as Ae}from"./index-d7ce09e7.js";function Y({row:n,store:t=[],selected:w,onViewRow:C,onSelectRow:u,onDeleteRow:b}){const{id:p,items:g,status:a,createdAt:l,customer:h,totalQuantity:m,subTotal:f}=n;X();const P=$(),v=$(),k=G(),L=e.jsxs(W,{hover:!0,selected:w,children:[e.jsx(y,{padding:"checkbox",children:e.jsx(ee,{checked:w,onClick:u})}),e.jsx(y,{children:e.jsx(d,{onClick:C,sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:`#${p.toString().padStart(3,"0")}`})}),e.jsxs(y,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(H,{alt:h.name,src:h.avatarUrl,sx:{mr:2}}),e.jsx(_,{primary:h.first_name+" "+h.last_name,secondary:h.email,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),e.jsx(y,{width:"300px",children:g.map(x=>{var I;return e.jsxs("p",{style:{whiteSpace:"nowrap"},children:[" ",(I=t.find(c=>x.userId===c.uid))==null?void 0:I.displayName,"  "]},x.id)})}),e.jsx(y,{children:e.jsx(_,{primary:q(new Date(l),"dd MMM yyyy"),secondary:q(new Date(l),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsxs(y,{align:"center",children:[" ",m," "]}),e.jsxs(y,{children:[" ",N(f)," "]}),e.jsxs(y,{children:[" ",N(f*.3)," "]}),e.jsx(y,{children:e.jsx(M,{variant:"soft",color:a==="completed"&&"success"||a==="pending"&&"warning"||a==="cancelled"&&"error"||"default",children:a})}),e.jsxs(y,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[(a==="pending"||a==="completed")&&e.jsx(ne,{to:`/dashboard/order/${p}/edit`,children:e.jsx(S,{color:v.value?"inherit":"default",sx:{...v.value&&{bgcolor:"action.hover"}},children:e.jsx(j,{icon:"material-symbols:edit-outline"})})}),e.jsx(S,{color:v.value?"inherit":"default",onClick:v.onToggle,sx:{...v.value&&{bgcolor:"action.hover"}},children:e.jsx(j,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(S,{color:k.open?"inherit":"default",onClick:k.onOpen,children:e.jsx(j,{icon:"eva:more-vertical-fill"})})]})]}),B=e.jsx(W,{children:e.jsx(y,{sx:{p:0,border:"none"},colSpan:10,children:e.jsx(se,{in:v.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(o,{component:ae,sx:{m:1.5},children:g.map(x=>{var I;return e.jsxs(o,{direction:"row",alignItems:"center",sx:{p:c=>c.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:c=>`solid 2px ${c.palette.background.neutral}`}},children:[e.jsx(H,{src:x.images[0],variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(_,{primary:x.name,secondary:x.id,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsx(d,{sx:{m:5},children:(I=t==null?void 0:t.find(c=>c.uid===x.userId))==null?void 0:I.displayName}),e.jsxs(d,{children:["x",x.quantity]}),e.jsx(d,{sx:{width:110,textAlign:"right"},children:N(x.price)}),e.jsx(d,{sx:{mx:3},children:e.jsx(R,{variant:"contained",color:"info",children:x==null?void 0:x.status})})]},x.id)})})})})});return e.jsxs(e.Fragment,{children:[L,B,e.jsx(Q,{open:k.open,onClose:k.onClose,arrow:"right-top",sx:{width:140},children:e.jsxs(O,{onClick:()=>{C(),k.onClose()},children:[e.jsx(j,{icon:"solar:eye-bold"}),"View"]})}),e.jsx(J,{open:P.value,onClose:P.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(R,{variant:"contained",color:"error",onClick:b,children:"Delete"})})]})}Y.propTypes={onDeleteRow:i.func,onSelectRow:i.func,onViewRow:i.func,row:i.object,selected:i.bool};const Oe=[{value:"all",label:"All"},...Te],Le=[{id:"id",label:"Order",width:116},{id:"name",label:"Customer"},{id:"partners",label:"Partners"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"commission",label:"Commission",width:140},{id:"status",label:"Status",width:110},{id:"",width:88}],Be={name:"",status:"all",startDate:null,endDate:null};function Ue(){const[n,t]=T.useState([]),[w,C]=T.useState([]),[u,b]=T.useState(""),p=async()=>{try{const{data:s}=await E.get("/orders");t(s)}catch(s){console.log(s.message)}},g=async()=>{const s=await Pe(ke(Ie,"users")),r=[];s.forEach(F=>{r.push(F.data())}),C(r)};T.useEffect(()=>{p(),g()},[]);const a=re({defaultOrderBy:"orderNumber"}),l=te(),h=$(),m=Be,f=Fe({inputData:n,comparator:le(a.order,a.orderBy),filters:m}),P=f.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage),v=a.dense?52:72,k=!!m.name||m.status!=="all"||!!m.startDate&&!!m.endDate,L=!f.length&&k||!f.length,B=T.useCallback(s=>{E.delete("orders",{data:{id:s}});const r=n.filter(F=>F.id!==s);t(r),a.onUpdatePageDeleteRow(P.length)},[P.length,a,n]),x=T.useCallback(()=>{E.delete("orders",{data:{id:a.selected}});const s=n.filter(r=>!a.selected.includes(r.id));t(s),a.onUpdatePageDeleteRows({totalRows:n.length,totalRowsInPage:P.length,totalRowsFiltered:f.length})},[f.length,P.length,a,n]),I=T.useCallback(s=>{l.push(U.dashboard.order.details(s))},[l]),[c,Z]=T.useState("all");return e.jsxs(e.Fragment,{children:[e.jsxs(d,{px:5,children:[e.jsx(oe,{heading:"Orders",links:[{name:"Dashboard",href:U.dashboard.root},{name:"Orders",href:U.dashboard.order.root}],sx:{mb:{xs:3,md:5}}}),e.jsxs(K,{children:[e.jsx(ie,{value:c,onChange:(s,r)=>Z(r),sx:{px:2.5,boxShadow:s=>`inset 0 -2px 0 0 ${de(s.palette.grey[500],.08)}`},children:Oe.map(s=>e.jsx(ce,{iconPosition:"end",value:s.value,label:s.label,icon:e.jsxs(M,{variant:(s.value==="all"||s.value===m.status)&&"filled"||"soft",color:s.value==="processing"&&"info"||s.value==="completed"&&"success"||s.value==="pending"&&"warning"||s.value==="cancelled"&&"error"||"default",children:[s.value==="all"&&n.length,s.value==="processing"&&n.filter(r=>r.status==="processing").length,s.value==="pending"&&n.filter(r=>r.status==="Order received"||r.status==="pending").length,s.value==="In Transit"&&n.filter(r=>r.status==="In Transit").length,s.value==="completed"&&n.filter(r=>r.status==="completed").length,s.value==="cancelled"&&n.filter(r=>r.status==="cancelled").length,s.value==="refunded"&&n.filter(r=>r.status==="refunded").length]})},s.value))}),e.jsx(d,{p:1,children:e.jsxs(he,{children:[e.jsx(xe,{id:"demo-simple-select-label",children:"Partners"}),e.jsxs(pe,{label:"Partners",value:u,onChange:s=>b(s.target.value),placeholder:"Partners",sx:{minWidth:"200px"},size:"small",children:[e.jsx(O,{value:"",children:"Select a partner"}),w.map(s=>e.jsx(O,{value:s.uid,children:s.displayName},s.uid))]})]})}),e.jsxs(ge,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(je,{dense:a.dense,numSelected:a.selected.length,rowCount:n.length,onSelectAllRows:s=>a.onSelectAllRows(s,n.map(r=>r.id)),action:e.jsx(ue,{title:"Delete",children:e.jsx(S,{color:"primary",onClick:h.onTrue,children:e.jsx(j,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(be,{children:e.jsxs(me,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(ye,{order:a.order,orderBy:a.orderBy,headLabel:Le,rowCount:n.length,numSelected:a.selected.length,onSort:a.onSort,onSelectAllRows:s=>a.onSelectAllRows(s,n.map(r=>r.id))}),e.jsxs(we,{children:[f.filter(s=>(c==="all"||c==="processing"&&s.status==="processing"||c==="pending"&&(s.status==="pending"||s.status==="Order received")||c==="completed"&&s.status==="completed"||c==="cancelled"&&s.status==="cancelled"||c==="In Transit"&&s.status==="In Transit"||c==="refunded"&&s.status==="refunded")&&(u?s.items.find(r=>r.userId===u):!0)).map(s=>e.jsx(Y,{store:w,row:s,selected:a.selected.includes(s.id),onSelectRow:()=>a.onSelectRow(s.id),onDeleteRow:()=>B(s.id),onViewRow:()=>I(s.id)},s.id)),e.jsx(fe,{height:v,emptyRows:Ce(a.page,a.rowsPerPage,n.length)}),e.jsx(Se,{notFound:L})]})]})})]}),e.jsx(ve,{count:f.length,page:a.page,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage,onChangeDense:a.onChangeDense})]})]}),e.jsx(J,{open:h.value,onClose:h.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",a.selected.length," "]})," items?"]}),action:e.jsx(R,{variant:"contained",color:"error",onClick:()=>{x(),h.onFalse()},children:"Delete"})})]})}function Fe({inputData:n,comparator:t,filters:w,dateError:C}){const{status:u,name:b,startDate:p,endDate:g}=w,a=n.map((l,h)=>[l,h]);return a.sort((l,h)=>{const m=t(l[0],h[0]);return m!==0?m:l[1]-h[1]}),n=a.map(l=>l[0]),b&&(n=n.filter(l=>l.orderNumber.toLowerCase().indexOf(b.toLowerCase())!==-1||l.customer.name.toLowerCase().indexOf(b.toLowerCase())!==-1||l.customer.email.toLowerCase().indexOf(b.toLowerCase())!==-1)),u!=="all"&&(n=n.filter(l=>l.status===u)),C||p&&g&&(n=n.filter(l=>D(l.createdAt)>=D(p)&&D(l.createdAt)<=D(g))),n}function _e({customer:n,delivery:t,payment:w,shippingAddress:C}){const u=e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Customer Info",action:e.jsx(S,{children:e.jsx(j,{icon:"solar:pen-bold"})})}),e.jsxs(o,{direction:"row",sx:{p:3},children:[e.jsx(H,{alt:n==null?void 0:n.name,src:n==null?void 0:n.avatarUrl,sx:{width:48,height:48,mr:2}}),e.jsxs(o,{spacing:.5,alignItems:"flex-start",sx:{typography:"body2"},children:[e.jsxs(V,{variant:"subtitle2",children:[n==null?void 0:n.first_name," ",n==null?void 0:n.last_name]}),e.jsx(d,{sx:{color:"text.secondary"},children:n==null?void 0:n.email}),e.jsx(R,{size:"small",color:"error",startIcon:e.jsx(j,{icon:"mingcute:add-line"}),sx:{mt:1},children:"Add to Blacklist"})]})]})]}),b=e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Delivery",action:e.jsx(S,{children:e.jsx(j,{icon:"solar:pen-bold"})})}),e.jsxs(o,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(d,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Ship by"}),t==null?void 0:t.shipBy]}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(d,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Speedy"}),t==null?void 0:t.speedy]}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(d,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Tracking No."}),e.jsx(Re,{underline:"always",color:"inherit",children:t==null?void 0:t.trackingNumber})]})]})]}),p=e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Shipping",action:e.jsx(S,{children:e.jsx(j,{icon:"solar:pen-bold"})})}),e.jsxs(o,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(d,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Name"}),n==null?void 0:n.first_name," ",n==null?void 0:n.last_name]}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(d,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Address Line 1"}),n==null?void 0:n.address_line_1]}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(d,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Address Line 2"}),n==null?void 0:n.address_line_2]}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(d,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"City"}),n==null?void 0:n.city]}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(d,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Country"}),n==null?void 0:n.country]}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(d,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Phone Number"}),n==null?void 0:n.phone_number]})]})]}),g=e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Payment",action:e.jsx(S,{children:e.jsx(j,{icon:"solar:pen-bold"})})}),e.jsxs(o,{direction:"row",alignItems:"center",sx:{p:3,typography:"body2"},children:[e.jsx(d,{component:"span",sx:{color:"text.secondary",flexGrow:1},children:"Type"}),"Cash",e.jsx(j,{icon:"la:money-bill-wave",width:24,sx:{ml:.5,color:"#85bb65"}})]})]});return e.jsxs(K,{children:[u,e.jsx(z,{sx:{borderStyle:"dashed"}}),b,e.jsx(z,{sx:{borderStyle:"dashed"}}),p,e.jsx(z,{sx:{borderStyle:"dashed"}}),g]})}_e.propTypes={customer:i.object,delivery:i.object,payment:i.object,shippingAddress:i.object};i.number,i.array,i.number,i.number,i.number,i.number;function Ne({status:n,backLink:t,createdAt:w,orderNumber:C,statusOptions:u,onChangeStatus:b}){const p=G();return e.jsxs(e.Fragment,{children:[e.jsxs(o,{spacing:3,direction:{xs:"column",md:"row"},sx:{mb:{xs:3,md:5}},children:[e.jsxs(o,{spacing:1,direction:"row",alignItems:"flex-start",children:[e.jsx(S,{component:De,href:t,children:e.jsx(j,{icon:"eva:arrow-ios-back-fill"})}),e.jsxs(o,{spacing:.5,children:[e.jsxs(o,{spacing:1,direction:"row",alignItems:"center",children:[e.jsxs(V,{variant:"h4",children:[" Order ",C," "]}),e.jsx(M,{variant:"soft",color:n==="completed"&&"success"||n==="pending"&&"warning"||n==="cancelled"&&"error"||"default",children:n})]}),e.jsx(V,{variant:"body2",sx:{color:"text.disabled"},children:Ae(w)})]})]}),n!=="cancelled"&&e.jsx(o,{flexGrow:1,spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:e.jsx(R,{color:"inherit",variant:"outlined",endIcon:e.jsx(j,{icon:"eva:arrow-ios-downward-fill"}),onClick:p.onOpen,sx:{textTransform:"capitalize"},children:n})})]}),e.jsx(Q,{open:p.open,onClose:p.onClose,arrow:"top-right",sx:{width:140},children:u.map(g=>e.jsx(O,{selected:g.value===n,onClick:()=>{p.onClose(),b(g.value)},children:g.label},g.value))})]})}Ne.propTypes={backLink:i.string,createdAt:i.string,onChangeStatus:i.func,orderNumber:i.string,status:i.string,statusOptions:i.array};export{Ue as O,Ne as a,_e as b};
