import{bg as G,bh as U,bi as N,bj as W,bk as I,bl as $,bm as T,bn as z,bo as H,ae as r,aE as V,aG as l,aq as m,aC as x,D as y,aV as J,bp as f,bq as Y,br as e,bs as n,bt as b,bu as q,bv as D,aw as C,bw as K,ac as X,b7 as Z}from"./index-1a7acf6a.js";import{P as Q,H as rr,C as sr,a as er,b as nr,c as ir}from"./product-details-description-e94fd370.js";import{_ as or}from"./_baseEach-3199beb1.js";import{P as ar,a as tr,b as cr,c as lr,d as xr}from"./_product-fc4b357e.js";import{u as dr}from"./use-checkout-57faf195.js";import"./axios-abfd7ba7.js";import"./confirm-dialog-66591d64.js";import"./color-picker-150a21b1.js";import"./Fab-382b22fa.js";import"./Slider-4cd88a4a.js";import"./DialogTitle-94bb0998.js";import"./DialogContent-2f3858c4.js";import"./lightbox-22b81292.js";import"./carousel-arrow-index-6ab30e75.js";var jr=or,pr=G;function hr(s,o){var i=-1,t=pr(s)?Array(s.length):[];return jr(s,function(c,a,d){t[++i]=o(c,a,d)}),t}var mr=hr;function ur(s,o){var i=s.length;for(s.sort(o);i--;)s[i]=s[i].value;return s}var yr=ur,A=U;function fr(s,o){if(s!==o){var i=s!==void 0,t=s===null,c=s===s,a=A(s),d=o!==void 0,u=o===null,j=o===o,p=A(o);if(!u&&!p&&!a&&s>o||a&&d&&j&&!u&&!p||t&&d&&j||!i&&j||!c)return 1;if(!t&&!a&&!p&&s<o||p&&i&&c&&!t&&!a||u&&i&&c||!d&&c||!j)return-1}return 0}var br=fr,gr=br;function wr(s,o,i){for(var t=-1,c=s.criteria,a=o.criteria,d=c.length,u=i.length;++t<d;){var j=gr(c[t],a[t]);if(j){if(t>=u)return j;var p=i[t];return j*(p=="desc"?-1:1)}}return s.index-o.index}var Sr=wr,E=N,Cr=I,Or=z,Pr=mr,Er=yr,vr=$,kr=Sr,_r=W,Ar=T;function Rr(s,o,i){o.length?o=E(o,function(a){return Ar(a)?function(d){return Cr(d,a.length===1?a[0]:a)}:a}):o=[_r];var t=-1;o=E(o,vr(Or));var c=Pr(s,function(a,d,u){var j=E(o,function(p){return p(a)});return{criteria:j,index:++t,value:a}});return Er(c,function(a,d){return kr(a,d,i)})}var Tr=Rr,Vr=Tr,R=T;function Fr(s,o,i,t){return s==null?[]:(R(o)||(o=o==null?[]:[o]),i=t?void 0:i,R(i)||(i=i==null?[]:[i]),Vr(s,o,i))}var Lr=Fr;const O=H(Lr);function Br(){return r.jsx(V,{sx:{py:{xs:1.5,md:3}},children:r.jsxs(l,{container:!0,justifyContent:"center",spacing:2,children:[r.jsx(l,{xs:12,sm:12,md:5,lg:2.5,sx:{backgroundColor:"common.white",boxShadow:15,mx:2,mb:5,py:2,borderRadius:2},children:r.jsxs(l,{container:!0,justifyContent:"center",alignItems:"center",sx:{height:"100%"},children:[r.jsx(l,{xs:3,children:r.jsx(m,{sx:{pr:1,pt:1},children:r.jsx(x,{icon:"carbon:delivery",width:40,color:"text.secondary"})})}),r.jsxs(l,{xs:10,children:[r.jsx(m,{sx:{fontWeight:"bold",color:"text.primary",fontSize:20},children:"Fast Delivery"}),r.jsx(m,{sx:{color:"text.secondary"},children:"Start from $10"})]})]})}),r.jsx(l,{xs:12,sm:12,md:5,lg:2.5,sx:{backgroundColor:"common.white",boxShadow:15,mx:2,mb:5,borderRadius:2},children:r.jsxs(l,{container:!0,justifyContent:"center",alignItems:"center",sx:{height:"100%"},children:[r.jsx(l,{xs:2,children:r.jsx(m,{sx:{pr:1},children:r.jsx(x,{icon:"carbon:piggy-bank",width:50,color:"text.secondary"})})}),r.jsxs(l,{xs:10,children:[r.jsx(m,{sx:{fontWeight:"bold",color:"text.primary",fontSize:20},children:"Money Guarantee"}),r.jsx(m,{sx:{color:"text.secondary"},children:"7 Days Back"})]})]})}),r.jsx(l,{xs:12,sm:12,md:5,lg:2.5,sx:{backgroundColor:"common.white",boxShadow:15,mx:2,mb:5,borderRadius:2},children:r.jsxs(l,{container:!0,justifyContent:"center",alignItems:"center",sx:{height:"100%"},children:[r.jsx(l,{xs:3,children:r.jsx(m,{sx:{pr:2,pt:1},children:r.jsx(x,{icon:"emojione-monotone:stopwatch",width:40,color:"text.secondary"})})}),r.jsxs(l,{xs:10,children:[r.jsx(m,{sx:{fontWeight:"bold",color:"text.primary",fontSize:20},children:"365 Days"}),r.jsx(m,{sx:{color:"text.secondary"},children:"For free return"})]})]})}),r.jsx(l,{xs:12,sm:12,md:5,lg:2.5,sx:{backgroundColor:"common.white",boxShadow:15,mx:2,mb:5,borderRadius:2},children:r.jsxs(l,{container:!0,justifyContent:"center",alignItems:"center",sx:{height:"100%"},children:[r.jsx(l,{xs:3,children:r.jsx(m,{sx:{pr:2,pt:1},children:r.jsx(x,{icon:"iconoir:wallet",width:40,color:"text.secondary"})})}),r.jsxs(l,{xs:10,children:[r.jsx(m,{sx:{fontWeight:"bold",color:"text.primary",fontSize:20},children:"Payment"}),r.jsx(m,{sx:{color:"text.secondary"},children:"Secure system"})]})]})})]})})}function Mr(){const[s,o]=y.useState(!0),i=t=>(c,a)=>{o(t===s?!1:t)};return r.jsx(l,{container:!0,width:"250px",children:r.jsx(J,{sx:{width:1},children:r.jsxs(f,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:r.jsx(Y,{component:"div",id:"nested-list-subheader",sx:{fontWeight:"bold",color:"text.secondary",fontSize:20},children:"Top Categories"}),sx:{color:"text.secondary"},children:[r.jsxs(e,{onClick:i("panel1"),children:[r.jsx(n,{primary:"VAPE DEVICES"}),s==="panel1"?r.jsx(x,{icon:"eva:arrow-ios-upward-fill"}):r.jsx(x,{icon:"eva:arrow-ios-downward-fill"})]}),r.jsx(b,{in:s==="panel1",unmountOnExit:!0,children:r.jsxs(f,{component:"div",disablePadding:!0,sx:{pl:2},children:[r.jsx(e,{children:r.jsx(n,{primary:"SMOK"})}),r.jsx(e,{children:r.jsx(n,{primary:"Vaporesso"})}),r.jsx(e,{children:r.jsx(n,{primary:"Uwell"})}),r.jsx(e,{children:r.jsx(n,{primary:"Innokin"})}),r.jsx(e,{children:r.jsx(n,{primary:"Voopoo"})}),r.jsx(e,{children:r.jsx(n,{primary:"Geek Vape"})}),r.jsx(e,{children:r.jsx(n,{primary:"Show All Vape Devices"})})]})}),r.jsxs(e,{onClick:i("panel2"),children:[r.jsx(n,{primary:"VAPE JUICE"}),s==="panel2"?r.jsx(x,{icon:"eva:arrow-ios-upward-fill"}):r.jsx(x,{icon:"eva:arrow-ios-downward-fill"})]}),r.jsx(b,{in:s==="panel2",unmountOnExit:!0,children:r.jsxs(f,{component:"div",disablePadding:!0,sx:{pl:2},children:[r.jsx(e,{children:r.jsx(n,{primary:"VGOD"})}),r.jsx(e,{children:r.jsx(n,{primary:"Nasty"})}),r.jsx(e,{children:r.jsx(n,{primary:"Ruthless"})}),r.jsx(e,{children:r.jsx(n,{primary:"BLVK Unicorn"})}),r.jsx(e,{children:r.jsx(n,{primary:"Vampire Vape"})}),r.jsx(e,{children:r.jsx(n,{primary:"Dinner Lady"})}),r.jsx(e,{children:r.jsx(n,{primary:"Zeus Juice"})}),r.jsx(e,{children:r.jsx(n,{primary:"Show All Vape Juice"})})]})}),r.jsxs(e,{onClick:i("panel3"),children:[r.jsx(n,{primary:"SALT NIC"}),s==="panel3"?r.jsx(x,{icon:"eva:arrow-ios-upward-fill"}):r.jsx(x,{icon:"eva:arrow-ios-downward-fill"})]}),r.jsx(b,{in:s==="panel3",unmountOnExit:!0,children:r.jsxs(f,{component:"div",disablePadding:!0,sx:{pl:2},children:[r.jsx(e,{children:r.jsx(n,{primary:"Cambridge Labs"})}),r.jsx(e,{children:r.jsx(n,{primary:"VGOD"})}),r.jsx(e,{children:r.jsx(n,{primary:"Nasty"})}),r.jsx(e,{children:r.jsx(n,{primary:"eCigara"})}),r.jsx(e,{children:r.jsx(n,{primary:"Core"})}),r.jsx(e,{children:r.jsx(n,{primary:"Nerd"})}),r.jsx(e,{children:r.jsx(n,{primary:"BLVK Unicorn"})}),r.jsx(e,{children:r.jsx(n,{primary:"Show All Salt Nic"})})]})}),r.jsxs(e,{onClick:i("panel4"),children:[r.jsx(n,{primary:"POD SYSTEMS"}),s==="panel4"?r.jsx(x,{icon:"eva:arrow-ios-upward-fill"}):r.jsx(x,{icon:"eva:arrow-ios-downward-fill"})]}),r.jsx(b,{in:s==="panel4",unmountOnExit:!0,children:r.jsxs(f,{component:"div",disablePadding:!0,sx:{pl:2},children:[r.jsx(e,{children:r.jsx(n,{primary:"Juul"})}),r.jsx(e,{children:r.jsx(n,{primary:"MYLE"})}),r.jsx(e,{children:r.jsx(n,{primary:"Relx"})}),r.jsx(e,{children:r.jsx(n,{primary:"Show All POD Systems"})})]})}),r.jsxs(e,{onClick:i("panel5"),children:[r.jsx(n,{primary:"DISPOSABLES"}),s==="panel5"?r.jsx(x,{icon:"eva:arrow-ios-upward-fill"}):r.jsx(x,{icon:"eva:arrow-ios-downward-fill"})]}),r.jsx(b,{in:s==="panel5",unmountOnExit:!0,children:r.jsxs(f,{component:"div",disablePadding:!0,sx:{pl:2},children:[r.jsx(e,{children:r.jsx(n,{primary:"Youto"})}),r.jsx(e,{children:r.jsx(n,{primary:"Tugboat"})}),r.jsx(e,{children:r.jsx(n,{primary:"XTRA"})}),r.jsx(e,{children:r.jsx(n,{primary:"Esco Bars"})}),r.jsx(e,{children:r.jsx(n,{primary:"VGOD"})}),r.jsx(e,{children:r.jsx(n,{primary:"VICIG"})}),r.jsx(e,{children:r.jsx(n,{primary:"Vudu"})}),r.jsx(e,{children:r.jsx(n,{primary:"Show All Disposables"})})]})}),r.jsxs(e,{onClick:i("panel6"),children:[r.jsx(n,{primary:"MYLE"}),s==="panel6"?r.jsx(x,{icon:"eva:arrow-ios-upward-fill"}):r.jsx(x,{icon:"eva:arrow-ios-downward-fill"})]}),r.jsx(b,{in:s==="panel6",unmountOnExit:!0,children:r.jsxs(f,{component:"div",disablePadding:!0,sx:{pl:2},children:[r.jsx(e,{children:r.jsx(n,{primary:"NEW Myle V.4"})}),r.jsx(e,{children:r.jsx(n,{primary:"Myle V.1"})}),r.jsx(e,{children:r.jsx(n,{primary:"Myle Disposables"})})]})}),r.jsx(e,{children:r.jsx(n,{primary:"JUUL"})}),r.jsxs(e,{onClick:i("panel7"),children:[r.jsx(n,{primary:"ACCESSORIES"}),s==="panel7"?r.jsx(x,{icon:"eva:arrow-ios-upward-fill"}):r.jsx(x,{icon:"eva:arrow-ios-downward-fill"})]}),r.jsx(b,{in:s==="panel7",unmountOnExit:!0,children:r.jsxs(f,{component:"div",disablePadding:!0,sx:{pl:2},children:[r.jsx(e,{children:r.jsx(n,{primary:"Colls & Pods"})}),r.jsx(e,{children:r.jsx(n,{primary:"Tanks, Glass & Tips"})}),r.jsx(e,{children:r.jsx(n,{primary:"Batteries and Lanyards"})})]})}),r.jsx(e,{children:r.jsx(n,{primary:"Sale"})}),r.jsx(e,{children:r.jsx(n,{primary:"Delivery Info"})})]})})})}const v={gender:[],colors:[],rating:"",category:"all",priceRange:[0,200]};function Gr(){const{checkout:s}=dr(),o=q(),[i,t]=y.useState("featured"),[c,a]=y.useState(v),[d,u]=y.useState({}),[j,p]=y.useState(""),h=async()=>{try{const{data:{products:S,count:_}}=await K.get("products",{params:{name:j,sortBy:i}});u(S)}catch{alert("error Occure")}};y.useEffect(()=>{h()},[i,j]);const g=y.useCallback((S,_)=>{a(M=>({...M,[S]:_}))},[]),w=Ur({inputData:d,filters:c,sortBy:i}),P=!D(v,c),F=y.useCallback(S=>{t(S)},[]),k=y.useCallback(()=>{a(v)},[]),L=r.jsxs(C,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[r.jsx(m,{sx:{maxWidth:"275px",width:"100%"}}),r.jsx(X,{variant:"h4",children:" Shop "}),r.jsxs(C,{direction:"row",spacing:1,flexShrink:0,children:[r.jsx(nr,{open:o.value,onOpen:o.onTrue,onClose:o.onFalse,filters:c,onFilters:g,canReset:P,onResetFilters:k,colorOptions:ar,ratingOptions:tr,genderOptions:cr,categoryOptions:["all",...lr]}),r.jsx(ir,{sort:i,onSort:F,sortOptions:xr})]})]}),B=r.jsx(Q,{filters:c,onFilters:g,canReset:P,onResetFilters:k,results:w.length});return r.jsxs(V,{maxWidth:!1,sx:{mb:15},children:[r.jsx(rr,{setName:p,name:j,fetchProduct:h}),r.jsx(Br,{}),r.jsx(sr,{totalItems:s.totalItems}),r.jsxs(C,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[L,P&&B]}),r.jsxs(C,{direction:"row",children:[r.jsx(Mr,{}),r.jsx(er,{products:w,loading:!1})]})]})}function Ur({inputData:s,filters:o,sortBy:i}){const{gender:t,category:c,colors:a,priceRange:d,rating:u}=o,j=d[0],p=d[1];return i==="featured"&&(s=O(s,["totalSold"],["desc"])),i==="newest"&&(s=O(s,["createdAt"],["desc"])),i==="priceDesc"&&(s=O(s,["price"],["desc"])),i==="priceAsc"&&(s=O(s,["price"],["asc"])),t.length&&(s=s.filter(h=>t.includes(h.gender))),c!=="all"&&(s=s.filter(h=>h.category===c)),a.length&&(s=s.filter(h=>h.colors.some(g=>a.includes(g)))),(j!==0||p!==200)&&(s=s.filter(h=>h.price>=j&&h.price<=p)),u&&(s=s.filter(h=>{const g=w=>w==="up4Star"?4:w==="up3Star"?3:w==="up2Star"?2:1;return h.totalRatings>g(u)})),s}function rs(){return r.jsxs(r.Fragment,{children:[r.jsx(Z,{children:r.jsx("title",{children:" Product: Shop"})}),r.jsx(Gr,{})]})}export{rs as default};
