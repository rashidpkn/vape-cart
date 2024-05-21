import{F as b,aJ as U,aK as X,aC as k,aO as j,aM as _,aN as V,j as e,aP as E,aQ as H,bu as re,dO as Ae,aL as se,af as Q,al as g,am as h,S as y,T as f,aq as F,ak as ae,B as L,bM as W,bK as ie,ae as a,ad as Re,b1 as Y,dP as le,ao as Ne,ap as B,aG as Me,dQ as ce,ag as ze,ah as Oe,ai as Fe,aj as We,bY as Ee,ax as w,dR as Be,a$ as Ue,b2 as Xe,be as te,aH as de,an as _e,bw as pe,as as Ve,b6 as ue,dC as He,aA as Qe,d7 as qe,dS as Ge,bT as Ye,aU as Je,aV as Ke,W as Ze}from"./index-b8354e19.js";import{c as et}from"./_product-2bc14852.js";import{u as tt}from"./use-checkout-570a672b.js";import{C as q}from"./CardHeader-d434b8a0.js";import{C as ot}from"./CardContent-4a156e1f.js";import"./color-picker-eaf5a7f5.js";import{T as nt}from"./TableContainer-0cda5818.js";import{u as xe,C as he,c as rt,f as st,g as at,F as it,A as lt}from"./form-provider-fec34da4.js";import{L as ct,o as dt}from"./yup-d2ef2170.js";import{a as pt,D as ut}from"./DialogTitle-ca1bc48c.js";import{D as xt}from"./DialogContent-b5af31c5.js";import{v as ht}from"./Switch-6dd1074d.js";import{a as mt}from"./address-list-dialog-a3eee314.js";import"./image-ab67bd03.js";import"./CircularProgress-22dad298.js";import"./transition-bee6630b.js";const bt=b.createContext({}),J=bt,jt=b.createContext({}),oe=jt;function yt(t){return U("MuiStep",t)}X("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const vt=["active","children","className","component","completed","disabled","expanded","index","last"],ft=t=>{const{classes:o,orientation:n,alternativeLabel:s,completed:r}=t;return H({root:["root",n,s&&"alternativeLabel",r&&"completed"]},yt,o)},Ct=k("div",{name:"MuiStep",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation],n.alternativeLabel&&o.alternativeLabel,n.completed&&o.completed]}})(({ownerState:t})=>j({},t.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})),gt=b.forwardRef(function(o,n){const s=_({props:o,name:"MuiStep"}),{active:r,children:i,className:l,component:c="div",completed:d,disabled:p,expanded:u=!1,index:x,last:m}=s,T=V(s,vt),{activeStep:I,connector:C,alternativeLabel:v,orientation:$,nonLinear:P}=b.useContext(J);let[S=!1,A=!1,R=!1]=[r,d,p];I===x?S=r!==void 0?r:!0:!P&&I>x?A=d!==void 0?d:!0:!P&&I<x&&(R=p!==void 0?p:!0);const M=b.useMemo(()=>({index:x,last:m,expanded:u,icon:x+1,active:S,completed:A,disabled:R}),[x,m,u,S,A,R]),N=j({},s,{active:S,orientation:$,alternativeLabel:v,completed:A,disabled:R,expanded:u,component:c}),z=ft(N),O=e.jsxs(Ct,j({as:c,className:E(z.root,l),ref:n,ownerState:N},T,{children:[C&&v&&x!==0?C:null,i]}));return e.jsx(oe.Provider,{value:M,children:C&&!v&&x!==0?e.jsxs(b.Fragment,{children:[C,O]}):O})}),St=gt,Lt=re(e.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),It=re(e.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function wt(t){return U("MuiStepIcon",t)}const kt=X("MuiStepIcon",["root","active","completed","error","text"]),Z=kt;var ne;const Tt=["active","className","completed","error","icon"],Pt=t=>{const{classes:o,active:n,completed:s,error:r}=t;return H({root:["root",n&&"active",s&&"completed",r&&"error"],text:["text"]},wt,o)},ee=k(Ae,{name:"MuiStepIcon",slot:"Root",overridesResolver:(t,o)=>o.root})(({theme:t})=>({display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${Z.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${Z.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${Z.error}`]:{color:(t.vars||t).palette.error.main}})),Dt=k("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(t,o)=>o.text})(({theme:t})=>({fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily})),$t=b.forwardRef(function(o,n){const s=_({props:o,name:"MuiStepIcon"}),{active:r=!1,className:i,completed:l=!1,error:c=!1,icon:d}=s,p=V(s,Tt),u=j({},s,{active:r,completed:l,error:c}),x=Pt(u);if(typeof d=="number"||typeof d=="string"){const m=E(i,x.root);return c?e.jsx(ee,j({as:It,className:m,ref:n,ownerState:u},p)):l?e.jsx(ee,j({as:Lt,className:m,ref:n,ownerState:u},p)):e.jsxs(ee,j({className:m,ref:n,ownerState:u},p,{children:[ne||(ne=e.jsx("circle",{cx:"12",cy:"12",r:"12"})),e.jsx(Dt,{className:x.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:u,children:d})]}))}return d}),At=$t;function Rt(t){return U("MuiStepLabel",t)}const Nt=X("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),D=Nt,Mt=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],zt=t=>{const{classes:o,orientation:n,active:s,completed:r,error:i,disabled:l,alternativeLabel:c}=t;return H({root:["root",n,i&&"error",l&&"disabled",c&&"alternativeLabel"],label:["label",s&&"active",r&&"completed",i&&"error",l&&"disabled",c&&"alternativeLabel"],iconContainer:["iconContainer",s&&"active",r&&"completed",i&&"error",l&&"disabled",c&&"alternativeLabel"],labelContainer:["labelContainer",c&&"alternativeLabel"]},Rt,o)},Ot=k("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation]]}})(({ownerState:t})=>j({display:"flex",alignItems:"center",[`&.${D.alternativeLabel}`]:{flexDirection:"column"},[`&.${D.disabled}`]:{cursor:"default"}},t.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),Ft=k("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(t,o)=>o.label})(({theme:t})=>j({},t.typography.body2,{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${D.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${D.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${D.alternativeLabel}`]:{marginTop:16},[`&.${D.error}`]:{color:(t.vars||t).palette.error.main}})),Wt=k("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(t,o)=>o.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${D.alternativeLabel}`]:{paddingRight:0}})),Et=k("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(t,o)=>o.labelContainer})(({theme:t})=>({width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${D.alternativeLabel}`]:{textAlign:"center"}})),me=b.forwardRef(function(o,n){var s;const r=_({props:o,name:"MuiStepLabel"}),{children:i,className:l,componentsProps:c={},error:d=!1,icon:p,optional:u,slotProps:x={},StepIconComponent:m,StepIconProps:T}=r,I=V(r,Mt),{alternativeLabel:C,orientation:v}=b.useContext(J),{active:$,disabled:P,completed:S,icon:A}=b.useContext(oe),R=p||A;let M=m;R&&!M&&(M=At);const N=j({},r,{active:$,alternativeLabel:C,completed:S,disabled:P,error:d,orientation:v}),z=zt(N),O=(s=x.label)!=null?s:c.label;return e.jsxs(Ot,j({className:E(z.root,l),ref:n,ownerState:N},I,{children:[R||M?e.jsx(Wt,{className:z.iconContainer,ownerState:N,children:e.jsx(M,j({completed:S,active:$,error:d,icon:R},T))}):null,e.jsxs(Et,{className:z.labelContainer,ownerState:N,children:[i?e.jsx(Ft,j({ownerState:N},O,{className:E(z.label,O==null?void 0:O.className),children:i})):null,u]})]}))});me.muiName="StepLabel";const Bt=me;function Ut(t){return U("MuiStepConnector",t)}const Xt=X("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]),G=Xt,_t=["className"],Vt=t=>{const{classes:o,orientation:n,alternativeLabel:s,active:r,completed:i,disabled:l}=t,c={root:["root",n,s&&"alternativeLabel",r&&"active",i&&"completed",l&&"disabled"],line:["line",`line${se(n)}`]};return H(c,Ut,o)},Ht=k("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation],n.alternativeLabel&&o.alternativeLabel,n.completed&&o.completed]}})(({ownerState:t})=>j({flex:"1 1 auto"},t.orientation==="vertical"&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:8+4,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),Qt=k("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.line,o[`line${se(n.orientation)}`]]}})(({ownerState:t,theme:o})=>{const n=o.palette.mode==="light"?o.palette.grey[400]:o.palette.grey[600];return j({display:"block",borderColor:o.vars?o.vars.palette.StepConnector.border:n},t.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},t.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),qt=b.forwardRef(function(o,n){const s=_({props:o,name:"MuiStepConnector"}),{className:r}=s,i=V(s,_t),{alternativeLabel:l,orientation:c="horizontal"}=b.useContext(J),{active:d,disabled:p,completed:u}=b.useContext(oe),x=j({},s,{alternativeLabel:l,orientation:c,active:d,completed:u,disabled:p}),m=Vt(x);return e.jsx(Ht,j({className:E(m.root,r),ref:n,ownerState:x},i,{children:e.jsx(Qt,{className:m.line,ownerState:x})}))}),be=qt;function Gt(t){return U("MuiStepper",t)}X("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);const Yt=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],Jt=t=>{const{orientation:o,alternativeLabel:n,classes:s}=t;return H({root:["root",o,n&&"alternativeLabel"]},Gt,s)},Kt=k("div",{name:"MuiStepper",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation],n.alternativeLabel&&o.alternativeLabel]}})(({ownerState:t})=>j({display:"flex"},t.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},t.orientation==="vertical"&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})),Zt=e.jsx(be,{}),eo=b.forwardRef(function(o,n){const s=_({props:o,name:"MuiStepper"}),{activeStep:r=0,alternativeLabel:i=!1,children:l,className:c,component:d="div",connector:p=Zt,nonLinear:u=!1,orientation:x="horizontal"}=s,m=V(s,Yt),T=j({},s,{alternativeLabel:i,orientation:x,component:d}),I=Jt(T),C=b.Children.toArray(l).filter(Boolean),v=C.map((P,S)=>b.cloneElement(P,j({index:S,last:S+1===C.length},P.props))),$=b.useMemo(()=>({activeStep:r,alternativeLabel:i,connector:p,nonLinear:u,orientation:x}),[r,i,p,u,x]);return e.jsx(J.Provider,{value:$,children:e.jsx(Kt,j({as:d,ownerState:T,className:E(I.root,c),ref:n},m,{children:v}))})}),to=eo;function K({total:t,onEdit:o,discount:n,subTotal:s,shipping:r,onApplyDiscount:i,enableEdit:l=!1,enableDiscount:c=!1}){const d=r!==null?"Free":"-";return e.jsxs(Q,{sx:{mb:3},children:[e.jsx(q,{title:"Order Summary",action:l&&e.jsx(g,{size:"small",onClick:o,startIcon:e.jsx(h,{icon:"solar:pen-bold"}),children:"Edit"})}),e.jsx(ot,{children:e.jsxs(y,{spacing:2,children:[e.jsxs(y,{direction:"row",justifyContent:"space-between",children:[e.jsx(f,{variant:"body2",sx:{color:"text.secondary"},children:"Sub Total"}),e.jsx(f,{variant:"subtitle2",children:F(s)})]}),e.jsxs(y,{direction:"row",justifyContent:"space-between",children:[e.jsx(f,{variant:"body2",sx:{color:"text.secondary"},children:"Discount"}),e.jsx(f,{variant:"subtitle2",children:n?F(-n):"-"})]}),e.jsxs(y,{direction:"row",justifyContent:"space-between",children:[e.jsx(f,{variant:"body2",sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(f,{variant:"subtitle2",children:r?F(r):d})]}),e.jsx(ae,{sx:{borderStyle:"dashed"}}),e.jsxs(y,{direction:"row",justifyContent:"space-between",children:[e.jsx(f,{variant:"subtitle1",children:"Total"}),e.jsxs(L,{sx:{textAlign:"right"},children:[e.jsx(f,{variant:"subtitle1",sx:{color:"error.main"},children:F(t)}),e.jsx(f,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),c&&i&&e.jsx(W,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"",InputProps:{endAdornment:e.jsx(ie,{position:"end",children:e.jsx(g,{color:"primary",onClick:()=>i(5),sx:{mr:-.5},children:"Apply"})})}})]})})]})}K.propTypes={discount:a.number,enableDiscount:a.bool,enableEdit:a.bool,onApplyDiscount:a.func,onEdit:a.func,shipping:a.number,subTotal:a.number,total:a.number};const je=b.forwardRef(({quantity:t,onIncrease:o,onDecrease:n,disabledIncrease:s,disabledDecrease:r,sx:i,...l},c)=>e.jsxs(y,{ref:c,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:.5,width:88,borderRadius:1,typography:"subtitle2",border:d=>`solid 1px ${Re(d.palette.grey[500],.2)}`,...i},...l,children:[e.jsx(Y,{size:"small",onClick:n,disabled:r,sx:{borderRadius:.75},children:e.jsx(h,{icon:"eva:minus-fill",width:16})}),t,e.jsx(Y,{size:"small",onClick:o,disabled:s,sx:{borderRadius:.75},children:e.jsx(h,{icon:"mingcute:add-line",width:16})})]}));je.propTypes={disabledDecrease:a.bool,disabledIncrease:a.bool,onDecrease:a.func,onIncrease:a.func,quantity:a.number,sx:a.object};const oo=je;function ye({row:t,onDelete:o,onDecrease:n,onIncrease:s}){const{name:r,size:i,price:l,colors:c,images:d=[],quantity:p,available:u,id:x}=t,m=le();return e.jsxs(Ne,{children:[e.jsxs(B,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(Me,{variant:"rounded",alt:r,src:d[0],sx:{width:64,height:64,mr:2}}),e.jsx(y,{spacing:.5,children:e.jsx(f,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:r})})]}),e.jsx(B,{children:F(l)}),e.jsx(B,{children:e.jsxs(L,{sx:{width:88,textAlign:"right"},children:[e.jsx(oo,{quantity:p,onDecrease:n,onIncrease:s,disabledDecrease:p<=1,disabledIncrease:p>=u}),e.jsxs(f,{variant:"caption",component:"div",sx:{color:"text.secondary",mt:1},children:["available: ",u]})]})}),e.jsx(B,{align:"right",children:F(l*p)}),e.jsx(B,{align:"right",sx:{px:1},children:e.jsx(Y,{onClick:()=>{o(x),m(ce())},children:e.jsx(h,{icon:"solar:trash-bin-trash-bold"})})})]})}ye.propTypes={row:a.object,onDelete:a.func,onDecrease:a.func,onIncrease:a.func};const no=[{id:"product",label:"Product"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"totalAmount",label:"Total Price",align:"right"},{id:""}];function ve({products:t,onDelete:o,onIncreaseQuantity:n,onDecreaseQuantity:s}){return e.jsx(nt,{sx:{overflow:"unset"},children:e.jsx(ze,{children:e.jsxs(Oe,{sx:{minWidth:720},children:[e.jsx(Fe,{headLabel:no}),e.jsx(We,{children:t.map(r=>e.jsx(ye,{row:r,onDelete:o,onDecrease:()=>s(r.id),onIncrease:()=>n(r.id)},r.id))})]})})})}ve.propTypes={onDelete:a.func,products:a.array,onDecreaseQuantity:a.func,onIncreaseQuantity:a.func};function fe({checkout:t,onNextStep:o,onDeleteCart:n,onApplyDiscount:s,onIncreaseQuantity:r,onDecreaseQuantity:i}){const{cart:l,total:c,discount:d,subTotal:p}=t,u=Ee(l.map(m=>m.quantity)),x=!l.length;return e.jsxs(w,{container:!0,spacing:3,children:[e.jsxs(w,{xs:12,md:8,children:[e.jsxs(Q,{sx:{mb:3},children:[e.jsx(q,{title:e.jsxs(f,{variant:"h6",children:["Cart",e.jsxs(f,{component:"span",sx:{color:"text.secondary"},children:[" (",u," item)"]})]}),sx:{mb:3}}),x?e.jsx(Be,{title:"Cart is Empty!",description:"Look like you have no items in your shopping cart.",imgUrl:"/assets/icons/empty/ic_cart.svg",sx:{pt:5,pb:10}}):e.jsx(ve,{products:l,onDelete:n,onIncreaseQuantity:r,onDecreaseQuantity:i})]}),e.jsx(g,{component:Ue,href:Xe.product.root,color:"inherit",startIcon:e.jsx(h,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"})]}),e.jsxs(w,{xs:12,md:4,children:[e.jsx(K,{enableDiscount:!0,total:c,discount:d,subTotal:p,onApplyDiscount:s}),e.jsx(g,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:!l.length,onClick:o,children:"Check Out"})]})]})}fe.propTypes={checkout:a.object,onNextStep:a.func,onDeleteCart:a.func,onApplyDiscount:a.func,onDecreaseQuantity:a.func,onIncreaseQuantity:a.func};const ro=k(be)(({theme:t})=>({top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)",[`& .${G.line}`]:{borderTopWidth:2,borderColor:t.palette.divider},[`&.${G.active}, &.${G.completed}`]:{[`& .${G.line}`]:{borderColor:t.palette.primary.main}}}));function Ce({steps:t,activeStep:o,sx:n,...s}){return e.jsx(to,{alternativeLabel:!0,activeStep:o,connector:e.jsx(ro,{}),sx:{mb:{xs:3,md:5},...n},...s,children:t.map(r=>e.jsx(St,{children:e.jsx(Bt,{StepIconComponent:ge,sx:{[`& .${D.label}`]:{fontWeight:"fontWeightSemiBold"}},children:r})},r))})}Ce.propTypes={activeStep:a.number,steps:a.arrayOf(a.string),sx:a.object};function ge({active:t,completed:o}){return e.jsx(y,{alignItems:"center",justifyContent:"center",sx:{width:24,height:24,color:"text.disabled",...t&&{color:"primary.main"}},children:o?e.jsx(h,{icon:"eva:checkmark-fill",sx:{color:"primary.main"}}):e.jsx(L,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}ge.propTypes={active:a.bool,completed:a.bool};function Se({options:t,onApplyShipping:o,...n}){const{control:s}=xe();return e.jsxs(Q,{...n,children:[e.jsx(q,{title:"Delivery"}),e.jsx(he,{name:"delivery",control:s,render:({field:r})=>e.jsx(L,{columnGap:2,rowGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},sx:{p:3},children:t.map(i=>e.jsx(Le,{option:i,selected:r.value===i.value,onClick:()=>{r.onChange(i.value),o(i.value)}},i.label))})})]})}Se.propTypes={onApplyShipping:a.func,options:a.array};function Le({option:t,selected:o,...n}){const{value:s,label:r,description:i=""}=t;return e.jsxs(te,{variant:"outlined",sx:{p:2.5,cursor:"pointer",display:"flex",...o&&{boxShadow:l=>`0 0 0 2px ${l.palette.text.primary}`}},...n,children:[r==="Free"&&e.jsx(h,{icon:"carbon:bicycle",width:32}),r==="Standard"&&e.jsx(h,{icon:"carbon:delivery",width:32}),r==="Express"&&e.jsx(h,{icon:"carbon:rocket",width:32}),e.jsx(de,{sx:{ml:2},primary:e.jsxs(y,{direction:"row",alignItems:"center",children:[e.jsx(L,{component:"span",sx:{flexGrow:1},children:r}),e.jsx(L,{component:"span",sx:{typography:"h6"},children:`AED ${s}`})]}),secondary:i,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}})]},s)}Le.propTypes={option:a.object,selected:a.bool};function Ie({billing:t,onBackStep:o}){return e.jsxs(Q,{sx:{mb:3},children:[e.jsx(q,{title:"Address",action:e.jsx(g,{size:"small",startIcon:e.jsx(h,{icon:"solar:pen-bold"}),onClick:o,children:"Edit"})}),e.jsxs(y,{spacing:1,sx:{p:3},children:[e.jsxs(L,{sx:{typography:"subtitle2"},children:[`${t==null?void 0:t.name} `,e.jsxs(L,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:["(",t==null?void 0:t.addressType,")"]})]}),e.jsx(L,{sx:{color:"text.secondary",typography:"body2"},children:t==null?void 0:t.fullAddress}),e.jsx(L,{sx:{color:"text.secondary",typography:"body2"},children:t==null?void 0:t.phoneNumber})]})]})}Ie.propTypes={billing:a.object,onBackStep:a.func};function we({onClose:t,...o}){const n=_e();return e.jsxs(e.Fragment,{children:[e.jsxs(pe,{maxWidth:"sm",onClose:t,...o,children:[e.jsx(pt,{children:" New Card "}),e.jsx(xt,{sx:{overflow:"unset"},children:e.jsxs(y,{spacing:2.5,children:[e.jsx(W,{autoFocus:!0,label:"Card Number",placeholder:"XXXX XXXX XXXX XXXX",InputLabelProps:{shrink:!0}}),e.jsx(W,{label:"Card Holder",placeholder:"JOHN DOE",InputLabelProps:{shrink:!0}}),e.jsxs(y,{spacing:2,direction:"row",children:[e.jsx(W,{label:"Expiration Date",placeholder:"MM/YY",InputLabelProps:{shrink:!0}}),e.jsx(W,{label:"CVV/CVC",placeholder:"***",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(ie,{position:"end",children:e.jsx(Y,{size:"small",edge:"end",onClick:n.onOpen,children:e.jsx(h,{icon:"eva:info-outline"})})})}})]}),e.jsxs(y,{direction:"row",alignItems:"center",sx:{typography:"caption",color:"text.disabled"},children:[e.jsx(h,{icon:"carbon:locked",sx:{mr:.5}}),"Your transaction is secured with SSL encryption"]})]})}),e.jsxs(ut,{children:[e.jsx(g,{color:"inherit",variant:"outlined",onClick:t,children:"Cancel"}),e.jsx(g,{variant:"contained",onClick:t,children:"Add"})]})]}),e.jsx(Ve,{open:n.open,onClose:n.onClose,arrow:"bottom-center",sx:{maxWidth:200,typography:"body2",textAlign:"center"},children:"Three-digit number on the back of your VISA card"})]})}we.propTypes={onClose:a.func};function ke({options:t,cardOptions:o,...n}){const{control:s}=xe(),r=ue();return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{...n,children:[e.jsx(q,{title:"Payment"}),e.jsx(he,{name:"payment",control:s,render:({field:i,fieldState:{error:l}})=>e.jsxs(y,{sx:{px:3,pb:3},children:[t.map(c=>e.jsx(Te,{option:c,onOpen:r.onTrue,cardOptions:o,selected:c.value==="cash",isCredit:c.value==="credit"&&i.value==="credit",onClick:()=>{i.onChange(c.value)}},c.label)),!!l&&e.jsx(He,{error:!0,sx:{pt:1,px:2},children:l.message})]})})]}),e.jsx(we,{open:r.value,onClose:r.onFalse})]})}ke.propTypes={cardOptions:a.array,options:a.array};function Te({option:t,cardOptions:o,selected:n,isCredit:s,onOpen:r,...i}){const{value:l,label:c,description:d}=t;return e.jsxs(te,{variant:"outlined",sx:{p:2.5,mt:2.5,cursor:"pointer",...n&&{boxShadow:p=>`0 0 0 2px ${p.palette.text.primary}`}},...i,children:[e.jsx(de,{primary:e.jsxs(y,{direction:"row",alignItems:"center",children:[e.jsx(L,{component:"span",sx:{flexGrow:1},children:c}),e.jsxs(y,{spacing:1,direction:"row",alignItems:"center",children:[l==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(h,{icon:"logos:mastercard",width:24}),",",e.jsx(h,{icon:"logos:visa",width:24})]}),l==="paypal"&&e.jsx(h,{icon:"logos:paypal",width:24}),l==="cash"&&e.jsx(h,{icon:"solar:wad-of-money-bold",width:32})]})]}),secondary:d,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}}),s&&e.jsxs(y,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(W,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:o.map(p=>e.jsx("option",{value:p.value,children:p.label},p.value))}),e.jsx(g,{size:"small",color:"primary",startIcon:e.jsx(h,{icon:"mingcute:add-line"}),onClick:r,children:"Add New Card"})]})]},l)}Te.propTypes={cardOptions:a.array,isCredit:a.bool,onOpen:a.func,option:a.object,selected:a.bool};const so=[{value:20,label:"1-2 Hour Delivery"},{value:10,label:"Same Day Delivery"},{value:0,label:"Next Day delivery"}],ao=[{value:"cash",label:"Cash",description:"Pay with cash when your order is delivered."}],io=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function Pe({checkout:t,onReset:o,onNextStep:n,onBackStep:s,onGotoStep:r,onApplyShipping:i}){const{total:l,discount:c,subTotal:d,shipping:p,billing:u,cart:x,totalItems:m}=t,T=rt().shape({payment:st().required("Payment is required!")}),I={delivery:p,payment:""},C=at({resolver:dt(T),defaultValues:I}),{handleSubmit:v,formState:{isSubmitting:$}}=C,P=v(async S=>{try{Qe.post("/orders",{items:x,subTotal:d,shipping:p,discount:c,totalAmount:l,totalQuantity:m,customer:{name:u.name,email:u.email},shippingAddress:{fullAddress:u.fullAddress,phoneNumber:u.phoneNumber}}),n(),o(),console.info("DATA",S)}catch(A){console.error(A)}});return e.jsx(it,{methods:C,onSubmit:P,children:e.jsxs(w,{container:!0,spacing:3,children:[e.jsxs(w,{xs:12,md:8,children:[e.jsx(Se,{onApplyShipping:i,options:so}),e.jsx(ke,{cardOptions:io,options:ao,sx:{my:3}}),e.jsx(g,{size:"small",color:"inherit",onClick:s,startIcon:e.jsx(h,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),e.jsxs(w,{xs:12,md:4,children:[e.jsx(Ie,{onBackStep:s,billing:u}),e.jsx(K,{enableEdit:!0,total:l,subTotal:d,discount:c,shipping:p,onEdit:()=>r(0)}),e.jsx(ct,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:$,children:"Complete Order"})]})]})})}Pe.propTypes={onReset:a.func,checkout:a.object,onBackStep:a.func,onGotoStep:a.func,onNextStep:a.func,onApplyShipping:a.func};function De({open:t,onReset:o,onDownloadPDF:n}){const s=e.jsxs(y,{spacing:5,sx:{m:"auto",maxWidth:480,textAlign:"center",px:{xs:2,sm:0}},children:[e.jsx(f,{variant:"h4",children:"Thank you for your purchase!"}),e.jsx(Ge,{sx:{height:260}}),e.jsxs(f,{children:["Thanks for placing order",e.jsx("br",{}),e.jsx("br",{}),e.jsx(Ye,{children:"01dc1370-3df6-11eb-b378-0242ac130002"}),e.jsx("br",{}),e.jsx("br",{}),"We will send you a notification within 5 days when it ships.",e.jsx("br",{})," If you have any question or queries then fell to get in contact us. ",e.jsx("br",{})," ",e.jsx("br",{}),"All the best,"]}),e.jsx(ae,{sx:{borderStyle:"dashed"}}),e.jsxs(y,{spacing:2,justifyContent:"space-between",direction:{xs:"column-reverse",sm:"row"},children:[e.jsx(g,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",onClick:o,startIcon:e.jsx(h,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"}),e.jsx(g,{fullWidth:!0,size:"large",variant:"contained",startIcon:e.jsx(h,{icon:"eva:cloud-download-fill"}),onClick:n,children:"Download as PDF"})]})]});return e.jsx(lt,{children:t&&e.jsx(pe,{fullWidth:!0,fullScreen:!0,open:t,PaperComponent:r=>e.jsx(L,{component:qe.div,...ht({distance:120,durationIn:.32,durationOut:.24,easeIn:"easeInOut"}).inUp,sx:{width:1,height:1,p:{md:3}},children:e.jsx(te,{...r,children:r.children})}),children:s})})}De.propTypes={open:a.bool,onReset:a.func,children:a.node,onDownloadPDF:a.func};function $e({checkout:t,onBackStep:o,onCreateBilling:n}){const s=ue(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(w,{container:!0,spacing:3,children:[e.jsx(w,{xs:12,md:8,children:e.jsxs(y,{direction:"row",justifyContent:"space-between",children:[e.jsx(g,{size:"small",color:"inherit",onClick:o,startIcon:e.jsx(h,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),e.jsx(g,{size:"small",color:"primary",onClick:s.onTrue,startIcon:e.jsx(h,{icon:"mingcute:add-line"}),children:"New Address"})]})}),e.jsx(w,{xs:12,md:4,children:e.jsx(K,{total:t.total,subTotal:t.subTotal,discount:t.discount})})]}),e.jsx(mt,{open:s.value,onClose:s.onFalse,onCreate:n})]})}$e.propTypes={checkout:a.object,onBackStep:a.func,onCreateBilling:a.func};function lo(t){const o=le(),n=b.useCallback(()=>{t.length&&o(ce(t))},[t,o]);return b.useEffect(()=>{n()},[n]),null}function co(){const t=Je(),{checkout:o,completed:n,onResetAll:s,onGotoStep:r,onNextStep:i,onBackStep:l,onDeleteCart:c,onResetBilling:d,onCreateBilling:p,onApplyDiscount:u,onApplyShipping:x,onIncreaseQuantity:m,onDecreaseQuantity:T}=tt(),{cart:I,billing:C,activeStep:v}=o;return lo(I),b.useEffect(()=>{v===1&&d()},[v,d]),e.jsxs(Ke,{maxWidth:t.themeStretch?!1:"lg",sx:{mb:10},children:[e.jsx(f,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Checkout"}),e.jsx(w,{container:!0,justifyContent:n?"center":"flex-start",children:e.jsx(w,{xs:12,md:8,children:e.jsx(Ce,{activeStep:v,steps:et})})}),n?e.jsx(De,{open:n,onReset:s,onDownloadPDF:()=>{}}):e.jsxs(e.Fragment,{children:[v===0&&e.jsx(fe,{checkout:o,onNextStep:i,onDeleteCart:c,onApplyDiscount:u,onIncreaseQuantity:m,onDecreaseQuantity:T}),v===1&&e.jsx($e,{checkout:o,onBackStep:l,onCreateBilling:p}),v===2&&C&&e.jsx(Pe,{checkout:o,onNextStep:i,onBackStep:l,onGotoStep:r,onApplyShipping:x,onReset:s})]})]})}function ko(){return e.jsxs(e.Fragment,{children:[e.jsx(Ze,{children:e.jsx("title",{children:" Checkout"})}),e.jsx(co,{})]})}export{ko as default};
