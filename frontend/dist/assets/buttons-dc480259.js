import{D as g,an as ii,ce as $,eW as d,ap as ni,cg as ei,ch as oi,a9 as i,dh as ti,eX as si,cm as ri,cd as j,cn as ai,eY as li,aI as C,ai as o,ac as Y,eR as I,af as t,ae as h,ay as ci,eZ as di,cv as ui,ak as q,ah as hi,av as xi,aw as ji,aL as pi}from"./index-b8fc31ad.js";import{C as mi}from"./custom-breadcrumbs-e0a81333.js";import{C as s}from"./component-block-0e573c3f.js";import{M as P}from"./Masonry-15a87f1c.js";import{T,a as u}from"./ToggleButtonGroup-81f48258.js";import{L as O}from"./LoadingButton-7b792864.js";import{F as r}from"./Fab-741da235.js";import"./CircularProgress-f63dec83.js";function gi(n){return g.Children.toArray(n).filter(e=>g.isValidElement(e))}const vi=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],fi=(n,e)=>{const{ownerState:a}=n;return[{[`& .${d.grouped}`]:e.grouped},{[`& .${d.grouped}`]:e[`grouped${j(a.orientation)}`]},{[`& .${d.grouped}`]:e[`grouped${j(a.variant)}`]},{[`& .${d.grouped}`]:e[`grouped${j(a.variant)}${j(a.orientation)}`]},{[`& .${d.grouped}`]:e[`grouped${j(a.variant)}${j(a.color)}`]},{[`& .${d.firstButton}`]:e.firstButton},{[`& .${d.lastButton}`]:e.lastButton},{[`& .${d.middleButton}`]:e.middleButton},e.root,e[a.variant],a.disableElevation===!0&&e.disableElevation,a.fullWidth&&e.fullWidth,a.orientation==="vertical"&&e.vertical]},bi=n=>{const{classes:e,color:a,disabled:l,disableElevation:f,fullWidth:L,orientation:x,variant:m}=n,b={root:["root",m,x==="vertical"&&"vertical",L&&"fullWidth",f&&"disableElevation"],grouped:["grouped",`grouped${j(x)}`,`grouped${j(m)}`,`grouped${j(m)}${j(x)}`,`grouped${j(m)}${j(a)}`,l&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return ai(b,li,e)},Bi=ii("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:fi})(({theme:n,ownerState:e})=>$({display:"inline-flex",borderRadius:(n.vars||n).shape.borderRadius},e.variant==="contained"&&{boxShadow:(n.vars||n).shadows[2]},e.disableElevation&&{boxShadow:"none"},e.fullWidth&&{width:"100%"},e.orientation==="vertical"&&{flexDirection:"column"},{[`& .${d.grouped}`]:$({minWidth:40,"&:hover":$({},e.variant==="contained"&&{boxShadow:"none"})},e.variant==="contained"&&{boxShadow:"none"}),[`& .${d.firstButton},& .${d.middleButton}`]:$({},e.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},e.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},e.variant==="text"&&e.orientation==="horizontal"&&{borderRight:n.vars?`1px solid rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${d.disabled}`]:{borderRight:`1px solid ${(n.vars||n).palette.action.disabled}`}},e.variant==="text"&&e.orientation==="vertical"&&{borderBottom:n.vars?`1px solid rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${d.disabled}`]:{borderBottom:`1px solid ${(n.vars||n).palette.action.disabled}`}},e.variant==="text"&&e.color!=="inherit"&&{borderColor:n.vars?`rgba(${n.vars.palette[e.color].mainChannel} / 0.5)`:ni(n.palette[e.color].main,.5)},e.variant==="outlined"&&e.orientation==="horizontal"&&{borderRightColor:"transparent"},e.variant==="outlined"&&e.orientation==="vertical"&&{borderBottomColor:"transparent"},e.variant==="contained"&&e.orientation==="horizontal"&&{borderRight:`1px solid ${(n.vars||n).palette.grey[400]}`,[`&.${d.disabled}`]:{borderRight:`1px solid ${(n.vars||n).palette.action.disabled}`}},e.variant==="contained"&&e.orientation==="vertical"&&{borderBottom:`1px solid ${(n.vars||n).palette.grey[400]}`,[`&.${d.disabled}`]:{borderBottom:`1px solid ${(n.vars||n).palette.action.disabled}`}},e.variant==="contained"&&e.color!=="inherit"&&{borderColor:(n.vars||n).palette[e.color].dark},{"&:hover":$({},e.variant==="outlined"&&e.orientation==="horizontal"&&{borderRightColor:"currentColor"},e.variant==="outlined"&&e.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${d.lastButton},& .${d.middleButton}`]:$({},e.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},e.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},e.variant==="outlined"&&e.orientation==="horizontal"&&{marginLeft:-1},e.variant==="outlined"&&e.orientation==="vertical"&&{marginTop:-1})})),Ci=g.forwardRef(function(e,a){const l=ei({props:e,name:"MuiButtonGroup"}),{children:f,className:L,color:x="primary",component:m="div",disabled:b=!1,disableElevation:W=!1,disableFocusRipple:k=!1,disableRipple:w=!1,fullWidth:B=!1,orientation:V="horizontal",size:c="medium",variant:v="outlined"}=l,J=oi(l,vi),N=$({},l,{color:x,component:m,disabled:b,disableElevation:W,disableFocusRipple:k,disableRipple:w,fullWidth:B,orientation:V,size:c,variant:v}),y=bi(N),K=g.useMemo(()=>({className:y.grouped,color:x,disabled:b,disableElevation:W,disableFocusRipple:k,disableRipple:w,fullWidth:B,size:c,variant:v}),[x,b,W,k,w,B,c,v,y.grouped]),S=gi(f),Q=S.length,z=A=>{const G=A===0,Z=A===Q-1;return G&&Z?"":G?y.firstButton:Z?y.lastButton:y.middleButton};return i.jsx(Bi,$({as:m,role:"group",className:ri(y.root,L),ref:a,ownerState:N},J,{children:i.jsx(ti.Provider,{value:K,children:S.map((A,G)=>i.jsx(si.Provider,{value:z(G),children:A},G))})}))}),p=Ci,$i=["inherit","default","primary","secondary","info","success","warning","error"],H=["small","medium","large"];function Ti(){return i.jsxs(P,{columns:2,spacing:3,children:[i.jsxs(s,{title:"Base",children:[i.jsx(C,{color:"inherit",children:i.jsx(o,{icon:"ic:round-access-alarm"})}),i.jsx(C,{children:i.jsx(o,{icon:"ic:round-access-alarm"})}),i.jsx(C,{color:"primary",children:i.jsx(o,{icon:"ic:round-access-alarm"})}),i.jsx(C,{color:"secondary",children:i.jsx(o,{icon:"ic:round-access-alarm"})}),i.jsx(C,{disabled:!0,children:i.jsx(o,{icon:"ic:round-access-alarm"})})]}),i.jsx(s,{title:"Colors",children:$i.map(n=>i.jsx(C,{color:n,children:i.jsx(o,{icon:"ic:round-access-alarm"})},n))}),i.jsx(s,{title:"Sizes",children:H.map(n=>i.jsx(C,{size:n,color:"info",children:i.jsx(o,{icon:"ic:round-access-alarm"})},n))}),i.jsx(s,{title:"With Animate",children:H.map(n=>i.jsx(C,{component:Y.button,whileTap:"tap",whileHover:"hover",variants:n==="small"&&I(1.1,.95)||n==="large"&&I(1.08,.99)||I(),size:n,color:"error",children:i.jsx(o,{fontSize:"inherit",icon:"ic:round-access-alarm"})},n))})]})}const M=["inherit","primary","secondary","success","error","info","warning"],Ri=["small","medium","large"],ki=["contained","outlined","text","soft"];function wi(){return i.jsxs(P,{columns:2,spacing:3,children:[i.jsxs(s,{title:"Contained",children:[M.map(n=>i.jsxs(p,{variant:"contained",color:n,children:[i.jsx(t,{children:"One"}),i.jsx(t,{children:"Two"}),i.jsx(t,{children:"Three"})]},n)),i.jsxs(p,{disabled:!0,variant:"contained",color:"info",children:[i.jsx(t,{children:"One"}),i.jsx(t,{children:"Two"}),i.jsx(t,{children:"Three"})]})]}),i.jsxs(s,{title:"Outlined",children:[M.map(n=>i.jsxs(p,{variant:"outlined",color:n,children:[i.jsx(t,{children:"One"}),i.jsx(t,{children:"Two"}),i.jsx(t,{children:"Three"})]},n)),i.jsxs(p,{disabled:!0,variant:"outlined",color:"info",children:[i.jsx(t,{children:"One"}),i.jsx(t,{children:"Two"}),i.jsx(t,{children:"Three"})]})]}),i.jsxs(s,{title:"Text",children:[M.map(n=>i.jsxs(p,{variant:"text",color:n,children:[i.jsx(t,{children:"One"}),i.jsx(t,{children:"Two"}),i.jsx(t,{children:"Three"})]},n)),i.jsxs(p,{disabled:!0,variant:"text",color:"info",children:[i.jsx(t,{children:"One"}),i.jsx(t,{children:"Two"}),i.jsx(t,{children:"Three"})]})]}),i.jsxs(s,{title:"Soft",children:[M.map(n=>i.jsxs(p,{variant:"soft",color:n,children:[i.jsx(t,{children:"One"}),i.jsx(t,{children:"Two"}),i.jsx(t,{children:"Three"})]},n)),i.jsxs(p,{disabled:!0,variant:"soft",color:"info",children:[i.jsx(t,{children:"One"}),i.jsx(t,{children:"Two"}),i.jsx(t,{children:"Three"})]})]}),i.jsx(s,{title:"Sizes",children:Ri.map(n=>i.jsxs(p,{size:n,variant:"contained",children:[i.jsx(t,{children:"One"}),i.jsx(t,{children:"Two"}),i.jsx(t,{children:"Three"})]},n))}),i.jsxs(s,{title:"Orientation",children:[ki.map(n=>i.jsxs(p,{variant:n,orientation:"vertical",children:[i.jsx(t,{children:"One"}),i.jsx(t,{children:"Two"}),i.jsx(t,{children:"Three"})]},n)),i.jsxs(p,{disabled:!0,variant:"soft",color:"info",orientation:"vertical",children:[i.jsx(t,{children:"One"}),i.jsx(t,{children:"Two"}),i.jsx(t,{children:"Three"})]})]})]})}const U=["standard","primary","secondary","info","success","warning","error"],_=["small","medium","large"];function yi(){const[n,e]=g.useState("left"),[a,l]=g.useState(()=>["bold","italic"]),[f,L]=g.useState("list"),[x,m]=g.useState(!0),b=(c,v)=>{e(v)},W=(c,v)=>{l(v)},k=(c,v)=>{L(v)},w=[i.jsx(u,{value:"list",children:i.jsx(o,{icon:"ic:round-view-list"})},"list"),i.jsx(u,{value:"module",children:i.jsx(o,{icon:"ic:round-view-module"})},"module"),i.jsx(u,{value:"quilt",children:i.jsx(o,{icon:"ic:round-view-quilt"})},"quilt")],B=[i.jsx(u,{value:"left",children:i.jsx(o,{icon:"ic:round-format-align-left"})},"left"),i.jsx(u,{value:"center",children:i.jsx(o,{icon:"ic:round-format-align-center"})},"center"),i.jsx(u,{value:"right",children:i.jsx(o,{icon:"ic:round-format-align-right"})},"right"),i.jsx(u,{value:"justify",disabled:!0,children:i.jsx(o,{icon:"ic:round-format-align-justify"})},"justify")],V=[i.jsx(u,{value:"bold",children:i.jsx(o,{icon:"ic:round-format-bold"})},"bold"),i.jsx(u,{value:"italic",children:i.jsx(o,{icon:"ic:round-format-italic"})},"italic"),i.jsx(u,{value:"underlined",children:i.jsx(o,{icon:"ic:round-format-underlined"})},"underlined"),i.jsxs(u,{value:"color",disabled:!0,children:[i.jsx(o,{icon:"ic:baseline-format-color-fill"}),i.jsx(o,{icon:"ic:baseline-arrow-drop-down"})]},"color")];return i.jsxs(P,{columns:3,spacing:3,children:[i.jsx(s,{title:"Exclusive selection",children:i.jsx(T,{value:n,exclusive:!0,onChange:b,children:B})}),i.jsx(s,{title:"Multiple selection",children:i.jsx(T,{value:a,onChange:W,children:V})}),i.jsxs(s,{title:"Colors",children:[U.map(c=>i.jsx(T,{exclusive:!0,color:c,value:f,onChange:k,children:w},c)),i.jsx(h,{sx:{display:"block",width:1,height:16}}),U.map(c=>i.jsx(u,{color:c,value:"check",selected:x,onChange:()=>{m(!x)},children:i.jsx(o,{icon:"eva:checkmark-fill"})},c))]}),i.jsxs(s,{title:"Vertical & Standalone buttons",children:[i.jsx(T,{orientation:"vertical",value:f,exclusive:!0,onChange:k,children:w}),i.jsx(u,{value:"check",selected:x,onChange:()=>{m(!x)},children:i.jsx(o,{icon:"eva:checkmark-fill"})})]}),i.jsxs(s,{title:"Sizes",children:[_.map(c=>i.jsx(u,{size:c,value:"check",children:i.jsx(o,{icon:"eva:checkmark-fill"})},c)),_.map(c=>i.jsx(T,{exclusive:!0,size:c,value:n,onChange:b,children:B},c))]}),i.jsxs(s,{title:"Disabled",children:[i.jsx(u,{value:"check",disabled:!0,children:i.jsx(o,{icon:"eva:checkmark-fill"})}),i.jsx(u,{value:"check",disabled:!0,selected:!0,children:i.jsx(o,{icon:"eva:checkmark-fill"})}),i.jsx(T,{value:"left",exclusive:!0,children:B}),i.jsx(T,{disabled:!0,value:"left",exclusive:!0,children:B})]})]})}const Oi=["inherit","primary","secondary","info","success","warning","error"],D=["small","medium","large"];function F({variant:n="text"}){return i.jsxs(P,{columns:2,spacing:3,sx:{[`& .${di.root}`]:{textTransform:"capitalize"}},children:[i.jsxs(s,{title:"Base",spacing:1,children:[i.jsx(t,{variant:n,color:"inherit",children:"Default"}),i.jsx(t,{variant:n,color:"primary",children:"Primary"}),i.jsx(t,{variant:n,color:"secondary",children:"Secondary"}),i.jsx(t,{variant:n,disabled:!0,children:"Disabled"}),i.jsx(t,{variant:n,children:"Link"})]}),i.jsx(s,{title:"Colors",spacing:1,children:Oi.map(e=>i.jsx(t,{variant:n,color:e,children:e==="inherit"?"default":e},e))}),i.jsxs(s,{title:"With Icon & Loading",spacing:1,children:[i.jsx(t,{variant:n,color:"error",startIcon:i.jsx(o,{icon:"ic:round-access-alarm"}),children:"Icon Left"}),i.jsx(t,{variant:n,color:"error",endIcon:i.jsx(o,{icon:"ic:round-access-alarm"}),children:"Icon Right"}),i.jsx(O,{loading:!0,variant:n,children:"Submit"}),i.jsx(O,{loading:!0,loadingIndicator:"Loading...",variant:n,children:"Fetch data"}),i.jsx(O,{loading:!0,size:"large",loadingPosition:"start",startIcon:i.jsx(o,{icon:"ic:round-access-alarm"}),variant:n,children:"Start"}),i.jsx(O,{loading:!0,size:"large",loadingPosition:"end",endIcon:i.jsx(o,{icon:"ic:round-access-alarm"}),variant:n,children:"End"})]}),i.jsxs(s,{title:"Sizes",spacing:1,children:[D.map(e=>i.jsx(t,{variant:n,color:"info",size:e,children:e},e)),i.jsx(h,{sx:{width:1,height:16}}),D.map(e=>i.jsx(O,{loading:!0,size:e,loadingPosition:"start",startIcon:i.jsx(o,{icon:"ic:round-access-alarm"}),variant:n,children:e},e)),i.jsx(h,{sx:{width:1,height:16}}),D.map(e=>i.jsx(O,{loading:!0,size:e,loadingPosition:"end",endIcon:i.jsx(o,{icon:"ic:round-access-alarm"}),variant:n,children:e},e))]})]})}F.propTypes={variant:ci.string};const E=["default","inherit","primary","secondary","info","success","warning","error"],R=["small","medium","large"];function Ei(){return i.jsxs(P,{columns:2,spacing:3,sx:{[`& .${ui.root}`]:{textTransform:"capitalize"}},children:[i.jsxs(s,{title:"Default",spacing:2,children:[E.map(n=>i.jsx(r,{color:n,children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})},n)),i.jsx(h,{sx:{display:"block",width:1,height:2}}),E.map(n=>i.jsxs(r,{color:n,variant:"extended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),n]},n)),i.jsx(h,{sx:{display:"block",width:1,height:2}}),i.jsx(r,{color:"info",disabled:!0,children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})}),i.jsxs(r,{color:"info",disabled:!0,variant:"extended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),"disabled"]})]}),i.jsxs(s,{title:"Outlined",spacing:2,children:[E.map(n=>i.jsx(r,{color:n,variant:"outlined",children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})},n)),i.jsx(h,{sx:{display:"block",width:1,height:2}}),E.map(n=>i.jsxs(r,{color:n,variant:"outlinedExtended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),n]},n)),i.jsx(h,{sx:{display:"block",width:1,height:2}}),i.jsx(r,{color:"info",disabled:!0,variant:"outlined",children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})}),i.jsxs(r,{color:"info",disabled:!0,variant:"outlinedExtended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),"disabled"]})]}),i.jsxs(s,{title:"Soft",spacing:2,children:[E.map(n=>i.jsx(r,{color:n,variant:"soft",children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})},n)),i.jsx(h,{sx:{display:"block",width:1,height:2}}),E.map(n=>i.jsxs(r,{color:n,variant:"softExtended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),n]},n)),i.jsx(h,{sx:{display:"block",width:1,height:2}}),i.jsx(r,{color:"info",disabled:!0,variant:"soft",children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})}),i.jsxs(r,{color:"info",disabled:!0,variant:"softExtended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),"disabled"]})]}),i.jsxs(s,{title:"Sizes",spacing:2,children:[R.map(n=>i.jsx(r,{size:n,color:"info",children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})},n)),i.jsx(h,{sx:{display:"block",width:1,height:2}}),R.map(n=>i.jsxs(r,{size:n,color:"info",variant:"extended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),n]},n)),i.jsx(h,{sx:{display:"block",width:1,height:2}}),R.map(n=>i.jsx(r,{size:n,color:"info",variant:"soft",children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})},n)),i.jsx(h,{sx:{display:"block",width:1,height:2}}),R.map(n=>i.jsxs(r,{size:n,color:"info",variant:"softExtended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),n]},n)),i.jsx(h,{sx:{display:"block",width:1,height:2}}),R.map(n=>i.jsx(r,{size:n,color:"info",variant:"outlined",children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})},n)),i.jsx(h,{sx:{display:"block",width:1,height:2}}),R.map(n=>i.jsxs(r,{size:n,color:"info",variant:"outlinedExtended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),n]},n))]}),i.jsx(s,{title:"With Animate",spacing:2,children:R.map(n=>i.jsxs(r,{component:Y.button,whileTap:"tap",whileHover:"hover",variants:n==="small"&&I(1.1,.95)||n==="large"&&I(1.08,.99)||I(),variant:"extended",size:n,color:"info",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),n]},n))})]})}const X=[{value:"contained",label:"Contained Buttons",component:i.jsx(F,{variant:"contained"})},{value:"outlined",label:"Outlined Buttons",component:i.jsx(F,{variant:"outlined"})},{value:"text",label:"Text Buttons",component:i.jsx(F,{})},{value:"soft",label:"Soft Buttons",component:i.jsx(F,{variant:"soft"})},{value:"icon",label:"Icon Buttons",component:i.jsx(Ti,{})},{value:"fab",label:"Floating Action Button",component:i.jsx(Ei,{})},{value:"groups",label:"Button Groups",component:i.jsx(wi,{})},{value:"toggle",label:"Toggle Buttons",component:i.jsx(yi,{})}];function Ii(){const[n,e]=g.useState("contained"),a=g.useCallback((l,f)=>{e(f)},[]);return i.jsxs(i.Fragment,{children:[i.jsx(h,{sx:{py:5,bgcolor:l=>l.palette.mode==="light"?"grey.200":"grey.800"},children:i.jsx(q,{children:i.jsx(mi,{heading:"Buttons",links:[{name:"Components",href:hi.components},{name:"Buttons"}],moreLink:["https://mui.com/components/buttons","https://mui.com/components/button-group","https://mui.com/components/floating-action-button","https://mui.com/components/toggle-button"]})})}),i.jsxs(q,{sx:{my:10},children:[i.jsx(xi,{value:n,onChange:a,children:X.map(l=>i.jsx(ji,{value:l.value,label:l.label},l.value))}),X.map(l=>l.value===n&&i.jsx(h,{sx:{mt:5},children:l.component},l.value))]})]})}function Di(){return i.jsxs(i.Fragment,{children:[i.jsx(pi,{children:i.jsx("title",{children:" MUI: Button"})}),i.jsx(Ii,{})]})}export{Di as default};
