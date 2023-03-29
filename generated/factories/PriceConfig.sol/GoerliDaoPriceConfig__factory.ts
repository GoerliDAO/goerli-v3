/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  GoerliDaoPriceConfig,
  GoerliDaoPriceConfigInterface,
} from "../../PriceConfig.sol/GoerliDaoPriceConfig";

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
    name: "ROLES",
    outputs: [
      {
        internalType: "contract ROLESv1",
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
        internalType: "uint256",
        name: "minimumTargetPrice_",
        type: "uint256",
      },
    ],
    name: "changeMinimumTargetPrice",
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
    inputs: [
      {
        internalType: "uint48",
        name: "ohmEthUpdateThreshold_",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "reserveEthUpdateThreshold_",
        type: "uint48",
      },
    ],
    name: "changeUpdateThresholds",
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
        name: "permissions",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610e35380380610e3583398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610da2806100936000396000f3fe608060405234801561001057600080fd5b50600436106100995760003560e01c80630fbe34761461009e57806322f3e2d4146100b35780634657b36c146100d057806357ee9383146100e35780635924be70146100f65780637d4dce761461010b5780638a1573371461011e578063902a35b914610131578063923cb952146101445780639459b87514610164578063d4aae0c414610179575b600080fd5b6100b16100ac366004610a21565b61018c565b005b6100bb610271565b60405190151581526020015b60405180910390f35b6100b16100de366004610a6c565b6102e8565b6100b16100f1366004610a90565b610340565b6100fe610415565b6040516100c79190610aa9565b6100b1610119366004610b0c565b610650565b6100b161012c366004610b0c565b6106fa565b6100b161013f366004610b3d565b6107a4565b600154610157906001600160a01b031681565b6040516100c79190610c0c565b61016c610848565b6040516100c79190610c20565b600054610157906001600160a01b031681565b60015460405163d09a20c560e01b81526a383934b1b2afb0b236b4b760a91b916001600160a01b03169063d09a20c5906101cc9084903390600401610c6e565b600060405180830381600087803b1580156101e657600080fd5b505af11580156101fa573d6000803e3d6000fd5b50506002546040516307df1a3b60e11b815265ffffffffffff8088166004830152861660248201526001600160a01b039091169250630fbe347691506044015b600060405180830381600087803b15801561025457600080fd5b505af1158015610268573d6000803e3d6000fd5b50505050505050565b6000805460405163e52223bb60e01b81526001600160a01b039091169063e52223bb906102a2903090600401610c0c565b602060405180830381865afa1580156102bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e39190610c85565b905090565b6000546001600160a01b0316331461031e573360405163053e900f60e21b81526004016103159190610c0c565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60015460405163d09a20c560e01b81526a383934b1b2afb0b236b4b760a91b916001600160a01b03169063d09a20c5906103809084903390600401610c6e565b600060405180830381600087803b15801561039a57600080fd5b505af11580156103ae573d6000803e3d6000fd5b50506002546040516357ee938360e01b8152600481018690526001600160a01b0390911692506357ee938391506024015b600060405180830381600087803b1580156103f957600080fd5b505af115801561040d573d6000803e3d6000fd5b505050505050565b60606000600260009054906101000a90046001600160a01b03166001600160a01b0316631ae7ec2e6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561046c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104909190610ca7565b60408051600580825260c08201909252919250816020015b60408051808201909152600080825260208201528152602001906001900390816104a8575050604080518082019091526001600160d81b03198316815263902a35b960e01b6020820152815191935090839060009061050957610509610cd1565b60200260200101819052506040518060400160405280826001600160d81b0319168152602001638a15733760e01b6001600160e01b0319168152508260018151811061055757610557610cd1565b60200260200101819052506040518060400160405280826001600160d81b0319168152602001637d4dce7660e01b6001600160e01b031916815250826002815181106105a5576105a5610cd1565b60200260200101819052506040518060400160405280826001600160d81b0319168152602001630fbe347660e01b6001600160e01b031916815250826003815181106105f3576105f3610cd1565b60200260200101819052506040518060400160405280826001600160d81b03191681526020016357ee938360e01b6001600160e01b0319168152508260048151811061064157610641610cd1565b60200260200101819052505090565b60015460405163d09a20c560e01b81526a383934b1b2afb0b236b4b760a91b916001600160a01b03169063d09a20c5906106909084903390600401610c6e565b600060405180830381600087803b1580156106aa57600080fd5b505af11580156106be573d6000803e3d6000fd5b5050600254604051633ea6e73b60e11b815265ffffffffffff861660048201526001600160a01b039091169250637d4dce7691506024016103df565b60015460405163d09a20c560e01b81526a383934b1b2afb0b236b4b760a91b916001600160a01b03169063d09a20c59061073a9084903390600401610c6e565b600060405180830381600087803b15801561075457600080fd5b505af1158015610768573d6000803e3d6000fd5b5050600254604051638a15733760e01b815265ffffffffffff861660048201526001600160a01b039091169250638a15733791506024016103df565b60015460405163d09a20c560e01b81526a383934b1b2afb0b236b4b760a91b916001600160a01b03169063d09a20c5906107e49084903390600401610c6e565b600060405180830381600087803b1580156107fe57600080fd5b505af1158015610812573d6000803e3d6000fd5b505060025460405163902a35b960e01b81526001600160a01b03909116925063902a35b9915061023a9086908690600401610ce7565b604080516002808252606080830184529260208301908036833701905050905064505249434560d81b8160008151811061088457610884610cd1565b6001600160d81b0319909216602092830291909101909101526108ac64524f4c455360d81b90565b816001815181106108bf576108bf610cd1565b60200260200101906001600160d81b03191690816001600160d81b03191681525050610904816000815181106108f7576108f7610cd1565b6020026020010151610963565b600260006101000a8154816001600160a01b0302191690836001600160a01b03160217905550610940816001815181106108f7576108f7610cd1565b600180546001600160a01b0319166001600160a01b039290921691909117905590565b60008054604051632d37002d60e21b815282916001600160a01b03169063b4dc00b490610994908690600401610d3a565b602060405180830381865afa1580156109b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d59190610d4f565b90506001600160a01b038116610a005782604051635c3fa9cd60e01b81526004016103159190610d3a565b92915050565b803565ffffffffffff81168114610a1c57600080fd5b919050565b60008060408385031215610a3457600080fd5b610a3d83610a06565b9150610a4b60208401610a06565b90509250929050565b6001600160a01b0381168114610a6957600080fd5b50565b600060208284031215610a7e57600080fd5b8135610a8981610a54565b9392505050565b600060208284031215610aa257600080fd5b5035919050565b602080825282518282018190526000919060409081850190868401855b82811015610aff57815180516001600160d81b03191685528601516001600160e01b031916868501529284019290850190600101610ac6565b5091979650505050505050565b600060208284031215610b1e57600080fd5b610a8982610a06565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215610b5057600080fd5b82356001600160401b0380821115610b6757600080fd5b818501915085601f830112610b7b57600080fd5b8135602082821115610b8f57610b8f610b27565b8160051b604051601f19603f83011681018181108682111715610bb457610bb4610b27565b604052928352818301935084810182019289841115610bd257600080fd5b948201945b83861015610bf057853585529482019493820193610bd7565b9650610bff9050878201610a06565b9450505050509250929050565b6001600160a01b0391909116815260200190565b6020808252825182820181905260009190848201906040850190845b81811015610c625783516001600160d81b03191683529284019291840191600101610c3c565b50909695505050505050565b9182526001600160a01b0316602082015260400190565b600060208284031215610c9757600080fd5b81518015158114610a8957600080fd5b600060208284031215610cb957600080fd5b81516001600160d81b031981168114610a8957600080fd5b634e487b7160e01b600052603260045260246000fd5b604080825283519082018190526000906020906060840190828701845b82811015610d2057815184529284019290840190600101610d04565b50505065ffffffffffff9490941692019190915250919050565b6001600160d81b031991909116815260200190565b600060208284031215610d6157600080fd5b8151610a8981610a5456fea264697066735822122026d9e6f651d29f461ae1f2e64679f249e31b8a9f095d33e0e82ddd7ae6429b5664736f6c634300080f0033";

type GoerliDaoPriceConfigConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GoerliDaoPriceConfigConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GoerliDaoPriceConfig__factory extends ContractFactory {
  constructor(...args: GoerliDaoPriceConfigConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GoerliDaoPriceConfig> {
    return super.deploy(
      kernel_,
      overrides || {}
    ) as Promise<GoerliDaoPriceConfig>;
  }
  override getDeployTransaction(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(kernel_, overrides || {});
  }
  override attach(address: string): GoerliDaoPriceConfig {
    return super.attach(address) as GoerliDaoPriceConfig;
  }
  override connect(signer: Signer): GoerliDaoPriceConfig__factory {
    return super.connect(signer) as GoerliDaoPriceConfig__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GoerliDaoPriceConfigInterface {
    return new utils.Interface(_abi) as GoerliDaoPriceConfigInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GoerliDaoPriceConfig {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GoerliDaoPriceConfig;
  }
}
