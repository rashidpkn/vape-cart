import{D as n,bN as C,a8 as e,ad as u,aj as p,ag as h,a9 as d,ac as c,aM as g,bz as j,aF as b,ah as f,aH as y}from"./index-bf334511.js";import{u as k}from"./use-copy-to-clipboard-cf9c2bc3.js";import{C as T}from"./custom-breadcrumbs-3a310c1d.js";import{C as v}from"./Card-6dc62dad.js";import{T as q}from"./TextField-e6e01232.js";import"./FormControl-96833b24.js";import"./FormLabel-8a3d5af0.js";import"./Select-1c3a8fd5.js";import"./Menu-3b093474.js";function P({click:o,doubleClick:i,timeout:t=250}){const s=n.useRef(),l=()=>{s&&(clearTimeout(s.current),s.current=null)};return n.useCallback(a=>{l(),o&&a.detail===1&&(s.current=setTimeout(()=>{o(a)},t)),a.detail%2===0&&i(a)},[o,i,t])}function S(){const{enqueueSnackbar:o}=C(),{copy:i}=k(),[t,s]=n.useState("https://www.npmjs.com/package/"),l=`Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat
  dolor lectus quis orci. Cras non dolor. Praesent egestas neque eu enim. Ut varius
  tincidunt libero. Fusce fermentum odio nec arcu. Etiam rhoncus. Nulla sit amet est.
  Donec posuere vulputate arcu. Vestibulum ullamcorper mauris at ligula. Praesent ut
  ligula non mi varius sagittis. Pellentesque posuere. Praesent adipiscing. Sed
  libero. Duis leo. Nulla porta dolor.`,a=n.useCallback(r=>{r&&(o("Copied!"),i(r))},[i,o]),m=P({doubleClick:()=>a(l)}),x=n.useCallback(r=>{s(r.target.value)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(u,{sx:{py:5,bgcolor:r=>r.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(p,{children:e.jsx(T,{heading:"Copy To Clipboard",links:[{name:"Components",href:h.components},{name:"Copy To Clipboard"}]})})}),e.jsx(p,{sx:{my:10},children:e.jsx(v,{sx:{p:5},children:e.jsxs(u,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},gap:5,children:[e.jsxs(d,{spacing:2,children:[e.jsx(c,{variant:"overline",sx:{color:"text.secondary"},children:"on Change"}),e.jsx(q,{fullWidth:!0,value:t,onChange:x,InputProps:{endAdornment:e.jsx(g,{position:"end",children:e.jsx(j,{title:"Copy",children:e.jsx(b,{onClick:()=>a(t),children:e.jsx(f,{icon:"eva:copy-fill",width:24})})})})}})]}),e.jsxs(d,{spacing:2,children:[e.jsx(c,{variant:"overline",sx:{color:"text.secondary"},children:"on Double Click"}),e.jsx(c,{onClick:m,children:l})]})]})})})]})}function R(){return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx("title",{children:" Extra: to Clipboard"})}),e.jsx(S,{})]})}export{R as default};
