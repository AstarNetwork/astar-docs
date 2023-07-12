# Harnessing Crust Network for NFT Minting: A Developer's Guide

![](https://hackmd.io/_uploads/r12FVSxHn.jpg)

The world of Non-Fungible Tokens (NFTs) has opened up intriguing possibilities for creators and collectors alike. However, stepping into this space might seem daunting, especially when it involves navigating the waters of blockchain technology. In this article, we provide an easy-to-understand, step-by-step guide for new coders interested in creating and managing NFTs via the Astar Network EVM and Crust Network while observing the underlying XCM protocol communication.

- [x] [Demo NFT Minter Website](https://evm-nft-contract-poc-ui.vercel.app/#/)
- [x] [Demo NFT Minter GUI Repo](https://github.com/AstarNetwork/evm-nft-contract-poc-ui)
- [x] [Demo NFT Minter Contract Repo](https://github.com/AstarNetwork/evm-nft-contract-poc)


## Step 1: Getting Started with an EVM Wallet
Before diving into NFT creation, you'll need to set up a Web3 wallet. This wallet serves as an interface between traditional web browsers and the Ethereum blockchain, a popular home for NFTs. Wallets such as Metamask, Talisman, and Subwallet are widely used and supported.
- Begin by connecting your Web3 wallet.

```jsx=
async connect() {
  const connect = await this.onboard.connectWallet();
  this.wallet = await this.onboard.connectedWallet;

  if (this.wallet) {
    this.provider = new ethers.providers.Web3Provider(this.wallet.provider);
    this.signer = this.provider.getSigner();
    this.address = await this.signer.getAddress();
    this.set();
  }

  return { connect };
}
```

While there is a little more than just that, you should take a look at [this article](https://astar.network/blog/one-small-piece-of-code-one-giant-leap-for-web3-37760/) for detailed view of the onboard wallet provider.  

On line 10 above, you might have wondered what was this for, well it's one of those things that onboard simplifies, this sets the chain to be Shiden in our example.  It simplifies the interaction with the wallet by making suggestions to the user. 

```jsx=
set() {
  this.onboard.setChain({ wallet: "MetaMask", chainId: "0x150" });
},
```

## Step 2: Dipping into Digital Signatures
Now that you're connected, the next step involves signing a message. Why? Crust's IPFS API needs your EVM address's signature for authorized use. Think of it as your unique digital fingerprint, confirming your identity on the blockchain.
- Go ahead and hit the "Sign" button to sign the message.

**Pro tip**, there are many different ways to sign a message depending of the framework, here are two I have used for this project, first in VueJs, then in NodeJs.

```jsx=
async sign() {
  this.sig = await this.signer.signMessage(this.address);
}
```

```nodejs=
async function sign(address) {
  return hre.network.provider.send(
    "eth_sign",
    [address, ethers.utils.hexlify(ethers.utils.toUtf8Bytes(address))]
  )
}
```

## Step 3: Uploading to IPFS - Your First Big Step
With your signature in place, it's time to upload your image and metadata file to the IPFS network. This decentralized network ensures that your data remains accessible and secure.
- To upload your files, simply select the "IPFS" button.

You can now see the signature being used on line 20, then used in the auth section on line 28. 
How to add is shown on line 42, how to get stats on it on line 53.

And just like that, we already know what our `tokenURI` will be so let's pin that!

```jsx=
async ipfs() {
  const tokenId = await this.getNextTokenId();
  const now = Date.now();

  const metadata = {
    name: `ShidenCrust Singulars #${tokenId}`,
    description:
      "This is the POC collection of NFTs on Shiden with the metadata and image stored on Crust",
    image: "",
    edition: tokenId,
    date: now,
    creator: "Greg Luneau from Astar",
    attributes: [
      { trait_type: "Smart Contract Chain", value: "Shiden.Network" },
      { trait_type: "Decentralized Cloud Storage", value: "Crust.Network" },
      { trait_type: "Virtual Machine", value: "EVM" },
    ],
  };
    
  const authHeaderRaw = `eth-${this.address}:${this.sig}`;
  const authHeader = Buffer.from(authHeaderRaw).toString("base64");
  const ipfsW3GW = ["https://crustipfs.xyz", "https://gw.crustfiles.app"];

  // 1. Create IPFS instant
  const ipfs = create({
    url: `${ipfsW3GW[1]}/api/v0`,
    headers: {
      authorization: `Basic ${authHeader}`,
    },
  });

  // 2. Add files to ipfs
  const options = {
    wrapWithDirectory: true,
  };

  const imageFileDetails = {
    path: tokenId + ".png",
    content: await this.image(),
  };

  const cidImage = await ipfs.add(imageFileDetails, options);
  metadata.image = `ipfs://${cidImage.cid.toString()}/${
    imageFileDetails.path
  }`;

  this.files.push({
    cid: cidImage.cid.toString(),
    size: cidImage.size,
  });

  // 3. Get file status from ipfs
  const fileStatImage = await ipfs.files.stat(
    `/ipfs/${cidImage.cid.toString()}/${imageFileDetails.path}`
  );

  const metadataFileDetails = {
    path: tokenId + ".json",
    content: JSON.stringify(metadata),
  };

  const cidMetadata = await ipfs.add(metadataFileDetails, options);

  this.files.push({
    cid: cidMetadata.cid.toString(),
    size: cidMetadata.size,
  });

  // 3. Get file status from ipfs
  this.metadatafileStat = await ipfs.files.stat(
    `/ipfs/${cidMetadata.cid.toString()}/${metadataFileDetails.path}`
  );

  this.tokenURI = `https://crustipfs.live/ipfs/${cidMetadata.cid.toString()}/${
    metadataFileDetails.path
  }`;
}
```

There is a little helper function that should not be overlooked.  It's a good example of a basic interaction with a smart contract, in this instance we want to know the latest `tokenID` that was minted.

```jsx=
async getNextTokenId() {
  const abi = ["function currentTokenId() view returns (uint256)"];
  const provider = new ethers.providers.Web3Provider(this.wallet.provider);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(this.contractAddress, abi, signer);

  let currentTokenId = await contract.currentTokenId();
  return currentTokenId.add(1).toNumber();
}
```

## Step 4: Pinning - Securing Your Data
Once your files are on the IPFS network, you'll need to pin them. This process anchors your data to the network, ensuring it remains accessible over time. Pinning involves a payment - once for the image and once for the metadata file - and includes a XCM transfer to the Crust Network.
- To pin your files, click on the "Pin" button.

Line 18 shows how to get your SDN balance, this way you could advise the user if there is not enough for the transactions. Line 28 shows how to get the price of storing this file on the Crust Network. Line 37 places the order and the payment is made.


```jsx=
async pin() {
  // Define StorageOrder contract ABI
  const StorageOrderABI = [
    "function getPrice(uint size) public view returns (uint price)",
    "function placeOrder(string cid, uint64 size) public payable",
    "function placeOrderWithNode(string cid, uint size, address nodeAddress) public payable",
    "event Order(address customer, address merchant, string cid, uint size, uint price)",
  ];

  // Define StorageOrder contract address for Shiden network
  const StorageOrderAddress = "0x10f15729aEFB5165a90be683DC598070F91367F0";

  // Get signer and provider
  const provider = new ethers.providers.Web3Provider(this.wallet.provider);
  const signer = provider.getSigner();

  // Get balance
  this.balance = await provider.getBalance(this.address);
  console.log("balance:", ethers.utils.formatEther(this.balance), "SDN");

  // Get prices and place orders for each file
  for (const file of this.files) {
    const storageOrder = new ethers.Contract(
      StorageOrderAddress,
      StorageOrderABI,
      signer
    );
    const price = await storageOrder.getPrice(file.size);
    console.log(
      `Price for file CID ${file.cid} with size ${
        file.size
      }: ${ethers.utils.formatEther(price)} SDN`
    );

    console.log("file.cid, file.size, price", file.cid, file.size, price);

    const txResponse = await storageOrder.placeOrder(file.cid, file.size, {
      value: price,
    });
    const txReceipt = await txResponse.wait();
    console.log(
      `File CID ${file.cid} with size ${file.size} pinned successfully!`
    );
    console.log(`Transaction hash: ${txReceipt.transactionHash}`);
  }
}
```

If you want to know more about the specific parameters of the Crust Network checkout [their wiki](https://wiki.crust.network/docs/en/buildGettingStarted).

### XCM
> That's great but you said it was an XCM transaction?

It is, it's also well hidden.  If we peer into the smart contract Crust deployed on Shiden, you can see two `xcmtransactor` function call.  One to transfer SDN to pay for all the pinning fees and the second to do the pinning as remote transaction call.

```solidity
  function placeOrder(string memory cid, uint64 size) public payable {
    require(sizeLimit >= size, "Size exceeds the limit");

    uint price = getPrice(size);
    require(msg.value >= price, "No enough SDN to place order");

    uint256 parachainId = 2012;
    // Transfer the SDN through XCMP
    address[] memory assetId = new address[](1);
    assetId[0] = SDN_ADDRESS;
    uint256[] memory assetAmount = new uint256[](1);
    assetAmount[0] = preSendAmount;
    uint256 feeIndex = 0;
    xcmtransactor.assets_reserve_transfer(assetId, assetAmount, corrAddress, false, parachainId, feeIndex);

    // Place cross chain storage order
    uint256 feeAmount = preSendAmount / 10;
    uint64 overallWeight = 8000000000;
    // cid: HiMoonbaseSC, size: 1024
    bytes memory callData = buildCallBytes(cid, size);
    xcmtransactor.remote_transact(
        parachainId,
        false,
        SDN_ADDRESS,
        feeAmount,
        callData,
        overallWeight
    );
  }
```


## Step 5: Minting Your First NFT
With your files securely pinned, you're ready to mint your NFT. This is where the magic happens - your digital asset becomes a unique, blockchain-verified NFT!
- To mint your NFT, simply hit the "Mint" button.

On line 13 is where we mint this new marvelous ShidenCrust Singular NFT using the `tokenURI` we made ealier. Line 16 shows how you can retreive the offical `tokenID`. Line 20 shows how to retreive the `tokenURI` from a `tokenID`  

```jsx=
async mint() {
  // Get signer and provider
  const provider = new ethers.providers.Web3Provider(this.wallet.provider);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    this.contractAddress,
    this.FactoryNFT.abi,
    signer
  );

  // Mint the NFT
  const txResponse = await contract.mintNFT(this.tokenURI);
  const txReceipt = await txResponse.wait();
  const [transferEvent] = txReceipt.events;
  const { tokenId } = transferEvent.args;
  console.log("NFT minted successfully!");
  console.log(`NFT tokenId: ${tokenId}`);

  const tokenURIonchain = await contract.tokenURI(tokenId);
  console.log("tokenURI", tokenURIonchain);
  this.tofuURL = `https://tofunft.com/nft/shiden/${this.contractAddress}/${tokenId}`;
}
```

## Step 6: Admiring Your NFT
You've done it - you've created your first NFT! To view your NFT, head to the tofuNFT.com marketplace. Do keep in mind that it might take a minute or two for your NFT to appear.
- To view your NFT, click on the "View" button.

Well that's it, the link to a viewer of the NFT was built on line 22 above, it's that simple. 

![](https://hackmd.io/_uploads/B1PwYBlBn.png)

## But wait there is more!

Let's go back in time to know how this mighty contract was deployed!
## Step 0: Deploying the NFT Factory

The NFT Factory is a smart contract that serves as the foundation for our NFT creation process. 

Deploying an NFT Factory may seem intimidating if you're new to the world of blockchain and smart contracts, but don't worry, I've broken it down into manageable steps in [this github repo](https://github.com/AstarNetwork/evm-nft-contract-poc) for reference.

Line 9 deployes the contract, don't forget to save the deployed address, (that's what was inside `this.contractAddress`) you'll need it for interations we've done above.

```nodejs=
// deploy.js

async function main() {
  // Load the contract and the provider
  const [signer] = await ethers.getSigners();
  console.log("Deploying contract with account:", signer.address);

  const FactoryNFT = await ethers.getContractFactory("FactoryNFT");
  const factoryNFT = await FactoryNFT.deploy(); //deploying the contract

  await factoryNFT.deployed(); // waiting for the contract to be deployed

  console.log("FactoryNFT deployed to:", factoryNFT.address); // Returning the contract address
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

```

---
## And there you have it
a step-by-step beginner's guide to creating and managing NFTs using the Astar Network EVM and Crust Network with XCM. As you become more comfortable with these steps, you'll be well on your way to exploring the exciting and innovative world of NFTs. Welcome to the frontier of digital creation!

