import{d as h,R as F,j as t}from"./iframe-Cfz2vXeE.js";import{a5 as oe,$ as ce,m as ye,P as fe,ac as ge,K as xe,D as Ce}from"./index.esm-C1WN7kEu.js";import{A as R}from"./index-C-OhZ25x.js";import{B as v}from"./index-B8kiomSz.js";import{I as j}from"./IconButton-qXcIkMuV.js";import{B as pe}from"./Button-3sCteC9V.js";import{a as de,d as ue,D as y,T as i}from"./index-Ds4HAJTU.js";import{L as o}from"./Label-ibdJir2D.js";import{V as le}from"./_VisuallyHidden-CKJB9yD0.js";import{R as g}from"./RelativeTime-CnUjRhzJ.js";import{L as u}from"./LabelGroup-BdjCQDeU.js";import{H as se}from"./Heading-Axc3-HQM.js";import{A as ne}from"./ActionMenu-VmSenYrX.js";import"./preload-helper-D9Z9MdNV.js";import"./Link-Dm7wEaum.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./invariant-Dix8OlSS.js";import"./useFocusZone-BvuuCBlY.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./Truncate-DUc3hzfC.js";import"./Tooltip-BuVThTi0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./ConfirmationDialog-oJkiCKoM.js";import"./client-BWxrjV1N.js";import"./Dialog-BYWFp9hz.js";import"./useFocusTrap-CL_Yl_fl.js";import"./Portal-BKCn1yDJ.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./ScrollableRegion-CKacTlaY.js";import"./useOverflow-CIpObA8I.js";import"./SkeletonText-Dy-H_Tj2.js";import"./SkeletonBox-ClHTzzEx.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./model-BPbuF8Ix.js";import"./create-component-3GntSW2q.js";import"./AnchoredOverlay-DQ90Zw6u.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./Overlay-Du2pzphD.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./useFeatureFlag-paATTdb3.js";import"./useProvidedStateOrCreate-BEKIGSkE.js";import"./useMnemonics-D4gqZtvW.js";function Se(){function e(r){return{...r,id:r.id??r.field}}return{column:e}}const we=Date.now(),_=[];for(let e=0;e<1e3;e++)_.push({id:e,name:`Repository ${e+1}`,type:e%3===0?"internal":"public",updatedAt:we-1e3*60*60*24*e,securityFeatures:{dependabot:[],codeScanning:[]}});function Te(e=1e3){return new Promise(r=>{setTimeout(r,e)})}function Fe(e,r){return Math.floor(Math.random()*r)+e}async function je({sort:e="name",direction:r="asc",page:a,perPage:n=30}={}){await Te(Fe(2500,3500));const s=_.slice().sort((d,c)=>e==="name"?r==="asc"?de(d.name,c.name):de(c.name,d.name):r==="asc"?ue(d.updatedAt,c.updatedAt):ue(c.updatedAt,d.updatedAt));if(a!==void 0){const d=a*n;return s.slice(d,d+n)}return s}function Ae(e,r){const a=h.c(11),[n,s]=F.useState(!0),[d,c]=F.useState(null),[x,C]=F.useState(null),f=F.useRef(r);let p;a[0]!==e?(p=Array.isArray(e)?e.join("."):e,a[0]=e,a[1]=p):p=a[1];const b=p;let m;a[2]!==r?(m=()=>{f.current=r},a[2]=r,a[3]=m):m=a[3],F.useEffect(m);let w;a[4]===Symbol.for("react.memo_cache_sentinel")?(w=()=>{const te=new AbortController;return s(!0),c(null),C(null),f.current({signal:te.signal}).then(ae=>{te.signal.aborted||(s(!1),C(ae),c(null))}).catch(ae=>{te.signal.aborted||(s(!1),C(null),c(ae))}),()=>{te.abort()}},a[4]=w):w=a[4];let T;a[5]!==b?(T=[b],a[5]=b,a[6]=T):T=a[6],F.useEffect(w,T);let D;return a[7]!==x||a[8]!==d||a[9]!==n?(D={data:x,error:d,loading:n},a[7]=x,a[8]=d,a[9]=n,a[10]=D):D=a[10],D}function _e(e){const r=h.c(4),{queryKey:a,queryFn:n}=e,{error:s,loading:d,data:c}=Ae(a,n),[x,C]=F.useState(d),[f,p]=F.useState(!1),[b,m]=F.useState(null);d!==x&&(C(d),d===!1?s?m(s):f?(m(null),p(!1)):(m(new Error("Flakey error")),p(!0)):m(null));const w=b===null?c:null;let T;return r[0]!==d||r[1]!==w||r[2]!==b?(T={error:b,loading:d,data:w},r[0]=d,r[1]=w,r[2]=b,r[3]=T):T=r[3],T}const Le="prc-DataTable-RepositoryHeader-QTj-b",De={RepositoryHeader:Le},{action:L}=__STORYBOOK_MODULE_ACTIONS__,Cn={title:"Experimental/Components/DataTable/Features",component:y},A=Date.now(),Re=1e3,be=60*Re,ie=60*be,me=24*ie,he=7*me,ve=4*he,S=[{id:1,name:"codeql-dca-worker",type:"internal",updatedAt:A,securityFeatures:{dependabot:["alerts","security updates"],codeScanning:["report secrets"]}},{id:2,name:"aegir",type:"public",updatedAt:A-5*be,securityFeatures:{dependabot:["alerts"],codeScanning:["report secrets"]}},{id:3,name:"strapi",type:"public",updatedAt:A-1*ie,securityFeatures:{dependabot:[],codeScanning:[]}},{id:4,name:"codeql-ci-nightlies",type:"public",updatedAt:A-6*ie,securityFeatures:{dependabot:["alerts"],codeScanning:[]}},{id:5,name:"dependabot-updates",type:"public",updatedAt:A-1*me,securityFeatures:{dependabot:[],codeScanning:[]}},{id:6,name:"tsx-create-react-app",type:"public",updatedAt:A-1*he,securityFeatures:{dependabot:[],codeScanning:[]}},{id:7,name:"bootstrap",type:"public",updatedAt:A-1*ve,securityFeatures:{dependabot:["alerts"],codeScanning:[]}},{id:8,name:"docker-templates",type:"public",updatedAt:17254944e5,securityFeatures:{dependabot:["alerts"],codeScanning:[]}}];function l(e){return e[0].toUpperCase()+e.slice(1)}const k=()=>{const e=h.c(2);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),e[0]=r):r=e[0];let a;return e[1]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsxs(i.Container,{children:[r,t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:S,columns:[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:Ie},{header:"Updated",field:"updatedAt",renderCell:ke},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:He},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:Pe}]})]}),e[1]=a):a=e[1],a},G=()=>{const e=h.c(3);let r,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),a=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[0]=r,e[1]=a):(r=e[0],a=e[1]);let n;return e[2]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsxs(i.Container,{children:[r,a,t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:S,columns:[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:Be},{header:"Updated",field:"updatedAt",renderCell:Ue},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:$e},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:ze}]})]}),e[2]=n):n=e[2],n},H=()=>{const e=h.c(4);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=Array.from(S).sort(Oe),e[0]=r):r=e[0];const a=r;let n,s;e[1]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),s=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[1]=n,e[2]=s):(n=e[1],s=e[2]);let d;return e[3]===Symbol.for("react.memo_cache_sentinel")?(d=t.jsxs(i.Container,{children:[n,s,t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:a,columns:[{header:"Repository",field:"name",rowHeader:!0,sortBy:"alphanumeric"},{header:"Type",field:"type",renderCell:Me},{header:"Updated",field:"updatedAt",sortBy:"datetime",renderCell:Ve},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:Ke},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:Ye}],initialSortColumn:"updatedAt",initialSortDirection:"DESC"})]}),e[3]=d):d=e[3],d},W=()=>{const e=h.c(4);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=Array.from(S).sort(Je),e[0]=r):r=e[0];const a=r,n=Xe;let s,d;e[1]===Symbol.for("react.memo_cache_sentinel")?(s=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),d=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[1]=s,e[2]=d):(s=e[1],d=e[2]);let c;return e[3]===Symbol.for("react.memo_cache_sentinel")?(c=t.jsxs(i.Container,{children:[s,d,t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:a,columns:[{header:"Repository",field:"name",rowHeader:!0,sortBy:"alphanumeric"},{header:"Type",field:"type",renderCell:Ze},{header:"Updated",field:"updatedAt",sortBy:"datetime",renderCell:et},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:rt,sortBy:n},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:nt}],initialSortColumn:"updatedAt",initialSortDirection:"DESC"})]}),e[3]=c):c=e[3],c},P=()=>{const e=h.c(5);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),e[0]=r):r=e[0];let a,n,s;e[1]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsx(i.Actions,{children:t.jsx(pe,{children:"Action"})}),n=t.jsx(i.Divider,{}),s=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[1]=a,e[2]=n,e[3]=s):(a=e[1],n=e[2],s=e[3]);let d;return e[4]===Symbol.for("react.memo_cache_sentinel")?(d=t.jsxs(i.Container,{children:[r,a,n,s,t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:S,columns:[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:it},{header:"Updated",field:"updatedAt",renderCell:ot},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:st},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:ut}]})]}),e[4]=d):d=e[4],d},B=()=>{const e=h.c(3);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx(se,{as:"h2",id:"table-title",children:"Repositories"}),e[0]=r):r=e[0];let a;e[1]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsx(i.Actions,{children:t.jsx(pe,{children:"Action"})}),e[1]=a):a=e[1];let n;return e[2]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsxs(t.Fragment,{children:[r,t.jsxs(i.Container,{children:[a,t.jsx(y,{"aria-labelledby":"table-title",data:S,columns:[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:ct},{header:"Updated",field:"updatedAt",renderCell:pt},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:mt},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:yt}]})]})]}),e[2]=n):n=e[2],n},U=()=>{const e=h.c(5);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),e[0]=r):r=e[0];let a,n,s;e[1]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsxs(i.Actions,{children:[t.jsx(j,{"aria-label":"Download",icon:oe,variant:"invisible"}),t.jsx(j,{"aria-label":"Add row",icon:ce,variant:"invisible"})]}),n=t.jsx(i.Divider,{}),s=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[1]=a,e[2]=n,e[3]=s):(a=e[1],n=e[2],s=e[3]);let d;return e[4]===Symbol.for("react.memo_cache_sentinel")?(d=t.jsxs(i.Container,{children:[r,a,n,s,t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:S,columns:[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:ft},{header:"Updated",field:"updatedAt",renderCell:gt},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:Ct},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:wt}]})]}),e[4]=d):d=e[4],d},E=()=>{const e=h.c(3);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx(se,{as:"h2",id:"table-title",children:"Repositories"}),e[0]=r):r=e[0];let a;e[1]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsxs(i.Actions,{children:[t.jsx(j,{"aria-label":"Download",icon:oe,variant:"invisible"}),t.jsx(j,{"aria-label":"Add row",icon:ce,variant:"invisible"})]}),e[1]=a):a=e[1];let n;return e[2]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsxs(t.Fragment,{children:[r,t.jsxs(i.Container,{children:[a,t.jsx(y,{"aria-labelledby":"table-title",data:S,columns:[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:Tt},{header:"Updated",field:"updatedAt",renderCell:Ft},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:At},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:Lt}]})]})]}),e[2]=n):n=e[2],n},$=()=>{const e=h.c(3);let r,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),a=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[0]=r,e[1]=a):(r=e[0],a=e[1]);let n;return e[2]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsxs(i.Container,{children:[r,a,t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:S,columns:[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:Dt},{header:"Updated",field:"updatedAt",renderCell:Rt},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:It},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:Gt},{id:"actions",header:Ht,renderCell:Wt}]})]}),e[2]=n):n=e[2],n},N=()=>{const e=h.c(3);let r,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),a=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[0]=r,e[1]=a):(r=e[0],a=e[1]);let n;return e[2]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsxs(i.Container,{children:[r,a,t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:S,columns:[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:Pt},{header:"Updated",field:"updatedAt",renderCell:Bt},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:Et},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:Nt},{id:"actions",header:zt,renderCell:Ot}]})]}),e[2]=n):n=e[2],n},z=()=>{const e=h.c(3);let r,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),a=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[0]=r,e[1]=a):(r=e[0],a=e[1]);let n;return e[2]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsxs(i.Container,{children:[r,a,t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:S,columns:[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:Mt},{header:"Updated",field:"updatedAt",renderCell:Vt},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:Kt},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:Yt},{id:"actions",header:Jt,renderCell:Xt}]})]}),e[2]=n):n=e[2],n},O=()=>{const e=h.c(2);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),e[0]=r):r=e[0];let a;return e[1]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsxs(i.Container,{children:[r,t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:S,columns:[{header:"grow w/ 200px max",field:"name",rowHeader:!0,width:"grow",maxWidth:"200px"},{header:"growCollapse w/ 100px min",field:"type",renderCell:Zt,width:"growCollapse",minWidth:"100px"},{header:"auto",field:"updatedAt",renderCell:er,width:"auto"},{header:"200px",field:"securityFeatures.dependabot",renderCell:rr,width:"200px"},{header:"undefined (defaults to grow)",field:"securityFeatures.codeScanning",renderCell:nr}]})]}),e[1]=a):a=e[1],a},M=()=>{const e=h.c(3);let r,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx(se,{as:"h2",id:"repositories",children:"Security coverage"}),a=t.jsx("p",{id:"repositories-subtitle",children:"Organization members can only see data for the most recently-updated repositories. To see all repositories, talk to your organization administrator about becoming a security manager."}),e[0]=r,e[1]=a):(r=e[0],a=e[1]);let n;return e[2]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsxs(t.Fragment,{children:[r,a,t.jsx(i.Container,{children:t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:S,columns:[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:ir},{header:"Updated",field:"updatedAt",renderCell:or},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:sr},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:ur}]})})]}),e[2]=n):n=e[2],n},V=()=>{const e=h.c(1);let r;if(e[0]===Symbol.for("react.memo_cache_sentinel")){const a=[];r=a.length===0?t.jsxs(v,{border:!0,children:[t.jsx(v.Visual,{children:t.jsx(ye,{size:"medium"})}),t.jsx(v.Heading,{children:"Blankslate heading"}),t.jsx(v.Description,{children:"Use it to provide information when no dynamic content exists."}),t.jsx(v.PrimaryAction,{href:"#",children:"Primary action"}),t.jsx(v.SecondaryAction,{href:"#",children:"Secondary action link"})]}):t.jsxs(i.Container,{children:[t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:a,columns:[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:cr},{header:"Updated",field:"updatedAt",renderCell:pr},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:mr},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:yr}]})]}),e[0]=r}else r=e[0];return r},Q=()=>{const e=h.c(4);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r={width:500},e[0]=r):r=e[0];let a,n;e[1]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),n=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[1]=a,e[2]=n):(a=e[1],n=e[2]);let s;return e[3]===Symbol.for("react.memo_cache_sentinel")?(s=t.jsx("div",{style:r,children:t.jsxs(i.Container,{children:[a,n,t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:S,columns:[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:fr},{header:"Updated",field:"updatedAt",renderCell:gr},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:Cr},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:wr}]})]})}),e[3]=s):s=e[3],s},I=Se(),re=[I.column({header:"Repository",field:"name",rowHeader:!0}),I.column({header:"Type",field:"type",renderCell:e=>t.jsx(o,{children:l(e.type)})}),I.column({header:"Updated",field:"updatedAt",renderCell:e=>t.jsx(g,{date:new Date(e.updatedAt)})}),I.column({header:"Dependabot",field:"securityFeatures.dependabot",renderCell:e=>e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(r=>t.jsx(o,{children:l(r)},r))}):null}),I.column({header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:e=>e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(r=>t.jsx(o,{children:l(r)},r))}):null})],K=()=>{const e=h.c(4),[r]=F.useState(!0);let a,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),n=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[0]=a,e[1]=n):(a=e[0],n=e[1]);let s;return e[2]!==r?(s=t.jsxs(i.Container,{children:[a,n,r?t.jsx(i.Skeleton,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",columns:re,rows:10}):t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:S,columns:re})]}),e[2]=r,e[3]=s):s=e[3],s},q=()=>{const e=h.c(3);let r,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),a=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[0]=r,e[1]=a):(r=e[0],a=e[1]);let n;return e[2]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsxs(i.Container,{children:[r,a,t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:S,columns:[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:Tr},{header:"Updated",field:"updatedAt",renderCell:Fr},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:Ar},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:Lr}]})]}),e[2]=n):n=e[2],n},Y=()=>{const e=h.c(4);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=Array.from(S).sort(Dr),e[0]=r):r=e[0];const a=r;let n,s;e[1]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),s=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[1]=n,e[2]=s):(n=e[1],s=e[2]);let d;return e[3]===Symbol.for("react.memo_cache_sentinel")?(d=t.jsxs(i.Container,{children:[n,s,t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:a,columns:[{header:Rr,field:"name",rowHeader:!0,sortBy:"alphanumeric",align:"end"},{header:"Type",field:"type",renderCell:vr,align:"end"},{header:"Updated",field:"updatedAt",sortBy:"datetime",renderCell:Ir,align:"end"},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:Gr,align:"end"},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:Wr,align:"end"}],initialSortColumn:"updatedAt",initialSortDirection:"DESC"})]}),e[3]=d):d=e[3],d},J=()=>{const e=h.c(3);let r,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),a=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"Click any sortable header and watch the Actions panel."}),e[0]=r,e[1]=a):(r=e[0],a=e[1]);let n;return e[2]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsxs(i.Container,{children:[r,a,t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:S,onToggleSort:Pr,columns:[{header:"Repository",field:"name",rowHeader:!0,sortBy:"alphanumeric"},{header:"Type",field:"type",renderCell:Br},{header:"Updated",field:"updatedAt",sortBy:"datetime",renderCell:Ur},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:$r},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:zr}],initialSortColumn:"updatedAt",initialSortDirection:"DESC"})]}),e[2]=n):n=e[2],n},X=()=>{const e=h.c(11),[r,a]=F.useState(0),n=r*10,s=n+10;let d;e[0]!==s||e[1]!==n?(d=_.slice(n,s),e[0]=s,e[1]=n,e[2]=d):d=e[2];const c=d;let x,C;e[3]===Symbol.for("react.memo_cache_sentinel")?(x=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),C=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[3]=x,e[4]=C):(x=e[3],C=e[4]);let f;e[5]===Symbol.for("react.memo_cache_sentinel")?(f=[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:Or},{header:"Updated",field:"updatedAt",renderCell:Mr},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:Qr},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:qr}],e[5]=f):f=e[5];let p;e[6]!==c?(p=t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:c,columns:f}),e[6]=c,e[7]=p):p=e[7];let b;e[8]===Symbol.for("react.memo_cache_sentinel")?(b=t.jsx(i.Pagination,{"aria-label":"Pagination for Repositories",pageSize:10,totalCount:_.length,onChange:w=>{const{pageIndex:T}=w;a(T)}}),e[8]=b):b=e[8];let m;return e[9]!==p?(m=t.jsxs(i.Container,{children:[x,C,p,b]}),e[9]=p,e[10]=m):m=e[10],m},Z=()=>{const e=h.c(11),[r,a]=F.useState(0),n=r*10,s=n+10;let d;e[0]!==s||e[1]!==n?(d=_.slice(n,s),e[0]=s,e[1]=n,e[2]=d):d=e[2];const c=d;let x,C;e[3]===Symbol.for("react.memo_cache_sentinel")?(x=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),C=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[3]=x,e[4]=C):(x=e[3],C=e[4]);let f;e[5]===Symbol.for("react.memo_cache_sentinel")?(f=[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:Yr},{header:"Updated",field:"updatedAt",renderCell:Jr},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:Zr},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:ta}],e[5]=f):f=e[5];let p;e[6]!==c?(p=t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:c,columns:f}),e[6]=c,e[7]=p):p=e[7];let b;e[8]===Symbol.for("react.memo_cache_sentinel")?(b=t.jsx(i.Pagination,{"aria-label":"Pagination for Repositories",pageSize:10,totalCount:_.length,onChange:w=>{const{pageIndex:T}=w;a(T)},defaultPageIndex:49}),e[8]=b):b=e[8];let m;return e[9]!==p?(m=t.jsxs(i.Container,{children:[x,C,p,b]}),e[9]=p,e[10]=m):m=e[10],m},ee=()=>{const e=h.c(16),[r,a]=F.useState(0);let n;e[0]!==r?(n={queryKey:["repos",10,r],queryFn:()=>je({page:r,perPage:10})},e[0]=r,e[1]=n):n=e[1];const{error:s,loading:d,data:c}=_e(n);let x,C;e[2]===Symbol.for("react.memo_cache_sentinel")?(x=t.jsx(i.Title,{as:"h2",id:"repositories",children:"Repositories"}),C=t.jsx(i.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[2]=x,e[3]=C):(x=e[2],C=e[3]);let f;e[4]!==s||e[5]!==d?(f=d||s?t.jsx(i.Skeleton,{columns:re}):null,e[4]=s,e[5]=d,e[6]=f):f=e[6];let p;e[7]!==s?(p=s?t.jsx(i.ErrorDialog,{onDismiss:ra,onRetry:aa}):null,e[7]=s,e[8]=p):p=e[8];let b;e[9]!==c?(b=c?t.jsx(y,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:c,columns:re}):null,e[9]=c,e[10]=b):b=e[10];let m;e[11]===Symbol.for("react.memo_cache_sentinel")?(m=t.jsx(i.Pagination,{"aria-label":"Pagination for Repositories",pageSize:10,totalCount:_.length,onChange:T=>{const{pageIndex:D}=T;a(D)}}),e[11]=m):m=e[11];let w;return e[12]!==f||e[13]!==p||e[14]!==b?(w=t.jsxs(i.Container,{children:[x,C,f,p,b,m]}),e[12]=f,e[13]=p,e[14]=b,e[15]=w):w=e[15],w};k.__docgenInfo={description:"",methods:[],displayName:"WithTitle"};G.__docgenInfo={description:"",methods:[],displayName:"WithTitleAndSubtitle"};H.__docgenInfo={description:"",methods:[],displayName:"WithSorting"};W.__docgenInfo={description:"",methods:[],displayName:"WithCustomSorting"};P.__docgenInfo={description:"",methods:[],displayName:"WithAction"};B.__docgenInfo={description:"",methods:[],displayName:"WithActionOnly"};U.__docgenInfo={description:"",methods:[],displayName:"WithActions"};E.__docgenInfo={description:"",methods:[],displayName:"WithActionsOnly"};$.__docgenInfo={description:"",methods:[],displayName:"WithRowAction"};N.__docgenInfo={description:"",methods:[],displayName:"WithRowActions"};z.__docgenInfo={description:"",methods:[],displayName:"WithRowActionMenu"};O.__docgenInfo={description:"",methods:[],displayName:"MixedColumnWidths"};M.__docgenInfo={description:"",methods:[],displayName:"WithCustomHeading"};V.__docgenInfo={description:"",methods:[],displayName:"WithNoContent"};Q.__docgenInfo={description:"",methods:[],displayName:"WithOverflow"};K.__docgenInfo={description:"",methods:[],displayName:"WithLoading"};q.__docgenInfo={description:"",methods:[],displayName:"WithPlaceholderCells"};Y.__docgenInfo={description:"",methods:[],displayName:"WithRightAlignedColumns"};J.__docgenInfo={description:"",methods:[],displayName:"WithSortEvents"};X.__docgenInfo={description:"",methods:[],displayName:"WithPagination"};Z.__docgenInfo={description:"",methods:[],displayName:"WithPaginationUsingDefaultPageIndex"};ee.__docgenInfo={description:"",methods:[],displayName:"WithNetworkError"};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => <Table.Container>
    <Table.Title as="h2" id="repositories">
      Repositories
    </Table.Title>
    <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={data} columns={[{
    header: 'Repository',
    field: 'name',
    rowHeader: true
  }, {
    header: 'Type',
    field: 'type',
    renderCell: row => {
      return <Label>{uppercase(row.type)}</Label>;
    }
  }, {
    header: 'Updated',
    field: 'updatedAt',
    renderCell: row => {
      return <RelativeTime date={new Date(row.updatedAt)} />;
    }
  }, {
    header: 'Dependabot',
    field: 'securityFeatures.dependabot',
    renderCell: row => {
      return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                {row.securityFeatures.dependabot.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }, {
    header: 'Code scanning',
    field: 'securityFeatures.codeScanning',
    renderCell: row => {
      return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                {row.securityFeatures.codeScanning.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }]} />
  </Table.Container>`,...k.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => <Table.Container>
    <Table.Title as="h2" id="repositories">
      Repositories
    </Table.Title>
    <Table.Subtitle as="p" id="repositories-subtitle">
      A subtitle could appear here to give extra context to the data.
    </Table.Subtitle>
    <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={data} columns={[{
    header: 'Repository',
    field: 'name',
    rowHeader: true
  }, {
    header: 'Type',
    field: 'type',
    renderCell: row => {
      return <Label>{uppercase(row.type)}</Label>;
    }
  }, {
    header: 'Updated',
    field: 'updatedAt',
    renderCell: row => {
      return <RelativeTime date={new Date(row.updatedAt)} />;
    }
  }, {
    header: 'Dependabot',
    field: 'securityFeatures.dependabot',
    renderCell: row => {
      return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                {row.securityFeatures.dependabot.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }, {
    header: 'Code scanning',
    field: 'securityFeatures.codeScanning',
    renderCell: row => {
      return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                {row.securityFeatures.codeScanning.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }]} />
  </Table.Container>`,...G.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const rows = Array.from(data).sort((a, b) => {
    return b.updatedAt - a.updatedAt;
  });
  return <Table.Container>
      <Table.Title as="h2" id="repositories">
        Repositories
      </Table.Title>
      <Table.Subtitle as="p" id="repositories-subtitle">
        A subtitle could appear here to give extra context to the data.
      </Table.Subtitle>
      <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={rows} columns={[{
      header: 'Repository',
      field: 'name',
      rowHeader: true,
      sortBy: 'alphanumeric'
    }, {
      header: 'Type',
      field: 'type',
      renderCell: row => {
        return <Label>{uppercase(row.type)}</Label>;
      }
    }, {
      header: 'Updated',
      field: 'updatedAt',
      sortBy: 'datetime',
      renderCell: row => {
        return <RelativeTime date={new Date(row.updatedAt)} />;
      }
    }, {
      header: 'Dependabot',
      field: 'securityFeatures.dependabot',
      renderCell: row => {
        return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                  {row.securityFeatures.dependabot.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }, {
      header: 'Code scanning',
      field: 'securityFeatures.codeScanning',
      renderCell: row => {
        return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                  {row.securityFeatures.codeScanning.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }]} initialSortColumn="updatedAt" initialSortDirection="DESC" />
    </Table.Container>;
}`,...H.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const rows = Array.from(data).sort((a, b) => {
    return b.updatedAt - a.updatedAt;
  });
  const sortByDependabotFeatures = (a: Repo, b: Repo): number => {
    if (a.securityFeatures.dependabot.length > b.securityFeatures.dependabot.length) {
      return -1;
    } else if (b.securityFeatures.dependabot.length < a.securityFeatures.dependabot.length) {
      return 1;
    }
    return 0;
  };
  return <Table.Container>
      <Table.Title as="h2" id="repositories">
        Repositories
      </Table.Title>
      <Table.Subtitle as="p" id="repositories-subtitle">
        A subtitle could appear here to give extra context to the data.
      </Table.Subtitle>
      <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={rows} columns={[{
      header: 'Repository',
      field: 'name',
      rowHeader: true,
      sortBy: 'alphanumeric'
    }, {
      header: 'Type',
      field: 'type',
      renderCell: row => {
        return <Label>{uppercase(row.type)}</Label>;
      }
    }, {
      header: 'Updated',
      field: 'updatedAt',
      sortBy: 'datetime',
      renderCell: row => {
        return <RelativeTime date={new Date(row.updatedAt)} />;
      }
    }, {
      header: 'Dependabot',
      field: 'securityFeatures.dependabot',
      renderCell: row => {
        return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                  {row.securityFeatures.dependabot.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      },
      sortBy: sortByDependabotFeatures
    }, {
      header: 'Code scanning',
      field: 'securityFeatures.codeScanning',
      renderCell: row => {
        return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                  {row.securityFeatures.codeScanning.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }]} initialSortColumn="updatedAt" initialSortDirection="DESC" />
    </Table.Container>;
}`,...W.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => <Table.Container>
    <Table.Title as="h2" id="repositories">
      Repositories
    </Table.Title>
    <Table.Actions>
      <Button>Action</Button>
    </Table.Actions>
    <Table.Divider />
    <Table.Subtitle as="p" id="repositories-subtitle">
      A subtitle could appear here to give extra context to the data.
    </Table.Subtitle>
    <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={data} columns={[{
    header: 'Repository',
    field: 'name',
    rowHeader: true
  }, {
    header: 'Type',
    field: 'type',
    renderCell: row => {
      return <Label>{uppercase(row.type)}</Label>;
    }
  }, {
    header: 'Updated',
    field: 'updatedAt',
    renderCell: row => {
      return <RelativeTime date={new Date(row.updatedAt)} />;
    }
  }, {
    header: 'Dependabot',
    field: 'securityFeatures.dependabot',
    renderCell: row => {
      return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                {row.securityFeatures.dependabot.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }, {
    header: 'Code scanning',
    field: 'securityFeatures.codeScanning',
    renderCell: row => {
      return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                {row.securityFeatures.codeScanning.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }]} />
  </Table.Container>`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => <>
    <Heading as="h2" id="table-title">
      Repositories
    </Heading>
    <Table.Container>
      <Table.Actions>
        <Button>Action</Button>
      </Table.Actions>
      <DataTable aria-labelledby="table-title" data={data} columns={[{
      header: 'Repository',
      field: 'name',
      rowHeader: true
    }, {
      header: 'Type',
      field: 'type',
      renderCell: row => {
        return <Label>{uppercase(row.type)}</Label>;
      }
    }, {
      header: 'Updated',
      field: 'updatedAt',
      renderCell: row => {
        return <RelativeTime date={new Date(row.updatedAt)} />;
      }
    }, {
      header: 'Dependabot',
      field: 'securityFeatures.dependabot',
      renderCell: row => {
        return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                  {row.securityFeatures.dependabot.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }, {
      header: 'Code scanning',
      field: 'securityFeatures.codeScanning',
      renderCell: row => {
        return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                  {row.securityFeatures.codeScanning.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }]} />
    </Table.Container>
  </>`,...B.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => <Table.Container>
    <Table.Title as="h2" id="repositories">
      Repositories
    </Table.Title>
    <Table.Actions>
      <IconButton aria-label="Download" icon={DownloadIcon} variant="invisible" />
      <IconButton aria-label="Add row" icon={PlusIcon} variant="invisible" />
    </Table.Actions>
    <Table.Divider />
    <Table.Subtitle as="p" id="repositories-subtitle">
      A subtitle could appear here to give extra context to the data.
    </Table.Subtitle>
    <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={data} columns={[{
    header: 'Repository',
    field: 'name',
    rowHeader: true
  }, {
    header: 'Type',
    field: 'type',
    renderCell: row => {
      return <Label>{uppercase(row.type)}</Label>;
    }
  }, {
    header: 'Updated',
    field: 'updatedAt',
    renderCell: row => {
      return <RelativeTime date={new Date(row.updatedAt)} />;
    }
  }, {
    header: 'Dependabot',
    field: 'securityFeatures.dependabot',
    renderCell: row => {
      return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                {row.securityFeatures.dependabot.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }, {
    header: 'Code scanning',
    field: 'securityFeatures.codeScanning',
    renderCell: row => {
      return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                {row.securityFeatures.codeScanning.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }]} />
  </Table.Container>`,...U.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => <>
    <Heading as="h2" id="table-title">
      Repositories
    </Heading>
    <Table.Container>
      <Table.Actions>
        <IconButton aria-label="Download" icon={DownloadIcon} variant="invisible" />
        <IconButton aria-label="Add row" icon={PlusIcon} variant="invisible" />
      </Table.Actions>
      <DataTable aria-labelledby="table-title" data={data} columns={[{
      header: 'Repository',
      field: 'name',
      rowHeader: true
    }, {
      header: 'Type',
      field: 'type',
      renderCell: row => {
        return <Label>{uppercase(row.type)}</Label>;
      }
    }, {
      header: 'Updated',
      field: 'updatedAt',
      renderCell: row => {
        return <RelativeTime date={new Date(row.updatedAt)} />;
      }
    }, {
      header: 'Dependabot',
      field: 'securityFeatures.dependabot',
      renderCell: row => {
        return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                  {row.securityFeatures.dependabot.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }, {
      header: 'Code scanning',
      field: 'securityFeatures.codeScanning',
      renderCell: row => {
        return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                  {row.securityFeatures.codeScanning.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }]} />
    </Table.Container>
  </>`,...E.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => <Table.Container>
    <Table.Title as="h2" id="repositories">
      Repositories
    </Table.Title>
    <Table.Subtitle as="p" id="repositories-subtitle">
      A subtitle could appear here to give extra context to the data.
    </Table.Subtitle>
    <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={data} columns={[{
    header: 'Repository',
    field: 'name',
    rowHeader: true
  }, {
    header: 'Type',
    field: 'type',
    renderCell: row => {
      return <Label>{uppercase(row.type)}</Label>;
    }
  }, {
    header: 'Updated',
    field: 'updatedAt',
    renderCell: row => {
      return <RelativeTime date={new Date(row.updatedAt)} />;
    }
  }, {
    header: 'Dependabot',
    field: 'securityFeatures.dependabot',
    renderCell: row => {
      return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                {row.securityFeatures.dependabot.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }, {
    header: 'Code scanning',
    field: 'securityFeatures.codeScanning',
    renderCell: row => {
      return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                {row.securityFeatures.codeScanning.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }, {
    id: 'actions',
    header: () => <VisuallyHidden>Actions</VisuallyHidden>,
    renderCell: row => {
      return <IconButton aria-label={\`Download: \${row.name}\`} title={\`Download: \${row.name}\`} icon={DownloadIcon} variant="invisible" onClick={() => {
        action('Download')(row);
      }} />;
    }
  }]} />
  </Table.Container>`,...$.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => <Table.Container>
    <Table.Title as="h2" id="repositories">
      Repositories
    </Table.Title>
    <Table.Subtitle as="p" id="repositories-subtitle">
      A subtitle could appear here to give extra context to the data.
    </Table.Subtitle>
    <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={data} columns={[{
    header: 'Repository',
    field: 'name',
    rowHeader: true
  }, {
    header: 'Type',
    field: 'type',
    renderCell: row => {
      return <Label>{uppercase(row.type)}</Label>;
    }
  }, {
    header: 'Updated',
    field: 'updatedAt',
    renderCell: row => {
      return <RelativeTime date={new Date(row.updatedAt)} />;
    }
  }, {
    header: 'Dependabot',
    field: 'securityFeatures.dependabot',
    renderCell: row => {
      return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                {row.securityFeatures.dependabot.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }, {
    header: 'Code scanning',
    field: 'securityFeatures.codeScanning',
    renderCell: row => {
      return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                {row.securityFeatures.codeScanning.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }, {
    id: 'actions',
    header: () => <VisuallyHidden>Actions</VisuallyHidden>,
    renderCell: row => {
      return <>
                <IconButton aria-label={\`Edit: \${row.name}\`} title={\`Edit: \${row.name}\`} icon={PencilIcon} variant="invisible" onClick={() => {
          action('Edit')(row);
        }} />
                <IconButton aria-label={\`Delete: \${row.name}\`} title={\`Delete: \${row.name}\`} icon={TrashIcon} variant="invisible" onClick={() => {
          action('Delete')(row);
        }} />
              </>;
    }
  }]} />
  </Table.Container>`,...N.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => <Table.Container>
    <Table.Title as="h2" id="repositories">
      Repositories
    </Table.Title>
    <Table.Subtitle as="p" id="repositories-subtitle">
      A subtitle could appear here to give extra context to the data.
    </Table.Subtitle>
    <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={data} columns={[{
    header: 'Repository',
    field: 'name',
    rowHeader: true
  }, {
    header: 'Type',
    field: 'type',
    renderCell: row => {
      return <Label>{uppercase(row.type)}</Label>;
    }
  }, {
    header: 'Updated',
    field: 'updatedAt',
    renderCell: row => {
      return <RelativeTime date={new Date(row.updatedAt)} />;
    }
  }, {
    header: 'Dependabot',
    field: 'securityFeatures.dependabot',
    renderCell: row => {
      return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                {row.securityFeatures.dependabot.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }, {
    header: 'Code scanning',
    field: 'securityFeatures.codeScanning',
    renderCell: row => {
      return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                {row.securityFeatures.codeScanning.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }, {
    id: 'actions',
    header: () => <VisuallyHidden>Actions</VisuallyHidden>,
    renderCell: row => {
      return <ActionMenu>
                <ActionMenu.Anchor>
                  <IconButton aria-label={\`Actions: \${row.name}\`} title={\`Actions: \${row.name}\`} icon={KebabHorizontalIcon} variant="invisible" />
                </ActionMenu.Anchor>
                <ActionMenu.Overlay>
                  <ActionList>
                    <ActionList.Item onSelect={() => {
              action('Copy')(row);
            }}>
                      Copy row
                    </ActionList.Item>
                    <ActionList.Item>Edit row</ActionList.Item>
                    <ActionList.Item>Export row as CSV</ActionList.Item>
                    <ActionList.Divider />
                    <ActionList.Item variant="danger">Delete row</ActionList.Item>
                  </ActionList>
                </ActionMenu.Overlay>
              </ActionMenu>;
    }
  }]} />
  </Table.Container>`,...z.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => <Table.Container>
    <Table.Title as="h2" id="repositories">
      Repositories
    </Table.Title>
    <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={data} columns={[{
    header: 'grow w/ 200px max',
    field: 'name',
    rowHeader: true,
    width: 'grow',
    maxWidth: '200px'
  }, {
    header: 'growCollapse w/ 100px min',
    field: 'type',
    renderCell: row => {
      return <Label>{uppercase(row.type)}</Label>;
    },
    width: 'growCollapse',
    minWidth: '100px'
  }, {
    header: 'auto',
    field: 'updatedAt',
    renderCell: row => {
      return <RelativeTime date={new Date(row.updatedAt)} />;
    },
    width: 'auto'
  }, {
    header: '200px',
    field: 'securityFeatures.dependabot',
    renderCell: row => {
      return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                {row.securityFeatures.dependabot.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    },
    width: '200px'
  }, {
    header: 'undefined (defaults to grow)',
    field: 'securityFeatures.codeScanning',
    renderCell: row => {
      return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                {row.securityFeatures.codeScanning.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }]} />
  </Table.Container>`,...O.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => <>
    <Heading as="h2" id="repositories">
      Security coverage
    </Heading>
    <p id="repositories-subtitle">
      Organization members can only see data for the most recently-updated repositories. To see all repositories, talk
      to your organization administrator about becoming a security manager.
    </p>
    <Table.Container>
      <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={data} columns={[{
      header: 'Repository',
      field: 'name',
      rowHeader: true
    }, {
      header: 'Type',
      field: 'type',
      renderCell: row => {
        return <Label>{uppercase(row.type)}</Label>;
      }
    }, {
      header: 'Updated',
      field: 'updatedAt',
      renderCell: row => {
        return <RelativeTime date={new Date(row.updatedAt)} />;
      }
    }, {
      header: 'Dependabot',
      field: 'securityFeatures.dependabot',
      renderCell: row => {
        return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                  {row.securityFeatures.dependabot.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }, {
      header: 'Code scanning',
      field: 'securityFeatures.codeScanning',
      renderCell: row => {
        return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                  {row.securityFeatures.codeScanning.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }]} />
    </Table.Container>
  </>`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const exampleEmptyData: Array<Repo> = [];
  return exampleEmptyData.length === 0 ? <Blankslate border>
      <Blankslate.Visual>
        <BookIcon size="medium" />
      </Blankslate.Visual>
      <Blankslate.Heading>Blankslate heading</Blankslate.Heading>
      <Blankslate.Description>Use it to provide information when no dynamic content exists.</Blankslate.Description>
      <Blankslate.PrimaryAction href="#">Primary action</Blankslate.PrimaryAction>
      <Blankslate.SecondaryAction href="#">Secondary action link</Blankslate.SecondaryAction>
    </Blankslate> : <Table.Container>
      <Table.Title as="h2" id="repositories">
        Repositories
      </Table.Title>
      <Table.Subtitle as="p" id="repositories-subtitle">
        A subtitle could appear here to give extra context to the data.
      </Table.Subtitle>
      <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={exampleEmptyData} columns={[{
      header: 'Repository',
      field: 'name',
      rowHeader: true
    }, {
      header: 'Type',
      field: 'type',
      renderCell: row => {
        return <Label>{uppercase(row.type)}</Label>;
      }
    }, {
      header: 'Updated',
      field: 'updatedAt',
      renderCell: row => {
        return <RelativeTime date={new Date(row.updatedAt)} />;
      }
    }, {
      header: 'Dependabot',
      field: 'securityFeatures.dependabot',
      renderCell: row => {
        return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                  {row.securityFeatures.dependabot.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }, {
      header: 'Code scanning',
      field: 'securityFeatures.codeScanning',
      renderCell: row => {
        return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                  {row.securityFeatures.codeScanning.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }]} />
    </Table.Container>;
}`,...V.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => <div style={{
  width: 500
}}>
    <Table.Container>
      <Table.Title as="h2" id="repositories">
        Repositories
      </Table.Title>
      <Table.Subtitle as="p" id="repositories-subtitle">
        A subtitle could appear here to give extra context to the data.
      </Table.Subtitle>
      <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={data} columns={[{
      header: 'Repository',
      field: 'name',
      rowHeader: true
    }, {
      header: 'Type',
      field: 'type',
      renderCell: row => {
        return <Label>{uppercase(row.type)}</Label>;
      }
    }, {
      header: 'Updated',
      field: 'updatedAt',
      renderCell: row => {
        return <RelativeTime date={new Date(row.updatedAt)} />;
      }
    }, {
      header: 'Dependabot',
      field: 'securityFeatures.dependabot',
      renderCell: row => {
        return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                  {row.securityFeatures.dependabot.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }, {
      header: 'Code scanning',
      field: 'securityFeatures.codeScanning',
      renderCell: row => {
        return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                  {row.securityFeatures.codeScanning.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }]} />
    </Table.Container>
  </div>`,...Q.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const [loading] = React.useState(true);
  return <Table.Container>
      <Table.Title as="h2" id="repositories">
        Repositories
      </Table.Title>
      <Table.Subtitle as="p" id="repositories-subtitle">
        A subtitle could appear here to give extra context to the data.
      </Table.Subtitle>
      {loading ? <Table.Skeleton aria-labelledby="repositories" aria-describedby="repositories-subtitle" columns={columns} rows={10} /> : <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={data} columns={columns} />}
    </Table.Container>;
}`,...K.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => <Table.Container>
    <Table.Title as="h2" id="repositories">
      Repositories
    </Table.Title>
    <Table.Subtitle as="p" id="repositories-subtitle">
      A subtitle could appear here to give extra context to the data.
    </Table.Subtitle>
    <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={data} columns={[{
    header: 'Repository',
    field: 'name',
    rowHeader: true
  }, {
    header: 'Type',
    field: 'type',
    renderCell: row => {
      return <Label>{uppercase(row.type)}</Label>;
    }
  }, {
    header: 'Updated',
    field: 'updatedAt',
    renderCell: row => {
      return <RelativeTime date={new Date(row.updatedAt)} />;
    }
  }, {
    header: 'Dependabot',
    field: 'securityFeatures.dependabot',
    renderCell: row => {
      return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                {row.securityFeatures.dependabot.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : <Table.CellPlaceholder>Not configured</Table.CellPlaceholder>;
    }
  }, {
    header: 'Code scanning',
    field: 'securityFeatures.codeScanning',
    renderCell: row => {
      return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                {row.securityFeatures.codeScanning.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : <Table.CellPlaceholder>Not configured</Table.CellPlaceholder>;
    }
  }]} />
  </Table.Container>`,...q.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const rows = Array.from(data).sort((a, b) => {
    return b.updatedAt - a.updatedAt;
  });
  return <Table.Container>
      <Table.Title as="h2" id="repositories">
        Repositories
      </Table.Title>
      <Table.Subtitle as="p" id="repositories-subtitle">
        A subtitle could appear here to give extra context to the data.
      </Table.Subtitle>
      <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={rows} columns={[{
      header: () => <div className={classes.RepositoryHeader}>
                <RepoIcon size={16} />
                Repository
              </div>,
      field: 'name',
      rowHeader: true,
      sortBy: 'alphanumeric',
      align: 'end'
    }, {
      header: 'Type',
      field: 'type',
      renderCell: row => {
        return <Label>{uppercase(row.type)}</Label>;
      },
      align: 'end'
    }, {
      header: 'Updated',
      field: 'updatedAt',
      sortBy: 'datetime',
      renderCell: row => {
        return <RelativeTime date={new Date(row.updatedAt)} />;
      },
      align: 'end'
    }, {
      header: 'Dependabot',
      field: 'securityFeatures.dependabot',
      renderCell: row => {
        return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                  {row.securityFeatures.dependabot.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      },
      align: 'end'
    }, {
      header: 'Code scanning',
      field: 'securityFeatures.codeScanning',
      renderCell: row => {
        return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                  {row.securityFeatures.codeScanning.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      },
      align: 'end'
    }]} initialSortColumn="updatedAt" initialSortDirection="DESC" />
    </Table.Container>;
}`,...Y.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => <Table.Container>
    <Table.Title as="h2" id="repositories">
      Repositories
    </Table.Title>
    <Table.Subtitle as="p" id="repositories-subtitle">
      Click any sortable header and watch the Actions panel.
    </Table.Subtitle>

    <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={data} onToggleSort={(columnId, direction) => action('onToggleSort')({
    columnId,
    direction
  })} columns={[{
    header: 'Repository',
    field: 'name',
    rowHeader: true,
    sortBy: 'alphanumeric'
  }, {
    header: 'Type',
    field: 'type',
    renderCell: row => <Label>{uppercase(row.type)}</Label>
  }, {
    header: 'Updated',
    field: 'updatedAt',
    sortBy: 'datetime',
    renderCell: row => <RelativeTime date={new Date(row.updatedAt)} />
  }, {
    header: 'Dependabot',
    field: 'securityFeatures.dependabot',
    renderCell: row => row.securityFeatures.dependabot.length ? <LabelGroup>
                {row.securityFeatures.dependabot.map(feature => <Label key={feature}>{uppercase(feature)}</Label>)}
              </LabelGroup> : null
  }, {
    header: 'Code scanning',
    field: 'securityFeatures.codeScanning',
    renderCell: row => row.securityFeatures.codeScanning.length ? <LabelGroup>
                {row.securityFeatures.codeScanning.map(feature => <Label key={feature}>{uppercase(feature)}</Label>)}
              </LabelGroup> : null
  }]} initialSortColumn="updatedAt" initialSortDirection="DESC" />
  </Table.Container>`,...J.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const pageSize = 10;
  const [pageIndex, setPageIndex] = React.useState(0);
  const start = pageIndex * pageSize;
  const end = start + pageSize;
  const rows = repos.slice(start, end);
  return <Table.Container>
      <Table.Title as="h2" id="repositories">
        Repositories
      </Table.Title>
      <Table.Subtitle as="p" id="repositories-subtitle">
        A subtitle could appear here to give extra context to the data.
      </Table.Subtitle>
      <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={rows} columns={[{
      header: 'Repository',
      field: 'name',
      rowHeader: true
    }, {
      header: 'Type',
      field: 'type',
      renderCell: row => {
        return <Label>{uppercase(row.type)}</Label>;
      }
    }, {
      header: 'Updated',
      field: 'updatedAt',
      renderCell: row => {
        return <RelativeTime date={new Date(row.updatedAt)} />;
      }
    }, {
      header: 'Dependabot',
      field: 'securityFeatures.dependabot',
      renderCell: row => {
        return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                  {row.securityFeatures.dependabot.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }, {
      header: 'Code scanning',
      field: 'securityFeatures.codeScanning',
      renderCell: row => {
        return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                  {row.securityFeatures.codeScanning.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }]} />
      <Table.Pagination aria-label="Pagination for Repositories" pageSize={pageSize} totalCount={repos.length} onChange={({
      pageIndex
    }) => {
      setPageIndex(pageIndex);
    }} />
    </Table.Container>;
}`,...X.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const pageSize = 10;
  const [pageIndex, setPageIndex] = React.useState(0);
  const start = pageIndex * pageSize;
  const end = start + pageSize;
  const rows = repos.slice(start, end);
  return <Table.Container>
      <Table.Title as="h2" id="repositories">
        Repositories
      </Table.Title>
      <Table.Subtitle as="p" id="repositories-subtitle">
        A subtitle could appear here to give extra context to the data.
      </Table.Subtitle>
      <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={rows} columns={[{
      header: 'Repository',
      field: 'name',
      rowHeader: true
    }, {
      header: 'Type',
      field: 'type',
      renderCell: row => {
        return <Label>{uppercase(row.type)}</Label>;
      }
    }, {
      header: 'Updated',
      field: 'updatedAt',
      renderCell: row => {
        return <RelativeTime date={new Date(row.updatedAt)} />;
      }
    }, {
      header: 'Dependabot',
      field: 'securityFeatures.dependabot',
      renderCell: row => {
        return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                  {row.securityFeatures.dependabot.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }, {
      header: 'Code scanning',
      field: 'securityFeatures.codeScanning',
      renderCell: row => {
        return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                  {row.securityFeatures.codeScanning.map(feature => {
            return <Label key={feature}>{uppercase(feature)}</Label>;
          })}
                </LabelGroup> : null;
      }
    }]} />
      <Table.Pagination aria-label="Pagination for Repositories" pageSize={pageSize} totalCount={repos.length} onChange={({
      pageIndex
    }) => {
      setPageIndex(pageIndex);
    }} defaultPageIndex={49} />
    </Table.Container>;
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`() => {
  const pageSize = 10;
  const [pageIndex, setPageIndex] = React.useState(0);
  const {
    error,
    loading,
    data
  } = useFlakeyQuery({
    queryKey: ['repos', pageSize, pageIndex],
    queryFn: () => {
      return fetchRepos({
        page: pageIndex,
        perPage: pageSize
      });
    }
  });
  return <Table.Container>
      <Table.Title as="h2" id="repositories">
        Repositories
      </Table.Title>
      <Table.Subtitle as="p" id="repositories-subtitle">
        A subtitle could appear here to give extra context to the data.
      </Table.Subtitle>
      {loading || error ? <Table.Skeleton columns={columns} /> : null}
      {error ? <Table.ErrorDialog onDismiss={() => {
      action('onDismiss');
    }} onRetry={() => {
      action('onRetry');
    }} /> : null}
      {data ? <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={data} columns={columns} /> : null}
      <Table.Pagination aria-label="Pagination for Repositories" pageSize={pageSize} totalCount={repos.length} onChange={({
      pageIndex
    }) => {
      setPageIndex(pageIndex);
    }} />
    </Table.Container>;
}`,...ee.parameters?.docs?.source}}};function Ie(e){return t.jsx(o,{children:l(e.type)})}function ke(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function Ge(e){return t.jsx(o,{children:l(e)},e)}function He(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(Ge)}):null}function We(e){return t.jsx(o,{children:l(e)},e)}function Pe(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(We)}):null}function Be(e){return t.jsx(o,{children:l(e.type)})}function Ue(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function Ee(e){return t.jsx(o,{children:l(e)},e)}function $e(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(Ee)}):null}function Ne(e){return t.jsx(o,{children:l(e)},e)}function ze(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(Ne)}):null}function Oe(e,r){return r.updatedAt-e.updatedAt}function Me(e){return t.jsx(o,{children:l(e.type)})}function Ve(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function Qe(e){return t.jsx(o,{children:l(e)},e)}function Ke(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(Qe)}):null}function qe(e){return t.jsx(o,{children:l(e)},e)}function Ye(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(qe)}):null}function Je(e,r){return r.updatedAt-e.updatedAt}function Xe(e,r){return e.securityFeatures.dependabot.length>r.securityFeatures.dependabot.length?-1:r.securityFeatures.dependabot.length<e.securityFeatures.dependabot.length?1:0}function Ze(e){return t.jsx(o,{children:l(e.type)})}function et(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function tt(e){return t.jsx(o,{children:l(e)},e)}function rt(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(tt)}):null}function at(e){return t.jsx(o,{children:l(e)},e)}function nt(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(at)}):null}function it(e){return t.jsx(o,{children:l(e.type)})}function ot(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function lt(e){return t.jsx(o,{children:l(e)},e)}function st(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(lt)}):null}function dt(e){return t.jsx(o,{children:l(e)},e)}function ut(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(dt)}):null}function ct(e){return t.jsx(o,{children:l(e.type)})}function pt(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function bt(e){return t.jsx(o,{children:l(e)},e)}function mt(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(bt)}):null}function ht(e){return t.jsx(o,{children:l(e)},e)}function yt(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(ht)}):null}function ft(e){return t.jsx(o,{children:l(e.type)})}function gt(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function xt(e){return t.jsx(o,{children:l(e)},e)}function Ct(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(xt)}):null}function St(e){return t.jsx(o,{children:l(e)},e)}function wt(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(St)}):null}function Tt(e){return t.jsx(o,{children:l(e.type)})}function Ft(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function jt(e){return t.jsx(o,{children:l(e)},e)}function At(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(jt)}):null}function _t(e){return t.jsx(o,{children:l(e)},e)}function Lt(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(_t)}):null}function Dt(e){return t.jsx(o,{children:l(e.type)})}function Rt(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function vt(e){return t.jsx(o,{children:l(e)},e)}function It(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(vt)}):null}function kt(e){return t.jsx(o,{children:l(e)},e)}function Gt(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(kt)}):null}function Ht(){return t.jsx(le,{children:"Actions"})}function Wt(e){return t.jsx(j,{"aria-label":`Download: ${e.name}`,title:`Download: ${e.name}`,icon:oe,variant:"invisible",onClick:()=>{L("Download")(e)}})}function Pt(e){return t.jsx(o,{children:l(e.type)})}function Bt(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function Ut(e){return t.jsx(o,{children:l(e)},e)}function Et(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(Ut)}):null}function $t(e){return t.jsx(o,{children:l(e)},e)}function Nt(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map($t)}):null}function zt(){return t.jsx(le,{children:"Actions"})}function Ot(e){return t.jsxs(t.Fragment,{children:[t.jsx(j,{"aria-label":`Edit: ${e.name}`,title:`Edit: ${e.name}`,icon:fe,variant:"invisible",onClick:()=>{L("Edit")(e)}}),t.jsx(j,{"aria-label":`Delete: ${e.name}`,title:`Delete: ${e.name}`,icon:ge,variant:"invisible",onClick:()=>{L("Delete")(e)}})]})}function Mt(e){return t.jsx(o,{children:l(e.type)})}function Vt(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function Qt(e){return t.jsx(o,{children:l(e)},e)}function Kt(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(Qt)}):null}function qt(e){return t.jsx(o,{children:l(e)},e)}function Yt(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(qt)}):null}function Jt(){return t.jsx(le,{children:"Actions"})}function Xt(e){return t.jsxs(ne,{children:[t.jsx(ne.Anchor,{children:t.jsx(j,{"aria-label":`Actions: ${e.name}`,title:`Actions: ${e.name}`,icon:xe,variant:"invisible"})}),t.jsx(ne.Overlay,{children:t.jsxs(R,{children:[t.jsx(R.Item,{onSelect:()=>{L("Copy")(e)},children:"Copy row"}),t.jsx(R.Item,{children:"Edit row"}),t.jsx(R.Item,{children:"Export row as CSV"}),t.jsx(R.Divider,{}),t.jsx(R.Item,{variant:"danger",children:"Delete row"})]})})]})}function Zt(e){return t.jsx(o,{children:l(e.type)})}function er(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function tr(e){return t.jsx(o,{children:l(e)},e)}function rr(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(tr)}):null}function ar(e){return t.jsx(o,{children:l(e)},e)}function nr(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(ar)}):null}function ir(e){return t.jsx(o,{children:l(e.type)})}function or(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function lr(e){return t.jsx(o,{children:l(e)},e)}function sr(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(lr)}):null}function dr(e){return t.jsx(o,{children:l(e)},e)}function ur(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(dr)}):null}function cr(e){return t.jsx(o,{children:l(e.type)})}function pr(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function br(e){return t.jsx(o,{children:l(e)},e)}function mr(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(br)}):null}function hr(e){return t.jsx(o,{children:l(e)},e)}function yr(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(hr)}):null}function fr(e){return t.jsx(o,{children:l(e.type)})}function gr(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function xr(e){return t.jsx(o,{children:l(e)},e)}function Cr(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(xr)}):null}function Sr(e){return t.jsx(o,{children:l(e)},e)}function wr(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(Sr)}):null}function Tr(e){return t.jsx(o,{children:l(e.type)})}function Fr(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function jr(e){return t.jsx(o,{children:l(e)},e)}function Ar(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(jr)}):t.jsx(i.CellPlaceholder,{children:"Not configured"})}function _r(e){return t.jsx(o,{children:l(e)},e)}function Lr(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(_r)}):t.jsx(i.CellPlaceholder,{children:"Not configured"})}function Dr(e,r){return r.updatedAt-e.updatedAt}function Rr(){return t.jsxs("div",{className:De.RepositoryHeader,children:[t.jsx(Ce,{size:16}),"Repository"]})}function vr(e){return t.jsx(o,{children:l(e.type)})}function Ir(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function kr(e){return t.jsx(o,{children:l(e)},e)}function Gr(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(kr)}):null}function Hr(e){return t.jsx(o,{children:l(e)},e)}function Wr(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(Hr)}):null}function Pr(e,r){return L("onToggleSort")({columnId:e,direction:r})}function Br(e){return t.jsx(o,{children:l(e.type)})}function Ur(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function Er(e){return t.jsx(o,{children:l(e)},e)}function $r(e){return e.securityFeatures.dependabot.length?t.jsx(u,{children:e.securityFeatures.dependabot.map(Er)}):null}function Nr(e){return t.jsx(o,{children:l(e)},e)}function zr(e){return e.securityFeatures.codeScanning.length?t.jsx(u,{children:e.securityFeatures.codeScanning.map(Nr)}):null}function Or(e){return t.jsx(o,{children:l(e.type)})}function Mr(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function Vr(e){return t.jsx(o,{children:l(e)},e)}function Qr(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(Vr)}):null}function Kr(e){return t.jsx(o,{children:l(e)},e)}function qr(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(Kr)}):null}function Yr(e){return t.jsx(o,{children:l(e.type)})}function Jr(e){return t.jsx(g,{date:new Date(e.updatedAt)})}function Xr(e){return t.jsx(o,{children:l(e)},e)}function Zr(e){return e.securityFeatures.dependabot.length>0?t.jsx(u,{children:e.securityFeatures.dependabot.map(Xr)}):null}function ea(e){return t.jsx(o,{children:l(e)},e)}function ta(e){return e.securityFeatures.codeScanning.length>0?t.jsx(u,{children:e.securityFeatures.codeScanning.map(ea)}):null}function ra(){L("onDismiss")}function aa(){L("onRetry")}const Sn=["WithTitle","WithTitleAndSubtitle","WithSorting","WithCustomSorting","WithAction","WithActionOnly","WithActions","WithActionsOnly","WithRowAction","WithRowActions","WithRowActionMenu","MixedColumnWidths","WithCustomHeading","WithNoContent","WithOverflow","WithLoading","WithPlaceholderCells","WithRightAlignedColumns","WithSortEvents","WithPagination","WithPaginationUsingDefaultPageIndex","WithNetworkError"];export{O as MixedColumnWidths,P as WithAction,B as WithActionOnly,U as WithActions,E as WithActionsOnly,M as WithCustomHeading,W as WithCustomSorting,K as WithLoading,ee as WithNetworkError,V as WithNoContent,Q as WithOverflow,X as WithPagination,Z as WithPaginationUsingDefaultPageIndex,q as WithPlaceholderCells,Y as WithRightAlignedColumns,$ as WithRowAction,z as WithRowActionMenu,N as WithRowActions,J as WithSortEvents,H as WithSorting,k as WithTitle,G as WithTitleAndSubtitle,Sn as __namedExportsOrder,Cn as default};
