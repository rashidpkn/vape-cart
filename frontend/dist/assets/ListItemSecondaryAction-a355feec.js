import{cw as m,cx as y,an as p,cd as a,D as n,cf as L,cg as x,ed as S,a9 as b,cl as A,cm as I}from"./index-95441d98.js";function C(t){return m("MuiListItemSecondaryAction",t)}y("MuiListItemSecondaryAction",["root","disableGutters"]);const G=["className"],f=t=>{const{disableGutters:s,classes:e}=t;return I({root:["root",s&&"disableGutters"]},C,e)},g=p("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,e.disableGutters&&s.disableGutters]}})(({ownerState:t})=>a({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),i=n.forwardRef(function(s,e){const o=L({props:s,name:"MuiListItemSecondaryAction"}),{className:c}=o,l=x(o,G),d=n.useContext(S),r=a({},o,{disableGutters:d.disableGutters}),u=f(r);return b.jsx(g,a({className:A(u.root,c),ownerState:r,ref:e},l))});i.muiName="ListItemSecondaryAction";const R=i;export{R as L};