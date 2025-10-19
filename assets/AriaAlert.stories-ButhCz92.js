import{d as p,r as c,j as i}from"./iframe-Cfz2vXeE.js";import{A as l}from"./AriaAlert-B15br4-e.js";import"./preload-helper-D9Z9MdNV.js";import"./Announce-rCuV3jiI.js";const x={title:"Experimental/Components/AriaAlert",component:l},t=()=>{const e=p.c(4),[o,m]=c.useState("Default message");let r,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=()=>{const u=setInterval(()=>{m(`Last updated at ${new Date().toLocaleTimeString()}`)},5e3);return()=>{clearInterval(u)}},a=[],e[0]=r,e[1]=a):(r=e[0],a=e[1]),c.useEffect(r,a);let s;return e[2]!==o?(s=i.jsx(l,{children:o}),e[2]=o,e[3]=s):s=e[3],s},n={argTypes:{announceOnShow:{control:"boolean"}},render:e=>i.jsx(l,{...e,children:"Example message"})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [message, setMessage] = useState('Default message');
  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(\`Last updated at \${new Date().toLocaleTimeString()}\`);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <AriaAlert>{message}</AriaAlert>;
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  argTypes: {
    announceOnShow: {
      control: 'boolean'
    }
  },
  render: args => {
    return <AriaAlert {...args}>Example message</AriaAlert>;
  }
}`,...n.parameters?.docs?.source}}};const E=["Default","Playground"];export{t as Default,n as Playground,E as __namedExportsOrder,x as default};
