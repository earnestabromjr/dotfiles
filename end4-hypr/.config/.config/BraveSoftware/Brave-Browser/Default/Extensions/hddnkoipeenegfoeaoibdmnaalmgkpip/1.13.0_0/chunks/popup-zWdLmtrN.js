import{a as o,j as e,F as l,B as z,H as E,A as be,S as de,d as pe,e as ue,f as X,R as Se,r as L,D as Je,g as et,T as I,h as je,P as W,i as he,k as ee,l as Te,m as ve,o as ye,p as Ie,v as ke,w as tt,x as v,y as we,z as P,G as ot,M as st,J as nt,K as B,L as xe,O as Ae,U as Ee,V as Pe,W as Oe,X as Le,Y as _e,Z as te,_ as De,$ as it,a0 as rt,a1 as Z,a2 as ct,a3 as at,a4 as lt,a5 as re,a6 as dt,a7 as pt,a8 as ut,a9 as ht,aa as xt,ab as gt,ac as fe,ad as Ct,ae as mt,af as ft,ag as bt,ah as Me,n as St,ai as jt,aj as Tt,ak as vt,al as yt,am as It,an as kt,ao as U,ap as wt,aq as At,ar as Et,as as Pt,b as Ot,at as Lt,au as q,C as Q,av as ce,aw as _t,ax as Dt,ay as Mt,az as Nt,aA as Rt,c as Ft,aB as Bt,aC as zt,Q as Ht,I as Wt,q as $t,aD as Ut,aE as Gt,u as Vt,s as Kt,t as Zt,aF as Xt,E as Yt,aG as qt,aH as Qt}from"./Note-BF7hnBjn.js";import{H as oe,u as ge,T as H,S as Ce,a as se,f as Jt,b as Ne,c as ae,L as ne,d as le,e as eo,g as to,F as J,P as oo,h as so,N as no}from"./useSessionStart-Dwvo8Odt.js";const io=()=>{const{setIsAddCollection:t}=o.popup.useIsAddCollection();return e.jsxs(l,{flexDirection:"column",padding:7.5,alignItems:"center",justifyContent:"center",gap:"16px",flexGrow:1,children:[e.jsx(oe,{color:"neutral.600",children:"There are no collections in this space."}),e.jsx(z,{variant:"secondary",size:"small",onClick:()=>t(!0),children:"CREATE A COLLECTION"})]})},Re=E(be)`
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  cursor: pointer;
  height: 20px;
  width: 20px;
  ${({disabled:t})=>t&&`
  color: grey;
  cursor: not-allowed;
  pointer-events: none;
  `};
`,Fe=E(de)`
  justify-self: flex-end;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  cursor: pointer;
  width: 20px;
  height: 20px;
  ${({disabled:t})=>t&&`
  color: grey;
  cursor: not-allowed;
  pointer-events: none;
  `};
`,ro=E.div.attrs({className:"popup-list"})`
  display: flex;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  /* Default bottom border to avoid layout shift on hover */
  border-top: 1px solid transparent;
  border-bottom: 1px solid
    ${({theme:t})=>t.isDark?"#383849":"#ECECEC"};
  min-height: 45px;
  padding: 12px 16px;
  cursor: default;
  width: 100%;
  background-color: ${({backgroundColor:t})=>t};
  ${({theme:t})=>`
    &:hover {
      
      z-index: 1;
      ${t.isDark?`
        /* Only adjust the bottom border to avoid double top border with previous item */
        border-bottom: 1px solid #49495C;
      `:`
      box-shadow: 1px 2px 4px 0 rgba(112, 112, 140, 0.15);
      `}
    }
  `}
  ${({theme:t})=>t.isDark&&`
    /* For the first item, it's safe to adjust the top border on hover (no stacking above) */
    &:hover:first-child {
      border-top: 1px solid #49495C;
    }
    /* When the next item is hovered, align this item's bottom border to collapse the border visually */
    &:has(+ .popup-list:hover) {
      border-bottom: 1px solid #49495C;
    }
  `}
  ${({hoverBackgroundColor:t})=>t&&`
    &:hover {
      background-color: ${t};
    }
  `}
  ${({theme:t})=>`
    &:first-child {
      border-top: 1px solid ${t.isDark?"#383849":"#ECECEC"};
    }

    &:last-child {
      margin-bottom: 8px;
    }
  `}
  &:hover ${Re} {
    opacity: 1;
  }
  &:hover ${Fe} {
    opacity: 1;
  }
`,Be=E(pe)`
  opacity: 1;
  position: absolute;
  transition: opacity 300ms ease-in-out;
`,ze=E(ue)`
  opacity: 0;
  position: absolute;
  transition: opacity 300ms ease-in-out;
`,co=E(l)`
  position: relative;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  &:hover {
    ${Be} {
      opacity: 0;
    }
    ${ze} {
      opacity: 1;
    }
  }
`,ao=({isUrlInList:t,handleAddTabToList:s,handleSaveSessionToList:i,handleRemoveTabFromList:n,isSaveSessionToCollectionLoading:d})=>{const u=o.user.config.useSelectCurrentPopupTheme(),r=o.popup.useSelectIsAddCardsDisabled(),a=o.user.config.useSelectIsDarkMode(),p=W[u.themeType]?.[a?"dark":"light"],h=p?.tooltipBg||u.colors.brand[300],c=p?.iconColor||u.colors.brand[300];return e.jsx(e.Fragment,{children:t?e.jsxs(co,{children:[e.jsx(Be,{color:c,boxSize:4,opacity:1}),e.jsx(ze,{boxSize:4,color:"neutral.600",onClick:n,opacity:0})]}):e.jsxs(l,{gap:"24px",children:[e.jsx(H,{label:"Save Session to This Collection",backgroundColor:h,children:e.jsx(l,{children:d?e.jsx(he,{size:"sm"}):e.jsx(Fe,{boxSize:5,color:c,onClick:i,disabled:r,opacity:0})})}),e.jsx(H,{label:"Add tab",backgroundColor:h,children:e.jsx(l,{children:e.jsx(Re,{boxSize:5,color:c,onClick:s,disabled:r,opacity:0})})})]})})},lo=t=>{const{list:s,currentTab:i,isLast:n}=t,d=o.user.config.useSelectCurrentPopupTheme(),u=o.popup.useSelectTabsInCurrentWindow(),{trackEvent:r}=X(),{saveSessionToCollection:a,isSaveSessionToCollectionLoading:p}=ge(),[h,c]=Se.useState(!1),g=o.user.config.useSelectConfig(),m=g?.skipAlertSaveSession,C=g?.isAutoCloseTabs,S=L.card.batchCreate.useMutation(),w=L.card.removeMultiple.useMutation(),x=()=>{if(!s)return;const _=ve(s),O=ye(i,Ie(),s.id,_);S.mutateAsync({cards:[O],listId:O.listId}).then(()=>{r(ke,{context:"extension menu"}),ee({queryKey:L.state.getKey()})})},b=()=>{!u||!s||a({tabs:u,list:s,context:tt})},f=()=>{if(m||!C){b();return}c(!0)},T=()=>{if(!s)return;const _=s.cards.filter(O=>O.url===i.url).map(O=>O.id);w.mutateAsync({cardIds:_}).then(()=>{ee({queryKey:L.state.getKey()})}),r(Te)},k=s?.cards.some(_=>_.url===i?.url),j=o.user.config.useSelectBackgroundColorForList(s?.id),A=o.user.config.useSelectIsDarkMode(),M=A?j==="default"?"#383849":Je[j]:void 0;return e.jsxs(ro,{isLast:n,backgroundColor:et[j][A?"dark":"light"],hoverBackgroundColor:M,children:[e.jsx(H,{label:s?.title,backgroundColor:d.colors.brand[300],children:e.jsxs(l,{display:"inline-flex",gap:"5px",alignItems:"center",children:[e.jsx(I,{fontSize:14,whiteSpace:"nowrap",maxWidth:210,fontWeight:400,color:A?"#DADBE8":"#1E1E26",children:s?.title}),e.jsxs(I,{fontSize:12,flexShrink:0,color:A?"#A5A5A5":"#7C7C7C",children:[" ","| ",s?.cards.length," ",je(s?.cards.length,"tab")]})]})}),e.jsx(ao,{isUrlInList:k,isSaveSessionToCollectionLoading:p,handleAddTabToList:x,handleSaveSessionToList:f,handleRemoveTabFromList:T}),e.jsx(Ce,{isOpen:h,onClose:()=>c(!1),onConfirm:b})]})},po=t=>{const{filteredLists:s,currentTab:i}=t,{isAddCollection:n,setIsAddCollection:d}=o.popup.useIsAddCollection(),u=o.popup.useAddCollection(),[r,a]=v.useState(""),p=v.useRef(null);we(p,()=>{n&&d(!1)});const c=g=>{u(g),a("")};return e.jsx(se,{isPopup:!0,children:e.jsxs(P,{display:"flex",flexDirection:"column",children:[n&&e.jsx(l,{ref:p,paddingLeft:"0.75rem",paddingRight:"1rem",minHeight:45,borderBottom:"1px solid neutral[300]",alignItems:"center",gap:0,children:e.jsxs(l,{paddingBottom:"0.25rem",alignItems:"center",width:"100%",borderBottom:"1px solid #C6C3FA",justifyContent:"space-between",gap:0,children:[e.jsx(ot,{containerBorder:"none",value:r,placeholder:"Enter new collection name",onChange:g=>a(g.target.value),autoFocus:!0,maxLength:st-1}),e.jsx(z,{size:"sm",variant:"primary",onClick:()=>c(r),children:"Save"})]})}),s.map((g,m)=>e.jsx(lo,{list:g,currentTab:i,isLast:m===s.length-1},g.id))]})})},uo=(t="")=>{const s=o.list.useSelectAllListsInActivePopupSpace();return{filteredLists:v.useMemo(()=>s.sort((n,d)=>n.position-d.position).filter(n=>n.title.toLowerCase().includes(t.toLowerCase())),[t,s])}},ho=t=>{const s=o.list.useSelectAllListsInActivePopupTeam();return v.useMemo(()=>s.filter(n=>n.title.toLowerCase().includes(t.toLowerCase())),[t,s])},He=E(nt)`
  justify-self: flex-end;
  transition: opacity 300ms ease-in-out;
  cursor: pointer;
`,We=E(de)`
  justify-self: flex-end;
  transition: opacity 300ms ease-in-out;
  cursor: pointer;

  ${({disabled:t})=>t&&`
  color: grey;
  cursor: not-allowed;
  pointer-events: none;
  `};
`;E.div`
  display: flex;
  justify-self: flex-end;
  align-items: center;
  gap: 5px;
  padding-right: 5px;
  height: 24px;
  animation: ${Jt} 4s forwards ease-in-out;
`;const xo=E.div.attrs({className:"popup-space"})`
  background: transparent;
  display: flex;
  align-items: center;
  ${({theme:t,view:s})=>s==="list"&&`
    /* Default borders to avoid layout shift on hover */
    border-top: 1px solid transparent;
    border-bottom: 1px solid ${t.isDark?"#383849":"#ECECEC"};

    `}

  ${({theme:t,view:s})=>s==="list"&&`
    &:hover {
      
      ${t.isDark?`
        background: #383849;
        border-bottom: 1px solid #49495C;
      `:`
        box-shadow: 1px 2px 4px 0 rgba(112, 112, 140, 0.15);
      `}
      ${He} {
        opacity: 1;
      }
      ${We} {
        opacity: 1;
      }
    }

  `}
  ${({theme:t,view:s})=>s==="list"&&`
    &:first-child {
      border-top: 1px solid ${t.isDark?"#383849":"#ECECEC"};
    }
    &:last-child {
      margin-bottom: 8px;
    }
  `}
  ${({theme:t,view:s})=>s==="list"&&t.isDark&&`
    &:hover:first-child {
      border-top: 1px solid #49495C;
    }
  `}
  ${({theme:t,view:s})=>s==="list"&&t.isDark&&`
    /* When the next item is hovered, apply a top-looking border by styling this item's bottom */
    &:has(+ .popup-space:hover) {
      border-bottom: 1px solid #49495C;
    }
  `}
`,go={Space:xo},$e=t=>{const{space:s,noPadding:i,view:n}=t,{saveSession:d,saveSessionWithGroups:u,isSaveSessionLoading:r}=ge(),[a,p]=Se.useState(!1),h=o.user.config.useSelectConfig(),c=h?.skipAlertSaveSession,g=h?.isAutoCloseTabs,m=o.user.config.useSelectCurrentPopupTheme(),[C]=o.appState.permissions.useTabGroupsPermission(),S=o.popup.useSelectTabsInCurrentWindow(),[,w]=o.popup.useActivePopupSpaceId();if(!s)return null;const{teamId:x,id:b,name:f,type:T}=s,k=()=>{S&&(C?u({teamId:x,groupId:b,tabs:De(S),context:te}):d({teamId:x,groupId:b,tabs:S,context:te}))},j=()=>{if(c||!g){k();return}p(!0)},A=o.popup.useSelectIsAddCardsDisabled(),M=T===Oe,_=T===Le,O=T===_e,G=o.user.config.useSelectIsDarkMode(),N=W[m.themeType]?.[G?"dark":"light"],$=N?.tooltipBg||m.colors.brand[300],R=N?.iconColor||m.colors.brand[300];return e.jsxs(go.Space,{isNonPersonal:!M,isSelected:!1,noPadding:i,view:n,theme:m,children:[e.jsxs(B,{gap:"16px",alignItems:"center",onClick:()=>w(b),width:"100%",cursor:"pointer",padding:"12px 16px",children:[M&&e.jsx(H,{label:"Your Private Space",children:e.jsx(B,{children:e.jsx(xe,{boxSize:4,color:"neutral.800"})})}),_&&e.jsx(Ae,{boxSize:4,color:"neutral.800"}),O&&e.jsx(Ee,{boxSize:4,color:"neutral.800"}),e.jsx(oe,{color:m.isDark?"#DADBE8":"#1E1E26",whiteSpace:"nowrap",gridColumn:2,fontWeight:400,fontSize:14,lineHeight:"normal",cursor:"pointer",children:f||Pe})]}),n==="list"&&e.jsxs(e.Fragment,{children:[e.jsx(H,{label:"Save Session as new collection",backgroundColor:$,children:e.jsx(B,{onClick:A?void 0:j,height:"100%",style:{aspectRatio:1},alignItems:"center",justifyContent:"center",cursor:"pointer",children:r?e.jsx(he,{size:"sm"}):e.jsx(We,{color:R,opacity:0,height:5,width:5})})}),e.jsx(B,{onClick:()=>w(b),height:"100%",style:{aspectRatio:1},alignItems:"center",justifyContent:"center",cursor:"pointer",children:e.jsx(He,{color:R,opacity:0,height:5,width:5})})]}),e.jsx(Ce,{isOpen:a,onClose:()=>p(!1),onConfirm:k})]})},Co=t=>{const{currentTab:s}=t,i=o.user.config.useSelectCurrentPopupTheme(),n=o.popup.useSelectTabsInCurrentWindow(),{searchInput:d}=o.popup.useSearchInput(),{isAddCollection:u,setIsAddCollection:r}=o.popup.useIsAddCollection(),[a,p]=o.popup.useActivePopupSpaceId(),[h]=o.popup.useActivePopupOrgId(),c=o.popup.useSelectActivePopupSpace(),g=o.list.useSelectAllListsInActivePopupSpace(),[m]=o.appState.permissions.useTabGroupsPermission(),C=o.popup.useSelectIsAddCardsDisabled(),{filteredLists:S}=uo(d),{saveSession:w,saveSessionWithGroups:x,isSaveSessionLoading:b}=ge(),[f,T]=v.useState(!1),k=o.user.config.useSelectConfig(),j=k?.skipAlertSaveSession,A=k?.isAutoCloseTabs,M=()=>{!n||!h||!a||(m?x({teamId:h,groupId:a,tabs:De(n),context:te}):w({teamId:h,groupId:a,tabs:n,context:te}))},_=()=>{if(j||!A){M();return}T(!0)},O=!g.length&&!u,G=o.user.config.useSelectIsDarkMode(),N=W[i.themeType]?.[G?"dark":"light"],$=N?.tooltipBg||i.colors.brand[300],R=N?.iconColor||i.colors.brand[300];return e.jsxs(e.Fragment,{children:[e.jsxs(l,{justifyContent:"space-between",alignItems:"center",padding:"0 16px",height:"56px",flexShrink:0,children:[e.jsx(it,{boxSize:6,color:R,onClick:()=>p(null)}),e.jsx($e,{space:c,noPadding:!0}),e.jsxs(l,{alignItems:"center",gap:"24px",children:[e.jsx(H,{label:"Save Session as new collection",backgroundColor:$,children:e.jsx(l,{children:b?e.jsx(he,{size:"sm"}):e.jsx(de,{onClick:_,color:C?"grey":R,height:"24px",width:"24px",cursor:"pointer",disabled:C})})}),e.jsx(H,{label:"Create collection",backgroundColor:$,children:e.jsx(l,{children:e.jsx(rt,{color:R,height:"24px",width:"24px",onClick:()=>r(!0)})})})]})]}),O?e.jsx(io,{}):e.jsx(po,{filteredLists:S,currentTab:s}),e.jsx(Ce,{isOpen:f,onClose:()=>T(!1),onConfirm:M})]})},mo=()=>{const t=o.user.config.useSelectIsDarkMode(),s=o.popup.useSelectActivePopupOrgId(),i=o.space.useSelectSpacesInTeam(s||"");return e.jsxs(e.Fragment,{children:[e.jsx(Ne,{padding:"8px 16px",color:t?"#C5C5D3":"neutral.600",textTransform:"capitalize",lineHeight:"16px",flexShrink:0,children:"SPACES"}),e.jsx(se,{overflow:"auto",height100:!0,children:e.jsx(l,{flexDirection:"column",width:"100%",gap:0,children:i?.map(n=>e.jsx($e,{space:n,view:"list"},n.id))})})]})},fo=()=>e.jsxs(P,{padding:"1rem",color:"#b7b7ce",textAlign:"center",alignItems:"center",justifyContent:"center",display:"flex",flexDir:"column",children:[e.jsx(Z,{src:"./img/PopupEmptyToby.png"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(ae,{color:"neutral.600",children:"Toby is already open, nothing to see here!"})]}),Ue=t=>{const{id:s,name:i,image:n}=t,d=o.user.config.useSelectMode(),u=o.user.config.useSelectConfig(),r=ct(s,u),a=at.includes(lt,r),p=a?re[r].light.spaceSidebar:re[r][d].brand[300],h=a?re[r].light.leftSidebarText:"white1";return e.jsx(l,{as:"button",position:"relative",justifyContent:"center",cursor:"pointer",className:"readable",children:e.jsx(l,{background:n?"transparent":p,boxSizing:"border-box",borderRadius:"1000px",justifyContent:"center",alignItems:"center",width:"24px",height:"24px",flexShrink:"0",cursor:"pointer",transition:"box-shadow 300ms cubic-bezier(0.46, 0.3, 0.51, 0.91)",_hover:{boxShadow:"unset"},children:n?e.jsx(Z,{src:n,width:"24px",height:"24px",borderRadius:1e3,alt:"Org Logo"}):e.jsx(oe,{color:h,whiteSpace:"nowrap",children:dt(i)})})})},bo=t=>{const{label:s,icon:i,iconSelected:n,handleSelectMenuOption:d,activeMenuOption:u}=t,r=o.user.config.useSelectCurrentPopupTheme(),a=s===u,p=o.user.config.useSelectIsDarkMode(),h=W[r.themeType]?.[p?"dark":"light"],c=p?"#1E1E26":"#FAFAFA",g=p?"#DADBE8":"#1E1E26",m=h?.selectedMenuOptionTextColor||(p?"neutral.800":r.colors.brand[300]);return e.jsxs(l,{flexDir:"column",alignItems:"center",width:"89px",height:"55px",onClick:()=>d(s),backgroundColor:a?c:"",cursor:"pointer",padding:"4px",borderRadius:a?"5px 5px 0px 0px":"5px",gap:"4px",children:[a?n:i,e.jsx(I,{color:a?m:g,fontSize:"12px",fontWeight:600,children:s})]})},So=()=>{const t=o.user.config.useSelectCurrentPopupTheme(),s=o.user.config.useSelectIsDarkMode(),i=o.popup.useSelectCardLimitStatus(),[n,d]=v.useState(!1),u=o.popup.useSelectActivePopupOrg();if(v.useEffect(()=>{d(!1)},[i]),u?.accessRole!=="team_basic"||i===Ct||i===mt||n)return null;const a=(()=>{switch(i){case bt:return{text:"Almost at your saved card limit.",cta:{label:"LEARN MORE",redirectUrl:""},dismissable:!0};case ft:return{text:"Card limit reached.",cta:{label:"LEARN MORE",redirectUrl:""},dismissable:!0};default:return{text:"Exceeded Card limit.",cta:{label:"UPGRADE",redirectUrl:""},dismissable:!1}}})(),h=W[t.themeType]?.[s?"dark":"light"]?.openTobyCtaColor||t.colors.brand[300],c="#FFFFFF",g=()=>{a.text==="Exceeded Card limit."?chrome.tabs.create({active:!0,url:"toby.html?upgrade=true"}):chrome.tabs.create({active:!0,url:"toby.html?cardLimit=true"})};return e.jsxs(l,{justifyContent:"space-between",alignItems:"center",bg:h,padding:"12px 16px",children:[e.jsx(I,{fontSize:"14px",fontWeight:600,color:c,children:a.text}),e.jsxs(l,{alignItems:"center",gap:"12px",children:[e.jsx(ne,{fontSize:"14px",fontWeight:600,color:c,textTransform:"uppercase",_hover:{color:c,textDecoration:"underline"},onClick:g,children:a.cta.label}),a.dismissable&&e.jsx(ue,{color:c,height:"20px",width:"20px",onClick:()=>d(!0)})]})]})},jo=t=>{const{handleOpenTobyButton:s,toggleOrgMenu:i,handleSelectMenuOption:n,activeMenuOption:d}=t,u=o.user.config.useSelectCurrentPopupTheme(),r=o.user.config.useSelectIsDarkMode(),a=o.user.config.useSelectIsAIDisabled(),{data:p}=pt(),h=W[u.themeType]?.[r?"dark":"light"],c=v.useMemo(()=>{if(h?.headerBg)return h.headerBg;switch(u.themeType){case gt:return r?"#D6D1D1":"#FFF0F1";case xt:return r?"#D6CCC7":"#FFDFCF";case ht:return r?"#C7CFD6":"#CFE9FF";case ut:return r?"#D6D4C7":"#FFEDCF";default:return r?"#383849":"#FFF0F1"}},[h?.headerBg,u.themeType,r]),g=r?"#DADBE8":"#1E1E26",m=h?.iconColor||u.colors.brand[300],C=g,S=o.popup.useSelectActivePopupOrg(),w=[{label:"Save Tab",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",cursor:"pointer",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_1440_2393)",children:e.jsx("path",{d:"M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z",fill:C})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_1440_2393",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),iconSelected:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",cursor:"pointer",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_1440_2393)",children:e.jsx("path",{d:"M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z",fill:m})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_1440_2393",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]})},{label:"Create link",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",cursor:"pointer",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_1448_4432)",children:e.jsx("path",{d:"M17 7H14C13.45 7 13 7.45 13 8C13 8.55 13.45 9 14 9H17C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15H14C13.45 15 13 15.45 13 16C13 16.55 13.45 17 14 17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM8 12C8 12.55 8.45 13 9 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11H9C8.45 11 8 11.45 8 12ZM10 15H7C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9H10C10.55 9 11 8.55 11 8C11 7.45 10.55 7 10 7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H10C10.55 17 11 16.55 11 16C11 15.45 10.55 15 10 15Z",fill:C})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_1448_4432",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),iconSelected:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",cursor:"pointer",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_1448_4432)",children:e.jsx("path",{d:"M17 7H14C13.45 7 13 7.45 13 8C13 8.55 13.45 9 14 9H17C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15H14C13.45 15 13 15.45 13 16C13 16.55 13.45 17 14 17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM8 12C8 12.55 8.45 13 9 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11H9C8.45 11 8 11.45 8 12ZM10 15H7C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9H10C10.55 9 11 8.55 11 8C11 7.45 10.55 7 10 7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H10C10.55 17 11 16.55 11 16C11 15.45 10.55 15 10 15Z",fill:m})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_1448_4432",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]})},{label:"Next",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",cursor:"pointer",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_1448_4435)",children:e.jsx("path",{d:"M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3Z",fill:C})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_1448_4435",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),iconSelected:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",cursor:"pointer",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_1448_4435)",children:e.jsx("path",{d:"M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3Z",fill:m})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_1448_4435",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]})},{hideButton:!p?.ai||!p?.enableTabGroups||a,label:"Group tabs",icon:e.jsx(fe,{height:"24px",width:"24px",cursor:"pointer",stroke:C}),iconSelected:e.jsx(fe,{height:"24px",width:"24px",stroke:m})}];return e.jsxs(l,{flexDir:"column",gap:"0px",backgroundColor:c,children:[e.jsx(So,{}),e.jsxs(l,{justifyContent:"space-between",alignItems:"center",px:"16px",py:2.5,children:[e.jsxs(l,{alignItems:"center",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",onClick:()=>i(!0),style:{cursor:"pointer"},children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.5 8.91786V11.1265L17.5 11.0822V8.87354L2.5 8.91786ZM2.5 3.3777V5.58637L17.5 5.54205V3.33337L2.5 3.3777ZM2.5 14.458V16.6667L17.5 16.6224V14.4137L2.5 14.458Z",fill:r?"#A5A5A5":"#7C7C7C"})}),e.jsx(Ue,{id:S?.id,name:S?.name,image:S?.image}),e.jsx(I,{color:g,fontSize:"16px",fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxW:"220px",children:S?.name})]}),e.jsx(ne,{onClick:s,color:h?.openTobyCtaColor||u.colors.brand[300],fontSize:"12px",fontWeight:600,children:"OPEN TOBY"})]}),e.jsx(l,{width:"full",justifyContent:"space-between",px:"16px",maxWidth:"400px",children:w.map((x,b)=>x.hideButton?null:e.jsx(bo,{label:x.label,icon:x.icon,iconSelected:x.iconSelected,activeMenuOption:d,handleSelectMenuOption:n},`ExtMenuOption-${b}`))})]})},To=t=>{const{space:s,isHover:i}=t,{id:n,name:d,type:u}=s,[,r]=o.popup.useActivePopupSpaceId(),a=u===Oe,p=u===Le,h=u===_e,c=g=>{g&&g.preventDefault(),g.stopPropagation(),r(n)};return e.jsxs(Me,{onClick:c,background:"transparent",borderRadius:"7px",gridTemplateColumns:"16px max-content",alignItems:"center",gridGap:"5px",children:[a&&e.jsx(xe,{boxSize:4,color:"neutral.600",onClick:c}),p&&e.jsx(Ae,{boxSize:4,color:"neutral.600",onClick:c}),h&&e.jsx(Ee,{boxSize:4,color:"neutral.600",onClick:c}),e.jsx(ne,{color:"neutral.600",fontWeight:300,fontSize:12,whiteSpace:"nowrap",gridColumn:2,onClick:c,children:d||Pe})]})},vo=()=>{const t=o.popup.useSelectActivePopupOrg(),{searchInput:s}=o.popup.useSearchInput(),i=o.popup.useAddCollection();return e.jsx(se,{isPopup:!0,children:e.jsxs(l,{flexDirection:"column",padding:7.5,alignItems:"center",justifyContent:"center",children:[e.jsxs(oe,{color:"neutral.600",wordBreak:"break-word",textAlign:"center",overflow:"visible",children:['There are no matches for "',s,'" in'," ",t?.name||"this workspace"]}),e.jsx(z,{variant:"secondary",size:"small",onClick:()=>i(s),children:"CREATE AS A NEW COLLECTION"}),e.jsx("br",{}),e.jsxs(I,{color:"neutral.600",display:"flex",alignItems:"center",flexShrink:0,children:["Will save to  ",e.jsx(xe,{boxSize:4,color:"neutral.600"}),"  My Collections Space"]})]})})},Ge=E(be)`
  opacity: 0;
  transition: opacity 300ms ease-in-out;
`,yo=E.div`
  display: grid;
  grid-template-columns: 1fr 28px;
  height: 67px;
  align-items: center;
  border-bottom: 1px solid ${({theme:t})=>t.color.neutral[300]};
  ${({isFirst:t,theme:s})=>t&&`border-top: 1px solid ${s.color.neutral[300]};`}
  min-height: 67px;
  padding: 0px 5px 0px 15px;
  cursor: pointer;
  &:hover {
    ${({theme:t})=>t.isDark?`
      background-color: #383849;
    `:`
      box-shadow: 0px 2px 15px rgba(112, 112, 140, 0.25);
    `}
  }

  &:hover ${Ge} {
    opacity: 1;
  }
`,Ve=E(pe)`
  opacity: 1;
  position: absolute;
  transition: opacity 300ms ease-in-out;
`,Ke=E(ue)`
  opacity: 0;
  position: absolute;
  transition: opacity 300ms ease-in-out;
`,Io=E(l)`
  position: relative;
  justify-content: center;
  align-items: center;
  &:hover {
    ${Ve} {
      opacity: 0;
    }
    ${Ke} {
      opacity: 1;
    }
  }
`,K={AddCollectionBtn:Ge,List:yo,CheckMark:Ve,Close:Ke,CTAContainer:Io},ko=t=>{const{searchResults:s,currentTab:i}=t,n=o.user.config.useSelectIsDarkMode(),d=o.user.config.useSelectCurrentPopupTheme(),u=W[d.themeType]?.[n?"dark":"light"],r=u?.tooltipBg,a=u?.iconColor,p=u?.searchHighlightBg||(n?"brand.300":"brand.200"),h=o.space.useSelectPopupSpaces(),{searchInput:c}=o.popup.useSearchInput(),{trackEvent:g}=X(),m=L.card.batchCreate.useMutation(),C=L.card.removeMultiple.useMutation();if(!s.length)return e.jsx(vo,{});const S=(x,b)=>{if(b&&b.preventDefault(),b.stopPropagation(),!i||!x)return;const f=ve(x),T=ye(i,Ie(),x.id,f);m.mutateAsync({cards:[T],listId:T.listId}).then(()=>{g(ke,{context:"extension menu"}),ee({queryKey:L.state.getKey()})})},w=x=>{if(!i||!x)return;const b=x.cards.filter(f=>f.url===i.url).map(f=>f.id);C.mutateAsync({cardIds:b}).then(()=>{ee({queryKey:L.state.getKey()})}),g(Te)};return s.map((x,b)=>{const f=x?.cards.some(j=>j.url===i?.url),T=h.find(j=>j.id===x.groupId);if(!T)return;const k=x.title.toLowerCase().indexOf(c.toLowerCase());return e.jsxs(K.List,{isFirst:b===0,onClick:f?St:j=>S(x,j),children:[e.jsxs(l,{flexDirection:"column",children:[e.jsx(To,{space:T,isHover:!0},T.id),e.jsxs(l,{display:"inline-flex",gap:"5px",alignItems:"center",children:[e.jsxs(I,{fontSize:14,whiteSpace:"nowrap",maxWidth:210,fontWeight:400,color:"neutral.800",display:"inline-flex",children:[x.title.substring(0,k),e.jsx(I,{backgroundColor:p,fontWeight:400,color:"neutral.800",fontSize:14,children:x.title.substring(k,k+c.length)}),x.title.substring(k+c.length)]}),e.jsxs(I,{fontSize:12,flexShrink:0,color:"neutral.600",children:[" ","| ",x.cards.length," ",je(x.cards.length,"tab")]})]})]}),f?e.jsxs(K.CTAContainer,{children:[e.jsx(K.CheckMark,{color:a||"brand.300",boxSize:4}),e.jsx(K.Close,{boxSize:5,color:"neutral.600",onClick:()=>w(x)})]}):e.jsx(H,{label:"Add tab",backgroundColor:r||"brand.300",children:e.jsx(l,{children:e.jsx(K.AddCollectionBtn,{boxSize:5,color:a||"brand.300",onClick:j=>S(x,j)})})})]},x.id)})},wo=t=>{const{currentTab:s,handleOpenTobyButton:i,currTabToLink:n,handleCreate:d,errorMsg:u,requestPermission:r,permissionGranted:a,...p}=t,h=o.user.config.useSelectCurrentPopupTheme(),c=o.user.useSelectUser(),g=o.popup.useSelectActivePopupOrgId(),[m,C]=v.useState(!1),[S,w]=v.useState(""),{trackEvent:x}=X(),b=o.user.config.useSelectIsDarkMode(),[f,T]=o.appState.navigation.useLocation();v.useEffect(()=>{w("")},[g]);const k=async()=>{if(!c||!s?.url)return;const A={target:s.url,targetType:"url"};x(kt),await d(S.trim(),A)},j=()=>{!c||!("id"in c)||!n||(n.user_id!==c?.id?localStorage.setItem("tobyLinkToEdit",n.id+" toggleAllTobyLinks"):n.user_id===c?.id&&localStorage.setItem("tobyLinkToEdit",n.id),T("TOBY_LINKS"),i())};return a?e.jsxs(l,{flexDirection:"column",p:"16px",children:[e.jsxs(l,{flexDirection:"column",gap:"6px",pb:"16px",children:[e.jsx(le,{lineHeight:"19px",color:"neutral.700",children:"Toby Link"}),e.jsx(I,{color:"neutral.700",fontWeight:300,children:"Create a custom link to access tabs faster. Simply type “to/” and your custom name into the toolbar."}),n?e.jsxs(l,{justify:"space-between",pt:"8px",px:"8px",children:[e.jsx(I,{color:"neutral.800",fontSize:"16px",fontWeight:400,children:`to/${n.link}`}),e.jsx(ne,{color:h.colors.brand[300],fontSize:"14px",fontWeight:600,onClick:()=>j(),children:"EDIT"})]}):e.jsxs(e.Fragment,{children:[u&&e.jsx(I,{color:"error.200",fontWeight:300,children:u}),e.jsxs(Tt,{transition:"opacity .1s ease-in-out .1s",borderWidth:"1px",_hover:{borderColor:"inputBorderActive"},onFocus:()=>C(!0),onBlur:()=>C(!1),borderRadius:"5px",padding:"0px 4px",gap:"4px",borderColor:m||p?.value?"inputBorderActive":"inputBorderInactive",children:[e.jsx(vt,{...yt,children:e.jsx(I,{color:"neutral.800",children:"to/"})}),e.jsx(It,{value:S,onChange:A=>w(A.target.value),fontSize:"14px",border:0,color:"inputText",_placeholder:{color:"inputPlaceholder"},spellCheck:"false",...p})]})]})]}),e.jsx(z,{variant:"primary",onClick:()=>k(),size:"full",disabled:!!n,children:"Save"})]}):e.jsx(l,{flexDirection:"column",p:"16px",children:e.jsxs(l,{flexDirection:"column",gap:"6px",pb:"16px",children:[e.jsx(le,{lineHeight:"19px",color:"neutral.700",children:"Toby Link"}),e.jsx(I,{color:"neutral.700",fontWeight:300,children:"Create a custom link to access tabs faster. Simply type “to/” and your custom name into the toolbar."}),e.jsxs(l,{flexDirection:"column",justifyContent:"center",alignItems:"center",height:"310px",gap:"16px",backgroundColor:b?"#363643":"#F4F4F4",children:[e.jsx(I,{fontSize:"14px",fontWeight:600,color:"neutral.800",children:"Look like we need a permission!"}),e.jsxs(I,{fontSize:"14px",fontWeight:400,color:"neutral.800",children:["Press ",e.jsx("strong",{children:"'Allow'"})," to enable this feature"]}),e.jsx(z,{size:"md",variant:"primary",onClick:()=>{!c||!("id"in c)||(x(jt,{userId:c.id}),r())},bg:h.colors.brand[300],children:"ENABLE PERMISSION"})]})]})})},Ao=t=>{const{handleOpenTobyButton:s}=t,[i]=o.popup.useActivePopupOrgId(),n=o.user.config.useSelectIsDarkMode(),{data:d}=L.next.list.useQuery({variables:{filters:{byTeamIDs:[i||""]}},enabled:!!i});L.card.list.useQuery({variables:{filters:{byCardIDs:d?.cardTypeIds||[]}},enabled:!!d?.cardTypeIds.length});const{trackEvent:u}=X(),[r,a]=v.useState(!1);return e.jsxs(B,{flexDirection:"column",p:"16px 0 16px 16px",children:[e.jsx(le,{color:"neutral.700",children:"Next"}),d?.list.length?e.jsxs(e.Fragment,{children:[e.jsx(U,{pt:"6px",color:"neutral.700",children:"Here is what you have up next!"}),e.jsx(B,{flexDirection:"column",overflow:"hidden auto",height:"365px",width:"100%",gap:"8px",paddingTop:"16px",paddingRight:"8px",sx:{"::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-thumb":{background:n?"#3E414D":"#B6B6CE"}},children:e.jsx(wt,{initial:!1,children:d.list.map(p=>e.jsx(eo,{nextItem:p,activeExitAnimation:r,setActiveExitAnimation:a,view:At,onRemoveNext:h=>chrome.runtime.sendMessage({queryKey:h}),openNewTobyWindow:s},`nextItem-${p.entityId}`))})})]}):e.jsxs(B,{flexDirection:"column",paddingRight:"16px",gap:"12px",children:[e.jsx(U,{pt:"6px",color:"neutral.700",children:"Add a tab to Next!"}),e.jsxs(B,{flexDirection:"column",width:"full",alignItems:"center",height:"324px",gap:"16px",paddingTop:"65px",backgroundColor:n?"#363643":"#F4F4F4",children:[e.jsx(U,{color:n?"neutral.700":"neutral.600",fontSize:"14px",fontWeight:400,children:"Prioritize your browsing tasks into a to-do list"}),e.jsx(U,{color:n?"neutral.700":"neutral.600",fontSize:"14px",fontWeight:400,children:"1. Mark a tab or collection to Next"}),e.jsx(U,{color:n?"neutral.700":"neutral.600",fontSize:"14px",fontWeight:400,children:"2. Prioritze which resource to visit"}),e.jsx(U,{color:n?"neutral.700":"neutral.600",fontSize:"14px",fontWeight:400,children:"3. Check it off the list once done!"}),e.jsx(Et,{color:"brand.300",fontSize:"14px",fontWeight:600,pt:"12px",onClick:()=>{u(Pt)},target:"_blank",href:"https://help.gettoby.com/support/solutions/articles/66000518451-getting-started-with-toby-next",children:"LEARN MORE"})]})]})]})},Eo=t=>{const{toggleOrgMenu:s,showOrgMenu:i}=t,n=o.team.useSelectTeams(),[d,u]=o.popup.useActivePopupOrgId(),r=o.user.config.useSelectIsDarkMode(),a=o.user.config.useSelectCurrentPopupTheme(),p=r?"neutral.300":a.colors.brand[100],[,h]=o.popup.useActivePopupSpaceId(),c=v.useRef(null);we(c,()=>{i&&s(!1)});const m=C=>{u(C),h(null),s(!1)};return e.jsxs(l,{ref:c,position:"absolute",transition:"transform 500ms ease-in-out",transform:i?"":"translateX(-320px)",zIndex:999,height:"100%",width:"320px",backgroundColor:"bgColor",flexDir:"column",padding:"8px",borderTopRightRadius:"5px",borderBottomRightRadius:"5px",boxShadow:i?"0px 2px 15px 0px rgba(112, 112, 140, 0.25)":"none",overflow:"hidden",children:[e.jsxs(l,{width:"100%",justify:"space-between",px:"8px",children:[e.jsx(I,{color:a.colors.brand[600],fontSize:"12px",fontWeight:"700",children:"ORGANIZATIONS"}),e.jsx(Mt,{height:"24px",width:"24px",onClick:()=>s(!1),color:a.colors.brand[600]})]}),e.jsx(l,{flexDir:"column",overflowY:"auto",overflowX:"hidden",children:typeof d=="string"&&n.map(C=>e.jsxs(l,{onClick:()=>m(C.id),py:"8px",px:"4px",alignItems:"center",zIndex:"9999",cursor:"pointer",gap:"10px",color:"neutral.800",backgroundColor:C.id===d?p:"",justifyContent:"space-between",borderRadius:"5px",children:[e.jsxs(l,{children:[e.jsx(Ue,{id:C.id,name:C.name,image:C.image}),e.jsx(I,{fontSize:14,color:"neutral.800",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxW:"260px",children:C.name})]}),C.id===d&&e.jsx(pe,{width:"18px",height:"18px",color:a.colors.brand[300]})]},C.id))})]})},Po=()=>{Ot(),to();const t=o.user.config.useSelectCurrentPopupTheme(),s=o.user.config.useSelectIsDarkMode(),i=o.team.useSelectTeams(),n=o.list.useSelectListsMap(),d=o.popup.useSelectActivePopupOrgId(),[u]=o.popup.useActivePopupSpaceId(),{links:r}=o.link.useSelectTobyLinks({filters:{by_team_ids:[d||""]}}),a=o.popup.useSelectTabsInCurrentWindow(),{searchInput:p,setSearchInput:h}=o.popup.useSearchInput(),[c,g]=o.link.useTobyLinkPermission(),{trackEvent:m}=X(),C=ho(p),[S,w]=v.useState("Save Tab"),[x,b]=v.useState(!1),f=v.useMemo(()=>a&&a.find(y=>y.active),[a]),T=(y,D)=>{const ie=[];for(const V in D)D[V].teamId===y&&ie.push(...D[V].cards);return ie},k=v.useMemo(()=>{if(!r||!r.length||!f||!c)return;const y=r.find(F=>F.target_type==="url"&&F.target_id===f.url);if(y)return y;const D=r.filter(F=>F.target_type==="card");if(!D.length)return;if(!d||!n)throw new Error("No team selected");const V=T(d,n).filter(F=>F.url===f.url);return V.length?D.find(F=>V.find(Qe=>Qe.id===F.target_id)):void 0},[r,f,c,d,n]),j=L.links.create.useMutation(),A=v.useRef("");v.useEffect(()=>{A.current===""&&p!==""&&m("Search triggered in extension menu"),A.current=p},[p]);const M=!!i.length,_=f&&Lt(f),O=!!u,G=y=>{w(y),m(`switched to ${y} in extension menu`)},N=y=>{b(y)},$=o.window.useSelectTobyTab(),[,R]=o.team.useActiveTeamId(),Y=()=>{d&&R(d);const y=$?.id;y?_t.switchToTab(y):ce(),m(Dt,{context:"extension menu"})};if(!a)return null;if(!M)return e.jsx(q,{theme:t,children:e.jsxs(Q,{theme:t,children:[e.jsx(J,{}),e.jsx(P,{backgroundColor:"popupMenuExtension",children:e.jsxs(l,{flexDirection:"column",alignItems:"center",padding:"20px",justifyContent:"center",gap:"30px",children:[e.jsxs(l,{flexDir:"column",alignItems:"center",gap:"25px",children:[e.jsxs(l,{children:[e.jsx(Z,{src:"./img/icon-48.png"}),e.jsx(Z,{src:"./img/Group.svg"})]}),e.jsx(ae,{color:"neutral.800",fontWeight:400,children:"Looks like you need to sign in to continue"})]}),e.jsxs(l,{flexDir:"column",gap:"16px",width:"365px",children:[e.jsx(z,{variant:"primary",onClick:ce,size:"full",children:"SIGN IN"}),e.jsx(z,{variant:"tertiary",onClick:ce,size:"full",children:"OPEN TOBY"})]})]})})]})});if(!f)return e.jsx(q,{theme:t,children:e.jsxs(Q,{theme:t,children:[e.jsx(J,{}),e.jsx(P,{backgroundColor:"popupMenuExtension",children:e.jsxs(l,{flexDirection:"column",alignItems:"center",padding:"1rem",justifyContent:"center",children:[e.jsx(Z,{src:"./img/PopupEmptyToby.png"}),e.jsx(ae,{color:"neutral.600",children:"You cannot add this tab to Toby"}),e.jsx(z,{variant:"primary",onClick:Y,size:"full",children:"Open Toby"})]})})]})});if(_)return e.jsx(q,{theme:t,children:e.jsxs(Q,{theme:t,children:[e.jsx(J,{}),e.jsx(P,{backgroundColor:"popupMenuExtension",children:e.jsx(fo,{})})]})});const me={filters:{by_team_ids:[d||""]}},Ye=s?"#383849":"#ECECEC",qe=()=>{switch(S){case"Create link":return d?e.jsx(P,{minWidth:"100%",flex:"1",overflow:"auto",children:e.jsx(wo,{currentTab:f,handleOpenTobyButton:Y,currTabToLink:k,handleCreate:async(y,D)=>{await j.mutateAsync({data:{link:y,target_type:D.targetType,target_id:typeof D.target=="string"?D.target:D.target.id},filters:me,key:L.links.list.getKey(me)})},errorMsg:j.error?.message,requestPermission:()=>Rt().then(g),permissionGranted:c})}):void 0;case"Next":return e.jsx(P,{minWidth:"100%",flex:"1",overflow:"auto",children:e.jsx(Ao,{handleOpenTobyButton:Y})});case"Group tabs":return e.jsx(P,{minWidth:"100%",flex:"1",overflow:"auto",children:e.jsx(oo,{})});default:return e.jsxs(e.Fragment,{children:[e.jsx(P,{p:"16px",borderBottom:"1px solid",borderColor:Ye,bg:s?"#1E1E26":"#FAFAFA",children:e.jsx(Nt,{onClose:()=>h(""),value:p,onChange:y=>h(y.target.value),placeholder:"Search for collections or spaces",autoFocus:!0,isPopup:!0,transition:"none"})}),p?e.jsxs(P,{flex:"1",overflow:"hidden",display:"flex",flexDirection:"column",children:[e.jsx(Ne,{padding:"8px 16px",color:"neutral.600",textTransform:"capitalize",borderBottom:C.length?"none":"1px solid",borderColor:"neutral.300",children:`${C.length} ${C.length===1?"MATCH":"MATCHES"}`}),e.jsx(se,{isPopup:!0,children:e.jsx(P,{pb:"8px",children:e.jsx(ko,{searchResults:C,currentTab:f})})})]}):e.jsx(P,{position:"relative",children:e.jsxs(l,{display:"flex",transition:"transform 300ms ease-in-out",position:"absolute",width:"100%",height:"100%",transform:O?"translateX(-400px)":"",gap:0,children:[e.jsx(P,{minWidth:"400px",width:"400px",height:"100%",display:"flex",flexDir:"column",children:e.jsx(mo,{})}),e.jsx(P,{minWidth:"400px",width:"400px",height:"100%",display:"flex",flexDir:"column",children:e.jsx(Co,{currentTab:f})})]})})]})}};return e.jsx(q,{theme:t,children:e.jsxs(Q,{theme:t,children:[e.jsx(J,{}),e.jsx(Eo,{showOrgMenu:x,toggleOrgMenu:N}),e.jsx(l,{height:"550px",width:"400px",backgroundColor:s?"#1E1E26":"#fafafa",flexDirection:"column",gap:0,children:e.jsxs(Me,{width:"100%",height:"100%",gridTemplateRows:"min-content min-content 1fr",gridTemplateColumns:"1fr",gap:0,children:[e.jsx(jo,{handleOpenTobyButton:Y,toggleOrgMenu:N,activeMenuOption:S,handleSelectMenuOption:G}),qe()]})})]})})},Ze=document.querySelector("#root");if(!Ze)throw new Error("Root element not found");const Xe=Ft.createRoot(Ze);window._app_root=Xe;chrome.storage.local.get(["lastPopupOpened","lastPopupOpenedNum"],t=>{const s=new Date().getTime(),i=t.lastPopupOpenedNum?parseInt(t.lastPopupOpenedNum,10):0;!t||!t.lastPopupOpened||!t.lastPopupOpenedNum||s-t.lastPopupOpened>Bt?chrome.storage.local.set({lastPopupOpened:s,lastPopupOpenedNum:1}):chrome.storage.local.set({lastPopupOpenedNum:i+1})});so("popup");const Oo=Xt.ActiveSpaceProvider,Lo=Zt.ActiveTeamProvider,_o=Gt.OpenTabsProvider,Do=Kt.StateProvider,Mo=Vt.UserProvider,No=Ut.WindowProvider,Ro=qt.OnboardingProvider,Fo=Qt.PopupProvider;Xe.render(e.jsx(zt,{children:e.jsx(Ht,{client:$t,persistOptions:{persister:Wt,maxAge:1/0,hydrateOptions:{defaultOptions:{queries:{gcTime:1/0}}}},children:e.jsx(No,{children:e.jsx(_o,{children:e.jsx(Mo,{children:e.jsx(Do,{children:e.jsx(Lo,{children:e.jsx(Oo,{children:e.jsx(Yt,{children:e.jsx(no,{children:e.jsx(Ro,{children:e.jsx(Fo,{children:e.jsx(Po,{})})})})})})})})})})})})}));
