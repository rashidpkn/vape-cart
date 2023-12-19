import{a8 as e,be as u,aS as H,aH as P,ah as T,ba as L,aB as W,ac as v,ax as z,D as S,a9 as k,bA as w,ad as G,aj as A,ag as U,as as m,aG as f,aK as $}from"./index-80ed1a65.js";import{C as N}from"./custom-breadcrumbs-d8f83c0f.js";import{a as E,T as d,f as y,b as M,d as _,c as F}from"./table-pagination-custom-d7e34a62.js";import{T as b,a as x,b as j}from"./TableContainer-a0ef1236.js";import{T as n}from"./TablePagination-0d888b24.js";import{u as I,g as K,e as O}from"./use-table-1c6afd17.js";import{C as J}from"./Checkbox-5d5b6085.js";import{C as p}from"./component-block-6814710d.js";import"./SwitchBase-e1bf7dff.js";function h(a,r,s,i,o){return{name:a,calories:r,fat:s,carbs:i,protein:o}}const V=[h("Frozen yoghurt",159,6,24,4),h("Ice cream sandwich",237,9,37,4.3),h("Eclair",262,16,24,6),h("Cupcake",305,3.7,67,4.3),h("Gingerbread",356,16,49,3.9)],X=[{id:"dessert",label:"Dessert (100g serving)"},{id:"calories",label:"Calories",align:"right"},{id:"fat",label:"Fat (g)",align:"right"},{id:"carbs",label:"Carbs (g)",align:"right"},{id:"protein",label:"Protein (g)",align:"right"}];function q(){return e.jsx(b,{sx:{mt:3,overflow:"unset"},children:e.jsx(u,{children:e.jsxs(x,{sx:{minWidth:800},children:[e.jsx(E,{headLabel:X}),e.jsx(j,{children:V.map(a=>e.jsxs(d,{children:[e.jsx(n,{children:a.name}),e.jsx(n,{align:"right",children:a.calories}),e.jsx(n,{align:"right",children:a.fat}),e.jsx(n,{align:"right",children:a.carbs}),e.jsx(n,{align:"right",children:a.protein})]},a.name))})]})})})}function g(a,r,s,i,o,l){return{name:a,calories:r,fat:s,carbs:i,protein:o,price:l,history:[{date:"2020-01-05",customerId:"11091700",amount:3},{date:"2020-01-02",customerId:"Anonymous",amount:1}]}}const Q=[g("Frozen yoghurt",159,6,24,4,3.99),g("Ice cream sandwich",237,9,37,4.3,4.99),g("Eclair",262,16,24,6,3.79),g("Cupcake",305,3.7,67,4.3,2.5),g("Gingerbread",356,16,49,3.9,1.5)];function Y(){return e.jsx(b,{sx:{mt:3,overflow:"unset"},children:e.jsx(u,{children:e.jsxs(x,{sx:{minWidth:800},children:[e.jsx(y,{children:e.jsxs(d,{children:[e.jsx(n,{}),e.jsx(n,{children:"Dessert (100g serving)"}),e.jsx(n,{align:"right",children:"Calories"}),e.jsx(n,{align:"right",children:"Fat (g)"}),e.jsx(n,{align:"right",children:"Carbs (g)"}),e.jsx(n,{align:"right",children:"Protein (g)"})]})}),e.jsx(j,{children:Q.map(a=>e.jsx(R,{row:a},a.name))})]})})})}function R({row:a}){const r=H();return e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx(n,{children:e.jsx(P,{size:"small",color:r.value?"inherit":"default",onClick:r.onToggle,children:e.jsx(T,{icon:r.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"})})}),e.jsx(n,{component:"th",scope:"row",children:a.name}),e.jsx(n,{align:"right",children:a.calories}),e.jsx(n,{align:"right",children:a.fat}),e.jsx(n,{align:"right",children:a.carbs}),e.jsx(n,{align:"right",children:a.protein})]}),e.jsx(d,{children:e.jsx(n,{sx:{py:0},colSpan:6,children:e.jsx(L,{in:r.value,unmountOnExit:!0,children:e.jsxs(W,{variant:"outlined",sx:{py:2,borderRadius:1.5,...r.value&&{boxShadow:s=>s.customShadows.z20}},children:[e.jsx(v,{variant:"h6",sx:{m:2,mt:0},children:"History"}),e.jsxs(x,{size:"small","aria-label":"purchases",children:[e.jsx(y,{children:e.jsxs(d,{children:[e.jsx(n,{children:"Date"}),e.jsx(n,{children:"Customer"}),e.jsx(n,{align:"right",children:"Amount"}),e.jsx(n,{align:"right",children:"Total price ($)"})]})}),e.jsx(j,{children:a.history.map(s=>e.jsxs(d,{children:[e.jsx(n,{component:"th",scope:"row",children:s.date}),e.jsx(n,{children:s.customerId}),e.jsx(n,{align:"right",children:s.amount}),e.jsx(n,{align:"right",children:Math.round(s.amount*a.price*100)/100})]},s.date))})]})]})})})})]})}R.propTypes={row:z.object};function c(a,r,s,i,o){return{name:a,calories:r,fat:s,carbs:i,protein:o}}const Z=[c("Cupcake",305,3.7,67,4.3),c("Donut",452,25,51,4.9),c("Eclair",262,16,24,6),c("Frozen yoghurt",159,6,24,4),c("Gingerbread",356,16,49,3.9),c("Honeycomb",408,3.2,87,6.5),c("Ice cream sandwich",237,9,37,4.3),c("Jelly Bean",375,0,94,0),c("KitKat",518,26,65,7),c("Lollipop",392,.2,98,0),c("Marshmallow",318,0,81,2),c("Nougat",360,19,9,37)],ee=[{id:"name",label:"Dessert (100g serving)",align:"left"},{id:"calories",label:"Calories",align:"center"},{id:"fat",label:"Fat (g)",align:"center"},{id:"carbs",label:"Carbs (g)",align:"center"},{id:"protein",label:"Protein (g)",align:"center"}];function ae(){const a=I({defaultOrderBy:"calories"}),[r,s]=S.useState([]);S.useEffect(()=>{s(Z)},[]);const i=ne({inputData:r,comparator:K(a.order,a.orderBy)}),o=a.dense?34:54;return e.jsxs("div",{children:[e.jsxs(k,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3},children:[e.jsx(v,{variant:"h6",children:"Sorting & Selecting"}),e.jsx(w,{title:"Filter list",children:e.jsx(P,{children:e.jsx(T,{icon:"ic:round-filter-list"})})})]}),e.jsxs(b,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(M,{dense:a.dense,numSelected:a.selected.length,rowCount:r.length,onSelectAllRows:l=>a.onSelectAllRows(l,r.map(C=>C.name)),action:e.jsx(w,{title:"Delete",children:e.jsx(P,{color:"primary",children:e.jsx(T,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(u,{children:e.jsxs(x,{size:a.dense?"small":"medium",sx:{minWidth:800},children:[e.jsx(E,{order:a.order,orderBy:a.orderBy,headLabel:ee,rowCount:r.length,numSelected:a.selected.length,onSort:a.onSort,onSelectAllRows:l=>a.onSelectAllRows(l,r.map(C=>C.name))}),e.jsxs(j,{children:[i.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(l=>e.jsxs(d,{hover:!0,onClick:()=>a.onSelectRow(l.name),selected:a.selected.includes(l.name),children:[e.jsx(n,{padding:"checkbox",children:e.jsx(J,{checked:a.selected.includes(l.name)})}),e.jsxs(n,{children:[" ",l.name," "]}),e.jsx(n,{align:"center",children:l.calories}),e.jsx(n,{align:"center",children:l.fat}),e.jsx(n,{align:"center",children:l.carbs}),e.jsx(n,{align:"center",children:l.protein})]},l.name)),e.jsx(_,{height:o,emptyRows:O(a.page,a.rowsPerPage,r.length)})]})]})})]}),e.jsx(F,{count:i.length,page:a.page,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage,dense:a.dense,onChangeDense:a.onChangeDense})]})}function ne({inputData:a,comparator:r}){const s=a.map((i,o)=>[i,o]);return s.sort((i,o)=>{const l=r(i[0],o[0]);return l!==0?l:i[1]-o[1]}),a=s.map(i=>i[0]),a}function t(a,r,s,i){const o=s/i;return{name:a,code:r,population:s,size:i,density:o}}const B=[t("India","IN",1324171354,3287263),t("China","CN",1403500365,9596961),t("Italy","IT",60483973,301340),t("United States","US",327167434,9833520),t("Canada","CA",37602103,9984670),t("Australia","AU",25475400,7692024),t("Germany","DE",83019200,357578),t("Ireland","IE",4857e3,70273),t("Mexico","MX",126577691,1972550),t("Japan","JP",126317e3,377973),t("France","FR",67022e3,640679),t("United Kingdom","GB",67545757,242495),t("Russia","RU",146793744,17098246),t("Nigeria","NG",200962417,923768),t("Brazil","BR",210147125,8515767)],D=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:a=>a.toLocaleString("en-US")},{id:"size",label:"Size (km²)",minWidth:170,align:"right",format:a=>a.toLocaleString("en-US")},{id:"density",label:"Density",minWidth:170,align:"right",format:a=>a.toFixed(2)}];function re(){const a=I({defaultRowsPerPage:10});return e.jsxs(e.Fragment,{children:[e.jsx(b,{sx:{overflow:"unset"},children:e.jsx(u,{sx:{maxHeight:400},children:e.jsxs(x,{stickyHeader:!0,sx:{minWidth:800},children:[e.jsxs(y,{children:[e.jsxs(d,{children:[e.jsx(n,{align:"center",colSpan:2,sx:{background:r=>r.palette.background.paper},children:"Country"}),e.jsx(n,{align:"center",colSpan:3,sx:{background:r=>r.palette.background.paper},children:"Details"})]}),e.jsx(d,{children:D.map(r=>e.jsx(n,{align:r.align,style:{top:56,minWidth:r.minWidth},children:r.label},r.id))})]}),e.jsx(j,{children:B.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(r=>e.jsx(d,{hover:!0,role:"checkbox",tabIndex:-1,children:D.map(s=>{const i=r[s.id];return e.jsx(n,{align:s.align,children:s.format&&typeof i=="number"?s.format(i):i},s.id)})},r.code))})]})})}),e.jsx(F,{count:B.length,page:a.page,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}function se(){return e.jsxs(e.Fragment,{children:[e.jsx(G,{sx:{py:5,bgcolor:a=>a.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(A,{children:e.jsx(N,{heading:"Table",links:[{name:"Components",href:U.components},{name:"Table"}],moreLink:["https://mui.com/components/tables"]})})}),e.jsx(A,{sx:{my:10},children:e.jsxs(k,{spacing:3,children:[e.jsx(p,{children:e.jsxs(m,{sx:{width:1},children:[e.jsx(f,{title:"Basic Table"}),e.jsx(q,{})]})}),e.jsx(p,{children:e.jsx(m,{sx:{width:1},children:e.jsx(ae,{})})}),e.jsx(p,{children:e.jsxs(m,{sx:{width:1},children:[e.jsx(f,{title:"Grouping & FixedHeader"}),e.jsx(re,{})]})}),e.jsx(p,{children:e.jsxs(m,{sx:{width:1},children:[e.jsx(f,{title:"Collapsible Table"}),e.jsx(Y,{})]})})]})})]})}function je(){return e.jsxs(e.Fragment,{children:[e.jsx($,{children:e.jsx("title",{children:" MUI: Table"})}),e.jsx(se,{})]})}export{je as default};