import{af as e,ax as n,ay as i,az as o,aA as t,bY as c,ac as l,au as x,ao as a,b5 as m}from"./index-bb505ec4.js";import{u as h}from"./use-search-params-d851e527.js";import"./api-3aac980b.js";import"./axios-e0d8a382.js";function p(){const r=h().get("email"),s=e.jsxs(e.Fragment,{children:[e.jsx(c,{sx:{mb:5,height:96}}),e.jsx(l,{variant:"h3",sx:{mb:1},children:"Please check your email!"}),e.jsxs(x,{spacing:1,sx:{color:"text.secondary",typography:"body2",mb:5},children:[e.jsx(a,{component:"span",children:" We have sent a confirmation link to"}),e.jsx(a,{component:"strong",sx:{color:"text.primary"},children:r}),e.jsx(a,{component:"div",children:"Please check your inbox/spam."})]})]});return e.jsxs(e.Fragment,{children:[s,e.jsx(n,{component:i,href:o.auth.firebase.login,size:"large",color:"inherit",variant:"contained",startIcon:e.jsx(t,{icon:"eva:arrow-ios-back-fill"}),sx:{alignSelf:"center"},children:"Return to sign in"})]})}function y(){return e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsx("title",{children:" Firebase: Verify"})}),e.jsx(p,{})]})}export{y as default};
