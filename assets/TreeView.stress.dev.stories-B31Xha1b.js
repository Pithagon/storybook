import{d as s,j as e}from"./iframe-Cfz2vXeE.js";import{S as a}from"./StressTest--2mSJfiK.js";import{T as i}from"./TreeView-DJOs8051.js";import{aG as p,aH as c}from"./index.esm-C1WN7kEu.js";import{O as l}from"./Octicon-B0A15aaM.js";import"./preload-helper-D9Z9MdNV.js";import"./Text-BbpDCwQY.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./Button-3sCteC9V.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./ConfirmationDialog-oJkiCKoM.js";import"./client-BWxrjV1N.js";import"./Dialog-BYWFp9hz.js";import"./IconButton-qXcIkMuV.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./anchored-position-Cz4CQZsC.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./useFocusTrap-CL_Yl_fl.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./event-listener-signal-Pp6mWBoo.js";import"./useFocusZone-BvuuCBlY.js";import"./focus-zone-ZDpdvBtN.js";import"./Portal-BKCn1yDJ.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./ScrollableRegion-CKacTlaY.js";import"./useOverflow-CIpObA8I.js";import"./useSlots-BdLPLn0-.js";import"./index-C-OhZ25x.js";import"./Link-Dm7wEaum.js";import"./Heading-Axc3-HQM.js";import"./BoxWithFallback-BKnPTtUo.js";import"./Box-BgR2Y17o.js";import"./Truncate-DUc3hzfC.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./SkeletonAvatar-BkIUeqtZ.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./Avatar-Oyvcp9WV.js";import"./SkeletonBox-ClHTzzEx.js";import"./SkeletonText-Dy-H_Tj2.js";const ge={title:"StressTests/Components/TreeView",component:i},m=100,d=Array.from({length:m},(t,r)=>({name:`File_${r+1}.tsx`})),o=()=>{const t=s.c(1);let r;return t[0]===Symbol.for("react.memo_cache_sentinel")?(r=e.jsx(a,{componentName:"TreeView",title:"Simple current update",description:"Marking a file as current from a large list.",totalIterations:m,renderIteration:u}),t[0]=r):r=t[0],r};o.__docgenInfo={description:"",methods:[],displayName:"CurrentUpdate"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <StressTest componentName="TreeView" title="Simple current update" description="Marking a file as current from a large list." totalIterations={totalIterations} renderIteration={count => <TreeView aria-label="Files changed">
          <TreeView.Item id="src" defaultExpanded>
            <TreeView.LeadingVisual>
              <TreeView.DirectoryIcon />
            </TreeView.LeadingVisual>
            src
            <TreeView.SubTree>
              {Files.map((file, index) => <TreeView.Item key={index} id={\`src/\${file.name}\`} current={index === count}>
                  <TreeView.LeadingVisual>
                    <FileIcon />
                  </TreeView.LeadingVisual>
                  {file.name}
                  <TreeView.TrailingVisual label="Added">
                    <Octicon icon={DiffAddedIcon} color="success.fg" />
                  </TreeView.TrailingVisual>
                </TreeView.Item>)}
            </TreeView.SubTree>
          </TreeView.Item>
        </TreeView>} />;
}`,...o.parameters?.docs?.source}}};function u(t){return e.jsx(i,{"aria-label":"Files changed",children:e.jsxs(i.Item,{id:"src",defaultExpanded:!0,children:[e.jsx(i.LeadingVisual,{children:e.jsx(i.DirectoryIcon,{})}),"src",e.jsx(i.SubTree,{children:d.map((r,n)=>e.jsxs(i.Item,{id:`src/${r.name}`,current:n===t,children:[e.jsx(i.LeadingVisual,{children:e.jsx(p,{})}),r.name,e.jsx(i.TrailingVisual,{label:"Added",children:e.jsx(l,{icon:c,color:"success.fg"})})]},n))})]})})}const we=["CurrentUpdate"];export{o as CurrentUpdate,we as __namedExportsOrder,ge as default};
