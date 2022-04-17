(self._cf=self._cf||[]).push([[13691],{317401:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(847134),a=n(624971);const o=({hasAvatar:e,hasIcon:t,width:n,testId:o,isShimmering:i,cssFn:s=(()=>({}))})=>(0,r.tZ)("div",{css:[(0,a.VM)(e,t,n,i),s(void 0)],"data-testid":o})},577676:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(454530),a=n(607560),o=n(847134),i=n(395175);const s=e=>{let{maxWidth:t=800,minWidth:n=320}=e,s=(0,r.Z)(e,["maxWidth","minWidth"]);return(0,o.tZ)(i.Z,(0,a.Z)({maxWidth:t,minWidth:n},s))}},777974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(159394),a=n(202784),o=n(317401),i=n(175612),s=n(795014);const c=(e={})=>(0,r.Z)((0,r.Z)({},e),{},{"&::before":{backgroundColor:(0,i.skeleton)(),borderRadius:"100%",flexShrink:0,content:'""',marginLeft:0,marginRight:12,width:s.ZG,height:s.ZG}});function l(){return a.createElement(o.Z,{hasAvatar:!0,cssFn:c,testId:"people-menu-skeleton-item"})}},538411:(e,t,n)=>{"use strict";n.d(t,{h:()=>h});var r=n(202784),a=n(830691),o=n(491807),i=n(999762),s=n(865904),c=n(515592),l=n(450126),u=n(556853),d=n(307013),E=n(394487),p=n(747089),m=n(549581),f=n(929031),I=n(662676),g=n(777974),b=n(795014);const h=(0,o.Z)()((0,a.XN)((function(e){const{users:t,intl:n,createAnalyticsEvent:o,isLoading:h}=e,{testId:C,product:T,enableInvite:v,enableImprovedInvite:M,onClickedItem:A=E.IK,pushRoute:_=E.IK,togglePeopleMenu:y=E.IK,toggleInvitePeopleModal:P=E.IK,userRole:R}=(0,r.useContext)(d.g),S=(0,r.useCallback)((e=>t=>{const n=!(0,p.y)(t);if((0,f.MV)(o,n),A(e,"people"),n){const n=(0,m.Ji)(T,e);_(n),t.preventDefault()}y(!1)}),[o,A,T,_,y]),D=(0,r.useCallback)((()=>{(0,f.js)(o,{product:T}),(0,f.DI)(o,R,T),P(!0),y(!1)}),[o,T,P,y,R]);if(!M){if((!t||!t.length)&&!h)return null}return r.createElement(s.Z,{title:n.formatMessage(I.s.yourCollab),testId:`${C}-people-section`},h&&Array(E.EL).fill(void 0).map(((e,t)=>r.createElement(g.Z,{key:`user-${t}`}))),!h&&(t||[]).slice(0,E.EL).map((e=>r.createElement(c.Z,{key:e.id,iconBefore:r.createElement(b.EV,{src:e.avatarUrl,alt:e.fullName}),testId:`${C}-people-item`,href:(0,m.Ji)(T,e.id),onClick:S(e.id)},e.fullName))),v&&M&&r.createElement(u.Z,{name:"nav-people-invite-teammates-new"},r.createElement(l.Z,{onClick:D,iconBefore:r.createElement(i.default,{size:"large",label:n.formatMessage(I.s.inviteATeammate)}),testId:`${C}-invite-people`},r.createElement(a._H,I.s.inviteATeammate))))})))},527046:(e,t,n)=>{"use strict";n.d(t,{P:()=>b});var r=n(202784),a=n(830691),o=n(491807),i=n(999762),s=n(865904),c=n(515592),l=n(450126),u=n(307013),d=n(394487),E=n(747089),p=n(549581),m=n(929031),f=n(662676),I=n(777974),g=n(795014);const b=(0,o.Z)()((0,a.XN)((function(e){const{teams:t=[],intl:n,createAnalyticsEvent:o,isLoading:b,isLoadingPermission:h}=e,{testId:C,product:T,onClickCreateNewTeam:v=d.IK,onClickedItem:M=d.IK,pushRoute:A=d.IK,togglePeopleMenu:_=d.IK,toggleTeamCreateDialog:y=d.IK}=(0,r.useContext)(u.g),P=(0,r.useCallback)((()=>{(0,m.OG)(o),v(),_(!1),y(!0)}),[o,v,_,y]),R=(0,r.useCallback)((e=>t=>{const n=!(0,E.y)(t);if((0,m.yq)(o,n),M(e,"team"),n){const n=(0,p.gX)(T,e);A(n),t.preventDefault()}_(!1)}),[o,M,T,A,_]);return r.createElement(s.Z,{title:n.formatMessage(f.s.yourTeams),testId:`${C}-teams-section`},b&&Array(d.F$).fill(void 0).map(((e,t)=>r.createElement(I.Z,{key:`team-${t}`}))),!b&&t&&t.slice(0,d.F$).map((e=>r.createElement(c.Z,{key:e.id,href:(0,p.gX)(T,e.id),onClick:R(e.id),iconBefore:r.createElement(g.EV,{src:e.smallAvatarImageUrl||e.smallHeaderImageUrl,alt:e.displayName}),testId:`${C}-team-item`},e.displayName))),!h&&r.createElement(l.Z,{onClick:P,iconBefore:r.createElement(i.default,{size:"large",label:n.formatMessage(f.s.startATeam)}),testId:`${C}-create-team`},r.createElement(a._H,f.s.startATeam)))})))},795014:(e,t,n)=>{"use strict";n.d(t,{ZG:()=>a,Sj:()=>o,Dc:()=>i,EV:()=>s,Tm:()=>c});var r=n(202784);const a=32,o=480,i="calc(100vh - 79px)";function s({src:e,alt:t}){return r.createElement("img",{src:e||"",alt:t,height:a,width:a,style:{borderRadius:a/2}})}function c(){return(0,r.useEffect)((()=>{throw new Error("Something wrong inside People menu.")})),null}},429080:(e,t,n)=>{"use strict";n.d(t,{gU:()=>a,m0:()=>o,y:()=>i,y3:()=>s});var r=n(99429);let a,o,i;!function(e){e.ERROR_BOUNDARY="errorBoundary",e.VIEW_PEOPLE_DIRECTORY_LINK="viewAllPeopleDirectory",e.CREATE_NEW_TEAM_LINK="createNewTeamLink",e.PEOPLE_MENU_LINK="peopleMenuLink",e.TEAM_MENU_LINK="teamMenuLink",e.PEOPLE_MENU="peopleMenu",e.NAVIGATION_MENU_ITEM="navigationMenuItem",e.INVITE_PEOPLE_FEATURE="feature",e.PRE_FETCH_DATA="preFetchData",e.FETCHING_USERS_TEAMS_DATA="fetchingUsersTeamsData",e.HOVER_AND_CLICK_PEOPLE_BUTTON="hoverAndClickPeopleButton"}(a||(a={})),function(e){e.RENDERED="rendered",e.CLICKED="clicked",e.EXPOSED="exposed",e.FAILED="failed",e.SUCCEEDED="succeeded",e.VIEWED="viewed",e.TRIGGERED="triggered",e.MEASURED="measured"}(o||(o={})),function(e){e.PEOPLE_MENU="peopleMenu"}(i||(i={}));const s=(0,r.Z)("peopleTeams")},929031:(e,t,n)=>{"use strict";n.d(t,{OG:()=>i,HA:()=>s,js:()=>c,MV:()=>l,yq:()=>u,Yx:()=>d,kf:()=>E,lQ:()=>p,DI:()=>m,Mc:()=>f,Lw:()=>I,Zc:()=>g,$s:()=>b,z_:()=>h,BM:()=>C});var r=n(159394),a=n(205557),o=n(429080);const i=e=>{const t=(0,o.y3)({eventType:a._d,actionSubject:o.gU.CREATE_NEW_TEAM_LINK,action:o.m0.CLICKED});e&&t(e)},s=(e,t)=>{const n=(0,o.y3)({eventType:a._d,actionSubject:o.gU.VIEW_PEOPLE_DIRECTORY_LINK,action:o.m0.CLICKED,attributes:{isLeftClick:t}});e&&n(e)},c=(e,t)=>{const n=(0,o.y3)({eventType:a._d,actionSubject:o.gU.NAVIGATION_MENU_ITEM,actionSubjectId:"addPeopleNavigationMenuItem",action:o.m0.CLICKED,attributes:(0,r.Z)({integration:"peopleMenu"},t)});e&&n(e)},l=(e,t)=>{const n=(0,o.y3)({eventType:a._d,actionSubject:o.gU.PEOPLE_MENU_LINK,action:o.m0.CLICKED,attributes:{isLeftClick:t}});e&&n(e)},u=(e,t)=>{const n=(0,o.y3)({eventType:a._d,actionSubject:o.gU.TEAM_MENU_LINK,action:o.m0.CLICKED,attributes:{isLeftClick:t}});e&&n(e)},d=(e,t=!1)=>{const n=(0,o.y3)({eventType:a.uc,name:"peopleMenu",attributes:{isCacheEmpty:t}});e&&n(e)},E=(e,t,n,r)=>{const i=(0,o.y3)({eventType:a.s_,actionSubject:o.gU.INVITE_PEOPLE_FEATURE,action:o.m0.EXPOSED,attributes:{subProduct:t,flagKey:"confluence"===e?"confluence.frontend.enable.invite.teammate.people.menu.dropdown":"confluence.frontend.enable.product.select.invite.people.nav.3",value:r,reason:r?"RULE_MATCH":"FALLTHROUGH",ruleId:r?"bfcf95e4-e5b5-4da3-92d7-0bb9e24fb61f":"afcf95e4-e5b5-4da3-92d7-0bb9e24fb61f"}});n&&i(n)},p=e=>{const t=(0,o.y3)({eventType:a._d,actionSubject:"addPeopleNavigationItem",action:o.m0.RENDERED});e&&t(e)},m=(e,t,n)=>{const r=(0,o.y3)({eventType:a.uc,name:"addPeopleModal",attributes:{integration:"peopleMenu",permissionLevel:t,product:n}});e&&r(e)},f=e=>{const t=(0,o.y3)({eventType:a.s_,actionSubject:o.gU.PRE_FETCH_DATA,action:o.m0.TRIGGERED});e&&t(e)},I=(e,t=0,n=0)=>{const r=(0,o.y3)({eventType:a._d,actionSubject:o.gU.PEOPLE_MENU,actionSubjectId:"loadingIndicator",action:o.m0.VIEWED,attributes:{duration:t,startTime:n}});e&&r(e)},g=(e,t=0,n=0)=>{const r=(0,o.y3)({eventType:a.s_,actionSubject:o.gU.FETCHING_USERS_TEAMS_DATA,action:o.m0.MEASURED,attributes:{duration:t,startTime:n}});e&&r(e)},b=(e,t=0,n=0)=>{const r=(0,o.y3)({eventType:a.s_,actionSubject:o.gU.HOVER_AND_CLICK_PEOPLE_BUTTON,action:o.m0.MEASURED,attributes:{duration:t,startTime:n}});e&&r(e)},h=(e,t=0,n=0,r=0,i=0)=>{const s=(0,o.y3)({eventType:a.s_,actionSubject:o.gU.PEOPLE_MENU,action:o.m0.SUCCEEDED,attributes:{usersCount:t,teamsCount:n,duration:r,startTime:i}});e&&s(e)},C=e=>{const t=(0,o.y3)({eventType:a._d,actionSubject:o.gU.PEOPLE_MENU,action:o.m0.VIEWED,actionSubjectId:"noBrowsePermission"});e&&t(e)}},662676:(e,t,n)=>{"use strict";n.d(t,{s:()=>r});const r=(0,n(830691).vU)({yourCollab:{id:"ptc.pm.collaborators.title",defaultMessage:"Your Collaborators",description:"A title of Your-Collaborators section in People Menu dropdown"},yourTeams:{id:"ptc.pm.your-teams.title",defaultMessage:"Your Teams",description:"A title of a Your-Teams section in People Menu dropdown"},viewAllPeopleAndTeams:{id:"ptc.pm.view-all-people-teams",defaultMessage:"Search people and teams",description:"A link in People Menu. Clicking on it will navigate to in-product People search home page"},viewYourProfile:{id:"ptc.pm.view-your-profile",defaultMessage:"View your profile",description:"A link in People Menu. Clicking on it will navigate the user to their personal profile"},errorHeading:{id:"ptc.pm.error-heading",defaultMessage:"Something’s gone wrong",description:"Heading of the error screen which is shown when an unknown error happens in the People Menu. Usually due to failed network requests."},errorText:{id:"ptc.pm.error-text",defaultMessage:"We keep track of these errors, but feel free to contact us if refreshing doesn’t fix things",description:"Text that is displayed when an unknown error happens in the People Menu."},errorImageAltText:{id:"ptc.pm.error-image-alt-text",defaultMessage:"A broken robot and a number of people busy fixing it.",description:"Text displayed as alt text when an error occurs in the People Menu"},people:{id:"ptc.pm.people",defaultMessage:"People",description:"A default title of primary People menu"},startATeam:{id:"ptc.pm.start-a-team",defaultMessage:"Start a team",description:"A menu item in People Menu. Clicking on it will open a Create Team Dialog"},invitePeople:{id:"ptc.pm.invite.teammates",defaultMessage:"Add people to {product}",description:"A button in People Menu. Clicking on it will open a modal with the form to give another user access to the product"},inviteATeammate:{id:"ptc.pm.invite-a-teammate.",defaultMessage:"Invite a teammate",description:"A button in People Menu to invite a teammate. Clicking on it will open a modal with the form to give another user access to the product"}})},307013:(e,t,n)=>{"use strict";n.d(t,{g:()=>b,O:()=>h});var r=n(159394),a=n(454530),o=n(607560),i=n(202784),s=n(412470),c=n(429080);const l=(0,i.lazy)((()=>n.e(71638).then(n.bind(n,387375)))),u=(0,i.lazy)((()=>Promise.all([n.e(78248),n.e(11216),n.e(44711),n.e(75301),n.e(79618),n.e(479),n.e(93422),n.e(44121),n.e(12338)]).then(n.bind(n,603788)))),d=(0,i.lazy)((()=>n.e(71638).then(n.bind(n,387375)).then((e=>({default:e.ModalTransition}))))),E=(0,i.lazy)((()=>Promise.all([n.e(78248),n.e(11216),n.e(44711),n.e(75301),n.e(79618),n.e(479),n.e(93422),n.e(10370),n.e(24218),n.e(60556)]).then(n.bind(n,826587)).then((e=>({default:e.TeamCreateDialog}))))),p=s.css`
  width: 0 !important;
  height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
`,m=s.default.span`
  ${p};

  &:before,
  &:after {
    ${p};
    content: '' !important;
    box-shadow: none !important;
    border-radius: 0 !important;
  }
`,f=(0,i.forwardRef)(((e,t)=>i.createElement("div",(0,o.Z)({},e,{style:{padding:"0px"},ref:t})))),I=e=>{e.stopPropagation()},g={ref:c.y.PEOPLE_MENU},b=i.createContext({cloudId:"",userId:"",product:"confluence",testId:"",isPeopleMenuOpen:!1,isInvitePeopleModalOpen:!1,isSSR:!1,onClickViewPeopleDirectoryLink:()=>{},onClickCreateNewTeam:()=>{},onClickedItem:()=>{},pushRoute:()=>{},toggleInvitePeopleModal:()=>{},togglePeopleMenu:()=>{},toggleTeamCreateDialog:()=>{},_hasError:void 0});function h(e){const[t,n]=(0,i.useState)(!1),[o,s]=(0,i.useState)(!1),{children:c,isOpen:p,onOpen:h,onClose:C}=e,T=(0,a.Z)(e,["children","isOpen","onOpen","onClose"]),v=(0,i.useCallback)((e=>{e!==p&&(e?h():C())}),[p,C,h]),M=(0,i.useCallback)((e=>{s(e)}),[s]),A=(0,i.useCallback)((()=>{s(!1)}),[s]),_=(0,r.Z)((0,r.Z)({},T),{},{isPeopleMenuOpen:p,isInvitePeopleModalOpen:t,toggleInvitePeopleModal:n,togglePeopleMenu:v,toggleTeamCreateDialog:M}),y=()=>n(!1),P=`${window.location.protocol}//${window.location.host}`,R=`ari:cloud:${T.product}::site/${T.cloudId}`;return i.createElement(b.Provider,{value:_},c,(t||o)&&i.createElement(m,null,i.createElement(i.Suspense,{fallback:null},i.createElement(d,null,t&&i.createElement(l,{width:"small",onClose:y,scrollBehavior:"outside",components:{Body:f}},i.createElement("div",{onClick:I},i.createElement(u,{onSendHandler:y,onCancelHandler:y,continueUrl:P,resourceAri:R,showFlag:_.addFlag,userRole:_.userRole,enableProductSelect:T.enableInviteProductSelect,enableInviteeList:T.enableInviteInviteeList,enableGSyncButton:T.enableInviteGsyncButton,thirdPartyInvitesCohort:T.thirdPartyInvitesCohort,subProduct:T.subProduct}))),o&&i.createElement(E,{cloudId:_.cloudId,product:_.product,principalId:_.userId,addFlag:_.addFlag,pushRoute:_.pushRoute,onClose:A,extraAnalyticsAttrs:g})))))}},936242:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>T,OK:()=>C});var r=n(202784),a=n(944014);const o=(e,t="context",n="")=>(0,a.uz)(`${n}/gateway/api/collaboration/v1/collaborationgraph/user/user`,{context:{contextType:"atlassianPeoplePackage",principalId:t,siteId:e},maxNumberOfResults:5,userId:t,expanded:!0});let i,s;!function(e){e.CONTAINER="CONTAINER",e.USER="USER"}(i||(i={})),function(e){e.JIRA_PROJECT="jiraProject",e.CONFLUENCE_SPACE="confluenceSpace"}(s||(s={}));const c=e=>{const{userProfile:t,entityType:n}=e;return t&&n===i.USER?{id:e.id,fullName:t.name,nickname:t.nickname,email:t.email,avatarUrl:t.picture,collaborationGraphScore:e.score,status:t.account_status}:null},l=(e,t=5e3)=>{const n=new Map,r=new Map;function a(...e){return JSON.stringify(e)}return Object.assign(((...o)=>{const i=a(...o),s=r.get(i);if(void 0!==s)return s;const c=e(...o);var l;return void 0!==(l=c)&&"function"==typeof l.then&&"function"==typeof l.catch&&(r.set(i,c),c.then((e=>{n.set(i,e),setTimeout((()=>{r.delete(i),n.delete(i)}),t)})).catch((()=>{r.delete(i),n.delete(i)}))),c}),e,{cached:(...e)=>{const t=a(...e);return n.get(t)},reset:()=>{n.clear(),r.clear()}})};var u=n(886682);const d=new Map;function E(e,t="context",n="",a){const i=(0,r.useCallback)((()=>{if(a){return function(e=5e3){let t=d.get(e);return t||(t=l(o,e),d.set(e,t),t)}(a)(e,t,n)}return o(e,t,n)}),[a,e,t,n]),{loading:s,error:E,data:p,fetchData:m}=(0,u.G)(i,{loading:!0});(0,r.useEffect)((()=>{m()}),[m]);return{loading:s,error:E,data:(0,r.useMemo)((()=>(e=>{if(!e)return[];const{collaborationGraphEntities:t=[]}=e;return t.map(c).filter((e=>e))||[]})(p)),[p]),fetchData:m}}var p=n(534742),m=n(97938);const f=new Map;function I(e,t,n,a="",o){const i=(0,r.useCallback)((()=>{if(o){return function(e=5e3){let t=f.get(e);return t||(t=l(p.Nk,e),f.set(e,t),t)}(o)(e,t,n,a)}return(0,p.Nk)(e,t,n,a)}),[o,e,t,n,a]),{loading:s,error:c,data:d,fetchData:E}=(0,u.G)(i,{loading:!0});(0,r.useEffect)((()=>{E()}),[E]);return{loading:s,error:c,data:(0,r.useMemo)((()=>(0,m.EG)(d)),[d]),fetchData:E}}const g=new Map,b="collaborators",h="teams";function C(){return 0===g.size}function T(e,t,n,a,o){const[i,s]=(0,r.useState)(void 0),[c,l]=(0,r.useState)(void 0),{loading:u,error:d,data:p}=E(e,"context",a,void 0===o?3e5:o),{loading:m,error:f,data:C}=I(t,e,n,a,void 0===o?6e4:o);return(0,r.useEffect)((()=>{!p||u||d||(g.set(b,p),s(p))}),[p,u,d]),(0,r.useEffect)((()=>{!C||m||f||(g.set(h,C),l(C))}),[C,m,f]),{users:i&&i.length?i:g.get(b),teams:c&&c.length?c:g.get(h),errorTeams:f,errorUsers:d,isLoading:u||m}}},913691:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>$});var r=n(159394),a=n(607560),o=n(202784),i=n(491807),s=n(248493),c=n(455784),l=n(358056),u=n(307013);var d=n(936242),E=n(394487);const p=JSON.parse('{"u2":"@atlassian/people-menu","i8":"7.5.0"}'),m={packageName:p.u2,packageVersion:p.i8};var f=n(21586),I=n(549581),g=n(929031),b=n(429080),h=n(830691);function C(e){const[t,r]=(0,o.useState)({}),[a,i]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{!async function(){const{language:t,country:a}=(e=>{const t=/([a-z]*)[_-]?([A-Z]*)/i.exec(e);if(!t)throw Error("Unable to get language and country from invalid Locale");const[,n,r]=t;return{language:n.toLowerCase(),country:r?r.toUpperCase():""}})(e);if("en"!==t)try{i(!0);const e=a?`${t}-${a}`:t,o=await function(e){switch(e){case"cs-CZ":case"cs":return n.e(9924).then(n.bind(n,332768));case"da-DK":case"da":return n.e(94625).then(n.bind(n,101788));case"de-DE":case"de":return n.e(37911).then(n.bind(n,245490));case"es-ES":case"es":return n.e(49806).then(n.bind(n,901329));case"et-EE":case"et":return n.e(73413).then(n.bind(n,251373));case"fi-FI":case"fi":return n.e(39565).then(n.bind(n,391931));case"fr-FR":case"fr":return n.e(86261).then(n.bind(n,460995));case"hu-HU":case"hu":return n.e(70635).then(n.bind(n,15085));case"is-IS":case"is":return n.e(72432).then(n.bind(n,768235));case"it-IT":case"it":return n.e(37449).then(n.bind(n,923549));case"ja-JP":case"ja":return n.e(3161).then(n.bind(n,272489));case"ko-KR":case"ko":return n.e(83511).then(n.bind(n,336423));case"nb-NB":case"nb":return n.e(17953).then(n.bind(n,28694));case"nl-NL":case"nl":return n.e(54518).then(n.bind(n,189175));case"pl-PL":case"pl":return n.e(84177).then(n.bind(n,394375));case"pt-BR":case"pt":return n.e(47952).then(n.bind(n,502604));case"pt-PT":return n.e(53973).then(n.bind(n,553258));case"ro-RO":case"ro":return n.e(43808).then(n.bind(n,799286));case"ru-RU":case"ru":return n.e(82536).then(n.bind(n,637286));case"sk-SK":case"sk":return n.e(70055).then(n.bind(n,261820));case"sv-SE":case"sv":return n.e(12413).then(n.bind(n,834121));case"tr-TR":case"tr":return n.e(8532).then(n.bind(n,119515));case"th-TH":case"th":return n.e(68706).then(n.bind(n,299353));case"uk-UK":case"uk":return n.e(15127).then(n.bind(n,912480));case"vi-VI":case"vi":return n.e(51948).then(n.bind(n,527183));case"zh-TW":case"zh-HK":case"zh":return n.e(35607).then(n.bind(n,663886));case"zh-ZH":case"zh-CN":return n.e(6776).then(n.bind(n,683677))}return Promise.resolve({default:{}})}(e),s=o.default||o;r(s)}catch(o){}finally{i(!1)}}()}),[e]),{messages:t,isLoading:a}}const T=(0,h.XN)((({children:e,intl:t})=>{const{messages:n}=C(t.locale);return o.createElement(h.Pj,{messages:n,key:t.locale,locale:t.locale},e)}));var v=n(577676),M=n(538411),A=n(527046);const _=(0,o.lazy)((()=>n.e(441).then(n.bind(n,244466))));function y(){const{cloudId:e,tenantUrl:t,userId:n,product:r,testId:a}=(0,o.useContext)(u.g);return(0,d.ZP)(e,n,r,t),o.createElement(v.Z,{testId:`${a}-group-loading}`,maxWidth:480,maxHeight:"calc(100vh - 79px)"},o.createElement(M.h,{isLoading:!0}),o.createElement(A.P,{isLoading:!0,isLoadingPermission:!0}))}var P=n(557798),R=n(581708),S=n(450126),D=n(662676);function O({testId:e,peopleText:t}){return o.createElement(P.X,{testId:`${e}-people-primary-button-ssr`},t||o.createElement(h._H,D.s.people))}const L=function(e){const{isVisible:t,isHighlighted:n,customChevronIcon:r,triggerProps:i,onClick:s,onMouseEnter:c,testId:l,isSelected:u,peopleText:d}=e,E={isSelected:u,onClick:s,onMouseEnter:c,testId:l},p=r||o.createElement(R.default,{label:"dropdown-chevron"});return t?o.createElement(P.X,(0,a.Z)({isHighlighted:n},E,i),d||o.createElement(h._H,D.s.people)):o.createElement(S.Z,(0,a.Z)({iconAfter:p},i,E),d||o.createElement(h._H,D.s.people))};const k=(0,i.Z)()((function({cloudId:e,userId:t,product:n,tenantUrl:r,createAnalyticsEvent:a}){(0,o.useEffect)((()=>{(0,g.Mc)(a),(0,f.MZ)("fetchingData")}),[a]);const{isLoading:i}=(0,d.ZP)(e,t,n,r);return(0,o.useEffect)((()=>{i||(0,f.H0)("fetchingData",((e,t)=>{(0,g.Zc)(a,e,t)}))}),[a,i]),null})),N={onClickViewPeopleDirectoryLink:()=>{},onClickCreateNewTeam:()=>{},testId:"menu",isSSR:!1},U=1e3,w=e=>e.stopPropagation();const Z=(0,i.Z)()((function(e){const{customChevronIcon:t,isHighlighted:n,enablePreFetchingByHovering:r,createAnalyticsEvent:i,onClick:s=E.IK,peopleText:p}=e,[m,I]=(0,o.useState)(!1),{testId:b,isPeopleMenuOpen:h,isBrowseUsersEnabled:C,isSSR:T,cloudId:v,userId:M,product:A,tenantUrl:P,togglePeopleMenu:R=E.IK}=(0,o.useContext)(u.g),{isVisible:S}=(0,c.Ik)(),D=(0,o.useCallback)((()=>R(!1)),[R]),N=(0,o.useCallback)((()=>{s(!h),R(!h),(0,f.MZ)("clickAndShow"),(0,f.H0)("hoverAndClick",((e,t)=>{(0,g.$s)(i,e,t)}))}),[i,h,s,R]),Z=(0,o.useCallback)((()=>{m||(I(!0),(0,f.MZ)("hoverAndClick"),setTimeout((()=>{(0,f.Xf)("hoverAndClick")}),5*U))}),[m,I]),{loading:$,hasPermission:G}=function(e){const t=!e,[n,r]=(0,o.useState)(t),[a,i]=(0,o.useState)(!t);return(0,o.useEffect)((()=>{e&&e().then((e=>{r(e),i(!1)})).catch((()=>{r(!1),i(!1)}))}),[e,i,r]),{loading:a,hasPermission:n}}(C),j={isSelected:h,onClick:N,onMouseEnter:Z,testId:`${b}-people-primary-button`,peopleText:p};return T?o.createElement(O,{testId:b,peopleText:p}):o.createElement(o.Fragment,null,o.createElement(l.Z,{offset:S?void 0:"12px -11px",content:()=>o.createElement("span",{onClick:w},o.createElement(o.Suspense,{fallback:o.createElement(y,null)},o.createElement(_,{isLoadingPermission:$,hasPermission:G}))),isOpen:h,placement:S?"bottom-start":"right-start",onClose:D,trigger:e=>o.createElement(L,(0,a.Z)({isVisible:S,isHighlighted:n,customChevronIcon:t,triggerProps:e},j))}),r&&m&&(0,d.OK)()&&o.createElement(k,{cloudId:v,userId:M,product:A,tenantUrl:P}))}));const $=function(e){const{product:t,subProduct:n,cloudId:a,userId:i,onClickViewPeopleDirectoryLink:c,onClickCreateNewTeam:l,isBrowseUsersEnabled:d,testId:E,isHighlighted:p,tenantUrl:f,onClickedItem:g,onClick:h,onOpen:C,onClose:v,pushRoute:M,enableInvite:A,enableImprovedInvite:_,enableInviteProductSelect:y,enableInviteInviteeList:P,enableInviteGsyncButton:R,thirdPartyInvitesCohort:S,enablePreFetchingByHovering:D,userRole:O,_hasError:L,addFlag:k,isOpen:U,isSSR:w,customChevronIcon:$,peopleText:G}=(0,r.Z)((0,r.Z)({},N),e),j=(0,r.Z)({product:t,source:b.y.PEOPLE_MENU,componentName:b.y.PEOPLE_MENU},m),x={cloudId:a,product:t,subProduct:n,userId:i,onClickViewPeopleDirectoryLink:c,onClickCreateNewTeam:l,isBrowseUsersEnabled:d,isSSR:w,testId:E,tenantUrl:(0,I.oQ)(f),onClickedItem:g,onOpen:C,onClose:v,pushRoute:M,enableInvite:A,enableImprovedInvite:_,enableInviteProductSelect:y,enableInviteInviteeList:P,enableInviteGsyncButton:R,thirdPartyInvitesCohort:S,userRole:O,_hasError:L,addFlag:k,isPeopleMenuOpen:!1,isInvitePeopleModalOpen:!1,isOpen:U};return o.createElement(u.O,x,o.createElement(T,null,o.createElement(s.Z,{data:j},o.createElement(Z,{customChevronIcon:$,isHighlighted:p,onClick:h,enablePreFetchingByHovering:D,peopleText:G}))))}},394487:(e,t,n)=>{"use strict";n.d(t,{EL:()=>r,F$:()=>a,IK:()=>o});const r=5,a=3,o=()=>{}},747089:(e,t,n)=>{"use strict";n.d(t,{y:()=>r});const r=e=>!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},21586:(e,t,n)=>{"use strict";n.d(t,{MZ:()=>o,H0:()=>i,Xf:()=>s});const r="undefined"!=typeof window&&"performance"in window&&["measure","clearMeasures","clearMarks","getEntriesByName","getEntriesByType"].every((e=>!!performance[e])),a=new Map;function o(e){r&&(performance.mark(`${e}::start`),a.set(e,performance.now()))}function i(e,t){if(!r)return;if(!a.get(e))return;performance.mark(`${e}::end`);const n=t?a.get(e):void 0;try{performance.measure(e,`${e}::start`,`${e}::end`)}catch(o){}finally{if(t){const r=performance.getEntriesByName(e).pop();r?t(r.duration,r.startTime):n&&t(performance.now()-n,n)}s(e)}}function s(e){r&&(a.delete(e),performance.clearMarks(`${e}::start`),performance.clearMarks(`${e}::end`),performance.clearMeasures(e))}},549581:(e,t,n)=>{"use strict";n.d(t,{oQ:()=>a,Xw:()=>i,Ji:()=>s,gX:()=>c});var r=n(429080);function a(e=""){return"/"===e[e.length-1]?e.slice(0,-1):e}function o(e){return{confluence:"/wiki",jira:"/jira"}[e]||""}function i(e){return`${o(e)}/people?ref=${e}&src=${r.gU.PEOPLE_MENU}`}function s(e,t){return`${o(e)}/people/${t}?ref=${e}&src=${r.gU.PEOPLE_MENU}`}function c(e,t){return`${o(e)}/people/team/${t}?ref=${e}&src=${r.gU.PEOPLE_MENU}`}},534742:(e,t,n)=>{"use strict";let r,a,o,i,s;n.d(t,{Nk:()=>u,aE:()=>E,JC:()=>m}),function(e){e.ACTIVE="ACTIVE",e.DISBANDED="DISBANDED",e.PURGED="PURGED"}(r||(r={})),function(e){e.OPEN="OPEN"}(a||(a={})),function(e){e.DISCOVERABLE="DISCOVERABLE"}(o||(o={})),function(e){e.ORG_MEMBERS="ORG_MEMBERS",e.NO_RESTRICTION="NO_RESTRICTION"}(i||(i={})),function(e){e.FULL_WRITE="FULL_WRITE",e.FULL_READ="FULL_READ",e.NONE="NONE"}(s||(s={}));var c=n(944014),l=n(133222);const u=(e,t,n,r="")=>(0,c.rd)(((e,t,n,r="")=>`${r}/gateway/api/teams/v2/of-user/${e}?&${["limit=5","cursor=",`origin.cloudId=${t}`,`origin.product=${n.toUpperCase()}`].join("&")}`)(e,t,n,r)),d=({product:e,cloudId:t,tenantUrl:n=""})=>`${n}/gateway/api/teams/?${["limit=5","cursor=",(0,l.o4)({product:e,cloudId:t})].join("&")}`,E=(e,t)=>{const n=d(t);return(0,c.uz)(n,{displayName:e,description:"",state:r.ACTIVE,membershipSettings:a.OPEN,discoverable:o.DISCOVERABLE,restriction:i.NO_RESTRICTION})},p=(e,{product:t,cloudId:n,tenantUrl:r=""})=>`${r}/gateway/api/teams/ui/${e}/membership/invite?${[(0,l.o4)({product:t,cloudId:n})].join("&")}`,m=async(e,t,n)=>{if(!t||0===t.length)return Promise.resolve();const r=[],a=[];t.forEach((e=>{e.id?a.push(e.id):e.email&&r.push(e.email)}));const o=p(e,n),i={emailAddresses:r,atlassianAccounts:a};return(0,c.uz)(o,i)}},280408:(e,t,n)=>{"use strict";n.d(t,{y:()=>c,On:()=>u,di:()=>d,$x:()=>E,Cw:()=>p,cg:()=>m,wP:()=>f,yb:()=>I,wz:()=>g,JT:()=>b});var r=n(159394),a=n(205557),o=n(99429);let i,s,c;!function(e){e.ERROR_BOUNDARY="errorBoundary",e.MEMBER_PICKER="memberPicker",e.TEAM_CREATE_DIALOG="teamCreateDialog",e.INVITE_MEMBERS="inviteMembers"}(i||(i={})),function(e){e.RENDERED="rendered",e.CLICKED="clicked",e.FAILED="failed",e.SUCCEEDED="succeeded",e.VIEWED="viewed",e.CLOSED="closed",e.ERROR="error",e.SUBMITED="submitted"}(s||(s={})),function(e){e.PEOPLE_TEAMS="peopleTeams"}(c||(c={}));const l=(0,o.Z)("peopleTeams"),u=(e,t={})=>{const n=l({source:i.TEAM_CREATE_DIALOG,eventType:a.s_,actionSubject:i.MEMBER_PICKER,action:s.ERROR,attributes:(0,r.Z)({},t)});e&&n(e)},d=(e,t,n={})=>{const o=l({source:i.TEAM_CREATE_DIALOG,eventType:a.uc,name:"teamCreateDialog",attributes:(0,r.Z)({proposedMembersLength:t},n)});e&&o(e)},E=(e,t={})=>{const n=l({source:i.TEAM_CREATE_DIALOG,eventType:a._d,actionSubject:i.TEAM_CREATE_DIALOG,action:s.CLOSED,attributes:(0,r.Z)({},t)});e&&n(e)},p=(e,t,n,o={})=>{const c=l({source:i.TEAM_CREATE_DIALOG,eventType:a._d,actionSubject:i.TEAM_CREATE_DIALOG,action:s.SUBMITED,attributes:(0,r.Z)({canCreateTeam:t,numberOfMembers:n},o)});e&&c(e)},m=(e,t,n={})=>{const o=l({source:i.TEAM_CREATE_DIALOG,eventType:a.Ru,actionSubject:i.TEAM_CREATE_DIALOG,action:s.FAILED,attributes:(0,r.Z)({numberOfMembers:t},n)}),c=l({source:i.TEAM_CREATE_DIALOG,eventType:a.s_,actionSubject:i.TEAM_CREATE_DIALOG,action:s.FAILED,attributes:(0,r.Z)({numberOfMembers:t},n)});e&&(o(e),c(e))},f=(e,t,n={})=>{const o=l({source:i.TEAM_CREATE_DIALOG,eventType:a.Ru,actionSubject:i.TEAM_CREATE_DIALOG,action:s.SUCCEEDED,attributes:(0,r.Z)({numberOfMembers:t},n)}),c=l({source:i.TEAM_CREATE_DIALOG,eventType:a.s_,actionSubject:i.TEAM_CREATE_DIALOG,action:s.SUCCEEDED,attributes:(0,r.Z)({numberOfMembers:t},n)});e&&(o(e),c(e))},I=(e,t,n,o={})=>{const c=l({source:i.TEAM_CREATE_DIALOG,eventType:a.Ru,actionSubject:i.INVITE_MEMBERS,action:s.FAILED,attributes:(0,r.Z)({numberOfMembers:t,teamId:n},o)}),u=l({source:i.TEAM_CREATE_DIALOG,eventType:a.s_,actionSubject:i.INVITE_MEMBERS,action:s.FAILED,attributes:(0,r.Z)({numberOfMembers:t,teamId:n},o)});e&&(c(e),u(e))},g=(e,t,n,o={})=>{const c=l({source:i.TEAM_CREATE_DIALOG,eventType:a.Ru,actionSubject:i.INVITE_MEMBERS,action:s.SUCCEEDED,attributes:(0,r.Z)({numberOfMembers:t,teamId:n},o)}),u=l({source:i.TEAM_CREATE_DIALOG,eventType:a.s_,actionSubject:i.INVITE_MEMBERS,action:s.SUCCEEDED,attributes:(0,r.Z)({numberOfMembers:t,teamId:n},o)});e&&(c(e),u(e))},b=(e,t,n,o={})=>{const c=l({source:i.TEAM_CREATE_DIALOG,eventType:a._d,actionSubject:i.TEAM_CREATE_DIALOG,actionSubjectId:"teamLinkSuccessFlag",action:s.CLICKED,attributes:(0,r.Z)({teamId:t,numberOfMembers:n},o)});e&&c(e)}},886682:(e,t,n)=>{"use strict";n.d(t,{G:()=>o});var r=n(159394),a=n(202784);const o=(e,t={})=>{const[n,o]=(0,a.useState)((0,r.Z)({loading:!1},t)),i=(0,a.useRef)(!0);(0,a.useEffect)((()=>(i.current=!0,()=>{i.current=!1})));const s=(0,a.useCallback)((e=>{i.current&&o(e)}),[]),c=(0,a.useCallback)((async()=>{s({loading:!0,error:void 0,data:void 0});try{const t=await e();s({loading:!1,error:void 0,data:t})}catch(t){s({loading:!1,error:t,data:void 0})}}),[e,s]);return(0,r.Z)((0,r.Z)({},n),{},{fetchData:c})}},97938:(e,t,n)=>{"use strict";n.d(t,{U3:()=>o,EG:()=>i});var r=n(159394);function a(e=""){return e.replace("ari:cloud:teams::team/","")}function o(e){return e?(0,r.Z)((0,r.Z)({},e),{},{id:a(e.teamAri||e.id)}):e}const i=e=>e&&e.entities?e.entities.map(o):[]},944014:(e,t,n)=>{"use strict";n.d(t,{rd:()=>a,uz:()=>o});var r=n(159394);const a=(e,t)=>fetch(e,(0,r.Z)({credentials:"include"},t)).then((t=>{if(t.ok)return t.json();throw n=new Error(`Unable to fetch ${e} ${t.status} ${t.statusText}`),r=t.status,{name:"FetchError",message:n.message,stack:n.stack,status:r};var n,r})),o=(e,t)=>a(e,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},133222:(e,t,n)=>{"use strict";n.d(t,{o4:()=>a,Cc:()=>o});var r=n(280408);function a(e){const t=(e.product||"").toUpperCase(),n=[`origin.cloudId=${encodeURIComponent(e.cloudId)}`];return t&&n.push(`origin.product=${encodeURIComponent(t)}`),n.join("&")}function o(e,t=""){return`${function(e){return"confluence"===e?"/wiki":"jira"===e?"/jira":""}(t)}/people/team/${e}?ref=${t}&src=${r.y.PEOPLE_TEAMS}`}}}]);
//# sourceMappingURL=13691.ZGSANYVfXc.js.map