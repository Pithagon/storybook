import{r as t,j as e,R as g}from"./iframe-Cfz2vXeE.js";import{a as f,F as p}from"./FormControl-qjqH6r5D.js";import{_ as I}from"./index.esm-C1WN7kEu.js";import{A as U}from"./index-C-OhZ25x.js";import{S as $}from"./index-D3vEWZM2.js";import{L as V}from"./Label-ibdJir2D.js";import{B as x}from"./Button-3sCteC9V.js";import{C as J}from"./Checkbox-BHvnb8mU.js";import{D as G}from"./Dialog-BYWFp9hz.js";import"./preload-helper-D9Z9MdNV.js";import"./TextInputWrapper-A6-jRRIw.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./InputLabel-BWKIqz-Q.js";import"./Text-BbpDCwQY.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useSafeTimeout-BD3cO5TN.js";import"./TextInput-hhRVe1zi.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./anchored-position-Cz4CQZsC.js";import"./useFocusZone-BvuuCBlY.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./FilteredActionList-Lzw7hr5X.js";import"./useProvidedStateOrCreate-BEKIGSkE.js";import"./Stack--yR6jd9X.js";import"./SkeletonBox-ClHTzzEx.js";import"./useFeatureFlag-paATTdb3.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./Overlay-Du2pzphD.js";import"./Portal-BKCn1yDJ.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./Token-B_OnxjPX.js";import"./Textarea-DREKwwM3.js";import"./Octicon-B0A15aaM.js";import"./LinkButton-D-EvgNXE.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./index-CEFMyGLK.js";import"./useMergedRefs-CMoMpGtu.js";import"./useMnemonics-D4gqZtvW.js";import"./AnchoredOverlay-DQ90Zw6u.js";import"./useFocusTrap-CL_Yl_fl.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./Heading-Axc3-HQM.js";import"./Link-Dm7wEaum.js";import"./Truncate-DUc3hzfC.js";import"./ScrollableRegion-CKacTlaY.js";import"./useOverflow-CIpObA8I.js";const Q="prc-SelectPanel-ColorCircle-oJ3c3",X="prc-SelectPanel-CustomActionListItem-Wovix",q={ColorCircle:Q,CustomActionListItem:X},ft={title:"Components/SelectPanel/Examples",component:f},C=n=>({variant:"empty",title:`No language found for \`${n}\``,body:"Adjust your search term to find other languages"});function w(n){return function(){return e.jsx("div",{className:q.ColorCircle,style:{backgroundColor:n,borderColor:n}})}}const a=[{leadingVisual:w("#a2eeef"),text:"enhancement",id:1},{leadingVisual:w("#d73a4a"),text:"bug",id:2},{leadingVisual:w("#0cf478"),text:"good first issue",id:3},{leadingVisual:w("#ffd78e"),text:"design",id:4},{leadingVisual:w("#ff0000"),text:"blocker",id:5},{leadingVisual:w("#a4f287"),text:"backend",id:6},{leadingVisual:w("#8dc6fc"),text:"frontend",id:7}],F=()=>{const[n,l]=t.useState(a.slice(1,3)),[s,m]=t.useState(""),o=a.filter(i=>i.text.toLowerCase().startsWith(s.toLowerCase())),[c,d]=t.useState(!1);return e.jsxs(p,{children:[e.jsx(p.Label,{children:"Labels"}),e.jsx(f,{renderAnchor:({children:i,...r})=>e.jsx(x,{trailingAction:I,...r,children:i}),placeholder:"Select labels",open:c,onOpenChange:d,items:o,selected:n,onSelectedChange:l,onFilterChange:m,overlayProps:{width:"small",height:"initial",maxHeight:"xsmall"},message:o.length===0?C(s):void 0})]})};F.storyName="Height: Initial, Overflowing Items";const O=()=>{const n=[a[0],a[1]],[l,s]=t.useState([n[0]]),[m,o]=t.useState(""),c=n.filter(r=>r.text.toLowerCase().startsWith(m.toLowerCase())),[d,i]=t.useState(!1);return e.jsxs(p,{children:[e.jsx(p.Label,{children:"Labels"}),e.jsx(f,{renderAnchor:({children:r,...h})=>e.jsx(x,{trailingAction:I,...h,children:r}),placeholder:"Select labels",open:d,onOpenChange:i,items:c,selected:l,onSelectedChange:s,onFilterChange:o,showItemDividers:!0,overlayProps:{width:"small",height:"initial",maxHeight:"xsmall"},message:c.length===0?C(m):void 0})]})};O.storyName="Height: Initial, Underflowing Items";const A=()=>{const[n,l]=t.useState([a[0]]),[s,m]=t.useState(""),[o,c]=t.useState([]),d=t.useMemo(()=>o.filter(b=>b.text.toLowerCase().startsWith(s.toLowerCase())),[o,s]),[i,r]=t.useState(!1),[h,u]=t.useState("auto"),v=()=>{r(!i),setTimeout(()=>{c([a[0],a[1]]),u("initial")},1500)};return e.jsxs(p,{children:[e.jsx(p.Label,{children:"Labels"}),e.jsx(f,{renderAnchor:({children:b,"aria-labelledby":S,...L})=>e.jsx(x,{trailingAction:I,"aria-labelledby":` ${S}`,...L,children:b}),placeholder:"Select labels",open:i,onOpenChange:v,loading:o.length===0,items:d,selected:n,onSelectedChange:l,onFilterChange:m,showItemDividers:!0,overlayProps:{width:"small",height:h,maxHeight:"xsmall"},message:d.length===0?C(s):void 0})]})};A.storyName="Height: Initial, Underflowing Items (After Fetch)";const j=()=>{const[n,l]=t.useState(a.slice(1,3)),[s,m]=t.useState(""),o=a.filter(i=>i.text.toLowerCase().startsWith(s.toLowerCase())),[c,d]=t.useState(!1);return e.jsxs(p,{children:[e.jsx(p.Label,{children:"Labels"}),e.jsx(f,{renderAnchor:({children:i,"aria-labelledby":r,...h})=>e.jsx(x,{trailingAction:I,"aria-labelledby":` ${r}`,...h,children:i}),placeholder:"Select labels",open:c,onOpenChange:d,items:o,selected:n,onSelectedChange:l,onFilterChange:m,showItemDividers:!0,message:o.length===0?C(s):void 0}),e.jsx("div",{style:{backgroundColor:"#9c27b0",height:"100vh",padding:"20px",margin:"20px",color:"white"},children:"This element makes the body really tall. This is to test that we do not have layout/focus issues if the Portal is far down the page"})]})},T=()=>{const n=[...a,...a,...a,...a,...a,...a,...a,...a],[l,s]=t.useState(""),[m,o]=g.useState(n[0]),c=n.filter(S=>S.text.toLowerCase().startsWith(l.toLowerCase())),[d,i]=t.useState(!1),[r,h]=g.useState(n[0]),u=n.filter(S=>S.text.toLowerCase().startsWith(l.toLowerCase())),[v,b]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsx(p.Label,{children:"With height:medium"}),e.jsx(f,{renderAnchor:({children:S,...L})=>e.jsx(x,{trailingAction:I,...L,children:S??"Select Labels"}),placeholder:"Select labels",open:d,onOpenChange:i,items:c,selected:m,onSelectedChange:o,onFilterChange:s,showItemDividers:!0,overlayProps:{height:"medium"},message:c.length===0?C(l):void 0})]}),e.jsx("br",{}),e.jsxs(p,{children:[e.jsx(p.Label,{children:"With height:auto, maxheight:medium"}),e.jsx(f,{renderAnchor:({children:S,...L})=>e.jsx(x,{trailingAction:I,...L,children:S??"Select Labels"}),placeholder:"Select labels",open:v,onOpenChange:b,items:u,selected:r,onSelectedChange:h,onFilterChange:s,showItemDividers:!0,overlayProps:{height:"auto",maxHeight:"medium"},message:u.length===0?C(l):void 0})]})]})},R=()=>{const n=[{text:"src/SelectPanel/SelectPanel.tsx",id:3},{text:"src/SelectPanel/SelectPanel.stories.tsx",id:4},{text:"src/SelectPanel/SelectPanel.features.stories.tsx",id:5},{text:"src/SelectPanel/SelectPanel.examples.stories.tsx",id:6}],[l,s]=t.useState(n.slice(1,3)),[m,o]=t.useState(""),c=n.filter(r=>r.text.toLowerCase().startsWith(m.toLowerCase())),[d,i]=t.useState(!1);return e.jsxs(p,{children:[e.jsx(p.Label,{children:"Long string with truncation (not reviewed for accessibility)"}),e.jsx(f,{title:"Select files",renderAnchor:r=>e.jsx(x,{trailingAction:I,...r,"aria-haspopup":"dialog",children:"Select files"}),open:d,onOpenChange:i,items:c,selected:l,onSelectedChange:s,onFilterChange:o,overlayProps:{width:"medium"},renderItem:r=>e.jsx(U.Item,{id:r.id?.toString(),className:q.CustomActionListItem,children:e.jsx(U.Description,{truncate:!0,children:r.text})}),message:c.length===0?C(m):void 0})]})},B=()=>{const n=[{text:"enhancement",id:1},{text:"bug",id:2},{text:"good first issue",id:3},{text:"design",id:4},{text:"blocker",id:5},{text:"backend",id:6},{text:"frontend",id:7}],[l,s]=t.useState(n.slice(1,3)),[m,o]=t.useState(""),c=n.filter(r=>r.text.toLowerCase().startsWith(m.toLowerCase())),[d,i]=t.useState(!1);return e.jsxs(p,{children:[e.jsx(p.Label,{children:"Items in component scope"}),e.jsx(f,{title:"Select labels",placeholder:"Select labels",open:d,onOpenChange:i,items:c,selected:l,onSelectedChange:s,onFilterChange:o,message:c.length===0?C(m):void 0})]})},W=()=>{const[n,l]=g.useState([a[0],a[1]]),[s,m]=t.useState(!1),[o,c]=g.useState(""),[d,i]=g.useState([]),[r,h]=t.useState(!0);return g.useEffect(()=>{s||h(!0),window.setTimeout(()=>{s&&(i(a.filter(u=>u.text.toLowerCase().startsWith(o.toLowerCase()))),h(!1))},2e3)},[s]),g.useEffect(()=>{r||i(a.filter(u=>u.text.toLowerCase().startsWith(o.toLowerCase())))},[o]),e.jsx(e.Fragment,{children:e.jsxs($,{direction:"vertical",justify:"space-between",style:{height:"calc(100vh - 300px)",width:"fit-content"},children:[e.jsx("h1",{children:"Reposition panel after loading"}),e.jsx(f,{loading:r,title:"Select labels",placeholderText:"Filter Labels",open:s,onOpenChange:m,items:d,selected:n,onSelectedChange:l,onFilterChange:c,message:d.length===0?C(o):void 0})]})})},_=()=>{const[n,l]=g.useState([a[0],a[1]]),[s,m]=t.useState(!1),[o,c]=g.useState(""),[d,i]=g.useState([]),[r,h]=t.useState(!0);return g.useEffect(()=>{s||h(!0),window.setTimeout(()=>{s&&(i(a.filter(u=>u.text.toLowerCase().startsWith(o.toLowerCase()))),h(!1))},2e3)},[s]),g.useEffect(()=>{r||i(a.filter(u=>u.text.toLowerCase().startsWith(o.toLowerCase())))},[o]),e.jsx(G,{title:"SelectPanel reposition after loading inside Dialog",onClose:()=>{},children:e.jsxs($,{direction:"vertical",justify:"space-between",style:{height:"calc(100vh - 500px)",width:"fit-content"},children:[e.jsx("p",{children:"other content"}),e.jsx(f,{loading:r,title:"Select labels",placeholderText:"Filter Labels",open:s,onOpenChange:m,items:d,selected:n,onSelectedChange:l,onFilterChange:c,overlayProps:{anchorSide:"outside-top"},message:d.length===0?C(o):void 0})]})})},k=()=>{const[n,l]=t.useState(a.slice(1,3)),[s,m]=t.useState(""),o=a.filter(i=>i.text.toLowerCase().startsWith(s.toLowerCase())),[c,d]=t.useState(!1);return e.jsxs(p,{children:[e.jsx(p.Label,{children:"Labels"}),e.jsx(f,{title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:i,...r})=>e.jsx(x,{trailingAction:I,...r,"aria-haspopup":"dialog",children:i}),open:c,onOpenChange:d,items:o,selected:n,onSelectedChange:l,onFilterChange:m,width:"medium"})]})},D=500,Y=Array.from({length:D},(n,l)=>({id:l,text:`Item ${l}`,description:`Description ${l}`,leadingVisual:w("#a2eeef")})),N=()=>{const[n,l]=t.useState([]),[s,m]=t.useState(!1),[o,c]=g.useState(!0),[d,i]=t.useState(""),r=Y.filter(y=>y.text.toLowerCase().startsWith(d.toLowerCase())),[h,u]=t.useState(50),v=r.slice(0,o?h:D);t.useEffect(function(){const P=document.querySelector('#select-labels-panel-dialog [role="listbox"]')?.parentElement,M=K=>{const E=K.target;E.scrollTop===E.scrollHeight-E.offsetHeight&&u(h+50)};return P&&P.addEventListener("scroll",M),()=>P?.removeEventListener("scroll",M)});const b=t.useRef(),S=t.useRef(),[L,H]=t.useState(),z=()=>{s||(b.current=performance.now()),m(!s)};return t.useEffect(function(){s&&(S.current=performance.now(),b.current&&H(S.current-b.current))},[s]),e.jsxs("form",{children:[e.jsxs(p,{children:[e.jsx(p.Label,{children:"Render subset of items on initial open"}),e.jsx(p.Caption,{children:o?"Loads more items on scroll":`Loads all ${D} items at once`}),e.jsx(J,{checked:o,onChange:()=>{c(!o),H(void 0),u(50)}})]}),e.jsxs("p",{children:["Time taken (ms) to render initial ",o?50:D," items:"," ",L?e.jsxs(V,{children:[L.toFixed(2)," ms"]}):'(click "Select Labels" to open)']}),e.jsxs("p",{children:["Known bug: Scroll resets to top when the items change. Works well with feature flag"," ",e.jsx(V,{children:"primer_react_select_panel_remove_active_descendant"})]}),e.jsxs(p,{children:[e.jsx(p.Label,{children:"Labels"}),e.jsx(f,{title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:y,...P})=>e.jsx(x,{trailingAction:I,...P,"aria-haspopup":"dialog",children:y}),open:s,onOpenChange:z,items:v,selected:n,onSelectedChange:l,onFilterChange:i,width:"medium",height:"large",message:r.length===0?C(d):void 0,overlayProps:{id:"select-labels-panel-dialog"}})]})]})};F.__docgenInfo={description:"",methods:[],displayName:"HeightInitialWithOverflowingItemsStory"};O.__docgenInfo={description:"",methods:[],displayName:"HeightInitialWithUnderflowingItemsStory"};A.__docgenInfo={description:"",methods:[],displayName:"HeightInitialWithUnderflowingItemsAfterFetch"};j.__docgenInfo={description:"",methods:[],displayName:"AboveTallBody"};T.__docgenInfo={description:"",methods:[],displayName:"HeightVariationsAndScroll"};R.__docgenInfo={description:"",methods:[],displayName:"CustomItemRenderer"};B.__docgenInfo={description:"",methods:[],displayName:"ItemsInScope"};W.__docgenInfo={description:"",methods:[],displayName:"RepositionAfterLoading"};_.__docgenInfo={description:"",methods:[],displayName:"SelectPanelRepositionInsideDialog"};k.__docgenInfo={description:"",methods:[],displayName:"WithDefaultMessage"};N.__docgenInfo={description:"",methods:[],displayName:"RenderMoreOnScroll"};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps}>
            {children}
          </Button>} placeholder="Select labels" // button text when no items are selected
    open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} overlayProps={{
      width: 'small',
      height: 'initial',
      maxHeight: 'xsmall'
    }} message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...F.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const underflowingItems = [items[0], items[1]];
  const [selected, setSelected] = useState<ItemInput[]>([underflowingItems[0]]);
  const [filter, setFilter] = useState('');
  const filteredItems = underflowingItems.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps}>
            {children}
          </Button>} placeholder="Select labels" // button text when no items are selected
    open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} showItemDividers={true} overlayProps={{
      width: 'small',
      height: 'initial',
      maxHeight: 'xsmall'
    }} message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>([items[0]]);
  const [filter, setFilter] = useState('');
  const [fetchedItems, setFetchedItems] = useState<typeof items>([]);
  const filteredItems = useMemo(() => fetchedItems.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase())), [fetchedItems, filter]);
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState<OverlayProps['height']>('auto');
  const onOpenChange = () => {
    setOpen(!open);
    setTimeout(() => {
      setFetchedItems([items[0], items[1]]);
      setHeight('initial');
    }, 1500);
  };
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel renderAnchor={({
      children,
      'aria-labelledby': ariaLabelledBy,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} aria-labelledby={\` \${ariaLabelledBy}\`} {...anchorProps}>
            {children}
          </Button>} placeholder="Select labels" // button text when no items are selected
    open={open} onOpenChange={onOpenChange} loading={fetchedItems.length === 0} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} showItemDividers={true} overlayProps={{
      width: 'small',
      height,
      maxHeight: 'xsmall'
    }} message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...A.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel renderAnchor={({
      children,
      'aria-labelledby': ariaLabelledBy,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} aria-labelledby={\` \${ariaLabelledBy}\`} {...anchorProps}>
            {children}
          </Button>} placeholder="Select labels" // button text when no items are selected
    open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} showItemDividers={true} message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
      <div style={{
      backgroundColor: '#9c27b0',
      height: '100vh',
      padding: '20px',
      margin: '20px',
      color: 'white'
    }}>
        This element makes the body really tall. This is to test that we do not have layout/focus issues if the Portal
        is far down the page
      </div>
    </FormControl>;
}`,...j.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const longItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items];
  const [filter, setFilter] = useState('');
  // Example A
  const [selectedA, setSelectedA] = React.useState<ItemInput | undefined>(longItems[0]);
  const filteredItemsA = longItems.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [openA, setOpenA] = useState(false);

  // Example B
  const [selectedB, setSelectedB] = React.useState<ItemInput | undefined>(longItems[0]);
  const filteredItemsB = longItems.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [openB, setOpenB] = useState(false);
  return <>
      <FormControl>
        <FormControl.Label>With height:medium</FormControl.Label>
        <SelectPanel renderAnchor={({
        children,
        ...anchorProps
      }) => <Button trailingAction={TriangleDownIcon} {...anchorProps}>
              {children ?? 'Select Labels'}
            </Button>} placeholder="Select labels" // button text when no items are selected
      open={openA} onOpenChange={setOpenA} items={filteredItemsA} selected={selectedA} onSelectedChange={setSelectedA} onFilterChange={setFilter} showItemDividers={true} overlayProps={{
        height: 'medium'
      }} message={filteredItemsA.length === 0 ? NoResultsMessage(filter) : undefined} />
      </FormControl>
      <br />
      <FormControl>
        <FormControl.Label>With height:auto, maxheight:medium</FormControl.Label>
        <SelectPanel renderAnchor={({
        children,
        ...anchorProps
      }) => <Button trailingAction={TriangleDownIcon} {...anchorProps}>
              {children ?? 'Select Labels'}
            </Button>} placeholder="Select labels" // button text when no items are selected
      open={openB} onOpenChange={setOpenB} items={filteredItemsB} selected={selectedB} onSelectedChange={setSelectedB} onFilterChange={setFilter} showItemDividers={true} overlayProps={{
        height: 'auto',
        maxHeight: 'medium'
      }} message={filteredItemsB.length === 0 ? NoResultsMessage(filter) : undefined} />
      </FormControl>
    </>;
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const items = [{
    text: 'src/SelectPanel/SelectPanel.tsx',
    id: 3
  }, {
    text: 'src/SelectPanel/SelectPanel.stories.tsx',
    id: 4
  }, {
    text: 'src/SelectPanel/SelectPanel.features.stories.tsx',
    id: 5
  }, {
    text: 'src/SelectPanel/SelectPanel.examples.stories.tsx',
    id: 6
  }];
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Long string with truncation (not reviewed for accessibility)</FormControl.Label>
      <SelectPanel title="Select files" renderAnchor={anchorProps => <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
            Select files
          </Button>} open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} overlayProps={{
      width: 'medium'
    }} renderItem={item => <ActionList.Item id={item.id?.toString()} className={styles.CustomActionListItem}>
            <ActionList.Description truncate>{item.text}</ActionList.Description>
          </ActionList.Item>} message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...R.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  // items are defined in the same scope as selection, so they could rerender and create new object references
  // We use item.id to track selection
  // Reported in: https://github.com/primer/react/issues/4315
  const items = [{
    text: 'enhancement',
    id: 1
  }, {
    text: 'bug',
    id: 2
  }, {
    text: 'good first issue',
    id: 3
  }, {
    text: 'design',
    id: 4
  }, {
    text: 'blocker',
    id: 5
  }, {
    text: 'backend',
    id: 6
  }, {
    text: 'frontend',
    id: 7
  }];
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Items in component scope</FormControl.Label>
      <SelectPanel title="Select labels" placeholder="Select labels" // button text when no items are selected
    open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...B.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = React.useState<ItemInput[]>([items[0], items[1]]);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = React.useState('');
  const [filteredItems, setFilteredItems] = React.useState<typeof items>([]);
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    if (!open) setLoading(true);
    window.setTimeout(() => {
      if (open) {
        setFilteredItems(items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase())));
        setLoading(false);
      }
    }, 2000);
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  React.useEffect(() => {
    if (!loading) {
      setFilteredItems(items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase())));
    }
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  return <>
      <Stack direction="vertical" justify="space-between" style={{
      height: 'calc(100vh - 300px)',
      width: 'fit-content'
    }}>
        <h1>Reposition panel after loading</h1>
        <SelectPanel loading={loading} title="Select labels" placeholderText="Filter Labels" open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
      </Stack>
    </>;
}`,...W.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = React.useState<ItemInput[]>([items[0], items[1]]);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = React.useState('');
  const [filteredItems, setFilteredItems] = React.useState<typeof items>([]);
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    if (!open) setLoading(true);
    window.setTimeout(() => {
      if (open) {
        setFilteredItems(items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase())));
        setLoading(false);
      }
    }, 2000);
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  React.useEffect(() => {
    if (!loading) {
      setFilteredItems(items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase())));
    }
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  return <Dialog title="SelectPanel reposition after loading inside Dialog" onClose={() => {}}>
      <Stack direction="vertical" justify="space-between" style={{
      height: 'calc(100vh - 500px)',
      width: 'fit-content'
    }}>
        <p>other content</p>
        <SelectPanel loading={loading} title="Select labels" placeholderText="Filter Labels" open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} overlayProps={{
        anchorSide: 'outside-top'
      }} message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
      </Stack>
    </Dialog>;
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel title="Select labels" placeholder="Select labels" // button text when no items are selected
    subtitle="Use labels to organize issues and pull requests" renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
            {children}
          </Button>} open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} width="medium" />
    </FormControl>;
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>([]);
  const [open, setOpen] = useState(false);
  const [renderSubset, setRenderSubset] = React.useState(true);
  const [filter, setFilter] = useState('');
  const filteredItems = lotsOfItems.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [numberOfItemsInSubset, setNumberOfItemsInSubset] = useState(50);
  const subsetOfFiltereredItemsToRender = filteredItems.slice(0, renderSubset ? numberOfItemsInSubset : NUMBER_OF_ITEMS);
  useEffect(function loadMoreItemsOnScrollEnd() {
    const scrollContainer = document.querySelector('#select-labels-panel-dialog [role="listbox"]')?.parentElement;
    const handler = (event: Event) => {
      const container = event.target as HTMLElement;
      if (container.scrollTop === container.scrollHeight - container.offsetHeight) {
        // has scrolled to bottom
        setNumberOfItemsInSubset(numberOfItemsInSubset + 50);
      }
    };

    // eslint-disable-next-line github/prefer-observers
    if (scrollContainer) scrollContainer.addEventListener('scroll', handler);
    return () => scrollContainer?.removeEventListener('scroll', handler);
  });

  /* perf measurement logic start */
  const timeBeforeOpen = useRef<number>();
  const timeAfterOpen = useRef<number>();
  const [timeTakenToOpen, setTimeTakenToOpen] = useState<number>();
  const onOpenChange = () => {
    if (!open) timeBeforeOpen.current = performance.now();
    setOpen(!open);
  };
  useEffect(function measureTimeAfterOpen() {
    if (open) {
      timeAfterOpen.current = performance.now();
      if (timeBeforeOpen.current) setTimeTakenToOpen(timeAfterOpen.current - timeBeforeOpen.current);
    }
  }, [open]);
  /* end */

  return <form>
      <FormControl>
        <FormControl.Label>Render subset of items on initial open</FormControl.Label>
        <FormControl.Caption>
          {renderSubset ? 'Loads more items on scroll' : \`Loads all \${NUMBER_OF_ITEMS} items at once\`}
        </FormControl.Caption>
        <Checkbox checked={renderSubset} onChange={() => {
        setRenderSubset(!renderSubset);
        setTimeTakenToOpen(undefined);
        setNumberOfItemsInSubset(50);
      }} />
      </FormControl>
      <p>
        Time taken (ms) to render initial {renderSubset ? 50 : NUMBER_OF_ITEMS} items:{' '}
        {timeTakenToOpen ? <Label>{timeTakenToOpen.toFixed(2)} ms</Label> : '(click "Select Labels" to open)'}
      </p>
      <p>
        Known bug: Scroll resets to top when the items change. Works well with feature flag{' '}
        <Label>primer_react_select_panel_remove_active_descendant</Label>
      </p>

      <FormControl>
        <FormControl.Label>Labels</FormControl.Label>
        <SelectPanel title="Select labels" placeholder="Select labels" subtitle="Use labels to organize issues and pull requests" renderAnchor={({
        children,
        ...anchorProps
      }) => <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
              {children}
            </Button>} open={open} onOpenChange={onOpenChange} items={subsetOfFiltereredItemsToRender} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} width="medium" height="large" message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} overlayProps={{
        id: 'select-labels-panel-dialog'
      }} />
      </FormControl>
    </form>;
}`,...N.parameters?.docs?.source}}};const St=["HeightInitialWithOverflowingItemsStory","HeightInitialWithUnderflowingItemsStory","HeightInitialWithUnderflowingItemsAfterFetch","AboveTallBody","HeightVariationsAndScroll","CustomItemRenderer","ItemsInScope","RepositionAfterLoading","SelectPanelRepositionInsideDialog","WithDefaultMessage","RenderMoreOnScroll"];export{j as AboveTallBody,R as CustomItemRenderer,F as HeightInitialWithOverflowingItemsStory,A as HeightInitialWithUnderflowingItemsAfterFetch,O as HeightInitialWithUnderflowingItemsStory,T as HeightVariationsAndScroll,B as ItemsInScope,N as RenderMoreOnScroll,W as RepositionAfterLoading,_ as SelectPanelRepositionInsideDialog,k as WithDefaultMessage,St as __namedExportsOrder,ft as default};
