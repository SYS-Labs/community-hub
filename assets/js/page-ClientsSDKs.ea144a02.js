(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{773:function(e,t,s){"use strict";s.r(t);var o=s(2),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("In most ways Optimism is "),t("a",{attrs:{href:"https://medium.com/ethereum-optimism/introducing-evm-equivalence-5c2021deb306",target:"_blank",rel:"noopener noreferrer"}},[e._v("EVM equivalent"),t("OutboundLink")],1),e._v(".\nHowever, there are "),t("RouterLink",{attrs:{to:"/docs/developers/build/differences/"}},[e._v("a few differences")]),e._v(", which sometimes require decentralized applications to access Optimism-specific services.")],1),e._v(" "),t("p",[e._v("For example, decentralized applications might need to estimate gas costs.\nThe standard Ethereum tooling assumes that gas cost is proportional to the gas used by the transaction, which is correct on L1, but not on Optimism.\n"),t("RouterLink",{attrs:{to:"/docs/developers/build/transaction-fees.html"}},[e._v("Our gas costs are predominately the cost of writing the transaction to L1")]),e._v(", which depends on the transaction size, not the amount of processing required.\nThis difference requires us to have separate methods to provide gas estimates.")],1),e._v(" "),t("p",[e._v("There are three ways to access Optimism services:")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://github.com/ethereum-optimism/optimism/tree/develop/packages/contracts/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("On chain contract calls"),t("OutboundLink")],1),e._v(".\nThis is the way your contracts can get Optimism information or services directly.")]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/docs/sdk/js-client.html"}},[e._v("The JavaScript SDK")]),e._v(". For use when you write JavaScript or TypeScript code, either in the client or a Node.js server.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/docs/developers/build/json-rpc.html"}},[e._v("Off chain, using RPC")]),e._v(". Which is more complicated but usable from any development stack (Python, Rust, etc.).")],1)]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Improving the SDK")]),e._v(" "),t("p",[e._v("If you find a bug, or if there's a feature you think we should add, there are several ways to inform us.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://discord-gateway.optimism.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go on our Discord"),t("OutboundLink")],1),e._v(", and then ask in "),t("strong",[e._v("#dev-support")]),e._v(".")]),e._v(" "),t("li",[e._v("Submit an issue on "),t("a",{attrs:{href:"https://github.com/ethereum-optimism/optimism/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("our Github"),t("OutboundLink")],1),e._v(".")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);