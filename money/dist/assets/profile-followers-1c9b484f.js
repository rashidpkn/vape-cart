import{cu as ie,bI as le,bJ as w,D as j,bK as ce,bN as de,af as e,bP as pe,bL as xe,cO as he,cP as me,ao as h,cx as ue,dX as je,b4 as C,bV as v,cz as ye,dL as M,aA as c,cQ as ge,ax as R,bM as be,aq as i,bs as H,c0 as W,b0 as G,aW as k,bq as L,cd as fe,b2 as b,c1 as O,au as p,cI as we,cJ as ve,cK as Ce,cL as ke,b3 as K,bz as B,aV as V,aT as Z,as as $,ce as Te,aJ as T,dY as Se,aQ as _,am as A,aN as X,ac as S,c8 as E,c2 as Fe,c3 as Ie,c4 as Pe,b1 as N,aB as P,cM as D,cD as Y,a_ as Re,dZ as Ae,dF as Le,b_ as Q,d_ as U,aE as q,aF as qe,d$ as Ee}from"./index-bb505ec4.js";import{C as Ne}from"./confirm-dialog-45f1a66e.js";import{A as De}from"./Alert-e62445d0.js";import{T as ze,a as F}from"./table-pagination-custom-4c8c08f8.js";import{a as We}from"./api-3aac980b.js";import{A as Ge}from"./AvatarGroup-339572af.js";import{F as J}from"./Fab-ae298e8c.js";import{u as Oe,L as Be}from"./lightbox-3b1c01aa.js";function ee({currentUser:s,open:o,onClose:r}){const{enqueueSnackbar:a}=ie(),n=le().shape({name:w().required("Name is required"),email:w().required("Email is required").email("Email must be a valid email address"),phoneNumber:w().required("Phone number is required"),address:w().required("Address is required"),country:w().required("Country is required"),company:w().required("Company is required"),state:w().required("State is required"),city:w().required("City is required"),role:w().required("Role is required")}),t=j.useMemo(()=>({name:(s==null?void 0:s.name)||"",email:(s==null?void 0:s.email)||"",phoneNumber:(s==null?void 0:s.phoneNumber)||"",address:(s==null?void 0:s.address)||"",country:(s==null?void 0:s.country)||"",state:(s==null?void 0:s.state)||"",city:(s==null?void 0:s.city)||"",zipCode:(s==null?void 0:s.zipCode)||"",status:s==null?void 0:s.status,company:(s==null?void 0:s.company)||"",role:(s==null?void 0:s.role)||""}),[s]),l=ce({resolver:de(n),defaultValues:t}),{reset:x,handleSubmit:m,formState:{isSubmitting:f}}=l,I=m(async u=>{try{await new Promise(y=>setTimeout(y,500)),x(),r(),a("Update success!"),console.info("DATA",u)}catch(y){console.error(y)}});return e.jsx(pe,{fullWidth:!0,maxWidth:!1,open:o,onClose:r,PaperProps:{sx:{maxWidth:720}},children:e.jsxs(xe,{methods:l,onSubmit:I,children:[e.jsx(he,{children:"Quick Update"}),e.jsxs(me,{children:[e.jsx(De,{variant:"outlined",severity:"info",sx:{mb:3},children:"Account is waiting for confirmation"}),e.jsxs(h,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(ue,{name:"status",label:"Status",children:je.map(u=>e.jsx(C,{value:u.value,children:u.label},u.value))}),e.jsx(h,{sx:{display:{xs:"none",sm:"block"}}}),e.jsx(v,{name:"name",label:"Full Name"}),e.jsx(v,{name:"email",label:"Email Address"}),e.jsx(v,{name:"phoneNumber",label:"Phone Number"}),e.jsx(ye,{name:"country",label:"Country",options:M.map(u=>u.label),getOptionLabel:u=>u,renderOption:(u,y)=>{const{code:d,label:g,phone:ne}=M.filter(te=>te.label===y)[0];return g?j.createElement("li",{...u,key:g},e.jsx(c,{icon:`circle-flags:${d.toLowerCase()}`,width:28,sx:{mr:1}},g),g," (",d,") +",ne):null}}),e.jsx(v,{name:"state",label:"State/Region"}),e.jsx(v,{name:"city",label:"City"}),e.jsx(v,{name:"address",label:"Address"}),e.jsx(v,{name:"zipCode",label:"Zip/Code"}),e.jsx(v,{name:"company",label:"Company"}),e.jsx(v,{name:"role",label:"Role"})]})]}),e.jsxs(ge,{children:[e.jsx(R,{variant:"outlined",onClick:r,children:"Cancel"}),e.jsx(be,{type:"submit",variant:"contained",loading:f,children:"Update"})]})]})})}ee.propTypes={currentUser:i.object,onClose:i.func,open:i.bool};function $e({row:s,selected:o,onEditRow:r,onSelectRow:a,onDeleteRow:n}){const{displayName:t,avatarUrl:l,storeName:x,tradeLicense:m,contactPersonInTouch:f,email:I,phoneNumber:u}=s,y=H(),d=H(),g=W();return e.jsxs(e.Fragment,{children:[e.jsxs(ze,{hover:!0,selected:o,children:[e.jsx(F,{padding:"checkbox",children:e.jsx(G,{checked:o,onClick:a})}),e.jsxs(F,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(k,{alt:t,src:l,sx:{mr:2}}),e.jsx(L,{primary:t,secondary:I,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),e.jsx(F,{sx:{whiteSpace:"nowrap"},children:u}),e.jsx(F,{sx:{whiteSpace:"nowrap"},children:x}),e.jsx(F,{sx:{whiteSpace:"nowrap"},children:e.jsx("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:e.jsx(R,{children:"View Trade Licence"})})}),e.jsx(F,{children:f}),e.jsxs(F,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(fe,{title:"Quick Edit",placement:"top",arrow:!0,children:e.jsx(b,{color:d.value?"inherit":"default",onClick:d.onTrue,children:e.jsx(c,{icon:"solar:pen-bold"})})}),e.jsx(b,{color:g.open?"inherit":"default",onClick:g.onOpen,children:e.jsx(c,{icon:"eva:more-vertical-fill"})})]})]}),e.jsx(ee,{currentUser:s,open:d.value,onClose:d.onFalse}),e.jsxs(O,{open:g.open,onClose:g.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(C,{onClick:()=>{y.onTrue(),g.onClose()},sx:{color:"error.main"},children:[e.jsx(c,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(C,{onClick:()=>{r(),g.onClose()},children:[e.jsx(c,{icon:"solar:pen-bold"}),"Edit"]})]}),e.jsx(Ne,{open:y.value,onClose:y.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(R,{variant:"contained",color:"error",onClick:n,children:"Delete"})})]})}$e.propTypes={onDeleteRow:i.func,onEditRow:i.func,onSelectRow:i.func,row:i.object,selected:i.bool};function _e({filters:s,onFilters:o,roleOptions:r}){const a=W(),n=j.useCallback(l=>{o("name",l.target.value)},[o]),t=j.useCallback(l=>{o("role",typeof l.target.value=="string"?l.target.value.split(","):l.target.value)},[o]);return e.jsxs(e.Fragment,{children:[e.jsxs(p,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsxs(we,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(ve,{children:"Role"}),e.jsx(Ce,{multiple:!0,value:s.role,onChange:t,input:e.jsx(ke,{label:"Role"}),renderValue:l=>l.map(x=>x).join(", "),MenuProps:{PaperProps:{sx:{maxHeight:240}}},children:r.map(l=>e.jsxs(C,{value:l,children:[e.jsx(G,{disableRipple:!0,size:"small",checked:s.role.includes(l)}),l]},l))})]}),e.jsxs(p,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(K,{fullWidth:!0,value:s.name,onChange:n,placeholder:"Search...",InputProps:{startAdornment:e.jsx(B,{position:"start",children:e.jsx(c,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(b,{onClick:a.onOpen,children:e.jsx(c,{icon:"eva:more-vertical-fill"})})]})]}),e.jsxs(O,{open:a.open,onClose:a.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(C,{onClick:()=>{a.onClose()},children:[e.jsx(c,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(C,{onClick:()=>{a.onClose()},children:[e.jsx(c,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(C,{onClick:()=>{a.onClose()},children:[e.jsx(c,{icon:"solar:export-bold"}),"Export"]})]})]})}_e.propTypes={filters:i.object,onFilters:i.func,roleOptions:i.array};function Me({filters:s,onFilters:o,onResetFilters:r,results:a,...n}){const t=()=>{o("status","all")},l=x=>{const m=s.role.filter(f=>f!==x);o("role",m)};return e.jsxs(p,{spacing:1.5,...n,children:[e.jsxs(h,{sx:{typography:"body2"},children:[e.jsx("strong",{children:a}),e.jsx(h,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(p,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[s.status!=="all"&&e.jsx(z,{label:"Status:",children:e.jsx(V,{size:"small",label:s.status,onDelete:t})}),!!s.role.length&&e.jsx(z,{label:"Role:",children:s.role.map(x=>e.jsx(V,{label:x,size:"small",onDelete:()=>l(x)},x))}),e.jsx(R,{color:"error",onClick:r,startIcon:e.jsx(c,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}Me.propTypes={filters:i.object,onFilters:i.func,onResetFilters:i.func,results:i.number};function z({label:s,children:o,sx:r,...a}){return e.jsxs(p,{component:Z,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...r},...a,children:[e.jsx(h,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(p,{spacing:1,direction:"row",flexWrap:"wrap",children:o})]})}z.propTypes={children:i.node,label:i.string,sx:i.object};function se({user:s,products:o}){const r=$(),a=Te(),{storeName:n,coverUrl:t,displayName:l,totalFollowers:x,totalPosts:m,avatarUrl:f,totalFollowing:I}=s;return e.jsxs(T,{sx:{textAlign:"center"},onClick:()=>{a(`/dashboard/store/${s.uid}/edit`)},children:[e.jsxs(h,{sx:{position:"relative"},children:[e.jsx(Se,{sx:{left:0,right:0,zIndex:10,mx:"auto",bottom:-26,position:"absolute"}}),e.jsx(k,{alt:n,src:f,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),e.jsx(_,{src:t,alt:t,ratio:"16/9",overlay:A(r.palette.grey[900],.48)})]}),e.jsx(L,{sx:{mt:7,mb:1},primary:n,secondary:l,primaryTypographyProps:{typography:"subtitle1"},secondaryTypographyProps:{component:"span",mt:.5}}),e.jsx(X,{sx:{borderStyle:"dashed"}}),e.jsxs(h,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",sx:{py:3,typography:"subtitle1"},children:[e.jsxs("div",{children:[e.jsx(S,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Traffic"}),E(x)]}),e.jsxs("div",{children:[e.jsx(S,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Product"}),o.filter(u=>u.userId===s.uid).length]}),e.jsxs("div",{children:[e.jsx(S,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Revenue"}),E(m)]})]})]})}se.propTypes={user:i.object};function He(){const[s,o]=j.useState([]),[r,a]=j.useState([]),n=async()=>{const t=await Fe(Ie(Pe,"users")),l=[];t.forEach(x=>{l.push(x.data())}),console.log(l),a(l)};return j.useEffect(()=>{We.get("/products").then(t=>{o(t.data.products)}),n()},[]),e.jsx(h,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:r==null?void 0:r.map(t=>e.jsx(se,{user:t,products:s},t.uid))})}He.propTypes={users:i.array};function oe({post:s}){const{user:o}=Le(),r=j.useRef(null),a=j.useRef(null),[n,t]=j.useState(""),l=j.useCallback(d=>{t(d.target.value)},[]),x=j.useCallback(()=>{a.current&&a.current.click()},[]),m=j.useCallback(()=>{r.current&&r.current.focus()},[]),f=e.jsx(N,{disableTypography:!0,avatar:e.jsx(k,{src:o==null?void 0:o.photoURL,alt:o==null?void 0:o.displayName}),title:e.jsx(P,{color:"inherit",variant:"subtitle1",children:o==null?void 0:o.displayName}),subheader:e.jsx(h,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:D(s.createdAt)}),action:e.jsx(b,{children:e.jsx(c,{icon:"eva:more-vertical-fill"})})}),I=e.jsx(p,{spacing:1.5,sx:{px:3,pb:2},children:s.comments.map(d=>e.jsxs(p,{direction:"row",spacing:2,children:[e.jsx(k,{alt:d.author.name,src:d.author.avatarUrl}),e.jsxs(Z,{sx:{p:1.5,flexGrow:1,bgcolor:"background.neutral"},children:[e.jsxs(p,{sx:{mb:.5},alignItems:{sm:"center"},justifyContent:"space-between",direction:{xs:"column",sm:"row"},children:[e.jsx(h,{sx:{typography:"subtitle2"},children:d.author.name}),e.jsx(h,{sx:{typography:"caption",color:"text.disabled"},children:D(d.createdAt)})]}),e.jsx(h,{sx:{typography:"body2",color:"text.secondary"},children:d.message})]})]},d.id))}),u=e.jsxs(p,{spacing:2,direction:"row",alignItems:"center",sx:{p:d=>d.spacing(0,3,3,3)},children:[e.jsx(k,{src:o==null?void 0:o.photoURL,alt:o==null?void 0:o.displayName}),e.jsx(Y,{fullWidth:!0,value:n,inputRef:r,placeholder:"Write a comment…",onChange:l,endAdornment:e.jsxs(B,{position:"end",sx:{mr:1},children:[e.jsx(b,{size:"small",onClick:x,children:e.jsx(c,{icon:"solar:gallery-add-bold"})}),e.jsx(b,{size:"small",children:e.jsx(c,{icon:"eva:smiling-face-fill"})})]}),sx:{pl:1.5,height:40,borderRadius:1,border:d=>`solid 1px ${A(d.palette.grey[500],.32)}`}}),e.jsx("input",{type:"file",ref:a,style:{display:"none"}})]}),y=e.jsxs(p,{direction:"row",alignItems:"center",sx:{p:d=>d.spacing(2,3,3,3)},children:[e.jsx(Re,{control:e.jsx(G,{defaultChecked:!0,color:"error",icon:e.jsx(c,{icon:"solar:heart-bold"}),checkedIcon:e.jsx(c,{icon:"solar:heart-bold"})}),label:E(s.personLikes.length),sx:{mr:1}}),!!s.personLikes.length&&e.jsx(Ge,{sx:{[`& .${Ae.avatar}`]:{width:32,height:32}},children:s.personLikes.map(d=>e.jsx(k,{alt:d.name,src:d.avatarUrl},d.name))}),e.jsx(h,{sx:{flexGrow:1}}),e.jsx(b,{onClick:m,children:e.jsx(c,{icon:"solar:chat-round-dots-bold"})}),e.jsx(b,{children:e.jsx(c,{icon:"solar:share-bold"})})]});return e.jsxs(T,{children:[f,e.jsx(S,{variant:"body2",sx:{p:d=>d.spacing(3,3,2,3)},children:s.message}),e.jsx(h,{sx:{p:1},children:e.jsx(_,{alt:s.media,src:s.media,ratio:"16/9",sx:{borderRadius:1.5}})}),y,!!s.comments.length&&I,u]})}oe.propTypes={post:i.object};function Ve({info:s,posts:o}){const r=j.useRef(null),a=()=>{r.current&&r.current.click()},n=e.jsx(T,{sx:{py:3,textAlign:"center",typography:"h4"},children:e.jsxs(p,{direction:"row",divider:e.jsx(X,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),children:[e.jsxs(p,{width:1,children:[Q(s.totalFollowers),e.jsx(h,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Follower"})]}),e.jsxs(p,{width:1,children:[Q(s.totalFollowing),e.jsx(h,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Following"})]})]})}),t=e.jsxs(T,{children:[e.jsx(N,{title:"About"}),e.jsxs(p,{spacing:2,sx:{p:3},children:[e.jsx(h,{sx:{typography:"body2"},children:s.quote}),e.jsxs(p,{direction:"row",spacing:2,children:[e.jsx(c,{icon:"mingcute:location-fill",width:24}),e.jsxs(h,{sx:{typography:"body2"},children:["Live at ",e.jsx(P,{variant:"subtitle2",color:"inherit",children:s.country})]})]}),e.jsxs(p,{direction:"row",sx:{typography:"body2"},children:[e.jsx(c,{icon:"fluent:mail-24-filled",width:24,sx:{mr:2}}),s.email]}),e.jsxs(p,{direction:"row",spacing:2,children:[e.jsx(c,{icon:"ic:round-business-center",width:24}),e.jsxs(h,{sx:{typography:"body2"},children:[s.role," ","at ",e.jsx(P,{variant:"subtitle2",color:"inherit",children:s.company})]})]}),e.jsxs(p,{direction:"row",spacing:2,children:[e.jsx(c,{icon:"ic:round-business-center",width:24}),e.jsxs(h,{sx:{typography:"body2"},children:["Studied at ",e.jsx(P,{variant:"subtitle2",color:"inherit",children:s.school})]})]})]})]}),l=e.jsxs(T,{sx:{p:3},children:[e.jsx(Y,{multiline:!0,fullWidth:!0,rows:4,placeholder:"Share what you are thinking here...",sx:{p:2,mb:3,borderRadius:1,border:m=>`solid 1px ${A(m.palette.grey[500],.2)}`}}),e.jsxs(p,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsxs(p,{direction:"row",spacing:1,alignItems:"center",sx:{color:"text.secondary"},children:[e.jsxs(J,{size:"small",color:"inherit",variant:"softExtended",onClick:a,children:[e.jsx(c,{icon:"solar:gallery-wide-bold",width:24,sx:{color:"success.main"}}),"Image/Video"]}),e.jsxs(J,{size:"small",color:"inherit",variant:"softExtended",children:[e.jsx(c,{icon:"solar:videocamera-record-bold",width:24,sx:{color:"error.main"}}),"Streaming"]})]}),e.jsx(R,{variant:"contained",children:"Post"})]}),e.jsx("input",{ref:r,type:"file",style:{display:"none"}})]}),x=e.jsxs(T,{children:[e.jsx(N,{title:"Social"}),e.jsx(p,{spacing:2,sx:{p:3},children:U.map(m=>e.jsxs(p,{spacing:2,direction:"row",sx:{wordBreak:"break-all",typography:"body2"},children:[e.jsx(c,{icon:m.icon,width:24,sx:{flexShrink:0,color:m.color}}),e.jsxs(P,{color:"inherit",children:[m.value==="facebook"&&s.socialLinks.facebook,m.value==="instagram"&&s.socialLinks.instagram,m.value==="linkedin"&&s.socialLinks.linkedin,m.value==="twitter"&&s.socialLinks.twitter]})]},m.name))})]});return e.jsxs(q,{container:!0,spacing:3,children:[e.jsx(q,{xs:12,md:4,children:e.jsxs(p,{spacing:3,children:[n,t,x]})}),e.jsx(q,{xs:12,md:8,children:e.jsxs(p,{spacing:3,children:[l,o.map(m=>e.jsx(oe,{post:m},m.id))]})})]})}Ve.propTypes={info:i.object,posts:i.array};function Qe({name:s,avatarUrl:o,role:r,coverUrl:a}){const n=$();return e.jsx(h,{sx:{...qe({color:A(n.palette.primary.darker,.8),imgUrl:a}),height:1,color:"common.white"},children:e.jsxs(p,{direction:{xs:"column",md:"row"},sx:{left:{md:24},bottom:{md:24},zIndex:{md:10},pt:{xs:6,md:0},position:{md:"absolute"}},children:[e.jsx(k,{src:o,alt:s,sx:{mx:"auto",width:{xs:64,md:128},height:{xs:64,md:128},border:`solid 2px ${n.palette.common.white}`}}),e.jsx(L,{sx:{mt:3,ml:{md:3},textAlign:{xs:"center",md:"unset"}},primary:s,secondary:r,primaryTypographyProps:{typography:"h4"},secondaryTypographyProps:{mt:.5,color:"inherit",component:"span",typography:"body2",sx:{opacity:.48}}})]})})}Qe.propTypes={avatarUrl:i.string,coverUrl:i.string,name:i.string,role:i.string};function Je({friends:s,searchFriends:o,onSearchFriends:r}){const a=Ke({inputData:s,query:o}),n=!a.length&&!!o;return e.jsxs(e.Fragment,{children:[e.jsxs(p,{spacing:2,justifyContent:"space-between",direction:{xs:"column",sm:"row"},sx:{my:5},children:[e.jsx(S,{variant:"h4",children:"Friends"}),e.jsx(K,{value:o,onChange:r,placeholder:"Search friends...",InputProps:{startAdornment:e.jsx(B,{position:"start",children:e.jsx(c,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{width:{xs:1,sm:260}}})]}),n?e.jsx(Ee,{query:o,sx:{mt:10}}):e.jsx(h,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:a.map(t=>e.jsx(re,{friend:t},t.id))})]})}Je.propTypes={friends:i.array,onSearchFriends:i.func,searchFriends:i.string};function re({friend:s}){const{name:o,role:r,avatarUrl:a}=s,n=W(),t=()=>{n.onClose(),console.info("DELETE",o)},l=()=>{n.onClose(),console.info("EDIT",o)};return e.jsxs(e.Fragment,{children:[e.jsxs(T,{sx:{py:5,display:"flex",position:"relative",alignItems:"center",flexDirection:"column"},children:[e.jsx(k,{alt:o,src:a,sx:{width:64,height:64,mb:3}}),e.jsx(P,{variant:"subtitle1",color:"text.primary",children:o}),e.jsx(S,{variant:"body2",sx:{color:"text.secondary",mb:1,mt:.5},children:r}),e.jsx(p,{alignItems:"center",justifyContent:"center",direction:"row",children:U.map(x=>e.jsx(b,{sx:{color:x.color,"&:hover":{bgcolor:A(x.color,.08)}},children:e.jsx(c,{icon:x.icon})},x.name))}),e.jsx(b,{color:n.open?"inherit":"default",onClick:n.onOpen,sx:{top:8,right:8,position:"absolute"},children:e.jsx(c,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(O,{open:n.open,onClose:n.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(C,{onClick:t,sx:{color:"error.main"},children:[e.jsx(c,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(C,{onClick:l,children:[e.jsx(c,{icon:"solar:pen-bold"}),"Edit"]})]})]})}re.propTypes={friend:i.object};function Ke({inputData:s,query:o}){return o?s.filter(r=>r.name.toLowerCase().indexOf(o.toLowerCase())!==-1):s}function Ze({gallery:s}){const o=$(),r=s.map(n=>({src:n.imageUrl})),a=Oe(r);return e.jsxs(e.Fragment,{children:[e.jsx(S,{variant:"h4",sx:{my:5},children:"Gallery"}),e.jsx(h,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(n=>e.jsxs(T,{sx:{cursor:"pointer",color:"common.white"},children:[e.jsx(b,{color:"inherit",sx:{position:"absolute",top:8,right:8,zIndex:9},children:e.jsx(c,{icon:"eva:more-vertical-fill"})}),e.jsx(L,{sx:{p:3,left:0,width:1,bottom:0,zIndex:9,position:"absolute"},primary:n.title,secondary:D(n.postedAt),primaryTypographyProps:{noWrap:!0,typography:"subtitle1"},secondaryTypographyProps:{mt:.5,color:"inherit",component:"span",typography:"body2",sx:{opacity:.48}}}),e.jsx(_,{alt:"gallery",ratio:"1/1",src:n.imageUrl,onClick:()=>a.onOpen(n.imageUrl),overlay:`linear-gradient(to bottom, ${A(o.palette.grey[900],0)} 0%, ${o.palette.grey[900]} 75%)`})]},n.id))}),e.jsx(Be,{index:a.selected,slides:r,open:a.open,close:a.onClose})]})}Ze.propTypes={gallery:i.array};function Xe({followers:s}){const o=s.slice(4,8).map(t=>t.id),[r,a]=j.useState(o),n=j.useCallback(t=>{const l=r.includes(t)?r.filter(x=>x!==t):[...r,t];a(l)},[r]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{variant:"h4",sx:{my:5},children:"Followers"}),e.jsx(h,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(t=>e.jsx(ae,{follower:t,selected:r.includes(t.id),onSelected:()=>n(t.id)},t.id))})]})}Xe.propTypes={followers:i.array};function ae({follower:s,selected:o,onSelected:r}){const{name:a,country:n,avatarUrl:t}=s;return e.jsxs(T,{sx:{display:"flex",alignItems:"center",p:l=>l.spacing(3,2,3,3)},children:[e.jsx(k,{alt:a,src:t,sx:{width:48,height:48,mr:2}}),e.jsx(L,{primary:a,secondary:e.jsxs(e.Fragment,{children:[e.jsx(c,{icon:"mingcute:location-fill",width:16,sx:{flexShrink:0,mr:.5}}),n," country country country country country country country country country"]}),primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,noWrap:!0,display:"flex",component:"span",alignItems:"center",typography:"caption",color:"text.disabled"}}),e.jsx(R,{size:"small",variant:o?"text":"outlined",color:o?"success":"inherit",startIcon:o?e.jsx(c,{width:18,icon:"eva:checkmark-fill",sx:{mr:-.75}}):null,onClick:r,sx:{flexShrink:0,ml:1.5},children:o?"Followed":"Follow"})]})}ae.propTypes={follower:i.object,onSelected:i.func,selected:i.bool};export{Qe as P,He as U,Ve as a,Xe as b,Je as c,Ze as d,_e as e,Me as f,$e as g};
