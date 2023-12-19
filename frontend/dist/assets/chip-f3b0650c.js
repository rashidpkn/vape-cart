import{a8 as e,a9 as n,aB as o,aC as c,aD as h,ah as s,ac as b,ax as g,ad as m,aj as f,ag as u,as as d,aG as x,aK as y}from"./index-08ed3728.js";import{C}from"./custom-breadcrumbs-848839cc.js";import{M as i}from"./Chip-eab9f24a.js";import{C as j}from"./CardContent-b36a4259.js";function r({variant:l="filled"}){const a=()=>{console.info("You clicked the delete icon.")},t=p=>e.jsx(b,{variant:"overline",component:"div",sx:{color:"text.secondary",mb:1},children:p});return e.jsxs(n,{spacing:3,children:[e.jsxs(n,{spacing:1,flexWrap:"wrap",component:o,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{variant:l,label:"Default deletable",avatar:e.jsx(c,{children:"M"}),onDelete:a}),e.jsx(i,{variant:l,clickable:!0,label:"Default clickable",avatar:e.jsx(c,{children:"M"})}),e.jsx(i,{variant:l,label:"Primary deletable",avatar:e.jsx(c,{alt:"Natacha",src:h.image.avatar(1)}),color:"primary",onDelete:a}),e.jsx(i,{variant:l,clickable:!0,label:"Primary clickable",avatar:e.jsx(c,{alt:"Natacha",src:h.image.avatar(1)}),color:"primary"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Secondary deletable",onDelete:a,color:"secondary"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Secondary clickable",color:"secondary"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Info deletable",onDelete:a,color:"info"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Info clickable",color:"info"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Success deletable",onDelete:a,color:"success"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Success clickable",color:"success"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Warning deletable",onDelete:a,color:"warning"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Warning clickable",color:"warning"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Error deletable",onDelete:a,color:"error"}),e.jsx(i,{clickable:!0,variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Error clickable",color:"error"})]}),e.jsxs("div",{children:[t("Custom icon"),e.jsxs(n,{spacing:1,flexWrap:"wrap",component:o,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Custom icon",onDelete:a,deleteIcon:e.jsx(s,{width:24,icon:"eva:checkmark-fill"})}),e.jsx(i,{variant:l,avatar:e.jsx(c,{children:"M"}),label:"Custom icon",onDelete:a,deleteIcon:e.jsx(s,{width:24,icon:"eva:checkmark-fill"}),color:"info"})]})]}),e.jsxs("div",{children:[t("Disabled"),e.jsxs(n,{spacing:1,flexWrap:"wrap",component:o,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{disabled:!0,variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Disabled",onDelete:a}),e.jsx(i,{disabled:!0,variant:l,avatar:e.jsx(c,{children:"M"}),label:"Disabled",onDelete:a,color:"info"})]})]}),e.jsxs("div",{children:[t("Sizes"),e.jsxs(n,{spacing:1,flexWrap:"wrap",component:o,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Normal",onDelete:a,color:"info"}),e.jsx(i,{variant:l,size:"small",avatar:e.jsx(c,{children:"M"}),label:"Small",onDelete:a,color:"info"})]})]})]})}r.propTypes={variant:g.string};function k(){return e.jsxs(e.Fragment,{children:[e.jsx(m,{sx:{py:5,bgcolor:l=>l.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(f,{children:e.jsx(C,{heading:"Chip",links:[{name:"Components",href:u.components},{name:"Chip"}],moreLink:["https://mui.com/components/chips"]})})}),e.jsx(f,{sx:{my:10},children:e.jsxs(m,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[e.jsxs(d,{children:[e.jsx(x,{title:"Filled"}),e.jsx(j,{children:e.jsx(r,{})})]}),e.jsxs(d,{children:[e.jsx(x,{title:"Outlined"}),e.jsx(j,{children:e.jsx(r,{variant:"outlined"})})]}),e.jsxs(d,{children:[e.jsx(x,{title:"Soft"}),e.jsx(j,{children:e.jsx(r,{variant:"soft"})})]})]})})]})}function I(){return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx("title",{children:" MUI: Chip"})}),e.jsx(k,{})]})}export{I as default};