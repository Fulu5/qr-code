webpackJsonp([1],{"8N8L":function(r,e){},NHnr:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("7+uW"),n={render:function(){var r=this.$createElement,e=this._self._c||r;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=t("VU/8")({name:"App"},n,!1,function(r){t("gsu9")},null,null).exports,s=t("/ocq"),c=t("Xxa5"),i=t.n(c),l=t("exGp"),u=t.n(l),d=t("ikHa"),p={name:"HelloWorld",components:{QrcodeStream:d.QrcodeStream,QrcodeDropZone:d.QrcodeDropZone,QrcodeCapture:d.QrcodeCapture},data:function(){return{result:"",error:null,camera:"rear",dragover:!1,isOutsideUrl:!1}},methods:{onInit:function(r){var e=this;return u()(i.a.mark(function t(){var o,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r;case 3:if(o=t.sent,null!==(n=o.content)){t.next=8;break}return e.error="ERROR: 未检测到二维码",t.abrupt("return");case 8:e.processResult(n),e.error=null,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),"NotAllowedError"===t.t0.name?e.error="ERROR: 需要授予相机访问权限":"NotFoundError"===t.t0.name?e.error="ERROR: 未检测到摄像头":"NotSupportedError"===t.t0.name||"InsecureContextError"===t.t0.name?e.error="ERROR: 调用摄像头需要安全的上下文环境(HTTPS，localhost)":"NotReadableError"===t.t0.name?e.error="ERROR: 相机被占用":"OverconstrainedError"===t.t0.name?e.error="ERROR: 设备无法使用":"StreamApiNotSupportedError"===t.t0.name?e.error="ERROR: 当前浏览器不支持此功能":"DropImageFetchError"===t.t0.name?e.error="ERROR: 无法解析跨域图片":"DropImageDecodeError"===t.t0.name?e.error="ERROR: 仅支持图片格式文件":e.error=t.t0;case 15:case"end":return t.stop()}},t,e,[[0,12]])}))()},logErrors:function(r){r.catch(console.error)},onDragOver:function(r){this.dragover=r},processResult:function(r){this.isOutsideUrl=!1;/(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(r)&&(this.isOutsideUrl=!0),this.result=r}}},v={render:function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"qrcode-container q-ma-md"},[t("p",[t("b",{staticClass:"error"},[r._v(r._s(r.error))])]),r._v(" "),this.$q.platform.is.mobile&&null===r.error?t("qrcode-stream",{staticClass:"qrcode-stream",attrs:{camera:r.camera},on:{init:r.onInit,decode:r.processResult}},[t("div",{staticClass:"line"}),r._v(" "),t("div",{staticClass:"angle"})]):r._e(),r._v(" "),t("qrcode-drop-zone",{on:{detect:r.onInit,dragover:r.onDragOver,init:r.logErrors}},[t("div",{staticClass:"drop-area",class:{dragover:r.dragover}},[t("div",{staticClass:"q-pt-md"},[r._v("\n        "+r._s(r.$t("qrcode.dragOrSelect"))+"\n      ")]),r._v(" "),t("div",{staticClass:"q-pt-sm"},[t("qrcode-capture",{on:{detect:r.onInit}})],1)])]),r._v(" "),t("p",{staticClass:"decode-result"},[r._v("\n    "+r._s(r.$t("qrcode.result"))+"\n  ")]),r._v(" "),r.isOutsideUrl?t("p",[t("a",{attrs:{href:r.result,target:"_blank",rel:"noopener noreferrer"}},[r._v("\n      "+r._s(r.result)+"\n    ")])]):t("p",[t("b",[r._v("\n      "+r._s(r.result)+"\n    ")])])],1)},staticRenderFns:[]};var m=t("VU/8")(p,v,!1,function(r){t("8N8L")},"data-v-09485a5a",null).exports;o.a.use(s.a);var R=new s.a({routes:[{path:"/",name:"HelloWorld",component:m}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:R,components:{App:a},template:"<App/>"})},gsu9:function(r,e){}},["NHnr"]);
//# sourceMappingURL=app.d4afd8ba4bb1016df601.js.map