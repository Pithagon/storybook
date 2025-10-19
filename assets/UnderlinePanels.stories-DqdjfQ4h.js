import{d as b,j as o}from"./iframe-Cfz2vXeE.js";import{U as a}from"./UnderlinePanels-1Fer38Tt.js";import"./preload-helper-D9Z9MdNV.js";import"./create-component-3GntSW2q.js";import"./UnderlineTabbedInterface-B-g35VdW.js";import"./CounterLabel-DnnBMwbH.js";import"./VisuallyHidden-BShfgJrZ.js";import"./invariant-Dix8OlSS.js";import"./useResizeObserver-CkcKl7_1.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";const C={title:"Experimental/Components/UnderlinePanels",component:a,parameters:{controls:{expanded:!0}},argTypes:{"aria-label":{type:{name:"string"}},id:{type:{name:"string"}},loadingCounters:{control:{type:"boolean"}}},args:{"aria-label":"Select a tab",id:"test",loadingCounters:!1}},i=()=>{const n=b.c(3);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=["Tab 1","Tab 2","Tab 3"],n[0]=e):e=n[0];const t=e;let r;n[1]===Symbol.for("react.memo_cache_sentinel")?(r=["Panel 1","Panel 2","Panel 3"],n[1]=r):r=n[1];const l=r;let s;return n[2]===Symbol.for("react.memo_cache_sentinel")?(s=o.jsxs(a,{"aria-label":"Select a tab",children:[t.map(u),l.map(P)]}),n[2]=s):s=n[2],s},c=n=>{const e=b.c(6);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=["Tab 1","Tab 2","Tab 3"],e[0]=t):t=e[0];const r=t;let l;e[1]===Symbol.for("react.memo_cache_sentinel")?(l=["Panel 1","Panel 2","Panel 3"],e[1]=l):l=e[1];const s=l;let m,d;e[2]===Symbol.for("react.memo_cache_sentinel")?(m=r.map(f),d=s.map(_),e[2]=m,e[3]=d):(m=e[2],d=e[3]);let p;return e[4]!==n?(p=o.jsxs(a,{...n,children:[m,d]}),e[4]=n,e[5]=p):p=e[5],p};i.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"Playgound"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
  const panels = ['Panel 1', 'Panel 2', 'Panel 3'];
  return <UnderlinePanels aria-label="Select a tab">
      {tabs.map((tab: string, index: number) => <UnderlinePanels.Tab key={index} aria-selected={index === 0 ? true : undefined}>
          {tab}
        </UnderlinePanels.Tab>)}
      {panels.map((panel: string, index: number) => <UnderlinePanels.Panel key={index}>{panel}</UnderlinePanels.Panel>)}
    </UnderlinePanels>;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
  const panels = ['Panel 1', 'Panel 2', 'Panel 3'];
  return <UnderlinePanels {...args}>
      {tabs.map((tab: string, index: number) => <UnderlinePanels.Tab key={index} aria-selected={index === 0 ? true : undefined}>
          {tab}
        </UnderlinePanels.Tab>)}
      {panels.map((panel: string, index: number) => <UnderlinePanels.Panel key={index}>{panel}</UnderlinePanels.Panel>)}
    </UnderlinePanels>;
}`,...c.parameters?.docs?.source}}};function u(n,e){return o.jsx(a.Tab,{"aria-selected":e===0?!0:void 0,children:n},e)}function P(n,e){return o.jsx(a.Panel,{children:n},e)}function f(n,e){return o.jsx(a.Tab,{"aria-selected":e===0?!0:void 0,children:n},e)}function _(n,e){return o.jsx(a.Panel,{children:n},e)}const D=["Default","Playgound"];export{i as Default,c as Playgound,D as __namedExportsOrder,C as default};
