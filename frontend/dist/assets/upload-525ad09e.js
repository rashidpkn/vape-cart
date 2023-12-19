import{aS as R,D as l,a8 as e,ad as y,aj as x,ag as D,a9 as p,as as t,aG as i,ac as j,ah as S,aK as k}from"./index-80ed1a65.js";import{d as A}from"./format-number-ba689ea4.js";import{C as L}from"./custom-breadcrumbs-d8f83c0f.js";import{a as m,U as O,b as h}from"./upload-avatar-3759b190.js";import{F as B}from"./FormControlLabel-5e3136f2.js";import{S as T}from"./Switch-803759d5.js";import{C as r}from"./CardContent-f2ce67ab.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-9d2cd837.js";import"./image-54d982f3.js";import"./SwitchBase-e1bf7dff.js";function E(){const n=R(),[o,c]=l.useState([]),[u,d]=l.useState(null),[g,f]=l.useState(null),U=l.useCallback(s=>{const a=s[0];a&&d(Object.assign(a,{preview:URL.createObjectURL(a)}))},[]),b=l.useCallback(s=>{const a=s[0];a&&f(Object.assign(a,{preview:URL.createObjectURL(a)}))},[]),v=l.useCallback(s=>{c([...o,...s.map(a=>Object.assign(a,{preview:URL.createObjectURL(a)}))])},[o]),C=s=>{const a=o.filter(w=>w!==s);c(a)},F=()=>{c([])};return e.jsxs(e.Fragment,{children:[e.jsx(y,{sx:{py:5,bgcolor:s=>s.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(x,{children:e.jsx(L,{heading:"Upload",links:[{name:"Components",href:D.components},{name:"Upload"}],moreLink:["https://react-dropzone.js.org/#section-basic-example"]})})}),e.jsx(x,{sx:{my:10},children:e.jsxs(p,{spacing:5,children:[e.jsxs(t,{children:[e.jsx(i,{title:"Upload Multi File",action:e.jsx(B,{control:e.jsx(T,{checked:n.value,onClick:n.onToggle}),label:"Show Thumbnail"})}),e.jsx(r,{children:e.jsx(m,{multiple:!0,thumbnail:n.value,files:o,onDrop:v,onRemove:C,onRemoveAll:F,onUpload:()=>console.info("ON UPLOAD")})})]}),e.jsxs(t,{children:[e.jsx(i,{title:"Upload Single File"}),e.jsx(r,{children:e.jsx(m,{file:u,onDrop:U,onDelete:()=>d(null)})})]}),e.jsxs(t,{children:[e.jsx(i,{title:"Upload Avatar"}),e.jsx(r,{children:e.jsx(O,{file:g,onDrop:b,helperText:e.jsxs(j,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",A(3145728)]})})})]}),e.jsxs(t,{children:[e.jsx(i,{title:"Upload Box"}),e.jsx(r,{children:e.jsxs(p,{direction:"row",spacing:2,children:[e.jsx(h,{}),e.jsx(h,{placeholder:e.jsxs(p,{spacing:.5,alignItems:"center",children:[e.jsx(S,{icon:"eva:cloud-upload-fill",width:40}),e.jsx(j,{variant:"body2",children:"Upload file"})]}),sx:{flexGrow:1,height:"auto",py:2.5,mb:3}})]})})]})]})})]})}function Q(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx("title",{children:" Extra: Upload"})}),e.jsx(E,{})]})}export{Q as default};
