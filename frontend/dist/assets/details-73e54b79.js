import{b4 as p,F as e,j as s,B as l,aR as x,cu as h,aW as a,S as j,bu as O,W as b}from"./index-f9021dbd.js";import{a as g,b as S,c as f}from"./order-details-toolbar-3e5bc5f5.js";import{u as D}from"./use-params-8fa97e5f.js";import"./confirm-dialog-aefa8f33.js";import"./DialogTitle-ae5956ef.js";import"./DialogContent-90861b47.js";import"./use-table-9b5e25ee.js";import"./table-pagination-custom-532209c9.js";import"./Checkbox-02cb7b46.js";import"./format-number-91b78f73.js";import"./custom-date-range-picker-9b1206ce.js";import"./TableContainer-c6afb961.js";function A(){p();const o=D(),{id:n}=o,[t,d]=e.useState({}),c=async()=>{try{const{data:r}=await O.get(`orders/${n}`);d(r),i(r.status)}catch{}};e.useEffect(()=>{c()},[]);const[u,i]=e.useState(t.status),m=e.useCallback(r=>{i(r)},[]);return s.jsxs(l,{px:5,children:[s.jsx(g,{backLink:x.dashboard.order.root,orderNumber:t.orderNumber,createdAt:t.createdAt,status:u,onChangeStatus:m,statusOptions:h}),s.jsxs(a,{container:!0,spacing:3,children:[s.jsx(a,{xs:12,md:8,children:s.jsx(j,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:s.jsx(S,{items:t.items,taxes:t.taxes,shipping:t.shipping,discount:t.discount,subTotal:t.subTotal,totalAmount:t.totalAmount})})}),s.jsx(a,{xs:12,md:4,children:s.jsx(f,{customer:t.customer,delivery:t.delivery,payment:t.payment,shippingAddress:t.shippingAddress})})]})]})}function F(){return s.jsxs(s.Fragment,{children:[s.jsx(b,{children:s.jsx("title",{children:" Dashboard: Order Details"})}),s.jsx(A,{})]})}export{F as default};