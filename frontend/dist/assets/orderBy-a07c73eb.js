import{dj as A,dk as B,dl as m,dm as M,dn as s,dp as $,dq as g,bZ as o,bY as k}from"./index-b8fc31ad.js";import{_ as e}from"./_baseEach-8dc3c790.js";var C=e,E=A;function L(n,r){var a=-1,u=E(n)?Array(n.length):[];return C(n,function(t,i,c){u[++a]=r(t,i,c)}),u}var O=L;function j(n,r){var a=n.length;for(n.sort(r);a--;)n[a]=n[a].value;return n}var v=j,f=B;function w(n,r){if(n!==r){var a=n!==void 0,u=n===null,t=n===n,i=f(n),c=r!==void 0,_=r===null,p=r===r,d=f(r);if(!_&&!d&&!i&&n>r||i&&c&&p&&!_&&!d||u&&c&&p||!a&&p||!t)return 1;if(!u&&!i&&!d&&n<r||d&&a&&t&&!u&&!i||_&&a&&t||!c&&t||!p)return-1}return 0}var x=w,G=x;function U(n,r,a){for(var u=-1,t=n.criteria,i=r.criteria,c=t.length,_=a.length;++u<c;){var p=G(t[u],i[u]);if(p){if(u>=_)return p;var d=a[u];return p*(d=="desc"?-1:1)}}return n.index-r.index}var q=U,b=m,F=s,Y=o,Z=O,z=v,H=$,J=q,K=M,P=g;function Q(n,r,a){r.length?r=b(r,function(i){return P(i)?function(c){return F(c,i.length===1?i[0]:i)}:i}):r=[K];var u=-1;r=b(r,H(Y));var t=Z(n,function(i,c,_){var p=b(r,function(d){return d(i)});return{criteria:p,index:++u,value:i}});return z(t,function(i,c){return J(i,c,a)})}var T=Q,V=T,y=g;function W(n,r,a,u){return n==null?[]:(y(r)||(r=r==null?[]:[r]),a=u?void 0:a,y(a)||(a=a==null?[]:[a]),V(n,r,a))}var X=W;const h=k(X);export{h as o};
