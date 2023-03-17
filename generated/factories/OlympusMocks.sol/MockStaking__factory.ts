/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MockStaking,
  MockStakingInterface,
} from "../../OlympusMocks.sol/MockStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "ohm_",
        type: "address",
      },
      {
        internalType: "address",
        name: "sohm_",
        type: "address",
      },
      {
        internalType: "address",
        name: "gohm_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epochLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "firstEpochNumber_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "firstEpochTime_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "OHM",
    outputs: [
      {
        internalType: "contract MockERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "distributor",
    outputs: [
      {
        internalType: "contract IDistributor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "epoch",
    outputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "distribute",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gOHM",
    outputs: [
      {
        internalType: "contract MockGohm",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rebase",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sOHM",
    outputs: [
      {
        internalType: "contract MockERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "distributor_",
        type: "address",
      },
    ],
    name: "setDistributor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "rebasing_",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "claim_",
        type: "bool",
      },
    ],
    name: "stake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "trigger_",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "rebasing_",
        type: "bool",
      },
    ],
    name: "unstake",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161097a38038061097a83398101604081905261002f916100bf565b600080546001600160a01b03199081166001600160a01b0398891617825560018054821697891697909717909655600280549096169490961693909317909355604080516080810182528281526020810185905290810183905260600184905260035560049190915560055560065561011e565b80516001600160a01b03811681146100ba57600080fd5b919050565b60008060008060008060c087890312156100d857600080fd5b6100e1876100a3565b95506100ef602088016100a3565b94506100fd604088016100a3565b9350606087015192506080870151915060a087015190509295509295509295565b61084d8061012d6000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c80630cd305851461008857806315079925146100b857806375619ab5146100cb578063900cf0cf146100fd578063990966d514610133578063a6c41fec14610154578063af14052c14610167578063bfe109281461016f578063d866c9d814610182575b600080fd5b60025461009b906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b60015461009b906001600160a01b031681565b6100fb6100d9366004610701565b600780546001600160a01b0319166001600160a01b0392909216919091179055565b005b6003546004546005546006546101139392919084565b6040805194855260208501939093529183015260608201526080016100af565b61014661014136600461072d565b610195565b6040519081526020016100af565b60005461009b906001600160a01b031681565b610146610397565b60075461009b906001600160a01b031681565b61014661019036600461072d565b610498565b60008083156101a9576101a6610397565b90505b8215610238576001546040516323b872dd60e01b81526001600160a01b03909116906323b872dd906101e390339030908a9060040161077e565b6020604051808303816000875af1158015610202573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022691906107a2565b5061023181866107bf565b9150610318565b600254604051632770a7eb60e21b81526001600160a01b0390911690639dc29fac9061026a90339089906004016107e5565b600060405180830381600087803b15801561028457600080fd5b505af1158015610298573d6000803e3d6000fd5b505060025460405163150490ed60e31b8152600481018990528493506001600160a01b03909116915063a824876890602401602060405180830381865afa1580156102e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030b91906107fe565b61031591906107bf565b91505b60005460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb9061034a90899086906004016107e5565b6020604051808303816000875af1158015610369573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038d91906107a2565b5050949350505050565b6000804260036002015411610493576003546005546103b691906107bf565b6005556007546040805163e4fc6b6d60e01b815290516001600160a01b039092169163e4fc6b6d9160048082019260009290919082900301818387803b1580156103ff57600080fd5b505af1158015610413573d6000803e3d6000fd5b50505050600760009054906101000a90046001600160a01b03166001600160a01b031663e7187e8a6040518163ffffffff1660e01b81526004016020604051808303816000875af115801561046c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049091906107fe565b90505b919050565b600080546040516323b872dd60e01b81526001600160a01b03909116906323b872dd906104cd9033903090899060040161077e565b6020604051808303816000875af11580156104ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051091906107a2565b50610519610397565b61052390856107bf565b9350610530858585610539565b95945050505050565b600081156105ad576001546040516340c10f1960e01b81526001600160a01b03909116906340c10f199061057390879087906004016107e5565b600060405180830381600087803b15801561058d57600080fd5b505af11580156105a1573d6000803e3d6000fd5b505050508290506106e3565b6002546040516319a948db60e21b8152600481018590526001600160a01b03909116906340c10f1990869083906366a5236c90602401602060405180830381865afa158015610600573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062491906107fe565b6040518363ffffffff1660e01b81526004016106419291906107e5565b600060405180830381600087803b15801561065b57600080fd5b505af115801561066f573d6000803e3d6000fd5b50506002546040516319a948db60e21b8152600481018790526001600160a01b0390911692506366a5236c9150602401602060405180830381865afa1580156106bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e091906107fe565b90505b9392505050565b80356001600160a01b038116811461049357600080fd5b60006020828403121561071357600080fd5b6106e3826106ea565b801515811461072a57600080fd5b50565b6000806000806080858703121561074357600080fd5b61074c856106ea565b93506020850135925060408501356107638161071c565b915060608501356107738161071c565b939692955090935050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6000602082840312156107b457600080fd5b81516106e38161071c565b600082198211156107e057634e487b7160e01b600052601160045260246000fd5b500190565b6001600160a01b03929092168252602082015260400190565b60006020828403121561081057600080fd5b505191905056fea2646970667358221220fdcc8027a52ab11dedfc2e812a1890ae606b1d9af9aad7c6498ffab3afdb107864736f6c634300080f0033";

type MockStakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockStakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockStaking__factory extends ContractFactory {
  constructor(...args: MockStakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    ohm_: PromiseOrValue<string>,
    sohm_: PromiseOrValue<string>,
    gohm_: PromiseOrValue<string>,
    epochLength: PromiseOrValue<BigNumberish>,
    firstEpochNumber_: PromiseOrValue<BigNumberish>,
    firstEpochTime_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockStaking> {
    return super.deploy(
      ohm_,
      sohm_,
      gohm_,
      epochLength,
      firstEpochNumber_,
      firstEpochTime_,
      overrides || {}
    ) as Promise<MockStaking>;
  }
  override getDeployTransaction(
    ohm_: PromiseOrValue<string>,
    sohm_: PromiseOrValue<string>,
    gohm_: PromiseOrValue<string>,
    epochLength: PromiseOrValue<BigNumberish>,
    firstEpochNumber_: PromiseOrValue<BigNumberish>,
    firstEpochTime_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      ohm_,
      sohm_,
      gohm_,
      epochLength,
      firstEpochNumber_,
      firstEpochTime_,
      overrides || {}
    );
  }
  override attach(address: string): MockStaking {
    return super.attach(address) as MockStaking;
  }
  override connect(signer: Signer): MockStaking__factory {
    return super.connect(signer) as MockStaking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockStakingInterface {
    return new utils.Interface(_abi) as MockStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockStaking {
    return new Contract(address, _abi, signerOrProvider) as MockStaking;
  }
}