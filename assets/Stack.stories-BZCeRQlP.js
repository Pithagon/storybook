import{j as r}from"./iframe-Cfz2vXeE.js";import{S as o}from"./index-D3vEWZM2.js";import"./preload-helper-D9Z9MdNV.js";import"./Stack--yR6jd9X.js";const w={title:"Components/Stack",component:o},n={render:()=>r.jsxs(o,{children:[r.jsx("div",{style:{background:"var(--display-lemon-bgColor-muted)",borderRadius:"var(--borderRadius-medium)",padding:"var(--base-size-8)"},children:"First"}),r.jsx("div",{style:{background:"var(--display-olive-bgColor-muted)",borderRadius:"var(--borderRadius-medium)",padding:"var(--base-size-8)"},children:"Second"}),r.jsx("div",{style:{background:"var(--display-lime-bgColor-muted)",borderRadius:"var(--borderRadius-medium)",padding:"var(--base-size-8)"},children:"Third"})]})},i={argTypes:{gap:{control:{type:"inline-radio"},type:{name:"enum",value:["none","condensed","normal","spacious"]},table:{category:"Properties",defaultValue:{summary:"normal"}}},direction:{control:{type:"radio"},type:{name:"enum",value:["horizontal","vertical"]},table:{category:"Properties",defaultValue:{summary:"horizontal"}}},padding:{control:{type:"radio"},type:{name:"enum",value:["none","condensed","normal","spacious"]},table:{category:"Properties",defaultValue:{summary:"none"}}},align:{control:{type:"radio"},type:{name:"enum",value:["stretch","start","center","end","baseline"]},table:{category:"Properties",defaultValue:{summary:"stretch"}}},justify:{control:{type:"radio"},type:{name:"enum",value:["start","center","end","space-between","space-betweenEvenly"]},table:{category:"Properties",defaultValue:{summary:"start"}}},wrap:{control:{type:"radio"},type:{name:"enum",value:["wrap","nowrap"]},table:{category:"Properties",defaultValue:{summary:"nowrap"}}},gapNarrow:{control:{type:"inline-radio"},type:{name:"enum",value:["none","condensed","normal","spacious"]},table:{category:"Narrow properties",defaultValue:{summary:"normal"}}},directionNarrow:{control:{type:"radio"},type:{name:"enum",value:["horizontal","vertical"]},table:{category:"Narrow properties",defaultValue:{summary:"horizontal"}}},paddingNarrow:{control:{type:"radio"},type:{name:"enum",value:["none","condensed","normal","spacious"]},table:{category:"Narrow properties",defaultValue:{summary:"none"}}},alignNarrow:{control:{type:"radio"},type:{name:"enum",value:["stretch","start","center","end","baseline"]},table:{category:"Narrow properties",defaultValue:{summary:"stretch"}}},justifyNarrow:{control:{type:"radio"},type:{name:"enum",value:["start","center","end","space-between","space-betweenEvenly"]},table:{category:"Narrow properties",defaultValue:{summary:"start"}}},wrapNarrow:{control:{type:"radio"},type:{name:"enum",value:["wrap","nowrap"]},table:{category:"Narrow properties",defaultValue:{summary:"nowrap"}}},gapRegular:{control:{type:"inline-radio"},type:{name:"enum",value:["none","condensed","normal","spacious"]},table:{category:"Regular properties",defaultValue:{summary:"normal"}}},directionRegular:{control:{type:"radio"},type:{name:"enum",value:["horizontal","vertical"]},table:{category:"Regular properties",defaultValue:{summary:"horizontal"}}},paddingRegular:{control:{type:"radio"},type:{name:"enum",value:["none","condensed","normal","spacious"]},table:{category:"Regular properties",defaultValue:{summary:"none"}}},alignRegular:{control:{type:"radio"},type:{name:"enum",value:["stretch","start","center","end","baseline"]},table:{category:"Regular properties",defaultValue:{summary:"stretch"}}},justifyRegular:{control:{type:"radio"},type:{name:"enum",value:["start","center","end","space-between","space-betweenEvenly"]},table:{category:"Regular properties",defaultValue:{summary:"start"}}},wrapRegular:{control:{type:"radio"},type:{name:"enum",value:["wrap","nowrap"]},table:{category:"Regular properties",defaultValue:{summary:"nowrap"}}},gapWide:{control:{type:"inline-radio"},type:{name:"enum",value:["none","condensed","normal","spacious"]},table:{category:"Wide properties",defaultValue:{summary:"normal"}}},directionWide:{control:{type:"radio"},type:{name:"enum",value:["horizontal","vertical"]},table:{category:"Wide properties",defaultValue:{summary:"horizontal"}}},paddingWide:{control:{type:"radio"},type:{name:"enum",value:["none","condensed","normal","spacious"]},table:{category:"Wide properties",defaultValue:{summary:"none"}}},alignWide:{control:{type:"radio"},type:{name:"enum",value:["stretch","start","center","end","baseline"]},table:{category:"Wide properties",defaultValue:{summary:"stretch"}}},justifyWide:{control:{type:"radio"},type:{name:"enum",value:["start","center","end","space-between","space-betweenEvenly"]},table:{category:"Wide properties",defaultValue:{summary:"start"}}},wrapWide:{control:{type:"radio"},type:{name:"enum",value:["wrap","nowrap"]},table:{category:"Wide properties",defaultValue:{summary:"nowrap"}}}},render:e=>r.jsxs(o,{...e,gap:t(e.gap,{narrow:e.gapNarrow,regular:e.gapRegular,wide:e.gapWide}),direction:t(e.direction,{narrow:e.directionNarrow,regular:e.directionRegular,wide:e.directionWide}),padding:t(e.padding,{narrow:e.paddingNarrow,regular:e.paddingRegular,wide:e.paddingWide}),align:t(e.align,{narrow:e.alignNarrow,regular:e.alignRegular,wide:e.alignWide}),justify:t(e.justify,{narrow:e.justifyNarrow,regular:e.justifyRegular,wide:e.justifyWide}),wrap:t(e.wrap,{narrow:e.wrapNarrow,regular:e.wrapRegular,wide:e.wrapWide}),className:"demoStack",children:[r.jsx("div",{style:{background:"var(--display-lemon-bgColor-muted)",borderRadius:"var(--borderRadius-medium)",padding:"var(--base-size-8)"},children:"First"}),r.jsx("div",{style:{background:"var(--display-olive-bgColor-muted)",borderRadius:"var(--borderRadius-medium)",padding:"var(--base-size-8)"},children:"Second"}),r.jsx("div",{style:{background:"var(--display-lime-bgColor-muted)",borderRadius:"var(--borderRadius-medium)",padding:"var(--base-size-8)"},children:"Third"})]})};function a(e){return{control:{type:"boolean"},table:{category:e,defaultValue:{summary:"true"}}}}const d={args:{grow:!0,growNarrow:!0,growRegular:!0,growWide:!0,shrink:!0,shrinkNarrow:!0,shrinkRegular:!0,shrinkWide:!0},argTypes:{grow:a("Properties"),growNarrow:a("Narrow properties"),growRegular:a("Regular properties"),growWide:a("Wide properties"),shrink:a("Properties"),shrinkNarrow:a("Narrow properties"),shrinkRegular:a("Regular properties"),shrinkWide:a("Wide properties")},render:e=>r.jsxs(o,{gap:"normal",direction:"horizontal",align:"center",justify:"space-between",wrap:"nowrap",children:[r.jsx(o.Item,{grow:t(e.grow,{narrow:e.growNarrow,regular:e.growRegular,wide:e.growWide}),shrink:t(e.shrink,{narrow:e.shrinkNarrow,regular:e.shrinkRegular,wide:e.shrinkWide}),children:r.jsx("div",{style:{background:"var(--display-indigo-bgColor-muted)",borderRadius:"var(--borderRadius-medium)",padding:"var(--base-size-8)"},children:"Adjust this item"})}),r.jsx(o.Item,{children:r.jsx("div",{style:{background:"var(--display-purple-bgColor-muted)",borderRadius:"var(--borderRadius-medium)",padding:"var(--base-size-8)"},children:"Fixed width"})}),r.jsx(o.Item,{children:r.jsx("div",{style:{background:"var(--display-purple-bgColor-muted)",borderRadius:"var(--borderRadius-medium)",padding:"var(--base-size-8)"},children:"Fixed width"})})]})},s=["narrow","regular","wide"];function t(e,l){return s.some(u=>l[u])?l:e}n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
      <div style={{
      background: 'var(--display-lemon-bgColor-muted)',
      borderRadius: 'var(--borderRadius-medium)',
      padding: 'var(--base-size-8)'
    }}>
        First
      </div>
      <div style={{
      background: 'var(--display-olive-bgColor-muted)',
      borderRadius: 'var(--borderRadius-medium)',
      padding: 'var(--base-size-8)'
    }}>
        Second
      </div>
      <div style={{
      background: 'var(--display-lime-bgColor-muted)',
      borderRadius: 'var(--borderRadius-medium)',
      padding: 'var(--base-size-8)'
    }}>
        Third
      </div>
    </Stack>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  argTypes: {
    gap: {
      control: {
        type: 'inline-radio'
      },
      type: {
        name: 'enum',
        value: ['none', 'condensed', 'normal', 'spacious']
      },
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'normal'
        }
      }
    },
    direction: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['horizontal', 'vertical']
      },
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'horizontal'
        }
      }
    },
    padding: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['none', 'condensed', 'normal', 'spacious']
      },
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'none'
        }
      }
    },
    align: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['stretch', 'start', 'center', 'end', 'baseline']
      },
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'stretch'
        }
      }
    },
    justify: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['start', 'center', 'end', 'space-between', 'space-betweenEvenly']
      },
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'start'
        }
      }
    },
    wrap: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['wrap', 'nowrap']
      },
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'nowrap'
        }
      }
    },
    gapNarrow: {
      control: {
        type: 'inline-radio'
      },
      type: {
        name: 'enum',
        value: ['none', 'condensed', 'normal', 'spacious']
      },
      table: {
        category: 'Narrow properties',
        defaultValue: {
          summary: 'normal'
        }
      }
    },
    directionNarrow: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['horizontal', 'vertical']
      },
      table: {
        category: 'Narrow properties',
        defaultValue: {
          summary: 'horizontal'
        }
      }
    },
    paddingNarrow: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['none', 'condensed', 'normal', 'spacious']
      },
      table: {
        category: 'Narrow properties',
        defaultValue: {
          summary: 'none'
        }
      }
    },
    alignNarrow: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['stretch', 'start', 'center', 'end', 'baseline']
      },
      table: {
        category: 'Narrow properties',
        defaultValue: {
          summary: 'stretch'
        }
      }
    },
    justifyNarrow: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['start', 'center', 'end', 'space-between', 'space-betweenEvenly']
      },
      table: {
        category: 'Narrow properties',
        defaultValue: {
          summary: 'start'
        }
      }
    },
    wrapNarrow: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['wrap', 'nowrap']
      },
      table: {
        category: 'Narrow properties',
        defaultValue: {
          summary: 'nowrap'
        }
      }
    },
    gapRegular: {
      control: {
        type: 'inline-radio'
      },
      type: {
        name: 'enum',
        value: ['none', 'condensed', 'normal', 'spacious']
      },
      table: {
        category: 'Regular properties',
        defaultValue: {
          summary: 'normal'
        }
      }
    },
    directionRegular: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['horizontal', 'vertical']
      },
      table: {
        category: 'Regular properties',
        defaultValue: {
          summary: 'horizontal'
        }
      }
    },
    paddingRegular: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['none', 'condensed', 'normal', 'spacious']
      },
      table: {
        category: 'Regular properties',
        defaultValue: {
          summary: 'none'
        }
      }
    },
    alignRegular: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['stretch', 'start', 'center', 'end', 'baseline']
      },
      table: {
        category: 'Regular properties',
        defaultValue: {
          summary: 'stretch'
        }
      }
    },
    justifyRegular: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['start', 'center', 'end', 'space-between', 'space-betweenEvenly']
      },
      table: {
        category: 'Regular properties',
        defaultValue: {
          summary: 'start'
        }
      }
    },
    wrapRegular: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['wrap', 'nowrap']
      },
      table: {
        category: 'Regular properties',
        defaultValue: {
          summary: 'nowrap'
        }
      }
    },
    gapWide: {
      control: {
        type: 'inline-radio'
      },
      type: {
        name: 'enum',
        value: ['none', 'condensed', 'normal', 'spacious']
      },
      table: {
        category: 'Wide properties',
        defaultValue: {
          summary: 'normal'
        }
      }
    },
    directionWide: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['horizontal', 'vertical']
      },
      table: {
        category: 'Wide properties',
        defaultValue: {
          summary: 'horizontal'
        }
      }
    },
    paddingWide: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['none', 'condensed', 'normal', 'spacious']
      },
      table: {
        category: 'Wide properties',
        defaultValue: {
          summary: 'none'
        }
      }
    },
    alignWide: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['stretch', 'start', 'center', 'end', 'baseline']
      },
      table: {
        category: 'Wide properties',
        defaultValue: {
          summary: 'stretch'
        }
      }
    },
    justifyWide: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['start', 'center', 'end', 'space-between', 'space-betweenEvenly']
      },
      table: {
        category: 'Wide properties',
        defaultValue: {
          summary: 'start'
        }
      }
    },
    wrapWide: {
      control: {
        type: 'radio'
      },
      type: {
        name: 'enum',
        value: ['wrap', 'nowrap']
      },
      table: {
        category: 'Wide properties',
        defaultValue: {
          summary: 'nowrap'
        }
      }
    }
  },
  render: args => {
    return <Stack {...args} gap={getControlValues(args.gap, {
      narrow: args.gapNarrow,
      regular: args.gapRegular,
      wide: args.gapWide
    })} direction={getControlValues(args.direction, {
      narrow: args.directionNarrow,
      regular: args.directionRegular,
      wide: args.directionWide
    })} padding={getControlValues(args.padding, {
      narrow: args.paddingNarrow,
      regular: args.paddingRegular,
      wide: args.paddingWide
    })} align={getControlValues(args.align, {
      narrow: args.alignNarrow,
      regular: args.alignRegular,
      wide: args.alignWide
    })} justify={getControlValues(args.justify, {
      narrow: args.justifyNarrow,
      regular: args.justifyRegular,
      wide: args.justifyWide
    })} wrap={getControlValues(args.wrap, {
      narrow: args.wrapNarrow,
      regular: args.wrapRegular,
      wide: args.wrapWide
    })} className="demoStack">
        <div style={{
        background: 'var(--display-lemon-bgColor-muted)',
        borderRadius: 'var(--borderRadius-medium)',
        padding: 'var(--base-size-8)'
      }}>
          First
        </div>
        <div style={{
        background: 'var(--display-olive-bgColor-muted)',
        borderRadius: 'var(--borderRadius-medium)',
        padding: 'var(--base-size-8)'
      }}>
          Second
        </div>
        <div style={{
        background: 'var(--display-lime-bgColor-muted)',
        borderRadius: 'var(--borderRadius-medium)',
        padding: 'var(--base-size-8)'
      }}>
          Third
        </div>
      </Stack>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    grow: true,
    growNarrow: true,
    growRegular: true,
    growWide: true,
    shrink: true,
    shrinkNarrow: true,
    shrinkRegular: true,
    shrinkWide: true
  },
  argTypes: {
    grow: createArgMetaData('Properties'),
    growNarrow: createArgMetaData('Narrow properties'),
    growRegular: createArgMetaData('Regular properties'),
    growWide: createArgMetaData('Wide properties'),
    shrink: createArgMetaData('Properties'),
    shrinkNarrow: createArgMetaData('Narrow properties'),
    shrinkRegular: createArgMetaData('Regular properties'),
    shrinkWide: createArgMetaData('Wide properties')
  },
  render: args => {
    return <Stack gap="normal" direction="horizontal" align="center" justify="space-between" wrap="nowrap">
        <Stack.Item grow={getControlValues(args.grow, {
        narrow: args.growNarrow,
        regular: args.growRegular,
        wide: args.growWide
      })} shrink={getControlValues(args.shrink, {
        narrow: args.shrinkNarrow,
        regular: args.shrinkRegular,
        wide: args.shrinkWide
      })}>
          <div style={{
          background: 'var(--display-indigo-bgColor-muted)',
          borderRadius: 'var(--borderRadius-medium)',
          padding: 'var(--base-size-8)'
        }}>
            Adjust this item
          </div>
        </Stack.Item>
        <Stack.Item>
          <div style={{
          background: 'var(--display-purple-bgColor-muted)',
          borderRadius: 'var(--borderRadius-medium)',
          padding: 'var(--base-size-8)'
        }}>
            Fixed width
          </div>
        </Stack.Item>
        <Stack.Item>
          <div style={{
          background: 'var(--display-purple-bgColor-muted)',
          borderRadius: 'var(--borderRadius-medium)',
          padding: 'var(--base-size-8)'
        }}>
            Fixed width
          </div>
        </Stack.Item>
      </Stack>;
  }
}`,...d.parameters?.docs?.source}}};const b=["Default","Playground","StackItemPlayground"];export{n as Default,i as Playground,d as StackItemPlayground,b as __namedExportsOrder,w as default};
