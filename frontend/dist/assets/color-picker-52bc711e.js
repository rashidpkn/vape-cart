import{aP as t,H as u,j as s,S as f,au as b,aL as p,I as c}from"./index-5abd2fc6.js";t.arrayOf(t.string),t.number,t.object;const j=u.forwardRef(({colors:h,selected:i,onSelectColor:o,limit:x="auto",sx:d,...l},g)=>{const e=typeof i=="string",y=u.useCallback(n=>{if(e)n!==i&&o(n);else{const r=i!=null&&i.includes(n)?i.filter(a=>a!==n):[...i,n];o(r)}},[o,i,e]);return s.jsx(f,{ref:g,direction:"row",display:"inline-flex",sx:{flexWrap:"wrap",...x!=="auto"&&{width:x*36,justifyContent:"flex-end"},...d},...l,children:h.map(n=>{const r=e?i===n:i==null?void 0:i.includes(n);return s.jsx(b,{sx:{width:36,height:36,borderRadius:"50%"},onClick:()=>{y(n)},children:s.jsx(f,{alignItems:"center",justifyContent:"center",sx:{width:20,height:20,bgcolor:n,borderRadius:"50%",border:a=>`solid 1px ${p(a.palette.grey[500],.16)}`,...r&&{transform:"scale(1.3)",boxShadow:`4px 4px 8px 0 ${p(n,.48)}`,outline:`solid 2px ${p(n,.08)}`,transition:a=>a.transitions.create("all",{duration:a.transitions.duration.shortest})}},children:s.jsx(c,{width:r?12:0,icon:"eva:checkmark-fill",sx:{color:a=>a.palette.getContrastText(n),transition:a=>a.transitions.create("all",{duration:a.transitions.duration.shortest})}})})},n)})})});j.propTypes={colors:t.oneOfType([t.string,t.arrayOf(t.string)]),limit:t.number,onSelectColor:t.func,selected:t.oneOfType([t.string,t.arrayOf(t.string)]),sx:t.object};