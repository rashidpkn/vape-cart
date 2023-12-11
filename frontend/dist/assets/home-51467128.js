import{a5 as T,a6 as G,D as u,a7 as X,a8 as e,a9 as r,aa as Y,ab as i,ac as o,ad as a,ae as w,af as ne,ag as I,ah as h,ai as re,aj as k,ak as ae,al as j,am as A,an as H,ao as b,ap as Q,aq as oe,ar as S,as as W,at as Z,au as ee,av as le,aw as V,ax as ie,ay as ce,az as de,aA as N,aB as z,aC as U,aD as K,aE as xe,aF as q,aG as he,aH as pe}from"./index-bf334511.js";import{S as me}from"./scroll-progress-f4fae9e6.js";import{v as s}from"./fade-ba5404aa.js";import{R as se}from"./Rating-9d6f1ef9.js";import{C as je}from"./Card-6dc62dad.js";import{I as C}from"./image-2ad327f3.js";import{S as te}from"./Switch-62976b6d.js";import{F as ge}from"./Fab-2d54f5bd.js";import{C as ve}from"./CircularProgress-c73bf2f6.js";import{T as ue,a as be}from"./ToggleButtonGroup-f1ce7112.js";import{M as fe}from"./Chip-d1d4c445.js";import{A as ye}from"./AvatarGroup-a65ee4da.js";import{S as we}from"./Slider-ff272239.js";import{A as ke}from"./Alert-3851fe43.js";import{A as Ce}from"./AlertTitle-57fee7b3.js";import{F as $}from"./FormControlLabel-85e6080d.js";import{R as Ie}from"./Radio-28939117.js";import{C as B}from"./Checkbox-940e9fd7.js";import{C as Se}from"./CardHeader-d007181f.js";import{T as L}from"./TextField-e6e01232.js";import"./index-04c0722c.js";import"./transition-71675215.js";import"./visuallyHidden-14c3de6e.js";import"./SwitchBase-f8898c21.js";import"./Close-06645920.js";import"./FormControl-96833b24.js";import"./FormLabel-8a3d5af0.js";import"./Select-1c3a8fd5.js";import"./Menu-3b093474.js";const _e=A("div")(({theme:t})=>({...H({color:b(t.palette.background.default,t.palette.mode==="light"?.9:.94),imgUrl:"/assets/background/overlay_3.jpg"}),width:"100%",height:"100vh",position:"relative",[t.breakpoints.up("md")]:{top:0,left:0,position:"fixed"}})),Ue=A("div")(({theme:t})=>({height:"100%",overflow:"hidden",position:"relative",[t.breakpoints.up("md")]:{marginTop:Y.H_DESKTOP_OFFSET}})),De=A(i.h1)(({theme:t})=>({...Q(`300deg, ${t.palette.primary.main} 0%, ${t.palette.warning.main} 25%, ${t.palette.primary.main} 50%, ${t.palette.warning.main} 75%, ${t.palette.primary.main} 100%`),padding:0,marginTop:8,lineHeight:1,marginBottom:24,letterSpacing:8,textAlign:"center",backgroundSize:"400%",fontSize:`${64/16}rem`,fontFamily:"'Barlow', sans-serif",[t.breakpoints.up("md")]:{fontSize:`${96/16}rem`}})),Ae=A("div")(({theme:t})=>({top:-80,width:480,right:-80,height:480,borderRadius:"50%",position:"absolute",filter:"blur(100px)",WebkitFilter:"blur(100px)",backgroundColor:b(t.palette.primary.darker,.12)})),Pe=A("div")(({theme:t})=>({height:400,bottom:-200,left:"10%",right:"10%",borderRadius:"50%",position:"absolute",filter:"blur(100px)",WebkitFilter:"blur(100px)",backgroundColor:b(t.palette.primary.darker,.12)})),R=A("div")(({opacity:t=1,anchor:c="left",theme:l})=>({...oe({opacity:t,color:l.palette.background.default}),zIndex:9,bottom:0,height:80,width:"50%",position:"absolute",clipPath:"polygon(0% 0%, 100% 100%, 0% 100%)",...c==="left"&&{left:0},...c==="right"&&{right:0,transform:"scaleX(-1)"}}));function Te(){const t=T("up","md"),c=G(),l=u.useRef(null),{scrollY:x}=X(),[g,f]=u.useState(0),n=c.palette.mode==="light",m=u.useCallback(()=>{let D=0;l.current&&(D=l.current.offsetHeight),x.on("change",d=>{const v=d*100/D;f(Math.floor(v))})},[x]);u.useEffect(()=>{m()},[m]);const y={repeatType:"loop",ease:"linear",duration:60*4,repeat:1/0},p=1-g/100,_=g>120,P=e.jsxs(r,{alignItems:"center",justifyContent:"center",sx:{height:1,mx:"auto",maxWidth:480,opacity:p>0?p:0,mt:{md:`-${Y.H_DESKTOP+g*2.5}px`}},children:[e.jsx(i.div,{variants:s().in,children:e.jsxs(o,{variant:"h2",sx:{textAlign:"center"},children:["Start a ",e.jsx("br",{}),"New Project with"]})}),e.jsx(i.div,{variants:s().in,children:e.jsx(De,{animate:{backgroundPosition:"200% center"},transition:{repeatType:"reverse",ease:"linear",duration:20,repeat:1/0},children:"Minimal"})}),e.jsx(i.div,{variants:s().in,children:e.jsx(o,{variant:"body2",sx:{textAlign:"center"},children:"The starting point for your next project is based on MUI.Easy customization Helps you build apps faster and better."})}),e.jsx(i.div,{variants:s().in,children:e.jsxs(r,{spacing:.75,direction:"row",alignItems:"center",justifyContent:"center",sx:{my:3},children:[e.jsx(se,{readOnly:!0,value:4.95,precision:.1,max:5}),e.jsxs(o,{variant:"caption",sx:{color:"text.secondary"},children:[e.jsx(a,{component:"strong",sx:{mr:.5,color:"text.primary"},children:"4.96/5"}),"(99+ reviews)"]})]})}),e.jsx(i.div,{variants:s().in,children:e.jsxs(r,{spacing:1.5,direction:{xs:"column-reverse",sm:"row"},sx:{mb:5},children:[e.jsxs(r,{alignItems:"center",spacing:2,children:[e.jsx(w,{component:ne,href:I.dashboard.root,color:"inherit",size:"large",variant:"contained",startIcon:e.jsx(h,{icon:"eva:flash-fill",width:24}),children:"Live Preview"}),e.jsxs(re,{color:"inherit",variant:"caption",target:"_blank",rel:"noopener",href:I.freeUI,sx:{textDecoration:"underline",display:"inline-flex",alignItems:"center"},children:[e.jsx(h,{icon:"eva:external-link-fill",width:16,sx:{mr:.5}}),"Get Free Version"]})]}),e.jsx(w,{color:"inherit",size:"large",variant:"outlined",startIcon:e.jsx(h,{icon:"eva:external-link-fill",width:24}),target:"_blank",rel:"noopener",href:I.figma,sx:{borderColor:"text.primary"},children:"Design Preview"})]})}),e.jsxs(r,{spacing:3,sx:{textAlign:"center"},children:[e.jsx(i.div,{variants:s().in,children:e.jsx(o,{variant:"overline",sx:{opacity:.4},children:"Available For"})}),e.jsx(r,{spacing:2,direction:"row",justifyContent:"center",children:["figma","js","ts","nextjs","vite"].map(D=>e.jsx(i.div,{variants:s().in,children:e.jsx(a,{component:"img",src:`/assets/icons/platforms/ic_${D}.svg`,sx:{width:24,height:24}})},D))})]})]}),E=e.jsxs(r,{direction:"row",alignItems:"flex-start",sx:{height:"150%",position:"absolute",opacity:p>0?p:0,transform:`skew(${-16-g/24}deg, ${4-g/16}deg)`},children:[e.jsxs(r,{component:i.div,variants:s().in,sx:{width:344,position:"relative"},children:[e.jsx(a,{component:i.img,animate:{y:["0%","100%"]},transition:y,alt:n?"light_1":"dark_1",src:n?"/assets/images/home/hero/light_1.webp":"/assets/images/home/hero/dark_1.webp",sx:{position:"absolute",mt:-5}}),e.jsx(a,{component:i.img,animate:{y:["-100%","0%"]},transition:y,alt:n?"light_1":"dark_1",src:n?"/assets/images/home/hero/light_1.webp":"/assets/images/home/hero/dark_1.webp",sx:{position:"absolute"}})]}),e.jsxs(r,{component:i.div,variants:s().in,sx:{width:720,position:"relative",ml:-5},children:[e.jsx(a,{component:i.img,animate:{y:["100%","0%"]},transition:y,alt:n?"light_2":"dark_2",src:n?"/assets/images/home/hero/light_2.webp":"/assets/images/home/hero/dark_2.webp",sx:{position:"absolute",mt:-5}}),e.jsx(a,{component:i.img,animate:{y:["0%","-100%"]},transition:y,alt:n?"light_2":"dark_2",src:n?"/assets/images/home/hero/light_2.webp":"/assets/images/home/hero/dark_2.webp",sx:{position:"absolute"}})]})]}),F=e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx(R,{anchor:"right",opacity:.48}),e.jsx(R,{anchor:"right",opacity:.48,sx:{height:48,zIndex:10}}),e.jsx(R,{anchor:"right",sx:{zIndex:11,height:24}})]}),M=e.jsxs(e.Fragment,{children:[t&&e.jsx(Ae,{}),e.jsx(Pe,{})]});return e.jsxs(e.Fragment,{children:[e.jsx(_e,{ref:l,sx:{..._&&{opacity:0}},children:e.jsxs(Ue,{children:[e.jsx(k,{component:ae,sx:{height:1},children:e.jsxs(j,{container:!0,columnSpacing:{md:10},sx:{height:1},children:[e.jsx(j,{xs:12,md:6,children:P}),t&&e.jsx(j,{md:6,children:E})]})}),M]})}),t&&F,e.jsx(a,{sx:{height:{md:"100vh"}}})]})}const Fe=[{icon:" /assets/icons/home/ic_make_brand.svg",title:"Branding",description:"Consistent design makes it easy to brand your own."},{icon:" /assets/icons/home/ic_design.svg",title:"UI & UX Design",description:"The kit is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects."},{icon:" /assets/icons/home/ic_development.svg",title:"Development",description:"Easy to customize and extend, saving you time and money."}];function ze(){return e.jsxs(k,{component:S,sx:{py:{xs:10,md:15}},children:[e.jsxs(r,{spacing:3,sx:{textAlign:"center",mb:{xs:5,md:10}},children:[e.jsx(i.div,{variants:s().inUp,children:e.jsx(o,{component:"div",variant:"overline",sx:{color:"text.disabled"},children:"Minimal UI"})}),e.jsx(i.div,{variants:s().inDown,children:e.jsxs(o,{variant:"h2",children:["What Minimal ",e.jsx("br",{})," helps you?"]})})]}),e.jsx(a,{gap:{xs:3,lg:10},display:"grid",alignItems:"center",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:Fe.map((t,c)=>e.jsx(i.div,{variants:s().inUp,children:e.jsxs(je,{sx:{textAlign:"center",boxShadow:{md:"none"},bgcolor:"background.default",p:l=>l.spacing(10,5),...c===1&&{boxShadow:l=>({md:`-40px 40px 80px ${l.palette.mode==="light"?b(l.palette.grey[500],.16):b(l.palette.common.black,.4)}`})}},children:[e.jsx(a,{component:"img",src:t.icon,alt:t.title,sx:{mx:"auto",width:48,height:48}}),e.jsx(o,{variant:"h5",sx:{mt:8,mb:2},children:t.title}),e.jsx(o,{sx:{color:"text.secondary"},children:t.description})]})},t.title))})]})}function $e(){const t=T("up","md"),[c,l]=u.useState("Standard"),x=u.useCallback((n,m)=>{l(m)},[]),g=e.jsxs(r,{spacing:3,sx:{mb:10,textAlign:"center"},children:[e.jsx(i.div,{variants:s().inUp,children:e.jsx(o,{component:"div",variant:"overline",sx:{mb:2,color:"text.disabled"},children:"pricing plans"})}),e.jsx(i.div,{variants:s().inDown,children:e.jsxs(o,{variant:"h2",children:["The right plan for ",e.jsx("br",{})," your business"]})}),e.jsx(i.div,{variants:s().inDown,children:e.jsx(o,{sx:{color:"text.secondary"},children:"Choose the perfect plan for your needs. Always flexible to grow"})})]}),f=e.jsxs(e.Fragment,{children:[t?e.jsx(a,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",sx:{borderRadius:2,border:n=>`dashed 1px ${n.palette.divider}`},children:W.map(n=>e.jsx(i.div,{variants:s().in,children:e.jsx(O,{plan:n},n.license)},n.license))}):e.jsxs(e.Fragment,{children:[e.jsx(r,{alignItems:"center",sx:{mb:5},children:e.jsx(Z,{value:c,onChange:x,children:W.map(n=>e.jsx(ee,{value:n.license,label:n.license},n.license))})}),e.jsx(a,{sx:{borderRadius:2,border:n=>`dashed 1px ${n.palette.divider}`},children:W.map(n=>n.license===c&&e.jsx(O,{plan:n,sx:{borderLeft:m=>`dashed 1px ${m.palette.divider}`}},n.license))})]}),e.jsx(i.div,{variants:s().in,children:e.jsxs(a,{sx:{textAlign:"center",mt:{xs:5,md:10}},children:[e.jsx(i.div,{variants:s().inDown,children:e.jsx(o,{variant:"h4",children:"Still have questions?"})}),e.jsx(i.div,{variants:s().inDown,children:e.jsx(o,{sx:{mt:2,mb:5,color:"text.secondary"},children:"Please describe your case to receive the most accurate advice."})}),e.jsx(i.div,{variants:s().inUp,children:e.jsx(w,{color:"inherit",size:"large",variant:"contained",href:"mailto:support@minimals.cc?subject=[Feedback] from Customer",children:"Contact us"})})]})})]});return e.jsx(a,{sx:{py:{xs:10,md:15},bgcolor:n=>b(n.palette.grey[500],.04)},children:e.jsxs(k,{component:S,children:[g,f]})})}function O({plan:t,sx:c,...l}){const{license:x,commons:g,options:f,icons:n}=t,m=x==="Standard",y=x==="Standard Plus";return e.jsxs(r,{spacing:5,sx:{p:5,pt:10,...y&&{borderLeft:p=>`dashed 1px ${p.palette.divider}`,borderRight:p=>`dashed 1px ${p.palette.divider}`,...c}},...l,children:[e.jsxs(r,{spacing:2,children:[e.jsx(o,{variant:"overline",component:"div",sx:{color:"text.disabled"},children:"License"}),e.jsxs(a,{sx:{position:"relative"},children:[e.jsx(o,{variant:"h4",children:x}),e.jsx(a,{sx:{left:0,bottom:4,width:40,height:8,opacity:.48,bgcolor:"error.main",position:"absolute",...m&&{bgcolor:"primary.main"},...y&&{bgcolor:"warning.main"}}})]})]}),m?e.jsx(a,{component:"img",src:n[1],sx:{width:20,height:20}}):e.jsx(r,{direction:"row",spacing:2,children:n.map(p=>e.jsx(a,{component:"img",src:p,sx:{width:20,height:20}},p))}),e.jsxs(r,{spacing:2.5,children:[g.map(p=>e.jsxs(r,{spacing:1,direction:"row",alignItems:"center",children:[e.jsx(h,{icon:"eva:checkmark-fill",width:16}),e.jsx(o,{variant:"body2",children:p})]},p)),e.jsx(le,{sx:{borderStyle:"dashed"}}),f.map((p,_)=>{const P=m&&_===1||m&&_===2||m&&_===3||y&&_===3;return e.jsxs(r,{spacing:1,direction:"row",alignItems:"center",sx:{...P&&{color:"text.disabled"}},children:[e.jsx(h,{icon:P?"mingcute:close-line":"eva:checkmark-fill",width:16}),e.jsx(o,{variant:"body2",children:p})]},p)})]}),e.jsx(r,{alignItems:"flex-end",children:e.jsx(w,{color:"inherit",size:"small",target:"_blank",rel:"noopener",href:I.minimalUI,endIcon:e.jsx(h,{icon:"eva:arrow-ios-forward-fill"}),children:"Learn more"})})]})}O.propTypes={plan:V.object,sx:V.object};function Re(){const t=ie(),c=e.jsxs(r,{alignItems:"center",spacing:3,children:[e.jsx(i.div,{variants:s().inUp,children:e.jsx(o,{component:"div",variant:"overline",sx:{color:"primary.main"},children:"Easy switch between styles."})}),e.jsx(i.div,{variants:s().inUp,children:e.jsx(o,{variant:"h2",sx:{color:"common.white"},children:"Dark mode"})}),e.jsx(i.div,{variants:s().inUp,children:e.jsx(o,{sx:{color:"grey.500"},children:"A dark theme that feels easier on the eyes."})}),e.jsx(i.div,{variants:s().inUp,children:e.jsx(te,{checked:t.themeMode==="dark",onClick:()=>t.onUpdate("themeMode",t.themeMode==="light"?"dark":"light")})})]}),l=e.jsx(i.div,{variants:s().inUp,children:e.jsx(C,{alt:"darkmode",src:"/assets/images/home/darkmode.webp",sx:{borderRadius:2,my:{xs:5,md:10},boxShadow:x=>`-40px 40px 80px ${b(x.palette.common.black,.24)}`}})});return e.jsx(a,{sx:{textAlign:"center",bgcolor:"grey.900",pt:{xs:10,md:15},pb:{xs:10,md:20}},children:e.jsxs(k,{component:S,children:[c,l]})})}function He(){const t=T("up","md"),c=e.jsx(w,{color:"inherit",size:"large",variant:"outlined",target:"_blank",rel:"noopener",href:I.zoneUI,endIcon:e.jsx(h,{icon:"eva:arrow-ios-forward-fill"}),children:"Visit Zone Landing Page"}),l=e.jsxs(r,{sx:{textAlign:{xs:"center",md:"left"}},children:[e.jsx(i.div,{variants:s().inDown,children:e.jsx(o,{variant:"overline",component:"div",sx:{color:"text.disabled"},children:"Looking For a"})}),e.jsx(i.div,{variants:s().inDown,children:e.jsx(o,{variant:"h2",sx:{mt:3,mb:{md:5}},children:"Landing Page Template?"})}),t&&e.jsxs(i.div,{variants:s().inDown,children:[" ",c," "]})]});return e.jsx(k,{component:S,sx:{py:{xs:10,md:15}},children:e.jsxs(j,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:{xs:5,md:0},children:[e.jsx(j,{xs:12,md:4,children:l}),e.jsx(j,{xs:12,md:7,children:e.jsx(i.div,{variants:s().inUp,children:e.jsx(C,{disabledEffect:!0,alt:"rocket",src:"/assets/images/home/zone_landing.webp"})})}),!t&&e.jsx(j,{xs:12,sx:{textAlign:"center"},children:c})]})})}function Ee(){const t=G(),c=T("up","md"),l=e.jsxs(a,{sx:{textAlign:{xs:"center",md:"unset"},mt:{xs:10,md:20}},children:[e.jsx(i.div,{variants:s().inUp,children:e.jsx(o,{component:"div",variant:"overline",sx:{color:"text.disabled"},children:"Professional Kit"})}),e.jsx(i.div,{variants:s().inUp,children:e.jsx(o,{variant:"h2",sx:{mt:3,mb:5,...Q(`300deg, ${t.palette.primary.main} 0%, ${t.palette.warning.main} 100%`)},children:"For Designer"})}),e.jsx(i.div,{variants:s().inUp,children:e.jsx(w,{color:"inherit",size:"large",variant:"contained",endIcon:e.jsx(h,{icon:"eva:arrow-ios-forward-fill"}),target:"_blank",rel:"noopener",href:I.figma,children:"Figma Workspace"})})]}),x=e.jsx(a,{component:i.img,src:"/assets/images/home/for_designer.webp",variants:s().in,sx:{height:1,width:.5,objectFit:"cover",position:"absolute",boxShadow:`-80px 80px 80px ${t.palette.mode==="light"?b(t.palette.grey[500],.48):b(t.palette.common.black,.24)}`}});return e.jsx(a,{sx:{minHeight:560,overflow:"hidden",position:"relative",...H({startColor:`${t.palette.grey[900]} 25%`,endColor:b(t.palette.grey[900],0),imgUrl:"/assets/images/home/for_designer.webp"}),...c&&{...H({color:b(t.palette.background.default,.8),imgUrl:"/assets/background/overlay_4.jpg"})}},children:e.jsx(k,{component:S,children:e.jsxs(j,{container:!0,children:[e.jsx(j,{xs:12,md:6,children:l}),c&&e.jsx(j,{md:6,children:x})]})})})}function Me(){const t=ie(),c=ce.map(f=>({name:f.name,value:f.main})),l=e.jsxs(r,{spacing:3,sx:{textAlign:"center"},children:[e.jsx(i.div,{variants:s().inDown,children:e.jsx(o,{component:"div",variant:"overline",sx:{color:"text.disabled"},children:"choose your style"})}),e.jsx(i.div,{variants:s().inDown,children:e.jsx(o,{variant:"h2",children:" Color Presets "})}),e.jsx(i.div,{variants:s().inDown,children:e.jsx(o,{sx:{color:"text.secondary"},children:"Express your own style with just one click"})})]}),x=e.jsxs(a,{sx:{position:"relative"},children:[e.jsx(C,{disabledEffect:!0,alt:"grid",src:"/assets/images/home/presets/grid.webp"}),e.jsx(a,{sx:{position:"absolute",top:0},children:e.jsx(i.div,{variants:s().inUp,children:e.jsx(C,{disabledEffect:!0,alt:"screen",src:`/assets/images/home/presets/screen_${t.themeColorPresets}.webp`})})}),e.jsx(a,{sx:{position:"absolute",top:0},children:e.jsx(i.div,{variants:s().inDown,children:e.jsx(i.div,{animate:{y:[0,-15,0]},transition:{duration:8,repeat:1/0},children:e.jsx(C,{disabledEffect:!0,alt:"sidebar",src:`/assets/images/home/presets/block_${t.themeColorPresets}.webp`})})})}),e.jsx(a,{sx:{position:"absolute",top:0},children:e.jsx(i.div,{variants:s().inDown,children:e.jsx(i.div,{animate:{y:[-5,10,-5]},transition:{duration:8,repeat:1/0},children:e.jsx(C,{disabledEffect:!0,alt:"chart",src:`/assets/images/home/presets/chart_${t.themeColorPresets}.webp`})})})}),e.jsx(a,{sx:{position:"absolute",top:0},children:e.jsx(i.div,{variants:s().inDown,children:e.jsx(i.div,{animate:{y:[-25,5,-25]},transition:{duration:10,repeat:1/0},children:e.jsx(C,{disabledEffect:!0,alt:"sidebar",src:`/assets/images/home/presets/sidebar_${t.themeColorPresets}.webp`})})})})]}),g=e.jsx(i.div,{variants:s().inDown,children:e.jsx(r,{alignItems:"center",justifyContent:"center",sx:{my:5,width:100,height:88,mx:"auto",position:"relative"},children:c.map((f,n)=>{const{name:m,value:y}=f,p=t.themeColorPresets===m;return e.jsx(de,{onClick:()=>t.onUpdate("themeColorPresets",m),sx:{width:24,height:24,bgcolor:y,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",position:"absolute",color:"common.white",...n===0&&{bottom:0},...n===1&&{left:19},...n===2&&{right:19},...n===3&&{top:0,left:0},...n===4&&{top:0},...n===5&&{top:0,right:0}},children:p&&e.jsx(h,{icon:"eva:color-picker-fill",width:16})},m)})})});return e.jsxs(k,{component:S,sx:{position:"relative",py:{xs:10,md:15}},children:[l,g,x]})}function We(){const t=G(),c=e.jsxs(a,{sx:{textAlign:{xs:"center",md:"left"}},children:[e.jsxs(a,{component:i.div,variants:s().inDown,sx:{color:"common.white",mb:5,typography:"h2"},children:["Get started with",e.jsx("br",{})," Minimal kit today"]}),e.jsxs(r,{direction:{xs:"column",md:"row"},justifyContent:{xs:"center",md:"flex-start"},spacing:2,children:[e.jsx(i.div,{variants:s().inRight,children:e.jsx(w,{color:"inherit",size:"large",variant:"contained",target:"_blank",rel:"noopener",href:I.minimalUI,sx:{color:"grey.800",bgcolor:"common.white"},children:"Purchase Now"})}),e.jsx(i.div,{variants:s().inRight,children:e.jsx(w,{color:"inherit",size:"large",variant:"outlined",target:"_blank",rel:"noopener",href:I.freeUI,endIcon:e.jsx(h,{icon:"eva:external-link-fill",width:16,sx:{mr:.5}}),sx:{color:"common.white","&:hover":{borderColor:"currentColor"}},children:"Get Free Version"})})]})]}),l=e.jsx(r,{component:i.div,variants:s().inUp,alignItems:"center",children:e.jsx(a,{component:i.img,animate:{y:[-20,0,-20]},transition:{duration:4,repeat:1/0},alt:"rocket",src:"/assets/images/home/rocket.webp",sx:{maxWidth:460}})});return e.jsx(k,{component:S,children:e.jsxs(r,{alignItems:"center",direction:{xs:"column",md:"row"},sx:{...H({direction:"135deg",startColor:t.palette.primary.main,endColor:t.palette.primary.dark}),borderRadius:2,pb:{xs:5,md:0}},children:[l,c]})})}function Be(){const t=e.jsxs(r,{spacing:3,sx:{maxWidth:520,mx:"auto",zIndex:{md:99},position:{md:"absolute"},textAlign:{xs:"center",md:"left"}},children:[e.jsx(i.div,{variants:s().inUp,children:e.jsx(o,{component:"div",variant:"overline",sx:{color:"text.disabled"},children:"clean & clear"})}),e.jsx(i.div,{variants:s().inUp,children:e.jsx(o,{variant:"h2",sx:{textShadow:l=>l.palette.mode==="light"?"unset":`4px 4px 16px ${b(l.palette.grey[800],.48)}`},children:"Beautiful, modern and clean user interfaces"})})]}),c=e.jsx(a,{sx:{position:"relative"},children:[...Array(10)].map((l,x)=>e.jsx(a,{component:i.div,variants:s().inUp,sx:{top:0,left:0,position:"absolute",...x===0&&{zIndex:8},...x===9&&{position:"relative",zIndex:9}},children:e.jsx(C,{disabledEffect:!0,alt:`clean-${x+1}`,src:`/assets/images/home/clean/page_${x+1}.webp`})},x))});return e.jsxs(k,{component:S,sx:{py:{xs:10,md:15}},children:[t,c]})}function Le(){const t=T("up","md"),[c,l]=u.useState(24),[x,g]=u.useState("Option 1"),[f,n]=u.useState("chat"),[m,y]=u.useState(2),[p,_]=u.useState("Angular"),P=u.useCallback((d,v)=>{_(v)},[]),E=u.useCallback(d=>{g(d.target.value)},[]),F=e.jsx(i.div,{variants:s().inUp,children:e.jsx(w,{size:"large",color:"inherit",variant:"outlined",target:"_blank",rel:"noopener",href:I.components,endIcon:e.jsx(h,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All Components"})}),M=e.jsxs(r,{sx:{textAlign:{xs:"center",md:"unset"},pl:{md:5},pt:{md:15}},children:[e.jsx(i.div,{variants:s().inUp,children:e.jsx(o,{component:"div",variant:"overline",sx:{color:"text.disabled"},children:"Interface Starter Kit"})}),e.jsx(i.div,{variants:s().inUp,children:e.jsxs(o,{variant:"h2",sx:{my:3},children:["Huge pack ",e.jsx("br",{}),"of elements"]})}),e.jsx(i.div,{variants:s().inUp,children:e.jsx(o,{sx:{mb:5,color:"text.secondary"},children:"We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!"})}),t&&F]}),D=e.jsxs(r,{component:N,variant:"outlined",alignItems:"center",spacing:{xs:3,md:5},sx:{borderRadius:2,bgcolor:"unset",borderStyle:"dashed",p:{xs:3,md:5}},children:[e.jsxs(r,{direction:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",spacing:{xs:3,md:4},sx:{width:1},children:[e.jsx(i.div,{variants:s().in,children:e.jsx(w,{variant:"contained",color:"primary",startIcon:e.jsx(h,{icon:"solar:cart-plus-bold"}),children:"Add To Cart"})}),e.jsx(i.div,{variants:s().in,children:e.jsx(w,{variant:"soft",color:"primary",startIcon:e.jsx(h,{icon:"eva:cloud-upload-fill"}),children:"Upload"})}),e.jsx(i.div,{variants:s().in,children:e.jsx(ge,{color:"info",size:"medium",children:e.jsx(h,{icon:"eva:search-fill"})})}),e.jsx(i.div,{variants:s().in,children:e.jsx(ve,{color:"error"})})]}),e.jsxs(r,{direction:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",spacing:{xs:3,md:4},sx:{width:1},children:[e.jsx(i.div,{variants:s().in,children:e.jsx(Z,{value:p,onChange:P,sx:{boxShadow:d=>`inset 0 -2px 0 0 ${b(d.palette.grey[500],.08)}`},children:["Angular","React","Vue"].map(d=>e.jsx(ee,{value:d,label:d,sx:{"&:not(:last-of-type)":{mr:3}}},d))})}),e.jsx(i.div,{variants:s().in,children:e.jsx(ue,{size:"small",color:"secondary",value:f,exclusive:!0,onChange:(d,v)=>{v!==null&&n(v)},"aria-label":"app",children:["chat","mail","bell"].map(d=>e.jsxs(be,{value:d,"aria-label":d,disabled:d==="bell",children:[d==="chat"&&e.jsx(h,{icon:"solar:chat-round-dots-bold"}),d==="mail"&&e.jsx(h,{icon:"fluent:mail-24-filled"}),d==="bell"&&e.jsx(h,{icon:"solar:bell-bing-bold"})]},d))})}),e.jsx(i.div,{variants:s().in,children:e.jsx(fe,{color:"error",variant:"soft",onDelete:()=>{},avatar:e.jsx(z,{alt:U.fullName(2),src:U.image.avatar(2)}),label:"Chip"})})]}),e.jsxs(r,{direction:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",spacing:{xs:3,md:4},sx:{width:1},children:[e.jsx(i.div,{variants:s().in,children:e.jsx(K,{variant:"online",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(z,{src:U.image.avatar(19),alt:U.fullName(19)})})}),e.jsx(i.div,{variants:s().in,children:e.jsx(ye,{children:[...Array(8)].map((d,v)=>e.jsx(z,{src:U.image.avatar(v)},v))})}),e.jsx(i.div,{variants:s().in,children:e.jsx(se,{value:m,onChange:(d,v)=>{y(v)}})}),e.jsx(i.div,{variants:s().in,children:e.jsx(xe,{variant:"filled",startIcon:e.jsx(h,{icon:"fluent:mail-24-filled"}),children:"Label"})})]}),e.jsxs(r,{spacing:{xs:3,md:4},sx:{width:1,gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsx(i.div,{variants:s().in,children:e.jsx(we,{valueLabelDisplay:"on",value:c,onChange:(d,v)=>{l(v)}})}),e.jsx(i.div,{variants:s().in,children:e.jsxs(ke,{severity:"success",onClose:()=>{},children:[e.jsx(Ce,{children:"Success"}),"This is a success alert — ",e.jsx("strong",{children:"check it out!"})]})})]}),t&&e.jsxs(e.Fragment,{children:[e.jsxs(r,{direction:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",spacing:{xs:3,md:4},sx:{width:1},children:[e.jsx(i.div,{variants:s().in,children:e.jsx($,{control:e.jsx(te,{defaultChecked:!0}),label:"Switch",sx:{m:0}})}),e.jsx(i.div,{variants:s().in,children:e.jsx($,{control:e.jsx(Ie,{color:"error",defaultChecked:!0}),label:"Radio Button",sx:{m:0}})}),e.jsx(i.div,{variants:s().in,children:e.jsx($,{control:e.jsx(B,{color:"info",defaultChecked:!0}),label:"Checkbox",sx:{m:0}})}),e.jsx(i.div,{variants:s().in,children:e.jsx($,{control:e.jsx(B,{color:"warning",indeterminate:!0}),label:"Indeterminate",sx:{m:0}})})]}),e.jsxs(r,{spacing:3,direction:"row",justifyContent:"center",sx:{width:1},children:[e.jsx(i.div,{variants:s().in,children:e.jsxs(N,{sx:{width:320,borderRadius:2,boxShadow:d=>d.customShadows.z20},children:[e.jsx(Se,{title:"Jayvion Simon",subheader:"California, United States",avatar:e.jsx(K,{variant:"online",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(z,{alt:U.fullName(0),src:U.image.avatar(0),sx:{width:48,height:48}})}),titleTypographyProps:{typography:"subtitle2",sx:{mb:.25}},subheaderTypographyProps:{typography:"caption"},sx:{p:2}}),e.jsx(a,{sx:{px:1},children:e.jsx(C,{alt:"cover-url",src:U.image.cover(12),ratio:"16/9",sx:{borderRadius:1.5}})}),e.jsx(o,{variant:"body2",sx:{color:"text.secondary",pt:2,px:2},children:"Phasellus dolor. Fusce egestas elit eget lorem. Quisque id odio."}),e.jsxs(r,{direction:"row",sx:{px:2,py:1},children:[e.jsx(B,{defaultChecked:!0,color:"error",size:"small",icon:e.jsx(h,{icon:"solar:heart-bold"}),checkedIcon:e.jsx(h,{icon:"solar:heart-bold"})}),e.jsx(a,{sx:{flexGrow:1}}),e.jsx(q,{children:e.jsx(h,{icon:"solar:share-bold"})}),e.jsx(q,{children:e.jsx(h,{icon:"eva:message-circle-fill"})})]})]})}),e.jsxs(r,{spacing:3,sx:{width:1},children:[e.jsx(i.div,{variants:s().in,children:e.jsx(L,{fullWidth:!0,label:"Text Field",value:"Value"})}),e.jsx(i.div,{variants:s().in,children:e.jsx(L,{select:!0,fullWidth:!0,label:"Select",value:x,onChange:E,children:["Option 1","Option 2","Option 3","Option 4"].map(d=>e.jsx(he,{value:d,children:d},d))})}),e.jsx(i.div,{variants:s().in,children:e.jsx(L,{fullWidth:!0,multiline:!0,rows:3,label:"Textarea"})})]})]})]})]});return e.jsx(k,{component:S,sx:{py:{xs:10,md:15}},children:e.jsxs(j,{container:!0,direction:{xs:"column",md:"row-reverse"},spacing:5,children:[e.jsx(j,{xs:12,md:5,children:M}),e.jsx(j,{xs:12,md:7,children:D}),!t&&e.jsx(j,{xs:12,sx:{textAlign:"center"},children:F})]})})}const J=A("div")(({anchor:t="top",theme:c})=>({left:0,zIndex:9,height:80,width:"100%",position:"absolute",clipPath:"polygon(0% 0%, 100% 100%, 0% 100%)",backgroundColor:c.palette.background.default,display:"block",lineHeight:0,...t==="top"&&{top:-1,transform:"scale(-1, -1)"},...t==="bottom"&&{bottom:-1,backgroundColor:c.palette.grey[900]}}));function Oe(){const{scrollYProgress:t}=X();return e.jsxs(e.Fragment,{children:[e.jsx(me,{scrollYProgress:t}),e.jsx(Te,{}),e.jsxs(a,{sx:{overflow:"hidden",position:"relative",bgcolor:"background.default"},children:[e.jsx(ze,{}),e.jsx(Le,{}),e.jsxs(a,{sx:{position:"relative"},children:[e.jsx(J,{}),e.jsx(Ee,{}),e.jsx(J,{anchor:"bottom"})]}),e.jsx(Re,{}),e.jsx(Me,{}),e.jsx(Be,{}),e.jsx($e,{}),e.jsx(He,{}),e.jsx(We,{})]})]})}function bi(){return e.jsxs(e.Fragment,{children:[e.jsx(pe,{children:e.jsx("title",{children:" Minimal: The starting point for your next project"})}),e.jsx(Oe,{})]})}export{bi as default};
