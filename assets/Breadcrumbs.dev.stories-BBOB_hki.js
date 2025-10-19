import{d,r as z,j as r}from"./iframe-Cfz2vXeE.js";import{B as o}from"./Breadcrumbs-DTy6lVDF.js";import{T as G}from"./TextInput-hhRVe1zi.js";import"./preload-helper-D9Z9MdNV.js";import"./index-C-OhZ25x.js";import"./Link-Dm7wEaum.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./invariant-Dix8OlSS.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./Truncate-DUc3hzfC.js";import"./index.esm-C1WN7kEu.js";import"./Tooltip-BuVThTi0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./Text-BbpDCwQY.js";import"./anchored-position-Cz4CQZsC.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./index-D3vEWZM2.js";import"./Stack--yR6jd9X.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Button-3sCteC9V.js";import"./useResizeObserver-CkcKl7_1.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./useFeatureFlag-paATTdb3.js";import"./Details-CeoVu8Bo.js";import"./useMergedRefs-CMoMpGtu.js";import"./TextInputWrapper-A6-jRRIw.js";const U="prc-Breadcrumbs-EditableTextInput-qScno",V={EditableTextInput:U},Ue={title:"Components/Breadcrumbs/Dev"},y=()=>{const e=d.c(38);let m;e[0]===Symbol.for("react.memo_cache_sentinel")?(m=[{id:1,href:"#",name:"Home"},{id:2,href:"#",name:"Docs"},{id:3,href:"#",name:"Components"}],e[0]=m):m=e[0];const[t,n]=z.useState(m);let s;e[1]!==t?(s=()=>{const i=Math.max(...t.map(q))+1,I=["Advanced","Examples","Guides","API","Tutorials","Reference"],$=I[Math.floor(Math.random()*I.length)];n([...t,{id:i,href:"#",name:`${$}-${i}`}])},e[1]=t,e[2]=s):s=e[2];const c=s;let a;e[3]!==t?(a=()=>{t.length>1&&n(t.slice(0,-1))},e[3]=t,e[4]=a):a=e[4];const T=a;let j;e[5]!==t?(j=()=>{const i=[{id:Date.now()+1,href:"#",name:"Category"},{id:Date.now()+2,href:"#",name:"Subcategory"},{id:Date.now()+3,href:"#",name:"Item"},{id:Date.now()+4,href:"#",name:"Details"},{id:Date.now()+5,href:"#",name:"Specifications"}];n([...t,...i])},e[5]=t,e[6]=j):j=e[6];const P=j;let v;e[7]===Symbol.for("react.memo_cache_sentinel")?(v=()=>{n([{id:1,href:"#",name:"Home"},{id:2,href:"#",name:"Docs"},{id:3,href:"#",name:"Components"}])},e[7]=v):v=e[7];const R=v;let w,S;e[8]===Symbol.for("react.memo_cache_sentinel")?(w={display:"flex",flexDirection:"column",gap:"16px"},S={display:"flex",gap:"8px",marginBottom:"16px"},e[8]=w,e[9]=S):(w=e[8],S=e[9]);let C;e[10]===Symbol.for("react.memo_cache_sentinel")?(C={padding:"4px 8px"},e[10]=C):C=e[10];let l;e[11]!==c?(l=r.jsx("button",{type:"button",onClick:c,style:C,children:"Add Item"}),e[11]=c,e[12]=l):l=e[12];let D;e[13]===Symbol.for("react.memo_cache_sentinel")?(D={padding:"4px 8px"},e[13]=D):D=e[13];let p;e[14]!==T?(p=r.jsx("button",{type:"button",onClick:T,style:D,children:"Remove Item"}),e[14]=T,e[15]=p):p=e[15];let W;e[16]===Symbol.for("react.memo_cache_sentinel")?(W={padding:"4px 8px"},e[16]=W):W=e[16];let h;e[17]!==P?(h=r.jsx("button",{type:"button",onClick:P,style:W,children:"Add Many Items"}),e[17]=P,e[18]=h):h=e[18];let E;e[19]===Symbol.for("react.memo_cache_sentinel")?(E=r.jsx("button",{type:"button",onClick:R,style:{padding:"4px 8px"},children:"Reset"}),e[19]=E):E=e[19];let u;e[20]!==p||e[21]!==h||e[22]!==l?(u=r.jsxs("div",{style:S,children:[l,p,h,E]}),e[20]=p,e[21]=h,e[22]=l,e[23]=u):u=e[23];let N;e[24]===Symbol.for("react.memo_cache_sentinel")?(N=r.jsx("h4",{id:"dynamic-breadcrumbs-heading",style:{margin:"0 0 8px 0"},children:"Dynamic breadcrumbs"}),e[24]=N):N=e[24];let f;if(e[25]!==t){let i;e[27]!==t.length?(i=(I,$)=>r.jsx(o.Item,{href:I.href,selected:$===t.length-1,children:I.name},I.id),e[27]=t.length,e[28]=i):i=e[28],f=t.map(i),e[25]=t,e[26]=f}else f=e[26];let b;e[29]!==f?(b=r.jsxs("div",{children:[N,r.jsx(o,{overflow:"menu-with-root",children:f})]}),e[29]=f,e[30]=b):b=e[30];let A;e[31]===Symbol.for("react.memo_cache_sentinel")?(A={marginTop:"16px",fontSize:"12px"},e[31]=A):A=e[31];let x;e[32]!==t.length?(x=r.jsxs("div",{style:A,children:["Current items: ",t.length," | Try adding/removing items to see how overflow behavior changes"]}),e[32]=t.length,e[33]=x):x=e[33];let M;return e[34]!==u||e[35]!==b||e[36]!==x?(M=r.jsxs("div",{style:w,children:[u,b,x]}),e[34]=u,e[35]=b,e[36]=x,e[37]=M):M=e[37],M},g=()=>{const e=d.c(2);let m;e[0]===Symbol.for("react.memo_cache_sentinel")?(m={width:"350px",border:"1px solid #ccc",padding:"8px"},e[0]=m):m=e[0];let t;return e[1]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx("div",{style:m,children:r.jsxs(o,{overflow:"menu",children:[r.jsx(o.Item,{href:"#",children:"Home"}),r.jsx(o.Item,{href:"#",children:"Products"}),r.jsx(o.Item,{href:"#",children:"Category"}),r.jsx(o.Item,{href:"#",children:"Subcategory"}),r.jsx(o.Item,{href:"#",selected:!0,children:"Current Page"})]})}),e[1]=t):t=e[1],t},H=e=>{const m=d.c(3),{children:t}=e;let n;m[0]===Symbol.for("react.memo_cache_sentinel")?(n={padding:"2px",border:"1px dotted #999"},m[0]=n):n=m[0];let s;return m[1]!==t?(s=r.jsx("span",{style:n,children:t}),m[1]=t,m[2]=s):s=m[2],s},k=e=>{const m=d.c(3),{children:t,condition:n}=e;let s;return m[0]!==t||m[1]!==n?(s=n?r.jsx("strong",{children:t}):r.jsx(r.Fragment,{children:t}),m[0]=t,m[1]=n,m[2]=s):s=m[2],s},O=e=>{const m=d.c(2),{children:t}=e;let n;return m[0]!==t?(n=r.jsx("span",{"data-testid":"wrapper",className:"custom-wrapper",children:t}),m[0]=t,m[1]=n):n=m[1],n},B=()=>{const e=d.c(6);let m;e[0]===Symbol.for("react.memo_cache_sentinel")?(m=r.jsx(H,{children:r.jsx(o.Item,{href:"#",children:"Wrapped Home"})}),e[0]=m):m=e[0];let t;e[1]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx(k,{condition:!1,children:r.jsx(o.Item,{href:"#",children:"Products"})}),e[1]=t):t=e[1];let n;e[2]===Symbol.for("react.memo_cache_sentinel")?(n=r.jsx(O,{children:r.jsx(o.Item,{href:"#",children:"Category"})}),e[2]=n):n=e[2];let s;e[3]===Symbol.for("react.memo_cache_sentinel")?(s=r.jsx(H,{children:r.jsx(o.Item,{href:"#",children:"Subcategory"})}),e[3]=s):s=e[3];let c;e[4]===Symbol.for("react.memo_cache_sentinel")?(c=r.jsx(k,{condition:!0,children:r.jsx(o.Item,{href:"#",children:"Item"})}),e[4]=c):c=e[4];let a;return e[5]===Symbol.for("react.memo_cache_sentinel")?(a=r.jsxs(o,{overflow:"menu",children:[m,t,n,s,c,r.jsx(O,{children:r.jsx(o.Item,{href:"#",children:"Details"})}),r.jsx(o.Item,{href:"#",selected:!0,children:"Current Page"})]}),e[5]=a):a=e[5],a},_=()=>{const e=d.c(4);let m,t,n;e[0]===Symbol.for("react.memo_cache_sentinel")?(m=r.jsx(o.Item,{href:"#",children:"Home"}),t=r.jsx(o.Item,{href:"#",children:"Documents"}),n=r.jsx(o.Item,{href:"#",children:"Project Alpha"}),e[0]=m,e[1]=t,e[2]=n):(m=e[0],t=e[1],n=e[2]);let s;return e[3]===Symbol.for("react.memo_cache_sentinel")?(s=r.jsxs(o,{children:[m,t,n,r.jsx(o.Item,{children:r.jsx(G,{defaultValue:"Untitled Document",size:"small",className:V.EditableTextInput,"aria-label":"Edit document name"})})]}),e[3]=s):s=e[3],s};y.__docgenInfo={description:"",methods:[],displayName:"DynamicChildren"};g.__docgenInfo={description:"",methods:[],displayName:"OverflowMenuNarrowContainer"};B.__docgenInfo={description:"",methods:[],displayName:"WrappedBreadcrumbItemsWithOverflow"};_.__docgenInfo={description:"",methods:[],displayName:"WithEditableNameInput"};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [items, setItems] = useState([{
    id: 1,
    href: '#',
    name: 'Home'
  }, {
    id: 2,
    href: '#',
    name: 'Docs'
  }, {
    id: 3,
    href: '#',
    name: 'Components'
  }]);
  const addItem = () => {
    const newId = Math.max(...items.map(item => item.id)) + 1;
    const names = ['Advanced', 'Examples', 'Guides', 'API', 'Tutorials', 'Reference'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    setItems([...items, {
      id: newId,
      href: '#',
      name: \`\${randomName}-\${newId}\`
    }]);
  };
  const removeItem = () => {
    if (items.length > 1) {
      setItems(items.slice(0, -1));
    }
  };
  const addMultipleItems = () => {
    const newItems = [{
      id: Date.now() + 1,
      href: '#',
      name: 'Category'
    }, {
      id: Date.now() + 2,
      href: '#',
      name: 'Subcategory'
    }, {
      id: Date.now() + 3,
      href: '#',
      name: 'Item'
    }, {
      id: Date.now() + 4,
      href: '#',
      name: 'Details'
    }, {
      id: Date.now() + 5,
      href: '#',
      name: 'Specifications'
    }];
    setItems([...items, ...newItems]);
  };
  const reset = () => {
    setItems([{
      id: 1,
      href: '#',
      name: 'Home'
    }, {
      id: 2,
      href: '#',
      name: 'Docs'
    }, {
      id: 3,
      href: '#',
      name: 'Components'
    }]);
  };
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      gap: '8px',
      marginBottom: '16px'
    }}>
        <button type="button" onClick={addItem} style={{
        padding: '4px 8px'
      }}>
          Add Item
        </button>
        <button type="button" onClick={removeItem} style={{
        padding: '4px 8px'
      }}>
          Remove Item
        </button>
        <button type="button" onClick={addMultipleItems} style={{
        padding: '4px 8px'
      }}>
          Add Many Items
        </button>
        <button type="button" onClick={reset} style={{
        padding: '4px 8px'
      }}>
          Reset
        </button>
      </div>

      <div>
        <h4 id="dynamic-breadcrumbs-heading" style={{
        margin: '0 0 8px 0'
      }}>
          Dynamic breadcrumbs
        </h4>
        <Breadcrumbs overflow="menu-with-root">
          {items.map((item, index) => <Breadcrumbs.Item key={item.id} href={item.href} selected={index === items.length - 1}>
              {item.name}
            </Breadcrumbs.Item>)}
        </Breadcrumbs>
      </div>

      <div style={{
      marginTop: '16px',
      fontSize: '12px'
    }}>
        Current items: {items.length} | Try adding/removing items to see how overflow behavior changes
      </div>
    </div>;
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '350px',
  border: '1px solid #ccc',
  padding: '8px'
}}>
    <Breadcrumbs overflow="menu">
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Products</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Category</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Subcategory</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#" selected>
        Current Page
      </Breadcrumbs.Item>
    </Breadcrumbs>
  </div>`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => <Breadcrumbs overflow="menu">
    <StyledWrapper>
      <Breadcrumbs.Item href="#">Wrapped Home</Breadcrumbs.Item>
    </StyledWrapper>
    <ConditionalWrapper condition={false}>
      <Breadcrumbs.Item href="#">Products</Breadcrumbs.Item>
    </ConditionalWrapper>
    <DataAttributeWrapper>
      <Breadcrumbs.Item href="#">Category</Breadcrumbs.Item>
    </DataAttributeWrapper>
    <StyledWrapper>
      <Breadcrumbs.Item href="#">Subcategory</Breadcrumbs.Item>
    </StyledWrapper>
    <ConditionalWrapper condition={true}>
      <Breadcrumbs.Item href="#">Item</Breadcrumbs.Item>
    </ConditionalWrapper>
    <DataAttributeWrapper>
      <Breadcrumbs.Item href="#">Details</Breadcrumbs.Item>
    </DataAttributeWrapper>
    <Breadcrumbs.Item href="#" selected>
      Current Page
    </Breadcrumbs.Item>
  </Breadcrumbs>`,...B.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => <Breadcrumbs>
    <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
    <Breadcrumbs.Item href="#">Documents</Breadcrumbs.Item>
    <Breadcrumbs.Item href="#">Project Alpha</Breadcrumbs.Item>
    <Breadcrumbs.Item>
      <TextInput defaultValue="Untitled Document" size="small" className={classes.EditableTextInput} aria-label="Edit document name" />
    </Breadcrumbs.Item>
  </Breadcrumbs>`,..._.parameters?.docs?.source}}};function q(e){return e.id}const Ve=["DynamicChildren","OverflowMenuNarrowContainer","WrappedBreadcrumbItemsWithOverflow","WithEditableNameInput"];export{y as DynamicChildren,g as OverflowMenuNarrowContainer,_ as WithEditableNameInput,B as WrappedBreadcrumbItemsWithOverflow,Ve as __namedExportsOrder,Ue as default};
