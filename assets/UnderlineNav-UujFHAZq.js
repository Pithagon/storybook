import{A as x,d as y,c as R,j as g,q as U}from"./iframe-Cfz2vXeE.js";import{g as t}from"./constants-gM483c7h.js";const $=x`
  box-shadow: none;
  outline: 2px solid ${t("colors.accent.fg")};
`,h=o=>x`
  /* fallback :focus state */
  &:focus:not(:disabled) {
    ${$};
    outline-offset: ${o};

    // remove fallback :focus if :focus-visible is supported
    &:not(:focus-visible) {
      outline: solid 1px transparent;
    }
  }

  /* default focus state */
  &:focus-visible:not(:disabled) {
    ${$};
    outline-offset: ${o};
  }
`,j="PRC-UnderlineNav-item",S="PRC-selected",k=U.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${t("colors.border.muted")};
  &.PRC-UnderlineNav--right {
    justify-content: flex-end;

    .PRC-UnderlineNav-item {
      margin-right: 0;
      margin-left: ${t("space.3")};
    }

    .PRC-UnderlineNav-actions {
      flex: 1 1 auto;
    }
  }
  &.PRC-UnderlineNav--full {
    display: block;
  }

  .PRC-UnderlineNav-body {
    display: flex;
    margin-bottom: -1px;
  }

  .PRC-UnderlineNav-actions {
    align-self: center;
  }
`;function C(o){const e=y.c(24);let l,f,s,n,u,a,i,r;e[0]!==o?({actions:l,className:n,align:f,children:s,full:u,label:a,theme:r,...i}=o,e[0]=o,e[1]=l,e[2]=f,e[3]=s,e[4]=n,e[5]=u,e[6]=a,e[7]=i,e[8]=r):(l=e[1],f=e[2],s=e[3],n=e[4],u=e[5],a=e[6],i=e[7],r=e[8]);const b=f&&`PRC-UnderlineNav--${f}`,v=u&&"PRC-UnderlineNav--full";let m;e[9]!==n||e[10]!==b||e[11]!==v?(m=R(n,"PRC-UnderlineNav",b,v),e[9]=n,e[10]=b,e[11]=v,e[12]=m):m=e[12];const N=m;let c;e[13]!==s?(c=g.jsx("div",{className:"PRC-UnderlineNav-body",children:s}),e[13]=s,e[14]=c):c=e[14];let d;e[15]!==l?(d=l&&g.jsx("div",{className:"PRC-UnderlineNav-actions",children:l}),e[15]=l,e[16]=d):d=e[16];let p;return e[17]!==N||e[18]!==a||e[19]!==i||e[20]!==c||e[21]!==d||e[22]!==r?(p=g.jsxs(k,{className:N,"aria-label":a,theme:r,...i,children:[c,d]}),e[17]=N,e[18]=a,e[19]=i,e[20]=c,e[21]=d,e[22]=r,e[23]=p):p=e[23],p}const P=U.a.attrs(o=>({className:R(j,o.selected&&S,o.className)}))`
  padding: ${t("space.3")} ${t("space.2")};
  margin-right: ${t("space.3")};
  font-size: ${t("fontSizes.1")};
  line-height: ${t("lineHeights.default")};
  color: ${t("colors.fg.default")};
  text-align: center;
  border-bottom: 2px solid transparent;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${t("colors.fg.default")};
    text-decoration: none;
    border-bottom-color: ${t("colors.neutral.muted")};
    transition: border-bottom-color 0.2s ease;

    .PRC-UnderlineNav-octicon {
      color: ${t("colors.fg.muted")};
    }
  }

  &.PRC-selected {
    color: ${t("colors.fg.default")};
    border-bottom-color: ${t("colors.primer.border.active")};

    .PRC-UnderlineNav-octicon {
      color: ${t("colors.fg.default")};
    }
  }

  ${h("-8px")};
`;P.displayName="UnderlineNav.Link";const L=Object.assign(C,{Link:P});C.__docgenInfo={description:"",methods:[],displayName:"UnderlineNav",props:{actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},align:{required:!1,tsType:{name:"literal",value:"'right'"},description:""},full:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""}}};export{L as U};
