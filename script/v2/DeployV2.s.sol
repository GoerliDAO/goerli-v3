// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
import {GdaoAuthority} from "src/external/GdaoAuthority.sol";
import {Script} from "forge-std/Script.sol";
import {GDAO} from "src/external/GDAO.sol";
import {sGDAO} from "src/v2/sGDAO.sol";
import {xGDAO} from "src/external/xGDAO.sol";
import {Kernel} from "src/Kernel.sol";
import {Distributor} from "src/policies/Distributor.sol";
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
contract V2Deploy is Script {
//   uint256 initialRate = 12055988; // 50M% APR

//   Distributor distributor = new Distributor(kernel, address(GDAO), staking_addr, initialRate);

// authority, gdao, staking, sgdao, xgdao, migrator should already be deployed at this point

  /// @notice The main script entrypoint
  /// @return xgdao The deployed contract
  function run() external returns (xGDAO xgdao) {    
    uint256 deployerPrivateKey = vm.envUint("KERNEL_PRIV_5");
    vm.startBroadcast(deployerPrivateKey);
    // kernel = new Kernel();

    address governor = vm.envAddress("DAO_GOERLI_MULTISIG"); // dao
    address guardian = vm.envAddress("POLICY_GOERLI_MULTISIG"); //exec 
    address policy = vm.envAddress("DAO_GOERLI_MULTISIG");  // dao
    address vault = vm.envAddress("GOERLI_DEPLOYER"); // deployer
    address newVault = vm.envAddress("DAO_GOERLI_MULTISIG"); // dao
    GdaoAuthority authority = new GdaoAuthority(governor, guardian, policy, vault);
    address authority_addr = address(authority); //update env

    GDAO gdao = new GDAO(authority_addr);
    address gdao_addr = address(gdao); //update env
    sGDAO sgdao = new sGDAO();
    address sgdao_addr = address(sgdao); //update env

    address migrator = vm.envAddress("GOERLI_DEPLOYER");
    xgdao = new xGDAO(migrator, sgdao_addr);
    address xgdao_addr = address(xgdao); //update env

    // Mint and Approve 1000000.000000000000000000 GDAO and send it to deployer
    // gdao.approve(newVault, 300000000000);// 712739483828617010754584
    // gdao.mint(newVault, 300000000000);

    uint256 total = 1069109225742926;
    gdao.approve(newVault, total); // 712739483828618 // 1069109.2257429254
    gdao.mint(newVault, total);
    // gdao.increaseAllowance(vm.envAddress("GOERLI_DEPLOYER"), gdao.totalSupply());
    // gdao.transferFrom(vm.envAddress("GOERLI_DEPLOYER"), vm.envAddress("DAO_GOERLI_MULTISIG"), 1);
    vm.stopBroadcast();
    return xgdao;
  }
}