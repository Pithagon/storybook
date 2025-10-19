import{d as h,r as y,j as n}from"./iframe-Cfz2vXeE.js";import{D as f}from"./Dialog-BYWFp9hz.js";import{c as b}from"./Dialog.stories.module-gj3BsV5I.js";import{T as D}from"./Text-BbpDCwQY.js";import{B as x}from"./Button-3sCteC9V.js";import"./preload-helper-D9Z9MdNV.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./anchored-position-Cz4CQZsC.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./useFocusTrap-CL_Yl_fl.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./event-listener-signal-Pp6mWBoo.js";import"./index.esm-C1WN7kEu.js";import"./useFocusZone-BvuuCBlY.js";import"./focus-zone-ZDpdvBtN.js";import"./Portal-BKCn1yDJ.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./ScrollableRegion-CKacTlaY.js";import"./useOverflow-CIpObA8I.js";const me={title:"Components/Dialog/Dev"},a=n.jsxs(n.Fragment,{children:[n.jsx(D,{className:b.SmallParagraphText,as:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin mauris maximus elit sagittis, nec lobortis ligula elementum. Nam iaculis, urna nec lobortis posuere, eros urna venenatis eros, vel accumsan turpis nunc vitae enim. Maecenas et lorem lectus. Vivamus iaculis tortor eget ante placerat, nec posuere nisl tincidunt. Cras condimentum ante in accumsan ultricies. Morbi quis porta est, sit amet congue augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat nunc id quam tempus, id tincidunt neque venenatis. Mauris fringilla tempor est, vitae fermentum enim elementum vitae. Nullam eleifend odio ut porta efficitur. Phasellus luctus tempus posuere."}),n.jsx(D,{className:b.SmallParagraphText,as:"p",children:"Curabitur scelerisque bibendum faucibus. Duis rhoncus nunc est, at pharetra eros tristique a. Nam sodales turpis lectus, quis faucibus felis fermentum in. Curabitur vel velit vel eros laoreet pharetra. Aenean in facilisis sapien, eu porttitor ex. Donec ultrices ac arcu ut lobortis. Pellentesque vitae rutrum orci. Etiam pretium et enim sit amet scelerisque. Nulla sed odio nec lorem dapibus condimentum at sagittis quam. Sed in ornare ex, sed luctus sem. Mauris a est tellus."})]});function v(t){const e=h.c(5),{title:s,subtitle:o,dialogLabelId:i}=t;if(typeof s=="string"&&typeof o=="string"){let r;e[0]!==s?(r=s.toUpperCase(),e[0]=s,e[1]=r):r=e[1];let l;return e[2]!==i||e[3]!==r?(l=n.jsx(f.Header,{className:"testCustomClassnameColor",children:n.jsx("h1",{id:i,children:r})}),e[2]=i,e[3]=r,e[4]=l):l=e[4],l}return null}function B(t){const e=h.c(2),{children:s}=t;let o;return e[0]!==s?(o=n.jsx(f.Body,{className:"testCustomClassnameColor",children:s}),e[0]=s,e[1]=o):o=e[1],o}function S(t){const e=h.c(4),{footerButtons:s}=t;let o;e[0]!==s?(o=s?n.jsx(f.Buttons,{buttons:s}):null,e[0]=s,e[1]=o):o=e[1];let i;return e[2]!==o?(i=n.jsx(f.Footer,{className:"testCustomClassnameMono",children:o}),e[2]=o,e[3]=i):i=e[3],i}const g=t=>{const e=h.c(11),{width:s,height:o,subtitle:i}=t,[r,l]=y.useState(!0);let u;e[0]===Symbol.for("react.memo_cache_sentinel")?(u=()=>l(!1),e[0]=u):u=e[0];const m=u;let c;e[1]!==r?(c=n.jsx(x,{onClick:()=>l(!r),children:"Show dialog"}),e[1]=r,e[2]=c):c=e[2];let p;e[3]!==o||e[4]!==r||e[5]!==i||e[6]!==s?(p=r&&n.jsx(f,{title:"My Dialog",subtitle:i?"This is a subtitle!":void 0,width:s,height:o,renderHeader:v,renderBody:B,renderFooter:S,onClose:m,footerButtons:[{buttonType:"danger",content:"Delete the universe",onClick:m},{buttonType:"primary",content:"Proceed"}],className:"testCustomClassnameBorder testCustomAnimation",children:a}),e[3]=o,e[4]=r,e[5]=i,e[6]=s,e[7]=p):p=e[7];let C;return e[8]!==c||e[9]!==p?(C=n.jsxs(n.Fragment,{children:[c,p]}),e[8]=c,e[9]=p,e[10]=C):C=e[10],C},d=()=>{const t=h.c(8),[e,s]=y.useState(!1),o=y.useRef(null);let i;t[0]===Symbol.for("react.memo_cache_sentinel")?(i=()=>s(!1),t[0]=i):i=t[0];const r=i;let l;t[1]!==e?(l=n.jsx(x,{ref:o,onClick:()=>s(!e),children:"Show dialog"}),t[1]=e,t[2]=l):l=t[2];let u;t[3]!==e?(u=e&&n.jsx(f,{title:"My Dialog",onClose:r,footerButtons:[{buttonType:"danger",content:"Delete the universe",onClick:r},{buttonType:"primary",content:"Proceed",onClick:r}],children:a}),t[3]=e,t[4]=u):u=t[4];let m;return t[5]!==l||t[6]!==u?(m=n.jsxs(n.Fragment,{children:[l,a,a,a,a,a,a,a,a,a,a,a,u]}),t[5]=l,t[6]=u,t[7]=m):m=t[7],m};d.parameters={layout:"fullscreen"};g.__docgenInfo={description:"",methods:[],displayName:"WithCss",props:{width:{required:!0,tsType:{name:"union",raw:"keyof typeof widthMap",elements:[{name:"literal",value:"small"},{name:"literal",value:"medium"},{name:"literal",value:"large"},{name:"literal",value:"xlarge"}]},description:""},height:{required:!0,tsType:{name:"union",raw:"keyof typeof heightMap",elements:[{name:"literal",value:"small"},{name:"literal",value:"large"},{name:"literal",value:"auto"}]},description:""},subtitle:{required:!0,tsType:{name:"boolean"},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"WithScrollBody"};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
  width,
  height,
  subtitle
}: DialogStoryProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const onDialogClose = useCallback(() => setIsOpen(false), []);
  return <>
      <Button onClick={() => setIsOpen(!isOpen)}>Show dialog</Button>
      {isOpen && <Dialog title="My Dialog" subtitle={subtitle ? 'This is a subtitle!' : undefined} width={width} height={height} renderHeader={CssHeader} renderBody={CssBody} renderFooter={CssFooter} onClose={onDialogClose} footerButtons={[{
      buttonType: 'danger',
      content: 'Delete the universe',
      onClick: onDialogClose
    }, {
      buttonType: 'primary',
      content: 'Proceed'
    }]} className="testCustomClassnameBorder testCustomAnimation">
          {lipsum}
        </Dialog>}
    </>;
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const onDialogClose = useCallback(() => setIsOpen(false), []);
  return <>
      <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Show dialog
      </Button>
      {lipsum}
      {lipsum}
      {lipsum}
      {lipsum}
      {lipsum}
      {lipsum}
      {lipsum}
      {lipsum}
      {lipsum}
      {lipsum}
      {lipsum}
      {isOpen && <Dialog title="My Dialog" onClose={onDialogClose} footerButtons={[{
      buttonType: 'danger',
      content: 'Delete the universe',
      onClick: onDialogClose
    }, {
      buttonType: 'primary',
      content: 'Proceed',
      onClick: onDialogClose
    }]}>
          {lipsum}
        </Dialog>}
    </>;
}`,...d.parameters?.docs?.source}}};const ce=["WithCss","WithScrollBody"];export{g as WithCss,d as WithScrollBody,ce as __namedExportsOrder,me as default};
