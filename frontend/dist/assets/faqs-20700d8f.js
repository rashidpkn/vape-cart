import{a6 as q,a8 as s,ad as o,an as F,ao as C,aj as m,ak as A,a9 as j,ab as i,aM as I,ah as p,aN as h,aw as c,aO as R,ac as d,ar as f,ae as g,a5 as S,aP as U,aQ as k,aR as P,av as W,aS as _,aA as D,aT as E,aH as M}from"./index-bf334511.js";import{v as t}from"./fade-ba5404aa.js";import{T as l}from"./TextField-e6e01232.js";import{A as B,a as H,b as G}from"./AccordionDetails-82acaafd.js";import{I as v}from"./image-2ad327f3.js";import{T as L}from"./text-max-line-5df27492.js";import"./transition-71675215.js";import"./FormControl-96833b24.js";import"./FormLabel-8a3d5af0.js";import"./Select-1c3a8fd5.js";import"./Menu-3b093474.js";function N(){const e=q();return s.jsx(o,{sx:{...F({color:C(e.palette.grey[900],.8),imgUrl:"/assets/images/faqs/hero.jpg"}),height:{md:560},py:{xs:10,md:0},overflow:"hidden",position:"relative"},children:s.jsx(m,{component:A,children:s.jsxs(o,{sx:{bottom:{md:80},position:{md:"absolute"},textAlign:{xs:"center",md:"unset"}},children:[s.jsxs("div",{children:[s.jsx(r,{text:"How",sx:{color:"primary.main"},variants:t().inRight}),s.jsx("br",{}),s.jsxs(j,{spacing:2,display:"inline-flex",direction:"row",sx:{color:"common.white"},children:[s.jsx(r,{text:"can"}),s.jsx(r,{text:"we"}),s.jsx(r,{text:"help"}),s.jsx(r,{text:"you?"})]})]}),s.jsx(i.div,{variants:t().in,children:s.jsx(l,{fullWidth:!0,placeholder:"Search support...",InputProps:{startAdornment:s.jsx(I,{position:"start",children:s.jsx(p,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{mt:5,maxWidth:360,[`& .${h.root}`]:{bgcolor:"common.white"},[`& .${h.input}`]:{typography:"subtitle1"}}})})]})})})}function r({text:e,variants:n,sx:a,...x}){return s.jsx(o,{component:i.div,sx:{typography:"h1",overflow:"hidden",display:"inline-flex",...a},...x,children:e.split("").map((w,T)=>s.jsx(i.span,{variants:n||t().inUp,children:w},T))})}r.propTypes={sx:c.object,text:c.string,variants:c.object};function z(){return s.jsx("div",{children:R.map(e=>s.jsxs(B,{children:[s.jsx(H,{expandIcon:s.jsx(p,{icon:"eva:arrow-ios-downward-fill"}),children:s.jsx(d,{variant:"subtitle1",children:e.heading})}),s.jsx(G,{children:s.jsx(d,{children:e.detail})})]},e.id))})}function O(){return s.jsxs(j,{component:f,spacing:3,children:[s.jsx(i.div,{variants:t().inUp,children:s.jsx(d,{variant:"h4",children:"Haven't found the right help?"})}),s.jsx(i.div,{variants:t().inUp,children:s.jsx(l,{fullWidth:!0,label:"Name"})}),s.jsx(i.div,{variants:t().inUp,children:s.jsx(l,{fullWidth:!0,label:"Email"})}),s.jsx(i.div,{variants:t().inUp,children:s.jsx(l,{fullWidth:!0,label:"Subject"})}),s.jsx(i.div,{variants:t().inUp,children:s.jsx(l,{fullWidth:!0,label:"Enter your message here.",multiline:!0,rows:4})}),s.jsx(i.div,{variants:t().inUp,children:s.jsx(g,{size:"large",variant:"contained",children:"Submit Now"})})]})}const u=[{label:"Managing your account",icon:"/assets/icons/faqs/ic_account.svg",href:"#"},{label:"Payment",icon:"/assets/icons/faqs/ic_payment.svg",href:"#"},{label:"Delivery",icon:"/assets/icons/faqs/ic_delivery.svg",href:"#"},{label:"Problem with the Product",icon:"/assets/icons/faqs/ic_package.svg",href:"#"},{label:"Return & Refund",icon:"/assets/icons/faqs/ic_refund.svg",href:"#"},{label:"Guarantees and assurances",icon:"/assets/icons/faqs/ic_assurances.svg",href:"#"}];function V(){const e=S("up","md"),n=U();return e?s.jsx(o,{component:f,gap:3,display:"grid",gridTemplateColumns:{md:"repeat(3, 1fr)",lg:"repeat(6, 1fr)"},children:u.map(a=>s.jsx(i.div,{variants:t().in,children:s.jsx(b,{category:a})},a.label))}):s.jsxs(s.Fragment,{children:[s.jsxs(k,{position:"absolute",children:[s.jsx(P,{children:s.jsx(g,{startIcon:s.jsx(p,{icon:"solar:list-bold"}),onClick:n.onTrue,children:"Categories"})}),s.jsx(W,{})]}),s.jsx(_,{open:n.value,onClose:n.onFalse,children:s.jsx(o,{gap:1,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",sx:{p:1},children:u.map(a=>s.jsx(y,{category:a},a.label))})})]})}function b({category:e}){const{label:n,icon:a}=e;return s.jsxs(D,{variant:"outlined",sx:{p:3,borderRadius:2,bgcolor:"unset",cursor:"pointer",textAlign:"center","&:hover":{bgcolor:"background.paper",boxShadow:x=>x.customShadows.z20}},children:[s.jsx(v,{disabledEffect:!0,alt:a,src:a,sx:{mb:2,width:80,height:80,mx:"auto"}}),s.jsx(L,{variant:"subtitle2",persistent:!0,children:n})]})}b.propTypes={category:c.object};function y({category:e}){const{label:n,icon:a}=e;return s.jsxs(E,{sx:{py:2,maxWidth:140,borderRadius:1,textAlign:"center",alignItems:"center",typography:"subtitle2",flexDirection:"column",justifyContent:"center",bgcolor:"background.neutral"},children:[s.jsx(v,{alt:a,src:a,sx:{width:48,height:48,mb:1}}),e.label]},n)}y.propTypes={category:c.object};function $(){return s.jsxs(s.Fragment,{children:[s.jsx(N,{}),s.jsxs(m,{sx:{pb:10,pt:{xs:10,md:15},position:"relative"},children:[s.jsx(V,{}),s.jsx(d,{variant:"h3",sx:{my:{xs:5,md:10}},children:"Frequently asked questions"}),s.jsxs(o,{gap:10,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[s.jsx(z,{}),s.jsx(O,{})]})]})]})}function ns(){return s.jsxs(s.Fragment,{children:[s.jsx(M,{children:s.jsx("title",{children:" Faqs"})}),s.jsx($,{})]})}export{ns as default};
