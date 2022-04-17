(self._cf=self._cf||[]).push([[76286],{587939:(t,e,n)=>{"use strict";n.d(e,{f:()=>r});var i=n(159394),s=n(151119),a=n(984116),o=n(669021);class r extends a.W2{constructor(...t){super(...t),(0,s.Z)(this,"state",{floatingBanners:[]}),(0,s.Z)(this,"showFloating",((t,e)=>{const n=(0,o.f)(t,this.state.floatingBanners);-1===n?this.setState((n=>{const s=[...n.floatingBanners];return s.push({name:t,height:e}),(0,i.Z)((0,i.Z)({},n),{},{floatingBanners:s})})):this.state.floatingBanners[n].height!==e&&this.setState((t=>{const s=[...t.floatingBanners];return s[n].height=e,(0,i.Z)((0,i.Z)({},t),{},{floatingBanners:s})}))})),(0,s.Z)(this,"hideFloating",(t=>{const e=(0,o.f)(t,this.state.floatingBanners);e>-1&&this.setState((t=>{const n=[...t.floatingBanners];return n.splice(e,1),(0,i.Z)((0,i.Z)({},t),{},{floatingBanners:n})}))})),(0,s.Z)(this,"getFloatingHeightBefore",(t=>{const e=(0,o.f)(t,this.state.floatingBanners);return-1===e?0:this.state.floatingBanners.slice(0,e).reduce(((t,e)=>t+e.height),0)})),(0,s.Z)(this,"getFloatingHeight",(()=>this.state.floatingBanners.reduce(((t,e)=>t+e.height),0)))}}},776286:(t,e,n)=>{"use strict";n.r(e),n.d(e,{NotifyingStickyWrapper:()=>Z,StickyBanner:()=>T});var i=n(159394),s=n(151119),a=n(202784),o=n(984116),r=(n(213980),n(491807)),c=n(669021),l=n(587939),h=n(547313),d=n(254073),u=n.n(d),p=n(890993),f=n(423883);const g=({onBeforeExplicitScroll:t})=>(function(t){const{onBeforeExplicitScroll:e}=t;(0,a.useEffect)((()=>{const t=(0,f.rN)(e);return()=>t()}),[e])}({onBeforeExplicitScroll:t}),null);g.displayName="DocumentScrollListener";var S=n(365220);const m=(0,h.Z)("div",{target:"e1u05xh10"})("@keyframes stickyDisappear{0%{transform:translate3d(0,0,0);}100%{transform:translate3d(0,-100%,0);}}@keyframes stickyAppear{0%{transform:translate3d(0px,-100px,0px);}100%{transform:translate3d(0px,0px,0px);}}animation-name:",(t=>"top"===t.stuckState?"stickyAppear":"hidden"===t.stuckState?"stickyDisappear":"none"),";animation-duration:0.25s;animation-timing-function:ease;animation-delay:0s;animation-iteration-count:1;animation-direction:normal;animation-fill-mode:forwards;animation-play-state:running;position:",(t=>t.stuckState?"fixed":"initial"),";width:",(t=>t.stuckState&&t.width?`${t.width}px`:"inherit"),";top:",(t=>t.offsetHeight),"px;z-index:12;background-color:#fff;margin-left:-10px;padding-left:10px;"),k=(0,h.Z)("div",{target:"e1u05xh11"})({name:"12iqrvt",styles:"box-sizing:border-box;.sticky-header{background-color:#fff;}position:relative;z-index:10;"});class y extends a.PureComponent{constructor(...t){super(...t),(0,s.Z)(this,"state",{stuckState:null,width:0}),(0,s.Z)(this,"containerRef",a.createRef()),(0,s.Z)(this,"isMounted",!1),(0,s.Z)(this,"lastDownwardTop",0),(0,s.Z)(this,"lastTop",0),(0,s.Z)(this,"repaintTimeout",null),(0,s.Z)(this,"notifyTableTimeout",null),(0,s.Z)(this,"height",0),(0,s.Z)(this,"preventNextScrollFromTriggeringStickyHeader",!1),(0,s.Z)(this,"ignoreNextScroll",(()=>{this.preventNextScrollFromTriggeringStickyHeader=!0,"top"===this.state.stuckState&&this.setState({stuckState:"hidden"},this.handleStickyStateChange)})),(0,s.Z)(this,"stick",u()((t=>{var e;if(!this.isMounted)return;const n=null!=(e=this.containerRef)?e.current:e;if(!(n&&n.querySelector(`#${S.r}`)))return void this.setState({stuckState:null},this.handleStickyStateChange);const i=t&&"scroll"===t.type,s=n.getBoundingClientRect().top,a=this.lastTop>=s;i&&(this.lastTop=s,a&&(this.lastDownwardTop=s));const{stuckState:o}=this.state;let r=o;s<0?(this.props.closeOpenDialogAndMenu(),i&&a&&"top"===o?r="hidden":i&&!a&&Math.abs(s-this.lastDownwardTop)>=50&&(this.preventNextScrollFromTriggeringStickyHeader?this.preventNextScrollFromTriggeringStickyHeader=!1:r="top")):r=null,r!=o&&this.setState({stuckState:r},this.handleStickyStateChange)}),50)),(0,s.Z)(this,"handleStickyStateChange",(()=>{const{stickyStateChangeHandler:t}=this.props,{stuckState:e}=this.state;"top"===e?(this.sendHeaderIsStickyAnalyticsEvent(),window.clearTimeout(this.notifyTableTimeout),this.notifyTableTimeout=window.setTimeout((()=>{const{stuckState:e}=this.state,n=this.containerRef&&this.containerRef.current.querySelector("[data-test-id='header-animated-box']"),i=n&&n.getBoundingClientRect()||{},s="top"===e&&i.height||0;t({stuckState:e,headerHeight:s})}),250)):t({stuckState:e,headerHeight:0})})),(0,s.Z)(this,"setWidth",u()((t=>{this.isMounted&&this.setState({width:t})}),100))}componentDidMount(){this.isMounted=!0,this.getHeaderComponent()&&window.addEventListener&&(window.addEventListener("scroll",this.stick),window.addEventListener("resize",this.stick),this.stick())}componentWillUnmount(){this.isMounted=!1,window.removeEventListener&&(window.removeEventListener("scroll",this.stick),window.removeEventListener("resize",this.stick),window.clearTimeout(this.repaintTimeout),window.clearTimeout(this.notifyTableTimeout))}getHeaderComponent(){const{children:t}=this.props;return t&&a.Children.only(t)?t:null}cloneHeader(){const t=this.getHeaderComponent();if(!t)return null;const{stuckState:e}=this.state;if(!e)return t;const n={className:`${t.props.className||""} sticky-header`,isSticky:!0};return(0,a.cloneElement)(t,n)}sendHeaderIsStickyAnalyticsEvent(){const{createAnalyticsEvent:t}=this.props;t({type:"sendTrackEvent",data:{source:"viewPageScreen",action:"stuck",actionSubject:"contentHeader",attributes:{source:"v2"}}}).fire()}render(){const{stuckState:t,width:e}=this.state;return a.createElement(k,{ref:this.containerRef},a.createElement(g,{onBeforeExplicitScroll:this.ignoreNextScroll}),a.createElement(m,{offsetHeight:this.props.offsetHeight,stuckState:t,width:e,"data-test-id":"header-animated-box"},this.cloneHeader()),a.createElement(p.Z,null,this.setWidth))}}y.displayName="StickyWrapper",(0,s.Z)(y,"defaultProps",{stickyStateChangeHandler:()=>{},closeOpenDialogAndMenu:()=>{},offsetHeight:0});const w="StickyBanner";class Z extends a.PureComponent{constructor(...t){super(...t),(0,s.Z)(this,"onStateChange",(t=>{const{stickyStateChangeHandler:e,floatingBanners:n}=this.props;n.showFloating(w,t.headerHeight),e&&e(t)}))}componentWillUnmount(){const{floatingBanners:t}=this.props;t.hideFloating(w)}render(){const{bannerState:t,floatingBanners:e,children:n}=this.props,s=t.getTotalHeight()-e.getFloatingHeightBefore(w);return a.createElement(y,(0,i.Z)((0,i.Z)({},this.props),{},{offsetHeight:s,stickyStateChangeHandler:this.onStateChange}),n)}}Z.displayName="NotifyingStickyWrapper";const x=t=>a.createElement(o.xs,{to:[c.S,l.f]},((e,n)=>a.createElement(Z,(0,i.Z)((0,i.Z)({},t),{},{bannerState:e,floatingBanners:n}))));x.displayName="WithStateContainers";const T=(0,r.Z)()(x)},365220:(t,e,n)=>{"use strict";n.d(e,{r:()=>i});const i="content-header-container"},423883:(t,e,n)=>{"use strict";n.d(e,{rN:()=>a,nK:()=>r,kI:()=>c});const i=(0,n(36200).j)("scroll-to-element"),s=new Set;function a(t){return s.add(t),()=>s.delete(t)}function o(){s.forEach((t=>{try{t()}catch(e){Promise.all([n.e(91828).then(n.bind(n,991828)),n.e(35074).then(n.bind(n,535074))]).then((([{getMonitoringClient:t},{Attribution:n}])=>{t().submitError(e,{attribution:n.CONTENT_EXPERIENCE})})).catch((()=>{}))}}))}function r(){o(),window.scrollTo(0,0)}function c(t,e){let n=0,s=t.offsetParent;for(;s instanceof HTMLElement;)n+=s.offsetTop,s=s.offsetParent;const a=t.offsetTop+(e||0)+n;o();try{window.scroll({top:a,behavior:"auto"})}catch(r){i.error`window.scroll() is not supported`}}}}]);
//# sourceMappingURL=76286.Ph2YayB561.js.map