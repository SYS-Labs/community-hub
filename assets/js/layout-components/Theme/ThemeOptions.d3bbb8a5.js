(window.webpackJsonp=window.webpackJsonp||[]).push([[53,52,55,57,61],{255:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));o(97);const s=t=>`${t.charAt(0).toUpperCase()}${t.slice(1)}`,a={"en-US":"/en/","zh-CN":"/zh/","zh-TW":"/zh-tw/","de-AT":"/de/","vi-VN":"/vi/","ru-RU":"/ru/","uk-UA":"/uk/","pt-BR":"/br/"},r=Object.keys(a);Object.fromEntries(r.map(t=>[a[t],t]))},320:function(t,e,o){},364:function(t,e,o){"use strict";o.r(e);var s=o(2),a=Object(s.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon auto-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M460.864 539.072H564.8L510.592 376l-49.728 163.072zM872 362.368V149.504H659.648L510.528 0l-149.12 149.504H149.12v212.928L0 511.872l149.12 149.504v212.928h212.352l149.12 149.504 149.12-149.504h212.352V661.376l149.12-149.504L872 362.368zM614.464 693.12l-31.616-90.624H438.272l-31.616 90.624h-85.888l144.576-407.68h90.368l144.576 407.68h-85.824zm0 0",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=a.exports},365:function(t,e,o){"use strict";o.r(e);var s=o(2),a=Object(s.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon dark-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M935.539 630.402c-11.43-11.432-28.674-14.739-43.531-8.354-46.734 20.103-96.363 30.297-147.508 30.297-99.59 0-193.221-38.784-263.64-109.203-108.637-108.637-139.61-270.022-78.908-411.148a39.497 39.497 0 0 0-51.886-51.887c-52.637 22.64-100.017 54.81-140.826 95.616-85.346 85.346-132.346 198.821-132.346 319.52 0 120.7 47.001 234.172 132.347 319.519S408.063 947.11 528.76 947.11c120.7 0 234.172-47.003 319.52-132.351 40.809-40.81 72.978-88.19 95.616-140.826a39.497 39.497 0 0 0-8.356-43.532z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=a.exports},366:function(t,e,o){"use strict";o.r(e);var s=o(2),a=Object(s.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon light-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M512 256a42.667 42.667 0 0 0 42.667-42.667V128a42.667 42.667 0 0 0-85.334 0v85.333A42.667 42.667 0 0 0 512 256zm384 213.333h-85.333a42.667 42.667 0 0 0 0 85.334H896a42.667 42.667 0 0 0 0-85.334zM256 512a42.667 42.667 0 0 0-42.667-42.667H128a42.667 42.667 0 0 0 0 85.334h85.333A42.667 42.667 0 0 0 256 512zm9.387-298.667a42.667 42.667 0 0 0-59.307 62.72l61.44 59.307a42.667 42.667 0 0 0 31.147 11.947 42.667 42.667 0 0 0 30.72-13.227 42.667 42.667 0 0 0 0-60.16zm459.946 133.974a42.667 42.667 0 0 0 29.44-11.947l61.44-59.307a42.667 42.667 0 0 0-57.6-62.72l-61.44 60.587a42.667 42.667 0 0 0 0 60.16 42.667 42.667 0 0 0 28.16 13.227zM512 768a42.667 42.667 0 0 0-42.667 42.667V896a42.667 42.667 0 0 0 85.334 0v-85.333A42.667 42.667 0 0 0 512 768zm244.48-79.36a42.667 42.667 0 0 0-59.307 61.44l61.44 60.587a42.667 42.667 0 0 0 29.44 11.946 42.667 42.667 0 0 0 30.72-12.8 42.667 42.667 0 0 0 0-60.586zm-488.96 0-61.44 59.307a42.667 42.667 0 0 0 0 60.586 42.667 42.667 0 0 0 30.72 12.8 42.667 42.667 0 0 0 28.587-10.666l61.44-59.307a42.667 42.667 0 0 0-59.307-61.44zM512 341.333A170.667 170.667 0 1 0 682.667 512 170.667 170.667 0 0 0 512 341.333z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=a.exports},387:function(t,e,o){"use strict";o(320)},388:function(t,e,o){},404:function(t,e,o){"use strict";o.r(e);var s=o(0),a=o(364),r=o(365),i=o(366);o(47);const n=(t,e,o)=>{const s=[];t.remove(...o),t.forEach(t=>{s.push(t)}),t.value="",t.add(...e,...s)};var l=s.a.extend({name:"DarkmodeSwitch",components:{AutoIcon:a.default,DarkIcon:r.default,LightIcon:i.default},data:()=>({darkmode:"auto"}),computed:{darkmodeConfig(){return this.$themeConfig.darkmode||"auto-switch"}},mounted(){this.darkmode=localStorage.getItem("darkmode")||"auto","auto-switch"===this.darkmodeConfig?"auto"===this.darkmode?this.setDarkmode("auto"):this.setDarkmode(this.darkmode):"auto"===this.darkmodeConfig?this.setDarkmode("auto"):"switch"===this.darkmodeConfig?this.setDarkmode(this.darkmode):this.setDarkmode("off")},methods:{setDarkmode(t){if("on"===t)this.toggleDarkmode(!0);else if("off"===t)this.toggleDarkmode(!1);else{const t=window.matchMedia("(prefers-color-scheme: dark)").matches,e=window.matchMedia("(prefers-color-scheme: light)").matches;if(window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches&&this.toggleDarkmode(!0)}),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",t=>{t.matches&&this.toggleDarkmode(!1)}),t)this.toggleDarkmode(!0);else if(e)this.toggleDarkmode(!1);else{const t=(new Date).getHours();this.toggleDarkmode(t<6||t>=18)}}this.darkmode=t,localStorage.setItem("darkmode",t)},toggleDarkmode(t){const e=document.body.classList;t?n(e,["theme-dark"],["theme-light"]):n(e,["theme-light"],["theme-dark"])}}}),c=(o(387),o(2)),d=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"darkmode-switch"},["auto-switch"===t.darkmodeConfig?[e("div",{staticClass:"item day",class:{active:"off"===t.darkmode},on:{click:function(e){return t.setDarkmode("off")}}},[e("LightIcon")],1),t._v(" "),e("div",{staticClass:"item auto",class:{active:"auto"===t.darkmode},on:{click:function(e){return t.setDarkmode("auto")}}},[e("AutoIcon")],1),t._v(" "),e("div",{staticClass:"item night",class:{active:"on"===t.darkmode},on:{click:function(e){return t.setDarkmode("on")}}},[e("DarkIcon")],1)]:"switch"===t.darkmodeConfig?e("div",{staticClass:"switch"},[e("input",{staticClass:"switch-input",attrs:{id:"switch",type:"checkbox"},domProps:{checked:"on"!==t.darkmode},on:{click:function(e){return t.setDarkmode("on"===t.darkmode?"off":"on")}}}),t._v(" "),t._m(0)]):t._e()],2)}),[function(){var t=this._self._c;this._self._setupProxy;return t("label",{staticClass:"label",attrs:{for:"switch"}},[t("span",{staticClass:"label-content"})])}],!1,null,null,null);e.default=d.exports},437:function(t,e,o){"use strict";o(388)},512:function(t,e,o){"use strict";o.r(e);var s=o(0),a=o(255),r=o(404);const i={red:"#e74c3c",blue:"#3498db",green:"#3eaf7c",orange:"#f39c12",purple:"#8e44ad"};var n=s.a.extend({name:"ThemeOptions",components:{DarkmodeSwitch:r.default},data:()=>({themeColor:{},isDarkmode:!1}),computed:{text(){return this.$themeLocaleConfig.themeColor||Object(a.getDefaultLocale)().themeColor},themeColorEnabled(){return!1!==this.$themeConfig.themeColor},switchEnabled(){return"disable"!==this.$themeConfig.darkmode&&"auto"!==this.$themeConfig.darkmode}},mounted(){const t=localStorage.getItem("theme");this.themeColor={list:this.$themeConfig.themeColor?Object.keys(this.$themeConfig.themeColor):Object.keys(i),picker:this.$themeConfig.themeColor||i},t&&this.setTheme(t)},methods:{setTheme(t){const e=document.body.classList,o=this.themeColor.list.map(t=>"theme-"+t);if(!t)return localStorage.removeItem("theme"),void e.remove(...o);e.remove(...o.filter(e=>e!=="theme-"+t)),e.add("theme-"+t),localStorage.setItem("theme",t)}}}),l=(o(437),o(2)),c=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"theme-options"},[t.themeColorEnabled?e("ul",{staticClass:"themecolor-select"},[e("label",{attrs:{for:"themecolor-select"},domProps:{textContent:t._s(t.text.themeColor+":")}}),t._v(" "),e("li",[e("span",{staticClass:"default-theme",on:{click:function(e){return t.setTheme()}}})]),t._v(" "),t._l(t.themeColor.list,(function(o){return e("li",{key:o},[e("span",{style:{background:t.themeColor.picker[o]},on:{click:function(e){return t.setTheme(o)}}})])}))],2):t._e(),t._v(" "),t.switchEnabled?e("div",{staticClass:"darkmode-toggle"},[e("label",{staticClass:"desc",attrs:{for:"darkmode-toggle"},domProps:{textContent:t._s(t.text.themeMode+":")}}),t._v(" "),e("DarkmodeSwitch"),t._v(" "),e("ScreenFull")],1):t._e()])}),[],!1,null,null,null);e.default=c.exports}}]);