/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MockUniV2Pair, MockUniV2PairInterface } from "../MockUniV2Pair";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token0_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "reserve0_",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "reserve1_",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "blockTimestampLast_",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161032c38038061032c83398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b61026e806100be6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630902f1ac146100515780630dfe168114610091578063d21220a7146100b1578063fff6cae9146100c4575b600080fd5b600254604080516001600160701b038084168252600160701b8404166020820152600160e01b90920463ffffffff16908201526060015b60405180910390f35b6000546100a4906001600160a01b031681565b604051610088919061020b565b6001546100a4906001600160a01b031681565b6100cc6100ce565b005b6000546040516370a0823160e01b81526001600160a01b03909116906370a08231906100fe90309060040161020b565b602060405180830381865afa15801561011b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061013f919061021f565b600280546001600160701b0319166001600160701b03929092169190911790556001546040516370a0823160e01b81526001600160a01b03909116906370a082319061018f90309060040161020b565b602060405180830381865afa1580156101ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d0919061021f565b6002805463ffffffff4216600160e01b026001600160e01b036001600160701b03948516600160701b02169390911692909217919091179055565b6001600160a01b0391909116815260200190565b60006020828403121561023157600080fd5b505191905056fea2646970667358221220a7a8919b65d5d502a0d24218a6c459145fae76cc014f4b433452c7169d730e0664736f6c634300080f0033";

type MockUniV2PairConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockUniV2PairConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockUniV2Pair__factory extends ContractFactory {
  constructor(...args: MockUniV2PairConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    token0_: PromiseOrValue<string>,
    token1_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockUniV2Pair> {
    return super.deploy(
      token0_,
      token1_,
      overrides || {}
    ) as Promise<MockUniV2Pair>;
  }
  override getDeployTransaction(
    token0_: PromiseOrValue<string>,
    token1_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token0_, token1_, overrides || {});
  }
  override attach(address: string): MockUniV2Pair {
    return super.attach(address) as MockUniV2Pair;
  }
  override connect(signer: Signer): MockUniV2Pair__factory {
    return super.connect(signer) as MockUniV2Pair__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockUniV2PairInterface {
    return new utils.Interface(_abi) as MockUniV2PairInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockUniV2Pair {
    return new Contract(address, _abi, signerOrProvider) as MockUniV2Pair;
  }
}
