WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:user-select2', location = '/js/user-select2.js' */
define("confluence-ui-components/js/user-select2",["ajs","confluence/legacy","jquery","confluence/api/constants"],function(b,e,c,a){function d(g){g=g||document.body;var f=function(){var h=c(".select2-drop-active > .select2-results");if(h.children(".select2-result-selectable").length===0&&h.children(".select2-disabled").length){h.append('<li class="select2-no-results">'+b.escapeHtml("No matches found")+"</li>")}};c("input.autocomplete-multiuser[data-autocomplete-bound != 'true']",g).each(function(){var h=c(this);h.attr("data-autocomplete-bound","true");var j=h.attr("data-include-groups");var k=h.attr("data-search-external");var i=a.CONTEXT_PATH+"/images/icons/profilepics/default.png";h.auiSelect2({multiple:true,minimumInputLength:2,formatInputTooShort:function(){return j?"Start typing to search for a user or group":"Start typing to search for a user"},ajax:{transport:function(o){var p=o.success;delete o.success;return c.ajax.apply(c.ajax,arguments).done(p).done(f)},data:function(o){return{limit:6,cql:'user.fullname~"'+o+'"',sitePermissionTypeFilter:k?"externalCollaborator":"none"}},dataType:"json",url:e.getContextPath()+"/rest/api/search",results:function(p){var o=[];c.each(p.results,function(){o.push({id:this.user.accountId,text:this.user.displayName,imgSrc:this.user.profilePicture.path||i,entity:this})});return{results:o}},quietMillis:300},formatResult:function(o){return e.UI.Components.UserSelect2.avatarWithNameAccountId({size:"small",displayName:o.text,userId:o.id,avatarImageUrl:o.imgSrc})},escapeMarkup:function(o){return o},formatSelection:function(o){return e.UI.Components.UserSelect2.avatarWithNameAccountId({size:"xsmall",displayName:o.text,userId:o.id,avatarImageUrl:o.imgSrc})},dropdownCssClass:"users-dropdown",containerCssClass:"users-autocomplete",hasAvatar:true});if(!h.data("autofill-user")){return}var n=b.Meta.get("atlassian-account-id"),m=b.Meta.get("current-user-fullname"),l=b.Meta.get("current-user-avatar-uri-reference");if(n&&m&&l){h.auiSelect2("data",[{id:n,text:m,imgSrc:l}])}})}return{bind:d}});
}catch(e){WRMCB(e)};