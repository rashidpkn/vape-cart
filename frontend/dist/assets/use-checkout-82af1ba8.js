import{b9 as D,bg as f,bB as m,D as e,bC as n,bD as B,bE as x,bF as A,bG as E,bH as Q,bI as l,bJ as R,bK as T,bL as G,bM as H,ag as I}from"./index-086ce406.js";import{e as K}from"./_product-66794ccf.js";function U(){const t=D(),o=f(),s=m(a=>a.checkout),c=s.activeStep===K.length,u=e.useCallback(()=>{t(n())},[t]),r=e.useCallback(()=>{t(B())},[t]),p=e.useCallback(a=>{t(x(a))},[t]),b=e.useCallback(a=>{t(A(a))},[t]),i=e.useCallback(a=>{t(E(a))},[t]),C=e.useCallback(a=>{t(Q(a))},[t]),k=e.useCallback(a=>{t(l(a)),t(n())},[t]),S=e.useCallback(()=>{t(l(null))},[t]),g=e.useCallback(a=>{t(R(a))},[t]),h=e.useCallback(a=>{s.cart.length&&t(T(a))},[s.cart.length,t]),d=e.useCallback(a=>{t(G(a))},[t]),y=e.useCallback(()=>{c&&(t(H()),o.replace(I.product.root))},[c,t,o]);return{checkout:s,completed:c,onResetAll:y,onAddCart:g,onGotoStep:p,onNextStep:u,onBackStep:r,onDeleteCart:b,onResetBilling:S,onCreateBilling:k,onApplyDiscount:h,onApplyShipping:d,onIncreaseQuantity:i,onDecreaseQuantity:C}}export{U as u};
