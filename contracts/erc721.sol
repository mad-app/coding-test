// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ERC721
{
    string private _name;
    string private _symbol;

    mapping(address => uint256) private _balances;


    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    function balanceOf(address owner) public view returns (uint256) {
        require(owner != address(0), "ERC721: balance query for the zero address");
        return _balances[owner];
    }
}