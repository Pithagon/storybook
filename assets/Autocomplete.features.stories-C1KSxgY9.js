import{d as _,r as C,j as o,R as q,T as U,B as Y}from"./iframe-Cfz2vXeE.js";import{F as y,A as d,T as G}from"./FormControl-qjqH6r5D.js";import{f as J,g as Q,a as X,b as Z}from"./story-helpers-BdHCBPxk.js";import{S as ee}from"./index-D3vEWZM2.js";import{A as te}from"./AnchoredOverlay-DQ90Zw6u.js";import{r as oe}from"./Portal-BKCn1yDJ.js";import{B as $}from"./Button-3sCteC9V.js";import{D as le}from"./Dialog-BTwkcDPx.js";import"./preload-helper-D9Z9MdNV.js";import"./TextInputWrapper-A6-jRRIw.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./index-C-OhZ25x.js";import"./Link-Dm7wEaum.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./invariant-Dix8OlSS.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./Truncate-DUc3hzfC.js";import"./index.esm-C1WN7kEu.js";import"./Tooltip-BuVThTi0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./InputLabel-BWKIqz-Q.js";import"./TextInput-hhRVe1zi.js";import"./FilteredActionList-Lzw7hr5X.js";import"./useProvidedStateOrCreate-BEKIGSkE.js";import"./Stack--yR6jd9X.js";import"./SkeletonBox-ClHTzzEx.js";import"./useFeatureFlag-paATTdb3.js";import"./Checkbox-BHvnb8mU.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./Overlay-Du2pzphD.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./Token-B_OnxjPX.js";import"./Textarea-DREKwwM3.js";import"./Octicon-B0A15aaM.js";import"./LinkButton-D-EvgNXE.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./index-CEFMyGLK.js";import"./useMergedRefs-CMoMpGtu.js";import"./useMnemonics-D4gqZtvW.js";import"./useFocusTrap-CL_Yl_fl.js";const ne="prc-Autocomplete-LastKeyPressed-IV3TH",se="prc-Autocomplete-StoryPadding-SHjhP",re="prc-Autocomplete-FormPadding-Um3FP",ae="prc-Autocomplete-AnchorContainer-7np7z",ie="prc-Autocomplete-AnchorInput-AOTFA",ce="prc-Autocomplete-OverlayFlexCol-aby-j",me="prc-Autocomplete-OverlayInputBar-Y7-my",de="prc-Autocomplete-OverlayInput-Asmkf",ue="prc-Autocomplete-OverlayScroll-tfRhT",x={LastKeyPressed:ne,StoryPadding:se,FormPadding:re,AnchorContainer:ae,AnchorInput:ie,OverlayFlexCol:ce,OverlayInputBar:me,OverlayInput:de,OverlayScroll:ue},K=["id"],pe=({emptyStateText:e,menuLoading:t,selectionVariant:l,anchorSide:s,height:r,overlayMaxHeight:a,width:n,block:u,contrast:i,disabled:m,inputSize:c,loading:f,loaderPosition:p,placeholder:h,validationStatus:g,hideTokenRemoveButtons:b,maxHeight:I,preventTokenWrapping:A,size:S,visibleTokenCount:v})=>{const F={block:u,contrast:i,disabled:m,inputSize:c,loading:f,loaderPosition:p,placeholder:h,validationStatus:g};return{menuArgs:{emptyStateText:e,loading:t,selectionVariant:l},overlayArgs:{anchorSide:s,height:r,maxHeight:a,width:n},textInputArgs:F,textInputWithTokensArgs:{hideTokenRemoveButtons:b,maxHeight:I,preventTokenWrapping:A,size:S,visibleTokenCount:v,...F}}},O=[{text:"css",id:"0"},{text:"css-in-js",id:"1"},{text:"styled-system",id:"2"},{text:"javascript",id:"3"},{text:"typescript",id:"4"},{text:"react",id:"5"},{text:"design-systems",id:"6"}],Pt={title:"Components/Autocomplete/Features",decorators:[e=>{const[t,l]=C.useState("none"),s=C.useCallback(r=>{l(r.key)},[]);return o.jsx(U,{children:o.jsx(Y,{children:o.jsxs("div",{onKeyDownCapture:s,children:[o.jsxs("p",{className:x.LastKeyPressed,id:"key-press-label",children:["Last key pressed: ",t]}),o.jsx("div",{className:x.StoryPadding,children:o.jsx(e,{})})]})})})}],parameters:{controls:{exclude:K}},args:{...X,emptyStateText:"No selectable options",menuLoading:!1,selectionVariant:"single",anchorSide:void 0,height:"auto",overlayMaxHeight:void 0,width:"auto"},argTypes:{emptyStateText:{control:{type:"text"},table:{category:"Autocomplete.Menu"}},menuLoading:{name:"loading",control:{type:"boolean"},table:{category:"Autocomplete.Menu"}},selectionVariant:{control:{type:"radio"},options:["single","multiple"],table:{category:"Autocomplete.Menu"}},anchorSide:{control:{type:"select"},options:["inside-top","inside-bottom","inside-left","inside-right","inside-center","outside-top","outside-bottom","outside-left","outside-right"],table:{category:"Autocomplete.Overlay"}},height:{control:{type:"select"},options:["auto","initial","small","medium","large","xlarge","xsmall"],table:{category:"Autocomplete.Overlay"}},overlayMaxHeight:{name:"maxHeight",control:{type:"select"},options:["small","medium","large","xlarge","xsmall",void 0],table:{category:"Autocomplete.Overlay"}},width:{control:{type:"select"},options:["auto","small","medium","large","xlarge","xxlarge"],table:{category:"Autocomplete.Overlay"}},...Q("TextInput props"),...J}},N=()=>{const e=_.c(20);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],e[0]=t):t=e[0];const[l,s]=C.useState(t);let r;e[1]!==l?(r=l.map(fe),e[1]=l,e[2]=r):r=e[2];const a=r,[n,u]=C.useState(a);let i;e[3]!==n||e[4]!==l?(i=I=>{s(l.filter(A=>A.id!==I)),u(n.filter(A=>A!==I))},e[3]=n,e[4]=l,e[5]=i):i=e[5];const m=i;let c;e[6]!==m||e[7]!==n.length||e[8]!==a?(c=I=>{if(Array.isArray(I)){if(u(I.map(he)),I.length<n.length){const A=I.map(ge),S=a.filter(v=>!A.includes(v));for(const v of S)m(v);return}s(I.map(Ie))}},e[6]=m,e[7]=n.length,e[8]=a,e[9]=c):c=e[9];const f=c;let p;e[10]===Symbol.for("react.memo_cache_sentinel")?(p=o.jsx(y.Label,{id:"autocompleteLabel",children:"Default label"}),e[10]=p):p=e[10];let h;e[11]!==m||e[12]!==l?(h=o.jsx(d.Input,{as:G,tokens:l,onTokenRemove:m,block:!0}),e[11]=m,e[12]=l,e[13]=h):h=e[13];let g;e[14]!==f||e[15]!==n?(g=o.jsx(d.Overlay,{children:o.jsx(d.Menu,{items:O,selectedItemIds:n,onSelectedChange:f,selectionVariant:"multiple","aria-labelledby":"autocompleteLabel"})}),e[14]=f,e[15]=n,e[16]=g):g=e[16];let b;return e[17]!==h||e[18]!==g?(b=o.jsx("form",{className:x.FormPadding,children:o.jsxs(y,{children:[p,o.jsxs(d,{children:[h,g]})]})}),e[17]=h,e[18]=g,e[19]=b):b=e[19],b},k=()=>{const e=_.c(12),[t,l]=q.useState("");let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=o.jsx(y.Label,{id:"autocompleteLabel-add-new",children:"Label"}),e[0]=s):s=e[0];let r;e[1]===Symbol.for("react.memo_cache_sentinel")?(r=c=>{l(c.currentTarget.value)},e[1]=r):r=e[1];let a;e[2]!==t?(a=o.jsx(d.Input,{value:t,onChange:r}),e[2]=t,e[3]=a):a=e[3];let n;e[4]===Symbol.for("react.memo_cache_sentinel")?(n=[],e[4]=n):n=e[4];let u;e[5]!==t?(u=t&&!O.map(ye).includes(t)?{text:t,id:t,handleAddItem:be}:void 0,e[5]=t,e[6]=u):u=e[6];let i;e[7]!==u?(i=o.jsx(d.Overlay,{children:o.jsx(d.Menu,{selectedItemIds:n,"aria-labelledby":"autocompleteLabel-add-new",addNewItem:u,items:O})}),e[7]=u,e[8]=i):i=e[8];let m;return e[9]!==a||e[10]!==i?(m=o.jsx("form",{className:x.FormPadding,children:o.jsxs(y,{children:[s,o.jsxs(d,{children:[a,i]})]})}),e[9]=a,e[10]=i,e[11]=m):m=e[11],m},D=()=>{const e=_.c(11),[t,l]=C.useState("");let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=h=>{l(h.currentTarget.value)},e[0]=s):s=e[0];const r=s;let a;e[1]!==t?(a=h=>h.text.includes(t),e[1]=t,e[2]=a):a=e[2];const n=a;let u;e[3]===Symbol.for("react.memo_cache_sentinel")?(u=o.jsx(y.Label,{id:"autocompleteLabel",children:"Default label"}),e[3]=u):u=e[3];let i;e[4]===Symbol.for("react.memo_cache_sentinel")?(i=o.jsx(d.Input,{onChange:r}),e[4]=i):i=e[4];let m;e[5]===Symbol.for("react.memo_cache_sentinel")?(m=[],e[5]=m):m=e[5];let c;e[6]!==n?(c=o.jsxs(d,{children:[i,o.jsx(d.Overlay,{children:o.jsx(d.Menu,{items:O,selectedItemIds:m,filterFn:n,"aria-labelledby":"autocompleteLabel"})})]}),e[6]=n,e[7]=c):c=e[7];let f;e[8]===Symbol.for("react.memo_cache_sentinel")?(f=o.jsx(y.Caption,{children:"Items in dropdown are filtered if their text has no part that matches the input value"}),e[8]=f):f=e[8];let p;return e[9]!==c?(p=o.jsx("form",{className:x.FormPadding,children:o.jsxs(y,{children:[u,c,f]})}),e[9]=c,e[10]=p):p=e[10],p},w=()=>{const e=_.c(14);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],e[0]=t):t=e[0];const[l,s]=C.useState(t);let r;e[1]!==l?(r=b=>l.includes(b),e[1]=l,e[2]=r):r=e[2];const a=r;let n;e[3]===Symbol.for("react.memo_cache_sentinel")?(n=b=>{Array.isArray(b)&&s(b.map(Ae))},e[3]=n):n=e[3];const u=n;let i;e[4]!==a?(i=(b,I)=>a(b)===a(I)?0:a(b)?1:-1,e[4]=a,e[5]=i):i=e[5];const m=i;let c;e[6]===Symbol.for("react.memo_cache_sentinel")?(c=o.jsx(y.Label,{id:"autocompleteLabel",children:"Default label"}),e[6]=c):c=e[6];let f;e[7]===Symbol.for("react.memo_cache_sentinel")?(f=o.jsx(d.Input,{}),e[7]=f):f=e[7];let p;e[8]!==m||e[9]!==l?(p=o.jsxs(d,{children:[f,o.jsx(d.Overlay,{children:o.jsx(d.Menu,{items:O,selectedItemIds:l,onSelectedChange:u,sortOnCloseFn:m,"aria-labelledby":"autocompleteLabel"})})]}),e[8]=m,e[9]=l,e[10]=p):p=e[10];let h;e[11]===Symbol.for("react.memo_cache_sentinel")?(h=o.jsx(y.Caption,{children:"When the dropdown closes, selected items are sorted to the end"}),e[11]=h):h=e[11];let g;return e[12]!==p?(g=o.jsx("form",{className:x.FormPadding,children:o.jsxs(y,{children:[c,p,h]})}),e[12]=p,e[13]=g):g=e[13],g},P=()=>{const e=_.c(6),[t,l]=C.useState(!1);let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=c=>{l(c)},e[0]=s):s=e[0];const r=s;let a;e[1]===Symbol.for("react.memo_cache_sentinel")?(a=o.jsx(y.Label,{id:"autocompleteLabel",children:"Default label"}),e[1]=a):a=e[1];let n;e[2]===Symbol.for("react.memo_cache_sentinel")?(n=o.jsx(d.Input,{}),e[2]=n):n=e[2];let u;e[3]===Symbol.for("react.memo_cache_sentinel")?(u=o.jsxs(y,{children:[a,o.jsxs(d,{children:[n,o.jsx(d.Overlay,{children:o.jsx(d.Menu,{items:O,selectedItemIds:[],onOpenChange:r,"aria-labelledby":"autocompleteLabel"})})]})]}),e[3]=u):u=e[3];const i=t?"opened":"closed";let m;return e[4]!==i?(m=o.jsxs(ee,{as:"form",padding:"normal",children:[u,o.jsxs("div",{children:["The menu is ",o.jsx("strong",{children:i})]})]}),e[4]=i,e[5]=m):m=e[5],m},M=e=>{const t=_.c(31);let l;t[0]!==e?(l=Z(e),t[0]=e,t[1]=l):l=t[1];const{parentArgs:s,labelArgs:r,captionArgs:a,validationArgs:n}=l;let u;t[2]!==e?(u=pe(e),t[2]=e,t[3]=u):u=t[3];const{menuArgs:i,overlayArgs:m,textInputArgs:c}=u;let f;t[4]===Symbol.for("react.memo_cache_sentinel")?(f=[],t[4]=f):f=t[4];const[p,h]=C.useState(f);let g;t[5]===Symbol.for("react.memo_cache_sentinel")?(g=z=>{z&&setTimeout(()=>{h(O)},1500)},t[5]=g):g=t[5];const b=g;let I;t[6]!==r?(I=o.jsx(y.Label,{id:"autocompleteLabel",...r}),t[6]=r,t[7]=I):I=t[7];let A;t[8]!==c?(A=o.jsx(d.Input,{...c,size:c.inputSize}),t[8]=c,t[9]=A):A=t[9];let S;t[10]===Symbol.for("react.memo_cache_sentinel")?(S=[],t[10]=S):S=t[10];const v=p.length===0;let F;t[11]!==p||t[12]!==i||t[13]!==v?(F=o.jsx(d.Menu,{items:p,selectedItemIds:S,onOpenChange:b,"aria-labelledby":"autocompleteLabel",...i,loading:v}),t[11]=p,t[12]=i,t[13]=v,t[14]=F):F=t[14];let j;t[15]!==m||t[16]!==F?(j=o.jsx(d.Overlay,{...m,children:F}),t[15]=m,t[16]=F,t[17]=j):j=t[17];let L;t[18]!==A||t[19]!==j?(L=o.jsxs(d,{children:[A,j]}),t[18]=A,t[19]=j,t[20]=L):L=t[20];let R;t[21]!==a?(R=a.children&&o.jsx(y.Caption,{...a}),t[21]=a,t[22]=R):R=t[22];let T;t[23]!==n?(T=n.children&&n.variant&&o.jsx(y.Validation,{...n,variant:n.variant}),t[23]=n,t[24]=T):T=t[24];let W;return t[25]!==s||t[26]!==L||t[27]!==R||t[28]!==T||t[29]!==I?(W=o.jsx("form",{className:x.FormPadding,children:o.jsxs(y,{...s,children:[I,L,R,T]})}),t[25]=s,t[26]=L,t[27]=R,t[28]=T,t[29]=I,t[30]=W):W=t[30],W};M.parameters={controls:{exclude:[...K,"loading"]}};const V=()=>{const e=_.c(3);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=o.jsx(y.Label,{id:"autocompleteLabel",children:"Default label"}),e[0]=t):t=e[0];let l;e[1]===Symbol.for("react.memo_cache_sentinel")?(l=o.jsx(d.Input,{}),e[1]=l):l=e[1];let s;return e[2]===Symbol.for("react.memo_cache_sentinel")?(s=o.jsx("form",{className:x.FormPadding,children:o.jsxs(y,{children:[t,o.jsxs(d,{children:[l,o.jsx(d.Menu,{items:O,selectedItemIds:[],"aria-labelledby":"autocompleteLabel"})]})]})}),e[2]=s):s=e[2],s},B=()=>{const e=_.c(3),t=C.useRef(null);let l;e[0]===Symbol.for("react.memo_cache_sentinel")?(l=o.jsx(y.Label,{htmlFor:"autocompleteInput",id:"autocompleteLabel",children:"Default label"}),e[0]=l):l=e[0];let s;e[1]===Symbol.for("react.memo_cache_sentinel")?(s=o.jsx(d.Input,{id:"autocompleteInput","aria-describedby":"autocompleteCaption autocompleteValidation",className:x.AnchorInput}),e[1]=s):s=e[1];let r;return e[2]===Symbol.for("react.memo_cache_sentinel")?(r=o.jsx("form",{className:x.FormPadding,children:o.jsxs(y,{children:[l,o.jsx("div",{ref:t,className:x.AnchorContainer,children:o.jsxs(d,{children:[s,o.jsx(d.Overlay,{menuAnchorRef:t,children:o.jsx(d.Menu,{items:O,selectedItemIds:[],"aria-labelledby":"autocompleteLabel"})})]})}),o.jsx(y.Caption,{children:"The overlay menu position is anchored to the div with the black border instead of to the text input"})]})}),e[2]=r):r=e[2],r},H=()=>{const e=_.c(11),t=C.useRef(null),l=C.useRef(null),s=C.useRef(null),[r,a]=C.useState(!1),[n,u]=C.useState();let i;e[0]===Symbol.for("react.memo_cache_sentinel")?(i=()=>{a(!0),l.current&&l.current.focus()},e[0]=i):i=e[0];const m=i;let c;e[1]===Symbol.for("react.memo_cache_sentinel")?(c=v=>{a(!1),Array.isArray(v)&&v.length&&u(v[0]),s.current?.focus()},e[1]=c):c=e[1];const f=c,p=n?n.text:"none";let h;e[2]===Symbol.for("react.memo_cache_sentinel")?(h=()=>a(!1),e[2]=h):h=e[2];let g;e[3]===Symbol.for("react.memo_cache_sentinel")?(g={initialFocusRef:l},e[3]=g):g=e[3];let b;e[4]===Symbol.for("react.memo_cache_sentinel")?(b=o.jsx("div",{className:x.OverlayInputBar,children:o.jsx(d.Input,{ref:l,className:x.OverlayInput,block:!0,"aria-label":"Search"})}),e[4]=b):b=e[4];let I;e[5]===Symbol.for("react.memo_cache_sentinel")?(I=o.jsx(d,{children:o.jsxs("div",{className:x.OverlayFlexCol,children:[b,o.jsx("div",{ref:t,className:x.OverlayScroll,children:o.jsx(d.Menu,{items:O,selectedItemIds:[],customScrollContainerRef:t,"aria-labelledby":"autocompleteLabel",onSelectedChange:f})})]})}),e[5]=I):I=e[5];let A;e[6]!==r?(A=o.jsx(te,{open:r,onOpen:m,onClose:h,width:"large",focusTrapSettings:g,side:"inside-top",anchorRef:s,renderAnchor:Ce,preventOverflow:!1,children:I}),e[6]=r,e[7]=A):A=e[7];let S;return e[8]!==p||e[9]!==A?(S=o.jsxs("form",{className:x.FormPadding,children:["Selected item: ",p,A]}),e[8]=p,e[9]=A,e[10]=S):S=e[10],S},E=()=>{const e=_.c(15),t=C.useRef(null),[l,s]=C.useState(!1),[r,a]=C.useState(!1);let n;e[0]===Symbol.for("react.memo_cache_sentinel")?(n=()=>{t.current instanceof HTMLElement&&(oe(t.current,"outerContainer"),s(!0))},e[0]=n):n=e[0];let u;e[1]!==r?(u=[r],e[1]=r,e[2]=u):u=e[2],C.useEffect(n,u);let i;e[3]===Symbol.for("react.memo_cache_sentinel")?(i=o.jsx($,{onClick:()=>a(!0),children:"Show dialog"}),e[3]=i):i=e[3];let m;e[4]===Symbol.for("react.memo_cache_sentinel")?(m=()=>a(!1),e[4]=m):m=e[4];let c;e[5]!==l?(c=l?o.jsxs(y,{children:[o.jsx(y.Label,{id:"autocompleteLabel",children:"Default label"}),o.jsxs(d,{children:[o.jsx(d.Input,{"data-testid":"autocompleteInput"}),o.jsx(d.Overlay,{portalContainerName:"outerContainer",children:o.jsx(d.Menu,{items:O,selectedItemIds:[],"aria-labelledby":"autocompleteLabel"})})]})]}):null,e[5]=l,e[6]=c):c=e[6];let f;e[7]!==c?(f=o.jsx("div",{ref:t,children:o.jsx("form",{className:x.FormPadding,children:c})}),e[7]=c,e[8]=f):f=e[8];let p;e[9]!==r||e[10]!==f?(p=o.jsx(le,{"aria-label":"Dialog with autocomplete",id:"dialog-with-autocomplete",isOpen:r,onDismiss:m,children:f}),e[9]=r,e[10]=f,e[11]=p):p=e[11];let h;e[12]===Symbol.for("react.memo_cache_sentinel")?(h=o.jsx("p",{children:"The Autocomplete.Overlay is portalled to a div inside the Dialog to ensure it appears above the dialog in the stacking context."}),e[12]=h):h=e[12];let g;return e[13]!==p?(g=o.jsxs(o.Fragment,{children:[i,p,h]}),e[13]=p,e[14]=g):g=e[14],g};N.__docgenInfo={description:"",methods:[],displayName:"WithTokenInput"};k.__docgenInfo={description:"",methods:[],displayName:"AddNewItem"};D.__docgenInfo={description:"",methods:[],displayName:"CustomSearchFilterFn"};w.__docgenInfo={description:"",methods:[],displayName:"CustomSortAfterMenuClose"};P.__docgenInfo={description:"",methods:[],displayName:"WithCallbackWhenOverlayOpenStateChanges"};M.__docgenInfo={description:"",methods:[],displayName:"AsyncLoadingOfItems",props:{labelChildren:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},captionChildren:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};V.__docgenInfo={description:"",methods:[],displayName:"RenderingTheMenuOutsideAnOverlay"};B.__docgenInfo={description:"",methods:[],displayName:"CustomOverlayMenuAnchor"};H.__docgenInfo={description:"",methods:[],displayName:"InOverlayWithCustomScrollContainerRef"};E.__docgenInfo={description:"",methods:[],displayName:"InADialog"};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [tokens, setTokens] = useState<Datum[]>([]);
  const selectedTokenIds = tokens.map(token => token.id);
  const [selectedItemIds, setSelectedItemIds] = useState<Array<string>>(selectedTokenIds);
  const onTokenRemove: (tokenId: string | number) => void = tokenId => {
    setTokens(tokens.filter(token => token.id !== tokenId));
    setSelectedItemIds(selectedItemIds.filter(id => id !== tokenId));
  };
  const onSelectedChange = (newlySelectedItems: Datum | Datum[]) => {
    if (!Array.isArray(newlySelectedItems)) {
      return;
    }
    setSelectedItemIds(newlySelectedItems.map(item => item.id));
    if (newlySelectedItems.length < selectedItemIds.length) {
      const newlySelectedItemIds = newlySelectedItems.map(({
        id
      }) => id);
      const removedItemIds = selectedTokenIds.filter(id => !newlySelectedItemIds.includes(id));
      for (const removedItemId of removedItemIds) {
        onTokenRemove(removedItemId);
      }
      return;
    }
    setTokens(newlySelectedItems.map(({
      id,
      text
    }) => ({
      id,
      text
    })));
  };
  return <form className={classes.FormPadding}>
      <FormControl>
        <FormControl.Label id="autocompleteLabel">Default label</FormControl.Label>
        <Autocomplete>
          <Autocomplete.Input as={TextInputTokens} tokens={tokens} onTokenRemove={onTokenRemove} block />
          <Autocomplete.Overlay>
            <Autocomplete.Menu items={items} selectedItemIds={selectedItemIds} onSelectedChange={onSelectedChange} selectionVariant="multiple" aria-labelledby="autocompleteLabel" />
          </Autocomplete.Overlay>
        </Autocomplete>
      </FormControl>
    </form>;
}`,...N.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = React.useState<string>('');
  return <form className={classes.FormPadding}>
      <FormControl>
        <FormControl.Label id="autocompleteLabel-add-new">Label</FormControl.Label>
        <Autocomplete>
          <Autocomplete.Input value={inputValue} onChange={e => {
          setInputValue(e.currentTarget.value);
        }} />
          <Autocomplete.Overlay>
            <Autocomplete.Menu selectedItemIds={[]} aria-labelledby="autocompleteLabel-add-new" addNewItem={inputValue && !items.map(item => item.text).includes(inputValue) ? {
            text: inputValue,
            id: inputValue,
            handleAddItem: selectedItem => {
              // eslint-disable-next-line no-console
              console.log('added item:', selectedItem);
              return;
            }
          } : undefined} items={items} />
          </Autocomplete.Overlay>
        </Autocomplete>
      </FormControl>
    </form>;
}`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [filterVal, setFilterVal] = useState<string>('');
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setFilterVal(e.currentTarget.value);
  };
  const customFilterFn = (item: Datum) => item.text.includes(filterVal);
  return <form className={classes.FormPadding}>
      <FormControl>
        <FormControl.Label id="autocompleteLabel">Default label</FormControl.Label>
        <Autocomplete>
          <Autocomplete.Input onChange={handleChange} />
          <Autocomplete.Overlay>
            <Autocomplete.Menu items={items} selectedItemIds={[]} filterFn={customFilterFn} aria-labelledby="autocompleteLabel" />
          </Autocomplete.Overlay>
        </Autocomplete>
        <FormControl.Caption>
          Items in dropdown are filtered if their text has no part that matches the input value
        </FormControl.Caption>
      </FormControl>
    </form>;
}`,...D.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [selectedItemIds, setSelectedItemIds] = useState<Array<string>>([]);
  const isItemSelected = (itemId: string) => selectedItemIds.includes(itemId);
  const onSelectedChange = (newlySelectedItems: Datum | Datum[]) => {
    if (!Array.isArray(newlySelectedItems)) {
      return;
    }
    setSelectedItemIds(newlySelectedItems.map(item => item.id));
  };
  const customSortFn = (itemIdA: string, itemIdB: string) => isItemSelected(itemIdA) === isItemSelected(itemIdB) ? 0 : isItemSelected(itemIdA) ? 1 : -1;
  return <form className={classes.FormPadding}>
      <FormControl>
        <FormControl.Label id="autocompleteLabel">Default label</FormControl.Label>
        <Autocomplete>
          <Autocomplete.Input />
          <Autocomplete.Overlay>
            <Autocomplete.Menu items={items} selectedItemIds={selectedItemIds} onSelectedChange={onSelectedChange} sortOnCloseFn={customSortFn} aria-labelledby="autocompleteLabel" />
          </Autocomplete.Overlay>
        </Autocomplete>
        <FormControl.Caption>When the dropdown closes, selected items are sorted to the end</FormControl.Caption>
      </FormControl>
    </form>;
}`,...w.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const onOpenChange = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };
  return <Stack as="form" padding="normal">
      <FormControl>
        <FormControl.Label id="autocompleteLabel">Default label</FormControl.Label>
        <Autocomplete>
          <Autocomplete.Input />
          <Autocomplete.Overlay>
            <Autocomplete.Menu items={items} selectedItemIds={[]} onOpenChange={onOpenChange} aria-labelledby="autocompleteLabel" />
          </Autocomplete.Overlay>
        </Autocomplete>
      </FormControl>
      <div>
        The menu is <strong>{isMenuOpen ? 'opened' : 'closed'}</strong>
      </div>
    </Stack>;
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`(args: FormControlArgs<AutocompleteArgs>) => {
  const {
    parentArgs,
    labelArgs,
    captionArgs,
    validationArgs
  } = getFormControlArgsByChildComponent(args);
  const {
    menuArgs,
    overlayArgs,
    textInputArgs
  } = getArgsByChildComponent(args);
  const [loadedItems, setLoadedItems] = useState<Datum[]>([]);
  const onOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setTimeout(() => {
        setLoadedItems(items);
      }, 1500);
    }
  };
  return <form className={classes.FormPadding}>
      <FormControl {...parentArgs}>
        <FormControl.Label id="autocompleteLabel" {...labelArgs} />
        <Autocomplete>
          <Autocomplete.Input {...textInputArgs} size={textInputArgs.inputSize} />
          <Autocomplete.Overlay {...overlayArgs}>
            <Autocomplete.Menu items={loadedItems} selectedItemIds={[]} onOpenChange={onOpenChange} aria-labelledby="autocompleteLabel" {...menuArgs} loading={loadedItems.length === 0} />
          </Autocomplete.Overlay>
        </Autocomplete>
        {captionArgs.children && <FormControl.Caption {...captionArgs} />}
        {validationArgs.children && validationArgs.variant && <FormControl.Validation {...validationArgs} variant={validationArgs.variant} />}
      </FormControl>
    </form>;
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <form className={classes.FormPadding}>
      <FormControl>
        <FormControl.Label id="autocompleteLabel">Default label</FormControl.Label>
        <Autocomplete>
          <Autocomplete.Input />
          <Autocomplete.Menu items={items} selectedItemIds={[]} aria-labelledby="autocompleteLabel" />
        </Autocomplete>
      </FormControl>
    </form>;
}`,...V.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const menuAnchorRef = useRef<HTMLElement>(null);
  return <form className={classes.FormPadding}>
      <FormControl>
        <FormControl.Label htmlFor="autocompleteInput" id="autocompleteLabel">
          Default label
        </FormControl.Label>
        <div ref={menuAnchorRef as React.RefObject<HTMLDivElement>} className={classes.AnchorContainer}>
          <Autocomplete>
            <Autocomplete.Input id="autocompleteInput" aria-describedby="autocompleteCaption autocompleteValidation" className={classes.AnchorInput} />
            <Autocomplete.Overlay menuAnchorRef={menuAnchorRef}>
              <Autocomplete.Menu items={items} selectedItemIds={[]} aria-labelledby="autocompleteLabel" />
            </Autocomplete.Overlay>
          </Autocomplete>
        </div>
        <FormControl.Caption>
          The overlay menu position is anchored to the div with the black border instead of to the text input
        </FormControl.Caption>
      </FormControl>
    </form>;
}`,...B.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Datum>();
  const handleOpen = () => {
    setIsOpen(true);
    inputRef.current && inputRef.current.focus();
  };
  const selectChange = (item: Datum[] | Datum) => {
    setIsOpen(false);
    if (Array.isArray(item) && item.length) setSelectedItem(item[0]);
    triggerRef.current?.focus();
  };
  return <form className={classes.FormPadding}>
      Selected item: {selectedItem ? selectedItem.text : 'none'}
      <AnchoredOverlay open={isOpen} onOpen={handleOpen} onClose={() => setIsOpen(false)} width="large" focusTrapSettings={{
      initialFocusRef: inputRef
    }} side="inside-top" anchorRef={triggerRef} renderAnchor={props => <Button {...props}>open overlay</Button>} preventOverflow={false}>
        <Autocomplete>
          <div className={classes.OverlayFlexCol}>
            <div className={classes.OverlayInputBar}>
              <Autocomplete.Input ref={inputRef} className={classes.OverlayInput} block aria-label="Search" />
            </div>
            <div ref={scrollContainerRef as RefObject<HTMLDivElement>} className={classes.OverlayScroll}>
              <Autocomplete.Menu items={items} selectedItemIds={[]} customScrollContainerRef={scrollContainerRef} aria-labelledby="autocompleteLabel" onSelectedChange={selectChange} />
            </div>
          </div>
        </Autocomplete>
      </AnchoredOverlay>
    </form>;
}`,...H.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  useEffect(() => {
    if (outerContainerRef.current instanceof HTMLElement) {
      registerPortalRoot(outerContainerRef.current, 'outerContainer');
      setMounted(true);
    }
  }, [isDialogOpen]);
  return <>
      <Button onClick={() => setIsDialogOpen(true)}>Show dialog</Button>
      <Dialog aria-label="Dialog with autocomplete" id="dialog-with-autocomplete" isOpen={isDialogOpen} onDismiss={() => setIsDialogOpen(false)}>
        <div ref={outerContainerRef}>
          <form className={classes.FormPadding}>
            {mounted ? <FormControl>
                <FormControl.Label id="autocompleteLabel">Default label</FormControl.Label>
                <Autocomplete>
                  <Autocomplete.Input data-testid="autocompleteInput" />
                  <Autocomplete.Overlay portalContainerName="outerContainer">
                    <Autocomplete.Menu items={items} selectedItemIds={[]} aria-labelledby="autocompleteLabel" />
                  </Autocomplete.Overlay>
                </Autocomplete>
              </FormControl> : null}
          </form>
        </div>
      </Dialog>
      <p>
        The Autocomplete.Overlay is portalled to a div inside the Dialog to ensure it appears above the dialog in the
        stacking context.
      </p>
    </>;
}`,...E.parameters?.docs?.source}}};function fe(e){return e.id}function he(e){return e.id}function ge(e){const{id:t}=e;return t}function Ie(e){const{id:t,text:l}=e;return{id:t,text:l}}function ye(e){return e.text}function be(e){console.log("added item:",e)}function Ae(e){return e.id}function Ce(e){return o.jsx($,{...e,children:"open overlay"})}const Vt=["WithTokenInput","AddNewItem","CustomSearchFilterFn","CustomSortAfterMenuClose","WithCallbackWhenOverlayOpenStateChanges","AsyncLoadingOfItems","RenderingTheMenuOutsideAnOverlay","CustomOverlayMenuAnchor","InOverlayWithCustomScrollContainerRef","InADialog"];export{k as AddNewItem,M as AsyncLoadingOfItems,B as CustomOverlayMenuAnchor,D as CustomSearchFilterFn,w as CustomSortAfterMenuClose,E as InADialog,H as InOverlayWithCustomScrollContainerRef,V as RenderingTheMenuOutsideAnOverlay,P as WithCallbackWhenOverlayOpenStateChanges,N as WithTokenInput,Vt as __namedExportsOrder,Pt as default};
