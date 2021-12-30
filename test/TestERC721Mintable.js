const ERC721MintableComplete = artifacts.require("ERC721MintableComplete");

const BASE_URI =
  "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";

contract("TestERC721Mintable", (accounts) => {
  const [account1, account2] = accounts;

  describe("match erc721 spec", () => {
    let contract;
    beforeEach(async () => {
      contract = await ERC721MintableComplete.new({ from: account1 });
      // TODO: mint multiple tokens
      await contract.mint(account1, 1, BASE_URI);
      await contract.mint(account2, 2, BASE_URI);
      await contract.mint(account1, 3, BASE_URI);
    });

    it("should return total supply", async () => {
      assert.equal(await contract.totalSupply(), 3);
    });

    it("should get token balance", async () => {
      assert.equal(await contract.balanceOf(account1), 2);
      assert.equal(await contract.balanceOf(account2), 1);
    });

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it("should return token uri", async () => {
      assert.equal(
        await contract.tokenURI(1),
        "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1"
      );
      assert.equal(
        await contract.tokenURI(2),
        "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2"
      );
      assert.equal(
        await contract.tokenURI(3),
        "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/3"
      );
    });

    it("should transfer token from one owner to another", async () => {
      await contract.transferFrom(account1, account2, 1);

      assert.equal(await contract.balanceOf(account1), 1);
      assert.equal(await contract.balanceOf(account2), 2);
      assert.equal(await contract.ownerOf(1), account2);
    });
  });

  describe("have ownership properties", () => {
    let contract;
    beforeEach(async () => {
      contract = await ERC721MintableComplete.new({ from: account1 });
    });

    it("should fail when minting when address is not contract owner", async () => {
      let error;
      try {
        await contract.mint(account1, 1, BASE_URI, { from: account2 });
      } catch (e) {
        error = e;
      }
      assert.equal(
        error?.message,
        "Returned error: VM Exception while processing transaction: revert"
      );
    });

    it("should return contract owner", async () => {
      assert.equal(await contract.contractOwner(), account1);
    });
  });
});
