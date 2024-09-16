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
import type { PromiseOrValue } from "../common";
import type { MockPrice, MockPriceInterface } from "../MockPrice";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Kernel",
        name: "kernel_",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "observationFrequency_",
        type: "uint48",
      },
      {
        internalType: "uint256",
        name: "minimumTargetPrice_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller_",
        type: "address",
      },
    ],
    name: "KernelAdapter_OnlyKernel",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "policy_",
        type: "address",
      },
    ],
    name: "Module_PolicyNotPermitted",
    type: "error",
  },
  {
    inputs: [],
    name: "Price_CustomError",
    type: "error",
  },
  {
    inputs: [],
    name: "INIT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "KEYCODE",
    outputs: [
      {
        internalType: "Keycode",
        name: "",
        type: "bytes5",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "major",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "minor",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Kernel",
        name: "newKernel_",
        type: "address",
      },
    ],
    name: "changeKernel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "movingAverageDuration_",
        type: "uint48",
      },
    ],
    name: "changeMovingAverageDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "observationFrequency_",
        type: "uint48",
      },
    ],
    name: "changeObservationFrequency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMovingAverage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTargetPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "startObservations_",
        type: "uint256[]",
      },
      {
        internalType: "uint48",
        name: "lastObservationTime_",
        type: "uint48",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kernel",
    outputs: [
      {
        internalType: "contract Kernel",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastObservationTime",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumTargetPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "movingAverage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "observationFrequency",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "result",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentPrice_",
        type: "uint256",
      },
    ],
    name: "setCurrentPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    name: "setDecimals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lastPrice_",
        type: "uint256",
      },
    ],
    name: "setLastPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "lastObservationTime_",
        type: "uint48",
      },
    ],
    name: "setLastTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "movingAverage_",
        type: "uint256",
      },
    ],
    name: "setMovingAverage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "result_",
        type: "bool",
      },
    ],
    name: "setResult",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateMovingAverage",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161075d38038061075d83398101604081905261002f91610083565b600080546001600160a01b039094166001600160a01b0319909416939093179092556004805465ffffffffffff909216620100000267ffffffffffffff0019909216919091176101001790556005556100dd565b60008060006060848603121561009857600080fd5b83516001600160a01b03811681146100af57600080fd5b602085015190935065ffffffffffff811681146100cb57600080fd5b80925050604084015190509250925092565b610671806100ec6000396000f3fe608060405234801561001057600080fd5b50600436106101495760003560e01c8063053f14da1461014e57806318b200711461016a5780631ae7ec2e1461017f5780632c19abb914610195578063313ce567146101a85780633ccec9c4146101c75780634657b36c146101d057806365372147146101e35780636cb56dbc146102055780636d2c2808146102185780637321f100146102215780637a1395aa146102505780637d4dce76146102745780637e20be3b146102aa57806386db7df0146102e25780638a157337146102ea578063902a35b9146102fb5780639d1b464a1461030d578063b5e7130514610316578063bd01bb321461031e578063d266f5d014610326578063d4aae0c41461033f578063d8cf24fd1461035f578063ea64391414610367578063eb91d37e1461036f578063f4b4dc2e14610377578063ffa1ad741461039f575b600080fd5b61015760025481565b6040519081526020015b60405180910390f35b61017d61017836600461047e565b600355565b005b60405164505249434560d81b8152602001610161565b61017d6101a336600461047e565b600255565b6004546101b59060ff1681565b60405160ff9091168152602001610161565b61015760015481565b61017d6101de366004610497565b6103b4565b6004546101f590610100900460ff1681565b6040519015158152602001610161565b61017d61021336600461047e565b600155565b61015760055481565b6004546102399062010000900465ffffffffffff1681565b60405165ffffffffffff9091168152602001610161565b61017d61025e3660046104c7565b6004805460ff191660ff92909216919091179055565b61017d610282366004610505565b6004805465ffffffffffff909216620100000267ffffffffffff000019909216919091179055565b61017d6102b8366004610505565b6004805465ffffffffffff909216600160401b0265ffffffffffff60401b19909216919091179055565b61017d61040c565b61017d6102f8366004610505565b50565b61017d610309366004610536565b5050565b61015760035481565b600154610157565b610157610436565b60045461023990600160401b900465ffffffffffff1681565b600054610352906001600160a01b031681565b6040516101619190610605565b600254610157565b61017d610451565b600354610157565b61017d610385366004610619565b600480549115156101000261ff0019909216919091179055565b60408051600181526000602082015201610161565b6000546001600160a01b031633146103ea573360405163053e900f60e21b81526004016103e19190610605565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b600454610100900460ff1661043457604051632cd2cbf760e01b815260040160405180910390fd5b565b60006005546001541161044a575060055490565b5060015490565b6000546001600160a01b03163314610434573360405163053e900f60e21b81526004016103e19190610605565b60006020828403121561049057600080fd5b5035919050565b6000602082840312156104a957600080fd5b81356001600160a01b03811681146104c057600080fd5b9392505050565b6000602082840312156104d957600080fd5b813560ff811681146104c057600080fd5b803565ffffffffffff8116811461050057600080fd5b919050565b60006020828403121561051757600080fd5b6104c0826104ea565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561054957600080fd5b82356001600160401b038082111561056057600080fd5b818501915085601f83011261057457600080fd5b813560208282111561058857610588610520565b8160051b604051601f19603f830116810181811086821117156105ad576105ad610520565b6040529283528183019350848101820192898411156105cb57600080fd5b948201945b838610156105e9578535855294820194938201936105d0565b96506105f890508782016104ea565b9450505050509250929050565b6001600160a01b0391909116815260200190565b60006020828403121561062b57600080fd5b813580151581146104c057600080fdfea26469706673582212202bacd95fc73674b52c8922b249a64abaa62da87e38082c7e2c7f9c52393bdd8364736f6c634300080f0033";

type MockPriceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockPriceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockPrice__factory extends ContractFactory {
  constructor(...args: MockPriceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    kernel_: PromiseOrValue<string>,
    observationFrequency_: PromiseOrValue<BigNumberish>,
    minimumTargetPrice_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockPrice> {
    return super.deploy(
      kernel_,
      observationFrequency_,
      minimumTargetPrice_,
      overrides || {}
    ) as Promise<MockPrice>;
  }
  override getDeployTransaction(
    kernel_: PromiseOrValue<string>,
    observationFrequency_: PromiseOrValue<BigNumberish>,
    minimumTargetPrice_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      kernel_,
      observationFrequency_,
      minimumTargetPrice_,
      overrides || {}
    );
  }
  override attach(address: string): MockPrice {
    return super.attach(address) as MockPrice;
  }
  override connect(signer: Signer): MockPrice__factory {
    return super.connect(signer) as MockPrice__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockPriceInterface {
    return new utils.Interface(_abi) as MockPriceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPrice {
    return new Contract(address, _abi, signerOrProvider) as MockPrice;
  }
}