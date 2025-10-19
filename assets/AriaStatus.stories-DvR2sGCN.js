import{d,r as c,j as u}from"./iframe-Cfz2vXeE.js";import{A as l}from"./AriaStatus-CzZh6U-X.js";import"./preload-helper-D9Z9MdNV.js";import"./Announce-rCuV3jiI.js";const x={title:"Experimental/Components/AriaStatus",component:l},t=()=>{const e=d.c(4),[o,i]=c.useState("Default message");let a,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=()=>{const m=setInterval(()=>{i(`Last updated at ${new Date().toLocaleTimeString()}`)},5e3);return()=>{clearInterval(m)}},n=[],e[0]=a,e[1]=n):(a=e[0],n=e[1]),c.useEffect(a,n);let r;return e[2]!==o?(r=u.jsx(l,{children:o}),e[2]=o,e[3]=r):r=e[3],r},s={argTypes:{announceOnShow:{control:"boolean"},hidden:{control:"boolean"},delayMs:{control:"number"}},render:e=>u.jsx(l,{...e,children:"Example message"})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [message, setMessage] = useState('Default message');
  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(\`Last updated at \${new Date().toLocaleTimeString()}\`);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <AriaStatus>{message}</AriaStatus>;
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  argTypes: {
    announceOnShow: {
      control: 'boolean'
    },
    hidden: {
      control: 'boolean'
    },
    delayMs: {
      control: 'number'
    }
  },
  render: args => {
    return <AriaStatus {...args}>Example message</AriaStatus>;
  }
}`,...s.parameters?.docs?.source}}};const E=["Default","Playground"];export{t as Default,s as Playground,E as __namedExportsOrder,x as default};
