import{bx as R,ay as me,aB as U,aC as b,cH as he,cI as K,aD as D,aG as H,a4 as f,j as e,aF as L,a$ as h,aR as k,cJ as je,g as P,cK as be,cL as ye,aS as T,aH as C,bE as J,cy as O,aK as u,S as p,aL as E,cl as G,c2 as B,P as l,c9 as $,cM as ge,bD as fe,aY as v,cN as we,B as A,cO as Ce,cP as ve,bA as N,aI as I,cQ as Q,aU as z,aJ as q,aX as V,aA as F,aV as _,cd as Se,b_ as Ae,ca as Pe,bG as Te,cR as ke,cS as Ie,br as Ne,p as Y,bp as qe,bq as Fe,cT as De,cU as Le,cV as Ee,cW as Oe,cX as Re,W as Be}from"./index-b8ace7df.js";import{P as $e,a as Xe,b as Ue}from"./plan-premium-icon-edd1e48d.js";import{D as Z,a as ee}from"./DialogTitle-51324d08.js";import{D as se}from"./DialogContent-1c11f449.js";function He(){const{enqueueSnackbar:r}=R(),{user:s}=me(),a=U().shape({displayName:b().required("Name is required"),email:b().required("Email is required").email("Email must be a valid email address"),storeName:b().required("Store name is required"),contactPersonInTouch:b().required("Contact person in touch is required"),tradeLicense:he().nullable().required("Avatar is required"),phoneNumber:b().required("Phone number is required"),country:b().required("Country is required"),address:b().required("Address is required"),state:b().required("State is required"),city:b().required("City is required"),zipCode:b().required("Zip code is required"),about:b().required("About is required"),isPublic:K()}),o={displayName:(s==null?void 0:s.displayName)||"",email:(s==null?void 0:s.email)||"",storeName:(s==null?void 0:s.storeName)||"",tradeLicense:(s==null?void 0:s.tradeLicense)||null,contactPersonInTouch:(s==null?void 0:s.contactPersonInTouch)||null,phoneNumber:(s==null?void 0:s.phoneNumber)||"",country:(s==null?void 0:s.country)||"",address:(s==null?void 0:s.address)||"",state:(s==null?void 0:s.state)||"",city:(s==null?void 0:s.city)||"",zipCode:(s==null?void 0:s.zipCode)||"",about:(s==null?void 0:s.about)||"",isPublic:(s==null?void 0:s.isPublic)||!1},c=D({resolver:H(a),defaultValues:o}),{setValue:j,handleSubmit:g,formState:{isSubmitting:t}}=c,x=g(async i=>{try{await new Promise(d=>setTimeout(d,500)),r("Update success!"),console.info("DATA",i)}catch(d){console.error(d)}}),n=f.useCallback(i=>{const d=i[0],y=Object.assign(d,{preview:URL.createObjectURL(d)});d&&j("tradeLicense",y,{shouldValidate:!0})},[j]);return e.jsx(L,{methods:c,onSubmit:x,children:e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{xs:12,md:4,children:e.jsxs(k,{sx:{pt:10,pb:5,px:3,textAlign:"center"},children:[e.jsx(je,{name:"tradeLicense",maxSize:3145728,onDrop:n,helperText:e.jsxs(P,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",be(3145728)]})}),e.jsx(ye,{name:"isPublic",labelPlacement:"start",label:"Public Profile",sx:{mt:5}})]})}),e.jsx(h,{xs:12,md:8,children:e.jsxs(k,{sx:{p:3},children:[e.jsxs(T,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(C,{name:"displayName",label:"Name"}),e.jsx(C,{name:"email",label:"Email Address"}),e.jsx(C,{name:"storeName",label:"Store Name"}),e.jsx(C,{name:"contactPersonInTouch",label:"Contact person in touch"}),e.jsx(C,{name:"phoneNumber",label:"Phone Number"}),e.jsx(C,{name:"address",label:"Address"}),e.jsx(J,{name:"country",label:"Country",options:O.map(i=>i.label),getOptionLabel:i=>i,renderOption:(i,d)=>{const{code:y,label:S,phone:w}=O.filter(X=>X.label===d)[0];return S?f.createElement("li",{...i,key:S},e.jsx(u,{icon:`circle-flags:${y.toLowerCase()}`,width:28,sx:{mr:1}},S),S," (",y,") +",w):null}}),e.jsx(C,{name:"state",label:"State/Region"}),e.jsx(C,{name:"city",label:"City"}),e.jsx(C,{name:"zipCode",label:"Zip/Code"})]}),e.jsxs(p,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:[e.jsx(C,{name:"about",multiline:!0,rows:4,label:"About"}),e.jsx(E,{type:"submit",variant:"contained",loading:t,children:"Save Changes"})]})]})})]})})}function ne({address:r,action:s,sx:a,...o}){const{name:c,fullAddress:j,addressType:g,phoneNumber:t,primary:x}=r;return e.jsxs(p,{component:G,spacing:2,alignItems:{md:"flex-end"},direction:{xs:"column",md:"row"},sx:{position:"relative",...a},...o,children:[e.jsxs(p,{flexGrow:1,spacing:1,children:[e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsxs(P,{variant:"subtitle2",children:[c,e.jsxs(T,{component:"span",sx:{ml:.5,typography:"body2",color:"text.secondary"},children:["(",g,")"]})]}),x&&e.jsx(B,{color:"info",sx:{ml:1},children:"Default"})]}),e.jsx(P,{variant:"body2",sx:{color:"text.secondary"},children:j}),e.jsx(P,{variant:"body2",sx:{color:"text.secondary"},children:t})]}),s&&s]})}ne.propTypes={action:l.node,address:l.object,sx:l.object};function re({open:r,onClose:s,onCreate:a}){const o=U().shape({name:b().required("Fullname is required"),phoneNumber:b().required("Phone number is required"),apartment:b().required("Apartment is required"),address:b().required("Address is required"),city:b().required("City is required"),state:b().required("State is required"),country:b().required("Country is required"),email:b().email().required("Email is required"),addressType:b(),primary:K()}),c={name:"",city:"",state:"",address:"",primary:!0,phoneNumber:"",apartment:"",addressType:"Home",country:"United Arab Emirates",email:""},j=D({resolver:H(o),defaultValues:c}),{handleSubmit:g,formState:{isSubmitting:t}}=j,x=g(async n=>{try{a({name:n.name,phoneNumber:n.phoneNumber,fullAddress:`${n.apartment} ,${n.address}, ${n.city}, ${n.state}, ${n.country}`,addressType:n.addressType,primary:n.primary,email:n.email}),s()}catch(i){console.error(i)}});return e.jsx($,{fullWidth:!0,maxWidth:"sm",open:r,onClose:s,children:e.jsxs(L,{methods:j,onSubmit:x,children:[e.jsx(Z,{children:"New address"}),e.jsx(se,{dividers:!0,children:e.jsxs(p,{spacing:3,children:[e.jsx(ge,{row:!0,name:"addressType",options:[{label:"Home",value:"Home"},{label:"Office",value:"Office"}]}),e.jsxs(T,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(C,{name:"name",label:"Full Name"}),e.jsx(C,{name:"phoneNumber",label:"Phone Number"})]}),e.jsx(C,{name:"apartment",label:"Apartment ,suite,unit etc"}),e.jsx(C,{name:"address",label:"Street Address"}),e.jsxs(T,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(C,{name:"city",label:"City"}),e.jsxs(fe,{name:"state",label:"Emirate / Province",children:[e.jsx(v,{value:"",children:"Select an Emirate"}),e.jsx(v,{value:"Abu Dhabi",children:"Abu Dhabi"}),e.jsx(v,{value:"Ajman",children:"Ajman"}),e.jsx(v,{value:"Dubai",children:"Dubai"}),e.jsx(v,{value:"Fujairah",children:"Fujairah"}),e.jsx(v,{value:"Ras Al Khaimah",children:"Ras Al Khaimah"}),e.jsx(v,{value:"Sharjah",children:"Sharjah"}),e.jsx(v,{value:"Umm Al Quwain",children:"Umm Al Quwain"})]})]}),e.jsx(C,{name:"email",label:"E-mail"}),e.jsx(J,{name:"country",label:"Country",options:O.map(n=>n.label),getOptionLabel:n=>n,renderOption:(n,i)=>{const{code:d,label:y,phone:S}=O.filter(w=>w.label===i)[0];return y?f.createElement("li",{...n,key:y},e.jsx(u,{icon:`circle-flags:${d.toLowerCase()}`,width:28,sx:{mr:1}},y),y," (",d,") +",S):null}}),e.jsx(we,{name:"primary",label:"Use this address as default."})]})}),e.jsxs(ee,{children:[e.jsx(A,{color:"inherit",variant:"outlined",onClick:s,children:"Cancel"}),e.jsx(E,{type:"submit",variant:"contained",loading:t,children:"Deliver to this Address"})]})]})})}re.propTypes={onClose:l.func,onCreate:l.func,open:l.bool};function ae({title:r="Address Book",list:s,action:a,open:o,onClose:c,selected:j,onSelect:g}){const[t,x]=f.useState(""),n=Ge({inputData:s,query:t}),i=!n.length&&!!t,d=f.useCallback(w=>{x(w.target.value)},[]),y=f.useCallback(w=>{g(w),x(""),c()},[c,g]),S=e.jsx(p,{spacing:.5,sx:{p:.5,maxHeight:80*8,overflowX:"hidden"},children:n.map(w=>e.jsxs(p,{spacing:.5,component:Ce,selected:j(`${w.id}`),onClick:()=>y(w),sx:{py:1,px:1.5,borderRadius:1,flexDirection:"column",alignItems:"flex-start",[`&.${ve.selected}`]:{bgcolor:"action.selected","&:hover":{bgcolor:"action.selected"}}},children:[e.jsxs(p,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(P,{variant:"subtitle2",children:w.name}),w.primary&&e.jsx(B,{color:"info",children:"Default"})]}),w.company&&e.jsx(T,{sx:{color:"primary.main",typography:"caption"},children:w.company}),e.jsx(P,{variant:"body2",sx:{color:"text.secondary"},children:w.fullAddress}),w.phoneNumber&&e.jsx(P,{variant:"body2",sx:{color:"text.secondary"},children:w.phoneNumber})]},w.id))});return e.jsxs($,{fullWidth:!0,maxWidth:"xs",open:o,onClose:c,children:[e.jsxs(p,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3,pr:1.5},children:[e.jsxs(P,{variant:"h6",children:[" ",r," "]}),a&&a]}),e.jsx(p,{sx:{p:2,pt:0},children:e.jsx(N,{value:t,onChange:d,placeholder:"Search...",InputProps:{startAdornment:e.jsx(I,{position:"start",children:e.jsx(u,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),i?e.jsx(Q,{query:t,sx:{px:3,pt:5,pb:10}}):S]})}ae.propTypes={action:l.node,list:l.array,onClose:l.func,onSelect:l.func,open:l.bool,selected:l.func,title:l.string};function Ge({inputData:r,query:s}){return s?r.filter(a=>a.name.toLowerCase().indexOf(s.toLowerCase())!==-1||a.fullAddress.toLowerCase().indexOf(s.toLowerCase())!==-1||`${a.company}`.toLowerCase().indexOf(s.toLowerCase())!==-1):r}function W({card:r,sx:s,...a}){const o=z();return e.jsxs(e.Fragment,{children:[e.jsxs(p,{spacing:1,component:G,variant:"outlined",sx:{p:2.5,width:1,position:"relative",...s},...a,children:[e.jsxs(p,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(u,{icon:r.cardType==="visa"&&"logos:visa"||"logos:mastercard",width:36}),r.primary&&e.jsx(B,{color:"info",children:"Default"})]}),e.jsx(P,{variant:"subtitle2",children:r.cardNumber}),e.jsx(q,{onClick:o.onOpen,sx:{top:8,right:8,position:"absolute"},children:e.jsx(u,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(V,{open:o.open,onClose:o.onClose,children:[e.jsxs(v,{onClick:o.onClose,children:[e.jsx(u,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(v,{onClick:o.onClose,children:[e.jsx(u,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(v,{onClick:o.onClose,sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}W.propTypes={card:l.object,sx:l.object};function oe({open:r,list:s,onClose:a,selected:o,onSelect:c}){const[j,g]=f.useState(""),x=!ze({inputData:s,query:j}).length&&!!j,n=f.useCallback(y=>{g(y.target.value)},[]),i=f.useCallback(y=>{c(y),g(""),a()},[a,c]),d=e.jsx(p,{spacing:2.5,sx:{p:3},children:s.map(y=>e.jsx(W,{card:y,onClick:()=>i(y),sx:{cursor:"pointer",...o(y.id)&&{boxShadow:S=>`0 0 0 2px ${S.palette.text.primary}`}}},y.id))});return e.jsxs($,{fullWidth:!0,maxWidth:"xs",open:r,onClose:a,children:[e.jsxs(p,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3,pr:1.5},children:[e.jsx(P,{variant:"h6",children:" Cards "}),e.jsx(A,{size:"small",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})]}),e.jsx(p,{sx:{px:3},children:e.jsx(N,{value:j,onChange:n,placeholder:"Search...",InputProps:{startAdornment:e.jsx(I,{position:"start",children:e.jsx(u,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),x?e.jsx(Q,{query:j,sx:{px:3,pt:5,pb:10}}):d]})}oe.propTypes={list:l.array,onClose:l.func,onSelect:l.func,open:l.bool,selected:l.func};function ze({inputData:r,query:s}){return s?r.filter(a=>a.cardNumber.toLowerCase().indexOf(s.toLowerCase())!==-1):r}function te({cardList:r,addressBook:s,plans:a}){const o=F(),c=F(),j=s.filter(m=>m.primary)[0],g=r.filter(m=>m.primary)[0],[t,x]=f.useState(""),[n,i]=f.useState(j),[d,y]=f.useState(g),S=f.useCallback(m=>{a.filter(pe=>pe.primary)[0].subscription!==m&&x(m)},[a]),w=f.useCallback(m=>{i(m)},[]),X=f.useCallback(m=>{y(m)},[]),xe=a.map(m=>e.jsx(h,{xs:12,md:4,children:e.jsxs(p,{component:G,variant:"outlined",onClick:()=>S(m.subscription),sx:{p:2.5,position:"relative",cursor:"pointer",...m.primary&&{opacity:.48,cursor:"default"},...m.subscription===t&&{boxShadow:M=>`0 0 0 2px ${M.palette.text.primary}`}},children:[m.primary&&e.jsx(B,{color:"info",startIcon:e.jsx(u,{icon:"eva:star-fill"}),sx:{position:"absolute",top:8,right:8},children:"Current"}),e.jsxs(T,{sx:{width:48,height:48},children:[m.subscription==="basic"&&e.jsx($e,{}),m.subscription==="starter"&&e.jsx(Xe,{}),m.subscription==="premium"&&e.jsx(Ue,{})]}),e.jsx(T,{sx:{typography:"subtitle2",mt:2,mb:.5,textTransform:"capitalize"},children:m.subscription}),e.jsxs(p,{direction:"row",alignItems:"center",sx:{typography:"h4"},children:[m.price||"Free",!!m.price&&e.jsx(T,{component:"span",sx:{typography:"body2",color:"text.disabled",ml:.5},children:"/mo"})]})]})},m.subscription));return e.jsxs(e.Fragment,{children:[e.jsxs(k,{children:[e.jsx(_,{title:"Plan"}),e.jsx(h,{container:!0,spacing:2,sx:{p:3},children:xe}),e.jsxs(p,{spacing:2,sx:{p:3,pt:0,typography:"body2"},children:[e.jsxs(h,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(h,{xs:12,md:4,sx:{color:"text.secondary"},children:"Plan"}),e.jsx(h,{xs:12,md:8,sx:{typography:"subtitle2",textTransform:"capitalize"},children:t||"-"})]}),e.jsxs(h,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(h,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing name"}),e.jsx(h,{xs:12,md:8,children:e.jsx(A,{onClick:o.onTrue,endIcon:e.jsx(u,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:n==null?void 0:n.name})})]}),e.jsxs(h,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(h,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing address"}),e.jsx(h,{xs:12,md:8,sx:{color:"text.secondary"},children:n==null?void 0:n.fullAddress})]}),e.jsxs(h,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(h,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing phone number"}),e.jsx(h,{xs:12,md:8,sx:{color:"text.secondary"},children:n==null?void 0:n.phoneNumber})]}),e.jsxs(h,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(h,{xs:12,md:4,sx:{color:"text.secondary"},children:"Payment method"}),e.jsx(h,{xs:12,md:8,children:e.jsx(A,{onClick:c.onTrue,endIcon:e.jsx(u,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:d==null?void 0:d.cardNumber})})]})]}),e.jsx(Se,{sx:{borderStyle:"dashed"}}),e.jsxs(p,{spacing:1.5,direction:"row",justifyContent:"flex-end",sx:{p:3},children:[e.jsx(A,{variant:"outlined",children:"Cancel Plan"}),e.jsx(A,{variant:"contained",children:"Upgrade Plan"})]})]}),e.jsx(oe,{list:r,open:c.value,onClose:c.onFalse,selected:m=>(d==null?void 0:d.id)===m,onSelect:X}),e.jsx(ae,{list:s,open:o.value,onClose:o.onFalse,selected:m=>(n==null?void 0:n.id)===m,onSelect:w,action:e.jsx(A,{size:"small",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})})]})}te.propTypes={addressBook:l.array,cardList:l.array,plans:l.array};function ie({onClose:r,...s}){const a=z();return e.jsxs(e.Fragment,{children:[e.jsxs($,{maxWidth:"sm",onClose:r,...s,children:[e.jsx(Z,{children:" New Card "}),e.jsx(se,{sx:{overflow:"unset"},children:e.jsxs(p,{spacing:2.5,children:[e.jsx(N,{autoFocus:!0,label:"Card Number",placeholder:"XXXX XXXX XXXX XXXX",InputLabelProps:{shrink:!0}}),e.jsx(N,{label:"Card Holder",placeholder:"JOHN DOE",InputLabelProps:{shrink:!0}}),e.jsxs(p,{spacing:2,direction:"row",children:[e.jsx(N,{label:"Expiration Date",placeholder:"MM/YY",InputLabelProps:{shrink:!0}}),e.jsx(N,{label:"CVV/CVC",placeholder:"***",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(I,{position:"end",children:e.jsx(q,{size:"small",edge:"end",onClick:a.onOpen,children:e.jsx(u,{icon:"eva:info-outline"})})})}})]}),e.jsxs(p,{direction:"row",alignItems:"center",sx:{typography:"caption",color:"text.disabled"},children:[e.jsx(u,{icon:"carbon:locked",sx:{mr:.5}}),"Your transaction is secured with SSL encryption"]})]})}),e.jsxs(ee,{children:[e.jsx(A,{color:"inherit",variant:"outlined",onClick:r,children:"Cancel"}),e.jsx(A,{variant:"contained",onClick:r,children:"Add"})]})]}),e.jsx(V,{open:a.open,onClose:a.onClose,arrow:"bottom-center",sx:{maxWidth:200,typography:"body2",textAlign:"center"},children:"Three-digit number on the back of your VISA card"})]})}ie.propTypes={onClose:l.func};function le({cards:r}){const s=F();return e.jsxs(e.Fragment,{children:[e.jsxs(k,{sx:{my:3},children:[e.jsx(_,{title:"Payment Method",action:e.jsx(A,{size:"small",color:"primary",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),onClick:s.onTrue,children:"New Card"})}),e.jsx(T,{rowGap:2.5,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{p:3},children:r.map(a=>e.jsx(W,{card:a},a.id))})]}),e.jsx(ie,{open:s.value,onClose:s.onFalse})]})}le.propTypes={cards:l.array};function ce({addressBook:r}){const[s,a]=f.useState(""),o=z(),c=F(),j=f.useCallback(x=>{console.info("ADDRESS",x)},[]),g=f.useCallback((x,n)=>{o.onOpen(x),a(n)},[o]),t=f.useCallback(()=>{o.onClose(),a("")},[o]);return e.jsxs(e.Fragment,{children:[e.jsxs(k,{children:[e.jsx(_,{title:"Address Book",action:e.jsx(A,{size:"small",color:"primary",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),onClick:c.onTrue,children:"Address"})}),e.jsx(p,{spacing:2.5,sx:{p:3},children:r.map(x=>e.jsx(ne,{variant:"outlined",address:x,action:e.jsx(q,{onClick:n=>{g(n,`${x.id}`)},sx:{position:"absolute",top:8,right:8},children:e.jsx(u,{icon:"eva:more-vertical-fill"})}),sx:{p:2.5,borderRadius:1}},x.id))})]}),e.jsxs(V,{open:o.open,onClose:t,children:[e.jsxs(v,{onClick:()=>{t(),console.info("SET AS PRIMARY",s)},children:[e.jsx(u,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(v,{onClick:()=>{t(),console.info("EDIT",s)},children:[e.jsx(u,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(v,{onClick:()=>{t(),console.info("DELETE",s)},sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(re,{open:c.value,onClose:c.onFalse,onCreate:j})]})}ce.propTypes={addressBook:l.array};function de({cards:r,plans:s,invoices:a,addressBook:o}){return e.jsx(h,{container:!0,spacing:5,disableEqualOverflow:!0,children:e.jsxs(h,{xs:12,md:8,children:[e.jsx(te,{plans:s,cardList:r,addressBook:o}),e.jsx(le,{cards:r}),e.jsx(ce,{addressBook:o})]})})}de.propTypes={addressBook:l.array,cards:l.array,invoices:l.array,plans:l.array};function ue({socialLinks:r}){const{enqueueSnackbar:s}=R(),a={facebook:r.facebook,instagram:r.instagram,linkedin:r.linkedin,twitter:r.twitter},o=D({defaultValues:a}),{handleSubmit:c,formState:{isSubmitting:j}}=o,g=c(async t=>{try{await new Promise(x=>setTimeout(x,500)),s("Update success!"),console.info("DATA",t)}catch(x){console.error(x)}});return e.jsx(L,{methods:o,onSubmit:g,children:e.jsxs(p,{component:k,spacing:3,sx:{p:3},children:[Object.keys(r).map(t=>e.jsx(C,{name:t,InputProps:{startAdornment:e.jsx(I,{position:"start",children:e.jsx(u,{width:24,icon:t==="facebook"&&"eva:facebook-fill"||t==="instagram"&&"ant-design:instagram-filled"||t==="linkedin"&&"eva:linkedin-fill"||t==="twitter"&&"eva:twitter-fill"||"",color:t==="facebook"&&"#1877F2"||t==="instagram"&&"#DF3E30"||t==="linkedin"&&"#006097"||t==="twitter"&&"#1C9CEA"||""})})}},t)),e.jsx(E,{type:"submit",variant:"contained",loading:j,sx:{ml:"auto"},children:"Save Changes"})]})})}ue.propTypes={socialLinks:l.object};const Ve=[{subheader:"Activity",caption:"",items:[{id:"activity_comments",label:"Email me when customer makes a purchase."},{id:"activity_answers",label:"Email me when customer cancels an order."},{id:"activityFollows",label:"Email me when order is delivered."},{id:"application_news",label:"Email me when  someone leaves a review."},{id:"application_product",label:"Email me when stock is below 5."}]}];function _e(){const{enqueueSnackbar:r}=R(),s=D({defaultValues:{selected:["activity_comments","application_product"]}}),{watch:a,control:o,handleSubmit:c,formState:{isSubmitting:j}}=s,g=a(),t=c(async n=>{try{await new Promise(i=>setTimeout(i,500)),r("Update success!"),console.info("DATA",n)}catch(i){console.error(i)}}),x=(n,i)=>n.includes(i)?n.filter(d=>d!==i):[...n,i];return e.jsx(L,{methods:s,onSubmit:t,children:e.jsxs(p,{component:k,spacing:3,sx:{p:3},children:[Ve.map(n=>e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{xs:12,md:4,children:e.jsx(Ae,{primary:n.subheader,secondary:n.caption,primaryTypographyProps:{typography:"h6",mb:.5},secondaryTypographyProps:{component:"span"}})}),e.jsx(h,{xs:12,md:8,children:e.jsx(p,{spacing:1,sx:{p:3,borderRadius:2,bgcolor:"background.neutral"},children:e.jsx(Pe,{name:"selected",control:o,render:({field:i})=>e.jsx(e.Fragment,{children:n.items.map(d=>e.jsx(Te,{label:d.label,labelPlacement:"start",control:e.jsx(ke,{checked:i.value.includes(d.id),onChange:()=>i.onChange(x(g.selected,d.id))}),sx:{m:0,width:1,justifyContent:"space-between"}},d.id))})})})})]},n.subheader)),e.jsx(E,{type:"submit",variant:"contained",loading:j,sx:{ml:"auto"},children:"Save Changes"})]})})}function We(){const{enqueueSnackbar:r}=R(),s=F(),a=U().shape({oldPassword:b().required("Old Password is required"),newPassword:b().required("New Password is required").min(6,"Password must be at least 6 characters").test("no-match","New password must be different than old password",(n,{parent:i})=>n!==i.oldPassword),confirmNewPassword:b().oneOf([Ie("newPassword")],"Passwords must match")}),o={oldPassword:"",newPassword:"",confirmNewPassword:""},c=D({resolver:H(a),defaultValues:o}),{reset:j,handleSubmit:g,formState:{isSubmitting:t}}=c,x=g(async n=>{try{await new Promise(i=>setTimeout(i,500)),j(),r("Update success!"),console.info("DATA",n)}catch(i){console.error(i)}});return e.jsx(L,{methods:c,onSubmit:x,children:e.jsxs(p,{component:k,spacing:3,sx:{p:3},children:[e.jsx(C,{name:"oldPassword",type:s.value?"text":"password",label:"Old Password",InputProps:{endAdornment:e.jsx(I,{position:"end",children:e.jsx(q,{onClick:s.onToggle,edge:"end",children:e.jsx(u,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(C,{name:"newPassword",label:"New Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(I,{position:"end",children:e.jsx(q,{onClick:s.onToggle,edge:"end",children:e.jsx(u,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})},helperText:e.jsxs(p,{component:"span",direction:"row",alignItems:"center",children:[e.jsx(u,{icon:"eva:info-fill",width:16,sx:{mr:.5}})," Password must be minimum 6+"]})}),e.jsx(C,{name:"confirmNewPassword",type:s.value?"text":"password",label:"Confirm New Password",InputProps:{endAdornment:e.jsx(I,{position:"end",children:e.jsx(q,{onClick:s.onToggle,edge:"end",children:e.jsx(u,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(E,{type:"submit",variant:"contained",loading:t,sx:{ml:"auto"},children:"Save Changes"})]})})}const Me=[{value:"general",label:"General",icon:e.jsx(u,{icon:"solar:user-id-bold",width:24})},{value:"notifications",label:"Notifications",icon:e.jsx(u,{icon:"solar:bell-bing-bold",width:24})},{value:"security",label:"Security",icon:e.jsx(u,{icon:"ic:round-vpn-key",width:24})}];function Ye(){const[r,s]=f.useState("general"),a=f.useCallback((o,c)=>{s(c)},[]);return e.jsxs(T,{px:5,children:[e.jsx(Ne,{heading:"Account",links:[{name:"Dashboard",href:Y.dashboard.root},{name:"User",href:Y.dashboard.user.root},{name:"Account"}],sx:{mb:{xs:3,md:5}}}),e.jsx(qe,{value:r,onChange:a,sx:{mb:{xs:3,md:5}},children:Me.map(o=>e.jsx(Fe,{label:o.label,icon:o.icon,value:o.value},o.value))}),r==="general"&&e.jsx(He,{}),r==="billing"&&e.jsx(de,{plans:De,cards:Le,invoices:Ee,addressBook:Oe}),r==="notifications"&&e.jsx(_e,{}),r==="social"&&e.jsx(ue,{socialLinks:Re.socialLinks}),r==="security"&&e.jsx(We,{})]})}function es(){return e.jsxs(e.Fragment,{children:[e.jsx(Be,{children:e.jsx("title",{children:" Dashboard: Account Settings"})}),e.jsx(Ye,{})]})}export{es as default};
