import{n as lt,Q as xt,c4 as It,c5 as ut,c6 as Ft,c7 as Ot,B as V,f as Tt,a as At,y as et}from"./index-bf334511.js";const W=t=>t*1e3,S=t=>t/1e3,ft=(t,n,e)=>(((1-3*e+3*n)*t+(3*e-6*n))*t+3*n)*t,wt=1e-7,Pt=12;function St(t,n,e,s,c){let o,r,d=0;do r=n+(e-n)/2,o=ft(r,s,c)-t,o>0?e=r:n=r;while(Math.abs(o)>wt&&++d<Pt);return r}function R(t,n,e,s){if(t===n&&e===s)return lt;const c=o=>St(o,0,1,t,e);return o=>o===0||o===1?o:ft(c(o),n,s)}const Bt=R(.42,0,1,1),Gt=R(0,0,.58,1),dt=R(.42,0,.58,1),Rt=t=>Array.isArray(t)&&typeof t[0]!="number",ht=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,pt=t=>n=>1-t(1-n),mt=t=>1-Math.sin(Math.acos(t)),gt=pt(mt),qt=ht(gt),vt=R(.33,1.53,.69,.99),C=pt(vt),Et=ht(C),Kt=t=>(t*=2)<1?.5*C(t):.5*(2-Math.pow(2,-10*(t-1))),kt={linear:lt,easeIn:Bt,easeInOut:dt,easeOut:Gt,circIn:mt,circInOut:qt,circOut:gt,backIn:C,backInOut:Et,backOut:vt,anticipate:Kt},st=t=>{if(Array.isArray(t)){xt(t.length===4);const[n,e,s,c]=t;return R(n,e,s,c)}else if(typeof t=="string")return kt[t];return t};function Nt(t,n){return t.map(e=>e*n)}function zt(t,n){return t.map(()=>n||dt).splice(0,t.length-1)}function k({duration:t=300,keyframes:n,times:e,ease:s="easeInOut"}){const c=Rt(s)?s.map(st):st(s),o={done:!1,value:n[0]},r=Nt(e&&e.length===n.length?e:It(n),t),d=ut(r,n,{ease:Array.isArray(c)?c:zt(n,c)});return{calculatedDuration:t,next:M=>(o.value=d(M),o.done=M>=t,o)}}const Lt=5;function Mt(t,n,e){const s=Math.max(n-Lt,0);return Ft(e-t(s),n-s)}const Q=.001,Qt=.01,ot=10,Vt=.05,Wt=1;function jt({duration:t=800,bounce:n=.25,velocity:e=0,mass:s=1}){let c,o;Ot(t<=W(ot));let r=1-n;r=V(Vt,Wt,r),t=V(Qt,ot,S(t)),r<1?(c=a=>{const F=a*r,v=F*t,h=F-e,p=j(a,r),m=Math.exp(-v);return Q-h/p*m},o=a=>{const v=a*r*t,h=v*e+e,p=Math.pow(r,2)*Math.pow(a,2)*t,m=Math.exp(-v),y=j(Math.pow(a,2),r);return(-c(a)+Q>0?-1:1)*((h-p)*m)/y}):(c=a=>{const F=Math.exp(-a*t),v=(a-e)*t+1;return-Q+F*v},o=a=>{const F=Math.exp(-a*t),v=(e-a)*(t*t);return F*v});const d=5/t,M=Ht(c,o,d);if(t=W(t),isNaN(M))return{stiffness:100,damping:10,duration:t};{const a=Math.pow(M,2)*s;return{stiffness:a,damping:r*2*Math.sqrt(s*a),duration:t}}}const Ct=12;function Ht(t,n,e){let s=e;for(let c=1;c<Ct;c++)s=s-t(s)/n(s);return s}function j(t,n){return t*Math.sqrt(1-n*n)}const Jt=["duration","bounce"],Ut=["stiffness","damping","mass"];function it(t,n){return n.some(e=>t[e]!==void 0)}function Xt(t){let n={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!it(t,Ut)&&it(t,Jt)){const e=jt(t);n={...n,...e,velocity:0,mass:1},n.isResolvedFromDuration=!0}return n}function yt({keyframes:t,restDelta:n,restSpeed:e,...s}){const c=t[0],o=t[t.length-1],r={done:!1,value:c},{stiffness:d,damping:M,mass:a,velocity:F,duration:v,isResolvedFromDuration:h}=Xt(s),p=F?-S(F):0,m=M/(2*Math.sqrt(d*a)),y=o-c,x=S(Math.sqrt(d/a)),T=Math.abs(y)<5;e||(e=T?.01:2),n||(n=T?.005:.5);let g;if(m<1){const l=j(x,m);g=D=>{const u=Math.exp(-m*x*D);return o-u*((p+m*x*y)/l*Math.sin(l*D)+y*Math.cos(l*D))}}else if(m===1)g=l=>o-Math.exp(-x*l)*(y+(p+x*y)*l);else{const l=x*Math.sqrt(m*m-1);g=D=>{const u=Math.exp(-m*x*D),A=Math.min(l*D,300);return o-u*((p+m*x*y)*Math.sinh(A)+l*y*Math.cosh(A))/l}}return{calculatedDuration:h&&v||null,next:l=>{const D=g(l);if(h)r.done=l>=v;else{let u=p;l!==0&&(m<1?u=Mt(g,l,D):u=0);const A=Math.abs(u)<=e,b=Math.abs(o-D)<=n;r.done=A&&b}return r.value=r.done?o:D,r}}}function rt({keyframes:t,velocity:n=0,power:e=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:o=500,modifyTarget:r,min:d,max:M,restDelta:a=.5,restSpeed:F}){const v=t[0],h={done:!1,value:v},p=i=>d!==void 0&&i<d||M!==void 0&&i>M,m=i=>d===void 0?M:M===void 0||Math.abs(d-i)<Math.abs(M-i)?d:M;let y=e*n;const x=v+y,T=r===void 0?x:r(x);T!==x&&(y=T-v);const g=i=>-y*Math.exp(-i/s),l=i=>T+g(i),D=i=>{const I=g(i),P=l(i);h.done=Math.abs(I)<=a,h.value=h.done?T:P};let u,A;const b=i=>{p(h.value)&&(u=i,A=yt({keyframes:[h.value,m(h.value)],velocity:Mt(l,i,h.value),damping:c,stiffness:o,restDelta:a,restSpeed:F}))};return b(0),{calculatedDuration:null,next:i=>{let I=!1;return!A&&u===void 0&&(I=!0,D(i),b(i)),u!==void 0&&i>u?A.next(i-u):(!I&&D(i),h)}}}const Zt=t=>{const n=({timestamp:e})=>t(e);return{start:()=>Tt.update(n,!0),stop:()=>At(n),now:()=>et.isProcessing?et.timestamp:performance.now()}},at=2e4;function ct(t){let n=0;const e=50;let s=t.next(n);for(;!s.done&&n<at;)n+=e,s=t.next(n);return n>=at?1/0:n}const _t={decay:rt,inertia:rt,tween:k,keyframes:k,spring:yt};function $t({autoplay:t=!0,delay:n=0,driver:e=Zt,keyframes:s,type:c="keyframes",repeat:o=0,repeatDelay:r=0,repeatType:d="loop",onPlay:M,onStop:a,onComplete:F,onUpdate:v,...h}){let p=1,m=!1,y,x;const T=()=>{y&&y(),x=new Promise(f=>{y=f})};T();let g;const l=_t[c]||k;let D;l!==k&&typeof s[0]!="number"&&(D=ut([0,100],s,{clamp:!1}),s=[0,100]);const u=l({...h,keyframes:s});let A;d==="mirror"&&(A=l({...h,keyframes:[...s].reverse(),velocity:-(h.velocity||0)}));let b="idle",i=null,I=null,P=null;u.calculatedDuration===null&&o&&(u.calculatedDuration=ct(u));const{calculatedDuration:N}=u;let B=1/0,q=1/0;N!==null&&(B=N+r,q=B*(o+1)-r);let O=0;const z=f=>{if(I===null)return;p>0&&(I=Math.min(I,f)),i!==null?O=i:O=(f-I)*p;const E=O-n,Z=E<0;O=Math.max(E,0),b==="finished"&&i===null&&(O=q);let _=O,Y=u;if(o){const L=O/B;let K=Math.floor(L),w=L%1;!w&&L>=1&&(w=1),w===1&&K--,K=Math.min(K,o+1);const tt=!!(K%2);tt&&(d==="reverse"?(w=1-w,r&&(w-=r/B)):d==="mirror"&&(Y=A));let nt=V(0,1,w);O>q&&(nt=d==="reverse"&&tt?1:0),_=nt*B}const G=Z?{done:!1,value:s[0]}:Y.next(_);D&&(G.value=D(G.value));let{done:$}=G;!Z&&N!==null&&($=O>=q);const bt=i===null&&(b==="finished"||b==="running"&&$||p<0&&O<=0);return v&&v(G.value),bt&&Dt(),G},H=()=>{g&&g.stop(),g=void 0},J=()=>{b="idle",H(),T(),I=P=null},Dt=()=>{b="finished",F&&F(),H(),T()},U=()=>{if(m)return;g||(g=e(z));const f=g.now();M&&M(),i!==null?I=f-i:(!I||b==="finished")&&(I=f),P=I,i=null,b="running",g.start()};t&&U();const X={then(f,E){return x.then(f,E)},get time(){return S(O)},set time(f){f=W(f),O=f,i!==null||!g||p===0?i=f:I=g.now()-f/p},get duration(){const f=u.calculatedDuration===null?ct(u):u.calculatedDuration;return S(f)},get speed(){return p},set speed(f){f===p||!g||(p=f,X.time=S(O))},get state(){return b},play:U,pause:()=>{b="paused",i=O},stop:()=>{m=!0,b!=="idle"&&(b="idle",a&&a(),J())},cancel:()=>{P!==null&&z(P),J()},complete:()=>{b="finished"},sample:f=>(I=0,z(f))};return X}export{$t as a,gt as c,S as m,W as s};
