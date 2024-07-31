import{H as n,aF as J,j as e,B as m,au as k,S as o,bl as K,b8 as X,dl as Y,bU as Z,ay as ee,a$ as A,a as I,ao as T,T as x,am as q,b as te,ap as se}from"./index-c6e15d29.js";import{F as ae}from"./form-provider-dfd51611.js";import{p as re}from"./product-details-description-ae602495.js";import{R as ie}from"./Rating-943ef270.js";function me({cart:ne,product:D,onAddCart:h,onGotoStep:oe,disabledActions:le,setProduct:F,...R}){const[d,p]=n.useState(1),g=J(),{id:$,name:r,regularPrice:E,quantity:i,salePrice:u,totalRatings:L,totalReviews:M,images:O,userId:b,type:y,productGroup:j,variables:f,subDescription:v}=D,[w,Q]=n.useState([]),V=async()=>{if(y==="Variable"&&j==="parent"){const{data:s}=await te.get("/products",{params:{perPage:2e3,name:r}});Q(s.products)}};n.useEffect(()=>{V()},[]);const B=e.jsxs(m,{sx:{typography:"h5"},children:[e.jsx(m,{component:"span",sx:{color:"text.disabled",textDecoration:"line-through",mr:.5},children:k(E)}),k(u)]}),N=e.jsxs(o,{direction:"row",children:[e.jsx(x,{variant:"subtitle2",sx:{flexGrow:1},children:"Quantity"}),e.jsx(o,{spacing:1,children:e.jsxs(x,{variant:"caption",component:"div",sx:{textAlign:"right"},children:["Available: ",i||100]})})]}),z=e.jsxs(o,{direction:"row",spacing:2,children:[e.jsx(A,{sx:{width:{sm:"100%",md:"50%"}},label:"Quantity",type:"number",inputProps:{min:1,max:i??100},onChange:s=>{p(a=>{const{value:t}=s.target;return t<=0?1:i?Math.min(i,t):Math.min(t,100)})},value:d}),e.jsx(I,{fullWidth:!0,size:"large",color:"warning",variant:"contained",startIcon:e.jsx(se,{icon:"solar:cart-plus-bold",width:24}),onClick:()=>{h({id:$,name:r,price:u,images:O,subTotal:u,userId:b,quantity:d,available:i}),g(T.product.checkout)},sx:{whiteSpace:"nowrap"},children:"Add to Cart"})]}),G=!!v&&re(v),_=e.jsxs(o,{direction:"row",alignItems:"center",sx:{color:"text.disabled",typography:"body2"},children:[e.jsx(ie,{size:"small",value:L,precision:.1,readOnly:!0,sx:{mr:1}}),`(${K(M)} reviews)`]}),[l,H]=n.useState({}),[P,S]=n.useState("");n.useEffect(()=>{S("");let s=r==null?void 0:r.split(" -")[0];Object.keys(l).map(t=>s=`${s} - ${l[t]}`);const a=w.find(t=>t.name.toLowerCase().includes(s.toLowerCase()));a&&F(t=>({...t,name:a.name,images:a.images,quantity:a.quantity,salePrice:a.salePrice,regularPrice:a.regularPrice}))},[l]);const U=e.jsxs(m,{display:"flex",flexDirection:"column",gap:"10px",children:[Object.keys(f).map((s,a)=>e.jsxs(X,{sx:{width:{sm:"100%",md:"50%"}},size:"small",children:[e.jsx(Y,{id:"demo-simple-select-label",children:s}),e.jsx(Z,{label:s,onChange:t=>{p(1),H(c=>({...c,[s]:t.target.value}))},children:f[s].map((t,c)=>e.jsx(ee,{value:t,children:t},c))},a)]},a)),e.jsx(A,{sx:{width:{sm:"100%",md:"50%"}},label:"Quantity",type:"number",inputProps:{min:1,max:i??100},onChange:s=>{p(a=>{const{value:t}=s.target;return t<=0?1:i?Math.min(i,t):Math.min(t,100)})},value:d}),e.jsx(I,{sx:{width:{sm:"100%",md:"50%"}},variant:"contained",color:"success",disabled:!r.split("-")[1],onClick:()=>{let s=r==null?void 0:r.split(" -")[0];Object.keys(l).map(t=>s=`${s} - ${l[t]}`);const a=w.find(t=>t.name.toLowerCase().includes(s.toLowerCase()));if(a){const{id:t,name:c,salePrice:C,images:W}=a;h({id:t,name:c,price:C,images:W,subTotal:C,userId:b,quantity:d,available:i}),g(T.product.checkout)}else S("Out of stock")},children:"Buy"}),!!P&&e.jsx("p",{style:{color:"#F00A"},children:P})]});return e.jsx(ae,{children:e.jsxs(o,{spacing:3,sx:{pt:3},...R,children:[e.jsxs(o,{spacing:2,alignItems:"flex-start",children:[e.jsx(x,{variant:"h5",children:r}),_,u!==null&&B,G]}),e.jsx(q,{sx:{borderStyle:"dashed"}}),N,e.jsx(q,{sx:{borderStyle:"dashed"}}),y==="Variable"&&j==="parent"?U:z]})})}export{me as P};
