import{d,j as t}from"./iframe-Cfz2vXeE.js";import{N as i}from"./NavList-esDwzPCM.js";import{d as h,q as u,p as I,m as p}from"./index.esm-C1WN7kEu.js";import{P as s}from"./PageLayout-9NXxh8HL.js";import"./preload-helper-D9Z9MdNV.js";import"./index-C-OhZ25x.js";import"./Link-Dm7wEaum.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./invariant-Dix8OlSS.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./Truncate-DUc3hzfC.js";import"./Tooltip-BuVThTi0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Button-3sCteC9V.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./useOverflow-CIpObA8I.js";const lt={title:"Components/NavList/Dev",component:i,parameters:{layout:"fullscreen"}},n=()=>{const e=d.c(5);let o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsx(i.LeadingVisual,{children:t.jsx(h,{})}),e[0]=o):o=e[0];let r;e[1]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsxs(i.Item,{children:[o,"Item 1",t.jsx(i.TrailingAction,{label:"Expand sidebar",icon:u})]}),e[1]=r):r=e[1];let m;e[2]===Symbol.for("react.memo_cache_sentinel")?(m=t.jsxs(i.Item,{children:["Item 2",t.jsx(i.TrailingAction,{as:"a",href:"#",label:"Some action",icon:I})]}),e[2]=m):m=e[2];let l;e[3]===Symbol.for("react.memo_cache_sentinel")?(l=t.jsx(i.TrailingAction,{label:"This is not supported and should not render!!!!!",icon:p}),e[3]=l):l=e[3];let c;return e[4]===Symbol.for("react.memo_cache_sentinel")?(c=t.jsx(s,{children:t.jsx(s.Pane,{position:"start",children:t.jsxs(i,{children:[r,m,t.jsxs(i.Item,{children:["Item 3",l,t.jsx(i.SubNav,{children:t.jsxs(i.Item,{href:"#",children:["Sub item 1",t.jsx(i.TrailingAction,{label:"Another action",icon:p})]})})]})]})})}),e[4]=c):c=e[4],c};n.storyName="With SubNav and Trailing Action (Bad example, do not copy)";const a=()=>{const e=d.c(2);let o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsxs(i.Group,{title:"Group 1",children:[t.jsx(i.GroupHeading,{children:"Hello"}),t.jsx(i.Item,{"aria-current":"true",href:"#",children:"Item 1A"}),t.jsx(i.Item,{href:"#",children:"Item 1B"}),t.jsx(i.Item,{href:"#",children:"Item 1C"})]}),e[0]=o):o=e[0];let r;return e[1]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsxs(s,{children:[t.jsx(s.Pane,{position:"start",children:t.jsxs(i,{children:[o,t.jsxs(i.Group,{title:"Group 2",children:[t.jsx(i.Item,{href:"#",children:"Item 2A"}),t.jsx(i.Item,{href:"#",children:"Item 2B"}),t.jsx(i.Item,{href:"#",children:"Item 2C"})]})]})}),t.jsx(s.Content,{})]}),e[1]=r):r=e[1],r};n.__docgenInfo={description:"",methods:[],displayName:"WithBadExampleOfSubNavAndTrailingAction"};a.__docgenInfo={description:"",methods:[],displayName:"WithGroupTitleAndHeading"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <PageLayout>
      <PageLayout.Pane position="start">
        <NavList>
          <NavList.Item>
            <NavList.LeadingVisual>
              <FileDirectoryIcon />
            </NavList.LeadingVisual>
            Item 1
            <NavList.TrailingAction label="Expand sidebar" icon={ArrowLeftIcon} />
          </NavList.Item>
          <NavList.Item>
            Item 2
            <NavList.TrailingAction as="a" href="#" label="Some action" icon={ArrowRightIcon} />
          </NavList.Item>
          <NavList.Item>
            Item 3
            <NavList.TrailingAction label="This is not supported and should not render!!!!!" icon={BookIcon} />
            <NavList.SubNav>
              <NavList.Item href="#">
                Sub item 1
                <NavList.TrailingAction label="Another action" icon={BookIcon} />
              </NavList.Item>
            </NavList.SubNav>
          </NavList.Item>
        </NavList>
      </PageLayout.Pane>
    </PageLayout>;
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <PageLayout>
    <PageLayout.Pane position="start">
      <NavList>
        <NavList.Group title="Group 1">
          <NavList.GroupHeading>Hello</NavList.GroupHeading>
          <NavList.Item aria-current="true" href="#">
            Item 1A
          </NavList.Item>
          <NavList.Item href="#">Item 1B</NavList.Item>
          <NavList.Item href="#">Item 1C</NavList.Item>
        </NavList.Group>
        <NavList.Group title="Group 2">
          <NavList.Item href="#">Item 2A</NavList.Item>
          <NavList.Item href="#">Item 2B</NavList.Item>
          <NavList.Item href="#">Item 2C</NavList.Item>
        </NavList.Group>
      </NavList>
    </PageLayout.Pane>
    <PageLayout.Content></PageLayout.Content>
  </PageLayout>`,...a.parameters?.docs?.source}}};const ct=["WithBadExampleOfSubNavAndTrailingAction","WithGroupTitleAndHeading"];export{n as WithBadExampleOfSubNavAndTrailingAction,a as WithGroupTitleAndHeading,ct as __namedExportsOrder,lt as default};
