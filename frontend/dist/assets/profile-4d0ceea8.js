import{aN as u,D as a,af as e,aB as x,ay as t,aI as b,cX as i,aK as j,cY as g,aL as v,cZ as C,c_ as w,c$ as y,d0 as F,az as l,d1 as P,aZ as U}from"./index-3adde4c0.js";import{C as S}from"./custom-breadcrumbs-ae8c15c8.js";import"./user-new-edit-form-0cdf446c.js";import"./confirm-dialog-a3d535db.js";import"./table-pagination-custom-8adf02a6.js";import{P as T,a as _,b as k,c as B,d as D}from"./profile-followers-1496a41a.js";import"./form-provider-8f0db5c8.js";import"./format-number-326f4e94.js";import"./image-bb749e0c.js";import"./transition-bee6630b.js";import"./Checkbox-1d27f0b0.js";import"./Chip-7162da89.js";import"./Switch-a0c0f5bb.js";import"./Autocomplete-c57031c7.js";import"./Close-03cf31c2.js";import"./yup-5b2eef19.js";import"./CircularProgress-11b9a1d7.js";import"./DialogTitle-fca3c765.js";import"./DialogContent-a1764ff9.js";import"./Alert-774184b6.js";import"./AvatarGroup-f6603d83.js";import"./Fab-9de6f140.js";import"./lightbox-d2d55692.js";const G=[{value:"profile",label:"Profile",icon:e.jsx(l,{icon:"solar:user-id-bold",width:24})},{value:"followers",label:"Followers",icon:e.jsx(l,{icon:"solar:heart-bold",width:24})},{value:"friends",label:"Friends",icon:e.jsx(l,{icon:"solar:users-group-rounded-bold",width:24})},{value:"gallery",label:"Gallery",icon:e.jsx(l,{icon:"solar:gallery-wide-bold",width:24})}];function I(){const n=u(),{user:r}=P(),[d,c]=a.useState(""),[o,m]=a.useState("profile"),p=a.useCallback((s,h)=>{m(h)},[]),f=a.useCallback(s=>{c(s.target.value)},[]);return e.jsxs(x,{maxWidth:n.themeStretch?!1:"lg",children:[e.jsx(S,{heading:"Profile",links:[{name:"Dashboard",href:t.dashboard.root},{name:"User",href:t.dashboard.user.root},{name:r==null?void 0:r.displayName}],sx:{mb:{xs:3,md:5}}}),e.jsxs(b,{sx:{mb:3,height:290},children:[e.jsx(T,{role:i.role,name:r==null?void 0:r.displayName,avatarUrl:r==null?void 0:r.photoURL,coverUrl:i.coverUrl}),e.jsx(j,{value:o,onChange:p,sx:{width:1,bottom:0,zIndex:9,position:"absolute",bgcolor:"background.paper",[`& .${g.flexContainer}`]:{pr:{md:3},justifyContent:{sm:"center",md:"flex-end"}}},children:G.map(s=>e.jsx(v,{value:s.value,icon:s.icon,label:s.label},s.value))})]}),o==="profile"&&e.jsx(_,{info:i,posts:C}),o==="followers"&&e.jsx(k,{followers:w}),o==="friends"&&e.jsx(B,{friends:y,searchFriends:d,onSearchFriends:f}),o==="gallery"&&e.jsx(D,{gallery:F})]})}function ae(){return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx("title",{children:" Dashboard: User Profile"})}),e.jsx(I,{})]})}export{ae as default};
