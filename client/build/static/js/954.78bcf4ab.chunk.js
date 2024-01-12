"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[954],{798:(n,t,e)=>{e.d(t,{Z:()=>o});const r={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function o(){let n,t,e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=!1,u=!0,s=!1,a=0,l=0;function d(){if(e)return;if(!u)return;c||t.emit("autoplay:play");const{ownerWindow:r}=t.internalEngine();r.clearInterval(l),l=r.setInterval(g,n.delay),c=!0}function f(){if(e)return;c&&t.emit("autoplay:stop");const{ownerWindow:n}=t.internalEngine();n.clearInterval(l),l=0,c=!1}function p(n){"undefined"!==typeof n&&(s=n),u=!0,d()}function g(){a=requestAnimationFrame((()=>{const{index:e}=t.internalEngine(),r=e.clone().add(1).get(),o=t.scrollSnapList().length-1;n.stopOnLastSnap&&r===o&&f(),t.canScrollNext()?t.scrollNext(s):t.scrollTo(0,s)}))}return{name:"autoplay",options:i,init:function(a,l){t=a;const{mergeOptions:p,optionsAtMedia:g}=l,m=p(r,o.globalOptions),h=p(m,i);if(n=g(h),t.scrollSnapList().length<=1)return;s=n.jump,e=!1;const{eventStore:y,ownerDocument:v}=t.internalEngine(),x=t.rootNode(),b=n.rootNode&&n.rootNode(x)||x;t.on("pointerDown",f),n.stopOnInteraction||t.on("pointerUp",d),n.stopOnMouseEnter&&(y.add(b,"mouseenter",(()=>{u=!1,f()})),n.stopOnInteraction||y.add(b,"mouseleave",(()=>{u=!0,d()}))),n.stopOnFocusIn&&(y.add(b,"focusin",f),n.stopOnInteraction||y.add(b,"focusout",d)),y.add(v,"visibilitychange",(()=>{if("hidden"===v.visibilityState)return u=c,f();u&&d()})),n.playOnInit&&t.on("init",d).on("reInit",d)},destroy:function(){e=!0,c=!1,t.off("init",d).off("reInit",d),t.off("pointerDown",f),n.stopOnInteraction||t.off("pointerUp",d),f(),cancelAnimationFrame(a),a=0},play:p,stop:function(){c&&f()},reset:function(){c&&p()},isPlaying:function(){return c}}}o.globalOptions=void 0},344:(n,t,e)=>{e.d(t,{Z:()=>C});var r=e(791);function o(n){return function(n){return"[object Object]"===Object.prototype.toString.call(n)}(n)||Array.isArray(n)}function i(n,t){const e=Object.keys(n),r=Object.keys(t);if(e.length!==r.length)return!1;return JSON.stringify(Object.keys(n.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&e.every((e=>{const r=n[e],c=t[e];return"function"===typeof r?"".concat(r)==="".concat(c):o(r)&&o(c)?i(r,c):r===c}))}function c(n){return n.concat().sort(((n,t)=>n.name>t.name?1:-1)).map((n=>n.options))}function u(n){return"number"===typeof n}function s(n){return"string"===typeof n}function a(n){return"boolean"===typeof n}function l(n){return"[object Object]"===Object.prototype.toString.call(n)}function d(n){return Math.abs(n)}function f(n){return Math.sign(n)}function p(n,t){return d(n-t)}function g(n){return x(n).map(Number)}function m(n){return n[h(n)]}function h(n){return Math.max(0,n.length-1)}function y(n,t){return t===h(n)}function v(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from(Array(n),((n,e)=>t+e))}function x(n){return Object.keys(n)}function b(n,t){return[n,t].reduce(((n,t)=>(x(t).forEach((e=>{const r=n[e],o=t[e],i=l(r)&&l(o);n[e]=i?b(r,o):o})),n)),{})}function w(n,t){return"undefined"!==typeof t.MouseEvent&&n instanceof t.MouseEvent}function S(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const e=d(n-t);function r(t){return t<n}function o(n){return n>t}function i(n){return r(n)||o(n)}return{length:e,max:t,min:n,constrain:function(e){return i(e)?r(e)?n:t:e},reachedAny:i,reachedMax:o,reachedMin:r,removeOffset:function(n){return e?n-e*Math.ceil((n-t)/e):n}}}function O(n,t,e){const{constrain:r}=S(0,n),o=n+1;let i=c(t);function c(n){return e?d((o+n)%o):r(n)}function u(){return i}function s(){return O(n,u(),e)}const a={get:u,set:function(n){return i=c(n),a},add:function(n){return s().set(u()+n)},clone:s};return a}function E(){let n=[];const t={add:function(e,r,o){let i,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};if("addEventListener"in e)e.addEventListener(r,o,c),i=()=>e.removeEventListener(r,o,c);else{const n=e;n.addListener(o),i=()=>n.removeListener(o)}return n.push(i),t},clear:function(){n=n.filter((n=>n()))}};return t}function I(n,t,e,r,o,i,c,u,s,l,g,m,h,y,v,x,b,O,I,L){const{cross:D}=n,A=["INPUT","SELECT","TEXTAREA"],k={passive:!1},M=E(),F=E(),T=S(50,225).constrain(v.measure(20)),P={mouse:300,touch:400},N={mouse:500,touch:600},j=x?43:25;let z=!1,H=0,R=0,V=!1,B=!1,C=!1,q=!1;function G(n){const e=c.readPoint(n),r=c.readPoint(n,D),o=p(e,H),u=p(r,R);if(!B&&!q){if(!n.cancelable)return U(n);if(B=o>u,!B)return U(n)}const a=c.pointerMove(n);o>b&&(C=!0),g.useFriction(.3).useDuration(1),s.start(),i.add(t.apply(a)),n.preventDefault()}function U(n){const e=m.byDistance(0,!1).index!==h.get(),r=c.pointerUp(n)*(x?N:P)[q?"mouse":"touch"],o=function(n,t){const e=h.add(-1*f(n)),r=m.byDistance(n,!x).distance;return x||d(n)<T?r:O&&t?.5*r:m.byIndex(e.get(),0).distance}(t.apply(r),e),i=function(n,t){if(0===n||0===t)return 0;if(d(n)<=d(t))return 0;const e=p(d(n),d(t));return d(e/n)}(r,o),u=j-10*i,s=I+i/50;B=!1,V=!1,F.clear(),g.useDuration(u).useFriction(s),l.distance(o,!x),q=!1,y.emit("pointerUp")}function W(n){C&&(n.stopPropagation(),n.preventDefault())}return{init:function(n){if(!L)return;function t(t){(a(L)||L(n,t))&&function(n){const t=w(n,o);if(q=t,t&&0!==n.button)return;if(function(n){const t=n.nodeName||"";return A.includes(t)}(n.target))return;C=x&&t&&!n.buttons&&z,z=p(i.get(),u.get())>=2,V=!0,c.pointerDown(n),g.useFriction(0).useDuration(0),i.set(u),function(){const n=q?r:e;F.add(n,"touchmove",G,k).add(n,"touchend",U).add(n,"mousemove",G,k).add(n,"mouseup",U)}(),H=c.readPoint(n),R=c.readPoint(n,D),y.emit("pointerDown")}(t)}const s=e;M.add(s,"dragstart",(n=>n.preventDefault()),k).add(s,"touchmove",(()=>{}),k).add(s,"touchend",(()=>{})).add(s,"touchstart",t).add(s,"mousedown",t).add(s,"touchcancel",U).add(s,"contextmenu",U).add(s,"click",W,!0)},pointerDown:function(){return V},destroy:function(){M.clear(),F.clear()}}}function L(n,t){let e,r;function o(n){return n.timeStamp}function i(e,r){const o=r||n.scroll,i="client".concat("x"===o?"X":"Y");return(w(e,t)?e:e.touches[0])[i]}return{pointerDown:function(n){return e=n,r=n,i(n)},pointerMove:function(n){const t=i(n)-i(r),c=o(n)-o(e)>170;return r=n,c&&(e=n),t},pointerUp:function(n){if(!e||!r)return 0;const t=i(r)-i(e),c=o(n)-o(e),u=o(n)-o(r)>170,s=t/c;return c&&!u&&d(s)>.1?s:0},readPoint:i}}function D(n,t,e,r,o,i,c){let u,s,l=[],f=!1;function p(n){return o.measureSize(c.measure(n))}return{init:function(o){if(!i)return;s=p(n),l=r.map(p),u=new ResizeObserver((c=>{f||(a(i)||i(o,c))&&function(i){for(const c of i){const i=c.target===n,u=r.indexOf(c.target),a=i?s:l[u];if(d(p(i?n:r[u])-a)>=.5){e.requestAnimationFrame((()=>{o.reInit(),t.emit("resize")}));break}}}(c)})),[n].concat(r).forEach((n=>u.observe(n)))},destroy:function(){u&&u.disconnect(),f=!0}}}function A(n,t,e,r,o){const i=o.measure(10),c=o.measure(50),u=S(.1,.99);let s=!1;return{constrain:function(o){if(s||!n.reachedAny(e.get())||!n.reachedAny(t.get()))return;const a=n.reachedMin(t.get())?"min":"max",l=d(n[a]-t.get()),f=e.get()-t.get(),p=u.constrain(l/c);e.subtract(f*p),!o&&d(f)<i&&(e.set(n.constrain(e.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(n){s=!n}}}function k(n,t,e,r){const o=t.min+.1,i=t.max+.1,{reachedMin:c,reachedMax:u}=S(o,i);return{loop:function(t){if(!function(n){return 1===n?u(e.get()):-1===n&&c(e.get())}(t))return;const o=n*(-1*t);r.forEach((n=>n.add(o)))}}}function M(n,t,e,r,o){const{reachedAny:i,removeOffset:c,constrain:u}=r;function s(n){return n.concat().sort(((n,t)=>d(n)-d(t)))[0]}function a(t,r){const o=[t,t+e,t-e];if(!n)return o[0];if(!r)return s(o);const i=o.filter((n=>f(n)===r));return i.length?s(i):m(o)-e}return{byDistance:function(e,r){const s=o.get()+e,{index:l,distance:f}=function(e){const r=n?c(e):u(e),o=t.map((n=>n-r)).map((n=>a(n,0))).map(((n,t)=>({diff:n,index:t}))).sort(((n,t)=>d(n.diff)-d(t.diff))),{index:i}=o[0];return{index:i,distance:r}}(s),p=!n&&i(s);return!r||p?{index:l,distance:e}:{index:l,distance:e+a(t[l]-f,0)}},byIndex:function(n,e){return{index:n,distance:a(t[n]-o.get(),e)}},shortcut:a}}function F(n){let t=n;function e(n){return u(n)?n:n.get()}return{get:function(){return t},set:function(n){t=e(n)},add:function(n){t+=e(n)},subtract:function(n){t-=e(n)}}}function T(n,t,e){const r="x"===n.scroll?function(n){return"translate3d(".concat(n,"px,0px,0px)")}:function(n){return"translate3d(0px,".concat(n,"px,0px)")},o=e.style;let i=!1;return{clear:function(){i||(o.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(n){i||(o.transform=r(t.apply(n)))},toggleActive:function(n){i=!n}}}function P(n,t,e,r,o,i,c,u,s,a){const l=.5,d=g(i),f=g(i).reverse(),p=function(){const n=u[0];return y(h(f,n),r,!1)}().concat(function(){const n=e-u[0]-1;return y(h(d,n),-r,!0)}());function m(n,t){return n.reduce(((n,t)=>n-i[t]),t)}function h(n,t){return n.reduce(((n,e)=>m(n,t)>0?n.concat([e]):n),[])}function y(i,u,d){const f=function(n){return c.map(((t,r)=>({start:t-o[r]+l+n,end:t+e-l+n})))}(u);return i.map((e=>{const o=d?0:-r,i=d?r:0,c=d?"end":"start",u=f[e][c];return{index:e,loopPoint:u,slideLocation:F(-1),translate:T(n,t,a[e]),target:()=>s.get()>u?o:i}}))}return{canLoop:function(){return p.every((n=>{let{index:t}=n;return m(d.filter((n=>n!==t)),e)<=.1}))},clear:function(){p.forEach((n=>n.translate.clear()))},loop:function(){p.forEach((n=>{const{target:t,translate:e,slideLocation:r}=n,o=t();o!==r.get()&&(e.to(o),r.set(o))}))},loopPoints:p}}function N(n,t,e){let r,o=!1;return{init:function(i){e&&(r=new MutationObserver((n=>{o||(a(e)||e(i,n))&&function(n){for(const e of n)if("childList"===e.type){i.reInit(),t.emit("slidesChanged");break}}(n)})),r.observe(n,{childList:!0}))},destroy:function(){r&&r.disconnect(),o=!0}}}function j(n,t,e,r){const o={};let i,c=null,u=null,s=!1;const a={init:function(){i=new IntersectionObserver((n=>{s||(n.forEach((n=>{const e=t.indexOf(n.target);o[e]=n})),c=null,u=null,e.emit("slidesInView"))}),{root:n.parentElement,threshold:r}),t.forEach((n=>i.observe(n)))},destroy:function(){i&&i.disconnect(),s=!0},get:function(){let n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(n&&c)return c;if(!n&&u)return u;const t=function(n){return x(o).reduce(((t,e)=>{const r=parseInt(e),{isIntersecting:i}=o[r];return(n&&i||!n&&!i)&&t.push(r),t}),[])}(n);return n&&(c=t),n||(u=t),t}};return a}function z(n,t,e,r,o,i,c,s,a,l){const{startEdge:f,endEdge:p}=n,y=u(r);return{groupSlides:function(n){return y?function(n,t){return g(n).filter((n=>n%t===0)).map((e=>n.slice(e,e+t)))}(n,r):function(n){return n.length?g(n).reduce(((r,u)=>{const g=m(r)||0,y=0===g,v=u===h(n),x=i[f]-c[g][f],b=i[f]-c[u][p],w=!o&&y?t.apply(s):0;return d(b-(!o&&v?t.apply(a):0)-(x+w))>e+l&&r.push(u),v&&r.push(n.length),r}),[]).map(((t,e,r)=>{const o=Math.max(r[e-1]||0);return n.slice(o,t)})):[]}(n)}}}function H(n,t,e,r,o,i,c,a){const{align:l,axis:p,direction:x,startIndex:b,loop:w,duration:H,dragFree:R,dragThreshold:V,inViewThreshold:B,slidesToScroll:C,skipSnaps:q,containScroll:G,watchResize:U,watchSlides:W,watchDrag:J}=i,Q={measure:function(n){const{offsetTop:t,offsetLeft:e,offsetWidth:r,offsetHeight:o}=n;return{top:t,right:e+r,bottom:t+o,left:e,width:r,height:o}}},X=Q.measure(t),Z=e.map(Q.measure),Y=function(n){const t="rtl"===n?-1:1;return{apply:function(n){return n*t}}}(x),K=function(n,t){const e="y"===n?"y":"x";return{scroll:e,cross:"y"===n?"x":"y",startEdge:"y"===e?"top":"rtl"===t?"right":"left",endEdge:"y"===e?"bottom":"rtl"===t?"left":"right",measureSize:function(n){const{width:t,height:r}=n;return"x"===e?t:r}}}(p,x),$=K.measureSize(X),_=function(n){return{measure:function(t){return n*(t/100)}}}($),nn=function(n,t){const e={start:function(){return 0},center:function(n){return r(n)/2},end:r};function r(n){return t-n}return{measure:function(r,o){return s(n)?e[n](r):n(t,r,o)}}}(l,$),tn=!w&&!!G,en=w||!!G,{slideSizes:rn,slideSizesWithGaps:on,startGap:cn,endGap:un}=function(n,t,e,r,o,i){const{measureSize:c,startEdge:u,endEdge:s}=n,a=e[0]&&o,l=function(){if(!a)return 0;const n=e[0];return d(t[u]-n[u])}(),f=function(){if(!a)return 0;const n=i.getComputedStyle(m(r));return parseFloat(n.getPropertyValue("margin-".concat(s)))}(),p=e.map(c),g=e.map(((n,t,e)=>{const r=!t,o=y(e,t);return r?p[t]+l:o?p[t]+f:e[t+1][u]-n[u]})).map(d);return{slideSizes:p,slideSizesWithGaps:g,startGap:l,endGap:f}}(K,X,Z,e,en,o),sn=z(K,Y,$,C,w,X,Z,cn,un,2),{snaps:an,snapsAligned:ln}=function(n,t,e,r,o){const{startEdge:i,endEdge:c}=n,{groupSlides:u}=o,s=u(r).map((n=>m(n)[c]-n[0][i])).map(d).map(t.measure),a=r.map((n=>e[i]-n[i])).map((n=>-d(n))),l=u(a).map((n=>n[0])).map(((n,t)=>n+s[t]));return{snaps:a,snapsAligned:l}}(K,nn,X,Z,sn),dn=-m(an)+m(on),{snapsContained:fn,scrollContainLimit:pn}=function(n,t,e,r,o){const i=S(-t+n,0),c=e.map(((n,t)=>{const r=!t,o=y(e,t);return r?i.max:o?i.min:i.constrain(n)})).map((n=>parseFloat(n.toFixed(3)))),u=function(){const n=c[0],t=m(c);return S(c.lastIndexOf(n),c.indexOf(t)+1)}();return{snapsContained:function(){if(t<=n+o)return[i.max];if("keepSnaps"===r)return c;const{min:e,max:s}=u;return c.slice(e,s)}(),scrollContainLimit:u}}($,dn,ln,G,2),gn=tn?fn:ln,{limit:mn}=function(n,t,e){const r=t[0];return{limit:S(e?r-n:m(t),r)}}(dn,gn,w),hn=O(h(gn),b,w),yn=hn.clone(),vn=g(e),xn={start:()=>a.start(Tn),stop:()=>a.stop(Tn),update:()=>(n=>{let{dragHandler:t,scrollBody:e,scrollBounds:r,options:{loop:o}}=n;o||r.constrain(t.pointerDown()),e.seek()})(Tn),render:n=>((n,t)=>{let{scrollBody:e,translate:r,location:o,offsetLocation:i,scrollLooper:c,slideLooper:u,dragHandler:s,animation:a,eventHandler:l,options:{loop:d}}=n;const f=e.velocity(),p=e.settled();p&&!s.pointerDown()&&(a.stop(),l.emit("settle")),p||l.emit("scroll"),i.set(o.get()-f+f*t),d&&(c.loop(e.direction()),u.loop()),r.to(i.get())})(Tn,n)},bn=gn[hn.get()],wn=F(bn),Sn=F(bn),On=F(bn),En=function(n,t,e,r,o){let i=0,c=0,u=r,s=o,a=n.get(),l=0;function p(n){return u=n,m}function g(n){return s=n,m}const m={direction:function(){return c},duration:function(){return u},velocity:function(){return i},seek:function(){const t=e.get()-n.get();let r=0;return u?(i+=t/u,i*=s,a+=i,n.add(i),r=a-l):(i=0,n.set(e),r=t),c=f(r),l=a,m},settled:function(){return d(e.get()-t.get())<.001},useBaseFriction:function(){return g(o)},useBaseDuration:function(){return p(r)},useFriction:g,useDuration:p};return m}(wn,Sn,On,H,.68),In=M(w,gn,dn,mn,On),Ln=function(n,t,e,r,o,i){function c(r){const c=r.distance,u=r.index!==t.get();o.add(c),c&&n.start(),u&&(e.set(t.get()),t.set(r.index),i.emit("select"))}return{distance:function(n,t){c(r.byDistance(n,t))},index:function(n,e){const o=t.clone().set(n);c(r.byIndex(o.get(),e))}}}(xn,hn,yn,In,On,c),Dn=function(n){const{max:t,length:e}=n;return{get:function(n){return e?(n-t)/-e:0}}}(mn),An=E(),kn=j(t,e,c,B),{slideRegistry:Mn}=function(n,t,e,r,o,i){const{groupSlides:c}=o,{min:u,max:s}=r;return{slideRegistry:function(){const r=c(i),o=!n||"keepSnaps"===t;return 1===e.length?[i]:o?r:r.slice(u,s).map(((n,t,e)=>{const r=!t,o=y(e,t);return r?v(m(e[0])+1):o?v(h(i)-m(e)[0]+1,m(e)[0]):n}))}()}}(tn,G,gn,pn,sn,vn),Fn=function(n,t,e,r,o,i){let c=0;function s(n){"Tab"===n.code&&(c=(new Date).getTime())}function a(s){i.add(s,"focus",(()=>{if((new Date).getTime()-c>10)return;n.scrollLeft=0;const i=t.indexOf(s),a=e.findIndex((n=>n.includes(i)));u(a)&&(o.useDuration(0),r.index(a,0))}),{passive:!0,capture:!0})}return{init:function(){i.add(document,"keydown",s,!1),t.forEach(a)}}}(n,e,Mn,Ln,En,An),Tn={ownerDocument:r,ownerWindow:o,eventHandler:c,containerRect:X,slideRects:Z,animation:xn,axis:K,direction:Y,dragHandler:I(K,Y,n,r,o,On,L(K,o),wn,xn,Ln,En,In,hn,c,_,R,V,q,.68,J),eventStore:An,percentOfView:_,index:hn,indexPrevious:yn,limit:mn,location:wn,offsetLocation:Sn,options:i,resizeHandler:D(t,c,o,e,K,U,Q),scrollBody:En,scrollBounds:A(mn,wn,On,En,_),scrollLooper:k(dn,mn,Sn,[wn,Sn,On]),scrollProgress:Dn,scrollSnapList:gn.map(Dn.get),scrollSnaps:gn,scrollTarget:In,scrollTo:Ln,slideLooper:P(K,Y,$,dn,rn,on,an,gn,Sn,e),slideFocus:Fn,slidesHandler:N(t,c,W),slidesInView:kn,slideIndexes:vn,slideRegistry:Mn,slidesToScroll:sn,target:On,translate:T(K,Y,t)};return Tn}const R={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function V(n){function t(n,t){return b(n,t||{})}const e={mergeOptions:t,optionsAtMedia:function(e){const r=e.breakpoints||{},o=x(r).filter((t=>n.matchMedia(t).matches)).map((n=>r[n])).reduce(((n,e)=>t(n,e)),{});return t(e,o)},optionsMediaQueries:function(t){return t.map((n=>x(n.breakpoints||{}))).reduce(((n,t)=>n.concat(t)),[]).map(n.matchMedia)}};return e}function B(n,t,e){const r=n.ownerDocument,o=r.defaultView,i=V(o),c=function(n){let t=[];return{init:function(e,r){return t=r.filter((t=>{let{options:e}=t;return!1!==n.optionsAtMedia(e).active})),t.forEach((t=>t.init(e,n))),r.reduce(((n,t)=>Object.assign(n,{[t.name]:t})),{})},destroy:function(){t=t.filter((n=>n.destroy()))}}}(i),u=E(),a=E(),l=function(){const n={};let t;function e(t){return n[t]||[]}const r={init:function(n){t=n},emit:function(n){return e(n).forEach((e=>e(t,n))),r},off:function(t,o){return n[t]=e(t).filter((n=>n!==o)),r},on:function(t,o){return n[t]=e(t).concat([o]),r}};return r}(),{animationRealms:f}=B,{mergeOptions:p,optionsAtMedia:g,optionsMediaQueries:m}=i,{on:h,off:y,emit:v}=l,x=F;let b,w,S,O,I=!1,L=p(R,B.globalOptions),D=p(L),A=[];function k(t,e){const i=H(n,S,O,r,o,t,l,e);if(t.loop&&!i.slideLooper.canLoop()){return k(Object.assign({},t,{loop:!1}),e)}return i}function M(t,e){if(I)return;const i=f.find((n=>n.window===o)),l=i||function(n){const t=1e3/60;let e=[],r=null,o=0,i=0;function c(u){r||(r=u);const s=u-r;for(r=u,o+=s;o>=t;)e.forEach((n=>{let{animation:t}=n;return t.update()})),o-=t;const a=d(o/t);e.forEach((n=>{let{animation:t}=n;return t.render(a)})),i&&n.requestAnimationFrame(c)}return{start:function(t){e.includes(t)||e.push(t),i||(i=n.requestAnimationFrame(c))},stop:function(t){e=e.filter((n=>n!==t)),e.length||(n.cancelAnimationFrame(i),r=null,o=0,i=0)},reset:function(){r=null,o=0},window:n}}(o);i||f.push(l),L=p(L,t),D=g(L),A=e||A,function(){const{container:t,slides:e}=D,r=s(t)?n.querySelector(t):t;S=r||n.children[0];const o=s(e)?S.querySelectorAll(e):e;O=[].slice.call(o||S.children)}(),b=k(D,l),m([L,...A.map((n=>{let{options:t}=n;return t}))]).forEach((n=>u.add(n,"change",F))),D.active&&(b.translate.to(b.location.get()),b.slidesInView.init(),b.slideFocus.init(),b.eventHandler.init(j),b.resizeHandler.init(j),b.slidesHandler.init(j),a.add(r,"visibilitychange",(()=>{r.hidden&&l.reset()})),b.options.loop&&b.slideLooper.loop(),S.offsetParent&&O.length&&b.dragHandler.init(j),w=c.init(j,A))}function F(n,t){const e=N();T(),M(p({startIndex:e},n),t),l.emit("reInit")}function T(){b.dragHandler.destroy(),b.animation.stop(),b.eventStore.clear(),b.translate.clear(),b.slideLooper.clear(),b.resizeHandler.destroy(),b.slidesHandler.destroy(),b.slidesInView.destroy(),c.destroy(),u.clear(),a.clear()}function P(n,t,e){D.active&&!I&&(b.scrollBody.useBaseFriction().useDuration(!0===t?0:D.duration),b.scrollTo.index(n,e||0))}function N(){return b.index.get()}const j={canScrollNext:function(){return b.index.add(1).get()!==N()},canScrollPrev:function(){return b.index.add(-1).get()!==N()},containerNode:function(){return S},internalEngine:function(){return b},destroy:function(){I||(I=!0,u.clear(),T(),l.emit("destroy"))},off:y,on:h,emit:v,plugins:function(){return w},previousScrollSnap:function(){return b.indexPrevious.get()},reInit:x,rootNode:function(){return n},scrollNext:function(n){P(b.index.add(1).get(),n,-1)},scrollPrev:function(n){P(b.index.add(-1).get(),n,1)},scrollProgress:function(){return b.scrollProgress.get(b.location.get())},scrollSnapList:function(){return b.scrollSnapList},scrollTo:P,selectedScrollSnap:N,slideNodes:function(){return O},slidesInView:function(){return b.slidesInView.get()},slidesNotInView:function(){return b.slidesInView.get(!1)}};return M(t,e),setTimeout((()=>l.emit("init")),0),j}function C(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const e=(0,r.useRef)(n),o=(0,r.useRef)(t),[u,s]=(0,r.useState)(),[a,l]=(0,r.useState)(),d=(0,r.useCallback)((()=>{u&&u.reInit(e.current,o.current)}),[u]);return(0,r.useEffect)((()=>{if("undefined"!==typeof window&&window.document&&window.document.createElement&&a){B.globalOptions=C.globalOptions;const n=B(a,e.current,o.current);return s(n),()=>n.destroy()}s(void 0)}),[a,s]),(0,r.useEffect)((()=>{i(e.current,n)||(e.current=n,d())}),[n,d]),(0,r.useEffect)((()=>{(function(n,t){if(n.length!==t.length)return!1;const e=c(n),r=c(t);return e.every(((n,t)=>i(n,r[t])))})(o.current,t)||(o.current=t,d())}),[t,d]),[l,u]}B.animationRealms=[],B.globalOptions=void 0,C.globalOptions=void 0}}]);
//# sourceMappingURL=954.78bcf4ab.chunk.js.map