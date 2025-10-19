import{d,r as f,j as t}from"./iframe-Cfz2vXeE.js";import{u as C}from"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import{F as a}from"./FormControl-qjqH6r5D.js";import{C as h}from"./Checkbox-BHvnb8mU.js";import"./preload-helper-D9Z9MdNV.js";import"./TextInputWrapper-A6-jRRIw.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./index-C-OhZ25x.js";import"./Link-Dm7wEaum.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./invariant-Dix8OlSS.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./Truncate-DUc3hzfC.js";import"./index.esm-C1WN7kEu.js";import"./Tooltip-BuVThTi0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Button-3sCteC9V.js";import"./InputLabel-BWKIqz-Q.js";import"./TextInput-hhRVe1zi.js";import"./FilteredActionList-Lzw7hr5X.js";import"./useProvidedStateOrCreate-BEKIGSkE.js";import"./SkeletonBox-ClHTzzEx.js";import"./useFeatureFlag-paATTdb3.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./Overlay-Du2pzphD.js";import"./Portal-BKCn1yDJ.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./Token-B_OnxjPX.js";import"./Textarea-DREKwwM3.js";import"./Octicon-B0A15aaM.js";import"./LinkButton-D-EvgNXE.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./index-CEFMyGLK.js";import"./useMergedRefs-CMoMpGtu.js";import"./useMnemonics-D4gqZtvW.js";import"./AnchoredOverlay-DQ90Zw6u.js";import"./useFocusTrap-CL_Yl_fl.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Oe={title:"Components/Checkbox/Examples"},c=()=>{const e=d.c(6),[r,m]=f.useState(!1);let o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=u=>{m(u.target.checked),x("Change event triggered")()},e[0]=o):o=e[0];const i=o;let n;e[1]!==r?(n=t.jsx(h,{value:"default",onChange:i,checked:r}),e[1]=r,e[2]=n):n=e[2];let s;e[3]===Symbol.for("react.memo_cache_sentinel")?(s=t.jsx(a.Label,{children:"Default label"}),e[3]=s):s=e[3];let p;return e[4]!==n?(p=t.jsx("form",{children:t.jsxs(a,{children:[n,s]})}),e[4]=n,e[5]=p):p=e[5],p},l=()=>{const e=d.c(3),r=f.useRef(null);let m,o;e[0]===Symbol.for("react.memo_cache_sentinel")?(m=()=>{r.current&&(r.current.checked=!1)},o=[],e[0]=m,e[1]=o):(m=e[0],o=e[1]),C(m,o);let i;return e[2]===Symbol.for("react.memo_cache_sentinel")?(i=t.jsx("form",{children:t.jsxs(a,{children:[t.jsx(h,{ref:r}),t.jsx(a.Label,{children:"Default label"})]})}),e[2]=i):i=e[2],i};c.__docgenInfo={description:"",methods:[],displayName:"Controlled"};l.__docgenInfo={description:"",methods:[],displayName:"Uncontrolled"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [isChecked, setChecked] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    action('Change event triggered')();
  };
  return <form>
      <FormControl>
        <Checkbox value="default" onChange={handleChange} checked={isChecked} />
        <FormControl.Label>Default label</FormControl.Label>
      </FormControl>
    </form>;
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  useLayoutEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  }, []);
  return <form>
      <FormControl>
        <Checkbox ref={checkboxRef} />
        <FormControl.Label>Default label</FormControl.Label>
      </FormControl>
    </form>;
}`,...l.parameters?.docs?.source}}};const De=["Controlled","Uncontrolled"];export{c as Controlled,l as Uncontrolled,De as __namedExportsOrder,Oe as default};
