webpackJsonp([1],{NHnr:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t("7+uW"),o={render:function(){var r=this.$createElement,e=this._self._c||r;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=t("VU/8")({name:"App"},o,!1,function(r){t("gsu9")},null,null).exports,s=t("/ocq"),c=t("Xxa5"),i=t.n(c),l=t("exGp"),u=t.n(l),d=t("M4fF"),p=t.n(d),m=t("ikHa"),R={name:"HelloWorld",components:{QrcodeStream:m.QrcodeStream,QrcodeDropZone:m.QrcodeDropZone,QrcodeCapture:m.QrcodeCapture},data:function(){return{result:"",error:null,camera:"rear",dragover:!1}},methods:{onInit:function(r){var e=this;return u()(i.a.mark(function t(){var n,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r;case 3:if(n=t.sent,null!==(o=n.content)){t.next=8;break}return e.error="ERROR: 未检测到二维码",t.abrupt("return");case 8:e.processResult(o),e.error=null,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),"NotAllowedError"===t.t0.name?e.error="ERROR: 需要授予相机访问权限":"NotFoundError"===t.t0.name?e.error="ERROR: 未检测到摄像头":"NotSupportedError"===t.t0.name||"InsecureContextError"===t.t0.name?e.error="ERROR: 需要安全上下文(HTTPS，localhost)":"NotReadableError"===t.t0.name?e.error="ERROR: 相机被占用":"OverconstrainedError"===t.t0.name?e.error="ERROR: 设备无法使用":"StreamApiNotSupportedError"===t.t0.name?e.error="ERROR: 当前浏览器不支持此功能":"DropImageFetchError"===t.t0.name?e.error="ERROR: 无法解析跨域图片":"DropImageDecodeError"===t.t0.name?e.error="ERROR: 仅支持图片格式文件":e.error=t.t0;case 15:case"end":return t.stop()}},t,e,[[0,12]])}))()},logErrors:function(r){r.catch(console.error)},onDragOver:function(r){this.dragover=r},processResult:function(r){var e=window.open("url","_blank"),t=/(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;if(window.alert("is url : "+t.test(r)),t.test(r))if(window.alert("is inner url : "+p.a.includes(r,"//teamwork.jingdiao.com")),p.a.includes(r,"//teamwork.jingdiao.com")){var n=p.a.drop(r.split("/"),3).join("/");this.$router.push({path:n})}else e.location=r;else this.error="ERROR: 未找到相关内容";this.result=r}}},v={render:function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"qrcode-container q-ma-md"},[t("p",[t("b",{staticClass:"error"},[r._v(r._s(r.error))])]),r._v(" "),t("p",[r._v("\n    请选择本地图片进行扫描\n  ")]),r._v(" "),t("p",{staticClass:"decode-result"},[r._v("\n    扫描结果: "),t("b",[r._v(r._s(r.result))])]),r._v(" "),null===r.error?t("qrcode-stream",{staticClass:"qrcode-stream",attrs:{camera:r.camera},on:{init:r.onInit,decode:r.processResult}},[t("div",{staticClass:"line"}),r._v(" "),t("div",{staticClass:"angle"})]):r._e(),r._v(" "),t("div",{staticClass:"q-my-md"},[t("qrcode-capture",{on:{detect:r.onInit}})],1)],1)},staticRenderFns:[]};var f=t("VU/8")(R,v,!1,function(r){t("nwEm")},"data-v-cd48aa20",null).exports;n.a.use(s.a);var E=new s.a({routes:[{path:"/",name:"HelloWorld",component:f}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:E,components:{App:a},template:"<App/>"})},gsu9:function(r,e){},nwEm:function(r,e){}},["NHnr"]);
//# sourceMappingURL=app.fe34a18b8229c444929f.js.map