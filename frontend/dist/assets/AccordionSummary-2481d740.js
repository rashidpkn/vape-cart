import{D as d,am as g,aB as I,cV as R,ce as n,cg as N,ch as w,cj as P,a8 as l,cm as v,cn as j,cW as T,ba as U,cx as W,cy as E,bs as q,cX as x,cY as _}from"./index-80ed1a65.js";const L=d.createContext({}),k=L,H=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],O=o=>{const{classes:s,square:e,expanded:t,disabled:r,disableGutters:i}=o;return j({root:["root",!e&&"rounded",t&&"expanded",r&&"disabled",!i&&"gutters"],region:["region"]},T,s)},X=g(I,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:e}=o;return[{[`& .${R.region}`]:s.region},s.root,!e.square&&s.rounded,!e.disableGutters&&s.gutters]}})(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${R.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${R.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o,ownerState:s})=>n({},!s.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!s.disableGutters&&{[`&.${R.expanded}`]:{margin:"16px 0"}})),Y=d.forwardRef(function(s,e){const t=N({props:s,name:"MuiAccordion"}),{children:r,className:i,defaultExpanded:c=!1,disabled:p=!1,disableGutters:f=!1,expanded:h,onChange:m,square:y=!1,TransitionComponent:C=U,TransitionProps:A}=t,S=w(t,H),[a,u]=P({controlled:h,default:c,name:"Accordion",state:"expanded"}),b=d.useCallback(V=>{u(!a),m&&m(V,!a)},[a,m,u]),[$,...D]=d.Children.toArray(r),B=d.useMemo(()=>({expanded:a,disabled:p,disableGutters:f,toggle:b}),[a,p,f,b]),G=n({},t,{square:y,disabled:p,disableGutters:f,expanded:a}),M=O(G);return l.jsxs(X,n({className:v(M.root,i),ref:e,ownerState:G,square:y},S,{children:[l.jsx(k.Provider,{value:B,children:$}),l.jsx(C,n({in:a,timeout:"auto"},A,{children:l.jsx("div",{"aria-labelledby":$.props.id,id:$.props["aria-controls"],role:"region",className:M.region,children:D})}))]}))}),no=Y;function z(o){return W("MuiAccordionDetails",o)}E("MuiAccordionDetails",["root"]);const F=["className"],J=o=>{const{classes:s}=o;return j({root:["root"]},z,s)},K=g("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),Q=d.forwardRef(function(s,e){const t=N({props:s,name:"MuiAccordionDetails"}),{className:r}=t,i=w(t,F),c=t,p=J(c);return l.jsx(K,n({className:v(p.root,r),ref:e,ownerState:c},i))}),io=Q,Z=["children","className","expandIcon","focusVisibleClassName","onClick"],oo=o=>{const{classes:s,expanded:e,disabled:t,disableGutters:r}=o;return j({root:["root",e&&"expanded",t&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",e&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",e&&"expanded"]},_,s)},so=g(q,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o,ownerState:s})=>{const e={duration:o.transitions.duration.shortest};return n({display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],e),[`&.${x.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${x.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${x.disabled})`]:{cursor:"pointer"}},!s.disableGutters&&{[`&.${x.expanded}`]:{minHeight:64}})}),eo=g("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(({theme:o,ownerState:s})=>n({display:"flex",flexGrow:1,margin:"12px 0"},!s.disableGutters&&{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${x.expanded}`]:{margin:"20px 0"}})),to=g("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${x.expanded}`]:{transform:"rotate(180deg)"}})),ao=d.forwardRef(function(s,e){const t=N({props:s,name:"MuiAccordionSummary"}),{children:r,className:i,expandIcon:c,focusVisibleClassName:p,onClick:f}=t,h=w(t,Z),{disabled:m=!1,disableGutters:y,expanded:C,toggle:A}=d.useContext(k),S=b=>{A&&A(b),f&&f(b)},a=n({},t,{expanded:C,disabled:m,disableGutters:y}),u=oo(a);return l.jsxs(so,n({focusRipple:!1,disableRipple:!0,disabled:m,component:"div","aria-expanded":C,className:v(u.root,i),focusVisibleClassName:v(u.focusVisible,p),onClick:S,ref:e,ownerState:a},h,{children:[l.jsx(eo,{className:u.content,ownerState:a,children:r}),c&&l.jsx(to,{className:u.expandIconWrapper,ownerState:a,children:c})]}))}),co=ao;export{no as A,co as a,io as b};
