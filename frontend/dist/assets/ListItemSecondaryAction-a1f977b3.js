import{co as m,cp as p,am as y,cd as a,D as n,cf as L,cg as S,ek as x,a8 as b,cl as A,cm as I}from"./index-086ce406.js";function f(t){return m("MuiListItemSecondaryAction",t)}p("MuiListItemSecondaryAction",["root","disableGutters"]);const C=["className"],G=t=>{const{disableGutters:s,classes:e}=t;return I({root:["root",s&&"disableGutters"]},f,e)},g=y("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,e.disableGutters&&s.disableGutters]}})(({ownerState:t})=>a({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),i=n.forwardRef(function(s,e){const o=L({props:s,name:"MuiListItemSecondaryAction"}),{className:c}=o,l=S(o,C),d=n.useContext(x),r=a({},o,{disableGutters:d.disableGutters}),u=G(r);return b.jsx(g,a({className:A(u.root,c),ownerState:r,ref:e},l))});i.muiName="ListItemSecondaryAction";const R=i;export{R as L};