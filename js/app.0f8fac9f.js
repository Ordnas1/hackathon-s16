(function(e){function t(t){for(var r,a,i=t[0],u=t[1],l=t[2],c=0,p=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},s={app:0},o=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4fb29f1a","chunk-2d0baaa9":"31eea21f","chunk-93e3bb80":"e175c51f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1,"chunk-93e3bb80":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"44a9314e","chunk-2d0baaa9":"31d6cfe0","chunk-93e3bb80":"632bd8c5"}[e]+".css",s=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===s))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],c=l.getAttribute("data-href");if(c===r||c===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=s;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=o);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var p=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}s[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/hackathon-s16/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0992":function(e,t,n){},2566:function(e,t,n){},2925:function(e,t,n){"use strict";var r=n("f63d"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view",{staticClass:"view"}),n("Footer",{staticClass:"main-footer"})],1)},s=[],o=n("5530"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("router-link",{staticClass:"header__link",attrs:{to:"/"}},[e._v("Home ")]),n("router-link",{staticClass:"header__link",attrs:{to:"/users"}},[e._v("Lista de usuarios ")]),n("router-link",{staticClass:"header__link",attrs:{to:"/posts"}},[e._v("Posts ")]),n("router-link",{staticClass:"header__link",attrs:{to:"/albums"}},[e._v("Albumes")])],1)},u=[],l={name:"Header"},c=l,p=(n("2925"),n("2877")),f=Object(p["a"])(c,i,u,!1,null,"89609b42",null),v=f.exports,d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("p",[e._v("Elaborado por Sandro Marcelo Peirano Gozalvez")]),n("div",{staticClass:"social"},[n("i",{staticClass:"fab fa-facebook-square"}),n("i",{staticClass:"fab fa-linkedin"}),n("i",{staticClass:"fab fa-github-square"}),n("i",{staticClass:"fab fa-steam-square"})])])}],m=(n("e787"),{}),b=Object(p["a"])(m,d,h,!1,null,"b905a188",null),_=b.exports,g=n("2f62"),k={name:"App",components:{Header:v,Footer:_},computed:Object(g["c"])({users:function(e){return e.users}}),methods:Object(o["a"])({},Object(g["b"])(["initUsers","initPosts","initAlbums"])),created:function(){this.initUsers(),this.initPosts(),this.initAlbums()}},j=k,y=(n("5c0b"),Object(p["a"])(j,a,s,!1,null,null,null)),w=y.exports,C=(n("d3b7"),n("8c4f")),E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Single Page Applications")]),n("p",{staticClass:"desc"},[e._v("Una "),n("a",{attrs:{href:"https://es.wikipedia.org/wiki/Single-page_application"}},[e._v("Single Page Application")]),e._v(" o aplicación de página única es una página web que emula el comportamiento de una aplicación nativa al caber en solo una página. Esto nos permite brindar una mejor experiencia de usuario.")]),n("p",{staticClass:"desc"},[e._v("Vue.js nos permite crear Single Page Applications de forma eficiente mediante el uso de Vue Router (Herramienta de enrutamiento) y Vuex (gestor de estado de Vue).")]),n("p",{staticClass:"desc"},[e._v("Esta página ha sido creada usando lo siguiente:")]),n("ul",{staticClass:"list"},[n("li",[e._v("Vue.js")]),n("li",[e._v("Vue Router")]),n("li",[e._v("Vuex")]),n("li",[e._v("Flexbox")]),n("li",[e._v("CSS Grid")]),n("li",[e._v("API Rest")])])])}],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],A={name:"HelloWorld",props:{msg:String}},S=A,$=(n("e2d3"),Object(p["a"])(S,P,O,!1,null,"1dfc7223",null)),H=$.exports,T={name:"Home",components:{HelloWorld:H}},U=T,L=(n("d7fb"),Object(p["a"])(U,E,x,!1,null,"bd1a642e",null)),V=L.exports;r["a"].use(C["a"]);var q=[{path:"/",name:"Home",component:V},{path:"/users",name:"Users",component:function(){return n.e("about").then(n.bind(null,"ed81"))}},{path:"/posts",name:"Posts",component:function(){return n.e("about").then(n.bind(null,"17c3"))}},{path:"/albums",name:"Albums",component:function(){return n.e("about").then(n.bind(null,"be55"))}},{path:"/users/:id",name:"User",component:function(){return n.e("chunk-93e3bb80").then(n.bind(null,"1511"))}},{path:"/posts/:id",name:"Post",component:function(){return n.e("chunk-2d0baaa9").then(n.bind(null,"37d3"))}}],F=new C["a"]({routes:q}),N=F,M=(n("96cf"),n("1da1"));r["a"].use(g["a"]);var R="https://jsonplaceholder.typicode.com/users",I="https://jsonplaceholder.typicode.com/posts",z="https://jsonplaceholder.typicode.com/albums";function B(e,t,n){return D.apply(this,arguments)}function D(){return D=Object(M["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,t.commit(r,s);case 7:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}var G=new g["a"].Store({state:{users:null,posts:null,albums:null},mutations:{setUsers:function(e,t){e.users=t},setPosts:function(e,t){e.posts=t},setAlbums:function(e,t){e.albums=t}},actions:{initUsers:function(e){B(e,R,"setUsers")},initPosts:function(e){B(e,I,"setPosts")},initAlbums:function(e){B(e,z,"setAlbums")}},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:N,store:G,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},aeeb:function(e,t,n){},d7fb:function(e,t,n){"use strict";var r=n("2566"),a=n.n(r);a.a},e2d3:function(e,t,n){"use strict";var r=n("0992"),a=n.n(r);a.a},e787:function(e,t,n){"use strict";var r=n("aeeb"),a=n.n(r);a.a},f63d:function(e,t,n){}});
//# sourceMappingURL=app.0f8fac9f.js.map