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
    "revision": "a32d2506803f3229931b57401ec3e60e"
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
    "url": "assets/img/diagram_SyscoinBitcoinDA.503b7e5e.png",
    "revision": "503b7e5ef070d2e8e9bb8f284afce565"
  },
  {
    "url": "assets/img/diagram_SyscoinOverallDesign_rev2.d0e4cbad.png",
    "revision": "d0e4cbadc61757ce05e627eaf0e925a0"
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
    "url": "assets/js/app.d32a65d8.js",
    "revision": "962b696ca57ca1a4d6eea1885b856451"
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
    "url": "assets/js/page-AddingacustombridgetoRollux.7d09542d.js",
    "revision": "bd707fad73c0e4d5580e73a9f979a91e"
  },
  {
    "url": "assets/js/page-AddingRolluxtoyourCEX.a23badc0.js",
    "revision": "3c1096200213d5f1f7cda4d26c988f64"
  },
  {
    "url": "assets/js/page-Airdrop1.0d42e070.js",
    "revision": "65d7faa7bc3e3ab228c5762775198783"
  },
  {
    "url": "assets/js/page-Airdrop2.5b3efa40.js",
    "revision": "ca68cc473b15be9076c7824fdcb46a6b"
  },
  {
    "url": "assets/js/page-AnkrSDKAPI.e03d7692.js",
    "revision": "4f7abe291d798367f01c800de161a165"
  },
  {
    "url": "assets/js/page-Backend.fd8bd7a2.js",
    "revision": "d5691202948b2384ec11569e18b236ea"
  },
  {
    "url": "assets/js/page-BedrockDifferences.e40d3c99.js",
    "revision": "d1d61e1504cae8e01befcff6ebeb9ad5"
  },
  {
    "url": "assets/js/page-BedrockExplainer.0c31c1cb.js",
    "revision": "f4db98d9b24159956715feeda10895af"
  },
  {
    "url": "assets/js/page-BitcoinDA.94ba055e.js",
    "revision": "57fcbb43edc4030399d6a84f7d1467b6"
  },
  {
    "url": "assets/js/page-BlockExplorers.fd2bb859.js",
    "revision": "0c7ac26ad354117315102bfefea53bb8"
  },
  {
    "url": "assets/js/page-Bridgingbasics.851b1816.js",
    "revision": "1faebde700ba8eefd453ab94ed0579a5"
  },
  {
    "url": "assets/js/page-BugFixesMiscellaneous.461a0a80.js",
    "revision": "7bb261933dcaa9c811de5a54d4fb068c"
  },
  {
    "url": "assets/js/page-Citizenship.a24e166a.js",
    "revision": "b9fe7606a6ae562d03a96781bc8cfb29"
  },
  {
    "url": "assets/js/page-ClientsSDKs.ea144a02.js",
    "revision": "42f12baf4c7c95f509631f90c8db8fcf"
  },
  {
    "url": "assets/js/page-CommunicationStrategies.a04dcb6d.js",
    "revision": "c41ca2b81a3160f79c61e7fbd33a87ca"
  },
  {
    "url": "assets/js/page-CommunityNotice.ec529763.js",
    "revision": "5a66928a2db7c43d0668875c8df36e6a"
  },
  {
    "url": "assets/js/page-ContractOverview.3f61c95e.js",
    "revision": "138814a7a571ba64f90c775581730360"
  },
  {
    "url": "assets/js/page-ContributetoRollux.3f79b26e.js",
    "revision": "a4f5971ddf359defc64e416efb9a7400"
  },
  {
    "url": "assets/js/page-Corechanges.19fe4d1e.js",
    "revision": "e8b8bd00a6350269c6703e645157f616"
  },
  {
    "url": "assets/js/page-CreateaRolluxNFT.9bbe68e9.js",
    "revision": "1495a1df9d1d22b08a2fe886ff9aa2fc"
  },
  {
    "url": "assets/js/page-DataPrivacyPolicy.519bc8d8.js",
    "revision": "8d4dd506dd3b5830dcc41e45942b2f9e"
  },
  {
    "url": "assets/js/page-DesignPhilosophy.5249fd9a.js",
    "revision": "e72d3d3d801922732556773c5abf0054"
  },
  {
    "url": "assets/js/page-Developerdocs.ff35755f.js",
    "revision": "dd0b2711c80aee6f3674ff905641aedc"
  },
  {
    "url": "assets/js/page-Developertools.d65b95fd.js",
    "revision": "ab2f72935a3293d676db1e27c46078ca"
  },
  {
    "url": "assets/js/page-DeveloperVideos.42e82534.js",
    "revision": "e0bde29e9b68935c6a9e6d5152ac83d5"
  },
  {
    "url": "assets/js/page-DifferencesbetweenEthereumandOptimism.588db616.js",
    "revision": "f5bac9cee77369680387ac8463320765"
  },
  {
    "url": "assets/js/page-DifferencesbetweenEthereumandRollux.f083ec33.js",
    "revision": "cbd12abac8953753352ed9a1f70fedeb"
  },
  {
    "url": "assets/js/page-ethersjs.5f08951d.js",
    "revision": "571d06214e7b765eb665dba801eec67f"
  },
  {
    "url": "assets/js/page-ExistingDelegates.bb022200.js",
    "revision": "8f1a0abb7f10107b0a4bacbf8c2bd2eb"
  },
  {
    "url": "assets/js/page-Finality.db5898f0.js",
    "revision": "1f09ac4a8f81c8bf659e5a5b7df0a53f"
  },
  {
    "url": "assets/js/page-FindandTrackYourDelegate.c352b740.js",
    "revision": "918b990cc421a4bab54d639535a0cf1c"
  },
  {
    "url": "assets/js/page-Gas.c34ed7ac.js",
    "revision": "85bdc28703fdce3a33d6ac9bea5bc94f"
  },
  {
    "url": "assets/js/page-GetSupport.7434d2ef.js",
    "revision": "3583b6feefa26339fd56f4126aea973c"
  },
  {
    "url": "assets/js/page-GovernanceFundOverview.e129e0fa.js",
    "revision": "e539a6f91c7d12c9053cacfe7f18c942"
  },
  {
    "url": "assets/js/page-GoverningDocuments.f81564a2.js",
    "revision": "70a4e5d862484717432cb68e3aa5b114"
  },
  {
    "url": "assets/js/page-Home.9d4f40a0.js",
    "revision": "a6cbf5391fc74c52be32cc0c94f2b2d4"
  },
  {
    "url": "assets/js/page-HowdoIgetprojectsupport(marketingintegrationsetc).02881ec5.js",
    "revision": "67012238bced60898f5e897c915efce6"
  },
  {
    "url": "assets/js/page-HowdoImoveSYSfromSyscoinUTXOtoRollux.7e504ff5.js",
    "revision": "8e45adb6916fdb1e6ee5a67217788768"
  },
  {
    "url": "assets/js/page-HowdoImoveSYSorTokensfromSyscoinNEVMtoRollux(RolluxPortal).07b68367.js",
    "revision": "d19c24da941c0d0ba07883a22cac160b"
  },
  {
    "url": "assets/js/page-HowdoImovetokensfromotherecosystemstoRollux.cb173ecf.js",
    "revision": "1c0a71067ccf5c0c8b47548f31067dc1"
  },
  {
    "url": "assets/js/page-HowdoIstartusingRolluxMainnet.f3528f6e.js",
    "revision": "14654e2f1a1551b9b116a1f24f32008d"
  },
  {
    "url": "assets/js/page-HowdoIstartusingRolluxTestnet.40f3ba78.js",
    "revision": "5349b3a181cf99dd2b5d2ac833358bb9"
  },
  {
    "url": "assets/js/page-HowdoIuseRolluxMainnetwithMetaMask.e3294708.js",
    "revision": "5ffd789e40222ec95232eefb46f83705"
  },
  {
    "url": "assets/js/page-HowdoIuseRolluxMainnetwithPaliWallet.091e3268.js",
    "revision": "a56356c69e7b183f269195eff5f6e76f"
  },
  {
    "url": "assets/js/page-Howtobeadelegate.1d4a1110.js",
    "revision": "dbf5b4abe3b2b5044b3bd166f1914620"
  },
  {
    "url": "assets/js/page-HowtoDelegateYourTokens.9f8e77b4.js",
    "revision": "7848d906a97923b5ecd0c3df048650d3"
  },
  {
    "url": "assets/js/page-InteractingwithOptimismcontracts.f03b27aa.js",
    "revision": "b109856ed60e2e9238362317802a9a94"
  },
  {
    "url": "assets/js/page-InteractingwithRolluxcontracts.5ef84000.js",
    "revision": "42024cf7bb8439e3564c01ad5d7719e6"
  },
  {
    "url": "assets/js/page-IntroductiontoSyscoin.8d53fded.js",
    "revision": "a387c9bd1a83510b6263974887a7267e"
  },
  {
    "url": "assets/js/page-JSON-RPCAPI.88bc4f65.js",
    "revision": "8f94bb77ed9b97ff2e9a0fcf1062067d"
  },
  {
    "url": "assets/js/page-KeydifferencesbetweenRolluxandOptimism.957c1fb2.js",
    "revision": "9e7e9f7673f59eab996c590da4698da3"
  },
  {
    "url": "assets/js/page-KnownIssues(none).59b3bc4d.js",
    "revision": "0608032929d930247aabb8ccc0df4deb"
  },
  {
    "url": "assets/js/page-MakingOptimismDappsEvenCheaper.43b8f373.js",
    "revision": "233cfdcecbf9185291167b9621cbd77b"
  },
  {
    "url": "assets/js/page-MakingRolluxDappsEvenCheaper.d17afab1.js",
    "revision": "b2d1b2e368d73da49e60668a54cabf9b"
  },
  {
    "url": "assets/js/page-MetaTransactions.59c19c4a.js",
    "revision": "48c5b375f6545c0fcdfbeb83536eaa5d"
  },
  {
    "url": "assets/js/page-Metrics.27300e75.js",
    "revision": "bd5e0e59c748f8735c529f31a8d66fd5"
  },
  {
    "url": "assets/js/page-Monitoring.98accb2a.js",
    "revision": "abaf044f0f72cc78a38a5a5a78d8c085"
  },
  {
    "url": "assets/js/page-NetworkFaucets.7217c011.js",
    "revision": "4f17ad41da091f9853ea4091f2951227"
  },
  {
    "url": "assets/js/page-NodeOperatorGuide.fdb2f25a.js",
    "revision": "34900cfcb27394f104fdb310e59ff18f"
  },
  {
    "url": "assets/js/page-NodeProviders.a023cf43.js",
    "revision": "3f972c127bdcd5603ea19ab1af79c64b"
  },
  {
    "url": "assets/js/page-OPAllocations.7fd31408.js",
    "revision": "b42c5b379c1031c70c8cd82c7031f9f0"
  },
  {
    "url": "assets/js/page-OPEconomics.b90f9ec6.js",
    "revision": "2cdfaecba1675574612799ad33b25e6d"
  },
  {
    "url": "assets/js/page-Oracles.6ad25f74.js",
    "revision": "7f01688fc119469c8fa952c32ff8740a"
  },
  {
    "url": "assets/js/page-Overview.a9da4e24.js",
    "revision": "c171907be7e01e0bdfe0095d7d93637d"
  },
  {
    "url": "assets/js/page-Protocolspecs.62311960.js",
    "revision": "da1da80f8cabd801d66525f587f977cc"
  },
  {
    "url": "assets/js/page-PublicRPC(HTTPWebsocket).716a4c13.js",
    "revision": "bd31c576e80a4314b3f5dcd84ede326f"
  },
  {
    "url": "assets/js/page-PublicTestnets.bf120f9e.js",
    "revision": "0c25f0981d1b0c975570dfb0c3a17ad6"
  },
  {
    "url": "assets/js/page-Releases.e8e71225.js",
    "revision": "c42d692033974786533bff18f5ce282c"
  },
  {
    "url": "assets/js/page-RetroPGFRound2.abd81681.js",
    "revision": "dc9c8aa52c6de56dbf04388b8785ff31"
  },
  {
    "url": "assets/js/page-RollupProtocol.5aa0e13e.js",
    "revision": "7aac1995a45e21e251e0b4b360028292"
  },
  {
    "url": "assets/js/page-RolluxDevGuidesTutorials.ca3c0c90.js",
    "revision": "ac6b19c9874ceb85f3c62e7019b7dc0c"
  },
  {
    "url": "assets/js/page-RolluxHelpCenter.183f7013.js",
    "revision": "942502563f7392767da7b15db397fbd7"
  },
  {
    "url": "assets/js/page-RolluxMainnetBetastatus.93291463.js",
    "revision": "b74229d8c9ccc03028fe1dc31579c545"
  },
  {
    "url": "assets/js/page-RolluxPolicies,Terms,andNotices.a2569506.js",
    "revision": "aa0019e07bdb14d92897444ea229d568"
  },
  {
    "url": "assets/js/page-RolluxPortalTermsConditions.8ac1bf7a.js",
    "revision": "87c72a760e3e0bc0843abbd4b4b54520"
  },
  {
    "url": "assets/js/page-Runningalocaldevelopmentenvironment.ac8902b8.js",
    "revision": "2fb203f22592fbf4e4ad13e4aca9dd11"
  },
  {
    "url": "assets/js/page-Runningamainnetreplicanode.6a55c292.js",
    "revision": "28533bbe798bf31c2f21c33571ca6c55"
  },
  {
    "url": "assets/js/page-Runningatestnetormainnetnode.3400435a.js",
    "revision": "9c0b4fd67239ae63ee5b71abb0592bdc"
  },
  {
    "url": "assets/js/page-SendingdatabetweenL1andL2.1ac1952f.js",
    "revision": "53e9b65649d3c4d08fbd34b7e35e0103"
  },
  {
    "url": "assets/js/page-SubmittingProposals.7595138d.js",
    "revision": "8863911df4961da14ff4d1a6491a572d"
  },
  {
    "url": "assets/js/page-SupportingRolluxinyourwallet.4ff76336.js",
    "revision": "d026575d039ef07620ae726897cc06b1"
  },
  {
    "url": "assets/js/page-TestingDecentralizedApplicationswithRollux.c554f926.js",
    "revision": "1b82bdf89222edb93be11332d06ff2a4"
  },
  {
    "url": "assets/js/page-TestingontheRolluxTestNetwork.f71c2654.js",
    "revision": "075d5aa6faf6248d3cb63680a02771cf"
  },
  {
    "url": "assets/js/page-TheCanonicalTransactionChain(CTC)Format.d934f243.js",
    "revision": "dbb23dc33b63f3894a8b21e0c69e26a1"
  },
  {
    "url": "assets/js/page-TheRolluxClientSDK.cf4fbc9c.js",
    "revision": "2070b5380ab4dbe4eff33f89d7b922c3"
  },
  {
    "url": "assets/js/page-thirdwebSDK.71f0686f.js",
    "revision": "ee368eec486ef24e7558f4e87f528161"
  },
  {
    "url": "assets/js/page-TokenHouseHistory.b2218755.js",
    "revision": "91ea5ae923055e655f03823f2ed5785b"
  },
  {
    "url": "assets/js/page-TransactionDebuggingTools.45ac353c.js",
    "revision": "4fbddd4b7880102196a75c1695846348"
  },
  {
    "url": "assets/js/page-TransactionfeesonL2.89f88c15.js",
    "revision": "5b4cc14dee4c0d855ecf906380f68a55"
  },
  {
    "url": "assets/js/page-UpgradeGuide.ed8db8d7.js",
    "revision": "cae4f9e6943c0022c336eaa777152685"
  },
  {
    "url": "assets/js/page-UsingtheStandardBridge.84f70a05.js",
    "revision": "df40213de883e157fca8b4aa87712094"
  },
  {
    "url": "assets/js/page-viem.cb214a93.js",
    "revision": "f62411d1e9748673eb8b6065191863c6"
  },
  {
    "url": "assets/js/page-web3js.80a3ea5f.js",
    "revision": "f04e592c4dda169ce84f6845839cf774"
  },
  {
    "url": "assets/js/page-WhatistheAttestationStation.cd759475.js",
    "revision": "e0262c8e63d92ce1408b68547f294dce"
  },
  {
    "url": "assets/js/page-WhatistheOptimismCollective.474ccdcf.js",
    "revision": "98d78c21b5e33bd06bffe3b7a2f91ff4"
  },
  {
    "url": "assets/js/page-WhatistheOptimismFoundation.190b6f49.js",
    "revision": "8a3337945d17bfec6107dbc6005a4783"
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
    "revision": "15ba6e62bda5ad8a428b5ff559de31ba"
  },
  {
    "url": "docs/contribute/index.html",
    "revision": "4623fad12f5fb5a768cadec701555731"
  },
  {
    "url": "docs/developers/bedrock/bedrock/index.html",
    "revision": "2eb1770e62a24d26bc3ba0982c9ab55e"
  },
  {
    "url": "docs/developers/bedrock/differences/index.html",
    "revision": "218d1e2a1aeec04af9c1316b9118b2db"
  },
  {
    "url": "docs/developers/bedrock/explainer/index.html",
    "revision": "74d5531dc2ffddb4b35bdf4e4a77148f"
  },
  {
    "url": "docs/developers/bedrock/how-is-bedrock-different/index.html",
    "revision": "4ae95f5c7e22829a9eaa3f4e13cecf16"
  },
  {
    "url": "docs/developers/bedrock/index.html",
    "revision": "6504de5c832ac0bd9809de7d7f88ebaa"
  },
  {
    "url": "docs/developers/bedrock/metrics/index.html",
    "revision": "0e2ec495946410f7abb07c6cdfddbd36"
  },
  {
    "url": "docs/developers/bedrock/node-operator-guide/index.html",
    "revision": "8f82f94db7afd85e224fad9bc8937683"
  },
  {
    "url": "docs/developers/bedrock/public-testnets/index.html",
    "revision": "66ce920101807f39bdf5f921ae57c097"
  },
  {
    "url": "docs/developers/bedrock/upgrade-guide/index.html",
    "revision": "9f442e324f0c869bb91866f0f2b9d422"
  },
  {
    "url": "docs/developers/bridge/basics/index.html",
    "revision": "7092b053703921514de06c4184ddd20e"
  },
  {
    "url": "docs/developers/bridge/comm-strategies/index.html",
    "revision": "571d1e6d21cf11e39c52199486059d0d"
  },
  {
    "url": "docs/developers/bridge/messaging/index.html",
    "revision": "579b1364baf1cfc4988c16c536d24d38"
  },
  {
    "url": "docs/developers/bridge/standard-bridge/index.html",
    "revision": "7d46baebdeb9b1ae1ac596951c3eef50"
  },
  {
    "url": "docs/developers/build/cheap-dapp/index.html",
    "revision": "42c5dd5c5025183666799f8eee0289a2"
  },
  {
    "url": "docs/developers/build/dev-node/index.html",
    "revision": "042ec1de5a522752d90332e7fed84715"
  },
  {
    "url": "docs/developers/build/differences/index.html",
    "revision": "600701e7a1950ee15c6016d89d3dbaea"
  },
  {
    "url": "docs/developers/build/json-rpc/index.html",
    "revision": "5254a3226d7c45ad4e29800a5c3b7ea9"
  },
  {
    "url": "docs/developers/build/run-a-node/index.html",
    "revision": "e50e6cd8efde1003a2be167bec02d1c0"
  },
  {
    "url": "docs/developers/build/system-contracts/index.html",
    "revision": "300e5c11da97af4fb187206a3ea00627"
  },
  {
    "url": "docs/developers/build/testing-dapps/index.html",
    "revision": "643ba847eb8b837a03319a47a2b03b32"
  },
  {
    "url": "docs/developers/build/transaction-fees/index.html",
    "revision": "9284f77e965b94dc47a939f0463dbeb7"
  },
  {
    "url": "docs/developers/index.html",
    "revision": "42887151690a766be034087fbbb09dbc"
  },
  {
    "url": "docs/developers/known-issues/index.html",
    "revision": "3051eb69c2eed5be26efc78e917b5d26"
  },
  {
    "url": "docs/developers/media/index.html",
    "revision": "a999225e3c52b0de307931afa2e4ed12"
  },
  {
    "url": "docs/developers/releases/index.html",
    "revision": "178e2555dd91f7b7c252abf1d870512d"
  },
  {
    "url": "docs/governance/airdrop-1/index.html",
    "revision": "05dd89ed30a3ffd1938ad215d2c17841"
  },
  {
    "url": "docs/governance/airdrop-2/index.html",
    "revision": "8be796fa24c670d7ef1edfcc2fbb2287"
  },
  {
    "url": "docs/governance/allocations/index.html",
    "revision": "e4a1a7a59b562fe2a5621df947a3e8b4"
  },
  {
    "url": "docs/governance/attestation-station/index.html",
    "revision": "5117a4f6f215d6679cd3c947c3bc065f"
  },
  {
    "url": "docs/governance/citizens-house/index.html",
    "revision": "9f39f2e9bb9a8c70efeafc393f8021b6"
  },
  {
    "url": "docs/governance/citizenship/index.html",
    "revision": "e53171db2179b83f923efbf82493c243"
  },
  {
    "url": "docs/governance/delegate-info/index.html",
    "revision": "028047e36285708f65bd180026799f89"
  },
  {
    "url": "docs/governance/delegate/index.html",
    "revision": "8c5f288dd9b9b7d5a61991b28fd78643"
  },
  {
    "url": "docs/governance/economics/index.html",
    "revision": "de4cbbe8709548ed6f5e13e4affb0a57"
  },
  {
    "url": "docs/governance/existing-delegate/index.html",
    "revision": "10065fbb444284d2d4558c767e9f8e00"
  },
  {
    "url": "docs/governance/gov-fund/index.html",
    "revision": "3a8df2aaf46d51ae60c3ab17e28ccc81"
  },
  {
    "url": "docs/governance/howto-delegate/index.html",
    "revision": "fadbe675d61c895602012abd60c62952"
  },
  {
    "url": "docs/governance/index.html",
    "revision": "d60516811043ebb50b49d4b350eca2df"
  },
  {
    "url": "docs/governance/proposals/index.html",
    "revision": "e312c4f88fcbd4ffcfc0e507df2e8df8"
  },
  {
    "url": "docs/governance/retropgf-2/index.html",
    "revision": "f86f61b07b41f419df25294809342534"
  },
  {
    "url": "docs/governance/token-house-history/index.html",
    "revision": "38ce923f62aaa2d275002e5d8198221c"
  },
  {
    "url": "docs/governance/token-house/index.html",
    "revision": "965a513a7cb062b682fa94ba394def0f"
  },
  {
    "url": "docs/governance/what-is-the-optimism-foundation/index.html",
    "revision": "47a5b8389e416203e123c8587ec3c8e7"
  },
  {
    "url": "docs/guides/bridge-dev/index.html",
    "revision": "646e28594ec179baae64e2c20ab7946f"
  },
  {
    "url": "docs/guides/cex-dev/index.html",
    "revision": "8faa9b3da7392d29935a4afa8cf0cbe3"
  },
  {
    "url": "docs/guides/index.html",
    "revision": "70c1fbb13f6729fc6f450501cb0c7651"
  },
  {
    "url": "docs/guides/nft/index.html",
    "revision": "14922b6ef4738933fd8466b0c2f2a79c"
  },
  {
    "url": "docs/guides/testing/index.html",
    "revision": "406b1647504bb752ba9bef85f9914c5d"
  },
  {
    "url": "docs/guides/wallet-dev/index.html",
    "revision": "01995276f8c0b75706a19b6d26542dd7"
  },
  {
    "url": "docs/help/connect-metamask/index.html",
    "revision": "d71355c38480bc3a88fa821ba7f776b0"
  },
  {
    "url": "docs/help/connect-pali/index.html",
    "revision": "e97fd318baf909e739056c9029b53600"
  },
  {
    "url": "docs/help/get-support/index.html",
    "revision": "e859ede509967efe4301f9e74388a329"
  },
  {
    "url": "docs/help/index.html",
    "revision": "07037110eb9fbb8269441e57c13ce1ed"
  },
  {
    "url": "docs/help/start-using-rollux-mainnet/index.html",
    "revision": "c6a918b59fcfeebf8f68ffce0c67d1c8"
  },
  {
    "url": "docs/help/start-using-rollux-testnet/index.html",
    "revision": "a9bf6faf1831e87840f239a365a3e96e"
  },
  {
    "url": "docs/help/third-party-bridges/index.html",
    "revision": "f5f9de01fafc53f50f43be72a4374256"
  },
  {
    "url": "docs/help/using-rollux-portal/index.html",
    "revision": "5465afbef3e6516bd6c1c35a0a70b85a"
  },
  {
    "url": "docs/help/utxo-to-rollux/index.html",
    "revision": "e16ba8fbf61590abc51cf8bbbd7e03d1"
  },
  {
    "url": "docs/key-differences/backend/index.html",
    "revision": "3f6e8f8fc41fa895e6e65c7d50decc16"
  },
  {
    "url": "docs/key-differences/changes/index.html",
    "revision": "38bcfbbb4d3edf9d94c16498edea93cf"
  },
  {
    "url": "docs/key-differences/index.html",
    "revision": "aaf22b1689a418282035a1208dd94392"
  },
  {
    "url": "docs/key-differences/misc/index.html",
    "revision": "f4d74b27178e14b1fcfcd97a6b1dd4bc"
  },
  {
    "url": "docs/legal/community-notice-1/index.html",
    "revision": "db21a8322c58e76e6a268e84a5d0f0ee"
  },
  {
    "url": "docs/legal/data-privacy-policy/index.html",
    "revision": "f8126e2592e7215265e045ceb3efc319"
  },
  {
    "url": "docs/legal/index.html",
    "revision": "6a42257d7aa444c5c3b3ea67fc4e6a3c"
  },
  {
    "url": "docs/legal/portal-terms/index.html",
    "revision": "b0d2b61d1cf7e5c6012e5c3e1e705cce"
  },
  {
    "url": "docs/protocol/1-design-philosophy/index.html",
    "revision": "8cb2f034e911e8a69d9590799d13e34c"
  },
  {
    "url": "docs/protocol/2-rollup-protocol/index.html",
    "revision": "ed6f3ff7f198b7a4a699b74e02a6b5c1"
  },
  {
    "url": "docs/protocol/compressed-ctc/index.html",
    "revision": "1400d8bdc727636dc62ccc666b5bdda6"
  },
  {
    "url": "docs/protocol/index.html",
    "revision": "0e9abcb2aa5187cade6f280f45ffaf84"
  },
  {
    "url": "docs/protocol/protocol-2.0/index.html",
    "revision": "1e16693028b2a14e0010ef8dcd298642"
  },
  {
    "url": "docs/protocol/sequencing/index.html",
    "revision": "69267460a234fbaf8d60eb16848be681"
  },
  {
    "url": "docs/rollux-developers/bedrock/bedrock/index.html",
    "revision": "0ba9b61756b787bc3508d2845bed6ab5"
  },
  {
    "url": "docs/rollux-developers/bedrock/differences/index.html",
    "revision": "0f8007733f8c26f4268bfd3bda7cafa8"
  },
  {
    "url": "docs/rollux-developers/bedrock/explainer/index.html",
    "revision": "025e0f8cb1e881be3175ef766009f326"
  },
  {
    "url": "docs/rollux-developers/bedrock/how-is-bedrock-different/index.html",
    "revision": "5c258ed35a164fde77b139961a1b20aa"
  },
  {
    "url": "docs/rollux-developers/bedrock/index.html",
    "revision": "a6fcc52bdfc05b79c9423c7acc62f874"
  },
  {
    "url": "docs/rollux-developers/bedrock/metrics/index.html",
    "revision": "30622f8c61fa017f76b1eae8fcae8a3b"
  },
  {
    "url": "docs/rollux-developers/bedrock/node-operator-guide/index.html",
    "revision": "a4ef436955595c2ef920ae337c2eaa24"
  },
  {
    "url": "docs/rollux-developers/bedrock/public-testnets/index.html",
    "revision": "61014ba292b816740da94277effac76f"
  },
  {
    "url": "docs/rollux-developers/bedrock/upgrade-guide/index.html",
    "revision": "787c65bbcdeea28feabb72cd9b5920b4"
  },
  {
    "url": "docs/rollux-developers/bridge/basics/index.html",
    "revision": "def8707326e2edce619983842bef7822"
  },
  {
    "url": "docs/rollux-developers/bridge/comm-strategies/index.html",
    "revision": "f1ababd3bb5b4547ceb98d4008fcdeaf"
  },
  {
    "url": "docs/rollux-developers/bridge/messaging/index.html",
    "revision": "e7277cd8640b286e7f22532de3a20ed6"
  },
  {
    "url": "docs/rollux-developers/bridge/standard-bridge/index.html",
    "revision": "6e99d5013594447c1245abb1c3c0bfa6"
  },
  {
    "url": "docs/rollux-developers/build/cheap-dapp/index.html",
    "revision": "23c52fd6a58a75be247be94127608af8"
  },
  {
    "url": "docs/rollux-developers/build/dev-node/index.html",
    "revision": "ae8577e12edd5e4da0ece32b2599d4a9"
  },
  {
    "url": "docs/rollux-developers/build/differences/index.html",
    "revision": "daf57dbe61bf86ea4632d35c9355f70e"
  },
  {
    "url": "docs/rollux-developers/build/json-rpc/index.html",
    "revision": "78e20c8bb833a3e26cd7782664ec1150"
  },
  {
    "url": "docs/rollux-developers/build/run-a-node/index.html",
    "revision": "7a207e699563a9d07e5cc09821e76771"
  },
  {
    "url": "docs/rollux-developers/build/system-contracts/index.html",
    "revision": "8f46338c111ff681e085b3e07f49e49d"
  },
  {
    "url": "docs/rollux-developers/build/testing-dapps/index.html",
    "revision": "50ed80832f3fd68a9af0158f4c49f5b3"
  },
  {
    "url": "docs/rollux-developers/build/transaction-fees/index.html",
    "revision": "d82a06d7e896c00d93e864e1fabee030"
  },
  {
    "url": "docs/rollux-developers/index.html",
    "revision": "3b361760064b2ab019641c56c701d62e"
  },
  {
    "url": "docs/rollux-developers/known-issues/index.html",
    "revision": "b81325abcd1591a381bdba10430f2fc6"
  },
  {
    "url": "docs/rollux-developers/media/index.html",
    "revision": "1c326e9b08cb49544084c6de61a790ec"
  },
  {
    "url": "docs/rollux-developers/releases/index.html",
    "revision": "bc365c13c385ced4f3bde6015c8a0317"
  },
  {
    "url": "docs/sdk/ankr/index.html",
    "revision": "481aa24f8eec9b6e15d2cd29102f160f"
  },
  {
    "url": "docs/sdk/ethers/index.html",
    "revision": "e56acfe957c45aeaecbb9cfa74408ad3"
  },
  {
    "url": "docs/sdk/index.html",
    "revision": "0258da5b20264a03870d6d127c61e558"
  },
  {
    "url": "docs/sdk/js-client/index.html",
    "revision": "40292e60e7d12c11f89ac076fe73de39"
  },
  {
    "url": "docs/sdk/thirdweb/index.html",
    "revision": "58fdc414050783e9887cc31a79cd29e0"
  },
  {
    "url": "docs/sdk/viem/index.html",
    "revision": "03c15566519241e6029976af78bad663"
  },
  {
    "url": "docs/sdk/web3/index.html",
    "revision": "8379539b51558eee2676d2ccf30b862a"
  },
  {
    "url": "docs/security-model/index.html",
    "revision": "74a3713cf07d85f1224ca5381c456426"
  },
  {
    "url": "docs/sys/Finality/index.html",
    "revision": "1421d7a138b34f8af00f37b4f98192f0"
  },
  {
    "url": "docs/sys/Gas/index.html",
    "revision": "9c251fab2c4317fd31d82a18d4871148"
  },
  {
    "url": "docs/sys/index.html",
    "revision": "6c4a259c5dd1c5200a0cea587eedb59e"
  },
  {
    "url": "docs/sys/Intro/index.html",
    "revision": "e910c5d46570be15bee87e017f49efeb"
  },
  {
    "url": "docs/sys/PoDA/index.html",
    "revision": "3301094be1b06508540a6331e745f34f"
  },
  {
    "url": "docs/useful-tools/debugging/index.html",
    "revision": "a0f80080ce2e6ab17a9c70fc39c12e8e"
  },
  {
    "url": "docs/useful-tools/explorers/index.html",
    "revision": "934bfe904f0850c82ad2157ebaa237bb"
  },
  {
    "url": "docs/useful-tools/faucets/index.html",
    "revision": "5a5f8904765ec1f992be1eac0bcc63e1"
  },
  {
    "url": "docs/useful-tools/index.html",
    "revision": "0bb5f81a49224eb96b4afd10cb997867"
  },
  {
    "url": "docs/useful-tools/meta-tx/index.html",
    "revision": "534690579aac40b284e0ecbb5d1bd22d"
  },
  {
    "url": "docs/useful-tools/monitoring/index.html",
    "revision": "cfd309e5d4406c212121314018fd59ae"
  },
  {
    "url": "docs/useful-tools/networks/index.html",
    "revision": "f54144e2ad113b4a85d7f78d3971343c"
  },
  {
    "url": "docs/useful-tools/oracles/index.html",
    "revision": "f738cb76bc59a50563e53d6bc1facdab"
  },
  {
    "url": "docs/useful-tools/providers/index.html",
    "revision": "ea1fc2dc2aa31bc4d75880dad319f5b9"
  },
  {
    "url": "index.html",
    "revision": "af051c64fd184467d5ac9ee428f86e01"
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
