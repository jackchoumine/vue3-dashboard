(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[329],{329:(e,t,n)=>{"use strict";n.r(t),n.d(t,{mount:()=>f});var r=n(171),o={id:"app"},a={id:"nav"},s=(0,r.createTextVNode)("Home"),i=(0,r.createTextVNode)("Upload Dropzone"),c=n(252),u=n(152);const d={name:"App",components:{},props:{onNavigate:{type:Function},basePath:{type:String,default:"/"},currentPath:{type:String,default:"/"},isMemoryHistory:{type:Boolean,default:!1},sharedData:{type:Object,default:function(){return{}}}},setup:function(e){var t=e.basePath,n=e.currentPath,r=e.isMemoryHistory,o=e.onNavigate,a=e.sharedData,s=(0,u.useRouter)(),i=(0,u.useRoute)();return(0,c.YP)((function(){return i.path}),(function(e){o&&o(t+e)})),(0,c.bv)((function(){console.log("App vue mounted",t,n,a);var e,o=n;n.startsWith(t)&&(o=null!==(e=n.replace(t,""))&&void 0!==e?e:"/");var i=window.sessionStorage.getItem("user"),c=JSON.parse(window.sessionStorage.getItem("user"));console.log(i),console.log(c),r&&s.push(o)})),{}}};n(823);const l=(0,n(744).Z)(d,[["render",function(e,t,n,c,u,d){var l=(0,r.resolveComponent)("RouterLink"),p=(0,r.resolveComponent)("RouterView");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",a,[(0,r.createVNode)(l,{to:"/"},{default:(0,r.withCtx)((function(){return[s]})),_:1}),(0,r.createVNode)(l,{to:"/upload"},{default:(0,r.withCtx)((function(){return[i]})),_:1})]),(0,r.createCommentVNode)(" NOTE  给路由出口传递数据 "),(0,r.createVNode)(p,{sharedData:n.sharedData},null,8,["sharedData"])])}],["__scopeId","data-v-e66e9b44"]]);var p=[{path:"/",name:"home",component:function(){return n.e(560).then(n.bind(n,560))}},{path:"/upload",name:"upload",component:function(){return n.e(215).then(n.bind(n,215))}}];function f(e,t){var n=t.isMemoryHistory,o=t.basePath,a=t.currentPath,s=t.onNavigate,i=t.sharedData,c=void 0===i?{}:i,d=(0,r.createApp)(l,{basePath:o,currentPath:a,isMemoryHistory:n,onNavigate:s,sharedData:c}),f=n?(0,u.createMemoryHistory)(o):(0,u.createWebHistory)();return function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).history,n=void 0===t?(0,u.createWebHistory)():t,r=(0,u.createRouter)({history:n,routes:p});e.use(r)}(d,{history:f}),d.mount(e),{onParentNavigate:function(e){var t=e.pathname;console.log("dashboard vue onParentNavigate",t),f.listen((function(e){e!==t&&f.push(t)}))}}}var h=document.querySelector("#dashboard-dev-root");h&&f(h,{isMemoryHistory:!1})},465:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,"#app[data-v-e66e9b44]{font-family:'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;padding-bottom:10px}#nav[data-v-e66e9b44]{padding:30px}#nav a[data-v-e66e9b44]{font-weight:bold;color:#2c3e50}#nav a.router-link-exact-active[data-v-e66e9b44]{color:#42b983}\n",""]);const i=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},744:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}},823:(e,t,n)=>{var r=n(465);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(346).Z)("13044206",r,!1,{})},346:(e,t,n)=>{"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],s=a[0],i={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[s]?r[s].parts.push(i):n.push(r[s]={id:s,parts:[i]})}return n}n.d(t,{Z:()=>h});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},s=o&&(document.head||document.getElementsByTagName("head")[0]),i=null,c=0,u=!1,d=function(){},l=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,o){u=n,l=o||{};var s=r(e,t);return v(s),function(t){for(var n=[],o=0;o<s.length;o++){var i=s[o];(c=a[i.id]).refs--,n.push(c)}for(t?v(s=r(e,t)):s=[],o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete a[c.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(g(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(g(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function g(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(u)return d;r.parentNode.removeChild(r)}if(f){var o=c++;r=i||(i=m()),t=N.bind(null,r,o,!1),n=N.bind(null,r,o,!0)}else r=m(),t=C.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var y,b=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function N(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function C(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),l.ssrId&&e.setAttribute(p,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);