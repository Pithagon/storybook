import{d as v,r as C,j as o}from"./iframe-Cfz2vXeE.js";import{z as S,D as j}from"./index.esm-C1WN7kEu.js";import{S as p}from"./Stack--yR6jd9X.js";import{A as g}from"./AnchoredOverlay-DQ90Zw6u.js";import{A as b}from"./Avatar-Oyvcp9WV.js";import{B as x}from"./Button-3sCteC9V.js";import{T as d}from"./Text-BbpDCwQY.js";import{L as w}from"./Link-Dm7wEaum.js";import{O as y}from"./Octicon-B0A15aaM.js";import"./preload-helper-D9Z9MdNV.js";import"./useFocusTrap-CL_Yl_fl.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./event-listener-signal-Pp6mWBoo.js";import"./useFocusZone-BvuuCBlY.js";import"./focus-zone-ZDpdvBtN.js";import"./user-agent-DiCyFeS1.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./anchored-position-Cz4CQZsC.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./Overlay-Du2pzphD.js";import"./Portal-BKCn1yDJ.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./useFeatureFlag-paATTdb3.js";const M="prc-AnchoredOverlay-TextMutedWithMargin-eEcO-",A="prc-AnchoredOverlay-TextSmallMutedWithMargin-U2LED",f={TextMutedWithMargin:M,TextSmallMutedWithMargin:A},{action:O}=__STORYBOOK_MODULE_ACTIONS__,je={title:"Components/AnchoredOverlay",component:g},_=o.jsxs(p,{gap:"condensed",style:{padding:"16px"},children:[o.jsxs(p,{direction:"horizontal",gap:"condensed",justify:"space-between",children:[o.jsx(b,{src:"https://avatars.githubusercontent.com/u/7143434?v=4",size:48}),o.jsx(x,{size:"small",children:"Follow"})]}),o.jsxs(p,{direction:"horizontal",gap:"none",children:[o.jsx(d,{weight:"medium",children:"monalisa"}),o.jsx(d,{className:f.TextMutedWithMargin,children:o.jsx(w,{inline:!0,muted:!0,href:"#",children:"Monalisa Octocat"})})]}),o.jsx(d,{size:"medium",children:"Former beach cat and champion swimmer. Now your friendly octapus with a normal face."}),o.jsxs(p,{direction:"horizontal",gap:"none",children:[o.jsx(y,{color:"var(--fgColor-muted)",icon:S}),o.jsx(d,{className:f.TextSmallMutedWithMargin,children:"Interwebs"})]}),o.jsxs(p,{direction:"horizontal",gap:"none",children:[o.jsx(y,{color:"var(--fgColor-muted)",icon:j}),o.jsx(d,{className:f.TextSmallMutedWithMargin,children:"Owns this repository"})]})]}),c=()=>{const e=v.c(6),[t,m]=C.useState(!1);let s,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>m(!0),n=()=>m(!1),e[0]=s,e[1]=n):(s=e[0],n=e[1]);let i,a;e[2]===Symbol.for("react.memo_cache_sentinel")?(i={role:"dialog","aria-modal":!0,"aria-label":"User Card Overlay",style:{minWidth:"320px"}},a={disabled:!0},e[2]=i,e[3]=a):(i=e[2],a=e[3]);let r;return e[4]!==t?(r=o.jsx(g,{open:t,onOpen:s,onClose:n,renderAnchor:N,overlayProps:i,focusZoneSettings:a,preventOverflow:!1,children:_}),e[4]=t,e[5]=r):r=e[5],r},l=e=>{const t=v.c(12),[m,s]=C.useState(!1);let n,i;t[0]===Symbol.for("react.memo_cache_sentinel")?(n=()=>{s(!0),O("onOpen")()},i=()=>{s(!1),O("onClose")()},t[0]=n,t[1]=i):(n=t[0],i=t[1]);let a;t[2]===Symbol.for("react.memo_cache_sentinel")?(a={minWidth:"320px"},t[2]=a):a=t[2];let r;t[3]!==e.portalContainerName?(r={...e.portalContainerName,role:"dialog","aria-modal":!0,"aria-label":"User Card Overlay",style:a},t[3]=e.portalContainerName,t[4]=r):r=t[4];let h;t[5]===Symbol.for("react.memo_cache_sentinel")?(h={disabled:!0},t[5]=h):h=t[5];let u;return t[6]!==e.height||t[7]!==e.side||t[8]!==e.width||t[9]!==m||t[10]!==r?(u=o.jsx(g,{open:m,onOpen:n,onClose:i,width:e.width,height:e.height,renderAnchor:T,overlayProps:r,side:e.side,focusZoneSettings:h,preventOverflow:!1,children:_}),t[6]=e.height,t[7]=e.side,t[8]=e.width,t[9]=m,t[10]=r,t[11]=u):u=t[11],u};l.args={width:"auto",height:"auto",portalContainerName:"Portal name",side:"outside-bottom"};l.argTypes={width:{type:{name:"enum",value:["small","medium","large","xlarge","xxlarge","auto"]},portalContainerName:{type:"string"}},height:{type:{name:"enum",value:["xsmall","small","medium","large","xlarge","auto","initial"]},portalContainerName:{type:"string"}},side:{type:{name:"enum",value:["inside-top","inside-bottom","inside-left","inside-right","inside-center","outside-top","outside-bottom","outside-left","outside-right"]}},open:{control:!1}};c.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"Playground"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <AnchoredOverlay open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} renderAnchor={props => <Button {...props}>Button</Button>} overlayProps={{
    role: 'dialog',
    'aria-modal': true,
    'aria-label': 'User Card Overlay',
    style: {
      minWidth: '320px'
    }
  }} focusZoneSettings={{
    disabled: true
  }} preventOverflow={false}>
      {hoverCard}
    </AnchoredOverlay>;
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: Args) => {
  const [open, setOpen] = useState(false);
  return <AnchoredOverlay open={open} onOpen={() => {
    setOpen(true);
    action('onOpen')();
  }} onClose={() => {
    setOpen(false);
    action('onClose')();
  }} width={args.width} height={args.height} renderAnchor={props => <Button {...props}>Button</Button>} overlayProps={{
    ...args.portalContainerName,
    role: 'dialog',
    'aria-modal': true,
    'aria-label': 'User Card Overlay',
    style: {
      minWidth: '320px'
    }
  }} side={args.side} focusZoneSettings={{
    disabled: true
  }} preventOverflow={false}>
      {hoverCard}
    </AnchoredOverlay>;
}`,...l.parameters?.docs?.source}}};function N(e){return o.jsx(x,{...e,children:"Button"})}function T(e){return o.jsx(x,{...e,children:"Button"})}const be=["Default","Playground"];export{c as Default,l as Playground,be as __namedExportsOrder,je as default};
