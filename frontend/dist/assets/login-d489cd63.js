import{bu as q,bv as z,D as B,bi as D,bw as H,af as r,au as o,ac as u,aA as h,ax as x,ay as g,bm as M,aW as a,az as t,aM as O,aZ as V}from"./index-5b506bb3.js";import{c as N,a as j,b as _,F as $,R as b}from"./form-provider-b655cc6c.js";import{o as G,L as Z}from"./yup-07d8dc3e.js";import{u as J}from"./use-search-params-f0a491f7.js";import{A as K}from"./Alert-1f066dd7.js";import"./plan-premium-icon-ef9d1481.js";import"./api-717b6e77.js";import"./format-number-9cddddfd.js";import"./image-61f119d4.js";import"./transition-bee6630b.js";import"./Checkbox-6650bfc6.js";import"./Chip-41656f72.js";import"./Switch-9eb3e12d.js";import"./Autocomplete-2ecb86fc.js";import"./Close-a03ca5cd.js";import"./CircularProgress-3c42629c.js";import"./axios-d5068281.js";function Q(){const{login:n,loginWithGoogle:i,loginWithGithub:c,loginWithTwitter:l}=q(),f=z(),[m,y]=B.useState(""),w=J().get("returnTo"),d=D(),v=N().shape({email:j().required("Email is required").email("Email must be a valid email address"),password:j().required("Password is required")}),L={email:"",password:""},p=_({resolver:G(v),defaultValues:L}),{reset:F,handleSubmit:S,formState:{isSubmitting:A}}=p,P=S(async e=>{try{await(n==null?void 0:n(e.email,e.password)),f.push(w||H)}catch(s){console.error(s),F(),y(typeof s=="string"?s:s.message)}}),C=async()=>{try{await(i==null?void 0:i())}catch(e){console.error(e)}},E=async()=>{try{await(c==null?void 0:c())}catch(e){console.error(e)}},T=async()=>{try{await(l==null?void 0:l())}catch(e){console.error(e)}},k=r.jsxs(o,{spacing:2,sx:{mb:5},children:[r.jsx(u,{variant:"h4",children:"Sign in to Vape Amazon"}),r.jsxs(o,{direction:"row",spacing:.5,children:[r.jsx(u,{variant:"body2",children:"New user?"}),r.jsx(h,{component:x,href:g.auth.firebase.register,variant:"subtitle2",children:"Create an account"})]})]}),R=r.jsxs(o,{spacing:2.5,children:[!!m&&r.jsx(K,{severity:"error",children:m}),r.jsx(b,{name:"email",label:"Email address"}),r.jsx(b,{name:"password",label:"Password",type:d.value?"text":"password",InputProps:{endAdornment:r.jsx(M,{position:"end",children:r.jsx(a,{onClick:d.onToggle,edge:"end",children:r.jsx(t,{icon:d.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),r.jsx(h,{component:x,href:g.auth.firebase.forgotPassword,variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),r.jsx(Z,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:A,children:"Login"})]}),I=r.jsxs("div",{children:[r.jsx(O,{sx:{my:2.5,typography:"overline",color:"text.disabled","&::before, ::after":{borderTopStyle:"dashed"}},children:"OR"}),r.jsxs(o,{direction:"row",justifyContent:"center",spacing:2,children:[r.jsx(a,{onClick:C,children:r.jsx(t,{icon:"eva:google-fill",color:"#DF3E30"})}),r.jsx(a,{color:"inherit",onClick:E,children:r.jsx(t,{icon:"eva:github-fill"})}),r.jsx(a,{onClick:T,children:r.jsx(t,{icon:"eva:twitter-fill",color:"#1C9CEA"})})]})]});return r.jsxs($,{methods:p,onSubmit:P,children:[k,R,I]})}function hr(){return r.jsxs(r.Fragment,{children:[r.jsx(V,{children:r.jsx("title",{children:" Firebase: Login"})}),r.jsx(Q,{})]})}export{hr as default};
