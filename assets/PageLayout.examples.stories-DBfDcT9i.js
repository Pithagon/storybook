import{d as be,R,j as n}from"./iframe-Cfz2vXeE.js";import{P as F}from"./PageLayout-9NXxh8HL.js";import{P as _}from"./Placeholder-CWr6vJjZ.js";import{q as Ce,aw as xe}from"./index.esm-C1WN7kEu.js";import{N as P}from"./NavList-esDwzPCM.js";import{B as ve}from"./Breadcrumbs-DTy6lVDF.js";import{D as Ie}from"./Dialog-BYWFp9hz.js";import{A as u}from"./index-C-OhZ25x.js";import{L as je}from"./LinkButton-D-EvgNXE.js";import{B as ye}from"./Button-3sCteC9V.js";import{F as we}from"./Flash-CFeEV9BS.js";import"./preload-helper-D9Z9MdNV.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./environment-DRRHKtsv.js";import"./useOverflow-CIpObA8I.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./user-agent-DiCyFeS1.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./useResizeObserver-CkcKl7_1.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./useFeatureFlag-paATTdb3.js";import"./Details-CeoVu8Bo.js";import"./useMergedRefs-CMoMpGtu.js";import"./useFocusTrap-CL_Yl_fl.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./event-listener-signal-Pp6mWBoo.js";import"./useFocusZone-BvuuCBlY.js";import"./focus-zone-ZDpdvBtN.js";import"./Portal-BKCn1yDJ.js";import"./ScrollableRegion-CKacTlaY.js";import"./Link-Dm7wEaum.js";import"./Heading-Axc3-HQM.js";import"./Truncate-DUc3hzfC.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";const Re="prc-PageLayout-ResponsiveFlash-Ag072",Be="prc-PageLayout-BreadcrumbHeaderRow-p0FPX",Ae="prc-PageLayout-HeaderRow-0QeqG",_e="prc-PageLayout-ResponsiveBox-gSebB",oe={ResponsiveFlash:Re,BreadcrumbHeaderRow:Be,HeaderRow:Ae,ResponsiveBox:_e},Qt={title:"Components/PageLayout/Examples",component:F},ue=()=>{const e=be.c(40),[t,V]=R.useState(window.location.hash);let H,N;e[0]===Symbol.for("react.memo_cache_sentinel")?(H=()=>{const I=()=>{V(window.location.hash)};return window.addEventListener("hashchange",I),()=>{window.removeEventListener("hashchange",I)}},N=[],e[0]=H,e[1]=N):(H=e[0],N=e[1]),R.useEffect(H,N);let G;e[2]===Symbol.for("react.memo_cache_sentinel")?(G=n.jsx(we,{className:oe.ResponsiveFlash,children:"Resize your browser window to see the responsive behavior of the parent-detail pattern."}),e[2]=G):G=e[2];const S=t==="#index";let B;e[3]!==S?(B={narrow:S,regular:!0,wide:!0},e[3]=S,e[4]=B):B=e[4];let y;e[5]===Symbol.for("react.memo_cache_sentinel")?(y=n.jsx(je,{href:"#index",leadingVisual:Ce,variant:"invisible",children:"Pages"}),e[5]=y):y=e[5];let c;e[6]!==B?(c=n.jsx(F.Header,{hidden:B,children:y}),e[6]=B,e[7]=c):c=e[7];const w=t!=="#index";let m;e[8]!==w?(m={narrow:w,regular:!1,wide:!1},e[8]=w,e[9]=m):m=e[9];const b=!t||t==="#index"||t==="#fruits"?"page":void 0;let p;e[10]!==b?(p=n.jsx(P.Item,{href:"#fruits","aria-current":b,children:"Fruits"}),e[10]=b,e[11]=p):p=e[11];const v=t==="#vegetables"?"page":void 0;let f;e[12]!==v?(f=n.jsx(P.Item,{href:"#vegetables","aria-current":v,children:"Vegetables"}),e[12]=v,e[13]=f):f=e[13];const L=t==="#animals"?"page":void 0;let r;e[14]!==L?(r=n.jsx(P.Item,{href:"#animals","aria-current":L,children:"Animals"}),e[14]=L,e[15]=r):r=e[15];let g;e[16]!==p||e[17]!==f||e[18]!==r?(g=n.jsxs(P,{children:[p,f,r]}),e[16]=p,e[17]=f,e[18]=r,e[19]=g):g=e[19];let d;e[20]!==g||e[21]!==m?(d=n.jsx(F.Pane,{position:"start",hidden:m,"aria-label":"Side pane",children:g}),e[20]=g,e[21]=m,e[22]=d):d=e[22];const x=t==="#index";let a;e[23]!==x?(a={narrow:x,regular:!1,wide:!1},e[23]=x,e[24]=a):a=e[24];let s;e[25]!==t?(s=!t||t==="#index"||t==="#fruits"?n.jsx(_,{height:640,label:"Fruits page content"}):null,e[25]=t,e[26]=s):s=e[26];let h;e[27]!==t?(h=t==="#vegetables"?n.jsx(_,{height:640,label:"Vegetables page content"}):null,e[27]=t,e[28]=h):h=e[28];let i;e[29]!==t?(i=t==="#animals"?n.jsx(_,{height:640,label:"Animals page content"}):null,e[29]=t,e[30]=i):i=e[30];let l;e[31]!==a||e[32]!==s||e[33]!==h||e[34]!==i?(l=n.jsxs(F.Content,{hidden:a,children:[s,h,i]}),e[31]=a,e[32]=s,e[33]=h,e[34]=i,e[35]=l):l=e[35];let o;return e[36]!==d||e[37]!==l||e[38]!==c?(o=n.jsxs(n.Fragment,{children:[G,n.jsxs(F,{containerWidth:"full",children:[c,d,l]})]}),e[36]=d,e[37]=l,e[38]=c,e[39]=o):o=e[39],o};ue.storyName="Parent-detail (w/ back arrow)";const de=()=>{const e=be.c(61),[t,V]=R.useState(window.location.hash);let H;e[0]!==t?(H=()=>{switch(t){case"#fruits":case"#index":case"#new-fruit":return"Fruits";case"#vegetables":return"Vegetables";case"#animals":return"Animals";default:return"Detail"}},e[0]=t,e[1]=H):H=e[1];const N=H;let G,S;e[2]===Symbol.for("react.memo_cache_sentinel")?(G=()=>{const K=()=>{V(window.location.hash)};return window.addEventListener("hashchange",K),()=>{window.removeEventListener("hashchange",K)}},S=[],e[2]=G,e[3]=S):(G=e[2],S=e[3]),R.useEffect(G,S);let B;e[4]===Symbol.for("react.memo_cache_sentinel")?(B=n.jsx(we,{className:oe.ResponsiveFlash,children:"Resize your browser window to see the responsive behavior of the parent-detail pattern."}),e[4]=B):B=e[4];const y=t==="#index";let c;e[5]!==y?(c={narrow:y,regular:!0,wide:!0},e[5]=y,e[6]=c):c=e[6];let w;e[7]===Symbol.for("react.memo_cache_sentinel")?(w=n.jsx(ve.Item,{href:"#index",children:"Pages"}),e[7]=w):w=e[7];const m=t==="#new-fruit"?"#fruits":void 0;let b;e[8]===Symbol.for("react.memo_cache_sentinel")?(b=["#new-fruit","#index"],e[8]=b):b=e[8];const p=b.includes(t),v=N();let f;e[9]!==v||e[10]!==m||e[11]!==p?(f=n.jsx(ve.Item,{href:m,selected:p,children:v}),e[9]=v,e[10]=m,e[11]=p,e[12]=f):f=e[12];let L;e[13]!==t?(L=t==="#new-fruit"?n.jsx(ve.Item,{selected:!0,children:"Child"}):null,e[13]=t,e[14]=L):L=e[14];let r;e[15]!==f||e[16]!==L?(r=n.jsxs(ve,{children:[w,f,L]}),e[15]=f,e[16]=L,e[17]=r):r=e[17];let g;e[18]!==t?(g=!t||t==="#index"||t==="#fruits"?n.jsx(je,{href:"#new-fruit",children:"New fruit"}):null,e[18]=t,e[19]=g):g=e[19];let d;e[20]!==r||e[21]!==g?(d=n.jsxs("div",{className:oe.BreadcrumbHeaderRow,children:[r,g]}),e[20]=r,e[21]=g,e[22]=d):d=e[22];let x;e[23]!==d||e[24]!==c?(x=n.jsx(F.Header,{hidden:c,children:d}),e[23]=d,e[24]=c,e[25]=x):x=e[25];const a=t!=="#index";let s;e[26]!==a?(s={narrow:a,regular:!1,wide:!1},e[26]=a,e[27]=s):s=e[27];const h=!t||t==="#index"||t==="#fruits"?"page":void 0;let i;e[28]!==h?(i=n.jsx(P.Item,{href:"#fruits","aria-current":h,children:"Fruits"}),e[28]=h,e[29]=i):i=e[29];const l=t==="#vegetables"?"page":void 0;let o;e[30]!==l?(o=n.jsx(P.Item,{href:"#vegetables","aria-current":l,children:"Vegetables"}),e[30]=l,e[31]=o):o=e[31];const I=t==="#animals"?"page":void 0;let j;e[32]!==I?(j=n.jsx(P.Item,{href:"#animals","aria-current":I,children:"Animals"}),e[32]=I,e[33]=j):j=e[33];let O;e[34]!==i||e[35]!==o||e[36]!==j?(O=n.jsxs(P,{children:[i,o,j]}),e[34]=i,e[35]=o,e[36]=j,e[37]=O):O=e[37];let T;e[38]!==s||e[39]!==O?(T=n.jsx(F.Pane,{position:"start",hidden:s,"aria-label":"Side pane",children:O}),e[38]=s,e[39]=O,e[40]=T):T=e[40];const M=t==="#index";let $;e[41]!==M?($={narrow:M,regular:!1,wide:!1},e[41]=M,e[42]=$):$=e[42];let z;e[43]!==t?(z=!t||t==="#index"||t==="#fruits"?n.jsx(_,{height:640,label:"Fruits page content"}):null,e[43]=t,e[44]=z):z=e[44];let C;e[45]!==t?(C=t==="#vegetables"?n.jsx(_,{height:640,label:"Vegetables page content"}):null,e[45]=t,e[46]=C):C=e[46];let k;e[47]!==t?(k=t==="#animals"?n.jsx(_,{height:640,label:"Animals page content"}):null,e[47]=t,e[48]=k):k=e[48];let W;e[49]!==t?(W=t==="#new-fruit"?n.jsx(_,{height:640,label:"New fruit page content"}):null,e[49]=t,e[50]=W):W=e[50];let E;e[51]!==$||e[52]!==z||e[53]!==C||e[54]!==k||e[55]!==W?(E=n.jsxs(F.Content,{hidden:$,children:[z,C,k,W]}),e[51]=$,e[52]=z,e[53]=C,e[54]=k,e[55]=W,e[56]=E):E=e[56];let D;return e[57]!==x||e[58]!==T||e[59]!==E?(D=n.jsxs(n.Fragment,{children:[B,n.jsxs(F,{containerWidth:"full",children:[x,T,E]})]}),e[57]=x,e[58]=T,e[59]=E,e[60]=D):D=e[60],D};de.storyName="Parent-detail (w/ breadcrumbs)";const me=()=>{const e=be.c(35),[t,V]=R.useState(window.location.hash),[H,N]=R.useState(!1),G=R.useRef(null);let S;e[0]===Symbol.for("react.memo_cache_sentinel")?(S=()=>N(!1),e[0]=S):S=e[0];const B=S;let y,c;e[1]===Symbol.for("react.memo_cache_sentinel")?(y=()=>{const j=()=>{V(window.location.hash)};return window.addEventListener("hashchange",j),()=>{window.removeEventListener("hashchange",j)}},c=[],e[1]=y,e[2]=c):(y=e[1],c=e[2]),R.useEffect(y,c);let w;e[3]===Symbol.for("react.memo_cache_sentinel")?(w=n.jsx(we,{className:oe.ResponsiveFlash,children:"Resize your browser window to see the responsive behavior of the filter sidebar pattern."}),e[3]=w):w=e[3];let m;e[4]===Symbol.for("react.memo_cache_sentinel")?(m={narrow:!1,regular:!0,wide:!0},e[4]=m):m=e[4];let b;e[5]===Symbol.for("react.memo_cache_sentinel")?(b=n.jsx(ye,{ref:G,onClick:()=>N(!0),leadingVisual:xe,children:"Filter"}),e[5]=b):b=e[5];let p;e[6]!==H?(p=H&&n.jsx(Ie,{title:"Filter",onClose:B,position:{narrow:"bottom"},children:n.jsxs(u,{children:[n.jsx(u.LinkItem,{href:"#red",children:"Red"}),n.jsx(u.LinkItem,{href:"#blue",children:"Vegetables"}),n.jsx(u.LinkItem,{href:"#green",children:"Animals"})]})}),e[6]=H,e[7]=p):p=e[7];let v;e[8]!==p?(v=n.jsxs(F.Header,{hidden:m,children:[b,p]}),e[8]=p,e[9]=v):v=e[9];let f;e[10]===Symbol.for("react.memo_cache_sentinel")?(f={narrow:!0,regular:!1,wide:!1},e[10]=f):f=e[10];const L=!t||t==="#index"||t==="#red"?"page":void 0;let r;e[11]!==L?(r=n.jsx(P.Item,{href:"#red","aria-current":L,children:"Red"}),e[11]=L,e[12]=r):r=e[12];const g=t==="#blue"?"page":void 0;let d;e[13]!==g?(d=n.jsx(P.Item,{href:"#blue","aria-current":g,children:"Blue"}),e[13]=g,e[14]=d):d=e[14];const x=t==="#green"?"page":void 0;let a;e[15]!==x?(a=n.jsx(P.Item,{href:"#green","aria-current":x,children:"Green"}),e[15]=x,e[16]=a):a=e[16];let s;e[17]!==r||e[18]!==d||e[19]!==a?(s=n.jsx(F.Pane,{position:"start",hidden:f,"aria-label":"Side pane",children:n.jsxs(P,{children:[r,d,a]})}),e[17]=r,e[18]=d,e[19]=a,e[20]=s):s=e[20];let h;e[21]!==t?(h=!t||t==="#index"||t==="#red"?n.jsx(_,{height:640,label:"Red things"}):null,e[21]=t,e[22]=h):h=e[22];let i;e[23]!==t?(i=t==="#blue"?n.jsx(_,{height:640,label:"Blue things"}):null,e[23]=t,e[24]=i):i=e[24];let l;e[25]!==t?(l=t==="#green"?n.jsx(_,{height:640,label:"Green things"}):null,e[25]=t,e[26]=l):l=e[26];let o;e[27]!==h||e[28]!==i||e[29]!==l?(o=n.jsxs(F.Content,{children:[h,i,l]}),e[27]=h,e[28]=i,e[29]=l,e[30]=o):o=e[30];let I;return e[31]!==s||e[32]!==o||e[33]!==v?(I=n.jsxs(n.Fragment,{children:[w,n.jsxs(F,{containerWidth:"full",children:[v,s,o]})]}),e[31]=s,e[32]=o,e[33]=v,e[34]=I):I=e[34],I};me.storyName="Filters (btm sheet on narrow)";const fe=()=>{const e=be.c(35),[t,V]=R.useState(window.location.hash),[H,N]=R.useState(!1),G=R.useRef(null);let S;e[0]===Symbol.for("react.memo_cache_sentinel")?(S=()=>N(!1),e[0]=S):S=e[0];const B=S;let y,c;e[1]===Symbol.for("react.memo_cache_sentinel")?(y=()=>{const j=()=>{V(window.location.hash)};return window.addEventListener("hashchange",j),()=>{window.removeEventListener("hashchange",j)}},c=[],e[1]=y,e[2]=c):(y=e[1],c=e[2]),R.useEffect(y,c);let w;e[3]===Symbol.for("react.memo_cache_sentinel")?(w=n.jsx(we,{className:oe.ResponsiveFlash,children:"Resize your browser window to see the responsive behavior of the filter sidebar pattern."}),e[3]=w):w=e[3];let m;e[4]===Symbol.for("react.memo_cache_sentinel")?(m={narrow:!1,regular:!0,wide:!0},e[4]=m):m=e[4];let b;e[5]===Symbol.for("react.memo_cache_sentinel")?(b=n.jsx(ye,{ref:G,onClick:()=>N(!0),leadingVisual:xe,children:"Filter"}),e[5]=b):b=e[5];let p;e[6]!==H?(p=H&&n.jsx(Ie,{title:"Filter",onClose:B,position:{narrow:"bottom"},children:n.jsxs(u,{children:[n.jsx(u.LinkItem,{href:"#red",children:"Red"}),n.jsx(u.LinkItem,{href:"#blue",children:"Vegetables"}),n.jsx(u.LinkItem,{href:"#green",children:"Animals"})]})}),e[6]=H,e[7]=p):p=e[7];let v;e[8]!==p?(v=n.jsxs(F.Header,{hidden:m,children:[b,p]}),e[8]=p,e[9]=v):v=e[9];let f;e[10]===Symbol.for("react.memo_cache_sentinel")?(f={narrow:!0,regular:!1,wide:!1},e[10]=f):f=e[10];const L=!t||t==="#index"||t==="#red"?"page":void 0;let r;e[11]!==L?(r=n.jsx(P.Item,{href:"#red","aria-current":L,children:"Red"}),e[11]=L,e[12]=r):r=e[12];const g=t==="#blue"?"page":void 0;let d;e[13]!==g?(d=n.jsx(P.Item,{href:"#blue","aria-current":g,children:"Blue"}),e[13]=g,e[14]=d):d=e[14];const x=t==="#green"?"page":void 0;let a;e[15]!==x?(a=n.jsx(P.Item,{href:"#green","aria-current":x,children:"Green"}),e[15]=x,e[16]=a):a=e[16];let s;e[17]!==r||e[18]!==d||e[19]!==a?(s=n.jsx(F.Pane,{position:"start",hidden:f,"aria-label":"Side pane",children:n.jsxs(P,{children:[r,d,a]})}),e[17]=r,e[18]=d,e[19]=a,e[20]=s):s=e[20];let h;e[21]!==t?(h=!t||t==="#index"||t==="#red"?n.jsx(_,{height:640,label:"Red things"}):null,e[21]=t,e[22]=h):h=e[22];let i;e[23]!==t?(i=t==="#blue"?n.jsx(_,{height:640,label:"Blue things"}):null,e[23]=t,e[24]=i):i=e[24];let l;e[25]!==t?(l=t==="#green"?n.jsx(_,{height:640,label:"Green things"}):null,e[25]=t,e[26]=l):l=e[26];let o;e[27]!==h||e[28]!==i||e[29]!==l?(o=n.jsxs(F.Content,{children:[h,i,l]}),e[27]=h,e[28]=i,e[29]=l,e[30]=o):o=e[30];let I;return e[31]!==s||e[32]!==o||e[33]!==v?(I=n.jsxs(n.Fragment,{children:[w,n.jsxs(F,{containerWidth:"full",children:[v,s,o]})]}),e[31]=s,e[32]=o,e[33]=v,e[34]=I):I=e[34],I};fe.storyName="Filters (action menu on narrow)";const ge=()=>{const e=be.c(68),[t,V]=R.useState(window.location.hash),[H,N]=R.useState(!1),G=R.useRef(null),S={animals:[{name:"Blue Tang Fish",color:"blue"},{name:"Poison Dart Frogs",color:"blue"},{name:"Scarlet Macaws",color:"red"},{name:"Foxes",color:"red"},{name:"Iguanas",color:"green"},{name:"Parakeets",color:"green"}],vegetables:[{name:"Blue Corn",color:"blue"},{name:"Blue Potatoes",color:"blue"},{name:"Red Bell Peppers",color:"red"},{name:"Tomatoes",color:"red"},{name:"Broccoli",color:"green"},{name:"String Beans",color:"green"}],fruits:[{name:"Blueberries",color:"blue"},{name:"Damson Plums",color:"blue"},{name:"Apples",color:"red"},{name:"Strawberries",color:"red"},{name:"Kiwis",color:"green"},{name:"Barlett Pears",color:"green"}]},B=[{hash:"#fruits",name:"Fruits"},{hash:"#vegetables",name:"Vegetables"},{hash:"#animals",name:"Animals"}],y=Ne;let c;e[0]===Symbol.for("react.memo_cache_sentinel")?(c=(A,Z)=>{const{hash:Le,filter:Fe}=y(window.location.hash),Pe=A||Le||"#fruits",He=Z||Fe||"";return`${Pe}${He?`&filter=${He}`:""}`},e[0]=c):c=e[0];const w=c;let m;e[1]===Symbol.for("react.memo_cache_sentinel")?(m=A=>{window.location.href=w(void 0,A)},e[1]=m):m=e[1];const b=m;let p;e[2]===Symbol.for("react.memo_cache_sentinel")?(p=()=>N(!1),e[2]=p):p=e[2];const v=p,f=A=>S[A].filter(Z=>t.includes("filter")?t.includes(`filter=${Z.color}`):!0);let L,r;e[3]===Symbol.for("react.memo_cache_sentinel")?(L=()=>{const A=()=>{V(window.location.hash)};return window.addEventListener("hashchange",A),()=>{window.removeEventListener("hashchange",A)}},r=[],e[3]=L,e[4]=r):(L=e[3],r=e[4]),R.useEffect(L,r);let g;e[5]===Symbol.for("react.memo_cache_sentinel")?(g=n.jsx(we,{className:oe.ResponsiveFlash,children:"Resize your browser window to see the responsive behavior of the filter sidebar pattern."}),e[5]=g):g=e[5];const d=F,x="full";let a;e[6]!==t?(a=t.includes("#index"),e[6]=t,e[7]=a):a=e[7];let s;e[8]!==a?(s={narrow:a,regular:!0,wide:!0},e[8]=a,e[9]=s):s=e[9];let h;e[10]===Symbol.for("react.memo_cache_sentinel")?(h=n.jsx(ye,{ref:G,onClick:()=>N(!0),leadingVisual:xe,children:"Filter"}),e[10]=h):h=e[10];const i=H&&n.jsx(Ie,{title:"Filter",onClose:v,position:{narrow:"bottom"},children:n.jsxs(u,{children:[n.jsxs(u.Group,{children:[n.jsx(u.GroupHeading,{children:"Categories"}),B.map(A=>n.jsx(u.LinkItem,{href:A.hash,active:A.hash==="#fruits"&&!t||t.includes("#index")||t.includes(A.hash),children:A.name},A.hash))]}),n.jsx(u.Divider,{}),n.jsxs(u.Group,{selectionVariant:"single",children:[n.jsx(u.GroupHeading,{children:"Colors"}),n.jsx(u.Item,{onSelect:()=>{b("red")},selected:t.includes("filter=red"),children:"Red"}),n.jsx(u.Item,{onSelect:()=>{b("blue")},selected:t.includes("filter=blue"),children:"Blue"}),n.jsx(u.Item,{onSelect:()=>{b("green")},selected:t.includes("filter=green"),children:"Green"})]})]})});let l;e[11]!==i||e[12]!==s?(l=n.jsxs(F.Header,{hidden:s,children:[h,i]}),e[11]=i,e[12]=s,e[13]=l):l=e[13];const o=!t.includes("#index");let I;e[14]!==o?(I={narrow:o,regular:!1,wide:!1},e[14]=o,e[15]=I):I=e[15];const j=!t||t.includes("#index")||t.includes("#fruits")?"page":void 0;let O;e[16]!==j?(O=n.jsx(P.Item,{href:w("#fruits"),"aria-current":j,children:"Fruits"}),e[16]=j,e[17]=O):O=e[17];const T=t.includes("#vegetables")?"page":void 0;let M;e[18]!==T?(M=n.jsx(P.Item,{href:w("#vegetables"),"aria-current":T,children:"Vegetables"}),e[18]=T,e[19]=M):M=e[19];const $=t.includes("#animals")?"page":void 0;let z;e[20]!==$?(z=n.jsx(P.Item,{href:w("#animals"),"aria-current":$,children:"Animals"}),e[20]=$,e[21]=z):z=e[21];let C;e[22]!==O||e[23]!==M||e[24]!==z?(C=n.jsxs(P,{children:[O,M,z]}),e[22]=O,e[23]=M,e[24]=z,e[25]=C):C=e[25];let k;e[26]===Symbol.for("react.memo_cache_sentinel")?(k=n.jsx(u.GroupHeading,{as:"h4",children:"Filters"}),e[26]=k):k=e[26];let W;e[27]===Symbol.for("react.memo_cache_sentinel")?(W=()=>{b("red")},e[27]=W):W=e[27];let E;e[28]!==t?(E=t.includes("filter=red"),e[28]=t,e[29]=E):E=e[29];let D;e[30]!==E?(D=n.jsx(u.Item,{onSelect:W,selected:E,children:"Red"}),e[30]=E,e[31]=D):D=e[31];let K;e[32]===Symbol.for("react.memo_cache_sentinel")?(K=()=>{b("blue")},e[32]=K):K=e[32];let ee;e[33]!==t?(ee=t.includes("filter=blue"),e[33]=t,e[34]=ee):ee=e[34];let q;e[35]!==ee?(q=n.jsx(u.Item,{onSelect:K,selected:ee,children:"Blue"}),e[35]=ee,e[36]=q):q=e[36];let te;e[37]===Symbol.for("react.memo_cache_sentinel")?(te=()=>{b("green")},e[37]=te):te=e[37];let ne;e[38]!==t?(ne=t.includes("filter=green"),e[38]=t,e[39]=ne):ne=e[39];let Q;e[40]!==ne?(Q=n.jsx(u.Item,{onSelect:te,selected:ne,children:"Green"}),e[40]=ne,e[41]=Q):Q=e[41];let X;e[42]!==D||e[43]!==q||e[44]!==Q?(X=n.jsx("div",{className:oe.ResponsiveBox,children:n.jsx(u,{children:n.jsxs(u.Group,{selectionVariant:"single",children:[k,D,q,Q]})})}),e[42]=D,e[43]=q,e[44]=Q,e[45]=X):X=e[45];let J;e[46]!==I||e[47]!==C||e[48]!==X?(J=n.jsxs(F.Pane,{position:"start",hidden:I,"aria-label":"Side pane",children:[C,X]}),e[46]=I,e[47]=C,e[48]=X,e[49]=J):J=e[49];const se=F;let ae;e[50]!==t?(ae=t.includes("#index"),e[50]=t,e[51]=ae):ae=e[51];let U;e[52]!==ae?(U={narrow:ae,regular:!1,wide:!1},e[52]=ae,e[53]=U):U=e[53];const ie=!t||t.includes("#index")||t.includes("#fruits")?f("fruits").map(ke):null,ce=t.includes("#vegetables")?f("vegetables").map(Ee):null,he=t.includes("#animals")?f("animals").map(De):null;let le;e[54]!==se.Content||e[55]!==U||e[56]!==ie||e[57]!==ce||e[58]!==he?(le=n.jsxs(se.Content,{hidden:U,children:[ie,ce,he]}),e[54]=se.Content,e[55]=U,e[56]=ie,e[57]=ce,e[58]=he,e[59]=le):le=e[59];let Y;e[60]!==d||e[61]!==l||e[62]!==J||e[63]!==le?(Y=n.jsxs(d,{containerWidth:x,children:[l,J,le]}),e[60]=d,e[61]=l,e[62]=J,e[63]=le,e[64]=Y):Y=e[64];let re;return e[65]!==Y||e[66]!==g?(re=n.jsxs(n.Fragment,{children:[g,Y]}),e[65]=Y,e[66]=g,e[67]=re):re=e[67],re};ge.storyName="Filters w/ 2 levels (btm sheet on narrow)";const pe=()=>{const e=be.c(74),[t,V]=R.useState(window.location.hash),[H,N]=R.useState(!1),G=R.useRef(null),S={animals:[{name:"Blue Tang Fish",color:"blue"},{name:"Poison Dart Frogs",color:"blue"},{name:"Scarlet Macaws",color:"red"},{name:"Foxes",color:"red"},{name:"Iguanas",color:"green"},{name:"Parakeets",color:"green"}],vegetables:[{name:"Blue Corn",color:"blue"},{name:"Blue Potatoes",color:"blue"},{name:"Red Bell Peppers",color:"red"},{name:"Tomatoes",color:"red"},{name:"Broccoli",color:"green"},{name:"String Beans",color:"green"}],fruits:[{name:"Blueberries",color:"blue"},{name:"Damson Plums",color:"blue"},{name:"Apples",color:"red"},{name:"Strawberries",color:"red"},{name:"Kiwis",color:"green"},{name:"Barlett Pears",color:"green"}]},B=Ve;let y;e[0]===Symbol.for("react.memo_cache_sentinel")?(y=(Z,Le)=>{const{hash:Fe,filter:Pe}=B(window.location.hash),He=Z||Fe||"#fruits",Se=Le||Pe||"";return`${He}${Se?`&filter=${Se}`:""}`},e[0]=y):y=e[0];const c=y;let w;e[1]===Symbol.for("react.memo_cache_sentinel")?(w=Z=>{window.location.href=c(void 0,Z)},e[1]=w):w=e[1];const m=w;let b;e[2]===Symbol.for("react.memo_cache_sentinel")?(b=()=>N(!1),e[2]=b):b=e[2];const p=b,v=Z=>S[Z].filter(Le=>t.includes("filter")?t.includes(`filter=${Le.color}`):!0);let f,L;e[3]===Symbol.for("react.memo_cache_sentinel")?(f=()=>{const Z=()=>{V(window.location.hash)};return window.addEventListener("hashchange",Z),()=>{window.removeEventListener("hashchange",Z)}},L=[],e[3]=f,e[4]=L):(f=e[3],L=e[4]),R.useEffect(f,L);let r;e[5]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx(we,{className:oe.ResponsiveFlash,children:"Resize your browser window to see the responsive behavior of the sidebar patterns."}),e[5]=r):r=e[5];const g=F,d="full";let x;e[6]!==t?(x=t.includes("#index"),e[6]=t,e[7]=x):x=e[7];let a;e[8]!==x?(a={narrow:x,regular:!0,wide:!0},e[8]=x,e[9]=a):a=e[9];let s;e[10]===Symbol.for("react.memo_cache_sentinel")?(s=n.jsx(je,{href:c("#index"),leadingVisual:Ce,variant:"invisible",children:"Categories"}),e[10]=s):s=e[10];let h;e[11]===Symbol.for("react.memo_cache_sentinel")?(h=n.jsx(ye,{ref:G,onClick:()=>N(!0),leadingVisual:xe,children:"Filter"}),e[11]=h):h=e[11];let i;e[12]!==t||e[13]!==H?(i=H&&n.jsx(Ie,{title:"Filter",onClose:p,position:{narrow:"bottom"},children:n.jsxs(u,{selectionVariant:"single",children:[n.jsx(u.Item,{onSelect:()=>{m("red")},selected:t.includes("filter=red"),children:"Red"}),n.jsx(u.Item,{onSelect:()=>{m("blue")},selected:t.includes("filter=blue"),children:"Blue"}),n.jsx(u.Item,{onSelect:()=>{m("green")},selected:t.includes("filter=green"),children:"Green"})]})}),e[12]=t,e[13]=H,e[14]=i):i=e[14];let l;e[15]!==i?(l=n.jsxs("div",{className:oe.HeaderRow,children:[s,h,i]}),e[15]=i,e[16]=l):l=e[16];let o;e[17]!==l||e[18]!==a?(o=n.jsx(F.Header,{hidden:a,children:l}),e[17]=l,e[18]=a,e[19]=o):o=e[19];const I=!t.includes("#index");let j;e[20]!==I?(j={narrow:I,regular:!1,wide:!1},e[20]=I,e[21]=j):j=e[21];const O=!t||t.includes("#index")||t.includes("#fruits")?"page":void 0;let T;e[22]!==O?(T=n.jsx(P.Item,{href:c("#fruits"),"aria-current":O,children:"Fruits"}),e[22]=O,e[23]=T):T=e[23];const M=t.includes("#vegetables")?"page":void 0;let $;e[24]!==M?($=n.jsx(P.Item,{href:c("#vegetables"),"aria-current":M,children:"Vegetables"}),e[24]=M,e[25]=$):$=e[25];const z=t.includes("#animals")?"page":void 0;let C;e[26]!==z?(C=n.jsx(P.Item,{href:c("#animals"),"aria-current":z,children:"Animals"}),e[26]=z,e[27]=C):C=e[27];let k;e[28]!==T||e[29]!==$||e[30]!==C?(k=n.jsxs(P,{children:[T,$,C]}),e[28]=T,e[29]=$,e[30]=C,e[31]=k):k=e[31];let W;e[32]===Symbol.for("react.memo_cache_sentinel")?(W=n.jsx(u.GroupHeading,{as:"h4",children:"Filters"}),e[32]=W):W=e[32];let E;e[33]===Symbol.for("react.memo_cache_sentinel")?(E=()=>{m("red")},e[33]=E):E=e[33];let D;e[34]!==t?(D=t.includes("filter=red"),e[34]=t,e[35]=D):D=e[35];let K;e[36]!==D?(K=n.jsx(u.Item,{onSelect:E,selected:D,children:"Red"}),e[36]=D,e[37]=K):K=e[37];let ee;e[38]===Symbol.for("react.memo_cache_sentinel")?(ee=()=>{m("blue")},e[38]=ee):ee=e[38];let q;e[39]!==t?(q=t.includes("filter=blue"),e[39]=t,e[40]=q):q=e[40];let te;e[41]!==q?(te=n.jsx(u.Item,{onSelect:ee,selected:q,children:"Blue"}),e[41]=q,e[42]=te):te=e[42];let ne;e[43]===Symbol.for("react.memo_cache_sentinel")?(ne=()=>{m("green")},e[43]=ne):ne=e[43];let Q;e[44]!==t?(Q=t.includes("filter=green"),e[44]=t,e[45]=Q):Q=e[45];let X;e[46]!==Q?(X=n.jsx(u.Item,{onSelect:ne,selected:Q,children:"Green"}),e[46]=Q,e[47]=X):X=e[47];let J;e[48]!==K||e[49]!==te||e[50]!==X?(J=n.jsx("div",{className:oe.ResponsiveBox,children:n.jsx(u,{children:n.jsxs(u.Group,{selectionVariant:"single",children:[W,K,te,X]})})}),e[48]=K,e[49]=te,e[50]=X,e[51]=J):J=e[51];let se;e[52]!==j||e[53]!==k||e[54]!==J?(se=n.jsxs(F.Pane,{position:"start",hidden:j,"aria-label":"Side pane",children:[k,J]}),e[52]=j,e[53]=k,e[54]=J,e[55]=se):se=e[55];const ae=F;let U;e[56]!==t?(U=t.includes("#index"),e[56]=t,e[57]=U):U=e[57];let ie;e[58]!==U?(ie={narrow:U,regular:!1,wide:!1},e[58]=U,e[59]=ie):ie=e[59];const ce=!t||t.includes("#index")||t.includes("#fruits")?v("fruits").map(Ge):null,he=t.includes("#vegetables")?v("vegetables").map(Oe):null,le=t.includes("#animals")?v("animals").map(Te):null;let Y;e[60]!==ae.Content||e[61]!==ie||e[62]!==ce||e[63]!==he||e[64]!==le?(Y=n.jsxs(ae.Content,{hidden:ie,children:[ce,he,le]}),e[60]=ae.Content,e[61]=ie,e[62]=ce,e[63]=he,e[64]=le,e[65]=Y):Y=e[65];let re;e[66]!==g||e[67]!==o||e[68]!==se||e[69]!==Y?(re=n.jsxs(g,{containerWidth:d,children:[o,se,Y]}),e[66]=g,e[67]=o,e[68]=se,e[69]=Y,e[70]=re):re=e[70];let A;return e[71]!==re||e[72]!==r?(A=n.jsxs(n.Fragment,{children:[r,re]}),e[71]=re,e[72]=r,e[73]=A):A=e[73],A};pe.storyName="Parent-detail + filters (filters as btm sheet on narrow)";ue.__docgenInfo={description:"",methods:[],displayName:"ParentDetail"};de.__docgenInfo={description:"",methods:[],displayName:"ParentDetailBreadcrumb"};me.__docgenInfo={description:"",methods:[],displayName:"FilterBottomSheet"};fe.__docgenInfo={description:"",methods:[],displayName:"FilterActionMenu"};ge.__docgenInfo={description:"",methods:[],displayName:"FiltersBottomSheetTwoLevels"};pe.__docgenInfo={description:"",methods:[],displayName:"ParentDetailPlusFilters"};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`() => {
  // eslint-disable-next-line ssr-friendly/no-dom-globals-in-react-fc
  const [currentHash, setCurrentHash] = React.useState(window.location.hash);

  // Fake routing to mimic the behavior of a single page application
  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return <>
      <Flash className={classes.ResponsiveFlash}>
        Resize your browser window to see the responsive behavior of the parent-detail pattern.
      </Flash>
      <PageLayout containerWidth="full">
        <PageLayout.Header hidden={{
        narrow: currentHash === '#index',
        regular: true,
        wide: true
      }}>
          <LinkButton href="#index" leadingVisual={ArrowLeftIcon} variant="invisible">
            Pages
          </LinkButton>
        </PageLayout.Header>
        <PageLayout.Pane position="start" hidden={{
        narrow: currentHash !== '#index',
        regular: false,
        wide: false
      }} aria-label="Side pane">
          <NavList>
            <NavList.Item href="#fruits" aria-current={!currentHash || currentHash === '#index' || currentHash === '#fruits' ? 'page' : undefined}>
              Fruits
            </NavList.Item>
            <NavList.Item href="#vegetables" aria-current={currentHash === '#vegetables' ? 'page' : undefined}>
              Vegetables
            </NavList.Item>
            <NavList.Item href="#animals" aria-current={currentHash === '#animals' ? 'page' : undefined}>
              Animals
            </NavList.Item>
          </NavList>
        </PageLayout.Pane>
        <PageLayout.Content hidden={{
        narrow: currentHash === '#index',
        regular: false,
        wide: false
      }}>
          {!currentHash || currentHash === '#index' || currentHash === '#fruits' ? <Placeholder height={640} label="Fruits page content" /> : null}
          {currentHash === '#vegetables' ? <Placeholder height={640} label="Vegetables page content" /> : null}
          {currentHash === '#animals' ? <Placeholder height={640} label="Animals page content" /> : null}
        </PageLayout.Content>
      </PageLayout>
    </>;
}`,...ue.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`() => {
  // eslint-disable-next-line ssr-friendly/no-dom-globals-in-react-fc
  const [currentHash, setCurrentHash] = React.useState(window.location.hash);

  //
  // START story utilities
  //
  const getSecondBreadcrumbLabel = () => {
    switch (currentHash) {
      case '#fruits':
      case '#index':
      case '#new-fruit':
        return 'Fruits';
      case '#vegetables':
        return 'Vegetables';
      case '#animals':
        return 'Animals';
      default:
        return 'Detail';
    }
  };
  // END story utilities

  // Fake routing to mimic the behavior of a single page application
  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return <>
      <Flash className={classes.ResponsiveFlash}>
        Resize your browser window to see the responsive behavior of the parent-detail pattern.
      </Flash>
      <PageLayout containerWidth="full">
        <PageLayout.Header hidden={{
        narrow: currentHash === '#index',
        regular: true,
        wide: true
      }}>
          <div className={classes.BreadcrumbHeaderRow}>
            <Breadcrumbs>
              <Breadcrumbs.Item href="#index">Pages</Breadcrumbs.Item>
              <Breadcrumbs.Item href={currentHash === '#new-fruit' ? '#fruits' : undefined} selected={['#new-fruit', '#index'].includes(currentHash)}>
                {getSecondBreadcrumbLabel()}
              </Breadcrumbs.Item>
              {currentHash === '#new-fruit' ? <Breadcrumbs.Item selected>Child</Breadcrumbs.Item> : null}
            </Breadcrumbs>
            {!currentHash || currentHash === '#index' || currentHash === '#fruits' ? <LinkButton href="#new-fruit">New fruit</LinkButton> : null}
          </div>
        </PageLayout.Header>
        <PageLayout.Pane position="start" hidden={{
        narrow: currentHash !== '#index',
        regular: false,
        wide: false
      }} aria-label="Side pane">
          <NavList>
            <NavList.Item href="#fruits" aria-current={!currentHash || currentHash === '#index' || currentHash === '#fruits' ? 'page' : undefined}>
              Fruits
            </NavList.Item>
            <NavList.Item href="#vegetables" aria-current={currentHash === '#vegetables' ? 'page' : undefined}>
              Vegetables
            </NavList.Item>
            <NavList.Item href="#animals" aria-current={currentHash === '#animals' ? 'page' : undefined}>
              Animals
            </NavList.Item>
          </NavList>
        </PageLayout.Pane>
        <PageLayout.Content hidden={{
        narrow: currentHash === '#index',
        regular: false,
        wide: false
      }}>
          {!currentHash || currentHash === '#index' || currentHash === '#fruits' ? <Placeholder height={640} label="Fruits page content" /> : null}
          {currentHash === '#vegetables' ? <Placeholder height={640} label="Vegetables page content" /> : null}
          {currentHash === '#animals' ? <Placeholder height={640} label="Animals page content" /> : null}
          {currentHash === '#new-fruit' ? <Placeholder height={640} label="New fruit page content" /> : null}
        </PageLayout.Content>
      </PageLayout>
    </>;
}`,...de.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`() => {
  // eslint-disable-next-line ssr-friendly/no-dom-globals-in-react-fc
  const [currentHash, setCurrentHash] = React.useState(window.location.hash);
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const onDialogClose = React.useCallback(() => setIsOpen(false), []);

  // Fake routing to mimic the behavior of a single page application
  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return <>
      <Flash className={classes.ResponsiveFlash}>
        Resize your browser window to see the responsive behavior of the filter sidebar pattern.
      </Flash>

      <PageLayout containerWidth="full">
        <PageLayout.Header hidden={{
        narrow: false,
        regular: true,
        wide: true
      }}>
          <Button ref={buttonRef} onClick={() => setIsOpen(true)} leadingVisual={FilterIcon}>
            Filter
          </Button>
          {isOpen && <Dialog title="Filter" onClose={onDialogClose} position={{
          narrow: 'bottom'
        }}>
              <ActionList>
                <ActionList.LinkItem href="#red">Red</ActionList.LinkItem>
                <ActionList.LinkItem href="#blue">Vegetables</ActionList.LinkItem>
                <ActionList.LinkItem href="#green">Animals</ActionList.LinkItem>
              </ActionList>
            </Dialog>}
        </PageLayout.Header>
        <PageLayout.Pane position="start" hidden={{
        narrow: true,
        regular: false,
        wide: false
      }} aria-label="Side pane">
          <NavList>
            <NavList.Item href="#red" aria-current={!currentHash || currentHash === '#index' || currentHash === '#red' ? 'page' : undefined}>
              Red
            </NavList.Item>
            <NavList.Item href="#blue" aria-current={currentHash === '#blue' ? 'page' : undefined}>
              Blue
            </NavList.Item>
            <NavList.Item href="#green" aria-current={currentHash === '#green' ? 'page' : undefined}>
              Green
            </NavList.Item>
          </NavList>
        </PageLayout.Pane>
        <PageLayout.Content>
          {!currentHash || currentHash === '#index' || currentHash === '#red' ? <Placeholder height={640} label="Red things" /> : null}
          {currentHash === '#blue' ? <Placeholder height={640} label="Blue things" /> : null}
          {currentHash === '#green' ? <Placeholder height={640} label="Green things" /> : null}
        </PageLayout.Content>
      </PageLayout>
    </>;
}`,...me.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`() => {
  // eslint-disable-next-line ssr-friendly/no-dom-globals-in-react-fc
  const [currentHash, setCurrentHash] = React.useState(window.location.hash);
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const onDialogClose = React.useCallback(() => setIsOpen(false), []);

  // Fake routing to mimic the behavior of a single page application
  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return <>
      <Flash className={classes.ResponsiveFlash}>
        Resize your browser window to see the responsive behavior of the filter sidebar pattern.
      </Flash>

      <PageLayout containerWidth="full">
        <PageLayout.Header hidden={{
        narrow: false,
        regular: true,
        wide: true
      }}>
          <Button ref={buttonRef} onClick={() => setIsOpen(true)} leadingVisual={FilterIcon}>
            Filter
          </Button>
          {isOpen && <Dialog title="Filter" onClose={onDialogClose} position={{
          narrow: 'bottom'
        }}>
              <ActionList>
                <ActionList.LinkItem href="#red">Red</ActionList.LinkItem>
                <ActionList.LinkItem href="#blue">Vegetables</ActionList.LinkItem>
                <ActionList.LinkItem href="#green">Animals</ActionList.LinkItem>
              </ActionList>
            </Dialog>}
        </PageLayout.Header>
        <PageLayout.Pane position="start" hidden={{
        narrow: true,
        regular: false,
        wide: false
      }} aria-label="Side pane">
          <NavList>
            <NavList.Item href="#red" aria-current={!currentHash || currentHash === '#index' || currentHash === '#red' ? 'page' : undefined}>
              Red
            </NavList.Item>
            <NavList.Item href="#blue" aria-current={currentHash === '#blue' ? 'page' : undefined}>
              Blue
            </NavList.Item>
            <NavList.Item href="#green" aria-current={currentHash === '#green' ? 'page' : undefined}>
              Green
            </NavList.Item>
          </NavList>
        </PageLayout.Pane>
        <PageLayout.Content>
          {!currentHash || currentHash === '#index' || currentHash === '#red' ? <Placeholder height={640} label="Red things" /> : null}
          {currentHash === '#blue' ? <Placeholder height={640} label="Blue things" /> : null}
          {currentHash === '#green' ? <Placeholder height={640} label="Green things" /> : null}
        </PageLayout.Content>
      </PageLayout>
    </>;
}`,...fe.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`() => {
  // eslint-disable-next-line ssr-friendly/no-dom-globals-in-react-fc
  const [currentHash, setCurrentHash] = React.useState(window.location.hash);
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  //
  // START story utilities
  //
  const filterableItems = {
    animals: [{
      name: 'Blue Tang Fish',
      color: 'blue'
    }, {
      name: 'Poison Dart Frogs',
      color: 'blue'
    }, {
      name: 'Scarlet Macaws',
      color: 'red'
    }, {
      name: 'Foxes',
      color: 'red'
    }, {
      name: 'Iguanas',
      color: 'green'
    }, {
      name: 'Parakeets',
      color: 'green'
    }],
    vegetables: [{
      name: 'Blue Corn',
      color: 'blue'
    }, {
      name: 'Blue Potatoes',
      color: 'blue'
    }, {
      name: 'Red Bell Peppers',
      color: 'red'
    }, {
      name: 'Tomatoes',
      color: 'red'
    }, {
      name: 'Broccoli',
      color: 'green'
    }, {
      name: 'String Beans',
      color: 'green'
    }],
    fruits: [{
      name: 'Blueberries',
      color: 'blue'
    }, {
      name: 'Damson Plums',
      color: 'blue'
    }, {
      name: 'Apples',
      color: 'red'
    }, {
      name: 'Strawberries',
      color: 'red'
    }, {
      name: 'Kiwis',
      color: 'green'
    }, {
      name: 'Barlett Pears',
      color: 'green'
    }]
  };
  const categories = [{
    hash: '#fruits',
    name: 'Fruits'
  }, {
    hash: '#vegetables',
    name: 'Vegetables'
  }, {
    hash: '#animals',
    name: 'Animals'
  }];
  type HashObject = {
    hash: string;
    filter: string;
  };
  const parseHash = (str?: string): HashObject => {
    if (!str) return {
      hash: '',
      filter: ''
    };
    const [hash, filter] = str.split('&');
    const filterValue = filter ? filter.split('=')[1] : '';
    return {
      hash,
      filter: filterValue
    };
  };
  const generateHref = (hash?: string, filter?: string): string => {
    const {
      hash: currentHash,
      filter: currentFilter
    } = parseHash(window.location.hash);
    const finalHash = hash || currentHash || '#fruits';
    const finalFilter = filter || currentFilter || '';
    return \`\${finalHash}\${finalFilter ? \`&filter=\${finalFilter}\` : ''}\`;
  };
  const handleFilterChange = (filter: string) => {
    window.location.href = generateHref(undefined, filter);
  };
  const onDialogClose = React.useCallback(() => setIsOpen(false), []);
  const getFilteredItems = (category: keyof typeof filterableItems) => filterableItems[category].filter(item => currentHash.includes('filter') ? currentHash.includes(\`filter=\${item.color}\`) : true);
  // END story utilities

  // Fake routing to mimic the behavior of a single page application
  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return <>
      <Flash className={classes.ResponsiveFlash}>
        Resize your browser window to see the responsive behavior of the filter sidebar pattern.
      </Flash>

      <PageLayout containerWidth="full">
        <PageLayout.Header hidden={{
        narrow: currentHash.includes('#index'),
        regular: true,
        wide: true
      }}>
          <Button ref={buttonRef} onClick={() => setIsOpen(true)} leadingVisual={FilterIcon}>
            Filter
          </Button>
          {isOpen && <Dialog title="Filter" onClose={onDialogClose} position={{
          narrow: 'bottom'
        }}>
              <ActionList>
                <ActionList.Group>
                  <ActionList.GroupHeading>Categories</ActionList.GroupHeading>
                  {categories.map(category => <ActionList.LinkItem key={category.hash} href={category.hash} active={category.hash === '#fruits' && !currentHash || currentHash.includes('#index') || currentHash.includes(category.hash)}>
                      {category.name}
                    </ActionList.LinkItem>)}
                </ActionList.Group>
                <ActionList.Divider />
                <ActionList.Group selectionVariant="single">
                  <ActionList.GroupHeading>Colors</ActionList.GroupHeading>
                  <ActionList.Item onSelect={() => {
                handleFilterChange('red');
              }} selected={currentHash.includes('filter=red')}>
                    Red
                  </ActionList.Item>
                  <ActionList.Item onSelect={() => {
                handleFilterChange('blue');
              }} selected={currentHash.includes('filter=blue')}>
                    Blue
                  </ActionList.Item>
                  <ActionList.Item onSelect={() => {
                handleFilterChange('green');
              }} selected={currentHash.includes('filter=green')}>
                    Green
                  </ActionList.Item>
                </ActionList.Group>
              </ActionList>
            </Dialog>}
        </PageLayout.Header>
        <PageLayout.Pane position="start" hidden={{
        narrow: !currentHash.includes('#index'),
        regular: false,
        wide: false
      }} aria-label="Side pane">
          <NavList>
            <NavList.Item href={generateHref('#fruits')} aria-current={!currentHash || currentHash.includes('#index') || currentHash.includes('#fruits') ? 'page' : undefined}>
              Fruits
            </NavList.Item>
            <NavList.Item href={generateHref('#vegetables')} aria-current={currentHash.includes('#vegetables') ? 'page' : undefined}>
              Vegetables
            </NavList.Item>
            <NavList.Item href={generateHref('#animals')} aria-current={currentHash.includes('#animals') ? 'page' : undefined}>
              Animals
            </NavList.Item>
          </NavList>
          <div className={classes.ResponsiveBox}>
            <ActionList>
              <ActionList.Group selectionVariant="single">
                <ActionList.GroupHeading as="h4">Filters</ActionList.GroupHeading>
                <ActionList.Item onSelect={() => {
                handleFilterChange('red');
              }} selected={currentHash.includes('filter=red')}>
                  Red
                </ActionList.Item>
                <ActionList.Item onSelect={() => {
                handleFilterChange('blue');
              }} selected={currentHash.includes('filter=blue')}>
                  Blue
                </ActionList.Item>
                <ActionList.Item onSelect={() => {
                handleFilterChange('green');
              }} selected={currentHash.includes('filter=green')}>
                  Green
                </ActionList.Item>
              </ActionList.Group>
            </ActionList>
          </div>
        </PageLayout.Pane>
        <PageLayout.Content hidden={{
        narrow: currentHash.includes('#index'),
        regular: false,
        wide: false
      }}>
          {!currentHash || currentHash.includes('#index') || currentHash.includes('#fruits') ? getFilteredItems('fruits').map(item => <Placeholder key={item.name} height={48} label={item.name} />) : null}
          {currentHash.includes('#vegetables') ? getFilteredItems('vegetables').map(item => <Placeholder key={item.name} height={48} label={item.name} />) : null}
          {currentHash.includes('#animals') ? getFilteredItems('animals').map(item => <Placeholder key={item.name} height={48} label={item.name} />) : null}
        </PageLayout.Content>
      </PageLayout>
    </>;
}`,...ge.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`() => {
  // eslint-disable-next-line ssr-friendly/no-dom-globals-in-react-fc
  const [currentHash, setCurrentHash] = React.useState(window.location.hash);
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  //
  // START story utilities
  //
  const filterableItems = {
    animals: [{
      name: 'Blue Tang Fish',
      color: 'blue'
    }, {
      name: 'Poison Dart Frogs',
      color: 'blue'
    }, {
      name: 'Scarlet Macaws',
      color: 'red'
    }, {
      name: 'Foxes',
      color: 'red'
    }, {
      name: 'Iguanas',
      color: 'green'
    }, {
      name: 'Parakeets',
      color: 'green'
    }],
    vegetables: [{
      name: 'Blue Corn',
      color: 'blue'
    }, {
      name: 'Blue Potatoes',
      color: 'blue'
    }, {
      name: 'Red Bell Peppers',
      color: 'red'
    }, {
      name: 'Tomatoes',
      color: 'red'
    }, {
      name: 'Broccoli',
      color: 'green'
    }, {
      name: 'String Beans',
      color: 'green'
    }],
    fruits: [{
      name: 'Blueberries',
      color: 'blue'
    }, {
      name: 'Damson Plums',
      color: 'blue'
    }, {
      name: 'Apples',
      color: 'red'
    }, {
      name: 'Strawberries',
      color: 'red'
    }, {
      name: 'Kiwis',
      color: 'green'
    }, {
      name: 'Barlett Pears',
      color: 'green'
    }]
  };
  type HashObject = {
    hash: string;
    filter: string;
  };
  const parseHash = (str?: string): HashObject => {
    if (!str) return {
      hash: '',
      filter: ''
    };
    const [hash, filter] = str.split('&');
    const filterValue = filter ? filter.split('=')[1] : '';
    return {
      hash,
      filter: filterValue
    };
  };
  const generateHref = (hash?: string, filter?: string): string => {
    const {
      hash: currentHash,
      filter: currentFilter
    } = parseHash(window.location.hash);
    const finalHash = hash || currentHash || '#fruits';
    const finalFilter = filter || currentFilter || '';
    return \`\${finalHash}\${finalFilter ? \`&filter=\${finalFilter}\` : ''}\`;
  };
  const handleFilterChange = (filter: string) => {
    window.location.href = generateHref(undefined, filter);
  };
  const onDialogClose = React.useCallback(() => setIsOpen(false), []);
  const getFilteredItems = (category: keyof typeof filterableItems) => filterableItems[category].filter(item => currentHash.includes('filter') ? currentHash.includes(\`filter=\${item.color}\`) : true);
  // END story utilities

  // Fake routing to mimic the behavior of a single page application
  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return <>
      <Flash className={classes.ResponsiveFlash}>
        Resize your browser window to see the responsive behavior of the sidebar patterns.
      </Flash>

      <PageLayout containerWidth="full">
        <PageLayout.Header hidden={{
        narrow: currentHash.includes('#index'),
        regular: true,
        wide: true
      }}>
          <div className={classes.HeaderRow}>
            <LinkButton href={generateHref('#index')} leadingVisual={ArrowLeftIcon} variant="invisible">
              Categories
            </LinkButton>

            <Button ref={buttonRef} onClick={() => setIsOpen(true)} leadingVisual={FilterIcon}>
              Filter
            </Button>
            {isOpen && <Dialog title="Filter" onClose={onDialogClose} position={{
            narrow: 'bottom'
          }}>
                <ActionList selectionVariant="single">
                  <ActionList.Item onSelect={() => {
                handleFilterChange('red');
              }} selected={currentHash.includes('filter=red')}>
                    Red
                  </ActionList.Item>
                  <ActionList.Item onSelect={() => {
                handleFilterChange('blue');
              }} selected={currentHash.includes('filter=blue')}>
                    Blue
                  </ActionList.Item>
                  <ActionList.Item onSelect={() => {
                handleFilterChange('green');
              }} selected={currentHash.includes('filter=green')}>
                    Green
                  </ActionList.Item>
                </ActionList>
              </Dialog>}
          </div>
        </PageLayout.Header>
        <PageLayout.Pane position="start" hidden={{
        narrow: !currentHash.includes('#index'),
        regular: false,
        wide: false
      }} aria-label="Side pane">
          <NavList>
            <NavList.Item href={generateHref('#fruits')} aria-current={!currentHash || currentHash.includes('#index') || currentHash.includes('#fruits') ? 'page' : undefined}>
              Fruits
            </NavList.Item>
            <NavList.Item href={generateHref('#vegetables')} aria-current={currentHash.includes('#vegetables') ? 'page' : undefined}>
              Vegetables
            </NavList.Item>
            <NavList.Item href={generateHref('#animals')} aria-current={currentHash.includes('#animals') ? 'page' : undefined}>
              Animals
            </NavList.Item>
          </NavList>
          <div className={classes.ResponsiveBox}>
            <ActionList>
              <ActionList.Group selectionVariant="single">
                <ActionList.GroupHeading as="h4">Filters</ActionList.GroupHeading>
                <ActionList.Item onSelect={() => {
                handleFilterChange('red');
              }} selected={currentHash.includes('filter=red')}>
                  Red
                </ActionList.Item>
                <ActionList.Item onSelect={() => {
                handleFilterChange('blue');
              }} selected={currentHash.includes('filter=blue')}>
                  Blue
                </ActionList.Item>
                <ActionList.Item onSelect={() => {
                handleFilterChange('green');
              }} selected={currentHash.includes('filter=green')}>
                  Green
                </ActionList.Item>
              </ActionList.Group>
            </ActionList>
          </div>
        </PageLayout.Pane>
        <PageLayout.Content hidden={{
        narrow: currentHash.includes('#index'),
        regular: false,
        wide: false
      }}>
          {!currentHash || currentHash.includes('#index') || currentHash.includes('#fruits') ? getFilteredItems('fruits').map(item => <Placeholder key={item.name} height={48} label={item.name} />) : null}
          {currentHash.includes('#vegetables') ? getFilteredItems('vegetables').map(item => <Placeholder key={item.name} height={48} label={item.name} />) : null}
          {currentHash.includes('#animals') ? getFilteredItems('animals').map(item => <Placeholder key={item.name} height={48} label={item.name} />) : null}
        </PageLayout.Content>
      </PageLayout>
    </>;
}`,...pe.parameters?.docs?.source}}};function Ne(e){if(!e)return{hash:"",filter:""};const[t,V]=e.split("&"),H=V?V.split("=")[1]:"";return{hash:t,filter:H}}function ke(e){return n.jsx(_,{height:48,label:e.name},e.name)}function Ee(e){return n.jsx(_,{height:48,label:e.name},e.name)}function De(e){return n.jsx(_,{height:48,label:e.name},e.name)}function Ve(e){if(!e)return{hash:"",filter:""};const[t,V]=e.split("&"),H=V?V.split("=")[1]:"";return{hash:t,filter:H}}function Ge(e){return n.jsx(_,{height:48,label:e.name},e.name)}function Oe(e){return n.jsx(_,{height:48,label:e.name},e.name)}function Te(e){return n.jsx(_,{height:48,label:e.name},e.name)}const Xt=["ParentDetail","ParentDetailBreadcrumb","FilterBottomSheet","FilterActionMenu","FiltersBottomSheetTwoLevels","ParentDetailPlusFilters"];export{fe as FilterActionMenu,me as FilterBottomSheet,ge as FiltersBottomSheetTwoLevels,ue as ParentDetail,de as ParentDetailBreadcrumb,pe as ParentDetailPlusFilters,Xt as __namedExportsOrder,Qt as default};
