import{r as h,V as B,X,a1 as k,$ as j,a5 as U,Y as V,j as e,k as O,a8 as H,a0 as re,c6 as Ae,a7 as ae,C as Q,B as S,z as m,Q as Ne,v as b,o as y,d as _,w as ie,b as M,T as F,ak as le,E as a,as as Me,al as Y,c7 as ce,A as _e,c8 as de,S as ze,c9 as Ee,K as I,ah as Fe,ai as Oe,ca as pe,cb as ue,P as te,y as xe,cc as We,at as Be,bi as he,bj as Xe,bk as Ue,bl as Ve,au as He,x as be,cd as Qe,ab as qe,ac as Ge,ad as Ye,i as Je,af as Ke,L as Ze,am as et,ce as tt,by as nt,bE as ot,cf as st,ag as rt,aD as at,m as it,J as lt,cg as ct,W as dt}from"./index-75fe4aa1.js";import{T as pt,E as ut}from"./table-pagination-custom-ecb952fd.js";import{C as q}from"./CardHeader-fb305fe1.js";import{b as xt,c as W,T as ht,d as bt}from"./TableRow-2527e0ab.js";import{T as mt}from"./TableContainer-3ba7bd1c.js";import{A as jt}from"./address-list-dialog-dbd18862.js";import"./Checkbox-d2988924.js";import"./LastPage-f10475ef.js";const vt=h.createContext({}),J=vt,yt=h.createContext({}),ne=yt;function ft(t){return B("MuiStep",t)}X("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const Ct=["active","children","className","component","completed","disabled","expanded","index","last"],gt=t=>{const{classes:n,orientation:o,alternativeLabel:r,completed:s}=t;return H({root:["root",o,r&&"alternativeLabel",s&&"completed"]},ft,n)},St=k("div",{name:"MuiStep",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.root,n[o.orientation],o.alternativeLabel&&n.alternativeLabel,o.completed&&n.completed]}})(({ownerState:t})=>j({},t.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})),Lt=h.forwardRef(function(n,o){const r=U({props:n,name:"MuiStep"}),{active:s,children:l,className:i,component:c="div",completed:d,disabled:p,expanded:x=!1,index:u,last:v}=r,T=V(r,Ct),{activeStep:L,connector:C,alternativeLabel:f,orientation:P,nonLinear:D}=h.useContext(J);let[g=!1,R=!1,w=!1]=[s,d,p];L===u?g=s!==void 0?s:!0:!D&&L>u?R=d!==void 0?d:!0:!D&&L<u&&(w=p!==void 0?p:!0);const A=h.useMemo(()=>({index:u,last:v,expanded:x,icon:u+1,active:g,completed:R,disabled:w}),[u,v,x,g,R,w]),N=j({},r,{active:g,orientation:P,alternativeLabel:f,completed:R,disabled:w,expanded:x,component:c}),z=gt(N),E=e.jsxs(St,j({as:c,className:O(z.root,i),ref:o,ownerState:N},T,{children:[C&&f&&u!==0?C:null,l]}));return e.jsx(ne.Provider,{value:A,children:C&&!f&&u!==0?e.jsxs(h.Fragment,{children:[C,E]}):E})}),wt=Lt,It=re(e.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),kt=re(e.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function Tt(t){return B("MuiStepIcon",t)}const Pt=X("MuiStepIcon",["root","active","completed","error","text"]),Z=Pt;var oe;const Dt=["active","className","completed","error","icon"],$t=t=>{const{classes:n,active:o,completed:r,error:s}=t;return H({root:["root",o&&"active",r&&"completed",s&&"error"],text:["text"]},Tt,n)},ee=k(Ae,{name:"MuiStepIcon",slot:"Root",overridesResolver:(t,n)=>n.root})(({theme:t})=>({display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${Z.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${Z.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${Z.error}`]:{color:(t.vars||t).palette.error.main}})),Rt=k("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(t,n)=>n.text})(({theme:t})=>({fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily})),At=h.forwardRef(function(n,o){const r=U({props:n,name:"MuiStepIcon"}),{active:s=!1,className:l,completed:i=!1,error:c=!1,icon:d}=r,p=V(r,Dt),x=j({},r,{active:s,completed:i,error:c}),u=$t(x);if(typeof d=="number"||typeof d=="string"){const v=O(l,u.root);return c?e.jsx(ee,j({as:kt,className:v,ref:o,ownerState:x},p)):i?e.jsx(ee,j({as:It,className:v,ref:o,ownerState:x},p)):e.jsxs(ee,j({className:v,ref:o,ownerState:x},p,{children:[oe||(oe=e.jsx("circle",{cx:"12",cy:"12",r:"12"})),e.jsx(Rt,{className:u.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:x,children:d})]}))}return d}),Nt=At;function Mt(t){return B("MuiStepLabel",t)}const _t=X("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),$=_t,zt=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],Et=t=>{const{classes:n,orientation:o,active:r,completed:s,error:l,disabled:i,alternativeLabel:c}=t;return H({root:["root",o,l&&"error",i&&"disabled",c&&"alternativeLabel"],label:["label",r&&"active",s&&"completed",l&&"error",i&&"disabled",c&&"alternativeLabel"],iconContainer:["iconContainer",r&&"active",s&&"completed",l&&"error",i&&"disabled",c&&"alternativeLabel"],labelContainer:["labelContainer",c&&"alternativeLabel"]},Mt,n)},Ft=k("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.root,n[o.orientation]]}})(({ownerState:t})=>j({display:"flex",alignItems:"center",[`&.${$.alternativeLabel}`]:{flexDirection:"column"},[`&.${$.disabled}`]:{cursor:"default"}},t.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),Ot=k("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(t,n)=>n.label})(({theme:t})=>j({},t.typography.body2,{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${$.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${$.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${$.alternativeLabel}`]:{marginTop:16},[`&.${$.error}`]:{color:(t.vars||t).palette.error.main}})),Wt=k("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(t,n)=>n.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${$.alternativeLabel}`]:{paddingRight:0}})),Bt=k("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(t,n)=>n.labelContainer})(({theme:t})=>({width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${$.alternativeLabel}`]:{textAlign:"center"}})),me=h.forwardRef(function(n,o){var r;const s=U({props:n,name:"MuiStepLabel"}),{children:l,className:i,componentsProps:c={},error:d=!1,icon:p,optional:x,slotProps:u={},StepIconComponent:v,StepIconProps:T}=s,L=V(s,zt),{alternativeLabel:C,orientation:f}=h.useContext(J),{active:P,disabled:D,completed:g,icon:R}=h.useContext(ne),w=p||R;let A=v;w&&!A&&(A=Nt);const N=j({},s,{active:P,alternativeLabel:C,completed:g,disabled:D,error:d,orientation:f}),z=Et(N),E=(r=u.label)!=null?r:c.label;return e.jsxs(Ft,j({className:O(z.root,i),ref:o,ownerState:N},L,{children:[w||A?e.jsx(Wt,{className:z.iconContainer,ownerState:N,children:e.jsx(A,j({completed:g,active:P,error:d,icon:w},T))}):null,e.jsxs(Bt,{className:z.labelContainer,ownerState:N,children:[l?e.jsx(Ot,j({ownerState:N},E,{className:O(z.label,E==null?void 0:E.className),children:l})):null,x]})]}))});me.muiName="StepLabel";const Xt=me;function Ut(t){return B("MuiStepConnector",t)}const Vt=X("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]),G=Vt,Ht=["className"],Qt=t=>{const{classes:n,orientation:o,alternativeLabel:r,active:s,completed:l,disabled:i}=t,c={root:["root",o,r&&"alternativeLabel",s&&"active",l&&"completed",i&&"disabled"],line:["line",`line${ae(o)}`]};return H(c,Ut,n)},qt=k("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.root,n[o.orientation],o.alternativeLabel&&n.alternativeLabel,o.completed&&n.completed]}})(({ownerState:t})=>j({flex:"1 1 auto"},t.orientation==="vertical"&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:8+4,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),Gt=k("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.line,n[`line${ae(o.orientation)}`]]}})(({ownerState:t,theme:n})=>{const o=n.palette.mode==="light"?n.palette.grey[400]:n.palette.grey[600];return j({display:"block",borderColor:n.vars?n.vars.palette.StepConnector.border:o},t.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},t.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),Yt=h.forwardRef(function(n,o){const r=U({props:n,name:"MuiStepConnector"}),{className:s}=r,l=V(r,Ht),{alternativeLabel:i,orientation:c="horizontal"}=h.useContext(J),{active:d,disabled:p,completed:x}=h.useContext(ne),u=j({},r,{alternativeLabel:i,orientation:c,active:d,completed:x,disabled:p}),v=Qt(u);return e.jsx(qt,j({className:O(v.root,s),ref:o,ownerState:u},l,{children:e.jsx(Gt,{className:v.line,ownerState:u})}))}),je=Yt;function Jt(t){return B("MuiStepper",t)}X("MuiStepper",["root","horizontal","vertical","nonLinear","alternativeLabel"]);const Kt=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],Zt=t=>{const{orientation:n,nonLinear:o,alternativeLabel:r,classes:s}=t;return H({root:["root",n,o&&"nonLinear",r&&"alternativeLabel"]},Jt,s)},en=k("div",{name:"MuiStepper",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.root,n[o.orientation],o.alternativeLabel&&n.alternativeLabel,o.nonLinear&&n.nonLinear]}})(({ownerState:t})=>j({display:"flex"},t.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},t.orientation==="vertical"&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})),tn=e.jsx(je,{}),nn=h.forwardRef(function(n,o){const r=U({props:n,name:"MuiStepper"}),{activeStep:s=0,alternativeLabel:l=!1,children:i,className:c,component:d="div",connector:p=tn,nonLinear:x=!1,orientation:u="horizontal"}=r,v=V(r,Kt),T=j({},r,{nonLinear:x,alternativeLabel:l,orientation:u,component:d}),L=Zt(T),C=h.Children.toArray(i).filter(Boolean),f=C.map((D,g)=>h.cloneElement(D,j({index:g,last:g+1===C.length},D.props))),P=h.useMemo(()=>({activeStep:s,alternativeLabel:l,connector:p,nonLinear:x,orientation:u}),[s,l,p,x,u]);return e.jsx(J.Provider,{value:P,children:e.jsx(en,j({as:d,ownerState:T,className:O(L.root,c),ref:o},v,{children:f}))})}),on=nn;function K({total:t,onEdit:n,discount:o,subTotal:r,shipping:s,onApplyDiscount:l,enableEdit:i=!1,enableDiscount:c=!1}){const d="-";return e.jsxs(Q,{sx:{mb:3},children:[e.jsx(q,{title:"Order Summary",action:i&&e.jsx(S,{size:"small",onClick:n,startIcon:e.jsx(m,{icon:"solar:pen-bold"}),children:"Edit"})}),e.jsx(Ne,{children:e.jsxs(b,{spacing:2,children:[e.jsxs(b,{direction:"row",justifyContent:"space-between",children:[e.jsx(y,{variant:"body2",sx:{color:"text.secondary"},children:"Sub Total"}),e.jsx(y,{variant:"subtitle2",children:_(r)})]}),e.jsxs(b,{direction:"row",justifyContent:"space-between",children:[e.jsx(y,{variant:"body2",sx:{color:"text.secondary"},children:"Discount"}),e.jsx(y,{variant:"subtitle2",children:o?_(-o):"-"})]}),e.jsxs(b,{direction:"row",justifyContent:"space-between",children:[e.jsx(y,{variant:"body2",sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(y,{variant:"subtitle2",children:s?_(s):d})]}),e.jsxs(b,{direction:"row",justifyContent:"space-between",children:[e.jsx(y,{variant:"body2",sx:{color:"text.secondary"},children:"VAT"}),e.jsx(y,{variant:"subtitle2",children:r&&_(r*.05)})]}),e.jsx(ie,{sx:{borderStyle:"dashed"}}),e.jsxs(b,{direction:"row",justifyContent:"space-between",children:[e.jsx(y,{variant:"subtitle1",children:"Total"}),e.jsxs(M,{sx:{textAlign:"right"},children:[e.jsx(y,{variant:"subtitle1",sx:{color:"error.main"},children:_(parseFloat(r*1.05)+parseFloat(s??0))}),e.jsx(y,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),c&&l&&e.jsx(F,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"",InputProps:{endAdornment:e.jsx(le,{position:"end",children:e.jsx(S,{color:"primary",onClick:()=>l(5),sx:{mr:-.5},children:"Apply"})})}})]})})]})}K.propTypes={discount:a.number,enableDiscount:a.bool,enableEdit:a.bool,onApplyDiscount:a.func,onEdit:a.func,shipping:a.number,subTotal:a.number,total:a.number};const ve=h.forwardRef(({quantity:t,onIncrease:n,onDecrease:o,disabledIncrease:r,disabledDecrease:s,sx:l,...i},c)=>e.jsxs(b,{ref:c,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:.5,width:88,borderRadius:1,typography:"subtitle2",border:d=>`solid 1px ${Me(d.palette.grey[500],.2)}`,...l},...i,children:[e.jsx(Y,{size:"small",onClick:o,disabled:s,sx:{borderRadius:.75},children:e.jsx(m,{icon:"eva:minus-fill",width:16})}),t,e.jsx(Y,{size:"small",onClick:n,disabled:r,sx:{borderRadius:.75},children:e.jsx(m,{icon:"mingcute:add-line",width:16})})]}));ve.propTypes={disabledDecrease:a.bool,disabledIncrease:a.bool,onDecrease:a.func,onIncrease:a.func,quantity:a.number,sx:a.object};const sn=ve;function ye({row:t,onDelete:n,onDecrease:o,onIncrease:r}){const{name:s,price:l,images:i=[],quantity:c,available:d,id:p}=t,x=ce();return e.jsxs(xt,{children:[e.jsxs(W,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(_e,{variant:"rounded",alt:s,src:i[0],sx:{width:64,height:64,mr:2}}),e.jsx(b,{spacing:.5,children:e.jsx(y,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:s})})]}),e.jsx(W,{children:_(l)}),e.jsx(W,{children:e.jsxs(M,{sx:{width:88,textAlign:"right"},children:[e.jsx(sn,{quantity:c,onDecrease:o,onIncrease:r,disabledDecrease:c<=1,disabledIncrease:c>=d}),e.jsxs(y,{variant:"caption",component:"div",sx:{color:"text.secondary",mt:1},children:["available: ",d]})]})}),e.jsx(W,{align:"right",children:_(l*c)}),e.jsx(W,{align:"right",sx:{px:1},children:e.jsx(Y,{onClick:()=>{n(p),x(de())},children:e.jsx(m,{icon:"solar:trash-bin-trash-bold"})})})]})}ye.propTypes={row:a.object,onDelete:a.func,onDecrease:a.func,onIncrease:a.func};const rn=[{id:"product",label:"Product"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"totalAmount",label:"Total Price",align:"right"},{id:""}];function fe({products:t,onDelete:n,onIncreaseQuantity:o,onDecreaseQuantity:r}){return e.jsx(mt,{sx:{overflow:"unset"},children:e.jsx(ze,{children:e.jsxs(ht,{sx:{minWidth:720},children:[e.jsx(pt,{headLabel:rn}),e.jsx(bt,{children:t.map(s=>e.jsx(ye,{row:s,onDelete:n,onDecrease:()=>r(s.id),onIncrease:()=>o(s.id)},s.id))})]})})})}fe.propTypes={onDelete:a.func,products:a.array,onDecreaseQuantity:a.func,onIncreaseQuantity:a.func};function Ce({checkout:t,onNextStep:n,onDeleteCart:o,onApplyDiscount:r,onIncreaseQuantity:s,onDecreaseQuantity:l}){const{cart:i,total:c,discount:d,subTotal:p}=t,x=Ee(i==null?void 0:i.map(v=>v.quantity)),u=!(i!=null&&i.length);return e.jsxs(I,{container:!0,spacing:3,children:[e.jsxs(I,{xs:12,md:8,children:[e.jsxs(Q,{sx:{mb:3},children:[e.jsx(q,{title:e.jsxs(y,{variant:"h6",children:["Cart",e.jsxs(y,{component:"span",sx:{color:"text.secondary"},children:[" (",x," item)"]})]}),sx:{mb:3}}),u?e.jsx(ut,{title:"Cart is Empty!",description:"Look like you have no items in your shopping cart.",imgUrl:"/assets/icons/empty/ic_cart.svg",sx:{pt:5,pb:10}}):e.jsx(fe,{products:i,onDelete:o,onIncreaseQuantity:s,onDecreaseQuantity:l})]}),e.jsx(S,{component:Fe,href:Oe.product.root,color:"inherit",startIcon:e.jsx(m,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"})]}),e.jsxs(I,{xs:12,md:4,children:[e.jsx(K,{enableDiscount:!0,total:c,discount:d,subTotal:p,onApplyDiscount:r}),e.jsx(S,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:!(i!=null&&i.length),onClick:n,children:"Check Out"})]})]})}Ce.propTypes={checkout:a.object,onNextStep:a.func,onDeleteCart:a.func,onApplyDiscount:a.func,onDecreaseQuantity:a.func,onIncreaseQuantity:a.func};const an=k(je)(({theme:t})=>({top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)",[`& .${G.line}`]:{borderTopWidth:2,borderColor:t.palette.divider},[`&.${G.active}, &.${G.completed}`]:{[`& .${G.line}`]:{borderColor:t.palette.primary.main}}}));function ge({steps:t,activeStep:n,sx:o,...r}){return e.jsx(on,{alternativeLabel:!0,activeStep:n,connector:e.jsx(an,{}),sx:{mb:{xs:3,md:5},...o},...r,children:t.map(s=>e.jsx(wt,{children:e.jsx(Xt,{StepIconComponent:Se,sx:{[`& .${$.label}`]:{fontWeight:"fontWeightSemiBold"}},children:s})},s))})}ge.propTypes={activeStep:a.number,steps:a.arrayOf(a.string),sx:a.object};function Se({active:t,completed:n}){return e.jsx(b,{alignItems:"center",justifyContent:"center",sx:{width:24,height:24,color:"text.disabled",...t&&{color:"primary.main"}},children:n?e.jsx(m,{icon:"eva:checkmark-fill",sx:{color:"primary.main"}}):e.jsx(M,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}Se.propTypes={active:a.bool,completed:a.bool};function Le({options:t,onApplyShipping:n,...o}){const{control:r}=pe();return e.jsxs(Q,{...o,children:[e.jsx(q,{title:"Delivery"}),e.jsx(ue,{name:"delivery",control:r,render:({field:s})=>e.jsx(M,{columnGap:2,rowGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},sx:{p:3},children:t.map((l,i)=>e.jsx(we,{option:l,selected:s.value===l.value,onClick:()=>{s.onChange(l.value),n(l.value)}},i))})})]})}Le.propTypes={onApplyShipping:a.func,options:a.array};function we({option:t,selected:n,...o}){const{value:r,label:s,description:l=""}=t;return e.jsxs(te,{variant:"outlined",sx:{p:2.5,cursor:"pointer",display:"flex",...n&&{boxShadow:i=>`0 0 0 2px ${i.palette.text.primary}`}},...o,children:[s==="Free"&&e.jsx(m,{icon:"carbon:bicycle",width:32}),s==="Standard"&&e.jsx(m,{icon:"carbon:delivery",width:32}),s==="Express"&&e.jsx(m,{icon:"carbon:rocket",width:32}),e.jsx(xe,{sx:{ml:2},primary:e.jsxs(b,{direction:"row",alignItems:"center",children:[e.jsx(M,{component:"span",sx:{flexGrow:1},children:s}),e.jsx(M,{component:"span",sx:{typography:"h6"},children:`AED ${r}`})]}),secondary:l,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}})]},r)}we.propTypes={option:a.object,selected:a.bool};function Ie({onBackStep:t}){const n=We(o=>o.checkout.billing);return e.jsxs(Q,{sx:{mb:3},children:[e.jsx(q,{title:"Address",action:e.jsx(S,{size:"small",startIcon:e.jsx(m,{icon:"solar:pen-bold"}),onClick:t,children:"Edit"})}),e.jsxs(b,{spacing:1,sx:{p:3},children:[n.first_name," ",n.last_name," ",e.jsx("br",{}),n.phone_number," ",e.jsx("br",{}),n.email," ",e.jsx("br",{}),n.address_line_1," ",e.jsx("br",{}),n.address_line_2," ",e.jsx("br",{}),n.city," ",e.jsx("br",{}),n.country," ",e.jsx("br",{})]})]})}Ie.propTypes={billing:a.object,onBackStep:a.func};function ke({onClose:t,...n}){const o=Be();return e.jsxs(e.Fragment,{children:[e.jsxs(he,{maxWidth:"sm",onClose:t,...n,children:[e.jsx(Xe,{children:" New Card "}),e.jsx(Ue,{sx:{overflow:"unset"},children:e.jsxs(b,{spacing:2.5,children:[e.jsx(F,{autoFocus:!0,label:"Card Number",placeholder:"XXXX XXXX XXXX XXXX",InputLabelProps:{shrink:!0}}),e.jsx(F,{label:"Card Holder",placeholder:"JOHN DOE",InputLabelProps:{shrink:!0}}),e.jsxs(b,{spacing:2,direction:"row",children:[e.jsx(F,{label:"Expiration Date",placeholder:"MM/YY",InputLabelProps:{shrink:!0}}),e.jsx(F,{label:"CVV/CVC",placeholder:"***",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(le,{position:"end",children:e.jsx(Y,{size:"small",edge:"end",onClick:o.onOpen,children:e.jsx(m,{icon:"eva:info-outline"})})})}})]}),e.jsxs(b,{direction:"row",alignItems:"center",sx:{typography:"caption",color:"text.disabled"},children:[e.jsx(m,{icon:"carbon:locked",sx:{mr:.5}}),"Your transaction is secured with SSL encryption"]})]})}),e.jsxs(Ve,{children:[e.jsx(S,{color:"inherit",variant:"outlined",onClick:t,children:"Cancel"}),e.jsx(S,{variant:"contained",onClick:t,children:"Add"})]})]}),e.jsx(He,{open:o.open,onClose:o.onClose,arrow:"bottom-center",sx:{maxWidth:200,typography:"body2",textAlign:"center"},children:"Three-digit number on the back of your VISA card"})]})}ke.propTypes={onClose:a.func};function Te({options:t,cardOptions:n,...o}){const{control:r}=pe(),s=be();return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{...o,children:[e.jsx(q,{title:"Payment"}),e.jsx(ue,{name:"payment",control:r,render:({field:l,fieldState:{error:i}})=>e.jsxs(b,{sx:{px:3,pb:3},children:[t.map(c=>e.jsx(Pe,{option:c,onOpen:s.onTrue,cardOptions:n,selected:c.value==="cash",isCredit:c.value==="credit"&&l.value==="credit",onClick:()=>{l.onChange(c.value)}},c.label)),!!i&&e.jsx(Qe,{error:!0,sx:{pt:1,px:2},children:i.message})]})})]}),e.jsx(ke,{open:s.value,onClose:s.onFalse})]})}Te.propTypes={cardOptions:a.array,options:a.array};function Pe({option:t,cardOptions:n,selected:o,isCredit:r,onOpen:s,...l}){const{value:i,label:c,description:d}=t;return e.jsxs(te,{variant:"outlined",sx:{p:2.5,mt:2.5,cursor:"pointer",...o&&{boxShadow:p=>`0 0 0 2px ${p.palette.text.primary}`}},...l,children:[e.jsx(xe,{primary:e.jsxs(b,{direction:"row",alignItems:"center",children:[e.jsx(M,{component:"span",sx:{flexGrow:1},children:c}),e.jsxs(b,{spacing:1,direction:"row",alignItems:"center",children:[i==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(m,{icon:"logos:mastercard",width:24}),",",e.jsx(m,{icon:"logos:visa",width:24})]}),i==="paypal"&&e.jsx(m,{icon:"logos:paypal",width:24}),i==="cash"&&e.jsx(m,{icon:"solar:wad-of-money-bold",width:32})]})]}),secondary:d,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}}),r&&e.jsxs(b,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(F,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:n.map(p=>e.jsx("option",{value:p.value,children:p.label},p.value))}),e.jsx(S,{size:"small",color:"primary",startIcon:e.jsx(m,{icon:"mingcute:add-line"}),onClick:s,children:"Add New Card"})]})]},i)}Pe.propTypes={cardOptions:a.array,isCredit:a.bool,onOpen:a.func,option:a.object,selected:a.bool};const se=[{value:20,label:"Same Day Delivery"},{value:10,label:"Next Day delivery"}],ln=[{value:"cash",label:"Cash",description:"Pay with cash when your order is delivered."}],cn=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function De({checkout:t,onReset:n,onNextStep:o,onBackStep:r,onGotoStep:s,onApplyShipping:l}){const[i,c]=h.useState(se);h.useEffect(()=>{t.billing.city.toLowerCase().includes("dubai")||t.billing.city.toLowerCase().includes("sharjah")?new Date().getHours()>=16?c([{value:10,label:"Next Day delivery"}]):c(se):c([{value:30,label:"Next Day delivery"}])},[]);const{total:d,discount:p,subTotal:x,shipping:u,billing:v,cart:T,totalItems:L}=t,C=qe().shape({payment:Ge().required("Payment is required!")}),f={delivery:u,payment:""},P=Ye({resolver:et(C),defaultValues:f}),{handleSubmit:D,formState:{isSubmitting:g}}=P,R=D(async w=>{try{Je.post("/orders",{items:T,subTotal:x,shipping:u,discount:p,totalAmount:d,totalQuantity:L,customer:v}),o(),n(),console.info("DATA",w)}catch(A){console.error(A)}});return e.jsx(Ke,{methods:P,onSubmit:R,children:e.jsxs(I,{container:!0,spacing:3,children:[e.jsxs(I,{xs:12,md:8,children:[e.jsx(Le,{onApplyShipping:l,options:i}),e.jsx(Te,{cardOptions:cn,options:ln,sx:{my:3}}),e.jsx(S,{size:"small",color:"inherit",onClick:r,startIcon:e.jsx(m,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),e.jsxs(I,{xs:12,md:4,children:[e.jsx(Ie,{onBackStep:r,billing:v}),e.jsx(K,{enableEdit:!0,total:d,subTotal:x,discount:p,shipping:u,onEdit:()=>s(0)}),e.jsx(Ze,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:g,children:"Complete Order"})]})]})})}De.propTypes={onReset:a.func,checkout:a.object,onBackStep:a.func,onGotoStep:a.func,onNextStep:a.func,onApplyShipping:a.func};function $e({open:t,onReset:n,onDownloadPDF:o}){const r=e.jsxs(b,{spacing:5,sx:{m:"auto",maxWidth:480,textAlign:"center",px:{xs:2,sm:0}},children:[e.jsx(y,{variant:"h4",children:"Thank you for your purchase!"}),e.jsx(st,{sx:{height:260}}),e.jsxs(y,{children:["Thanks for placing order",e.jsx("br",{}),e.jsx("br",{}),e.jsx(rt,{children:"01dc1370-3df6-11eb-b378-0242ac130002"}),e.jsx("br",{}),e.jsx("br",{}),"We will send you a notification within 5 days when it ships.",e.jsx("br",{})," If you have any question or queries then fell to get in contact us. ",e.jsx("br",{})," ",e.jsx("br",{}),"All the best,"]}),e.jsx(ie,{sx:{borderStyle:"dashed"}}),e.jsx(b,{spacing:2,justifyContent:"space-between",direction:{xs:"column-reverse",sm:"row"},children:e.jsx(S,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",onClick:n,startIcon:e.jsx(m,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"})})]});return e.jsx(tt,{children:t&&e.jsx(he,{fullWidth:!0,fullScreen:!0,open:t,PaperComponent:s=>e.jsx(M,{component:nt.div,...ot({distance:120,durationIn:.32,durationOut:.24,easeIn:"easeInOut"}).inUp,sx:{width:1,height:1,p:{md:3}},children:e.jsx(te,{...s,children:s.children})}),children:r})})}$e.propTypes={open:a.bool,onReset:a.func,children:a.node,onDownloadPDF:a.func};function Re({checkout:t,onBackStep:n,onCreateBilling:o}){const r=be(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{container:!0,spacing:3,children:[e.jsx(I,{xs:12,md:8,children:e.jsxs(b,{direction:"row",justifyContent:"space-between",children:[e.jsx(S,{size:"small",color:"inherit",onClick:n,startIcon:e.jsx(m,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),e.jsx(S,{size:"small",color:"primary",onClick:r.onTrue,startIcon:e.jsx(m,{icon:"mingcute:add-line"}),children:"New Address"})]})}),e.jsx(I,{xs:12,md:4,children:e.jsx(K,{total:t.total,subTotal:t.subTotal,discount:t.discount})})]}),e.jsx(jt,{open:r.value,onClose:r.onFalse,onCreate:o})]})}Re.propTypes={checkout:a.object,onBackStep:a.func,onCreateBilling:a.func};function dn(t){const n=ce(),o=h.useCallback(()=>{t!=null&&t.length&&n(de(t))},[t,n]);return h.useEffect(()=>{o()},[o]),null}function pn(){const t=at(),{checkout:n,completed:o,onResetAll:r,onGotoStep:s,onNextStep:l,onBackStep:i,onDeleteCart:c,onResetBilling:d,onCreateBilling:p,onApplyDiscount:x,onApplyShipping:u,onIncreaseQuantity:v,onDecreaseQuantity:T}=it(),{cart:L,billing:C,activeStep:f}=n;return dn(L),h.useEffect(()=>{f===1&&d()},[f,d]),e.jsxs(lt,{maxWidth:t.themeStretch?!1:"lg",sx:{mb:10},children:[e.jsx(y,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Checkout"}),e.jsx(I,{container:!0,justifyContent:o?"center":"flex-start",children:e.jsx(I,{xs:12,md:8,children:e.jsx(ge,{activeStep:f,steps:ct})})}),o?e.jsx($e,{open:o,onReset:r,onDownloadPDF:()=>{}}):e.jsxs(e.Fragment,{children:[f===0&&e.jsx(Ce,{checkout:n,onNextStep:l,onDeleteCart:c,onApplyDiscount:x,onIncreaseQuantity:v,onDecreaseQuantity:T}),f===1&&e.jsx(Re,{checkout:n,onBackStep:i,onCreateBilling:p}),f===2&&C&&e.jsx(De,{checkout:n,onNextStep:l,onBackStep:i,onGotoStep:s,onApplyShipping:u,onReset:r})]})]})}function fn(){return e.jsxs(e.Fragment,{children:[e.jsx(dt,{children:e.jsx("title",{children:" Checkout"})}),e.jsx(pn,{})]})}export{fn as default};
