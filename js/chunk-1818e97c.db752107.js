(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1818e97c"],{"0b42":function(t,r,n){var o=n("da84"),e=n("e8b5"),c=n("68ee"),u=n("861d"),a=n("b622"),i=a("species"),f=o.Array;t.exports=function(t){var r;return e(t)&&(r=t.constructor,c(r)&&(r===f||e(r.prototype))?r=void 0:u(r)&&(r=r[i],null===r&&(r=void 0))),void 0===r?f:r}},"1dde":function(t,r,n){var o=n("d039"),e=n("b622"),c=n("2d00"),u=e("species");t.exports=function(t){return c>=51||!o((function(){var r=[],n=r.constructor={};return n[u]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"65f0":function(t,r,n){var o=n("0b42");t.exports=function(t,r){return new(o(t))(0===r?0:r)}},7901:function(t,r,n){"use strict";n.r(r);var o=n("7a23"),e=Object(o["f"])("h2",null,"產品內頁",-1),c={class:"container"},u=["src"];function a(t,r,n,a,i,f){return Object(o["r"])(),Object(o["e"])(o["a"],null,[e,Object(o["f"])("div",c,[Object(o["h"])(Object(o["A"])(i.product)+" ",1),Object(o["f"])("img",{src:i.product.imageUrl,alt:""},null,8,u)])],64)}n("99af");var i={data:function(){return{product:[]}},methods:{getProduct:function(){var t=this;console.log(this.$route);var r=this.$route.params.id;this.$http("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("jesswu","/product/").concat(r)).then((function(r){t.product=r.data.product}))}},mounted:function(){this.getProduct()}},f=n("6b0d"),s=n.n(f);const d=s()(i,[["render",a]]);r["default"]=d},8418:function(t,r,n){"use strict";var o=n("a04b"),e=n("9bf2"),c=n("5c6c");t.exports=function(t,r,n){var u=o(r);u in t?e.f(t,u,c(0,n)):t[u]=n}},"99af":function(t,r,n){"use strict";var o=n("23e7"),e=n("da84"),c=n("d039"),u=n("e8b5"),a=n("861d"),i=n("7b0b"),f=n("07fa"),s=n("8418"),d=n("65f0"),p=n("1dde"),b=n("b622"),v=n("2d00"),l=b("isConcatSpreadable"),h=9007199254740991,w="Maximum allowed index exceeded",x=e.TypeError,g=v>=51||!c((function(){var t=[];return t[l]=!1,t.concat()[0]!==t})),j=p("concat"),m=function(t){if(!a(t))return!1;var r=t[l];return void 0!==r?!!r:u(t)},y=!g||!j;o({target:"Array",proto:!0,forced:y},{concat:function(t){var r,n,o,e,c,u=i(this),a=d(u,0),p=0;for(r=-1,o=arguments.length;r<o;r++)if(c=-1===r?u:arguments[r],m(c)){if(e=f(c),p+e>h)throw x(w);for(n=0;n<e;n++,p++)n in c&&s(a,p,c[n])}else{if(p>=h)throw x(w);s(a,p++,c)}return a.length=p,a}})},e8b5:function(t,r,n){var o=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=chunk-1818e97c.db752107.js.map