import{cf as ie,F as y,j as e,bH as le,B as h,d3 as ce,bf as C,d4 as V,aS as i,aP as A,aL as t,bF as _,bM as W,b8 as k,bE as L,bb as de,b$ as pe,bd as b,bN as G,S as d,cj as xe,ck as he,cl as me,cm as je,be as J,bz as $,b7 as Q,b6 as K,aD as O,a$ as T,db as ue,aH as I,dc as B,b3 as Y,T as F,bc as E,aT as P,cn as N,dd as U,de as ye,c$ as be,aW as D,aX as ge,d5 as fe}from"./index-274325b3.js";import{C as we}from"./confirm-dialog-5fda9aa7.js";import{c as ve,a as w,b as Ce,F as ke,i as Te,R as v,k as Fe}from"./form-provider-a11e6a59.js";import{L as Se,o as Ie}from"./yup-763216e5.js";import{D as Pe,a as Re}from"./DialogTitle-9e1fb032.js";import{D as Ae}from"./DialogContent-ce2541a6.js";import{A as Le}from"./Alert-3959888a.js";import{T as qe,a as S}from"./table-pagination-custom-9c97fb48.js";import{C as H}from"./Checkbox-b4501a6a.js";import{c as q,a as X}from"./format-number-47ae91b5.js";import{I as M}from"./image-16a7a60c.js";import{F as De}from"./Switch-1709466b.js";import{A as Ee}from"./AvatarGroup-a222f54a.js";import{F as Z}from"./Fab-0b227a85.js";import{u as Ne,L as ze}from"./lightbox-faed1940.js";function ee({currentUser:o,open:s,onClose:r}){const{enqueueSnackbar:n}=ie(),a=ve().shape({name:w().required("Name is required"),email:w().required("Email is required").email("Email must be a valid email address"),phoneNumber:w().required("Phone number is required"),address:w().required("Address is required"),country:w().required("Country is required"),company:w().required("Company is required"),state:w().required("State is required"),city:w().required("City is required"),role:w().required("Role is required")}),l=y.useMemo(()=>({name:(o==null?void 0:o.name)||"",email:(o==null?void 0:o.email)||"",phoneNumber:(o==null?void 0:o.phoneNumber)||"",address:(o==null?void 0:o.address)||"",country:(o==null?void 0:o.country)||"",state:(o==null?void 0:o.state)||"",city:(o==null?void 0:o.city)||"",zipCode:(o==null?void 0:o.zipCode)||"",status:o==null?void 0:o.status,company:(o==null?void 0:o.company)||"",role:(o==null?void 0:o.role)||""}),[o]),c=Ce({resolver:Ie(a),defaultValues:l}),{reset:x,handleSubmit:m,formState:{isSubmitting:j}}=c,R=m(async u=>{try{await new Promise(g=>setTimeout(g,500)),x(),r(),n("Update success!"),console.info("DATA",u)}catch(g){console.error(g)}});return e.jsx(le,{fullWidth:!0,maxWidth:!1,open:s,onClose:r,PaperProps:{sx:{maxWidth:720}},children:e.jsxs(ke,{methods:c,onSubmit:R,children:[e.jsx(Pe,{children:"Quick Update"}),e.jsxs(Ae,{children:[e.jsx(Le,{variant:"outlined",severity:"info",sx:{mb:3},children:"Account is waiting for confirmation"}),e.jsxs(h,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(Te,{name:"status",label:"Status",children:ce.map(u=>e.jsx(C,{value:u.value,children:u.label},u.value))}),e.jsx(h,{sx:{display:{xs:"none",sm:"block"}}}),e.jsx(v,{name:"name",label:"Full Name"}),e.jsx(v,{name:"email",label:"Email Address"}),e.jsx(v,{name:"phoneNumber",label:"Phone Number"}),e.jsx(Fe,{name:"country",label:"Country",options:V.map(u=>u.label),getOptionLabel:u=>u,renderOption:(u,g)=>{const{code:p,label:f,phone:ae}=V.filter(te=>te.label===g)[0];return f?y.createElement("li",{...u,key:f},e.jsx(i,{icon:`circle-flags:${p.toLowerCase()}`,width:28,sx:{mr:1}},f),f," (",p,") +",ae):null}}),e.jsx(v,{name:"state",label:"State/Region"}),e.jsx(v,{name:"city",label:"City"}),e.jsx(v,{name:"address",label:"Address"}),e.jsx(v,{name:"zipCode",label:"Zip/Code"}),e.jsx(v,{name:"company",label:"Company"}),e.jsx(v,{name:"role",label:"Role"})]})]}),e.jsxs(Re,{children:[e.jsx(A,{variant:"outlined",onClick:r,children:"Cancel"}),e.jsx(Se,{type:"submit",variant:"contained",loading:j,children:"Update"})]})]})})}ee.propTypes={currentUser:t.object,onClose:t.func,open:t.bool};function We({row:o,selected:s,onEditRow:r,onSelectRow:n,onDeleteRow:a}){const{name:l,avatarUrl:c,company:x,role:m,status:j,email:R,phoneNumber:u}=o,g=_(),p=_(),f=W();return e.jsxs(e.Fragment,{children:[e.jsxs(qe,{hover:!0,selected:s,children:[e.jsx(S,{padding:"checkbox",children:e.jsx(H,{checked:s,onClick:n})}),e.jsxs(S,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(k,{alt:l,src:c,sx:{mr:2}}),e.jsx(L,{primary:l,secondary:R,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),e.jsx(S,{sx:{whiteSpace:"nowrap"},children:u}),e.jsx(S,{sx:{whiteSpace:"nowrap"},children:x}),e.jsx(S,{sx:{whiteSpace:"nowrap"},children:m}),e.jsx(S,{children:e.jsx(de,{variant:"soft",color:j==="active"&&"success"||j==="pending"&&"warning"||j==="banned"&&"error"||"default",children:j})}),e.jsxs(S,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(pe,{title:"Quick Edit",placement:"top",arrow:!0,children:e.jsx(b,{color:p.value?"inherit":"default",onClick:p.onTrue,children:e.jsx(i,{icon:"solar:pen-bold"})})}),e.jsx(b,{color:f.open?"inherit":"default",onClick:f.onOpen,children:e.jsx(i,{icon:"eva:more-vertical-fill"})})]})]}),e.jsx(ee,{currentUser:o,open:p.value,onClose:p.onFalse}),e.jsxs(G,{open:f.open,onClose:f.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(C,{onClick:()=>{g.onTrue(),f.onClose()},sx:{color:"error.main"},children:[e.jsx(i,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(C,{onClick:()=>{r(),f.onClose()},children:[e.jsx(i,{icon:"solar:pen-bold"}),"Edit"]})]}),e.jsx(we,{open:g.value,onClose:g.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(A,{variant:"contained",color:"error",onClick:a,children:"Delete"})})]})}We.propTypes={onDeleteRow:t.func,onEditRow:t.func,onSelectRow:t.func,row:t.object,selected:t.bool};function Ge({filters:o,onFilters:s,roleOptions:r}){const n=W(),a=y.useCallback(c=>{s("name",c.target.value)},[s]),l=y.useCallback(c=>{s("role",typeof c.target.value=="string"?c.target.value.split(","):c.target.value)},[s]);return e.jsxs(e.Fragment,{children:[e.jsxs(d,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsxs(xe,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(he,{children:"Role"}),e.jsx(me,{multiple:!0,value:o.role,onChange:l,input:e.jsx(je,{label:"Role"}),renderValue:c=>c.map(x=>x).join(", "),MenuProps:{PaperProps:{sx:{maxHeight:240}}},children:r.map(c=>e.jsxs(C,{value:c,children:[e.jsx(H,{disableRipple:!0,size:"small",checked:o.role.includes(c)}),c]},c))})]}),e.jsxs(d,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(J,{fullWidth:!0,value:o.name,onChange:a,placeholder:"Search...",InputProps:{startAdornment:e.jsx($,{position:"start",children:e.jsx(i,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(b,{onClick:n.onOpen,children:e.jsx(i,{icon:"eva:more-vertical-fill"})})]})]}),e.jsxs(G,{open:n.open,onClose:n.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(C,{onClick:()=>{n.onClose()},children:[e.jsx(i,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(C,{onClick:()=>{n.onClose()},children:[e.jsx(i,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(C,{onClick:()=>{n.onClose()},children:[e.jsx(i,{icon:"solar:export-bold"}),"Export"]})]})]})}Ge.propTypes={filters:t.object,onFilters:t.func,roleOptions:t.array};function $e({filters:o,onFilters:s,onResetFilters:r,results:n,...a}){const l=()=>{s("status","all")},c=x=>{const m=o.role.filter(j=>j!==x);s("role",m)};return e.jsxs(d,{spacing:1.5,...a,children:[e.jsxs(h,{sx:{typography:"body2"},children:[e.jsx("strong",{children:n}),e.jsx(h,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(d,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[o.status!=="all"&&e.jsx(z,{label:"Status:",children:e.jsx(Q,{size:"small",label:o.status,onDelete:l})}),!!o.role.length&&e.jsx(z,{label:"Role:",children:o.role.map(x=>e.jsx(Q,{label:x,size:"small",onDelete:()=>c(x)},x))}),e.jsx(A,{color:"error",onClick:r,startIcon:e.jsx(i,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}$e.propTypes={filters:t.object,onFilters:t.func,onResetFilters:t.func,results:t.number};function z({label:o,children:s,sx:r,...n}){return e.jsxs(d,{component:K,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...r},...n,children:[e.jsx(h,{component:"span",sx:{typography:"subtitle2"},children:o}),e.jsx(d,{spacing:1,direction:"row",flexWrap:"wrap",children:s})]})}z.propTypes={children:t.node,label:t.string,sx:t.object};function oe({user:o}){const s=O(),{name:r,coverUrl:n,role:a,totalFollowers:l,totalPosts:c,avatarUrl:x,totalFollowing:m}=o;return e.jsxs(T,{sx:{textAlign:"center"},children:[e.jsxs(h,{sx:{position:"relative"},children:[e.jsx(ue,{sx:{left:0,right:0,zIndex:10,mx:"auto",bottom:-26,position:"absolute"}}),e.jsx(k,{alt:r,src:x,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),e.jsx(M,{src:n,alt:n,ratio:"16/9",overlay:I(s.palette.grey[900],.48)})]}),e.jsx(L,{sx:{mt:7,mb:1},primary:r,secondary:a,primaryTypographyProps:{typography:"subtitle1"},secondaryTypographyProps:{component:"span",mt:.5}}),e.jsx(d,{direction:"row",alignItems:"center",justifyContent:"center",sx:{mb:2.5},children:B.map(j=>e.jsx(b,{sx:{color:j.color,"&:hover":{bgcolor:I(j.color,.08)}},children:e.jsx(i,{icon:j.icon})},j.name))}),e.jsx(Y,{sx:{borderStyle:"dashed"}}),e.jsxs(h,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",sx:{py:3,typography:"subtitle1"},children:[e.jsxs("div",{children:[e.jsx(F,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Follower"}),q(l)]}),e.jsxs("div",{children:[e.jsx(F,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Following"}),q(m)]}),e.jsxs("div",{children:[e.jsx(F,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Total Post"}),q(c)]})]})]})}oe.propTypes={user:t.object};function Oe({users:o}){return e.jsx(h,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:o.map(s=>e.jsx(oe,{user:s},s.id))})}Oe.propTypes={users:t.array};function se({post:o}){const{user:s}=be(),r=y.useRef(null),n=y.useRef(null),[a,l]=y.useState(""),c=y.useCallback(p=>{l(p.target.value)},[]),x=y.useCallback(()=>{n.current&&n.current.click()},[]),m=y.useCallback(()=>{r.current&&r.current.focus()},[]),j=e.jsx(E,{disableTypography:!0,avatar:e.jsx(k,{src:s==null?void 0:s.photoURL,alt:s==null?void 0:s.displayName}),title:e.jsx(P,{color:"inherit",variant:"subtitle1",children:s==null?void 0:s.displayName}),subheader:e.jsx(h,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:N(o.createdAt)}),action:e.jsx(b,{children:e.jsx(i,{icon:"eva:more-vertical-fill"})})}),R=e.jsx(d,{spacing:1.5,sx:{px:3,pb:2},children:o.comments.map(p=>e.jsxs(d,{direction:"row",spacing:2,children:[e.jsx(k,{alt:p.author.name,src:p.author.avatarUrl}),e.jsxs(K,{sx:{p:1.5,flexGrow:1,bgcolor:"background.neutral"},children:[e.jsxs(d,{sx:{mb:.5},alignItems:{sm:"center"},justifyContent:"space-between",direction:{xs:"column",sm:"row"},children:[e.jsx(h,{sx:{typography:"subtitle2"},children:p.author.name}),e.jsx(h,{sx:{typography:"caption",color:"text.disabled"},children:N(p.createdAt)})]}),e.jsx(h,{sx:{typography:"body2",color:"text.secondary"},children:p.message})]})]},p.id))}),u=e.jsxs(d,{spacing:2,direction:"row",alignItems:"center",sx:{p:p=>p.spacing(0,3,3,3)},children:[e.jsx(k,{src:s==null?void 0:s.photoURL,alt:s==null?void 0:s.displayName}),e.jsx(U,{fullWidth:!0,value:a,inputRef:r,placeholder:"Write a comment…",onChange:c,endAdornment:e.jsxs($,{position:"end",sx:{mr:1},children:[e.jsx(b,{size:"small",onClick:x,children:e.jsx(i,{icon:"solar:gallery-add-bold"})}),e.jsx(b,{size:"small",children:e.jsx(i,{icon:"eva:smiling-face-fill"})})]}),sx:{pl:1.5,height:40,borderRadius:1,border:p=>`solid 1px ${I(p.palette.grey[500],.32)}`}}),e.jsx("input",{type:"file",ref:n,style:{display:"none"}})]}),g=e.jsxs(d,{direction:"row",alignItems:"center",sx:{p:p=>p.spacing(2,3,3,3)},children:[e.jsx(De,{control:e.jsx(H,{defaultChecked:!0,color:"error",icon:e.jsx(i,{icon:"solar:heart-bold"}),checkedIcon:e.jsx(i,{icon:"solar:heart-bold"})}),label:q(o.personLikes.length),sx:{mr:1}}),!!o.personLikes.length&&e.jsx(Ee,{sx:{[`& .${ye.avatar}`]:{width:32,height:32}},children:o.personLikes.map(p=>e.jsx(k,{alt:p.name,src:p.avatarUrl},p.name))}),e.jsx(h,{sx:{flexGrow:1}}),e.jsx(b,{onClick:m,children:e.jsx(i,{icon:"solar:chat-round-dots-bold"})}),e.jsx(b,{children:e.jsx(i,{icon:"solar:share-bold"})})]});return e.jsxs(T,{children:[j,e.jsx(F,{variant:"body2",sx:{p:p=>p.spacing(3,3,2,3)},children:o.message}),e.jsx(h,{sx:{p:1},children:e.jsx(M,{alt:o.media,src:o.media,ratio:"16/9",sx:{borderRadius:1.5}})}),g,!!o.comments.length&&R,u]})}se.propTypes={post:t.object};function Be({info:o,posts:s}){const r=y.useRef(null),n=()=>{r.current&&r.current.click()},a=e.jsx(T,{sx:{py:3,textAlign:"center",typography:"h4"},children:e.jsxs(d,{direction:"row",divider:e.jsx(Y,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),children:[e.jsxs(d,{width:1,children:[X(o.totalFollowers),e.jsx(h,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Follower"})]}),e.jsxs(d,{width:1,children:[X(o.totalFollowing),e.jsx(h,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Following"})]})]})}),l=e.jsxs(T,{children:[e.jsx(E,{title:"About"}),e.jsxs(d,{spacing:2,sx:{p:3},children:[e.jsx(h,{sx:{typography:"body2"},children:o.quote}),e.jsxs(d,{direction:"row",spacing:2,children:[e.jsx(i,{icon:"mingcute:location-fill",width:24}),e.jsxs(h,{sx:{typography:"body2"},children:["Live at ",e.jsx(P,{variant:"subtitle2",color:"inherit",children:o.country})]})]}),e.jsxs(d,{direction:"row",sx:{typography:"body2"},children:[e.jsx(i,{icon:"fluent:mail-24-filled",width:24,sx:{mr:2}}),o.email]}),e.jsxs(d,{direction:"row",spacing:2,children:[e.jsx(i,{icon:"ic:round-business-center",width:24}),e.jsxs(h,{sx:{typography:"body2"},children:[o.role," ","at ",e.jsx(P,{variant:"subtitle2",color:"inherit",children:o.company})]})]}),e.jsxs(d,{direction:"row",spacing:2,children:[e.jsx(i,{icon:"ic:round-business-center",width:24}),e.jsxs(h,{sx:{typography:"body2"},children:["Studied at ",e.jsx(P,{variant:"subtitle2",color:"inherit",children:o.school})]})]})]})]}),c=e.jsxs(T,{sx:{p:3},children:[e.jsx(U,{multiline:!0,fullWidth:!0,rows:4,placeholder:"Share what you are thinking here...",sx:{p:2,mb:3,borderRadius:1,border:m=>`solid 1px ${I(m.palette.grey[500],.2)}`}}),e.jsxs(d,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsxs(d,{direction:"row",spacing:1,alignItems:"center",sx:{color:"text.secondary"},children:[e.jsxs(Z,{size:"small",color:"inherit",variant:"softExtended",onClick:n,children:[e.jsx(i,{icon:"solar:gallery-wide-bold",width:24,sx:{color:"success.main"}}),"Image/Video"]}),e.jsxs(Z,{size:"small",color:"inherit",variant:"softExtended",children:[e.jsx(i,{icon:"solar:videocamera-record-bold",width:24,sx:{color:"error.main"}}),"Streaming"]})]}),e.jsx(A,{variant:"contained",children:"Post"})]}),e.jsx("input",{ref:r,type:"file",style:{display:"none"}})]}),x=e.jsxs(T,{children:[e.jsx(E,{title:"Social"}),e.jsx(d,{spacing:2,sx:{p:3},children:B.map(m=>e.jsxs(d,{spacing:2,direction:"row",sx:{wordBreak:"break-all",typography:"body2"},children:[e.jsx(i,{icon:m.icon,width:24,sx:{flexShrink:0,color:m.color}}),e.jsxs(P,{color:"inherit",children:[m.value==="facebook"&&o.socialLinks.facebook,m.value==="instagram"&&o.socialLinks.instagram,m.value==="linkedin"&&o.socialLinks.linkedin,m.value==="twitter"&&o.socialLinks.twitter]})]},m.name))})]});return e.jsxs(D,{container:!0,spacing:3,children:[e.jsx(D,{xs:12,md:4,children:e.jsxs(d,{spacing:3,children:[a,l,x]})}),e.jsx(D,{xs:12,md:8,children:e.jsxs(d,{spacing:3,children:[c,s.map(m=>e.jsx(se,{post:m},m.id))]})})]})}Be.propTypes={info:t.object,posts:t.array};function He({name:o,avatarUrl:s,role:r,coverUrl:n}){const a=O();return e.jsx(h,{sx:{...ge({color:I(a.palette.primary.darker,.8),imgUrl:n}),height:1,color:"common.white"},children:e.jsxs(d,{direction:{xs:"column",md:"row"},sx:{left:{md:24},bottom:{md:24},zIndex:{md:10},pt:{xs:6,md:0},position:{md:"absolute"}},children:[e.jsx(k,{src:s,alt:o,sx:{mx:"auto",width:{xs:64,md:128},height:{xs:64,md:128},border:`solid 2px ${a.palette.common.white}`}}),e.jsx(L,{sx:{mt:3,ml:{md:3},textAlign:{xs:"center",md:"unset"}},primary:o,secondary:r,primaryTypographyProps:{typography:"h4"},secondaryTypographyProps:{mt:.5,color:"inherit",component:"span",typography:"body2",sx:{opacity:.48}}})]})})}He.propTypes={avatarUrl:t.string,coverUrl:t.string,name:t.string,role:t.string};function Me({friends:o,searchFriends:s,onSearchFriends:r}){const n=Ve({inputData:o,query:s}),a=!n.length&&!!s;return e.jsxs(e.Fragment,{children:[e.jsxs(d,{spacing:2,justifyContent:"space-between",direction:{xs:"column",sm:"row"},sx:{my:5},children:[e.jsx(F,{variant:"h4",children:"Friends"}),e.jsx(J,{value:s,onChange:r,placeholder:"Search friends...",InputProps:{startAdornment:e.jsx($,{position:"start",children:e.jsx(i,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{width:{xs:1,sm:260}}})]}),a?e.jsx(fe,{query:s,sx:{mt:10}}):e.jsx(h,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:n.map(l=>e.jsx(re,{friend:l},l.id))})]})}Me.propTypes={friends:t.array,onSearchFriends:t.func,searchFriends:t.string};function re({friend:o}){const{name:s,role:r,avatarUrl:n}=o,a=W(),l=()=>{a.onClose(),console.info("DELETE",s)},c=()=>{a.onClose(),console.info("EDIT",s)};return e.jsxs(e.Fragment,{children:[e.jsxs(T,{sx:{py:5,display:"flex",position:"relative",alignItems:"center",flexDirection:"column"},children:[e.jsx(k,{alt:s,src:n,sx:{width:64,height:64,mb:3}}),e.jsx(P,{variant:"subtitle1",color:"text.primary",children:s}),e.jsx(F,{variant:"body2",sx:{color:"text.secondary",mb:1,mt:.5},children:r}),e.jsx(d,{alignItems:"center",justifyContent:"center",direction:"row",children:B.map(x=>e.jsx(b,{sx:{color:x.color,"&:hover":{bgcolor:I(x.color,.08)}},children:e.jsx(i,{icon:x.icon})},x.name))}),e.jsx(b,{color:a.open?"inherit":"default",onClick:a.onOpen,sx:{top:8,right:8,position:"absolute"},children:e.jsx(i,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(G,{open:a.open,onClose:a.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(C,{onClick:l,sx:{color:"error.main"},children:[e.jsx(i,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(C,{onClick:c,children:[e.jsx(i,{icon:"solar:pen-bold"}),"Edit"]})]})]})}re.propTypes={friend:t.object};function Ve({inputData:o,query:s}){return s?o.filter(r=>r.name.toLowerCase().indexOf(s.toLowerCase())!==-1):o}function _e({gallery:o}){const s=O(),r=o.map(a=>({src:a.imageUrl})),n=Ne(r);return e.jsxs(e.Fragment,{children:[e.jsx(F,{variant:"h4",sx:{my:5},children:"Gallery"}),e.jsx(h,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:o.map(a=>e.jsxs(T,{sx:{cursor:"pointer",color:"common.white"},children:[e.jsx(b,{color:"inherit",sx:{position:"absolute",top:8,right:8,zIndex:9},children:e.jsx(i,{icon:"eva:more-vertical-fill"})}),e.jsx(L,{sx:{p:3,left:0,width:1,bottom:0,zIndex:9,position:"absolute"},primary:a.title,secondary:N(a.postedAt),primaryTypographyProps:{noWrap:!0,typography:"subtitle1"},secondaryTypographyProps:{mt:.5,color:"inherit",component:"span",typography:"body2",sx:{opacity:.48}}}),e.jsx(M,{alt:"gallery",ratio:"1/1",src:a.imageUrl,onClick:()=>n.onOpen(a.imageUrl),overlay:`linear-gradient(to bottom, ${I(s.palette.grey[900],0)} 0%, ${s.palette.grey[900]} 75%)`})]},a.id))}),e.jsx(ze,{index:n.selected,slides:r,open:n.open,close:n.onClose})]})}_e.propTypes={gallery:t.array};function Qe({followers:o}){const s=o.slice(4,8).map(l=>l.id),[r,n]=y.useState(s),a=y.useCallback(l=>{const c=r.includes(l)?r.filter(x=>x!==l):[...r,l];n(c)},[r]);return e.jsxs(e.Fragment,{children:[e.jsx(F,{variant:"h4",sx:{my:5},children:"Followers"}),e.jsx(h,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:o.map(l=>e.jsx(ne,{follower:l,selected:r.includes(l.id),onSelected:()=>a(l.id)},l.id))})]})}Qe.propTypes={followers:t.array};function ne({follower:o,selected:s,onSelected:r}){const{name:n,country:a,avatarUrl:l}=o;return e.jsxs(T,{sx:{display:"flex",alignItems:"center",p:c=>c.spacing(3,2,3,3)},children:[e.jsx(k,{alt:n,src:l,sx:{width:48,height:48,mr:2}}),e.jsx(L,{primary:n,secondary:e.jsxs(e.Fragment,{children:[e.jsx(i,{icon:"mingcute:location-fill",width:16,sx:{flexShrink:0,mr:.5}}),a," country country country country country country country country country"]}),primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,noWrap:!0,display:"flex",component:"span",alignItems:"center",typography:"caption",color:"text.disabled"}}),e.jsx(A,{size:"small",variant:s?"text":"outlined",color:s?"success":"inherit",startIcon:s?e.jsx(i,{width:18,icon:"eva:checkmark-fill",sx:{mr:-.75}}):null,onClick:r,sx:{flexShrink:0,ml:1.5},children:s?"Followed":"Follow"})]})}ne.propTypes={follower:t.object,onSelected:t.func,selected:t.bool};export{He as P,Oe as U,Be as a,Qe as b,Me as c,_e as d,Ge as e,$e as f,We as g};
