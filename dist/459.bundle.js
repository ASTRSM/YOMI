/*! For license information please see 459.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkyomi=self.webpackChunkyomi||[]).push([[459],{397:(t,e,n)=>{n.d(e,{U2:()=>r.U2});var r=n(188)},933:(t,e,n)=>{n.d(e,{H0:()=>g,wA:()=>p});var r=n(288);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),a=new O(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return{value:void 0,done:!0}}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function v(){}function d(){}function p(){}var y={};l(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==e&&n.call(g,a)&&(y=g);var w=p.prototype=v.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function r(o,a,s,c){var l=h(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==i(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=h(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=p,l(w,"constructor",p),l(p,"constructor",d),d.displayName=l(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(I.prototype),l(I.prototype,s,(function(){return this})),t.AsyncIterator=I,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new I(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function a(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(t){s=!0,i=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=u(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function u(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e&&v(t.prototype,e),n&&v(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var p=function(){function t(e,n,r){f(this,t),this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return d(t,[{key:"setInstantiationMode",value:function(t){return this.instantiationMode=t,this}},{key:"setMultipleInstances",value:function(t){return this.multipleInstances=t,this}},{key:"setServiceProps",value:function(t){return this.serviceProps=t,this}},{key:"setInstanceCreatedCallback",value:function(t){return this.onInstanceCreated=t,this}}]),t}(),y="[DEFAULT]",m=function(){function t(e,n){f(this,t),this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}var e,n;return d(t,[{key:"get",value:function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new r.BH;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:e});i&&n.resolve(i)}catch(t){}}return this.instancesDeferred.get(e).promise}},{key:"getImmediate",value:function(t){var e,n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}(t))try{this.getOrInitializeService({instanceIdentifier:y})}catch(t){}var e,n=l(this.instancesDeferred.entries());try{for(n.s();!(e=n.n()).done;){var r=c(e.value,2),i=r[0],o=r[1],a=this.normalizeInstanceIdentifier(i);try{var s=this.getOrInitializeService({instanceIdentifier:a});o.resolve(s)}catch(t){}}}catch(t){n.e(t)}finally{n.f()}}}},{key:"clearInstance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}},{key:"delete",value:(e=o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Array.from(this.instances.values()),t.next=3,Promise.all([].concat(a(e.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()}))),a(e.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))));case 3:case"end":return t.stop()}}),t,this)})),n=function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(t){s(o,r,i,a,c,"next",t)}function c(t){s(o,r,i,a,c,"throw",t)}a(void 0)}))},function(){return n.apply(this,arguments)})},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return this.instances.has(t)}},{key:"getOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return this.instancesOptions.get(t)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.options,n=void 0===e?{}:e,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error("".concat(this.name,"(").concat(r,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var i,o=this.getOrInitializeService({instanceIdentifier:r,options:n}),a=l(this.instancesDeferred.entries());try{for(a.s();!(i=a.n()).done;){var s=c(i.value,2),u=s[0],h=s[1],f=this.normalizeInstanceIdentifier(u);r===f&&h.resolve(o)}}catch(t){a.e(t)}finally{a.f()}return o}},{key:"onInit",value:function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&t(o,r),function(){i.delete(t)}}},{key:"invokeOnInitCallbacks",value:function(t,e){var n=this.onInitCallbacks.get(e);if(n){var r,i=l(n);try{for(i.s();!(r=i.n()).done;){var o=r.value;try{o(t,e)}catch(t){}}}catch(t){i.e(t)}finally{i.f()}}}},{key:"getOrInitializeService",value:function(t){var e,n=t.instanceIdentifier,r=t.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,e===y?void 0:e),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(t){}return o||null}},{key:"normalizeInstanceIdentifier",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return this.component?this.component.multipleInstances?t:y:t}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}(),g=function(){function t(e){f(this,t),this.name=e,this.providers=new Map}return d(t,[{key:"addComponent",value:function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component ".concat(t.name," has already been registered with ").concat(this.name));e.setComponent(t)}},{key:"addOrOverwriteComponent",value:function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}},{key:"getProvider",value:function(t){if(this.providers.has(t))return this.providers.get(t);var e=new m(t,this);return this.providers.set(t,e),e}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}()},764:(t,e,n)=>{var r;function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Yd:()=>f,in:()=>a});var a,s=[];!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(a||(a={}));var c={debug:a.DEBUG,verbose:a.VERBOSE,info:a.INFO,warn:a.WARN,error:a.ERROR,silent:a.SILENT},l=a.INFO,u=(o(r={},a.DEBUG,"log"),o(r,a.VERBOSE,"log"),o(r,a.INFO,"info"),o(r,a.WARN,"warn"),o(r,a.ERROR,"error"),r),h=function(t,e){if(!(e<t.logLevel)){var n=(new Date).toISOString(),r=u[e];if(!r)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(e,")"));for(var i,o=arguments.length,a=new Array(o>2?o-2:0),s=2;s<o;s++)a[s-2]=arguments[s];(i=console)[r].apply(i,["[".concat(n,"]  ").concat(t.name,":")].concat(a))}},f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this._logLevel=l,this._logHandler=h,this._userLogHandler=null,s.push(this)}var e,n;return e=t,n=[{key:"logLevel",get:function(){return this._logLevel},set:function(t){if(!(t in a))throw new TypeError('Invalid value "'.concat(t,'" assigned to `logLevel`'));this._logLevel=t}},{key:"setLogLevel",value:function(t){this._logLevel="string"==typeof t?c[t]:t}},{key:"logHandler",get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t}},{key:"debug",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,a.DEBUG].concat(e)),this._logHandler.apply(this,[this,a.DEBUG].concat(e))}},{key:"log",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,a.VERBOSE].concat(e)),this._logHandler.apply(this,[this,a.VERBOSE].concat(e))}},{key:"info",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,a.INFO].concat(e)),this._logHandler.apply(this,[this,a.INFO].concat(e))}},{key:"warn",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,a.WARN].concat(e)),this._logHandler.apply(this,[this,a.WARN].concat(e))}},{key:"error",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,a.ERROR].concat(e)),this._logHandler.apply(this,[this,a.ERROR].concat(e))}}],n&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()}}]);