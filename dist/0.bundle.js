/*! For license information please see 0.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkyomi=self.webpackChunkyomi||[]).push([[0],{897:(t,e,n)=>{function r(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e,n){return Array.prototype.slice.call(t,e,n)}function u(t){return t.bind.apply(t,[null].concat(a(arguments,1)))}function c(t){return requestAnimationFrame(t)}function f(t,e){return i(e)===t}n.d(e,{l:()=>T});var s=Array.isArray;function l(t){return s(t)?t:[t]}function p(t,e){l(t).forEach(e)}u(f,"function"),u(f,"string"),u(f,"undefined");var d=Object.keys;function v(t,e,n){if(t){var r=d(t);r=n?r.reverse():r;for(var o=0;o<r.length;o++){var i=r[o];if("__proto__"!==i&&!1===e(t[i],i))break}}return t}var h=Math.min,y="move",m="moved",g="drag",b="scroll",w="scrolled";function E(t,e,n){return Array.prototype.slice.call(t,e,n)}function L(t){return t.bind.apply(t,[null].concat(r(E(arguments,1))))}function S(t,e){return i(e)===t}function x(t){return!D(t)&&S("object",t)}var O=Array.isArray;L(S,"function"),L(S,"string");var j=L(S,"undefined");function D(t){return null===t}function I(t,e){var n;(n=t,O(n)?n:[n]).forEach(e)}var k=Object.keys;function P(t,e,n){if(t){var r=k(t);r=n?r.reverse():r;for(var o=0;o<r.length;o++){var i=r[o];if("__proto__"!==i&&!1===e(t[i],i))break}}return t}function A(t){return E(arguments,1).forEach((function(e){P(e,(function(n,r){t[r]=e[r]}))})),t}function _(t,e,n){x(e)?P(e,(function(e,n){_(t,n,e)})):I(t,(function(t){D(n)||""===n?function(t,e){I(t,(function(t){I(e,(function(e){t&&t.removeAttribute(e)}))}))}(t,e):t.setAttribute(e,String(n))}))}var B=Math.min,M=Math.max;Math.floor,Math.ceil,Math.abs;var C={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},N={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function T(t,e,n){var r,o,i,f,d,E,L=function(t){var e=t?t.event.bus:document.createDocumentFragment(),n=function(){var t=[];function e(t,e,n){p(t,(function(t){t&&p(e,(function(e){e.split(" ").forEach((function(e){var r=e.split(".");n(t,r[0],r[1])}))}))}))}return{bind:function(n,r,o,i){e(n,r,(function(e,n,r){var a="addEventListener"in e,u=a?e.removeEventListener.bind(e,n,o,i):e.removeListener.bind(e,o);a?e.addEventListener(n,o,i):e.addListener(o),t.push([e,n,r,o,u])}))},unbind:function(n,r,o){e(n,r,(function(e,n,r){t=t.filter((function(t){return!!(t[0]!==e||t[1]!==n||t[2]!==r||o&&t[3]!==o)||(t[4](),!1)}))}))},dispatch:function(t,e,n){var r;return"function"==typeof CustomEvent?r=new CustomEvent(e,{bubbles:!0,detail:n}):(r=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!1,n),t.dispatchEvent(r),r},destroy:function(){t.forEach((function(t){t[4]()})),t.length=0}}}();return t&&t.event.on("destroy",n.destroy),function(t){return a(arguments,1).forEach((function(e){v(e,(function(n,r){t[r]=e[r]}))})),t}(n,{bus:e,on:function(t,r){n.bind(e,l(t).join(" "),(function(t){r.apply(r,s(t.detail)?t.detail:[])}))},off:u(n.unbind,e),emit:function(t){n.dispatch(e,t,a(arguments,1))}})}(t),S=L.on,O=L.off,D=L.bind,k=L.unbind,P=e.Move,T=P.translate,F=P.getPosition,G=P.toIndex,W=P.getLimit,K=P.exceededLimit,q=e.Controller,H=q.setIndex,V=q.getIndex,Y=e.Direction.orient,$=e.Elements.toggle,R=e.Live,U=t.root,X={};function z(){t.is("fade")||r||!1===n.autoScroll||(r=function(t,e,n,r){var o,i,a=Date.now,u=0,f=!0;function s(){if(!f){if((u=t?h((a()-o)/t,1):1)>=1&&(e(),o=a(),r))return l();c(s)}}function l(){f=!0}function p(){i&&cancelAnimationFrame(i),u=0,i=0,f=!0}return{start:function(e){!e&&p(),o=a()-(e?u*t:0),f=!1,c(s)},rewind:function(){o=a(),u=0},pause:l,cancel:p,set:function(e){t=e},isPaused:function(){return f}}}(0,nt),X.pauseOnHover&&D(U,"mouseenter mouseleave",(function(t){i="mouseenter"===t.type,et()})),X.pauseOnFocus&&D(U,"focusin focusout",(function(t){f="focusin"===t.type,et()})),X.useToggleButton&&D($,"click",(function(){o?Z():tt()})),S("updated",Q),S([y,g,b],(function(){d=!0,tt(!1)})),S([m,w],(function(){d=!1,et()})),X.autoStart&&("complete"===document.readyState?Z():D(window,"load",Z)))}function J(){r&&(r.cancel(),r=null,E=void 0,O([y,g,b,m,w]),k(U,"mouseenter mouseleave focusin focusout"),k($,"click"))}function Q(){var t=n.autoScroll;!1!==t?(X=A({},X,x(t)?t:{}),z()):J(),r&&!j(E)&&T(E)}function Z(){ot()&&(r.start(!0),R.disable(!0),f=i=o=!1,rt())}function tt(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];o||(o=t,rt(),ot()||(r.pause(),R.disable(!1)))}function et(){o||(i||f||d?tt(!1):Z())}function nt(){var n=F(),r=function(e){var n,r,o,i,a,u=X.speed||1;return e+=Y(u),t.is("slide")&&(n=e,r=W(!1),o=W(!0),i=B(r,o),a=M(r,o),e=B(M(i,n),a)),e}(n);n!==r?(T(r,0!==V()||!K(!0)),function(n){var r=t.length,o=(G(n)+r)%r;o!==V()&&(H(o),e.Slides.update(),e.Pagination.update())}(E=F())):(tt(!1),X.rewind&&t.go(0))}function rt(){if($){var t=o?"startScroll":"pauseScroll";"is-active",r=!o,(e=$)&&I("is-active",(function(t){t&&e.classList[r?"add":"remove"](t)})),_($,"aria-label",n.i18n[t]||N[t])}var e,r}function ot(){return!r||r.isPaused()}return{setup:function(){var t=n.autoScroll;X=A({},C,x(t)?t:{})},mount:z,destroy:J,play:Z,pause:tt,isPaused:ot}}},42:(t,e,n)=>{var r,o;n.d(e,{X3:()=>w});var i=new WeakMap,a=new WeakMap,u=new WeakMap,c=new WeakMap,f=new WeakMap,s={get:function(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return a.get(t);if("objectStoreNames"===e)return t.objectStoreNames||u.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(t[e])},set:function(t,e,n){return t[e]=n,!0},has:function(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function l(t){return"function"==typeof t?(e=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(d(this),n),p(i.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return p(e.apply(d(this),n))}:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var i=e.call.apply(e,[d(this),t].concat(r));return u.set(i,t.sort?t.sort():[t]),p(i)}:(t instanceof IDBTransaction&&function(t){if(!a.has(t)){var e=new Promise((function(e,n){var r=function(){t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=function(){e(),r()},i=function(){n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)}));a.set(t,e)}}(t),n=t,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(t){return n instanceof t}))?new Proxy(t,s):t);var e,n}function p(t){if(t instanceof IDBRequest)return e=t,(n=new Promise((function(t,n){var r=function(){e.removeEventListener("success",o),e.removeEventListener("error",i)},o=function(){t(p(e.result)),r()},i=function(){n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}))).then((function(t){t instanceof IDBCursor&&i.set(t,e)})).catch((function(){})),f.set(n,e),n;var e,n;if(c.has(t))return c.get(t);var r=l(t);return r!==t&&(c.set(t,r),f.set(r,t)),r}var d=function(t){return f.get(t)};function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(){g=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=L(a,n);if(u){if(u===s)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var s={};function l(){}function p(){}function d(){}var h={};u(h,o,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(j([])));m&&m!==e&&n.call(m,o)&&(h=m);var b=d.prototype=l.prototype=Object.create(h);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==v(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:D}}function D(){return{value:void 0,done:!0}}return p.prototype=d,u(b,"constructor",d),u(d,"constructor",p),p.displayName=u(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,a,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),u(b,a,"Generator"),u(b,o,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}function b(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function w(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,o=n.upgrade,i=n.blocking,a=n.terminated,u=indexedDB.open(t,e),c=p(u);return o&&u.addEventListener("upgradeneeded",(function(t){o(p(u.result),t.oldVersion,t.newVersion,p(u.transaction))})),r&&u.addEventListener("blocked",(function(){return r()})),c.then((function(t){a&&t.addEventListener("close",(function(){return a()})),i&&t.addEventListener("versionchange",(function(){return i()}))})).catch((function(){})),c}var E,L=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],x=new Map;function O(t,e){if(t instanceof IDBDatabase&&!(e in t)&&"string"==typeof e){if(x.get(e))return x.get(e);var n=e.replace(/FromIndex$/,""),r=e!==n,o=S.includes(n);if(n in(r?IDBIndex:IDBObjectStore).prototype&&(o||L.includes(n))){var i=function(){var t,e=(t=g().mark((function t(e){var i,a,u,c,f,s,l=arguments;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=this.transaction(e,o?"readwrite":"readonly"),u=a.store,c=l.length,f=new Array(c>1?c-1:0),s=1;s<c;s++)f[s-1]=l[s];return r&&(u=u.index(f.shift())),t.next=6,Promise.all([(i=u)[n].apply(i,f),o&&a.done]);case 6:return t.abrupt("return",t.sent[0]);case 7:case"end":return t.stop()}}),t,this)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){b(i,r,o,a,u,"next",t)}function u(t){b(i,r,o,a,u,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}();return x.set(e,i),i}}}s=y(y({},E=s),{},{get:function(t,e,n){return O(t,e)||E.get(t,e,n)},has:function(t,e){return!!O(t,e)||E.has(t,e)}})}}]);