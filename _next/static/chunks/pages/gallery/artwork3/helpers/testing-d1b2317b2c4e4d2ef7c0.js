_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{"17vn":function(t,e,r){"use strict";r.r(e),r.d(e,"testDescartes",(function(){return i})),r.d(e,"testAnimation",(function(){return c})),r.d(e,"testPopulate",(function(){return s}));var n=r("7a9l"),a=r.n(n),u=r("db+h"),o=r("MCwr");function i(){var t=function(){var t=new a.a(-60,0),e=new a.a(-3,40),r=new a.a(0,-33),n=Object(u.getCenter)(t,e,60),i=Object(u.getCenter)(e,r,80),c=Object(u.getCenter)(t,r,70),s=new o.default(60,n.left,0),f=new o.default(80,i.left,0),l=new o.default(70,c.right,0);return console.log("before return:",s.z,f.z,l.z),[s,f,l]}(),e=Object(u.descartes)(t);e.centers.forEach((function(r){e.curvatures.forEach((function(e){var n=new o.default(kToR(e),r,e>0?1:2);t.push(n)}))})),t.forEach((function(t){t.type<2?createSphere(t.r,t.z.re,0,t.z.im,10,!0):createShapeAlong2DPath(t,createSphere,!0,10,15)}))}function c(){var t=createSphere(60,-300,0,-300);animateOffscreenToCenter(t)}function s(t,e,r,n){e[0].push(createSphere(t,50,-150,300,-150,!0)),r[0].push(n.add({type:"sphere",size:[50,50,50],pos:[-150,300,-150],move:!0,world:n})),console.log("finished populate"),console.log("bodySets",r,"meshSets",e)}},"1OyB":function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return n}))},BsWD:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("a3WO");function a(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},MCwr:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return u}));var n=r("1OyB"),a=r("vuIU"),u=function(){function t(e,r,a){Object(n.a)(this,t),this.r=e,this.k=this.getK(this.r),this.z=r,this.type=a}return Object(a.a)(t,[{key:"getK",value:function(t){return 1/t}}]),t}()},ODXe:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("BsWD");function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,u=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(c){a=!0,u=c}finally{try{n||null==i.return||i.return()}finally{if(a)throw u}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},a3WO:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},aaRC:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery/artwork3/helpers/testing",function(){return r("17vn")}])},"db+h":function(t,e,r){"use strict";r.r(e),r.d(e,"kToR",(function(){return f})),r.d(e,"descartes",(function(){return l})),r.d(e,"getCenter",(function(){return c}));var n=r("ODXe"),a=r("7a9l"),u=r.n(a),o=!1;function i(t,e){var r=e.re*t,n=e.im*t;return new u.a({re:r,im:n})}function c(t,e,r){var n=.5*(e.re-t.re),a=.5*(e.im-t.im),o=t.re+n,i=t.im+a,c=Math.sqrt(Math.pow(n,2)+Math.pow(a,2)),s=Math.sqrt(Math.pow(r,2)-Math.pow(c,2)),f=o+s*a/c,l=i-s*n/c,d=o-s*a/c,h=i+s*n/c;return{right:new u.a(f,l),left:new u.a(d,h)}}function s(t){return 0===t}function f(t){return 1/t}function l(t){if(3===t.length){o;var e,r,a,c,f={curvatures:[],centers:[]},l=Object(n.a)(t,3);r=e=l[0],a=l[1],c=l[2];var d=e.z.re,h=e.z.im;r.z.re-=d,r.z.im-=h,a.z.re-=d,a.z.im-=h,c.z.re-=d,c.z.im-=h;var p=r.k+a.k+c.k,v=2*Math.sqrt(r.k*a.k+a.k*c.k+c.k*r.k),w=p-v,b=p+v,y=i(r.k,r.z),m=i(a.k,a.z),g=i(c.k,c.z),O=y.mul(m),k=m.mul(g),z=g.mul(y),j=O.add(k).add(z).sqrt(),S=y.add(m).add(g),_=i(2,j),C=S.sub(_),E=S.add(_),M=new u.a(d,h);if(!s(w)){C.div(w),E.div(w);f.curvatures.push(w)}if(!s(b)){var A=E.div(b);f.centers.push(A.add(M)),f.curvatures.push(b)}return f}console.log("descartes only accepts 3 circles")}},vuIU:function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",(function(){return a}))}},[["aaRC",0,8]]]);