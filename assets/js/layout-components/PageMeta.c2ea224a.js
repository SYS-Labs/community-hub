(window.webpackJsonp=window.webpackJsonp||[]).push([[44,58],{254:function(t,e,r){"use strict";r.d(e,"d",(function(){return i})),r.d(e,"a",(function(){return s})),r.d(e,"j",(function(){return a})),r.d(e,"i",(function(){return o})),r.d(e,"f",(function(){return u})),r.d(e,"g",(function(){return c})),r.d(e,"h",(function(){return l})),r.d(e,"c",(function(){return h})),r.d(e,"b",(function(){return f})),r.d(e,"e",(function(){return d})),r.d(e,"k",(function(){return p}));r(47);const i=/#.*$/u,n=/\.(md|html)$/u,s=/\/$/u,a=/^[a-z]+:/iu,o=t=>decodeURI(t).replace(i,"").replace(n,""),u=t=>a.test(t),c=t=>t.startsWith("mailto:"),l=t=>t.startsWith("tel:"),h=t=>{if(u(t))return t;const e=i.exec(t),r=e?e[0]:"",n=o(t);return n.endsWith("/")?t:`${n}.html${r}`},f=t=>/(\.html|\/)$/u.test(t)?t:t+"/",d=(t,e)=>{const r=decodeURIComponent(t.hash),n=(t=>{const e=i.exec(t);return e?e[0]:""})(e);if(n&&r!==n)return!1;return o(t.path)===o(e)},p=(t,e,r)=>{if(u(t))return t;const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return`${e}${t}`;const n=e.split("/");r&&n[n.length-1]||n.pop();const s=t.replace(/^\//u,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?n.pop():"."!==e&&n.push(e)}return""!==n[0]&&n.unshift(""),n.join("/")}},318:function(t,e,r){},361:function(t,e,r){"use strict";r.r(e);var i=r(2),n=Object(i.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon edit-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M117.953 696.992 64.306 959.696l265.931-49.336 450.204-452.505-212.284-213.376-450.204 452.513zm496.384-296.326L219.039 797.993l-46.108-46.34L568.233 354.33l46.104 46.335zm345.357-122.99-114.45 115.04-212.288-213.377 114.45-115.035 212.288 213.371zm0 0",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=n.exports},381:function(t,e,r){"use strict";r(318)},405:function(t,e,r){"use strict";r.r(e);var i=r(0),n=r(361),s=r(254),a=i.a.extend({name:"PageMeta",components:{EditIcon:n.default},computed:{i18n(){return this.$themeLocaleConfig.meta||{contributor:"Contributors",editLink:"Edit this page",updateTime:"Last Updated"}},contributors(){return!1===this.$page.frontmatter.contributor||!1===this.$themeConfig.contributor&&!this.$page.frontmatter.contributor?[]:this.$page.contributors||[]},contributorsText(){return this.i18n.contributor},updateTime(){return!1===this.$page.frontmatter.contributor||!1===this.$themeConfig.updateTime&&!this.$page.frontmatter.updateTime?"":this.$page.updateTime||""},updateTimeText(){return this.i18n.updateTime},editLink(){const t=this.$page.frontmatter.editLink||!1!==this.$themeConfig.editLinks&&!1!==this.$page.frontmatter.editLink,{repo:e,docsRepo:r}=this.$site.themeConfig;return!(!t||!e&&!r||!this.$page.relativePath)&&this.createEditLink()},editLinkText(){return this.i18n.editLink}},methods:{createEditLink(){const{repo:t="",docsRepo:e=t,docsDir:r="",docsBranch:i="main"}=this.$themeConfig;if(/bitbucket.org/u.test(e))return`${e.replace(s.a,"")}/src/${i}/${r?r.replace(s.a,"")+"/":""}${this.$page.relativePath}?mode=edit&spa=0&at=${i}&fileviewer=file-view-default`;if(/gitlab.com/u.test(e))return`${e.replace(s.a,"")}/-/edit/${i}/${r?r.replace(s.a,"")+"/":""}${this.$page.relativePath}`;return`${(s.j.test(e)?e:"https://github.com/"+e).replace(s.a,"")}/edit/${i}/${r?r.replace(s.a,"")+"/":""}${this.$page.relativePath}`}}}),o=(r(381),r(2)),u=Object(o.a)(a,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("footer",{staticClass:"page-meta"},[e("div",{staticClass:"footer-box"},[e("div",{staticClass:"footer-box-area"},[e("span",{staticClass:"footer-section-header"},[t._v("About this page")]),t._v(" "),e("ul",[e("li",[t._v("Updated: "+t._s(t.updateTime.slice(0,t.updateTime.length-6)))])])]),t._v(" "),e("div",{staticClass:"footer-box-area"},[e("span",{staticClass:"footer-section-header"},[t._v("Contribute")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[e("i",{staticClass:"far fa-pencil"}),t._v(" Edit this page\n          ")])]),t._v(" "),t._m(0)])]),t._v(" "),t._m(1)])])}),[function(){var t=this._self._c;this._self._setupProxy;return t("li",[t("a",{attrs:{href:"https://github.com/sys-labs/rollux/contribute",target:"_blank",rel:"noopener noreferrer"}},[t("i",{staticClass:"fab fa-github"}),this._v(" Contribute to Rollux \n          ")])])},function(){var t=this._self._c;this._self._setupProxy;return t("div",{staticClass:"footer-box-area"},[t("span",{staticClass:"footer-section-header"},[this._v("Still need help?")]),this._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://discord.gg/rollux",target:"_blank",rel:"noopener noreferrer"}},[t("i",{staticClass:"fab fa-discord"}),this._v(" Rollux Community\n          ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://docs.syscoin.org/docs/intro/syscoin-what/",target:"_blank",rel:"noopener noreferrer"}},[t("i",{staticClass:"far fa-hands-helping"}),this._v(" Syscoin Documentation\n          ")])])])])}],!1,null,null,null);e.default=u.exports}}]);