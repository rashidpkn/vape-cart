import{fj as v,D as s,a8 as e,ad as n,aj as o,ag as P,a9 as i,bz as y,ah as L,ac as R,aH as q}from"./index-bf334511.js";import{C as w}from"./custom-breadcrumbs-3a310c1d.js";import{C as l}from"./Card-6dc62dad.js";import{C as u}from"./CardHeader-d007181f.js";import{R as M}from"./RadioGroup-be7c58a2.js";import{F as S}from"./FormControlLabel-85e6080d.js";import{R as k}from"./Radio-28939117.js";import{b as F}from"./TablePagination-5c424e39.js";import"./FormGroup-adfe5637.js";import"./SwitchBase-f8898c21.js";import"./Select-1c3a8fd5.js";import"./Menu-3b093474.js";function E(){const{allLangs:c,currentLang:t,t:m,onChangeLang:g}=v(),[d,p]=s.useState(!1);s.useEffect(()=>p(!0),[]);const[h,r]=s.useState(2),[x,j]=s.useState(10),b=s.useCallback((a,C)=>{r(C)},[]),f=s.useCallback(a=>{j(parseInt(a.target.value,10)),r(0)},[]);return d?e.jsxs(e.Fragment,{children:[e.jsx(n,{sx:{py:5,bgcolor:a=>a.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(o,{children:e.jsx(w,{heading:"Multi Language",links:[{name:"Components",href:P.components},{name:"Multi Language"}],moreLink:["https://react.i18next.com","https://mui.com/guides/localization/#main-content"]})})}),e.jsx(o,{sx:{my:10},children:e.jsxs(i,{spacing:5,children:[e.jsxs(l,{children:[e.jsx(u,{title:"Flexible"}),e.jsxs(n,{sx:{p:3},children:[e.jsx(M,{row:!0,value:t.value,onChange:a=>g(a.target.value),children:c.map(a=>e.jsx(S,{value:a.value,label:a.label,control:e.jsx(k,{})},a.label))}),e.jsx(y,{title:t.label,children:e.jsxs(i,{direction:"row",alignItems:"center",sx:{typography:"h2",my:3},children:[e.jsx(L,{icon:t.icon,width:32,sx:{mr:1,borderRadius:1}}),m("demo.title")]})}),e.jsx(R,{children:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Praesent ac massa at ligula laoreet iaculis. Vivamus in erat ut urna cursus vestibulum. In ac felis quis tortor malesuada pretium. Nulla porta dolor. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Cras varius. Nunc nec neque. Phasellus tempus."})]})]}),e.jsxs(l,{children:[e.jsx(u,{title:"System",sx:{pb:2}}),e.jsx(F,{component:"div",count:100,page:h,onPageChange:b,rowsPerPage:x,onRowsPerPageChange:f})]})]})})]}):null}function K(){return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx("title",{children:" Extra: Multi Language"})}),e.jsx(E,{})]})}export{K as default};