import{F as m,aK as E,aL as U,aD as k,aP as b,aN as _,aO as H,j as e,aQ as O,aR as Q,bv as se,dN as Pe,aM as re,af as V,ag as q,am as w,an as j,S as y,T as f,ar as F,al as ee,B as g,bN as ae,bL as Re,ae as a,ad as $e,b2 as X,dO as ie,ap as De,aq as W,aH as Ae,as as Ne,dP as le,ah as Me,ai as ze,aj as Be,ak as Fe,bZ as Oe,ay as I,dQ as We,b0 as Ee,b3 as Ue,bf as te,aI as ce,b7 as de,dB as _e,aB as He,bx as Qe,d7 as Ve,dR as qe,bU as Ge,aV as Ke,aW as Ye,W as Je}from"./index-8741151d.js";import{d as Ze}from"./_product-bb64f0dd.js";import{u as Xe}from"./use-checkout-3203734e.js";import{C as et}from"./CardContent-88d33063.js";import"./color-picker-eb304048.js";import{T as tt}from"./TableContainer-1e44fc6e.js";import{u as pe,C as ue,c as ot,f as nt,g as st,F as rt,A as at}from"./form-provider-ffcf404f.js";import{L as it,o as lt}from"./yup-0915a13c.js";import{P as ct}from"./payment-new-card-dialog-b5ed19bf.js";import{v as dt}from"./Switch-23bdf950.js";import{b as pt}from"./address-list-dialog-26d53743.js";import"./image-a38f243f.js";import"./CircularProgress-2d93a1d0.js";import"./DialogTitle-f5fddd1c.js";import"./DialogContent-f49a3da2.js";import"./transition-bee6630b.js";const ut=m.createContext({}),K=ut,xt=m.createContext({}),oe=xt;function ht(t){return E("MuiStep",t)}U("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const mt=["active","children","className","component","completed","disabled","expanded","index","last"],bt=t=>{const{classes:o,orientation:n,alternativeLabel:r,completed:s}=t;return Q({root:["root",n,r&&"alternativeLabel",s&&"completed"]},ht,o)},jt=k("div",{name:"MuiStep",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation],n.alternativeLabel&&o.alternativeLabel,n.completed&&o.completed]}})(({ownerState:t})=>b({},t.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})),yt=m.forwardRef(function(o,n){const r=_({props:o,name:"MuiStep"}),{active:s,children:i,className:l,component:c="div",completed:d,disabled:p,expanded:u=!1,index:x,last:h}=r,T=H(r,mt),{activeStep:L,connector:C,alternativeLabel:v,orientation:$,nonLinear:P}=m.useContext(K);let[S=!1,D=!1,A=!1]=[s,d,p];L===x?S=s!==void 0?s:!0:!P&&L>x?D=d!==void 0?d:!0:!P&&L<x&&(A=p!==void 0?p:!0);const M=m.useMemo(()=>({index:x,last:h,expanded:u,icon:x+1,active:S,completed:D,disabled:A}),[x,h,u,S,D,A]),N=b({},r,{active:S,orientation:$,alternativeLabel:v,completed:D,disabled:A,expanded:u,component:c}),z=bt(N),B=e.jsxs(jt,b({as:c,className:O(z.root,l),ref:n,ownerState:N},T,{children:[C&&v&&x!==0?C:null,i]}));return e.jsx(oe.Provider,{value:M,children:C&&!v&&x!==0?e.jsxs(m.Fragment,{children:[C,B]}):B})}),vt=yt,ft=se(e.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),Ct=se(e.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function St(t){return E("MuiStepIcon",t)}const gt=U("MuiStepIcon",["root","active","completed","error","text"]),J=gt;var ne;const Lt=["active","className","completed","error","icon"],It=t=>{const{classes:o,active:n,completed:r,error:s}=t;return Q({root:["root",n&&"active",r&&"completed",s&&"error"],text:["text"]},St,o)},Z=k(Pe,{name:"MuiStepIcon",slot:"Root",overridesResolver:(t,o)=>o.root})(({theme:t})=>({display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${J.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${J.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${J.error}`]:{color:(t.vars||t).palette.error.main}})),wt=k("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(t,o)=>o.text})(({theme:t})=>({fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily})),kt=m.forwardRef(function(o,n){const r=_({props:o,name:"MuiStepIcon"}),{active:s=!1,className:i,completed:l=!1,error:c=!1,icon:d}=r,p=H(r,Lt),u=b({},r,{active:s,completed:l,error:c}),x=It(u);if(typeof d=="number"||typeof d=="string"){const h=O(i,x.root);return c?e.jsx(Z,b({as:Ct,className:h,ref:n,ownerState:u},p)):l?e.jsx(Z,b({as:ft,className:h,ref:n,ownerState:u},p)):e.jsxs(Z,b({className:h,ref:n,ownerState:u},p,{children:[ne||(ne=e.jsx("circle",{cx:"12",cy:"12",r:"12"})),e.jsx(wt,{className:x.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:u,children:d})]}))}return d}),Tt=kt;function Pt(t){return E("MuiStepLabel",t)}const Rt=U("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),R=Rt,$t=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],Dt=t=>{const{classes:o,orientation:n,active:r,completed:s,error:i,disabled:l,alternativeLabel:c}=t;return Q({root:["root",n,i&&"error",l&&"disabled",c&&"alternativeLabel"],label:["label",r&&"active",s&&"completed",i&&"error",l&&"disabled",c&&"alternativeLabel"],iconContainer:["iconContainer",r&&"active",s&&"completed",i&&"error",l&&"disabled",c&&"alternativeLabel"],labelContainer:["labelContainer",c&&"alternativeLabel"]},Pt,o)},At=k("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation]]}})(({ownerState:t})=>b({display:"flex",alignItems:"center",[`&.${R.alternativeLabel}`]:{flexDirection:"column"},[`&.${R.disabled}`]:{cursor:"default"}},t.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),Nt=k("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(t,o)=>o.label})(({theme:t})=>b({},t.typography.body2,{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${R.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${R.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${R.alternativeLabel}`]:{marginTop:16},[`&.${R.error}`]:{color:(t.vars||t).palette.error.main}})),Mt=k("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(t,o)=>o.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${R.alternativeLabel}`]:{paddingRight:0}})),zt=k("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(t,o)=>o.labelContainer})(({theme:t})=>({width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${R.alternativeLabel}`]:{textAlign:"center"}})),xe=m.forwardRef(function(o,n){var r;const s=_({props:o,name:"MuiStepLabel"}),{children:i,className:l,componentsProps:c={},error:d=!1,icon:p,optional:u,slotProps:x={},StepIconComponent:h,StepIconProps:T}=s,L=H(s,$t),{alternativeLabel:C,orientation:v}=m.useContext(K),{active:$,disabled:P,completed:S,icon:D}=m.useContext(oe),A=p||D;let M=h;A&&!M&&(M=Tt);const N=b({},s,{active:$,alternativeLabel:C,completed:S,disabled:P,error:d,orientation:v}),z=Dt(N),B=(r=x.label)!=null?r:c.label;return e.jsxs(At,b({className:O(z.root,l),ref:n,ownerState:N},L,{children:[A||M?e.jsx(Mt,{className:z.iconContainer,ownerState:N,children:e.jsx(M,b({completed:S,active:$,error:d,icon:A},T))}):null,e.jsxs(zt,{className:z.labelContainer,ownerState:N,children:[i?e.jsx(Nt,b({ownerState:N},B,{className:O(z.label,B==null?void 0:B.className),children:i})):null,u]})]}))});xe.muiName="StepLabel";const Bt=xe;function Ft(t){return E("MuiStepConnector",t)}const Ot=U("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]),G=Ot,Wt=["className"],Et=t=>{const{classes:o,orientation:n,alternativeLabel:r,active:s,completed:i,disabled:l}=t,c={root:["root",n,r&&"alternativeLabel",s&&"active",i&&"completed",l&&"disabled"],line:["line",`line${re(n)}`]};return Q(c,Ft,o)},Ut=k("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation],n.alternativeLabel&&o.alternativeLabel,n.completed&&o.completed]}})(({ownerState:t})=>b({flex:"1 1 auto"},t.orientation==="vertical"&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:8+4,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),_t=k("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.line,o[`line${re(n.orientation)}`]]}})(({ownerState:t,theme:o})=>{const n=o.palette.mode==="light"?o.palette.grey[400]:o.palette.grey[600];return b({display:"block",borderColor:o.vars?o.vars.palette.StepConnector.border:n},t.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},t.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),Ht=m.forwardRef(function(o,n){const r=_({props:o,name:"MuiStepConnector"}),{className:s}=r,i=H(r,Wt),{alternativeLabel:l,orientation:c="horizontal"}=m.useContext(K),{active:d,disabled:p,completed:u}=m.useContext(oe),x=b({},r,{alternativeLabel:l,orientation:c,active:d,completed:u,disabled:p}),h=Et(x);return e.jsx(Ut,b({className:O(h.root,s),ref:n,ownerState:x},i,{children:e.jsx(_t,{className:h.line,ownerState:x})}))}),he=Ht;function Qt(t){return E("MuiStepper",t)}U("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);const Vt=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],qt=t=>{const{orientation:o,alternativeLabel:n,classes:r}=t;return Q({root:["root",o,n&&"alternativeLabel"]},Qt,r)},Gt=k("div",{name:"MuiStepper",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation],n.alternativeLabel&&o.alternativeLabel]}})(({ownerState:t})=>b({display:"flex"},t.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},t.orientation==="vertical"&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})),Kt=e.jsx(he,{}),Yt=m.forwardRef(function(o,n){const r=_({props:o,name:"MuiStepper"}),{activeStep:s=0,alternativeLabel:i=!1,children:l,className:c,component:d="div",connector:p=Kt,nonLinear:u=!1,orientation:x="horizontal"}=r,h=H(r,Vt),T=b({},r,{alternativeLabel:i,orientation:x,component:d}),L=qt(T),C=m.Children.toArray(l).filter(Boolean),v=C.map((P,S)=>m.cloneElement(P,b({index:S,last:S+1===C.length},P.props))),$=m.useMemo(()=>({activeStep:s,alternativeLabel:i,connector:p,nonLinear:u,orientation:x}),[s,i,p,u,x]);return e.jsx(K.Provider,{value:$,children:e.jsx(Gt,b({as:d,ownerState:T,className:O(L.root,c),ref:n},h,{children:v}))})}),Jt=Yt;function Y({total:t,onEdit:o,discount:n,subTotal:r,shipping:s,onApplyDiscount:i,enableEdit:l=!1,enableDiscount:c=!1}){const d=s!==null?"Free":"-";return e.jsxs(V,{sx:{mb:3},children:[e.jsx(q,{title:"Order Summary",action:l&&e.jsx(w,{size:"small",onClick:o,startIcon:e.jsx(j,{icon:"solar:pen-bold"}),children:"Edit"})}),e.jsx(et,{children:e.jsxs(y,{spacing:2,children:[e.jsxs(y,{direction:"row",justifyContent:"space-between",children:[e.jsx(f,{variant:"body2",sx:{color:"text.secondary"},children:"Sub Total"}),e.jsx(f,{variant:"subtitle2",children:F(r)})]}),e.jsxs(y,{direction:"row",justifyContent:"space-between",children:[e.jsx(f,{variant:"body2",sx:{color:"text.secondary"},children:"Discount"}),e.jsx(f,{variant:"subtitle2",children:n?F(-n):"-"})]}),e.jsxs(y,{direction:"row",justifyContent:"space-between",children:[e.jsx(f,{variant:"body2",sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(f,{variant:"subtitle2",children:s?F(s):d})]}),e.jsx(ee,{sx:{borderStyle:"dashed"}}),e.jsxs(y,{direction:"row",justifyContent:"space-between",children:[e.jsx(f,{variant:"subtitle1",children:"Total"}),e.jsxs(g,{sx:{textAlign:"right"},children:[e.jsx(f,{variant:"subtitle1",sx:{color:"error.main"},children:F(t)}),e.jsx(f,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),c&&i&&e.jsx(ae,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"",InputProps:{endAdornment:e.jsx(Re,{position:"end",children:e.jsx(w,{color:"primary",onClick:()=>i(5),sx:{mr:-.5},children:"Apply"})})}})]})})]})}Y.propTypes={discount:a.number,enableDiscount:a.bool,enableEdit:a.bool,onApplyDiscount:a.func,onEdit:a.func,shipping:a.number,subTotal:a.number,total:a.number};const me=m.forwardRef(({quantity:t,onIncrease:o,onDecrease:n,disabledIncrease:r,disabledDecrease:s,sx:i,...l},c)=>e.jsxs(y,{ref:c,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:.5,width:88,borderRadius:1,typography:"subtitle2",border:d=>`solid 1px ${$e(d.palette.grey[500],.2)}`,...i},...l,children:[e.jsx(X,{size:"small",onClick:n,disabled:s,sx:{borderRadius:.75},children:e.jsx(j,{icon:"eva:minus-fill",width:16})}),t,e.jsx(X,{size:"small",onClick:o,disabled:r,sx:{borderRadius:.75},children:e.jsx(j,{icon:"mingcute:add-line",width:16})})]}));me.propTypes={disabledDecrease:a.bool,disabledIncrease:a.bool,onDecrease:a.func,onIncrease:a.func,quantity:a.number,sx:a.object};const Zt=me;function be({row:t,onDelete:o,onDecrease:n,onIncrease:r}){const{name:s,size:i,price:l,colors:c,images:d=[],quantity:p,available:u,id:x}=t,h=ie();return e.jsxs(De,{children:[e.jsxs(W,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(Ae,{variant:"rounded",alt:s,src:d[0],sx:{width:64,height:64,mr:2}}),e.jsxs(y,{spacing:.5,children:[e.jsx(f,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:s}),e.jsxs(y,{direction:"row",alignItems:"center",sx:{typography:"body2",color:"text.secondary"},children:["size: ",e.jsxs(Ne,{sx:{ml:.5},children:[" ",i," "]}),e.jsx(ee,{orientation:"vertical",sx:{mx:1,height:16}})]})]})]}),e.jsx(W,{children:F(l)}),e.jsx(W,{children:e.jsxs(g,{sx:{width:88,textAlign:"right"},children:[e.jsx(Zt,{quantity:p,onDecrease:n,onIncrease:r,disabledDecrease:p<=1,disabledIncrease:p>=u}),e.jsxs(f,{variant:"caption",component:"div",sx:{color:"text.secondary",mt:1},children:["available: ",u]})]})}),e.jsx(W,{align:"right",children:F(l*p)}),e.jsx(W,{align:"right",sx:{px:1},children:e.jsx(X,{onClick:()=>{o(x),h(le())},children:e.jsx(j,{icon:"solar:trash-bin-trash-bold"})})})]})}be.propTypes={row:a.object,onDelete:a.func,onDecrease:a.func,onIncrease:a.func};const Xt=[{id:"product",label:"Product"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"totalAmount",label:"Total Price",align:"right"},{id:""}];function je({products:t,onDelete:o,onIncreaseQuantity:n,onDecreaseQuantity:r}){return e.jsx(tt,{sx:{overflow:"unset"},children:e.jsx(Me,{children:e.jsxs(ze,{sx:{minWidth:720},children:[e.jsx(Be,{headLabel:Xt}),e.jsx(Fe,{children:t.map(s=>e.jsx(be,{row:s,onDelete:o,onDecrease:()=>r(s.id),onIncrease:()=>n(s.id)},s.id))})]})})})}je.propTypes={onDelete:a.func,products:a.array,onDecreaseQuantity:a.func,onIncreaseQuantity:a.func};function ye({checkout:t,onNextStep:o,onDeleteCart:n,onApplyDiscount:r,onIncreaseQuantity:s,onDecreaseQuantity:i}){const{cart:l,total:c,discount:d,subTotal:p}=t,u=Oe(l.map(h=>h.quantity)),x=!l.length;return e.jsxs(I,{container:!0,spacing:3,children:[e.jsxs(I,{xs:12,md:8,children:[e.jsxs(V,{sx:{mb:3},children:[e.jsx(q,{title:e.jsxs(f,{variant:"h6",children:["Cart",e.jsxs(f,{component:"span",sx:{color:"text.secondary"},children:[" (",u," item)"]})]}),sx:{mb:3}}),x?e.jsx(We,{title:"Cart is Empty!",description:"Look like you have no items in your shopping cart.",imgUrl:"/assets/icons/empty/ic_cart.svg",sx:{pt:5,pb:10}}):e.jsx(je,{products:l,onDelete:n,onIncreaseQuantity:s,onDecreaseQuantity:i})]}),e.jsx(w,{component:Ee,href:Ue.product.root,color:"inherit",startIcon:e.jsx(j,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"})]}),e.jsxs(I,{xs:12,md:4,children:[e.jsx(Y,{enableDiscount:!0,total:c,discount:d,subTotal:p,onApplyDiscount:r}),e.jsx(w,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:!l.length,onClick:o,children:"Check Out"})]})]})}ye.propTypes={checkout:a.object,onNextStep:a.func,onDeleteCart:a.func,onApplyDiscount:a.func,onDecreaseQuantity:a.func,onIncreaseQuantity:a.func};const eo=k(he)(({theme:t})=>({top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)",[`& .${G.line}`]:{borderTopWidth:2,borderColor:t.palette.divider},[`&.${G.active}, &.${G.completed}`]:{[`& .${G.line}`]:{borderColor:t.palette.primary.main}}}));function ve({steps:t,activeStep:o,sx:n,...r}){return e.jsx(Jt,{alternativeLabel:!0,activeStep:o,connector:e.jsx(eo,{}),sx:{mb:{xs:3,md:5},...n},...r,children:t.map(s=>e.jsx(vt,{children:e.jsx(Bt,{StepIconComponent:fe,sx:{[`& .${R.label}`]:{fontWeight:"fontWeightSemiBold"}},children:s})},s))})}ve.propTypes={activeStep:a.number,steps:a.arrayOf(a.string),sx:a.object};function fe({active:t,completed:o}){return e.jsx(y,{alignItems:"center",justifyContent:"center",sx:{width:24,height:24,color:"text.disabled",...t&&{color:"primary.main"}},children:o?e.jsx(j,{icon:"eva:checkmark-fill",sx:{color:"primary.main"}}):e.jsx(g,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}fe.propTypes={active:a.bool,completed:a.bool};function Ce({options:t,onApplyShipping:o,...n}){const{control:r}=pe();return e.jsxs(V,{...n,children:[e.jsx(q,{title:"Delivery"}),e.jsx(ue,{name:"delivery",control:r,render:({field:s})=>e.jsx(g,{columnGap:2,rowGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},sx:{p:3},children:t.map(i=>e.jsx(Se,{option:i,selected:s.value===i.value,onClick:()=>{s.onChange(i.value),o(i.value)}},i.label))})})]})}Ce.propTypes={onApplyShipping:a.func,options:a.array};function Se({option:t,selected:o,...n}){const{value:r,label:s,description:i=""}=t;return e.jsxs(te,{variant:"outlined",sx:{p:2.5,cursor:"pointer",display:"flex",...o&&{boxShadow:l=>`0 0 0 2px ${l.palette.text.primary}`}},...n,children:[s==="Free"&&e.jsx(j,{icon:"carbon:bicycle",width:32}),s==="Standard"&&e.jsx(j,{icon:"carbon:delivery",width:32}),s==="Express"&&e.jsx(j,{icon:"carbon:rocket",width:32}),e.jsx(ce,{sx:{ml:2},primary:e.jsxs(y,{direction:"row",alignItems:"center",children:[e.jsx(g,{component:"span",sx:{flexGrow:1},children:s}),e.jsx(g,{component:"span",sx:{typography:"h6"},children:`AED ${r}`})]}),secondary:i,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}})]},r)}Se.propTypes={option:a.object,selected:a.bool};function ge({billing:t,onBackStep:o}){return e.jsxs(V,{sx:{mb:3},children:[e.jsx(q,{title:"Address",action:e.jsx(w,{size:"small",startIcon:e.jsx(j,{icon:"solar:pen-bold"}),onClick:o,children:"Edit"})}),e.jsxs(y,{spacing:1,sx:{p:3},children:[e.jsxs(g,{sx:{typography:"subtitle2"},children:[`${t==null?void 0:t.name} `,e.jsxs(g,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:["(",t==null?void 0:t.addressType,")"]})]}),e.jsx(g,{sx:{color:"text.secondary",typography:"body2"},children:t==null?void 0:t.fullAddress}),e.jsx(g,{sx:{color:"text.secondary",typography:"body2"},children:t==null?void 0:t.phoneNumber})]})]})}ge.propTypes={billing:a.object,onBackStep:a.func};function Le({options:t,cardOptions:o,...n}){const{control:r}=pe(),s=de();return e.jsxs(e.Fragment,{children:[e.jsxs(V,{...n,children:[e.jsx(q,{title:"Payment"}),e.jsx(ue,{name:"payment",control:r,render:({field:i,fieldState:{error:l}})=>e.jsxs(y,{sx:{px:3,pb:3},children:[t.map(c=>e.jsx(Ie,{option:c,onOpen:s.onTrue,cardOptions:o,selected:c.value==="cash",isCredit:c.value==="credit"&&i.value==="credit",onClick:()=>{i.onChange(c.value)}},c.label)),!!l&&e.jsx(_e,{error:!0,sx:{pt:1,px:2},children:l.message})]})})]}),e.jsx(ct,{open:s.value,onClose:s.onFalse})]})}Le.propTypes={cardOptions:a.array,options:a.array};function Ie({option:t,cardOptions:o,selected:n,isCredit:r,onOpen:s,...i}){const{value:l,label:c,description:d}=t;return e.jsxs(te,{variant:"outlined",sx:{p:2.5,mt:2.5,cursor:"pointer",...n&&{boxShadow:p=>`0 0 0 2px ${p.palette.text.primary}`}},...i,children:[e.jsx(ce,{primary:e.jsxs(y,{direction:"row",alignItems:"center",children:[e.jsx(g,{component:"span",sx:{flexGrow:1},children:c}),e.jsxs(y,{spacing:1,direction:"row",alignItems:"center",children:[l==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(j,{icon:"logos:mastercard",width:24}),",",e.jsx(j,{icon:"logos:visa",width:24})]}),l==="paypal"&&e.jsx(j,{icon:"logos:paypal",width:24}),l==="cash"&&e.jsx(j,{icon:"solar:wad-of-money-bold",width:32})]})]}),secondary:d,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}}),r&&e.jsxs(y,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(ae,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:o.map(p=>e.jsx("option",{value:p.value,children:p.label},p.value))}),e.jsx(w,{size:"small",color:"primary",startIcon:e.jsx(j,{icon:"mingcute:add-line"}),onClick:s,children:"Add New Card"})]})]},l)}Ie.propTypes={cardOptions:a.array,isCredit:a.bool,onOpen:a.func,option:a.object,selected:a.bool};const to=[{value:20,label:"1-2 Hour Delivery"},{value:10,label:"Same Day Delivery"},{value:0,label:"Next Day delivery"}],oo=[{value:"cash",label:"Cash",description:"Pay with cash when your order is delivered."}],no=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function we({checkout:t,onReset:o,onNextStep:n,onBackStep:r,onGotoStep:s,onApplyShipping:i}){const{total:l,discount:c,subTotal:d,shipping:p,billing:u,cart:x,totalItems:h}=t,T=ot().shape({payment:nt().required("Payment is required!")}),L={delivery:p,payment:""},C=st({resolver:lt(T),defaultValues:L}),{handleSubmit:v,formState:{isSubmitting:$}}=C,P=v(async S=>{try{He.post("/orders",{items:x,subTotal:d,shipping:p,discount:c,totalAmount:l,totalQuantity:h,customer:{name:u.name,email:u.email},shippingAddress:{fullAddress:u.fullAddress,phoneNumber:u.phoneNumber}}),n(),o(),console.info("DATA",S)}catch(D){console.error(D)}});return e.jsx(rt,{methods:C,onSubmit:P,children:e.jsxs(I,{container:!0,spacing:3,children:[e.jsxs(I,{xs:12,md:8,children:[e.jsx(Ce,{onApplyShipping:i,options:to}),e.jsx(Le,{cardOptions:no,options:oo,sx:{my:3}}),e.jsx(w,{size:"small",color:"inherit",onClick:r,startIcon:e.jsx(j,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),e.jsxs(I,{xs:12,md:4,children:[e.jsx(ge,{onBackStep:r,billing:u}),e.jsx(Y,{enableEdit:!0,total:l,subTotal:d,discount:c,shipping:p,onEdit:()=>s(0)}),e.jsx(it,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:$,children:"Complete Order"})]})]})})}we.propTypes={onReset:a.func,checkout:a.object,onBackStep:a.func,onGotoStep:a.func,onNextStep:a.func,onApplyShipping:a.func};function ke({open:t,onReset:o,onDownloadPDF:n}){const r=e.jsxs(y,{spacing:5,sx:{m:"auto",maxWidth:480,textAlign:"center",px:{xs:2,sm:0}},children:[e.jsx(f,{variant:"h4",children:"Thank you for your purchase!"}),e.jsx(qe,{sx:{height:260}}),e.jsxs(f,{children:["Thanks for placing order",e.jsx("br",{}),e.jsx("br",{}),e.jsx(Ge,{children:"01dc1370-3df6-11eb-b378-0242ac130002"}),e.jsx("br",{}),e.jsx("br",{}),"We will send you a notification within 5 days when it ships.",e.jsx("br",{})," If you have any question or queries then fell to get in contact us. ",e.jsx("br",{})," ",e.jsx("br",{}),"All the best,"]}),e.jsx(ee,{sx:{borderStyle:"dashed"}}),e.jsxs(y,{spacing:2,justifyContent:"space-between",direction:{xs:"column-reverse",sm:"row"},children:[e.jsx(w,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",onClick:o,startIcon:e.jsx(j,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"}),e.jsx(w,{fullWidth:!0,size:"large",variant:"contained",startIcon:e.jsx(j,{icon:"eva:cloud-download-fill"}),onClick:n,children:"Download as PDF"})]})]});return e.jsx(at,{children:t&&e.jsx(Qe,{fullWidth:!0,fullScreen:!0,open:t,PaperComponent:s=>e.jsx(g,{component:Ve.div,...dt({distance:120,durationIn:.32,durationOut:.24,easeIn:"easeInOut"}).inUp,sx:{width:1,height:1,p:{md:3}},children:e.jsx(te,{...s,children:s.children})}),children:r})})}ke.propTypes={open:a.bool,onReset:a.func,children:a.node,onDownloadPDF:a.func};function Te({checkout:t,onBackStep:o,onCreateBilling:n}){const r=de(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{container:!0,spacing:3,children:[e.jsx(I,{xs:12,md:8,children:e.jsxs(y,{direction:"row",justifyContent:"space-between",children:[e.jsx(w,{size:"small",color:"inherit",onClick:o,startIcon:e.jsx(j,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),e.jsx(w,{size:"small",color:"primary",onClick:r.onTrue,startIcon:e.jsx(j,{icon:"mingcute:add-line"}),children:"New Address"})]})}),e.jsx(I,{xs:12,md:4,children:e.jsx(Y,{total:t.total,subTotal:t.subTotal,discount:t.discount})})]}),e.jsx(pt,{open:r.value,onClose:r.onFalse,onCreate:n})]})}Te.propTypes={checkout:a.object,onBackStep:a.func,onCreateBilling:a.func};function so(t){const o=ie(),n=m.useCallback(()=>{t.length&&o(le(t))},[t,o]);return m.useEffect(()=>{n()},[n]),null}function ro(){const t=Ke(),{checkout:o,completed:n,onResetAll:r,onGotoStep:s,onNextStep:i,onBackStep:l,onDeleteCart:c,onResetBilling:d,onCreateBilling:p,onApplyDiscount:u,onApplyShipping:x,onIncreaseQuantity:h,onDecreaseQuantity:T}=Xe(),{cart:L,billing:C,activeStep:v}=o;return so(L),m.useEffect(()=>{v===1&&d()},[v,d]),e.jsxs(Ye,{maxWidth:t.themeStretch?!1:"lg",sx:{mb:10},children:[e.jsx(f,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Checkout"}),e.jsx(I,{container:!0,justifyContent:n?"center":"flex-start",children:e.jsx(I,{xs:12,md:8,children:e.jsx(ve,{activeStep:v,steps:Ze})})}),n?e.jsx(ke,{open:n,onReset:r,onDownloadPDF:()=>{}}):e.jsxs(e.Fragment,{children:[v===0&&e.jsx(ye,{checkout:o,onNextStep:i,onDeleteCart:c,onApplyDiscount:u,onIncreaseQuantity:h,onDecreaseQuantity:T}),v===1&&e.jsx(Te,{checkout:o,onBackStep:l,onCreateBilling:p}),v===2&&C&&e.jsx(we,{checkout:o,onNextStep:i,onBackStep:l,onGotoStep:s,onApplyShipping:x,onReset:r})]})]})}function go(){return e.jsxs(e.Fragment,{children:[e.jsx(Je,{children:e.jsx("title",{children:" Checkout"})}),e.jsx(ro,{})]})}export{go as default};
