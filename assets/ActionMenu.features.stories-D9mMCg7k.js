import{j as e,R as V}from"./iframe-Cfz2vXeE.js";import{W as A,u as p,v,t as h,w as I,x,m as j,y as f}from"./index.esm-C1WN7kEu.js";import{A as i}from"./index-C-OhZ25x.js";import{A as t}from"./ActionMenu-VmSenYrX.js";import"./preload-helper-D9Z9MdNV.js";import"./Link-Dm7wEaum.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./invariant-Dix8OlSS.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./Truncate-DUc3hzfC.js";import"./Tooltip-BuVThTi0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Button-3sCteC9V.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./useProvidedStateOrCreate-BEKIGSkE.js";import"./useMnemonics-D4gqZtvW.js";import"./AnchoredOverlay-DQ90Zw6u.js";import"./useFocusTrap-CL_Yl_fl.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./Overlay-Du2pzphD.js";import"./Portal-BKCn1yDJ.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./useFeatureFlag-paATTdb3.js";const M="prc-ActionMenu-MutedText-DXgU-",y={MutedText:M},Ge={title:"Components/ActionMenu/Features"},c=()=>e.jsxs(t,{children:[e.jsx(t.Button,{children:"Open menu"}),e.jsx(t.Overlay,{width:"auto",children:e.jsxs(i,{children:[e.jsxs(i.Item,{onSelect:()=>alert("Workflows clicked"),children:["Workflows",e.jsx(i.LeadingVisual,{children:e.jsx(A,{})})]}),e.jsxs(i.Item,{onSelect:()=>alert("Archived items clicked"),children:["Archived items",e.jsx(i.LeadingVisual,{children:e.jsx(p,{})})]}),e.jsxs(i.LinkItem,{href:"/",children:["Settings",e.jsx(i.LeadingVisual,{children:e.jsx(v,{})})]}),e.jsxs(i.Item,{onSelect:()=>alert("Make a copy clicked"),children:["Make a copy",e.jsx(i.LeadingVisual,{children:e.jsx(h,{})})]}),e.jsx(i.Divider,{}),e.jsxs(i.Group,{children:[e.jsx(i.GroupHeading,{children:"GitHub projects"}),e.jsxs(i.LinkItem,{href:"/",children:["What's new",e.jsx(i.LeadingVisual,{children:e.jsx(I,{})})]}),e.jsxs(i.LinkItem,{href:"/",children:["Give feedback",e.jsx(i.LeadingVisual,{children:e.jsx(x,{})})]}),e.jsxs(i.LinkItem,{href:"/",children:["GitHub Docs",e.jsx(i.LeadingVisual,{children:e.jsx(j,{})})]})]})]})})]}),a=()=>{const o=[{name:"Fast forward"},{name:"Recursive"},{name:"Ours"},{name:"Octopus"},{name:"Resolve"},{name:"Subtree"}],[L,g]=V.useState(0),n=o[L];return e.jsxs(t,{children:[e.jsxs(t.Button,{children:[e.jsx("span",{className:y.MutedText,children:"Options:"})," ",n.name]}),e.jsx(t.Overlay,{width:"auto",children:e.jsx(i,{selectionVariant:"single",children:o.map((s,k)=>e.jsx(i.Item,{selected:k===L,onSelect:()=>g(k),children:s.name},k))})})]})},r=()=>{const[o,L]=V.useState([{name:"Show code folding buttons",selected:!0},{name:"Wrap lines",selected:!1},{name:"Center content",selected:!1}]),g=n=>{L(o.map(s=>(s.name===n&&(s.selected=!s.selected),s)))};return e.jsxs(t,{children:[e.jsx(t.Button,{children:"Display"}),e.jsx(t.Overlay,{width:"auto",children:e.jsx(i,{selectionVariant:"multiple",children:o.map(n=>e.jsx(i.Item,{selected:n.selected,onSelect:()=>g(n.name),children:n.name},n.name))})})]})},l=()=>e.jsxs(t,{children:[e.jsx(t.Button,{children:"Open menu"}),e.jsx(t.Overlay,{width:"auto",children:e.jsxs(i,{children:[e.jsxs(i.Item,{onSelect:()=>alert("Workflows clicked"),inactiveText:"Unavailable due to an outage",children:["Workflows",e.jsx(i.LeadingVisual,{children:e.jsx(A,{})})]}),e.jsxs(i.Item,{onSelect:()=>alert("Archived items clicked"),inactiveText:"Unavailable due to an outage",children:["Archived items",e.jsx(i.LeadingVisual,{children:e.jsx(p,{})})]}),e.jsxs(i.LinkItem,{href:"/",inactiveText:"Unavailable due to an outage",children:["Settings",e.jsx(i.LeadingVisual,{children:e.jsx(v,{})})]}),e.jsxs(i.Item,{onSelect:()=>alert("Make a copy clicked"),inactiveText:"Unavailable due to an outage",children:["Make a copy",e.jsx(i.LeadingVisual,{children:e.jsx(h,{})})]}),e.jsx(i.Divider,{}),e.jsxs(i.Group,{children:[e.jsx(i.GroupHeading,{children:"Github projects"}),e.jsxs(i.LinkItem,{href:"/",children:["What's new",e.jsx(i.LeadingVisual,{children:e.jsx(I,{})})]}),e.jsxs(i.LinkItem,{href:"/",children:["Give feedback",e.jsx(i.LeadingVisual,{children:e.jsx(x,{})})]}),e.jsxs(i.LinkItem,{href:"/",children:["GitHub Docs",e.jsx(i.LeadingVisual,{children:e.jsx(j,{})})]})]})]})})]}),d=()=>e.jsxs(t,{children:[e.jsx(t.Button,{children:"Open menu"}),e.jsx(t.Overlay,{width:"auto",children:e.jsxs(i,{children:[e.jsxs(i.Item,{onSelect:()=>alert("Workflows clicked"),loading:!0,children:["Workflows",e.jsx(i.LeadingVisual,{children:e.jsx(A,{})})]}),e.jsxs(i.Item,{onSelect:()=>alert("Archived items clicked"),loading:!0,children:["Archived items",e.jsx(i.LeadingVisual,{children:e.jsx(p,{})})]}),e.jsxs(i.Item,{onSelect:()=>alert("Make a copy clicked"),loading:!0,children:["Make a copy",e.jsx(i.LeadingVisual,{children:e.jsx(h,{})})]}),e.jsx(i.Divider,{}),e.jsxs(i.Group,{children:[e.jsx(i.GroupHeading,{children:"Github projects"}),e.jsxs(i.LinkItem,{href:"/",children:["What's new",e.jsx(i.LeadingVisual,{children:e.jsx(I,{})})]}),e.jsxs(i.LinkItem,{href:"/",children:["Give feedback",e.jsx(i.LeadingVisual,{children:e.jsx(x,{})})]}),e.jsxs(i.LinkItem,{href:"/",children:["GitHub Docs",e.jsx(i.LeadingVisual,{children:e.jsx(j,{})})]})]})]})})]}),m=()=>e.jsxs(t,{children:[e.jsx(t.Button,{children:"Edit"}),e.jsx(t.Overlay,{children:e.jsxs(i,{children:[e.jsx(i.Item,{children:"Cut"}),e.jsx(i.Item,{children:"Copy"}),e.jsx(i.Item,{children:"Paste"}),e.jsxs(t,{children:[e.jsx(t.Anchor,{children:e.jsxs(i.Item,{children:[e.jsx(i.LeadingVisual,{children:e.jsx(f,{})}),"Paste special"]})}),e.jsx(t.Overlay,{children:e.jsxs(i,{children:[e.jsx(i.Item,{children:"Paste plain text"}),e.jsx(i.Item,{children:"Paste formulas"}),e.jsx(i.Item,{children:"Paste with formatting"}),e.jsxs(t,{children:[e.jsx(t.Anchor,{children:e.jsx(i.Item,{children:"Paste from"})}),e.jsx(t.Overlay,{children:e.jsxs(i,{children:[e.jsx(i.Item,{children:"Current clipboard"}),e.jsx(i.Item,{children:"History"}),e.jsx(i.Item,{children:"Another device"})]})})]})]})})]})]})})]}),u=()=>e.jsxs(t,{children:[e.jsx(t.Button,{children:"Open menu"}),e.jsx(t.Overlay,{width:"auto",children:e.jsxs(i,{children:[e.jsxs(i.Item,{disabled:!0,children:["Workflows",e.jsx(i.LeadingVisual,{children:e.jsx(A,{})})]}),e.jsxs(i.Item,{onSelect:()=>alert("Archived items clicked"),children:["Archived items",e.jsx(i.LeadingVisual,{children:e.jsx(p,{})})]}),e.jsxs(i.LinkItem,{href:"/",children:["Settings",e.jsx(i.LeadingVisual,{children:e.jsx(v,{})})]}),e.jsxs(i.Item,{disabled:!0,children:["Make a copy",e.jsx(i.LeadingVisual,{children:e.jsx(h,{})})]}),e.jsx(i.Divider,{}),e.jsxs(i.Group,{children:[e.jsx(i.GroupHeading,{children:"Github projects"}),e.jsxs(i.LinkItem,{href:"/",children:["What's new",e.jsx(i.LeadingVisual,{children:e.jsx(I,{})})]}),e.jsxs(i.LinkItem,{href:"/",children:["Give feedback",e.jsx(i.LeadingVisual,{children:e.jsx(x,{})})]}),e.jsxs(i.LinkItem,{href:"/",children:["GitHub Docs",e.jsx(i.LeadingVisual,{children:e.jsx(j,{})})]})]})]})})]});c.__docgenInfo={description:"",methods:[],displayName:"LinksAndActions"};a.__docgenInfo={description:"",methods:[],displayName:"SingleSelect"};r.__docgenInfo={description:"",methods:[],displayName:"MultiSelect"};l.__docgenInfo={description:"",methods:[],displayName:"InactiveItems"};d.__docgenInfo={description:"",methods:[],displayName:"LoadingItems"};m.__docgenInfo={description:"",methods:[],displayName:"Submenus"};u.__docgenInfo={description:"",methods:[],displayName:"DisabledItems"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <ActionMenu>
    <ActionMenu.Button>Open menu</ActionMenu.Button>
    <ActionMenu.Overlay width="auto">
      <ActionList>
        <ActionList.Item onSelect={() => alert('Workflows clicked')}>
          Workflows
          <ActionList.LeadingVisual>
            <WorkflowIcon />
          </ActionList.LeadingVisual>
        </ActionList.Item>
        <ActionList.Item onSelect={() => alert('Archived items clicked')}>
          Archived items
          <ActionList.LeadingVisual>
            <ArchiveIcon />
          </ActionList.LeadingVisual>
        </ActionList.Item>
        <ActionList.LinkItem href="/">
          Settings
          <ActionList.LeadingVisual>
            <GearIcon />
          </ActionList.LeadingVisual>
        </ActionList.LinkItem>
        <ActionList.Item onSelect={() => alert('Make a copy clicked')}>
          Make a copy
          <ActionList.LeadingVisual>
            <CopyIcon />
          </ActionList.LeadingVisual>
        </ActionList.Item>
        <ActionList.Divider />
        <ActionList.Group>
          <ActionList.GroupHeading>GitHub projects</ActionList.GroupHeading>
          <ActionList.LinkItem href="/">
            What&apos;s new
            <ActionList.LeadingVisual>
              <RocketIcon />
            </ActionList.LeadingVisual>
          </ActionList.LinkItem>
          <ActionList.LinkItem href="/">
            Give feedback
            <ActionList.LeadingVisual>
              <CommentIcon />
            </ActionList.LeadingVisual>
          </ActionList.LinkItem>
          <ActionList.LinkItem href="/">
            GitHub Docs
            <ActionList.LeadingVisual>
              <BookIcon />
            </ActionList.LeadingVisual>
          </ActionList.LinkItem>
        </ActionList.Group>
      </ActionList>
    </ActionMenu.Overlay>
  </ActionMenu>`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const options = [{
    name: 'Fast forward'
  }, {
    name: 'Recursive'
  }, {
    name: 'Ours'
  }, {
    name: 'Octopus'
  }, {
    name: 'Resolve'
  }, {
    name: 'Subtree'
  }];
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selectedType = options[selectedIndex];
  return <ActionMenu>
      <ActionMenu.Button>
        <span className={classes.MutedText}>Options:</span> {selectedType.name}
      </ActionMenu.Button>
      <ActionMenu.Overlay width="auto">
        <ActionList selectionVariant="single">
          {options.map((options, index) => <ActionList.Item key={index} selected={index === selectedIndex} onSelect={() => setSelectedIndex(index)}>
              {options.name}
            </ActionList.Item>)}
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>;
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  type Option = {
    name: string;
    selected: boolean;
  };
  const [options, setOptions] = React.useState<Option[]>([{
    name: 'Show code folding buttons',
    selected: true
  }, {
    name: 'Wrap lines',
    selected: false
  }, {
    name: 'Center content',
    selected: false
  }]);
  const toggle = (name: string) => {
    setOptions(options.map(option => {
      if (option.name === name) option.selected = !option.selected;
      return option;
    }));
  };
  return <ActionMenu>
      <ActionMenu.Button>Display</ActionMenu.Button>
      <ActionMenu.Overlay width="auto">
        <ActionList selectionVariant="multiple">
          {options.map(options => <ActionList.Item key={options.name} selected={options.selected} onSelect={() => toggle(options.name)}>
              {options.name}
            </ActionList.Item>)}
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>;
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <ActionMenu>
    <ActionMenu.Button>Open menu</ActionMenu.Button>
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
          <ActionList.LinkItem href="/">
            What&apos;s new
            <ActionList.LeadingVisual>
              <RocketIcon />
            </ActionList.LeadingVisual>
          </ActionList.LinkItem>
          <ActionList.LinkItem href="/">
            Give feedback
            <ActionList.LeadingVisual>
              <CommentIcon />
            </ActionList.LeadingVisual>
          </ActionList.LinkItem>
          <ActionList.LinkItem href="/">
            GitHub Docs
            <ActionList.LeadingVisual>
              <BookIcon />
            </ActionList.LeadingVisual>
          </ActionList.LinkItem>
        </ActionList.Group>
      </ActionList>
    </ActionMenu.Overlay>
  </ActionMenu>`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <ActionMenu>
    <ActionMenu.Button>Open menu</ActionMenu.Button>
    <ActionMenu.Overlay width="auto">
      <ActionList>
        <ActionList.Item onSelect={() => alert('Workflows clicked')} loading>
          Workflows
          <ActionList.LeadingVisual>
            <WorkflowIcon />
          </ActionList.LeadingVisual>
        </ActionList.Item>
        <ActionList.Item onSelect={() => alert('Archived items clicked')} loading>
          Archived items
          <ActionList.LeadingVisual>
            <ArchiveIcon />
          </ActionList.LeadingVisual>
        </ActionList.Item>
        <ActionList.Item onSelect={() => alert('Make a copy clicked')} loading>
          Make a copy
          <ActionList.LeadingVisual>
            <CopyIcon />
          </ActionList.LeadingVisual>
        </ActionList.Item>
        <ActionList.Divider />
        <ActionList.Group>
          <ActionList.GroupHeading>Github projects</ActionList.GroupHeading>
          <ActionList.LinkItem href="/">
            What&apos;s new
            <ActionList.LeadingVisual>
              <RocketIcon />
            </ActionList.LeadingVisual>
          </ActionList.LinkItem>
          <ActionList.LinkItem href="/">
            Give feedback
            <ActionList.LeadingVisual>
              <CommentIcon />
            </ActionList.LeadingVisual>
          </ActionList.LinkItem>
          <ActionList.LinkItem href="/">
            GitHub Docs
            <ActionList.LeadingVisual>
              <BookIcon />
            </ActionList.LeadingVisual>
          </ActionList.LinkItem>
        </ActionList.Group>
      </ActionList>
    </ActionMenu.Overlay>
  </ActionMenu>`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <ActionMenu>
    <ActionMenu.Button>Edit</ActionMenu.Button>
    <ActionMenu.Overlay>
      <ActionList>
        <ActionList.Item>Cut</ActionList.Item>
        <ActionList.Item>Copy</ActionList.Item>
        <ActionList.Item>Paste</ActionList.Item>
        <ActionMenu>
          <ActionMenu.Anchor>
            <ActionList.Item>
              <ActionList.LeadingVisual>
                <SparkleFillIcon />
              </ActionList.LeadingVisual>
              Paste special
            </ActionList.Item>
          </ActionMenu.Anchor>
          <ActionMenu.Overlay>
            <ActionList>
              <ActionList.Item>Paste plain text</ActionList.Item>
              <ActionList.Item>Paste formulas</ActionList.Item>
              <ActionList.Item>Paste with formatting</ActionList.Item>
              <ActionMenu>
                <ActionMenu.Anchor>
                  <ActionList.Item>Paste from</ActionList.Item>
                </ActionMenu.Anchor>
                <ActionMenu.Overlay>
                  <ActionList>
                    <ActionList.Item>Current clipboard</ActionList.Item>
                    <ActionList.Item>History</ActionList.Item>
                    <ActionList.Item>Another device</ActionList.Item>
                  </ActionList>
                </ActionMenu.Overlay>
              </ActionMenu>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
      </ActionList>
    </ActionMenu.Overlay>
  </ActionMenu>`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <ActionMenu>
    <ActionMenu.Button>Open menu</ActionMenu.Button>
    <ActionMenu.Overlay width="auto">
      <ActionList>
        <ActionList.Item disabled={true}>
          Workflows
          <ActionList.LeadingVisual>
            <WorkflowIcon />
          </ActionList.LeadingVisual>
        </ActionList.Item>
        <ActionList.Item onSelect={() => alert('Archived items clicked')}>
          Archived items
          <ActionList.LeadingVisual>
            <ArchiveIcon />
          </ActionList.LeadingVisual>
        </ActionList.Item>
        <ActionList.LinkItem href="/">
          Settings
          <ActionList.LeadingVisual>
            <GearIcon />
          </ActionList.LeadingVisual>
        </ActionList.LinkItem>
        <ActionList.Item disabled={true}>
          Make a copy
          <ActionList.LeadingVisual>
            <CopyIcon />
          </ActionList.LeadingVisual>
        </ActionList.Item>
        <ActionList.Divider />
        <ActionList.Group>
          <ActionList.GroupHeading>Github projects</ActionList.GroupHeading>
          <ActionList.LinkItem href="/">
            What&apos;s new
            <ActionList.LeadingVisual>
              <RocketIcon />
            </ActionList.LeadingVisual>
          </ActionList.LinkItem>
          <ActionList.LinkItem href="/">
            Give feedback
            <ActionList.LeadingVisual>
              <CommentIcon />
            </ActionList.LeadingVisual>
          </ActionList.LinkItem>
          <ActionList.LinkItem href="/">
            GitHub Docs
            <ActionList.LeadingVisual>
              <BookIcon />
            </ActionList.LeadingVisual>
          </ActionList.LinkItem>
        </ActionList.Group>
      </ActionList>
    </ActionMenu.Overlay>
  </ActionMenu>`,...u.parameters?.docs?.source}}};const be=["LinksAndActions","SingleSelect","MultiSelect","InactiveItems","LoadingItems","Submenus","DisabledItems"];export{u as DisabledItems,l as InactiveItems,c as LinksAndActions,d as LoadingItems,r as MultiSelect,a as SingleSelect,m as Submenus,be as __namedExportsOrder,Ge as default};
