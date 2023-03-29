/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  MockModuleWriter,
  MockModuleWriterInterface,
  PermissionsStruct,
} from "../MockModuleWriter";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Kernel",
        name: "kernel_",
        type: "address",
      },
      {
        internalType: "contract Module",
        name: "module_",
        type: "address",
      },
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
        name: "requests_",
        type: "tuple[]",
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
    stateMutability: "nonpayable",
    type: "fallback",
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
  "0x608060405234801561001057600080fd5b506040516107bf3803806107bf83398101604081905261002f9161016c565b600080546001600160a01b038086166001600160a01b031992831617835560018054918616919092161790558151905b818110156100dc57600283828151811061007b5761007b610290565b6020908102919091018101518254600181018455600093845292829020815193018054919092015160e01c65010000000000026001600160481b031990911660d89390931c92909217919091179055806100d4816102a6565b91505061005f565b50505050506102cd565b6001600160a01b03811681146100fb57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715610136576101366100fe565b60405290565b604051601f8201601f191681016001600160401b0381118282101715610164576101646100fe565b604052919050565b60008060006060848603121561018157600080fd5b835161018c816100e6565b8093505060208085015161019f816100e6565b604086810151919450906001600160401b03808211156101be57600080fd5b818801915088601f8301126101d257600080fd5b8151818111156101e4576101e46100fe565b6101f2858260051b0161013c565b818152858101925060069190911b83018501908a82111561021257600080fd5b928501925b818410156102805784848c03121561022f5760008081fd5b610237610114565b84516001600160d81b0319811681146102505760008081fd5b8152848701516001600160e01b03198116811461026d5760008081fd5b8188015283529284019291850191610217565b8096505050505050509250925092565b634e487b7160e01b600052603260045260246000fd5b6000600182016102c657634e487b7160e01b600052601160045260246000fd5b5060010190565b6104e3806102dc6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806322f3e2d4146100ef5780634657b36c1461010c5780635924be70146101215780639459b87514610136578063d4aae0c414610145575b6001546040516000913691606091849182916001600160a01b0316906100809083908790610333565b6000604051808303816000865af19150503d80600081146100bd576040519150601f19603f3d011682016040523d82523d6000602084013e6100c2565b606091505b5091509150816100e25780516000036100da57600080fd5b805181602001fd5b8051945060200192505050f35b6100f7610165565b60405190151581526020015b60405180910390f35b61011f61011a366004610343565b6101dc565b005b610129610234565b6040516101039190610373565b606060405161010391906103d6565b600054610158906001600160a01b031681565b6040516101039190610424565b6000805460405163e52223bb60e01b81526001600160a01b039091169063e52223bb90610196903090600401610424565b602060405180830381865afa1580156101b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d79190610438565b905090565b6000546001600160a01b03163314610212573360405163053e900f60e21b81526004016102099190610424565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b600254606090806001600160401b038111156102525761025261045a565b60405190808252806020026020018201604052801561029757816020015b60408051808201909152600080825260208201528152602001906001900390816102705790505b50915060005b8181101561032e57600281815481106102b8576102b8610470565b60009182526020918290206040805180820190915291015460d881901b6001600160d81b0319168252600160281b900460e01b6001600160e01b03191691810191909152835184908390811061031057610310610470565b6020026020010181905250808061032690610486565b91505061029d565b505090565b8183823760009101908152919050565b60006020828403121561035557600080fd5b81356001600160a01b038116811461036c57600080fd5b9392505050565b602080825282518282018190526000919060409081850190868401855b828110156103c957815180516001600160d81b03191685528601516001600160e01b031916868501529284019290850190600101610390565b5091979650505050505050565b6020808252825182820181905260009190848201906040850190845b818110156104185783516001600160d81b031916835292840192918401916001016103f2565b50909695505050505050565b6001600160a01b0391909116815260200190565b60006020828403121561044a57600080fd5b8151801515811461036c57600080fd5b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000600182016104a657634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220fe95e6be63ac7207535fb787761cbac954ecfebbcdd199d126151e893347b53064736f6c634300080f0033";

type MockModuleWriterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockModuleWriterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockModuleWriter__factory extends ContractFactory {
  constructor(...args: MockModuleWriterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    kernel_: PromiseOrValue<string>,
    module_: PromiseOrValue<string>,
    requests_: PermissionsStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockModuleWriter> {
    return super.deploy(
      kernel_,
      module_,
      requests_,
      overrides || {}
    ) as Promise<MockModuleWriter>;
  }
  override getDeployTransaction(
    kernel_: PromiseOrValue<string>,
    module_: PromiseOrValue<string>,
    requests_: PermissionsStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      kernel_,
      module_,
      requests_,
      overrides || {}
    );
  }
  override attach(address: string): MockModuleWriter {
    return super.attach(address) as MockModuleWriter;
  }
  override connect(signer: Signer): MockModuleWriter__factory {
    return super.connect(signer) as MockModuleWriter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockModuleWriterInterface {
    return new utils.Interface(_abi) as MockModuleWriterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockModuleWriter {
    return new Contract(address, _abi, signerOrProvider) as MockModuleWriter;
  }
}
