import{r as u,u as h,j as e,B as b,g as j,D as g,b as C,W as f,c as y}from"./index-eab1947b.js";import{C as m}from"./custom-breadcrumbs-a2330046.js";import{C as v}from"./Card-4f9a49c9.js";import{T,a as k}from"./TableBody-679881fd.js";import{T as w,a as p,b as l}from"./TableRow-c5a0faf0.js";import{C as S}from"./Checkbox-d0a439ca.js";function R(){const[d,n]=u.useState([{enable:!1,day:"Sun",open:"",close:"",lastCall:""},{enable:!1,day:"Mon",open:"",close:"",lastCall:""},{enable:!1,day:"Thu",open:"",close:"",lastCall:""},{enable:!1,day:"Wen",open:"",close:"",lastCall:""},{enable:!1,day:"Tue",open:"",close:"",lastCall:""},{enable:!1,day:"Fri",open:"",close:"",lastCall:""},{enable:!1,day:"Sat",open:"",close:"",lastCall:""}]),{user:s}=h();u.useEffect(()=>{s.deliverySettings&&n(s.deliverySettings)},[s]);const c=async()=>{const t=j(g,"users",s.uid);await C(t,{deliverySettings:d}),alert("Updated")};return e.jsx(v,{children:e.jsxs(T,{sx:{overflow:"scroll"},children:[e.jsx(w,{children:e.jsxs(p,{children:[e.jsx(l,{}),e.jsx(l,{children:"Days"}),e.jsx(l,{children:"Open Time"}),e.jsx(l,{children:"Close Time"}),e.jsx(l,{children:"Last Call"})]})}),e.jsxs(k,{children:[d.map((t,x)=>e.jsx(B,{row:t,setDeliverySettings:n},x)),e.jsxs(p,{children:[e.jsx(l,{colSpan:4,align:"right"}),e.jsx(l,{align:"center",children:e.jsx(b,{variant:"contained",color:"success",onClick:()=>c(),children:"Submit"})})]})]})]})})}const B=({row:d,setDeliverySettings:n})=>{const{day:s,open:c,close:t,lastCall:x,enable:i}=d;return e.jsxs(p,{children:[e.jsx(l,{children:e.jsx(S,{checked:i,onChange:r=>n(o=>o.map(a=>a.day===s?{...a,enable:r.target.checked,open:"",close:"",lastCall:""}:a))})}),e.jsx(l,{children:s}),e.jsx(l,{children:e.jsx("input",{disabled:!i,sx:{width:"200px"},type:"time",style:{width:"150px",height:"40px",borderRadius:"4px",background:"none",outline:"none",border:"1px solid black",padding:"0 10px"},placeholder:"Open Time",value:c,onChange:r=>n(o=>o.map(a=>a.day===s?{...a,open:r.target.value}:a))})}),e.jsx(l,{children:e.jsx("input",{disabled:!i,sx:{width:"200px"},type:"time",style:{width:"150px",height:"40px",borderRadius:"4px",background:"none",outline:"none",border:"1px solid black",padding:"0 10px"},placeholder:"Close Time",value:t,onChange:r=>n(o=>o.map(a=>a.day===s?{...a,close:r.target.value}:a))})}),e.jsx(l,{children:e.jsx("input",{disabled:!i,sx:{width:"200px"},type:"time",style:{width:"150px",height:"40px",borderRadius:"4px",background:"none",outline:"none",border:"1px solid black",padding:"0 10px"},placeholder:"Last Call",value:x,onChange:r=>n(o=>o.map(a=>a.day===s?{...a,lastCall:r.target.value}:a))})})]},s)};function A(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx("title",{children:" Dashboard: Delivery Settings"})}),e.jsxs(y,{px:5,children:[e.jsx(m,{heading:"Delivery Settings",links:[{}],sx:{mb:{xs:3,md:5}}}),e.jsx(R,{})]})]})}export{A as default};
