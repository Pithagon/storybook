import{d as ee,j as a,A as me,q as v,R as Y,u as se,b as ue,a as he,r as ne}from"./iframe-Cfz2vXeE.js";import{s as te}from"./sx-BSyIY0hE.js";import{g as i}from"./constants-gM483c7h.js";import{s as ge}from"./index.esm-C1WN7kEu.js";import{S as fe,D as ae}from"./Divider-DAC_rNDB.js";import{T as be}from"./Truncate-DUc3hzfC.js";import{i as W,a as ve,b as ye,h as xe}from"./focus-zone-ZDpdvBtN.js";import{B as Se}from"./BoxWithFallback-BKnPTtUo.js";const le=v.div`
   {
    /* 6px vertical padding + 20px line height = 32px total height
     *
     * TODO: When rem-based spacing on a 4px scale lands, replace
     * hardcoded '6px' with 'calc((${i("space.s32")} - ${i("space.20")}) / 2)'.
     */
  }
  padding: 6px ${i("space.3")};
  font-size: ${i("fontSizes.0")};
  font-weight: ${i("fontWeights.bold")};
  color: ${i("colors.fg.muted")};

  ${({variant:r})=>r==="filled"&&me`
      background: ${i("colors.canvas.subtle")};
      margin: ${i("space.2")} 0;
      border-top: 1px solid ${i("colors.neutral.muted")};
      border-bottom: 1px solid ${i("colors.neutral.muted")};

      &:first-child {
        margin-top: 0;
      }
    `}

  ${te}
`;function de(r){const t=ee.c(12);let e,n,c,l;if(t[0]!==r){const{variant:p,title:f,auxiliaryText:s,children:d,...o}=r;c=p,l=f,e=s,n=o,t[0]=r,t[1]=e,t[2]=n,t[3]=c,t[4]=l}else e=t[1],n=t[2],c=t[3],l=t[4];const m=c===void 0?"subtle":c;let g;t[5]!==e?(g=e&&a.jsx("span",{children:e}),t[5]=e,t[6]=g):g=t[6];let u;return t[7]!==n||t[8]!==g||t[9]!==l||t[10]!==m?(u=a.jsxs(le,{role:"heading",variant:m,...n,children:[l,g]}),t[7]=n,t[8]=g,t[9]=l,t[10]=m,t[11]=u):u=t[11],u}de.__docgenInfo={description:"Displays the name and description of a `Group`.",methods:[],displayName:"Header",props:{sx:{required:!1,tsType:{name:"union",raw:"BetterCssProperties | SystemStyleObject | CSSCustomProperties | CSSSelectorObject",elements:[{name:"signature",type:"object",raw:`{
  [K in keyof SystemCssProperties]: K extends keyof ColorProps
    ? ThemeColorPaths | SystemCssProperties[K]
    : K extends keyof BorderColorProps
      ? ThemeColorPaths | SystemCssProperties[K]
      : K extends keyof ShadowProps
        ? ThemeShadowPaths | SystemCssProperties[K]
        : SystemCssProperties[K]
}`,signature:{properties:[{key:{name:"SystemCssProperties",required:!0},value:{name:"unknown"}}]}},{name:"SystemStyleObject"},{name:"signature",type:"object",raw:"{\n  [key: `--${string}`]: string | number\n}",signature:{properties:[{key:{name:"literal",value:"`--${string}`"},value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  [cssSelector: string]: SystemStyleObject | CSSCustomProperties
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"SystemStyleObject | CSSCustomProperties",elements:[{name:"SystemStyleObject"},{name:"signature",type:"object",raw:"{\n  [key: `--${string}`]: string | number\n}",signature:{properties:[{key:{name:"literal",value:"`--${string}`"},value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}}],required:!0}}]}}]},description:"@deprecated The `sx` prop is deprecated. Replace with a `div` or\nappropriate HTML element instead, with a CSS class for styling.\n@see https://github.com/primer/react/blob/main/contributor-docs/migration-from-box.md"},variant:{required:!1,tsType:{name:"union",raw:"'subtle' | 'filled'",elements:[{name:"literal",value:"'subtle'"},{name:"literal",value:"'filled'"}]},description:'Style variations. Usage is discretionary.\n\n- `"filled"` - Superimposed on a background, offset from nearby content\n- `"subtle"` - Relatively less offset from nearby content',defaultValue:{value:"'subtle'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:"Primary text which names a `Group`."},auxiliaryText:{required:!1,tsType:{name:"string"},description:"Secondary text which provides additional information about a `Group`."}}};const we=v.div`
  ${te}
`;function re(r){const t=ee.c(10);let e,n,c;t[0]!==r?({header:e,items:n,...c}=r,t[0]=r,t[1]=e,t[2]=n,t[3]=c):(e=t[1],n=t[2],c=t[3]);let l;t[4]!==e?(l=e&&a.jsx(de,{...e}),t[4]=e,t[5]=l):l=t[5];let m;return t[6]!==n||t[7]!==c||t[8]!==l?(m=a.jsxs(we,{...c,children:[l,n]}),t[6]=n,t[7]=c,t[8]=l,t[9]=m):m=t[9],m}re.__docgenInfo={description:"Collects related `Items` in an `ActionList`.",methods:[],displayName:"Group",props:{sx:{required:!1,tsType:{name:"union",raw:"BetterCssProperties | SystemStyleObject | CSSCustomProperties | CSSSelectorObject",elements:[{name:"signature",type:"object",raw:`{
  [K in keyof SystemCssProperties]: K extends keyof ColorProps
    ? ThemeColorPaths | SystemCssProperties[K]
    : K extends keyof BorderColorProps
      ? ThemeColorPaths | SystemCssProperties[K]
      : K extends keyof ShadowProps
        ? ThemeShadowPaths | SystemCssProperties[K]
        : SystemCssProperties[K]
}`,signature:{properties:[{key:{name:"SystemCssProperties",required:!0},value:{name:"unknown"}}]}},{name:"SystemStyleObject"},{name:"signature",type:"object",raw:"{\n  [key: `--${string}`]: string | number\n}",signature:{properties:[{key:{name:"literal",value:"`--${string}`"},value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  [cssSelector: string]: SystemStyleObject | CSSCustomProperties
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"SystemStyleObject | CSSCustomProperties",elements:[{name:"SystemStyleObject"},{name:"signature",type:"object",raw:"{\n  [key: `--${string}`]: string | number\n}",signature:{properties:[{key:{name:"literal",value:"`--${string}`"},value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}}],required:!0}}]}}]},description:"@deprecated The `sx` prop is deprecated. Replace with a `div` or\nappropriate HTML element instead, with a CSS class for styling.\n@see https://github.com/primer/react/blob/main/contributor-docs/migration-from-box.md"},header:{required:!1,tsType:{name:"HeaderProps"},description:"Props for a `Header` to render in the `Group`."},groupId:{required:!1,tsType:{name:"string"},description:"The id of the group."},items:{required:!1,tsType:{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"},description:"`Items` to render in the `Group`."},showItemDividers:{required:!1,tsType:{name:"boolean"},description:"Whether to display a divider above each `Item` in this `Group` when it does not follow a `Header` or `Divider`."}}};const x=(r="default",t)=>{if(t)return{color:i("colors.primer.fg.disabled"),iconColor:i("colors.primer.fg.disabled"),annotationColor:i("colors.primer.fg.disabled"),hoverCursor:"default"};switch(r){case"danger":return{color:i("colors.danger.fg"),iconColor:i("colors.danger.fg"),annotationColor:i("colors.fg.muted"),hoverCursor:"pointer",hoverBg:i("colors.actionListItem.danger.hoverBg"),focusBg:i("colors.actionListItem.danger.activeBg"),hoverText:i("colors.actionListItem.danger.hoverText")};default:return{color:i("colors.fg.default"),iconColor:i("colors.fg.muted"),annotationColor:i("colors.fg.muted"),hoverCursor:"pointer",hoverBg:i("colors.actionListItem.default.hoverBg"),focusBg:i("colors.actionListItem.default.activeBg")}}},C=v.div`
  display: flex;
  min-width: 0;

  /* Required for dividers */
  position: relative;
  flex-grow: 1;
`,Ce=v.div`
  align-items: baseline;
  display: flex;
  min-width: 0;
  flex-direction: var(--main-content-flex-direction);
  flex-grow: 1;
`,$e=v.div`
  /* 6px vertical padding + 20px line height = 32px total height
   *
   * TODO: When rem-based spacing on a 4px scale lands, replace
   * hardcoded '6px' with 'calc((${i("space.s32")} - ${i("space.20")}) / 2)'.
   */
  padding: 6px ${i("space.2")};
  display: flex;
  border-radius: ${i("radii.2")};
  color: ${({variant:r,item:t})=>x(r,t?.disabled).color};
  // 2 frames on a 60hz monitor
  transition: background 33.333ms linear;
  text-decoration: none;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      // allow override in case another item in the list is active/focused
      background: var(
        --item-hover-bg-override,
        ${({variant:r,item:t})=>x(r,t?.disabled).hoverBg}
      );
      color: ${({variant:r,item:t})=>x(r,t?.disabled).hoverText};
      cursor: ${({variant:r,item:t})=>x(r,t?.disabled).hoverCursor};
    }
  }

  // Item dividers
  :not(:first-of-type):not(${fe} + &):not(${le} + &) {
    margin-top: ${({showDivider:r})=>r?"1px":"0"};

    ${C}::before {
      content: ' ';
      display: block;
      position: absolute;
      width: 100%;
      top: -7px;
      // NB: This 'get' won’t execute if it’s moved into the arrow function below.
      border: 0 solid ${i("colors.border.muted")};
      border-top-width: ${({showDivider:r})=>r?"1px":"0"};
    }
  }

  // Item dividers should not be visible:
  // - above Hovered
  &:hover ${C}::before,
  // - below Hovered
  // '*' instead of '&' because '&' maps to separate class names depending on 'variant'
  :hover + * ${C}::before {
    // allow override in case another item in the list is active/focused
    border-color: var(--item-hover-divider-border-color-override, transparent) !important;
  }

  // - above Focused
  &:focus ${C}::before,
  // - below Focused
  // '*' instead of '&' because '&' maps to separate class names depending on 'variant'
  :focus + * ${C}::before,
  // - above Active Descendent
  &[${W}] ${C}::before,
  // - below Active Descendent
  [${W}] + & ${C}::before {
    // '!important' because all the ':not's above give higher specificity
    border-color: transparent !important;
  }

  // Active Descendant
  &[${W}='${ve}'] {
    background: ${({variant:r,item:t})=>x(r,t?.disabled).focusBg};
  }
  &[${W}='${ye}'] {
    background: ${({variant:r,item:t})=>x(r,t?.disabled).hoverBg};
  }

  &:focus {
    background: ${({variant:r,item:t})=>x(r,t?.disabled).focusBg};
    outline: none;
  }

  &:active {
    background: ${({variant:r,item:t})=>x(r,t?.disabled).focusBg};
  }

  ${te}
`,Ie=v.span``,ce=v.div`
  // Match visual height to adjacent text line height.
  // TODO: When rem-based spacing on a 4px scale lands, replace
  // hardcoded '20px' with '${i("space.s20")}'.
  height: 20px;
  width: ${i("space.3")};
  margin-right: ${i("space.2")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`,pe=v(ce)`
  svg {
    fill: ${({variant:r,disabled:t})=>x(r,t).iconColor};
    font-size: ${i("fontSizes.0")};
  }
`,je=v(pe)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,oe=v(pe)`
  color: ${({variant:r,disabled:t})=>x(r,t).annotationColor};
  margin-left: ${i("space.2")};
  margin-right: 0;
  width: auto;
  div:nth-child(2) {
    margin-left: ${i("space.2")};
  }
`,ke=v.span`
  color: ${i("colors.fg.muted")};
  font-size: ${i("fontSizes.0")};
  // TODO: When rem-based spacing on a 4px scale lands, replace
  // hardcoded '16px' with '${i("lh-12")}'.
  line-height: 16px;
  margin-left: var(--description-container-margin-left);
  min-width: 0;
  flex-grow: 1;
  flex-basis: var(--description-container-flex-basis);
`,Te=v.svg`
  rect {
    fill: ${({selected:r})=>r?i("colors.accent.fg"):i("colors.canvas.default")};
    stroke: ${({selected:r})=>r?i("colors.accent.fg"):i("colors.border.default")};
    shape-rendering: auto; // this is a workaround to override global style in github/github, see primer/react#1666
  }
  path {
    fill: ${i("colors.fg.onEmphasis")};
    boxshadow: ${i("shadow.small")};
    opacity: ${({selected:r})=>r?1:0};
  }
`,N=Y.forwardRef((r,t)=>{const e=ee.c(78);let n,c,l,m,g,u,p,f,s,d,o,b,h,I,j,G,K,S,$;e[0]!==r?({as:n,text:S,description:u,descriptionVariant:G,selected:h,selectionVariant:I,leadingVisual:c,trailingIcon:l,trailingVisual:m,trailingText:$,variant:K,showDivider:j,disabled:p,onAction:s,onKeyPress:o,children:g,onClick:d,id:f,...b}=r,e[0]=r,e[1]=n,e[2]=c,e[3]=l,e[4]=m,e[5]=g,e[6]=u,e[7]=p,e[8]=f,e[9]=s,e[10]=d,e[11]=o,e[12]=b,e[13]=h,e[14]=I,e[15]=j,e[16]=G,e[17]=K,e[18]=S,e[19]=$):(n=e[1],c=e[2],l=e[3],m=e[4],g=e[5],u=e[6],p=e[7],f=e[8],s=e[9],d=e[10],o=e[11],b=e[12],h=e[13],I=e[14],j=e[15],G=e[16],K=e[17],S=e[18],$=e[19]);const k=G===void 0?"inline":G,y=K===void 0?"default":K,V=se(),z=se();let H;e[20]!==p||e[21]!==r||e[22]!==s||e[23]!==o?(H=w=>{p||(o?.(w),!w.defaultPrevented&&[" ","Enter"].includes(w.key)&&s?.(r,w))},e[20]=p,e[21]=r,e[22]=s,e[23]=o,e[24]=H):H=e[24];const F=H;let R;e[25]!==p||e[26]!==r||e[27]!==s||e[28]!==d?(R=w=>{p||(d?.(w),w.defaultPrevented||s?.(r,w))},e[25]=p,e[26]=r,e[27]=s,e[28]=d,e[29]=R):R=e[29];const _=R,{theme:T}=ue(),J=p?void 0:-1,X=S?V:void 0,U=u?z:void 0;let D;e[30]!==h||e[31]!==I||e[32]!==T?.colors?(D=!!h===h&&a.jsx(ce,{children:I==="multiple"?a.jsx(a.Fragment,{children:a.jsxs(Te,{selected:h,width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[a.jsx("rect",{x:"2",y:"2",width:"12",height:"12",rx:"4"}),a.jsx("path",{fillRule:"evenodd",strokeWidth:"0",d:"M4.03231 8.69862C3.84775 8.20646 4.49385 7.77554 4.95539 7.77554C5.41693 7.77554 6.80154 9.85246 6.80154 9.85246C6.80154 9.85246 10.2631 4.314 10.4938 4.08323C10.7246 3.85246 11.8785 4.08323 11.4169 5.00631C11.0081 5.82388 7.26308 11.4678 7.26308 11.4678C7.26308 11.4678 6.80154 12.1602 6.34 11.4678C5.87846 10.7755 4.21687 9.19077 4.03231 8.69862Z"})]})}):h&&a.jsx(ge,{fill:T?.colors.fg.default})}),e[30]=h,e[31]=I,e[32]=T?.colors,e[33]=D):D=e[33];let P;e[34]!==c||e[35]!==p||e[36]!==y?(P=c&&a.jsx(je,{variant:y,disabled:p,children:a.jsx(c,{})}),e[34]=c,e[35]=p,e[36]=y,e[37]=P):P=e[37];const Z=k==="inline"?"row":"column";let E;e[38]!==Z?(E={"--main-content-flex-direction":Z},e[38]=Z,e[39]=E):E=e[39];const Q=E;let B;e[40]!==V||e[41]!==S?(B=S?a.jsx(Ie,{id:V,children:S}):null,e[40]=V,e[41]=S,e[42]=B):B=e[42];let L;e[43]!==u||e[44]!==z||e[45]!==k||e[46]!==T?(L=u?a.jsx(ke,{id:z,style:{"--description-container-margin-left":k==="inline"?i("space.2")(T):0,"--description-container-flex-basis":k==="inline"?0:"auto"},children:k==="block"?u:a.jsx(be,{title:u,inline:!0,maxWidth:"100%",children:u})}):null,e[43]=u,e[44]=z,e[45]=k,e[46]=T,e[47]=L):L=e[47];let A;e[48]!==g||e[49]!==Q||e[50]!==B||e[51]!==L?(A=a.jsxs(Ce,{style:Q,children:[g,B,L]}),e[48]=g,e[49]=Q,e[50]=B,e[51]=L,e[52]=A):A=e[52];let O;e[53]!==l||e[54]!==m||e[55]!==p||e[56]!==$||e[57]!==y?(O=m?a.jsx(oe,{variant:y,disabled:p,children:typeof m!="string"&&he.isValidElementType(m)?a.jsx(m,{}):m}):l||$?a.jsxs(oe,{variant:y,disabled:p,children:[$,l&&a.jsx(l,{})]}):null,e[53]=l,e[54]=m,e[55]=p,e[56]=$,e[57]=y,e[58]=O):O=e[58];let q;e[59]!==A||e[60]!==O?(q=a.jsxs(C,{children:[A,O]}),e[59]=A,e[60]=O,e[61]=q):q=e[61];let M;return e[62]!==n||e[63]!==_||e[64]!==f||e[65]!==F||e[66]!==b||e[67]!==t||e[68]!==h||e[69]!==j||e[70]!==q||e[71]!==J||e[72]!==X||e[73]!==U||e[74]!==D||e[75]!==P||e[76]!==y?(M=a.jsxs($e,{ref:t,as:n,tabIndex:J,variant:y,showDivider:j,"aria-selected":h,"aria-labelledby":X,"aria-describedby":U,...b,"data-id":f,onKeyPress:F,onClick:_,children:[D,P,q]}),e[62]=n,e[63]=_,e[64]=f,e[65]=F,e[66]=b,e[67]=t,e[68]=h,e[69]=j,e[70]=q,e[71]=J,e[72]=X,e[73]=U,e[74]=D,e[75]=P,e[76]=y,e[77]=M):M=e[77],M});N.displayName="ActionList.Item";N.__docgenInfo={description:"An actionable or selectable `Item` with an optional icon and description.",methods:[],displayName:"ActionList.Item"};function De(r){return"groupMetadata"in r}const Pe={fontSize:"var(--text-body-size-medium, 14px)",lineHeight:"20px"};function Be(r="inset"){switch(r){case"full":return{headerStyle:{paddingLeft:"var(--base-size-8, 8px)",paddingRight:"var(--base-size-8, 8px)"},itemStyle:{borderRadius:0}};default:return{firstGroupStyle:{marginTop:"var(--base-size-8, 8px)"},lastGroupStyle:{marginBottom:"var(--base-size-8, 8px)"},itemStyle:{marginLeft:"var(--base-size-8, 8px)",marginRight:"var(--base-size-8, 8px)"}}}}const ie=Y.forwardRef((r,t)=>{const{style:e,...n}=r,{firstGroupStyle:c,lastGroupStyle:l,headerStyle:m,itemStyle:g}=Be(n.variant),u=s=>{const d=(("renderGroup"in s&&s.renderGroup)??n.renderGroup)||re;return ne.createElement(d,{...s,key:s.groupId})},p=(s,d,o)=>{const b="renderItem"in s&&s.renderItem||n.renderItem||N,h=("key"in s?s.key:void 0)??s.id?.toString()??o.toString();return ne.createElement(b,{showDivider:n.showItemDividers,selectionVariant:n.selectionVariant,...s,key:h,sx:{...g,...s.sx},item:d})};let f=[];if(!De(n))f=[{items:n.items.map((s,d)=>p(s,s,d)),groupId:"0"}];else{const s=n.groupMetadata.reduce((d,o)=>d.set(o.groupId,o),new Map);for(const d of n.items){const o=s.get(d.groupId),b=o?.items?.length??0;s.set(d.groupId,{...o,items:[...o?.items??[],p({showDivider:o?.showItemDividers,...o&&"renderItem"in o&&{renderItem:o.renderItem},...d},d,b)]})}f=[...s.values()]}return a.jsx(Se,{...n,ref:t,style:{...Pe,...e||{}},sx:{[`&[${xe}], &:focus-within`]:{"--item-hover-bg-override":"none","--item-hover-divider-border-color-override":"var(--borderColor-muted)"}},children:f.map(({header:s,...d},o)=>{const b=s?.variant==="filled",h=o>0&&!b;return a.jsxs(Y.Fragment,{children:[h?a.jsx(ae,{},`${d.groupId}-divider`):null,u({sx:{...o===0&&c,...o===f.length-1&&l,...o>0&&!h&&{mt:2}},...s&&{header:{...s,sx:{...m,...s.sx}}},...d})]},d.groupId)})})});ie.displayName="ActionList";ie.__docgenInfo={description:"Lists `Item`s, either grouped or ungrouped, with a `Divider` between each `Group`.",methods:[],displayName:"ActionList"};const He=Object.assign(ie,{Group:re,Item:N,Divider:ae});export{He as A,de as H,N as I,ie as L};
