import{r as a,j as r,c as x,p as h,aK as b,G as n,q as O,d as g,W as j}from"./index-eab1947b.js";import{a as f,b as S}from"./order-details-toolbar-affa8a58.js";import{u as T}from"./use-params-982aa977.js";import"./confirm-dialog-5f31a474.js";import"./DialogTitle-afc4f22b.js";import"./DialogContent-bf5a557b.js";import"./use-table-71fa97b6.js";import"./table-pagination-custom-d1b569d7.js";import"./TableRow-c5a0faf0.js";import"./Checkbox-d0a439ca.js";import"./KeyboardArrowRight-f8f8542f.js";import"./LastPage-269454dd.js";import"./custom-breadcrumbs-a2330046.js";import"./format-number-4f65bcca.js";import"./Card-4f9a49c9.js";import"./Tabs-34a22f2e.js";import"./TableContainer-b27fe30d.js";import"./TableBody-679881fd.js";import"./CardHeader-0c105991.js";function D(){const u=T(),{id:m}=u,[s,c]=a.useState({}),d=async()=>{try{const{data:t}=await g.get(`orders/${m}`);t.items=t.items.filter(e=>e.userId!=="tpquNGEnfDOqPlug2Nh7VdzgcJ33"),t.subTotal=t.items.reduce((e,o)=>e+o.subTotal,0),t.totalQuantity=t.items.reduce((e,o)=>e+o.quantity,0),t.totalAmount=t.subTotal+t.shipping,c(t),i(t.status)}catch{}};a.useEffect(()=>{d()},[]);const[p,i]=a.useState(s.status),l=a.useCallback(t=>{i(t)},[]);return r.jsxs(x,{px:5,children:[r.jsx(f,{backLink:h.dashboard.order.root,orderNumber:s.orderNumber,createdAt:s.createdAt,status:p,onChangeStatus:l,statusOptions:b}),r.jsx(n,{container:!0,spacing:3,children:r.jsx(n,{xs:12,md:12,children:r.jsx(O,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:r.jsx(S,{items:s.items,taxes:s.taxes,shipping:s.shipping,discount:s.discount,subTotal:s.subTotal,totalAmount:s.totalAmount})})})})]})}function K(){return r.jsxs(r.Fragment,{children:[r.jsx(j,{children:r.jsx("title",{children:" Dashboard: Order Details"})}),r.jsx(D,{})]})}export{K as default};
