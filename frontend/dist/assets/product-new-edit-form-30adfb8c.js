import{j as e,aF as ae,T,c as w,r as p,ap as be,k as D,u as de,G as v,p as C,C as z,v as E,aG as M,aH as xe,aI as ge,aJ as je,_ as ue,aK as te,aj as Q,aL as fe,B as N,aM as ye,F as ve,ak as le,aN as Se,aO as O,aa as ke,aP as Ce,aQ as we,ab as re,ac as y,aR as I,aS as Ie,aT as P,ad as Ae,ai as qe,L as oe,af as Te,aU as Fe,aV as ee,am as Re}from"./index-bbe39c8b.js";import{F as A,R as me,b as J}from"./product-table-toolbar-7ad64930.js";import{C as L}from"./Checkbox-ae6700aa.js";import{b as he,c as f,a as Ue,T as De,d as Oe}from"./TableRow-6cf0ff97.js";import{C as ce}from"./CardHeader-9afb7b6c.js";import{A as Y}from"./Alert-f967853a.js";function Ne({values:a,products:i,setValue:r}){return e.jsx(ae,{value:a.name,onChange:(n,t)=>{if(t){const d=i.find(m=>m.name===t);d&&(r("images",d.images),r("name",d.name),r("category",d.category),r("brand",d.brand),r("type",d.type))}},name:"name",label:"Product Name",options:i.map(n=>n.name),getOptionLabel:n=>n,isOptionEqualToValue:(n,t)=>n===t.value,renderInput:n=>e.jsx(T,{...n,label:"Product Name",value:a.name,onChange:t=>r("name",t.target.value)}),renderOption:(n,t)=>e.jsxs(w,{component:"li",sx:{"& > img":{mr:2,flexShrink:0}},...n,children:[e.jsx("img",{loading:"lazy",width:"20",src:i.find(d=>d.name===t).images[0],alt:""}),t]}),freeSolo:!0})}function Ee({setValue:a,values:i}){const r=p.useCallback(d=>{const m=i.images||[],s=d.map(l=>Object.assign(l,{preview:URL.createObjectURL(l)}));a("images",[...m,...s],{shouldValidate:!0})},[a,i.images]),n=p.useCallback(d=>{var s;const m=i.images&&((s=i.images)==null?void 0:s.filter(l=>l!==d));a("images",m)},[a,i.images]),t=p.useCallback(()=>{a("images",[])},[a]);return e.jsx(be,{multiple:!0,name:"images",maxSize:3145728,onDrop:r,onRemove:n,onRemoveAll:t,onUpload:async d=>{try{const m=new FormData;i.images.forEach(l=>{m.append("images",l)});const{data:s}=await D.post("upload",m);a("images",s),alert("Image upload complete.")}catch{alert(" Image upload failed, try again.")}}})}function Ke({values:a,setValue:i}){const{user:r}=de(),[n,t]=p.useState({name:"",show:!1}),[d,m]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(v,{md:12,width:"100%",item:!0,children:[e.jsx(C,{variant:"h6",sx:{mb:.5},children:"Key Properties"}),e.jsx(C,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(v,{xs:12,md:12,width:"100%",item:!0,children:e.jsx(z,{children:e.jsx(E,{spacing:3,sx:{p:3},children:e.jsxs(w,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(M,{native:!0,name:"type",label:"Product Type",InputLabelProps:{shrink:!0},children:xe.map(s=>e.jsx("option",{value:s,children:s},s))}),e.jsx(M,{native:!0,name:"category",label:"Category",InputLabelProps:{shrink:!0},children:ge.map(s=>e.jsx("option",{value:s,children:s},s))}),e.jsx(je,{name:"tags",label:"Tags",placeholder:"+ Tags",multiple:!0,freeSolo:!0,options:ue.map(s=>s),getOptionLabel:s=>s,renderOption:(s,l)=>p.createElement("li",{...s,key:l},l),renderTags:(s,l)=>s.map((o,x)=>p.createElement(te,{...l({index:x}),key:o,label:o,size:"small",color:"info",variant:"soft"}))}),e.jsxs(w,{children:[e.jsx(Q,{name:"SKU",label:"Product SKU"}),e.jsx(A,{label:"Automatically generate SKUs",control:e.jsx(L,{checked:d,onChange:s=>{s.target.checked?a.name.replaceAll(" ","").trim().length>=8?(i("SKU",`${a.name.replaceAll(" ","").trim().slice(0,8)}-1`),m(!0)):(m(!1),alert("To automatically generate SKUs, ensure that the product name has at least 8 characters.")):(i("SKU",""),m(!1))}})})]}),!n.show&&e.jsx(M,{native:!0,name:"brand",label:"Brand",InputLabelProps:{shrink:!0},children:fe.map(s=>e.jsx("option",{value:s,children:s},s))}),e.jsxs(w,{display:"flex",alignItems:"center",gap:1,children:[e.jsx(A,{sx:{width:190},label:"Is your brand missing? Click here to add it.",control:e.jsx(L,{checked:n.show,onChange:s=>t(l=>({...l,show:s.target.checked}))})}),n.show&&e.jsxs(e.Fragment,{children:[e.jsx(T,{label:"Brand Name",style:{width:300},onChange:s=>t(l=>({...l,name:s.target.value})),value:n.name}),e.jsx(N,{variant:"contained",color:"success",onClick:async()=>{try{n.name?(await D.post("/notifications",{userId:r.id,role:"admin",title:"🚀 New Brand Approval Request! 🚀",message:`Exciting news! A new brand has been submitted for approval. Brand Name: ${n.name}. 🛍️`,type:"product"}),i("brand",n.name),i("status","In Revision"),alert("Your request to create a new brand is being processed. Please wait while we verify the brand. You can add products, but their status will be 'In Revision.' After reviewing, the products will go live.")):alert("Please enter brand name")}catch(s){console.log(s),alert("An error occurred while adding this brand.")}},children:"Add Brand"})]})]}),a.status!=="In Revision"&&e.jsx(M,{native:!0,name:"status",label:"status",InputLabelProps:{shrink:!0},children:ye.map(s=>e.jsx("option",{value:s,children:s},s))})]})})})})]})}function ze({values:a,setValue:i}){return console.log(a),e.jsxs(e.Fragment,{children:[e.jsxs(v,{md:4,width:"100%",item:!0,children:[e.jsx(C,{variant:"h6",sx:{mb:.5},children:"Pricing"}),e.jsx(C,{variant:"body2",sx:{color:"text.secondary"},children:"Price related inputs"})]}),e.jsx(v,{xs:12,md:12,width:"100%",item:!0,children:e.jsx(z,{children:e.jsxs(E,{spacing:3,sx:{p:3},children:[e.jsx(A,{label:"Track Stock",control:e.jsx(L,{defaultChecked:a.track,checked:a.track,onChange:r=>{i("track",r.target.checked),r.target.checked&&i("availability","In Stock")}})}),a.track&&e.jsx(T,{value:a.quantity,onChange:r=>{const n=Math.max(0,Number(r.target.value));i("quantity",n),i("availability","In Stock")},label:"Quantity",placeholder:"0.00",type:"number",inputProps:{min:0}}),!a.track&&e.jsx(ve,{children:e.jsxs(me,{value:a.availability,row:!0,onChange:r=>{i("availability",r.target.value),r.target.value==="In Stock"?i("quantity",100):i("quantity",0)},children:[e.jsx(A,{value:"In Stock",control:e.jsx(J,{}),label:"In Stock"}),e.jsx(A,{value:"Out Stock",control:e.jsx(J,{}),label:"Out Stock"})]})}),e.jsx(Q,{name:"regularPrice",label:"Regular Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(le,{position:"start",children:e.jsx(w,{component:"span",sx:{color:"text.disabled"},children:"AED"})})}}),e.jsx(Q,{name:"salePrice",label:"Sale Price",placeholder:"0.00",type:"number",InputLabelProps:{shrink:!0},InputProps:{startAdornment:e.jsx(le,{position:"start",children:e.jsx(w,{component:"span",sx:{color:"text.disabled"},children:"AED"})})}})]})})})]})}function Le({selectedAttributes:a=[],counter:i,skuAlpha:r,attributes:n,values:t,currentProduct:d,setValue:m}){const s=r[i]?`${t.SKU}-${r[i]}`:t.SKU,l=!!n&&Object.keys(n).map(b=>n[b]).join("-"),[o,x]=p.useState({track:!0,availability:"In Stock",quantity:null,regularPrice:null,salePrice:null,image:null,attributes:{}});p.useEffect(()=>{const b=t.variations.findIndex(h=>!!n&&Object.keys(n).every(u=>n[u]===h.attributes[u]));if(Object.keys(o.attributes).length<a.length){const h=t.variations[b];x(u=>({...u,...h,attributes:n}))}},[n]),p.useState("instock");const[g,F]=p.useState("pending"),K=b=>h=>{const u=h.target.type==="checkbox"?h.target.checked:h.target.value;x(S=>({...S,[b]:u}))},se=async b=>{try{const h=new FormData;h.append("images",b.target.files[0]);const{data:u}=await D.post("upload",h);x(S=>({...S,image:[u[0],...t.images]}))}catch(h){console.error("Image upload failed:",h)}},j=async()=>{let{track:b,quantity:h,regularPrice:u,salePrice:S}=o;if(S=Number(S),u=Number(u),h=Number(h),b&&!h)return alert("Quantity is required.");if(!u||!S)return alert("Sale Price and regular price are mandatory.");if(S>u)return alert("Sale price must be less than the regular price");if(g==="pending"){F("loading");try{if(!d)m("variations",[...t.variations,o]);else{const{attributes:q}=o;if(t.variations.some(R=>Object.keys(q).every(U=>R.attributes[U]===q[U]))){const R=[...t.variations],U=t.variations.findIndex(G=>Object.keys(q).every(H=>q[H]===G.attributes[H]));R[U]={...R[U],...o},m("variations",R)}else m("variations",[...t.variations,o])}F("success")}catch(q){console.error("Product creation failed:",q),F("failed")}}},W=()=>{switch(g){case"loading":return e.jsx(N,{color:"success",variant:"contained",size:"small",children:"Loading"});case"success":return d?e.jsx(N,{color:"success",variant:"contained",size:"small",children:"Product Updated"}):e.jsx(N,{color:"success",variant:"contained",size:"small",children:"Product Created"});case"failed":return e.jsx(N,{color:"error",variant:"contained",size:"small",children:"Product creation failed"});default:return e.jsx(N,{color:"success",variant:"contained",size:"small",onClick:j,children:d?"Save Changes":"Add Product"})}},{track:B,quantity:X,regularPrice:Z,salePrice:V,image:ie}=o;return e.jsxs(he,{children:[e.jsx(f,{children:i}),e.jsx(f,{children:s}),e.jsx(f,{children:l}),e.jsx(f,{children:e.jsx(A,{control:e.jsx(L,{checked:B,onChange:b=>x(h=>({...h,track:b.target.checked,availability:"In Stock"}))})})}),e.jsx(f,{width:150,children:B?e.jsx(T,{size:"small",label:"Quantity",type:"number",inputProps:{min:0},onChange:b=>x(h=>({...h,quantity:+b.target.value})),value:X||""}):e.jsxs(me,{"aria-label":"Stock",name:"Stock",value:o.availability,onChange:b=>x(h=>({...h,availability:b.target.value,quantity:b.target.value==="In Stock"?100:0})),children:[e.jsx(A,{value:"In Stock",control:e.jsx(J,{}),label:"In Stock"}),e.jsx(A,{value:"Out Stock",control:e.jsx(J,{}),label:"Out Stock"})]})}),e.jsx(f,{width:150,children:e.jsx(T,{size:"small",label:"Price",type:"number",inputProps:{min:0},onChange:K("regularPrice"),value:Z||""})}),e.jsx(f,{width:150,children:e.jsx(T,{size:"small",label:"Sale Price",type:"number",inputProps:{min:0},onChange:K("salePrice"),value:V||""})}),e.jsx(f,{width:150,children:e.jsx("input",{type:"file",onChange:se,style:{width:"150px"}})}),e.jsx(f,{children:W()})]})}function Be(){return e.jsx(Ue,{children:e.jsxs(he,{children:[e.jsx(f,{children:"ID"}),e.jsx(f,{width:150,children:"SKU"}),e.jsx(f,{width:250,children:"Attributes"}),e.jsx(f,{width:150,children:"Track Stock"}),e.jsx(f,{children:"Stock"}),e.jsx(f,{children:"Regular Price"}),e.jsx(f,{children:"Sales Price"}),e.jsx(f,{children:"Image"}),e.jsx(f,{width:200,children:"Add Product"})]})})}function Ge({setSelectedAttributes:a,selectedAttributes:i,values:r,setValue:n}){return e.jsx(ae,{onChange:(t,d)=>{a(d)},value:i,name:"attributes",label:"Attributes",placeholder:"+ Attributes",multiple:!0,options:Se,getOptionLabel:t=>t,renderOption:(t,d)=>p.createElement("li",{...t,key:d},d),renderTags:(t,d)=>t.map((m,s)=>p.createElement(te,{...d({index:s}),key:m,label:m,size:"small",color:"info",variant:"soft"})),renderInput:t=>e.jsx(T,{...t,label:"Attributes",placeholder:"+ Attributes"})})}function He({currentProduct:a,values:i,setValue:r,setVariation:n,e:t,savedAttibutes:d,variation:m=[]}){var s;return e.jsxs(w,{sx:{gridColumn:"span 1 "},children:[e.jsx(ae,{multiple:!0,freeSolo:!0,options:[...t==="bottleSize"?O.bottleSize:[],...t==="puffs"?O.puffs:[],...t==="flavour"?O.flavour:[],...t==="nicotineStrength"?O.nicotineStrength:[],...t==="color"?O.color:[],...t==="batteries"?O.batteries:[],...d.filter(l=>l.attribute===t).map(l=>l.value)],value:i.attributes[t]||[],onChange:(l,o)=>{let x={...i.attributes};if(i.type==="Simple"&&t!=="flavour"){if(o.length>1){const g=[o[o.length-1]];x={...i.attributes,[t]:g}}else x={...i.attributes,[t]:o};o.length===0&&delete x[t],r("attributes",x)}else{if(m.find(F=>F===t)&&o.length===1)return alert('Please uncheck "Use this attribute to create Variations" before deleting this attribute.');const g={...i.attributes,[t]:o};o.length===0&&delete g[t],r("attributes",g)}},renderInput:l=>e.jsx(T,{...l,label:t,placeholder:t}),renderTags:(l,o)=>l.map((x,g)=>p.createElement(te,{...o({index:g}),key:x,label:x,size:"small",color:"info",variant:"soft"}))}),i.type==="Variable"&&((s=i.attributes[t])==null?void 0:s.length)>1&&e.jsx(A,{label:"Use this attribute to create Variations",control:e.jsx(L,{defaultChecked:m.find(l=>l===t),onChange:l=>{if(a)if(confirm("Changing the variation of this product will reset all current variations, and you'll have to start over from the beginning. Do you wish to proceed?"))r("variations",[]);else return;l.target.checked?n(o=>[...new Set([...o,t])]):n(o=>[...new Set(o.filter(x=>x!==t))])}})})]},t)}function We({currentProduct:a}){const i=ke(),r=Ce("up","md"),{enqueueSnackbar:n}=we(),{user:t}=de(),d=re().shape({name:y().required("Name is required"),subDescription:y().required("Short description is required").test("not-four-digits","Your content contain continues 7 digit number, Please remove",c=>!/\d{7,}/.test(c)).test("no-at-symbol",'Your content contains the "@" symbol. Please remove it.',c=>!/@/.test(c)),content:y().test("not-four-digits","Your content contain continues 7 digit number, Please remove",c=>!/\d{7,}/.test(c)).test("no-at-symbol",'Your content contains the "@" symbol. Please remove it.',c=>!/@/.test(c)),images:I().min(1,"Image is required"),type:y(),category:y().required("Category is required"),tags:I(),SKU:y().required("SKU is required"),brand:y().required("brand is required"),status:y().required("brand is required"),attributes:re().shape({bottleSize:I().of(y()).optional(),puffs:I().of(y()).optional(),flavour:I().of(y()).optional(),nicotineStrength:I().of(y()).optional(),color:I().of(y()).optional(),batteries:I().of(y()).optional()}),track:Ie(),availability:y(),quantity:P(),regularPrice:P(),salePrice:P(),variations:I()}),[m,s]=p.useState({id:"",name:"",subDescription:"",content:"",images:[],type:"Simple",category:"Disposables",tags:[],SKU:"",brand:"SMOK",status:"Published",attributes:{},track:!0,availability:"In Stock",quantity:0,regularPrice:100,salePrice:0,variations:[]});p.useEffect(()=>{s({id:(a==null?void 0:a.id)||"",name:(a==null?void 0:a.name)||"",subDescription:(a==null?void 0:a.subDescription)||"",content:(a==null?void 0:a.content)||"",images:(a==null?void 0:a.images)||[],type:(a==null?void 0:a.type)||"Simple",category:(a==null?void 0:a.category)||"Disposables",tags:(a==null?void 0:a.tags)||[],SKU:(a==null?void 0:a.SKU)||"",brand:(a==null?void 0:a.brand)||"SMOK",status:(a==null?void 0:a.status)||"Published",attributes:(a==null?void 0:a.attributes)||{},track:a==null?void 0:a.track,availability:(a==null?void 0:a.availability)||"In Stock",quantity:(a==null?void 0:a.quantity)||0,regularPrice:(a==null?void 0:a.regularPrice)||100,salePrice:(a==null?void 0:a.salePrice)||0,variations:(a==null?void 0:a.variations)||[]})},[a]);const l=Ae({resolver:Re(d),defaultValues:m}),{reset:o,watch:x,setValue:g,handleSubmit:F,formState:{isSubmitting:K,isValid:se}}=l,j=x(),[W,B]=p.useState([]);p.useEffect(()=>{D.get("/attributes").then(c=>{B(c.data)})},[]);const[X,Z]=p.useState([]),V=p.useCallback(async()=>{const{data:c}=await D.get("/products",{params:{name:j.name}});Z(c.products.filter(k=>!k.name.includes("-")))},[j.name]);p.useEffect(()=>{V()},[j.name]),p.useEffect(()=>{a&&o(m)},[a,m,o]);const ie=F(async c=>{try{if(c.type==="Simple"){if(!c.salePrice||!c.regularPrice){alert("Sale Price and regular price are mandatory");return}else if(c.salePrice>c.regularPrice){alert("Sale price must be less than the regular price");return}}a?await D.patch("products",{...c,username:t.displayName,userId:t.id,storeName:t.storeName}):await D.post("products",{...c,username:t.displayName,userId:t.id,storeName:t.storeName}),o(),n(a?"Update success!":"Create success!"),i.push(qe.dashboard.product.root)}catch(k){console.log(k)}}),[b,h]=p.useState([]),[u,S]=p.useState([]);p.useEffect(()=>{var c;if(a){const{attributes:k,variations:$,type:_}=a;k&&h(Object.keys(k)),_==="Variable"&&$.length&&S(Object.keys((c=$[0])==null?void 0:c.attributes))}},[a]);const q=e.jsxs(e.Fragment,{children:[r&&e.jsxs(v,{md:4,item:!0,children:[e.jsx(C,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(C,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(v,{xs:12,md:12,item:!0,children:e.jsxs(z,{children:[!r&&e.jsx(ce,{title:"Details"}),e.jsxs(E,{spacing:3,sx:{p:3},children:[e.jsx(Ne,{products:X,setValue:g,values:j}),e.jsx(Y,{severity:"info",children:"Please do not include emails, phone numbers, or emojis in the sub-description and content. Products containing these will not be accepted."}),e.jsx(Q,{name:"subDescription",label:"Sub Description",multiline:!0,rows:4}),e.jsxs(E,{spacing:1.5,children:[e.jsx(C,{variant:"subtitle2",children:"Content"}),e.jsx(Fe,{simple:!0,name:"content"})]}),e.jsx(Y,{severity:"info",children:"Uploading at least one image is required."}),e.jsxs(E,{spacing:1.5,children:[e.jsx(C,{variant:"subtitle2",children:"Images"}),e.jsx(Ee,{values:j,setValue:g})]})]})]})})]}),ne=e.jsxs(e.Fragment,{children:[r&&e.jsxs(v,{md:4,item:!0,children:[e.jsx(C,{variant:"h6",sx:{mb:.5},children:"Product Attributes"}),e.jsx(C,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(v,{xs:12,md:12,item:!0,children:e.jsxs(z,{children:[!r&&e.jsx(ce,{title:"Attributes"}),e.jsx(E,{spacing:3,sx:{p:3},children:e.jsxs(w,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(w,{sx:{gridColumn:"span 2 "},children:j.type==="Variable"&&e.jsx(Y,{severity:"info",children:"Please choose at least one attribute."})}),e.jsx(w,{sx:{gridColumn:"span 2 "},children:e.jsx(Ge,{selectedAttributes:b,setSelectedAttributes:h,setValue:g,values:j})}),j.type==="Variable"&&!!b.length&&e.jsx(w,{sx:{gridColumn:"span 2 "},children:e.jsx(Y,{severity:"info",children:"Please select at least two variations from the list below to enable the 'Create Variations' option."})}),b.map(c=>e.jsx(He,{currentProduct:a,setValue:g,setVariation:S,variation:u,values:j,e:c,savedAttibutes:W},c))]})})]})})]}),R=e.jsxs(v,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},gap:2.5,item:!0,children:[e.jsx(oe,{type:"submit",variant:"contained",size:"large",loading:K,children:a?"Save Changes":"Create Product"}),j.status!=="In Revision"&&e.jsx(oe,{onClick:()=>{g("status","Draft")},type:"submit",variant:"contained",size:"large",loading:K,children:"Save as Draft"})]}),U=[...ee,...ee.slice(1).flatMap(c=>ee.slice(1).map(k=>c+k))];let G=1;const H=e.jsxs(e.Fragment,{children:[r&&e.jsx(v,{md:4,item:!0,children:e.jsx(C,{variant:"h6",sx:{mb:.5},children:"Variation Table"})}),e.jsx(v,{xs:12,md:12,item:!0,children:e.jsx(z,{children:e.jsxs(De,{children:[e.jsx(Be,{}),e.jsx(Oe,{children:u==null?void 0:u.reduce((c,k)=>c.flatMap($=>{var _;return(_=j.attributes[k])==null?void 0:_.map(pe=>({...$,[k]:pe}))}),[{}]).map(c=>e.jsx(Le,{selectedAttributes:b,counter:G++,skuAlpha:U,attributes:c,values:j,currentProduct:a,setValue:g},G))})]})})})]});return e.jsx(Te,{methods:l,onSubmit:ie,children:e.jsxs(v,{container:!0,spacing:3,children:[q,e.jsx(Ke,{values:j,setValue:g}),ne,j.type==="Simple"&&e.jsx(ze,{values:j,setValue:g}),j.type==="Variable"&&H,R]})})}export{We as P};
