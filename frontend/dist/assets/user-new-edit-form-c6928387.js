import{bG as E,cb as N,D as x,aQ as T,ao as e,aV as p,a_ as c,ba as L,aH as j,ar as t,aM as y,aO as D,d2 as f,aR as P,aJ as z}from"./index-feebbf1a.js";import{c as O,a as o,d as H,m as $,b as B,F as G,n as I,C as M,o as Z,R as l,k as J}from"./form-provider-9a490e1c.js";import{L as Q,o as _}from"./yup-db689d1d.js";import{d as K}from"./format-number-eb8fa3ee.js";import{F as W,S as X}from"./Switch-436da68c.js";function Y({currentUser:a}){const u=E(),{enqueueSnackbar:g}=N(),C=O().shape({name:o().required("Name is required"),email:o().required("Email is required").email("Email must be a valid email address"),phoneNumber:o().required("Phone number is required"),address:o().required("Address is required"),country:o().required("Country is required"),company:o().required("Company is required"),state:o().required("State is required"),city:o().required("City is required"),role:o().required("Role is required"),zipCode:o().required("Zip code is required"),avatarUrl:H().nullable().required("Avatar is required"),status:o(),isVerified:$()}),v=x.useMemo(()=>({name:(a==null?void 0:a.name)||"",city:(a==null?void 0:a.city)||"",role:(a==null?void 0:a.role)||"",email:(a==null?void 0:a.email)||"",state:(a==null?void 0:a.state)||"",status:(a==null?void 0:a.status)||"",address:(a==null?void 0:a.address)||"",country:(a==null?void 0:a.country)||"",zipCode:(a==null?void 0:a.zipCode)||"",company:(a==null?void 0:a.company)||"",avatarUrl:(a==null?void 0:a.avatarUrl)||null,phoneNumber:(a==null?void 0:a.phoneNumber)||"",isVerified:(a==null?void 0:a.isVerified)||!0}),[a]),b=B({resolver:_(C),defaultValues:v}),{reset:q,watch:r,control:w,setValue:h,handleSubmit:F,formState:{isSubmitting:S}}=b,m=r(),R=F(async i=>{try{await new Promise(s=>setTimeout(s,500)),q(),g(a?"Update success!":"Create success!"),u.push(T.dashboard.user.list),console.info("DATA",i)}catch(s){console.error(s)}}),A=x.useCallback(i=>{const s=i[0],d=Object.assign(s,{preview:URL.createObjectURL(s)});s&&h("avatarUrl",d,{shouldValidate:!0})},[h]);return e.jsx(G,{methods:b,onSubmit:R,children:e.jsxs(p,{container:!0,spacing:3,children:[e.jsx(p,{xs:12,md:4,children:e.jsxs(c,{sx:{pt:10,pb:5,px:3},children:[a&&e.jsx(L,{color:m.status==="active"&&"success"||m.status==="banned"&&"error"||"warning",sx:{position:"absolute",top:24,right:24},children:m.status}),e.jsx(j,{sx:{mb:5},children:e.jsx(I,{name:"avatarUrl",maxSize:3145728,onDrop:A,helperText:e.jsxs(t,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",K(3145728)]})})}),a&&e.jsx(W,{labelPlacement:"start",control:e.jsx(M,{name:"status",control:w,render:({field:i})=>e.jsx(X,{...i,checked:i.value!=="active",onChange:s=>i.onChange(s.target.checked?"banned":"active")})}),label:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"subtitle2",sx:{mb:.5},children:"Banned"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Apply disable account"})]}),sx:{mx:0,mb:3,width:1,justifyContent:"space-between"}}),e.jsx(Z,{name:"isVerified",labelPlacement:"start",label:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"subtitle2",sx:{mb:.5},children:"Email Verified"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Disabling this will automatically send the user a verification email"})]}),sx:{mx:0,width:1,justifyContent:"space-between"}}),a&&e.jsx(y,{justifyContent:"center",alignItems:"center",sx:{mt:3},children:e.jsx(D,{variant:"soft",color:"error",children:"Delete User"})})]})}),e.jsx(p,{xs:12,md:8,children:e.jsxs(c,{sx:{p:3},children:[e.jsxs(j,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(l,{name:"name",label:"Full Name"}),e.jsx(l,{name:"email",label:"Email Address"}),e.jsx(l,{name:"phoneNumber",label:"Phone Number"}),e.jsx(J,{name:"country",label:"Country",options:f.map(i=>i.label),getOptionLabel:i=>i,isOptionEqualToValue:(i,s)=>i===s,renderOption:(i,s)=>{const{code:d,label:n,phone:V}=f.filter(k=>k.label===s)[0];return n?x.createElement("li",{...i,key:n},e.jsx(P,{icon:`circle-flags:${d.toLowerCase()}`,width:28,sx:{mr:1}},n),n," (",d,") +",V):null}}),e.jsx(l,{name:"state",label:"State/Region"}),e.jsx(l,{name:"city",label:"City"}),e.jsx(l,{name:"address",label:"Address"}),e.jsx(l,{name:"zipCode",label:"Zip/Code"}),e.jsx(l,{name:"company",label:"Company"}),e.jsx(l,{name:"role",label:"Role"})]}),e.jsx(y,{alignItems:"flex-end",sx:{mt:3},children:e.jsx(Q,{type:"submit",variant:"contained",loading:S,children:a?"Save Changes":"Create User"})})]})})]})})}Y.propTypes={currentUser:z.object};export{Y as U};