/*! For license information please see main-e0c2779b.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkyomi=self.webpackChunkyomi||[]).push([[267],{309:(t,n,e)=>{e.d(n,{db:()=>a});var i=e(691),r=e(397),o=(0,i.ZF)({apiKey:"AIzaSyBDV4uWTK7Tb4EdULhU2VHcv49DaS_8jIw",authDomain:"yomi-f9728.firebaseapp.com",databaseURL:"https://yomi-f9728-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"yomi-f9728",storageBucket:"yomi-f9728.appspot.com",messagingSenderId:"641679206365",appId:"1:641679206365:web:9a66862a5a1062cf373834",measurementId:"G-E3NR6FDJ72"}),a=(0,r.N8)(o)},253:(t,n,e)=>{var i=e(954);$((function(){$(window).on("hashchange",(function(){(0,i.Z)()})),(0,i.Z)()}))},888:(t,n,e)=>{e.d(n,{s:()=>c});var i=e(90),r=e(998);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(){a=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function u(t,n,e,i){var r=n&&n.prototype instanceof f?n:f,o=Object.create(r.prototype),a=new E(i||[]);return o._invoke=function(t,n,e){var i="suspendedStart";return function(r,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw o;return{value:void 0,done:!0}}for(e.method=r,e.arg=o;;){var a=e.delegate;if(a){var s=L(a,e);if(s){if(s===d)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===i)throw i="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);i="executing";var c=h(t,n,e);if("normal"===c.type){if(i=e.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(i="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),o}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function f(){}function p(){}function g(){}var v={};l(v,r,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(j([])));y&&y!==n&&e.call(y,r)&&(v=y);var b=g.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function k(t,n){function i(r,a,s,c){var l=h(t[r],t,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==o(d)&&e.call(d,"__await")?n.resolve(d.__await).then((function(t){i("next",t,s,c)}),(function(t){i("throw",t,s,c)})):n.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return i("throw",t,s,c)}))}c(l.arg)}var r;this._invoke=function(t,e){function o(){return new n((function(n,r){i(t,e,n,r)}))}return r=r?r.then(o,o):o()}}function L(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,L(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=h(e,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var r=i.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function x(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function _(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var n=t[r];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){for(;++i<t.length;)if(e.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=g,l(b,"constructor",g),l(g,"constructor",p),p.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(k.prototype),l(k.prototype,s,(function(){return this})),t.AsyncIterator=k,t.async=function(n,e,i,r,o){void 0===o&&(o=Promise);var a=new k(u(n,e,i,r),o);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,c,"Generator"),l(b,r,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var i=n.pop();if(i in t)return e.value=i,e.done=!1,e}return e.done=!0,e}},t.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(e,i){return a.type="throw",a.arg=t,n.next=e,i&&(n.method="next",n.arg=void 0),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=e.call(o,"catchLoc"),c=e.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,n){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&e.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var i=e.completion;if("throw"===i.type){var r=i.arg;_(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:j(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},t}function s(t,n,e,i,r,o,a){try{var s=t[o](a),c=s.value}catch(t){return void e(t)}s.done?n(c):Promise.resolve(c).then(i,r)}var c={render:function(){return $("#dashboard-link").remove(),"\n    <section id='dashboard-container'>\n      <div id='dashboard-header'>\n        <h1>DASHBOARD</h1>\n        <input id='dashboard-search' type='text' placeholder='Search'/>\n      </div>\n      <div class='checkpoint-container'>\n      </div>\n      <button id='add-button' class='bottom-right'>&#65291;</button>\n    </section>\n    "},afterRender:function(){return(t=a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.G.getLevelList();case 2:n=t.sent,l(n).forEach((function(t){$(".checkpoint-container").append("\n        <div class='checkpoint-header'>\n          <h2>CHECKPOINT ".concat(t.slice(-1),"</h2>\n        </div>\n        <div class='checkpoint-list' id='").concat(t,"'></div>\n      ")),n[t].forEach((function(n){$("#".concat(t)).append("\n          <div class='checkpoint-item'>\n            <h3>Quiz Question</h3>\n            <h2>".concat(n.question,"</h2>\n            <h4>Answer: ").concat(n.answer,"</h4>\n            <div class='checkpoint-item-buttons'>\n              <button class='checkpoint-item-button edit-button'>Edit</button>\n              <button class='checkpoint-item-button delete-button'>Delete</button>\n            </div>\n          </div>\n          "))}))})),$("#dashboard-search").on("input",(function(t){var n=t.target.value.toLowerCase();$(".checkpoint-item").each((function(t,e){$(e).find("h2").text().toLowerCase().includes(n)?$(e).show():$(e).hide()}))})),$(".edit-button").on("click",(function(t){var n=h(t),e=d(t),i=$(t.target).parent().parent().find("h4").text(),o=u(n,e);r.E.popupRender(e,i,"Edit",n,o)})),$(".delete-button").on("click",(function(t){var n=h(t),e=d(t),r=u(n,e);i.G.deleteCheckpoint(n,r),location.reload()})),$("#add-button").on("click",(function(){r.E.popupRender("","","Add","")}));case 9:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(i,r){var o=t.apply(n,e);function a(t){s(o,i,r,a,c,"next",t)}function c(t){s(o,i,r,a,c,"throw",t)}a(void 0)}))})();var t}},l=function(t){return Object.keys(t).filter((function(t){return t.includes("checkpoint")}))},u=function(t,n){var e;return $("#".concat(t," .checkpoint-item")).each((function(t,i){$(i).find("h2").text()===n&&(e=t)})),e},h=function(t){return $(t.target).closest(".checkpoint-list").attr("id")},d=function(t){return $(t.target).closest(".checkpoint-item").find("h2").text()}},783:(t,n,e)=>{e.d(n,{Z:()=>i});const i={render:function(){return"\n    <div class=\"home\">\n      <section class='hero'>\n        <h1>YOMI</h1>\n        <h2>Memorize Hiragana The Easy Way</h2>\n        <p>\n        There's no better time than now to begin studying this important Japanese writing system. Learning the Hiragana is the first step on the road to fluency, and you can do it in a few easy steps. You can easily master the Japanese alphabet and it only takes a few minutes each day. This website will give you a well-designed lesson plan that will allow you to master the Hiragana in no time!\n        </p>\n        <div class='hero-buttons'>\n          <a href='#/level-list' id='start-button'>START</a>\n          <a href='#/level-list' id='login-button'>LOGIN</a>\n        </div>\n      </section>\n      <section class='reason'>\n        <h3>Why Learn Japanese?</h3>\n        <div class='reason-detail'>\n          <div class='nihongo'>\n            <h4>日本語</h4>\n          </div>\n          <div class='reason-detail__right'>\n            <p>\n              Have you ever see the news about new advancement of technology and economic development? and we frequently see Japan as the country that is in it. It would be a great opporturnity to participate in that. But, Japan is one of country that is kind of closed to the outside world. In fact that English proficiency is not that high in Japan because the people won't even bother to learn one. Hearing that, the only thing that we can do is to learn Japanese. But you know that's not the main reason people learn Japanese. The main reason is...\n            </p>\n            <section class=\"splide\" aria-label=\"Splide Basic HTML Example\">\n              <div class=\"splide__track\">\n                <ul class=\"splide__list\">\n                  <li class=\"splide__slide\">\n                    <img src=\"./images/manga/ajin.jpg\" alt=\"Ajin manga slide\">\n                  </li>\n                  <li class=\"splide__slide\">\n                    <img src=\"./images/manga/glt.jpg\" alt=\"Ajin manga slide\">\n                  </li>\n                  <li class=\"splide__slide\">\n                    <img src=\"./images/manga/berserk.jpg\" alt=\"Ajin manga slide\">\n                  </li>\n                  <li class=\"splide__slide\">\n                  <img src=\"./images/manga/jojo.jpg\" alt=\"Ajin manga slide\">\n                </li>\n                <li class=\"splide__slide\">\n                  <img src=\"./images/manga/yotsuba.jpg\" alt=\"Ajin manga slide\">\n                </li>\n                <li class=\"splide__slide\">\n                  <img src=\"./images/manga/vagabond.jpg\" alt=\"Ajin manga slide\">\n                </li>\n                </ul>\n              </div>\n            </section>\n          </div>\n        </div>\n      </section>\n      <section class='hiragana'>\n        <h3>HIRAGANA /// 平仮名 /// ひらがな</h3>\n        <p>\n          Why do we learn hiragana first if you want to be proficient in Japanese? The answer to that is because it's the first writing system that Japanese kids learn. And because of that, a lot of books for kids is written in hiragana. Hiragana is consist of 46 characters.\n          Although one could theoretically write an entire language in hiragana, it is usually only used for the grammatical endings of verbs, nouns, and adjectives, as well as for particles, and some other native Japanese words.\n        </p>\n        <div class='thin-underline'></div>\n      </section>\n      <section id='about-me'>\n        <h3>About Me</h3>\n        <div class='about-me-detail'>\n          <div class='about-me-detail__left'>\n            <h2>Creator details</h2>\n            <p>\n              I'm a web engineer who is passionate about learning new things. I'm currently studying Information System at the Gunadarma University. I'm also a fan of Japanese culture and still trying to learn the language.\n            </p>\n          </div>\n          <div class='about-me-detail__right'>\n            <h2>Contact me</h2>\n            <p>\n              You can contact me through the following links:\n            </p>\n            <div class='contact-me'>\n              <a href='mailto:ddefrito84@gmail.com' id='email'>\n                <img src='./images/icons/email.svg' alt='email logo' height='20px'>\n                Email\n              </a>\n              <a href='https://www.linkedin.com/in/dhafad/' id='linkedin'>\n                <img src='./images/icons/linkedin.svg' alt='linkedin logo' height='20px'>\n                LinkedIn\n              </a>\n              <a href='https://github.com/ASTRSM' id='github'>\n                <img src='./images/icons/github.svg' alt='github logo' height='20px'>                \n                Github\n              </a>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n    "},afterRender:function(){}}}}]);