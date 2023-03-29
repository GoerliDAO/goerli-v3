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
import type { MockERC20, MockERC20Interface } from "../MockERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    name: "balanceOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    name: "nonces",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162001005380380620010058339810160408190526200003491620001e3565b8282826000620000458482620002f7565b506001620000548382620002f7565b5060ff81166080524660a0526200006a6200007a565b60c0525062000441945050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620000ae9190620003c3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013e57600080fd5b81516001600160401b03808211156200015b576200015b62000116565b604051601f8301601f19908116603f0116810190828211818310171562000186576200018662000116565b81604052838152602092508683858801011115620001a357600080fd5b600091505b83821015620001c75785820183015181830184015290820190620001a8565b83821115620001d95760008385830101525b9695505050505050565b600080600060608486031215620001f957600080fd5b83516001600160401b03808211156200021157600080fd5b6200021f878388016200012c565b945060208601519150808211156200023657600080fd5b5062000245868287016200012c565b925050604084015160ff811681146200025d57600080fd5b809150509250925092565b600181811c908216806200027d57607f821691505b6020821081036200029e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002f257600081815260208120601f850160051c81016020861015620002cd5750805b601f850160051c820191505b81811015620002ee57828155600101620002d9565b5050505b505050565b81516001600160401b0381111562000313576200031362000116565b6200032b8162000324845462000268565b84620002a4565b602080601f8311600181146200036357600084156200034a5750858301515b600019600386901b1c1916600185901b178555620002ee565b600085815260208120601f198616915b82811015620003945788860151825594840194600190910190840162000373565b5085821015620003b35787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620003d38162000268565b60018281168015620003ee5760018114620004045762000435565b60ff198416875282151583028701945062000435565b8760005260208060002060005b858110156200042c5781548a82015290840190820162000411565b50505082870194505b50929695505050505050565b60805160a05160c051610b9462000471600039600061042d015260006103f80152600061012f0152610b946000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c806306fdde03146100bf578063095ea7b3146100dd57806318160ddd1461010057806323b872dd14610117578063313ce5671461012a5780633644e5151461016357806340c10f191461016b57806370a08231146101805780637ecebe00146101a057806395d89b41146101c05780639dc29fac146101c8578063a9059cbb146101db578063d505accf146101ee578063dd62ed3e14610201575b600080fd5b6100c761022c565b6040516100d49190610861565b60405180910390f35b6100f06100eb3660046108d2565b6102ba565b60405190151581526020016100d4565b61010960025481565b6040519081526020016100d4565b6100f06101253660046108fc565b610314565b6101517f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016100d4565b6101096103f4565b61017e6101793660046108d2565b61044f565b005b61010961018e366004610938565b60036020526000908152604090205481565b6101096101ae366004610938565b60056020526000908152604090205481565b6100c761045d565b61017e6101d63660046108d2565b61046a565b6100f06101e93660046108d2565b610474565b61017e6101fc36600461095a565b6104da565b61010961020f3660046109cd565b600460209081526000928352604080842090915290825290205481565b6000805461023990610a00565b80601f016020809104026020016040519081016040528092919081815260200182805461026590610a00565b80156102b25780601f10610287576101008083540402835291602001916102b2565b820191906000526020600020905b81548152906001019060200180831161029557829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b03871680855292528083208590555191929091600080516020610b3f833981519152906103039086815260200190565b60405180910390a350600192915050565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146103705761034b8382610a50565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610398908490610a50565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020610b1f833981519152906103e19087815260200190565b60405180910390a3506001949350505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461042a5761042561070b565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b61045982826107a5565b5050565b6001805461023990610a00565b61045982826107ff565b33600090815260036020526040812080548391908390610495908490610a50565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020610b1f833981519152906103039086815260200190565b428410156105295760405162461bcd60e51b815260206004820152601760248201527614115493525517d11150511312539157d1561412549151604a1b60448201526064015b60405180910390fd5b600060016105356103f4565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610641573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906106775750876001600160a01b0316816001600160a01b0316145b6106b45760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610520565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a1691600080516020610b3f833981519152910160405180910390a350505050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161073d9190610a67565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546107b79190610b06565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020610b1f83398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290610827908490610a50565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020610b1f833981519152906020016107f3565b600060208083528351808285015260005b8181101561088e57858101830151858201604001528201610872565b818111156108a0576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146108cd57600080fd5b919050565b600080604083850312156108e557600080fd5b6108ee836108b6565b946020939093013593505050565b60008060006060848603121561091157600080fd5b61091a846108b6565b9250610928602085016108b6565b9150604084013590509250925092565b60006020828403121561094a57600080fd5b610953826108b6565b9392505050565b600080600080600080600060e0888a03121561097557600080fd5b61097e886108b6565b965061098c602089016108b6565b95506040880135945060608801359350608088013560ff811681146109b057600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156109e057600080fd5b6109e9836108b6565b91506109f7602084016108b6565b90509250929050565b600181811c90821680610a1457607f821691505b602082108103610a3457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610a6257610a62610a3a565b500390565b600080835481600182811c915080831680610a8357607f831692505b60208084108203610aa257634e487b7160e01b86526022600452602486fd5b818015610ab65760018114610acb57610af8565b60ff1986168952841515850289019650610af8565b60008a81526020902060005b86811015610af05781548b820152908501908301610ad7565b505084890196505b509498975050505050505050565b60008219821115610b1957610b19610a3a565b50019056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a26469706673582212206bdd675ee5da1f5171df2745fda1f75ab38e2357309a2e8e1b945cc966bad6f564736f6c634300080f0033";

type MockERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC20__factory extends ContractFactory {
  constructor(...args: MockERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockERC20> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    ) as Promise<MockERC20>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    );
  }
  override attach(address: string): MockERC20 {
    return super.attach(address) as MockERC20;
  }
  override connect(signer: Signer): MockERC20__factory {
    return super.connect(signer) as MockERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC20Interface {
    return new utils.Interface(_abi) as MockERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC20 {
    return new Contract(address, _abi, signerOrProvider) as MockERC20;
  }
}
