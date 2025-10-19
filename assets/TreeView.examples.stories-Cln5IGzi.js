import{d as T,j as t,R as f}from"./iframe-Cfz2vXeE.js";import{G as V,aD as k,v as S,a4 as _}from"./index.esm-C1WN7kEu.js";import{T as s}from"./TreeView-DJOs8051.js";import{I as D}from"./IconButton-qXcIkMuV.js";import{D as A}from"./Dialog-BYWFp9hz.js";import{c as x}from"./TreeViewStories.module-DGXb_uKY.js";import"./preload-helper-D9Z9MdNV.js";import"./ConfirmationDialog-oJkiCKoM.js";import"./client-BWxrjV1N.js";import"./useFocusZone-BvuuCBlY.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./warning-CmA-h2kW.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useSlots-BdLPLn0-.js";import"./index-C-OhZ25x.js";import"./Link-Dm7wEaum.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./invariant-Dix8OlSS.js";import"./Heading-Axc3-HQM.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./Truncate-DUc3hzfC.js";import"./Tooltip-BuVThTi0.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./Button-3sCteC9V.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./SkeletonAvatar-BkIUeqtZ.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./Avatar-Oyvcp9WV.js";import"./SkeletonBox-ClHTzzEx.js";import"./SkeletonText-Dy-H_Tj2.js";import"./useFocusTrap-CL_Yl_fl.js";import"./Portal-BKCn1yDJ.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./ScrollableRegion-CKacTlaY.js";import"./useOverflow-CIpObA8I.js";const Ne={title:"Components/TreeView/Examples",component:s,decorators:[i=>t.jsx("div",{className:x.WidthContraintContainer,children:t.jsx(i,{})})]},u=()=>{const i=T.c(2);let e;i[0]===Symbol.for("react.memo_cache_sentinel")?(e=t.jsx(w,{id:"item-1",children:"Item 1"}),i[0]=e):e=i[0];let r;return i[1]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx("div",{className:x.DraggableItemContainer,children:t.jsxs(s,{"aria-label":"Issues",children:[e,t.jsxs(w,{id:"item-2",children:["Item 2",t.jsxs(s.SubTree,{children:[t.jsx(s.Item,{id:"item-2-sub-task-1",children:"sub task 1"}),t.jsx(s.Item,{id:"item-2-sub-task-2",children:"sub task 2"})]})]}),t.jsx(w,{id:"item-3",children:"Item 3"})]})}),i[1]=r):r=i[1],r},w=i=>{const e=T.c(5),{id:r,children:o}=i,[a,n]=f.useState(!1);let m;e[0]===Symbol.for("react.memo_cache_sentinel")?(m=t.jsx(s.LeadingAction,{children:t.jsx(D,{icon:k,variant:"invisible","aria-label":"Reorder item",className:x.TreeViewLeadingAction,draggable:"true",onDragStart:()=>{n(!1)}})}),e[0]=m):m=e[0];let l;return e[1]!==o||e[2]!==a||e[3]!==r?(l=t.jsx(t.Fragment,{children:t.jsxs(s.Item,{id:r,className:x.TreeViewItem,expanded:a,onExpandedChange:n,children:[m,o]})}),e[1]=o,e[2]=a,e[3]=r,e[4]=l):l=e[4],l},I=()=>{const i=T.c(5);let e,r;i[0]===Symbol.for("react.memo_cache_sentinel")?(e=t.jsx("h2",{children:"Trailing Actions: Example with dialog"}),r=t.jsx("p",{children:" Press (Command + Shift + U) or (Control + Shift + U) to interact with the trailing action"}),i[0]=e,i[1]=r):(e=i[0],r=i[1]);let o;i[2]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsx(s.Item,{id:"item-1",children:"Item 1"}),i[2]=o):o=i[2];let a;i[3]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsxs(y,{id:"item-2",dialogOnOpen:!0,children:["Item 2",t.jsxs(s.SubTree,{children:[t.jsx(s.Item,{id:"item-2-sub-task-1",children:"sub task 1"}),t.jsx(s.Item,{id:"item-2-sub-task-2",children:"sub task 2"})]})]}),i[3]=a):a=i[3];let n;return i[4]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsxs("div",{children:[e,r,t.jsxs(s,{"aria-label":"Issues",children:[o,a,t.jsx(s.Item,{id:"item-3",secondaryActions:[{label:"Pull Requests",onClick:R,icon:V}],children:"Item 3"})]})]}),i[4]=n):n=i[4],n},y=i=>{const e=T.c(14),{id:r,dialogOnOpen:o,children:a}=i,[n,m]=f.useState(!1),[l,j]=f.useState(!1),C=f.useRef(null);let g;e[0]!==o?(g=()=>{o||C.current?.focus(),o&&j(!0)},e[0]=o,e[1]=g):g=e[1];const b=g;let c;e[2]!==b?(c=[{label:"Item settings",onClick:b,icon:S},{label:"Issues",onClick:b,icon:_}],e[2]=b,e[3]=c):c=e[3];let d;e[4]!==a||e[5]!==n||e[6]!==r||e[7]!==c?(d=t.jsx(s.Item,{id:r,className:"treeview-item",expanded:n,onExpandedChange:m,secondaryActions:c,children:a}),e[4]=a,e[5]=n,e[6]=r,e[7]=c,e[8]=d):d=e[8];let p;e[9]!==l?(p=l?t.jsx(A,{title:"My Dialog",onClose:()=>j(!1),children:"Dialog that opens when the trailing action is clicked."}):null,e[9]=l,e[10]=p):p=e[10];let h;return e[11]!==d||e[12]!==p?(h=t.jsxs(t.Fragment,{children:[d,p]}),e[11]=d,e[12]=p,e[13]=h):h=e[13],h};u.__docgenInfo={description:"",methods:[],displayName:"DraggableListItem"};I.__docgenInfo={description:"",methods:[],displayName:"TrailingActions"};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <div className={classes.DraggableItemContainer}>
      <TreeView aria-label="Issues">
        <ControlledDraggableItem id="item-1">Item 1</ControlledDraggableItem>
        <ControlledDraggableItem id="item-2">
          Item 2
          <TreeView.SubTree>
            <TreeView.Item id="item-2-sub-task-1">sub task 1</TreeView.Item>
            <TreeView.Item id="item-2-sub-task-2">sub task 2</TreeView.Item>
          </TreeView.SubTree>
        </ControlledDraggableItem>
        <ControlledDraggableItem id="item-3">Item 3</ControlledDraggableItem>
      </TreeView>
    </div>;
}`,...u.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <div>
      <h2>Trailing Actions: Example with dialog</h2>
      <p> Press (Command + Shift + U) or (Control + Shift + U) to interact with the trailing action</p>
      <TreeView aria-label="Issues">
        <TreeView.Item id="item-1">Item 1</TreeView.Item>
        <TrailingAction id="item-2" dialogOnOpen={true}>
          Item 2
          <TreeView.SubTree>
            <TreeView.Item id="item-2-sub-task-1">sub task 1</TreeView.Item>
            <TreeView.Item id="item-2-sub-task-2">sub task 2</TreeView.Item>
          </TreeView.SubTree>
        </TrailingAction>
        <TreeView.Item id="item-3" secondaryActions={[{
        label: 'Pull Requests',
        onClick: () => alert('Pull Requests clicked'),
        icon: GitPullRequestIcon
      }]}>
          Item 3
        </TreeView.Item>
      </TreeView>
    </div>;
}`,...I.parameters?.docs?.source}}};function R(){return alert("Pull Requests clicked")}const Pe=["DraggableListItem","TrailingActions"];export{u as DraggableListItem,I as TrailingActions,Pe as __namedExportsOrder,Ne as default};
