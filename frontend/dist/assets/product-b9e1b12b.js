import{u as c}from"./index-47f153bd.js";import{D as i}from"./index-453cc783.js";import{f as n,e as p}from"./axios-ea0e24d9.js";function g(){const t=p.product.list,{data:o,isLoading:r,error:s,isValidating:e}=c(t,n);return i.useMemo(()=>({products:(o==null?void 0:o.products)||[],productsLoading:r,productsError:s,productsValidating:e,productsEmpty:!r&&!(o!=null&&o.products.length)}),[o==null?void 0:o.products,s,r,e])}function V(t){const o=t?[p.product.details,{params:{productId:t}}]:null,{data:r,isLoading:s,error:e,isValidating:u}=c(o,n);return i.useMemo(()=>({product:r==null?void 0:r.product,productLoading:s,productError:e,productValidating:u}),[r==null?void 0:r.product,e,s,u])}function h(t){const o=t?[p.product.search,{params:{query:t}}]:null,{data:r,isLoading:s,error:e,isValidating:u}=c(o,n,{keepPreviousData:!0});return i.useMemo(()=>({searchResults:(r==null?void 0:r.results)||[],searchLoading:s,searchError:e,searchValidating:u,searchEmpty:!s&&!(r!=null&&r.results.length)}),[r==null?void 0:r.results,e,s,u])}export{h as a,V as b,g as u};
