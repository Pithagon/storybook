import{j as e,T as c,B as d,r as n}from"./iframe-Cfz2vXeE.js";import{C as a}from"./ConfirmationDialog-oJkiCKoM.js";import{B as p}from"./Button-3sCteC9V.js";import"./preload-helper-D9Z9MdNV.js";import"./client-BWxrjV1N.js";import"./Dialog-BYWFp9hz.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./useFocusTrap-CL_Yl_fl.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./event-listener-signal-Pp6mWBoo.js";import"./index.esm-C1WN7kEu.js";import"./useFocusZone-BvuuCBlY.js";import"./focus-zone-ZDpdvBtN.js";import"./Portal-BKCn1yDJ.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./ScrollableRegion-CKacTlaY.js";import"./useOverflow-CIpObA8I.js";const ee={title:"Components/ConfirmationDialog",component:a,decorators:[o=>e.jsx(c,{children:e.jsx(d,{children:e.jsx(o,{})})})]},i=()=>{const[o,r]=n.useState(!1),s=n.useRef(null),l=n.useCallback(()=>r(!1),[]);return e.jsxs(e.Fragment,{children:[e.jsx(p,{ref:s,onClick:()=>r(!o),children:"Show dialog"}),o&&e.jsx(a,{title:"Delete universe?",onClose:l,confirmButtonContent:"Delete it!",confirmButtonType:"danger",children:"Deleting the universe could have disastrous effects, including but not limited to destroying all life on Earth."})]})},t=({open:o,...r})=>{const[s,l]=n.useState(!1),m=n.useRef(null),u=n.useCallback(()=>l(!1),[]);return e.jsxs(e.Fragment,{children:[e.jsx(p,{ref:m,onClick:()=>l(!s),children:"Show dialog"}),(s||o)&&e.jsx(a,{title:"Delete universe?",onClose:u,confirmButtonContent:"Delete it!",confirmButtonType:"danger",...r,children:"Deleting the universe could have disastrous effects, including but not limited to destroying all life on Earth."})]})};t.args={open:!1};t.argTypes={open:{control:{type:"boolean"}},title:{control:{type:"text"}},cancelButtonContent:{control:{type:"text"}},confirmButtonContent:{control:{type:"text"}}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{open:{required:!0,tsType:{name:"boolean"},description:""}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const onDialogClose = useCallback(() => setIsOpen(false), []);
  return <>
      <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Show dialog
      </Button>
      {isOpen && <ConfirmationDialog title="Delete universe?" onClose={onDialogClose} confirmButtonContent="Delete it!" confirmButtonType="danger">
          Deleting the universe could have disastrous effects, including but not limited to destroying all life on
          Earth.
        </ConfirmationDialog>}
    </>;
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  open,
  ...args
}: PlaygroundProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const onDialogClose = useCallback(() => setIsOpen(false), []);
  return <>
      <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Show dialog
      </Button>
      {(isOpen || open) && <ConfirmationDialog title="Delete universe?" onClose={onDialogClose} confirmButtonContent="Delete it!" confirmButtonType="danger" {...args}>
          Deleting the universe could have disastrous effects, including but not limited to destroying all life on
          Earth.
        </ConfirmationDialog>}
    </>;
}`,...t.parameters?.docs?.source}}};const te=["Default","Playground"];export{i as Default,t as Playground,te as __namedExportsOrder,ee as default};
