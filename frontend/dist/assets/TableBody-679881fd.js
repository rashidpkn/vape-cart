import{J as m,K as T,V as x,Q as r,r as p,$ as f,N as g,j as i,i as C,a2 as v}from"./index-eab1947b.js";import{c as k,d as w}from"./TableRow-c5a0faf0.js";function H(o){return m("MuiTable",o)}T("MuiTable",["root","stickyHeader"]);const j=["className","component","padding","size","stickyHeader"],N=o=>{const{classes:e,stickyHeader:s}=o;return v({root:["root",s&&"stickyHeader"]},H,e)},U=x("table",{name:"MuiTable",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:s}=o;return[e.root,s.stickyHeader&&e.stickyHeader]}})(({theme:o,ownerState:e})=>r({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":r({},o.typography.body2,{padding:o.spacing(2),color:(o.vars||o).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},e.stickyHeader&&{borderCollapse:"separate"})),u="table",$=p.forwardRef(function(e,s){const t=f({props:e,name:"MuiTable"}),{className:d,component:a=u,padding:n="normal",size:l="medium",stickyHeader:c=!1}=t,B=g(t,j),b=r({},t,{component:a,padding:n,size:l,stickyHeader:c}),M=N(b),R=p.useMemo(()=>({padding:n,size:l,stickyHeader:c}),[n,l,c]);return i.jsx(k.Provider,{value:R,children:i.jsx(U,r({as:a,role:a===u?null:"table",ref:s,className:C(M.root,d),ownerState:b},B))})}),K=$;function h(o){return m("MuiTableBody",o)}T("MuiTableBody",["root"]);const S=["className","component"],P=o=>{const{classes:e}=o;return v({root:["root"]},h,e)},_=x("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(o,e)=>e.root})({display:"table-row-group"}),z={variant:"body"},y="tbody",E=p.forwardRef(function(e,s){const t=f({props:e,name:"MuiTableBody"}),{className:d,component:a=y}=t,n=g(t,S),l=r({},t,{component:a}),c=P(l);return i.jsx(w.Provider,{value:z,children:i.jsx(_,r({className:C(c.root,d),as:a,ref:s,role:a===y?null:"rowgroup",ownerState:l},n))})}),L=E;export{K as T,L as a};
