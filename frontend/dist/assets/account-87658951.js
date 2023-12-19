import{bO as q,bj as oe,D as b,a8 as e,al as p,as as S,ac as B,ae as C,ad as A,dQ as z,ah as i,a9 as j,bm as $,aB as G,aF as W,aH as k,bn as H,aJ as P,ax as h,bh as ne,aI as ae,aP as T,dS as re,aS as N,aG as E,aw as te,b0 as ie,ay as le,aj as ce,ag as _,au as de,av as me,ew as pe,ex as xe,ey as ue,ez as he,ek as be,aK as je}from"./index-80ed1a65.js";import{C as ye}from"./custom-breadcrumbs-d8f83c0f.js";import{c as V,a as f,q as ge,m as fe,b as F,F as I,r as we,t as Ce,R as w,h as ve,C as Se,v as Pe}from"./form-provider-d1c92717.js";import{o as M}from"./yup-6ed98c1a.js";import{d as Ae}from"./format-number-ba689ea4.js";import{L as D}from"./LoadingButton-f18783df.js";import{P as ke,a as Te,b as Ne}from"./plan-premium-icon-f791f295.js";import{a as qe,b as Fe,A as Ie}from"./address-list-dialog-b4aa831d.js";import{P as De}from"./payment-new-card-dialog-168e0d1d.js";import{F as Le}from"./FormControlLabel-5e3136f2.js";import{S as Re}from"./Switch-803759d5.js";import"./upload-avatar-3759b190.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-9d2cd837.js";import"./image-54d982f3.js";import"./Checkbox-5d5b6085.js";import"./SwitchBase-e1bf7dff.js";import"./Chip-7541428a.js";import"./FormGroup-e2f17784.js";import"./editor-3d227a32.js";import"./highlight-e6757fb7.js";import"./Slider-009caab2.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-1a32c639.js";import"./Radio-9bef1a5f.js";import"./Autocomplete-d223b2ab.js";import"./Close-7086e489.js";import"./CircularProgress-0735bdd2.js";import"./DialogTitle-d8429542.js";import"./DialogContent-c0280382.js";import"./DialogActions-84e06f81.js";function Be(){const{enqueueSnackbar:n}=q(),{user:s}=oe();console.log(s);const t=V().shape({displayName:f().required("Name is required"),email:f().required("Email is required").email("Email must be a valid email address"),storeName:f().required("Store name is required"),photoURL:ge().nullable().required("Avatar is required"),phoneNumber:f().required("Phone number is required"),country:f().required("Country is required"),address:f().required("Address is required"),state:f().required("State is required"),city:f().required("City is required"),zipCode:f().required("Zip code is required"),about:f().required("About is required"),isPublic:fe()}),a={displayName:(s==null?void 0:s.displayName)||"",email:(s==null?void 0:s.email)||"",storeName:(s==null?void 0:s.storeName)||"",photoURL:(s==null?void 0:s.photoURL)||null,phoneNumber:(s==null?void 0:s.phoneNumber)||"",country:(s==null?void 0:s.country)||"",address:(s==null?void 0:s.address)||"",state:(s==null?void 0:s.state)||"",city:(s==null?void 0:s.city)||"",zipCode:(s==null?void 0:s.zipCode)||"",about:(s==null?void 0:s.about)||"",isPublic:(s==null?void 0:s.isPublic)||!1},c=F({resolver:M(t),defaultValues:a}),{setValue:u,handleSubmit:g,formState:{isSubmitting:l}}=c,x=g(async r=>{try{await new Promise(m=>setTimeout(m,500)),n("Update success!"),console.info("DATA",r)}catch(m){console.error(m)}}),o=b.useCallback(r=>{const m=r[0],y=Object.assign(m,{preview:URL.createObjectURL(m)});m&&u("photoURL",y,{shouldValidate:!0})},[u]);return e.jsx(I,{methods:c,onSubmit:x,children:e.jsxs(p,{container:!0,spacing:3,children:[e.jsx(p,{xs:12,md:4,children:e.jsxs(S,{sx:{pt:10,pb:5,px:3,textAlign:"center"},children:[e.jsx(we,{name:"photoURL",maxSize:3145728,onDrop:o,helperText:e.jsxs(B,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",Ae(3145728)]})}),e.jsx(Ce,{name:"isPublic",labelPlacement:"start",label:"Public Profile",sx:{mt:5}}),e.jsx(C,{variant:"soft",color:"error",sx:{mt:3},children:"Delete User"})]})}),e.jsx(p,{xs:12,md:8,children:e.jsxs(S,{sx:{p:3},children:[e.jsxs(A,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(w,{name:"displayName",label:"Name"}),e.jsx(w,{name:"email",label:"Email Address"}),e.jsx(w,{name:"storeName",label:"Store Name"}),e.jsx(w,{name:"phoneNumber",label:"Phone Number"}),e.jsx(w,{name:"address",label:"Address"}),e.jsx(ve,{name:"country",label:"Country",options:z.map(r=>r.label),getOptionLabel:r=>r,renderOption:(r,m)=>{const{code:y,label:v,phone:L}=z.filter(R=>R.label===m)[0];return v?b.createElement("li",{...r,key:v},e.jsx(i,{icon:`circle-flags:${y.toLowerCase()}`,width:28,sx:{mr:1}},v),v," (",y,") +",L):null}}),e.jsx(w,{name:"state",label:"State/Region"}),e.jsx(w,{name:"city",label:"City"}),e.jsx(w,{name:"zipCode",label:"Zip/Code"})]}),e.jsxs(j,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:[e.jsx(w,{name:"about",multiline:!0,rows:4,label:"About"}),e.jsx(D,{type:"submit",variant:"contained",loading:l,children:"Save Changes"})]})]})})]})})}function U({card:n,sx:s,...t}){const a=$();return e.jsxs(e.Fragment,{children:[e.jsxs(j,{spacing:1,component:G,variant:"outlined",sx:{p:2.5,width:1,position:"relative",...s},...t,children:[e.jsxs(j,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(i,{icon:n.cardType==="visa"&&"logos:visa"||"logos:mastercard",width:36}),n.primary&&e.jsx(W,{color:"info",children:"Default"})]}),e.jsx(B,{variant:"subtitle2",children:n.cardNumber}),e.jsx(k,{onClick:a.onOpen,sx:{top:8,right:8,position:"absolute"},children:e.jsx(i,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(H,{open:a.open,onClose:a.onClose,children:[e.jsxs(P,{onClick:a.onClose,children:[e.jsx(i,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(P,{onClick:a.onClose,children:[e.jsx(i,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(P,{onClick:a.onClose,sx:{color:"error.main"},children:[e.jsx(i,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}U.propTypes={card:h.object,sx:h.object};function Z({open:n,list:s,onClose:t,selected:a,onSelect:c}){const[u,g]=b.useState(""),x=!Ee({inputData:s,query:u}).length&&!!u,o=b.useCallback(y=>{g(y.target.value)},[]),r=b.useCallback(y=>{c(y),g(""),t()},[t,c]),m=e.jsx(j,{spacing:2.5,sx:{p:3},children:s.map(y=>e.jsx(U,{card:y,onClick:()=>r(y),sx:{cursor:"pointer",...a(y.id)&&{boxShadow:v=>`0 0 0 2px ${v.palette.text.primary}`}}},y.id))});return e.jsxs(ne,{fullWidth:!0,maxWidth:"xs",open:n,onClose:t,children:[e.jsxs(j,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3,pr:1.5},children:[e.jsx(B,{variant:"h6",children:" Cards "}),e.jsx(C,{size:"small",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})]}),e.jsx(j,{sx:{px:3},children:e.jsx(ae,{value:u,onChange:o,placeholder:"Search...",InputProps:{startAdornment:e.jsx(T,{position:"start",children:e.jsx(i,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),x?e.jsx(re,{query:u,sx:{px:3,pt:5,pb:10}}):m]})}Z.propTypes={list:h.array,onClose:h.func,onSelect:h.func,open:h.bool,selected:h.func};function Ee({inputData:n,query:s}){return s?n.filter(t=>t.cardNumber.toLowerCase().indexOf(s.toLowerCase())!==-1):n}function J({cardList:n,addressBook:s,plans:t}){const a=N(),c=N(),u=s.filter(d=>d.primary)[0],g=n.filter(d=>d.primary)[0],[l,x]=b.useState(""),[o,r]=b.useState(u),[m,y]=b.useState(g),v=b.useCallback(d=>{t.filter(se=>se.primary)[0].subscription!==d&&x(d)},[t]),L=b.useCallback(d=>{r(d)},[]),R=b.useCallback(d=>{y(d)},[]),ee=t.map(d=>e.jsx(p,{xs:12,md:4,children:e.jsxs(j,{component:G,variant:"outlined",onClick:()=>v(d.subscription),sx:{p:2.5,position:"relative",cursor:"pointer",...d.primary&&{opacity:.48,cursor:"default"},...d.subscription===l&&{boxShadow:O=>`0 0 0 2px ${O.palette.text.primary}`}},children:[d.primary&&e.jsx(W,{color:"info",startIcon:e.jsx(i,{icon:"eva:star-fill"}),sx:{position:"absolute",top:8,right:8},children:"Current"}),e.jsxs(A,{sx:{width:48,height:48},children:[d.subscription==="basic"&&e.jsx(ke,{}),d.subscription==="starter"&&e.jsx(Te,{}),d.subscription==="premium"&&e.jsx(Ne,{})]}),e.jsx(A,{sx:{typography:"subtitle2",mt:2,mb:.5,textTransform:"capitalize"},children:d.subscription}),e.jsxs(j,{direction:"row",alignItems:"center",sx:{typography:"h4"},children:[d.price||"Free",!!d.price&&e.jsx(A,{component:"span",sx:{typography:"body2",color:"text.disabled",ml:.5},children:"/mo"})]})]})},d.subscription));return e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx(E,{title:"Plan"}),e.jsx(p,{container:!0,spacing:2,sx:{p:3},children:ee}),e.jsxs(j,{spacing:2,sx:{p:3,pt:0,typography:"body2"},children:[e.jsxs(p,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(p,{xs:12,md:4,sx:{color:"text.secondary"},children:"Plan"}),e.jsx(p,{xs:12,md:8,sx:{typography:"subtitle2",textTransform:"capitalize"},children:l||"-"})]}),e.jsxs(p,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(p,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing name"}),e.jsx(p,{xs:12,md:8,children:e.jsx(C,{onClick:a.onTrue,endIcon:e.jsx(i,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:o==null?void 0:o.name})})]}),e.jsxs(p,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(p,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing address"}),e.jsx(p,{xs:12,md:8,sx:{color:"text.secondary"},children:o==null?void 0:o.fullAddress})]}),e.jsxs(p,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(p,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing phone number"}),e.jsx(p,{xs:12,md:8,sx:{color:"text.secondary"},children:o==null?void 0:o.phoneNumber})]}),e.jsxs(p,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(p,{xs:12,md:4,sx:{color:"text.secondary"},children:"Payment method"}),e.jsx(p,{xs:12,md:8,children:e.jsx(C,{onClick:c.onTrue,endIcon:e.jsx(i,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:m==null?void 0:m.cardNumber})})]})]}),e.jsx(te,{sx:{borderStyle:"dashed"}}),e.jsxs(j,{spacing:1.5,direction:"row",justifyContent:"flex-end",sx:{p:3},children:[e.jsx(C,{variant:"outlined",children:"Cancel Plan"}),e.jsx(C,{variant:"contained",children:"Upgrade Plan"})]})]}),e.jsx(Z,{list:n,open:c.value,onClose:c.onFalse,selected:d=>(m==null?void 0:m.id)===d,onSelect:R}),e.jsx(qe,{list:s,open:a.value,onClose:a.onFalse,selected:d=>(o==null?void 0:o.id)===d,onSelect:L,action:e.jsx(C,{size:"small",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})})]})}J.propTypes={addressBook:h.array,cardList:h.array,plans:h.array};function K({cards:n}){const s=N();return e.jsxs(e.Fragment,{children:[e.jsxs(S,{sx:{my:3},children:[e.jsx(E,{title:"Payment Method",action:e.jsx(C,{size:"small",color:"primary",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),onClick:s.onTrue,children:"New Card"})}),e.jsx(A,{rowGap:2.5,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{p:3},children:n.map(t=>e.jsx(U,{card:t},t.id))})]}),e.jsx(De,{open:s.value,onClose:s.onFalse})]})}K.propTypes={cards:h.array};h.array;function Q({addressBook:n}){const[s,t]=b.useState(""),a=$(),c=N(),u=b.useCallback(x=>{console.info("ADDRESS",x)},[]),g=b.useCallback((x,o)=>{a.onOpen(x),t(o)},[a]),l=b.useCallback(()=>{a.onClose(),t("")},[a]);return e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx(E,{title:"Address Book",action:e.jsx(C,{size:"small",color:"primary",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),onClick:c.onTrue,children:"Address"})}),e.jsx(j,{spacing:2.5,sx:{p:3},children:n.map(x=>e.jsx(Fe,{variant:"outlined",address:x,action:e.jsx(k,{onClick:o=>{g(o,`${x.id}`)},sx:{position:"absolute",top:8,right:8},children:e.jsx(i,{icon:"eva:more-vertical-fill"})}),sx:{p:2.5,borderRadius:1}},x.id))})]}),e.jsxs(H,{open:a.open,onClose:l,children:[e.jsxs(P,{onClick:()=>{l(),console.info("SET AS PRIMARY",s)},children:[e.jsx(i,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(P,{onClick:()=>{l(),console.info("EDIT",s)},children:[e.jsx(i,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(P,{onClick:()=>{l(),console.info("DELETE",s)},sx:{color:"error.main"},children:[e.jsx(i,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(Ie,{open:c.value,onClose:c.onFalse,onCreate:u})]})}Q.propTypes={addressBook:h.array};function Y({cards:n,plans:s,invoices:t,addressBook:a}){return e.jsx(p,{container:!0,spacing:5,disableEqualOverflow:!0,children:e.jsxs(p,{xs:12,md:8,children:[e.jsx(J,{plans:s,cardList:n,addressBook:a}),e.jsx(K,{cards:n}),e.jsx(Q,{addressBook:a})]})})}Y.propTypes={addressBook:h.array,cards:h.array,invoices:h.array,plans:h.array};function X({socialLinks:n}){const{enqueueSnackbar:s}=q(),t={facebook:n.facebook,instagram:n.instagram,linkedin:n.linkedin,twitter:n.twitter},a=F({defaultValues:t}),{handleSubmit:c,formState:{isSubmitting:u}}=a,g=c(async l=>{try{await new Promise(x=>setTimeout(x,500)),s("Update success!"),console.info("DATA",l)}catch(x){console.error(x)}});return e.jsx(I,{methods:a,onSubmit:g,children:e.jsxs(j,{component:S,spacing:3,sx:{p:3},children:[Object.keys(n).map(l=>e.jsx(w,{name:l,InputProps:{startAdornment:e.jsx(T,{position:"start",children:e.jsx(i,{width:24,icon:l==="facebook"&&"eva:facebook-fill"||l==="instagram"&&"ant-design:instagram-filled"||l==="linkedin"&&"eva:linkedin-fill"||l==="twitter"&&"eva:twitter-fill"||"",color:l==="facebook"&&"#1877F2"||l==="instagram"&&"#DF3E30"||l==="linkedin"&&"#006097"||l==="twitter"&&"#1C9CEA"||""})})}},l)),e.jsx(D,{type:"submit",variant:"contained",loading:u,sx:{ml:"auto"},children:"Save Changes"})]})})}X.propTypes={socialLinks:h.object};const Ue=[{subheader:"Activity",caption:"Donec mi odio, faucibus at, scelerisque quis",items:[{id:"activity_comments",label:"Email me when someone comments onmy article"},{id:"activity_answers",label:"Email me when someone answers on my form"},{id:"activityFollows",label:"Email me hen someone follows me"}]},{subheader:"Application",caption:"Donec mi odio, faucibus at, scelerisque quis",items:[{id:"application_news",label:"News and announcements"},{id:"application_product",label:"Weekly product updates"},{id:"application_blog",label:"Weekly blog digest"}]}];function Oe(){const{enqueueSnackbar:n}=q(),s=F({defaultValues:{selected:["activity_comments","application_product"]}}),{watch:t,control:a,handleSubmit:c,formState:{isSubmitting:u}}=s,g=t(),l=c(async o=>{try{await new Promise(r=>setTimeout(r,500)),n("Update success!"),console.info("DATA",o)}catch(r){console.error(r)}}),x=(o,r)=>o.includes(r)?o.filter(m=>m!==r):[...o,r];return e.jsx(I,{methods:s,onSubmit:l,children:e.jsxs(j,{component:S,spacing:3,sx:{p:3},children:[Ue.map(o=>e.jsxs(p,{container:!0,spacing:3,children:[e.jsx(p,{xs:12,md:4,children:e.jsx(ie,{primary:o.subheader,secondary:o.caption,primaryTypographyProps:{typography:"h6",mb:.5},secondaryTypographyProps:{component:"span"}})}),e.jsx(p,{xs:12,md:8,children:e.jsx(j,{spacing:1,sx:{p:3,borderRadius:2,bgcolor:"background.neutral"},children:e.jsx(Se,{name:"selected",control:a,render:({field:r})=>e.jsx(e.Fragment,{children:o.items.map(m=>e.jsx(Le,{label:m.label,labelPlacement:"start",control:e.jsx(Re,{checked:r.value.includes(m.id),onChange:()=>r.onChange(x(g.selected,m.id))}),sx:{m:0,width:1,justifyContent:"space-between"}},m.id))})})})})]},o.subheader)),e.jsx(D,{type:"submit",variant:"contained",loading:u,sx:{ml:"auto"},children:"Save Changes"})]})})}function ze(){const{enqueueSnackbar:n}=q(),s=N(),t=V().shape({oldPassword:f().required("Old Password is required"),newPassword:f().required("New Password is required").min(6,"Password must be at least 6 characters").test("no-match","New password must be different than old password",(o,{parent:r})=>o!==r.oldPassword),confirmNewPassword:f().oneOf([Pe("newPassword")],"Passwords must match")}),a={oldPassword:"",newPassword:"",confirmNewPassword:""},c=F({resolver:M(t),defaultValues:a}),{reset:u,handleSubmit:g,formState:{isSubmitting:l}}=c,x=g(async o=>{try{await new Promise(r=>setTimeout(r,500)),u(),n("Update success!"),console.info("DATA",o)}catch(r){console.error(r)}});return e.jsx(I,{methods:c,onSubmit:x,children:e.jsxs(j,{component:S,spacing:3,sx:{p:3},children:[e.jsx(w,{name:"oldPassword",type:s.value?"text":"password",label:"Old Password",InputProps:{endAdornment:e.jsx(T,{position:"end",children:e.jsx(k,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(w,{name:"newPassword",label:"New Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(T,{position:"end",children:e.jsx(k,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})},helperText:e.jsxs(j,{component:"span",direction:"row",alignItems:"center",children:[e.jsx(i,{icon:"eva:info-fill",width:16,sx:{mr:.5}})," Password must be minimum 6+"]})}),e.jsx(w,{name:"confirmNewPassword",type:s.value?"text":"password",label:"Confirm New Password",InputProps:{endAdornment:e.jsx(T,{position:"end",children:e.jsx(k,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(D,{type:"submit",variant:"contained",loading:l,sx:{ml:"auto"},children:"Save Changes"})]})})}const _e=[{value:"general",label:"General",icon:e.jsx(i,{icon:"solar:user-id-bold",width:24})},{value:"billing",label:"Billing",icon:e.jsx(i,{icon:"solar:bill-list-bold",width:24})},{value:"notifications",label:"Notifications",icon:e.jsx(i,{icon:"solar:bell-bing-bold",width:24})},{value:"social",label:"Social links",icon:e.jsx(i,{icon:"solar:share-bold",width:24})},{value:"security",label:"Security",icon:e.jsx(i,{icon:"ic:round-vpn-key",width:24})}];function $e(){const n=le(),[s,t]=b.useState("general"),a=b.useCallback((c,u)=>{t(u)},[]);return e.jsxs(ce,{maxWidth:n.themeStretch?!1:"lg",children:[e.jsx(ye,{heading:"Account",links:[{name:"Dashboard",href:_.dashboard.root},{name:"User",href:_.dashboard.user.root},{name:"Account"}],sx:{mb:{xs:3,md:5}}}),e.jsx(de,{value:s,onChange:a,sx:{mb:{xs:3,md:5}},children:_e.map(c=>e.jsx(me,{label:c.label,icon:c.icon,value:c.value},c.value))}),s==="general"&&e.jsx(Be,{}),s==="billing"&&e.jsx(Y,{plans:pe,cards:xe,invoices:ue,addressBook:he}),s==="notifications"&&e.jsx(Oe,{}),s==="social"&&e.jsx(X,{socialLinks:be.socialLinks}),s==="security"&&e.jsx(ze,{})]})}function ws(){return e.jsxs(e.Fragment,{children:[e.jsx(je,{children:e.jsx("title",{children:" Dashboard: Account Settings"})}),e.jsx($e,{})]})}export{ws as default};
