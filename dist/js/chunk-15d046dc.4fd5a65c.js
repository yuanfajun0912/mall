(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15d046dc"],{"119c":function(t,e,n){"use strict";var o=n("5ef2"),a=n.n(o);a.a},1588:function(t,e,n){"use strict";var o=n("1958"),a=n.n(o);a.a},1958:function(t,e,n){},"1a25":function(t,e,n){"use strict";var o=n("9918"),a=n.n(o);a.a},2909:function(t,e,n){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){return o(t)||a(t)||i()}n.d(e,"a",(function(){return r}))},"4df4":function(t,e,n){"use strict";var o=n("0366"),a=n("7b0b"),i=n("9bdd"),r=n("e95a"),s=n("50c4"),c=n("8418"),l=n("35a1");t.exports=function(t){var e,n,u,f,d,h,g=a(t),p="function"==typeof this?this:Array,m=arguments.length,y=m>1?arguments[1]:void 0,v=void 0!==y,b=l(g),C=0;if(v&&(y=o(y,m>2?arguments[2]:void 0,2)),void 0==b||p==Array&&r(b))for(e=s(g.length),n=new p(e);e>C;C++)h=v?y(g[C],C):g[C],c(n,C,h);else for(f=b.call(g),d=f.next,n=new p;!(u=d.call(f)).done;C++)h=v?i(f,y,[u.value,C],!0):u.value,c(n,C,h);return n.length=C,n}},"5ef2":function(t,e,n){},7812:function(t,e,n){},"7f9e":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tabcontrol"}},t._l(t.text,(function(e,o){return n("div",{key:e.index,class:{active:o===t.activeIndex},attrs:{id:"tabcontrol-item"},on:{click:function(e){return t.itemClick(o)}}},[n("span",[t._v(t._s(e))])])})),0)},a=[],i={name:"TabControl",data:function(){return{activeIndex:0}},methods:{itemClick:function(t){this.activeIndex=t,this.$emit("tabClick",t)}},props:{text:Array}},r=i,s=(n("1a25"),n("2877")),c=Object(s["a"])(r,o,a,!1,null,null,null);e["a"]=c.exports},"807f":function(t,e,n){"use strict";var o=n("7812"),a=n.n(o);a.a},8418:function(t,e,n){"use strict";var o=n("c04e"),a=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var r=o(e);r in t?a.f(t,r,i(0,n)):t[r]=n}},9918:function(t,e,n){},a630:function(t,e,n){var o=n("23e7"),a=n("4df4"),i=n("1c7e"),r=!i((function(t){Array.from(t)}));o({target:"Array",stat:!0,forced:r},{from:a})},ace1:function(t,e,n){},bb51:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"category"}},[n("nav-bar",{staticClass:"category-nav",scopedSlots:t._u([{key:"center",fn:function(){return[t._v("商品分类")]},proxy:!0}])}),n("category-menu",{staticClass:"category-menu",attrs:{menuList:t.menuList}}),n("category-content",{attrs:{menuList:t.menuList}})],1)},a=[],i=n("a7ac"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"category-menu"}},[n("scroll",{staticClass:"wrapper"},t._l(this.menuList,(function(e,o){return n("div",{key:o,staticClass:"item",class:{click:o===t.activeIndex},on:{click:function(n){return t.itemClick(e,o)}}},[t._v(t._s(e.title)+" ")])})),0)],1)},s=[],c=n("5d17"),l={name:"CategoryMenu",components:{Scroll:c["a"]},props:{menuList:Array},data:function(){return{activeIndex:0}},methods:{itemClick:function(t,e){this.$bus.$emit("getMaitKey",t.maitKey),this.$bus.$emit("getMiniWallKey",t.miniWallkey),this.activeIndex=e}}},u=l,f=(n("1588"),n("2877")),d=Object(f["a"])(u,r,s,!1,null,"599bec1a",null),h=d.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"category-content"}},[n("scroll",{ref:"scroll",staticClass:"wrapper",attrs:{probeType:3},on:{getPosition:t.getPosition}},[n("cg-content-top"),n("tab-control",{attrs:{text:["综合","新品","销量"]},on:{tabClick:t.itemClick}}),n("cg-content-detail",{attrs:{goods:t.goods[t.showType].list}})],1),n("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],nativeOn:{click:function(e){return t.backTop(e)}}})],1)},p=[],m=n("2909"),y=n("7f9e"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cg-content-top"}},t._l(t.linkList,(function(e,o){return n("div",{key:o,staticClass:"item-container"},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""}}),n("p",[t._v(t._s(e.title))])])])})),0)},b=[],C=n("1bab");function _(){return Object(C["a"])({url:"/category"})}function k(t){return Object(C["a"])({url:"/subcategory",params:{maitKey:t}})}function w(t,e){return Object(C["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var x={name:"CgContentTop",data:function(){return{linkList:[]}},created:function(){var t=this;this.getSubcategory_methods(3627),this.$bus.$on("getMaitKey",(function(e){t.getSubcategory_methods(e)}))},methods:{getSubcategory_methods:function(t){var e=this;k(t).then((function(t){e.linkList=t.data.list}))}}},$=x,T=(n("119c"),Object(f["a"])($,v,b,!1,null,"73ba8430",null)),j=T.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("goods-list",{attrs:{goods:t.goods}})],1)},S=[],A=n("6d71"),L={name:"CgContentDetail",components:{GoodsList:A["a"]},props:{goods:Array},data:function(){return{}},methods:{},created:function(){}},D=L,E=Object(f["a"])(D,O,S,!1,null,"6e3146a4",null),I=E.exports,K=n("725f"),M={name:"CategoryContent",components:{CgContentTop:j,Scroll:c["a"],TabControl:y["a"],CgContentDetail:I,BackTop:K["a"]},props:{},data:function(){return{goods:{pop:{list:[]},new:{list:[]},sell:{list:[]}},showType:"pop",isShow:!1}},methods:{itemClick:function(t){switch(t){case 0:this.showType="pop";break;case 1:this.showType="new";break;case 2:this.showType="sell";break}},getCategoryDetail_methods:function(t,e){var n=this;w(t,e).then((function(t){var o,a;0===n.goods[e].list.length?(o=n.goods[e].list).push.apply(o,Object(m["a"])(t)):(n.goods[e].list=[],(a=n.goods[e].list).push.apply(a,Object(m["a"])(t)))}))},getPosition:function(t){-t.y>1e3?this.isShow=!0:this.isShow=!1},backTop:function(){this.$refs.scroll.scrollTo(0,0)}},created:function(){var t=this;this.getCategoryDetail_methods(10062603,"pop"),this.getCategoryDetail_methods(10062603,"new"),this.getCategoryDetail_methods(10062603,"sell"),this.$bus.$on("getMiniWallKey",(function(e){t.getCategoryDetail_methods(e,"pop"),t.getCategoryDetail_methods(e,"new"),t.getCategoryDetail_methods(e,"sell")}))}},W=M,P=(n("cc33"),Object(f["a"])(W,g,p,!1,null,"b8b25470",null)),B=P.exports,J={name:"Category",components:{NavBar:i["a"],CategoryMenu:h,CategoryContent:B},data:function(){return{menuList:[]}},methods:{getCategory_methods:function(){var t=this;_().then((function(e){t.menuList=e.data.category.list}))}},created:function(){this.getCategory_methods()}},N=J,G=(n("807f"),Object(f["a"])(N,o,a,!1,null,"b3c7ba3e",null));e["default"]=G.exports},cc33:function(t,e,n){"use strict";var o=n("ace1"),a=n.n(o);a.a}}]);
//# sourceMappingURL=chunk-15d046dc.4fd5a65c.js.map