import{cw as r,cv as n,b9 as g,bw as i,a4 as u,bQ as v,bR as C,j as x,bX as D,bY as b}from"./index-519398e3.js";function f(o){return r("MuiDialogContent",o)}n("MuiDialogContent",["root","dividers"]);function $(o){return r("MuiDialogTitle",o)}const m=n("MuiDialogTitle",["root"]),T=m,w=["className","dividers"],M=o=>{const{classes:t,dividers:s}=o;return b({root:["root",s&&"dividers"]},f,t)},R=g("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,s.dividers&&t.dividers]}})(({theme:o,ownerState:t})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${T.root} + &`]:{paddingTop:0}})),y=u.forwardRef(function(t,s){const e=v({props:t,name:"MuiDialogContent"}),{className:l,dividers:d=!1}=e,c=C(e,w),a=i({},e,{dividers:d}),p=M(a);return x.jsx(R,i({className:D(p.root,l),ownerState:a,ref:s},c))}),j=y;export{j as D,$ as g};
