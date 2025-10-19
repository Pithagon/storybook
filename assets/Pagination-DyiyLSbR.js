import{j as g,c as P,R as d}from"./iframe-Cfz2vXeE.js";import{b as R,a as w}from"./model-BPbuF8Ix.js";import{v as N}from"./useResponsiveValue-Cmf8jyBD.js";const T="prc-Pagination-Page-yoEQf",h="prc-Pagination-PaginationContainer-yNDPO",q="prc-Pagination-TablePaginationSteps-RRjtg",c={Page:T,PaginationContainer:h,TablePaginationSteps:q},k=e=>e&&typeof e!="boolean"?Object.keys(e).filter(n=>!e[n]):e?[]:Object.keys(N);function j({pageCount:e,currentPage:n,onPageChange:s,hrefBuilder:u,marginPageCount:o,showPages:l,surroundingPageCount:r,renderPage:t}){const m=d.useCallback(i=>a=>s(a,i),[s]),p=d.useMemo(()=>R(e,n,!!l,o,r),[e,n,l,o,r]);return d.useMemo(()=>p.map(i=>{const{props:a,key:y,content:b}=w(i,u,m(i.num));if(t&&a.as!=="span")return t({key:y,children:b,number:i.num,className:c.Page,...a});const v=a.as||"a";return g.jsx(v,{className:P(c.Page),...a,children:b},y)}),[p,u,m,t])}function C({className:e,pageCount:n,currentPage:s,onPageChange:u=D,hrefBuilder:o=x,marginPageCount:l=1,showPages:r=!0,surroundingPageCount:t=2,renderPage:m,...p}){const f=j({pageCount:n,currentPage:s,onPageChange:u,hrefBuilder:o,marginPageCount:l,showPages:r,surroundingPageCount:t,renderPage:m});return g.jsx("nav",{className:P(c.PaginationContainer,e),"aria-label":"Pagination",...p,children:g.jsx("div",{className:c.TablePaginationSteps,"data-hidden-viewport-ranges":k(r).join(" "),children:f})})}function x(e){return`#${e}`}function D(){}C.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{className:{required:!1,tsType:{name:"string"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},currentPage:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent, n: number) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"},{type:{name:"number"},name:"n"}],return:{name:"void"}}},description:"",defaultValue:{value:"function noop() {}",computed:!1}},hrefBuilder:{required:!1,tsType:{name:"signature",type:"function",raw:"(n: number) => string",signature:{arguments:[{type:{name:"number"},name:"n"}],return:{name:"string"}}},description:"",defaultValue:{value:"function defaultHrefBuilder(pageNum: number) {\n  return `#${pageNum}`\n}",computed:!1}},marginPageCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},showPages:{required:!1,tsType:{name:"union",raw:"boolean | ResponsiveValue<boolean>",elements:[{name:"boolean"},{name:"signature",type:"object",raw:`{
  narrow?: TNarrow // Applies when viewport is narrow
  regular?: TRegular // Applies when viewports is regular
  wide?: TWide // Applies when viewports is wide
}`,signature:{properties:[{key:"narrow",value:{name:"TRegular",required:!1}},{key:"regular",value:{name:"boolean",required:!1}},{key:"wide",value:{name:"TRegular",required:!1}}]}}]},description:"",defaultValue:{value:"true",computed:!1}},surroundingPageCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},renderPage:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: PageProps) => React.ReactNode",signature:{arguments:[{type:{name:"intersection",raw:`{
  /* Unique key for the page number */
  key: string
  /* Children to render, typically the page number, 'Prev', or 'Next' */
  children: React.ReactNode
  /* Page number */
  number: number
  /* Default styles for the page number */
  className: string
} & Omit<PageDataProps['props'], 'as' | 'role'>`,elements:[{name:"signature",type:"object",raw:`{
  /* Unique key for the page number */
  key: string
  /* Children to render, typically the page number, 'Prev', or 'Next' */
  children: React.ReactNode
  /* Page number */
  number: number
  /* Default styles for the page number */
  className: string
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"number",value:{name:"number",required:!0}},{key:"className",value:{name:"string",required:!0}}]}},{name:"Omit",elements:[{name:"signature",raw:"PageDataProps['props']"},{name:"union",raw:"'as' | 'role'",elements:[{name:"literal",value:"'as'"},{name:"literal",value:"'role'"}]}],raw:"Omit<PageDataProps['props'], 'as' | 'role'>"}]},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};export{C as P};
