import{j as t,T as ie,B as ce,d as I,R as w,r as O}from"./iframe-Cfz2vXeE.js";import{u as A}from"./useFocusTrap-CL_Yl_fl.js";import{S as T}from"./index-D3vEWZM2.js";import{F as se}from"./Flash-CFeEV9BS.js";import{T as ne}from"./Text-BbpDCwQY.js";import{B as le}from"./Button-3sCteC9V.js";import"./preload-helper-D9Z9MdNV.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./event-listener-signal-Pp6mWBoo.js";import"./Stack--yR6jd9X.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";const de="prc-stories-MarginButton-5fXmg",ue="prc-stories-TrapZone-yhvlu",pe="prc-stories-TrapZoneSmall-vuvCj",me="prc-stories-Legend-X7Q1n",ge="prc-stories-LegendItem-bhvta",fe="prc-stories-LegendItemSuspended-mh-5P",he="prc-stories-LegendItemActive-xdUwL",k={MarginButton:de,TrapZone:ue,TrapZoneSmall:pe,Legend:me,LegendItem:ge,LegendItemSuspended:fe,LegendItemActive:he},Ae={title:"Hooks/useFocusTrap",decorators:[e=>t.jsx(ie,{children:t.jsx(ce,{children:t.jsx(e,{})})})]},J=()=>{const e=I.c(1);let n;return e[0]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsx("style",{children:`
      *:focus {
        outline: 2px solid var(--bgColor-accent-emphasis) !important;
      }
      [data-focus-trap='active'] {
        background-color: var(--bgColor-success-muted);
      }
      [data-focus-trap='suspended'] {
        background-color: var(--bgColor-attention-muted);
      }
    `}),e[0]=n):n=e[0],n},r=e=>{const n=I.c(6);let m,a;n[0]!==e?({children:m,...a}=e,n[0]=e,n[1]=m,n[2]=a):(m=n[1],a=n[2]);let o;return n[3]!==m||n[4]!==a?(o=t.jsx(le,{className:k.MarginButton,...a,children:m}),n[3]=m,n[4]=a,n[5]=o):o=n[5],o},H=()=>{const e=I.c(22),[n,m]=w.useState(!1),a=!n;let o;e[0]!==a?(o={disabled:a},e[0]=a,e[1]=o):o=e[1];const{containerRef:y}=A(o);let c;e[2]!==n?(c=S=>{S.key===" "&&m(!n)},e[2]=n,e[3]=c):c=e[3];const i=c;let s,l;e[4]!==i?(s=()=>(document.addEventListener("keypress",i),()=>{document.removeEventListener("keypress",i)}),l=[i],e[4]=i,e[5]=s,e[6]=l):(s=e[5],l=e[6]),O.useEffect(s,l);let x;e[7]===Symbol.for("react.memo_cache_sentinel")?(x=t.jsx(J,{}),e[7]=x):x=e[7];let b,g,p;e[8]===Symbol.for("react.memo_cache_sentinel")?(b=t.jsx(r,{children:"Apple"}),g=t.jsx(r,{children:"Banana"}),p=t.jsx(r,{children:"Cantaloupe"}),e[8]=b,e[9]=g,e[10]=p):(b=e[8],g=e[9],p=e[10]);const B=y,f=n?"deactivate":"activate";let u;e[11]!==f?(u=t.jsxs("strong",{children:["Trap zone! Press SPACE to ",f,"."]}),e[11]=f,e[12]=u):u=e[12];let v;e[13]===Symbol.for("react.memo_cache_sentinel")?(v=t.jsxs(T,{direction:"vertical",gap:"normal",children:[t.jsx(r,{children:"Durian"}),t.jsx(r,{children:"Elderberry"}),t.jsx(r,{children:"Fig"})]}),e[13]=v):v=e[13];let d;e[14]!==u||e[15]!==B?(d=t.jsxs("div",{className:k.TrapZone,ref:B,children:[u,v]}),e[14]=u,e[15]=B,e[16]=d):d=e[16];let h,M,j;e[17]===Symbol.for("react.memo_cache_sentinel")?(h=t.jsx(r,{children:"Grapefruit"}),M=t.jsx(r,{children:"Honeydew"}),j=t.jsx(r,{children:"Jackfruit"}),e[17]=h,e[18]=M,e[19]=j):(h=e[17],M=e[18],j=e[19]);let E;return e[20]!==d?(E=t.jsxs(t.Fragment,{children:[x,t.jsxs(T,{direction:"vertical",gap:"normal",children:[b,g,p,d,h,M,j]})]}),e[20]=d,e[21]=E):E=e[21],E},D=()=>{const e=I.c(22),[n,m]=w.useState(!1),a=!n;let o;e[0]!==a?(o={disabled:a,restoreFocusOnCleanUp:!0},e[0]=a,e[1]=o):o=e[1];const{containerRef:y}=A(o);let c;e[2]!==n?(c=S=>{S.key===" "&&m(!n)},e[2]=n,e[3]=c):c=e[3];const i=c;let s,l;e[4]!==i?(s=()=>(document.addEventListener("keypress",i),()=>{document.removeEventListener("keypress",i)}),l=[i],e[4]=i,e[5]=s,e[6]=l):(s=e[5],l=e[6]),O.useEffect(s,l);let x;e[7]===Symbol.for("react.memo_cache_sentinel")?(x=t.jsx(J,{}),e[7]=x):x=e[7];let b,g,p;e[8]===Symbol.for("react.memo_cache_sentinel")?(b=t.jsx(r,{children:"Apple"}),g=t.jsx(r,{children:"Banana"}),p=t.jsx(r,{children:"Cantaloupe"}),e[8]=b,e[9]=g,e[10]=p):(b=e[8],g=e[9],p=e[10]);const B=y,f=n?"deactivate":"activate";let u;e[11]!==f?(u=t.jsxs("strong",{children:["Trap zone! Press SPACE to ",f,"."]}),e[11]=f,e[12]=u):u=e[12];let v;e[13]===Symbol.for("react.memo_cache_sentinel")?(v=t.jsxs(T,{direction:"vertical",gap:"normal",children:[t.jsx(r,{children:"Durian"}),t.jsx(r,{children:"Elderberry"}),t.jsx(r,{children:"Fig"})]}),e[13]=v):v=e[13];let d;e[14]!==u||e[15]!==B?(d=t.jsxs("div",{className:k.TrapZone,ref:B,children:[u,v]}),e[14]=u,e[15]=B,e[16]=d):d=e[16];let h,M,j;e[17]===Symbol.for("react.memo_cache_sentinel")?(h=t.jsx(r,{children:"Grapefruit"}),M=t.jsx(r,{children:"Honeydew"}),j=t.jsx(r,{children:"Jackfruit"}),e[17]=h,e[18]=M,e[19]=j):(h=e[17],M=e[18],j=e[19]);let E;return e[20]!==d?(E=t.jsxs(t.Fragment,{children:[x,t.jsxs(T,{direction:"vertical",gap:"normal",children:[b,g,p,d,h,M,j]})]}),e[20]=d,e[21]=E):E=e[21],E},Z=()=>{const e=I.c(29),[n,m]=w.useState(!1),a=!n;let o;e[0]!==a?(o={disabled:a},e[0]=a,e[1]=o):o=e[1];const{containerRef:y,initialFocusRef:c}=A(o);let i;e[2]!==n?(i=N=>{N.key===" "&&m(!n)},e[2]=n,e[3]=i):i=e[3];const s=i;let l,x;e[4]!==s?(l=()=>(document.addEventListener("keypress",s),()=>{document.removeEventListener("keypress",s)}),x=[s],e[4]=s,e[5]=l,e[6]=x):(l=e[5],x=e[6]),O.useEffect(l,x);let b;e[7]===Symbol.for("react.memo_cache_sentinel")?(b=t.jsx(J,{}),e[7]=b):b=e[7];let g,p,B,f;e[8]===Symbol.for("react.memo_cache_sentinel")?(g=t.jsx(se,{style:{marginBottom:"var(--base-size-12)"},children:"This story is the same as the `Focus Trap` story, except, when the trap zone is activated, the “Elderberry” button will receive the initial focus (if the trap zone container does not already have focus)."}),p=t.jsx(r,{children:"Apple"}),B=t.jsx(r,{children:"Banana"}),f=t.jsx(r,{children:"Cantaloupe"}),e[8]=g,e[9]=p,e[10]=B,e[11]=f):(g=e[8],p=e[9],B=e[10],f=e[11]);const u=y,v=n?"deactivate":"activate";let d;e[12]!==v?(d=t.jsxs("strong",{children:["Trap zone! Press SPACE to ",v,"."]}),e[12]=v,e[13]=d):d=e[13];let h;e[14]===Symbol.for("react.memo_cache_sentinel")?(h=t.jsx(r,{children:"Durian"}),e[14]=h):h=e[14];const M=c;let j;e[15]!==M?(j=t.jsx(r,{ref:M,children:"Elderberry"}),e[15]=M,e[16]=j):j=e[16];let E;e[17]===Symbol.for("react.memo_cache_sentinel")?(E=t.jsx(r,{children:"Fig"}),e[17]=E):E=e[17];let S;e[18]!==j?(S=t.jsxs(T,{direction:"vertical",gap:"normal",children:[h,j,E]}),e[18]=j,e[19]=S):S=e[19];let R;e[20]!==u||e[21]!==d||e[22]!==S?(R=t.jsxs("div",{className:k.TrapZone,ref:u,children:[d,S]}),e[20]=u,e[21]=d,e[22]=S,e[23]=R):R=e[23];let F,L,C;e[24]===Symbol.for("react.memo_cache_sentinel")?(F=t.jsx(r,{children:"Grapefruit"}),L=t.jsx(r,{children:"Honeydew"}),C=t.jsx(r,{children:"Jackfruit"}),e[24]=F,e[25]=L,e[26]=C):(F=e[24],L=e[25],C=e[26]);let _;return e[27]!==R?(_=t.jsxs(t.Fragment,{children:[b,t.jsxs(T,{direction:"vertical",gap:"normal",children:[g,p,B,f,R,F,L,C]})]}),e[27]=R,e[28]=_):_=e[28],_};function oe(e,n,m){const a=I.c(7),o=!1;let y;a[0]!==n||a[1]!==e?(y=l=>{l.key===e&&n()},a[0]=n,a[1]=e,a[2]=y):y=a[2];const c=y;let i,s;a[3]!==o||a[4]!==c?(i=()=>(document.addEventListener("keypress",c,{capture:o}),()=>{document.removeEventListener("keypress",c,{capture:o})}),s=[c,o],a[3]=o,a[4]=c,a[5]=i,a[6]=s):(i=a[5],s=a[6]),O.useEffect(i,s)}function ae(e){const n=I.c(10),{name:m}=e,[a,o]=w.useState(!0);let y;n[0]!==m?(y=m.substr(0,1).toLowerCase(),n[0]=m,n[1]=y):y=n[1];const c=y;let i;n[2]!==a?(i=()=>o(!a),n[2]=a,n[3]=i):i=n[3],oe(c,i);let s;n[4]!==m||n[5]!==a?(s=a?t.jsx(r,{children:m}):t.jsxs(t.Fragment,{children:[m," (Hidden) - "]}),n[4]=m,n[5]=a,n[6]=s):s=n[6];let l;return n[7]!==c||n[8]!==s?(l=t.jsxs("span",{children:[s,"Press ",c," to toggle"]}),n[7]=c,n[8]=s,n[9]=l):l=n[9],l}const $=()=>{const e=I.c(19),[n,m]=w.useState(!1),a=!n;let o;e[0]!==a?(o={disabled:a},e[0]=a,e[1]=o):o=e[1];const{containerRef:y}=A(o);let c;e[2]!==n?(c=()=>m(!n),e[2]=n,e[3]=c):c=e[3],oe(" ",c);let i;e[4]===Symbol.for("react.memo_cache_sentinel")?(i=t.jsx(J,{}),e[4]=i):i=e[4];let s,l,x;e[5]===Symbol.for("react.memo_cache_sentinel")?(s=t.jsx(r,{children:"Apple"}),l=t.jsx(r,{children:"Banana"}),x=t.jsx(r,{children:"Cantaloupe"}),e[5]=s,e[6]=l,e[7]=x):(s=e[5],l=e[6],x=e[7]);const b=y,g=n?"deactivate":"activate";let p;e[8]!==g?(p=t.jsxs("strong",{children:["Trap zone! Press SPACE to ",g,"."]}),e[8]=g,e[9]=p):p=e[9];let B;e[10]===Symbol.for("react.memo_cache_sentinel")?(B=t.jsxs(T,{direction:"vertical",gap:"normal",children:[t.jsx(ae,{name:"Durian"}),t.jsx(ae,{name:"Elderberry"}),t.jsx(ae,{name:"Fig"})]}),e[10]=B):B=e[10];let f;e[11]!==b||e[12]!==p?(f=t.jsxs("div",{className:k.TrapZone,ref:b,children:[p,B]}),e[11]=b,e[12]=p,e[13]=f):f=e[13];let u,v,d;e[14]===Symbol.for("react.memo_cache_sentinel")?(u=t.jsx(r,{children:"Grapefruit"}),v=t.jsx(r,{children:"Honeydew"}),d=t.jsx(r,{children:"Jackfruit"}),e[14]=u,e[15]=v,e[16]=d):(u=e[14],v=e[15],d=e[16]);let h;return e[17]!==f?(h=t.jsxs(t.Fragment,{children:[i,t.jsxs(T,{direction:"vertical",gap:"normal",children:[s,l,x,f,u,v,d]})]}),e[17]=f,e[18]=h):h=e[18],h},G=()=>{const e=I.c(41),[n,m]=w.useState(!1),[a,o]=w.useState(!1),y=!n;let c;e[0]!==y?(c={disabled:y},e[0]=y,e[1]=c):c=e[1];const{containerRef:i}=A(c),s=!a;let l;e[2]!==s?(l={disabled:s},e[2]=s,e[3]=l):l=e[3];const{containerRef:x}=A(l);let b;e[4]!==n||e[5]!==a?(b=re=>{re.key==="1"&&m(!n),re.key==="2"&&o(!a)},e[4]=n,e[5]=a,e[6]=b):b=e[6];const g=b;let p,B;e[7]!==g?(p=()=>(document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0})}),B=[g],e[7]=g,e[8]=p,e[9]=B):(p=e[8],B=e[9]),O.useEffect(p,B);let f;e[10]===Symbol.for("react.memo_cache_sentinel")?(f=t.jsx(J,{}),e[10]=f):f=e[10];let u;e[11]===Symbol.for("react.memo_cache_sentinel")?(u=t.jsx(se,{style:{marginBottom:"var(--base-size-12)"},children:"This story demonstrates the global nature of focus traps. When a focus trap is enabled, if there is already an active focus trap, it becomes suspended and pushed onto a stack. Once the newly-active focus trap is disabled, the most recently-suspended trap will reactivate. Suspended focus traps can be disabled, causing them to be removed from the stack of suspended traps."}),e[11]=u):u=e[11];let v;e[12]===Symbol.for("react.memo_cache_sentinel")?(v=t.jsxs(T,{direction:"horizontal",gap:"condensed",align:"center",children:[t.jsx("div",{className:k.LegendItem}),t.jsx(ne,{children:" - Inactive"})]}),e[12]=v):v=e[12];let d;e[13]===Symbol.for("react.memo_cache_sentinel")?(d=t.jsxs(T,{direction:"horizontal",gap:"condensed",align:"center",children:[t.jsx("div",{className:`${k.LegendItem} ${k.LegendItemSuspended}`}),t.jsx(ne,{children:" - Suspended"})]}),e[13]=d):d=e[13];let h,M,j,E;e[14]===Symbol.for("react.memo_cache_sentinel")?(h=t.jsxs("div",{className:k.Legend,children:["Legend",v,d,t.jsxs(T,{direction:"horizontal",gap:"condensed",align:"center",children:[t.jsx("div",{className:`${k.LegendItem} ${k.LegendItemActive}`}),t.jsx(ne,{children:" - Active"})]})]}),M=t.jsx(r,{children:"Apple"}),j=t.jsx(r,{children:"Banana"}),E=t.jsx(r,{children:"Cantaloupe"}),e[14]=h,e[15]=M,e[16]=j,e[17]=E):(h=e[14],M=e[15],j=e[16],E=e[17]);const S=i,R=n?"enabled":"disabled";let F;e[18]===Symbol.for("react.memo_cache_sentinel")?(F=t.jsx("code",{children:"1"}),e[18]=F):F=e[18];let L;e[19]!==R?(L=t.jsxs("strong",{children:["Trap zone (",R,")! Press ",F," to toggle."]}),e[19]=R,e[20]=L):L=e[20];let C;e[21]===Symbol.for("react.memo_cache_sentinel")?(C=t.jsxs(T,{direction:"vertical",gap:"normal",children:[t.jsx(r,{children:"Durian"}),t.jsx(r,{children:"Elderberry"}),t.jsx(r,{children:"Fig"})]}),e[21]=C):C=e[21];let _;e[22]!==S||e[23]!==L?(_=t.jsxs("div",{className:k.TrapZoneSmall,ref:S,children:[L,C]}),e[22]=S,e[23]=L,e[24]=_):_=e[24];let N,K,U;e[25]===Symbol.for("react.memo_cache_sentinel")?(N=t.jsx(r,{children:"Grapefruit"}),K=t.jsx(r,{children:"Honeydew"}),U=t.jsx(r,{children:"Jackfruit"}),e[25]=N,e[26]=K,e[27]=U):(N=e[25],K=e[26],U=e[27]);const ee=x,te=a?"enabled":"disabled";let q;e[28]===Symbol.for("react.memo_cache_sentinel")?(q=t.jsx("code",{children:"2"}),e[28]=q):q=e[28];let P;e[29]!==te?(P=t.jsxs("strong",{children:["Trap zone (",te,")! Press ",q," to toggle."]}),e[29]=te,e[30]=P):P=e[30];let W;e[31]===Symbol.for("react.memo_cache_sentinel")?(W=t.jsxs(T,{direction:"vertical",gap:"normal",children:[t.jsx(r,{children:"Kiwi"}),t.jsx(r,{children:"Lemon"}),t.jsx(r,{children:"Mango"})]}),e[31]=W):W=e[31];let z;e[32]!==ee||e[33]!==P?(z=t.jsxs("div",{className:k.TrapZoneSmall,ref:ee,children:[P,W]}),e[32]=ee,e[33]=P,e[34]=z):z=e[34];let X,Q,V;e[35]===Symbol.for("react.memo_cache_sentinel")?(X=t.jsx(r,{children:"Nectarine"}),Q=t.jsx(r,{children:"Orange"}),V=t.jsx(r,{children:"Peach"}),e[35]=X,e[36]=Q,e[37]=V):(X=e[35],Q=e[36],V=e[37]);let Y;return e[38]!==_||e[39]!==z?(Y=t.jsxs(t.Fragment,{children:[f,t.jsxs(T,{direction:"vertical",gap:"normal",children:[u,h,M,j,E,_,N,K,U,z,X,Q,V]})]}),e[38]=_,e[39]=z,e[40]=Y):Y=e[40],Y};H.__docgenInfo={description:"",methods:[],displayName:"FocusTrap"};D.__docgenInfo={description:"",methods:[],displayName:"RestoreFocus"};Z.__docgenInfo={description:"",methods:[],displayName:"CustomInitialFocus"};$.__docgenInfo={description:"",methods:[],displayName:"DynamicFocusTrapContents"};G.__docgenInfo={description:"",methods:[],displayName:"MultipleFocusTraps"};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const [trapEnabled, setTrapEnabled] = React.useState(false);
  const {
    containerRef
  } = useFocusTrap({
    disabled: !trapEnabled
  });
  const spaceListener = React.useCallback((event: KeyboardEvent) => {
    if (event.key === ' ') {
      setTrapEnabled(!trapEnabled);
    }
  }, [trapEnabled]);
  useEffect(() => {
    document.addEventListener('keypress', spaceListener);
    return () => {
      document.removeEventListener('keypress', spaceListener);
    };
  }, [spaceListener]);
  return <>
      <HelperGlobalStyling />
      <Stack direction="vertical" gap="normal">
        <MarginButton>Apple</MarginButton>
        <MarginButton>Banana</MarginButton>
        <MarginButton>Cantaloupe</MarginButton>
        <div className={classes.TrapZone} ref={containerRef as React.RefObject<HTMLDivElement>}>
          <strong>Trap zone! Press SPACE to {trapEnabled ? 'deactivate' : 'activate'}.</strong>
          <Stack direction="vertical" gap="normal">
            <MarginButton>Durian</MarginButton>
            <MarginButton>Elderberry</MarginButton>
            <MarginButton>Fig</MarginButton>
          </Stack>
        </div>
        <MarginButton>Grapefruit</MarginButton>
        <MarginButton>Honeydew</MarginButton>
        <MarginButton>Jackfruit</MarginButton>
      </Stack>
    </>;
}`,...H.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [trapEnabled, setTrapEnabled] = React.useState(false);
  const {
    containerRef
  } = useFocusTrap({
    disabled: !trapEnabled,
    restoreFocusOnCleanUp: true
  });
  const spaceListener = React.useCallback((event: KeyboardEvent) => {
    if (event.key === ' ') {
      setTrapEnabled(!trapEnabled);
    }
  }, [trapEnabled]);
  useEffect(() => {
    document.addEventListener('keypress', spaceListener);
    return () => {
      document.removeEventListener('keypress', spaceListener);
    };
  }, [spaceListener]);
  return <>
      <HelperGlobalStyling />
      <Stack direction="vertical" gap="normal">
        <MarginButton>Apple</MarginButton>
        <MarginButton>Banana</MarginButton>
        <MarginButton>Cantaloupe</MarginButton>
        <div className={classes.TrapZone} ref={containerRef as React.RefObject<HTMLDivElement>}>
          <strong>Trap zone! Press SPACE to {trapEnabled ? 'deactivate' : 'activate'}.</strong>
          <Stack direction="vertical" gap="normal">
            <MarginButton>Durian</MarginButton>
            <MarginButton>Elderberry</MarginButton>
            <MarginButton>Fig</MarginButton>
          </Stack>
        </div>
        <MarginButton>Grapefruit</MarginButton>
        <MarginButton>Honeydew</MarginButton>
        <MarginButton>Jackfruit</MarginButton>
      </Stack>
    </>;
}`,...D.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const [trapEnabled, setTrapEnabled] = React.useState(false);
  const {
    containerRef,
    initialFocusRef
  } = useFocusTrap({
    disabled: !trapEnabled
  });
  const spaceListener = React.useCallback((event: KeyboardEvent) => {
    if (event.key === ' ') {
      setTrapEnabled(!trapEnabled);
    }
  }, [trapEnabled]);
  useEffect(() => {
    document.addEventListener('keypress', spaceListener);
    return () => {
      document.removeEventListener('keypress', spaceListener);
    };
  }, [spaceListener]);
  return <>
      <HelperGlobalStyling />
      <Stack direction="vertical" gap="normal">
        <Flash style={{
        marginBottom: 'var(--base-size-12)'
      }}>
          This story is the same as the \`Focus Trap\` story, except, when the trap zone is activated, the
          &ldquo;Elderberry&rdquo; button will receive the initial focus (if the trap zone container does not already
          have focus).
        </Flash>
        <MarginButton>Apple</MarginButton>
        <MarginButton>Banana</MarginButton>
        <MarginButton>Cantaloupe</MarginButton>
        <div className={classes.TrapZone} ref={containerRef as React.RefObject<HTMLDivElement>}>
          <strong>Trap zone! Press SPACE to {trapEnabled ? 'deactivate' : 'activate'}.</strong>
          <Stack direction="vertical" gap="normal">
            <MarginButton>Durian</MarginButton>
            <MarginButton ref={initialFocusRef as React.RefObject<HTMLButtonElement>}>Elderberry</MarginButton>
            <MarginButton>Fig</MarginButton>
          </Stack>
        </div>
        <MarginButton>Grapefruit</MarginButton>
        <MarginButton>Honeydew</MarginButton>
        <MarginButton>Jackfruit</MarginButton>
      </Stack>
    </>;
}`,...Z.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const [trapEnabled, setTrapEnabled] = React.useState(false);
  const {
    containerRef
  } = useFocusTrap({
    disabled: !trapEnabled
  });
  useKeyPressListener(' ', useCallback(() => setTrapEnabled(!trapEnabled), [trapEnabled]));
  return <>
      <HelperGlobalStyling />
      <Stack direction="vertical" gap="normal">
        <MarginButton>Apple</MarginButton>
        <MarginButton>Banana</MarginButton>
        <MarginButton>Cantaloupe</MarginButton>
        <div className={classes.TrapZone} ref={containerRef as React.RefObject<HTMLDivElement>}>
          <strong>Trap zone! Press SPACE to {trapEnabled ? 'deactivate' : 'activate'}.</strong>
          <Stack direction="vertical" gap="normal">
            <ToggleableButton name="Durian"></ToggleableButton>
            <ToggleableButton name="Elderberry"></ToggleableButton>
            <ToggleableButton name="Fig"></ToggleableButton>
          </Stack>
        </div>
        <MarginButton>Grapefruit</MarginButton>
        <MarginButton>Honeydew</MarginButton>
        <MarginButton>Jackfruit</MarginButton>
      </Stack>
    </>;
}`,...$.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [trapEnabled1, setTrapEnabled1] = React.useState(false);
  const [trapEnabled2, setTrapEnabled2] = React.useState(false);
  const {
    containerRef: containerRef1
  } = useFocusTrap({
    disabled: !trapEnabled1
  });
  const {
    containerRef: containerRef2
  } = useFocusTrap({
    disabled: !trapEnabled2
  });
  const keyListener = React.useCallback((event: KeyboardEvent) => {
    if (event.key === '1') {
      setTrapEnabled1(!trapEnabled1);
    }
    if (event.key === '2') {
      setTrapEnabled2(!trapEnabled2);
    }
  }, [trapEnabled1, trapEnabled2]);
  useEffect(() => {
    document.addEventListener('keydown', keyListener, {
      capture: true
    });
    return () => {
      document.removeEventListener('keydown', keyListener, {
        capture: true
      });
    };
  }, [keyListener]);
  return <>
      <HelperGlobalStyling />
      <Stack direction="vertical" gap="normal">
        <Flash style={{
        marginBottom: 'var(--base-size-12)'
      }}>
          This story demonstrates the global nature of focus traps. When a focus trap is enabled, if there is already an
          active focus trap, it becomes suspended and pushed onto a stack. Once the newly-active focus trap is disabled,
          the most recently-suspended trap will reactivate. Suspended focus traps can be disabled, causing them to be
          removed from the stack of suspended traps.
        </Flash>
        <div className={classes.Legend}>
          Legend
          <Stack direction="horizontal" gap="condensed" align="center">
            <div className={classes.LegendItem}></div>
            <Text> - Inactive</Text>
          </Stack>
          <Stack direction="horizontal" gap="condensed" align="center">
            <div className={\`\${classes.LegendItem} \${classes.LegendItemSuspended}\`}></div>
            <Text> - Suspended</Text>
          </Stack>
          <Stack direction="horizontal" gap="condensed" align="center">
            <div className={\`\${classes.LegendItem} \${classes.LegendItemActive}\`}></div>
            <Text> - Active</Text>
          </Stack>
        </div>
        <MarginButton>Apple</MarginButton>
        <MarginButton>Banana</MarginButton>
        <MarginButton>Cantaloupe</MarginButton>
        <div className={classes.TrapZoneSmall} ref={containerRef1 as React.RefObject<HTMLDivElement>}>
          <strong>
            Trap zone ({trapEnabled1 ? 'enabled' : 'disabled'})! Press <code>1</code> to toggle.
          </strong>
          <Stack direction="vertical" gap="normal">
            <MarginButton>Durian</MarginButton>
            <MarginButton>Elderberry</MarginButton>
            <MarginButton>Fig</MarginButton>
          </Stack>
        </div>
        <MarginButton>Grapefruit</MarginButton>
        <MarginButton>Honeydew</MarginButton>
        <MarginButton>Jackfruit</MarginButton>
        <div className={classes.TrapZoneSmall} ref={containerRef2 as React.RefObject<HTMLDivElement>}>
          <strong>
            Trap zone ({trapEnabled2 ? 'enabled' : 'disabled'})! Press <code>2</code> to toggle.
          </strong>
          <Stack direction="vertical" gap="normal">
            <MarginButton>Kiwi</MarginButton>
            <MarginButton>Lemon</MarginButton>
            <MarginButton>Mango</MarginButton>
          </Stack>
        </div>
        <MarginButton>Nectarine</MarginButton>
        <MarginButton>Orange</MarginButton>
        <MarginButton>Peach</MarginButton>
      </Stack>
    </>;
}`,...G.parameters?.docs?.source}}};const He=["FocusTrap","RestoreFocus","CustomInitialFocus","DynamicFocusTrapContents","MultipleFocusTraps"];export{Z as CustomInitialFocus,$ as DynamicFocusTrapContents,H as FocusTrap,G as MultipleFocusTraps,D as RestoreFocus,He as __namedExportsOrder,Ae as default};
