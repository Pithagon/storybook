import{j as o,T as B,B as F,d as O,R as N}from"./iframe-Cfz2vXeE.js";import{P as M,r as H}from"./Portal-BKCn1yDJ.js";import{u as _}from"./useAnchoredPosition-IlJWxGCn.js";import{B as $}from"./Button-3sCteC9V.js";import"./preload-helper-D9Z9MdNV.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./useResizeObserver-CkcKl7_1.js";import"./anchored-position-Cz4CQZsC.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";const k="prc-stories-Float-gPOzL",W="prc-stories-Anchor-DCBZH",I="prc-stories-Nav-RzoBJ",L="prc-stories-Main-SFOv2",D="prc-stories-Container-5-veh",X="prc-stories-FullSizeAnchor-FUOpX",z="prc-stories-ClippingContainer-ZTtGT",Y="prc-stories-RelativeParent-GI7Q5",U="prc-stories-StaticContainer-4u-b3",q="prc-stories-TallContainer-pq2AJ",G="prc-stories-AnchorElement-CqKb5",J="prc-stories-ButtonContainer-d48CP",Z="prc-stories-Body-nwqLm",C={Float:k,Anchor:W,Nav:I,Main:L,Container:D,FullSizeAnchor:X,ClippingContainer:z,RelativeParent:Y,StaticContainer:U,TallContainer:q,AnchorElement:G,ButtonContainer:J,Body:Z},Re={title:"Hooks/useAnchoredPosition",decorators:[t=>o.jsx(B,{children:o.jsx(F,{children:t()})})],argTypes:{anchorX:{control:{type:"range",min:0,max:500}},anchorY:{control:{type:"range",min:0,max:500}},anchorWidth:{control:{type:"range",min:50,max:500}},anchorHeight:{control:{type:"range",min:50,max:500}},floatWidth:{control:{type:"range",min:50,max:500}},floatHeight:{control:{type:"range",min:50,max:500}},anchorPosition:{control:{type:"inline-radio"},options:["inside","outside"]},anchorSide:{control:{type:"inline-radio"},options:["top","bottom","left","right","center"],description:"note"},anchorAlignment:{control:{type:"inline-radio"},options:["start","center","end"]},anchorOffset:{control:{type:"range",min:-100,max:100}},alignmentOffset:{control:{type:"range",min:-100,max:100}},allowOutOfBounds:{control:{type:"boolean"}}}},T=t=>{const e=O.c(24);let l,n,i,a,c,d,s,r;e[0]!==t?({children:l,top:s,left:i,width:r,height:n,sx:d,style:c,...a}=t,e[0]=t,e[1]=l,e[2]=n,e[3]=i,e[4]=a,e[5]=c,e[6]=d,e[7]=s,e[8]=r):(l=e[1],n=e[2],i=e[3],a=e[4],c=e[5],d=e[6],s=e[7],r=e[8]);const f=s!==void 0?`${s}px`:void 0,h=i!==void 0?`${i}px`:void 0,m=r!==void 0?`${r}px`:void 0,p=n!==void 0?`${n}px`:void 0,g=s!==void 0?`${s}px`:void 0,u=i!==void 0?`${i}px`:void 0,b=r!==void 0?`${r}px`:void 0,y=n!==void 0?`${n}px`:void 0,x=d?.visibility;let v;e[9]!==c||e[10]!==f||e[11]!==h||e[12]!==m||e[13]!==p||e[14]!==g||e[15]!==u||e[16]!==b||e[17]!==y||e[18]!==x?(v={...c,"--top":f,"--left":h,"--width":m,"--height":p,top:g,left:u,width:b,height:y,visibility:x},e[9]=c,e[10]=f,e[11]=h,e[12]=m,e[13]=p,e[14]=g,e[15]=u,e[16]=b,e[17]=y,e[18]=x,e[19]=v):v=e[19];const R=v;let w;return e[20]!==l||e[21]!==a||e[22]!==R?(w=o.jsx("div",{className:C.Float,style:R,...a,children:l}),e[20]=l,e[21]=a,e[22]=R,e[23]=w):w=e[23],w},K=t=>{const e=O.c(18);let l,n,i,a,c,d,s;e[0]!==t?({children:l,top:d,left:i,width:s,height:n,style:c,...a}=t,e[0]=t,e[1]=l,e[2]=n,e[3]=i,e[4]=a,e[5]=c,e[6]=d,e[7]=s):(l=e[1],n=e[2],i=e[3],a=e[4],c=e[5],d=e[6],s=e[7]);const r=d!==void 0?`${d}px`:void 0,f=i!==void 0?`${i}px`:void 0,h=s!==void 0?`${s}px`:void 0,m=n!==void 0?`${n}px`:void 0;let p;e[8]!==c||e[9]!==r||e[10]!==f||e[11]!==h||e[12]!==m?(p={...c,top:r,left:f,width:h,height:m},e[8]=c,e[9]=r,e[10]=f,e[11]=h,e[12]=m,e[13]=p):p=e[13];let g;return e[14]!==l||e[15]!==a||e[16]!==p?(g=o.jsx("div",{className:C.Anchor,style:p,...a,children:l}),e[14]=l,e[15]=a,e[16]=p,e[17]=g):g=e[17],g},j=t=>{const e=O.c(32),l=`${t.anchorPosition??"outside"}-${t.anchorSide??"bottom"}`,n=t.anchorAlignment??"start",i=t.anchorOffset&&parseInt(t.anchorOffset,10),a=t.alignmentOffset&&parseInt(t.alignmentOffset,10),c=t.allowOutOfBounds??void 0;let d;e[0]!==l||e[1]!==n||e[2]!==i||e[3]!==a||e[4]!==c?(d={side:l,align:n,anchorOffset:i,alignmentOffset:a,allowOutOfBounds:c},e[0]=l,e[1]=n,e[2]=i,e[3]=a,e[4]=c,e[5]=d):d=e[5];let s;e[6]!==t.alignmentOffset||e[7]!==t.allowOutOfBounds||e[8]!==t.anchorAlignment||e[9]!==t.anchorOffset||e[10]!==t.anchorPosition||e[11]!==t.anchorSide||e[12]!==t.anchorX||e[13]!==t.anchorY||e[14]!==t.floatHeight||e[15]!==t.floatWidth?(s=[t.anchorY,t.anchorX,t.anchorPosition,t.anchorSide,t.anchorAlignment,t.anchorOffset,t.alignmentOffset,t.allowOutOfBounds,t.floatHeight,t.floatWidth],e[6]=t.alignmentOffset,e[7]=t.allowOutOfBounds,e[8]=t.anchorAlignment,e[9]=t.anchorOffset,e[10]=t.anchorPosition,e[11]=t.anchorSide,e[12]=t.anchorX,e[13]=t.anchorY,e[14]=t.floatHeight,e[15]=t.floatWidth,e[16]=s):s=e[16];const{floatingElementRef:r,anchorElementRef:f,position:h}=_(d,s),m=t.anchorY??0,p=t.anchorX??0,g=f;let u;e[17]!==t.anchorHeight||e[18]!==t.anchorWidth||e[19]!==m||e[20]!==p||e[21]!==g?(u=o.jsx(K,{top:m,left:p,width:t.anchorWidth,height:t.anchorHeight,ref:g,children:"Anchor Element"}),e[17]=t.anchorHeight,e[18]=t.anchorWidth,e[19]=m,e[20]=p,e[21]=g,e[22]=u):u=e[22];const b=h?.top??0,y=h?.left??0,x=t.floatWidth??150,v=t.floatHeight??150,R=r;let w;e[23]!==b||e[24]!==y||e[25]!==x||e[26]!==v||e[27]!==R?(w=o.jsx(T,{top:b,left:y,width:x,height:v,ref:R,children:"Floating element"}),e[23]=b,e[24]=y,e[25]=x,e[26]=v,e[27]=R,e[28]=w):w=e[28];let S;return e[29]!==u||e[30]!==w?(S=o.jsxs("div",{className:C.Container,children:[u,w]}),e[29]=u,e[30]=w,e[31]=S):S=e[31],S},A=()=>{const t=O.c(10);let e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e={side:"inside-center",align:"center"},t[0]=e):e=t[0];const{floatingElementRef:l,anchorElementRef:n,position:i}=_(e),a=n,c=l,d=i?.top??0,s=i?.left??0;let r,f;t[1]===Symbol.for("react.memo_cache_sentinel")?(r=o.jsx("p",{children:"Screen-Centered Floating Element "}),f=o.jsx("p",{children:o.jsx("small",{children:o.jsx("em",{children:"(Controls are ignored for this story)"})})}),t[1]=r,t[2]=f):(r=t[1],f=t[2]);let h;t[3]!==c||t[4]!==d||t[5]!==s?(h=o.jsxs(T,{ref:c,top:d,left:s,children:[r,f]}),t[3]=c,t[4]=d,t[5]=s,t[6]=h):h=t[6];let m;return t[7]!==a||t[8]!==h?(m=o.jsx("div",{className:C.FullSizeAnchor,ref:a,children:h}),t[7]=a,t[8]=h,t[9]=m):m=t[9],m},E=()=>{const t=O.c(21),[e,l]=N.useState(0);let n;t[0]===Symbol.for("react.memo_cache_sentinel")?(n={side:"outside-bottom",align:"start"},t[0]=n):n=t[0];let i;t[1]!==e?(i=[e],t[1]=e,t[2]=i):i=t[2];const{floatingElementRef:a,anchorElementRef:c,position:d}=_(n,i);let s;t[3]!==e?(s=()=>{l(e+1)},t[3]=e,t[4]=s):s=t[4];const r=s;let f;t[5]===Symbol.for("react.memo_cache_sentinel")?(f=o.jsx("code",{children:"overflow"}),t[5]=f):f=t[5];let h;t[6]===Symbol.for("react.memo_cache_sentinel")?(h=o.jsx("code",{children:"visible"}),t[6]=h):h=t[6];const m=d?.top??0,p=d?.left??0,g=a;let u;t[7]!==m||t[8]!==p||t[9]!==g?(u=o.jsxs("div",{className:C.RelativeParent,children:["Relatively positioned parent, but fluid height, so not the clipping parent.",o.jsxs("div",{className:C.StaticContainer,children:["Floating element container. Position=static and overflow=hidden to show that overflow-hidden on a statically-positioned element will not have any effect.",o.jsx(T,{top:m,left:p,width:150,height:220,ref:g,children:"Floating element"})]})]}),t[7]=m,t[8]=p,t[9]=g,t[10]=u):u=t[10];const b=c;let y;t[11]!==b?(y=o.jsxs("div",{className:C.TallContainer,children:["Anchor element container. This element is really tall to demonstrate behavior within a scrollable clipping container.",o.jsx("div",{className:C.AnchorElement,ref:b,children:"Anchor Element"})]}),t[11]=b,t[12]=y):y=t[12];let x;t[13]!==y||t[14]!==u?(x=o.jsxs("div",{className:C.ClippingContainer,tabIndex:0,children:["Clipping container - this element has ",f," set to something other than ",h,u,y]}),t[13]=y,t[14]=u,t[15]=x):x=t[15];let v;t[16]!==r?(v=o.jsx($,{onClick:r,children:"Click to recalculate floating position"}),t[16]=r,t[17]=v):v=t[17];let R;return t[18]!==x||t[19]!==v?(R=o.jsxs(o.Fragment,{children:[x,v]}),t[18]=x,t[19]=v,t[20]=R):R=t[20],R},Q=t=>{const e=O.c(6);let l,n;e[0]!==t?({children:l,...n}=t,e[0]=t,e[1]=l,e[2]=n):(l=e[1],n=e[2]);let i;return e[3]!==l||e[4]!==n?(i=o.jsx("nav",{className:C.Nav,...n,children:l}),e[3]=l,e[4]=n,e[5]=i):i=e[5],i},V=t=>{const e=O.c(6);let l,n;e[0]!==t?({children:l,...n}=t,e[0]=t,e[1]=l,e[2]=n):(l=e[1],n=e[2]);let i;return e[3]!==l||e[4]!==n?(i=o.jsx("main",{className:C.Main,...n,children:l}),e[3]=l,e[4]=n,e[5]=i):i=e[5],i},P=()=>{const t=O.c(24),[e,l]=N.useState(!1),n=N.useRef(null);let i;t[0]===Symbol.for("react.memo_cache_sentinel")?(i={side:"outside-bottom",align:"start"},t[0]=i):i=t[0];let a;t[1]!==e?(a=[e],t[1]=e,t[2]=a):a=t[2];const{floatingElementRef:c,anchorElementRef:d,position:s}=_(i,a);let r,f;t[3]===Symbol.for("react.memo_cache_sentinel")?(r=()=>{n.current&&H(n.current)},f=[n],t[3]=r,t[4]=f):(r=t[3],f=t[4]),N.useEffect(r,f);let h;t[5]!==e?(h=()=>{l(!e)},t[5]=e,t[6]=h):h=t[6];const m=h;let p;t[7]===Symbol.for("react.memo_cache_sentinel")?(p=o.jsx("h2",{children:"The nav bar!"}),t[7]=p):p=t[7];let g;t[8]===Symbol.for("react.memo_cache_sentinel")?(g=o.jsx("code",{children:"position:relative"}),t[8]=g):g=t[8];let u;t[9]===Symbol.for("react.memo_cache_sentinel")?(u=o.jsx("code",{children:"overflow:hidden"}),t[9]=u):u=t[9];let b;t[10]===Symbol.for("react.memo_cache_sentinel")?(b=o.jsxs("p",{children:["This “nav bar” has a width of 300px and is ",g," with"," ",u,", meaning that its children cannot overflow this container. Using <Portal> with ",o.jsx("code",{children:"useAnchoredPosition"}),", we can break out of this constraint."]}),t[10]=b):b=t[10];const y=d;let x;t[11]!==y||t[12]!==m?(x=o.jsx($,{variant:"primary",onClick:m,ref:y,children:"Show the overlay!"}),t[11]=y,t[12]=m,t[13]=x):x=t[13];let v;t[14]!==c||t[15]!==s||t[16]!==e?(v=e?o.jsx(M,{children:o.jsx(T,{ref:c,style:{top:`${s?.top??0}px`,left:`${s?.left??0}px`},width:250,height:400,sx:{visibility:s?"visible":"hidden"},children:"An un-constrained overlay!"})}):null,t[14]=c,t[15]=s,t[16]=e,t[17]=v):v=t[17];let R;t[18]!==x||t[19]!==v?(R=o.jsxs(Q,{children:[p,b,o.jsxs("div",{className:C.ButtonContainer,children:[x,v]})]}),t[18]=x,t[19]=v,t[20]=R):R=t[20];let w;t[21]===Symbol.for("react.memo_cache_sentinel")?(w=o.jsxs("div",{className:C.Body,children:[o.jsx("h1",{children:"The body!"}),o.jsx("p",{children:o.jsx("em",{children:"Note: The controls below have no effect in this story."})})]}),t[21]=w):w=t[21];let S;return t[22]!==R?(S=o.jsxs(V,{ref:n,children:[R,w]}),t[22]=R,t[23]=S):S=t[23],S};j.__docgenInfo={description:"",methods:[],displayName:"UseAnchoredPosition"};A.__docgenInfo={description:"",methods:[],displayName:"CenteredOnScreen"};E.__docgenInfo={description:"",methods:[],displayName:"ComplexAncestry"};P.__docgenInfo={description:"",methods:[],displayName:"WithPortal"};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: any) => {
  const {
    floatingElementRef,
    anchorElementRef,
    position
  } = useAnchoredPosition({
    side: \`\${args.anchorPosition ?? 'outside'}-\${args.anchorSide ?? 'bottom'}\` as AnchorSide,
    align: args.anchorAlignment ?? 'start',
    anchorOffset: args.anchorOffset && parseInt(args.anchorOffset, 10),
    alignmentOffset: args.alignmentOffset && parseInt(args.alignmentOffset, 10),
    allowOutOfBounds: args.allowOutOfBounds ?? undefined
  }, [args.anchorY, args.anchorX, args.anchorPosition, args.anchorSide, args.anchorAlignment, args.anchorOffset, args.alignmentOffset, args.allowOutOfBounds, args.floatHeight, args.floatWidth]);
  return <div className={classes.Container}>
      <Anchor top={args.anchorY ?? 0} left={args.anchorX ?? 0} width={args.anchorWidth} height={args.anchorHeight} ref={anchorElementRef as React.RefObject<HTMLDivElement>}>
        Anchor Element
      </Anchor>
      <Float top={position?.top ?? 0} left={position?.left ?? 0} width={args.floatWidth ?? 150} height={args.floatHeight ?? 150} ref={floatingElementRef as React.RefObject<HTMLDivElement>}>
        Floating element
      </Float>
    </div>;
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const {
    floatingElementRef,
    anchorElementRef,
    position
  } = useAnchoredPosition({
    side: 'inside-center',
    align: 'center'
  });
  // The outer Position element simply fills all available space
  return <div className={classes.FullSizeAnchor} ref={anchorElementRef as React.RefObject<HTMLDivElement>}>
      <Float ref={floatingElementRef as React.RefObject<HTMLDivElement>} top={position?.top ?? 0} left={position?.left ?? 0}>
        <p>Screen-Centered Floating Element </p>
        <p>
          <small>
            <em>(Controls are ignored for this story)</em>
          </small>
        </p>
      </Float>
    </div>;
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [recalculateSignal, setRecalculateSignal] = React.useState(0);
  const {
    floatingElementRef,
    anchorElementRef,
    position
  } = useAnchoredPosition({
    side: 'outside-bottom',
    align: 'start'
  }, [recalculateSignal]);
  const onRecalculateClick = React.useCallback(() => {
    setRecalculateSignal(recalculateSignal + 1);
  }, [recalculateSignal]);

  // The outer Position element simply fills all available space
  return <>
      <div className={classes.ClippingContainer} tabIndex={0}>
        Clipping container - this element has <code>overflow</code> set to something other than <code>visible</code>
        <div className={classes.RelativeParent}>
          Relatively positioned parent, but fluid height, so not the clipping parent.
          <div className={classes.StaticContainer}>
            Floating element container. Position=static and overflow=hidden to show that overflow-hidden on a
            statically-positioned element will not have any effect.
            <Float top={position?.top ?? 0} left={position?.left ?? 0} width={150} height={220} ref={floatingElementRef as React.RefObject<HTMLDivElement>}>
              Floating element
            </Float>
          </div>
        </div>
        <div className={classes.TallContainer}>
          Anchor element container. This element is really tall to demonstrate behavior within a scrollable clipping
          container.
          <div className={classes.AnchorElement} ref={anchorElementRef as React.RefObject<HTMLDivElement>}>
            Anchor Element
          </div>
        </div>
      </div>
      <Button onClick={onRecalculateClick}>Click to recalculate floating position</Button>
    </>;
}`,...E.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [showMenu, setShowMenu] = React.useState(false);
  const mainRef = React.useRef<HTMLElement>(null);

  // Calculate the position of the menu
  const {
    floatingElementRef,
    anchorElementRef,
    position
  } = useAnchoredPosition({
    side: 'outside-bottom',
    align: 'start'
  }, [showMenu]);

  // Register <Main> as the Portal root
  React.useEffect(() => {
    if (mainRef.current) {
      registerPortalRoot(mainRef.current);
    }
  }, [mainRef]);

  // Toggles rendering the menu when the button is clicked
  const toggleMenu = React.useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);
  return <Main ref={mainRef}>
      <Nav>
        <h2>The nav bar!</h2>
        <p>
          This &ldquo;nav bar&rdquo; has a width of 300px and is <code>position:relative</code> with{' '}
          <code>overflow:hidden</code>, meaning that its children cannot overflow this container. Using &lt;Portal&gt;
          with <code>useAnchoredPosition</code>, we can break out of this constraint.
        </p>
        <div className={classes.ButtonContainer}>
          <Button variant="primary" onClick={toggleMenu} ref={anchorElementRef as React.RefObject<HTMLButtonElement>}>
            Show the overlay!
          </Button>
          {showMenu ? <Portal>
              <Float ref={floatingElementRef as React.RefObject<HTMLDivElement>} style={{
            top: \`\${position?.top ?? 0}px\`,
            left: \`\${position?.left ?? 0}px\`
          }} width={250} height={400} sx={{
            visibility: position ? 'visible' : 'hidden'
          }}>
                An un-constrained overlay!
              </Float>
            </Portal> : null}
        </div>
      </Nav>
      <div className={classes.Body}>
        <h1>The body!</h1>
        <p>
          <em>Note: The controls below have no effect in this story.</em>
        </p>
      </div>
    </Main>;
}`,...P.parameters?.docs?.source}}};const ye=["UseAnchoredPosition","CenteredOnScreen","ComplexAncestry","WithPortal"];export{A as CenteredOnScreen,E as ComplexAncestry,j as UseAnchoredPosition,P as WithPortal,ye as __namedExportsOrder,Re as default};
