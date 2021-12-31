// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Ownable.sol";

//  TODO's: Create a Pausable contract that inherits from the Ownable contract
//  1) create a private '_paused' variable of type bool
//  2) create a public setter using the inherited onlyOwner modifier
//  3) create an internal constructor that sets the _paused variable to false
//  4) create 'whenNotPaused' & 'paused' modifier that throws in the appropriate situation
//  5) create a Paused & Unpaused event that emits the address that triggered the event

abstract contract Pausable is Ownable {
    event Paused();
    event Unpaused();

    bool private _paused = false;

    constructor() {
        _paused = false;
    }

    modifier whenNotPaused() {
        require(_paused == false, "Not allowed, contract is currently paused");
        _;
    }

    modifier paused() {
        require(
            _paused == true,
            "Not allowed, contract is currently not paused"
        );
        _;
    }

    function setPaused(bool isPaused) external onlyOwner {
        if (isPaused == _paused) return;

        _paused = isPaused;

        if (_paused) {
            emit Paused();
        } else {
            emit Unpaused();
        }
    }
}
