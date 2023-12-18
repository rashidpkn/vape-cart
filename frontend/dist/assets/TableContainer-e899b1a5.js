import{cl as u,cm as b,am as m,ca as r,D as p,cc as y,cd as T,a8 as d,ci as C,cj as f}from"./index-a747811c.js";import{c as B,a as N}from"./TablePagination-b959666e.js";function S(o){return u("MuiTable",o)}b("MuiTable",["root","stickyHeader"]);const j=["className","component","padding","size","stickyHeader"],k=o=>{const{classes:e,stickyHeader:s}=o;return f({root:["root",s&&"stickyHeader"]},S,e)},H=m("table",{name:"MuiTable",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:s}=o;return[e.root,s.stickyHeader&&e.stickyHeader]}})(({theme:o,ownerState:e})=>r({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":r({},o.typography.body2,{padding:o.spacing(2),color:(o.vars||o).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},e.stickyHeader&&{borderCollapse:"separate"})),v="table",U=p.forwardRef(function(e,s){const t=y({props:e,name:"MuiTable"}),{className:i,component:a=v,padding:l="normal",size:n="medium",stickyHeader:c=!1}=t,g=T(t,j),x=r({},t,{component:a,padding:l,size:n,stickyHeader:c}),M=k(x),R=p.useMemo(()=>({padding:l,size:n,stickyHeader:c}),[l,n,c]);return d.jsx(B.Provider,{value:R,children:d.jsx(H,r({as:a,role:a===v?null:"table",ref:s,className:C(M.root,i),ownerState:x},g))})}),G=U;function $(o){return u("MuiTableBody",o)}b("MuiTableBody",["root"]);const h=["className","component"],_=o=>{const{classes:e}=o;return f({root:["root"]},$,e)},P=m("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(o,e)=>e.root})({display:"table-row-group"}),z={variant:"body"},w="tbody",E=p.forwardRef(function(e,s){const t=y({props:e,name:"MuiTableBody"}),{className:i,component:a=w}=t,l=T(t,h),n=r({},t,{component:a}),c=_(n);return d.jsx(N.Provider,{value:z,children:d.jsx(P,r({className:C(c.root,i),as:a,ref:s,role:a===w?null:"rowgroup",ownerState:n},l))})}),I=E;function A(o){return u("MuiTableContainer",o)}b("MuiTableContainer",["root"]);const D=["className","component"],L=o=>{const{classes:e}=o;return f({root:["root"]},A,e)},W=m("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(o,e)=>e.root})({width:"100%",overflowX:"auto"}),X=p.forwardRef(function(e,s){const t=y({props:e,name:"MuiTableContainer"}),{className:i,component:a="div"}=t,l=T(t,D),n=r({},t,{component:a}),c=L(n);return d.jsx(W,r({ref:s,as:a,className:C(c.root,i),ownerState:n},l))}),J=X;export{J as T,G as a,I as b};