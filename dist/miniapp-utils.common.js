!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):(e=e||self,function(){var t=e["miniapp-utils"],o=e["miniapp-utils"]={};n(o),o.noConflict=function(){return e["miniapp-utils"]=t,o}}())}(this,function(e){"use strict";function n(){return"undefined"!=typeof wx&&wx?wx:"undefined"!=typeof my&&my?my:"undefined"!=typeof swan&&swan?swan:"undefined"!=typeof tt&&tt?tt:global}function t(){if("undefined"!=typeof wx&&wx)return"weapp";if("undefined"!=typeof my&&my)return"aliapp";if("undefined"!=typeof swan&&swan)return"swan";if("undefined"!=typeof tt&&tt)return"tt";throw new Error("Not Support In This Platform!")}var o=n();e.getGlobal=n,e.getPlatform=t,e.updateApp=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{reLaunch:"/pages/index/index"}).reLaunchPage,i=o.getUpdateManager();return i.onCheckForUpdate(function(e){console.log(e.hasUpdate)}),i.onUpdateReady(function(){!function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};"aliapp"===t()?n().alert(e):n().showModal(e)}({title:"更新提示",content:"新版本已经准备好，是否重启应用？",showCancel:!1,confirmText:"使用新版",success:function(){i.applyUpdate()}})}),i.onUpdateFailed(function(){o.reLaunch({url:e})}),i},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=miniapp-utils.common.js.map
