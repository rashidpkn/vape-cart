import{cp as D,cq as Q,am as F,bi as W,ce as d,D as A,ch as G,cj as H,cQ as J,a8 as x,cm as K,cd as M,cn as T}from"./index-bf334511.js";function V(e){return D("PrivateSwitchBase",e)}Q("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const X=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Y=e=>{const{classes:a,checked:i,disabled:l,edge:n}=e,r={root:["root",i&&"checked",l&&"disabled",n&&`edge${M(n)}`],input:["input"]};return T(r,V,a)},Z=F(W)(({ownerState:e})=>d({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ee=F("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),se=A.forwardRef(function(a,i){const{autoFocus:l,checked:n,checkedIcon:r,className:y,defaultChecked:h,disabled:w,disableFocusRipple:p=!1,edge:S=!1,icon:R,id:I,inputProps:P,inputRef:j,name:q,onBlur:f,onChange:b,onFocus:g,readOnly:z,required:E=!1,tabIndex:N,type:c,value:m}=a,U=G(a,X),[k,v]=H({controlled:n,default:!!h,name:"SwitchBase",state:"checked"}),t=J(),L=s=>{g&&g(s),t&&t.onFocus&&t.onFocus(s)},O=s=>{f&&f(s),t&&t.onBlur&&t.onBlur(s)},_=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;v(C),b&&b(s,C)};let o=w;t&&typeof o>"u"&&(o=t.disabled);const $=c==="checkbox"||c==="radio",u=d({},a,{checked:k,disabled:o,disableFocusRipple:p,edge:S}),B=Y(u);return x.jsxs(Z,d({component:"span",className:K(B.root,y),centerRipple:!0,focusRipple:!p,disabled:o,tabIndex:null,role:void 0,onFocus:L,onBlur:O,ownerState:u,ref:i},U,{children:[x.jsx(ee,d({autoFocus:l,checked:n,defaultChecked:h,className:B.input,disabled:o,id:$?I:void 0,name:q,onChange:_,readOnly:z,ref:j,required:E,ownerState:u,tabIndex:N,type:c},c==="checkbox"&&m===void 0?{}:{value:m},P)),k?r:R]}))}),ae=se;export{ae as S};