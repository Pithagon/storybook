import{d as t,j as i}from"./iframe-Cfz2vXeE.js";import{I as r}from"./InlineMessage-DDmsKysV.js";import"./preload-helper-D9Z9MdNV.js";import"./index.esm-C1WN7kEu.js";const p={title:"Experimental/Components/InlineMessage",component:r},n=()=>{const e=t.c(1);let s;return e[0]===Symbol.for("react.memo_cache_sentinel")?(s=i.jsx(r,{variant:"unavailable",children:"An example inline message"}),e[0]=s):s=e[0],s},a={render(e){return i.jsx(r,{...e,children:"An example inline message"})},argTypes:{size:{controls:{type:"radio"},options:["small","medium"]},variant:{controls:{type:"radio"},options:["critical","success","unavailable","warning"]}},args:{size:"medium",variant:"success"}};n.__docgenInfo={description:"",methods:[],displayName:"Default"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <InlineMessage variant="unavailable">An example inline message</InlineMessage>;
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <InlineMessage {...args}>An example inline message</InlineMessage>;
  },
  argTypes: {
    size: {
      controls: {
        type: 'radio'
      },
      options: ['small', 'medium']
    },
    variant: {
      controls: {
        type: 'radio'
      },
      options: ['critical', 'success', 'unavailable', 'warning']
    }
  },
  args: {
    size: 'medium',
    variant: 'success'
  }
}`,...a.parameters?.docs?.source}}};const d=["Default","Playground"];export{n as Default,a as Playground,d as __namedExportsOrder,p as default};
