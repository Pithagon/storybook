import{d as g,j as n,T as U,B as Q,r as I}from"./iframe-Cfz2vXeE.js";import{aP as N,l as K,r as F,j as Z,V as ee,S as H,p as G,az as te,aw as J,v as ne,_ as ie}from"./index.esm-C1WN7kEu.js";import{L as oe,I as re,A}from"./index-DYY_yzIQ.js";import{D as ae}from"./Divider-DAC_rNDB.js";import{u as le}from"./useProvidedStateOrCreate-BEKIGSkE.js";import{u as se}from"./useProvidedRefOrCreate-Pg3blKRP.js";import{B as M}from"./Button-3sCteC9V.js";import{A as ce}from"./AnchoredOverlay-DQ90Zw6u.js";import"./preload-helper-D9Z9MdNV.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./Truncate-DUc3hzfC.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Box-BgR2Y17o.js";import"./ButtonBase-BlGPm-3t.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./useFocusTrap-CL_Yl_fl.js";import"./useFocusZone-BvuuCBlY.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./IconButton-qXcIkMuV.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./Overlay-Du2pzphD.js";import"./Portal-BKCn1yDJ.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./useFeatureFlag-paATTdb3.js";const X=e=>{const t=g.c(2);let o;return t[0]!==e?(o=n.jsx(re,{role:"menuitem",...e}),t[0]=e,t[1]=o):o=t[1],o};X.displayName="ActionMenu.Item";const me=e=>n.jsx(M,{...e}),W=e=>{const t=g.c(35);let o,i,s,c,r,a,l,p,m;t[0]!==e?({anchorContent:o,renderAnchor:m,anchorRef:i,onAction:r,open:a,setOpen:p,overlayProps:l,items:s,...c}=e,t[0]=e,t[1]=o,t[2]=i,t[3]=s,t[4]=c,t[5]=r,t[6]=a,t[7]=l,t[8]=p,t[9]=m):(o=t[1],i=t[2],s=t[3],c=t[4],r=t[5],a=t[6],l=t[7],p=t[8],m=t[9]);const u=m===void 0?me:m,[h,d]=le(a,p,!1),v=se(i);let f;t[10]!==d?(f=()=>d(!0),t[10]=d,t[11]=f):f=t[11];const b=f;let C;t[12]!==d?(C=()=>d(!1),t[12]=d,t[13]=C):C=t[13];const y=C;let z;e:{if(u===null){z=null;break e}let x;t[14]!==o||t[15]!==u?(x=R=>u({"aria-label":"menu",children:o,...R}),t[14]=o,t[15]=u,t[16]=x):x=t[16],z=x}const q=z;let P;if(t[17]!==s||t[18]!==r||t[19]!==y){let x;t[21]!==r||t[22]!==y?(x=R=>({...R,role:"menuitem",onAction:(Y,$)=>{(R.onAction??r)?.(Y,$),$.defaultPrevented||y()}}),t[21]=r,t[22]=y,t[23]=x):x=t[23],P=s.map(x),t[17]=s,t[18]=r,t[19]=y,t[20]=P}else P=t[20];const B=P;let w;t[24]!==B||t[25]!==c?(w=n.jsx(oe,{...c,role:"menu",items:B}),t[24]=B,t[25]=c,t[26]=w):w=t[26];let D;return t[27]!==v||t[28]!==h||t[29]!==y||t[30]!==b||t[31]!==l||t[32]!==q||t[33]!==w?(D=n.jsx(ce,{renderAnchor:q,anchorRef:v,open:h,onOpen:b,onClose:y,overlayProps:l,children:w}),t[27]=v,t[28]=h,t[29]=y,t[30]=b,t[31]=l,t[32]=q,t[33]=w,t[34]=D):D=t[34],D};W.displayName="ActionMenu";const S=Object.assign(W,{Divider:ae,Item:X});W.__docgenInfo={description:"",methods:[],displayName:"ActionMenu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| Merge<React.ComponentPropsWithoutRef<'div'>, ItemProps>
| ((Partial<ItemProps> & {renderItem: RenderItemFn}) & {key?: Key})`,elements:[{name:"intersection",raw:"Omit<A, keyof B> & B",elements:[{name:"Omit",elements:[{name:"unknown"},{name:"ItemProps"}],raw:"Omit<A, keyof B>"},{name:"ItemProps"}]},{name:"unknown"}]}],raw:"ItemInput[]"},description:"A collection of `Item` props and `Item`-level custom `Item` renderers."},role:{required:!1,tsType:{name:"union",raw:`| 'alert'
| 'alertdialog'
| 'application'
| 'article'
| 'banner'
| 'button'
| 'cell'
| 'checkbox'
| 'columnheader'
| 'combobox'
| 'complementary'
| 'contentinfo'
| 'definition'
| 'dialog'
| 'directory'
| 'document'
| 'feed'
| 'figure'
| 'form'
| 'grid'
| 'gridcell'
| 'group'
| 'heading'
| 'img'
| 'link'
| 'list'
| 'listbox'
| 'listitem'
| 'log'
| 'main'
| 'marquee'
| 'math'
| 'menu'
| 'menubar'
| 'menuitem'
| 'menuitemcheckbox'
| 'menuitemradio'
| 'navigation'
| 'none'
| 'note'
| 'option'
| 'presentation'
| 'progressbar'
| 'radio'
| 'radiogroup'
| 'region'
| 'row'
| 'rowgroup'
| 'rowheader'
| 'scrollbar'
| 'search'
| 'searchbox'
| 'separator'
| 'slider'
| 'spinbutton'
| 'status'
| 'switch'
| 'tab'
| 'table'
| 'tablist'
| 'tabpanel'
| 'term'
| 'textbox'
| 'timer'
| 'toolbar'
| 'tooltip'
| 'tree'
| 'treegrid'
| 'treeitem'`,elements:[{name:"literal",value:"'alert'"},{name:"literal",value:"'alertdialog'"},{name:"literal",value:"'application'"},{name:"literal",value:"'article'"},{name:"literal",value:"'banner'"},{name:"literal",value:"'button'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'columnheader'"},{name:"literal",value:"'combobox'"},{name:"literal",value:"'complementary'"},{name:"literal",value:"'contentinfo'"},{name:"literal",value:"'definition'"},{name:"literal",value:"'dialog'"},{name:"literal",value:"'directory'"},{name:"literal",value:"'document'"},{name:"literal",value:"'feed'"},{name:"literal",value:"'figure'"},{name:"literal",value:"'form'"},{name:"literal",value:"'grid'"},{name:"literal",value:"'gridcell'"},{name:"literal",value:"'group'"},{name:"literal",value:"'heading'"},{name:"literal",value:"'img'"},{name:"literal",value:"'link'"},{name:"literal",value:"'list'"},{name:"literal",value:"'listbox'"},{name:"literal",value:"'listitem'"},{name:"literal",value:"'log'"},{name:"literal",value:"'main'"},{name:"literal",value:"'marquee'"},{name:"literal",value:"'math'"},{name:"literal",value:"'menu'"},{name:"literal",value:"'menubar'"},{name:"literal",value:"'menuitem'"},{name:"literal",value:"'menuitemcheckbox'"},{name:"literal",value:"'menuitemradio'"},{name:"literal",value:"'navigation'"},{name:"literal",value:"'none'"},{name:"literal",value:"'note'"},{name:"literal",value:"'option'"},{name:"literal",value:"'presentation'"},{name:"literal",value:"'progressbar'"},{name:"literal",value:"'radio'"},{name:"literal",value:"'radiogroup'"},{name:"literal",value:"'region'"},{name:"literal",value:"'row'"},{name:"literal",value:"'rowgroup'"},{name:"literal",value:"'rowheader'"},{name:"literal",value:"'scrollbar'"},{name:"literal",value:"'search'"},{name:"literal",value:"'searchbox'"},{name:"literal",value:"'separator'"},{name:"literal",value:"'slider'"},{name:"literal",value:"'spinbutton'"},{name:"literal",value:"'status'"},{name:"literal",value:"'switch'"},{name:"literal",value:"'tab'"},{name:"literal",value:"'table'"},{name:"literal",value:"'tablist'"},{name:"literal",value:"'tabpanel'"},{name:"literal",value:"'term'"},{name:"literal",value:"'textbox'"},{name:"literal",value:"'timer'"},{name:"literal",value:"'toolbar'"},{name:"literal",value:"'tooltip'"},{name:"literal",value:"'tree'"},{name:"literal",value:"'treegrid'"},{name:"literal",value:"'treeitem'"}]},description:"The ARIA role describing the function of `List` component. `listbox` is a common value."},id:{required:!1,tsType:{name:"string"},description:"id to attach to the base DOM node of the list"},"aria-label":{required:!1,tsType:{name:"string"},description:"aria-label to attach to the base DOM node of the list"},renderItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: ItemProps) => React.ReactElement",signature:{arguments:[{type:{name:"ItemProps"},name:"props"}],return:{name:"ReactReactElement",raw:"React.ReactElement"}}},description:"A `List`-level custom `Item` renderer. Every `Item` within this `List`\nwithout a `Group`-level or `Item`-level custom `Item` renderer will be\nrendered using this function component."},renderGroup:{required:!1,tsType:{name:"Group"},description:"A `List`-level custom `Group` renderer. Every `Group` within this `List`\nwithout a `Group`-level custom `Item` renderer will be rendered using\nthis function component."},variant:{required:!1,tsType:{name:"union",raw:"'inset' | 'horizontal-inset' | 'full'",elements:[{name:"literal",value:"'inset'"},{name:"literal",value:"'horizontal-inset'"},{name:"literal",value:"'full'"}]},description:'Style variations. Usage is discretionary.\n\n- `"inset"` - `List` children are offset (vertically and horizontally) from `List`’s edges\n- `"full"` - `List` children are flush (vertically and horizontally) with `List` edges'},selectionVariant:{required:!1,tsType:{name:"union",raw:"'single' | 'multiple' | 'radio'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"},{name:"literal",value:"'radio'"}]},description:"For `Item`s which can be selected, whether `multiple` `Item`s or a `single` `Item` can be selected"},showItemDividers:{required:!1,tsType:{name:"boolean"},description:"Whether to display a divider above each `Item` in this `List` when it does not follow a `Header` or `Divider`."},anchorContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content that is passed into the renderAnchor component, which is a button by default."},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: ItemProps, event?: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ItemProps"},name:"props"},{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:"A callback that triggers both on clicks and keyboard events. This callback will be overridden by item level `onAction` callbacks."},open:{required:!1,tsType:{name:"boolean"},description:"If defined, will control the open/closed state of the overlay. Must be used in conjuction with `setOpen`."},setOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(s: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"s"}],return:{name:"void"}}},description:"If defined, will control the open/closed state of the overlay. Must be used in conjuction with `open`."},overlayProps:{required:!1,tsType:{name:"Partial",elements:[{name:"ComponentPropsWithRef",elements:[{name:"Overlay"}],raw:"ComponentPropsWithRef<typeof Overlay>"}],raw:"Partial<OverlayProps>"},description:"Props to be spread on the internal `Overlay` component."},renderAnchor:{defaultValue:{value:"<T extends ButtonProps>(props: T) => <Button {...props} />",computed:!1},required:!1}},composes:["Partial"]};const pe="prc-deprecated-ErsatzOverlay-rURFN",ue={ErsatzOverlay:pe},ht={title:"Deprecated/Components/ActionMenu",component:S,decorators:[e=>n.jsx(U,{children:n.jsx(Q,{children:n.jsx(e,{})})})],parameters:{controls:{disable:!0}}},k=e=>{const t=g.c(6);let o,i;t[0]!==e?({children:o,...i}=e,t[0]=e,t[1]=o,t[2]=i):(o=t[1],i=t[2]);let s;return t[3]!==o||t[4]!==i?(s=n.jsx("div",{className:ue.ErsatzOverlay,...i,children:o}),t[3]=o,t[4]=i,t[5]=s):s=t[5],s};function O(){const e=g.c(7),[t,o]=I.useState("Select an option");let i;e[0]===Symbol.for("react.memo_cache_sentinel")?(i=p=>{o(p.text??"")},e[0]=i):i=e[0];const s=i;let c;e[1]===Symbol.for("react.memo_cache_sentinel")?(c=n.jsx("h1",{children:"Actions"}),e[1]=c):c=e[1];let r;e[2]!==t?(r=n.jsxs("h2",{children:["Last option activated: ",t]}),e[2]=t,e[3]=r):r=e[3];let a;e[4]===Symbol.for("react.memo_cache_sentinel")?(a=n.jsx(k,{children:n.jsx(S,{onAction:s,anchorContent:n.jsx(N,{}),items:[{leadingVisual:N,text:"Open current Codespace",description:"Your existing Codespace will be opened to its previous state, and you'll be asked to manually switch to new-branch.",descriptionVariant:"block",trailingText:"⌘O"},{leadingVisual:K,text:"Create new Codespace",description:"Create a brand new Codespace with a fresh image and checkout this branch.",descriptionVariant:"block",trailingText:"⌘C"}]})}),e[4]=a):a=e[4];let l;return e[5]!==r?(l=n.jsxs(n.Fragment,{children:[c,r,a]}),e[5]=r,e[6]=l):l=e[6],l}O.storyName="Actions";function _(){const e=g.c(9),[t,o]=I.useState("Select an option");let i;e[0]===Symbol.for("react.memo_cache_sentinel")?(i=u=>{o(u.text||"")},e[0]=i):i=e[0];const s=i;let c;e[1]===Symbol.for("react.memo_cache_sentinel")?(c=n.jsx("h1",{children:"Simple List"}),e[1]=c):c=e[1];let r;e[2]!==t?(r=n.jsxs("h2",{children:["Last option activated: ",t]}),e[2]=t,e[3]=r):r=e[3];let a,l;e[4]===Symbol.for("react.memo_cache_sentinel")?(a={"data-test-id":"some_test_id"},l={text:"New file",trailingText:"⌘O",disabled:!0,leadingVisual:F},e[4]=a,e[5]=l):(a=e[4],l=e[5]);let p;e[6]===Symbol.for("react.memo_cache_sentinel")?(p=n.jsx(k,{children:n.jsx(S,{onAction:s,anchorContent:"Menu",overlayProps:a,items:[l,A.Divider,{text:"Copy link",trailingText:"ctrl+C"},{text:"Edit file",trailingText:"⌘E"},{text:"Delete file",variant:"danger",trailingText:"⌘D"}]})}),e[6]=p):p=e[6];let m;return e[7]!==r?(m=n.jsxs(n.Fragment,{children:[c,r,p]}),e[7]=r,e[8]=m):m=e[8],m}_.storyName="Simple List";function j(){const e=g.c(18),[t,o]=I.useState("Select an option"),[i,s]=I.useState(!1);let c;e[0]===Symbol.for("react.memo_cache_sentinel")?(c=C=>{o(C.text)},e[0]=c):c=e[0];const r=c;let a;e[1]===Symbol.for("react.memo_cache_sentinel")?(a=n.jsx("h1",{children:"Simple List"}),e[1]=a):a=e[1];let l;e[2]!==t?(l=n.jsxs("h2",{children:["Last option activated: ",t]}),e[2]=t,e[3]=l):l=e[3];const p=i?"Open":"Closed";let m;e[4]!==p?(m=n.jsxs("h2",{children:["External Open State: ",p]}),e[4]=p,e[5]=m):m=e[5];let u;e[6]!==i?(u=n.jsx("div",{children:n.jsx(M,{onClick:()=>s(!i),children:"Toggle External State"})}),e[6]=i,e[7]=u):u=e[7];let h;e[8]===Symbol.for("react.memo_cache_sentinel")?(h=n.jsx("br",{}),e[8]=h):h=e[8];let d;e[9]===Symbol.for("react.memo_cache_sentinel")?(d={text:"New file",trailingText:"⌘O",disabled:!0,leadingVisual:F},e[9]=d):d=e[9];let v;e[10]===Symbol.for("react.memo_cache_sentinel")?(v=[d,A.Divider,{text:"Copy link",trailingText:"ctrl+C"},{text:"Edit file",trailingText:"⌘E"},{text:"Delete file",variant:"danger",trailingVisual:"⌘D"}],e[10]=v):v=e[10];let f;e[11]!==i?(f=n.jsx(k,{children:n.jsx(S,{onAction:r,anchorContent:"Menu",open:i,setOpen:s,items:v})}),e[11]=i,e[12]=f):f=e[12];let b;return e[13]!==l||e[14]!==m||e[15]!==u||e[16]!==f?(b=n.jsxs(n.Fragment,{children:[a,l,m,u,h,f]}),e[13]=l,e[14]=m,e[15]=u,e[16]=f,e[17]=b):b=e[17],b}function E(){const e=g.c(12),[t,o]=I.useState("Select an option");let i;e[0]===Symbol.for("react.memo_cache_sentinel")?(i=v=>{o(v.text||"")},e[0]=i):i=e[0];const s=i;let c;e[1]===Symbol.for("react.memo_cache_sentinel")?(c=n.jsx("h1",{children:"Complex List"}),e[1]=c):c=e[1];let r;e[2]!==t?(r=n.jsxs("h2",{children:["Last option activated: ",t]}),e[2]=t,e[3]=r):r=e[3];let a;e[4]===Symbol.for("react.memo_cache_sentinel")?(a={groupId:"0"},e[4]=a):a=e[4];let l;e[5]===Symbol.for("react.memo_cache_sentinel")?(l={groupId:"1",header:{title:"Live query",variant:"subtle"}},e[5]=l):l=e[5];let p,m,u;e[6]===Symbol.for("react.memo_cache_sentinel")?(p=[a,l,{groupId:"2",header:{title:"Layout",variant:"subtle"}},{groupId:"3",renderItem:fe},{groupId:"4"}],m={leadingVisual:Z,text:"Rename",groupId:"0"},u={leadingVisual:ee,text:"Duplicate",groupId:"0"},e[6]=p,e[7]=m,e[8]=u):(p=e[6],m=e[7],u=e[8]);let h;e[9]===Symbol.for("react.memo_cache_sentinel")?(h=n.jsx(k,{children:n.jsx(S,{onAction:s,anchorContent:"Menu",groupMetadata:p,items:[m,u,{leadingVisual:H,text:"repo:github/github",groupId:"1",renderItem:he,trailingVisual:n.jsxs(n.Fragment,{children:["⌘S",n.jsx(G,{})]})},{leadingVisual:H,text:"repo:github/github",groupId:"1",renderItem:de,trailingText:"⌘S",trailingVisual:G},{leadingVisual:te,text:"Table",description:"Information-dense table optimized for operations across teams",descriptionVariant:"block",groupId:"2"},{leadingVisual:F,text:"Board",description:"Kanban-style board focused on visual states",descriptionVariant:"block",groupId:"2"},{leadingVisual:J,text:"Save sort and filters to current view",groupId:"3"},{leadingVisual:J,text:"Save sort and filters to new view",groupId:"3"},{leadingVisual:ne,text:"View settings",groupId:"4"}]})}),e[9]=h):h=e[9];let d;return e[10]!==r?(d=n.jsxs(n.Fragment,{children:[c,r,h]}),e[10]=r,e[11]=d):d=e[11],d}function de(e){return n.jsx(A.Item,{style:{color:"rebeccapurple"},...e})}function he(e){return n.jsx(A.Item,{style:{color:"rebeccapurple"},...e})}function fe(e){return n.jsx(A.Item,{style:{fontWeight:"bold"},...e})}E.storyName="Complex List";function L(){const e=g.c(8),t=ge,[o,i]=I.useState("Select an option");let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=u=>{i(u.text||"")},e[0]=s):s=e[0];const c=s;let r;e[1]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx("h1",{children:"Custom Trigger"}),e[1]=r):r=e[1];let a;e[2]!==o?(a=n.jsxs("h2",{children:["Last option activated: ",o]}),e[2]=o,e[3]=a):a=e[3];let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l={text:"New file"},e[4]=l):l=e[4];let p;e[5]===Symbol.for("react.memo_cache_sentinel")?(p=n.jsx(k,{children:n.jsx(S,{onAction:c,anchorContent:"Menu",renderAnchor:t,items:[l,A.Divider,{text:"Copy link"},{text:"Edit file"},{text:"Delete file",variant:"danger"}]})}),e[5]=p):p=e[5];let m;return e[6]!==a?(m=n.jsxs(n.Fragment,{children:[r,a,p]}),e[6]=a,e[7]=m):m=e[7],m}function ge(e){return n.jsx(M,{...e,sx:{cursor:"pointer"}})}function V(){const e=g.c(9),[t,o]=I.useState(!1),i=I.useRef(null);let s;e[0]!==t?(s=n.jsx(M,{ref:i,onClick:()=>o(!t),children:"Open Menu"}),e[0]=t,e[1]=s):s=e[1];let c;e[2]===Symbol.for("react.memo_cache_sentinel")?(c={text:"New file"},e[2]=c):c=e[2];let r;e[3]===Symbol.for("react.memo_cache_sentinel")?(r=[c,A.Divider,{text:"Copy link"},{text:"Edit file"},{text:"Delete file",variant:"danger"}],e[3]=r):r=e[3];let a;e[4]!==t?(a=n.jsx(S,{renderAnchor:null,anchorRef:i,open:t,setOpen:o,items:r}),e[4]=t,e[5]=a):a=e[5];let l;return e[6]!==s||e[7]!==a?(l=n.jsxs(n.Fragment,{children:[s,a]}),e[6]=s,e[7]=a,e[8]=l):l=e[8],l}const ve=e=>{const t=g.c(10);let o,i,s;t[0]!==e?({onClick:o,children:i,...s}=e,t[0]=e,t[1]=o,t[2]=i,t[3]=s):(o=t[1],i=t[2],s=t[3]);let c;t[4]!==o?(c=l=>{l.detail===2&&l.preventDefault(),o?.(l)},t[4]=o,t[5]=c):c=t[5];const r=c;let a;return t[6]!==i||t[7]!==r||t[8]!==s?(a=n.jsx(M,{trailingAction:ie,onClick:r,...s,children:i}),t[6]=i,t[7]=r,t[8]=s,t[9]=a):a=t[9],a};function T(){const e=g.c(2);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=n.jsx("h1",{children:"Actions"}),e[0]=t):t=e[0];let o;return e[1]===Symbol.for("react.memo_cache_sentinel")?(o=n.jsxs(n.Fragment,{children:[t,n.jsx(k,{children:n.jsx(S,{renderAnchor:ve,anchorContent:n.jsx(N,{}),items:[{leadingVisual:N,text:"Open current Codespace",description:"Your existing Codespace will be opened to its previous state, and you'll be asked to manually switch to new-branch.",descriptionVariant:"block",trailingText:"⌘O"},{leadingVisual:K,text:"Create new Codespace",description:"Create a brand new Codespace with a fresh image and checkout this branch.",descriptionVariant:"block",trailingText:"⌘C"}]})})]}),e[1]=o):o=e[1],o}T.storyName="ActionMenu with double-clickable anchor";O.__docgenInfo={description:"",methods:[],displayName:"ActionsStory"};_.__docgenInfo={description:"",methods:[],displayName:"SimpleListStory"};j.__docgenInfo={description:"",methods:[],displayName:"ExternalOpenState"};E.__docgenInfo={description:"",methods:[],displayName:"ComplexListStory"};L.__docgenInfo={description:"",methods:[],displayName:"CustomTrigger"};V.__docgenInfo={description:"",methods:[],displayName:"ActionMenuWithExternalAnchor"};T.__docgenInfo={description:"",methods:[],displayName:"ActionMenuWithDoubleClickStory"};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`function ActionsStory(): JSX.Element {
  const [option, setOption] = useState('Select an option');
  const onAction = (itemProps: ItemProps) => {
    setOption(itemProps.text ?? '');
  };
  return <>
      <h1>Actions</h1>
      <h2>Last option activated: {option}</h2>
      <ErsatzOverlay>
        <ActionMenu onAction={onAction} anchorContent={<ServerIcon />} items={[{
        leadingVisual: ServerIcon,
        text: 'Open current Codespace',
        description: "Your existing Codespace will be opened to its previous state, and you'll be asked to manually switch to new-branch.",
        descriptionVariant: 'block',
        trailingText: '⌘O'
      }, {
        leadingVisual: PlusCircleIcon,
        text: 'Create new Codespace',
        description: 'Create a brand new Codespace with a fresh image and checkout this branch.',
        descriptionVariant: 'block',
        trailingText: '⌘C'
      }]} />
      </ErsatzOverlay>
    </>;
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`function SimpleListStory(): JSX.Element {
  const [option, setOption] = useState('Select an option');
  const onAction = (itemProps: ItemProps) => {
    setOption(itemProps.text || '');
  };
  return <>
      <h1>Simple List</h1>
      <h2>Last option activated: {option}</h2>
      <ErsatzOverlay>
        <ActionMenu onAction={onAction} anchorContent="Menu" overlayProps={{
        'data-test-id': 'some_test_id'
      }} items={[{
        text: 'New file',
        trailingText: '⌘O',
        disabled: true,
        leadingVisual: ProjectIcon
      }, ActionList.Divider, {
        text: 'Copy link',
        trailingText: 'ctrl+C'
      }, {
        text: 'Edit file',
        trailingText: '⌘E'
      }, {
        text: 'Delete file',
        variant: 'danger',
        trailingText: '⌘D'
      }]} />
      </ErsatzOverlay>
    </>;
}`,..._.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`function ExternalOpenState(): JSX.Element {
  const [option, setOption] = useState('Select an option');
  const [open, setOpen] = useState(false);
  const onAction = (itemProps: ItemProps) => {
    setOption(itemProps.text as string);
  };
  return <>
      <h1>Simple List</h1>
      <h2>Last option activated: {option}</h2>
      <h2>External Open State: {open ? 'Open' : 'Closed'}</h2>
      <div>
        <Button onClick={() => setOpen(!open)}>Toggle External State</Button>
      </div>
      <br />
      <ErsatzOverlay>
        <ActionMenu onAction={onAction} anchorContent="Menu" open={open} setOpen={setOpen} items={[{
        text: 'New file',
        trailingText: '⌘O',
        disabled: true,
        leadingVisual: ProjectIcon
      }, ActionList.Divider, {
        text: 'Copy link',
        trailingText: 'ctrl+C'
      }, {
        text: 'Edit file',
        trailingText: '⌘E'
      }, {
        text: 'Delete file',
        variant: 'danger',
        trailingVisual: '⌘D'
      }]} />
      </ErsatzOverlay>
    </>;
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`function ComplexListStory(): JSX.Element {
  const [option, setOption] = useState('Select an option');
  const onAction = (itemProps: ItemProps) => {
    setOption(itemProps.text || '');
  };
  return <>
      <h1>Complex List</h1>
      <h2>Last option activated: {option}</h2>
      <ErsatzOverlay>
        <ActionMenu onAction={onAction} anchorContent="Menu" groupMetadata={[{
        groupId: '0'
      }, {
        groupId: '1',
        header: {
          title: 'Live query',
          variant: 'subtle'
        }
      }, {
        groupId: '2',
        header: {
          title: 'Layout',
          variant: 'subtle'
        }
      }, {
        groupId: '3',
        renderItem: props => <ActionList.Item style={{
          fontWeight: 'bold'
        }} {...props} />
      }, {
        groupId: '4'
      }]} items={[{
        leadingVisual: TypographyIcon,
        text: 'Rename',
        groupId: '0'
      }, {
        leadingVisual: VersionsIcon,
        text: 'Duplicate',
        groupId: '0'
      }, {
        leadingVisual: SearchIcon,
        text: 'repo:github/github',
        groupId: '1',
        renderItem: props => <ActionList.Item style={{
          color: 'rebeccapurple'
        }} {...props} />,
        trailingVisual: <>
                  ⌘S
                  <ArrowRightIcon />
                </>
      }, {
        leadingVisual: SearchIcon,
        text: 'repo:github/github',
        groupId: '1',
        renderItem: props => <ActionList.Item style={{
          color: 'rebeccapurple'
        }} {...props} />,
        trailingText: '⌘S',
        // backward compatible
        trailingVisual: ArrowRightIcon // backward compatible
      }, {
        leadingVisual: NoteIcon,
        text: 'Table',
        description: 'Information-dense table optimized for operations across teams',
        descriptionVariant: 'block',
        groupId: '2'
      }, {
        leadingVisual: ProjectIcon,
        text: 'Board',
        description: 'Kanban-style board focused on visual states',
        descriptionVariant: 'block',
        groupId: '2'
      }, {
        leadingVisual: FilterIcon,
        text: 'Save sort and filters to current view',
        groupId: '3'
      }, {
        leadingVisual: FilterIcon,
        text: 'Save sort and filters to new view',
        groupId: '3'
      }, {
        leadingVisual: GearIcon,
        text: 'View settings',
        groupId: '4'
      }]} />
      </ErsatzOverlay>
    </>;
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`function CustomTrigger(): JSX.Element {
  const customAnchor = (props: ButtonProps) => <Button {...props} sx={{
    cursor: 'pointer'
  }} />;
  const [option, setOption] = useState('Select an option');
  const onAction = useCallback((itemProps: ItemProps) => {
    setOption(itemProps.text || '');
  }, []);
  return <>
      <h1>Custom Trigger</h1>
      <h2>Last option activated: {option}</h2>
      <ErsatzOverlay>
        <ActionMenu onAction={onAction} anchorContent="Menu" renderAnchor={customAnchor} items={[{
        text: 'New file'
      }, ActionList.Divider, {
        text: 'Copy link'
      }, {
        text: 'Edit file'
      }, {
        text: 'Delete file',
        variant: 'danger'
      }]} />
      </ErsatzOverlay>
    </>;
}`,...L.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`function ActionMenuWithExternalAnchor(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <>
      <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Open Menu
      </Button>
      <ActionMenu renderAnchor={null} anchorRef={buttonRef} open={isOpen} setOpen={setIsOpen} items={[{
      text: 'New file'
    }, ActionList.Divider, {
      text: 'Copy link'
    }, {
      text: 'Edit file'
    }, {
      text: 'Delete file',
      variant: 'danger'
    }]} />
    </>;
}`,...V.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`function ActionMenuWithDoubleClickStory(): JSX.Element {
  return <>
      <h1>Actions</h1>
      <ErsatzOverlay>
        <ActionMenu renderAnchor={DoubleClickableAnchor} anchorContent={<ServerIcon />} items={[{
        leadingVisual: ServerIcon,
        text: 'Open current Codespace',
        description: "Your existing Codespace will be opened to its previous state, and you'll be asked to manually switch to new-branch.",
        descriptionVariant: 'block',
        trailingText: '⌘O'
      }, {
        leadingVisual: PlusCircleIcon,
        text: 'Create new Codespace',
        description: 'Create a brand new Codespace with a fresh image and checkout this branch.',
        descriptionVariant: 'block',
        trailingText: '⌘C'
      }]} />
      </ErsatzOverlay>
    </>;
}`,...T.parameters?.docs?.source}}};const ft=["ActionsStory","SimpleListStory","ExternalOpenState","ComplexListStory","CustomTrigger","ActionMenuWithExternalAnchor","ActionMenuWithDoubleClickStory"];export{T as ActionMenuWithDoubleClickStory,V as ActionMenuWithExternalAnchor,O as ActionsStory,E as ComplexListStory,L as CustomTrigger,j as ExternalOpenState,_ as SimpleListStory,ft as __namedExportsOrder,ht as default};
