import{cm as p,cn as w,am as f,cb as e,D as x,cd as F,ce as d,cN as G,cO as C,a8 as y,cj as R,ck as j}from"./index-cd27e110.js";function M(o){return p("MuiFormGroup",o)}w("MuiFormGroup",["root","row","error"]);const N=["className","row"],S=o=>{const{classes:r,row:t,error:s}=o;return j({root:["root",t&&"row",s&&"error"]},M,r)},U=f("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),g=x.forwardRef(function(r,t){const s=F({props:r,name:"MuiFormGroup"}),{className:a,row:n=!1}=s,l=d(s,N),u=G(),i=C({props:s,muiFormControl:u,states:["error"]}),c=e({},s,{row:n,error:i.error}),m=S(c);return y.jsx(U,e({className:R(m.root,a),ownerState:c,ref:t},l))}),v=g;export{v as F};
