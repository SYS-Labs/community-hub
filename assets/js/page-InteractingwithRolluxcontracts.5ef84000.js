(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{696:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Rollux is composed, in part, of a series of smart contracts on both L1 (Syscoin) and L2 (Rollux).\nYou may want to interact with these contracts for any number of reasons, including:")]),t._v(" "),a("ul",[a("li",[t._v("Sending messages between L1 and L2")]),t._v(" "),a("li",[t._v("Sending tokens between L1 and L2")]),t._v(" "),a("li",[t._v("Querying information about the current "),a("RouterLink",{attrs:{to:"/docs/developers/build/transaction-fees.html#the-l1-data-fee"}},[t._v("L1 data fee")])],1),t._v(" "),a("li",[t._v("And lots more!")])]),t._v(" "),a("p",[t._v("On this page we'll show you how to work with these contracts directly from other contracts and how to work with them from the client side.")]),t._v(" "),a("h2",{attrs:{id:"finding-contract-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finding-contract-addresses"}},[t._v("#")]),t._v(" Finding contract addresses")]),t._v(" "),a("p",[t._v("You'll need to find the address of the particular contract that you want to interact with before you can actually interact with it.\nCheck out the "),a("a",{attrs:{href:"https://github.com/SYS-Labs/rollux/tree/develop/packages/contracts-bedrock/deployments",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rollux monorepo's deployments folder"),a("OutboundLink")],1),t._v(" which contains the contract addresses for each network. You can also find them in the "),a("a",{attrs:{href:"https://github.com/SYS-Labs/rollux/tree/master/packages/contracts",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("contracts")]),t._v(" package"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"interacting-from-another-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interacting-from-another-contract"}},[t._v("#")]),t._v(" Interacting from another contract")]),t._v(" "),a("p",[t._v("All you need to interact with the Rollux system contracts from another contract is an address and an interface.\nYou can follow "),a("a",{attrs:{href:"#finding-contract-addresses"}},[t._v("the instructions above")]),t._v(" to find the address of the contract you want to interact with.\nNow you simply need to import the appropriate contracts.")]),t._v(" "),a("h3",{attrs:{id:"installing-via-npm-or-yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-via-npm-or-yarn"}},[t._v("#")]),t._v(" Installing via NPM or Yarn")]),t._v(" "),a("p",[t._v("We export a package "),a("a",{attrs:{href:"https://www.npmjs.com/package/@eth-optimism/contracts?activeTab=readme",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("@eth-optimism/contracts")]),a("OutboundLink")],1),t._v(" that makes it easy to use the Rollux contracts within NPM or Yarn based projects.\nInstall the package as follows:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install @eth-optimism/contracts\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"importing-contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importing-contracts"}},[t._v("#")]),t._v(" Importing contracts")]),t._v(" "),a("p",[t._v("Simply import the desired contract or interface from the "),a("code",[t._v("@eth-optimism/contracts")]),t._v(" package:")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" SomeRolluxContract "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@eth-optimism/contracts/path/to/SomeRolluxContract.sol"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Please note that "),a("code",[t._v("path/to/SomeRolluxContract")]),t._v(" is the path to the contract "),a("a",{attrs:{href:"https://github.com/SYS-Labs/rollux/tree/develop/packages/contracts/contracts",target:"_blank",rel:"noopener noreferrer"}},[t._v("within this folder"),a("OutboundLink")],1),t._v(".\nFor example, if you wanted to import the "),a("a",{attrs:{href:"https://github.com/SYS-Labs/rollux/blob/develop/packages/contracts/contracts/L1/messaging/L1CrossDomainMessenger.sol",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("L1CrossDomainMessenger")]),a("OutboundLink")],1),t._v(" contract, you would use the following import:")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" L1CrossDomainMessenger "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@eth-optimism/contracts/L1/messaging/L1CrossDomainMessenger.sol"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"getting-l2-contract-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-l2-contract-addresses"}},[t._v("#")]),t._v(" Getting L2 contract addresses")]),t._v(" "),a("p",[t._v("Addresses of system contracts on the L2 side of the network are the same on every network.\nWe provide these addresses as constants within the "),a("a",{attrs:{href:"https://github.com/SYS-Labs/rollux/blob/develop/packages/contracts/contracts/libraries/constants/Lib_PredeployAddresses.sol",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Lib_PredeployAddresses")]),a("OutboundLink")],1),t._v(" contract.")]),t._v(" "),a("h2",{attrs:{id:"interacting-from-the-client-side"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interacting-from-the-client-side"}},[t._v("#")]),t._v(" Interacting from the client side")]),t._v(" "),a("p",[t._v("Just like when interacting from another contract, we've created a few packages that make it easy to interact with the ORollux system contracts from the client side.")]),t._v(" "),a("h3",{attrs:{id:"installing-via-npm-or-yarn-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-via-npm-or-yarn-2"}},[t._v("#")]),t._v(" Installing via NPM or Yarn")]),t._v(" "),a("p",[t._v("You can use the "),a("a",{attrs:{href:"https://www.npmjs.com/package/@eth-optimism/contracts?activeTab=readme",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("@eth-optimism/contracts")]),a("OutboundLink")],1),t._v(" package to interact with the Rollux system contracts from a JavaScript or TypeScript based project.\nInstall the package as follows:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install @eth-optimism/contracts\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"getting-contract-artifacts-interfaces-and-abis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-contract-artifacts-interfaces-and-abis"}},[t._v("#")]),t._v(" Getting contract artifacts, interfaces, and ABIs")]),t._v(" "),a("p",[t._v("You can get the compiler artifact, bytecode, and ABI for any Rollux contract as follows:")]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getContractDefinition "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@eth-optimism/contracts'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" artifact "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContractDefinition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SomeRolluxContract'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" abi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" artifact"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abi\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bytecode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" artifact"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bytecode\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" deployedBytecode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" artifact"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deployedBytecode\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("Similarly, you can also get "),a("a",{attrs:{href:"https://docs.ethers.io/v5/api/utils/abi/interface/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ethers Interface objects"),a("OutboundLink")],1),t._v(" for any contract:")]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getContractInterface "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@eth-optimism/contracts'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" iface "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContractInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SomeRolluxContract'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"getting-l2-contract-addresses-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-l2-contract-addresses-2"}},[t._v("#")]),t._v(" Getting L2 contract addresses")]),t._v(" "),a("p",[t._v("You can get the address of any L2 contract as follows:")]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" predeploys "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@eth-optimism/contracts'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" address "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" predeploys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CONTRACT_NAME_GOES_HERE")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);