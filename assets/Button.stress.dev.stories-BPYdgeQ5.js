import{j as t}from"./iframe-Cfz2vXeE.js";import{S as a}from"./StressTest--2mSJfiK.js";import{B as n}from"./Button-3sCteC9V.js";import"./preload-helper-D9Z9MdNV.js";import"./index.esm-C1WN7kEu.js";import"./Text-BbpDCwQY.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";const z={title:"StressTests/Components/Button",component:n},i=500,o=()=>t.jsx(a,{componentName:"Button",title:"Label update",description:"Update the label a large number of times.",totalIterations:i,renderIteration:e=>t.jsxs("div",{children:[t.jsx(n,{variant:"primary",size:"large",onClick:()=>{},children:`Button ${e+1}`}),t.jsx(n,{variant:"default",size:"medium",onClick:()=>{},children:`Button ${e+1}`}),t.jsx(n,{variant:"danger",size:"small",onClick:()=>{},children:`Button ${e+1}`})]})}),r=()=>t.jsx(a,{componentName:"Button",title:"Count update",description:"Update the count a large number of times.",totalIterations:i,renderIteration:e=>t.jsxs("div",{children:[t.jsx(n,{variant:"primary",size:"large",onClick:()=>{},count:e,children:"Button"}),t.jsx(n,{variant:"default",size:"medium",onClick:()=>{},count:e,children:"Button"}),t.jsx(n,{variant:"danger",size:"small",onClick:()=>{},count:e,children:"Button"})]})});o.__docgenInfo={description:"",methods:[],displayName:"LabelUpdate"};r.__docgenInfo={description:"",methods:[],displayName:"CountUpdate"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <StressTest componentName="Button" title="Label update" description="Update the label a large number of times." totalIterations={totalIterations} renderIteration={count => <div>
          <Button variant="primary" size="large" onClick={() => {}}>
            {\`Button \${count + 1}\`}
          </Button>
          <Button variant="default" size="medium" onClick={() => {}}>
            {\`Button \${count + 1}\`}
          </Button>
          <Button variant="danger" size="small" onClick={() => {}}>
            {\`Button \${count + 1}\`}
          </Button>
        </div>} />;
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <StressTest componentName="Button" title="Count update" description="Update the count a large number of times." totalIterations={totalIterations} renderIteration={count => <div>
          <Button variant="primary" size="large" onClick={() => {}} count={count}>
            Button
          </Button>
          <Button variant="default" size="medium" onClick={() => {}} count={count}>
            Button
          </Button>
          <Button variant="danger" size="small" onClick={() => {}} count={count}>
            Button
          </Button>
        </div>} />;
}`,...r.parameters?.docs?.source}}};const b=["LabelUpdate","CountUpdate"];export{r as CountUpdate,o as LabelUpdate,b as __namedExportsOrder,z as default};
