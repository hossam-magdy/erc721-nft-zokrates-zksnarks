// This file is for minting 10 tokens, using `./zokrates/code/generated/*`

const fs = require("fs");
const Web3 = require("web3");
const HDWallet = require("@truffle/hdwallet-provider");

const SolnSquareVerifier = require("./build/contracts/SolnSquareVerifier.json");
const infuraKey = fs.readFileSync(".secret.infuraKey"); // '1cbe12...';

const mnemonic =
  "tilt lunar exile blame merry good little undo evidence useful rotate error"; // the public/testing one // readFileSync(".secret.mnemonic").toString().trim();
const url = `https://rinkeby.infura.io/v3/${infuraKey}`;
const networkId = 4;

const provider = new HDWallet(mnemonic, url);
const web3 = new Web3(provider);

const solnSquareVerifierContract = new web3.eth.Contract(
  SolnSquareVerifier.abi,
  SolnSquareVerifier.networks[networkId].address
);

web3.eth.getAccounts(async (_err, [account1, account2]) => {
  const totalSupplyBefore = await solnSquareVerifierContract.methods
    .totalSupply()
    .call();
  console.log(`totalSupply before: ${totalSupplyBefore}`);

  let countMintedTokens = 0;
  for (let i = 0; i < 10; i++) {
    const tokenOwner = i % 2 === 0 ? account1 : account2;
    const tokenId = i + 1;
    const solutionJson = require(`./zokrates/code/generated/proof${tokenId}.json`);
    const { proof, inputs } = solutionJson;
    try {
      await solnSquareVerifierContract.methods
        .addSolution(tokenOwner, proof.a, proof.b, proof.c, inputs)
        .send({ from: account1 });
      await solnSquareVerifierContract.methods
        .mintOwnershipProvedToken(tokenOwner, tokenId, inputs)
        .send({ from: account1 });
      countMintedTokens++;
      console.log("Minted tokenId", tokenId, "to", tokenOwner);
    } catch (e) {
      console.log(`ERROR for tokenId ${i}: ${e?.message}`);
    }
  }

  console.log(`Successfully minted ${countMintedTokens} tokens`);
  const totalSupplyAfter = await solnSquareVerifierContract.methods
    .totalSupply()
    .call();
  console.log(`totalSupply after: ${totalSupplyAfter}`);

  process.exit(0);
});
