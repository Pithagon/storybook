import{d,r as l,j as m}from"./iframe-Cfz2vXeE.js";import{A as c}from"./Announce-rCuV3jiI.js";import"./preload-helper-D9Z9MdNV.js";const x={title:"Experimental/Components/Announce",component:c},t=()=>{const e=d.c(4),[o,u]=l.useState("Default message");let n,s;e[0]===Symbol.for("react.memo_cache_sentinel")?(n=()=>{const i=setInterval(()=>{u(`Last updated at ${new Date().toLocaleTimeString()}`)},5e3);return()=>{clearInterval(i)}},s=[],e[0]=n,e[1]=s):(n=e[0],s=e[1]),l.useEffect(n,s);let r;return e[2]!==o?(r=m.jsx(c,{children:o}),e[2]=o,e[3]=r):r=e[3],r},a={render:e=>m.jsx(c,{...e,children:"Example message"})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [message, setMessage] = useState('Default message');
  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(\`Last updated at \${new Date().toLocaleTimeString()}\`);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <Announce>{message}</Announce>;
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Announce {...args}>Example message</Announce>;
  }
}`,...a.parameters?.docs?.source}}};const E=["Default","Playground"];export{t as Default,a as Playground,E as __namedExportsOrder,x as default};
