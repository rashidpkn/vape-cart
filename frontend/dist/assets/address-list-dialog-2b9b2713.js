import{ag as a,j as e,c0 as v,S as q,B as u,ay as i,dO as c,H as F,ap as S,a as C}from"./index-013d871c.js";import{c as D,a as s,n as T,u as w,F as N,o as R,R as n,g as H,h as $,p as E}from"./form-provider-72ea41f9.js";import{L as G,o as O}from"./yup-3c9be388.js";import{D as P,a as k}from"./DialogTitle-1eba6134.js";import{D as B}from"./DialogContent-9f41e166.js";a.node,a.object,a.object;function L({open:p,onClose:l,onCreate:h}){const x=D().shape({name:s().required("Fullname is required"),phoneNumber:s().required("Phone number is required"),apartment:s().required("Apartment is required"),address:s().required("Address is required"),city:s().required("City is required"),state:s().required("State is required"),country:s().required("Country is required"),email:s().email().required("Email is required"),addressType:s(),primary:T()}),j={name:"",city:"",state:"",address:"",primary:!0,phoneNumber:"",apartment:"",addressType:"Home",country:"United Arab Emirates",email:""},m=w({resolver:O(x),defaultValues:j}),{handleSubmit:b,formState:{isSubmitting:y}}=m,f=b(async r=>{try{h({name:r.name,phoneNumber:r.phoneNumber,fullAddress:`${r.apartment} ,${r.address}, ${r.city}, ${r.state}, ${r.country}`,addressType:r.addressType,primary:r.primary,email:r.email}),l()}catch(o){console.error(o)}});return e.jsx(v,{fullWidth:!0,maxWidth:"sm",open:p,onClose:l,children:e.jsxs(N,{methods:m,onSubmit:f,children:[e.jsx(P,{children:"New address"}),e.jsx(B,{dividers:!0,children:e.jsxs(q,{spacing:3,children:[e.jsx(R,{row:!0,name:"addressType",options:[{label:"Home",value:"Home"},{label:"Office",value:"Office"}]}),e.jsxs(u,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(n,{name:"name",label:"Full Name"}),e.jsx(n,{name:"phoneNumber",label:"Phone Number"})]}),e.jsx(n,{name:"apartment",label:"Apartment ,suite,unit etc"}),e.jsx(n,{name:"address",label:"Street Address"}),e.jsxs(u,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(n,{name:"city",label:"City"}),e.jsxs(H,{name:"state",label:"Emirate / Province",children:[e.jsx(i,{value:"",children:"Select an Emirate"}),e.jsx(i,{value:"Abu Dhabi",children:"Abu Dhabi"}),e.jsx(i,{value:"Ajman",children:"Ajman"}),e.jsx(i,{value:"Dubai",children:"Dubai"}),e.jsx(i,{value:"Fujairah",children:"Fujairah"}),e.jsx(i,{value:"Ras Al Khaimah",children:"Ras Al Khaimah"}),e.jsx(i,{value:"Sharjah",children:"Sharjah"}),e.jsx(i,{value:"Umm Al Quwain",children:"Umm Al Quwain"})]})]}),e.jsx(n,{name:"email",label:"E-mail"}),e.jsx($,{name:"country",label:"Country",options:c.map(r=>r.label),getOptionLabel:r=>r,renderOption:(r,o)=>{const{code:d,label:t,phone:A}=c.filter(g=>g.label===o)[0];return t?F.createElement("li",{...r,key:t},e.jsx(S,{icon:`circle-flags:${d.toLowerCase()}`,width:28,sx:{mr:1}},t),t," (",d,") +",A):null}}),e.jsx(E,{name:"primary",label:"Use this address as default."})]})}),e.jsxs(k,{children:[e.jsx(C,{color:"inherit",variant:"outlined",onClick:l,children:"Cancel"}),e.jsx(G,{type:"submit",variant:"contained",loading:y,children:"Deliver to this Address"})]})]})})}L.propTypes={onClose:a.func,onCreate:a.func,open:a.bool};a.node,a.array,a.func,a.func,a.bool,a.func,a.string;export{L as A};
