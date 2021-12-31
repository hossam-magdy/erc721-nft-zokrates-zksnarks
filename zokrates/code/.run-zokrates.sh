#!/bin/sh

cd /home/zokrates/code

# ref: https://zokrates.github.io/gettingstarted.html

# compile - Generates: `out` binary
zokrates compile -i ./square/square.zok

# perform the setup phase - Generates: `proving.key` and `verification.key` (uses `out` binary)
zokrates setup

# execute the program - Generates: `witness`
zokrates compute-witness -a 337 113569

# generate a proof of computation - Generates: `proof.json` (uses `proving.key` and `witness`)
zokrates generate-proof

# export a solidity verifier - Generates: `verifier.sol` (uses `verification.key`)
zokrates export-verifier
