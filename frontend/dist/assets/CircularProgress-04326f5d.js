import{aJ as N,aK as F,dF as D,aC as v,aL as n,aO as o,dG as M,F as U,aM as w,aN as z,j as g,aP as E,aQ as I}from"./index-f4c557bd.js";function K(r){return N("MuiCircularProgress",r)}F("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const G=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,S,b,$;const a=44,L=D(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),W=D(S||(S=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),B=r=>{const{classes:e,variant:s,color:t,disableShrink:d}=r,u={root:["root",s,`color${n(t)}`],svg:["svg"],circle:["circle",`circle${n(s)}`,d&&"circleDisableShrink"]};return I(u,K,e)},J=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${n(s.color)}`]]}})(({ownerState:r,theme:e})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&M(b||(b=l`
      animation: ${0} 1.4s linear infinite;
    `),L)),O=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),Q=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${n(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&M($||($=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),W)),T=U.forwardRef(function(e,s){const t=w({props:e,name:"MuiCircularProgress"}),{className:d,color:u="primary",disableShrink:R=!1,size:m=40,style:_,thickness:i=3.6,value:h=0,variant:k="indeterminate"}=t,j=z(t,G),c=o({},t,{color:u,disableShrink:R,size:m,thickness:i,value:h,variant:k}),p=B(c),f={},x={},C={};if(k==="determinate"){const y=2*Math.PI*((a-i)/2);f.strokeDasharray=y.toFixed(3),C["aria-valuenow"]=Math.round(h),f.strokeDashoffset=`${((100-h)/100*y).toFixed(3)}px`,x.transform="rotate(-90deg)"}return g.jsx(J,o({className:E(p.root,d),style:o({width:m,height:m},x,_),ownerState:c,ref:s,role:"progressbar"},C,j,{children:g.jsx(O,{className:p.svg,ownerState:c,viewBox:`${a/2} ${a/2} ${a} ${a}`,children:g.jsx(Q,{className:p.circle,style:f,ownerState:c,cx:a,cy:a,r:(a-i)/2,fill:"none",strokeWidth:i})})}))}),Z=T;export{Z as C};
