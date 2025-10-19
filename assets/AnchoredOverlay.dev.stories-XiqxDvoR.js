import{d as x,r as g,R as v,j as t}from"./iframe-Cfz2vXeE.js";import{S as w}from"./index-D3vEWZM2.js";import{A as y}from"./AnchoredOverlay-DQ90Zw6u.js";import{S as j}from"./Spinner-CP1_WO7z.js";import{D as A}from"./Dialog-BYWFp9hz.js";import{B as S}from"./Button-3sCteC9V.js";import"./preload-helper-D9Z9MdNV.js";import"./Stack--yR6jd9X.js";import"./useFocusTrap-CL_Yl_fl.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./event-listener-signal-Pp6mWBoo.js";import"./useFocusZone-BvuuCBlY.js";import"./focus-zone-ZDpdvBtN.js";import"./user-agent-DiCyFeS1.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./defaultSxProp-CTX1ZhUd.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-C1WN7kEu.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./Overlay-Du2pzphD.js";import"./Portal-BKCn1yDJ.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./useFeatureFlag-paATTdb3.js";import"./ScrollableRegion-CKacTlaY.js";import"./useOverflow-CIpObA8I.js";const je={title:"Components/AnchoredOverlay/Dev",component:y},f=()=>{const e=x.c(12),[o,d]=g.useState(!1),[h,m]=g.useState(!0);let n,r;e[0]!==o?(n=()=>{window.setTimeout(()=>{o&&m(!1)},2e3)},r=[o],e[0]=o,e[1]=n,e[2]=r):(n=e[1],r=e[2]),v.useEffect(n,r);let s;e[3]===Symbol.for("react.memo_cache_sentinel")?(s={height:"calc(100vh - 200px)"},e[3]=s):s=e[3];let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=t.jsxs("div",{children:["What to expect:",t.jsxs("ul",{children:[t.jsx("li",{children:"The anchored overlay should open below the anchor (default position)"}),t.jsx("li",{children:"After 2000ms, the amount of content in the overlay grows"}),t.jsx("li",{children:"the overlay should reposition itself above the anchor so that it stays inside the window"})]})]}),e[4]=l):l=e[4];let a,c;e[5]===Symbol.for("react.memo_cache_sentinel")?(a=()=>d(!0),c=()=>{d(!1),m(!0)},e[5]=a,e[6]=c):(a=e[5],c=e[6]);let i;e[7]!==h?(i=h?t.jsxs(t.Fragment,{children:[t.jsx(j,{}),"loading for 2000ms"]}):t.jsx("div",{style:{height:"300px"},children:"content with 300px height"}),e[7]=h,e[8]=i):i=e[8];let p;return e[9]!==o||e[10]!==i?(p=t.jsxs(w,{direction:"vertical",justify:"space-between",style:s,children:[l,t.jsx(y,{renderAnchor:_,open:o,onOpen:a,onClose:c,children:i})]}),e[9]=o,e[10]=i,e[11]=p):p=e[11],p},u=()=>{const e=x.c(12),[o,d]=g.useState(!1),[h,m]=g.useState(!0);let n,r;e[0]!==o?(n=()=>{window.setTimeout(()=>{o&&m(!1)},2e3)},r=[o],e[0]=o,e[1]=n,e[2]=r):(n=e[1],r=e[2]),v.useEffect(n,r);let s;e[3]===Symbol.for("react.memo_cache_sentinel")?(s={height:"calc(100vh - 300px)"},e[3]=s):s=e[3];let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=t.jsxs("div",{children:["What to expect:",t.jsxs("ul",{children:[t.jsx("li",{children:"The anchored overlay should open below the anchor (default position)"}),t.jsx("li",{children:"After 2000ms, the amount of content in the overlay grows"}),t.jsx("li",{children:"the overlay should reposition itself above the anchor so that it stays inside the window"})]})]}),e[4]=l):l=e[4];let a,c;e[5]===Symbol.for("react.memo_cache_sentinel")?(a=()=>d(!0),c=()=>{d(!1),m(!0)},e[5]=a,e[6]=c):(a=e[5],c=e[6]);let i;e[7]!==h?(i=h?t.jsxs(t.Fragment,{children:[t.jsx(j,{}),"loading for 2000ms"]}):t.jsx("div",{style:{height:"300px"},children:"content with 300px height"}),e[7]=h,e[8]=i):i=e[8];let p;return e[9]!==o||e[10]!==i?(p=t.jsx(A,{onClose:O,children:t.jsxs(w,{direction:"vertical",justify:"space-between",style:s,children:[l,t.jsx(y,{renderAnchor:b,open:o,onOpen:a,onClose:c,children:i})]})}),e[9]=o,e[10]=i,e[11]=p):p=e[11],p};f.__docgenInfo={description:"",methods:[],displayName:"RepositionAfterContentGrows"};u.__docgenInfo={description:"",methods:[],displayName:"RepositionAfterContentGrowsWithinDialog"};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    window.setTimeout(() => {
      if (open) setLoading(false);
    }, 2000);
  }, [open]);
  return <Stack direction="vertical" justify="space-between" style={{
    height: 'calc(100vh - 200px)'
  }}>
      <div>
        What to expect:
        <ul>
          <li>The anchored overlay should open below the anchor (default position)</li>
          <li>After 2000ms, the amount of content in the overlay grows</li>
          <li>the overlay should reposition itself above the anchor so that it stays inside the window</li>
        </ul>
      </div>
      <AnchoredOverlay renderAnchor={props => <Button {...props} style={{
      width: 'fit-content'
    }}>
            Button
          </Button>} open={open} onOpen={() => setOpen(true)} onClose={() => {
      setOpen(false);
      setLoading(true);
    }}>
        {loading ? <>
            <Spinner />
            loading for 2000ms
          </> : <div style={{
        height: '300px'
      }}>content with 300px height</div>}
      </AnchoredOverlay>
    </Stack>;
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    window.setTimeout(() => {
      if (open) setLoading(false);
    }, 2000);
  }, [open]);
  return <Dialog onClose={() => {}}>
      <Stack direction="vertical" justify="space-between" style={{
      height: 'calc(100vh - 300px)'
    }}>
        <div>
          What to expect:
          <ul>
            <li>The anchored overlay should open below the anchor (default position)</li>
            <li>After 2000ms, the amount of content in the overlay grows</li>
            <li>the overlay should reposition itself above the anchor so that it stays inside the window</li>
          </ul>
        </div>
        <AnchoredOverlay renderAnchor={props => <Button {...props} style={{
        width: 'fit-content'
      }}>
              Button
            </Button>} open={open} onOpen={() => setOpen(true)} onClose={() => {
        setOpen(false);
        setLoading(true);
      }}>
          {loading ? <>
              <Spinner />
              loading for 2000ms
            </> : <div style={{
          height: '300px'
        }}>content with 300px height</div>}
        </AnchoredOverlay>
      </Stack>
    </Dialog>;
}`,...u.parameters?.docs?.source}}};function _(e){return t.jsx(S,{...e,style:{width:"fit-content"},children:"Button"})}function O(){}function b(e){return t.jsx(S,{...e,style:{width:"fit-content"},children:"Button"})}const Se=["RepositionAfterContentGrows","RepositionAfterContentGrowsWithinDialog"];export{f as RepositionAfterContentGrows,u as RepositionAfterContentGrowsWithinDialog,Se as __namedExportsOrder,je as default};
