import{D as c,am as g,aA as P,db as R,ce as n,cg as N,ch as w,cj as T,a8 as l,cm as v,cn as j,dc as U,bZ as V,bi as q,dd as m,de as E,cp as W,cq as _}from"./index-bf334511.js";const L=c.createContext({}),k=L,H=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],O=o=>{const{classes:s,square:e,expanded:t,disabled:r,disableGutters:i}=o;return j({root:["root",!e&&"rounded",t&&"expanded",r&&"disabled",!i&&"gutters"],region:["region"]},U,s)},Z=g(P,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:e}=o;return[{[`& .${R.region}`]:s.region},s.root,!e.square&&s.rounded,!e.disableGutters&&s.gutters]}})(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${R.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${R.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o,ownerState:s})=>n({},!s.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!s.disableGutters&&{[`&.${R.expanded}`]:{margin:"16px 0"}})),z=c.forwardRef(function(s,e){const t=N({props:s,name:"MuiAccordion"}),{children:r,className:i,defaultExpanded:d=!1,disabled:p=!1,disableGutters:b=!1,expanded:h,onChange:f,square:y=!1,TransitionComponent:C=V,TransitionProps:A}=t,S=w(t,H),[a,u]=T({controlled:h,default:d,name:"Accordion",state:"expanded"}),x=c.useCallback(I=>{u(!a),f&&f(I,!a)},[a,f,u]),[$,...D]=c.Children.toArray(r),B=c.useMemo(()=>({expanded:a,disabled:p,disableGutters:b,toggle:x}),[a,p,b,x]),G=n({},t,{square:y,disabled:p,disableGutters:b,expanded:a}),M=O(G);return l.jsxs(Z,n({className:v(M.root,i),ref:e,ownerState:G,square:y},S,{children:[l.jsx(k.Provider,{value:B,children:$}),l.jsx(C,n({in:a,timeout:"auto"},A,{children:l.jsx("div",{"aria-labelledby":$.props.id,id:$.props["aria-controls"],role:"region",className:M.region,children:D})}))]}))}),no=z,F=["children","className","expandIcon","focusVisibleClassName","onClick"],J=o=>{const{classes:s,expanded:e,disabled:t,disableGutters:r}=o;return j({root:["root",e&&"expanded",t&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",e&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",e&&"expanded"]},E,s)},K=g(q,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o,ownerState:s})=>{const e={duration:o.transitions.duration.shortest};return n({display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],e),[`&.${m.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${m.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${m.disabled})`]:{cursor:"pointer"}},!s.disableGutters&&{[`&.${m.expanded}`]:{minHeight:64}})}),Q=g("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(({theme:o,ownerState:s})=>n({display:"flex",flexGrow:1,margin:"12px 0"},!s.disableGutters&&{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${m.expanded}`]:{margin:"20px 0"}})),X=g("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${m.expanded}`]:{transform:"rotate(180deg)"}})),Y=c.forwardRef(function(s,e){const t=N({props:s,name:"MuiAccordionSummary"}),{children:r,className:i,expandIcon:d,focusVisibleClassName:p,onClick:b}=t,h=w(t,F),{disabled:f=!1,disableGutters:y,expanded:C,toggle:A}=c.useContext(k),S=x=>{A&&A(x),b&&b(x)},a=n({},t,{expanded:C,disabled:f,disableGutters:y}),u=J(a);return l.jsxs(K,n({focusRipple:!1,disableRipple:!0,disabled:f,component:"div","aria-expanded":C,className:v(u.root,i),focusVisibleClassName:v(u.focusVisible,p),onClick:S,ref:e,ownerState:a},h,{children:[l.jsx(Q,{className:u.content,ownerState:a,children:r}),d&&l.jsx(X,{className:u.expandIconWrapper,ownerState:a,children:d})]}))}),io=Y;function oo(o){return W("MuiAccordionDetails",o)}_("MuiAccordionDetails",["root"]);const so=["className"],eo=o=>{const{classes:s}=o;return j({root:["root"]},oo,s)},to=g("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),ao=c.forwardRef(function(s,e){const t=N({props:s,name:"MuiAccordionDetails"}),{className:r}=t,i=w(t,so),d=t,p=eo(d);return l.jsx(to,n({className:v(p.root,r),ref:e,ownerState:d},i))}),co=ao;export{no as A,io as a,co as b};