// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = (deployer) => {
  deployer.deploy(SquareVerifier);
  deployer.deploy(SolnSquareVerifier);
};
