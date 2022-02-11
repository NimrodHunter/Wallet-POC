# Wallet POC

Wallet Service manage private keys in a secure way, and provide custody of blockchain accounts.

## Wallet Service Diagram

![Wallet Service](https://github.com/NimrodHunter/Wallet-POC/blob/master/diagram/wallet-management.png)

## Create Account

Wallet service, create an account related to an user ID, this account is a private key inside the HSM,
wallet service return the public address of this account. The private key is unknown and never leave the HSM.

## Sign Transaction

Wallet service, sign transactions inside the HSM, send the signed transaction to the blockchain and return the transaction hash.

## Why ethers ?

Wallet service use [ethers package](https://github.com/ethers-io/ethers.js) to manage blockchain operations.

* Complete functionality for all your Ethereum needs.

* Tiny (~79kb compressed; 242kb uncompressed).

* Extensive documentation.

* easy to integrate with lambda functions.

## Why HSM ?

* HSMs have built-in anti-tampering technology which wipes secrets in case of physical breach.

* They are architectured around secure cryptoprocessor chips and active physical security measures such as meshes to mitigate side channel attacks or bus probing.

* Follow [FIPS 140-2 Level 2 standard](https://en.wikipedia.org/wiki/FIPS_140-2)

* These devices are heavily used in the banking industry and in all verticals where critical secrets must be protected.

## Why lambda ?

* atomic execution of code.

* scales automatically.

* serverless, they manage all the server setup like balance of memory, CPU, network and other resources.

## How Use it

### Install Tools

follow the instructions here:
- [yarn](https://yarnpkg.com/lang/en/docs/install/).
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### Run Demo

`git@github.com:NimrodHunter/Wallet-POC.git`

`cd wallet-poc`

`yarn`

`yarn start`

now you can demo the wallet management here http://localhost:8080/










