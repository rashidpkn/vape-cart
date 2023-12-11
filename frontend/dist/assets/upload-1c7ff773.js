import{aP as R,D as o,a8 as e,ad as y,aj as x,ag as D,a9 as p,ac as m,ah as k,aH as A}from"./index-bf334511.js";import{d as L}from"./format-number-540433dd.js";import{C as S}from"./custom-breadcrumbs-3a310c1d.js";import{a as j,U as O,b as h}from"./upload-avatar-27b1cec6.js";import{C as t}from"./Card-6dc62dad.js";import{C as r}from"./CardHeader-d007181f.js";import{F as B}from"./FormControlLabel-85e6080d.js";import{S as T}from"./Switch-62976b6d.js";import{C as i}from"./CardContent-264a3310.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-15b2ea4b.js";import"./image-2ad327f3.js";import"./SwitchBase-f8898c21.js";function E(){const n=R(),[l,c]=o.useState([]),[u,d]=o.useState(null),[f,g]=o.useState(null),U=o.useCallback(s=>{const a=s[0];a&&d(Object.assign(a,{preview:URL.createObjectURL(a)}))},[]),b=o.useCallback(s=>{const a=s[0];a&&g(Object.assign(a,{preview:URL.createObjectURL(a)}))},[]),v=o.useCallback(s=>{c([...l,...s.map(a=>Object.assign(a,{preview:URL.createObjectURL(a)}))])},[l]),C=s=>{const a=l.filter(w=>w!==s);c(a)},F=()=>{c([])};return e.jsxs(e.Fragment,{children:[e.jsx(y,{sx:{py:5,bgcolor:s=>s.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(x,{children:e.jsx(S,{heading:"Upload",links:[{name:"Components",href:D.components},{name:"Upload"}],moreLink:["https://react-dropzone.js.org/#section-basic-example"]})})}),e.jsx(x,{sx:{my:10},children:e.jsxs(p,{spacing:5,children:[e.jsxs(t,{children:[e.jsx(r,{title:"Upload Multi File",action:e.jsx(B,{control:e.jsx(T,{checked:n.value,onClick:n.onToggle}),label:"Show Thumbnail"})}),e.jsx(i,{children:e.jsx(j,{multiple:!0,thumbnail:n.value,files:l,onDrop:v,onRemove:C,onRemoveAll:F,onUpload:()=>console.info("ON UPLOAD")})})]}),e.jsxs(t,{children:[e.jsx(r,{title:"Upload Single File"}),e.jsx(i,{children:e.jsx(j,{file:u,onDrop:U,onDelete:()=>d(null)})})]}),e.jsxs(t,{children:[e.jsx(r,{title:"Upload Avatar"}),e.jsx(i,{children:e.jsx(O,{file:f,onDrop:b,helperText:e.jsxs(m,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",L(3145728)]})})})]}),e.jsxs(t,{children:[e.jsx(r,{title:"Upload Box"}),e.jsx(i,{children:e.jsxs(p,{direction:"row",spacing:2,children:[e.jsx(h,{}),e.jsx(h,{placeholder:e.jsxs(p,{spacing:.5,alignItems:"center",children:[e.jsx(k,{icon:"eva:cloud-upload-fill",width:40}),e.jsx(m,{variant:"body2",children:"Upload file"})]}),sx:{flexGrow:1,height:"auto",py:2.5,mb:3}})]})})]})]})})]})}function Y(){return e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsx("title",{children:" Extra: Upload"})}),e.jsx(E,{})]})}export{Y as default};
