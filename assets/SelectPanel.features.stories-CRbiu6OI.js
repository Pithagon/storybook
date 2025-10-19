import{d as E,R as M,j as t}from"./iframe-Cfz2vXeE.js";import{S as A,s as q}from"./SelectPanel2Stories.module-jAh0Fk_6.js";import{aA as ce,v as ne,aN as le}from"./index.esm-C1WN7kEu.js";import{d as g}from"./mock-story-data-ZSPzoONf.js";import{A as N}from"./index-C-OhZ25x.js";import{L as se}from"./Link-Dm7wEaum.js";import{A as ie}from"./Avatar-Oyvcp9WV.js";import{u as de}from"./useResponsiveValue-Cmf8jyBD.js";import{T as re}from"./ToggleSwitch-CyqyfZ4u.js";import{b as z}from"./SegmentedControl-DgLk0B8B.js";import{B as ue}from"./Button-3sCteC9V.js";import"./preload-helper-D9Z9MdNV.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./Overlay-Du2pzphD.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Portal-BKCn1yDJ.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./useFeatureFlag-paATTdb3.js";import"./InputLabel-BWKIqz-Q.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./Octicon-B0A15aaM.js";import"./TextInput-hhRVe1zi.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./TextInputWrapper-A6-jRRIw.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Checkbox-BHvnb8mU.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./Truncate-DUc3hzfC.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./useProvidedStateOrCreate-BEKIGSkE.js";import"./ActionMenu-VmSenYrX.js";import"./useMnemonics-D4gqZtvW.js";import"./AnchoredOverlay-DQ90Zw6u.js";import"./useFocusTrap-CL_Yl_fl.js";const me="prc-SelectPanel2-AttentionText-I-Uud",he="prc-SelectPanel2-ButtonCustom-K26wx",Z={AttentionText:me,ButtonCustom:he},Vt={title:"Deprecated/Components/SelectPanel/Features",component:A},oe=e=>t.jsx("div",{className:q.Circle,style:{backgroundColor:`#${e}`}}),O=()=>{const e=E.c(14),[n,s]=M.useState();let C;e[0]!==n?(C=()=>{n&&(g.ref=n)},e[0]=n,e[1]=C):C=e[1];const L=C,b=g.tags;let c;e[2]===Symbol.for("react.memo_cache_sentinel")?(c=t.jsx("h1",{children:"Instant selection variant"}),e[2]=c):c=e[2];const d=n||"Choose a tag";let l;e[3]!==d?(l=t.jsx(A.Button,{leadingVisual:ce,children:d}),e[3]=d,e[4]=l):l=e[4];let k;e[5]!==n?(k=b.map(r=>t.jsx(N.Item,{onSelect:()=>s(r.id),selected:n===r.id,children:r.name},r.id)),e[5]=n,e[6]=k):k=e[6];let x;e[7]!==k?(x=t.jsx(N,{children:k}),e[7]=k,e[8]=x):x=e[8];let j;e[9]===Symbol.for("react.memo_cache_sentinel")?(j=t.jsx(A.Footer,{children:t.jsx(A.SecondaryAction,{variant:"button",children:"Edit tags"})}),e[9]=j):j=e[9];let I;return e[10]!==L||e[11]!==l||e[12]!==x?(I=t.jsxs(t.Fragment,{children:[c,t.jsxs(A,{title:"Choose a tag",selectionVariant:"instant",onSubmit:L,children:[l,x,j]})]}),e[10]=L,e[11]=l,e[12]=x,e[13]=I):I=e[13],I},Q=()=>{const e=E.c(1);let n;return e[0]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsx("h1",{children:"TODO"}),e[0]=n):n=e[0],n},X=()=>{const e=E.c(25),n=g.issue.assigneeIds,[s,C]=M.useState(n);let L;e[0]!==s?(L=i=>{s.includes(i)?C(s.filter(p=>p!==i)):C([...s,i])},e[0]=s,e[1]=L):L=e[1];const b=L;let c;e[2]===Symbol.for("react.memo_cache_sentinel")?(c=()=>C([]),e[2]=c):c=e[2];const d=c;let l;e[3]!==s?(l=()=>{g.issue.assigneeIds=s},e[3]=s,e[4]=l):l=e[4];const k=l;let x;e[5]===Symbol.for("react.memo_cache_sentinel")?(x=()=>{C(n)},e[5]=x):x=e[5];const j=x,[I,r]=M.useState(g.collaborators),[S,_]=M.useState("");let T;e[6]===Symbol.for("react.memo_cache_sentinel")?(T=i=>{const p=i.currentTarget.value;_(p),r(p===""?g.collaborators:g.collaborators.map(h=>h.login.toLowerCase().startsWith(p)?{priority:1,collaborator:h}:h.name.startsWith(p)?{priority:2,collaborator:h}:h.login.toLowerCase().includes(p)?{priority:3,collaborator:h}:h.name.toLowerCase().includes(p)?{priority:4,collaborator:h}:{priority:-1,collaborator:h}).filter(pe).map(ge))},e[6]=T):T=e[6];const w=T,v=fe;let u;e[7]!==I||e[8]!==S?(u=S?I:g.collaborators.sort(v),e[7]=I,e[8]=S,e[9]=u):u=e[9];const y=u;let F;e[10]===Symbol.for("react.memo_cache_sentinel")?(F=t.jsx("h1",{children:"SelectPanel with warning"}),e[10]=F):F=e[10];let o;e[11]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsx(A.Button,{variant:"invisible",trailingAction:ne,className:Z.ButtonCustom,children:"Assignees"}),e[11]=o):o=e[11];let P;e[12]===Symbol.for("react.memo_cache_sentinel")?(P=t.jsx(A.Header,{children:t.jsx(A.SearchInput,{onChange:w,"aria-label":"Search"})}),e[12]=P):P=e[12];let f;e[13]!==s.length?(f=s.length>=3?t.jsxs(A.Message,{variant:"warning",size:"inline",children:["You have reached the limit of ",3," assignees on your free account."," ",t.jsx(se,{href:"/upgrade",children:"Upgrade your account."})]}):null,e[13]=s.length,e[14]=f):f=e[14];let a;e[15]!==y||e[16]!==b||e[17]!==S||e[18]!==s?(a=y.length===0?t.jsx(A.Message,{variant:"empty",title:`No labels found for "${S}"`,children:"Try a different search term"}):t.jsx(N,{children:y.map(i=>t.jsxs(N.Item,{onSelect:()=>b(i.id),selected:s.includes(i.id),disabled:s.length>=3&&!s.includes(i.id),children:[t.jsx(N.LeadingVisual,{children:t.jsx(ie,{src:`https://github.com/${i.login}.png`})}),i.login,t.jsx(N.Description,{children:i.login})]},i.id))}),e[15]=y,e[16]=b,e[17]=S,e[18]=s,e[19]=a):a=e[19];let m;e[20]===Symbol.for("react.memo_cache_sentinel")?(m=t.jsx(A.Footer,{}),e[20]=m):m=e[20];let B;return e[21]!==k||e[22]!==a||e[23]!==f?(B=t.jsxs(t.Fragment,{children:[F,t.jsxs(A,{title:"Set assignees",description:"Select up to 3 people",onSubmit:k,onCancel:j,onClearSelection:d,children:[o,P,f,a,m]})]}),e[21]=k,e[22]=a,e[23]=f,e[24]=B):B=e[24],B},G=()=>{const e=E.c(34),[n,s]=M.useState(!0),[C,L]=M.useState(!0);let b;e[0]===Symbol.for("react.memo_cache_sentinel")?(b=g.collaborators.slice(0,3).map(be),e[0]=b):b=e[0];const c=b,[d,l]=M.useState(c);let k;e[1]!==d?(k=R=>{d.includes(R)?l(d.filter(U=>U!==R)):l([...d,R])},e[1]=d,e[2]=k):k=e[2];const x=k;let j;e[3]===Symbol.for("react.memo_cache_sentinel")?(j=()=>l([]),e[3]=j):j=e[3];const I=j;let r;e[4]!==d?(r=()=>{g.issue.assigneeIds=d},e[4]=d,e[5]=r):r=e[5];const S=r;let _;e[6]===Symbol.for("react.memo_cache_sentinel")?(_=()=>{l(c)},e[6]=_):_=e[6];const T=_;let w;e[7]!==n?(w=n?g.collaborators.filter(R=>c.includes(R.id)):g.collaborators,e[7]=n,e[8]=w):w=e[8];const[v,u]=M.useState(w),[y,F]=M.useState("");let o;e[9]!==n?(o=R=>{const U=R.currentTarget.value;if(F(U),U==="")u(g.collaborators);else{const ae=n?g.collaborators.filter(W=>c.includes(W.id)):g.collaborators;u(ae.map(W=>W.login.toLowerCase().startsWith(U)?{priority:1,collaborator:W}:W.name.startsWith(U)?{priority:2,collaborator:W}:W.login.toLowerCase().includes(U)?{priority:3,collaborator:W}:W.name.toLowerCase().includes(U)?{priority:4,collaborator:W}:{priority:-1,collaborator:W}).filter(Ie).map(ye))}},e[9]=n,e[10]=o):o=e[10];const P=o,f=Ae;let a;e[11]!==v||e[12]!==y?(a=y?v:g.collaborators.sort(f),e[11]=v,e[12]=y,e[13]=a):a=e[13];const m=a;let B;e[14]===Symbol.for("react.memo_cache_sentinel")?(B=t.jsx("h1",{children:"SelectPanel with Errors"}),e[14]=B):B=e[14];let i;e[15]===Symbol.for("react.memo_cache_sentinel")?(i=t.jsxs("div",{className:q.SwitchContent,children:[t.jsx("span",{className:q.SwitchLabel,id:"switch-label",children:"Break search API"}),t.jsx("span",{className:q.SwitchCaption,id:"switch-caption",children:"Turn on to show error message while searching"})]}),e[15]=i):i=e[15];let p;e[16]===Symbol.for("react.memo_cache_sentinel")?(p=t.jsxs("div",{className:q.SwitchContainer,children:[i,t.jsx(re,{defaultChecked:!0,onChange:R=>s(R),"aria-labelledby":"switch-label","aria-describedby":"switch-caption"})]}),e[16]=p):p=e[16];let h;e[17]===Symbol.for("react.memo_cache_sentinel")?(h=t.jsxs("div",{className:q.SwitchContent,children:[t.jsx("span",{id:"break-issues-label",className:q.SwitchLabel,children:"Break issues API"}),t.jsx("span",{id:"break-issues-caption",className:q.SwitchCaption,children:"Turn on to break everything and show big error in panel"})]}),e[17]=h):h=e[17];let V;e[18]===Symbol.for("react.memo_cache_sentinel")?(V=t.jsxs("div",{className:q.SwitchContainerLast,children:[h,t.jsx(re,{defaultChecked:!0,onChange:R=>L(R),"aria-labelledby":"break-issues-label","aria-describedby":"break-issues-caption"})]}),e[18]=V):V=e[18];let $;e[19]===Symbol.for("react.memo_cache_sentinel")?($=t.jsx(A.Button,{variant:"invisible",trailingAction:ne,className:Z.ButtonCustom,children:"Assignees"}),e[19]=$):$=e[19];let D;e[20]!==P?(D=t.jsx(A.Header,{children:t.jsx(A.SearchInput,{onChange:P,"aria-label":"Search"})}),e[20]=P,e[21]=D):D=e[21];let H;e[22]!==C||e[23]!==m||e[24]!==x||e[25]!==y||e[26]!==n||e[27]!==d?(H=C?t.jsxs(A.Message,{variant:"error",size:"full",title:"We couldn't load collaborators",children:["Try again or if the problem persists, ",t.jsx(se,{href:"/support",children:"contact support"})]}):t.jsxs(t.Fragment,{children:[y&&n?t.jsxs(A.Message,{variant:"error",size:"inline",children:["We couldn't load all collaborators. Try again or if the problem persists,"," ",t.jsx(se,{href:"/support",children:"contact support"})]}):null,m.length===0?t.jsx(A.Message,{variant:"empty",title:`No labels found for "${y}"`,children:"Try a different search term"}):t.jsx(N,{children:m.map(R=>t.jsxs(N.Item,{onSelect:()=>x(R.id),selected:d.includes(R.id),children:[t.jsx(N.LeadingVisual,{children:t.jsx(ie,{src:`https://github.com/${R.login}.png`})}),R.login,t.jsx(N.Description,{children:R.login})]},R.id))})]}),e[22]=C,e[23]=m,e[24]=x,e[25]=y,e[26]=n,e[27]=d,e[28]=H):H=e[28];let ee;e[29]===Symbol.for("react.memo_cache_sentinel")?(ee=t.jsx(A.Footer,{}),e[29]=ee):ee=e[29];let te;return e[30]!==S||e[31]!==D||e[32]!==H?(te=t.jsxs(t.Fragment,{children:[B,p,V,t.jsxs(A,{title:"Set assignees",onSubmit:S,onCancel:T,onClearSelection:I,children:[$,D,H,ee]})]}),e[30]=S,e[31]=D,e[32]=H,e[33]=te):te=e[33],te},Y=()=>{const e=E.c(33),n=g.issue.labelIds,[s,C]=M.useState(n);let L;e[0]!==s?(L=V=>{s.includes(V)?C(s.filter($=>$!==V)):C([...s,V])},e[0]=s,e[1]=L):L=e[1];const b=L;let c;e[2]!==s?(c=()=>{g.issue.labelIds=s,console.log("form submitted")},e[2]=s,e[3]=c):c=e[3];const d=c;let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{C(n)},e[4]=l):l=e[4];const k=l,x=Ce,j=g.labels.sort(x),I=M.useRef(null),[r,S]=M.useState(!1);let _,T;e[5]===Symbol.for("react.memo_cache_sentinel")?(_=t.jsx("h1",{children:"With External Anchor"}),T=t.jsx("p",{children:"To use an external anchor, pass an `anchorRef` to `SelectPanel`. You would also need to control the `open` state with `onSubmit` and `onCancel`"}),e[5]=_,e[6]=T):(_=e[5],T=e[6]);let w;e[7]!==r?(w=()=>S(!r),e[7]=r,e[8]=w):w=e[8];const v=r?!0:void 0;let u;e[9]!==w||e[10]!==v?(u=t.jsx(ue,{ref:I,variant:"primary",onClick:w,"aria-haspopup":!0,"aria-expanded":v,children:"Assign label"}),e[9]=w,e[10]=v,e[11]=u):u=e[11];const y=A,F="Select labels";let o;e[12]!==d?(o=()=>{S(!1),d()},e[12]=d,e[13]=o):o=e[13];let P;e[14]===Symbol.for("react.memo_cache_sentinel")?(P=()=>{k(),S(!1)},e[14]=P):P=e[14];const f=N;let a;e[15]!==b||e[16]!==s?(a=V=>t.jsxs(N.Item,{onSelect:()=>b(V.id),selected:s.includes(V.id),children:[t.jsx(N.LeadingVisual,{children:oe(V.color)}),V.name,t.jsx(N.Description,{variant:"block",children:V.description})]},V.id),e[15]=b,e[16]=s,e[17]=a):a=e[17];const m=j.map(a);let B;e[18]!==f||e[19]!==m?(B=t.jsx(f,{children:m}),e[18]=f,e[19]=m,e[20]=B):B=e[20];let i;e[21]===Symbol.for("react.memo_cache_sentinel")?(i=t.jsx(A.Footer,{}),e[21]=i):i=e[21];let p;e[22]!==y||e[23]!==r||e[24]!==P||e[25]!==B||e[26]!==o?(p=t.jsxs(y,{title:F,anchorRef:I,open:r,onSubmit:o,onCancel:P,children:[B,i]}),e[22]=y,e[23]=r,e[24]=P,e[25]=B,e[26]=o,e[27]=p):p=e[27];let h;return e[28]!==p||e[29]!==_||e[30]!==T||e[31]!==u?(h=t.jsxs(t.Fragment,{children:[_,T,u,p]}),e[28]=p,e[29]=_,e[30]=T,e[31]=u,e[32]=h):h=e[32],h},K=()=>{const e=E.c(37),n=g.issue.labelIds,[s,C]=M.useState(n);let L;e[0]!==s?(L=f=>{s.includes(f)?C(s.filter(a=>a!==f)):C([...s,f])},e[0]=s,e[1]=L):L=e[1];const b=L;let c;e[2]!==s?(c=()=>{g.issue.labelIds=s,console.log("form submitted")},e[2]=s,e[3]=c):c=e[3];const d=c;let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{C(n)},e[4]=l):l=e[4];const k=l,x=Le;let j,I,r,S,_,T,w,v,u;if(e[5]!==b||e[6]!==d||e[7]!==s){const f=g.labels.sort(x);e[17]===Symbol.for("react.memo_cache_sentinel")?(u=t.jsx("h1",{children:"SelectPanel as Modal"}),e[17]=u):u=e[17],I=A,S="modal",_="Select labels",T=d,w=k,e[18]===Symbol.for("react.memo_cache_sentinel")?(v=t.jsx(A.Button,{children:"Assign label"}),e[18]=v):v=e[18],j=N;let a;e[19]!==b||e[20]!==s?(a=m=>t.jsxs(N.Item,{onSelect:()=>b(m.id),selected:s.includes(m.id),children:[t.jsx(N.LeadingVisual,{children:oe(m.color)}),m.name,t.jsx(N.Description,{variant:"block",children:m.description})]},m.id),e[19]=b,e[20]=s,e[21]=a):a=e[21],r=f.map(a),e[5]=b,e[6]=d,e[7]=s,e[8]=j,e[9]=I,e[10]=r,e[11]=S,e[12]=_,e[13]=T,e[14]=w,e[15]=v,e[16]=u}else j=e[8],I=e[9],r=e[10],S=e[11],_=e[12],T=e[13],w=e[14],v=e[15],u=e[16];let y;e[22]!==j||e[23]!==r?(y=t.jsx(j,{children:r}),e[22]=j,e[23]=r,e[24]=y):y=e[24];let F;e[25]===Symbol.for("react.memo_cache_sentinel")?(F=t.jsx(A.Footer,{}),e[25]=F):F=e[25];let o;e[26]!==I||e[27]!==y||e[28]!==S||e[29]!==_||e[30]!==T||e[31]!==w||e[32]!==v?(o=t.jsxs(I,{variant:S,title:_,onSubmit:T,onCancel:w,children:[v,y,F]}),e[26]=I,e[27]=y,e[28]=S,e[29]=_,e[30]=T,e[31]=w,e[32]=v,e[33]=o):o=e[33];let P;return e[34]!==o||e[35]!==u?(P=t.jsxs(t.Fragment,{children:[u,o]}),e[34]=o,e[35]=u,e[36]=P):P=e[36],P},J=()=>{const e=E.c(25),n=g.issue.assigneeIds,[s,C]=M.useState(n);let L;e[0]!==s?(L=i=>{s.includes(i)?C(s.filter(p=>p!==i)):C([...s,i])},e[0]=s,e[1]=L):L=e[1];const b=L;let c;e[2]===Symbol.for("react.memo_cache_sentinel")?(c=()=>C([]),e[2]=c):c=e[2];const d=c;let l;e[3]!==s?(l=()=>{g.issue.assigneeIds=s},e[3]=s,e[4]=l):l=e[4];const k=l,[x,j]=M.useState(g.collaborators),[I,r]=M.useState("");let S;e[5]===Symbol.for("react.memo_cache_sentinel")?(S=i=>{const p=i.currentTarget.value;r(p),j(p===""?g.collaborators:g.collaborators.map(h=>h.login.toLowerCase().startsWith(p)?{priority:1,collaborator:h}:h.name.startsWith(p)?{priority:2,collaborator:h}:h.login.toLowerCase().includes(p)?{priority:3,collaborator:h}:h.name.toLowerCase().includes(p)?{priority:4,collaborator:h}:{priority:-1,collaborator:h}).filter(xe).map(je))},e[5]=S):S=e[5];const _=S,T=we;let w;e[6]!==x||e[7]!==I?(w=I?x:g.collaborators.sort(T),e[6]=x,e[7]=I,e[8]=w):w=e[8];const v=w,{variant:u,Controls:y}=Se();let F;e[9]===Symbol.for("react.memo_cache_sentinel")?(F=t.jsx("h1",{children:"Responsive SelectPanel"}),e[9]=F):F=e[9];let o;e[10]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsx(A.Button,{variant:"invisible",trailingAction:ne,className:Z.ButtonCustom,children:"Assignees"}),e[10]=o):o=e[10];let P;e[11]===Symbol.for("react.memo_cache_sentinel")?(P=t.jsx(A.Header,{children:t.jsx(A.SearchInput,{onChange:_,"aria-label":"Search"})}),e[11]=P):P=e[11];let f;e[12]!==v||e[13]!==b||e[14]!==I||e[15]!==s?(f=v.length===0?t.jsx(A.Message,{variant:"empty",title:`No labels found for "${I}"`,children:"Try a different search term"}):t.jsx(N,{children:v.map(i=>t.jsxs(N.Item,{onSelect:()=>b(i.id),selected:s.includes(i.id),children:[t.jsx(N.LeadingVisual,{children:t.jsx(ie,{src:`https://github.com/${i.login}.png`})}),i.login,t.jsx(N.Description,{children:i.login})]},i.id))}),e[12]=v,e[13]=b,e[14]=I,e[15]=s,e[16]=f):f=e[16];let a;e[17]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsx(A.Footer,{}),e[17]=a):a=e[17];let m;e[18]!==k||e[19]!==f||e[20]!==u?(m=t.jsxs(A,{title:"Set assignees",variant:u,onSubmit:k,onClearSelection:d,children:[o,P,f,a]}),e[18]=k,e[19]=f,e[20]=u,e[21]=m):m=e[21];let B;return e[22]!==y||e[23]!==m?(B=t.jsxs(t.Fragment,{children:[F,y,m]}),e[22]=y,e[23]=m,e[24]=B):B=e[24],B},Se=()=>{const e=E.c(50);let n;e[0]===Symbol.for("react.memo_cache_sentinel")?(n={regular:"anchored",narrow:"full-screen"},e[0]=n):n=e[0];const[s,C]=M.useState(n);let L;e[1]===Symbol.for("react.memo_cache_sentinel")?(L={narrow:!0},e[1]=L):L=e[1];const b=de(L,!1);let c;e[2]===Symbol.for("react.memo_cache_sentinel")?(c=t.jsx("span",{className:q.ControlLabel,children:"Regular variant"}),e[2]=c):c=e[2];let d;e[3]!==b?(d=b?t.jsxs("span",{className:Z.AttentionText,children:[t.jsx(le,{size:16})," Resize screen to see regular variant"]}):null,e[3]=b,e[4]=d):d=e[4];let l;e[5]!==d?(l=t.jsxs("div",{className:q.ControlContent,children:[c,d]}),e[5]=d,e[6]=l):l=e[6];const k=s.regular==="anchored";let x;e[7]!==s?(x=()=>C({...s,regular:"anchored"}),e[7]=s,e[8]=x):x=e[8];let j;e[9]!==k||e[10]!==x?(j=t.jsx(z.Button,{selected:k,onClick:x,children:"Anchored"}),e[9]=k,e[10]=x,e[11]=j):j=e[11];const I=s.regular==="modal";let r;e[12]!==s?(r=()=>C({...s,regular:"modal"}),e[12]=s,e[13]=r):r=e[13];let S;e[14]!==I||e[15]!==r?(S=t.jsx(z.Button,{selected:I,onClick:r,children:"Modal"}),e[14]=I,e[15]=r,e[16]=S):S=e[16];let _;e[17]!==S||e[18]!==j?(_=t.jsxs(z,{"aria-label":"Regular variant",size:"small",children:[j,S]}),e[17]=S,e[18]=j,e[19]=_):_=e[19];let T;e[20]!==_||e[21]!==l?(T=t.jsxs("div",{className:q.ControlRow,children:[l,_]}),e[20]=_,e[21]=l,e[22]=T):T=e[22];let w;e[23]===Symbol.for("react.memo_cache_sentinel")?(w=t.jsx("span",{className:q.ControlLabel,children:"Narrow variant"}),e[23]=w):w=e[23];let v;e[24]!==b?(v=b?null:t.jsxs("span",{className:Z.AttentionText,children:[t.jsx(le,{size:16})," Resize screen to see narrow variant"]}),e[24]=b,e[25]=v):v=e[25];let u;e[26]!==v?(u=t.jsxs("div",{className:q.ControlContent,children:[w,v]}),e[26]=v,e[27]=u):u=e[27];const y=s.narrow==="full-screen";let F;e[28]!==s?(F=()=>C({...s,narrow:"full-screen"}),e[28]=s,e[29]=F):F=e[29];let o;e[30]!==y||e[31]!==F?(o=t.jsx(z.Button,{selected:y,onClick:F,children:"Full screen"}),e[30]=y,e[31]=F,e[32]=o):o=e[32];const P=s.narrow==="bottom-sheet";let f;e[33]!==s?(f=()=>C({...s,narrow:"bottom-sheet"}),e[33]=s,e[34]=f):f=e[34];let a;e[35]!==P||e[36]!==f?(a=t.jsx(z.Button,{selected:P,onClick:f,children:"Bottom sheet"}),e[35]=P,e[36]=f,e[37]=a):a=e[37];let m;e[38]!==o||e[39]!==a?(m=t.jsxs(z,{"aria-label":"Narrow variant",size:"small",children:[o,a]}),e[38]=o,e[39]=a,e[40]=m):m=e[40];let B;e[41]!==u||e[42]!==m?(B=t.jsxs("div",{className:q.ControlRow,children:[u,m]}),e[41]=u,e[42]=m,e[43]=B):B=e[43];let i;e[44]!==T||e[45]!==B?(i=t.jsxs("div",{className:q.ResponsiveControls,children:[T,B]}),e[44]=T,e[45]=B,e[46]=i):i=e[46];const p=i;let h;return e[47]!==p||e[48]!==s?(h={variant:s,Controls:p},e[47]=p,e[48]=s,e[49]=h):h=e[49],h};O.__docgenInfo={description:"",methods:[],displayName:"InstantSelectionVariant"};Q.__docgenInfo={description:"",methods:[],displayName:"SingleSelection"};X.__docgenInfo={description:"",methods:[],displayName:"WithWarning"};G.__docgenInfo={description:"",methods:[],displayName:"WithErrors"};Y.__docgenInfo={description:"",methods:[],displayName:"ExternalAnchor"};K.__docgenInfo={description:"",methods:[],displayName:"AsModal"};J.__docgenInfo={description:"",methods:[],displayName:"ResponsiveVariants"};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const [selectedTag, setSelectedTag] = React.useState<string>();
  const onSubmit = () => {
    if (!selectedTag) return;
    data.ref = selectedTag; // pretending to persist changes
  };
  const itemsToShow = data.tags;
  return <>
      <h1>Instant selection variant</h1>

      <SelectPanel title="Choose a tag" selectionVariant="instant" onSubmit={onSubmit}>
        <SelectPanel.Button leadingVisual={TagIcon}>{selectedTag || 'Choose a tag'}</SelectPanel.Button>

        <ActionList>
          {itemsToShow.map(tag => <ActionList.Item key={tag.id} onSelect={() => setSelectedTag(tag.id)} selected={selectedTag === tag.id}>
              {tag.name}
            </ActionList.Item>)}
        </ActionList>
        <SelectPanel.Footer>
          <SelectPanel.SecondaryAction variant="button">Edit tags</SelectPanel.SecondaryAction>
        </SelectPanel.Footer>
      </SelectPanel>
    </>;
}`,...O.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:"() => <h1>TODO</h1>",...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  /* Selection */

  const initialAssigneeIds = data.issue.assigneeIds; // mock initial state
  const [selectedAssigneeIds, setSelectedAssigneeIds] = React.useState<string[]>(initialAssigneeIds);
  const MAX_LIMIT = 3;
  const onCollaboratorSelect = (colloratorId: string) => {
    if (!selectedAssigneeIds.includes(colloratorId)) setSelectedAssigneeIds([...selectedAssigneeIds, colloratorId]);else setSelectedAssigneeIds(selectedAssigneeIds.filter(id => id !== colloratorId));
  };
  const onClearSelection = () => setSelectedAssigneeIds([]);
  const onSubmit = () => {
    data.issue.assigneeIds = selectedAssigneeIds; // pretending to persist changes
  };
  const onCancel = () => {
    setSelectedAssigneeIds(initialAssigneeIds);
  };

  /* Filtering */
  const [filteredUsers, setFilteredUsers] = React.useState(data.collaborators);
  const [query, setQuery] = React.useState('');
  const onSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const query = event.currentTarget.value;
    setQuery(query);
    if (query === '') setFilteredUsers(data.collaborators);else {
      setFilteredUsers(data.collaborators.map(collaborator => {
        if (collaborator.login.toLowerCase().startsWith(query)) return {
          priority: 1,
          collaborator
        };else if (collaborator.name.startsWith(query)) return {
          priority: 2,
          collaborator
        };else if (collaborator.login.toLowerCase().includes(query)) return {
          priority: 3,
          collaborator
        };else if (collaborator.name.toLowerCase().includes(query)) return {
          priority: 4,
          collaborator
        };else return {
          priority: -1,
          collaborator
        };
      }).filter(result => result.priority > 0).map(result => result.collaborator));
    }
  };
  const sortingFn = (itemA: {
    id: string;
  }, itemB: {
    id: string;
  }) => {
    const initialSelectedIds = data.issue.assigneeIds;
    if (initialSelectedIds.includes(itemA.id) && initialSelectedIds.includes(itemB.id)) return 1;else if (initialSelectedIds.includes(itemA.id)) return -1;else if (initialSelectedIds.includes(itemB.id)) return 1;else return 1;
  };
  const itemsToShow = query ? filteredUsers : data.collaborators.sort(sortingFn);
  return <>
      <h1>SelectPanel with warning</h1>

      <SelectPanel title="Set assignees" description={\`Select up to \${MAX_LIMIT} people\`} onSubmit={onSubmit} onCancel={onCancel} onClearSelection={onClearSelection}>
        <SelectPanel.Button variant="invisible" trailingAction={GearIcon} className={classes.ButtonCustom}>
          Assignees
        </SelectPanel.Button>
        <SelectPanel.Header>
          <SelectPanel.SearchInput onChange={onSearchInputChange} aria-label="Search" />
        </SelectPanel.Header>

        {selectedAssigneeIds.length >= MAX_LIMIT ? <SelectPanel.Message variant="warning" size="inline">
            You have reached the limit of {MAX_LIMIT} assignees on your free account.{' '}
            <Link href="/upgrade">Upgrade your account.</Link>
          </SelectPanel.Message> : null}

        {itemsToShow.length === 0 ? <SelectPanel.Message variant="empty" title={\`No labels found for "\${query}"\`}>
            Try a different search term
          </SelectPanel.Message> : <ActionList>
            {itemsToShow.map(collaborator => <ActionList.Item key={collaborator.id} onSelect={() => onCollaboratorSelect(collaborator.id)} selected={selectedAssigneeIds.includes(collaborator.id)} disabled={selectedAssigneeIds.length >= MAX_LIMIT && !selectedAssigneeIds.includes(collaborator.id)}>
                <ActionList.LeadingVisual>
                  <Avatar src={\`https://github.com/\${collaborator.login}.png\`} />
                </ActionList.LeadingVisual>
                {collaborator.login}
                <ActionList.Description>{collaborator.login}</ActionList.Description>
              </ActionList.Item>)}
          </ActionList>}

        <SelectPanel.Footer />
      </SelectPanel>
    </>;
}`,...X.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [searchBroken, setSearchBroken] = React.useState(true);
  const [issuesBroken, setIssuesBroken] = React.useState(true);

  /* Selection */
  const initialAssigneeIds = data.collaborators.slice(0, 3).map(c => c.id); // mock initial state
  const [selectedAssigneeIds, setSelectedAssigneeIds] = React.useState<string[]>(initialAssigneeIds);
  const onCollaboratorSelect = (colloratorId: string) => {
    if (!selectedAssigneeIds.includes(colloratorId)) setSelectedAssigneeIds([...selectedAssigneeIds, colloratorId]);else setSelectedAssigneeIds(selectedAssigneeIds.filter(id => id !== colloratorId));
  };
  const onClearSelection = () => setSelectedAssigneeIds([]);
  const onSubmit = () => {
    data.issue.assigneeIds = selectedAssigneeIds; // pretending to persist changes
  };
  const onCancel = () => {
    setSelectedAssigneeIds(initialAssigneeIds);
  };

  /* Filtering */
  const [filteredUsers, setFilteredUsers] = React.useState(searchBroken ? data.collaborators.filter(c => initialAssigneeIds.includes(c.id)) : data.collaborators);
  const [query, setQuery] = React.useState('');
  const onSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const query = event.currentTarget.value;
    setQuery(query);
    if (query === '') setFilteredUsers(data.collaborators);else {
      // if search is broken, only show assignees, not all collaborators
      const allCollaborators = searchBroken ? data.collaborators.filter(c => initialAssigneeIds.includes(c.id)) : data.collaborators;
      setFilteredUsers(allCollaborators.map(collaborator => {
        if (collaborator.login.toLowerCase().startsWith(query)) return {
          priority: 1,
          collaborator
        };else if (collaborator.name.startsWith(query)) return {
          priority: 2,
          collaborator
        };else if (collaborator.login.toLowerCase().includes(query)) return {
          priority: 3,
          collaborator
        };else if (collaborator.name.toLowerCase().includes(query)) return {
          priority: 4,
          collaborator
        };else return {
          priority: -1,
          collaborator
        };
      }).filter(result => result.priority > 0).map(result => result.collaborator));
    }
  };
  const sortingFn = (itemA: {
    id: string;
  }, itemB: {
    id: string;
  }) => {
    const initialSelectedIds = data.issue.assigneeIds;
    if (initialSelectedIds.includes(itemA.id) && initialSelectedIds.includes(itemB.id)) return 1;else if (initialSelectedIds.includes(itemA.id)) return -1;else if (initialSelectedIds.includes(itemB.id)) return 1;else return 1;
  };
  const itemsToShow = query ? filteredUsers : data.collaborators.sort(sortingFn);
  return <>
      <h1>SelectPanel with Errors</h1>

      <div className={sharedClasses.SwitchContainer}>
        <div className={sharedClasses.SwitchContent}>
          <span className={sharedClasses.SwitchLabel} id="switch-label">
            Break search API
          </span>
          <span className={sharedClasses.SwitchCaption} id="switch-caption">
            Turn on to show error message while searching
          </span>
        </div>
        <ToggleSwitch defaultChecked={true} onChange={enabled => setSearchBroken(enabled)} aria-labelledby="switch-label" aria-describedby="switch-caption" />
      </div>
      <div className={sharedClasses.SwitchContainerLast}>
        <div className={sharedClasses.SwitchContent}>
          <span id="break-issues-label" className={sharedClasses.SwitchLabel}>
            Break issues API
          </span>
          <span id="break-issues-caption" className={sharedClasses.SwitchCaption}>
            Turn on to break everything and show big error in panel
          </span>
        </div>
        <ToggleSwitch defaultChecked={true} onChange={enabled => setIssuesBroken(enabled)} aria-labelledby="break-issues-label" aria-describedby="break-issues-caption" />
      </div>

      <SelectPanel title="Set assignees" onSubmit={onSubmit} onCancel={onCancel} onClearSelection={onClearSelection}>
        <SelectPanel.Button variant="invisible" trailingAction={GearIcon} className={classes.ButtonCustom}>
          Assignees
        </SelectPanel.Button>
        <SelectPanel.Header>
          <SelectPanel.SearchInput onChange={onSearchInputChange} aria-label="Search" />
        </SelectPanel.Header>

        {issuesBroken ? <SelectPanel.Message variant="error" size="full" title="We couldn't load collaborators">
            Try again or if the problem persists, <Link href="/support">contact support</Link>
          </SelectPanel.Message> : <>
            {query && searchBroken ? <SelectPanel.Message variant="error" size="inline">
                We couldn&apos;t load all collaborators. Try again or if the problem persists,{' '}
                <Link href="/support">contact support</Link>
              </SelectPanel.Message> : null}
            {itemsToShow.length === 0 ? <SelectPanel.Message variant="empty" title={\`No labels found for "\${query}"\`}>
                Try a different search term
              </SelectPanel.Message> : <ActionList>
                {itemsToShow.map(collaborator => <ActionList.Item key={collaborator.id} onSelect={() => onCollaboratorSelect(collaborator.id)} selected={selectedAssigneeIds.includes(collaborator.id)}>
                    <ActionList.LeadingVisual>
                      <Avatar src={\`https://github.com/\${collaborator.login}.png\`} />
                    </ActionList.LeadingVisual>
                    {collaborator.login}
                    <ActionList.Description>{collaborator.login}</ActionList.Description>
                  </ActionList.Item>)}
              </ActionList>}
          </>}

        <SelectPanel.Footer />
      </SelectPanel>
    </>;
}`,...G.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const initialSelectedLabels = data.issue.labelIds; // mock initial state: has selected labels
  const [selectedLabelIds, setSelectedLabelIds] = React.useState<string[]>(initialSelectedLabels);

  /* Selection */
  const onLabelSelect = (labelId: string) => {
    if (!selectedLabelIds.includes(labelId)) setSelectedLabelIds([...selectedLabelIds, labelId]);else setSelectedLabelIds(selectedLabelIds.filter(id => id !== labelId));
  };
  const onSubmit = () => {
    data.issue.labelIds = selectedLabelIds; // pretending to persist changes

    // eslint-disable-next-line no-console
    console.log('form submitted');
  };
  const onCancel = () => {
    setSelectedLabelIds(initialSelectedLabels);
  };
  const sortingFn = (itemA: {
    id: string;
  }, itemB: {
    id: string;
  }) => {
    const initialSelectedIds = data.issue.labelIds;
    if (initialSelectedIds.includes(itemA.id) && initialSelectedIds.includes(itemB.id)) return 1;else if (initialSelectedIds.includes(itemA.id)) return -1;else if (initialSelectedIds.includes(itemB.id)) return 1;else return 1;
  };
  const itemsToShow = data.labels.sort(sortingFn);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);
  return <>
      <h1>With External Anchor</h1>
      <p>
        To use an external anchor, pass an \`anchorRef\` to \`SelectPanel\`. You would also need to control the \`open\` state
        with \`onSubmit\` and \`onCancel\`
      </p>

      <Button ref={anchorRef} variant="primary" onClick={() => setOpen(!open)} aria-haspopup aria-expanded={open ? true : undefined}>
        Assign label
      </Button>

      <SelectPanel title="Select labels" anchorRef={anchorRef} open={open} // this needs to be set with the button
    onSubmit={() => {
      setOpen(false); // close on submit
      onSubmit();
    }} onCancel={() => {
      onCancel();
      setOpen(false); // close on cancel
    }}>
        <ActionList>
          {itemsToShow.map(label => <ActionList.Item key={label.id} onSelect={() => onLabelSelect(label.id)} selected={selectedLabelIds.includes(label.id)}>
              <ActionList.LeadingVisual>{getCircle(label.color)}</ActionList.LeadingVisual>
              {label.name}
              <ActionList.Description variant="block">{label.description}</ActionList.Description>
            </ActionList.Item>)}
        </ActionList>
        <SelectPanel.Footer />
      </SelectPanel>
    </>;
}`,...Y.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const initialSelectedLabels = data.issue.labelIds; // mock initial state: has selected labels
  const [selectedLabelIds, setSelectedLabelIds] = React.useState<string[]>(initialSelectedLabels);

  /* Selection */
  const onLabelSelect = (labelId: string) => {
    if (!selectedLabelIds.includes(labelId)) setSelectedLabelIds([...selectedLabelIds, labelId]);else setSelectedLabelIds(selectedLabelIds.filter(id => id !== labelId));
  };
  const onSubmit = () => {
    data.issue.labelIds = selectedLabelIds; // pretending to persist changes

    // eslint-disable-next-line no-console
    console.log('form submitted');
  };
  const onCancel = () => {
    setSelectedLabelIds(initialSelectedLabels);
  };
  const sortingFn = (itemA: {
    id: string;
  }, itemB: {
    id: string;
  }) => {
    const initialSelectedIds = data.issue.labelIds;
    if (initialSelectedIds.includes(itemA.id) && initialSelectedIds.includes(itemB.id)) return 1;else if (initialSelectedIds.includes(itemA.id)) return -1;else if (initialSelectedIds.includes(itemB.id)) return 1;else return 1;
  };
  const itemsToShow = data.labels.sort(sortingFn);
  return <>
      <h1>SelectPanel as Modal</h1>

      <SelectPanel variant="modal" title="Select labels" onSubmit={onSubmit} onCancel={onCancel}>
        <SelectPanel.Button>Assign label</SelectPanel.Button>

        <ActionList>
          {itemsToShow.map(label => <ActionList.Item key={label.id} onSelect={() => onLabelSelect(label.id)} selected={selectedLabelIds.includes(label.id)}>
              <ActionList.LeadingVisual>{getCircle(label.color)}</ActionList.LeadingVisual>
              {label.name}
              <ActionList.Description variant="block">{label.description}</ActionList.Description>
            </ActionList.Item>)}
        </ActionList>
        <SelectPanel.Footer />
      </SelectPanel>
    </>;
}`,...K.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  /* Selection */
  const initialAssigneeIds = data.issue.assigneeIds; // mock initial state
  const [selectedAssigneeIds, setSelectedAssigneeIds] = React.useState<string[]>(initialAssigneeIds);
  const onCollaboratorSelect = (colloratorId: string) => {
    if (!selectedAssigneeIds.includes(colloratorId)) setSelectedAssigneeIds([...selectedAssigneeIds, colloratorId]);else setSelectedAssigneeIds(selectedAssigneeIds.filter(id => id !== colloratorId));
  };
  const onClearSelection = () => setSelectedAssigneeIds([]);
  const onSubmit = () => {
    data.issue.assigneeIds = selectedAssigneeIds; // pretending to persist changes
  };

  /* Filtering */
  const [filteredUsers, setFilteredUsers] = React.useState(data.collaborators);
  const [query, setQuery] = React.useState('');
  const onSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const query = event.currentTarget.value;
    setQuery(query);
    if (query === '') setFilteredUsers(data.collaborators);else {
      setFilteredUsers(data.collaborators.map(collaborator => {
        if (collaborator.login.toLowerCase().startsWith(query)) return {
          priority: 1,
          collaborator
        };else if (collaborator.name.startsWith(query)) return {
          priority: 2,
          collaborator
        };else if (collaborator.login.toLowerCase().includes(query)) return {
          priority: 3,
          collaborator
        };else if (collaborator.name.toLowerCase().includes(query)) return {
          priority: 4,
          collaborator
        };else return {
          priority: -1,
          collaborator
        };
      }).filter(result => result.priority > 0).map(result => result.collaborator));
    }
  };
  const sortingFn = (itemA: {
    id: string;
  }, itemB: {
    id: string;
  }) => {
    const initialSelectedIds = data.issue.assigneeIds;
    if (initialSelectedIds.includes(itemA.id) && initialSelectedIds.includes(itemB.id)) return 1;else if (initialSelectedIds.includes(itemA.id)) return -1;else if (initialSelectedIds.includes(itemB.id)) return 1;else return 1;
  };
  const itemsToShow = query ? filteredUsers : data.collaborators.sort(sortingFn);

  /** Controls for story/example */
  const {
    variant,
    Controls
  } = useResponsiveControlsForStory();
  return <>
      <h1>Responsive SelectPanel</h1>

      {Controls}

      <SelectPanel title="Set assignees" variant={variant} onSubmit={onSubmit} onClearSelection={onClearSelection}>
        <SelectPanel.Button variant="invisible" trailingAction={GearIcon} className={classes.ButtonCustom}>
          Assignees
        </SelectPanel.Button>
        <SelectPanel.Header>
          <SelectPanel.SearchInput onChange={onSearchInputChange} aria-label="Search" />
        </SelectPanel.Header>

        {itemsToShow.length === 0 ? <SelectPanel.Message variant="empty" title={\`No labels found for "\${query}"\`}>
            Try a different search term
          </SelectPanel.Message> : <ActionList>
            {itemsToShow.map(collaborator => <ActionList.Item key={collaborator.id} onSelect={() => onCollaboratorSelect(collaborator.id)} selected={selectedAssigneeIds.includes(collaborator.id)}>
                <ActionList.LeadingVisual>
                  <Avatar src={\`https://github.com/\${collaborator.login}.png\`} />
                </ActionList.LeadingVisual>
                {collaborator.login}
                <ActionList.Description>{collaborator.login}</ActionList.Description>
              </ActionList.Item>)}
          </ActionList>}

        <SelectPanel.Footer />
      </SelectPanel>
    </>;
}`,...J.parameters?.docs?.source}}};function pe(e){return e.priority>0}function ge(e){return e.collaborator}function fe(e,n){const s=g.issue.assigneeIds;return s.includes(e.id)&&s.includes(n.id)?1:s.includes(e.id)?-1:(s.includes(n.id),1)}function be(e){return e.id}function Ie(e){return e.priority>0}function ye(e){return e.collaborator}function Ae(e,n){const s=g.issue.assigneeIds;return s.includes(e.id)&&s.includes(n.id)?1:s.includes(e.id)?-1:(s.includes(n.id),1)}function Ce(e,n){const s=g.issue.labelIds;return s.includes(e.id)&&s.includes(n.id)?1:s.includes(e.id)?-1:(s.includes(n.id),1)}function Le(e,n){const s=g.issue.labelIds;return s.includes(e.id)&&s.includes(n.id)?1:s.includes(e.id)?-1:(s.includes(n.id),1)}function xe(e){return e.priority>0}function je(e){return e.collaborator}function we(e,n){const s=g.issue.assigneeIds;return s.includes(e.id)&&s.includes(n.id)?1:s.includes(e.id)?-1:(s.includes(n.id),1)}const Wt=["InstantSelectionVariant","SingleSelection","WithWarning","WithErrors","ExternalAnchor","AsModal","ResponsiveVariants"];export{K as AsModal,Y as ExternalAnchor,O as InstantSelectionVariant,J as ResponsiveVariants,Q as SingleSelection,G as WithErrors,X as WithWarning,Wt as __namedExportsOrder,Vt as default};
