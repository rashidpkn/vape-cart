import{bw as D,bG as f,bZ as m,D as e,b_ as n,b$ as Q,c0 as x,c1 as A,c2 as B,c3 as R,c4 as l,c5 as T,c6 as E,c7 as P,c8 as _,aQ as G}from"./index-0ba7776f.js";import{P as O}from"./_product-356a4fe5.js";function w(){const t=D(),o=f(),s=m(a=>a.checkout),c=s.activeStep===O.length,u=e.useCallback(()=>{t(n())},[t]),r=e.useCallback(()=>{t(Q())},[t]),p=e.useCallback(a=>{t(x(a))},[t]),i=e.useCallback(a=>{t(A(a))},[t]),C=e.useCallback(a=>{t(B(a))},[t]),b=e.useCallback(a=>{t(R(a))},[t]),k=e.useCallback(a=>{t(l(a)),t(n())},[t]),S=e.useCallback(()=>{t(l(null))},[t]),h=e.useCallback(a=>{t(T(a))},[t]),d=e.useCallback(a=>{s.cart.length&&t(E(a))},[s.cart.length,t]),g=e.useCallback(a=>{t(P(a))},[t]),y=e.useCallback(()=>{c&&(t(_()),o.replace(G.product.root))},[c,t,o]);return{checkout:s,completed:c,onResetAll:y,onAddCart:h,onGotoStep:p,onNextStep:u,onBackStep:r,onDeleteCart:i,onResetBilling:S,onCreateBilling:k,onApplyDiscount:d,onApplyShipping:g,onIncreaseQuantity:C,onDecreaseQuantity:b}}export{w as u};
