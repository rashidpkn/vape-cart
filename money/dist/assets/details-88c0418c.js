import{aX as m,bo as d,a4 as t,j as s,aO as x,bs as h,p as o,aW as p,W as u}from"./index-519398e3.js";import"./confirm-dialog-d0bc3927.js";import{d as l}from"./invoice-details-a01bc7fd.js";import"./DialogTitle-e2cecead.js";import"./DialogContent-bcfe164c.js";import"./TableContainer-7d1c93e5.js";function b(){m();const i=d(),{id:r}=i,[a,n]=t.useState({}),c=async()=>{try{const{data:e}=await p.get(`invoice/${r}`);n(e)}catch{}};return t.useEffect(()=>{c()},[]),s.jsxs(x,{px:5,children:[s.jsx(h,{heading:a==null?void 0:a.invoiceNumber,links:[{name:"Dashboard",href:o.dashboard.root},{name:"Invoice",href:o.dashboard.invoice.root},{name:a==null?void 0:a.invoiceNumber}],sx:{mb:{xs:3,md:5}}}),s.jsx(l,{invoice:a})]})}function C(){return s.jsxs(s.Fragment,{children:[s.jsx(u,{children:s.jsx("title",{children:" Dashboard: Invoice Details"})}),s.jsx(b,{})]})}export{C as default};
