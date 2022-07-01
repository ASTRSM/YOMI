"use strict";(self.webpackChunkyomi=self.webpackChunkyomi||[]).push([[96],{908:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(1177),a=n(449);const i={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},o=t.elements[e];(0,a.Re)(o)&&(0,r.Z)(o)&&(Object.assign(o.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],o=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});(0,a.Re)(i)&&(0,r.Z)(i)&&(Object.assign(i.style,s),Object.keys(o).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]}},3764:(e,t,n)=>{n.d(t,{fi:()=>W});var r=n(1734),a=n(7987),i={passive:!0};const o={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,s=void 0===o||o,p=r.resize,f=void 0===p||p,c=(0,a.Z)(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&u.forEach((function(e){e.addEventListener("scroll",n.update,i)})),f&&c.addEventListener("resize",n.update,i),function(){s&&u.forEach((function(e){e.removeEventListener("scroll",n.update,i)})),f&&c.removeEventListener("resize",n.update,i)}},data:{}};function s(e){return e.split("-")[0]}function p(e){return e.split("-")[1]}function f(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var c=n(5816);function u(e){var t,n=e.reference,r=e.element,a=e.placement,i=a?s(a):null,o=a?p(a):null,u=n.x+n.width/2-r.width/2,l=n.y+n.height/2-r.height/2;switch(i){case c.we:t={x:u,y:n.y-r.height};break;case c.I:t={x:u,y:n.y+n.height};break;case c.F2:t={x:n.x+n.width,y:l};break;case c.t$:t={x:n.x-r.width,y:l};break;default:t={x:n.x,y:n.y}}var d=i?f(i):null;if(null!=d){var m="y"===d?"height":"width";switch(o){case c.BL:t[d]=t[d]-(n[m]/2-r[m]/2);break;case c.ut:t[d]=t[d]+(n[m]/2-r[m]/2)}}return t}const l={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=u({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var d=n(7315),m=n(7211),v=n(6373),h=n(9496),y={top:"auto",right:"auto",bottom:"auto",left:"auto"};function b(e){var t,n=e.popper,r=e.popperRect,i=e.placement,o=e.variation,s=e.offsets,p=e.position,f=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,b=e.isFixed,g=s.x,x=void 0===g?0:g,w=s.y,O=void 0===w?0:w,j="function"==typeof l?l({x,y:O}):{x,y:O};x=j.x,O=j.y;var k=s.hasOwnProperty("x"),A=s.hasOwnProperty("y"),Z=c.t$,D=c.we,E=window;if(u){var B=(0,d.Z)(n),F="clientHeight",I="clientWidth";B===(0,a.Z)(n)&&(B=(0,m.Z)(n),"static"!==(0,v.Z)(B).position&&"absolute"===p&&(F="scrollHeight",I="scrollWidth")),(i===c.we||(i===c.t$||i===c.F2)&&o===c.ut)&&(D=c.I,O-=(b&&B===E&&E.visualViewport?E.visualViewport.height:B[F])-r.height,O*=f?1:-1),i!==c.t$&&(i!==c.we&&i!==c.I||o!==c.ut)||(Z=c.F2,x-=(b&&B===E&&E.visualViewport?E.visualViewport.width:B[I])-r.width,x*=f?1:-1)}var P,V=Object.assign({position:p},u&&y),$=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:(0,h.NM)(t*r)/r||0,y:(0,h.NM)(n*r)/r||0}}({x,y:O}):{x,y:O};return x=$.x,O=$.y,f?Object.assign({},V,((P={})[D]=A?"0":"",P[Z]=k?"0":"",P.transform=(E.devicePixelRatio||1)<=1?"translate("+x+"px, "+O+"px)":"translate3d("+x+"px, "+O+"px, 0)",P)):Object.assign({},V,((t={})[D]=A?O+"px":"",t[Z]=k?x+"px":"",t.transform="",t))}const g={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,a=void 0===r||r,i=n.adaptive,o=void 0===i||i,f=n.roundOffsets,c=void 0===f||f,u={placement:s(t.placement),variation:p(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,b(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,b(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var x=n(908);const w={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,a=n.offset,i=void 0===a?[0,0]:a,o=c.Ct.reduce((function(e,n){return e[n]=function(e,t,n){var r=s(e),a=[c.t$,c.we].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,o=i[0],p=i[1];return o=o||0,p=(p||0)*a,[c.t$,c.F2].indexOf(r)>=0?{x:p,y:o}:{x:o,y:p}}(n,t.rects,i),e}),{}),p=o[t.placement],f=p.x,u=p.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=o}};var O={left:"right",right:"left",bottom:"top",top:"bottom"};function j(e){return e.replace(/left|right|bottom|top/g,(function(e){return O[e]}))}var k={start:"end",end:"start"};function A(e){return e.replace(/start|end/g,(function(e){return k[e]}))}var Z=n(6576),D=n(8995),E=n(7700),B=n(449);function F(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function I(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function P(e,t){void 0===t&&(t={});var n=t,r=n.placement,a=void 0===r?e.placement:r,i=n.boundary,o=void 0===i?c.zV:i,s=n.rootBoundary,p=void 0===s?c.Pj:s,f=n.elementContext,l=void 0===f?c.k5:f,d=n.altBoundary,v=void 0!==d&&d,h=n.padding,y=void 0===h?0:h,b=F("number"!=typeof y?y:I(y,c.mv)),g=l===c.k5?c.YP:c.k5,x=e.rects.popper,w=e.elements[v?g:l],O=(0,Z.Z)((0,B.kK)(w)?w:w.contextElement||(0,m.Z)(e.elements.popper),o,p),j=(0,D.Z)(e.elements.reference),k=u({reference:j,element:x,strategy:"absolute",placement:a}),A=(0,E.Z)(Object.assign({},x,k)),P=l===c.k5?A:j,V={top:O.top-P.top+b.top,bottom:P.bottom-O.bottom+b.bottom,left:O.left-P.left+b.left,right:P.right-O.right+b.right},$=e.modifiersData.offset;if(l===c.k5&&$){var q=$[a];Object.keys(V).forEach((function(e){var t=[c.F2,c.I].indexOf(e)>=0?1:-1,n=[c.we,c.I].indexOf(e)>=0?"y":"x";V[e]+=q[n]*t}))}return V}const V={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var a=n.mainAxis,i=void 0===a||a,o=n.altAxis,f=void 0===o||o,u=n.fallbackPlacements,l=n.padding,d=n.boundary,m=n.rootBoundary,v=n.altBoundary,h=n.flipVariations,y=void 0===h||h,b=n.allowedAutoPlacements,g=t.options.placement,x=s(g),w=u||(x!==g&&y?function(e){if(s(e)===c.d7)return[];var t=j(e);return[A(e),t,A(t)]}(g):[j(g)]),O=[g].concat(w).reduce((function(e,n){return e.concat(s(n)===c.d7?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,a=n.boundary,i=n.rootBoundary,o=n.padding,f=n.flipVariations,u=n.allowedAutoPlacements,l=void 0===u?c.Ct:u,d=p(r),m=d?f?c.bw:c.bw.filter((function(e){return p(e)===d})):c.mv,v=m.filter((function(e){return l.indexOf(e)>=0}));0===v.length&&(v=m);var h=v.reduce((function(t,n){return t[n]=P(e,{placement:n,boundary:a,rootBoundary:i,padding:o})[s(n)],t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}(t,{placement:n,boundary:d,rootBoundary:m,padding:l,flipVariations:y,allowedAutoPlacements:b}):n)}),[]),k=t.rects.reference,Z=t.rects.popper,D=new Map,E=!0,B=O[0],F=0;F<O.length;F++){var I=O[F],V=s(I),$=p(I)===c.BL,q=[c.we,c.I].indexOf(V)>=0,L=q?"width":"height",M=P(t,{placement:I,boundary:d,rootBoundary:m,altBoundary:v,padding:l}),C=q?$?c.F2:c.t$:$?c.I:c.we;k[L]>Z[L]&&(C=j(C));var R=j(C),S=[];if(i&&S.push(M[V]<=0),f&&S.push(M[C]<=0,M[R]<=0),S.every((function(e){return e}))){B=I,E=!1;break}D.set(I,S)}if(E)for(var z=function(e){var t=O.find((function(t){var n=D.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return B=t,"break"},H=y?3:1;H>0&&"break"!==z(H);H--);t.placement!==B&&(t.modifiersData[r]._skip=!0,t.placement=B,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function $(e,t,n){return(0,h.Fp)(e,(0,h.VV)(t,n))}var q=n(3222);const L={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,a=n.mainAxis,i=void 0===a||a,o=n.altAxis,u=void 0!==o&&o,l=n.boundary,m=n.rootBoundary,v=n.altBoundary,y=n.padding,b=n.tether,g=void 0===b||b,x=n.tetherOffset,w=void 0===x?0:x,O=P(t,{boundary:l,rootBoundary:m,padding:y,altBoundary:v}),j=s(t.placement),k=p(t.placement),A=!k,Z=f(j),D="x"===Z?"y":"x",E=t.modifiersData.popperOffsets,B=t.rects.reference,F=t.rects.popper,I="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,V="number"==typeof I?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(E){if(i){var C,R="y"===Z?c.we:c.t$,S="y"===Z?c.I:c.F2,z="y"===Z?"height":"width",H=E[Z],W=H+O[R],N=H-O[S],_=g?-F[z]/2:0,K=k===c.BL?B[z]:F[z],T=k===c.BL?-F[z]:-B[z],Y=t.elements.arrow,G=g&&Y?(0,q.Z)(Y):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Q=J[R],U=J[S],X=$(0,B[z],G[z]),ee=A?B[z]/2-_-X-Q-V.mainAxis:K-X-Q-V.mainAxis,te=A?-B[z]/2+_+X+U+V.mainAxis:T+X+U+V.mainAxis,ne=t.elements.arrow&&(0,d.Z)(t.elements.arrow),re=ne?"y"===Z?ne.clientTop||0:ne.clientLeft||0:0,ae=null!=(C=null==L?void 0:L[Z])?C:0,ie=H+ee-ae-re,oe=H+te-ae,se=$(g?(0,h.VV)(W,ie):W,H,g?(0,h.Fp)(N,oe):N);E[Z]=se,M[Z]=se-H}if(u){var pe,fe="x"===Z?c.we:c.t$,ce="x"===Z?c.I:c.F2,ue=E[D],le="y"===D?"height":"width",de=ue+O[fe],me=ue-O[ce],ve=-1!==[c.we,c.t$].indexOf(j),he=null!=(pe=null==L?void 0:L[D])?pe:0,ye=ve?de:ue-B[le]-F[le]-he+V.altAxis,be=ve?ue+B[le]+F[le]-he-V.altAxis:me,ge=g&&ve?function(e,t,n){var r=$(e,t,n);return r>n?n:r}(ye,ue,be):$(g?ye:de,ue,g?be:me);E[D]=ge,M[D]=ge-ue}t.modifiersData[r]=M}},requiresIfExists:["offset"]};var M=n(1027);const C={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,a=e.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,p=s(n.placement),u=f(p),l=[c.t$,c.F2].indexOf(p)>=0?"height":"width";if(i&&o){var m=function(e,t){return F("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:I(e,c.mv))}(a.padding,n),v=(0,q.Z)(i),h="y"===u?c.we:c.t$,y="y"===u?c.I:c.F2,b=n.rects.reference[l]+n.rects.reference[u]-o[u]-n.rects.popper[l],g=o[u]-n.rects.reference[u],x=(0,d.Z)(i),w=x?"y"===u?x.clientHeight||0:x.clientWidth||0:0,O=b/2-g/2,j=m[h],k=w-v[l]-m[y],A=w/2-v[l]/2+O,Z=$(j,A,k),D=u;n.modifiersData[r]=((t={})[D]=Z,t.centerOffset=Z-A,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&(0,M.Z)(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function R(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function S(e){return[c.we,c.F2,c.I,c.t$].some((function(t){return e[t]>=0}))}const z={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,a=t.rects.popper,i=t.modifiersData.preventOverflow,o=P(t,{elementContext:"reference"}),s=P(t,{altBoundary:!0}),p=R(o,r),f=R(s,a,i),c=S(p),u=S(f);t.modifiersData[n]={referenceClippingOffsets:p,popperEscapeOffsets:f,isReferenceHidden:c,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":u})}};var H=[o,l,g,x.Z,w,V,L,C,z],W=(0,r.kZ)({defaultModifiers:H})},1838:(e,t,n)=>{function r(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}n.d(t,{Z:()=>r})},9496:(e,t,n)=>{n.d(t,{Fp:()=>r,NM:()=>i,VV:()=>a});var r=Math.max,a=Math.min,i=Math.round},8859:(e,t,n)=>{function r(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}n.d(t,{Z:()=>r})},8178:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(5816);function a(e){var t=new Map,n=new Set,r=[];function a(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&a(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||a(e)})),r}function i(e){var t=a(e);return r.xs.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}},7700:(e,t,n)=>{function r(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}n.d(t,{Z:()=>r})}}]);