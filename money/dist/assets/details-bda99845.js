import{a4 as i,bp as y,a_ as j,j as s,aS as E,p as f,b_ as T,a$ as r,S as g,aR as C,b4 as P,bX as q,b7 as n,b8 as a,b6 as F,b0 as N,b1 as R,b2 as _,W as k}from"./index-ad831b55.js";import{a as w,b as v}from"./order-details-toolbar-e26d69b5.js";function B(){var h;const[l,p]=i.useState([]),u=async()=>{const t=await N(R(_,"users")),c=[];t.forEach(d=>{c.push(d.data())}),p(c)};i.useEffect(()=>{u()},[]);const b=y(),{id:o}=b,[e,S]=i.useState({}),D=async()=>{try{const{data:t}=await j.get(`orders/${o}`);S(t),x(t.status)}catch{}};i.useEffect(()=>{D()},[]);const[m,x]=i.useState(e.status),A=i.useCallback(async t=>{await j.patch(`/orders/status/${o}`,{status:t}),x(t)},[]);return s.jsxs(E,{px:5,children:[s.jsx(w,{backLink:f.dashboard.order.root,orderNumber:e.orderNumber,createdAt:e.createdAt,status:m,onChangeStatus:A,statusOptions:T}),s.jsxs(r,{container:!0,spacing:3,children:[s.jsx(r,{xs:12,md:8,children:s.jsx(g,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:s.jsx(C,{children:s.jsxs(P,{children:[s.jsx(q,{children:s.jsxs(n,{children:[s.jsx(a,{children:"Product Details"}),s.jsx(a,{children:"Partner"}),s.jsx(a,{children:"Quantity"}),s.jsx(a,{children:"Unit Price"}),s.jsx(a,{children:"Total Value"}),s.jsx(a,{children:"Commission"}),s.jsx(a,{children:"Net"})]})}),s.jsxs(F,{children:[(h=e==null?void 0:e.items)==null?void 0:h.map(t=>{var c;return s.jsxs(n,{children:[s.jsx(a,{children:t.name}),s.jsxs(a,{children:["   ",(c=l==null?void 0:l.find(d=>d.uid===t.userId))==null?void 0:c.displayName]}),s.jsxs(a,{children:["x",t.quantity]}),s.jsxs(a,{children:["AED ",t.price]}),s.jsxs(a,{children:["AED ",t.price*t.quantity]}),s.jsxs(a,{children:["AED ",(t.price*t.quantity*.3).toFixed(2)]}),s.jsxs(a,{children:["AED ",(t.price*t.quantity*.7).toFixed(2)]})]})}),s.jsxs(n,{children:[s.jsx(a,{colSpan:3}),s.jsx(a,{children:"Subtotal"}),s.jsxs(a,{children:["AED ",e==null?void 0:e.subTotal]})]}),s.jsxs(n,{children:[s.jsx(a,{colSpan:3}),s.jsx(a,{children:"Discount"}),s.jsxs(a,{children:["AED ",e==null?void 0:e.discount]})]}),s.jsxs(n,{children:[s.jsx(a,{colSpan:3}),s.jsx(a,{children:"Total"}),s.jsxs(a,{children:["AED ",e==null?void 0:e.totalAmount]})]}),s.jsxs(n,{children:[s.jsx(a,{colSpan:3}),s.jsx(a,{children:"VAT 5%"}),s.jsxs(a,{children:["AED ",((e==null?void 0:e.totalAmount)*.05).toFixed(2)]})]}),s.jsxs(n,{children:[s.jsx(a,{colSpan:3}),s.jsx(a,{children:"Shipping"}),s.jsxs(a,{children:["AED ",e==null?void 0:e.shipping]})]}),s.jsxs(n,{children:[s.jsx(a,{colSpan:3}),s.jsx(a,{children:"Grand Total"}),s.jsxs(a,{children:["AED ",(e.totalAmount*1.05+(e==null?void 0:e.shipping)).toFixed(2)]})]})]})]})})})}),s.jsx(r,{xs:12,md:4,children:s.jsx(v,{customer:e.customer,delivery:e.delivery,payment:e.payment,shippingAddress:e.shippingAddress})})]})]})}function $(){return s.jsxs(s.Fragment,{children:[s.jsx(k,{children:s.jsx("title",{children:" Dashboard: Order Details"})}),s.jsx(B,{})]})}export{$ as default};
