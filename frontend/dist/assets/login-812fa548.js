import{aw as v,b5 as F,F as P,b6 as E,cS as T,j as e,S as o,aE as A,bK as R,b1 as I,am as k,bT as c,a$ as d,b2 as l,T as m,W as q}from"./index-b8354e19.js";import{c as $,f as u,g as B,R as p,F as C}from"./form-provider-fec34da4.js";import{L as H,o as V}from"./yup-d2ef2170.js";import{u as z}from"./use-search-params-9a5b8af3.js";import"./plan-premium-icon-929b927d.js";import"./Switch-6dd1074d.js";import"./transition-bee6630b.js";import"./image-ab67bd03.js";import"./CircularProgress-22dad298.js";function M(){const{login:r}=v(),h=F(),[t,g]=P.useState(""),x=z().get("returnTo"),a=E(),b=$().shape({email:u().required("Email is required").email("Email must be a valid email address"),password:u().required("Password is required")}),j={email:"",password:""},n=B({resolver:V(b),defaultValues:j}),{reset:O,handleSubmit:f,formState:{isSubmitting:w}}=n,y=f(async i=>{try{await(r==null?void 0:r(i.email,i.password)),h.push(x||T)}catch(s){console.log(`hELLO${s}`),g(typeof s=="string"?s:s.message)}}),L=e.jsxs(o,{spacing:2,sx:{mb:5},children:[e.jsx(m,{variant:"h4",children:"Sign in to Vape Amazon"}),e.jsxs(o,{direction:"row",spacing:.5,children:[e.jsx(m,{variant:"body2",children:"New user?"}),e.jsx(c,{component:d,href:l.auth.firebase.register,variant:"subtitle2",children:"Create an account"})]})]}),S=e.jsxs(o,{spacing:2.5,children:[!!t&&e.jsx(A,{severity:"error",children:t}),e.jsx(p,{name:"email",label:"Email address"}),e.jsx(p,{name:"password",label:"Password",type:a.value?"text":"password",InputProps:{endAdornment:e.jsx(R,{position:"end",children:e.jsx(I,{onClick:a.onToggle,edge:"end",children:e.jsx(k,{icon:a.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(c,{component:d,href:l.auth.firebase.forgotPassword,variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx(H,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:w,children:"Login"})]});return e.jsxs(C,{methods:n,onSubmit:y,children:[L,S]})}function Y(){return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx("title",{children:" Login"})}),e.jsx(M,{})]})}export{Y as default};