import{a5 as b,a8 as e,aj as g,ak as C,a9 as n,ab as r,ac as s,ad as j,am as u,an as S,ao as l,aA as T,af as k,az as w,eU as M,aw as v,eV as p,eW as A,av as m,ai as h,aH as U}from"./index-a747811c.js";import{o as B}from"./orderBy-eb297d36.js";import{v as d}from"./fade-ba5404aa.js";import{I}from"./image-13256a49.js";import{b as P}from"./transition-71675215.js";import"./_baseEach-238f7bc0.js";const _=u("div")(({theme:a})=>({position:"relative",padding:a.spacing(10,0)})),L=u("div")(({theme:a})=>({top:0,left:0,right:0,bottom:0,zIndex:-1,position:"absolute",transform:"scaleX(-1)",...S({color:l(a.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"})}));function R(){const a=b("up","sm");return e.jsxs(_,{children:[e.jsxs(g,{component:C,sx:{display:{md:"flex"},justifyContent:{md:"space-between"}},children:[e.jsxs(n,{spacing:3,children:[e.jsx(r.div,{variants:d().inUp,children:e.jsx(s,{variant:"h3",component:"h1",children:"Components"})}),e.jsx(r.div,{variants:d().inUp,children:e.jsxs(s,{sx:{color:"text.secondary"},children:["With huge resource pack making deployment",e.jsx("br",{})," easy and expanding more effectively"]})})]}),a&&e.jsx(r.div,{variants:d().inDown,children:e.jsx(j,{component:"img",alt:"illustrations characters",src:"/assets/illustrations/characters/character_7.png",sx:{maxWidth:320}})})]}),e.jsx(L,{})]})}function t({item:a}){const{name:o,icon:y,href:f}=a;return e.jsxs(T,{component:k,href:f,variant:"outlined",sx:{overflow:"hidden",textDecoration:"none",borderColor:c=>l(c.palette.grey[500],.08)},children:[e.jsx(w,{component:r.div,whileHover:"hover",sx:{p:2.5,borderRadius:0,color:"text.secondary",bgcolor:c=>l(c.palette.grey[500],.04)},children:e.jsx(r.div,{variants:M(1.1),transition:P(),children:e.jsx(I,{alt:o,src:y})})}),e.jsx(s,{variant:"subtitle2",sx:{p:2,textAlign:"center"},children:o})]})}t.propTypes={item:v.object};const x=(a,o)=>`/components/${a}/${A(o)}`,H=["Colors","Typography","Shadows","Grid","Icons"].map(a=>({name:a,href:x("foundation",a),icon:`/assets/icons/components/ic_${p(a)}.svg`})),D=["Accordion","Alert","Autocomplete","Avatar","Badge","Breadcrumbs","Buttons","Checkbox","Chip","Dialog","List","Menu","Pagination","Pickers","Popover","Progress","Radio Button","Rating","Slider","Stepper","Switch","Table","Tabs","Textfield","Timeline","Tooltip","Transfer List","Tree View","Data Grid"].map(a=>({name:a,href:x("mui",a),icon:`/assets/icons/components/ic_${p(a)}.svg`})),F=["Chart","Map","Editor","Copy to clipboard","Upload","Carousel","Multi language","Animate","Mega Menu","Form Validation","Lightbox","Image","Label","Scroll","Scroll Progress","Snackbar","Text Max Line","Navigation Bar","Organization Chart","Markdown"].map(a=>({name:a,href:x("extra",a),icon:`/assets/icons/components/ic_extra_${p(a)}.svg`}));function $(){return e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsxs(g,{sx:{pt:10,pb:15},children:[e.jsxs(n,{spacing:3,children:[e.jsxs(n,{spacing:1,children:[e.jsx(s,{variant:"h5",children:"Foundation"}),e.jsx(s,{variant:"body2",sx:{color:"text.secondary"},children:"Colors, Typography, Shadows…"})]}),e.jsx(i,{children:H.map(a=>e.jsx(t,{item:a},a.name))})]}),e.jsx(m,{sx:{borderStyle:"dashed",my:8}}),e.jsxs(n,{spacing:3,children:[e.jsxs(n,{spacing:1,children:[e.jsx(s,{variant:"h5",children:"MUI"}),e.jsxs(s,{variant:"body2",sx:{color:"text.secondary"},children:["Components from"," ",e.jsx(h,{href:"https://mui.com/components/",target:"_blank",rel:"noopener",children:"Material UI"}),"."]}),e.jsx(s,{variant:"caption",sx:{color:"text.secondary"},children:e.jsxs("i",{children:["Some advanced components from MUI X will not be included. So you need to purchase a separate",e.jsx(h,{href:"https://mui.com/pricing/",target:"_blank",rel:"noopener",sx:{ml:.5},children:"license"}),"."]})})]}),e.jsx(i,{children:B(D,["name"],["asc"]).map(a=>e.jsx(t,{item:a},a.name))})]}),e.jsx(m,{sx:{borderStyle:"dashed",my:8}}),e.jsxs(n,{spacing:3,children:[e.jsxs(n,{spacing:1,children:[e.jsx(s,{variant:"h5",children:"Extra Components"}),e.jsx(s,{variant:"body2",sx:{color:"text.secondary"},children:"Some custom components / use 3rd party dependencies (chart, map, editor…)."})]}),e.jsx(i,{children:F.map(a=>e.jsx(t,{item:a},a.name))})]})]})]})}function i({children:a}){return e.jsx(j,{display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(6, 1fr)"},gap:2.5,children:a})}i.propTypes={children:v.node};function X(){return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx("title",{children:" Components"})}),e.jsx($,{})]})}export{X as default};