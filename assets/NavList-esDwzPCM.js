import{R as g,d as L,j as o,c as z,u as A,r as R,e as J}from"./iframe-Cfz2vXeE.js";import{$ as Q,a8 as U}from"./index.esm-C1WN7kEu.js";import{A as b,c as X,i as $,S as Y}from"./index-C-OhZ25x.js";import{u as Z}from"./useIsomorphicLayoutEffect-C_Bsqbyc.js";const ee="prc-NavList-GroupHeading-KIlSv",te={GroupHeading:ee},O=g.forwardRef((s,t)=>{const e=L.c(10);let n,a;e[0]!==s?({children:n,...a}=s,e[0]=s,e[1]=n,e[2]=a):(n=e[1],a=e[2]);let l;e[3]===Symbol.for("react.memo_cache_sentinel")?(l={container:"NavList"},e[3]=l):l=e[3];let i;e[4]!==n?(i=o.jsx(X.Provider,{value:l,children:o.jsx(b,{children:n})}),e[4]=n,e[5]=i):i=e[5];let r;return e[6]!==a||e[7]!==t||e[8]!==i?(r=o.jsx("nav",{...a,ref:t,children:i}),e[6]=a,e[7]=t,e[8]=i,e[9]=r):r=e[9],r});O.displayName="NavList";const P=g.forwardRef((s,t)=>{const e=L.c(29);let n,a,l,i;e[0]!==s?({"aria-current":n,children:a,defaultOpen:l,...i}=s,e[0]=s,e[1]=n,e[2]=a,e[3]=l,e[4]=i):(n=e[1],a=e[2],l=e[3],i=e[4]);const{depth:r}=g.useContext(E);let u,c,m;if(e[5]!==a||e[6]!==l){c=g.Children.toArray(a).find(le);let d;e[10]!==a?(d=g.Children.toArray(a).filter(se),e[10]=a,e[11]=d):d=e[11],u=d,!R.isValidElement(c)&&l&&console.error("NavList.Item must have a NavList.SubNav to use defaultOpen."),m=c&&R.isValidElement(c),e[5]=a,e[6]=l,e[7]=u,e[8]=c,e[9]=m}else u=e[7],c=e[8],m=e[9];if(m){let d;e[12]!==r?(d={"--subitem-depth":r},e[12]=r,e[13]=d):d=e[13];const v=d;let p;return e[14]!==u||e[15]!==l||e[16]!==r||e[17]!==c||e[18]!==v?(p=o.jsx(ne,{subNav:c,depth:r,defaultOpen:l,style:v,children:u}),e[14]=u,e[15]=l,e[16]=r,e[17]=c,e[18]=v,e[19]=p):p=e[19],p}const k=!!n&&n!=="false";let y;e[20]!==r?(y={"--subitem-depth":r},e[20]=r,e[21]=y):y=e[21];const N=y;let f;return e[22]!==n||e[23]!==a||e[24]!==i||e[25]!==t||e[26]!==k||e[27]!==N?(f=o.jsx(b.LinkItem,{ref:t,"aria-current":n,active:k,style:N,...i,children:a}),e[22]=n,e[23]=a,e[24]=i,e[25]=t,e[26]=k,e[27]=N,e[28]=f):f=e[28],f});P.displayName="NavList.Item";const H=g.createContext({buttonId:"",subNavId:"",isOpen:!1});function ne(s){const t=L.c(26),{children:e,subNav:n,defaultOpen:a,style:l}=s,i=A(),r=A(),[u,c]=g.useState((a||null)??!1),m=g.useRef(null),[k,y]=g.useState(!1);let N;t[0]===Symbol.for("react.memo_cache_sentinel")?(N=()=>{m.current&&m.current.querySelector("[aria-current]:not([aria-current=false])")&&(y(!0),c(!0))},t[0]=N):N=t[0];let f;t[1]!==i||t[2]!==n?(f=[n,i],t[1]=i,t[2]=n,t[3]=f):f=t[3],Z(N,f);let d;t[4]!==i||t[5]!==u||t[6]!==r?(d={buttonId:i,subNavId:r,isOpen:u},t[4]=i,t[5]=u,t[6]=r,t[7]=d):d=t[7];const v=!u&&k;let p;t[8]===Symbol.for("react.memo_cache_sentinel")?(p=()=>c(ae),t[8]=p):p=t[8];let I;t[9]===Symbol.for("react.memo_cache_sentinel")?(I=o.jsx(b.TrailingVisual,{children:o.jsx(U,{className:$.ExpandIcon})}),t[9]=I):I=t[9];let h;if(t[10]!==n){let j;t[12]===Symbol.for("react.memo_cache_sentinel")?(j={ref:m},t[12]=j):j=t[12],h=g.cloneElement(n,j),t[10]=n,t[11]=h}else h=t[11];let x;t[13]!==h?(x=o.jsx(Y,{children:h}),t[13]=h,t[14]=x):x=t[14];let q;t[15]!==i||t[16]!==e||t[17]!==u||t[18]!==l||t[19]!==r||t[20]!==v||t[21]!==x?(q=o.jsxs(b.Item,{id:i,"aria-expanded":u,"aria-controls":r,active:v,onSelect:p,style:l,children:[e,I,x]}),t[15]=i,t[16]=e,t[17]=u,t[18]=l,t[19]=r,t[20]=v,t[21]=x,t[22]=q):q=t[22];let w;return t[23]!==d||t[24]!==q?(w=o.jsx(H.Provider,{value:d,children:q}),t[23]=d,t[24]=q,t[25]=w):w=t[25],w}function ae(s){return!s}const E=g.createContext({depth:0}),T=g.forwardRef((s,t)=>{const e=L.c(10),{children:n}=s,{buttonId:a,subNavId:l}=g.useContext(H),{depth:i}=g.useContext(E);if((!a||!l)&&console.error("NavList.SubNav must be a child of a NavList.Item"),i>3)return console.error("NavList.SubNav only supports four levels of nesting"),null;const r=i+1;let u;e[0]!==r?(u={depth:r},e[0]=r,e[1]=u):u=e[1];let c;e[2]!==a||e[3]!==n||e[4]!==t||e[5]!==l?(c=o.jsx("ul",{className:$.SubGroup,id:l,"aria-labelledby":a,ref:t,children:n}),e[2]=a,e[3]=n,e[4]=t,e[5]=l,e[6]=c):c=e[6];let m;return e[7]!==u||e[8]!==c?(m=o.jsx(E.Provider,{value:u,children:c}),e[7]=u,e[8]=c,e[9]=m):m=e[9],m});T.displayName="NavList.SubNav";const C=b.LeadingVisual;C.displayName="NavList.LeadingVisual";const S=b.TrailingVisual;S.displayName="NavList.TrailingVisual";const D=b.Divider;D.displayName="NavList.Divider";const V=b.TrailingAction;V.displayName="NavList.TrailingAction";const ie=s=>{const t=L.c(11);let e,n,a;t[0]!==s?({title:a,children:e,...n}=s,t[0]=s,t[1]=e,t[2]=n,t[3]=a):(e=t[1],n=t[2],a=t[3]);let l;t[4]===Symbol.for("react.memo_cache_sentinel")?(l=o.jsx(b.Divider,{}),t[4]=l):l=t[4];let i;t[5]!==a?(i=a?o.jsx(b.GroupHeading,{as:"h3","data-component":"ActionList.GroupHeading",children:a}):null,t[5]=a,t[6]=i):i=t[6];let r;return t[7]!==e||t[8]!==n||t[9]!==i?(r=o.jsxs(o.Fragment,{children:[l,o.jsxs(b.Group,{...n,children:[i,e]})]}),t[7]=e,t[8]=n,t[9]=i,t[10]=r):r=t[10],r},W=g.forwardRef((s,t)=>{const e=L.c(23);let n,a,l,i,r;e[0]!==s?({label:i,pages:r,items:n,renderItem:l,...a}=s,e[0]=s,e[1]=n,e[2]=a,e[3]=l,e[4]=i,e[5]=r):(n=e[1],a=e[2],l=e[3],i=e[4],r=e[5]);const u=i===void 0?"Show more":i,c=r===void 0?0:r,[m,k]=g.useState(0),y=A(),N=n.length/c,f=c===0?n.length:Math.ceil(N*m),d=m===1?0:f-Math.floor(N);let v;e[6]!==f||e[7]!==m||e[8]!==d||e[9]!==y||e[10]!==n||e[11]!==l?(v=m>0?o.jsx(o.Fragment,{children:n.map((h,x)=>{const{text:q,trailingVisual:w,leadingVisual:j,trailingAction:_,...F}=h,{icon:M,label:B,...K}=_||{},G=x===d?y:void 0;if(x<f)return l?l({...h,"data-expand-focus-target":G}):R.createElement(P,{...F,key:x,"data-expand-focus-target":G},j?o.jsx(C,{children:o.jsx(j,{})}):null,q,w?o.jsx(S,{children:o.jsx(w,{})}):null,_?o.jsx(V,{...K,icon:M,label:B||""}):null)})}):null,e[6]=f,e[7]=m,e[8]=d,e[9]=y,e[10]=n,e[11]=l,e[12]=v):v=e[12];let p;e[13]!==m||e[14]!==t||e[15]!==y||e[16]!==u||e[17]!==c||e[18]!==a?(p=m<c||m===0?o.jsxs(b.Item,{as:"button","aria-expanded":"false",ref:t,onSelect:()=>{J.flushSync(()=>{k(m+1)});const h=Array.from(document.querySelectorAll(`[data-expand-focus-target="${y}"]`));h.length>0&&h[h.length-1].focus()},...a,children:[u,o.jsx(S,{children:o.jsx(Q,{})})]}):null,e[13]=m,e[14]=t,e[15]=y,e[16]=u,e[17]=c,e[18]=a,e[19]=p):p=e[19];let I;return e[20]!==v||e[21]!==p?(I=o.jsxs(o.Fragment,{children:[v,p]}),e[20]=v,e[21]=p,e[22]=I):I=e[22],I}),re=s=>{const t=L.c(10);let e,n,a;t[0]!==s?({as:a,className:e,...n}=s,t[0]=s,t[1]=e,t[2]=n,t[3]=a):(e=t[1],n=t[2],a=t[3]);const l=a===void 0?"h3":a;let i;t[4]!==e?(i=z(te.GroupHeading,e),t[4]=e,t[5]=i):i=t[5];let r;return t[6]!==l||t[7]!==n||t[8]!==i?(r=o.jsx(b.GroupHeading,{as:l,className:i,"data-component":"NavList.GroupHeading",headingWrapElement:"li",...n}),t[6]=l,t[7]=n,t[8]=i,t[9]=r):r=t[9],r},de=Object.assign(O,{Item:P,SubNav:T,LeadingVisual:C,TrailingVisual:S,TrailingAction:V,Divider:D,Group:ie,GroupExpand:W,GroupHeading:re});W.__docgenInfo={description:"",methods:[],displayName:"GroupExpand",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Show more'",computed:!1}},pages:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  text: string
  trailingVisual?: Icon | string
  leadingVisual?: Icon
  trailingAction?: ActionListTrailingActionProps
  'data-expand-focus-target'?: string
} & Omit<NavListItemProps, 'children'>`,elements:[{name:"signature",type:"object",raw:`{
  text: string
  trailingVisual?: Icon | string
  leadingVisual?: Icon
  trailingAction?: ActionListTrailingActionProps
  'data-expand-focus-target'?: string
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"trailingVisual",value:{name:"union",raw:"Icon | string",elements:[{name:"Icon"},{name:"string"}],required:!1}},{key:"leadingVisual",value:{name:"Icon",required:!1}},{key:"trailingAction",value:{name:"intersection",raw:`ElementProps & {
  icon?: React.ElementType
  label: string
  className?: string
}`,elements:[{name:"union",raw:`| {
    as?: 'button'
    href?: never
    /**
     * Specify whether the action is in a loading state.
     * Only available for button elements.
     */
    loading?: boolean
  }
| {
    as: 'a'
    href: string
    loading?: never
  }`,elements:[{name:"signature",type:"object",raw:`{
  as?: 'button'
  href?: never
  /**
   * Specify whether the action is in a loading state.
   * Only available for button elements.
   */
  loading?: boolean
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'button'",required:!1}},{key:"href",value:{name:"never",required:!1}},{key:"loading",value:{name:"boolean",required:!1},description:`Specify whether the action is in a loading state.
Only available for button elements.`}]}},{name:"signature",type:"object",raw:`{
  as: 'a'
  href: string
  loading?: never
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'a'",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"loading",value:{name:"never",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  icon?: React.ElementType
  label: string
  className?: string
}`,signature:{properties:[{key:"icon",value:{name:"ReactElementType",raw:"React.ElementType",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"className",value:{name:"string",required:!1}}]}}],required:!1}},{key:"data-expand-focus-target",value:{name:"string",required:!1}}]}},{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  children: React.ReactNode
  defaultOpen?: boolean
  href?: string
  'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false' | boolean
  inactiveText?: string
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"defaultOpen",value:{name:"boolean",required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"aria-current",value:{name:"union",raw:"'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false' | boolean",elements:[{name:"literal",value:"'page'"},{name:"literal",value:"'step'"},{name:"literal",value:"'location'"},{name:"literal",value:"'date'"},{name:"literal",value:"'time'"},{name:"literal",value:"'true'"},{name:"literal",value:"'false'"},{name:"boolean"}],required:!1}},{key:"inactiveText",value:{name:"string",required:!1}}]}},{name:"literal",value:"'children'"}],raw:"Omit<NavListItemProps, 'children'>"}]}],raw:"GroupItem[]"},description:""},renderItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: GroupItem) => React.ReactNode",signature:{arguments:[{type:{name:"intersection",raw:`{
  text: string
  trailingVisual?: Icon | string
  leadingVisual?: Icon
  trailingAction?: ActionListTrailingActionProps
  'data-expand-focus-target'?: string
} & Omit<NavListItemProps, 'children'>`,elements:[{name:"signature",type:"object",raw:`{
  text: string
  trailingVisual?: Icon | string
  leadingVisual?: Icon
  trailingAction?: ActionListTrailingActionProps
  'data-expand-focus-target'?: string
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"trailingVisual",value:{name:"union",raw:"Icon | string",elements:[{name:"Icon"},{name:"string"}],required:!1}},{key:"leadingVisual",value:{name:"Icon",required:!1}},{key:"trailingAction",value:{name:"intersection",raw:`ElementProps & {
  icon?: React.ElementType
  label: string
  className?: string
}`,elements:[{name:"union",raw:`| {
    as?: 'button'
    href?: never
    /**
     * Specify whether the action is in a loading state.
     * Only available for button elements.
     */
    loading?: boolean
  }
| {
    as: 'a'
    href: string
    loading?: never
  }`,elements:[{name:"signature",type:"object",raw:`{
  as?: 'button'
  href?: never
  /**
   * Specify whether the action is in a loading state.
   * Only available for button elements.
   */
  loading?: boolean
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'button'",required:!1}},{key:"href",value:{name:"never",required:!1}},{key:"loading",value:{name:"boolean",required:!1},description:`Specify whether the action is in a loading state.
Only available for button elements.`}]}},{name:"signature",type:"object",raw:`{
  as: 'a'
  href: string
  loading?: never
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'a'",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"loading",value:{name:"never",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  icon?: React.ElementType
  label: string
  className?: string
}`,signature:{properties:[{key:"icon",value:{name:"ReactElementType",raw:"React.ElementType",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"className",value:{name:"string",required:!1}}]}}],required:!1}},{key:"data-expand-focus-target",value:{name:"string",required:!1}}]}},{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  children: React.ReactNode
  defaultOpen?: boolean
  href?: string
  'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false' | boolean
  inactiveText?: string
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"defaultOpen",value:{name:"boolean",required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"aria-current",value:{name:"union",raw:"'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false' | boolean",elements:[{name:"literal",value:"'page'"},{name:"literal",value:"'step'"},{name:"literal",value:"'location'"},{name:"literal",value:"'date'"},{name:"literal",value:"'time'"},{name:"literal",value:"'true'"},{name:"literal",value:"'false'"},{name:"boolean"}],required:!1}},{key:"inactiveText",value:{name:"string",required:!1}}]}},{name:"literal",value:"'children'"}],raw:"Omit<NavListItemProps, 'children'>"}]},name:"item"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};O.__docgenInfo={description:"",methods:[],displayName:"NavList",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function le(s){return R.isValidElement(s)&&s.type===T}function se(s){return R.isValidElement(s)?s.type!==T&&s.type!==V:!0}export{de as N};
