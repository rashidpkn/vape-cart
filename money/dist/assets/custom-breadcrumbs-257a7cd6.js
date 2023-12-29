import{bk as N,af as s,ab as h,aj as _,ag as x,dP as P,ae as w,aa as U,a9 as q,ac as L,D as g,ad as H,cu as O,ah as W,ai as D,aA as M,ax as F,ao as u,aq as a,au as G}from"./index-02adb112.js";const V=N(s.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),J=["slots","slotProps"],K=h(_)(({theme:e})=>x({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":x({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":x({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:P(e.palette.grey[200],.12)}:{backgroundColor:P(e.palette.grey[600],.12)})})),Q=h(V)({width:24,height:16});function X(e){const{slots:r={},slotProps:n={}}=e,t=w(e,J),o=e;return s.jsx("li",{children:s.jsx(K,x({focusRipple:!0},t,{ownerState:o,children:s.jsx(Q,x({as:r.CollapsedIcon,ownerState:o},n.collapsedIcon))}))})}function Y(e){return q("MuiBreadcrumbs",e)}const Z=U("MuiBreadcrumbs",["root","ol","li","separator"]),ee=Z,se=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],re=e=>{const{classes:r}=e;return D({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},Y,r)},oe=h(L,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${ee.li}`]:r.li},r.root]})({}),te=h("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),ae=h("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function ne(e,r,n,t){return e.reduce((o,i,l)=>(l<e.length-1?o=o.concat(i,s.jsx(ae,{"aria-hidden":!0,className:r,ownerState:t,children:n},`separator-${l}`)):o.push(i),o),[])}const le=g.forwardRef(function(r,n){const t=H({props:r,name:"MuiBreadcrumbs"}),{children:o,className:i,component:l="nav",slots:p={},slotProps:d={},expandText:S="Show path",itemsAfterCollapse:f=1,itemsBeforeCollapse:y=1,maxItems:C=8,separator:v="/"}=t,$=w(t,se),[R,z]=g.useState(!1),m=x({},t,{component:l,expanded:R,expandText:S,itemsAfterCollapse:f,itemsBeforeCollapse:y,maxItems:C,separator:v}),b=re(m),A=O({elementType:p.CollapsedIcon,externalSlotProps:d.collapsedIcon,ownerState:m}),k=g.useRef(null),E=c=>{const B=()=>{z(!0);const I=k.current.querySelector("a[href],button,[tabindex]");I&&I.focus()};return y+f>=c.length?c:[...c.slice(0,y),s.jsx(X,{"aria-label":S,slots:{CollapsedIcon:p.CollapsedIcon},slotProps:{collapsedIcon:A},onClick:B},"ellipsis"),...c.slice(c.length-f,c.length)]},j=g.Children.toArray(o).filter(c=>g.isValidElement(c)).map((c,B)=>s.jsx("li",{className:b.li,children:c},`child-${B}`));return s.jsx(oe,x({ref:n,component:l,color:"text.secondary",className:W(b.root,i),ownerState:m},$,{children:s.jsx(te,{className:b.ol,ref:k,ownerState:m,children:ne(R||C&&j.length<=C?j:E(j),b.separator,v,m)})}))}),ce=le;function T({link:e,activeLast:r,disabled:n}){const{name:t,href:o,icon:i}=e,l={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...n&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},p=s.jsxs(s.Fragment,{children:[i&&s.jsx(u,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:i}),t]});return o?s.jsx(M,{component:F,href:o,sx:l,children:p}):s.jsxs(u,{sx:l,children:[" ",p," "]})}T.propTypes={activeLast:a.bool,disabled:a.bool,link:a.shape({href:a.string,icon:a.node,name:a.string})};function ie({links:e,action:r,heading:n,moreLink:t,activeLast:o,sx:i,...l}){const p=e[e.length-1].name;return s.jsxs(u,{sx:{...i},children:[s.jsxs(G,{direction:"row",alignItems:"center",children:[s.jsxs(u,{sx:{flexGrow:1},children:[n&&s.jsx(L,{variant:"h4",gutterBottom:!0,children:n}),!!e.length&&s.jsx(ce,{separator:s.jsx(de,{}),...l,children:e.map(d=>s.jsx(T,{link:d,activeLast:o,disabled:d.name===p},d.name||""))})]}),r&&s.jsxs(u,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!t&&s.jsx(u,{sx:{mt:2},children:t.map(d=>s.jsx(M,{href:d,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:d},d))})]})}ie.propTypes={sx:a.object,action:a.node,links:a.array,heading:a.string,moreLink:a.array,activeLast:a.bool};function de(){return s.jsx(u,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}export{ie as C};
