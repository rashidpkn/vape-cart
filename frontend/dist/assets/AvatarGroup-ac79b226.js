import{ak as S,ae as l,dc as _,ef as L,D as n,am as k,an as D,ao as G,b7 as U,ap as x,aq as V,eg as q}from"./index-0ba7776f.js";const z=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],N={small:-16,medium:null},I=s=>{const{classes:a}=s;return V({root:["root"],avatar:["avatar"]},q,a)},T=S("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(s,a)=>l({[`& .${_.avatar}`]:a.avatar},a.root)})(({theme:s,ownerState:a})=>{const r=a.spacing&&N[a.spacing]!==void 0?N[a.spacing]:-a.spacing;return{[`& .${L.root}`]:{border:`2px solid ${(s.vars||s).palette.background.default}`,boxSizing:"content-box",marginLeft:r??-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}}),W=n.forwardRef(function(a,r){var A;const i=k({props:a,name:"MuiAvatarGroup"}),{children:C,className:b,component:g="div",componentsProps:M={},max:c=5,renderSurplus:h,slotProps:$={},spacing:E="medium",total:R,variant:p="circular"}=i,j=D(i,z);let t=c<2?2:c;const f=l({},i,{max:c,spacing:E,component:g,variant:p}),m=I(f),v=n.Children.toArray(C).filter(o=>n.isValidElement(o)),e=R||v.length;e===t&&(t+=1),t=Math.min(e+1,t);const P=Math.min(v.length,t-1),d=Math.max(e-t,e-P,0),y=h?h(d):`+${d}`,u=(A=$.additionalAvatar)!=null?A:M.additionalAvatar;return G.jsxs(T,l({as:g,ownerState:f,className:x(m.root,b),ref:r},j,{children:[d?G.jsx(U,l({variant:p},u,{className:x(m.avatar,u==null?void 0:u.className),children:y})):null,v.slice(0,P).reverse().map(o=>n.cloneElement(o,{className:x(o.props.className,m.avatar),variant:o.props.variant||p}))]}))}),B=W;export{B as A};
