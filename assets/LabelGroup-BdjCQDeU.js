import{R as t,b as P,j as s,q as T,d as B}from"./iframe-Cfz2vXeE.js";import{X as V}from"./index.esm-C1WN7kEu.js";import{g as A}from"./constants-gM483c7h.js";import{V as E}from"./_VisuallyHidden-CKJB9yD0.js";import{I as M}from"./IconButton-qXcIkMuV.js";import{B as C}from"./Button-3sCteC9V.js";import{g as _}from"./iterate-focusable-elements-QzROm7ZI.js";import{A as F}from"./AnchoredOverlay-DQ90Zw6u.js";const J="prc-LabelGroup-OverlayContainer-pt4uv",X="prc-LabelGroup-OverlayInner-qvwGT",D="prc-LabelGroup-CloseButton-GyJi3",k={OverlayContainer:J,OverlayInner:X,CloseButton:D},R=T.div`
  display: flex;
  flex-wrap: nowrap;
  gap: ${A("space.1")};
  line-height: 1;
  max-width: 100%;
  overflow: hidden;

  &[data-overflow='inline'] {
    flex-wrap: wrap;
  }

  &[data-list] {
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    list-style-type: none;
  }
`,Z=T.div`
  display: flex;
  align-items: center;

  /* This min-height matches the height of the expand/collapse button.
     Without it, the labels/tokens will do a slight layout shift when expanded.
     This is because the height of the first row will match the token sizes,
     but the height of the second row will be the height of the collapse button.
  */
  min-height: 28px;

  &.ItemWrapper--hidden {
    order: 9999;
    pointer-events: none;
    visibility: hidden;
  }
`,K=(c,e,i)=>i+c.right-(e.current?.getBoundingClientRect().left||0),Q=c=>{const e=B.c(7),{collapseButtonRef:i,collapseInlineExpandedChildren:a,expandButtonRef:h,hiddenItemIds:o,isOverflowShown:u,showAllTokensInline:p}=c;let l;return e[0]!==i||e[1]!==a||e[2]!==h||e[3]!==o||e[4]!==u||e[5]!==p?(l=u?s.jsx(C,{ref:i,onClick:a,size:"small",variant:"invisible",children:"Show less"}):o.length?s.jsxs(C,{ref:h,variant:"invisible",size:"small",onClick:p,children:[s.jsxs(E,{children:["Show +",o.length," more"]}),s.jsxs("span",{"aria-hidden":"true",children:["+",o.length]})]}):null,e[0]=i,e[1]=a,e[2]=h,e[3]=o,e[4]=u,e[5]=p,e[6]=l):l=e[6],l},U=c=>{const e=B.c(9),{children:i,closeOverflowOverlay:a,expandButtonRef:h,hiddenItemIds:o,isOverflowShown:u,openOverflowOverlay:p,overlayPaddingPx:l,overlayWidth:m}=c;let d;return e[0]!==i||e[1]!==a||e[2]!==h||e[3]!==o.length||e[4]!==u||e[5]!==p||e[6]!==l||e[7]!==m?(d=o.length?s.jsx(F,{open:u,onOpen:p,onClose:a,width:"auto",height:"auto",align:"start",side:"inside-right",anchorRef:h,anchorOffset:l*-1,alignmentOffset:l*-1,renderAnchor:f=>s.jsxs(C,{variant:"invisible",size:"small",...f,ref:h,children:[s.jsxs(E,{children:["Show +",o.length," more"]}),s.jsxs("span",{"aria-hidden":"true",children:["+",o.length]})]}),focusZoneSettings:{disabled:!0},children:s.jsxs("div",{className:k.OverlayContainer,style:{width:m,padding:`${l}px`},children:[s.jsx("div",{className:k.OverlayInner,children:i}),s.jsx(M,{onClick:a,icon:V,"aria-label":"Close",variant:"invisible",className:k.CloseButton})]})}):null,e[0]=i,e[1]=a,e[2]=h,e[3]=o.length,e[4]=u,e[5]=p,e[6]=l,e[7]=m,e[8]=d):d=e[8],d},L=({children:c,visibleChildCount:e,overflowStyle:i="overlay",as:a="ul",className:h})=>{const o=t.useRef(null),u=t.useRef(null),p=t.useRef(void 0),[l,m]=t.useState({}),[d,f]=t.useState(!1),[v,S]=t.useState({width:0,right:0,height:0,x:0,y:0,top:0,left:0,bottom:0,toJSON:()=>{}}),{theme:G}=P(),j=parseInt(A("space.2")(G),10),g=Object.keys(l).filter(r=>!l[r]),q=g.length&&i==="overlay"?K(v,o,j):void 0,w=t.useCallback(r=>{if(r!==null){const n=r.getBoundingClientRect();(n.width!==v.width||n.right!==v.right)&&S(n),w.current=r}},[v]),O=t.useCallback(r=>{const n=o.current?.children||[],I={};for(const y of n){const x=y.getAttribute("data-index");x&&(I[x]=parseInt(x,10)<r)}m(I)},[]),W=t.useCallback(()=>f(!0),[f]),N=t.useCallback(()=>{f(!1)},[f]),$=t.useCallback(()=>{f(!1),e&&typeof e=="number"&&O(e),setTimeout(()=>{w.current?.focus()},10)},[w,O,e]),z=t.useCallback(()=>{m({}),f(!0)},[m,f]);t.useEffect(()=>{if(!(!e||d))if(e==="auto"){const r=new IntersectionObserver(n=>{const I={};for(const y of n){const x=y.target.getAttribute("data-index");x&&(I[x]=y.isIntersecting)}m(y=>({...y,...I}))},{root:o.current,rootMargin:`0px -${v.width}px 0px 0px`,threshold:1});for(const n of o.current?.children||[])n.getAttribute("data-index")&&r.observe(n);return()=>r.disconnect()}else O(e)},[v,e,O,d]),t.useEffect(()=>{i!=="overlay"&&g.length&&(p.current=parseInt(g[0],10))},[g,i,d]),t.useEffect(()=>{if(i==="overlay")return;const r=document.querySelector(`[data-index="${p.current}"]`),n=r?_(r):null;d&&(n?n.focus():u.current?.focus())},[i,d]);const b=a==="ul"||a==="ol",H=b?"li":t.Fragment;return e?s.jsxs(R,{ref:o,"data-overflow":i==="inline"&&d?"inline":void 0,"data-list":b||void 0,className:h,as:a,children:[t.Children.map(c,(r,n)=>s.jsx(Z,{"data-index":n,className:g.includes(n.toString())?"ItemWrapper--hidden":void 0,as:b?"li":"span",children:r},n)),s.jsx(H,{children:i==="inline"?s.jsx(Q,{collapseButtonRef:u,collapseInlineExpandedChildren:$,expandButtonRef:w,hiddenItemIds:g,isOverflowShown:d,showAllTokensInline:z,totalLength:t.Children.toArray(c).length}):s.jsx(U,{closeOverflowOverlay:N,expandButtonRef:w,hiddenItemIds:g,isOverflowShown:d,openOverflowOverlay:W,overlayPaddingPx:j,overlayWidth:q,totalLength:t.Children.toArray(c).length,children:c})})]}):s.jsx(R,{"data-overflow":"inline","data-list":b||void 0,as:a,className:h,children:b?t.Children.map(c,(r,n)=>s.jsx("li",{children:r},n)):c})};L.displayName="LabelGroup";L.__docgenInfo={description:"",methods:[],displayName:"LabelGroup",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Customize the element type of the rendered container",defaultValue:{value:"'ul'",computed:!1}},overflowStyle:{required:!1,tsType:{name:"union",raw:"'inline' | 'overlay'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'overlay'"}]},description:"How hidden tokens should be shown. `'inline'` shows the hidden tokens after the visible tokens. `'overlay'` shows all tokens in an overlay that appears on top of the visible tokens.",defaultValue:{value:"'overlay'",computed:!1}},visibleChildCount:{required:!1,tsType:{name:"union",raw:"'auto' | number",elements:[{name:"literal",value:"'auto'"},{name:"number"}]},description:"How many tokens to show. `'auto'` truncates the tokens to fit in the parent container. Passing a number will truncate after that number tokens. If this is undefined, tokens will never be truncated."},className:{required:!1,tsType:{name:"string"},description:""}}};export{L};
