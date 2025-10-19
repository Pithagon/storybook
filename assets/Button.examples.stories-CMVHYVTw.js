import{R as a,j as t}from"./iframe-Cfz2vXeE.js";import{a5 as p}from"./index.esm-C1WN7kEu.js";import{B as g}from"./index-CEFMyGLK.js";import{A as f}from"./AriaStatus-CzZh6U-X.js";import{B as d}from"./Button-3sCteC9V.js";import{A as S}from"./AriaAlert-B15br4-e.js";import"./preload-helper-D9Z9MdNV.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./CounterLabel-DnnBMwbH.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./useMergedRefs-CMoMpGtu.js";import"./Announce-rCuV3jiI.js";const U={title:"Components/Button/Examples"},s=()=>{const[e,o]=a.useState(!1),[i,c]=a.useState(!1),l=async()=>(o(!0),await new Promise(r=>setTimeout(r,1500)),o(!1),await!0),u=r=>async()=>{const m=await l();c(m)};return t.jsxs(t.Fragment,{children:[t.jsx(f,{children:!e&&i?"Export completed":null}),t.jsx(d,{loading:e,leadingVisual:p,onClick:u(),children:"Export (success)"})]})},n=()=>{const[e,o]=a.useState(!1),[i,c]=a.useState(!1),l=async()=>(o(!0),await new Promise(r=>setTimeout(r,1500)),o(!1),await!0),u=r=>async()=>{const m=await l();{c(m);return}};return t.jsxs(t.Fragment,{children:[!e&&i?t.jsx(S,{children:t.jsx(g,{title:"Export failed",variant:"critical"})}):null,t.jsx(d,{loading:e,leadingVisual:p,onClick:u(),children:"Export (error)"})]})};s.__docgenInfo={description:"",methods:[],displayName:"LoadingStatusAnnouncementSuccessful"};n.__docgenInfo={description:"",methods:[],displayName:"LoadingStatusAnnouncementError"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const resolveAction = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    return await true;
  };
  const onClick = (resolveType: 'error' | 'success') => async () => {
    const actionResult = await resolveAction();
    if (resolveType === 'error') {
      setSuccess(!actionResult);
      return;
    }
    setSuccess(actionResult);
  };
  return <>
      <AriaStatus>{!loading && success ? 'Export completed' : null}</AriaStatus>
      <Button loading={loading} leadingVisual={DownloadIcon} onClick={onClick('success')}>
        Export (success)
      </Button>
    </>;
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const resolveAction = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    return await true;
  };
  const onClick = (resolveType: 'error' | 'success') => async () => {
    const actionResult = await resolveAction();
    if (resolveType === 'error') {
      setError(actionResult);
      return;
    }
    setError(!actionResult);
  };
  return <>
      {!loading && error ? <AriaAlert>
          <Banner title="Export failed" variant="critical" />
        </AriaAlert> : null}

      <Button loading={loading} leadingVisual={DownloadIcon} onClick={onClick('error')}>
        Export (error)
      </Button>
    </>;
}`,...n.parameters?.docs?.source}}};const W=["LoadingStatusAnnouncementSuccessful","LoadingStatusAnnouncementError"];export{n as LoadingStatusAnnouncementError,s as LoadingStatusAnnouncementSuccessful,W as __namedExportsOrder,U as default};
