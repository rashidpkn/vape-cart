import{j as e,v as d,z as T,bd as W,as as L,o,b as y,be as Y,d as b,E as r,x as $,at as q,u as G,A as N,y as S,ag as V,b5 as C,e as O,al as H,au as Q,q as F,w as z,B as E,bf as B,bg as U,bh as K,f as u,aM as I,P as _,S as J,C as X,a1 as Z,K as k}from"./index-20dcf14a.js";import{C as ee}from"./confirm-dialog-39106987.js";import{b as M,c as t,T as se,a as re,d as te}from"./TableRow-8c2a2d0a.js";import{C as ne}from"./Checkbox-812a72f7.js";import"./address-list-dialog-ec5d5601.js";import{T as ae}from"./TableContainer-c3160f9a.js";function oe({title:s,total:n,icon:i,color:l,percent:p,price:c}){return e.jsxs(d,{spacing:2.5,direction:"row",alignItems:"center",justifyContent:"center",sx:{width:1,minWidth:200},children:[e.jsxs(d,{alignItems:"center",justifyContent:"center",sx:{position:"relative"},children:[e.jsx(T,{icon:i,width:32,sx:{color:l,position:"absolute"}}),e.jsx(W,{variant:"determinate",value:p,size:56,thickness:2,sx:{color:l,opacity:.48}}),e.jsx(W,{variant:"determinate",value:100,size:56,thickness:3,sx:{top:0,left:0,opacity:.48,position:"absolute",color:x=>L(x.palette.grey[500],.16)}})]}),e.jsxs(d,{spacing:.5,children:[e.jsx(o,{variant:"subtitle1",children:s}),e.jsxs(y,{component:"span",sx:{color:"text.disabled",typography:"body2"},children:[Y(n)," invoices"]}),e.jsx(o,{variant:"subtitle2",children:b(c)})]})]})}oe.propTypes={color:r.string,icon:r.oneOfType([r.element,r.string]),percent:r.number,price:r.number,title:r.string,total:r.number};function le({row:s,selected:n,onSelectRow:i,onViewRow:l,onEditRow:p,onDeleteRow:c}){var v,P;const{id:x,createdAt:h,dueDate:m,status:a,invoiceTo:j}=s,f=$(),g=q(),{user:A}=G();return e.jsxs(e.Fragment,{children:[e.jsxs(M,{hover:!0,selected:n,children:[e.jsx(t,{padding:"checkbox",children:e.jsx(ne,{checked:n,onClick:i})}),e.jsxs(t,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(N,{alt:j.name,sx:{mr:2},children:j.name.charAt(0).toUpperCase()}),e.jsx(S,{disableTypography:!0,primary:e.jsx(o,{variant:"body2",noWrap:!0,children:j.name}),secondary:e.jsx(V,{noWrap:!0,variant:"body2",onClick:l,sx:{color:"text.disabled",cursor:"pointer"},children:x})})]}),e.jsx(t,{children:e.jsx(S,{primary:C(new Date(h),"dd MMM yyyy"),secondary:C(new Date(h),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(t,{children:e.jsx(S,{primary:C(new Date(m),"dd MMM yyyy"),secondary:C(new Date(m),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(t,{children:b(((v=s.items.find(w=>w.userId===A.id))==null?void 0:v.quantity)*((P=s.items.find(w=>w.userId===A.id))==null?void 0:P.price))}),e.jsx(t,{children:e.jsx(O,{variant:"soft",color:a==="paid"&&"success"||a==="pending"&&"warning"||a==="overdue"&&"error"||"default",children:a})}),e.jsx(t,{align:"right",sx:{px:1},children:e.jsx(H,{color:g.open?"inherit":"default",onClick:g.onOpen,children:e.jsx(T,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(Q,{open:g.open,onClose:g.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(F,{onClick:()=>{l(),g.onClose()},children:[e.jsx(T,{icon:"solar:eye-bold"}),"View"]}),e.jsx(z,{sx:{borderStyle:"dashed"}}),e.jsxs(F,{onClick:()=>{f.onTrue(),g.onClose()},sx:{color:"error.main"},children:[e.jsx(T,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(ee,{open:f.value,onClose:f.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(E,{variant:"contained",color:"error",onClick:c,children:"Delete"})})]})}le.propTypes={onDeleteRow:r.func,onEditRow:r.func,onSelectRow:r.func,onViewRow:r.func,row:r.object,selected:r.bool};function ie(s,n){const i=new Date().getFullYear(),l=s?B(s):null,p=n?B(n):null,c=i===l&&i===p,x=s&&n?U(new Date(s),new Date(n)):!1,h=s&&n?K(new Date(s),new Date(n)):!1;return c?h?x?u(n,"dd MMM yy"):`${u(s,"dd")} - ${u(n,"dd MMM yy")}`:`${u(s,"dd MMM")} - ${u(n,"dd MMM yy")}`:`${u(s,"dd MMM yy")} - ${u(n,"dd MMM yy")}`}r.bool,r.func,r.func,r.func,r.bool,r.string,r.oneOf(["input","calendar"]),r.oneOfType([r.string,r.number,r.instanceOf(Date)]),r.oneOfType([r.string,r.number,r.instanceOf(Date)]);function de({filters:s,onFilters:n,onResetFilters:i,results:l,...p}){const c=ie(s.startDate,s.endDate),x=a=>{const j=s.service.filter(f=>f!==a);n("service",j)},h=()=>{n("status","all")},m=()=>{n("startDate",null),n("endDate",null)};return e.jsxs(d,{spacing:1.5,...p,children:[e.jsxs(y,{sx:{typography:"body2"},children:[e.jsx("strong",{children:l}),e.jsx(y,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(d,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!s.service.length&&e.jsx(D,{label:"Service:",children:s.service.map(a=>e.jsx(I,{label:a,size:"small",onDelete:()=>x(a)},a))}),s.status!=="all"&&e.jsx(D,{label:"Status:",children:e.jsx(I,{size:"small",label:s.status,onDelete:h})}),s.startDate&&s.endDate&&e.jsx(D,{label:"Date:",children:e.jsx(I,{size:"small",label:c,onDelete:m})}),e.jsx(E,{color:"error",onClick:i,startIcon:e.jsx(T,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}de.propTypes={filters:r.object,onFilters:r.func,onResetFilters:r.func,results:r.number};function D({label:s,children:n,sx:i,...l}){return e.jsxs(d,{component:_,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...i},...l,children:[e.jsx(y,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(d,{spacing:1,direction:"row",flexWrap:"wrap",children:n})]})}D.propTypes={children:r.node,label:r.string,sx:r.object};r.object;const R=Z(M)(({theme:s})=>({"& td":{textAlign:"right",borderBottom:"none",paddingTop:s.spacing(1),paddingBottom:s.spacing(1)}}));function ce({invoice:s}){var p,c,x,h,m;const n=e.jsxs(e.Fragment,{children:[e.jsxs(R,{children:[e.jsx(t,{colSpan:3}),e.jsxs(t,{sx:{color:"text.secondary"},children:[e.jsx(y,{sx:{mt:2}}),"Subtotal"]}),e.jsxs(t,{width:120,sx:{typography:"subtitle2"},children:[e.jsx(y,{sx:{mt:2}}),b(s==null?void 0:s.subTotal)]})]}),e.jsxs(R,{children:[e.jsx(t,{colSpan:3}),e.jsx(t,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(t,{width:120,sx:{color:"error.main",typography:"body2"},children:b(-(s==null?void 0:s.shipping))})]}),e.jsxs(R,{children:[e.jsx(t,{colSpan:3}),e.jsx(t,{sx:{typography:"subtitle1"},children:"Total"}),e.jsx(t,{width:140,sx:{typography:"subtitle1"},children:b(s==null?void 0:s.totalAmount)})]})]}),i=e.jsxs(k,{container:!0,children:[e.jsxs(k,{xs:12,md:9,sx:{py:3},children:[e.jsx(o,{variant:"subtitle2",children:"NOTES"}),e.jsx(o,{variant:"body2",children:"We appreciate your business. Should you need us to add VAT or extra notes let us know!"})]}),e.jsxs(k,{xs:12,md:3,sx:{py:3,textAlign:"right"},children:[e.jsx(o,{variant:"subtitle2",children:"Have a Question?"}),e.jsx(o,{variant:"body2",children:"info@vapes-uae.com"})]})]}),l=e.jsx(ae,{sx:{overflow:"unset",mt:5},children:e.jsx(J,{children:e.jsxs(se,{sx:{minWidth:960},children:[e.jsx(re,{children:e.jsxs(M,{children:[e.jsx(t,{width:40,children:"#"}),e.jsx(t,{sx:{typography:"subtitle2"},children:"Description"}),e.jsx(t,{children:"Qty"}),e.jsx(t,{align:"right",children:"Unit price"}),e.jsx(t,{align:"right",children:"Total"})]})}),e.jsxs(te,{children:[(p=s==null?void 0:s.items)==null?void 0:p.map((a,j)=>e.jsxs(M,{children:[e.jsx(t,{children:j+1}),e.jsx(t,{children:e.jsxs(y,{sx:{maxWidth:560},children:[e.jsx(o,{variant:"subtitle2",children:a.name}),e.jsx(o,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:a==null?void 0:a.description})]})}),e.jsx(t,{children:a==null?void 0:a.quantity}),e.jsx(t,{align:"right",children:b(a==null?void 0:a.price)}),e.jsx(t,{align:"right",children:b(a.price*a.quantity)})]},j)),n]})]})})});return e.jsx(e.Fragment,{children:e.jsxs(X,{sx:{pt:5,px:5},children:[e.jsxs(y,{rowGap:5,display:"grid",alignItems:"center",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(y,{component:"img",alt:"logo",src:"/logo/logo_single.svg",sx:{width:48,height:48}}),e.jsxs(d,{spacing:1,alignItems:{xs:"flex-start",md:"flex-end"},children:[e.jsx(O,{variant:"soft",color:s.status==="paid"&&"success"||s.status==="pending"&&"warning"||s.status==="overdue"&&"error"||"default",children:s.status}),e.jsx(o,{variant:"h6",children:s.id})]}),e.jsxs(d,{sx:{typography:"body2"},children:[e.jsx(o,{variant:"subtitle2",sx:{mb:1},children:"Invoice From"}),(c=s==null?void 0:s.invoiceFrom)==null?void 0:c.name,e.jsx("br",{}),(x=s==null?void 0:s.invoiceFrom)==null?void 0:x.fullAddress,e.jsx("br",{}),"Phone: ",(h=s==null?void 0:s.invoiceFrom)==null?void 0:h.phoneNumber,e.jsx("br",{})]}),e.jsxs(d,{sx:{typography:"body2"},children:[e.jsx(o,{variant:"subtitle2",sx:{mb:1},children:"Invoice To"}),(m=s==null?void 0:s.invoiceTo)==null?void 0:m.name]}),e.jsxs(d,{sx:{typography:"body2"},children:[e.jsx(o,{variant:"subtitle2",sx:{mb:1},children:"Date Create"}),u(s==null?void 0:s.createdAt)]}),e.jsxs(d,{sx:{typography:"body2"},children:[e.jsx(o,{variant:"subtitle2",sx:{mb:1},children:"Due Date"}),u(s==null?void 0:s.dueDate)]})]}),l,e.jsx(z,{sx:{mt:5,borderStyle:"dashed"}}),i]})})}ce.propTypes={invoice:r.object};export{oe as I,de as a,le as b,ce as c};
