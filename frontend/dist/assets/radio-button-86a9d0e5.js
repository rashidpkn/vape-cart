import{D as u,a8 as e,ad as x,aj as n,ag as c,aH as j}from"./index-086ce406.js";import{C as p}from"./custom-breadcrumbs-5a71242b.js";import{C as r}from"./component-block-90b1786f.js";import{M as h}from"./Masonry-d9a6a614.js";import{F as i}from"./FormControl-e114322c.js";import{R as a}from"./RadioGroup-38a86f08.js";import{R as t}from"./Radio-dc351094.js";import{F as o}from"./FormControlLabel-d079e2e2.js";import"./CardHeader-d9c43941.js";import"./FormGroup-3074abc3.js";import"./SwitchBase-8d2ece05.js";const f=["default","primary","secondary","info","success","warning","error"],g=["top","start","bottom","end"];function b(){const[l,m]=u.useState("a1"),d=s=>{m(s.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{py:5,bgcolor:s=>s.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(n,{children:e.jsx(p,{heading:"Radio Buttons",links:[{name:"Components",href:c.components},{name:"Radio Buttons"}],moreLink:["https://mui.com/components/radio-buttons"]})})}),e.jsx(n,{sx:{my:10},children:e.jsxs(h,{columns:{xs:1,md:2},spacing:3,children:[e.jsx(r,{title:"Basic",children:e.jsx(i,{component:"fieldset",children:e.jsxs(a,{row:!0,defaultValue:"nn",children:[e.jsx(t,{size:"medium",value:"nn"}),e.jsx(t,{size:"medium",value:"gg"}),e.jsx(t,{size:"medium",disabled:!0,value:"hh"})]})})}),e.jsx(r,{title:"Sizes",children:e.jsxs(a,{row:!0,defaultValue:"g",children:[e.jsx(o,{value:"g",control:e.jsx(t,{size:"medium"}),label:"Normal"}),e.jsx(o,{value:"p",control:e.jsx(t,{size:"small"}),label:"Small"})]})}),e.jsx(r,{title:"Placement",children:e.jsx(i,{component:"fieldset",children:e.jsx(a,{row:!0,defaultValue:"top",children:g.map(s=>e.jsx(o,{value:s,label:s,labelPlacement:s,control:e.jsx(t,{size:"medium"}),sx:{textTransform:"capitalize"}},s))})})}),e.jsx(r,{title:"Colors",children:e.jsx(i,{component:"fieldset",children:e.jsxs(a,{value:l,onChange:d,children:[f.map(s=>e.jsx(o,{value:s,control:e.jsx(t,{size:"medium",color:s}),label:s,sx:{textTransform:"capitalize"}},s)),e.jsx(o,{disabled:!0,value:"a8",control:e.jsx(t,{size:"medium",color:"error"}),label:"Disabled"})]})})})]})})]})}function L(){return e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsx("title",{children:" MUI: Radio Button"})}),e.jsx(b,{})]})}export{L as default};