import{V as P,a1 as v,Q as j,aQ as u,Z as D,az as G,ay as W,r as f,$ as H,N as Q,j as a,i as X,a2 as Z,aR as J,at as N,u as F,g as R,D as _,b as z,d as K,G as w,l as Y,c as O,q as y,T as p,B as ee,x as S,a8 as T,w as b,v as ae,t as se,a9 as E,aj as te,p as I,aS as oe,aT as ne,aU as re,aV as ie,aW as ce,W as le}from"./index-eab1947b.js";import{C as de}from"./custom-breadcrumbs-a2330046.js";import{c as L,a as g,b as ue,u as $,F as A,o as me,R as h,C as pe,g as he,p as xe}from"./form-provider-f4e6b55d.js";import{L as q,o as U}from"./yup-8351d28a.js";import{d as ge}from"./format-number-4f65bcca.js";import{C as k}from"./Card-4f9a49c9.js";import{S as be}from"./Checkbox-d0a439ca.js";import{T as we,a as ve}from"./Tabs-34a22f2e.js";import"./file-thumbnail-7bd312f2.js";import"./fade-295cf198.js";import"./transition-bee6630b.js";import"./image-72b5546f.js";import"./KeyboardArrowRight-f8f8542f.js";const je=["className","color","edge","size","sx"],fe=s=>{const{classes:e,edge:n,size:i,color:t,checked:o,disabled:x}=s,c={root:["root",n&&`edge${v(n)}`,`size${v(i)}`],switchBase:["switchBase",`color${v(t)}`,o&&"checked",x&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},m=Z(c,J,e);return j({},e,m)},ye=P("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:n}=s;return[e.root,n.edge&&e[`edge${v(n.edge)}`],e[`size${v(n.size)}`]]}})(({ownerState:s})=>j({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},s.edge==="start"&&{marginLeft:-8},s.edge==="end"&&{marginRight:-8},s.size==="small"&&{width:40,height:24,padding:7,[`& .${u.thumb}`]:{width:16,height:16},[`& .${u.switchBase}`]:{padding:4,[`&.${u.checked}`]:{transform:"translateX(16px)"}}})),ke=P(be,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(s,e)=>{const{ownerState:n}=s;return[e.switchBase,{[`& .${u.input}`]:e.input},n.color!=="default"&&e[`color${v(n.color)}`]]}})(({theme:s})=>({position:"absolute",top:0,left:0,zIndex:1,color:s.vars?s.vars.palette.Switch.defaultColor:`${s.palette.mode==="light"?s.palette.common.white:s.palette.grey[300]}`,transition:s.transitions.create(["left","transform"],{duration:s.transitions.duration.shortest}),[`&.${u.checked}`]:{transform:"translateX(20px)"},[`&.${u.disabled}`]:{color:s.vars?s.vars.palette.Switch.defaultDisabledColor:`${s.palette.mode==="light"?s.palette.grey[100]:s.palette.grey[600]}`},[`&.${u.checked} + .${u.track}`]:{opacity:.5},[`&.${u.disabled} + .${u.track}`]:{opacity:s.vars?s.vars.opacity.switchTrackDisabled:`${s.palette.mode==="light"?.12:.2}`},[`& .${u.input}`]:{left:"-100%",width:"300%"}}),({theme:s,ownerState:e})=>j({"&:hover":{backgroundColor:s.vars?`rgba(${s.vars.palette.action.activeChannel} / ${s.vars.palette.action.hoverOpacity})`:D(s.palette.action.active,s.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${u.checked}`]:{color:(s.vars||s).palette[e.color].main,"&:hover":{backgroundColor:s.vars?`rgba(${s.vars.palette[e.color].mainChannel} / ${s.vars.palette.action.hoverOpacity})`:D(s.palette[e.color].main,s.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.disabled}`]:{color:s.vars?s.vars.palette.Switch[`${e.color}DisabledColor`]:`${s.palette.mode==="light"?G(s.palette[e.color].main,.62):W(s.palette[e.color].main,.55)}`}},[`&.${u.checked} + .${u.track}`]:{backgroundColor:(s.vars||s).palette[e.color].main}})),Ce=P("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(s,e)=>e.track})(({theme:s})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:s.transitions.create(["opacity","background-color"],{duration:s.transitions.duration.shortest}),backgroundColor:s.vars?s.vars.palette.common.onBackground:`${s.palette.mode==="light"?s.palette.common.black:s.palette.common.white}`,opacity:s.vars?s.vars.opacity.switchTrack:`${s.palette.mode==="light"?.38:.3}`})),Se=P("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(s,e)=>e.thumb})(({theme:s})=>({boxShadow:(s.vars||s).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Te=f.forwardRef(function(e,n){const i=H({props:e,name:"MuiSwitch"}),{className:t,color:o="primary",edge:x=!1,size:c="medium",sx:m}=i,l=Q(i,je),r=j({},i,{color:o,edge:x,size:c}),d=fe(r),C=a.jsx(Se,{className:d.thumb,ownerState:r});return a.jsxs(ye,{className:X(d.root,t),sx:m,ownerState:r,children:[a.jsx(ke,j({type:"checkbox",icon:C,checkedIcon:C,ref:n,ownerState:r},l,{classes:j({},d,{root:d.switchBase})})),a.jsx(Ce,{className:d.track,ownerState:r})]})}),Pe=Te;function Ne(){const{enqueueSnackbar:s}=N(),{user:e}=F(),n=L().shape({displayName:g().required("Name is required"),email:g().required("Email is required").email("Email must be a valid email address"),storeName:g().required("Store name is required"),contactPersonInTouch:g().required("Contact person in touch is required"),tradeLicense:ue().nullable().required("Trade License is required"),phoneNumber:g().required("Phone number is required"),address:g().required("Pick up Address is required"),workingTime:g().required("working Time is required"),workingDate:g().required("working Date is required")}),i={displayName:(e==null?void 0:e.displayName)||"",email:(e==null?void 0:e.email)||"",storeName:(e==null?void 0:e.storeName)||"",tradeLicense:(e==null?void 0:e.tradeLicense)||"",contactPersonInTouch:(e==null?void 0:e.contactPersonInTouch)||null,phoneNumber:(e==null?void 0:e.phoneNumber)||"",address:(e==null?void 0:e.address)||"",workingTime:(e==null?void 0:e.workingTime)||"",workingDate:(e==null?void 0:e.workingDate)||""},t=$({resolver:U(n),defaultValues:i}),{setValue:o,handleSubmit:x,formState:{isSubmitting:c}}=t,m=x(async r=>{try{const d=await R(_,"users",e.uid);await z(d,r),s("Update success!")}catch(d){console.error(d)}}),l=f.useCallback(async r=>{const d=r[0],C=new FormData;C.append("images",d);const{data:B}=await K.post("/upload",C);B.length&&o("tradeLicense",B[0],{shouldValidate:!0})},[o]);return a.jsx(A,{methods:t,onSubmit:m,children:a.jsxs(w,{container:!0,spacing:3,children:[a.jsx(w,{xs:12,md:4,children:a.jsx(k,{sx:{pt:10,pb:5,px:3,textAlign:"center"},children:a.jsx(me,{name:"tradeLicense",maxSize:3145728,onDrop:l,helperText:a.jsxs(Y,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Trade License",a.jsx("br",{})," max size of ",ge(3145728)]})})})}),a.jsx(w,{xs:12,md:8,children:a.jsxs(k,{sx:{p:3},children:[a.jsxs(O,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[a.jsx(h,{name:"displayName",label:"Name"}),a.jsx(h,{name:"email",label:"Email Address"}),a.jsx(h,{name:"storeName",label:"Store Name"}),a.jsx(h,{name:"contactPersonInTouch",label:"Contact person in touch"}),a.jsx(h,{name:"phoneNumber",label:"Phone Number"}),a.jsx(h,{name:"address",label:"Pick up address"}),a.jsx(h,{name:"workingTime",label:"Working Time"}),a.jsx(h,{name:"workingDate",label:"Working Date"})]}),a.jsx(y,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:a.jsx(q,{type:"submit",variant:"contained",loading:c,children:"Save Changes"})})]})})]})})}function V(){const{user:s}=F(),[e,n]=f.useState(s.billing);f.useEffect(()=>{n(s.billing)},[s]);const i=async()=>{const t=R(_,"users",s.uid);await z(t,{billing:e}),alert("Updated")};return a.jsx(w,{container:!0,spacing:5,disableEqualOverflow:!0,children:a.jsx(w,{xs:12,md:12,spacing:2,children:a.jsxs(k,{sx:{p:1},children:[a.jsx(p,{value:e==null?void 0:e.managementName,onChange:t=>n(o=>({...o,managementName:t.target.value})),sx:{m:1,width:"30%"},label:"Management Name"}),a.jsx(p,{value:e==null?void 0:e.managementContact,onChange:t=>n(o=>({...o,managementContact:t.target.value})),sx:{m:1,width:"30%"},label:"Management Contact"}),a.jsx(p,{value:e==null?void 0:e.managementEmail,onChange:t=>n(o=>({...o,managementEmail:t.target.value})),sx:{m:1,width:"30%"},label:"Management Email"}),a.jsx(p,{value:e==null?void 0:e.financeName,onChange:t=>n(o=>({...o,financeName:t.target.value})),sx:{m:1,width:"30%"},label:"Finance Name"}),a.jsx(p,{value:e==null?void 0:e.financeContact,onChange:t=>n(o=>({...o,financeContact:t.target.value})),sx:{m:1,width:"30%"},label:"Finance Contact"}),a.jsx(p,{value:e==null?void 0:e.financeEmail,onChange:t=>n(o=>({...o,financeEmail:t.target.value})),sx:{m:1,width:"30%"},label:"Finance Email"}),a.jsx(p,{value:e==null?void 0:e.orderName,onChange:t=>n(o=>({...o,orderName:t.target.value})),sx:{m:1,width:"30%"},label:"Order Name"}),a.jsx(p,{value:e==null?void 0:e.orderContact,onChange:t=>n(o=>({...o,orderContact:t.target.value})),sx:{m:1,width:"30%"},label:"Order Contact"}),a.jsx(p,{value:e==null?void 0:e.orderEmail,onChange:t=>n(o=>({...o,orderEmail:t.target.value})),sx:{m:1,width:"30%"},label:"Order Email"}),a.jsx(p,{value:e==null?void 0:e.pickupName,onChange:t=>n(o=>({...o,pickupName:t.target.value})),sx:{m:1,width:"30%"},label:"Pickup Name"}),a.jsx(p,{value:e==null?void 0:e.pickupContact,onChange:t=>n(o=>({...o,pickupContact:t.target.value})),sx:{m:1,width:"30%"},label:"Pickup Contact"}),a.jsx(p,{value:e==null?void 0:e.pickupEmail,onChange:t=>n(o=>({...o,pickupEmail:t.target.value})),sx:{m:1,width:"30%"},label:"Pickup Email"}),a.jsx("div",{style:{gridColumn:"1 / -1",display:"flex",justifyContent:"flex-end"},children:a.jsx(ee,{variant:"contained",color:"success",onClick:()=>i(),children:"Submit"})})]})})})}V.propTypes={addressBook:S.array,cards:S.array,invoices:S.array,plans:S.array};function M({socialLinks:s}){const{enqueueSnackbar:e}=N(),n={facebook:s.facebook,instagram:s.instagram,linkedin:s.linkedin,twitter:s.twitter},i=$({defaultValues:n}),{handleSubmit:t,formState:{isSubmitting:o}}=i,x=t(async c=>{try{await new Promise(m=>setTimeout(m,500)),e("Update success!"),console.info("DATA",c)}catch(m){console.error(m)}});return a.jsx(A,{methods:i,onSubmit:x,children:a.jsxs(y,{component:k,spacing:3,sx:{p:3},children:[Object.keys(s).map(c=>a.jsx(h,{name:c,InputProps:{startAdornment:a.jsx(T,{position:"start",children:a.jsx(b,{width:24,icon:c==="facebook"&&"eva:facebook-fill"||c==="instagram"&&"ant-design:instagram-filled"||c==="linkedin"&&"eva:linkedin-fill"||c==="twitter"&&"eva:twitter-fill"||"",color:c==="facebook"&&"#1877F2"||c==="instagram"&&"#DF3E30"||c==="linkedin"&&"#006097"||c==="twitter"&&"#1C9CEA"||""})})}},c)),a.jsx(q,{type:"submit",variant:"contained",loading:o,sx:{ml:"auto"},children:"Save Changes"})]})})}M.propTypes={socialLinks:S.object};const $e=[{subheader:"Activity",caption:"",items:[{id:"activity_comments",label:"Email me when customer makes a purchase."},{id:"activity_answers",label:"Email me when customer cancels an order."},{id:"activityFollows",label:"Email me when order is delivered."},{id:"application_news",label:"Email me when  someone leaves a review."},{id:"application_product",label:"Email me when stock is below 5."}]}];function Ae(){const{enqueueSnackbar:s}=N(),e=$({defaultValues:{selected:["activity_comments","application_product"]}}),{watch:n,control:i,handleSubmit:t,formState:{isSubmitting:o}}=e,x=n(),c=t(async l=>{try{await new Promise(r=>setTimeout(r,500)),s("Update success!"),console.info("DATA",l)}catch(r){console.error(r)}}),m=(l,r)=>l.includes(r)?l.filter(d=>d!==r):[...l,r];return a.jsx(A,{methods:e,onSubmit:c,children:a.jsxs(y,{component:k,spacing:3,sx:{p:3},children:[$e.map(l=>a.jsxs(w,{container:!0,spacing:3,children:[a.jsx(w,{xs:12,md:4,children:a.jsx(ae,{primary:l.subheader,secondary:l.caption,primaryTypographyProps:{typography:"h6",mb:.5},secondaryTypographyProps:{component:"span"}})}),a.jsx(w,{xs:12,md:8,children:a.jsx(y,{spacing:1,sx:{p:3,borderRadius:2,bgcolor:"background.neutral"},children:a.jsx(pe,{name:"selected",control:i,render:({field:r})=>a.jsx(a.Fragment,{children:l.items.map(d=>a.jsx(he,{label:d.label,labelPlacement:"start",control:a.jsx(Pe,{checked:r.value.includes(d.id),onChange:()=>r.onChange(m(x.selected,d.id))}),sx:{m:0,width:1,justifyContent:"space-between"}},d.id))})})})})]},l.subheader)),a.jsx(q,{type:"submit",variant:"contained",loading:o,sx:{ml:"auto"},children:"Save Changes"})]})})}function qe(){const{enqueueSnackbar:s}=N(),e=se(),n=L().shape({oldPassword:g().required("Old Password is required"),newPassword:g().required("New Password is required").min(6,"Password must be at least 6 characters").test("no-match","New password must be different than old password",(l,{parent:r})=>l!==r.oldPassword),confirmNewPassword:g().oneOf([xe("newPassword")],"Passwords must match")}),i={oldPassword:"",newPassword:"",confirmNewPassword:""},t=$({resolver:U(n),defaultValues:i}),{reset:o,handleSubmit:x,formState:{isSubmitting:c}}=t,m=x(async l=>{try{await new Promise(r=>setTimeout(r,500)),o(),s("Update success!"),console.info("DATA",l)}catch(r){console.error(r)}});return a.jsx(A,{methods:t,onSubmit:m,children:a.jsxs(y,{component:k,spacing:3,sx:{p:3},children:[a.jsx(h,{name:"oldPassword",type:e.value?"text":"password",label:"Old Password",InputProps:{endAdornment:a.jsx(T,{position:"end",children:a.jsx(E,{onClick:e.onToggle,edge:"end",children:a.jsx(b,{icon:e.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),a.jsx(h,{name:"newPassword",label:"New Password",type:e.value?"text":"password",InputProps:{endAdornment:a.jsx(T,{position:"end",children:a.jsx(E,{onClick:e.onToggle,edge:"end",children:a.jsx(b,{icon:e.value?"solar:eye-bold":"solar:eye-closed-bold"})})})},helperText:a.jsxs(y,{component:"span",direction:"row",alignItems:"center",children:[a.jsx(b,{icon:"eva:info-fill",width:16,sx:{mr:.5}})," Password must be minimum 6+"]})}),a.jsx(h,{name:"confirmNewPassword",type:e.value?"text":"password",label:"Confirm New Password",InputProps:{endAdornment:a.jsx(T,{position:"end",children:a.jsx(E,{onClick:e.onToggle,edge:"end",children:a.jsx(b,{icon:e.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),a.jsx(q,{type:"submit",variant:"contained",loading:c,sx:{ml:"auto"},children:"Save Changes"})]})})}const Ee=[{value:"general",label:"General",icon:a.jsx(b,{icon:"solar:user-id-bold",width:24})},{value:"billing",label:"Billing",icon:a.jsx(b,{icon:"solar:bill-list-bold",width:24})},{value:"security",label:"Security",icon:a.jsx(b,{icon:"ic:round-vpn-key",width:24})}];function Be(){te();const[s,e]=f.useState("general"),n=f.useCallback((i,t)=>{e(t)},[]);return a.jsxs(O,{px:5,children:[a.jsx(de,{heading:"Account",links:[{name:"Dashboard",href:I.dashboard.root},{name:"User",href:I.dashboard.user.root},{name:"Account"}],sx:{mb:{xs:3,md:5}}}),a.jsx(we,{value:s,onChange:n,sx:{mb:{xs:3,md:5}},children:Ee.map(i=>a.jsx(ve,{label:i.label,icon:i.icon,value:i.value},i.value))}),s==="general"&&a.jsx(Ne,{}),s==="billing"&&a.jsx(V,{plans:oe,cards:ne,invoices:re,addressBook:ie}),s==="notifications"&&a.jsx(Ae,{}),s==="social"&&a.jsx(M,{socialLinks:ce.socialLinks}),s==="security"&&a.jsx(qe,{})]})}function He(){return a.jsxs(a.Fragment,{children:[a.jsx(le,{children:a.jsx("title",{children:" Dashboard: Account Settings"})}),a.jsx(Be,{})]})}export{He as default};
