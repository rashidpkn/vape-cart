import{bI as M,D as O,ao as e,a_ as j,bb as y,al as N,aR as W,aH as T,bJ as z,be as F,aJ as t,by as A,aA as S,ak as Y,aM as u,aE as P,ar as l,aO as k,b3 as V,aT as $,aV as h,bN as q,bO as K,bP as Q,bf as U}from"./index-feebbf1a.js";import{u as E}from"./use-chart-47483e9f.js";import{C as B}from"./chart-be5342d9.js";import{a as C,b as X,f}from"./format-number-eb8fa3ee.js";import{b as Z}from"./table-pagination-custom-80f9e74a.js";import{T as ee,a as te,b as re}from"./TableContainer-32aac236.js";import"./color-picker-fa339b93.js";import"./Checkbox-fc4debaa.js";function H({title:r,subheader:a,chart:o,...s}){const{colors:x,categories:i,series:c,options:m}=o,d=M(),[b,g]=O.useState("2019"),n=E({colors:x,legend:{position:"top",horizontalAlign:"right"},xaxis:{categories:i},...m}),w=O.useCallback(p=>{d.onClose(),g(p)},[d]);return e.jsxs(e.Fragment,{children:[e.jsxs(j,{...s,children:[e.jsx(y,{title:r,subheader:a,action:e.jsxs(N,{onClick:d.onOpen,sx:{pl:1,py:.5,pr:.5,borderRadius:1,typography:"subtitle2",bgcolor:"background.neutral"},children:[b,e.jsx(W,{width:16,icon:d.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:.5}})]})}),c.map(p=>e.jsx(T,{sx:{mt:3,mx:3},children:p.year===b&&e.jsx(B,{dir:"ltr",type:"area",series:p.data,options:n,height:364})},p.year))]}),e.jsx(z,{open:d.open,onClose:d.onClose,sx:{width:140},children:c.map(p=>e.jsx(F,{selected:p.year===b,onClick:()=>w(p.year),children:p.year},p.year))})]})}H.propTypes={chart:t.object,subheader:t.string,title:t.string};function L({title:r,subheader:a,tableData:o,tableLabels:s,...x}){return e.jsxs(j,{...x,children:[e.jsx(y,{title:r,subheader:a,sx:{mb:3}}),e.jsx(ee,{sx:{overflow:"unset"},children:e.jsx(A,{children:e.jsxs(te,{sx:{minWidth:640},children:[e.jsx(Z,{headLabel:s}),e.jsx(re,{})]})})})]})}L.propTypes={subheader:t.string,tableData:t.array,tableLabels:t.array,title:t.string};t.object;const D=400,I=72,ae=Y(B)(({theme:r})=>({height:D,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:I,borderTop:`dashed 1px ${r.palette.divider}`,top:`calc(${D-I}px) !important`}}));function G({title:r,subheader:a,total:o,chart:s,...x}){const i=S(),{colors:c=[[i.palette.primary.light,i.palette.primary.main],[i.palette.warning.light,i.palette.warning.main]],series:m,options:d}=s,b=m.map(n=>n.value),g=E({colors:c.map(n=>n[1]),chart:{sparkline:{enabled:!0}},labels:m.map(n=>n.label),legend:{floating:!0,position:"bottom",horizontalAlign:"center"},fill:{type:"gradient",gradient:{colorStops:c.map(n=>[{offset:0,color:n[0]},{offset:100,color:n[1]}])}},plotOptions:{radialBar:{hollow:{size:"68%"},dataLabels:{value:{offsetY:16},total:{formatter:()=>C(o)}}}},...d});return e.jsxs(j,{...x,children:[e.jsx(y,{title:r,subheader:a,sx:{mb:5}}),e.jsx(ae,{dir:"ltr",type:"radialBar",series:b,options:g,height:300})]})}G.propTypes={chart:t.object,subheader:t.string,title:t.string,total:t.number};function R({title:r,subheader:a,data:o,...s}){return e.jsxs(j,{...s,children:[e.jsx(y,{title:r,subheader:a}),e.jsx(u,{spacing:4,sx:{px:3,pt:3,pb:5}})]})}R.propTypes={data:t.array,subheader:t.string,title:t.string};t.object;function v({title:r,percent:a,total:o,chart:s,sx:x,...i}){const c=S(),{colors:m=[c.palette.primary.light,c.palette.primary.main],series:d,options:b}=s,g=E({colors:[m[1]],fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:m[0]},{offset:100,color:m[1]}]}},chart:{animations:{enabled:!0},sparkline:{enabled:!0}},tooltip:{x:{show:!1},y:{formatter:w=>C(w),title:{formatter:()=>""}},marker:{show:!1}},...b}),n=e.jsxs(u,{direction:"row",alignItems:"center",sx:{mt:2,mb:1},children:[e.jsx(W,{icon:a<0?"eva:trending-down-fill":"eva:trending-up-fill",sx:{mr:1,p:.5,width:24,height:24,borderRadius:"50%",color:"success.main",bgcolor:P(c.palette.success.main,.16),...a<0&&{color:"error.main",bgcolor:P(c.palette.error.main,.16)}}}),e.jsxs(l,{variant:"subtitle2",component:"div",noWrap:!0,children:[a>0&&"+",X(a),e.jsx(T,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:" than last week"})]})]});return e.jsxs(j,{sx:{display:"flex",alignItems:"center",p:3,...x},...i,children:[e.jsxs(T,{sx:{flexGrow:1},children:[e.jsx(l,{variant:"subtitle2",paragraph:!0,children:r}),e.jsx(l,{variant:"h3",gutterBottom:!0,children:C(o)}),n]}),e.jsx(B,{type:"line",series:[{data:d}],options:g,width:96,height:64})]})}v.propTypes={chart:t.object,percent:t.number,sx:t.object,title:t.string,total:t.number};function _({title:r,subheader:a,list:o,...s}){return e.jsxs(j,{...s,children:[e.jsx(y,{title:r,subheader:a}),e.jsx(A,{children:e.jsx(u,{spacing:3,sx:{p:3,minWidth:360}})})]})}_.propTypes={list:t.array,subheader:t.string,title:t.string};t.object;function J({title:r,sentAmount:a,currentBalance:o,sx:s,...x}){const i=o-a;return e.jsxs(j,{sx:{p:3,...s},...x,children:[e.jsx(l,{variant:"subtitle2",gutterBottom:!0,children:r}),e.jsxs(u,{spacing:2,children:[e.jsx(l,{variant:"h3",children:f(i)}),e.jsxs(u,{direction:"row",justifyContent:"space-between",children:[e.jsx(l,{variant:"body2",sx:{color:"text.secondary"},children:"Order Total"}),e.jsx(l,{variant:"body2",children:f(o)})]}),e.jsxs(u,{direction:"row",justifyContent:"space-between",children:[e.jsx(l,{variant:"body2",sx:{color:"text.secondary"},children:"Earning"}),e.jsxs(l,{variant:"body2",children:["- ",f(a)]})]}),e.jsxs(u,{direction:"row",justifyContent:"space-between",children:[e.jsx(l,{variant:"body2",sx:{color:"text.secondary"},children:"Refunded"}),e.jsx(l,{variant:"subtitle1",children:f(i)})]}),e.jsxs(u,{direction:"row",spacing:1.5,children:[e.jsx(k,{fullWidth:!0,variant:"contained",color:"warning",children:"Request"}),e.jsx(k,{fullWidth:!0,variant:"contained",color:"primary",children:"Transfer"})]})]})]})}J.propTypes={currentBalance:t.number,sentAmount:t.number,sx:t.object,title:t.string};function se(){const r=S(),a=V();return e.jsx($,{maxWidth:a.themeStretch?!1:"xl",children:e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{xs:12,md:4,children:e.jsx(v,{title:"Product Sold",percent:0,total:0,chart:{series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(h,{xs:12,md:4,children:e.jsx(v,{title:"Total Balance",percent:0,total:0,chart:{colors:[r.palette.info.light,r.palette.info.main],series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(h,{xs:12,md:4,children:e.jsx(v,{title:"Sales Profit",percent:0,total:0,chart:{colors:[r.palette.warning.light,r.palette.warning.main],series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(h,{xs:12,md:6,lg:4,children:e.jsx(G,{title:"Sale By Gender",total:0,chart:{series:[{label:"Mens",value:0},{label:"Womens",value:0}]}})}),e.jsx(h,{xs:12,md:6,lg:8,children:e.jsx(H,{title:"Yearly Sales",subheader:"(+0%) than last year",chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[{year:"2019",data:[{name:"Total Income",data:[0,0,0,0,0,0,0,0,0,0,0,0]},{name:"Total Expenses",data:[0,0,0,0,0,0,0,0,0,0,0,0]}]},{year:"2020",data:[{name:"Total Income",data:[0,0,0,0,0,0,0,0,0,0,0,0]},{name:"Total Expenses",data:[0,0,0,0,0,0,0,0,0,0,0,0]}]}]}})}),e.jsx(h,{xs:12,md:6,lg:8,children:e.jsx(R,{title:"Sales Overview",data:q})}),e.jsx(h,{xs:12,md:6,lg:4,children:e.jsx(J,{title:"Current Balance",currentBalance:0,sentAmount:0})}),e.jsx(h,{xs:12,md:6,lg:8,children:e.jsx(L,{title:"Top Selling Products",tableData:K,tableLabels:[{id:"Product",label:"Product"},{id:"category",label:"Category",align:"center"},{id:"price",label:"Price",align:"right"}]})}),e.jsx(h,{xs:12,md:6,lg:4,children:e.jsx(_,{title:"Latest Products",list:Q})})]})})}function xe(){return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx("title",{children:" Dashboard: E-Commerce"})}),e.jsx(se,{})]})}export{xe as default};