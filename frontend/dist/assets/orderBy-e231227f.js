import{df as e,dg as A,dh as B,di as M,dj as m,dk as s,dl as y,bY as $,bX as k}from"./index-80ed1a65.js";import{_ as o}from"./_baseEach-6fa369f4.js";var C=o,E=e;function L(n,r){var a=-1,u=E(n)?Array(n.length):[];return C(n,function(d,i,c){u[++a]=r(d,i,c)}),u}var O=L;function j(n,r){var a=n.length;for(n.sort(r);a--;)n[a]=n[a].value;return n}var w=j,b=A;function x(n,r){if(n!==r){var a=n!==void 0,u=n===null,d=n===n,i=b(n),c=r!==void 0,p=r===null,t=r===r,f=b(r);if(!p&&!f&&!i&&n>r||i&&c&&t&&!p&&!f||u&&c&&t||!a&&t||!d)return 1;if(!u&&!i&&!f&&n<r||f&&a&&d&&!u&&!i||p&&a&&d||!c&&d||!t)return-1}return 0}var G=x,U=G;function F(n,r,a){for(var u=-1,d=n.criteria,i=r.criteria,c=d.length,p=a.length;++u<c;){var t=U(d[u],i[u]);if(t){if(u>=p)return t;var f=a[u];return t*(f=="desc"?-1:1)}}return n.index-r.index}var X=F,_=B,Y=m,q=$,z=O,H=w,J=s,K=X,P=M,Q=y;function T(n,r,a){r.length?r=_(r,function(i){return Q(i)?function(c){return Y(c,i.length===1?i[0]:i)}:i}):r=[P];var u=-1;r=_(r,J(q));var d=z(n,function(i,c,p){var t=_(r,function(f){return f(i)});return{criteria:t,index:++u,value:i}});return H(d,function(i,c){return K(i,c,a)})}var V=T,W=V,g=y;function Z(n,r,a,u){return n==null?[]:(g(r)||(r=r==null?[]:[r]),a=u?void 0:a,g(a)||(a=a==null?[]:[a]),W(n,r,a))}var v=Z;const D=k(v);export{D as o};