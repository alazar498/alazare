"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_ref-selector_RefSelector_tsx"],{50736:(e,t,r)=>{r.d(t,{_:()=>c,d:()=>SearchIndex});var a=r(74572),n=r(51528);let{getItem:i,setItem:s,removeItem:l}=(0,a.A)("localStorage",{throwQuotaErrorsOnSet:!0});var c=function(e){return e.Branch="branch",e.Tag="tag",e}({});let SearchIndex=class SearchIndex{render(){this.selector.render()}async fetchData(){try{if(!this.isLoading||this.fetchInProgress)return;if(!this.bootstrapFromLocalStorage()){this.fetchInProgress=!0,this.fetchFailed=!1;let e=await fetch(`${this.refEndpoint}?type=${this.refType}`,{headers:{Accept:"application/json"}});await this.processResponse(e)}this.isLoading=!1,this.fetchInProgress=!1,this.render()}catch{this.fetchInProgress=!1,this.fetchFailed=!0}}async processResponse(e){if(this.emitStats(e),!e.ok){this.fetchFailed=!0;return}let t=e.clone(),r=await e.json();this.knownItems=r.refs,this.cacheKey=r.cacheKey,this.flushToLocalStorage(await t.text())}emitStats(e){if(!e.ok){(0,n.i)({incrementKey:"REF_SELECTOR_BOOT_FAILED"},!0);return}switch(e.status){case 200:(0,n.i)({incrementKey:"REF_SELECTOR_BOOTED_FROM_UNCACHED_HTTP"});break;case 304:(0,n.i)({incrementKey:"REF_SELECTOR_BOOTED_FROM_HTTP_CACHE"});break;default:(0,n.i)({incrementKey:"REF_SELECTOR_UNEXPECTED_RESPONSE"})}}search(e){let t;if(this.searchTerm=e,""===e){this.currentSearchResult=this.knownItems;return}let r=[],a=[];for(let n of(this.exactMatchFound=!1,this.knownItems))if(!((t=n.indexOf(e))<0)){if(0===t){e===n?(a.unshift(n),this.exactMatchFound=!0):a.push(n);continue}r.push(n)}this.currentSearchResult=[...a,...r]}bootstrapFromLocalStorage(){let e=i(this.localStorageKey);if(!e)return!1;let t=JSON.parse(e);return t.cacheKey===this.cacheKey&&"refs"in t?(this.knownItems=t.refs,this.isLoading=!1,(0,n.i)({incrementKey:"REF_SELECTOR_BOOTED_FROM_LOCALSTORAGE"}),!0):(l(this.localStorageKey),!1)}async flushToLocalStorage(e){try{s(this.localStorageKey,e)}catch(t){if(t.message.toLowerCase().includes("quota")){this.clearSiblingLocalStorage(),(0,n.i)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_OVERFLOWED"});try{s(this.localStorageKey,e)}catch(e){e.message.toLowerCase().includes("quota")&&(0,n.i)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_GAVE_UP"})}}else throw t}}clearSiblingLocalStorage(){for(let e of Object.keys(localStorage))e.startsWith(SearchIndex.LocalStoragePrefix)&&l(e)}clearLocalStorage(){l(this.localStorageKey)}get localStorageKey(){return`${SearchIndex.LocalStoragePrefix}:${this.nameWithOwner}:${this.refType}`}constructor(e,t,r,a,n){this.knownItems=[],this.currentSearchResult=[],this.exactMatchFound=!1,this.searchTerm="",this.isLoading=!0,this.fetchInProgress=!1,this.fetchFailed=!1,this.refType=e,this.selector=t,this.refEndpoint=r,this.cacheKey=a,this.nameWithOwner=n}};SearchIndex.LocalStoragePrefix="ref-selector"},95140:(e,t,r)=>{r.d(t,{I:()=>s});var a=r(96540),n=r(59840),i=r(47831);function s(e,t,r=[]){let l=(0,a.useCallback)(e,r),c=(0,i.BP)(),o=(0,a.useRef)(c===i.O8.ClientRender),[h,d]=(0,a.useState)(()=>c===i.O8.ClientRender?l():t),u=(0,a.useCallback)(()=>{d(l)},[l]);return(0,n.m)(()=>{o.current||d(l),o.current=!1},[l,...r]),[h,u]}},76024:(e,t,r)=>{r.d(t,{F:()=>c});var a,n=r(74848),i=r(75177),s=r(96540),l=r(35822);function c({items:e,itemHeight:t,sx:r,renderItem:a,makeKey:i}){let c=(0,s.useRef)(null),d=(0,s.useCallback)(()=>t,[t]),u=(0,l.z)({parentRef:c,size:e.length,estimateSize:d});return(0,n.jsx)(o,{ref:c,sx:r,virtualizer:u,children:u.virtualItems.map(t=>(0,n.jsx)(h,{virtualRow:t,children:a(e[t.index])},i(e[t.index])))})}let o=s.forwardRef(function({children:e,sx:t,virtualizer:r},a){return(0,n.jsx)(i.A,{ref:a,sx:t,children:(0,n.jsx)("ul",{style:{height:r.totalSize,width:"100%",position:"relative"},children:e})})});function h({children:e,virtualRow:t}){return(0,n.jsx)("li",{style:{position:"absolute",top:0,left:0,width:"100%",height:`${t.size}px`,transform:`translateY(${t.start}px)`},children:e})}try{c.displayName||(c.displayName="FixedSizeVirtualList")}catch{}try{(a=VirtualListContainerInner).displayName||(a.displayName="VirtualListContainerInner")}catch{}try{h.displayName||(h.displayName="ItemContainer")}catch{}},32906:(e,t,r)=>{r.d(t,{z:()=>i});var a=r(74848),n=r(75177);function i({text:e,search:t,hideOverflow:r=!1,overflowWidth:i=0}){let s=(function(e,t){if(!t)return[e];let r=e.toLowerCase().split(t.toLowerCase());if(r.length<2)return[e];let a=0,n=[];for(let i of r)n.push(e.substring(a,a+i.length)),a+=i.length,n.push(e.substring(a,a+t.length)),a+=t.length;return n})(e,t).map((e,t)=>t%2==1?(0,a.jsx)("strong",{className:"color-fg-default",children:e},t):e),l=i?`${i}px`:void 0;return(0,a.jsx)(n.A,{sx:{maxWidth:l,overflow:r?"hidden":"visible",textOverflow:"ellipsis",whiteSpace:"nowrap",color:t.length?"fg.muted":"fg.default"},children:s})}try{i.displayName||(i.displayName="HighlightedText")}catch{}},58143:(e,t,r)=>{r.d(t,{aH:()=>q,PI:()=>Y,Qe:()=>Z,JJ:()=>J});var a=r(74848),n=r(55847),i=r(65481),s=r(60499),l=r(83056),c=r(38621),o=r(80497),h=r(75177),d=r(84217),u=r(87330),f=r(67138),x=r(30595),m=r(52464),y=r(30729),p=r(96540),g=r(97156),b=r(95140),j=r(10312),S=r(40961);function C({isOpen:e,onDismiss:t,onConfirm:r}){let[i]=(0,b.I)(()=>document.body,null,[g.XC?.body]);return i?(0,S.createPortal)((0,a.jsxs)(j.A,{isOpen:e,onDismiss:t,children:[(0,a.jsx)(j.A.Header,{children:"Create branch"}),(0,a.jsxs)(h.A,{sx:{p:3},children:[(0,a.jsx)("span",{children:"A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?"}),(0,a.jsxs)(h.A,{sx:{display:"flex",justifyContent:"flex-end",mt:3},children:[(0,a.jsx)(n.Q,{onClick:t,children:"Cancel"}),(0,a.jsx)(n.Q,{variant:"danger",onClick:r,sx:{ml:2},children:"Create"})]})]})]}),document.body):null}try{C.displayName||(C.displayName="CheckTagNameDialog")}catch{}var R=r(28784);async function w(e,t){let r=new FormData;r.set("value",t);let a=await (0,R.DI)(e,{method:"POST",body:r,headers:{Accept:"application/json"}});return!!a.ok&&!!await a.text()}async function T(e,t,r){let a=new FormData;a.set("name",t),a.set("branch",r);let n=await (0,R.DI)(e,{method:"POST",body:a,headers:{Accept:"application/json"}});if(n.ok)return{success:!0,name:(await n.json()).name};try{let{error:e}=await n.json();if(e)return{success:!1,error:e};throw Error("Unknown response from create branch API")}catch{return{success:!1,error:"Something went wrong."}}}var v=r(85349),A=r(69676);function k(e){let{ariaDescribedBy:t,ariaLabelledBy:r,ariaLabel:i,hotKey:s,onOpenChange:l,size:o,displayCommitish:d,refType:u,children:f,preventClosing:x,inputRef:y,overlayOpen:g,onOverlayChange:b,focusTrapEnabled:j=!0,buttonClassName:S,allowResizing:C,useFocusZone:R}=e,w=e.idEnding?`-${e.idEnding}`:`-${Date.now()}`,T=(0,p.useRef)(`branch-picker${w}`),k=(0,p.useCallback)(e=>{b(e),l?.(e)},[l,b]),I=(0,p.useMemo)(()=>j?{initialFocusRef:y}:{initialFocusRef:y,disabled:!0},[j,y]);return(0,a.jsx)(v.T,{open:g,overlayProps:{role:"dialog",width:"medium","aria-label":"Select a branch"},onOpen:()=>k(!0),onClose:()=>!x&&k(!1),renderAnchor:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Q,{...e,"data-hotkey":s,size:o,sx:{svg:{color:"fg.muted"},display:"flex",minWidth:C?0:void 0,"> span":{width:"inherit"}},trailingVisual:c.TriangleDownIcon,"aria-describedby":t,"aria-labelledby":r,"aria-label":r?void 0:i??`${d} ${u}`,"data-testid":"anchor-button",id:T.current,className:S,children:(0,a.jsxs)(h.A,{sx:{display:"flex",width:"100%"},children:[(0,a.jsx)(h.A,{sx:{mr:1,color:"fg.muted"},children:"tag"===u?(0,a.jsx)(c.TagIcon,{size:"small"}):(0,a.jsx)(c.GitBranchIcon,{size:"small"})}),(0,a.jsx)(h.A,{sx:{fontSize:1,minWidth:0,maxWidth:C?void 0:125,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},className:"ref-selector-button-text-container",children:(0,a.jsxs)(m.A,{sx:{minWidth:0},children:["\xa0",d]})})]})}),(0,a.jsx)("button",{hidden:!0,"data-hotkey":s,onClick:()=>k(!0),"data-hotkey-scope":"read-only-cursor-text-area"})]}),focusTrapSettings:I,focusZoneSettings:R?{bindKeys:A.z0.ArrowAll|A.z0.Tab}:{disabled:!0},children:(0,a.jsx)("div",{"data-testid":"overlay-content","aria-labelledby":T.current,id:"selectPanel",children:f})})}try{k.displayName||(k.displayName="RefSelectorAnchoredOverlay")}catch{}function I({text:e,onClick:t,href:r,sx:n}){let i=!!r,s=(0,a.jsx)(h.A,{sx:{...n},children:e}),l={sx:{minWidth:0}};return i?(0,a.jsx)(o.l.LinkItem,{role:"link",href:r,onClick:()=>t?.(),...l,children:s}):(0,a.jsx)(o.l.Item,{role:"button",onSelect:()=>t?.(),...l,children:s})}try{I.displayName||(I.displayName="RefSelectorFooter")}catch{}var N=r(76024),L=r(47139),O=r(32906);let E=p.memo(function({isCurrent:e,isDefault:t,href:r,gitRef:n,filterText:i,ariaPosInSet:s,ariaSetSize:l,onSelect:c,onClick:h,shouldSetAsDiv:d=!1}){let u=!!r,f=(0,a.jsx)(F,{gitRef:n,isDefault:t,isCurrent:e,filterText:i}),x={"aria-posinset":d?void 0:s,"aria-setsize":d?void 0:l,sx:{minWidth:0},onSelect:()=>c?.(n),onClick:()=>h?.(n)};return d?u?(0,a.jsx)(o.l.LinkItem,{href:r,role:"menuitemradio",...x,children:f}):(0,a.jsx)(o.l.Item,{as:"div",...x,children:f}):u?(0,a.jsx)(o.l.LinkItem,{href:r,role:"menuitemradio",...x,children:f}):(0,a.jsx)(o.l.Item,{...x,children:f})}),F=p.memo(function({isCurrent:e,isDefault:t,gitRef:r,filterText:n,showLeadingVisual:i=!0}){return(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsxs)("div",{style:{display:"flex",minWidth:0,alignItems:"flex-end"},children:[i&&(0,a.jsx)(y.A,{icon:c.CheckIcon,"aria-hidden":!0,sx:{pr:1,visibility:e?void 0:"hidden"}}),(0,a.jsx)(O.z,{hideOverflow:!0,search:n,text:r},r)]}),t&&(0,a.jsx)(L.A,{children:"default"})]})});try{E.displayName||(E.displayName="RefItem")}catch{}try{F.displayName||(F.displayName="RefItemContent")}catch{}function _(e){return e.refs.length>20?(0,a.jsx)(B,{...e}):(0,a.jsx)(D,{...e})}function D({refs:e,defaultBranch:t,currentCommitish:r,getHref:n,filterText:i,onSelectItem:s}){return(0,a.jsx)("ul",{style:{maxHeight:330,overflowY:"auto"},children:e.map(l=>(0,a.jsx)(E,{href:n?.(l),isCurrent:r===l,isDefault:t===l,filterText:i,gitRef:l,onSelect:s,onClick:s,ariaPosInSet:e.indexOf(l)+1,ariaSetSize:e.length},l))})}function B({refs:e,defaultBranch:t,currentCommitish:r,getHref:n,filterText:i,onSelectItem:s}){return(0,a.jsx)(N.F,{items:e,itemHeight:32,sx:{maxHeight:330,overflowY:"auto"},makeKey:e=>e,renderItem:l=>(0,a.jsx)(E,{shouldSetAsDiv:!0,href:n?.(l),isCurrent:r===l,isDefault:t===l,filterText:i,gitRef:l,onSelect:s,onClick:s,ariaPosInSet:e.indexOf(l)+1,ariaSetSize:e.length},l)})}try{_.displayName||(_.displayName="RefsList")}catch{}try{D.displayName||(D.displayName="FullRefsList")}catch{}try{B.displayName||(B.displayName="VirtualRefsList")}catch{}var P=r(50736);function z(e,t,r,a,n){return new P.d("branch"===a?P._.Branch:P._.Tag,n,(0,l.SHX)({owner:t,repo:r,action:"refs"}),e,`${t}/${r}`)}function K(e,t){return{status:e.fetchFailed?"failed":e.isLoading?"loading":"loaded",refs:e.currentSearchResult,showCreateAction:e.refType===P._.Branch&&t&&e.searchTerm.length>0&&!e.exactMatchFound,searchIndex:e}}function W(e){let t=(0,p.useRef)(void 0);return t.current||(t.current=e()),t}function $(e){let{ariaDescribedBy:t,ariaLabelledBy:r,ariaLabel:n,cacheKey:i,owner:s,repo:c,canCreate:o,types:h,hotKey:d,onOpenChange:u,size:f,getHref:x,onBeforeCreate:m,onRefTypeChanged:y,currentCommitish:g,onCreateError:b,onSelectItem:j,closeOnSelect:S,selectedRefType:R,customFooterItemProps:v,buttonClassName:A,allowResizing:I,idEnding:N,useFocusZone:L}=e,[O,E]=(0,p.useState)(""),F=(0,p.useRef)(null),_=(0,p.useRef)(null),D="tree"===R?g.slice(0,7):g,[B,P]=(0,p.useState)(!1),[$,V]=(0,p.useState)(!0),[M,G]=(0,p.useState)(!1),[Q,X]=(0,p.useState)(("tree"===R?"branch":R)??(h??J)[0]),U=function(e,t,r,a,n,i){let[s,l]=(0,p.useState)({status:"uninitialized",refs:[],showCreateAction:!1,searchIndex:null}),c=(0,p.useRef)({render:()=>{l(K(h.current,i))}}),o=(0,p.useRef)({render:()=>{l(K(d.current,i))}}),h=W(()=>z(e,t,r,"branch",c.current)),d=W(()=>z(e,t,r,"tag",o.current));return(0,p.useEffect)(()=>{let n=`${t}/${r}`;h.current.nameWithOwner!==n&&(h.current=z(e,t,r,"branch",c.current)),d.current.nameWithOwner!==n&&(d.current=z(e,t,r,"tag",o.current)),async function(){let e="branch"===a?h.current:d.current;e.render(),await e.fetchData(),e.search(""),e.render()}()},[e,t,r,a,h,d]),(0,p.useEffect)(()=>{let e="branch"===a?h.current:d.current;e.search(n),e.render()},[n,a,h,d]),s}(i,s,c,Q,O,o),Y=(0,l.SHX)({owner:s,repo:c,action:"branches"}),Z=(0,l.FeW)({owner:s,repo:c}),q=(0,p.useCallback)(async()=>{m?.(O);let e=await T(Y,O,g);e.success?x&&(U.searchIndex?.clearLocalStorage(),window.location.href=x(e.name)):b?.(e.error)},[m,O,Y,g,x,b,U.searchIndex]),ee=(0,p.useCallback)(async()=>{if(await w(Z,O)){G(!0),V(!1);return}G(!1),V(!1),q()},[Z,O,q,G]),et=(0,p.useCallback)(e=>{X(e),y?.(e)},[X,y]);function er(){P(!1)}let ea=(0,p.useCallback)((e,t)=>{j?.(e,t),er()},[j]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(k,{ariaDescribedBy:t,ariaLabelledBy:r,ariaLabel:n,refType:Q,displayCommitish:D,focusTrapEnabled:$,preventClosing:M,size:f,onOpenChange:u,hotKey:d,inputRef:F,overlayOpen:B,onOverlayChange:P,buttonClassName:A,allowResizing:I,idEnding:N,useFocusZone:L,children:(0,a.jsx)(H,{filterText:O,displayCommitish:D,onFilterChange:E,refType:Q,onRefTypeChange:et,refsState:U,onCreateError:e.onCreateError,showTagWarningDialog:M,setShowTagWarningDialog:G,onCreateBranch:ee,inputRef:F,createButtonRef:_,onSelectItem:ea,closeOnSelect:S,closeRefSelector:er,customFooterItemProps:v,...e,selectedRefType:Q})}),M&&(0,a.jsx)(C,{isOpen:M,onDismiss:()=>{G(!1),_.current?.focus()},onConfirm:q})]})}function H({canCreate:e,currentCommitish:t,displayCommitish:r,defaultBranch:n,filterText:i,getHref:s,hideShowAll:l,onSelectItem:f,closeOnSelect:x,closeRefSelector:m,onFilterChange:y,onRefTypeChange:p,owner:g,selectedRefType:b,refsState:j,refType:S,repo:C,types:R,onCreateBranch:w,inputRef:T,createButtonRef:v,customFooterItemProps:A,viewAllJustify:k}){var N;let{refs:L,showCreateAction:O,status:E}=j;return(0,a.jsxs)(o.l,{showDividers:!0,as:"div",children:[(0,a.jsxs)(h.A,{sx:{borderBottom:"1px solid",borderColor:"border.subtle",pb:2},children:[(0,a.jsxs)(h.A,{sx:{display:"flex",pb:2,px:2,justifyContent:"space-between",alignItems:"center"},children:[(0,a.jsx)(d.A,{as:"h2",sx:{pl:2,fontSize:"inherit"},children:(N=R??J).includes("branch")&&N.includes("tag")?"Switch branches/tags":N.includes("branch")?"Switch branches":N.includes("tag")?"Switch tags":void 0}),(0,a.jsx)(u.K,{unsafeDisableTooltip:!0,"aria-label":"Cancel",variant:"invisible",icon:c.XIcon,sx:{color:"fg.muted"},onClick:m})]}),(0,a.jsx)(V,{defaultText:i,refType:S,canCreate:e,onFilterChange:y,ref:T})]}),(0,a.jsxs)(h.A,{sx:{pt:2,pb:O&&0===L.length?0:2},children:[(R??J).length>1&&(0,a.jsx)(h.A,{sx:{px:2,pb:2},children:(0,a.jsx)(Z,{refType:S,onRefTypeChanged:p,sx:{mx:-2,borderBottom:"1px solid",borderColor:"border.muted","> nav":{borderBottom:"none"}}})}),"loading"===E||"uninitialized"===E?(0,a.jsx)(G,{refType:S}):"failed"===E?(0,a.jsx)(q,{refType:S}):0!==L.length||O?(0,a.jsx)(_,{filterText:i,refs:L,defaultBranch:"branch"===S?n:"",currentCommitish:S===b?t:"",getHref:s,onSelectItem:e=>{f?.(e,S),x&&m()}}):(0,a.jsx)(Q,{})]}),O&&(0,a.jsxs)(a.Fragment,{children:[L.length>0&&(0,a.jsx)(o.l.Divider,{sx:{marginTop:0,backgroundColor:"border.subtle"}}),(0,a.jsx)(U,{displayCommitish:r,newRefName:i,onCreateBranch:w,createButtonRef:v})]}),(!l||A)&&(0,a.jsx)(o.l.Divider,{sx:{marginTop:O?2:0,backgroundColor:"border.subtle"}}),!l&&(0,a.jsx)(X,{justify:k,refType:S,owner:g,repo:C,onClick:m}),A&&(0,a.jsx)(I,{...A,onClick:function(){A?.onClick?.(),m()}})]})}let V=(0,p.forwardRef)(M);function M({refType:e,canCreate:t,onFilterChange:r,defaultText:n},i){return(0,a.jsx)(h.A,{sx:{px:2},children:(0,a.jsx)(f.A,{"aria-label":"tag"===e?"Filter tags":"Filter branches",leadingVisual:c.SearchIcon,value:n,sx:{width:"100%"},placeholder:"tag"===e?"Find a tag...":t?"Find or create a branch...":"Find a branch...",ref:i,onInput:e=>{let t=e.target;t instanceof HTMLInputElement&&r(t.value)}})})}function G({refType:e}){return(0,a.jsx)(h.A,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,a.jsx)(x.A,{size:"medium","aria-label":`Loading ${"branch"===e?"branches":"tags"}...`})})}function Q(){return(0,a.jsx)(h.A,{sx:{p:3,display:"flex",justifyContent:"center"},children:"Nothing to show"})}function X({refType:e,owner:t,repo:r,onClick:n,justify:i="start"}){let s="branch"===e?"branches":"tags";return(0,a.jsx)(o.l.LinkItem,{role:"link",href:(0,l.SHX)({owner:t,repo:r,action:s}),onClick:n,sx:{display:"flex",justifyContent:"center"},children:(0,a.jsxs)(h.A,{sx:{display:"flex",justifyContent:i},children:["View all ",s]})})}function U({displayCommitish:e,newRefName:t,onCreateBranch:r,createButtonRef:n}){return(0,a.jsxs)(o.l.Item,{role:"button",onSelect:r,ref:n,children:[(0,a.jsx)(y.A,{icon:c.GitBranchIcon,sx:{mr:2,color:"fg.muted"}}),(0,a.jsx)("span",{children:"Create branch\xa0"}),(0,a.jsx)(m.A,{sx:{fontWeight:600,fontFamily:"monospace"},children:t}),(0,a.jsx)("span",{children:"\xa0from\xa0"}),(0,a.jsx)(m.A,{sx:{fontWeight:600,fontFamily:"monospace"},children:e})]})}try{$.displayName||($.displayName="RefSelectorV1")}catch{}try{H.displayName||(H.displayName="RefSelectorActionList")}catch{}try{V.displayName||(V.displayName="RefTextFilter")}catch{}try{M.displayName||(M.displayName="RefTextFilterWithRef")}catch{}try{G.displayName||(G.displayName="Loading")}catch{}try{Q.displayName||(Q.displayName="RefsZeroState")}catch{}try{X.displayName||(X.displayName="ViewAllRefsAction")}catch{}try{U.displayName||(U.displayName="CreateRefAction")}catch{}let J=["branch","tag"];function Y(e){return(0,a.jsx)($,{...e})}function Z({refType:e,onRefTypeChanged:t,sx:r}){return(0,a.jsxs)(s.A,{sx:{pl:2,...r},"aria-label":"Ref type",children:[(0,a.jsx)(s.A.Link,{as:n.Q,id:"branch-button","aria-controls":"branches",selected:"branch"===e,onClick:()=>t("branch"),sx:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:"Branches"}),(0,a.jsx)(s.A.Link,{as:n.Q,id:"tag-button","aria-controls":"tags",selected:"tag"===e,onClick:()=>t("tag"),sx:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:"Tags"})]})}function q({refType:e}){return(0,a.jsxs)(i.A,{variant:"danger",children:["Could not load ","branch"===e?"branches":"tags"]})}try{Y.displayName||(Y.displayName="RefSelector")}catch{}try{Z.displayName||(Z.displayName="RefTypeTabs")}catch{}try{q.displayName||(q.displayName="LoadingFailed")}catch{}}}]);
//# sourceMappingURL=ui_packages_ref-selector_RefSelector_tsx-cc680be7e8b6.js.map