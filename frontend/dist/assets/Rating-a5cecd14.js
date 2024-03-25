import{bp as ne,j as i,at as W,cp as $,aC as te,an as l,aG as be,H,av as xe,aw as ie,cq as ae,af as Fe,aH as Re,ah as Ve,ai as Ce,ax as D,ay as Ae,cr as Se,ag as we}from"./index-5abd2fc6.js";const He={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Me=He,Le=ne(i.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),je=ne(i.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),Ee=["value"],ze=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function Ie(o){const e=o.toString().split(".")[1];return e?e.length:0}function J(o,e){if(o==null)return o;const t=Math.round(o/e)*e;return Number(t.toFixed(Ie(e)))}const $e=o=>{const{classes:e,size:t,readOnly:m,disabled:M,emptyValueFocused:y,focusVisible:v}=o,b={root:["root",`size${te(t)}`,M&&"disabled",v&&"focusVisible",m&&"readOnly"],label:["label","pristine"],labelEmptyValue:[y&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Ae(b,Se,e)},Oe=W("span",{name:"MuiRating",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${$.visuallyHidden}`]:e.visuallyHidden},e.root,e[`size${te(t.size)}`],t.readOnly&&e.readOnly]}})(({theme:o,ownerState:e})=>l({display:"inline-flex",position:"relative",fontSize:o.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${$.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${$.focusVisible} .${$.iconActive}`]:{outline:"1px solid #999"},[`& .${$.visuallyHidden}`]:Me},e.size==="small"&&{fontSize:o.typography.pxToRem(18)},e.size==="large"&&{fontSize:o.typography.pxToRem(30)},e.readOnly&&{pointerEvents:"none"})),se=W("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:o},e)=>[e.label,o.emptyValueFocused&&e.labelEmptyValueActive]})(({ownerState:o})=>l({cursor:"inherit"},o.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),Te=W("span",{name:"MuiRating",slot:"Icon",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.icon,t.iconEmpty&&e.iconEmpty,t.iconFilled&&e.iconFilled,t.iconHover&&e.iconHover,t.iconFocus&&e.iconFocus,t.iconActive&&e.iconActive]}})(({theme:o,ownerState:e})=>l({display:"flex",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),pointerEvents:"none"},e.iconActive&&{transform:"scale(1.2)"},e.iconEmpty&&{color:(o.vars||o).palette.action.disabled})),Ne=W("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:o=>be(o)&&o!=="iconActive",overridesResolver:(o,e)=>{const{iconActive:t}=o;return[e.decimal,t&&e.iconActive]}})(({iconActive:o})=>l({position:"relative"},o&&{transform:"scale(1.2)"}));function Pe(o){const e=ie(o,Ee);return i.jsx("span",l({},e))}function oe(o){const{classes:e,disabled:t,emptyIcon:m,focus:M,getLabelText:y,highlightSelectedOnly:v,hover:b,icon:O,IconContainerComponent:L,isActive:T,itemValue:c,labelProps:j,name:x,onBlur:X,onChange:F,onClick:R,onFocus:N,readOnly:P,ownerState:s,ratingValue:u,ratingValueRounded:U}=o,V=v?c===u:c<=u,B=c<=b,C=c<=M,q=c===U,E=ae(),h=i.jsx(Te,{as:L,value:c,className:D(e.icon,V?e.iconFilled:e.iconEmpty,B&&e.iconHover,C&&e.iconFocus,T&&e.iconActive),ownerState:l({},s,{iconEmpty:!V,iconFilled:V,iconHover:B,iconFocus:C,iconActive:T}),children:m&&!V?m:O});return P?i.jsx("span",l({},j,{children:h})):i.jsxs(H.Fragment,{children:[i.jsxs(se,l({ownerState:l({},s,{emptyValueFocused:void 0}),htmlFor:E},j,{children:[h,i.jsx("span",{className:e.visuallyHidden,children:y(c)})]})),i.jsx("input",{className:e.visuallyHidden,onFocus:N,onBlur:X,onChange:F,onClick:R,disabled:t,value:c,id:E,type:"radio",name:x,checked:q})]})}const Be=i.jsx(Le,{fontSize:"inherit"}),ke=i.jsx(je,{fontSize:"inherit"});function _e(o){return`${o} Star${o!==1?"s":""}`}const De=H.forwardRef(function(e,t){const m=xe({name:"MuiRating",props:e}),{className:M,defaultValue:y=null,disabled:v=!1,emptyIcon:b=ke,emptyLabelText:O="Empty",getLabelText:L=_e,highlightSelectedOnly:T=!1,icon:c=Be,IconContainerComponent:j=Pe,max:x=5,name:X,onChange:F,onChangeActive:R,onMouseLeave:N,onMouseMove:P,precision:s=1,readOnly:u=!1,size:U="medium",value:V}=m,B=ie(m,ze),C=ae(X),[q,E]=Fe({controlled:V,default:y,name:"Rating"}),h=J(q,s),le=Re(),[{hover:d,focus:k},z]=H.useState({hover:-1,focus:-1});let A=h;d!==-1&&(A=d),k!==-1&&(A=k);const{isFocusVisibleRef:K,onBlur:ce,onFocus:re,ref:ue}=Ve(),[de,G]=H.useState(!1),Q=H.useRef(),pe=Ce(ue,Q,t),me=n=>{P&&P(n);const a=Q.current,{right:r,left:_,width:S}=a.getBoundingClientRect();let w;le.direction==="rtl"?w=(r-n.clientX)/S:w=(n.clientX-_)/S;let p=J(x*w+s/2,s);p=we(p,s,x),z(g=>g.hover===p&&g.focus===p?g:{hover:p,focus:p}),G(!1),R&&d!==p&&R(n,p)},fe=n=>{N&&N(n);const a=-1;z({hover:a,focus:a}),R&&d!==a&&R(n,a)},Z=n=>{let a=n.target.value===""?null:parseFloat(n.target.value);d!==-1&&(a=d),E(a),F&&F(n,a)},ve=n=>{n.clientX===0&&n.clientY===0||(z({hover:-1,focus:-1}),E(null),F&&parseFloat(n.target.value)===h&&F(n,null))},he=n=>{re(n),K.current===!0&&G(!0);const a=parseFloat(n.target.value);z(r=>({hover:r.hover,focus:a}))},ge=n=>{if(d!==-1)return;ce(n),K.current===!1&&G(!1);const a=-1;z(r=>({hover:r.hover,focus:a}))},[ye,ee]=H.useState(!1),I=l({},m,{defaultValue:y,disabled:v,emptyIcon:b,emptyLabelText:O,emptyValueFocused:ye,focusVisible:de,getLabelText:L,icon:c,IconContainerComponent:j,max:x,precision:s,readOnly:u,size:U}),f=$e(I);return i.jsxs(Oe,l({ref:pe,onMouseMove:me,onMouseLeave:fe,className:D(f.root,M,u&&"MuiRating-readOnly"),ownerState:I,role:u?"img":null,"aria-label":u?L(A):null},B,{children:[Array.from(new Array(x)).map((n,a)=>{const r=a+1,_={classes:f,disabled:v,emptyIcon:b,focus:k,getLabelText:L,highlightSelectedOnly:T,hover:d,icon:c,IconContainerComponent:j,name:C,onBlur:ge,onChange:Z,onClick:ve,onFocus:he,ratingValue:A,ratingValueRounded:h,readOnly:u,ownerState:I},S=r===Math.ceil(A)&&(d!==-1||k!==-1);if(s<1){const w=Array.from(new Array(1/s));return i.jsx(Ne,{className:D(f.decimal,S&&f.iconActive),ownerState:I,iconActive:S,children:w.map((p,g)=>{const Y=J(r-1+(g+1)*s,s);return i.jsx(oe,l({},_,{isActive:!1,itemValue:Y,labelProps:{style:w.length-1===g?{}:{width:Y===A?`${(g+1)*s*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),Y)})},r)}return i.jsx(oe,l({},_,{isActive:S,itemValue:r}),r)}),!u&&!v&&i.jsxs(se,{className:D(f.label,f.labelEmptyValue),ownerState:I,children:[i.jsx("input",{className:f.visuallyHidden,value:"",id:`${C}-empty`,type:"radio",name:C,checked:h==null,onFocus:()=>ee(!0),onBlur:()=>ee(!1),onChange:Z}),i.jsx("span",{className:f.visuallyHidden,children:O})]})]}))}),Xe=De;export{Xe as R,Me as v};
