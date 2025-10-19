import{j as i,R as y}from"./iframe-Cfz2vXeE.js";import{D,a as w,G as S,L as H,I as T,A as e}from"./index-C-OhZ25x.js";import{d as k,e as x}from"./index.esm-C1WN7kEu.js";import{S as o}from"./index-D3vEWZM2.js";import{A as f}from"./Avatar-Oyvcp9WV.js";import{A as v}from"./AnchoredOverlay-DQ90Zw6u.js";import"./preload-helper-D9Z9MdNV.js";import"./Link-Dm7wEaum.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./invariant-Dix8OlSS.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./Truncate-DUc3hzfC.js";import"./Tooltip-BuVThTi0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Button-3sCteC9V.js";import"./Stack--yR6jd9X.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./useFocusTrap-CL_Yl_fl.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./Overlay-Du2pzphD.js";import"./Portal-BKCn1yDJ.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./useFeatureFlag-paATTdb3.js";const Ti={title:"Components/ActionList/Dev",component:e,subcomponents:{Item:T,LinkItem:H,Group:S,Divider:w,Description:D}},j=[{login:"pksjce",name:"Pavithra Kodmad"},{login:"jfuchs",name:"Jonathan Fuchs"},{login:"colebemis",name:"Cole Bemis"},{login:"mperrotti",name:"Mike Perrotti"},{login:"dgreif",name:"Dusty Greif"},{login:"smockle",name:"Clay Miller"},{login:"siddharthkp",name:"Siddharth Kshetrapal"}],l=()=>{const[s,r]=y.useState(j.slice(0,1)),C=t=>{const n=s.findIndex(c=>c.login===t.login);r(n===-1?[...s,t]:s.filter((c,b)=>b!==n))};return i.jsxs(i.Fragment,{children:[i.jsx("p",{children:"This is only for regression tests. It is not the recommended API for group headings. Please see the stories under features."}),i.jsx(e,{selectionVariant:"multiple",role:"menu",showDividers:!0,"aria-label":"Reviewers",children:i.jsx(e.Group,{title:"Everyone",children:j.slice(2).map(t=>i.jsxs(e.Item,{role:"menuitemcheckbox",selected:!!s.find(n=>n.login===t.login),"aria-checked":!!s.find(n=>n.login===t.login),onSelect:()=>C(t),children:[i.jsx(e.LeadingVisual,{children:i.jsx(f,{src:`https://github.com/${t.login}.png`})}),t.login,i.jsx(e.Description,{children:t.name})]},t.login))})})]})},a=()=>{const[s,r]=y.useState(j.slice(0,1)),C=t=>{const n=s.findIndex(c=>c.login===t.login);r(n===-1?[...s,t]:s.filter((c,b)=>b!==n))};return i.jsxs(i.Fragment,{children:[i.jsx("p",{children:"This is only for regression tests. It is not the recommended API for group headings. Please see the stories under features."}),i.jsx(e,{selectionVariant:"multiple",role:"menu",showDividers:!0,"aria-label":"Reviewers",children:i.jsx(e.Group,{title:"Everyone",variant:"filled",children:j.slice(2).map(t=>i.jsxs(e.Item,{role:"menuitemcheckbox",selected:!!s.find(n=>n.login===t.login),"aria-checked":!!s.find(n=>n.login===t.login),onSelect:()=>C(t),children:[i.jsx(e.LeadingVisual,{children:i.jsx(f,{src:`https://github.com/${t.login}.png`})}),t.login,i.jsx(e.Description,{children:t.name})]},t.login))})})]})},d=()=>i.jsxs(e,{children:[i.jsx(e.Heading,{as:"h2",children:"Filter by"}),i.jsxs(e.Group,{children:[i.jsx(e.GroupHeading,{className:"testCustomClassnameColor",as:"h3",children:"Repositories"}),i.jsx(e.Item,{onSelect:()=>{},children:"app/assets/modules"}),i.jsx(e.Item,{onSelect:()=>{},children:"src/react/components"})]})]}),m=()=>i.jsxs(e,{className:"testCustomClassnameBorder",children:[i.jsx(e.Item,{children:"Copy link"}),i.jsx(e.Item,{children:"Quote reply"})]}),p=()=>i.jsxs(e,{children:[i.jsx(e.Item,{children:"Edit comment"}),i.jsx(e.Divider,{className:"testCustomClassnameBgColor"}),i.jsx(e.Item,{children:"Quote reply"})]}),h=()=>i.jsxs(e,{children:[i.jsx(e.Heading,{className:"testCustomClassnameColor",as:"h2",children:"Filter by"}),i.jsxs(e.Group,{children:[i.jsx(e.GroupHeading,{as:"h3",children:"Repositories"}),i.jsx(e.Item,{onSelect:()=>{},children:"app/assets/modules"}),i.jsx(e.Item,{onSelect:()=>{},children:"src/react/components"})]})]}),g=()=>i.jsx(e,{children:i.jsxs(e.Item,{children:["Label",i.jsx(e.Description,{className:"testCustomClassnameColor",children:"This is a description"})]})}),u=()=>i.jsx(e,{children:i.jsxs(e.Item,{children:["Label",i.jsx(e.LeadingVisual,{className:"testCustomClassnameColor",children:i.jsx(k,{})}),i.jsx(e.TrailingVisual,{className:"testCustomClassnameColor",children:i.jsx(x,{})})]})}),A=()=>i.jsx("div",{style:{width:"300px"},children:i.jsx(e,{children:i.jsxs(e.Item,{children:["This story tests the gap between the label and trailing visual.",i.jsx(e.LeadingVisual,{children:i.jsx(k,{})}),i.jsx(e.TrailingVisual,{children:i.jsx(x,{})})]})})}),L=()=>i.jsxs(o,{children:[i.jsxs(o,{align:"start",direction:"horizontal",children:[i.jsx(o.Item,{style:{border:"solid 1px var(--borderColor-default)",padding:"1rem"},children:i.jsxs(e,{children:[i.jsx(e.Heading,{as:"h2",size:"small",children:"Some items have inline description"}),i.jsxs(e.Item,{children:["Item with inline description",i.jsx(e.Description,{children:"Inline description"})]}),i.jsxs(e.Item,{children:["Item with inline description",i.jsx(e.Description,{children:"Inline description"})]}),i.jsx(e.Item,{children:"Item with no description"}),i.jsxs(e.Item,{children:["Item with inline description",i.jsx(e.Description,{children:"Inline description"})]})]})}),i.jsx(o.Item,{style:{border:"solid 1px var(--borderColor-default)",padding:"1rem"},children:i.jsxs(e,{children:[i.jsx(e.Heading,{as:"h2",size:"small",children:"Some items have block description"}),i.jsxs(e.Item,{children:["Item with inline description",i.jsx(e.Description,{variant:"block",children:"Block description"})]}),i.jsxs(e.Item,{children:["Item with inline description",i.jsx(e.Description,{variant:"block",children:"Block description"})]}),i.jsx(e.Item,{children:"Item with no description"}),i.jsxs(e.Item,{children:["Item with inline description",i.jsx(e.Description,{variant:"block",children:"Block description"})]})]})})]}),i.jsxs(o,{align:"start",direction:"horizontal",children:[i.jsx(o.Item,{style:{border:"solid 1px var(--borderColor-default)",padding:"1rem"},children:i.jsxs(e,{children:[i.jsx(e.Heading,{as:"h2",size:"small",children:"Some items have inline description inside a group"}),i.jsxs(e.Item,{children:["Item with inline description",i.jsx(e.Description,{children:"Inline description"})]}),i.jsx(e.Item,{children:"Item with no description"}),i.jsxs(e.Group,{children:[i.jsx(e.GroupHeading,{as:"h3",children:"This is a group"}),i.jsxs(e.Item,{children:["Item with inline description",i.jsx(e.Description,{children:"Inline description"})]}),i.jsx(e.Item,{children:"Item with no description"})]})]})}),i.jsx(o.Item,{style:{border:"solid 1px var(--borderColor-default)",padding:"1rem"},children:i.jsxs(e,{children:[i.jsx(e.Heading,{as:"h2",size:"small",children:"Some link items have block description"}),i.jsxs(e.LinkItem,{children:["Item with inline description",i.jsx(e.Description,{variant:"block",children:"Block description"})]}),i.jsxs(e.LinkItem,{children:["Item with inline description",i.jsx(e.Description,{variant:"block",children:"Block description"})]}),i.jsx(e.LinkItem,{children:"Item with no description"}),i.jsxs(e.LinkItem,{children:["Item with inline description",i.jsx(e.Description,{variant:"block",children:"Block description"})]})]})})]}),i.jsxs(o,{align:"start",direction:"horizontal",children:[i.jsx(o.Item,{style:{border:"solid 1px var(--borderColor-default)",padding:"1rem"},children:i.jsxs(e,{children:[i.jsx(e.Heading,{as:"h2",size:"small",children:"All items have descriptions"}),i.jsxs(e.Item,{children:["Item with inline description",i.jsx(e.Description,{children:"Inline description"})]}),i.jsxs(e.Item,{children:["Item with inline description",i.jsx(e.Description,{children:"Inline description"})]})]})}),i.jsx(o.Item,{style:{border:"solid 1px var(--borderColor-default)",padding:"1rem"},children:i.jsxs(e,{children:[i.jsx(e.Heading,{as:"h2",size:"small",children:"No items have descriptions"}),i.jsx(e.Item,{children:"Item with no description"}),i.jsx(e.Item,{children:"Item with no description"})]})})]})]}),I=()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"100px"},children:[i.jsx("div",{style:{width:"300px",border:"solid 1px gray"},children:i.jsxs(e,{children:[i.jsx(e.Item,{children:"thisisalongemailaddress@longemail.com"}),i.jsxs(e.Item,{children:["thisisalongemailaddress@longemail.com",i.jsx(e.TrailingVisual,{children:i.jsx(x,{})})]}),i.jsxs(e.Item,{children:["thisisalongemailaddress@longemail.com",i.jsx(e.LeadingVisual,{children:i.jsx(x,{})})]}),i.jsx(e.Item,{children:"This is a long item title long long long oh wow"}),i.jsxs(e.Item,{children:["This is a long item title long long long oh wow",i.jsx(e.TrailingVisual,{children:i.jsx(x,{})})]})]})}),i.jsx("div",{children:i.jsx(v,{open:!0,renderAnchor:s=>i.jsx("button",{type:"button",...s,children:"Overlay"}),children:i.jsx(e,{role:"menu",children:i.jsx(e.Item,{role:"menuitem",children:"This menu should grow a bit"})})})}),i.jsx("div",{children:i.jsx(v,{open:!0,width:"small",renderAnchor:s=>i.jsx("button",{type:"button",...s,children:"Overlay"}),children:i.jsx(e,{role:"menu",children:i.jsx(e.Item,{role:"menuitem",children:"This menu should wrap because it has a small size"})})})})]});l.__docgenInfo={description:"",methods:[],displayName:"GroupWithSubtleTitleOldAPI"};a.__docgenInfo={description:"",methods:[],displayName:"GroupWithFilledTitleOldAPI"};d.__docgenInfo={description:"",methods:[],displayName:"GroupHeadingCustomClassname"};m.__docgenInfo={description:"",methods:[],displayName:"ListCustomClassname"};p.__docgenInfo={description:"",methods:[],displayName:"DividerCustomClassname"};h.__docgenInfo={description:"",methods:[],displayName:"HeadingCustomClassname"};g.__docgenInfo={description:"",methods:[],displayName:"DescriptionCustomClassname"};u.__docgenInfo={description:"",methods:[],displayName:"VisualCustomClassname"};A.__docgenInfo={description:"",methods:[],displayName:"TrailingVisualGap"};L.__docgenInfo={description:"",methods:[],displayName:"ItemLabelStylesWithMixedDescriptions"};I.__docgenInfo={description:"",methods:[],displayName:"OverlayWrapping"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [assignees, setAssignees] = React.useState(users.slice(0, 1));
  const toggleAssignee = (assignee: (typeof users)[number]) => {
    const assigneeIndex = assignees.findIndex(a => a.login === assignee.login);
    if (assigneeIndex === -1) setAssignees([...assignees, assignee]);else setAssignees(assignees.filter((_, index) => index !== assigneeIndex));
  };
  return <>
      <p>
        This is only for regression tests. It is not the recommended API for group headings. Please see the stories
        under features.
      </p>
      <ActionList selectionVariant="multiple" role="menu" showDividers aria-label="Reviewers">
        {/* eslint-disable-next-line primer-react/no-deprecated-props */}
        <ActionList.Group title="Everyone">
          {users.slice(2).map(user => <ActionList.Item role="menuitemcheckbox" key={user.login} selected={Boolean(assignees.find(assignee => assignee.login === user.login))} aria-checked={Boolean(assignees.find(assignee => assignee.login === user.login))} onSelect={() => toggleAssignee(user)}>
              <ActionList.LeadingVisual>
                <Avatar src={\`https://github.com/\${user.login}.png\`} />
              </ActionList.LeadingVisual>
              {user.login}
              <ActionList.Description>{user.name}</ActionList.Description>
            </ActionList.Item>)}
        </ActionList.Group>
      </ActionList>
    </>;
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const [assignees, setAssignees] = React.useState(users.slice(0, 1));
  const toggleAssignee = (assignee: (typeof users)[number]) => {
    const assigneeIndex = assignees.findIndex(a => a.login === assignee.login);
    if (assigneeIndex === -1) setAssignees([...assignees, assignee]);else setAssignees(assignees.filter((_, index) => index !== assigneeIndex));
  };
  return <>
      <p>
        This is only for regression tests. It is not the recommended API for group headings. Please see the stories
        under features.
      </p>
      <ActionList selectionVariant="multiple" role="menu" showDividers aria-label="Reviewers">
        {/* eslint-disable-next-line primer-react/no-deprecated-props */}
        <ActionList.Group title="Everyone" variant="filled">
          {users.slice(2).map(user => <ActionList.Item role="menuitemcheckbox" key={user.login} selected={Boolean(assignees.find(assignee => assignee.login === user.login))} aria-checked={Boolean(assignees.find(assignee => assignee.login === user.login))} onSelect={() => toggleAssignee(user)}>
              <ActionList.LeadingVisual>
                <Avatar src={\`https://github.com/\${user.login}.png\`} />
              </ActionList.LeadingVisual>
              {user.login}
              <ActionList.Description>{user.name}</ActionList.Description>
            </ActionList.Item>)}
        </ActionList.Group>
      </ActionList>
    </>;
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <ActionList>
    <ActionList.Heading as="h2">Filter by</ActionList.Heading>
    <ActionList.Group>
      <ActionList.GroupHeading className="testCustomClassnameColor" as="h3">
        Repositories
      </ActionList.GroupHeading>
      <ActionList.Item onSelect={() => {}}>app/assets/modules</ActionList.Item>
      <ActionList.Item onSelect={() => {}}>src/react/components</ActionList.Item>
    </ActionList.Group>
  </ActionList>`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <ActionList className="testCustomClassnameBorder">
    <ActionList.Item>Copy link</ActionList.Item>
    <ActionList.Item>Quote reply</ActionList.Item>
  </ActionList>`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <ActionList>
    <ActionList.Item>Edit comment</ActionList.Item>
    <ActionList.Divider className="testCustomClassnameBgColor" />
    <ActionList.Item>Quote reply</ActionList.Item>
  </ActionList>`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <ActionList>
    <ActionList.Heading className="testCustomClassnameColor" as="h2">
      Filter by
    </ActionList.Heading>
    <ActionList.Group>
      <ActionList.GroupHeading as="h3">Repositories</ActionList.GroupHeading>
      <ActionList.Item onSelect={() => {}}>app/assets/modules</ActionList.Item>
      <ActionList.Item onSelect={() => {}}>src/react/components</ActionList.Item>
    </ActionList.Group>
  </ActionList>`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <ActionList>
    <ActionList.Item>
      Label
      <ActionList.Description className="testCustomClassnameColor">This is a description</ActionList.Description>
    </ActionList.Item>
  </ActionList>`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <ActionList>
    <ActionList.Item>
      Label
      <ActionList.LeadingVisual className="testCustomClassnameColor">
        <FileDirectoryIcon />
      </ActionList.LeadingVisual>
      <ActionList.TrailingVisual className="testCustomClassnameColor">
        <HeartFillIcon />
      </ActionList.TrailingVisual>
    </ActionList.Item>
  </ActionList>`,...u.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '300px'
}}>
    <ActionList>
      <ActionList.Item>
        This story tests the gap between the label and trailing visual.
        <ActionList.LeadingVisual>
          <FileDirectoryIcon />
        </ActionList.LeadingVisual>
        <ActionList.TrailingVisual>
          <HeartFillIcon />
        </ActionList.TrailingVisual>
      </ActionList.Item>
    </ActionList>
  </div>`,...A.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => <Stack>
    <Stack align="start" direction="horizontal">
      <Stack.Item style={{
      border: 'solid 1px var(--borderColor-default)',
      padding: '1rem'
    }}>
        <ActionList>
          <ActionList.Heading as="h2" size="small">
            Some items have inline description
          </ActionList.Heading>
          <ActionList.Item>
            Item with inline description
            <ActionList.Description>Inline description</ActionList.Description>
          </ActionList.Item>
          <ActionList.Item>
            Item with inline description
            <ActionList.Description>Inline description</ActionList.Description>
          </ActionList.Item>
          <ActionList.Item>Item with no description</ActionList.Item>
          <ActionList.Item>
            Item with inline description
            <ActionList.Description>Inline description</ActionList.Description>
          </ActionList.Item>
        </ActionList>
      </Stack.Item>
      <Stack.Item style={{
      border: 'solid 1px var(--borderColor-default)',
      padding: '1rem'
    }}>
        <ActionList>
          <ActionList.Heading as="h2" size="small">
            Some items have block description
          </ActionList.Heading>
          <ActionList.Item>
            Item with inline description
            <ActionList.Description variant="block">Block description</ActionList.Description>
          </ActionList.Item>
          <ActionList.Item>
            Item with inline description
            <ActionList.Description variant="block">Block description</ActionList.Description>
          </ActionList.Item>
          <ActionList.Item>Item with no description</ActionList.Item>
          <ActionList.Item>
            Item with inline description
            <ActionList.Description variant="block">Block description</ActionList.Description>
          </ActionList.Item>
        </ActionList>
      </Stack.Item>
    </Stack>
    <Stack align="start" direction="horizontal">
      <Stack.Item style={{
      border: 'solid 1px var(--borderColor-default)',
      padding: '1rem'
    }}>
        <ActionList>
          <ActionList.Heading as="h2" size="small">
            Some items have inline description inside a group
          </ActionList.Heading>
          <ActionList.Item>
            Item with inline description
            <ActionList.Description>Inline description</ActionList.Description>
          </ActionList.Item>
          <ActionList.Item>Item with no description</ActionList.Item>
          <ActionList.Group>
            <ActionList.GroupHeading as="h3">This is a group</ActionList.GroupHeading>
            <ActionList.Item>
              Item with inline description
              <ActionList.Description>Inline description</ActionList.Description>
            </ActionList.Item>
            <ActionList.Item>Item with no description</ActionList.Item>
          </ActionList.Group>
        </ActionList>
      </Stack.Item>
      <Stack.Item style={{
      border: 'solid 1px var(--borderColor-default)',
      padding: '1rem'
    }}>
        <ActionList>
          <ActionList.Heading as="h2" size="small">
            Some link items have block description
          </ActionList.Heading>
          <ActionList.LinkItem>
            Item with inline description
            <ActionList.Description variant="block">Block description</ActionList.Description>
          </ActionList.LinkItem>
          <ActionList.LinkItem>
            Item with inline description
            <ActionList.Description variant="block">Block description</ActionList.Description>
          </ActionList.LinkItem>
          <ActionList.LinkItem>Item with no description</ActionList.LinkItem>
          <ActionList.LinkItem>
            Item with inline description
            <ActionList.Description variant="block">Block description</ActionList.Description>
          </ActionList.LinkItem>
        </ActionList>
      </Stack.Item>
    </Stack>
    <Stack align="start" direction="horizontal">
      <Stack.Item style={{
      border: 'solid 1px var(--borderColor-default)',
      padding: '1rem'
    }}>
        <ActionList>
          <ActionList.Heading as="h2" size="small">
            All items have descriptions
          </ActionList.Heading>
          <ActionList.Item>
            Item with inline description
            <ActionList.Description>Inline description</ActionList.Description>
          </ActionList.Item>
          <ActionList.Item>
            Item with inline description
            <ActionList.Description>Inline description</ActionList.Description>
          </ActionList.Item>
        </ActionList>
      </Stack.Item>
      <Stack.Item style={{
      border: 'solid 1px var(--borderColor-default)',
      padding: '1rem'
    }}>
        <ActionList>
          <ActionList.Heading as="h2" size="small">
            No items have descriptions
          </ActionList.Heading>
          <ActionList.Item>Item with no description</ActionList.Item>
          <ActionList.Item>Item with no description</ActionList.Item>
        </ActionList>
      </Stack.Item>
    </Stack>
  </Stack>`,...L.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '100px'
  }}>
      <div style={{
      width: '300px',
      border: 'solid 1px gray'
    }}>
        <ActionList>
          <ActionList.Item>thisisalongemailaddress@longemail.com</ActionList.Item>
          <ActionList.Item>
            thisisalongemailaddress@longemail.com
            <ActionList.TrailingVisual>
              <HeartFillIcon />
            </ActionList.TrailingVisual>
          </ActionList.Item>
          <ActionList.Item>
            thisisalongemailaddress@longemail.com
            <ActionList.LeadingVisual>
              <HeartFillIcon />
            </ActionList.LeadingVisual>
          </ActionList.Item>
          <ActionList.Item>This is a long item title long long long oh wow</ActionList.Item>
          <ActionList.Item>
            This is a long item title long long long oh wow
            <ActionList.TrailingVisual>
              <HeartFillIcon />
            </ActionList.TrailingVisual>
          </ActionList.Item>
        </ActionList>
      </div>

      <div>
        <AnchoredOverlay open renderAnchor={props => <button type="button" {...props}>
              Overlay
            </button>}>
          <ActionList role="menu">
            <ActionList.Item role="menuitem">This menu should grow a bit</ActionList.Item>
          </ActionList>
        </AnchoredOverlay>
      </div>

      <div>
        <AnchoredOverlay open width="small" renderAnchor={props => <button type="button" {...props}>
              Overlay
            </button>}>
          <ActionList role="menu">
            <ActionList.Item role="menuitem">This menu should wrap because it has a small size</ActionList.Item>
            {/* <ActionList.Item role="menuitem">
             thisisalongemailaddress@longemail.com
             <ActionList.TrailingVisual>
              <HeartFillIcon />
             </ActionList.TrailingVisual>
             </ActionList.Item> */}
            {/* <ActionList.Item role="menuitem">
             thisisalongemailaddress@longemail.com
             <ActionList.LeadingVisual>
              <HeartFillIcon />
             </ActionList.LeadingVisual>
             </ActionList.Item> */}
          </ActionList>
        </AnchoredOverlay>
      </div>
    </div>;
}`,...I.parameters?.docs?.source}}};const Vi=["GroupWithSubtleTitleOldAPI","GroupWithFilledTitleOldAPI","GroupHeadingCustomClassname","ListCustomClassname","DividerCustomClassname","HeadingCustomClassname","DescriptionCustomClassname","VisualCustomClassname","TrailingVisualGap","ItemLabelStylesWithMixedDescriptions","OverlayWrapping"];export{g as DescriptionCustomClassname,p as DividerCustomClassname,d as GroupHeadingCustomClassname,a as GroupWithFilledTitleOldAPI,l as GroupWithSubtleTitleOldAPI,h as HeadingCustomClassname,L as ItemLabelStylesWithMixedDescriptions,m as ListCustomClassname,I as OverlayWrapping,A as TrailingVisualGap,u as VisualCustomClassname,Vi as __namedExportsOrder,Ti as default};
