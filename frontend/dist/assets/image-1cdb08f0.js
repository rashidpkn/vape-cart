import{a8 as a,ad as s,aj as e,ag as x,a9 as t,as as i,aG as n,ac as c,aD as p,aK as m}from"./index-80ed1a65.js";import{I as o}from"./image-54d982f3.js";import{C as j}from"./custom-breadcrumbs-d8f83c0f.js";const g=["4/3","3/4","6/4","4/6","16/9","9/16","21/9","9/21","1/1"],d=g.map((r,l)=>({ratio:r,url:p.image.cover(l+1)}));function h(){return a.jsxs(a.Fragment,{children:[a.jsx(s,{sx:{py:5,bgcolor:r=>r.palette.mode==="light"?"grey.200":"grey.800"},children:a.jsx(e,{children:a.jsx(j,{heading:"Image",links:[{name:"Components",href:x.components},{name:"Image"}]})})}),a.jsx(e,{sx:{my:10},children:a.jsxs(t,{spacing:5,children:[a.jsxs(i,{children:[a.jsx(n,{title:"List"}),a.jsx(s,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},sx:{p:3},children:d.map(r=>a.jsx(o,{alt:r.ratio,src:r.url,sx:{borderRadius:2}},r.ratio))})]}),a.jsxs(i,{children:[a.jsx(n,{title:"Aspect Ratio"}),a.jsx(s,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},sx:{p:3},children:d.map(r=>a.jsxs(t,{spacing:1,children:[a.jsx(c,{variant:"overline",sx:{color:"text.secondary"},children:r.ratio}),a.jsx(o,{alt:r.ratio,src:r.url,ratio:r.ratio,sx:{borderRadius:2}})]},r.ratio))})]})]})})]})}function I(){return a.jsxs(a.Fragment,{children:[a.jsx(m,{children:a.jsx("title",{children:" Extra: Image"})}),a.jsx(h,{})]})}export{I as default};
