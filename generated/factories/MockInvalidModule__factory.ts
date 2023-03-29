/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  MockInvalidModule,
  MockInvalidModuleInterface,
} from "../MockInvalidModule";

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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161025c38038061025c83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6101c9806100936000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631ae7ec2e1461005c5780634657b36c14610077578063d4aae0c41461008c578063ea643914146100ac578063ffa1ad74146100b4575b600080fd5b604051641a5b9d985b60da1b81526020015b60405180910390f35b61008a61008536600461014f565b6100c8565b005b60005461009f906001600160a01b031681565b60405161006e919061017f565b61008a610120565b60408051600080825260208201520161006e565b6000546001600160a01b031633146100fe573360405163053e900f60e21b81526004016100f5919061017f565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461014d573360405163053e900f60e21b81526004016100f5919061017f565b565b60006020828403121561016157600080fd5b81356001600160a01b038116811461017857600080fd5b9392505050565b6001600160a01b039190911681526020019056fea2646970667358221220233dd3fc8979fb13148e74ec6b4e2fd96b3760031ecabee59fb9e89de18bc12d64736f6c634300080f0033";

type MockInvalidModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockInvalidModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockInvalidModule__factory extends ContractFactory {
  constructor(...args: MockInvalidModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockInvalidModule> {
    return super.deploy(kernel_, overrides || {}) as Promise<MockInvalidModule>;
  }
  override getDeployTransaction(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(kernel_, overrides || {});
  }
  override attach(address: string): MockInvalidModule {
    return super.attach(address) as MockInvalidModule;
  }
  override connect(signer: Signer): MockInvalidModule__factory {
    return super.connect(signer) as MockInvalidModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockInvalidModuleInterface {
    return new utils.Interface(_abi) as MockInvalidModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockInvalidModule {
    return new Contract(address, _abi, signerOrProvider) as MockInvalidModule;
  }
}
