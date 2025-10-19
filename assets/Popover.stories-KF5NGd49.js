import{R as T,d as u,c as y,j as p}from"./iframe-Cfz2vXeE.js";import{H as x}from"./Heading-Axc3-HQM.js";import{T as _}from"./Text-BbpDCwQY.js";import{B as C}from"./Button-3sCteC9V.js";import"./preload-helper-D9Z9MdNV.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";const z="prc-Popover-Popover-v1ShS",S="prc-Popover-PopoverContent-nMzFS",j={Popover:z,PopoverContent:S},b=T.forwardRef(function(e,r){const t=u.c(15);let a,i,s,n,l;t[0]!==e?({className:a,caret:l,open:i,relative:n,...s}=e,t[0]=e,t[1]=a,t[2]=i,t[3]=s,t[4]=n,t[5]=l):(a=t[1],i=t[2],s=t[3],n=t[4],l=t[5]);const m=l===void 0?"top":l,g=i?"":void 0,P=n?"":void 0;let d;t[6]!==a?(d=y(a,j.Popover),t[6]=a,t[7]=d):d=t[7];let f;return t[8]!==m||t[9]!==r||t[10]!==s||t[11]!==g||t[12]!==P||t[13]!==d?(f=p.jsx("div",{...s,ref:r,"data-open":g,"data-relative":P,"data-caret":m,className:d}),t[8]=m,t[9]=r,t[10]=s,t[11]=g,t[12]=P,t[13]=d,t[14]=f):f=t[14],f});b.displayName="Popover";const w=o=>{const e=u.c(12);let r,t,a,i;e[0]!==o?({className:r,width:a,height:i,...t}=o,e[0]=o,e[1]=r,e[2]=t,e[3]=a,e[4]=i):(r=e[1],t=e[2],a=e[3],i=e[4]);const s=a===void 0?"small":a,n=i===void 0?"fit-content":i;let l;e[5]!==r?(l=y(r,j.PopoverContent),e[5]=r,e[6]=l):l=e[6];let m;return e[7]!==n||e[8]!==t||e[9]!==l||e[10]!==s?(m=p.jsx("div",{"data-width":s,"data-height":n,className:l,...t}),e[7]=n,e[8]=t,e[9]=l,e[10]=s,e[11]=m):m=e[11],m};w.displayName="Popover.Content";const h=Object.assign(b,{Content:w});b.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{className:{required:!1,tsType:{name:"string"},description:"Class name for custom styling"},caret:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'bottom'
| 'left'
| 'right'
| 'bottom-left'
| 'bottom-right'
| 'top-left'
| 'top-right'
| 'left-bottom'
| 'left-top'
| 'right-bottom'
| 'right-top'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'left-bottom'"},{name:"literal",value:"'left-top'"},{name:"literal",value:"'right-bottom'"},{name:"literal",value:"'right-top'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},relative:{required:!1,tsType:{name:"boolean"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""}}};const A={title:"Components/Popover",component:h},v=()=>{const o=u.c(2);let e;o[0]===Symbol.for("react.memo_cache_sentinel")?(e={marginTop:"var(--base-size-8)"},o[0]=e):e=o[0];let r;return o[1]===Symbol.for("react.memo_cache_sentinel")?(r=p.jsx(h,{relative:!0,open:!0,caret:"top",children:p.jsxs(h.Content,{style:e,children:[p.jsx(x,{style:{fontSize:"var(--text-title-size-small)"},children:"Popover heading"}),p.jsx(_,{as:"p",children:"Message about popovers"}),p.jsx(C,{children:"Got it!"})]})}),o[1]=r):r=o[1],r},c=o=>{const e=u.c(11);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r={marginTop:"var(--base-size-8)"},e[0]=r):r=e[0];const t=o.width||"small";let a,i,s;e[1]===Symbol.for("react.memo_cache_sentinel")?(a=p.jsx(x,{style:{fontSize:"var(--text-title-size-small)"},children:"Popover heading"}),i=p.jsx(_,{as:"p",children:"Message about popovers"}),s=p.jsx(C,{children:"Got it!"}),e[1]=a,e[2]=i,e[3]=s):(a=e[1],i=e[2],s=e[3]);let n;e[4]!==o.height||e[5]!==o.overflow||e[6]!==t?(n=p.jsxs(h.Content,{style:r,width:t,height:o.height,overflow:o.overflow,children:[a,i,s]}),e[4]=o.height,e[5]=o.overflow,e[6]=t,e[7]=n):n=e[7];let l;return e[8]!==o||e[9]!==n?(l=p.jsx(h,{...o,children:n}),e[8]=o,e[9]=n,e[10]=l):l=e[10],l};c.args={caret:"top",open:!0,relative:!0,width:"small",height:"fit-content"};c.argTypes={caret:{control:{type:"radio"},options:["top","bottom","left","right","bottom-left","bottom-right","top-left","top-right","left-bottom","left-top","right-bottom","right-top"]},open:{control:{type:"boolean"}},relative:{control:{type:"boolean"}},width:{control:{type:"radio"},options:["xsmall","small","medium","large","auto","xlarge"]},height:{control:{type:"radio"},options:["small","medium","large","auto","xlarge","fit-content"]}};v.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"Playground"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <Popover relative open={true} caret="top">
    <Popover.Content style={{
    marginTop: 'var(--base-size-8)'
  }}>
      <Heading style={{
      fontSize: 'var(--text-title-size-small)'
    }}>Popover heading</Heading>
      <Text as="p">Message about popovers</Text>
      <Button>Got it!</Button>
    </Popover.Content>
  </Popover>`,...v.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <Popover {...args}>
    <Popover.Content style={{
    marginTop: 'var(--base-size-8)'
  }} width={args.width || 'small'} height={args.height} overflow={args.overflow}>
      <Heading style={{
      fontSize: 'var(--text-title-size-small)'
    }}>Popover heading</Heading>
      <Text as="p">Message about popovers</Text>
      <Button>Got it!</Button>
    </Popover.Content>
  </Popover>`,...c.parameters?.docs?.source}}};const J=["Default","Playground"];export{v as Default,c as Playground,J as __namedExportsOrder,A as default};
