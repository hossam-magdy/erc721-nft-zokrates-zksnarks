#!/bin/sh

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
