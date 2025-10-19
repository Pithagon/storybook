import{d as h,j as r,r as f}from"./iframe-Cfz2vXeE.js";import{r as R}from"./Portal-BKCn1yDJ.js";import{Playground as H}from"./AnchoredOverlay.stories-DMNFtNzk.js";import{z as $,D as M}from"./index.esm-C1WN7kEu.js";import{S as g}from"./Stack--yR6jd9X.js";import{A as v}from"./AnchoredOverlay-DQ90Zw6u.js";import{F as k}from"./focus-zone-ZDpdvBtN.js";import{B as m}from"./Button-3sCteC9V.js";import{H as U}from"./Heading-Axc3-HQM.js";import{A as T}from"./Avatar-Oyvcp9WV.js";import{L as E}from"./Link-Dm7wEaum.js";import{O as I}from"./Octicon-B0A15aaM.js";import"./preload-helper-D9Z9MdNV.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./Text-BbpDCwQY.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useFocusTrap-CL_Yl_fl.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./event-listener-signal-Pp6mWBoo.js";import"./useFocusZone-BvuuCBlY.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./anchored-position-Cz4CQZsC.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./Overlay-Du2pzphD.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./useFeatureFlag-paATTdb3.js";const L="prc-AnchoredOverlay-HeaderAndLayout-h0Em8",D="prc-AnchoredOverlay-ScrollingRegion-CMO2-",z="prc-AnchoredOverlay-PortalRootRegion-mGQQz",K="prc-AnchoredOverlay-FlexColFill-2vogD",J="prc-AnchoredOverlay-PlaygroundCell-AIC4E",Q="prc-AnchoredOverlay-Overlay-JDK9Y",V="prc-AnchoredOverlay-UserName-bQLP9",W="prc-AnchoredOverlay-UserMeta-iAFws",G="prc-AnchoredOverlay-Bio-O2221",Y="prc-AnchoredOverlay-MetaMuted-K6lux",d={HeaderAndLayout:L,ScrollingRegion:D,PortalRootRegion:z,FlexColFill:K,PlaygroundCell:J,Overlay:Q,UserName:V,UserMeta:W,Bio:G,MetaMuted:Y},lr={title:"Components/AnchoredOverlay/Features",component:v},O=r.jsxs(g,{gap:"condensed",style:{padding:"16px"},children:[r.jsxs(g,{direction:"horizontal",gap:"condensed",justify:"space-between",children:[r.jsx(T,{src:"https://avatars.githubusercontent.com/u/7143434?v=4",size:48}),r.jsx(m,{size:"small",children:"Follow"})]}),r.jsxs(g,{direction:"horizontal",gap:"none",children:[r.jsx("span",{className:d.UserName,children:"monalisa"}),r.jsx("span",{className:d.UserMeta,children:r.jsx(E,{inline:!0,muted:!0,href:"#",children:"Monalisa Octocat"})})]}),r.jsx("span",{className:d.Bio,children:"Former beach cat and champion swimmer. Now your friendly octopus with a normal face."}),r.jsxs(g,{direction:"horizontal",gap:"none",children:[r.jsx(I,{color:"var(--fgColor-muted)",icon:$}),r.jsx("span",{className:d.MetaMuted,children:"Interwebs"})]}),r.jsxs(g,{direction:"horizontal",gap:"none",children:[r.jsx(I,{color:"var(--fgColor-muted)",icon:M}),r.jsx("span",{className:d.MetaMuted,children:"Owns this repository"})]})]}),q=e=>{const o=h.c(6),{children:i}=e,s=f.useRef(null);let n,t;o[0]===Symbol.for("react.memo_cache_sentinel")?(n=()=>{s.current&&R(s.current,"scrollingPortal")},t=[s],o[0]=n,o[1]=t):(n=o[0],t=o[1]),f.useEffect(n,t);let a;o[2]===Symbol.for("react.memo_cache_sentinel")?(a=r.jsx(U,{children:"Header or some such"}),o[2]=a):a=o[2];let l;o[3]===Symbol.for("react.memo_cache_sentinel")?(l=r.jsx("div",{ref:s,className:d.PortalRootRegion}),o[3]=l):l=o[3];let c;return o[4]!==i?(c=r.jsxs("div",{className:d.HeaderAndLayout,children:[a,r.jsxs("div",{className:d.ScrollingRegion,children:[i,l]})]}),o[4]=i,o[5]=c):c=o[5],c},_=e=>{const o=h.c(4);let i;o[0]!==e?(i=Array(20).fill(null).map((n,t)=>r.jsx("tr",{children:Array(10).fill(null).map((a,l)=>r.jsx("td",{children:r.jsx("div",{className:d.PlaygroundCell,children:r.jsx(H,{...e,portalContainerName:"scrollingPortal"})})},`${t}${l}`))},t)),o[0]=e,o[1]=i):i=o[1];let s;return o[2]!==i?(s=r.jsx(q,{children:r.jsx("table",{children:r.jsx("tbody",{children:i})})}),o[2]=i,o[3]=s):s=o[3],s},x=()=>{const e=h.c(7),[o,i]=f.useState(!1);let s,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>i(!0),n=()=>i(!1),e[0]=s,e[1]=n):(s=e[0],n=e[1]);let t,a;e[2]===Symbol.for("react.memo_cache_sentinel")?(t={role:"dialog","aria-modal":!0,"aria-label":"User Card Overlay",className:d.Overlay},a={disabled:!0},e[2]=t,e[3]=a):(t=e[2],a=e[3]);let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=r.jsx("div",{className:d.FlexColFill,children:O}),e[4]=l):l=e[4];let c;return e[5]!==o?(c=r.jsx(v,{open:o,onOpen:s,onClose:n,renderAnchor:X,anchorId:"my-custom-anchor-id",overlayProps:t,focusZoneSettings:a,preventOverflow:!1,children:l}),e[5]=o,e[6]=c):c=e[6],c},S=()=>{const e=h.c(7),[o,i]=f.useState(!1);let s,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>i(!0),n=()=>i(!1),e[0]=s,e[1]=n):(s=e[0],n=e[1]);let t,a;e[2]===Symbol.for("react.memo_cache_sentinel")?(t={role:"dialog","aria-modal":!0,"aria-label":"User Card Overlay",className:d.Overlay},a={disabled:!0},e[2]=t,e[3]=a):(t=e[2],a=e[3]);let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=r.jsx("div",{className:d.FlexColFill,children:O}),e[4]=l):l=e[4];let c;return e[5]!==o?(c=r.jsx(v,{open:o,onOpen:s,onClose:n,renderAnchor:ee,height:"large",overlayProps:t,focusZoneSettings:a,preventOverflow:!1,children:l}),e[5]=o,e[6]=c):c=e[6],c},b=()=>{const e=h.c(7),[o,i]=f.useState(!1);let s,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>i(!0),n=()=>i(!1),e[0]=s,e[1]=n):(s=e[0],n=e[1]);let t,a;e[2]===Symbol.for("react.memo_cache_sentinel")?(t={role:"dialog","aria-modal":!0,"aria-label":"User Card Overlay",className:d.Overlay},a={disabled:!0},e[2]=t,e[3]=a):(t=e[2],a=e[3]);let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=r.jsx("div",{className:d.FlexColFill,children:O}),e[4]=l):l=e[4];let c;return e[5]!==o?(c=r.jsx(v,{open:o,onOpen:s,onClose:n,renderAnchor:re,width:"large",overlayProps:t,focusZoneSettings:a,preventOverflow:!1,children:l}),e[5]=o,e[6]=c):c=e[6],c},A=()=>{const e=h.c(7),[o,i]=f.useState(!1);let s,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>i(!0),n=()=>i(!1),e[0]=s,e[1]=n):(s=e[0],n=e[1]);let t,a;e[2]===Symbol.for("react.memo_cache_sentinel")?(t={role:"dialog","aria-modal":!0,"aria-label":"User Card Overlay",className:d.Overlay},a={disabled:!0},e[2]=t,e[3]=a):(t=e[2],a=e[3]);let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=r.jsx("div",{className:d.FlexColFill,children:O}),e[4]=l):l=e[4];let c;return e[5]!==o?(c=r.jsx(v,{open:o,onOpen:s,onClose:n,renderAnchor:oe,align:"center",overlayProps:t,focusZoneSettings:a,preventOverflow:!1,children:l}),e[5]=o,e[6]=c):c=e[6],c},C=()=>{const e=h.c(7),[o,i]=f.useState(!1);let s,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>i(!0),n=()=>i(!1),e[0]=s,e[1]=n):(s=e[0],n=e[1]);let t,a;e[2]===Symbol.for("react.memo_cache_sentinel")?(t={role:"dialog","aria-modal":!0,"aria-label":"User Card Overlay",className:d.Overlay},a={disabled:!0},e[2]=t,e[3]=a):(t=e[2],a=e[3]);let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=r.jsx("div",{className:d.FlexColFill,children:O}),e[4]=l):l=e[4];let c;return e[5]!==o?(c=r.jsx(v,{open:o,onOpen:s,onClose:n,renderAnchor:se,side:"outside-right",overlayProps:t,focusZoneSettings:a,preventOverflow:!1,children:l}),e[5]=o,e[6]=c):c=e[6],c},F=()=>{const e=h.c(7),[o,i]=f.useState(!1);let s,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>i(!0),n=()=>i(!1),e[0]=s,e[1]=n):(s=e[0],n=e[1]);let t,a;e[2]===Symbol.for("react.memo_cache_sentinel")?(t={role:"dialog","aria-modal":!0,"aria-label":"User Card Overlay",className:d.Overlay},a={disabled:!0},e[2]=t,e[3]=a):(t=e[2],a=e[3]);let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=r.jsx("div",{className:d.FlexColFill,children:O}),e[4]=l):l=e[4];let c;return e[5]!==o?(c=r.jsx(v,{open:o,onOpen:s,onClose:n,renderAnchor:te,anchorOffset:100,overlayProps:t,focusZoneSettings:a,preventOverflow:!1,children:l}),e[5]=o,e[6]=c):c=e[6],c},j=()=>{const e=h.c(7),[o,i]=f.useState(!1);let s,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>i(!0),n=()=>i(!1),e[0]=s,e[1]=n):(s=e[0],n=e[1]);let t,a;e[2]===Symbol.for("react.memo_cache_sentinel")?(t={role:"dialog","aria-modal":!0,"aria-label":"User Card Overlay",className:d.Overlay},a={disabled:!0},e[2]=t,e[3]=a):(t=e[2],a=e[3]);let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=r.jsx("div",{className:d.FlexColFill,children:O}),e[4]=l):l=e[4];let c;return e[5]!==o?(c=r.jsx(v,{open:o,onOpen:s,onClose:n,renderAnchor:le,alignmentOffset:100,overlayProps:t,focusZoneSettings:a,preventOverflow:!1,children:l}),e[5]=o,e[6]=c):c=e[6],c},N=()=>{const e=h.c(9),o=f.useRef(null),[i,s]=f.useState(!1);let n,t;e[0]===Symbol.for("react.memo_cache_sentinel")?(n=()=>s(!0),t=()=>s(!1),e[0]=n,e[1]=t):(n=e[0],t=e[1]);let a,l,c;e[2]===Symbol.for("react.memo_cache_sentinel")?(a={initialFocusRef:o},l={role:"dialog","aria-modal":!0,"aria-label":"Focus Trap Demo Overlay",className:d.Overlay},c={disabled:!0},e[2]=a,e[3]=l,e[4]=c):(a=e[2],l=e[3],c=e[4]);let p,u;e[5]===Symbol.for("react.memo_cache_sentinel")?(p=r.jsx(m,{children:"First button"}),u=r.jsx(m,{ref:o,children:"Initial focus"}),e[5]=p,e[6]=u):(p=e[5],u=e[6]);let y;return e[7]!==i?(y=r.jsxs(v,{open:i,onOpen:n,onClose:t,renderAnchor:ne,focusTrapSettings:a,overlayProps:l,focusZoneSettings:c,preventOverflow:!1,children:[p,u]}),e[7]=i,e[8]=y):y=e[8],y},w=()=>{const e=h.c(11),[o,i]=f.useState(!1);let s,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>i(!0),n=()=>i(!1),e[0]=s,e[1]=n):(s=e[0],n=e[1]);let t,a;e[2]===Symbol.for("react.memo_cache_sentinel")?(t={bindKeys:k.JK},a={role:"dialog","aria-modal":!0,"aria-label":"Focus Zone Demo Overlay",className:d.Overlay},e[2]=t,e[3]=a):(t=e[2],a=e[3]);let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=r.jsx("kbd",{children:"J"}),e[4]=l):l=e[4];let c,p,u,y;e[5]===Symbol.for("react.memo_cache_sentinel")?(c=r.jsxs("p",{children:["Use ",l," and ",r.jsx("kbd",{children:"K"})," keys to move focus."]}),p=r.jsx(m,{children:"First"}),u=r.jsx(m,{children:"Second"}),y=r.jsx(m,{children:"Third"}),e[5]=c,e[6]=p,e[7]=u,e[8]=y):(c=e[5],p=e[6],u=e[7],y=e[8]);let Z;return e[9]!==o?(Z=r.jsxs(v,{open:o,onOpen:s,onClose:n,renderAnchor:ae,focusZoneSettings:t,overlayProps:a,preventOverflow:!1,children:[c,p,u,y]}),e[9]=o,e[10]=Z):Z=e[10],Z},B=()=>{const e=h.c(9),[o,i]=f.useState(!1);let s,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>i(!0),n=()=>i(!1),e[0]=s,e[1]=n):(s=e[0],n=e[1]);let t,a;e[2]===Symbol.for("react.memo_cache_sentinel")?(t={overflow:"auto",maxHeight:"xsmall",role:"dialog","aria-modal":!0,"aria-label":"User Card Overlay",className:d.Overlay},a={disabled:!0},e[2]=t,e[3]=a):(t=e[2],a=e[3]);let l,c,p;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=r.jsx("div",{children:"Overlay props have been overridden to set: "}),c=r.jsxs("pre",{children:[r.jsx("li",{children:"overflow: `auto`"}),r.jsx("li",{children:"maxHeight: `xsmall`"})]}),p=r.jsx("div",{className:d.FlexColFill,children:O}),e[4]=l,e[5]=c,e[6]=p):(l=e[4],c=e[5],p=e[6]);let u;return e[7]!==o?(u=r.jsxs(v,{open:o,onOpen:s,onClose:n,renderAnchor:ce,overlayProps:t,focusZoneSettings:a,preventOverflow:!1,children:[l,c,p]}),e[7]=o,e[8]=u):u=e[8],u},P=()=>{const e=h.c(8),[o,i]=f.useState(!1);let s,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>i(!0),n=()=>i(!1),e[0]=s,e[1]=n):(s=e[0],n=e[1]);let t,a,l;e[2]===Symbol.for("react.memo_cache_sentinel")?(t={narrow:"fullscreen",regular:"anchored"},a={role:"dialog","aria-modal":!0,"aria-label":"Fullscreen Overlay Demo",className:d.Overlay,overflow:"auto"},l={disabled:!0},e[2]=t,e[3]=a,e[4]=l):(t=e[2],a=e[3],l=e[4]);let c;e[5]===Symbol.for("react.memo_cache_sentinel")?(c=r.jsx("div",{className:d.FlexColFill,children:r.jsxs(g,{gap:"normal",style:{padding:"16px"},children:[r.jsx(U,{children:"Fullscreen Overlay Demo"}),r.jsx("div",{children:"This overlay will appear fullscreen on narrow viewports (less than 768px) and as a regular anchored overlay on wider screens."}),r.jsx("div",{children:"Try resizing your browser window to see the responsive behavior in action. The overlay includes a close button when in fullscreen mode."}),O]})}),e[5]=c):c=e[5];let p;return e[6]!==o?(p=r.jsx(v,{open:o,onOpen:s,onClose:n,renderAnchor:ie,variant:t,overlayProps:a,focusZoneSettings:l,preventOverflow:!1,width:"large",children:c}),e[6]=o,e[7]=p):p=e[7],p};_.__docgenInfo={description:"",methods:[],displayName:"PortalInsideScrollingElement"};x.__docgenInfo={description:"",methods:[],displayName:"CustomAnchorId"};S.__docgenInfo={description:"",methods:[],displayName:"Height"};b.__docgenInfo={description:"",methods:[],displayName:"Width"};A.__docgenInfo={description:"",methods:[],displayName:"AnchorAlignment"};C.__docgenInfo={description:"",methods:[],displayName:"AnchorSide"};F.__docgenInfo={description:"",methods:[],displayName:"OffsetPositionFromAnchor"};j.__docgenInfo={description:"",methods:[],displayName:"OffsetAlignmentFromAnchor"};N.__docgenInfo={description:"",methods:[],displayName:"FocusTrapOverrides"};w.__docgenInfo={description:"",methods:[],displayName:"FocusZoneOverrides"};B.__docgenInfo={description:"",methods:[],displayName:"OverlayPropsOverrides"};P.__docgenInfo={description:"",methods:[],displayName:"FullscreenVariant"};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`(args: Args) => {
  const rows = 20;
  const columns = 10;
  return <HeaderAndLayout>
      <table>
        <tbody>
          {Array(rows).fill(null).map((_, i) => <tr key={i}>
                {Array(columns).fill(null).map((_1, j) => <td key={\`\${i}\${j}\`}>
                      <div className={classes.PlaygroundCell}>
                        <Playground {...{
                ...args,
                portalContainerName: 'scrollingPortal'
              }} />
                      </div>
                    </td>)}
              </tr>)}
        </tbody>
      </table>
    </HeaderAndLayout>;
}`,..._.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <AnchoredOverlay open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} renderAnchor={props => <Button {...props}>Button</Button>} anchorId="my-custom-anchor-id" overlayProps={{
    role: 'dialog',
    'aria-modal': true,
    'aria-label': 'User Card Overlay',
    className: classes.Overlay
  }} focusZoneSettings={{
    disabled: true
  }} preventOverflow={false}>
      <div className={classes.FlexColFill}>{hoverCard}</div>
    </AnchoredOverlay>;
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <AnchoredOverlay open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} renderAnchor={props => <Button {...props}>Button</Button>} height="large" overlayProps={{
    role: 'dialog',
    'aria-modal': true,
    'aria-label': 'User Card Overlay',
    className: classes.Overlay
  }} focusZoneSettings={{
    disabled: true
  }} preventOverflow={false}>
      <div className={classes.FlexColFill}>{hoverCard}</div>
    </AnchoredOverlay>;
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <AnchoredOverlay open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} renderAnchor={props => <Button {...props}>Button</Button>} width="large" overlayProps={{
    role: 'dialog',
    'aria-modal': true,
    'aria-label': 'User Card Overlay',
    className: classes.Overlay
  }} focusZoneSettings={{
    disabled: true
  }} preventOverflow={false}>
      <div className={classes.FlexColFill}>{hoverCard}</div>
    </AnchoredOverlay>;
}`,...b.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <AnchoredOverlay open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} renderAnchor={props => <Button {...props} block>
          Button
        </Button>} align="center" overlayProps={{
    role: 'dialog',
    'aria-modal': true,
    'aria-label': 'User Card Overlay',
    className: classes.Overlay
  }} focusZoneSettings={{
    disabled: true
  }} preventOverflow={false}>
      <div className={classes.FlexColFill}>{hoverCard}</div>
    </AnchoredOverlay>;
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <AnchoredOverlay open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} renderAnchor={props => <Button {...props}>Button</Button>} side="outside-right" overlayProps={{
    role: 'dialog',
    'aria-modal': true,
    'aria-label': 'User Card Overlay',
    className: classes.Overlay
  }} focusZoneSettings={{
    disabled: true
  }} preventOverflow={false}>
      <div className={classes.FlexColFill}>{hoverCard}</div>
    </AnchoredOverlay>;
}`,...C.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <AnchoredOverlay open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} renderAnchor={props => <Button {...props}>Button</Button>} anchorOffset={100} overlayProps={{
    role: 'dialog',
    'aria-modal': true,
    'aria-label': 'User Card Overlay',
    className: classes.Overlay
  }} focusZoneSettings={{
    disabled: true
  }} preventOverflow={false}>
      <div className={classes.FlexColFill}>{hoverCard}</div>
    </AnchoredOverlay>;
}`,...F.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <AnchoredOverlay open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} renderAnchor={props => <Button {...props}>Button</Button>} alignmentOffset={100} overlayProps={{
    role: 'dialog',
    'aria-modal': true,
    'aria-label': 'User Card Overlay',
    className: classes.Overlay
  }} focusZoneSettings={{
    disabled: true
  }} preventOverflow={false}>
      <div className={classes.FlexColFill}>{hoverCard}</div>
    </AnchoredOverlay>;
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const initialFocusRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  return <AnchoredOverlay open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} renderAnchor={props => <Button {...props}>Button</Button>} focusTrapSettings={{
    initialFocusRef
  }} overlayProps={{
    role: 'dialog',
    'aria-modal': true,
    'aria-label': 'Focus Trap Demo Overlay',
    className: classes.Overlay
  }} focusZoneSettings={{
    disabled: true
  }} preventOverflow={false}>
      <Button>First button</Button>
      <Button ref={initialFocusRef}>Initial focus</Button>
    </AnchoredOverlay>;
}`,...N.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <AnchoredOverlay open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} renderAnchor={props => <Button {...props}>Button</Button>} focusZoneSettings={{
    bindKeys: FocusKeys.JK
  }} overlayProps={{
    role: 'dialog',
    'aria-modal': true,
    'aria-label': 'Focus Zone Demo Overlay',
    className: classes.Overlay
  }} preventOverflow={false}>
      <p>
        Use <kbd>J</kbd> and <kbd>K</kbd> keys to move focus.
      </p>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </AnchoredOverlay>;
}`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <AnchoredOverlay open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} renderAnchor={props => <Button {...props}>Button</Button>} overlayProps={{
    overflow: 'auto',
    maxHeight: 'xsmall',
    role: 'dialog',
    'aria-modal': true,
    'aria-label': 'User Card Overlay',
    className: classes.Overlay
  }} focusZoneSettings={{
    disabled: true
  }} preventOverflow={false}>
      <div>Overlay props have been overridden to set: </div>
      <pre>
        <li>overflow: \`auto\`</li>
        <li>maxHeight: \`xsmall\`</li>
      </pre>
      <div className={classes.FlexColFill}>{hoverCard}</div>
    </AnchoredOverlay>;
}`,...B.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <AnchoredOverlay open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} renderAnchor={props => <Button {...props}>Open Fullscreen on Narrow</Button>} variant={{
    narrow: 'fullscreen',
    regular: 'anchored'
  }} overlayProps={{
    role: 'dialog',
    'aria-modal': true,
    'aria-label': 'Fullscreen Overlay Demo',
    className: classes.Overlay,
    overflow: 'auto'
  }} focusZoneSettings={{
    disabled: true
  }} preventOverflow={false} width="large">
      <div className={classes.FlexColFill}>
        <Stack gap="normal" style={{
        padding: '16px'
      }}>
          <Heading>Fullscreen Overlay Demo</Heading>
          <div>
            This overlay will appear fullscreen on narrow viewports (less than 768px) and as a regular anchored overlay
            on wider screens.
          </div>
          <div>
            Try resizing your browser window to see the responsive behavior in action. The overlay includes a close
            button when in fullscreen mode.
          </div>
          {hoverCard}
        </Stack>
      </div>
    </AnchoredOverlay>;
}`,...P.parameters?.docs?.source}}};function X(e){return r.jsx(m,{...e,children:"Button"})}function ee(e){return r.jsx(m,{...e,children:"Button"})}function re(e){return r.jsx(m,{...e,children:"Button"})}function oe(e){return r.jsx(m,{...e,block:!0,children:"Button"})}function se(e){return r.jsx(m,{...e,children:"Button"})}function te(e){return r.jsx(m,{...e,children:"Button"})}function le(e){return r.jsx(m,{...e,children:"Button"})}function ne(e){return r.jsx(m,{...e,children:"Button"})}function ae(e){return r.jsx(m,{...e,children:"Button"})}function ce(e){return r.jsx(m,{...e,children:"Button"})}function ie(e){return r.jsx(m,{...e,children:"Open Fullscreen on Narrow"})}const nr=["PortalInsideScrollingElement","CustomAnchorId","Height","Width","AnchorAlignment","AnchorSide","OffsetPositionFromAnchor","OffsetAlignmentFromAnchor","FocusTrapOverrides","FocusZoneOverrides","OverlayPropsOverrides","FullscreenVariant"];export{A as AnchorAlignment,C as AnchorSide,x as CustomAnchorId,N as FocusTrapOverrides,w as FocusZoneOverrides,P as FullscreenVariant,S as Height,j as OffsetAlignmentFromAnchor,F as OffsetPositionFromAnchor,B as OverlayPropsOverrides,_ as PortalInsideScrollingElement,b as Width,nr as __namedExportsOrder,lr as default};
