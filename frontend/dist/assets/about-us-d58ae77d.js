import{a1 as ae,a3 as ke,b2 as Re,a7 as Y,$ as m,bS as ie,r as S,a5 as le,Y as ce,j as e,l as J,a8 as de,bT as Ne,V as Me,X as Se,bU as ze,bV as $e,b4 as Ae,bW as re,bX as Te,bY as q,bZ as G,b_ as K,c as x,J as U,bB as Fe,bI as a,v as N,bC as l,p as h,E as z,aq as O,aP as ue,as as H,bL as E,K as w,bQ as L,aw as Ie,b7 as Ue,B as Q,z as $,b$ as Be,c0 as We,c1 as X,U as Pe,C as Ve,c2 as _e,al as Le,c3 as Oe,c4 as He,ar as Ee,aA as De,c5 as qe,A as Ge,y as Ke,f as Xe,W as Ye}from"./index-bbe39c8b.js";const Je=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],Qe=s=>{const{color:t,variant:o,classes:n,size:i}=s,c={root:["root",o,`size${Y(i)}`,t==="inherit"?"colorInherit":t]},f=de(c,Ne,n);return m({},n,f)},Ze=ae(ke,{name:"MuiFab",slot:"Root",shouldForwardProp:s=>Re(s)||s==="classes",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,t[o.variant],t[`size${Y(o.size)}`],o.color==="inherit"&&t.colorInherit,t[Y(o.size)],t[o.color]]}})(({theme:s,ownerState:t})=>{var o,n;return m({},s.typography.button,{minHeight:36,transition:s.transitions.create(["background-color","box-shadow","border-color"],{duration:s.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(s.vars||s).zIndex.fab,boxShadow:(s.vars||s).shadows[6],"&:active":{boxShadow:(s.vars||s).shadows[12]},color:s.vars?s.vars.palette.text.primary:(o=(n=s.palette).getContrastText)==null?void 0:o.call(n,s.palette.grey[300]),backgroundColor:(s.vars||s).palette.grey[300],"&:hover":{backgroundColor:(s.vars||s).palette.grey.A100,"@media (hover: none)":{backgroundColor:(s.vars||s).palette.grey[300]},textDecoration:"none"},[`&.${ie.focusVisible}`]:{boxShadow:(s.vars||s).shadows[6]}},t.size==="small"&&{width:40,height:40},t.size==="medium"&&{width:48,height:48},t.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},t.variant==="extended"&&t.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},t.variant==="extended"&&t.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},t.color==="inherit"&&{color:"inherit"})},({theme:s,ownerState:t})=>m({},t.color!=="inherit"&&t.color!=="default"&&(s.vars||s).palette[t.color]!=null&&{color:(s.vars||s).palette[t.color].contrastText,backgroundColor:(s.vars||s).palette[t.color].main,"&:hover":{backgroundColor:(s.vars||s).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(s.vars||s).palette[t.color].main}}}),({theme:s})=>({[`&.${ie.disabled}`]:{color:(s.vars||s).palette.action.disabled,boxShadow:(s.vars||s).shadows[0],backgroundColor:(s.vars||s).palette.action.disabledBackground}})),es=S.forwardRef(function(t,o){const n=le({props:t,name:"MuiFab"}),{children:i,className:c,color:f="default",component:p="button",disabled:v=!1,disableFocusRipple:d=!1,focusVisibleClassName:r,size:u="large",variant:y="circular"}=n,A=ce(n,Je),g=m({},n,{color:f,component:p,disabled:v,disableFocusRipple:d,size:u,variant:y}),C=Qe(g);return e.jsx(Ze,m({className:J(C.root,c),component:p,disabled:v,focusRipple:!d,focusVisibleClassName:J(C.focusVisible,r),ownerState:g,ref:o},A,{classes:C,children:i}))}),ss=es;function ts(s){return Me("MuiMasonry",s)}Se("MuiMasonry",["root"]);const os=["children","className","component","columns","spacing","sequential","defaultColumns","defaultHeight","defaultSpacing"],j=s=>Number(s.replace("px","")),ns={flexBasis:"100%",width:0,margin:0,padding:0},is=s=>{const{classes:t}=s;return de({root:["root"]},ts,t)},rs=({ownerState:s,theme:t})=>{let o={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const n={};if(s.isSSR){const d={},r=j(t.spacing(s.defaultSpacing));for(let u=1;u<=s.defaultColumns;u+=1)d[`&:nth-of-type(${s.defaultColumns}n+${u%s.defaultColumns})`]={order:u};return n.height=s.defaultHeight,n.margin=-(r/2),n["& > *"]=m({},o["& > *"],d,{margin:r/2,width:`calc(${(100/s.defaultColumns).toFixed(2)}% - ${r}px)`}),m({},o,n)}const i=re({values:s.spacing,breakpoints:t.breakpoints.values}),c=Te(t);o=q(o,G({theme:t},i,d=>{let r;if(typeof d=="string"&&!Number.isNaN(Number(d))||typeof d=="number"){const u=Number(d);r=K(c,u)}else r=d;return m({margin:`calc(0px - (${r} / 2))`,"& > *":{margin:`calc(${r} / 2)`}},s.maxColumnHeight&&{height:typeof r=="number"?Math.ceil(s.maxColumnHeight+j(r)):`calc(${s.maxColumnHeight}px + ${r})`})}));const p=re({values:s.columns,breakpoints:t.breakpoints.values});return o=q(o,G({theme:t},p,d=>{const u=`${(100/Number(d)).toFixed(2)}%`,y=typeof i=="string"&&!Number.isNaN(Number(i))||typeof i=="number"?K(c,Number(i)):"0px";return{"& > *":{width:`calc(${u} - ${y})`}}})),typeof i=="object"&&(o=q(o,G({theme:t},i,(d,r)=>{if(r){const u=Number(d),y=Object.keys(p).pop(),A=K(c,u);return{"& > *":{width:`calc(${`${(100/(typeof p=="object"?p[r]||p[y]:p)).toFixed(2)}%`} - ${A})`}}}return null}))),o},as=ae("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(s,t)=>[t.root]})(rs),ls=S.forwardRef(function(t,o){const n=le({props:t,name:"MuiMasonry"}),{children:i,className:c,component:f="div",columns:p=4,spacing:v=1,sequential:d=!1,defaultColumns:r,defaultHeight:u,defaultSpacing:y}=n,A=ce(n,os),g=S.useRef(),[C,pe]=S.useState(),Z=!C&&u&&r!==void 0&&y!==void 0,[me,ge]=S.useState(Z?r-1:0),ee=m({},n,{spacing:v,columns:p,maxColumnHeight:C,defaultColumns:r,defaultHeight:u,defaultSpacing:y,isSSR:Z}),be=is(ee),se=S.useCallback(k=>{if(!g.current||!k||k.length===0)return;const b=g.current,B=g.current.firstChild,te=b.clientWidth,oe=B.clientWidth;if(te===0||oe===0)return;const ne=window.getComputedStyle(B),ye=j(ne.marginLeft),je=j(ne.marginRight),W=Math.round(te/(oe+ye+je)),T=new Array(W).fill(0);let F=!1,I=1;b.childNodes.forEach(R=>{if(R.nodeType!==Node.ELEMENT_NODE||R.dataset.class==="line-break"||F)return;const P=window.getComputedStyle(R),we=j(P.marginTop),Ce=j(P.marginBottom),D=j(P.height)?Math.ceil(j(P.height))+we+Ce:0;if(D===0){F=!0;return}for(let M=0;M<R.childNodes.length;M+=1){const V=R.childNodes[M];if(V.tagName==="IMG"&&V.clientHeight===0){F=!0;break}}if(!F)if(d)T[I-1]+=D,R.style.order=I,I+=1,I>W&&(I=1);else{const M=T.indexOf(Math.min(...T));T[M]+=D;const V=M+1;R.style.order=V}}),F||ze.flushSync(()=>{pe(Math.max(...T)),ge(W>0?W-1:0)})},[d]);$e(()=>{if(typeof ResizeObserver>"u")return;let k;const b=new ResizeObserver(()=>{k=requestAnimationFrame(se)});return g.current&&g.current.childNodes.forEach(B=>{b.observe(B)}),()=>{k&&window.cancelAnimationFrame(k),b&&b.disconnect()}},[p,v,i,se]);const fe=Ae(o,g),ve=new Array(me).fill("").map((k,b)=>e.jsx("span",{"data-class":"line-break",style:m({},ns,{order:b+1})},b));return e.jsxs(as,m({as:f,className:J(be.root,c),ref:fe,ownerState:ee},A,{children:[i,ve]}))}),cs=ls;function ds(){return e.jsx(x,{sx:{height:{md:560},py:{xs:10,md:0},overflow:"hidden",position:"relative",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(/assets/background/overlay_1.svg), url(/assets/images/about/hero.jpg)"},children:e.jsx(U,{component:Fe,children:e.jsxs(x,{sx:{bottom:{md:80},position:{md:"absolute"},textAlign:{xs:"center",md:"unset"}},children:[e.jsx(_,{text:"Who",variants:a().inRight,sx:{color:"primary.main"}}),e.jsx("br",{}),e.jsxs(N,{spacing:2,display:"inline-flex",direction:"row",sx:{color:"common.white"},children:[e.jsx(_,{text:"we"}),e.jsx(_,{text:"are?"})]}),e.jsx(l.div,{variants:a().inRight,children:e.jsxs(h,{variant:"h4",sx:{mt:3,color:"common.white",fontWeight:"fontWeightSemiBold"},children:["Let's work together and",e.jsx("br",{})," make awesome site easily"]})})]})})})}function _({text:s,variants:t,sx:o,...n}){return e.jsx(x,{component:l.div,sx:{typography:"h1",overflow:"hidden",display:"inline-flex",...o},...n,children:s.split("").map((i,c)=>e.jsx(l.span,{variants:t||a().inUp,children:i},c))})}_.propTypes={sx:z.object,text:z.string,variants:z.object};const us=[...Array(3)].map((s,t)=>({label:["Development","Design","Marketing"][t],value:[20,40,60][t]}));function xs(){const s=O(),t=ue("up","md"),o=s.palette.mode==="light",n=`-40px 40px 80px ${H(o?s.palette.grey[500]:s.palette.common.black,.24)}`;return e.jsx(U,{component:E,sx:{py:{xs:10,md:15},textAlign:{xs:"center",md:"unset"}},children:e.jsxs(w,{container:!0,columnSpacing:{md:3},alignItems:"flex-start",children:[t&&e.jsxs(w,{container:!0,xs:12,md:6,lg:7,alignItems:"center",sx:{pr:{md:7}},children:[e.jsx(w,{xs:6,children:e.jsx(l.div,{variants:a().inUp,children:e.jsx(L,{alt:"our office 2",src:"/assets/images/about/what_2.png",ratio:"1/1",sx:{borderRadius:3,boxShadow:n}})})}),e.jsx(w,{xs:6,children:e.jsx(l.div,{variants:a().inUp,children:e.jsx(L,{alt:"our office 1",src:"/assets/images/about/what_1.png",ratio:"3/4",sx:{borderRadius:3,boxShadow:n}})})})]}),e.jsxs(w,{xs:12,md:6,lg:5,children:[e.jsx(l.div,{variants:a().inRight,children:e.jsx(h,{variant:"h2",sx:{mb:3},children:"What is Vape Amazon?"})}),e.jsx(l.div,{variants:a().inRight,children:e.jsx(h,{sx:{color:s.palette.mode==="light"?"text.secondary":"common.white"},children:"Our theme is the most advanced and user-friendly theme you will find on the market, we have documentation and video to help set your site really easily, pre-installed demos you can import in one click and everything from the theme options to page content can be edited from the front-end. This is the theme you are looking for."})}),e.jsx(N,{spacing:3,sx:{my:5},children:us.map((i,c)=>e.jsxs(x,{component:l.div,variants:a().inRight,children:[e.jsxs(N,{direction:"row",alignItems:"center",sx:{mb:1},children:[e.jsx(h,{variant:"subtitle2",sx:{flexGrow:1,textAlign:"left"},children:i.label}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:Ie(i.value)})]}),e.jsx(Ue,{color:c===0&&"primary"||c===1&&"warning"||"error",variant:"determinate",value:i.value})]},i.label))}),e.jsx(l.div,{variants:a().inRight,children:e.jsx(Q,{variant:"outlined",color:"inherit",size:"large",endIcon:e.jsx($,{icon:"eva:arrow-ios-forward-fill"}),children:"Our Work"})})]})]})})}function hs(){const s=Be({infinite:!1,slidesToShow:4,responsive:[{breakpoint:1279,settings:{slidesToShow:3}},{breakpoint:959,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]});return e.jsxs(U,{component:E,sx:{textAlign:"center",py:{xs:10,md:15}},children:[e.jsx(l.div,{variants:a().inDown,children:e.jsx(h,{variant:"overline",sx:{color:"text.disabled"},children:"Dream team"})}),e.jsx(l.div,{variants:a().inUp,children:e.jsx(h,{variant:"h2",sx:{my:3},children:"Great team is the key"})}),e.jsx(l.div,{variants:a().inUp,children:e.jsx(h,{sx:{mx:"auto",maxWidth:640,color:"text.secondary"},children:"Vape Amazon will provide you support if you have any problems, our support team will reply within a day and we also have detailed documentation."})}),e.jsx(x,{sx:{position:"relative"},children:e.jsx(We,{filled:!0,shape:"rounded",onNext:s.onNext,onPrev:s.onPrev,leftButtonProps:{sx:{left:24,...X.length<5&&{display:"none"}}},rightButtonProps:{sx:{right:24,...X.length<5&&{display:"none"}}},children:e.jsx(Pe,{ref:s.carouselRef,...s.carouselSettings,children:X.map(t=>e.jsx(x,{component:l.div,variants:a().in,sx:{px:1.5,py:{xs:8,md:10}},children:e.jsx(xe,{member:t})},t.id))})})}),e.jsx(Q,{size:"large",color:"inherit",variant:"outlined",endIcon:e.jsx($,{icon:"eva:arrow-ios-forward-fill",width:24}),sx:{mx:"auto"},children:"All Members"})]})}function xe({member:s}){const{name:t,role:o,avatarUrl:n}=s;return e.jsxs(Ve,{children:[e.jsx(h,{variant:"subtitle1",sx:{mt:2.5,mb:.5},children:t}),e.jsx(h,{variant:"body2",sx:{mb:2.5,color:"text.secondary"},children:o}),e.jsx(x,{sx:{px:1},children:e.jsx(L,{alt:t,src:n,ratio:"1/1",sx:{borderRadius:2}})}),e.jsx(N,{direction:"row",alignItems:"center",justifyContent:"center",sx:{p:2},children:_e.map(i=>e.jsx(Le,{sx:{color:i.color,"&:hover":{bgcolor:H(i.color,.08)}},children:e.jsx($,{icon:i.icon})},i.name))})]},t)}xe.propTypes={member:z.object};function ps(){const s=O(),t=e.jsx(L,{src:"/assets/images/about/vision.jpg",alt:"about-vision",overlay:H(s.palette.grey[900],.48)}),o=e.jsx(N,{direction:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",sx:{width:1,zIndex:9,bottom:0,opacity:.48,position:"absolute",py:{xs:1.5,md:2.5}},children:["ibm","lya","spotify","netflix","hbo","amazon"].map(n=>e.jsx(x,{component:l.img,variants:a().in,alt:n,src:`/assets/icons/brands/ic_brand_${n}.svg`,sx:{m:{xs:1.5,md:2.5},height:{xs:20,md:32}}},n))});return e.jsx(x,{sx:{pb:10,position:"relative",bgcolor:"background.neutral","&:before":{top:0,left:0,width:1,content:"''",position:"absolute",height:{xs:80,md:120},bgcolor:"background.default"}},children:e.jsxs(U,{component:E,children:[e.jsxs(x,{sx:{mb:10,borderRadius:2,display:"flex",overflow:"hidden",position:"relative",alignItems:"center",justifyContent:"center"},children:[t,o,e.jsx(ss,{sx:{position:"absolute",zIndex:9},children:e.jsx($,{icon:"solar:play-broken",width:24})})]}),e.jsx(l.div,{variants:a().inUp,children:e.jsx(h,{variant:"h3",sx:{textAlign:"center",maxWidth:800,mx:"auto"},children:"Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada."})})]})})}function ms(){const s=O(),t=ue("up","md"),o=e.jsx(Q,{color:"primary",endIcon:e.jsx($,{icon:"eva:arrow-ios-forward-fill"}),children:"Read more testimonials"}),n=e.jsxs(x,{sx:{maxWidth:{md:360},textAlign:{xs:"center",md:"unset"}},children:[e.jsx(l.div,{variants:a().inUp,children:e.jsx(h,{variant:"overline",sx:{color:"common.white",opacity:.48},children:"Testimonials"})}),e.jsx(l.div,{variants:a().inUp,children:e.jsxs(h,{variant:"h2",sx:{my:3,color:"common.white"},children:["Who love ",e.jsx("br",{}),"my work"]})}),e.jsx(l.div,{variants:a().inUp,children:e.jsx(h,{sx:{color:"common.white"},children:"Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say."})}),!t&&e.jsx(x,{component:l.div,variants:a().inUp,sx:{mt:3,display:"flex",justifyContent:"center"},children:o})]}),i=e.jsx(x,{sx:{py:{md:10},height:{md:1},...t&&{...Oe.y}},children:e.jsx(cs,{spacing:3,columns:{xs:1,md:2},sx:{ml:0},children:He.map(c=>e.jsx(l.div,{variants:a().inUp,children:e.jsx(he,{testimonial:c})},c.name))})});return e.jsx(x,{sx:{...Ee({color:H(s.palette.grey[900],.9),imgUrl:"/assets/images/about/testimonials.jpg"}),overflow:"hidden",height:{md:840},py:{xs:10,md:0}},children:e.jsxs(U,{component:E,sx:{position:"relative",height:1},children:[e.jsxs(w,{container:!0,spacing:3,alignItems:"center",justifyContent:{xs:"center",md:"space-between"},sx:{height:1},children:[e.jsx(w,{xs:10,md:4,children:n}),e.jsx(w,{xs:12,md:7,lg:6,alignItems:"center",sx:{height:1},children:i})]}),t&&e.jsx(x,{component:l.div,variants:a().inUp,sx:{bottom:60,position:"absolute"},children:o})]})})}function he({testimonial:s,sx:t,...o}){const n=O(),{name:i,ratingNumber:c,postedDate:f,content:p,avatarUrl:v}=s;return e.jsxs(N,{spacing:3,sx:{...De({color:n.palette.common.white,opacity:.08}),p:3,borderRadius:2,color:"common.white",...t},...o,children:[e.jsx($,{icon:"mingcute:quote-left-fill",width:40,sx:{opacity:.48}}),e.jsx(h,{variant:"body2",children:p}),e.jsx(qe,{value:c,readOnly:!0,size:"small"}),e.jsxs(N,{direction:"row",children:[e.jsx(Ge,{alt:i,src:v,sx:{mr:2}}),e.jsx(Ke,{primary:i,secondary:Xe(f),primaryTypographyProps:{typography:"subtitle2",mb:.5},secondaryTypographyProps:{typography:"caption",color:"inherit",sx:{opacity:.64}}})]})]})}he.propTypes={sx:z.object,testimonial:z.object};function gs(){return e.jsxs(e.Fragment,{children:[e.jsx(ds,{}),e.jsx(xs,{}),e.jsx(ps,{}),e.jsx(hs,{}),e.jsx(ms,{})]})}function fs(){return e.jsxs(e.Fragment,{children:[e.jsx(Ye,{children:e.jsx("title",{children:" About us"})}),e.jsx(gs,{})]})}export{fs as default};
