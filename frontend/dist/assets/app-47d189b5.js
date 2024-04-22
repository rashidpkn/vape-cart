import{ab as S,j as e,S as g,ac as z,ad as P,T as u,ae as r,af as O,ag as V,ah as q,ai as M,aj as $,ak as J,al as R,B as D,am as L,an as c,ao as K,ap as Q,aq as m,ar as U,as as X,at as Y,au as b,av as k,aw as Z,ax as _,F as f,ay as l,az as ee,aA as se,aB as I,W as te}from"./index-8741151d.js";import{B as re}from"./blurlayer-54152746.js";import"./image-a38f243f.js";import"./carousel-arrow-index-b96f6bf8.js";import{T as oe}from"./TableContainer-1e44fc6e.js";import{C as ae}from"./chart-e43d3469.js";function W({title:s,description:t,action:a,img:i,...n}){const o=S();return e.jsxs(g,{flexDirection:{xs:"column",md:"row"},sx:{...z({direction:"135deg",startColor:P(o.palette.primary.light,.2),endColor:P(o.palette.primary.main,.2)}),height:{md:1},borderRadius:2,position:"relative",color:"primary.darker",backgroundColor:"common.white"},...n,children:[e.jsxs(g,{flexGrow:1,justifyContent:"center",alignItems:{xs:"center",md:"flex-start"},sx:{p:{xs:o.spacing(5,3,0,3),md:o.spacing(5)},textAlign:{xs:"center",md:"left"}},children:[e.jsx(u,{paragraph:!0,variant:"h4",sx:{whiteSpace:"pre-line"},children:s}),e.jsx(u,{variant:"body2",sx:{opacity:.8,maxWidth:360,mb:{xs:3,xl:5}},children:t}),a&&a]}),i&&e.jsx(g,{component:"span",justifyContent:"center",sx:{p:{xs:5,md:3},maxWidth:360,mx:"auto"},children:i})]})}W.propTypes={action:r.node,description:r.string,img:r.node,title:r.string};r.array;r.bool,r.object;function B({title:s,subheader:t,tableData:a,tableLabels:i,...n}){return e.jsxs(O,{...n,children:[e.jsx(V,{title:s,subheader:t,sx:{mb:3}}),e.jsx(oe,{sx:{overflow:"unset"},children:e.jsx(q,{children:e.jsxs(M,{sx:{minWidth:680},children:[e.jsx($,{headLabel:i}),e.jsx(J,{children:a.map(o=>e.jsx(E,{row:o},o.id))})]})})}),e.jsx(R,{sx:{borderStyle:"dashed"}}),e.jsx(D,{sx:{p:2,textAlign:"right"},children:e.jsx(L,{size:"small",color:"inherit",endIcon:e.jsx(c,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})})]})}B.propTypes={subheader:r.string,tableData:r.array,tableLabels:r.array,title:r.string};function E({row:s}){const t=K(),a=()=>{t.onClose(),console.info("DOWNLOAD",s.id)},i=()=>{t.onClose(),console.info("PRINT",s.id)},n=()=>{t.onClose(),console.info("SHARE",s.id)},o=()=>{t.onClose(),console.info("DELETE",s.id)};return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{children:[e.jsx(m,{children:s.id}),e.jsx(m,{children:s.invoiceTo.name}),e.jsx(m,{children:s.items[0].name}),e.jsx(m,{children:U(s.totalAmount)}),e.jsx(m,{children:e.jsx(X,{variant:"soft",color:s.status==="progress"&&"warning"||s.status==="out of date"&&"error"||"success",children:s.status})})]}),e.jsxs(Y,{open:t.open,onClose:t.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(b,{onClick:a,children:[e.jsx(c,{icon:"eva:cloud-download-fill"}),"Download"]}),e.jsxs(b,{onClick:i,children:[e.jsx(c,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(b,{onClick:n,children:[e.jsx(c,{icon:"solar:share-bold"}),"Share"]}),e.jsx(R,{sx:{borderStyle:"dashed"}}),e.jsxs(b,{onClick:o,sx:{color:"error.main"},children:[e.jsx(c,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}E.propTypes={row:r.object};function y({title:s,percent:t,total:a,chart:i,sx:n,...o}){const j=S(),{colors:d=[j.palette.primary.light,j.palette.primary.main],series:p,options:x}=i,v={colors:d.map(h=>h[1]),fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:d[0]},{offset:100,color:d[1]}]}},chart:{sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"68%",borderRadius:2}},tooltip:{x:{show:!1},y:{formatter:h=>k(h),title:{formatter:()=>""}},marker:{show:!1}},...x};return e.jsxs(O,{sx:{display:"flex",alignItems:"center",p:3,...n},...o,children:[e.jsxs(D,{sx:{flexGrow:1},children:[e.jsx(u,{variant:"subtitle2",children:s}),e.jsxs(g,{direction:"row",alignItems:"center",sx:{mt:2,mb:1},children:[e.jsx(c,{width:24,icon:t<0?"solar:double-alt-arrow-down-bold-duotone":"solar:double-alt-arrow-up-bold-duotone",sx:{mr:1,color:"success.main",...t<0&&{color:"error.main"}}}),e.jsxs(u,{component:"div",variant:"subtitle2",children:[t>0&&"+",Z(t)]})]}),e.jsx(u,{variant:"h3",children:k(a)})]}),e.jsx(ae,{type:"bar",series:[{data:p}],options:v,width:60,height:36})]})}y.propTypes={chart:r.object,percent:r.number,sx:r.object,title:r.string,total:r.number};function ie(){const s=S(),{user:t}=_(),[a,i]=f.useState([]),[n,o]=f.useState([]),[j,d]=f.useState([]);return f.useEffect(()=>{(async()=>{try{const[x,v,h]=await Promise.all([I.get("products",{params:{userId:t.id}}),I.get("/orders"),I.get("/invoice")]),{products:w}=x.data,N=v.data,G=h.data,F=N.filter(C=>C.items.some(T=>w.some(A=>A.id===T.id))),H=G.filter(C=>C.items.some(T=>w.some(A=>A.id===T.id)));o(F),i(w),d(H)}catch(x){console.error("An error occurred:",x)}})()},[t.id]),e.jsx(D,{px:5,children:e.jsxs(l,{container:!0,spacing:3,sx:{position:"relative"},children:[e.jsx(re,{}),e.jsx(l,{xs:12,md:12,children:e.jsx(W,{title:`Welcome back 👋 
 ${t==null?void 0:t.displayName}`,description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",img:e.jsx(ee,{}),action:e.jsx(se,{to:"/dashboard/product/new",children:e.jsx(L,{variant:"contained",color:"primary",children:"Add Product"})})})}),e.jsx(l,{xs:12,md:4,children:e.jsx(y,{title:"Total Product",percent:0,total:a.length,chart:{series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(l,{xs:12,md:4,children:e.jsx(y,{title:"Total Sales",percent:0,total:n.length,chart:{colors:[s.palette.info.light,s.palette.info.main],series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(l,{xs:12,md:4,children:e.jsx(y,{title:"Pending Orders",percent:0,total:n.filter(p=>p.status==="pending"||p.status==="Order received").length,chart:{colors:[s.palette.warning.light,s.palette.warning.main],series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(l,{xs:12,lg:8,children:e.jsx(B,{title:"New Invoice",tableData:j,tableLabels:[{id:"id",label:"Invoice ID"},{id:"Customers",label:"Customers"},{id:"Product",label:"Product"},{id:"Amount",label:"Amount"},{id:"status",label:"Status"}]})})]})})}function he(){return e.jsxs(e.Fragment,{children:[e.jsx(te,{children:e.jsx("title",{children:" Dashboard: App"})}),e.jsx(ie,{})]})}export{he as default};
