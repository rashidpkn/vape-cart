import{a8 as e,bb as P,ad as b,ae as V,ah as B,aw as t,a9 as O,aB as D,aZ as z,bv as L,a6 as T,am as H,ac as u,bw as U,an as F,ao as v,ax as K,aj as J,al as d,bx as M,by as Z,aH as q}from"./index-086ce406.js";import{C as m}from"./Card-0cb6ed66.js";import{C as g}from"./CardHeader-d9c43941.js";import{b as I,c as Q}from"./format-number-17cc7955.js";import{u as y,C as f}from"./chart-fa530a66.js";import{T as X,t as Y,a as ee,b as te,c as se,d as re,e as ae}from"./TimelineItem-299a652a.js";function k({title:s,subheader:n,list:r,...a}){return e.jsxs(m,{...a,children:[e.jsx(g,{title:s,subheader:n,sx:{mb:1}}),e.jsx(P,{children:r.map(i=>e.jsx(_,{news:i},i.id))}),e.jsx(b,{sx:{p:2,textAlign:"right"},children:e.jsx(V,{size:"small",color:"inherit",endIcon:e.jsx(B,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})})]})}k.propTypes={list:t.array,subheader:t.string,title:t.string};function _({news:s}){const{coverUrl:n,title:r,description:a,postedAt:i}=s;return e.jsxs(O,{spacing:2,direction:"row",alignItems:"center",sx:{py:2,px:3,minWidth:640,borderBottom:o=>`dashed 1px ${o.palette.divider}`},children:[e.jsx(D,{variant:"rounded",alt:r,src:n,sx:{width:48,height:48,flexShrink:0}}),e.jsx(z,{primary:r,secondary:a,primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,noWrap:!0,component:"span"}}),e.jsx(b,{sx:{flexShrink:0,color:"text.disabled",typography:"caption"},children:L(i)})]})}_.propTypes={news:t.object};const C=400,w=72,ie=H(f)(({theme:s})=>({height:C,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:w,borderTop:`dashed 1px ${s.palette.divider}`,top:`calc(${C-w}px) !important`}}));function $({title:s,subheader:n,chart:r,...a}){const i=T(),{colors:o,series:c,options:p}=r,h=c.map(x=>x.value),l=y({chart:{sparkline:{enabled:!0}},colors:o,labels:c.map(x=>x.label),stroke:{colors:[i.palette.background.paper]},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:x=>I(x),title:{formatter:x=>`${x}`}}},plotOptions:{pie:{donut:{labels:{show:!1}}}},...p});return e.jsxs(m,{...a,children:[e.jsx(g,{title:s,subheader:n,sx:{mb:5}}),e.jsx(ie,{dir:"ltr",type:"pie",series:h,options:l,height:280})]})}$.propTypes={chart:t.object,subheader:t.string,title:t.string};function E({title:s,subheader:n,list:r,...a}){return e.jsxs(m,{...a,children:[e.jsx(g,{title:s,subheader:n}),e.jsx(X,{sx:{m:0,p:3,[`& .${Y.root}:before`]:{flex:0,padding:0}},children:r.map((i,o)=>e.jsx(W,{item:i,lastTimeline:o===r.length-1},i.id))})]})}E.propTypes={list:t.array,subheader:t.string,title:t.string};function W({item:s,lastTimeline:n}){const{type:r,title:a,time:i}=s;return e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsx(se,{color:r==="order1"&&"primary"||r==="order2"&&"success"||r==="order3"&&"info"||r==="order4"&&"warning"||"error"}),n?null:e.jsx(re,{})]}),e.jsxs(ae,{children:[e.jsx(u,{variant:"subtitle2",children:a}),e.jsx(u,{variant:"caption",sx:{color:"text.disabled"},children:U(i)})]})]})}W.propTypes={item:t.object,lastTimeline:t.bool};function G({title:s,subheader:n,chart:r,...a}){const{labels:i,colors:o,series:c,options:p}=r,h=y({colors:o,plotOptions:{bar:{columnWidth:"16%"}},fill:{type:c.map(l=>l.fill)},labels:i,xaxis:{type:"datetime"},tooltip:{shared:!0,intersect:!1,y:{formatter:l=>typeof l<"u"?`${l.toFixed(0)} visits`:l}},...p});return e.jsxs(m,{...a,children:[e.jsx(g,{title:s,subheader:n}),e.jsx(b,{sx:{p:3,pb:1},children:e.jsx(f,{dir:"ltr",type:"line",series:c,options:h,height:364})})]})}G.propTypes={chart:t.object,subheader:t.string,title:t.string};function j({title:s,total:n,icon:r,color:a="primary",sx:i,...o}){const c=T();return e.jsxs(O,{alignItems:"center",sx:{...F({direction:"135deg",startColor:v(c.palette[a].light,.2),endColor:v(c.palette[a].main,.2)}),py:5,borderRadius:2,textAlign:"center",color:`${a}.darker`,backgroundColor:"common.white",...i},...o,children:[r&&e.jsx(b,{sx:{width:64,height:64,mb:1},children:r}),e.jsx(u,{variant:"h3",children:Q(n)}),e.jsx(u,{variant:"subtitle2",sx:{opacity:.64},children:s})]})}j.propTypes={color:t.string,icon:t.oneOfType([t.element,t.string]),sx:t.object,title:t.string,total:t.number};const A=400,S=72,ne=H(f)(({theme:s})=>({height:A,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:S,borderTop:`dashed 1px ${s.palette.divider}`,top:`calc(${A-S}px) !important`}}));function N({title:s,subheader:n,chart:r,...a}){const i=T(),{series:o,colors:c,categories:p,options:h}=r,l=y({colors:c,stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},xaxis:{categories:p,labels:{style:{colors:[...Array(6)].map(()=>i.palette.text.secondary)}}},...h});return e.jsxs(m,{...a,children:[e.jsx(g,{title:s,subheader:n,sx:{mb:5}}),e.jsx(ne,{dir:"ltr",type:"radar",series:o,options:l,height:340})]})}N.propTypes={chart:t.object,subheader:t.string,title:t.string};function R({title:s,subheader:n,chart:r,...a}){const{colors:i,series:o,options:c}=r,p=o.map(l=>l.value),h=y({colors:i,tooltip:{marker:{show:!1},y:{formatter:l=>I(l),title:{formatter:()=>""}}},plotOptions:{bar:{horizontal:!0,barHeight:"28%",borderRadius:2}},xaxis:{categories:o.map(l=>l.label)},...c});return e.jsxs(m,{...a,children:[e.jsx(g,{title:s,subheader:n}),e.jsx(b,{sx:{mx:3},children:e.jsx(f,{type:"bar",dir:"ltr",series:[{data:p}],options:h,height:364})})]})}R.propTypes={chart:t.object,subheader:t.string,title:t.string};function le(){const s=K();return e.jsxs(J,{maxWidth:s.themeStretch?!1:"xl",children:[e.jsx(u,{variant:"h4",sx:{mb:{xs:3,md:5}},children:"Hi, Welcome back 👋"}),e.jsxs(d,{container:!0,spacing:3,children:[e.jsx(d,{xs:12,sm:6,md:4,children:e.jsx(j,{title:"Weekly Sales",total:714e3,icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_bag.png"})})}),e.jsx(d,{xs:12,sm:6,md:4,children:e.jsx(j,{title:"New Users",total:1352831,color:"info",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_users.png"})})}),e.jsx(d,{xs:12,sm:6,md:4,children:e.jsx(j,{title:"Item Orders",total:1723315,color:"warning",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_buy.png"})})}),e.jsx(d,{xs:12,md:6,lg:8,children:e.jsx(G,{title:"Website Visits",subheader:"(+43%) than last year",chart:{labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],series:[{name:"Team A",type:"column",fill:"solid",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",fill:"gradient",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",fill:"solid",data:[30,25,36,30,45,35,64,52,59,36,39]}]}})}),e.jsx(d,{xs:12,md:6,lg:4,children:e.jsx($,{title:"Current Visits",chart:{series:[{label:"America",value:4344},{label:"Asia",value:5435},{label:"Europe",value:1443},{label:"Africa",value:4443}]}})}),e.jsx(d,{xs:12,md:6,lg:8,children:e.jsx(R,{title:"Conversion Rates",subheader:"(+43%) than last year",chart:{series:[{label:"Italy",value:400},{label:"Japan",value:430},{label:"China",value:448},{label:"Canada",value:470},{label:"France",value:540},{label:"Germany",value:580},{label:"South Korea",value:690},{label:"Netherlands",value:1100},{label:"United States",value:1200},{label:"United Kingdom",value:1380}]}})}),e.jsx(d,{xs:12,md:6,lg:4,children:e.jsx(N,{title:"Current Subject",chart:{categories:["English","History","Physics","Geography","Chinese","Math"],series:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}]}})}),e.jsx(d,{xs:12,md:6,lg:8,children:e.jsx(k,{title:"News",list:M})}),e.jsx(d,{xs:12,md:6,lg:4,children:e.jsx(E,{title:"Order Timeline",list:Z})})]})]})}function me(){return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx("title",{children:" Dashboard: Analytics"})}),e.jsx(le,{})]})}export{me as default};