import{r as s,j as e,R as C}from"./iframe-Cfz2vXeE.js";import{a as p,F as m}from"./FormControl-qjqH6r5D.js";import{_ as S,a0 as le,A as ee,a2 as te,S as se,az as ae,r as ie,aw as X,v as ce,j as de,V as ue,aA as me,$ as pe}from"./index.esm-C1WN7kEu.js";import{u as oe}from"./useSafeTimeout-BD3cO5TN.js";import{S as ne}from"./index-D3vEWZM2.js";import{B as h}from"./Button-3sCteC9V.js";import{T as he}from"./Text-BbpDCwQY.js";import{T as ge}from"./ToggleSwitch-CyqyfZ4u.js";import{L as J}from"./Link-Dm7wEaum.js";import{b as w}from"./SegmentedControl-DgLk0B8B.js";import"./preload-helper-D9Z9MdNV.js";import"./TextInputWrapper-A6-jRRIw.js";import"./index.esm-BZRgk2PO.js";import"./index.esm-CN46I9JX.js";import"./BoxWithFallback-BKnPTtUo.js";import"./defaultSxProp-CTX1ZhUd.js";import"./constants-gM483c7h.js";import"./Box-BgR2Y17o.js";import"./sx-BSyIY0hE.js";import"./index-C-OhZ25x.js";import"./useSlots-BdLPLn0-.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./invariant-Dix8OlSS.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./Heading-Axc3-HQM.js";import"./useFocusZone-BvuuCBlY.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./focus-zone-ZDpdvBtN.js";import"./event-listener-signal-Pp6mWBoo.js";import"./user-agent-DiCyFeS1.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./Truncate-DUc3hzfC.js";import"./Tooltip-BuVThTi0.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./anchored-position-Cz4CQZsC.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./useRenderForcingRef-B3HiJhUh.js";import"./IconButton-qXcIkMuV.js";import"./ButtonBase-BlGPm-3t.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./InputLabel-BWKIqz-Q.js";import"./TextInput-hhRVe1zi.js";import"./FilteredActionList-Lzw7hr5X.js";import"./useProvidedStateOrCreate-BEKIGSkE.js";import"./Stack--yR6jd9X.js";import"./SkeletonBox-ClHTzzEx.js";import"./useFeatureFlag-paATTdb3.js";import"./Checkbox-BHvnb8mU.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./useAnchoredPosition-IlJWxGCn.js";import"./useResizeObserver-CkcKl7_1.js";import"./Overlay-Du2pzphD.js";import"./Portal-BKCn1yDJ.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./Token-B_OnxjPX.js";import"./Textarea-DREKwwM3.js";import"./Octicon-B0A15aaM.js";import"./LinkButton-D-EvgNXE.js";import"./useResponsiveValue-Cmf8jyBD.js";import"./index-CEFMyGLK.js";import"./useMergedRefs-CMoMpGtu.js";import"./useMnemonics-D4gqZtvW.js";import"./AnchoredOverlay-DQ90Zw6u.js";import"./useFocusTrap-CL_Yl_fl.js";import"./ActionMenu-VmSenYrX.js";const Se="prc-SelectPanel-ColorCircle-T9joZ",fe="prc-SelectPanel-MutedText-46qHb",Ce="prc-SelectPanel-TextLargeBold-kRPsE",K={ColorCircle:Se,MutedText:fe,TextLargeBold:Ce},_t={title:"Components/SelectPanel/Features",component:p},b=r=>({variant:"empty",title:`No language found for \`${r}\``,body:"Adjust your search term to find other languages"}),be={variant:"empty",title:"You haven't created any projects yet",body:e.jsxs(e.Fragment,{children:[e.jsx(J,{href:"https://github.com/projects",children:"Start your first project"})," to organise your issues."]})},Ie={variant:"error",title:"Oops",body:"Something went wrong."};function A(r){return function(){return e.jsx("div",{className:K.ColorCircle,style:{backgroundColor:r,borderColor:r}})}}const u=[{leadingVisual:A("#a2eeef"),text:"enhancement",id:1},{leadingVisual:A("#d73a4a"),text:"bug",id:2},{leadingVisual:A("#0cf478"),text:"good first issue",id:3},{leadingVisual:A("#ffd78e"),text:"design",id:4},{leadingVisual:A("#ff0000"),text:"blocker",id:5},{leadingVisual:A("#a4f287"),text:"backend",id:6},{leadingVisual:A("#8dc6fc"),text:"frontend",id:7}],v=()=>{const[r,i]=s.useState(u.slice(1,3)),[o,c]=s.useState(""),n=u.filter(t=>t.text.toLowerCase().startsWith(o.toLowerCase())),[d,l]=s.useState(!1);return e.jsxs(m,{children:[e.jsx(m.Label,{children:"Labels"}),e.jsx(p,{title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:t,...a})=>e.jsx(h,{trailingAction:S,...a,"aria-haspopup":"dialog",children:t}),open:d,onOpenChange:l,items:n,selected:r,onSelectedChange:i,onFilterChange:c,showItemDividers:!0,width:"medium",message:n.length===0?b(o):void 0})]})},P=()=>{const[r,i]=s.useState(u.slice(1,3)),[o,c]=s.useState(""),n=u.filter(t=>t.text.toLowerCase().startsWith(o.toLowerCase())),[d,l]=s.useState(!1);return e.jsxs(m,{children:[e.jsx(m.Label,{children:"Labels"}),e.jsx(p,{title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:t,...a})=>e.jsx(h,{trailingAction:S,...a,"aria-haspopup":"dialog",children:t}),placeholderText:"Filter labels",open:d,onOpenChange:l,items:n,selected:r,onSelectedChange:i,onFilterChange:c,width:"medium",message:n.length===0?b(o):void 0})]})},W=()=>{const[r,i]=s.useState(u[0]),[o,c]=s.useState(""),n=u.filter(t=>t.text.toLowerCase().startsWith(o.toLowerCase())),[d,l]=s.useState(!1);return e.jsxs(m,{children:[e.jsx(m.Label,{children:"Label"}),e.jsx(p,{renderAnchor:({children:t,...a})=>e.jsx(h,{trailingAction:S,...a,children:t??"Select Labels"}),placeholder:"Select labels",open:d,onOpenChange:l,items:n,selected:r,onSelectedChange:i,onFilterChange:c,width:"medium",message:n.length===0?b(o):void 0})]})},B=()=>{const[r,i]=s.useState(u.slice(1,3)),[o,c]=s.useState(""),n=u.filter(t=>t.text.toLowerCase().startsWith(o.toLowerCase())),[d,l]=s.useState(!1);return e.jsxs(m,{children:[e.jsx(m.Label,{children:"Labels"}),e.jsx(p,{title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:t,...a})=>e.jsx(h,{trailingAction:S,...a,"aria-haspopup":"dialog",children:t}),open:d,onOpenChange:l,items:n,selected:r,onSelectedChange:i,onFilterChange:c,width:"medium",message:n.length===0?b(o):void 0})]})},N=()=>{const[r,i]=s.useState(u.slice(1,3)),[o,c]=s.useState(""),n=u.map((t,a)=>a===3?{...t,disabled:!0}:t),[d,l]=s.useState(!1);return e.jsxs(m,{children:[e.jsx(m.Label,{children:"Labels"}),e.jsx(p,{title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:t,...a})=>e.jsx(h,{trailingAction:S,...a,"aria-haspopup":"dialog",children:t}),open:d,onOpenChange:l,items:n,selected:r,onSelectedChange:i,onFilterChange:c,width:"medium",message:n.length===0?b(o):void 0})]})},R=()=>{const[r,i]=s.useState(u.slice(1,3)),[o,c]=s.useState(""),n=u.filter(a=>a.text.toLowerCase().startsWith(o.toLowerCase())),[d,l]=s.useState(!1),t=s.useRef(null);return e.jsxs(m,{children:[e.jsx(m.Label,{children:"Labels"}),e.jsx(h,{trailingAction:S,ref:t,onClick:()=>l(!d),children:r.map(a=>a.text).join(", ")||"Select labels"}),e.jsx(p,{renderAnchor:null,anchorRef:t,open:d,onOpenChange:l,items:n,selected:n,onSelectedChange:i,onFilterChange:c,width:"medium",message:n.length===0?b(o):void 0})]})},k=()=>{const[r,i]=s.useState(u.slice(1,3)),[o,c]=s.useState(""),n=u.filter(t=>t.text.toLowerCase().startsWith(o.toLowerCase())),[d,l]=s.useState(!1);return e.jsxs(m,{children:[e.jsx(m.Label,{children:"Labels"}),e.jsx(p,{renderAnchor:({children:t,...a})=>e.jsx(h,{trailingAction:S,...a,children:t}),placeholder:"Select labels",open:d,onOpenChange:l,items:n,selected:r,onSelectedChange:i,onFilterChange:c,overlayProps:{width:"small",height:"medium"},secondaryAction:e.jsx(p.SecondaryActionButton,{children:"Edit labels"}),width:"medium",message:n.length===0?b(o):void 0})]})},E=()=>{const[r,i]=s.useState(u.slice(1,3)),[o,c]=s.useState(""),n=u.filter(t=>t.text.toLowerCase().startsWith(o.toLowerCase())),[d,l]=s.useState(!1);return e.jsxs(m,{children:[e.jsx(m.Label,{children:"Labels"}),e.jsx(p,{renderAnchor:({children:t,...a})=>e.jsx(h,{trailingAction:S,...a,children:t}),placeholder:"Select labels",open:d,onOpenChange:l,items:n,selected:r,onSelectedChange:i,onFilterChange:c,overlayProps:{width:"small",height:"medium"},secondaryAction:e.jsx(p.SecondaryActionLink,{href:"#",children:"Edit labels"}),width:"medium",message:n.length===0?b(o):void 0})]})},V=()=>{const[r,i]=s.useState(u.slice(1,3)),[o,c]=s.useState(""),n=u.filter(f=>f.text.toLowerCase().startsWith(o.toLowerCase())),[d,l]=s.useState(!1),[t,a]=s.useState(0),g=[{variant:"info",text:"Try a different search term."},{variant:"warning",text:e.jsxs(e.Fragment,{children:["You have reached the limit of assignees on your free account."," ",e.jsx(J,{href:"/upgrade",children:"Upgrade your account."})]})},{variant:"error",text:e.jsxs(e.Fragment,{children:["We couldn't load all collaborators. Try again or if the problem persists,"," ",e.jsx(J,{href:"/support",children:"contact support"})]})}];return e.jsxs(ne,{align:"start",children:[e.jsxs(m,{children:[e.jsx(m.Label,{children:"Notice variant"}),e.jsxs(w,{"aria-label":"Notice variant",onChange:a,children:[e.jsx(w.Button,{defaultSelected:!0,"aria-label":"Info",leadingIcon:le,children:"Info notice"}),e.jsx(w.Button,{"aria-label":"Warning",leadingIcon:ee,children:"Warning notice"}),e.jsx(w.Button,{"aria-label":"Error",leadingIcon:te,children:"Error notice"})]})]}),e.jsxs(m,{children:[e.jsx(m.Label,{children:"SelectPanel with notice"}),e.jsx(p,{renderAnchor:({children:f,...I})=>e.jsx(h,{trailingAction:S,...I,children:f}),placeholder:"Select labels",open:d,onOpenChange:l,items:n,selected:r,onSelectedChange:i,onFilterChange:c,overlayProps:{width:"small",height:"medium"},width:"medium",notice:g[t]})]})]})},xe=[{id:"1",key:1,leadingVisual:se,text:"item 1",groupId:"1"},{id:"2",key:2,leadingVisual:ae,text:"Item 2",description:"Some description",descriptionVariant:"block",groupId:"1"},{id:"3",key:3,leadingVisual:ie,text:"Item 3",description:"Some description as well",descriptionVariant:"block",groupId:"2"},{id:"4",key:4,leadingVisual:X,text:"Item 4",groupId:"2"},{id:"5",key:5,leadingVisual:X,text:"Save sort and filters to new view",groupId:"1"},{id:"6",key:6,leadingVisual:ce,text:"View settings",groupId:"0"},{id:"7",key:7,leadingVisual:de,text:"Rename",groupId:"0"},{id:"8",key:8,leadingVisual:ue,text:"Duplicate",groupId:"0"}],Le=[{groupId:"0",header:{title:"Repos",variant:"filled"}},{groupId:"1",header:{title:"Live query",variant:"filled"}},{groupId:"2",header:{title:"Layout",variant:"filled"}}],M=()=>{const[r,i]=s.useState([]),[o,c]=s.useState(""),n=xe.filter(t=>t.text?.toLowerCase().startsWith(o.toLowerCase())),[d,l]=s.useState(!1);return e.jsxs(m,{children:[e.jsx(m.Label,{children:"Options"}),e.jsx(p,{title:"Attach files and symbols",subtitle:"Choose which files and symbols you want to chat about. Use fewer references for more accurate responses.",renderAnchor:({children:t,...a})=>e.jsx(h,{trailingAction:S,...a,children:t}),placeholder:"Select options",groupMetadata:Le,open:d,onOpenChange:l,items:n,selected:r,onSelectedChange:i,onFilterChange:c,overlayProps:{width:"large",height:"xlarge"},width:"medium",message:n.length===0?b(o):void 0})]})},_=()=>{const[r,i]=s.useState(u.slice(1,3)),[o,c]=s.useState(""),n=u.filter(t=>t.text.toLowerCase().startsWith(o.toLowerCase())),[d,l]=s.useState(!1);return e.jsxs(m,{children:[e.jsx(m.Label,{visuallyHidden:!0,children:"Labels"}),e.jsx(p,{title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:t,...a})=>e.jsx(h,{trailingAction:S,...a,"aria-haspopup":"dialog",children:t}),open:d,onOpenChange:l,items:n,selected:r,onSelectedChange:i,onFilterChange:c,width:"medium",message:n.length===0?b(o):void 0})]})},D=()=>{const[r,i]=s.useState(u.slice(1,3)),[o,c]=s.useState(""),n=u.filter(t=>t.text.toLowerCase().startsWith(o.toLowerCase())),[d,l]=s.useState(!1);return e.jsx(p,{renderAnchor:({children:t,...a})=>e.jsxs(h,{...a,trailingAction:S,"aria-haspopup":"dialog",children:[e.jsx("span",{className:K.MutedText,children:"Choices:"})," ",t||"None selected"]}),open:d,onOpenChange:l,items:n,selected:r,onSelectedChange:i,onFilterChange:c,width:"medium",message:n.length===0?b(o):void 0})},Y={render:({initialLoadingType:r,height:i})=>{const[o,c]=C.useState([]),[n,d]=C.useState([]),[l,t]=s.useState(!1),a=s.useRef(null),{safeSetTimeout:g,safeClearTimeout:f}=oe(),[I,L]=s.useState(!0),[F,O]=s.useState(""),j=x=>{a.current&&(f(a.current),O(x)),L(!0),a.current=g(()=>{d(u.filter(T=>T.text.toLowerCase().startsWith(x.toLowerCase()))),L(!1)},2e3)};s.useEffect(()=>{a.current=g(()=>{d(u.filter(x=>x.text.toLowerCase().startsWith(F.toLowerCase()))),L(!1)},2e3)},[]);const y=x=>{t(x),j("")};return e.jsx(p,{title:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:x,"aria-labelledby":T,...re})=>e.jsx(h,{trailingAction:S,"aria-labelledby":` ${T}`,...re,"aria-haspopup":"dialog",children:x??"Select Labels"}),placeholderText:"Filter labels",open:l,onOpenChange:y,items:n,selected:o,onSelectedChange:c,onFilterChange:j,showItemDividers:!0,height:i,initialLoadingType:r,width:"medium",loading:I,message:n.length===0?b(F):void 0})},args:{initialLoadingType:"spinner",height:"medium"},argTypes:{initialLoadingType:{control:"select",options:["spinner","skeleton"]},height:{control:"select",options:["auto","xsmall","small","medium","large","xlarge"]}}},q=()=>{const[r,i]=C.useState([]),[o,c]=C.useState([]),[n,d]=s.useState(!1),[l,t]=s.useState(""),a=(F="")=>{t(F),setTimeout(()=>{c([])},0)},[g,f]=C.useState(!1),I=C.useCallback(()=>{f(!g)},[f,g]);function L(){return g?Ie:l?b(l):be}return e.jsxs(e.Fragment,{children:[e.jsxs(he,{id:"toggle",className:K.TextLargeBold,children:["Enable Error State :",g?"On":"Off"]}),e.jsx(ge,{onClick:I,checked:g,"aria-labelledby":"toggle"}),e.jsx(p,{title:"Set projects",renderAnchor:({children:F,"aria-labelledby":O,...j})=>e.jsx(h,{trailingAction:S,"aria-labelledby":` ${O}`,...j,children:F??"Select Labels"}),open:n,onOpenChange:d,items:o,selected:r,onSelectedChange:i,onFilterChange:a,width:"medium",height:"large",message:L()})]})},Z={render:({initialLoadingType:r,height:i})=>{const[o,c]=C.useState([]),[n,d]=C.useState([]),[l,t]=C.useState(""),[a,g]=s.useState(!1),f=s.useRef(null),{safeSetTimeout:I,safeClearTimeout:L}=oe(),[F,O]=s.useState(!0),j=y=>{t(y),f.current&&L(f.current),O(!0),f.current=I(()=>{d(u.filter(x=>x.text.toLowerCase().startsWith(y.toLowerCase()))),O(!1)},2e3)};return s.useEffect(()=>{f.current=I(()=>{d(u.filter(y=>y.text.toLowerCase().startsWith(l.toLowerCase()))),O(!1)},2e3)},[]),e.jsx(p,{title:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:y,"aria-labelledby":x,...T})=>e.jsx(h,{trailingAction:S,"aria-labelledby":` ${x}`,...T,"aria-haspopup":"dialog",children:y??"Select Labels"}),placeholderText:"Filter labels",open:a,onOpenChange:g,items:n,selected:o,onSelectedChange:c,onFilterChange:j,showItemDividers:!0,initialLoadingType:r,loading:F,height:i,overlayProps:{maxHeight:i==="auto"||i==="initial"?"xlarge":i},message:n.length===0?b(l):void 0})},args:{initialLoadingType:"spinner",height:"medium"},argTypes:{initialLoadingType:{control:"select",options:["spinner","skeleton"]},height:{control:"select",options:["auto","xsmall","small","medium","large","xlarge"]}}},U=()=>{const[r,i]=C.useState(u.slice(1,3)),[o,c]=C.useState(r),[n,d]=C.useState(""),l=u.filter(g=>g.text.toLowerCase().startsWith(n.toLowerCase())),[t,a]=s.useState(!1);return C.useEffect(()=>{t||i(o)},[t,o]),e.jsxs(m,{children:[e.jsx(m.Label,{children:"Labels"}),e.jsx(p,{title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:g,...f})=>e.jsx(h,{trailingAction:S,...f,"aria-haspopup":"dialog",children:g}),open:t,onOpenChange:a,items:l,selected:o,onSelectedChange:c,onCancel:()=>c(r),onFilterChange:d,width:"medium"})]})},z=()=>{const[r,i]=C.useState(u.slice(1,3)),[o,c]=C.useState(r),[n,d]=C.useState(""),[l,t]=s.useState(!1);C.useEffect(()=>{l||i(o)},[l,o]);const a=u.filter(g=>g.text.toLowerCase().startsWith(n.toLowerCase()));return e.jsx(p,{variant:"modal",title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:g,...f})=>e.jsx(h,{trailingAction:S,...f,"aria-haspopup":"dialog",children:g}),open:l,onOpenChange:t,items:a,selected:o,onSelectedChange:c,onCancel:()=>c(r),onFilterChange:d,width:"medium"})},$=()=>{const[r,i]=s.useState(void 0),[o,c]=s.useState(""),[n,d]=s.useState(!1),l=u.filter(t=>t.text.toLowerCase().startsWith(o.toLowerCase()));return e.jsx(p,{variant:"modal",title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:t,...a})=>e.jsx(h,{trailingAction:S,...a,"aria-haspopup":"dialog",children:t}),open:n,onOpenChange:d,items:l,selected:r,onSelectedChange:i,onCancel:()=>{},onFilterChange:c,width:"medium"})},we=[...u,{leadingVisual:A("#00ff00"),text:"request",id:9,inactiveText:"Currently inactive due to an outage",description:"New feature or request",descriptionVariant:"block"}],H=()=>{const[r,i]=s.useState(u.slice(1,3)),[o,c]=s.useState(""),n=we.filter(t=>t.text?.toLowerCase().startsWith(o.toLowerCase())),[d,l]=s.useState(!1);return e.jsxs(m,{children:[e.jsx(m.Label,{children:"Labels"}),e.jsx(p,{title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:t,...a})=>e.jsx(h,{trailingAction:S,...a,"aria-haspopup":"dialog",children:t}),open:d,onOpenChange:l,items:n,selected:r,onSelectedChange:i,onFilterChange:c,width:"medium",message:n.length===0?b(o):void 0})]})},G=()=>{const[r,i]=s.useState([]),[o,c]=s.useState(""),[n,d]=s.useState(!1),[l,t]=s.useState(0),a=[void 0,{variant:"empty",title:"No labels found",body:"Try adjusting your search or create a new label",icon:me,action:e.jsx(h,{variant:"default",size:"small",leadingVisual:pe,onClick:()=>{},children:"Create new label"})},{variant:"error",title:"Failed to load labels",body:e.jsxs(e.Fragment,{children:["Check your network connection and try again or ",e.jsx(J,{href:"/support",children:"contact support"})]})},{variant:"warning",title:"Some labels may be outdated",body:"Consider refreshing to get the latest data"}],f=(l===0?u.slice(0,3):[]).filter(I=>I.text.toLowerCase().startsWith(o.toLowerCase()));return s.useEffect(()=>{c("")},[l]),e.jsxs(ne,{align:"start",children:[e.jsxs(m,{children:[e.jsx(m.Label,{children:"Message variant"}),e.jsxs(w,{"aria-label":"Message variant",onChange:t,children:[e.jsx(w.Button,{defaultSelected:!0,"aria-label":"Default message",children:"Default message"}),e.jsx(w.Button,{"aria-label":"Empty",leadingIcon:se,children:"Empty"}),e.jsx(w.Button,{"aria-label":"Error",leadingIcon:te,children:"Error"}),e.jsx(w.Button,{"aria-label":"Warning",leadingIcon:ee,children:"Warning"})]})]}),e.jsxs(m,{children:[e.jsx(m.Label,{children:"SelectPanel with message"}),e.jsx(p,{renderAnchor:({children:I,...L})=>e.jsx(h,{trailingAction:S,...L,children:I}),placeholder:"Select labels",open:n,onOpenChange:d,items:f,selected:r,onSelectedChange:i,onFilterChange:c,overlayProps:{width:"small",height:"medium"},width:"medium",message:a[l],filterValue:o})]})]})},Q=()=>{const[r,i]=s.useState([]),[o,c]=s.useState(""),n=u.filter(t=>t.text.toLowerCase().startsWith(o.toLowerCase())),[d,l]=s.useState(!1);return e.jsxs(m,{children:[e.jsx(m.Label,{children:"Labels"}),e.jsx(p,{title:"Select labels",placeholder:"Select labels",subtitle:"Use labels to organize issues and pull requests",renderAnchor:({children:t,...a})=>e.jsx(h,{trailingAction:S,...a,"aria-haspopup":"dialog",children:t}),open:d,onOpenChange:l,items:n,selected:r,onSelectedChange:i,onFilterChange:c,width:"medium",showSelectAll:!0,message:n.length===0?{variant:"empty",title:`No language found for \`${o}\``,body:"Adjust your search term to find other languages"}:void 0})]})};v.__docgenInfo={description:"",methods:[],displayName:"WithItemDividers"};P.__docgenInfo={description:"",methods:[],displayName:"WithPlaceholderForSearchInput"};W.__docgenInfo={description:"",methods:[],displayName:"SingleSelect"};B.__docgenInfo={description:"",methods:[],displayName:"MultiSelect"};N.__docgenInfo={description:"",methods:[],displayName:"WithDisabledItem"};R.__docgenInfo={description:"",methods:[],displayName:"WithExternalAnchor"};k.__docgenInfo={description:"",methods:[],displayName:"WithSecondaryActionButton"};E.__docgenInfo={description:"",methods:[],displayName:"WithSecondaryActionLink"};V.__docgenInfo={description:"",methods:[],displayName:"WithNotice"};M.__docgenInfo={description:"",methods:[],displayName:"WithGroups"};_.__docgenInfo={description:"",methods:[],displayName:"WithLabelVisuallyHidden"};D.__docgenInfo={description:"",methods:[],displayName:"WithLabelInternally"};q.__docgenInfo={description:"",methods:[],displayName:"CustomisedNoInitialItems"};U.__docgenInfo={description:"",methods:[],displayName:"WithOnCancel"};z.__docgenInfo={description:"",methods:[],displayName:"MultiSelectModal"};$.__docgenInfo={description:"",methods:[],displayName:"SingleSelectModal"};H.__docgenInfo={description:"",methods:[],displayName:"WithInactiveItems"};G.__docgenInfo={description:"",methods:[],displayName:"WithMessage"};Q.__docgenInfo={description:"",methods:[],displayName:"WithSelectAll"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel title="Select labels" placeholder="Select labels" // button text when no items are selected
    subtitle="Use labels to organize issues and pull requests" renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
            {children}
          </Button>} open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} showItemDividers={true} width="medium" message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...v.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel title="Select labels" placeholder="Select labels" // button text when no items are selected
    subtitle="Use labels to organize issues and pull requests" renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
            {children}
          </Button>} placeholderText="Filter labels" open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} width="medium" message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...P.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput | undefined>(items[0]);
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Label</FormControl.Label>
      <SelectPanel renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps}>
            {children ?? 'Select Labels'}
          </Button>} placeholder="Select labels" // button text when no items are selected
    open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} width="medium" message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...W.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel title="Select labels" placeholder="Select labels" subtitle="Use labels to organize issues and pull requests" renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
            {children}
          </Button>} open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} width="medium" message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...B.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.map((item, index) => index === 3 ? {
    ...item,
    disabled: true
  } : item);
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel title="Select labels" placeholder="Select labels" subtitle="Use labels to organize issues and pull requests" renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
            {children}
          </Button>} open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} width="medium" message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <Button trailingAction={TriangleDownIcon} ref={buttonRef} onClick={() => setOpen(!open)}>
        {selected.map(selectedItem => selectedItem.text).join(', ') || 'Select labels'}
      </Button>
      <SelectPanel renderAnchor={null} anchorRef={buttonRef} open={open} onOpenChange={setOpen} items={filteredItems} selected={filteredItems} onSelectedChange={setSelected} onFilterChange={setFilter} width="medium" message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...R.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps}>
            {children}
          </Button>} placeholder="Select labels" // button text when no items are selected
    open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} overlayProps={{
      width: 'small',
      height: 'medium'
    }} secondaryAction={<SelectPanel.SecondaryActionButton>Edit labels</SelectPanel.SecondaryActionButton>} width="medium" message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps}>
            {children}
          </Button>} placeholder="Select labels" // button text when no items are selected
    open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} overlayProps={{
      width: 'small',
      height: 'medium'
    }} secondaryAction={<SelectPanel.SecondaryActionLink href="#">Edit labels</SelectPanel.SecondaryActionLink>} width="medium" message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  const [noticeVariant, setNoticeVariant] = useState(0);
  const noticeVariants: Array<{
    text: string | React.ReactElement;
    variant: 'info' | 'warning' | 'error';
  }> = [{
    variant: 'info',
    text: 'Try a different search term.'
  }, {
    variant: 'warning',
    text: <>
          You have reached the limit of assignees on your free account.{' '}
          <Link href="/upgrade">Upgrade your account.</Link>
        </>
  }, {
    variant: 'error',
    text: <>
          We couldn&apos;t load all collaborators. Try again or if the problem persists,{' '}
          <Link href="/support">contact support</Link>
        </>
  }];
  return <Stack align="start">
      <FormControl>
        <FormControl.Label>Notice variant</FormControl.Label>
        <SegmentedControl aria-label="Notice variant" onChange={setNoticeVariant}>
          <SegmentedControl.Button defaultSelected aria-label={'Info'} leadingIcon={InfoIcon}>
            Info notice
          </SegmentedControl.Button>
          <SegmentedControl.Button aria-label={'Warning'} leadingIcon={AlertIcon}>
            Warning notice
          </SegmentedControl.Button>
          <SegmentedControl.Button aria-label={'Error'} leadingIcon={StopIcon}>
            Error notice
          </SegmentedControl.Button>
        </SegmentedControl>
      </FormControl>
      <FormControl>
        <FormControl.Label>SelectPanel with notice</FormControl.Label>
        <SelectPanel renderAnchor={({
        children,
        ...anchorProps
      }) => <Button trailingAction={TriangleDownIcon} {...anchorProps}>
              {children}
            </Button>} placeholder="Select labels" // button text when no items are selected
      open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} overlayProps={{
        width: 'small',
        height: 'medium'
      }} width="medium" notice={noticeVariants[noticeVariant]} />
      </FormControl>
    </Stack>;
}`,...V.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>([]);
  const [filter, setFilter] = useState('');
  const filteredItems = listOfItems.filter(item => item.text?.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Options</FormControl.Label>
      <SelectPanel title="Attach files and symbols" subtitle="Choose which files and symbols you want to chat about. Use fewer references for more accurate responses." renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps}>
            {children}
          </Button>} placeholder="Select options" // button text when no items are selected
    groupMetadata={groupMetadata} open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} overlayProps={{
      width: 'large',
      height: 'xlarge'
    }} width="medium" message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...M.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label visuallyHidden>Labels</FormControl.Label>
      <SelectPanel title="Select labels" placeholder="Select labels" // button text when no items are selected
    subtitle="Use labels to organize issues and pull requests" renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
            {children}
          </Button>} open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} width="medium" message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,..._.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <SelectPanel renderAnchor={({
    children,
    ...anchorProps
  }) => <Button {...anchorProps} trailingAction={TriangleDownIcon} aria-haspopup="dialog">
          <span className={classes.MutedText}>Choices:</span> {children || 'None selected'}
        </Button>} open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} width="medium" message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />;
}`,...D.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: ({
    initialLoadingType,
    height
  }: SelectPanelProps) => {
    const [selected, setSelected] = React.useState<ItemInput[]>([]);
    const [filteredItems, setFilteredItems] = React.useState<ItemInput[]>([]);
    const [open, setOpen] = useState(false);
    const filterTimerId = useRef<number | null>(null);
    const {
      safeSetTimeout,
      safeClearTimeout
    } = useSafeTimeout();
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');
    const fetchItems = (query: string) => {
      if (filterTimerId.current) {
        safeClearTimeout(filterTimerId.current);
        setQuery(query);
      }
      setLoading(true);
      filterTimerId.current = safeSetTimeout(() => {
        setFilteredItems(items.filter(item => item.text.toLowerCase().startsWith(query.toLowerCase())));
        setLoading(false);
      }, 2000) as unknown as number;
    };
    useEffect(() => {
      filterTimerId.current = safeSetTimeout(() => {
        setFilteredItems(items.filter(item => item.text.toLowerCase().startsWith(query.toLowerCase())));
        setLoading(false);
      }, 2000) as unknown as number;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const onOpenChange = (value: boolean) => {
      setOpen(value);
      fetchItems('');
    };
    return <SelectPanel title="Select labels" subtitle="Use labels to organize issues and pull requests" renderAnchor={({
      children,
      'aria-labelledby': ariaLabelledBy,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} aria-labelledby={\` \${ariaLabelledBy}\`} {...anchorProps} aria-haspopup="dialog">
            {children ?? 'Select Labels'}
          </Button>} placeholderText="Filter labels" open={open} onOpenChange={onOpenChange} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={fetchItems} showItemDividers={true} height={height} initialLoadingType={initialLoadingType} width="medium" loading={loading} message={filteredItems.length === 0 ? NoResultsMessage(query) : undefined} />;
  },
  args: {
    initialLoadingType: 'spinner',
    height: 'medium'
  },
  argTypes: {
    initialLoadingType: {
      control: 'select',
      options: ['spinner', 'skeleton']
    },
    height: {
      control: 'select',
      options: ['auto', 'xsmall', 'small', 'medium', 'large', 'xlarge']
    }
  }
}`,...Y.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = React.useState<ItemInput[]>([]);
  const [filteredItems, setFilteredItems] = React.useState<ItemInput[]>([]);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<string>('');
  const onFilterChange = (value: string = '') => {
    setFilter(value);
    setTimeout(() => {
      // fetch the items
      setFilteredItems([]);
    }, 0);
  };
  const [isError, setIsError] = React.useState(false);
  const onClick = React.useCallback(() => {
    setIsError(!isError);
  }, [setIsError, isError]);
  function getMessage(): {
    variant: 'empty' | 'error';
    title: string;
    body: string | React.ReactElement;
  } {
    if (isError) return ErrorMessage;else if (filter) return NoResultsMessage(filter);else return EmptyMessage;
  }
  return <>
      <Text id="toggle" className={classes.TextLargeBold}>
        Enable Error State :{isError ? 'On' : 'Off'}
      </Text>
      <ToggleSwitch onClick={onClick} checked={isError} aria-labelledby="toggle" />
      <SelectPanel title="Set projects" renderAnchor={({
      children,
      'aria-labelledby': ariaLabelledBy,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} aria-labelledby={\` \${ariaLabelledBy}\`} {...anchorProps}>
            {children ?? 'Select Labels'}
          </Button>} open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={onFilterChange} width="medium" height="large" message={getMessage()} />
    </>;
}`,...q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: ({
    initialLoadingType,
    height
  }) => {
    const [selected, setSelected] = React.useState<ItemInput[]>([]);
    const [filteredItems, setFilteredItems] = React.useState<ItemInput[]>([]);
    const [filterValue, setFilterValue] = React.useState<string>('');
    const [open, setOpen] = useState(false);
    const filterTimerId = useRef<number | null>(null);
    const {
      safeSetTimeout,
      safeClearTimeout
    } = useSafeTimeout();
    const [loading, setLoading] = useState(true);
    const onFilterChange = (value: string) => {
      setFilterValue(value);
      if (filterTimerId.current) {
        safeClearTimeout(filterTimerId.current);
      }
      setLoading(true);
      filterTimerId.current = safeSetTimeout(() => {
        setFilteredItems(items.filter(item => item.text.toLowerCase().startsWith(value.toLowerCase())));
        setLoading(false);
      }, 2000) as unknown as number;
    };
    useEffect(() => {
      filterTimerId.current = safeSetTimeout(() => {
        setFilteredItems(items.filter(item => item.text.toLowerCase().startsWith(filterValue.toLowerCase())));
        setLoading(false);
      }, 2000) as unknown as number;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <SelectPanel title="Select labels" subtitle="Use labels to organize issues and pull requests" renderAnchor={({
      children,
      'aria-labelledby': ariaLabelledBy,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} aria-labelledby={\` \${ariaLabelledBy}\`} {...anchorProps} aria-haspopup="dialog">
            {children ?? 'Select Labels'}
          </Button>} placeholderText="Filter labels" open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={onFilterChange} showItemDividers={true} initialLoadingType={initialLoadingType} loading={loading} height={height} overlayProps={{
      maxHeight: height === 'auto' || height === 'initial' ? 'xlarge' : height
    }} message={filteredItems.length === 0 ? NoResultsMessage(filterValue) : undefined} />;
  },
  args: {
    initialLoadingType: 'spinner',
    height: 'medium'
  },
  argTypes: {
    initialLoadingType: {
      control: 'select',
      options: ['spinner', 'skeleton']
    },
    height: {
      control: 'select',
      options: ['auto', 'xsmall', 'small', 'medium', 'large', 'xlarge']
    }
  }
}`,...Z.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const [initialSelection, setInitialSelection] = React.useState<ItemInput[]>(items.slice(1, 3));
  const [selected, setSelected] = React.useState<ItemInput[]>(initialSelection);
  const [filter, setFilter] = React.useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  React.useEffect(() => {
    if (!open) setInitialSelection(selected); // set initialSelection for next time
  }, [open, selected]);
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel title="Select labels" placeholder="Select labels" subtitle="Use labels to organize issues and pull requests" renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
            {children}
          </Button>} open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onCancel={() => setSelected(initialSelection)} onFilterChange={setFilter} width="medium" />
    </FormControl>;
}`,...U.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const [initialSelection, setInitialSelection] = React.useState<ItemInput[]>(items.slice(1, 3));
  const [selected, setSelected] = React.useState<ItemInput[]>(initialSelection);
  const [filter, setFilter] = React.useState('');
  const [open, setOpen] = useState(false);
  React.useEffect(() => {
    if (!open) setInitialSelection(selected); // Save selection as initialSelection for next time
  }, [open, selected]);
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  return <SelectPanel variant="modal" title="Select labels" placeholder="Select labels" subtitle="Use labels to organize issues and pull requests" renderAnchor={({
    children,
    ...anchorProps
  }) => <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
          {children}
        </Button>} open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onCancel={() => setSelected(initialSelection)} onFilterChange={setFilter} width="medium" />;
}`,...z.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput | undefined>(undefined);
  const [filter, setFilter] = useState('');
  const [open, setOpen] = useState(false);
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  return <SelectPanel variant="modal" title="Select labels" placeholder="Select labels" subtitle="Use labels to organize issues and pull requests" renderAnchor={({
    children,
    ...anchorProps
  }) => <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
          {children}
        </Button>} open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onCancel={() => {}} onFilterChange={setFilter} width="medium" />;
}`,...$.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>(items.slice(1, 3));
  const [filter, setFilter] = useState('');
  const filteredItems = itemsWithInactive.filter(item => item.text?.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel title="Select labels" placeholder="Select labels" // button text when no items are selected
    subtitle="Use labels to organize issues and pull requests" renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
            {children}
          </Button>} open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} width="medium" message={filteredItems.length === 0 ? NoResultsMessage(filter) : undefined} />
    </FormControl>;
}`,...H.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>([]);
  const [filter, setFilter] = useState('');
  const [open, setOpen] = useState(false);
  const [messageVariant, setMessageVariant] = useState(0);
  const messageVariants: Array<undefined | {
    title: string;
    body: string | React.ReactElement;
    variant: 'empty' | 'error' | 'warning';
    icon?: React.ComponentType<IconProps>;
    action?: React.ReactElement;
  }> = [undefined,
  // Default message
  {
    variant: 'empty',
    title: 'No labels found',
    body: 'Try adjusting your search or create a new label',
    icon: TagIcon,
    action: <Button variant="default" size="small" leadingVisual={PlusIcon} onClick={() => {}}>
          Create new label
        </Button>
  }, {
    variant: 'error',
    title: 'Failed to load labels',
    body: <>
          Check your network connection and try again or <Link href="/support">contact support</Link>
        </>
  }, {
    variant: 'warning',
    title: 'Some labels may be outdated',
    body: 'Consider refreshing to get the latest data'
  }];
  const itemsToShow = messageVariant === 0 ? items.slice(0, 3) : [];
  const filteredItems = itemsToShow.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  useEffect(() => {
    setFilter('');
  }, [messageVariant]);
  return <Stack align="start">
      <FormControl>
        <FormControl.Label>Message variant</FormControl.Label>
        <SegmentedControl aria-label="Message variant" onChange={setMessageVariant}>
          <SegmentedControl.Button defaultSelected aria-label="Default message">
            Default message
          </SegmentedControl.Button>
          <SegmentedControl.Button aria-label="Empty" leadingIcon={SearchIcon}>
            Empty
          </SegmentedControl.Button>
          <SegmentedControl.Button aria-label="Error" leadingIcon={StopIcon}>
            Error
          </SegmentedControl.Button>
          <SegmentedControl.Button aria-label="Warning" leadingIcon={AlertIcon}>
            Warning
          </SegmentedControl.Button>
        </SegmentedControl>
      </FormControl>
      <FormControl>
        <FormControl.Label>SelectPanel with message</FormControl.Label>
        <SelectPanel renderAnchor={({
        children,
        ...anchorProps
      }) => <Button trailingAction={TriangleDownIcon} {...anchorProps}>
              {children}
            </Button>} placeholder="Select labels" open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} overlayProps={{
        width: 'small',
        height: 'medium'
      }} width="medium" message={messageVariants[messageVariant]} filterValue={filter} />
      </FormControl>
    </Stack>;
}`,...G.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<ItemInput[]>([]);
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
  const [open, setOpen] = useState(false);
  return <FormControl>
      <FormControl.Label>Labels</FormControl.Label>
      <SelectPanel title="Select labels" placeholder="Select labels" // button text when no items are selected
    subtitle="Use labels to organize issues and pull requests" renderAnchor={({
      children,
      ...anchorProps
    }) => <Button trailingAction={TriangleDownIcon} {...anchorProps} aria-haspopup="dialog">
            {children}
          </Button>} open={open} onOpenChange={setOpen} items={filteredItems} selected={selected} onSelectedChange={setSelected} onFilterChange={setFilter} width="medium" showSelectAll={true} message={filteredItems.length === 0 ? {
      variant: 'empty',
      title: \`No language found for \\\`\${filter}\\\`\`,
      body: 'Adjust your search term to find other languages'
    } : undefined} />
    </FormControl>;
}`,...Q.parameters?.docs?.source}}};const Dt=["WithItemDividers","WithPlaceholderForSearchInput","SingleSelect","MultiSelect","WithDisabledItem","WithExternalAnchor","WithSecondaryActionButton","WithSecondaryActionLink","WithNotice","WithGroups","WithLabelVisuallyHidden","WithLabelInternally","AsyncFetch","CustomisedNoInitialItems","CustomisedNoResults","WithOnCancel","MultiSelectModal","SingleSelectModal","WithInactiveItems","WithMessage","WithSelectAll"];export{Y as AsyncFetch,q as CustomisedNoInitialItems,Z as CustomisedNoResults,B as MultiSelect,z as MultiSelectModal,W as SingleSelect,$ as SingleSelectModal,N as WithDisabledItem,R as WithExternalAnchor,M as WithGroups,H as WithInactiveItems,v as WithItemDividers,D as WithLabelInternally,_ as WithLabelVisuallyHidden,G as WithMessage,V as WithNotice,U as WithOnCancel,P as WithPlaceholderForSearchInput,k as WithSecondaryActionButton,E as WithSecondaryActionLink,Q as WithSelectAll,Dt as __namedExportsOrder,_t as default};
