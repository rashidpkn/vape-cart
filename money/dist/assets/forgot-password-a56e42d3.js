import{bZ as j,b_ as p,bQ as f,bR as y,bS as w,aB as i,ae as e,bT as F,bV as P,aw as o,c0 as S,bU as v,aD as R,aA as k,aC as E,ac as n,b7 as I}from"./index-0d34de13.js";import{P as L}from"./plan-premium-icon-b0bac5c4.js";function $(){const{forgotPassword:s}=j(),l=p(),c=f().shape({email:y().required("Email is required").email("Email must be a valid email address")}),d={email:""},r=w({resolver:P(c),defaultValues:d}),{handleSubmit:m,formState:{isSubmitting:u}}=r,h=m(async t=>{try{await(s==null?void 0:s(t.email));const a=new URLSearchParams({email:t.email}).toString(),g=`${i.auth.firebase.verify}?${a}`;l.push(g)}catch(a){console.error(a)}}),x=e.jsxs(o,{spacing:3,alignItems:"center",children:[e.jsx(S,{name:"email",label:"Email address"}),e.jsx(v,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:u,children:"Send Request"}),e.jsxs(R,{component:k,href:i.auth.firebase.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[e.jsx(E,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),b=e.jsxs(e.Fragment,{children:[e.jsx(L,{sx:{height:96}}),e.jsxs(o,{spacing:1,sx:{my:5},children:[e.jsx(n,{variant:"h3",children:"Forgot your password?"}),e.jsx(n,{variant:"body2",sx:{color:"text.secondary"},children:"Please enter the email address associated with your account and We will email you a link to reset your password."})]})]});return e.jsxs(F,{methods:r,onSubmit:h,children:[b,x]})}function V(){return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx("title",{children:" Forgot Password"})}),e.jsx($,{})]})}export{V as default};