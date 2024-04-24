import{a9 as O,aa as W,ab as L,D as m,ao as U,ad as _,af as h,ae as e,ag as M,ai as V,bz as se,bA as Pe,ak as re,aL as Q,b3 as q,az as k,aC as j,aw as y,ac as C,bB as F,aP as ee,aq as g,b5 as ae,bC as $e,as as a,am as Re,b4 as Z,bD as ie,bE as De,bF as G,aY as Ae,a$ as Ne,bG as le,bH as Me,bI as ze,bJ as Be,bK as Ee,bL as Fe,aG as I,bM as Oe,aA as We,aB as Ue,bN as ce,bO as de,aV as te,bs as pe,bu as ue,bP as _e,bQ as Ve,bR as Ge,bS as Qe,bw as qe,bT as He,bU as Ye,bV as Je,bW as Ke,bX as Xe,ar as Ze,ay as et,bY as tt,aD as ot,aQ as nt,aE as st,b7 as rt}from"./index-1a7acf6a.js";import{e as at}from"./_product-fc4b357e.js";import{u as it}from"./use-checkout-57faf195.js";import{C as lt}from"./color-picker-150a21b1.js";import{T as ct}from"./TableContainer-e864fea9.js";import{P as dt}from"./payment-new-card-dialog-ea5a9e52.js";import{A as pt}from"./address-list-dialog-72599575.js";import"./DialogTitle-94bb0998.js";import"./DialogContent-2f3858c4.js";function ut(t){return O("MuiCardContent",t)}W("MuiCardContent",["root"]);const xt=["className","component"],ht=t=>{const{classes:o}=t;return V({root:["root"]},ut,o)},mt=L("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,o)=>o.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),bt=m.forwardRef(function(o,n){const s=U({props:o,name:"MuiCardContent"}),{className:r,component:i="div"}=s,l=_(s,xt),c=h({},s,{component:i}),d=ht(c);return e.jsx(mt,h({as:i,className:M(d.root,r),ownerState:c,ref:n},l))}),jt=bt,yt=m.createContext({}),Y=yt,vt=m.createContext({}),oe=vt;function Ct(t){return O("MuiStep",t)}W("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const ft=["active","children","className","component","completed","disabled","expanded","index","last"],St=t=>{const{classes:o,orientation:n,alternativeLabel:s,completed:r}=t;return V({root:["root",n,s&&"alternativeLabel",r&&"completed"]},Ct,o)},gt=L("div",{name:"MuiStep",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation],n.alternativeLabel&&o.alternativeLabel,n.completed&&o.completed]}})(({ownerState:t})=>h({},t.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})),Lt=m.forwardRef(function(o,n){const s=U({props:o,name:"MuiStep"}),{active:r,children:i,className:l,component:c="div",completed:d,disabled:p,expanded:u=!1,index:x,last:b}=s,T=_(s,ft),{activeStep:w,connector:f,alternativeLabel:v,orientation:R,nonLinear:P}=m.useContext(Y);let[S=!1,D=!1,A=!1]=[r,d,p];w===x?S=r!==void 0?r:!0:!P&&w>x?D=d!==void 0?d:!0:!P&&w<x&&(A=p!==void 0?p:!0);const z=m.useMemo(()=>({index:x,last:b,expanded:u,icon:x+1,active:S,completed:D,disabled:A}),[x,b,u,S,D,A]),N=h({},s,{active:S,orientation:R,alternativeLabel:v,completed:D,disabled:A,expanded:u,component:c}),B=St(N),E=e.jsxs(gt,h({as:c,className:M(B.root,l),ref:n,ownerState:N},T,{children:[f&&v&&x!==0?f:null,i]}));return e.jsx(oe.Provider,{value:z,children:f&&!v&&x!==0?e.jsxs(m.Fragment,{children:[f,E]}):E})}),wt=Lt,It=se(e.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),kt=se(e.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function Tt(t){return O("MuiStepIcon",t)}const Pt=W("MuiStepIcon",["root","active","completed","error","text"]),K=Pt;var ne;const $t=["active","className","completed","error","icon"],Rt=t=>{const{classes:o,active:n,completed:s,error:r}=t;return V({root:["root",n&&"active",s&&"completed",r&&"error"],text:["text"]},Tt,o)},X=L(Pe,{name:"MuiStepIcon",slot:"Root",overridesResolver:(t,o)=>o.root})(({theme:t})=>({display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${K.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${K.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${K.error}`]:{color:(t.vars||t).palette.error.main}})),Dt=L("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(t,o)=>o.text})(({theme:t})=>({fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily})),At=m.forwardRef(function(o,n){const s=U({props:o,name:"MuiStepIcon"}),{active:r=!1,className:i,completed:l=!1,error:c=!1,icon:d}=s,p=_(s,$t),u=h({},s,{active:r,completed:l,error:c}),x=Rt(u);if(typeof d=="number"||typeof d=="string"){const b=M(i,x.root);return c?e.jsx(X,h({as:kt,className:b,ref:n,ownerState:u},p)):l?e.jsx(X,h({as:It,className:b,ref:n,ownerState:u},p)):e.jsxs(X,h({className:b,ref:n,ownerState:u},p,{children:[ne||(ne=e.jsx("circle",{cx:"12",cy:"12",r:"12"})),e.jsx(Dt,{className:x.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:u,children:d})]}))}return d}),Nt=At;function Mt(t){return O("MuiStepLabel",t)}const zt=W("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),$=zt,Bt=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],Et=t=>{const{classes:o,orientation:n,active:s,completed:r,error:i,disabled:l,alternativeLabel:c}=t;return V({root:["root",n,i&&"error",l&&"disabled",c&&"alternativeLabel"],label:["label",s&&"active",r&&"completed",i&&"error",l&&"disabled",c&&"alternativeLabel"],iconContainer:["iconContainer",s&&"active",r&&"completed",i&&"error",l&&"disabled",c&&"alternativeLabel"],labelContainer:["labelContainer",c&&"alternativeLabel"]},Mt,o)},Ft=L("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation]]}})(({ownerState:t})=>h({display:"flex",alignItems:"center",[`&.${$.alternativeLabel}`]:{flexDirection:"column"},[`&.${$.disabled}`]:{cursor:"default"}},t.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),Ot=L("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(t,o)=>o.label})(({theme:t})=>h({},t.typography.body2,{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${$.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${$.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${$.alternativeLabel}`]:{marginTop:16},[`&.${$.error}`]:{color:(t.vars||t).palette.error.main}})),Wt=L("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(t,o)=>o.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${$.alternativeLabel}`]:{paddingRight:0}})),Ut=L("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(t,o)=>o.labelContainer})(({theme:t})=>({width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${$.alternativeLabel}`]:{textAlign:"center"}})),xe=m.forwardRef(function(o,n){var s;const r=U({props:o,name:"MuiStepLabel"}),{children:i,className:l,componentsProps:c={},error:d=!1,icon:p,optional:u,slotProps:x={},StepIconComponent:b,StepIconProps:T}=r,w=_(r,Bt),{alternativeLabel:f,orientation:v}=m.useContext(Y),{active:R,disabled:P,completed:S,icon:D}=m.useContext(oe),A=p||D;let z=b;A&&!z&&(z=Nt);const N=h({},r,{active:R,alternativeLabel:f,completed:S,disabled:P,error:d,orientation:v}),B=Et(N),E=(s=x.label)!=null?s:c.label;return e.jsxs(Ft,h({className:M(B.root,l),ref:n,ownerState:N},w,{children:[A||z?e.jsx(Wt,{className:B.iconContainer,ownerState:N,children:e.jsx(z,h({completed:S,active:R,error:d,icon:A},T))}):null,e.jsxs(Ut,{className:B.labelContainer,ownerState:N,children:[i?e.jsx(Ot,h({ownerState:N},E,{className:M(B.label,E==null?void 0:E.className),children:i})):null,u]})]}))});xe.muiName="StepLabel";const _t=xe;function Vt(t){return O("MuiStepConnector",t)}const Gt=W("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]),H=Gt,Qt=["className"],qt=t=>{const{classes:o,orientation:n,alternativeLabel:s,active:r,completed:i,disabled:l}=t,c={root:["root",n,s&&"alternativeLabel",r&&"active",i&&"completed",l&&"disabled"],line:["line",`line${re(n)}`]};return V(c,Vt,o)},Ht=L("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation],n.alternativeLabel&&o.alternativeLabel,n.completed&&o.completed]}})(({ownerState:t})=>h({flex:"1 1 auto"},t.orientation==="vertical"&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:8+4,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),Yt=L("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.line,o[`line${re(n.orientation)}`]]}})(({ownerState:t,theme:o})=>{const n=o.palette.mode==="light"?o.palette.grey[400]:o.palette.grey[600];return h({display:"block",borderColor:o.vars?o.vars.palette.StepConnector.border:n},t.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},t.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),Jt=m.forwardRef(function(o,n){const s=U({props:o,name:"MuiStepConnector"}),{className:r}=s,i=_(s,Qt),{alternativeLabel:l,orientation:c="horizontal"}=m.useContext(Y),{active:d,disabled:p,completed:u}=m.useContext(oe),x=h({},s,{alternativeLabel:l,orientation:c,active:d,completed:u,disabled:p}),b=qt(x);return e.jsx(Ht,h({className:M(b.root,r),ref:n,ownerState:x},i,{children:e.jsx(Yt,{className:b.line,ownerState:x})}))}),he=Jt;function Kt(t){return O("MuiStepper",t)}W("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);const Xt=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],Zt=t=>{const{orientation:o,alternativeLabel:n,classes:s}=t;return V({root:["root",o,n&&"alternativeLabel"]},Kt,s)},eo=L("div",{name:"MuiStepper",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.orientation],n.alternativeLabel&&o.alternativeLabel]}})(({ownerState:t})=>h({display:"flex"},t.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},t.orientation==="vertical"&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})),to=e.jsx(he,{}),oo=m.forwardRef(function(o,n){const s=U({props:o,name:"MuiStepper"}),{activeStep:r=0,alternativeLabel:i=!1,children:l,className:c,component:d="div",connector:p=to,nonLinear:u=!1,orientation:x="horizontal"}=s,b=_(s,Xt),T=h({},s,{alternativeLabel:i,orientation:x,component:d}),w=Zt(T),f=m.Children.toArray(l).filter(Boolean),v=f.map((P,S)=>m.cloneElement(P,h({index:S,last:S+1===f.length},P.props))),R=m.useMemo(()=>({activeStep:r,alternativeLabel:i,connector:p,nonLinear:u,orientation:x}),[r,i,p,u,x]);return e.jsx(Y.Provider,{value:R,children:e.jsx(eo,h({as:d,ownerState:T,className:M(w.root,c),ref:n},b,{children:v}))})}),no=oo;function J({total:t,onEdit:o,discount:n,subTotal:s,shipping:r,onApplyDiscount:i,enableEdit:l=!1,enableDiscount:c=!1}){const d=r!==null?"Free":"-";return e.jsxs(Q,{sx:{mb:3},children:[e.jsx(q,{title:"Order Summary",action:l&&e.jsx(k,{size:"small",onClick:o,startIcon:e.jsx(j,{icon:"solar:pen-bold"}),children:"Edit"})}),e.jsx(jt,{children:e.jsxs(y,{spacing:2,children:[e.jsxs(y,{direction:"row",justifyContent:"space-between",children:[e.jsx(C,{variant:"body2",sx:{color:"text.secondary"},children:"Sub Total"}),e.jsx(C,{variant:"subtitle2",children:F(s)})]}),e.jsxs(y,{direction:"row",justifyContent:"space-between",children:[e.jsx(C,{variant:"body2",sx:{color:"text.secondary"},children:"Discount"}),e.jsx(C,{variant:"subtitle2",children:n?F(-n):"-"})]}),e.jsxs(y,{direction:"row",justifyContent:"space-between",children:[e.jsx(C,{variant:"body2",sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(C,{variant:"subtitle2",children:r?F(r):d})]}),e.jsx(ee,{sx:{borderStyle:"dashed"}}),e.jsxs(y,{direction:"row",justifyContent:"space-between",children:[e.jsx(C,{variant:"subtitle1",children:"Total"}),e.jsxs(g,{sx:{textAlign:"right"},children:[e.jsx(C,{variant:"subtitle1",sx:{color:"error.main"},children:F(t)}),e.jsx(C,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),c&&i&&e.jsx(ae,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"DISCOUNT5",InputProps:{endAdornment:e.jsx($e,{position:"end",children:e.jsx(k,{color:"primary",onClick:()=>i(5),sx:{mr:-.5},children:"Apply"})})}})]})})]})}J.propTypes={discount:a.number,enableDiscount:a.bool,enableEdit:a.bool,onApplyDiscount:a.func,onEdit:a.func,shipping:a.number,subTotal:a.number,total:a.number};const me=m.forwardRef(({quantity:t,onIncrease:o,onDecrease:n,disabledIncrease:s,disabledDecrease:r,sx:i,...l},c)=>e.jsxs(y,{ref:c,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:.5,width:88,borderRadius:1,typography:"subtitle2",border:d=>`solid 1px ${Re(d.palette.grey[500],.2)}`,...i},...l,children:[e.jsx(Z,{size:"small",onClick:n,disabled:r,sx:{borderRadius:.75},children:e.jsx(j,{icon:"eva:minus-fill",width:16})}),t,e.jsx(Z,{size:"small",onClick:o,disabled:s,sx:{borderRadius:.75},children:e.jsx(j,{icon:"mingcute:add-line",width:16})})]}));me.propTypes={disabledDecrease:a.bool,disabledIncrease:a.bool,onDecrease:a.func,onIncrease:a.func,quantity:a.number,sx:a.object};const so=me;function be({row:t,onDelete:o,onDecrease:n,onIncrease:s}){const{name:r,size:i,salePrice:l,colors:c,images:d,quantity:p,available:u,id:x}=t,b=ie();return e.jsxs(De,{children:[e.jsxs(G,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(Ae,{variant:"rounded",alt:r,src:d[0],sx:{width:64,height:64,mr:2}}),e.jsxs(y,{spacing:.5,children:[e.jsx(C,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:r}),e.jsxs(y,{direction:"row",alignItems:"center",sx:{typography:"body2",color:"text.secondary"},children:["size: ",e.jsxs(Ne,{sx:{ml:.5},children:[" ",i," "]}),e.jsx(ee,{orientation:"vertical",sx:{mx:1,height:16}}),e.jsx(lt,{colors:c})]})]})]}),e.jsx(G,{children:F(l)}),e.jsx(G,{children:e.jsxs(g,{sx:{width:88,textAlign:"right"},children:[e.jsx(so,{quantity:p,onDecrease:n,onIncrease:s,disabledDecrease:p<=1,disabledIncrease:p>=u}),e.jsxs(C,{variant:"caption",component:"div",sx:{color:"text.secondary",mt:1},children:["available: ",u]})]})}),e.jsx(G,{align:"right",children:F(l*p)}),e.jsx(G,{align:"right",sx:{px:1},children:e.jsx(Z,{onClick:()=>{o(x),b(le())},children:e.jsx(j,{icon:"solar:trash-bin-trash-bold"})})})]})}be.propTypes={row:a.object,onDelete:a.func,onDecrease:a.func,onIncrease:a.func};const ro=[{id:"product",label:"Product"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"totalAmount",label:"Total Price",align:"right"},{id:""}];function je({products:t,onDelete:o,onIncreaseQuantity:n,onDecreaseQuantity:s}){return e.jsx(ct,{sx:{overflow:"unset"},children:e.jsx(Me,{children:e.jsxs(ze,{sx:{minWidth:720},children:[e.jsx(Be,{headLabel:ro}),e.jsx(Ee,{children:t.map(r=>e.jsx(be,{row:r,onDelete:o,onDecrease:()=>s(r.id),onIncrease:()=>n(r.id)},r.id))})]})})})}je.propTypes={onDelete:a.func,products:a.array,onDecreaseQuantity:a.func,onIncreaseQuantity:a.func};function ye({checkout:t,onNextStep:o,onDeleteCart:n,onApplyDiscount:s,onIncreaseQuantity:r,onDecreaseQuantity:i}){const{cart:l,total:c,discount:d,subTotal:p}=t,u=Fe(l.map(b=>b.quantity)),x=!l.length;return e.jsxs(I,{container:!0,spacing:3,children:[e.jsxs(I,{xs:12,md:8,children:[e.jsxs(Q,{sx:{mb:3},children:[e.jsx(q,{title:e.jsxs(C,{variant:"h6",children:["Cart",e.jsxs(C,{component:"span",sx:{color:"text.secondary"},children:[" (",u," item)"]})]}),sx:{mb:3}}),x?e.jsx(Oe,{title:"Cart is Empty!",description:"Look like you have no items in your shopping cart.",imgUrl:"/assets/icons/empty/ic_cart.svg",sx:{pt:5,pb:10}}):e.jsx(je,{products:l,onDelete:n,onIncreaseQuantity:r,onDecreaseQuantity:i})]}),e.jsx(k,{component:We,href:Ue.product.root,color:"inherit",startIcon:e.jsx(j,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"})]}),e.jsxs(I,{xs:12,md:4,children:[e.jsx(J,{enableDiscount:!0,total:c,discount:d,subTotal:p,onApplyDiscount:s}),e.jsx(k,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:!l.length,onClick:o,children:"Check Out"})]})]})}ye.propTypes={checkout:a.object,onNextStep:a.func,onDeleteCart:a.func,onApplyDiscount:a.func,onDecreaseQuantity:a.func,onIncreaseQuantity:a.func};const ao=L(he)(({theme:t})=>({top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)",[`& .${H.line}`]:{borderTopWidth:2,borderColor:t.palette.divider},[`&.${H.active}, &.${H.completed}`]:{[`& .${H.line}`]:{borderColor:t.palette.primary.main}}}));function ve({steps:t,activeStep:o,sx:n,...s}){return e.jsx(no,{alternativeLabel:!0,activeStep:o,connector:e.jsx(ao,{}),sx:{mb:{xs:3,md:5},...n},...s,children:t.map(r=>e.jsx(wt,{children:e.jsx(_t,{StepIconComponent:Ce,sx:{[`& .${$.label}`]:{fontWeight:"fontWeightSemiBold"}},children:r})},r))})}ve.propTypes={activeStep:a.number,steps:a.arrayOf(a.string),sx:a.object};function Ce({active:t,completed:o}){return e.jsx(y,{alignItems:"center",justifyContent:"center",sx:{width:24,height:24,color:"text.disabled",...t&&{color:"primary.main"}},children:o?e.jsx(j,{icon:"eva:checkmark-fill",sx:{color:"primary.main"}}):e.jsx(g,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}Ce.propTypes={active:a.bool,completed:a.bool};function fe({options:t,onApplyShipping:o,...n}){const{control:s}=ce();return e.jsxs(Q,{...n,children:[e.jsx(q,{title:"Delivery"}),e.jsx(de,{name:"delivery",control:s,render:({field:r})=>e.jsx(g,{columnGap:2,rowGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},sx:{p:3},children:t.map(i=>e.jsx(Se,{option:i,selected:r.value===i.value,onClick:()=>{r.onChange(i.value),o(i.value)}},i.label))})})]})}fe.propTypes={onApplyShipping:a.func,options:a.array};function Se({option:t,selected:o,...n}){const{value:s,label:r,description:i}=t;return e.jsxs(te,{variant:"outlined",sx:{p:2.5,cursor:"pointer",display:"flex",...o&&{boxShadow:l=>`0 0 0 2px ${l.palette.text.primary}`}},...n,children:[r==="Free"&&e.jsx(j,{icon:"carbon:bicycle",width:32}),r==="Standard"&&e.jsx(j,{icon:"carbon:delivery",width:32}),r==="Express"&&e.jsx(j,{icon:"carbon:rocket",width:32}),e.jsx(pe,{sx:{ml:2},primary:e.jsxs(y,{direction:"row",alignItems:"center",children:[e.jsx(g,{component:"span",sx:{flexGrow:1},children:r}),e.jsx(g,{component:"span",sx:{typography:"h6"},children:`AED ${s}`})]}),secondary:i,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}})]},s)}Se.propTypes={option:a.object,selected:a.bool};function ge({billing:t,onBackStep:o}){return e.jsxs(Q,{sx:{mb:3},children:[e.jsx(q,{title:"Address",action:e.jsx(k,{size:"small",startIcon:e.jsx(j,{icon:"solar:pen-bold"}),onClick:o,children:"Edit"})}),e.jsxs(y,{spacing:1,sx:{p:3},children:[e.jsxs(g,{sx:{typography:"subtitle2"},children:[`${t==null?void 0:t.name} `,e.jsxs(g,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:["(",t==null?void 0:t.addressType,")"]})]}),e.jsx(g,{sx:{color:"text.secondary",typography:"body2"},children:t==null?void 0:t.fullAddress}),e.jsx(g,{sx:{color:"text.secondary",typography:"body2"},children:t==null?void 0:t.phoneNumber})]})]})}ge.propTypes={billing:a.object,onBackStep:a.func};function Le({options:t,cardOptions:o,...n}){const{control:s}=ce(),r=ue();return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{...n,children:[e.jsx(q,{title:"Payment"}),e.jsx(de,{name:"payment",control:s,render:({field:i,fieldState:{error:l}})=>e.jsxs(y,{sx:{px:3,pb:3},children:[t.map(c=>e.jsx(we,{option:c,onOpen:r.onTrue,cardOptions:o,selected:c.value==="cash",isCredit:c.value==="credit"&&i.value==="credit",onClick:()=>{i.onChange(c.value)}},c.label)),!!l&&e.jsx(_e,{error:!0,sx:{pt:1,px:2},children:l.message})]})})]}),e.jsx(dt,{open:r.value,onClose:r.onFalse})]})}Le.propTypes={cardOptions:a.array,options:a.array};function we({option:t,cardOptions:o,selected:n,isCredit:s,onOpen:r,...i}){const{value:l,label:c,description:d}=t;return e.jsxs(te,{variant:"outlined",sx:{p:2.5,mt:2.5,cursor:"pointer",...n&&{boxShadow:p=>`0 0 0 2px ${p.palette.text.primary}`}},...i,children:[e.jsx(pe,{primary:e.jsxs(y,{direction:"row",alignItems:"center",children:[e.jsx(g,{component:"span",sx:{flexGrow:1},children:c}),e.jsxs(y,{spacing:1,direction:"row",alignItems:"center",children:[l==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(j,{icon:"logos:mastercard",width:24}),",",e.jsx(j,{icon:"logos:visa",width:24})]}),l==="paypal"&&e.jsx(j,{icon:"logos:paypal",width:24}),l==="cash"&&e.jsx(j,{icon:"solar:wad-of-money-bold",width:32})]})]}),secondary:d,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}}),s&&e.jsxs(y,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(ae,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:o.map(p=>e.jsx("option",{value:p.value,children:p.label},p.value))}),e.jsx(k,{size:"small",color:"primary",startIcon:e.jsx(j,{icon:"mingcute:add-line"}),onClick:r,children:"Add New Card"})]})]},l)}we.propTypes={cardOptions:a.array,isCredit:a.bool,onOpen:a.func,option:a.object,selected:a.bool};const io=[{value:0,label:"Free",description:"5-7 Days delivery"},{value:10,label:"Standard",description:"3-5 Days delivery"},{value:20,label:"Express",description:"2-3 Days delivery"}],lo=[{value:"cash",label:"Cash",description:"Pay with cash when your order is delivered."}],co=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function Ie({checkout:t,onReset:o,onNextStep:n,onBackStep:s,onGotoStep:r,onApplyShipping:i}){const{total:l,discount:c,subTotal:d,shipping:p,billing:u,cart:x,totalItems:b}=t,T=Ve().shape({payment:Ge().required("Payment is required!")}),w={delivery:p,payment:""},f=Qe({resolver:Je(T),defaultValues:w}),{handleSubmit:v,formState:{isSubmitting:R}}=f,P=v(async S=>{try{qe.post("/orders",{items:x,subTotal:d,shipping:p,discount:c,totalAmount:l,totalQuantity:b,customer:{name:u.name,email:u.email},shippingAddress:{fullAddress:u.fullAddress,phoneNumber:u.phoneNumber}}),n(),o(),console.info("DATA",S)}catch(D){console.error(D)}});return e.jsx(He,{methods:f,onSubmit:P,children:e.jsxs(I,{container:!0,spacing:3,children:[e.jsxs(I,{xs:12,md:8,children:[e.jsx(fe,{onApplyShipping:i,options:io}),e.jsx(Le,{cardOptions:co,options:lo,sx:{my:3}}),e.jsx(k,{size:"small",color:"inherit",onClick:s,startIcon:e.jsx(j,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),e.jsxs(I,{xs:12,md:4,children:[e.jsx(ge,{onBackStep:s,billing:u}),e.jsx(J,{enableEdit:!0,total:l,subTotal:d,discount:c,shipping:p,onEdit:()=>r(0)}),e.jsx(Ye,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:R,children:"Complete Order"})]})]})})}Ie.propTypes={onReset:a.func,checkout:a.object,onBackStep:a.func,onGotoStep:a.func,onNextStep:a.func,onApplyShipping:a.func};function ke({open:t,onReset:o,onDownloadPDF:n}){const s=e.jsxs(y,{spacing:5,sx:{m:"auto",maxWidth:480,textAlign:"center",px:{xs:2,sm:0}},children:[e.jsx(C,{variant:"h4",children:"Thank you for your purchase!"}),e.jsx(tt,{sx:{height:260}}),e.jsxs(C,{children:["Thanks for placing order",e.jsx("br",{}),e.jsx("br",{}),e.jsx(ot,{children:"01dc1370-3df6-11eb-b378-0242ac130002"}),e.jsx("br",{}),e.jsx("br",{}),"We will send you a notification within 5 days when it ships.",e.jsx("br",{})," If you have any question or queries then fell to get in contact us. ",e.jsx("br",{})," ",e.jsx("br",{}),"All the best,"]}),e.jsx(ee,{sx:{borderStyle:"dashed"}}),e.jsxs(y,{spacing:2,justifyContent:"space-between",direction:{xs:"column-reverse",sm:"row"},children:[e.jsx(k,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",onClick:o,startIcon:e.jsx(j,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"}),e.jsx(k,{fullWidth:!0,size:"large",variant:"contained",startIcon:e.jsx(j,{icon:"eva:cloud-download-fill"}),onClick:n,children:"Download as PDF"})]})]});return e.jsx(Ke,{children:t&&e.jsx(Xe,{fullWidth:!0,fullScreen:!0,open:t,PaperComponent:r=>e.jsx(g,{component:Ze.div,...et({distance:120,durationIn:.32,durationOut:.24,easeIn:"easeInOut"}).inUp,sx:{width:1,height:1,p:{md:3}},children:e.jsx(te,{...r,children:r.children})}),children:s})})}ke.propTypes={open:a.bool,onReset:a.func,children:a.node,onDownloadPDF:a.func};function Te({checkout:t,onBackStep:o,onCreateBilling:n}){const s=ue();return e.jsxs(e.Fragment,{children:[e.jsxs(I,{container:!0,spacing:3,children:[e.jsx(I,{xs:12,md:8,children:e.jsxs(y,{direction:"row",justifyContent:"space-between",children:[e.jsx(k,{size:"small",color:"inherit",onClick:o,startIcon:e.jsx(j,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),e.jsx(k,{size:"small",color:"primary",onClick:s.onTrue,startIcon:e.jsx(j,{icon:"mingcute:add-line"}),children:"New Address"})]})}),e.jsx(I,{xs:12,md:4,children:e.jsx(J,{total:t.total,subTotal:t.subTotal,discount:t.discount})})]}),e.jsx(pt,{open:s.value,onClose:s.onFalse,onCreate:n})]})}Te.propTypes={checkout:a.object,onBackStep:a.func,onCreateBilling:a.func};function po(t){const o=ie(),n=m.useCallback(()=>{t.length&&o(le(t))},[t,o]);return m.useEffect(()=>{n()},[n]),null}function uo(){const t=nt(),{checkout:o,completed:n,onResetAll:s,onGotoStep:r,onNextStep:i,onBackStep:l,onDeleteCart:c,onResetBilling:d,onCreateBilling:p,onApplyDiscount:u,onApplyShipping:x,onIncreaseQuantity:b,onDecreaseQuantity:T}=it(),{cart:w,billing:f,activeStep:v}=o;return po(w),m.useEffect(()=>{v===1&&d()},[v,d]),e.jsxs(st,{maxWidth:t.themeStretch?!1:"lg",sx:{mb:10},children:[e.jsx(C,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Checkout"}),e.jsx(I,{container:!0,justifyContent:n?"center":"flex-start",children:e.jsx(I,{xs:12,md:8,children:e.jsx(ve,{activeStep:v,steps:at})})}),n?e.jsx(ke,{open:n,onReset:s,onDownloadPDF:()=>{}}):e.jsxs(e.Fragment,{children:[v===0&&e.jsx(ye,{checkout:o,onNextStep:i,onDeleteCart:c,onApplyDiscount:u,onIncreaseQuantity:b,onDecreaseQuantity:T}),v===1&&e.jsx(Te,{checkout:o,onBackStep:l,onCreateBilling:p}),v===2&&f&&e.jsx(Ie,{checkout:o,onNextStep:i,onBackStep:l,onGotoStep:r,onApplyShipping:x,onReset:s})]})]})}function So(){return e.jsxs(e.Fragment,{children:[e.jsx(rt,{children:e.jsx("title",{children:" Checkout"})}),e.jsx(uo,{})]})}export{So as default};
