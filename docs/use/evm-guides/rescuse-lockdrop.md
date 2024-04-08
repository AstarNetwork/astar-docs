import lockdropaccount from "/docs/build/img/lockdropacc.png"

# Regaining Access to Lockdrop Accounts

Due to potential security issues, the use of lockdrop accounts was discontinued, leaving some users unable to access their funds if they hadn't withdrawn them within the provided short window. We're updating Shiden and Astar to restore access to these lockdrop accounts. The steps to reconnect your lockdrop account remain unchanged:

1. Visit the Astar portal.
2. Log in using your Ethereum lockdrop address.
3. Select "Switch to lockdrop account."

<div style={{textAlign: 'center'}}>
    <img src={lockdropaccount} style={{width: 1200}} />
</div>

4. Authenticate by signing the message.
5. Carefully read and comprehend the warnings.

:::caution

Please note that the access will be discontinued in 6 months, so move your funds ASAP.

Transfer all your assets to a new address under your control, whether it's an EVM or Native address. We always advise testing with a small transaction first.

Please note, transaction fees for the following actions are temporarily increased to facilitate the transfer of funds to a new address without regular use:

- Native transfer
- Asset transfer
- dApp Staking unbond and withdraw
:::