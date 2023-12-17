import{D as c,am as g,aA as P,d9 as R,cd as n,cf as N,cg as w,ci as T,a8 as l,cl as v,cm as k,da as U,b7 as V,bk as E,db as m,dc as W,co as q,cp as _}from"./index-086ce406.js";const L=c.createContext({}),j=L,H=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],O=o=>{const{classes:s,square:e,expanded:t,disabled:r,disableGutters:i}=o;return k({root:["root",!e&&"rounded",t&&"expanded",r&&"disabled",!i&&"gutters"],region:["region"]},U,s)},z=g(P,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:e}=o;return[{[`& .${R.region}`]:s.region},s.root,!e.square&&s.rounded,!e.disableGutters&&s.gutters]}})(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${R.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${R.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o,ownerState:s})=>n({},!s.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!s.disableGutters&&{[`&.${R.expanded}`]:{margin:"16px 0"}})),F=c.forwardRef(function(s,e){const t=N({props:s,name:"MuiAccordion"}),{children:r,className:i,defaultExpanded:d=!1,disabled:p=!1,disableGutters:f=!1,expanded:h,onChange:b,square:y=!1,TransitionComponent:C=V,TransitionProps:A}=t,S=w(t,H),[a,u]=T({controlled:h,default:d,name:"Accordion",state:"expanded"}),x=c.useCallback(I=>{u(!a),b&&b(I,!a)},[a,b,u]),[$,...D]=c.Children.toArray(r),B=c.useMemo(()=>({expanded:a,disabled:p,disableGutters:f,toggle:x}),[a,p,f,x]),G=n({},t,{square:y,disabled:p,disableGutters:f,expanded:a}),M=O(G);return l.jsxs(z,n({className:v(M.root,i),ref:e,ownerState:G,square:y},S,{children:[l.jsx(j.Provider,{value:B,children:$}),l.jsx(C,n({in:a,timeout:"auto"},A,{children:l.jsx("div",{"aria-labelledby":$.props.id,id:$.props["aria-controls"],role:"region",className:M.region,children:D})}))]}))}),no=F,J=["children","className","expandIcon","focusVisibleClassName","onClick"],K=o=>{const{classes:s,expanded:e,disabled:t,disableGutters:r}=o;return k({root:["root",e&&"expanded",t&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",e&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",e&&"expanded"]},W,s)},Q=g(E,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o,ownerState:s})=>{const e={duration:o.transitions.duration.shortest};return n({display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],e),[`&.${m.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${m.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${m.disabled})`]:{cursor:"pointer"}},!s.disableGutters&&{[`&.${m.expanded}`]:{minHeight:64}})}),X=g("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(({theme:o,ownerState:s})=>n({display:"flex",flexGrow:1,margin:"12px 0"},!s.disableGutters&&{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${m.expanded}`]:{margin:"20px 0"}})),Y=g("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${m.expanded}`]:{transform:"rotate(180deg)"}})),Z=c.forwardRef(function(s,e){const t=N({props:s,name:"MuiAccordionSummary"}),{children:r,className:i,expandIcon:d,focusVisibleClassName:p,onClick:f}=t,h=w(t,J),{disabled:b=!1,disableGutters:y,expanded:C,toggle:A}=c.useContext(j),S=x=>{A&&A(x),f&&f(x)},a=n({},t,{expanded:C,disabled:b,disableGutters:y}),u=K(a);return l.jsxs(Q,n({focusRipple:!1,disableRipple:!0,disabled:b,component:"div","aria-expanded":C,className:v(u.root,i),focusVisibleClassName:v(u.focusVisible,p),onClick:S,ref:e,ownerState:a},h,{children:[l.jsx(X,{className:u.content,ownerState:a,children:r}),d&&l.jsx(Y,{className:u.expandIconWrapper,ownerState:a,children:d})]}))}),io=Z;function oo(o){return q("MuiAccordionDetails",o)}_("MuiAccordionDetails",["root"]);const so=["className"],eo=o=>{const{classes:s}=o;return k({root:["root"]},oo,s)},to=g("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),ao=c.forwardRef(function(s,e){const t=N({props:s,name:"MuiAccordionDetails"}),{className:r}=t,i=w(t,so),d=t,p=eo(d);return l.jsx(to,n({className:v(p.root,r),ref:e,ownerState:d},i))}),co=ao;export{no as A,io as a,co as b};