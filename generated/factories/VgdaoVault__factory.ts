/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { VgdaoVault, VgdaoVaultInterface } from "../VgdaoVault";

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
    name: "VgdaoVault_NotVested",
    type: "error",
  },
  {
    inputs: [],
    name: "VESTING_PERIOD",
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
    name: "VOTES",
    outputs: [
      {
        internalType: "contract VOTESv1",
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
        internalType: "uint256",
        name: "assets_",
        type: "uint256",
      },
    ],
    name: "deposit",
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
    inputs: [
      {
        internalType: "uint256",
        name: "shares_",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares_",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets_",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xGDAO",
    outputs: [
      {
        internalType: "contract ERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610d70380380610d7083398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610cdd806100936000396000f3fe608060405234801561001057600080fd5b50600436106100a45760003560e01c80630197d972146100a957806322f3e2d4146100c55780632e1a7d4d146100dd5780634657b36c146100f25780635924be70146101055780639459b8751461011a578063a0712d681461012f578063b6b55f2514610142578063d4aae0c414610155578063db006a7514610175578063e03481e114610188578063e4b4a7271461019b575b600080fd5b6100b2610e1081565b6040519081526020015b60405180910390f35b6100cd6101ae565b60405190151581526020016100bc565b6100f06100eb366004610a8a565b610225565b005b6100f0610100366004610abb565b61033d565b61010d610395565b6040516100bc9190610adf565b61012261057b565b6040516100bc9190610b42565b6100f061013d366004610a8a565b61070b565b6100f0610150366004610a8a565b61086c565b600054610168906001600160a01b031681565b6040516100bc9190610b90565b6100f0610183366004610a8a565b610916565b600154610168906001600160a01b031681565b600254610168906001600160a01b031681565b6000805460405163e52223bb60e01b81526001600160a01b039091169063e52223bb906101df903090600401610b90565b602060405180830381865afa1580156101fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102209190610ba4565b905090565b600254604051630523a86960e21b8152610e10916001600160a01b03169063148ea1a490610257903390600401610b90565b602060405180830381865afa158015610274573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102989190610bc6565b6102a29190610bdf565b4210156102c25760405163097c543f60e11b815260040160405180910390fd5b600254604051632d182be560e21b81526001600160a01b039091169063b460af94906102f690849033908190600401610c05565b6020604051808303816000875af1158015610315573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103399190610bc6565b5050565b6000546001600160a01b03163314610373573360405163053e900f60e21b815260040161036a9190610b90565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60408051600580825260c08201909252606091816020015b60408051808201909152600080825260208201528152602001906001900390816103ad57905050905060405180604001604052806103f064564f54455360d81b90565b6001600160d81b0319168152636e553f6560e01b6020909101528151829060009061041d5761041d610c24565b6020026020010181905250604051806040016040528061044264564f54455360d81b90565b6001600160d81b03191681526394bf804d60e01b60209091015281518290600190811061047157610471610c24565b6020026020010181905250604051806040016040528061049664564f54455360d81b90565b6001600160d81b0319168152632d182be560e21b6020909101528151829060029081106104c5576104c5610c24565b602002602001018190525060405180604001604052806104ea64564f54455360d81b90565b6001600160d81b0319168152635d043b2960e11b60209091015281518290600390811061051957610519610c24565b6020026020010181905250604051806040016040528061053e64564f54455360d81b90565b6001600160d81b03191681526323b872dd60e01b60209091015281518290600490811061056d5761056d610c24565b602002602001018190525090565b6040805160018082528183019092526060916020808301908036833701905050905064564f54455360d81b816000815181106105b9576105b9610c24565b60200260200101906001600160d81b03191690816001600160d81b031916815250506105fe816000815181106105f1576105f1610c24565b60200260200101516109e7565b600280546001600160a01b0319166001600160a01b039290921691821790556040805163e03481e160e01b8152905163e03481e1916004808201926020929091908290030181865afa158015610658573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067c9190610c3a565b600180546001600160a01b0319166001600160a01b0392831690811790915560025460405163095ea7b360e01b81529216600483015260001960248301529063095ea7b3906044016020604051808303816000875af11580156106e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107079190610ba4565b5090565b60025460405163b3d7f6b960e01b8152600481018390526000916001600160a01b03169063b3d7f6b990602401602060405180830381865afa158015610755573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107799190610bc6565b6001546040516323b872dd60e01b81529192506001600160a01b0316906323b872dd906107ae90339030908690600401610c57565b6020604051808303816000875af11580156107cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f19190610ba4565b506002546040516394bf804d60e01b81526001600160a01b03909116906394bf804d906108249085903390600401610c7b565b6020604051808303816000875af1158015610843573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108679190610bc6565b505050565b6001546040516323b872dd60e01b81526001600160a01b03909116906323b872dd906108a090339030908690600401610c57565b6020604051808303816000875af11580156108bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e39190610ba4565b50600254604051636e553f6560e01b81526001600160a01b0390911690636e553f65906102f69084903390600401610c7b565b600254604051630523a86960e21b8152610e10916001600160a01b03169063148ea1a490610948903390600401610b90565b602060405180830381865afa158015610965573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109899190610bc6565b6109939190610bdf565b4210156109b35760405163097c543f60e11b815260040160405180910390fd5b600254604051635d043b2960e11b81526001600160a01b039091169063ba087652906102f690849033908190600401610c05565b60008054604051632d37002d60e21b815282916001600160a01b03169063b4dc00b490610a18908690600401610c92565b602060405180830381865afa158015610a35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a599190610c3a565b90506001600160a01b038116610a845782604051635c3fa9cd60e01b815260040161036a9190610c92565b92915050565b600060208284031215610a9c57600080fd5b5035919050565b6001600160a01b0381168114610ab857600080fd5b50565b600060208284031215610acd57600080fd5b8135610ad881610aa3565b9392505050565b602080825282518282018190526000919060409081850190868401855b82811015610b3557815180516001600160d81b03191685528601516001600160e01b031916868501529284019290850190600101610afc565b5091979650505050505050565b6020808252825182820181905260009190848201906040850190845b81811015610b845783516001600160d81b03191683529284019291840191600101610b5e565b50909695505050505050565b6001600160a01b0391909116815260200190565b600060208284031215610bb657600080fd5b81518015158114610ad857600080fd5b600060208284031215610bd857600080fd5b5051919050565b60008219821115610c0057634e487b7160e01b600052601160045260246000fd5b500190565b9283526001600160a01b03918216602084015216604082015260600190565b634e487b7160e01b600052603260045260246000fd5b600060208284031215610c4c57600080fd5b8151610ad881610aa3565b6001600160a01b039384168152919092166020820152604081019190915260600190565b9182526001600160a01b0316602082015260400190565b6001600160d81b03199190911681526020019056fea2646970667358221220d0aa18c1bc08c89fbaee0832743f5c99fa8205a54d396802c231b5e758088d5064736f6c634300080f0033";

type VgdaoVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VgdaoVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VgdaoVault__factory extends ContractFactory {
  constructor(...args: VgdaoVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VgdaoVault> {
    return super.deploy(kernel_, overrides || {}) as Promise<VgdaoVault>;
  }
  override getDeployTransaction(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(kernel_, overrides || {});
  }
  override attach(address: string): VgdaoVault {
    return super.attach(address) as VgdaoVault;
  }
  override connect(signer: Signer): VgdaoVault__factory {
    return super.connect(signer) as VgdaoVault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VgdaoVaultInterface {
    return new utils.Interface(_abi) as VgdaoVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VgdaoVault {
    return new Contract(address, _abi, signerOrProvider) as VgdaoVault;
  }
}