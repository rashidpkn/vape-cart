import{aQ as x,D as o,ae as e,aE as b,by as p,aB as t,aL as j,dI as i,aN as g,dJ as v,aO as C,dK as w,dL as y,dM as F,dN as P,aC as l,dO as U,b7 as S}from"./index-1a7acf6a.js";import"./user-new-edit-form-01805cba.js";import"./confirm-dialog-66591d64.js";import{P as T,a as k,b as _,c as N,d as B}from"./profile-followers-b9cffb23.js";import"./DialogTitle-94bb0998.js";import"./DialogContent-2f3858c4.js";import"./Alert-e4d0b000.js";import"./AvatarGroup-704e3d78.js";import"./Fab-382b22fa.js";import"./lightbox-22b81292.js";const D=[{value:"profile",label:"Profile",icon:e.jsx(l,{icon:"solar:user-id-bold",width:24})},{value:"followers",label:"Followers",icon:e.jsx(l,{icon:"solar:heart-bold",width:24})},{value:"friends",label:"Friends",icon:e.jsx(l,{icon:"solar:users-group-rounded-bold",width:24})},{value:"gallery",label:"Gallery",icon:e.jsx(l,{icon:"solar:gallery-wide-bold",width:24})}];function E(){const n=x(),{user:s}=U(),[d,c]=o.useState(""),[a,h]=o.useState("profile"),u=o.useCallback((r,f)=>{h(f)},[]),m=o.useCallback(r=>{c(r.target.value)},[]);return e.jsxs(b,{maxWidth:n.themeStretch?!1:"lg",children:[e.jsx(p,{heading:"Profile",links:[{name:"Dashboard",href:t.dashboard.root},{name:"User",href:t.dashboard.user.root},{name:s==null?void 0:s.displayName}],sx:{mb:{xs:3,md:5}}}),e.jsxs(j,{sx:{mb:3,height:290},children:[e.jsx(T,{role:i.role,name:s==null?void 0:s.displayName,avatarUrl:s==null?void 0:s.photoURL,coverUrl:i.coverUrl}),e.jsx(g,{value:a,onChange:u,sx:{width:1,bottom:0,zIndex:9,position:"absolute",bgcolor:"background.paper",[`& .${v.flexContainer}`]:{pr:{md:3},justifyContent:{sm:"center",md:"flex-end"}}},children:D.map(r=>e.jsx(C,{value:r.value,icon:r.icon,label:r.label},r.value))})]}),a==="profile"&&e.jsx(k,{info:i,posts:w}),a==="followers"&&e.jsx(_,{followers:y}),a==="friends"&&e.jsx(N,{friends:F,searchFriends:d,onSearchFriends:m}),a==="gallery"&&e.jsx(B,{gallery:P})]})}function J(){return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsx("title",{children:" Dashboard: User Profile"})}),e.jsx(E,{})]})}export{J as default};
