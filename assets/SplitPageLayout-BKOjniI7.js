import{d as o,j as u}from"./iframe-Cfz2vXeE.js";import{P as m}from"./PageLayout-9NXxh8HL.js";const v=t=>{const e=o.c(3);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r={header:d,footer:y},e[0]=r):r=e[0];let n;return e[1]!==t?(n=u.jsx(m,{containerWidth:"full",padding:"none",columnGap:"none",rowGap:"none",_slotsConfig:r,...t}),e[1]=t,e[2]=n):n=e[2],n};v.displayName="SplitPageLayout";const d=t=>{const e=o.c(8);let r,n,a;e[0]!==t?({padding:n,divider:a,...r}=t,e[0]=t,e[1]=r,e[2]=n,e[3]=a):(r=e[1],n=e[2],a=e[3]);const s=n===void 0?"normal":n,l=a===void 0?"line":a;let i;return e[4]!==l||e[5]!==s||e[6]!==r?(i=u.jsx(m.Header,{padding:s,divider:l,...r}),e[4]=l,e[5]=s,e[6]=r,e[7]=i):i=e[7],i};d.displayName="SplitPageLayout.Header";const f=t=>{const e=o.c(8);let r,n,a;e[0]!==t?({width:n,padding:a,...r}=t,e[0]=t,e[1]=r,e[2]=n,e[3]=a):(r=e[1],n=e[2],a=e[3]);const s=n===void 0?"large":n,l=a===void 0?"normal":a;let i;return e[4]!==l||e[5]!==r||e[6]!==s?(i=u.jsx(m.Content,{width:s,padding:l,...r}),e[4]=l,e[5]=r,e[6]=s,e[7]=i):i=e[7],i};f.displayName="SplitPageLayout.Content";const b=t=>{const e=o.c(12);let r,n,a,s,l;e[0]!==t?({position:n,sticky:a,padding:s,divider:l,...r}=t,e[0]=t,e[1]=r,e[2]=n,e[3]=a,e[4]=s,e[5]=l):(r=e[1],n=e[2],a=e[3],s=e[4],l=e[5]);const i=n===void 0?"start":n,c=a===void 0?!0:a,w=s===void 0?"normal":s,g=l===void 0?"line":l;let p;return e[6]!==g||e[7]!==w||e[8]!==i||e[9]!==r||e[10]!==c?(p=u.jsx(m.Pane,{position:i,sticky:c,padding:w,divider:g,...r}),e[6]=g,e[7]=w,e[8]=i,e[9]=r,e[10]=c,e[11]=p):p=e[11],p};b.displayName="SplitPageLayout.Pane";const y=t=>{const e=o.c(8);let r,n,a;e[0]!==t?({padding:n,divider:a,...r}=t,e[0]=t,e[1]=r,e[2]=n,e[3]=a):(r=e[1],n=e[2],a=e[3]);const s=n===void 0?"normal":n,l=a===void 0?"line":a;let i;return e[4]!==l||e[5]!==s||e[6]!==r?(i=u.jsx(m.Footer,{padding:s,divider:l,...r}),e[4]=l,e[5]=s,e[6]=r,e[7]=i):i=e[7],i};y.displayName="SplitPageLayout.Footer";const P=Object.assign(v,{Header:d,Content:f,Pane:b,Footer:y});v.__docgenInfo={description:"",methods:[],displayName:"SplitPageLayout",props:{className:{required:!1,tsType:{name:"string"},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"SplitPageLayout.Header",props:{"aria-label":{required:!1,tsType:{name:"ReactAriaAttributes['aria-label']",raw:"React.AriaAttributes['aria-label']"},description:"A unique label for the rendered banner landmark"},"aria-labelledby":{required:!1,tsType:{name:"ReactAriaAttributes['aria-labelledby']",raw:"React.AriaAttributes['aria-labelledby']"},description:"An id to an element which uniquely labels the rendered banner landmark"},padding:{required:!1,tsType:{name:"union",raw:"keyof typeof SPACING_MAP",elements:[{name:"literal",value:"none"},{name:"literal",value:"condensed"},{name:"literal",value:"normal"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},divider:{required:!1,tsType:{name:"union",raw:"'none' | 'line' | ResponsiveValue<'none' | 'line', 'none' | 'line' | 'filled'>",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'line'"},{name:"signature",type:"object",raw:`{
  narrow?: TNarrow // Applies when viewport is narrow
  regular?: TRegular // Applies when viewports is regular
  wide?: TWide // Applies when viewports is wide
}`,signature:{properties:[{key:"narrow",value:{name:"union",raw:"'none' | 'line' | 'filled'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'line'"},{name:"literal",value:"'filled'"}],required:!1}},{key:"regular",value:{name:"union",raw:"'none' | 'line'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'line'"}],required:!1}},{key:"wide",value:{name:"TRegular",required:!1}}]}}]},description:"",defaultValue:{value:"'line'",computed:!1}},dividerWhenNarrow:{required:!1,tsType:{name:"union",raw:"'inherit' | 'none' | 'line' | 'filled'",elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'none'"},{name:"literal",value:"'line'"},{name:"literal",value:"'filled'"}]},description:`@deprecated Use the \`divider\` prop with a responsive value instead.

Before:
\`\`\`
divider="line"
dividerWhenNarrow="filled"
\`\`\`

After:
\`\`\`
divider={{regular: 'line', narrow: 'filled'}}
\`\`\``},hidden:{required:!1,tsType:{name:"union",raw:"boolean | ResponsiveValue<boolean>",elements:[{name:"boolean"},{name:"signature",type:"object",raw:`{
  narrow?: TNarrow // Applies when viewport is narrow
  regular?: TRegular // Applies when viewports is regular
  wide?: TWide // Applies when viewports is wide
}`,signature:{properties:[{key:"narrow",value:{name:"TRegular",required:!1}},{key:"regular",value:{name:"boolean",required:!1}},{key:"wide",value:{name:"TRegular",required:!1}}]}}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},sx:{required:!1,tsType:{name:"union",raw:"BetterCssProperties | SystemStyleObject | CSSCustomProperties | CSSSelectorObject",elements:[{name:"signature",type:"object",raw:`{
  [K in keyof SystemCssProperties]: K extends keyof ColorProps
    ? ThemeColorPaths | SystemCssProperties[K]
    : K extends keyof BorderColorProps
      ? ThemeColorPaths | SystemCssProperties[K]
      : K extends keyof ShadowProps
        ? ThemeShadowPaths | SystemCssProperties[K]
        : SystemCssProperties[K]
}`,signature:{properties:[{key:{name:"SystemCssProperties",required:!0},value:{name:"unknown"}}]}},{name:"SystemStyleObject"},{name:"signature",type:"object",raw:"{\n  [key: `--${string}`]: string | number\n}",signature:{properties:[{key:{name:"literal",value:"`--${string}`"},value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  [cssSelector: string]: SystemStyleObject | CSSCustomProperties
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"SystemStyleObject | CSSCustomProperties",elements:[{name:"SystemStyleObject"},{name:"signature",type:"object",raw:"{\n  [key: `--${string}`]: string | number\n}",signature:{properties:[{key:{name:"literal",value:"`--${string}`"},value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}}],required:!0}}]}}]},description:"@deprecated The `sx` prop is deprecated. Replace with a `div` or\nappropriate HTML element instead, with a CSS class for styling.\n@see https://github.com/primer/react/blob/main/contributor-docs/migration-from-box.md"}}};f.__docgenInfo={description:"",methods:[],displayName:"SplitPageLayout.Content",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:`Provide an optional element type for the outermost element rendered by the component.
@default 'main'`},"aria-label":{required:!1,tsType:{name:"ReactAriaAttributes['aria-label']",raw:"React.AriaAttributes['aria-label']"},description:"A unique label for the rendered main landmark"},"aria-labelledby":{required:!1,tsType:{name:"ReactAriaAttributes['aria-labelledby']",raw:"React.AriaAttributes['aria-labelledby']"},description:"An id to an element which uniquely labels the rendered main landmark"},width:{required:!1,tsType:{name:"union",raw:"keyof typeof contentWidths",elements:[{name:"literal",value:"full"},{name:"literal",value:"medium"},{name:"literal",value:"large"},{name:"literal",value:"xlarge"}]},description:"",defaultValue:{value:"'large'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"keyof typeof SPACING_MAP",elements:[{name:"literal",value:"none"},{name:"literal",value:"condensed"},{name:"literal",value:"normal"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},hidden:{required:!1,tsType:{name:"union",raw:"boolean | ResponsiveValue<boolean>",elements:[{name:"boolean"},{name:"signature",type:"object",raw:`{
  narrow?: TNarrow // Applies when viewport is narrow
  regular?: TRegular // Applies when viewports is regular
  wide?: TWide // Applies when viewports is wide
}`,signature:{properties:[{key:"narrow",value:{name:"TRegular",required:!1}},{key:"regular",value:{name:"boolean",required:!1}},{key:"wide",value:{name:"TRegular",required:!1}}]}}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},sx:{required:!1,tsType:{name:"union",raw:"BetterCssProperties | SystemStyleObject | CSSCustomProperties | CSSSelectorObject",elements:[{name:"signature",type:"object",raw:`{
  [K in keyof SystemCssProperties]: K extends keyof ColorProps
    ? ThemeColorPaths | SystemCssProperties[K]
    : K extends keyof BorderColorProps
      ? ThemeColorPaths | SystemCssProperties[K]
      : K extends keyof ShadowProps
        ? ThemeShadowPaths | SystemCssProperties[K]
        : SystemCssProperties[K]
}`,signature:{properties:[{key:{name:"SystemCssProperties",required:!0},value:{name:"unknown"}}]}},{name:"SystemStyleObject"},{name:"signature",type:"object",raw:"{\n  [key: `--${string}`]: string | number\n}",signature:{properties:[{key:{name:"literal",value:"`--${string}`"},value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  [cssSelector: string]: SystemStyleObject | CSSCustomProperties
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"SystemStyleObject | CSSCustomProperties",elements:[{name:"SystemStyleObject"},{name:"signature",type:"object",raw:"{\n  [key: `--${string}`]: string | number\n}",signature:{properties:[{key:{name:"literal",value:"`--${string}`"},value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}}],required:!0}}]}}]},description:"@deprecated The `sx` prop is deprecated. Replace with a `div` or\nappropriate HTML element instead, with a CSS class for styling.\n@see https://github.com/primer/react/blob/main/contributor-docs/migration-from-box.md"}}};b.__docgenInfo={description:"",methods:[],displayName:"SplitPageLayout.Pane",props:{position:{required:!1,tsType:{name:"union",raw:"keyof typeof panePositions | ResponsiveValue<keyof typeof panePositions>",elements:[{name:"union",raw:"keyof typeof panePositions",elements:[{name:"literal",value:"start"},{name:"literal",value:"end"}]},{name:"signature",type:"object",raw:`{
  narrow?: TNarrow // Applies when viewport is narrow
  regular?: TRegular // Applies when viewports is regular
  wide?: TWide // Applies when viewports is wide
}`,signature:{properties:[{key:"narrow",value:{name:"TRegular",required:!1}},{key:"regular",value:{name:"panePositions",required:!1}},{key:"wide",value:{name:"TRegular",required:!1}}]}}]},description:"",defaultValue:{value:"'start'",computed:!1}},positionWhenNarrow:{required:!1,tsType:{name:"union",raw:"'inherit' | keyof typeof panePositions",elements:[{name:"literal",value:"'inherit'"},{name:"union",raw:"keyof typeof panePositions",elements:[{name:"literal",value:"start"},{name:"literal",value:"end"}]}]},description:`@deprecated Use the \`position\` prop with a responsive value instead.

Before:
\`\`\`
position="start"
positionWhenNarrow="end"
\`\`\`

After:
\`\`\`
position={{regular: 'start', narrow: 'end'}}
\`\`\``},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"PaneWidth | CustomWidthOptions",elements:[{name:"union",raw:"keyof typeof paneWidths",elements:[{name:"literal",value:"small"},{name:"literal",value:"medium"},{name:"literal",value:"large"}]},{name:"signature",type:"object",raw:`{
  min: Measurement
  default: Measurement
  max: Measurement
}`,signature:{properties:[{key:"min",value:{name:"literal",value:"`${number}px`",required:!0}},{key:"default",value:{name:"literal",value:"`${number}px`",required:!0}},{key:"max",value:{name:"literal",value:"`${number}px`",required:!0}}]}}]},description:""},minWidth:{required:!1,tsType:{name:"number"},description:""},resizable:{required:!1,tsType:{name:"boolean"},description:""},widthStorageKey:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"union",raw:"keyof typeof SPACING_MAP",elements:[{name:"literal",value:"none"},{name:"literal",value:"condensed"},{name:"literal",value:"normal"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},divider:{required:!1,tsType:{name:"union",raw:"'none' | 'line' | ResponsiveValue<'none' | 'line', 'none' | 'line' | 'filled'>",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'line'"},{name:"signature",type:"object",raw:`{
  narrow?: TNarrow // Applies when viewport is narrow
  regular?: TRegular // Applies when viewports is regular
  wide?: TWide // Applies when viewports is wide
}`,signature:{properties:[{key:"narrow",value:{name:"union",raw:"'none' | 'line' | 'filled'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'line'"},{name:"literal",value:"'filled'"}],required:!1}},{key:"regular",value:{name:"union",raw:"'none' | 'line'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'line'"}],required:!1}},{key:"wide",value:{name:"TRegular",required:!1}}]}}]},description:"",defaultValue:{value:"'line'",computed:!1}},dividerWhenNarrow:{required:!1,tsType:{name:"union",raw:"'inherit' | 'none' | 'line' | 'filled'",elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'none'"},{name:"literal",value:"'line'"},{name:"literal",value:"'filled'"}]},description:`@deprecated Use the \`divider\` prop with a responsive value instead.

Before:
\`\`\`
divider="line"
dividerWhenNarrow="filled"
\`\`\`

After:
\`\`\`
divider={{regular: 'line', narrow: 'filled'}}
\`\`\``},sticky:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},offsetHeader:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},hidden:{required:!1,tsType:{name:"union",raw:"boolean | ResponsiveValue<boolean>",elements:[{name:"boolean"},{name:"signature",type:"object",raw:`{
  narrow?: TNarrow // Applies when viewport is narrow
  regular?: TRegular // Applies when viewports is regular
  wide?: TWide // Applies when viewports is wide
}`,signature:{properties:[{key:"narrow",value:{name:"TRegular",required:!1}},{key:"regular",value:{name:"boolean",required:!1}},{key:"wide",value:{name:"TRegular",required:!1}}]}}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},sx:{required:!1,tsType:{name:"union",raw:"BetterCssProperties | SystemStyleObject | CSSCustomProperties | CSSSelectorObject",elements:[{name:"signature",type:"object",raw:`{
  [K in keyof SystemCssProperties]: K extends keyof ColorProps
    ? ThemeColorPaths | SystemCssProperties[K]
    : K extends keyof BorderColorProps
      ? ThemeColorPaths | SystemCssProperties[K]
      : K extends keyof ShadowProps
        ? ThemeShadowPaths | SystemCssProperties[K]
        : SystemCssProperties[K]
}`,signature:{properties:[{key:{name:"SystemCssProperties",required:!0},value:{name:"unknown"}}]}},{name:"SystemStyleObject"},{name:"signature",type:"object",raw:"{\n  [key: `--${string}`]: string | number\n}",signature:{properties:[{key:{name:"literal",value:"`--${string}`"},value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  [cssSelector: string]: SystemStyleObject | CSSCustomProperties
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"SystemStyleObject | CSSCustomProperties",elements:[{name:"SystemStyleObject"},{name:"signature",type:"object",raw:"{\n  [key: `--${string}`]: string | number\n}",signature:{properties:[{key:{name:"literal",value:"`--${string}`"},value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}}],required:!0}}]}}]},description:"@deprecated The `sx` prop is deprecated. Replace with a `div` or\nappropriate HTML element instead, with a CSS class for styling.\n@see https://github.com/primer/react/blob/main/contributor-docs/migration-from-box.md"}}};y.__docgenInfo={description:"",methods:[],displayName:"SplitPageLayout.Footer",props:{"aria-label":{required:!1,tsType:{name:"ReactAriaAttributes['aria-label']",raw:"React.AriaAttributes['aria-label']"},description:"A unique label for the rendered contentinfo landmark"},"aria-labelledby":{required:!1,tsType:{name:"ReactAriaAttributes['aria-labelledby']",raw:"React.AriaAttributes['aria-labelledby']"},description:"An id to an element which uniquely labels the rendered contentinfo landmark"},padding:{required:!1,tsType:{name:"union",raw:"keyof typeof SPACING_MAP",elements:[{name:"literal",value:"none"},{name:"literal",value:"condensed"},{name:"literal",value:"normal"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},divider:{required:!1,tsType:{name:"union",raw:"'none' | 'line' | ResponsiveValue<'none' | 'line', 'none' | 'line' | 'filled'>",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'line'"},{name:"signature",type:"object",raw:`{
  narrow?: TNarrow // Applies when viewport is narrow
  regular?: TRegular // Applies when viewports is regular
  wide?: TWide // Applies when viewports is wide
}`,signature:{properties:[{key:"narrow",value:{name:"union",raw:"'none' | 'line' | 'filled'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'line'"},{name:"literal",value:"'filled'"}],required:!1}},{key:"regular",value:{name:"union",raw:"'none' | 'line'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'line'"}],required:!1}},{key:"wide",value:{name:"TRegular",required:!1}}]}}]},description:"",defaultValue:{value:"'line'",computed:!1}},dividerWhenNarrow:{required:!1,tsType:{name:"union",raw:"'inherit' | 'none' | 'line' | 'filled'",elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'none'"},{name:"literal",value:"'line'"},{name:"literal",value:"'filled'"}]},description:`@deprecated Use the \`divider\` prop with a responsive value instead.

Before:
\`\`\`
divider="line"
dividerWhenNarrow="filled"
\`\`\`

After:
\`\`\`
divider={{regular: 'line', narrow: 'filled'}}
\`\`\``},hidden:{required:!1,tsType:{name:"union",raw:"boolean | ResponsiveValue<boolean>",elements:[{name:"boolean"},{name:"signature",type:"object",raw:`{
  narrow?: TNarrow // Applies when viewport is narrow
  regular?: TRegular // Applies when viewports is regular
  wide?: TWide // Applies when viewports is wide
}`,signature:{properties:[{key:"narrow",value:{name:"TRegular",required:!1}},{key:"regular",value:{name:"boolean",required:!1}},{key:"wide",value:{name:"TRegular",required:!1}}]}}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},sx:{required:!1,tsType:{name:"union",raw:"BetterCssProperties | SystemStyleObject | CSSCustomProperties | CSSSelectorObject",elements:[{name:"signature",type:"object",raw:`{
  [K in keyof SystemCssProperties]: K extends keyof ColorProps
    ? ThemeColorPaths | SystemCssProperties[K]
    : K extends keyof BorderColorProps
      ? ThemeColorPaths | SystemCssProperties[K]
      : K extends keyof ShadowProps
        ? ThemeShadowPaths | SystemCssProperties[K]
        : SystemCssProperties[K]
}`,signature:{properties:[{key:{name:"SystemCssProperties",required:!0},value:{name:"unknown"}}]}},{name:"SystemStyleObject"},{name:"signature",type:"object",raw:"{\n  [key: `--${string}`]: string | number\n}",signature:{properties:[{key:{name:"literal",value:"`--${string}`"},value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  [cssSelector: string]: SystemStyleObject | CSSCustomProperties
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"SystemStyleObject | CSSCustomProperties",elements:[{name:"SystemStyleObject"},{name:"signature",type:"object",raw:"{\n  [key: `--${string}`]: string | number\n}",signature:{properties:[{key:{name:"literal",value:"`--${string}`"},value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}}],required:!0}}]}}]},description:"@deprecated The `sx` prop is deprecated. Replace with a `div` or\nappropriate HTML element instead, with a CSS class for styling.\n@see https://github.com/primer/react/blob/main/contributor-docs/migration-from-box.md"}}};export{P as S};
