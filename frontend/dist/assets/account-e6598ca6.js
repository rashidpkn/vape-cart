import{aP as k,u as T,ab as z,ac as u,ao as $,ad as E,g as q,D as B,b as D,r as h,k as H,j as e,af as F,K as g,C as p,bm as M,p as W,bn as K,c as S,aj as m,v as P,L as I,am as V,T as o,B as R,E as f,ak as y,z as x,x as J,bo as Q,al as A,aD as X,d as Y,ai as L,b9 as Z,ba as ee,bp as ae,bq as se,br as ne,bs as te,bt as re,W as ie}from"./index-19627c7e.js";import{T as oe,a as le,b as w,c as l,d as de}from"./TableRow-028ae33c.js";function ce(){const{enqueueSnackbar:i}=k(),{user:t,initialize:a}=T(),r=z().shape({displayName:u().required("Name is required"),email:u().required("Email is required").email("Email must be a valid email address"),storeName:u().required("Store name is required"),contactPersonInTouch:u().required("Contact person in touch is required"),tradeLicense:$().nullable().required("Trade License is required"),phoneNumber:u().required("Phone number is required"),address:u().required("Company Address is required"),workingTime:u().required("Company Operating Time is required"),workingDate:u().required("Company working Days is required")}),c={displayName:(t==null?void 0:t.displayName)||"",email:(t==null?void 0:t.email)||"",storeName:(t==null?void 0:t.storeName)||"",tradeLicense:(t==null?void 0:t.tradeLicense)||"",contactPersonInTouch:(t==null?void 0:t.contactPersonInTouch)||null,phoneNumber:(t==null?void 0:t.phoneNumber)||"",address:(t==null?void 0:t.address)||"",workingTime:(t==null?void 0:t.workingTime)||"",workingDate:(t==null?void 0:t.workingDate)||""},s=E({resolver:V(r),defaultValues:c}),{setValue:n,handleSubmit:d,formState:{isSubmitting:b}}=s,v=d(async N=>{try{const C=await q(B,"users",t.uid);await D(C,N),i("Update success!"),a()}catch(C){console.error(C)}}),j=h.useCallback(async N=>{const C=N[0],O=new FormData;O.append("images",C);const{data:U}=await H.post("/upload",O);U.length&&n("tradeLicense",U[0],{shouldValidate:!0})},[n]);return e.jsx(F,{methods:s,onSubmit:v,children:e.jsxs(g,{container:!0,spacing:3,children:[e.jsx(g,{xs:12,md:4,children:e.jsx(p,{sx:{pt:10,pb:5,px:3,textAlign:"center"},children:e.jsx(M,{name:"tradeLicense",maxSize:3145728,onDrop:j,helperText:e.jsxs(W,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Trade License",e.jsx("br",{})," max size of ",K(3145728)]})})})}),e.jsx(g,{xs:12,md:8,children:e.jsxs(p,{sx:{p:3},children:[e.jsxs(S,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(m,{name:"displayName",label:"Name"}),e.jsx(m,{name:"email",label:"Email Address"}),e.jsx(m,{name:"storeName",label:"Store Name"}),e.jsx(m,{name:"contactPersonInTouch",label:"Contact person in touch"}),e.jsx(m,{name:"phoneNumber",label:"Phone Number"}),e.jsx(m,{name:"address",label:"Company address"}),e.jsx(m,{name:"workingTime",label:"Company Operating Time"}),e.jsx(m,{name:"workingDate",label:"Company Working Days"})]}),e.jsx(P,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:e.jsx(I,{type:"submit",variant:"contained",loading:b,children:"Save Changes"})})]})})]})})}function _(){const{user:i,initialize:t}=T(),[a,r]=h.useState(i.contact);h.useEffect(()=>{r(i.contact)},[i]);const c=async()=>{const s=q(B,"users",i.uid);await D(s,{contact:a}),alert("Updated"),t()};return e.jsx(g,{container:!0,spacing:5,disableEqualOverflow:!0,children:e.jsx(g,{xs:12,md:12,spacing:2,children:e.jsxs(p,{sx:{p:1},children:[e.jsx(o,{value:a==null?void 0:a.managementName,onChange:s=>r(n=>({...n,managementName:s.target.value})),sx:{m:1,width:"30%"},label:"Management Name"}),e.jsx(o,{value:a==null?void 0:a.managementContact,onChange:s=>r(n=>({...n,managementContact:s.target.value})),sx:{m:1,width:"30%"},label:"Management Contact"}),e.jsx(o,{value:a==null?void 0:a.managementEmail,onChange:s=>r(n=>({...n,managementEmail:s.target.value})),sx:{m:1,width:"30%"},label:"Management Email"}),e.jsx(o,{value:a==null?void 0:a.financeName,onChange:s=>r(n=>({...n,financeName:s.target.value})),sx:{m:1,width:"30%"},label:"Finance Name"}),e.jsx(o,{value:a==null?void 0:a.financeContact,onChange:s=>r(n=>({...n,financeContact:s.target.value})),sx:{m:1,width:"30%"},label:"Finance Contact"}),e.jsx(o,{value:a==null?void 0:a.financeEmail,onChange:s=>r(n=>({...n,financeEmail:s.target.value})),sx:{m:1,width:"30%"},label:"Finance Email"}),e.jsx(o,{value:a==null?void 0:a.customerService,onChange:s=>r(n=>({...n,customerService:s.target.value})),sx:{m:1,width:"30%"},label:"Customer Service"}),e.jsx(o,{value:a==null?void 0:a.customerServiceContact,onChange:s=>r(n=>({...n,customerServiceContact:s.target.value})),sx:{m:1,width:"30%"},label:"Customer Service Contact"}),e.jsx(o,{value:a==null?void 0:a.customerServiceEmail,onChange:s=>r(n=>({...n,customerServiceEmail:s.target.value})),sx:{m:1,width:"30%"},label:"Customer Service Email"}),e.jsx(o,{value:a==null?void 0:a.orderProcessing,onChange:s=>r(n=>({...n,orderProcessing:s.target.value})),sx:{m:1,width:"30%"},label:"Order Processing"}),e.jsx(o,{value:a==null?void 0:a.orderProcessingContact,onChange:s=>r(n=>({...n,orderProcessingContact:s.target.value})),sx:{m:1,width:"30%"},label:"Order Processing Contact"}),e.jsx(o,{value:a==null?void 0:a.orderProcessingEmail,onChange:s=>r(n=>({...n,orderProcessingEmail:s.target.value})),sx:{m:1,width:"30%"},label:"Order Processing Email"}),e.jsx("div",{style:{gridColumn:"1 / -1",display:"flex",justifyContent:"flex-end"},children:e.jsx(R,{variant:"contained",color:"success",onClick:()=>c(),children:"Submit"})})]})})})}_.propTypes={addressBook:f.array,cards:f.array,invoices:f.array,plans:f.array};function G({socialLinks:i}){const{enqueueSnackbar:t}=k(),a={facebook:i.facebook,instagram:i.instagram,linkedin:i.linkedin,twitter:i.twitter},r=E({defaultValues:a}),{handleSubmit:c,formState:{isSubmitting:s}}=r,n=c(async d=>{try{await new Promise(b=>setTimeout(b,500)),t("Update success!"),console.info("DATA",d)}catch(b){console.error(b)}});return e.jsx(F,{methods:r,onSubmit:n,children:e.jsxs(P,{component:p,spacing:3,sx:{p:3},children:[Object.keys(i).map(d=>e.jsx(m,{name:d,InputProps:{startAdornment:e.jsx(y,{position:"start",children:e.jsx(x,{width:24,icon:d==="facebook"&&"eva:facebook-fill"||d==="instagram"&&"ant-design:instagram-filled"||d==="linkedin"&&"eva:linkedin-fill"||d==="twitter"&&"eva:twitter-fill"||"",color:d==="facebook"&&"#1877F2"||d==="instagram"&&"#DF3E30"||d==="linkedin"&&"#006097"||d==="twitter"&&"#1C9CEA"||""})})}},d)),e.jsx(I,{type:"submit",variant:"contained",loading:s,sx:{ml:"auto"},children:"Save Changes"})]})})}G.propTypes={socialLinks:f.object};function me(){const{enqueueSnackbar:i}=k(),t=J(),a=z().shape({oldPassword:u().required("Old Password is required"),newPassword:u().required("New Password is required").min(6,"Password must be at least 6 characters").test("no-match","New password must be different than old password",(v,{parent:j})=>v!==j.oldPassword),confirmNewPassword:u().oneOf([Q("newPassword")],"Passwords must match")}),r={oldPassword:"",newPassword:"",confirmNewPassword:""},c=E({resolver:V(a),defaultValues:r}),{reset:s,handleSubmit:n,formState:{isSubmitting:d}}=c,b=n(async v=>{try{await new Promise(j=>setTimeout(j,500)),s(),i("Update success!"),console.info("DATA",v)}catch(j){console.error(j)}});return e.jsx(F,{methods:c,onSubmit:b,children:e.jsxs(P,{component:p,spacing:3,sx:{p:3},children:[e.jsx(m,{name:"oldPassword",type:t.value?"text":"password",label:"Old Password",InputProps:{endAdornment:e.jsx(y,{position:"end",children:e.jsx(A,{onClick:t.onToggle,edge:"end",children:e.jsx(x,{icon:t.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(m,{name:"newPassword",label:"New Password",type:t.value?"text":"password",InputProps:{endAdornment:e.jsx(y,{position:"end",children:e.jsx(A,{onClick:t.onToggle,edge:"end",children:e.jsx(x,{icon:t.value?"solar:eye-bold":"solar:eye-closed-bold"})})})},helperText:e.jsxs(P,{component:"span",direction:"row",alignItems:"center",children:[e.jsx(x,{icon:"eva:info-fill",width:16,sx:{mr:.5}})," Password must be minimum 6+"]})}),e.jsx(m,{name:"confirmNewPassword",type:t.value?"text":"password",label:"Confirm New Password",InputProps:{endAdornment:e.jsx(y,{position:"end",children:e.jsx(A,{onClick:t.onToggle,edge:"end",children:e.jsx(x,{icon:t.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(I,{type:"submit",variant:"contained",loading:d,sx:{ml:"auto"},children:"Save Changes"})]})})}function ue(){const{user:i,initialize:t}=T(),[a,r]=h.useState(i.finance);h.useEffect(()=>{r(i.finance)},[i]);const c=async()=>{const s=q(B,"users",i.uid);await D(s,{finance:a}),alert("Updated"),t()};return e.jsx(g,{container:!0,spacing:5,disableEqualOverflow:!0,children:e.jsx(g,{xs:12,md:12,spacing:2,children:e.jsxs(p,{sx:{p:1},children:[e.jsx(o,{value:a==null?void 0:a.managementName,onChange:s=>r(n=>({...n,managementName:s.target.value})),sx:{m:1,width:"30%"},label:"Account Name"}),e.jsx(o,{value:a==null?void 0:a.managementContact,onChange:s=>r(n=>({...n,managementContact:s.target.value})),sx:{m:1,width:"30%"},label:"Account Number"}),e.jsx(o,{value:a==null?void 0:a.managementEmail,onChange:s=>r(n=>({...n,managementEmail:s.target.value})),sx:{m:1,width:"30%"},label:"Account Currency"}),e.jsx(o,{value:a==null?void 0:a.financeName,onChange:s=>r(n=>({...n,financeName:s.target.value})),sx:{m:1,width:"30%"},label:"IBAN"}),e.jsx(o,{value:a==null?void 0:a.financeContact,onChange:s=>r(n=>({...n,financeContact:s.target.value})),sx:{m:1,width:"30%"},label:"Bank Name"}),e.jsx(o,{value:a==null?void 0:a.financeEmail,onChange:s=>r(n=>({...n,financeEmail:s.target.value})),sx:{m:1,width:"30%"},label:"Bank Branch"}),e.jsx(o,{value:a==null?void 0:a.customerService,onChange:s=>r(n=>({...n,customerService:s.target.value})),sx:{m:1,width:"30%"},label:"Swift Code"}),e.jsx(o,{value:a==null?void 0:a.customerServiceContact,onChange:s=>r(n=>({...n,customerServiceContact:s.target.value})),sx:{m:1,width:"30%"},label:"Tax Registration Number"}),e.jsxs(S,{sx:{width:"100%",height:"250px",border:"1px solid rgba(145, 158, 171, 0.2)",borderRadius:"8px",m:1,position:"relative"},children:[e.jsx(S,{component:"input",onChange:s=>r(n=>({...n,customerServiceEmail:s.target.value})),sx:{width:"100%",opacity:0,height:"100%",position:"absolute",zIndex:1},label:"TRN Certificate Upload",type:"file"}),e.jsx("p",{style:{position:"absolute",margin:"auto",inset:0,textAlign:"center",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:"Upload TRN Certificate"})]}),e.jsx("div",{style:{gridColumn:"1 / -1",display:"flex",justifyContent:"flex-end"},children:e.jsx(R,{variant:"contained",color:"success",onClick:()=>c(),children:"Submit"})})]})})})}function xe(){const{user:i,initialize:t}=T(),[a,r]=h.useState({tier1:25,tier2:23,tier3:20,target1:5e4,target2:1e5,target3:15e4});return h.useEffect(()=>{i.commission&&r(c=>({...c,...i.commission}))},[i]),e.jsx(g,{container:!0,spacing:5,disableEqualOverflow:!0,sx:{width:"100%",p:5},children:e.jsx(p,{sx:{width:"100%"},children:e.jsxs(oe,{sx:{width:"100%"},children:[e.jsx(le,{children:e.jsxs(w,{children:[e.jsx(l,{}),e.jsx(l,{children:"Percentage %"}),e.jsx(l,{children:"Target"})]})}),e.jsxs(de,{children:[e.jsxs(w,{children:[e.jsx(l,{children:"Base Commission"}),e.jsx(l,{children:"30%"}),e.jsx(l,{children:"N/A"})]}),e.jsxs(w,{children:[e.jsx(l,{children:"Teir 1 Rebate"}),e.jsxs(l,{children:[a.tier1,"%"]}),e.jsx(l,{children:a.target1})]}),e.jsxs(w,{children:[e.jsx(l,{children:"Teir 2 Rebate"}),e.jsxs(l,{children:[a.tier2,"%"]}),e.jsx(l,{children:a.target2})]}),e.jsxs(w,{children:[e.jsx(l,{children:"Teir 3 Rebate"}),e.jsxs(l,{children:[a.tier3,"%"]}),e.jsx(l,{children:a.target3})]}),e.jsxs(w,{children:[e.jsx(l,{colSpan:2,children:"Commission Agreemet"}),e.jsx(l,{children:e.jsx("a",{href:a.agreement,target:"_blank",rel:"noopener noreferrer",children:e.jsx(R,{children:"View PDF"})})})]})]})]})})})}const he=[{value:"general",label:"General",icon:e.jsx(x,{icon:"solar:user-id-bold",width:24})},{value:"billing",label:"Contact",icon:e.jsx(x,{icon:"solar:bill-list-bold",width:24})},{value:"financials",label:"Financials",icon:e.jsx(x,{icon:"solar:bill-list-bold",width:24})},{value:"commission",label:"Commission",icon:e.jsx(x,{icon:"solar:bill-list-bold",width:24})},{value:"security",label:"Security",icon:e.jsx(x,{icon:"ic:round-vpn-key",width:24})}];function ge(){X();const[i,t]=h.useState("general"),a=h.useCallback((r,c)=>{t(c)},[]);return e.jsxs(S,{px:5,children:[e.jsx(Y,{heading:"Account",links:[{name:"Dashboard",href:L.dashboard.root},{name:"User",href:L.dashboard.user.root},{name:"Account"}],sx:{mb:{xs:3,md:5}}}),e.jsx(Z,{value:i,onChange:a,sx:{mb:{xs:3,md:5}},children:he.map(r=>e.jsx(ee,{label:r.label,icon:r.icon,value:r.value},r.value))}),i==="general"&&e.jsx(ce,{}),i==="billing"&&e.jsx(_,{plans:ae,cards:se,invoices:ne,addressBook:te}),i==="financials"&&e.jsx(ue,{}),i==="social"&&e.jsx(G,{socialLinks:re.socialLinks}),i==="security"&&e.jsx(me,{}),i==="commission"&&e.jsx(xe,{})]})}function pe(){return e.jsxs(e.Fragment,{children:[e.jsx(ie,{children:e.jsx("title",{children:" Dashboard: Account Settings"})}),e.jsx(ge,{})]})}export{pe as default};
