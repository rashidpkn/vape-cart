import{a8 as e,ad as r,aj as t,ag as s,aE as n,ah as o,ac as l,aK as d}from"./index-80ed1a65.js";import{C as c}from"./custom-breadcrumbs-d8f83c0f.js";import{C as a}from"./component-block-6814710d.js";import{M as h}from"./Masonry-197de2f7.js";const x=["default","primary","secondary","info","success","warning","error"],g=["alway","online","busy","offline"];function m(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{sx:{py:5,bgcolor:i=>i.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(t,{children:e.jsx(c,{heading:"Badge",links:[{name:"Components",href:s.components},{name:"Badge"}],moreLink:["https://mui.com/components/badges"]})})}),e.jsx(t,{sx:{my:10},children:e.jsxs(h,{columns:{xs:1,md:2},spacing:3,children:[e.jsx(a,{title:"Basic",children:x.map(i=>e.jsx(n,{badgeContent:4,color:i,children:e.jsx(o,{icon:"fluent:mail-24-filled",width:24})},i))}),e.jsxs(a,{title:"Maximum value",children:[e.jsx(n,{badgeContent:99,color:"error",children:e.jsx(o,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(n,{badgeContent:100,color:"error",children:e.jsx(o,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(n,{badgeContent:1e3,max:999,color:"error",children:e.jsx(o,{icon:"fluent:mail-24-filled",width:24})})]}),e.jsxs(a,{title:"Dot badge",children:[e.jsx(n,{color:"info",variant:"dot",children:e.jsx(o,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(n,{color:"info",variant:"dot",children:e.jsx(l,{children:"Typography"})})]}),e.jsxs(a,{title:"Badge overlap",children:[e.jsx(n,{color:"info",badgeContent:" ",children:e.jsx(r,{sx:{width:40,height:40,bgcolor:"warning.main"}})}),e.jsx(n,{color:"info",badgeContent:" ",variant:"dot",children:e.jsx(r,{sx:{width:40,height:40,bgcolor:"warning.main"}})}),e.jsx(n,{color:"info",overlap:"circular",badgeContent:" ",children:e.jsx(r,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"warning.main"}})}),e.jsx(n,{color:"info",overlap:"circular",badgeContent:" ",variant:"dot",children:e.jsx(r,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"warning.main"}})})]}),e.jsx(a,{title:"Status",children:g.map(i=>e.jsx(n,{variant:i,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(r,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"grey.400"}})},i))})]})})]})}function b(){return e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("title",{children:" MUI: Badge"})}),e.jsx(m,{})]})}export{b as default};
