(self._cf=self._cf||[]).push([[87978],{82567:(e,t,n)=>{"use strict";n.d(t,{P:()=>u});var o=n(202784),r=n(315783),s=n(391528),i=n(526973),l=n(717821),a=n(558849),c=n(135401);const u=(0,o.memo)((({customData:e={},metricName:t,onComplete:n=(()=>{}),stopTime:u,timing:d})=>{const m=(0,l.w)(t),p=(0,r.TW)(a.x),k=(0,o.useCallback)((()=>{!p&&m&&(e.startTime=e.startTime?e.startTime-i.x.pageLoadStartTimestamp:i.x.startTimes[t],e.endTime=u||performance.now()-i.x.pageLoadStartTimestamp,e.pageLoadInfo=(0,s.aX)(),m.stop({customData:e,stopTime:u}),delete i.x.startTimes[t],n())}),[p,m,n]);return o.createElement(c.e,{action:k,timing:d})}))},497959:(e,t,n)=>{"use strict";n.d(t,{I:()=>a});var o=n(202784),r=n(315783),s=n(717821),i=n(558849),l=n(135401);const a=(0,o.memo)((({markName:e,timing:t,metricName:n,onComplete:a=(()=>{}),timestamp:c})=>{const u=(0,s.w)(n),d=(0,r.TW)(i.x),m=(0,o.useCallback)((()=>{!d&&u&&(u.mark(e,c),a())}),[d,u,a]);return o.createElement(l.e,{action:m,timing:t})}))},687978:(e,t,n)=>{"use strict";n.d(t,{d:()=>Le});var o=n(202784),r=(n(213980),n(384684)),s=n(239861),i=n(767874),l=n(135401),a=n(164464),c=n(239381),u=n(557098),d=n(908317),m=n(180213),p=n(151119),k=n(412470),g=n(497959),h=n(82567),f=n(235748),y=n(491807),I=n(230382),C=n.n(I);const E=C()`query LikeSummaryQuery($contentId:ID!$contentType:String!){tenant{cloudId}content(id:$contentId type:$contentType){nodes{id likes{nodes{user{accountId displayName profilePicture{path}}currentUserIsFollowing}}}}}`,L=C()`query PaginatedLikeSummaryQuery($contentId:ID!$contentType:String!$first:Long=2$offset:Int=0$status:[String]){user(current:true){id}tenant{cloudId}content(id:$contentId type:$contentType status:$status){nodes{id likes(first:$first offset:$offset){count currentUserLikes followees{displayName accountId}nodes{user{accountId displayName profilePicture{path}}currentUserIsFollowing}}}}}`;var w=n(646729),F=n(159394),S=n(743243),v=n(251018),U=n(175612),b=n(341306);const $=k.default.button`
  background: 0;
  border: 0;
  cursor: pointer;
  color: ${e=>e.isComment?"#707070":U.B400};
  font-size: inherit;
  ${e=>e.isComment?"":"line-height: 20px;"} /* legacy styling */
  
  padding: 0;

  &:hover {
    cursor: pointer;
    color: ${e=>e.isComment?"#707070":U.B400};
    text-decoration: underline;
  }

  &:focus {
    outline: 2px solid ${U.B100};
    outline-offset: 2px;
  }

  & > span {
    vertical-align: bottom;
  }
`;class N extends o.PureComponent{constructor(...e){super(...e),(0,p.Z)(this,"state",{isLikedByCurrentUser:this.props.isLikedByCurrentUser}),(0,p.Z)(this,"onLikeClick",(()=>{const{likeContent:e,unlikeContent:t,onClick:n}=this.props,{isLikedByCurrentUser:o}=this.state;n&&n(),o?(t(),this.setState({isLikedByCurrentUser:!1})):(e(),this.setState({isLikedByCurrentUser:!0}))})),(0,p.Z)(this,"onLikeMouseDown",(e=>{e.preventDefault()})),(0,p.Z)(this,"renderLikeIcon",(e=>!e&&o.createElement(v.default,{size:S.d.medium,primaryColor:U.N500})))}renderLikeAction(){const{disableButtonAction:e}=this.props,{isLikedByCurrentUser:t}=this.state,n={disableButtonAction:e,isLikedByCurrentUser:t};return o.createElement(b.Y,(0,F.Z)({},n))}render(){const{isForComment:e,isForInlineComment:t,disableButtonAction:n}=this.props,r=e||t;return o.createElement($,{isComment:r,onMouseDown:this.onLikeMouseDown,onClick:n?null:this.onLikeClick},this.renderLikeIcon(r),this.renderLikeAction())}}N.displayName="LikeButtonComponent";const T=C()`query LikeButtonQuery($contentId:ID!$contentType:String$status:[String]){content(id:$contentId type:$contentType status:$status){nodes{id likes{currentUserLikes}}}}`,P=C()`mutation LikeButtonLikeMutation($contentId:ID!){likeContent(input:{contentId:$contentId}){content{id likes{count currentUserLikes}}}}`,B=C()`mutation LikeButtonUnlikeMutation($contentId:ID!){unlikeContent(input:{contentId:$contentId}){content{id likes{count currentUserLikes}}}}`;const M=(0,y.Z)()(class extends o.PureComponent{constructor(...e){super(...e),(0,p.Z)(this,"fireLikeAnalyticsEvent",(()=>{this.fireAnalyticsEvent("created")})),(0,p.Z)(this,"fireUnlikeAnalyticsEvent",(()=>{this.fireAnalyticsEvent("deleted")})),(0,p.Z)(this,"generateMutation",(e=>{const{contentId:t}=this.props;return()=>{e({variables:{contentId:t}})}}))}getAnalyticsData(e){const{contentId:t,contentType:n,containerId:o,containerType:r,isForComment:s,isForInlineComment:i}=this.props;return{action:e,actionSubject:"like",containerType:s||i?"page":r,containerId:o,objectType:i?"inlineComment":s?"comment":"page",objectId:t,source:"likeButton",attributes:{componentVersion:"v2",pageType:"blogpost"===n||"blogpost"===r?"blogpost":"page"}}}fireAnalyticsEvent(e){this.props.createAnalyticsEvent({type:"sendTrackEvent",data:this.getAnalyticsData(e)}).fire()}render(){const{contentId:e,contentType:t,isForComment:n,isForInlineComment:s,disableButtonAction:i,onClick:l,shouldSkipQuery:c,isLikedByCurrentUser:u}=this.props,d={contentId:e,contentType:t,status:s?["current","draft"]:["current"]};return o.createElement(a.e,null,(({featureFlags:e})=>{const t=e["confluence.frontend.paginated.likes"];return o.createElement(r.AE,{query:T,variables:d,skip:c},(({data:e,loading:a,error:m})=>{var p;if(a||m)return n||s?null:o.createElement(w.C,null);const k=c?u:null!=(p=e)&&null!=(p=p.content)&&null!=(p=p.nodes)&&null!=(p=p[0])&&null!=(p=p.likes)?p.currentUserLikes:p;return o.createElement(r.mm,{mutation:P,onCompleted:this.fireLikeAnalyticsEvent,refetchQueries:[{query:t?L:E,variables:d}]},(e=>o.createElement(r.mm,{mutation:B,onCompleted:this.fireUnlikeAnalyticsEvent,refetchQueries:[{query:t?L:E,variables:d}]},(t=>o.createElement(N,{likeContent:this.generateMutation(e),unlikeContent:this.generateMutation(t),isLikedByCurrentUser:k,isForComment:n,isForInlineComment:s,disableButtonAction:i,onClick:l})))))}))}))}});var D=n(830691),x=n(18468),Z=n(866380),A=n(633251),H=n(90477),_=n(670390),q=n(523507),Q=n(36200);const j=(0,D.vU)({people:{id:"likes.summary.count.people",defaultMessage:"{numLikers} people",description:"number of people who like content"},others:{id:"likes.summary.count.others",defaultMessage:"{numLikers} others",description:"number of other people who like content"}}),Y=(0,k.default)(H.Y)`
  ${e=>e.isForComment&&"color: #707070;"} &:hover {
    ${e=>e.isForComment&&"color: #707070;"};
  }
`,z=k.default.a`
  cursor: pointer;
`;function K(e,t,n){const r=t?j.people:j.others;return o.createElement(z,{onClick:n},o.createElement(D._H,(0,F.Z)((0,F.Z)({},r),{},{values:{numLikers:e}})))}z.displayName="PointerLink",K.displayName="generateLikeDialogLink";const R=o.createElement(o.Fragment,null," ",o.createElement(D._H,{id:"likes.summary.separator.and",defaultMessage:"and",description:"Word and used in listing things"})," "),W=o.createElement(o.Fragment,null,o.createElement(D._H,{id:"likes.summary.separator.comma",defaultMessage:",",description:"comma punctuation used in listing things"})," "),V=(0,Q.j)("paginated-likes");class G extends o.PureComponent{getUserLinkTemplate({accountId:e,displayName:t}){const{cloudId:n,isForComment:r}=this.props;return o.createElement(Y,{isForComment:r,href:(0,_.p)(e,"profileCard")},o.createElement(Z.Z,{tag:"span",component:A.Z,content:o.createElement(x.ZP,{cloudId:n,userId:e,resourceClient:(0,q.F)()})},o.createElement("span",null,t)))}generateYou(){return o.createElement(D._H,{id:"likes.summary.word.you",defaultMessage:"You",description:"You are the user"})}generatePromoted(e,t,n){const r=e.length-1;let s=t;return e.map(((e,t)=>{let i;s&&(i=t===r&&0===n?R:W),s=!0;try{return o.createElement(o.Fragment,{key:e.accountId},i,this.getUserLinkTemplate(e))}catch(l){return V.error`Error generating promoted user ${e} : ${l}`,null}}))}generateNonPromoted(e,t,n){try{let r=this.getUserLinkTemplate(n[0]);if(e>1){const{handleDialogLinkClick:n}=this.props;r=K(e,t,n)}return o.createElement(o.Fragment,null,!t&&R,r)}catch(r){return V.error`Error generating non-promoted user ${n[0]} : ${r}`,null}}generateMessage(){const{likedBy:e,currentUserId:t,likesCount:n,currentUserLikes:r,isPaginated:s,followees:i}=this.props,l=[];let a=[],c=0,u=!1,d=!0,m=0,p=0;return s?(c=r?n-1:n,a=i.slice(0,3),m=a.length,p=c-m,d=!r&&0===m,u=r,e.forEach((e=>{e.accountId===t||a.find((t=>t.accountId===e.accountId))||l.push(e)}))):(e.forEach((e=>{e.accountId===t?(u=!0,d=!1):a.length<3&&e.currentUserIsFollowing?(a.push(e),d=!1):l.push(e)})),m=a.length,p=l.length,c=u?2:m+p),o.createElement("span",null,u&&this.generateYou(),m?this.generatePromoted(a,u,p):null,p?this.generateNonPromoted(p,d,l):null," ",o.createElement(D._H,{id:"likes.summary.phrase.likeThis",defaultMessage:"{numLikers, plural, one {likes this} other {like this}}",description:"suffix for number of users who like this piece of content",values:{numLikers:c}}))}render(){const{currentUserId:e,likedBy:t,likesCount:n,isForComment:r,isPaginated:s}=this.props;return 0===(s?n:t.length)?!r&&e?o.createElement(D._H,{id:"likes.phrase.bethefirst",defaultMessage:"Be the first to like this",description:"Message for content without any likes"}):null:this.generateMessage()}}G.displayName="LikeSummaryMessageComponent";const O=k.default.span`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;O.displayName="SummaryLink";const X=k.default.span`
  ${e=>e.showSeparator&&'::after {\n    content: "•";\n    color: $dark-gray;\n    padding: 0 0 0 3px;\n    font-size: 12px;\n  }'}
`;class J extends o.PureComponent{renderForNotInlineComment(){const{cloudId:e,contentStatus:t,likesCount:n,currentUserLikes:r,followees:s,isPaginated:i,likedBy:l,isHidingLikesEnabled:a,currentUserId:c,isForComment:u,onClick:d}=this.props,m=i?n:l.length,p=u&&m>0,k=!a||("archived"!==t||m>0);return o.createElement("span",{"data-test-id":"likes-summary-span"},p&&o.createElement(v.default,{size:S.d.small,primaryColor:"#707070"}),k&&o.createElement(G,{likesCount:n,currentUserLikes:r,followees:s,isPaginated:i,likedBy:l,currentUserId:c,cloudId:e,isForComment:u,handleDialogLinkClick:d}))}renderForInlineComment(){const{likedBy:e,onClick:t,likesCount:n,isPaginated:r,showSeparator:s}=this.props,i=r?n:e.length;return i?o.createElement(X,{showSeparator:s},o.createElement(v.default,{size:S.d.small,primaryColor:"#707070"}),o.createElement(O,{onClick:t,"data-test-id":"likes-summary-link"},i)):null}render(){return this.props.isForInlineComment?this.renderForInlineComment():this.renderForNotInlineComment()}}J.displayName="LikeSummaryComponent";class ee extends o.PureComponent{render(){const{contentId:e,contentType:t,onClick:n,isHidingLikesEnabled:s,userId:i,isForComment:l,isForInlineComment:c,showSeparator:u,contentStatus:d,hasLikes:m}=this.props,p={contentId:e,contentType:t,status:c?["current","draft"]:["current"]};return o.createElement(a.e,null,(({featureFlags:e})=>{const t=e["confluence.frontend.paginated.likes"];return o.createElement(r.AE,{query:t?L:E,variables:p,skip:!m},(({data:e,loading:r,error:a})=>{var m,p;if(r||a)return null;const k=i,g=null!=(p=e)&&null!=(p=p.tenant)?p.cloudId:p;let h=0,f=!1,y=[];var I,C,E;t&&(h=(null!=(E=e)&&null!=(E=E.content)&&null!=(E=E.nodes)&&null!=(E=E[0])&&null!=(E=E.likes)?E.count:E)||0,f=(null!=(C=e)&&null!=(C=C.content)&&null!=(C=C.nodes)&&null!=(C=C[0])&&null!=(C=C.likes)?C.currentUserLikes:C)||!1,y=(null!=(I=e)&&null!=(I=I.content)&&null!=(I=I.nodes)&&null!=(I=I[0])&&null!=(I=I.likes)?I.followees:I)||[],y=y.filter((e=>e.accountId!=k)));const L=((null!=(m=e)&&null!=(m=m.content)&&null!=(m=m.nodes)&&null!=(m=m[0])&&null!=(m=m.likes)?m.nodes:m)||[]).map((({currentUserIsFollowing:e,user:{displayName:t,accountId:n,profilePicture:{path:o}={}}={}})=>({displayName:t,accountId:n,avatarUrl:o,currentUserIsFollowing:e})));return o.createElement(J,{likesCount:h,currentUserLikes:f,followees:y,isPaginated:t,likedBy:L,cloudId:g,contentStatus:d,isHidingLikesEnabled:s,currentUserId:k,onClick:n,isForComment:l,isForInlineComment:c,showSeparator:u})}))}))}}ee.displayName="LikeSummary";var te=n(949778),ne=n(387179),oe=n(590429),re=n(227371),se=n(41001),ie=n(412196);const le=(0,D.vU)({followUser:{id:"likes.dialog.action.follow",defaultMessage:"Follow",description:"Verb for following/subscribing to a user"},dialogHeading:{id:"likes.dialog.phrase.likers",defaultMessage:"People who like this",description:"People who like the piece of content"},following:{id:"likes.dialog.noun.following",defaultMessage:"Following",description:"Gerund for a user you already follow"},close:{id:"likes.dialog.action.close",defaultMessage:"Close",description:"Button for closing dialog"}}),ae=k.default.div`
  border-bottom: 1px solid ${U.N50};
  display: flex;
  align-items: center;
  padding: 10px;
  overflow: auto;
`;ae.displayName="LikeUserRow";const ce=k.default.div`
  line-height: 0;
`;ce.displayName="AvatarContainer";const ue=k.default.div`
  flex-grow: 1;
  padding: 0 10px;
  a,
  a:hover,
  a:active,
  a:visited,
  a:link {
    color: ${U.N800};
  }
`,de=k.default.div`
  display: flex;
  margin: 4px 0;
  justify-content: center;
`;ue.displayName="UserNameContainer";const me=(0,D.XN)((0,y.Z)()(class extends o.PureComponent{constructor(...e){super(...e),(0,p.Z)(this,"loadMoreClicked",(()=>{const{onLoadMore:e,createAnalyticsEvent:t}=this.props;e(),t({type:"sendTrackEvent",data:{action:"clicked",actionSubject:"button",actionSubjectId:"LikeDialogLoadMore",source:"LikeDialog"}}).fire()}))}renderLikeRow({displayName:e,accountId:t,avatarUrl:n,currentUserIsFollowing:r}){if(!e)return null;const{followUser:s}=this.props;return o.createElement(ae,{key:t,"data-test-id":"like-row"},o.createElement(ce,null,o.createElement(se.Z,{src:n,size:"medium"})),o.createElement(ue,null,o.createElement(H.Y,{target:"_blank",href:(0,_.p)(t,null)},e)),o.createElement("div",null,r?o.createElement(D._H,(0,F.Z)({},le.following)):o.createElement(re.Z,{onClick:()=>{s(t)},"data-test-id":"follow-user-button"},o.createElement(D._H,(0,F.Z)({},le.followUser)))))}render(){const{onClose:e,likedBy:t,hasNextPage:n,isDisabled:r,isPaginated:s}=this.props,i=[{text:o.createElement(D._H,(0,F.Z)({},le.close)),onClick:e}];return o.createElement(ne.Z,null,o.createElement(oe.Z,{actions:i,onClose:e,width:"small",heading:o.createElement(D._H,(0,F.Z)({},le.dialogHeading))},t.map((e=>this.renderLikeRow(e))),s&&n?o.createElement(de,null,o.createElement(re.Z,{"data-test-id":"like-dialog-load-more-button",appearance:"default",isDisabled:r,onClick:this.loadMoreClicked},o.createElement(D._H,{id:"likes.dialog.load.more.button",defaultMessage:"Load more",description:"Like dialog, load more button"}))):null,o.createElement(ie.n,{subject:"load-likes-dialog"})))}})),pe=C()`query LikesDialogQuery($contentId:ID!$contentType:String!){content(id:$contentId type:$contentType){nodes{id likes{nodes{user{accountId displayName profilePicture{path}}currentUserIsFollowing}}}}}`,ke=C()`query PaginatedLikesQuery($contentId:ID!$first:Long=20$offset:Int){content(id:$contentId){nodes{id type likes(first:$first offset:$offset){count currentUserLikes nodes{user{accountId displayName profilePicture{path}}currentUserIsFollowing}pageInfo{hasNextPage endCursor}}}}}`,ge=C()`mutation LikeDialogFollowMutation($accountId:String!){followUser(followUserInput:{accountId:$accountId}){currentUserFollowing}}`;class he extends o.PureComponent{constructor(...e){super(...e),(0,p.Z)(this,"state",{followerAccountId:"",loadMoreDisabled:!1}),(0,p.Z)(this,"updateLikesCache",((e,{data:t})=>{const{contentId:n}=this.props,o=e.readQuery({query:ke,variables:{contentId:n}});o.content.nodes[0].likes.nodes.find((e=>e.user.accountId===this.state.followerAccountId)).currentUserIsFollowing=t.followUser.currentUserFollowing,e.writeQuery({query:ke,data:(0,F.Z)({},o),variables:{contentId:n}})})),(0,p.Z)(this,"generateLoadMoreHandler",(({fetchMore:e,contentId:t,likes:n})=>()=>{this.setState({loadMoreDisabled:!0}),e({query:ke,updateQuery:(e,{fetchMoreResult:t})=>t?(t.content.nodes[0].likes.nodes=[...e.content.nodes[0].likes.nodes,...t.content.nodes[0].likes.nodes],this.setState({loadMoreDisabled:!1}),(0,F.Z)({},t)):e,variables:{offset:n.length,contentId:t}})}))}getFollowUserMutation(e){return t=>{this.setState({followerAccountId:t}),e({variables:{accountId:t}})}}render(){const{contentId:e,contentType:t,onClose:n}=this.props,s={contentId:e,contentType:t};return(0,te.So)({subject:"load-likes-dialog"}),o.createElement(a.e,null,(({featureFlags:t})=>{const i=t["confluence.frontend.paginated.likes"];return o.createElement(r.AE,{query:i?ke:pe,variables:s,fetchPolicy:"cache-first"},(({data:t,loading:l,error:a,fetchMore:c})=>{var u,d;if(l||a||!t)return null;const m=(null!=(d=t)&&null!=(d=d.content)&&null!=(d=d.nodes)&&null!=(d=d[0])&&null!=(d=d.likes)?d.nodes:d)||[],p=m.map((e=>{var t;return{accountId:e.user&&e.user.accountId,displayName:e.user&&e.user.displayName,avatarUrl:null!=(t=e)&&null!=(t=t.user)&&null!=(t=t.profilePicture)?t.path:t,currentUserIsFollowing:e.currentUserIsFollowing}})),k=i&&(null!=(u=t)&&null!=(u=u.content)&&null!=(u=u.nodes)&&null!=(u=u[0])&&null!=(u=u.likes)&&null!=(u=u.pageInfo)?u.hasNextPage:u)||!1;return o.createElement(r.mm,(0,F.Z)({mutation:ge},i?{update:this.updateLikesCache}:{refetchQueries:[{query:pe,variables:s}]}),(t=>o.createElement(me,{likedBy:p,onClose:n,isDisabled:this.state.loadMoreDisabled,followUser:this.getFollowUserMutation(t),isPaginated:i,onLoadMore:this.generateLoadMoreHandler({fetchMore:c,contentId:e,likes:m}),hasNextPage:k})))}))}))}}he.displayName="LikeDialog";const fe=k.default.span`
  color: #707070;
  padding: ${e=>e.isForInlineComment?"0 0 0 4px;":"0 4px;"};
`;fe.displayName="SeparatorDot";const ye=k.default.span`
  margin-left: 20px;
`;ye.displayName="SeparatorSpan";const Ie=k.default.span`
  ${e=>e.isComment&&"font-size: 12px;\n    color: #707070;"} /* include this for inline comments because HoverContainer renders empty div */
  + div {
    display: inline;
  }
`;Ie.displayName="LikesContainer";class Ce extends o.PureComponent{constructor(...e){super(...e),(0,p.Z)(this,"state",{isShowingDialog:!1}),(0,p.Z)(this,"onSummaryClick",(()=>{this.setState({isShowingDialog:!0})})),(0,p.Z)(this,"onCloseDialog",(()=>{this.setState({isShowingDialog:!1})}))}renderSummarySeparator(){const{isForComment:e,isForInlineComment:t,hasLikes:n,showSeparator:r}=this.props;return t?n||!r?null:o.createElement(fe,{isForInlineComment:!0},"•"):e?n?o.createElement(fe,null,"•"):null:o.createElement(ye,null)}render(){const{contentId:e,contentType:t,contentStatus:n,containerId:r,containerType:s,hasLikes:l,isForComment:c,isForInlineComment:d,showSeparator:m,onClick:p,shouldSkipQuery:k,isLikedByCurrentUser:y,userId:I}=this.props,C=Boolean(!I);return o.createElement(a.e,null,(({featureFlags:a})=>{const E="archived"===n,L=a["confluence.frontend.hide.like.archived.pages"],w=L?!C&&(!E||l):!C,F=L?c&&(!C||l)&&!E:c&&(!C||l),S=L&&E,v=!L||!E,U=L?m&&!E:m;return o.createElement(Ie,{isComment:c||d},F&&o.createElement(fe,null,"•"),w&&o.createElement("span",null,o.createElement(M,{contentId:e,contentType:t,containerId:r,containerType:s,isForComment:c,isForInlineComment:d,disableButtonAction:S,onClick:p,shouldSkipQuery:k,isLikedByCurrentUser:y}),v&&this.renderSummarySeparator()),o.createElement(ee,{contentId:e,contentType:t,contentStatus:n,onClick:this.onSummaryClick,isHidingLikesEnabled:L,isForComment:c,isForInlineComment:d,showSeparator:U,hasLikes:l,userId:I}),!c&&!d&&o.createElement(o.Fragment,null,o.createElement(f.F,{name:u.q.VIEW_PAGE_LIKES,attributes:{isForComment:c,isForInlineComment:d}}),o.createElement(g.I,{markName:"fmp",metricName:i.u2.LIKES}),o.createElement(g.I,{markName:"tti",metricName:i.u2.LIKES}),o.createElement(h.P,{metricName:i.u2.LIKES})),this.state.isShowingDialog&&o.createElement(he,{contentId:e,contentType:t,onClose:this.onCloseDialog}))}))}}Ce.displayName="LikesComponent";const Ee=C()`query LikesQuery($contentId:ID!$status:[String]){content(id:$contentId status:$status){nodes{id status type likes{count}}}}`;class Le extends o.PureComponent{render(){const{contentId:e,containerId:t,containerType:n,isForComment:p,isForInlineComment:k,showSeparator:g,onClick:h,likesData:f}=this.props,y=["current","archived"];k&&y.push("draft");const I={contentId:e,status:y},C=Boolean(f);return o.createElement(d.S,{attribution:m.x.BACKBONE},!p&&!k&&o.createElement(o.Fragment,null,o.createElement(c.U,{id:e,name:u.q.VIEW_PAGE_LIKES}),o.createElement(s.i,{metricName:i.u2.LIKES,timing:l.H.RENDER_BODY,usePageLoadStartTime:!0})),o.createElement(a.e,null,(({userId:s})=>o.createElement(r.AE,{query:Ee,variables:I,skip:C},(({data:r,loading:i,error:l})=>{if(i||l)return p||k?null:o.createElement(w.C,null);let a,c,u,d=!1;var m,y,I;C?(a=f.contentStatus||"draft",c=f.contentType||"",u=f.likeCount>0,d=f.isLikedByCurrentUser):(a=(null!=(I=r)&&null!=(I=I.content)&&null!=(I=I.nodes)&&null!=(I=I[0])?I.status:I)||"draft",c=(null!=(y=r)&&null!=(y=y.content)?y.type:y)||"",u=((null!=(m=r)&&null!=(m=m.content)&&null!=(m=m.nodes)&&null!=(m=m[0])&&null!=(m=m.likes)?m.count:m)||0)>0);return o.createElement(Ce,{contentId:e,contentStatus:a,contentType:c,containerId:t,containerType:n,hasLikes:u,userId:s,isForComment:p,isForInlineComment:k,showSeparator:g,onClick:h,shouldSkipQuery:C,isLikedByCurrentUser:d})})))))}}Le.displayName="Likes"}}]);
//# sourceMappingURL=87978.GbCsQt8mci.js.map