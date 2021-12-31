// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC721Mintable/ERC721Metadata.sol";

//  TODO's: Create CustomERC721Token contract that inherits from the ERC721Metadata contract. You can name this contract as you please
//  1) Pass in appropriate values for the inherited ERC721Metadata contract
//      - make the base token uri: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/
//  2) create a public mint() that does the following:
//      -can only be executed by the contract owner
//      -takes in a 'to' address, tokenId, and tokenURI as parameters
//      -returns a true boolean upon completion of the function
//      -calls the superclass mint and setTokenURI functions

contract ERC721MintableComplete is ERC721Metadata {
    constructor()
        ERC721Metadata(
            "HCustomERC721Token",
            "HNFT",
            "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/"
        )
    {}

    function mint(
        address to,
        uint256 tokenId,
        string memory tokenURI
    ) public onlyOwner returns (bool) {
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        return true;
    }
}
