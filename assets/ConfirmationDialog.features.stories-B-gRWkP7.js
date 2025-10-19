import{b as y,r as n,j as t}from"./iframe-Cfz2vXeE.js";import{A as g}from"./index-C-OhZ25x.js";import{C as h,u as B}from"./ConfirmationDialog-oJkiCKoM.js";import{B as a}from"./Button-3sCteC9V.js";import{A as u}from"./ActionMenu-VmSenYrX.js";import"./preload-helper-D9Z9MdNV.js";import"./Link-Dm7wEaum.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./invariant-Dix8OlSS.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./Truncate-DUc3hzfC.js";import"./index.esm-C1WN7kEu.js";import"./Tooltip-BuVThTi0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./client-BWxrjV1N.js";import"./Dialog-BYWFp9hz.js";import"./useFocusTrap-CL_Yl_fl.js";import"./Portal-BKCn1yDJ.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./ScrollableRegion-CKacTlaY.js";import"./useOverflow-CIpObA8I.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./useProvidedStateOrCreate-BEKIGSkE.js";import"./useMnemonics-D4gqZtvW.js";import"./AnchoredOverlay-DQ90Zw6u.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./Overlay-Du2pzphD.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./useFeatureFlag-paATTdb3.js";const L="prc-ConfirmationDialog-ButtonContainer-uL8yD",x="prc-ConfirmationDialog-TurnGreenButton-Dww8T",i={ButtonContainer:L,TurnGreenButton:x},jt={title:"Components/ConfirmationDialog/Features",component:h},c=()=>{const s=B(),{theme:e}=y(),o=n.useCallback(async r=>{await s({title:"Are you sure?",content:"Do you really want to turn this button green?"})&&r.target instanceof HTMLElement&&(r.target.style.color=e?.colors.success.fg??"green",r.target.textContent="I'm green!")},[s,e]);return t.jsxs("div",{className:i.ButtonContainer,children:[t.jsx(a,{onClick:o,className:i.TurnGreenButton,children:"Turn me green!"}),t.jsx(a,{onClick:o,className:i.TurnGreenButton,children:"Turn me green!"}),t.jsx(a,{onClick:o,className:i.TurnGreenButton,children:"Turn me green!"}),t.jsx(a,{onClick:o,className:i.TurnGreenButton,children:"Turn me green!"})]})},l=()=>{const s=B(),[e,o]=n.useState("open me"),r=n.useCallback(async()=>{await s({title:"Are you sure?",content:"Do you really want to do a trick?"})&&o("tada!")},[s]);return t.jsx("div",{className:i.ButtonContainer,children:t.jsxs(u,{children:[t.jsx(u.Button,{children:e}),t.jsx(u.Overlay,{children:t.jsx(g,{children:t.jsx(g.Item,{onSelect:r,children:"Do a trick!"})})})]})})},m=()=>{const[s,e]=n.useState(!1),[o,r]=n.useState(!1),[k,p]=n.useState(!1),d=n.useCallback(()=>{r(!0),setTimeout(()=>{r(!1),e(!1)},2e3)},[]),f=n.useCallback(()=>{p(!0),setTimeout(()=>{p(!1),e(!1)},1500)},[]),T=n.useCallback(C=>{C==="confirm"?d():C==="cancel"?f():e(!1)},[d,f]);return t.jsxs("div",{className:i.ButtonContainer,children:[t.jsx(a,{onClick:()=>e(!0),children:"Show Loading Dialog"}),s&&t.jsx(h,{title:"Delete this file?",confirmButtonType:"danger",confirmButtonContent:"Delete",confirmButtonLoading:o,cancelButtonLoading:k,onClose:T,children:"This action cannot be undone. The file will be permanently deleted from your repository."})]})};c.__docgenInfo={description:"",methods:[],displayName:"ShorthandHook"};l.__docgenInfo={description:"",methods:[],displayName:"ShorthandHookFromActionMenu"};m.__docgenInfo={description:"",methods:[],displayName:"LoadingStates"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const confirm = useConfirm();
  const {
    theme
  } = useTheme();
  const onButtonClick = useCallback(async (event: React.MouseEvent) => {
    if ((await confirm({
      title: 'Are you sure?',
      content: 'Do you really want to turn this button green?'
    })) && event.target instanceof HTMLElement) {
      event.target.style.color = theme?.colors.success.fg ?? 'green';
      event.target.textContent = "I'm green!";
    }
  }, [confirm, theme]);
  return <div className={classes.ButtonContainer}>
      <Button onClick={onButtonClick} className={classes.TurnGreenButton}>
        Turn me green!
      </Button>
      <Button onClick={onButtonClick} className={classes.TurnGreenButton}>
        Turn me green!
      </Button>
      <Button onClick={onButtonClick} className={classes.TurnGreenButton}>
        Turn me green!
      </Button>
      <Button onClick={onButtonClick} className={classes.TurnGreenButton}>
        Turn me green!
      </Button>
    </div>;
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const confirm = useConfirm();
  const [text, setText] = useState('open me');
  const onButtonClick = useCallback(async () => {
    if (await confirm({
      title: 'Are you sure?',
      content: 'Do you really want to do a trick?'
    })) {
      setText('tada!');
    }
  }, [confirm]);
  return <div className={classes.ButtonContainer}>
      <ActionMenu>
        <ActionMenu.Button>{text}</ActionMenu.Button>
        <ActionMenu.Overlay>
          <ActionList>
            <ActionList.Item onSelect={onButtonClick}>Do a trick!</ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </div>;
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmLoading, setIsConfirmLoading] = useState(false);
  const [isCancelLoading, setIsCancelLoading] = useState(false);
  const handleConfirm = useCallback(() => {
    setIsConfirmLoading(true);
    // Simulate async operation
    setTimeout(() => {
      setIsConfirmLoading(false);
      setIsOpen(false);
    }, 2000);
  }, []);
  const handleCancel = useCallback(() => {
    setIsCancelLoading(true);
    // Simulate async operation
    setTimeout(() => {
      setIsCancelLoading(false);
      setIsOpen(false);
    }, 1500);
  }, []);
  const handleClose = useCallback((gesture: 'confirm' | 'close-button' | 'cancel' | 'escape') => {
    if (gesture === 'confirm') {
      handleConfirm();
    } else if (gesture === 'cancel') {
      handleCancel();
    } else {
      setIsOpen(false);
    }
  }, [handleConfirm, handleCancel]);
  return <div className={classes.ButtonContainer}>
      <Button onClick={() => setIsOpen(true)}>Show Loading Dialog</Button>
      {isOpen && <ConfirmationDialog title="Delete this file?" confirmButtonType="danger" confirmButtonContent="Delete" confirmButtonLoading={isConfirmLoading} cancelButtonLoading={isCancelLoading} onClose={handleClose}>
          This action cannot be undone. The file will be permanently deleted from your repository.
        </ConfirmationDialog>}
    </div>;
}`,...m.parameters?.docs?.source}}};const vt=["ShorthandHook","ShorthandHookFromActionMenu","LoadingStates"];export{m as LoadingStates,c as ShorthandHook,l as ShorthandHookFromActionMenu,vt as __namedExportsOrder,jt as default};
