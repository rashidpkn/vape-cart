import{a8 as e,as as S,aG as T,ae as y,ah as l,a9 as p,ac as u,aw as F,ad as m,aI as R,aP as re,ax as t,D,ao as oe,aH as E,bc as W,aC as ae,aF as ie,bd as $,be as ce,bf as le,al as j,af as de,ag as pe,am as xe,aB as B,b0 as z,aS as L,bg as ue,bh as he,ab as me,bi as je,ai as ye,ay as be,aj as fe,aK as Ce}from"./index-80ed1a65.js";import{e as ge}from"./_product-66794ccf.js";import{u as ve}from"./use-checkout-6dbc88ba.js";import{T as we,a as Se,E as Te}from"./table-pagination-custom-d7e34a62.js";import{a as v}from"./format-number-ba689ea4.js";import{C as ke}from"./CardContent-f2ce67ab.js";import{C as Ie}from"./color-picker-5986b564.js";import{T as w}from"./TablePagination-0d888b24.js";import{T as De,a as Pe,b as Ae}from"./TableContainer-a0ef1236.js";import{S as Oe,a as Ee,b as Fe,s as Be,c as Re,d as I}from"./Stepper-0d926bb7.js";import{u as N,C as G,c as We,a as $e,b as ze,F as Le}from"./form-provider-d1c92717.js";import{o as Ne}from"./yup-6ed98c1a.js";import{P as Ge}from"./payment-new-card-dialog-168e0d1d.js";import{L as qe}from"./LoadingButton-f18783df.js";import{v as He}from"./fade-ba5404aa.js";import{A as Qe}from"./index-9d2cd837.js";import{A as _e}from"./address-list-dialog-b4aa831d.js";import"./Checkbox-5d5b6085.js";import"./SwitchBase-e1bf7dff.js";import"./upload-avatar-3759b190.js";import"./image-54d982f3.js";import"./Chip-7541428a.js";import"./FormControlLabel-5e3136f2.js";import"./FormGroup-e2f17784.js";import"./Switch-803759d5.js";import"./editor-3d227a32.js";import"./highlight-e6757fb7.js";import"./Slider-009caab2.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-1a32c639.js";import"./Radio-9bef1a5f.js";import"./Autocomplete-d223b2ab.js";import"./Close-7086e489.js";import"./DialogTitle-d8429542.js";import"./DialogContent-c0280382.js";import"./DialogActions-84e06f81.js";import"./CircularProgress-0735bdd2.js";import"./transition-71675215.js";function P({total:s,onEdit:r,discount:o,subTotal:a,shipping:n,onApplyDiscount:i,enableEdit:c=!1,enableDiscount:d=!1}){const h=n!==null?"Free":"-";return e.jsxs(S,{sx:{mb:3},children:[e.jsx(T,{title:"Order Summary",action:c&&e.jsx(y,{size:"small",onClick:r,startIcon:e.jsx(l,{icon:"solar:pen-bold"}),children:"Edit"})}),e.jsx(ke,{children:e.jsxs(p,{spacing:2,children:[e.jsxs(p,{direction:"row",justifyContent:"space-between",children:[e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Sub Total"}),e.jsx(u,{variant:"subtitle2",children:v(a)})]}),e.jsxs(p,{direction:"row",justifyContent:"space-between",children:[e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Discount"}),e.jsx(u,{variant:"subtitle2",children:o?v(-o):"-"})]}),e.jsxs(p,{direction:"row",justifyContent:"space-between",children:[e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(u,{variant:"subtitle2",children:n?v(n):h})]}),e.jsx(F,{sx:{borderStyle:"dashed"}}),e.jsxs(p,{direction:"row",justifyContent:"space-between",children:[e.jsx(u,{variant:"subtitle1",children:"Total"}),e.jsxs(m,{sx:{textAlign:"right"},children:[e.jsx(u,{variant:"subtitle1",sx:{color:"error.main"},children:v(s)}),e.jsx(u,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),d&&i&&e.jsx(R,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"DISCOUNT5",InputProps:{endAdornment:e.jsx(re,{position:"end",children:e.jsx(y,{color:"primary",onClick:()=>i(5),sx:{mr:-.5},children:"Apply"})})}})]})})]})}P.propTypes={discount:t.number,enableDiscount:t.bool,enableEdit:t.bool,onApplyDiscount:t.func,onEdit:t.func,shipping:t.number,subTotal:t.number,total:t.number};const q=D.forwardRef(({quantity:s,onIncrease:r,onDecrease:o,disabledIncrease:a,disabledDecrease:n,sx:i,...c},d)=>e.jsxs(p,{ref:d,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:.5,width:88,borderRadius:1,typography:"subtitle2",border:h=>`solid 1px ${oe(h.palette.grey[500],.2)}`,...i},...c,children:[e.jsx(E,{size:"small",onClick:o,disabled:n,sx:{borderRadius:.75},children:e.jsx(l,{icon:"eva:minus-fill",width:16})}),s,e.jsx(E,{size:"small",onClick:r,disabled:a,sx:{borderRadius:.75},children:e.jsx(l,{icon:"mingcute:add-line",width:16})})]}));q.propTypes={disabledDecrease:t.bool,disabledIncrease:t.bool,onDecrease:t.func,onIncrease:t.func,quantity:t.number,sx:t.object};const Ve=q;function H({row:s,onDelete:r,onDecrease:o,onIncrease:a}){const{name:n,size:i,salePrice:c,colors:d,images:h,quantity:x,available:b,id:C}=s,g=W();return e.jsxs(we,{children:[e.jsxs(w,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(ae,{variant:"rounded",alt:n,src:h[0],sx:{width:64,height:64,mr:2}}),e.jsxs(p,{spacing:.5,children:[e.jsx(u,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:n}),e.jsxs(p,{direction:"row",alignItems:"center",sx:{typography:"body2",color:"text.secondary"},children:["size: ",e.jsxs(ie,{sx:{ml:.5},children:[" ",i," "]}),e.jsx(F,{orientation:"vertical",sx:{mx:1,height:16}}),e.jsx(Ie,{colors:d})]})]})]}),e.jsx(w,{children:v(c)}),e.jsx(w,{children:e.jsxs(m,{sx:{width:88,textAlign:"right"},children:[e.jsx(Ve,{quantity:x,onDecrease:o,onIncrease:a,disabledDecrease:x<=1,disabledIncrease:x>=b}),e.jsxs(u,{variant:"caption",component:"div",sx:{color:"text.secondary",mt:1},children:["available: ",b]})]})}),e.jsx(w,{align:"right",children:v(c*x)}),e.jsx(w,{align:"right",sx:{px:1},children:e.jsx(E,{onClick:()=>{r(C),g($())},children:e.jsx(l,{icon:"solar:trash-bin-trash-bold"})})})]})}H.propTypes={row:t.object,onDelete:t.func,onDecrease:t.func,onIncrease:t.func};const Ue=[{id:"product",label:"Product"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"totalAmount",label:"Total Price",align:"right"},{id:""}];function Q({products:s,onDelete:r,onIncreaseQuantity:o,onDecreaseQuantity:a}){return e.jsx(De,{sx:{overflow:"unset"},children:e.jsx(ce,{children:e.jsxs(Pe,{sx:{minWidth:720},children:[e.jsx(Se,{headLabel:Ue}),e.jsx(Ae,{children:s.map(n=>e.jsx(H,{row:n,onDelete:r,onDecrease:()=>a(n.id),onIncrease:()=>o(n.id)},n.id))})]})})})}Q.propTypes={onDelete:t.func,products:t.array,onDecreaseQuantity:t.func,onIncreaseQuantity:t.func};function _({checkout:s,onNextStep:r,onDeleteCart:o,onApplyDiscount:a,onIncreaseQuantity:n,onDecreaseQuantity:i}){const{cart:c,total:d,discount:h,subTotal:x}=s,b=le(c.map(g=>g.quantity)),C=!c.length;return e.jsxs(j,{container:!0,spacing:3,children:[e.jsxs(j,{xs:12,md:8,children:[e.jsxs(S,{sx:{mb:3},children:[e.jsx(T,{title:e.jsxs(u,{variant:"h6",children:["Cart",e.jsxs(u,{component:"span",sx:{color:"text.secondary"},children:[" (",b," item)"]})]}),sx:{mb:3}}),C?e.jsx(Te,{title:"Cart is Empty!",description:"Look like you have no items in your shopping cart.",imgUrl:"/assets/icons/empty/ic_cart.svg",sx:{pt:5,pb:10}}):e.jsx(Q,{products:c,onDelete:o,onIncreaseQuantity:n,onDecreaseQuantity:i})]}),e.jsx(y,{component:de,href:pe.product.root,color:"inherit",startIcon:e.jsx(l,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"})]}),e.jsxs(j,{xs:12,md:4,children:[e.jsx(P,{enableDiscount:!0,total:d,discount:h,subTotal:x,onApplyDiscount:a}),e.jsx(y,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:!c.length,onClick:r,children:"Check Out"})]})]})}_.propTypes={checkout:t.object,onNextStep:t.func,onDeleteCart:t.func,onApplyDiscount:t.func,onDecreaseQuantity:t.func,onIncreaseQuantity:t.func};const Me=xe(Re)(({theme:s})=>({top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)",[`& .${I.line}`]:{borderTopWidth:2,borderColor:s.palette.divider},[`&.${I.active}, &.${I.completed}`]:{[`& .${I.line}`]:{borderColor:s.palette.primary.main}}}));function V({steps:s,activeStep:r,sx:o,...a}){return e.jsx(Oe,{alternativeLabel:!0,activeStep:r,connector:e.jsx(Me,{}),sx:{mb:{xs:3,md:5},...o},...a,children:s.map(n=>e.jsx(Ee,{children:e.jsx(Fe,{StepIconComponent:U,sx:{[`& .${Be.label}`]:{fontWeight:"fontWeightSemiBold"}},children:n})},n))})}V.propTypes={activeStep:t.number,steps:t.arrayOf(t.string),sx:t.object};function U({active:s,completed:r}){return e.jsx(p,{alignItems:"center",justifyContent:"center",sx:{width:24,height:24,color:"text.disabled",...s&&{color:"primary.main"}},children:r?e.jsx(l,{icon:"eva:checkmark-fill",sx:{color:"primary.main"}}):e.jsx(m,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}U.propTypes={active:t.bool,completed:t.bool};function M({options:s,onApplyShipping:r,...o}){const{control:a}=N();return e.jsxs(S,{...o,children:[e.jsx(T,{title:"Delivery"}),e.jsx(G,{name:"delivery",control:a,render:({field:n})=>e.jsx(m,{columnGap:2,rowGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},sx:{p:3},children:s.map(i=>e.jsx(K,{option:i,selected:n.value===i.value,onClick:()=>{n.onChange(i.value),r(i.value)}},i.label))})})]})}M.propTypes={onApplyShipping:t.func,options:t.array};function K({option:s,selected:r,...o}){const{value:a,label:n,description:i}=s;return e.jsxs(B,{variant:"outlined",sx:{p:2.5,cursor:"pointer",display:"flex",...r&&{boxShadow:c=>`0 0 0 2px ${c.palette.text.primary}`}},...o,children:[n==="Free"&&e.jsx(l,{icon:"carbon:bicycle",width:32}),n==="Standard"&&e.jsx(l,{icon:"carbon:delivery",width:32}),n==="Express"&&e.jsx(l,{icon:"carbon:rocket",width:32}),e.jsx(z,{sx:{ml:2},primary:e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsx(m,{component:"span",sx:{flexGrow:1},children:n}),e.jsx(m,{component:"span",sx:{typography:"h6"},children:`AED ${a}`})]}),secondary:i,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}})]},a)}K.propTypes={option:t.object,selected:t.bool};function Y({billing:s,onBackStep:r}){return e.jsxs(S,{sx:{mb:3},children:[e.jsx(T,{title:"Address",action:e.jsx(y,{size:"small",startIcon:e.jsx(l,{icon:"solar:pen-bold"}),onClick:r,children:"Edit"})}),e.jsxs(p,{spacing:1,sx:{p:3},children:[e.jsxs(m,{sx:{typography:"subtitle2"},children:[`${s==null?void 0:s.name} `,e.jsxs(m,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:["(",s==null?void 0:s.addressType,")"]})]}),e.jsx(m,{sx:{color:"text.secondary",typography:"body2"},children:s==null?void 0:s.fullAddress}),e.jsx(m,{sx:{color:"text.secondary",typography:"body2"},children:s==null?void 0:s.phoneNumber})]})]})}Y.propTypes={billing:t.object,onBackStep:t.func};function J({options:s,cardOptions:r,...o}){const{control:a}=N(),n=L();return e.jsxs(e.Fragment,{children:[e.jsxs(S,{...o,children:[e.jsx(T,{title:"Payment"}),e.jsx(G,{name:"payment",control:a,render:({field:i,fieldState:{error:c}})=>e.jsxs(p,{sx:{px:3,pb:3},children:[s.map(d=>e.jsx(X,{option:d,onOpen:n.onTrue,cardOptions:r,selected:d.value==="cash",isCredit:d.value==="credit"&&i.value==="credit",onClick:()=>{i.onChange(d.value)}},d.label)),!!c&&e.jsx(ue,{error:!0,sx:{pt:1,px:2},children:c.message})]})})]}),e.jsx(Ge,{open:n.value,onClose:n.onFalse})]})}J.propTypes={cardOptions:t.array,options:t.array};function X({option:s,cardOptions:r,selected:o,isCredit:a,onOpen:n,...i}){const{value:c,label:d,description:h}=s;return e.jsxs(B,{variant:"outlined",sx:{p:2.5,mt:2.5,cursor:"pointer",...o&&{boxShadow:x=>`0 0 0 2px ${x.palette.text.primary}`}},...i,children:[e.jsx(z,{primary:e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsx(m,{component:"span",sx:{flexGrow:1},children:d}),e.jsxs(p,{spacing:1,direction:"row",alignItems:"center",children:[c==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(l,{icon:"logos:mastercard",width:24}),",",e.jsx(l,{icon:"logos:visa",width:24})]}),c==="paypal"&&e.jsx(l,{icon:"logos:paypal",width:24}),c==="cash"&&e.jsx(l,{icon:"solar:wad-of-money-bold",width:32})]})]}),secondary:h,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}}),a&&e.jsxs(p,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(R,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:r.map(x=>e.jsx("option",{value:x.value,children:x.label},x.value))}),e.jsx(y,{size:"small",color:"primary",startIcon:e.jsx(l,{icon:"mingcute:add-line"}),onClick:n,children:"Add New Card"})]})]},c)}X.propTypes={cardOptions:t.array,isCredit:t.bool,onOpen:t.func,option:t.object,selected:t.bool};const Ke=[{value:0,label:"Free",description:"5-7 Days delivery"},{value:10,label:"Standard",description:"3-5 Days delivery"},{value:20,label:"Express",description:"2-3 Days delivery"}],Ye=[{value:"cash",label:"Cash",description:"Pay with cash when your order is delivered."}],Je=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function Z({checkout:s,onReset:r,onNextStep:o,onBackStep:a,onGotoStep:n,onApplyShipping:i}){const{total:c,discount:d,subTotal:h,shipping:x,billing:b}=s,C=We().shape({payment:$e().required("Payment is required!")}),g={delivery:x,payment:""},k=ze({resolver:Ne(C),defaultValues:g}),{handleSubmit:A,formState:{isSubmitting:O}}=k,f=A(async se=>{try{o(),r(),console.info("DATA",se)}catch(ne){console.error(ne)}});return e.jsx(Le,{methods:k,onSubmit:f,children:e.jsxs(j,{container:!0,spacing:3,children:[e.jsxs(j,{xs:12,md:8,children:[e.jsx(M,{onApplyShipping:i,options:Ke}),e.jsx(J,{cardOptions:Je,options:Ye,sx:{my:3}}),e.jsx(y,{size:"small",color:"inherit",onClick:a,startIcon:e.jsx(l,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),e.jsxs(j,{xs:12,md:4,children:[e.jsx(Y,{onBackStep:a,billing:b}),e.jsx(P,{enableEdit:!0,total:c,subTotal:h,discount:d,shipping:x,onEdit:()=>n(0)}),e.jsx(qe,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:O,children:"Complete Order"})]})]})})}Z.propTypes={onReset:t.func,checkout:t.object,onBackStep:t.func,onGotoStep:t.func,onNextStep:t.func,onApplyShipping:t.func};function ee({open:s,onReset:r,onDownloadPDF:o}){const a=e.jsxs(p,{spacing:5,sx:{m:"auto",maxWidth:480,textAlign:"center",px:{xs:2,sm:0}},children:[e.jsx(u,{variant:"h4",children:"Thank you for your purchase!"}),e.jsx(je,{sx:{height:260}}),e.jsxs(u,{children:["Thanks for placing order",e.jsx("br",{}),e.jsx("br",{}),e.jsx(ye,{children:"01dc1370-3df6-11eb-b378-0242ac130002"}),e.jsx("br",{}),e.jsx("br",{}),"We will send you a notification within 5 days when it ships.",e.jsx("br",{})," If you have any question or queries then fell to get in contact us. ",e.jsx("br",{})," ",e.jsx("br",{}),"All the best,"]}),e.jsx(F,{sx:{borderStyle:"dashed"}}),e.jsxs(p,{spacing:2,justifyContent:"space-between",direction:{xs:"column-reverse",sm:"row"},children:[e.jsx(y,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",onClick:r,startIcon:e.jsx(l,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"}),e.jsx(y,{fullWidth:!0,size:"large",variant:"contained",startIcon:e.jsx(l,{icon:"eva:cloud-download-fill"}),onClick:o,children:"Download as PDF"})]})]});return e.jsx(Qe,{children:s&&e.jsx(he,{fullWidth:!0,fullScreen:!0,open:s,PaperComponent:n=>e.jsx(m,{component:me.div,...He({distance:120,durationIn:.32,durationOut:.24,easeIn:"easeInOut"}).inUp,sx:{width:1,height:1,p:{md:3}},children:e.jsx(B,{...n,children:n.children})}),children:a})})}ee.propTypes={open:t.bool,onReset:t.func,children:t.node,onDownloadPDF:t.func};function te({checkout:s,onBackStep:r,onCreateBilling:o}){const a=L();return e.jsxs(e.Fragment,{children:[e.jsxs(j,{container:!0,spacing:3,children:[e.jsx(j,{xs:12,md:8,children:e.jsxs(p,{direction:"row",justifyContent:"space-between",children:[e.jsx(y,{size:"small",color:"inherit",onClick:r,startIcon:e.jsx(l,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),e.jsx(y,{size:"small",color:"primary",onClick:a.onTrue,startIcon:e.jsx(l,{icon:"mingcute:add-line"}),children:"New Address"})]})}),e.jsx(j,{xs:12,md:4,children:e.jsx(P,{total:s.total,subTotal:s.subTotal,discount:s.discount})})]}),e.jsx(_e,{open:a.value,onClose:a.onFalse,onCreate:o})]})}te.propTypes={checkout:t.object,onBackStep:t.func,onCreateBilling:t.func};function Xe(s){const r=W(),o=D.useCallback(()=>{s.length&&r($(s))},[s,r]);return D.useEffect(()=>{o()},[o]),null}function Ze(){const s=be(),{checkout:r,completed:o,onResetAll:a,onGotoStep:n,onNextStep:i,onBackStep:c,onDeleteCart:d,onResetBilling:h,onCreateBilling:x,onApplyDiscount:b,onApplyShipping:C,onIncreaseQuantity:g,onDecreaseQuantity:k}=ve(),{cart:A,billing:O,activeStep:f}=r;return Xe(A),D.useEffect(()=>{f===1&&h()},[f,h]),e.jsxs(fe,{maxWidth:s.themeStretch?!1:"lg",sx:{mb:10},children:[e.jsx(u,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Checkout"}),e.jsx(j,{container:!0,justifyContent:o?"center":"flex-start",children:e.jsx(j,{xs:12,md:8,children:e.jsx(V,{activeStep:f,steps:ge})})}),o?e.jsx(ee,{open:o,onReset:a,onDownloadPDF:()=>{}}):e.jsxs(e.Fragment,{children:[f===0&&e.jsx(_,{checkout:r,onNextStep:i,onDeleteCart:d,onApplyDiscount:b,onIncreaseQuantity:g,onDecreaseQuantity:k}),f===1&&e.jsx(te,{checkout:r,onBackStep:c,onCreateBilling:x}),f===2&&O&&e.jsx(Z,{checkout:r,onNextStep:i,onBackStep:c,onGotoStep:n,onApplyShipping:C,onReset:a})]})]})}function zt(){return e.jsxs(e.Fragment,{children:[e.jsx(Ce,{children:e.jsx("title",{children:" Checkout"})}),e.jsx(Ze,{})]})}export{zt as default};