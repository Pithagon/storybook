import{d as E,R as F,j as i}from"./iframe-Cfz2vXeE.js";import{S as r,s as H}from"./SelectPanel2Stories.module-jAh0Fk_6.js";import{d as c}from"./mock-story-data-ZSPzoONf.js";import{A as P}from"./index-C-OhZ25x.js";import"./preload-helper-D9Z9MdNV.js";import"./index.esm-C1WN7kEu.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./Overlay-Du2pzphD.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Portal-BKCn1yDJ.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./useFeatureFlag-paATTdb3.js";import"./InputLabel-BWKIqz-Q.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./Octicon-B0A15aaM.js";import"./TextInput-hhRVe1zi.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./TextInputWrapper-A6-jRRIw.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Button-3sCteC9V.js";import"./Link-Dm7wEaum.js";import"./Checkbox-BHvnb8mU.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./Truncate-DUc3hzfC.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";const ze={title:"Deprecated/Components/SelectPanel/Playground",component:r,args:{title:"Select labels",selectionVariant:"multiple",secondaryActionVariant:"button",variant:{regular:"anchored",narrow:"full-screen"}},argTypes:{secondaryActionVariant:{name:"Secondary action variant",type:"enum",options:["button","link","checkbox"]},secondaryActionText:{name:"Secondary action text",type:"string"}}},S=t=>{const e=E.c(39);let o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=[c.issue.labelIds[0]],e[0]=o):o=e[0];const q=o,[l,b]=F.useState(q);let h;e[1]!==t.selectionVariant||e[2]!==l?(h=n=>{t.selectionVariant==="single"||t.selectionVariant==="instant"?b([n]):l.includes(n)?b(l.filter(s=>s!==n)):b([...l,n])},e[1]=t.selectionVariant,e[2]=l,e[3]=h):h=e[3];const V=h;let y;e[4]!==t?(y=()=>{b([]),t.onClearSelection()},e[4]=t,e[5]=y):y=e[5];const w=y;let f;e[6]!==t||e[7]!==l?(f=n=>{c.issue.labelIds=l,t.onSubmit(n)},e[6]=t,e[7]=l,e[8]=f):f=e[8];const T=f;let L;e[9]!==t?(L=()=>t.onCancel(),e[9]=t,e[10]=L):L=e[10];const j=L,[_,k]=F.useState(c.labels),[d,R]=F.useState("");let I;e[11]===Symbol.for("react.memo_cache_sentinel")?(I=n=>{const s=n.currentTarget.value;R(s),k(s===""?c.labels:c.labels.map(a=>a.name.toLowerCase().startsWith(s)?{priority:1,label:a}:a.name.toLowerCase().includes(s)?{priority:2,label:a}:a.description?.toLowerCase().includes(s)?{priority:3,label:a}:{priority:-1,label:a}).filter($).map(D))},e[11]=I):I=e[11];const N=I,B=M;let g;e[12]!==_||e[13]!==d?(g=d?_:c.labels.sort(B),e[12]=_,e[13]=d,e[14]=g):g=e[14];const C=g;let A;e[15]===Symbol.for("react.memo_cache_sentinel")?(A=i.jsx(r.Button,{children:"Assign label"}),e[15]=A):A=e[15];let x;e[16]===Symbol.for("react.memo_cache_sentinel")?(x=i.jsx(r.Header,{children:i.jsx(r.SearchInput,{onChange:N})}),e[16]=x):x=e[16];let m;e[17]!==C||e[18]!==V||e[19]!==d||e[20]!==l?(m=C.length===0?i.jsx(r.Message,{variant:"empty",title:`No labels found for "${d}"`,children:"Try a different search term"}):i.jsx(P,{children:C.map(n=>i.jsxs(P.Item,{onSelect:()=>V(n.id),selected:l.includes(n.id),children:[i.jsx(P.LeadingVisual,{children:i.jsx("div",{style:{backgroundColor:`#${n.color}`},className:H.Circle})}),n.name,i.jsx(P.Description,{variant:"block",children:n.description})]},n.id))}),e[17]=C,e[18]=V,e[19]=d,e[20]=l,e[21]=m):m=e[21];let p;e[22]!==t.secondaryActionText||e[23]!==t.secondaryActionVariant?(p=t.secondaryActionText?i.jsx(r.SecondaryAction,{variant:t.secondaryActionVariant,children:t.secondaryActionText}):null,e[22]=t.secondaryActionText,e[23]=t.secondaryActionVariant,e[24]=p):p=e[24];let u;e[25]!==p?(u=i.jsx(r.Footer,{children:p}),e[25]=p,e[26]=u):u=e[26];let v;return e[27]!==t.description||e[28]!==t.height||e[29]!==t.selectionVariant||e[30]!==t.title||e[31]!==t.variant||e[32]!==t.width||e[33]!==j||e[34]!==w||e[35]!==T||e[36]!==u||e[37]!==m?(v=i.jsx(i.Fragment,{children:i.jsxs(r,{title:t.title,description:t.description,variant:t.variant,selectionVariant:t.selectionVariant,onSubmit:T,onCancel:j,onClearSelection:w,width:t.width,height:t.height,children:[A,x,m,u]})}),e[27]=t.description,e[28]=t.height,e[29]=t.selectionVariant,e[30]=t.title,e[31]=t.variant,e[32]=t.width,e[33]=j,e[34]=w,e[35]=T,e[36]=u,e[37]=m,e[38]=v):v=e[38],v};S.__docgenInfo={description:"",methods:[],displayName:"Playground"};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
  const initialSelectedLabels = [data.issue.labelIds[0]]; // mock initial state: has selected labels
  const [selectedLabelIds, setSelectedLabelIds] = React.useState<string[]>(initialSelectedLabels);

  /* Selection */
  const onLabelSelect = (labelId: string) => {
    if (args.selectionVariant === 'single' || args.selectionVariant === 'instant') {
      setSelectedLabelIds([labelId]);
    } else {
      if (!selectedLabelIds.includes(labelId)) setSelectedLabelIds([...selectedLabelIds, labelId]);else setSelectedLabelIds(selectedLabelIds.filter(id => id !== labelId));
    }
  };
  const onClearSelection = () => {
    setSelectedLabelIds([]);
    args.onClearSelection(); // call storybook action
  };
  const onSubmit: SelectPanelProps['onSubmit'] = event => {
    data.issue.labelIds = selectedLabelIds; // pretending to persist changes
    args.onSubmit(event); // call storybook action
  };
  const onCancel = () => args.onCancel(); // call storybook action

  /* Filtering */
  const [filteredLabels, setFilteredLabels] = React.useState(data.labels);
  const [query, setQuery] = React.useState('');
  const onSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const query = event.currentTarget.value;
    setQuery(query);
    if (query === '') setFilteredLabels(data.labels);else {
      // Note: in the future, we should probably add a highlight for matching text
      setFilteredLabels(data.labels.map(label => {
        if (label.name.toLowerCase().startsWith(query)) return {
          priority: 1,
          label
        };else if (label.name.toLowerCase().includes(query)) return {
          priority: 2,
          label
        };else if (label.description?.toLowerCase().includes(query)) return {
          priority: 3,
          label
        };else return {
          priority: -1,
          label
        };
      }).filter(result => result.priority > 0).map(result => result.label));
    }
  };
  const sortingFn = (itemA: {
    id: string;
  }, itemB: {
    id: string;
  }) => {
    const initialSelectedIds = data.issue.labelIds;
    if (initialSelectedIds.includes(itemA.id) && initialSelectedIds.includes(itemB.id)) return 1;else if (initialSelectedIds.includes(itemA.id)) return -1;else if (initialSelectedIds.includes(itemB.id)) return 1;else return 1;
  };
  const itemsToShow = query ? filteredLabels : data.labels.sort(sortingFn);
  return <>
      <SelectPanel title={args.title} description={args.description} variant={args.variant} selectionVariant={args.selectionVariant} onSubmit={onSubmit} onCancel={onCancel} onClearSelection={onClearSelection} width={args.width} height={args.height}>
        <SelectPanel.Button>Assign label</SelectPanel.Button>

        <SelectPanel.Header>
          <SelectPanel.SearchInput onChange={onSearchInputChange} />
        </SelectPanel.Header>

        {itemsToShow.length === 0 ? <SelectPanel.Message variant="empty" title={\`No labels found for "\${query}"\`}>
            Try a different search term
          </SelectPanel.Message> : <ActionList>
            {itemsToShow.map(label => <ActionList.Item key={label.id} onSelect={() => onLabelSelect(label.id)} selected={selectedLabelIds.includes(label.id)}>
                <ActionList.LeadingVisual>
                  <div style={{
              backgroundColor: \`#\${label.color}\`
            }} className={sharedClasses.Circle} />
                </ActionList.LeadingVisual>
                {label.name}
                <ActionList.Description variant="block">{label.description}</ActionList.Description>
              </ActionList.Item>)}
          </ActionList>}

        <SelectPanel.Footer>
          {args.secondaryActionText ? <SelectPanel.SecondaryAction variant={args.secondaryActionVariant}>
              {args.secondaryActionText}
            </SelectPanel.SecondaryAction> : null}
        </SelectPanel.Footer>
      </SelectPanel>
    </>;
}`,...S.parameters?.docs?.source}}};function $(t){return t.priority>0}function D(t){return t.label}function M(t,e){const o=c.issue.labelIds;return o.includes(t.id)&&o.includes(e.id)?1:o.includes(t.id)?-1:(o.includes(e.id),1)}const Ge=["Playground"];export{S as Playground,Ge as __namedExportsOrder,ze as default};
