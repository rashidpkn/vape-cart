import{aj as y,ai as C,ak as g,ae as n,D as p,am as d,an as u,ao as m,ap as D,aq as x,ar as A,du as R}from"./index-feebbf1a.js";import{g as T}from"./DialogContent-8fffd9a5.js";function S(s){return y("MuiDialogActions",s)}C("MuiDialogActions",["root","spacing"]);const h=["className","disableSpacing"],b=s=>{const{classes:o,disableSpacing:t}=s;return x({root:["root",!t&&"spacing"]},S,o)},j=g("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(s,o)=>{const{ownerState:t}=s;return[o.root,!t.disableSpacing&&o.spacing]}})(({ownerState:s})=>n({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!s.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),v=p.forwardRef(function(o,t){const a=d({props:o,name:"MuiDialogActions"}),{className:l,disableSpacing:e=!1}=a,c=u(a,h),i=n({},a,{disableSpacing:e}),r=b(i);return m.jsx(j,n({className:D(r.root,l),ownerState:i,ref:t},c))}),P=v,M=["className","id"],N=s=>{const{classes:o}=s;return x({root:["root"]},T,o)},U=g(A,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(s,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),w=p.forwardRef(function(o,t){const a=d({props:o,name:"MuiDialogTitle"}),{className:l,id:e}=a,c=u(a,M),i=a,r=N(i),{titleId:f=e}=p.useContext(R);return m.jsx(U,n({component:"h2",className:D(r.root,l),ownerState:i,ref:t,variant:"h6",id:e??f},c))}),E=w;export{E as D,P as a};