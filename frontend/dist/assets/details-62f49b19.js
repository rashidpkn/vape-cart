import{aE as x,r as a,j as s,b as h,ai as b,b8 as g,K as n,v as O,i as j,W as f}from"./index-20dcf14a.js";import{a as S,b as T}from"./order-details-toolbar-f3fe87c2.js";import"./confirm-dialog-39106987.js";import"./use-table-c61effb4.js";import"./table-pagination-custom-8071959a.js";import"./TableRow-8c2a2d0a.js";import"./Checkbox-812a72f7.js";import"./LastPage-7228cdc4.js";import"./TableContainer-c3160f9a.js";import"./CardHeader-26f2a26b.js";function D(){const u=x(),{id:c}=u,[r,d]=a.useState({}),l=async()=>{try{const{data:t}=await j.get(`orders/${c}`);t.items=t.items.filter(e=>e.userId!=="tpquNGEnfDOqPlug2Nh7VdzgcJ33"),t.subTotal=t.items.reduce((e,o)=>e+o.subTotal,0),t.totalQuantity=t.items.reduce((e,o)=>e+o.quantity,0),t.totalAmount=t.subTotal+t.shipping,d(t),i(t.status)}catch(t){console.log(t)}};a.useEffect(()=>{l()},[]);const[m,i]=a.useState(r.status),p=a.useCallback(t=>{i(t)},[]);return s.jsxs(h,{px:5,children:[s.jsx(S,{backLink:b.dashboard.order.root,orderNumber:r.orderNumber,createdAt:r.createdAt,status:m,onChangeStatus:p,statusOptions:g}),s.jsx(n,{container:!0,spacing:3,children:s.jsx(n,{xs:12,md:12,children:s.jsx(O,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:s.jsx(T,{items:r.items,taxes:r.taxes,shipping:r.shipping,discount:r.discount,subTotal:r.subTotal,totalAmount:r.totalAmount})})})})]})}function v(){return s.jsxs(s.Fragment,{children:[s.jsx(f,{children:s.jsx("title",{children:" Dashboard: Order Details"})}),s.jsx(D,{})]})}export{v as default};
