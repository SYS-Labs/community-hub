(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{255:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));s(97);const a=t=>`${t.charAt(0).toUpperCase()}${t.slice(1)}`,i={"en-US":"/en/","zh-CN":"/zh/","zh-TW":"/zh-tw/","de-AT":"/de/","vi-VN":"/vi/","ru-RU":"/ru/","uk-UA":"/uk/","pt-BR":"/br/"},n=Object.keys(i);Object.fromEntries(n.map(t=>[i[t],t]))},262:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));s(47);const a=(t,e,s)=>{if(t)if(t.startsWith("/"))s.path!==t&&e.push(t);else if(t.startsWith("http://")||t.startsWith("https://")||t.startsWith("mailto:"))window&&window.open(t);else{const a=s.path.slice(0,s.path.lastIndexOf("/"));e.push(`${a}/${encodeURI(t)}`)}}},298:function(t,e,s){},338:function(t,e,s){"use strict";s(298)},356:function(t,e,s){"use strict";s.r(e);var a=s(0),i=s(255),n=s(262),c=a.a.extend({name:"TagList",computed:{tagList(){return[{name:this.$themeLocaleConfig.blog.allText||Object(i.getDefaultLocale)().blog.allText,path:"/tag/"},...this.$tag.list]}},methods:{isActive(t){return t===(this.$currentTag&&this.$currentTag.key||this.$themeLocaleConfig.blog.allText||Object(i.getDefaultLocale)().blog.allText)},clickTag(t){Object(n.a)(t,this.$router,this.$route)}}}),l=(s(338),s(2)),r=Object(l.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{staticClass:"tag-list-wrapper"},t._l(t.tagList,(function(s,a){return e("li",{key:s.path,staticClass:"tag",class:{active:t.isActive(s.name),["tag"+a%9]:!0},on:{click:function(e){return t.clickTag(s.path)}}},[e("div",{staticClass:"tag-name"},[t._v(t._s(s.name))])])})),0)}),[],!1,null,null,null);e.default=r.exports}}]);