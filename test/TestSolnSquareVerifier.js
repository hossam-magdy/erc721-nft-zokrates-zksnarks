// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

const SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
const Verifier = artifacts.require("Verifier");
const solutionJson = require("./proof.json");

const { proof, inputs } = solutionJson;
const { a: proof_a, b: proof_b, c: proof_c } = proof;

// Helper, inspired by `truffle-assertions` => simplified version.
const assertEventEmmitted = (txResult, eventName, argsCb = (_) => true) => {
  const foundEvent = txResult.receipt.logs.find((e) => e.event === eventName);
  if (!foundEvent) {
    throw new Error(`Event "${eventName}" was not emitted`);
  }

  const argsMatching = argsCb(foundEvent.args);
  if (!argsMatching) {
    throw new Error(
      `Event "${eventName}" was emitted with non-matchig args: ${JSON.stringify(
        foundEvent.args
      )}`
    );
  }
};

contract("SolnSquareVerifier", async ([account1, account2]) => {
  it("Test if a new solution can be added for contract, and added only once", async () => {
    const verifierContract = await Verifier.new();
    const contract = await SolnSquareVerifier.new(verifierContract.address);
    const tx = await contract.addSolution(
      account1,
      proof_a,
      proof_b,
      proof_c,
      inputs
    );
    let error;
    try {
      await contract.addSolution(account1, proof_a, proof_b, proof_c, inputs);
    } catch (e) {
      error = e;
    }
    assert.equal(
      error?.message,
      "Returned error: VM Exception while processing transaction: revert -- Reason given: This solution was already added."
    );

    assertEventEmmitted(
      tx,
      "SolutionSubmitted",
      (args) =>
        args.solutionOwner == account1 &&
        args.index ==
          "62411842367179907753391822162836181968791436020641188383329689952518032075238" // uint256(keccak256(abi.encodePacked(inputs)))
    );
  });

  it("Test if an ERC721 token can be minted for contract", async () => {
    const verifierContract = await Verifier.new();
    const contract = await SolnSquareVerifier.new(verifierContract.address);
    await contract.addSolution(account2, proof_a, proof_b, proof_c, inputs);
    const tx = await contract.mintOwnershipProvedToken(account2, 1, inputs);
    assert.equal(
      await contract.tokenURI(1),
      "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1"
    );
    assert.equal(await contract.ownerOf(1), account2);

    assertEventEmmitted(
      tx,
      "Transfer",
      (args) =>
        args.from == "0x0000000000000000000000000000000000000000" &&
        args.to == account2 &&
        args.tokenId == 1
    );
  });
});
