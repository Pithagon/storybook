import{j as n,d as m,r as c}from"./iframe-Cfz2vXeE.js";import{A as l}from"./Announce-rCuV3jiI.js";import{V as p}from"./VisuallyHidden-BShfgJrZ.js";import"./preload-helper-D9Z9MdNV.js";const x={title:"Experimental/Components/Announce/Features",component:l},o={name:"VisuallyHidden",render:()=>n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"This is an example"}),n.jsx(p,{children:n.jsx(l,{children:"A visually hidden message"})})]})},s=()=>{const e=m.c(4),[i,d]=c.useState("Default message");let t,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=()=>{const u=setInterval(()=>{d(`Last updated at ${new Date().toLocaleTimeString()}`)},5e3);return()=>{clearInterval(u)}},a=[],e[0]=t,e[1]=a):(t=e[0],a=e[1]),c.useEffect(t,a);let r;return e[2]!==i?(r=n.jsx(l,{delayMs:1e3,children:i}),e[2]=i,e[3]=r):r=e[3],r};s.__docgenInfo={description:"",methods:[],displayName:"WithDelay"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'VisuallyHidden',
  render: () => {
    return <>
        <p>This is an example</p>
        <VisuallyHidden>
          <Announce>A visually hidden message</Announce>
        </VisuallyHidden>
      </>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [message, setMessage] = useState('Default message');
  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(\`Last updated at \${new Date().toLocaleTimeString()}\`);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <Announce delayMs={1000}>{message}</Announce>;
}`,...s.parameters?.docs?.source}}};const A=["VisuallyHiddenStory","WithDelay"];export{o as VisuallyHiddenStory,s as WithDelay,A as __namedExportsOrder,x as default};
