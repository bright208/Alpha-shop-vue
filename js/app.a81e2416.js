(function(t){function e(e){for(var i,r,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},s={app:0},n=[];function r(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0e5e97":"bf36868e"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=s[t]=[e,i]}));e.push(a[2]=i);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",l.name="ChunkLoadError",l.type=i,l.request=n,a[1](l)}s[t]=void 0}};var p=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Alpha-shop-vue/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[t._m(0),a("div",{staticClass:"hamburger"},[a("a",{staticClass:"hamburger-icon",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.toggleMenu()}}},[a("i",{staticClass:"fas fa-bars"})])]),t._m(1),a("nav",{staticClass:"menu",class:[{active:t.toggle}]},[t._m(2)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"brand"},[a("img",{staticClass:"brand-logo",attrs:{src:"https://i.ibb.co/K5LF2x5/Alpha-logo.png",alt:""}}),a("a",{attrs:{href:"#"}},[a("span",{staticClass:"brand-title"},[t._v("Alpha Shop")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icon-group"},[a("a",{staticClass:"search-icon",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-search"})]),a("a",{staticClass:"cart-icon",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-shopping-cart"})]),a("a",{staticClass:"moon-icon",attrs:{href:"#"}},[a("i",{staticClass:"far fa-moon"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("男款")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("女款")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("最新消息")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("客製商品")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("聯絡我們")])])])}],c={data:function(){return{toggle:!1}},methods:{toggleMenu:function(){this.toggle=!this.toggle}}},l=c,p=a("2877"),u=Object(p["a"])(l,r,o,!1,null,null,null),d=u.exports,m={components:{navbar:d}},h=m,f=Object(p["a"])(h,s,n,!1,null,null,null),v=f.exports,g=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"container"},[a("section",{staticClass:"billing-container"},[a("h3",{staticClass:"billing-title"},[t._v("結帳")]),a("div",{staticClass:"billing-stepper"},[a("div",{staticClass:"step",class:[{active:0===t.step},{checked:t.step>0}]},[a("div",{staticClass:"circle-container"}),a("div",{staticClass:"label-container"},[t._v("寄送地址")])]),a("div",{staticClass:"step",class:[{active:1===t.step},{checked:t.step>1}]},[a("div",{staticClass:"circle-container"}),a("span",{staticClass:"connect-line"}),a("div",{staticClass:"label-container"},[t._v("運送方式")])]),a("div",{staticClass:"step",class:[{active:2===t.step}]},[a("div",{staticClass:"circle-container"}),a("span",{staticClass:"connect-line"}),a("div",{staticClass:"label-container"},[t._v("付款資訊")])])]),a("FormPage",{directives:[{name:"show",rawName:"v-show",value:0===t.step,expression:"step === 0"}],on:{"page-one-data":t.handlePageOne}}),a("ShippingPage",{directives:[{name:"show",rawName:"v-show",value:1===t.step,expression:"step === 1"}],attrs:{initialShippingCost:t.shippingCost},on:{"after-select-shippingType":t.updateCost}}),a("PaymentPage",{directives:[{name:"show",rawName:"v-show",value:2===t.step,expression:"step === 2"}],on:{"page-two-data":t.handlePageTwo}}),a("div",{staticClass:"button-container",class:[{active:0===t.step}]},[a("button",{directives:[{name:"show",rawName:"v-show",value:0!==t.step,expression:"step !== 0"}],staticClass:"btn btn-outline",on:{click:function(e){return t.prevStep()}}},[t._v(" ← 上一步 ")]),a("button",{staticClass:"btn btn-primary",class:[{active:0===t.step}],attrs:{type:"button"},on:{click:function(e){return t.nextStep()}}},[t._v(" "+t._s(2===t.step?"確認送出":"下一步 →")+" ")])])],1),a("shoppingCart",{attrs:{initialShippingCost:t.shippingCost}})],1)},C=[],_=a("5530"),y=(a("b0c0"),a("e9c4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"billing-info"},[a("div",{staticClass:"form-container part-a"},[a("h3",{staticClass:"billing-title"},[t._v("寄送地址")]),a("div",{staticClass:"gender-container"},[a("label",{attrs:{for:""}},[t._v("稱謂")]),a("br"),a("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.gender,expression:"formData.gender"}],attrs:{name:"gender",id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.formData,"gender",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"male"}},[t._v("先生")]),a("option",{attrs:{value:"female"}},[t._v("小姐")])])]),a("div",{staticClass:"name-container"},[a("label",{attrs:{for:"name"}},[t._v("姓名")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],attrs:{id:"name",type:"text",name:"name",placeholder:"請輸入姓名",required:""},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}}),a("span",{staticClass:"tick"})]),a("div",{staticClass:"phone-container"},[a("label",{attrs:{for:"phone"}},[t._v("電話")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],attrs:{id:"phone",type:"text",name:"phone",placeholder:"請輸入行動電話",pattern:"[0-9]{8,10}",required:""},domProps:{value:t.formData.phone},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone",e.target.value)}}}),a("span",{staticClass:"tick"})]),a("div",{staticClass:"email-container"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],attrs:{id:"email",type:"email",name:"email",placeholder:"請輸入電子郵件",required:""},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}}),a("span",{staticClass:"tick"})]),a("div",{staticClass:"region-container"},[a("label",{attrs:{for:"region"}},[t._v("縣市")]),a("br"),a("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.region,expression:"formData.region"}],attrs:{name:"region",id:"region"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.formData,"region",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("請選擇縣市")]),a("option",{attrs:{value:"Keelung"}},[t._v("基隆市")]),a("option",{attrs:{value:"Taipei"}},[t._v("台北市")]),a("option",{attrs:{value:"New Taipei"}},[t._v("新北市")]),a("option",{attrs:{value:"Taoyuan"}},[t._v("桃園市")]),a("option",{attrs:{value:"Taichung"}},[t._v("臺中市")]),a("option",{attrs:{value:"Tainan"}},[t._v("臺南市")]),a("option",{attrs:{value:"Kaohsiung"}},[t._v("高雄市")]),a("option",{attrs:{value:"Ilan"}},[t._v("宜蘭縣")])])]),a("div",{staticClass:"address-container"},[a("label",{attrs:{for:"address"}},[t._v("地址")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.address,expression:"formData.address"}],attrs:{id:"address",type:"address",name:"address",placeholder:"請輸入地址",required:""},domProps:{value:t.formData.address},on:{input:function(e){e.target.composing||t.$set(t.formData,"address",e.target.value)}}}),a("span",{staticClass:"tick"})])])])}),D=[],x={data:function(){return{formData:{gender:"male",name:"",phone:"",email:"",region:"",address:""}}},watch:{formData:{handler:function(){this.$emit("page-one-data",this.formData)},deep:!0}}},w=x,P=Object(p["a"])(w,y,D,!1,null,null,null),O=P.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"product-container"},[a("h3",{staticClass:"product-title"},[t._v("購物籃")]),a("div",{staticClass:"render-box"},[a("h1",{directives:[{name:"show",rawName:"v-show",value:0===t.products.length,expression:"products.length === 0"}],staticClass:"empty-cart"},[t._v(" Oops 您的購物車是空的! ")]),t._l(t.products,(function(e){return a("div",{key:e.id,staticClass:"product-item"},[a("div",{staticClass:"product-photo"},[a("img",{attrs:{src:e.image,alt:""}})]),a("div",{staticClass:"product-info"},[a("h5",{staticClass:"item-name"},[t._v(t._s(e.name))]),a("div",{staticClass:"item-count"},[a("i",{staticClass:"fas fa-plus-circle",on:{click:function(a){return t.addCount(e.id)}}}),a("span",[t._v(" "+t._s(e.count)+" ")]),a("i",{staticClass:"fas fa-minus-circle",on:{click:function(a){return t.minusCount(e.id)}}})]),a("div",{staticClass:"item-price"},[t._v(t._s(e.price))])])])}))],2),a("div",{staticClass:"shipping-cost"},[a("span",{staticClass:"shipping-cost-title"},[t._v("運費")]),a("span",{staticClass:"shipping-cost-number"},[t._v(" "+t._s(0===t.initialShippingCost?"限時免費!":t.initialShippingCost)+" ")])]),a("div",{staticClass:"subtotal"},[a("span",{staticClass:"subtotal-title"},[t._v("小計")]),a("span",{staticClass:"subtotal-number"},[t._v(" "+t._s(t._f("currencyFormat")(t.sum))+" ")])])])},S=[],k=(a("a9e3"),a("d81d"),a("99af"),a("c740"),a("a434"),a("8d1a")),N=a.n(k),$=[{id:1,image:"https://i.ibb.co/TP7Z9jp/2.jpg",name:"郭雪芙 One boy 衝鋒衣",count:1,price:3999},{id:2,image:"https://i.ibb.co/RPgZ8h1/image.jpg",name:"周曉涵 All in one 輕峰衣",count:1,price:1299},{id:3,image:"https://i.ibb.co/grs20PY/one-boy-1601450187-a71bfb76-progressive.jpg",name:"One boy 輕量防風薄衝鋒衣 ",count:1,price:2999}],T={props:{initialShippingCost:{type:Number,required:!0}},data:function(){return{products:[],sum:0}},methods:{fetchProducts:function(){this.products=[].concat($).map((function(t){return Object(_["a"])(Object(_["a"])({},t),{},{pricecached:t.price})}))},fetchShipCost:function(){this.shipCost=this.initialShippingCost},addCount:function(t){this.products=this.products.map((function(e){return e.id===t?Object(_["a"])(Object(_["a"])({},e),{},{count:e.count+1}):e})),this.calculatePrice()},minusCount:function(t){this.products=this.products.map((function(e){return e.id===t&&0!==e.count?Object(_["a"])(Object(_["a"])({},e),{},{count:e.count-1}):e})),this.deleteItem(t),this.calculatePrice()},deleteItem:function(t){if(this.products.some((function(t){return 0===t.count}))){var e=this.products.findIndex((function(e){return e.id===t}));this.products.splice(e,1)}},calculatePrice:function(){this.products=this.products.map((function(t){return Object(_["a"])(Object(_["a"])({},t),{},{price:t.count*t.pricecached})})),this.sum=0;for(var t=0;t<this.products.length;t+=1)this.sum+=this.products[t].price;this.sum+=this.initialShippingCost}},filters:{currencyFormat:function(t){return N.a.format(t,{code:"TWD"})}},created:function(){this.fetchProducts(),this.calculatePrice()},watch:{initialShippingCost:function(){this.calculatePrice()}}},E=T,q=Object(p["a"])(E,j,S,!1,null,null,null),M=q.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"billing-info"},[a("div",{staticClass:"form-container part-b"},[a("h3",{staticClass:"billing-title"},[t._v("運送方式")]),a("div",{staticClass:"standard"},[a("input",{attrs:{type:"radio",name:"shipping",value:"0",id:"shipping-standard",checked:""},on:{click:function(e){return t.shippingCost(0)}}}),a("label",{attrs:{for:"shipping-standard"}}),a("span",{staticClass:"shipping-day"},[t._v("約3~7個工作天")]),a("span",{staticClass:"shipping-standard"},[t._v("標準運送")]),a("span",{staticClass:"shipping-free"},[t._v("免費")])]),a("div",{staticClass:"express"},[a("input",{attrs:{type:"radio",name:"shipping",value:"500",id:"shipping-express"},on:{click:function(e){return t.shippingCost(500)}}}),a("label",{attrs:{for:"shipping-express"}}),a("span",{staticClass:"shipping-day"},[t._v("48小時內送達")]),a("span",{staticClass:"shipping-standard"},[t._v("DHL貨運")]),a("span",{staticClass:"shipping-free"},[t._v("$500")])])])])},F=[],I={props:{initialShippingCost:{type:Number,required:!0}},data:function(){return{shipCost:0}},methods:{shippingCost:function(t){this.shipCost=t,this.$emit("after-select-shippingType",this.shipCost)},fetchShippingCost:function(){this.shipCost=this.initialShippingCost}},created:function(){this.fetchShippingCost()}},J=I,L=Object(p["a"])(J,A,F,!1,null,null,null),K=L.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"billing-info"},[a("div",{staticClass:"form-container part-c"},[a("h3",{staticClass:"billing-title"},[t._v("付款資訊")]),a("div",{staticClass:"cardholder-container"},[a("label",{attrs:{for:"cardholder"}},[t._v("持卡人姓名")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.cardholder,expression:"formData.cardholder"}],attrs:{id:"cardholder",type:"text",placeholder:"John Doe",name:"cardholder",required:""},domProps:{value:t.formData.cardholder},on:{input:function(e){e.target.composing||t.$set(t.formData,"cardholder",e.target.value)}}}),a("span",{staticClass:"tick"})]),a("div",{staticClass:"card-number-container"},[a("label",{attrs:{for:"card-number"}},[t._v("卡號")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.cardNumber,expression:"formData.cardNumber"}],attrs:{id:"card-number",type:"text",placeholder:"1111 2222 3333 4444",name:"card-number",pattern:"[0-9]{16}",required:""},domProps:{value:t.formData.cardNumber},on:{input:function(e){e.target.composing||t.$set(t.formData,"cardNumber",e.target.value)}}}),a("span",{staticClass:"tick"})]),a("div",{staticClass:"expiry-date-container",attrs:{required:""}},[a("label",{attrs:{for:"expiry-date"}},[t._v("有效期限")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.expiryDate,expression:"formData.expiryDate"}],attrs:{id:"expiry-date",type:"text",placeholder:"MM/YY",name:"expiry-date",required:""},domProps:{value:t.formData.expiryDate},on:{input:function(e){e.target.composing||t.$set(t.formData,"expiryDate",e.target.value)}}}),a("span",{staticClass:"tick"})]),a("div",{staticClass:"cvc-container"},[a("label",{attrs:{for:"cvc"}},[t._v("CVC/CCV")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.cvc,expression:"formData.cvc"}],attrs:{id:"cvc",type:"text",placeholder:"123",name:"cvc",required:""},domProps:{value:t.formData.cvc},on:{input:function(e){e.target.composing||t.$set(t.formData,"cvc",e.target.value)}}}),a("span",{staticClass:"tick"})])])])},V=[],Z={data:function(){return{formData:{cardholder:"",cardNumber:"",expiryDate:"",cvc:""}}},watch:{formData:{handler:function(){this.$emit("page-two-data",this.formData)},deep:!0}}},B=Z,H=Object(p["a"])(B,Y,V,!1,null,null,null),R=H.exports,W=a("3d20"),z=a.n(W),G=z.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),Q={data:function(){return{step:0,shippingCost:0,form:{gender:"male",name:"",phone:"",email:"",region:"",address:"",deliveryFee:0,cardholder:"",cardNumber:"",expiryDate:"",cvc:""}}},components:{FormPage:O,ShoppingCart:M,ShippingPage:K,PaymentPage:R},methods:{handleSubmit:function(){var t=this.form,e=t.name,a=t.phone,i=t.email,s=t.region,n=t.address,r=t.cardholder,o=t.cardNumber,c=t.expiryDate,l=t.cvc;e&&a&&i&&s&&n&&r&&o&&c&&l?(localStorage.setItem("form-data-storage",JSON.stringify(this.form)),G.fire({icon:"success",title:"您的資料已送出成功"})):G.fire({icon:"warning",title:"您尚有空白處未填寫"})},nextStep:function(){this.step<2?this.step=this.step+1:2===this.step&&this.handleSubmit()},prevStep:function(){this.step=this.step-1},updateCost:function(t){this.shippingCost=t},handlePageOne:function(t){this.form=Object(_["a"])(Object(_["a"])({},this.form),t)},handlePageTwo:function(t){this.form=Object(_["a"])(Object(_["a"])({},this.form),t)}},watch:{shippingCost:{handler:function(){this.form.deliveryFee=this.shippingCost}}}},U=Q,X=Object(p["a"])(U,b,C,!1,null,null,null),tt=X.exports;i["a"].use(g["a"]);var et=[{path:"/",name:"home",component:tt},{path:"*",name:"notfound",component:function(){return a.e("chunk-2d0e5e97").then(a.bind(null,"9703"))}}],at=new g["a"]({routes:et}),it=at;i["a"].config.productionTip=!1,new i["a"]({router:it,render:function(t){return t(v)}}).$mount("#app")}});
//# sourceMappingURL=app.a81e2416.js.map