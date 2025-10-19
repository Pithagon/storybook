import{d as F,c as m,R as u,j as t,r as W}from"./iframe-Cfz2vXeE.js";import{P as C,a as $,r as M}from"./Portal-BKCn1yDJ.js";import{c as n}from"./Portal.stories.module-COz6XU7_.js";import"./preload-helper-D9Z9MdNV.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";const G={title:"Behaviors/Portal/Features",component:C},g=()=>{const e=F.c(3);let o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=m(n.PortalContainer,n.OuterContainer),e[0]=o):o=e[0];let a;e[1]===Symbol.for("react.memo_cache_sentinel")?(a=m(n.PortalContainer,n.InnerContainer),e[1]=a):a=e[1];let r;return e[2]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsxs(t.Fragment,{children:["Root position",t.jsxs("div",{className:o,id:"__primerPortalRoot__",children:["Outer container",t.jsxs("div",{className:a,children:["Inner container",t.jsx(C,{children:"Portaled content rendered at the outer container."})]})]})]}),e[2]=r):r=e[2],r},j=()=>{const e=F.c(7),o=u.useRef(null),[a,r]=u.useState(!1);let P,l;e[0]===Symbol.for("react.memo_cache_sentinel")?(P=()=>{o.current instanceof HTMLElement&&(M(o.current),r(!0))},l=[],e[0]=P,e[1]=l):(P=e[0],l=e[1]),u.useEffect(P,l);let i;e[2]===Symbol.for("react.memo_cache_sentinel")?(i=m(n.PortalContainer,n.OuterContainer),e[2]=i):i=e[2];let s;e[3]!==a?(s=a?t.jsxs(t.Fragment,{children:["Outer container",t.jsxs("div",{className:m(n.PortalContainer,n.InnerContainer),children:["Inner container",t.jsx(C,{children:"Portaled content rendered at the outer container."})]})]}):null,e[3]=a,e[4]=s):s=e[4];let c;return e[5]!==s?(c=t.jsxs(t.Fragment,{children:["Root position",t.jsx("div",{className:i,ref:o,children:s})]}),e[5]=s,e[6]=c):c=e[6],c},S=()=>{const e=F.c(8),o=u.useRef(null),a=u.useRef(null),[r,P]=u.useState(!1);let l,i;e[0]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{o.current instanceof HTMLElement&&a.current instanceof HTMLElement&&(M(o.current,"outer"),M(a.current,"inner"),P(!0))},i=[o],e[0]=l,e[1]=i):(l=e[0],i=e[1]),u.useEffect(l,i);let s;e[2]===Symbol.for("react.memo_cache_sentinel")?(s=m(n.PortalContainer,n.OuterContainer),e[2]=s):s=e[2];let c;e[3]===Symbol.for("react.memo_cache_sentinel")?(c=m(n.PortalContainer,n.InnerContainer),e[3]=c):c=e[3];let d;e[4]!==r?(d=r?t.jsxs(t.Fragment,{children:[t.jsx(C,{containerName:"outer",children:"Portaled content rendered at the outer container."}),t.jsx(C,{containerName:"inner",children:"Portaled content rendered at the end of the inner container."}),t.jsxs(C,{children:["Portaled content rendered at ",t.jsx("code",{children:"<BaseStyles>"})," root."]})]}):null,e[4]=r,e[5]=d):d=e[5];let f;return e[6]!==d?(f=t.jsxs(t.Fragment,{children:["Root position",t.jsxs("div",{className:s,ref:o,children:["Outer container",t.jsxs("div",{className:c,ref:a,children:[d,"Inner container"]})]})]}),e[6]=d,e[7]=f):f=e[7],f},y=()=>{const e=F.c(33),o=u.useRef(null),a=u.useRef(null),[r,P]=u.useState(!1);let l,i;e[0]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{o.current instanceof HTMLElement&&a.current instanceof HTMLElement&&(M(o.current,"custom-portal"),M(a.current,"override-portal"),P(!0))},i=[],e[0]=l,e[1]=i):(l=e[0],i=e[1]),W.useEffect(l,i);let s,c,d,f,E;e[2]===Symbol.for("react.memo_cache_sentinel")?(s=m(n.PortalContainer,n.OuterContainer),c=t.jsx("h3",{children:"Using PortalContext"}),d=t.jsx("p",{children:"This story demonstrates how to use PortalContext to control where Portal content is rendered."}),f=m(n.PortalContainer,n.DefaultSection),E=t.jsx("strong",{children:"Default Portal (no context):"}),e[2]=s,e[3]=c,e[4]=d,e[5]=f,e[6]=E):(s=e[2],c=e[3],d=e[4],f=e[5],E=e[6]);let v;e[7]!==r?(v=r?t.jsx(C,{children:t.jsx("div",{className:n.DefaultPortalContent,children:"Content in default portal"})}):null,e[7]=r,e[8]=v):v=e[8];let h;e[9]!==v?(h=t.jsxs("div",{className:f,children:[E,v]}),e[9]=v,e[10]=h):h=e[10];let O,I;e[11]===Symbol.for("react.memo_cache_sentinel")?(I=m(n.PortalContainer,n.ContextSection),O=t.jsx("strong",{children:"Portal with PortalContext:"}),e[11]=O,e[12]=I):(O=e[11],I=e[12]);let T;e[13]===Symbol.for("react.memo_cache_sentinel")?(T={portalContainerName:"custom-portal"},e[13]=T):T=e[13];let x;e[14]!==r?(x=r?t.jsx(C,{children:t.jsx("div",{className:n.ContextPortalContent,children:"Content in custom portal (via PortalContext)"})}):null,e[14]=r,e[15]=x):x=e[15];let p;e[16]!==x?(p=t.jsxs("div",{className:I,children:[O,t.jsx($.Provider,{value:T,children:x})]}),e[16]=x,e[17]=p):p=e[17];let b,H;e[18]===Symbol.for("react.memo_cache_sentinel")?(b=m(n.PortalContainer,n.OverrideSection),H=t.jsx("strong",{children:"Context + containerName prop override:"}),e[18]=b,e[19]=H):(b=e[18],H=e[19]);let L;e[20]===Symbol.for("react.memo_cache_sentinel")?(L={portalContainerName:"custom-portal"},e[20]=L):L=e[20];let R;e[21]!==r?(R=r?t.jsx(C,{containerName:"override-portal",children:t.jsx("div",{className:n.OverridePortalContent,children:"Content overriding context with containerName prop"})}):null,e[21]=r,e[22]=R):R=e[22];let _;e[23]!==R?(_=t.jsxs("div",{className:b,children:[H,t.jsx($.Provider,{value:L,children:R})]}),e[23]=R,e[24]=_):_=e[24];let N;e[25]!==p||e[26]!==_||e[27]!==h?(N=t.jsxs("div",{className:s,children:[c,d,h,p,_]}),e[25]=p,e[26]=_,e[27]=h,e[28]=N):N=e[28];let D;e[29]===Symbol.for("react.memo_cache_sentinel")?(D=t.jsxs("div",{className:n.CustomPortalContainer,children:[t.jsx("strong",{children:"Custom Portal Container:"}),t.jsx("div",{ref:o})]}),e[29]=D):D=e[29];let w;e[30]===Symbol.for("react.memo_cache_sentinel")?(w=t.jsxs("div",{className:n.OverridePortalContainer,children:[t.jsx("strong",{children:"Override Portal Container:"}),t.jsx("div",{ref:a})]}),e[30]=w):w=e[30];let B;return e[31]!==N?(B=t.jsxs(t.Fragment,{children:[N,D,w]}),e[31]=N,e[32]=B):B=e[32],B};g.__docgenInfo={description:"",methods:[],displayName:"CustomPortalRootById"};j.__docgenInfo={description:"",methods:[],displayName:"CustomPortalRootByRegistration"};S.__docgenInfo={description:"",methods:[],displayName:"MultiplePortalRoots"};y.__docgenInfo={description:"",methods:[],displayName:"WithPortalContext"};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <>
    Root position
    <div className={clsx(classes.PortalContainer, classes.OuterContainer)} id="__primerPortalRoot__">
      Outer container
      <div className={clsx(classes.PortalContainer, classes.InnerContainer)}>
        Inner container
        <Portal>Portaled content rendered at the outer container.</Portal>
      </div>
    </div>
  </>`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const outerContainerRef = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    if (outerContainerRef.current instanceof HTMLElement) {
      registerPortalRoot(outerContainerRef.current);
      setMounted(true);
    }
  }, []);
  return <>
      Root position
      <div className={clsx(classes.PortalContainer, classes.OuterContainer)} ref={outerContainerRef}>
        {mounted ? <>
            Outer container
            <div className={clsx(classes.PortalContainer, classes.InnerContainer)}>
              Inner container
              <Portal>Portaled content rendered at the outer container.</Portal>
            </div>
          </> : null}
      </div>
    </>;
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const outerContainerRef = React.useRef<HTMLDivElement>(null);
  const innerContainerRef = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    if (outerContainerRef.current instanceof HTMLElement && innerContainerRef.current instanceof HTMLElement) {
      registerPortalRoot(outerContainerRef.current, 'outer');
      registerPortalRoot(innerContainerRef.current, 'inner');
      setMounted(true);
    }
  }, [outerContainerRef]);
  return <>
      Root position
      <div className={clsx(classes.PortalContainer, classes.OuterContainer)} ref={outerContainerRef}>
        Outer container
        <div className={clsx(classes.PortalContainer, classes.InnerContainer)} ref={innerContainerRef}>
          {mounted ? <>
              <Portal containerName="outer">Portaled content rendered at the outer container.</Portal>
              <Portal containerName="inner">Portaled content rendered at the end of the inner container.</Portal>
              <Portal>
                Portaled content rendered at <code>&lt;BaseStyles&gt;</code> root.
              </Portal>
            </> : null}
          Inner container
        </div>
      </div>
    </>;
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const customContainerRef = React.useRef<HTMLDivElement>(null);
  const overrideContainerRef = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    if (customContainerRef.current instanceof HTMLElement && overrideContainerRef.current instanceof HTMLElement) {
      registerPortalRoot(customContainerRef.current, 'custom-portal');
      registerPortalRoot(overrideContainerRef.current, 'override-portal');
      setMounted(true);
    }
  }, []);
  return <>
      <div className={clsx(classes.PortalContainer, classes.OuterContainer)}>
        <h3>Using PortalContext</h3>
        <p>This story demonstrates how to use PortalContext to control where Portal content is rendered.</p>

        {/* Default Portal */}
        <div className={clsx(classes.PortalContainer, classes.DefaultSection)}>
          <strong>Default Portal (no context):</strong>
          {mounted ? <Portal>
              <div className={classes.DefaultPortalContent}>Content in default portal</div>
            </Portal> : null}
        </div>

        {/* Portal with Context */}
        <div className={clsx(classes.PortalContainer, classes.ContextSection)}>
          <strong>Portal with PortalContext:</strong>
          <PortalContext.Provider value={{
          portalContainerName: 'custom-portal'
        }}>
            {mounted ? <Portal>
                <div className={classes.ContextPortalContent}>Content in custom portal (via PortalContext)</div>
              </Portal> : null}
          </PortalContext.Provider>
        </div>

        {/* Override context with containerName prop */}
        <div className={clsx(classes.PortalContainer, classes.OverrideSection)}>
          <strong>Context + containerName prop override:</strong>
          <PortalContext.Provider value={{
          portalContainerName: 'custom-portal'
        }}>
            {mounted ? <Portal containerName="override-portal">
                <div className={classes.OverridePortalContent}>Content overriding context with containerName prop</div>
              </Portal> : null}
          </PortalContext.Provider>
        </div>
      </div>

      {/* Custom portal containers */}
      <div className={classes.CustomPortalContainer}>
        <strong>Custom Portal Container:</strong>
        <div ref={customContainerRef} />
      </div>

      <div className={classes.OverridePortalContainer}>
        <strong>Override Portal Container:</strong>
        <div ref={overrideContainerRef} />
      </div>
    </>;
}`,...y.parameters?.docs?.source}}};const J=["CustomPortalRootById","CustomPortalRootByRegistration","MultiplePortalRoots","WithPortalContext"];export{g as CustomPortalRootById,j as CustomPortalRootByRegistration,S as MultiplePortalRoots,y as WithPortalContext,J as __namedExportsOrder,G as default};
