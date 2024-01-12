import{bS as q,bT as z,D as B,bs as N,bI as V,bJ as m,bK as D,bU as H,af as e,bL as M,bN as O,au as a,ac as x,aB as p,ay as b,az as g,bV as j,bz as _,b2 as o,aA as n,bM as $,aN as G,b5 as J}from"./index-bb3ecc03.js";import{u as K}from"./use-search-params-bfb3da03.js";import{A as U}from"./Alert-7daca57b.js";import"./api-3aac980b.js";import"./axios-e0d8a382.js";function Q(){const{login:t,loginWithGoogle:i,loginWithGithub:c,loginWithTwitter:l}=q(),y=z(),[h,f]=B.useState(""),w=K().get("returnTo"),d=N(),v=V().shape({email:m().required("Email is required").email("Email must be a valid email address"),password:m().required("Password is required")}),L={email:"",password:""},u=D({resolver:O(v),defaultValues:L}),{reset:S,handleSubmit:F,formState:{isSubmitting:A}}=u,P=F(async r=>{try{await(t==null?void 0:t(r.email,r.password)),y.push(w||H)}catch(s){console.error(s),S(),f(typeof s=="string"?s:s.message)}}),C=async()=>{try{await(i==null?void 0:i())}catch(r){console.error(r)}},E=async()=>{try{await(c==null?void 0:c())}catch(r){console.error(r)}},T=async()=>{try{await(l==null?void 0:l())}catch(r){console.error(r)}},k=e.jsxs(a,{spacing:2,sx:{mb:5},children:[e.jsx(x,{variant:"h4",children:"Sign in to Vape Amazon"}),e.jsxs(a,{direction:"row",spacing:.5,children:[e.jsx(x,{variant:"body2",children:"New user?"}),e.jsx(p,{component:b,href:g.auth.firebase.register,variant:"subtitle2",children:"Create an account"})]})]}),I=e.jsxs(a,{spacing:2.5,children:[!!h&&e.jsx(U,{severity:"error",children:h}),e.jsx(j,{name:"email",label:"Email address"}),e.jsx(j,{name:"password",label:"Password",type:d.value?"text":"password",InputProps:{endAdornment:e.jsx(_,{position:"end",children:e.jsx(o,{onClick:d.onToggle,edge:"end",children:e.jsx(n,{icon:d.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(p,{component:b,href:g.auth.firebase.forgotPassword,variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx($,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:A,children:"Login"})]}),R=e.jsxs("div",{children:[e.jsx(G,{sx:{my:2.5,typography:"overline",color:"text.disabled","&::before, ::after":{borderTopStyle:"dashed"}},children:"OR"}),e.jsxs(a,{direction:"row",justifyContent:"center",spacing:2,children:[e.jsx(o,{onClick:C,children:e.jsx(n,{icon:"eva:google-fill",color:"#DF3E30"})}),e.jsx(o,{color:"inherit",onClick:E,children:e.jsx(n,{icon:"eva:github-fill"})}),e.jsx(o,{onClick:T,children:e.jsx(n,{icon:"eva:twitter-fill",color:"#1C9CEA"})})]})]});return e.jsxs(M,{methods:u,onSubmit:P,children:[k,I,R]})}function se(){return e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsx("title",{children:" Firebase: Login"})}),e.jsx(Q,{})]})}export{se as default};