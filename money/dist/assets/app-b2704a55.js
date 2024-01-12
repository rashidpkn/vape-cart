import{aq as r,as as w,b_ as A,af as e,aJ as b,ao as v,ac as j,au as m,aA as C,b$ as M,c0 as R,D as y,b1 as S,aj as W,c1 as Y,b4 as E,bC as P,aO as B,aC as J,aE as h,c2 as N,c3 as q,c4 as G,b5 as U}from"./index-bb3ecc03.js";import"./carousel-arrow-index-bebe30e3.js";import"./table-pagination-custom-9e066bb8.js";import{C as D,u as _}from"./chart-f3d40f88.js";import{a as $}from"./api-3aac980b.js";import"./axios-e0d8a382.js";r.node,r.string,r.node,r.string;r.array;r.bool,r.object;r.string,r.array,r.array,r.string;r.object;function f({title:n,percent:i,total:d,chart:p,sx:c,...l}){const u=w(),{colors:t=[u.palette.primary.light,u.palette.primary.main],series:a,options:s}=p,x={colors:t.map(g=>g[1]),fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:t[0]},{offset:100,color:t[1]}]}},chart:{sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"68%",borderRadius:2}},tooltip:{x:{show:!1},y:{formatter:g=>A(g),title:{formatter:()=>""}},marker:{show:!1}},...s};return e.jsxs(b,{sx:{display:"flex",alignItems:"center",p:3,...c},...l,children:[e.jsxs(v,{sx:{flexGrow:1},children:[e.jsx(j,{variant:"subtitle2",children:n}),e.jsxs(m,{direction:"row",alignItems:"center",sx:{mt:2,mb:1},children:[e.jsx(C,{width:24,icon:i<0?"solar:double-alt-arrow-down-bold-duotone":"solar:double-alt-arrow-up-bold-duotone",sx:{mr:1,color:"success.main",...i<0&&{color:"error.main"}}}),e.jsxs(j,{component:"div",variant:"subtitle2",children:[i>0&&"+",M(i)]})]}),e.jsx(j,{variant:"h3",children:A(d)})]}),e.jsx(D,{type:"bar",series:[{data:a}],options:x,width:60,height:36})]})}f.propTypes={chart:r.object,percent:r.number,sx:r.object,title:r.string,total:r.number};function T({title:n,subheader:i,chart:d,...p}){const c=w(),{colors:l=[[c.palette.primary.light,c.palette.primary.main],[c.palette.warning.light,c.palette.warning.main]],categories:u,series:t,options:a}=d,s=R(),[x,g]=y.useState("2024"),F=_({colors:l.map(o=>o[1]),fill:{type:"gradient",gradient:{colorStops:l.map(o=>[{offset:0,color:o[0]},{offset:100,color:o[1]}])}},xaxis:{categories:u},...a}),k=y.useCallback(o=>{s.onClose(),g(o)},[s]);return e.jsxs(e.Fragment,{children:[e.jsxs(b,{...p,children:[e.jsx(S,{title:n,subheader:i,action:e.jsxs(W,{onClick:s.onOpen,sx:{pl:1,py:.5,pr:.5,borderRadius:1,typography:"subtitle2",bgcolor:"background.neutral"},children:[x,e.jsx(C,{width:16,icon:s.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:.5}})]})}),t.map(o=>e.jsx(v,{sx:{mt:3,mx:3},children:o.year===x&&e.jsx(D,{dir:"ltr",type:"line",series:o.data,options:F,height:364})},o.year))]}),e.jsx(Y,{open:s.open,onClose:s.onClose,sx:{width:140},children:t.map(o=>e.jsx(E,{selected:o.year===x,onClick:()=>k(o.year),children:o.year},o.year))})]})}T.propTypes={chart:r.object,subheader:r.string,title:r.string};r.array,r.string,r.string;r.object;function I({title:n,subheader:i,list:d,...p}){return e.jsxs(b,{...p,children:[e.jsx(S,{title:n,subheader:i}),e.jsx(P,{children:e.jsx(m,{spacing:3,sx:{p:3},children:d.map((c,l)=>e.jsx(O,{country:c,index:l},l))})})]})}I.propTypes={list:r.array,subheader:r.string,title:r.string};function O({country:n,index:i}){return e.jsxs(m,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(m,{direction:"row",alignItems:"center",children:i+1}),e.jsx(m,{direction:"row",alignItems:"center",children:e.jsx(j,{variant:"subtitle2",noWrap:!0,children:n.displayName})}),e.jsx(m,{direction:"row",alignItems:"center",children:e.jsx(j,{variant:"subtitle2",noWrap:!0,children:n.storeName})})]})}O.propTypes={country:r.object};function H(){const[n,i]=y.useState([]),[d,p]=y.useState([]),c=async()=>{const t=await N(q(G,"users")),a=[];t.forEach(s=>{a.push(s.data())}),p(a.reverse())};y.useEffect(()=>{c(),$.get("/orders").then(t=>{i(t.data)})},[]);const l=w(),u=B();return e.jsx(J,{maxWidth:u.themeStretch?!1:"xl",children:e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{xs:12,md:4,children:e.jsx(f,{title:"Total Active Store",percent:0,total:d.length,chart:{series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(h,{xs:12,md:4,children:e.jsx(f,{title:"Total Revenue",percent:0,total:n.reduce((t,a)=>t+a.totalAmount,0),chart:{colors:[l.palette.info.light,l.palette.info.main],series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(h,{xs:12,md:4,children:e.jsx(f,{title:"Total Completed Orders",percent:0,total:n.filter(t=>t.status==="completed").length,chart:{colors:[l.palette.warning.light,l.palette.warning.main],series:[0,0,0,0,0,0,0,0,0,0]}})}),e.jsx(h,{xs:12,md:6,lg:8,children:e.jsx(T,{title:"Sales and Revenue",subheader:`
            ${(n.reduce((t,a)=>new Date(a.createdAt).getFullYear()===2024?t+a.totalAmount:t,0)/n.reduce((t,a)=>new Date(a.createdAt).getFullYear()===2023?t+a.totalAmount:t,0)*100).toString().substring(0,5)}
            % than last year`,chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[{year:"2023",data:[{name:"Revenue",data:[0,1,2,3,4,5,6,7,8,9,10,11].map(t=>n.reduce((a,s)=>new Date(s.createdAt).getFullYear()===2023&&new Date(s.createdAt).getMonth()===t?a+s.totalAmount:a,0)*5/100)},{name:"Sales",data:[0,1,2,3,4,5,6,7,8,9,10,11].map(t=>n.reduce((a,s)=>new Date(s.createdAt).getFullYear()===2023&&new Date(s.createdAt).getMonth()===t?a+s.totalAmount:a,0))}]},{year:"2024",data:[{name:"Revenue",data:[0,1,2,3,4,5,6,7,8,9,10,11].map(t=>n.reduce((a,s)=>new Date(s.createdAt).getFullYear()===2024&&new Date(s.createdAt).getMonth()===t?a+s.totalAmount:a,0)*5/100)},{name:"Sales",data:[0,1,2,3,4,5,6,7,8,9,10,11].map(t=>n.reduce((a,s)=>new Date(s.createdAt).getFullYear()===2024&&new Date(s.createdAt).getMonth()===t?a+s.totalAmount:a,0))}]}]}})}),e.jsx(h,{xs:12,md:6,lg:4,children:e.jsx(I,{title:"Top  Sellers",list:d})})]})})}function Z(){return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx("title",{children:" Dashboard: App"})}),e.jsx(H,{})]})}export{Z as default};