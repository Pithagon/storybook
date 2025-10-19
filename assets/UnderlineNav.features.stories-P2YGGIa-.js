import{d as l,j as t,R as S}from"./iframe-Cfz2vXeE.js";import{C as x,E as w,G as U,am as y,r as _,g as j,aL as C,av as P,v as O,aB as q}from"./index.esm-C1WN7kEu.js";import{U as r}from"./index-DRPM3YQ-.js";import{x as D}from"./index-C6OqqbxC.js";import"./preload-helper-D9Z9MdNV.js";import"./useResizeObserver-CkcKl7_1.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./anchored-position-Cz4CQZsC.js";import"./UnderlineTabbedInterface-B-g35VdW.js";import"./CounterLabel-DnnBMwbH.js";import"./VisuallyHidden-BShfgJrZ.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./Text-BbpDCwQY.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./index-C-OhZ25x.js";import"./Link-Dm7wEaum.js";import"./useSlots-BdLPLn0-.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./Truncate-DUc3hzfC.js";import"./Spinner-CP1_WO7z.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./Button-3sCteC9V.js";const we={title:"Components/UnderlineNav/Features"},p=()=>{const e=l.c(1);let n;return e[0]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsxs(r,{"aria-label":"Repository",children:[t.jsx(r.Item,{"aria-current":"page",children:"Code"}),t.jsx(r.Item,{children:"Issues"}),t.jsx(r.Item,{children:"Pull Requests"})]}),e[0]=n):n=e[0],n},I=()=>{const e=l.c(5);let n;e[0]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsx(r.Item,{icon:t.jsx(x,{}),children:"Code"}),e[0]=n):n=e[0];let o;e[1]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsx(r.Item,{icon:t.jsx(w,{}),counter:6,children:"Issues"}),e[1]=o):o=e[1];let i;e[2]===Symbol.for("react.memo_cache_sentinel")?(i=t.jsx(r.Item,{"aria-current":"page",icon:t.jsx(U,{}),children:"Pull Requests"}),e[2]=i):i=e[2];let a;e[3]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsx(r.Item,{icon:t.jsx(y,{}),counter:7,children:"Discussions"}),e[3]=a):a=e[3];let s;return e[4]===Symbol.for("react.memo_cache_sentinel")?(s=t.jsxs(r,{"aria-label":"Repository with icons",children:[n,o,i,a,t.jsx(r.Item,{icon:t.jsx(_,{}),children:"Projects"})]}),e[4]=s):s=e[4],s},v=()=>{const e=l.c(2);let n;e[0]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsx(r.Item,{"aria-current":"page",icon:t.jsx(x,{}),counter:"11K",children:"Code"}),e[0]=n):n=e[0];let o;return e[1]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsxs(r,{"aria-label":"Repository with counters",children:[n,t.jsx(r.Item,{icon:t.jsx(j,{}),counter:12,children:"Issues"})]}),e[1]=o):o=e[1],o},b=[{navigation:"Code",icon:x,href:"#code"},{navigation:"Issues",icon:j,counter:"12K",href:"#issues"},{navigation:"Pull Requests",icon:U,counter:13,href:"#pull-requests"},{navigation:"Discussions",icon:y,counter:5,href:"#discussions"},{navigation:"Actions",icon:C,counter:4,href:"#actions"},{navigation:"Projects",icon:_,counter:9,href:"#projects"},{navigation:"Insights",icon:P,counter:"0",href:"#insights"},{navigation:"Settings",icon:O,counter:10,href:"#settings"},{navigation:"Security",icon:q,href:"#security"}],d=e=>{const n=l.c(4),{initialSelectedIndex:o}=e,i=o===void 0?1:o,[a,s]=S.useState(i);let c;n[0]!==a?(c=b.map((u,N)=>t.jsx(r.Item,{icon:u.icon,"aria-current":N===a?"page":void 0,target:"_self",onSelect:R=>{R.preventDefault(),s(N)},counter:u.counter,href:u.href,children:u.navigation},u.navigation)),n[0]=a,n[1]=c):c=n[1];let g;return n[2]!==c?(g=t.jsx(r,{"aria-label":"Repository",selectionVariant:void 0,children:c}),n[2]=c,n[3]=g):g=n[3],g},m=()=>{const e=l.c(1);let n;return e[0]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsx(d,{initialSelectedIndex:1}),e[0]=n):n=e[0],n};m.parameters={viewport:{viewports:{...D,narrowScreen:{name:"Narrow Screen",styles:{width:"800px",height:"100%"}}},defaultViewport:"narrowScreen"}};const h=()=>{const e=l.c(4),[n,o]=S.useState(1);let i;e[0]!==n?(i=b.map((s,c)=>t.jsx(r.Item,{icon:s.icon,"aria-current":c===n?"page":void 0,onSelect:()=>o(c),counter:s.counter,children:s.navigation},s.navigation)),e[0]=n,e[1]=i):i=e[1];let a;return e[2]!==i?(a=t.jsx(r,{"aria-label":"Repository with loading counters",loadingCounters:!0,children:i}),e[2]=i,e[3]=a):a=e[3],a},f=()=>{const e=l.c(1);let n;return e[0]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsxs(r,{"aria-label":"Repository",variant:"flush",children:[t.jsx(r.Item,{"aria-current":"page",children:"Code"}),t.jsx(r.Item,{children:"Issues"}),t.jsx(r.Item,{children:"Pull Requests"})]}),e[0]=n):n=e[0],n};p.__docgenInfo={description:"",methods:[],displayName:"Default"};I.__docgenInfo={description:"",methods:[],displayName:"WithIcons"};v.__docgenInfo={description:"",methods:[],displayName:"WithCounterLabels"};d.__docgenInfo={description:"",methods:[],displayName:"OverflowTemplate",props:{initialSelectedIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};m.__docgenInfo={description:"",methods:[],displayName:"OverflowOnNarrowScreen"};h.__docgenInfo={description:"",methods:[],displayName:"CountersLoadingState"};f.__docgenInfo={description:"",methods:[],displayName:"VariantFlush"};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <UnderlineNav aria-label="Repository">
      <UnderlineNav.Item aria-current="page">Code</UnderlineNav.Item>
      <UnderlineNav.Item>Issues</UnderlineNav.Item>
      <UnderlineNav.Item>Pull Requests</UnderlineNav.Item>
    </UnderlineNav>;
}`,...p.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <UnderlineNav aria-label="Repository with icons">
      <UnderlineNav.Item icon={<CodeIcon />}>Code</UnderlineNav.Item>
      <UnderlineNav.Item icon={<EyeIcon />} counter={6}>
        Issues
      </UnderlineNav.Item>
      <UnderlineNav.Item aria-current="page" icon={<GitPullRequestIcon />}>
        Pull Requests
      </UnderlineNav.Item>
      <UnderlineNav.Item icon={<CommentDiscussionIcon />} counter={7}>
        Discussions
      </UnderlineNav.Item>
      <UnderlineNav.Item icon={<ProjectIcon />}>Projects</UnderlineNav.Item>
    </UnderlineNav>;
}`,...I.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <UnderlineNav aria-label="Repository with counters">
      <UnderlineNav.Item aria-current="page" icon={<CodeIcon />} counter="11K">
        Code
      </UnderlineNav.Item>
      <UnderlineNav.Item icon={<IssueOpenedIcon />} counter={12}>
        Issues
      </UnderlineNav.Item>
    </UnderlineNav>;
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  initialSelectedIndex = 1
}: {
  initialSelectedIndex?: number;
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(initialSelectedIndex);
  return <UnderlineNav aria-label="Repository"
  // @ts-ignore UnderlineNav does not take selectionVariant prop, but we need to pass it to the underlying ActionList so it doesn't show Selections.
  selectionVariant={undefined}>
      {items.map((item, index) => <UnderlineNav.Item key={item.navigation} icon={item.icon} aria-current={index === selectedIndex ? 'page' : undefined}
    // Set so that navigation in interaction tests does not cause the
    // page to load the storybook iframe URL and instead keeps the test in
    // the local preview
    target="_self" onSelect={event => {
      event.preventDefault();
      setSelectedIndex(index);
    }} counter={item.counter} href={item.href}>
          {item.navigation}
        </UnderlineNav.Item>)}
    </UnderlineNav>;
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <OverflowTemplate initialSelectedIndex={1} />;
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(1);
  return <UnderlineNav aria-label="Repository with loading counters" loadingCounters={true}>
      {items.map((item, index) => <UnderlineNav.Item key={item.navigation} icon={item.icon} aria-current={index === selectedIndex ? 'page' : undefined} onSelect={() => setSelectedIndex(index)} counter={item.counter}>
          {item.navigation}
        </UnderlineNav.Item>)}
    </UnderlineNav>;
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <UnderlineNav aria-label="Repository" variant="flush">
      <UnderlineNav.Item aria-current="page">Code</UnderlineNav.Item>
      <UnderlineNav.Item>Issues</UnderlineNav.Item>
      <UnderlineNav.Item>Pull Requests</UnderlineNav.Item>
    </UnderlineNav>;
}`,...f.parameters?.docs?.source}}};const Ce=["Default","WithIcons","WithCounterLabels","OverflowTemplate","OverflowOnNarrowScreen","CountersLoadingState","VariantFlush"];export{h as CountersLoadingState,p as Default,m as OverflowOnNarrowScreen,d as OverflowTemplate,f as VariantFlush,v as WithCounterLabels,I as WithIcons,Ce as __namedExportsOrder,we as default};
