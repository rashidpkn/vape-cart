import{bD as D,b_ as m,cl as f,D as e,cm as n,cn as B,co as x,cp as A,cq as Q,cr as R,cs as l,ct as T,cu as E,cv as _,cw as v,aB as O}from"./index-1a7acf6a.js";import{e as P}from"./_product-fc4b357e.js";function w(){const t=D(),o=m(),c=f(a=>a.checkout),s=c.activeStep===P.length,u=e.useCallback(()=>{t(n())},[t]),r=e.useCallback(()=>{t(B())},[t]),p=e.useCallback(a=>{t(x(a))},[t]),i=e.useCallback(a=>{t(A(a))},[t]),C=e.useCallback(a=>{t(Q(a))},[t]),k=e.useCallback(a=>{t(R(a))},[t]),b=e.useCallback(a=>{t(l(a)),t(n())},[t]),S=e.useCallback(()=>{t(l(null))},[t]),h=e.useCallback(a=>{t(T(a))},[t]),d=e.useCallback(a=>{c.cart.length&&t(E(a))},[c.cart.length,t]),g=e.useCallback(a=>{t(_(a))},[t]),y=e.useCallback(()=>{s&&(t(v()),o.replace(O.product.root))},[s,t,o]);return{checkout:c,completed:s,onResetAll:y,onAddCart:h,onGotoStep:p,onNextStep:u,onBackStep:r,onDeleteCart:i,onResetBilling:S,onCreateBilling:b,onApplyDiscount:d,onApplyShipping:g,onIncreaseQuantity:C,onDecreaseQuantity:k}}export{w as u};
