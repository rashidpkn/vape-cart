import{ba as B,az as A,bb as I,a4 as o,bc as y,bd as O,be as E,bf as L,bg as U,bh as G,bi as w,bj as Q,bk as M,bl as N,bm as _,p as x,aQ as $,j as e,S as F,B as W,R as P,aK as d,aO as g,bn as D,aJ as R,aT as Y,aU as H,bo as K,bp as q,aX as z,aY as S,g as T,aN as J,bq as V,b6 as X,br as Z,aW as ee,W as ae}from"./index-519398e3.js";import{P as se,a as te,b as oe,c as ne}from"./product-details-description-b82a2cd6.js";import"./lightbox-70000be4.js";import"./confirm-dialog-d0bc3927.js";import{P as le,a as re}from"./_product-fa61ef0b.js";import"./DialogTitle-e2cecead.js";import"./DialogContent-bcfe164c.js";function ce(){const s=B(),c=A(),t=I(a=>a.checkout),r=t.activeStep===le.length,u=o.useCallback(()=>{s(y())},[s]),i=o.useCallback(()=>{s(O())},[s]),p=o.useCallback(a=>{s(E(a))},[s]),h=o.useCallback(a=>{s(L(a))},[s]),l=o.useCallback(a=>{s(U(a))},[s]),n=o.useCallback(a=>{s(G(a))},[s]),m=o.useCallback(a=>{s(w(a)),s(y())},[s]),C=o.useCallback(()=>{s(w(null))},[s]),j=o.useCallback(a=>{s(Q(a))},[s]),k=o.useCallback(a=>{t.cart.length&&s(M(a))},[t.cart.length,s]),v=o.useCallback(a=>{s(N(a))},[s]),f=o.useCallback(()=>{r&&(s(_()),c.replace(x.product.root))},[r,s,c]);return{checkout:t,completed:r,onResetAll:f,onAddCart:j,onGotoStep:p,onNextStep:u,onBackStep:i,onDeleteCart:h,onResetBilling:C,onCreateBilling:m,onApplyDiscount:k,onApplyShipping:v,onIncreaseQuantity:l,onDecreaseQuantity:n}}function ie({publish:s,backLink:c,editLink:t,liveLink:r,publishOptions:u,onChangePublish:i,sx:p,...h}){const l=$();return e.jsxs(e.Fragment,{children:[e.jsxs(F,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...p},...h,children:[e.jsx(W,{component:P,href:c,startIcon:e.jsx(d,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),e.jsx(g,{sx:{flexGrow:1}}),s==="published"&&e.jsx(D,{title:"Go Live",children:e.jsx(R,{component:P,href:r,children:e.jsx(d,{icon:"eva:external-link-fill"})})}),e.jsx(D,{title:"Edit",children:e.jsx(R,{component:P,href:t,children:e.jsx(d,{icon:"solar:pen-bold"})})})]}),e.jsx(Y,{open:l.open,onClose:l.onClose,arrow:"top-right",sx:{width:140},children:u.map(n=>e.jsxs(H,{selected:n.value===s,onClick:()=>{l.onClose(),i(n.value)},children:[n.value==="published"&&e.jsx(d,{icon:"eva:cloud-upload-fill"}),n.value==="draft"&&e.jsx(d,{icon:"solar:file-text-bold"}),n.label]},n.value))})]})}const de=[{title:"100% Original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 Day Replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year Warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function ue(){const s=K(),{id:c}=s,[t,r]=o.useState({}),u=q();o.useEffect(()=>{(async()=>{try{const{data:b}=await ee.get(`products/${c}`);r(b)}catch(b){alert(b.response.data.message),u(x.dashboard.product.root)}})()},[]),z();const[i,p]=o.useState("reviews"),[h,l]=o.useState(""),{checkout:n,onAddCart:m,onGotoStep:C}=ce();o.useEffect(()=>{t&&l(t==null?void 0:t.publish)},[t]);const j=o.useCallback(a=>{l(a)},[]),k=o.useCallback((a,b)=>{p(b)},[]),v=e.jsx(ne,{}),f=t&&e.jsxs(e.Fragment,{children:[e.jsx(ie,{backLink:x.dashboard.product.root,editLink:x.dashboard.product.edit(`${t==null?void 0:t.id}`),liveLink:x.product.details(`${t==null?void 0:t.id}`),publish:h||"",onChangePublish:j,publishOptions:re}),e.jsxs(S,{container:!0,spacing:{xs:3,md:5,lg:8},children:[e.jsx(S,{xs:12,md:6,lg:7,children:t&&e.jsx(se,{product:t})}),e.jsx(S,{xs:12,md:6,lg:5,children:t&&e.jsx(te,{disabledActions:!0,product:t,cart:n.cart,onAddCart:m,onGotoStep:C})})]}),e.jsx(g,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:de.map(a=>e.jsxs(g,{sx:{textAlign:"center",px:5},children:[e.jsx(d,{icon:a.icon,width:32,sx:{color:"primary.main"}}),e.jsx(T,{variant:"subtitle1",sx:{mb:1,mt:2},children:a.title}),e.jsx(T,{variant:"body2",sx:{color:"text.secondary"},children:a.description})]},a.title))}),e.jsxs(J,{children:[e.jsx(V,{value:i,onChange:k,sx:{px:3,boxShadow:a=>`inset 0 -2px 0 0 ${X(a.palette.grey[500],.08)}`},children:[{value:"reviews",label:"Reviews (0)"}].map(a=>e.jsx(Z,{value:a.value,label:a.label},a.value))}),i==="reviews"&&e.jsx(oe,{ratings:t.ratings,reviews:t.reviews,totalRatings:t.totalRatings,totalReviews:t.totalReviews})]})]});return e.jsxs(g,{px:5,children:[!t&&v,t&&f]})}function je(){return e.jsxs(e.Fragment,{children:[e.jsx(ae,{children:e.jsx("title",{children:" Dashboard: Product Details"})}),e.jsx(ue,{})]})}export{je as default};
