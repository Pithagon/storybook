import{d as i,j as d}from"./iframe-Cfz2vXeE.js";import{R as c}from"./RelativeTime-CnUjRhzJ.js";import"./preload-helper-D9Z9MdNV.js";import"./create-component-3GntSW2q.js";const g={title:"Components/RelativeTime/Features",component:c,parameters:{layout:"fullscreen",controls:{exclude:/^(getFormatted.*|datetime|as|theme|forwardedAs|.*Callback|update)$/g}},args:{date:new Date("2020-01-01T00:00:00Z"),second:"",minute:"",hour:"",weekday:"",day:"numeric",month:"short",year:"",timeZoneName:""},argTypes:{hour:{type:{name:"enum",value:["","numeric","2-digit"]},control:{type:"select",labels:{"":"(None)"}}},minute:{type:{name:"enum",value:["","numeric","2-digit"]},control:{type:"select",labels:{"":"(None)"}}},second:{type:{name:"enum",value:["","numeric","2-digit"]},control:{type:"select",labels:{"":"(None)"}}},weekday:{type:{name:"enum",value:["","short","long","narrow"]},control:{type:"select",labels:{"":"(None)"}}},day:{type:{name:"enum",value:["","numeric","2-digit"]},control:{type:"select",labels:{"":"(None)"}}},month:{type:{name:"enum",value:["","numeric","2-digit","long","short","narrow"]},control:{type:"select",labels:{"":"(None)"}}},year:{type:{name:"enum",value:["","numeric","2-digit"]},control:{type:"select",labels:{"":"(None)"}}},timeZoneName:{type:{name:"enum",value:["","long","short","longOffset","shortOffset","longGeneric","shortGeneric"]},control:{type:"select",labels:{"":"(None)"}}},date:{control:"date"},format:{control:"text"}}},a=r=>{const e=i.c(8);let t,o;e[0]!==r?({date:t,...o}=r,e[0]=r,e[1]=t,e[2]=o):(t=e[1],o=e[2]);let n;e[3]!==t?(n=new Date(t),e[3]=t,e[4]=n):n=e[4];let m;return e[5]!==o||e[6]!==n?(m=d.jsx(c,{noTitle:!0,...o,date:n,format:"micro"}),e[5]=o,e[6]=n,e[7]=m):m=e[7],m};a.args={tense:"past"};a.argTypes={format:{control:!1}};const l=r=>{const e=i.c(5);let t;e[0]!==r?({...t}=r,e[0]=r,e[1]=t):t=e[1];let o;e[2]===Symbol.for("react.memo_cache_sentinel")?(o=new Date,e[2]=o):o=e[2];let n;return e[3]!==t?(n=d.jsx(c,{noTitle:!0,...t,date:o}),e[3]=t,e[4]=n):n=e[4],n};l.argTypes={date:{control:!1}};const s=r=>{const e=i.c(4);let t;e[0]!==r?({...t}=r,e[0]=r,e[1]=t):t=e[1];let o;return e[2]!==t?(o=d.jsx(c,{noTitle:!0,...t}),e[2]=t,e[3]=o):o=e[3],o};s.args={date:new Date("2038-01-19T03:14:08Z"),format:"elapsed",day:"",month:""};s.argTypes={date:{control:!1},format:{control:!1}};a.__docgenInfo={description:"",methods:[],displayName:"MicroFormat"};l.__docgenInfo={description:"",methods:[],displayName:"RecentTime"};s.__docgenInfo={description:"",methods:[],displayName:"CountDownTimer"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const {
    date,
    ...rest
  } = args;
  return <RelativeTime noTitle={true} {...rest} date={new Date(date)} format="micro" />;
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const {
    ...rest
  } = args;
  return <RelativeTime noTitle={true} {...rest} date={new Date()} />;
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const {
    ...rest
  } = args;
  return <RelativeTime noTitle={true} {...rest} />;
}`,...s.parameters?.docs?.source}}};const T=["MicroFormat","RecentTime","CountDownTimer"];export{s as CountDownTimer,a as MicroFormat,l as RecentTime,T as __namedExportsOrder,g as default};
