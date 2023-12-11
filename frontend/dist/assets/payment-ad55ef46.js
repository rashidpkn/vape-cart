import{a8 as e,ad as m,ac as r,a9 as s,aE as f,av as u,ae as y,ah as i,aw as c,aP as w,D as j,aA as P,aZ as C,aj as S,al as h,aH as T}from"./index-bf334511.js";import{S as I}from"./Switch-62976b6d.js";import{P as k}from"./payment-new-card-dialog-9af4aea3.js";import{T as d}from"./TextField-e6e01232.js";import"./SwitchBase-f8898c21.js";import"./DialogTitle-4a7e452e.js";import"./DialogContent-30366fda.js";import"./DialogActions-849f84a7.js";import"./FormControl-96833b24.js";import"./FormLabel-8a3d5af0.js";import"./Select-1c3a8fd5.js";import"./Menu-3b093474.js";function b({sx:a,...n}){const l=e.jsxs(s,{direction:"row",justifyContent:"flex-end",children:[e.jsx(r,{variant:"h4",children:"$"}),e.jsx(r,{variant:"h2",children:"9.99"}),e.jsx(r,{component:"span",sx:{alignSelf:"center",color:"text.disabled",ml:1,typography:"body2"},children:"/ mo"})]});return e.jsxs(m,{sx:{p:5,borderRadius:2,bgcolor:"background.neutral",...a},...n,children:[e.jsx(r,{variant:"h6",sx:{mb:5},children:"Summary"}),e.jsxs(s,{spacing:2.5,children:[e.jsxs(s,{direction:"row",justifyContent:"space-between",children:[e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},children:"Subscription"}),e.jsx(f,{color:"error",children:"PREMIUM"})]}),e.jsxs(s,{direction:"row",justifyContent:"space-between",children:[e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},children:"Billed Monthly"}),e.jsx(I,{defaultChecked:!0})]}),l,e.jsx(u,{sx:{borderStyle:"dashed"}}),e.jsxs(s,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(r,{variant:"subtitle1",children:"Total Billed"}),e.jsx(r,{variant:"subtitle1",children:"$9.99*"})]}),e.jsx(u,{sx:{borderStyle:"dashed"}})]}),e.jsx(r,{component:"div",variant:"caption",sx:{color:"text.secondary",mt:1},children:"* Plus applicable taxes"}),e.jsx(y,{fullWidth:!0,size:"large",variant:"contained",sx:{mt:5,mb:3},children:"Upgrade My Plan"}),e.jsxs(s,{alignItems:"center",spacing:1,children:[e.jsxs(s,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(i,{icon:"solar:shield-check-bold",sx:{color:"success.main"}}),e.jsx(r,{variant:"subtitle2",children:"Secure credit card payment"})]}),e.jsx(r,{variant:"caption",sx:{color:"text.disabled",textAlign:"center"},children:"This is a secure 128-bit SSL encrypted payment"})]})]})}b.propTypes={sx:c.object};const A=[{value:"paypal",label:"Paypal"},{value:"credit",label:"Credit / Debit Card"}],M=[{value:"visa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"visa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"mastercard",label:"**** **** **** 4545 - Cole Armstrong"}];function B(){const a=w(),[n,l]=j.useState("paypal"),p=j.useCallback(t=>{l(t)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(s,{spacing:5,children:[e.jsx(r,{variant:"h6",children:"Payment Method"}),e.jsx(s,{spacing:3,children:A.map(t=>e.jsx(g,{option:t,selected:n===t.value,isCredit:t.value==="credit"&&n==="credit",onOpen:a.onTrue,onClick:()=>p(t.value)},t.label))})]}),e.jsx(k,{open:a.value,onClose:a.onFalse})]})}function g({option:a,selected:n,isCredit:l,onOpen:p,...t}){const{value:x,label:v}=a;return e.jsxs(P,{variant:"outlined",sx:{p:2.5,cursor:"pointer",...n&&{boxShadow:o=>`0 0 0 2px ${o.palette.text.primary}`}},...t,children:[e.jsx(C,{primary:e.jsxs(s,{direction:"row",alignItems:"center",children:[e.jsx(i,{icon:n?"eva:checkmark-circle-2-fill":"eva:radio-button-off-fill",width:24,sx:{mr:2,color:n?"primary.main":"text.secondary"}}),e.jsx(m,{component:"span",sx:{flexGrow:1},children:v}),e.jsxs(s,{spacing:1,direction:"row",alignItems:"center",children:[x==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(i,{icon:"logos:mastercard",width:24}),",",e.jsx(i,{icon:"logos:visa",width:24})]}),x==="paypal"&&e.jsx(i,{icon:"logos:paypal",width:24}),x==="cash"&&e.jsx(i,{icon:"solar:wad-of-money-bold",width:24})]})]}),primaryTypographyProps:{typography:"subtitle2"}}),l&&e.jsxs(s,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(d,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:M.map(o=>e.jsx("option",{value:o.value,children:o.label},o.value))}),e.jsx(y,{size:"small",color:"primary",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),onClick:p,children:"Add New Card"})]})]},x)}g.propTypes={isCredit:c.bool,onOpen:c.func,option:c.object,selected:c.bool};function O(){return e.jsxs("div",{children:[e.jsx(r,{variant:"h6",children:"Billing Address"}),e.jsxs(s,{spacing:3,mt:5,children:[e.jsx(d,{fullWidth:!0,label:"Person name"}),e.jsx(d,{fullWidth:!0,label:"Phone number"}),e.jsx(d,{fullWidth:!0,label:"Email"}),e.jsx(d,{fullWidth:!0,label:"Address"})]})]})}function W(){return e.jsxs(S,{sx:{pt:15,pb:10,minHeight:1},children:[e.jsx(r,{variant:"h3",align:"center",paragraph:!0,children:"Let's finish powering you up!"}),e.jsx(r,{align:"center",sx:{color:"text.secondary",mb:5},children:"Professional plan is right for you."}),e.jsxs(h,{container:!0,rowSpacing:{xs:5,md:0},columnSpacing:{xs:0,md:5},children:[e.jsx(h,{xs:12,md:8,children:e.jsxs(m,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{p:{md:5},borderRadius:2,border:a=>({md:`dashed 1px ${a.palette.divider}`})},children:[e.jsx(O,{}),e.jsx(B,{})]})}),e.jsx(h,{xs:12,md:4,children:e.jsx(b,{})})]})]})}function J(){return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx("title",{children:" Payment"})}),e.jsx(W,{})]})}export{J as default};
