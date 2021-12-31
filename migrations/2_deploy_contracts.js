// migrating the appropriate contracts
const ERC721MintableComplete = artifacts.require("ERC721MintableComplete");
const Verifier = artifacts.require("Verifier");
// const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = (deployer) => {
  deployer.deploy(ERC721MintableComplete);
  deployer.deploy(Verifier);
  // deployer.deploy(SolnSquareVerifier);
};
