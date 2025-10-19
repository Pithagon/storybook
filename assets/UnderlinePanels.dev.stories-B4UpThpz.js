import{d,j as a}from"./iframe-Cfz2vXeE.js";import{U as n}from"./UnderlinePanels-1Fer38Tt.js";import"./preload-helper-D9Z9MdNV.js";import"./create-component-3GntSW2q.js";import"./UnderlineTabbedInterface-B-g35VdW.js";import"./CounterLabel-DnnBMwbH.js";import"./VisuallyHidden-BShfgJrZ.js";import"./invariant-Dix8OlSS.js";import"./useResizeObserver-CkcKl7_1.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";const h={title:"Experimental/Components/UnderlinePanels/Dev",component:n,subcomponents:{Tab:n.Tab,Panel:n.Panel}},t=()=>{const l=d.c(1);let e;return l[0]===Symbol.for("react.memo_cache_sentinel")?(e=a.jsxs(n,{"aria-label":"Select a tab",children:[a.jsx(n.Tab,{children:"Tab 1"}),a.jsx(n.Tab,{children:"Tab 2"}),a.jsx(n.Tab,{children:"Tab 3"}),a.jsx(n.Panel,{children:"Panel 1"}),a.jsx(n.Panel,{children:"Panel 2"}),a.jsx(n.Panel,{children:"Panel 3"})]}),l[0]=e):e=l[0],e},r=l=>{const e=d.c(5);let s;e[0]!==l?(s=a.jsx(n.Tab,{...l,children:"Users"}),e[0]=l,e[1]=s):s=e[1];let i;e[2]===Symbol.for("react.memo_cache_sentinel")?(i=a.jsx(n.Panel,{children:"Users Panel"}),e[2]=i):i=e[2];let o;return e[3]!==s?(o=a.jsxs(n,{"aria-label":"Select a tab",children:[s,i]}),e[3]=s,e[4]=o):o=e[4],o};r.args={"aria-selected":!0,counter:"14K"};r.argTypes={"aria-selected":{control:{type:"boolean"}},counter:{control:{type:"text"}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"SingleTabPlayground"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <UnderlinePanels aria-label="Select a tab">
    <UnderlinePanels.Tab>Tab 1</UnderlinePanels.Tab>
    <UnderlinePanels.Tab>Tab 2</UnderlinePanels.Tab>
    <UnderlinePanels.Tab>Tab 3</UnderlinePanels.Tab>
    <UnderlinePanels.Panel>Panel 1</UnderlinePanels.Panel>
    <UnderlinePanels.Panel>Panel 2</UnderlinePanels.Panel>
    <UnderlinePanels.Panel>Panel 3</UnderlinePanels.Panel>
  </UnderlinePanels>`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  return <UnderlinePanels aria-label="Select a tab">
      <UnderlinePanels.Tab {...args}>Users</UnderlinePanels.Tab>
      <UnderlinePanels.Panel>Users Panel</UnderlinePanels.Panel>
    </UnderlinePanels>;
}`,...r.parameters?.docs?.source}}};const g=["Default","SingleTabPlayground"];export{t as Default,r as SingleTabPlayground,g as __namedExportsOrder,h as default};
