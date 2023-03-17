/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  MockValidModule,
  MockValidModuleInterface,
} from "../MockValidModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Kernel",
        name: "kernel_",
        type: "address",
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
    inputs: [],
    name: "counter",
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
    name: "permissionedCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103bb3803806103bb83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610328806100936000396000f3fe608060405234801561001057600080fd5b506004361061006d5760003560e01c80631ae7ec2e146100725780634657b36c1461009857806361bc221a146100ad578063a7167caf146100c4578063d4aae0c4146100cc578063ea643914146100ec578063ffa1ad74146100f4575b600080fd5b61007a610109565b6040516001600160d81b031990911681526020015b60405180910390f35b6100ab6100a6366004610265565b610115565b005b6100b660015481565b60405190815260200161008f565b6100ab61016d565b6000546100df906001600160a01b031681565b60405161008f9190610295565b6100ab610236565b6040805160018152600060208201520161008f565b644d4f434b5960d81b90565b6000546001600160a01b0316331461014b573360405163053e900f60e21b81526004016101429190610295565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031663f166d9eb610186610109565b6040516001600160e01b031960e084901b811682526001600160d81b03199290921660048201523360248201526000359091166044820152606401602060405180830381865afa1580156101de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020291906102a9565b61022157336040516311bf00c960e01b81526004016101429190610295565b600160008154610230906102cb565b90915550565b6000546001600160a01b03163314610263573360405163053e900f60e21b81526004016101429190610295565b565b60006020828403121561027757600080fd5b81356001600160a01b038116811461028e57600080fd5b9392505050565b6001600160a01b0391909116815260200190565b6000602082840312156102bb57600080fd5b8151801515811461028e57600080fd5b6000600182016102eb57634e487b7160e01b600052601160045260246000fd5b506001019056fea264697066735822122082dc7a8d1592f8afe3df33e6eedc01f3f4a317cba9a9169bcb0253bc9c1e43c864736f6c634300080f0033";

type MockValidModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockValidModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockValidModule__factory extends ContractFactory {
  constructor(...args: MockValidModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockValidModule> {
    return super.deploy(kernel_, overrides || {}) as Promise<MockValidModule>;
  }
  override getDeployTransaction(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(kernel_, overrides || {});
  }
  override attach(address: string): MockValidModule {
    return super.attach(address) as MockValidModule;
  }
  override connect(signer: Signer): MockValidModule__factory {
    return super.connect(signer) as MockValidModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockValidModuleInterface {
    return new utils.Interface(_abi) as MockValidModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockValidModule {
    return new Contract(address, _abi, signerOrProvider) as MockValidModule;
  }
}
