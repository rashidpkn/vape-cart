import{bz as D,bJ as f,c0 as m,D as e,c1 as n,c2 as Q,c3 as x,c4 as A,c5 as B,c6 as R,c7 as l,c8 as T,c9 as E,ca as P,cb as O,aQ as U}from"./index-73044ea5.js";import{P as _}from"./_product-356a4fe5.js";function G(){const t=D(),o=f(),c=m(a=>a.checkout),s=c.activeStep===_.length,u=e.useCallback(()=>{t(n())},[t]),r=e.useCallback(()=>{t(Q())},[t]),p=e.useCallback(a=>{t(x(a))},[t]),i=e.useCallback(a=>{t(A(a))},[t]),C=e.useCallback(a=>{t(B(a))},[t]),k=e.useCallback(a=>{t(R(a))},[t]),b=e.useCallback(a=>{t(l(a)),t(n())},[t]),S=e.useCallback(()=>{t(l(null))},[t]),h=e.useCallback(a=>{t(T(a))},[t]),d=e.useCallback(a=>{c.cart.length&&t(E(a))},[c.cart.length,t]),g=e.useCallback(a=>{t(P(a))},[t]),y=e.useCallback(()=>{s&&(t(O()),o.replace(U.product.root))},[s,t,o]);return{checkout:c,completed:s,onResetAll:y,onAddCart:h,onGotoStep:p,onNextStep:u,onBackStep:r,onDeleteCart:i,onResetBilling:S,onCreateBilling:b,onApplyDiscount:d,onApplyShipping:g,onIncreaseQuantity:C,onDecreaseQuantity:k}}export{G as u};
