import{D as a}from"./index-bf334511.js";function E(e,s,n){return e?Math.max(0,(1+e)*s-n):0}function w(e,s,n){return s[n]<e[n]?-1:s[n]>e[n]?1:0}function T(e,s){return e==="desc"?(n,c)=>w(n,c,s):(n,c)=>-w(n,c,s)}function j(e){const[s,n]=a.useState(!!(e!=null&&e.defaultDense)),[c,u]=a.useState((e==null?void 0:e.defaultCurrentPage)||0),[o,S]=a.useState((e==null?void 0:e.defaultOrderBy)||"name"),[i,k]=a.useState((e==null?void 0:e.defaultRowsPerPage)||5),[C,r]=a.useState((e==null?void 0:e.defaultOrder)||"asc"),[f,d]=a.useState((e==null?void 0:e.defaultSelected)||[]),b=a.useCallback(t=>{t!==""&&(r(o===t&&C==="asc"?"desc":"asc"),S(t))},[C,o]),h=a.useCallback(t=>{const l=f.includes(t)?f.filter(P=>P!==t):[...f,t];d(l)},[f]),R=a.useCallback(t=>{u(0),k(parseInt(t.target.value,10))},[]),m=a.useCallback(t=>{n(t.target.checked)},[]),D=a.useCallback((t,l)=>{if(t){d(l);return}d([])},[]),O=a.useCallback((t,l)=>{u(l)},[]),x=a.useCallback(()=>{u(0)},[]),A=a.useCallback(t=>{d([]),c&&t<2&&u(c-1)},[c]),v=a.useCallback(({totalRows:t,totalRowsInPage:l,totalRowsFiltered:P})=>{const g=f.length;if(d([]),c){if(g===l)u(c-1);else if(g===P)u(0);else if(g>l){const M=Math.ceil((t-g)/i)-1;u(M)}}},[c,i,f.length]);return{dense:s,order:C,page:c,orderBy:o,rowsPerPage:i,selected:f,onSelectRow:h,onSelectAllRows:D,onSort:b,onChangePage:O,onChangeDense:m,onResetPage:x,onChangeRowsPerPage:R,onUpdatePageDeleteRow:A,onUpdatePageDeleteRows:v,setPage:u,setDense:n,setOrder:r,setOrderBy:S,setSelected:d,setRowsPerPage:k}}export{E as e,T as g,j as u};
