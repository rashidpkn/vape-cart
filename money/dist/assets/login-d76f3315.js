import{ay as w,az as P,a4 as S,aA as v,aB as A,aC as i,aD as F,aE as E,j as e,aF as L,aG as T,S as d,g as I,aH as l,aI as q,aJ as B,aK as H,aL as R,W as z}from"./index-519398e3.js";import{u as C}from"./use-search-params-6bb95114.js";import{A as V}from"./Alert-a48ae8fe.js";import"./plan-premium-icon-547f4358.js";function k(){const{login:a}=w(),c=P(),[o,m]=S.useState(""),u=C().get("returnTo"),r=v(),p=A().shape({email:i().required("Email is required").email("Email must be a valid email address").oneOf(["info@vape-dubai.com"],"Please enter admin email"),password:i().required("Password is required")}),h={email:"",password:""},n=F({resolver:T(p),defaultValues:h}),{reset:g,handleSubmit:x,formState:{isSubmitting:j}}=n,f=x(async t=>{try{await(a==null?void 0:a(t.email,t.password)),c.push(u||E)}catch(s){console.error(s),g(),m(typeof s=="string"?s:s.message)}}),b=e.jsx(d,{spacing:2,sx:{mb:5},children:e.jsx(I,{variant:"h4",children:"Sign in to Vape Amazon"})}),y=e.jsxs(d,{spacing:2.5,children:[!!o&&e.jsx(V,{severity:"error",children:o}),e.jsx(l,{name:"email",label:"Email address"}),e.jsx(l,{name:"password",label:"Password",type:r.value?"text":"password",InputProps:{endAdornment:e.jsx(q,{position:"end",children:e.jsx(B,{onClick:r.onToggle,edge:"end",children:e.jsx(H,{icon:r.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(R,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:j,children:"Login"})]});return e.jsxs(L,{methods:n,onSubmit:f,children:[b,y]})}function $(){return e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsx("title",{children:" Login"})}),e.jsx(k,{})]})}export{$ as default};
