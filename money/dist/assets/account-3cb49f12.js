import{cz as N,bZ as ne,bQ as $,bR as f,c1 as ae,dQ as re,bS as q,bV as V,D as h,ae as e,bT as F,aG as u,aL as P,dR as oe,ac as B,dS as te,dT as ie,az as C,aq as A,c0 as w,cE as le,dU as U,aC as d,aw as j,bU as D,c5 as G,aV as W,a$ as H,b4 as T,c6 as Z,b6 as S,as as b,bX as ce,b5 as de,bC as k,dV as xe,bu as I,b3 as R,aP as ue,bs as me,bO as pe,b0 as he,aR as be,dW as je,aQ as ye,aE as ge,by as fe,aB as _,aN as we,aO as Ce,dX as ve,dY as Pe,dZ as Se,d_ as Ae,dI as Te,b7 as ke}from"./index-1a7acf6a.js";import{a as Ie,b as Ne,c as qe}from"./plan-premium-icon-a852a307.js";import{a as Fe,b as De,A as Ee}from"./address-list-dialog-72599575.js";import{P as Le}from"./payment-new-card-dialog-ea5a9e52.js";import"./DialogTitle-94bb0998.js";import"./DialogContent-2f3858c4.js";function Be(){const{enqueueSnackbar:a}=N(),{user:s}=ne(),t=$().shape({displayName:f().required("Name is required"),email:f().required("Email is required").email("Email must be a valid email address"),storeName:f().required("Store name is required"),contactPersonInTouch:f().required("Contact person in touch is required"),tradeLicense:ae().nullable().required("Avatar is required"),phoneNumber:f().required("Phone number is required"),country:f().required("Country is required"),address:f().required("Address is required"),state:f().required("State is required"),city:f().required("City is required"),zipCode:f().required("Zip code is required"),about:f().required("About is required"),isPublic:re()}),r={displayName:(s==null?void 0:s.displayName)||"",email:(s==null?void 0:s.email)||"",storeName:(s==null?void 0:s.storeName)||"",tradeLicense:(s==null?void 0:s.tradeLicense)||null,contactPersonInTouch:(s==null?void 0:s.contactPersonInTouch)||null,phoneNumber:(s==null?void 0:s.phoneNumber)||"",country:(s==null?void 0:s.country)||"",address:(s==null?void 0:s.address)||"",state:(s==null?void 0:s.state)||"",city:(s==null?void 0:s.city)||"",zipCode:(s==null?void 0:s.zipCode)||"",about:(s==null?void 0:s.about)||"",isPublic:(s==null?void 0:s.isPublic)||!1},l=q({resolver:V(t),defaultValues:r}),{setValue:p,handleSubmit:g,formState:{isSubmitting:i}}=l,m=g(async o=>{try{await new Promise(x=>setTimeout(x,500)),a("Update success!"),console.info("DATA",o)}catch(x){console.error(x)}}),n=h.useCallback(o=>{const x=o[0],y=Object.assign(x,{preview:URL.createObjectURL(x)});x&&p("tradeLicense",y,{shouldValidate:!0})},[p]);return e.jsx(F,{methods:l,onSubmit:m,children:e.jsxs(u,{container:!0,spacing:3,children:[e.jsx(u,{xs:12,md:4,children:e.jsxs(P,{sx:{pt:10,pb:5,px:3,textAlign:"center"},children:[e.jsx(oe,{name:"tradeLicense",maxSize:3145728,onDrop:n,helperText:e.jsxs(B,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",te(3145728)]})}),e.jsx(ie,{name:"isPublic",labelPlacement:"start",label:"Public Profile",sx:{mt:5}}),e.jsx(C,{variant:"soft",color:"error",sx:{mt:3},children:"Delete User"})]})}),e.jsx(u,{xs:12,md:8,children:e.jsxs(P,{sx:{p:3},children:[e.jsxs(A,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(w,{name:"displayName",label:"Name"}),e.jsx(w,{name:"email",label:"Email Address"}),e.jsx(w,{name:"storeName",label:"Store Name"}),e.jsx(w,{name:"contactPersonInTouch",label:"Contact person in touch"}),e.jsx(w,{name:"phoneNumber",label:"Phone Number"}),e.jsx(w,{name:"address",label:"Address"}),e.jsx(le,{name:"country",label:"Country",options:U.map(o=>o.label),getOptionLabel:o=>o,renderOption:(o,x)=>{const{code:y,label:v,phone:E}=U.filter(L=>L.label===x)[0];return v?h.createElement("li",{...o,key:v},e.jsx(d,{icon:`circle-flags:${y.toLowerCase()}`,width:28,sx:{mr:1}},v),v," (",y,") +",E):null}}),e.jsx(w,{name:"state",label:"State/Region"}),e.jsx(w,{name:"city",label:"City"}),e.jsx(w,{name:"zipCode",label:"Zip/Code"})]}),e.jsxs(j,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:[e.jsx(w,{name:"about",multiline:!0,rows:4,label:"About"}),e.jsx(D,{type:"submit",variant:"contained",loading:i,children:"Save Changes"})]})]})})]})})}function O({card:a,sx:s,...t}){const r=G();return e.jsxs(e.Fragment,{children:[e.jsxs(j,{spacing:1,component:W,variant:"outlined",sx:{p:2.5,width:1,position:"relative",...s},...t,children:[e.jsxs(j,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(d,{icon:a.cardType==="visa"&&"logos:visa"||"logos:mastercard",width:36}),a.primary&&e.jsx(H,{color:"info",children:"Default"})]}),e.jsx(B,{variant:"subtitle2",children:a.cardNumber}),e.jsx(T,{onClick:r.onOpen,sx:{top:8,right:8,position:"absolute"},children:e.jsx(d,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(Z,{open:r.open,onClose:r.onClose,children:[e.jsxs(S,{onClick:r.onClose,children:[e.jsx(d,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(S,{onClick:r.onClose,children:[e.jsx(d,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(S,{onClick:r.onClose,sx:{color:"error.main"},children:[e.jsx(d,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}O.propTypes={card:b.object,sx:b.object};function M({open:a,list:s,onClose:t,selected:r,onSelect:l}){const[p,g]=h.useState(""),m=!Re({inputData:s,query:p}).length&&!!p,n=h.useCallback(y=>{g(y.target.value)},[]),o=h.useCallback(y=>{l(y),g(""),t()},[t,l]),x=e.jsx(j,{spacing:2.5,sx:{p:3},children:s.map(y=>e.jsx(O,{card:y,onClick:()=>o(y),sx:{cursor:"pointer",...r(y.id)&&{boxShadow:v=>`0 0 0 2px ${v.palette.text.primary}`}}},y.id))});return e.jsxs(ce,{fullWidth:!0,maxWidth:"xs",open:a,onClose:t,children:[e.jsxs(j,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3,pr:1.5},children:[e.jsx(B,{variant:"h6",children:" Cards "}),e.jsx(C,{size:"small",startIcon:e.jsx(d,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})]}),e.jsx(j,{sx:{px:3},children:e.jsx(de,{value:p,onChange:n,placeholder:"Search...",InputProps:{startAdornment:e.jsx(k,{position:"start",children:e.jsx(d,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),m?e.jsx(xe,{query:p,sx:{px:3,pt:5,pb:10}}):x]})}M.propTypes={list:b.array,onClose:b.func,onSelect:b.func,open:b.bool,selected:b.func};function Re({inputData:a,query:s}){return s?a.filter(t=>t.cardNumber.toLowerCase().indexOf(s.toLowerCase())!==-1):a}function Q({cardList:a,addressBook:s,plans:t}){const r=I(),l=I(),p=s.filter(c=>c.primary)[0],g=a.filter(c=>c.primary)[0],[i,m]=h.useState(""),[n,o]=h.useState(p),[x,y]=h.useState(g),v=h.useCallback(c=>{t.filter(se=>se.primary)[0].subscription!==c&&m(c)},[t]),E=h.useCallback(c=>{o(c)},[]),L=h.useCallback(c=>{y(c)},[]),ee=t.map(c=>e.jsx(u,{xs:12,md:4,children:e.jsxs(j,{component:W,variant:"outlined",onClick:()=>v(c.subscription),sx:{p:2.5,position:"relative",cursor:"pointer",...c.primary&&{opacity:.48,cursor:"default"},...c.subscription===i&&{boxShadow:z=>`0 0 0 2px ${z.palette.text.primary}`}},children:[c.primary&&e.jsx(H,{color:"info",startIcon:e.jsx(d,{icon:"eva:star-fill"}),sx:{position:"absolute",top:8,right:8},children:"Current"}),e.jsxs(A,{sx:{width:48,height:48},children:[c.subscription==="basic"&&e.jsx(Ie,{}),c.subscription==="starter"&&e.jsx(Ne,{}),c.subscription==="premium"&&e.jsx(qe,{})]}),e.jsx(A,{sx:{typography:"subtitle2",mt:2,mb:.5,textTransform:"capitalize"},children:c.subscription}),e.jsxs(j,{direction:"row",alignItems:"center",sx:{typography:"h4"},children:[c.price||"Free",!!c.price&&e.jsx(A,{component:"span",sx:{typography:"body2",color:"text.disabled",ml:.5},children:"/mo"})]})]})},c.subscription));return e.jsxs(e.Fragment,{children:[e.jsxs(P,{children:[e.jsx(R,{title:"Plan"}),e.jsx(u,{container:!0,spacing:2,sx:{p:3},children:ee}),e.jsxs(j,{spacing:2,sx:{p:3,pt:0,typography:"body2"},children:[e.jsxs(u,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(u,{xs:12,md:4,sx:{color:"text.secondary"},children:"Plan"}),e.jsx(u,{xs:12,md:8,sx:{typography:"subtitle2",textTransform:"capitalize"},children:i||"-"})]}),e.jsxs(u,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(u,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing name"}),e.jsx(u,{xs:12,md:8,children:e.jsx(C,{onClick:r.onTrue,endIcon:e.jsx(d,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:n==null?void 0:n.name})})]}),e.jsxs(u,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(u,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing address"}),e.jsx(u,{xs:12,md:8,sx:{color:"text.secondary"},children:n==null?void 0:n.fullAddress})]}),e.jsxs(u,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(u,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing phone number"}),e.jsx(u,{xs:12,md:8,sx:{color:"text.secondary"},children:n==null?void 0:n.phoneNumber})]}),e.jsxs(u,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(u,{xs:12,md:4,sx:{color:"text.secondary"},children:"Payment method"}),e.jsx(u,{xs:12,md:8,children:e.jsx(C,{onClick:l.onTrue,endIcon:e.jsx(d,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:x==null?void 0:x.cardNumber})})]})]}),e.jsx(ue,{sx:{borderStyle:"dashed"}}),e.jsxs(j,{spacing:1.5,direction:"row",justifyContent:"flex-end",sx:{p:3},children:[e.jsx(C,{variant:"outlined",children:"Cancel Plan"}),e.jsx(C,{variant:"contained",children:"Upgrade Plan"})]})]}),e.jsx(M,{list:a,open:l.value,onClose:l.onFalse,selected:c=>(x==null?void 0:x.id)===c,onSelect:L}),e.jsx(Fe,{list:s,open:r.value,onClose:r.onFalse,selected:c=>(n==null?void 0:n.id)===c,onSelect:E,action:e.jsx(C,{size:"small",startIcon:e.jsx(d,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})})]})}Q.propTypes={addressBook:b.array,cardList:b.array,plans:b.array};function X({cards:a}){const s=I();return e.jsxs(e.Fragment,{children:[e.jsxs(P,{sx:{my:3},children:[e.jsx(R,{title:"Payment Method",action:e.jsx(C,{size:"small",color:"primary",startIcon:e.jsx(d,{icon:"mingcute:add-line"}),onClick:s.onTrue,children:"New Card"})}),e.jsx(A,{rowGap:2.5,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{p:3},children:a.map(t=>e.jsx(O,{card:t},t.id))})]}),e.jsx(Le,{open:s.value,onClose:s.onFalse})]})}X.propTypes={cards:b.array};function Y({addressBook:a}){const[s,t]=h.useState(""),r=G(),l=I(),p=h.useCallback(m=>{console.info("ADDRESS",m)},[]),g=h.useCallback((m,n)=>{r.onOpen(m),t(n)},[r]),i=h.useCallback(()=>{r.onClose(),t("")},[r]);return e.jsxs(e.Fragment,{children:[e.jsxs(P,{children:[e.jsx(R,{title:"Address Book",action:e.jsx(C,{size:"small",color:"primary",startIcon:e.jsx(d,{icon:"mingcute:add-line"}),onClick:l.onTrue,children:"Address"})}),e.jsx(j,{spacing:2.5,sx:{p:3},children:a.map(m=>e.jsx(De,{variant:"outlined",address:m,action:e.jsx(T,{onClick:n=>{g(n,`${m.id}`)},sx:{position:"absolute",top:8,right:8},children:e.jsx(d,{icon:"eva:more-vertical-fill"})}),sx:{p:2.5,borderRadius:1}},m.id))})]}),e.jsxs(Z,{open:r.open,onClose:i,children:[e.jsxs(S,{onClick:()=>{i(),console.info("SET AS PRIMARY",s)},children:[e.jsx(d,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(S,{onClick:()=>{i(),console.info("EDIT",s)},children:[e.jsx(d,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(S,{onClick:()=>{i(),console.info("DELETE",s)},sx:{color:"error.main"},children:[e.jsx(d,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(Ee,{open:l.value,onClose:l.onFalse,onCreate:p})]})}Y.propTypes={addressBook:b.array};function J({cards:a,plans:s,invoices:t,addressBook:r}){return e.jsx(u,{container:!0,spacing:5,disableEqualOverflow:!0,children:e.jsxs(u,{xs:12,md:8,children:[e.jsx(Q,{plans:s,cardList:a,addressBook:r}),e.jsx(X,{cards:a}),e.jsx(Y,{addressBook:r})]})})}J.propTypes={addressBook:b.array,cards:b.array,invoices:b.array,plans:b.array};function K({socialLinks:a}){const{enqueueSnackbar:s}=N(),t={facebook:a.facebook,instagram:a.instagram,linkedin:a.linkedin,twitter:a.twitter},r=q({defaultValues:t}),{handleSubmit:l,formState:{isSubmitting:p}}=r,g=l(async i=>{try{await new Promise(m=>setTimeout(m,500)),s("Update success!"),console.info("DATA",i)}catch(m){console.error(m)}});return e.jsx(F,{methods:r,onSubmit:g,children:e.jsxs(j,{component:P,spacing:3,sx:{p:3},children:[Object.keys(a).map(i=>e.jsx(w,{name:i,InputProps:{startAdornment:e.jsx(k,{position:"start",children:e.jsx(d,{width:24,icon:i==="facebook"&&"eva:facebook-fill"||i==="instagram"&&"ant-design:instagram-filled"||i==="linkedin"&&"eva:linkedin-fill"||i==="twitter"&&"eva:twitter-fill"||"",color:i==="facebook"&&"#1877F2"||i==="instagram"&&"#DF3E30"||i==="linkedin"&&"#006097"||i==="twitter"&&"#1C9CEA"||""})})}},i)),e.jsx(D,{type:"submit",variant:"contained",loading:p,sx:{ml:"auto"},children:"Save Changes"})]})})}K.propTypes={socialLinks:b.object};const Oe=[{subheader:"Activity",caption:"",items:[{id:"activity_comments",label:"Email me when customer makes a purchase."},{id:"activity_answers",label:"Email me when customer cancels an order."},{id:"activityFollows",label:"Email me when order is delivered."},{id:"application_news",label:"Email me when  someone leaves a review."},{id:"application_product",label:"Email me when stock is below 5."}]}];function ze(){const{enqueueSnackbar:a}=N(),s=q({defaultValues:{selected:["activity_comments","application_product"]}}),{watch:t,control:r,handleSubmit:l,formState:{isSubmitting:p}}=s,g=t(),i=l(async n=>{try{await new Promise(o=>setTimeout(o,500)),a("Update success!"),console.info("DATA",n)}catch(o){console.error(o)}}),m=(n,o)=>n.includes(o)?n.filter(x=>x!==o):[...n,o];return e.jsx(F,{methods:s,onSubmit:i,children:e.jsxs(j,{component:P,spacing:3,sx:{p:3},children:[Oe.map(n=>e.jsxs(u,{container:!0,spacing:3,children:[e.jsx(u,{xs:12,md:4,children:e.jsx(me,{primary:n.subheader,secondary:n.caption,primaryTypographyProps:{typography:"h6",mb:.5},secondaryTypographyProps:{component:"span"}})}),e.jsx(u,{xs:12,md:8,children:e.jsx(j,{spacing:1,sx:{p:3,borderRadius:2,bgcolor:"background.neutral"},children:e.jsx(pe,{name:"selected",control:r,render:({field:o})=>e.jsx(e.Fragment,{children:n.items.map(x=>e.jsx(he,{label:x.label,labelPlacement:"start",control:e.jsx(be,{checked:o.value.includes(x.id),onChange:()=>o.onChange(m(g.selected,x.id))}),sx:{m:0,width:1,justifyContent:"space-between"}},x.id))})})})})]},n.subheader)),e.jsx(D,{type:"submit",variant:"contained",loading:p,sx:{ml:"auto"},children:"Save Changes"})]})})}function Ue(){const{enqueueSnackbar:a}=N(),s=I(),t=$().shape({oldPassword:f().required("Old Password is required"),newPassword:f().required("New Password is required").min(6,"Password must be at least 6 characters").test("no-match","New password must be different than old password",(n,{parent:o})=>n!==o.oldPassword),confirmNewPassword:f().oneOf([je("newPassword")],"Passwords must match")}),r={oldPassword:"",newPassword:"",confirmNewPassword:""},l=q({resolver:V(t),defaultValues:r}),{reset:p,handleSubmit:g,formState:{isSubmitting:i}}=l,m=g(async n=>{try{await new Promise(o=>setTimeout(o,500)),p(),a("Update success!"),console.info("DATA",n)}catch(o){console.error(o)}});return e.jsx(F,{methods:l,onSubmit:m,children:e.jsxs(j,{component:P,spacing:3,sx:{p:3},children:[e.jsx(w,{name:"oldPassword",type:s.value?"text":"password",label:"Old Password",InputProps:{endAdornment:e.jsx(k,{position:"end",children:e.jsx(T,{onClick:s.onToggle,edge:"end",children:e.jsx(d,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(w,{name:"newPassword",label:"New Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(k,{position:"end",children:e.jsx(T,{onClick:s.onToggle,edge:"end",children:e.jsx(d,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})},helperText:e.jsxs(j,{component:"span",direction:"row",alignItems:"center",children:[e.jsx(d,{icon:"eva:info-fill",width:16,sx:{mr:.5}})," Password must be minimum 6+"]})}),e.jsx(w,{name:"confirmNewPassword",type:s.value?"text":"password",label:"Confirm New Password",InputProps:{endAdornment:e.jsx(k,{position:"end",children:e.jsx(T,{onClick:s.onToggle,edge:"end",children:e.jsx(d,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(D,{type:"submit",variant:"contained",loading:i,sx:{ml:"auto"},children:"Save Changes"})]})})}const _e=[{value:"general",label:"General",icon:e.jsx(d,{icon:"solar:user-id-bold",width:24})},{value:"notifications",label:"Notifications",icon:e.jsx(d,{icon:"solar:bell-bing-bold",width:24})},{value:"security",label:"Security",icon:e.jsx(d,{icon:"ic:round-vpn-key",width:24})}];function $e(){const a=ye(),[s,t]=h.useState("general"),r=h.useCallback((l,p)=>{t(p)},[]);return e.jsxs(ge,{maxWidth:a.themeStretch?!1:"lg",children:[e.jsx(fe,{heading:"Account",links:[{name:"Dashboard",href:_.dashboard.root},{name:"User",href:_.dashboard.user.root},{name:"Account"}],sx:{mb:{xs:3,md:5}}}),e.jsx(we,{value:s,onChange:r,sx:{mb:{xs:3,md:5}},children:_e.map(l=>e.jsx(Ce,{label:l.label,icon:l.icon,value:l.value},l.value))}),s==="general"&&e.jsx(Be,{}),s==="billing"&&e.jsx(J,{plans:ve,cards:Pe,invoices:Se,addressBook:Ae}),s==="notifications"&&e.jsx(ze,{}),s==="social"&&e.jsx(K,{socialLinks:Te.socialLinks}),s==="security"&&e.jsx(Ue,{})]})}function Qe(){return e.jsxs(e.Fragment,{children:[e.jsx(ke,{children:e.jsx("title",{children:" Dashboard: Account Settings"})}),e.jsx($e,{})]})}export{Qe as default};
