import{j as r,T as O,B as F,d as l,r as R,R as w}from"./iframe-Cfz2vXeE.js";import{aP as W,l as T,j as C,V as A,S as k,az as D,r as E,aw as V,v as z,q as v,p as L}from"./index.esm-C1WN7kEu.js";import{A as P,H as J}from"./index-DYY_yzIQ.js";import{R as M}from"./ReactRouterLink-bkCleT0Q.js";import{L as H}from"./Label-ibdJir2D.js";import"./preload-helper-D9Z9MdNV.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./Divider-DAC_rNDB.js";import"./Truncate-DUc3hzfC.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Box-BgR2Y17o.js";const $="prc-deprecated-ErsatzOverlay-0jg3E",B="prc-deprecated-StyledDivWithWhiteFill-Bgrus",j={ErsatzOverlay:$,StyledDivWithWhiteFill:B},o=Object.assign(P,{Header:J}),Ce={title:"Deprecated/Components/ActionList",component:o,decorators:[e=>r.jsx(O,{children:r.jsx(F,{children:r.jsx(e,{})})})],parameters:{controls:{disable:!0}}},c=e=>{const t=l.c(11);let i,n,s;t[0]!==e?({maxWidth:n,children:i,...s}=e,t[0]=e,t[1]=i,t[2]=n,t[3]=s):(i=t[1],n=t[2],s=t[3]);let a;t[4]!==n?(a=n?{"--ersatz-overlay-max-width":n}:void 0,t[4]=n,t[5]=a):a=t[5];const _=n?"":void 0;let b;return t[6]!==i||t[7]!==s||t[8]!==a||t[9]!==_?(b=r.jsx("div",{className:j.ErsatzOverlay,style:a,"data-max-width":_,...s,children:i}),t[6]=i,t[7]=s,t[8]=a,t[9]=_,t[10]=b):b=t[10],b};function d(){const e=l.c(2);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx("h1",{children:"Actions"}),e[0]=t):t=e[0];let i;return e[1]===Symbol.for("react.memo_cache_sentinel")?(i=r.jsxs(r.Fragment,{children:[t,r.jsx(c,{children:r.jsx(o,{showItemDividers:!0,items:[{leadingVisual:W,text:"Open current Codespace",description:"Your existing Codespace will be opened to its previous state, and you'll be asked to manually switch to new-branch.",descriptionVariant:"block"},{leadingVisual:T,text:"Create new Codespace",description:"Create a brand new Codespace with a fresh image and checkout this branch.",descriptionVariant:"block"}]})})]}),e[1]=i):i=e[1],i}d.storyName="Actions";function p(){const e=l.c(3);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx("h1",{children:"Simple List"}),e[0]=t):t=e[0];let i;e[1]===Symbol.for("react.memo_cache_sentinel")?(i={text:"New file",showDivider:!0},e[1]=i):i=e[1];let n;return e[2]===Symbol.for("react.memo_cache_sentinel")?(n=r.jsxs(r.Fragment,{children:[t,r.jsx(c,{children:r.jsx(o,{items:[i,o.Divider,{text:"Copy link",showDivider:!0},{text:"Edit file",showDivider:!0},{text:"Delete file",variant:"danger",showDivider:!0}]})})]}),e[2]=n):n=e[2],n}p.storyName="Simple List";const N=new Array(6).fill(void 0).map((e,t)=>({text:`Item ${t}`,id:t}));function m(){const e=l.c(2);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx("h1",{id:"story-title",children:"Single Select List"}),e[0]=t):t=e[0];let i;return e[1]===Symbol.for("react.memo_cache_sentinel")?(i=r.jsxs(r.Fragment,{children:[t,r.jsx(c,{children:r.jsx(o,{role:"listbox","aria-labelledby":"story-title",items:N.map(G)})})]}),e[1]=i):i=e[1],i}function G(e,t){return{...e,selected:t===1,role:"option"}}m.storyName="Single Select";function u(){const e=l.c(2);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx("h1",{id:"story-title",children:"Multi Select List"}),e[0]=t):t=e[0];let i;return e[1]===Symbol.for("react.memo_cache_sentinel")?(i=r.jsxs(r.Fragment,{children:[t,r.jsx(c,{children:r.jsx(o,{role:"listbox","aria-labelledby":"story-title",selectionVariant:"multiple",items:N.map(X)})})]}),e[1]=i):i=e[1],i}function X(e,t){return{...e,selected:t===1||t===3,role:"option"}}u.storyName="Multi Select";function h(){const e=l.c(5);let t,i;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx("h1",{children:"Complex List"}),i=r.jsx("h2",{children:"Inset Variant"}),e[0]=t,e[1]=i):(t=e[0],i=e[1]);let n;e[2]===Symbol.for("react.memo_cache_sentinel")?(n={groupId:"0"},e[2]=n):n=e[2];let s;e[3]===Symbol.for("react.memo_cache_sentinel")?(s={groupId:"1",header:{title:"Live query",variant:"filled","aria-level":3}},e[3]=s):s=e[3];let a;return e[4]===Symbol.for("react.memo_cache_sentinel")?(a=r.jsxs(r.Fragment,{children:[t,i,r.jsx(c,{children:r.jsx(o,{groupMetadata:[n,s,{groupId:"2",header:{title:"Layout",variant:"subtle","aria-level":3},showItemDividers:!0},{groupId:"3",renderItem:Q},{groupId:"4",renderItem:Y,renderGroup:K}],items:[{leadingVisual:C,text:"Rename",groupId:"0"},{leadingVisual:A,text:"Duplicate",description:"Create a copy",descriptionVariant:"inline",groupId:"0"},{leadingVisual:k,text:"repo:github/memex,github/github",groupId:"1",renderItem:q},{leadingVisual:D,text:"Table",description:"Information-dense table optimized for operations across teams",descriptionVariant:"block",groupId:"2"},{leadingVisual:E,text:"Board",description:"Kanban-style board focused on visual states",descriptionVariant:"block",groupId:"2"},{leadingVisual:V,text:"Save sort and filters to current view",groupId:"3"},{leadingVisual:V,text:"Save sort and filters to new view",groupId:"3"},{leadingVisual:z,text:"View settings",groupId:"4"}]})})]}),e[4]=a):a=e[4],a}function q(e){return r.jsx(o.Item,{style:{color:"rebeccapurple"},...e})}function K(e){const{sx:t,...i}=e;return r.jsx(o.Group,{...i,sx:{...t,backgroundColor:"cornflowerblue",color:"white"}})}function Y(e){const{leadingVisual:t,...i}=e;return r.jsx(o.Item,{...i,leadingVisual:()=>r.jsx("div",{className:j.StyledDivWithWhiteFill,children:t&&r.jsx(t,{})})})}function Q(e){return r.jsx(o.Item,{style:{fontWeight:"bold"},...e})}h.storyName="Complex List — Inset Variant";function g(){const e=l.c(5);let t,i;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx("h1",{children:"Complex List"}),i=r.jsx("h2",{children:"Full Variant"}),e[0]=t,e[1]=i):(t=e[0],i=e[1]);let n;e[2]===Symbol.for("react.memo_cache_sentinel")?(n={groupId:"0"},e[2]=n):n=e[2];let s;e[3]===Symbol.for("react.memo_cache_sentinel")?(s={groupId:"1",header:{title:"Live query",variant:"filled","aria-level":3}},e[3]=s):s=e[3];let a;return e[4]===Symbol.for("react.memo_cache_sentinel")?(a=r.jsxs(r.Fragment,{children:[t,i,r.jsx(c,{children:r.jsx(o,{variant:"full",groupMetadata:[n,s,{groupId:"2",header:{title:"Layout",variant:"subtle","aria-level":3}},{groupId:"3",renderItem:te},{groupId:"4",renderItem:ee,renderGroup:Z}],items:[{leadingVisual:C,text:"Rename",groupId:"0"},{leadingVisual:A,text:"Duplicate",groupId:"0"},{leadingVisual:k,text:"repo:github/memex,github/github",groupId:"1",renderItem:U},{leadingVisual:D,text:"Table",description:"Information-dense table optimized for operations across teams",descriptionVariant:"block",groupId:"2"},{leadingVisual:E,text:"Board",description:"Kanban-style board focused on visual states",descriptionVariant:"block",groupId:"2"},{leadingVisual:V,text:"Save sort and filters to current view",groupId:"3"},{leadingVisual:V,text:"Save sort and filters to new view",groupId:"3"},{leadingVisual:z,text:"View settings",groupId:"4"}]})})]}),e[4]=a):a=e[4],a}function U(e){return r.jsx(o.Item,{style:{color:"rebeccapurple"},...e})}function Z(e){const{sx:t,...i}=e;return r.jsx(o.Group,{...i,sx:{...t,backgroundColor:"cornflowerblue",color:"white"}})}function ee(e){const{leadingVisual:t,...i}=e;return r.jsx(o.Item,{...i,leadingVisual:()=>r.jsx("div",{className:j.StyledDivWithWhiteFill,children:t&&r.jsx(t,{})})})}function te(e){return r.jsx(o.Item,{style:{fontWeight:"bold"},...e})}g.storyName="Complex List — Full Variant";function x(){const e=l.c(1);let t;return e[0]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsxs(r.Fragment,{children:[r.jsx("h1",{children:"Header"}),r.jsx("h2",{children:"Filled Variant"}),r.jsx(o.Header,{title:"Layout",variant:"filled","aria-level":3}),r.jsx("h2",{children:"Subtle Variant"}),r.jsx(o.Header,{title:"Layout",variant:"subtle","aria-level":3})]}),e[0]=t):t=e[0],t}x.storyName="Header";function S(){const e=l.c(2);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx("h1",{children:"Custom Item Children"}),e[0]=t):t=e[0];let i;return e[1]===Symbol.for("react.memo_cache_sentinel")?(i=r.jsxs(r.Fragment,{children:[t,r.jsx(c,{children:r.jsx(o,{items:[{leadingVisual:L,children:r.jsx(H,{children:"Choose this one"}),trailingIcon:v}]})})]}),e[1]=i):i=e[1],i}function y(){const e=l.c(2);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx("h1",{children:"Size Stress Testing"}),e[0]=t):t=e[0];let i;return e[1]===Symbol.for("react.memo_cache_sentinel")?(i=r.jsxs(r.Fragment,{children:[t,r.jsx(c,{maxWidth:"300px",children:r.jsx(o,{items:[{leadingVisual:L,text:"Block Description.  Long text should wrap",description:"This description is long, but it is block so it wraps",descriptionVariant:"block",trailingVisual:v,showDivider:!0},{leadingVisual:L,text:"Inline Description",description:"This description gets truncated because it is inline",trailingVisual:v,showDivider:!0},{leadingVisual:L,text:"Really long text without a description should wrap",trailingIcon:v,showDivider:!0}]})})]}),e[1]=i):i=e[1],i}y.storyName="Size Stress Testing";const re=R.forwardRef(({href:e,children:t},i)=>{const n=w.Children.only(t),s={ref:i,href:e};return r.jsx(r.Fragment,{children:w.isValidElement(n)?w.cloneElement(n,s):null})});function I(){const e=l.c(2);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx("h1",{children:"Simple List"}),e[0]=t):t=e[0];let i;return e[1]===Symbol.for("react.memo_cache_sentinel")?(i=r.jsxs(r.Fragment,{children:[t,r.jsx(c,{children:r.jsx(o,{items:[{text:"A. Vanilla action",renderItem:se},{text:"B. Vanilla link",renderItem:oe},{text:"C. React Router link",renderItem:ne},{text:"D. NextJS style",renderItem:ie}]})})]}),e[1]=i):i=e[1],i}function ie(e){return r.jsx(re,{href:"/about",children:r.jsx(o.Item,{as:"a",...e})})}function ne(e){return r.jsx(o.Item,{as:M,to:"/about",...e})}function oe(e){return r.jsx(o.Item,{as:"a",href:"/about",...e})}function se(e){return r.jsx(o.Item,{onAction:ae,...e})}function ae(){return alert("hi?")}I.storyName="List with a link item";function f(){const e=l.c(2);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx("h1",{children:"Simple List"}),e[0]=t):t=e[0];let i;return e[1]===Symbol.for("react.memo_cache_sentinel")?(i=r.jsxs(r.Fragment,{children:[t,r.jsx(c,{children:r.jsx(o,{items:[{text:"One",onClick:le}]})})]}),e[1]=i):i=e[1],i}function le(){return alert("Hello")}f.storyName="List an item input including DOM props";d.__docgenInfo={description:"",methods:[],displayName:"ActionsStory"};p.__docgenInfo={description:"",methods:[],displayName:"SimpleListStory"};m.__docgenInfo={description:"",methods:[],displayName:"SingleSelectListStory"};u.__docgenInfo={description:"",methods:[],displayName:"MultiSelectListStory"};h.__docgenInfo={description:"",methods:[],displayName:"ComplexListInsetVariantStory"};g.__docgenInfo={description:"",methods:[],displayName:"ComplexListFullVariantStory"};x.__docgenInfo={description:"",methods:[],displayName:"HeaderStory"};S.__docgenInfo={description:"",methods:[],displayName:"CustomItemChildren"};y.__docgenInfo={description:"",methods:[],displayName:"SizeStressTestingStory"};I.__docgenInfo={description:"",methods:[],displayName:"LinkItemStory"};f.__docgenInfo={description:"",methods:[],displayName:"DOMPropsStory"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`function ActionsStory(): JSX.Element {
  return <>
      <h1>Actions</h1>
      <ErsatzOverlay>
        <ActionList showItemDividers items={[{
        leadingVisual: ServerIcon,
        text: 'Open current Codespace',
        description: "Your existing Codespace will be opened to its previous state, and you'll be asked to manually switch to new-branch.",
        descriptionVariant: 'block'
      }, {
        leadingVisual: PlusCircleIcon,
        text: 'Create new Codespace',
        description: 'Create a brand new Codespace with a fresh image and checkout this branch.',
        descriptionVariant: 'block'
      }]} />
      </ErsatzOverlay>
    </>;
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`function SimpleListStory(): JSX.Element {
  return <>
      <h1>Simple List</h1>
      <ErsatzOverlay>
        <ActionList items={[{
        text: 'New file',
        showDivider: true
      }, ActionList.Divider, {
        text: 'Copy link',
        showDivider: true
      }, {
        text: 'Edit file',
        showDivider: true
      }, {
        text: 'Delete file',
        variant: 'danger',
        showDivider: true
      }]} />
      </ErsatzOverlay>
    </>;
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`function SingleSelectListStory(): JSX.Element {
  return <>
      <h1 id="story-title">Single Select List</h1>
      <ErsatzOverlay>
        <ActionList role="listbox" aria-labelledby="story-title" items={selectListItems.map((item, index) => ({
        ...item,
        selected: index === 1,
        role: 'option'
      }))} />
      </ErsatzOverlay>
    </>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`function MultiSelectListStory(): JSX.Element {
  return <>
      <h1 id="story-title">Multi Select List</h1>
      <ErsatzOverlay>
        <ActionList role="listbox" aria-labelledby="story-title" selectionVariant="multiple" items={selectListItems.map((item, index) => ({
        ...item,
        selected: index === 1 || index === 3,
        role: 'option'
      }))} />
      </ErsatzOverlay>
    </>;
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`function ComplexListInsetVariantStory(): JSX.Element {
  return <>
      <h1>Complex List</h1>
      <h2>Inset Variant</h2>
      <ErsatzOverlay>
        <ActionList groupMetadata={[{
        groupId: '0'
      }, {
        groupId: '1',
        header: {
          title: 'Live query',
          variant: 'filled',
          'aria-level': 3
        }
      }, {
        groupId: '2',
        header: {
          title: 'Layout',
          variant: 'subtle',
          'aria-level': 3
        },
        showItemDividers: true
      }, {
        groupId: '3',
        renderItem: props => <ActionList.Item style={{
          fontWeight: 'bold'
        }} {...props} />
      }, {
        groupId: '4',
        renderItem: ({
          leadingVisual: LeadingVisual,
          ...props
        }) => <ActionList.Item {...props} leadingVisual={() => <div className={classes.StyledDivWithWhiteFill}>
                      {LeadingVisual && <LeadingVisual></LeadingVisual>}
                    </div>} />,
        renderGroup: ({
          sx: sxProps,
          ...props
        }) => <ActionList.Group {...props} sx={{
          ...sxProps,
          backgroundColor: 'cornflowerblue',
          color: 'white'
        }} />
      }]} items={[{
        leadingVisual: TypographyIcon,
        text: 'Rename',
        groupId: '0'
      }, {
        leadingVisual: VersionsIcon,
        text: 'Duplicate',
        description: 'Create a copy',
        descriptionVariant: 'inline',
        groupId: '0'
      }, {
        leadingVisual: SearchIcon,
        text: 'repo:github/memex,github/github',
        groupId: '1',
        renderItem: props => <ActionList.Item style={{
          color: 'rebeccapurple'
        }} {...props} />
      }, {
        leadingVisual: NoteIcon,
        text: 'Table',
        description: 'Information-dense table optimized for operations across teams',
        descriptionVariant: 'block',
        groupId: '2'
      }, {
        leadingVisual: ProjectIcon,
        text: 'Board',
        description: 'Kanban-style board focused on visual states',
        descriptionVariant: 'block',
        groupId: '2'
      }, {
        leadingVisual: FilterIcon,
        text: 'Save sort and filters to current view',
        groupId: '3'
      }, {
        leadingVisual: FilterIcon,
        text: 'Save sort and filters to new view',
        groupId: '3'
      }, {
        leadingVisual: GearIcon,
        text: 'View settings',
        groupId: '4'
      }]} />
      </ErsatzOverlay>
    </>;
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`function ComplexListFullVariantStory(): JSX.Element {
  return <>
      <h1>Complex List</h1>
      <h2>Full Variant</h2>
      <ErsatzOverlay>
        <ActionList variant="full" groupMetadata={[{
        groupId: '0'
      }, {
        groupId: '1',
        header: {
          title: 'Live query',
          variant: 'filled',
          'aria-level': 3
        }
      }, {
        groupId: '2',
        header: {
          title: 'Layout',
          variant: 'subtle',
          'aria-level': 3
        }
      }, {
        groupId: '3',
        renderItem: props => <ActionList.Item style={{
          fontWeight: 'bold'
        }} {...props} />
      }, {
        groupId: '4',
        renderItem: ({
          leadingVisual: LeadingVisual,
          ...props
        }) => <ActionList.Item {...props} leadingVisual={() => <div className={classes.StyledDivWithWhiteFill}>
                      {LeadingVisual && <LeadingVisual></LeadingVisual>}
                    </div>} />,
        renderGroup: ({
          sx: sxProps,
          ...props
        }) => <ActionList.Group {...props} sx={{
          ...sxProps,
          backgroundColor: 'cornflowerblue',
          color: 'white'
        }} />
      }]} items={[{
        leadingVisual: TypographyIcon,
        text: 'Rename',
        groupId: '0'
      }, {
        leadingVisual: VersionsIcon,
        text: 'Duplicate',
        groupId: '0'
      }, {
        leadingVisual: SearchIcon,
        text: 'repo:github/memex,github/github',
        groupId: '1',
        renderItem: props => <ActionList.Item style={{
          color: 'rebeccapurple'
        }} {...props} />
      }, {
        leadingVisual: NoteIcon,
        text: 'Table',
        description: 'Information-dense table optimized for operations across teams',
        descriptionVariant: 'block',
        groupId: '2'
      }, {
        leadingVisual: ProjectIcon,
        text: 'Board',
        description: 'Kanban-style board focused on visual states',
        descriptionVariant: 'block',
        groupId: '2'
      }, {
        leadingVisual: FilterIcon,
        text: 'Save sort and filters to current view',
        groupId: '3'
      }, {
        leadingVisual: FilterIcon,
        text: 'Save sort and filters to new view',
        groupId: '3'
      }, {
        leadingVisual: GearIcon,
        text: 'View settings',
        groupId: '4'
      }]} />
      </ErsatzOverlay>
    </>;
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`function HeaderStory(): JSX.Element {
  return <>
      <h1>Header</h1>
      <h2>Filled Variant</h2>
      <ActionList.Header title="Layout" variant="filled" aria-level={3} />
      <h2>Subtle Variant</h2>
      <ActionList.Header title="Layout" variant="subtle" aria-level={3} />
    </>;
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`function CustomItemChildren(): JSX.Element {
  return <>
      <h1>Custom Item Children</h1>
      <ErsatzOverlay>
        <ActionList items={[{
        leadingVisual: ArrowRightIcon,
        children: <Label>Choose this one</Label>,
        trailingIcon: ArrowLeftIcon
      }]} />
      </ErsatzOverlay>
    </>;
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`function SizeStressTestingStory(): JSX.Element {
  return <>
      <h1>Size Stress Testing</h1>
      <ErsatzOverlay maxWidth="300px">
        <ActionList items={[{
        leadingVisual: ArrowRightIcon,
        text: 'Block Description.  Long text should wrap',
        description: 'This description is long, but it is block so it wraps',
        descriptionVariant: 'block',
        trailingVisual: ArrowLeftIcon,
        showDivider: true
      }, {
        leadingVisual: ArrowRightIcon,
        text: 'Inline Description',
        description: 'This description gets truncated because it is inline',
        trailingVisual: ArrowLeftIcon,
        showDivider: true
      }, {
        leadingVisual: ArrowRightIcon,
        text: 'Really long text without a description should wrap',
        trailingIcon: ArrowLeftIcon,
        // backward compatible
        showDivider: true
      }]} />
      </ErsatzOverlay>
    </>;
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`function LinkItemStory(): JSX.Element {
  return <>
      <h1>Simple List</h1>
      <ErsatzOverlay>
        <ActionList items={[{
        text: 'A. Vanilla action',
        renderItem: props => <ActionList.Item onAction={() => alert('hi?')} {...props} />
      }, {
        text: 'B. Vanilla link',
        renderItem: props => <ActionList.Item as="a" href="/about" {...props} />
      }, {
        text: 'C. React Router link',
        renderItem: props => <ActionList.Item as={ReactRouterLikeLink} to="/about" {...props} />
      }, {
        text: 'D. NextJS style',
        renderItem: props => <NextJSLikeLink href="/about">
                  <ActionList.Item as="a" {...props} />
                </NextJSLikeLink>
      }]} />
      </ErsatzOverlay>
    </>;
}`,...I.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`function DOMPropsStory(): JSX.Element {
  return <>
      <h1>Simple List</h1>
      <ErsatzOverlay>
        <ActionList items={[{
        text: 'One',
        onClick: () => alert('Hello')
      }]} />
      </ErsatzOverlay>
    </>;
}`,...f.parameters?.docs?.source}}};const Ae=["ActionsStory","SimpleListStory","SingleSelectListStory","MultiSelectListStory","ComplexListInsetVariantStory","ComplexListFullVariantStory","HeaderStory","CustomItemChildren","SizeStressTestingStory","LinkItemStory","DOMPropsStory"];export{d as ActionsStory,g as ComplexListFullVariantStory,h as ComplexListInsetVariantStory,S as CustomItemChildren,f as DOMPropsStory,x as HeaderStory,I as LinkItemStory,u as MultiSelectListStory,p as SimpleListStory,m as SingleSelectListStory,y as SizeStressTestingStory,Ae as __namedExportsOrder,Ce as default};
