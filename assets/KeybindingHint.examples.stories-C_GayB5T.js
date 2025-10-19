import{j as r}from"./iframe-Cfz2vXeE.js";import{A as o}from"./index-C-OhZ25x.js";import{F as l}from"./FormControl-qjqH6r5D.js";import{T as c}from"./TextInput-hhRVe1zi.js";import{K as e}from"./KeybindingHint-C2Jv3TM3.js";import{B as d}from"./Button-3sCteC9V.js";import"./preload-helper-D9Z9MdNV.js";import"./Link-Dm7wEaum.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./invariant-Dix8OlSS.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./Truncate-DUc3hzfC.js";import"./index.esm-C1WN7kEu.js";import"./Tooltip-BuVThTi0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./anchored-position-Cz4CQZsC.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./Text-BbpDCwQY.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./TextInputWrapper-A6-jRRIw.js";import"./InputLabel-BWKIqz-Q.js";import"./FilteredActionList-Lzw7hr5X.js";import"./useProvidedStateOrCreate-BEKIGSkE.js";import"./SkeletonBox-ClHTzzEx.js";import"./useFeatureFlag-paATTdb3.js";import"./Checkbox-BHvnb8mU.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./Overlay-Du2pzphD.js";import"./Portal-BKCn1yDJ.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./Token-B_OnxjPX.js";import"./Textarea-DREKwwM3.js";import"./Octicon-B0A15aaM.js";import"./LinkButton-D-EvgNXE.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./index-CEFMyGLK.js";import"./useMergedRefs-CMoMpGtu.js";import"./useMnemonics-D4gqZtvW.js";import"./AnchoredOverlay-DQ90Zw6u.js";import"./useFocusTrap-CL_Yl_fl.js";import"./environment-DRRHKtsv.js";const Cr={title:"Experimental/Components/KeybindingHint/Examples",component:e},i={render:t=>r.jsx(d,{trailingVisual:()=>r.jsx(e,{...t}),children:"Pull requests"}),args:{keys:"g p"},name:"Button"},n={render:t=>r.jsx(d,{variant:"primary",trailingVisual:()=>r.jsx(e,{...t}),children:"Submit"}),args:{keys:"Mod+Enter",variant:"onPrimary"}},s={render:t=>r.jsx(d,{variant:"danger",trailingVisual:()=>r.jsx(e,{...t}),children:"Delete"}),args:{keys:"Mod+Delete",variant:"normal"}},a={render:t=>r.jsxs(o,{sx:{maxWidth:"300px",border:"1px solid",borderColor:"border.default",borderRadius:2},children:[r.jsx(o.Item,{children:"Add comment"}),r.jsxs(o.Item,{children:["Copy text"," ",r.jsx(o.TrailingVisual,{children:r.jsx(e,{...t})})]}),r.jsx(o.Item,{children:"Cancel"})]}),args:{keys:"Mod+c"},name:"ActionList"},m={render:t=>r.jsxs("p",{children:["Press ",r.jsx(e,{...t})," to toggle between write and preview modes."]}),args:{keys:"Mod+Shift+P",format:"full"}},p={render:t=>r.jsxs(l,{children:[r.jsx(l.Label,{visuallyHidden:!0,children:"Search"}),r.jsx(c,{trailingVisual:()=>r.jsx(e,{...t}),placeholder:"Search"})]}),args:{keys:"/"},name:"TextInput"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Button trailingVisual={() => <KeybindingHint {...args} />}>Pull requests</Button>,
  args: {
    keys: 'g p'
  },
  name: 'Button'
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Button variant="primary" trailingVisual={() => <KeybindingHint {...args} />}>
      Submit
    </Button>,
  args: {
    keys: 'Mod+Enter',
    variant: 'onPrimary'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Button variant="danger" trailingVisual={() => <KeybindingHint {...args} />}>
      Delete
    </Button>,
  args: {
    keys: 'Mod+Delete',
    variant: 'normal'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <ActionList sx={{
    maxWidth: '300px',
    border: '1px solid',
    borderColor: 'border.default',
    borderRadius: 2
  }}>
      <ActionList.Item>Add comment</ActionList.Item>
      <ActionList.Item>
        Copy text{' '}
        <ActionList.TrailingVisual>
          <KeybindingHint {...args} />
        </ActionList.TrailingVisual>
      </ActionList.Item>
      <ActionList.Item>Cancel</ActionList.Item>
    </ActionList>,
  args: {
    keys: 'Mod+c'
  },
  name: 'ActionList'
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <p>
      Press <KeybindingHint {...args} /> to toggle between write and preview modes.
    </p>,
  args: {
    keys: 'Mod+Shift+P',
    format: 'full'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <FormControl>
      <FormControl.Label visuallyHidden>Search</FormControl.Label>
      <TextInput trailingVisual={() => <KeybindingHint {...args} />} placeholder="Search" />
    </FormControl>,
  args: {
    keys: '/'
  },
  name: 'TextInput'
}`,...p.parameters?.docs?.source}}};const kr=["ButtonExample","PrimaryButton","DangerButton","ActionListExample","Prose","TextInputExample"];export{a as ActionListExample,i as ButtonExample,s as DangerButton,n as PrimaryButton,m as Prose,p as TextInputExample,kr as __namedExportsOrder,Cr as default};
