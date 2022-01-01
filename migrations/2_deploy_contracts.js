// migrating the appropriate contracts
// const ERC721MintableComplete = artifacts.require("ERC721MintableComplete");
const Verifier = artifacts.require("Verifier");
const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = async (deployer) => {
  // deployer.deploy(ERC721MintableComplete);
  await deployer.deploy(Verifier);

  const verifierContractInstance = await Verifier.deployed();
  await deployer.deploy(SolnSquareVerifier, verifierContractInstance.address);
};
