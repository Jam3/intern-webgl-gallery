"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45],{3045:function(e,n,o){o.r(n);var i=o(8520),t=o.n(i),a=o(5893),r=o(7294),s=o(7637),l=o(2212),d=o(8606),c=o(4458),v=o(8377);function w(e,n,o,i,t,a,r){try{var s=e[a](r),l=s.value}catch(d){return void o(d)}s.done?n(l):Promise.resolve(l).then(i,t)}n.default=function(){var e=(0,r.useRef)(null),n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useEffect)((function(){var i=.54,a=n.current,r=o.current,u=new l.xsS,p=new l.CP7({antialias:!0});p.setPixelRatio(window.devicePixelRatio),p.setSize(window.innerWidth,window.innerHeight),p.shadowMap.enabled=!0,p.shadowMapSoft=!0,p.shadowMap.type=l.ntZ;var h=new l.cPb(75,window.innerWidth/window.innerHeight,.01,100);h.position.z=1.566,h.position.y=.81,h.lookAt(new l.Pa4(0,0,0)),h.layers.enable(1);var m,f,g=new l.PMe(30630,2);g.position.set(-10,150,-10),g.distance=1700,g.power=10,g.castShadow=!0,g.shadow.bias=.001,g.shadow.radius=1,g.shadow.mapSize.width=4096,g.shadow.mapSize.height=4096,u.add(g),(f=t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0});case 2:m=e.sent,a.srcObject=m;case 4:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(o,i){var t=f.apply(e,n);function a(e){w(t,o,i,a,r,"next",e)}function r(e){w(t,o,i,a,r,"throw",e)}a(void 0)}))})();var y=r.getContext("2d");y.fillStyle="#000000",y.fillRect(0,0,r.width,r.height),y.scale(.5,1);var x=new l.xEZ(r),S=new l.jyz({uniforms:{webcam:{type:"t",value:x}},fragmentShader:"\n          uniform sampler2D webcam;\n          varying vec2 vUv;\n\n          void main()\n          {\n              vec3 col = texture2D(webcam, vUv).rgb;\n\n              vec3 blue = col * vec3(0.282,0.663,0.78);\n\n              // Output to screen\n              gl_FragColor = vec4(blue, 1.0);\n          }\n          ",vertexShader:"varying vec2 vUv;\n          void main() {\n              vUv = uv;\n                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n              }"}),C=new l.jyz({uniforms:{c:{type:"f",value:.3},p:{type:"f",value:2},glowColor:{type:"c",value:new l.Ilk(2263220)},viewVector:{type:"v3",value:h.position}},fragmentShader:"\n      uniform vec3 glowColor;\n      varying float intensity;\n      void main() \n      {\n        vec3 glow = glowColor * intensity;\n          gl_FragColor = vec4( glow, 1.0 );\n      }\n      ",vertexShader:"\n      uniform vec3 viewVector;\n      uniform float c;\n      uniform float p;\n      varying float intensity;\n      void main() \n      {\n        vec3 vNormal = normalize( normalMatrix * normal );\n        vec3 vNormel = normalize( normalMatrix * viewVector );\n        intensity = pow( c - dot(vNormal, vNormel), p );\n        \n          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n      }\n      ",side:l.Wl3,blending:l.WMw,transparent:!0}),b=new l.Kj0(new l.xo$(i,64,64),S);b.castShadow=!1,b.receiveShadow=!1,u.add(b),b.position.y=.1,b.layers.set(0);var P=new l.Kj0(new l.xo$(i,64,64),C);u.add(P),P.position.y=.1,P.scale.multiplyScalar(1.2),P.layers.set(0);var j=new l.Tn7;j.opacity=.5,j.dithering=!0,j.ditheringshadowSide=l.ehD;var M=new l.Kj0(new l.xo$(i,64,64),j);M.castShadow=!0,M.receiveShadow=!1,M.position.y=.1,M.layers.set(0),u.add(M);var z=new l.BKK(1e3,1e3),_=new l.Kj0(z,new l.xoR({color:983040}));_.position.y=-.54,_.position.x=0,_.position.z=0,_.rotation.x=Math.PI/-2,_.castShadow=!1,_.receiveShadow=!0,_.layers.set(0),u.add(_);var E=new c.C(u,h),k=new d.xC(p);k.setSize(window.innerWidth,window.innerHeight),k.addPass(E);var R=new s.ZP,N=R.addFolder("Glow Shader Controls"),U={c:.3,p:2,color:"#2288b4"};N.add(U,"c").min(0).max(1).step(.01).name("c").listen().onChange((function(e){C.uniforms.c.value=U.c})),N.add(U,"p").min(0).max(6).step(.01).name("p").listen().onChange((function(e){C.uniforms.p.value=U.p})),N.addColor(U,"color").name("Glow Color").listen().onChange((function(e){C.uniforms.glowColor.value.setHex(e.replace("#","0x"))})),N.open(),e.current.append(p.domElement),function e(){a.readyState===a.HAVE_ENOUGH_DATA&&(y.clearRect(0,0,r.width,r.height),y.drawImage(a,0,0,K,H),x&&(x.needsUpdate=!0));requestAnimationFrame(e),k.render()}();var H=r.height,K=r.width;return function(){(0,v.Z)(e.renderer,e),m.getTracks().forEach((function(e){e.stop()})),R.destroy()}}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{ref:e}),(0,a.jsx)("video",{autoPlay:!0,ref:n,id:"videoElement",style:{display:"none"}}),(0,a.jsx)("canvas",{height:"1000",width:"1000",ref:o,id:"videoImage",style:{display:"none"}})]})}},8377:function(e,n,o){function i(e,n){if(null!==e&&void 0!==e){if(n&&n.remove(e),e.dispose&&e.dispose(),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose(),e.children)for(var o=0,t=e.children.length;o<t;)i(e.children[0],e),o++;"Scene"===e.type&&e.dispose(),e=null,console.log("disposing")}}o.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=45.32398d0cb1d42641.js.map