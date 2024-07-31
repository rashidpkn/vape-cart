import{H as i,j as e,aX as we,aY as Be,aF as Ie,b as y,aS as Te,aZ as Re,a_ as De,ar as ge,ao as qe,aB as p,T as h,ah as K,S as q,a$ as E,B as v,b0 as Ne,b1 as Ee,b2 as ze,b3 as ne,b4 as Ue,b5 as be,a as N,b6 as $e,b7 as u,b8 as Le,b9 as me,aj as Oe,ba as Ke,as as je,at as c,al as Ve}from"./index-c6e15d29.js";import{c as Ye,a as A,b as ie,d as _e,e as le,f as Ge,u as He,R as V,g as Me,h as Qe,i as re,j as pe,k as Xe,l as fe,F as Ze}from"./form-provider-dfd51611.js";import{o as Je,L as We}from"./yup-9095ce7b.js";import{C as Z}from"./CardHeader-8e3c4761.js";import{F as z,R as J}from"./Radio-819d84f5.js";let ue=!1;const he=i.forwardRef(function(r,w){return ue||(console.warn(["MUI: The Autocomplete component was moved from the lab to the core.","","You should use `import { Autocomplete } from '@mui/material'`","or `import Autocomplete from '@mui/material/Autocomplete'`"].join(`
`)),ue=!0),e.jsx(we,Be({ref:w},r))});function na({currentProduct:s}){const r=Ie(),[w,Y]=i.useState(!1),[_,W]=i.useState([]);i.useEffect(()=>{y.get("/attributes").then(a=>{W(a.data)})},[]);const F=Te(),x=Re("up","md"),{enqueueSnackbar:oe}=De(),{user:g}=ge(),U=Ye().shape({name:A().required("Name is required"),subDescription:A().required("Short description is required").test("not-four-digits","Your content contain continues 7 digit number, Please remove",a=>!/\d{7,}/.test(a)).test("no-at-symbol",'Your content contains the "@" symbol. Please remove it.',a=>!/@/.test(a)),content:A().test("not-four-digits","Your content contain continues 7 digit number, Please remove",a=>!/\d{7,}/.test(a)).test("no-at-symbol",'Your content contains the "@" symbol. Please remove it.',a=>!/@/.test(a)),images:ie().min(1,"Image is required"),type:A(),category:A().required("Category is required"),tags:ie(),SKU:A().required("SKU is required"),brand:A().required("brand is required"),attributes:ie(),track:_e(),quantity:le(),regularPrice:le().moreThan(0,"Price should not be AED 0.00"),salePrice:le().lessThan(Ge("regularPrice"),"Sale price must be less than the regular price")}),B=i.useMemo(()=>({id:(s==null?void 0:s.id)||"",name:(s==null?void 0:s.name)||"",subDescription:(s==null?void 0:s.subDescription)||"",content:(s==null?void 0:s.content)||"",images:(s==null?void 0:s.images)||[],type:(s==null?void 0:s.type)||"Simple",category:(s==null?void 0:s.category)||"Disposables",tags:(s==null?void 0:s.tags)||[],SKU:(s==null?void 0:s.SKU)||"",brand:(s==null?void 0:s.brand)||"SMOK",attributes:(s==null?void 0:s.attributes)||[],track:(s==null?void 0:s.track)||!0,quantity:(s==null?void 0:s.quantity)||0,regularPrice:(s==null?void 0:s.regularPrice)||0,salePrice:(s==null?void 0:s.salePrice)||0}),[s]),[b,I]=i.useState({}),[k,G]=i.useState([]),H=He({resolver:Je(U),defaultValues:B}),{reset:$,watch:T,setValue:d,handleSubmit:R,formState:{isSubmitting:L,isValid:D}}=H,o=T(),[f,O]=i.useState([]),P=i.useCallback(async()=>{const{data:a}=await y.get("/products",{params:{name:o.name,productGroup:"parent"}});O(a.products.filter(t=>!t.name.includes("-")))},[o.name]);i.useEffect(()=>{P()},[o.name]),i.useEffect(()=>{s&&$(B)},[s,B,$]);const ee=R(async a=>{try{s?await y.patch("products",{...a,username:g.displayName,userId:g.id,storeName:g.storeName}):await y.post("products",{...a,username:g.displayName,userId:g.id,storeName:g.storeName}),$(),oe(s?"Update success!":"Create success!"),F.push(qe.dashboard.product.root)}catch(t){console.log(t)}}),ae=i.useCallback(a=>{const t=o.images||[],n=a.map(l=>Object.assign(l,{preview:URL.createObjectURL(l)}));d("images",[...t,...n],{shouldValidate:!0})},[d,o.images]),se=i.useCallback(a=>{var n;const t=o.images&&((n=o.images)==null?void 0:n.filter(l=>l!==a));d("images",t)},[d,o.images]),m=i.useCallback(()=>{d("images",[])},[d]),S=e.jsxs(e.Fragment,{children:[x&&e.jsxs(p,{md:4,children:[e.jsx(h,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(K,{children:[!x&&e.jsx(Z,{title:"Details"}),e.jsxs(q,{spacing:3,sx:{p:3},children:[e.jsx(he,{value:o.name,onChange:(a,t)=>{if(t){const n=f.find(l=>l.name===t);n&&(d("images",n.images),d("name",n.name),d("category",n.category),d("brand",n.brand),d("type",n.type))}else d("images",null)},name:"name",label:"Product Name",options:f.map(a=>a.name),getOptionLabel:a=>a,isOptionEqualToValue:(a,t)=>a===t.value,renderInput:a=>e.jsx(E,{...a,label:"Product Name",value:o.name,onChange:t=>d("name",t.target.value)}),renderOption:(a,t)=>e.jsxs(v,{component:"li",sx:{"& > img":{mr:2,flexShrink:0}},...a,children:[e.jsx("img",{loading:"lazy",width:"20",src:f.find(n=>n.name===t).images[0],alt:""}),t]}),freeSolo:!0}),e.jsx(V,{name:"subDescription",label:"Sub Description",multiline:!0,rows:4}),e.jsxs(q,{spacing:1.5,children:[e.jsx(h,{variant:"subtitle2",children:"Content"}),e.jsx(Me,{simple:!0,name:"content"})]}),e.jsxs(q,{spacing:1.5,children:[e.jsx(h,{variant:"subtitle2",children:"Images"}),e.jsx(Qe,{multiple:!0,name:"images",maxSize:3145728,onDrop:ae,onRemove:se,onRemoveAll:m,onUpload:async a=>{try{const t=new FormData;o.images.forEach(l=>{t.append("images",l)});const{data:n}=await y.post("upload",t);d("images",n),alert("Image upload complete.")}catch{alert(" Image upload failed, try again.")}}})]})]})]})})]}),[j,M]=i.useState({name:"",show:!1}),ye=e.jsxs(e.Fragment,{children:[x&&e.jsxs(p,{md:4,children:[e.jsx(h,{variant:"h6",sx:{mb:.5},children:"Key Properties"}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(K,{children:[!x&&e.jsx(Z,{title:"Properties"}),e.jsx(q,{spacing:3,sx:{p:3},children:e.jsxs(v,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(re,{native:!0,name:"type",label:"Product Type",InputLabelProps:{shrink:!0},children:Ne.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsx(re,{native:!0,name:"category",label:"Category",InputLabelProps:{shrink:!0},children:Ee.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsx(pe,{name:"tags",label:"Tags",placeholder:"+ Tags",multiple:!0,freeSolo:!0,options:ze.map(a=>a),getOptionLabel:a=>a,renderOption:(a,t)=>i.createElement("li",{...a,key:t},t),renderTags:(a,t)=>a.map((n,l)=>i.createElement(ne,{...t({index:l}),key:n,label:n,size:"small",color:"info",variant:"soft"}))}),e.jsx(V,{name:"SKU",label:"Product SKU"}),e.jsx(re,{native:!0,name:"brand",label:"Brand",InputLabelProps:{shrink:!0},children:Ue.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsxs(v,{display:"flex",alignItems:"center",gap:1,children:[e.jsx(z,{sx:{width:190},label:"Is your brand missing? Click here to add it.",control:e.jsx(be,{checked:j.show,onChange:a=>M(t=>({...t,show:a.target.checked}))})}),j.show&&e.jsxs(e.Fragment,{children:[e.jsx(E,{label:"Brand Name",style:{width:300},onChange:a=>M(t=>({...t,name:a.target.value})),value:j.name}),e.jsx(N,{variant:"contained",color:"success",onClick:async()=>{try{j.name?(await y.post("/notifications",{userId:g.id,role:"admin",title:"🚀 New Brand Approval Request! 🚀",message:`Exciting news! A new brand has been submitted for approval. Brand Name: ${j.name}. 🛍️`,type:"product"}),alert("Your request to create a new brand is being processed. Please wait while we verify the brand.")):alert("Please enter brand name")}catch{alert("An error occurred while adding this brand.")}},children:"Add Brand"})]})]})]})})]})})]}),Fe=(a,t,n)=>{I(X=>({...X,[n]:t}));const l=n==="Bottle Size"&&u.bottleSize||n==="Puffs"&&u.puffs||n==="Flavour"&&u.flavour||n==="Nicotine Strength"&&u.nicotineStrength||n==="Color"&&u.color||n==="Batteries"&&u.batteries||[],C=t[t.length-1];C&&(l.find(X=>X===C)||(console.log("upload"),y.post("/attributes",{username:g.displayName,attribute:n,value:C}).then(X=>{console.log("updated")})))},Se=e.jsxs(e.Fragment,{children:[x&&e.jsxs(p,{md:4,children:[e.jsx(h,{variant:"h6",sx:{mb:.5},children:"Product Attributes"}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(K,{children:[!x&&e.jsx(Z,{title:"Attributes"}),e.jsx(q,{spacing:3,sx:{p:3},children:e.jsxs(v,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(v,{sx:{gridColumn:"span 2 "},children:e.jsx(pe,{name:"attributes",label:"Attributes",placeholder:"+ Attributes",multiple:!0,options:$e.map(a=>a),getOptionLabel:a=>a,renderOption:(a,t)=>i.createElement("li",{...a,key:t},t),renderTags:(a,t)=>a.map((n,l)=>i.createElement(ne,{...t({index:l}),key:n,label:n,size:"small",color:"info",variant:"soft"}))})}),o.attributes.map(a=>e.jsx(v,{sx:{gridColumn:"span 1 "},children:e.jsx(he,{multiple:!0,freeSolo:!0,options:[...a==="Bottle Size"?u.bottleSize:[],...a==="Puffs"?u.puffs:[],...a==="Flavour"?u.flavour:[],...a==="Nicotine Strength"?u.nicotineStrength:[],...a==="Color"?u.color:[],...a==="Batteries"?u.batteries:[],..._.filter(t=>t.attribute===a).map(t=>t.value)],value:b[a],onChange:(t,n)=>{Fe(t,n,a),n.length>=2?k.find(l=>l===a)||G(l=>[...l,a]):G(l=>l.filter(C=>C!==a))},renderInput:t=>e.jsx(E,{...t,label:a,placeholder:a}),renderTags:(t,n)=>t.map((l,C)=>i.createElement(ne,{...n({index:C}),key:l,label:l,size:"small",color:"info",variant:"soft"}))})},a))]})})]})})]}),ve=e.jsxs(e.Fragment,{children:[x&&e.jsxs(p,{md:4,children:[e.jsx(h,{variant:"h6",sx:{mb:.5},children:"Pricing"}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Price related inputs"})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(K,{children:[!x&&e.jsx(Z,{title:"Pricing"}),e.jsxs(q,{spacing:3,sx:{p:3},children:[e.jsx(Xe,{name:"track",label:"Track"}),o.track&&e.jsx(V,{name:"quantity",label:"Quantity",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0}}),!o.track&&e.jsx(Le,{children:e.jsxs(fe,{defaultValue:"Instock",row:!0,children:[e.jsx(z,{d:!0,value:"Instock",control:e.jsx(J,{defaultChecked:!0}),label:"Instock"}),e.jsx(z,{value:"Outstock",control:e.jsx(J,{}),label:"Outstock"})]})}),e.jsx(V,{name:"regularPrice",label:"Regular Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(me,{position:"start",children:e.jsx(v,{component:"span",sx:{color:"text.disabled"},children:"AED"})})}}),e.jsx(V,{name:"salePrice",label:"Sale Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(me,{position:"start",children:e.jsx(v,{component:"span",sx:{color:"text.disabled"},children:"AED"})})}})]})]})})]}),ke=e.jsx(e.Fragment,{children:e.jsx(p,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:e.jsx(We,{type:"submit",variant:"contained",size:"large",loading:L,children:s?"Save Changes":"Create Product"})})}),Ce=e.jsx(e.Fragment,{children:e.jsx(p,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:e.jsx(N,{variant:"contained",size:"large",onClick:()=>{r("/dashboard/product")},children:"Save Product"})})}),te=["","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],ce=[...te,...te.slice(1).flatMap(a=>te.slice(1).map(t=>a+t))];let Q=1,de=0;const Ae=e.jsxs(e.Fragment,{children:[x&&e.jsx(p,{md:4,children:e.jsx(h,{variant:"h6",sx:{mb:.5},children:"Variation Table"})}),e.jsx(p,{xs:12,md:12,children:e.jsx(K,{children:e.jsxs(Oe,{children:[e.jsx(Ke,{children:e.jsxs(je,{children:[e.jsx(c,{children:"ID"}),e.jsx(c,{width:150,children:"SKU"}),e.jsx(c,{width:250,children:"Attributes"}),e.jsx(c,{width:150,children:"Track Stock"}),e.jsx(c,{children:"Stock"}),e.jsx(c,{children:"Regular Price"}),e.jsx(c,{children:"Sales Price"}),e.jsx(c,{children:"Image"}),e.jsx(c,{width:200,children:"Add Product"})]})}),e.jsxs(Ve,{children:[e.jsx(xe,{counter:Q++,counter2:de++,skuAlpha:ce,va:"Parent",values:o,variables:b,disabled:!0,isSubmitting:L,isValid:D,setProductAdded:()=>{}},Q),Object.keys(b).reduce((a,t)=>a.flatMap(n=>b[t].map(l=>`${n} - ${l}`)),[""]).map(a=>e.jsx(xe,{counter:Q++,counter2:de++,skuAlpha:ce,va:a.slice(3),values:o,variables:b,disabled:!1,isSubmitting:L,isValid:D,setProductAdded:Y},Q))]})]})})})]});return e.jsx(Ze,{methods:H,onSubmit:ee,children:e.jsxs(p,{container:!0,spacing:3,children:[S,ye,o.type==="Variable"&&Se,o.type==="Simple"&&ve,o.type==="Variable"&&Ae,o.type==="Simple"&&ke,o.type==="Variable"&&w&&Ce]})})}function xe({counter:s,values:r,skuAlpha:w,counter2:Y,va:_,variables:W,disabled:F,isSubmitting:x,isValid:oe,setProductAdded:g}){const{user:U}=ge(),B=w[Y]?`${r.SKU}-${w[Y]}`:r.SKU;let{name:b}=r;const I=_==="Parent";I||(b=`${r.name} - ${_}`);const[k,G]=i.useState(!0),[H,$]=i.useState("instock"),[T,d]=i.useState(null),[R,L]=i.useState(null),[D,o]=i.useState(null),[f,O]=i.useState("pending"),[P,ee]=i.useState(null),ae=async m=>{try{const S=new FormData;S.append("images",m.target.files[0]);const{data:j}=await y.post("upload",S);ee([j[0],...r.images])}catch{}},se=async()=>{const m=/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{2B55}\u{231A}-\u{231B}\u{23E9}-\u{23EC}\u{23F0}\u{23F3}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2B1B}-\u{2B1C}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2194}-\u{2199}\u{21A9}-\u{21AA}\u{2B06}\u{2B07}\u{2B1B}\u{2B1C}]/u,S=/\d{7,}/,j=/@/;if(m.test(r.subDescription)||m.test(r.content)){alert("Your content contain emojis, Please remove emojis");return}if(S.test(r.subDescription)||S.test(r.content)){alert("Your content contain continues 7 digit number, Please remove");return}if(j.test(r.subDescription)||j.test(r.content)){alert('Your content contains the "@" symbol. Please remove it.');return}if(!I){if(!D&&k)return alert("Quantity is required.");if(!T)return alert("Regular price is required.");if(R&&T<=R)return alert("Sale price must be less than the regular price")}if(f==="pending"){O("loading");try{await y.post("/products",{username:U.displayName,userId:U.id,storeName:U.storeName,name:b,subDescription:r.subDescription,content:r.content,images:P??r.images,type:r.type,category:r.category,tags:r.tags,parentSku:r.SKU,brand:r.brand,attributes:r.attributes,variables:W,SKU:B,track:k,quantity:D,regularPrice:T,salePrice:R,productGroup:I?"parent":"child"}),O("success"),g(!0)}catch(M){console.log(`Product Creation failed :${M}`),O("failed")}}};return e.jsxs(je,{style:{backgroundColor:F&&"rgba(0,0,0,0.1)"},children:[e.jsx(c,{children:s}),e.jsx(c,{children:B}),e.jsx(c,{children:I?`${b} - Parent`:b}),e.jsx(c,{children:e.jsx(z,{label:"",control:e.jsx(be,{checked:k,onChange:m=>G(m.target.checked),disabled:F})})}),e.jsxs(c,{width:150,children:[k&&e.jsx(E,{inputProps:{min:0},disabled:F,size:"small",label:"Quantity",type:"number",onChange:m=>o(+m.target.value||null),value:D}),!k&&e.jsxs(fe,{"aria-label":"Stock",name:"Stock",value:H,onChange:m=>$(m.target.value),children:[e.jsx(z,{value:"instock",control:e.jsx(J,{}),label:"Instock"}),e.jsx(z,{value:"outstock",control:e.jsx(J,{}),label:"Outstock"})]})]}),e.jsx(c,{width:150,children:e.jsx(E,{inputProps:{min:0},disabled:F,size:"small",label:"Price",type:"number",onChange:m=>d(+m.target.value||null),value:T})}),e.jsx(c,{width:150,children:e.jsx(E,{inputProps:{min:0},disabled:F,size:"small",label:"Price",type:"number",onChange:m=>L(+m.target.value||null),value:R})}),e.jsx(c,{width:150,children:e.jsx("input",{size:"small",label:"Image",type:"file",onChange:ae,disabled:F,style:{width:"150px"}})}),e.jsxs(c,{children:[f==="pending"&&!0&&e.jsx(N,{color:"success",variant:"contained",size:"small",onClick:se,type:"submit",children:"Add Product"}),f==="loading"&&e.jsx(N,{color:"success",variant:"contained",size:"small",children:"Loading"}),f==="success"&&e.jsx(N,{color:"success",variant:"contained",size:"small",children:"Product Created"}),f==="failed"&&e.jsx(N,{color:"success",variant:"contained",size:"small",children:"Product creation failed"})]})]})}export{na as P};
