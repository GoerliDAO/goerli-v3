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
  EggsFullProtec,
  EggsFullProtecInterface,
} from "../../EggsFullProtec.sol/EggsFullProtec";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEggsToken",
        name: "_eggs",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_lockDuration",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_depositsEnabled",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "LogSetDepositsEnabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "lockDuration",
        type: "uint256",
      },
    ],
    name: "LogSetLockDuration",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
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
    name: "depositsEnabled",
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
    name: "eggs",
    outputs: [
      {
        internalType: "contract IEggsToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockDuration",
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
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_enabled",
        type: "bool",
      },
    ],
    name: "setDepositsEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lockDuration",
        type: "uint256",
      },
    ],
    name: "setLockDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStaked",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockEndedTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610c15380380610c1583398101604081905261002f916100c2565b61003833610072565b600180546001600160a01b0319166001600160a01b0394909416939093179092556002556004805460ff1916911515919091179055610116565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000806000606084860312156100d757600080fd5b83516001600160a01b03811681146100ee57600080fd5b602085015160408601519194509250801515811461010b57600080fd5b809150509250925092565b610af0806101256000396000f3fe608060405234801561001057600080fd5b50600436106100a45760003560e01c806304554443146100a95780631959a002146100c55780632e1a7d4d146101015780634eb665af146101165780635392fd1c14610129578063715018a614610146578063817b1cd21461014e5780638da5cb5b146101575780639f04586c14610177578063b6b55f251461018a578063e33f76cf1461019d578063f2fde38b146101b0575b600080fd5b6100b260025481565b6040519081526020015b60405180910390f35b6100ec6100d3366004610941565b6005602052600090815260409020805460019091015482565b604080519283526020830191909152016100bc565b61011461010f366004610971565b6101c3565b005b610114610124366004610971565b610341565b6004546101369060ff1681565b60405190151581526020016100bc565b610114610385565b6100b260035481565b61015f610399565b6040516001600160a01b0390911681526020016100bc565b610114610185366004610998565b6103a8565b610114610198366004610971565b6103f1565b60015461015f906001600160a01b031681565b6101146101be366004610941565b610552565b600081116101ec5760405162461bcd60e51b81526004016101e3906109b5565b60405180910390fd5b336000908152600560205260409020600181015442101561023e5760405162461bcd60e51b815260206004820152600c60248201526b1cdd1a5b1b081b1bd8dad95960a21b60448201526064016101e3565b805482111561025f5760405162461bcd60e51b81526004016101e3906109b5565b60025461026c90426109f3565b6001820155805482908290600090610285908490610a0b565b92505081905550816003600082825461029e9190610a0b565b90915550506001546040516340c10f1960e01b8152336004820152602481018490526001600160a01b03909116906340c10f1990604401600060405180830381600087803b1580156102ef57600080fd5b505af1158015610303573d6000803e3d6000fd5b50506040518481523392507f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a942436491506020015b60405180910390a25050565b6103496105cb565b60028190556040518181527fd117fef0d776cb27db2df7b7e87e1b900f5039c31eb524bb1446e943e5306eff906020015b60405180910390a150565b61038d6105cb565b610397600061062a565b565b6000546001600160a01b031690565b6103b06105cb565b6004805460ff19168215159081179091556040519081527f415447f74696881c5449538f07d24542d1f37bc3ffaacd1095313e14d7b9ce489060200161037a565b60045460ff166104375760405162461bcd60e51b815260206004820152601160248201527019195c1bdcda5d1cc8191a5cd8589b1959607a1b60448201526064016101e3565b600081116104575760405162461bcd60e51b81526004016101e3906109b5565b33600090815260056020526040902060025461047390426109f3565b60018083019190915554610492906001600160a01b031633308561067a565b600154604051630852cd8d60e31b8152600481018490526001600160a01b03909116906342966c6890602401600060405180830381600087803b1580156104d857600080fd5b505af11580156104ec573d6000803e3d6000fd5b50505050816003600082825461050291906109f3565b909155505080548290829060009061051b9084906109f3565b909155505060405182815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c90602001610335565b61055a6105cb565b6001600160a01b0381166105bf5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101e3565b6105c88161062a565b50565b336105d4610399565b6001600160a01b0316146103975760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101e3565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526106d49085906106da565b50505050565b600061072f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166107b19092919063ffffffff16565b8051909150156107ac578080602001905181019061074d9190610a22565b6107ac5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016101e3565b505050565b60606107c084846000856107c8565b949350505050565b6060824710156108295760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016101e3565b600080866001600160a01b031685876040516108459190610a6b565b60006040518083038185875af1925050503d8060008114610882576040519150601f19603f3d011682016040523d82523d6000602084013e610887565b606091505b5091509150610898878383876108a3565b979650505050505050565b6060831561091257825160000361090b576001600160a01b0385163b61090b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101e3565b50816107c0565b6107c083838151156109275781518083602001fd5b8060405162461bcd60e51b81526004016101e39190610a87565b60006020828403121561095357600080fd5b81356001600160a01b038116811461096a57600080fd5b9392505050565b60006020828403121561098357600080fd5b5035919050565b80151581146105c857600080fd5b6000602082840312156109aa57600080fd5b813561096a8161098a565b6020808252600e908201526d1a5b9d985b1a5908185b5bdd5b9d60921b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b60008219821115610a0657610a066109dd565b500190565b600082821015610a1d57610a1d6109dd565b500390565b600060208284031215610a3457600080fd5b815161096a8161098a565b60005b83811015610a5a578181015183820152602001610a42565b838111156106d45750506000910152565b60008251610a7d818460208701610a3f565b9190910192915050565b6020815260008251806020840152610aa6816040850160208701610a3f565b601f01601f1916919091016040019291505056fea26469706673582212202fedd9e25d823f942490ba90da951fceb5548e3b65c9098b8b9a3fcbf7c3a99f64736f6c634300080f0033";

type EggsFullProtecConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EggsFullProtecConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EggsFullProtec__factory extends ContractFactory {
  constructor(...args: EggsFullProtecConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _eggs: PromiseOrValue<string>,
    _lockDuration: PromiseOrValue<BigNumberish>,
    _depositsEnabled: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EggsFullProtec> {
    return super.deploy(
      _eggs,
      _lockDuration,
      _depositsEnabled,
      overrides || {}
    ) as Promise<EggsFullProtec>;
  }
  override getDeployTransaction(
    _eggs: PromiseOrValue<string>,
    _lockDuration: PromiseOrValue<BigNumberish>,
    _depositsEnabled: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _eggs,
      _lockDuration,
      _depositsEnabled,
      overrides || {}
    );
  }
  override attach(address: string): EggsFullProtec {
    return super.attach(address) as EggsFullProtec;
  }
  override connect(signer: Signer): EggsFullProtec__factory {
    return super.connect(signer) as EggsFullProtec__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EggsFullProtecInterface {
    return new utils.Interface(_abi) as EggsFullProtecInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EggsFullProtec {
    return new Contract(address, _abi, signerOrProvider) as EggsFullProtec;
  }
}