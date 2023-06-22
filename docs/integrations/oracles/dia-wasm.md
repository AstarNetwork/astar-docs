# DIA WASM Oracle
## Introduction
DIA has a dedicated WASM-based oracle. It can be universally deployed on any chain that supports substrate WASM environment.

## Prerequisites
Make sure the version of ink you are on is v3.0.1.

## Getting started
To access values from DIA wasm oracles you need to copy the diadata directory to your contract so that you can access DIA structs, that contain the oracle data.

### Contract Integration
In your contract, create storage with DiaDataref, this is used to access values from the oracle.

```
    #[ink(storage)]
    pub struct OracleExample {
        diadata: DiadataRef,
        ....
        ....
    }
```

This struct can be used to access data from pub functions from the oracle contract.

### Link the contract with an Oracle
To instantiate a contract's access to the oracle you need to pass the DIA oracle address, either using the constructor or by creating a separate write function to update with the value of oracle at a later stage.

Here is an example using a constructor:

```
    #[ink(constructor)]
    pub fn new(
        oracle_address: AccountId, 
    ) -> Self {
        let diadata: DiadataRef = ink_env::call::FromAccountId::from_account_id(oracle_address);  
        Self {
            diadata
        }
    }
```

Here, `oracle_address` refers to the DIA oracle address of a deployed oracle contract.

### Access the value
Next, to access an oracle value you can simple call the get() function:

```
 pub fn get(&self ) -> diadata::ValueTime {
            return self.diadata.get(String::from("ETH"));
        }
```

This returns the ETH price value time given by the oracle.

### Config changes

Make sure you add diadata/std in you config:

```
std = [
    "ink_metadata/std",
    "ink_env/std",
    "ink_storage/std",
    "ink_primitives/std",
    "scale/std",
    "scale-info/std",
    "diadata/std",
]
```

## Addresses
**Astar WASM Smart Contract**: [XmVR4FbKWLYQgyHVxkFiBYScVo662WgSCoS84uZZPWNrtRT](https://shiden.subscan.io/account/XmVR4FbKWLYQgyHVxkFiBYScVo662WgSCoS84uZZPWNrtRT)
**Shibuya WASM Smart Contract**: [X5NLwAUYX7FwVk25a8JwaXtuVJQsW87GQcKxYoF3aLyu8Pz](https://shibuya.subscan.io/account/X5NLwAUYX7FwVk25a8JwaXtuVJQsW87GQcKxYoF3aLyu8Pz)

## Learn more
See the entire oracle code and instructions on how to run and oracle service by yourself in [our github repo](https://github.com/diadata-org/dia-wasm-oracle).
