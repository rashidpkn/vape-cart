import{ap as S,aj as l,de as _,eg as L,F as n,ar as U,as as V,j as G,b8 as k,at as x,au as z,eh as D}from"./index-274325b3.js";const F=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],N={small:-16,medium:null},I=s=>{const{classes:a}=s;return z({root:["root"],avatar:["avatar"]},D,a)},T=S("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(s,a)=>l({[`& .${_.avatar}`]:a.avatar},a.root)})(({theme:s,ownerState:a})=>{const r=a.spacing&&N[a.spacing]!==void 0?N[a.spacing]:-a.spacing;return{[`& .${L.root}`]:{border:`2px solid ${(s.vars||s).palette.background.default}`,boxSizing:"content-box",marginLeft:r??-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}}),W=n.forwardRef(function(a,r){var A;const i=U({props:a,name:"MuiAvatarGroup"}),{children:C,className:b,component:g="div",componentsProps:j={},max:c=5,renderSurplus:h,slotProps:M={},spacing:$="medium",total:E,variant:p="circular"}=i,R=V(i,F);let t=c<2?2:c;const f=l({},i,{max:c,spacing:$,component:g,variant:p}),u=I(f),v=n.Children.toArray(C).filter(o=>n.isValidElement(o)),e=E||v.length;e===t&&(t+=1),t=Math.min(e+1,t);const P=Math.min(v.length,t-1),d=Math.max(e-t,e-P,0),y=h?h(d):`+${d}`,m=(A=M.additionalAvatar)!=null?A:j.additionalAvatar;return G.jsxs(T,l({as:g,ownerState:f,className:x(u.root,b),ref:r},R,{children:[d?G.jsx(k,l({variant:p},m,{className:x(u.avatar,m==null?void 0:m.className),children:y})):null,v.slice(0,P).reverse().map(o=>n.cloneElement(o,{className:x(o.props.className,u.avatar),variant:o.props.variant||p}))]}))}),w=W;export{w as A};
