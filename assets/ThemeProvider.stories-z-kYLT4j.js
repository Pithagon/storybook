import{T as l,d as c,j as r,B as u,b as f}from"./iframe-Cfz2vXeE.js";import"./preload-helper-D9Z9MdNV.js";const x="prc-stories-ThemedContainer-ZT5NS",y="prc-stories-AutoContainer-ncCzR",p={ThemedContainer:x,AutoContainer:y},C={title:"Behaviors/ThemeProvider",component:l,parameters:{disableThemeDecorator:!0},argTypes:{theme:{table:{disable:!0}}}};function h(){const e=c.c(2),{colorScheme:o}=f();let s;return e[0]!==o?(s=r.jsxs("span",{children:["Active color scheme: ",o]}),e[0]=o,e[1]=s):s=e[1],s}const a=e=>{const o=c.c(3);let s;o[0]===Symbol.for("react.memo_cache_sentinel")?(s=r.jsx(u,{children:r.jsx(h,{})}),o[0]=s):s=o[0];let t;return o[1]!==e?(t=r.jsx(l,{...e,children:s}),o[1]=e,o[2]=t):t=o[2],t};a.args={colorMode:"day",dayScheme:"light",nightScheme:"dark"};function S(){const e=c.c(1);let o;return e[0]===Symbol.for("react.memo_cache_sentinel")?(o=r.jsx(l,{colorMode:"night",children:r.jsxs("div",{className:p.ThemedContainer,children:["Always night mode (",r.jsx(h,{}),")"]})}),e[0]=o):o=e[0],o}function j(){const e=c.c(3),{resolvedColorMode:o}=f(),s=o==="day"?"night":"day";let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsxs("div",{className:p.ThemedContainer,children:["Always inverse of parent mode (",r.jsx(h,{}),")"]}),e[0]=t):t=e[0];let n;return e[1]!==s?(n=r.jsx(l,{colorMode:s,children:t}),e[1]=s,e[2]=n):n=e[2],n}const i=e=>{const o=c.c(3);let s;o[0]===Symbol.for("react.memo_cache_sentinel")?(s=r.jsxs(u,{children:[r.jsx(h,{}),r.jsx(S,{}),r.jsx(j,{})]}),o[0]=s):s=o[0];let t;return o[1]!==e?(t=r.jsx(l,{...e,children:s}),o[1]=e,o[2]=t):t=o[2],t},v=()=>{const e=c.c(5),{colorMode:o,resolvedColorMode:s}=f();let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx("br",{}),e[0]=t):t=e[0];let n;e[1]===Symbol.for("react.memo_cache_sentinel")?(n=r.jsx("br",{}),e[1]=n):n=e[1];let m;return e[2]!==o||e[3]!==s?(m=r.jsxs("div",{className:p.AutoContainer,children:["colorMode: ",o," ",t,"resolvedColorMode: ",s," ",n]}),e[2]=o,e[3]=s,e[4]=m):m=e[4],m},d=()=>{const e=c.c(1);let o;return e[0]===Symbol.for("react.memo_cache_sentinel")?(o=r.jsx(l,{colorMode:"auto",children:r.jsx(u,{children:r.jsx(v,{})})}),e[0]=o):o=e[0],o};a.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"Nested"};d.__docgenInfo={description:"",methods:[],displayName:"Auto"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <ThemeProvider {...args}>
      <BaseStyles>
        <ActiveColorScheme />
      </BaseStyles>
    </ThemeProvider>;
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  return <ThemeProvider {...args}>
      <BaseStyles>
        <ActiveColorScheme />
        <NightMode />
        <InverseMode />
      </BaseStyles>
    </ThemeProvider>;
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <ThemeProvider colorMode="auto">
      <BaseStyles>
        <AutoContents />
      </BaseStyles>
    </ThemeProvider>;
}`,...d.parameters?.docs?.source}}};const g=["Default","Nested","Auto"];export{d as Auto,a as Default,i as Nested,g as __namedExportsOrder,C as default};
