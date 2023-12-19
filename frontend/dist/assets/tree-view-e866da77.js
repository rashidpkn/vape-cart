import{D as i,b2 as St,ce as A,ch as Ee,a8 as r,cx as He,cy as Ge,am as fe,cg as ze,a6 as Tt,ci as Nt,cl as Je,cj as Ve,cJ as qe,cm as Me,cn as Qe,ao as ye,ba as Xe,ad as Le,aj as Ue,ag as Et,ah as Ne,ax as kt,aK as Ot}from"./index-80ed1a65.js";import{C as Rt}from"./custom-breadcrumbs-d8f83c0f.js";import{C as De}from"./component-block-6814710d.js";const Dt=i.createContext({}),$e=Dt,Pt=["element"];function Mt(n,l){for(let f=0;f<n.length;f+=1)if(l(n[f]))return f;return-1}function $t(n,l){let f=0,d=n.length-1;for(;f<=d;){const m=Math.floor((f+d)/2);if(n[m].element===l)return m;n[m].element.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_PRECEDING?d=m-1:f=m+1}return f}const Ye=i.createContext({});function Ft(n){const l=i.useRef(null);return i.useEffect(()=>{l.current=n},[n]),l.current}const Be=()=>{};function At(n){const[,l]=i.useState(),{registerDescendant:f=Be,unregisterDescendant:d=Be,descendants:m=[],parentId:$=null}=i.useContext(Ye),O=Mt(m,I=>I.element===n.element),D=Ft(m),T=m.some((I,N)=>D&&D[N]&&D[N].element!==I.element);return St(()=>{if(n.element)return f(A({},n,{index:O})),()=>{d(n.element)};l({})},[f,d,O,T,n]),{parentId:$,index:O}}function Ze(n){const{children:l,id:f}=n,[d,m]=i.useState([]),$=i.useCallback(T=>{let{element:I}=T,N=Ee(T,Pt);m(y=>{let E;if(y.length===0)return[A({},N,{element:I,index:0})];const g=$t(y,I);if(y[g]&&y[g].element===I)E=y;else{const k=A({},N,{element:I,index:g});E=y.slice(),E.splice(g,0,k)}return E.forEach((k,h)=>{k.index=h}),E})},[]),O=i.useCallback(T=>{m(I=>I.filter(N=>T!==N.element))},[]),D=i.useMemo(()=>({descendants:d,registerDescendant:$,unregisterDescendant:O,parentId:f}),[d,$,O,f]);return r.jsx(Ye.Provider,{value:D,children:l})}function Kt(n){return He("MuiTreeView",n)}Ge("MuiTreeView",["root"]);const Vt=["children","className","defaultCollapseIcon","defaultEndIcon","defaultExpanded","defaultExpandIcon","defaultParentIcon","defaultSelected","disabledItemsFocusable","disableSelection","expanded","id","multiSelect","onBlur","onFocus","onKeyDown","onNodeFocus","onNodeSelect","onNodeToggle","selected"],Lt=n=>{const{classes:l}=n;return Qe({root:["root"]},Kt,l)},Ut=fe("ul",{name:"MuiTreeView",slot:"Root",overridesResolver:(n,l)=>l.root})({padding:0,margin:0,listStyle:"none",outline:0});function Bt(n){return n&&n.length===1&&n.match(/\S/)}function We(n,l,f){for(let d=l;d<n.length;d+=1)if(f===n[d])return d;return-1}function _e(){return!1}const Wt=[],_t=[],Ht=i.forwardRef(function(l,f){const d=ze({props:l,name:"MuiTreeView"}),{children:m,className:$,defaultCollapseIcon:O,defaultEndIcon:D,defaultExpanded:T=Wt,defaultExpandIcon:I,defaultParentIcon:N,defaultSelected:y=_t,disabledItemsFocusable:E=!1,disableSelection:g=!1,expanded:k,id:h,multiSelect:w=!1,onBlur:Z,onFocus:v,onKeyDown:b,onNodeFocus:G,onNodeSelect:R,onNodeToggle:J,selected:U}=d,we=Ee(d,Vt),pe=Tt().direction==="rtl",je=A({},d,{defaultExpanded:T,defaultSelected:y,disabledItemsFocusable:E,disableSelection:g,multiSelect:w}),Oe=Lt(je),ae=Nt(h),ee=i.useRef(null),xe=Je(ee,f),[c,te]=i.useState(null),x=i.useRef({}),q=i.useRef({}),[z,be]=Ve({controlled:k,default:T,name:"TreeView",state:"expanded"}),[P,ce]=Ve({controlled:U,default:y,name:"TreeView",state:"selected"}),K=i.useCallback(e=>Array.isArray(z)?z.indexOf(e)!==-1:!1,[z]),ne=i.useCallback(e=>x.current[e]&&x.current[e].expandable,[]),se=i.useCallback(e=>Array.isArray(P)?P.indexOf(e)!==-1:P===e,[P]),j=i.useCallback(e=>{let t=x.current[e];if(!t)return!1;if(t.disabled)return!0;for(;t.parentId!=null;)if(t=x.current[t.parentId],t.disabled)return!0;return!1},[]),Se=e=>c===e,Q=e=>Object.keys(x.current).map(t=>x.current[t]).filter(t=>t.parentId===e).sort((t,s)=>t.index-s.index).map(t=>t.id),M=e=>{let t=Q(e);return E||(t=t.filter(s=>!j(s))),t},X=e=>{if(K(e)&&M(e).length>0)return M(e)[0];let t=x.current[e];for(;t!=null;){const s=M(t.parentId),o=s[s.indexOf(t.id)+1];if(o)return o;t=x.current[t.parentId]}return null},F=e=>{const t=x.current[e],s=M(t.parentId),o=s.indexOf(e);if(o===0)return t.parentId;let a=s[o-1];for(;K(a)&&M(a).length>0;)a=M(a).pop();return a},re=()=>{let e=M(null).pop();for(;K(e);)e=M(e).pop();return e},oe=()=>M(null)[0],me=e=>x.current[e].parentId,Re=(e,t)=>{if(e===t)return[e,t];const s=x.current[e],o=x.current[t];if(s.parentId===o.id||o.parentId===s.id)return o.parentId===s.id?[s.id,o.id]:[o.id,s.id];const a=[s.id],u=[o.id];let p=s.parentId,S=o.parentId,V=u.indexOf(p)!==-1,ge=a.indexOf(S)!==-1,ue=!0,Ce=!0;for(;!ge&&!V;)ue&&(a.push(p),V=u.indexOf(p)!==-1,ue=p!==null,!V&&ue&&(p=x.current[p].parentId)),Ce&&!V&&(u.push(S),ge=a.indexOf(S)!==-1,Ce=S!==null,!ge&&Ce&&(S=x.current[S].parentId));const Ie=V?p:S,Ke=Q(Ie),wt=a[a.indexOf(Ie)-1],jt=u[u.indexOf(Ie)-1];return Ke.indexOf(wt)<Ke.indexOf(jt)?[e,t]:[t,e]},B=(e,t)=>{const[s,o]=Re(e,t),a=[s];let u=s;for(;u!==o;)u=X(u),a.push(u);return a},W=(e,t)=>{t&&(te(t),G&&G(e,t))},ie=(e,t)=>W(e,X(t)),et=(e,t)=>W(e,F(t)),tt=e=>W(e,oe()),nt=e=>W(e,re()),st=(e,t,s)=>{let o,a;const u=s.toLowerCase(),p=[],S=[];Object.keys(q.current).forEach(V=>{const ge=q.current[V],ue=x.current[V],Ce=ue.parentId?K(ue.parentId):!0,Ie=E?!1:j(V);Ce&&!Ie&&(p.push(V),S.push(ge))}),o=p.indexOf(t)+1,o>=p.length&&(o=0),a=We(S,o,u),a===-1&&(a=We(S,0,u)),a>-1&&W(e,p[a])},Te=(e,t=c)=>{let s;z.indexOf(t)!==-1?s=z.filter(o=>o!==t):s=[t].concat(z),J&&J(e,s),be(s)},rt=(e,t)=>{const s=x.current[t],a=Q(s.parentId).filter(p=>ne(p)&&!K(p)),u=z.concat(a);a.length>0&&(be(u),J&&J(e,u))},Y=i.useRef(null),de=i.useRef(!1),_=i.useRef([]),ot=(e,t)=>{let s=P.slice();const{start:o,next:a,current:u}=t;!a||!u||(_.current.indexOf(u)===-1&&(_.current=[]),de.current?_.current.indexOf(a)!==-1?(s=s.filter(p=>p===o||p!==u),_.current=_.current.filter(p=>p===o||p!==u)):(s.push(a),_.current.push(a)):(s.push(a),_.current.push(u,a)),R&&R(e,s),ce(s))},lt=(e,t)=>{let s=P.slice();const{start:o,end:a}=t;de.current&&(s=s.filter(S=>_.current.indexOf(S)===-1));let u=B(o,a);u=u.filter(S=>!j(S)),_.current=u;let p=s.concat(u);p=p.filter((S,V)=>p.indexOf(S)===V),R&&R(e,p),ce(p)},at=(e,t)=>{let s;P.indexOf(t)!==-1?s=P.filter(o=>o!==t):s=[t].concat(P),R&&R(e,s),ce(s)},ct=(e,t)=>{const s=w?[t]:t;R&&R(e,s),ce(s)},he=(e,t,s=!1)=>t?(s?at(e,t):ct(e,t),Y.current=t,de.current=!1,_.current=[],!0):!1,le=(e,t,s=!1)=>{const{start:o=Y.current,end:a,current:u}=t;s?ot(e,{start:o,next:a,current:u}):o!=null&&a!=null&&lt(e,{start:o,end:a}),de.current=!0},it=(e,t)=>{Y.current||(Y.current=t);const s=de.current?Y.current:t;le(e,{start:s,end:oe()})},dt=(e,t)=>{Y.current||(Y.current=t);const s=de.current?Y.current:t;le(e,{start:s,end:re()})},ut=(e,t)=>{j(X(t))||le(e,{end:X(t),current:t},!0)},ft=(e,t)=>{j(F(t))||le(e,{end:F(t),current:t},!0)},pt=e=>{le(e,{start:oe(),end:re()})},xt=i.useCallback(e=>{const{id:t,index:s,parentId:o,expandable:a,idAttribute:u,disabled:p}=e;x.current[t]={id:t,index:s,parentId:o,expandable:a,idAttribute:u,disabled:p}},[]),bt=i.useCallback(e=>{const t=A({},x.current);delete t[e],x.current=t,te(s=>s===e&&ee.current===qe(ee.current).activeElement?Q(null)[0]:s)},[]),mt=i.useCallback((e,t)=>{q.current[e]=t},[]),ht=i.useCallback(e=>{const t=A({},q.current);delete t[e],q.current=t},[]),Fe=e=>(ne(c)&&(K(c)?ie(e,c):j(c)||Te(e)),!0),Ae=e=>{if(K(c)&&!j(c))return Te(e,c),!0;const t=me(c);return t?(W(e,t),!0):!1},gt=e=>{let t=!1;const s=e.key;if(e.altKey||e.currentTarget!==e.target||!c)return;const o=e.ctrlKey||e.metaKey;switch(s){case" ":!g&&!j(c)&&(w&&e.shiftKey?(le(e,{end:c}),t=!0):w?t=he(e,c,!0):t=he(e,c)),e.stopPropagation();break;case"Enter":j(c)||(ne(c)?(Te(e),t=!0):w?t=he(e,c,!0):t=he(e,c)),e.stopPropagation();break;case"ArrowDown":w&&e.shiftKey&&!g&&ut(e,c),ie(e,c),t=!0;break;case"ArrowUp":w&&e.shiftKey&&!g&&ft(e,c),et(e,c),t=!0;break;case"ArrowRight":pe?t=Ae(e):t=Fe(e);break;case"ArrowLeft":pe?t=Fe(e):t=Ae(e);break;case"Home":w&&o&&e.shiftKey&&!g&&!j(c)&&it(e,c),tt(e),t=!0;break;case"End":w&&o&&e.shiftKey&&!g&&!j(c)&&dt(e,c),nt(e),t=!0;break;default:s==="*"?(rt(e,c),t=!0):w&&o&&s.toLowerCase()==="a"&&!g?(pt(e),t=!0):!o&&!e.shiftKey&&Bt(s)&&(st(e,c,s),t=!0)}t&&(e.preventDefault(),e.stopPropagation()),b&&b(e)},Ct=e=>{if(e.target===e.currentTarget){const t=Array.isArray(P)?P[0]:P;W(e,t||M(null)[0])}v&&v(e)},It=e=>{te(null),Z&&Z(e)},yt=x.current[c]?x.current[c].idAttribute:null;return r.jsx($e.Provider,{value:{icons:{defaultCollapseIcon:O,defaultExpandIcon:I,defaultParentIcon:N,defaultEndIcon:D},focus:W,toggleExpansion:Te,isExpanded:K,isExpandable:ne,isFocused:Se,isSelected:se,isDisabled:j,selectNode:g?_e:he,selectRange:g?_e:le,multiSelect:w,disabledItemsFocusable:E,mapFirstChar:mt,unMapFirstChar:ht,registerNode:xt,unregisterNode:bt,treeId:ae},children:r.jsx(Ze,{children:r.jsx(Ut,A({role:"tree",id:ae,"aria-activedescendant":yt,"aria-multiselectable":w,className:Me(Oe.root,$),ref:xe,tabIndex:0,onKeyDown:gt,onFocus:Ct,onBlur:It,ownerState:je},we,{children:m}))})})}),Gt=Ht;function zt(n){const{focus:l,isExpanded:f,isExpandable:d,isFocused:m,isDisabled:$,isSelected:O,multiSelect:D,selectNode:T,selectRange:I,toggleExpansion:N}=i.useContext($e),y=d?d(n):!1,E=f?f(n):!1,g=m?m(n):!1,k=$?$(n):!1,h=O?O(n):!1;return{disabled:k,expanded:E,selected:h,focused:g,handleExpansion:b=>{if(!k){g||l(b,n);const G=D&&(b.shiftKey||b.ctrlKey||b.metaKey);y&&!(G&&f(n))&&N(b,n)}},handleSelection:b=>{k||(g||l(b,n),D&&(b.shiftKey||b.ctrlKey||b.metaKey)?b.shiftKey?I(b,{end:n}):T(b,n,!0):T(b,n))},preventSelection:b=>{(b.shiftKey||b.ctrlKey||b.metaKey||k)&&b.preventDefault()}}}const Jt=["classes","className","displayIcon","expansionIcon","icon","label","nodeId","onClick","onMouseDown"],qt=i.forwardRef(function(l,f){const{classes:d,className:m,displayIcon:$,expansionIcon:O,icon:D,label:T,nodeId:I,onClick:N,onMouseDown:y}=l,E=Ee(l,Jt),{disabled:g,expanded:k,selected:h,focused:w,handleExpansion:Z,handleSelection:v,preventSelection:b}=zt(I),G=D||O||$,R=U=>{b(U),y&&y(U)},J=U=>{Z(U),v(U),N&&N(U)};return r.jsxs("div",A({className:Me(m,d.root,k&&d.expanded,h&&d.selected,w&&d.focused,g&&d.disabled),onClick:J,onMouseDown:R,ref:f},E,{children:[r.jsx("div",{className:d.iconContainer,children:G}),r.jsx("div",{className:d.label,children:T})]}))}),ve=qt;function Qt(n){return He("MuiTreeItem",n)}const Xt=Ge("MuiTreeItem",["root","group","content","expanded","selected","focused","disabled","iconContainer","label"]),H=Xt,Yt=["children","className","collapseIcon","ContentComponent","ContentProps","endIcon","expandIcon","disabled","icon","id","label","nodeId","onClick","onMouseDown","TransitionComponent","TransitionProps"],Zt=n=>{const{classes:l}=n;return Qe({root:["root"],content:["content"],expanded:["expanded"],selected:["selected"],focused:["focused"],disabled:["disabled"],iconContainer:["iconContainer"],label:["label"],group:["group"]},Qt,l)},vt=fe("li",{name:"MuiTreeItem",slot:"Root",overridesResolver:(n,l)=>l.root})({listStyle:"none",margin:0,padding:0,outline:0}),en=fe(ve,{name:"MuiTreeItem",slot:"Content",overridesResolver:(n,l)=>[l.content,l.iconContainer&&{[`& .${H.iconContainer}`]:l.iconContainer},l.label&&{[`& .${H.label}`]:l.label}]})(({theme:n})=>({padding:"0 8px",width:"100%",display:"flex",alignItems:"center",cursor:"pointer",WebkitTapHighlightColor:"transparent","&:hover":{backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${H.disabled}`]:{opacity:(n.vars||n).palette.action.disabledOpacity,backgroundColor:"transparent"},[`&.${H.focused}`]:{backgroundColor:(n.vars||n).palette.action.focus},[`&.${H.selected}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:ye(n.palette.primary.main,n.palette.action.selectedOpacity),"&:hover":{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.hoverOpacity}))`:ye(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:ye(n.palette.primary.main,n.palette.action.selectedOpacity)}},[`&.${H.focused}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.focusOpacity}))`:ye(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)}},[`& .${H.iconContainer}`]:{marginRight:4,width:15,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}},[`& .${H.label}`]:A({width:"100%",minWidth:0,paddingLeft:4,position:"relative"},n.typography.body1)})),tn=fe(Xe,{name:"MuiTreeItem",slot:"Group",overridesResolver:(n,l)=>l.group})({margin:0,padding:0,marginLeft:17}),nn=i.forwardRef(function(l,f){const d=ze({props:l,name:"MuiTreeItem"}),{children:m,className:$,collapseIcon:O,ContentComponent:D=ve,ContentProps:T,endIcon:I,expandIcon:N,disabled:y,icon:E,id:g,label:k,nodeId:h,onClick:w,onMouseDown:Z,TransitionComponent:v=Xe,TransitionProps:b}=d,G=Ee(d,Yt),{icons:R={},focus:J,isExpanded:U,isFocused:we,isSelected:ke,isDisabled:pe,multiSelect:je,disabledItemsFocusable:Oe,mapFirstChar:ae,unMapFirstChar:ee,registerNode:xe,unregisterNode:c,treeId:te}=i.useContext($e);let x=null;g!=null?x=g:te&&h&&(x=`${te}-${h}`);const[q,z]=i.useState(null),be=i.useRef(null),P=Je(z,f),ce=i.useMemo(()=>({element:q,id:h}),[h,q]),{index:K,parentId:ne}=At(ce),se=!!(Array.isArray(m)?m.length:m),j=U?U(h):!1,Se=we?we(h):!1,Q=ke?ke(h):!1,M=pe?pe(h):!1,X=A({},d,{expanded:j,focused:Se,selected:Q,disabled:M}),F=Zt(X);let re,oe;se&&(j?oe=O||R.defaultCollapseIcon:oe=N||R.defaultExpandIcon),se?re=R.defaultParentIcon:re=I||R.defaultEndIcon,i.useEffect(()=>{if(xe&&c&&K!==-1)return xe({id:h,idAttribute:x,index:K,parentId:ne,expandable:se,disabled:y}),()=>{c(h)}},[xe,c,ne,K,h,se,y,x]),i.useEffect(()=>{if(ae&&ee&&k)return ae(h,be.current.textContent.substring(0,1).toLowerCase()),()=>{ee(h)}},[ae,ee,h,k]);let me;je?me=Q:Q&&(me=!0);function Re(B){if(B.target===B.currentTarget){let ie;typeof B.target.getRootNode=="function"?ie=B.target.getRootNode():ie=qe(B.target),ie.getElementById(te).focus({preventScroll:!0})}const W=!Oe&&M;!Se&&B.currentTarget===B.target&&!W&&J(B,h)}return r.jsxs(vt,A({className:Me(F.root,$),role:"treeitem","aria-expanded":se?j:null,"aria-selected":me,"aria-disabled":M||null,ref:P,id:x,tabIndex:-1},G,{ownerState:X,onFocus:Re,children:[r.jsx(en,A({as:D,ref:be,classes:{root:F.content,expanded:F.expanded,selected:F.selected,focused:F.focused,disabled:F.disabled,iconContainer:F.iconContainer,label:F.label},label:k,nodeId:h,onClick:w,onMouseDown:Z,icon:E,expansionIcon:oe,displayIcon:re,ownerState:X},T)),m&&r.jsx(Ze,{id:h,children:r.jsx(tn,A({as:v,unmountOnExit:!0,className:F.group,in:j,component:"ul",role:"group"},b,{children:m}))})]}))}),C=nn,Pe=fe(Gt)({height:240,flexGrow:1,maxWidth:400}),L=fe(n=>r.jsx(C,{...n}))(({theme:n})=>({[`& .${H.iconContainer}`]:{"& .close":{opacity:.3}},[`& .${H.group}`]:{marginLeft:15,paddingLeft:18,borderLeft:`1px dashed ${ye(n.palette.text.primary,.4)}`}}));L.propTypes={theme:kt.object};function sn(){return r.jsxs(r.Fragment,{children:[r.jsx(Le,{sx:{py:5,bgcolor:n=>n.palette.mode==="light"?"grey.200":"grey.800"},children:r.jsx(Ue,{children:r.jsx(Rt,{heading:"Tree View",links:[{name:"Components",href:Et.components},{name:"Tree View"}],moreLink:["https://mui.com/components/tree-view"]})})}),r.jsx(Ue,{sx:{my:10},children:r.jsxs(Le,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[r.jsx(De,{title:"Basic",children:r.jsxs(Pe,{defaultCollapseIcon:r.jsx(Ne,{icon:"eva:arrow-ios-downward-fill"}),defaultExpandIcon:r.jsx(Ne,{icon:"eva:arrow-ios-forward-fill"}),defaultEndIcon:null,children:[r.jsxs(C,{nodeId:"1",label:"Applications",children:[r.jsx(C,{nodeId:"2",label:"Calendar"}),r.jsx(C,{nodeId:"3",label:"Chrome"}),r.jsx(C,{nodeId:"4",label:"Webstorm"})]}),r.jsxs(C,{nodeId:"5",label:"Documents",children:[r.jsx(C,{nodeId:"10",label:"OSS"}),r.jsx(C,{nodeId:"6",label:"Material-UI",children:r.jsxs(C,{nodeId:"7",label:"src",children:[r.jsx(C,{nodeId:"8",label:"index.js"}),r.jsx(C,{nodeId:"9",label:"tree-view.js"})]})})]})]})}),r.jsx(De,{title:"Multi Select",children:r.jsxs(Pe,{multiSelect:!0,defaultCollapseIcon:r.jsx(Ne,{icon:"eva:arrow-ios-downward-fill"}),defaultExpandIcon:r.jsx(Ne,{icon:"eva:arrow-ios-forward-fill"}),defaultEndIcon:null,children:[r.jsxs(C,{nodeId:"1",label:"Applications",children:[r.jsx(C,{nodeId:"2",label:"Calendar"}),r.jsx(C,{nodeId:"3",label:"Chrome"}),r.jsx(C,{nodeId:"4",label:"Webstorm"})]}),r.jsx(C,{nodeId:"5",label:"Documents",children:r.jsx(C,{nodeId:"6",label:"Material-UI",children:r.jsxs(C,{nodeId:"7",label:"src",children:[r.jsx(C,{nodeId:"8",label:"index.js"}),r.jsx(C,{nodeId:"9",label:"tree-view.js"})]})})})]})}),r.jsx(De,{title:"Customization",children:r.jsx(Pe,{defaultExpanded:["1"],children:r.jsxs(L,{nodeId:"1",label:"Main",children:[r.jsx(L,{nodeId:"2",label:"Hello"}),r.jsxs(L,{nodeId:"3",label:"Subtree with children",children:[r.jsx(L,{nodeId:"6",label:"Hello"}),r.jsxs(L,{nodeId:"7",label:"Sub-subtree with children",children:[r.jsx(L,{nodeId:"9",label:"Child 1"}),r.jsx(L,{nodeId:"10",label:"Child 2"}),r.jsx(L,{nodeId:"11",label:"Child 3"})]}),r.jsx(L,{nodeId:"8",label:"Hello"})]}),r.jsx(L,{nodeId:"4",label:"World"}),r.jsx(L,{nodeId:"5",label:"Something something"})]})})})]})})]})}function an(){return r.jsxs(r.Fragment,{children:[r.jsx(Ot,{children:r.jsx("title",{children:" MUI: TreeView"})}),r.jsx(sn,{})]})}export{an as default};
