import{aw as S,b3 as L,F as P,b4 as T,cN as A,j as e,S as o,aD as E,be as R,b1 as I,am as k,bx as l,a$ as c,b2 as d,T as m,W as q}from"./index-a6205980.js";import{c as z,a as u,u as B,R as p,F as C}from"./form-provider-fd288eda.js";import{L as H,o as N}from"./yup-3a491126.js";import{u as V}from"./use-search-params-cb8a0017.js";import"./plan-premium-icon-f303ddc4.js";import"./file-thumbnail-4ef20bf6.js";import"./image-14de179b.js";import"./transition-bee6630b.js";import"./CircularProgress-621b3fbc.js";function $(){const{login:r}=S(),h=L(),[t,x]=P.useState(""),g=V().get("returnTo"),s=T(),b=z().shape({email:u().required("Email is required").email("Email must be a valid email address"),password:u().required("Password is required")}),j={email:"",password:""},n=B({resolver:N(b),defaultValues:j}),{handleSubmit:f,formState:{isSubmitting:w}}=n,y=f(async i=>{try{await(r==null?void 0:r(i.email,i.password)),h.push(g||A)}catch(a){x(typeof a=="string"?a:a.message.replace("Firebase: Error ","").replace("(","").replace(")","").replace("auth/","").replaceAll("-"," "))}}),F=e.jsxs(o,{spacing:2,sx:{mb:5},children:[e.jsx(m,{variant:"h4",children:"Sign in to Vape Amazon"}),e.jsxs(o,{direction:"row",spacing:.5,children:[e.jsx(m,{variant:"body2",children:"New user?"}),e.jsx(l,{component:c,href:d.auth.firebase.register,variant:"subtitle2",children:"Create an account"})]})]}),v=e.jsxs(o,{spacing:2.5,children:[!!t&&e.jsx(E,{severity:"error",style:{textTransform:"capitalize"},children:t}),e.jsx(p,{name:"email",label:"Email address"}),e.jsx(p,{name:"password",label:"Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(R,{position:"end",children:e.jsx(I,{onClick:s.onToggle,edge:"end",children:e.jsx(k,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(l,{component:c,href:d.auth.firebase.forgotPassword,variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx(H,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:w,children:"Login"})]});return e.jsxs(C,{methods:n,onSubmit:y,children:[F,v]})}function X(){return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx("title",{children:" Login"})}),e.jsx($,{})]})}export{X as default};
