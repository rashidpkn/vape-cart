import{aq as t,as as j,af as e,au as h,aE as G,am as v,ac as l,aI as C,aC as F,ap as f,aA as $,aV as B,bX as _,aM as A,ao as D,aw as S,az as d,c3 as z,aU as M,aW as V,c4 as U,aY as m,ab as q,c0 as X,aN as Y,aB as Z,aD as c,c5 as J,c6 as K,c7 as Q,c8 as ee,aZ as te}from"./index-b7be9608.js";import{a as re,b as w,f as se}from"./format-number-570f4cb9.js";import{C as P}from"./chart-dd759849.js";import{I as ae}from"./image-ff410a5f.js";import{v as y}from"./fade-295cf198.js";import{b as oe,a as ie,C as ne}from"./carousel-arrow-index-bd9ca01e.js";import{u as le}from"./use-carousel-f3c1275a.js";import{b as ce,T as de,a as p}from"./table-pagination-custom-97218e51.js";import{T as pe,a as he,b as xe}from"./TableContainer-e89fc8c8.js";import"./transition-bee6630b.js";import"./Checkbox-3242b68d.js";import"./SwitchBase-5497b107.js";t.object,t.string,t.oneOfType([t.element,t.string]),t.object,t.string,t.number;function k({title:r,description:s,action:a,img:o,...n}){const i=j();return e.jsxs(h,{flexDirection:{xs:"column",md:"row"},sx:{...G({direction:"135deg",startColor:v(i.palette.primary.light,.2),endColor:v(i.palette.primary.main,.2)}),height:{md:1},borderRadius:2,position:"relative",color:"primary.darker",backgroundColor:"common.white"},...n,children:[e.jsxs(h,{flexGrow:1,justifyContent:"center",alignItems:{xs:"center",md:"flex-start"},sx:{p:{xs:i.spacing(5,3,0,3),md:i.spacing(5)},textAlign:{xs:"center",md:"left"}},children:[e.jsx(l,{paragraph:!0,variant:"h4",sx:{whiteSpace:"pre-line"},children:r}),e.jsx(l,{variant:"body2",sx:{opacity:.8,maxWidth:360,mb:{xs:3,xl:5}},children:s}),a&&a]}),o&&e.jsx(h,{component:"span",justifyContent:"center",sx:{p:{xs:5,md:3},maxWidth:360,mx:"auto"},children:o})]})}k.propTypes={action:t.node,description:t.string,img:t.node,title:t.string};function W({list:r,...s}){const a=le({speed:800,autoplay:!0,...oe({sx:{top:16,left:16,position:"absolute",color:"primary.light"}})});return e.jsxs(C,{...s,children:[e.jsx(ie,{ref:a.carouselRef,...a.carouselSettings,children:r.map((o,n)=>e.jsx(N,{item:o,active:n===a.currentIndex},o.id))}),e.jsx(ne,{onNext:a.onNext,onPrev:a.onPrev,sx:{top:8,right:8,position:"absolute",color:"common.white"}})]})}W.propTypes={list:t.array};function N({item:r,active:s}){const a=j(),{coverUrl:o,title:n,description:i}=r,x=e.jsx(ae,{alt:n,src:o,overlay:`linear-gradient(to bottom, ${v(a.palette.grey[900],0)} 0%, ${a.palette.grey[900]} 75%)`,sx:{width:1,height:{xs:280,xl:320}}});return e.jsxs(F,{action:!0,animate:s,sx:{position:"relative"},children:[e.jsxs(h,{spacing:1,sx:{p:3,width:1,bottom:0,zIndex:9,textAlign:"left",position:"absolute",color:"common.white"},children:[e.jsx(f.div,{variants:y().inRight,children:e.jsx(l,{variant:"overline",sx:{color:"primary.light"},children:"Featured App"})}),e.jsx(f.div,{variants:y().inRight,children:e.jsx($,{color:"inherit",underline:"none",children:e.jsx(l,{variant:"h5",noWrap:!0,children:n})})}),e.jsx(f.div,{variants:y().inRight,children:e.jsx(l,{variant:"body2",noWrap:!0,children:i})})]}),x]})}N.propTypes={active:t.bool,item:t.object};function R({title:r,subheader:s,tableData:a,tableLabels:o,...n}){return e.jsxs(C,{...n,children:[e.jsx(B,{title:r,subheader:s,sx:{mb:3}}),e.jsx(pe,{sx:{overflow:"unset"},children:e.jsx(_,{children:e.jsxs(he,{sx:{minWidth:680},children:[e.jsx(ce,{headLabel:o}),e.jsx(xe,{children:[].map(i=>e.jsx(E,{row:i},i.id))})]})})}),e.jsx(A,{sx:{borderStyle:"dashed"}}),e.jsx(D,{sx:{p:2,textAlign:"right"},children:e.jsx(S,{size:"small",color:"inherit",endIcon:e.jsx(d,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})})]})}R.propTypes={subheader:t.string,tableData:t.array,tableLabels:t.array,title:t.string};function E({row:r}){const s=z(),a=()=>{s.onClose(),console.info("DOWNLOAD",r.id)},o=()=>{s.onClose(),console.info("PRINT",r.id)},n=()=>{s.onClose(),console.info("SHARE",r.id)},i=()=>{s.onClose(),console.info("DELETE",r.id)};return e.jsxs(e.Fragment,{children:[e.jsxs(de,{children:[e.jsx(p,{children:r.invoiceNumber}),e.jsx(p,{children:r.category}),e.jsx(p,{children:re(r.price)}),e.jsx(p,{children:e.jsx(M,{variant:"soft",color:r.status==="progress"&&"warning"||r.status==="out of date"&&"error"||"success",children:r.status})}),e.jsx(p,{align:"right",sx:{pr:1},children:e.jsx(V,{color:s.open?"inherit":"default",onClick:s.onOpen,children:e.jsx(d,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(U,{open:s.open,onClose:s.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(m,{onClick:a,children:[e.jsx(d,{icon:"eva:cloud-download-fill"}),"Download"]}),e.jsxs(m,{onClick:o,children:[e.jsx(d,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(m,{onClick:n,children:[e.jsx(d,{icon:"solar:share-bold"}),"Share"]}),e.jsx(A,{sx:{borderStyle:"dashed"}}),e.jsxs(m,{onClick:i,sx:{color:"error.main"},children:[e.jsx(d,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}E.propTypes={row:t.object};t.array,t.string,t.string;t.object,t.number;t.array,t.string,t.string;t.object;t.object,t.string,t.string;function u({title:r,percent:s,total:a,chart:o,sx:n,...i}){const x=j(),{colors:b=[x.palette.primary.light,x.palette.primary.main],series:L,options:O}=o,H={colors:b.map(g=>g[1]),fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:b[0]},{offset:100,color:b[1]}]}},chart:{sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"68%",borderRadius:2}},tooltip:{x:{show:!1},y:{formatter:g=>w(g),title:{formatter:()=>""}},marker:{show:!1}},...O};return e.jsxs(C,{sx:{display:"flex",alignItems:"center",p:3,...n},...i,children:[e.jsxs(D,{sx:{flexGrow:1},children:[e.jsx(l,{variant:"subtitle2",children:r}),e.jsxs(h,{direction:"row",alignItems:"center",sx:{mt:2,mb:1},children:[e.jsx(d,{width:24,icon:s<0?"solar:double-alt-arrow-down-bold-duotone":"solar:double-alt-arrow-up-bold-duotone",sx:{mr:1,color:"success.main",...s<0&&{color:"error.main"}}}),e.jsxs(l,{component:"div",variant:"subtitle2",children:[s>0&&"+",se(s)]})]}),e.jsx(l,{variant:"h3",children:w(a)})]}),e.jsx(P,{type:"bar",series:[{data:L}],options:H,width:60,height:36})]})}u.propTypes={chart:t.object,percent:t.number,sx:t.object,title:t.string,total:t.number};const I=400,T=72;q(P)(({theme:r})=>({height:I,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:T,borderTop:`dashed 1px ${r.palette.divider}`,top:`calc(${I-T}px) !important`}}));t.object,t.string,t.string;t.array,t.string,t.string;t.object;function me(){const{user:r}=X(),s=j(),a=Y();return e.jsx(Z,{maxWidth:a.themeStretch?!1:"xl",children:e.jsxs(c,{container:!0,spacing:3,children:[e.jsx(c,{xs:12,md:8,children:e.jsx(k,{title:`Welcome back 👋 
 ${r==null?void 0:r.displayName}`,description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",img:e.jsx(J,{}),action:e.jsx(K,{to:"/dashboard/product/new",children:e.jsx(S,{variant:"contained",color:"primary",children:"Add Product"})})})}),e.jsx(c,{xs:12,md:4,children:e.jsx(W,{list:Q})}),e.jsx(c,{xs:12,md:4,children:e.jsx(u,{title:"Total Product",percent:0,total:0,chart:{series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(c,{xs:12,md:4,children:e.jsx(u,{title:"Total Sales",percent:0,total:0,chart:{colors:[s.palette.info.light,s.palette.info.main],series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(c,{xs:12,md:4,children:e.jsx(u,{title:"Pending Orders",percent:0,total:0,chart:{colors:[s.palette.warning.light,s.palette.warning.main],series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(c,{xs:12,lg:8,children:e.jsx(R,{title:"New Invoice",tableData:ee,tableLabels:[{id:"id",label:"Invoice ID"},{id:"category",label:"Category"},{id:"price",label:"Price"},{id:"status",label:"Status"},{id:""}]})})]})})}function De(){return e.jsxs(e.Fragment,{children:[e.jsx(te,{children:e.jsx("title",{children:" Dashboard: App"})}),e.jsx(me,{})]})}export{De as default};