import{co as u,cp as b,am as m,cd as r,D as p,cf as y,cg as T,a8 as d,cl as C,cm as f}from"./index-26f85d8d.js";import{c as B,a as N}from"./TablePagination-9aa3d250.js";function S(o){return u("MuiTable",o)}b("MuiTable",["root","stickyHeader"]);const k=["className","component","padding","size","stickyHeader"],H=o=>{const{classes:e,stickyHeader:s}=o;return f({root:["root",s&&"stickyHeader"]},S,e)},U=m("table",{name:"MuiTable",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:s}=o;return[e.root,s.stickyHeader&&e.stickyHeader]}})(({theme:o,ownerState:e})=>r({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":r({},o.typography.body2,{padding:o.spacing(2),color:(o.vars||o).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},e.stickyHeader&&{borderCollapse:"separate"})),v="table",$=p.forwardRef(function(e,s){const t=y({props:e,name:"MuiTable"}),{className:i,component:a=v,padding:l="normal",size:n="medium",stickyHeader:c=!1}=t,w=T(t,k),x=r({},t,{component:a,padding:l,size:n,stickyHeader:c}),M=H(x),R=p.useMemo(()=>({padding:l,size:n,stickyHeader:c}),[l,n,c]);return d.jsx(B.Provider,{value:R,children:d.jsx(U,r({as:a,role:a===v?null:"table",ref:s,className:C(M.root,i),ownerState:x},w))})}),G=$;function h(o){return u("MuiTableBody",o)}b("MuiTableBody",["root"]);const j=["className","component"],_=o=>{const{classes:e}=o;return f({root:["root"]},h,e)},P=m("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(o,e)=>e.root})({display:"table-row-group"}),z={variant:"body"},g="tbody",E=p.forwardRef(function(e,s){const t=y({props:e,name:"MuiTableBody"}),{className:i,component:a=g}=t,l=T(t,j),n=r({},t,{component:a}),c=_(n);return d.jsx(N.Provider,{value:z,children:d.jsx(P,r({className:C(c.root,i),as:a,ref:s,role:a===g?null:"rowgroup",ownerState:n},l))})}),I=E;function A(o){return u("MuiTableContainer",o)}b("MuiTableContainer",["root"]);const D=["className","component"],L=o=>{const{classes:e}=o;return f({root:["root"]},A,e)},W=m("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(o,e)=>e.root})({width:"100%",overflowX:"auto"}),X=p.forwardRef(function(e,s){const t=y({props:e,name:"MuiTableContainer"}),{className:i,component:a="div"}=t,l=T(t,D),n=r({},t,{component:a}),c=L(n);return d.jsx(W,r({ref:s,as:a,className:C(c.root,i),ownerState:n},l))}),J=X;export{J as T,G as a,I as b};
