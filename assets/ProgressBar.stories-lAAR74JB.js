import{d as f,R as y,r as P,j as m}from"./iframe-Cfz2vXeE.js";import{P as l}from"./index-ynKK-nPk.js";import"./preload-helper-D9Z9MdNV.js";const u=["success.emphasis","accent.emphasis","done.emphasis","severe.emphasis","danger.emphasis","attention.emphasis"],C={title:"Components/ProgressBar",component:l},i=()=>{const o=f.c(1);let e;return o[0]===Symbol.for("react.memo_cache_sentinel")?(e=m.jsx(l,{"aria-label":"Upload test.png"}),o[0]=e):e=o[0],e},n=o=>{const e=f.c(17);let s,t;e[0]!==o?({sections:t,...s}=o,e[0]=o,e[1]=s,e[2]=t):(s=e[1],t=e[2]);const[g,b]=y.useState(u);let p,c;if(e[3]!==s.bg?(p=()=>{s.bg&&s.bg!==""&&b([s.bg,...u])},c=[s.bg],e[3]=s.bg,e[4]=p,e[5]=c):(p=e[4],c=e[5]),P.useEffect(p,c),t===1){let r;e[6]!==s.inline?(r={...s.inline?{width:"100px"}:{}},e[6]=s.inline,e[7]=r):r=e[7];let a;return e[8]!==s||e[9]!==r?(a=m.jsx(l,{...s,style:r,"aria-label":"Upload test.png"}),e[8]=s,e[9]=r,e[10]=a):a=e[10],a}else{let r;e[11]!==t?(r=[...Array(t).keys()],e[11]=t,e[12]=r):r=e[12];let a;return e[13]!==g||e[14]!==t||e[15]!==r?(a=m.jsx(l,{"aria-label":"Upload test.png",children:r.map(d=>m.jsx(l.Item,{progress:100/t,bg:g[d]},d))}),e[13]=g,e[14]=t,e[15]=r,e[16]=a):a=e[16],a}};n.args={progress:66,barSize:"default",inline:!1,bg:"success.emphasis",sections:1};n.argTypes={progress:{control:{type:"number"}},barSize:{control:{type:"radio"},options:["small","default","large"]},inline:{control:{type:"boolean"}},sections:{control:{type:"number",min:1,max:5,step:1}}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{bg:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},barSize:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:""},animated:{required:!1,tsType:{name:"boolean"},description:""},progress:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},sections:{required:!0,tsType:{name:"number"},description:""}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'() => <ProgressBar aria-label="Upload test.png" />',...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  sections,
  ...args
}: ProgressBarProps & {
  sections: number;
}) => {
  const [sectionColors, setSectionColors] = React.useState(sectionColorsDefault);
  useEffect(() => {
    if (args.bg && args.bg !== '') {
      setSectionColors([args.bg, ...sectionColorsDefault]);
    }
  }, [args.bg]);
  if (sections === 1) {
    return <ProgressBar {...args} style={{
      ...(args.inline ? {
        width: '100px'
      } : {})
    }} aria-label="Upload test.png" />;
  } else {
    return <ProgressBar aria-label="Upload test.png">
        {[...Array(sections).keys()].map(i => <ProgressBar.Item key={i} progress={100 / sections} bg={sectionColors[i]} />)}
      </ProgressBar>;
  }
}`,...n.parameters?.docs?.source}}};const B=["Default","Playground"];export{i as Default,n as Playground,B as __namedExportsOrder,C as default};
