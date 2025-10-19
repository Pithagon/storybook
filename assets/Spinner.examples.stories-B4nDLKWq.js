import{d as j,R as x,j as n}from"./iframe-Cfz2vXeE.js";import{S as y}from"./Spinner-CP1_WO7z.js";import{V as I}from"./VisuallyHidden-BShfgJrZ.js";import{A as C}from"./AriaStatus-CzZh6U-X.js";import{B}from"./Button-3sCteC9V.js";import"./preload-helper-D9Z9MdNV.js";import"./Announce-rCuV3jiI.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./defaultSxProp-CTX1ZhUd.js";import"./CounterLabel-DnnBMwbH.js";const _="prc-Spinner-LoadingExample-oTQ-T",E="prc-Spinner-LoadingIndicator-fjeMr",V="prc-Spinner-LoadButton-1l39i",h={LoadingExample:_,LoadingIndicator:E,LoadButton:V},P={title:"Components/Spinner/Examples",component:y};async function b(e){return new Promise(c=>setTimeout(c,e))}const g=()=>{const e=j.c(19),[c,f]=x.useState(!1),[a,S]=x.useState("");let t;e[0]!==c||e[1]!==a?(t="initial",c?t="loading":a&&(t="done"),e[0]=c,e[1]=a,e[2]=t):t=e[2];let m;e[3]!==t?(m=async()=>{t!=="done"&&(f(!0),await b(1e3),S("Some content that had to be loaded."),f(!1))},e[3]=t,e[4]=m):m=e[4];const u=m;let s;e[5]===Symbol.for("react.memo_cache_sentinel")?(s={mb:"1em"},e[5]=s):s=e[5];let i;e[6]!==u?(i=n.jsx(B,{onClick:u,sx:s,children:"Load content"}),e[6]=u,e[7]=i):i=e[7];let o;e[8]!==t?(o=t==="loading"&&n.jsx(y,{}),e[8]=t,e[9]=o):o=e[9];let l;e[10]!==a?(l=n.jsx("p",{children:a}),e[10]=a,e[11]=l):l=e[11];const r=t==="done"&&"Content finished loading";let d;e[12]!==r?(d=n.jsx(I,{children:n.jsx(C,{children:r})}),e[12]=r,e[13]=d):d=e[13];let L;return e[14]!==i||e[15]!==o||e[16]!==l||e[17]!==d?(L=n.jsxs(n.Fragment,{children:[i,o,l,d]}),e[14]=i,e[15]=o,e[16]=l,e[17]=d,e[18]=L):L=e[18],L},p=()=>{const e=j.c(18),[c,f]=x.useState(!1),[a,S]=x.useState("");let t;e[0]!==c||e[1]!==a?(t="initial",c?t="loading":a&&(t="done"),e[0]=c,e[1]=a,e[2]=t):t=e[2];let m;e[3]!==t?(m=async()=>{t!=="done"&&(f(!0),await b(1e3),S("Some content that had to be loaded."),f(!1))},e[3]=t,e[4]=m):m=e[4];const u=m;let s;e[5]!==u?(s=n.jsx(B,{onClick:u,className:h.LoadButton,children:"Load content"}),e[5]=u,e[6]=s):s=e[6];let i;e[7]!==t?(i=t!=="done"&&n.jsxs("div",{className:h.LoadingIndicator,children:[t==="loading"&&n.jsx(y,{size:"small",srText:null}),n.jsx(C,{children:t==="loading"?"Content is loading...":""})]}),e[7]=t,e[8]=i):i=e[8];let o;e[9]!==a?(o=n.jsx("p",{children:a}),e[9]=a,e[10]=o):o=e[10];const l=t==="done"&&"Content finished loading";let r;e[11]!==l?(r=n.jsx(I,{children:n.jsx(C,{children:l})}),e[11]=l,e[12]=r):r=e[12];let d;return e[13]!==s||e[14]!==i||e[15]!==o||e[16]!==r?(d=n.jsxs("div",{className:h.LoadingExample,children:[s,i,o,r]}),e[13]=s,e[14]=i,e[15]=o,e[16]=r,e[17]=d):d=e[17],d};g.__docgenInfo={description:"",methods:[],displayName:"FullLifecycle"};p.__docgenInfo={description:"",methods:[],displayName:"FullLifecycleVisibleLoadingText"};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [loadedContent, setLoadedContent] = React.useState('');
  let state: LoadingState = 'initial';
  if (isLoading) {
    state = 'loading';
  } else if (loadedContent) {
    state = 'done';
  }
  const initiateLoading = async () => {
    if (state === 'done') {
      return;
    }
    setIsLoading(true);
    await wait(1000);
    setLoadedContent('Some content that had to be loaded.');
    setIsLoading(false);
  };
  return <>
      <Button onClick={initiateLoading} sx={{
      mb: '1em'
    }}>
        Load content
      </Button>
      {state === 'loading' && <Spinner />}
      <p>{loadedContent}</p>
      <VisuallyHidden>
        <AriaStatus>{state === 'done' && 'Content finished loading'}</AriaStatus>
      </VisuallyHidden>
    </>;
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [loadedContent, setLoadedContent] = React.useState('');
  let state: LoadingState = 'initial';
  if (isLoading) {
    state = 'loading';
  } else if (loadedContent) {
    state = 'done';
  }
  const initiateLoading = async () => {
    if (state === 'done') {
      return;
    }
    setIsLoading(true);
    await wait(1000);
    setLoadedContent('Some content that had to be loaded.');
    setIsLoading(false);
  };
  return <div className={classes.LoadingExample}>
      <Button onClick={initiateLoading} className={classes.LoadButton}>
        Load content
      </Button>
      {state !== 'done' && <div className={classes.LoadingIndicator}>
          {state === 'loading' && <Spinner size="small" srText={null} />}
          <AriaStatus>{state === 'loading' ? 'Content is loading...' : ''}</AriaStatus>
        </div>}
      <p>{loadedContent}</p>
      <VisuallyHidden>
        <AriaStatus>{state === 'done' && 'Content finished loading'}</AriaStatus>
      </VisuallyHidden>
    </div>;
}`,...p.parameters?.docs?.source}}};const Q=["FullLifecycle","FullLifecycleVisibleLoadingText"];export{g as FullLifecycle,p as FullLifecycleVisibleLoadingText,Q as __namedExportsOrder,P as default};
