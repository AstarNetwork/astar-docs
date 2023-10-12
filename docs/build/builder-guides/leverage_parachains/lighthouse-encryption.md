# Utilizing Lighthouse Encryption on Astar for Enhanced Security: A Developer's Guide

The realm of digital data has grown immensely, both in terms of volume and significance. As the usage of digital assets like NFTs increases, there's a compelling need to ensure that these assets are stored securely and accessibly. This guide introduces a new dimension of security, detailing how to encrypt data using Lighthouse Storage and then store and retrieve it on the Astar Network EVM. The focus is on leveraging Lighthouse Encryption in tandem with the blockchain capabilities of Astar Network.

## Introduction

#### Lighthouse Encryption
With an increasing volume of sensitive and important data being stored online, data encryption has become crucial. Lighthouse offers a robust encryption service, ensuring data remains confidential and secure. Their encryption approach goes beyond traditional methods, making data access seamless yet guarded.

#### Why Lighthouse Encryption?
* **Guarded Yet Accessible**: Lighthouse encryption ensures that while data is securely encrypted, it remains accessible to those with the right credentials.
* **Immutable and Distributed**: Leveraging the decentralization principles of blockchain, Lighthouse ensures that encrypted data remains tamper-proof and spread across a wide network.
* **Developer-Friendly**: Like its storage counterpart, Lighthouse Encryption comes with a suite of developer tools, including SDKs in various languages and a CLI for streamlined operations.

