import{bK as q,D as b,a8 as e,al as m,ac as R,ae as C,ad as A,dX as z,ah as i,a9 as j,ev as oe,bi as $,aA as G,aE as W,aF as k,bj as H,aG as S,aw as h,bd as ne,aM as T,bM as re,aP as F,av as ae,aZ as te,ax as ie,aj as le,ag as _,at as ce,au as de,eB as pe,eC as me,eD as xe,eE as ue,ep as he,aH as be}from"./index-a747811c.js";import{C as je}from"./custom-breadcrumbs-4c4417ef.js";import{c as M,a as f,q as ye,m as ge,b as I,F as N,r as fe,t as we,R as w,h as Ce,C as ve,v as Pe}from"./form-provider-d26a9747.js";import{o as V}from"./yup-e9bc2068.js";import{d as Se}from"./format-number-6c2edc06.js";import{C as P}from"./Card-edd4abf8.js";import{L as D}from"./LoadingButton-8c49b16f.js";import{P as Ae,a as ke,b as Te}from"./plan-premium-icon-7dbc201a.js";import{a as Fe,b as qe,A as Ie}from"./address-list-dialog-f2c84a70.js";import{T as Ne}from"./TextField-5c8d940a.js";import{C as B}from"./CardHeader-28cee1fc.js";import{P as De}from"./payment-new-card-dialog-d5e14f54.js";import{F as Ee}from"./FormControlLabel-6cf4e384.js";import{S as Le}from"./Switch-e7e5ad21.js";import"./upload-avatar-4058b3e8.js";import"./fade-ba5404aa.js";import"./transition-71675215.js";import"./index-9e7244b8.js";import"./image-13256a49.js";import"./FormControl-0c109cff.js";import"./Select-0e3a3519.js";import"./Menu-85627bb4.js";import"./Checkbox-c13775e7.js";import"./SwitchBase-46064381.js";import"./Chip-db514ca4.js";import"./FormLabel-b8b56886.js";import"./FormGroup-fa53ce87.js";import"./editor-19399420.js";import"./highlight-4e2adf31.js";import"./Slider-fe6c58df.js";import"./visuallyHidden-14c3de6e.js";import"./RadioGroup-c4fe20dc.js";import"./Radio-f2722486.js";import"./Autocomplete-0c52570d.js";import"./Close-4ae4f15a.js";import"./CircularProgress-bfa0a07e.js";import"./DialogTitle-b5c3e23b.js";import"./DialogContent-8b63754b.js";import"./DialogActions-b339743b.js";function Re(){const{enqueueSnackbar:n}=q(),{user:s}=oe(),t=M().shape({displayName:f().required("Name is required"),email:f().required("Email is required").email("Email must be a valid email address"),photoURL:ye().nullable().required("Avatar is required"),phoneNumber:f().required("Phone number is required"),country:f().required("Country is required"),address:f().required("Address is required"),state:f().required("State is required"),city:f().required("City is required"),zipCode:f().required("Zip code is required"),about:f().required("About is required"),isPublic:ge()}),r={displayName:(s==null?void 0:s.displayName)||"",email:(s==null?void 0:s.email)||"",photoURL:(s==null?void 0:s.photoURL)||null,phoneNumber:(s==null?void 0:s.phoneNumber)||"",country:(s==null?void 0:s.country)||"",address:(s==null?void 0:s.address)||"",state:(s==null?void 0:s.state)||"",city:(s==null?void 0:s.city)||"",zipCode:(s==null?void 0:s.zipCode)||"",about:(s==null?void 0:s.about)||"",isPublic:(s==null?void 0:s.isPublic)||!1},c=I({resolver:V(t),defaultValues:r}),{setValue:u,handleSubmit:g,formState:{isSubmitting:l}}=c,x=g(async a=>{try{await new Promise(p=>setTimeout(p,500)),n("Update success!"),console.info("DATA",a)}catch(p){console.error(p)}}),o=b.useCallback(a=>{const p=a[0],y=Object.assign(p,{preview:URL.createObjectURL(p)});p&&u("photoURL",y,{shouldValidate:!0})},[u]);return e.jsx(N,{methods:c,onSubmit:x,children:e.jsxs(m,{container:!0,spacing:3,children:[e.jsx(m,{xs:12,md:4,children:e.jsxs(P,{sx:{pt:10,pb:5,px:3,textAlign:"center"},children:[e.jsx(fe,{name:"photoURL",maxSize:3145728,onDrop:o,helperText:e.jsxs(R,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",Se(3145728)]})}),e.jsx(we,{name:"isPublic",labelPlacement:"start",label:"Public Profile",sx:{mt:5}}),e.jsx(C,{variant:"soft",color:"error",sx:{mt:3},children:"Delete User"})]})}),e.jsx(m,{xs:12,md:8,children:e.jsxs(P,{sx:{p:3},children:[e.jsxs(A,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(w,{name:"displayName",label:"Name"}),e.jsx(w,{name:"email",label:"Email Address"}),e.jsx(w,{name:"phoneNumber",label:"Phone Number"}),e.jsx(w,{name:"address",label:"Address"}),e.jsx(Ce,{name:"country",label:"Country",options:z.map(a=>a.label),getOptionLabel:a=>a,renderOption:(a,p)=>{const{code:y,label:v,phone:E}=z.filter(L=>L.label===p)[0];return v?b.createElement("li",{...a,key:v},e.jsx(i,{icon:`circle-flags:${y.toLowerCase()}`,width:28,sx:{mr:1}},v),v," (",y,") +",E):null}}),e.jsx(w,{name:"state",label:"State/Region"}),e.jsx(w,{name:"city",label:"City"}),e.jsx(w,{name:"zipCode",label:"Zip/Code"})]}),e.jsxs(j,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:[e.jsx(w,{name:"about",multiline:!0,rows:4,label:"About"}),e.jsx(D,{type:"submit",variant:"contained",loading:l,children:"Save Changes"})]})]})})]})})}function U({card:n,sx:s,...t}){const r=$();return e.jsxs(e.Fragment,{children:[e.jsxs(j,{spacing:1,component:G,variant:"outlined",sx:{p:2.5,width:1,position:"relative",...s},...t,children:[e.jsxs(j,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(i,{icon:n.cardType==="visa"&&"logos:visa"||"logos:mastercard",width:36}),n.primary&&e.jsx(W,{color:"info",children:"Default"})]}),e.jsx(R,{variant:"subtitle2",children:n.cardNumber}),e.jsx(k,{onClick:r.onOpen,sx:{top:8,right:8,position:"absolute"},children:e.jsx(i,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(H,{open:r.open,onClose:r.onClose,children:[e.jsxs(S,{onClick:r.onClose,children:[e.jsx(i,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(S,{onClick:r.onClose,children:[e.jsx(i,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(S,{onClick:r.onClose,sx:{color:"error.main"},children:[e.jsx(i,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}U.propTypes={card:h.object,sx:h.object};function Z({open:n,list:s,onClose:t,selected:r,onSelect:c}){const[u,g]=b.useState(""),x=!Be({inputData:s,query:u}).length&&!!u,o=b.useCallback(y=>{g(y.target.value)},[]),a=b.useCallback(y=>{c(y),g(""),t()},[t,c]),p=e.jsx(j,{spacing:2.5,sx:{p:3},children:s.map(y=>e.jsx(U,{card:y,onClick:()=>a(y),sx:{cursor:"pointer",...r(y.id)&&{boxShadow:v=>`0 0 0 2px ${v.palette.text.primary}`}}},y.id))});return e.jsxs(ne,{fullWidth:!0,maxWidth:"xs",open:n,onClose:t,children:[e.jsxs(j,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3,pr:1.5},children:[e.jsx(R,{variant:"h6",children:" Cards "}),e.jsx(C,{size:"small",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})]}),e.jsx(j,{sx:{px:3},children:e.jsx(Ne,{value:u,onChange:o,placeholder:"Search...",InputProps:{startAdornment:e.jsx(T,{position:"start",children:e.jsx(i,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),x?e.jsx(re,{query:u,sx:{px:3,pt:5,pb:10}}):p]})}Z.propTypes={list:h.array,onClose:h.func,onSelect:h.func,open:h.bool,selected:h.func};function Be({inputData:n,query:s}){return s?n.filter(t=>t.cardNumber.toLowerCase().indexOf(s.toLowerCase())!==-1):n}function K({cardList:n,addressBook:s,plans:t}){const r=F(),c=F(),u=s.filter(d=>d.primary)[0],g=n.filter(d=>d.primary)[0],[l,x]=b.useState(""),[o,a]=b.useState(u),[p,y]=b.useState(g),v=b.useCallback(d=>{t.filter(se=>se.primary)[0].subscription!==d&&x(d)},[t]),E=b.useCallback(d=>{a(d)},[]),L=b.useCallback(d=>{y(d)},[]),ee=t.map(d=>e.jsx(m,{xs:12,md:4,children:e.jsxs(j,{component:G,variant:"outlined",onClick:()=>v(d.subscription),sx:{p:2.5,position:"relative",cursor:"pointer",...d.primary&&{opacity:.48,cursor:"default"},...d.subscription===l&&{boxShadow:O=>`0 0 0 2px ${O.palette.text.primary}`}},children:[d.primary&&e.jsx(W,{color:"info",startIcon:e.jsx(i,{icon:"eva:star-fill"}),sx:{position:"absolute",top:8,right:8},children:"Current"}),e.jsxs(A,{sx:{width:48,height:48},children:[d.subscription==="basic"&&e.jsx(Ae,{}),d.subscription==="starter"&&e.jsx(ke,{}),d.subscription==="premium"&&e.jsx(Te,{})]}),e.jsx(A,{sx:{typography:"subtitle2",mt:2,mb:.5,textTransform:"capitalize"},children:d.subscription}),e.jsxs(j,{direction:"row",alignItems:"center",sx:{typography:"h4"},children:[d.price||"Free",!!d.price&&e.jsx(A,{component:"span",sx:{typography:"body2",color:"text.disabled",ml:.5},children:"/mo"})]})]})},d.subscription));return e.jsxs(e.Fragment,{children:[e.jsxs(P,{children:[e.jsx(B,{title:"Plan"}),e.jsx(m,{container:!0,spacing:2,sx:{p:3},children:ee}),e.jsxs(j,{spacing:2,sx:{p:3,pt:0,typography:"body2"},children:[e.jsxs(m,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(m,{xs:12,md:4,sx:{color:"text.secondary"},children:"Plan"}),e.jsx(m,{xs:12,md:8,sx:{typography:"subtitle2",textTransform:"capitalize"},children:l||"-"})]}),e.jsxs(m,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(m,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing name"}),e.jsx(m,{xs:12,md:8,children:e.jsx(C,{onClick:r.onTrue,endIcon:e.jsx(i,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:o==null?void 0:o.name})})]}),e.jsxs(m,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(m,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing address"}),e.jsx(m,{xs:12,md:8,sx:{color:"text.secondary"},children:o==null?void 0:o.fullAddress})]}),e.jsxs(m,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(m,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing phone number"}),e.jsx(m,{xs:12,md:8,sx:{color:"text.secondary"},children:o==null?void 0:o.phoneNumber})]}),e.jsxs(m,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(m,{xs:12,md:4,sx:{color:"text.secondary"},children:"Payment method"}),e.jsx(m,{xs:12,md:8,children:e.jsx(C,{onClick:c.onTrue,endIcon:e.jsx(i,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:p==null?void 0:p.cardNumber})})]})]}),e.jsx(ae,{sx:{borderStyle:"dashed"}}),e.jsxs(j,{spacing:1.5,direction:"row",justifyContent:"flex-end",sx:{p:3},children:[e.jsx(C,{variant:"outlined",children:"Cancel Plan"}),e.jsx(C,{variant:"contained",children:"Upgrade Plan"})]})]}),e.jsx(Z,{list:n,open:c.value,onClose:c.onFalse,selected:d=>(p==null?void 0:p.id)===d,onSelect:L}),e.jsx(Fe,{list:s,open:r.value,onClose:r.onFalse,selected:d=>(o==null?void 0:o.id)===d,onSelect:E,action:e.jsx(C,{size:"small",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})})]})}K.propTypes={addressBook:h.array,cardList:h.array,plans:h.array};function X({cards:n}){const s=F();return e.jsxs(e.Fragment,{children:[e.jsxs(P,{sx:{my:3},children:[e.jsx(B,{title:"Payment Method",action:e.jsx(C,{size:"small",color:"primary",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),onClick:s.onTrue,children:"New Card"})}),e.jsx(A,{rowGap:2.5,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{p:3},children:n.map(t=>e.jsx(U,{card:t},t.id))})]}),e.jsx(De,{open:s.value,onClose:s.onFalse})]})}X.propTypes={cards:h.array};h.array;function Y({addressBook:n}){const[s,t]=b.useState(""),r=$(),c=F(),u=b.useCallback(x=>{console.info("ADDRESS",x)},[]),g=b.useCallback((x,o)=>{r.onOpen(x),t(o)},[r]),l=b.useCallback(()=>{r.onClose(),t("")},[r]);return e.jsxs(e.Fragment,{children:[e.jsxs(P,{children:[e.jsx(B,{title:"Address Book",action:e.jsx(C,{size:"small",color:"primary",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),onClick:c.onTrue,children:"Address"})}),e.jsx(j,{spacing:2.5,sx:{p:3},children:n.map(x=>e.jsx(qe,{variant:"outlined",address:x,action:e.jsx(k,{onClick:o=>{g(o,`${x.id}`)},sx:{position:"absolute",top:8,right:8},children:e.jsx(i,{icon:"eva:more-vertical-fill"})}),sx:{p:2.5,borderRadius:1}},x.id))})]}),e.jsxs(H,{open:r.open,onClose:l,children:[e.jsxs(S,{onClick:()=>{l(),console.info("SET AS PRIMARY",s)},children:[e.jsx(i,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(S,{onClick:()=>{l(),console.info("EDIT",s)},children:[e.jsx(i,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(S,{onClick:()=>{l(),console.info("DELETE",s)},sx:{color:"error.main"},children:[e.jsx(i,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(Ie,{open:c.value,onClose:c.onFalse,onCreate:u})]})}Y.propTypes={addressBook:h.array};function J({cards:n,plans:s,invoices:t,addressBook:r}){return e.jsx(m,{container:!0,spacing:5,disableEqualOverflow:!0,children:e.jsxs(m,{xs:12,md:8,children:[e.jsx(K,{plans:s,cardList:n,addressBook:r}),e.jsx(X,{cards:n}),e.jsx(Y,{addressBook:r})]})})}J.propTypes={addressBook:h.array,cards:h.array,invoices:h.array,plans:h.array};function Q({socialLinks:n}){const{enqueueSnackbar:s}=q(),t={facebook:n.facebook,instagram:n.instagram,linkedin:n.linkedin,twitter:n.twitter},r=I({defaultValues:t}),{handleSubmit:c,formState:{isSubmitting:u}}=r,g=c(async l=>{try{await new Promise(x=>setTimeout(x,500)),s("Update success!"),console.info("DATA",l)}catch(x){console.error(x)}});return e.jsx(N,{methods:r,onSubmit:g,children:e.jsxs(j,{component:P,spacing:3,sx:{p:3},children:[Object.keys(n).map(l=>e.jsx(w,{name:l,InputProps:{startAdornment:e.jsx(T,{position:"start",children:e.jsx(i,{width:24,icon:l==="facebook"&&"eva:facebook-fill"||l==="instagram"&&"ant-design:instagram-filled"||l==="linkedin"&&"eva:linkedin-fill"||l==="twitter"&&"eva:twitter-fill"||"",color:l==="facebook"&&"#1877F2"||l==="instagram"&&"#DF3E30"||l==="linkedin"&&"#006097"||l==="twitter"&&"#1C9CEA"||""})})}},l)),e.jsx(D,{type:"submit",variant:"contained",loading:u,sx:{ml:"auto"},children:"Save Changes"})]})})}Q.propTypes={socialLinks:h.object};const Ue=[{subheader:"Activity",caption:"Donec mi odio, faucibus at, scelerisque quis",items:[{id:"activity_comments",label:"Email me when someone comments onmy article"},{id:"activity_answers",label:"Email me when someone answers on my form"},{id:"activityFollows",label:"Email me hen someone follows me"}]},{subheader:"Application",caption:"Donec mi odio, faucibus at, scelerisque quis",items:[{id:"application_news",label:"News and announcements"},{id:"application_product",label:"Weekly product updates"},{id:"application_blog",label:"Weekly blog digest"}]}];function Oe(){const{enqueueSnackbar:n}=q(),s=I({defaultValues:{selected:["activity_comments","application_product"]}}),{watch:t,control:r,handleSubmit:c,formState:{isSubmitting:u}}=s,g=t(),l=c(async o=>{try{await new Promise(a=>setTimeout(a,500)),n("Update success!"),console.info("DATA",o)}catch(a){console.error(a)}}),x=(o,a)=>o.includes(a)?o.filter(p=>p!==a):[...o,a];return e.jsx(N,{methods:s,onSubmit:l,children:e.jsxs(j,{component:P,spacing:3,sx:{p:3},children:[Ue.map(o=>e.jsxs(m,{container:!0,spacing:3,children:[e.jsx(m,{xs:12,md:4,children:e.jsx(te,{primary:o.subheader,secondary:o.caption,primaryTypographyProps:{typography:"h6",mb:.5},secondaryTypographyProps:{component:"span"}})}),e.jsx(m,{xs:12,md:8,children:e.jsx(j,{spacing:1,sx:{p:3,borderRadius:2,bgcolor:"background.neutral"},children:e.jsx(ve,{name:"selected",control:r,render:({field:a})=>e.jsx(e.Fragment,{children:o.items.map(p=>e.jsx(Ee,{label:p.label,labelPlacement:"start",control:e.jsx(Le,{checked:a.value.includes(p.id),onChange:()=>a.onChange(x(g.selected,p.id))}),sx:{m:0,width:1,justifyContent:"space-between"}},p.id))})})})})]},o.subheader)),e.jsx(D,{type:"submit",variant:"contained",loading:u,sx:{ml:"auto"},children:"Save Changes"})]})})}function ze(){const{enqueueSnackbar:n}=q(),s=F(),t=M().shape({oldPassword:f().required("Old Password is required"),newPassword:f().required("New Password is required").min(6,"Password must be at least 6 characters").test("no-match","New password must be different than old password",(o,{parent:a})=>o!==a.oldPassword),confirmNewPassword:f().oneOf([Pe("newPassword")],"Passwords must match")}),r={oldPassword:"",newPassword:"",confirmNewPassword:""},c=I({resolver:V(t),defaultValues:r}),{reset:u,handleSubmit:g,formState:{isSubmitting:l}}=c,x=g(async o=>{try{await new Promise(a=>setTimeout(a,500)),u(),n("Update success!"),console.info("DATA",o)}catch(a){console.error(a)}});return e.jsx(N,{methods:c,onSubmit:x,children:e.jsxs(j,{component:P,spacing:3,sx:{p:3},children:[e.jsx(w,{name:"oldPassword",type:s.value?"text":"password",label:"Old Password",InputProps:{endAdornment:e.jsx(T,{position:"end",children:e.jsx(k,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(w,{name:"newPassword",label:"New Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(T,{position:"end",children:e.jsx(k,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})},helperText:e.jsxs(j,{component:"span",direction:"row",alignItems:"center",children:[e.jsx(i,{icon:"eva:info-fill",width:16,sx:{mr:.5}})," Password must be minimum 6+"]})}),e.jsx(w,{name:"confirmNewPassword",type:s.value?"text":"password",label:"Confirm New Password",InputProps:{endAdornment:e.jsx(T,{position:"end",children:e.jsx(k,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(D,{type:"submit",variant:"contained",loading:l,sx:{ml:"auto"},children:"Save Changes"})]})})}const _e=[{value:"general",label:"General",icon:e.jsx(i,{icon:"solar:user-id-bold",width:24})},{value:"billing",label:"Billing",icon:e.jsx(i,{icon:"solar:bill-list-bold",width:24})},{value:"notifications",label:"Notifications",icon:e.jsx(i,{icon:"solar:bell-bing-bold",width:24})},{value:"social",label:"Social links",icon:e.jsx(i,{icon:"solar:share-bold",width:24})},{value:"security",label:"Security",icon:e.jsx(i,{icon:"ic:round-vpn-key",width:24})}];function $e(){const n=ie(),[s,t]=b.useState("general"),r=b.useCallback((c,u)=>{t(u)},[]);return e.jsxs(le,{maxWidth:n.themeStretch?!1:"lg",children:[e.jsx(je,{heading:"Account",links:[{name:"Dashboard",href:_.dashboard.root},{name:"User",href:_.dashboard.user.root},{name:"Account"}],sx:{mb:{xs:3,md:5}}}),e.jsx(ce,{value:s,onChange:r,sx:{mb:{xs:3,md:5}},children:_e.map(c=>e.jsx(de,{label:c.label,icon:c.icon,value:c.value},c.value))}),s==="general"&&e.jsx(Re,{}),s==="billing"&&e.jsx(J,{plans:pe,cards:me,invoices:xe,addressBook:ue}),s==="notifications"&&e.jsx(Oe,{}),s==="social"&&e.jsx(Q,{socialLinks:he.socialLinks}),s==="security"&&e.jsx(ze,{})]})}function Ts(){return e.jsxs(e.Fragment,{children:[e.jsx(be,{children:e.jsx("title",{children:" Dashboard: Account Settings"})}),e.jsx($e,{})]})}export{Ts as default};
