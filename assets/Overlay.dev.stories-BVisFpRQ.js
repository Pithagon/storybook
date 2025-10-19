import{d as h,r as c,j as t}from"./iframe-Cfz2vXeE.js";import{I as B}from"./IconButton-qXcIkMuV.js";import{B as v}from"./Button-3sCteC9V.js";import{O}from"./Overlay-Du2pzphD.js";import{X as g}from"./index.esm-C1WN7kEu.js";import{T as R}from"./Text-BbpDCwQY.js";import"./preload-helper-D9Z9MdNV.js";import"./ButtonBase-BlGPm-3t.js";import"./sx-BSyIY0hE.js";import"./index.esm-CN46I9JX.js";import"./useRefObjectAsForwardedRef-DQwuL9aT.js";import"./defaultSxProp-CTX1ZhUd.js";import"./Spinner-CP1_WO7z.js";import"./VisuallyHidden-BShfgJrZ.js";import"./AriaStatus-CzZh6U-X.js";import"./Announce-rCuV3jiI.js";import"./CounterLabel-DnnBMwbH.js";import"./Tooltip-BuVThTi0.js";import"./invariant-Dix8OlSS.js";import"./warning-CmA-h2kW.js";import"./_VisuallyHidden-CKJB9yD0.js";import"./useSafeTimeout-BD3cO5TN.js";import"./useProvidedRefOrCreate-Pg3blKRP.js";import"./KeybindingHint-C2Jv3TM3.js";import"./environment-DRRHKtsv.js";import"./user-agent-DiCyFeS1.js";import"./anchored-position-Cz4CQZsC.js";import"./constants-gM483c7h.js";import"./index.esm-BZRgk2PO.js";import"./useIsomorphicLayoutEffect-C_Bsqbyc.js";import"./Portal-BKCn1yDJ.js";import"./useOnOutsideClick-CaQvIa_9.js";import"./iterate-focusable-elements-QzROm7ZI.js";import"./useFeatureFlag-paATTdb3.js";const x="prc-Overlay-OverlayContent-seKuq",b="prc-Overlay-CloseButton-0IE68",N="prc-Overlay-DialogContent-73gpc",j="prc-Overlay-ButtonContainer-sfPbz",F="prc-Overlay-CancelButton-idXQ4",k="prc-Overlay-ConfirmButton-0mcoX",E="prc-Overlay-ResponsiveWidth-VywxX",n={OverlayContent:x,CloseButton:b,DialogContent:N,ButtonContainer:j,CancelButton:F,ConfirmButton:k,ResponsiveWidth:E},pe={title:"Private/Components/Overlay/Dev",component:O,args:{open:!1},argTypes:{open:{control:!1,visible:!1}}},s=o=>{const e=h.c(9),[i,f]=c.useState(!1),m=c.useRef(null),d=c.useRef(null),C=c.useRef(null);let p;e[0]===Symbol.for("react.memo_cache_sentinel")?(p=()=>f(!1),e[0]=p):p=e[0];const a=p,y=c.useRef(null);let l;e[1]!==i?(l=t.jsx(v,{ref:m,onClick:()=>{f(!i)},children:"Open overlay"}),e[1]=i,e[2]=l):l=e[2];let r;e[3]!==o||e[4]!==i?(r=i||o.open?t.jsx(O,{initialFocusRef:d,returnFocusRef:m,ignoreClickRefs:[m],onEscape:a,onClickOutside:a,width:o.width,height:o.height,"aria-modal":o.role==="dialog","aria-label":o.role==="dialog"?"Sample overlay":void 0,preventFocusOnOpen:o.preventFocusOnOpen,ref:y,...o,children:t.jsx("div",{className:n.ResponsiveWidth,children:t.jsxs("div",{className:n.OverlayContent,children:[t.jsx(B,{"aria-label":"Close",onClick:a,icon:g,variant:"invisible",className:n.CloseButton}),t.jsxs("div",{className:n.DialogContent,children:[t.jsx(R,{children:"Are you sure?"}),t.jsxs("div",{className:n.ButtonContainer,children:[t.jsx(v,{variant:"danger",onClick:a,className:n.CancelButton,children:"Cancel"}),t.jsx(v,{onClick:a,ref:d,className:n.ConfirmButton,children:"Confirm"})]})]})]})})}):null,e[3]=o,e[4]=i,e[5]=r):r=e[5];let u;return e[6]!==l||e[7]!==r?(u=t.jsxs("div",{ref:C,children:[l,r]}),e[6]=l,e[7]=r,e[8]=u):u=e[8],u};s.args={width:"auto",height:"auto",side:"outside-bottom",preventOverflow:"false",role:"dialog",visibility:"visible",open:!1,preventFocusOnOpen:!1};s.argTypes={width:{type:{name:"enum",value:["small","medium","large","xlarge","xxlarge","auto"]}},height:{type:{name:"enum",value:["xsmall","small","medium","large","xlarge","auto","initial"]}},side:{type:{name:"enum",value:["inside-top","inside-bottom","inside-left","inside-right","inside-center","outside-top","outside-bottom","outside-left","outside-right"]}},open:{control:!1,visible:!1},portalContainerName:{control:!1},style:{control:!1},preventOverflow:{type:"boolean"},role:{type:"string"},visibility:{type:{name:"enum",value:["visible","hidden"]}},preventFocusOnOpen:{type:"boolean"}};s.__docgenInfo={description:"",methods:[],displayName:"PreventFocusOnOpen"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: Args) => {
  const [isOpen, setIsOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const confirmButtonRef = useRef<HTMLButtonElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const closeOverlay = () => setIsOpen(false);
  const containerRef = useRef<HTMLDivElement>(null);
  return <div ref={anchorRef}>
      <Button ref={openButtonRef} onClick={() => {
      setIsOpen(!isOpen);
    }}>
        Open overlay
      </Button>
      {isOpen || args.open ? <Overlay initialFocusRef={confirmButtonRef} returnFocusRef={openButtonRef} ignoreClickRefs={[openButtonRef]} onEscape={closeOverlay} onClickOutside={closeOverlay} width={args.width} height={args.height} aria-modal={args.role === 'dialog'} aria-label={args.role === 'dialog' ? 'Sample overlay' : undefined} preventFocusOnOpen={args.preventFocusOnOpen} ref={containerRef} {...args}>
          <div className={classes.ResponsiveWidth}>
            <div className={classes.OverlayContent}>
              <IconButton aria-label="Close" onClick={closeOverlay} icon={XIcon} variant="invisible" className={classes.CloseButton} />
              <div className={classes.DialogContent}>
                <Text>Are you sure?</Text>
                <div className={classes.ButtonContainer}>
                  <Button variant="danger" onClick={closeOverlay} className={classes.CancelButton}>
                    Cancel
                  </Button>
                  <Button onClick={closeOverlay} ref={confirmButtonRef} className={classes.ConfirmButton}>
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Overlay> : null}
    </div>;
}`,...s.parameters?.docs?.source}}};const ue=["PreventFocusOnOpen"];export{s as PreventFocusOnOpen,ue as __namedExportsOrder,pe as default};
