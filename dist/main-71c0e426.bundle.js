/*! For license information please see main-71c0e426.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkyomi=self.webpackChunkyomi||[]).push([[936],{5253:(t,e,n)=>{var r=n(3954),o=(n(9887),n(7120)),i=n(3886);$((function(){$(window).on("hashchange",(function(){(0,r.Z)(),(0,o.Zm)()})),(0,i.Q)(),(0,r.Z)(),(0,o.Zm)()}))},5888:(t,e,n)=>{n.d(e,{s:()=>s});var r=n(3090),o=n(6998);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new _(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=h(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function d(){}function p(){}function v(){}var y={};u(y,o,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(S([])));m&&m!==e&&n.call(m,o)&&(y=m);var w=v.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,c,s){var u=h(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==i(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=h(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=v,u(w,"constructor",v),u(v,"constructor",p),p.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(L.prototype),u(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),u(w,s,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function c(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}var s={render:function(){return $((function(){$("#dashboard-link").remove()})),"\n    <section id='dashboard-container'>\n      <div id='dashboard-header'>\n        <h1>DASHBOARD</h1>\n        <input id='dashboard-search' type='text' placeholder='Search'/>\n      </div>\n      <div class='checkpoint-container'>\n      </div>\n      <button id='add-button' class='bottom-right'>&#65291;</button>\n    </section>\n    "},afterRender:function(){return(t=a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.G.getLevelList();case 2:e=t.sent,u(e).forEach((function(t){$(".checkpoint-container").append("\n        <div class='checkpoint-header'>\n          <h2>CHECKPOINT ".concat(t.slice(-1),"</h2>\n        </div>\n        <div class='checkpoint-list' id='").concat(t,"'></div>\n      ")),e[t].forEach((function(e){$("#".concat(t)).append("\n          <div class='checkpoint-item'>\n            <h3>Quiz Question</h3>\n            <h2>".concat(e.question,"</h2>\n            <h4>Answer: ").concat(e.answer,"</h4>\n            <div class='checkpoint-item-buttons'>\n              <button class='checkpoint-item-button edit-button'>Edit</button>\n              <button class='checkpoint-item-button delete-button'>Delete</button>\n            </div>\n          </div>\n          "))}))})),$("#dashboard-search").on("input",(function(t){var e=t.target.value.toLowerCase();$(".checkpoint-item").each((function(t,n){$(n).find("h2").text().toLowerCase().includes(e)?$(n).show():$(n).hide()}))})),$(".edit-button").on("click",(function(t){var e=h(t),n=f(t),r=$(t.target).parent().parent().find("h4").text(),i=l(e,n);o.E.popupRender(n,r,"Edit",e,i)})),$(".delete-button").on("click",(function(t){var e=h(t),n=f(t),o=l(e,n);r.G.deleteCheckpoint(e,o),location.reload()})),$("#add-button").on("click",(function(){o.E.popupRender("","","Add","")}));case 9:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,s,"next",t)}function s(t){c(i,r,o,a,s,"throw",t)}a(void 0)}))})();var t}},u=function(t){return Object.keys(t).filter((function(t){return t.includes("checkpoint")}))},l=function(t,e){var n;return $("#".concat(t," .checkpoint-item")).each((function(t,r){$(r).find("h2").text()===e&&(n=t)})),n},h=function(t){return $(t.target).closest(".checkpoint-list").attr("id")},f=function(t){return $(t.target).closest(".checkpoint-item").find("h2").text()}},7783:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(7120);const o={render:function(){return"\n    <div class=\"home\">\n      <section class='hero'>\n        <h1>YOMI</h1>\n        <h2>Memorize Hiragana The Easy Way</h2>\n        <p>\n        There's no better time than now to begin studying this important Japanese writing system. Learning the Hiragana is the first step on the road to fluency, and you can do it in a few easy steps. You can easily master the Japanese alphabet and it only takes a few minutes each day. This website will give you a well-designed lesson plan that will allow you to master the Hiragana in no time! <span>And login if you want to sync your progress for all your devices.</span>\n        </p>\n        <div class='hero-buttons'>\n          <a href='#/level-list' id='start-button'>START</a>\n          <button id='login-button'>LOGIN</button>\n        </div>\n      </section>\n      <section class='reason'>\n        <h3>Why Learn Japanese?</h3>\n        <div class='reason-detail'>\n          <div class='nihongo'>\n            <h4>日本語</h4>\n          </div>\n          <div class='reason-detail__right'>\n            <p>\n              Have you ever see the news about new advancement of technology and economic development? and we frequently see Japan as the country that is in it. It would be a great opporturnity to participate in that. But, Japan is one of country that is kind of closed to the outside world. In fact that English proficiency is not that high in Japan because the people won't even bother to learn one. Hearing that, the only thing that we can do is to learn Japanese. But you know that's not the main reason people learn Japanese. The main reason is...\n            </p>\n            <section class=\"splide\" aria-label=\"Splide Basic HTML Example\">\n              <div class=\"splide__track\">\n                <ul class=\"splide__list\">\n                  <li class=\"splide__slide\">\n                    <img src=\"./images/manga/ajin.jpg\" alt=\"Ajin manga slide\">\n                  </li>\n                  <li class=\"splide__slide\">\n                    <img src=\"./images/manga/glt.jpg\" alt=\"Ajin manga slide\">\n                  </li>\n                  <li class=\"splide__slide\">\n                    <img src=\"./images/manga/berserk.jpg\" alt=\"Ajin manga slide\">\n                  </li>\n                  <li class=\"splide__slide\">\n                  <img src=\"./images/manga/jojo.jpg\" alt=\"Ajin manga slide\">\n                </li>\n                <li class=\"splide__slide\">\n                  <img src=\"./images/manga/yotsuba.jpg\" alt=\"Ajin manga slide\">\n                </li>\n                <li class=\"splide__slide\">\n                  <img src=\"./images/manga/vagabond.jpg\" alt=\"Ajin manga slide\">\n                </li>\n                </ul>\n              </div>\n            </section>\n          </div>\n        </div>\n      </section>\n      <section class='hiragana'>\n        <h3>HIRAGANA /// 平仮名 /// ひらがな</h3>\n        <p>\n          Why do we learn hiragana first if you want to be proficient in Japanese? The answer to that is because it's the first writing system that Japanese kids learn. And because of that, a lot of books for kids is written in hiragana. Hiragana is consist of 46 characters.\n          Although one could theoretically write an entire language in hiragana, it is usually only used for the grammatical endings of verbs, nouns, and adjectives, as well as for particles, and some other native Japanese words.\n        </p>\n        <div class='thin-underline'></div>\n      </section>\n      <section id='about-me'>\n        <h3>About Me</h3>\n        <div class='about-me-detail'>\n          <div class='about-me-detail__left'>\n            <h2>Creator details</h2>\n            <p>\n              I'm a web engineer who is passionate about learning new things. I'm currently studying Information System at the Gunadarma University. I'm also a fan of Japanese culture and still trying to learn the language.\n            </p>\n          </div>\n          <div class='about-me-detail__right'>\n            <h2>Contact me</h2>\n            <p>\n              You can contact me through the following links:\n            </p>\n            <div class='contact-me'>\n              <a href='mailto:ddefrito84@gmail.com' id='email'>\n                <img src='./images/icons/email.svg' alt='email logo' height='20px'>\n                Email\n              </a>\n              <a href='https://www.linkedin.com/in/dhafad/' id='linkedin'>\n                <img src='./images/icons/linkedin.svg' alt='linkedin logo' height='20px'>\n                LinkedIn\n              </a>\n              <a href='https://github.com/ASTRSM' id='github'>\n                <img src='./images/icons/github.svg' alt='github logo' height='20px'>                \n                Github\n              </a>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n    "},afterRender:function(){sessionStorage.getItem("user")?$("#login-button").hide():$("#login-button").show(),$("#login-button").on("click",(function(){(0,r.Cq)()}))}}},5304:(t,e,n)=>{n.d(e,{Z:()=>d});var r=n(3090),o=n(8483);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new _(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=h(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function d(){}function p(){}function v(){}var y={};u(y,o,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(S([])));m&&m!==e&&n.call(m,o)&&(y=m);var w=v.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,c,s){var u=h(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==i(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=h(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=v,u(w,"constructor",v),u(v,"constructor",p),p.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(L.prototype),u(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),u(w,s,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function c(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}var s={render:function(){return window.document.title="YOMI | LEVEL LIST","\n      <section id='level-list_container'>\n        <h2>LEVEL LIST</h2>\n        <div id='level-list'>\n          <div class='middle-line'></div>\n        </div>\n      </section>\n    "},afterRender:function(){return(t=a().mark((function t(){var e,n,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return $("body, html, main").removeClass("level-custom"),$("header").css("position","relative"),t.next=4,r.G.getLevelList();case 4:e=t.sent,n=1,i=f(),Object.keys(e).forEach((function(t){var r="\n      <div class='level-container'>\n        <div class='detail ".concat(l(n),"'>\n          <div class='detail-line'></div>\n          <div class='detail-text'>").concat(e[t][0].question,"</div>\n        </div>\n        <a href='#/level/").concat(t,"' id='").concat(t,"' class='level-item ").concat(h(t)," ").concat(u(i,n),"''>").concat((0,o.e)(t),"</a>\n      </div>\n      ");n++,$("#level-list").append(r)}));case 8:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,s,"next",t)}function s(t){c(i,r,o,a,s,"throw",t)}a(void 0)}))})();var t}},u=function(t,e){if(e>t)return"disable"},l=function(t){return t%2==0?"detail-left":"detail-right"},h=function(t){return t.includes("checkpoint")?"checkpoint":"level"},f=function(){return sessionStorage.getItem("level")?JSON.parse(sessionStorage.getItem("level")).highestLevelUnlocked:JSON.parse(localStorage.getItem("level")).highestLevelUnlocked};const d=s},9161:(t,e,n)=>{n.d(e,{Z:()=>G});var r=n(3090),o=n(3497),i=n(8508),a=n(7844),c=n(8483),s=n(4014);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(){l=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new _(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=h(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function d(){}function p(){}function v(){}var y={};c(y,o,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(S([])));m&&m!==e&&n.call(m,o)&&(y=m);var w=v.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var s=h(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==u(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=h(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=v,c(w,"constructor",v),c(v,"constructor",p),p.displayName=c(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(L.prototype),c(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),c(w,a,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function h(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}var f=null,d=null,p=null,v=null,y=null,g={render:function(){return'\n    <div id=\'level-container\'>\n      <section class="quiz">\n          <h3 id="question"></h3>\n          <section id="answer-buttons"></section>\n      </section>\n      <section id=\'wrong-notif-container\'></section>\n      <section class="score-container">\n          <h3>Progress Above 80% Continue</h3>\n          <div id="stats">\n              <div id="progress">\n              </div>\n          </div>\n      </section>\n      <section id="hamburger">\n        <a href="#/level-list" aria-label="hamburger">☰ LEVEL LIST</a>\n        <div id=\'next-level-container\'>\n          <button id=\'next-level\'>\n            <P>NEXT LEVEL</P>\n            <img src="./images/icons/arrow.svg" alt="next level">\n          </button>\n        </div>\n      </section>\n      <section id=\'help\'>?</section>\n    </div>\n    '},afterRender:function(){$("body, html, main").addClass("level-custom"),$("header").css("position","absolute");var t=i.Z.parseActiveUrlWithoutCombiner();m(t.id),O(t.id),$("#next-level").hide(),(0,a.q)(),N()}},m=function(){var t,e=(t=l().mark((function t(e){var n,o,i,a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.G.getLevelList();case 2:n=t.sent,y=n[e],o=S(n,e)[0],i=S(n,e)[1],a=w(),b(a),$("#answer-buttons").each((function(){$(this).on("click",(function(t){var e=t.target.id;L(a,e,o,i),a=w(),b(a)}))}));case 9:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){h(i,r,o,a,c,"next",t)}function c(t){h(i,r,o,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}(),w=function(){return E(v,y.length)},b=function(t){v=t,function(t){if($("#question").html(y[t].question),$("#question").css("font-size","7rem"),$("#mobile-indicator").is(":visible")){var e=y[t].question.length;e>2&&$("#question").css("font-size","".concat(9.5-e,"rem"))}}(t),function(t){$("#answer-buttons").html("");for(var e=[],n=y.filter((function(e){return e.answer!==y[t].answer})),r=0;r<3;r++){var o=E(p,n.length);p=o;var i=n[o];e.push(i),n.splice(o,1),2===r&&e.push(y[t])}for(var a=function(t){for(var e,n=t.length;0!==n;){e=k(n),n--;var r=[t[e],t[n]];t[n]=r[0],t[e]=r[1]}return t}(e),c=0;c<a.length;c++){var s='<button id="'.concat(a[c].answer,'">').concat(a[c].answer,"</button>");$("#answer-buttons").append(s)}}(t)};function L(t,e,n,r){d++,y[t].answer===e?(f++,$("#wrong-notif-container").html("").css("transform","translateY(-100%)"),x(f,d,n,r)):((0,s.Z)(y[t].question,y[t].answer),x(f,d,n,r))}var x=function(t,e,n,r){if(e>y.length){var o=Math.round(t/e*100);_(o,n,r),$("#progress").css("width","".concat(o,"%"))}};function E(t,e){var n=k(e);return n===t&&(n>=e-1?n--:n++),n}function k(t){return Math.floor(Math.random()*t)}var _=function(t,e,n){t>=80?$("#next-level").show():$("#next-level").hide(),$("#next-level").on("click",(function(){j(),I(n),window.location.href="#/level/".concat(e)}))},S=function(t,e){var n=e,r=Object.keys(t).map((function(t){return t})),o=r[r.indexOf(n)+1];return[o,r.indexOf(o)+1]},O=function(t){var e=(0,c.e)(t);window.document.title="YOMI | ".concat(e)},j=function(){f=null,d=null,p=null,v=null},I=function(t){if(sessionStorage.getItem("user")){var e=JSON.parse(sessionStorage.getItem("level")).highestLevelUnlocked,n=JSON.parse(sessionStorage.getItem("user")).uid;if(t>e){var r={highestLevelUnlocked:e=t};return JSON.parse(sessionStorage.getItem("admin"))&&(r.admin=!0),console.log(r),o.Z.setUserById(n,r),void sessionStorage.setItem("level",JSON.stringify(e))}}else{var i=JSON.parse(localStorage.getItem("level"));t>i.highestLevelUnlocked&&(i.highestLevelUnlocked=t,localStorage.setItem("level",JSON.stringify(i)))}},N=function(){$((function(){$(".username-container").hide()}))};const G=g}}]);