import{ax as c,bX as l,D as i,a8 as r,aj as u,ag as x,bY as h,al as e,a9 as j,aH as g}from"./index-a747811c.js";import{a as b,b as O,c as D,d as S}from"./order-details-history-c8022014.js";import{u as f}from"./use-params-c2f61bbe.js";import"./confirm-dialog-342a8153.js";import"./DialogTitle-b5c3e23b.js";import"./DialogContent-8b63754b.js";import"./DialogActions-b339743b.js";import"./custom-breadcrumbs-4c4417ef.js";import"./use-table-ff505df5.js";import"./table-pagination-custom-35112ce6.js";import"./TablePagination-b959666e.js";import"./Select-0e3a3519.js";import"./Menu-85627bb4.js";import"./Checkbox-c13775e7.js";import"./SwitchBase-46064381.js";import"./format-number-6c2edc06.js";import"./DatePicker-edc6af47.js";import"./TextField-5c8d940a.js";import"./FormControl-0c109cff.js";import"./FormLabel-b8b56886.js";import"./ListItem-9c16c624.js";import"./ListItemSecondaryAction-0c6c8d71.js";import"./Chip-db514ca4.js";import"./custom-date-range-picker-f95da71c.js";import"./Card-edd4abf8.js";import"./TableContainer-e899b1a5.js";import"./CardHeader-28cee1fc.js";import"./TimelineItem-10ec3c31.js";function y(){const a=c(),o=f(),{id:m}=o,t=l.filter(s=>s.id===m)[0],[n,p]=i.useState(t.status),d=i.useCallback(s=>{p(s)},[]);return r.jsxs(u,{maxWidth:a.themeStretch?!1:"lg",children:[r.jsx(b,{backLink:x.dashboard.order.root,orderNumber:t.orderNumber,createdAt:t.createdAt,status:n,onChangeStatus:d,statusOptions:h}),r.jsxs(e,{container:!0,spacing:3,children:[r.jsx(e,{xs:12,md:8,children:r.jsxs(j,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:[r.jsx(O,{items:t.items,taxes:t.taxes,shipping:t.shipping,discount:t.discount,subTotal:t.subTotal,totalAmount:t.totalAmount}),r.jsx(D,{history:t.history})]})}),r.jsx(e,{xs:12,md:4,children:r.jsx(S,{customer:t.customer,delivery:t.delivery,payment:t.payment,shippingAddress:t.shippingAddress})})]})]})}function Z(){return r.jsxs(r.Fragment,{children:[r.jsx(g,{children:r.jsx("title",{children:" Dashboard: Order Details"})}),r.jsx(y,{})]})}export{Z as default};
