import{d as I,j as r,R as A}from"./iframe-Cfz2vXeE.js";import{D as g,T as n}from"./index-Ds4HAJTU.js";import{L as l}from"./Label-ibdJir2D.js";import{R as C}from"./RelativeTime-CnUjRhzJ.js";import{L as m}from"./LabelGroup-BdjCQDeU.js";import"./preload-helper-D9Z9MdNV.js";import"./ConfirmationDialog-oJkiCKoM.js";import"./client-BWxrjV1N.js";import"./Dialog-BYWFp9hz.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Button-3sCteC9V.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./useFocusTrap-CL_Yl_fl.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./event-listener-signal-Pp6mWBoo.js";import"./index.esm-C1WN7kEu.js";import"./useFocusZone-BvuuCBlY.js";import"./focus-zone-ZDpdvBtN.js";import"./Portal-BKCn1yDJ.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./ScrollableRegion-CKacTlaY.js";import"./useOverflow-CIpObA8I.js";import"./BoxWithFallback-BKnPTtUo.js";import"./Box-BgR2Y17o.js";import"./SkeletonText-Dy-H_Tj2.js";import"./SkeletonBox-ClHTzzEx.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./model-BPbuF8Ix.js";import"./create-component-3GntSW2q.js";import"./AnchoredOverlay-DQ90Zw6u.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./Overlay-Du2pzphD.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./useFeatureFlag-paATTdb3.js";const L=e=>{const a={};for(let t=0;t<=e-1;t++)a[`colWidth${t}`]={name:`column ${t+1} width`,control:{type:"radio"},defaultValue:"grow",options:["grow","growCollapse","auto","explicit width"],table:{category:"Column widths"}},a[`explicitColWidth${t}`]={name:`column ${t+1} explicit width`,control:{type:"text"},defaultValue:"200px",if:{arg:`colWidth${t}`,eq:"explicit width"},table:{category:"Column widths"}},a[`minColWidth${t}`]={name:`column ${t+1} min width`,control:{type:"text"},table:{category:"Column widths"}},a[`maxColWidth${t}`]={name:`column ${t+1} max width`,control:{type:"text"},table:{category:"Column widths"}};return a},He={title:"Experimental/Components/DataTable",component:g},o=Date.now(),j=1e3,f=60*j,h=60*f,W=24*h,w=7*W,x=4*w,b=[{id:1,name:"codeql-dca-worker",type:"internal",updatedAt:o,securityFeatures:{dependabot:["alerts","security updates"],codeScanning:["report secrets"]}},{id:2,name:"aegir",type:"public",updatedAt:o-5*f,securityFeatures:{dependabot:["alerts"],codeScanning:["report secrets"]}},{id:3,name:"strapi",type:"public",updatedAt:o-1*h,securityFeatures:{dependabot:[],codeScanning:[]}},{id:4,name:"codeql-ci-nightlies",type:"public",updatedAt:o-6*h,securityFeatures:{dependabot:["alerts"],codeScanning:[]}},{id:5,name:"dependabot-updates",type:"public",updatedAt:o-1*W,securityFeatures:{dependabot:[],codeScanning:[]}},{id:6,name:"tsx-create-react-app",type:"public",updatedAt:o-1*w,securityFeatures:{dependabot:[],codeScanning:[]}},{id:7,name:"bootstrap",type:"public",updatedAt:o-1*x,securityFeatures:{dependabot:["alerts"],codeScanning:[]}},{id:8,name:"docker-templates",type:"public",updatedAt:o-3*x,securityFeatures:{dependabot:["alerts"],codeScanning:[]}}];function s(e){return e[0].toUpperCase()+e.slice(1)}const u=()=>{const e=I.c(3);let a,t;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=r.jsx(n.Title,{as:"h2",id:"repositories",children:"Repositories"}),t=r.jsx(n.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),e[0]=a,e[1]=t):(a=e[0],t=e[1]);let d;return e[2]===Symbol.for("react.memo_cache_sentinel")?(d=r.jsxs(n.Container,{children:[a,t,r.jsx(g,{"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:b,columns:[{header:"Repository",field:"name",rowHeader:!0},{header:"Type",field:"type",renderCell:D},{header:"Updated",field:"updatedAt",renderCell:P},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:$},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:_}]})]}),e[2]=d):d=e[2],d},c={render:e=>{const a=i=>e[`colWidth${i}`]!=="explicit width"?e[`colWidth${i}`]:e[`explicitColWidth${i}`]?e[`explicitColWidth${i}`]:"grow",t=e.align,[d,S]=A.useState(0),y=d*parseInt(e.pageSize,10),T=y+parseInt(e.pageSize,10),F=b.slice(y,T);return r.jsxs(n.Container,{children:[r.jsx(n.Title,{as:"h2",id:"repositories",children:"Repositories"}),r.jsx(n.Subtitle,{as:"p",id:"repositories-subtitle",children:"A subtitle could appear here to give extra context to the data."}),r.jsx(g,{...e,"aria-labelledby":"repositories","aria-describedby":"repositories-subtitle",data:F,columns:[{header:"Repository",field:"name",rowHeader:!0,width:a(0),minWidth:e.minColWidth0,maxWidth:e.maxColWidth0,align:t},{header:"Type",field:"type",renderCell:i=>r.jsx(l,{children:s(i.type)}),width:a(1),minWidth:e.minColWidth1,maxWidth:e.maxColWidth1,align:t},{header:"Updated",field:"updatedAt",renderCell:i=>r.jsx(C,{date:new Date(i.updatedAt)}),width:a(2),minWidth:e.minColWidth2,maxWidth:e.maxColWidth2,align:t},{header:"Dependabot",field:"securityFeatures.dependabot",renderCell:i=>i.securityFeatures.dependabot.length>0?r.jsx(m,{children:i.securityFeatures.dependabot.map(p=>r.jsx(l,{children:s(p)},p))}):null,width:a(3),minWidth:e.minColWidth3,maxWidth:e.maxColWidth3,align:t},{header:"Code scanning",field:"securityFeatures.codeScanning",renderCell:i=>i.securityFeatures.codeScanning.length>0?r.jsx(m,{children:i.securityFeatures.codeScanning.map(p=>r.jsx(l,{children:s(p)},p))}):null,width:a(4),minWidth:e.minColWidth4,maxWidth:e.maxColWidth4,align:t}]}),r.jsx(n.Pagination,{"aria-label":"Pagination for Repositories",pageSize:parseInt(e.pageSize,10),totalCount:b.length,onChange:({pageIndex:i})=>{S(i)},defaultPageIndex:parseInt(e.defaultPageIndex,10)})]})},args:{cellPadding:"normal",pageSize:5},argTypes:{align:{control:{type:"radio"},type:{name:"enum",value:["start","end"]}},"aria-describedby":{control:!1,table:{disable:!0}},"aria-labelledby":{control:!1,table:{disable:!0}},columns:{control:!1,table:{disable:!0}},data:{control:!1,table:{disable:!0}},pageSize:{control:{defaultValue:5,type:"number",min:1}},defaultPageIndex:{control:{type:"number"}},cellPadding:{control:{type:"radio"},type:{name:"enum",value:["condensed","normal","spacious"]}},...L(5)}};u.__docgenInfo={description:"",methods:[],displayName:"Default"};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <Table.Container>
    <Table.Title as="h2" id="repositories">
      Repositories
    </Table.Title>
    <Table.Subtitle as="p" id="repositories-subtitle">
      A subtitle could appear here to give extra context to the data.
    </Table.Subtitle>
    <DataTable aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={data} columns={[{
    header: 'Repository',
    field: 'name',
    rowHeader: true
  }, {
    header: 'Type',
    field: 'type',
    renderCell: row => {
      return <Label>{uppercase(row.type)}</Label>;
    }
  }, {
    header: 'Updated',
    field: 'updatedAt',
    renderCell: row => {
      return <RelativeTime date={new Date(row.updatedAt)} />;
    }
  }, {
    header: 'Dependabot',
    field: 'securityFeatures.dependabot',
    renderCell: row => {
      return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                {row.securityFeatures.dependabot.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }, {
    header: 'Code scanning',
    field: 'securityFeatures.codeScanning',
    renderCell: row => {
      return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                {row.securityFeatures.codeScanning.map(feature => {
          return <Label key={feature}>{uppercase(feature)}</Label>;
        })}
              </LabelGroup> : null;
    }
  }]} />
  </Table.Container>`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: DataTableProps<UniqueRow> & ColWidthArgTypes) => {
    const getColWidth = (colIndex: number) => {
      return args[\`colWidth\${colIndex}\`] !== 'explicit width' ? args[\`colWidth\${colIndex}\`] : args[\`explicitColWidth\${colIndex}\`] ? args[\`explicitColWidth\${colIndex}\`] : 'grow';
    };
    const align = args.align as CellAlignment;
    const [pageIndex, setPageIndex] = React.useState(0);
    const start = pageIndex * parseInt(args.pageSize, 10);
    const end = start + parseInt(args.pageSize, 10);
    const rows = data.slice(start, end);
    return <Table.Container>
        <Table.Title as="h2" id="repositories">
          Repositories
        </Table.Title>
        <Table.Subtitle as="p" id="repositories-subtitle">
          A subtitle could appear here to give extra context to the data.
        </Table.Subtitle>
        <DataTable {...args} aria-labelledby="repositories" aria-describedby="repositories-subtitle" data={rows} columns={[{
        header: 'Repository',
        field: 'name',
        rowHeader: true,
        width: getColWidth(0),
        minWidth: args.minColWidth0,
        maxWidth: args.maxColWidth0,
        align
      }, {
        header: 'Type',
        field: 'type',
        renderCell: row => {
          return <Label>{uppercase(row.type)}</Label>;
        },
        width: getColWidth(1),
        minWidth: args.minColWidth1,
        maxWidth: args.maxColWidth1,
        align
      }, {
        header: 'Updated',
        field: 'updatedAt',
        renderCell: row => {
          return <RelativeTime date={new Date(row.updatedAt)} />;
        },
        width: getColWidth(2),
        minWidth: args.minColWidth2,
        maxWidth: args.maxColWidth2,
        align
      }, {
        header: 'Dependabot',
        field: 'securityFeatures.dependabot',
        renderCell: row => {
          return row.securityFeatures.dependabot.length > 0 ? <LabelGroup>
                    {row.securityFeatures.dependabot.map(feature => {
              return <Label key={feature}>{uppercase(feature)}</Label>;
            })}
                  </LabelGroup> : null;
        },
        width: getColWidth(3),
        minWidth: args.minColWidth3,
        maxWidth: args.maxColWidth3,
        align
      }, {
        header: 'Code scanning',
        field: 'securityFeatures.codeScanning',
        renderCell: row => {
          return row.securityFeatures.codeScanning.length > 0 ? <LabelGroup>
                    {row.securityFeatures.codeScanning.map(feature => {
              return <Label key={feature}>{uppercase(feature)}</Label>;
            })}
                  </LabelGroup> : null;
        },
        width: getColWidth(4),
        minWidth: args.minColWidth4,
        maxWidth: args.maxColWidth4,
        align
      }]} />
        <Table.Pagination aria-label="Pagination for Repositories" pageSize={parseInt(args.pageSize, 10)} totalCount={data.length} onChange={({
        pageIndex
      }) => {
        setPageIndex(pageIndex);
      }} defaultPageIndex={parseInt(args.defaultPageIndex, 10)} />
      </Table.Container>;
  },
  args: {
    cellPadding: 'normal',
    // @ts-expect-error it seems like args is not being correctly inferred
    pageSize: 5
  },
  // @ts-expect-error it seems like arg types with column helpers are not working as intended
  argTypes: {
    align: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['start', 'end']
      }
    },
    'aria-describedby': {
      control: false,
      table: {
        disable: true
      }
    },
    'aria-labelledby': {
      control: false,
      table: {
        disable: true
      }
    },
    columns: {
      control: false,
      table: {
        disable: true
      }
    },
    data: {
      control: false,
      table: {
        disable: true
      }
    },
    pageSize: {
      control: {
        defaultValue: 5,
        type: 'number',
        min: 1
      }
    },
    defaultPageIndex: {
      control: {
        type: 'number'
      }
    },
    cellPadding: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['condensed', 'normal', 'spacious']
      }
    },
    ...getColumnWidthArgTypes(5)
  }
}`,...c.parameters?.docs?.source}}};function D(e){return r.jsx(l,{children:s(e.type)})}function P(e){return r.jsx(C,{date:new Date(e.updatedAt)})}function R(e){return r.jsx(l,{children:s(e)},e)}function $(e){return e.securityFeatures.dependabot.length>0?r.jsx(m,{children:e.securityFeatures.dependabot.map(R)}):null}function z(e){return r.jsx(l,{children:s(e)},e)}function _(e){return e.securityFeatures.codeScanning.length>0?r.jsx(m,{children:e.securityFeatures.codeScanning.map(z)}):null}const qe=["Default","Playground"];export{u as Default,c as Playground,qe as __namedExportsOrder,He as default};
