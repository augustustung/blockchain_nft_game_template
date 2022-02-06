// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract LipToken is ERC721, Ownable {
    // code goes here ...
    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}
}
