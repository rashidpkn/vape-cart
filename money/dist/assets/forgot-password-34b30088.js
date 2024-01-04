import{bu as f,bv as b,ay as i,af as e,au as o,aA as j,ax as y,az as F,ac as n,aZ as w}from"./index-82d16c62.js";import{c as v,a as P,b as S,F as R,R as k}from"./form-provider-a0198d79.js";import{P as L}from"./plan-premium-icon-91c23b32.js";import"./api-3aac980b.js";import{o as E,L as I}from"./yup-e2cd789f.js";import"./format-number-2839d534.js";import"./Switch-372b9d12.js";import"./transition-bee6630b.js";import"./Checkbox-7ab06dbc.js";import"./image-5ef12a9c.js";import"./Chip-af4a5d0d.js";import"./Autocomplete-997a241b.js";import"./Close-2669a4e4.js";import"./axios-e0d8a382.js";import"./CircularProgress-e7ce1de5.js";function $(){const{forgotPassword:r}=f(),l=b(),m=v().shape({email:P().required("Email is required").email("Email must be a valid email address")}),c={email:""},a=S({resolver:E(m),defaultValues:c}),{handleSubmit:d,formState:{isSubmitting:u}}=a,h=d(async t=>{try{await(r==null?void 0:r(t.email));const s=new URLSearchParams({email:t.email}).toString(),g=`${i.auth.firebase.verify}?${s}`;l.push(g)}catch(s){console.error(s)}}),p=e.jsxs(o,{spacing:3,alignItems:"center",children:[e.jsx(k,{name:"email",label:"Email address"}),e.jsx(I,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:u,children:"Send Request"}),e.jsxs(j,{component:y,href:i.auth.firebase.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[e.jsx(F,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),x=e.jsxs(e.Fragment,{children:[e.jsx(L,{sx:{height:96}}),e.jsxs(o,{spacing:1,sx:{my:5},children:[e.jsx(n,{variant:"h3",children:"Forgot your password?"}),e.jsx(n,{variant:"body2",sx:{color:"text.secondary"},children:"Please enter the email address associated with your account and We will email you a link to reset your password."})]})]});return e.jsxs(R,{methods:a,onSubmit:h,children:[x,p]})}function M(){return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx("title",{children:" Firebase: Forgot Password"})}),e.jsx($,{})]})}export{M as default};