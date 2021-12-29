var ERC721MintableComplete = artifacts.require("ERC721MintableComplete");

contract("TestERC721Mintable", (accounts) => {
  const [account_one, account_two] = accounts;

  describe("match erc721 spec", () => {
    let contract;
    beforeEach(async () => {
      contract = await ERC721MintableComplete.new({ from: account_one });

      // TODO: mint multiple tokens
    });

    it("should return total supply", async () => {});

    it("should get token balance", async () => {});

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it("should return token uri", async () => {});

    it("should transfer token from one owner to another", async () => {});
  });

  describe("have ownership properties", () => {
    let contract;
    beforeEach(async () => {
      contract = await ERC721MintableComplete.new({ from: account_one });
    });

    it("should fail when minting when address is not contract owner", async () => {});

    it("should return contract owner", async () => {});
  });
});
