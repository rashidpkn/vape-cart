import{ab as S,ag as o,db as w,dc as k,aR as z,D as i,ad as D,ae as U,af as y,ah as f,ai as I,dd as T}from"./index-b7be9608.js";const V=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],N={small:-16,medium:null},W=a=>{const{classes:t}=a;return I({root:["root"],avatar:["avatar"]},T,t)},q=S("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(a,t)=>o({[`& .${w.avatar}`]:t.avatar},t.root)})(({theme:a})=>({[`& .${k.root}`]:{border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"})),B=S(z,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:(a,t)=>t.avatar})(({theme:a})=>({border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}})),F=i.forwardRef(function(t,g){var h;const c=D({props:t,name:"MuiAvatarGroup"}),{children:C,className:L,component:b="div",componentsProps:M={},max:p=5,renderSurplus:G,slotProps:R={},spacing:e="medium",total:$,variant:d="circular"}=c,E=U(c,V);let s=p<2?2:p;const v=o({},c,{max:p,spacing:e,component:b,variant:d}),m=W(v),u=i.Children.toArray(C).filter(r=>i.isValidElement(r)),l=$||u.length;l===s&&(s+=1),s=Math.min(l+1,s);const x=Math.min(u.length,s-1),A=Math.max(l-s,l-x,0),j=G?G(A):`+${A}`,P=e&&N[e]!==void 0?N[e]:-e,n=(h=R.additionalAvatar)!=null?h:M.additionalAvatar;return y.jsxs(q,o({as:b,ownerState:v,className:f(m.root,L),ref:g},E,{children:[A?y.jsx(B,o({ownerState:v,variant:d},n,{className:f(m.avatar,n==null?void 0:n.className),style:o({marginLeft:P},n==null?void 0:n.style),children:j})):null,u.slice(0,x).reverse().map((r,_)=>i.cloneElement(r,{className:f(r.props.className,m.avatar),style:o({marginLeft:_===x-1?void 0:P},r.props.style),variant:r.props.variant||d}))]}))}),J=F;export{J as A};
