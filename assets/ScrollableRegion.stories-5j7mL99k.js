import{d as o,j as e}from"./iframe-Cfz2vXeE.js";import{S as n}from"./ScrollableRegion-CKacTlaY.js";import"./preload-helper-D9Z9MdNV.js";import"./useOverflow-CIpObA8I.js";const m={title:"Experimental/Components/ScrollableRegion",component:n},r=()=>{const a=o.c(1);let t;return a[0]===Symbol.for("react.memo_cache_sentinel")?(t=e.jsxs(n,{"aria-label":"Example scrollable region",children:[e.jsx("p",{children:"Example content that triggers overflow."}),e.jsx("p",{style:{whiteSpace:"nowrap"},children:"The content here will not wrap at smaller screen sizes and will trigger the component to set the container as a region, label it, make it focusable, and make it scrollable."})]}),a[0]=t):t=a[0],t},l={render:a=>e.jsxs(n,{...a,children:[e.jsx("p",{children:"Example content that triggers overflow."}),e.jsx("p",{style:{whiteSpace:"nowrap"},children:"The content here will not wrap at smaller screen sizes and will trigger the component to set the container as a region, label it, make it focusable, and make it scrollable."})]}),args:{"aria-label":"Example scrollable region"},argTypes:{"aria-label":{control:"text"},"aria-labelledby":{control:"text"},className:{control:"text"}}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <ScrollableRegion aria-label="Example scrollable region">
      <p>Example content that triggers overflow.</p>
      <p style={{
      whiteSpace: 'nowrap'
    }}>
        The content here will not wrap at smaller screen sizes and will trigger the component to set the container as a
        region, label it, make it focusable, and make it scrollable.
      </p>
    </ScrollableRegion>;
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <ScrollableRegion {...args}>
        <p>Example content that triggers overflow.</p>
        <p style={{
        whiteSpace: 'nowrap'
      }}>
          The content here will not wrap at smaller screen sizes and will trigger the component to set the container as
          a region, label it, make it focusable, and make it scrollable.
        </p>
      </ScrollableRegion>;
  },
  args: {
    'aria-label': 'Example scrollable region'
  },
  argTypes: {
    'aria-label': {
      control: 'text'
    },
    'aria-labelledby': {
      control: 'text'
    },
    className: {
      control: 'text'
    }
  }
}`,...l.parameters?.docs?.source}}};const g=["Default","Playground"];export{r as Default,l as Playground,g as __namedExportsOrder,m as default};
