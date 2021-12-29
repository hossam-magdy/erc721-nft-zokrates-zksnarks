# Capstone Project: Decentralized Housing

## Using [ZoKrates](https://zokrates.github.io/gettingstarted.html)

Using version `0.7.10`:

`docker run -it -v ${PWD}/zokrates/code:/home/zokrates/code zokrates/zokrates:0.7.10 sh /home/zokrates/code/.run-zokrates.sh`

> shortcut: `yarn zokrates-run`

[OR] the detailed/manual version:

```sh
docker run -it -v ${PWD}/zokrates/code:/home/zokrates/code zokrates/zokrates:0.7.10 /bin/bash
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
