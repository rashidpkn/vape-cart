import{cp as T,cq as _,am as $,ce as c,cd as P,D as s,cg as I,ch as w,cW as F,cX as X,cY as j,a8 as A,cZ as Y,cm as Z,cn as k}from"./index-dca3a811.js";function G(e){return T("MuiFormControl",e)}_("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const H=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],J=e=>{const{classes:o,margin:a,fullWidth:n}=e,r={root:["root",a!=="none"&&`margin${P(a)}`,n&&"fullWidth"]};return k(r,G,o)},K=$("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},o)=>c({},o.root,o[`margin${P(e.margin)}`],e.fullWidth&&o.fullWidth)})(({ownerState:e})=>c({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),O=s.forwardRef(function(o,a){const n=I({props:o,name:"MuiFormControl"}),{children:r,className:U,color:d="primary",component:x="div",disabled:i=!1,error:u=!1,focused:v,fullWidth:m=!1,hiddenLabel:f=!1,margin:q="none",required:p=!1,size:g="medium",variant:h="outlined"}=n,z=w(n,H),W=c({},n,{color:d,component:x,disabled:i,error:u,fullWidth:m,hiddenLabel:f,margin:q,required:p,size:g,variant:h}),B=J(W),[S,D]=s.useState(()=>{let l=!1;return r&&s.Children.forEach(r,t=>{if(!F(t,["Input","Select"]))return;const R=F(t,["Select"])?t.props.input:t;R&&X(R.props)&&(l=!0)}),l}),[b,y]=s.useState(()=>{let l=!1;return r&&s.Children.forEach(r,t=>{F(t,["Input","Select"])&&(j(t.props,!0)||j(t.props.inputProps,!0))&&(l=!0)}),l}),[E,C]=s.useState(!1);i&&E&&C(!1);const M=v!==void 0&&!i?v:E;let N;const L=s.useMemo(()=>({adornedStart:S,setAdornedStart:D,color:d,disabled:i,error:u,filled:b,focused:M,fullWidth:m,hiddenLabel:f,size:g,onBlur:()=>{C(!1)},onEmpty:()=>{y(!1)},onFilled:()=>{y(!0)},onFocus:()=>{C(!0)},registerEffect:N,required:p,variant:h}),[S,d,i,u,b,M,m,f,N,p,g,h]);return A.jsx(Y.Provider,{value:L,children:A.jsx(K,c({as:x,ownerState:W,className:Z(B.root,U),ref:a},z,{children:r}))})}),V=O;export{V as F};
