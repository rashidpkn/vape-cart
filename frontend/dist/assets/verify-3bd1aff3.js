import{af as r,aw as o,ax as s,ay as n,az as t,ac as c,au as m,ao as e,aZ as l}from"./index-8366dc58.js";import"./form-provider-b0c123ce.js";import{u as p}from"./use-search-params-aa2ffac7.js";import{E as x}from"./plan-premium-icon-f87cfe5c.js";import"./api-717b6e77.js";import"./format-number-fe5bd567.js";import"./image-0711ee88.js";import"./transition-bee6630b.js";import"./Checkbox-d4dbc0be.js";import"./Chip-e8c3629a.js";import"./Switch-1210991b.js";import"./Autocomplete-3b868ecf.js";import"./Close-accefa1e.js";import"./axios-d5068281.js";function h(){const a=p().get("email"),i=r.jsxs(r.Fragment,{children:[r.jsx(x,{sx:{mb:5,height:96}}),r.jsx(c,{variant:"h3",sx:{mb:1},children:"Please check your email!"}),r.jsxs(m,{spacing:1,sx:{color:"text.secondary",typography:"body2",mb:5},children:[r.jsx(e,{component:"span",children:" We have sent a confirmation link to"}),r.jsx(e,{component:"strong",sx:{color:"text.primary"},children:a}),r.jsx(e,{component:"div",children:"Please check your inbox/spam."})]})]});return r.jsxs(r.Fragment,{children:[i,r.jsx(o,{component:s,href:n.auth.firebase.login,size:"large",color:"inherit",variant:"contained",startIcon:r.jsx(t,{icon:"eva:arrow-ios-back-fill"}),sx:{alignSelf:"center"},children:"Return to sign in"})]})}function R(){return r.jsxs(r.Fragment,{children:[r.jsx(l,{children:r.jsx("title",{children:" Firebase: Verify"})}),r.jsx(h,{})]})}export{R as default};