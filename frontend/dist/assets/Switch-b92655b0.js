import{an as d,cd as r,ce as c,cq as t,ap as w,cr as k,cs as x,D as f,cg as C,ch as S,a9 as n,cm as m,cn as y,ct as z}from"./index-b8fc31ad.js";import{S as R}from"./SwitchBase-6940534c.js";const B=["className","color","edge","size","sx"],j=a=>{const{classes:o,edge:s,size:i,color:p,checked:u,disabled:h}=a,g={root:["root",s&&`edge${r(s)}`,`size${r(i)}`],switchBase:["switchBase",`color${r(p)}`,u&&"checked",h&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},v=y(g,z,o);return c({},o,v)},T=d("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:s}=a;return[o.root,s.edge&&o[`edge${r(s.edge)}`],o[`size${r(s.size)}`]]}})(({ownerState:a})=>c({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},a.edge==="start"&&{marginLeft:-8},a.edge==="end"&&{marginRight:-8},a.size==="small"&&{width:40,height:24,padding:7,[`& .${t.thumb}`]:{width:16,height:16},[`& .${t.switchBase}`]:{padding:4,[`&.${t.checked}`]:{transform:"translateX(16px)"}}})),M=d(R,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(a,o)=>{const{ownerState:s}=a;return[o.switchBase,{[`& .${t.input}`]:o.input},s.color!=="default"&&o[`color${r(s.color)}`]]}})(({theme:a})=>({position:"absolute",top:0,left:0,zIndex:1,color:a.vars?a.vars.palette.Switch.defaultColor:`${a.palette.mode==="light"?a.palette.common.white:a.palette.grey[300]}`,transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest}),[`&.${t.checked}`]:{transform:"translateX(20px)"},[`&.${t.disabled}`]:{color:a.vars?a.vars.palette.Switch.defaultDisabledColor:`${a.palette.mode==="light"?a.palette.grey[100]:a.palette.grey[600]}`},[`&.${t.checked} + .${t.track}`]:{opacity:.5},[`&.${t.disabled} + .${t.track}`]:{opacity:a.vars?a.vars.opacity.switchTrackDisabled:`${a.palette.mode==="light"?.12:.2}`},[`& .${t.input}`]:{left:"-100%",width:"300%"}}),({theme:a,ownerState:o})=>c({"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.activeChannel} / ${a.vars.palette.action.hoverOpacity})`:w(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${t.checked}`]:{color:(a.vars||a).palette[o.color].main,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:w(a.palette[o.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${t.disabled}`]:{color:a.vars?a.vars.palette.Switch[`${o.color}DisabledColor`]:`${a.palette.mode==="light"?k(a.palette[o.color].main,.62):x(a.palette[o.color].main,.55)}`}},[`&.${t.checked} + .${t.track}`]:{backgroundColor:(a.vars||a).palette[o.color].main}})),N=d("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(a,o)=>o.track})(({theme:a})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:a.transitions.create(["opacity","background-color"],{duration:a.transitions.duration.shortest}),backgroundColor:a.vars?a.vars.palette.common.onBackground:`${a.palette.mode==="light"?a.palette.common.black:a.palette.common.white}`,opacity:a.vars?a.vars.opacity.switchTrack:`${a.palette.mode==="light"?.38:.3}`})),D=d("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(a,o)=>o.thumb})(({theme:a})=>({boxShadow:(a.vars||a).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),I=f.forwardRef(function(o,s){const i=C({props:o,name:"MuiSwitch"}),{className:p,color:u="primary",edge:h=!1,size:g="medium",sx:v}=i,$=S(i,B),e=c({},i,{color:u,edge:h,size:g}),l=j(e),b=n.jsx(D,{className:l.thumb,ownerState:e});return n.jsxs(T,{className:m(l.root,p),sx:v,ownerState:e,children:[n.jsx(M,c({type:"checkbox",icon:b,checkedIcon:b,ref:s,ownerState:e},$,{classes:c({},l,{root:l.switchBase})})),n.jsx(N,{className:l.track,ownerState:e})]})}),A=I;export{A as S};
