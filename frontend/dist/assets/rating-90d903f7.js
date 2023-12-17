import{D as c,a8 as e,ad as d,aj as m,ag as h,ah as a,aw as p,aH as f}from"./index-086ce406.js";import{C as g}from"./custom-breadcrumbs-5a71242b.js";import{C as n}from"./component-block-90b1786f.js";import{M as b}from"./Masonry-d9a6a614.js";import{R as s}from"./Rating-99cf4d8b.js";import"./CardHeader-d9c43941.js";import"./visuallyHidden-14c3de6e.js";const y={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"},x={1:{icon:e.jsx(a,{icon:"ic:round-sentiment-very-dissatisfied"}),label:"Very Dissatisfied"},2:{icon:e.jsx(a,{icon:"ic:round-sentiment-dissatisfied"}),label:"Dissatisfied"},3:{icon:e.jsx(a,{icon:"ic:round-sentiment-neutral"}),label:"Neutral"},4:{icon:e.jsx(a,{icon:"ic:round-sentiment-satisfied"}),label:"Satisfied"},5:{icon:e.jsx(a,{icon:"ic:round-sentiment-very-satisfied"}),label:"Very Satisfied"}};function C(){const[t,l]=c.useState(2),[r,j]=c.useState(-1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{sx:{py:5,bgcolor:i=>i.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(m,{children:e.jsx(g,{heading:"Rating",links:[{name:"Components",href:h.components},{name:"Rating"}],moreLink:["https://mui.com/components/rating"]})})}),e.jsx(m,{sx:{my:10},children:e.jsxs(b,{columns:{xs:1,sm:2,md:3},spacing:3,children:[e.jsx(n,{title:"Controlled",children:e.jsx(s,{name:"simple-controlled",value:t,onChange:(i,o)=>{l(o)}})}),e.jsx(n,{title:"Read only",children:e.jsx(s,{name:"read-only",value:t,readOnly:!0})}),e.jsx(n,{title:"Disabled",children:e.jsx(s,{name:"disabled",value:t,disabled:!0})}),e.jsx(n,{title:"Pristine",children:e.jsx(s,{name:"pristine",value:null})}),e.jsx(n,{title:"Custom empty icon",children:e.jsx(s,{name:"customized-empty",defaultValue:2,precision:.5})}),e.jsx(n,{title:"Custom icon and color",children:e.jsx(s,{name:"customized-color",defaultValue:2,getLabelText:i=>`${i} Heart${i!==1?"s":""}`,precision:.5,icon:e.jsx(a,{icon:"solar:heart-bold"}),emptyIcon:e.jsx(a,{icon:"solar:heart-bold"}),sx:{color:"info.main","&:hover":{color:"info.dark"}}})}),e.jsx(n,{title:"10 stars",children:e.jsx(s,{name:"customized-10",defaultValue:2,max:10})}),e.jsx(n,{title:"Custom icon set",children:e.jsx(s,{name:"customized-icons",defaultValue:2,getLabelText:i=>x[i].label,IconContainerComponent:u})}),e.jsxs(n,{title:"Hover feedback",children:[e.jsx(s,{name:"hover-feedback",value:t,precision:.5,onChange:(i,o)=>{l(o)},onChangeActive:(i,o)=>{j(o)}}),t!==null&&e.jsx(d,{sx:{ml:2},children:y[r!==-1?r:t]})]}),e.jsxs(n,{title:"Half ratings",children:[e.jsx(s,{name:"half-rating",defaultValue:2.5,precision:.5}),e.jsx(s,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})]}),e.jsxs(n,{title:"Sizes",children:[e.jsx(s,{name:"size-small",defaultValue:2,size:"small"}),e.jsx(s,{name:"size-medium",defaultValue:2}),e.jsx(s,{name:"size-large",defaultValue:2,size:"large"})]})]})})]})}function u(t){const{value:l,...r}=t;return e.jsx("span",{...r,children:x[l].icon})}u.propTypes={value:p.number};function P(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx("title",{children:" MUI: Rating"})}),e.jsx(C,{})]})}export{P as default};