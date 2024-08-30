import{by as A,ck as D,az as k,aA as B,a4 as r,bI as L,cl as U,p as x,j as s,C as E,bA as I,B as j,R as N,aK as R,aR as H,bu as O,aM as _,bv as z,c2 as W,cm as q,b3 as G,bD as J,bo as K,aJ as M,aZ as V,b4 as Z,b5 as $,b6 as Q,c8 as X,c9 as Y,ca as ee,bG as se,bH as te,b0 as ae,b1 as oe,b2 as le,W as ne}from"./index-f22d2069.js";import{a as re,b as ie,c as ce}from"./user-card-list-999d5071.js";import"./Alert-4ca50e10.js";const de=[{value:"all",label:"All"}],he=[{id:"name",label:"Name"},{id:"phoneNumber",label:"Phone Number",width:180},{id:"Store Name",label:"Store Name",width:120},{id:"tradeLicense",label:"Trade License",width:180},{id:"contactPersonInTouch",label:"Contact Person In Touch",width:220},{id:"",width:88}],p={name:"",role:[],status:"all"};function ue(){const e=A(),w=D(),u=k(),i=B(),[o,d]=r.useState([]),g=async()=>{const t=await ae(oe(le,"users")),l=[];t.forEach(h=>{l.push(h.data())}),d(l)};r.useEffect(()=>{g()},[]);const[a,c]=r.useState(p),n=ge({inputData:o,comparator:L(e.order,e.orderBy),filters:a}),b=n.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),f=e.dense?52:72,P=!U(p,a),C=!n.length&&P||!n.length,m=r.useCallback((t,l)=>{e.onResetPage(),c(h=>({...h,[t]:l}))},[e]),S=r.useCallback(t=>{const l=o.filter(h=>h.id!==t);d(l),e.onUpdatePageDeleteRow(b.length)},[b.length,e,o]),T=r.useCallback(()=>{const t=o.filter(l=>!e.selected.includes(l.id));d(t),e.onUpdatePageDeleteRows({totalRows:o.length,totalRowsInPage:b.length,totalRowsFiltered:n.length})},[n.length,b.length,e,o]),F=r.useCallback(t=>{u.push(x.dashboard.user.edit(t))},[u]),v=r.useCallback((t,l)=>{m("status",l)},[m]),y=r.useCallback(()=>{c(p)},[]);return s.jsxs(s.Fragment,{children:[s.jsxs(E,{maxWidth:w.themeStretch?!1:"lg",children:[s.jsx(I,{heading:"Store",links:[{name:"Dashboard",href:x.dashboard.root},{name:"Store",href:x.dashboard.user.root}],action:s.jsx(j,{component:N,href:x.dashboard.user.new,variant:"contained",startIcon:s.jsx(R,{icon:"mingcute:add-line"}),children:"New User"}),sx:{mb:{xs:3,md:5}}}),s.jsxs(H,{children:[s.jsx(O,{value:a.status,onChange:v,sx:{px:2.5,boxShadow:t=>`inset 0 -2px 0 0 ${_(t.palette.grey[500],.08)}`},children:de.map(t=>s.jsx(z,{iconPosition:"end",value:t.value,label:t.label,icon:s.jsx(W,{variant:(t.value==="all"||t.value===a.status)&&"filled"||"soft",children:t.value==="all"&&o.length})},t.value))}),s.jsx(re,{filters:a,onFilters:m,roleOptions:q}),P&&s.jsx(ie,{filters:a,onFilters:m,onResetFilters:y,results:n.length,sx:{p:2.5,pt:0}}),s.jsxs(G,{sx:{position:"relative",overflow:"unset"},children:[s.jsx(J,{dense:e.dense,numSelected:e.selected.length,rowCount:o.length,onSelectAllRows:t=>e.onSelectAllRows(t,o.map(l=>l.id)),action:s.jsx(K,{title:"Delete",children:s.jsx(M,{color:"primary",onClick:i.onTrue,children:s.jsx(R,{icon:"solar:trash-bin-trash-bold"})})})}),s.jsx(V,{children:s.jsxs(Z,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[s.jsx($,{order:e.order,orderBy:e.orderBy,headLabel:he,rowCount:o.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:t=>e.onSelectAllRows(t,o.map(l=>l.id))}),s.jsxs(Q,{children:[n.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map(t=>s.jsx(ce,{row:t,selected:e.selected.includes(t.id),onSelectRow:()=>e.onSelectRow(t.id),onDeleteRow:()=>S(t.id),onEditRow:()=>F(t.id)},t.id)),s.jsx(X,{height:f,emptyRows:Y(e.page,e.rowsPerPage,o.length)}),s.jsx(ee,{notFound:C})]})]})})]}),s.jsx(se,{count:n.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),s.jsx(te,{open:i.value,onClose:i.onFalse,title:"Delete",content:s.jsxs(s.Fragment,{children:["Are you sure want to delete ",s.jsxs("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:s.jsx(j,{variant:"contained",color:"error",onClick:()=>{T(),i.onFalse()},children:"Delete"})})]})}function ge({inputData:e,comparator:w,filters:u}){const{name:i,status:o,role:d}=u,g=e.map((a,c)=>[a,c]);return g.sort((a,c)=>{const n=w(a[0],c[0]);return n!==0?n:a[1]-c[1]}),e=g.map(a=>a[0]),i&&(e=e.filter(a=>a.name.toLowerCase().indexOf(i.toLowerCase())!==-1)),o!=="all"&&(e=e.filter(a=>a.status===o)),d.length&&(e=e.filter(a=>d.includes(a.role))),e}function we(){return s.jsxs(s.Fragment,{children:[s.jsx(ne,{children:s.jsx("title",{children:" Dashboard: User List"})}),s.jsx(ue,{})]})}export{we as default};
