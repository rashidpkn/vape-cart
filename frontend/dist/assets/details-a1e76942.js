import{ax as c,b$ as l,D as i,a8 as r,aj as u,ag as x,c0 as h,al as e,a9 as j,aH as g}from"./index-c27a6d64.js";import{a as O,b,c as D,d as S}from"./order-details-history-51816f2d.js";import{u as f}from"./use-params-7ef3da11.js";import"./confirm-dialog-1522b57e.js";import"./DialogTitle-f78a78b8.js";import"./DialogContent-52f18f02.js";import"./DialogActions-239b668c.js";import"./custom-breadcrumbs-8f64b910.js";import"./use-table-69a6550c.js";import"./table-pagination-custom-f60e2161.js";import"./TablePagination-38fcb2a5.js";import"./Select-179f1616.js";import"./Menu-81634411.js";import"./Checkbox-0fd87c0c.js";import"./SwitchBase-a6a4ed56.js";import"./FormControlLabel-d75ff14a.js";import"./Switch-3c292aad.js";import"./format-number-053a9228.js";import"./DatePicker-93f50d32.js";import"./TextField-02677a4f.js";import"./FormControl-a402b7d8.js";import"./FormLabel-a237f099.js";import"./ListItem-bc0f7e74.js";import"./ListItemSecondaryAction-73788a19.js";import"./Chip-1be936f3.js";import"./custom-date-range-picker-495430eb.js";import"./Card-b5b4751d.js";import"./TableContainer-d998def7.js";import"./CardHeader-568f63dd.js";import"./TimelineItem-507b973f.js";function y(){const o=c(),a=f(),{id:m}=a,t=l.filter(s=>s.id===m)[0],[n,p]=i.useState(t.status),d=i.useCallback(s=>{p(s)},[]);return r.jsxs(u,{maxWidth:o.themeStretch?!1:"lg",children:[r.jsx(O,{backLink:x.dashboard.order.root,orderNumber:t.orderNumber,createdAt:t.createdAt,status:n,onChangeStatus:d,statusOptions:h}),r.jsxs(e,{container:!0,spacing:3,children:[r.jsx(e,{xs:12,md:8,children:r.jsxs(j,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:[r.jsx(b,{items:t.items,taxes:t.taxes,shipping:t.shipping,discount:t.discount,subTotal:t.subTotal,totalAmount:t.totalAmount}),r.jsx(D,{history:t.history})]})}),r.jsx(e,{xs:12,md:4,children:r.jsx(S,{customer:t.customer,delivery:t.delivery,payment:t.payment,shippingAddress:t.shippingAddress})})]})]})}function tt(){return r.jsxs(r.Fragment,{children:[r.jsx(g,{children:r.jsx("title",{children:" Dashboard: Order Details"})}),r.jsx(y,{})]})}export{tt as default};
