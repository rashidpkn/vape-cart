import{a4 as r,bn as S,a_ as c,j as t,aS as f,p as O,cj as g,a$ as a,S as y,b0 as D,b1 as A,b2 as E,W as T}from"./index-b8ace7df.js";import{a as k,b as C,c as _}from"./order-details-toolbar-46f04860.js";import"./confirm-dialog-c31605c9.js";import"./DialogTitle-51324d08.js";import"./DialogContent-1c11f449.js";import"./utils-74d4caeb.js";import"./use-table-cd3d492e.js";import"./TableContainer-7461e89f.js";function v(){const[d,u]=r.useState([]),p=async()=>{const e=await D(A(E,"users")),i=[];e.forEach(b=>{i.push(b.data())}),u(i)};r.useEffect(()=>{p()},[]);const m=S(),{id:o}=m,[s,l]=r.useState({}),h=async()=>{try{const{data:e}=await c.get(`orders/${o}`);l(e),n(e.status)}catch{}};r.useEffect(()=>{h()},[]);const[x,n]=r.useState(s.status),j=r.useCallback(async e=>{await c.patch(`/orders/status/${o}`,{status:e}),n(e)},[]);return t.jsxs(f,{px:5,children:[t.jsx(k,{backLink:O.dashboard.order.root,orderNumber:s.orderNumber,createdAt:s.createdAt,status:x,onChangeStatus:j,statusOptions:g}),t.jsxs(a,{container:!0,spacing:3,children:[t.jsx(a,{xs:12,md:8,children:t.jsx(y,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:t.jsx(C,{store:d,items:s.items,taxes:s.taxes,shipping:s.shipping,discount:s.discount,subTotal:s.subTotal,totalAmount:s.totalAmount})})}),t.jsx(a,{xs:12,md:4,children:t.jsx(_,{customer:s.customer,delivery:s.delivery,payment:s.payment,shippingAddress:s.shippingAddress})})]})]})}function q(){return t.jsxs(t.Fragment,{children:[t.jsx(T,{children:t.jsx("title",{children:" Dashboard: Order Details"})}),t.jsx(v,{})]})}export{q as default};
