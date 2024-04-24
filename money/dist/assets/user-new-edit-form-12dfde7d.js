import{bx as T,D as r,c0 as F,cD as V,bR as D,bS as t,c3 as k,dY as z,bT as L,bW as P,aB as O,ae as a,bU as $,aG as n,aL as p,aq as u,dZ as B,ac as G,d_ as H,c2 as o,cI as I,e0 as x,aC as Z,aw as _,bV as M,cb as W,eo as Y,ep as J,cc as K,as as Q,cd as X}from"./index-2830f5ff.js";function U(){const{id:b}=T(),[e,h]=r.useState({}),y=async()=>{const i=await W(Y(K(X,"users"),J("uid","==",b))),s=[];i.forEach(l=>{s.push(l.data())}),h(s[0])};r.useEffect(()=>{y()},[]);const j=F(),{enqueueSnackbar:q}=V(),f=D().shape({displayName:t().required("Name is required"),email:t().required("Email is required").email("Email must be a valid email address"),phoneNumber:t().required("Phone number is required"),address:t().required("Address is required"),country:t().required("Country is required"),company:t().required("Company is required"),state:t().required("State is required"),city:t().required("City is required"),role:t().required("Role is required"),zipCode:t().required("Zip code is required"),avatarUrl:k().nullable().required("Avatar is required"),status:t(),isVerified:z()}),C=r.useMemo(()=>({displayName:(e==null?void 0:e.displayName)||"",city:(e==null?void 0:e.city)||"",role:(e==null?void 0:e.role)||"",email:(e==null?void 0:e.email)||"",state:(e==null?void 0:e.state)||"",status:(e==null?void 0:e.status)||"",address:(e==null?void 0:e.address)||"",country:(e==null?void 0:e.country)||"",zipCode:(e==null?void 0:e.zipCode)||"",company:(e==null?void 0:e.company)||"",avatarUrl:(e==null?void 0:e.avatarUrl)||null,phoneNumber:(e==null?void 0:e.phoneNumber)||"",isVerified:(e==null?void 0:e.isVerified)||!0}),[e]),m=L({resolver:P(f),defaultValues:C}),{reset:g,watch:S,control:ee,setValue:c,handleSubmit:v,formState:{isSubmitting:w}}=m;S();const N=v(async i=>{try{await new Promise(s=>setTimeout(s,500)),g(),q(e?"Update success!":"Create success!"),j.push(O.dashboard.user.list),console.info("DATA",i)}catch(s){console.error(s)}}),R=r.useCallback(i=>{const s=i[0],l=Object.assign(s,{preview:URL.createObjectURL(s)});s&&c("avatarUrl",l,{shouldValidate:!0})},[c]);return a.jsx($,{methods:m,onSubmit:N,children:a.jsxs(n,{container:!0,spacing:3,children:[a.jsx(n,{xs:12,md:4,children:a.jsx(p,{sx:{pt:10,pb:5,px:3},children:a.jsx(u,{sx:{mb:5},children:a.jsx(B,{name:"avatarUrl",maxSize:3145728,onDrop:R,helperText:a.jsxs(G,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",a.jsx("br",{})," max size of ",H(3145728)]})})})})}),a.jsx(n,{xs:12,md:8,children:a.jsxs(p,{sx:{p:3},children:[a.jsxs(u,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[a.jsx(o,{name:"displayName",label:"Full Name"}),a.jsx(o,{name:"email",label:"Email Address"}),a.jsx(o,{name:"phoneNumber",label:"Phone Number"}),a.jsx(I,{name:"country",label:"Country",options:x.map(i=>i.label),getOptionLabel:i=>i,isOptionEqualToValue:(i,s)=>i===s,renderOption:(i,s)=>{const{code:l,label:d,phone:A}=x.filter(E=>E.label===s)[0];return d?r.createElement("li",{...i,key:d},a.jsx(Z,{icon:`circle-flags:${l.toLowerCase()}`,width:28,sx:{mr:1}},d),d," (",l,") +",A):null}}),a.jsx(o,{name:"state",label:"State/Region"}),a.jsx(o,{name:"city",label:"City"}),a.jsx(o,{name:"address",label:"Address"}),a.jsx(o,{name:"zipCode",label:"Zip/Code"}),a.jsx(o,{name:"company",label:"Company"}),a.jsx(o,{name:"role",label:"Role"})]}),a.jsx(_,{alignItems:"flex-end",sx:{mt:3},children:a.jsx(M,{type:"submit",variant:"contained",loading:w,children:e?"Save Changes":"Create User"})})]})})]})})}U.propTypes={currentUser:Q.object};export{U};
