// SPDX-License-Identifier: MIT
pragma solidity >=0.7.5;
import "src/interfaces/IERC20.sol";
// File: interfaces/IGDAO.sol

interface IGDAO is IERC20 {
    function mint(address account_, uint256 amount_) external;

    function burn(uint256 amount) external;

    function burnFrom(address account_, uint256 amount_) external;
}