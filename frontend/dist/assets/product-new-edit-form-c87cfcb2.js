import{F as n,j as e,b9 as ge,aO as be,b5 as je,ba as fe,bb as ye,aw as me,aA as B,b2 as Fe,ax as p,T as x,af as q,S as A,B as F,bc as P,bd as pe,be as z,al as U,ah as Se,bf as ke,ao as he,ap as c,aj as ve,bg as le}from"./index-65dcd3da.js";import{c as Ce,a as S,b as ee,d as se,u as Ae,R as ae,e as oe,f as E,F as we,g as Be,h as Ie,i as Te}from"./form-provider-1a9fe27b.js";import{o as De,L as Re}from"./yup-2f828919.js";import{_ as qe,a as Ee,b as Ue,c as ze,d as Ne,e as w}from"./createProducts-6b8714cd.js";import{C as _}from"./CardHeader-58e72ff2.js";import{F as V,R as re}from"./image-6af13758.js";let ce=!1;const Ke=n.forwardRef(function(l,m){return ce||(console.warn(["MUI: The Autocomplete component was moved from the lab to the core.","","You should use `import { Autocomplete } from '@mui/material'`","or `import Autocomplete from '@mui/material/Autocomplete'`"].join(`
`)),ce=!0),e.jsx(ge,be({ref:m},l))});function He({currentProduct:a}){const l=je(),m=fe("up","md"),{enqueueSnackbar:N}=ye(),{user:h}=me(),G=Ce().shape({name:S().required("Name is required"),subDescription:S().required("Short description is required").test("not-four-digits","Your content contain continues 4 digit number, Please remove",s=>!/\d{4,}/.test(s)),content:S().test("not-four-digits","Your content contain continues 4 digit number, Please remove",s=>!/\d{4,}/.test(s)),images:ee().min(1,"Image is required"),type:S(),category:S().required("Category is required"),tags:ee(),SKU:S().required("SKU is required"),brand:S().required("brand is required"),attributes:ee(),quantity:se(),regularPrice:se(),salePrice:se().moreThan(0,"Price should not be AED 0.00")}),u=n.useMemo(()=>({id:(a==null?void 0:a.id)||"",name:(a==null?void 0:a.name)||"",subDescription:(a==null?void 0:a.subDescription)||"",content:(a==null?void 0:a.content)||"",images:(a==null?void 0:a.images)||[],type:(a==null?void 0:a.type)||"Simple",category:(a==null?void 0:a.category)||"Disposables",tags:(a==null?void 0:a.tags)||[],SKU:(a==null?void 0:a.SKU)||"",brand:(a==null?void 0:a.brand)||"SMOK",attributes:(a==null?void 0:a.attributes)||[],quantity:(a==null?void 0:a.quantity)||0,regularPrice:(a==null?void 0:a.regularPrice)||0,salePrice:(a==null?void 0:a.salePrice)||0}),[a]),[k,te]=n.useState({}),[I,T]=n.useState([]),f=Ae({resolver:De(G),defaultValues:u}),{reset:b,watch:H,setValue:g,handleSubmit:Y,formState:{isSubmitting:v,isValid:K}}=f,r=H(),M=n.useCallback(async()=>{await B.get("/products",{params:{name:r.name}})},[r.name]);n.useEffect(()=>{M()},[r.name]),n.useEffect(()=>{a&&b(u)},[a,u,b]);const L=Y(async s=>{console.log(s);try{a?await B.patch("products",{...s,username:h.displayName,userId:h.id,storeName:h.storeName}):await B.post("products",{...s,username:h.displayName,userId:h.id,storeName:h.storeName}),b(),N(a?"Update success!":"Create success!"),l.push(Fe.dashboard.product.root)}catch(t){console.log(t)}}),Q=n.useCallback(s=>{const t=r.images||[],o=s.map(i=>Object.assign(i,{preview:URL.createObjectURL(i)}));g("images",[...t,...o],{shouldValidate:!0})},[g,r.images]),y=n.useCallback(s=>{var o;const t=r.images&&((o=r.images)==null?void 0:o.filter(i=>i!==s));g("images",t)},[g,r.images]),D=n.useCallback(()=>{g("images",[])},[g]),J=e.jsxs(e.Fragment,{children:[m&&e.jsxs(p,{md:4,children:[e.jsx(x,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(q,{children:[!m&&e.jsx(_,{title:"Details"}),e.jsxs(A,{spacing:3,sx:{p:3},children:[e.jsx(E,{name:"name",label:"Product Name"}),e.jsx(E,{name:"subDescription",label:"Sub Description",multiline:!0,rows:4}),e.jsxs(A,{spacing:1.5,children:[e.jsx(x,{variant:"subtitle2",children:"Content"}),e.jsx(Be,{simple:!0,name:"content"})]}),e.jsxs(A,{spacing:1.5,children:[e.jsx(x,{variant:"subtitle2",children:"Images"}),e.jsx(Ie,{multiple:!0,name:"images",maxSize:3145728,onDrop:Q,onRemove:y,onRemoveAll:D,onUpload:async s=>{try{const t=new FormData;r.images.forEach(i=>{t.append("images",i)});const{data:o}=await B.post("upload",t);g("images",o),alert("Image upload complete.")}catch{alert(" Image upload failed, try again.")}}})]})]})]})})]}),[C,O]=n.useState({name:"",show:!1}),W=e.jsxs(e.Fragment,{children:[m&&e.jsxs(p,{md:4,children:[e.jsx(x,{variant:"h6",sx:{mb:.5},children:"Key Properties"}),e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(q,{children:[!m&&e.jsx(_,{title:"Properties"}),e.jsx(A,{spacing:3,sx:{p:3},children:e.jsxs(F,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(ae,{native:!0,name:"type",label:"Product Type",InputLabelProps:{shrink:!0},children:qe.map(s=>e.jsx("option",{value:s,children:s},s))}),e.jsx(ae,{native:!0,name:"category",label:"Category",InputLabelProps:{shrink:!0},children:Ee.map(s=>e.jsx("option",{value:s,children:s},s))}),e.jsx(oe,{name:"tags",label:"Tags",placeholder:"+ Tags",multiple:!0,freeSolo:!0,options:Ue.map(s=>s),getOptionLabel:s=>s,renderOption:(s,t)=>n.createElement("li",{...s,key:t},t),renderTags:(s,t)=>s.map((o,i)=>n.createElement(P,{...t({index:i}),key:o,label:o,size:"small",color:"info",variant:"soft"}))}),e.jsx(E,{name:"SKU",label:"Product SKU"}),e.jsx(ae,{native:!0,name:"brand",label:"Brand",InputLabelProps:{shrink:!0},children:ze.map(s=>e.jsx("option",{value:s,children:s},s))}),e.jsxs(F,{display:"flex",alignItems:"center",gap:1,children:[e.jsx(V,{sx:{width:190},label:"Is your brand missing? Click here to add it.",control:e.jsx(pe,{checked:C.show,onChange:s=>O(t=>({...t,show:s.target.checked}))})}),C.show&&e.jsxs(e.Fragment,{children:[e.jsx(z,{label:"Brand Name",style:{width:300},onChange:s=>O(t=>({...t,name:s.target.value})),value:C.name}),e.jsx(U,{variant:"contained",color:"success",onClick:()=>{C.name?alert("Your request to create a new brand is being processed. Please wait while we verify the brand."):alert("Please enter brand name")},children:"Add Brand"})]})]})]})})]})})]}),d=(s,t,o)=>{te(i=>({...i,[o]:t}))},j=e.jsxs(e.Fragment,{children:[m&&e.jsxs(p,{md:4,children:[e.jsx(x,{variant:"h6",sx:{mb:.5},children:"Product Attributes"}),e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(q,{children:[!m&&e.jsx(_,{title:"Attributes"}),e.jsx(A,{spacing:3,sx:{p:3},children:e.jsxs(F,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(F,{sx:{gridColumn:"span 2 "},children:e.jsx(oe,{name:"attributes",label:"Attributes",placeholder:"+ Attributes",multiple:!0,options:Ne.map(s=>s),getOptionLabel:s=>s,renderOption:(s,t)=>n.createElement("li",{...s,key:t},t),renderTags:(s,t)=>s.map((o,i)=>n.createElement(P,{...t({index:i}),key:o,label:o,size:"small",color:"info",variant:"soft"}))})}),r.attributes.map(s=>e.jsx(F,{sx:{gridColumn:"span 1 "},children:e.jsx(Ke,{multiple:!0,freeSolo:!0,options:s==="Bottle Size"&&w.bottleSize||s==="Puffs"&&w.puffs||s==="Flavour"&&w.flavour||s==="Nicotine Strength"&&w.nicotineStrength||s==="Color"&&w.color||s==="Batteries"&&w.batteries||[],value:k[s],onChange:(t,o)=>{d(t,o,s),console.log(),o.length>=2?I.find(i=>i===s)||T(i=>[...i,s]):T(i=>i.filter(Z=>Z!==s))},renderInput:t=>e.jsx(z,{...t,label:s,placeholder:s}),renderTags:(t,o)=>t.map((i,Z)=>n.createElement(P,{...o({index:Z}),key:i,label:i,size:"small",color:"info",variant:"soft"}))})},s))]})})]})})]}),R=e.jsxs(e.Fragment,{children:[m&&e.jsxs(p,{md:4,children:[e.jsx(x,{variant:"h6",sx:{mb:.5},children:"Pricing"}),e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:"Price related inputs"})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(q,{children:[!m&&e.jsx(_,{title:"Pricing"}),e.jsxs(A,{spacing:3,sx:{p:3},children:[e.jsx(E,{name:"regularPrice",label:"Regular Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(le,{position:"start",children:e.jsx(F,{component:"span",sx:{color:"text.disabled"},children:"AED"})})}}),e.jsx(E,{name:"salePrice",label:"Sale Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(le,{position:"start",children:e.jsx(F,{component:"span",sx:{color:"text.disabled"},children:"AED"})})}})]})]})})]}),xe=e.jsx(e.Fragment,{children:e.jsx(p,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:e.jsx(Re,{type:"submit",variant:"contained",size:"large",loading:v,children:a?"Save Changes":"Create Product"})})}),X=["","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],ie=[...X,...X.slice(1).flatMap(s=>X.slice(1).map(t=>s+t))];let $=1,ne=0;const ue=e.jsxs(e.Fragment,{children:[m&&e.jsx(p,{md:4,children:e.jsx(x,{variant:"h6",sx:{mb:.5},children:"Variation Table"})}),e.jsx(p,{xs:12,md:12,children:e.jsx(q,{children:e.jsxs(Se,{children:[e.jsx(ke,{children:e.jsxs(he,{children:[e.jsx(c,{children:"ID"}),e.jsx(c,{width:150,children:"SKU"}),e.jsx(c,{width:250,children:"Attributes"}),e.jsx(c,{width:150,children:"Track Order"}),e.jsx(c,{children:"Stock"}),e.jsx(c,{children:"Regular Price"}),e.jsx(c,{children:"Sales Price"}),e.jsx(c,{children:"Image"}),e.jsx(c,{width:200,children:"Add Product"})]})}),e.jsxs(ve,{children:[e.jsx(de,{counter:$++,counter2:ne++,skuAlpha:ie,va:"Parent",values:r,variables:k,disabled:!0,isSubmitting:v,isValid:K},$),Object.keys(k).reduce((s,t)=>s.flatMap(o=>k[t].map(i=>`${o} - ${i}`)),[""]).map(s=>e.jsx(de,{counter:$++,counter2:ne++,skuAlpha:ie,va:s.slice(3),values:r,variables:k,disabled:!1,isSubmitting:v,isValid:K},$))]})]})})})]});return e.jsx(we,{methods:f,onSubmit:L,children:e.jsxs(p,{container:!0,spacing:3,children:[J,W,r.type==="Variable"&&j,r.type==="Simple"&&R,r.type==="Variable"&&ue,r.type==="Simple"&&xe]})})}function de({counter:a,values:l,skuAlpha:m,counter2:N,va:h,variables:G,disabled:u,isSubmitting:k,isValid:te}){const{user:I}=me(),T=m[N]?`${l.SKU}-${m[N]}`:l.SKU;let f=l.name;h!=="Parent"&&(f=`${l.name} - ${h}`);const[b,H]=n.useState(!0),[g,Y]=n.useState("instock"),[v,K]=n.useState(null),[r,M]=n.useState(null),[L,Q]=n.useState(null),[y,D]=n.useState("pending"),[J,C]=n.useState(null),O=async d=>{try{const j=new FormData;j.append("images",d.target.files[0]);const{data:R}=await B.post("upload",j);C([R[0],...l.images])}catch{}},W=async()=>{const d=/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{2B55}\u{231A}-\u{231B}\u{23E9}-\u{23EC}\u{23F0}\u{23F3}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2B1B}-\u{2B1C}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2194}-\u{2199}\u{21A9}-\u{21AA}\u{2B06}\u{2B07}\u{2B1B}\u{2B1C}]/u,j=/\d{4,}/;if(d.test(l.subDescription)||d.test(l.content)){alert("Your content contain emojis, Please remove emojis");return}if(j.test(l.subDescription)||j.test(l.content)){alert("Your content contain continues 4 digit number, Please remove");return}if(y==="pending"){D("loading");try{await B.post("/products",{username:I.displayName,userId:I.id,storeName:I.storeName,name:f,subDescription:l.subDescription,content:l.content,images:J??l.images,type:l.type,category:l.category,tags:l.tags,parentSku:l.SKU,brand:l.brand,attributes:l.attributes,variables:G,SKU:T,track:b,quantity:L,regularPrice:v,salePrice:r,productGroup:h==="Parent"?"parent":"child"}),D("success")}catch(R){console.log(`Product Creation failed :${R}`),D("failed")}}};return e.jsxs(he,{style:{backgroundColor:u&&"rgba(0,0,0,0.1)"},children:[e.jsx(c,{children:a}),e.jsx(c,{children:T}),e.jsx(c,{children:h==="Parent"?f+" - Parent":f}),e.jsx(c,{children:e.jsx(V,{label:"",control:e.jsx(pe,{checked:b,onChange:d=>H(d.target.checked),disabled:u})})}),e.jsxs(c,{children:[b&&e.jsx(z,{disabled:u,size:"small",label:"Quantity",type:"number",onChange:d=>Q(+d.target.value||null),value:L}),!b&&e.jsxs(Te,{"aria-label":"Stock",name:"Stock",value:g,onChange:d=>Y(d.target.value),children:[e.jsx(V,{value:"instock",control:e.jsx(re,{}),label:"Instock"}),e.jsx(V,{value:"outstock",control:e.jsx(re,{}),label:"Outstock"})]})]}),e.jsx(c,{children:e.jsx(z,{disabled:u,size:"small",label:"Price",type:"number",onChange:d=>K(+d.target.value||null),value:v})}),e.jsx(c,{children:e.jsx(z,{disabled:u,size:"small",label:"Price",type:"number",onChange:d=>M(+d.target.value||null),value:r})}),e.jsx(c,{children:e.jsx("input",{size:"small",label:"Image",type:"file",onChange:O,disabled:u})}),e.jsxs(c,{children:[y==="pending"&&!0&&e.jsx(U,{color:"success",variant:"contained",size:"small",onClick:W,type:"submit",children:"Add Product"}),y==="loading"&&e.jsx(U,{color:"success",variant:"contained",size:"small",children:"Loading"}),y==="success"&&e.jsx(U,{color:"success",variant:"contained",size:"small",children:"Product Created"}),y==="failed"&&e.jsx(U,{color:"success",variant:"contained",size:"small",children:"Product creation failed"})]})]})}export{He as P};
