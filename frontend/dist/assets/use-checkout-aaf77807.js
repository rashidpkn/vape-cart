import{bz as D,bJ as f,c0 as m,H as e,c1 as n,c2 as x,c3 as A,c4 as B,c5 as Q,c6 as R,c7 as l,c8 as T,c9 as E,ca as P,cb as H,p as O}from"./index-5abd2fc6.js";import{P as U}from"./_product-356a4fe5.js";function z(){const t=D(),o=f(),c=m(a=>a.checkout),s=c.activeStep===U.length,u=e.useCallback(()=>{t(n())},[t]),p=e.useCallback(()=>{t(x())},[t]),r=e.useCallback(a=>{t(A(a))},[t]),i=e.useCallback(a=>{t(B(a))},[t]),C=e.useCallback(a=>{t(Q(a))},[t]),k=e.useCallback(a=>{t(R(a))},[t]),b=e.useCallback(a=>{t(l(a)),t(n())},[t]),S=e.useCallback(()=>{t(l(null))},[t]),h=e.useCallback(a=>{t(T(a))},[t]),d=e.useCallback(a=>{c.cart.length&&t(E(a))},[c.cart.length,t]),g=e.useCallback(a=>{t(P(a))},[t]),y=e.useCallback(()=>{s&&(t(H()),o.replace(O.product.root))},[s,t,o]);return{checkout:c,completed:s,onResetAll:y,onAddCart:h,onGotoStep:r,onNextStep:u,onBackStep:p,onDeleteCart:i,onResetBilling:S,onCreateBilling:b,onApplyDiscount:d,onApplyShipping:g,onIncreaseQuantity:C,onDecreaseQuantity:k}}export{z as u};