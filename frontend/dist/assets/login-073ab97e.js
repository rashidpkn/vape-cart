import{bf as q,bg as H,D as B,aP as D,bh as M,a8 as r,a9 as s,ac as h,ai as u,af as x,ag as g,aM as O,aF as t,ah as a,av as V,aH as z}from"./index-11738516.js";import{c as N,a as j,b as _,F as $,R as f}from"./form-provider-f96527b0.js";import{o as G}from"./yup-bca4f6dc.js";import{u as J}from"./use-search-params-14f5b140.js";import{A as K}from"./Alert-4b2a6741.js";import{L as Q}from"./LoadingButton-1d55d601.js";import"./plan-premium-icon-a1439516.js";import"./upload-avatar-fa2c1658.js";import"./format-number-c753fa5f.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-bfb519dd.js";import"./image-d6781c39.js";import"./TextField-641e8c4b.js";import"./FormControl-864e8d98.js";import"./FormLabel-1ef3c432.js";import"./Select-ec9274e6.js";import"./Menu-2f9bdcd2.js";import"./Checkbox-48ab4b6a.js";import"./SwitchBase-c89eddd3.js";import"./Chip-972c5843.js";import"./FormControlLabel-4b6d26c8.js";import"./FormGroup-4c70b305.js";import"./Switch-9770e40d.js";import"./editor-ec993798.js";import"./highlight-2bea92a4.js";import"./Slider-a7752647.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-e5687391.js";import"./Radio-f866b35a.js";import"./Autocomplete-a3087f19.js";import"./Close-b0d429b2.js";import"./CircularProgress-ac93d5f1.js";function U(){const{login:i,loginWithGoogle:n,loginWithGithub:c,loginWithTwitter:l}=q(),b=H(),[m,y]=B.useState(""),w=J().get("returnTo"),d=D(),v=N().shape({email:j().required("Email is required").email("Email must be a valid email address"),password:j().required("Password is required")}),L={email:"",password:""},p=_({resolver:G(v),defaultValues:L}),{reset:F,handleSubmit:P,formState:{isSubmitting:S}}=p,A=P(async e=>{try{await(i==null?void 0:i(e.email,e.password)),b.push(w||M)}catch(o){console.error(o),F(),y(typeof o=="string"?o:o.message)}}),C=async()=>{try{await(n==null?void 0:n())}catch(e){console.error(e)}},E=async()=>{try{await(c==null?void 0:c())}catch(e){console.error(e)}},T=async()=>{try{await(l==null?void 0:l())}catch(e){console.error(e)}},k=r.jsxs(s,{spacing:2,sx:{mb:5},children:[r.jsx(h,{variant:"h4",children:"Sign in to Vape Amazon"}),r.jsxs(s,{direction:"row",spacing:.5,children:[r.jsx(h,{variant:"body2",children:"New user?"}),r.jsx(u,{component:x,href:g.auth.firebase.register,variant:"subtitle2",children:"Create an account"})]})]}),R=r.jsxs(s,{spacing:2.5,children:[!!m&&r.jsx(K,{severity:"error",children:m}),r.jsx(f,{name:"email",label:"Email address"}),r.jsx(f,{name:"password",label:"Password",type:d.value?"text":"password",InputProps:{endAdornment:r.jsx(O,{position:"end",children:r.jsx(t,{onClick:d.onToggle,edge:"end",children:r.jsx(a,{icon:d.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),r.jsx(u,{component:x,href:g.auth.firebase.forgotPassword,variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),r.jsx(Q,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:S,children:"Login"})]}),I=r.jsxs("div",{children:[r.jsx(V,{sx:{my:2.5,typography:"overline",color:"text.disabled","&::before, ::after":{borderTopStyle:"dashed"}},children:"OR"}),r.jsxs(s,{direction:"row",justifyContent:"center",spacing:2,children:[r.jsx(t,{onClick:C,children:r.jsx(a,{icon:"eva:google-fill",color:"#DF3E30"})}),r.jsx(t,{color:"inherit",onClick:E,children:r.jsx(a,{icon:"eva:github-fill"})}),r.jsx(t,{onClick:T,children:r.jsx(a,{icon:"eva:twitter-fill",color:"#1C9CEA"})})]})]});return r.jsxs($,{methods:p,onSubmit:A,children:[k,R,I]})}function Tr(){return r.jsxs(r.Fragment,{children:[r.jsx(z,{children:r.jsx("title",{children:" Firebase: Login"})}),r.jsx(U,{})]})}export{Tr as default};