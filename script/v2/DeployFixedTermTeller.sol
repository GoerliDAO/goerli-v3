// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {Script} from 'forge-std/Script.sol';

import {BondFixedTermTeller} from "src/v2/BondFixedTermTeller.sol";
import {IBondAggregator} from "src/interfaces/IBondAggregator.sol";
import {Authority} from "solmate/auth/Auth.sol";

/// @notice A very simple deployment script
contract DeployBondFixedTermTeller is Script {

  /// @notice The main script entrypoint
  /// @return fixed_term_teller The deployed contract
  function run() external returns (BondFixedTermTeller fixed_term_teller) {
    string memory seedPhrase = vm.readFile(".secret");
    uint256 privateKey = vm.deriveKey(seedPhrase, 0);
    vm.startBroadcast(privateKey);
    address protocol = 0x90F79bf6EB2c4f870365E785982E1f101E93b906; // #3 account in anvil
    address aggregator_addr = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;
    IBondAggregator aggregator = IBondAggregator(aggregator_addr);
    address guardian = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
    address authority_addr = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
    Authority authority = Authority(authority_addr);

    fixed_term_teller = new BondFixedTermTeller(protocol, aggregator, guardian, authority);

    vm.stopBroadcast();
    return fixed_term_teller;
  }
}

        // address protocol_,
        // IBondAggregator aggregator_,
        // address guardian_,
        // Authority authority_