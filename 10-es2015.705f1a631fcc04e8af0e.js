(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"99Un":function(t,n,o){"use strict";o.r(n),o.d(n,"HomePageModule",(function(){return f}));var e=o("ofXK"),i=o("TEn/"),r=o("3Pt+"),a=o("tyNb"),c=o("mrSG"),s=o("uxLX"),b=o("fXoL");function l(t,n){if(1&t&&(b.Kb(0,"ion-slide"),b.Kb(1,"div",15),b.Ib(2,"ion-ripple-effect"),b.Ib(3,"ion-icon",16),b.Kb(4,"span"),b.Kb(5,"strong"),b.ec(6),b.Jb(),b.Jb(),b.Jb(),b.Jb()),2&t){const t=n.$implicit;b.xb(1),b.cc("background",t.bkColor)("color",t.color),b.xb(2),b.Xb("name",t.icon),b.xb(3),b.fc(" ",t.name," ")}}function p(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-item",17),b.Sb("click",(function(){return b.Zb(t),b.Ub().openProfile()})),b.Ib(1,"ion-ripple-effect"),b.Kb(2,"ion-thumbnail",1),b.Ib(3,"ion-img",18),b.Jb(),b.Kb(4,"ion-label",19),b.Kb(5,"p"),b.ec(6),b.Jb(),b.Kb(7,"ion-text"),b.Kb(8,"h3"),b.Kb(9,"strong"),b.ec(10),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Ib(11,"ion-icon",20),b.Jb()}if(2&t){const t=n.$implicit;b.xb(3),b.Xb("src",t.avatar),b.xb(3),b.fc(" ",t.specialty," "),b.xb(4),b.fc(" ",t.name," ")}}const u=[{path:"",component:(()=>{class t{constructor(t){this.modalController=t,this.slideOpts={initialSlide:0,slidesPerView:3.3},this.doctors=[{avatar:"https://avatars0.githubusercontent.com/u/12532889?s=400&u=758efee3e15b5e61f684a351fc82048426228f11&v=4",specialty:"Cardiologist",name:"Dr. Alan C Braverman",status:!0},{avatar:"https://avatars0.githubusercontent.com/u/12532889?s=400&u=758efee3e15b5e61f684a351fc82048426228f11&v=4",specialty:"Orthodontist",name:"Dr. Michael Aaron",status:!1},{avatar:"https://avatars0.githubusercontent.com/u/12532889?s=400&u=758efee3e15b5e61f684a351fc82048426228f11&v=4",specialty:"Eye Specialist",name:"Dr. Shelley Rahman",status:!1},{avatar:"https://avatars0.githubusercontent.com/u/12532889?s=400&u=758efee3e15b5e61f684a351fc82048426228f11&v=4",specialty:"Orthodontist",name:"Dr. Michael Aaron",status:!1},{avatar:"https://avatars0.githubusercontent.com/u/12532889?s=400&u=758efee3e15b5e61f684a351fc82048426228f11&v=4",specialty:"Eye Specialist",name:"Dr. Shelley Rahman",status:!1}],this.categories=[{name:"Heart",bkColor:"#008aff",color:"white",icon:"heart-outline"},{name:"Brain",bkColor:"#a2c3f7",color:"black",icon:"skull-outline"},{name:"Kidney",bkColor:"#f7be3021",color:"black",icon:"heart-outline"},{name:"Brain",bkColor:"#a2c3f7",color:"black",icon:"skull-outline"},{name:"Kidney",bkColor:"#f7be3021",color:"black",icon:"heart-outline"}]}openProfile(){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:s.a});yield t.present()}))}}return t.\u0275fac=function(n){return new(n||t)(b.Hb(i.u))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-home"]],decls:27,vars:3,consts:[[1,"ion-no-border"],["slot","start"],["slot","icon-only","name","menu"],["lines","none",1,"header"],["slot","end"],["src","https://avatars0.githubusercontent.com/u/12532889?s=400&u=758efee3e15b5e61f684a351fc82048426228f11&v=4"],["lines","none",1,"search"],["placeholder","Search, e.g. Dr.Louis Pasterur"],["color","tertiary"],["name","search-outline","slot","icon-only"],[1,"sub-title"],["pager","false",3,"options"],[4,"ngFor","ngForOf"],[1,"list-doctors"],["lines","none","class","ion-activatable ripple-parent",3,"click",4,"ngFor","ngForOf"],[1,"card-categories","ion-activatable","ripple-parent"],[3,"name"],["lines","none",1,"ion-activatable","ripple-parent",3,"click"],[3,"src"],[1,"ion-text-wrap"],["name","ellipsis-vertical-outline","size","small","slot","end"]],template:function(t,n){1&t&&(b.Kb(0,"ion-header",0),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-buttons",1),b.Kb(3,"ion-button"),b.Ib(4,"ion-icon",2),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Kb(5,"ion-content"),b.Kb(6,"ion-item",3),b.Kb(7,"strong",1),b.ec(8,"Doctor "),b.Ib(9,"br"),b.ec(10," Appointment"),b.Jb(),b.Kb(11,"ion-avatar",4),b.Ib(12,"img",5),b.Jb(),b.Jb(),b.Kb(13,"ion-item",6),b.Kb(14,"ion-input",7),b.Kb(15,"ion-button",8),b.Ib(16,"ion-icon",9),b.Jb(),b.Jb(),b.Jb(),b.Kb(17,"div",10),b.Kb(18,"strong",1),b.ec(19,"Categories"),b.Jb(),b.Jb(),b.Kb(20,"ion-slides",11),b.dc(21,l,7,6,"ion-slide",12),b.Jb(),b.Kb(22,"div",10),b.Kb(23,"strong",1),b.ec(24,"Top Doctors"),b.Jb(),b.Jb(),b.Kb(25,"div",13),b.dc(26,p,12,3,"ion-item",14),b.Jb(),b.Jb()),2&t&&(b.xb(20),b.Xb("options",n.slideOpts),b.xb(1),b.Xb("ngForOf",n.categories),b.xb(5),b.Xb("ngForOf",n.doctors))},directives:[i.f,i.r,i.d,i.c,i.g,i.e,i.j,i.b,i.i,i.w,i.o,e.h,i.n,i.l,i.q,i.h,i.k,i.p],styles:[".header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:28px;line-height:36px}.header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{--border-radius:10px;width:50px;height:50px}.sub-title[_ngcontent-%COMP%]{padding:16px}.sub-title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:18px;line-height:36px}.search[_ngcontent-%COMP%]{margin-top:40px;display:flex}.search[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{background:var(--ion-color-light);border-radius:10px;height:45px;--padding-start:16px;font-size:12px}.search[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:45px;width:50px;--border-radius:30px 10px 10px 10px;order:1}.list-doctors[_ngcontent-%COMP%]{padding:16px}.list-doctors[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{width:20px;background:green}.list-doctors[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--border-radius:10px}.list-doctors[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:var(--ion-color-light);--border-radius:10px;margin-bottom:8px}.list-doctors[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:first-child{--background:rgba(247,190,48,0.12941176470588237);opacity:none;opacity:1}.card-categories[_ngcontent-%COMP%]{padding:16px;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:center;background:var(--ion-color-light);border-radius:10px;color:#fff;width:110px;opacity:.8}.card-categories[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:40px;margin-bottom:8px}"]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(n){return new(n||t)},imports:[[a.i.forChild(u)],a.i]}),t})();var g=o("723k");let f=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(n){return new(n||t)},imports:[[e.b,r.a,i.s,d,g.ProfilePageModule]]}),t})()}}]);