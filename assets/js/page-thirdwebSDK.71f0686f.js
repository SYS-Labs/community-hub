(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{775:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Thirdweb SDK is a library that enables developers to build web3 applications and interact with any EVM-compatible blockchain.")]),t._v(" "),s("p",[t._v("You can use the Thirdweb SDK to build apps and interact with smart contracts deployed on the Rollux network.")]),t._v(" "),s("p",[t._v("The thirdweb SDK is available in various programming languages, including: "),s("a",{attrs:{href:"https://portal.thirdweb.com/react",target:"_blank",rel:"noopener noreferrer"}},[t._v("React"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://portal.thirdweb.com/react-native",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://portal.thirdweb.com/typescript",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://portal.thirdweb.com/python",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://portal.thirdweb.com/go",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go"),s("OutboundLink")],1),t._v(", and "),s("a",{attrs:{href:"https://portal.thirdweb.com/unity",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unity"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Visit the "),s("a",{attrs:{href:"https://portal.thirdweb.com/cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("Thirdweb documentation"),s("OutboundLink")],1),t._v(" for more instructions on using the Thirdweb SDKs.")]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("p",[t._v("To install the Thirdweb SDK, run:")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @thirdweb-dev/sdk ethers@5\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"initialize-the-sdk-with-rollux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialize-the-sdk-with-rollux"}},[t._v("#")]),t._v(" Initialize the SDK with Rollux")]),t._v(" "),s("p",[t._v("Here's how to initialize the SDK with the Rollux mainnet network and get a contract:")]),t._v(" "),s("div",{staticClass:"language-typescript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Rollux "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@thirdweb-dev/chains"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ThirdwebSDK "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@thirdweb-dev/sdk"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If used on the FRONTEND pass your 'clientId'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sdk "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThirdwebSDK")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Rollux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  clientId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_CLIENT_ID"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --- OR ---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If used on the BACKEND pass your 'secretKey'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sdk "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThirdwebSDK")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Rollux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  secretKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_SECRET_KEY"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contract "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" sdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContract")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x0000000000000000000000000000000000000000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("You will need to pass a client ID/secret key to use Thirdweb's infrastructure services. If you don't have any API keys yet you can create one for free from your Thirdweb "),s("a",{attrs:{href:"https://thirdweb.com/dashboard/settings/api-keys",target:"_blank",rel:"noopener noreferrer"}},[t._v("dashboard settings"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"interact-with-smart-contracts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interact-with-smart-contracts"}},[t._v("#")]),t._v(" Interact with smart contracts")]),t._v(" "),s("p",[t._v("Once you initialize the SDK and connect to a smart contract deployed to Rollux, you can start calling functions on it using the SDK.")]),t._v(" "),s("div",{staticClass:"custom-block info"},[s("p",{staticClass:"custom-block-title"},[t._v("Info")]),t._v(" "),s("p",[t._v("Any interaction you make with a smart contract will be made from the connected wallet automatically.")])]),t._v(" "),s("h3",{attrs:{id:"use-contract-extension-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-contract-extension-functions"}},[t._v("#")]),t._v(" Use contract extension functions")]),t._v(" "),s("p",[t._v("The thirdweb SDK provides convenience functions when your smart contract uses "),s("a",{attrs:{href:"https://portal.thirdweb.com/contractkit/extensions",target:"_blank",rel:"noopener noreferrer"}},[t._v("extensions"),s("OutboundLink")],1),t._v(". This is the easiest way to read data and write transactions with your smart contracts.")]),t._v(" "),s("p",[t._v("For example, if your contract implements the "),s("a",{attrs:{href:"https://portal.thirdweb.com/contractkit/erc721",target:"_blank",rel:"noopener noreferrer"}},[t._v("ERC721"),s("OutboundLink")],1),t._v(" extension, you can utilize all of the functions of the "),s("a",{attrs:{href:"https://portal.thirdweb.com/sdk/interacting-with-contracts/erc721",target:"_blank",rel:"noopener noreferrer"}},[t._v("corresponding erc721 standard"),s("OutboundLink")],1),t._v(" in the SDK.")]),t._v(" "),s("p",[t._v("As an example, below is a code snippet that uses "),s("a",{attrs:{href:"https://portal.thirdweb.com/react/react.useownednfts",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("useOwnedNFTs")]),s("OutboundLink")],1),t._v(" hook to get a list of NFTs owned by a single wallet address:")]),t._v(" "),s("div",{staticClass:"language-typescript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useOwnedNFTs "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@thirdweb-dev/react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isLoading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useOwnedNFTs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{{wallet_address}}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h4",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language-typescript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useOwnedNFTs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useContract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useAddress "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@thirdweb-dev/react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your smart contract address")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contractAddress "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{{contract_address}}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" address "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" contract "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useContract")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contractAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isLoading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useOwnedNFTs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("For more examples on using contract extension functions, visit the "),s("a",{attrs:{href:"https://portal.thirdweb.com/sdk/interacting-with-contracts#using-contract-extensions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Thirdweb developer documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"read-contract-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read-contract-data"}},[t._v("#")]),t._v(" Read contract data")]),t._v(" "),s("p",[t._v("If your contract doesn’t use any "),s("a",{attrs:{href:"https://portal.thirdweb.com/contractkit/extensions",target:"_blank",rel:"noopener noreferrer"}},[t._v("extensions"),s("OutboundLink")],1),t._v(", or you want to directly call functions on your smart contract to read data, you can use the "),s("a",{attrs:{href:"https://portal.thirdweb.com/react/react.usecontractread",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("useContractRead")]),s("OutboundLink")],1),t._v(" hook.")]),t._v(" "),s("p",[t._v("Read data on your contract from a connected wallet:")]),t._v(" "),s("div",{staticClass:"language-typescript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" contract "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useContract")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{{contract_address}}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" myData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isLoading "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useContractRead")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myFunction'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"write-to-contracts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write-to-contracts"}},[t._v("#")]),t._v(" Write to contracts")]),t._v(" "),s("p",[t._v("If your contract doesn’t use any extensions, or you want to directly call functions on your smart contract to write data, you can use the "),s("a",{attrs:{href:"https://portal.thirdweb.com/react/react.usecontractwrite",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("useContractWrite")]),s("OutboundLink")],1),t._v(" hook.")]),t._v(" "),s("p",[t._v("Make transactions on your contract from a connected wallet:")]),t._v(" "),s("div",{staticClass:"language-typescript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" contract "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useContract")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{{contract_address}}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mutateAsync"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" myFunctionAsync "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useContractWrite")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myFunction'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("myFunctionAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'argument1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'argument2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Call the function")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"custom-block info"},[s("p",{staticClass:"custom-block-title"},[t._v("Info")]),t._v(" "),s("p",[t._v("For guides on deploying contracts on Rollux, see the "),s("a",{attrs:{href:"https://github.com/SYS-Labs/rollux-tutorial/blob/main/getting-started/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("tutorial"),s("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);s.default=e.exports}}]);