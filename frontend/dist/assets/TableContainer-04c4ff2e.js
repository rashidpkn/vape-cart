import{as as u,ar as b,at as y,an as r,H as p,av as m,aw as T,j as d,ax as C,ay as f}from"./index-5abd2fc6.js";import{h as B,i as H}from"./table-pagination-custom-e0cfbd9e.js";function N(o){return u("MuiTable",o)}b("MuiTable",["root","stickyHeader"]);const h=["className","component","padding","size","stickyHeader"],j=o=>{const{classes:e,stickyHeader:t}=o;return f({root:["root",t&&"stickyHeader"]},N,e)},k=y("table",{name:"MuiTable",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.stickyHeader&&e.stickyHeader]}})(({theme:o,ownerState:e})=>r({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":r({},o.typography.body2,{padding:o.spacing(2),color:(o.vars||o).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},e.stickyHeader&&{borderCollapse:"separate"})),v="table",U=p.forwardRef(function(e,t){const s=m({props:e,name:"MuiTable"}),{className:i,component:a=v,padding:l="normal",size:n="medium",stickyHeader:c=!1}=s,w=T(s,h),x=r({},s,{component:a,padding:l,size:n,stickyHeader:c}),M=j(x),R=p.useMemo(()=>({padding:l,size:n,stickyHeader:c}),[l,n,c]);return d.jsx(B.Provider,{value:R,children:d.jsx(k,r({as:a,role:a===v?null:"table",ref:t,className:C(M.root,i),ownerState:x},w))})}),G=U;function $(o){return u("MuiTableBody",o)}b("MuiTableBody",["root"]);const S=["className","component"],_=o=>{const{classes:e}=o;return f({root:["root"]},$,e)},P=y("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(o,e)=>e.root})({display:"table-row-group"}),z={variant:"body"},g="tbody",E=p.forwardRef(function(e,t){const s=m({props:e,name:"MuiTableBody"}),{className:i,component:a=g}=s,l=T(s,S),n=r({},s,{component:a}),c=_(n);return d.jsx(H.Provider,{value:z,children:d.jsx(P,r({className:C(c.root,i),as:a,ref:t,role:a===g?null:"rowgroup",ownerState:n},l))})}),I=E;function A(o){return u("MuiTableContainer",o)}b("MuiTableContainer",["root"]);const L=["className","component"],W=o=>{const{classes:e}=o;return f({root:["root"]},A,e)},X=y("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(o,e)=>e.root})({width:"100%",overflowX:"auto"}),q=p.forwardRef(function(e,t){const s=m({props:e,name:"MuiTableContainer"}),{className:i,component:a="div"}=s,l=T(s,L),n=r({},s,{component:a}),c=W(n);return d.jsx(X,r({ref:t,as:a,className:C(c.root,i),ownerState:n},l))}),J=q;export{J as T,G as a,I as b};