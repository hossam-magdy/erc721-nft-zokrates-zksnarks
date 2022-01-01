// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC721Enumerable.sol";
import "../utils/openzeppelin/Strings.sol";

contract ERC721Metadata is ERC721Enumerable {
    // TODO: Create private vars for token _name, _symbol, and _baseTokenURI (string)
    string private _name;
    string private _symbol;
    string private _baseTokenURI;

    // TODO: create private mapping of tokenId's to token uri's called '_tokenURIs'
    mapping(uint256 => string) private _tokenURIs;

    bytes4 private constant _INTERFACE_ID_ERC721_METADATA = 0x5b5e139f;

    /*
     * 0x5b5e139f ===
     *     bytes4(keccak256('name()')) ^
     *     bytes4(keccak256('symbol()')) ^
     *     bytes4(keccak256('tokenURI(uint256)'))
     */

    constructor(
        string memory __name,
        string memory __symbol,
        string memory __baseTokenURI
    ) {
        // TODO: set instance var values
        _name = __name;
        _symbol = __symbol;
        _baseTokenURI = __baseTokenURI;

        _registerInterface(_INTERFACE_ID_ERC721_METADATA);
    }

    // TODO: create external getter functions for name, symbol, and baseTokenURI

    function name() external view returns (string memory) {
        return _name;
    }

    function symbol() external view returns (string memory) {
        return _symbol;
    }

    function baseTokenURI() external view returns (string memory) {
        return _baseTokenURI;
    }

    function tokenURI(uint256 tokenId) external view returns (string memory) {
        require(_exists(tokenId));
        return _tokenURIs[tokenId];
    }

    // TODO: Create an internal function to set the tokenURI of a specified tokenId
    // It should be the _baseTokenURI + the tokenId in string form
    // require the token exists before setting
    function _setTokenURI(uint256 tokenId) internal {
        require(_exists(tokenId));

        _tokenURIs[tokenId] = _strConcat(
            _baseTokenURI,
            Strings.toString(tokenId)
        );
    }

    // The "strConcat" from Provable/Oraclize: https://github.com/provable-things/ethereum-api/blob/master/provableAPI_0.6.sol#L942
    //   was always resulting into "out of gas" during `truffle test`
    // https://ethereum.stackexchange.com/a/56337
    // https://betterprogramming.pub/solidity-playing-with-strings-aca62d118ae5
    function _strConcat(string memory s1, string memory s2)
        private
        pure
        returns (string memory)
    {
        return string(abi.encodePacked(s1, s2));
    }
}
