(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{212:function(e,t,o){"use strict";o.r(t);var n=o(455),r=o(453),l=o(450),c=o(231),d=o(210),h=o(179),f=o(209),m=o(140),y=o(214),v=o(65),w=o(451),k=o(449),_=o(224),F=o(452),x=(o(7),o(6),o(13),o(3),o(16),o(10),o(17),o(2));o(25);function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function P(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(x.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var S={name:"TheHeader",props:{value:{type:Boolean,required:!0}},data:function(){return{languages:[{flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_United_Kingdom.png/1200px-Flag_of_the_United_Kingdom.png",title:"English",code:"en"},{flag:"https://upload.wikimedia.org/wikipedia/commons/archive/d/d4/20221012073655%21Flag_of_Russia.png",title:"Русский",code:"ru"}]}},computed:{currentLanguageIndex:function(){switch(this.$i18n.locale){case"en":default:return 0;case"ru":return 1;case"ar":return 2}},menu:function(){return[{title:this.$t("pages.index.title"),to:this.localePath("index")},{title:this.$t("pages.services.title"),to:this.localePath("services")},{title:this.$t("pages.portfolio.title"),to:this.localePath("portfolio")},{title:this.$t("pages.achievements.title"),to:this.localePath("achievements")},{title:this.$t("pages.contact.title"),to:this.localePath("contact")}]},drawer:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},O=o(71),component=Object(O.a)(S,(function(){var e=this,t=e._self._c;return t(n.a,{attrs:{app:"",dark:"","elevate-on-scroll":"",fixed:"",height:"90"}},[t(h.a,{staticClass:"mx-5",attrs:{src:"/images/logo.png","max-width":"50","max-height":"50",contain:""}}),e._v(" "),"xs"===e.$vuetify.breakpoint.name?t(k.a):e._e(),e._v(" "),t(l.a,{staticClass:"title"},[e._v("\n        Rand Deeb\n    ")]),e._v(" "),t(k.a),e._v(" "),t(_.a,{staticClass:"hidden-sm-and-down"},e._l(e.menu,(function(o){return t(c.a,{key:o.title,attrs:{depressed:"",plain:"",to:o.to,exact:""}},[e._v("\n            "+e._s(o.title)+"\n        ")])})),1),e._v(" "),t(w.a,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(o){var n=o.on;return[t(F.a,{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(o){var r=o.on;return[t(c.a,e._g({attrs:{icon:""}},P(P({},r),n)),[t(y.a,{staticClass:"ma-0",attrs:{size:"20"}},[t(h.a,{attrs:{src:e.languages[e.currentLanguageIndex].flag}})],1)],1)]}}],null,!0)},[e._v(" "),t("span",[e._v("Switch Language")])])]}}])},[e._v(" "),t(f.a,e._l(e.languages,(function(o,i){return t(m.a,{key:o.title,attrs:{to:e.switchLocalePath(e.languages[i].code)}},[t(y.a,{attrs:{size:"24"}},[t(h.a,{attrs:{src:o.flag}})],1),e._v(" "),t(v.b,[e._v(e._s(o.title))])],1)})),1)],1),e._v(" "),t(r.a,{staticClass:"hidden-md-and-up",on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[t(d.a,{attrs:{color:"primary"}},[e._v("\n            far fa-bars\n        ")])],1)],1)}),[],!1,null,"2e8b1f93",null);t.default=component.exports},213:function(e,t,o){"use strict";o.r(t);var n=o(231),r=o(454),l=o(210),c=o(209),d=o(140),h=o(65),f=o(123),m=o(457),y={name:"TheSidebar",props:{value:{type:Boolean,required:!0}},data:function(){return{right:null}},computed:{items:function(){return[{title:this.$t("pages.index.title"),to:this.localePath("/"),icon:"fal fa-home"},{title:this.$t("pages.services.title"),to:this.localePath("services"),icon:"fal fa-list"},{title:this.$t("pages.portfolio.title"),to:this.localePath("portfolio"),icon:"fal fa-briefcase"},{title:this.$t("pages.achievements.title"),to:this.localePath("achievements"),icon:"fal fa-trophy"},{title:this.$t("pages.contact.title"),to:this.localePath("contact"),icon:"fal fa-envelope"}]},drawer:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},v=o(71),component=Object(v.a)(y,(function(){var e=this,t=e._self._c;return t(m.a,{attrs:{app:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(c.a,{attrs:{dense:"",nav:""}},e._l(e.items,(function(o){return t(d.a,{key:o.title,attrs:{link:"",exact:"",to:o.to}},[t(f.a,[t(l.a,[e._v(e._s(o.icon))])],1),e._v(" "),t(h.a,[t(h.b,[e._v(e._s(o.title))])],1)],1)})),1),e._v(" "),t(r.a),e._v(" "),t("div",{staticClass:"text-center mt-2"},[t(n.a,{attrs:{icon:"",small:"",href:"https://www.facebook.com/rand.deeb.1"}},[t(l.a,{attrs:{small:""}},[e._v("\n                fab fa-facebook-f\n            ")])],1),e._v(" "),t(n.a,{attrs:{icon:"",small:"",href:"https://www.instagram.com/web.rand"}},[t(l.a,{attrs:{small:""}},[e._v("\n                fab fa-instagram\n            ")])],1),e._v(" "),t(n.a,{attrs:{icon:"",small:"",href:"https://www.linkedin.com/in/rand-deeb"}},[t(l.a,{attrs:{small:""}},[e._v("\n                fab fa-linkedin\n            ")])],1)],1)],1)}),[],!1,null,"55109724",null);t.default=component.exports},275:function(e,t,o){},299:function(e,t,o){"use strict";t.a={pages:{index:{title:"Home",about:"I'm a Software engineer, with 6+ years of experience in web application security and Full-Stack web development, interested in information security, CTFs, and web applications. During these years I got acknowledged from international companies including Meta (Facebook formerly), AliExpress, and more ...",hi:"Hi, I'm ",rand:"Rand",short_about:"A Software engineer, Full-Stack Developer, and Security Researcher.",find_me:"Find me"},achievements:{title:"Achievements",title2:"Achievements",subtitle:"Some of my",list:[{title:"Discovered my 3rd and 4th vulnerabilities in Facebook's app",issuer:"Meta (Facebook formerly)",description:"You can find my name in HOF (hall of fame) page: https://facebook.com/whitehat/thanks",year:"2022"},{title:"Got acknowledged by Coca-Cola Security team",issuer:"Coca-Cola",description:"I got acknowledged by Coca-Cola security team after discovering a security issue in one of their\nofficial apps",year:"2022"},{title:"Among Finalists of International Cyberdrills (SPIEF 2022)",issuer:"SPIEF",description:"The competition was organized by the National Cyber Training Ground Rostelecom Solar. The\nparticipants had to prevent an attack on a major electric substation that could lead to a city-wide\nblackout.\nFor more information, you can read the article on the official website of my university (ITMO):\nhttps://news.itmo.ru/en/university_live/achievements/news/12646/",year:"2022"},{title:"1st place winner in Syrian Cyber (Syrian national CTF Competition)",issuer:"National Authority for Network Services",description:"https://www.sana.sy/?p=1427705",year:"2022"},{title:"Discovered my 4th vulnerability in Instagram 's web app",issuer:"Meta (Facebook formerly)",description:"You can find my name in HOF (hall of fame) page: https://facebook.com/whitehat/thanks",year:"2021"},{title:"Discovered my 3rd vulnerability in Instagram 's web app",issuer:"Meta (Facebook formerly)",description:"You can find my name in HOF (hall of fame) page: https://facebook.com/whitehat/thanks",year:"2020"},{title:"First Syrian security researcher in Facebook 's security workplace",issuer:"Meta (Facebook formerly)",description:"I got invited to Facebook's security workplace after reached the silver league with a high score.",year:"2020"},{title:"Reached the silver league in Facebook HackerPlus",issuer:"Meta (Facebook formerly)",description:"",year:"2020"},{title:"Discovered my first two vulnerabilities in Facebook 's web app",issuer:"Meta (Facebook formerly)",description:"You can find my name in HOF (hall of fame) page: https://facebook.com/whitehat/thanks",year:"2020"},{title:"Discovered my first two vulnerabilities in Instagram 's web app",issuer:"Meta (Facebook formerly)",description:"You can find my name in HOF (hall of fame) page: https://facebook.com/whitehat/thanks",year:"2020"},{title:"Discovered a vulnerability in ALiExpress web app",issuer:"AliExpress",description:"",year:"2019"},{title:"Many more...",issuer:"",description:"",year:"2015-2019"}]},portfolio:{title:"Portfolio",title2:"Projects",subtitle:"Some of my",projects:[{cover:"https://jacekjeznach.com/wp-content/uploads/2021/11/Tlumaczenia-zwykle-jezykowe-specjalistyczne-prawnicze-techniczne-Biuro-tlumaczen-MONO-Torun.png",title:"CMS",summarize:"test",description:'<p class="title">test</p>',tags:["laravel","CMS"],link:"https://test.com",images:["https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/23a51e149426375.62e7b3652b2e3.png","https://blog.uxfol.io/wp-content/uploads/2021/04/max-berger-ux-portfolio-example.png","https://miro.medium.com/max/1050/1*hp-yfKsmzsj711iLbM8eEw.jpeg"]}]},services:{title:"Services",subtitle:"What i can do",list:[{icon:"fal fa-code",title:"Web Development",description:"Creating a high quality modern web applications with excellent performance, design and protection.",tags:["Laravel","PHP","VueJs","Nuxt","Vuetify","HTML/CSS"]},{icon:"fal fa-bug",title:"Penetration testing",description:"Make your web application more secure, by scanning it in the BlackBox approach to find security vulnerabilities and giving a full report on them with ways to fix them and recommendations.",tags:["BlackBox","Web Application Pentest","Mobile Application Pentest","API Pentest","Vulnerability assessment","OWASP"]},{icon:"fal fa-bug",title:"Source Code Review",description:"Check the source code of your web app for security vulnerabilities to make the application more secure by finding and fixing them.",tags:["WhiteBox"]},{icon:"fal fa-paint-brush",title:"UI/UX",description:"Design User Interface (UI) for SaaS, Web App, CRM Dashboard, Admin Panel. If you still don't have a clear idea of what you want, I can help you develop your idea to fit your business and needs.",tags:["Adobe XD","Responsive"]}]},contact:{title:"Contact",body:"I am interested in freelancing opportunities, and my inbox is always open for any service. However, if you have a request or other question, feel free to use the form.",another_ways:"OR"}}}},300:function(e,t,o){"use strict";t.a={pages:{index:{title:"Главная",about:"Я инженер-программист, с более чем 6-летним опытом работы в области безопасности веб-приложений и веб-разработки с полным стеком, интересуюсь информационной безопасностью, CTFS и веб-приложениями. За эти годы я получил признание от международных компаний, таких как Meta (ранее Facebook), AliExpress и других...",hi:"Привет, я ",rand:"Ранд",short_about:"Инженер-программист, веб-разработчик и исследователь безопасности.",find_me:"Найди меня"},achievements:{title:"достижения",title2:"достижений",subtitle:"некоторые из моих",list:[{title:"Обнаружил свои 3-ю и 4-ю уязвимости в приложении Facebook",issuer:"Meta (ранее Facebook)",description:"Вы можете найти мое имя на странице HOF (зал славы): https://facebook.com/whitehat/thanks",year:"2022"},{title:"Получил подтверждение от службы безопасности Coca-Cola",issuer:"Coca-Cola",description:"Я получил подтверждение от службы безопасности Coca-Cola после обнаружения проблемы с безопасностью в одном из их официальных приложений",year:"2022"},{title:"Среди финалистов Международных кибердриллов (ПМЭФ-2022)",issuer:"ПМЭФ",description:'Конкурс был организован Национальным киберполигоном "Ростелеком Солар". Участники должны были предотвратить атаку на крупную электрическую подстанцию, которая могла привести к отключению электроэнергии по всему городу. Для получения дополнительной информации вы можете прочитать статью на официальном сайте моего университета (ИТМО): https://news.itmo.ru/ru/university_live/achievements/news/12646/',year:"2022"},{title:"победитель 1-го места в Syrian Cyber (Сирийский национальный конкурс CTF)",issuer:"Национальный орган по сетевым услугам",description:"https://www.sana.sy/?p=1427705",year:"2022"},{title:"Обнаружена моя 4-я уязвимость в веб-приложении Instagram",issuer:"Meta (ранее Facebook)",description:"Вы можете найти мое имя на странице HOF (зал славы): https://facebook.com/whitehat/thanks",year:"2021"},{title:"Обнаружена моя 3-я уязвимость в веб-приложении Instagram",issuer:"Meta (Facebook formerly)",description:"Вы можете найти мое имя на странице HOF (зал славы): https://facebook.com/whitehat/thanks",year:"2020"},{title:"Первый сирийский исследователь безопасности на рабочем месте службы безопасности Facebook",issuer:"Meta (Facebook formerly)",description:"Меня пригласили на рабочее место службы безопасности Facebook после того, как я набрал высокий балл в серебряной лиге.",year:"2020"},{title:"Достиг серебряной лиги в Facebook HackerPlus",issuer:"Meta (Facebook formerly)",description:"",year:"2020"},{title:"Обнаружил свои первые две уязвимости в веб-приложении Facebook",issuer:"Meta (Facebook formerly)",description:"Вы можете найти мое имя на странице HOF (зал славы): https://facebook.com/whitehat/thanks",year:"2020"},{title:"Обнаружил свои первые две уязвимости в веб-приложении Instagram",issuer:"Meta (Facebook formerly)",description:"Вы можете найти мое имя на странице HOF (зал славы): https://facebook.com/whitehat/thanks",year:"2020"},{title:"Обнаружена уязвимость в веб-приложении AliExpress",issuer:"AliExpress",description:"",year:"2019"},{title:"Гораздо больше...",issuer:"",description:"",year:"2015-2019"}]},portfolio:{title:"портофолио",title2:"проекты",subtitle:"Некоторые из моих",projects:[{cover:"https://jacekjeznach.com/wp-content/uploads/2021/11/Tlumaczenia-zwykle-jezykowe-specjalistyczne-prawnicze-techniczne-Biuro-tlumaczen-MONO-Torun.png",title:"CMS",summarize:"test",description:'<p class="title">test</p>',tags:["laravel","CMS"],link:"https://test.com",images:["https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/23a51e149426375.62e7b3652b2e3.png","https://blog.uxfol.io/wp-content/uploads/2021/04/max-berger-ux-portfolio-example.png","https://miro.medium.com/max/1050/1*hp-yfKsmzsj711iLbM8eEw.jpeg"]}]},services:{title:"услуги",subtitle:"что я могу сделать",list:[{icon:"fal fa-code",title:"Веб-разработка",description:"Создание высококачественных современных веб-приложений с отличной производительностью, дизайном и защитой.",tags:["Laravel","PHP","VueJs","Nuxt","Vuetify","HTML/CSS"]},{icon:"fal fa-bug",title:"Тестирование на проникновение",description:"Сделайте свое веб-приложение более безопасным, сканируя его с помощью метода черного ящика, чтобы найти уязвимости в системе безопасности и предоставить полный отчет о них со способами их устранения и рекомендациями.",tags:["BlackBox","Web Application Pentest","Mobile Application Pentest","API Pentest","Vulnerability assessment","OWASP"]},{icon:"fal fa-bug",title:"Обзор исходного кода",description:"Проверьте исходный код вашего веб-приложения на наличие уязвимостей в системе безопасности, чтобы повысить безопасность приложения, обнаружив и исправив их.",tags:["WhiteBox"]},{icon:"fal fa-paint-brush",title:"UI/UX",description:"Разработаю пользовательский интерфейс (UI) для SaaS, веб-приложения, панели управления CRM, панели администратора. Если у вас все еще нет четкого представления о том, чего вы хотите, я могу помочь вам развить вашу идею в соответствии с вашим бизнесом и потребностями.",tags:["Adobe XD","Responsive"]}]},contact:{title:"Контакт",body:"Я заинтересован в возможностях фриланса, и мой почтовый ящик всегда открыт для любых услуг. Однако, если у вас есть запрос или другой вопрос, не стесняйтесь использовать форму.",another_ways:"или"}}}},304:function(e,t,o){"use strict";var n=o(447),r=o(456),l=o(448),c=o(212),d={name:"DefaultLayout",components:{TheSidebar:o(213).default,TheHeader:c.default},data:function(){return{drawer:!1}}},h=o(71),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return t(n.a,{attrs:{dark:""}},[t("TheHeader",{model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),e._v(" "),t("TheSidebar",{model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),e._v(" "),t(l.a,[t(r.a,{attrs:{"fill-height":""}},[t("Nuxt")],1)],1)],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{TheHeader:o(212).default,TheSidebar:o(213).default})},325:function(e,t,o){o(326),e.exports=o(327)},371:function(e,t,o){"use strict";o(275)},87:function(e,t,o){"use strict";var n=o(447),r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},l=(o(371),o(71)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t(n.a,{attrs:{dark:""}},[404===e.error.statusCode?t("h1",[e._v("\n        "+e._s(e.pageNotFound)+"\n    ")]):t("h1",[e._v("\n        "+e._s(e.otherError)+"\n    ")]),e._v(" "),t("NuxtLink",{attrs:{to:"/"}},[e._v("\n        Home page\n    ")])],1)}),[],!1,null,"a0754e2a",null);t.a=component.exports}},[[325,10,3,11]]]);
