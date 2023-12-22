import{as as j,af as e,au as p,aE as O,am as y,ac as l,aq as o,aI as C,aC as B,ap as f,aA as E,aV as F,bp as z,aM as I,ao as T,aw as A,az as d,bx as G,aU as $,aW as H,by as M,aY as m,bu as V,aN as U,aB as _,aD as c,bz as q,bA as Y,bB as Z,bC as J,aZ as K}from"./index-3adde4c0.js";import{I as Q,v}from"./image-bb749e0c.js";import{u as X,C as ee,a as se,b as te}from"./use-carousel-b037859e.js";import{f as re,a as w,b as oe}from"./format-number-326f4e94.js";import{b as ae,T as ie,a as x}from"./table-pagination-custom-8adf02a6.js";import{T as ne,a as le,b as ce}from"./TableContainer-dffc8614.js";import{C as de}from"./chart-a6b8d978.js";import"./transition-bee6630b.js";import"./Checkbox-1d27f0b0.js";function D({title:t,description:s,action:r,img:a,...n}){const i=j();return e.jsxs(p,{flexDirection:{xs:"column",md:"row"},sx:{...O({direction:"135deg",startColor:y(i.palette.primary.light,.2),endColor:y(i.palette.primary.main,.2)}),height:{md:1},borderRadius:2,position:"relative",color:"primary.darker",backgroundColor:"common.white"},...n,children:[e.jsxs(p,{flexGrow:1,justifyContent:"center",alignItems:{xs:"center",md:"flex-start"},sx:{p:{xs:i.spacing(5,3,0,3),md:i.spacing(5)},textAlign:{xs:"center",md:"left"}},children:[e.jsx(l,{paragraph:!0,variant:"h4",sx:{whiteSpace:"pre-line"},children:t}),e.jsx(l,{variant:"body2",sx:{opacity:.8,maxWidth:360,mb:{xs:3,xl:5}},children:s}),r&&r]}),a&&e.jsx(p,{component:"span",justifyContent:"center",sx:{p:{xs:5,md:3},maxWidth:360,mx:"auto"},children:a})]})}D.propTypes={action:o.node,description:o.string,img:o.node,title:o.string};function S({list:t,...s}){const r=X({speed:800,autoplay:!0,...ee({sx:{top:16,left:16,position:"absolute",color:"primary.light"}})});return e.jsxs(C,{...s,children:[e.jsx(se,{ref:r.carouselRef,...r.carouselSettings,children:t.map((a,n)=>e.jsx(P,{item:a,active:n===r.currentIndex},a.id))}),e.jsx(te,{onNext:r.onNext,onPrev:r.onPrev,sx:{top:8,right:8,position:"absolute",color:"common.white"}})]})}S.propTypes={list:o.array};function P({item:t,active:s}){const r=j(),{coverUrl:a,title:n,description:i}=t,h=e.jsx(Q,{alt:n,src:a,overlay:`linear-gradient(to bottom, ${y(r.palette.grey[900],0)} 0%, ${r.palette.grey[900]} 75%)`,sx:{width:1,height:{xs:280,xl:320}}});return e.jsxs(B,{action:!0,animate:s,sx:{position:"relative"},children:[e.jsxs(p,{spacing:1,sx:{p:3,width:1,bottom:0,zIndex:9,textAlign:"left",position:"absolute",color:"common.white"},children:[e.jsx(f.div,{variants:v().inRight,children:e.jsx(l,{variant:"overline",sx:{color:"primary.light"},children:"Featured App"})}),e.jsx(f.div,{variants:v().inRight,children:e.jsx(E,{color:"inherit",underline:"none",children:e.jsx(l,{variant:"h5",noWrap:!0,children:n})})}),e.jsx(f.div,{variants:v().inRight,children:e.jsx(l,{variant:"body2",noWrap:!0,children:i})})]}),h]})}P.propTypes={active:o.bool,item:o.object};function k({title:t,subheader:s,tableData:r,tableLabels:a,...n}){return e.jsxs(C,{...n,children:[e.jsx(F,{title:t,subheader:s,sx:{mb:3}}),e.jsx(ne,{sx:{overflow:"unset"},children:e.jsx(z,{children:e.jsxs(le,{sx:{minWidth:680},children:[e.jsx(ae,{headLabel:a}),e.jsx(ce,{children:[].map(i=>e.jsx(W,{row:i},i.id))})]})})}),e.jsx(I,{sx:{borderStyle:"dashed"}}),e.jsx(T,{sx:{p:2,textAlign:"right"},children:e.jsx(A,{size:"small",color:"inherit",endIcon:e.jsx(d,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})})]})}k.propTypes={subheader:o.string,tableData:o.array,tableLabels:o.array,title:o.string};function W({row:t}){const s=G(),r=()=>{s.onClose(),console.info("DOWNLOAD",t.id)},a=()=>{s.onClose(),console.info("PRINT",t.id)},n=()=>{s.onClose(),console.info("SHARE",t.id)},i=()=>{s.onClose(),console.info("DELETE",t.id)};return e.jsxs(e.Fragment,{children:[e.jsxs(ie,{children:[e.jsx(x,{children:t.invoiceNumber}),e.jsx(x,{children:t.category}),e.jsx(x,{children:re(t.price)}),e.jsx(x,{children:e.jsx($,{variant:"soft",color:t.status==="progress"&&"warning"||t.status==="out of date"&&"error"||"success",children:t.status})}),e.jsx(x,{align:"right",sx:{pr:1},children:e.jsx(H,{color:s.open?"inherit":"default",onClick:s.onOpen,children:e.jsx(d,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(M,{open:s.open,onClose:s.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(m,{onClick:r,children:[e.jsx(d,{icon:"eva:cloud-download-fill"}),"Download"]}),e.jsxs(m,{onClick:a,children:[e.jsx(d,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(m,{onClick:n,children:[e.jsx(d,{icon:"solar:share-bold"}),"Share"]}),e.jsx(I,{sx:{borderStyle:"dashed"}}),e.jsxs(m,{onClick:i,sx:{color:"error.main"},children:[e.jsx(d,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}W.propTypes={row:o.object};function u({title:t,percent:s,total:r,chart:a,sx:n,...i}){const h=j(),{colors:b=[h.palette.primary.light,h.palette.primary.main],series:N,options:R}=a,L={colors:b.map(g=>g[1]),fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:b[0]},{offset:100,color:b[1]}]}},chart:{sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"68%",borderRadius:2}},tooltip:{x:{show:!1},y:{formatter:g=>w(g),title:{formatter:()=>""}},marker:{show:!1}},...R};return e.jsxs(C,{sx:{display:"flex",alignItems:"center",p:3,...n},...i,children:[e.jsxs(T,{sx:{flexGrow:1},children:[e.jsx(l,{variant:"subtitle2",children:t}),e.jsxs(p,{direction:"row",alignItems:"center",sx:{mt:2,mb:1},children:[e.jsx(d,{width:24,icon:s<0?"solar:double-alt-arrow-down-bold-duotone":"solar:double-alt-arrow-up-bold-duotone",sx:{mr:1,color:"success.main",...s<0&&{color:"error.main"}}}),e.jsxs(l,{component:"div",variant:"subtitle2",children:[s>0&&"+",oe(s)]})]}),e.jsx(l,{variant:"h3",children:w(r)})]}),e.jsx(de,{type:"bar",series:[{data:N}],options:L,width:60,height:36})]})}u.propTypes={chart:o.object,percent:o.number,sx:o.object,title:o.string,total:o.number};function xe(){const{user:t}=V(),s=j(),r=U();return e.jsx(_,{maxWidth:r.themeStretch?!1:"xl",children:e.jsxs(c,{container:!0,spacing:3,children:[e.jsx(c,{xs:12,md:8,children:e.jsx(D,{title:`Welcome back 👋 
 ${t==null?void 0:t.displayName}`,description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",img:e.jsx(q,{}),action:e.jsx(Y,{to:"/dashboard/product/new",children:e.jsx(A,{variant:"contained",color:"primary",children:"Add Product"})})})}),e.jsx(c,{xs:12,md:4,children:e.jsx(S,{list:Z})}),e.jsx(c,{xs:12,md:4,children:e.jsx(u,{title:"Total Product",percent:0,total:0,chart:{series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(c,{xs:12,md:4,children:e.jsx(u,{title:"Total Sales",percent:0,total:0,chart:{colors:[s.palette.info.light,s.palette.info.main],series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(c,{xs:12,md:4,children:e.jsx(u,{title:"Pending Orders",percent:0,total:0,chart:{colors:[s.palette.warning.light,s.palette.warning.main],series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(c,{xs:12,lg:8,children:e.jsx(k,{title:"New Invoice",tableData:J,tableLabels:[{id:"id",label:"Invoice ID"},{id:"category",label:"Category"},{id:"price",label:"Price"},{id:"status",label:"Status"},{id:""}]})})]})})}function ye(){return e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx("title",{children:" Dashboard: App"})}),e.jsx(xe,{})]})}export{ye as default};
