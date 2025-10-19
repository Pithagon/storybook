import{d as o,r as v,R as $,j as l,c as E}from"./iframe-Cfz2vXeE.js";import{T as i}from"./ToggleSwitch-CyqyfZ4u.js";import{T as d}from"./ToggleSwitchStoryWrapper-Dkss2G06.js";import{u as G}from"./useSafeTimeout-BD3cO5TN.js";import"./preload-helper-D9Z9MdNV.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useProvidedStateOrCreate-BEKIGSkE.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";const z="prc-ToggleSwitch-Row-PLsoW",P="prc-ToggleSwitch-ColGrow-VSe2k",A="prc-ToggleSwitch-ToggleLabel-UN-dR",q="prc-ToggleSwitch-SwitchLabel-0JRMN",F="prc-ToggleSwitch-SwitchCaption-S6CcJ",t={Row:z,ColGrow:P,ToggleLabel:A,SwitchLabel:q,SwitchCaption:F},{action:H}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Components/ToggleSwitch/Features"},u=()=>{const a=o.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=l.jsxs(d,{children:[l.jsx("span",{id:"toggle",className:t.ToggleLabel,children:"Toggle label"}),l.jsx(i,{size:"small","aria-labelledby":"toggle"})]}),a[0]=e):e=a[0],e},y=()=>{const a=o.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=l.jsxs("div",{className:t.Row,children:[l.jsxs("div",{className:t.ColGrow,children:[l.jsx("span",{className:t.SwitchLabel,id:"switchLabel",children:"Notifications"}),l.jsx("span",{className:t.SwitchCaption,id:"switchCaption",children:"Notifications will be delivered via email and the GitHub notification center"})]}),l.jsx(i,{"aria-labelledby":"switchLabel","aria-describedby":"switchCaption"})]}),a[0]=e):e=a[0],e},T=()=>{const a=o.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=l.jsxs(d,{children:[l.jsx("span",{id:"toggle",className:t.ToggleLabel,children:"Toggle label"}),l.jsx(i,{disabled:!0,"aria-labelledby":"toggle"})]}),a[0]=e):e=a[0],e},f=()=>{const a=o.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=l.jsxs(d,{children:[l.jsx("span",{id:"toggle",className:t.ToggleLabel,children:"Toggle label"}),l.jsx(i,{checked:!0,"aria-labelledby":"toggle"})]}),a[0]=e):e=a[0],e},w=()=>{const a=o.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=l.jsxs(d,{children:[l.jsx("span",{id:"toggle",className:t.ToggleLabel,children:"Toggle label"}),l.jsx(i,{checked:!0,disabled:!0,"aria-labelledby":"toggle"})]}),a[0]=e):e=a[0],e},L=()=>{const a=o.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=l.jsxs(d,{children:[l.jsx("span",{id:"toggle",className:t.ToggleLabel,children:"Toggle label"}),l.jsx(i,{loading:!0,"aria-labelledby":"toggle"})]}),a[0]=e):e=a[0],e},b=a=>{const e=o.c(12),{loadingDelay:h,loadingLabelDelay:r}=a,[p,N]=v.useState(!1),[n,m]=v.useState(null),[c,S]=v.useState(!1),{safeSetTimeout:s,safeClearTimeout:g}=G();let j;e[0]!==h||e[1]!==g||e[2]!==s||e[3]!==n?(j=()=>{N(!0),n&&(g(n),m(null)),m(s(()=>N(!1),h))},e[0]=h,e[1]=g,e[2]=s,e[3]=n,e[4]=j):j=e[4];const k=j;let W;e[5]===Symbol.for("react.memo_cache_sentinel")?(W=l.jsx("span",{id:"toggle",style:{fontWeight:"bold",fontSize:"var(--base-size-14)"},children:"Enable feature"}),e[5]=W):W=e[5];const O=`${c?"Enabling":"Disabling"} feature`;let I;e[6]===Symbol.for("react.memo_cache_sentinel")?(I=R=>S(R),e[6]=I):I=e[6];let D;return e[7]!==k||e[8]!==p||e[9]!==r||e[10]!==O?(D=l.jsxs(d,{children:[W,l.jsx(i,{loading:p,loadingLabel:O,loadingLabelDelay:r,"aria-labelledby":"toggle",onClick:k,onChange:I})]}),e[7]=k,e[8]=p,e[9]=r,e[10]=O,e[11]=D):D=e[11],D};b.args={loadingDelay:5e3,loadingLabelDelay:2e3};b.argTypes={loadingDelay:{control:{type:"number"}},loadingLabelDelay:{control:{type:"number"}}};const C=()=>{const a=o.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=l.jsxs(d,{children:[l.jsx("span",{id:"toggle",className:t.ToggleLabel,children:"Toggle label"}),l.jsx(i,{statusLabelPosition:"end","aria-labelledby":"toggle"})]}),a[0]=e):e=a[0],e},_=()=>{const a=o.c(12),[e,h]=$.useState(!1);let r;a[0]!==e?(r=()=>{h(!e)},a[0]=e,a[1]=r):r=a[1];const p=r,N=J;let n,m;a[2]===Symbol.for("react.memo_cache_sentinel")?(n={maxWidth:"300px"},m=l.jsx("span",{className:E(t.ColGrow,t.SwitchLabel),id:"switchLabel",children:"Notifications"}),a[2]=n,a[3]=m):(n=a[2],m=a[3]);let c;a[4]!==e||a[5]!==p?(c=l.jsxs("div",{className:t.Row,style:n,children:[m,l.jsx(i,{onClick:p,onChange:N,checked:e,"aria-labelledby":"switchLabel"})]}),a[4]=e,a[5]=p,a[6]=c):c=a[6];const S=e?"on":"off";let s;a[7]!==S?(s=l.jsxs("p",{children:["The switch is ",S]}),a[7]=S,a[8]=s):s=a[8];let g;return a[9]!==c||a[10]!==s?(g=l.jsxs(l.Fragment,{children:[c,s]}),a[9]=c,a[10]=s,a[11]=g):g=a[11],g},x=()=>{const a=o.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=l.jsxs(d,{children:[l.jsx("span",{id:"toggle",className:t.ToggleLabel,children:"Toggle label"}),l.jsx(i,{buttonLabelOn:"Active",buttonLabelOff:"Inactive","aria-labelledby":"toggle"})]}),a[0]=e):e=a[0],e};u.__docgenInfo={description:"",methods:[],displayName:"Small"};y.__docgenInfo={description:"",methods:[],displayName:"WithCaption"};T.__docgenInfo={description:"",methods:[],displayName:"Disabled"};f.__docgenInfo={description:"",methods:[],displayName:"Checked"};w.__docgenInfo={description:"",methods:[],displayName:"CheckedDisabled"};L.__docgenInfo={description:"",methods:[],displayName:"Loading"};b.__docgenInfo={description:"",methods:[],displayName:"LoadingWithDelay",props:{loadingDelay:{required:!0,tsType:{name:"number"},description:""},loadingLabelDelay:{required:!0,tsType:{name:"number"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"LabelEnd"};_.__docgenInfo={description:"",methods:[],displayName:"Controlled"};x.__docgenInfo={description:"",methods:[],displayName:"WithCustomLabels"};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <ToggleSwitchStoryWrapper>
    <span id="toggle" className={styles.ToggleLabel}>
      Toggle label
    </span>
    <ToggleSwitch size="small" aria-labelledby="toggle" />
  </ToggleSwitchStoryWrapper>`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <div className={styles.Row}>
    <div className={styles.ColGrow}>
      <span className={styles.SwitchLabel} id="switchLabel">
        Notifications
      </span>
      <span className={styles.SwitchCaption} id="switchCaption">
        Notifications will be delivered via email and the GitHub notification center
      </span>
    </div>
    <ToggleSwitch aria-labelledby="switchLabel" aria-describedby="switchCaption" />
  </div>`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => <ToggleSwitchStoryWrapper>
    <span id="toggle" className={styles.ToggleLabel}>
      Toggle label
    </span>
    <ToggleSwitch disabled aria-labelledby="toggle" />
  </ToggleSwitchStoryWrapper>`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <ToggleSwitchStoryWrapper>
    <span id="toggle" className={styles.ToggleLabel}>
      Toggle label
    </span>
    <ToggleSwitch checked aria-labelledby="toggle" />
  </ToggleSwitchStoryWrapper>`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <ToggleSwitchStoryWrapper>
    <span id="toggle" className={styles.ToggleLabel}>
      Toggle label
    </span>
    <ToggleSwitch checked disabled aria-labelledby="toggle" />
  </ToggleSwitchStoryWrapper>`,...w.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => <ToggleSwitchStoryWrapper>
    <span id="toggle" className={styles.ToggleLabel}>
      Toggle label
    </span>
    <ToggleSwitch loading aria-labelledby="toggle" />
  </ToggleSwitchStoryWrapper>`,...L.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: LoadingWithDelayProps) => {
  const {
    loadingDelay,
    loadingLabelDelay
  } = args;
  const [isLoading, setIsLoading] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const [toggleState, setToggleState] = useState(false);
  const {
    safeSetTimeout,
    safeClearTimeout
  } = useSafeTimeout();
  const handleToggleClick = () => {
    setIsLoading(true);
    if (timeoutId) {
      safeClearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setTimeoutId(safeSetTimeout(() => setIsLoading(false), loadingDelay) as unknown as number);
  };
  return <ToggleSwitchStoryWrapper>
      <span id="toggle" style={{
      fontWeight: 'bold',
      fontSize: 'var(--base-size-14)'
    }}>
        Enable feature
      </span>
      <ToggleSwitch loading={isLoading} loadingLabel={\`\${toggleState ? 'Enabling' : 'Disabling'} feature\`} loadingLabelDelay={loadingLabelDelay} aria-labelledby="toggle" onClick={handleToggleClick} onChange={(on: boolean) => setToggleState(on)} />
    </ToggleSwitchStoryWrapper>;
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <ToggleSwitchStoryWrapper>
    <span id="toggle" className={styles.ToggleLabel}>
      Toggle label
    </span>
    <ToggleSwitch statusLabelPosition="end" aria-labelledby="toggle" />
  </ToggleSwitchStoryWrapper>`,...C.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [isOn, setIsOn] = React.useState(false);
  const onClick = React.useCallback(() => {
    setIsOn(!isOn);
  }, [setIsOn, isOn]);
  const handleSwitchChange = (on: boolean) => {
    action(\`new switch "on" state: \${on}\`);
  };
  return <>
      <div className={styles.Row} style={{
      maxWidth: '300px'
    }}>
        <span className={clsx(styles.ColGrow, styles.SwitchLabel)} id="switchLabel">
          Notifications
        </span>
        <ToggleSwitch onClick={onClick} onChange={handleSwitchChange} checked={isOn} aria-labelledby="switchLabel" />
      </div>
      <p>The switch is {isOn ? 'on' : 'off'}</p>
    </>;
}`,..._.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <ToggleSwitchStoryWrapper>
    <span id="toggle" className={styles.ToggleLabel}>
      Toggle label
    </span>
    <ToggleSwitch buttonLabelOn="Active" buttonLabelOff="Inactive" aria-labelledby="toggle" />
  </ToggleSwitchStoryWrapper>`,...x.parameters?.docs?.source}}};function J(a){H(`new switch "on" state: ${a}`)}const te=["Small","WithCaption","Disabled","Checked","CheckedDisabled","Loading","LoadingWithDelay","LabelEnd","Controlled","WithCustomLabels"];export{f as Checked,w as CheckedDisabled,_ as Controlled,T as Disabled,C as LabelEnd,L as Loading,b as LoadingWithDelay,u as Small,y as WithCaption,x as WithCustomLabels,te as __namedExportsOrder,le as default};
