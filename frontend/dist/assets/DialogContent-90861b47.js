import{ao as r,an as n,ap as g,aj as i,F as u,ar as v,as as C,j as x,at as D,au as f}from"./index-f9021dbd.js";function m(o){return r("MuiDialogContent",o)}n("MuiDialogContent",["root","dividers"]);function $(o){return r("MuiDialogTitle",o)}const T=n("MuiDialogTitle",["root"]),M=T,j=["className","dividers"],w=o=>{const{classes:t,dividers:s}=o;return f({root:["root",s&&"dividers"]},m,t)},y=g("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,s.dividers&&t.dividers]}})(({theme:o,ownerState:t})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${M.root} + &`]:{paddingTop:0}})),R=u.forwardRef(function(t,s){const e=v({props:t,name:"MuiDialogContent"}),{className:l,dividers:d=!1}=e,c=C(e,j),a=i({},e,{dividers:d}),p=w(a);return x.jsx(y,i({className:D(p.root,l),ownerState:a,ref:s},c))}),b=R;export{b as D,$ as g};