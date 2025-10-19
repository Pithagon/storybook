import{d as M,r as g,j as s,u as ee,c as O,q as Re,a as we}from"./iframe-Cfz2vXeE.js";import{g as Le}from"./constants-gM483c7h.js";import{A as V,c as Ee}from"./index-C-OhZ25x.js";import{u as Ae}from"./useFocusZone-BvuuCBlY.js";import{u as Ie}from"./useProvidedRefOrCreate-Pg3blKRP.js";import{u as Se}from"./useProvidedStateOrCreate-BEKIGSkE.js";import{S as se}from"./Stack--yR6jd9X.js";import{S as te}from"./SkeletonBox-ClHTzzEx.js";import{S as ke}from"./Spinner-CP1_WO7z.js";import{a as Pe}from"./Announce-rCuV3jiI.js";import{u as ce}from"./useFeatureFlag-paATTdb3.js";import{F as ne}from"./focus-zone-ZDpdvBtN.js";import{T as Fe}from"./TextInput-hhRVe1zi.js";import{V as qe}from"./VisuallyHidden-BShfgJrZ.js";import{C as Ce}from"./Checkbox-BHvnb8mU.js";function ae(n,e,{direction:a="vertical",startMargin:r=0,endMargin:i=0,behavior:l="smooth"}={}){const t=a==="vertical"?"top":"left",c=a==="vertical"?"bottom":"right",v=a==="vertical"?"scrollTop":"scrollLeft",{[t]:u,[c]:p}=n.getBoundingClientRect(),{[t]:m,[c]:T}=e.getBoundingClientRect(),h=u<m+r,R=p>T-i;if(h){const d=u-m+e[v];e.scrollTo({behavior:l,[t]:d-r})}else if(R){const d=p-T+e[v];e.scrollTo({behavior:l,[t]:d+i})}}function Ve(n){const e=M.c(3);let a,r;e[0]!==n?(a=()=>{const i=n.current;if(!i)return;const l=i.scrollTop,t=i.scrollHeight,c=l<Math.min(1,t)?l+1:l-1;i.scrollTop=c,i.scrollTop=l},r=[n],e[0]=n,e[1]=a,e[2]=r):(a=e[1],r=e[2]),g.useEffect(a,r)}const Ne="prc-FilteredActionList-LoadingSkeleton-x9WXt",We="prc-FilteredActionList-LoadingSpinner-4C8CM",je="prc-FilteredActionList-LoadingSkeletonContainer-FBx9v",U={LoadingSkeleton:Ne,LoadingSpinner:We,LoadingSkeletonContainer:je};class G{name;appearsInBody;constructor(e,a){this.name=e,this.appearsInBody=a}}const K={bodySpinner:new G("body-spinner",!0),bodySkeleton:new G("body-skeleton",!0),input:new G("input",!1)},ie=24,He=3;function de(n){const e=M.c(4),{loadingType:a,height:r}=n;switch(a){case K.bodySpinner:{let i;return e[0]===Symbol.for("react.memo_cache_sentinel")?(i=s.jsx(Me,{"data-testid":"filtered-action-list-spinner"}),e[0]=i):i=e[0],i}case K.bodySkeleton:{const i=r<ie?He:r/ie;let l;return e[1]!==i?(l=s.jsx($e,{"data-testid":"filtered-action-list-skeleton",rows:i}),e[1]=i,e[2]=l):l=e[2],l}default:{let i;return e[3]===Symbol.for("react.memo_cache_sentinel")?(i=s.jsx(s.Fragment,{}),e[3]=i):i=e[3],i}}}function Me(n){const e=M.c(4);let a;e[0]!==n?({...a}=n,e[0]=n,e[1]=a):a=e[1];let r;return e[2]!==a?(r=s.jsx("div",{className:U.LoadingSpinner,children:s.jsx(ke,{...a})}),e[2]=a,e[3]=r):r=e[3],r}function $e(n){const e=M.c(8);let a,r;e[0]!==n?({rows:r,...a}=n,e[0]=n,e[1]=a,e[2]=r):(a=e[1],r=e[2]);const i=r===void 0?10:r;let l;e[3]!==i?(l=Array.from({length:i},Be),e[3]=i,e[4]=l):l=e[4];let t;return e[5]!==a||e[6]!==l?(t=s.jsx("div",{className:U.LoadingSkeletonContainer,children:s.jsx(se,{direction:"vertical",justify:"center",gap:"condensed",...a,children:l})}),e[5]=a,e[6]=l,e[7]=t):t=e[7],t}function Be(n,e){return s.jsxs(se,{direction:"horizontal",gap:"condensed",align:"center",children:[s.jsx(te,{width:"16px",height:"16px"}),s.jsx(te,{height:"10px",width:`${Math.random()*60+20}%`,className:U.LoadingSkeleton})]},e)}de.__docgenInfo={description:"",methods:[],displayName:"FilteredActionListBodyLoader",props:{loadingType:{required:!0,tsType:{name:"FilteredActionListLoadingType"},description:""},height:{required:!0,tsType:{name:"number"},description:""}}};const _e="prc-FilteredActionList-Root-S5E74",Oe="prc-FilteredActionList-Container-2A9NQ",De="prc-FilteredActionList-ActionList-QY9ZL",ze="prc-FilteredActionList-ActionListItem-39lnB",Ge="prc-FilteredActionList-FullScreenTextInput-rCAiq",Ke="prc-FilteredActionList-SelectAllContainer-w5otq",Ue="prc-FilteredActionList-SelectAllCheckbox-dq2yL",Ze="prc-FilteredActionList-SelectAllLabel-l34LA",P={Root:_e,Container:Oe,ActionList:De,ActionListItem:ze,FullScreenTextInput:Ge,SelectAllContainer:Ke,SelectAllCheckbox:Ue,SelectAllLabel:Ze},B=500,Qe=()=>{const n=g.useRef(!0);return g.useEffect(()=>{n.current=!1},[]),n.current},le=(n,e)=>{const a=n.current,r=a?.querySelector("[data-is-active-descendant]");if(!a||!r?.textContent)return;const i=a.querySelectorAll('[role="option"]'),l=Array.from(i).indexOf(r),t=e[l],c=t?.text,v=t?.selected;return{index:l,text:c,selected:v}},Xe=(n,e,a,r,i,l)=>{const t=M.c(33),c=r===void 0?!0:r,v=i===void 0?!1:i,u=ce("primer_react_select_panel_remove_active_descendant");let p;t[0]===Symbol.for("react.memo_cache_sentinel")?(p=document.querySelector("live-region"),t[0]=p):p=t[0];const m=p;let T;t[1]!==n?(T=n.filter(Ye),t[1]=n,t[2]=T):T=t[2];const h=T.length;let R;t[3]!==c?(R=(...j)=>{const w=j;if(c)return Pe(...w)},t[3]=c,t[4]=R):R=t[4];const d=R;let E,S;t[5]!==d||t[6]!==a||t[7]!==n||t[8]!==e||t[9]!==h||t[10]!==u?(E=function(){const w=()=>{if(u){const y=`${n.length} item${n.length>1?"s":""} available, ${h} selected.`;d(y,{delayMs:B,from:m||void 0})}else window.requestAnimationFrame(()=>{const y=le(e,n);if(!y)return;const{index:L,text:q,selected:D}=y,C=["Focus on filter text box and list of items",`Focused item: ${q}`,`${D?"selected":"not selected"}`,`${L+1} of ${n.length}`].join(", ");d(C,{delayMs:B,from:m||void 0})})},A=a.current;return A?.addEventListener("focus",w),()=>A?.removeEventListener("focus",w)},S=[e,a,n,m,d,u,h],t[5]=d,t[6]=a,t[7]=n,t[8]=e,t[9]=h,t[10]=u,t[11]=E,t[12]=S):(E=t[11],S=t[12]),g.useEffect(E,S);const x=Qe();let F;t[13]!==d||t[14]!==x||t[15]!==n||t[16]!==e||t[17]!==v||t[18]!==l?.description||t[19]!==l?.title||t[20]!==h||t[21]!==u?(F=function(){if(!x){if(m?.clear(),n.length===0&&!v){d(`${l?.title}. ${l?.description}`,{delayMs:B});return}if(u){const w=`${n.length} item${n.length>1?"s":""} available, ${h} selected.`;d(w,{delayMs:B,from:m||void 0})}else window.requestAnimationFrame(()=>{const w=le(e,n);if(!w)return;const{index:A,text:y,selected:L}=w,q=["List updated",`Focused item: ${y}`,`${L?"selected":"not selected"}`,`${A+1} of ${n.length}`].join(", ");d(q,{delayMs:B,from:m||void 0})})}},t[13]=d,t[14]=x,t[15]=n,t[16]=e,t[17]=v,t[18]=l?.description,t[19]=l?.title,t[20]=h,t[21]=u,t[22]=F):F=t[22];const $=l?.title,N=l?.description;let W;t[23]!==d||t[24]!==x||t[25]!==n||t[26]!==e||t[27]!==v||t[28]!==h||t[29]!==$||t[30]!==N||t[31]!==u?(W=[d,x,n,e,m,u,$,N,v,h],t[23]=d,t[24]=x,t[25]=n,t[26]=e,t[27]=v,t[28]=h,t[29]=$,t[30]=N,t[31]=u,t[32]=W):W=t[32],g.useEffect(F,W)};function Ye(n){return n.selected}const re={startMargin:0,endMargin:8},Je=Re.div`
  box-shadow: 0 1px 0 ${Le("colors.border.default")};
  z-index: 1;
`;function ue({loading:n=!1,placeholderText:e,filterValue:a,loadingType:r=K.bodySpinner,onFilterChange:i,onListContainerRefChanged:l,onInputRefChanged:t,items:c,textInputProps:v,inputRef:u,groupMetadata:p,showItemDividers:m,message:T,messageText:h,className:R,selectionVariant:d,announcementsEnabled:E=!0,fullScreenOnNarrow:S,onSelectAllChange:x,...F}){const[$,N]=Se(a,void 0,""),W=g.useCallback(o=>{const f=o.target.value;i(f,o),N(f)},[i,N]),j=g.useRef(null),w=g.useRef(null),A=g.useRef(null),y=Ie(u),L=ce("primer_react_select_panel_remove_active_descendant"),[q,D]=g.useState(null),C=g.useRef(),Z=ee(),Q=ee(),[X,Y]=g.useState(!1),z=c.length>0&&c.every(o=>o.selected),me=!z&&c.some(o=>o.selected),pe=z?"Deselect all":"Select all",_=g.useCallback(o=>{const f=[];for(const b of c)b.groupId===o&&f.push(b);return f},[c]),he=g.useCallback(o=>{if(o.key==="ArrowDown")w.current&&(w.current.querySelector('[role="option"]')?.focus(),o.preventDefault());else if(o.key==="Enter"){let f;if(p){let b=0;for(let k=0;k<p.length&&!(_(p[k].groupId).length>0);k++)b++;const I=p[b].groupId;f=c.filter(k=>k.groupId===I)[0]}else f=c[0];f.onAction&&(f.onAction(f,o),o.preventDefault())}},[c,p,_]),fe=g.useCallback(o=>{if(o.key==="Enter"&&C.current){o.preventDefault(),o.nativeEvent.stopImmediatePropagation();const f=new KeyboardEvent(o.type,o.nativeEvent);C.current.dispatchEvent(f)}},[C]),ge=g.useCallback(o=>{D(o),l?.(o)},[l]);g.useEffect(()=>{t?.(y)},[y,t]),Ae(L?void 0:{containerRef:{current:q},bindKeys:ne.ArrowVertical|ne.PageUpDown,focusOutBehavior:"wrap",focusableElementFilter:o=>!(o instanceof HTMLInputElement),activeDescendantFocus:y,onActiveDescendantChanged:(o,f,b)=>{C.current=o,o&&A.current&&b&&ae(o,A.current,re)}},[q,L]),g.useEffect(()=>{C.current&&A.current&&ae(C.current,A.current,{...re,behavior:"auto"})},[c,y]),g.useEffect(()=>{if(L){const o=j.current;if(!o)return;const f=w.current;if(!f)return;const b=I=>{(I.target===y.current||f.contains(I.target))&&Y(!!(y.current&&y.current===document.activeElement))};return o.addEventListener("focusin",b),()=>{o.removeEventListener("focusin",b)}}},[c,y,q,L]),g.useEffect(()=>{L&&!n&&Y(!!(y.current&&y.current===document.activeElement))},[n,y,L]),Xe(c,L?w:{current:q},y,E,n,h),Ve(A);const ve=g.useCallback(o=>{x&&x(o.target.checked)},[x]);function ye(){if(n&&A.current&&r.appearsInBody)return s.jsx(de,{loadingType:r,height:A.current.clientHeight});if(T)return T;let o=0;const f=s.jsx(V,{ref:L?w:ge,showDividers:m,selectionVariant:d,...F,role:"listbox",id:Z,className:P.ActionList,children:p?.length?p.map((b,I)=>(I===o&&_(b.groupId).length===0&&o++,s.jsxs(V.Group,{children:[s.jsx(V.GroupHeading,{variant:b.header?.variant?b.header.variant:void 0,children:b.header?.title?b.header.title:`Group ${b.groupId}`}),_(b.groupId).map(({key:k,...H},J)=>{const xe=k??H.id?.toString()??J.toString();return s.jsx(oe,{className:O(P.ActionListItem,"className"in H?H.className:void 0),"data-input-focused":X?"":void 0,"data-first-child":I===o&&J===0?"":void 0,...H,renderItem:F.renderItem},xe)})]},I))):c.map(({key:b,...I},k)=>{const H=b??I.id?.toString()??k.toString();return s.jsx(oe,{className:O(P.ActionListItem,"className"in I?I.className:void 0),"data-input-focused":X?"":void 0,"data-first-child":k===0?"":void 0,...I,renderItem:F.renderItem},H)})});return L?s.jsx(Ee.Provider,{value:{container:"FilteredActionList",listRole:"listbox",selectionAttribute:"aria-selected",selectionVariant:d,enableFocusZone:!0},children:f}):f}const{className:be,...Te}=v||{};return s.jsxs("div",{ref:j,className:O(R,P.Root),"data-testid":"filtered-action-list",children:[s.jsx(Je,{children:s.jsx(Fe,{ref:y,block:!0,width:"auto",color:"fg.default",value:$,onChange:W,onKeyPress:fe,onKeyDown:L?he:()=>{},placeholder:e,role:"combobox","aria-expanded":"true","aria-autocomplete":"list","aria-controls":Z,"aria-label":e,"aria-describedby":Q,loaderPosition:"leading",loading:n&&!r.appearsInBody,className:O(be,{[P.FullScreenTextInput]:S}),...Te})}),s.jsx(qe,{id:Q,children:"Items will be filtered as you type"}),x!==void 0&&s.jsxs("div",{className:P.SelectAllContainer,children:[s.jsx(Ce,{id:"select-all-checkbox",className:P.SelectAllCheckbox,checked:z,indeterminate:me,onChange:ve}),s.jsx("label",{className:P.SelectAllLabel,htmlFor:"select-all-checkbox",children:pe})]}),s.jsx("div",{ref:A,className:P.Container,children:ye()})]})}function oe(n){const e=M.c(35);if(typeof n.renderItem=="function"){let x;return e[0]!==n?(x=n.renderItem(n),e[0]=n,e[1]=x):x=e[1],x}let a,r,i,l,t,c,v,u,p,m,T;e[2]!==n?({id:v,description:t,descriptionVariant:c,text:m,trailingVisual:i,leadingVisual:a,trailingText:T,trailingIcon:r,onAction:u,children:l,...p}=n,e[2]=n,e[3]=a,e[4]=r,e[5]=i,e[6]=l,e[7]=t,e[8]=c,e[9]=v,e[10]=u,e[11]=p,e[12]=m,e[13]=T):(a=e[3],r=e[4],i=e[5],l=e[6],t=e[7],c=e[8],v=e[9],u=e[10],p=e[11],m=e[12],T=e[13]);let h;e[14]!==n||e[15]!==u?(h=x=>{typeof u=="function"&&u(n,x)},e[14]=n,e[15]=u,e[16]=h):h=e[16];let R;e[17]!==a?(R=a?s.jsx(V.LeadingVisual,{children:s.jsx(a,{})}):null,e[17]=a,e[18]=R):R=e[18];let d;e[19]!==t||e[20]!==c?(d=t?s.jsx(V.Description,{variant:c,children:t}):null,e[19]=t,e[20]=c,e[21]=d):d=e[21];let E;e[22]!==r||e[23]!==i||e[24]!==T?(E=i?s.jsx(V.TrailingVisual,{children:typeof i!="string"&&we.isValidElementType(i)?s.jsx(i,{}):i}):r||T?s.jsxs(V.TrailingVisual,{children:[T,r&&s.jsx(r,{})]}):null,e[22]=r,e[23]=i,e[24]=T,e[25]=E):E=e[25];let S;return e[26]!==l||e[27]!==v||e[28]!==p||e[29]!==h||e[30]!==R||e[31]!==d||e[32]!==E||e[33]!==m?(S=s.jsxs(V.Item,{role:"option",onSelect:h,"data-id":v,...p,children:[R,l,m,d,E]}),e[26]=l,e[27]=v,e[28]=p,e[29]=h,e[30]=R,e[31]=d,e[32]=E,e[33]=m,e[34]=S):S=e[34],S}ue.displayName="FilteredActionList";ue.__docgenInfo={description:"",methods:[],displayName:"FilteredActionList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| Merge<React.ComponentPropsWithoutRef<'div'>, FilteredActionListItemProps>
| ((Partial<FilteredActionListItemProps> & {renderItem: RenderItemFn}) & {key?: Key})`,elements:[{name:"intersection",raw:"Omit<P1, keyof P2> & P2",elements:[{name:"Omit",elements:[{name:"unknown"},{name:"FilteredActionListItemProps"}],raw:"Omit<P1, keyof P2>"},{name:"FilteredActionListItemProps"}]},{name:"unknown"}]}],raw:"ItemInput[]"},description:"A collection of `Item` props and `Item`-level custom `Item` renderers."},role:{required:!1,tsType:{name:"union",raw:`| 'alert'
| 'alertdialog'
| 'application'
| 'article'
| 'banner'
| 'button'
| 'cell'
| 'checkbox'
| 'columnheader'
| 'combobox'
| 'complementary'
| 'contentinfo'
| 'definition'
| 'dialog'
| 'directory'
| 'document'
| 'feed'
| 'figure'
| 'form'
| 'grid'
| 'gridcell'
| 'group'
| 'heading'
| 'img'
| 'link'
| 'list'
| 'listbox'
| 'listitem'
| 'log'
| 'main'
| 'marquee'
| 'math'
| 'menu'
| 'menubar'
| 'menuitem'
| 'menuitemcheckbox'
| 'menuitemradio'
| 'navigation'
| 'none'
| 'note'
| 'option'
| 'presentation'
| 'progressbar'
| 'radio'
| 'radiogroup'
| 'region'
| 'row'
| 'rowgroup'
| 'rowheader'
| 'scrollbar'
| 'search'
| 'searchbox'
| 'separator'
| 'slider'
| 'spinbutton'
| 'status'
| 'switch'
| 'tab'
| 'table'
| 'tablist'
| 'tabpanel'
| 'term'
| 'textbox'
| 'timer'
| 'toolbar'
| 'tooltip'
| 'tree'
| 'treegrid'
| 'treeitem'`,elements:[{name:"literal",value:"'alert'"},{name:"literal",value:"'alertdialog'"},{name:"literal",value:"'application'"},{name:"literal",value:"'article'"},{name:"literal",value:"'banner'"},{name:"literal",value:"'button'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'columnheader'"},{name:"literal",value:"'combobox'"},{name:"literal",value:"'complementary'"},{name:"literal",value:"'contentinfo'"},{name:"literal",value:"'definition'"},{name:"literal",value:"'dialog'"},{name:"literal",value:"'directory'"},{name:"literal",value:"'document'"},{name:"literal",value:"'feed'"},{name:"literal",value:"'figure'"},{name:"literal",value:"'form'"},{name:"literal",value:"'grid'"},{name:"literal",value:"'gridcell'"},{name:"literal",value:"'group'"},{name:"literal",value:"'heading'"},{name:"literal",value:"'img'"},{name:"literal",value:"'link'"},{name:"literal",value:"'list'"},{name:"literal",value:"'listbox'"},{name:"literal",value:"'listitem'"},{name:"literal",value:"'log'"},{name:"literal",value:"'main'"},{name:"literal",value:"'marquee'"},{name:"literal",value:"'math'"},{name:"literal",value:"'menu'"},{name:"literal",value:"'menubar'"},{name:"literal",value:"'menuitem'"},{name:"literal",value:"'menuitemcheckbox'"},{name:"literal",value:"'menuitemradio'"},{name:"literal",value:"'navigation'"},{name:"literal",value:"'none'"},{name:"literal",value:"'note'"},{name:"literal",value:"'option'"},{name:"literal",value:"'presentation'"},{name:"literal",value:"'progressbar'"},{name:"literal",value:"'radio'"},{name:"literal",value:"'radiogroup'"},{name:"literal",value:"'region'"},{name:"literal",value:"'row'"},{name:"literal",value:"'rowgroup'"},{name:"literal",value:"'rowheader'"},{name:"literal",value:"'scrollbar'"},{name:"literal",value:"'search'"},{name:"literal",value:"'searchbox'"},{name:"literal",value:"'separator'"},{name:"literal",value:"'slider'"},{name:"literal",value:"'spinbutton'"},{name:"literal",value:"'status'"},{name:"literal",value:"'switch'"},{name:"literal",value:"'tab'"},{name:"literal",value:"'table'"},{name:"literal",value:"'tablist'"},{name:"literal",value:"'tabpanel'"},{name:"literal",value:"'term'"},{name:"literal",value:"'textbox'"},{name:"literal",value:"'timer'"},{name:"literal",value:"'toolbar'"},{name:"literal",value:"'tooltip'"},{name:"literal",value:"'tree'"},{name:"literal",value:"'treegrid'"},{name:"literal",value:"'treeitem'"}]},description:"The ARIA role describing the function of `List` component. `listbox` is a common value."},id:{required:!1,tsType:{name:"string"},description:"id to attach to the base DOM node of the list"},"aria-label":{required:!1,tsType:{name:"string"},description:"aria-label to attach to the base DOM node of the list"},renderItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: FilteredActionListItemProps) => React.ReactElement",signature:{arguments:[{type:{name:"FilteredActionListItemProps"},name:"props"}],return:{name:"ReactReactElement",raw:"React.ReactElement"}}},description:"A `List`-level custom `Item` renderer. Every `Item` within this `List`\nwithout a `Group`-level or `Item`-level custom `Item` renderer will be\nrendered using this function component."},renderGroup:{required:!1,tsType:{name:"Group"},description:"A `List`-level custom `Group` renderer. Every `Group` within this `List`\nwithout a `Group`-level custom `Item` renderer will be rendered using\nthis function component."},variant:{required:!1,tsType:{name:"union",raw:"'inset' | 'horizontal-inset' | 'full'",elements:[{name:"literal",value:"'inset'"},{name:"literal",value:"'horizontal-inset'"},{name:"literal",value:"'full'"}]},description:'Style variations. Usage is discretionary.\n\n- `"inset"` - `List` children are offset (vertically and horizontally) from `List`’s edges\n- `"full"` - `List` children are flush (vertically and horizontally) with `List` edges'},selectionVariant:{required:!1,tsType:{name:"union",raw:"'single' | 'multiple' | 'radio'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"},{name:"literal",value:"'radio'"}]},description:"For `Item`s which can be selected, whether `multiple` `Item`s or a `single` `Item` can be selected"},showItemDividers:{required:!1,tsType:{name:"boolean"},description:"Whether to display a divider above each `Item` in this `List` when it does not follow a `Header` or `Divider`."},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingType:{required:!1,tsType:{name:"FilteredActionListLoadingType"},description:"",defaultValue:{value:"new FilteredActionListLoadingType('body-spinner', true)",computed:!1}},placeholderText:{required:!1,tsType:{name:"string"},description:""},filterValue:{required:!1,tsType:{name:"string"},description:""},onFilterChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string, e: React.ChangeEvent<HTMLInputElement> | null) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"union",raw:"React.ChangeEvent<HTMLInputElement> | null",elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"null"}]},name:"e"}],return:{name:"void"}}},description:""},onListContainerRefChanged:{required:!1,tsType:{name:"signature",type:"function",raw:"(ref: HTMLElement | null) => void",signature:{arguments:[{type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},name:"ref"}],return:{name:"void"}}},description:""},onInputRefChanged:{required:!1,tsType:{name:"signature",type:"function",raw:"(ref: React.RefObject<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"ref"}],return:{name:"void"}}},description:""},textInputProps:{required:!1,tsType:{name:"Partial",elements:[{name:"Omit",elements:[{name:"intersection",raw:"Omit<A, keyof B> & B",elements:[{name:"Omit",elements:[{name:"unknown"},{name:"intersection",raw:`{
  /** @deprecated Use \`leadingVisual\` or \`trailingVisual\` prop instead */
  icon?: React.ElementType
  /** Whether the to show a loading indicator in the input */
  loading?: boolean
  /**
   * Which position to render the loading indicator
   * 'auto' (default): at the end of the input, unless a \`leadingVisual\` is passed. Then, it will render at the beginning
   * 'leading': at the beginning of the input
   * 'trailing': at the end of the input
   **/
  loaderPosition?: 'auto' | 'leading' | 'trailing'
  /** Text for screen readers to convey the loading state */
  loaderText?: string
  /**
   * A visual that renders inside the input before the typing area
   */
  leadingVisual?: React.ElementType | React.ReactNode
  /**
   * A visual that renders inside the input after the typing area
   */
  trailingVisual?: React.ElementType | React.ReactNode
  /**
   * A visual that renders inside the input after the typing area
   */
  trailingAction?: React.ReactElement<React.HTMLProps<HTMLButtonElement>>
} & Partial<
  Pick<
    StyledWrapperProps,
    | 'block'
    | 'contrast'
    | 'disabled'
    | 'monospace'
    | 'sx'
    | 'width'
    | 'maxWidth'
    | 'minWidth'
    | 'variant'
    | 'size'
    | 'validationStatus'
  >
>`,elements:[{name:"signature",type:"object",raw:`{
  /** @deprecated Use \`leadingVisual\` or \`trailingVisual\` prop instead */
  icon?: React.ElementType
  /** Whether the to show a loading indicator in the input */
  loading?: boolean
  /**
   * Which position to render the loading indicator
   * 'auto' (default): at the end of the input, unless a \`leadingVisual\` is passed. Then, it will render at the beginning
   * 'leading': at the beginning of the input
   * 'trailing': at the end of the input
   **/
  loaderPosition?: 'auto' | 'leading' | 'trailing'
  /** Text for screen readers to convey the loading state */
  loaderText?: string
  /**
   * A visual that renders inside the input before the typing area
   */
  leadingVisual?: React.ElementType | React.ReactNode
  /**
   * A visual that renders inside the input after the typing area
   */
  trailingVisual?: React.ElementType | React.ReactNode
  /**
   * A visual that renders inside the input after the typing area
   */
  trailingAction?: React.ReactElement<React.HTMLProps<HTMLButtonElement>>
}`,signature:{properties:[{key:"icon",value:{name:"ReactElementType",raw:"React.ElementType",required:!1},description:"@deprecated Use `leadingVisual` or `trailingVisual` prop instead"},{key:"loading",value:{name:"boolean",required:!1},description:"Whether the to show a loading indicator in the input"},{key:"loaderPosition",value:{name:"union",raw:"'auto' | 'leading' | 'trailing'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'leading'"},{name:"literal",value:"'trailing'"}],required:!1},description:`Which position to render the loading indicator
'auto' (default): at the end of the input, unless a \`leadingVisual\` is passed. Then, it will render at the beginning
'leading': at the beginning of the input
'trailing': at the end of the input`},{key:"loaderText",value:{name:"string",required:!1},description:"Text for screen readers to convey the loading state"},{key:"leadingVisual",value:{name:"union",raw:"React.ElementType | React.ReactNode",elements:[{name:"ReactElementType",raw:"React.ElementType"},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1},description:"A visual that renders inside the input before the typing area"},{key:"trailingVisual",value:{name:"union",raw:"React.ElementType | React.ReactNode",elements:[{name:"ReactElementType",raw:"React.ElementType"},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1},description:"A visual that renders inside the input after the typing area"},{key:"trailingAction",value:{name:"ReactReactElement",raw:"React.ReactElement<React.HTMLProps<HTMLButtonElement>>",elements:[{name:"ReactHTMLProps",raw:"React.HTMLProps<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]}],required:!1},description:"A visual that renders inside the input after the typing area"}]}},{name:"Partial",elements:[{name:"Pick",elements:[{name:"ComponentProps",elements:[{name:"TextInputWrapper"}],raw:"ComponentProps<typeof TextInputWrapper>"},{name:"union",raw:`| 'block'
| 'contrast'
| 'disabled'
| 'monospace'
| 'sx'
| 'width'
| 'maxWidth'
| 'minWidth'
| 'variant'
| 'size'
| 'validationStatus'`,elements:[{name:"literal",value:"'block'"},{name:"literal",value:"'contrast'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'monospace'"},{name:"literal",value:"'sx'"},{name:"literal",value:"'width'"},{name:"literal",value:"'maxWidth'"},{name:"literal",value:"'minWidth'"},{name:"literal",value:"'variant'"},{name:"literal",value:"'size'"},{name:"literal",value:"'validationStatus'"}]}],raw:`Pick<
  StyledWrapperProps,
  | 'block'
  | 'contrast'
  | 'disabled'
  | 'monospace'
  | 'sx'
  | 'width'
  | 'maxWidth'
  | 'minWidth'
  | 'variant'
  | 'size'
  | 'validationStatus'
>`}],raw:`Partial<
  Pick<
    StyledWrapperProps,
    | 'block'
    | 'contrast'
    | 'disabled'
    | 'monospace'
    | 'sx'
    | 'width'
    | 'maxWidth'
    | 'minWidth'
    | 'variant'
    | 'size'
    | 'validationStatus'
  >
>`}]}],raw:"Omit<A, keyof B>"},{name:"intersection",raw:`{
  /** @deprecated Use \`leadingVisual\` or \`trailingVisual\` prop instead */
  icon?: React.ElementType
  /** Whether the to show a loading indicator in the input */
  loading?: boolean
  /**
   * Which position to render the loading indicator
   * 'auto' (default): at the end of the input, unless a \`leadingVisual\` is passed. Then, it will render at the beginning
   * 'leading': at the beginning of the input
   * 'trailing': at the end of the input
   **/
  loaderPosition?: 'auto' | 'leading' | 'trailing'
  /** Text for screen readers to convey the loading state */
  loaderText?: string
  /**
   * A visual that renders inside the input before the typing area
   */
  leadingVisual?: React.ElementType | React.ReactNode
  /**
   * A visual that renders inside the input after the typing area
   */
  trailingVisual?: React.ElementType | React.ReactNode
  /**
   * A visual that renders inside the input after the typing area
   */
  trailingAction?: React.ReactElement<React.HTMLProps<HTMLButtonElement>>
} & Partial<
  Pick<
    StyledWrapperProps,
    | 'block'
    | 'contrast'
    | 'disabled'
    | 'monospace'
    | 'sx'
    | 'width'
    | 'maxWidth'
    | 'minWidth'
    | 'variant'
    | 'size'
    | 'validationStatus'
  >
>`,elements:[{name:"signature",type:"object",raw:`{
  /** @deprecated Use \`leadingVisual\` or \`trailingVisual\` prop instead */
  icon?: React.ElementType
  /** Whether the to show a loading indicator in the input */
  loading?: boolean
  /**
   * Which position to render the loading indicator
   * 'auto' (default): at the end of the input, unless a \`leadingVisual\` is passed. Then, it will render at the beginning
   * 'leading': at the beginning of the input
   * 'trailing': at the end of the input
   **/
  loaderPosition?: 'auto' | 'leading' | 'trailing'
  /** Text for screen readers to convey the loading state */
  loaderText?: string
  /**
   * A visual that renders inside the input before the typing area
   */
  leadingVisual?: React.ElementType | React.ReactNode
  /**
   * A visual that renders inside the input after the typing area
   */
  trailingVisual?: React.ElementType | React.ReactNode
  /**
   * A visual that renders inside the input after the typing area
   */
  trailingAction?: React.ReactElement<React.HTMLProps<HTMLButtonElement>>
}`,signature:{properties:[{key:"icon",value:{name:"ReactElementType",raw:"React.ElementType",required:!1},description:"@deprecated Use `leadingVisual` or `trailingVisual` prop instead"},{key:"loading",value:{name:"boolean",required:!1},description:"Whether the to show a loading indicator in the input"},{key:"loaderPosition",value:{name:"union",raw:"'auto' | 'leading' | 'trailing'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'leading'"},{name:"literal",value:"'trailing'"}],required:!1},description:`Which position to render the loading indicator
'auto' (default): at the end of the input, unless a \`leadingVisual\` is passed. Then, it will render at the beginning
'leading': at the beginning of the input
'trailing': at the end of the input`},{key:"loaderText",value:{name:"string",required:!1},description:"Text for screen readers to convey the loading state"},{key:"leadingVisual",value:{name:"union",raw:"React.ElementType | React.ReactNode",elements:[{name:"ReactElementType",raw:"React.ElementType"},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1},description:"A visual that renders inside the input before the typing area"},{key:"trailingVisual",value:{name:"union",raw:"React.ElementType | React.ReactNode",elements:[{name:"ReactElementType",raw:"React.ElementType"},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!1},description:"A visual that renders inside the input after the typing area"},{key:"trailingAction",value:{name:"ReactReactElement",raw:"React.ReactElement<React.HTMLProps<HTMLButtonElement>>",elements:[{name:"ReactHTMLProps",raw:"React.HTMLProps<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]}],required:!1},description:"A visual that renders inside the input after the typing area"}]}},{name:"Partial",elements:[{name:"Pick",elements:[{name:"ComponentProps",elements:[{name:"TextInputWrapper"}],raw:"ComponentProps<typeof TextInputWrapper>"},{name:"union",raw:`| 'block'
| 'contrast'
| 'disabled'
| 'monospace'
| 'sx'
| 'width'
| 'maxWidth'
| 'minWidth'
| 'variant'
| 'size'
| 'validationStatus'`,elements:[{name:"literal",value:"'block'"},{name:"literal",value:"'contrast'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'monospace'"},{name:"literal",value:"'sx'"},{name:"literal",value:"'width'"},{name:"literal",value:"'maxWidth'"},{name:"literal",value:"'minWidth'"},{name:"literal",value:"'variant'"},{name:"literal",value:"'size'"},{name:"literal",value:"'validationStatus'"}]}],raw:`Pick<
  StyledWrapperProps,
  | 'block'
  | 'contrast'
  | 'disabled'
  | 'monospace'
  | 'sx'
  | 'width'
  | 'maxWidth'
  | 'minWidth'
  | 'variant'
  | 'size'
  | 'validationStatus'
>`}],raw:`Partial<
  Pick<
    StyledWrapperProps,
    | 'block'
    | 'contrast'
    | 'disabled'
    | 'monospace'
    | 'sx'
    | 'width'
    | 'maxWidth'
    | 'minWidth'
    | 'variant'
    | 'size'
    | 'validationStatus'
  >
>`}]}]},{name:"literal",value:"'onChange'"}],raw:"Omit<TextInputProps, 'onChange'>"}],raw:"Partial<Omit<TextInputProps, 'onChange'>>"},description:""},inputRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},message:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},messageText:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title: string
  description: string
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}}]}},description:""},className:{required:!1,tsType:{name:"string"},description:""},announcementsEnabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},fullScreenOnNarrow:{required:!1,tsType:{name:"boolean"},description:""},onSelectAllChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}},composes:["Partial"]};export{ue as F,K as a,ae as s};
