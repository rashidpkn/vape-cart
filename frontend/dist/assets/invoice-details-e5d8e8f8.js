import{j as e,v as d,z as f,be as W,as as Y,p as o,c as y,bf as $,e as b,E as r,x as q,at as G,u as N,A as V,y as S,ag as H,b6 as T,h as E,al as K,au as Q,t as B,w as z,B as L,bg as O,bh as U,bi as _,f as u,aK as I,P as J,S as X,C as Z,a1 as ee,K as k}from"./index-bbe39c8b.js";import{C as se}from"./confirm-dialog-25afe77c.js";import{b as D,c as t,T as re,a as te,d as ne}from"./TableRow-6cf0ff97.js";import{C as ae}from"./Checkbox-ae6700aa.js";import"./address-list-dialog-d2e02769.js";import{T as oe}from"./TableContainer-475402ad.js";function le({title:s,total:n,icon:i,color:l,percent:p,price:c}){return e.jsxs(d,{spacing:2.5,direction:"row",alignItems:"center",justifyContent:"center",sx:{width:1,minWidth:200},children:[e.jsxs(d,{alignItems:"center",justifyContent:"center",sx:{position:"relative"},children:[e.jsx(f,{icon:i,width:32,sx:{color:l,position:"absolute"}}),e.jsx(W,{variant:"determinate",value:p,size:56,thickness:2,sx:{color:l,opacity:.48}}),e.jsx(W,{variant:"determinate",value:100,size:56,thickness:3,sx:{top:0,left:0,opacity:.48,position:"absolute",color:x=>Y(x.palette.grey[500],.16)}})]}),e.jsxs(d,{spacing:.5,children:[e.jsx(o,{variant:"subtitle1",children:s}),e.jsxs(y,{component:"span",sx:{color:"text.disabled",typography:"body2"},children:[$(n)," invoices"]}),e.jsx(o,{variant:"subtitle2",children:b(c)})]})]})}le.propTypes={color:r.string,icon:r.oneOfType([r.element,r.string]),percent:r.number,price:r.number,title:r.string,total:r.number};function ie({row:s,selected:n,onSelectRow:i,onViewRow:l,onEditRow:p,onDeleteRow:c}){var F,P;const{id:x,createdAt:h,dueDate:m,status:a,invoiceTo:j,totalAmount:R}=s,M=q(),g=G(),{user:v}=N();return e.jsxs(e.Fragment,{children:[e.jsxs(D,{hover:!0,selected:n,children:[e.jsx(t,{padding:"checkbox",children:e.jsx(ae,{checked:n,onClick:i})}),e.jsxs(t,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(V,{alt:j.name,sx:{mr:2},children:j.name.charAt(0).toUpperCase()}),e.jsx(S,{disableTypography:!0,primary:e.jsx(o,{variant:"body2",noWrap:!0,children:j.name}),secondary:e.jsx(H,{noWrap:!0,variant:"body2",onClick:l,sx:{color:"text.disabled",cursor:"pointer"},children:x})})]}),e.jsx(t,{children:e.jsx(S,{primary:T(new Date(h),"dd MMM yyyy"),secondary:T(new Date(h),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(t,{children:e.jsx(S,{primary:T(new Date(m),"dd MMM yyyy"),secondary:T(new Date(m),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(t,{children:b(((F=s.items.find(w=>w.userId===v.id))==null?void 0:F.quantity)*((P=s.items.find(w=>w.userId===v.id))==null?void 0:P.price))}),e.jsx(t,{children:e.jsx(E,{variant:"soft",color:a==="paid"&&"success"||a==="pending"&&"warning"||a==="overdue"&&"error"||"default",children:a})}),e.jsx(t,{align:"right",sx:{px:1},children:e.jsx(K,{color:g.open?"inherit":"default",onClick:g.onOpen,children:e.jsx(f,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(Q,{open:g.open,onClose:g.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(B,{onClick:()=>{l(),g.onClose()},children:[e.jsx(f,{icon:"solar:eye-bold"}),"View"]}),e.jsx(z,{sx:{borderStyle:"dashed"}}),e.jsxs(B,{onClick:()=>{M.onTrue(),g.onClose()},sx:{color:"error.main"},children:[e.jsx(f,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(se,{open:M.value,onClose:M.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(L,{variant:"contained",color:"error",onClick:c,children:"Delete"})})]})}ie.propTypes={onDeleteRow:r.func,onEditRow:r.func,onSelectRow:r.func,onViewRow:r.func,row:r.object,selected:r.bool};r.bool,r.object,r.func,r.array;function de(s,n){const i=new Date().getFullYear(),l=s?O(s):null,p=n?O(n):null,c=i===l&&i===p,x=s&&n?U(new Date(s),new Date(n)):!1,h=s&&n?_(new Date(s),new Date(n)):!1;return c?h?x?u(n,"dd MMM yy"):`${u(s,"dd")} - ${u(n,"dd MMM yy")}`:`${u(s,"dd MMM")} - ${u(n,"dd MMM yy")}`:`${u(s,"dd MMM yy")} - ${u(n,"dd MMM yy")}`}r.bool,r.func,r.func,r.func,r.bool,r.string,r.oneOf(["input","calendar"]),r.oneOfType([r.string,r.number,r.instanceOf(Date)]),r.oneOfType([r.string,r.number,r.instanceOf(Date)]);function ce({filters:s,onFilters:n,onResetFilters:i,results:l,...p}){const c=de(s.startDate,s.endDate),x=a=>{const j=s.service.filter(R=>R!==a);n("service",j)},h=()=>{n("status","all")},m=()=>{n("startDate",null),n("endDate",null)};return e.jsxs(d,{spacing:1.5,...p,children:[e.jsxs(y,{sx:{typography:"body2"},children:[e.jsx("strong",{children:l}),e.jsx(y,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(d,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!s.service.length&&e.jsx(C,{label:"Service:",children:s.service.map(a=>e.jsx(I,{label:a,size:"small",onDelete:()=>x(a)},a))}),s.status!=="all"&&e.jsx(C,{label:"Status:",children:e.jsx(I,{size:"small",label:s.status,onDelete:h})}),s.startDate&&s.endDate&&e.jsx(C,{label:"Date:",children:e.jsx(I,{size:"small",label:c,onDelete:m})}),e.jsx(L,{color:"error",onClick:i,startIcon:e.jsx(f,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}ce.propTypes={filters:r.object,onFilters:r.func,onResetFilters:r.func,results:r.number};function C({label:s,children:n,sx:i,...l}){return e.jsxs(d,{component:J,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...i},...l,children:[e.jsx(y,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(d,{spacing:1,direction:"row",flexWrap:"wrap",children:n})]})}C.propTypes={children:r.node,label:r.string,sx:r.object};r.object;const A=ee(D)(({theme:s})=>({"& td":{textAlign:"right",borderBottom:"none",paddingTop:s.spacing(1),paddingBottom:s.spacing(1)}}));function xe({invoice:s}){var p,c,x,h,m;const n=e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx(t,{colSpan:3}),e.jsxs(t,{sx:{color:"text.secondary"},children:[e.jsx(y,{sx:{mt:2}}),"Subtotal"]}),e.jsxs(t,{width:120,sx:{typography:"subtitle2"},children:[e.jsx(y,{sx:{mt:2}}),b(s==null?void 0:s.subTotal)]})]}),e.jsxs(A,{children:[e.jsx(t,{colSpan:3}),e.jsx(t,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(t,{width:120,sx:{color:"error.main",typography:"body2"},children:b(-(s==null?void 0:s.shipping))})]}),e.jsxs(A,{children:[e.jsx(t,{colSpan:3}),e.jsx(t,{sx:{typography:"subtitle1"},children:"Total"}),e.jsx(t,{width:140,sx:{typography:"subtitle1"},children:b(s==null?void 0:s.totalAmount)})]})]}),i=e.jsxs(k,{container:!0,children:[e.jsxs(k,{xs:12,md:9,sx:{py:3},children:[e.jsx(o,{variant:"subtitle2",children:"NOTES"}),e.jsx(o,{variant:"body2",children:"We appreciate your business. Should you need us to add VAT or extra notes let us know!"})]}),e.jsxs(k,{xs:12,md:3,sx:{py:3,textAlign:"right"},children:[e.jsx(o,{variant:"subtitle2",children:"Have a Question?"}),e.jsx(o,{variant:"body2",children:"info@vapes-uae.com"})]})]}),l=e.jsx(oe,{sx:{overflow:"unset",mt:5},children:e.jsx(X,{children:e.jsxs(re,{sx:{minWidth:960},children:[e.jsx(te,{children:e.jsxs(D,{children:[e.jsx(t,{width:40,children:"#"}),e.jsx(t,{sx:{typography:"subtitle2"},children:"Description"}),e.jsx(t,{children:"Qty"}),e.jsx(t,{align:"right",children:"Unit price"}),e.jsx(t,{align:"right",children:"Total"})]})}),e.jsxs(ne,{children:[(p=s==null?void 0:s.items)==null?void 0:p.map((a,j)=>e.jsxs(D,{children:[e.jsx(t,{children:j+1}),e.jsx(t,{children:e.jsxs(y,{sx:{maxWidth:560},children:[e.jsx(o,{variant:"subtitle2",children:a.name}),e.jsx(o,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:a==null?void 0:a.description})]})}),e.jsx(t,{children:a==null?void 0:a.quantity}),e.jsx(t,{align:"right",children:b(a==null?void 0:a.price)}),e.jsx(t,{align:"right",children:b(a.price*a.quantity)})]},j)),n]})]})})});return e.jsx(e.Fragment,{children:e.jsxs(Z,{sx:{pt:5,px:5},children:[e.jsxs(y,{rowGap:5,display:"grid",alignItems:"center",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(y,{component:"img",alt:"logo",src:"/logo/logo_single.svg",sx:{width:48,height:48}}),e.jsxs(d,{spacing:1,alignItems:{xs:"flex-start",md:"flex-end"},children:[e.jsx(E,{variant:"soft",color:s.status==="paid"&&"success"||s.status==="pending"&&"warning"||s.status==="overdue"&&"error"||"default",children:s.status}),e.jsx(o,{variant:"h6",children:s.id})]}),e.jsxs(d,{sx:{typography:"body2"},children:[e.jsx(o,{variant:"subtitle2",sx:{mb:1},children:"Invoice From"}),(c=s==null?void 0:s.invoiceFrom)==null?void 0:c.name,e.jsx("br",{}),(x=s==null?void 0:s.invoiceFrom)==null?void 0:x.fullAddress,e.jsx("br",{}),"Phone: ",(h=s==null?void 0:s.invoiceFrom)==null?void 0:h.phoneNumber,e.jsx("br",{})]}),e.jsxs(d,{sx:{typography:"body2"},children:[e.jsx(o,{variant:"subtitle2",sx:{mb:1},children:"Invoice To"}),(m=s==null?void 0:s.invoiceTo)==null?void 0:m.name]}),e.jsxs(d,{sx:{typography:"body2"},children:[e.jsx(o,{variant:"subtitle2",sx:{mb:1},children:"Date Create"}),u(s==null?void 0:s.createdAt)]}),e.jsxs(d,{sx:{typography:"body2"},children:[e.jsx(o,{variant:"subtitle2",sx:{mb:1},children:"Due Date"}),u(s==null?void 0:s.dueDate)]})]}),l,e.jsx(z,{sx:{mt:5,borderStyle:"dashed"}}),i]})})}xe.propTypes={invoice:r.object};export{le as I,ce as a,ie as b,xe as c};
