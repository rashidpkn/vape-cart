import{b4 as b,F as a,j as e,aU as f,bx as x,aR as t,a$ as j,cV as i,b1 as g,cW as v,b2 as w,cX as C,cY as F,cZ as P,c_ as y,aS as l,c$ as U,W as S}from"./index-274325b3.js";import"./user-new-edit-form-3f98694c.js";import"./confirm-dialog-5fda9aa7.js";import"./table-pagination-custom-9c97fb48.js";import{P as T,a as _,b as k,c as G,d as R}from"./profile-followers-4196f4df.js";import"./form-provider-a11e6a59.js";import"./format-number-47ae91b5.js";import"./image-16a7a60c.js";import"./transition-bee6630b.js";import"./Checkbox-b4501a6a.js";import"./Switch-1709466b.js";import"./yup-763216e5.js";import"./CircularProgress-fac51620.js";import"./DialogTitle-9e1fb032.js";import"./DialogContent-ce2541a6.js";import"./Alert-3959888a.js";import"./AvatarGroup-a222f54a.js";import"./Fab-0b227a85.js";import"./lightbox-faed1940.js";const W=[{value:"profile",label:"Profile",icon:e.jsx(l,{icon:"solar:user-id-bold",width:24})},{value:"followers",label:"Followers",icon:e.jsx(l,{icon:"solar:heart-bold",width:24})},{value:"friends",label:"Friends",icon:e.jsx(l,{icon:"solar:users-group-rounded-bold",width:24})},{value:"gallery",label:"Gallery",icon:e.jsx(l,{icon:"solar:gallery-wide-bold",width:24})}];function $(){const n=b(),{user:r}=U(),[d,c]=a.useState(""),[o,m]=a.useState("profile"),p=a.useCallback((s,u)=>{m(u)},[]),h=a.useCallback(s=>{c(s.target.value)},[]);return e.jsxs(f,{maxWidth:n.themeStretch?!1:"lg",children:[e.jsx(x,{heading:"Profile",links:[{name:"Dashboard",href:t.dashboard.root},{name:"User",href:t.dashboard.user.root},{name:r==null?void 0:r.displayName}],sx:{mb:{xs:3,md:5}}}),e.jsxs(j,{sx:{mb:3,height:290},children:[e.jsx(T,{role:i.role,name:r==null?void 0:r.displayName,avatarUrl:r==null?void 0:r.photoURL,coverUrl:i.coverUrl}),e.jsx(g,{value:o,onChange:p,sx:{width:1,bottom:0,zIndex:9,position:"absolute",bgcolor:"background.paper",[`& .${v.flexContainer}`]:{pr:{md:3},justifyContent:{sm:"center",md:"flex-end"}}},children:W.map(s=>e.jsx(w,{value:s.value,icon:s.icon,label:s.label},s.value))})]}),o==="profile"&&e.jsx(_,{info:i,posts:C}),o==="followers"&&e.jsx(k,{followers:F}),o==="friends"&&e.jsx(G,{friends:P,searchFriends:d,onSearchFriends:h}),o==="gallery"&&e.jsx(R,{gallery:y})]})}function ee(){return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsx("title",{children:" Dashboard: User Profile"})}),e.jsx($,{})]})}export{ee as default};
