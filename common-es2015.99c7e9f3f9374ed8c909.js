(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var o=e("A36C"),i=e("iWo5"),r=e("qULd");const c=(t,n)=>{let e,c;const s=(t,o,i)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,o);r&&n(r)?r!==e&&(l(),a(r,i)):l()},a=(t,n)=>{e=t,c||(c=e);const i=e;Object(o.f)(()=>i.classList.add("ion-activated")),n()},l=(t=!1)=>{if(!e)return;const n=e;Object(o.f)(()=>n.classList.remove("ion-activated")),t&&c!==e&&e.click(),e=void 0};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>s(t.currentX,t.currentY,r.a),onMove:t=>s(t.currentX,t.currentY,r.b),onEnd:()=>{l(!0),Object(r.e)(),c=void 0}})}},"723k":function(t,n,e){"use strict";e.r(n),e.d(n,"ProfilePageModule",(function(){return d}));var o=e("ofXK"),i=e("3Pt+"),r=e("TEn/"),c=e("tyNb"),s=e("uxLX"),a=e("fXoL");const l=[{path:"",component:s.a}];let u=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(n){return new(n||t)},imports:[[c.i.forChild(l)],c.i]}),t})(),d=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(n){return new(n||t)},imports:[[o.b,i.a,r.s,u]]}),t})()},"74mu":function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return s}));const o=(t,n)=>null!==n.closest(t),i=(t,n)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},n):n,r=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},c=/^[a-z][a-z0-9+\-.]*:/,s=async(t,n,e,o)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const i=document.querySelector("ion-router");if(i)return null!=n&&n.preventDefault(),i.push(t,e,o)}return!1}},ZaV5:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return i}));const o=async(t,n,e,o,i)=>{if(t)return t.attachViewToDom(n,e,i,o);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return o&&o.forEach(t=>r.classList.add(t)),i&&Object.assign(r,i),n.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},i=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},h3R7:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));const o={bubbles:{dur:1e3,circles:9,fn:(t,n,e)=>{const o=t*n/e-t+"ms",i=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(t,n,e)=>{const o=n/e,i=t*o-t+"ms",r=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,n)=>({r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,n,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,n,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})}}},qULd:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return s}));const o={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})},notification(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{o.selection()},r=()=>{o.selectionStart()},c=()=>{o.selectionChanged()},s=()=>{o.selectionEnd()},a=t=>{o.impact(t)}},uxLX:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e("fXoL"),i=e("TEn/");let r=(()=>{class t{constructor(t){this.modalController=t}ngOnInit(){}close(){this.modalController.dismiss()}}return t.\u0275fac=function(n){return new(n||t)(o.Hb(i.u))},t.\u0275cmp=o.Bb({type:t,selectors:[["app-profile"]],decls:30,vars:9,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","arrow-back"],["slot","end"],["slot","icon-only","name","ellipsis-vertical"],["id","profile-info"],["id","profile-image",3,"src"],["id","profile-description"],["id","profile-name"],[1,"ion-text-center","group-actions"],["slot","icon-only","name","chatbox","color","tertiary"],["slot","icon-only","name","call","color","warning"],["slot","icon-only","name","videocam","color","medium"],["slot","icon-only","name","navigate","color","danger"],["lines","none","id","about"],[1,"sub-title"],["id","about-description"]],template:function(t,n){1&t&&(o.Kb(0,"ion-header"),o.Kb(1,"ion-toolbar"),o.Kb(2,"ion-buttons",0),o.Kb(3,"ion-button",1),o.Sb("click",(function(){return n.close()})),o.Ib(4,"ion-icon",2),o.Jb(),o.Jb(),o.Kb(5,"ion-buttons",3),o.Ib(6,"ion-icon",4),o.Jb(),o.Jb(),o.Jb(),o.Kb(7,"ion-content"),o.Kb(8,"div",5),o.Ib(9,"img",6),o.Kb(10,"span",7),o.ec(11,"Cardiologist"),o.Jb(),o.Kb(12,"h3",8),o.ec(13,"Dr. Alan C Braverman"),o.Jb(),o.Kb(14,"div",9),o.Kb(15,"ion-button"),o.Ib(16,"ion-icon",10),o.Jb(),o.Kb(17,"ion-button"),o.Ib(18,"ion-icon",11),o.Jb(),o.Kb(19,"ion-button"),o.Ib(20,"ion-icon",12),o.Jb(),o.Kb(21,"ion-button"),o.Ib(22,"ion-icon",13),o.Jb(),o.Jb(),o.Jb(),o.Kb(23,"ion-item",14),o.Kb(24,"ion-label"),o.Kb(25,"div",15),o.Kb(26,"strong",0),o.ec(27,"About"),o.Jb(),o.Jb(),o.Kb(28,"p",16),o.ec(29,"Dr. Alan C. Braverman is a cardiologist in Saint Louis, Missouri and is addiliadted with multiple hospitals in the area. "),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&t&&(o.xb(9),o.Xb("src","https://avatars0.githubusercontent.com/u/12532889?s=400&u=758efee3e15b5e61f684a351fc82048426228f11&v=4",o.ac),o.xb(6),o.cc("--background","#5260ff29"),o.xb(2),o.cc("--background","#ffc40929"),o.xb(2),o.cc("--background","#BEC0C629"),o.xb(2),o.cc("--background","#eb445a29"))},directives:[i.f,i.r,i.d,i.c,i.g,i.e,i.j,i.k],styles:["ion-header[_ngcontent-%COMP%]{z-index:0}#profile-info[_ngcontent-%COMP%]{width:100%;z-index:2;text-align:center}#profile-image[_ngcontent-%COMP%]{display:block;border-radius:50px;width:170px;height:170px;margin:12px auto 45px}#profile-description[_ngcontent-%COMP%]{font-size:22px;color:#1b1818;font-weight:500}#profile-name[_ngcontent-%COMP%]{color:#444;font-size:26px;font-weight:700;margin-top:8px}#about[_ngcontent-%COMP%]{padding:16px}#about[_ngcontent-%COMP%]   #about-title[_ngcontent-%COMP%]{font-weight:700}#about[_ngcontent-%COMP%]   #about-description[_ngcontent-%COMP%]{white-space:pre-line;font-size:16px;color:rgba(68,68,68,.5215686274509804);font-weight:500}.sub-title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:26px;line-height:41px}.group-actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-radius:20px;height:55px;margin:10px;--box-shadow:none}"]}),t})()}}]);