"use strict";(self.webpackChunkyomi=self.webpackChunkyomi||[]).push([[590],{1734:(t,e,n)=>{n.d(e,{kZ:()=>y});var o=n(8995),r=n(1765),i=n(7987),f=n(449),a=n(1177),c=n(6592),d=n(7211),u=n(7611),l=n(9496);function s(t,e,n){void 0===n&&(n=!1);var s,h,p=(0,f.Re)(e),Z=(0,f.Re)(e)&&function(t){var e=t.getBoundingClientRect(),n=(0,l.NM)(e.width)/t.offsetWidth||1,o=(0,l.NM)(e.height)/t.offsetHeight||1;return 1!==n||1!==o}(e),v=(0,d.Z)(e),g=(0,o.Z)(t,Z),m={scrollLeft:0,scrollTop:0},w={x:0,y:0};return(p||!p&&!n)&&(("body"!==(0,a.Z)(e)||(0,u.Z)(v))&&(m=(s=e)!==(0,i.Z)(s)&&(0,f.Re)(s)?{scrollLeft:(h=s).scrollLeft,scrollTop:h.scrollTop}:(0,r.Z)(s)),(0,f.Re)(e)?((w=(0,o.Z)(e,!0)).x+=e.clientLeft,w.y+=e.clientTop):v&&(w.x=(0,c.Z)(v))),{x:g.left+m.scrollLeft-w.x,y:g.top+m.scrollTop-w.y,width:g.width,height:g.height}}var h=n(3222),p=n(1789),Z=n(7315),v=n(8178),g=n(1838),m=n(8859),w={placement:"bottom",modifiers:[],strategy:"absolute"};function b(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function y(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,o=void 0===n?[]:n,r=e.defaultOptions,i=void 0===r?w:r;return function(t,e,n){void 0===n&&(n=i);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},w,i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},a=[],c=!1,d={state:r,setOptions:function(n){var c="function"==typeof n?n(r.options):n;u(),r.options=Object.assign({},i,r.options,c),r.scrollParents={reference:(0,f.kK)(t)?(0,p.Z)(t):t.contextElement?(0,p.Z)(t.contextElement):[],popper:(0,p.Z)(e)};var l=(0,v.Z)((0,m.Z)([].concat(o,r.options.modifiers)));return r.orderedModifiers=l.filter((function(t){return t.enabled})),r.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,o=void 0===n?{}:n,i=t.effect;if("function"==typeof i){var f=i({state:r,name:e,instance:d,options:o});a.push(f||function(){})}})),d.update()},forceUpdate:function(){if(!c){var t=r.elements,e=t.reference,n=t.popper;if(b(e,n)){r.rects={reference:s(e,(0,Z.Z)(n),"fixed"===r.options.strategy),popper:(0,h.Z)(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(t){return r.modifiersData[t.name]=Object.assign({},t.data)}));for(var o=0;o<r.orderedModifiers.length;o++)if(!0!==r.reset){var i=r.orderedModifiers[o],f=i.fn,a=i.options,u=void 0===a?{}:a,l=i.name;"function"==typeof f&&(r=f({state:r,options:u,name:l,instance:d})||r)}else r.reset=!1,o=-1}}},update:(0,g.Z)((function(){return new Promise((function(t){d.forceUpdate(),t(r)}))})),destroy:function(){u(),c=!0}};if(!b(t,e))return d;function u(){a.forEach((function(t){return t()})),a=[]}return d.setOptions(n).then((function(t){!c&&n.onFirstUpdate&&n.onFirstUpdate(t)})),d}}},1027:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(449);function r(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&(0,o.Zq)(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}},8995:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(449),r=n(9496);function i(t,e){void 0===e&&(e=!1);var n=t.getBoundingClientRect(),i=1,f=1;if((0,o.Re)(t)&&e){var a=t.offsetHeight,c=t.offsetWidth;c>0&&(i=(0,r.NM)(n.width)/c||1),a>0&&(f=(0,r.NM)(n.height)/a||1)}return{width:n.width/i,height:n.height/f,top:n.top/f,right:n.right/i,bottom:n.bottom/f,left:n.left/i,x:n.left/i,y:n.top/f}}},6576:(t,e,n)=>{n.d(e,{Z:()=>w});var o=n(5816),r=n(7987),i=n(7211),f=n(6592),a=n(6373),c=n(1765),d=n(9496),u=n(1789),l=n(7315),s=n(449),h=n(8995),p=n(6719),Z=n(1027),v=n(1177),g=n(7700);function m(t,e){return e===o.Pj?(0,g.Z)(function(t){var e=(0,r.Z)(t),n=(0,i.Z)(t),o=e.visualViewport,a=n.clientWidth,c=n.clientHeight,d=0,u=0;return o&&(a=o.width,c=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(d=o.offsetLeft,u=o.offsetTop)),{width:a,height:c,x:d+(0,f.Z)(t),y:u}}(t)):(0,s.kK)(e)?function(t){var e=(0,h.Z)(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):(0,g.Z)(function(t){var e,n=(0,i.Z)(t),o=(0,c.Z)(t),r=null==(e=t.ownerDocument)?void 0:e.body,u=(0,d.Fp)(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),l=(0,d.Fp)(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+(0,f.Z)(t),h=-o.scrollTop;return"rtl"===(0,a.Z)(r||n).direction&&(s+=(0,d.Fp)(n.clientWidth,r?r.clientWidth:0)-u),{width:u,height:l,x:s,y:h}}((0,i.Z)(t)))}function w(t,e,n){var o="clippingParents"===e?function(t){var e=(0,u.Z)((0,p.Z)(t)),n=["absolute","fixed"].indexOf((0,a.Z)(t).position)>=0&&(0,s.Re)(t)?(0,l.Z)(t):t;return(0,s.kK)(n)?e.filter((function(t){return(0,s.kK)(t)&&(0,Z.Z)(t,n)&&"body"!==(0,v.Z)(t)})):[]}(t):[].concat(e),r=[].concat(o,[n]),i=r[0],f=r.reduce((function(e,n){var o=m(t,n);return e.top=(0,d.Fp)(o.top,e.top),e.right=(0,d.VV)(o.right,e.right),e.bottom=(0,d.VV)(o.bottom,e.bottom),e.left=(0,d.Fp)(o.left,e.left),e}),m(t,i));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}},6373:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(7987);function r(t){return(0,o.Z)(t).getComputedStyle(t)}},7211:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(449);function r(t){return(((0,o.kK)(t)?t.ownerDocument:t.document)||window.document).documentElement}},3222:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(8995);function r(t){var e=(0,o.Z)(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}},1177:(t,e,n)=>{function o(t){return t?(t.nodeName||"").toLowerCase():null}n.d(e,{Z:()=>o})},7315:(t,e,n)=>{n.d(e,{Z:()=>u});var o=n(7987),r=n(1177),i=n(6373),f=n(449);function a(t){return["table","td","th"].indexOf((0,r.Z)(t))>=0}var c=n(6719);function d(t){return(0,f.Re)(t)&&"fixed"!==(0,i.Z)(t).position?t.offsetParent:null}function u(t){for(var e=(0,o.Z)(t),n=d(t);n&&a(n)&&"static"===(0,i.Z)(n).position;)n=d(n);return n&&("html"===(0,r.Z)(n)||"body"===(0,r.Z)(n)&&"static"===(0,i.Z)(n).position)?e:n||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&(0,f.Re)(t)&&"fixed"===(0,i.Z)(t).position)return null;var n=(0,c.Z)(t);for((0,f.Zq)(n)&&(n=n.host);(0,f.Re)(n)&&["html","body"].indexOf((0,r.Z)(n))<0;){var o=(0,i.Z)(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||e&&"filter"===o.willChange||e&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(t)||e}},6719:(t,e,n)=>{n.d(e,{Z:()=>f});var o=n(1177),r=n(7211),i=n(449);function f(t){return"html"===(0,o.Z)(t)?t:t.assignedSlot||t.parentNode||((0,i.Zq)(t)?t.host:null)||(0,r.Z)(t)}},7987:(t,e,n)=>{function o(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}n.d(e,{Z:()=>o})},1765:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(7987);function r(t){var e=(0,o.Z)(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}},6592:(t,e,n)=>{n.d(e,{Z:()=>f});var o=n(8995),r=n(7211),i=n(1765);function f(t){return(0,o.Z)((0,r.Z)(t)).left+(0,i.Z)(t).scrollLeft}},449:(t,e,n)=>{n.d(e,{Re:()=>i,Zq:()=>f,kK:()=>r});var o=n(7987);function r(t){return t instanceof(0,o.Z)(t).Element||t instanceof Element}function i(t){return t instanceof(0,o.Z)(t).HTMLElement||t instanceof HTMLElement}function f(t){return"undefined"!=typeof ShadowRoot&&(t instanceof(0,o.Z)(t).ShadowRoot||t instanceof ShadowRoot)}},7611:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(6373);function r(t){var e=(0,o.Z)(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}},1789:(t,e,n)=>{n.d(e,{Z:()=>d});var o=n(6719),r=n(7611),i=n(1177),f=n(449);function a(t){return["html","body","#document"].indexOf((0,i.Z)(t))>=0?t.ownerDocument.body:(0,f.Re)(t)&&(0,r.Z)(t)?t:a((0,o.Z)(t))}var c=n(7987);function d(t,e){var n;void 0===e&&(e=[]);var i=a(t),f=i===(null==(n=t.ownerDocument)?void 0:n.body),u=(0,c.Z)(i),l=f?[u].concat(u.visualViewport||[],(0,r.Z)(i)?i:[]):i,s=e.concat(l);return f?s:s.concat(d((0,o.Z)(l)))}},5816:(t,e,n)=>{n.d(e,{BL:()=>d,Ct:()=>v,F2:()=>i,I:()=>r,Pj:()=>s,YP:()=>p,bw:()=>Z,d7:()=>a,k5:()=>h,mv:()=>c,t$:()=>f,ut:()=>u,we:()=>o,xs:()=>g,zV:()=>l});var o="top",r="bottom",i="right",f="left",a="auto",c=[o,r,i,f],d="start",u="end",l="clippingParents",s="viewport",h="popper",p="reference",Z=c.reduce((function(t,e){return t.concat([e+"-"+d,e+"-"+u])}),[]),v=[].concat(c,[a]).reduce((function(t,e){return t.concat([e,e+"-"+d,e+"-"+u])}),[]),g=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]}}]);