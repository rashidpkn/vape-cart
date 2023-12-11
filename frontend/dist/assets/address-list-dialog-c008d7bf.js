import{a8 as e,a9 as a,aA as L,ac as p,ad as C,aE as v,aw as t,ba as T,e1 as A,D as g,ah as F,ae as N,aT as S,e2 as q,aM as D,bP as $}from"./index-bf334511.js";import{c as I,a as c,m as k,b as H,F as R,n as O,R as y,h as P,o as B}from"./form-provider-4c9d564d.js";import{o as G}from"./yup-edfd6dd7.js";import{D as z}from"./DialogTitle-4a7e452e.js";import{D as E}from"./DialogContent-30366fda.js";import{D as W}from"./DialogActions-849f84a7.js";import{L as Z}from"./LoadingButton-185667b8.js";import{T as M}from"./TextField-e6e01232.js";function U({address:i,action:o,sx:n,...f}){const{name:d,fullAddress:m,addressType:u,phoneNumber:l,primary:x}=i;return e.jsxs(a,{component:L,spacing:2,alignItems:{md:"flex-end"},direction:{xs:"column",md:"row"},sx:{position:"relative",...n},...f,children:[e.jsxs(a,{flexGrow:1,spacing:1,children:[e.jsxs(a,{direction:"row",alignItems:"center",children:[e.jsxs(p,{variant:"subtitle2",children:[d,e.jsxs(C,{component:"span",sx:{ml:.5,typography:"body2",color:"text.secondary"},children:["(",u,")"]})]}),x&&e.jsx(v,{color:"info",sx:{ml:1},children:"Default"})]}),e.jsx(p,{variant:"body2",sx:{color:"text.secondary"},children:m}),e.jsx(p,{variant:"body2",sx:{color:"text.secondary"},children:l})]}),o&&o]})}U.propTypes={action:t.node,address:t.object,sx:t.object};function V({open:i,onClose:o,onCreate:n}){const f=I().shape({name:c().required("Fullname is required"),phoneNumber:c().required("Phone number is required"),address:c().required("Address is required"),city:c().required("City is required"),state:c().required("State is required"),country:c().required("Country is required"),zipCode:c().required("Zip code is required"),addressType:c(),primary:k()}),d={name:"",city:"",state:"",address:"",zipCode:"",primary:!0,phoneNumber:"",addressType:"Home",country:""},m=H({resolver:G(f),defaultValues:d}),{handleSubmit:u,formState:{isSubmitting:l}}=m,x=u(async r=>{try{n({name:r.name,phoneNumber:r.phoneNumber,fullAddress:`${r.address}, ${r.city}, ${r.state}, ${r.country}, ${r.zipCode}`,addressType:r.addressType,primary:r.primary}),o()}catch(b){console.error(b)}});return e.jsx(T,{fullWidth:!0,maxWidth:"sm",open:i,onClose:o,children:e.jsxs(R,{methods:m,onSubmit:x,children:[e.jsx(z,{children:"New address"}),e.jsx(E,{dividers:!0,children:e.jsxs(a,{spacing:3,children:[e.jsx(O,{row:!0,name:"addressType",options:[{label:"Home",value:"Home"},{label:"Office",value:"Office"}]}),e.jsxs(C,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(y,{name:"name",label:"Full Name"}),e.jsx(y,{name:"phoneNumber",label:"Phone Number"})]}),e.jsx(y,{name:"address",label:"Address"}),e.jsxs(C,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(3, 1fr)"},children:[e.jsx(y,{name:"city",label:"Town / City"}),e.jsx(y,{name:"state",label:"State"}),e.jsx(y,{name:"zipCode",label:"Zip/Code"})]}),e.jsx(P,{name:"country",label:"Country",options:A.map(r=>r.label),getOptionLabel:r=>r,renderOption:(r,b)=>{const{code:j,label:h,phone:w}=A.filter(s=>s.label===b)[0];return h?g.createElement("li",{...r,key:h},e.jsx(F,{icon:`circle-flags:${j.toLowerCase()}`,width:28,sx:{mr:1}},h),h," (",j,") +",w):null}}),e.jsx(B,{name:"primary",label:"Use this address as default."})]})}),e.jsxs(W,{children:[e.jsx(N,{color:"inherit",variant:"outlined",onClick:o,children:"Cancel"}),e.jsx(Z,{type:"submit",variant:"contained",loading:l,children:"Deliver to this Address"})]})]})})}V.propTypes={onClose:t.func,onCreate:t.func,open:t.bool};function X({title:i="Address Book",list:o,action:n,open:f,onClose:d,selected:m,onSelect:u}){const[l,x]=g.useState(""),r=J({inputData:o,query:l}),b=!r.length&&!!l,j=g.useCallback(s=>{x(s.target.value)},[]),h=g.useCallback(s=>{u(s),x(""),d()},[d,u]),w=e.jsx(a,{spacing:.5,sx:{p:.5,maxHeight:80*8,overflowX:"hidden"},children:r.map(s=>e.jsxs(a,{spacing:.5,component:S,selected:m(`${s.id}`),onClick:()=>h(s),sx:{py:1,px:1.5,borderRadius:1,flexDirection:"column",alignItems:"flex-start",[`&.${q.selected}`]:{bgcolor:"action.selected","&:hover":{bgcolor:"action.selected"}}},children:[e.jsxs(a,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(p,{variant:"subtitle2",children:s.name}),s.primary&&e.jsx(v,{color:"info",children:"Default"})]}),s.company&&e.jsx(C,{sx:{color:"primary.main",typography:"caption"},children:s.company}),e.jsx(p,{variant:"body2",sx:{color:"text.secondary"},children:s.fullAddress}),s.phoneNumber&&e.jsx(p,{variant:"body2",sx:{color:"text.secondary"},children:s.phoneNumber})]},s.id))});return e.jsxs(T,{fullWidth:!0,maxWidth:"xs",open:f,onClose:d,children:[e.jsxs(a,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3,pr:1.5},children:[e.jsxs(p,{variant:"h6",children:[" ",i," "]}),n&&n]}),e.jsx(a,{sx:{p:2,pt:0},children:e.jsx(M,{value:l,onChange:j,placeholder:"Search...",InputProps:{startAdornment:e.jsx(D,{position:"start",children:e.jsx(F,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),b?e.jsx($,{query:l,sx:{px:3,pt:5,pb:10}}):w]})}X.propTypes={action:t.node,list:t.array,onClose:t.func,onSelect:t.func,open:t.bool,selected:t.func,title:t.string};function J({inputData:i,query:o}){return o?i.filter(n=>n.name.toLowerCase().indexOf(o.toLowerCase())!==-1||n.fullAddress.toLowerCase().indexOf(o.toLowerCase())!==-1||`${n.company}`.toLowerCase().indexOf(o.toLowerCase())!==-1):i}export{U as A,V as a,X as b};
