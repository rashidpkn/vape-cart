import{v as e,a as r}from"./transition-bee6630b.js";import{aC as h,aL as l,aO as d,eg as n,eh as k,bo as w,d0 as m,d1 as f,F as C,aM as S,aN as R,j as y,aP as z,aQ as B,ei as O}from"./index-b8354e19.js";const U=t=>{const a=(t==null?void 0:t.distance)||120,i=t==null?void 0:t.durationIn,o=t==null?void 0:t.durationOut,s=t==null?void 0:t.easeIn,c=t==null?void 0:t.easeOut;return{in:{initial:{opacity:0},animate:{opacity:1,transition:e},exit:{opacity:0,transition:r}},inUp:{initial:{y:a,opacity:0},animate:{y:0,opacity:1,transition:e({durationIn:i,easeIn:s})},exit:{y:a,opacity:0,transition:r({durationOut:o,easeOut:c})}},inDown:{initial:{y:-a,opacity:0},animate:{y:0,opacity:1,transition:e({durationIn:i,easeIn:s})},exit:{y:-a,opacity:0,transition:r({durationOut:o,easeOut:c})}},inLeft:{initial:{x:-a,opacity:0},animate:{x:0,opacity:1,transition:e({durationIn:i,easeIn:s})},exit:{x:-a,opacity:0,transition:r({durationOut:o,easeOut:c})}},inRight:{initial:{x:a,opacity:0},animate:{x:0,opacity:1,transition:e({durationIn:i,easeIn:s})},exit:{x:a,opacity:0,transition:r({durationOut:o,easeOut:c})}},out:{initial:{opacity:1},animate:{opacity:0,transition:e({durationIn:i,easeIn:s})},exit:{opacity:1,transition:r({durationOut:o,easeOut:c})}},outUp:{initial:{y:0,opacity:1},animate:{y:-a,opacity:0,transition:e({durationIn:i,easeIn:s})},exit:{y:0,opacity:1,transition:r({durationOut:o,easeOut:c})}},outDown:{initial:{y:0,opacity:1},animate:{y:a,opacity:0,transition:e({durationIn:i,easeIn:s})},exit:{y:0,opacity:1,transition:r({durationOut:o,easeOut:c})}},outLeft:{initial:{x:0,opacity:1},animate:{x:-a,opacity:0,transition:e({durationIn:i,easeIn:s})},exit:{x:0,opacity:1,transition:r({durationOut:o,easeOut:c})}},outRight:{initial:{x:0,opacity:1},animate:{x:a,opacity:0,transition:e({durationIn:i,easeIn:s})},exit:{x:0,opacity:1,transition:r({durationOut:o,easeOut:c})}}}},T=["className","color","edge","size","sx"],j=t=>{const{classes:a,edge:i,size:o,color:s,checked:c,disabled:x}=t,g={root:["root",i&&`edge${l(i)}`,`size${l(o)}`],switchBase:["switchBase",`color${l(s)}`,c&&"checked",x&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},v=B(g,O,a);return d({},a,v)},I=h("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:i}=t;return[a.root,i.edge&&a[`edge${l(i.edge)}`],a[`size${l(i.size)}`]]}})(({ownerState:t})=>d({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${n.thumb}`]:{width:16,height:16},[`& .${n.switchBase}`]:{padding:4,[`&.${n.checked}`]:{transform:"translateX(16px)"}}})),M=h(k,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,a)=>{const{ownerState:i}=t;return[a.switchBase,{[`& .${n.input}`]:a.input},i.color!=="default"&&a[`color${l(i.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${n.checked}`]:{transform:"translateX(20px)"},[`&.${n.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${n.checked} + .${n.track}`]:{opacity:.5},[`&.${n.disabled} + .${n.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${n.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:a})=>d({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:w(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.color!=="default"&&{[`&.${n.checked}`]:{color:(t.vars||t).palette[a.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[a.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:w(t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${a.color}DisabledColor`]:`${t.palette.mode==="light"?m(t.palette[a.color].main,.62):f(t.palette[a.color].main,.55)}`}},[`&.${n.checked} + .${n.track}`]:{backgroundColor:(t.vars||t).palette[a.color].main}})),N=h("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,a)=>a.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),_=h("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,a)=>a.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),D=C.forwardRef(function(a,i){const o=S({props:a,name:"MuiSwitch"}),{className:s,color:c="primary",edge:x=!1,size:g="medium",sx:v}=o,$=R(o,T),u=d({},o,{color:c,edge:x,size:g}),p=j(u),b=y.jsx(_,{className:p.thumb,ownerState:u});return y.jsxs(I,{className:z(p.root,s),sx:v,ownerState:u,children:[y.jsx(M,d({type:"checkbox",icon:b,checkedIcon:b,ref:i,ownerState:u},$,{classes:d({},p,{root:p.switchBase})})),y.jsx(N,{className:p.track,ownerState:u})]})}),P=D;export{P as S,U as v};
