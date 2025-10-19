import{u as N,r as o,j as r,c as M}from"./iframe-Cfz2vXeE.js";import{u as Z}from"./useFocusTrap-CL_Yl_fl.js";import{u as K}from"./useFocusZone-BvuuCBlY.js";import{u as X}from"./useResponsiveValue-Cmf8jyBD.js";import{I as U}from"./IconButton-qXcIkMuV.js";import{X as _}from"./index.esm-C1WN7kEu.js";import{u as G}from"./useProvidedRefOrCreate-Pg3blKRP.js";import{u as J}from"./useRenderForcingRef-B3HiJhUh.js";import{u as Q}from"./useAnchoredPosition-IlJWxGCn.js";import{O as Y}from"./Overlay-Du2pzphD.js";const $="prc-AnchoredOverlay-ResponsiveCloseButtonContainer-NL5kN",ee="prc-AnchoredOverlay-ResponsiveCloseButton-Rr-c2",v={ResponsiveCloseButtonContainer:$,ResponsiveCloseButton:ee},ne={regular:"anchored",narrow:"anchored"},ae={},f=({renderAnchor:m,anchorRef:g,anchorId:w,children:k,open:e,onOpen:l,onClose:a,height:T,width:R,overlayProps:b,focusTrapSettings:q,focusZoneSettings:A,side:P=b?.anchorSide||"outside-bottom",align:O="start",alignmentOffset:B,anchorOffset:S,className:C,pinPosition:E,variant:c=ne,preventOverflow:D=!0,onPositionChange:h,displayCloseButton:H=!0,closeButtonProps:s=ae})=>{const u=G(g),[t,d]=J(),x=N(w),z=o.useCallback(()=>a?.("click-outside"),[a]),j=o.useCallback(()=>a?.("escape"),[a]),I=o.useCallback(n=>{n.defaultPrevented||!e&&["ArrowDown","ArrowUp"," ","Enter"].includes(n.key)&&(l?.("anchor-key-press",n),n.preventDefault())},[e,l]),L=o.useCallback(n=>{n.defaultPrevented||n.button!==0||(e?a?.("anchor-click"):l?.("anchor-click"))},[e,l,a]),V=n=>{h&&n&&h({position:n})},{position:i}=Q({anchorElementRef:u,floatingElementRef:t,pinPosition:E,side:P,align:O,alignmentOffset:B,anchorOffset:S,onPositionChange:V},[t.current]);o.useEffect(()=>{!e&&t.current&&d(null)},[e,t,d]),K({containerRef:t,disabled:!e||!i,...A}),Z({containerRef:t,disabled:!e||!i,...q});const p=X(c,"anchored"),F=a&&c.narrow==="fullscreen"&&H,y=s["aria-labelledby"],W=s["aria-label"];return r.jsxs(r.Fragment,{children:[m&&m({ref:u,id:x,"aria-haspopup":"true","aria-expanded":e,tabIndex:0,onClick:L,onKeyDown:I}),e?r.jsxs(Y,{returnFocusRef:u,onClickOutside:z,ignoreClickRefs:[u],onEscape:j,ref:d,role:"none",visibility:i?"visible":"hidden",height:T,width:R,top:p==="anchored"?i?.top||0:void 0,left:p==="anchored"?i?.left||0:void 0,responsiveVariant:c.narrow==="fullscreen"?"fullscreen":void 0,"data-variant":p,anchorSide:i?.anchorSide,className:C,preventOverflow:D,...b,children:[F?r.jsx("div",{className:v.ResponsiveCloseButtonContainer,children:r.jsx(U,{...s,type:"button",variant:"invisible",icon:_,...y?{"aria-labelledby":y,"aria-label":void 0}:{"aria-label":W??"Close","aria-labelledby":void 0},className:M(v.ResponsiveCloseButton,s.className),onClick:()=>{a("close")}})}):null,k]}):null]})};f.displayName="AnchoredOverlay";f.__docgenInfo={description:"An `AnchoredOverlay` provides an anchor that will open a floating overlay positioned relative to the anchor.\nThe overlay can be opened and navigated using keyboard or mouse.",methods:[],displayName:"AnchoredOverlay",props:{open:{required:!0,tsType:{name:"boolean"},description:"Determines whether the overlay portion of the component should be shown or not"},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(gesture: 'anchor-click' | 'anchor-key-press', event?: React.KeyboardEvent<HTMLElement>) => unknown",signature:{arguments:[{type:{name:"union",raw:"'anchor-click' | 'anchor-key-press'",elements:[{name:"literal",value:"'anchor-click'"},{name:"literal",value:"'anchor-key-press'"}]},name:"gesture"},{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"unknown"}}},description:'A callback which is called whenever the overlay is currently closed and an "open gesture" is detected.'},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(gesture: 'anchor-click' | 'click-outside' | 'escape' | 'close') => unknown",signature:{arguments:[{type:{name:"union",raw:"'anchor-click' | 'click-outside' | 'escape' | 'close'",elements:[{name:"literal",value:"'anchor-click'"},{name:"literal",value:"'click-outside'"},{name:"literal",value:"'escape'"},{name:"literal",value:"'close'"}]},name:"gesture"}],return:{name:"unknown"}}},description:'A callback which is called whenever the overlay is currently open and a "close gesture" is detected.'},overlayProps:{required:!1,tsType:{name:"Partial",elements:[{name:"ComponentPropsWithRef",elements:[{name:"Overlay"}],raw:"ComponentPropsWithRef<typeof Overlay>"}],raw:"Partial<OverlayProps>"},description:"Props to be spread on the internal `Overlay` component."},focusTrapSettings:{required:!1,tsType:{name:"Partial",elements:[{name:"FocusTrapHookSettings"}],raw:"Partial<FocusTrapHookSettings>"},description:"Settings to apply to the Focus Zone on the internal `Overlay` component."},focusZoneSettings:{required:!1,tsType:{name:"Partial",elements:[{name:"FocusZoneHookSettings"}],raw:"Partial<FocusZoneHookSettings>"},description:"Settings to apply to the Focus Zone on the internal `Overlay` component."},className:{required:!1,tsType:{name:"string"},description:"Optional className to be added to the overlay component."},preventOverflow:{required:!1,tsType:{name:"boolean"},description:"preventOverflow Optional. The Overlay width will be adjusted responsively if there is not enough space to display the Overlay.\nIf `preventOverflow` is `true`, the width of the `Overlay` will not be adjusted.",defaultValue:{value:"true",computed:!1}},pinPosition:{required:!1,tsType:{name:"boolean"},description:"If true, the overlay will attempt to prevent position shifting when sitting at the top of the anchor."},variant:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  narrow?: TNarrow // Applies when viewport is narrow
  regular?: TRegular // Applies when viewports is regular
  wide?: TWide // Applies when viewports is wide
}`,signature:{properties:[{key:"narrow",value:{name:"union",raw:"'anchored' | 'fullscreen'",elements:[{name:"literal",value:"'anchored'"},{name:"literal",value:"'fullscreen'"}],required:!1}},{key:"regular",value:{name:"literal",value:"'anchored'",required:!1}},{key:"wide",value:{name:"TRegular",required:!1}}]}},description:"Optional prop to set variant for narrow screen sizes",defaultValue:{value:`{
  regular: 'anchored',
  narrow: 'anchored',
}`,computed:!1}},onPositionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"({position}: {position: AnchorPosition}) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{position: AnchorPosition}",signature:{properties:[{key:"position",value:{name:"AnchorPosition",required:!0}}]}},name:""}],return:{name:"void"}}},description:"An override to the internal position that will be used to position the overlay."},displayCloseButton:{required:!1,tsType:{name:"boolean"},description:"Optional prop to display a close button in the overlay.",defaultValue:{value:"true",computed:!1}},closeButtonProps:{required:!1,tsType:{name:"Partial",elements:[{name:"intersection",raw:`ButtonA11yProps & {
  icon: React.ElementType
  unsafeDisableTooltip?: boolean
  description?: string
  tooltipDirection?: TooltipDirection
  /** @deprecated Use \`keybindingHint\` instead. */
  keyshortcuts?: string
  keybindingHint?: string
} & Omit<ButtonBaseProps, 'aria-label' | 'aria-labelledby'>`,elements:[{name:"union",raw:`| {'aria-label': string; 'aria-labelledby'?: undefined}
| {'aria-label'?: undefined; 'aria-labelledby': string}`,elements:[{name:"signature",type:"object",raw:"{'aria-label': string; 'aria-labelledby'?: undefined}",signature:{properties:[{key:"aria-label",value:{name:"string",required:!0}},{key:"aria-labelledby",value:{name:"undefined",required:!1}}]}},{name:"signature",type:"object",raw:"{'aria-label'?: undefined; 'aria-labelledby': string}",signature:{properties:[{key:"aria-label",value:{name:"undefined",required:!1}},{key:"aria-labelledby",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  icon: React.ElementType
  unsafeDisableTooltip?: boolean
  description?: string
  tooltipDirection?: TooltipDirection
  /** @deprecated Use \`keybindingHint\` instead. */
  keyshortcuts?: string
  keybindingHint?: string
}`,signature:{properties:[{key:"icon",value:{name:"ReactElementType",raw:"React.ElementType",required:!0}},{key:"unsafeDisableTooltip",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w'",elements:[{name:"literal",value:"'nw'"},{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"}],required:!1}},{key:"keyshortcuts",value:{name:"string",required:!1},description:"@deprecated Use `keybindingHint` instead."},{key:"keybindingHint",value:{name:"string",required:!1}}]}},{name:"Omit",elements:[{name:"intersection",raw:`{
  /**
   * Determines the styles on a button, one of 'default' | 'primary' | 'invisible' | 'danger' | 'link'
   */
  variant?: VariantType
  /**
   * Size of the button and fontSize of the text in the button
   */
  size?: Size
  /**
   * Disables a button. Avoid disabling buttons because it will make them inaccessible to users
   * who rely on keyboard navigation. Buttons that are disabled cannot be clicked, selected, or navigated through.
   */
  disabled?: boolean
  /**
   * Allow a button to fill its container horizontally
   */
  block?: boolean
  /**
   * Specify whether the button is in a loading state
   */
  loading?: boolean
  /**
   * The content to announce to screen readers when loading
   */
  loadingAnnouncement?: string
  /*
   * Whether the button looks visually disabled, but can still accept all the same
   * interactions as an enabled button.
   */
  inactive?: boolean
  /**
   * Whether the button label should wrap to multiple lines if it is longer than the button width
   */
  labelWrap?: boolean
} & SxProp &
  React.ButtonHTMLAttributes<HTMLButtonElement>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Determines the styles on a button, one of 'default' | 'primary' | 'invisible' | 'danger' | 'link'
   */
  variant?: VariantType
  /**
   * Size of the button and fontSize of the text in the button
   */
  size?: Size
  /**
   * Disables a button. Avoid disabling buttons because it will make them inaccessible to users
   * who rely on keyboard navigation. Buttons that are disabled cannot be clicked, selected, or navigated through.
   */
  disabled?: boolean
  /**
   * Allow a button to fill its container horizontally
   */
  block?: boolean
  /**
   * Specify whether the button is in a loading state
   */
  loading?: boolean
  /**
   * The content to announce to screen readers when loading
   */
  loadingAnnouncement?: string
  /*
   * Whether the button looks visually disabled, but can still accept all the same
   * interactions as an enabled button.
   */
  inactive?: boolean
  /**
   * Whether the button label should wrap to multiple lines if it is longer than the button width
   */
  labelWrap?: boolean
}`,signature:{properties:[{key:"variant",value:{name:"union",raw:"'default' | 'primary' | 'invisible' | 'danger' | 'link'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'invisible'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'link'"}],required:!1},description:"Determines the styles on a button, one of 'default' | 'primary' | 'invisible' | 'danger' | 'link'"},{key:"size",value:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},description:"Size of the button and fontSize of the text in the button"},{key:"disabled",value:{name:"boolean",required:!1},description:`Disables a button. Avoid disabling buttons because it will make them inaccessible to users
who rely on keyboard navigation. Buttons that are disabled cannot be clicked, selected, or navigated through.`},{key:"block",value:{name:"boolean",required:!1},description:"Allow a button to fill its container horizontally"},{key:"loading",value:{name:"boolean",required:!1},description:"Specify whether the button is in a loading state"},{key:"loadingAnnouncement",value:{name:"string",required:!1},description:"The content to announce to screen readers when loading"},{key:"inactive",value:{name:"boolean",required:!1}},{key:"labelWrap",value:{name:"boolean",required:!1},description:"Whether the button label should wrap to multiple lines if it is longer than the button width"}]}},{name:"SxProp"},{name:"ReactButtonHTMLAttributes",raw:"React.ButtonHTMLAttributes<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]}]},{name:"union",raw:"'aria-label' | 'aria-labelledby'",elements:[{name:"literal",value:"'aria-label'"},{name:"literal",value:"'aria-labelledby'"}]}],raw:"Omit<ButtonBaseProps, 'aria-label' | 'aria-labelledby'>"}]}],raw:"Partial<IconButtonProps>"},description:"Props to be spread on the close button in the overlay.",defaultValue:{value:"{}",computed:!1}},side:{defaultValue:{value:"overlayProps?.['anchorSide'] || 'outside-bottom'",computed:!1},required:!1},align:{defaultValue:{value:"'start'",computed:!1},required:!1}},composes:["Pick"]};export{f as A};
