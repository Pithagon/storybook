import{j as e,R as l}from"./iframe-Cfz2vXeE.js";import{M as V,K as C,g as w,h as G,i as E,j as B,N as R,k as H,X as Q,s as _,t as T,W as F,u as W,v as N,w as U,x as P,m as K}from"./index.esm-C1WN7kEu.js";import{A as t}from"./index-C-OhZ25x.js";import{F as D}from"./FormControl-qjqH6r5D.js";import{T as Y}from"./TextInput-hhRVe1zi.js";import{A as i}from"./ActionMenu-VmSenYrX.js";import{B as b}from"./Button-3sCteC9V.js";import{I as k}from"./IconButton-qXcIkMuV.js";import"./preload-helper-D9Z9MdNV.js";import"./Link-Dm7wEaum.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./invariant-Dix8OlSS.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./Truncate-DUc3hzfC.js";import"./Tooltip-BuVThTi0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./TextInputWrapper-A6-jRRIw.js";import"./InputLabel-BWKIqz-Q.js";import"./FilteredActionList-Lzw7hr5X.js";import"./useProvidedStateOrCreate-BEKIGSkE.js";import"./SkeletonBox-ClHTzzEx.js";import"./useFeatureFlag-paATTdb3.js";import"./Checkbox-BHvnb8mU.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./Overlay-Du2pzphD.js";import"./Portal-BKCn1yDJ.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./Token-B_OnxjPX.js";import"./Textarea-DREKwwM3.js";import"./Octicon-B0A15aaM.js";import"./LinkButton-D-EvgNXE.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./index-CEFMyGLK.js";import"./useMergedRefs-CMoMpGtu.js";import"./useMnemonics-D4gqZtvW.js";import"./AnchoredOverlay-DQ90Zw6u.js";import"./useFocusTrap-CL_Yl_fl.js";const $="prc-ActionMenu-Milestone-CW8Vj",z="prc-ActionMenu-CenteredFlexContainer-DbQn8",J="prc-ActionMenu-HiddenButton-oQYIt",X="prc-ActionMenu-CustomPositionMiddle-W5-P-",y={Milestone:$,CenteredFlexContainer:z,HiddenButton:J,CustomPositionMiddle:X},mt={title:"Components/ActionMenu/Examples"},d=()=>{const s=[{name:"FY21 - Q2",due:"December 31, 2021",progress:90},{name:"FY22 - Q3",due:"March 31, 2022",progress:10},{name:"FY23 - Q1",due:"June 30, 2022",progress:0},{name:"FY23 - Q2",due:"December 30, 2022",progress:0}],[o,c]=l.useState(s[2]);return e.jsxs(i,{open:!0,children:[e.jsxs(i.Button,{variant:"default",children:[e.jsx("span",{className:y.Milestone,children:"Milestone:"})," ",o?.name||"Make a selection"]}),e.jsx(i.Overlay,{width:"medium",children:e.jsxs(t,{selectionVariant:"single",showDividers:!0,children:[e.jsxs(t.Group,{children:[e.jsx(t.GroupHeading,{children:"Open"}),s.filter(n=>!n.name.includes("21")).map((n,r)=>e.jsxs(t.Item,{selected:n.name===o?.name,onSelect:()=>c(n),children:[e.jsx(t.LeadingVisual,{children:e.jsx(V,{})}),n.name,e.jsxs(t.Description,{variant:"block",children:["Due by ",n.due]})]},r))]}),e.jsxs(t.Group,{children:[e.jsx(t.GroupHeading,{children:"Closed"}),s.filter(n=>n.name.includes("21")).map((n,r)=>e.jsxs(t.Item,{selected:n.name===o?.name,onSelect:()=>c(n),children:[e.jsx(t.LeadingVisual,{children:e.jsx(V,{})}),n.name,e.jsxs(t.Description,{variant:"block",children:["Due by ",n.due]})]},r))]})]})})]})},u=()=>{const[s,o]=l.useState(!1);return e.jsx("div",{className:y.CenteredFlexContainer,children:e.jsxs(i,{open:s,onOpenChange:o,children:[e.jsx(i.Button,{children:"Menu"}),e.jsx(i.Overlay,{width:"large",align:"center",preventOverflow:!1,children:e.jsxs(t,{children:[e.jsx(t.Item,{children:"Option 1"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 2"})]})})]})})},m=()=>{const[s,o]=l.useState(!1);return e.jsx("div",{className:y.CenteredFlexContainer,children:e.jsxs(i,{open:s,onOpenChange:o,children:[e.jsx(i.Button,{children:"Menu"}),e.jsx(i.Overlay,{width:"large",align:"center",preventOverflow:!1,variant:{regular:"anchored",narrow:"fullscreen"},children:e.jsxs(t,{children:[e.jsx(t.Item,{children:"Option 1"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 2"})]})})]})})},p=()=>{const[s,o]=l.useState(""),c=O=>o(O),[n,r]=l.useState(!1),a=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Controlled Menu"}),e.jsxs("h2",{children:["External Open State: ",n?"Open":"Closed"]}),e.jsxs("h2",{children:["Last option activated: ",s]}),e.jsx("div",{children:e.jsx(b,{ref:a,onClick:()=>r(!n),children:n?"Close Menu":"Open Menu"})}),e.jsx("br",{}),e.jsxs(i,{open:n,onOpenChange:r,children:[e.jsx(i.Button,{children:"Anchor"}),e.jsx(i.Overlay,{ignoreClickRefs:[a],children:e.jsxs(t,{children:[e.jsxs(t.Item,{onSelect:()=>c("Copy link"),children:["Copy link",e.jsx(t.TrailingVisual,{children:"⌘C"})]}),e.jsxs(t.Item,{onSelect:()=>c("Quote reply"),children:["Quote reply",e.jsx(t.TrailingVisual,{children:"⌘Q"})]}),e.jsxs(t.Item,{onSelect:()=>c("Edit comment"),children:["Edit comment",e.jsx(t.TrailingVisual,{children:"⌘E"})]}),e.jsx(t.Divider,{}),e.jsxs(t.Item,{variant:"danger",onSelect:()=>c("Delete file"),children:["Delete file",e.jsx(t.TrailingVisual,{children:"⌘D"})]})]})})]})]})},A=()=>{l.useEffect(()=>{const n=r=>{r.shiftKey&&(r.key==="c"||r.key==="C")&&o(!0)};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[]);const[s,o]=l.useState(!1),c=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Shortcut Menu"}),e.jsxs("h2",{children:["External Open State: ",s?"Open":"Closed"]}),e.jsx("h2",{children:"Press Shift+C to open the menu"}),e.jsx("br",{}),e.jsxs(D,{children:[e.jsx(D.Label,{children:"Default label"}),e.jsx(Y,{})]}),e.jsxs(i,{open:s,onOpenChange:o,children:[e.jsx(i.Button,{className:y.HiddenButton,children:"Anchor"}),e.jsx(i.Overlay,{ignoreClickRefs:[c],children:e.jsxs(t,{children:[e.jsxs(t.Item,{children:["Copy link",e.jsx(t.TrailingVisual,{children:"⌘C"})]}),e.jsxs(t.Item,{children:["Quote reply",e.jsx(t.TrailingVisual,{children:"⌘Q"})]}),e.jsxs(t.Item,{children:["Edit comment",e.jsx(t.TrailingVisual,{children:"⌘E"})]}),e.jsx(t.LinkItem,{href:"#",children:"View file"}),e.jsx(t.Divider,{}),e.jsxs(t.Item,{variant:"danger",children:["Delete file",e.jsx(t.TrailingVisual,{children:"⌘D"})]})]})})]})]})},h=()=>{const s=({children:o})=>{const c=O=>{O.preventDefault(),r(!0)},[n,r]=l.useState(!1),a=l.useRef(null);return e.jsx("li",{onContextMenu:c,children:e.jsxs(i,{open:n,onOpenChange:r,anchorRef:a,children:[e.jsx(i.Anchor,{children:e.jsx(b,{ref:a,variant:"invisible",onClick:c,children:o})}),e.jsx(i.Overlay,{children:e.jsxs(t,{children:[e.jsxs(t.Item,{children:["Copy link",e.jsx(t.TrailingVisual,{children:"⌘C"})]}),e.jsxs(t.Item,{children:["Quote reply",e.jsx(t.TrailingVisual,{children:"⌘Q"})]}),e.jsxs(t.Item,{children:["Edit comment",e.jsx(t.TrailingVisual,{children:"⌘E"})]}),e.jsx(t.LinkItem,{href:"#",children:"View file"}),e.jsx(t.Divider,{}),e.jsxs(t.Item,{variant:"danger",children:["Delete file",e.jsx(t.TrailingVisual,{children:"⌘D"})]})]})})]})})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Right click the list items below to see the context menu"}),e.jsxs("ul",{children:[e.jsx(s,{children:"List item one"}),e.jsx(s,{children:"List item two"}),e.jsx(s,{children:"List item three"})]})]})},L=()=>e.jsxs(i,{children:[e.jsx(i.Anchor,{children:e.jsx(k,{icon:C,"aria-label":"Open menu"})}),e.jsx(i.Overlay,{width:"medium",children:e.jsxs(t,{children:[e.jsxs(t.Item,{onSelect:()=>alert("Copy link clicked"),children:["Copy link",e.jsx(t.TrailingVisual,{children:"⌘C"})]}),e.jsxs(t.Item,{onSelect:()=>alert("Quote reply clicked"),children:["Quote reply",e.jsx(t.TrailingVisual,{children:"⌘Q"})]}),e.jsxs(t.Item,{onSelect:()=>alert("Edit comment clicked"),children:["Edit comment",e.jsx(t.TrailingVisual,{children:"⌘E"})]}),e.jsx(t.Divider,{}),e.jsxs(t.Item,{variant:"danger",onSelect:()=>alert("Delete file clicked"),children:["Delete file",e.jsx(t.TrailingVisual,{children:"⌘D"})]})]})})]}),x=()=>e.jsxs(i,{children:[e.jsx(i.Anchor,{id:"custom-anchor-id",children:e.jsx(k,{icon:C,"aria-label":"Open menu"})}),e.jsx(i.Overlay,{width:"medium",children:e.jsxs(t,{children:[e.jsxs(t.Item,{onSelect:()=>alert("Copy link clicked"),children:["Copy link",e.jsx(t.TrailingVisual,{children:"⌘C"})]}),e.jsxs(t.Item,{onSelect:()=>alert("Quote reply clicked"),children:["Quote reply",e.jsx(t.TrailingVisual,{children:"⌘Q"})]}),e.jsxs(t.Item,{onSelect:()=>alert("Edit comment clicked"),children:["Edit comment",e.jsx(t.TrailingVisual,{children:"⌘E"})]}),e.jsx(t.Divider,{}),e.jsxs(t.Item,{variant:"danger",onSelect:()=>alert("Delete file clicked"),children:["Delete file",e.jsx(t.TrailingVisual,{children:"⌘D"})]})]})})]}),I=()=>{const[s,o]=l.useState(1),c=[{text:"Status",icon:w},{text:"Stage",icon:G},{text:"Assignee",icon:E},{text:"Team",icon:B},{text:"Estimate",icon:R},{text:"Due Date",icon:H}],n=s!==null&&c[s];return e.jsxs(i,{children:[e.jsx(i.Button,{leadingVisual:n?n.icon:void 0,children:n?`Group by ${n.text}`:"Group items by"}),e.jsx(i.Overlay,{width:"medium",children:e.jsxs(t,{children:[e.jsxs(t.Group,{selectionVariant:"single",children:[e.jsx(t.GroupHeading,{children:"Group by"}),c.map((r,a)=>e.jsxs(t.Item,{selected:a===s,onSelect:()=>o(a),children:[e.jsx(t.LeadingVisual,{children:e.jsx(r.icon,{})}),r.text]},a))]}),typeof s=="number"&&e.jsxs(t.Group,{children:[e.jsx(t.Divider,{}),e.jsxs(t.Item,{onSelect:()=>o(null),children:[e.jsx(t.LeadingVisual,{children:e.jsx(Q,{})}),"Clear Group by"]})]})]})})]})},g=()=>{const s=[{name:"Show code folding buttons"},{name:"Wrap lines"},{name:"Center content"}],[o,c]=l.useState(s[0]);return e.jsxs(i,{open:!0,children:[e.jsx(i.Anchor,{children:e.jsx(k,{icon:C,"aria-label":"Open menu"})}),e.jsx(i.Overlay,{width:"small",children:e.jsxs(t,{children:[e.jsxs(t.Group,{children:[e.jsx(t.GroupHeading,{children:"Raw file content"}),e.jsx(t.Item,{onSelect:()=>alert("Workflows clicked"),children:"Download"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{onSelect:()=>alert("Workflows clicked"),children:"Jump to line"}),e.jsx(t.Item,{onSelect:()=>alert("Workflows clicked"),children:"Find in file"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{onSelect:()=>alert("Workflows clicked"),children:"Copy path"}),e.jsx(t.Item,{onSelect:()=>alert("Workflows clicked"),children:"Copy permalink"})]}),e.jsx(t.Divider,{}),e.jsxs(t.Group,{selectionVariant:"multiple",children:[e.jsx(t.GroupHeading,{children:"View options"}),s.map((n,r)=>e.jsx(t.Item,{selected:n.name===o?.name,onSelect:()=>c(n),children:n.name},r))]}),e.jsx(t.Divider,{}),e.jsxs(t.Group,{children:[e.jsx(t.GroupHeading,{children:"View options"}),e.jsx(t.Item,{onSelect:()=>alert("Delete file"),variant:"danger",children:"Delete file"})]})]})})]})},j=()=>{const[s,o]=l.useState(!1),[c,n]=l.useState(!1),r=a=>{a.preventDefault(),n(!0),setTimeout(()=>{o(!1),n(!1)},700)};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Delayed Menu Close"}),e.jsxs(i,{open:s,onOpenChange:o,children:[e.jsx(i.Button,{children:"Anchor"}),e.jsx(i.Overlay,{children:e.jsx(t,{children:e.jsxs(t.Item,{onSelect:r,children:[e.jsx(t.LeadingVisual,{children:c?e.jsx(_,{}):e.jsx(T,{})}),c?"Copied!":"Copy link"]})})})]})]})},S=()=>e.jsxs(i,{children:[e.jsx(i.Button,{children:"Open menu"}),e.jsx(i.Overlay,{width:"medium",side:"outside-right",children:e.jsxs(t,{children:[e.jsxs(t.Item,{onSelect:()=>alert("Copy link clicked"),children:["Copy link",e.jsx(t.TrailingVisual,{children:"⌘C"})]}),e.jsxs(t.Item,{onSelect:()=>alert("Quote reply clicked"),children:["Quote reply",e.jsx(t.TrailingVisual,{children:"⌘Q"})]}),e.jsxs(t.Item,{onSelect:()=>alert("Edit comment clicked"),children:["Edit comment",e.jsx(t.TrailingVisual,{children:"⌘E"})]}),e.jsx(t.Divider,{}),e.jsxs(t.Item,{variant:"danger",onSelect:()=>alert("Delete file clicked"),children:["Delete file",e.jsx(t.TrailingVisual,{children:"⌘D"})]})]})})]}),v=()=>e.jsxs(i,{children:[e.jsx(i.Button,{children:"Open menu"}),e.jsx(i.Overlay,{width:"auto",maxHeight:"large",overflow:"auto",children:e.jsx(t,{children:Array.from({length:100},(s,o)=>e.jsxs(t.Item,{onSelect:()=>alert(`Item ${o+1} clicked`),children:["Item ",o+1]},`item-${o}`))})})]}),f=()=>e.jsxs(i,{children:[e.jsx(i.Button,{inactive:!0,children:"Open menu"}),e.jsx(i.Overlay,{width:"auto",children:e.jsxs(t,{children:[e.jsxs(t.Item,{onSelect:()=>alert("Workflows clicked"),inactiveText:"Unavailable due to an outage",children:["Workflows",e.jsx(t.LeadingVisual,{children:e.jsx(F,{})})]}),e.jsxs(t.Item,{onSelect:()=>alert("Archived items clicked"),inactiveText:"Unavailable due to an outage",children:["Archived items",e.jsx(t.LeadingVisual,{children:e.jsx(W,{})})]}),e.jsxs(t.LinkItem,{href:"/",inactiveText:"Unavailable due to an outage",children:["Settings",e.jsx(t.LeadingVisual,{children:e.jsx(N,{})})]}),e.jsxs(t.Item,{onSelect:()=>alert("Make a copy clicked"),inactiveText:"Unavailable due to an outage",children:["Make a copy",e.jsx(t.LeadingVisual,{children:e.jsx(T,{})})]}),e.jsx(t.Divider,{}),e.jsxs(t.Group,{children:[e.jsx(t.GroupHeading,{children:"Github projects"}),e.jsxs(t.LinkItem,{href:"/",inactiveText:"Unavailable due to an outage",children:["What's new",e.jsx(t.LeadingVisual,{children:e.jsx(U,{})})]}),e.jsxs(t.LinkItem,{href:"/",inactiveText:"Unavailable due to an outage",children:["Give feedback",e.jsx(t.LeadingVisual,{children:e.jsx(P,{})})]}),e.jsxs(t.LinkItem,{href:"/",inactiveText:"Unavailable due to an outage",children:["GitHub Docs",e.jsx(t.LeadingVisual,{children:e.jsx(K,{})})]})]})]})})]}),M=()=>{const[s,o]=l.useState("outside-bottom"),[c,n]=l.useState();return e.jsx(e.Fragment,{children:e.jsxs("div",{className:y.CustomPositionMiddle,children:[e.jsxs(i,{children:[e.jsx(i.Button,{children:"Open menu"}),e.jsx(i.Overlay,{width:"auto",maxHeight:"large",side:s,onPositionChange:({position:r})=>{n(r)},children:e.jsxs(t,{children:[e.jsxs(t.Group,{children:[e.jsxs(t.GroupHeading,{children:["Inside ",c?.anchorSide.includes("inside")?"(current)":null]}),e.jsx(t.Item,{onSelect:()=>o("inside-top"),children:"Inside-top"}),e.jsx(t.Item,{onSelect:()=>o("inside-bottom"),children:"Inside-bottom"}),e.jsx(t.Item,{onSelect:()=>o("inside-left"),children:"Inside-left"}),e.jsx(t.Item,{onSelect:()=>o("inside-right"),children:"Inside-right"}),e.jsx(t.Item,{onSelect:()=>o("inside-center"),children:"Inside-center"})]}),e.jsxs(t.Group,{children:[e.jsxs(t.GroupHeading,{children:["Outside ",c?.anchorSide.includes("outside")?"(current)":null]}),e.jsx(t.Item,{onSelect:()=>o("outside-top"),children:"Outside-top"}),e.jsx(t.Item,{onSelect:()=>o("outside-bottom"),children:"Outside-bottom"}),e.jsx(t.Item,{onSelect:()=>o("outside-left"),children:"Outside-left"}),e.jsx(t.Item,{onSelect:()=>o("outside-right"),children:"Outside-right"})]})]})})]}),e.jsxs("span",{children:["Current Overlay Side: ",s]})]})})};d.__docgenInfo={description:"",methods:[],displayName:"GroupsAndDescriptions"};u.__docgenInfo={description:"",methods:[],displayName:"CustomOverlayProps"};m.__docgenInfo={description:"",methods:[],displayName:"FullScreen"};p.__docgenInfo={description:"",methods:[],displayName:"ControlledMenu"};A.__docgenInfo={description:"",methods:[],displayName:"ShortcutMenu"};h.__docgenInfo={description:"",methods:[],displayName:"ContextMenu"};L.__docgenInfo={description:"",methods:[],displayName:"CustomAnchor"};x.__docgenInfo={description:"",methods:[],displayName:"CustomAnchorId"};I.__docgenInfo={description:"",methods:[],displayName:"MixedSelection"};g.__docgenInfo={description:"",methods:[],displayName:"MultipleSections"};j.__docgenInfo={description:"",methods:[],displayName:"DelayedMenuClose"};S.__docgenInfo={description:"",methods:[],displayName:"OnRightSide"};v.__docgenInfo={description:"",methods:[],displayName:"SettingMaxHeight"};f.__docgenInfo={description:"",methods:[],displayName:"OnlyInactiveItems"};M.__docgenInfo={description:"",methods:[],displayName:"DynamicAnchorSides"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const milestones = [{
    name: 'FY21 - Q2',
    due: 'December 31, 2021',
    progress: 90
  }, {
    name: 'FY22 - Q3',
    due: 'March 31, 2022',
    progress: 10
  }, {
    name: 'FY23 - Q1',
    due: 'June 30, 2022',
    progress: 0
  }, {
    name: 'FY23 - Q2',
    due: 'December 30, 2022',
    progress: 0
  }];
  const [selectedMilestone, setSelectedMilestone] = React.useState<(typeof milestones)[0] | undefined>(milestones[2]);
  return <ActionMenu open>
      <ActionMenu.Button variant="default">
        <span className={classes.Milestone}>Milestone:</span> {selectedMilestone?.name || 'Make a selection'}
      </ActionMenu.Button>
      <ActionMenu.Overlay width="medium">
        <ActionList selectionVariant="single" showDividers>
          <ActionList.Group>
            <ActionList.GroupHeading>Open</ActionList.GroupHeading>
            {milestones.filter(milestone => !milestone.name.includes('21')).map((milestone, index) => <ActionList.Item key={index} selected={milestone.name === selectedMilestone?.name} onSelect={() => setSelectedMilestone(milestone)}>
                  <ActionList.LeadingVisual>
                    <MilestoneIcon />
                  </ActionList.LeadingVisual>
                  {milestone.name}
                  <ActionList.Description variant="block">Due by {milestone.due}</ActionList.Description>
                </ActionList.Item>)}
          </ActionList.Group>
          <ActionList.Group>
            <ActionList.GroupHeading>Closed</ActionList.GroupHeading>
            {milestones.filter(milestone => milestone.name.includes('21')).map((milestone, index) => <ActionList.Item key={index} selected={milestone.name === selectedMilestone?.name} onSelect={() => setSelectedMilestone(milestone)}>
                  <ActionList.LeadingVisual>
                    <MilestoneIcon />
                  </ActionList.LeadingVisual>
                  {milestone.name}
                  <ActionList.Description variant="block">Due by {milestone.due}</ActionList.Description>
                </ActionList.Item>)}
          </ActionList.Group>
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <div className={classes.CenteredFlexContainer}>
      <ActionMenu open={open} onOpenChange={setOpen}>
        <ActionMenu.Button>Menu</ActionMenu.Button>
        <ActionMenu.Overlay width="large" align="center" preventOverflow={false}>
          <ActionList>
            <ActionList.Item>Option 1</ActionList.Item>
            <ActionList.Item>Option 2</ActionList.Item>
            <ActionList.Item>Option 2</ActionList.Item>
            <ActionList.Item>Option 2</ActionList.Item>
            <ActionList.Item>Option 2</ActionList.Item>
            <ActionList.Item>Option 2</ActionList.Item>
            <ActionList.Item>Option 2</ActionList.Item>
            <ActionList.Item>Option 2</ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </div>;
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <div className={classes.CenteredFlexContainer}>
      <ActionMenu open={open} onOpenChange={setOpen}>
        <ActionMenu.Button>Menu</ActionMenu.Button>
        <ActionMenu.Overlay width="large" align="center" preventOverflow={false} variant={{
        regular: 'anchored',
        narrow: 'fullscreen'
      }}>
          <ActionList>
            <ActionList.Item>Option 1</ActionList.Item>
            <ActionList.Item>Option 2</ActionList.Item>
            <ActionList.Item>Option 2</ActionList.Item>
            <ActionList.Item>Option 2</ActionList.Item>
            <ActionList.Item>Option 2</ActionList.Item>
            <ActionList.Item>Option 2</ActionList.Item>
            <ActionList.Item>Option 2</ActionList.Item>
            <ActionList.Item>Option 2</ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </div>;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [actionFired, fireAction] = React.useState('');
  const onSelect = (name: string) => fireAction(name);
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  return <>
      <h1>Controlled Menu</h1>
      <h2>External Open State: {open ? 'Open' : 'Closed'}</h2>
      <h2>Last option activated: {actionFired}</h2>
      <div>
        <Button ref={triggerRef} onClick={() => setOpen(!open)}>
          {open ? 'Close Menu' : 'Open Menu'}
        </Button>
      </div>
      <br />

      {/**
       * Even though the state is controlled externally,
       * we can pass an Anchor for the menu to "anchor to"
       */}
      <ActionMenu open={open} onOpenChange={setOpen}>
        <ActionMenu.Button>Anchor</ActionMenu.Button>
        <ActionMenu.Overlay ignoreClickRefs={[
      // Because the component is controlled from outside, but the anchor is still internal,
      // clicking the external button should not be counted as "clicking outside"
      triggerRef]}>
          <ActionList>
            <ActionList.Item onSelect={() => onSelect('Copy link')}>
              Copy link
              <ActionList.TrailingVisual>⌘C</ActionList.TrailingVisual>
            </ActionList.Item>
            <ActionList.Item onSelect={() => onSelect('Quote reply')}>
              Quote reply
              <ActionList.TrailingVisual>⌘Q</ActionList.TrailingVisual>
            </ActionList.Item>
            <ActionList.Item onSelect={() => onSelect('Edit comment')}>
              Edit comment
              <ActionList.TrailingVisual>⌘E</ActionList.TrailingVisual>
            </ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item variant="danger" onSelect={() => onSelect('Delete file')}>
              Delete file
              <ActionList.TrailingVisual>⌘D</ActionList.TrailingVisual>
            </ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </>;
}`,...p.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.shiftKey && (event.key === 'c' || event.key === 'C')) {
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  return <>
      <h1>Shortcut Menu</h1>
      <h2>External Open State: {open ? 'Open' : 'Closed'}</h2>
      <h2>Press Shift+C to open the menu</h2>
      <br />

      {/**
       * This is used to demonstrate mouse/keyboard modality
       * and how it might affect \`:focus-visible\` styles in the menu.
       */}
      <FormControl>
        <FormControl.Label>Default label</FormControl.Label>
        <TextInput />
      </FormControl>

      {/**
       * Even though the state is controlled externally,
       * we can pass an Anchor for the menu to "anchor to"
       */}
      <ActionMenu open={open} onOpenChange={setOpen}>
        <ActionMenu.Button className={classes.HiddenButton}>Anchor</ActionMenu.Button>
        <ActionMenu.Overlay ignoreClickRefs={[
      // Because the component is controlled from outside, but the anchor is still internal,
      // clicking the external button should not be counted as "clicking outside"
      triggerRef]}>
          <ActionList>
            <ActionList.Item>
              Copy link
              <ActionList.TrailingVisual>⌘C</ActionList.TrailingVisual>
            </ActionList.Item>
            <ActionList.Item>
              Quote reply
              <ActionList.TrailingVisual>⌘Q</ActionList.TrailingVisual>
            </ActionList.Item>
            <ActionList.Item>
              Edit comment
              <ActionList.TrailingVisual>⌘E</ActionList.TrailingVisual>
            </ActionList.Item>
            <ActionList.LinkItem href="#">View file</ActionList.LinkItem>
            <ActionList.Divider />
            <ActionList.Item variant="danger">
              Delete file
              <ActionList.TrailingVisual>⌘D</ActionList.TrailingVisual>
            </ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </>;
}`,...A.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const ListItemWithContextMenu = ({
    children
  }: {
    children: string;
  }) => {
    const handleContextMenu: React.MouseEventHandler<HTMLElement> = event => {
      event.preventDefault();
      setOpen(true);
    };

    // eslint-disable-next-line react-compiler/react-compiler
    const [open, setOpen] = React.useState(false);
    // eslint-disable-next-line react-compiler/react-compiler
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    return <li onContextMenu={handleContextMenu}>
        <ActionMenu open={open} onOpenChange={setOpen} anchorRef={triggerRef}>
          <ActionMenu.Anchor>
            <Button ref={triggerRef} variant="invisible" onClick={handleContextMenu}>
              {children}
            </Button>
          </ActionMenu.Anchor>
          <ActionMenu.Overlay>
            <ActionList>
              <ActionList.Item>
                Copy link
                <ActionList.TrailingVisual>⌘C</ActionList.TrailingVisual>
              </ActionList.Item>
              <ActionList.Item>
                Quote reply
                <ActionList.TrailingVisual>⌘Q</ActionList.TrailingVisual>
              </ActionList.Item>
              <ActionList.Item>
                Edit comment
                <ActionList.TrailingVisual>⌘E</ActionList.TrailingVisual>
              </ActionList.Item>
              <ActionList.LinkItem href="#">View file</ActionList.LinkItem>
              <ActionList.Divider />
              <ActionList.Item variant="danger">
                Delete file
                <ActionList.TrailingVisual>⌘D</ActionList.TrailingVisual>
              </ActionList.Item>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
      </li>;
  };
  return <>
      <div>Right click the list items below to see the context menu</div>

      <ul>
        <ListItemWithContextMenu>List item one</ListItemWithContextMenu>
        <ListItemWithContextMenu>List item two</ListItemWithContextMenu>
        <ListItemWithContextMenu>List item three</ListItemWithContextMenu>
      </ul>
    </>;
}`,...h.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => <ActionMenu>
    <ActionMenu.Anchor>
      <IconButton icon={KebabHorizontalIcon} aria-label="Open menu" />
    </ActionMenu.Anchor>
    <ActionMenu.Overlay width="medium">
      <ActionList>
        <ActionList.Item onSelect={() => alert('Copy link clicked')}>
          Copy link
          <ActionList.TrailingVisual>⌘C</ActionList.TrailingVisual>
        </ActionList.Item>
        <ActionList.Item onSelect={() => alert('Quote reply clicked')}>
          Quote reply
          <ActionList.TrailingVisual>⌘Q</ActionList.TrailingVisual>
        </ActionList.Item>
        <ActionList.Item onSelect={() => alert('Edit comment clicked')}>
          Edit comment
          <ActionList.TrailingVisual>⌘E</ActionList.TrailingVisual>
        </ActionList.Item>
        <ActionList.Divider />
        <ActionList.Item variant="danger" onSelect={() => alert('Delete file clicked')}>
          Delete file
          <ActionList.TrailingVisual>⌘D</ActionList.TrailingVisual>
        </ActionList.Item>
      </ActionList>
    </ActionMenu.Overlay>
  </ActionMenu>`,...L.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <ActionMenu>
    <ActionMenu.Anchor id="custom-anchor-id">
      <IconButton icon={KebabHorizontalIcon} aria-label="Open menu" />
    </ActionMenu.Anchor>
    <ActionMenu.Overlay width="medium">
      <ActionList>
        <ActionList.Item onSelect={() => alert('Copy link clicked')}>
          Copy link
          <ActionList.TrailingVisual>⌘C</ActionList.TrailingVisual>
        </ActionList.Item>
        <ActionList.Item onSelect={() => alert('Quote reply clicked')}>
          Quote reply
          <ActionList.TrailingVisual>⌘Q</ActionList.TrailingVisual>
        </ActionList.Item>
        <ActionList.Item onSelect={() => alert('Edit comment clicked')}>
          Edit comment
          <ActionList.TrailingVisual>⌘E</ActionList.TrailingVisual>
        </ActionList.Item>
        <ActionList.Divider />
        <ActionList.Item variant="danger" onSelect={() => alert('Delete file clicked')}>
          Delete file
          <ActionList.TrailingVisual>⌘D</ActionList.TrailingVisual>
        </ActionList.Item>
      </ActionList>
    </ActionMenu.Overlay>
  </ActionMenu>`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(1);
  const options = [{
    text: 'Status',
    icon: IssueOpenedIcon
  }, {
    text: 'Stage',
    icon: TableIcon
  }, {
    text: 'Assignee',
    icon: PeopleIcon
  }, {
    text: 'Team',
    icon: TypographyIcon
  }, {
    text: 'Estimate',
    icon: NumberIcon
  }, {
    text: 'Due Date',
    icon: CalendarIcon
  }];
  const selectedOption = selectedIndex !== null && options[selectedIndex];
  return <ActionMenu>
      <ActionMenu.Button leadingVisual={selectedOption ? selectedOption.icon : undefined}>
        {selectedOption ? \`Group by \${selectedOption.text}\` : 'Group items by'}
      </ActionMenu.Button>
      <ActionMenu.Overlay width="medium">
        <ActionList>
          <ActionList.Group selectionVariant="single">
            <ActionList.GroupHeading>Group by</ActionList.GroupHeading>
            {options.map((option, index) => <ActionList.Item key={index} selected={index === selectedIndex} onSelect={() => setSelectedIndex(index)}>
                <ActionList.LeadingVisual>
                  <option.icon />
                </ActionList.LeadingVisual>
                {option.text}
              </ActionList.Item>)}
          </ActionList.Group>
          {typeof selectedIndex === 'number' && <ActionList.Group>
              <ActionList.Divider />
              <ActionList.Item onSelect={() => setSelectedIndex(null)}>
                <ActionList.LeadingVisual>
                  <XIcon />
                </ActionList.LeadingVisual>
                Clear Group by
              </ActionList.Item>
            </ActionList.Group>}
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>;
}`,...I.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const items = [{
    name: 'Show code folding buttons'
  }, {
    name: 'Wrap lines'
  }, {
    name: 'Center content'
  }];
  const [selectedMilestone, setSelectedMilestone] = React.useState<(typeof items)[0] | undefined>(items[0]);
  return <ActionMenu open>
      <ActionMenu.Anchor>
        <IconButton icon={KebabHorizontalIcon} aria-label="Open menu" />
      </ActionMenu.Anchor>
      <ActionMenu.Overlay width="small">
        <ActionList>
          <ActionList.Group>
            <ActionList.GroupHeading>Raw file content</ActionList.GroupHeading>
            <ActionList.Item onSelect={() => alert('Workflows clicked')}>Download</ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item onSelect={() => alert('Workflows clicked')}>Jump to line</ActionList.Item>
            <ActionList.Item onSelect={() => alert('Workflows clicked')}>Find in file</ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item onSelect={() => alert('Workflows clicked')}>Copy path</ActionList.Item>
            <ActionList.Item onSelect={() => alert('Workflows clicked')}>Copy permalink</ActionList.Item>
          </ActionList.Group>
          <ActionList.Divider />
          <ActionList.Group selectionVariant="multiple">
            <ActionList.GroupHeading>View options</ActionList.GroupHeading>
            {items.map((item, index) => <ActionList.Item key={index} selected={item.name === selectedMilestone?.name} onSelect={() => setSelectedMilestone(item)}>
                {item.name}
              </ActionList.Item>)}
          </ActionList.Group>
          <ActionList.Divider />
          <ActionList.Group>
            <ActionList.GroupHeading>View options</ActionList.GroupHeading>
            <ActionList.Item onSelect={() => alert('Delete file')} variant="danger">
              Delete file
            </ActionList.Item>
          </ActionList.Group>
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>;
}`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  const [copyLinkSuccess, setCopyLinkSuccess] = React.useState(false);
  const onSelect = (event: React.MouseEvent | React.KeyboardEvent) => {
    event.preventDefault();
    setCopyLinkSuccess(true);
    setTimeout(() => {
      setOpen(false);
      setCopyLinkSuccess(false);
    }, 700);
  };
  return <>
      <h1>Delayed Menu Close</h1>

      <ActionMenu open={open} onOpenChange={setOpen}>
        <ActionMenu.Button>Anchor</ActionMenu.Button>
        <ActionMenu.Overlay>
          <ActionList>
            <ActionList.Item onSelect={onSelect}>
              <ActionList.LeadingVisual>{copyLinkSuccess ? <CheckIcon /> : <CopyIcon />}</ActionList.LeadingVisual>
              {copyLinkSuccess ? 'Copied!' : 'Copy link'}
            </ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </>;
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => <ActionMenu>
    <ActionMenu.Button>Open menu</ActionMenu.Button>
    <ActionMenu.Overlay width="medium" side="outside-right">
      <ActionList>
        <ActionList.Item onSelect={() => alert('Copy link clicked')}>
          Copy link
          <ActionList.TrailingVisual>⌘C</ActionList.TrailingVisual>
        </ActionList.Item>
        <ActionList.Item onSelect={() => alert('Quote reply clicked')}>
          Quote reply
          <ActionList.TrailingVisual>⌘Q</ActionList.TrailingVisual>
        </ActionList.Item>
        <ActionList.Item onSelect={() => alert('Edit comment clicked')}>
          Edit comment
          <ActionList.TrailingVisual>⌘E</ActionList.TrailingVisual>
        </ActionList.Item>
        <ActionList.Divider />
        <ActionList.Item variant="danger" onSelect={() => alert('Delete file clicked')}>
          Delete file
          <ActionList.TrailingVisual>⌘D</ActionList.TrailingVisual>
        </ActionList.Item>
      </ActionList>
    </ActionMenu.Overlay>
  </ActionMenu>`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <ActionMenu>
      <ActionMenu.Button>Open menu</ActionMenu.Button>
      <ActionMenu.Overlay width="auto" maxHeight="large" overflow="auto">
        <ActionList>
          {Array.from({
          length: 100
        }, (_, i) => <ActionList.Item key={\`item-\${i}\`} onSelect={() => alert(\`Item \${i + 1} clicked\`)}>
              Item {i + 1}
            </ActionList.Item>)}
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>;
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <ActionMenu>
    <ActionMenu.Button inactive>Open menu</ActionMenu.Button>
    <ActionMenu.Overlay width="auto">
      <ActionList>
        <ActionList.Item onSelect={() => alert('Workflows clicked')} inactiveText="Unavailable due to an outage">
          Workflows
          <ActionList.LeadingVisual>
            <WorkflowIcon />
          </ActionList.LeadingVisual>
        </ActionList.Item>
        <ActionList.Item onSelect={() => alert('Archived items clicked')} inactiveText="Unavailable due to an outage">
          Archived items
          <ActionList.LeadingVisual>
            <ArchiveIcon />
          </ActionList.LeadingVisual>
        </ActionList.Item>
        <ActionList.LinkItem href="/" inactiveText="Unavailable due to an outage">
          Settings
          <ActionList.LeadingVisual>
            <GearIcon />
          </ActionList.LeadingVisual>
        </ActionList.LinkItem>
        <ActionList.Item onSelect={() => alert('Make a copy clicked')} inactiveText="Unavailable due to an outage">
          Make a copy
          <ActionList.LeadingVisual>
            <CopyIcon />
          </ActionList.LeadingVisual>
        </ActionList.Item>
        <ActionList.Divider />
        <ActionList.Group>
          <ActionList.GroupHeading>Github projects</ActionList.GroupHeading>
          <ActionList.LinkItem href="/" inactiveText="Unavailable due to an outage">
            What&apos;s new
            <ActionList.LeadingVisual>
              <RocketIcon />
            </ActionList.LeadingVisual>
          </ActionList.LinkItem>
          <ActionList.LinkItem href="/" inactiveText="Unavailable due to an outage">
            Give feedback
            <ActionList.LeadingVisual>
              <CommentIcon />
            </ActionList.LeadingVisual>
          </ActionList.LinkItem>
          <ActionList.LinkItem href="/" inactiveText="Unavailable due to an outage">
            GitHub Docs
            <ActionList.LeadingVisual>
              <BookIcon />
            </ActionList.LeadingVisual>
          </ActionList.LinkItem>
        </ActionList.Group>
      </ActionList>
    </ActionMenu.Overlay>
  </ActionMenu>`,...f.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [currentSide, setCurrentSide] = React.useState<AnchorSide>('outside-bottom');
  const [updatedSide, setUpdatedSide] = React.useState<AnchorPosition>();
  return <>
      <div className={classes.CustomPositionMiddle}>
        <ActionMenu>
          <ActionMenu.Button>Open menu</ActionMenu.Button>
          <ActionMenu.Overlay width="auto" maxHeight="large" side={currentSide} onPositionChange={({
          position
        }) => {
          setUpdatedSide(position);
        }}>
            <ActionList>
              <ActionList.Group>
                <ActionList.GroupHeading>
                  Inside {updatedSide?.anchorSide.includes('inside') ? '(current)' : null}
                </ActionList.GroupHeading>
                <ActionList.Item onSelect={() => setCurrentSide('inside-top')}>Inside-top</ActionList.Item>
                <ActionList.Item onSelect={() => setCurrentSide('inside-bottom')}>Inside-bottom</ActionList.Item>
                <ActionList.Item onSelect={() => setCurrentSide('inside-left')}>Inside-left</ActionList.Item>
                <ActionList.Item onSelect={() => setCurrentSide('inside-right')}>Inside-right</ActionList.Item>
                <ActionList.Item onSelect={() => setCurrentSide('inside-center')}>Inside-center</ActionList.Item>
              </ActionList.Group>
              <ActionList.Group>
                <ActionList.GroupHeading>
                  Outside {updatedSide?.anchorSide.includes('outside') ? '(current)' : null}
                </ActionList.GroupHeading>
                <ActionList.Item onSelect={() => setCurrentSide('outside-top')}>Outside-top</ActionList.Item>
                <ActionList.Item onSelect={() => setCurrentSide('outside-bottom')}>Outside-bottom</ActionList.Item>
                <ActionList.Item onSelect={() => setCurrentSide('outside-left')}>Outside-left</ActionList.Item>
                <ActionList.Item onSelect={() => setCurrentSide('outside-right')}>Outside-right</ActionList.Item>
              </ActionList.Group>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>

        <span>Current Overlay Side: {currentSide}</span>
      </div>
    </>;
}`,...M.parameters?.docs?.source}}};const pt=["GroupsAndDescriptions","CustomOverlayProps","FullScreen","ControlledMenu","ShortcutMenu","ContextMenu","CustomAnchor","CustomAnchorId","MixedSelection","MultipleSections","DelayedMenuClose","OnRightSide","SettingMaxHeight","OnlyInactiveItems","DynamicAnchorSides"];export{h as ContextMenu,p as ControlledMenu,L as CustomAnchor,x as CustomAnchorId,u as CustomOverlayProps,j as DelayedMenuClose,M as DynamicAnchorSides,m as FullScreen,d as GroupsAndDescriptions,I as MixedSelection,g as MultipleSections,S as OnRightSide,f as OnlyInactiveItems,v as SettingMaxHeight,A as ShortcutMenu,pt as __namedExportsOrder,mt as default};
