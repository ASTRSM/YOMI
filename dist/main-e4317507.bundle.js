/*! For license information please see main-e4317507.bundle.js.LICENSE.txt */
(()=>{"use strict";var t,e={3705:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(5888),o=n(7783),i=n(9161),a=n(5304);const c={"/":o.Z,"/level-list":a.Z,"/level/:id":i.Z,"/dashboard":r.s}},8508:(t,e,n)=>{n.d(e,{Z:()=>r});const r={parseActiveUrlWithCombiner:function(){var t=window.location.hash.slice(1).toLowerCase(),e=this._urlSplitter(t);return this._urlCombiner(e)},parseActiveUrlWithoutCombiner:function(){var t=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(t)},_urlSplitter:function(t){var e=t.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},_urlCombiner:function(t){return(t.resource?"/".concat(t.resource):"/")+(t.id?"/:id":"")+(t.verb?"/".concat(t.verb):"")}}},3886:(t,e,n)=>{n.d(e,{Q:()=>r});var r=function(){var t=JSON.parse(localStorage.getItem("level")),e=JSON.parse(sessionStorage.getItem("level"));t||e||localStorage.setItem("level",JSON.stringify({highestLevelUnlocked:1})),e&&(t.highestLevelUnlocked>e.highestLevelUnlocked?sessionStorage.setItem("level",JSON.stringify(t)):localStorage.setItem("level",JSON.stringify(e)))}},7120:(t,e,n)=>{n.d(e,{Cq:()=>h,Zm:()=>v,yk:()=>p});var r=n(551),o=n(3497),i=n(3886);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(){c=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};u(y,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(E([])));g&&g!==e&&n.call(g,o)&&(y=g);var w=v.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,c,s){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==a(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=v,u(w,"constructor",v),u(v,"constructor",d),d.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),u(w,s,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function s(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}const u=function(){var t,e=(t=c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.getUserById(e);case 2:n=t.sent,sessionStorage.setItem("level",JSON.stringify({highestLevelUnlocked:n.highestLevelUnlocked})),sessionStorage.setItem("admin",JSON.stringify({admin:n.admin})),n||(o.Z.setUserById(e,{highestLevelUnlocked:1}),sessionStorage.setItem("level",JSON.stringify({highestLevelUnlocked:1}))),(0,i.Q)(),JSON.parse(sessionStorage.getItem("admin")).admin&&!$("#help").length&&$("body").append("\n  <aside id='dashboard-link' class='bottom-right'>\n    <a href=\"#/dashboard\">\n        <img src=\"./images/icons/dashboard.svg\" height='20px' alt=\"dashboard logo\">\n        DASHBOARD\n    </a>\n  </aside>\n  ");case 9:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){s(i,r,o,a,c,"next",t)}function c(t){s(i,r,o,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}();var l=new r.hJ,f=(0,r.v0)();(0,r.cx)(f).then((function(t){r.hJ.credentialFromResult(t).accessToken;var e=t.user;sessionStorage.setItem("user",JSON.stringify(e)),location.reload()})).catch((function(t){var e=t.code,n=t.message;console.log(e,n),t.customData.email,r.hJ.credentialFromError(t)}));var h=function(){(0,r.F6)(f,l)},p=function(){(0,r.w7)(f).then((function(){sessionStorage.removeItem("user"),sessionStorage.removeItem("level"),sessionStorage.removeItem("admin"),location.reload()})).catch((function(t){alert(t.message)}))};function d(t){t?u(t.uid):sessionStorage.removeItem("level")}function v(){(0,r.Aj)((0,r.v0)(),d)}},7844:(t,e,n)=>{n.d(e,{q:()=>f});var r=n(9295),o=n(4014);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={trigger:"manual",hideOnClick:!0,theme:"custom",allowHTML:!0,interactive:!0,interactiveDebounce:75,sticky:!0,plugins:[r.CA],onHide:function(t){$(t.reference).css("outline","none")},onShow:function(t){$(t.reference).css("outline","1px dashed #e39774")}},l="<button id='help1' class='help-next'>NEXT</button>",f=function(){$("#help").on("click",(function(){e[0].show()}));var t,e=(0,r.ZP)("#question",c({triggerTarget:(t=$("#help"),function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),content:"\n    <div>\n    <p>This is the Hiragana that you must memorize and answer</p>\n    ".concat(l,"\n    </div>"),onShown:function(t){$("#help1").on("click",(function(){n[0].show(),t.hide()}))}},u)),n=(0,r.ZP)("#answer-buttons",c({content:"\n    <div>\n    <p>These are the answer and only one of these are the right one.</p>\n    ".concat(l,"\n    </div>"),onShown:function(t){$("#help1").on("click",(function(){a[0].show(),t.hide()}))}},u)),a=(0,r.ZP)("#hamburger",c({content:"\n    <div>\n    <p>Click this button if you want to go to the level list page</p>\n    ".concat(l,"\n    </div>"),onShown:function(t){$("#help1").on("click",(function(){s[0].show(),t.hide()}))}},u)),s=(0,r.ZP)("#stats",c({content:"\n    <div>\n    <p>This will progress as you choose the right answer</p>\n    ".concat(l,"\n    </div>"),onShown:function(t){$("#help1").on("click",(function(){(0,o.Z)("example","example"),f[0].show(),t.hide()}))}},u)),f=(0,r.ZP)("#wrong-notif-container",c(c({content:"\n    <div>\n    <p>This will appear if you choose the wrong answer</p>\n    ".concat(l,"\n    </div>"),onShown:function(t){$("#help1").on("click",(function(){$("#next-level").show(),h[0].show(),t.hide(),$(t.reference).empty()}))}},u),{},{onHide:function(t){$(t.reference).empty(),$(t.reference).css("outline","none")}})),h=(0,r.ZP)("#next-level",c(c({content:"\n    <div>\n    <p>This will appear if your progress has exceeded 80%</p>\n    <button id='help1' class='help-next'>FINISH</button>\n    </div>",onShown:function(t){$("#help1").on("click",(function(){t.hide(),$(t.reference).empty()}))}},u),{},{onHide:function(t){$(t.reference).hide(),$(t.reference).css("outline","none")}}))}},8483:(t,e,n)=>{n.d(e,{e:()=>r});var r=function(t){return t.includes("checkpoint")&&(t=t.slice(7)),t.replace(/.{1}$/," $&").toUpperCase()}},4014:(t,e,n)=>{n.d(e,{Z:()=>o});var r=null;const o=function(t,e){$("#wrong-notif-container").html("\n    <div  id='wrong-notif'>\n      <p id='wrong-notif-header'>Your answer was not correct</p>\n      <p>The right answer for ".concat(t," is ").concat(e,"</p>\n    </div>\n  ")),$("#wrong-notif-container").css("transform","translateY(2rem)"),r&&(clearTimeout(r),r=null),r=setInterval((function(){$("#wrong-notif-container").css("transform","translateY(-120%)")}),8e3)}},6998:(t,e,n)=>{n.d(e,{E:()=>u});var r=n(3090),o=n(5888);const i=function(){$(".popup").hide(),$(".popup").remove()};function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(){c=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};u(y,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(E([])));g&&g!==e&&n.call(g,o)&&(y=g);var w=v.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,c,s){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==a(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=v,u(w,"constructor",v),u(v,"constructor",d),d.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),u(w,s,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function s(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}var u={render:function(t,e,n){var r=[];return"Add"===n&&(r='\n      <div class="wrapper">\n        <input type="radio" name="select" id="option-1" class=\'level3_checkpoint1\' checked>\n        <input type="radio" name="select" id="option-2" class=\'level6_checkpoint2\'>\n        <input type="radio" name="select" id="option-3" class=\'level9_checkpoint3\'>\n        <label for="option-1" class="option option-1">\n          <span>Checkpoint 1</span>\n        </label>\n        <label for="option-2" class="option option-2">\n          <span>Checkpoint 2</span>\n        </label>\n        <label for="option-3" class="option option-3">\n          <span>Checkpoint 3</span>\n        </label>\n      </div>\n      '),"\n      <section class='popup'>\n        <div class='popup-content'>\n          <h1 class='popup-title'>".concat(n," Quiz</h1>\n            <form class='popup-form'>\n              <label for='edit-question'>").concat(n," Question</label>\n              <input value='").concat(t,"' id='edit-question' class='popup-input' type='text' placeholder='Question'/>\n              <label for='edit-answer'>").concat(n," Answer</label>\n              <input value='").concat(e,"' id='edit-answer' class='popup-input' type='text' placeholder='Answer'/>\n              <button class='popup-button'>Save</button>\n            </form>\n          ").concat(r,"\n        </div>\n      </section>\n    ")},popupRender:function(t,e,n,a,u){var f;e&&(e=e.slice(8)),f=this.render(t,e,n),$("body").append(f),$(".popup").fadeIn(500,(function(){$(".popup").css({display:"grid"}),$(".popup-content").fadeIn(300),$(".popup-content").addClass("popup-content__active")})),$(".popup-button").on("click",function(){var t,e=(t=c().mark((function t(e){var s,f;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),s=$("#edit-question").val(),f=$("#edit-answer").val(),"Add"===n&&(a=$('input[type="radio"]:checked').attr("class"),u=l(a)),r.G.setCheckpoint(a,u,s,f),i(),$(".checkpoint-container").empty(),t.next=9,o.s.afterRender();case 9:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){s(i,r,o,a,c,"next",t)}function c(t){s(i,r,o,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}()),setTimeout((function(){$("#edit-question").focus()}),600),$(".popup").on("click",(function(t){$(t.target).is(".popup")&&i()}))}},l=function(t){return $("#".concat(t," .checkpoint-item")).length}},7125:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(2615),o=n(2897),i={perPage:3,cover:!0,type:"loop",height:"30rem",lazyLoad:"nearby",breakpoints:{height:"6rem"},autoScroll:{speed:2}};$("#mobile-indicator").is(":visible")&&(i.direction="ttb");const a=function(){new r.ZP(".splide",i).mount({AutoScroll:o.l})}},99:(t,e,n)=>{n.d(e,{W:()=>i});var r=n(9295),o=n(7120),i=function(){if(sessionStorage.getItem("user")){var t=JSON.parse(sessionStorage.getItem("user"));$("body").append("\n    <div class='username-container'>\n      <div class='username-content'>\n        <img src='".concat(t.photoURL,"' alt='user profile' class='username-image' referrerpolicy=\"no-referrer\"/>\n        <h1 class='username-title'>").concat(t.displayName,"</h1>\n      </div>\n    </div>\n  ")),(0,r.ZP)(".username-container",{interactive:!0,content:'<button id="logout-button">LOGOUT</button>',theme:"custom",allowHTML:!0,interactiveDebounce:75,sticky:!0,plugins:[r.CA],onShown:function(t){$(".tippy-content").on("click",(function(){(0,o.yk)()}))}})}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,t=[],r.O=(e,n,o,i)=>{if(!n){var a=1/0;for(l=0;l<t.length;l++){for(var[n,o,i]=t[l],c=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((t=>r.O[t](n[s])))?n.splice(s--,1):(c=!1,i<a&&(a=i));if(c){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,o,i]},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={80:0,100:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var o,i,[a,c,s]=n,u=0;if(a.some((e=>0!==t[e]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(s)var l=s(r)}for(e&&e(n);u<a.length;u++)i=a[u],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(l)},n=self.webpackChunkyomi=self.webpackChunkyomi||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var o=r.O(void 0,[691,61,978,188,288,42,590,96,570,615,295,100,289,936],(()=>r(5253)));o=r.O(o)})();