import{d as c,j as t}from"./iframe-Cfz2vXeE.js";import{S as s}from"./index-D3vEWZM2.js";import{aB as r}from"./index.esm-C1WN7kEu.js";import"./preload-helper-D9Z9MdNV.js";import"./Stack--yR6jd9X.js";const p={title:"Components/Stack/Features",component:s},i=()=>{const e=c.c(3);let n;e[0]===Symbol.for("react.memo_cache_sentinel")?(n={maxWidth:"200px",padding:"var(--base-size-8)"},e[0]=n):n=e[0];let a;e[1]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsxs(s,{direction:"horizontal",gap:"condensed",children:[t.jsx(s.Item,{shrink:!1,children:t.jsx(r,{size:"small"})}),t.jsx(s.Item,{children:"This stack has the leading icon set to prevent shrinking"})]}),e[1]=a):a=e[1];let o;return e[2]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsxs("div",{style:n,children:[a,t.jsxs(s,{direction:"horizontal",gap:"condensed",children:[t.jsx(s.Item,{shrink:!0,children:t.jsx(r,{size:"small"})}),t.jsx(s.Item,{children:"This stack item does not have the icon set to prevent shrinking"})]})]}),e[2]=o):o=e[2],o};i.__docgenInfo={description:"",methods:[],displayName:"ShrinkingStackItems"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <div style={{
  maxWidth: '200px',
  padding: 'var(--base-size-8)'
}}>
    <Stack direction="horizontal" gap="condensed">
      <Stack.Item shrink={false}>
        <ShieldLockIcon size="small" />
      </Stack.Item>
      <Stack.Item>This stack has the leading icon set to prevent shrinking</Stack.Item>
    </Stack>
    <Stack direction="horizontal" gap="condensed">
      <Stack.Item shrink={true}>
        <ShieldLockIcon size="small" />
      </Stack.Item>
      <Stack.Item>This stack item does not have the icon set to prevent shrinking</Stack.Item>
    </Stack>
  </div>`,...i.parameters?.docs?.source}}};const S=["ShrinkingStackItems"];export{i as ShrinkingStackItems,S as __namedExportsOrder,p as default};
