import{cx as m,cy as y,an as p,ce as a,D as r,cg as L,ch as x,ee as S,a9 as b,cm as A,cn as I}from"./index-35891951.js";function C(t){return m("MuiListItemSecondaryAction",t)}y("MuiListItemSecondaryAction",["root","disableGutters"]);const G=["className"],f=t=>{const{disableGutters:s,classes:e}=t;return I({root:["root",s&&"disableGutters"]},C,e)},g=p("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,e.disableGutters&&s.disableGutters]}})(({ownerState:t})=>a({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),i=r.forwardRef(function(s,e){const o=L({props:s,name:"MuiListItemSecondaryAction"}),{className:c}=o,l=x(o,G),u=r.useContext(S),n=a({},o,{disableGutters:u.disableGutters}),d=f(n);return b.jsx(g,a({className:A(d.root,c),ownerState:n,ref:e},l))});i.muiName="ListItemSecondaryAction";const R=i;export{R as L};