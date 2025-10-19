import{d as T,j as e}from"./iframe-Cfz2vXeE.js";import{T as i}from"./Timeline-DQKiZe8w.js";import{an as c,aj as B,O as g}from"./index.esm-C1WN7kEu.js";import{O as m}from"./Octicon-B0A15aaM.js";import{L as p}from"./Link-Dm7wEaum.js";import"./preload-helper-D9Z9MdNV.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";const I="prc-Timeline-BadgeWithDoneBackground-pxVzW",x="prc-Timeline-LinkWithBoldStyle-4CGZp",h={BadgeWithDoneBackground:I,LinkWithBoldStyle:x},W={title:"Components/Timeline/Features",component:i,subcomponents:{"Timeline.Item":i.Item,"Timeline.Badge":i.Badge,"Timeline.Body":i.Body,"Timeline.Break":i.Break}},o=()=>{const n=T.c(2);let s;n[0]===Symbol.for("react.memo_cache_sentinel")?(s=e.jsxs(i.Item,{children:[e.jsx(i.Badge,{children:e.jsx(m,{icon:c,"aria-label":"Commit"})}),e.jsx(i.Body,{children:"This is a message"})]}),n[0]=s):s=n[0];let a;return n[1]===Symbol.for("react.memo_cache_sentinel")?(a=e.jsxs(i,{clipSidebar:!0,children:[s,e.jsxs(i.Item,{children:[e.jsx(i.Badge,{children:e.jsx(m,{icon:c,"aria-label":"Commit"})}),e.jsx(i.Body,{children:"This is a message"})]})]}),n[1]=a):a=n[1],a},l=()=>{const n=T.c(2);let s;n[0]===Symbol.for("react.memo_cache_sentinel")?(s=e.jsxs(i.Item,{condensed:!0,children:[e.jsx(i.Badge,{children:e.jsx(m,{icon:c,"aria-label":"Commit"})}),e.jsx(i.Body,{children:"This is a message"})]}),n[0]=s):s=n[0];let a;return n[1]===Symbol.for("react.memo_cache_sentinel")?(a=e.jsxs(i,{children:[s,e.jsxs(i.Item,{condensed:!0,children:[e.jsx(i.Badge,{children:e.jsx(m,{icon:c,"aria-label":"Commit"})}),e.jsx(i.Body,{children:"This is a message"})]})]}),n[1]=a):a=n[1],a},t=()=>{const n=T.c(3);let s,a;n[0]===Symbol.for("react.memo_cache_sentinel")?(s=e.jsxs(i.Item,{children:[e.jsx(i.Badge,{className:h.BadgeWithDoneBackground,children:e.jsx(m,{icon:B,color:"fg.onEmphasis","aria-label":"Merged"})}),e.jsx(i.Body,{children:"This is a message"})]}),a=e.jsx(i.Break,{}),n[0]=s,n[1]=a):(s=n[0],a=n[1]);let d;return n[2]===Symbol.for("react.memo_cache_sentinel")?(d=e.jsxs(i,{children:[s,a,e.jsxs(i.Item,{children:[e.jsx(i.Badge,{children:e.jsx(m,{icon:g,"aria-label":"Branch"})}),e.jsx(i.Body,{children:"This is a message"})]})]}),n[2]=d):d=n[2],d},r=()=>{const n=T.c(2);let s;n[0]===Symbol.for("react.memo_cache_sentinel")?(s=e.jsx(i.Badge,{children:e.jsx(m,{icon:c,"aria-label":"Commit"})}),n[0]=s):s=n[0];let a;return n[1]===Symbol.for("react.memo_cache_sentinel")?(a=e.jsx(i,{children:e.jsxs(i.Item,{children:[s,e.jsxs(i.Body,{children:[e.jsx(p,{href:"#",className:h.LinkWithBoldStyle,muted:!0,children:"Monalisa"}),"enabled auto-merge (squash)"]})]})}),n[1]=a):a=n[1],a};o.__docgenInfo={description:"",methods:[],displayName:"ClipSidebar"};l.__docgenInfo={description:"",methods:[],displayName:"CondensedItems"};t.__docgenInfo={description:"",methods:[],displayName:"TimelineBreak"};r.__docgenInfo={description:"",methods:[],displayName:"WithInlineLinks"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Timeline clipSidebar>
    <Timeline.Item>
      <Timeline.Badge>
        <Octicon icon={GitCommitIcon} aria-label="Commit" />
      </Timeline.Badge>
      <Timeline.Body>This is a message</Timeline.Body>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Badge>
        <Octicon icon={GitCommitIcon} aria-label="Commit" />
      </Timeline.Badge>
      <Timeline.Body>This is a message</Timeline.Body>
    </Timeline.Item>
  </Timeline>`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <Timeline>
    <Timeline.Item condensed>
      <Timeline.Badge>
        <Octicon icon={GitCommitIcon} aria-label="Commit" />
      </Timeline.Badge>
      <Timeline.Body>This is a message</Timeline.Body>
    </Timeline.Item>
    <Timeline.Item condensed>
      <Timeline.Badge>
        <Octicon icon={GitCommitIcon} aria-label="Commit" />
      </Timeline.Badge>
      <Timeline.Body>This is a message</Timeline.Body>
    </Timeline.Item>
  </Timeline>`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Timeline>
    <Timeline.Item>
      <Timeline.Badge className={classes.BadgeWithDoneBackground}>
        <Octicon icon={GitMergeIcon} color="fg.onEmphasis" aria-label="Merged" />
      </Timeline.Badge>
      <Timeline.Body>This is a message</Timeline.Body>
    </Timeline.Item>
    <Timeline.Break />
    <Timeline.Item>
      <Timeline.Badge>
        <Octicon icon={GitBranchIcon} aria-label="Branch" />
      </Timeline.Badge>
      <Timeline.Body>This is a message</Timeline.Body>
    </Timeline.Item>
  </Timeline>`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <Timeline>
    <Timeline.Item>
      <Timeline.Badge>
        <Octicon icon={GitCommitIcon} aria-label="Commit" />
      </Timeline.Badge>
      <Timeline.Body>
        <Link href="#" className={classes.LinkWithBoldStyle} muted>
          Monalisa
        </Link>
        enabled auto-merge (squash)
      </Timeline.Body>
    </Timeline.Item>
  </Timeline>`,...r.parameters?.docs?.source}}};const L=["ClipSidebar","CondensedItems","TimelineBreak","WithInlineLinks"];export{o as ClipSidebar,l as CondensedItems,t as TimelineBreak,r as WithInlineLinks,L as __namedExportsOrder,W as default};
