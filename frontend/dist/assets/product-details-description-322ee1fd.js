import{bh as pe,a5 as Qe,bO as Ze,bg as Ye,D as R,ag as ee,a8 as e,al as I,ac as u,a9 as c,ad as g,bP as Xe,aM as N,aw as t,af as Ie,aD as te,ah as v,b9 as Je,ai as De,bK as es,aA as xe,bj as he,ae as W,bk as me,aG as O,bQ as ss,bR as rs,bS as ns,bT as as,aB as se,aS as ts,av as Y,bb as os,bU as is,ao as ue,bV as ls,bA as cs,aF as X,aj as ds,ak as ps,ab as fe,aP as Ae,aZ as oe,bW as ve,aU as Fe,aE as xs,bX as hs,bY as ms,bZ as us,a_ as gs,b_ as js,bd as bs,a6 as ys,am as fs,an as vs}from"./index-2b1d90a0.js";import{c as Oe,a as P,d as ne,e as M,b as ge,R as F,f as ws,g as Cs,h as ks,F as je,i as Rs,j as Ss,C as Ts}from"./form-provider-3dedd961.js";import{o as Pe}from"./yup-22a9ab8b.js";import{h as Is,i as Ds}from"./_product-66794ccf.js";import{C as Q}from"./Card-11edfc40.js";import{C as ae}from"./CardHeader-3b4c7a41.js";import{M as L}from"./Chip-77966c5b.js";import{F as ie}from"./FormControlLabel-e2975c16.js";import{S as As}from"./Switch-1fb61383.js";import{L as Le}from"./LoadingButton-8fb5d8ce.js";import{a as V,c as le}from"./format-number-349c0744.js";import{I as We}from"./image-7dd51246.js";import{C as Fs,a as Os}from"./color-picker-32b9d190.js";import{F as Ps}from"./Fab-e6194dd7.js";import{S as T}from"./Skeleton-33a67d69.js";import{P as Ls,p as Ws}from"./Pagination-7594f4f2.js";import{A as zs}from"./Autocomplete-99912dd3.js";import{T as be,I as we,F as $s}from"./TextField-dbaba213.js";import{C as J}from"./Checkbox-c93fae11.js";import{R as Es}from"./Radio-3ded988e.js";import{S as Us}from"./Slider-748145b9.js";import{R as K}from"./Rating-a212343c.js";import{v as qs}from"./fade-ba5404aa.js";import{C as Gs}from"./confirm-dialog-df285ad2.js";import{T as Bs}from"./table-pagination-custom-497a8da9.js";import{T as E}from"./TablePagination-eb3bf628.js";import{F as Ce}from"./FormControl-e4f79e31.js";import{S as ke,O as Re}from"./Select-3c20c0a6.js";import{a as Ns}from"./axios-5832e0ee.js";import{D as _s}from"./DialogTitle-47a9b4c5.js";import{D as Hs}from"./DialogContent-5d8f5bb7.js";import{D as Ms}from"./DialogActions-1a246cda.js";import{u as Vs,L as Ks}from"./lightbox-e46d4bc4.js";import{a as Se,c as Qs}from"./carousel-arrow-index-5b42bbfe.js";import{u as Te}from"./use-carousel-69f59960.js";import{M as Zs}from"./markdown-a051a73d.js";const Ys=Ns.create({baseURL:"https://delhi-vape.com/"}),Z=Ys;function Xs({currentProduct:s}){const o=pe(),n=Qe("up","md"),{enqueueSnackbar:a}=Ze(),{user:i}=Ye(),x=Oe().shape({name:P().required("Name is required"),subDescription:P().required("Short description is required"),content:P(),images:ne().min(1,"Image is required"),SKU:P().required("SKU is required"),quantity:M(),category:P().required("Category is required"),colors:ne(),tags:ne(),regularPrice:M(),salePrice:M().moreThan(0,"Price should not be AED 0.00"),tax:M().moreThan(-1,"Tax should not be 0%")}),p=R.useMemo(()=>({id:(s==null?void 0:s.id)||"",name:(s==null?void 0:s.name)||"",subDescription:(s==null?void 0:s.subDescription)||"",content:(s==null?void 0:s.content)||"",images:(s==null?void 0:s.images)||[],SKU:(s==null?void 0:s.SKU)||"",regularPrice:(s==null?void 0:s.regularPrice)||0,quantity:(s==null?void 0:s.quantity)||0,salePrice:(s==null?void 0:s.salePrice)||0,tags:(s==null?void 0:s.tags)||[],tax:(s==null?void 0:s.tax)||0,category:(s==null?void 0:s.category)||"",colors:(s==null?void 0:s.colors)||[]}),[s]),h=ge({resolver:Pe(x),defaultValues:p}),{reset:r,watch:l,setValue:m,handleSubmit:b,formState:{isSubmitting:j}}=h,y=l();R.useEffect(()=>{s&&r(p)},[s,p,r]);const C=b(async f=>{try{await new Promise(d=>setTimeout(d,500)),s?await Z.patch("products",{...f,username:i.displayName,userId:i.id}):await Z.post("products",{...f,username:i.displayName,userId:i.id}),r(),a(s?"Update success!":"Create success!"),o.push(ee.dashboard.product.root)}catch(d){console.error(d)}}),w=R.useCallback(f=>{const d=y.images||[],k=f.map(S=>Object.assign(S,{preview:URL.createObjectURL(S)}));m("images",[...d,...k],{shouldValidate:!0})},[m,y.images]),z=R.useCallback(f=>{var k;const d=y.images&&((k=y.images)==null?void 0:k.filter(S=>S!==f));m("images",d)},[m,y.images]),$=R.useCallback(()=>{m("images",[])},[m]),_=e.jsxs(e.Fragment,{children:[n&&e.jsxs(I,{md:4,children:[e.jsx(u,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(I,{xs:12,md:8,children:e.jsxs(Q,{children:[!n&&e.jsx(ae,{title:"Details"}),e.jsxs(c,{spacing:3,sx:{p:3},children:[e.jsx(F,{name:"name",label:"Product Name"}),e.jsx(F,{name:"subDescription",label:"Sub Description",multiline:!0,rows:4}),e.jsxs(c,{spacing:1.5,children:[e.jsx(u,{variant:"subtitle2",children:"Content"}),e.jsx(Rs,{simple:!0,name:"content"})]}),e.jsxs(c,{spacing:1.5,children:[e.jsx(u,{variant:"subtitle2",children:"Images"}),e.jsx(Ss,{multiple:!0,name:"images",maxSize:3145728,onDrop:w,onRemove:z,onRemoveAll:$,onUpload:async f=>{try{const d=new FormData;y.images.forEach(S=>{d.append("images",S)});const{data:k}=await Z.post("upload",d);m("images",k),alert("Image upload complete.")}catch{alert(" Image upload failed, try again.")}}})]})]})]})})]}),H=e.jsxs(e.Fragment,{children:[n&&e.jsxs(I,{md:4,children:[e.jsx(u,{variant:"h6",sx:{mb:.5},children:"Properties"}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(I,{xs:12,md:8,children:e.jsxs(Q,{children:[!n&&e.jsx(ae,{title:"Properties"}),e.jsxs(c,{spacing:3,sx:{p:3},children:[e.jsxs(g,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(F,{name:"SKU",label:"Product SKU"}),e.jsx(F,{name:"quantity",label:"Quantity",placeholder:"0",type:"number",InputLabelProps:{shrink:!0}}),e.jsx(ws,{native:!0,name:"category",label:"Category",InputLabelProps:{shrink:!0},children:Is.map(f=>e.jsx("optgroup",{label:f.group,children:f.classify.map(d=>e.jsx("option",{value:d,children:d},d))},f.group))}),e.jsx(Cs,{checkbox:!0,name:"colors",label:"Colors",options:Ds})]}),e.jsx(ks,{name:"tags",label:"Tags",placeholder:"+ Tags",multiple:!0,freeSolo:!0,options:Xe.map(f=>f),getOptionLabel:f=>f,renderOption:(f,d)=>R.createElement("li",{...f,key:d},d),renderTags:(f,d)=>f.map((k,S)=>R.createElement(L,{...d({index:S}),key:k,label:k,size:"small",color:"info",variant:"soft"}))})]})]})})]}),q=e.jsxs(e.Fragment,{children:[n&&e.jsxs(I,{md:4,children:[e.jsx(u,{variant:"h6",sx:{mb:.5},children:"Pricing"}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:"Price related inputs"})]}),e.jsx(I,{xs:12,md:8,children:e.jsxs(Q,{children:[!n&&e.jsx(ae,{title:"Pricing"}),e.jsxs(c,{spacing:3,sx:{p:3},children:[e.jsx(F,{name:"regularPrice",label:"Regular Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(N,{position:"start",children:e.jsx(g,{component:"span",sx:{color:"text.disabled"},children:"AED"})})}}),e.jsx(F,{name:"salePrice",label:"Sale Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(N,{position:"start",children:e.jsx(g,{component:"span",sx:{color:"text.disabled"},children:"AED"})})}}),e.jsx(F,{name:"tax",label:"Tax (%)",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(N,{position:"start",children:e.jsx(g,{component:"span",sx:{color:"text.disabled"},children:"%"})})}})]})]})})]}),G=e.jsxs(e.Fragment,{children:[n&&e.jsx(I,{md:4}),e.jsxs(I,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:[e.jsx(ie,{control:e.jsx(As,{defaultChecked:!0}),label:"Publish",sx:{flexGrow:1,pl:3}}),e.jsx(Le,{type:"submit",variant:"contained",size:"large",loading:j,children:s?"Save Changes":"Create Product"})]})]});return e.jsx(je,{methods:h,onSubmit:C,children:e.jsxs(I,{container:!0,spacing:3,children:[_,H,q,G]})})}Xs.propTypes={currentProduct:t.object};function Js({totalItems:s}){return e.jsx(g,{component:Ie,href:ee.product.checkout,sx:{right:0,top:112,zIndex:999,display:"flex",cursor:"pointer",position:"fixed",color:"text.primary",borderTopLeftRadius:16,borderBottomLeftRadius:16,bgcolor:"background.paper",padding:o=>o.spacing(1,3,1,2),boxShadow:o=>o.customShadows.dropdown,transition:o=>o.transitions.create(["opacity"]),"&:hover":{opacity:.72}},children:e.jsx(te,{showZero:!0,badgeContent:s,color:"error",max:99,children:e.jsx(v,{icon:"solar:cart-3-bold",width:24})})})}Js.propTypes={totalItems:t.number};function ze({product:s}){const{id:o,name:n,images:a,salePrice:i,colors:x,available:p,sizes:h,regularPrice:r,quantity:l}=s,m=Je(),b=ee.product.details(o),j=async()=>{const w={id:o,name:n,images:a,available:l,salePrice:i,colors:[x[0]],quantity:1};try{m(es(w))}catch(z){console.error(z)}},y=e.jsxs(g,{sx:{position:"relative",p:1},children:[e.jsx(Ps,{color:"warning",size:"medium",className:"add-cart-btn",onClick:j,sx:{right:16,bottom:16,zIndex:9,opacity:0,position:"absolute",transition:w=>w.transitions.create("all",{easing:w.transitions.easing.easeInOut,duration:w.transitions.duration.shorter})},children:e.jsx(v,{icon:"solar:cart-plus-bold",width:24})}),e.jsx(We,{alt:n,src:a[0],ratio:"1/1",sx:{borderRadius:1.5}})]}),C=e.jsxs(c,{spacing:2.5,sx:{p:3,pt:2},children:[e.jsx(De,{component:Ie,href:b,color:"inherit",variant:"subtitle2",noWrap:!0,children:n}),e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(Fs,{colors:x}),e.jsxs(c,{direction:"row",spacing:.5,sx:{typography:"subtitle1"},children:[r&&e.jsx(g,{component:"span",sx:{color:"text.disabled",textDecoration:"line-through"},children:V(r)}),e.jsx(g,{component:"span",children:V(i)})]})]})]});return e.jsxs(Q,{sx:{"&:hover .add-cart-btn":{opacity:1}},children:[y,C]})}ze.propTypes={product:t.object};function $e({sx:s,...o}){return e.jsxs(xe,{variant:"outlined",sx:{borderRadius:2,...s},...o,children:[e.jsx(c,{sx:{p:1},children:e.jsx(T,{sx:{paddingTop:"100%"}})}),e.jsxs(c,{spacing:2,sx:{p:3,pt:2},children:[e.jsx(T,{sx:{width:.5,height:16}}),e.jsxs(c,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[e.jsxs(c,{direction:"row",children:[e.jsx(T,{variant:"circular",sx:{width:16,height:16}}),e.jsx(T,{variant:"circular",sx:{width:16,height:16}}),e.jsx(T,{variant:"circular",sx:{width:16,height:16}})]}),e.jsx(T,{sx:{width:40,height:16}})]})]})]})}$e.propTypes={sx:t.object};function en({...s}){return e.jsxs(I,{container:!0,spacing:8,...s,children:[e.jsx(I,{xs:12,md:6,lg:7,children:e.jsx(T,{sx:{paddingTop:"100%"}})}),e.jsx(I,{xs:12,md:6,lg:5,children:e.jsxs(c,{spacing:3,children:[e.jsx(T,{variant:"circular",sx:{width:80,height:80}}),e.jsx(T,{sx:{height:240}}),e.jsx(T,{sx:{height:16}}),e.jsx(T,{sx:{height:16,width:.75}}),e.jsx(T,{sx:{height:16,width:.5}})]})}),e.jsx(I,{xs:12,children:e.jsx(c,{direction:"row",alignItems:"center",children:[...Array(3)].map((o,n)=>e.jsxs(c,{spacing:2,alignItems:"center",justifyContent:"center",sx:{width:1},children:[e.jsx(T,{variant:"circular",sx:{width:80,height:80}}),e.jsx(T,{sx:{height:16,width:160}}),e.jsx(T,{sx:{height:16,width:80}})]},n))})})]})}function er({products:s,loading:o,...n}){const a=e.jsx(e.Fragment,{children:[...Array(16)].map((x,p)=>e.jsx($e,{},p))}),i=e.jsx(e.Fragment,{children:s.map(x=>e.jsx(ze,{product:x},x.id))});return e.jsxs(e.Fragment,{children:[e.jsx(g,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},...n,children:o?a:i}),s.length>8&&e.jsx(Ls,{count:8,sx:{mt:8,[`& .${Ws.ul}`]:{justifyContent:"center"}}})]})}er.propTypes={loading:t.bool,products:t.array};function sr({sort:s,onSort:o,sortOptions:n}){var x;const a=he(),i=(x=n.find(p=>p.value===s))==null?void 0:x.label;return e.jsxs(e.Fragment,{children:[e.jsxs(W,{disableRipple:!0,color:"inherit",onClick:a.onOpen,endIcon:e.jsx(v,{icon:a.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold"},children:["Sort By:",e.jsx(g,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold"},children:i})]}),e.jsx(me,{open:a.open,onClose:a.onClose,sx:{width:140},children:n.map(p=>e.jsx(O,{selected:p.value===s,onClick:()=>{a.onClose(),o(p.value)},children:p.label},p.value))})]})}sr.propTypes={onSort:t.func,sort:t.string,sortOptions:t.array};function rr({query:s,results:o,onSearch:n,hrefItem:a,loading:i}){const x=pe(),p=r=>{x.push(a(r))},h=r=>{if(s&&r.key==="Enter"){const l=o.filter(m=>m.name===s)[0];p(l.id)}};return e.jsx(zs,{sx:{width:{xs:1,sm:260}},loading:i,autoHighlight:!0,popupIcon:null,options:o,onInputChange:(r,l)=>n(l),getOptionLabel:r=>r.name,noOptionsText:e.jsx(ss,{query:s,sx:{bgcolor:"unset"}}),isOptionEqualToValue:(r,l)=>r.id===l.id,slotProps:{popper:{placement:"bottom-start",sx:{minWidth:320}},paper:{sx:{[` .${rs.option}`]:{pl:.75}}}},renderInput:r=>e.jsx(be,{...r,placeholder:"Search...",onKeyUp:h,InputProps:{...r.InputProps,startAdornment:e.jsx(N,{position:"start",children:e.jsx(v,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})}),endAdornment:e.jsxs(e.Fragment,{children:[i?e.jsx(v,{icon:"svg-spinners:8-dots-rotate",sx:{mr:-3}}):null,r.InputProps.endAdornment]})}}),renderOption:(r,l,{inputValue:m})=>{const b=ns(l.name,m),j=as(l.name,b);return R.createElement(g,{component:"li",...r,onClick:()=>p(l.id),key:l.id},e.jsx(se,{alt:l.name,src:l.coverUrl,variant:"rounded",sx:{width:48,height:48,flexShrink:0,mr:1.5,borderRadius:1}},l.id),e.jsx("div",{children:j.map((y,C)=>e.jsx(u,{component:"span",color:y.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:y.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:y.text},C))},m))}})}rr.propTypes={hrefItem:t.func,loading:t.bool,onSearch:t.func,query:t.string,results:t.array};function nr({open:s,onOpen:o,onClose:n,filters:a,onFilters:i,canReset:x,onResetFilters:p,colorOptions:h,genderOptions:r,ratingOptions:l,categoryOptions:m}){const b=[...Array(21)].map((d,k)=>{const S=k*10,re=k===0?`$${S}`:`${S}`;return{value:S,label:k%4?"":re}}),j=R.useCallback(d=>{const k=a.gender.includes(d)?a.gender.filter(S=>S!==d):[...a.gender,d];i("gender",k)},[a.gender,i]),y=R.useCallback(d=>{i("category",d)},[i]),C=R.useCallback(d=>{i("colors",d)},[i]),w=R.useCallback((d,k)=>{i("priceRange",k)},[i]),z=R.useCallback(d=>{i("rating",d)},[i]),$=e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(u,{variant:"h6",sx:{flexGrow:1},children:"Filters"}),e.jsx(cs,{title:"Reset",children:e.jsx(X,{onClick:p,children:e.jsx(te,{color:"error",variant:"dot",invisible:!x,children:e.jsx(v,{icon:"solar:restart-bold"})})})}),e.jsx(X,{onClick:n,children:e.jsx(v,{icon:"mingcute:close-line"})})]}),_=e.jsxs(c,{children:[e.jsx(u,{variant:"subtitle2",sx:{mb:1},children:"Gender"}),r.map(d=>e.jsx(ie,{control:e.jsx(J,{checked:a.gender.includes(d.label),onClick:()=>j(d.label)}),label:d.label},d.value))]}),H=e.jsxs(c,{children:[e.jsx(u,{variant:"subtitle2",sx:{mb:1},children:"Category"}),m.map(d=>e.jsx(ie,{control:e.jsx(Es,{checked:d===a.category,onClick:()=>y(d)}),label:d,sx:{...d==="all"&&{textTransform:"capitalize"}}},d))]}),q=e.jsxs(c,{children:[e.jsx(u,{variant:"subtitle2",sx:{mb:1},children:"Color"}),e.jsx(Os,{selected:a.colors,onSelectColor:d=>C(d),colors:h,limit:6})]}),G=e.jsxs(c,{children:[e.jsx(u,{variant:"subtitle2",sx:{flexGrow:1},children:"Price"}),e.jsxs(c,{direction:"row",spacing:5,sx:{my:2},children:[e.jsx(ce,{type:"min",value:a.priceRange,onFilters:i}),e.jsx(ce,{type:"max",value:a.priceRange,onFilters:i})]}),e.jsx(Us,{value:a.priceRange,onChange:w,step:10,min:0,max:200,marks:b,getAriaValueText:d=>`$${d}`,valueLabelFormat:d=>`$${d}`,sx:{alignSelf:"center",width:"calc(100% - 24px)"}})]}),f=e.jsxs(c,{spacing:2,alignItems:"flex-start",children:[e.jsx(u,{variant:"subtitle2",children:"Rating"}),l.map((d,k)=>e.jsxs(c,{direction:"row",onClick:()=>z(d),sx:{borderRadius:1,cursor:"pointer",typography:"body2","&:hover":{opacity:.48},...a.rating===d&&{pl:.5,pr:.75,py:.25,bgcolor:"action.selected"}},children:[e.jsx(K,{readOnly:!0,value:4-k,sx:{mr:1}})," & Up"]},d))]});return e.jsxs(e.Fragment,{children:[e.jsx(W,{disableRipple:!0,color:"inherit",endIcon:e.jsx(te,{color:"error",variant:"dot",invisible:!x,children:e.jsx(v,{icon:"ic:round-filter-list"})}),onClick:o,children:"Filters"}),e.jsxs(ts,{anchor:"right",open:s,onClose:n,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:280}},children:[$,e.jsx(Y,{}),e.jsx(os,{sx:{px:2.5,py:3},children:e.jsxs(c,{spacing:3,children:[_,H,q,G,f]})})]})]})}nr.propTypes={open:t.bool,onOpen:t.func,onClose:t.func,canReset:t.bool,filters:t.object,onFilters:t.func,genderOptions:t.array,onResetFilters:t.func,ratingOptions:t.array,categoryOptions:t.array,colorOptions:t.arrayOf(t.string)};function ce({type:s,value:o,onFilters:n}){const a=o[0],i=o[1],x=R.useCallback(()=>{a<0&&n("priceRange",[0,i]),a>200&&n("priceRange",[200,i]),i<0&&n("priceRange",[a,0]),i>200&&n("priceRange",[a,200])},[i,a,n]);return e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{width:1},children:[e.jsx(u,{variant:"caption",sx:{flexShrink:0,color:"text.disabled",textTransform:"capitalize",fontWeight:"fontWeightSemiBold"},children:`${s} ($)`}),e.jsx(is,{fullWidth:!0,value:s==="min"?a:i,onChange:p=>s==="min"?n("priceRange",[Number(p.target.value),i]):n("priceRange",[a,Number(p.target.value)]),onBlur:x,inputProps:{step:10,min:0,max:200,type:"number","aria-labelledby":"input-slider"},sx:{maxWidth:48,borderRadius:.75,bgcolor:p=>ue(p.palette.grey[500],.08),[`& .${ls.input}`]:{pr:1,py:.75,textAlign:"right",typography:"body2"}}})]})}ce.propTypes={onFilters:t.func,type:t.oneOf(["min","max"]),value:t.arrayOf(t.number)};function ar({filters:s,onFilters:o,canReset:n,onResetFilters:a,results:i,...x}){const p=b=>{const j=s.gender.filter(y=>y!==b);o("gender",j)},h=()=>{o("category","all")},r=b=>{const j=s.colors.filter(y=>y!==b);o("colors",j)},l=()=>{o("priceRange",[0,200])},m=()=>{o("rating","")};return e.jsxs(c,{spacing:1.5,...x,children:[e.jsxs(g,{sx:{typography:"body2"},children:[e.jsx("strong",{children:i}),e.jsx(g,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(c,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!s.gender.length&&e.jsx(B,{label:"Gender:",children:s.gender.map(b=>e.jsx(L,{label:b,size:"small",onDelete:()=>p(b)},b))}),s.category!=="all"&&e.jsx(B,{label:"Category:",children:e.jsx(L,{size:"small",label:s.category,onDelete:h})}),!!s.colors.length&&e.jsx(B,{label:"Colors:",children:s.colors.map(b=>e.jsx(L,{size:"small",label:e.jsx(g,{sx:{ml:-.5,width:18,height:18,bgcolor:b,borderRadius:"50%",border:j=>`solid 1px ${ue(j.palette.common.white,.24)}`}}),onDelete:()=>r(b)},b))}),(s.priceRange[0]!==0||s.priceRange[1]!==200)&&e.jsx(B,{label:"Price:",children:e.jsx(L,{size:"small",label:`$${s.priceRange[0]} - ${s.priceRange[1]}`,onDelete:l})}),!!s.rating&&e.jsx(B,{label:"Rating:",children:e.jsx(L,{size:"small",label:s.rating,onDelete:m})}),n&&e.jsx(W,{color:"error",onClick:a,startIcon:e.jsx(v,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}ar.propTypes={canReset:t.bool,filters:t.object,onFilters:t.func,results:t.number,onResetFilters:t.func};function B({label:s,children:o,sx:n,...a}){return e.jsxs(c,{component:xe,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...n},...a,children:[e.jsx(g,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(c,{spacing:1,direction:"row",flexWrap:"wrap",children:o})]})}B.propTypes={children:t.node,label:t.string,sx:t.object};function sn(){return e.jsx(g,{sx:{height:{sm:735,xs:550},py:{xs:20,md:0},overflow:"hidden",position:"relative",backgroundSize:"30%, 25%",backgroundRepeat:"no-repeat",backgroundPosition:"left bottom, right bottom",backgroundImage:"url(https://vapemonkeydubai.co/wp-content/uploads/2023/09/Joyetech-Tralus.png), url(https://vapemonkeydubai.co/wp-content/uploads/2023/09/apple_bomb.png)"},children:e.jsx(ds,{component:ps,children:e.jsxs(g,{sx:{bottom:{md:300},left:{md:100},right:{md:100},position:{md:"absolute"},textAlign:{xs:"center",md:"center"}},children:[e.jsxs(c,{spacing:2,display:"inline-flex",direction:"row",sx:{color:"common.black"},children:[e.jsx(D,{text:"Get"}),e.jsx(D,{text:"your"}),e.jsx(D,{text:"vape"}),e.jsx(D,{text:"delivered"})]}),e.jsx("br",{}),e.jsxs(c,{spacing:2,display:"inline-flex",direction:"row",sx:{color:"common.black"},children:[e.jsx(D,{text:"within"}),e.jsx(D,{text:"30"}),e.jsx(D,{text:"minutes"})]}),e.jsx("br",{}),e.jsx(be,{sx:{height:{sm:50,xs:20},width:{sm:300,md:600}},placeholder:"Search...",InputProps:{startAdornment:e.jsx(N,{position:"start",children:e.jsx(v,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})}),endAdornment:e.jsx(e.Fragment,{children:e.jsx(W,{variant:"contained",position:"end",sx:{backgroundColor:"primary.main",height:50,borderRadius:"0 10rem 10rem 0",width:100},children:"Search"})}),style:{padding:0,borderRadius:50}}}),e.jsx("br",{}),e.jsxs(c,{spacing:2,display:"inline-flex",direction:"row",sx:{color:"common.black",mt:3},children:[e.jsx(D,{text:"The"}),e.jsx(D,{text:"Amazon"}),e.jsx(D,{text:"of"}),e.jsx(D,{text:"Vape"})]})]})})})}function D({text:s,variants:o,sx:n,...a}){return e.jsx(g,{component:fe.div,sx:{typography:"h1",overflow:"hidden",display:"inline-flex",fontSize:{sm:50,xs:25},...n},...a,children:s.split("").map((i,x)=>e.jsx(fe.span,{variants:o||qs().inUp,children:i},x))})}D.propTypes={sx:t.object,text:t.string,variants:t.object};function tr({row:s,selected:o,onSelectRow:n,onDeleteRow:a,onEditRow:i,onViewRow:x}){const{name:p,salePrice:h,publish:r,category:l,quantity:m,createdAt:b,inventoryType:j,images:y}=s,C=Ae(),w=he();return e.jsxs(e.Fragment,{children:[e.jsxs(Bs,{hover:!0,selected:o,children:[e.jsx(E,{padding:"checkbox",children:e.jsx(J,{checked:o,onClick:n})}),e.jsxs(E,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(se,{alt:p,src:y[0],variant:"rounded",sx:{width:64,height:64,mr:2}}),e.jsx(oe,{disableTypography:!0,primary:e.jsx(De,{noWrap:!0,color:"inherit",variant:"subtitle2",onClick:x,sx:{cursor:"pointer"},children:p}),secondary:e.jsx(g,{component:"div",sx:{typography:"body2",color:"text.disabled"},children:l})})]}),e.jsx(E,{children:e.jsx(oe,{primary:ve(new Date(b),"dd MMM yyyy"),secondary:ve(new Date(b),"p"),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsxs(E,{sx:{typography:"caption",color:"text.secondary"},children:[e.jsx(Fe,{value:m*100/m,variant:"determinate",color:j==="out of stock"&&"error"||j==="low stock"&&"warning"||"success",sx:{mb:1,height:6,maxWidth:80}}),!!m&&m," ",j]}),e.jsx(E,{children:V(h)}),e.jsx(E,{children:e.jsx(xs,{variant:"soft",color:r&&"info"||"default",children:r?"Publish":"Draft"})}),e.jsx(E,{align:"right",children:e.jsx(X,{color:w.open?"primary":"default",onClick:w.onOpen,children:e.jsx(v,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(me,{open:w.open,onClose:w.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(O,{onClick:()=>{x(),w.onClose()},children:[e.jsx(v,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(O,{onClick:()=>{i(),w.onClose()},children:[e.jsx(v,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(O,{onClick:()=>{C.onTrue(),w.onClose()},sx:{color:"error.main"},children:[e.jsx(v,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(Gs,{open:C.value,onClose:C.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(W,{variant:"contained",color:"error",onClick:a,children:"Delete"})})]})}tr.propTypes={onDeleteRow:t.func,onEditRow:t.func,onSelectRow:t.func,onViewRow:t.func,row:t.object,selected:t.bool};function or({filters:s,onFilters:o,stockOptions:n,publishOptions:a}){const i=he(),x=R.useCallback(r=>{o("name",r.target.value)},[o]),p=R.useCallback(r=>{o("stock",typeof r.target.value=="string"?r.target.value.split(","):r.target.value)},[o]),h=R.useCallback(r=>{o("publish",typeof r.target.value=="string"?r.target.value.split(","):r.target.value)},[o]);return e.jsxs(e.Fragment,{children:[e.jsxs(c,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsxs(Ce,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(we,{children:"Stock"}),e.jsx(ke,{multiple:!0,value:s.stock,onChange:p,input:e.jsx(Re,{label:"Stock"}),renderValue:r=>r.map(l=>l).join(", "),sx:{textTransform:"capitalize"},children:n.map(r=>e.jsxs(O,{value:r.value,children:[e.jsx(J,{disableRipple:!0,size:"small",checked:s.stock.includes(r.value)}),r.label]},r.value))})]}),e.jsxs(Ce,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(we,{children:"Publish"}),e.jsx(ke,{multiple:!0,value:s.publish,onChange:h,input:e.jsx(Re,{label:"Publish"}),renderValue:r=>r.map(l=>l).join(", "),sx:{textTransform:"capitalize"},children:a.map(r=>e.jsxs(O,{value:r.value,children:[e.jsx(J,{disableRipple:!0,size:"small",checked:s.publish.includes(r.value)}),r.label]},r.value))})]}),e.jsxs(c,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(be,{fullWidth:!0,value:s.name,onChange:x,placeholder:"Search...",InputProps:{startAdornment:e.jsx(N,{position:"start",children:e.jsx(v,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(X,{onClick:i.onOpen,children:e.jsx(v,{icon:"eva:more-vertical-fill"})})]})]}),e.jsxs(me,{open:i.open,onClose:i.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(O,{onClick:()=>{i.onClose()},children:[e.jsx(v,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(O,{onClick:()=>{i.onClose()},children:[e.jsx(v,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(O,{onClick:()=>{i.onClose()},children:[e.jsx(v,{icon:"solar:export-bold"}),"Export"]})]})]})}or.propTypes={filters:t.object,onFilters:t.func,publishOptions:t.array,stockOptions:t.array};function ir({filters:s,onFilters:o,onResetFilters:n,results:a,...i}){const x=h=>{const r=s.stock.filter(l=>l!==h);o("stock",r)},p=h=>{const r=s.publish.filter(l=>l!==h);o("publish",r)};return e.jsxs(c,{spacing:1.5,...i,children:[e.jsxs(g,{sx:{typography:"body2"},children:[e.jsx("strong",{children:a}),e.jsx(g,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(c,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!s.stock.length&&e.jsx(de,{label:"Stock:",children:s.stock.map(h=>e.jsx(L,{label:h,size:"small",onDelete:()=>x(h)},h))}),!!s.publish.length&&e.jsx(de,{label:"Publish:",children:s.publish.map(h=>e.jsx(L,{label:h,size:"small",onDelete:()=>p(h)},h))}),e.jsx(W,{color:"error",onClick:n,startIcon:e.jsx(v,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}ir.propTypes={filters:t.object,onFilters:t.func,onResetFilters:t.func,results:t.number};function de({label:s,children:o,sx:n,...a}){return e.jsxs(c,{component:xe,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...n},...a,children:[e.jsx(g,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(c,{spacing:1,direction:"row",flexWrap:"wrap",children:o})]})}de.propTypes={children:t.node,label:t.string,sx:t.object};var lr=ms,cr=us;function dr(s,o){return s&&s.length?cr(s,lr(o)):0}var pr=dr;const xr=hs(pr);function Ee({reviews:s}){const{name:o,rating:n,review:a,postedAt:i,avatarUrl:x,attachments:p,isPurchased:h}=s,r=e.jsxs(c,{spacing:2,alignItems:"center",direction:{xs:"row",md:"column"},sx:{width:{md:240},textAlign:{md:"center"}},children:[e.jsx(se,{src:x,sx:{width:{xs:48,md:64},height:{xs:48,md:64}}}),e.jsx(oe,{primary:o,secondary:gs(i),primaryTypographyProps:{noWrap:!0,typography:"subtitle2",mb:.5},secondaryTypographyProps:{noWrap:!0,typography:"caption",component:"span"}})]}),l=e.jsxs(c,{spacing:1,flexGrow:1,children:[e.jsx(K,{size:"small",value:n,precision:.1,readOnly:!0}),e.jsx(u,{variant:"body2",children:a}),!!(p!=null&&p.length)&&e.jsx(c,{direction:"row",flexWrap:"wrap",spacing:1,sx:{pt:1},children:p.map(m=>e.jsx(g,{component:"img",alt:m,src:m,sx:{width:64,height:64,borderRadius:1.5}},m))}),e.jsxs(c,{direction:"row",spacing:2,sx:{pt:1.5},children:[e.jsxs(c,{direction:"row",alignItems:"center",sx:{typography:"caption"},children:[e.jsx(v,{icon:"solar:like-outline",width:16,sx:{mr:.5}}),"123"]}),e.jsxs(c,{direction:"row",alignItems:"center",sx:{typography:"caption"},children:[e.jsx(v,{icon:"solar:dislike-outline",width:16,sx:{mr:.5}}),"34"]})]})]});return e.jsxs(c,{spacing:2,direction:{xs:"column",md:"row"},sx:{mt:5,px:{xs:2.5,md:0}},children:[r,l]})}Ee.propTypes={review:t.object};function Ue({reviews:s}){return e.jsx(e.Fragment,{children:s.map(o=>e.jsx(Ee,{reviews:o},o.id))})}Ue.propTypes={reviews:t.array};function qe({onClose:s,...o}){var y;const{id:n}=js(),a=Oe().shape({rating:M().min(1,"Rating must be greater than or equal to 1"),review:P().required("Review is required"),name:P().required("Name is required"),email:P().required("Email is required").email("Email must be a valid email address")}),i={rating:0,review:"",name:"",email:""},x=ge({resolver:Pe(a),defaultValues:i}),{reset:p,control:h,handleSubmit:r,formState:{errors:l,isSubmitting:m}}=x,b=r(async C=>{try{const w=await Z.post("products/review",{...C,id:n});p(),s(),console.info("DATA",C)}catch(w){console.error(w)}}),j=R.useCallback(()=>{s(),p()},[s,p]);return e.jsx(bs,{onClose:s,...o,children:e.jsxs(je,{methods:x,onSubmit:b,children:[e.jsx(_s,{children:" Add Review "}),e.jsxs(Hs,{children:[e.jsxs(c,{direction:"row",flexWrap:"wrap",alignItems:"center",spacing:1.5,children:[e.jsx(u,{variant:"body2",children:"Your review about this product:"}),e.jsx(Ts,{name:"rating",control:h,render:({field:C})=>e.jsx(K,{...C,size:"small",value:Number(C.value)})})]}),!!l.rating&&e.jsxs($s,{error:!0,children:[" ",(y=l.rating)==null?void 0:y.message]}),e.jsx(F,{name:"review",label:"Review *",multiline:!0,rows:3,sx:{mt:3}}),e.jsx(F,{name:"name",label:"Name *",sx:{mt:3}}),e.jsx(F,{name:"email",label:"Email *",sx:{mt:3}})]}),e.jsxs(Ms,{children:[e.jsx(W,{color:"inherit",variant:"outlined",onClick:j,children:"Cancel"}),e.jsx(Le,{type:"submit",variant:"contained",loading:m,children:"Post"})]})]})})}qe.propTypes={onClose:t.func};function hr({totalRatings:s,totalReviews:o,ratings:n,reviews:a}){const i=Ae();xr(n,r=>r.starCount);const x=e.jsxs(c,{spacing:1,alignItems:"center",justifyContent:"center",children:[e.jsx(u,{variant:"subtitle2",children:"Average rating"}),e.jsxs(u,{variant:"h2",children:[a.reduce((r,l)=>r+l.rating,0)/a.length,"/5"]}),e.jsx(K,{readOnly:!0,value:a.reduce((r,l)=>r+l.rating,0)/a.length,precision:.1}),e.jsxs(u,{variant:"caption",sx:{color:"text.secondary"},children:["(",le(a.length)," reviews)"]})]}),p=e.jsx(c,{spacing:1.5,sx:{py:5,px:{xs:3,md:5},borderLeft:r=>({md:`dashed 1px ${r.palette.divider}`}),borderRight:r=>({md:`dashed 1px ${r.palette.divider}`})},children:[1,2,3,4,5].map(r=>e.jsxs(c,{direction:"row",alignItems:"center",children:[e.jsx(u,{variant:"subtitle2",component:"span",sx:{width:42},children:r}),e.jsx(Fe,{color:"inherit",variant:"determinate",value:a.filter(l=>l.rating===r).length/a.length*100,sx:{mx:2,flexGrow:1}}),e.jsx(u,{variant:"body2",component:"span",sx:{minWidth:48,color:"text.secondary"},children:le(a.filter(l=>l===r).length)})]},r))}),h=e.jsx(c,{alignItems:"center",justifyContent:"center",children:e.jsx(W,{size:"large",variant:"soft",color:"inherit",onClick:i.onTrue,startIcon:e.jsx(v,{icon:"solar:pen-bold"}),children:"Write your review"})});return e.jsxs(e.Fragment,{children:[e.jsxs(g,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{py:{xs:5,md:0}},children:[x,p,h]}),e.jsx(Y,{sx:{borderStyle:"dashed"}}),e.jsx(Ue,{reviews:a}),e.jsx(qe,{open:i.value,onClose:i.onFalse})]})}hr.propTypes={ratings:t.array,reviews:t.array,totalRatings:t.number,totalReviews:t.number};function mr({cart:s,product:o,onAddCart:n,onGotoStep:a,disabledActions:i,...x}){var ye;const p=pe(),{id:h,name:r,sizes:l,regularPrice:m,coverUrl:b,colors:j=[],quantity:y,salePrice:C,totalRatings:w,totalReviews:z,inventoryType:$,subDescription:_}=o,H=(ye=s==null?void 0:s.map(A=>A.id))==null?void 0:ye.includes(h),q={id:h,name:r,coverUrl:b,quantity:y,price:C,colors:(j==null?void 0:j.length)&&j[0],size:(l==null?void 0:l.lenght)&&l[0]},G=ge({defaultValues:q}),{reset:f,watch:d,handleSubmit:k}=G,S=d();R.useEffect(()=>{o&&f(q)},[o]);const re=k(async A=>{try{H||n({...A,colors:[S.colors],subTotal:A.price*A.quantity}),a(0),p.push(ee.product.checkout)}catch(Ke){console.error(Ke)}}),Ge=e.jsxs(g,{sx:{typography:"h5"},children:[C&&e.jsx(g,{component:"span",sx:{color:"text.disabled",textDecoration:"line-through",mr:.5},children:V(m)}),V(C)]}),Be=e.jsxs(c,{direction:"row",children:[e.jsx(u,{variant:"subtitle2",sx:{flexGrow:1},children:"Color"}),e.jsx(c,{direction:"row",children:j==null?void 0:j.map(A=>e.jsxs(u,{children:[A," , "]},A))})]}),Ne=e.jsxs(c,{direction:"row",children:[e.jsx(u,{variant:"subtitle2",sx:{flexGrow:1},children:"Size"}),e.jsx(c,{direction:"row",children:l==null?void 0:l.map(A=>e.jsxs(u,{children:[A," , "]},A))})]}),_e=e.jsxs(c,{direction:"row",children:[e.jsx(u,{variant:"subtitle2",sx:{flexGrow:1},children:"Quantity"}),e.jsx(c,{spacing:1,children:e.jsxs(u,{variant:"caption",component:"div",sx:{textAlign:"right"},children:["Available: ",y]})})]}),He=e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:_}),Me=e.jsxs(c,{direction:"row",alignItems:"center",sx:{color:"text.disabled",typography:"body2"},children:[e.jsx(K,{size:"small",value:w,precision:.1,readOnly:!0,sx:{mr:1}}),`(${le(z)} reviews)`]}),Ve=e.jsx(g,{component:"span",sx:{typography:"overline",color:$==="out of stock"&&"error.main"||$==="low stock"&&"warning.main"||"success.main"},children:$});return e.jsx(je,{methods:G,onSubmit:re,children:e.jsxs(c,{spacing:3,sx:{pt:3},...x,children:[e.jsxs(c,{spacing:2,alignItems:"flex-start",children:[Ve,e.jsx(u,{variant:"h5",children:r}),Me,Ge,He]}),e.jsx(Y,{sx:{borderStyle:"dashed"}}),Be,Ne,_e,e.jsx(Y,{sx:{borderStyle:"dashed"}})]})})}mr.propTypes={cart:t.array,disabledActions:t.bool,onAddCart:t.func,onGotoStep:t.func,product:t.object};const U=64,ur=fs("div")(({length:s,theme:o})=>({position:"relative",margin:o.spacing(0,"auto"),"& .slick-slide":{lineHeight:0},...s===1&&{maxWidth:U*1+16},...s===2&&{maxWidth:U*2+32},...(s===3||s===4)&&{maxWidth:U*3+48},...s>=5&&{maxWidth:U*6},...s>3&&{"&:before, &:after":{...vs({direction:"to left",startColor:`${ue(o.palette.background.default,0)} 0%`,endColor:`${o.palette.background.default} 100%`}),top:0,zIndex:9,content:"''",height:"100%",position:"absolute",width:U*2/3},"&:after":{right:0,transform:"scaleX(-1)"}}}));function gr({product:s={}}){var r;const o=ys(),n=(r=s==null?void 0:s.images)==null?void 0:r.map(l=>({src:l})),a=Vs(n),i=Te({rtl:!1,draggable:!1,adaptiveHeight:!0}),x=Te({rtl:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,variableWidth:!0,centerPadding:"0px",slidesToShow:(n==null?void 0:n.length)>3?3:n==null?void 0:n.length});R.useEffect(()=>{i.onSetNav(),x.onSetNav()},[i,x]),R.useEffect(()=>{a.open&&i.onTogo(a.selected)},[i,a.open,a.selected]);const p=e.jsxs(g,{sx:{mb:3,borderRadius:2,overflow:"hidden",position:"relative"},children:[e.jsx(Se,{...i.carouselSettings,asNavFor:x.nav,ref:i.carouselRef,children:n==null?void 0:n.map(l=>e.jsx(We,{alt:l.src,src:l.src,ratio:"1/1",onClick:()=>a.onOpen(l.src),sx:{cursor:"zoom-in"}},l.src))}),e.jsx(Qs,{index:i.currentIndex,total:n==null?void 0:n.length,onNext:x.onNext,onPrev:x.onPrev})]}),h=e.jsx(ur,{length:n==null?void 0:n.length,children:e.jsx(Se,{...x.carouselSettings,asNavFor:i.nav,ref:x.carouselRef,children:n==null?void 0:n.map((l,m)=>e.jsx(g,{sx:{px:.5},children:e.jsx(se,{alt:l.src,src:l.src,variant:"rounded",sx:{width:U,height:U,opacity:.48,cursor:"pointer",...i.currentIndex===m&&{opacity:1,border:`solid 2.5px ${o.palette.primary.main}`}}},l.src)},l.src))})});return e.jsxs(g,{sx:{"& .slick-slide":{float:o.direction==="rtl"?"right":"left"}},children:[p,h,e.jsx(Ks,{index:a.selected,slides:n,open:a.open,close:a.onClose,onGetCurrentIndex:l=>a.setSelected(l)})]})}gr.propTypes={product:t.object};function jr({description:s}){return e.jsx(Zs,{children:s,sx:{p:3,"& p, li, ol":{typography:"body2"},"& ol":{p:0,display:{md:"flex"},listStyleType:"none","& li":{"&:first-of-type":{minWidth:240,mb:{xs:.5,md:0}}}}}})}jr.propTypes={description:t.string};export{Js as C,sn as H,ar as P,er as a,Z as b,rr as c,nr as d,sr as e,gr as f,mr as g,jr as h,hr as i,en as j,or as k,ir as l,tr as m,Xs as n};
