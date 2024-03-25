import{j as e,S as o,b6 as q,T as u,B as v,bb as F,aL as n,bH as S,bf as d,d4 as C,F as A,aS as T,aP as D,da as L,cD as N,be as I,bz as $,d5 as R}from"./index-274325b3.js";import{c as H,a as i,m as k,b as E,F as P,q as B,R as j,i as O,k as G,r as U}from"./form-provider-a11e6a59.js";import{L as W,o as K}from"./yup-763216e5.js";import{D as Q,a as z}from"./DialogTitle-9e1fb032.js";import{D as M}from"./DialogContent-ce2541a6.js";function V({address:l,action:a,sx:t,...y}){const{name:m,fullAddress:p,addressType:x,phoneNumber:c,primary:h}=l;return e.jsxs(o,{component:q,spacing:2,alignItems:{md:"flex-end"},direction:{xs:"column",md:"row"},sx:{position:"relative",...t},...y,children:[e.jsxs(o,{flexGrow:1,spacing:1,children:[e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsxs(u,{variant:"subtitle2",children:[m,e.jsxs(v,{component:"span",sx:{ml:.5,typography:"body2",color:"text.secondary"},children:["(",x,")"]})]}),h&&e.jsx(F,{color:"info",sx:{ml:1},children:"Default"})]}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:p}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:c})]}),a&&a]})}V.propTypes={action:n.node,address:n.object,sx:n.object};function X({open:l,onClose:a,onCreate:t}){const y=H().shape({name:i().required("Fullname is required"),phoneNumber:i().required("Phone number is required"),apartment:i().required("Apartment is required"),address:i().required("Address is required"),city:i().required("City is required"),state:i().required("State is required"),country:i().required("Country is required"),email:i().email().required("Email is required"),addressType:i(),primary:k()}),m={name:"",city:"",state:"",address:"",primary:!0,phoneNumber:"",apartment:"",addressType:"Home",country:"United Arab Emirates",email:""},p=E({resolver:K(y),defaultValues:m}),{handleSubmit:x,formState:{isSubmitting:c}}=p,h=x(async r=>{try{t({name:r.name,phoneNumber:r.phoneNumber,fullAddress:`${r.apartment} ,${r.address}, ${r.city}, ${r.state}, ${r.country}`,addressType:r.addressType,primary:r.primary,email:r.email}),a()}catch(f){console.error(f)}});return e.jsx(S,{fullWidth:!0,maxWidth:"sm",open:l,onClose:a,children:e.jsxs(P,{methods:p,onSubmit:h,children:[e.jsx(Q,{children:"New address"}),e.jsx(M,{dividers:!0,children:e.jsxs(o,{spacing:3,children:[e.jsx(B,{row:!0,name:"addressType",options:[{label:"Home",value:"Home"},{label:"Office",value:"Office"}]}),e.jsxs(v,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(j,{name:"name",label:"Full Name"}),e.jsx(j,{name:"phoneNumber",label:"Phone Number"})]}),e.jsx(j,{name:"apartment",label:"Apartment ,suite,unit etc"}),e.jsx(j,{name:"address",label:"Street Address"}),e.jsxs(v,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(j,{name:"city",label:"City"}),e.jsxs(O,{name:"state",label:"Emirate / Province",children:[e.jsx(d,{value:"",children:"Select an Emirate"}),e.jsx(d,{value:"Abu Dhabi",children:"Abu Dhabi"}),e.jsx(d,{value:"Ajman",children:"Ajman"}),e.jsx(d,{value:"Dubai",children:"Dubai"}),e.jsx(d,{value:"Fujairah",children:"Fujairah"}),e.jsx(d,{value:"Ras Al Khaimah",children:"Ras Al Khaimah"}),e.jsx(d,{value:"Sharjah",children:"Sharjah"}),e.jsx(d,{value:"Umm Al Quwain",children:"Umm Al Quwain"})]})]}),e.jsx(j,{name:"email",label:"E-mail"}),e.jsx(G,{name:"country",label:"Country",options:C.map(r=>r.label),getOptionLabel:r=>r,renderOption:(r,f)=>{const{code:g,label:b,phone:w}=C.filter(s=>s.label===f)[0];return b?A.createElement("li",{...r,key:b},e.jsx(T,{icon:`circle-flags:${g.toLowerCase()}`,width:28,sx:{mr:1}},b),b," (",g,") +",w):null}}),e.jsx(U,{name:"primary",label:"Use this address as default."})]})}),e.jsxs(z,{children:[e.jsx(D,{color:"inherit",variant:"outlined",onClick:a,children:"Cancel"}),e.jsx(W,{type:"submit",variant:"contained",loading:c,children:"Deliver to this Address"})]})]})})}X.propTypes={onClose:n.func,onCreate:n.func,open:n.bool};function J({title:l="Address Book",list:a,action:t,open:y,onClose:m,selected:p,onSelect:x}){const[c,h]=A.useState(""),r=Y({inputData:a,query:c}),f=!r.length&&!!c,g=A.useCallback(s=>{h(s.target.value)},[]),b=A.useCallback(s=>{x(s),h(""),m()},[m,x]),w=e.jsx(o,{spacing:.5,sx:{p:.5,maxHeight:80*8,overflowX:"hidden"},children:r.map(s=>e.jsxs(o,{spacing:.5,component:L,selected:p(`${s.id}`),onClick:()=>b(s),sx:{py:1,px:1.5,borderRadius:1,flexDirection:"column",alignItems:"flex-start",[`&.${N.selected}`]:{bgcolor:"action.selected","&:hover":{bgcolor:"action.selected"}}},children:[e.jsxs(o,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(u,{variant:"subtitle2",children:s.name}),s.primary&&e.jsx(F,{color:"info",children:"Default"})]}),s.company&&e.jsx(v,{sx:{color:"primary.main",typography:"caption"},children:s.company}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:s.fullAddress}),s.phoneNumber&&e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:s.phoneNumber})]},s.id))});return e.jsxs(S,{fullWidth:!0,maxWidth:"xs",open:y,onClose:m,children:[e.jsxs(o,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3,pr:1.5},children:[e.jsxs(u,{variant:"h6",children:[" ",l," "]}),t&&t]}),e.jsx(o,{sx:{p:2,pt:0},children:e.jsx(I,{value:c,onChange:g,placeholder:"Search...",InputProps:{startAdornment:e.jsx($,{position:"start",children:e.jsx(T,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),f?e.jsx(R,{query:c,sx:{px:3,pt:5,pb:10}}):w]})}J.propTypes={action:n.node,list:n.array,onClose:n.func,onSelect:n.func,open:n.bool,selected:n.func,title:n.string};function Y({inputData:l,query:a}){return a?l.filter(t=>t.name.toLowerCase().indexOf(a.toLowerCase())!==-1||t.fullAddress.toLowerCase().indexOf(a.toLowerCase())!==-1||`${t.company}`.toLowerCase().indexOf(a.toLowerCase())!==-1):l}export{X as A,J as a,V as b};
