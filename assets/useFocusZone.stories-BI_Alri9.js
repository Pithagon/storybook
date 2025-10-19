import{j as n,T as ee,t as ne,B as te,d as D,r as k,b as oe}from"./iframe-Cfz2vXeE.js";import{u as N}from"./useFocusZone-BvuuCBlY.js";import{F}from"./focus-zone-ZDpdvBtN.js";import{B as Y}from"./Button-3sCteC9V.js";import{F as X}from"./Flash-CFeEV9BS.js";import{L as se}from"./Link-Dm7wEaum.js";import"./preload-helper-D9Z9MdNV.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";const re="prc-stories-MarginButton-Ez3hr",ae="prc-stories-FlexColumnContainer-Vqhx7",ie="prc-stories-FlexRowContainer-hxnyl",le="prc-stories-FlexRowCenterContainer-pobRP",ce="prc-stories-AbsoluteTopRight-dpvr6",ue="prc-stories-BorderedContainer-McakW",de="prc-stories-GridContainer-AFmQe",me="prc-stories-MarginBottom3--lKyc",o={MarginButton:re,FlexColumnContainer:ae,FlexRowContainer:ie,FlexRowCenterContainer:le,AbsoluteTopRight:ce,BorderedContainer:ue,GridContainer:de,MarginBottom3:me},De={title:"Hooks/useFocusZone",decorators:[e=>n.jsx(ee,{theme:ne,children:n.jsx(te,{children:n.jsx(e,{})})})]},t=e=>{const s=D.c(6);let R,r;s[0]!==e?({children:R,...r}=e,s[0]=e,s[1]=R,s[2]=r):(R=s[1],r=s[2]);let _;return s[3]!==R||s[4]!==r?(_=n.jsx(Y,{className:o.MarginButton,...r,children:R}),s[3]=R,s[4]=r,s[5]=_):_=s[5],_},T=()=>{const e=D.c(27),[s,R]=k.useState("none");let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=E=>{R(E.key)},e[0]=r):r=e[0];const _=r,[u,A]=k.useState(!0),m=!u;let C;e[1]!==m?(C={disabled:m},e[1]=m,e[2]=C):C=e[2];let a;e[3]!==u?(a=[u],e[3]=u,e[4]=a):a=e[4];const{containerRef:x}=N(C,a);let f;e[5]!==u?(f=()=>{A(!u)},e[5]=u,e[6]=f):f=e[6];const g=f;let d;e[7]!==s?(d=n.jsxs("div",{className:o.AbsoluteTopRight,children:["Last key pressed: ",s]}),e[7]=s,e[8]=d):d=e[8];const y=u?"danger":"primary",c=u?"Disable":"Enable";let l;e[9]!==y||e[10]!==c||e[11]!==g?(l=n.jsxs(Y,{variant:y,onClick:g,className:o.MarginBottom3,children:[c," Focus Zone"]}),e[9]=y,e[10]=c,e[11]=g,e[12]=l):l=e[12];let b,h,p;e[13]===Symbol.for("react.memo_cache_sentinel")?(p=n.jsx(t,{children:"Apple"}),b=n.jsx(t,{children:"Banana"}),h=n.jsx(t,{children:"Cantaloupe"}),e[13]=b,e[14]=h,e[15]=p):(b=e[13],h=e[14],p=e[15]);const B=x;let i;e[16]===Symbol.for("react.memo_cache_sentinel")?(i=n.jsx("strong",{children:"Use Up Arrow, Down Arrow, Home, and End to move focus within this box."}),e[16]=i):i=e[16];let v;e[17]===Symbol.for("react.memo_cache_sentinel")?(v=n.jsxs("div",{className:o.FlexColumnContainer,children:[n.jsx(t,{children:"Durian"}),n.jsx(t,{children:"Elderberry"}),n.jsx(t,{children:"Fig"})]}),e[17]=v):v=e[17];let M;e[18]!==B?(M=n.jsxs("div",{className:o.BorderedContainer,ref:B,children:[i,v]}),e[18]=B,e[19]=M):M=e[19];let w,j,K;e[20]===Symbol.for("react.memo_cache_sentinel")?(w=n.jsx(t,{children:"Kiwi"}),j=n.jsx(t,{children:"Lemon"}),K=n.jsx(t,{children:"Mango"}),e[20]=w,e[21]=j,e[22]=K):(w=e[20],j=e[21],K=e[22]);let S;return e[23]!==M||e[24]!==d||e[25]!==l?(S=n.jsx(n.Fragment,{children:n.jsxs("div",{className:o.FlexColumnContainer,onKeyDownCapture:_,children:[d,l,p,b,h,M,w,j,K]})}),e[23]=M,e[24]=d,e[25]=l,e[26]=S):S=e[26],S},I=()=>{const e=D.c(23),[s,R]=k.useState("none");let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=j=>{R(j.key)},e[0]=r):r=e[0];const _=r;let u;e[1]===Symbol.for("react.memo_cache_sentinel")?(u={focusOutBehavior:"stop",bindKeys:F.ArrowHorizontal|F.HomeAndEnd},e[1]=u):u=e[1];const{containerRef:A}=N(u);let m;e[2]===Symbol.for("react.memo_cache_sentinel")?(m={focusOutBehavior:"wrap",bindKeys:F.ArrowHorizontal|F.HomeAndEnd},e[2]=m):m=e[2];const{containerRef:C}=N(m);let a;e[3]!==s?(a=n.jsxs("div",{className:o.AbsoluteTopRight,children:["Last key pressed: ",s]}),e[3]=s,e[4]=a):a=e[4];let x,f,g;e[5]===Symbol.for("react.memo_cache_sentinel")?(x=n.jsx(t,{children:"Apple"}),f=n.jsx(t,{children:"Banana"}),g=n.jsx(t,{children:"Cantaloupe"}),e[5]=x,e[6]=f,e[7]=g):(x=e[5],f=e[6],g=e[7]);const d=A;let y;e[8]===Symbol.for("react.memo_cache_sentinel")?(y=n.jsx("strong",{children:"Use Left Arrow, Right Arrow, Home, and End to move focus within this box. Focus stops at the ends."}),e[8]=y):y=e[8];let c;e[9]===Symbol.for("react.memo_cache_sentinel")?(c=n.jsxs("div",{className:o.FlexRowContainer,children:[n.jsx(t,{children:"Durian"}),n.jsx(t,{children:"Elderberry"}),n.jsx(t,{children:"Fig"})]}),e[9]=c):c=e[9];let l;e[10]!==d?(l=n.jsxs("div",{className:o.BorderedContainer,ref:d,children:[y,c]}),e[10]=d,e[11]=l):l=e[11];const b=C;let h;e[12]===Symbol.for("react.memo_cache_sentinel")?(h=n.jsx("strong",{children:"Use Left Arrow, Right Arrow, Home, and End to move focus within this box. Focus is circular."}),e[12]=h):h=e[12];let p;e[13]===Symbol.for("react.memo_cache_sentinel")?(p=n.jsxs("div",{className:o.FlexRowContainer,children:[n.jsx(t,{children:"Grapefruit"}),n.jsx(t,{children:"Honeydew"}),n.jsx(t,{children:"Jackfruit"})]}),e[13]=p):p=e[13];let B;e[14]!==b?(B=n.jsxs("div",{className:o.BorderedContainer,ref:b,children:[h,p]}),e[14]=b,e[15]=B):B=e[15];let i,v,M;e[16]===Symbol.for("react.memo_cache_sentinel")?(i=n.jsx(t,{children:"Kiwi"}),v=n.jsx(t,{children:"Lemon"}),M=n.jsx(t,{children:"Mango"}),e[16]=i,e[17]=v,e[18]=M):(i=e[16],v=e[17],M=e[18]);let w;return e[19]!==l||e[20]!==B||e[21]!==a?(w=n.jsx(n.Fragment,{children:n.jsxs("div",{className:o.FlexColumnContainer,onKeyDownCapture:_,children:[a,x,f,g,l,B,i,v,M]})}),e[19]=l,e[20]=B,e[21]=a,e[22]=w):w=e[22],w};function fe(e){let s=e,R=0;for(;(s=s.previousElementSibling)!=null;)++R;return R}const U=()=>{const e=D.c(12),[s,R]=k.useState("none");let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=l=>{R(l.key)},e[0]=r):r=e[0];const _=r,u=k.useRef(null);let A;e[1]===Symbol.for("react.memo_cache_sentinel")?(A=(l,b,h)=>{const p=l==="start"||l==="end";if(b&&u.current){let i=fe(b);if(["End","ArrowRight"].includes(h.key))for(;i%3!==2&&(i=i+1,!!p););if(["Home","ArrowLeft"].includes(h.key))for(;i%3!==0&&(i=i-1,!!p););if(h.key==="ArrowUp")for(;i-3>=0&&(i=i-3,!!p););if(h.key==="ArrowDown")for(;i+3<9&&(i=i+3,!!p););return u.current.children[i]}},e[1]=A):A=e[1];const m=A;let C;e[2]===Symbol.for("react.memo_cache_sentinel")?(C={containerRef:u,getNextFocusable:m},e[2]=C):C=e[2],N(C);let a;e[3]!==s?(a=n.jsxs("div",{className:o.AbsoluteTopRight,children:["Last key pressed: ",s]}),e[3]=s,e[4]=a):a=e[4];let x;e[5]===Symbol.for("react.memo_cache_sentinel")?(x=n.jsx(t,{children:"Apple"}),e[5]=x):x=e[5];let f;e[6]===Symbol.for("react.memo_cache_sentinel")?(f=n.jsx("strong",{children:"Use arrow keys to move focus within this box."}),e[6]=f):f=e[6];let g,d,y;e[7]===Symbol.for("react.memo_cache_sentinel")?(g=n.jsxs("div",{className:o.BorderedContainer,children:[f,n.jsxs("div",{className:o.GridContainer,ref:u,children:[n.jsx(t,{children:"Banana"}),n.jsx(t,{children:"Cantaloupe"}),n.jsx(t,{children:"Durian"}),n.jsx(t,{children:"Elderberry"}),n.jsx(t,{children:"Fig"}),n.jsx(t,{children:"Grapefruit"}),n.jsx(t,{children:"Honeydew"}),n.jsx(t,{children:"Jackfruit"}),n.jsx(t,{children:"Kiwi"})]})]}),d=n.jsx(t,{children:"Lemon"}),y=n.jsx(t,{children:"Mango"}),e[7]=g,e[8]=d,e[9]=y):(g=e[7],d=e[8],y=e[9]);let c;return e[10]!==a?(c=n.jsx(n.Fragment,{children:n.jsxs("div",{className:o.FlexColumnContainer,onKeyDownCapture:_,children:[a,x,g,d,y]})}),e[10]=a,e[11]=c):c=e[11],c},z=()=>{const e=D.c(32),[s,R]=k.useState("none");let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=Q=>{R(Q.key)},e[0]=r):r=e[0];const _=r;let u;e[1]===Symbol.for("react.memo_cache_sentinel")?(u={bindKeys:F.ArrowHorizontal|F.HomeAndEnd,focusInStrategy:"first"},e[1]=u):u=e[1];const{containerRef:A}=N(u);let m;e[2]===Symbol.for("react.memo_cache_sentinel")?(m={bindKeys:F.ArrowHorizontal|F.HomeAndEnd,focusInStrategy:"closest"},e[2]=m):m=e[2];const{containerRef:C}=N(m);let a;e[3]===Symbol.for("react.memo_cache_sentinel")?(a={bindKeys:F.ArrowHorizontal|F.HomeAndEnd,focusInStrategy:"previous"},e[3]=a):a=e[3];const{containerRef:x}=N(a),f=k.useRef(null);let g;e[4]===Symbol.for("react.memo_cache_sentinel")?(g=()=>{if(f.current)return Array.from(f.current.querySelectorAll("button"))[Math.floor(Math.random()*3)]},e[4]=g):g=e[4];const d=g;let y;e[5]===Symbol.for("react.memo_cache_sentinel")?(y={containerRef:f,bindKeys:F.ArrowHorizontal|F.HomeAndEnd,focusInStrategy:d},e[5]=y):y=e[5],N(y);let c;e[6]!==s?(c=n.jsxs("div",{className:o.AbsoluteTopRight,children:["Last key pressed: ",s]}),e[6]=s,e[7]=c):c=e[7];let l,b,h;e[8]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx(t,{children:"Apple"}),b=n.jsx(t,{children:"Banana"}),h=n.jsx(t,{children:"Cantaloupe"}),e[8]=l,e[9]=b,e[10]=h):(l=e[8],b=e[9],h=e[10]);const p=A;let B;e[11]===Symbol.for("react.memo_cache_sentinel")?(B=n.jsx("strong",{children:"“First” strategy (focus first focusable element)"}),e[11]=B):B=e[11];let i;e[12]===Symbol.for("react.memo_cache_sentinel")?(i=n.jsxs("div",{className:o.FlexRowContainer,children:[n.jsx(t,{children:"Banana"}),n.jsx(t,{children:"Cantaloupe"}),n.jsx(t,{children:"Durian"})]}),e[12]=i):i=e[12];let v;e[13]!==p?(v=n.jsxs("div",{className:o.BorderedContainer,ref:p,children:[B,i]}),e[13]=p,e[14]=v):v=e[14];const M=C;let w;e[15]===Symbol.for("react.memo_cache_sentinel")?(w=n.jsx("strong",{children:"“Closest” strategy (focus first or last depending on focus direction)"}),e[15]=w):w=e[15];let j;e[16]===Symbol.for("react.memo_cache_sentinel")?(j=n.jsxs("div",{className:o.FlexRowContainer,children:[n.jsx(t,{children:"Elderberry"}),n.jsx(t,{children:"Fig"}),n.jsx(t,{children:"Grapefruit"})]}),e[16]=j):j=e[16];let K;e[17]!==M?(K=n.jsxs("div",{className:o.BorderedContainer,ref:M,children:[w,j]}),e[17]=M,e[18]=K):K=e[18];const S=x;let E;e[19]===Symbol.for("react.memo_cache_sentinel")?(E=n.jsx("strong",{children:"“Previous” strategy (most recently focused element)"}),e[19]=E):E=e[19];let L;e[20]===Symbol.for("react.memo_cache_sentinel")?(L=n.jsxs("div",{className:o.FlexRowContainer,children:[n.jsx(t,{children:"Honeydew"}),n.jsx(t,{children:"Jackfruit"}),n.jsx(t,{children:"Kiwi"})]}),e[20]=L):L=e[20];let H;e[21]!==S?(H=n.jsxs("div",{className:o.BorderedContainer,ref:S,children:[E,L]}),e[21]=S,e[22]=H):H=e[22];let J;e[23]===Symbol.for("react.memo_cache_sentinel")?(J=n.jsx("strong",{children:"“Custom” strategy (choose randomly for this example)"}),e[23]=J):J=e[23];let V,$,q;e[24]===Symbol.for("react.memo_cache_sentinel")?(V=n.jsxs("div",{className:o.BorderedContainer,ref:f,children:[J,n.jsxs("div",{className:o.FlexRowContainer,children:[n.jsx(t,{children:"Lemon"}),n.jsx(t,{children:"Mango"}),n.jsx(t,{children:"Nectarine"})]})]}),$=n.jsx(t,{children:"Orange"}),q=n.jsx(t,{children:"Papaya"}),e[24]=V,e[25]=$,e[26]=q):(V=e[24],$=e[25],q=e[26]);let W;return e[27]!==v||e[28]!==K||e[29]!==H||e[30]!==c?(W=n.jsx(n.Fragment,{children:n.jsxs("div",{className:o.FlexColumnContainer,onKeyDownCapture:_,children:[c,l,b,h,v,K,H,V,$,q]})}),e[27]=v,e[28]=K,e[29]=H,e[30]=c,e[31]=W):W=e[31],W},O=()=>{const e=D.c(28),[s,R]=k.useState("none");let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=H=>{R(H.key)},e[0]=r):r=e[0];const _=r;let u;e[1]===Symbol.for("react.memo_cache_sentinel")?(u={bindKeys:F.ArrowVertical|F.JK|F.WS|F.Tab|F.PageUpDown|F.HomeAndEnd},e[1]=u):u=e[1];const{containerRef:A}=N(u);let m;e[2]===Symbol.for("react.memo_cache_sentinel")?(m={focusOutBehavior:"wrap",bindKeys:F.ArrowHorizontal},e[2]=m):m=e[2];const{containerRef:C}=N(m);let a;e[3]===Symbol.for("react.memo_cache_sentinel")?(a=n.jsxs(X,{className:o.MarginBottom3,children:["This story is very esoteric! It only exists to show some of the nuance of the arrow key focus behavior in different situations. Focus treatment within your component should be evaluated for your particular UX using the"," ",n.jsx(se,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard",inline:!0,children:"ARIA guidelines"}),"."]}),e[3]=a):a=e[3];let x;e[4]!==s?(x=n.jsxs("div",{className:o.AbsoluteTopRight,children:["Last key pressed: ",s]}),e[4]=s,e[5]=x):x=e[5];let f,g,d;e[6]===Symbol.for("react.memo_cache_sentinel")?(f=n.jsx(t,{children:"Apple"}),g=n.jsx(t,{children:"Banana"}),d=n.jsx(t,{children:"Cantaloupe"}),e[6]=f,e[7]=g,e[8]=d):(f=e[6],g=e[7],d=e[8]);const y=A;let c;e[9]===Symbol.for("react.memo_cache_sentinel")?(c=n.jsx("strong",{id:"focus-label",children:"Bound keys: Up, Down, PageUp, PageDown, W, S, J, K, Home, End, Tab"}),e[9]=c):c=e[9];let l,b;e[10]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("input",{style:{width:"250px"},type:"text",defaultValue:"Printable characters won't move focus","aria-labelledby":"focus-label"}),b=n.jsx(t,{children:"Regular button"}),e[10]=l,e[11]=b):(l=e[10],b=e[11]);let h;e[12]===Symbol.for("react.memo_cache_sentinel")?(h=n.jsxs("select",{"aria-labelledby":"focus-label",children:[n.jsx("option",{children:"Down arrow invokes dropdown"}),n.jsx("option",{children:"Unless Cmd (mac)/Ctrl (Windows)"}),n.jsx("option",{children:"Is held"})]}),e[12]=h):h=e[12];let p;e[13]===Symbol.for("react.memo_cache_sentinel")?(p=n.jsxs("div",{className:o.FlexColumnContainer,children:[l,b,h,n.jsx("textarea",{"aria-labelledby":"focus-label",style:{width:"250px",height:"95px"},defaultValue:"Up/Down only works when at beginning/end. PageUp and PageDown completely disabled. Printable characters will never move focus."})]}),e[13]=p):p=e[13];let B;e[14]!==y?(B=n.jsxs("div",{className:o.BorderedContainer,ref:y,children:[c,p]}),e[14]=y,e[15]=B):B=e[15];const i=C;let v;e[16]===Symbol.for("react.memo_cache_sentinel")?(v=n.jsx("label",{htmlFor:"focus-input",children:n.jsx("strong",{children:"Use Left Arrow and Right Arrow to move focus within this box. Focus is circular."})}),e[16]=v):v=e[16];let M;e[17]===Symbol.for("react.memo_cache_sentinel")?(M=n.jsx(t,{children:"Grapefruit"}),e[17]=M):M=e[17];let w;e[18]===Symbol.for("react.memo_cache_sentinel")?(w=n.jsxs("div",{className:o.FlexRowCenterContainer,children:[M,n.jsx("input",{id:"focus-input",style:{width:"300px"},type:"text",defaultValue:"Left/Right only work at beginning/end of input."}),n.jsx(t,{children:"Jackfruit"})]}),e[18]=w):w=e[18];let j;e[19]!==i?(j=n.jsxs("div",{className:o.BorderedContainer,ref:i,children:[v,w]}),e[19]=i,e[20]=j):j=e[20];let K,S,E;e[21]===Symbol.for("react.memo_cache_sentinel")?(K=n.jsx(t,{children:"Kiwi"}),S=n.jsx(t,{children:"Lemon"}),E=n.jsx(t,{children:"Mango"}),e[21]=K,e[22]=S,e[23]=E):(K=e[21],S=e[22],E=e[23]);let L;return e[24]!==B||e[25]!==j||e[26]!==x?(L=n.jsx(n.Fragment,{children:n.jsxs("div",{className:o.FlexColumnContainer,onKeyDownCapture:_,children:[a,x,f,g,d,B,j,K,S,E]})}),e[24]=B,e[25]=j,e[26]=x,e[27]=L):L=e[27],L},Z=()=>{const e=D.c(31),[s,R]=k.useState("none");let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=S=>{R(S.key)},e[0]=r):r=e[0];const _=r;let u;e[1]===Symbol.for("react.memo_cache_sentinel")?(u={bindKeys:F.ArrowVertical},e[1]=u):u=e[1];const{containerRef:A}=N(u),[m,C]=k.useState(3);let a;e[2]!==m?(a=()=>{C(m-1)},e[2]=m,e[3]=a):a=e[3];const x=a;let f;e[4]!==m?(f=()=>{C(m+1)},e[4]=m,e[5]=f):f=e[5];const g=f;let d;if(e[6]!==m){d=[];for(let S=0;S<m;++S)d.push(n.jsx("div",{children:n.jsx(t,{children:S+1},`button${S}`)}));e[6]=m,e[7]=d}else d=e[7];let y;e[8]===Symbol.for("react.memo_cache_sentinel")?(y=n.jsx(X,{className:o.MarginBottom3,children:"This story demonstrates that focusZone is consistent even when the container’s subtree changes."}),e[8]=y):y=e[8];let c;e[9]!==s?(c=n.jsxs("div",{className:o.AbsoluteTopRight,children:["Last key pressed: ",s]}),e[9]=s,e[10]=c):c=e[10];let l,b,h;e[11]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx(t,{children:"Apple"}),b=n.jsx(t,{children:"Banana"}),h=n.jsx(t,{children:"Cantaloupe"}),e[11]=l,e[12]=b,e[13]=h):(l=e[11],b=e[12],h=e[13]);const p=A;let B;e[14]===Symbol.for("react.memo_cache_sentinel")?(B=n.jsx("strong",{children:"Bound keys: Arrow Up and Arrow Down"}),e[14]=B):B=e[14];let i;e[15]!==d?(i=n.jsx("div",{className:o.FlexColumnContainer,children:d}),e[15]=d,e[16]=i):i=e[16];let v;e[17]!==i||e[18]!==p?(v=n.jsxs("div",{className:o.BorderedContainer,ref:p,children:[B,i]}),e[17]=i,e[18]=p,e[19]=v):v=e[19];let M;e[20]!==x?(M=n.jsx(t,{onClick:x,children:"Remove Button"}),e[20]=x,e[21]=M):M=e[21];let w;e[22]!==g?(w=n.jsx(t,{onClick:g,children:"Add Button"}),e[22]=g,e[23]=w):w=e[23];let j;e[24]!==M||e[25]!==w?(j=n.jsxs("div",{className:o.FlexRowContainer,children:[M,w]}),e[24]=M,e[25]=w,e[26]=j):j=e[26];let K;return e[27]!==v||e[28]!==j||e[29]!==c?(K=n.jsx(n.Fragment,{children:n.jsxs("div",{className:o.FlexColumnContainer,onKeyDownCapture:_,children:[y,c,l,b,h,v,j]})}),e[27]=v,e[28]=j,e[29]=c,e[30]=K):K=e[30],K},P=()=>{const e=D.c(16),[s,R]=k.useState("none");let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=B=>{R(B.key)},e[0]=r):r=e[0];const _=r,u=k.useRef(null),A=k.useRef(null);let m;e[1]===Symbol.for("react.memo_cache_sentinel")?(m={containerRef:u,bindKeys:F.ArrowVertical},e[1]=m):m=e[1],N(m);let C;e[2]===Symbol.for("react.memo_cache_sentinel")?(C={containerRef:A,bindKeys:F.ArrowHorizontal},e[2]=C):C=e[2],N(C);let a;e[3]!==s?(a=n.jsxs("div",{className:o.AbsoluteTopRight,children:["Last key pressed: ",s]}),e[3]=s,e[4]=a):a=e[4];let x,f;e[5]===Symbol.for("react.memo_cache_sentinel")?(x=n.jsx(t,{children:"Apple"}),f=n.jsx(t,{children:"Banana"}),e[5]=x,e[6]=f):(x=e[5],f=e[6]);let g,d,y;e[7]===Symbol.for("react.memo_cache_sentinel")?(g=n.jsx("strong",{children:"Bound keys: Arrow Up and Arrow Down"}),d=n.jsx("br",{}),y=n.jsx(t,{children:"Cantaloupe"}),e[7]=g,e[8]=d,e[9]=y):(g=e[7],d=e[8],y=e[9]);let c;e[10]===Symbol.for("react.memo_cache_sentinel")?(c=n.jsx("strong",{children:"Additional Bound keys: Arrow Left and Arrow Right"}),e[10]=c):c=e[10];let l,b,h;e[11]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsxs("div",{className:o.BorderedContainer,ref:u,children:[g,d,y,n.jsxs("div",{className:o.BorderedContainer,ref:A,children:[c,n.jsxs("div",{className:o.FlexColumnContainer,id:"list",children:[n.jsx(t,{children:"Durian"}),n.jsx(t,{children:"Elderberry"}),n.jsx(t,{children:"Fig"}),n.jsx(t,{children:"Grapefruit"})]})]}),n.jsx(t,{children:"Honeydew"})]}),b=n.jsx(t,{children:"Jackfruit"}),h=n.jsx(t,{children:"Kiwi"}),e[11]=l,e[12]=b,e[13]=h):(l=e[11],b=e[12],h=e[13]);let p;return e[14]!==a?(p=n.jsx(n.Fragment,{children:n.jsxs("div",{className:o.FlexColumnContainer,onKeyDownCapture:_,children:[a,x,f,l,b,h]})}),e[14]=a,e[15]=p):p=e[15],p},G=()=>{const e=D.c(17),[s,R]=k.useState("none");let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=i=>{R(i.key)},e[0]=r):r=e[0];const _=r,u=k.useRef(null),A=k.useRef(null),{theme:m}=oe();let C;e[1]!==m?.colors?(C={containerRef:u,activeDescendantFocus:A,bindKeys:F.ArrowVertical,onActiveDescendantChanged:(i,v)=>{i&&(i.style.outline=`2px solid ${m?.colors.accent.fg}`),v&&(v.style.outline="")},focusableElementFilter:he},e[1]=m?.colors,e[2]=C):C=e[2],N(C);let a;e[3]===Symbol.for("react.memo_cache_sentinel")?(a=n.jsx(X,{className:o.MarginBottom3,children:"This story demonstrates using the `aria-activedescendant` pattern for managing both a focused element and an active element. Below, you can focus the input box then use the up/down arrow keys to change the active descendant (dark blue outline)."}),e[3]=a):a=e[3];let x;e[4]!==s?(x=n.jsxs("div",{className:o.AbsoluteTopRight,children:["Last key pressed: ",s]}),e[4]=s,e[5]=x):x=e[5];let f,g,d;e[6]===Symbol.for("react.memo_cache_sentinel")?(f=n.jsx(t,{children:"Apple"}),g=n.jsx(t,{children:"Banana"}),d=n.jsx(t,{children:"Cantaloupe"}),e[6]=f,e[7]=g,e[8]=d):(f=e[6],g=e[7],d=e[8]);let y;e[9]===Symbol.for("react.memo_cache_sentinel")?(y=n.jsx("label",{htmlFor:"focus-input",children:n.jsx("strong",{children:"Bound keys: Arrow Up and Arrow Down"})}),e[9]=y):y=e[9];let c;e[10]===Symbol.for("react.memo_cache_sentinel")?(c=n.jsx("input",{ref:A,type:"text",defaultValue:"Focus remains here.","aria-controls":"list",id:"focus-input"}),e[10]=c):c=e[10];let l,b,h,p;e[11]===Symbol.for("react.memo_cache_sentinel")?(p=n.jsxs("div",{className:o.BorderedContainer,children:[y,n.jsxs("div",{className:o.FlexColumnContainer,children:[c,n.jsxs("div",{className:o.FlexColumnContainer,id:"list",ref:u,children:[n.jsx(t,{children:"Durian"}),n.jsx(t,{children:"Elderberry"}),n.jsx(t,{children:"Fig"}),n.jsx(t,{children:"Grapefruit"})]})]})]}),l=n.jsx(t,{children:"Honeydew"}),b=n.jsx(t,{children:"Jackfruit"}),h=n.jsx(t,{children:"Kiwi"}),e[11]=l,e[12]=b,e[13]=h,e[14]=p):(l=e[11],b=e[12],h=e[13],p=e[14]);let B;return e[15]!==x?(B=n.jsx(n.Fragment,{children:n.jsxs("div",{className:o.FlexColumnContainer,onKeyDownCapture:_,children:[a,x,f,g,d,p,l,b,h]})}),e[15]=x,e[16]=B):B=e[16],B};T.__docgenInfo={description:"",methods:[],displayName:"BasicFocusZone"};I.__docgenInfo={description:"",methods:[],displayName:"FocusOutBehavior"};U.__docgenInfo={description:"",methods:[],displayName:"CustomFocusMovement"};z.__docgenInfo={description:"",methods:[],displayName:"FocusInStrategy"};O.__docgenInfo={description:"",methods:[],displayName:"SpecialSituations"};Z.__docgenInfo={description:"",methods:[],displayName:"ChangingSubtree"};P.__docgenInfo={description:"",methods:[],displayName:"NestedZones"};G.__docgenInfo={description:"",methods:[],displayName:"ActiveDescendant"};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  // Display each key press in the top-right corner of the page as a visual aid
  const [lastKey, setLastKey] = useState('none');
  const reportKey = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    setLastKey(event.key);
  }, []);
  const [fzEnabled, setFzEnabled] = useState(true);
  const {
    containerRef
  } = useFocusZone({
    disabled: !fzEnabled
  }, [fzEnabled]);
  const toggleFz = useCallback(() => {
    setFzEnabled(!fzEnabled);
  }, [fzEnabled]);
  return <>
      <div className={classes.FlexColumnContainer} onKeyDownCapture={reportKey}>
        <div className={classes.AbsoluteTopRight}>Last key pressed: {lastKey}</div>
        <Button variant={fzEnabled ? 'danger' : 'primary'} onClick={toggleFz} className={classes.MarginBottom3}>
          {fzEnabled ? 'Disable' : 'Enable'} Focus Zone
        </Button>
        <MarginButton>Apple</MarginButton>
        <MarginButton>Banana</MarginButton>
        <MarginButton>Cantaloupe</MarginButton>
        <div className={classes.BorderedContainer} ref={containerRef as React.RefObject<HTMLDivElement>}>
          <strong>Use Up Arrow, Down Arrow, Home, and End to move focus within this box.</strong>
          <div className={classes.FlexColumnContainer}>
            <MarginButton>Durian</MarginButton>
            <MarginButton>Elderberry</MarginButton>
            <MarginButton>Fig</MarginButton>
          </div>
        </div>
        <MarginButton>Kiwi</MarginButton>
        <MarginButton>Lemon</MarginButton>
        <MarginButton>Mango</MarginButton>
      </div>
    </>;
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  // Display each key press in the top-right corner of the page as a visual aid
  const [lastKey, setLastKey] = useState('none');
  const reportKey = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    setLastKey(event.key);
  }, []);
  const {
    containerRef: containerRef1
  } = useFocusZone({
    focusOutBehavior: 'stop',
    bindKeys: FocusKeys.ArrowHorizontal | FocusKeys.HomeAndEnd
  });
  const {
    containerRef: containerRef2
  } = useFocusZone({
    focusOutBehavior: 'wrap',
    bindKeys: FocusKeys.ArrowHorizontal | FocusKeys.HomeAndEnd
  });
  return <>
      <div className={classes.FlexColumnContainer} onKeyDownCapture={reportKey}>
        <div className={classes.AbsoluteTopRight}>Last key pressed: {lastKey}</div>
        <MarginButton>Apple</MarginButton>
        <MarginButton>Banana</MarginButton>
        <MarginButton>Cantaloupe</MarginButton>
        <div className={classes.BorderedContainer} ref={containerRef1 as React.RefObject<HTMLDivElement>}>
          <strong>
            Use Left Arrow, Right Arrow, Home, and End to move focus within this box. Focus stops at the ends.
          </strong>

          <div className={classes.FlexRowContainer}>
            <MarginButton>Durian</MarginButton>
            <MarginButton>Elderberry</MarginButton>
            <MarginButton>Fig</MarginButton>
          </div>
        </div>
        <div className={classes.BorderedContainer} ref={containerRef2 as React.RefObject<HTMLDivElement>}>
          <strong>Use Left Arrow, Right Arrow, Home, and End to move focus within this box. Focus is circular.</strong>

          <div className={classes.FlexRowContainer}>
            <MarginButton>Grapefruit</MarginButton>
            <MarginButton>Honeydew</MarginButton>
            <MarginButton>Jackfruit</MarginButton>
          </div>
        </div>
        <MarginButton>Kiwi</MarginButton>
        <MarginButton>Lemon</MarginButton>
        <MarginButton>Mango</MarginButton>
      </div>
    </>;
}`,...I.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  // Display each key press in the top-right corner of the page as a visual aid
  const [lastKey, setLastKey] = useState('none');
  const reportKey = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    setLastKey(event.key);
  }, []);
  const containerRef = useRef<HTMLElement>(null);
  const getNextFocusable = useCallback((direction: Direction, from: Element | undefined, event: KeyboardEvent): HTMLElement | undefined => {
    const toEnd = direction === 'start' || direction === 'end';
    if (from && containerRef.current) {
      const currentIndex = getSiblingIndex(from);
      let nextIndex = currentIndex;
      if (['End', 'ArrowRight'].includes(event.key)) {
        while (nextIndex % 3 !== 2) {
          nextIndex += 1;
          if (!toEnd) {
            break;
          }
        }
      }
      if (['Home', 'ArrowLeft'].includes(event.key)) {
        while (nextIndex % 3 !== 0) {
          nextIndex -= 1;
          if (!toEnd) {
            break;
          }
        }
      }
      if (event.key === 'ArrowUp') {
        while (nextIndex - 3 >= 0) {
          nextIndex -= 3;
          if (!toEnd) {
            break;
          }
        }
      }
      if (event.key === 'ArrowDown') {
        while (nextIndex + 3 < 9) {
          nextIndex += 3;
          if (!toEnd) {
            break;
          }
        }
      }
      return containerRef.current.children[nextIndex] as HTMLElement;
    }
  }, [containerRef]);
  useFocusZone({
    containerRef,
    getNextFocusable
  });
  return <>
      <div className={classes.FlexColumnContainer} onKeyDownCapture={reportKey}>
        <div className={classes.AbsoluteTopRight}>Last key pressed: {lastKey}</div>
        <MarginButton>Apple</MarginButton>

        <div className={classes.BorderedContainer}>
          <strong>Use arrow keys to move focus within this box.</strong>
          <div className={classes.GridContainer} ref={containerRef as React.RefObject<HTMLDivElement>}>
            <MarginButton>Banana</MarginButton>
            <MarginButton>Cantaloupe</MarginButton>
            <MarginButton>Durian</MarginButton>
            <MarginButton>Elderberry</MarginButton>
            <MarginButton>Fig</MarginButton>
            <MarginButton>Grapefruit</MarginButton>
            <MarginButton>Honeydew</MarginButton>
            <MarginButton>Jackfruit</MarginButton>
            <MarginButton>Kiwi</MarginButton>
          </div>
        </div>
        <MarginButton>Lemon</MarginButton>
        <MarginButton>Mango</MarginButton>
      </div>
    </>;
}`,...U.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  // Display each key press in the top-right corner of the page as a visual aid
  const [lastKey, setLastKey] = useState('none');
  const reportKey = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    setLastKey(event.key);
  }, []);
  const {
    containerRef: firstContainerRef
  } = useFocusZone({
    bindKeys: FocusKeys.ArrowHorizontal | FocusKeys.HomeAndEnd,
    focusInStrategy: 'first'
  });
  const {
    containerRef: closestContainerRef
  } = useFocusZone({
    bindKeys: FocusKeys.ArrowHorizontal | FocusKeys.HomeAndEnd,
    focusInStrategy: 'closest'
  });
  const {
    containerRef: prevContainerRef
  } = useFocusZone({
    bindKeys: FocusKeys.ArrowHorizontal | FocusKeys.HomeAndEnd,
    focusInStrategy: 'previous'
  });
  const customContainerRef = useRef<HTMLElement>(null);
  const customStrategy = React.useCallback(() => {
    if (customContainerRef.current) {
      const buttons = Array.from(customContainerRef.current.querySelectorAll('button'));
      return buttons[Math.floor(Math.random() * 3)];
    }
  }, [customContainerRef]);
  useFocusZone({
    containerRef: customContainerRef,
    bindKeys: FocusKeys.ArrowHorizontal | FocusKeys.HomeAndEnd,
    focusInStrategy: customStrategy
  });
  return <>
      <div className={classes.FlexColumnContainer} onKeyDownCapture={reportKey}>
        <div className={classes.AbsoluteTopRight}>Last key pressed: {lastKey}</div>
        <MarginButton>Apple</MarginButton>
        <MarginButton>Banana</MarginButton>
        <MarginButton>Cantaloupe</MarginButton>
        <div className={classes.BorderedContainer} ref={firstContainerRef as React.RefObject<HTMLDivElement>}>
          <strong>&ldquo;First&rdquo; strategy (focus first focusable element)</strong>
          <div className={classes.FlexRowContainer}>
            <MarginButton>Banana</MarginButton>
            <MarginButton>Cantaloupe</MarginButton>
            <MarginButton>Durian</MarginButton>
          </div>
        </div>
        <div className={classes.BorderedContainer} ref={closestContainerRef as React.RefObject<HTMLDivElement>}>
          <strong>&ldquo;Closest&rdquo; strategy (focus first or last depending on focus direction)</strong>
          <div className={classes.FlexRowContainer}>
            <MarginButton>Elderberry</MarginButton>
            <MarginButton>Fig</MarginButton>
            <MarginButton>Grapefruit</MarginButton>
          </div>
        </div>
        <div className={classes.BorderedContainer} ref={prevContainerRef as React.RefObject<HTMLDivElement>}>
          <strong>&ldquo;Previous&rdquo; strategy (most recently focused element)</strong>
          <div className={classes.FlexRowContainer}>
            <MarginButton>Honeydew</MarginButton>
            <MarginButton>Jackfruit</MarginButton>
            <MarginButton>Kiwi</MarginButton>
          </div>
        </div>
        <div className={classes.BorderedContainer} ref={customContainerRef as React.RefObject<HTMLDivElement>}>
          <strong>&ldquo;Custom&rdquo; strategy (choose randomly for this example)</strong>
          <div className={classes.FlexRowContainer}>
            <MarginButton>Lemon</MarginButton>
            <MarginButton>Mango</MarginButton>
            <MarginButton>Nectarine</MarginButton>
          </div>
        </div>
        <MarginButton>Orange</MarginButton>
        <MarginButton>Papaya</MarginButton>
      </div>
    </>;
}`,...z.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  // Display each key press in the top-right corner of the page as a visual aid
  const [lastKey, setLastKey] = useState('none');
  const reportKey = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    setLastKey(event.key);
  }, []);
  const {
    containerRef: vContainerRef
  } = useFocusZone({
    bindKeys: FocusKeys.ArrowVertical | FocusKeys.JK | FocusKeys.WS | FocusKeys.Tab | FocusKeys.PageUpDown | FocusKeys.HomeAndEnd
  });
  const {
    containerRef: hContainerRef
  } = useFocusZone({
    focusOutBehavior: 'wrap',
    bindKeys: FocusKeys.ArrowHorizontal
  });
  return <>
      <div className={classes.FlexColumnContainer} onKeyDownCapture={reportKey}>
        <Flash className={classes.MarginBottom3}>
          This story is very esoteric! It only exists to show some of the nuance of the arrow key focus behavior in
          different situations. Focus treatment within your component should be evaluated for your particular UX using
          the{' '}
          <Link href="https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard" inline>
            ARIA guidelines
          </Link>
          .
        </Flash>
        <div className={classes.AbsoluteTopRight}>Last key pressed: {lastKey}</div>
        <MarginButton>Apple</MarginButton>
        <MarginButton>Banana</MarginButton>
        <MarginButton>Cantaloupe</MarginButton>
        <div className={classes.BorderedContainer} ref={vContainerRef as React.RefObject<HTMLDivElement>}>
          <strong id="focus-label">Bound keys: Up, Down, PageUp, PageDown, W, S, J, K, Home, End, Tab</strong>
          <div className={classes.FlexColumnContainer}>
            <input style={{
            width: '250px'
          }} type="text" defaultValue="Printable characters won't move focus" aria-labelledby="focus-label" />

            <MarginButton>Regular button</MarginButton>
            <select aria-labelledby="focus-label">
              <option>Down arrow invokes dropdown</option>
              <option>Unless Cmd (mac)/Ctrl (Windows)</option>
              <option>Is held</option>
            </select>
            <textarea aria-labelledby="focus-label" style={{
            width: '250px',
            height: '95px'
          }} defaultValue="Up/Down only works when at beginning/end. PageUp and PageDown completely disabled. Printable characters will never move focus."></textarea>
          </div>
        </div>
        <div className={classes.BorderedContainer} ref={hContainerRef as React.RefObject<HTMLDivElement>}>
          <label htmlFor="focus-input">
            <strong>Use Left Arrow and Right Arrow to move focus within this box. Focus is circular.</strong>
          </label>

          <div className={classes.FlexRowCenterContainer}>
            <MarginButton>Grapefruit</MarginButton>
            <input id="focus-input" style={{
            width: '300px'
          }} type="text" defaultValue="Left/Right only work at beginning/end of input." />
            <MarginButton>Jackfruit</MarginButton>
          </div>
        </div>
        <MarginButton>Kiwi</MarginButton>
        <MarginButton>Lemon</MarginButton>
        <MarginButton>Mango</MarginButton>
      </div>
    </>;
}`,...O.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  // Display each key press in the top-right corner of the page as a visual aid
  const [lastKey, setLastKey] = useState('none');
  const reportKey = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    setLastKey(event.key);
  }, []);
  const {
    containerRef
  } = useFocusZone({
    bindKeys: FocusKeys.ArrowVertical
  });
  const [buttonCount, setButtonCount] = useState(3);
  const removeButton = useCallback(() => {
    setButtonCount(buttonCount - 1);
  }, [setButtonCount, buttonCount]);
  const addButton = useCallback(() => {
    setButtonCount(buttonCount + 1);
  }, [setButtonCount, buttonCount]);
  const buttons: JSX.Element[] = [];
  for (let i = 0; i < buttonCount; ++i) {
    buttons.push(<div>
        <MarginButton key={\`button\${i}\`}>{i + 1}</MarginButton>
      </div>);
  }
  return <>
      <div className={classes.FlexColumnContainer} onKeyDownCapture={reportKey}>
        <Flash className={classes.MarginBottom3}>
          This story demonstrates that focusZone is consistent even when the container&rsquo;s subtree changes.
        </Flash>
        <div className={classes.AbsoluteTopRight}>Last key pressed: {lastKey}</div>
        <MarginButton>Apple</MarginButton>
        <MarginButton>Banana</MarginButton>
        <MarginButton>Cantaloupe</MarginButton>
        <div className={classes.BorderedContainer} ref={containerRef as React.RefObject<HTMLDivElement>}>
          <strong>Bound keys: Arrow Up and Arrow Down</strong>
          <div className={classes.FlexColumnContainer}>{buttons}</div>
        </div>
        <div className={classes.FlexRowContainer}>
          <MarginButton onClick={removeButton}>Remove Button</MarginButton>
          <MarginButton onClick={addButton}>Add Button</MarginButton>
        </div>
      </div>
    </>;
}`,...Z.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  // Display each key press in the top-right corner of the page as a visual aid
  const [lastKey, setLastKey] = useState('none');
  const reportKey = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    setLastKey(event.key);
  }, []);
  const outerContainerRef = useRef<HTMLElement>(null);
  const innerContainerRef = useRef<HTMLElement>(null);
  useFocusZone({
    containerRef: outerContainerRef,
    bindKeys: FocusKeys.ArrowVertical
  });
  useFocusZone({
    containerRef: innerContainerRef,
    bindKeys: FocusKeys.ArrowHorizontal
  });
  return <>
      <div className={classes.FlexColumnContainer} onKeyDownCapture={reportKey}>
        <div className={classes.AbsoluteTopRight}>Last key pressed: {lastKey}</div>
        <MarginButton>Apple</MarginButton>
        <MarginButton>Banana</MarginButton>
        <div className={classes.BorderedContainer} ref={outerContainerRef as React.RefObject<HTMLDivElement>}>
          <strong>Bound keys: Arrow Up and Arrow Down</strong>
          <br />
          <MarginButton>Cantaloupe</MarginButton>
          <div className={classes.BorderedContainer} ref={innerContainerRef as React.RefObject<HTMLDivElement>}>
            <strong>Additional Bound keys: Arrow Left and Arrow Right</strong>
            <div className={classes.FlexColumnContainer} id="list">
              <MarginButton>Durian</MarginButton>
              <MarginButton>Elderberry</MarginButton>
              <MarginButton>Fig</MarginButton>
              <MarginButton>Grapefruit</MarginButton>
            </div>
          </div>
          <MarginButton>Honeydew</MarginButton>
        </div>
        <MarginButton>Jackfruit</MarginButton>
        <MarginButton>Kiwi</MarginButton>
      </div>
    </>;
}`,...P.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  // Display each key press in the top-right corner of the page as a visual aid
  const [lastKey, setLastKey] = useState('none');
  const reportKey = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    setLastKey(event.key);
  }, []);
  const containerRef = useRef<HTMLElement>(null);
  const controllingElementRef = useRef<HTMLElement>(null);
  const {
    theme: themeFromContext
  } = useTheme();
  useFocusZone({
    containerRef,
    activeDescendantFocus: controllingElementRef,
    bindKeys: FocusKeys.ArrowVertical,
    onActiveDescendantChanged: (current, previous) => {
      if (current) {
        current.style.outline = \`2px solid \${themeFromContext?.colors.accent.fg}\`;
      }
      if (previous) {
        previous.style.outline = '';
      }
    },
    focusableElementFilter: elem => elem instanceof HTMLButtonElement
  });
  return <>
      <div className={classes.FlexColumnContainer} onKeyDownCapture={reportKey}>
        <Flash className={classes.MarginBottom3}>
          This story demonstrates using the \`aria-activedescendant\` pattern for managing both a focused element and an
          active element. Below, you can focus the input box then use the up/down arrow keys to change the active
          descendant (dark blue outline).
        </Flash>
        <div className={classes.AbsoluteTopRight}>Last key pressed: {lastKey}</div>
        <MarginButton>Apple</MarginButton>
        <MarginButton>Banana</MarginButton>
        <MarginButton>Cantaloupe</MarginButton>
        <div className={classes.BorderedContainer}>
          <label htmlFor="focus-input">
            <strong>Bound keys: Arrow Up and Arrow Down</strong>
          </label>
          <div className={classes.FlexColumnContainer}>
            <input ref={controllingElementRef as React.RefObject<HTMLInputElement>} type="text" defaultValue="Focus remains here." aria-controls="list" id="focus-input" />
            <div className={classes.FlexColumnContainer} id="list" ref={containerRef as React.RefObject<HTMLDivElement>}>
              <MarginButton>Durian</MarginButton>
              <MarginButton>Elderberry</MarginButton>
              <MarginButton>Fig</MarginButton>
              <MarginButton>Grapefruit</MarginButton>
            </div>
          </div>
        </div>
        <MarginButton>Honeydew</MarginButton>
        <MarginButton>Jackfruit</MarginButton>
        <MarginButton>Kiwi</MarginButton>
      </div>
    </>;
}`,...G.parameters?.docs?.source}}};function he(e){return e instanceof HTMLButtonElement}const He=["BasicFocusZone","FocusOutBehavior","CustomFocusMovement","FocusInStrategy","SpecialSituations","ChangingSubtree","NestedZones","ActiveDescendant"];export{G as ActiveDescendant,T as BasicFocusZone,Z as ChangingSubtree,U as CustomFocusMovement,z as FocusInStrategy,I as FocusOutBehavior,P as NestedZones,O as SpecialSituations,He as __namedExportsOrder,De as default};
