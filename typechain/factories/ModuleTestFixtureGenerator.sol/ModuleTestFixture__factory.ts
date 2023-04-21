/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ModuleTestFixture,
  ModuleTestFixtureInterface,
  PermissionsStruct,
} from "../../ModuleTestFixtureGenerator.sol/ModuleTestFixture";

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
    stateMutability: "view",
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
  "0x60806040523480156200001157600080fd5b5060405162000a0438038062000a04833981016040819052620000349162000180565b600080546001600160a01b038086166001600160a01b031992831617835560018054918616919092161790558151905b81811015620000e8576002838281518110620000845762000084620002b8565b6020908102919091018101518254600181018455600093845292829020815193018054919092015160e01c65010000000000026001600160481b031990911660d89390931c9290921791909117905580620000df81620002ce565b91505062000064565b5050505050620002f6565b6001600160a01b03811681146200010957600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200014757620001476200010c565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200017857620001786200010c565b604052919050565b6000806000606084860312156200019657600080fd5b8351620001a381620000f3565b80935050602080850151620001b881620000f3565b604086810151919450906001600160401b0380821115620001d857600080fd5b818801915088601f830112620001ed57600080fd5b8151818111156200020257620002026200010c565b62000212858260051b016200014d565b818152858101925060069190911b83018501908a8211156200023357600080fd5b928501925b81841015620002a85784848c031215620002525760008081fd5b6200025c62000122565b84516001600160d81b031981168114620002765760008081fd5b8152848701516001600160e01b031981168114620002945760008081fd5b818801528352928401929185019162000238565b8096505050505050509250925092565b634e487b7160e01b600052603260045260246000fd5b600060018201620002ef57634e487b7160e01b600052601160045260246000fd5b5060010190565b6106fe80620003066000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80635924be70116100505780635924be701461009e5780639459b875146100b3578063d4aae0c4146100c857600080fd5b806322f3e2d41461006c5780634657b36c14610089575b600080fd5b61007461010d565b60405190151581526020015b60405180910390f35b61009c610097366004610471565b6101a5565b005b6100a6610243565b60405161008091906104ae565b6100bb610375565b6040516100809190610541565b6000546100e89073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610080565b600080546040517fe52223bb00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff9091169063e52223bb90602401602060405180830381865afa15801561017c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a091906105a7565b905090565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101fc576040517f14fa403c00000000000000000000000000000000000000000000000000000000815233600482015260240160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6002546060908067ffffffffffffffff811115610262576102626105c9565b6040519080825280602002602001820160405280156102a757816020015b60408051808201909152600080825260208201528152602001906001900390816102805790505b50915060005b8181101561037057600281815481106102c8576102c86105f8565b60009182526020918290206040805180820190915291015460d881901b7fffffffffff00000000000000000000000000000000000000000000000000000016825265010000000000900460e01b7fffffffff0000000000000000000000000000000000000000000000000000000016918101919091528351849083908110610352576103526105f8565b6020026020010181905250808061036890610627565b9150506102ad565b505090565b604080516001808252818301909252606091602080830190803683375050600154604080517f1ae7ec2e000000000000000000000000000000000000000000000000000000008152905193945073ffffffffffffffffffffffffffffffffffffffff90911692631ae7ec2e925060048083019260209291908290030181865afa158015610406573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042a9190610686565b8160008151811061043d5761043d6105f8565b7fffffffffff0000000000000000000000000000000000000000000000000000009092166020928302919091019091015290565b60006020828403121561048357600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146104a757600080fd5b9392505050565b602080825282518282018190526000919060409081850190868401855b8281101561053457815180517fffffffffff0000000000000000000000000000000000000000000000000000001685528601517fffffffff00000000000000000000000000000000000000000000000000000000168685015292840192908501906001016104cb565b5091979650505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561059b5783517fffffffffff000000000000000000000000000000000000000000000000000000168352928401929184019160010161055d565b50909695505050505050565b6000602082840312156105b957600080fd5b815180151581146104a757600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361067f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b60006020828403121561069857600080fd5b81517fffffffffff000000000000000000000000000000000000000000000000000000811681146104a757600080fdfea26469706673582212209605e8bd96f4c1b8b4fa983d4cffe7ab7541b93306962ba524618cf55e18bbe164736f6c634300080f0033";

type ModuleTestFixtureConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ModuleTestFixtureConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ModuleTestFixture__factory extends ContractFactory {
  constructor(...args: ModuleTestFixtureConstructorParams) {
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
  ): Promise<ModuleTestFixture> {
    return super.deploy(
      kernel_,
      module_,
      requests_,
      overrides || {}
    ) as Promise<ModuleTestFixture>;
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
  override attach(address: string): ModuleTestFixture {
    return super.attach(address) as ModuleTestFixture;
  }
  override connect(signer: Signer): ModuleTestFixture__factory {
    return super.connect(signer) as ModuleTestFixture__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ModuleTestFixtureInterface {
    return new utils.Interface(_abi) as ModuleTestFixtureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ModuleTestFixture {
    return new Contract(address, _abi, signerOrProvider) as ModuleTestFixture;
  }
}
