import{ax as c,b_ as l,D as i,a8 as r,aj as u,ag as x,b$ as h,al as e,a9 as j,aH as g}from"./index-086ce406.js";import{a as b,b as O,c as D,d as S}from"./order-details-history-a51c32a0.js";import{u as f}from"./use-params-c05d3157.js";import"./confirm-dialog-b88853a3.js";import"./DialogTitle-29b400d0.js";import"./DialogContent-c865fac6.js";import"./DialogActions-20699274.js";import"./custom-breadcrumbs-5a71242b.js";import"./use-table-49c4e45e.js";import"./table-pagination-custom-e93cd0a6.js";import"./TablePagination-bc382a52.js";import"./Select-ee45cab4.js";import"./Menu-95a5b99b.js";import"./Checkbox-e4569f7c.js";import"./SwitchBase-8d2ece05.js";import"./FormControlLabel-d079e2e2.js";import"./Switch-caf70fe6.js";import"./format-number-17cc7955.js";import"./DatePicker-3af32417.js";import"./TextField-346b5019.js";import"./FormControl-e114322c.js";import"./FormLabel-f4a6b8d7.js";import"./ListItem-e57179c3.js";import"./ListItemSecondaryAction-a1f977b3.js";import"./Chip-a945ee22.js";import"./custom-date-range-picker-4b0b1408.js";import"./Card-0cb6ed66.js";import"./TableContainer-6aa76a7b.js";import"./CardHeader-d9c43941.js";import"./TimelineItem-299a652a.js";function y(){const o=c(),a=f(),{id:m}=a,t=l.filter(s=>s.id===m)[0],[n,p]=i.useState(t.status),d=i.useCallback(s=>{p(s)},[]);return r.jsxs(u,{maxWidth:o.themeStretch?!1:"lg",children:[r.jsx(b,{backLink:x.dashboard.order.root,orderNumber:t.orderNumber,createdAt:t.createdAt,status:n,onChangeStatus:d,statusOptions:h}),r.jsxs(e,{container:!0,spacing:3,children:[r.jsx(e,{xs:12,md:8,children:r.jsxs(j,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:[r.jsx(O,{items:t.items,taxes:t.taxes,shipping:t.shipping,discount:t.discount,subTotal:t.subTotal,totalAmount:t.totalAmount}),r.jsx(D,{history:t.history})]})}),r.jsx(e,{xs:12,md:4,children:r.jsx(S,{customer:t.customer,delivery:t.delivery,payment:t.payment,shippingAddress:t.shippingAddress})})]})]})}function tt(){return r.jsxs(r.Fragment,{children:[r.jsx(g,{children:r.jsx("title",{children:" Dashboard: Order Details"})}),r.jsx(y,{})]})}export{tt as default};