#### Getting Started with Lighthouse Encryption
* Website: https://lighthouse.storage
* Sign into [Files Dapp](https://files.lighthouse.storage/) with your wallet or your GitHub account to start uploading files to Lighthouse.
* Optionally:
  * Get [Lighthouse CLI](https://lighthouse-1.gitbook.io/lighthouse-1/cli-tool/overview)
  * Get [Lighthouse Javascript SDK](https://lighthouse-1.gitbook.io/lighthouse-1/lighthouse-sdk/overview)
  * Get [Python SDK](https://pypi.org/project/lighthouseweb3/)

For this tutorial, we will employ the Lighthouse Javascript SDK to encrypt and decrypt data using Lighthouse.


## Encrypting Data with Lighthouse

Lighthouse provides a simple yet robust solution for encrypting data on the IPFS network.

**Step 1:** **Install the required dependencies:**

```shell
npm install dotenv ethers @lighthouse-web3/sdk
```

**Step 2:** **Use lighthouse-SDK to upload encrypted data on the IPFS and get the Hash:**

*Note: In this example, we are using ES6 so we have to save the file as filename.mjs or define "type": "module", in the package.json file.*

```javascript
import * as dotenv from 'dotenv';
dotenv.config();
import { ethers } from "ethers";
import lighthouse from '@lighthouse-web3/sdk';

const signAuthMessage = async (publicKey, privateKey) => {
  const provider = new ethers.JsonRpcProvider();
  const signer = new ethers.Wallet(privateKey, provider);
  const messageRequested = (await lighthouse.getAuthMessage(publicKey)).data.message;
  const signedMessage = await signer.signMessage(messageRequested);
  return signedMessage;
}

const deployEncrypted = async () => {
  const path = "/mnt/c/Users/ravis/Pictures/Screenshots/flow1.png"; // Provide the absolute path to the file
  const apiKey = process.env.API_KEY;
  const publicKey = "0xa3c960b3ba29367ecbcaf1430452c6cd7516f588";
  const privateKey = process.env.PRIVATE_KEY;
  const signedMessage = await signAuthMessage(publicKey, privateKey);

  const response = await lighthouse.uploadEncrypted(
    path,
    apiKey,
    publicKey,
    signedMessage
  );

  // Display response
  console.log(response);
}
deployEncrypted();
```

**Expected Response:**

```bash
{
  data: [{
    Name: 'flow1.png',
    Hash: 'QmQqfuFH77vsau5xpVHUfJ6mJQgiG8kDmR62rF98iSPRes',
    Size: '31735'
  }]
}
```

**Step 3:** **Customize the code:**

* Update the `path` variable with the actual absolute path to the file you want to upload.
* Replace `0xa3c960b3ba29367ecbcaf1430452c6cd7516f588` with your own public key.
* Ensure you have the corresponding private key stored in the `PRIVATE_KEY` environment variable.

**Step 4:** **Configure the API key and the Private Key:**

* Create a .env file in your project's root directory.
* Add the following content to the .env file:

```makefile
API_KEY=YOUR_API_KEY
PRIVATE_KEY=YOUR_PRIVATE_KEY
```

* Replace `YOUR_API_KEY` with your actual API key obtained from [Lighthouse API Key Node Application](https://docs.lighthouse.storage/lighthouse-1/lighthouse-sdk/code-examples/nodejs-backend/api-key) or using the [Lighthouse CLI command](https://docs.lighthouse.storage/lighthouse-1/cli-tool/cli-commands/api-key) `lighthouse-web3 api-key --new`.
* Replace `YOUR_PRIVATE_KEY` with your own private key corresponding to the public key used in the code (Can be obtained from the wallet.json file made while [creating a wallet](https://docs.lighthouse.storage/lighthouse-1/cli-tool/cli-commands/create-wallet)).

**Step 5:** **Run the Node.js application to upload the file:**

* In the terminal, while in the `lighthouse-encryption-app` directory, run the following command:

```shell
node app.js
```

## Storing Encrypted Data on Astar Network

Once encrypted, this data can now be stored safely on the Astar Network.

```javascript
async function storeOnAstar(key, encryptedHash) {
  // Assuming you have a contract with a setData function to store data
  const txResponse = await yourContract.setData(key, encryptedHash);
  const txReceipt = await txResponse.wait();

  console.log("Data stored successfully on Astar Network!");
}
```

## Retrieving and Decrypting Data

To read back your encrypted data from the Astar Network and decrypt it:

**Step 1: Retrieve data from the Aster Chain:**
```javascript
async function getFromAstar(key) {
  // Assuming you have a contract with a setData function to store data
  const txResponse = await yourContract.getData(key);

  console.log("Data retrieved successfully from Astar Network: ", txResponse);
}
```

**Step 2: Retrieve and Decrypt data from the Lighthouse Storage:**

```javascript

const signAuthMessage = async (publicKey, privateKey) => {
  const provider = new ethers.JsonRpcProvider();
  const signer = new ethers.Wallet(privateKey, provider);
  const messageRequested = (await lighthouse.getAuthMessage(publicKey)).data.message;
  const signedMessage = await signer.signMessage(messageRequested);
  return signedMessage;
}

const decrypt = async () => {
  const cid = txResponse; //Example: 'QmbGN1YcBM25s6Ry9V2iMMsBpDEAPzWRiYQQwCTx7PPXRZ'
  const publicKey = "YOUR_PUBLIC_KEY"; //Example: '0xa3c960b3ba29367ecbcaf1430452c6cd7516f588'
  const privateKey = process.env.PRIVATE_KEY;

  // Get file encryption key
  const signedMessage = await signAuthMessage(publicKey, privateKey);
  const fileEncryptionKey = await lighthouse.fetchEncryptionKey(
    cid,
    publicKey,
    signedMessage
  );

  // Decrypt File
  const decrypted = await lighthouse.decryptFile(
    cid,
    fileEncryptionKey.data.key
  );

  // Save File
  fs.createWriteStream("fileName.txt").write(Buffer.from(decrypted));
}

decrypt();
```
---
## Advanced Features of Lighthouse SDK: Access Control & File Sharing

* **Access Control:** 
Lighthouse SDK doesn't just stop at encryption. It also provides a range of advanced features, allowing developers to implement various access control mechanisms. Here's a quick look at some of the types of access control conditions supported:

    **Types of Access Control conditions:**

    1. **NFTs and Tokens**
        * **ERC20**: Standard for fungible tokens, allowing a seamless integration for token-based access control.
        * **ERC721**: Often used for NFTs, granting unique asset-based access.
        * **ERC1155**: A multi-token standard, allowing for both fungible and non-fungible tokens.

    2. **Custom Contracts Deployed**: Integration with your custom smart contracts, granting or restricting access based on specific contract conditions.

    3. **Native Chain Token (like ETH)**: Implement access control based on native blockchain assets.

    4. **Time-based Access**: Grant or restrict access based on specific time constraints, allowing for temporary permissions.

* **Sharing Files Using Lighthouse Node**:
    The Lighthouse SDK also provides the ability to share encrypted files with other users. This feature can be especially useful when you want to provide access to a specific piece of data without revealing your encryption keys or compromising security.

**For more in-depth information on implementaion and practical examples, Lighthouse's official documentation is a treasure trove:**

* [Access Control](https://docs.lighthouse.storage/lighthouse-1/lighthouse-sdk/code-examples/nodejs-backend/access-control-node)
* [Access Control Conditions](https://docs.lighthouse.storage/lighthouse-1/lighthouse-sdk/code-examples/access-conditions)
* [Sharing File](https://docs.lighthouse.storage/lighthouse-1/lighthouse-sdk/code-examples/nodejs-backend/share-file-nodejs)

## Conclusion

By harnessing the power of Lighthouse Encryption combined with the Astar Network's decentralized capabilities, developers can ensure that data remains both accessible and confidential. As we move into an era where data is the new gold, tools and practices like these will become fundamental in the evolving digital landscape.

---
