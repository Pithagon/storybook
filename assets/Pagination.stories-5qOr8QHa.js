import{r as i,j as s}from"./iframe-Cfz2vXeE.js";import{P as o}from"./Pagination-DyiyLSbR.js";import"./preload-helper-D9Z9MdNV.js";import"./model-BPbuF8Ix.js";import"./useResponsiveValue-Cmf8jyBD.js";const f={title:"Components/Pagination",component:o},u=e=>{if(typeof e=="boolean")return e;if(e==="hide at narrow")return{narrow:!1};if(e==="hide at regular")return{regular:!1};if(e==="hide at wide")return{wide:!1}},r=()=>{const[e,n]=i.useState(2);return s.jsx(o,{pageCount:15,currentPage:e,onPageChange:(t,g)=>{t.preventDefault(),n(g)},showPages:{narrow:!1}})},a=({showPages:e,...n})=>s.jsx(o,{onPageChange:t=>t.preventDefault(),showPages:u(e),...n});a.args={currentPage:5,marginPageCount:1,pageCount:15,showPages:!0,surroundingPageCount:2};a.argTypes={showPages:{control:{type:"radio"},options:[!0,!1,"hide at narrow","hide at regular","hide at wide"]},hrefBuilder:{control:!1,table:{disable:!0}},onPageChange:{control:!1,table:{disable:!0}}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Playground"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(2);
  return <Pagination pageCount={15} currentPage={page} onPageChange={(e, n) => {
    e.preventDefault();
    setPage(n);
  }} showPages={{
    narrow: false
  }} />;
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  showPages,
  ...args
}) => {
  return <Pagination onPageChange={e => e.preventDefault()} showPages={parseShowPagesArg(showPages as boolean | string)} {...args} />;
}`,...a.parameters?.docs?.source}}};const h=["Default","Playground"];export{r as Default,a as Playground,h as __namedExportsOrder,f as default};
