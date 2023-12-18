import{cm as F,cl as L,am as b,ca as c,D as x,cc as y,cd as C,cM as v,cN as q,a8 as p,ci as k,c9 as $,cj as g}from"./index-a747811c.js";function M(r){return L("MuiFormLabel",r)}const R=F("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),t=R,j=["children","className","color","component","disabled","error","filled","focused","required"],N=r=>{const{classes:e,color:i,focused:s,disabled:d,error:a,filled:l,required:n}=r,u={root:["root",`color${$(i)}`,d&&"disabled",a&&"error",l&&"filled",s&&"focused",n&&"required"],asterisk:["asterisk",a&&"error"]};return g(u,M,e)},S=b("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:r},e)=>c({},e.root,r.color==="secondary"&&e.colorSecondary,r.filled&&e.filled)})(({theme:r,ownerState:e})=>c({color:(r.vars||r).palette.text.secondary},r.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${t.focused}`]:{color:(r.vars||r).palette[e.color].main},[`&.${t.disabled}`]:{color:(r.vars||r).palette.text.disabled},[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}})),U=b("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(r,e)=>e.asterisk})(({theme:r})=>({[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}})),w=x.forwardRef(function(e,i){const s=y({props:e,name:"MuiFormLabel"}),{children:d,className:a,component:l="label"}=s,n=C(s,j),u=v(),o=q({props:s,muiFormControl:u,states:["color","required","focused","disabled","error","filled"]}),m=c({},s,{color:o.color||"primary",component:l,disabled:o.disabled,error:o.error,filled:o.filled,focused:o.focused,required:o.required}),f=N(m);return p.jsxs(S,c({as:l,ownerState:m,className:k(f.root,a),ref:i},n,{children:[d,o.required&&p.jsxs(U,{ownerState:m,"aria-hidden":!0,className:f.asterisk,children:[" ","*"]})]}))}),A=w;export{A as F,t as f};