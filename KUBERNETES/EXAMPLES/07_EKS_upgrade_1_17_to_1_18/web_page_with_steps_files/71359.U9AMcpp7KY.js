(self._cf=self._cf||[]).push([[71359],{180213:(e,t,n)=>{"use strict";let a;n.d(t,{x:()=>a}),function(e){e.INHERIT="inherit",e.BACKBONE="backbone",e.BETTER_TOGETHER="better-together",e.COLLABORATION="collaboration",e.CONTENT_EXPERIENCE="content-experience",e.DISCO="disco",e.ECOSYSTEM="ecosystem",e.GROWTH="growth",e.GROWTH_UPFLOW="growth-upflow",e.MISSION_CONTROL="mission-control",e.CC_ONBOARDING="cc-onboarding",e.TAILORED_EXPERIENCES="tailored-experiences",e.SMARTS="smarts",e.CC_ANALYTICS="cc-analytics"}(a||(a={}))},908317:(e,t,n)=>{"use strict";n.d(t,{S:()=>A});var a=n(159394),E=n(202784),o=n(772005),i=n(991947),r=n(768606),s=n(327472);const _=(0,r.P)({__loadable_id__:"IzFuP",name:"ErrorComponent",loader:async()=>(await Promise.all([n.e(78248),n.e(11216),n.e(29636)]).then(n.bind(n,798900))).ErrorComponent}),A=({attribution:e,children:t,modal:n})=>{const r=(0,E.useCallback)((e=>E.createElement(_,(0,a.Z)((0,a.Z)({},e),{},{modal:n}))),[n]),A=(0,E.useCallback)((e=>{(0,i.OG)(e)||(0,o.OV)().fail({error:e})}),[]);return E.createElement(s.O,{attribution:e,renderOnError:r,onError:A},t)};A.displayName="ErrorBoundary"},327472:(e,t,n)=>{"use strict";n.d(t,{O:()=>I});var a=n(159394),E=n(768762),o=n.n(E),i=n(202784),r=n(841347),s=n(171529),_=n(389027),A=n(180213);const c=i.createContext("unknown");c.displayName="AttributionContext";var d=n(52822);class l extends i.Component{componentDidMount(){0}componentDidUpdate(){0}componentDidCatch(e,t){this.props.onError(e,t),this.setState({error:e,errorInfo:t})}render(){const{attribution:e,children:t,renderOnError:n}=this.props;return this.state&&this.state.error&&this.state.errorInfo?i.createElement(n,{attribution:e,error:this.state.error,errorInfo:this.state.errorInfo}):t}}function I(e){const{children:t,onError:n,renderOnError:E}=e,o=function(e){const t=(0,i.useContext)(c);return e===A.x.INHERIT?t:e}(e.attribution),I=(0,i.useContext)(d.W),T=(0,i.useCallback)(((e,t)=>{if(I&&I(e))throw e;(0,s.aU)(e,{componentStack:t.componentStack,errorHashCode:p(e,t)}),(0,_.U)().submitError(e,{attribution:o}),(0,r.Xb)(e),n&&n(e,t)}),[o,I,n]),m=(0,i.useCallback)((e=>i.createElement(E,(0,a.Z)({},e))),[]);return i.createElement(c.Provider,{value:o},i.createElement(l,{attribution:o,onError:T,renderOnError:m},t))}function p(e,t){const n=o()(`${e.message||String(e)}${t.componentStack}`,{asBytes:!0});return(1073741823&(255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24)).toString(32)}l.displayName="GenericErrorBoundaryComponent",I.displayName="GenericErrorBoundary"},52822:(e,t,n)=>{"use strict";n.d(t,{W:()=>a});const a=n(202784).createContext((()=>!1));a.displayName="KnownErrorBoundaryContext"},948125:(e,t,n)=>{"use strict";n.d(t,{k:()=>i});var a=n(202784),E=n(327472);const o=()=>null,i=({attribution:e,children:t,onError:n})=>a.createElement(E.O,{attribution:e,renderOnError:o,onError:n},t);i.displayName="TransparentErrorBoundary"},686882:(e,t,n)=>{"use strict";n.d(t,{Pf:()=>r,mv:()=>s,U1:()=>_});var a=n(159394),E=n(202784),o=n(908317),i=n(948125);function r(e){return _(o.S,e)}function s(e){return _(i.k,e)}function _(e,t){return function(n){return o=>E.createElement(e,(0,a.Z)({},t),E.createElement(n,(0,a.Z)({},o)))}}},557098:(e,t,n)=>{"use strict";let a;n.d(t,{q:()=>a}),function(e){e.FOLLOW_DEEP_LINK="follow-deep-link",e.VIEW_MACRO_RENDERER="view-macro-renderer",e.VIEW_MACRO_EDITOR="view-macro-editor",e.VIEW_ALL_MACRO="view-all-macro",e.VIEW_JIRA_MACRO="view-jira-macro",e.MIGRATE_PAGE="migrate-page",e.MIGRATE_PAGE_PUBLISH="migrate-page/publish",e.MIGRATE_TEMPLATE="migrate-template",e.ADD_PAGE_COMMENT="add-page-comment",e.ADD_PAGE_COMMENT_LOAD="add-page-comment/load",e.ADD_PAGE_COMMENT_PUBLISH="add-page-comment/publish",e.DELETE_PAGE_COMMENT="delete-page-comment",e.ADD_INLINE_COMMENT="add-inline-comment",e.ADD_INLINE_COMMENT_LOAD="add-inline-comment/load",e.ADD_INLINE_COMMENT_PUBLISH="add-inline-comment/publish",e.EDIT_INLINE_COMMENT="edit-inline-comment",e.EDIT_INLINE_COMMENT_LOAD="edit-inline-comment/load",e.EDIT_INLINE_COMMENT_PUBLISH="edit-inline-comment/publish",e.VIEW_INLINE_COMMENT="view-inline-comment",e.VIEW_INLINE_COMMENT_TOP_LEVEL="view-inline-comment/toplevel",e.VIEW_INLINE_COMMENT_REPLY="view-inline-comment/reply",e.REPLY_TO_INLINE_COMMENT="reply-to-inline-comment",e.REPLY_TO_INLINE_COMMENT_LOAD="reply-to-inline-comment/load",e.REPLY_TO_INLINE_COMMENT_PUBLISH="reply-to-inline-comment/publish",e.DELETE_INLINE_COMMENT="delete-inline-comment",e.RESOLVE_INLINE_COMMENT="resolve-inline-comment",e.UNRESOLVE_INLINE_COMMENT="unresolve-inline-comment",e.VIEW_ALL_INLINE_COMMENTS="view-all-inline-comments",e.VIEW_ALL_ADD_INLINE_COMMENT="view-all-add-inline-comment",e.VIEW_ALL_EDIT_INLINE_COMMENT="view-all-edit-inline-comment",e.VIEW_ALL_REPLY_TO_INLINE_COMMENT="view-all-reply-to-inline-comment",e.VIEW_ALL_DELETE_INLINE_COMMENT="view-all-delete-inline-comment",e.VIEW_ALL_RESOLVE_INLINE_COMMENT="view-all-resolve-inline-comment",e.VIEW_ALL_UNRESOLVE_INLINE_COMMENT="view-all-unresolve-inline-comment",e.COPY_SPACE_PERMISSIONS="copy-space-permissions",e.CREATE_PAGE="create-page",e.CREATE_PAGE_LOAD_DIALOG="create-page/load-dialog",e.CREATE_PAGE_TEMPLATE_VARIABLES="create-page/template-variable-input",e.EDIT_PAGE="edit-page",e.EDIT_PAGE_LOAD="edit-page/load",e.EDIT_PAGE_PUBLISH="edit-page/publish",e.EDIT_PAGE_CLOSE="edit-page/close",e.CREATE_AND_EDIT_PAGE="create-and-edit-page",e.TEMPLATE_EDIT_PAGE="template-edit-page",e.TEMPLATE_EDIT_PAGE_LOAD="template-edit-page/load",e.TEMPLATE_EDIT_PAGE_PUBLISH="template-edit-page/publish",e.TEMPLATE_EDIT_PAGE_CLOSE="template-edit-page/close",e.IN_EDITOR_TEMPLATES_LOAD_PANEL="in-editor-templates-load-panel",e.IN_EDITOR_TEMPLATES_LOAD_PANEL_TEMPLATE_LIST="in-editor-templates-load-panel/template-list",e.IN_EDITOR_TEMPLATES_LOAD_PANEL_CATEGORIES="in-editor-templates-load-panel/categories",e.IN_EDITOR_TEMPLATES_LOAD_PANEL_SPACE_SELECTOR="in-editor-templates-load-panel/space-selector",e.IN_EDITOR_TEMPLATES_UPDATE_CONTENT="in-editor-templates-update-content",e.IN_EDITOR_TEMPLATES_UPDATE_CONTENT_REFRESH_EDITOR="in-editor-templates-update-content/refresh-editor",e.TEMPLATE_GALLERY="template-gallery",e.TEMPLATE_GALLERY_SPACE_SELECTOR="template-gallery/space-selector",e.TEMPLATE_GALLERY_CATEGORIES="template-gallery/categories",e.TEMPLATE_GALLERY_CARDS="template-gallery/cards",e.TEMPLATE_GALLERY_TEMPLATE_DETAIL="template-gallery/template-detail",e.REFRESH_EDITOR_CONTENT="refresh-editor-content",e.CREATE_CONTENT_FROM_TEMPLATE="create-content-from-template",e.BLUEPRINT_WIZARD_LOAD_DIALOG="blueprint-wizard-load-dialog",e.CONNECT_ADDON="connect-addon",e.QUICK_RELOAD="quick-reload",e.RESTRICTED_PAGE="restricted-page",e.RESTRICTED_SPACE="restricted-space",e.RESTRICTIONS_DIALOG="restrictions-dialog",e.RESTRICTIONS_DIALOG_LOAD="restrictions-dialog/load",e.RESTRICTIONS_DIALOG_APPLY="restrictions-dialog/apply",e.INSPECT_PERMISSIONS="inspect-permissions",e.UPSELL_EDITION="upsell-edition",e.ARCHIVE_PAGES="archiving/archive-pages",e.RESTORE_PAGES="archiving/restore-pages",e.SPACE_ARCHIVED_PAGES="archiving/view-space-archived-pages",e.DELETE_PAGE="delete-page",e.MOVE_PAGE_DIALOG_LOAD="move-page-dialog-load",e.MOVE_PUBLISHED_PAGE="move-published-page",e.NOT_FOUND="not-found",e.VIEW_CONTENT="view-content",e.VIEW_PAGE="view-page",e.SPACE_OVERVIEW="space-overview",e.VIEW_PAGE_TITLE="view-page/title",e.VIEW_PAGE_LIKES="view-page/likes",e.VIEW_PAGE_LABELS="view-page/labels",e.VIEW_PAGE_BYLINE="view-page/byline",e.VIEW_PAGE_BYLINE_FORGE="view-page/byline/forge",e.VIEW_PAGE_COMMENTS="view-page/comments",e.VIEW_PAGE_EDIT_BUTTON="view-page/edit",e.VIEW_PAGE_CONTENT_TOOLS="view-page/content-tools",e.VIEW_PAGE_CONTENT_TOOLS_FORGE="view-page/content-tools/forge",e.VIEW_PAGE_CONTEXT_MENU="view-page/context-menu",e.VIEW_PAGE_CONTEXT_MENU_FORGE="view-page/context-menu/forge",e.VIEW_PAGE_CONTENT_HEADER="view-page/content-header",e.VIEW_PAGE_FAVORITE_BUTTON="view-page/favorite",e.VIEW_PAGE_COMPLETE="view-page:complete",e.VIEW_PAGE_SHARE_BUTTON="view-page/share-button",e.VIEW_PAGE_RESTRICTIONS_BUTTON="view-page/restrictions-button",e.VIEW_PAGE_COMMENT_BUTTON="view-page/comment-button",e.VIEW_PAGE_DISCOVER_INLINE_COMMENTS_FEATURE="view-page/discover-inline-comments-feature",e.HEADER_ITEMS_GROUP_LOAD="header-items/group-load",e.HOME="home",e.HOME_SPACES="home/spaces",e.HOME_RECENT_PAGES="home/recent-pages",e.HOME_RIGHT_PANEL="home/right-panel",e.HOME_RIGHT_PANEL_ACTIVITY="home/right-panel/activity",e.HOME_RIGHT_PANEL_WELCOME_MESSAGE="home/right-panel/welcome-message",e.HOME_RIGHT_PANEL_APPS="home/right-panel/apps",e.HOME_RIGHT_PANEL_FORGE="home/right-panel/forge",e.HOME_RIGHT_PANEL_SPACES="home/right-panel/spaces",e.FEED="feed",e.HOME_OVERVIEW="home/overview",e.HOME_OVERVIEW_RECENT="home/overview/recent",e.HOME_RECENT="home/recent",e.HOME_STARRED="home/starred",e.HOME_WATCHING="home/watching",e.HOME_DRAFTS="home/drafts",e.ADVANCED_SEARCH="advanced-search",e.ADVANCED_SEARCH_SPACE_FILTER="advanced-search/space-filter",e.ADVANCED_SEARCH_CONTRIBUTOR_FILTER="advanced-search/contributor-filter",e.ADVANCED_SEARCH_SMART_CONTRIBUTOR_FILTER="advanced-search/smart-contributor-filter",e.RECENT_DROPDOWN_VISITED="recent-dropdown/visited",e.RECENT_DROPDOWN_VISITED_LOAD_MORE="recent-dropdown/visited-load-more",e.RECENT_DROPDOWN_WORKED_ON="recent-dropdown/worked-on",e.RECENT_DROPDOWN_WORKED_ON_LOAD_MORE="recent-dropdown/worked-on-load-more",e.RECENT_DROPDOWN_DRAFTS="recent-dropdown/drafts",e.RECENT_DROPDOWN_DRAFTS_LOAD_MORE="recent-dropdown/drafts-load-more",e.RECENT_DROPDOWN_STARRED="recent-dropdown/starred",e.RECENT_DROPDOWN_STARRED_LOAD_MORE="recent-dropdown/starred-load-more",e.RECENT_HOME_VISITED="recent-home/visited",e.RECENT_HOME_VISITED_LOAD_MORE="recent-home/visited-load-more",e.RECENT_HOME_WORKED_ON="recent-home/worked-on",e.RECENT_HOME_WORKED_ON_LOAD_MORE="recent-home/worked-on-load-more",e.RECENT_HOME_DRAFTS="recent-home/drafts",e.RECENT_HOME_DRAFTS_LOAD_MORE="recent-home/drafts-load-more",e.RECENT_HOME_STARRED="recent-home/starred",e.RECENT_HOME_STARRED_LOAD_MORE="recent-home/starred-load-more",e.PAGE_TREE="page-tree",e.PAGE_TREE_DND="page-tree/dnd",e.ACTIVITY_TAILORED="activity/tailored",e.ACTIVITY_CREATE_SPACE_BUTTON="activity/create-space-button",e.ACTIVITY_RIGHT_SIDEBAR="activity/right-sidebar",e.FEED_MIGRATION_ACTIVITY_POPULAR="feed-migration/activity/popular",e.FEED_MIGRATION_ACTIVITY_ALL_UPDATES="feed-migration/activity/all-updates",e.NAV2_ADMIN_FORGE="navigation/nav-2-admin-navigation/forge",e.APP_NAV_GLOBAL="navigation/app-nav-global-navigation",e.APP_NAV_CONTAINER="navigation/app-nav-container-navigation",e.APP_NAV_ADMIN="navigation/app-nav-admin-navigation",e.APP_NAV_SPACES_DROPDOWN="navigation/app-nav-spaces-dropdown",e.APP_NAV_PAGES_DROPDOWN="navigation/app-nav-pages-dropdown",e.APP_NAV_APPS_DROPDOWN="navigation/app-nav-apps-dropdown",e.APP_NAV_NOTIFICATIONS_DROPDOWN="navigation/app-nav-notifications-dropdown",e.APP_NAV_HELP_DROPDOWN="navigation/app-nav-help-dropdown",e.APP_NAV_PROFILE_DROPDOWN="navigation/app-nav-profile-dropdown",e.SPACE_DIRECTORY="space-directory",e.SPACE_DIRECTORY_YOUR_SPACES="space-directory/your-spaces",e.SPACE_DIRECTORY_FILTER="space-directory/filter",e.SPACE_DIRECTORY_PAGINATE="space-directory/paginate",e.ONBOARDING_START="onboarding/start",e.ONBOARDING_INVITE_USERS="onboarding/invite-users",e.ONBOARDING_REMOVE_INVITE_USERS="onboarding/remove-invite-users",e.ONBOARDING_CREATE_A_SPACE="onboarding/create-a-space",e.ONBOARDING_CHOOSE_A_SPACE="onboarding/choose-a-space",e.ONBOARDING_END="onboarding/end",e.ONBOARDING_CHOOSE_A_SPACE_CARD="onboarding/choose-a-space-card",e.ONBOARDING_SHARED_LINK_SPOTLIGHT="onboarding/shared-link-spotlight",e.ONBOARDING_NUDGE="onboarding/nudge",e.ONBOARDING_ACCOUNT_SETUP="onboarding-account-setup",e.ONBOARDING_QUICKSTART="onboarding-quickstart",e.ONBOARDING_QUICKSTART_INVITE_TOUR="onboarding-quickstart/invite-tour",e.ONBOARDING_NTH_USER_QUICKSTART_HOME_TOUR="onboarding-nth-user-quick-start/home-tour",e.ONBOARDING_NTH_USER_QUICKSTART_SPACE_TOUR="onboarding-nth-user-quick-start/space-tour",e.ONBOARDING_JSW_XFLOW_ADMIN_SWITCHER_TOUR="onboarding-jsw-xflow/admin-switcher-tour",e.ONBOARDING_JSW_XFLOW_NTH_SWITCHER_TOUR="onboarding-jsw-xflow/nth-switcher-tour",e.SPACE_PAGE_APPS_FORGE="space-page-apps/forge",e.SPACE_SETTINGS_INTEGRATIONS_FORGE="space-settings/integrations/forge",e.SITE_PERMISSION_SPACE_ACCESS="site-permission/space-access",e.SPACE_PAGES="space-pages",e.SPACE_PAGES_FILTER="space-pages/filter",e.SPACE_PAGES_PAGINATE="space-pages/paginate",e.SPACE_VIEWS_INITIAL="space-views/initial",e.SPACE_VIEWS_CHANGE="space-views/change",e.SPACE_VIEWS_PAGINATE="space-views/paginate",e.SITE_PERMISSION_REMOVE_SPACE_ACCESS="site-permissions/space-access/remove",e.SITE_PERMISSION_ADD_SPACE_ACCESS="site-permissions/space-access/add",e.ANALYTICS_BYLINE="insights/page-byline",e.GLOBAL_PERMS="global-perms",e.EXPAND_GROUP="expand-group",e.GROUP_MEMBERS_LOAD_MORE="group-members-load-more",e.TEAM_CALENDAR="team-calendar"}(a||(a={}))},267083:(e,t,n)=>{"use strict";n.d(t,{Xj:()=>M,Pp:()=>D,hx:()=>L});var a=n(159394),E=n(38932),o=n(846575),i=n(230382),r=n.n(i);const s=r()`mutation FileUploadMutation($size:Int!$contentType:String!$mimeType:String!$fileName:String!$pageId:String!$fileStoreId:String!$minorEdit:Boolean$renderEditorHTML:Boolean$collectionName:String!)@experimental{experimentalFileUpload(size:$size contentType:$contentType mimeType:$mimeType fileName:$fileName pageId:$pageId fileStoreId:$fileStoreId minorEdit:$minorEdit renderEditorHTML:$renderEditorHTML collectionName:$collectionName)}`,_=r()`query MediaDownloadTokenQuery($contentId:ID!$status:[String]){content(id:$contentId status:$status){nodes{id body{atlas_doc_format{mediaToken{token}}}}}mediaConfiguration{clientId fileStoreUrl}}`,A=r()`query ExternalShareMediaDownloadTokenQuery($contentId:ID!){singleContent(id:$contentId){id body{atlas_doc_format{mediaToken{token}}}}mediaConfiguration{clientId fileStoreUrl}}`,c=r()`query MediaUploadTokenQuery($contentId:ID!){contentMediaSession(contentId:$contentId){token{value}configuration{clientId fileStoreUrl}collection mediaPickerUserToken{id token}}}`,d=async e=>(0,o.WQ)().query({query:_,variables:{contentId:e,status:["current","draft","archived"]},context:{allowOnExternalPage:!0},fetchPolicy:"network-only"}),l=async e=>(0,o.WQ)().query({query:c,variables:{contentId:e},fetchPolicy:"no-cache"});var I=n(703157);const p=()=>{},T=e=>e.contentId&&e.contentType?t=>{const{id:n,name:a,size:E,mimeType:i}=t,{contentId:r,contentType:_}=e;(e=>{(0,o.WQ)().mutate({mutation:s,variables:e})})({size:E,contentType:_,mimeType:i,fileName:a,pageId:r,fileStoreId:n,minorEdit:!0,renderEditorHTML:!1,collectionName:`contentId-${r}`})}:p,m=54e4,O=(0,I.O)((async e=>{var t,n,a,E,i,r,s,_,c,l,I,p,T;const m=await(e.isExternalShare?(async e=>(0,o.WQ)().query({query:A,variables:{contentId:e},context:{allowOnExternalPage:!0},fetchPolicy:"network-only"}))(e.contentId):d(e.contentId));return{token:(e.isExternalShare?null==m||null===(t=m.data)||void 0===t||null===(n=t.singleContent)||void 0===n||null===(a=n.body)||void 0===a||null===(E=a.atlas_doc_format)||void 0===E||null===(i=E.mediaToken)||void 0===i?void 0:i.token:null==m||null===(r=m.data)||void 0===r||null===(s=r.content)||void 0===s||null===(_=s.nodes)||void 0===_||null===(c=_[0])||void 0===c||null===(l=c.body)||void 0===l||null===(I=l.atlas_doc_format)||void 0===I||null===(p=I.mediaToken)||void 0===p?void 0:p.token)||"",config:(null==m||null===(T=m.data)||void 0===T?void 0:T.mediaConfiguration)||{}}}),m),N=e=>async()=>{const t=await e();return{token:t.token||"",clientId:t.config.clientId||"",baseUrl:t.config.fileStoreUrl||""}},R=async e=>{var t,n,a,E,o,i,r;const s=await d(e),{clientId:_="",fileStoreUrl:A=""}=(null==s||null===(t=s.data)||void 0===t?void 0:t.mediaConfiguration)||{};return{clientId:_,token:(null==s||null===(n=s.data)||void 0===n||null===(a=n.content)||void 0===a||null===(E=a.nodes)||void 0===E||null===(o=E[0])||void 0===o||null===(i=o.body)||void 0===i||null===(r=i.atlas_doc_format)||void 0===r?void 0:r.mediaToken.token)||"",baseUrl:A||""}},S=(0,I.O)((async e=>{var t,n;const a=await l(e.contentId),E=(null==a||null===(t=a.data)||void 0===t?void 0:t.contentMediaSession)||{};return{token:(null==E||null===(n=E.token)||void 0===n?void 0:n.value)||"",config:(null==E?void 0:E.configuration)||{},collectionId:(null==E?void 0:E.collection)||""}}),m),u=(0,I.O)((async e=>{var t,n;const a=await l(e.contentId),E=(null==a||null===(t=a.data)||void 0===t?void 0:t.contentMediaSession)||{},o=(null==E||null===(n=E.configuration)||void 0===n?void 0:n.fileStoreUrl)||"",i=(null==E?void 0:E.mediaPickerUserToken)||{};return{token:i.token||"",config:{fileStoreUrl:o,clientId:i.id||""}}}),354e4),C=async e=>(await S.getValue(e)).collectionId,P=async e=>{const t=await u.getValue(e);return(0,a.Z)((0,a.Z)({authProvider:N((()=>S.getValue(e)))},t.token?{userAuthProvider:N((()=>Promise.resolve(t)))}:{}),{},{getAuthFromContext:R})},L=async e=>({authProvider:N((async()=>{let t=await O.getValue(e);return t.token||(t=await O.forceGetValue(e)),t})),getAuthFromContext:R}),D=async e=>({viewMediaClientConfig:await L(e)}),M=async e=>{G(e);const[t,n,a]=await Promise.all([L(e),P(e),C(e)]);return{viewMediaClientConfig:t,uploadParams:{collection:a},uploadMediaClientConfig:n}};let g;const G=e=>{g&&E.h.off("file-added",g),g=T(e),E.h.on("file-added",g)}},703157:(e,t,n)=>{"use strict";n.d(t,{O:()=>i});var a=n(818149),E=n.n(a);const o=[-1/0,null,null],i=(e,t)=>{const n={};function a(a,i){const r=Date.now();let s="";try{s=JSON.stringify(a)}catch(d){0}const[_,A,c]=n[s]||o;if(i||_+t<=r||!E()(A,a)){const t=e(a);return n[s]=[r,a,t],t}return c}return{forceGetValue:e=>a(e,!0),getValue:e=>a(e,!1)}}},494775:(e,t,n)=>{"use strict";n.d(t,{b:()=>a});const a="/wiki"},591789:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BASE:()=>r,WIKI:()=>s,HOME:()=>_,TEMPLATE_GALLERY:()=>A,CALENDAR:()=>c,MY_CALENDAR:()=>d,QUESTIONS:()=>l,CONTENT_HISTORY:()=>I,CONTENT_HISTORY_LEGACY:()=>p,EDIT_PAGE:()=>T,EDIT_BLOG:()=>m,EDIT_PAGE_V2:()=>O,EDIT_BLOG_V2:()=>N,EDIT_PAGE_EMBED:()=>R,EDIT_PAGE_NCS_V2:()=>S,CREATE_PAGE:()=>u,CREATE_BLOG:()=>C,DELETE_PAGE:()=>P,ONBOARDING:()=>L,SPACE_DIRECTORY:()=>D,SPACE_SETTINGS:()=>M,SPACE_SETTINGS_REORDERPAGES:()=>g,SPACE_PERMISSION:()=>G,SPACE_OVERVIEW_REDIRECT_LEGACY:()=>v,DELETE_SPACE_LEGACY:()=>w,SPACE_INDEX:()=>b,SPACE_OVERVIEW:()=>h,VIEW_PAGE:()=>y,NEXT_VIEW_PAGE:()=>f,BLOG_HOME:()=>V,VIEW_BLOG:()=>W,ADMIN_SETTINGS:()=>B,ADMIN_EDIT_EXTERNAL_SHARING:()=>U,ADMIN_FORGE_APPS:()=>H,ADMIN_NEW_GLOBAL_PERMISSIONS:()=>Y,ADMIN_NEW_GLOBAL_PERMISSIONS_USER_DETAILS:()=>k,ADMIN_NEW_GLOBAL_PERMISSIONS_GROUP_DETAILS:()=>K,ADMIN_GLOBAL_PERMISSIONS:()=>F,ADMIN_EDIT_GLOBAL_PERMISSIONS:()=>$,ADMIN_SPACE_PERMISSIONS:()=>x,ADMIN_EDIT_SPACE_PERMISSIONS:()=>q,ADMIN_AUDIT_LOG:()=>Z,SPACE_CALENDAR:()=>Q,SPACE_CALENDARS:()=>X,DISCOVER:()=>z,ALL_UPDATES:()=>j,POPULAR:()=>J,MY_WORK_HOME:()=>ee,MY_WORK_DRAFTS:()=>te,MY_WORK_RECENT:()=>ne,MY_RECENTLY_VISITED:()=>ae,MY_SAVED_FOR_LATER:()=>Ee,RECENT_PAGES:()=>oe,RECENT_VISITED:()=>ie,RECENT_DRAFTS:()=>re,RECENT_SAVED:()=>se,TEMPLATE_MIGRATION_PREVIEW:()=>_e,EDIT_TEMPLATE:()=>Ae,EDIT_TEMPLATE_BLUEPRINT:()=>ce,EDIT_TEMPLATE_SPACE:()=>de,CREATE_TEMPLATE:()=>le,CREATE_TEMPLATE_SPACE:()=>Ie,HELLO_WORLD:()=>pe,DASHBOARD_ACTION_LEGACY:()=>Te,SPA_ACTION_LEGACY:()=>me,INDEX_ACTION_LEGACY:()=>Oe,CREATE_PAGE_ACTION_LEGACY:()=>Ne,CREATE_BLOG_ACTION_LEGACY:()=>Re,CREATE_PAGE_VARIABLES_ACTION_LEGACY:()=>Se,RESUME_DRAFT_LEGACY:()=>ue,COPY_PAGE_LEGACY:()=>Ce,VIEW_PAGE_ACTION_LEGACY:()=>Pe,SPACE_OVERVIEW_INDEX_ACTION_LEGACY:()=>Le,SPACE_INDEX_ACTION_LEGACY:()=>De,SPACE_PAGES:()=>Me,VIEW_BLOG_DATE_LEGACY:()=>ge,ACTION_REDIRECT_LEGACY:()=>Ge,ADVANCED_SEARCH_LEGACY:()=>ve,ADVANCED_SEARCH:()=>we,EXTERNAL_SHARE:()=>be,VIEW_PAGE_MOBILE:()=>he,VIEW_BLOG_MOBILE:()=>ye,PEOPLE_DIRECTORY_SEARCH:()=>fe,CONFLUENCE_PEOPLE_DIRECTORY_SEARCH:()=>Ve,PEOPLE_DIRECTORY:()=>We,SPACE_RESTRICTED_PAGES:()=>Be,SPACE_ARCHIVED_PAGES:()=>Ue,PAGE_DIFF_BY_VERSION:()=>He,SPACE_ANALYTICS:()=>Ye,SPACE_QUESTIONS:()=>ke,SPACE_BULK_TOOLS:()=>Ke,SPACE_FORGE_APPS:()=>Fe});var a=n(395682),E=n(494775);const o=(e,t)=>e.params.contentId!==t.params.contentId,i=(e,t)=>e.params.spaceKey!==t.params.spaceKey,r=new a.A({name:"BASE",pattern:"/"}),s=new a.A({name:"WIKI",pattern:`${E.b}`}),_=new a.A({name:"HOME",pattern:`${E.b}/home/:view?`}),A=new a.A({name:"TEMPLATE_GALLERY",pattern:`${E.b}/templates`}),c=new a.A({name:"CALENDAR",pattern:E.b+"/calendar/mycalendar.action"}),d=new a.A({name:"MY_CALENDAR",pattern:E.b+"/mycalendar"}),l=new a.A({name:"QUESTIONS",pattern:E.b+"/plugins/servlet/ac/com.atlassian.confluence.plugins.confluence-questions/globalQuestionsViewer?ac.com.atlassian.confluence.plugins.confluence-questions.pattern=/questions/ask"}),I=new a.A({name:"CONTENT_HISTORY",pattern:E.b+"/spaces/:spaceKey/history/:contentId(\\d+)/:contentSlug?"}),p=new a.A({name:"CONTENT_HISTORY_LEGACY",pattern:E.b+"/pages/viewpreviousversions.action"}),T=new a.A({name:"EDIT_PAGE",pattern:E.b+"/spaces/:spaceKey/:contentType(pages)/edit/:contentId(\\d+)"}),m=new a.A({name:"EDIT_BLOG",pattern:E.b+"/spaces/:spaceKey/:contentType(blog)/edit/:contentId(\\d+)"}),O=new a.A({name:"EDIT_PAGE_V2",pattern:E.b+"/spaces/:spaceKey/:contentType(pages)/edit-v2/:contentId(\\d+)"}),N=new a.A({name:"EDIT_BLOG_V2",pattern:E.b+"/spaces/:spaceKey/:contentType(blog)/edit-v2/:contentId(\\d+)"}),R=new a.A({name:"EDIT_PAGE_EMBED",pattern:E.b+"/spaces/:spaceKey/:contentType(pages)/edit-embed/:contentId(\\d+)"}),S=new a.A({name:"EDIT_PAGE_NCS_V2",pattern:E.b+"/spaces/:spaceKey/:contentType(pages)/edit-ncsv2/:contentId(\\d+)"}),u=new a.A({name:"CREATE_PAGE",pattern:E.b+"/spaces/:spaceKey/:contentType(pages)/create"}),C=new a.A({name:"CREATE_BLOG",pattern:E.b+"/spaces/:spaceKey/:contentType(blog)/create"}),P=new a.A({name:"DELETE_PAGE",pattern:E.b+"/pages/removepage.action?pageId=:contentId(\\d+)"}),L=new a.A({name:"ONBOARDING",pattern:E.b+"/welcome"}),D=new a.A({name:"SPACE_DIRECTORY",pattern:E.b+"/spaces"}),M=new a.A({name:"SPACE_SETTINGS",pattern:E.b+"/spaces/viewspacesummary.action?key=:spaceKey([^&]+)"}),g=new a.A({name:"SPACE_SETTINGS_REORDERPAGES",pattern:E.b+"/pages/reorderpages.action?key=:spaceKey([^&]+)"}),G=new a.A({name:"SPACE_PERMISSION",pattern:E.b+"/spaces/spacepermissions.action?key=:spaceKey([^&]+)"}),v=new a.A({name:"SPACE_OVERVIEW_REDIRECT_LEGACY",pattern:E.b+"/spaces/viewspace.action"}),w=new a.A({name:"DELETE_SPACE_LEGACY",pattern:E.b+"/spaces/doremovespace.action?key=:spaceKey([^&]+)"}),b=new a.A({name:"SPACE_INDEX",pattern:E.b+"/spaces/:spaceKey",condition:({params:e})=>Boolean(e.spaceKey&&!e.spaceKey.endsWith(".action")),isTransition:i}),h=Object.assign(new a.A({name:"SPACE_OVERVIEW",pattern:E.b+"/spaces/:spaceKey/overview",isTransition:i}),{HOMEPAGE_ID_QUERY_FF:"confluence.frontend.add-homepage-id-to-space-overview-url",HOMEPAGE_ID_QUERY_KEY:"homepageId"}),y=new a.A({name:"VIEW_PAGE",pattern:E.b+"/spaces/:spaceKey/pages/:contentId(\\d+)/:contentSlug?",isTransition:o}),f=new a.A({name:"NEXT_VIEW_PAGE",pattern:E.b+"/spaces/:spaceKey/next-pages/:contentId(\\d+)/:contentSlug?",isTransition:o}),V=new a.A({name:"BLOG_HOME",pattern:E.b+"/spaces/:spaceKey/blog"}),W=new a.A({name:"VIEW_BLOG",pattern:E.b+"/spaces/:spaceKey/blog/:contentId(\\d+)/:contentSlug?",isTransition:o}),B=new a.A({name:"ADMIN_SETTINGS",pattern:E.b+"/admin"}),U=new a.A({name:"ADMIN_EDIT_EXTERNAL_SHARING",pattern:E.b+"/admin/public-links"}),H=new a.A({name:"ADMIN_FORGE_APPS",pattern:E.b+"/admin/forge?id=:id(.+)"}),Y=new a.A({name:"ADMIN_NEW_GLOBAL_PERMISSIONS",pattern:E.b+"/admin/permissions/global"}),k=new a.A({name:"ADMIN_NEW_GLOBAL_PERMISSIONS_USER_DETAILS",pattern:E.b+"/admin/permissions/global/user/:accountId"}),K=new a.A({name:"ADMIN_NEW_GLOBAL_PERMISSIONS_GROUP_DETAILS",pattern:E.b+"/admin/permissions/global/group/:groupName"}),F=new a.A({name:"ADMIN_GLOBAL_PERMISSIONS",pattern:E.b+"/admin/permissions/globalpermissions.action"}),$=new a.A({name:"ADMIN_EDIT_GLOBAL_PERMISSIONS",pattern:E.b+"/admin/permissions/editglobalpermissions.action"}),x=new a.A({name:"ADMIN_SPACE_PERMISSIONS",pattern:E.b+"/admin/permissions/viewdefaultspacepermissions.action"}),q=new a.A({name:"ADMIN_EDIT_SPACE_PERMISSIONS",pattern:E.b+"/admin/permissions/editdefaultspacepermissions.action"}),Z=new a.A({name:"ADMIN_AUDIT_LOG",pattern:E.b+"/admin/auditlogging.action"}),Q=new a.A({name:"SPACE_CALENDAR",pattern:E.b+"/spaces/:spaceKey/calendars?src=sidebar&openAddCalDialog=true"}),X=new a.A({name:"SPACE_CALENDARS",pattern:E.b+"/spaces/:spaceKey/calendars"}),z=new a.A({name:"DISCOVER",pattern:E.b+"/discover"}),j=new a.A({name:"ALL_UPDATES",pattern:E.b+"/discover/all-updates"}),J=new a.A({name:"POPULAR",pattern:E.b+"/discover/popular"}),ee=new a.A({name:"MY_WORK_HOME",pattern:E.b+"/my"}),te=new a.A({name:"MY_WORK_DRAFTS",pattern:E.b+"/my/drafts"}),ne=new a.A({name:"MY_WORK_RECENT",pattern:E.b+"/my/recent-work"}),ae=new a.A({name:"MY_RECENTLY_VISITED",pattern:E.b+"/my/recently-visited"}),Ee=new a.A({name:"MY_SAVED_FOR_LATER",pattern:E.b+"/my/saved-for-later"}),oe=new a.A({name:"RECENT_PAGES",pattern:E.b+"/recent"}),ie=new a.A({name:"RECENT_VISITED",pattern:E.b+"/recent/visited"}),re=new a.A({name:"RECENT_DRAFTS",pattern:E.b+"/recent/draft"}),se=new a.A({name:"RECENT_SAVED",pattern:E.b+"/recent/saved"}),_e=new a.A({name:"TEMPLATE_MIGRATION_PREVIEW",pattern:E.b+"/template/migration/preview?templateId=:contentId([0-9a-z-]+)"}),Ae=new a.A({name:"EDIT_TEMPLATE",pattern:E.b+"/templates/edit/:contentId([0-9a-z-]+)"}),ce=new a.A({name:"EDIT_TEMPLATE_BLUEPRINT",pattern:E.b+"/templates/edit/:pluginKey/:moduleKey"}),de=new a.A({name:"EDIT_TEMPLATE_SPACE",pattern:E.b+"/spaces/:spaceKey/templates/edit/:contentId([0-9a-z-]+)"}),le=new a.A({name:"CREATE_TEMPLATE",pattern:E.b+"/templates/create"}),Ie=new a.A({name:"CREATE_TEMPLATE_SPACE",pattern:E.b+"/spaces/:spaceKey/templates/create"}),pe=new a.A({name:"HELLO_WORLD",pattern:E.b+"/hello-world"}),Te=new a.A({name:"DASHBOARD_ACTION_LEGACY",pattern:E.b+"/dashboard.action"}),me=new a.A({name:"SPA_ACTION_LEGACY",pattern:E.b+"/spa.action"}),Oe=new a.A({name:"INDEX_ACTION_LEGACY",pattern:E.b+"/index.action"}),Ne=new a.A({name:"CREATE_PAGE_ACTION_LEGACY",pattern:E.b+"/pages/createpage.action"}),Re=new a.A({name:"CREATE_BLOG_ACTION_LEGACY",pattern:E.b+"/pages/createblogpost.action"}),Se=new a.A({name:"CREATE_PAGE_VARIABLES_ACTION_LEGACY",pattern:E.b+"/pages/createpage-entervariables.action"}),ue=new a.A({name:"RESUME_DRAFT_LEGACY",pattern:E.b+"/pages/resumedraft.action"}),Ce=new a.A({name:"COPY_PAGE_LEGACY",pattern:E.b+"/pages/copypage.action"}),Pe=new a.A({name:"VIEW_PAGE_ACTION_LEGACY",pattern:E.b+"/pages/viewpage.action",condition:({query:e})=>Boolean(e.pageId&&1===Object.keys(e).length)}),Le=new a.A({name:"SPACE_OVERVIEW_INDEX_ACTION_LEGACY",pattern:E.b+"/spaces/:spaceKey/overview/index.action"}),De=new a.A({name:"SPACE_INDEX_ACTION_LEGACY",pattern:E.b+"/spaces/:spaceKey/index.action"}),Me=new a.A({name:"SPACE_PAGES",pattern:E.b+"/spaces/:spaceKey/pages"}),ge=new a.A({name:"VIEW_BLOG_DATE_LEGACY",pattern:E.b+"/spaces/:spaceKey/blog/:year(\\d+)/:month(\\d+)/:day(\\d+)/:contentId(\\d+)/:contentSlug?",isTransition:o}),Ge=new a.A({name:"ACTION_REDIRECT_LEGACY",pattern:E.b+"/spaces/(.*).action",condition:({query:e})=>null==e.key}),ve=new a.A({name:"ADVANCED_SEARCH_LEGACY",pattern:E.b+"/dosearchsite.action"}),we=new a.A({name:"ADVANCED_SEARCH",pattern:E.b+"/search"}),be=new a.A({name:"EXTERNAL_SHARE",pattern:E.b+"/external/:contentId/:externalToken"}),he=new a.A({name:"VIEW_PAGE_MOBILE",pattern:E.b+"/mobile/spaces/:spaceKey/pages/:contentId(\\d+)/:contentSlug?"}),ye=new a.A({name:"VIEW_BLOG_MOBILE",pattern:E.b+"/mobile/spaces/:spaceKey/blog/:year(\\d+)/:month(\\d+)/:day(\\d+)/:contentId(\\d+)/:contentSlug?"}),fe=new a.A({name:"PEOPLE_DIRECTORY_SEARCH",pattern:"/people/search"}),Ve=new a.A({name:"CONFLUENCE_PEOPLE_DIRECTORY_SEARCH",pattern:E.b+"/people/search"}),We=new a.A({name:"PEOPLE_DIRECTORY",pattern:E.b+"/people(/[\\w-:]+)*"}),Be=new a.A({name:"SPACE_RESTRICTED_PAGES",pattern:E.b+"/pages/listpermissionpages.action"}),Ue=new a.A({name:"SPACE_ARCHIVED_PAGES",pattern:E.b+"/spaces/:spaceKey/archivedpages"}),He=new a.A({name:"PAGE_DIFF_BY_VERSION",pattern:E.b+"/pages/diffpagesbyversion.action"}),Ye=new a.A({name:"SPACE_ANALYTICS",pattern:E.b+"/display/:spaceKey/customcontent/list/ac%3Acom.addonengine.analytics%3Aspace-analytics"}),ke=new a.A({name:"SPACE_QUESTIONS",pattern:E.b+"/display/:spaceKey/customcontent/list/ac%3Acom.atlassian.confluence.plugins.confluence-questions%3Aquestion"}),Ke=new a.A({name:"SPACE_BULK_TOOLS",pattern:E.b+"/spaces/:spaceKey/bulktools"}),Fe=new a.A({name:"SPACE_FORGE_APPS",pattern:E.b+"/spaces/:spaceKey/apps/:appId([0-9a-z-]+)/:envId([0-9a-z-]+)/:forgeManifestRoute([0-9a-z-]+)"})},498395:(e,t,n)=>{"use strict";n.d(t,{x:()=>E});var a=n(230382);const E=n.n(a)()`query CoverPictureQuery($contentId:ID$status:[String]){content(id:$contentId status:$status){nodes{id properties(keys:["cover-picture-id-draft" "cover-picture-id-published"]){nodes{id key value version{number}}}}}}`},245618:(e,t,n)=>{"use strict";function a(e){let t,n;try{t=JSON.parse(e.value),n=parseInt(JSON.parse(e.version.number))}catch(a){t=null,n=null}return e?{id:t,version:n}:null}n.d(t,{q:()=>a})},552154:(e,t,n)=>{"use strict";let a;n.d(t,{h:()=>a}),function(e){e.PUBLISHED="cover-picture-id-published",e.DRAFT="cover-picture-id-draft"}(a||(a={}))},395682:(e,t,n)=>{"use strict";n.d(t,{A:()=>_});var a=n(159394),E=n(151119),o=n(900883),i=n(423962);var r=n(920099),s=n.n(r);class _{static matchFirst(e,t){for(const n of e){if(!(n instanceof _))continue;const e=n.match(t);if(e)return e}return null}constructor(e){(0,E.Z)(this,"name",void 0),(0,E.Z)(this,"pattern",void 0),(0,E.Z)(this,"condition",void 0),(0,E.Z)(this,"isTransition",void 0),this.name=e.name,this.pattern=e.pattern,this.condition=e.condition?e.condition:()=>!0,this.isTransition=(t,n)=>!t||(e.isTransition?t.name!==n.name||e.isTransition(t,n):t.pathname!==n.pathname)}match(e){const t=function(e,t){const n=o.parse(t,!0),a=n.pathname||"";let E=(0,i.Z)(a,{path:e,exact:!0});if(E||(E=(0,i.Z)(`${a}${n.search}`,{path:e,exact:!0})),!E)return null;const r={};if(E.params)for(const[o,i]of Object.entries(E.params)){let e=i;try{e=decodeURIComponent(i)}catch(s){}r[o]=e}return{url:t,pathname:a,search:n.search||"",hash:n.hash||"",pattern:e,params:r,query:n.query}}(this.pattern,e);return t?this.condition&&!this.condition(t)?null:(0,a.Z)((0,a.Z)({},t),{},{name:this.name}):null}toUrl(e,t){return((e,t={},n={})=>{const E=s().compile(e)(t),i=o.parse(E,!0);return o.format({pathname:i.pathname,query:(0,a.Z)((0,a.Z)({},i.query),n.query||{}),hash:n.hash})})(this.pattern,e,t)}}},664646:(e,t,n)=>{"use strict";n.d(t,{H:()=>E});var a=n(151119);const E=new class{constructor(){(0,a.Z)(this,"measures",void 0),(0,a.Z)(this,"startTime",void 0),this.measures={},this.startTime=0}setStartTime(){this.startTime=performance.now()>>0}run(e,t){return t()}getMeasures(){return Object.entries(this.measures).sort(((e,t)=>e[1].startTime-t[1].startTime)).reduce(((e,[t,n])=>(e[t]=n,e)),{})}}},768606:(e,t,n)=>{"use strict";n.d(t,{P:()=>l});var a=n(454530),E=n(159394),o=n(202784),i=n(36200),r=n(210022),s=n(1271),_=n(35327);const A=(0,s.Q)(),c=(0,i.j)("Loadable");function d(e,t){const n="default"in e?e.default:e;return o.createElement(n,(0,E.Z)({},t))}function l({__loadable_id__:e,_noPreloadWhenRenderingSPA:t,_mustPreloadWhenRenderingSPA:n,name:E,loader:i,loading:s=(()=>null)}){let l;const I=`Loadable(${E=E||e})`,p=(e,t)=>A.push({name:e,task:()=>(l||(l=i()),l),priority:t});let T=null;const m=()=>p(I,r.U.IMMEDIATE).then((e=>T=e));"undefined"!=typeof window&&window.__SSR_RENDERED__&&(0,_.sB)(e,E,m);const O=e=>{let{priority:t=r.U.NORMAL,delayRender:n,defer:i}=e,_=(0,a.Z)(e,["priority","delayRender","defer"]);const A="number"!=typeof n||window.__SSR_RENDERED__?0:n,[l,m]=(0,o.useState)((()=>T));return(0,o.useLayoutEffect)((()=>{if(l||i)return;let e=!0;const n=performance.now();return p(I,A?r.U.IMMEDIATE:t).then((t=>{if(e){T=t;const e=A-(performance.now()-n);e>0?setTimeout((()=>{m((()=>t))}),e):m((()=>t))}})),()=>{e=!1}}),[i,l]),window.__SSR_RENDERED__&&!l&&c.debug`Rendering loading state: ${E}`,l?d(l,_):o.createElement(s,_)};return O.displayName=I,O.preload=(e=r.U.BACKGROUND)=>T?Promise.resolve(T):p(`${I}.preload()`,e).then((e=>T=e)),O}d.displayName="renderModule"},35327:(e,t,n)=>{"use strict";n.d(t,{Y2:()=>I,sB:()=>p,Ix:()=>T});var a=n(183883),E=n.n(a),o=n(36200),i=n(283912);const r=E(),s=(0,o.j)("Loadable");let _=[],A={},c=new Set,d=new Set;function l(){if(0===_.length)for(const e of r.__LOADABLE__||[]){const{resolve:t,promise:n}=(0,i.P)(5e3);_.push(n),A[e]=t}}function I(){return l(),Promise.all(_)}function p(e,t,n){if(l(),e&&e in A||t&&t in A){const a=()=>{let n;e&&e in A&&(n=A[e]),t&&t in A&&(n=A[t]),n&&n()};s.debug`SSR Preload: ${t||e}`,n().then(a,(e=>{s.error(e),a()}))}}function T(){return{loadableIds:Array.from(c),conditionalLoadableIds:Array.from(d)}}},210022:(e,t,n)=>{"use strict";let a;n.d(t,{U:()=>a}),function(e){e[e.IMMEDIATE=0]="IMMEDIATE",e[e.NORMAL=1]="NORMAL",e[e.BACKGROUND=2]="BACKGROUND"}(a||(a={}))},688285:(e,t,n)=>{"use strict";n.d(t,{w:()=>_});var a=n(151119),E=n(254073),o=n.n(E),i=n(36200),r=n(210022);const s=e=>{let t,n,a=!1;return{get started(){return a},result:new Promise(((e,a)=>{t=e,n=a})),run(){a||(a=!0,new Promise((t=>{t(e())})).then(t,n))}}};class _{constructor(e={}){(0,a.Z)(this,"maxQueueTimeMs",void 0),(0,a.Z)(this,"debounceTimeMs",void 0),(0,a.Z)(this,"disabled",void 0),(0,a.Z)(this,"queue",[]),(0,a.Z)(this,"logger",(0,i.j)("TaskQueue")),(0,a.Z)(this,"runPriorityTasks",void 0),this.maxQueueTimeMs=e.maxQueueTimeMs||1e4,this.debounceTimeMs=e.debounceTimeMs||100,this.disabled=e.disabled||!1,this.runPriorityTasks=o()((()=>{this.getPriorityItems().filter((e=>!e.futureTask.started)).forEach((e=>{this.logger.debug`${e.name} ${e.priority}`,e.futureTask.run(),e.timer&&(window.clearTimeout(e.timer),delete e.timer)}))}),this.debounceTimeMs)}push({name:e,task:t,priority:n=r.U.NORMAL}){const a={name:e,futureTask:s(t),priority:this.disabled?r.U.IMMEDIATE:n};this.insert(a),a.priority===r.U.IMMEDIATE?(this.logger.debug`${a.name} ${a.priority}`,a.futureTask.run()):a.timer=window.setTimeout((()=>{a.futureTask.run()}),this.maxQueueTimeMs);const E=()=>{this.remove(a)};return a.futureTask.result.then(E,E),a.futureTask.result}insert(e){const t=this.queue.findIndex((t=>t.priority>e.priority));this.queue.splice(-1===t?this.queue.length:t,0,e),this.runPriorityTasks()}remove(e){this.queue=this.queue.filter((t=>t!==e)),this.runPriorityTasks()}getPriorityItems(){const e=this.queue[0];if(!e)return[];const t=this.queue.findIndex((t=>t.priority!==e.priority));return-1===t?this.queue:this.queue.slice(0,t)}}},283912:(e,t,n)=>{"use strict";function a(e){let t,n;const a=new Promise((a=>{n=setTimeout(a,e),t=a}));return a.finally((()=>{clearTimeout(n)})),{promise:a,resolve:t}}n.d(t,{P:()=>a})},1271:(e,t,n)=>{"use strict";n.d(t,{Q:()=>o});var a=n(688285);let E;const o=()=>(E||(E=new a.w({disabled:!1})),E)},248463:(e,t,n)=>{"use strict";n.d(t,{q:()=>o});var a=n(151119),E=n(202784);class o extends E.PureComponent{constructor(...e){super(...e),(0,a.Z)(this,"state",{MediaImage:o.MediaImage})}async componentDidMount(){if(!this.state.MediaImage)try{const[e,t]=await Promise.all([Promise.all([n.e(78248),n.e(11216),n.e(76753),n.e(13185),n.e(74332)]).then(n.bind(n,502933)),Promise.all([n.e(11216),n.e(13185),n.e(38226)]).then(n.bind(n,990379))]),a=e.withMediaClient(t.MediaImageInternal);o.MediaImage=a,this.setState({MediaImage:a})}catch(e){}}render(){const{MediaImage:e}=this.state;return e?E.createElement(e,this.props):null}}o.displayName="MediaImageLoader",(0,a.Z)(o,"displayName","AsyncMediaImage")}}]);
//# sourceMappingURL=71359.U9AMcpp7KY.js.map