import{bI as l,ao as e,bD as c,aM as s,bd as o,bv as d,bc as p,aR as a,aO as t,bJ as x,aJ as h}from"./index-0ba7776f.js";import{D as u,a as b}from"./DialogTitle-86acfc12.js";import{D as m}from"./DialogContent-a25c6d9a.js";function j({onClose:n,...i}){const r=l();return e.jsxs(e.Fragment,{children:[e.jsxs(c,{maxWidth:"sm",onClose:n,...i,children:[e.jsx(u,{children:" New Card "}),e.jsx(m,{sx:{overflow:"unset"},children:e.jsxs(s,{spacing:2.5,children:[e.jsx(o,{autoFocus:!0,label:"Card Number",placeholder:"XXXX XXXX XXXX XXXX",InputLabelProps:{shrink:!0}}),e.jsx(o,{label:"Card Holder",placeholder:"JOHN DOE",InputLabelProps:{shrink:!0}}),e.jsxs(s,{spacing:2,direction:"row",children:[e.jsx(o,{label:"Expiration Date",placeholder:"MM/YY",InputLabelProps:{shrink:!0}}),e.jsx(o,{label:"CVV/CVC",placeholder:"***",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(d,{position:"end",children:e.jsx(p,{size:"small",edge:"end",onClick:r.onOpen,children:e.jsx(a,{icon:"eva:info-outline"})})})}})]}),e.jsxs(s,{direction:"row",alignItems:"center",sx:{typography:"caption",color:"text.disabled"},children:[e.jsx(a,{icon:"carbon:locked",sx:{mr:.5}}),"Your transaction is secured with SSL encryption"]})]})}),e.jsxs(b,{children:[e.jsx(t,{color:"inherit",variant:"outlined",onClick:n,children:"Cancel"}),e.jsx(t,{variant:"contained",onClick:n,children:"Add"})]})]}),e.jsx(x,{open:r.open,onClose:r.onClose,arrow:"bottom-center",sx:{maxWidth:200,typography:"body2",textAlign:"center"},children:"Three-digit number on the back of your VISA card"})]})}j.propTypes={onClose:h.func};export{j as P};
