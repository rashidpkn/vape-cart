import{an as S,ce as o,cF as w,cG as D,aD as k,D as i,cg as z,ch as U,a9 as y,cm as f,cn as F,cH as H}from"./index-b8fc31ad.js";const I=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],N={small:-16,medium:null},T=a=>{const{classes:t}=a;return F({root:["root"],avatar:["avatar"]},H,t)},V=S("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(a,t)=>o({[`& .${w.avatar}`]:t.avatar},t.root)})(({theme:a})=>({[`& .${D.root}`]:{border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"})),W=S(k,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:(a,t)=>t.avatar})(({theme:a})=>({border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}})),q=i.forwardRef(function(t,g){var h;const c=z({props:t,name:"MuiAvatarGroup"}),{children:C,className:L,component:G="div",componentsProps:M={},max:p=5,renderSurplus:P,slotProps:$={},spacing:e="medium",total:R,variant:v="circular"}=c,E=U(c,I);let s=p<2?2:p;const d=o({},c,{max:p,spacing:e,component:G,variant:v}),m=T(d),u=i.Children.toArray(C).filter(r=>i.isValidElement(r)),l=R||u.length;l===s&&(s+=1),s=Math.min(l+1,s);const x=Math.min(u.length,s-1),A=Math.max(l-s,l-x,0),j=P?P(A):`+${A}`,b=e&&N[e]!==void 0?N[e]:-e,n=(h=$.additionalAvatar)!=null?h:M.additionalAvatar;return y.jsxs(V,o({as:G,ownerState:d,className:f(m.root,L),ref:g},E,{children:[A?y.jsx(W,o({ownerState:d,variant:v},n,{className:f(m.avatar,n==null?void 0:n.className),style:o({marginLeft:b},n==null?void 0:n.style),children:j})):null,u.slice(0,x).reverse().map((r,_)=>i.cloneElement(r,{className:f(r.props.className,m.avatar),style:o({marginLeft:_===x-1?void 0:b},r.props.style),variant:r.props.variant||v}))]}))}),J=q;export{J as A};
