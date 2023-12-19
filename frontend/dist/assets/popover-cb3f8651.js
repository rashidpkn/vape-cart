import{D as p,bm as i,a8 as e,ad as n,aj as m,ag as v,ae as d,f5 as u,ac as t,bT as j,dc as g,bn as b,aK as f}from"./index-80ed1a65.js";import{C}from"./custom-breadcrumbs-d8f83c0f.js";import{C as l}from"./component-block-6814710d.js";import{R as y}from"./RadioGroup-1a32c639.js";import{F as P}from"./FormControlLabel-5e3136f2.js";import{R as F}from"./Radio-9bef1a5f.js";import"./FormGroup-e2f17784.js";import"./SwitchBase-e1bf7dff.js";function B(){const[c,h]=p.useState("top-left"),s=i(),r=i(),a=i(),x=p.useCallback(o=>{h(o.target.value)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{sx:{py:5,bgcolor:o=>o.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(m,{children:e.jsx(C,{heading:"Popover",links:[{name:"Components",href:v.components},{name:"Popover"}],moreLink:["https://mui.com/components/popover"]})})}),e.jsxs(m,{sx:{my:10},children:[e.jsxs(n,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{mb:3},children:[e.jsxs(l,{title:"Click",children:[e.jsx(d,{variant:"contained",onClick:s.onOpen,children:"Open Popover"}),e.jsx(u,{open:!!s.open,anchorEl:s.open,onClose:s.onClose,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:e.jsxs(n,{sx:{p:2,maxWidth:280},children:[e.jsx(t,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]}),e.jsxs(l,{title:"Hover",children:[e.jsx(t,{"aria-owns":r.open?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:r.onOpen,onMouseLeave:r.onClose,children:"Hover with a Popover."}),e.jsx(u,{id:"mouse-over-popover",open:!!r.open,anchorEl:r.open,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:r.onClose,disableRestoreFocus:!0,sx:{pointerEvents:"none"},children:e.jsxs(n,{sx:{p:2,maxWidth:280},children:[e.jsx(t,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]}),e.jsxs(l,{title:"Customized",children:[e.jsx(d,{variant:"contained",onClick:a.onOpen,sx:{mr:5},children:"Open Customized"}),e.jsxs(j,{children:[e.jsx(g,{sx:{typography:"body2"},children:"Arrow"}),e.jsx(y,{value:c,onChange:x,children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom","right-top","right-center","right-bottom"].map(o=>e.jsx(P,{value:o,control:e.jsx(F,{}),label:o},o))})]}),e.jsx(b,{open:a.open,onClose:a.onClose,arrow:c,children:e.jsxs(n,{sx:{p:2,maxWidth:280},children:[e.jsx(t,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]})]})}function A(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx("title",{children:" MUI: Popover"})}),e.jsx(B,{})]})}export{A as default};
