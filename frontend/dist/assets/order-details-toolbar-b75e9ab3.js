import{x as E,ar as U,j as e,c as u,A as F,y as k,b7 as N,e as b,h as $,aj as A,z as I,i as se,v as p,P as te,B as O,k as S,as as M,t as H,E as h,u as ae,r as C,a8 as oe,ag as L,d as ne,C as V,bb as le,aq as ie,bc as de,aA as ce,S as z,ba as he,bd as R,af as ue,p as q,be as pe}from"./index-ec998887.js";import{C as W}from"./confirm-dialog-cff5589d.js";import{u as xe,g as ge,e as me}from"./use-table-3a97c6ed.js";import{b as ye,T as je,d as we,a as fe,c as be}from"./table-pagination-custom-6dd14dae.js";import{b as _,c as w,T as Te,d as ve}from"./TableRow-36e71984.js";import{C as Ce}from"./Checkbox-4ed042a5.js";import{T as Pe}from"./TableContainer-26b65e8f.js";import{C as Se}from"./CardHeader-d3b65c84.js";function Q({row:i,selected:x,onViewRow:y,onSelectRow:j,onDeleteRow:f}){const{id:t,items:l,status:c,createdAt:T,customer:a}=i,s=E(),g=E(),v=U();console.log(l);const m=e.jsxs(_,{hover:!0,selected:x,children:[e.jsx(w,{padding:"checkbox",children:e.jsx(Ce,{checked:x,onClick:j})}),e.jsx(w,{children:e.jsxs(u,{onClick:y,sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:["#",t.toString().padStart(3,"0")]})}),e.jsxs(w,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(F,{alt:a==null?void 0:a.first_name,src:a==null?void 0:a.avatarUrl,sx:{mr:2}}),e.jsx(k,{primary:(a==null?void 0:a.first_name)+(a==null?void 0:a.last_name),secondary:a.email,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),e.jsx(w,{children:e.jsx(k,{primary:N(new Date(T),"dd MMM yyyy"),secondary:N(new Date(T),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsxs(w,{align:"center",children:[" ",l==null?void 0:l.reduce((o,d)=>o+d.quantity,0)," "]}),e.jsxs(w,{children:[" ",b(l==null?void 0:l.reduce((o,d)=>o+d.quantity*d.price,0))," "]}),e.jsxs(w,{children:[" ",b((l==null?void 0:l.reduce((o,d)=>o+d.quantity*d.price,0))*.3)," "]}),e.jsx(w,{children:b((l==null?void 0:l.reduce((o,d)=>o+d.quantity*d.price,0))*.7)}),e.jsx(w,{children:e.jsx($,{variant:"soft",color:c==="completed"&&"success"||c==="pending"&&"warning"||c==="cancelled"&&"error"||"default",children:c})}),e.jsxs(w,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(A,{color:g.value?"inherit":"default",onClick:g.onToggle,sx:{...g.value&&{bgcolor:"action.hover"}},children:e.jsx(I,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(A,{color:v.open?"inherit":"default",children:e.jsx(I,{icon:"eva:more-vertical-fill"})})]})]}),B=e.jsx(_,{children:e.jsx(w,{sx:{p:0,border:"none"},colSpan:10,children:e.jsx(se,{in:g.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(p,{component:te,sx:{m:1.5},children:l.map(o=>e.jsxs(p,{direction:"row",alignItems:"center",sx:{p:d=>d.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:d=>`solid 2px ${d.palette.background.neutral}`}},children:[e.jsx(F,{src:o.images[0],variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(k,{primary:o.name,secondary:o.id,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5},sx:{width:"50%"}}),e.jsxs(u,{children:["x",o.quantity]}),e.jsx(u,{sx:{width:110,textAlign:"right"},children:b(o.price)}),e.jsx(O,{variant:"contained",color:"success",sx:{mx:5},onClick:async()=>{try{await S.patch(`/orders/change-item-status/${t}`,{itemId:o.id,status:"Product Is ready"}),await S.post("/notifications",{userId:o.userId,role:"admin",title:`🚀 ${o.name} Product Is ready 🚀`,message:`${o.name} is ready for shipping`,type:"product"}),alert("Product Status is update to admin,they will pick the order")}catch{console.log()}},children:"Product is Ready"}),e.jsx(O,{variant:"contained",color:"warning",sx:{mx:5},onClick:async()=>{try{const d=window.prompt("Issues?");await S.patch(`/orders/change-item-status/${t}`,{itemId:o.id,status:"Product has some issue"}),await S.post("/notifications",{userId:o.userId,role:"admin",title:`🚀 ${o.name} Product has some issue 🚀`,message:d,type:"product"}),alert("Product Status is update to admin,they will resolve the issue")}catch{}},children:"Product has some issue"})]},o.id))})})})});return e.jsxs(e.Fragment,{children:[m,B,e.jsx(M,{open:v.open,onClose:v.onClose,arrow:"right-top",sx:{width:140},children:e.jsxs(H,{onClick:()=>{s.onTrue(),v.onClose()},sx:{color:"error.main"},children:[e.jsx(I,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})}),e.jsx(W,{open:s.value,onClose:s.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(O,{variant:"contained",color:"error",onClick:f,children:"Delete"})})]})}Q.propTypes={onDeleteRow:h.func,onSelectRow:h.func,onViewRow:h.func,row:h.object,selected:h.bool};const De=[{value:"all",label:"All"},...he],Ie=[{id:"orderNumber",label:"Order",width:116},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Total Value",width:140},{id:"commission",label:"Commission",width:140},{id:"Net",label:"Net",width:140},{id:"status",label:"Status",width:110},{id:"",width:88}],Re={name:"",status:"all",startDate:null,endDate:null};function Ue(){const{user:{id:i}}=ae(),[x,y]=C.useState([]),[j,f]=C.useState([]),[t,l]=C.useState([]),c=async()=>{try{const{data:{products:r}}=await S.get("products",{params:{userId:i,perPage:100}});f(r.map(n=>n.id))}catch{alert("Error occurred while fetching products.")}},T=async()=>{try{const{data:r}=await S.get("/orders");y(r)}catch(r){console.log(r.message)}};C.useEffect(()=>{c(),T()},[]);function a(r,n){return r.map(D=>{const ee=D.items.filter(re=>re.userId===n);return{...D,items:ee}})}C.useEffect(()=>{const r=x.filter(n=>n.items.some(D=>j.includes(D.id))).reverse();l(a(r,i))},[x,j]);const s=xe({defaultOrderBy:"orderNumber"}),g=oe(),v=E(),m=Re,B=m.startDate&&m.endDate?m.startDate.getTime()>m.endDate.getTime():!1,o=ke({inputData:t,comparator:ge(s.order,s.orderBy),filters:m,dateError:B}),d=o.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage),G=s.dense?52:72,J=!!m.name||m.status!=="all"||!!m.startDate&&!!m.endDate,K=!o.length&&J||!o.length,X=C.useCallback(r=>{S.delete("orders",{data:{id:r}});const n=t.filter(D=>D.id!==r);l(n),s.onUpdatePageDeleteRow(d.length)},[d.length,s,t]),Y=C.useCallback(()=>{S.delete("orders",{data:{id:s.selected}});const r=t.filter(n=>!s.selected.includes(n.id));l(r),s.onUpdatePageDeleteRows({totalRows:t.length,totalRowsInPage:d.length,totalRowsFiltered:o.length})},[o.length,d.length,s,t]);C.useCallback(r=>{g.push(L.dashboard.order.details(r))},[g]);const[P,Z]=C.useState("all");return e.jsxs(e.Fragment,{children:[e.jsxs(u,{px:5,children:[e.jsx(ne,{heading:"Orders",links:[{name:"Dashboard",href:L.dashboard.root},{name:"Orders",href:L.dashboard.order.root}],sx:{mb:{xs:3,md:5}}}),e.jsxs(V,{children:[e.jsx(le,{value:P,onChange:(r,n)=>Z(n),sx:{px:2.5,boxShadow:r=>`inset 0 -2px 0 0 ${ie(r.palette.grey[500],.08)}`},children:De.map(r=>e.jsx(de,{iconPosition:"end",value:r.value,label:r.label,icon:e.jsxs($,{variant:(r.value==="all"||r.value===m.status)&&"filled"||"soft",color:r.value==="processing"&&"info"||r.value==="completed"&&"success"||r.value==="In Transit"&&"info"||r.value==="pending"&&"warning"||r.value==="cancelled"&&"error"||"default",children:[r.value==="all"&&t.length,r.value==="processing"&&t.filter(n=>n.status==="processing").length,r.value==="pending"&&t.filter(n=>n.status==="Order received"||n.status==="pending").length,r.value==="completed"&&t.filter(n=>n.status==="completed").length,r.value==="cancelled"&&t.filter(n=>n.status==="cancelled").length,r.value==="refunded"&&t.filter(n=>n.status==="refunded").length,r.value==="In Transit"&&t.filter(n=>n.status==="In Transit").length]})},r.value))}),e.jsxs(Pe,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(ye,{dense:s.dense,numSelected:s.selected.length,rowCount:t.length,onSelectAllRows:r=>s.onSelectAllRows(r,t.map(n=>n.id)),action:e.jsx(ce,{title:"Delete",children:e.jsx(A,{color:"primary",onClick:v.onTrue,children:e.jsx(I,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(z,{children:e.jsxs(Te,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(je,{order:s.order,orderBy:s.orderBy,headLabel:Ie,rowCount:t.length,numSelected:s.selected.length,onSort:s.onSort,onSelectAllRows:r=>s.onSelectAllRows(r,t.map(n=>n.id))}),e.jsxs(ve,{children:[o.filter(r=>P==="all"||P==="processing"&&r.status==="processing"||P==="pending"&&(r.status==="pending"||r.status==="Order received")||P==="completed"&&r.status==="completed"||P==="cancelled"&&r.status==="cancelled"||P==="refunded"&&r.status==="refunded"||P==="In Transit"&&r.status==="In Transit").map(r=>e.jsx(Q,{row:r,selected:s.selected.includes(r.id),onSelectRow:()=>s.onSelectRow(r.id),onDeleteRow:()=>X(r.id),onViewRow:()=>{}},r.id)),e.jsx(we,{height:G,emptyRows:me(s.page,s.rowsPerPage,t.length)}),e.jsx(fe,{notFound:K})]})]})})]}),e.jsx(be,{count:o.length,page:s.page,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onRowsPerPageChange:s.onChangeRowsPerPage,onChangeDense:s.onChangeDense})]})]}),e.jsx(W,{open:v.value,onClose:v.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",s.selected.length," "]})," items?"]}),action:e.jsx(O,{variant:"contained",color:"error",onClick:()=>{Y(),v.onFalse()},children:"Delete"})})]})}function ke({inputData:i,comparator:x,filters:y,dateError:j}){const{status:f,name:t,startDate:l,endDate:c}=y,T=i.map((a,s)=>[a,s]);return T.sort((a,s)=>{const g=x(a[0],s[0]);return g!==0?g:a[1]-s[1]}),i=T.map(a=>a[0]),t&&(i=i.filter(a=>{var s,g;return a.orderNumber.toLowerCase().indexOf(t.toLowerCase())!==-1||((s=a.customer)==null?void 0:s.name.toLowerCase().indexOf(t.toLowerCase()))!==-1||((g=a.customer)==null?void 0:g.email.toLowerCase().indexOf(t.toLowerCase()))!==-1})),f!=="all"&&(i=i.filter(a=>a.status===f)),j||l&&c&&(i=i.filter(a=>R(a.createdAt)>=R(l)&&R(a.createdAt)<=R(c))),i}function Oe({items:i=[],shipping:x,discount:y,taxes:j,subTotal:f,totalAmount:t}){const l=e.jsxs(p,{spacing:2,alignItems:"flex-end",sx:{my:3,textAlign:"right",typography:"body2"},children:[e.jsxs(p,{direction:"row",children:[e.jsx(u,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(u,{sx:{width:160,typography:"subtitle2"},children:b(f)||"-"})]}),e.jsxs(p,{direction:"row",children:[e.jsx(u,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(u,{sx:{width:160,...x&&{color:"error.main"}},children:x?`- ${b(x)}`:"-"})]}),e.jsxs(p,{direction:"row",children:[e.jsx(u,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(u,{sx:{width:160,...y&&{color:"error.main"}},children:y?`- ${b(y)}`:"-"})]}),e.jsxs(p,{direction:"row",children:[e.jsx(u,{sx:{color:"text.secondary"},children:"Taxes"}),e.jsx(u,{sx:{width:160},children:j?b(j):"-"})]}),e.jsxs(p,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx(u,{children:"Total"}),e.jsx(u,{sx:{width:160},children:b(t)||"-"})]})]});return e.jsxs(V,{children:[e.jsx(Se,{title:"Details"}),e.jsxs(p,{sx:{px:3},children:[e.jsx(z,{children:i==null?void 0:i.map(c=>e.jsxs(p,{direction:"row",alignItems:"center",sx:{py:3,minWidth:640,borderBottom:T=>`dashed 2px ${T.palette.background.neutral}`},children:[e.jsx(F,{src:c.images[0],variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(k,{primary:c.name,secondary:c.id,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(u,{sx:{typography:"body2"},children:["x",c.quantity]}),e.jsx(u,{sx:{width:110,textAlign:"right",typography:"subtitle2"},children:b(c.salePrice)})]},c.id))}),l]})]})}Oe.propTypes={discount:h.number,items:h.array,shipping:h.number,subTotal:h.number,taxes:h.number,totalAmount:h.number};function Ae({status:i,backLink:x,createdAt:y,orderNumber:j,statusOptions:f,onChangeStatus:t}){const l=U();return e.jsxs(e.Fragment,{children:[e.jsx(p,{spacing:3,direction:{xs:"column",md:"row"},sx:{mb:{xs:3,md:5}},children:e.jsxs(p,{spacing:1,direction:"row",alignItems:"flex-start",children:[e.jsx(A,{component:ue,href:x,children:e.jsx(I,{icon:"eva:arrow-ios-back-fill"})}),e.jsxs(p,{spacing:.5,children:[e.jsxs(p,{spacing:1,direction:"row",alignItems:"center",children:[e.jsxs(q,{variant:"h4",children:[" Order ",j," "]}),e.jsx($,{variant:"soft",color:i==="completed"&&"success"||i==="pending"&&"warning"||i==="cancelled"&&"error"||"default",children:i})]}),e.jsx(q,{variant:"body2",sx:{color:"text.disabled"},children:pe(y)})]})]})}),e.jsx(M,{open:l.open,onClose:l.onClose,arrow:"top-right",sx:{width:140},children:f.map(c=>e.jsx(H,{selected:c.value===i,onClick:()=>{l.onClose(),t(c.value)},children:c.label},c.value))})]})}Ae.propTypes={backLink:h.string,createdAt:h.instanceOf(Date),onChangeStatus:h.func,orderNumber:h.string,status:h.string,statusOptions:h.array};export{Ue as O,Ae as a,Oe as b};
