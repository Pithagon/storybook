import{d as g,j as r}from"./iframe-Cfz2vXeE.js";import{ax as p}from"./index.esm-C1WN7kEu.js";import{P as s}from"./index-ynKK-nPk.js";import{S as m}from"./index-D3vEWZM2.js";import"./preload-helper-D9Z9MdNV.js";import"./Stack--yR6jd9X.js";const C={title:"Components/ProgressBar/Examples",component:s},a=()=>{const e=g.c(1);let o;return e[0]===Symbol.for("react.memo_cache_sentinel")?(o=r.jsxs(r.Fragment,{children:[r.jsx(s,{progress:50,"aria-label":"Loading example"}),r.jsx("p",{style:{color:"var(--fgColor-muted)",font:"var(--text-body-shorthand-medium)"},children:"50% completed"})]}),e[0]=o):o=e[0],o},l=()=>{const e=g.c(6);let o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=r.jsx(s.Item,{progress:30,style:{backgroundColor:"var(--bgColor-success-emphasis)"},"aria-labelledby":"done"}),e[0]=o):o=e[0];let t;e[1]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx(s.Item,{progress:15,style:{backgroundColor:"var(--bgColor-accent-emphasis)"},"aria-labelledby":"in-progress"}),e[1]=t):t=e[1];let i;e[2]===Symbol.for("react.memo_cache_sentinel")?(i=r.jsxs(s,{children:[o,t,r.jsx(s.Item,{progress:5,style:{backgroundColor:"var(--bgColor-danger-emphasis)"},"aria-labelledby":"closed"})]}),e[2]=i):i=e[2];let n;e[3]===Symbol.for("react.memo_cache_sentinel")?(n=r.jsxs(m,{direction:"horizontal",gap:"condensed",align:"center",id:"done",children:[r.jsx(p,{fill:"var(--bgColor-success-emphasis)"}),"Done"]}),e[3]=n):n=e[3];let c;e[4]===Symbol.for("react.memo_cache_sentinel")?(c=r.jsxs(m,{direction:"horizontal",gap:"condensed",align:"center",id:"in-progress",children:[r.jsx(p,{fill:"var(--bgColor-accent-emphasis)"}),"In progress"]}),e[4]=c):c=e[4];let d;return e[5]===Symbol.for("react.memo_cache_sentinel")?(d=r.jsxs(r.Fragment,{children:[i,r.jsxs(m,{direction:"horizontal",wrap:"wrap",marginTop:2,children:[n,c,r.jsxs(m,{direction:"horizontal",gap:"condensed",align:"center",id:"closed",children:[r.jsx(p,{fill:"var(--bgColor-danger-emphasis)"}),"Closed"]})]})]}),e[5]=d):d=e[5],d};a.__docgenInfo={description:"",methods:[],displayName:"WithVisibleTextValue"};l.__docgenInfo={description:"",methods:[],displayName:"MultipleSegments"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <>
      <ProgressBar progress={50} aria-label="Loading example" />
      <p style={{
      color: 'var(--fgColor-muted)',
      font: 'var(--text-body-shorthand-medium)'
    }}>50% completed</p>
    </>;
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <>
      <ProgressBar>
        <ProgressBar.Item progress={30} style={{
        backgroundColor: 'var(--bgColor-success-emphasis)'
      }} aria-labelledby="done" />
        <ProgressBar.Item progress={15} style={{
        backgroundColor: 'var(--bgColor-accent-emphasis)'
      }} aria-labelledby="in-progress" />
        <ProgressBar.Item progress={5} style={{
        backgroundColor: 'var(--bgColor-danger-emphasis)'
      }} aria-labelledby="closed" />
      </ProgressBar>
      <Stack direction="horizontal" wrap="wrap" marginTop={2}>
        <Stack direction="horizontal" gap="condensed" align="center" id="done">
          <DotFillIcon fill="var(--bgColor-success-emphasis)" />
          Done
        </Stack>
        <Stack direction="horizontal" gap="condensed" align="center" id="in-progress">
          <DotFillIcon fill="var(--bgColor-accent-emphasis)" />
          In progress
        </Stack>
        <Stack direction="horizontal" gap="condensed" align="center" id="closed">
          <DotFillIcon fill="var(--bgColor-danger-emphasis)" />
          Closed
        </Stack>
      </Stack>
    </>;
}`,...l.parameters?.docs?.source}}};const S=["WithVisibleTextValue","MultipleSegments"];export{l as MultipleSegments,a as WithVisibleTextValue,S as __namedExportsOrder,C as default};
