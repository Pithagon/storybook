import{d as E,u as N,c as j,j as y,R as B,q as S,r as V}from"./iframe-Cfz2vXeE.js";import{B as q,c as C}from"./ButtonBase-BlGPm-3t.js";import{d as D}from"./defaultSxProp-CTX1ZhUd.js";import{g as z}from"./Button-3sCteC9V.js";import{T as O,a as R}from"./Tooltip-BuVThTi0.js";import{g as p}from"./constants-gM483c7h.js";const X=S.span`
  position: relative;
  display: inline-block;

  &::after {
    position: absolute;
    z-index: 1000000;
    display: none;
    padding: 0.5em 0.75em;
    font: normal normal 11px/1.5 ${p("fonts.normal")};
    -webkit-font-smoothing: subpixel-antialiased;
    color: var(--tooltip-fgColor, ${p("colors.fg.onEmphasis")});
    text-align: center;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: break-word;
    white-space: pre;
    pointer-events: none;
    content: attr(aria-label);
    background: var(--tooltip-bgColor, ${p("colors.neutral.emphasisPlus")});
    border-radius: ${p("radii.2")};
    opacity: 0;
  }

  // delay animation for tooltip
  @keyframes tooltip-appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  &:hover,
  &:active,
  &:focus,
  &:focus-within {
    &::after {
      display: inline-block;
      text-decoration: none;
      animation-name: tooltip-appear;
      animation-duration: 0.1s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in;
      animation-delay: 0s;
    }
  }

  &.tooltipped-no-delay:hover,
  &.tooltipped-no-delay:active,
  &.tooltipped-no-delay:focus,
  &.tooltipped-no-delay:focus-within {
    &::after {
      animation-delay: 0s;
    }
  }

  &.tooltipped-multiline:hover,
  &.tooltipped-multiline:active,
  &.tooltipped-multiline:focus,
  &.tooltipped-multiline:focus-within {
    &::after {
      display: table-cell;
    }
  }

  // Tooltipped south
  &.tooltipped-s,
  &.tooltipped-se,
  &.tooltipped-sw {
    &::after {
      top: 100%;
      right: 50%;
      margin-top: 6px;
    }
  }

  &.tooltipped-se {
    &::after {
      right: auto;
      left: 50%;
      margin-left: -${p("space.3")};
    }
  }

  &.tooltipped-sw::after {
    margin-right: -${p("space.3")};
  }

  // Tooltips above the object
  &.tooltipped-n,
  &.tooltipped-ne,
  &.tooltipped-nw {
    &::after {
      right: 50%;
      bottom: 100%;
      margin-bottom: 6px;
    }
  }

  &.tooltipped-ne {
    &::after {
      right: auto;
      left: 50%;
      margin-left: -${p("space.3")};
    }
  }

  &.tooltipped-nw::after {
    margin-right: -${p("space.3")};
  }

  // Move the tooltip body to the center of the object.
  &.tooltipped-s::after,
  &.tooltipped-n::after {
    transform: translateX(50%);
  }

  // Tooltipped to the left
  &.tooltipped-w {
    &::after {
      right: 100%;
      bottom: 50%;
      margin-right: 6px;
      transform: translateY(50%);
    }
  }

  // tooltipped to the right
  &.tooltipped-e {
    &::after {
      bottom: 50%;
      left: 100%;
      margin-left: 6px;
      transform: translateY(50%);
    }
  }

  &.tooltipped-multiline {
    &::after {
      width: max-content;
      max-width: 250px;
      word-wrap: break-word;
      white-space: pre-line;
      border-collapse: separate;
    }

    &.tooltipped-s::after,
    &.tooltipped-n::after {
      right: auto;
      left: 50%;
      transform: translateX(-50%);
    }

    &.tooltipped-w::after,
    &.tooltipped-e::after {
      right: 100%;
    }
  }

  &.tooltipped-align-right-2::after {
    right: 0;
    margin-right: 0;
  }

  &.tooltipped-align-left-2::after {
    left: 0;
    margin-left: 0;
  }
`,_=B.createContext({});function k(r){const t=E.c(27);let e,o,i,c,m,l,d,n,s;t[0]!==r?({direction:d,children:o,className:i,text:n,noDelay:m,align:e,wrap:s,id:c,...l}=r,t[0]=r,t[1]=e,t[2]=o,t[3]=i,t[4]=c,t[5]=m,t[6]=l,t[7]=d,t[8]=n,t[9]=s):(e=t[1],o=t[2],i=t[3],c=t[4],m=t[5],l=t[6],d=t[7],n=t[8],s=t[9]);const v=d===void 0?"n":d,a=N(c),u=`tooltipped-${v}`,g=e&&`tooltipped-align-${e}-2`,h=m&&"tooltipped-no-delay",b=s&&"tooltipped-multiline";let x;t[10]!==i||t[11]!==u||t[12]!==g||t[13]!==h||t[14]!==b?(x=j(i,u,g,h,b),t[10]=i,t[11]=u,t[12]=g,t[13]=h,t[14]=b,t[15]=x):x=t[15];const w=x;let T;t[16]!==a?(T={tooltipId:a},t[16]=a,t[17]=T):T=t[17];const $=T;let f;t[18]!==o||t[19]!==w||t[20]!==l||t[21]!==n||t[22]!==a?(f=y.jsx(X,{role:"tooltip","aria-label":n,id:a,...l,className:w,children:o}),t[18]=o,t[19]=w,t[20]=l,t[21]=n,t[22]=a,t[23]=f):f=t[23];let I;return t[24]!==f||t[25]!==$?(I=y.jsx(_.Provider,{value:$,children:f}),t[24]=f,t[25]=$,t[26]=I):I=t[26],I}k.alignments=["left","right"];k.directions=["n","ne","e","se","s","sw","w","nw"];k.__docgenInfo={description:"@deprecated",methods:[],displayName:"Tooltip",props:{direction:{required:!1,tsType:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}]},description:"",defaultValue:{value:"'n'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},noDelay:{required:!1,tsType:{name:"boolean"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},wrap:{required:!1,tsType:{name:"boolean"},description:""}}};const Y=V.forwardRef(({sx:r=D,icon:t,"aria-label":e,description:o,disabled:i,tooltipDirection:c,unsafeDisableTooltip:m=!1,keyshortcuts:l,keybindingHint:d,className:n,...s},v)=>{let a=r;const{size:u="medium"}=s;r!==null&&Object.keys(r).length>0&&(a=z({size:u},r));const{tooltipId:g}=B.useContext(O),{tooltipId:h}=B.useContext(_);if(m||i||e===void 0||e===""||(g||h))return y.jsx(q,{icon:t,className:j(n,C.IconButton),"data-component":"IconButton",sx:a,type:"button","aria-label":e,disabled:i,...s,ref:v});{const w=o??e;return y.jsx(R,{ref:v,text:w,type:o?void 0:"label",direction:c,keybindingHint:d??l,children:y.jsx(q,{icon:t,className:j(n,C.IconButton),"data-component":"IconButton",sx:a,type:"button","aria-keyshortcuts":l??void 0,"aria-label":o?e:void 0,...s})})}});Y.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{sx:{defaultValue:{value:`__DEV__
? Object.freeze<BetterSystemStyleObject>({})
: {}`,computed:!1},required:!1},unsafeDisableTooltip:{defaultValue:{value:"false",computed:!1},required:!1}}};export{Y as I,k as T};
