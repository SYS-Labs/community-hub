/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "226dcd67ef81ae862d486b6d1247a9d9"
  },
  {
    "url": "assets/css/0.styles.c7692449.css",
    "revision": "02865e8482ba3eaf651754512bf3e696"
  },
  {
    "url": "assets/img/alloc-by-time.aaedf1f6.png",
    "revision": "aaedf1f674028a1251c5d31541e2a372"
  },
  {
    "url": "assets/img/attestations.91fa42db.png",
    "revision": "91fa42dbc1e6e09eab64a39b8026fe95"
  },
  {
    "url": "assets/img/attestationstation.0d15355f.png",
    "revision": "0d15355f93c6b39d80685910106dd7ba"
  },
  {
    "url": "assets/img/ChooseBridgeType.5fb8662d.png",
    "revision": "5fb8662d9fc4ed551a7aad1fe0bf8be0"
  },
  {
    "url": "assets/img/danger-dark.86c63c40.svg",
    "revision": "86c63c4006d5cd5f860cdef57310696a"
  },
  {
    "url": "assets/img/danger.1c7d8a0f.svg",
    "revision": "1c7d8a0f45b8bee5d5b92334a16e2711"
  },
  {
    "url": "assets/img/default-skin.b257fa9c.svg",
    "revision": "b257fa9c5ac8c515ac4d77a667ce2943"
  },
  {
    "url": "assets/img/diagramChainlocks.831fb821.png",
    "revision": "831fb821ad0e0d9e230fb531c38d435b"
  },
  {
    "url": "assets/img/ecosystem_fund_process.75f94e93.jpeg",
    "revision": "75f94e93923791375febd5db3788919e"
  },
  {
    "url": "assets/img/eigan.b9a454d1.png",
    "revision": "b9a454d1967756ac0f54cd46a1f53053"
  },
  {
    "url": "assets/img/hero.b62ddd9c.jpg",
    "revision": "b62ddd9c4a72085202b5218e4c98fd68"
  },
  {
    "url": "assets/img/info-dark.a1decb69.svg",
    "revision": "a1decb69db82fb8eebb48704dd74e649"
  },
  {
    "url": "assets/img/info.6f2cfedb.svg",
    "revision": "6f2cfedb8e6d19d1b24eb73943f7ff4e"
  },
  {
    "url": "assets/img/input-data.8ea2ea58.png",
    "revision": "8ea2ea58e300232beebec70e9a702d8d"
  },
  {
    "url": "assets/img/mmwalkthrough1.a463c2ba.png",
    "revision": "a463c2ba98a06a7cfe3bc469b4bea60d"
  },
  {
    "url": "assets/img/mmwalkthrough10.b5e07310.png",
    "revision": "b5e073107735dbd2a190f766ef5445cc"
  },
  {
    "url": "assets/img/mmwalkthrough11.8752a186.png",
    "revision": "8752a186efb018916c20042f02a3898e"
  },
  {
    "url": "assets/img/mmwalkthrough2.68156d3c.png",
    "revision": "68156d3c5fcca8d82a2dfc324408a56a"
  },
  {
    "url": "assets/img/mmwalkthrough3.40f38bfe.png",
    "revision": "40f38bfe5d2c3c2b7e61cca8caa80616"
  },
  {
    "url": "assets/img/mmwalkthrough4.8863e46a.png",
    "revision": "8863e46a89c156620981744324834270"
  },
  {
    "url": "assets/img/mmwalkthrough5.121b8828.png",
    "revision": "121b8828331cda773865fd8c3fbce095"
  },
  {
    "url": "assets/img/mmwalkthrough6.635c6d4c.png",
    "revision": "635c6d4c1b1d824d50b14aa81ddaa59c"
  },
  {
    "url": "assets/img/mmwalkthrough7.52e19ab3.png",
    "revision": "52e19ab353f34bc845f1ccc9272bb594"
  },
  {
    "url": "assets/img/mmwalkthrough8.f2c9bd4a.png",
    "revision": "f2c9bd4a4db2d982707e2b6d96eb1637"
  },
  {
    "url": "assets/img/mmwalkthrough9.0dab59d2.png",
    "revision": "0dab59d236bd1ee06d4a59ec73357ca2"
  },
  {
    "url": "assets/img/network.527578cd.png",
    "revision": "527578cd7f858ca704d63bb76030da6e"
  },
  {
    "url": "assets/img/note-dark.8668720f.svg",
    "revision": "8668720f2e50ebd01173f11a89d9da6e"
  },
  {
    "url": "assets/img/note.32319b2e.svg",
    "revision": "32319b2e9c86860d8a4f1c8f660096cb"
  },
  {
    "url": "assets/img/overall.eb2d6e3e.png",
    "revision": "eb2d6e3e1925bcbf4ca652ca639a6b13"
  },
  {
    "url": "assets/img/pali_selectnetwork.482570f5.png",
    "revision": "482570f58b12bdfc8d7462a4e1c02c88"
  },
  {
    "url": "assets/img/paliwalkthrough1.032f772b.png",
    "revision": "032f772bd5510decbfa3e1b9a2b00788"
  },
  {
    "url": "assets/img/paliwalkthrough2.044fa44c.png",
    "revision": "044fa44ca0f312f0cbaaf5cfaa45b11f"
  },
  {
    "url": "assets/img/paliwalkthrough3.ad629c02.png",
    "revision": "ad629c026ec2da8a6a82216a25c75008"
  },
  {
    "url": "assets/img/paliwalkthrough4.3ee63ff1.png",
    "revision": "3ee63ff1e6baace54084103398bff978"
  },
  {
    "url": "assets/img/paliwalkthrough5.c4790b87.png",
    "revision": "c4790b875c8faba4ff19a3b26ec06f74"
  },
  {
    "url": "assets/img/paliwalkthrough6.658803bb.png",
    "revision": "658803bbb72c5b0e83054f1d394c8fc7"
  },
  {
    "url": "assets/img/pie2.1015b1b6.jpeg",
    "revision": "1015b1b6fe6d7d47c6f78d8d189b596f"
  },
  {
    "url": "assets/img/poda.b8a39fee.png",
    "revision": "b8a39fee4e7e8bb5116604d5e7a26636"
  },
  {
    "url": "assets/img/rollux-deployment.485df0c1.png",
    "revision": "485df0c1c294432967e8ab16ada36c95"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Switch_RolluxToNEVM.0fc992c0.png",
    "revision": "0fc992c0cd4329c2a2c215f708a02375"
  },
  {
    "url": "assets/img/tip-dark.0d0028db.svg",
    "revision": "0d0028db13caec45ac1527d8b673fae0"
  },
  {
    "url": "assets/img/tip.a9004be5.svg",
    "revision": "a9004be5a8a5a83cc9c77bba88c816ff"
  },
  {
    "url": "assets/img/two-phase-withdrawals.e1b4a422.png",
    "revision": "e1b4a4220ed56d041b780b81a94b1963"
  },
  {
    "url": "assets/img/virt_cycle.61308786.png",
    "revision": "61308786c6d135701bff7795390f638d"
  },
  {
    "url": "assets/img/warning-dark.b995cb45.svg",
    "revision": "b995cb45fa552ac10ad35fa7716af15b"
  },
  {
    "url": "assets/img/warning.57a43d6d.svg",
    "revision": "57a43d6dcdee07d8db78a5dd3d6137ba"
  },
  {
    "url": "assets/js/13.27cea80b.js",
    "revision": "40f956cce392754601bcf4be8ff7f15b"
  },
  {
    "url": "assets/js/199.c5b99d08.js",
    "revision": "c31c899656746be41849a805b007eead"
  },
  {
    "url": "assets/js/app.efaf31a6.js",
    "revision": "6963f8749bad540b47160e9f56249c88"
  },
  {
    "url": "assets/js/layout-Blog.cc38fa31.js",
    "revision": "757406d136e6de17a67fb8e454bafa9c"
  },
  {
    "url": "assets/js/layout-Blog~layout-NotFound~layout-components/Common.9cb591cd.js",
    "revision": "0bd62c13b326c1cb36b826877fabf34f"
  },
  {
    "url": "assets/js/layout-components/AlgoliaSearch/Dropdown.b25cb710.js",
    "revision": "82396e48cd17dfc830b8ed59e3de21bd"
  },
  {
    "url": "assets/js/layout-components/AlgoliaSearch/Full.70ee2a6e.js",
    "revision": "12835c04d5ee1b990aaa3a405bae49fb"
  },
  {
    "url": "assets/js/layout-components/Anchor.43d269ea.js",
    "revision": "641d8f9fced51549b30d8b28be6833ce"
  },
  {
    "url": "assets/js/layout-components/Blog/ArticleInfo.e54e36dc.js",
    "revision": "978ea9b762feb9af10016c57c68c1d07"
  },
  {
    "url": "assets/js/layout-components/Blog/ArticleItem.e47d3a5c.js",
    "revision": "c094cf56f13031c3e97ed5629be65f05"
  },
  {
    "url": "assets/js/layout-components/Blog/ArticleList.007a33cd.js",
    "revision": "8e972014127cfe8eb4b8c7b45e7744db"
  },
  {
    "url": "assets/js/layout-components/Blog/ArticleType.2351c586.js",
    "revision": "2b71a8ddc26ba313610f1ef2eaa07007"
  },
  {
    "url": "assets/js/layout-components/Blog/BloggerInfo.6f82dab9.js",
    "revision": "f18505dd5848c5bd65bb1f16a9f68d81"
  },
  {
    "url": "assets/js/layout-components/Blog/BlogHero.8011d728.js",
    "revision": "0015a48a822cea16b578a10d70dd6612"
  },
  {
    "url": "assets/js/layout-components/Blog/BlogHome.e395e69a.js",
    "revision": "b991708b273918119c269d6acb66d4b5"
  },
  {
    "url": "assets/js/layout-components/Blog/BlogInfo.03355230.js",
    "revision": "1e6787e6812b7688ebd18cae19810b0b"
  },
  {
    "url": "assets/js/layout-components/Blog/BlogInfoList.9afdd6a9.js",
    "revision": "73e077d632b001ef0443b5ac18302407"
  },
  {
    "url": "assets/js/layout-components/Blog/BlogPage.a6fc4510.js",
    "revision": "be1fe86c0629944d9d8c4ecea17d2cff"
  },
  {
    "url": "assets/js/layout-components/Blog/CategoryList.b9f88832.js",
    "revision": "296676f2f5f15c21d630b765b256e133"
  },
  {
    "url": "assets/js/layout-components/Blog/ProjectList.1d01acd0.js",
    "revision": "3f2a4c598b81d3a33086421639fdf78b"
  },
  {
    "url": "assets/js/layout-components/Blog/TagList.b1e0008a.js",
    "revision": "e5214a66e913de22272a040adef4d1ff"
  },
  {
    "url": "assets/js/layout-components/Blog/Timeline.364848d1.js",
    "revision": "c16bb8f5a0a572ef4c5644927e532e45"
  },
  {
    "url": "assets/js/layout-components/Blog/TimelineList.07df8831.js",
    "revision": "31f46b36882c389dc98820e76772530d"
  },
  {
    "url": "assets/js/layout-components/Clipboard.63adb008.js",
    "revision": "e3774dcfd1e48b5047d9a31b0694db39"
  },
  {
    "url": "assets/js/layout-components/Common.9d329061.js",
    "revision": "28043f5912e840178c49bce7392c4098"
  },
  {
    "url": "assets/js/layout-components/Home.02b3cd9d.js",
    "revision": "aa633685c14088d4a8e5051839e96063"
  },
  {
    "url": "assets/js/layout-components/MediaLinks.24cbe691.js",
    "revision": "e17d5c8e8075241779207ab4bdf79563"
  },
  {
    "url": "assets/js/layout-components/MyTransition.f5eac7ea.js",
    "revision": "6ceea5f7cb6d8818bb90b528a919de56"
  },
  {
    "url": "assets/js/layout-components/Navbar/DropdownLink.eeee0f79.js",
    "revision": "124f03347e11a82109977dfe299317e2"
  },
  {
    "url": "assets/js/layout-components/Navbar/Navbar.2ff0a8a1.js",
    "revision": "0473e6a8010c57a72fbe33083fa42a64"
  },
  {
    "url": "assets/js/layout-components/Navbar/NavLink.c3f43c5f.js",
    "revision": "770850a2666e25aa6fd9f9baa82931ab"
  },
  {
    "url": "assets/js/layout-components/Navbar/NavLinks.b449df21.js",
    "revision": "3a28aff3d2044f0a8bf6c86bac10c127"
  },
  {
    "url": "assets/js/layout-components/Navbar/RepoLink.85377d8d.js",
    "revision": "a4f770513afcf49a04f9ea884f32d64c"
  },
  {
    "url": "assets/js/layout-components/Navbar/SidebarButton.f90a2b05.js",
    "revision": "02bbbe9d61fe8940ae830fc3cff61593"
  },
  {
    "url": "assets/js/layout-components/Page.8ccfa11a.js",
    "revision": "069ffaf9a6517f99053541dd7df47b96"
  },
  {
    "url": "assets/js/layout-components/PageFooter.c05a321b.js",
    "revision": "f5bdcb041a9450d748286a6e1b221abe"
  },
  {
    "url": "assets/js/layout-components/PageMeta.c2ea224a.js",
    "revision": "d4833cbc7cd12a3c8bd1a9085ed6e0e7"
  },
  {
    "url": "assets/js/layout-components/PageNav.50b190fc.js",
    "revision": "bded12817f95745c9ab6a4e9b8b50e01"
  },
  {
    "url": "assets/js/layout-components/Password.523ff9d3.js",
    "revision": "3a040541da0c795fcec2bdfadd36a348"
  },
  {
    "url": "assets/js/layout-components/Sidebar/DropdownTransition.d6b22fb4.js",
    "revision": "1c3788a2e802a17375facc66b348b789"
  },
  {
    "url": "assets/js/layout-components/Sidebar/Sidebar.ae0d6943.js",
    "revision": "cd733f7f1f3b0d8368b83558f016ab0e"
  },
  {
    "url": "assets/js/layout-components/Sidebar/SidebarDropdownLink.6e8f48be.js",
    "revision": "2baeb3bd8e3895601517cfb5f1859ec6"
  },
  {
    "url": "assets/js/layout-components/Sidebar/SidebarGroup.7442af2c.js",
    "revision": "1b53e3bf9c997cc9341ffedcc4d83745"
  },
  {
    "url": "assets/js/layout-components/Sidebar/SidebarLink.09516023.js",
    "revision": "14fa944943325314eb6b92d01f551a1f"
  },
  {
    "url": "assets/js/layout-components/Sidebar/SidebarNavLinks.4ba81d39.js",
    "revision": "de8991b6cfca0fe2150e1202bd383862"
  },
  {
    "url": "assets/js/layout-components/Theme/DarkmodeSwitch.1a0f263c.js",
    "revision": "0c4497db7ae13ea3d728d6e10cbb9a09"
  },
  {
    "url": "assets/js/layout-components/Theme/ThemeColor.f23e4c39.js",
    "revision": "342e9101093fc300fe307bb42074e42b"
  },
  {
    "url": "assets/js/layout-components/Theme/ThemeOptions.d3bbb8a5.js",
    "revision": "914a218f2f618842c81758bab48e0236"
  },
  {
    "url": "assets/js/layout-icons/ArticleIcon.1efc5ad5.js",
    "revision": "363465a3529e53fee17463bff0ba68c5"
  },
  {
    "url": "assets/js/layout-icons/AutoIcon.e06e8cda.js",
    "revision": "ccf4e15d056f7317d51aabfea6105a4d"
  },
  {
    "url": "assets/js/layout-icons/BookIcon.0baaf101.js",
    "revision": "02d76509e11905116d8cff1b5a1c91f7"
  },
  {
    "url": "assets/js/layout-icons/DarkIcon.35fb404c.js",
    "revision": "795af6f426078657b7884f8d5f39b6cc"
  },
  {
    "url": "assets/js/layout-icons/EditIcon.fc2ce3e4.js",
    "revision": "eb30339054c7206644202979e26dfd31"
  },
  {
    "url": "assets/js/layout-icons/EmptyIcon.bdd4ec57.js",
    "revision": "1a325143e60e3d45ea452bdf80f430fb"
  },
  {
    "url": "assets/js/layout-icons/I18nIcon.c00436df.js",
    "revision": "db90f214190b6a375057a51fba079e2d"
  },
  {
    "url": "assets/js/layout-icons/LightIcon.493cffa0.js",
    "revision": "90eb725db934004340a65eaa89622831"
  },
  {
    "url": "assets/js/layout-icons/LinkIcon.fa1cba04.js",
    "revision": "c450192fb3830c50309313f0054331bb"
  },
  {
    "url": "assets/js/layout-icons/LockIcon.dbc3e975.js",
    "revision": "9ad35e6e93720ba2e02fdf15590de4fe"
  },
  {
    "url": "assets/js/layout-icons/media/Baidu.1e875fd3.js",
    "revision": "2c5f8b7da2e4b6d087bc6e1ad8ae40ac"
  },
  {
    "url": "assets/js/layout-icons/media/Bitbucket.5f91a1e4.js",
    "revision": "d97e3d73d657422e1f85af78627e1c30"
  },
  {
    "url": "assets/js/layout-icons/media/Dingding.e9488c63.js",
    "revision": "2c5e0ce0e8e9e3af7f73e963b67db91a"
  },
  {
    "url": "assets/js/layout-icons/media/Discord.6cfe8a36.js",
    "revision": "652c5cd1dffd2a86c547f032d0fdf633"
  },
  {
    "url": "assets/js/layout-icons/media/Dribbble.f250561a.js",
    "revision": "57ecbf2e1162d92ae7a5ca828f6ecbb0"
  },
  {
    "url": "assets/js/layout-icons/media/Email.8b99a713.js",
    "revision": "8f55995c384ca2694ee6abae9dce89fc"
  },
  {
    "url": "assets/js/layout-icons/media/Evernote.1c250233.js",
    "revision": "52677f168646216accb74808cd8480b2"
  },
  {
    "url": "assets/js/layout-icons/media/Facebook.fb9d8a20.js",
    "revision": "bdf9b180836b45d45a7c9dedf3aeee8e"
  },
  {
    "url": "assets/js/layout-icons/media/Flipboard.6a856038.js",
    "revision": "4436d58d05734f8885cc5184bd6e3b80"
  },
  {
    "url": "assets/js/layout-icons/media/Gitee.bcbb931f.js",
    "revision": "24248d69a49b3ab3fb1a3d8dd5e5cec4"
  },
  {
    "url": "assets/js/layout-icons/media/Github.823a9fad.js",
    "revision": "8166419ec6d7207226b6e19d988e1ad6"
  },
  {
    "url": "assets/js/layout-icons/media/Gitlab.7c9e7c03.js",
    "revision": "c216f45080245da99b613d3793e6363e"
  },
  {
    "url": "assets/js/layout-icons/media/Gmail.e5a60a0d.js",
    "revision": "6df006a86285492a33bc3409ec4fba95"
  },
  {
    "url": "assets/js/layout-icons/media/Instagram.b7f0d481.js",
    "revision": "0c034e4b41cd2febb93eec77a34f1a6c"
  },
  {
    "url": "assets/js/layout-icons/media/Lines.5134aa61.js",
    "revision": "d5665c39b809581f2183b221650460f3"
  },
  {
    "url": "assets/js/layout-icons/media/Linkedin.e0a5e8a7.js",
    "revision": "94363b9e0c75f83ba2d1dfb1cabd29d8"
  },
  {
    "url": "assets/js/layout-icons/media/Pinterest.57a824b1.js",
    "revision": "48a706c49c638f6368e12e40453f8829"
  },
  {
    "url": "assets/js/layout-icons/media/Pocket.6a212753.js",
    "revision": "26e516e8e88f4dfca2a46f760343c929"
  },
  {
    "url": "assets/js/layout-icons/media/QQ.e504e05a.js",
    "revision": "5575a2c652a9437f3869384a87a66d87"
  },
  {
    "url": "assets/js/layout-icons/media/Qzone.e3e1f7fd.js",
    "revision": "8c2e785c79450475b0fd9b679c1bcea0"
  },
  {
    "url": "assets/js/layout-icons/media/Reddit.cf7443be.js",
    "revision": "28e2dfe4ccc1588a432b992bbe2a97dd"
  },
  {
    "url": "assets/js/layout-icons/media/Rss.2d21157b.js",
    "revision": "d36b388c427727c2c5f2a9a0345a94d8"
  },
  {
    "url": "assets/js/layout-icons/media/Steam.57325848.js",
    "revision": "4beca71618c05d266280f00de1294491"
  },
  {
    "url": "assets/js/layout-icons/media/Twitter.ab77a892.js",
    "revision": "70685e3e0a24b945d166514846882498"
  },
  {
    "url": "assets/js/layout-icons/media/Wechat.3a45cbe4.js",
    "revision": "a71567123b5331fa293f42e154ff0bb5"
  },
  {
    "url": "assets/js/layout-icons/media/Weibo.8dad371a.js",
    "revision": "85281bda8966c98feff24997a6ccea84"
  },
  {
    "url": "assets/js/layout-icons/media/Whatsapp.d6636da7.js",
    "revision": "7f02a628b93dcdae59a428a247943d9c"
  },
  {
    "url": "assets/js/layout-icons/media/Youtube.fd8241d8.js",
    "revision": "848f9f54dc2337528bcc4c79133155bb"
  },
  {
    "url": "assets/js/layout-icons/media/Zhihu.0b4545fd.js",
    "revision": "bd0ec734fcb4dcf3f3f206b960423a7c"
  },
  {
    "url": "assets/js/layout-icons/NextIcon.d3f6f53b.js",
    "revision": "528a2c615585ce3b03c8583b1bab5d6b"
  },
  {
    "url": "assets/js/layout-icons/Page404Icon.2bae4ea4.js",
    "revision": "b344c132172b338f11a6b4d18e8d131b"
  },
  {
    "url": "assets/js/layout-icons/PresentationIcon.e737e5a2.js",
    "revision": "dbf6389ecb4347ee25010850f55d74f6"
  },
  {
    "url": "assets/js/layout-icons/PrevIcon.d0a4b528.js",
    "revision": "098f8a67dde6e3e07421fa6ff9915c6b"
  },
  {
    "url": "assets/js/layout-icons/ProjectIcon.9552a4a5.js",
    "revision": "0c8dba33e65d14d69f31b22dc93e3f9d"
  },
  {
    "url": "assets/js/layout-icons/StickyIcon.132760ff.js",
    "revision": "8a4565e39f14f0bbb590d835497bfed6"
  },
  {
    "url": "assets/js/layout-Layout.c1915e63.js",
    "revision": "48c046b8cd54b9dae1d33bc31409885e"
  },
  {
    "url": "assets/js/layout-NotFound.260fbaa0.js",
    "revision": "6ddee65b64e46d3f9fae2be219a25c08"
  },
  {
    "url": "assets/js/layout-Slide.dd5ce6f4.js",
    "revision": "2ab53dd98b6eb9474c19e2c372a1a622"
  },
  {
    "url": "assets/js/page--833491ca.1a378291.js",
    "revision": "efd3fe99021c4d96d4afebebfbb2ea30"
  },
  {
    "url": "assets/js/page-AddingacustombridgetoRollux.21bf9dd3.js",
    "revision": "3e8365101db5b1db297a45b4734f3ca9"
  },
  {
    "url": "assets/js/page-AddingRolluxtoyourCEX.7fb46fe4.js",
    "revision": "c5acd6c5a7041b5f36874f63fc3f504e"
  },
  {
    "url": "assets/js/page-Airdrop1.d9fdc355.js",
    "revision": "c2cc09330b36d81b0245e5540dd06b27"
  },
  {
    "url": "assets/js/page-Airdrop2.ad785b93.js",
    "revision": "618c43807f822406e1623e7ab21bb6b6"
  },
  {
    "url": "assets/js/page-AnkrSDKAPI.131c8077.js",
    "revision": "4883aae97db910412c1849a2a75fbbe5"
  },
  {
    "url": "assets/js/page-Backend.e7587d53.js",
    "revision": "873262e0147b6934ea6ed01058861693"
  },
  {
    "url": "assets/js/page-BedrockDifferences.c78af573.js",
    "revision": "8d1b6bba976216e6684cf5086f7ee285"
  },
  {
    "url": "assets/js/page-BedrockExplainer.8da4dd89.js",
    "revision": "20081c9671094a971f4c10886371944f"
  },
  {
    "url": "assets/js/page-BlockExplorers.2f16eb7c.js",
    "revision": "bf12e3c74ecde69a5f6bfcf94e05f1f6"
  },
  {
    "url": "assets/js/page-Bridgingbasics.50728bb9.js",
    "revision": "8c9460715e11c2b2bc72295112ebf6ec"
  },
  {
    "url": "assets/js/page-BugFixesMiscellaneous.6c177d7a.js",
    "revision": "5926a664b9b4904d0227c7aa2f98f1e6"
  },
  {
    "url": "assets/js/page-Citizenship.277f2444.js",
    "revision": "1b4b8c6bb4666306a6d6285c33ebd91e"
  },
  {
    "url": "assets/js/page-ClientsSDKs.a9173370.js",
    "revision": "bcd720fa07f5fc8186c6ae3c9c8cd382"
  },
  {
    "url": "assets/js/page-CommunicationStrategies.5dad1a3c.js",
    "revision": "86346fae74464dad520a50a40fb847fd"
  },
  {
    "url": "assets/js/page-CommunityNotice.ebe3d150.js",
    "revision": "94ab7886a92f06be3d95496bcb4317c0"
  },
  {
    "url": "assets/js/page-ContractOverview.8309b969.js",
    "revision": "372db3ae062637f0974018b6bec84553"
  },
  {
    "url": "assets/js/page-ContributetoRollux.1b46473e.js",
    "revision": "7b561f06ba5374aeb576e3fe17540663"
  },
  {
    "url": "assets/js/page-Corechanges.91df4eb0.js",
    "revision": "a5aea0b1aac7f6092982b947a70dd78b"
  },
  {
    "url": "assets/js/page-CreateaRolluxNFT.7d5cffb4.js",
    "revision": "8ebfa0f9a4e4e35e24c0ebb8df4eb931"
  },
  {
    "url": "assets/js/page-DataPrivacyPolicy.189a4046.js",
    "revision": "6ae91fa8528e743792f177969520484d"
  },
  {
    "url": "assets/js/page-DesignPhilosophy.62061106.js",
    "revision": "aa212ab111591991534d1411a9b38567"
  },
  {
    "url": "assets/js/page-Developerdocs.d4fad5cf.js",
    "revision": "2cb04e7379f02af3307698bedec30831"
  },
  {
    "url": "assets/js/page-Developertools.9e9230be.js",
    "revision": "3ca8d3367990579c504d6b23ebd913d3"
  },
  {
    "url": "assets/js/page-DeveloperVideos.a0a3876a.js",
    "revision": "9f58c30c06a42646f03590e937929835"
  },
  {
    "url": "assets/js/page-DifferencesbetweenEthereumandOptimism.7a05a1fa.js",
    "revision": "fbc5f15bd20ad573bd2d4c7d71b88b98"
  },
  {
    "url": "assets/js/page-DifferencesbetweenEthereumandRollux.8312f239.js",
    "revision": "356657dc3ae389cc753b73af08a790f4"
  },
  {
    "url": "assets/js/page-ethersjs.4ebc14b3.js",
    "revision": "7857bb9226f69bb2083bb631e702b052"
  },
  {
    "url": "assets/js/page-ExistingDelegates.db04dd12.js",
    "revision": "6e6eec2dc9b5a9b9cd3001ad2fe5b14b"
  },
  {
    "url": "assets/js/page-Finality.bce376ab.js",
    "revision": "a3da7a562ce1a1e7e537f103028ed868"
  },
  {
    "url": "assets/js/page-FindandTrackYourDelegate.a6222420.js",
    "revision": "dbfa02076fd8165d5dbd7edf1d54592a"
  },
  {
    "url": "assets/js/page-Gas.7c16e2eb.js",
    "revision": "94e74aadde5fdd5e54115beddcf423d5"
  },
  {
    "url": "assets/js/page-GetSupport.d736a6f8.js",
    "revision": "6936913938c777376af3c7a475585f33"
  },
  {
    "url": "assets/js/page-GovernanceFundOverview.826d02e5.js",
    "revision": "0681a2d1f4134ef31da92ebb49878f3f"
  },
  {
    "url": "assets/js/page-GoverningDocuments.9a16396d.js",
    "revision": "cb8509fdc0e58b2de81ccb3405d53d5d"
  },
  {
    "url": "assets/js/page-Home.a7d9bcbc.js",
    "revision": "ed1ebb7aad5d35ac2f20e0f84ae60e94"
  },
  {
    "url": "assets/js/page-HowdoIgetprojectsupport(marketingintegrationsetc).3e549117.js",
    "revision": "556c32d709623ff2c61ff84a17eedfcc"
  },
  {
    "url": "assets/js/page-HowdoImoveSYSfromSyscoinUTXOtoRollux.4bd6cce2.js",
    "revision": "588ff92d3bfd27d4760e200eaa99ae39"
  },
  {
    "url": "assets/js/page-HowdoImoveSYSorTokensfromSyscoinNEVMtoRollux(RolluxPortal).557be2fa.js",
    "revision": "f2cb477018e64f04c7f82214a147f77b"
  },
  {
    "url": "assets/js/page-HowdoImovetokensfromotherecosystemstoRollux.27419719.js",
    "revision": "3d9f46ac5f1b45a3c361203959cee7a8"
  },
  {
    "url": "assets/js/page-HowdoIstartusingRolluxMainnet.e1973270.js",
    "revision": "9e75b1e992371528f44e26c5b40654c1"
  },
  {
    "url": "assets/js/page-HowdoIstartusingRolluxTestnet.fb2f187d.js",
    "revision": "5ee7af4afdd0a1f6f858b4f967e9f283"
  },
  {
    "url": "assets/js/page-HowdoIuseRolluxMainnetwithMetaMask.eb7c3768.js",
    "revision": "fdbf124b4a8912067e2462c6cb0e5928"
  },
  {
    "url": "assets/js/page-HowdoIuseRolluxMainnetwithPaliWallet.01348af3.js",
    "revision": "ff81894b10593b73780469dd39a01920"
  },
  {
    "url": "assets/js/page-Howtobeadelegate.8d5992c7.js",
    "revision": "ae5d38a9d11be3c64576f9e5561e13f8"
  },
  {
    "url": "assets/js/page-HowtoDelegateYourTokens.bbcb893a.js",
    "revision": "35be6d5ce85a4a9114d8b75c11c6157c"
  },
  {
    "url": "assets/js/page-InteractingwithOptimismcontracts.f921df2d.js",
    "revision": "2cc4cfa757876f4d3329bcf268a5731c"
  },
  {
    "url": "assets/js/page-InteractingwithRolluxcontracts.c5134034.js",
    "revision": "63b2392885f81ba7c94daeae9c4fbadc"
  },
  {
    "url": "assets/js/page-IntroductiontoSyscoin.1404ea9c.js",
    "revision": "118703f5550707e687fc873f2e5b01fa"
  },
  {
    "url": "assets/js/page-JSON-RPCAPI.2a22b0c8.js",
    "revision": "fede0d2a2bcd947c32975fb97f5956a6"
  },
  {
    "url": "assets/js/page-KeydifferencesbetweenRolluxandOptimism.97bb5811.js",
    "revision": "4e6ce5aa9b120a14423d77248a88c8b5"
  },
  {
    "url": "assets/js/page-KnownIssues(none).36f1de2e.js",
    "revision": "b1d57d1da27c92c9393f4f73381df7d4"
  },
  {
    "url": "assets/js/page-MakingOptimismDappsEvenCheaper.569a9df2.js",
    "revision": "364dd43846f935e7386a871976ab5ffe"
  },
  {
    "url": "assets/js/page-MakingRolluxDappsEvenCheaper.7157ec55.js",
    "revision": "3dac1445f8a0d800f1b9bbd1f3dde6cf"
  },
  {
    "url": "assets/js/page-MetaTransactions.72ba4b53.js",
    "revision": "54660745b1ee2fe38eef3a3e50e4eab9"
  },
  {
    "url": "assets/js/page-Metrics.ae914e8c.js",
    "revision": "cb6a563c9553e1e47e96f28d62cf43d8"
  },
  {
    "url": "assets/js/page-Monitoring.d0048c2f.js",
    "revision": "a645a46b96df84f0568c830ef4548d9f"
  },
  {
    "url": "assets/js/page-NetworkFaucets.15362b2d.js",
    "revision": "26ae12c80781b8bb295eeb1fe923d1e2"
  },
  {
    "url": "assets/js/page-NodeOperatorGuide.b18c639d.js",
    "revision": "d1df70b5ef41c96a8ed359f1ff444325"
  },
  {
    "url": "assets/js/page-NodeProviders.bcf0c093.js",
    "revision": "ed19428571ab1d743d1a2effc4db9a08"
  },
  {
    "url": "assets/js/page-OPAllocations.e7c43fc7.js",
    "revision": "9caedc5fc192c652fee29b31ad1c6329"
  },
  {
    "url": "assets/js/page-OPEconomics.0ce90fd3.js",
    "revision": "0bb3279ba341569ef3e1d7821aae07a8"
  },
  {
    "url": "assets/js/page-Oracles.7962e309.js",
    "revision": "9cd1145e7217fd5e69d232abe82686a4"
  },
  {
    "url": "assets/js/page-Overview.532960c3.js",
    "revision": "7b74f7fcf59826289186fd7f0442f0bd"
  },
  {
    "url": "assets/js/page-PoDA.378978c0.js",
    "revision": "787845a0ccf3431d7d36208bc6f2da62"
  },
  {
    "url": "assets/js/page-Protocolspecs.b684d995.js",
    "revision": "b640236d69baa58f3961d7b8d56ec44c"
  },
  {
    "url": "assets/js/page-PublicRPC(HTTPWebsocket).e050fe53.js",
    "revision": "9c461c57343dcef37ff59c5b68f96d61"
  },
  {
    "url": "assets/js/page-PublicTestnets.18826584.js",
    "revision": "c9893302279e3224331b366ee518395c"
  },
  {
    "url": "assets/js/page-Releases.c4660af5.js",
    "revision": "40b0992d5c560aa448ccd52e5e30a315"
  },
  {
    "url": "assets/js/page-RetroPGFRound2.f199730b.js",
    "revision": "9c5a055c448bf951627da94805df71cf"
  },
  {
    "url": "assets/js/page-RollupProtocol.4aaf0587.js",
    "revision": "8846d5fdd8453f024ee7fbb6af090ae6"
  },
  {
    "url": "assets/js/page-RolluxDevGuidesTutorials.fdec5c95.js",
    "revision": "472cb563de0960ee7c488efadaf27f86"
  },
  {
    "url": "assets/js/page-RolluxHelpCenter.e1b430fc.js",
    "revision": "8c3e8fcb2423017241e43303d911eec0"
  },
  {
    "url": "assets/js/page-RolluxMainnetBetastatus.595dbace.js",
    "revision": "a0d595c7ca74603f8606dd3663fa1b32"
  },
  {
    "url": "assets/js/page-RolluxPolicies,Terms,andNotices.e4c2bc7a.js",
    "revision": "5afa75366413ce9c3c1b8ed2544b7df9"
  },
  {
    "url": "assets/js/page-RolluxPortalTermsConditions.6286c701.js",
    "revision": "a32670bfa5f9a017456d3e88ba044fe2"
  },
  {
    "url": "assets/js/page-Runningalocaldevelopmentenvironment.44d373b9.js",
    "revision": "274a5370f16cba0331d624d79a76a962"
  },
  {
    "url": "assets/js/page-Runningamainnetreplicanode.fb378616.js",
    "revision": "db56d3414aecc13f29466035ef282152"
  },
  {
    "url": "assets/js/page-Runningatestnetormainnetnode.75b82a2f.js",
    "revision": "43bf443fe66048c392d4550b6229e773"
  },
  {
    "url": "assets/js/page-SendingdatabetweenL1andL2.0de0db89.js",
    "revision": "8188236ce05eb636b88403aaa113faaf"
  },
  {
    "url": "assets/js/page-SubmittingProposals.6127baf8.js",
    "revision": "a9e1dedc16802ca52e427c5892ad7168"
  },
  {
    "url": "assets/js/page-SupportingRolluxinyourwallet.ad0ce7a1.js",
    "revision": "0302de548ce6b348142863173810eae2"
  },
  {
    "url": "assets/js/page-TestingDecentralizedApplicationswithRollux.5f55bb00.js",
    "revision": "d72194d0d2e40439d17f30059f85a819"
  },
  {
    "url": "assets/js/page-TestingontheRolluxTestNetwork.77d4ae86.js",
    "revision": "73492a746ecb701511eac99a63531531"
  },
  {
    "url": "assets/js/page-TheCanonicalTransactionChain(CTC)Format.5c428e19.js",
    "revision": "1a41606fe6a7867adae77def9d8f6309"
  },
  {
    "url": "assets/js/page-TheRolluxClientSDK.e5156b27.js",
    "revision": "a08f8695a9df85e1d7c8216698ddc4cb"
  },
  {
    "url": "assets/js/page-thirdwebSDK.dc8b7592.js",
    "revision": "88977b6c8dad79f444c487d3e048a1ba"
  },
  {
    "url": "assets/js/page-TokenHouseHistory.417694c3.js",
    "revision": "0d1a2cb4d2686767d0bf8a4f33314f7d"
  },
  {
    "url": "assets/js/page-TransactionDebuggingTools.5c839957.js",
    "revision": "657be0cf6cf526e7d528ba0e42e0bb90"
  },
  {
    "url": "assets/js/page-TransactionfeesonL2.7c616da8.js",
    "revision": "3065d836ccef50aa06eeb28915b8f940"
  },
  {
    "url": "assets/js/page-UpgradeGuide.08ae48ea.js",
    "revision": "30b6c3c66ecfce1e9033ab39b1c87fac"
  },
  {
    "url": "assets/js/page-UsingtheStandardBridge.4b99480e.js",
    "revision": "c727b2cec7b209bcdbf63c890c7a32e8"
  },
  {
    "url": "assets/js/page-viem.9f45f8ed.js",
    "revision": "db1b0383b962bb3488e67e96e0d6ab7f"
  },
  {
    "url": "assets/js/page-web3js.e47fcffa.js",
    "revision": "5a1110254d97ad83444458d90ef96ea3"
  },
  {
    "url": "assets/js/page-WhatistheAttestationStation.fdd823bc.js",
    "revision": "25aad3b3bc1ba85022c01caca7ddc7d2"
  },
  {
    "url": "assets/js/page-WhatistheOptimismCollective.474ccdcf.js",
    "revision": "98d78c21b5e33bd06bffe3b7a2f91ff4"
  },
  {
    "url": "assets/js/page-WhatistheOptimismFoundation.b359642d.js",
    "revision": "379e5f4c2544b2526cf1be3608c91a92"
  },
  {
    "url": "assets/js/vendors~docsearch.a62799fa.js",
    "revision": "d3e33fe21cbce636995d75a03e33fc95"
  },
  {
    "url": "assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-components/Common~layout-components/Page.6a448481.js",
    "revision": "9a466c48c925b873eabfbb5e3c0261d4"
  },
  {
    "url": "assets/js/vendors~layout-components/AlgoliaSearch/Full.2ec4a4f8.js",
    "revision": "9569710681c45c7bcf5fe56e0a4f008a"
  },
  {
    "url": "assets/js/vendors~layout-components/Blog/ArticleList~layout-components/Blog/BlogHome~layout-components/Blog/Bl~92201a0e.98a028fe.js",
    "revision": "84ab5b18d721cdd5729c9967301e24b5"
  },
  {
    "url": "assets/js/vendors~layout-Layout~layout-components/Page.6f6d784e.js",
    "revision": "434883226c17c89202cc3e88178e17f1"
  },
  {
    "url": "assets/js/vendors~photo-swipe.ae49cb61.js",
    "revision": "2392b09369d9a2fbfe5751f9f76a2996"
  },
  {
    "url": "assets/logos/favicon.png",
    "revision": "32eed5be3ed1e35dc4c904c0051fc9be"
  },
  {
    "url": "assets/logos/header-rollux-old.png",
    "revision": "35d3a4879673904bd5cd63148d86b83a"
  },
  {
    "url": "assets/logos/header-rollux.png",
    "revision": "4d2b2fa616af6f87a8c01bd866e7b8cc"
  },
  {
    "url": "assets/logos/header.png",
    "revision": "c95d0ffbb53636d0a945239d33f17043"
  },
  {
    "url": "assets/logos/icon_small.png",
    "revision": "adc8a10672267b7b9ce172e4f84bdb5c"
  },
  {
    "url": "assets/logos/icon-1020x1020.png",
    "revision": "b1d7ec51775d88b036b68cded3a97180"
  },
  {
    "url": "assets/logos/icon-192x192.png",
    "revision": "ff9c6426488e76ab778cab245c628cbb"
  },
  {
    "url": "assets/logos/icon-256x256.png",
    "revision": "fd9bd00f386a8eff5b45cabf0a8418a6"
  },
  {
    "url": "assets/logos/icon-384x384.png",
    "revision": "fecb971246b0c10c9cf06a5f27266af1"
  },
  {
    "url": "assets/logos/icon-512x512.png",
    "revision": "cd2338839acc4cec78642aff03bc0272"
  },
  {
    "url": "assets/logos/logo.png",
    "revision": "04a5dca60f0ab8f3a25881b7a89e1d7e"
  },
  {
    "url": "assets/logos/rollux_icon@4x.png",
    "revision": "8b2f2705a498958be00dba7e7dcc0e6d"
  },
  {
    "url": "docs/biz/index.html",
    "revision": "529b97627842aa06600e54827f17ec38"
  },
  {
    "url": "docs/contribute/index.html",
    "revision": "f75d44a8ba8db0790e0bfd6e5c9d1c08"
  },
  {
    "url": "docs/developers/bedrock/bedrock/index.html",
    "revision": "d477c03befd9e3a68d3a775c997eff80"
  },
  {
    "url": "docs/developers/bedrock/differences/index.html",
    "revision": "17bbb1dd5eb252285f9fa279f173ad06"
  },
  {
    "url": "docs/developers/bedrock/explainer/index.html",
    "revision": "8b7ac765a23941b4602213e996b8720f"
  },
  {
    "url": "docs/developers/bedrock/how-is-bedrock-different/index.html",
    "revision": "10d19a97d55954411406a7cd7b1daa33"
  },
  {
    "url": "docs/developers/bedrock/index.html",
    "revision": "be88df8ccb7fd99cd833295bf382b7a6"
  },
  {
    "url": "docs/developers/bedrock/metrics/index.html",
    "revision": "7cd9586bf6ad9d5c58591f4d964c7b4e"
  },
  {
    "url": "docs/developers/bedrock/node-operator-guide/index.html",
    "revision": "d3c46e03250fbb3a40fe931c95091574"
  },
  {
    "url": "docs/developers/bedrock/public-testnets/index.html",
    "revision": "1a8a52f9d2b57dcc1b276512a98064fb"
  },
  {
    "url": "docs/developers/bedrock/upgrade-guide/index.html",
    "revision": "a44e8e78c202967e02ebdb490ed3dc5c"
  },
  {
    "url": "docs/developers/bridge/basics/index.html",
    "revision": "e68721e6c9430f9cc22e338466d60fd9"
  },
  {
    "url": "docs/developers/bridge/comm-strategies/index.html",
    "revision": "5e1e53835152468f5c8e8204607f87ad"
  },
  {
    "url": "docs/developers/bridge/messaging/index.html",
    "revision": "6834c7bfdc8b5622125264215b113cdd"
  },
  {
    "url": "docs/developers/bridge/standard-bridge/index.html",
    "revision": "986909d1a80e65391b35f2f9587c82df"
  },
  {
    "url": "docs/developers/build/cheap-dapp/index.html",
    "revision": "89505af36daad24c50571f68de7c663a"
  },
  {
    "url": "docs/developers/build/dev-node/index.html",
    "revision": "ef940121dce5685f97ecb5cb906d3096"
  },
  {
    "url": "docs/developers/build/differences/index.html",
    "revision": "5839249bbebc7622416594185fae8af9"
  },
  {
    "url": "docs/developers/build/json-rpc/index.html",
    "revision": "930f84d40b6cfa3d64eab5970b3d7912"
  },
  {
    "url": "docs/developers/build/run-a-node/index.html",
    "revision": "91a8fcad7e33b11e9f43383cc44aa763"
  },
  {
    "url": "docs/developers/build/system-contracts/index.html",
    "revision": "a1fcbf9a21bcd91d355ef0607f035d79"
  },
  {
    "url": "docs/developers/build/testing-dapps/index.html",
    "revision": "8e9b44a3c701e8d80786fb6b6e5ab02d"
  },
  {
    "url": "docs/developers/build/transaction-fees/index.html",
    "revision": "74b1083a9537938c93ddc0acf82616bd"
  },
  {
    "url": "docs/developers/index.html",
    "revision": "d95e8ee6c13ffc2c70aac7f31b316d37"
  },
  {
    "url": "docs/developers/known-issues/index.html",
    "revision": "e2076b2ccb07230a21e609c79b1512a1"
  },
  {
    "url": "docs/developers/media/index.html",
    "revision": "baa4c7358869f807ca1cfbc8937f56ce"
  },
  {
    "url": "docs/developers/releases/index.html",
    "revision": "00b8e62af02e03518922cd92cbf7fed8"
  },
  {
    "url": "docs/governance/airdrop-1/index.html",
    "revision": "25f61de1ab2851a4bdb6a73b5c329ea2"
  },
  {
    "url": "docs/governance/airdrop-2/index.html",
    "revision": "7b4542e2a65b67fbdba855bf6000f34d"
  },
  {
    "url": "docs/governance/allocations/index.html",
    "revision": "f0f6240280766fc53ac830ce8048f637"
  },
  {
    "url": "docs/governance/attestation-station/index.html",
    "revision": "704037ffef55f471af76149a77d23bc3"
  },
  {
    "url": "docs/governance/citizens-house/index.html",
    "revision": "7a1e2b953f939e40716b0e436ff5ada9"
  },
  {
    "url": "docs/governance/citizenship/index.html",
    "revision": "615841591e7a374a1d65f9167113ff5a"
  },
  {
    "url": "docs/governance/delegate-info/index.html",
    "revision": "6d59ad63c1f13fde9b05c5027dbb5ef8"
  },
  {
    "url": "docs/governance/delegate/index.html",
    "revision": "38a6c8d676a3ea1c08cfec3997e66b46"
  },
  {
    "url": "docs/governance/economics/index.html",
    "revision": "edb223662debdb8e308bdd8e4b20e51e"
  },
  {
    "url": "docs/governance/existing-delegate/index.html",
    "revision": "4eaeaafaf1e480f76b317b413ea36169"
  },
  {
    "url": "docs/governance/gov-fund/index.html",
    "revision": "1f30cf0f499ae6cfc2b943d9d5581815"
  },
  {
    "url": "docs/governance/howto-delegate/index.html",
    "revision": "0ea9275b59fae22416f1912a191fde8f"
  },
  {
    "url": "docs/governance/index.html",
    "revision": "e662b10c068474f0f0b68c45604c18f6"
  },
  {
    "url": "docs/governance/proposals/index.html",
    "revision": "e2f2bfa3f7c55e2d595054872bd4615f"
  },
  {
    "url": "docs/governance/retropgf-2/index.html",
    "revision": "9882784d549a1c81e0e648af0d8677a8"
  },
  {
    "url": "docs/governance/token-house-history/index.html",
    "revision": "80f9288aeb140c259689bb9ed409a176"
  },
  {
    "url": "docs/governance/token-house/index.html",
    "revision": "855066332d9df566f7caec2a78214656"
  },
  {
    "url": "docs/governance/what-is-the-optimism-foundation/index.html",
    "revision": "8187811874764a40a6831309dab2b464"
  },
  {
    "url": "docs/guides/bridge-dev/index.html",
    "revision": "63447a4381603c03be7b2ecf31d3ef11"
  },
  {
    "url": "docs/guides/cex-dev/index.html",
    "revision": "29b6c65b192636b2780b674c01d63a38"
  },
  {
    "url": "docs/guides/index.html",
    "revision": "015c90c99955d607139a9e3179b306dd"
  },
  {
    "url": "docs/guides/nft/index.html",
    "revision": "fbf517a9f8148c78699bcdc520cd3315"
  },
  {
    "url": "docs/guides/testing/index.html",
    "revision": "8b64ae7e549c0d79835d7b759b753ffe"
  },
  {
    "url": "docs/guides/wallet-dev/index.html",
    "revision": "d5417065bbe3b2411d4833337d9c2b52"
  },
  {
    "url": "docs/help/connect-metamask/index.html",
    "revision": "0ae184785bde09b148b306836ee70fa7"
  },
  {
    "url": "docs/help/connect-pali/index.html",
    "revision": "08d86e1650948babfe9cef3688153794"
  },
  {
    "url": "docs/help/get-support/index.html",
    "revision": "7de61a5994e39609ffe3cec853b3f36c"
  },
  {
    "url": "docs/help/index.html",
    "revision": "3db9af86e93d247398c1e66a2703e70d"
  },
  {
    "url": "docs/help/start-using-rollux-mainnet/index.html",
    "revision": "7ff5d79d50740d23bff512227d7620c6"
  },
  {
    "url": "docs/help/start-using-rollux-testnet/index.html",
    "revision": "d86b6bc43a764e427cd7c18c6b95650c"
  },
  {
    "url": "docs/help/third-party-bridges/index.html",
    "revision": "28221f74d48f76bcb97a0b2428c82aab"
  },
  {
    "url": "docs/help/using-rollux-portal/index.html",
    "revision": "9411e6d41ea652280026288f26d35ba2"
  },
  {
    "url": "docs/help/utxo-to-rollux/index.html",
    "revision": "dd936283bb58785bed4568f564a272d5"
  },
  {
    "url": "docs/key-differences/backend/index.html",
    "revision": "e6cff81636a88b55994c8da137d601e8"
  },
  {
    "url": "docs/key-differences/changes/index.html",
    "revision": "e16d6a352c54098c2b40edf8f52b753c"
  },
  {
    "url": "docs/key-differences/index.html",
    "revision": "3f5a9708f1406bec3ffedea1a8dd4852"
  },
  {
    "url": "docs/key-differences/misc/index.html",
    "revision": "fc1d43fe76f8087eb0e6d6105b9d1993"
  },
  {
    "url": "docs/legal/community-notice-1/index.html",
    "revision": "5e79db1de6560f0756762247cf8a2f6d"
  },
  {
    "url": "docs/legal/data-privacy-policy/index.html",
    "revision": "df62b9f5ecdba84bf708a2c5dafc5928"
  },
  {
    "url": "docs/legal/index.html",
    "revision": "bdde7a21079c1bb256702fb4965dd735"
  },
  {
    "url": "docs/legal/portal-terms/index.html",
    "revision": "a7e2ea1e0d8dead7d3fb4e831c4f5a32"
  },
  {
    "url": "docs/protocol/1-design-philosophy/index.html",
    "revision": "37bbaa2ddeee20cbf629c5d2b21e4834"
  },
  {
    "url": "docs/protocol/2-rollup-protocol/index.html",
    "revision": "23a7f4febcd34ed09fb2d2e6ac83373e"
  },
  {
    "url": "docs/protocol/compressed-ctc/index.html",
    "revision": "684707433237c251f350ca0f26a8a961"
  },
  {
    "url": "docs/protocol/index.html",
    "revision": "d11ab0fb8facd5d8a47f6ed92dfcf819"
  },
  {
    "url": "docs/protocol/protocol-2.0/index.html",
    "revision": "762f2ef3f68c0919a34d7f795849fa95"
  },
  {
    "url": "docs/protocol/sequencing/index.html",
    "revision": "02d1763911850ebe46fa848856be9c9d"
  },
  {
    "url": "docs/rollux-developers/bedrock/bedrock/index.html",
    "revision": "d8a2b07b3764cf95b54cbd319e3abac4"
  },
  {
    "url": "docs/rollux-developers/bedrock/differences/index.html",
    "revision": "79dea42803cc9139ebe880ad0e4f3673"
  },
  {
    "url": "docs/rollux-developers/bedrock/explainer/index.html",
    "revision": "cf7a02e21a69f30d3ce4904af978af02"
  },
  {
    "url": "docs/rollux-developers/bedrock/how-is-bedrock-different/index.html",
    "revision": "4518e933a1cc6e215a8ba9637a072edc"
  },
  {
    "url": "docs/rollux-developers/bedrock/index.html",
    "revision": "7f3bee5cdf9f5ce35d425984340585bf"
  },
  {
    "url": "docs/rollux-developers/bedrock/metrics/index.html",
    "revision": "8078994559c56f1baf9cca3f0b1be49e"
  },
  {
    "url": "docs/rollux-developers/bedrock/node-operator-guide/index.html",
    "revision": "5c9fcaac9efc1151992a02b84d90bc51"
  },
  {
    "url": "docs/rollux-developers/bedrock/public-testnets/index.html",
    "revision": "46adf7a74d412e6e95d49e2939f5c3b6"
  },
  {
    "url": "docs/rollux-developers/bedrock/upgrade-guide/index.html",
    "revision": "8ae60c977c95fbdba55be00ba0be4bba"
  },
  {
    "url": "docs/rollux-developers/bridge/basics/index.html",
    "revision": "60276e52fa46d15b743812078d70d1c0"
  },
  {
    "url": "docs/rollux-developers/bridge/comm-strategies/index.html",
    "revision": "cfa97fe4b66af7a75681fb20f9df861d"
  },
  {
    "url": "docs/rollux-developers/bridge/messaging/index.html",
    "revision": "0766dca1cbcba2d560f3cce26b0258a6"
  },
  {
    "url": "docs/rollux-developers/bridge/standard-bridge/index.html",
    "revision": "a07efdfd10d1f2ed1862b0bfbefa2b30"
  },
  {
    "url": "docs/rollux-developers/build/cheap-dapp/index.html",
    "revision": "d3ffdb8bb150585ce5f4e79199c6e1ef"
  },
  {
    "url": "docs/rollux-developers/build/dev-node/index.html",
    "revision": "7a6893c03d35a326b886b49e8241206f"
  },
  {
    "url": "docs/rollux-developers/build/differences/index.html",
    "revision": "d77c4183b5500816e489891c2c947cb6"
  },
  {
    "url": "docs/rollux-developers/build/json-rpc/index.html",
    "revision": "cd56882a367b118a76e9157c7bf7ca0c"
  },
  {
    "url": "docs/rollux-developers/build/run-a-node/index.html",
    "revision": "da14f67321474a5efac3c0f59f852a49"
  },
  {
    "url": "docs/rollux-developers/build/system-contracts/index.html",
    "revision": "9a243a423c53f833fd160b34c3a38c1c"
  },
  {
    "url": "docs/rollux-developers/build/testing-dapps/index.html",
    "revision": "c96316000c786d0f06c09d06d7af9a49"
  },
  {
    "url": "docs/rollux-developers/build/transaction-fees/index.html",
    "revision": "52266bdf6edcef38a55c689d08037ac5"
  },
  {
    "url": "docs/rollux-developers/index.html",
    "revision": "536325bea573e9a5a84c45f3a0c8db44"
  },
  {
    "url": "docs/rollux-developers/known-issues/index.html",
    "revision": "a3153e447ddd9de534cbfc7abcaf1870"
  },
  {
    "url": "docs/rollux-developers/media/index.html",
    "revision": "e12428e1f694b7dacfd83d899e128298"
  },
  {
    "url": "docs/rollux-developers/releases/index.html",
    "revision": "3aa8962f1d38bbed4ff4a64f7e749b40"
  },
  {
    "url": "docs/sdk/ankr/index.html",
    "revision": "b70a4aa0c817ea79ecdb8a172615646a"
  },
  {
    "url": "docs/sdk/ethers/index.html",
    "revision": "42842b47b2b319d3b2f7c78f84fe1230"
  },
  {
    "url": "docs/sdk/index.html",
    "revision": "602a5a8c399dc018d0a7d18b05dde229"
  },
  {
    "url": "docs/sdk/js-client/index.html",
    "revision": "67f6ba61254628628300c73fd1b0af3c"
  },
  {
    "url": "docs/sdk/thirdweb/index.html",
    "revision": "3a5e690197c2bc7e5937f1a98004ad64"
  },
  {
    "url": "docs/sdk/viem/index.html",
    "revision": "8299138fbafa301ed35e5afc0774a742"
  },
  {
    "url": "docs/sdk/web3/index.html",
    "revision": "0eafaf31ecc38e9048563b8e2c613c7e"
  },
  {
    "url": "docs/security-model/index.html",
    "revision": "0f8b4ba200255e7583009cec9ff3b4c2"
  },
  {
    "url": "docs/sys/Finality/index.html",
    "revision": "3d1bfc2931680f139c329c350cc795ee"
  },
  {
    "url": "docs/sys/Gas/index.html",
    "revision": "f80344b16774902fb604328582ac9ccb"
  },
  {
    "url": "docs/sys/index.html",
    "revision": "8b1c2083a54dbb846738e1ae21a2d2d5"
  },
  {
    "url": "docs/sys/Intro/index.html",
    "revision": "33a779cdaa123976cc3129d6ccab5f28"
  },
  {
    "url": "docs/sys/PoDA/index.html",
    "revision": "8570b42b5b5e6265dfec560a3264bbcc"
  },
  {
    "url": "docs/useful-tools/debugging/index.html",
    "revision": "c4f6233b03eef91d98133ad0b47605d0"
  },
  {
    "url": "docs/useful-tools/explorers/index.html",
    "revision": "42da3b91847d3908796ae656545cac78"
  },
  {
    "url": "docs/useful-tools/faucets/index.html",
    "revision": "d91533bbd9e645727d553f7cfaaf6d30"
  },
  {
    "url": "docs/useful-tools/index.html",
    "revision": "7e8fac2cc5665cbe4b74a4705cf6e78f"
  },
  {
    "url": "docs/useful-tools/meta-tx/index.html",
    "revision": "bd23061095d5ec6e12cf8789b44c158f"
  },
  {
    "url": "docs/useful-tools/monitoring/index.html",
    "revision": "7e39e627b9ef2dabcadc707b0ee9829a"
  },
  {
    "url": "docs/useful-tools/networks/index.html",
    "revision": "f8b24f22f0a852fb5d461158efcaa66e"
  },
  {
    "url": "docs/useful-tools/oracles/index.html",
    "revision": "f3d28eefccdd40b03df74f574fc1c891"
  },
  {
    "url": "docs/useful-tools/providers/index.html",
    "revision": "2b932274712d1084da2bc74dd17ef604"
  },
  {
    "url": "index.html",
    "revision": "f656ad3cc01d497ca5f01cd9d2062f22"
  },
  {
    "url": "workbox-582e555e.js",
    "revision": "93b0107a20e5e2d64f7b97cb07d18ee5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
