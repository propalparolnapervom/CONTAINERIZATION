(self._cf=self._cf||[]).push([[77401],{677401:(e,n,t)=>{"use strict";t.r(n),t.d(n,{RenderForFeatureFlag:()=>o});var r=t(202784),s=t(164464);const o=({children:e,featureFlag:n,condition:t=(e=>e)})=>r.createElement(s.e,null,(({featureFlags:s})=>t(s[n])?r.createElement(r.Fragment,null,e):null));o.displayName="RenderForFeatureFlag"},840253:(e,n,t)=>{"use strict";t.d(n,{g6:()=>a,bs:()=>u,Es:()=>d,Nd:()=>c,RW:()=>_});const r=(0,t(36200).j)("session-data"),s="confluence-frontend-next.featureFlagLocalOverrides",o=(()=>{try{const e="__random__local__storage__test__key__";return window.localStorage.setItem(e,e),window.localStorage.removeItem(e),!0}catch(e){return!1}})(),i=()=>{let e;return e=o?window.localStorage.getItem(s):window.sessionStorage.getItem(s),e?JSON.parse(e):{}},a=()=>o?null!=window.localStorage.getItem(s):null!=window.sessionStorage.getItem(s),l=e=>{const n=e(i());if(Object.keys(n).length)if(o)try{window.localStorage.setItem(s,JSON.stringify(n))}catch(t){r.error`Unable to set local storage. key = "${s}", value = "${JSON.stringify(n)}"`}else window.sessionStorage.setItem(s,JSON.stringify(n));else o?window.localStorage.removeItem(s):window.sessionStorage.removeItem(s);return n},u=(e,n)=>l((t=>(t[e]=n,t))),d=e=>l((n=>(delete n[e],n))),c=()=>l((()=>({}))),_=(e,n)=>{if(!a())return e;const t=i();return Object.keys(e).reduce(((r,s)=>(r[s]=n(s,t,e),r)),{})}},164464:(e,n,t)=>{"use strict";t.d(n,{e:()=>F,g:()=>A});var r=t(151119),s=t(202784),o=t(200396),i=t(159394),a=t(536631),l=t(818149),u=t.n(l),d=t(785936),c=t(275392);const _=e=>(0,c.getAnalyticsWebClient)().then((n=>{n.sendTrackEvent(e)})),g=(0,a.default)(((e={})=>new d.Z({flags:e,analyticsHandler:_})),u());var S=t(840253);function v(e){return"true"===e||"false"!==e&&("object"==typeof e?JSON.stringify(e):e)}function w(e,n){return e.reduce(((e,t)=>(e[t.id]=n(t),e)),{})}const f=(e,n,t)=>n.hasOwnProperty(e)?(0,i.Z)((0,i.Z)({},t[e]),{},{value:n[e]}):t[e];function h(e){return"object"==typeof e&&"value"in e?(0,i.Z)((0,i.Z)({},e.explanation?{explanation:(0,i.Z)({},e.explanation)}:{}),{},{value:v(e.value)}):{value:v(e),explanation:void 0}}const m=(0,a.default)((e=>{const n=e?w(e,h):{},t=(0,S.RW)(n,f),r=g();r.setFlags(t);const{original:s,withOverrides:o}=(e=>{const n=w(e,(e=>v(e.value)));return{original:n,withOverrides:(0,S.RW)(n,((e,n,t)=>n.hasOwnProperty(e)?n[e]:t[e]))}})(e);return{originalFeatureFlags:s,featureFlagsWithOverrides:o,featureFlagClient:r}}));function y(e){return null!==e}const O=e=>{var n,t,r,s,o,i,a,l,u,d,c,_,g,v;const{originalFeatureFlags:w,featureFlagsWithOverrides:f,featureFlagClient:h}=m((null==e||null===(n=e.featureFlags)||void 0===n||null===(t=n.nodes)||void 0===t?void 0:t.filter(y))||[]);return{shard:(null==e||null===(r=e.tenant)||void 0===r?void 0:r.shard)||"",cloudId:(null==e||null===(s=e.tenant)||void 0===s?void 0:s.cloudId)||"",environment:(null==e||null===(o=e.tenant)||void 0===o?void 0:o.environment)||"",userId:(null==e||null===(i=e.user)||void 0===i?void 0:i.id)||null,displayName:(null==e||null===(a=e.user)||void 0===a?void 0:a.displayName)||null,isLoggedIn:Boolean(null==e||null===(l=e.user)||void 0===l?void 0:l.id),isLicensed:Boolean((null==e||null===(u=e.user)||void 0===u||null===(d=u.confluence)||void 0===d?void 0:d.accountId)&&(null==e||null===(c=e.user)||void 0===c||null===(_=c.confluence)||void 0===_?void 0:_.userKey)),userIdForAnalytics:(null==e||null===(g=e.userForAnalytics)||void 0===g?void 0:g.id)||null,featureFlags:f,featureFlagClient:h,_originalFeatureFlags:(0,S.g6)()?w:void 0,locale:(null==e||null===(v=e.user)||void 0===v?void 0:v.locale)||"en-US"}};var I=t(684681),p=t(664646);const A=()=>window.__SESSION_DATA_PROMISE__?window.__SESSION_DATA_PROMISE__:window.__SESSION_DATA_PROMISE__=(0,o.LW)(async function(e={}){if("undefined"!=typeof jest||window.USE_MOCKED_SESSION_DATA)return new Promise((e=>{window.MOCK_SESSION_DATA_RESOLVE=e}));if(window.__SESSION_DATA__)return window.__SESSION_DATA__;const n=window.GLOBAL_APOLLO_CLIENT_URI||"/cgraphql";return window.__SESSION_DATA__=p.H.run("fetch:SessionDataQuery",(()=>fetch(`${n}?q=SessionDataQuery`,(0,I.I)({method:"POST",credentials:"include",referrerPolicy:"same-origin",headers:(0,i.Z)({"X-APOLLO-OPERATION-NAME":"SessionDataQuery","Content-Type":"application/json"},e.headers),body:JSON.stringify({query:"\nquery SessionDataQuery @SLA {\n  tenant {\n    shard\n    cloudId\n    environment\n  }\n  userForAnalytics: user {\n    id\n  }\n  user(current: true) {\n    id\n    displayName\n    confluence {\n      accountId\n      userKey\n    }\n    locale\n  }\n  featureFlags(extraTargeting: true) {\n    nodes {\n      id\n      value\n      explanation {\n        ruleIndex\n        ruleId\n        kind\n      }\n    }\n  }\n}\n"})})).then((async e=>{if(!e.ok)throw new Error(`Cannot load session data: ${e.statusText}`);return window.__SESSION_DATA__=(await e.json()).data}))))}().then(O));class F extends s.Component{constructor(e){super(e),(0,r.Z)(this,"_mount",void 0),(0,r.Z)(this,"state",{});const n=A();this._mount=!0,(0,o.wp)(n)?this.state={sessionData:(0,o.NA)(n)}:n.then((e=>{this._mount&&this.setState({sessionData:e})}))}componentWillUnmount(){this._mount=!1}render(){const{sessionData:e}=this.state;return e?this.props.children(e):!0===this.props.renderChildrenWhenLoading?this.props.children({loading:!0}):null}}F.displayName="SessionData"},664646:(e,n,t)=>{"use strict";t.d(n,{H:()=>s});var r=t(151119);const s=new class{constructor(){(0,r.Z)(this,"measures",void 0),(0,r.Z)(this,"startTime",void 0),this.measures={},this.startTime=0}setStartTime(){this.startTime=performance.now()>>0}run(e,n){return n()}getMeasures(){return Object.entries(this.measures).sort(((e,n)=>e[1].startTime-n[1].startTime)).reduce(((e,[n,t])=>(e[n]=t,e)),{})}}}}]);
//# sourceMappingURL=77401.QaHBrYcY9j.js.map