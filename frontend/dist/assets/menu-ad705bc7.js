import{D as s,a8 as e,ad as C,aj as j,ag as y,ae as S,aG as l,b5 as T,aT as v,aZ as H,aF as B,ah as L,aH as P}from"./index-086ce406.js";import{C as E}from"./custom-breadcrumbs-5a71242b.js";import{C as o}from"./component-block-90b1786f.js";import{M as i}from"./Menu-95a5b99b.js";import"./CardHeader-d9c43941.js";const g=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"],w=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function A(){const[c,k]=s.useState(1),[r,d]=s.useState(null),[u,m]=s.useState(null),[h,p]=s.useState(null),f=s.useCallback(n=>{p(n.currentTarget)},[]),M=s.useCallback(n=>{m(n.currentTarget)},[]),b=s.useCallback((n,a)=>{k(a),m(null)},[]),I=s.useCallback(n=>{d(n.currentTarget)},[]),t=s.useCallback(()=>{d(null)},[]),x=s.useCallback(()=>{p(null)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{sx:{py:5,bgcolor:n=>n.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(j,{children:e.jsx(E,{heading:"Menu",links:[{name:"Components",href:y.components},{name:"Menu"}],moreLink:["https://mui.com/components/menus"]})})}),e.jsx(j,{sx:{my:10},children:e.jsxs(C,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[e.jsxs(o,{title:"Simple",children:[e.jsx(S,{variant:"outlined",onClick:I,children:"Open Menu"}),e.jsx(i,{id:"simple-menu",anchorEl:r,onClose:t,open:!!r,children:["Profile","My account","Logout"].map(n=>e.jsx(l,{selected:n==="Profile",onClick:t,children:n},n))})]}),e.jsxs(o,{title:"Selected",children:[e.jsx(T,{component:"nav","aria-label":"Device settings",children:e.jsx(v,{"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:M,children:e.jsx(H,{primary:"When device is locked",secondary:g[c]})})}),e.jsx(i,{id:"lock-menu",anchorEl:u,onClose:t,open:!!u,children:g.map((n,a)=>e.jsx(l,{disabled:a===0,selected:a===c,onClick:O=>b(O,a),children:n},n))})]}),e.jsxs(o,{title:"Max height",children:[e.jsx(B,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:f,children:e.jsx(L,{icon:"eva:more-vertical-fill"})}),e.jsx(i,{id:"long-menu",anchorEl:h,onClose:x,open:!!h,slotProps:{paper:{sx:{width:"20ch",maxHeight:48*4.5}}},children:w.map(n=>e.jsx(l,{selected:n==="Pyxis",onClick:x,children:n},n))})]})]})})]})}function W(){return e.jsxs(e.Fragment,{children:[e.jsx(P,{children:e.jsx("title",{children:" MUI: Accordion"})}),e.jsx(A,{})]})}export{W as default};