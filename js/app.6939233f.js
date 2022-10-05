(function(){"use strict";var e={3358:function(e,t,a){var s=a(6369),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[e._m(0),t("div",{staticClass:"app-phone d-flex flex-column"},[t("div",{staticClass:"p-2"},[t("phone-body",{attrs:{step:e.step,posts:e.posts,filters:e.filters,image:e.image,selectedFilter:e.selectedFilter},model:{value:e.caption,callback:function(t){e.caption=t},expression:"caption"}})],1)])])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-header"},[t("div",{staticClass:"navbar navbar-expand-lg bg-white"},[t("div",{staticClass:"container-fluid"},[t("a",{staticClass:"navbar-brand logo",attrs:{href:"#"}},[e._v("Catstagram")]),t("div",[t("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},[t("li",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#"}},[t("img",{staticClass:"rounded-circle profile-img",attrs:{src:a(7389),alt:"profile picture"}})])])])])])])])}],r=(a(541),function(){var e=this,t=e._self._c;return t("div",{staticClass:"phone-body"},[1===e.step?t("div",{staticClass:"feed"},e._l(e.posts,(function(a){return t("vuegram-post",{key:e.posts.indexOf(a),attrs:{post:a}})})),1):e._e(),2===e.step?t("div",[t("div",{staticClass:"selected-image",class:e.selectedFilter,style:{backgroundImage:"url("+e.image+")"}}),t("div",{staticClass:"filter-container"},e._l(e.filters,(function(a){return t("filter-type",{key:e.filters.indexOf(a),attrs:{filter:a,image:e.image}})})),1)]):e._e(),3===e.step?t("div",[t("div",{staticClass:"selected-image",class:e.selectedFilter,style:{backgroundImage:"url("+e.image+")"}}),t("div",{staticClass:"caption-container"},[t("textarea",{staticClass:"caption-input",attrs:{placeholder:"Write a caption...",type:"text"},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])]):e._e()])}),o=[],l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vuegram-post"},[t("div",{staticClass:"header"},[t("div",{staticClass:"text-left"},[e._m(0),t("span",{staticClass:"username"},[e._v(e._s(e.post.username))])])]),t("div",{staticClass:"image-container",class:e.post.filter,style:{backgroundImage:"url("+e.post.postImage+")"},on:{dblclick:e.like}}),t("div",{staticClass:"content"},[t("div",{staticClass:"icons d-flex flex-row text-left"},[t("div",{staticClass:"heart p-0"},[t("b-icon",{staticStyle:{width:"25px",height:"30px"},attrs:{icon:"heart"}})],1)]),t("p",{staticClass:"likes"},[e._v(e._s(e.post.likes)+" likes")]),t("p",{staticClass:"caption"},[t("span",[e._v(e._s(e.post.username))]),e._v(" "+e._s(e.post.caption)+" ")])])])},c=[function(){var e=this,t=e._self._c;return t("figure",{staticClass:"d-inline"},[t("img",{staticClass:"rounded-circle profile-thumbnail",attrs:{src:a(7389)}})])}],u={name:"VuegramPost",props:{post:Object},methods:{like(){}}},p=u,d=a(1001),m=(0,d.Z)(p,l,c,!1,null,null,null),f=m.exports,g=function(){var e=this,t=e._self._c;return t("div",{staticClass:"filter-type"},[t("p",[e._v(e._s(e.filter.name))]),t("div",{staticClass:"img",class:e.filter.name,style:{backgroundImage:"url("+e.image+")"},on:{click:e.selectFilter}})])},h=[];const v=new s["default"];var b=v,y={name:"FilterType",props:{filter:Object,image:String},methods:{selectFilter(){b.$emit("filter-selected",{filter:this.filter.name})}}},_=y,k=(0,d.Z)(_,g,h,!1,null,null,null),C=k.exports,I={name:"PhoneBody",props:{step:Number,posts:Array,filters:Array,image:String,selectedFilter:String,value:String},components:{"vuegram-post":f,"filter-type":C}},x=I,w=(0,d.Z)(x,r,o,!1,null,null,null),j=w.exports,O=[{username:"iris.the.cat",userImage:"hard-coded",postImage:"./posts/IMG_1323.jpeg",likes:36,hasBeenLiked:!1,caption:"me and my oldest sister hunting for rabbits",filter:"perpetua"},{username:"iris.the.cat",userImage:"hard-coded",postImage:"./posts/IMG_9998.jpg",likes:36,hasBeenLiked:!1,caption:"i am a wild one #rawr",filter:"perpetua"},{username:"iris.the.cat",userImage:"hard-coded",postImage:"./posts/IMG_6479.jpeg",likes:20,hasBeenLiked:!1,caption:"hey! no, don't do that #nopaparazzispls",filter:"clarendon"},{username:"iris.the.cat",userImage:"hard-coded",postImage:"./posts/F7011A73-BA4A-4527-9F02-3321FDE40C84.JPG",likes:49,hasBeenLiked:!1,caption:"thinking about that mice i couldn't catch",filter:"lofi"},{username:"iris.the.cat",userImage:"hard-coded",postImage:"./posts/1f695d0b-f99b-4d8b-a2d9-2b0e479068b5.JPG",likes:49,hasBeenLiked:!1,caption:"someone tell him to let me go before i scratch his eye",filter:"lofi"},{username:"iris.the.cat",userImage:"hard-coded",postImage:"./posts/IMG_9893.jpeg",likes:49,hasBeenLiked:!1,caption:"catching up on zzz's",filter:"mayfair"},{username:"iris.the.cat",userImage:"hard-coded",postImage:"./posts/IMG_9945.jpeg",likes:49,hasBeenLiked:!1,caption:"seeee, i told you i am veryyyy tall",filter:"mayfair"},{username:"iris.the.cat",userImage:"hard-coded",postImage:"./posts/IMG_9712.JPG",likes:49,hasBeenLiked:!1,caption:"i wonder if people even realize how great i am",filter:"mayfair"}],F=[{name:"normal"},{name:"clarendon"},{name:"gingham"},{name:"moon"},{name:"lark"},{name:"reyes"},{name:"juno"},{name:"slumber"},{name:"aden"},{name:"perpetua"},{name:"mayfair"},{name:"rise"},{name:"hudson"},{name:"valencia"},{name:"xpro2"},{name:"willow"},{name:"lofi"},{name:"inkwell"},{name:"nashville"}],P={name:"App",data(){return{step:1,posts:O,filters:F,image:"",selectedFilter:"",caption:""}},created(){b.$on("filter-selected",(e=>{this.selectedFilter=e.filter}))},methods:{uploadImage(e){const t=e.target.files;if(!t.length)return;const a=new FileReader;a.readAsDataURL(t[0]),a.onload=e=>{this.image=e.target.result,this.step=2},document.querySelector("#file").value=""},sharePost(){const e={username:"fullstack_vue",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_lg_bg.png",postImage:this.image,likes:0,caption:this.caption,filter:this.filterType};this.posts.unshift(e),this.goToHome()},goToHome(){this.image="",this.selectedFilter="",this.caption="",this.step=1}},components:{"phone-body":j}},S=P,B=(0,d.Z)(S,i,n,!1,null,null,null),G=B.exports,L=a(5996),M=a(9425);a(7024);s["default"].use(L.XG7),s["default"].use(M.A7),s["default"].config.productionTip=!1,new s["default"]({render:e=>e(G)}).$mount("#app")},7389:function(e,t,a){e.exports=a.p+"img/profile.89296c5c.jpeg"}},t={};function a(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,s,i,n){if(!s){var r=1/0;for(u=0;u<e.length;u++){s=e[u][0],i=e[u][1],n=e[u][2];for(var o=!0,l=0;l<s.length;l++)(!1&n||r>=n)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(o=!1,n<r&&(r=n));if(o){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,i,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/catstagram/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,n,r=s[0],o=s[1],l=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(l)var u=l(a)}for(t&&t(s);c<r.length;c++)n=r[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},s=self["webpackChunkcatstagram"]=self["webpackChunkcatstagram"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(3358)}));s=a.O(s)})();
//# sourceMappingURL=app.6939233f.js.map