import{j as e,r as L}from"./iframe-Cfz2vXeE.js";import{a6 as N,E,x as z,_ as i,a5 as V}from"./index.esm-C1WN7kEu.js";import{S as A}from"./Stack--yR6jd9X.js";import{a as R}from"./Announce-rCuV3jiI.js";import{a as F}from"./Tooltip-BuVThTi0.js";import{B as a}from"./Button-3sCteC9V.js";import"./preload-helper-D9Z9MdNV.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./Text-BbpDCwQY.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./anchored-position-Cz4CQZsC.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./CounterLabel-DnnBMwbH.js";const pe={title:"Components/Button/Features"},r=()=>e.jsx(a,{variant:"primary",children:"Primary"}),s=()=>e.jsx(a,{variant:"danger",children:"Danger"}),c=()=>e.jsx(a,{variant:"invisible",children:"Invisible"}),l=()=>e.jsx(a,{variant:"link",children:"Button that looks like a link"}),d=()=>e.jsx(a,{leadingVisual:N,children:"Leading visual"}),u=()=>e.jsx(a,{trailingVisual:E,children:"Trailing visual"}),P=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("b",{children:"Accessibility note"}),": If a button is dynamically updated to communicate a change (e.g. an action was successful), please make sure that this is also properly communicated to screen reader users. This may not happen reliably without additional markup considerations. Make sure to choose an approach that is appropriate for your usecase."]}),e.jsxs("p",{children:["Learn more about at"," ",e.jsx("a",{style:{color:"var(--fgColor-link)",textDecoration:"underline"},href:"https://github.com/github/accessibility/blob/8b300b36d8bca28fd5e3e70ffa077a6f8ee65c05/docs/wiki/screen-reader-testing/dynamically-updated-buttons-support-april-2024.md",children:"Staff-only: Dynamically updated button labels"}),"."]})]}),m=()=>{const[n,o]=L.useState(0),t=()=>{o(n+1),R(`Watch ${n+1}`)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:t,count:n,children:"Watch"}),e.jsx(P,{}),e.jsx("p",{children:"In this example, a live region has been implemented to communicate the change."})]})},p=()=>e.jsx(a,{"aria-label":"Comments",leadingVisual:z,count:3}),g=()=>e.jsx(a,{"aria-label":"Comments",leadingVisual:z,count:"3.2k"}),h=()=>{const[n,o]=L.useState(0),t=()=>{o(n+1),R(`Watch ${n+1}`)};return e.jsxs(e.Fragment,{children:[e.jsxs(A,{gap:"normal",wrap:"wrap",direction:"horizontal",children:[e.jsx(a,{onClick:t,count:n,children:"Watch"}),e.jsx(a,{onClick:t,count:n,children:"Watch"}),e.jsx(a,{onClick:t,count:n,children:"Watch"}),e.jsx(a,{onClick:t,variant:"primary",disabled:!0,count:n,children:"Watch"}),e.jsx(a,{onClick:t,variant:"danger",count:n,children:"Watch"}),e.jsx(a,{onClick:t,variant:"danger",disabled:!0,count:n,children:"Watch"}),e.jsx(a,{onClick:t,variant:"invisible",count:n,children:"Watch"}),e.jsx(a,{onClick:t,variant:"invisible",disabled:!0,count:n,children:"Watch"})]}),e.jsx(P,{}),e.jsx("p",{children:"In these examples, a live region has been implemented to communicate the change."})]})},x=()=>e.jsx(a,{trailingAction:i,children:"Trailing action"}),b=()=>e.jsx(a,{block:!0,children:"Default"}),B=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"1rem"},children:[e.jsx(a,{disabled:!0,children:"Default"}),e.jsx(a,{variant:"primary",disabled:!0,children:"Primary"}),e.jsx(a,{variant:"danger",disabled:!0,children:"Danger"}),e.jsx(a,{variant:"invisible",disabled:!0,children:"Invisible"})]}),v=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"1rem"},children:[e.jsx(a,{inactive:!0,children:"Default"}),e.jsx(a,{variant:"primary",inactive:!0,children:"Primary"}),e.jsx(a,{variant:"danger",inactive:!0,children:"Danger"}),e.jsx(a,{variant:"invisible",inactive:!0,children:"Invisible"})]}),f=()=>e.jsx(a,{size:"small",children:"Default"}),y=()=>e.jsx(a,{size:"medium",children:"Default"}),I=()=>e.jsx(a,{size:"large",children:"Default"}),j=()=>e.jsx(a,{loading:!0,children:"Default"}),C=()=>e.jsx(a,{loading:!0,loadingAnnouncement:"This is a custom loading announcement",children:"Default"}),T=()=>e.jsx(a,{loading:!0,leadingVisual:V,children:"Export"}),k=()=>e.jsx(a,{loading:!0,trailingVisual:V,children:"Export"}),_=()=>e.jsx(a,{loading:!0,trailingAction:i,children:"Export dropdown"}),w=()=>{const[n,o]=L.useState(!1),t=()=>{o(!0)};return e.jsx(a,{loading:n,onClick:t,leadingVisual:V,children:"Export"})},W=()=>e.jsxs(A,{style:{width:"200px"},children:[e.jsx(a,{labelWrap:!0,children:"This button label will wrap if the label is too long"}),e.jsx(a,{size:"small",labelWrap:!0,children:"This small button label will wrap if the label is too long"}),e.jsx(a,{size:"large",labelWrap:!0,children:"This large button label will wrap if the label is too long"}),e.jsx(a,{labelWrap:!0,leadingVisual:N,trailingVisual:E,children:"This button label will wrap if the label is too long"})]}),D=()=>e.jsx(F,{text:"Action unavailable: an error occurred while loading repository permissions",direction:"n",children:e.jsx(a,{inactive:!0,children:"Review changes"})}),S=()=>e.jsxs(A,{align:"start",children:[e.jsx(a,{"aria-expanded":!0,trailingAction:i,children:"Review changes"}),e.jsx(a,{"aria-expanded":!0,trailingAction:i,variant:"primary",children:"Review changes"}),e.jsx(a,{"aria-expanded":!0,trailingAction:i,variant:"invisible",children:"Review changes"}),e.jsx(a,{"aria-expanded":!0,trailingAction:i,variant:"danger",children:"Review changes"})]});r.__docgenInfo={description:"",methods:[],displayName:"Primary"};s.__docgenInfo={description:"",methods:[],displayName:"Danger"};c.__docgenInfo={description:"",methods:[],displayName:"Invisible"};l.__docgenInfo={description:"",methods:[],displayName:"Link"};d.__docgenInfo={description:"",methods:[],displayName:"LeadingVisual"};u.__docgenInfo={description:"",methods:[],displayName:"TrailingVisual"};m.__docgenInfo={description:"",methods:[],displayName:"TrailingCounter"};p.__docgenInfo={description:"",methods:[],displayName:"TrailingCounterWithNoText"};g.__docgenInfo={description:"",methods:[],displayName:"TrailingCounterWithHumanFormat"};h.__docgenInfo={description:"",methods:[],displayName:"TrailingCounterAllVariants"};x.__docgenInfo={description:"",methods:[],displayName:"TrailingAction"};b.__docgenInfo={description:"",methods:[],displayName:"Block"};B.__docgenInfo={description:"",methods:[],displayName:"Disabled"};v.__docgenInfo={description:"",methods:[],displayName:"Inactive"};f.__docgenInfo={description:"",methods:[],displayName:"Small"};y.__docgenInfo={description:"",methods:[],displayName:"Medium"};I.__docgenInfo={description:"",methods:[],displayName:"Large"};j.__docgenInfo={description:"",methods:[],displayName:"Loading"};C.__docgenInfo={description:"",methods:[],displayName:"LoadingCustomAnnouncement"};T.__docgenInfo={description:"",methods:[],displayName:"LoadingWithLeadingVisual"};k.__docgenInfo={description:"",methods:[],displayName:"LoadingWithTrailingVisual"};_.__docgenInfo={description:"",methods:[],displayName:"LoadingWithTrailingAction"};w.__docgenInfo={description:"",methods:[],displayName:"LoadingTrigger"};W.__docgenInfo={description:"",methods:[],displayName:"LabelWrap"};D.__docgenInfo={description:"",methods:[],displayName:"InactiveButtonWithTooltip"};S.__docgenInfo={description:"",methods:[],displayName:"ExpandedButton"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'() => <Button variant="primary">Primary</Button>',...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'() => <Button variant="danger">Danger</Button>',...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'() => <Button variant="invisible">Invisible</Button>',...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'() => <Button variant="link">Button that looks like a link</Button>',...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => <Button leadingVisual={HeartIcon}>Leading visual</Button>",...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"() => <Button trailingVisual={EyeIcon}>Trailing visual</Button>",...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
    announce(\`Watch \${count + 1}\`);
  };
  return <>
      <Button onClick={onClick} count={count}>
        Watch
      </Button>
      <AccessibilityNote />
      <p>In this example, a live region has been implemented to communicate the change.</p>
    </>;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'() => <Button aria-label="Comments" leadingVisual={CommentIcon} count={3} />',...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'() => <Button aria-label="Comments" leadingVisual={CommentIcon} count="3.2k" />',...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
    announce(\`Watch \${count + 1}\`);
  };
  return <>
      <Stack gap="normal" wrap="wrap" direction="horizontal">
        <Button onClick={onClick} count={count}>
          Watch
        </Button>
        <Button onClick={onClick} count={count}>
          Watch
        </Button>
        <Button onClick={onClick} count={count}>
          Watch
        </Button>
        <Button onClick={onClick} variant="primary" disabled count={count}>
          Watch
        </Button>
        <Button onClick={onClick} variant="danger" count={count}>
          Watch
        </Button>
        <Button onClick={onClick} variant="danger" disabled count={count}>
          Watch
        </Button>
        <Button onClick={onClick} variant="invisible" count={count}>
          Watch
        </Button>
        <Button onClick={onClick} variant="invisible" disabled count={count}>
          Watch
        </Button>
      </Stack>
      <AccessibilityNote />
      <p>In these examples, a live region has been implemented to communicate the change.</p>
    </>;
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"() => <Button trailingAction={TriangleDownIcon}>Trailing action</Button>",...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"() => <Button block>Default</Button>",...b.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem'
}}>
    <Button disabled>Default</Button>
    <Button variant="primary" disabled>
      Primary
    </Button>
    <Button variant="danger" disabled>
      Danger
    </Button>
    <Button variant="invisible" disabled>
      Invisible
    </Button>
  </div>`,...B.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem'
}}>
    <Button inactive>Default</Button>
    <Button variant="primary" inactive>
      Primary
    </Button>
    <Button variant="danger" inactive>
      Danger
    </Button>
    <Button variant="invisible" inactive>
      Invisible
    </Button>
  </div>`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'() => <Button size="small">Default</Button>',...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:'() => <Button size="medium">Default</Button>',...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:'() => <Button size="large">Default</Button>',...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"() => <Button loading>Default</Button>",...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <Button loading loadingAnnouncement="This is a custom loading announcement">
    Default
  </Button>`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => <Button loading leadingVisual={DownloadIcon}>
    Export
  </Button>`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => <Button loading trailingVisual={DownloadIcon}>
    Export
  </Button>`,...k.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => <Button loading trailingAction={TriangleDownIcon}>
    Export dropdown
  </Button>`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
  };
  return <Button loading={isLoading} onClick={handleClick} leadingVisual={DownloadIcon}>
      Export
    </Button>;
}`,...w.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <Stack style={{
    width: '200px'
  }}>
      <Button labelWrap>This button label will wrap if the label is too long</Button>
      <Button size="small" labelWrap>
        This small button label will wrap if the label is too long
      </Button>
      <Button size="large" labelWrap>
        This large button label will wrap if the label is too long
      </Button>
      <Button labelWrap leadingVisual={HeartIcon} trailingVisual={EyeIcon}>
        This button label will wrap if the label is too long
      </Button>
    </Stack>;
}`,...W.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => <Tooltip text="Action unavailable: an error occurred while loading repository permissions" direction="n">
    <Button inactive>Review changes</Button>
  </Tooltip>`,...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => <Stack align="start">
    <Button aria-expanded trailingAction={TriangleDownIcon}>
      Review changes
    </Button>
    <Button aria-expanded trailingAction={TriangleDownIcon} variant="primary">
      Review changes
    </Button>
    <Button aria-expanded trailingAction={TriangleDownIcon} variant="invisible">
      Review changes
    </Button>
    <Button aria-expanded trailingAction={TriangleDownIcon} variant="danger">
      Review changes
    </Button>
  </Stack>`,...S.parameters?.docs?.source}}};const ge=["Primary","Danger","Invisible","Link","LeadingVisual","TrailingVisual","TrailingCounter","TrailingCounterWithNoText","TrailingCounterWithHumanFormat","TrailingCounterAllVariants","TrailingAction","Block","Disabled","Inactive","Small","Medium","Large","Loading","LoadingCustomAnnouncement","LoadingWithLeadingVisual","LoadingWithTrailingVisual","LoadingWithTrailingAction","LoadingTrigger","LabelWrap","InactiveButtonWithTooltip","ExpandedButton"];export{b as Block,s as Danger,B as Disabled,S as ExpandedButton,v as Inactive,D as InactiveButtonWithTooltip,c as Invisible,W as LabelWrap,I as Large,d as LeadingVisual,l as Link,j as Loading,C as LoadingCustomAnnouncement,w as LoadingTrigger,T as LoadingWithLeadingVisual,_ as LoadingWithTrailingAction,k as LoadingWithTrailingVisual,y as Medium,r as Primary,f as Small,x as TrailingAction,m as TrailingCounter,h as TrailingCounterAllVariants,g as TrailingCounterWithHumanFormat,p as TrailingCounterWithNoText,u as TrailingVisual,ge as __namedExportsOrder,pe as default};
