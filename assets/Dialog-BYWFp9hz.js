import{R as w,u as j,r as y,j as r,c as T,d as f}from"./iframe-Cfz2vXeE.js";import{I as _}from"./IconButton-qXcIkMuV.js";import{B as U}from"./Button-3sCteC9V.js";import{u as Y}from"./useFocusTrap-CL_Yl_fl.js";import{X as Z}from"./index.esm-C1WN7kEu.js";import{u as K}from"./useFocusZone-BvuuCBlY.js";import{P as Q}from"./Portal-BKCn1yDJ.js";import{u as J}from"./useRefObjectAsForwardedRef-DQwuL9aT.js";import{u as G}from"./Tooltip-BuVThTi0.js";import{S as ee}from"./ScrollableRegion-CKacTlaY.js";import{u as te}from"./useProvidedRefOrCreate-Pg3blKRP.js";import{F as H}from"./focus-zone-ZDpdvBtN.js";const ne="prc-Dialog-Backdrop-ugYqZ",ae="prc-Dialog-Dialog-luvDS",oe="prc-Dialog-DisableScroll-F6LZa",le="prc-Dialog-DialogOverflowWrapper-oDYJo",ie="prc-Dialog-Footer-jQfN4",re="prc-Dialog-Header-cjbcl",se="prc-Dialog-HeaderInner-eY68M",ce="prc-Dialog-HeaderContent-CRaRY",ue="prc-Dialog-Title-oQ-W6",de="prc-Dialog-Subtitle-sITpo",me="prc-Dialog-Body-LCvER",u={Backdrop:ne,Dialog:ae,DisableScroll:oe,DialogOverflowWrapper:le,Footer:ie,Header:re,HeaderInner:se,HeaderContent:ce,Title:ue,Subtitle:de,Body:me},he=s=>{const t=f.c(16),{dialogLabelId:l,title:e,subtitle:a,dialogDescriptionId:n,onClose:o}=s;let i;t[0]!==o?(i=()=>{o("close-button")},t[0]=o,t[1]=i):i=t[1];const h=i,b=e??"Dialog";let d;t[2]!==l||t[3]!==b?(d=r.jsx(R.Title,{id:l,children:b}),t[2]=l,t[3]=b,t[4]=d):d=t[4];let g;t[5]!==n||t[6]!==a?(g=a&&r.jsx(R.Subtitle,{id:n,children:a}),t[5]=n,t[6]=a,t[7]=g):g=t[7];let m;t[8]!==d||t[9]!==g?(m=r.jsxs("div",{className:u.HeaderContent,children:[d,g]}),t[8]=d,t[9]=g,t[10]=m):m=t[10];let p;t[11]!==h?(p=r.jsx(R.CloseButton,{onClose:h}),t[11]=h,t[12]=p):p=t[12];let v;return t[13]!==m||t[14]!==p?(v=r.jsx(R.Header,{children:r.jsxs("div",{className:u.HeaderInner,children:[m,p]})}),t[13]=m,t[14]=p,t[15]=v):v=t[15],v},pe=s=>{const t=f.c(2),{children:l}=s;let e;return t[0]!==l?(e=r.jsx(R.Body,{children:l}),t[0]=l,t[1]=e):e=t[1],e},fe=s=>{const t=f.c(4),{footerButtons:l}=s;let e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e={bindKeys:H.ArrowHorizontal|H.Tab,focusInStrategy:"closest"},t[0]=e):e=t[0];const{containerRef:a}=K(e);let n;return t[1]!==l||t[2]!==a?(n=l?r.jsx(R.Footer,{ref:a,children:r.jsx(R.Buttons,{buttons:l})}):null,t[1]=l,t[2]=a,t[3]=n):n=t[3],n},ge={narrow:"center",regular:"center"},be=[],F=w.forwardRef((s,t)=>{const{title:l="Dialog",subtitle:e="",renderHeader:a,renderBody:n,renderFooter:o,onClose:i,role:h="dialog",width:b="xlarge",height:d="auto",footerButtons:g=be,position:m=ge,returnFocusRef:p,initialFocusRef:v,className:W}=s,k=j(),E=j(),C=y.useRef(null);for(const c of g)c.autoFocus&&(c.ref=C);const[x,O]=y.useState(!1),B={...s,title:l,subtitle:e,role:h,dialogLabelId:k,dialogDescriptionId:E},M=y.useCallback(c=>{c.target===c.currentTarget&&x&&i("escape")},[i,x]),D=y.useRef(null);J(t,D);const L=y.useRef(null);Y({containerRef:D,initialFocusRef:v??C,restoreFocusOnCleanUp:!p?.current,returnFocusRef:p}),G(c=>{i("escape"),c.preventDefault()},[i]),w.useEffect(()=>{const c=window.innerWidth-document.body.clientWidth;D.current?.classList.add(u.DisableScroll),document.body.style.setProperty("--prc-dialog-scrollgutter",`${c}px`)},[]);const $=(a??he)(B),z=(n??pe)(B),V=(o??fe)(B),P=typeof m=="string"?{"data-position-regular":m}:Object.fromEntries(Object.entries(m).map(([c,X])=>[`data-position-${c}`,X]));return r.jsx(r.Fragment,{children:r.jsx(Q,{children:r.jsx("div",{ref:L,className:u.Backdrop,...P,onClick:M,onMouseDown:c=>{O(c.target===c.currentTarget)},children:r.jsxs("div",{ref:D,role:h,"aria-labelledby":k,"aria-describedby":E,"aria-modal":!0,...P,"data-width":b,"data-height":d,className:T(W,u.Dialog),children:[$,r.jsx(ee,{"aria-labelledby":k,className:u.DialogOverflowWrapper,children:z}),V]})})})})});F.displayName="Dialog";const N=w.forwardRef(function(t,l){const e=f.c(9);let a,n;e[0]!==t?({className:a,...n}=t,e[0]=t,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let o;e[3]!==a?(o=T(a,u.Header),e[3]=a,e[4]=o):o=e[4];let i;return e[5]!==l||e[6]!==n||e[7]!==o?(i=r.jsx("div",{ref:l,className:o,...n}),e[5]=l,e[6]=n,e[7]=o,e[8]=i):i=e[8],i});N.displayName="Dialog.Header";const q=w.forwardRef(function(t,l){const e=f.c(9);let a,n;e[0]!==t?({className:a,...n}=t,e[0]=t,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let o;e[3]!==a?(o=T(a,u.Title),e[3]=a,e[4]=o):o=e[4];let i;return e[5]!==l||e[6]!==n||e[7]!==o?(i=r.jsx("h1",{ref:l,className:o,...n}),e[5]=l,e[6]=n,e[7]=o,e[8]=i):i=e[8],i});q.displayName="Dialog.Title";const S=w.forwardRef(function(t,l){const e=f.c(9);let a,n;e[0]!==t?({className:a,...n}=t,e[0]=t,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let o;e[3]!==a?(o=T(a,u.Subtitle),e[3]=a,e[4]=o):o=e[4];let i;return e[5]!==l||e[6]!==n||e[7]!==o?(i=r.jsx("h2",{ref:l,className:o,...n}),e[5]=l,e[6]=n,e[7]=o,e[8]=i):i=e[8],i});S.displayName="Dialog.Subtitle";const A=w.forwardRef(function(t,l){const e=f.c(9);let a,n;e[0]!==t?({className:a,...n}=t,e[0]=t,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let o;e[3]!==a?(o=T(a,u.Body),e[3]=a,e[4]=o):o=e[4];let i;return e[5]!==l||e[6]!==n||e[7]!==o?(i=r.jsx("div",{ref:l,className:o,...n}),e[5]=l,e[6]=n,e[7]=o,e[8]=i):i=e[8],i});A.displayName="Dialog.Body";const I=w.forwardRef(function(t,l){const e=f.c(9);let a,n;e[0]!==t?({className:a,...n}=t,e[0]=t,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let o;e[3]!==a?(o=T(a,u.Footer),e[3]=a,e[4]=o):o=e[4];let i;return e[5]!==l||e[6]!==n||e[7]!==o?(i=r.jsx("div",{ref:l,className:o,...n}),e[5]=l,e[6]=n,e[7]=o,e[8]=i):i=e[8],i});I.displayName="Dialog.Footer";const ye=({buttons:s})=>{const t=te(s.find(n=>n.autoFocus)?.ref);let l=0;const[e,a]=y.useState(0);return y.useEffect(()=>{e===1?t.current?.focus():a(e+1)},[t,e]),r.jsx(r.Fragment,{children:s.map((n,o)=>{const{content:i,buttonType:h="default",autoFocus:b=!1,...d}=n;return r.jsx(U,{...d,variant:h==="normal"?"default":h,ref:b&&l===0?(l++,t):null,children:i},o)})})},Re=s=>{const t=f.c(2),{onClose:l}=s;let e;return t[0]!==l?(e=r.jsx(_,{icon:Z,"aria-label":"Close",onClick:l,variant:"invisible"}),t[0]=l,t[1]=e):e=t[1],e},R=Object.assign(F,{Header:N,Title:q,Subtitle:S,Body:A,Footer:I,Buttons:ye,CloseButton:Re});F.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Title of the Dialog. Also serves as the aria-label for this Dialog."},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`The Dialog's subtitle. Optional. Rendered below the title in smaller
type with less contrast. Also serves as the aria-describedby for this
Dialog.`},renderHeader:{required:!1,tsType:{name:"ReactFunctionComponent",raw:"React.FunctionComponent<React.PropsWithChildren<DialogHeaderProps>>",elements:[{name:"ReactPropsWithChildren",raw:"React.PropsWithChildren<DialogHeaderProps>",elements:[{name:"DialogHeaderProps"}]}]},description:`Provide a custom renderer for the dialog header. This content is
rendered directly into the dialog body area, full bleed from edge
to edge, top to the start of the body element.

Warning: using a custom renderer may violate Primer UX principles.`},renderBody:{required:!1,tsType:{name:"ReactFunctionComponent",raw:"React.FunctionComponent<React.PropsWithChildren<DialogProps>>",elements:[{name:"ReactPropsWithChildren",raw:"React.PropsWithChildren<DialogProps>",elements:[{name:"DialogProps"}]}]},description:`Provide a custom render function for the dialog body. This content is
rendered directly into the dialog body area, full bleed from edge to
edge, header to footer.

Warning: using a custom renderer may violate Primer UX principles.`},renderFooter:{required:!1,tsType:{name:"ReactFunctionComponent",raw:"React.FunctionComponent<React.PropsWithChildren<DialogProps>>",elements:[{name:"ReactPropsWithChildren",raw:"React.PropsWithChildren<DialogProps>",elements:[{name:"DialogProps"}]}]},description:`Provide a custom render function for the dialog footer. This content is
rendered directly into the dialog footer area, full bleed from edge to
edge, end of the body element to bottom.

Warning: using a custom renderer may violate Primer UX principles.`},footerButtons:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<ButtonProps, 'content'> & {
  /**
   * The variant of Button to use
   */
  buttonType?: 'default' | 'primary' | 'danger' | 'normal'

  /**
   * The Button's inner text
   */
  content: React.ReactNode

  /**
   * If true, and if this is the only button with autoFocus set to true,
   * focus this button automatically when the dialog appears.
   */
  autoFocus?: boolean

  /**
   * A reference to the rendered Button’s DOM node, used together with
   * \`autoFocus\` for \`focusTrap\`’s \`initialFocus\`.
   */
  ref?: React.RefObject<HTMLButtonElement>
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`{
  /**
   * Content alignment for when visuals are present
   */
  alignContent?: AlignContent

  /**
   * The icon for the IconButton
   */
  icon?: React.FunctionComponent<IconProps> | React.ElementType | React.ReactElement | null

  /**
   * The leading visual which comes before the button content
   */
  leadingVisual?: React.ElementType | React.ReactElement | null

  /**
   * The trailing visual which comes after the button content
   */
  trailingVisual?: React.ElementType | React.ReactElement | null

  /**
   * Trailing action which comes after the trailing visual and is always the last element
   * in the button
   */
  trailingAction?: React.ElementType | null

  children?: React.ReactNode

  count?: number | string
} & ButtonBaseProps`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Content alignment for when visuals are present
   */
  alignContent?: AlignContent

  /**
   * The icon for the IconButton
   */
  icon?: React.FunctionComponent<IconProps> | React.ElementType | React.ReactElement | null

  /**
   * The leading visual which comes before the button content
   */
  leadingVisual?: React.ElementType | React.ReactElement | null

  /**
   * The trailing visual which comes after the button content
   */
  trailingVisual?: React.ElementType | React.ReactElement | null

  /**
   * Trailing action which comes after the trailing visual and is always the last element
   * in the button
   */
  trailingAction?: React.ElementType | null

  children?: React.ReactNode

  count?: number | string
}`,signature:{properties:[{key:"alignContent",value:{name:"union",raw:"'start' | 'center'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"}],required:!1},description:"Content alignment for when visuals are present"},{key:"icon",value:{name:"union",raw:"React.FunctionComponent<IconProps> | React.ElementType | React.ReactElement | null",elements:[{name:"ReactFunctionComponent",raw:"React.FunctionComponent<IconProps>",elements:[{name:"IconProps"}]},{name:"ReactElementType",raw:"React.ElementType"},{name:"ReactReactElement",raw:"React.ReactElement"},{name:"null"}],required:!1},description:"The icon for the IconButton"},{key:"leadingVisual",value:{name:"union",raw:"React.ElementType | React.ReactElement | null",elements:[{name:"ReactElementType",raw:"React.ElementType"},{name:"ReactReactElement",raw:"React.ReactElement"},{name:"null"}],required:!1},description:"The leading visual which comes before the button content"},{key:"trailingVisual",value:{name:"union",raw:"React.ElementType | React.ReactElement | null",elements:[{name:"ReactElementType",raw:"React.ElementType"},{name:"ReactReactElement",raw:"React.ReactElement"},{name:"null"}],required:!1},description:"The trailing visual which comes after the button content"},{key:"trailingAction",value:{name:"union",raw:"React.ElementType | null",elements:[{name:"ReactElementType",raw:"React.ElementType"},{name:"null"}],required:!1},description:`Trailing action which comes after the trailing visual and is always the last element
in the button`},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"count",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}},{name:"intersection",raw:`{
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
who rely on keyboard navigation. Buttons that are disabled cannot be clicked, selected, or navigated through.`},{key:"block",value:{name:"boolean",required:!1},description:"Allow a button to fill its container horizontally"},{key:"loading",value:{name:"boolean",required:!1},description:"Specify whether the button is in a loading state"},{key:"loadingAnnouncement",value:{name:"string",required:!1},description:"The content to announce to screen readers when loading"},{key:"inactive",value:{name:"boolean",required:!1}},{key:"labelWrap",value:{name:"boolean",required:!1},description:"Whether the button label should wrap to multiple lines if it is longer than the button width"}]}},{name:"SxProp"},{name:"ReactButtonHTMLAttributes",raw:"React.ButtonHTMLAttributes<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]}]}]},{name:"literal",value:"'content'"}],raw:"Omit<ButtonProps, 'content'>"},{name:"signature",type:"object",raw:`{
  /**
   * The variant of Button to use
   */
  buttonType?: 'default' | 'primary' | 'danger' | 'normal'

  /**
   * The Button's inner text
   */
  content: React.ReactNode

  /**
   * If true, and if this is the only button with autoFocus set to true,
   * focus this button automatically when the dialog appears.
   */
  autoFocus?: boolean

  /**
   * A reference to the rendered Button’s DOM node, used together with
   * \`autoFocus\` for \`focusTrap\`’s \`initialFocus\`.
   */
  ref?: React.RefObject<HTMLButtonElement>
}`,signature:{properties:[{key:"buttonType",value:{name:"union",raw:"'default' | 'primary' | 'danger' | 'normal'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'normal'"}],required:!1},description:"The variant of Button to use"},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0},description:"The Button's inner text"},{key:"autoFocus",value:{name:"boolean",required:!1},description:`If true, and if this is the only button with autoFocus set to true,
focus this button automatically when the dialog appears.`},{key:"ref",value:{name:"ReactRefObject",raw:"React.RefObject<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}],required:!1},description:"A reference to the rendered Button’s DOM node, used together with\n`autoFocus` for `focusTrap`’s `initialFocus`."}]}}]}],raw:"DialogButtonProps[]"},description:"Specifies the buttons to be rendered in the Dialog footer."},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(gesture: 'close-button' | 'escape') => void",signature:{arguments:[{type:{name:"union",raw:"'close-button' | 'escape'",elements:[{name:"literal",value:"'close-button'"},{name:"literal",value:"'escape'"}]},name:"gesture"}],return:{name:"void"}}},description:`This method is invoked when a gesture to close the dialog is used (either
an Escape key press, clicking the backdrop, or clicking the "X" in the top-right corner). The
gesture argument indicates the gesture that was used to close the dialog
('close-button' or 'escape').`},role:{required:!1,tsType:{name:"union",raw:"'dialog' | 'alertdialog'",elements:[{name:"literal",value:"'dialog'"},{name:"literal",value:"'alertdialog'"}]},description:`Default: "dialog". The ARIA role to assign to this dialog.
@see https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal
@see https://www.w3.org/TR/wai-aria-practices-1.1/#alertdialog`},width:{required:!1,tsType:{name:"union",raw:"keyof typeof widthMap",elements:[{name:"literal",value:"small"},{name:"literal",value:"medium"},{name:"literal",value:"large"},{name:"literal",value:"xlarge"}]},description:`The width of the dialog.
small: 296px
medium: 320px
large: 480px
xlarge: 640px`},height:{required:!1,tsType:{name:"union",raw:"keyof typeof heightMap",elements:[{name:"literal",value:"small"},{name:"literal",value:"large"},{name:"literal",value:"auto"}]},description:`The height of the dialog.
small: 296x480
large: 480x640
auto: variable based on contents`},position:{required:!1,tsType:{name:"union",raw:"'center' | 'left' | 'right' | ResponsiveValue<'left' | 'right' | 'bottom' | 'fullscreen' | 'center'>",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"signature",type:"object",raw:`{
  narrow?: TNarrow // Applies when viewport is narrow
  regular?: TRegular // Applies when viewports is regular
  wide?: TWide // Applies when viewports is wide
}`,signature:{properties:[{key:"narrow",value:{name:"TRegular",required:!1}},{key:"regular",value:{name:"union",raw:"'left' | 'right' | 'bottom' | 'fullscreen' | 'center'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'fullscreen'"},{name:"literal",value:"'center'"}],required:!1}},{key:"wide",value:{name:"TRegular",required:!1}}]}}]},description:"The position of the dialog"},returnFocusRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement>",elements:[{name:"HTMLElement"}]},description:`Return focus to this element when the Dialog closes,
instead of the element that had focus immediately before the Dialog opened`},initialFocusRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"The element to focus when the Dialog opens"},className:{required:!1,tsType:{name:"string"},description:"Additional class names to apply to the dialog"}}};export{R as D};
