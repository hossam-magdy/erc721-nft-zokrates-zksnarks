// migrating the appropriate contracts
const ERC721MintableComplete = artifacts.require(
  "./ERC721MintableComplete.sol"
);
// const SquareVerifier = artifacts.require("./SquareVerifier.sol");
// const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = (deployer) => {
  deployer.deploy(ERC721MintableComplete);
  // deployer.deploy(SquareVerifier);
  // deployer.deploy(SolnSquareVerifier);
};
