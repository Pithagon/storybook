import{d as c,j as p}from"./iframe-Cfz2vXeE.js";import{a}from"./Tooltip-BuVThTi0.js";import{B as d}from"./Button-3sCteC9V.js";import"./preload-helper-D9Z9MdNV.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./Text-BbpDCwQY.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./anchored-position-Cz4CQZsC.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";const y="prc-TooltipV2-TooltipContainer-lJxX1",x={TooltipContainer:y},$={title:"Components/TooltipV2/Playground",component:a,args:{text:"This is the tooltip text",direction:"s",type:"description",keybindingHint:void 0},argTypes:{text:{control:{type:"text"}},direction:{control:{type:"radio"},options:["n","ne","e","se","s","sw","w","nw"]},type:{control:!1},keybindingHint:{control:{type:"text"}}}},i=s=>{const t=c.c(7);let o,e;if(t[0]!==s){const{text:l,type:u,...m}=s;e=l,o=m,t[0]=s,t[1]=o,t[2]=e}else o=t[1],e=t[2];let r;t[3]===Symbol.for("react.memo_cache_sentinel")?(r=p.jsx(d,{children:"Delete"}),t[3]=r):r=t[3];let n;return t[4]!==o||t[5]!==e?(n=p.jsx("div",{className:x.TooltipContainer,children:p.jsx(a,{text:e,type:"description",...o,children:r})}),t[4]=o,t[5]=e,t[6]=n):n=t[6],n};i.__docgenInfo={description:"",methods:[],displayName:"Playground"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  // this is a hack to remove the \`type\` prop from the args because for this example type label is not a valid choice and violates accessibility
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    text,
    type,
    ...rest
  } = args;
  return <div className={classes.TooltipContainer}>
      <Tooltip text={text} type="description" {...rest}>
        <Button>Delete</Button>
      </Tooltip>
    </div>;
}`,...i.parameters?.docs?.source}}};const q=["Playground"];export{i as Playground,q as __namedExportsOrder,$ as default};
