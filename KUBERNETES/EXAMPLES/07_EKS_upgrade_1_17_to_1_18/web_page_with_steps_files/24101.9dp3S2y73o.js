(self._cf=self._cf||[]).push([[24101],{651291:(e,t,n)=>{"use strict";n.d(t,{d:()=>o});var i=n(151119),s=n(984116);class o extends s.W2{constructor(...e){super(...e),(0,i.Z)(this,"state",{ready:null,permissions:{}}),(0,i.Z)(this,"setReady",(e=>{this.setNewState(1,e)})),(0,i.Z)(this,"setNoPermission",(e=>{this.setNewState(2,e)})),(0,i.Z)(this,"setNotFound",(e=>{this.setNewState(3,e)})),(0,i.Z)(this,"setError",(e=>{this.setNewState(4,e)})),(0,i.Z)(this,"reset",(e=>{this.setNewState(null,e)})),(0,i.Z)(this,"setPermissions",(e=>{this.state.permissions=this.checkPermissions(e)}))}setNewState(e,t){this.setState({ready:e,permissions:this.checkPermissions(t)})}checkPermissions(e){return void 0===e?this.state.permissions:null===e?{}:e}}},379386:(e,t,n)=>{"use strict";function i(){return"undefined"!=typeof window?window.location:void 0}function s(){if("undefined"==typeof window||!window.location)return;let e=window.location.origin;return e||(e=`${window.location.protocol}//${window.location.hostname}${window.location.port?`:${window.location.port}`:""}`),e}function o(){"undefined"!=typeof window&&window.location.reload()}function r(e){return"undefined"==typeof window||window.confirm(e)}function a(...e){"undefined"!=typeof window&&window.addEventListener.apply(window,e)}function c(...e){"undefined"!=typeof window&&window.removeEventListener.apply(window,e)}function d(){return"undefined"==typeof window?0:window.pageYOffset}function l(){return"undefined"==typeof window?0:window.innerHeight}function h(...e){if(window&&window.require)return window.require.apply(window,e)}function u(){return window}n.d(t,{xh:()=>i,hW:()=>s,H5:()=>o,iG:()=>r,Oo:()=>a,xg:()=>c,XO:()=>d,WS:()=>l,le:()=>h,Jj:()=>u})},437730:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const i={};function s(e,t){const n=e.getElementsByName(t)[0];return n&&n.getAttribute("content")||""}const o=(e,t)=>{const n=e.location.href,o="true"===s(t,"ajs-iframe-allowed-for-spa")||!1,r=void 0!==e.__SKIP_FALLBACK_MODE__&&e.__SKIP_FALLBACK_MODE__||(a=n,Object.keys(i).filter((e=>-1!==a.indexOf(i[e]))).length>0);var a;return{spaceKey:s(t,"confluence-space-key"),isIframeAllowed:o,isWhitelisted:r,isViewPageContentOnly:n.indexOf("/content-only/")>-1,isFallbackModeIframe:function(e){if(e.top===e.self)return!1;const t=e.frameElement&&e.frameElement.getAttribute("data-is-fallback-mode-iframe");return!(!t||"true"!==t)}(e),bridgeId:function(e){return e.frameElement&&e.frameElement.getAttribute("data-bridge-id")}(e),isSpaceOverview:n.indexOf("isSpaceOverview=true")>0,isOverflowAllowed:-1!==decodeURIComponent(function(e){return e.location&&e.location.search?e.location.search.substr(1).split("&").reduce(((e,t)=>{const[n,i]=t.split("=");return e[n]=decodeURIComponent(i),e}),{}):{}}(e).addonUrl||n).indexOf("/customcontent/"),darkFeatures:(s(t,"ajs-enabled-dark-features")||"").split(","),contentType:s(t,"ajs-content-type")||"",pageId:s(t,"ajs-page-id")}}},324101:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>I});var i,s=n(151119),o=n(183883),r=n.n(o),a=n(213980),c=n.n(a),d=n(202784),l=n(984116),h=n(651291),u=n(437730),f=n(852343),w=n(379386),m=n(850605);const p="openPreviewOnParent",y="autoShowAnnotationsOnParent";let g=(0,f.F)(m.Z.CONFLUENCE_PREVIEWER)(i=class extends d.Component{constructor(...e){super(...e),this.state={fileViewer:null},this.receiveMessages=this.receiveMessages.bind(this)}componentDidMount(){(0,w.Oo)("message",this.receiveMessages)}componentWillUnmount(){(0,w.xg)("message",this.receiveMessages)}_getPreviewerInstance(e,t){return this.instancePromise=this.instancePromise||new Promise(((n,i)=>{try{const i=this._createPreviewerInstance(e,t);this.setState({fileViewer:i},(()=>{n(i)}))}catch(s){i(s)}})),this.instancePromise}_getPreviewLoader(){return(0,w.le)("cp/confluence/file-preview-loader")}_createPreviewerInstance(e,t){return this._getPreviewLoader().setupPreviewerForFallbackMode(e,t)}_isSafe(e){const{bridgeId:t,type:n}=e.data;return(n===p||n===y)&&(e.origin===(0,w.hW)()&&this.props.bridgeId===t)}_maybeShowAnnotations(e,t){this.state.shouldShowAnnotations&&t&&(e.autoShowAnnotationsPanel(t),this.setState({shouldShowAnnotations:!1}))}receiveMessages(e){const{type:t}=e.data;if(!this._isSafe(e))return;const n=this._getPreviewLoader();if(t!==p||"function"!=typeof n.setupPreviewerForSPA){if(t===p){const{files:t,viewMode:i,fileQuery:s,analyticsSource:o}=e.data;this._getPreviewerInstance(t,i).then((e=>{e.open(s,o),this._maybeShowAnnotations(n,e)}))}if(t===y){const{fileViewer:e}=this.state;this.setState({shouldShowAnnotations:!0},(()=>this._maybeShowAnnotations(n,e)))}}else{const{files:t,viewMode:i,fileQuery:s}=e.data;if(!s)return;n.setupPreviewerForSPA(s,t,i)}}render(){return null}})||i;g.displayName="SupportConfluencePreview";var _,v,b,P=n(494775);const S="fallback-mode-fake-key";let C=(0,f.F)(m.Z.CONNECT)((b=v=class extends d.Component{constructor(...e){super(...e),(0,s.Z)(this,"_constructIframeWithDefer",(e=>{this.connectContainer&&r().setTimeout((()=>this._constructIframe(e)),5)})),(0,s.Z)(this,"_constructIframe",(e=>{if(!r()._AP||!r().connectHost||!this.connectContainer)return;const{src:t,style:n,iframeAttributes:i,classNames:s,contentStateSetReady:o,hash:a}=e,c=r().location.origin,d=c.endsWith("/")?c:`${c}/`,l=t.startsWith("/")?t.substring(1):t,h={addon_key:"fallback-mode-fake-addon-key",uniqueKey:`${S}__${Math.random().toString().substring(2)}`,key:S,cp:P.b,url:`${d}${l}`,origin:d,hostOrigin:d},u={xdm_e:decodeURIComponent(d),xsm_c:h.uniqueKey,cp:decodeURIComponent(P.b),cv:"0.0.0-fallback-mode",lic:"none",jwt:""};h.url=h.url+(h.url.indexOf("?")>0?"&":"?")+this._createURLParams(u)+(a||"");const f=r()._AP._convertConnectOptions(h);f.options.autoresize=!1,f.options.width="100%";const w=r().connectHost.create(f),m=w.length?w[0]:w;this.connectContainer.innerHTML="",this.connectContainer.appendChild(m);const p=this.connectContainer.getElementsByTagName("iframe");p&&p.length&&(this.iframe=p[0],Object.keys(i).forEach((e=>this.iframe.setAttribute(e,i[e]))),s.forEach((e=>e&&this.iframe.classList.add(e))),Object.keys(n).forEach((e=>this.iframe.style[e]=n[e])),this.iframe.contentWindow&&this.iframe.contentWindow.addEventListener("DOMContentLoaded",(()=>{o()}),!0))})),(0,s.Z)(this,"_setConnectContainer",(e=>{this.connectContainer=e}))}componentDidMount(){this._constructIframeWithDefer(this.props)}UNSAFE_componentWillReceiveProps(e){const{height:t}=this.props;this.iframe&&t!==e.height&&(this.iframe.style.height=e.height),this.props.src!==e.src&&this._constructIframeWithDefer(e)}_createURLParams(e){return Object.keys(e).map((t=>{const n=e[t];return n?`${t}=${n}`:""})).filter((e=>!!e)).join("&")}render(){return d.createElement("div",{ref:this._setConnectContainer})}},(0,s.Z)(v,"displayName","FakeConnectIframe"),(0,s.Z)(v,"defaultProps",{iframeAttributes:{},classNames:[],style:{},hash:""}),_=b))||_;class I extends d.Component{render(){const{src:e,height:t,supportConfluencePreviewer:n,hash:i}=this.props,{bridgeId:s}=this.context,o={"data-bridge-id":s,"data-is-fallback-mode-iframe":!0},a={border:0,width:"100%",height:t,display:"block"},{contentType:c}=(0,u.Z)(r(),r().document);return d.createElement(l.xs,{to:[h.d]},(({setReady:r})=>d.createElement(d.Fragment,null,d.createElement(C,{src:e,hash:i,height:t,style:a,contentStateSetReady:r,classNames:[c,"view"],iframeAttributes:o}),n?d.createElement(g,{bridgeId:s}):null)))}}I.displayName="FallbackModeIframe",(0,s.Z)(I,"defaultProps",{hash:""}),I.displayName="FallbackModeIframe",I.defaultProps={supportConfluencePreviewer:!1},I.contextTypes={bridgeId:c().string.isRequired}}}]);
//# sourceMappingURL=24101.9dp3S2y73o.js.map