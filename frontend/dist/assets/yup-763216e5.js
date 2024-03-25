import{ap as $,aP as R,dx as c,aj as p,ay as h,F as j,dy as V,aI as W,ar as z,as as U,cr as F,j as I,au as M,dz as N}from"./index-274325b3.js";import{C as O}from"./CircularProgress-fac51620.js";import{s as L,t as P,v as _}from"./form-provider-a11e6a59.js";const k=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],G=n=>{const{loading:o,loadingPosition:t,classes:a}=n,e={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${h(t)}`],endIcon:[o&&`endIconLoading${h(t)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${h(t)}`]},i=M(e,N,a);return p({},a,i)},T=n=>n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"&&n!=="classes",Y=$(R,{shouldForwardProp:n=>T(n)||n==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,o)=>[o.root,o.startIconLoadingStart&&{[`& .${c.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${c.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:n,theme:o})=>p({[`& .${c.startIconLoadingStart}, & .${c.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},n.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${c.loading}`]:{color:"transparent"}},n.loadingPosition==="start"&&n.fullWidth&&{[`& .${c.startIconLoadingStart}, & .${c.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},n.loadingPosition==="end"&&n.fullWidth&&{[`& .${c.startIconLoadingStart}, & .${c.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),q=$("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,o)=>{const{ownerState:t}=n;return[o.loadingIndicator,o[`loadingIndicator${h(t.loadingPosition)}`]]}})(({theme:n,ownerState:o})=>p({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),A=j.forwardRef(function(o,t){const a=j.useContext(V),e=W(a,o),i=z({props:e,name:"MuiLoadingButton"}),{children:s,disabled:u=!1,id:l,loading:r=!1,loadingIndicator:d,loadingPosition:v="center",variant:g="text"}=i,C=U(i,k),m=F(l),y=d??I.jsx(O,{"aria-labelledby":m,color:"inherit",size:16}),f=p({},i,{disabled:u,loading:r,loadingIndicator:y,loadingPosition:v,variant:g}),x=G(f),b=r?I.jsx(q,{className:x.loadingIndicator,ownerState:f,children:y}):null;return I.jsxs(Y,p({disabled:u||r,id:m,ref:t},C,{variant:g,classes:x,ownerState:f,children:[f.loadingPosition==="end"?s:b,f.loadingPosition==="end"?b:s]}))}),X=A;var B=function(n,o,t){if(n&&"reportValidity"in n){var a=L(t,o);n.setCustomValidity(a&&a.message||""),n.reportValidity()}},E=function(n,o){var t=function(e){var i=o.fields[e];i&&i.ref&&"reportValidity"in i.ref?B(i.ref,e,n):i.refs&&i.refs.forEach(function(s){return B(s,e,n)})};for(var a in o.fields)t(a)},D=function(n,o){o.shouldUseNativeValidation&&E(n,o);var t={};for(var a in n){var e=L(o.fields,a),i=Object.assign(n[a]||{},{ref:e&&e.ref});if(H(o.names||Object.keys(n),a)){var s=Object.assign({},L(t,a));P(s,"root",i),P(t,a,s)}else P(t,a,i)}return t},H=function(n,o){return n.some(function(t){return t.startsWith(o+".")})};function Z(n,o,t){return o===void 0&&(o={}),t===void 0&&(t={}),function(a,e,i){try{return Promise.resolve(function(s,u){try{var l=(o.context,Promise.resolve(n[t.mode==="sync"?"validateSync":"validate"](a,Object.assign({abortEarly:!1},o,{context:e}))).then(function(r){return i.shouldUseNativeValidation&&E({},i),{values:t.raw?a:r,errors:{}}}))}catch(r){return u(r)}return l&&l.then?l.then(void 0,u):l}(0,function(s){if(!s.inner)throw s;return{values:{},errors:D((u=s,l=!i.shouldUseNativeValidation&&i.criteriaMode==="all",(u.inner||[]).reduce(function(r,d){if(r[d.path]||(r[d.path]={message:d.message,type:d.type}),l){var v=r[d.path].types,g=v&&v[d.type];r[d.path]=_(d.path,l,r,d.type,g?[].concat(g,d.message):d.message)}return r},{})),i)};var u,l}))}catch(s){return Promise.reject(s)}}}export{X as L,Z as o};
