// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./openzeppelin/Address.sol";

abstract contract Ownable {
    //  TODO's
    //  1) create a private '_owner' variable of type address with a public getter function
    //  2) create an internal constructor that sets the _owner var to the creater of the contract
    //  3) create an 'onlyOwner' modifier that throws if called by any account other than the owner.
    //  4) fill out the transferOwnership function
    //  5) create an event that emits anytime ownerShip is transfered (including in the constructor)

    event OwnershipTransferred(address newOwner);

    using Address for address;

    address private _owner;

    constructor() {
        _setOwner(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == _owner);
        _;
    }

    function contractOwner() public view returns (address) {
        return _owner;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        // TODO add functionality to transfer control of the contract to a newOwner.
        // make sure the new owner is a real address
        require(
            !newOwner.isContract(),
            "Ownership can not be transferred to a contract address"
        );
        _setOwner(newOwner);
    }

    function _setOwner(address newOwner) private {
        _owner = newOwner;
        emit OwnershipTransferred(newOwner);
    }
}
