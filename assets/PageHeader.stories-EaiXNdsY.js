import{d as de,j as t}from"./iframe-Cfz2vXeE.js";import{U as T}from"./index-DRPM3YQ-.js";import{L as he}from"./Label-ibdJir2D.js";import{O as me,C as pe,G as ge,i as ue,am as be,an as fe,ar as xe,as as Te,K as le,aq as Pe,P as ye,p as Ae}from"./index.esm-C1WN7kEu.js";import{O as ve}from"./story-helpers-BdHCBPxk.js";import{P as i}from"./PageHeader-CMIx6WgS.js";import{H as M}from"./Hidden-Bd42JrkY.js";import{B as P}from"./Breadcrumbs-DTy6lVDF.js";import{S as Be}from"./StateLabel-CuR3qV9s.js";import{L as He}from"./Link-Dm7wEaum.js";import{B as R}from"./BranchName-CBbHizhd.js";import{T as ce}from"./Text-BbpDCwQY.js";import{B as se}from"./Button-3sCteC9V.js";import{I as q}from"./IconButton-qXcIkMuV.js";import"./preload-helper-D9Z9MdNV.js";import"./useResizeObserver-CkcKl7_1.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./anchored-position-Cz4CQZsC.js";import"./UnderlineTabbedInterface-B-g35VdW.js";import"./CounterLabel-DnnBMwbH.js";import"./VisuallyHidden-BShfgJrZ.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./index-C-OhZ25x.js";import"./useSlots-BdLPLn0-.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./Truncate-DUc3hzfC.js";import"./Spinner-CP1_WO7z.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./useFeatureFlag-paATTdb3.js";import"./Details-CeoVu8Bo.js";import"./useMergedRefs-CMoMpGtu.js";import"./Octicon-B0A15aaM.js";const Ce="prc-PageHeader-PaddingContainer-zwSLB",Le="prc-PageHeader-DescriptionText-jeNeE",je="prc-PageHeader-BoldLink-6k-EV",y={PaddingContainer:Ce,DescriptionText:Le,BoldLink:je},kt={title:"Components/PageHeader",parameters:{layout:"fullscreen",controls:{expanded:!0}},args:{hasContextArea:!1,hasParentLink:!0,ParentLink:"Previous page",hasContextBar:!1,hasContextAreaAction:!0,hasLeadingAction:!1,hasTitle:!0,Title:"Branches","Title.as":"h2","Title.variant":"medium",hasLeadingVisual:!1,LeadingVisual:me,hasTrailingVisual:!1,hasTrailingAction:!1,hasActions:!1,hasDescription:!1,hasNavigation:!1},argTypes:{hasContextArea:{type:"boolean",table:{category:"ContextArea Slot",type:{summary:"string"}},description:"ContextArea is only visible on narrow viewports by default to provide user context of where they are at their journey."},hasBorder:{type:"boolean"},ParentLink:{type:"string",if:{arg:"hasContextArea"},table:{category:"ContextArea Slot"},description:"The default way to let users navigate up in the hierarchy on Narrow viewports."},hasParentLink:{type:"boolean",if:{arg:"hasContextArea"},table:{category:"ContextArea Slot"},description:"Parent "},hasContextBar:{type:"boolean",if:{arg:"hasContextArea"},table:{category:"ContextArea Slot"},description:"ContextBar is generic slot for any component above the title region. Use it for custom breadcrumbs and other navigation elements instead of ParentLink."},hasContextAreaAction:{type:"boolean",if:{arg:"hasContextArea"},table:{category:"ContextArea Slot"}},hasLeadingAction:{type:"boolean",table:{category:"TitleArea Slot"},description:"A back button can be used as a leading action for local navigation. On Narrow viewports, use parentLink instead."},hasTitle:{type:"boolean",table:{category:"TitleArea Slot"},description:"ContextBar is generic slot for any component above the title region. Use it for custom breadcrumbs and other navigation elements instead of ParentLink."},Title:{type:"string",table:{category:"TitleArea Slot"}},"Title.as":{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6"],table:{category:"TitleArea Slot"}},"Title.variant":{control:{type:"radio"},options:["large","medium","subtitle"],table:{category:"TitleArea Slot"},description:"`medium` is the most common page title size. Use for static titles in most situations. `large` for for user-generated content such as issues, pull requests, or discussions. `subtitle` when a PageHeader.Title is already present in the page, such as in a SplitPageLayout."},hasLeadingVisual:{type:"boolean",table:{category:"TitleArea Slot"}},LeadingVisual:{...ve([pe,ge,ue]),table:{category:"TitleArea Slot"},description:"Leading visualLeading visuals are optional and appear at the start of the title. They can be octicons, avatars, and other custom visuals that fit a small area."},hasTrailingVisual:{type:"boolean",table:{category:"TitleArea Slot"},description:"Trailing visualTrailing visual and trailing text can display auxiliary information. They are placed at the right of the item, and can denote status, privacy details, etc."},hasTrailingAction:{type:"boolean",table:{category:"TitleArea Slot"}},hasActions:{type:"boolean",table:{category:"TitleArea Slot"},description:"Description region/slot"},hasDescription:{type:"boolean",table:{category:"Other Slots"},description:"Description region/slot"},hasNavigation:{type:"boolean",table:{category:"Other Slots"},description:"Description region/slot"}}},A=a=>{const e=de.c(69),F=a["Title.variant"],K=a["Title.variant"],$=a["Title.variant"];let r;e[0]!==F||e[1]!==K||e[2]!==$?(r={narrow:F,regular:K,wide:$},e[0]=F,e[1]=K,e[2]=$,e[3]=r):r=e[3];const J=!a.hasLeadingVisual;let n;e[4]!==a.LeadingVisual?(n=t.jsx(a.LeadingVisual,{}),e[4]=a.LeadingVisual,e[5]=n):n=e[5];let o;e[6]!==J||e[7]!==n?(o=t.jsx(i.LeadingVisual,{hidden:J,children:n}),e[6]=J,e[7]=n,e[8]=o):o=e[8];const Q=a["Title.as"],W=!a.hasTitle;let s;e[9]!==a.Title||e[10]!==Q||e[11]!==W?(s=t.jsx(i.Title,{as:Q,hidden:W,children:a.Title}),e[9]=a.Title,e[10]=Q,e[11]=W,e[12]=s):s=e[12];const X=!a.hasTrailingVisual;let B;e[13]===Symbol.for("react.memo_cache_sentinel")?(B=t.jsx(he,{children:"Beta"}),e[13]=B):B=e[13];let l;e[14]!==X?(l=t.jsx(i.TrailingVisual,{hidden:X,children:B}),e[14]=X,e[15]=l):l=e[15];let c;e[16]!==l||e[17]!==r||e[18]!==o||e[19]!==s?(c=t.jsxs(i.TitleArea,{variant:r,children:[o,s,l]}),e[16]=l,e[17]=r,e[18]=o,e[19]=s,e[20]=c):c=e[20];const Y=!a.hasContextArea,Z=!a.hasParentLink;let d;e[21]!==a.ParentLink||e[22]!==Z?(d=t.jsx(i.ParentLink,{href:"http://github.com",hidden:Z,children:a.ParentLink}),e[21]=a.ParentLink,e[22]=Z,e[23]=d):d=e[23];const ee=!a.hasContextBar;let H;e[24]===Symbol.for("react.memo_cache_sentinel")?(H=t.jsxs(P,{children:[t.jsx(P.Item,{href:"https://github.com/primer/react/tree/main",children:"react"}),t.jsx(P.Item,{href:"https://github.com/primer/react/tree/main/src",children:"src"}),t.jsx(P.Item,{href:"https://github.com/primer/react/tree/main/src/PageHeader",children:"PageHeader"}),t.jsx(P.Item,{href:"https://github.com/primer/react/blob/main/src/PageHeader/PageHeader.tsx",children:"PageHeader.tsx"})]}),e[24]=H):H=e[24];let m;e[25]!==ee?(m=t.jsx(i.ContextBar,{hidden:ee,children:H}),e[25]=ee,e[26]=m):m=e[26];const te=!a.hasContextAreaAction;let C,L;e[27]===Symbol.for("react.memo_cache_sentinel")?(C=t.jsx(se,{size:"small",leadingVisual:me,children:"Main"}),L=t.jsx(q,{size:"small","aria-label":"More",icon:le}),e[27]=C,e[28]=L):(C=e[27],L=e[28]);let h;e[29]!==te?(h=t.jsxs(i.ContextAreaActions,{hidden:te,children:[C,L]}),e[29]=te,e[30]=h):h=e[30];let p;e[31]!==Y||e[32]!==d||e[33]!==m||e[34]!==h?(p=t.jsxs(i.ContextArea,{hidden:Y,children:[d,m,h]}),e[31]=Y,e[32]=d,e[33]=m,e[34]=h,e[35]=p):p=e[35];const ae=!a.hasLeadingAction;let j;e[36]===Symbol.for("react.memo_cache_sentinel")?(j=t.jsx(q,{"aria-label":"Expand",icon:Pe,variant:"invisible"}),e[36]=j):j=e[36];let g;e[37]!==ae?(g=t.jsxs(i.LeadingAction,{hidden:ae,children:[j," "]}),e[37]=ae,e[38]=g):g=e[38];const ie=!a.hasTrailingAction;let I;e[39]===Symbol.for("react.memo_cache_sentinel")?(I=t.jsx(q,{"aria-label":"Edit",icon:ye,variant:"invisible"}),e[39]=I):I=e[39];let u;e[40]!==ie?(u=t.jsx(i.TrailingAction,{hidden:ie,children:I}),e[40]=ie,e[41]=u):u=e[41];const re=!a.hasActions;let N;e[42]===Symbol.for("react.memo_cache_sentinel")?(N=t.jsx(M,{when:["narrow"],children:t.jsx(se,{variant:"primary",children:"New Branch"})}),e[42]=N):N=e[42];let w,S;e[43]===Symbol.for("react.memo_cache_sentinel")?(w=t.jsx(M,{when:["regular","wide","narrow"],children:t.jsx(se,{variant:"primary",children:"New"})}),S=t.jsx(q,{"aria-label":"More",icon:le}),e[43]=w,e[44]=S):(w=e[43],S=e[44]);let b;e[45]!==re?(b=t.jsxs(i.Actions,{hidden:re,children:[N,w,S]}),e[45]=re,e[46]=b):b=e[46];const ne=!a.hasDescription;let _;e[47]===Symbol.for("react.memo_cache_sentinel")?(_=t.jsx(Be,{status:"pullOpened",children:"Open"}),e[47]=_):_=e[47];let k;e[48]===Symbol.for("react.memo_cache_sentinel")?(k=["narrow"],e[48]=k):k=e[48];let D;e[49]===Symbol.for("react.memo_cache_sentinel")?(D=t.jsx(He,{href:"https://github.com/broccolinisoup",className:y.BoldLink,children:"broccolinisoup"}),e[49]=D):D=e[49];let V;e[50]===Symbol.for("react.memo_cache_sentinel")?(V=t.jsx(R,{href:"https://github.com/primer/react",children:"main"}),e[50]=V):V=e[50];let U;e[51]===Symbol.for("react.memo_cache_sentinel")?(U=t.jsx(M,{when:k,children:t.jsxs(ce,{className:y.DescriptionText,children:[D," ","wants to merge 3 commits into ",V," from"," ",t.jsx(R,{href:"https://github.com/primer/react",children:"broccolinisoup/switch-to-new-underlineNav"})]})}),e[51]=U):U=e[51];let E;e[52]===Symbol.for("react.memo_cache_sentinel")?(E=["regular","wide"],e[52]=E):E=e[52];let O;e[53]===Symbol.for("react.memo_cache_sentinel")?(O=t.jsx(M,{when:E,children:t.jsxs(ce,{className:y.DescriptionText,children:[t.jsx(R,{href:"https://github.com/primer/react",children:"main"}),t.jsx(Ae,{}),t.jsx(R,{href:"https://github.com/primer/react",children:"page-header-initial"})]})}),e[53]=O):O=e[53];let f;e[54]!==ne?(f=t.jsxs(i.Description,{hidden:ne,children:[_,U,O]}),e[54]=ne,e[55]=f):f=e[55];const oe=!a.hasNavigation;let z;e[56]===Symbol.for("react.memo_cache_sentinel")?(z=t.jsxs(T,{"aria-label":"Pull Request",children:[t.jsx(T.Item,{icon:be,counter:"12","aria-current":"page",children:"Conversation"}),t.jsx(T.Item,{counter:3,icon:fe,children:"Commits"}),t.jsx(T.Item,{counter:7,icon:xe,children:"Checks"}),t.jsx(T.Item,{counter:4,icon:Te,children:"Files Changes"})]}),e[56]=z):z=e[56];let x;e[57]!==oe?(x=t.jsx(i.Navigation,{hidden:oe,children:z}),e[57]=oe,e[58]=x):x=e[58];let G;return e[59]!==a.Title||e[60]!==a.hasBorder||e[61]!==c||e[62]!==p||e[63]!==g||e[64]!==u||e[65]!==b||e[66]!==f||e[67]!==x?(G=t.jsx("div",{className:y.PaddingContainer,children:t.jsxs(i,{"aria-label":a.Title,role:"banner",hasBorder:a.hasBorder,children:[c,p,g,u,b,f,x]})}),e[59]=a.Title,e[60]=a.hasBorder,e[61]=c,e[62]=p,e[63]=g,e[64]=u,e[65]=b,e[66]=f,e[67]=x,e[68]=G):G=e[68],G},v=()=>{const a=de.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=t.jsx("div",{className:y.PaddingContainer,children:t.jsx(i,{role:"banner","aria-label":"Title",children:t.jsx(i.TitleArea,{children:t.jsx(i.Title,{children:"Title"})})})}),a[0]=e):e=a[0],e};A.__docgenInfo={description:"",methods:[],displayName:"Playground"};v.__docgenInfo={description:"",methods:[],displayName:"Default"};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => <div className={classes.PaddingContainer}>
    <PageHeader aria-label={args.Title} role="banner" hasBorder={args.hasBorder}>
      <PageHeader.TitleArea variant={{
      narrow: args['Title.variant'],
      regular: args['Title.variant'],
      wide: args['Title.variant']
    }}>
        <PageHeader.LeadingVisual hidden={!args.hasLeadingVisual}>{<args.LeadingVisual />}</PageHeader.LeadingVisual>
        <PageHeader.Title as={args['Title.as']} hidden={!args.hasTitle}>
          {args.Title}
        </PageHeader.Title>
        <PageHeader.TrailingVisual hidden={!args.hasTrailingVisual}>
          <Label>Beta</Label>
        </PageHeader.TrailingVisual>
      </PageHeader.TitleArea>
      <PageHeader.ContextArea hidden={!args.hasContextArea}>
        <PageHeader.ParentLink href="http://github.com" hidden={!args.hasParentLink}>
          {args.ParentLink}
        </PageHeader.ParentLink>

        <PageHeader.ContextBar hidden={!args.hasContextBar}>
          <Breadcrumbs>
            <Breadcrumbs.Item href="https://github.com/primer/react/tree/main">react</Breadcrumbs.Item>
            <Breadcrumbs.Item href="https://github.com/primer/react/tree/main/src">src</Breadcrumbs.Item>
            <Breadcrumbs.Item href="https://github.com/primer/react/tree/main/src/PageHeader">
              PageHeader
            </Breadcrumbs.Item>
            <Breadcrumbs.Item href="https://github.com/primer/react/blob/main/src/PageHeader/PageHeader.tsx">
              PageHeader.tsx
            </Breadcrumbs.Item>
          </Breadcrumbs>
        </PageHeader.ContextBar>

        <PageHeader.ContextAreaActions hidden={!args.hasContextAreaAction}>
          <Button size="small" leadingVisual={GitBranchIcon}>
            Main
          </Button>
          <IconButton size="small" aria-label="More" icon={KebabHorizontalIcon} />
        </PageHeader.ContextAreaActions>
      </PageHeader.ContextArea>
      <PageHeader.LeadingAction hidden={!args.hasLeadingAction}>
        <IconButton aria-label="Expand" icon={SidebarExpandIcon} variant="invisible" />{' '}
      </PageHeader.LeadingAction>
      <PageHeader.TrailingAction hidden={!args.hasTrailingAction}>
        <IconButton aria-label="Edit" icon={PencilIcon} variant="invisible" />
      </PageHeader.TrailingAction>
      <PageHeader.Actions hidden={!args.hasActions}>
        <Hidden when={['narrow']}>
          <Button variant="primary">New Branch</Button>
        </Hidden>

        <Hidden when={['regular', 'wide', 'narrow']}>
          <Button variant="primary">New</Button>
        </Hidden>
        <IconButton aria-label="More" icon={KebabHorizontalIcon} />
      </PageHeader.Actions>
      <PageHeader.Description hidden={!args.hasDescription}>
        <StateLabel status="pullOpened">Open</StateLabel>
        <Hidden when={['narrow']}>
          <Text className={classes.DescriptionText}>
            <Link href="https://github.com/broccolinisoup" className={classes.BoldLink}>
              broccolinisoup
            </Link>{' '}
            wants to merge 3 commits into <BranchName href="https://github.com/primer/react">main</BranchName> from{' '}
            <BranchName href="https://github.com/primer/react">broccolinisoup/switch-to-new-underlineNav</BranchName>
          </Text>
        </Hidden>
        <Hidden when={['regular', 'wide']}>
          <Text className={classes.DescriptionText}>
            <BranchName href="https://github.com/primer/react">main</BranchName>
            <ArrowRightIcon />
            <BranchName href="https://github.com/primer/react">page-header-initial</BranchName>
          </Text>
        </Hidden>
      </PageHeader.Description>
      <PageHeader.Navigation hidden={!args.hasNavigation}>
        <UnderlineNav aria-label="Pull Request">
          <UnderlineNav.Item icon={CommentDiscussionIcon} counter="12" aria-current="page">
            Conversation
          </UnderlineNav.Item>
          <UnderlineNav.Item counter={3} icon={GitCommitIcon}>
            Commits
          </UnderlineNav.Item>
          <UnderlineNav.Item counter={7} icon={ChecklistIcon}>
            Checks
          </UnderlineNav.Item>
          <UnderlineNav.Item counter={4} icon={FileDiffIcon}>
            Files Changes
          </UnderlineNav.Item>
        </UnderlineNav>
      </PageHeader.Navigation>
    </PageHeader>
  </div>`,...A.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <div className={classes.PaddingContainer}>
    <PageHeader role="banner" aria-label="Title">
      <PageHeader.TitleArea>
        <PageHeader.Title>Title</PageHeader.Title>
      </PageHeader.TitleArea>
    </PageHeader>
  </div>`,...v.parameters?.docs?.source}}};const Dt=["Playground","Default"];export{v as Default,A as Playground,Dt as __namedExportsOrder,kt as default};
