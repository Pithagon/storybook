import{j as t}from"./iframe-Cfz2vXeE.js";import{K as d}from"./KeybindingHint-C2Jv3TM3.js";import"./preload-helper-D9Z9MdNV.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./Text-BbpDCwQY.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";const l="prc-KeybindingHint-EmphasisBackground-cepFb",g="prc-KeybindingHint-PrimaryBackground-mA1lG",p={EmphasisBackground:l,PrimaryBackground:g},B={title:"Experimental/Components/KeybindingHint/Features",component:d},r="Mod+Shift+K",s={args:{keys:r}},e={args:{keys:r,format:"full"}},u="Mod+x y z",a={args:{keys:u}},n={args:{keys:u,format:"full"}},o={render:m=>t.jsx("div",{className:p.EmphasisBackground,children:t.jsx(d,{...m})}),args:{keys:r,variant:"onEmphasis"}},c={render:m=>t.jsx("div",{className:p.PrimaryBackground,children:t.jsx(d,{...m})}),args:{keys:r,variant:"onPrimary"}},i={args:{keys:r,size:"small"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    keys: chord
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    keys: chord,
    format: 'full'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    keys: sequence
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    keys: sequence,
    format: 'full'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className={classes.EmphasisBackground}>
      <KeybindingHint {...args} />
    </div>,
  args: {
    keys: chord,
    variant: 'onEmphasis'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div className={classes.PrimaryBackground}>
      <KeybindingHint {...args} />
    </div>,
  args: {
    keys: chord,
    variant: 'onPrimary'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    keys: chord,
    size: 'small'
  }
}`,...i.parameters?.docs?.source}}};const K=["Condensed","Full","SequenceCondensed","SequenceFull","OnEmphasis","OnPrimary","Small"];export{s as Condensed,e as Full,o as OnEmphasis,c as OnPrimary,a as SequenceCondensed,n as SequenceFull,i as Small,K as __namedExportsOrder,B as default};
