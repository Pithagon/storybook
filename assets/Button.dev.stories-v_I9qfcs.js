import{j as i}from"./iframe-Cfz2vXeE.js";import{S as o,_ as a,E as u,a4 as m,e as t}from"./index.esm-C1WN7kEu.js";import{I as r}from"./IconButton-qXcIkMuV.js";import{B as n}from"./Button-3sCteC9V.js";import{S as c}from"./index-D3vEWZM2.js";import{T as p}from"./Text-BbpDCwQY.js";import"./preload-helper-D9Z9MdNV.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./anchored-position-Cz4CQZsC.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./Stack--yR6jd9X.js";const v="prc-Button-DefaultText-OdzTW",b={DefaultText:v},K={title:"Components/Button/Dev"},e=()=>i.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"1rem"},children:[i.jsx(n,{variant:"invisible",children:"Button"}),i.jsx(n,{variant:"invisible",leadingVisual:o,children:"Button"}),i.jsx(n,{variant:"invisible",trailingAction:a,children:"Button"}),i.jsx(n,{variant:"primary",count:4,children:"Button"}),i.jsx(n,{variant:"invisible",leadingVisual:u,count:4,children:"Button"}),i.jsx(n,{variant:"invisible",leadingVisual:u,trailingAction:a,count:4,children:"Button"}),i.jsx(r,{icon:a,variant:"invisible","aria-label":"Invisible"})]}),l=()=>i.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"1rem"},children:[i.jsx(n,{size:"medium",sx:{color:"firebrick",backgroundColor:"#F6F8FA"},children:"Medium Red"}),i.jsx(n,{size:"small",sx:{":hover":{color:"deepskyblue"},"@media screen and (max-width: 768px)":{color:"maroon",backgroundColor:"#F6F8FA"},"@media (min-width: 1440)":{color:"firebrick",backgroundColor:"#F6F8FA"}},children:"Red"}),i.jsx(n,{variant:"invisible",sx:{color:"firebrick",backgroundColor:"#F6F8FA"},children:"Invariant color overridden"}),i.jsx(n,{leadingVisual:m,sx:{color:"done.fg"},children:i.jsx(p,{className:b.DefaultText,children:"Close issue"})}),i.jsx(n,{size:"small",variant:"invisible",sx:{width:32,height:32,"&:focus":{outline:0,"& > span":{boxShadow:"inset 0 0 0 2px deeppink"}}},children:"Custom size"}),i.jsx(n,{size:"small",block:!0,variant:"invisible",sx:{width:320},children:"Overridden Block"}),i.jsx(n,{sx:{fontSize:32},count:4,children:"Watch"})]}),s=()=>i.jsxs(c,{direction:"horizontal",children:[i.jsxs(c,{align:"start",children:[i.jsx(n,{variant:"invisible",leadingVisual:o,trailingAction:a,trailingVisual:t,count:4,disabled:!0,children:"Invisible"}),i.jsx(n,{variant:"default",leadingVisual:o,trailingAction:a,trailingVisual:t,count:4,disabled:!0,children:"Default"}),i.jsx(n,{variant:"primary",leadingVisual:o,trailingAction:a,trailingVisual:t,count:4,disabled:!0,children:"Primary"}),i.jsx(n,{variant:"danger",leadingVisual:o,trailingAction:a,trailingVisual:t,count:4,disabled:!0,children:"Danger"})]}),i.jsxs(c,{children:[i.jsx(r,{icon:t,variant:"invisible","aria-label":"Invisible",disabled:!0}),i.jsx(r,{icon:t,variant:"default","aria-label":"Default",disabled:!0}),i.jsx(r,{icon:t,variant:"primary","aria-label":"Primary",disabled:!0}),i.jsx(r,{icon:t,variant:"danger","aria-label":"Danger",disabled:!0})]})]});e.__docgenInfo={description:"",methods:[],displayName:"InvisibleVariants"};l.__docgenInfo={description:"",methods:[],displayName:"TestSxProp"};s.__docgenInfo={description:"",methods:[],displayName:"DisabledButtonVariants"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const count = 4;
  return <div style={{
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem'
  }}>
      <Button variant="invisible">Button</Button>
      <Button variant="invisible" leadingVisual={SearchIcon}>
        Button
      </Button>
      <Button variant="invisible" trailingAction={TriangleDownIcon}>
        Button
      </Button>
      <Button variant="primary" count={count}>
        Button
      </Button>
      <Button variant="invisible" leadingVisual={EyeIcon} count={count}>
        Button
      </Button>
      <Button variant="invisible" leadingVisual={EyeIcon} trailingAction={TriangleDownIcon} count={count}>
        Button
      </Button>
      <IconButton icon={TriangleDownIcon} variant="invisible" aria-label="Invisible" />
    </div>;
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const count = 4;
  return <div style={{
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem'
  }}>
      <Button size="medium" sx={{
      color: 'firebrick',
      backgroundColor: '#F6F8FA'
    }}>
        Medium Red
      </Button>
      <Button size="small" sx={{
      ':hover': {
        color: 'deepskyblue'
      },
      [\`@media screen and (max-width: 768px)\`]: {
        color: 'maroon',
        backgroundColor: '#F6F8FA'
      },
      '@media (min-width: 1440)': {
        color: 'firebrick',
        backgroundColor: '#F6F8FA'
      }
    }}>
        Red
      </Button>
      <Button variant="invisible" sx={{
      color: 'firebrick',
      backgroundColor: '#F6F8FA'
    }}>
        Invariant color overridden
      </Button>
      <Button leadingVisual={IssueClosedIcon} sx={{
      color: 'done.fg'
    }}>
        <Text className={classes.DefaultText}>Close issue</Text>
      </Button>
      <Button size="small" variant="invisible" sx={{
      width: 32,
      height: 32,
      '&:focus': {
        outline: 0,
        '& > span': {
          boxShadow: \`inset 0 0 0 2px deeppink\`
        }
      }
    }}>
        Custom size
      </Button>
      <Button size="small" block variant="invisible" sx={{
      width: 320
    }}>
        Overridden Block
      </Button>
      <Button sx={{
      fontSize: 32
    }} count={count}>
        Watch
      </Button>
    </div>;
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Stack direction="horizontal">
      <Stack align="start">
        <Button variant="invisible" leadingVisual={SearchIcon} trailingAction={TriangleDownIcon} trailingVisual={HeartFillIcon} count={4} disabled>
          Invisible
        </Button>
        <Button variant="default" leadingVisual={SearchIcon} trailingAction={TriangleDownIcon} trailingVisual={HeartFillIcon} count={4} disabled>
          Default
        </Button>
        <Button variant="primary" leadingVisual={SearchIcon} trailingAction={TriangleDownIcon} trailingVisual={HeartFillIcon} count={4} disabled>
          Primary
        </Button>
        <Button variant="danger" leadingVisual={SearchIcon} trailingAction={TriangleDownIcon} trailingVisual={HeartFillIcon} count={4} disabled>
          Danger
        </Button>
      </Stack>
      <Stack>
        <IconButton icon={HeartFillIcon} variant="invisible" aria-label="Invisible" disabled />
        <IconButton icon={HeartFillIcon} variant="default" aria-label="Default" disabled />
        <IconButton icon={HeartFillIcon} variant="primary" aria-label="Primary" disabled />
        <IconButton icon={HeartFillIcon} variant="danger" aria-label="Danger" disabled />
      </Stack>
    </Stack>;
}`,...s.parameters?.docs?.source}}};const L=["InvisibleVariants","TestSxProp","DisabledButtonVariants"];export{s as DisabledButtonVariants,e as InvisibleVariants,l as TestSxProp,L as __namedExportsOrder,K as default};
