import{aw as F,b5 as S,F as P,b6 as E,cR as T,j as e,S as o,aD as A,bg as R,b1 as I,am as k,bz as c,a$ as d,b2 as l,T as m,W as q}from"./index-9704d849.js";import{c as $,a as u,u as z,f as h,F as B}from"./form-provider-12c266a1.js";import{L as C,o as H}from"./yup-74538f83.js";import{u as V}from"./use-search-params-8e21e1aa.js";import"./plan-premium-icon-77ec9d7f.js";import"./image-2ab4982d.js";import"./transition-bee6630b.js";import"./CircularProgress-c34e7eb5.js";function M(){const{login:r}=F(),p=S(),[t,g]=P.useState(""),x=V().get("returnTo"),a=E(),b=$().shape({email:u().required("Email is required").email("Email must be a valid email address"),password:u().required("Password is required")}),j={email:"",password:""},n=z({resolver:H(b),defaultValues:j}),{handleSubmit:f,formState:{isSubmitting:w}}=n,y=f(async i=>{try{await(r==null?void 0:r(i.email,i.password)),p.push(x||T)}catch(s){console.log(`hELLO${s}`),g(typeof s=="string"?s:s.message)}}),L=e.jsxs(o,{spacing:2,sx:{mb:5},children:[e.jsx(m,{variant:"h4",children:"Sign in to Vape Amazon"}),e.jsxs(o,{direction:"row",spacing:.5,children:[e.jsx(m,{variant:"body2",children:"New user?"}),e.jsx(c,{component:d,href:l.auth.firebase.register,variant:"subtitle2",children:"Create an account"})]})]}),v=e.jsxs(o,{spacing:2.5,children:[!!t&&e.jsx(A,{severity:"error",children:t}),e.jsx(h,{name:"email",label:"Email address"}),e.jsx(h,{name:"password",label:"Password",type:a.value?"text":"password",InputProps:{endAdornment:e.jsx(R,{position:"end",children:e.jsx(I,{onClick:a.onToggle,edge:"end",children:e.jsx(k,{icon:a.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(c,{component:d,href:l.auth.firebase.forgotPassword,variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx(C,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:w,children:"Login"})]});return e.jsxs(B,{methods:n,onSubmit:y,children:[L,v]})}function U(){return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx("title",{children:" Login"})}),e.jsx(M,{})]})}export{U as default};
