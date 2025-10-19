import{d as f,j as r}from"./iframe-Cfz2vXeE.js";import{P as d}from"./Placeholder-CWr6vJjZ.js";import{S as o}from"./SplitPageLayout-BKOjniI7.js";import"./preload-helper-D9Z9MdNV.js";import"./PageLayout-9NXxh8HL.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./environment-DRRHKtsv.js";import"./useOverflow-CIpObA8I.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";const N={title:"Components/SplitPageLayout",parameters:{layout:"fullscreen",controls:{expanded:!0}},argTypes:{"Render header?":{type:"boolean",defaultValue:!0,table:{category:"Debug"}},"Render pane?":{type:"boolean",defaultValue:!0,table:{category:"Debug"}},"Render footer?":{type:"boolean",defaultValue:!0,table:{category:"Debug"}},"Header placeholder height":{type:"number",defaultValue:64,table:{category:"Debug"}},"Pane placeholder height":{type:"number",defaultValue:200,table:{category:"Debug"}},"Content placeholder height":{type:"number",defaultValue:400,table:{category:"Debug"}},"Footer placeholder height":{type:"number",defaultValue:64,table:{category:"Debug"}},"Header.divider.regular":{type:{name:"enum",value:["none","line"]},defaultValue:"line",control:{type:"radio"},table:{category:"Header props"}},"Header.divider.narrow":{type:{name:"enum",value:["none","line","filled"]},defaultValue:"line",control:{type:"radio"},table:{category:"Header props"}},"Header.divider.wide":{type:{name:"enum",value:["none","line"]},defaultValue:"line",control:{type:"radio"},table:{category:"Header props"}},"Header.padding":{type:{name:"enum",value:["none","condensed","normal"]},defaultValue:"normal",control:{type:"radio"},table:{category:"Header props"}},"Header.hidden.regular":{type:"boolean",defaultValue:!1,table:{category:"Header props"}},"Header.hidden.narrow":{type:"boolean",defaultValue:!1,table:{category:"Header props"}},"Header.hidden.wide":{type:"boolean",defaultValue:!1,table:{category:"Header props"}},"Content.width":{type:{name:"enum",value:["full","medium","large","xlarge"]},defaultValue:"xlarge",control:{type:"radio"},table:{category:"Content props"}},"Content.padding":{type:{name:"enum",value:["none","condensed","normal"]},defaultValue:"normal",control:{type:"radio"},table:{category:"Content props"}},"Content.hidden.regular":{type:"boolean",defaultValue:!1,table:{category:"Content props"}},"Content.hidden.narrow":{type:"boolean",defaultValue:!1,table:{category:"Content props"}},"Content.hidden.wide":{type:"boolean",defaultValue:!1,table:{category:"Content props"}},"Pane.position.regular":{type:{name:"enum",value:["start","end"]},defaultValue:"start",control:{type:"radio"},table:{category:"Pane props"}},"Pane.id":{type:"string",defaultValue:"customId",table:{category:"Pane props"}},"Pane.position.narrow":{type:{name:"enum",value:["start","end"]},defaultValue:"start",control:{type:"radio"},table:{category:"Pane props"}},"Pane.position.wide":{type:{name:"enum",value:["start","end"]},defaultValue:"start",control:{type:"radio"},table:{category:"Pane props"}},"Pane.width":{type:{name:"enum",value:["small","medium","large"]},defaultValue:"medium",control:{type:"radio"},table:{category:"Pane props"}},"Pane.minWidth":{type:"number",defaultValue:256,table:{category:"Pane props"}},"Pane.sticky":{type:"boolean",defaultValue:!0,table:{category:"Pane props"}},"Pane.resizable":{type:"boolean",defaultValue:!1,table:{category:"Pane props"}},"Pane.padding":{type:{name:"enum",value:["none","condensed","normal"]},defaultValue:"normal",control:{type:"radio"},table:{category:"Pane props"}},"Pane.divider.regular":{type:{name:"enum",value:["none","line"]},defaultValue:"line",control:{type:"radio"},table:{category:"Pane props"}},"Pane.divider.narrow":{type:{name:"enum",value:["none","line","filled"]},defaultValue:"line",control:{type:"radio"},table:{category:"Pane props"}},"Pane.divider.wide":{type:{name:"enum",value:["none","line"]},defaultValue:"line",control:{type:"radio"},table:{category:"Pane props"}},"Footer.divider.regular":{type:{name:"enum",value:["none","line"]},defaultValue:"line",control:{type:"radio"},table:{category:"Footer props"}},"Footer.divider.narrow":{type:{name:"enum",value:["none","line","filled"]},defaultValue:"line",control:{type:"radio"},table:{category:"Footer props"}},"Footer.divider.wide":{type:{name:"enum",value:["none","line"]},defaultValue:"line",control:{type:"radio"},table:{category:"Footer props"}},"Footer.padding":{type:{name:"enum",value:["none","condensed","normal"]},defaultValue:"normal",control:{type:"radio"},table:{category:"Footer props"}},"Footer.hidden.regular":{type:"boolean",defaultValue:!1,table:{category:"Footer props"}},"Footer.hidden.narrow":{type:"boolean",defaultValue:!1,table:{category:"Footer props"}},"Footer.hidden.wide":{type:"boolean",defaultValue:!1,table:{category:"Footer props"}}}},v=e=>{const a=f.c(22);let t;a[0]!==e?(t=e["Render header?"]?r.jsx(o.Header,{padding:e["Header.padding"],divider:{narrow:e["Header.divider.narrow"],regular:e["Header.divider.regular"],wide:e["Header.divider.wide"]},hidden:{narrow:e["Header.hidden.narrow"],regular:e["Header.hidden.regular"],wide:e["Header.hidden.wide"]},children:r.jsx(d,{height:e["Header placeholder height"],label:"Header"})}):null,a[0]=e,a[1]=t):t=a[1];const n=e["Content.width"],l=e["Content.padding"],m=e["Content.hidden.narrow"],P=e["Content.hidden.regular"],b=e["Content.hidden.wide"];let i;a[2]!==m||a[3]!==P||a[4]!==b?(i={narrow:m,regular:P,wide:b},a[2]=m,a[3]=P,a[4]=b,a[5]=i):i=a[5];const w=e["Content placeholder height"];let p;a[6]!==w?(p=r.jsx(d,{height:w,label:"Content"}),a[6]=w,a[7]=p):p=a[7];let u;a[8]!==n||a[9]!==l||a[10]!==i||a[11]!==p?(u=r.jsx(o.Content,{width:n,padding:l,hidden:i,children:p}),a[8]=n,a[9]=l,a[10]=i,a[11]=p,a[12]=u):u=a[12];let g;a[13]!==e?(g=e["Render pane?"]?r.jsx(o.Pane,{resizable:e["Pane.resizable"],position:{narrow:e["Pane.position.narrow"],regular:e["Pane.position.regular"],wide:e["Pane.position.wide"]},width:e["Pane.width"],minWidth:e["Pane.minWidth"],sticky:e["Pane.sticky"],padding:e["Pane.padding"],divider:{narrow:e["Pane.divider.narrow"],regular:e["Pane.divider.regular"],wide:e["Pane.divider.wide"]},hidden:{narrow:e["Pane.hidden.narrow"],regular:e["Pane.hidden.regular"],wide:e["Pane.hidden.wide"]},id:e["Pane.id"],children:r.jsx(d,{height:e["Pane placeholder height"],label:"Pane"})}):null,a[13]=e,a[14]=g):g=a[14];let s;a[15]!==e?(s=e["Render footer?"]?r.jsx(o.Footer,{padding:e["Footer.padding"],divider:{narrow:e["Footer.divider.narrow"],regular:e["Footer.divider.regular"],wide:e["Footer.divider.wide"]},hidden:{narrow:e["Footer.hidden.narrow"],regular:e["Footer.hidden.regular"],wide:e["Footer.hidden.wide"]},children:r.jsx(d,{height:e["Footer placeholder height"],label:"Footer"})}):null,a[15]=e,a[16]=s):s=a[16];let c;return a[17]!==t||a[18]!==g||a[19]!==s||a[20]!==u?(c=r.jsxs(o,{children:[t,u,g,s]}),a[17]=t,a[18]=g,a[19]=s,a[20]=u,a[21]=c):c=a[21],c},h=()=>{const e=f.c(4);let a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=r.jsx(o.Header,{children:r.jsx(d,{label:"Header",height:100})}),e[0]=a):a=e[0];let t;e[1]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx(o.Pane,{position:"start","aria-label":"Pane",children:r.jsx(d,{label:"Pane",height:400})}),e[1]=t):t=e[1];let n;e[2]===Symbol.for("react.memo_cache_sentinel")?(n=r.jsx(o.Content,{children:r.jsx(d,{label:"Content",height:600})}),e[2]=n):n=e[2];let l;return e[3]===Symbol.for("react.memo_cache_sentinel")?(l=r.jsxs(o,{children:[a,t,n,r.jsx(o.Footer,{children:r.jsx(d,{label:"Footer",height:100})})]}),e[3]=l):l=e[3],l},y=v.bind({});h.__docgenInfo={description:"",methods:[],displayName:"Default"};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <SplitPageLayout>
    <SplitPageLayout.Header>
      <Placeholder label="Header" height={100} />
    </SplitPageLayout.Header>
    <SplitPageLayout.Pane position="start" aria-label="Pane">
      <Placeholder label="Pane" height={400} />
    </SplitPageLayout.Pane>
    <SplitPageLayout.Content>
      <Placeholder label="Content" height={600} />
    </SplitPageLayout.Content>
    <SplitPageLayout.Footer>
      <Placeholder label="Footer" height={100} />
    </SplitPageLayout.Footer>
  </SplitPageLayout>`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <SplitPageLayout>
    {args['Render header?'] ? <SplitPageLayout.Header padding={args['Header.padding']} divider={{
    narrow: args['Header.divider.narrow'],
    regular: args['Header.divider.regular'],
    wide: args['Header.divider.wide']
  }} hidden={{
    narrow: args['Header.hidden.narrow'],
    regular: args['Header.hidden.regular'],
    wide: args['Header.hidden.wide']
  }}>
        <Placeholder height={args['Header placeholder height']} label="Header" />
      </SplitPageLayout.Header> : null}
    <SplitPageLayout.Content width={args['Content.width']} padding={args['Content.padding']} hidden={{
    narrow: args['Content.hidden.narrow'],
    regular: args['Content.hidden.regular'],
    wide: args['Content.hidden.wide']
  }}>
      <Placeholder height={args['Content placeholder height']} label="Content" />
    </SplitPageLayout.Content>
    {args['Render pane?'] ? <SplitPageLayout.Pane resizable={args['Pane.resizable']} position={{
    narrow: args['Pane.position.narrow'],
    regular: args['Pane.position.regular'],
    wide: args['Pane.position.wide']
  }} width={args['Pane.width']} minWidth={args['Pane.minWidth']} sticky={args['Pane.sticky']} padding={args['Pane.padding']} divider={{
    narrow: args['Pane.divider.narrow'],
    regular: args['Pane.divider.regular'],
    wide: args['Pane.divider.wide']
  }} hidden={{
    narrow: args['Pane.hidden.narrow'],
    regular: args['Pane.hidden.regular'],
    wide: args['Pane.hidden.wide']
  }} id={args['Pane.id']}>
        <Placeholder height={args['Pane placeholder height']} label="Pane" />
      </SplitPageLayout.Pane> : null}
    {args['Render footer?'] ? <SplitPageLayout.Footer padding={args['Footer.padding']} divider={{
    narrow: args['Footer.divider.narrow'],
    regular: args['Footer.divider.regular'],
    wide: args['Footer.divider.wide']
  }} hidden={{
    narrow: args['Footer.hidden.narrow'],
    regular: args['Footer.hidden.regular'],
    wide: args['Footer.hidden.wide']
  }}>
        <Placeholder height={args['Footer placeholder height']} label="Footer" />
      </SplitPageLayout.Footer> : null}
  </SplitPageLayout>`,...y.parameters?.docs?.source}}};const O=["Default","Playground"];export{h as Default,y as Playground,O as __namedExportsOrder,N as default};
