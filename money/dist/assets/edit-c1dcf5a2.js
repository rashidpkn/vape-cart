import{aN as u,D as r,af as s,aB as h,ay as a,bz as f,db as x,dc as b,bA as l,bB as E,aZ as U}from"./index-b2d29002.js";import{u as j}from"./use-params-40367662.js";import{C as g}from"./custom-breadcrumbs-eefc6b9c.js";import{U as C}from"./user-new-edit-form-49c0880b.js";import"./form-provider-15823880.js";import"./format-number-129f8896.js";import"./Switch-016abbf4.js";import"./transition-bee6630b.js";import"./Checkbox-b07724f1.js";import"./image-0ae3fe22.js";import"./Chip-eca40d5c.js";import"./Autocomplete-4689974f.js";import"./Close-26e77fc6.js";import"./yup-03c81077.js";import"./CircularProgress-27d3ba42.js";function B(){const e=u(),o=j(),{id:i}=o,[m,n]=r.useState(),d=async()=>{const p=await f(x(l(E,"users"),b("uid","==",i))),t=[];p.forEach(c=>{t.push(c.data())}),n(t[0])};return r.useEffect(()=>{d()},[]),s.jsxs(h,{maxWidth:e.themeStretch?!1:"lg",children:[s.jsx(g,{heading:"Edit",links:[{name:"Dashboard",href:a.dashboard.root},{name:"User",href:a.dashboard.user.root}],sx:{mb:{xs:3,md:5}}}),s.jsx(C,{currentUser:m})]})}function _(){return s.jsxs(s.Fragment,{children:[s.jsx(U,{children:s.jsx("title",{children:" Dashboard: User Edit"})}),s.jsx(B,{})]})}export{_ as default};
