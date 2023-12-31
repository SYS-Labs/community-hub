---
title: Testing on the Rollux Test Network
lang: en-US
---

You can find the chainid and supporting information for Rollux Tanenbaum, our test network, [using these endpoints](../useful-tools/networks.md).
To obtain SYS and tokens (both ERC-20 and NFT) from faucets, [see here](../useful-tools/faucets.md).

This page will provide some additional testing utilities that you might find useful.


## ERC-20 & ERC-721 test tokens

We will have testing token contracts listed here once they are available.

<!---- This token is an implementation of ERC-20, with the addition of `faucet`, a function that mints for the caller 1000 tokens to facilitate testing.

Additionally, all Optimism networks have [WETH at address `0x4200000000000000000000000000000000000006`](https://help.optimism.io/hc/en-us/articles/4417948883611-What-is-ETH-WETH-How-do-they-interact-).

### Goerli ERC-20 testing contracts

| Address | Symbol | Decimals | 
| - | - | -: | 
| [`0x32307adfFE088e383AFAa721b06436aDaBA47DBE`](https://goerli-explorer.optimism.io/address/0x32307adfFE088e383AFAa721b06436aDaBA47DBE) | OUT-1 | 18 |
| [`0xb378ed8647d67b5db6fd41817fd7a0949627d87a`](https://goerli-explorer.optimism.io/address/0xb378eD8647D67b5dB6fD41817fd7a0949627D87a/) | OUT-2 | 18 |
| [`0x4e6597062c7dc988fbcfe77293d833bad770c19b`](https://goerli-explorer.optimism.io/address/0x4E6597062c7DC988FBcFE77293D833bAD770C19b) | OUT-3 | 18 |

--->

## The bridge

Tokens are supported by the bridge on Rollux Tanenbaum.

Check these tutorials to use the bridge with an [ERC-20](https://github.com/SYS-Labs/rollux-tutorial/tree/main/cross-dom-bridge-erc20), or [ERC-721](https://github.com/SYS-Labs/rollux-tutorial/tree/main/cross-dom-bridge-erc721).

<!--- ## ERC-721 tokens

We have an ERC-721 token on Optimism Goerli at address [`0x38abA480f2bA7A17bC01EE5E1AD64fCedd93EfE7`](https://goerli-explorer.optimism.io/address/0x38abA480f2bA7A17bC01EE5E1AD64fCedd93EfE7).
It is the OpenZeppelin ERC-721 token contract with the addition of `faucet`.
Just call the `faucet` function to get as many NFT tokens as you need.   --->
