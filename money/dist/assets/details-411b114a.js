import{aO as p,bu as h,D as r,af as s,aC as x,az as g,d8 as O,aE as a,au as j,b5 as b}from"./index-bb3ecc03.js";import{a as f,b as S,c as D}from"./order-details-toolbar-7c040c68.js";import{a as A}from"./api-3aac980b.js";import"./confirm-dialog-dde51b13.js";import"./use-table-dc5fc420.js";import"./table-pagination-custom-9e066bb8.js";import"./custom-date-range-picker-a6a25111.js";import"./TableContainer-cd1ab181.js";import"./axios-e0d8a382.js";function C(){const n=p(),o=h(),{id:d}=o,[t,c]=r.useState({}),u=async()=>{try{const{data:e}=await A.get(`orders/${d}`);c(e),i(e.status)}catch{}};r.useEffect(()=>{u()},[]);const[m,i]=r.useState(t.status),l=r.useCallback(e=>{i(e)},[]);return s.jsxs(x,{maxWidth:n.themeStretch?!1:"lg",children:[s.jsx(f,{backLink:g.dashboard.order.root,orderNumber:t.orderNumber,createdAt:t.createdAt,status:m,onChangeStatus:l,statusOptions:O}),s.jsxs(a,{container:!0,spacing:3,children:[s.jsx(a,{xs:12,md:8,children:s.jsx(j,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:s.jsx(S,{items:t.items,taxes:t.taxes,shipping:t.shipping,discount:t.discount,subTotal:t.subTotal,totalAmount:t.totalAmount})})}),s.jsx(a,{xs:12,md:4,children:s.jsx(D,{customer:t.customer,delivery:t.delivery,payment:t.payment,shippingAddress:t.shippingAddress})})]})]})}function w(){return s.jsxs(s.Fragment,{children:[s.jsx(b,{children:s.jsx("title",{children:" Dashboard: Order Details"})}),s.jsx(C,{})]})}export{w as default};