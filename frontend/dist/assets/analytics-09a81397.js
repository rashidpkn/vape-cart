import{j as t,a$ as y,bc as T,bC as q,B as A,aP as Q,aS as Z,aL as r,S as P,b8 as ee,bE as te,bU as se,aD as I,ap as g,F as u,ao as C,an as f,ay as U,ar as j,as as v,aj as m,at as R,au as $,T as b,bV as oe,bW as ie,aX as ne,aH as _,b4 as re,aU as ae,aW as x,bX as le,bY as ce,W as pe}from"./index-274325b3.js";import{a as W,c as de}from"./format-number-47ae91b5.js";import{u as N}from"./use-chart-22267a6a.js";import{C as O}from"./chart-3713eca1.js";function G({title:e,subheader:s,list:o,...i}){return t.jsxs(y,{...i,children:[t.jsx(T,{title:e,subheader:s,sx:{mb:1}}),t.jsx(q,{children:o.map(n=>t.jsx(L,{news:n},n.id))}),t.jsx(A,{sx:{p:2,textAlign:"right"},children:t.jsx(Q,{size:"small",color:"inherit",endIcon:t.jsx(Z,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})})]})}G.propTypes={list:r.array,subheader:r.string,title:r.string};function L({news:e}){const{coverUrl:s,title:o,description:i,postedAt:n}=e;return t.jsxs(P,{spacing:2,direction:"row",alignItems:"center",sx:{py:2,px:3,minWidth:640,borderBottom:a=>`dashed 1px ${a.palette.divider}`},children:[t.jsx(ee,{variant:"rounded",alt:o,src:s,sx:{width:48,height:48,flexShrink:0}}),t.jsx(te,{primary:o,secondary:i,primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,noWrap:!0,component:"span"}}),t.jsx(A,{sx:{flexShrink:0,color:"text.disabled",typography:"caption"},children:se(n)})]})}L.propTypes={news:r.object};const D=400,k=72,me=g(O)(({theme:e})=>({height:D,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:k,borderTop:`dashed 1px ${e.palette.divider}`,top:`calc(${D-k}px) !important`}}));function V({title:e,subheader:s,chart:o,...i}){const n=I(),{colors:a,series:l,options:p}=o,d=l.map(h=>h.value),c=N({chart:{sparkline:{enabled:!0}},colors:a,labels:l.map(h=>h.label),stroke:{colors:[n.palette.background.paper]},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:h=>W(h),title:{formatter:h=>`${h}`}}},plotOptions:{pie:{donut:{labels:{show:!1}}}},...p});return t.jsxs(y,{...i,children:[t.jsx(T,{title:e,subheader:s,sx:{mb:5}}),t.jsx(me,{dir:"ltr",type:"pie",series:d,options:c,height:280})]})}V.propTypes={chart:r.object,subheader:r.string,title:r.string};const ue=u.createContext({}),M=ue;function xe(e){return C("MuiTimeline",e)}f("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function S(e){return e==="alternate-reverse"?"positionAlternateReverse":`position${U(e)}`}const he=["position","className"],ge=e=>{const{position:s,classes:o}=e,i={root:["root",s&&S(s)]};return $(i,xe,o)},fe=g("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:o}=e;return[s.root,o.position&&s[S(o.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),be=u.forwardRef(function(s,o){const i=j({props:s,name:"MuiTimeline"}),{position:n="right",className:a}=i,l=v(i,he),p=m({},i,{position:n}),d=ge(p),c=u.useMemo(()=>({position:n}),[n]);return t.jsx(M.Provider,{value:c,children:t.jsx(fe,m({className:R(d.root,a),ownerState:p,ref:o},l))})}),ye=be;function Te(e){return C("MuiTimelineDot",e)}f("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const Ce=["className","color","variant"],je=e=>{const{color:s,variant:o,classes:i}=e,n={root:["root",o,s!=="inherit"&&`${o}${U(s)}`]};return $(n,Te,i)},ve=g("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:o}=e;return[s.root,s[o.color!=="inherit"&&`${o.variant}${U(o.color)}`],s[o.variant]]}})(({ownerState:e,theme:s})=>m({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(s.vars||s).shadows[1],margin:"11.5px 0"},e.variant==="filled"&&m({borderColor:"transparent"},e.color!=="inherit"&&m({},e.color==="grey"?{color:(s.vars||s).palette.grey[50],backgroundColor:(s.vars||s).palette.grey[400]}:{color:(s.vars||s).palette[e.color].contrastText,backgroundColor:(s.vars||s).palette[e.color].main})),e.variant==="outlined"&&m({boxShadow:"none",backgroundColor:"transparent"},e.color!=="inherit"&&m({},e.color==="grey"?{borderColor:(s.vars||s).palette.grey[400]}:{borderColor:(s.vars||s).palette[e.color].main})))),Re=u.forwardRef(function(s,o){const i=j({props:s,name:"MuiTimelineDot"}),{className:n,color:a="grey",variant:l="filled"}=i,p=v(i,Ce),d=m({},i,{color:a,variant:l}),c=je(d);return t.jsx(ve,m({className:R(c.root,n),ownerState:d,ref:o},p))}),$e=Re;function Se(e){return C("MuiTimelineContent",e)}const Ae=f("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),we=Ae,Me=["className"],Ne=e=>{const{position:s,classes:o}=e,i={root:["root",S(s)]};return $(i,Se,o)},Oe=g(b,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:o}=e;return[s.root,s[S(o.position)]]}})(({ownerState:e})=>m({flex:1,padding:"6px 16px",textAlign:"left"},e.position==="left"&&{textAlign:"right"})),Ie=u.forwardRef(function(s,o){const i=j({props:s,name:"MuiTimelineContent"}),{className:n}=i,a=v(i,Me),{position:l}=u.useContext(M),p=m({},i,{position:l||"right"}),d=Ne(p);return t.jsx(Oe,m({component:"div",className:R(d.root,n),ownerState:p,ref:o},a))}),Ue=Ie;function _e(e){return C("MuiTimelineSeparator",e)}f("MuiTimelineSeparator",["root"]);const De=["className"],ke=e=>{const{classes:s}=e;return $({root:["root"]},_e,s)},He=g("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,s)=>s.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),Ee=u.forwardRef(function(s,o){const i=j({props:s,name:"MuiTimelineSeparator"}),{className:n}=i,a=v(i,De),l=i,p=ke(l);return t.jsx(He,m({className:R(p.root,n),ownerState:l,ref:o},a))}),Pe=Ee;function We(e){return C("MuiTimelineConnector",e)}f("MuiTimelineConnector",["root"]);const Ge=["className"],Le=e=>{const{classes:s}=e;return $({root:["root"]},We,s)},Ve=g("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,s)=>s.root})(({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1})),ze=u.forwardRef(function(s,o){const i=j({props:s,name:"MuiTimelineConnector"}),{className:n}=i,a=v(i,Ge),l=i,p=Le(l);return t.jsx(Ve,m({className:R(p.root,n),ownerState:l,ref:o},a))}),Be=ze,Fe=f("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),Ke=Fe;function Xe(e){return C("MuiTimelineItem",e)}const Je=f("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]),Ye=Je,qe=["position","className"],Qe=e=>{const{position:s,classes:o,hasOppositeContent:i}=e,n={root:["root",S(s),!i&&"missingOppositeContent"]};return $(n,Xe,o)},Ze=g("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:o}=e;return[s.root,s[S(o.position)]]}})(({ownerState:e})=>m({listStyle:"none",display:"flex",position:"relative",minHeight:70},e.position==="left"&&{flexDirection:"row-reverse"},(e.position==="alternate"||e.position==="alternate-reverse")&&{[`&:nth-of-type(${e.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${we.root}`]:{textAlign:"right"},[`& .${Ke.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&::before":{content:'""',flex:1,padding:"6px 16px"}})),et=u.forwardRef(function(s,o){const i=j({props:s,name:"MuiTimelineItem"}),{position:n,className:a}=i,l=v(i,qe),{position:p}=u.useContext(M);let d=!1;u.Children.forEach(i.children,Y=>{oe(Y,["TimelineOppositeContent"])&&(d=!0)});const c=m({},i,{position:n||p||"right",hasOppositeContent:d}),h=Qe(c),J=u.useMemo(()=>({position:c.position}),[c.position]);return t.jsx(M.Provider,{value:J,children:t.jsx(Ze,m({className:R(h.root,a),ownerState:c,ref:o},l))})}),tt=et;function z({title:e,subheader:s,list:o,...i}){return t.jsxs(y,{...i,children:[t.jsx(T,{title:e,subheader:s}),t.jsx(ye,{sx:{m:0,p:3,[`& .${Ye.root}:before`]:{flex:0,padding:0}},children:o.map((n,a)=>t.jsx(B,{item:n,lastTimeline:a===o.length-1},n.id))})]})}z.propTypes={list:r.array,subheader:r.string,title:r.string};function B({item:e,lastTimeline:s}){const{type:o,title:i,time:n}=e;return t.jsxs(tt,{children:[t.jsxs(Pe,{children:[t.jsx($e,{color:o==="order1"&&"primary"||o==="order2"&&"success"||o==="order3"&&"info"||o==="order4"&&"warning"||"error"}),s?null:t.jsx(Be,{})]}),t.jsxs(Ue,{children:[t.jsx(b,{variant:"subtitle2",children:i}),t.jsx(b,{variant:"caption",sx:{color:"text.disabled"},children:ie(n)})]})]})}B.propTypes={item:r.object,lastTimeline:r.bool};function F({title:e,subheader:s,chart:o,...i}){const{labels:n,colors:a,series:l,options:p}=o,d=N({colors:a,plotOptions:{bar:{columnWidth:"16%"}},fill:{type:l.map(c=>c.fill)},labels:n,xaxis:{type:"datetime"},tooltip:{shared:!0,intersect:!1,y:{formatter:c=>typeof c<"u"?`${c.toFixed(0)} visits`:c}},...p});return t.jsxs(y,{...i,children:[t.jsx(T,{title:e,subheader:s}),t.jsx(A,{sx:{p:3,pb:1},children:t.jsx(O,{dir:"ltr",type:"line",series:l,options:d,height:364})})]})}F.propTypes={chart:r.object,subheader:r.string,title:r.string};function w({title:e,total:s,icon:o,color:i="primary",sx:n,...a}){const l=I();return t.jsxs(P,{alignItems:"center",sx:{...ne({direction:"135deg",startColor:_(l.palette[i].light,.2),endColor:_(l.palette[i].main,.2)}),py:5,borderRadius:2,textAlign:"center",color:`${i}.darker`,backgroundColor:"common.white",...n},...a,children:[o&&t.jsx(A,{sx:{width:64,height:64,mb:1},children:o}),t.jsx(b,{variant:"h3",children:de(s)}),t.jsx(b,{variant:"subtitle2",sx:{opacity:.64},children:e})]})}w.propTypes={color:r.string,icon:r.oneOfType([r.element,r.string]),sx:r.object,title:r.string,total:r.number};const H=400,E=72,st=g(O)(({theme:e})=>({height:H,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:E,borderTop:`dashed 1px ${e.palette.divider}`,top:`calc(${H-E}px) !important`}}));function K({title:e,subheader:s,chart:o,...i}){const n=I(),{series:a,colors:l,categories:p,options:d}=o,c=N({colors:l,stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},xaxis:{categories:p,labels:{style:{colors:[...Array(6)].map(()=>n.palette.text.secondary)}}},...d});return t.jsxs(y,{...i,children:[t.jsx(T,{title:e,subheader:s,sx:{mb:5}}),t.jsx(st,{dir:"ltr",type:"radar",series:a,options:c,height:340})]})}K.propTypes={chart:r.object,subheader:r.string,title:r.string};function X({title:e,subheader:s,chart:o,...i}){const{colors:n,series:a,options:l}=o,p=a.map(c=>c.value),d=N({colors:n,tooltip:{marker:{show:!1},y:{formatter:c=>W(c),title:{formatter:()=>""}}},plotOptions:{bar:{horizontal:!0,barHeight:"28%",borderRadius:2}},xaxis:{categories:a.map(c=>c.label)},...l});return t.jsxs(y,{...i,children:[t.jsx(T,{title:e,subheader:s}),t.jsx(A,{sx:{mx:3},children:t.jsx(O,{type:"bar",dir:"ltr",series:[{data:p}],options:d,height:364})})]})}X.propTypes={chart:r.object,subheader:r.string,title:r.string};function ot(){const e=re();return t.jsxs(ae,{maxWidth:e.themeStretch?!1:"xl",children:[t.jsx(b,{variant:"h4",sx:{mb:{xs:3,md:5}},children:"Hi, Welcome back 👋"}),t.jsxs(x,{container:!0,spacing:3,children:[t.jsx(x,{xs:12,sm:6,md:4,children:t.jsx(w,{title:"Weekly Sales",total:714e3,icon:t.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_bag.png"})})}),t.jsx(x,{xs:12,sm:6,md:4,children:t.jsx(w,{title:"New Users",total:1352831,color:"info",icon:t.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_users.png"})})}),t.jsx(x,{xs:12,sm:6,md:4,children:t.jsx(w,{title:"Item Orders",total:1723315,color:"warning",icon:t.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_buy.png"})})}),t.jsx(x,{xs:12,md:6,lg:8,children:t.jsx(F,{title:"Website Visits",subheader:"(+43%) than last year",chart:{labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],series:[{name:"Team A",type:"column",fill:"solid",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",fill:"gradient",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",fill:"solid",data:[30,25,36,30,45,35,64,52,59,36,39]}]}})}),t.jsx(x,{xs:12,md:6,lg:4,children:t.jsx(V,{title:"Current Visits",chart:{series:[{label:"America",value:4344},{label:"Asia",value:5435},{label:"Europe",value:1443},{label:"Africa",value:4443}]}})}),t.jsx(x,{xs:12,md:6,lg:8,children:t.jsx(X,{title:"Conversion Rates",subheader:"(+43%) than last year",chart:{series:[{label:"Italy",value:400},{label:"Japan",value:430},{label:"China",value:448},{label:"Canada",value:470},{label:"France",value:540},{label:"Germany",value:580},{label:"South Korea",value:690},{label:"Netherlands",value:1100},{label:"United States",value:1200},{label:"United Kingdom",value:1380}]}})}),t.jsx(x,{xs:12,md:6,lg:4,children:t.jsx(K,{title:"Current Subject",chart:{categories:["English","History","Physics","Geography","Chinese","Math"],series:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}]}})}),t.jsx(x,{xs:12,md:6,lg:8,children:t.jsx(G,{title:"News",list:le})}),t.jsx(x,{xs:12,md:6,lg:4,children:t.jsx(z,{title:"Order Timeline",list:ce})})]})]})}function lt(){return t.jsxs(t.Fragment,{children:[t.jsx(pe,{children:t.jsx("title",{children:" Dashboard: Analytics"})}),t.jsx(ot,{})]})}export{lt as default};
