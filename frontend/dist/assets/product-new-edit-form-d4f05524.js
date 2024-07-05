import{F as i,j as e,ba as ge,aO as be,b5 as je,bb as ye,bc as fe,aw as re,aA as A,b2 as Se,ax as p,T as h,af as R,S as k,B as y,bd as Q,be as M,bf as ce,bg as B,al as L,ah as Ce,bh as Fe,ao as de,ap as c,aj as ke,bi as te,bj as ve,bk as ie}from"./index-38519fe3.js";import{c as Ae,a as f,b as X,d as Z,u as Be,R as ee,e as ne,f as E,F as we,g as Te,h as De}from"./form-provider-b975e104.js";import{o as Ie,L as Re}from"./yup-eff63963.js";import{C as O}from"./CardHeader-8626287e.js";let le=!1;const Ee=i.forwardRef(function(o,w){return le||(console.warn(["MUI: The Autocomplete component was moved from the lab to the core.","","You should use `import { Autocomplete } from '@mui/material'`","or `import Autocomplete from '@mui/material/Autocomplete'`"].join(`
`)),le=!0),e.jsx(ge,be({ref:w},o))}),Le=["Simple","Variable"],Ve=["Disposables","Vape Liquids","Salt Nicotine","Accessories",,"Vape Devices","Pod Systems","Nicotine Pouches","Pods & Coils","Batteries","Tanks","Others"],Ne=["New Collection","Limited Edition","Bestseller","Exclusive","Hot Deal","Trending Now","Seasonal Special","Eco-Friendly","On Sale","Clearance","Customer Favorite","Top Rated","Holiday Special","Gift Ideas","Must-Have","Limited Stock","Featured Product","Editor's Pick","Just Arrived","Back in Stock","Special Offer","Staff Picks","Flash Sale","Popular Choice","Best Value"],ze=["SMOK","Vaporesso","GeekVape","Voopoo","Innokin","Uwell","Aspire","Eleaf","Lost Vape","Joyetech","Wismec","Freemax","Suorin","iJoy","Rincoe","Augvape","Vandy Vape","OBS","Hellvape","Teslacigs","Artery","Dovpo","Vaptio","Kangertech","Digiflavor","Sigelei","Smoant","Pioneer4You","Vapor Storm","Hugo Vapor"],qe=["Bottle Size","Puffs","Flavour","Nicotine Strength","Color","Batteries"],v={bottleSize:[10,15,30,50,60,100,120].map(s=>`${s} ml`),puffs:[500,1e3,1500,2e3,2500,3e3,3500,4e3,4500,5e3,5500,6500,7e3,7500,8e3,8500,9e3,9500,1e4].map(s=>`${s} puffs`),flavour:["Strawberry","Blueberry","Raspberry","Watermelon","Apple","Peach","Pineapple","Grape","Mango","Kiwi","Cherry","Banana","Lemon","Lime","Orange","Mixed Berries","Menthol","Peppermint","Spearmint","Ice Menthol","Minty Menthol","Cool Mint","Traditional Tobacco","American Blend","Virginia Tobacco","Turkish Tobacco","Cuban Cigar","Pipe Tobacco","Vanilla Custard","Chocolate Cake","Caramel","Butterscotch","Cheesecake","Tiramisu","Maple Syrup","Cookies and Cream","Pudding","Ice Cream","Bubblegum","Cotton Candy","Gummy Bear","Candy Cane","Marshmallow","Rock Candy","Toffee","Coffee","Cappuccino","Espresso","Latte","Cola","Energy Drink","Mojito","Lemonade","Iced Tea","Smoothie","Creamy Vanilla","Strawberry Cream","Coconut Cream","Hazelnut Cream","Irish Cream","Sugar Cookie","Blueberry Muffin","Donut","Pancake","Waffle","Pie Crust","Sour Apple","Sour Watermelon","Sour Cherry","Sour Lemon","Almond","Hazelnut","Peanut Butter","Pistachio","Walnut","Cinnamon","Clove","Gingerbread","Green Tea","Chamomile","Lavender","Eucalyptus"],nicotineStrength:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50].map(s=>`${s} mg`),color:["Black","Silver","White","Blue","Red","Green","Pink","Purple","Gold","Rainbow/Multicolor","Gunmetal/Gray","Yellow","Orange","Brown","Clear/Transparent"],batteries:["Single","Dual","Built-in","Triple","Quad"]};function Ke({currentProduct:s}){const[o,w]=i.useState([]),U=je(),u=ye("up","md"),{enqueueSnackbar:G}=fe(),{user:m}=re(),T=Ae().shape({name:f().required("Name is required"),subDescription:f().required("Short description is required"),content:f(),images:X().min(1,"Image is required"),type:f(),category:f().required("Category is required"),tags:X(),SKU:f().required("SKU is required"),brand:f().required("brand is required"),attributes:X(),quantity:Z(),regularPrice:Z(),salePrice:Z().moreThan(0,"Price should not be AED 0.00")}),S=i.useMemo(()=>({id:(s==null?void 0:s.id)||"",name:(s==null?void 0:s.name)||"",subDescription:(s==null?void 0:s.subDescription)||"",content:(s==null?void 0:s.content)||"",images:(s==null?void 0:s.images)||[],type:(s==null?void 0:s.type)||"Simple",category:(s==null?void 0:s.category)||"Disposables",tags:(s==null?void 0:s.tags)||[],SKU:(s==null?void 0:s.SKU)||"",brand:(s==null?void 0:s.brand)||"SMOK",attributes:(s==null?void 0:s.attributes)||[],quantity:(s==null?void 0:s.quantity)||0,regularPrice:(s==null?void 0:s.regularPrice)||0,salePrice:(s==null?void 0:s.salePrice)||0}),[s]),[b,C]=i.useState({}),[K,V]=i.useState([]),N=Be({resolver:Ie(T),defaultValues:S}),{reset:F,watch:H,setValue:x,handleSubmit:$,formState:{isSubmitting:z}}=N,d=H(),j=i.useCallback(async()=>{const{data:{products:a}}=await A.get("/products",{params:{name:d.name}});w(a)},[d.name]);i.useEffect(()=>{j()},[d.name]),i.useEffect(()=>{s&&F(S)},[s,S,F]);const D=$(async a=>{console.log(a);try{s?await A.patch("products",{...a,username:m.displayName,userId:m.id,storeName:m.storeName}):await A.post("products",{...a,username:m.displayName,userId:m.id,storeName:m.storeName}),F(),G(s?"Update success!":"Create success!"),U.push(Se.dashboard.product.root)}catch(t){console.log(t)}}),_=i.useCallback(a=>{const t=d.images||[],l=a.map(n=>Object.assign(n,{preview:URL.createObjectURL(n)}));x("images",[...t,...l],{shouldValidate:!0})},[x,d.images]),W=i.useCallback(a=>{var l;const t=d.images&&((l=d.images)==null?void 0:l.filter(n=>n!==a));x("images",t)},[x,d.images]),Y=i.useCallback(()=>{x("images",[])},[x]),P=e.jsxs(e.Fragment,{children:[u&&e.jsxs(p,{md:4,children:[e.jsx(h,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(R,{children:[!u&&e.jsx(O,{title:"Details"}),e.jsxs(k,{spacing:3,sx:{p:3},children:[e.jsx(E,{name:"name",label:"Product Name"}),e.jsx(E,{name:"subDescription",label:"Sub Description",multiline:!0,rows:4}),e.jsxs(k,{spacing:1.5,children:[e.jsx(h,{variant:"subtitle2",children:"Content"}),e.jsx(Te,{simple:!0,name:"content"})]}),e.jsxs(k,{spacing:1.5,children:[e.jsx(h,{variant:"subtitle2",children:"Images"}),e.jsx(De,{multiple:!0,name:"images",maxSize:3145728,onDrop:_,onRemove:W,onRemoveAll:Y,onUpload:async a=>{try{const t=new FormData;d.images.forEach(n=>{t.append("images",n)});const{data:l}=await A.post("upload",t);x("images",l),alert("Image upload complete.")}catch{alert(" Image upload failed, try again.")}}})]})]})]})})]}),[r,g]=i.useState({name:"",show:!1}),I=e.jsxs(e.Fragment,{children:[u&&e.jsxs(p,{md:4,children:[e.jsx(h,{variant:"h6",sx:{mb:.5},children:"Key Properties"}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(R,{children:[!u&&e.jsx(O,{title:"Properties"}),e.jsx(k,{spacing:3,sx:{p:3},children:e.jsxs(y,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(ee,{native:!0,name:"type",label:"Product Type",InputLabelProps:{shrink:!0},children:Le.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsx(ee,{native:!0,name:"category",label:"Category",InputLabelProps:{shrink:!0},children:Ve.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsx(ne,{name:"tags",label:"Tags",placeholder:"+ Tags",multiple:!0,freeSolo:!0,options:Ne.map(a=>a),getOptionLabel:a=>a,renderOption:(a,t)=>i.createElement("li",{...a,key:t},t),renderTags:(a,t)=>a.map((l,n)=>i.createElement(Q,{...t({index:n}),key:l,label:l,size:"small",color:"info",variant:"soft"}))}),e.jsx(E,{name:"SKU",label:"Product SKU"}),e.jsx(ee,{native:!0,name:"brand",label:"Brand",InputLabelProps:{shrink:!0},children:ze.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsxs(y,{display:"flex",alignItems:"center",gap:1,children:[e.jsx(M,{sx:{width:190},label:"Is your brand missing? Click here to add it.",control:e.jsx(ce,{checked:r.show,onChange:a=>g(t=>({...t,show:a.target.checked}))})}),r.show&&e.jsxs(e.Fragment,{children:[e.jsx(B,{label:"Brand Name",style:{width:300},onChange:a=>g(t=>({...t,name:a.target.value})),value:r.name}),e.jsx(L,{variant:"contained",color:"success",onClick:()=>{r.name?alert("Your request to create a new brand is being processed. Please wait while we verify the brand."):alert("Please enter brand name")},children:"Add Brand"})]})]})]})})]})})]}),me=(a,t,l)=>{C(n=>({...n,[l]:t}))},pe=e.jsxs(e.Fragment,{children:[u&&e.jsxs(p,{md:4,children:[e.jsx(h,{variant:"h6",sx:{mb:.5},children:"Product Attributes"}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(R,{children:[!u&&e.jsx(O,{title:"Attributes"}),e.jsx(k,{spacing:3,sx:{p:3},children:e.jsxs(y,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(y,{sx:{gridColumn:"span 2 "},children:e.jsx(ne,{name:"attributes",label:"Attributes",placeholder:"+ Attributes",multiple:!0,options:qe.map(a=>a),getOptionLabel:a=>a,renderOption:(a,t)=>i.createElement("li",{...a,key:t},t),renderTags:(a,t)=>a.map((l,n)=>i.createElement(Q,{...t({index:n}),key:l,label:l,size:"small",color:"info",variant:"soft"}))})}),d.attributes.map(a=>e.jsx(y,{sx:{gridColumn:"span 1 "},children:e.jsx(Ee,{multiple:!0,freeSolo:!0,options:a==="Bottle Size"&&v.bottleSize||a==="Puffs"&&v.puffs||a==="Flavour"&&v.flavour||a==="Nicotine Strength"&&v.nicotineStrength||a==="Color"&&v.color||a==="Batteries"&&v.batteries||[],value:b[a],onChange:(t,l)=>{if(me(t,l,a),console.log(),l.length>=2){if(K.find(n=>n===a))return;V(n=>[...n,a])}else V(n=>n.filter(J=>J!==a))},renderInput:t=>e.jsx(B,{...t,label:a,placeholder:a}),renderTags:(t,l)=>t.map((n,J)=>i.createElement(Q,{...l({index:J}),key:n,label:n,size:"small",color:"info",variant:"soft"}))})},a))]})})]})})]}),ue=e.jsxs(e.Fragment,{children:[u&&e.jsxs(p,{md:4,children:[e.jsx(h,{variant:"h6",sx:{mb:.5},children:"Pricing"}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Price related inputs"})]}),e.jsx(p,{xs:12,md:12,children:e.jsxs(R,{children:[!u&&e.jsx(O,{title:"Pricing"}),e.jsxs(k,{spacing:3,sx:{p:3},children:[e.jsx(E,{name:"regularPrice",label:"Regular Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(te,{position:"start",children:e.jsx(y,{component:"span",sx:{color:"text.disabled"},children:"AED"})})}}),e.jsx(E,{name:"salePrice",label:"Sale Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(te,{position:"start",children:e.jsx(y,{component:"span",sx:{color:"text.disabled"},children:"AED"})})}})]})]})})]}),he=e.jsx(e.Fragment,{children:e.jsx(p,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:e.jsx(Re,{type:"submit",variant:"contained",size:"large",loading:z,children:s?"Save Changes":"Create Product"})})}),ae=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];let q=1,se=0;const xe=e.jsxs(e.Fragment,{children:[u&&e.jsx(p,{md:4,children:e.jsx(h,{variant:"h6",sx:{mb:.5},children:"Variation Table"})}),e.jsx(p,{xs:12,md:12,children:e.jsx(R,{children:e.jsxs(Ce,{children:[e.jsx(Fe,{children:e.jsxs(de,{children:[e.jsx(c,{children:"ID"}),e.jsx(c,{width:150,children:"SKU"}),e.jsx(c,{width:250,children:"Attributes"}),e.jsx(c,{width:150,children:"Track Order"}),e.jsx(c,{children:"Stock"}),e.jsx(c,{children:"Regular Price"}),e.jsx(c,{children:"Sales Price"}),e.jsx(c,{children:"Image"}),e.jsx(c,{width:150,children:"Add Product"})]})}),e.jsxs(ke,{children:[e.jsx(oe,{counter:q++,counter2:se++,skuAlpha:ae,va:"Parent",values:d,variables:b,disabled:!0},q),Object.keys(b).reduce((a,t)=>a.flatMap(l=>b[t].map(n=>`${l} - ${n}`)),[""]).map(a=>e.jsx(oe,{counter:q++,counter2:se++,skuAlpha:ae,va:a.slice(3),values:d,variables:b,disabled:!1},q))]})]})})})]});return e.jsx(we,{methods:N,onSubmit:D,children:e.jsxs(p,{container:!0,spacing:3,children:[P,I,pe,d.type==="Simple"&&ue,d.type==="Variable"&&xe,he]})})}function oe({counter:s,values:o,skuAlpha:w,counter2:U,va:u,variables:G,disabled:m}){const{user:T}=re(),S=o.SKU+"-"+w[U],b=o.name+" - "+u,[C,K]=i.useState(!0),[V,N]=i.useState("instock"),[F,H]=i.useState(null),[x,$]=i.useState(null),[z,d]=i.useState(null),[j,D]=i.useState("pending"),[_,W]=i.useState(null),Y=async r=>{try{const g=new FormData;g.append("images",r.target.files[0]);const{data:I}=await A.post("upload",g);W([I[0],...o.images])}catch{}},P=async()=>{if(m)return;const r=/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{2B55}\u{231A}-\u{231B}\u{23E9}-\u{23EC}\u{23F0}\u{23F3}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2B1B}-\u{2B1C}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2194}-\u{2199}\u{21A9}-\u{21AA}\u{2B06}\u{2B07}\u{2B1B}\u{2B1C}]/u,g=/\d{4,}/;if(r.test(o.subDescription)||r.test(o.content)){alert("Your content contain emojis, Please remove emojis");return}if(g.test(o.subDescription)||g.test(o.content)){alert("Your content contain continues 4 digit number, Please remove");return}if(j==="pending"){D("loading");try{await A.post("/products",{username:T.displayName,userId:T.id,storeName:T.storeName,name:b,subDescription:o.subDescription,content:o.content,images:_??o.images,type:o.type,category:o.category,tags:o.tags,parentSku:o.SKU,brand:o.brand,attributes:o.attributes,variables:G,SKU:S,track:C,quantity:z,regularPrice:F,salePrice:x}),D("success")}catch(I){console.log("Product Creation failed :"+I),D("failed")}}};return e.jsxs(de,{style:{backgroundColor:m&&"rgba(0,0,0,0.1)"},children:[e.jsx(c,{children:s}),e.jsx(c,{children:S}),e.jsx(c,{children:b}),e.jsx(c,{children:e.jsx(M,{label:"",control:e.jsx(ce,{checked:C,onChange:r=>K(r.target.checked),disabled:m})})}),e.jsxs(c,{children:[C&&e.jsx(B,{disabled:m,size:"small",label:"Quantity",type:"number",onChange:r=>d(+r.target.value||null),value:z}),!C&&e.jsxs(ve,{"aria-label":"Stock",name:"Stock",value:V,onChange:r=>N(r.target.value),children:[e.jsx(M,{value:"instock",control:e.jsx(ie,{}),label:"Instock"}),e.jsx(M,{value:"outstock",control:e.jsx(ie,{}),label:"Outstock"})]})]}),e.jsx(c,{children:e.jsx(B,{disabled:m,size:"small",label:"Price",type:"number",onChange:r=>H(+r.target.value||null),value:F})}),e.jsx(c,{children:e.jsx(B,{disabled:m,size:"small",label:"Price",type:"number",onChange:r=>$(+r.target.value||null),value:x})}),e.jsx(c,{children:e.jsx(B,{size:"small",label:"Image",type:"file",onChange:Y,disabled:m})}),e.jsxs(c,{children:[j==="pending"&&e.jsx(L,{color:"success",variant:"contained",size:"small",onClick:P,children:"Add Product"}),j==="loading"&&e.jsx(L,{color:"success",variant:"contained",size:"small",children:"Loading"}),j==="success"&&e.jsx(L,{color:"success",variant:"contained",size:"small",children:"Product Created"}),j==="failed"&&e.jsx(L,{color:"success",variant:"contained",size:"small",children:"Product creation failed"})]})]})}export{Ke as P};
