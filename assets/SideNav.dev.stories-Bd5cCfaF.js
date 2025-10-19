import{c as N,j as i,d as x}from"./iframe-Cfz2vXeE.js";import{a3 as k,aQ as g,aR as j,aS as _,aT as T}from"./index.esm-C1WN7kEu.js";import{L as y}from"./Link-Dm7wEaum.js";import{T as l}from"./Text-BbpDCwQY.js";import{A as W}from"./Avatar-Oyvcp9WV.js";import{O as v}from"./Octicon-B0A15aaM.js";import{L as w}from"./Label-ibdJir2D.js";import{C}from"./CounterLabel-DnnBMwbH.js";import{H as b}from"./Heading-Axc3-HQM.js";import"./preload-helper-D9Z9MdNV.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./VisuallyHidden-BShfgJrZ.js";const z="prc-src-SideNav-aJOh-",R="prc-src-SideNavBordered-mEO0A",V="prc-src-SideNavLink-HpDo-",I="prc-src-SideNavLinkFull-HSWcY",S={SideNav:z,SideNavBordered:R,SideNavLink:V,"SideNavVariant--normal":"prc-src-SideNavVariant--normal-ZqAVW","SideNavVariant--lightweight":"prc-src-SideNavVariant--lightweight-mcFtR",SideNavLinkFull:I};function L({as:e="nav",variant:a="normal",className:t,bordered:n,children:o,"aria-label":d}){const s=a==="lightweight"?"lightweight":"normal",c=N(S.SideNav,S[`SideNavVariant--${s}`],"sidenav",`variant-${s}`,t,{[S.SideNavBordered]:n});return i.jsx(e,{className:c,"aria-label":d,children:o})}const p=({selected:e,to:a,variant:t,className:n,children:o,...d})=>{const s=typeof a=="string",c=N(S.SideNavLink,n,{[S.SideNavLinkFull]:t==="full"});return i.jsx(y,{"aria-current":s||e?"page":void 0,className:c,...d,children:o})};p.displayName="SideNav.Link";const r=Object.assign(L,{Link:p});L.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'nav'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'lightweight' | 'normal'",elements:[{name:"literal",value:"'lightweight'"},{name:"literal",value:"'normal'"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""}}};const G={title:"Deprecated/Components/SideNav/Dev",component:r},h=()=>{const e=x.c(4);let a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=i.jsx(r.Link,{href:"#account",children:i.jsx(l,{children:"Account"})}),e[0]=a):a=e[0];let t;e[1]===Symbol.for("react.memo_cache_sentinel")?(t=i.jsx(r.Link,{href:"#home",selected:!0,children:i.jsx(l,{children:"Profile"})}),e[1]=t):t=e[1];let n;e[2]===Symbol.for("react.memo_cache_sentinel")?(n=i.jsx(r.Link,{href:"#emails",children:i.jsx(l,{children:"Emails"})}),e[2]=n):n=e[2];let o;return e[3]===Symbol.for("react.memo_cache_sentinel")?(o=i.jsxs(r,{bordered:!0,"aria-label":"Main",children:[a,t,n,i.jsx(r.Link,{href:"#notifications",children:i.jsx(l,{children:"Notifications"})})]}),e[3]=o):o=e[3],o},m=()=>{const e=x.c(7);let a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=i.jsx(r.Link,{href:"#url",children:i.jsx(l,{children:"Text Only"})}),e[0]=a):a=e[0];let t;e[1]===Symbol.for("react.memo_cache_sentinel")?(t=i.jsxs(r.Link,{href:"#url",children:[i.jsx(W,{size:16,src:"https://avatars.githubusercontent.com/hubot?s=32"}),i.jsx(l,{children:"With an avatar"})]}),e[1]=t):t=e[1];let n;e[2]===Symbol.for("react.memo_cache_sentinel")?(n=i.jsxs(r.Link,{href:"#url",children:[i.jsx(v,{size:16,icon:k}),i.jsx(l,{children:"With an Octicon"})]}),e[2]=n):n=e[2];let o;e[3]===Symbol.for("react.memo_cache_sentinel")?(o=i.jsxs(r.Link,{href:"#url",variant:"full",selected:!0,children:[i.jsx(l,{children:"With a status icon"}),i.jsx(v,{size:16,icon:g,color:"success.fg"})]}),e[3]=o):o=e[3];let d;e[4]===Symbol.for("react.memo_cache_sentinel")?(d=i.jsxs(r.Link,{href:"#url",variant:"full",children:[i.jsx(l,{children:"With a label"}),i.jsx(w,{children:"label"})]}),e[4]=d):d=e[4];let s;e[5]===Symbol.for("react.memo_cache_sentinel")?(s=i.jsxs(r.Link,{href:"#url",variant:"full",children:[i.jsx(l,{children:"With a counter"}),i.jsx(C,{children:"16"})]}),e[5]=s):s=e[5];let c;return e[6]===Symbol.for("react.memo_cache_sentinel")?(c=i.jsxs(r,{bordered:!0,"aria-label":"Main",children:[a,t,n,o,d,s,i.jsxs(r.Link,{href:"#url",children:[i.jsx(b,{as:"h5",children:"A heading"}),i.jsx(l,{children:"and some more content"})]})]}),e[6]=c):c=e[6],c},u=()=>{const e=x.c(6);let a,t;e[0]===Symbol.for("react.memo_cache_sentinel")?(a={borderWidth:"var(--borderWidth-thin)",borderStyle:"solid",borderColor:"var(--borderColor-default)",borderRadius:"var(--borderRadius-medium)",padding:"var(--base-size-16)",backgroundColor:"var(--bgColor-muted)",maxWidth:"360px"},t=i.jsx("div",{style:{borderStyle:"solid",borderColor:"var(--borderColor-default)",borderWidth:"0",borderBottomWidth:"var(--borderWidth-thin)",borderRadius:"0",marginBottom:"var(--base-size-8)",paddingBottom:"var(--base-size-4)"},children:i.jsx(b,{as:"h2",color:"fg.muted",children:"Menu"})}),e[0]=a,e[1]=t):(a=e[0],t=e[1]);let n;e[2]===Symbol.for("react.memo_cache_sentinel")?(n=i.jsx(r.Link,{href:"#url",children:i.jsx(l,{children:"Account"})}),e[2]=n):n=e[2];let o;e[3]===Symbol.for("react.memo_cache_sentinel")?(o=i.jsx(r.Link,{href:"#url",selected:!0,children:i.jsx(l,{children:"Profile"})}),e[3]=o):o=e[3];let d;e[4]===Symbol.for("react.memo_cache_sentinel")?(d=i.jsx(r.Link,{href:"#url",children:i.jsx(l,{children:"Emails"})}),e[4]=d):d=e[4];let s;return e[5]===Symbol.for("react.memo_cache_sentinel")?(s=i.jsxs("div",{style:a,children:[t,i.jsxs(r,{variant:"lightweight",children:[n,o,d,i.jsx(r.Link,{href:"#url",children:i.jsx(l,{children:"Notifications"})})]})]}),e[5]=s):s=e[5],s},f=()=>{const e=x.c(6);let a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=i.jsxs(r.Link,{href:"#url",children:[i.jsx(v,{size:16,icon:j}),i.jsx(l,{children:"Account"})]}),e[0]=a):a=e[0];let t;e[1]===Symbol.for("react.memo_cache_sentinel")?(t=i.jsxs(r.Link,{href:"#url",selected:!0,children:[i.jsx(v,{size:16,icon:_}),i.jsx(l,{children:"Profile"})]}),e[1]=t):t=e[1];let n;e[2]===Symbol.for("react.memo_cache_sentinel")?(n=i.jsx(r.Link,{href:"#url",selected:!0,children:i.jsx(l,{children:"Sub item 1"})}),e[2]=n):n=e[2];let o;e[3]===Symbol.for("react.memo_cache_sentinel")?(o=i.jsx(r.Link,{href:"#url",children:i.jsx(l,{children:"Sub item 2"})}),e[3]=o):o=e[3];let d;e[4]===Symbol.for("react.memo_cache_sentinel")?(d=i.jsxs(r,{bordered:!0,variant:"lightweight",children:[n,o,i.jsx(r.Link,{href:"#url",children:i.jsx(l,{children:"Sub item 3"})})]}),e[4]=d):d=e[4];let s;return e[5]===Symbol.for("react.memo_cache_sentinel")?(s=i.jsxs(r,{bordered:!0,"aria-label":"Main",children:[a,t,d,i.jsxs(r.Link,{href:"#url",children:[i.jsx(v,{size:16,icon:T}),i.jsx(l,{children:"Emails"})]})]}),e[5]=s):s=e[5],s};h.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"FullVariant"};u.__docgenInfo={description:"",methods:[],displayName:"LightweightVariant"};f.__docgenInfo={description:"",methods:[],displayName:"LightweightNestedVariant"};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <SideNav bordered aria-label="Main">
    <SideNav.Link href="#account">
      <Text>Account</Text>
    </SideNav.Link>
    <SideNav.Link href="#home" selected>
      <Text>Profile</Text>
    </SideNav.Link>
    <SideNav.Link href="#emails">
      <Text>Emails</Text>
    </SideNav.Link>
    <SideNav.Link href="#notifications">
      <Text>Notifications</Text>
    </SideNav.Link>
  </SideNav>`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <SideNav bordered aria-label="Main">
    <SideNav.Link href="#url">
      <Text>Text Only</Text>
    </SideNav.Link>
    <SideNav.Link href="#url">
      <Avatar size={16} src="https://avatars.githubusercontent.com/hubot?s=32" />
      <Text>With an avatar</Text>
    </SideNav.Link>
    <SideNav.Link href="#url">
      <Octicon size={16} icon={ZapIcon} />
      <Text>With an Octicon</Text>
    </SideNav.Link>
    <SideNav.Link href="#url" variant="full" selected>
      <Text>With a status icon</Text>
      <Octicon size={16} icon={DotIcon} color="success.fg" />
    </SideNav.Link>
    <SideNav.Link href="#url" variant="full">
      <Text>With a label</Text>
      <Label>label</Label>
    </SideNav.Link>
    <SideNav.Link href="#url" variant="full">
      <Text>With a counter</Text>
      <CounterLabel>16</CounterLabel>
    </SideNav.Link>
    <SideNav.Link href="#url">
      <Heading as="h5">A heading</Heading>
      <Text>and some more content</Text>
    </SideNav.Link>
  </SideNav>`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <div style={{
  borderWidth: 'var(--borderWidth-thin)',
  borderStyle: 'solid',
  borderColor: 'var(--borderColor-default)',
  borderRadius: 'var(--borderRadius-medium)',
  padding: 'var(--base-size-16)',
  backgroundColor: 'var(--bgColor-muted)',
  maxWidth: '360px'
}}>
    <div style={{
    borderStyle: 'solid',
    borderColor: 'var(--borderColor-default)',
    borderWidth: '0',
    borderBottomWidth: 'var(--borderWidth-thin)',
    borderRadius: '0',
    marginBottom: 'var(--base-size-8)',
    paddingBottom: 'var(--base-size-4)'
  }}>
      <Heading as="h2" color="fg.muted">
        Menu
      </Heading>
    </div>
    <SideNav variant="lightweight">
      <SideNav.Link href="#url">
        <Text>Account</Text>
      </SideNav.Link>
      <SideNav.Link href="#url" selected>
        <Text>Profile</Text>
      </SideNav.Link>
      <SideNav.Link href="#url">
        <Text>Emails</Text>
      </SideNav.Link>
      <SideNav.Link href="#url">
        <Text>Notifications</Text>
      </SideNav.Link>
    </SideNav>
  </div>`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <SideNav bordered aria-label="Main">
    <SideNav.Link href="#url">
      <Octicon size={16} icon={PersonIcon} />
      <Text>Account</Text>
    </SideNav.Link>
    <SideNav.Link href="#url" selected>
      <Octicon size={16} icon={SmileyIcon} />
      <Text>Profile</Text>
    </SideNav.Link>

    <SideNav bordered variant="lightweight">
      <SideNav.Link href="#url" selected>
        <Text>Sub item 1</Text>
      </SideNav.Link>
      <SideNav.Link href="#url">
        <Text>Sub item 2</Text>
      </SideNav.Link>
      <SideNav.Link href="#url">
        <Text>Sub item 3</Text>
      </SideNav.Link>
    </SideNav>

    <SideNav.Link href="#url">
      <Octicon size={16} icon={MailIcon} />
      <Text>Emails</Text>
    </SideNav.Link>
  </SideNav>`,...f.parameters?.docs?.source}}};const K=["Default","FullVariant","LightweightVariant","LightweightNestedVariant"];export{h as Default,m as FullVariant,f as LightweightNestedVariant,u as LightweightVariant,K as __namedExportsOrder,G as default};
