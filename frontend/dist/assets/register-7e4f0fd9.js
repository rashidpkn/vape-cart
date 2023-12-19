import{bj as T,D as B,bk as I,aS as $,ag as g,a8 as e,a9 as t,ac as u,ai as h,af as D,aP as H,aH as i,ah as n,aw as M,aK as O}from"./index-80ed1a65.js";import{c as V,a as o,b as z,F as G,R as a}from"./form-provider-d1c92717.js";import"./plan-premium-icon-f791f295.js";import{o as K}from"./yup-6ed98c1a.js";import{A as U}from"./Alert-8d4b05c0.js";import{L as J}from"./LoadingButton-f18783df.js";import"./upload-avatar-3759b190.js";import"./format-number-ba689ea4.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-9d2cd837.js";import"./image-54d982f3.js";import"./Checkbox-5d5b6085.js";import"./SwitchBase-e1bf7dff.js";import"./Chip-7541428a.js";import"./FormControlLabel-5e3136f2.js";import"./FormGroup-e2f17784.js";import"./Switch-803759d5.js";import"./editor-3d227a32.js";import"./highlight-e6757fb7.js";import"./Slider-009caab2.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-1a32c639.js";import"./Radio-9bef1a5f.js";import"./Autocomplete-d223b2ab.js";import"./Close-7086e489.js";import"./CircularProgress-0735bdd2.js";function Q(){const{register:l,loginWithGoogle:c,loginWithGithub:m,loginWithTwitter:d}=T(),[x,y]=B.useState(""),b=I(),p=$(),f=V().shape({firstName:o().required("First name required"),lastName:o().required("Last name required"),storeName:o().required("Store name required"),email:o().required("Email is required").email("Email must be a valid email address"),phoneNumber:o().required("Phone number required"),password:o().required("Password is required")}),v={firstName:"",lastName:"",storeName:"",email:"",phoneNumber:"",password:""},j=z({resolver:K(f),defaultValues:v}),{reset:w,handleSubmit:N,formState:{isSubmitting:S}}=j,q=N(async r=>{try{await(l==null?void 0:l(r.email,r.password,r.firstName,r.lastName,r.storeName,r.phoneNumber));const s=new URLSearchParams({email:r.email}).toString(),E=`${g.auth.firebase.verify}?${s}`;b.push(E)}catch(s){console.error(s),w(),y(typeof s=="string"?s:s.message)}}),F=async()=>{try{await(c==null?void 0:c())}catch(r){console.error(r)}},P=async()=>{try{await(m==null?void 0:m())}catch(r){console.error(r)}},L=async()=>{try{await(d==null?void 0:d())}catch(r){console.error(r)}},R=e.jsxs(t,{spacing:2,sx:{mb:5,position:"relative"},children:[e.jsx(u,{variant:"h4",children:"Get started absolutely free"}),e.jsxs(t,{direction:"row",spacing:.5,children:[e.jsx(u,{variant:"body2",children:" Already have an account? "}),e.jsx(h,{href:g.auth.firebase.login,component:D,variant:"subtitle2",children:"Sign in"})]})]}),C=e.jsxs(u,{component:"div",sx:{color:"text.secondary",mt:2.5,typography:"caption",textAlign:"center"},children:["By signing up, I agree to ",e.jsx(h,{underline:"always",color:"text.primary",children:"Terms of Service"})," and ",e.jsx(h,{underline:"always",color:"text.primary",children:"Privacy Policy"}),"."]}),k=e.jsxs(t,{spacing:2.5,children:[!!x&&e.jsx(U,{severity:"error",children:x}),e.jsxs(t,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(a,{name:"firstName",label:"First name"}),e.jsx(a,{name:"lastName",label:"Last name"})]}),e.jsx(a,{name:"storeName",label:"Store name"}),e.jsx(a,{name:"email",label:"Business email address"}),e.jsx(a,{name:"phoneNumber",label:"Phone number"}),e.jsx(a,{name:"password",label:"Password",type:p.value?"text":"password",InputProps:{endAdornment:e.jsx(H,{position:"end",children:e.jsx(i,{onClick:p.onToggle,edge:"end",children:e.jsx(n,{icon:p.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(J,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:S,children:"Create account"})]}),A=e.jsxs("div",{children:[e.jsx(M,{sx:{my:2.5,typography:"overline",color:"text.disabled","&::before, ::after":{borderTopStyle:"dashed"}},children:"OR"}),e.jsxs(t,{direction:"row",justifyContent:"center",spacing:2,children:[e.jsx(i,{onClick:F,children:e.jsx(n,{icon:"eva:google-fill",color:"#DF3E30"})}),e.jsx(i,{color:"inherit",onClick:P,children:e.jsx(n,{icon:"eva:github-fill"})}),e.jsx(i,{onClick:L,children:e.jsx(n,{icon:"eva:twitter-fill",color:"#1C9CEA"})})]})]});return e.jsxs(G,{methods:j,onSubmit:q,children:[R,k,C,A]})}function we(){return e.jsxs(e.Fragment,{children:[e.jsx(O,{children:e.jsx("title",{children:" Firebase: Register"})}),e.jsx(Q,{})]})}export{we as default};
