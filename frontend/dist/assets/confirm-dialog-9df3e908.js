import{a9 as o,bi as l,af as p,ay as i}from"./index-95441d98.js";import{D as c}from"./DialogTitle-7b6411b8.js";import{D as x}from"./DialogContent-b947f8e3.js";import{D as d}from"./DialogActions-eabcf0be.js";function m({title:n,content:r,action:s,open:a,onClose:t,...e}){return o.jsxs(l,{fullWidth:!0,maxWidth:"xs",open:a,onClose:t,...e,children:[o.jsx(c,{sx:{pb:2},children:n}),r&&o.jsxs(x,{sx:{typography:"body2"},children:[" ",r," "]}),o.jsxs(d,{children:[s,o.jsx(p,{variant:"outlined",color:"inherit",onClick:t,children:"Cancel"})]})]})}m.propTypes={action:i.node,content:i.node,onClose:i.func,open:i.bool,title:i.string};export{m as C};