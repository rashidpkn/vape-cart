import{D as g,a8 as e,al as d,ae as u,ah as j,b5 as S,aT as $,f5 as z,aZ as B,av as P,ad as A,aj as T,ag as D,a9 as F,aH as H}from"./index-086ce406.js";import{C as G}from"./custom-breadcrumbs-5a71242b.js";import{C as R}from"./component-block-90b1786f.js";import{C as E}from"./Card-0cb6ed66.js";import{C as I}from"./Checkbox-e4569f7c.js";import{C as M}from"./CardHeader-d9c43941.js";import"./SwitchBase-8d2ece05.js";function C(t,s){return t.filter(i=>s.indexOf(i)===-1)}function O(t,s){return t.filter(i=>s.indexOf(i)!==-1)}function U(){const[t,s]=g.useState([]),[i,h]=g.useState([0,1,2,3]),[a,x]=g.useState([4,5,6,7]),o=O(t,i),c=O(t,a),b=r=>()=>{const n=t.indexOf(r),l=[...t];n===-1?l.push(r):l.splice(n,1),s(l)},f=()=>{x(a.concat(i)),h([])},k=()=>{x(a.concat(o)),h(C(i,o)),s(C(t,o))},w=()=>{h(i.concat(c)),x(C(a,c)),s(C(t,c))},L=()=>{h(i.concat(a)),x([])},p=r=>e.jsx(E,{sx:{width:200,height:220,overflow:"auto",borderRadius:1.5},children:e.jsx(S,{dense:!0,component:"div",role:"list",children:r.map(n=>{const l=`transfer-list-item-${n}-label`;return e.jsxs($,{role:"listitem",onClick:b(n),children:[e.jsx(z,{children:e.jsx(I,{checked:t.indexOf(n)!==-1,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":l}})}),e.jsx(B,{id:l,primary:`List item ${n+1}`})]},n)})})});return e.jsxs(d,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",py:3},children:[e.jsx(d,{children:p(i)}),e.jsxs(d,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:f,disabled:i.length===0,"aria-label":"move all right",sx:{my:1},children:e.jsx(j,{icon:"eva:arrowhead-right-fill",width:18})}),e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:k,disabled:o.length===0,"aria-label":"move selected right",sx:{my:1},children:e.jsx(j,{icon:"eva:arrow-ios-forward-fill",width:18})}),e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:w,disabled:c.length===0,"aria-label":"move selected left",sx:{my:1},children:e.jsx(j,{icon:"eva:arrow-ios-back-fill",width:18})}),e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:L,disabled:a.length===0,"aria-label":"move all left",sx:{my:1},children:e.jsx(j,{icon:"eva:arrowhead-left-fill",width:18})})]}),e.jsx(d,{children:p(a)})]})}function m(t,s){return t.filter(i=>s.indexOf(i)===-1)}function y(t,s){return t.filter(i=>s.indexOf(i)!==-1)}function V(t,s){return[...t,...m(s,t)]}function W(){const[t,s]=g.useState([]),[i,h]=g.useState([0,1,2,3]),[a,x]=g.useState([4,5,6,7]),o=y(t,i),c=y(t,a),b=r=>()=>{const n=t.indexOf(r),l=[...t];n===-1?l.push(r):l.splice(n,1),s(l)},f=r=>y(t,r).length,k=r=>()=>{f(r)===r.length?s(m(t,r)):s(V(t,r))},w=()=>{x(a.concat(o)),h(m(i,o)),s(m(t,o))},L=()=>{h(i.concat(c)),x(m(a,c)),s(m(t,c))},p=(r,n)=>e.jsxs(E,{sx:{borderRadius:1.5},children:[e.jsx(M,{avatar:e.jsx(I,{onClick:k(n),checked:f(n)===n.length&&n.length!==0,indeterminate:f(n)!==n.length&&f(n)!==0,disabled:n.length===0,inputProps:{"aria-label":"all items selected"}}),title:r,subheader:`${f(n)}/${n.length} selected`,sx:{p:2}}),e.jsx(P,{}),e.jsx(S,{dense:!0,component:"div",role:"list",sx:{width:200,height:220,overflow:"auto"},children:n.map(l=>{const v=`transfer-list-all-item-${l}-label`;return e.jsxs($,{role:"listitem",onClick:b(l),children:[e.jsx(z,{children:e.jsx(I,{disableRipple:!0,checked:t.indexOf(l)!==-1,tabIndex:-1,inputProps:{"aria-labelledby":v}})}),e.jsx(B,{id:v,primary:`List item ${l+1}`})]},l)})})]});return e.jsxs(d,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",p:3},children:[e.jsx(d,{children:p("Choices",i)}),e.jsxs(d,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:w,disabled:o.length===0,"aria-label":"move selected right",sx:{my:1},children:e.jsx(j,{icon:"eva:arrow-ios-forward-fill",width:18})}),e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:L,disabled:c.length===0,"aria-label":"move selected left",sx:{my:1},children:e.jsx(j,{icon:"eva:arrow-ios-back-fill",width:18})})]}),e.jsx(d,{children:p("Chosen",a)})]})}function Z(){return e.jsxs(e.Fragment,{children:[e.jsx(A,{sx:{py:5,bgcolor:t=>t.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(T,{children:e.jsx(G,{heading:"Transfer List",links:[{name:"Components",href:D.components},{name:"Transfer List"}],moreLink:["https://mui.com/components/transfer-list"]})})}),e.jsx(T,{sx:{my:10},children:e.jsxs(F,{spacing:3,children:[e.jsx(R,{title:"Simple",children:e.jsx(U,{})}),e.jsx(R,{title:"Enhanced",children:e.jsx(W,{})})]})})]})}function _(){return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx("title",{children:" MUI: Transfer List"})}),e.jsx(Z,{})]})}export{_ as default};