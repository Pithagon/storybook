import{d as m,j as n}from"./iframe-Cfz2vXeE.js";import{B as t}from"./index-CEFMyGLK.js";import{L as d}from"./Link-Dm7wEaum.js";import{P as s}from"./PageLayout-9NXxh8HL.js";import"./preload-helper-D9Z9MdNV.js";import"./index.esm-C1WN7kEu.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Button-3sCteC9V.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./useMergedRefs-CMoMpGtu.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./useSlots-BdLPLn0-.js";import"./useOverflow-CIpObA8I.js";import"./BoxWithFallback-BKnPTtUo.js";import"./Box-BgR2Y17o.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,J={title:"Components/Banner",component:t},i=()=>{const e=m.c(2);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=c("onDismiss"),e[0]=r):r=e[0];let o;return e[1]===Symbol.for("react.memo_cache_sentinel")?(o=n.jsx(t,{onDismiss:r,title:"Info",description:n.jsxs(n.Fragment,{children:["GitHub users are"," ",n.jsx(d,{inline:!0,href:"#",children:"now required"})," ","to enable two-factor authentication as an additional security measure."]}),primaryAction:n.jsx(t.PrimaryAction,{children:"Button"}),secondaryAction:n.jsx(t.SecondaryAction,{children:"Button"})}),e[1]=o):o=e[1],o},a={render:({onDismiss:e,primaryAction:r,secondaryAction:o,...l})=>n.jsxs(s,{children:[n.jsx(s.Pane,{divider:"line",position:"start",children:n.jsx(t,{"aria-label":"Pane level banner",onDismiss:e?c("onDismiss"):void 0,primaryAction:r?n.jsx(t.PrimaryAction,{children:r}):null,secondaryAction:o?n.jsx(t.SecondaryAction,{children:o}):null,...l})}),n.jsx(s.Content,{children:n.jsx(t,{"aria-label":"Content level banner",onDismiss:e?c("onDismiss"):void 0,primaryAction:r?n.jsx(t.PrimaryAction,{children:r}):null,secondaryAction:o?n.jsx(t.SecondaryAction,{children:o}):null,...l})})]}),args:{title:"Banner title",description:"GitHub users are now required to enable two-factor authentication as an additional security measure.",variant:"info"},argTypes:{title:{control:"text",defaultValue:"Banner title"},hideTitle:{control:"boolean",defaultValue:!1},description:{control:"text"},onDismiss:{control:"boolean",defaultValue:!1},primaryAction:{control:"text"},secondaryAction:{control:"text"},variant:{control:"select",options:["critical","info","success","upsell","warning"]}}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Banner onDismiss={action('onDismiss')} title="Info" description={<>
          GitHub users are{' '}
          <Link inline href="#">
            now required
          </Link>{' '}
          to enable two-factor authentication as an additional security measure.
        </>} primaryAction={<Banner.PrimaryAction>Button</Banner.PrimaryAction>} secondaryAction={<Banner.SecondaryAction>Button</Banner.SecondaryAction>} />;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ({
    onDismiss,
    primaryAction,
    secondaryAction,
    ...rest
  }) => {
    return <PageLayout>
        <PageLayout.Pane divider="line" position="start">
          <Banner aria-label="Pane level banner" onDismiss={onDismiss ? action('onDismiss') : undefined} primaryAction={primaryAction ? <Banner.PrimaryAction>{primaryAction}</Banner.PrimaryAction> : null} secondaryAction={secondaryAction ? <Banner.SecondaryAction>{secondaryAction}</Banner.SecondaryAction> : null} {...rest} />
        </PageLayout.Pane>

        <PageLayout.Content>
          <Banner aria-label="Content level banner" onDismiss={onDismiss ? action('onDismiss') : undefined} primaryAction={primaryAction ? <Banner.PrimaryAction>{primaryAction}</Banner.PrimaryAction> : null} secondaryAction={secondaryAction ? <Banner.SecondaryAction>{secondaryAction}</Banner.SecondaryAction> : null} {...rest} />
        </PageLayout.Content>
      </PageLayout>;
  },
  args: {
    title: 'Banner title',
    description: 'GitHub users are now required to enable two-factor authentication as an additional security measure.',
    variant: 'info'
  },
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Banner title'
    },
    hideTitle: {
      control: 'boolean',
      defaultValue: false
    },
    description: {
      control: 'text'
    },
    onDismiss: {
      control: 'boolean',
      defaultValue: false
    },
    primaryAction: {
      control: 'text'
    },
    secondaryAction: {
      control: 'text'
    },
    variant: {
      control: 'select',
      options: ['critical', 'info', 'success', 'upsell', 'warning']
    }
  }
}`,...a.parameters?.docs?.source}}};const Q=["Default","Playground"];export{i as Default,a as Playground,Q as __namedExportsOrder,J as default};
