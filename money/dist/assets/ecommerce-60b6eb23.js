import{aq as t,af as e,aJ as E,b1 as I,bC as W,aW as q,ab as A,as as P,b_ as y,au as G,aA as N,am as T,ac as f,b$ as R,ao as C,D as u,aO as k,aC as L,aE as n,c2 as _,c3 as $,c4 as D,b5 as U}from"./index-bb505ec4.js";import{C as O,u as F}from"./chart-a1dff67d.js";import{b as J,T as V,a as g}from"./table-pagination-custom-4c8c08f8.js";import{T as z,a as K,b as M}from"./TableContainer-c51d524a.js";import"./color-picker-8bcc7cd4.js";import{a as v}from"./api-3aac980b.js";import"./axios-e0d8a382.js";t.object,t.string,t.string;function B({title:s,subheader:a,tableData:i,tableLabels:h,...m}){return e.jsxs(E,{...m,children:[e.jsx(I,{title:s,subheader:a,sx:{mb:3}}),e.jsx(z,{sx:{overflow:"unset"},children:e.jsx(W,{children:e.jsxs(K,{sx:{minWidth:640},children:[e.jsx(J,{headLabel:h}),e.jsx(M,{children:i==null?void 0:i.map(o=>e.jsx(H,{row:o},o.id))})]})})})]})}B.propTypes={subheader:t.string,tableData:t.array,tableLabels:t.array,title:t.string};function H({row:s}){return e.jsxs(V,{children:[e.jsxs(g,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(q,{alt:s.name,src:`https://delhi-vape.com${s.images[0]}`,sx:{mr:2}}),s.name]}),e.jsx(g,{children:s.salePrice}),e.jsx(g,{children:s.storeName}),e.jsx(g,{children:s.quantity})]})}H.propTypes={row:t.object};const w=400,S=72;A(O)(({theme:s})=>({height:w,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:S,borderTop:`dashed 1px ${s.palette.divider}`,top:`calc(${w-S}px) !important`}}));t.object,t.string,t.string,t.number;t.array,t.string,t.string;t.object;function l({title:s,percent:a,total:i,chart:h,sx:m,...o}){const c=P(),{colors:p=[c.palette.primary.light,c.palette.primary.main],series:b,options:x}=h,r=F({colors:[p[1]],fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:p[0]},{offset:100,color:p[1]}]}},chart:{animations:{enabled:!0},sparkline:{enabled:!0}},tooltip:{x:{show:!1},y:{formatter:j=>y(j),title:{formatter:()=>""}},marker:{show:!1}},...x}),d=e.jsxs(G,{direction:"row",alignItems:"center",sx:{mt:2,mb:1},children:[e.jsx(N,{icon:a<0?"eva:trending-down-fill":"eva:trending-up-fill",sx:{mr:1,p:.5,width:24,height:24,borderRadius:"50%",color:"success.main",bgcolor:T(c.palette.success.main,.16),...a<0&&{color:"error.main",bgcolor:T(c.palette.error.main,.16)}}}),e.jsxs(f,{variant:"subtitle2",component:"div",noWrap:!0,children:[a>0&&"+",R(a),e.jsx(C,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:" than last week"})]})]});return e.jsxs(E,{sx:{display:"flex",alignItems:"center",p:3,...m},...o,children:[e.jsxs(C,{sx:{flexGrow:1},children:[e.jsx(f,{variant:"subtitle2",paragraph:!0,children:s}),e.jsx(f,{variant:"h3",gutterBottom:!0,children:y(i)}),d]}),e.jsx(O,{type:"line",series:[{data:b}],options:r,width:96,height:64})]})}l.propTypes={chart:t.object,percent:t.number,sx:t.object,title:t.string,total:t.number};t.array,t.string,t.string;t.object;t.number,t.number,t.object,t.string;function Q(){var x;const s=P(),[a,i]=u.useState([]),[h,m]=u.useState([]),[o,c]=u.useState([]),p=async()=>{const r=await _($(D,"users")),d=[];r.forEach(j=>{d.push(j.data())}),m(d.reverse())};u.useEffect(()=>{p(),v.get("orders").then(r=>{i(r.data)}),v.get("products").then(r=>{c(r.data)})},[]);const b=k();return e.jsx(L,{maxWidth:b.themeStretch?!1:"xl",children:e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{xs:12,md:4,children:e.jsx(l,{title:"Active Store",percent:0,total:h.length,chart:{series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(n,{xs:12,md:4,children:e.jsx(l,{title:"Total Order Completed",percent:0,total:a.filter(r=>r.status==="completed").length,chart:{colors:[s.palette.info.light,s.palette.info.main],series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(n,{xs:12,md:4,children:e.jsx(l,{title:"Customers",percent:0,total:0,chart:{colors:[s.palette.warning.light,s.palette.warning.main],series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(n,{xs:12,md:4,children:e.jsx(l,{title:"Daily Signup",percent:0,total:0,chart:{colors:[s.palette.warning.light,s.palette.warning.main],series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(n,{xs:12,md:4,children:e.jsx(l,{title:"Total Product",percent:0,total:o.count,chart:{colors:[s.palette.warning.light,s.palette.warning.main],series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(n,{xs:12,md:4,children:e.jsx(l,{title:"Order Cancelled",percent:0,total:a.filter(r=>r.status==="cancelled").length,chart:{colors:[s.palette.warning.light,s.palette.warning.main],series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(n,{xs:12,md:12,lg:12,children:e.jsx(B,{title:"Top Selling Products",tableData:(x=o.products)==null?void 0:x.sort((r,d)=>-r.quantity+d.quantity),tableLabels:[{id:"Product",label:"Product"},{id:"price",label:"Price"},{id:"Store Name",label:"Store Name"},{id:"Count",label:"Count"}]})})]})})}function ae(){return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx("title",{children:" Dashboard: E-Commerce"})}),e.jsx(Q,{})]})}export{ae as default};
