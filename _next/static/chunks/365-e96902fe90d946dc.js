"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[365],{9365:function(e,t,n){n.d(t,{z:function(){return r}});var o=n(2212);const a={type:"change"},i={type:"start"},s={type:"end"};class r extends o.pBf{constructor(e,t){super(),void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new o.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o.RsA.ROTATE,MIDDLE:o.RsA.DOLLY,RIGHT:o.RsA.PAN},this.touches={ONE:o.QmN.ROTATE,TWO:o.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return m.phi},this.getAzimuthalAngle=function(){return m.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",Q),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(a),n.update(),c=r.NONE},this.update=function(){const t=new o.Pa4,i=(new o._fP).setFromUnitVectors(e.up,new o.Pa4(0,1,0)),s=i.clone().invert(),b=new o.Pa4,f=new o._fP,E=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(i),m.setFromVector3(t),n.autoRotate&&c===r.NONE&&L(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(m.theta+=p.theta*n.dampingFactor,m.phi+=p.phi*n.dampingFactor):(m.theta+=p.theta,m.phi+=p.phi);let o=n.minAzimuthAngle,g=n.maxAzimuthAngle;return isFinite(o)&&isFinite(g)&&(o<-Math.PI?o+=E:o>Math.PI&&(o-=E),g<-Math.PI?g+=E:g>Math.PI&&(g-=E),m.theta=o<=g?Math.max(o,Math.min(g,m.theta)):m.theta>(o+g)/2?Math.max(o,m.theta):Math.min(g,m.theta)),m.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,m.phi)),m.makeSafe(),m.radius*=u,m.radius=Math.max(n.minDistance,Math.min(n.maxDistance,m.radius)),!0===n.enableDamping?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),t.setFromSpherical(m),t.applyQuaternion(s),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(p.theta*=1-n.dampingFactor,p.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(p.set(0,0,0),d.set(0,0,0)),u=1,!!(h||b.distanceToSquared(n.object.position)>l||8*(1-f.dot(n.object.quaternion))>l)&&(n.dispatchEvent(a),b.copy(n.object.position),f.copy(n.object.quaternion),h=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",B),n.domElement.removeEventListener("pointerdown",X),n.domElement.removeEventListener("pointercancel",K),n.domElement.removeEventListener("wheel",V),n.domElement.removeEventListener("pointermove",Z),n.domElement.removeEventListener("pointerup",U),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",Q)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=r.NONE;const l=1e-6,m=new o.$V,p=new o.$V;let u=1;const d=new o.Pa4;let h=!1;const b=new o.FM8,f=new o.FM8,E=new o.FM8,g=new o.FM8,P=new o.FM8,y=new o.FM8,O=new o.FM8,T=new o.FM8,A=new o.FM8,N=[],v={};function w(){return Math.pow(.95,n.zoomSpeed)}function L(e){p.theta-=e}function M(e){p.phi-=e}const j=function(){const e=new o.Pa4;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),d.add(e)}}(),R=function(){const e=new o.Pa4;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),d.add(e)}}(),k=function(){const e=new o.Pa4;return function(t,o){const a=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let s=e.length();s*=Math.tan(n.object.fov/2*Math.PI/180),j(2*t*s/a.clientHeight,n.object.matrix),R(2*o*s/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(j(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),R(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(e){n.object.isPerspectiveCamera?u/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function x(e){n.object.isPerspectiveCamera?u*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(e){b.set(e.clientX,e.clientY)}function I(e){g.set(e.clientX,e.clientY)}function _(){if(1===N.length)b.set(N[0].pageX,N[0].pageY);else{const e=.5*(N[0].pageX+N[1].pageX),t=.5*(N[0].pageY+N[1].pageY);b.set(e,t)}}function C(){if(1===N.length)g.set(N[0].pageX,N[0].pageY);else{const e=.5*(N[0].pageX+N[1].pageX),t=.5*(N[0].pageY+N[1].pageY);g.set(e,t)}}function S(){const e=N[0].pageX-N[1].pageX,t=N[0].pageY-N[1].pageY,n=Math.sqrt(e*e+t*t);O.set(0,n)}function F(e){if(1==N.length)f.set(e.pageX,e.pageY);else{const t=q(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);f.set(n,o)}E.subVectors(f,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;L(2*Math.PI*E.x/t.clientHeight),M(2*Math.PI*E.y/t.clientHeight),b.copy(f)}function H(e){if(1===N.length)P.set(e.pageX,e.pageY);else{const t=q(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);P.set(n,o)}y.subVectors(P,g).multiplyScalar(n.panSpeed),k(y.x,y.y),g.copy(P)}function z(e){const t=q(e),o=e.pageX-t.x,a=e.pageY-t.y,i=Math.sqrt(o*o+a*a);T.set(0,i),A.set(0,Math.pow(T.y/O.y,n.zoomSpeed)),Y(A.y),O.copy(T)}function X(e){!1!==n.enabled&&(0===N.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",Z),n.domElement.addEventListener("pointerup",U)),function(e){N.push(e)}(e),"touch"===e.pointerType?function(e){switch(W(e),N.length){case 1:switch(n.touches.ONE){case o.QmN.ROTATE:if(!1===n.enableRotate)return;_(),c=r.TOUCH_ROTATE;break;case o.QmN.PAN:if(!1===n.enablePan)return;C(),c=r.TOUCH_PAN;break;default:c=r.NONE}break;case 2:switch(n.touches.TWO){case o.QmN.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&S(),n.enablePan&&C(),c=r.TOUCH_DOLLY_PAN;break;case o.QmN.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&S(),n.enableRotate&&_(),c=r.TOUCH_DOLLY_ROTATE;break;default:c=r.NONE}break;default:c=r.NONE}c!==r.NONE&&n.dispatchEvent(i)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case o.RsA.DOLLY:if(!1===n.enableZoom)return;!function(e){O.set(e.clientX,e.clientY)}(e),c=r.DOLLY;break;case o.RsA.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;I(e),c=r.PAN}else{if(!1===n.enableRotate)return;D(e),c=r.ROTATE}break;case o.RsA.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;D(e),c=r.ROTATE}else{if(!1===n.enablePan)return;I(e),c=r.PAN}break;default:c=r.NONE}c!==r.NONE&&n.dispatchEvent(i)}(e))}function Z(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(W(e),c){case r.TOUCH_ROTATE:if(!1===n.enableRotate)return;F(e),n.update();break;case r.TOUCH_PAN:if(!1===n.enablePan)return;H(e),n.update();break;case r.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&z(e),n.enablePan&&H(e)}(e),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&z(e),n.enableRotate&&F(e)}(e),n.update();break;default:c=r.NONE}}(e):function(e){if(!1===n.enabled)return;switch(c){case r.ROTATE:if(!1===n.enableRotate)return;!function(e){f.set(e.clientX,e.clientY),E.subVectors(f,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;L(2*Math.PI*E.x/t.clientHeight),M(2*Math.PI*E.y/t.clientHeight),b.copy(f),n.update()}(e);break;case r.DOLLY:if(!1===n.enableZoom)return;!function(e){T.set(e.clientX,e.clientY),A.subVectors(T,O),A.y>0?Y(w()):A.y<0&&x(w()),O.copy(T),n.update()}(e);break;case r.PAN:if(!1===n.enablePan)return;!function(e){P.set(e.clientX,e.clientY),y.subVectors(P,g).multiplyScalar(n.panSpeed),k(y.x,y.y),g.copy(P),n.update()}(e)}}(e))}function U(e){G(e),0===N.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",Z),n.domElement.removeEventListener("pointerup",U)),n.dispatchEvent(s),c=r.NONE}function K(e){G(e)}function V(e){!1!==n.enabled&&!1!==n.enableZoom&&c===r.NONE&&(e.preventDefault(),n.dispatchEvent(i),function(e){e.deltaY<0?x(w()):e.deltaY>0&&Y(w()),n.update()}(e),n.dispatchEvent(s))}function Q(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:k(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:k(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:k(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:k(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function B(e){!1!==n.enabled&&e.preventDefault()}function G(e){delete v[e.pointerId];for(let t=0;t<N.length;t++)if(N[t].pointerId==e.pointerId)return void N.splice(t,1)}function W(e){let t=v[e.pointerId];void 0===t&&(t=new o.FM8,v[e.pointerId]=t),t.set(e.pageX,e.pageY)}function q(e){const t=e.pointerId===N[0].pointerId?N[1]:N[0];return v[t.pointerId]}n.domElement.addEventListener("contextmenu",B),n.domElement.addEventListener("pointerdown",X),n.domElement.addEventListener("pointercancel",K),n.domElement.addEventListener("wheel",V,{passive:!1}),this.update()}}}}]);
//# sourceMappingURL=365-e96902fe90d946dc.js.map