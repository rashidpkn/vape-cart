import{aJ as S,aY as l,c2 as _,cN as L,F as n,ck as k,cg as U,j as G,bb as V,ch as x,cj as z,cO as D}from"./index-59628575.js";const F=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],N={small:-16,medium:null},I=s=>{const{classes:a}=s;return z({root:["root"],avatar:["avatar"]},D,a)},J=S("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(s,a)=>l({[`& .${_.avatar}`]:a.avatar},a.root)})(({theme:s,ownerState:a})=>{const r=a.spacing&&N[a.spacing]!==void 0?N[a.spacing]:-a.spacing;return{[`& .${L.root}`]:{border:`2px solid ${(s.vars||s).palette.background.default}`,boxSizing:"content-box",marginLeft:r??-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}}),O=n.forwardRef(function(a,r){var A;const c=k({props:a,name:"MuiAvatarGroup"}),{children:b,className:C,component:g="div",componentsProps:j={},max:i=5,renderSurplus:h,slotProps:M={},spacing:$="medium",total:E,variant:p="circular"}=c,R=U(c,F);let t=i<2?2:i;const f=l({},c,{max:i,spacing:$,component:g,variant:p}),v=I(f),m=n.Children.toArray(b).filter(o=>n.isValidElement(o)),e=E||m.length;e===t&&(t+=1),t=Math.min(e+1,t);const P=Math.min(m.length,t-1),u=Math.max(e-t,e-P,0),y=h?h(u):`+${u}`,d=(A=M.additionalAvatar)!=null?A:j.additionalAvatar;return G.jsxs(J,l({as:g,ownerState:f,className:x(v.root,C),ref:r},R,{children:[u?G.jsx(V,l({variant:p},d,{className:x(v.avatar,d==null?void 0:d.className),children:y})):null,m.slice(0,P).reverse().map(o=>n.cloneElement(o,{className:x(o.props.className,v.avatar),variant:o.props.variant||p}))]}))}),W=O;export{W as A};
