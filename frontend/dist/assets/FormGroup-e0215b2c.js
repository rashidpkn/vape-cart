import{cp as p,cq as w,am as f,ce as e,D as x,cg as F,ch as G,cQ as d,cR as C,a8 as R,cm as y,cn as g}from"./index-dca3a811.js";function h(o){return p("MuiFormGroup",o)}w("MuiFormGroup",["root","row","error"]);const M=["className","row"],S=o=>{const{classes:r,row:t,error:s}=o;return g({root:["root",t&&"row",s&&"error"]},h,r)},U=f("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),j=x.forwardRef(function(r,t){const s=F({props:r,name:"MuiFormGroup"}),{className:a,row:n=!1}=s,l=G(s,M),u=d(),i=C({props:s,muiFormControl:u,states:["error"]}),c=e({},s,{row:n,error:i.error}),m=S(c);return R.jsx(U,e({className:y(m.root,a),ownerState:c,ref:t},l))}),D=j;export{D as F};
