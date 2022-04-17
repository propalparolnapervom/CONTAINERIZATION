/*! License: 80353.AuU7WRapBP.js.LICENSE.txt */
(self._cf=self._cf||[]).push([[80353],{909269:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(202784),r=(n(213980),n(644484));const i=()=>{};function o({children:e,analyticsData:t,innerRef:n,wrapChildren:o=!1}){var l;const s=(null!=(l=e)&&null!=(l=l.props)?l.onClick:l)||i,c=(0,r.r)(s,t);return o?a.createElement("span",{ref:n,onMouseDown:c},e):(0,a.cloneElement)(e,{onClick:c,ref:n})}},913499:(e,t,n)=>{"use strict";n.d(t,{w:()=>g,y:()=>v});var a=n(151119),r=n(547313),i=n(202784),o=n(830691),l=n(227371),s=n(574776),c=n(175612),u=n(909269),d=n(494775),m=n(491735),f=n(908317),h=n(180213);const p=(0,r.Z)("span",{target:"e1www41e0"})("button{cursor:pointer;height:30px;width:30px;padding:0;margin:0;}a,a:hover{color:",c.N400,";}"),b=(0,o.vU)({attachments:{id:"attachments.view-attachments-button",defaultMessage:"View attachments",description:"Explaining that click on a button will take user to a list of attachments for the page"}}),y={type:"sendUIEvent",data:{action:"clicked",actionSubject:"ViewAttachmentsButton",source:"attachments",attributes:{triggeredFrom:"fromView"}}},g={type:"sendUIEvent",data:{action:"clicked",actionSubject:"ViewAttachmentsButton",source:"attachments",attributes:{triggeredFrom:"actionsMenu"}}},v=(0,o.XN)(class extends i.PureComponent{constructor(...e){super(...e),(0,a.Z)(this,"label",this.props.intl.formatMessage(b.attachments))}render(){return i.createElement(f.S,{attribution:h.x.BACKBONE},i.createElement(m.z.Consumer,null,(({contentId:e})=>i.createElement(p,null,i.createElement(l.Z,{appearance:"subtle"},i.createElement(u.Z,{analyticsData:y},i.createElement("a",{href:`${d.b}/pages/viewpageattachments.action?pageId=${e}&metadataLink=true`},i.createElement(s.default,{label:this.label}))))))))}})},607054:(e,t,n)=>{"use strict";n.d(t,{D:()=>o});var a=n(202784),r=n(885255),i=n(874599);function o({name:e,error:t,attributes:n}){const o=(0,a.useContext)(i.r),l=(0,a.useContext)(r.F);return(0,a.useEffect)((()=>l.fail({name:e||o,error:t,attributes:n})),[l,e,o,t,n]),null}},380178:(e,t,n)=>{"use strict";n.d(t,{F:()=>s});var a=n(159394),r=n(151119),i=n(984116),o=n(772005),l=n(557098);class s extends i.W2{constructor(...e){super(...e),(0,r.Z)(this,"state",{items:[],itemsLoaded:!1}),(0,r.Z)(this,"loadTimeout",null),(0,r.Z)(this,"addItem",(e=>{if(this.state.items.filter((t=>t.key===e)).length)return!1;const t={key:e,loaded:!1};return this.state.items.push(t),!0})),(0,r.Z)(this,"getItem",(e=>{const t=this.state.items.find((t=>t.key===e));return t?(0,a.Z)({},t):void 0})),(0,r.Z)(this,"markItem",(async e=>{var t;null!==(t=this.getItem(e))&&void 0!==t&&t.loaded||this.setState((t=>({items:t.items.map((t=>t.key!==e?t:{key:t.key,loaded:!0}))})),this.checkAllItems)})),(0,r.Z)(this,"checkAllItems",(()=>{let e=!0;this.state.items.length&&(this.state.items.forEach((t=>{t.loaded||(e=!1)})),e&&((0,o.OV)().succeed({name:l.q.HEADER_ITEMS_GROUP_LOAD}),this.state.itemsLoaded||(this.setState((()=>({itemsLoaded:!0}))),clearTimeout(this.loadTimeout))))})),(0,r.Z)(this,"initItems",(()=>{this.state.items=[],this.state.itemsLoaded=!1,clearTimeout(this.loadTimeout),this.startTimer(),(0,o.OV)().start({name:l.q.HEADER_ITEMS_GROUP_LOAD})})),(0,r.Z)(this,"startTimer",(()=>{this.loadTimeout=setTimeout((()=>{(0,o.OV)().fail({name:l.q.HEADER_ITEMS_GROUP_LOAD,error:new Error("Grouped Page Buttons loading exceeded 5000 milliseconds")}),this.setState((()=>({itemsLoaded:!0})))}),5e3)}))}}},116306:(e,t,n)=>{"use strict";n.d(t,{G:()=>o});var a=n(202784),r=(n(213980),n(909269)),i=n(981003);class o extends a.PureComponent{render(){const{webItemId:e}=this.props,t=(e=>({type:"sendUIEvent",data:{action:"clicked",source:"viewPageScreen",actionSubject:"AnalyticsButton",attributes:{from:e===i.H.ANALYTICS_ADDON_BYLINE?"fromByline":"fromActionMenu",type:"viewers"}}}))(e);return a.createElement(r.Z,{analyticsData:t},this.props.children)}}o.displayName="AnalyticsPluginWrapper"},780212:(e,t,n)=>{"use strict";n.d(t,{C:()=>m});var a=n(159394),r=n(547313),i=n(202784),o=n(830691),l=n(227371),s=n(996541),c=n(767874),u=n(584750);const d=(0,r.Z)("div",{target:"e4nszkc0"})({name:"sfx54n",styles:"display:inline-flex;outline:none;cursor:not-allowed !important;"}),m=(0,o.XN)((()=>i.createElement(s.uP,{metricName:c.u2.SSR_SHARE_BUTTON},i.createElement(d,{"data-test-id":"share-button-placeholder"},i.createElement(l.Z,{isDisabled:!0},i.createElement(o._H,(0,a.Z)({},u.a.shareButtonText)))))));m.displayName="ShareButtonPlaceholder"},584750:(e,t,n)=>{"use strict";n.d(t,{a:()=>a});const a=(0,n(830691).vU)({shareButtonText:{id:"share.button.text",defaultMessage:"Share"}})},673284:(e,t,n)=>{"use strict";n.d(t,{_n:()=>i,Hs:()=>o,Xl:()=>l});var a=n(768606),r=n(780212);const i=(0,a.P)({__loadable_id__:"YEjMG",name:"ShareButtonLoader",loader:async()=>(await Promise.all([n.e(78248),n.e(11216),n.e(44711),n.e(75301),n.e(75392),n.e(79618),n.e(41347),n.e(72005),n.e(479),n.e(46575),n.e(93422),n.e(38736),n.e(10370),n.e(99268),n.e(73146),n.e(57762)]).then(n.bind(n,493382))).ShareButton,loading:r.C}),o=(0,a.P)({__loadable_id__:"sMwB3",name:"LegacyShareButtonLoader",loader:async()=>(await Promise.all([n.e(78248),n.e(11216),n.e(75392),n.e(41347),n.e(72005),n.e(46575),n.e(58070)]).then(n.bind(n,150642))).LegacyShareButton,loading:r.C}),l=(0,a.P)({__loadable_id__:"UsyI4",name:"ShareButtonLiteLoader",loader:async()=>(await Promise.all([n.e(78248),n.e(11216),n.e(44711),n.e(75301),n.e(75392),n.e(79618),n.e(41347),n.e(72005),n.e(479),n.e(93422),n.e(38736),n.e(10370),n.e(99268),n.e(73146),n.e(78548)]).then(n.bind(n,178548))).ShareButtonLite})},302502:(e,t,n)=>{"use strict";n.d(t,{c:()=>re});var a=n(159394),r=n(72779),i=n.n(r),o=(n(213980),n(202784)),l=n(984116),s=n(380178),c=n(913499),u=n(286235),d=n(830691),m=n(830274),f=n(328230),h=n(866380),p=n(51681),b=n(230382),y=n.n(b);const g=y()`query ScheduledStatusQuery($contentId:ID!){singleContent(id:$contentId){id metadata{currentuser{scheduled{isScheduled when}}}}}`,v=e=>{var t,n,a;const{contentId:r}=e,{createAnalyticsEvent:i}=(0,p._)(),{data:l,loading:s,error:c}=(0,u.aM)(g,{variables:{contentId:r},fetchPolicy:"network-only"});if(s||c)return null;const b=null==l||null===(t=l.singleContent)||void 0===t||null===(n=t.metadata)||void 0===n||null===(a=n.currentuser)||void 0===a?void 0:a.scheduled,y=null==b?void 0:b.isScheduled,v=null==b?void 0:b.when,E=v?new Date(v):null;y&&i({type:"sendTrackEvent",data:{actionSubject:"feature",action:"exposed",source:"ScheduledStatus",attributes:{flagKey:"confluence.frontend.fabric.editor.scheduled-publish"}}}).fire();const _=E&&o.createElement(d._H,{id:"content-metadata.scheduled.status.tooltip",defaultMessage:"{date} at {time}",description:"Scheduled publish lozenge tooltip that tells the user when is the current page scheduled",values:{date:(0,m.Z)(E,"PP"),time:(0,m.Z)(E,"p")}});return y?o.createElement(h.Z,{testId:"lozenge-scheduled-tooltip",content:_},o.createElement(f.Z,{isBold:!0},o.createElement(d._H,{id:"content-metadata.scheduled.status.lozenge",defaultMessage:"Publish scheduled",description:"Scheduled publish lozenge text"},(e=>o.createElement("span",{"data-test-id":"status-lozenge-scheduled"},e))))):null};var E=n(384684);const _=y()`query DraftStatusQuery($contentId:ID!){singleContent(id:$contentId){id metadata{currentuser{lastcontributed{status}}}}}`,I=e=>{const{contentId:t}=e;return o.createElement(E.AE,{query:_,fetchPolicy:"network-only",variables:{contentId:t}},(({data:e,loading:t,error:n})=>{var a;if(t||n)return null;return"unpublished"===(null!=(a=e)&&null!=(a=a.singleContent)&&null!=(a=a.metadata)&&null!=(a=a.currentuser)&&null!=(a=a.lastcontributed)?a.status:a)?o.createElement(f.Z,{appearance:"default"},o.createElement(d._H,{id:"content-metadata.draft.status.unpublished",defaultMessage:"UNPUBLISHED CHANGES",description:"user has made changes to content but not published them yet"},(e=>o.createElement("span",{"data-test-id":"draft-status-lozenge"},e)))):null}))};I.displayName="DraftStatus";var w=n(908317),S=n(180213),N=n(909269),T=n(981003);const A={type:"sendUIEvent",data:{action:"clicked",source:"viewPageScreen",actionSubject:"JiraTicketsButton"}};function x({children:e}){const{createAnalyticsEvent:t}=(0,p._)(),n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{setTimeout((()=>{var e;let a=!1;const r=null!=(e=n)&&null!=(e=e.current)&&null!=(e=e.children)?e[T.H.CONTENT_METADATA_JIRA]:e;r&&!r.classList.contains("hidden")&&(a=!0),a&&t({type:"sendTrackEvent",data:{actionSubject:"JiraTicketsButton",action:"shown",source:"viewPageScreen"}}).fire()}),5e3)}),[]),o.createElement(N.Z,{analyticsData:A,innerRef:n,wrapChildren:!0},e)}x.displayName="JiraButtonAnalyticsWrapper";var C=n(116306),B=n(995858),k=n(157533),L=n(315783),F=n(673284),M=n(151119),Z=n(454530),P=n(547313),D=n(817620),$=n.n(D),O=n(896159),R=n(914483);const H=(0,P.Z)("a",{shouldForwardProp:()=>!0,target:"e1cucsw0"})({name:"1b0gse9",styles:"margin-left:3px !important;margin-right:2px !important;img{max-height:100%;height:auto;display:inline-block;vertical-align:middle;margin-right:5px;}"}),z=e=>{let{classes:t,id:n,url:r,label:i,onClick:l,style:s,icon:c}=e,u=(0,Z.Z)(e,["classes","id","url","label","onClick","style","icon"]);return o.createElement(H,(0,a.Z)({className:t,href:r,id:n,onClick:l,style:s},u),c,"string"==typeof i?o.createElement("span",{dangerouslySetInnerHTML:{__html:i}}):i)};z.displayName="WebItemIcon";class q extends o.PureComponent{getIcon(){const{disableIcon:e,params:t,iconStyle:n,spinner:a,iconInfo:r,label:i,iconSize:l}=this.props;let s=t&&t.iconClass;return e?null:a?o.createElement(O.Z,{size:"small"}):r&&r.path?o.createElement("img",{style:n,src:r.path,width:r.width,height:r.height,alt:i,title:i}):s?(-1===s.indexOf("aui-iconfont-")&&(s=`aui-iconfont-${s}`),o.createElement(R.J9,{iconSize:l,className:s,style:n})):null}render(){const e=this.props,{className:t,id:n,url:r,type:l,label:s,onClick:c,style:u}=e,d=(0,Z.Z)(e,["className","id","url","type","label","onClick","style"]),m="primary"===l?"aui-button-primary":"",f=i()(t,m),h=this.getIcon(),p=$()((0,a.Z)({classes:f,id:n,url:r,label:s,onClick:c,style:u,icon:h},d),["disableIcon","iconStyle","spinner","iconInfo","iconSize"]);return o.createElement(z,(0,a.Z)({},p))}}q.displayName="WebItem",(0,M.Z)(q,"defaultProps",{spinner:!1,iconStyle:{},style:{},iconSize:"small"});var V=n(239381),K=n(557098),U=n(401246),G=n.n(U),W=n(655050),j=n(440805),Y=n(235748),J=n(607054);y()`query ExperimentalAnalyticsBylineContentViewsQuery($contentId:String!)@experimental{experimentalAnalyticsBylineContentViews(contentId:$contentId){count}}`;const Q=y()`query ExperimentalAnalyticsBylineContentViewersQuery($contentId:String!)@experimental{experimentalAnalyticsBylineContentViewers(contentId:$contentId){count}}`,X=(y()`query ContentAnalyticsViewsQuery($contentId:ID!$fromDate:String){contentAnalyticsViews(contentId:$contentId fromDate:$fromDate){count id}}`,y()`query ContentAnalyticsViewersQuery($contentId:ID!$fromDate:String){contentAnalyticsViewers(contentId:$contentId fromDate:$fromDate){count id}}`),ee=(0,d.vU)({viewers:{id:"confluence-analytics.byline.user-views.message",defaultMessage:"{count, plural, one {1 person viewed} other {{formattedCount} people viewed}}",description:"Analytics byline text flowing number of unique user views"}}),te=e=>{let{contentId:t,isBylineGraphqlRequestsEnabled:n}=e,r=(0,Z.Z)(e,["contentId","isBylineGraphqlRequestsEnabled"]);const[i,{data:l,loading:s,error:c}]=(0,u.td)(X,{variables:{contentId:t}}),[m,{data:f,loading:h,error:p}]=(0,u.td)(Q,{variables:{contentId:t}});let b;b=n?(null==l?void 0:l.contentAnalyticsViewers.count)||-1:(null==f?void 0:f.experimentalAnalyticsBylineContentViewers.count)||-1;const y=n?s:h,g=n?c:p;(0,o.useEffect)((()=>{n?i():m()}),[n,i,m]);const[v,E]=(0,o.useState)(b),_=(I=v,G()(I).format("0.[0]a"));var I;const w=(0,o.useCallback)((e=>{if(e.data&&"update_analytics_byline"==e.data.eventType){if(!e.data.usersViewed)throw new Error("event.data.usersViewed should be defined");E(e.data.usersViewed)}}),[E]);if((0,o.useEffect)((()=>(window.addEventListener("message",w),()=>{window.removeEventListener("message",w)})),[w]),(0,o.useEffect)((()=>{E(b)}),[b]),y)return null;if(v>0)return o.createElement(o.Fragment,null,o.createElement(Y.F,{name:K.q.ANALYTICS_BYLINE}),o.createElement(d._H,(0,a.Z)((0,a.Z)({},ee.viewers),{},{values:{count:v,formattedCount:_}}),(e=>o.createElement(q,(0,a.Z)((0,a.Z)({},r),{},{label:e})))));{const e=g&&!(0,W.T)(g)?o.createElement(o.Fragment,null,o.createElement(J.D,{name:K.q.ANALYTICS_BYLINE,error:g}),o.createElement(j.X,{error:g})):null;return o.createElement(o.Fragment,null,e,o.createElement(q,(0,a.Z)({},r)))}},ne=e=>{const t=(0,L.TW)("confluence.frontend.byline.graphql.request"),{createAnalyticsEvent:n}=(0,p._)(),{contentId:r}=e,i=(0,o.useCallback)((()=>{n({type:"sendUIEvent",data:{source:"page",action:"displayed",actionSubject:"tooltip",actionSubjectId:"analytics",attributes:{type:"viewers"}}}).fire()}),[n]);return(0,o.useEffect)((()=>{n({type:"sendTrackEvent",data:{source:"confluence-frontend",action:"displayed",actionSubject:"analytics",actionSubjectId:r,attributes:{type:"viewers"}}}).fire()}),[r,n]),o.createElement(o.Fragment,null,o.createElement(V.U,{name:K.q.ANALYTICS_BYLINE}),o.createElement(te,(0,a.Z)((0,a.Z)({},e),{},{onMouseEnter:i,isBylineGraphqlRequestsEnabled:t})))};ne.displayName="AnalyticsWebItem";const ae={fontSize:"14px",display:"inline-block",verticalAlign:"top",paddingLeft:"8px"},re=e=>{const t=(0,L.ye)("confluence.frontend.fabric.share.published"),n=(0,L.TW)("confluence.frontend.fabric.editor.scheduled-publish"),{webItems:r,actions:u,modifications:d,className:m,id:f,disableIcons:h,webItemClassName:p,ContainerTagName:b,pageId:y,dataTestId:g}=e;return o.createElement(l.xs,{to:[s.F]},(({markItem:e,state:l})=>o.createElement(b,{className:m,id:f,"data-testid":g},r.map((r=>{const s={key:r.completeKey,url:r.url,id:r.id,onClick:r.onClick||u[r.moduleKey],className:i()(r.styleClass,p),params:r.params,iconInfo:r.icon,label:r.label,tooltip:r.tooltip,spinner:!!d[r.moduleKey]&&d[r.moduleKey].spinner,disableIcon:h,iconStyle:r.iconStyle};return r.id===T.H.CONTENT_METADATA_JIRA&&(s["data-jira-metadata-count"]=-1),y&&r.id===T.H.DRAFT_STATUS_LOZENGE?r.moduleKey===T.H.SCHEDULED_STATUS_LOZENGE&&n?o.createElement(v,{key:y,contentId:y}):o.createElement(I,{key:y,contentId:y}):r.id===T.H.CONTENT_METADATA_ATTACHMENTS?o.createElement(c.y,{key:"view-attachments-button"}):r.id===T.H.INVITE_TO_EDIT?o.createElement("span",{style:ae,key:"fabric-share"},t?o.createElement(F._n,{contentId:r.contentId,markItem:e}):o.createElement(F.Hs,{className:"share webitem-invite-button",id:r.id,markItem:e})):r.id===T.H.CONTENT_METADATA_PAGE_RESTRICTIONS?o.createElement(w.S,{attribution:S.x.MISSION_CONTROL,key:"restrictions-dialog-trigger"},o.createElement(B.G,{triggeredFrom:"fromView",markItemAsLoaded:e,headerItemsLoaded:l.itemsLoaded})):r.id===T.H.EDIT_PAGE_METADATA_RESTRICTIONS?o.createElement(w.S,{attribution:S.x.MISSION_CONTROL,key:"restrictions-dialog-editor-trigger"},o.createElement(k.u,null),o.createElement(B.G,{triggeredFrom:"fromEdit",editor:"fabric"})):r.id===T.H.ANALYTICS_ADDON_ACTIONS_MENU||r.id===T.H.ANALYTICS_ADDON_BYLINE?o.createElement(w.S,{key:"byline-analytics",attribution:S.x.CC_ANALYTICS},o.createElement(C.G,{key:r.completeKey,webItemId:r.id},o.createElement(ne,(0,a.Z)({contentId:y},s)))):r.id===T.H.CONTENT_METADATA_JIRA?o.createElement(x,{key:r.completeKey},o.createElement(q,(0,a.Z)({},s))):o.createElement(q,(0,a.Z)({key:r.completeKey},s))})))))};re.displayName="WebItemList",re.displayName="WebItemList",re.defaultProps={disableIcons:!1,ContainerTagName:"div",actions:{},modifications:{}}},544289:(e,t,n)=>{"use strict";n.d(t,{p:()=>h});var a=n(159394),r=n(151119),i=n(202784),o=(n(213980),n(384684)),l=n(984636),s=n.n(l),c=n(475652),u=n.n(c),d=n(424704);class m extends i.Component{constructor(...e){super(...e),(0,r.Z)(this,"state",{superBatchLoaded:!1})}componentDidMount(){this.mounted=!0;const{webItems:e,onLoad:t,waitForSuperBatch:n}=this.props;t&&t({webItems:e}),n&&(0,d.n2)().then((()=>{this.mounted&&this.setState({superBatchLoaded:!0})}))}componentWillUnmount(){this.mounted=!1}render(){const{id:e,tagName:t,className:n,style:a,children:r,webItems:o,webSections:l,location:s,contentId:c,waitForSuperBatch:u}=this.props;if(u&&!this.state.superBatchLoaded)return null;const d={"data-webitem-location":s,"data-content-id":c,children:"function"==typeof r?r({webItems:o,webSections:l}):null};return e&&(d.id=e),n&&(d.className=n),a&&(d.style=a),i.createElement(t,d)}}m.displayName="WebItemLocationComponent",(0,r.Z)(m,"defaultProps",{tagName:"div"});var f=n(840187);class h extends i.Component{constructor(...e){super(...e),(0,r.Z)(this,"experienceSuccess",(e=>{this.props.experienceSuccess&&this.props.experienceSuccess(e)}))}render(){const{location:e,children:t,onLoad:n,hasMultipleSections:r,renderWhenLoading:l,allowedWebItems:c,notAllowedWebItems:d,fetchPolicy:h,spaceKey:p,contentId:b,id:y,className:g,style:v,tagName:E,version:_,waitForSuperBatch:I}=this.props,w={location:Array.isArray(e)?null:e,locations:Array.isArray(e)?e:[],contentId:b||null,spaceKey:p||null,version:_||null};return i.createElement(o.AE,{query:f.W,variables:w,fetchPolicy:h},(({data:o,loading:f,error:h})=>{var p;if(h)return null;if(f&&!o)return l&&"function"==typeof t?t({loading:f}):null;let b=((null!=(p=o)?p.webItemSections:p)||[]).reduce(((e,t)=>e.concat((t.items||[]).map((e=>(0,a.Z)((0,a.Z)({},e),{},{parentSection:{label:t.label||t.styleClass}}))))),[]);b=s()(b,"completeKey"),c&&(b=b.filter((e=>c.includes(e.completeKey)))),d&&(b=b.filter((e=>!d.includes(e.completeKey)))),b.forEach((e=>{const t={};if(Array.isArray(e.params)&&(e.params.forEach((e=>{t[e.key]=e.value})),e.params=t),e.section&&-1!==e.section.indexOf("/")){const t=e.section.split("/");e.webSection=t[1]}}));let _=[];return r&&(_=u()(b.map((e=>e.section)))),b.sort(((e,t)=>e.weight-t.weight==0?e.label.localeCompare(t.label):e.weight-t.weight)),f||this.experienceSuccess(!0),i.createElement(m,{id:y,className:g,style:v,tagName:E,location:e,webItems:b,webSections:_,onLoad:n,waitForSuperBatch:I},t)}))}}h.displayName="WebItemLocation",(0,r.Z)(h,"defaultProps",{fetchPolicy:"cache-and-network"})},840187:(e,t,n)=>{"use strict";n.d(t,{W:()=>r});var a=n(230382);const r=n.n(a)()`query WebItemLocationQuery($location:String$locations:[String]$contentId:ID$spaceKey:String$version:Int){webItemSections(location:$location locations:$locations contentId:$contentId key:$spaceKey version:$version){id label styleClass items{accessKey completeKey hasCondition id icon{path}params{key value}label moduleKey section styleClass tooltip url urlWithoutContextPath weight}}}`},574776:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(202784)),r=i(n(382600));function i(e){return e&&e.__esModule?e:{default:e}}const o=e=>a.default.createElement(r.default,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M11.643 17.965c-1.53 1.495-4.016 1.496-5.542.004a3.773 3.773 0 01.002-5.412l7.147-6.985a2.316 2.316 0 013.233-.003c.893.873.895 2.282.004 3.153l-6.703 6.55a.653.653 0 01-.914-.008.62.62 0 010-.902l6.229-6.087a.941.941 0 000-1.353.995.995 0 00-1.384 0l-6.23 6.087a2.502 2.502 0 000 3.607 2.643 2.643 0 003.683.009l6.703-6.55a4.074 4.074 0 00-.003-5.859 4.306 4.306 0 00-6.002.003l-7.148 6.985a5.655 5.655 0 00-.001 8.118c2.29 2.239 6.015 2.238 8.31-.005l6.686-6.533a.941.941 0 000-1.353.995.995 0 00-1.384 0l-6.686 6.534z" fill="currentColor" fill-rule="evenodd"/></svg>'},e));o.displayName="AttachmentIcon";var l=o;t.default=l},401246:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e,t,n,a,r,i="2.0.6",o={},l={},s={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},c={currentLocale:s.currentLocale,zeroFormat:s.zeroFormat,nullFormat:s.nullFormat,defaultFormat:s.defaultFormat,scalePercentBy100:s.scalePercentBy100};function u(e,t){this._input=e,this._value=t}return(e=function(n){var a,r,i,l;if(e.isNumeral(n))a=n.value();else if(0===n||void 0===n)a=0;else if(null===n||t.isNaN(n))a=null;else if("string"==typeof n)if(c.zeroFormat&&n===c.zeroFormat)a=0;else if(c.nullFormat&&n===c.nullFormat||!n.replace(/[^0-9]+/g,"").length)a=null;else{for(r in o)if((l="function"==typeof o[r].regexps.unformat?o[r].regexps.unformat():o[r].regexps.unformat)&&n.match(l)){i=o[r].unformat;break}a=(i=i||e._.stringToNumber)(n)}else a=Number(n)||null;return new u(n,a)}).version=i,e.isNumeral=function(e){return e instanceof u},e._=t={numberToFormat:function(t,n,a){var r,i,o,s,c,u,d,m=l[e.options.currentLocale],f=!1,h=!1,p=0,b="",y=1e12,g=1e9,v=1e6,E=1e3,_="",I=!1;if(t=t||0,i=Math.abs(t),e._.includes(n,"(")?(f=!0,n=n.replace(/[\(|\)]/g,"")):(e._.includes(n,"+")||e._.includes(n,"-"))&&(c=e._.includes(n,"+")?n.indexOf("+"):t<0?n.indexOf("-"):-1,n=n.replace(/[\+|\-]/g,"")),e._.includes(n,"a")&&(r=!!(r=n.match(/a(k|m|b|t)?/))&&r[1],e._.includes(n," a")&&(b=" "),n=n.replace(new RegExp(b+"a[kmbt]?"),""),i>=y&&!r||"t"===r?(b+=m.abbreviations.trillion,t/=y):i<y&&i>=g&&!r||"b"===r?(b+=m.abbreviations.billion,t/=g):i<g&&i>=v&&!r||"m"===r?(b+=m.abbreviations.million,t/=v):(i<v&&i>=E&&!r||"k"===r)&&(b+=m.abbreviations.thousand,t/=E)),e._.includes(n,"[.]")&&(h=!0,n=n.replace("[.]",".")),o=t.toString().split(".")[0],s=n.split(".")[1],u=n.indexOf(","),p=(n.split(".")[0].split(",")[0].match(/0/g)||[]).length,s?(e._.includes(s,"[")?(s=(s=s.replace("]","")).split("["),_=e._.toFixed(t,s[0].length+s[1].length,a,s[1].length)):_=e._.toFixed(t,s.length,a),o=_.split(".")[0],_=e._.includes(_,".")?m.delimiters.decimal+_.split(".")[1]:"",h&&0===Number(_.slice(1))&&(_="")):o=e._.toFixed(t,0,a),b&&!r&&Number(o)>=1e3&&b!==m.abbreviations.trillion)switch(o=String(Number(o)/1e3),b){case m.abbreviations.thousand:b=m.abbreviations.million;break;case m.abbreviations.million:b=m.abbreviations.billion;break;case m.abbreviations.billion:b=m.abbreviations.trillion}if(e._.includes(o,"-")&&(o=o.slice(1),I=!0),o.length<p)for(var w=p-o.length;w>0;w--)o="0"+o;return u>-1&&(o=o.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===n.indexOf(".")&&(o=""),d=o+_+(b||""),f?d=(f&&I?"(":"")+d+(f&&I?")":""):c>=0?d=0===c?(I?"-":"+")+d:d+(I?"-":"+"):I&&(d="-"+d),d},stringToNumber:function(e){var t,n,a,r=l[c.currentLocale],i=e,o={thousand:3,million:6,billion:9,trillion:12};if(c.zeroFormat&&e===c.zeroFormat)n=0;else if(c.nullFormat&&e===c.nullFormat||!e.replace(/[^0-9]+/g,"").length)n=null;else{for(t in n=1,"."!==r.delimiters.decimal&&(e=e.replace(/\./g,"").replace(r.delimiters.decimal,".")),o)if(a=new RegExp("[^a-zA-Z]"+r.abbreviations[t]+"(?:\\)|(\\"+r.currency.symbol+")?(?:\\))?)?$"),i.match(a)){n*=Math.pow(10,o[t]);break}n*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),n*=Number(e)}return n},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,n){return e.slice(0,n)+t+e.slice(n)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var n,a=Object(e),r=a.length>>>0,i=0;if(3===arguments.length)n=arguments[2];else{for(;i<r&&!(i in a);)i++;if(i>=r)throw new TypeError("Reduce of empty array with no initial value");n=a[i++]}for(;i<r;i++)i in a&&(n=t(n,a[i],i,a));return n},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(e,n){var a=t.multiplier(n);return e>a?e:a}),1)},toFixed:function(e,t,n,a){var r,i,o,l,s=e.toString().split("."),c=t-(a||0);return r=2===s.length?Math.min(Math.max(s[1].length,c),t):c,o=Math.pow(10,r),l=(n(e+"e+"+r)/o).toFixed(r),a>t-r&&(i=new RegExp("\\.?0{1,"+(a-(t-r))+"}$"),l=l.replace(i,"")),l}},e.options=c,e.formats=o,e.locales=l,e.locale=function(e){return e&&(c.currentLocale=e.toLowerCase()),c.currentLocale},e.localeData=function(e){if(!e)return l[c.currentLocale];if(e=e.toLowerCase(),!l[e])throw new Error("Unknown locale : "+e);return l[e]},e.reset=function(){for(var e in s)c[e]=s[e]},e.zeroFormat=function(e){c.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){c.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){c.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,t,n){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=n,n},e.validate=function(t,n){var a,r,i,o,l,s,c,u;if("string"!=typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{c=e.localeData(n)}catch(d){c=e.localeData(e.locale())}return i=c.currency.symbol,l=c.abbreviations,a=c.delimiters.decimal,r="."===c.delimiters.thousands?"\\.":c.delimiters.thousands,!(null!==(u=t.match(/^[^\d]+/))&&(t=t.substr(1),u[0]!==i)||null!==(u=t.match(/[^\d]+$/))&&(t=t.slice(0,-1),u[0]!==l.thousand&&u[0]!==l.million&&u[0]!==l.billion&&u[0]!==l.trillion)||(s=new RegExp(r+"{2}"),t.match(/[^\d.,]/g)||(o=t.split(a)).length>2||(o.length<2?!o[0].match(/^\d+.*\d$/)||o[0].match(s):1===o[0].length?!o[0].match(/^\d+$/)||o[0].match(s)||!o[1].match(/^\d+$/):!o[0].match(/^\d+.*\d$/)||o[0].match(s)||!o[1].match(/^\d+$/))))},e.fn=u.prototype={clone:function(){return e(this)},format:function(t,n){var a,r,i,l=this._value,s=t||c.defaultFormat;if(n=n||Math.round,0===l&&null!==c.zeroFormat)r=c.zeroFormat;else if(null===l&&null!==c.nullFormat)r=c.nullFormat;else{for(a in o)if(s.match(o[a].regexps.format)){i=o[a].format;break}r=(i=i||e._.numberToFormat)(l,s,n)}return r},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var n=t.correctionFactor.call(null,this._value,e);function a(e,t,a,r){return e+Math.round(n*t)}return this._value=t.reduce([this._value,e],a,0)/n,this},subtract:function(e){var n=t.correctionFactor.call(null,this._value,e);function a(e,t,a,r){return e-Math.round(n*t)}return this._value=t.reduce([e],a,Math.round(this._value*n))/n,this},multiply:function(e){function n(e,n,a,r){var i=t.correctionFactor(e,n);return Math.round(e*i)*Math.round(n*i)/Math.round(i*i)}return this._value=t.reduce([this._value,e],n,1),this},divide:function(e){function n(e,n,a,r){var i=t.correctionFactor(e,n);return Math.round(e*i)/Math.round(n*i)}return this._value=t.reduce([this._value,e],n),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,n,a){var r,i=e._.includes(n," BPS")?" ":"";return t*=1e4,n=n.replace(/\s?BPS/,""),r=e._.numberToFormat(t,n,a),e._.includes(r,")")?((r=r.split("")).splice(-1,0,i+"BPS"),r=r.join("")):r=r+i+"BPS",r},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),a={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},r="("+(r=(n={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(a.suffixes.filter((function(e){return n.suffixes.indexOf(e)<0}))).join("|")).replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(r)},format:function(t,r,i){var o,l,s,c=e._.includes(r,"ib")?a:n,u=e._.includes(r," b")||e._.includes(r," ib")?" ":"";for(r=r.replace(/\s?i?b/,""),o=0;o<=c.suffixes.length;o++)if(l=Math.pow(c.base,o),s=Math.pow(c.base,o+1),null===t||0===t||t>=l&&t<s){u+=c.suffixes[o],l>0&&(t/=l);break}return e._.numberToFormat(t,r,i)+u},unformat:function(t){var r,i,o=e._.stringToNumber(t);if(o){for(r=n.suffixes.length-1;r>=0;r--){if(e._.includes(t,n.suffixes[r])){i=Math.pow(n.base,r);break}if(e._.includes(t,a.suffixes[r])){i=Math.pow(a.base,r);break}}o*=i||1}return o}}),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,n,a){var r,i,o=e.locales[e.options.currentLocale],l={before:n.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:n.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(n=n.replace(/\s?\$\s?/,""),r=e._.numberToFormat(t,n,a),t>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(l.before,"-")&&!e._.includes(l.before,"(")&&(l.before="-"+l.before),i=0;i<l.before.length;i++)switch(l.before[i]){case"$":r=e._.insert(r,o.currency.symbol,i);break;case" ":r=e._.insert(r," ",i+o.currency.symbol.length-1)}for(i=l.after.length-1;i>=0;i--)switch(l.after[i]){case"$":r=i===l.after.length-1?r+o.currency.symbol:e._.insert(r,o.currency.symbol,-(l.after.length-(1+i)));break;case" ":r=i===l.after.length-1?r+" ":e._.insert(r," ",-(l.after.length-(1+i)+o.currency.symbol.length-1))}return r}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,n,a){var r=("number"!=typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return n=n.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(r[0]),n,a)+"e"+r[1]},unformat:function(t){var n=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),a=Number(n[0]),r=Number(n[1]);function i(t,n,a,r){var i=e._.correctionFactor(t,n);return t*i*(n*i)/(i*i)}return r=e._.includes(t,"e-")?r*=-1:r,e._.reduce([a,Math.pow(10,r)],i,1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,n,a){var r=e.locales[e.options.currentLocale],i=e._.includes(n," o")?" ":"";return n=n.replace(/\s?o/,""),i+=r.ordinal(t),e._.numberToFormat(t,n,a)+i}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,n,a){var r,i=e._.includes(n," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),n=n.replace(/\s?\%/,""),r=e._.numberToFormat(t,n,a),e._.includes(r,")")?((r=r.split("")).splice(-1,0,i+"%"),r=r.join("")):r=r+i+"%",r},unformat:function(t){var n=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*n:n}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,n){var a=Math.floor(e/60/60),r=Math.floor((e-60*a*60)/60),i=Math.round(e-60*a*60-60*r);return a+":"+(r<10?"0"+r:r)+":"+(i<10?"0"+i:i)},unformat:function(e){var t=e.split(":"),n=0;return 3===t.length?(n+=60*Number(t[0])*60,n+=60*Number(t[1]),n+=Number(t[2])):2===t.length&&(n+=60*Number(t[0]),n+=Number(t[1])),Number(n)}}),e})?a.call(t,n,t,e):a)||(e.exports=r)}}]);
//# sourceMappingURL=80353.AuU7WRapBP.js.map