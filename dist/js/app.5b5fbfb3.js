(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},r={app:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0d34b800":"d342d4ee","chunk-14e94bef":"5cf1b35f","chunk-159c0266":"131cc168","chunk-2d0a54d0":"b4a6da17","chunk-2d0d6547":"e8b5f30f","chunk-60ec551b":"58ad7d8f"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-0d34b800":1,"chunk-14e94bef":1,"chunk-159c0266":1,"chunk-60ec551b":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-0d34b800":"93d9f2a3","chunk-14e94bef":"36d1b5aa","chunk-159c0266":"fcaf373b","chunk-2d0a54d0":"31d6cfe0","chunk-2d0d6547":"31d6cfe0","chunk-60ec551b":"2c017bb0"}[t]+".css",r=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete s[t],f.parentNode.removeChild(f),a(o)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){s[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}r[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4360:function(t,e,a){"use strict";var n=a("2b0e"),s=a("2f62"),r={userId:"",carTotal:0,carListRefresh:!1,loginSuccess:!1},o={SetUserId:function(t,e){t.userId=e},SetCarTotal:function(t,e){t.carTotal=e},SetCarListRefresh:function(t,e){t.carListRefresh=e},SetLoginSuccess:function(t,e){t.loginSuccess=e}},i=a("63e0");n["a"].use(s["a"]);var c=new s["a"].Store({state:r,mutations:o,actions:i["actions"]});e["a"]=c},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),t.$route.meta.showTab?a("van-tabbar",{attrs:{route:"","active-color":"#07c160",fixed:!0,"inactive-color":"#000",placeholder:!0,"safe-area-inset-bottom":!0},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tabbar-item",{attrs:{icon:"home-o",to:"/Home"}},[t._v("商城首页")]),a("van-tabbar-item",{attrs:{icon:"apps-o",to:"/Find"}},[t._v("商城分类")]),a("van-tabbar-item",{attrs:{icon:"shopping-cart-o",badge:t.value,to:"/Cart"}},[t._v("购物车")]),a("van-tabbar-item",{attrs:{icon:"user-o",to:"/Personal"}},[t._v("会员中心")])],1):t._e()],1)},r=[],o={data:function(){return{active:0}},computed:{value:function(){return this.$store.state.carTotal}}},i=o,c=(a("5c0b"),a("2877")),u=Object(c["a"])(i,s,r,!1,null,null,null),l=u.exports,d=(a("d3b7"),a("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("div",{staticClass:"search"},[n("div",{staticClass:"searchBtn"},[n("van-icon",{staticClass:"searchIcon",attrs:{name:"search",color:"#cccccc",size:"20"}}),n("span",[t._v("商品搜索：请输入关键字")])],1),n("van-icon",{staticClass:"sicon",attrs:{name:"manager-o",color:"#cccccc",size:"30"}})],1)]),n("div",{staticClass:"content"},[n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white",loop:!0}},[n("van-swipe-item",[n("img",{attrs:{src:a("a186"),alt:""}})]),n("van-swipe-item",[n("img",{attrs:{src:a("93aa"),alt:""}})])],1),n("div",{staticClass:"tab"},[n("div",{staticClass:"tabItem"},[n("img",{attrs:{src:a("7921"),alt:""}}),n("div",{staticClass:"tabTxt"},[t._v("商品")])]),n("div",{staticClass:"tabItem"},[n("img",{attrs:{src:a("7921"),alt:""}}),n("div",{staticClass:"tabTxt"},[t._v("商品")])]),n("div",{staticClass:"tabItem"},[n("img",{attrs:{src:a("7921"),alt:""}}),n("div",{staticClass:"tabTxt"},[t._v("商品")])]),n("div",{staticClass:"tabItem"},[n("img",{attrs:{src:a("7921"),alt:""}}),n("div",{staticClass:"tabTxt"},[t._v("商品")])]),n("div",{staticClass:"tabItem"},[n("img",{attrs:{src:a("7921"),alt:""}}),n("div",{staticClass:"tabTxt"},[t._v("商品")])])]),n("van-notice-bar",{attrs:{scrollable:!0,color:"#1989fa",background:"#ecf9ff","left-icon":"volume-o"}},[t._v("通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容")]),n("div",{staticClass:"shopList"},[n("div",{staticClass:"shopListTitle"},[n("img",{attrs:{src:a("ffa4"),alt:""}})]),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.shopList,(function(e,a){return n("div",{key:a,staticClass:"shopItem"},[n("router-link",{staticClass:"shopLink",attrs:{to:{name:"shopDetail",params:{shopid:e.goods_id}}}},[n("img",{attrs:{src:e.img,alt:""}}),n("div",{staticClass:"shopCon"},[n("div",{staticClass:"shopTitle"},[t._v(t._s(e.name))]),n("div",{staticClass:"shopTag"},[n("span",[t._v("满99减50")])]),n("div",{staticClass:"shopPrice"},[t._v(" ￥ "),n("span",[t._v(t._s(e.price))])])])])],1)})),0)],1)],1)],1)])},h=[],p=a("ade3"),b=a("8039"),m={name:"Home",data:function(){return{count:0,isLoading:!1,shopList:[],loading:!1,finished:!1,refreshing:!1,page:1}},created:function(){this._getShopList(),this._getCartList()},methods:Object(p["a"])({_getShopList:function(){var t=this;Object(b["c"])({page:this.page,num:6,word:"",sort:"",cid:""}).then((function(e){t.shopList=e.data}))},_getCartList:function(){var t=this;Object(b["b"])({uid:5}).then((function(e){t.$store.commit("SetCarTotal",e.data.num)}))},onRefresh:function(){var t=this;setTimeout((function(){t.$Toast("刷新成功"),t.isLoading=!1,t.count++}),1e3)},onLoad:function(){var t=this;setTimeout((function(){t.refreshing&&(t.shopList=[],t.refreshing=!1);for(var e=0;e<4;e++)t.shopList.push(t.shopList[1]);t.loading=!1,t.shopList.length>=20&&(t.finished=!0)}),1e3)}},"onRefresh",(function(){this.finished=!1,this.loading=!0,this.onLoad()}))},v=m,g=(a("abbd"),Object(c["a"])(v,f,h,!1,null,"014e1ec7",null)),k=g.exports;n["a"].use(d["a"]);var C=[{path:"/",redirect:"/Home"},{path:"/Home",name:"Home",component:k,meta:{showTab:!0}},{path:"/Find",name:"Find",component:function(){return a.e("chunk-60ec551b").then(a.bind(null,"a5d9"))},meta:{showTab:!0}},{path:"/Cart",name:"Cart",component:function(){return a.e("chunk-0d34b800").then(a.bind(null,"f196"))},meta:{showTab:!0}},{path:"/Personal",name:"Personal",component:function(){return a.e("chunk-159c0266").then(a.bind(null,"dca4"))},meta:{showTab:!0}},{path:"/Personal/setting",name:"setting",component:function(){return a.e("chunk-2d0a54d0").then(a.bind(null,"09b3"))}},{path:"/shopDetail/shopDetail:shopid",name:"shopDetail",component:function(){return a.e("chunk-14e94bef").then(a.bind(null,"a7df"))}},{path:"/user/login",name:"login",component:function(){return a.e("chunk-2d0d6547").then(a.bind(null,"71a8"))}}],_=new d["a"]({base:"",routes:C}),y=_,w=a("4360"),T=(a("e7e5"),a("d399")),L=(a("66b9"),a("b650")),j=(a("be7f"),a("565f")),x=(a("38d5"),a("772a")),O=(a("2cbd"),a("ab2c")),P=(a("66cf"),a("343b")),S=(a("591c"),a("7713")),I=(a("ef6f"),a("82a8")),E=(a("93ac"),a("bb33")),R=(a("0653"),a("34e9")),$=(a("c194"),a("7744")),A=(a("0ec5"),a("21ab")),D=(a("3df5"),a("2830")),H=(a("5f1a"),a("a3e2")),U=(a("f06a"),a("20fb")),q=(a("3c32"),a("417e")),F=(a("be39"),a("efa0")),N=(a("5246"),a("6b41")),z=(a("afd4"),a("ca19")),B=(a("2994"),a("2bdd")),M=(a("ab71"),a("58e6")),J=(a("480b"),a("a37c")),K=(a("4b0a"),a("2bb1")),G=(a("7844"),a("5596")),Q=(a("c3a6"),a("ad06")),V=(a("5852"),a("d961")),W=(a("a52c"),a("2ed4")),X=(a("537a"),a("ac28"));n["a"].use(X["a"]),n["a"].use(W["a"]),n["a"].use(V["a"]),n["a"].use(Q["a"]),n["a"].use(G["a"]),n["a"].use(K["a"]),n["a"].use(J["a"]),n["a"].use(M["a"]),n["a"].use(B["a"]),n["a"].use(z["a"]),n["a"].use(N["a"]),n["a"].use(F["a"]),n["a"].use(q["a"]),n["a"].use(U["a"]),n["a"].use(H["a"]),n["a"].use(D["a"]),n["a"].use(A["a"]),n["a"].use($["a"]),n["a"].use(R["a"]),n["a"].use(E["a"]),n["a"].use(I["a"]),n["a"].use(S["a"]),n["a"].use(P["a"]),n["a"].use(O["a"]),n["a"].use(x["a"]),n["a"].use(j["a"]),n["a"].use(L["a"]),n["a"].prototype.$Toast=T["a"],n["a"].config.productionTip=!0,new n["a"]({router:y,store:w["a"],render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"63e0":function(t,e){},7921:function(t,e,a){t.exports=a.p+"img/t1.8e21a965.png"},8039:function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return r})),a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return i}));var n=a("82ba"),s=function(t){return Object(n["b"])("goods_list",t)},r=function(t){return Object(n["b"])("goods",t)},o=function(t){return Object(n["c"])("add_cart",t)},i=function(t){return Object(n["b"])("cart",t)}},"82ba":function(t,e,a){"use strict";a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return d}));a("d3b7"),a("ac1f"),a("5319"),a("e7e5");var n=a("d399"),s=a("bc3a"),r=a.n(s),o=(a("4328"),a("4360")),i={ymUrl:"http://mzs.yunmai.net/",access_token:"openyuneccn201800001"},c="".concat(i.ymUrl),u="apidata.html?access_token=".concat(i.access_token,"&ym_client=4&act=");function l(t,e){return new Promise((function(a,n){r.a.get(u+t,{params:e}).then((function(t){a(t.data)})).catch((function(t){n(t.data)}))}))}function d(t,e){return new Promise((function(a,n){r.a.post(u+t,e).then((function(t){a(t.data)})).catch((function(t){n(t.data)}))}))}r.a.defaults.baseURL=c,r.a.defaults.timeout=1e4,r.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",r.a.interceptors.request.use((function(t){var e=o["a"].state.token;return e&&(t.headers.Authorization=e),t}),(function(t){return Promise.error(t)})),r.a.interceptors.response.use((function(t){return 200===t.status?Promise.resolve(t):Promise.reject(t)}),(function(t){if(t.response.status){switch(t.response.status){case 401:router.replace({path:"/login",query:{redirect:router.currentRoute.fullPath}});break;case 403:Object(n["a"])({message:"登录过期，请重新登录",duration:1e3,forbidClick:!0}),localStorage.removeItem("token"),o["a"].commit("loginSuccess",null),setTimeout((function(){router.replace({path:"/login",query:{redirect:router.currentRoute.fullPath}})}),1e3);break;case 404:Object(n["a"])({message:"网络请求不存在",duration:1500,forbidClick:!0});break;default:Object(n["a"])({message:t.response.data.message,duration:1500,forbidClick:!0})}return Promise.reject(t.response)}}))},"859b":function(t,e,a){},"93aa":function(t,e,a){t.exports=a.p+"img/b2.cb3af1fa.jpg"},"9c0c":function(t,e,a){},a186:function(t,e,a){t.exports=a.p+"img/b1.9cbe4183.jpg"},abbd:function(t,e,a){"use strict";var n=a("859b"),s=a.n(n);s.a},ffa4:function(t,e,a){t.exports=a.p+"img/tjpic.713bf09b.png"}});
//# sourceMappingURL=app.5b5fbfb3.js.map