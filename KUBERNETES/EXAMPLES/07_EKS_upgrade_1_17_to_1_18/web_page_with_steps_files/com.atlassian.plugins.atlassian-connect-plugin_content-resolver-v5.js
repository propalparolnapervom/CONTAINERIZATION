WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:content-resolver-v5', location = 'v5/js/iframe/host/content-resolver.js' */
(function(){function h(a,b){return AJS.contextPath()+"/plugins/servlet/ac/"+encodeURIComponent(a)+"/"+encodeURIComponent(b)}function k(a){var b={};_.keys(a).forEach(function(c){b["ac."+c]=a[c]});return b}function l(a,b){var c={};_.keys(a).forEach(function(d){b(d,a[d])&&(c[d]=a[d])});return c}function f(a){a=a.getResponseHeader("Date");a=Math.round(Date.parse(a)/1E3);var b=Math.round(Date.now()/1E3);isNaN(a)||(a=Math.abs(b-a),window.connectHost.setJwtClockSkew(a+60))}function m(a){a=a.addon_key+"__"+
a.key;if(window._AP&&window._AP.cacheableIframeUrls&&window._AP.cacheableIframeUrls[a])return window._AP.cacheableIframeUrls[a]}function e(a,b){return AJS.$.Deferred(function(c){var d=m(a);if(d&&!b)c.resolve(window._AP._convertConnectOptions({addon_key:a.addon_key,key:a.key,url:d,productCtx:JSON.stringify(a.options.productContext||{})}));else{d={"plugin-key":a.addon_key,"product-context":JSON.stringify(a.options.productContext||{}),key:a.key,width:a.width||"100%",height:a.height||"100%",classifier:a.classifier||
"raw"};a.options.contentClassifier&&(d.classifier=[a.options.contentClassifier,d.classifier]);var e=l(a.options.customData||{},function(a,b){return _.isObject(b)?!1:"string"===typeof b||b instanceof String?255>b.length:!0});AJS.$.ajax(h(a.addon_key,a.key),{dataType:"json"===a.classifier?"json":"html",data:AJS.$.extend({},d,k(e)),type:"POST"}).then(function(a,d,e){f(e);b?c.resolve(window._AP._convertConnectOptions(a)):require(["ac/create"],function(b){c.resolve(window._AP._convertConnectOptions(a))})}).fail(function(b,
d,e){f(b);c.reject({addon_key:a.addon_key,key:a.key,options:a.options},{text:"Unable to retrieve addon module URL. Please check your specified module key."})})}}).promise()}function g(a){return function(b){if("set_inner_iframe_url"===b.data.type){if(a&&a.getBooleanFeatureFlag&&a.getBooleanFeatureFlag("com.atlassian.connect.resolve_inner_iframe_url"))return b.data.iframeData.classifier="json",e(b.data.iframeData,!0).then(function(c){a.createExtension(c);b.source.location=c.url});b.data.iframeData.url&&
0===b.data.iframeData.url.indexOf("http")&&(b.source.location=b.data.iframeData.url)}}}define("ac/content-resolver",function(){return{resolveByExtension:e,getIframeUrlSetter:g}});_AP.util.awaitGlobal("connectHost",function(a){a.registerContentResolver.resolveByExtension(e);window.addEventListener("message",g(a))})})();
}catch(e){WRMCB(e)};