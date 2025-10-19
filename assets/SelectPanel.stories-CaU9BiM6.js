import{d as R,R as v,j as n}from"./iframe-Cfz2vXeE.js";import{S as l,s as k}from"./SelectPanel2Stories.module-jAh0Fk_6.js";import{d as o}from"./mock-story-data-ZSPzoONf.js";import{A}from"./index-C-OhZ25x.js";import"./preload-helper-D9Z9MdNV.js";import"./index.esm-C1WN7kEu.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./Overlay-Du2pzphD.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Portal-BKCn1yDJ.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./useFeatureFlag-paATTdb3.js";import"./InputLabel-BWKIqz-Q.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./Octicon-B0A15aaM.js";import"./TextInput-hhRVe1zi.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./TextInputWrapper-A6-jRRIw.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Button-3sCteC9V.js";import"./Link-Dm7wEaum.js";import"./Checkbox-BHvnb8mU.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./Truncate-DUc3hzfC.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";const Ve={title:"Deprecated/Components/SelectPanel",component:l},m=()=>{const e=R.c(21),d=o.issue.labelIds,[t,p]=v.useState(d);let u;e[0]!==t?(u=i=>{t.includes(i)?p(t.filter(s=>s!==i)):p([...t,i])},e[0]=t,e[1]=u):u=e[1];const P=u;let b;e[2]===Symbol.for("react.memo_cache_sentinel")?(b=()=>{p([])},e[2]=b):b=e[2];const q=b;let S;e[3]!==t?(S=()=>{o.issue.labelIds=t},e[3]=t,e[4]=S):S=e[4];const _=S;let f;e[5]===Symbol.for("react.memo_cache_sentinel")?(f=()=>{p(d)},e[5]=f):f=e[5];const w=f,[j,F]=v.useState(o.labels),[a,T]=v.useState("");let L;e[6]===Symbol.for("react.memo_cache_sentinel")?(L=i=>{const s=i.currentTarget.value;T(s),F(s===""?o.labels:o.labels.map(r=>r.name.toLowerCase().startsWith(s)?{priority:1,label:r}:r.name.toLowerCase().includes(s)?{priority:2,label:r}:r.description?.toLowerCase().includes(s)?{priority:3,label:r}:{priority:-1,label:r}).filter(B).map(H))},e[6]=L):L=e[6];const D=L,E=N;let h;e[7]!==j||e[8]!==a?(h=a?j:o.labels.sort(E),e[7]=j,e[8]=a,e[9]=h):h=e[9];const y=h;let I;e[10]===Symbol.for("react.memo_cache_sentinel")?(I=n.jsx(l.Button,{children:"Assign label"}),e[10]=I):I=e[10];let g;e[11]===Symbol.for("react.memo_cache_sentinel")?(g=n.jsx(l.Header,{children:n.jsx(l.SearchInput,{"aria-label":"Search",onChange:D})}),e[11]=g):g=e[11];let c;e[12]!==y||e[13]!==P||e[14]!==a||e[15]!==t?(c=y.length===0?n.jsx(l.Message,{variant:"empty",title:`No labels found for "${a}"`,children:"Try a different search term"}):n.jsx(A,{children:y.map(i=>n.jsxs(A.Item,{onSelect:()=>P(i.id),selected:t.includes(i.id),children:[n.jsx(A.LeadingVisual,{children:n.jsx("div",{className:k.Circle,style:{backgroundColor:`#${i.color}`}})}),i.name,n.jsx(A.Description,{variant:"block",children:i.description})]},i.id))}),e[12]=y,e[13]=P,e[14]=a,e[15]=t,e[16]=c):c=e[16];let C;e[17]===Symbol.for("react.memo_cache_sentinel")?(C=n.jsx(l.Footer,{children:n.jsx(l.SecondaryAction,{variant:"button",children:"Edit labels"})}),e[17]=C):C=e[17];let x;return e[18]!==_||e[19]!==c?(x=n.jsx(n.Fragment,{children:n.jsxs(l,{title:"Select labels",onSubmit:_,onCancel:w,onClearSelection:q,children:[I,g,c,C]})}),e[18]=_,e[19]=c,e[20]=x):x=e[20],x};m.__docgenInfo={description:"",methods:[],displayName:"Default"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const initialSelectedLabels = data.issue.labelIds; // mock initial state: has selected labels
  const [selectedLabelIds, setSelectedLabelIds] = React.useState<string[]>(initialSelectedLabels);

  /* Selection */
  const onLabelSelect = (labelId: string) => {
    if (!selectedLabelIds.includes(labelId)) setSelectedLabelIds([...selectedLabelIds, labelId]);else setSelectedLabelIds(selectedLabelIds.filter(id => id !== labelId));
  };
  const onClearSelection = () => {
    setSelectedLabelIds([]);
  };
  const onSubmit = () => {
    data.issue.labelIds = selectedLabelIds; // pretending to persist changes
  };
  const onCancel = () => {
    setSelectedLabelIds(initialSelectedLabels);
  };

  /* Filtering */
  const [filteredLabels, setFilteredLabels] = React.useState(data.labels);
  const [query, setQuery] = React.useState('');
  const onSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const query = event.currentTarget.value;
    setQuery(query);
    if (query === '') setFilteredLabels(data.labels);else {
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
      <SelectPanel title="Select labels" onSubmit={onSubmit} onCancel={onCancel} onClearSelection={onClearSelection}>
        <SelectPanel.Button>Assign label</SelectPanel.Button>

        <SelectPanel.Header>
          <SelectPanel.SearchInput aria-label="Search" onChange={onSearchInputChange} />
        </SelectPanel.Header>

        {itemsToShow.length === 0 ? <SelectPanel.Message variant="empty" title={\`No labels found for "\${query}"\`}>
            Try a different search term
          </SelectPanel.Message> : <ActionList>
            {itemsToShow.map(label => <ActionList.Item key={label.id} onSelect={() => onLabelSelect(label.id)} selected={selectedLabelIds.includes(label.id)}>
                <ActionList.LeadingVisual>
                  <div className={sharedClasses.Circle} style={{
              backgroundColor: \`#\${label.color}\`
            }} />
                </ActionList.LeadingVisual>
                {label.name}
                <ActionList.Description variant="block">{label.description}</ActionList.Description>
              </ActionList.Item>)}
          </ActionList>}

        <SelectPanel.Footer>
          <SelectPanel.SecondaryAction variant="button">Edit labels</SelectPanel.SecondaryAction>
        </SelectPanel.Footer>
      </SelectPanel>
    </>;
}`,...m.parameters?.docs?.source}}};function B(e){return e.priority>0}function H(e){return e.label}function N(e,d){const t=o.issue.labelIds;return t.includes(e.id)&&t.includes(d.id)?1:t.includes(e.id)?-1:(t.includes(d.id),1)}const We=["Default"];export{m as Default,We as __namedExportsOrder,Ve as default};
