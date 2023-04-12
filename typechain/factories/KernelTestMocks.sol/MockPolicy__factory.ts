/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MockPolicy,
  MockPolicyInterface,
} from "../../KernelTestMocks.sol/MockPolicy";

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
        internalType: "Keycode",
        name: "keycode_",
        type: "bytes5",
      },
    ],
    name: "Policy_ModuleDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "MOCKY",
    outputs: [
      {
        internalType: "contract MockModule",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "callPermissionedFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "callPublicFunction",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "configureDependencies",
    outputs: [
      {
        internalType: "Keycode[]",
        name: "dependencies",
        type: "bytes5[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isActive",
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
    name: "requestPermissions",
    outputs: [
      {
        components: [
          {
            internalType: "Keycode",
            name: "keycode",
            type: "bytes5",
          },
          {
            internalType: "bytes4",
            name: "funcSelector",
            type: "bytes4",
          },
        ],
        internalType: "struct Permissions[]",
        name: "requests",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161073a38038061073a83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6106a7806100936000396000f3fe608060405234801561001057600080fd5b50600436106100785760003560e01c8063098da0731461007d57806322f3e2d414610087578063340bd7fd146100a45780634657b36c146100ac5780635924be70146100bf5780639459b875146100d4578063d4aae0c4146100e9578063fd37d96314610109575b600080fd5b61008561011c565b005b61008f610186565b60405190151581526020015b60405180910390f35b6100856101fd565b6100856100ba3660046104f4565b61024d565b6100c76102a5565b60405161009b9190610518565b6100dc610393565b60405161009b919061057b565b6000546100fc906001600160a01b031681565b60405161009b91906105c9565b6001546100fc906001600160a01b031681565b600160009054906101000a90046001600160a01b03166001600160a01b031663a7167caf6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561016c57600080fd5b505af1158015610180573d6000803e3d6000fd5b50505050565b6000805460405163e52223bb60e01b81526001600160a01b039091169063e52223bb906101b79030906004016105c9565b602060405180830381865afa1580156101d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f891906105dd565b905090565b600160009054906101000a90046001600160a01b03166001600160a01b031663382b325f6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561016c57600080fd5b6000546001600160a01b03163314610283573360405163053e900f60e21b815260040161027a91906105c9565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b604080516001808252818301909252606091816020015b60408051808201909152600080825260208201528152602001906001900390816102bc57505060408051808201808352600154630d73f61760e11b90915291519293509182916001600160a01b031690631ae7ec2e906044808501916020918187030181865afa158015610334573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035891906105ff565b6001600160d81b031916815263a7167caf60e01b6020909101528151829060009061038557610385610629565b602002602001018190525090565b60408051600180825281830190925260609160208083019080368337019050509050644d4f434b5960d81b816000815181106103d1576103d1610629565b60200260200101906001600160d81b03191690816001600160d81b031916815250506104168160008151811061040957610409610629565b6020026020010151610439565b600180546001600160a01b0319166001600160a01b039290921691909117905590565b60008054604051632d37002d60e21b815282916001600160a01b03169063b4dc00b49061046a90869060040161063f565b602060405180830381865afa158015610487573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ab9190610654565b90506001600160a01b0381166104d65782604051635c3fa9cd60e01b815260040161027a919061063f565b92915050565b6001600160a01b03811681146104f157600080fd5b50565b60006020828403121561050657600080fd5b8135610511816104dc565b9392505050565b602080825282518282018190526000919060409081850190868401855b8281101561056e57815180516001600160d81b03191685528601516001600160e01b031916868501529284019290850190600101610535565b5091979650505050505050565b6020808252825182820181905260009190848201906040850190845b818110156105bd5783516001600160d81b03191683529284019291840191600101610597565b50909695505050505050565b6001600160a01b0391909116815260200190565b6000602082840312156105ef57600080fd5b8151801515811461051157600080fd5b60006020828403121561061157600080fd5b81516001600160d81b03198116811461051157600080fd5b634e487b7160e01b600052603260045260246000fd5b6001600160d81b031991909116815260200190565b60006020828403121561066657600080fd5b8151610511816104dc56fea26469706673582212202a2f7aaf66685c6ac5d822fca9979b6cb11dcb308e21d36a7d3f302614e2879664736f6c634300080f0033";

type MockPolicyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockPolicyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockPolicy__factory extends ContractFactory {
  constructor(...args: MockPolicyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockPolicy> {
    return super.deploy(kernel_, overrides || {}) as Promise<MockPolicy>;
  }
  override getDeployTransaction(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(kernel_, overrides || {});
  }
  override attach(address: string): MockPolicy {
    return super.attach(address) as MockPolicy;
  }
  override connect(signer: Signer): MockPolicy__factory {
    return super.connect(signer) as MockPolicy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockPolicyInterface {
    return new utils.Interface(_abi) as MockPolicyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPolicy {
    return new Contract(address, _abi, signerOrProvider) as MockPolicy;
  }
}
