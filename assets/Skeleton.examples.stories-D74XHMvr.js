import{d as j,R as v,j as a,r as z}from"./iframe-Cfz2vXeE.js";import{K as L}from"./index.esm-C1WN7kEu.js";import{S as N}from"./SkeletonAvatar-BkIUeqtZ.js";import{S as k}from"./SkeletonText-Dy-H_Tj2.js";import{A as D}from"./Avatar-Oyvcp9WV.js";import{T as x}from"./Text-BbpDCwQY.js";import{V as b}from"./VisuallyHidden-BShfgJrZ.js";import{I as w}from"./IconButton-qXcIkMuV.js";import{B as A}from"./Button-3sCteC9V.js";import"./preload-helper-D9Z9MdNV.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./SkeletonBox-ClHTzzEx.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./anchored-position-Cz4CQZsC.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";const F="prc-Skeleton-CommentCard-N8Bdo",V="prc-Skeleton-CommentCardHeading-2DxQK",R="prc-Skeleton-CommentCardHeadingText-uOrIX",B="prc-Skeleton-CommentCardUserMeta-2kAaA",W="prc-Skeleton-CommentCardDate-YaT20",$="prc-Skeleton-CommentsSpacing-3v4b9",p={CommentCard:F,CommentCardHeading:V,CommentCardHeadingText:R,CommentCardUserMeta:B,CommentCardDate:W,CommentsSpacing:$},_e={title:"Components/Skeleton/Examples"},M=3,f={username:"monalisa",date:"on Jan 1",comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",avatarSrc:"https://avatars.githubusercontent.com/u/7143434?v=4"},E=e=>{const t=j.c(2),{children:l}=e;let n;return t[0]!==l?(n=a.jsx("div",{className:p.CommentCard,children:l}),t[0]=l,t[1]=n):n=t[1],n},_=e=>{const t=j.c(2),{children:l}=e;let n;return t[0]!==l?(n=a.jsx("div",{className:p.CommentCardHeading,children:l}),t[0]=l,t[1]=n):n=t[1],n},S=()=>{const e=j.c(18),[t,l]=v.useState(!0),[n,m]=v.useState(!1);let d;e[0]!==t?(d=()=>{l(!t),m(t)},e[0]=t,e[1]=d):d=e[1];const c=d;let s;e[2]!==t?(s=t?a.jsx(b,{children:"Comments are loading"}):null,e[2]=t,e[3]=s):s=e[3];const C=n?"Comments are loaded":null;let o;e[4]!==C?(o=a.jsx(b,{"aria-live":"polite",children:C}),e[4]=C,e[5]=o):o=e[5];const u=t?"Stop loading":"Start loading";let i;e[6]!==u||e[7]!==c?(i=a.jsx(A,{onClick:c,children:u}),e[6]=u,e[7]=c,e[8]=i):i=e[8];let r;e[9]!==t?(r=Array.from({length:M},(H,I)=>a.jsxs(E,{"aria-busy":t,children:[a.jsx(_,{children:t?a.jsxs(a.Fragment,{children:[a.jsx(N,{size:32}),a.jsx(k,{maxWidth:"80px",className:p.CommentCardHeadingText})]}):a.jsxs(a.Fragment,{children:[a.jsx(D,{src:f.avatarSrc,size:32}),a.jsxs("div",{className:p.CommentCardUserMeta,children:[a.jsx(x,{children:f.username}),a.jsx(x,{className:p.CommentCardDate,children:f.date}),a.jsx(w,{icon:L,size:"small","aria-label":"Comment actions",variant:"invisible"})]})]})}),t?a.jsx(k,{lines:2}):a.jsx(x,{children:f.comment})]},I)),e[9]=t,e[10]=r):r=e[10];let g;e[11]!==i||e[12]!==r?(g=a.jsxs("div",{className:p.CommentsSpacing,children:[i,r]}),e[11]=i,e[12]=r,e[13]=g):g=e[13];let h;return e[14]!==s||e[15]!==o||e[16]!==g?(h=a.jsxs(a.Fragment,{children:[s,o,g]}),e[14]=s,e[15]=o,e[16]=g,e[17]=h):h=e[17],h},y=()=>{const e=j.c(14);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=O({key:"comments-loading-with-suspense",delay:3e3}),e[0]=t):t=e[0];const l=t,[n,m]=v.useState("pending");let d,c;e[1]===Symbol.for("react.memo_cache_sentinel")?(d=()=>{(async()=>{try{await l,m("fulfilled")}catch{}})()},c=[l],e[1]=d,e[2]=c):(d=e[1],c=e[2]),v.useEffect(d,c);let s;e[3]!==n?(s=n==="pending"?a.jsx(b,{children:"Comments are loading"}):null,e[3]=n,e[4]=s):s=e[4];const C=n==="fulfilled"?"Comments are loaded":null;let o;e[5]!==C?(o=a.jsx(b,{"aria-live":"polite",children:C}),e[5]=C,e[6]=o):o=e[6];const u=n==="pending";let i;e[7]===Symbol.for("react.memo_cache_sentinel")?(i=Array.from({length:M},(h,H)=>a.jsx(E,{children:a.jsx(z.Suspense,{fallback:a.jsxs(a.Fragment,{children:[a.jsxs(_,{children:[a.jsx(N,{size:32}),a.jsx(k,{maxWidth:"80px",className:p.CommentCardHeadingText})]}),a.jsx(k,{lines:2})]}),children:a.jsx(P,{promise:l})})},H)),e[7]=i):i=e[7];let r;e[8]!==u?(r=a.jsx("div",{className:p.CommentsSpacing,"aria-busy":u,children:i}),e[8]=u,e[9]=r):r=e[9];let g;return e[10]!==s||e[11]!==o||e[12]!==r?(g=a.jsxs(a.Fragment,{children:[s,o,r]}),e[10]=s,e[11]=o,e[12]=r,e[13]=g):g=e[13],g},P=e=>{const t=j.c(20),{promise:l}=e;let n;t[0]!==l?(n=G(l),t[0]=l,t[1]=n):n=t[1];const m=n;let d;t[2]!==m.avatarSrc?(d=a.jsx(D,{src:m.avatarSrc,size:32}),t[2]=m.avatarSrc,t[3]=d):d=t[3];let c;t[4]!==m.username?(c=a.jsx(x,{children:m.username}),t[4]=m.username,t[5]=c):c=t[5];let s;t[6]!==m.date?(s=a.jsx(x,{className:p.CommentCardDate,children:m.date}),t[6]=m.date,t[7]=s):s=t[7];let C;t[8]===Symbol.for("react.memo_cache_sentinel")?(C=a.jsx(w,{icon:L,size:"small","aria-label":"Comment actions",variant:"invisible"}),t[8]=C):C=t[8];let o;t[9]!==c||t[10]!==s?(o=a.jsxs("div",{className:p.CommentCardUserMeta,children:[c,s,C]}),t[9]=c,t[10]=s,t[11]=o):o=t[11];let u;t[12]!==d||t[13]!==o?(u=a.jsxs(_,{children:[d,o]}),t[12]=d,t[13]=o,t[14]=u):u=t[14];let i;t[15]!==m.comment?(i=a.jsx(x,{children:m.comment}),t[15]=m.comment,t[16]=i):i=t[16];let r;return t[17]!==u||t[18]!==i?(r=a.jsxs(a.Fragment,{children:[u,i]}),t[17]=u,t[18]=i,t[19]=r):r=t[19],r},T=new Map,U=e=>new Promise(t=>setTimeout(t,e)),O=({key:e="0",delay:t=1e3})=>(T.has(e)||T.set(e,K(t)),T.get(e)),K=async e=>(await U(e),f);function G(e){if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status==="pending"||(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t})),e)}S.__docgenInfo={description:"",methods:[],displayName:"CommentsLoading"};y.__docgenInfo={description:"",methods:[],displayName:"CommentsLoadingWithSuspense"};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [loading, setLoading] = React.useState(true);
  const [loadingFinished, setLoadingFinished] = React.useState(false);
  const toggleLoadingState = () => {
    setLoading(!loading);
    setLoadingFinished(loading);
  };
  return <>
      {/** read by screen readers in place of the comments in a skeleton loading state */}
      {loading ? <VisuallyHidden>Comments are loading</VisuallyHidden> : null}
      {/** when loading is completed, it should be announced by the screen-reader */}
      <VisuallyHidden aria-live="polite">{loadingFinished ? 'Comments are loaded' : null}</VisuallyHidden>
      <div className={classes.CommentsSpacing}>
        <Button onClick={toggleLoadingState}>{loading ? 'Stop loading' : 'Start loading'}</Button>
        {Array.from({
        length: COMMENT_LIST_LENGTH
      }, (_, index) => (/* aria-busy is passed so the screenreader doesn't announce the skeleton state */
      <CommentCard key={index} aria-busy={loading}>
            <CommentCardHeading>
              {loading ? <>
                  <SkeletonAvatar size={32} />
                  <SkeletonText maxWidth="80px" className={classes.CommentCardHeadingText} />
                </> : <>
                  <Avatar src={mockData.avatarSrc} size={32} />
                  <div className={classes.CommentCardUserMeta}>
                    <Text>{mockData.username}</Text>
                    <Text className={classes.CommentCardDate}>{mockData.date}</Text>
                    {/* buttons and interactive elements should not be represented as skeleton items or shown in any way until they're ready to accept input */}
                    <IconButton icon={KebabHorizontalIcon} size="small" aria-label="Comment actions" variant="invisible" />
                  </div>
                </>}
            </CommentCardHeading>
            {loading ? <SkeletonText lines={2} /> : <Text>{mockData.comment}</Text>}
          </CommentCard>))}
      </div>
    </>;
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const dataPromise = React.useMemo(() => getData({
    key: 'comments-loading-with-suspense',
    delay: 3000
  }), []);
  const [loadingStatus, setLoadingStatus] = React.useState<string>('pending');
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        await dataPromise;
        setLoadingStatus('fulfilled');
      } catch (_error) {
        // Handle error if needed
      }
    };
    fetchData();
  }, [dataPromise]);
  return <>
      {/** read by screen readers in place of the comments in a skeleton loading state */}
      {loadingStatus === 'pending' ? <VisuallyHidden>Comments are loading</VisuallyHidden> : null}
      {/** when loading is completed, it should be announced by the screen-reader */}
      <VisuallyHidden aria-live="polite">{loadingStatus === 'fulfilled' ? 'Comments are loaded' : null}</VisuallyHidden>

      {/* aria-busy is passed so the screenreader doesn't announce the skeleton state */}
      <div className={classes.CommentsSpacing} aria-busy={loadingStatus === 'pending'}>
        {Array.from({
        length: COMMENT_LIST_LENGTH
      }, (_, index) => <CommentCard key={index}>
            <Suspense fallback={<>
                  <CommentCardHeading>
                    <SkeletonAvatar size={32} />
                    <SkeletonText maxWidth="80px" className={classes.CommentCardHeadingText} />
                  </CommentCardHeading>
                  <SkeletonText lines={2} />
                </>}>
              <SuspendedCommentCardContent promise={dataPromise} />
            </Suspense>
          </CommentCard>)}
      </div>
    </>;
}`,...y.parameters?.docs?.source}}};const Le=["CommentsLoading","CommentsLoadingWithSuspense"];export{S as CommentsLoading,y as CommentsLoadingWithSuspense,Le as __namedExportsOrder,_e as default};
