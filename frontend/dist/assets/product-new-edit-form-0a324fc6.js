import{H as r,j as e,aX as Te,aY as De,aF as Re,b as v,aS as qe,aZ as Ue,a_ as Ne,ar as fe,ao as ze,aB as p,T as x,ah as G,S as z,a$ as K,B as F,b0 as Ee,b1 as Ke,b2 as $e,b3 as re,b4 as W,b5 as Le,a as E,b6 as Oe,b7 as Ge,b8 as u,b9 as _e,ba as ue,aj as Ve,bb as Ye,as as ye,at as d,al as He}from"./index-7069bc8c.js";import{c as Me,a as C,b as oe,d as Qe,e as ce,f as Xe,u as Ze,R as _,g as Je,h as We,i as Z,j as he,k as Pe,l as Se,F as ea}from"./form-provider-094f0618.js";import{o as aa,L as xe}from"./yup-6e331a9e.js";import{C as J}from"./CardHeader-47b33794.js";import{F as w,R as P}from"./Radio-a2f0ad91.js";let ge=!1;const be=r.forwardRef(function(o,T){return ge||(console.warn(["MUI: The Autocomplete component was moved from the lab to the core.","","You should use `import { Autocomplete } from '@mui/material'`","or `import Autocomplete from '@mui/material/Autocomplete'`"].join(`
`)),ge=!0),e.jsx(Te,De({ref:T},o))});function ra({currentProduct:s}){const o=Re(),[T,V]=r.useState(!1),[Y,ee]=r.useState([]);r.useEffect(()=>{v.get("/attributes").then(a=>{ee(a.data)})},[]);const k=qe(),g=Ue("up","md"),{enqueueSnackbar:de}=Ne(),{user:b}=fe(),$=Me().shape({name:C().required("Name is required"),subDescription:C().required("Short description is required").test("not-four-digits","Your content contain continues 7 digit number, Please remove",a=>!/\d{7,}/.test(a)).test("no-at-symbol",'Your content contains the "@" symbol. Please remove it.',a=>!/@/.test(a)),content:C().test("not-four-digits","Your content contain continues 7 digit number, Please remove",a=>!/\d{7,}/.test(a)).test("no-at-symbol",'Your content contains the "@" symbol. Please remove it.',a=>!/@/.test(a)),images:oe().min(1,"Image is required"),type:C(),category:C().required("Category is required"),tags:oe(),SKU:C().required("SKU is required"),brand:C().required("brand is required"),status:C().required("brand is required"),attributes:oe(),track:Qe(),quantity:ce(),regularPrice:ce().moreThan(0,"Price should not be AED 0.00"),salePrice:ce().lessThan(Xe("regularPrice"),"Sale price must be less than the regular price")}),D=r.useMemo(()=>({id:(s==null?void 0:s.id)||"",name:(s==null?void 0:s.name)||"",subDescription:(s==null?void 0:s.subDescription)||"",content:(s==null?void 0:s.content)||"",images:(s==null?void 0:s.images)||[],type:(s==null?void 0:s.type)||"Simple",category:(s==null?void 0:s.category)||"Disposables",tags:(s==null?void 0:s.tags)||[],SKU:(s==null?void 0:s.SKU)||"",brand:(s==null?void 0:s.brand)||"SMOK",status:(s==null?void 0:s.status)||"Published",attributes:(s==null?void 0:s.attributes)||[],track:(s==null?void 0:s.track)||!0,quantity:(s==null?void 0:s.quantity)||0,regularPrice:(s==null?void 0:s.regularPrice)||0,salePrice:(s==null?void 0:s.salePrice)||0}),[s]),[h,B]=r.useState({}),[f,I]=r.useState([]),H=Ze({resolver:aa($),defaultValues:D}),{reset:L,watch:R,setValue:c,handleSubmit:q,formState:{isSubmitting:U,isValid:N}}=H,l=R(),[y,O]=r.useState([]),ae=r.useCallback(async()=>{const{data:a}=await v.get("/products",{params:{name:l.name,productGroup:"parent"}});O(a.products.filter(t=>!t.name.includes("-")))},[l.name]);r.useEffect(()=>{ae()},[l.name]),r.useEffect(()=>{s&&L(D)},[s,D,L]);const se=q(async a=>{try{s?await v.patch("products",{...a,username:b.displayName,userId:b.id,storeName:b.storeName}):await v.post("products",{...a,username:b.displayName,userId:b.id,storeName:b.storeName}),L(),de(s?"Update success!":"Create success!"),k.push(ze.dashboard.product.root)}catch(t){console.log(t)}}),te=r.useCallback(a=>{const t=l.images||[],n=a.map(i=>Object.assign(i,{preview:URL.createObjectURL(i)}));c("images",[...t,...n],{shouldValidate:!0})},[c,l.images]),ne=r.useCallback(a=>{var n;const t=l.images&&((n=l.images)==null?void 0:n.filter(i=>i!==a));c("images",t)},[c,l.images]),m=r.useCallback(()=>{c("images",[])},[c]),A=e.jsxs(e.Fragment,{children:[g&&e.jsxs(p,{md:4,children:[e.jsx(x,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(G,{children:[!g&&e.jsx(J,{title:"Details"}),e.jsxs(z,{spacing:3,sx:{p:3},children:[e.jsx(be,{value:l.name,onChange:(a,t)=>{if(t){const n=y.find(i=>i.name===t);n&&(c("images",n.images),c("name",n.name),c("category",n.category),c("brand",n.brand),c("type",n.type))}else c("images",null)},name:"name",label:"Product Name",options:y.map(a=>a.name),getOptionLabel:a=>a,isOptionEqualToValue:(a,t)=>a===t.value,renderInput:a=>e.jsx(K,{...a,label:"Product Name",value:l.name,onChange:t=>c("name",t.target.value)}),renderOption:(a,t)=>e.jsxs(F,{component:"li",sx:{"& > img":{mr:2,flexShrink:0}},...a,children:[e.jsx("img",{loading:"lazy",width:"20",src:y.find(n=>n.name===t).images[0],alt:""}),t]}),freeSolo:!0}),e.jsx(_,{name:"subDescription",label:"Sub Description",multiline:!0,rows:4}),e.jsxs(z,{spacing:1.5,children:[e.jsx(x,{variant:"subtitle2",children:"Content"}),e.jsx(Je,{simple:!0,name:"content"})]}),e.jsxs(z,{spacing:1.5,children:[e.jsx(x,{variant:"subtitle2",children:"Images"}),e.jsx(We,{multiple:!0,name:"images",maxSize:3145728,onDrop:te,onRemove:ne,onRemoveAll:m,onUpload:async a=>{try{const t=new FormData;l.images.forEach(i=>{t.append("images",i)});const{data:n}=await v.post("upload",t);c("images",n),alert("Image upload complete.")}catch{alert(" Image upload failed, try again.")}}})]})]})]})})]}),[j,M]=r.useState({name:"",show:!1}),[Fe,ie]=r.useState(!1),ve=e.jsxs(e.Fragment,{children:[g&&e.jsxs(p,{md:4,children:[e.jsx(x,{variant:"h6",sx:{mb:.5},children:"Key Properties"}),e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(G,{children:[!g&&e.jsx(J,{title:"Properties"}),e.jsx(z,{spacing:3,sx:{p:3},children:e.jsxs(F,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(Z,{native:!0,name:"type",label:"Product Type",InputLabelProps:{shrink:!0},children:Ee.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsx(Z,{native:!0,name:"category",label:"Category",InputLabelProps:{shrink:!0},children:Ke.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsx(he,{name:"tags",label:"Tags",placeholder:"+ Tags",multiple:!0,freeSolo:!0,options:$e.map(a=>a),getOptionLabel:a=>a,renderOption:(a,t)=>r.createElement("li",{...a,key:t},t),renderTags:(a,t)=>a.map((n,i)=>r.createElement(re,{...t({index:i}),key:n,label:n,size:"small",color:"info",variant:"soft"}))}),e.jsxs(F,{children:[e.jsx(_,{name:"SKU",label:"Product SKU"}),e.jsx(w,{label:"Automatically generate SKUs",control:e.jsx(W,{checked:Fe,onChange:a=>{a.target.checked?l.name.replaceAll(" ","").trim().length>=8?(c("SKU",l.name.replaceAll(" ","").trim().slice(0,8)+"-1"),ie(!0)):(ie(!1),alert("To automatically generate SKUs, ensure that the product name has at least 8 characters.")):(c("SKU",""),ie(!1))}})})]}),e.jsx(Z,{native:!0,name:"brand",label:"Brand",InputLabelProps:{shrink:!0},children:Le.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsxs(F,{display:"flex",alignItems:"center",gap:1,children:[e.jsx(w,{sx:{width:190},label:"Is your brand missing? Click here to add it.",control:e.jsx(W,{checked:j.show,onChange:a=>M(t=>({...t,show:a.target.checked}))})}),j.show&&e.jsxs(e.Fragment,{children:[e.jsx(K,{label:"Brand Name",style:{width:300},onChange:a=>M(t=>({...t,name:a.target.value})),value:j.name}),e.jsx(E,{variant:"contained",color:"success",onClick:async()=>{try{j.name?(await v.post("/notifications",{userId:b.id,role:"admin",title:"🚀 New Brand Approval Request! 🚀",message:`Exciting news! A new brand has been submitted for approval. Brand Name: ${j.name}. 🛍️`,type:"product"}),alert("Your request to create a new brand is being processed. Please wait while we verify the brand.")):alert("Please enter brand name")}catch{alert("An error occurred while adding this brand.")}},children:"Add Brand"})]})]}),e.jsx(Z,{native:!0,name:"status",label:"status",InputLabelProps:{shrink:!0},children:Oe.map(a=>e.jsx("option",{value:a,children:a},a))})]})})]})})]}),ke=(a,t,n)=>{if(l.type==="Variable"||l.type==="Simple"&&n==="Flavour"){B(X=>({...X,[n]:t}));const i=n==="Bottle Size"&&u.bottleSize||n==="Puffs"&&u.puffs||n==="Flavour"&&u.flavour||n==="Nicotine Strength"&&u.nicotineStrength||n==="Color"&&u.color||n==="Batteries"&&u.batteries||[],S=t[t.length-1];if(!S)return;i.find(X=>X===S)||(console.log("upload"),v.post("/attributes",{username:b.displayName,attribute:n,value:S}).then(X=>{console.log("updated")}))}else{const i=t[t.length-1];console.log({...h,[n]:[i]}),B(S=>({...S,[n]:[i]}))}};console.log(h),console.log(f);const Ae=e.jsxs(e.Fragment,{children:[g&&e.jsxs(p,{md:4,children:[e.jsx(x,{variant:"h6",sx:{mb:.5},children:"Product Attributes"}),e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(G,{children:[!g&&e.jsx(J,{title:"Attributes"}),e.jsx(z,{spacing:3,sx:{p:3},children:e.jsxs(F,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(F,{sx:{gridColumn:"span 2 "},children:e.jsx(he,{name:"attributes",label:"Attributes",placeholder:"+ Attributes",multiple:!0,options:Ge.map(a=>a),getOptionLabel:a=>a,renderOption:(a,t)=>r.createElement("li",{...a,key:t},t),renderTags:(a,t)=>a.map((n,i)=>r.createElement(re,{...t({index:i}),key:n,label:n,size:"small",color:"info",variant:"soft"}))})}),l.attributes.map(a=>e.jsxs(F,{sx:{gridColumn:"span 1 "},children:[e.jsx(be,{multiple:!0,freeSolo:!0,options:[...a==="Bottle Size"?u.bottleSize:[],...a==="Puffs"?u.puffs:[],...a==="Flavour"?u.flavour:[],...a==="Nicotine Strength"?u.nicotineStrength:[],...a==="Color"?u.color:[],...a==="Batteries"?u.batteries:[],...Y.filter(t=>t.attribute===a).map(t=>t.value)],value:h[a]||[],onChange:(t,n)=>{ke(t,n,a),l.type==="Simple"&&(a==="Flavour"?n.length>=2?f.find(i=>i===a)||I(i=>[...i,a]):I(i=>i.filter(S=>S!==a)):I([a]))},renderInput:t=>e.jsx(K,{...t,label:a,placeholder:a}),renderTags:(t,n)=>t.map((i,S)=>r.createElement(re,{...n({index:S}),key:i,label:i,size:"small",color:"info",variant:"soft"}))}),l.type==="Variable"&&e.jsx(w,{label:"Use this attribute to create Variations",control:e.jsx(W,{onChange:t=>{t.target.checked?I(n=>[...new Set([...n,a])]):I(n=>[...new Set(n.filter(i=>i!==a))])}})})]},a))]})})]})})]}),Ce=e.jsxs(e.Fragment,{children:[g&&e.jsxs(p,{md:4,children:[e.jsx(x,{variant:"h6",sx:{mb:.5},children:"Pricing"}),e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:"Price related inputs"})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(G,{children:[!g&&e.jsx(J,{title:"Pricing"}),e.jsxs(z,{spacing:3,sx:{p:3},children:[e.jsx(Pe,{name:"track",label:"Track"}),l.track&&e.jsx(_,{name:"quantity",label:"Quantity",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0}}),!l.track&&e.jsx(_e,{children:e.jsxs(Se,{defaultValue:"Instock",row:!0,children:[e.jsx(w,{d:!0,value:"Instock",control:e.jsx(P,{defaultChecked:!0}),label:"Instock"}),e.jsx(w,{value:"Outstock",control:e.jsx(P,{}),label:"Outstock"})]})}),e.jsx(_,{name:"regularPrice",label:"Regular Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(ue,{position:"start",children:e.jsx(F,{component:"span",sx:{color:"text.disabled"},children:"AED"})})}}),e.jsx(_,{name:"salePrice",label:"Sale Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(ue,{position:"start",children:e.jsx(F,{component:"span",sx:{color:"text.disabled"},children:"AED"})})}})]})]})})]}),we=e.jsx(e.Fragment,{children:e.jsxs(p,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},gap:2.5,children:[e.jsx(xe,{type:"submit",variant:"contained",size:"large",loading:U,children:s?"Save Changes":"Create Product"}),e.jsx(xe,{onClick:()=>{c("status","Draft")},type:"submit",variant:"contained",size:"large",loading:U,children:"Save as Draft"})]})}),Be=e.jsx(e.Fragment,{children:e.jsx(p,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:e.jsx(E,{variant:"contained",size:"large",onClick:()=>{o("/dashboard/product")},children:"Save Product"})})}),le=["","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],me=[...le,...le.slice(1).flatMap(a=>le.slice(1).map(t=>a+t))];let Q=1,pe=0;const Ie=e.jsxs(e.Fragment,{children:[g&&e.jsx(p,{md:4,children:e.jsx(x,{variant:"h6",sx:{mb:.5},children:"Variation Table"})}),e.jsx(p,{xs:12,md:12,children:e.jsx(G,{children:e.jsxs(Ve,{children:[e.jsx(Ye,{children:e.jsxs(ye,{children:[e.jsx(d,{children:"ID"}),e.jsx(d,{width:150,children:"SKU"}),e.jsx(d,{width:250,children:"Attributes"}),e.jsx(d,{width:150,children:"Track Stock"}),e.jsx(d,{children:"Stock"}),e.jsx(d,{children:"Regular Price"}),e.jsx(d,{children:"Sales Price"}),e.jsx(d,{children:"Image"}),e.jsx(d,{width:200,children:"Add Product"})]})}),e.jsxs(He,{children:[e.jsx(je,{counter:Q++,counter2:pe++,skuAlpha:me,va:"Parent",values:l,variables:h,disabled:!0,isSubmitting:U,isValid:N,setProductAdded:()=>{}},Q),f.reduce((a,t)=>a.flatMap(n=>h[t].map(i=>`${n} - ${i}`)),[""]).map(a=>e.jsx(je,{counter:Q++,counter2:pe++,skuAlpha:me,va:a.slice(3),values:l,variables:h,disabled:!1,isSubmitting:U,isValid:N,setProductAdded:V},Q))]})]})})})]});return e.jsx(ea,{methods:H,onSubmit:se,children:e.jsxs(p,{container:!0,spacing:3,children:[A,ve,Ae,l.type==="Simple"&&Ce,l.type==="Variable"&&Ie,l.type==="Simple"&&we,l.type==="Variable"&&T&&Be]})})}function je({counter:s,values:o,skuAlpha:T,counter2:V,va:Y,variables:ee,disabled:k,isSubmitting:g,isValid:de,setProductAdded:b}){const{user:$}=fe(),D=T[V]?`${o.SKU}-${T[V]}`:o.SKU;let{name:h}=o;const B=Y==="Parent";B||(h=`${o.name} - ${Y}`);const[f,I]=r.useState(!0),[H,L]=r.useState("instock"),[R,c]=r.useState(null),[q,U]=r.useState(null),[N,l]=r.useState(null),[y,O]=r.useState("pending"),[ae,se]=r.useState(null),te=async m=>{try{const A=new FormData;A.append("images",m.target.files[0]);const{data:j}=await v.post("upload",A);se([j[0],...o.images])}catch{}},ne=async()=>{const m=/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{2B55}\u{231A}-\u{231B}\u{23E9}-\u{23EC}\u{23F0}\u{23F3}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2B1B}-\u{2B1C}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2194}-\u{2199}\u{21A9}-\u{21AA}\u{2B06}\u{2B07}\u{2B1B}\u{2B1C}]/u,A=/\d{7,}/,j=/@/;if(m.test(o.subDescription)||m.test(o.content)){alert("Your content contain emojis, Please remove emojis");return}if(A.test(o.subDescription)||A.test(o.content)){alert("Your content contain continues 7 digit number, Please remove");return}if(j.test(o.subDescription)||j.test(o.content)){alert('Your content contains the "@" symbol. Please remove it.');return}if(!B){if(!N&&f)return alert("Quantity is required.");if(!R)return alert("Regular price is required.");if(q&&R<=q)return alert("Sale price must be less than the regular price")}if(y==="pending"){O("loading");try{await v.post("/products",{username:$.displayName,userId:$.id,storeName:$.storeName,name:h,subDescription:o.subDescription,content:o.content,images:ae??o.images,type:o.type,category:o.category,tags:o.tags,parentSku:o.SKU,brand:o.brand,status:o.status,attributes:o.attributes,variables:ee,SKU:D,track:f,quantity:N,regularPrice:R,salePrice:q,productGroup:B?"parent":"child"}),O("success"),b(!0)}catch(M){console.log(`Product Creation failed :${M}`),O("failed")}}};return e.jsxs(ye,{style:{backgroundColor:k&&"rgba(0,0,0,0.1)"},children:[e.jsx(d,{children:s}),e.jsx(d,{children:D}),e.jsx(d,{children:B?`${h} - Parent`:h}),e.jsx(d,{children:e.jsx(w,{label:"",control:e.jsx(W,{checked:f,onChange:m=>I(m.target.checked),disabled:k})})}),e.jsxs(d,{width:150,children:[f&&e.jsx(K,{inputProps:{min:0},disabled:k,size:"small",label:"Quantity",type:"number",onChange:m=>l(+m.target.value||null),value:N}),!f&&e.jsxs(Se,{"aria-label":"Stock",name:"Stock",value:H,onChange:m=>L(m.target.value),children:[e.jsx(w,{value:"instock",control:e.jsx(P,{}),label:"Instock"}),e.jsx(w,{value:"outstock",control:e.jsx(P,{}),label:"Outstock"})]})]}),e.jsx(d,{width:150,children:e.jsx(K,{inputProps:{min:0},disabled:k,size:"small",label:"Price",type:"number",onChange:m=>c(+m.target.value||null),value:R})}),e.jsx(d,{width:150,children:e.jsx(K,{inputProps:{min:0},disabled:k,size:"small",label:"Price",type:"number",onChange:m=>U(+m.target.value||null),value:q})}),e.jsx(d,{width:150,children:e.jsx("input",{size:"small",label:"Image",type:"file",onChange:te,disabled:k,style:{width:"150px"}})}),e.jsxs(d,{children:[y==="pending"&&e.jsx(E,{color:"success",variant:"contained",size:"small",onClick:ne,type:"submit",children:"Add Product"}),y==="loading"&&e.jsx(E,{color:"success",variant:"contained",size:"small",children:"Loading"}),y==="success"&&e.jsx(E,{color:"success",variant:"contained",size:"small",children:"Product Created"}),y==="failed"&&e.jsx(E,{color:"success",variant:"contained",size:"small",children:"Product creation failed"})]})]})}export{ra as P};
