(function(t){function e(e){for(var a,r,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);m&&m(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},s={app:0},o=[];function i(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-52e46bce":"1e4a705e"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-52e46bce":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-52e46bce":"d2e5714c"}[t]+".css",s=l.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===a||u===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],m.parentNode.removeChild(m),n(o)},m.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"22de":function(t,e,n){"use strict";var a=n("8319"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Manual"),n("Finish"),t._m(0),n("router-view"),t._m(1)],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[n("h5",{staticClass:"my-0 mr-md-auto font-weight-normal"},[t._v('ООО "Крутые перцы"')]),n("a",{staticClass:"btn btn-outline-primary",attrs:{href:"#"}},[t._v("Sign up")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("footer",{staticClass:"pt-4 my-md-5 pt-md-5 border-top"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 col-md"}),n("div",{staticClass:"col-6 col-md"}),n("div",{staticClass:"col-6 col-md"},[n("h5",[t._v("О нас")]),n("ul",{staticClass:"list-unstyled text-small"},[n("li",[n("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Хто такие")])]),n("li",[n("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Наша цель")])]),n("li",[n("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Политика конфидециальности")])]),n("li",[n("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Условия и соглашения")])])])])])])])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{centered:"",id:"modal-doc",title:"документация"}},[n("p",{staticClass:"my-4"},[t._v("Тут будет документация")])])},i=[],l={name:"manual"},c=l,u=n("2877"),d=Object(u["a"])(c,o,i,!1,null,null,null),m=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{centered:"",id:"modal-finish",title:"Тестирование окончено","hide-footer":""}},[n("div",{staticClass:"d-block text-center"},[n("h4",[t._v("Просмотреть результаты тестирования вы можете по кнопочке ниже")])]),n("b-button",{staticClass:"mt-3",attrs:{variant:"outline-danger",block:""},on:{click:t.close}},[t._v(" На гланую")]),n("b-button",{staticClass:"mt-2",attrs:{variant:"outline-warning",block:""},on:{click:t.showResults}},[t._v(" Посмотреть результаты ")])],1)},h=[],p={name:"finish",methods:{showResults:function(){alert("Not implemented yet"),this.$bvModal.hide("modal-finish"),this.$router.push({path:"/"})},close:function(){this.$bvModal.hide("modal-finish"),this.$router.push({path:"/"})}}},v=p,b=Object(u["a"])(v,f,h,!1,null,"092b85cb",null),_=b.exports,y={components:{Manual:m,Finish:_}},g=y,C=(n("5c0b"),Object(u["a"])(g,r,s,!1,null,null,null)),w=C.exports,x=(n("d3b7"),n("8c4f")),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"container"},[n("div",{staticClass:"card-deck mb-3 text-center"},[n("div",{staticClass:"card mb-4 box-shadow"},[t._m(1),n("div",{staticClass:"card-body"},[t._m(2),n("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-doc",modifiers:{"modal-doc":!0}}],staticClass:"btn btn-lg btn-block btn-outline-primary",attrs:{type:"button"}},[t._v(" Начать читать ")])])]),n("div",{staticClass:"card mb-4 box-shadow"},[t._m(3),n("div",{staticClass:"card-body"},[t._m(4),n("button",{staticClass:"btn btn-lg btn-block btn-primary",attrs:{type:"button"},on:{click:t.goTryMode}},[t._v(" Пробный запуск ")])])]),n("div",{staticClass:"card mb-4 box-shadow"},[t._m(5),n("div",{staticClass:"card-body"},[t._m(6),n("button",{staticClass:"btn btn-lg btn-block btn-primary",attrs:{type:"button"},on:{click:t.goTestMode}},[t._v(" Тестирование ")])])])])])])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[n("h1",{staticClass:"display-4"},[t._v("Заглавный текст")]),n("p",{staticClass:"lead"},[t._v("Приветственное слово")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("h4",{staticClass:"my-0 font-weight-normal"},[t._v("Дока")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list-unstyled mt-3 mb-4"},[n("li",[t._v("Краткое описание доки")]),n("li",[t._v("Может главы")]),n("li",[t._v("мож ещё чего")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("h4",{staticClass:"my-0 font-weight-normal"},[t._v("Тестовый пуск")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list-unstyled mt-3 mb-4"},[n("li",[t._v("Тестовый пуск")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("h4",{staticClass:"my-0 font-weight-normal"},[t._v("Экзамен")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list-unstyled mt-3 mb-4"},[n("li",[t._v("Настоящее тестирование")])])}],$={name:"Home",components:{},methods:{goTryMode:function(){this.$router.push({path:"/tutorial"})},goTestMode:function(){this.$router.push({path:"/test"})}}},O=$,j=(n("22de"),Object(u["a"])(O,k,E,!1,null,null,null)),M=j.exports;a["default"].use(x["a"]);var T=[{path:"/",name:"Home",component:M},{path:"/tutorial",name:"tutorial",component:function(){return n.e("chunk-52e46bce").then(n.bind(null,"2762"))},meta:{tryMode:!0}},{path:"/test",name:"test",component:function(){return n.e("chunk-52e46bce").then(n.bind(null,"2762"))},meta:{tryMode:!1}}],S=new x["a"]({routes:T}),P=S,N=n("2f62");a["default"].use(N["a"]);var A=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),L=n("5f5b");n("f9e3"),n("2dd8");a["default"].use(L["a"]),a["default"].config.productionTip=!1,new a["default"]({router:P,store:A,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},8319:function(t,e,n){},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.ebf2f2eb.js.map