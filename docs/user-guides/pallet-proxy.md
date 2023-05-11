---
sidebar_position: 16
---

# The Pallet Proxy 

**Introduction**
---
Pallet Proxy enables accounts to grant specific permissions to other accounts, empowering them to make calls on their behalf, thereby safeguarding the security of the underlying accounts.
This page offers a comprehensive summary of the proxy types, extrinsics, storage methods, and getters associated with the pallet constants accessible within the proxy pallet.

**Proxy Types**
---
1. **Any** - This proxy type allow delegate account to make any call that are supported by proxy pallet. This is highest level of priveledge so should always use that with caution.

2. **NonTransfer** - This proxy type allow delegate account to make any call supported by proxy pallet expect for the asset transfer funtionalities. This can come handy when you want to keep your funds secure in cold storage and want to delegate all the other functionalities to a proxy account.
To see complete list of functionality, checkout the source code in Astar repo.

3. **Balances** - This proxy type gives control of handling accounts and balances to the delegate account. Complete list of calls can be found [here](https://docs.rs/pallet-balances/latest/pallet_balances/pallet/enum.Call.html).

4. **Assets** - This proxy type allows delegate account to control the functionalities related to fungible assets which includes asset issuance, transferal, minting etc. This is to be notes that this proxy types doesn't control the native currency like Astar or Shiden which are controled by Balances proxy.

5. **IdentityJudgement** - This proxy type allows a single functionality to delegate account which is to provide a judgement to an identity in a naming system. The delegator must be a registrar.

6. **CancelProxy** - This proxy type allows delegate account to  to reject and remove any announced proxy calls.

7. **DappsStaking** - This proxy type allows delegate account to perform DappStaking related transactions such as register, unregister contracts, claim rewards etc.


**Extrinsics**
---
The proxy pallet provides the following extrinsics (functions):
* **addProxy**(delegate, proxyType, delay) - allows the sender to register a proxy account capable of making calls on behalf of the sender. If the delay value is set to a number greater than 0, the proxy account must announce a transaction and wait for the specified number of blocks before executing it as a proxy. This function also emits a ProxyAdded event.

* **announce**(real, callHash) - used to record the announcement of a proxy transaction made by proxy accounts that have a delay requirement. This function emits an Announced event.

* **anonymous**(proxyType, delay, index) - generates a new account with an inaccessible private key, making it inaccessible. The sender assumes the role of a proxy for this account, based on the specified type and delay. Caution: If the proxy is removed, the primary account will become inaccessible. This function emits an AnonymousCreated event.

* **killAnonymous**(spawner, proxyType, index, height, extIndex) - removes a previously spawned anonymous proxy.

* **proxy**(real, forceProxyType, call) - performs a transaction as a proxy. This function emits a ProxyExecuted event.

* **proxyAnnounced**(delegate, real, forceProxyType, call) - executes a transaction as a proxy and removes any previous corresponding announcements. This function emits a ProxyExecuted event.

* **rejectAnnouncement**(delegate, callHash) - if the sender is a prime account, it removes a specific announcement from their proxy account. 

* **removeAnnouncement**(real, callHash) - if the sender is a proxy account, it removes a specific announcement to their prime account.

* **removeProxies()** - unregisters all proxy accounts associated with the sender.

* **removeProxy**(delegate, proxyType, delay) - unregisters a specific proxy account linked to the sender. This function emits a ProxyRemoved event.


**Storage Methods**
---
The proxy pallet provides the following read-only storage methods to retrieve chain state data:

* **announcements**(AccountId20) - retrieves all announcements made by the specified proxy account.

* **palletVersion**() - retrieves the current version of the pallet.

* **proxies**(AccountId20) - retrieves a map and count of all proxy accounts associated with a specified primary account.


**Constants**
---
The proxy pallet provides the following read-only functions to retrieve pallet constants:

* **announcementDepositBase()** - retrieves the base amount of currency required to reserve when creating an announcement.

* **announcementDepositFactor()** - retrieves the amount of currency required per announcement made.

* **maxPending()** - retrieves the maximum number of time-delayed announcements allowed to be pending.

* **maxProxies()** - retrieves the maximum number of proxies permitted for a single account.

* **proxyDepositBase()** - retrieves the base amount of currency required to reserve when creating a proxy.

* **proxyDepositFactor()** - retrieves the amount of currency required per proxy added.