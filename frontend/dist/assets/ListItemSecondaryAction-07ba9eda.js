import{cp as m,cq as p,am as y,ce as a,D as n,cg as L,ch as S,en as x,a8 as b,cm as A,cn as I}from"./index-bf334511.js";function C(t){return m("MuiListItemSecondaryAction",t)}p("MuiListItemSecondaryAction",["root","disableGutters"]);const G=["className"],f=t=>{const{disableGutters:s,classes:e}=t;return I({root:["root",s&&"disableGutters"]},C,e)},g=y("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,e.disableGutters&&s.disableGutters]}})(({ownerState:t})=>a({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),i=n.forwardRef(function(s,e){const o=L({props:s,name:"MuiListItemSecondaryAction"}),{className:c}=o,l=S(o,G),u=n.useContext(x),r=a({},o,{disableGutters:u.disableGutters}),d=f(r);return b.jsx(g,a({className:A(d.root,c),ownerState:r,ref:e},l))});i.muiName="ListItemSecondaryAction";const R=i;export{R as L};
