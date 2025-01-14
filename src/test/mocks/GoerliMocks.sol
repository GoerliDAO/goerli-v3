// SPDX-License-Identifier: AGPL-3.0
pragma solidity 0.8.15;

import {MockERC20} from "solmate/test/utils/mocks/MockERC20.sol";

interface IDistributor {
    function distribute() external;

    function retrieveBounty() external returns (uint256);
}

contract MockXgdao is MockERC20 {
    uint256 index;

    constructor(uint256 index_) MockERC20("xGDAO", "xGDAO", 18) {
        index = index_;
    }

    function balanceFrom(uint256 amount_) public view returns (uint256) {
        return (amount_ * index) / 10**decimals;
    }

    function balanceTo(uint256 amount_) public view returns (uint256) {
        return (amount_ * 10**decimals) / index;
    }
}

contract MockStaking {
    struct Epoch {
        uint256 length;
        uint256 number;
        uint256 end;
        uint256 distribute;
    }

    /// state
    MockERC20 public GDAO;
    MockERC20 public sGDAO;
    MockXgdao public xGDAO;

    Epoch public epoch;

    IDistributor public distributor;

    /// constructor
    constructor(
        address gdao_,
        address sgdao_,
        address xgdao_,
        uint256 epochLength,
        uint256 firstEpochNumber_,
        uint256 firstEpochTime_
    ) {
        GDAO = MockERC20(gdao_);
        sGDAO = MockERC20(sgdao_);
        xGDAO = MockXgdao(xgdao_);

        epoch = Epoch({
            length: epochLength,
            number: firstEpochNumber_,
            end: firstEpochTime_,
            distribute: 0
        });
    }

    /// setters
    function setDistributor(address distributor_) external {
        distributor = IDistributor(distributor_);
    }

    /// functions
    function stake(
        address to_,
        uint256 amount_,
        bool rebasing_,
        bool claim_
    ) external returns (uint256) {
        GDAO.transferFrom(msg.sender, address(this), amount_);
        amount_ = amount_ + rebase();
        if (claim_) {}
        return _send(to_, amount_, rebasing_);
    }

    function unstake(
        address to_,
        uint256 amount_,
        bool trigger_,
        bool rebasing_
    ) external returns (uint256 amount) {
        uint256 bounty;
        if (trigger_) bounty = rebase();

        if (rebasing_) {
            sGDAO.transferFrom(msg.sender, address(this), amount_);
            amount = amount_ + bounty;
        } else {
            xGDAO.burn(msg.sender, amount_);
            amount = xGDAO.balanceFrom(amount_) + bounty;
        }

        GDAO.transfer(to_, amount);
    }

    function rebase() public returns (uint256) {
        uint256 bounty;
        if (epoch.end <= block.timestamp) {
            epoch.end = epoch.end + epoch.length;
            distributor.distribute();
            bounty = distributor.retrieveBounty();
        }

        return bounty;
    }

    function _send(
        address to_,
        uint256 amount_,
        bool rebasing_
    ) internal returns (uint256) {
        if (rebasing_) {
            sGDAO.mint(to_, amount_);
            return amount_;
        } else {
            xGDAO.mint(to_, xGDAO.balanceTo(amount_));
            return xGDAO.balanceTo(amount_);
        }
    }
}
