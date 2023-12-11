import{be as de,a5 as Ke,bN as Qe,bd as Ze,D as R,ag as ee,a8 as e,al as I,ac as u,a9 as c,ad as j,bO as Ye,aM as _,aw as i,af as Se,aD as ae,ah as w,b6 as Je,ai as Te,bJ as Xe,aA as pe,bg as xe,ae as $,bh as he,aG as F,bP as es,bQ as ss,bR as rs,bS as ns,aB as se,aS as as,av as Y,b8 as is,bT as os,ao as me,bU as ts,bz as ls,aF as J,aP as Ie,aZ as ie,bV as be,aU as De,aE as cs,a_ as ds,bW as ps,ba as xs,a6 as hs,am as ms,an as us}from"./index-bf334511.js";import{c as Oe,a as A,d as K,e as M,b as ue,R as O,f as gs,g as ye,h as js,F as ge,i as bs,j as ys,C as fs}from"./form-provider-4c9d564d.js";import{o as Ae}from"./yup-edfd6dd7.js";import{h as vs,i as ws,j as Cs}from"./_product-ce672968.js";import{C as Q}from"./Card-6dc62dad.js";import{C as ne}from"./CardHeader-d007181f.js";import{M as P}from"./Chip-d1d4c445.js";import{F as oe}from"./FormControlLabel-85e6080d.js";import{S as ks}from"./Switch-62976b6d.js";import{L as Fe}from"./LoadingButton-185667b8.js";import{a as H,c as te}from"./format-number-540433dd.js";import{I as Pe}from"./image-2ad327f3.js";import{C as Rs,a as Ss}from"./color-picker-89b3ed00.js";import{F as Ts}from"./Fab-2d54f5bd.js";import{S as T}from"./Skeleton-68e38d46.js";import{P as Is,p as Ds}from"./Pagination-3ff89427.js";import{A as Os}from"./Autocomplete-7badf00e.js";import{T as ze,I as fe,F as As}from"./TextField-e6e01232.js";import{C as X}from"./Checkbox-940e9fd7.js";import{R as Fs}from"./Radio-28939117.js";import{S as Ps}from"./Slider-ff272239.js";import{R as V}from"./Rating-9d6f1ef9.js";import{C as zs}from"./confirm-dialog-eae5bdc5.js";import{T as Ls}from"./table-pagination-custom-edf98571.js";import{T as W}from"./TablePagination-5c424e39.js";import{F as ve}from"./FormControl-96833b24.js";import{S as we,O as Ce}from"./Select-1c3a8fd5.js";import{s as Ws}from"./sumBy-baebb5b9.js";import{a as qs}from"./axios-836cbfd4.js";import{D as $s}from"./DialogTitle-4a7e452e.js";import{D as Ns}from"./DialogContent-30366fda.js";import{D as Us}from"./DialogActions-849f84a7.js";import{u as Es,L as Gs}from"./lightbox-46207e3d.js";import{u as ke,a as Re,c as Bs}from"./use-carousel-79361dab.js";import{M as Ms}from"./markdown-a18150c7.js";const _s=qs.create({baseURL:"/"}),Z=_s;function Hs({currentProduct:s}){const o=de(),n=Ke("up","md"),{enqueueSnackbar:a}=Qe(),{user:t}=Ze(),x=Oe().shape({name:A().required("Name is required"),subDescription:A().required("Sub description is required"),content:A().required("Description is required"),images:K().min(1,"Images is required"),code:A().required("Code is required"),SKU:A().required("SKU is required"),quantity:M().moreThan(0,"Quantity is required"),category:A().required("Category is required"),colors:K().min(1,"Colors is required"),sizes:K().min(1,"Sizes is required"),tags:K().min(2,"Must have at least 2 tags"),regularPrice:M().moreThan(0,"Price should not be $0.00"),salePrice:M().moreThan(0,"Price should not be $0.00"),tax:M().moreThan(-1,"Tax should not be 0%")}),p=R.useMemo(()=>({id:(s==null?void 0:s.id)||"",name:(s==null?void 0:s.name)||"",subDescription:(s==null?void 0:s.subDescription)||"",content:(s==null?void 0:s.content)||"",images:(s==null?void 0:s.images)||[],code:(s==null?void 0:s.code)||"",SKU:(s==null?void 0:s.SKU)||"",regularPrice:(s==null?void 0:s.regularPrice)||0,quantity:(s==null?void 0:s.quantity)||0,salePrice:(s==null?void 0:s.salePrice)||0,tags:(s==null?void 0:s.tags)||[],tax:(s==null?void 0:s.tax)||0,category:(s==null?void 0:s.category)||"",colors:(s==null?void 0:s.colors)||[],sizes:(s==null?void 0:s.sizes)||[]}),[s]),h=ue({resolver:Ae(x),defaultValues:p}),{reset:r,watch:l,setValue:m,handleSubmit:b,formState:{isSubmitting:g}}=h,y=l();R.useEffect(()=>{s&&r(p)},[s,p,r]);const C=b(async f=>{try{await new Promise(d=>setTimeout(d,500)),s?await Z.patch("products",{...f,username:t.displayName,userId:t.id}):await Z.post("products",{...f,username:t.displayName,userId:t.id}),r(),a(s?"Update success!":"Create success!"),o.push(ee.dashboard.product.root)}catch(d){console.error(d)}}),v=R.useCallback(f=>{const d=y.images||[],k=f.map(S=>Object.assign(S,{preview:URL.createObjectURL(S)}));m("images",[...d,...k],{shouldValidate:!0})},[m,y.images]),z=R.useCallback(f=>{var k;const d=y.images&&((k=y.images)==null?void 0:k.filter(S=>S!==f));m("images",d)},[m,y.images]),L=R.useCallback(()=>{m("images",[])},[m]),G=e.jsxs(e.Fragment,{children:[n&&e.jsxs(I,{md:4,children:[e.jsx(u,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(I,{xs:12,md:8,children:e.jsxs(Q,{children:[!n&&e.jsx(ne,{title:"Details"}),e.jsxs(c,{spacing:3,sx:{p:3},children:[e.jsx(O,{name:"name",label:"Product Name"}),e.jsx(O,{name:"subDescription",label:"Sub Description",multiline:!0,rows:4}),e.jsxs(c,{spacing:1.5,children:[e.jsx(u,{variant:"subtitle2",children:"Content"}),e.jsx(bs,{simple:!0,name:"content"})]}),e.jsxs(c,{spacing:1.5,children:[e.jsx(u,{variant:"subtitle2",children:"Images"}),e.jsx(ys,{multiple:!0,name:"images",maxSize:3145728,onDrop:v,onRemove:z,onRemoveAll:L,onUpload:async f=>{try{const d=new FormData;y.images.forEach(S=>{d.append("images",S)});const{data:k}=await Z.post("upload",d);m("images",k),alert("Image upload complete.")}catch{alert(" Image upload failed, try again.")}}})]})]})]})})]}),B=e.jsxs(e.Fragment,{children:[n&&e.jsxs(I,{md:4,children:[e.jsx(u,{variant:"h6",sx:{mb:.5},children:"Properties"}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(I,{xs:12,md:8,children:e.jsxs(Q,{children:[!n&&e.jsx(ne,{title:"Properties"}),e.jsxs(c,{spacing:3,sx:{p:3},children:[e.jsxs(j,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(O,{name:"code",label:"Product Code"}),e.jsx(O,{name:"SKU",label:"Product SKU"}),e.jsx(O,{name:"quantity",label:"Quantity",placeholder:"0",type:"number",InputLabelProps:{shrink:!0}}),e.jsx(gs,{native:!0,name:"category",label:"Category",InputLabelProps:{shrink:!0},children:vs.map(f=>e.jsx("optgroup",{label:f.group,children:f.classify.map(d=>e.jsx("option",{value:d,children:d},d))},f.group))}),e.jsx(ye,{checkbox:!0,name:"colors",label:"Colors",options:ws}),e.jsx(ye,{checkbox:!0,name:"sizes",label:"Sizes",options:Cs})]}),e.jsx(js,{name:"tags",label:"Tags",placeholder:"+ Tags",multiple:!0,freeSolo:!0,options:Ye.map(f=>f),getOptionLabel:f=>f,renderOption:(f,d)=>R.createElement("li",{...f,key:d},d),renderTags:(f,d)=>f.map((k,S)=>R.createElement(P,{...d({index:S}),key:k,label:k,size:"small",color:"info",variant:"soft"}))})]})]})})]}),N=e.jsxs(e.Fragment,{children:[n&&e.jsxs(I,{md:4,children:[e.jsx(u,{variant:"h6",sx:{mb:.5},children:"Pricing"}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Price related inputs"})]}),e.jsx(I,{xs:12,md:8,children:e.jsxs(Q,{children:[!n&&e.jsx(ne,{title:"Pricing"}),e.jsxs(c,{spacing:3,sx:{p:3},children:[e.jsx(O,{name:"regularPrice",label:"Regular Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(_,{position:"start",children:e.jsx(j,{component:"span",sx:{color:"text.disabled"},children:"$"})})}}),e.jsx(O,{name:"salePrice",label:"Sale Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(_,{position:"start",children:e.jsx(j,{component:"span",sx:{color:"text.disabled"},children:"$"})})}}),e.jsx(O,{name:"tax",label:"Tax (%)",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(_,{position:"start",children:e.jsx(j,{component:"span",sx:{color:"text.disabled"},children:"%"})})}})]})]})})]}),U=e.jsxs(e.Fragment,{children:[n&&e.jsx(I,{md:4}),e.jsxs(I,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:[e.jsx(oe,{control:e.jsx(ks,{defaultChecked:!0}),label:"Publish",sx:{flexGrow:1,pl:3}}),e.jsx(Fe,{type:"submit",variant:"contained",size:"large",loading:g,children:s?"Save Changes":"Create Product"})]})]});return e.jsx(ge,{methods:h,onSubmit:C,children:e.jsxs(I,{container:!0,spacing:3,children:[G,B,N,U]})})}Hs.propTypes={currentProduct:i.object};function Vs({totalItems:s}){return e.jsx(j,{component:Se,href:ee.product.checkout,sx:{right:0,top:112,zIndex:999,display:"flex",cursor:"pointer",position:"fixed",color:"text.primary",borderTopLeftRadius:16,borderBottomLeftRadius:16,bgcolor:"background.paper",padding:o=>o.spacing(1,3,1,2),boxShadow:o=>o.customShadows.dropdown,transition:o=>o.transitions.create(["opacity"]),"&:hover":{opacity:.72}},children:e.jsx(ae,{showZero:!0,badgeContent:s,color:"error",max:99,children:e.jsx(w,{icon:"solar:cart-3-bold",width:24})})})}Vs.propTypes={totalItems:i.number};function Le({product:s}){const{id:o,name:n,images:a,salePrice:t,colors:x,available:p,sizes:h,regularPrice:r,quantity:l}=s,m=Je(),b=ee.product.details(o),g=async()=>{const v={id:o,name:n,images:a,available:l,salePrice:t,colors:[x[0]],size:h[0],quantity:1};try{m(Xe(v))}catch(z){console.error(z)}},y=e.jsxs(j,{sx:{position:"relative",p:1},children:[e.jsx(Ts,{color:"warning",size:"medium",className:"add-cart-btn",onClick:g,sx:{right:16,bottom:16,zIndex:9,opacity:0,position:"absolute",transition:v=>v.transitions.create("all",{easing:v.transitions.easing.easeInOut,duration:v.transitions.duration.shorter})},children:e.jsx(w,{icon:"solar:cart-plus-bold",width:24})}),e.jsx(Pe,{alt:n,src:a[0],ratio:"1/1",sx:{borderRadius:1.5}})]}),C=e.jsxs(c,{spacing:2.5,sx:{p:3,pt:2},children:[e.jsx(Te,{component:Se,href:b,color:"inherit",variant:"subtitle2",noWrap:!0,children:n}),e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(Rs,{colors:x}),e.jsxs(c,{direction:"row",spacing:.5,sx:{typography:"subtitle1"},children:[r&&e.jsx(j,{component:"span",sx:{color:"text.disabled",textDecoration:"line-through"},children:H(r)}),e.jsx(j,{component:"span",children:H(t)})]})]})]});return e.jsxs(Q,{sx:{"&:hover .add-cart-btn":{opacity:1}},children:[y,C]})}Le.propTypes={product:i.object};function We({sx:s,...o}){return e.jsxs(pe,{variant:"outlined",sx:{borderRadius:2,...s},...o,children:[e.jsx(c,{sx:{p:1},children:e.jsx(T,{sx:{paddingTop:"100%"}})}),e.jsxs(c,{spacing:2,sx:{p:3,pt:2},children:[e.jsx(T,{sx:{width:.5,height:16}}),e.jsxs(c,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[e.jsxs(c,{direction:"row",children:[e.jsx(T,{variant:"circular",sx:{width:16,height:16}}),e.jsx(T,{variant:"circular",sx:{width:16,height:16}}),e.jsx(T,{variant:"circular",sx:{width:16,height:16}})]}),e.jsx(T,{sx:{width:40,height:16}})]})]})]})}We.propTypes={sx:i.object};function Gr({...s}){return e.jsxs(I,{container:!0,spacing:8,...s,children:[e.jsx(I,{xs:12,md:6,lg:7,children:e.jsx(T,{sx:{paddingTop:"100%"}})}),e.jsx(I,{xs:12,md:6,lg:5,children:e.jsxs(c,{spacing:3,children:[e.jsx(T,{variant:"circular",sx:{width:80,height:80}}),e.jsx(T,{sx:{height:240}}),e.jsx(T,{sx:{height:16}}),e.jsx(T,{sx:{height:16,width:.75}}),e.jsx(T,{sx:{height:16,width:.5}})]})}),e.jsx(I,{xs:12,children:e.jsx(c,{direction:"row",alignItems:"center",children:[...Array(3)].map((o,n)=>e.jsxs(c,{spacing:2,alignItems:"center",justifyContent:"center",sx:{width:1},children:[e.jsx(T,{variant:"circular",sx:{width:80,height:80}}),e.jsx(T,{sx:{height:16,width:160}}),e.jsx(T,{sx:{height:16,width:80}})]},n))})})]})}function Ks({products:s,loading:o,...n}){const a=e.jsx(e.Fragment,{children:[...Array(16)].map((x,p)=>e.jsx(We,{},p))}),t=e.jsx(e.Fragment,{children:s.map(x=>e.jsx(Le,{product:x},x.id))});return e.jsxs(e.Fragment,{children:[e.jsx(j,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},...n,children:o?a:t}),s.length>8&&e.jsx(Is,{count:8,sx:{mt:8,[`& .${Ds.ul}`]:{justifyContent:"center"}}})]})}Ks.propTypes={loading:i.bool,products:i.array};function Qs({sort:s,onSort:o,sortOptions:n}){var x;const a=xe(),t=(x=n.find(p=>p.value===s))==null?void 0:x.label;return e.jsxs(e.Fragment,{children:[e.jsxs($,{disableRipple:!0,color:"inherit",onClick:a.onOpen,endIcon:e.jsx(w,{icon:a.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold"},children:["Sort By:",e.jsx(j,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold"},children:t})]}),e.jsx(he,{open:a.open,onClose:a.onClose,sx:{width:140},children:n.map(p=>e.jsx(F,{selected:p.value===s,onClick:()=>{a.onClose(),o(p.value)},children:p.label},p.value))})]})}Qs.propTypes={onSort:i.func,sort:i.string,sortOptions:i.array};function Zs({query:s,results:o,onSearch:n,hrefItem:a,loading:t}){const x=de(),p=r=>{x.push(a(r))},h=r=>{if(s&&r.key==="Enter"){const l=o.filter(m=>m.name===s)[0];p(l.id)}};return e.jsx(Os,{sx:{width:{xs:1,sm:260}},loading:t,autoHighlight:!0,popupIcon:null,options:o,onInputChange:(r,l)=>n(l),getOptionLabel:r=>r.name,noOptionsText:e.jsx(es,{query:s,sx:{bgcolor:"unset"}}),isOptionEqualToValue:(r,l)=>r.id===l.id,slotProps:{popper:{placement:"bottom-start",sx:{minWidth:320}},paper:{sx:{[` .${ss.option}`]:{pl:.75}}}},renderInput:r=>e.jsx(ze,{...r,placeholder:"Search...",onKeyUp:h,InputProps:{...r.InputProps,startAdornment:e.jsx(_,{position:"start",children:e.jsx(w,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})}),endAdornment:e.jsxs(e.Fragment,{children:[t?e.jsx(w,{icon:"svg-spinners:8-dots-rotate",sx:{mr:-3}}):null,r.InputProps.endAdornment]})}}),renderOption:(r,l,{inputValue:m})=>{const b=rs(l.name,m),g=ns(l.name,b);return R.createElement(j,{component:"li",...r,onClick:()=>p(l.id),key:l.id},e.jsx(se,{alt:l.name,src:l.coverUrl,variant:"rounded",sx:{width:48,height:48,flexShrink:0,mr:1.5,borderRadius:1}},l.id),e.jsx("div",{children:g.map((y,C)=>e.jsx(u,{component:"span",color:y.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:y.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:y.text},C))},m))}})}Zs.propTypes={hrefItem:i.func,loading:i.bool,onSearch:i.func,query:i.string,results:i.array};function Ys({open:s,onOpen:o,onClose:n,filters:a,onFilters:t,canReset:x,onResetFilters:p,colorOptions:h,genderOptions:r,ratingOptions:l,categoryOptions:m}){const b=[...Array(21)].map((d,k)=>{const S=k*10,re=k===0?`$${S}`:`${S}`;return{value:S,label:k%4?"":re}}),g=R.useCallback(d=>{const k=a.gender.includes(d)?a.gender.filter(S=>S!==d):[...a.gender,d];t("gender",k)},[a.gender,t]),y=R.useCallback(d=>{t("category",d)},[t]),C=R.useCallback(d=>{t("colors",d)},[t]),v=R.useCallback((d,k)=>{t("priceRange",k)},[t]),z=R.useCallback(d=>{t("rating",d)},[t]),L=e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(u,{variant:"h6",sx:{flexGrow:1},children:"Filters"}),e.jsx(ls,{title:"Reset",children:e.jsx(J,{onClick:p,children:e.jsx(ae,{color:"error",variant:"dot",invisible:!x,children:e.jsx(w,{icon:"solar:restart-bold"})})})}),e.jsx(J,{onClick:n,children:e.jsx(w,{icon:"mingcute:close-line"})})]}),G=e.jsxs(c,{children:[e.jsx(u,{variant:"subtitle2",sx:{mb:1},children:"Gender"}),r.map(d=>e.jsx(oe,{control:e.jsx(X,{checked:a.gender.includes(d.label),onClick:()=>g(d.label)}),label:d.label},d.value))]}),B=e.jsxs(c,{children:[e.jsx(u,{variant:"subtitle2",sx:{mb:1},children:"Category"}),m.map(d=>e.jsx(oe,{control:e.jsx(Fs,{checked:d===a.category,onClick:()=>y(d)}),label:d,sx:{...d==="all"&&{textTransform:"capitalize"}}},d))]}),N=e.jsxs(c,{children:[e.jsx(u,{variant:"subtitle2",sx:{mb:1},children:"Color"}),e.jsx(Ss,{selected:a.colors,onSelectColor:d=>C(d),colors:h,limit:6})]}),U=e.jsxs(c,{children:[e.jsx(u,{variant:"subtitle2",sx:{flexGrow:1},children:"Price"}),e.jsxs(c,{direction:"row",spacing:5,sx:{my:2},children:[e.jsx(le,{type:"min",value:a.priceRange,onFilters:t}),e.jsx(le,{type:"max",value:a.priceRange,onFilters:t})]}),e.jsx(Ps,{value:a.priceRange,onChange:v,step:10,min:0,max:200,marks:b,getAriaValueText:d=>`$${d}`,valueLabelFormat:d=>`$${d}`,sx:{alignSelf:"center",width:"calc(100% - 24px)"}})]}),f=e.jsxs(c,{spacing:2,alignItems:"flex-start",children:[e.jsx(u,{variant:"subtitle2",children:"Rating"}),l.map((d,k)=>e.jsxs(c,{direction:"row",onClick:()=>z(d),sx:{borderRadius:1,cursor:"pointer",typography:"body2","&:hover":{opacity:.48},...a.rating===d&&{pl:.5,pr:.75,py:.25,bgcolor:"action.selected"}},children:[e.jsx(V,{readOnly:!0,value:4-k,sx:{mr:1}})," & Up"]},d))]});return e.jsxs(e.Fragment,{children:[e.jsx($,{disableRipple:!0,color:"inherit",endIcon:e.jsx(ae,{color:"error",variant:"dot",invisible:!x,children:e.jsx(w,{icon:"ic:round-filter-list"})}),onClick:o,children:"Filters"}),e.jsxs(as,{anchor:"right",open:s,onClose:n,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:280}},children:[L,e.jsx(Y,{}),e.jsx(is,{sx:{px:2.5,py:3},children:e.jsxs(c,{spacing:3,children:[G,B,N,U,f]})})]})]})}Ys.propTypes={open:i.bool,onOpen:i.func,onClose:i.func,canReset:i.bool,filters:i.object,onFilters:i.func,genderOptions:i.array,onResetFilters:i.func,ratingOptions:i.array,categoryOptions:i.array,colorOptions:i.arrayOf(i.string)};function le({type:s,value:o,onFilters:n}){const a=o[0],t=o[1],x=R.useCallback(()=>{a<0&&n("priceRange",[0,t]),a>200&&n("priceRange",[200,t]),t<0&&n("priceRange",[a,0]),t>200&&n("priceRange",[a,200])},[t,a,n]);return e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{width:1},children:[e.jsx(u,{variant:"caption",sx:{flexShrink:0,color:"text.disabled",textTransform:"capitalize",fontWeight:"fontWeightSemiBold"},children:`${s} ($)`}),e.jsx(os,{fullWidth:!0,value:s==="min"?a:t,onChange:p=>s==="min"?n("priceRange",[Number(p.target.value),t]):n("priceRange",[a,Number(p.target.value)]),onBlur:x,inputProps:{step:10,min:0,max:200,type:"number","aria-labelledby":"input-slider"},sx:{maxWidth:48,borderRadius:.75,bgcolor:p=>me(p.palette.grey[500],.08),[`& .${ts.input}`]:{pr:1,py:.75,textAlign:"right",typography:"body2"}}})]})}le.propTypes={onFilters:i.func,type:i.oneOf(["min","max"]),value:i.arrayOf(i.number)};function Js({filters:s,onFilters:o,canReset:n,onResetFilters:a,results:t,...x}){const p=b=>{const g=s.gender.filter(y=>y!==b);o("gender",g)},h=()=>{o("category","all")},r=b=>{const g=s.colors.filter(y=>y!==b);o("colors",g)},l=()=>{o("priceRange",[0,200])},m=()=>{o("rating","")};return e.jsxs(c,{spacing:1.5,...x,children:[e.jsxs(j,{sx:{typography:"body2"},children:[e.jsx("strong",{children:t}),e.jsx(j,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(c,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!s.gender.length&&e.jsx(E,{label:"Gender:",children:s.gender.map(b=>e.jsx(P,{label:b,size:"small",onDelete:()=>p(b)},b))}),s.category!=="all"&&e.jsx(E,{label:"Category:",children:e.jsx(P,{size:"small",label:s.category,onDelete:h})}),!!s.colors.length&&e.jsx(E,{label:"Colors:",children:s.colors.map(b=>e.jsx(P,{size:"small",label:e.jsx(j,{sx:{ml:-.5,width:18,height:18,bgcolor:b,borderRadius:"50%",border:g=>`solid 1px ${me(g.palette.common.white,.24)}`}}),onDelete:()=>r(b)},b))}),(s.priceRange[0]!==0||s.priceRange[1]!==200)&&e.jsx(E,{label:"Price:",children:e.jsx(P,{size:"small",label:`$${s.priceRange[0]} - ${s.priceRange[1]}`,onDelete:l})}),!!s.rating&&e.jsx(E,{label:"Rating:",children:e.jsx(P,{size:"small",label:s.rating,onDelete:m})}),n&&e.jsx($,{color:"error",onClick:a,startIcon:e.jsx(w,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}Js.propTypes={canReset:i.bool,filters:i.object,onFilters:i.func,results:i.number,onResetFilters:i.func};function E({label:s,children:o,sx:n,...a}){return e.jsxs(c,{component:pe,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...n},...a,children:[e.jsx(j,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(c,{spacing:1,direction:"row",flexWrap:"wrap",children:o})]})}E.propTypes={children:i.node,label:i.string,sx:i.object};function Xs({row:s,selected:o,onSelectRow:n,onDeleteRow:a,onEditRow:t,onViewRow:x}){const{name:p,salePrice:h,publish:r,category:l,quantity:m,createdAt:b,inventoryType:g,images:y}=s,C=Ie(),v=xe();return e.jsxs(e.Fragment,{children:[e.jsxs(Ls,{hover:!0,selected:o,children:[e.jsx(W,{padding:"checkbox",children:e.jsx(X,{checked:o,onClick:n})}),e.jsxs(W,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(se,{alt:p,src:y[0],variant:"rounded",sx:{width:64,height:64,mr:2}}),e.jsx(ie,{disableTypography:!0,primary:e.jsx(Te,{noWrap:!0,color:"inherit",variant:"subtitle2",onClick:x,sx:{cursor:"pointer"},children:p}),secondary:e.jsx(j,{component:"div",sx:{typography:"body2",color:"text.disabled"},children:l})})]}),e.jsx(W,{children:e.jsx(ie,{primary:be(new Date(b),"dd MMM yyyy"),secondary:be(new Date(b),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsxs(W,{sx:{typography:"caption",color:"text.secondary"},children:[e.jsx(De,{value:m*100/m,variant:"determinate",color:g==="out of stock"&&"error"||g==="low stock"&&"warning"||"success",sx:{mb:1,height:6,maxWidth:80}}),!!m&&m," ",g]}),e.jsx(W,{children:H(h)}),e.jsx(W,{children:e.jsx(cs,{variant:"soft",color:r&&"info"||"default",children:r?"Publish":"Draft"})}),e.jsx(W,{align:"right",children:e.jsx(J,{color:v.open?"primary":"default",onClick:v.onOpen,children:e.jsx(w,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(he,{open:v.open,onClose:v.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(F,{onClick:()=>{x(),v.onClose()},children:[e.jsx(w,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(F,{onClick:()=>{t(),v.onClose()},children:[e.jsx(w,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(F,{onClick:()=>{C.onTrue(),v.onClose()},sx:{color:"error.main"},children:[e.jsx(w,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(zs,{open:C.value,onClose:C.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx($,{variant:"contained",color:"error",onClick:a,children:"Delete"})})]})}Xs.propTypes={onDeleteRow:i.func,onEditRow:i.func,onSelectRow:i.func,onViewRow:i.func,row:i.object,selected:i.bool};function er({filters:s,onFilters:o,stockOptions:n,publishOptions:a}){const t=xe(),x=R.useCallback(r=>{o("name",r.target.value)},[o]),p=R.useCallback(r=>{o("stock",typeof r.target.value=="string"?r.target.value.split(","):r.target.value)},[o]),h=R.useCallback(r=>{o("publish",typeof r.target.value=="string"?r.target.value.split(","):r.target.value)},[o]);return e.jsxs(e.Fragment,{children:[e.jsxs(c,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsxs(ve,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(fe,{children:"Stock"}),e.jsx(we,{multiple:!0,value:s.stock,onChange:p,input:e.jsx(Ce,{label:"Stock"}),renderValue:r=>r.map(l=>l).join(", "),sx:{textTransform:"capitalize"},children:n.map(r=>e.jsxs(F,{value:r.value,children:[e.jsx(X,{disableRipple:!0,size:"small",checked:s.stock.includes(r.value)}),r.label]},r.value))})]}),e.jsxs(ve,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(fe,{children:"Publish"}),e.jsx(we,{multiple:!0,value:s.publish,onChange:h,input:e.jsx(Ce,{label:"Publish"}),renderValue:r=>r.map(l=>l).join(", "),sx:{textTransform:"capitalize"},children:a.map(r=>e.jsxs(F,{value:r.value,children:[e.jsx(X,{disableRipple:!0,size:"small",checked:s.publish.includes(r.value)}),r.label]},r.value))})]}),e.jsxs(c,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(ze,{fullWidth:!0,value:s.name,onChange:x,placeholder:"Search...",InputProps:{startAdornment:e.jsx(_,{position:"start",children:e.jsx(w,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(J,{onClick:t.onOpen,children:e.jsx(w,{icon:"eva:more-vertical-fill"})})]})]}),e.jsxs(he,{open:t.open,onClose:t.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(F,{onClick:()=>{t.onClose()},children:[e.jsx(w,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(F,{onClick:()=>{t.onClose()},children:[e.jsx(w,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(F,{onClick:()=>{t.onClose()},children:[e.jsx(w,{icon:"solar:export-bold"}),"Export"]})]})]})}er.propTypes={filters:i.object,onFilters:i.func,publishOptions:i.array,stockOptions:i.array};function sr({filters:s,onFilters:o,onResetFilters:n,results:a,...t}){const x=h=>{const r=s.stock.filter(l=>l!==h);o("stock",r)},p=h=>{const r=s.publish.filter(l=>l!==h);o("publish",r)};return e.jsxs(c,{spacing:1.5,...t,children:[e.jsxs(j,{sx:{typography:"body2"},children:[e.jsx("strong",{children:a}),e.jsx(j,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(c,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!s.stock.length&&e.jsx(ce,{label:"Stock:",children:s.stock.map(h=>e.jsx(P,{label:h,size:"small",onDelete:()=>x(h)},h))}),!!s.publish.length&&e.jsx(ce,{label:"Publish:",children:s.publish.map(h=>e.jsx(P,{label:h,size:"small",onDelete:()=>p(h)},h))}),e.jsx($,{color:"error",onClick:n,startIcon:e.jsx(w,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}sr.propTypes={filters:i.object,onFilters:i.func,onResetFilters:i.func,results:i.number};function ce({label:s,children:o,sx:n,...a}){return e.jsxs(c,{component:pe,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...n},...a,children:[e.jsx(j,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(c,{spacing:1,direction:"row",flexWrap:"wrap",children:o})]})}ce.propTypes={children:i.node,label:i.string,sx:i.object};function qe({reviews:s}){const{name:o,rating:n,review:a,postedAt:t,avatarUrl:x,attachments:p,isPurchased:h}=s,r=e.jsxs(c,{spacing:2,alignItems:"center",direction:{xs:"row",md:"column"},sx:{width:{md:240},textAlign:{md:"center"}},children:[e.jsx(se,{src:x,sx:{width:{xs:48,md:64},height:{xs:48,md:64}}}),e.jsx(ie,{primary:o,secondary:ds(t),primaryTypographyProps:{noWrap:!0,typography:"subtitle2",mb:.5},secondaryTypographyProps:{noWrap:!0,typography:"caption",component:"span"}})]}),l=e.jsxs(c,{spacing:1,flexGrow:1,children:[e.jsx(V,{size:"small",value:n,precision:.1,readOnly:!0}),e.jsx(u,{variant:"body2",children:a}),!!(p!=null&&p.length)&&e.jsx(c,{direction:"row",flexWrap:"wrap",spacing:1,sx:{pt:1},children:p.map(m=>e.jsx(j,{component:"img",alt:m,src:m,sx:{width:64,height:64,borderRadius:1.5}},m))}),e.jsxs(c,{direction:"row",spacing:2,sx:{pt:1.5},children:[e.jsxs(c,{direction:"row",alignItems:"center",sx:{typography:"caption"},children:[e.jsx(w,{icon:"solar:like-outline",width:16,sx:{mr:.5}}),"123"]}),e.jsxs(c,{direction:"row",alignItems:"center",sx:{typography:"caption"},children:[e.jsx(w,{icon:"solar:dislike-outline",width:16,sx:{mr:.5}}),"34"]})]})]});return e.jsxs(c,{spacing:2,direction:{xs:"column",md:"row"},sx:{mt:5,px:{xs:2.5,md:0}},children:[r,l]})}qe.propTypes={review:i.object};function $e({reviews:s}){return e.jsx(e.Fragment,{children:s.map(o=>e.jsx(qe,{reviews:o},o.id))})}$e.propTypes={reviews:i.array};function Ne({onClose:s,...o}){var y;const{id:n}=ps(),a=Oe().shape({rating:M().min(1,"Rating must be greater than or equal to 1"),review:A().required("Review is required"),name:A().required("Name is required"),email:A().required("Email is required").email("Email must be a valid email address")}),t={rating:0,review:"",name:"",email:""},x=ue({resolver:Ae(a),defaultValues:t}),{reset:p,control:h,handleSubmit:r,formState:{errors:l,isSubmitting:m}}=x,b=r(async C=>{try{const v=await Z.post("products/review",{...C,id:n});p(),s(),console.info("DATA",C)}catch(v){console.error(v)}}),g=R.useCallback(()=>{s(),p()},[s,p]);return e.jsx(xs,{onClose:s,...o,children:e.jsxs(ge,{methods:x,onSubmit:b,children:[e.jsx($s,{children:" Add Review "}),e.jsxs(Ns,{children:[e.jsxs(c,{direction:"row",flexWrap:"wrap",alignItems:"center",spacing:1.5,children:[e.jsx(u,{variant:"body2",children:"Your review about this product:"}),e.jsx(fs,{name:"rating",control:h,render:({field:C})=>e.jsx(V,{...C,size:"small",value:Number(C.value)})})]}),!!l.rating&&e.jsxs(As,{error:!0,children:[" ",(y=l.rating)==null?void 0:y.message]}),e.jsx(O,{name:"review",label:"Review *",multiline:!0,rows:3,sx:{mt:3}}),e.jsx(O,{name:"name",label:"Name *",sx:{mt:3}}),e.jsx(O,{name:"email",label:"Email *",sx:{mt:3}})]}),e.jsxs(Us,{children:[e.jsx($,{color:"inherit",variant:"outlined",onClick:g,children:"Cancel"}),e.jsx(Fe,{type:"submit",variant:"contained",loading:m,children:"Post"})]})]})})}Ne.propTypes={onClose:i.func};function rr({totalRatings:s,totalReviews:o,ratings:n,reviews:a}){const t=Ie();Ws(n,r=>r.starCount);const x=e.jsxs(c,{spacing:1,alignItems:"center",justifyContent:"center",children:[e.jsx(u,{variant:"subtitle2",children:"Average rating"}),e.jsxs(u,{variant:"h2",children:[a.reduce((r,l)=>r+l.rating,0)/a.length,"/5"]}),e.jsx(V,{readOnly:!0,value:a.reduce((r,l)=>r+l.rating,0)/a.length,precision:.1}),e.jsxs(u,{variant:"caption",sx:{color:"text.secondary"},children:["(",te(a.length)," reviews)"]})]}),p=e.jsx(c,{spacing:1.5,sx:{py:5,px:{xs:3,md:5},borderLeft:r=>({md:`dashed 1px ${r.palette.divider}`}),borderRight:r=>({md:`dashed 1px ${r.palette.divider}`})},children:[1,2,3,4,5].map(r=>e.jsxs(c,{direction:"row",alignItems:"center",children:[e.jsx(u,{variant:"subtitle2",component:"span",sx:{width:42},children:r}),e.jsx(De,{color:"inherit",variant:"determinate",value:a.filter(l=>l.rating===r).length/a.length*100,sx:{mx:2,flexGrow:1}}),e.jsx(u,{variant:"body2",component:"span",sx:{minWidth:48,color:"text.secondary"},children:te(a.filter(l=>l===r).length)})]},r))}),h=e.jsx(c,{alignItems:"center",justifyContent:"center",children:e.jsx($,{size:"large",variant:"soft",color:"inherit",onClick:t.onTrue,startIcon:e.jsx(w,{icon:"solar:pen-bold"}),children:"Write your review"})});return e.jsxs(e.Fragment,{children:[e.jsxs(j,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{py:{xs:5,md:0}},children:[x,p,h]}),e.jsx(Y,{sx:{borderStyle:"dashed"}}),e.jsx($e,{reviews:a}),e.jsx(Ne,{open:t.value,onClose:t.onFalse})]})}rr.propTypes={ratings:i.array,reviews:i.array,totalRatings:i.number,totalReviews:i.number};function nr({cart:s,product:o,onAddCart:n,onGotoStep:a,disabledActions:t,...x}){var je;const p=de(),{id:h,name:r,sizes:l,regularPrice:m,coverUrl:b,colors:g=[],quantity:y,salePrice:C,totalRatings:v,totalReviews:z,inventoryType:L,subDescription:G}=o,B=(je=s==null?void 0:s.map(D=>D.id))==null?void 0:je.includes(h),N={id:h,name:r,coverUrl:b,quantity:y,price:C,colors:(g==null?void 0:g.length)&&g[0],size:(l==null?void 0:l.lenght)&&l[0]},U=ue({defaultValues:N}),{reset:f,watch:d,handleSubmit:k}=U,S=d();R.useEffect(()=>{o&&f(N)},[o]);const re=k(async D=>{try{B||n({...D,colors:[S.colors],subTotal:D.price*D.quantity}),a(0),p.push(ee.product.checkout)}catch(Ve){console.error(Ve)}}),Ue=e.jsxs(j,{sx:{typography:"h5"},children:[C&&e.jsx(j,{component:"span",sx:{color:"text.disabled",textDecoration:"line-through",mr:.5},children:H(m)}),H(C)]}),Ee=e.jsxs(c,{direction:"row",children:[e.jsx(u,{variant:"subtitle2",sx:{flexGrow:1},children:"Color"}),e.jsx(c,{direction:"row",children:g==null?void 0:g.map(D=>e.jsxs(u,{children:[D," , "]},D))})]}),Ge=e.jsxs(c,{direction:"row",children:[e.jsx(u,{variant:"subtitle2",sx:{flexGrow:1},children:"Size"}),e.jsx(c,{direction:"row",children:l==null?void 0:l.map(D=>e.jsxs(u,{children:[D," , "]},D))})]}),Be=e.jsxs(c,{direction:"row",children:[e.jsx(u,{variant:"subtitle2",sx:{flexGrow:1},children:"Quantity"}),e.jsx(c,{spacing:1,children:e.jsxs(u,{variant:"caption",component:"div",sx:{textAlign:"right"},children:["Available: ",y]})})]}),Me=e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:G}),_e=e.jsxs(c,{direction:"row",alignItems:"center",sx:{color:"text.disabled",typography:"body2"},children:[e.jsx(V,{size:"small",value:v,precision:.1,readOnly:!0,sx:{mr:1}}),`(${te(z)} reviews)`]}),He=e.jsx(j,{component:"span",sx:{typography:"overline",color:L==="out of stock"&&"error.main"||L==="low stock"&&"warning.main"||"success.main"},children:L});return e.jsx(ge,{methods:U,onSubmit:re,children:e.jsxs(c,{spacing:3,sx:{pt:3},...x,children:[e.jsxs(c,{spacing:2,alignItems:"flex-start",children:[He,e.jsx(u,{variant:"h5",children:r}),_e,Ue,Me]}),e.jsx(Y,{sx:{borderStyle:"dashed"}}),Ee,Ge,Be,e.jsx(Y,{sx:{borderStyle:"dashed"}})]})})}nr.propTypes={cart:i.array,disabledActions:i.bool,onAddCart:i.func,onGotoStep:i.func,product:i.object};const q=64,ar=ms("div")(({length:s,theme:o})=>({position:"relative",margin:o.spacing(0,"auto"),"& .slick-slide":{lineHeight:0},...s===1&&{maxWidth:q*1+16},...s===2&&{maxWidth:q*2+32},...(s===3||s===4)&&{maxWidth:q*3+48},...s>=5&&{maxWidth:q*6},...s>3&&{"&:before, &:after":{...us({direction:"to left",startColor:`${me(o.palette.background.default,0)} 0%`,endColor:`${o.palette.background.default} 100%`}),top:0,zIndex:9,content:"''",height:"100%",position:"absolute",width:q*2/3},"&:after":{right:0,transform:"scaleX(-1)"}}}));function ir({product:s={}}){var r;const o=hs(),n=(r=s==null?void 0:s.images)==null?void 0:r.map(l=>({src:l})),a=Es(n),t=ke({rtl:!1,draggable:!1,adaptiveHeight:!0}),x=ke({rtl:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,variableWidth:!0,centerPadding:"0px",slidesToShow:(n==null?void 0:n.length)>3?3:n==null?void 0:n.length});R.useEffect(()=>{t.onSetNav(),x.onSetNav()},[t,x]),R.useEffect(()=>{a.open&&t.onTogo(a.selected)},[t,a.open,a.selected]);const p=e.jsxs(j,{sx:{mb:3,borderRadius:2,overflow:"hidden",position:"relative"},children:[e.jsx(Re,{...t.carouselSettings,asNavFor:x.nav,ref:t.carouselRef,children:n==null?void 0:n.map(l=>e.jsx(Pe,{alt:l.src,src:l.src,ratio:"1/1",onClick:()=>a.onOpen(l.src),sx:{cursor:"zoom-in"}},l.src))}),e.jsx(Bs,{index:t.currentIndex,total:n==null?void 0:n.length,onNext:x.onNext,onPrev:x.onPrev})]}),h=e.jsx(ar,{length:n==null?void 0:n.length,children:e.jsx(Re,{...x.carouselSettings,asNavFor:t.nav,ref:x.carouselRef,children:n==null?void 0:n.map((l,m)=>e.jsx(j,{sx:{px:.5},children:e.jsx(se,{alt:l.src,src:l.src,variant:"rounded",sx:{width:q,height:q,opacity:.48,cursor:"pointer",...t.currentIndex===m&&{opacity:1,border:`solid 2.5px ${o.palette.primary.main}`}}},l.src)},l.src))})});return e.jsxs(j,{sx:{"& .slick-slide":{float:o.direction==="rtl"?"right":"left"}},children:[p,h,e.jsx(Gs,{index:a.selected,slides:n,open:a.open,close:a.onClose,onGetCurrentIndex:l=>a.setSelected(l)})]})}ir.propTypes={product:i.object};function or({description:s}){return e.jsx(Ms,{children:s,sx:{p:3,"& p, li, ol":{typography:"body2"},"& ol":{p:0,display:{md:"flex"},listStyleType:"none","& li":{"&:first-of-type":{minWidth:240,mb:{xs:.5,md:0}}}}}})}or.propTypes={description:i.string};export{Vs as C,Js as P,Ks as a,Z as b,Zs as c,Ys as d,Qs as e,ir as f,nr as g,or as h,rr as i,Gr as j,er as k,sr as l,Xs as m,Hs as n};
