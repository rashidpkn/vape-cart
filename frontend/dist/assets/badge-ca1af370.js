import{a9 as e,ae as r,ak as t,ah as s,aF as i,ai as o,ad as l,aL as d}from"./index-b8fc31ad.js";import{C as c}from"./custom-breadcrumbs-e0a81333.js";import{C as a}from"./component-block-0e573c3f.js";import{M as h}from"./Masonry-15a87f1c.js";const x=["default","primary","secondary","info","success","warning","error"],g=["alway","online","busy","offline"];function m(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{sx:{py:5,bgcolor:n=>n.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(t,{children:e.jsx(c,{heading:"Badge",links:[{name:"Components",href:s.components},{name:"Badge"}],moreLink:["https://mui.com/components/badges"]})})}),e.jsx(t,{sx:{my:10},children:e.jsxs(h,{columns:{xs:1,md:2},spacing:3,children:[e.jsx(a,{title:"Basic",children:x.map(n=>e.jsx(i,{badgeContent:4,color:n,children:e.jsx(o,{icon:"fluent:mail-24-filled",width:24})},n))}),e.jsxs(a,{title:"Maximum value",children:[e.jsx(i,{badgeContent:99,color:"error",children:e.jsx(o,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(i,{badgeContent:100,color:"error",children:e.jsx(o,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(i,{badgeContent:1e3,max:999,color:"error",children:e.jsx(o,{icon:"fluent:mail-24-filled",width:24})})]}),e.jsxs(a,{title:"Dot badge",children:[e.jsx(i,{color:"info",variant:"dot",children:e.jsx(o,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(i,{color:"info",variant:"dot",children:e.jsx(l,{children:"Typography"})})]}),e.jsxs(a,{title:"Badge overlap",children:[e.jsx(i,{color:"info",badgeContent:" ",children:e.jsx(r,{sx:{width:40,height:40,bgcolor:"warning.main"}})}),e.jsx(i,{color:"info",badgeContent:" ",variant:"dot",children:e.jsx(r,{sx:{width:40,height:40,bgcolor:"warning.main"}})}),e.jsx(i,{color:"info",overlap:"circular",badgeContent:" ",children:e.jsx(r,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"warning.main"}})}),e.jsx(i,{color:"info",overlap:"circular",badgeContent:" ",variant:"dot",children:e.jsx(r,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"warning.main"}})})]}),e.jsx(a,{title:"Status",children:g.map(n=>e.jsx(i,{variant:n,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(r,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"grey.400"}})},n))})]})})]})}function b(){return e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("title",{children:" MUI: Badge"})}),e.jsx(m,{})]})}export{b as default};
