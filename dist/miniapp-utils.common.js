!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):(e=e||self,function(){var t=e["miniapp-utils"],o=e["miniapp-utils"]={};n(o),o.noConflict=function(){return e["miniapp-utils"]=t,o}}())}(this,function(e){"use strict";function n(){return"undefined"!=typeof wx&&wx?wx:"undefined"!=typeof my&&my?my:"undefined"!=typeof swan&&swan?swan:"undefined"!=typeof tt&&tt?tt:global}function t(){if("undefined"!=typeof wx&&wx)return"weapp";if("undefined"!=typeof my&&my)return"aliapp";if("undefined"!=typeof swan&&swan)return"swan";if("undefined"!=typeof tt&&tt)return"tt";throw new Error("Not Support In This Platform!")}var o=n(),i="更新提示",f="新版本已经准备好，是否重启应用？",a="使用新版";e.getGlobal=n,e.getPlatform=t,e.updateApp=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{reLaunch:"/pages/index/index",showCancel:!1},r=e.reLaunchPage,u=e.title,p=e.content,d=e.confirmText,c=e.showCancel,l=o.getUpdateManager();try{l.onCheckForUpdate(function(e){console.log(e.hasUpdate)}),l.onUpdateReady(function(){!function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};"aliapp"===t()?n().confirm(e):n().showModal(e)}({title:u||i,content:p||f,showCancel:c,confirmText:d||a,success:function(e){e.confirm&&l.applyUpdate()}})}),l.onUpdateFailed(function(){o.reLaunch({url:r})})}catch(e){console.error(e)}return l},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=miniapp-utils.common.js.map
