import{aN as u,D as a,af as e,aB as x,ay as t,aI as b,cW as i,aK as j,cX as g,aL as v,cY as C,cZ as w,c_ as y,c$ as F,az as l,d0 as P,aZ as U}from"./index-8366dc58.js";import{C as S}from"./custom-breadcrumbs-085075b3.js";import"./user-new-edit-form-fbda90b8.js";import"./confirm-dialog-c336a038.js";import"./table-pagination-custom-02dc7bf6.js";import{P as T,a as _,b as k,c as B,d as D}from"./profile-followers-e2eca43a.js";import"./form-provider-b0c123ce.js";import"./format-number-fe5bd567.js";import"./image-0711ee88.js";import"./transition-bee6630b.js";import"./Checkbox-d4dbc0be.js";import"./Chip-e8c3629a.js";import"./Switch-1210991b.js";import"./Autocomplete-3b868ecf.js";import"./Close-accefa1e.js";import"./yup-c05b6fcc.js";import"./CircularProgress-8f2042fe.js";import"./DialogTitle-a698caa0.js";import"./DialogContent-9396abe0.js";import"./Alert-08c2d36c.js";import"./AvatarGroup-05548aaa.js";import"./Fab-61b5464d.js";import"./lightbox-35016bd6.js";const G=[{value:"profile",label:"Profile",icon:e.jsx(l,{icon:"solar:user-id-bold",width:24})},{value:"followers",label:"Followers",icon:e.jsx(l,{icon:"solar:heart-bold",width:24})},{value:"friends",label:"Friends",icon:e.jsx(l,{icon:"solar:users-group-rounded-bold",width:24})},{value:"gallery",label:"Gallery",icon:e.jsx(l,{icon:"solar:gallery-wide-bold",width:24})}];function I(){const n=u(),{user:r}=P(),[d,c]=a.useState(""),[o,m]=a.useState("profile"),p=a.useCallback((s,h)=>{m(h)},[]),f=a.useCallback(s=>{c(s.target.value)},[]);return e.jsxs(x,{maxWidth:n.themeStretch?!1:"lg",children:[e.jsx(S,{heading:"Profile",links:[{name:"Dashboard",href:t.dashboard.root},{name:"User",href:t.dashboard.user.root},{name:r==null?void 0:r.displayName}],sx:{mb:{xs:3,md:5}}}),e.jsxs(b,{sx:{mb:3,height:290},children:[e.jsx(T,{role:i.role,name:r==null?void 0:r.displayName,avatarUrl:r==null?void 0:r.photoURL,coverUrl:i.coverUrl}),e.jsx(j,{value:o,onChange:p,sx:{width:1,bottom:0,zIndex:9,position:"absolute",bgcolor:"background.paper",[`& .${g.flexContainer}`]:{pr:{md:3},justifyContent:{sm:"center",md:"flex-end"}}},children:G.map(s=>e.jsx(v,{value:s.value,icon:s.icon,label:s.label},s.value))})]}),o==="profile"&&e.jsx(_,{info:i,posts:C}),o==="followers"&&e.jsx(k,{followers:w}),o==="friends"&&e.jsx(B,{friends:y,searchFriends:d,onSearchFriends:f}),o==="gallery"&&e.jsx(D,{gallery:F})]})}function ae(){return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx("title",{children:" Dashboard: User Profile"})}),e.jsx(I,{})]})}export{ae as default};