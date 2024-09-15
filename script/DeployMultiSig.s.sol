// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {Script} from "forge-std/Script.sol";

import "src/Kernel.sol";
import "src/external/GdaoAuthority.sol";
// import "src/v2/GDAOStaking.sol";
import "src/modules/INSTR/GoerliDaoInstructions.sol";
import "src/modules/MINTR/GoerliMinter.sol";
import "src/modules/PRICE/GoerliDaoPrice.sol";
import "src/modules/RANGE/GoerliDaoRange.sol";
import "src/modules/ROLES/GoerliDaoRoles.sol";
import "src/modules/TRSRY/GoerliDaoTreasury.sol";
import "src/modules/VOTES/GoerliDaoVotes.sol";
// import "src/policies/Governance.v1.sol";
import "src/policies/Distributor.sol";
import "src/policies/Emergency.sol";
import "src/policies/TreasuryCustodian.sol";
import "src/policies/RolesAdmin.sol";


/// @notice A very simple deployment script
contract MultisigDeploy is Script {
  GoerliDaoInstructions gdaoInstr;
  GoerliMinter gdaoMinter;
  GoerliDaoPrice gdaoPrice;
  GoerliDaoRange gdaoRange;
  GoerliDaoRoles gdaoRoles;
  GoerliDaoTreasury gdaoTreasury;
  GoerliDaoVotes gdaoVotes;
  Distributor distributor;
  Emergency emergency;
  RolesAdmin roles_admin;
  TreasuryCustodian treasury_custodian;
  Kernel kernel;
  GdaoAuthority authority;
//   GDAOStaking staking;
  
  address gdao_addr = vm.envAddress("GOERLI_GDAO");

  address exec_multi_sig = vm.envAddress("POLICY_GOERLI_MULTISIG");
  address dao_multi_sig = vm.envAddress("DAO_GOERLI_MULTISIG");

  address authority_addr = vm.envAddress("GOERLI_AUTHORITY");
  address kernel_addr = vm.envAddress("GOERLI_KERNEL"); 
  address staking_addr = vm.envAddress("GOERLI_STAKING");
  // address roles_admin_addr = vm.envAddress("GOERLI_ROLES_ADMIN");

// authority, gdao, staking, sgdao, xgdao, migrator should already be deployed at this point

  /// @notice The main script entrypoint
  /// @return kernel The deployed contract
  function run() external returns (Kernel kernel) {    
    uint256 deployerPrivateKey = vm.envUint("KERNEL_PRIV_5");
    vm.startBroadcast(deployerPrivateKey);
    Kernel kernel = Kernel(kernel_addr);
    GdaoAuthority authority = GdaoAuthority(authority_addr);
    // staking = GDAOStaking(staking_addr);
    // staking.setAuthority(IOlympusAuthority(exec_multi_sig));

    // push new roles admin to DAO Multi sig
    // roles_admin = RolesAdmin(roles_admin_addr);
    // roles_admin.pushNewAdmin(exec_multi_sig);

    // update authority to multi sig
    // authority.pushGovernor(address(exec_multi_sig), true);
    // authority.pushPolicy(address(exec_multi_sig), true);
    // authority.pushGuardian(address(exec_multi_sig), true);
    // authority.pushVault(address(exec_multi_sig), true);

        // roles admin - grant role
    // hex version of ascii of role to grant to address
    roles_admin.grantRole(0x6f70657261746f725f6f70657261746500000000000000000000000000000000, exec_multi_sig);
    roles_admin.grantRole(0x6f70657261746f725f706f6c6963790000000000000000000000000000000000, exec_multi_sig);
    roles_admin.grantRole(0x6f70657261746f725f61646d696e000000000000000000000000000000000000, exec_multi_sig);
    roles_admin.grantRole(0x63616c6c6261636b5f77686974656c6973740000000000000000000000000000, exec_multi_sig);
    roles_admin.grantRole(0x70726963655f61646d696e000000000000000000000000000000000000000000, exec_multi_sig);
    //custodian needed
    roles_admin.grantRole(0x6469737472696275746f725f61646d696e000000000000000000000000000000, exec_multi_sig);
    roles_admin.grantRole(0x656d657267656e63795f73687574646f776e0000000000000000000000000000, exec_multi_sig);
    roles_admin.grantRole(0x656d657267656e63795f72657374617274000000000000000000000000000000, exec_multi_sig);
    roles_admin.grantRole(0x68656172745f61646d696e000000000000000000000000000000000000000000, exec_multi_sig);
    roles_admin.pushNewAdmin(exec_multi_sig);

    // update kernel executor from deployer to multi sig
    kernel.executeAction(Actions.ChangeExecutor, exec_multi_sig);


    vm.stopBroadcast();
    return kernel;
  }
}