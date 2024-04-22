import{ax as L,F as x,b6 as R,b7 as A,b3 as b,aB as U,j as e,S as o,aF as E,bN as i,T as l,bL as $,b2 as k,an as B,bU as d,b0 as D,W as H}from"./index-8741151d.js";import{c as V,f as s,d as z,g as M,R as p,m as W,F as G}from"./form-provider-ffcf404f.js";import"./plan-premium-icon-329709f6.js";import{L as J,o as K}from"./yup-0915a13c.js";import"./Switch-23bdf950.js";import"./transition-bee6630b.js";import"./image-a38f243f.js";import"./CircularProgress-2d93a1d0.js";function O(){const{register:c,login:Q}=L(),[h,j]=x.useState(""),v=R(),m=A(),y=V().shape({firstName:s().required("First name required"),lastName:s().required("Last name required"),storeName:s().required("Store name required"),email:s().required("Email is required").email("Email must be a valid email address"),phoneNumber:s().required("Phone number required"),contactPersonInTouch:s().required("Contact person in touch required"),tradeLicense:z().nullable(),password:s().required("Password is required")}),f={firstName:"",lastName:"",storeName:"",email:"",phoneNumber:"",contactPersonInTouch:"",tradeLicense:"",password:""},g=M({resolver:K(y),defaultValues:f}),{reset:N,handleSubmit:w,watch:P,formState:{isSubmitting:F},setValue:t}=g,n=P(),S=w(async a=>{try{await(c==null?void 0:c(a.email,a.password,a.firstName,a.lastName,a.storeName,a.phoneNumber,a.contactPersonInTouch,a.tradeLicense));const r=new URLSearchParams({email:a.email}).toString(),u=`${b.auth.firebase.verify}?${r}`;v.push(u)}catch(r){console.error(r),N(),j(typeof r=="string"?r:r.message)}}),q=x.useCallback(async a=>{try{alert("Please wait image is uploading");const r=new FormData;r.append("images",a[0]);const{data:u}=await U.post("upload",r);t("tradeLicense",`https://delhi-vape.com${u}`),alert("Image upload complete.")}catch{alert(" Image upload failed, try again.")}},[t,n.images]),C=e.jsxs(o,{spacing:2,sx:{mb:5,position:"relative"},children:[e.jsx(l,{variant:"h4",children:"Get started absolutely free"}),e.jsxs(o,{direction:"row",spacing:.5,children:[e.jsx(l,{variant:"body2",children:" Already have an account? "}),e.jsx(d,{href:b.auth.firebase.login,component:D,variant:"subtitle2",children:"Sign in"})]})]}),T=e.jsxs(l,{component:"div",sx:{color:"text.secondary",mt:2.5,typography:"caption",textAlign:"center"},children:["By signing up, I agree to ",e.jsx(d,{underline:"always",color:"text.primary",children:"Terms of Service"})," and ",e.jsx(d,{underline:"always",color:"text.primary",children:"Privacy Policy"}),"."]}),I=e.jsxs(o,{spacing:2.5,children:[!!h&&e.jsx(E,{severity:"error",children:h}),e.jsxs(o,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(i,{onChange:a=>t("firstName",a.target.value.charAt(0).toUpperCase()+a.target.value.slice(1)),value:n.firstName,name:"firstName",label:"First name"}),e.jsx(i,{onChange:a=>t("lastName",a.target.value.charAt(0).toUpperCase()+a.target.value.slice(1)),value:n.lastName,name:"lastName",label:"Last name"})]}),e.jsx(i,{onChange:a=>t("storeName",a.target.value.charAt(0).toUpperCase()+a.target.value.slice(1)),value:n.storeName,name:"storeName",label:"Store Name"}),e.jsx(p,{name:"email",label:"Email address"}),e.jsx(p,{name:"phoneNumber",label:"Phone number"}),e.jsx(i,{onChange:a=>t("contactPersonInTouch",a.target.value.charAt(0).toUpperCase()+a.target.value.slice(1)),value:n.contactPersonInTouch,name:"contactPersonInTouch",label:"Contact person in touch"}),e.jsx(l,{variant:"subtitle2",children:"Trade license"}),e.jsx(W,{name:"tradeLicense",maxSize:3145728,onDrop:q}),e.jsx(p,{name:"password",label:"Password",type:m.value?"text":"password",InputProps:{endAdornment:e.jsx($,{position:"end",children:e.jsx(k,{onClick:m.onToggle,edge:"end",children:e.jsx(B,{icon:m.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(J,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:F,children:"Create account"})]});return e.jsxs(G,{methods:g,onSubmit:S,children:[C,I,T]})}function te(){return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx("title",{children:" Register"})}),e.jsx(O,{})]})}export{te as default};
