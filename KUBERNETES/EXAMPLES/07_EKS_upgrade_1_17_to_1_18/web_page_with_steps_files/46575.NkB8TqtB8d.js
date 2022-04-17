(self._cf=self._cf||[]).push([[46575],{860764:(e,n,t)=>{"use strict";t.d(n,{q:()=>o});var r=t(591789);const o=()=>!!r.EXTERNAL_SHARE.match(window.location.pathname)},357413:(e,n,t)=>{"use strict";t.d(n,{M:()=>a});var r=t(772005),o=t(929796),i=t(88937);const s="X-Atl-Experience";function a(){return(e,n={})=>{const t=(0,r.Nq)();return t&&(n.headers=n.headers||{},(0,i.Nt)(n.headers,s,(0,i.Uq)(n.headers,s)||t)),(0,o.y)(e,n)}}},846575:(e,n,t)=>{"use strict";t.d(n,{e1:()=>B,WQ:()=>Z});var r=t(992873),o=t(760728),i=t(585338),s=t(875840),a=t(435329),c=t(183883),l=t.n(c),u=t(998080),m=t(929796),p=t(99604),d=t(382547),E=t(664646);const A=new o.ApolloLink(((e,n)=>(delete e.extensions,n(e))));var f=t(305791),h=t(845526),y=t(860764);const v=new o.ApolloLink(((e,n)=>{const{allowOnExternalPage:t=!1}=e.getContext();return t||!(0,y.q)()?n(e):new h.Z((e=>{e.complete()}))}));var w=t(410593);const N="asSuperAdmin",I=new o.ApolloLink(((e,n)=>{const{asSuperAdmin:t=!0}=e.getContext();return t&&(0,w.TT)()&&e.query.definitions.forEach((e=>{if(!("operation"in e))return;const{operation:n,directives:t}=e;if("query"===n||"mutation"===n){if(!(null==t?void 0:t.some((e=>e.name.value===N)))){const e={arguments:[],kind:"Directive",name:{kind:"Name",value:N}};null==t||t.push(e)}}})),n(e)}));var L=t(116370);let b=!1;const C=new L.W({delay:{initial:500,max:5e3,jitter:!0},attempts:{max:2,retryIf:(e,n)=>!!b&&(!n.query.definitions.some((e=>"operation"in e&&"mutation"===e.operation))&&(e instanceof p.f&&(((e,n)=>{Promise.resolve().then(t.bind(t,275392)).then((({getAnalyticsWebClient:t})=>{t().then((t=>{t.sendOperationalEvent({source:"ui",actionSubject:"graphql",action:"errored",attributes:{eventName:"network.error.retry",queryName:n.operationName,priorRetries:n.getContext().networkRetries||0,message:e.message}})}))}))})(e,n),n.setContext((e=>({networkRetries:(e.networkRetries||0)+1}))),!0)))}});var R=t(680499),O=t(171529),k=t(803894),S=t(332653),T=t(841347);let g=!1;const _=new L.W({delay:{initial:500,max:5e3,jitter:!0},attempts:{max:2,retryIf:(e,n)=>!!g&&(e instanceof k.K&&n.query.definitions.some((e=>"operation"in e&&"mutation"===e.operation)),!1)}});const x=()=>new o.ApolloLink(((e,n)=>n(e)));var F=t(875970);const U=JSON.parse('[{"possibleTypes":[{"name":"ActivitiesTransitionedEvent"},{"name":"ActivitiesCommentedEvent"}],"kind":"UNION","name":"ActivitiesEventExtension"},{"possibleTypes":[{"name":"UnknownUser"},{"name":"KnownUser"},{"name":"Anonymous"},{"name":"User"}],"kind":"INTERFACE","name":"Person"},{"possibleTypes":[{"name":"AtlassianAccountUser"},{"name":"AppUser"},{"name":"CustomerUser"}],"kind":"INTERFACE","name":"GatewayUser"},{"possibleTypes":[{"name":"CreateUpdate"},{"name":"EditUpdate"},{"name":"CommentUpdate"}],"kind":"INTERFACE","name":"AllUpdatesFeedEvent"},{"possibleTypes":[{"name":"ActivitiesJiraIssue"}],"kind":"UNION","name":"ActivitiesObjectExtension"},{"possibleTypes":[{"name":"ActivityItem"},{"name":"ActivitiesObject"},{"name":"ActivitiesItem"},{"name":"ActivityObject"},{"name":"ActivitiesEvent"}],"kind":"INTERFACE","name":"Node"},{"possibleTypes":[{"name":"MediaAttachment"},{"name":"MediaAttachmentError"}],"kind":"UNION","name":"MediaAttachmentOrError"},{"possibleTypes":[{"name":"InlineComment"},{"name":"FooterComment"}],"kind":"INTERFACE","name":"CommentLocation"},{"possibleTypes":[{"name":"AppInstallationResponse"},{"name":"GenericMutationResponse"},{"name":"CreateAppDeploymentResponse"},{"name":"CreateContainerTokenResponse"},{"name":"CreateAppResponse"},{"name":"AppUninstallationResponse"},{"name":"InvokeExtensionResponse"},{"name":"CreateAppDeploymentUrlResponse"},{"name":"InvokeAuxEffectsResponse"}],"kind":"INTERFACE","name":"MutationResponse"},{"possibleTypes":[{"name":"AppDeploymentLogEvent"},{"name":"AppDeploymentTransitionEvent"}],"kind":"INTERFACE","name":"AppDeploymentEvent"},{"possibleTypes":[{"name":"FeedEventCreate"},{"name":"FeedEventEdit"},{"name":"FeedEventComment"}],"kind":"INTERFACE","name":"FeedEvent"},{"possibleTypes":[{"name":"AtlassianAccountUser"},{"name":"CustomerUser"}],"kind":"INTERFACE","name":"LocalizationContext"},{"possibleTypes":[{"name":"ConfluenceContentSearchResult"},{"name":"ConfluenceSpaceSearchResult"}],"kind":"INTERFACE","name":"ConfluenceSearchResult"}]'),q=new a.Jd({introspectionQueryResultData:{__schema:{types:U}}}),P=e=>"WebItem"===e.__typename?e.completeKey||e.id:null!==e.id?(0,a.uG)(e):void 0,D={Query:{singleContent:(e,{id:n},{getCacheKey:t})=>t({__typename:"Content",id:n})}};var j=t(88937),Q=t(357413),$=t(230382);const M=t.n($)()`directive@client on FIELD extend type Query{network:ClientNetwork}type ClientNetwork{status:ClientNetworkStatus}enum ClientNetworkStatus{ONLINE OFFLINE RATE_LIMITED SESSION_EXPIRED}`,G=(0,Q.M)(),H="/cgraphql",W=()=>new a.h4({fragmentMatcher:q,dataIdFromObject:P,cacheRedirects:D}),X=(e,n)=>{e=l().GLOBAL_APOLLO_CLIENT_URI||e;const t=[].concat("string"==typeof n.body?JSON.parse(n.body):[]),r=t.map((({operationName:e,variables:n})=>"WebItemLocationQuery"===e?`${e}:${(null==n?void 0:n.location)||((null==n?void 0:n.locations)||[]).join(",")||""}`:e)),o=r.join(",");return n.headers||(n.headers={}),(0,j.Nt)(n.headers,"X-APOLLO-OPERATION-NAME",o),n.referrerPolicy=n.referrerPolicy||"same-origin",E.H.run(`fetch:${r}`,(()=>(t.some((e=>e.query.includes("@SLA")))?G:m.y)(`${e}?q=${o}`,n)))},K=({experimentalSchemaLinkOverride:e,ccGraphqlSchemaLinkOverride:n})=>{const r=(0,o.split)((e=>e.getContext().single),new i.u({uri:H,credentials:"same-origin",fetch:X}),new s.A({uri:H,credentials:"same-origin",fetch:X})),a=[(0,d.b)(),A,I,(0,f.aw)(),_,C,v];let c;return c=(0,o.from)(a).split(j.SR,(0,F.jH)(),r),(0,o.from)([(0,R.q)((({operation:e,graphQLErrors:n,networkError:t})=>{let{response:r}=e.getContext();r||(r=null==n?void 0:n.map((e=>e.originalError instanceof k.K?e.originalError.response:null)).find((e=>null!=e)));const o=(0,S.Y)(r);var i;n&&n.length>0&&n.forEach((n=>{var t,i;(0,O.Qp)(n,{operationName:e.operationName,traceId:o,statusCode:null===(t=r)||void 0===t?void 0:t.status,graphqlPath:null===(i=n.path)||void 0===i?void 0:i.join(".")}),(0,T.wY)(n)})),t&&((0,O.Qp)(t,{operationName:e.operationName,traceId:o,graphqlPath:void 0,statusCode:"object"==typeof t&&"response"in t?null===(i=t.response)||void 0===i?void 0:i.status:void 0}),(0,T.wY)(t))})),x()]).split((e=>(0,j.Zg)(e)),e||new o.ApolloLink((e=>new h.Z((n=>{Promise.all([t.e(78248),t.e(11216),t.e(59679),t.e(10380)]).then(t.bind(t,310380)).then((({getSchemaLink:t})=>{(0,o.execute)(t(),e).subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)})}))})))),n||c)},z=W();let Y=null;function Z(){return window.GLOBAL_APOLLO_CLIENT?window.GLOBAL_APOLLO_CLIENT:(Y||(Y=((e={})=>{const n=l().__APOLLO_STATE__,t=e.initializeNewCache?W():z;n&&t.restore(JSON.parse(u.DS.decode(n)));const o=new r.fe({ssrMode:Boolean(!1),link:K(e),typeDefs:M,cache:t});return e.ccGraphqlSchemaLinkOverride||(0,f.Al)(o.cache,f.Ie.ONLINE),m.y.subscribe(((e,n)=>{e?(0,f.Al)(o.cache,f.Ie.ONLINE):n instanceof p.f&&!n.ignore&&(0,f.Al)(o.cache,f.Ie.OFFLINE)})),o})()),window.GLOBAL_APOLLO_CLIENT=Y,Y)}function B(){b=!0,g=!0}},305791:(e,n,t)=>{"use strict";t.d(n,{Al:()=>p,Ie:()=>d,aw:()=>E});var r=t(230382),o=t.n(r),i=t(760728),s=t(845526),a=t(36200),c=t(991947),l=t(38018),u=t(99604);const m=o()`query networkStatusQuery{network@client{status}}`,p=(e,n)=>{const t=(e=>{try{var n;const t=e.readQuery({query:m});return null==t||null===(n=t.network)||void 0===n?void 0:n.status}catch(t){return}})(e);t!==d.SESSION_EXPIRED&&t!==n&&e.writeQuery({query:m,data:{network:{__typename:"ClientNetwork",status:n}}})},d={ONLINE:"ONLINE",OFFLINE:"OFFLINE",RATE_LIMITED:"RATE_LIMITED",SESSION_EXPIRED:"SESSION_EXPIRED"},E=()=>{const e=(0,a.j)(E);return new i.ApolloLink(((n,t)=>new s.Z((r=>{t(n).subscribe({next(e){if(e.errors&&e.errors.some(c.Fo)){p(n.getContext().cache,d.SESSION_EXPIRED);const e=new c.RX(n.operationName,n.getContext().response);r.error(e)}else p(n.getContext().cache,d.ONLINE),r.next(e)},error(t){t instanceof l.e?(e.log`Rate limit was reached for ${n}`,p(n.getContext().cache,d.RATE_LIMITED),r.error(t)):t instanceof u.f&&!t.ignore?(e.log`Network is offline for ${n}`,p(n.getContext().cache,d.OFFLINE)):r.error(t)},complete(){r.complete()}})}))))}},875970:(e,n,t)=>{"use strict";t.d(n,{Vs:()=>l,jH:()=>u,GH:()=>m});var r=t(739846),o=t(478420),i=t(42467);let s,a,c;function l(){return c||(c=new o.SubscriptionClient(s,{reconnect:!1,lazy:!0})),c}s=`wss://${window.location.host}/subscriptions/subscriptions`;const u=()=>new r.A(l()),m=()=>(void 0===a&&(a=(0,i.D)(s)),a)},88937:(e,n,t)=>{"use strict";function r(e){return"operation"in e}function o(e){return n=>{if(!n.query.definitions)return!1;for(const{operation:t,directives:o}of n.query.definitions.filter(r))if("query"===t||"mutation"===t)return(null!=o?o:[]).some((n=>n.name.value===e));return!1}}t.d(n,{Zg:()=>i,Eh:()=>s,SR:()=>a,Uq:()=>c,Nt:()=>l});const i=o("experimental"),s=o("SLA"),a=e=>{if(!e.query.definitions)return!1;for(const{operation:n}of e.query.definitions.filter(r))if("subscription"===n)return!0;return!1};function c(e,n){var t;if(Array.isArray(e)){const t=e.find((([e])=>e===n));return t?t[1]:null}return e instanceof Headers?e.get(n):null!==(t=e[n])&&void 0!==t?t:null}function l(e,n,t){Array.isArray(e)?e.push([n,t]):e instanceof Headers?e.append(n,t):e[n]=t}},42467:(e,n,t)=>{"use strict";function r(e){if("undefined"!=typeof window&&void 0!==window.WebSocket)try{return new window.WebSocket(e,"graphql-ws").close(),!0}catch(n){}return!1}t.d(n,{D:()=>r})},619616:(e,n,t)=>{"use strict";t.d(n,{E:()=>a});var r=t(151119),o=t(200396);class i{constructor(e={}){(0,r.Z)(this,"store",void 0),this.store=e}serialize(e){if(Array.isArray(e))return`[${e.map(this.serialize,this).join(",")}]`;if("object"==typeof e){return`{${Object.entries(null!=e?e:{}).filter((e=>void 0!==e[1])).sort(((e,n)=>e[0]<n[0]?-1:e[0]>n[0]?1:0)).map((([e,n])=>`${e}:${this.serialize(n)}`)).join(",")}}`}return String(e)}toHashKey({name:e,variables:n}){return`${e}:${this.serialize(null!=n?n:{})}`}load(e,n){const t=this.toHashKey(e);return this.store[t]&&!(0,o.wp)(this.store[t])||(this.store[t]=(0,o.LW)(n())),this.store[t]}claim(e,n){const t=this.toHashKey(e),r=this.store[t];return r?r.catch((()=>(delete this.store[t],null))).then((e=>(delete this.store[t],n?n(e):e&&e.data?e:null))):Promise.resolve(null)}}let s=null;function a(){return null===s&&(window.QUERY_PRELOADER_RESULTS||(window.QUERY_PRELOADER_RESULTS={}),s=new i(window.QUERY_PRELOADER_RESULTS)),s}},382547:(e,n,t)=>{"use strict";t.d(n,{b:()=>c});var r=t(760728),o=t(845526),i=t(36200),s=t(619616);const a=(0,i.j)("PreloadedQueryLink"),c=()=>new r.ApolloLink(((e,n)=>{const{operationName:t,variables:r}=e;return t?new o.Z((o=>{let i=null;return(0,s.E)().claim({name:t,variables:r}).then((r=>{r?(a.debug`Query matched: ${t} ${r}`,o.next(r),o.complete()):i=n(e).subscribe({next:o.next.bind(o),error:o.error.bind(o),complete:o.complete.bind(o)})})),()=>{i&&i.unsubscribe()}})):n(e)}))},410593:(e,n,t)=>{"use strict";t.d(n,{TT:()=>s,Yb:()=>a,Uc:()=>c});var r=t(552034),o=t.n(r);const i="confluence.asSuperAdmin";function s(){return Boolean(o().get(i))}function a(){o().remove(i)}function c(){o().set(i,"true")}}}]);
//# sourceMappingURL=46575.NkB8TqtB8d.js.map