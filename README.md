# Capstone Project: Decentralized Housing

## Versions used:

```
Truffle v5.4.25 (core: 5.4.25)
Solidity - ^0.6.2 (solc-js)
Node v14.18.1
Web3.js v1.5.3
```

## Using [ZoKrates](https://zokrates.github.io/gettingstarted.html) version `0.6.4`:

`docker run -it -v ${PWD}/zokrates/code:/home/zokrates/code zokrates/zokrates:0.6.4 sh /home/zokrates/code/.run-zokrates.sh`

> shortcut: `yarn zokrates-run`

[OR] the detailed/manual version:

```sh
docker run -it -v ${PWD}/zokrates/code:/home/zokrates/code zokrates/zokrates:0.6.4 /bin/bash
cd /home/zokrates/code

# ref: https://zokrates.github.io/gettingstarted.html
# compile - Generates: `out` binary
zokrates compile -i ./square/square.zok
# perform the setup phase - Generates: `proving.key` and `verification.key`
zokrates setup
# execute the program - Generates: `witness`
zokrates compute-witness -a 337 113569
# generate a proof of computation - Generates: `proof.json`
zokrates generate-proof
# export a solidity verifier - Generates: `verifier.sol`
zokrates export-verifier
# or verify natively
zokrates verify
```

---

<details>
<summary>Expand/Collapse</summary>

Source: https://github.com/udacity/Blockchain-Capstone

# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product.

## Project Steps

1. Clone the project repository
2. Explore the code base.
3. Fill out ERC721 Mintable Contract in ERC721Mintable.sol
4. Write test cases TestERC721Mintable.js
5. Compile and pass test cases in TestERC721Mintable.js
6. Implement Zokrates
   - Using Docker to install and instantiate a Zokrates zkSnarks development environment
   - Completes the Zokrates proof in square.code by adding the variable names in square.code
   - Compile program
   - Trusted setup
   - Compute witness
   - Generate Proof
   - Export Verifier.sol
   - Note: This project uses solidity version 0.5.2 so you will be required to update the code in Verifier.sol accordingly based on the compiler errors you receive
7. Write a test script to verify the solidity contract generated by Zokrates executed successfully - TestSquareVerifier.js
8. Write test contract for ZK and ERC721 integration - SolnSquareVerifier.sol
9. Compile and pass with TestSolnSquareVerifier.js
10. Deploy latest contracts generated by Zokrates (a.k.a verifier.sol)
11. Deploy SolnSquareVerifier contract to Rinkeby network
12. Mint 10 tokens
13. Generate OpenSea marketplace
14. Test and Verify OpenSea with your SolnSquareVerifier tokens
    - List 5 of your tokens on the marketplace
    - Purchase those 5 tokens using a different address
15. Complete required documentation and submit!

## Project Resources

- [Remix - Solidity IDE](https://remix.ethereum.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Truffle Framework](https://truffleframework.com/)
- [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
- [Open Zeppelin ](https://openzeppelin.org/)
- [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
- [Docker](https://docs.docker.com/install/)
- [ZoKrates](https://github.com/Zokrates/ZoKrates)
</details>
