import{d as u,r as c,j as t}from"./iframe-Cfz2vXeE.js";import{B as f}from"./index-CEFMyGLK.js";import{D as l}from"./Dialog-BTwkcDPx.js";import{T as g}from"./Text-BbpDCwQY.js";import{B as h}from"./Button-3sCteC9V.js";import"./preload-helper-D9Z9MdNV.js";import"./index.esm-C1WN7kEu.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./anchored-position-Cz4CQZsC.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./useMergedRefs-CMoMpGtu.js";const P={title:"Deprecated/Components/DialogV1",component:l},r=()=>{const e=u.c(6),[m,d]=c.useState(!1),p=c.useRef(null);let i;e[0]===Symbol.for("react.memo_cache_sentinel")?(i=t.jsx("div",{style:{marginBottom:"var(--stack-gap-normal)"},children:t.jsx(f,{title:"This component is deprecated",description:"We recommend using Dialog instead.",variant:"warning"})}),e[0]=i):i=e[0];let o;e[1]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsx(h,{"data-testid":"trigger-button",ref:p,onClick:()=>d(!0),children:"Show Dialog"}),e[1]=o):o=e[1];let s;e[2]===Symbol.for("react.memo_cache_sentinel")?(s=()=>d(!1),e[2]=s):s=e[2];let a;e[3]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsxs("div",{"data-testid":"inner",children:[t.jsx(l.Header,{id:"header",children:"Title"}),t.jsx("div",{style:{padding:"var(--stack-gap-normal)"},children:t.jsx(g,{children:"Some content"})})]}),e[3]=a):a=e[3];let n;return e[4]!==m?(n=t.jsxs("div",{children:[i,o,t.jsx(l,{returnFocusRef:p,isOpen:m,onDismiss:s,"aria-labelledby":"header",children:a})]}),e[4]=m,e[5]=n):n=e[5],n};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const returnFocusRef = useRef(null);
  return <div>
      <div style={{
      marginBottom: 'var(--stack-gap-normal)'
    }}>
        <Banner title="This component is deprecated" description="We recommend using Dialog instead." variant="warning" />
      </div>
      <Button data-testid="trigger-button" ref={returnFocusRef} onClick={() => setIsOpen(true)}>
        Show Dialog
      </Button>
      <Dialog returnFocusRef={returnFocusRef} isOpen={isOpen} onDismiss={() => setIsOpen(false)} aria-labelledby="header">
        <div data-testid="inner">
          <Dialog.Header id="header">Title</Dialog.Header>
          <div style={{
          padding: 'var(--stack-gap-normal)'
        }}>
            <Text>Some content</Text>
          </div>
        </div>
      </Dialog>
    </div>;
}`,...r.parameters?.docs?.source}}};const Q=["Default"];export{r as Default,Q as __namedExportsOrder,P as default};
