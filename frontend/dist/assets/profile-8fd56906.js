import{aN as u,D as a,af as e,aB as x,ay as t,aI as b,cW as i,aK as j,cX as g,aL as v,cY as C,cZ as w,c_ as y,c$ as F,az as l,d0 as P,aZ as U}from"./index-b6990d0c.js";import{C as S}from"./custom-breadcrumbs-78515c0c.js";import"./user-new-edit-form-2bee062d.js";import"./confirm-dialog-6cde114c.js";import"./table-pagination-custom-55fcf396.js";import{P as T,a as _,b as k,c as B,d as D}from"./profile-followers-dde74609.js";import"./form-provider-7df6f027.js";import"./format-number-72303a76.js";import"./image-ebb61063.js";import"./transition-bee6630b.js";import"./Checkbox-5277b66a.js";import"./Chip-33a09df3.js";import"./Switch-604d08bf.js";import"./Autocomplete-2e785a0d.js";import"./Close-b432f479.js";import"./yup-346cade4.js";import"./CircularProgress-d226df1a.js";import"./DialogTitle-65a890c1.js";import"./DialogContent-e22d6a29.js";import"./Alert-0e4a94f9.js";import"./AvatarGroup-9edd8438.js";import"./Fab-1d6ad9d8.js";import"./lightbox-3847ebe1.js";const G=[{value:"profile",label:"Profile",icon:e.jsx(l,{icon:"solar:user-id-bold",width:24})},{value:"followers",label:"Followers",icon:e.jsx(l,{icon:"solar:heart-bold",width:24})},{value:"friends",label:"Friends",icon:e.jsx(l,{icon:"solar:users-group-rounded-bold",width:24})},{value:"gallery",label:"Gallery",icon:e.jsx(l,{icon:"solar:gallery-wide-bold",width:24})}];function I(){const n=u(),{user:r}=P(),[d,c]=a.useState(""),[o,m]=a.useState("profile"),p=a.useCallback((s,h)=>{m(h)},[]),f=a.useCallback(s=>{c(s.target.value)},[]);return e.jsxs(x,{maxWidth:n.themeStretch?!1:"lg",children:[e.jsx(S,{heading:"Profile",links:[{name:"Dashboard",href:t.dashboard.root},{name:"User",href:t.dashboard.user.root},{name:r==null?void 0:r.displayName}],sx:{mb:{xs:3,md:5}}}),e.jsxs(b,{sx:{mb:3,height:290},children:[e.jsx(T,{role:i.role,name:r==null?void 0:r.displayName,avatarUrl:r==null?void 0:r.photoURL,coverUrl:i.coverUrl}),e.jsx(j,{value:o,onChange:p,sx:{width:1,bottom:0,zIndex:9,position:"absolute",bgcolor:"background.paper",[`& .${g.flexContainer}`]:{pr:{md:3},justifyContent:{sm:"center",md:"flex-end"}}},children:G.map(s=>e.jsx(v,{value:s.value,icon:s.icon,label:s.label},s.value))})]}),o==="profile"&&e.jsx(_,{info:i,posts:C}),o==="followers"&&e.jsx(k,{followers:w}),o==="friends"&&e.jsx(B,{friends:y,searchFriends:d,onSearchFriends:f}),o==="gallery"&&e.jsx(D,{gallery:F})]})}function ae(){return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx("title",{children:" Dashboard: User Profile"})}),e.jsx(I,{})]})}export{ae as default};