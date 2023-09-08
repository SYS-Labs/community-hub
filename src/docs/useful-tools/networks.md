---
title: Public RPC (HTTP & Websocket)
lang: en-US
---

## Rollux Mainnet

| Parameter | Value |
| --------- | ----- |
| Network Name | **`Rollux`** |
| Description | **`Mainnet`** |
| Chain ID | **`570`** |
| Explorer | **[https://explorer.rollux.com](https://explorer.rollux.com)** |
| HTTP <sup>1</sup> | Rate-limited: **`https://rpc.rollux.com`**, **`https://rollux.rpc.thirdweb.com`**  |
| Websocket | Rate-limited: **`wss://rpc.rollux.com/wss`**
| Contract Addresses | [link](https://github.com/SYS-Labs/rollux/tree/develop/packages/contracts-bedrock/deployments/mainnet) |
| Chainlist | [https://chainlist.org/chain/570](https://chainlist.org/chain/570) |

::: tip Developer Tip 
If you are seeing rate limit issues when testing with public endpoints, we recommend signing up for [Ankr](https://ankr.com). Ankr provides both free and premium grades of Rollux RPC service for those who need more bandwidth.
:::

::: info
Some API calls, such as those in the [personal namespace](https://geth.ethereum.org/docs/rpc/ns-personal) make no sense in a shared environment.
Such RPCs are either not supported, or will return nonsensical values.
:::

## Rollux Tanenbaum (testnet)

| Parameter | Value |
| --------- | ----- |
| Network Name | **`Rollux Tanenbaum`** |
| Description | **`Testnet (public)`** |
| Chain ID | **`57000`** |
| Explorer | **[https://rollux.tanenbaum.io](https://rollux.tanenbaum.io)** |
| HTTP | **`https://rpc-tanenbaum.rollux.com`** |
| Websocket | **`wss://rpc-tanenbaum.rollux.com/wss`** |
| Contract Addresses| [link](https://github.com/SYS-Labs/rollux/tree/develop/packages/contracts-bedrock/deployments/goerli) |
| Chainlist | [https://chainlist.org/chain/57000](https://chainlist.org/chain/57000)


### Contract addresses

The authoritative list of contract addresses is [in the monorepo](https://github.com/SYS-Labs/rollux/tree/develop/packages/contracts-bedrock/deployments/mainnet) in their corresponding json file.


### API Options


1. Get free access to Rollux through [Ankr](https://ankr.com)

2. For small scale tests, you can use the public testnet RPC provided by Syscoin Foundation:
- HTTP endpoint: [https://rpc-tanenbaum.rollux.com](https://rpc-tanenbaum.rollux.com) (note, this is for testing. For production, use Ankr) 

You can run an application for free using [Ankr](https://www.ankr.com/rpc/rollux)'s RPC and Advanced API services. Check details of [Ankr's public (free) and premium services](https://www.ankr.com/docs/rpc-service/service-plans/) to see which plan is ideal for your project.

To see the full list of providers visit [Node & API Providers](./providers.md). 

## L1

### Syscoin NEVM Mainnet
- [Ankr RPC](https://www.ankr.com/rpc/syscoin)
- [Syscoin Foundation RPC](https://docs.syscoin.org/docs/guides/nevm/metamask#manual-setup-to-connect-to-syscoin-network) - free, rate-limited

### Syscoin NEVM Tanenbaum (testnet)

[Syscoin Foundation RPC](https://docs.syscoin.org/docs/guides/nevm/metamask#manual-setup-to-connect-to-syscoin-network)

### Syscoin Native (UTXO) Mainnet

[Syscoin Foundation Blockbook API](https://blockbook.elint.services) - [Documentation](https://github.com/syscoin/blockbook/blob/master/docs/api.md)


### Syscoin Native (UTXO) Testnet

[Syscoin Foundation Blockbook API](https://blockbook-dev.elint.services) - [Documentation](https://github.com/syscoin/blockbook/blob/master/docs/api.md)


::: warning Ignore other networks

Rollux mainnet and Rollux Tanenbaum are, from SYS Labs' and Syscoin's perspective, production networks. This means the Tanenbaum network is something you can rely on for consistent state and uptime. There might be other testnets that we use to test our code or to test new features. Those networks are for _us_ to test, and therefore might not have reliable state & uptime. 

If you want to test out our new infrastructure before it is stable, or are interested in working on the latest and greatest protocols please ask about these networks! If not, they are best ignored. 
We try to make sure they work and preserve the state.
In the months prior to major releases, we may have a different network for testing dapps on that release.

:::
