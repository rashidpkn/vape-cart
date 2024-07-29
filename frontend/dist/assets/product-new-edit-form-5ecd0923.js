import{F as n,j as e,aX as Ae,aY as we,aF as Be,aC as v,aS as Ie,aZ as Te,a_ as qe,az as ge,an as De,aA as p,T as h,af as $,S as q,a$ as R,B as S,b0 as Re,b1 as ze,b2 as Ee,b3 as te,b4 as Ne,b5 as be,al as D,b6 as Ue,b7 as u,ah as Le,b8 as $e,aq as je,ar as d,aj as Ke,b9 as ce}from"./index-f6071d58.js";import{c as Oe,a as k,b as ie,d as ne,u as Ye,R as K,e as _e,f as Ge,g as le,h as me,F as Ve,i as He}from"./form-provider-2dfaed3c.js";import{o as Me,L as Qe}from"./yup-281ddffc.js";import{C as X}from"./CardHeader-07649a82.js";import{F as Z,R as pe}from"./Radio-ccd1d9bf.js";let ue=!1;const he=n.forwardRef(function(r,A){return ue||(console.warn(["MUI: The Autocomplete component was moved from the lab to the core.","","You should use `import { Autocomplete } from '@mui/material'`","or `import Autocomplete from '@mui/material/Autocomplete'`"].join(`
`)),ue=!0),e.jsx(Ae,we({ref:A},r))});function es({currentProduct:t}){const r=Be(),[A,O]=n.useState(!1),[Y,J]=n.useState([]);n.useEffect(()=>{v.get("/attributes").then(s=>{J(s.data)})},[]);const y=Ie(),x=Te("up","md"),{enqueueSnackbar:re}=qe(),{user:b}=ge(),z=Oe().shape({name:k().required("Name is required"),subDescription:k().required("Short description is required").test("not-four-digits","Your content contain continues 7 digit number, Please remove",s=>!/\d{7,}/.test(s)).test("no-at-symbol",'Your content contains the "@" symbol. Please remove it.',s=>!/@/.test(s)),content:k().test("not-four-digits","Your content contain continues 7 digit number, Please remove",s=>!/\d{7,}/.test(s)).test("no-at-symbol",'Your content contains the "@" symbol. Please remove it.',s=>!/@/.test(s)),images:ie().min(1,"Image is required"),type:k(),category:k().required("Category is required"),tags:ie(),SKU:k().required("SKU is required"),brand:k().required("brand is required"),attributes:ie(),quantity:ne().required("Quantity is required"),regularPrice:ne().moreThan(0,"Price should not be AED 0.00"),salePrice:ne()}),w=n.useMemo(()=>({id:(t==null?void 0:t.id)||"",name:(t==null?void 0:t.name)||"",subDescription:(t==null?void 0:t.subDescription)||"",content:(t==null?void 0:t.content)||"",images:(t==null?void 0:t.images)||[],type:(t==null?void 0:t.type)||"Simple",category:(t==null?void 0:t.category)||"Disposables",tags:(t==null?void 0:t.tags)||[],SKU:(t==null?void 0:t.SKU)||"",brand:(t==null?void 0:t.brand)||"SMOK",attributes:(t==null?void 0:t.attributes)||[],quantity:(t==null?void 0:t.quantity)||null,regularPrice:(t==null?void 0:t.regularPrice)||0,salePrice:(t==null?void 0:t.salePrice)||0}),[t]),[g,B]=n.useState({}),[I,_]=n.useState([]),G=Ye({resolver:Me(z),defaultValues:w}),{reset:E,watch:N,setValue:c,handleSubmit:V,formState:{isSubmitting:U,isValid:T}}=G,o=N(),[j,L]=n.useState([]),H=n.useCallback(async()=>{const{data:s}=await v.get("/products",{params:{name:o.name,productGroup:"parent"}});L(s.products.filter(a=>!a.name.includes("-")))},[o.name]);n.useEffect(()=>{H()},[o.name]),n.useEffect(()=>{t&&E(w)},[t,w,E]);const W=V(async s=>{try{t?await v.patch("products",{...s,username:b.displayName,userId:b.id,storeName:b.storeName}):await v.post("products",{...s,username:b.displayName,userId:b.id,storeName:b.storeName}),E(),re(t?"Update success!":"Create success!"),y.push(De.dashboard.product.root)}catch(a){console.log(a)}}),ee=n.useCallback(s=>{const a=o.images||[],i=s.map(l=>Object.assign(l,{preview:URL.createObjectURL(l)}));c("images",[...a,...i],{shouldValidate:!0})},[c,o.images]),se=n.useCallback(s=>{var i;const a=o.images&&((i=o.images)==null?void 0:i.filter(l=>l!==s));c("images",a)},[c,o.images]),m=n.useCallback(()=>{c("images",[])},[c]),F=e.jsxs(e.Fragment,{children:[x&&e.jsxs(p,{md:4,children:[e.jsx(h,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs($,{children:[!x&&e.jsx(X,{title:"Details"}),e.jsxs(q,{spacing:3,sx:{p:3},children:[e.jsx(he,{onChange:(s,a)=>{if(a){const i=j.find(l=>l.name===a);i&&(c("images",i.images),c("name",i.name),c("category",i.category),c("brand",i.brand),c("type",i.type))}else c("images",null)},name:"name",label:"Product Name",options:j.map(s=>s.name),getOptionLabel:s=>s,isOptionEqualToValue:(s,a)=>s===a.value,renderInput:s=>e.jsx(R,{...s,label:"Product Name",value:o.name,onChange:a=>c("name",a.target.value)}),renderOption:(s,a)=>e.jsxs(S,{component:"li",sx:{"& > img":{mr:2,flexShrink:0}},...s,children:[e.jsx("img",{loading:"lazy",width:"20",src:j.find(i=>i.name===a).images[0],alt:""}),a]}),freeSolo:!0}),e.jsx(K,{name:"subDescription",label:"Sub Description",multiline:!0,rows:4}),e.jsxs(q,{spacing:1.5,children:[e.jsx(h,{variant:"subtitle2",children:"Content"}),e.jsx(_e,{simple:!0,name:"content"})]}),e.jsxs(q,{spacing:1.5,children:[e.jsx(h,{variant:"subtitle2",children:"Images"}),e.jsx(Ge,{multiple:!0,name:"images",maxSize:3145728,onDrop:ee,onRemove:se,onRemoveAll:m,onUpload:async s=>{try{const a=new FormData;o.images.forEach(l=>{a.append("images",l)});const{data:i}=await v.post("upload",a);c("images",i),alert("Image upload complete.")}catch{alert(" Image upload failed, try again.")}}})]})]})]})})]}),[f,M]=n.useState({name:"",show:!1}),fe=e.jsxs(e.Fragment,{children:[x&&e.jsxs(p,{md:4,children:[e.jsx(h,{variant:"h6",sx:{mb:.5},children:"Key Properties"}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs($,{children:[!x&&e.jsx(X,{title:"Properties"}),e.jsx(q,{spacing:3,sx:{p:3},children:e.jsxs(S,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(le,{native:!0,name:"type",label:"Product Type",InputLabelProps:{shrink:!0},children:Re.map(s=>e.jsx("option",{value:s,children:s},s))}),e.jsx(le,{native:!0,name:"category",label:"Category",InputLabelProps:{shrink:!0},children:ze.map(s=>e.jsx("option",{value:s,children:s},s))}),e.jsx(me,{name:"tags",label:"Tags",placeholder:"+ Tags",multiple:!0,freeSolo:!0,options:Ee.map(s=>s),getOptionLabel:s=>s,renderOption:(s,a)=>n.createElement("li",{...s,key:a},a),renderTags:(s,a)=>s.map((i,l)=>n.createElement(te,{...a({index:l}),key:i,label:i,size:"small",color:"info",variant:"soft"}))}),e.jsx(K,{name:"SKU",label:"Product SKU"}),e.jsx(le,{native:!0,name:"brand",label:"Brand",InputLabelProps:{shrink:!0},children:Ne.map(s=>e.jsx("option",{value:s,children:s},s))}),e.jsxs(S,{display:"flex",alignItems:"center",gap:1,children:[e.jsx(Z,{sx:{width:190},label:"Is your brand missing? Click here to add it.",control:e.jsx(be,{checked:f.show,onChange:s=>M(a=>({...a,show:s.target.checked}))})}),f.show&&e.jsxs(e.Fragment,{children:[e.jsx(R,{label:"Brand Name",style:{width:300},onChange:s=>M(a=>({...a,name:s.target.value})),value:f.name}),e.jsx(D,{variant:"contained",color:"success",onClick:()=>{f.name?alert("Your request to create a new brand is being processed. Please wait while we verify the brand."):alert("Please enter brand name")},children:"Add Brand"})]})]})]})})]})})]}),ye=(s,a,i)=>{B(P=>({...P,[i]:a}));const l=i==="Bottle Size"&&u.bottleSize||i==="Puffs"&&u.puffs||i==="Flavour"&&u.flavour||i==="Nicotine Strength"&&u.nicotineStrength||i==="Color"&&u.color||i==="Batteries"&&u.batteries||[],C=a[a.length-1];C&&(l.find(P=>P===C)||(console.log("upload"),v.post("/attributes",{username:b.displayName,attribute:i,value:C}).then(P=>{console.log("updated")})))},Fe=e.jsxs(e.Fragment,{children:[x&&e.jsxs(p,{md:4,children:[e.jsx(h,{variant:"h6",sx:{mb:.5},children:"Product Attributes"}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs($,{children:[!x&&e.jsx(X,{title:"Attributes"}),e.jsx(q,{spacing:3,sx:{p:3},children:e.jsxs(S,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(S,{sx:{gridColumn:"span 2 "},children:e.jsx(me,{name:"attributes",label:"Attributes",placeholder:"+ Attributes",multiple:!0,options:Ue.map(s=>s),getOptionLabel:s=>s,renderOption:(s,a)=>n.createElement("li",{...s,key:a},a),renderTags:(s,a)=>s.map((i,l)=>n.createElement(te,{...a({index:l}),key:i,label:i,size:"small",color:"info",variant:"soft"}))})}),o.attributes.map(s=>e.jsx(S,{sx:{gridColumn:"span 1 "},children:e.jsx(he,{multiple:!0,freeSolo:!0,options:[...s==="Bottle Size"?u.bottleSize:[],...s==="Puffs"?u.puffs:[],...s==="Flavour"?u.flavour:[],...s==="Nicotine Strength"?u.nicotineStrength:[],...s==="Color"?u.color:[],...s==="Batteries"?u.batteries:[],...Y.filter(a=>a.attribute===s).map(a=>a.value)],value:g[s],onChange:(a,i)=>{ye(a,i,s),i.length>=2?I.find(l=>l===s)||_(l=>[...l,s]):_(l=>l.filter(C=>C!==s))},renderInput:a=>e.jsx(R,{...a,label:s,placeholder:s}),renderTags:(a,i)=>a.map((l,C)=>n.createElement(te,{...i({index:C}),key:l,label:l,size:"small",color:"info",variant:"soft"}))})},s))]})})]})})]}),Se=e.jsxs(e.Fragment,{children:[x&&e.jsxs(p,{md:4,children:[e.jsx(h,{variant:"h6",sx:{mb:.5},children:"Pricing"}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Price related inputs"})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs($,{children:[!x&&e.jsx(X,{title:"Pricing"}),e.jsxs(q,{spacing:3,sx:{p:3},children:[e.jsx(K,{name:"quantity",label:"Quantity",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0}}),e.jsx(K,{name:"regularPrice",label:"Regular Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(ce,{position:"start",children:e.jsx(S,{component:"span",sx:{color:"text.disabled"},children:"AED"})})}}),e.jsx(K,{name:"salePrice",label:"Sale Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(ce,{position:"start",children:e.jsx(S,{component:"span",sx:{color:"text.disabled"},children:"AED"})})}})]})]})})]}),ve=e.jsx(e.Fragment,{children:e.jsx(p,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:e.jsx(Qe,{type:"submit",variant:"contained",size:"large",loading:U,children:t?"Save Changes":"Create Product"})})}),Ce=e.jsx(e.Fragment,{children:e.jsx(p,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:e.jsx(D,{variant:"contained",size:"large",onClick:()=>{r("/dashboard/product")},children:"Save Product"})})}),ae=["","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],oe=[...ae,...ae.slice(1).flatMap(s=>ae.slice(1).map(a=>s+a))];let Q=1,de=0;const ke=e.jsxs(e.Fragment,{children:[x&&e.jsx(p,{md:4,children:e.jsx(h,{variant:"h6",sx:{mb:.5},children:"Variation Table"})}),e.jsx(p,{xs:12,md:12,children:e.jsx($,{children:e.jsxs(Le,{children:[e.jsx($e,{children:e.jsxs(je,{children:[e.jsx(d,{children:"ID"}),e.jsx(d,{width:150,children:"SKU"}),e.jsx(d,{width:250,children:"Attributes"}),e.jsx(d,{width:150,children:"Track Stock"}),e.jsx(d,{children:"Stock"}),e.jsx(d,{children:"Regular Price"}),e.jsx(d,{children:"Sales Price"}),e.jsx(d,{children:"Image"}),e.jsx(d,{width:200,children:"Add Product"})]})}),e.jsxs(Ke,{children:[e.jsx(xe,{counter:Q++,counter2:de++,skuAlpha:oe,va:"Parent",values:o,variables:g,disabled:!0,isSubmitting:U,isValid:T,setProductAdded:()=>{}},Q),Object.keys(g).reduce((s,a)=>s.flatMap(i=>g[a].map(l=>`${i} - ${l}`)),[""]).map(s=>e.jsx(xe,{counter:Q++,counter2:de++,skuAlpha:oe,va:s.slice(3),values:o,variables:g,disabled:!1,isSubmitting:U,isValid:T,setProductAdded:O},Q))]})]})})})]});return e.jsx(Ve,{methods:G,onSubmit:W,children:e.jsxs(p,{container:!0,spacing:3,children:[F,fe,o.type==="Variable"&&Fe,o.type==="Simple"&&Se,o.type==="Variable"&&ke,o.type==="Simple"&&ve,o.type==="Variable"&&A&&Ce]})})}function xe({counter:t,values:r,skuAlpha:A,counter2:O,va:Y,variables:J,disabled:y,isSubmitting:x,isValid:re,setProductAdded:b}){const{user:z}=ge(),w=A[O]?`${r.SKU}-${A[O]}`:r.SKU;let{name:g}=r;const B=Y==="Parent";B||(g=`${r.name} - ${Y}`);const[I,_]=n.useState(!0),[G,E]=n.useState("instock"),[N,c]=n.useState(null),[V,U]=n.useState(null),[T,o]=n.useState(null),[j,L]=n.useState("pending"),[H,W]=n.useState(null),ee=async m=>{try{const F=new FormData;F.append("images",m.target.files[0]);const{data:f}=await v.post("upload",F);W([f[0],...r.images])}catch{}},se=async()=>{const m=/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{2B55}\u{231A}-\u{231B}\u{23E9}-\u{23EC}\u{23F0}\u{23F3}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2B1B}-\u{2B1C}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2194}-\u{2199}\u{21A9}-\u{21AA}\u{2B06}\u{2B07}\u{2B1B}\u{2B1C}]/u,F=/\d{7,}/,f=/@/;if(m.test(r.subDescription)||m.test(r.content)){alert("Your content contain emojis, Please remove emojis");return}if(F.test(r.subDescription)||F.test(r.content)){alert("Your content contain continues 7 digit number, Please remove");return}if(f.test(r.subDescription)||f.test(r.content)){alert('Your content contains the "@" symbol. Please remove it.');return}if(!B){if(!H)return alert("Child image is required.");if(!T)return alert("Quantity is required.");if(!N)return alert("Regular price is required.")}if(j==="pending"){L("loading");try{await v.post("/products",{username:z.displayName,userId:z.id,storeName:z.storeName,name:g,subDescription:r.subDescription,content:r.content,images:H??r.images,type:r.type,category:r.category,tags:r.tags,parentSku:r.SKU,brand:r.brand,attributes:r.attributes,variables:J,SKU:w,track:I,quantity:T,regularPrice:N,salePrice:V,productGroup:B?"parent":"child"}),L("success"),b(!0)}catch(M){console.log(`Product Creation failed :${M}`),L("failed")}}};return e.jsxs(je,{style:{backgroundColor:y&&"rgba(0,0,0,0.1)"},children:[e.jsx(d,{children:t}),e.jsx(d,{children:w}),e.jsx(d,{children:B?`${g} - Parent`:g}),e.jsx(d,{children:e.jsx(Z,{label:"",control:e.jsx(be,{checked:I,onChange:m=>_(m.target.checked),disabled:y})})}),e.jsxs(d,{width:150,children:[I&&e.jsx(R,{inputProps:{min:0},disabled:y,size:"small",label:"Quantity",type:"number",onChange:m=>o(+m.target.value||null),value:T}),!I&&e.jsxs(He,{"aria-label":"Stock",name:"Stock",value:G,onChange:m=>E(m.target.value),children:[e.jsx(Z,{value:"instock",control:e.jsx(pe,{}),label:"Instock"}),e.jsx(Z,{value:"outstock",control:e.jsx(pe,{}),label:"Outstock"})]})]}),e.jsx(d,{width:150,children:e.jsx(R,{inputProps:{min:0},disabled:y,size:"small",label:"Price",type:"number",onChange:m=>c(+m.target.value||null),value:N})}),e.jsx(d,{width:150,children:e.jsx(R,{inputProps:{min:0},disabled:y,size:"small",label:"Price",type:"number",onChange:m=>U(+m.target.value||null),value:V})}),e.jsx(d,{width:150,children:e.jsx("input",{size:"small",label:"Image",type:"file",onChange:ee,disabled:y,style:{width:"150px"}})}),e.jsxs(d,{children:[j==="pending"&&!0&&e.jsx(D,{color:"success",variant:"contained",size:"small",onClick:se,type:"submit",children:"Add Product"}),j==="loading"&&e.jsx(D,{color:"success",variant:"contained",size:"small",children:"Loading"}),j==="success"&&e.jsx(D,{color:"success",variant:"contained",size:"small",children:"Product Created"}),j==="failed"&&e.jsx(D,{color:"success",variant:"contained",size:"small",children:"Product creation failed"})]})]})}export{es as P};
