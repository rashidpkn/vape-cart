import{b3 as m,c$ as n,ao as s,aT as d,aQ as r,bf as p}from"./index-feebbf1a.js";import{u as h}from"./use-params-eb8f90be.js";import{C as x}from"./custom-breadcrumbs-d6d81004.js";import{U as c}from"./user-new-edit-form-c6928387.js";import"./form-provider-9a490e1c.js";import"./format-number-eb8fa3ee.js";import"./image-cce2e09f.js";import"./transition-bee6630b.js";import"./Checkbox-fc4debaa.js";import"./Switch-436da68c.js";import"./yup-db689d1d.js";import"./CircularProgress-b5d22d6d.js";function f(){const a=m(),e=h(),{id:o}=e,t=n.find(i=>i.id===o);return s.jsxs(d,{maxWidth:a.themeStretch?!1:"lg",children:[s.jsx(x,{heading:"Edit",links:[{name:"Dashboard",href:r.dashboard.root},{name:"User",href:r.dashboard.user.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),s.jsx(c,{currentUser:t})]})}function S(){return s.jsxs(s.Fragment,{children:[s.jsx(p,{children:s.jsx("title",{children:" Dashboard: User Edit"})}),s.jsx(f,{})]})}export{S as default};