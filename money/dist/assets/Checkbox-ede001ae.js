import{a9 as G,aa as J,ab as y,aj as K,ag as n,dg as O,D as B,ae as U,b$ as X,dA as Y,af as i,ah as _,ak as x,ai as H,bk as S,dQ as F,am as Z,ad as ee,dR as oe}from"./index-02adb112.js";function te(e){return G("PrivateSwitchBase",e)}J("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const se=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ce=e=>{const{classes:o,checked:t,disabled:r,edge:s}=e,c={root:["root",t&&"checked",r&&"disabled",s&&`edge${x(s)}`],input:["input"]};return H(c,te,o)},ae=y(K)(({ownerState:e})=>n({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ne=y("input",{shouldForwardProp:O})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ie=B.forwardRef(function(o,t){const{autoFocus:r,checked:s,checkedIcon:c,className:u,defaultChecked:C,disabled:I,disableFocusRipple:d=!1,edge:b=!1,icon:z,id:p,inputProps:$,inputRef:P,name:g,onBlur:h,onChange:f,onFocus:k,readOnly:L,required:M=!1,tabIndex:V,type:v,value:j}=o,q=U(o,se),[w,A]=X({controlled:s,default:!!C,name:"SwitchBase",state:"checked"}),l=Y(),D=a=>{k&&k(a),l&&l.onFocus&&l.onFocus(a)},Q=a=>{h&&h(a),l&&l.onBlur&&l.onBlur(a)},T=a=>{if(a.nativeEvent.defaultPrevented)return;const E=a.target.checked;A(E),f&&f(a,E)};let m=I;l&&typeof m>"u"&&(m=l.disabled);const W=v==="checkbox"||v==="radio",R=n({},o,{checked:w,disabled:m,disableFocusRipple:d,edge:b}),N=ce(R);return i.jsxs(ae,n({component:"span",className:_(N.root,u),centerRipple:!0,focusRipple:!d,disabled:m,tabIndex:null,role:void 0,onFocus:D,onBlur:Q,ownerState:R,ref:t},q,{children:[i.jsx(ne,n({autoFocus:r,checked:s,defaultChecked:C,className:N.input,disabled:m,id:W?p:void 0,name:g,onChange:T,readOnly:L,ref:P,required:M,ownerState:R,tabIndex:V,type:v},v==="checkbox"&&j===void 0?{}:{value:j},$)),w?c:z]}))}),re=ie,le=S(i.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),de=S(i.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),ue=S(i.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),pe=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],he=e=>{const{classes:o,indeterminate:t,color:r,size:s}=e,c={root:["root",t&&"indeterminate",`color${x(r)}`,`size${x(s)}`]},u=H(c,oe,o);return n({},o,u)},fe=y(re,{shouldForwardProp:e=>O(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${x(t.size)}`],t.color!=="default"&&o[`color${x(t.color)}`]]}})(({theme:e,ownerState:o})=>n({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Z(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${F.checked}, &.${F.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${F.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ke=i.jsx(de,{}),me=i.jsx(le,{}),xe=i.jsx(ue,{}),Ce=B.forwardRef(function(o,t){var r,s;const c=ee({props:o,name:"MuiCheckbox"}),{checkedIcon:u=ke,color:C="primary",icon:I=me,indeterminate:d=!1,indeterminateIcon:b=xe,inputProps:z,size:p="medium",className:$}=c,P=U(c,pe),g=d?b:I,h=d?b:u,f=n({},c,{color:C,indeterminate:d,size:p}),k=he(f);return i.jsx(fe,n({type:"checkbox",inputProps:n({"data-indeterminate":d},z),icon:B.cloneElement(g,{fontSize:(r=g.props.fontSize)!=null?r:p}),checkedIcon:B.cloneElement(h,{fontSize:(s=h.props.fontSize)!=null?s:p}),ownerState:f,ref:t,className:_(k.root,$)},P,{classes:k}))}),ge=Ce;export{ge as C,re as S};
