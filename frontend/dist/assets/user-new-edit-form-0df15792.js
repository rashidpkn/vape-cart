import{bv as T,c2 as V,D as x,ay as k,af as e,aD as p,aI as c,aU as D,ao as j,ac as t,au as y,aw as L,d5 as f,az as z,aq as P}from"./index-5b506bb3.js";import{c as O,a as o,d as $,m as B,b as H,F as I,n as G,C as Z,o as M,R as l,j as J}from"./form-provider-b655cc6c.js";import{L as K,o as Q}from"./yup-07d8dc3e.js";import{d as W}from"./format-number-9cddddfd.js";import{F as X,S as Y}from"./Switch-9eb3e12d.js";function _({currentUser:a}){const u=T(),{enqueueSnackbar:g}=V(),v=O().shape({name:o().required("Name is required"),email:o().required("Email is required").email("Email must be a valid email address"),phoneNumber:o().required("Phone number is required"),address:o().required("Address is required"),country:o().required("Country is required"),company:o().required("Company is required"),state:o().required("State is required"),city:o().required("City is required"),role:o().required("Role is required"),zipCode:o().required("Zip code is required"),avatarUrl:$().nullable().required("Avatar is required"),status:o(),isVerified:B()}),C=x.useMemo(()=>({name:(a==null?void 0:a.name)||"",city:(a==null?void 0:a.city)||"",role:(a==null?void 0:a.role)||"",email:(a==null?void 0:a.email)||"",state:(a==null?void 0:a.state)||"",status:(a==null?void 0:a.status)||"",address:(a==null?void 0:a.address)||"",country:(a==null?void 0:a.country)||"",zipCode:(a==null?void 0:a.zipCode)||"",company:(a==null?void 0:a.company)||"",avatarUrl:(a==null?void 0:a.avatarUrl)||null,phoneNumber:(a==null?void 0:a.phoneNumber)||"",isVerified:(a==null?void 0:a.isVerified)||!0}),[a]),b=H({resolver:Q(v),defaultValues:C}),{reset:q,watch:r,control:w,setValue:h,handleSubmit:F,formState:{isSubmitting:S}}=b,m=r(),R=F(async i=>{try{await new Promise(s=>setTimeout(s,500)),q(),g(a?"Update success!":"Create success!"),u.push(k.dashboard.user.list),console.info("DATA",i)}catch(s){console.error(s)}}),A=x.useCallback(i=>{const s=i[0],d=Object.assign(s,{preview:URL.createObjectURL(s)});s&&h("avatarUrl",d,{shouldValidate:!0})},[h]);return e.jsx(I,{methods:b,onSubmit:R,children:e.jsxs(p,{container:!0,spacing:3,children:[e.jsx(p,{xs:12,md:4,children:e.jsxs(c,{sx:{pt:10,pb:5,px:3},children:[a&&e.jsx(D,{color:m.status==="active"&&"success"||m.status==="banned"&&"error"||"warning",sx:{position:"absolute",top:24,right:24},children:m.status}),e.jsx(j,{sx:{mb:5},children:e.jsx(G,{name:"avatarUrl",maxSize:3145728,onDrop:A,helperText:e.jsxs(t,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",W(3145728)]})})}),a&&e.jsx(X,{labelPlacement:"start",control:e.jsx(Z,{name:"status",control:w,render:({field:i})=>e.jsx(Y,{...i,checked:i.value!=="active",onChange:s=>i.onChange(s.target.checked?"banned":"active")})}),label:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"subtitle2",sx:{mb:.5},children:"Banned"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Apply disable account"})]}),sx:{mx:0,mb:3,width:1,justifyContent:"space-between"}}),e.jsx(M,{name:"isVerified",labelPlacement:"start",label:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"subtitle2",sx:{mb:.5},children:"Email Verified"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Disabling this will automatically send the user a verification email"})]}),sx:{mx:0,width:1,justifyContent:"space-between"}}),a&&e.jsx(y,{justifyContent:"center",alignItems:"center",sx:{mt:3},children:e.jsx(L,{variant:"soft",color:"error",children:"Delete User"})})]})}),e.jsx(p,{xs:12,md:8,children:e.jsxs(c,{sx:{p:3},children:[e.jsxs(j,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(l,{name:"name",label:"Full Name"}),e.jsx(l,{name:"email",label:"Email Address"}),e.jsx(l,{name:"phoneNumber",label:"Phone Number"}),e.jsx(J,{name:"country",label:"Country",options:f.map(i=>i.label),getOptionLabel:i=>i,isOptionEqualToValue:(i,s)=>i===s,renderOption:(i,s)=>{const{code:d,label:n,phone:E}=f.filter(N=>N.label===s)[0];return n?x.createElement("li",{...i,key:n},e.jsx(z,{icon:`circle-flags:${d.toLowerCase()}`,width:28,sx:{mr:1}},n),n," (",d,") +",E):null}}),e.jsx(l,{name:"state",label:"State/Region"}),e.jsx(l,{name:"city",label:"City"}),e.jsx(l,{name:"address",label:"Address"}),e.jsx(l,{name:"zipCode",label:"Zip/Code"}),e.jsx(l,{name:"company",label:"Company"}),e.jsx(l,{name:"role",label:"Role"})]}),e.jsx(y,{alignItems:"flex-end",sx:{mt:3},children:e.jsx(K,{type:"submit",variant:"contained",loading:S,children:a?"Save Changes":"Create User"})})]})})]})})}_.propTypes={currentUser:P.object};export{_ as U};
