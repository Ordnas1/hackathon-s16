(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"17c3":function(t,s,n){"use strict";n.r(s);var e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("h1",[t._v("Posts")]),n("div",{staticClass:"postCont"},t._l(t.posts,(function(s){return n("div",{staticClass:"postCard",on:{click:function(n){return t.renderPost(s.id)}}},[t._v(" "+t._s(s.title)+" ")])})),0)])},r=[],u={name:"Posts",computed:{posts:function(){return this.$store.state.posts}},methods:{renderPost:function(t){window.location.href="#/posts/".concat(t)}}},a=u,i=(n("3382"),n("2877")),c=Object(i["a"])(a,e,r,!1,null,"7ba9c822",null);s["default"]=c.exports},"2dfc":function(t,s,n){"use strict";var e=n("7490"),r=n.n(e);r.a},3382:function(t,s,n){"use strict";var e=n("a6a7"),r=n.n(e);r.a},7286:function(t,s,n){"use strict";var e=n("74ad"),r=n.n(e);r.a},7490:function(t,s,n){},"74ad":function(t,s,n){},a6a7:function(t,s,n){},be55:function(t,s,n){"use strict";n.r(s);var e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("h1",[t._v("Albumes")]),n("div",{staticClass:"albumCont"},t._l(t.albums,(function(s){return n("div",{staticClass:"albumCard"},[t._v(" "+t._s(s.title)+" ")])})),0)])},r=[],u={name:"Albums",computed:{albums:function(){return this.$store.state.albums}}},a=u,i=(n("7286"),n("2877")),c=Object(i["a"])(a,e,r,!1,null,null,null);s["default"]=c.exports},ed81:function(t,s,n){"use strict";n.r(s);var e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"about"},[n("h1",[t._v("Lista de usuarios")]),n("div",{staticClass:"userCont"},t._l(t.users,(function(s){return n("div",{staticClass:"userCard",on:{click:function(n){return t.renderUser(s.id)}}},[n("h2",[t._v(t._s(s.name))])])})),0)])},r=[],u={name:"Users",computed:{users:function(){return this.$store.state.users}},methods:{renderUser:function(t){window.location.href="#/users/".concat(t)}}},a=u,i=(n("2dfc"),n("2877")),c=Object(i["a"])(a,e,r,!1,null,"ae479be2",null);s["default"]=c.exports}}]);
//# sourceMappingURL=about.4fb29f1a.js.map