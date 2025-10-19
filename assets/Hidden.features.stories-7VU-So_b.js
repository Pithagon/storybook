import{d,j as i}from"./iframe-Cfz2vXeE.js";import{H as n}from"./Hidden-Bd42JrkY.js";import{B as a}from"./Button-3sCteC9V.js";import"./preload-helper-D9Z9MdNV.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";const j={title:"Experimental/Components/Hidden/Features",component:n},o=()=>{const e=d.c(1);let r;return e[0]===Symbol.for("react.memo_cache_sentinel")?(r=i.jsxs("div",{children:[i.jsx(n,{when:"narrow",children:" This value is shown in regular and wide viewports"}),i.jsx(n,{when:"regular",children:" This value is shown in narrow and wide viewports"}),i.jsx(n,{when:"wide",children:" This value is shown in narrow and regular viewports"})]}),e[0]=r):r=e[0],r},t=()=>{const e=d.c(2);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=i.jsx(n,{when:"narrow",children:i.jsx(a,{variant:"primary",children:"I am visible when the viewport is regular or wide viewport"})}),e[0]=r):r=e[0];let s;return e[1]===Symbol.for("react.memo_cache_sentinel")?(s=i.jsxs("div",{children:[r,i.jsx(n,{when:["regular","wide"],children:i.jsx(a,{variant:"primary",children:"I am visible when the viewport is narrow"})})]}),e[1]=s):s=e[1],s};o.__docgenInfo={description:"",methods:[],displayName:"HideContent"};t.__docgenInfo={description:"",methods:[],displayName:"RenderContentResponsively"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <div>
    <Hidden when="narrow"> This value is shown in regular and wide viewports</Hidden>
    <Hidden when="regular"> This value is shown in narrow and wide viewports</Hidden>
    <Hidden when="wide"> This value is shown in narrow and regular viewports</Hidden>
  </div>`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <div>
    <Hidden when="narrow">
      <Button variant="primary">I am visible when the viewport is regular or wide viewport</Button>
    </Hidden>

    <Hidden when={['regular', 'wide']}>
      <Button variant="primary">I am visible when the viewport is narrow</Button>
    </Hidden>
  </div>`,...t.parameters?.docs?.source}}};const C=["HideContent","RenderContentResponsively"];export{o as HideContent,t as RenderContentResponsively,C as __namedExportsOrder,j as default};
