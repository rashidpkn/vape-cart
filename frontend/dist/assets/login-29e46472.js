import{bI as h,bJ as P,H as T,bE as A,bK as E,j as e,S as a,T as c,aT as d,R as l,p as m,by as I,bd as R,I as k,W as q}from"./index-5abd2fc6.js";import{c as H,a as u,b as B,F as C,R as p}from"./form-provider-18beb9cd.js";import{o as V,L as z}from"./yup-1ca7bc00.js";import{u as M}from"./use-search-params-2673de7c.js";import{A as N}from"./Alert-40f408bc.js";import"./plan-premium-icon-5217834a.js";import"./format-number-4c6f0f97.js";import"./image-76177698.js";import"./transition-bee6630b.js";import"./Checkbox-9b69a79b.js";import"./Switch-7ef21d4a.js";import"./CircularProgress-b0876ac3.js";function W(){const{login:r}=h(),x=P(),[t,g]=T.useState(""),b=M().get("returnTo"),o=A(),j=H().shape({email:u().required("Email is required").email("Email must be a valid email address"),password:u().required("Password is required")}),f={email:"",password:""},n=B({resolver:V(j),defaultValues:f}),{reset:w,handleSubmit:y,formState:{isSubmitting:v}}=n,S=y(async i=>{try{await(r==null?void 0:r(i.email,i.password)),x.push(b||E)}catch(s){console.error(s),w(),g(typeof s=="string"?s:s.message)}}),F=e.jsxs(a,{spacing:2,sx:{mb:5},children:[e.jsx(c,{variant:"h4",children:"Sign in to Vape Amazon"}),e.jsxs(a,{direction:"row",spacing:.5,children:[e.jsx(c,{variant:"body2",children:"New user?"}),e.jsx(d,{component:l,href:m.auth.firebase.register,variant:"subtitle2",children:"Create an account"})]})]}),L=e.jsxs(a,{spacing:2.5,children:[!!t&&e.jsx(N,{severity:"error",children:t}),e.jsx(p,{name:"email",label:"Email address"}),e.jsx(p,{name:"password",label:"Password",type:o.value?"text":"password",InputProps:{endAdornment:e.jsx(I,{position:"end",children:e.jsx(R,{onClick:o.onToggle,edge:"end",children:e.jsx(k,{icon:o.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(d,{component:l,href:m.auth.firebase.forgotPassword,variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx(z,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:v,children:"Login"})]});return e.jsxs(C,{methods:n,onSubmit:S,children:[F,L]})}function re(){const{user:r}=h();return console.log(r),e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx("title",{children:"  Login"})}),e.jsx(W,{})]})}export{re as default};
