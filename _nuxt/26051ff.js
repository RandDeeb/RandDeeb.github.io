(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{464:function(t,e,n){"use strict";n(6),n(13),n(16),n(17);var r=n(2),c=(n(3),n(38),n(43),n(26),n(7),n(23),n(69),n(307),n(32),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(40),n(10),n(306),n(1)),o=n(90),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function O(t,e){return v.reduce((function(n,r){return n[t+Object(l.v)(r)]=e(),n}),{})}var j=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},w=O("align",(function(){return{type:String,default:null,validator:j}})),m=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},h=O("justify",(function(){return{type:String,default:null,validator:m}})),S=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},_=O("alignContent",(function(){return{type:String,default:null,validator:S}})),P={align:Object.keys(w),justify:Object.keys(h),alignContent:Object.keys(_)},C={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=C[t];if(null!=n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return(r+="-".concat(n)).toLowerCase()}}var x=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},w),{},{justify:{type:String,default:null,validator:m}},h),{},{alignContent:{type:String,default:null,validator:S}},_),render:function(t,e){var n=e.props,data=e.data,c=e.children,l="";for(var f in n)l+=String(n[f]);var d=x.get(l);return d||function(){var t,e;for(e in d=[],P)P[e].forEach((function(t){var r=n[t],c=k(e,t,r);c&&d.push(c)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(l,d)}(),t(n.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},465:function(t,e,n){"use strict";n(6),n(13),n(16),n(17);var r=n(2),c=(n(3),n(27),n(7),n(23),n(69),n(307),n(32),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(40),n(38),n(10),n(70),n(306),n(1)),o=n(90),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),O=v.reduce((function(t,e){return t["offset"+Object(l.v)(e)]={type:[String,Number],default:null},t}),{}),j=v.reduce((function(t,e){return t["order"+Object(l.v)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(y),offset:Object.keys(O),order:Object.keys(j)};function m(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var h=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},O),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=h.get(l);return d||function(){var t,e;for(e in d=[],w)w[e].forEach((function(t){var r=n[t],c=m(e,t,r);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),h.set(l,d)}(),t(n.tag,Object(o.a)(data,{class:d}),c)}})},498:function(t,e,n){"use strict";n.r(e);var r=n(459),c=n(458),o=n(492),l=n(465),f=n(210),d=n(464),v=(n(6),n(49),{name:"ServicesPage",head:function(){return{title:this.$t("pages.services.title")}}}),y=n(71),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{justify:"center",align:"center"}},[e(l.a,{attrs:{cols:"12"}},[e("p",{staticClass:"text-center font-weight-bold text-uppercase text-h4 primary--text mb-0"},[t._v("\n            "+t._s(t.$t("pages.services.title"))+"\n        ")]),t._v(" "),e("p",{staticClass:"text-center text-uppercase subtitle-1 mb-10"},[t._v("\n            "+t._s(t.$t("pages.services.subtitle"))+"\n        ")]),t._v(" "),e(d.a,t._l(t.$t("pages.services.list"),(function(n){return e(l.a,{key:n.title,attrs:{cols:"12",sm:"6",md:"4"}},[e(r.a,{staticClass:"pa-5"},[e(c.c,[e(f.a,{attrs:{color:"primary",large:"",left:""}},[t._v("\n                            "+t._s(n.icon)+"\n                        ")]),t._v("\n                        "+t._s(n.title)+"\n                    ")],1),t._v(" "),e(c.b,[t._v("\n                        "+t._s(n.description)+"\n                    ")]),t._v(" "),e(c.b,t._l(n.tags,(function(n){return e(o.a,{key:n,staticClass:"ma-1",attrs:{label:""}},[t._v("\n                            "+t._s(n)+"\n                        ")])})),1)],1)],1)})),1)],1)],1)}),[],!1,null,"858a019e",null);e.default=component.exports}}]);