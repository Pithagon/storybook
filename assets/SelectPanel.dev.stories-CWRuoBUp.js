import{r as n,j as e}from"./iframe-Cfz2vXeE.js";import{_ as S}from"./index.esm-C1WN7kEu.js";import{a as f,F as x,S as y}from"./FormControl-qjqH6r5D.js";import{c as w}from"./SelectPanel.stories.module-CD2T8TnF.js";import{B as b}from"./Button-3sCteC9V.js";import{T as j}from"./Text-BbpDCwQY.js";import"./preload-helper-D9Z9MdNV.js";import"./TextInputWrapper-A6-jRRIw.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./index-C-OhZ25x.js";import"./Link-Dm7wEaum.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./invariant-Dix8OlSS.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./Truncate-DUc3hzfC.js";import"./Tooltip-BuVThTi0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./anchored-position-Cz4CQZsC.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./InputLabel-BWKIqz-Q.js";import"./TextInput-hhRVe1zi.js";import"./FilteredActionList-Lzw7hr5X.js";import"./useProvidedStateOrCreate-BEKIGSkE.js";import"./SkeletonBox-ClHTzzEx.js";import"./useFeatureFlag-paATTdb3.js";import"./Checkbox-BHvnb8mU.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./Overlay-Du2pzphD.js";import"./Portal-BKCn1yDJ.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./Token-B_OnxjPX.js";import"./Textarea-DREKwwM3.js";import"./Octicon-B0A15aaM.js";import"./LinkButton-D-EvgNXE.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./index-CEFMyGLK.js";import"./useMergedRefs-CMoMpGtu.js";import"./useMnemonics-D4gqZtvW.js";import"./AnchoredOverlay-DQ90Zw6u.js";import"./useFocusTrap-CL_Yl_fl.js";const Je={title:"Components/SelectPanel/Dev",component:f},C=o=>({variant:"empty",title:`No language found for \`${o}\``,body:"Adjust your search term to find other languages"});function i(o){return function(){return e.jsx("div",{className:w.ColorCircle,style:{backgroundColor:o,borderColor:o}})}}const F=[{leadingVisual:i("#a2eeef"),text:"enhancement",description:"New feature or request",descriptionVariant:"block",id:1},{leadingVisual:i("#d73a4a"),text:"bug",description:"Something isn't working",descriptionVariant:"block",id:2},{leadingVisual:i("#0cf478"),text:"good first issue",description:"Good for newcomers",descriptionVariant:"block",id:3},{leadingVisual:i("#ffd78e"),text:"design",id:4},{leadingVisual:i("#ff0000"),text:"blocker",id:5},{leadingVisual:i("#a4f287"),text:"backend",id:6},{leadingVisual:i("#8dc6fc"),text:"frontend",id:7}],A=()=>{const[o,s]=n.useState(F.slice(1,3)),[m,p]=n.useState(""),t=F.filter(d=>d.text?.toLowerCase().startsWith(m.toLowerCase())).sort((d,u)=>{const a=o.some(g=>g.text===d.text),h=o.some(g=>g.text===u.text);return a&&!h?-1:!a&&h?1:0}),[r,l]=n.useState(!1);return e.jsxs(x,{children:[e.jsx(x.Label,{children:"Labels"}),e.jsx(f,{title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:d,...u})=>e.jsx(b,{trailingAction:S,...u,"aria-haspopup":"dialog",children:d}),open:r,onOpenChange:l,items:t,selected:o,onSelectedChange:s,onFilterChange:p,className:"testCustomClassnameMono",message:t.length===0?C(m):void 0})]})},T=[{leadingVisual:i("#a2eeef"),text:"enhancement",id:1},{leadingVisual:i("#d73a4a"),text:"bug",id:2},{leadingVisual:i("#0cf478"),text:"good first issue",id:3},{leadingVisual:i("#ffd78e"),text:"design",id:4},{leadingVisual:i("#ff0000"),text:"blocker",id:5},{leadingVisual:i("#a4f287"),text:"backend",id:6},{leadingVisual:i("#8dc6fc"),text:"frontend",id:7}],L=({variant:o,onCancel:s,secondaryAction:m})=>{const[p,c]=n.useState(T[0]),[t,r]=n.useState(""),l=T.filter(a=>a.text.toLowerCase().startsWith(t.toLowerCase())),[d,u]=n.useState(!1);return o==="anchored"?e.jsx(f,{renderAnchor:({children:a,...h})=>e.jsx(b,{trailingAction:S,...h,children:a??"Select Labels"}),placeholder:"Select labels",open:d,onOpenChange:u,items:l,selected:p,onSelectedChange:c,onFilterChange:r,width:"medium",message:l.length===0?C(t):void 0,onCancel:s,secondaryAction:m}):e.jsx(f,{renderAnchor:({children:a,...h})=>e.jsx(b,{trailingAction:S,...h,children:a??"Select Labels"}),placeholder:"Select labels",open:d,onOpenChange:u,items:l,selected:p,onSelectedChange:c,onFilterChange:r,width:"medium",message:l.length===0?C(t):void 0,onCancel:s,secondaryAction:m,variant:"modal"})},v=({variant:o,onCancel:s,secondaryAction:m})=>{const[p,c]=n.useState(T.slice(1,3)),[t,r]=n.useState(""),l=T.filter(a=>a.text.toLowerCase().startsWith(t.toLowerCase())),[d,u]=n.useState(!1);return o==="anchored"?e.jsx(f,{title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:a,...h})=>e.jsx(b,{trailingAction:S,...h,"aria-haspopup":"dialog",children:a}),open:d,onOpenChange:u,items:l,selected:p,onSelectedChange:c,onFilterChange:r,width:"medium",message:l.length===0?C(t):void 0,onCancel:s,secondaryAction:m}):e.jsx(f,{title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:a,...h})=>e.jsx(b,{trailingAction:S,...h,"aria-haspopup":"dialog",children:a}),open:d,onOpenChange:u,items:l,selected:p,onSelectedChange:c,onFilterChange:r,width:"medium",message:l.length===0?C(t):void 0,variant:"modal",onCancel:s,secondaryAction:m})},O=()=>{const o=[{title:"Single Select Panel",component:L,variant:"anchored"},{title:"Single Select Modal",component:L,variant:"modal"},{title:"Multi Select Panel",component:v,variant:"anchored"},{title:"Multi Select Modal",component:v,variant:"modal"}],[s,m]=n.useState("button"),p=s==="button"?e.jsx(f.SecondaryActionButton,{children:"Edit labels"}):e.jsx(f.SecondaryActionLink,{href:"#",children:"Edit labels"});return e.jsxs(e.Fragment,{children:[e.jsx(j,{className:w.TextTitleMediumBold,children:"Showcase of all the SelectPanel variants"}),e.jsx("br",{}),e.jsx(j,{children:"Test the different interactions below to see how the SelectPanel behaves in different selection and anchoring modes."}),e.jsx("br",{}),e.jsx(j,{children:"The size of the screen also affects how the user interacts with the SelectPanel, so please do test on smaller screens."}),e.jsx("br",{}),e.jsx(j,{children:"Also please consider any feature flags that might affect the component."}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(j,{className:w.TextLargeBold,children:"Extra controls:"}),e.jsxs(x,{children:[e.jsx(x.Label,{children:"secondaryAction"}),e.jsxs(y,{value:s,onChange:c=>m(c.target.value),children:[e.jsx(y.Option,{value:"button",children:"Button"}),e.jsx(y.Option,{value:"link",children:"Link"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("table",{border:1,cellPadding:"32",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Variant"}),e.jsxs("th",{children:["With ",e.jsx("code",{children:"onCancel"})]}),e.jsxs("th",{children:["With ",e.jsx("code",{children:"onCancel"})," and ",e.jsx("code",{children:"secondaryAction"})]}),e.jsxs("th",{children:["No ",e.jsx("code",{children:"onCancel"})]}),e.jsxs("th",{children:["No ",e.jsx("code",{children:"onCancel"})," and ",e.jsx("code",{children:"secondaryAction"})]})]})}),e.jsx("tbody",{children:o.map(({title:c,component:t,variant:r})=>e.jsxs("tr",{children:[e.jsx("th",{children:c}),e.jsx("td",{children:e.jsx(t,{onCancel:()=>{},variant:r})}),e.jsx("td",{children:e.jsx(t,{onCancel:()=>{},secondaryAction:p,variant:r})}),e.jsx("td",{children:r==="anchored"?e.jsx(t,{variant:r}):"Not supported"}),e.jsx("td",{children:r==="anchored"?e.jsx(t,{secondaryAction:p,variant:r}):"Not supported"})]},c))})]})]})},P=500,N=Array.from({length:P},(o,s)=>({id:s,text:`Item ${s}`,description:`Description ${s}`,leadingVisual:i("#a2eeef")})),I=()=>{const[o,s]=n.useState([]),[m,p]=n.useState(""),c=N.filter(g=>g.text.toLowerCase().startsWith(m.toLowerCase())),[t,r]=n.useState(!1),l=n.useRef(),d=n.useRef(),[u,a]=n.useState(),h=()=>{l.current=performance.now(),r(!t)};return n.useEffect(()=>{t&&(d.current=performance.now(),l.current&&a(d.current-l.current))},[t]),e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Time taken to render ",P," items: ",u||'(click "Select Labels" to open)']}),e.jsxs(x,{children:[e.jsx(x.Label,{children:"Labels"}),e.jsx(f,{title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:g,...k})=>e.jsx(b,{trailingAction:S,...k,"aria-haspopup":"dialog",children:g}),open:t,onOpenChange:h,items:c,selected:o,onSelectedChange:s,onFilterChange:p,width:"medium",height:"large",message:c.length===0?C(m):void 0})]})]})};A.__docgenInfo={description:"",methods:[],displayName:"WithCss"};O.__docgenInfo={description:"",methods:[],displayName:"AllVariants"};I.__docgenInfo={description:"",methods:[],displayName:"LotsOfItems"};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text?.toLowerCase().startsWith(filter.toLowerCase()));
  // design guidelines say to sort selected items first
  const selectedItemsSortedFirst = filteredItems.sort((a, b) => {
    const aIsSelected = selected.some(selectedItem => selectedItem.text === a.text);
    const bIsSelected = selected.some(selectedItem => selectedItem.text === b.text);
    if (aIsSelected && !bIsSelected) return -1;
    if (!aIsSelected && bIsSelected) return 1;
    return 0;
  });
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel title="Select labels" placeholder="Select labels" // button text when no items are selected
    subtitle="Use labels to organize issues and pull requests" renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
            {children}
          </Button>} open={open} onOpenChange={setOpen} items={selectedItemsSortedFirst} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} className="testCustomClassnameMono" message={selectedItemsSortedFirst.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...A.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const modes: {
    title: string;
    component: React.FunctionComponent<ParamProps>;
    variant: 'anchored' | 'modal';
  }[] = [{
    title: 'Single Select Panel',
    component: SingleSelectParams,
    variant: 'anchored'
  }, {
    title: 'Single Select Modal',
    component: SingleSelectParams,
    variant: 'modal'
  }, {
    title: 'Multi Select Panel',
    component: MultiSelectParams,
    variant: 'anchored'
  }, {
    title: 'Multi Select Modal',
    component: MultiSelectParams,
    variant: 'modal'
  }];
  const [secondaryAction, setSecondaryAction] = useState('button');
  const secondaryActionElement = secondaryAction === 'button' ? <SelectPanel.SecondaryActionButton>Edit labels</SelectPanel.SecondaryActionButton> : <SelectPanel.SecondaryActionLink href="#">Edit labels</SelectPanel.SecondaryActionLink>;
  return <>
      <Text className={classes.TextTitleMediumBold}>Showcase of all the SelectPanel variants</Text>
      <br />
      <Text>
        Test the different interactions below to see how the SelectPanel behaves in different selection and anchoring
        modes.
      </Text>
      <br />
      <Text>
        The size of the screen also affects how the user interacts with the SelectPanel, so please do test on smaller
        screens.
      </Text>
      <br />
      <Text>Also please consider any feature flags that might affect the component.</Text>
      <br />
      <br />

      <Text className={classes.TextLargeBold}>Extra controls:</Text>
      <FormControl>
        <FormControl.Label>secondaryAction</FormControl.Label>
        <Select value={secondaryAction} onChange={e => setSecondaryAction(e.target.value)}>
          <Select.Option value="button">Button</Select.Option>
          <Select.Option value="link">Link</Select.Option>
        </Select>
      </FormControl>
      <br />
      <br />

      <table border={1} cellPadding="32">
        <thead>
          <tr>
            <th>Variant</th>
            <th>
              With <code>onCancel</code>
            </th>
            <th>
              With <code>onCancel</code> and <code>secondaryAction</code>
            </th>
            <th>
              No <code>onCancel</code>
            </th>
            <th>
              No <code>onCancel</code> and <code>secondaryAction</code>
            </th>
          </tr>
        </thead>
        <tbody>
          {modes.map(({
          title,
          component: Component,
          variant
        }) => <tr key={title}>
              <th>{title}</th>
              <td>
                <Component onCancel={() => {}} variant={variant} />
              </td>
              <td>
                <Component onCancel={() => {}} secondaryAction={secondaryActionElement} variant={variant} />
              </td>
              <td>{variant === 'anchored' ? <Component variant={variant} /> : 'Not supported'}</td>
              <td>
                {variant === 'anchored' ? <Component secondaryAction={secondaryActionElement} variant={variant} /> : 'Not supported'}
              </td>
            </tr>)}
        </tbody>
      </table>
    </>;
}`,...O.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>([]);
  const [filter, setFilter] = useState('');
  const filteredItems = lotsOfItems.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  const timeBeforeOpen = useRef<number>();
  const timeAfterOpen = useRef<number>();
  const [timeTakenToOpen, setTimeTakenToOpen] = useState<number>();
  const onOpenChange = () => {
    timeBeforeOpen.current = performance.now();
    setOpen(!open);
  };
  useEffect(() => {
    if (open) {
      timeAfterOpen.current = performance.now();
      if (timeBeforeOpen.current) setTimeTakenToOpen(timeAfterOpen.current - timeBeforeOpen.current);
    }
  }, [open]);
  return <>
      <p>
        Time taken to render {NUMBER_OF_ITEMS} items: {timeTakenToOpen || '(click "Select Labels" to open)'}
      </p>

      <FormControl>
        <FormControl.Label>Labels</FormControl.Label>
        <SelectPanel title="Select labels" placeholder="Select labels" subtitle="Use labels to organize issues and pull requests" renderAnchor={({
        children,
        ...anchorProps
      }) => <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
              {children}
            </Button>} open={open} onOpenChange={onOpenChange} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} width="medium" height="large" message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
      </FormControl>
    </>;
}`,...I.parameters?.docs?.source}}};const Ke=["WithCss","AllVariants","LotsOfItems"];export{O as AllVariants,I as LotsOfItems,A as WithCss,Ke as __namedExportsOrder,Je as default};
