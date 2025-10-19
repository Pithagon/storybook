import{j as s,d as u,r as d}from"./iframe-Cfz2vXeE.js";import{A as o}from"./AriaStatus-CzZh6U-X.js";import{V as p}from"./VisuallyHidden-BShfgJrZ.js";import"./preload-helper-D9Z9MdNV.js";import"./Announce-rCuV3jiI.js";const x={title:"Experimental/Components/AriaStatus/Features",component:o},i={name:"VisuallyHidden",render:()=>s.jsxs(s.Fragment,{children:[s.jsx("p",{children:"This is an example"}),s.jsx(p,{children:s.jsx(o,{children:"A visually hidden message"})})]})},t=()=>{const e=u.c(4),[l,c]=d.useState("Default message");let a,r;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=()=>{const m=setInterval(()=>{c(`Last updated at ${new Date().toLocaleTimeString()}`)},5e3);return()=>{clearInterval(m)}},r=[],e[0]=a,e[1]=r):(a=e[0],r=e[1]),d.useEffect(a,r);let n;return e[2]!==l?(n=s.jsx(o,{delayMs:1e3,children:l}),e[2]=l,e[3]=n):n=e[3],n};t.__docgenInfo={description:"",methods:[],displayName:"WithDelay"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'VisuallyHidden',
  render: () => {
    return <>
        <p>This is an example</p>
        <VisuallyHidden>
          <AriaStatus>A visually hidden message</AriaStatus>
        </VisuallyHidden>
      </>;
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [message, setMessage] = useState('Default message');
  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(\`Last updated at \${new Date().toLocaleTimeString()}\`);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <AriaStatus delayMs={1000}>{message}</AriaStatus>;
}`,...t.parameters?.docs?.source}}};const A=["VisuallyHiddenStory","WithDelay"];export{i as VisuallyHiddenStory,t as WithDelay,A as __namedExportsOrder,x as default};
