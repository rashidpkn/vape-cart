import{a9 as e,at as S,aH as T,af as b,ai as d,aa as x,ad as u,ax as F,ae as j,aJ as R,aQ as ae,ay as t,D,ap as ie,aI as E,bd as W,aD as ce,aG as le,be as z,bf as de,bg as pe,am as y,ag as xe,ah as ue,an as he,aC as B,b1 as L,aT as N,bh as me,bi as je,ac as ye,bj as be,aj as fe,az as Ce,ak as ge,aL as ve}from"./index-35891951.js";import{e as we}from"./_product-66794ccf.js";import{u as Se}from"./use-checkout-d36084a3.js";import{T as Te,a as ke,E as Ie}from"./table-pagination-custom-23f95e1c.js";import{a as v}from"./format-number-68427273.js";import{C as De}from"./CardContent-8e958df8.js";import{C as Ae}from"./color-picker-a98a7dc1.js";import{T as w}from"./TablePagination-d451ce3b.js";import{T as Pe,a as Oe,b as Ee}from"./TableContainer-4b8f8c40.js";import{S as Fe,a as Be,b as Re,s as We,c as ze,d as I}from"./Stepper-8ca1b9e2.js";import{u as $,C as G,c as Le,a as Ne,b as $e,F as Ge}from"./form-provider-5eb7d23e.js";import{o as Qe}from"./yup-8a65e45c.js";import{P as qe}from"./payment-new-card-dialog-25fabdb2.js";import{a as He}from"./api-1100fa52.js";import{L as _e}from"./LoadingButton-8f378097.js";import{v as Ve}from"./fade-ba5404aa.js";import{A as Ue}from"./index-26c61562.js";import{A as Me}from"./address-list-dialog-17142025.js";import"./Checkbox-65c87891.js";import"./SwitchBase-8639ee58.js";import"./upload-avatar-6aae9f40.js";import"./image-c00a6bf5.js";import"./Chip-b7a143a7.js";import"./FormControlLabel-f7956fca.js";import"./FormGroup-0a38259b.js";import"./Switch-be088c3a.js";import"./editor-980048e5.js";import"./highlight-bd9d4c75.js";import"./Slider-e30c3ffb.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-e402658a.js";import"./Radio-4b079785.js";import"./Autocomplete-9caf1bba.js";import"./Close-2be6e8a0.js";import"./DialogTitle-c22e8075.js";import"./DialogContent-081eab7b.js";import"./DialogActions-cd4d2a89.js";import"./axios-d5068281.js";import"./CircularProgress-63d2d197.js";import"./transition-71675215.js";function A({total:s,onEdit:r,discount:o,subTotal:a,shipping:n,onApplyDiscount:c,enableEdit:i=!1,enableDiscount:l=!1}){const h=n!==null?"Free":"-";return e.jsxs(S,{sx:{mb:3},children:[e.jsx(T,{title:"Order Summary",action:i&&e.jsx(b,{size:"small",onClick:r,startIcon:e.jsx(d,{icon:"solar:pen-bold"}),children:"Edit"})}),e.jsx(De,{children:e.jsxs(x,{spacing:2,children:[e.jsxs(x,{direction:"row",justifyContent:"space-between",children:[e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Sub Total"}),e.jsx(u,{variant:"subtitle2",children:v(a)})]}),e.jsxs(x,{direction:"row",justifyContent:"space-between",children:[e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Discount"}),e.jsx(u,{variant:"subtitle2",children:o?v(-o):"-"})]}),e.jsxs(x,{direction:"row",justifyContent:"space-between",children:[e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(u,{variant:"subtitle2",children:n?v(n):h})]}),e.jsx(F,{sx:{borderStyle:"dashed"}}),e.jsxs(x,{direction:"row",justifyContent:"space-between",children:[e.jsx(u,{variant:"subtitle1",children:"Total"}),e.jsxs(j,{sx:{textAlign:"right"},children:[e.jsx(u,{variant:"subtitle1",sx:{color:"error.main"},children:v(s)}),e.jsx(u,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),l&&c&&e.jsx(R,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"DISCOUNT5",InputProps:{endAdornment:e.jsx(ae,{position:"end",children:e.jsx(b,{color:"primary",onClick:()=>c(5),sx:{mr:-.5},children:"Apply"})})}})]})})]})}A.propTypes={discount:t.number,enableDiscount:t.bool,enableEdit:t.bool,onApplyDiscount:t.func,onEdit:t.func,shipping:t.number,subTotal:t.number,total:t.number};const Q=D.forwardRef(({quantity:s,onIncrease:r,onDecrease:o,disabledIncrease:a,disabledDecrease:n,sx:c,...i},l)=>e.jsxs(x,{ref:l,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:.5,width:88,borderRadius:1,typography:"subtitle2",border:h=>`solid 1px ${ie(h.palette.grey[500],.2)}`,...c},...i,children:[e.jsx(E,{size:"small",onClick:o,disabled:n,sx:{borderRadius:.75},children:e.jsx(d,{icon:"eva:minus-fill",width:16})}),s,e.jsx(E,{size:"small",onClick:r,disabled:a,sx:{borderRadius:.75},children:e.jsx(d,{icon:"mingcute:add-line",width:16})})]}));Q.propTypes={disabledDecrease:t.bool,disabledIncrease:t.bool,onDecrease:t.func,onIncrease:t.func,quantity:t.number,sx:t.object};const Je=Q;function q({row:s,onDelete:r,onDecrease:o,onIncrease:a}){const{name:n,size:c,salePrice:i,colors:l,images:h,quantity:p,available:m,id:C}=s,g=W();return e.jsxs(Te,{children:[e.jsxs(w,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(ce,{variant:"rounded",alt:n,src:h[0],sx:{width:64,height:64,mr:2}}),e.jsxs(x,{spacing:.5,children:[e.jsx(u,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:n}),e.jsxs(x,{direction:"row",alignItems:"center",sx:{typography:"body2",color:"text.secondary"},children:["size: ",e.jsxs(le,{sx:{ml:.5},children:[" ",c," "]}),e.jsx(F,{orientation:"vertical",sx:{mx:1,height:16}}),e.jsx(Ae,{colors:l})]})]})]}),e.jsx(w,{children:v(i)}),e.jsx(w,{children:e.jsxs(j,{sx:{width:88,textAlign:"right"},children:[e.jsx(Je,{quantity:p,onDecrease:o,onIncrease:a,disabledDecrease:p<=1,disabledIncrease:p>=m}),e.jsxs(u,{variant:"caption",component:"div",sx:{color:"text.secondary",mt:1},children:["available: ",m]})]})}),e.jsx(w,{align:"right",children:v(i*p)}),e.jsx(w,{align:"right",sx:{px:1},children:e.jsx(E,{onClick:()=>{r(C),g(z())},children:e.jsx(d,{icon:"solar:trash-bin-trash-bold"})})})]})}q.propTypes={row:t.object,onDelete:t.func,onDecrease:t.func,onIncrease:t.func};const Ye=[{id:"product",label:"Product"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"totalAmount",label:"Total Price",align:"right"},{id:""}];function H({products:s,onDelete:r,onIncreaseQuantity:o,onDecreaseQuantity:a}){return e.jsx(Pe,{sx:{overflow:"unset"},children:e.jsx(de,{children:e.jsxs(Oe,{sx:{minWidth:720},children:[e.jsx(ke,{headLabel:Ye}),e.jsx(Ee,{children:s.map(n=>e.jsx(q,{row:n,onDelete:r,onDecrease:()=>a(n.id),onIncrease:()=>o(n.id)},n.id))})]})})})}H.propTypes={onDelete:t.func,products:t.array,onDecreaseQuantity:t.func,onIncreaseQuantity:t.func};function _({checkout:s,onNextStep:r,onDeleteCart:o,onApplyDiscount:a,onIncreaseQuantity:n,onDecreaseQuantity:c}){const{cart:i,total:l,discount:h,subTotal:p}=s,m=pe(i.map(g=>g.quantity)),C=!i.length;return e.jsxs(y,{container:!0,spacing:3,children:[e.jsxs(y,{xs:12,md:8,children:[e.jsxs(S,{sx:{mb:3},children:[e.jsx(T,{title:e.jsxs(u,{variant:"h6",children:["Cart",e.jsxs(u,{component:"span",sx:{color:"text.secondary"},children:[" (",m," item)"]})]}),sx:{mb:3}}),C?e.jsx(Ie,{title:"Cart is Empty!",description:"Look like you have no items in your shopping cart.",imgUrl:"/assets/icons/empty/ic_cart.svg",sx:{pt:5,pb:10}}):e.jsx(H,{products:i,onDelete:o,onIncreaseQuantity:n,onDecreaseQuantity:c})]}),e.jsx(b,{component:xe,href:ue.product.root,color:"inherit",startIcon:e.jsx(d,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"})]}),e.jsxs(y,{xs:12,md:4,children:[e.jsx(A,{enableDiscount:!0,total:l,discount:h,subTotal:p,onApplyDiscount:a}),e.jsx(b,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:!i.length,onClick:r,children:"Check Out"})]})]})}_.propTypes={checkout:t.object,onNextStep:t.func,onDeleteCart:t.func,onApplyDiscount:t.func,onDecreaseQuantity:t.func,onIncreaseQuantity:t.func};const Ke=he(ze)(({theme:s})=>({top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)",[`& .${I.line}`]:{borderTopWidth:2,borderColor:s.palette.divider},[`&.${I.active}, &.${I.completed}`]:{[`& .${I.line}`]:{borderColor:s.palette.primary.main}}}));function V({steps:s,activeStep:r,sx:o,...a}){return e.jsx(Fe,{alternativeLabel:!0,activeStep:r,connector:e.jsx(Ke,{}),sx:{mb:{xs:3,md:5},...o},...a,children:s.map(n=>e.jsx(Be,{children:e.jsx(Re,{StepIconComponent:U,sx:{[`& .${We.label}`]:{fontWeight:"fontWeightSemiBold"}},children:n})},n))})}V.propTypes={activeStep:t.number,steps:t.arrayOf(t.string),sx:t.object};function U({active:s,completed:r}){return e.jsx(x,{alignItems:"center",justifyContent:"center",sx:{width:24,height:24,color:"text.disabled",...s&&{color:"primary.main"}},children:r?e.jsx(d,{icon:"eva:checkmark-fill",sx:{color:"primary.main"}}):e.jsx(j,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}U.propTypes={active:t.bool,completed:t.bool};function M({options:s,onApplyShipping:r,...o}){const{control:a}=$();return e.jsxs(S,{...o,children:[e.jsx(T,{title:"Delivery"}),e.jsx(G,{name:"delivery",control:a,render:({field:n})=>e.jsx(j,{columnGap:2,rowGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},sx:{p:3},children:s.map(c=>e.jsx(J,{option:c,selected:n.value===c.value,onClick:()=>{n.onChange(c.value),r(c.value)}},c.label))})})]})}M.propTypes={onApplyShipping:t.func,options:t.array};function J({option:s,selected:r,...o}){const{value:a,label:n,description:c}=s;return e.jsxs(B,{variant:"outlined",sx:{p:2.5,cursor:"pointer",display:"flex",...r&&{boxShadow:i=>`0 0 0 2px ${i.palette.text.primary}`}},...o,children:[n==="Free"&&e.jsx(d,{icon:"carbon:bicycle",width:32}),n==="Standard"&&e.jsx(d,{icon:"carbon:delivery",width:32}),n==="Express"&&e.jsx(d,{icon:"carbon:rocket",width:32}),e.jsx(L,{sx:{ml:2},primary:e.jsxs(x,{direction:"row",alignItems:"center",children:[e.jsx(j,{component:"span",sx:{flexGrow:1},children:n}),e.jsx(j,{component:"span",sx:{typography:"h6"},children:`AED ${a}`})]}),secondary:c,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}})]},a)}J.propTypes={option:t.object,selected:t.bool};function Y({billing:s,onBackStep:r}){return e.jsxs(S,{sx:{mb:3},children:[e.jsx(T,{title:"Address",action:e.jsx(b,{size:"small",startIcon:e.jsx(d,{icon:"solar:pen-bold"}),onClick:r,children:"Edit"})}),e.jsxs(x,{spacing:1,sx:{p:3},children:[e.jsxs(j,{sx:{typography:"subtitle2"},children:[`${s==null?void 0:s.name} `,e.jsxs(j,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:["(",s==null?void 0:s.addressType,")"]})]}),e.jsx(j,{sx:{color:"text.secondary",typography:"body2"},children:s==null?void 0:s.fullAddress}),e.jsx(j,{sx:{color:"text.secondary",typography:"body2"},children:s==null?void 0:s.phoneNumber})]})]})}Y.propTypes={billing:t.object,onBackStep:t.func};function K({options:s,cardOptions:r,...o}){const{control:a}=$(),n=N();return e.jsxs(e.Fragment,{children:[e.jsxs(S,{...o,children:[e.jsx(T,{title:"Payment"}),e.jsx(G,{name:"payment",control:a,render:({field:c,fieldState:{error:i}})=>e.jsxs(x,{sx:{px:3,pb:3},children:[s.map(l=>e.jsx(X,{option:l,onOpen:n.onTrue,cardOptions:r,selected:l.value==="cash",isCredit:l.value==="credit"&&c.value==="credit",onClick:()=>{c.onChange(l.value)}},l.label)),!!i&&e.jsx(me,{error:!0,sx:{pt:1,px:2},children:i.message})]})})]}),e.jsx(qe,{open:n.value,onClose:n.onFalse})]})}K.propTypes={cardOptions:t.array,options:t.array};function X({option:s,cardOptions:r,selected:o,isCredit:a,onOpen:n,...c}){const{value:i,label:l,description:h}=s;return e.jsxs(B,{variant:"outlined",sx:{p:2.5,mt:2.5,cursor:"pointer",...o&&{boxShadow:p=>`0 0 0 2px ${p.palette.text.primary}`}},...c,children:[e.jsx(L,{primary:e.jsxs(x,{direction:"row",alignItems:"center",children:[e.jsx(j,{component:"span",sx:{flexGrow:1},children:l}),e.jsxs(x,{spacing:1,direction:"row",alignItems:"center",children:[i==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(d,{icon:"logos:mastercard",width:24}),",",e.jsx(d,{icon:"logos:visa",width:24})]}),i==="paypal"&&e.jsx(d,{icon:"logos:paypal",width:24}),i==="cash"&&e.jsx(d,{icon:"solar:wad-of-money-bold",width:32})]})]}),secondary:h,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}}),a&&e.jsxs(x,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(R,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:r.map(p=>e.jsx("option",{value:p.value,children:p.label},p.value))}),e.jsx(b,{size:"small",color:"primary",startIcon:e.jsx(d,{icon:"mingcute:add-line"}),onClick:n,children:"Add New Card"})]})]},i)}X.propTypes={cardOptions:t.array,isCredit:t.bool,onOpen:t.func,option:t.object,selected:t.bool};const Xe=[{value:0,label:"Free",description:"5-7 Days delivery"},{value:10,label:"Standard",description:"3-5 Days delivery"},{value:20,label:"Express",description:"2-3 Days delivery"}],Ze=[{value:"cash",label:"Cash",description:"Pay with cash when your order is delivered."}],et=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function Z({checkout:s,onReset:r,onNextStep:o,onBackStep:a,onGotoStep:n,onApplyShipping:c}){const{total:i,discount:l,subTotal:h,shipping:p,billing:m,cart:C,totalItems:g}=s,P=Le().shape({payment:Ne().required("Payment is required!")}),O={delivery:p,payment:""},k=$e({resolver:Qe(P),defaultValues:O}),{handleSubmit:f,formState:{isSubmitting:se}}=k,ne=f(async re=>{try{He.post("/orders",{items:C,subTotal:h,shipping:p,discount:l,totalAmount:i,totalQuantity:g,customer:{name:m.name,email:m.email},shippingAddress:{fullAddress:m.fullAddress,phoneNumber:m.phoneNumber}}),o(),r(),console.info("DATA",re)}catch(oe){console.error(oe)}});return e.jsx(Ge,{methods:k,onSubmit:ne,children:e.jsxs(y,{container:!0,spacing:3,children:[e.jsxs(y,{xs:12,md:8,children:[e.jsx(M,{onApplyShipping:c,options:Xe}),e.jsx(K,{cardOptions:et,options:Ze,sx:{my:3}}),e.jsx(b,{size:"small",color:"inherit",onClick:a,startIcon:e.jsx(d,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),e.jsxs(y,{xs:12,md:4,children:[e.jsx(Y,{onBackStep:a,billing:m}),e.jsx(A,{enableEdit:!0,total:i,subTotal:h,discount:l,shipping:p,onEdit:()=>n(0)}),e.jsx(_e,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:se,children:"Complete Order"})]})]})})}Z.propTypes={onReset:t.func,checkout:t.object,onBackStep:t.func,onGotoStep:t.func,onNextStep:t.func,onApplyShipping:t.func};function ee({open:s,onReset:r,onDownloadPDF:o}){const a=e.jsxs(x,{spacing:5,sx:{m:"auto",maxWidth:480,textAlign:"center",px:{xs:2,sm:0}},children:[e.jsx(u,{variant:"h4",children:"Thank you for your purchase!"}),e.jsx(be,{sx:{height:260}}),e.jsxs(u,{children:["Thanks for placing order",e.jsx("br",{}),e.jsx("br",{}),e.jsx(fe,{children:"01dc1370-3df6-11eb-b378-0242ac130002"}),e.jsx("br",{}),e.jsx("br",{}),"We will send you a notification within 5 days when it ships.",e.jsx("br",{})," If you have any question or queries then fell to get in contact us. ",e.jsx("br",{})," ",e.jsx("br",{}),"All the best,"]}),e.jsx(F,{sx:{borderStyle:"dashed"}}),e.jsxs(x,{spacing:2,justifyContent:"space-between",direction:{xs:"column-reverse",sm:"row"},children:[e.jsx(b,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",onClick:r,startIcon:e.jsx(d,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"}),e.jsx(b,{fullWidth:!0,size:"large",variant:"contained",startIcon:e.jsx(d,{icon:"eva:cloud-download-fill"}),onClick:o,children:"Download as PDF"})]})]});return e.jsx(Ue,{children:s&&e.jsx(je,{fullWidth:!0,fullScreen:!0,open:s,PaperComponent:n=>e.jsx(j,{component:ye.div,...Ve({distance:120,durationIn:.32,durationOut:.24,easeIn:"easeInOut"}).inUp,sx:{width:1,height:1,p:{md:3}},children:e.jsx(B,{...n,children:n.children})}),children:a})})}ee.propTypes={open:t.bool,onReset:t.func,children:t.node,onDownloadPDF:t.func};function te({checkout:s,onBackStep:r,onCreateBilling:o}){const a=N();return e.jsxs(e.Fragment,{children:[e.jsxs(y,{container:!0,spacing:3,children:[e.jsx(y,{xs:12,md:8,children:e.jsxs(x,{direction:"row",justifyContent:"space-between",children:[e.jsx(b,{size:"small",color:"inherit",onClick:r,startIcon:e.jsx(d,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),e.jsx(b,{size:"small",color:"primary",onClick:a.onTrue,startIcon:e.jsx(d,{icon:"mingcute:add-line"}),children:"New Address"})]})}),e.jsx(y,{xs:12,md:4,children:e.jsx(A,{total:s.total,subTotal:s.subTotal,discount:s.discount})})]}),e.jsx(Me,{open:a.value,onClose:a.onFalse,onCreate:o})]})}te.propTypes={checkout:t.object,onBackStep:t.func,onCreateBilling:t.func};function tt(s){const r=W(),o=D.useCallback(()=>{s.length&&r(z(s))},[s,r]);return D.useEffect(()=>{o()},[o]),null}function st(){const s=Ce(),{checkout:r,completed:o,onResetAll:a,onGotoStep:n,onNextStep:c,onBackStep:i,onDeleteCart:l,onResetBilling:h,onCreateBilling:p,onApplyDiscount:m,onApplyShipping:C,onIncreaseQuantity:g,onDecreaseQuantity:P}=Se(),{cart:O,billing:k,activeStep:f}=r;return tt(O),D.useEffect(()=>{f===1&&h()},[f,h]),e.jsxs(ge,{maxWidth:s.themeStretch?!1:"lg",sx:{mb:10},children:[e.jsx(u,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Checkout"}),e.jsx(y,{container:!0,justifyContent:o?"center":"flex-start",children:e.jsx(y,{xs:12,md:8,children:e.jsx(V,{activeStep:f,steps:we})})}),o?e.jsx(ee,{open:o,onReset:a,onDownloadPDF:()=>{}}):e.jsxs(e.Fragment,{children:[f===0&&e.jsx(_,{checkout:r,onNextStep:c,onDeleteCart:l,onApplyDiscount:m,onIncreaseQuantity:g,onDecreaseQuantity:P}),f===1&&e.jsx(te,{checkout:r,onBackStep:i,onCreateBilling:p}),f===2&&k&&e.jsx(Z,{checkout:r,onNextStep:c,onBackStep:i,onGotoStep:n,onApplyShipping:C,onReset:a})]})]})}function qt(){return e.jsxs(e.Fragment,{children:[e.jsx(ve,{children:e.jsx("title",{children:" Checkout"})}),e.jsx(st,{})]})}export{qt as default};