import{j as i}from"./iframe-Cfz2vXeE.js";import{D as I,a as f,G as y,L as A,I as L,A as e}from"./index-C-OhZ25x.js";import{j as g,V as u,S as p,p as d,q as m}from"./index.esm-C1WN7kEu.js";import"./preload-helper-D9Z9MdNV.js";import"./Link-Dm7wEaum.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./invariant-Dix8OlSS.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./Truncate-DUc3hzfC.js";import"./Tooltip-BuVThTi0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Button-3sCteC9V.js";const ci={title:"Components/ActionList",component:e,subcomponents:{Item:L,LinkItem:A,Group:y,Divider:f,Description:I}},c=()=>i.jsxs(e,{children:[i.jsx(e.Item,{children:"Copy link"}),i.jsx(e.Item,{children:"Quote reply"}),i.jsx(e.Item,{children:"Edit comment"})]}),l=n=>i.jsxs(e,{...n,children:[i.jsx(e.Item,{children:"Copy link"}),i.jsx(e.Item,{children:"Quote reply"}),i.jsx(e.Item,{children:"Edit comment"})]});l.args={showDividers:!1,selectionVariant:void 0,variant:"inset"};l.argTypes={showDividers:{control:{type:"boolean"}},variant:{control:{type:"radio"},options:["inset","horizontal-inset","full"]},selectionVariant:{control:{type:"radio",labels:["single","multiple","unset"]},options:[0,1,2],mapping:["single","multiple",null]},role:{type:"string"}};const V=["unset","TypographyIcon","VersionsIcon","SearchIcon","ArrowRightIcon","ArrowLeftIcon"],a=n=>{let t;n.leadingVisual==="TypographyIcon"?t=i.jsx(g,{}):n.leadingVisual==="VersionsIcon"?t=i.jsx(u,{}):n.leadingVisual==="SearchIcon"?t=i.jsx(p,{}):n.leadingVisual==="ArrowRightIcon"?t=i.jsx(d,{}):n.leadingVisual==="ArrowLeftIcon"?t=i.jsx(m,{}):n.leadingVisual==="unset"&&(t=null);let s;return n.trailingVisual==="TypographyIcon"?s=i.jsx(g,{}):n.trailingVisual==="VersionsIcon"?s=i.jsx(u,{}):n.trailingVisual==="SearchIcon"?s=i.jsx(p,{}):n.trailingVisual==="ArrowRightIcon"?s=i.jsx(d,{}):n.trailingVisual==="ArrowLeftIcon"?s=i.jsx(m,{}):n.trailingVisual==="unset"&&(s=null),i.jsx(e,{selectionVariant:n.selectionVariant,children:i.jsxs(e.Item,{...n,children:[t&&i.jsx(e.LeadingVisual,{children:t}),"Action list item",s&&i.jsx(e.TrailingVisual,{children:s})]})})};a.argTypes={selected:{control:{type:"boolean"}},active:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},inactiveText:{control:{type:"text"}},variant:{control:"radio",options:["default","danger"]},size:{control:{type:"radio"},options:["medium","large"]},role:{type:"string"},id:{type:"string"},leadingVisual:{control:{type:"select"},options:V},loading:{control:{type:"boolean"}},trailingVisual:{control:{type:"select"},options:V},selectionVariant:{control:"radio",if:{arg:"selected"},options:["single","multiple"],table:{category:"ActionList"}}};a.args={selected:!1,active:!1,disabled:!1,inactiveText:"",variant:"default",size:"medium",id:"item-1",leadingVisual:null,loading:!1,trailingVisual:null,selectionVariant:"single"};const o=n=>{let t;n.leadingVisual==="TypographyIcon"?t=i.jsx(g,{}):n.leadingVisual==="VersionsIcon"?t=i.jsx(u,{}):n.leadingVisual==="SearchIcon"?t=i.jsx(p,{}):n.leadingVisual==="ArrowRightIcon"?t=i.jsx(d,{}):n.leadingVisual==="ArrowLeftIcon"?t=i.jsx(m,{}):n.leadingVisual==="unset"&&(t=null);let s;return n.trailingVisual==="TypographyIcon"?s=i.jsx(g,{}):n.trailingVisual==="VersionsIcon"?s=i.jsx(u,{}):n.trailingVisual==="SearchIcon"?s=i.jsx(p,{}):n.trailingVisual==="ArrowRightIcon"?s=i.jsx(d,{}):n.trailingVisual==="ArrowLeftIcon"?s=i.jsx(m,{}):n.trailingVisual==="unset"&&(s=null),i.jsx(e,{children:i.jsxs(e.LinkItem,{...n,children:[t&&i.jsx(e.LeadingVisual,{children:t}),"Action list item",s&&i.jsx(e.TrailingVisual,{children:s})]})})};o.args={active:!1,disabled:!1,id:"item-1",variant:"default",size:"medium",inactiveText:"",leadingVisual:null,loading:!1,trailingVisual:null};o.argTypes={active:{control:{type:"boolean"}},variant:{control:"radio",options:["default","danger"]},size:{control:{type:"radio"},options:["medium","large"]},role:{type:"string"},id:{type:"string"},inactiveText:{control:{type:"text"}},leadingVisual:{control:{type:"select"},options:V},loading:{control:{type:"boolean"}},trailingVisual:{control:{type:"select"},options:V},href:{type:"string"}};const r=n=>i.jsx(e,{children:i.jsxs(e.Group,{...n,children:[i.jsx(e.Item,{children:"Item 1"}),i.jsx(e.Item,{children:"Item 2"})]})});r.argTypes={variant:{control:{type:"radio"},options:["subtle","filled"]},role:{type:"string"},title:{type:"string"},"aria-label":{type:"string"},auxiliaryText:{type:"string"}};r.args={variant:"subtle",title:"Group title",auxiliaryText:""};c.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"Playground"};a.__docgenInfo={description:"",methods:[],displayName:"ItemPlayground"};o.__docgenInfo={description:"",methods:[],displayName:"LinkItemPlayground"};r.__docgenInfo={description:"",methods:[],displayName:"GroupPlayground"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <ActionList>
    <ActionList.Item>Copy link</ActionList.Item>
    <ActionList.Item>Quote reply</ActionList.Item>
    <ActionList.Item>Edit comment</ActionList.Item>
  </ActionList>`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <ActionList {...args}>
    <ActionList.Item>Copy link</ActionList.Item>
    <ActionList.Item>Quote reply</ActionList.Item>
    <ActionList.Item>Edit comment</ActionList.Item>
  </ActionList>`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  let leadingVisual;
  if (args.leadingVisual === 'TypographyIcon') {
    leadingVisual = <TypographyIcon />;
  } else if (args.leadingVisual === 'VersionsIcon') {
    leadingVisual = <VersionsIcon />;
  } else if (args.leadingVisual === 'SearchIcon') {
    leadingVisual = <SearchIcon />;
  } else if (args.leadingVisual === 'ArrowRightIcon') {
    leadingVisual = <ArrowRightIcon />;
  } else if (args.leadingVisual === 'ArrowLeftIcon') {
    leadingVisual = <ArrowLeftIcon />;
  } else if (args.leadingVisual === 'unset') {
    leadingVisual = null;
  }
  let trailingVisual;
  if (args.trailingVisual === 'TypographyIcon') {
    trailingVisual = <TypographyIcon />;
  } else if (args.trailingVisual === 'VersionsIcon') {
    trailingVisual = <VersionsIcon />;
  } else if (args.trailingVisual === 'SearchIcon') {
    trailingVisual = <SearchIcon />;
  } else if (args.trailingVisual === 'ArrowRightIcon') {
    trailingVisual = <ArrowRightIcon />;
  } else if (args.trailingVisual === 'ArrowLeftIcon') {
    trailingVisual = <ArrowLeftIcon />;
  } else if (args.trailingVisual === 'unset') {
    trailingVisual = null;
  }
  return <ActionList selectionVariant={args.selectionVariant}>
      <ActionList.Item {...args}>
        {leadingVisual && <ActionList.LeadingVisual>{leadingVisual}</ActionList.LeadingVisual>}
        Action list item
        {trailingVisual && <ActionList.TrailingVisual>{trailingVisual}</ActionList.TrailingVisual>}
      </ActionList.Item>
    </ActionList>;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  let leadingVisual;
  if (args.leadingVisual === 'TypographyIcon') {
    leadingVisual = <TypographyIcon />;
  } else if (args.leadingVisual === 'VersionsIcon') {
    leadingVisual = <VersionsIcon />;
  } else if (args.leadingVisual === 'SearchIcon') {
    leadingVisual = <SearchIcon />;
  } else if (args.leadingVisual === 'ArrowRightIcon') {
    leadingVisual = <ArrowRightIcon />;
  } else if (args.leadingVisual === 'ArrowLeftIcon') {
    leadingVisual = <ArrowLeftIcon />;
  } else if (args.leadingVisual === 'unset') {
    leadingVisual = null;
  }
  let trailingVisual;
  if (args.trailingVisual === 'TypographyIcon') {
    trailingVisual = <TypographyIcon />;
  } else if (args.trailingVisual === 'VersionsIcon') {
    trailingVisual = <VersionsIcon />;
  } else if (args.trailingVisual === 'SearchIcon') {
    trailingVisual = <SearchIcon />;
  } else if (args.trailingVisual === 'ArrowRightIcon') {
    trailingVisual = <ArrowRightIcon />;
  } else if (args.trailingVisual === 'ArrowLeftIcon') {
    trailingVisual = <ArrowLeftIcon />;
  } else if (args.trailingVisual === 'unset') {
    trailingVisual = null;
  }
  return <ActionList>
      <ActionList.LinkItem {...args}>
        {leadingVisual && <ActionList.LeadingVisual>{leadingVisual}</ActionList.LeadingVisual>}
        Action list item
        {trailingVisual && <ActionList.TrailingVisual>{trailingVisual}</ActionList.TrailingVisual>}
      </ActionList.LinkItem>
    </ActionList>;
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <ActionList>
    <ActionList.Group {...args}>
      <ActionList.Item>Item 1</ActionList.Item>
      <ActionList.Item>Item 2</ActionList.Item>
    </ActionList.Group>
  </ActionList>`,...r.parameters?.docs?.source}}};const gi=["Default","Playground","ItemPlayground","LinkItemPlayground","GroupPlayground"];export{c as Default,r as GroupPlayground,a as ItemPlayground,o as LinkItemPlayground,l as Playground,gi as __namedExportsOrder,ci as default};
