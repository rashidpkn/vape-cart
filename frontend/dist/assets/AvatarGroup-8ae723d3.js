import{an as S,cd as o,cE as w,cF as D,aD as k,D as i,cf as z,cg as U,a9 as y,cl as f,cm as F,cG as I}from"./index-95441d98.js";const T=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],N={small:-16,medium:null},V=a=>{const{classes:t}=a;return F({root:["root"],avatar:["avatar"]},I,t)},W=S("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(a,t)=>o({[`& .${w.avatar}`]:t.avatar},t.root)})(({theme:a})=>({[`& .${D.root}`]:{border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"})),q=S(k,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:(a,t)=>t.avatar})(({theme:a})=>({border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}})),B=i.forwardRef(function(t,g){var h;const c=z({props:t,name:"MuiAvatarGroup"}),{children:C,className:L,component:G="div",componentsProps:M={},max:p=5,renderSurplus:P,slotProps:$={},spacing:e="medium",total:E,variant:v="circular"}=c,R=U(c,T);let s=p<2?2:p;const d=o({},c,{max:p,spacing:e,component:G,variant:v}),m=V(d),u=i.Children.toArray(C).filter(r=>i.isValidElement(r)),l=E||u.length;l===s&&(s+=1),s=Math.min(l+1,s);const x=Math.min(u.length,s-1),A=Math.max(l-s,l-x,0),j=P?P(A):`+${A}`,b=e&&N[e]!==void 0?N[e]:-e,n=(h=$.additionalAvatar)!=null?h:M.additionalAvatar;return y.jsxs(W,o({as:G,ownerState:d,className:f(m.root,L),ref:g},R,{children:[A?y.jsx(q,o({ownerState:d,variant:v},n,{className:f(m.avatar,n==null?void 0:n.className),style:o({marginLeft:b},n==null?void 0:n.style),children:j})):null,u.slice(0,x).reverse().map((r,_)=>i.cloneElement(r,{className:f(r.props.className,m.avatar),style:o({marginLeft:_===x-1?void 0:b},r.props.style),variant:r.props.variant||v}))]}))}),J=B;export{J as A};