(function(a){function e(e){for(var t,o,r=e[0],n=e[1],c=e[2],b=0,m=[];b<r.length;b++)o=r[b],s[o]&&m.push(s[o][0]),s[o]=0;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),l()}function l(){for(var a,e=0;e<i.length;e++){for(var l=i[e],t=!0,r=1;r<l.length;r++){var n=l[r];0!==s[n]&&(t=!1)}t&&(i.splice(e--,1),a=o(o.s=l[0]))}return a}var t={},s={app:0},i=[];function o(e){if(t[e])return t[e].exports;var l=t[e]={i:e,l:!1,exports:{}};return a[e].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=a,o.c=t,o.d=function(a,e,l){o.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:l})},o.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,e){if(1&e&&(a=o(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var t in a)o.d(l,t,function(e){return a[e]}.bind(null,t));return l},o.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return o.d(e,"a",e),e},o.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},o.p="/vuejs-register-app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=n;i.push([0,"chunk-vendors"]),l()})({0:function(a,e,l){a.exports=l("56d7")},"034f":function(a,e,l){"use strict";var t=l("64a9"),s=l.n(t);s.a},2420:function(a,e,l){},"56d7":function(a,e,l){"use strict";l.r(e);l("cadf"),l("551c"),l("f751"),l("097d");var t=l("2b0e"),s=function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("div",{attrs:{id:"app"}},[l("FormRegister"),l("b-alert",{staticClass:"text-center w-100 mb-0 footer",attrs:{show:""}},[l("a",{attrs:{target:"_blank",href:"https://gericyber.github.io/Portafolio/"}},[a._v("[  gericyber;  ]")])])],1)},i=[],o=function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("div",[l("div",{staticClass:"container pb-5"},[l("b-alert",{staticClass:"text-center",attrs:{show:""}},[l("h3",{staticClass:"title"},[a._v(a._s(a.title))])]),l("p",{staticClass:"text-center text-muted subtitle"},[a._v("FORMULARIO DE CONTACTO")]),l("div",{staticClass:"mt-3 mb-5"},[l("b-card",{attrs:{"no-body":""}},[l("form",{attrs:{novalidate:""}},[l("b-tabs",{attrs:{card:""},model:{value:a.tabIndex,callback:function(e){a.tabIndex=e},expression:"tabIndex"}},[l("b-tab",{attrs:{title:"Datos Personales","title-link-class":"text-info"}},[l("div",{staticClass:"row mt-3"},[l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"name",label:"Nombre: *","label-for":"name","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{class:{"is-invalid":a.hasErrorName},attrs:{id:"name",trim:""},model:{value:a.data.name,callback:function(e){a.$set(a.data,"name",e)},expression:"data.name"}}),l("div",{staticClass:"invalid-feedback",class:{invalid:a.hasErrorName}},[a._v("\n                        Nombre requerido\n                    ")])],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"lastName",label:"Apellido:","label-for":"lastName","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{id:"lastName",trim:""},model:{value:a.data.lastName,callback:function(e){a.$set(a.data,"lastName",e)},expression:"data.lastName"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"country",label:"Pais: *","label-for":"country","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{class:{"is-invalid":a.hasErrorCountry},attrs:{id:"country",trim:""},model:{value:a.data.country,callback:function(e){a.$set(a.data,"country",e)},expression:"data.country"}}),l("div",{staticClass:"invalid-feedback",class:{invalid:a.hasErrorCountry}},[a._v("\n                        Pais requerido\n                    ")])],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"nacionality",label:"Nacionalidad: *","label-for":"nacionality","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{class:{"is-invalid":a.hasErrorNacionality},attrs:{id:"nacionality",trim:""},model:{value:a.data.nacionality,callback:function(e){a.$set(a.data,"nacionality",e)},expression:"data.nacionality"}}),l("div",{staticClass:"invalid-feedback",class:{invalid:a.hasErrorNacionality}},[a._v("\n                        Nacionalidad requerida\n                    ")])],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"province",label:"Provincia:","label-for":"province","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{id:"province",trim:""},model:{value:a.data.province,callback:function(e){a.$set(a.data,"province",e)},expression:"data.province"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"city",label:"Cuidad:","label-for":"city","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{id:"city",trim:""},model:{value:a.data.city,callback:function(e){a.$set(a.data,"city",e)},expression:"data.city"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"postalCode",label:"Código Postal:","label-for":"postalCode","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{id:"postalCode",trim:""},model:{value:a.data.postalCode,callback:function(e){a.$set(a.data,"postalCode",e)},expression:"data.postalCode"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"address",label:"Dirección:","label-for":"address","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{id:"address",trim:""},model:{value:a.data.address,callback:function(e){a.$set(a.data,"address",e)},expression:"data.address"}})],1)],1),l("div",{staticClass:"col-md-6 offset-md-6"},[l("b-form-group",{attrs:{id:"age",label:"Edad: *","label-for":"age","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{class:{"is-invalid":a.hasErrorAge},attrs:{type:"number",id:"age",min:"1",max:"100",trim:""},model:{value:a.data.age,callback:function(e){a.$set(a.data,"age",e)},expression:"data.age"}}),l("div",{staticClass:"invalid-feedback",class:{invalid:a.hasErrorAge}},[a._v("\n                        Edad requerida\n                    ")])],1)],1),l("div",{staticClass:"col-md-6 text-left"},[l("b-form-group",{attrs:{id:"car",label:"Coche:","label-for":"car","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-radio-group",{attrs:{options:a.options,buttons:"","button-variant":"outline-info",id:"car",name:"car"},model:{value:a.data.car,callback:function(e){a.$set(a.data,"car",e)},expression:"data.car"}})],1)],1),l("div",{staticClass:"col-md-6 text-left"},[l("b-form-group",{attrs:{id:"driver",label:"Sabe conducir:","label-for":"driver","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-radio-group",{attrs:{options:a.options,buttons:"","button-variant":"outline-info",id:"driver",name:"driver"},model:{value:a.data.driver,callback:function(e){a.$set(a.data,"driver",e)},expression:"data.driver"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"workPosition",label:"Puesto en el que desea trabajar:","label-for":"workPosition","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{id:"workPosition",trim:""},model:{value:a.data.workPosition,callback:function(e){a.$set(a.data,"workPosition",e)},expression:"data.workPosition"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"salary",label:"Expectativa salarial:","label-for":"salary","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{id:"salary",trim:""},model:{value:a.data.salary,callback:function(e){a.$set(a.data,"salary",e)},expression:"data.salary"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"familyStatus",label:"Situación familiar:","label-for":"familyStatus","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{id:"familyStatus",trim:""},model:{value:a.data.familyStatus,callback:function(e){a.$set(a.data,"familyStatus",e)},expression:"data.familyStatus"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"kids",label:"Número de hijos:","label-for":"kids","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{type:"number",id:"kids",min:"0",max:"100",trim:""},model:{value:a.data.kids,callback:function(e){a.$set(a.data,"kids",e)},expression:"data.kids"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"email",label:"Correo electrónico: *","label-for":"email","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{class:{"is-invalid":a.hasErrorEmail},attrs:{type:"email",id:"email",trim:""},model:{value:a.data.email,callback:function(e){a.$set(a.data,"email",e)},expression:"data.email"}}),l("div",{staticClass:"invalid-feedback",class:{invalid:a.hasErrorEmail}},[a._v("\n                        Email valido requerido\n                    ")])],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"alternativeEmail",label:"Correo electrónico alternativo:","label-for":"alternativeEmail","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{type:"email",id:"alternativeEmail",trim:""},model:{value:a.data.alternativeEmail,callback:function(e){a.$set(a.data,"alternativeEmail",e)},expression:"data.alternativeEmail"}})],1)],1)])]),l("b-tab",{attrs:{title:"Datos de Contacto","title-link-class":"text-info"}},[l("div",{staticClass:"row mt-3"},[l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"skype",label:"Skype:","label-for":"skype","label-cols-sm":"4","label-cols-lg":"4","label-align":"left"}},[l("b-form-input",{attrs:{id:"skype",trim:""},model:{value:a.data.skype,callback:function(e){a.$set(a.data,"skype",e)},expression:"data.skype"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"phone",label:"Teléfono movil (cod. pais + numero)","label-for":"phone","label-cols-sm":"4","label-cols-lg":"4","label-align":"left"}},[l("b-form-input",{attrs:{type:"number",min:"1",id:"phone",trim:""},model:{value:a.data.phone,callback:function(e){a.$set(a.data,"phone",e)},expression:"data.phone"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"phoneHome",label:"Teléfono de casa (cod. pais + numero)","label-for":"phoneHome","label-cols-sm":"4","label-cols-lg":"4","label-align":"left"}},[l("b-form-input",{attrs:{type:"number",min:"1",id:"phoneHome",trim:""},model:{value:a.data.phoneHome,callback:function(e){a.$set(a.data,"phoneHome",e)},expression:"data.phoneHome"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"phoneOffice",label:"Teléfono de oficina (cod. pais + numero)","label-for":"phoneOffice","label-cols-sm":"4","label-cols-lg":"4","label-align":"left"}},[l("b-form-input",{attrs:{type:"number",min:"1",id:"phoneOffice",trim:""},model:{value:a.data.phoneOffice,callback:function(e){a.$set(a.data,"phoneOffice",e)},expression:"data.phoneOffice"}})],1)],1)])]),l("b-tab",{attrs:{title:"Datos de Formación","title-link-class":"text-info"}},[l("div",{staticClass:"row mt-3"},[l("div",{staticClass:"col-md-12"},[l("b-form-group",{attrs:{id:"academicLevel",label:"Nivel académico que posee:","label-for":"academicLevel","label-cols-sm":"6","label-cols-lg":"6","label-align":"left"}},[l("b-form-input",{attrs:{id:"academicLevel",trim:""},model:{value:a.data.academicLevel,callback:function(e){a.$set(a.data,"academicLevel",e)},expression:"data.academicLevel"}})],1)],1),l("div",{staticClass:"col-md-12"},[l("b-form-group",{attrs:{id:"universityLevel",label:"Titulo Universitario o título que posee:","label-for":"universityLevel","label-cols-sm":"6","label-cols-lg":"6","label-align":"left"}},[l("b-form-input",{attrs:{id:"universityLevel",trim:""},model:{value:a.data.universityLevel,callback:function(e){a.$set(a.data,"universityLevel",e)},expression:"data.universityLevel"}})],1)],1),l("div",{staticClass:"col-md-12"},[l("b-form-group",{attrs:{id:"englishLevel",label:"Indique de 0 a 100 nivel de inglés que posee:","label-for":"englishLevel","label-cols-sm":"6","label-cols-lg":"6","label-align":"left"}},[l("b-form-input",{attrs:{type:"number",min:"0",id:"englishLevel",trim:""},model:{value:a.data.englishLevel,callback:function(e){a.$set(a.data,"englishLevel",e)},expression:"data.englishLevel"}})],1)],1),l("div",{staticClass:"col-md-12"},[l("b-form-group",{attrs:{id:"otherLanguage",label:"Indique de 0 a 100 otro idioma que domine:","label-for":"otherLanguage","label-cols-sm":"6","label-cols-lg":"6","label-align":"left"}},[l("b-form-input",{attrs:{type:"number",min:"0",id:"otherLanguage",trim:""},model:{value:a.data.otherLanguage,callback:function(e){a.$set(a.data,"otherLanguage",e)},expression:"data.otherLanguage"}})],1)],1),l("div",{staticClass:"col-md-12"},[l("b-form-group",{attrs:{id:"excelLevel",label:"Indique de 0 a 100 conocimiento de hoja de calculo (Excel, Google)","label-for":"excelLevel","label-cols-sm":"6","label-cols-lg":"6","label-align":"left"}},[l("b-form-input",{attrs:{type:"number",min:"0",id:"excelLevel",trim:""},model:{value:a.data.excelLevel,callback:function(e){a.$set(a.data,"excelLevel",e)},expression:"data.excelLevel"}})],1)],1),l("div",{staticClass:"col-md-12"},[l("b-form-group",{attrs:{id:"wordLevel",label:"Indique de 0 a 100 conocimiento de procesadores de texto (word)","label-for":"wordLevel","label-cols-sm":"6","label-cols-lg":"6","label-align":"left"}},[l("b-form-input",{attrs:{type:"number",min:"0",id:"wordLevel",trim:""},model:{value:a.data.wordLevel,callback:function(e){a.$set(a.data,"wordLevel",e)},expression:"data.wordLevel"}})],1)],1),l("div",{staticClass:"col-md-12"},[l("b-form-group",{attrs:{id:"googleLevel",label:"Indique de 0 a 100 conocimiento herramientas de google (drive, maps, gmail, busqueda)","label-for":"googleLevel","label-cols-sm":"6","label-cols-lg":"6","label-align":"left"}},[l("b-form-input",{attrs:{type:"number",min:"0",id:"googleLevel",trim:""},model:{value:a.data.googleLevel,callback:function(e){a.$set(a.data,"googleLevel",e)},expression:"data.googleLevel"}})],1)],1)])]),l("b-tab",{attrs:{title:"Datos Técnicos","title-link-class":"text-info"}},[l("h6",{staticClass:"text-center text-danger font-weight-bold mt-3"},[a._v("\n              SOLO PARA CALLCENTER DESDE CASA LATINOAMERICA")]),l("div",{staticClass:"row mt-5"},[l("div",{staticClass:"col-md-12"},[l("b-form-group",{attrs:{id:"internet",label:"Tipo de internet que posee (Residencial, Movil):","label-for":"internet","label-cols-sm":"6","label-cols-lg":"5","label-align":"left"}},[l("b-form-input",{attrs:{id:"internet",trim:""},model:{value:a.data.internet,callback:function(e){a.$set(a.data,"internet",e)},expression:"data.internet"}})],1)],1),l("div",{staticClass:"col-md-12"},[l("b-form-group",{attrs:{id:"internetVelocity",label:"Velocidad de internet:","label-for":"internetVelocity","label-cols-sm":"6","label-cols-lg":"5","label-align":"left"}},[l("b-form-input",{attrs:{id:"internetVelocity",trim:""},model:{value:a.data.internetVelocity,callback:function(e){a.$set(a.data,"internetVelocity",e)},expression:"data.internetVelocity"}})],1)],1),l("div",{staticClass:"col-md-12"},[l("b-form-group",{attrs:{id:"pc",label:"Tipo de computadora (de escritorio, laptop 15.6, minilaptop)","label-for":"pc","label-cols-sm":"6","label-cols-lg":"5","label-align":"left"}},[l("b-form-input",{attrs:{id:"pc",trim:""},model:{value:a.data.pc,callback:function(e){a.$set(a.data,"pc",e)},expression:"data.pc"}})],1)],1),l("div",{staticClass:"col-md-12"},[l("b-form-group",{attrs:{id:"pcDescription",label:"Breve descripción de los componentes de su computadora:","label-for":"pcDescription","label-cols-sm":"6","label-cols-lg":"5","label-align":"left"}},[l("b-form-input",{attrs:{id:"pcDescription",trim:""},model:{value:a.data.pcDescription,callback:function(e){a.$set(a.data,"pcDescription",e)},expression:"data.pcDescription"}})],1)],1),l("div",{staticClass:"col-md-5 text-left"},[l("b-form-group",{attrs:{id:"mouse",label:"Posee mouse físico:","label-for":"mouse","label-cols-sm":"6","label-cols-lg":"8","label-align":"left"}},[l("b-form-radio-group",{attrs:{options:a.options,buttons:"","button-variant":"outline-info",id:"mouse",name:"mouse"},model:{value:a.data.mouse,callback:function(e){a.$set(a.data,"mouse",e)},expression:"data.mouse"}})],1)],1),l("div",{staticClass:"col-md-7 text-left"},[l("b-form-group",{attrs:{id:"keyboard",label:"Posee teclado extendido (es el que tiene el panel numérico a la derecha)","label-for":"keyboard","label-cols-sm":"6","label-cols-lg":"10","label-align":"left"}},[l("b-form-radio-group",{attrs:{options:a.options,buttons:"","button-variant":"outline-info",id:"keyboard",name:"keyboard"},model:{value:a.data.keyboard,callback:function(e){a.$set(a.data,"keyboard",e)},expression:"data.keyboard"}})],1)],1),l("div",{staticClass:"col-md-12"},[l("b-form-group",{attrs:{id:"internetCompany",label:"Compañia que le proporciona el internet:","label-for":"internetCompany","label-cols-sm":"6","label-cols-lg":"5","label-align":"left"}},[l("b-form-input",{attrs:{id:"internetCompany",trim:""},model:{value:a.data.internetCompany,callback:function(e){a.$set(a.data,"internetCompany",e)},expression:"data.internetCompany"}})],1)],1),l("div",{staticClass:"col-md-12"},[l("b-form-group",{attrs:{id:"placeDescription",label:"Descripción del lugar donde trabajará:","label-for":"placeDescription","label-cols-sm":"6","label-cols-lg":"5","label-align":"left"}},[l("b-form-input",{attrs:{id:"placeDescription",trim:""},model:{value:a.data.placeDescription,callback:function(e){a.$set(a.data,"placeDescription",e)},expression:"data.placeDescription"}})],1)],1),l("div",{staticClass:"col-md-12"},[l("b-form-group",{attrs:{id:"stability",label:"Estabilidad domiciliaria:","label-for":"stability","label-cols-sm":"6","label-cols-lg":"5","label-align":"left"}},[l("b-form-input",{attrs:{id:"stability",trim:""},model:{value:a.data.stability,callback:function(e){a.$set(a.data,"stability",e)},expression:"data.stability"}})],1)],1)])]),l("b-tab",{attrs:{title:"Referencias Laborables","title-link-class":"text-info"}},[l("div",{staticClass:"row mt-3"},[l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"firstExperience",label:"Experiencia laboral 1:","label-for":"firstExperience","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{id:"firstExperience",trim:""},model:{value:a.data.firstExperience,callback:function(e){a.$set(a.data,"firstExperience",e)},expression:"data.firstExperience"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"firstYears",label:"Años de duración:","label-for":"firstYears","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{type:"number",min:"0",id:"firstYears",trim:""},model:{value:a.data.firstYears,callback:function(e){a.$set(a.data,"firstYears",e)},expression:"data.firstYears"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"firstBoss",label:"Jefe inmediato:","label-for":"firstBoss","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{id:"firstBoss",trim:""},model:{value:a.data.firstBoss,callback:function(e){a.$set(a.data,"firstBoss",e)},expression:"data.firstBoss"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"firstBossPhone",label:" Teléfono:","label-for":"firstBossPhone","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{type:"number",min:"1",id:"firstBossPhone",trim:""},model:{value:a.data.firstBossPhone,callback:function(e){a.$set(a.data,"firstBossPhone",e)},expression:"data.firstBossPhone"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"secondExperience",label:"Experiencia laboral 2:","label-for":"secondExperience","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{id:"secondExperience",trim:""},model:{value:a.data.secondExperience,callback:function(e){a.$set(a.data,"secondExperience",e)},expression:"data.secondExperience"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"secondYears",label:"Años de duración:","label-for":"secondYears","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{type:"number",min:"0",id:"secondYears",trim:""},model:{value:a.data.secondYears,callback:function(e){a.$set(a.data,"secondYears",e)},expression:"data.secondYears"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"secondBoss",label:"Jefe inmediato:","label-for":"secondBoss","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{id:"secondBoss",trim:""},model:{value:a.data.secondBoss,callback:function(e){a.$set(a.data,"secondBoss",e)},expression:"data.secondBoss"}})],1)],1),l("div",{staticClass:"col-md-6"},[l("b-form-group",{attrs:{id:"secondBossPhone",label:" Teléfono:","label-for":"secondBossPhone","label-cols-sm":"4","label-cols-lg":"3","label-align":"left"}},[l("b-form-input",{attrs:{type:"number",min:"1",id:"secondBossPhone",trim:""},model:{value:a.data.secondBossPhone,callback:function(e){a.$set(a.data,"secondBossPhone",e)},expression:"data.secondBossPhone"}})],1)],1)])])],1)],1),l("div",{staticClass:"mb-2 text-center"},[l("b-button",{attrs:{variant:"info"},on:{click:a.submitedForm}},[a._v("Enviar")])],1)])],1)],1),a.loading?l("div",{staticClass:"loading"},[l("b-spinner",{staticStyle:{width:"5rem",height:"5rem"},attrs:{variant:"info",label:"Spinning"}})],1):a._e(),l("b-modal",{ref:"modalSuccess",attrs:{"hide-footer":"","hide-header-close":"",centered:"",title:"Registro Enviado!"}},[l("p",{staticClass:"my-4"},[l("pre",[a._v("        "+a._s(a.data)+"\n      ")])]),l("b-button",{staticClass:"mt-3",attrs:{variant:"info",block:""},on:{click:a.hideModal}},[a._v("Cerrar")])],1)],1)},r=[],n=l("a4bb"),c=l.n(n),d=(l("ac6a"),l("7f7f"),{name:"FormRegister",computed:{},data:function(){return{title:"BOLSA DE TRABAJO",tabIndex:0,hasErrorName:!1,hasErrorCountry:!1,hasErrorNacionality:!1,hasErrorAge:!1,hasErrorEmail:!1,loading:!1,options:[{text:"Si",value:"yes"},{text:"No",value:"no"}],data:{name:"",lastName:"",country:"",nacionality:"",province:"",city:"",postalCode:"",address:"",age:"",workPosition:"",salary:"",familyStatus:"",kids:"",email:null,alternativeEmail:"",skype:"",phone:"",phoneHome:"",phoneOffice:"",academicLevel:"",universityLevel:"",englishLevel:"",otherLanguage:"",excelLevel:"",wordLevel:"",googleLevel:"",internet:"",internetVelocity:"",pc:"",pcDescription:"",mouse:"yes",keyboard:"yes",internetCompany:"",placeDescription:"",stability:"",firstExperience:"",firstYears:"",firstBoss:"",firstBossPhone:"",secondExperience:"",secondYears:"",secondBoss:"",secondBossPhone:"",car:"no",driver:"no"}}},methods:{submitedForm:function(){var a=this;0==this.data.name.length?this.hasErrorName=!0:this.hasErrorName=!1,0==this.data.country.length?this.hasErrorCountry=!0:this.hasErrorCountry=!1,0==this.data.nacionality.length?this.hasErrorNacionality=!0:this.hasErrorNacionality=!1,0==this.data.age.length?this.hasErrorAge=!0:this.hasErrorAge=!1,this.validEmail(this.data.email)?this.hasErrorEmail=!1:this.hasErrorEmail=!0,this.hasErrorName||this.hasErrorAge||this.hasErrorEmail||this.hasErrorCountry||this.hasErrorNacionality?0!=this.tabIndex&&(this.tabIndex=0):(this.loading=!0,setTimeout(function(){a.loading=!1,a.$refs["modalSuccess"].show()},2e3))},validEmail:function(a){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(a)},hideModal:function(){this.$refs["modalSuccess"].hide(),this.resetForm()},resetForm:function(){var a=this;c()(this.data).forEach(function(e,l){a.data[e]=""}),this.data.car="no",this.data.driver="no",this.data.mouse="yes",this.data.keyboard="yes"}}}),b=d,m=(l("cef3"),l("2877")),u=Object(m["a"])(b,o,r,!1,null,null,null),f=u.exports,p={name:"app",components:{FormRegister:f}},v=p,g=(l("034f"),Object(m["a"])(v,s,i,!1,null,null,null)),h=g.exports,y=l("9f7b"),x=l.n(y);l("f9e3"),l("2dd8");t["default"].config.productionTip=!1,t["default"].use(x.a),new t["default"]({render:function(a){return a(h)}}).$mount("#app")},"64a9":function(a,e,l){},cef3:function(a,e,l){"use strict";var t=l("2420"),s=l.n(t);s.a}});
//# sourceMappingURL=app.0ab120ed.js.map