import{af as i,au as h,ao as c,am as d,aq as t,D as g,aj as y,az as m}from"./index-3a6092f3.js";function j({colors:e,limit:n=3,sx:o}){const p=e.slice(0,n),l=e.length-n;return i.jsxs(h,{component:"span",direction:"row",alignItems:"center",justifyContent:"flex-end",sx:o,children:[p.map((x,f)=>i.jsx(c,{sx:{ml:-.75,width:16,height:16,bgcolor:x,borderRadius:"50%",border:s=>`solid 2px ${s.palette.background.paper}`,boxShadow:s=>`inset -1px 1px 2px ${d(s.palette.common.black,.24)}`}},x+f)),e.length>n&&i.jsx(c,{component:"span",sx:{typography:"subtitle2"},children:`+${l}`})]})}j.propTypes={colors:t.arrayOf(t.string),limit:t.number,sx:t.object};const w=g.forwardRef(({colors:e,selected:n,onSelectColor:o,limit:p="auto",sx:l,...x},f)=>{const s=typeof n=="string",b=g.useCallback(a=>{if(s)a!==n&&o(a);else{const u=n!=null&&n.includes(a)?n.filter(r=>r!==a):[...n,a];o(u)}},[o,n,s]);return i.jsx(h,{ref:f,direction:"row",display:"inline-flex",sx:{flexWrap:"wrap",...p!=="auto"&&{width:p*36,justifyContent:"flex-end"},...l},...x,children:e.map(a=>{const u=s?n===a:n==null?void 0:n.includes(a);return i.jsx(y,{sx:{width:36,height:36,borderRadius:"50%"},onClick:()=>{b(a)},children:i.jsx(h,{alignItems:"center",justifyContent:"center",sx:{width:20,height:20,bgcolor:a,borderRadius:"50%",border:r=>`solid 1px ${d(r.palette.grey[500],.16)}`,...u&&{transform:"scale(1.3)",boxShadow:`4px 4px 8px 0 ${d(a,.48)}`,outline:`solid 2px ${d(a,.08)}`,transition:r=>r.transitions.create("all",{duration:r.transitions.duration.shortest})}},children:i.jsx(m,{width:u?12:0,icon:"eva:checkmark-fill",sx:{color:r=>r.palette.getContrastText(a),transition:r=>r.transitions.create("all",{duration:r.transitions.duration.shortest})}})})},a)})})});w.propTypes={colors:t.oneOfType([t.string,t.arrayOf(t.string)]),limit:t.number,onSelectColor:t.func,selected:t.oneOfType([t.string,t.arrayOf(t.string)]),sx:t.object};export{j as C,w as a};