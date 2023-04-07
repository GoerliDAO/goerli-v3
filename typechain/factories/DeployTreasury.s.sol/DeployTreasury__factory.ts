/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DeployTreasury,
  DeployTreasuryInterface,
} from "../../DeployTreasury.s.sol/DeployTreasury";

const _abi = [
  {
    inputs: [],
    name: "IS_SCRIPT",
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
    name: "run",
    outputs: [
      {
        internalType: "contract GoerliDaoTreasury",
        name: "treasury",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vm",
    outputs: [
      {
        internalType: "contract Vm",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805460ff1916600117905534801561001d57600080fd5b50611cb38061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c040622614610077578063f8ccbf471461007f575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405161006e9190610378565b60405180910390f35b61006161009c565b60005461008c9060ff1681565b604051901515815260200161006e565b6040516360f9bb1160e01b81526020600482015260076024820152660b9cd958dc995d60ca1b60448201526000908190737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb11906064016000604051808303816000875af115801561010a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261013291908101906103d2565b604051636229498b60e01b8152909150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d90636229498b90610171908590859060040161047e565b6020604051808303816000875af1158015610190573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b491906104bf565b60405163ce817d4760e01b815260048101829052909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b15801561020457600080fd5b505af1158015610218573d6000803e3d6000fd5b505060405163350d56bf60e01b815260206004820152600660248201526512d15493915360d21b604482015260009250737109709ecfa91a80626ff3989d68f67f5b1dd12d915063350d56bf906064016020604051808303816000875af1158015610287573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ab91906104d8565b90506000819050806040516102bf9061036b565b6102c99190610378565b604051809103906000f0801580156102e5573d6000803e3d6000fd5b5094507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b03166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561034c57600080fd5b505af1158015610360573d6000803e3d6000fd5b505050505050505090565b6117758061050983390190565b6001600160a01b0391909116815260200190565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103bd5781810151838201526020016103a5565b838111156103cc576000848401525b50505050565b6000602082840312156103e457600080fd5b81516001600160401b03808211156103fb57600080fd5b818401915084601f83011261040f57600080fd5b8151818111156104215761042161038c565b604051601f8201601f19908116603f011681019083821181831017156104495761044961038c565b8160405282815287602084870101111561046257600080fd5b6104738360208301602088016103a2565b979650505050505050565b604081526000835180604084015261049d8160608501602088016103a2565b63ffffffff93909316602083015250601f91909101601f191601606001919050565b6000602082840312156104d157600080fd5b5051919050565b6000602082840312156104ea57600080fd5b81516001600160a01b038116811461050157600080fd5b939250505056fe6080604052600160055534801561001557600080fd5b506040516117753803806117758339810160408190526100349161005e565b600080546001600160a81b0319166001600160a01b0390921691909117600160a01b17905561008e565b60006020828403121561007057600080fd5b81516001600160a01b038116811461008757600080fd5b9392505050565b6116d88061009d6000396000f3fe608060405234801561001057600080fd5b50600436106101075760003560e01c806301a91e5c1461010c57806302fb0c5e146101215780630f15f4c01461014a57806315226b54146101525780631ae7ec2e146101735780631ff517ff1461019457806328a4ace5146101b45780632f42aef5146101df57806332b43ad2146101f25780634657b36c1461021d5780634aae164b1461023057806351b42b00146102435780635f0736a11461024b578063724000c1146102765780638b7f3fb914610289578063d4aae0c41461029c578063e6eb207a146102bc578063ea643914146102cf578063f5b92c73146102d7578063fb393f24146102ea578063ffa1ad74146102fd575b600080fd5b61011f61011a3660046114d4565b610312565b005b60005461013590600160a01b900460ff1681565b60405190151581526020015b60405180910390f35b61011f61045d565b610165610160366004611515565b610517565b604051908152602001610141565b61017b6105a6565b6040516001600160d81b03199091168152602001610141565b6101656101a2366004611515565b60036020526000908152604090205481565b6101656101c2366004611539565b600460209081526000928352604080842090915290825290205481565b61011f6101ed3660046114d4565b6105b2565b610165610200366004611539565b600260209081526000928352604080842090915290825290205481565b61011f61022b366004611515565b61072a565b61011f61023e3660046114d4565b610779565b61011f61090b565b610165610259366004611539565b600160209081526000928352604080842090915290825290205481565b61011f610284366004611572565b6109bf565b61011f6102973660046114d4565b610b84565b6000546102af906001600160a01b031681565b604051610141919061159e565b61011f6102ca3660046114d4565b610cd7565b61011f610e2b565b61011f6102e53660046114d4565b610e5a565b61011f6102f83660046114d4565b61115c565b60408051600181526000602082015201610141565b6000546001600160a01b031663f166d9eb61032b6105a6565b336000356001600160e01b0319166040518463ffffffff1660e01b8152600401610357939291906115b2565b602060405180830381865afa158015610374573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039891906115e7565b6103c057336040516311bf00c960e01b81526004016103b7919061159e565b60405180910390fd5b6001600160a01b0380841660009081526002602090815260408083209386168352929052908120546103f390839061161f565b6001600160a01b038581166000818152600260209081526040808320948916808452948252918290208590559051848152939450919290917f9afc1acde4b7ec0d84d924e5b530aecfb57d117a7122b80904cb9912badbff5991015b60405180910390a350505050565b6000546001600160a01b031663f166d9eb6104766105a6565b336000356001600160e01b0319166040518463ffffffff1660e01b81526004016104a2939291906115b2565b602060405180830381865afa1580156104bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e391906115e7565b61050257336040516311bf00c960e01b81526004016103b7919061159e565b6000805460ff60a01b1916600160a01b179055565b6001600160a01b0381166000818152600360205260408082205490516370a0823160e01b8152919290916370a082319061055590309060040161159e565b602060405180830381865afa158015610572573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105969190611637565b6105a0919061161f565b92915050565b64545253525960d81b90565b6000546001600160a01b031663f166d9eb6105cb6105a6565b336000356001600160e01b0319166040518463ffffffff1660e01b81526004016105f7939291906115b2565b602060405180830381865afa158015610614573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063891906115e7565b61065757336040516311bf00c960e01b81526004016103b7919061159e565b600054600160a01b900460ff166106815760405163473b682f60e11b815260040160405180910390fd5b3360009081526001602090815260408083206001600160a01b0386168452909152812080548392906106b4908490611650565b909155506106ce90506001600160a01b0383168483611294565b816001600160a01b0316836001600160a01b0316336001600160a01b03167f342e7ff505a8a0364cd0dc2ff195c315e43bce86b204846ecd36913e117b109e8460405161071d91815260200190565b60405180910390a4505050565b6000546001600160a01b03163314610757573360405163053e900f60e21b81526004016103b7919061159e565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031663f166d9eb6107926105a6565b336000356001600160e01b0319166040518463ffffffff1660e01b81526004016107be939291906115b2565b602060405180830381865afa1580156107db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ff91906115e7565b61081e57336040516311bf00c960e01b81526004016103b7919061159e565b6001600160a01b0382811660009081526004602090815260408083209387168352929052208054908290558181101561088e5761085b8183611650565b6001600160a01b0384166000908152600360205260408120805490919061088390849061161f565b909155506108c69050565b6108988282611650565b6001600160a01b038416600090815260036020526040812080549091906108c0908490611650565b90915550505b836001600160a01b0316836001600160a01b03167f4417d205f6349e66a581332b36195e74d10f878e80db907b4fd3a814aad4049d8460405161044f91815260200190565b6000546001600160a01b031663f166d9eb6109246105a6565b336000356001600160e01b0319166040518463ffffffff1660e01b8152600401610950939291906115b2565b602060405180830381865afa15801561096d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099191906115e7565b6109b057336040516311bf00c960e01b81526004016103b7919061159e565b6000805460ff60a01b19169055565b6000546001600160a01b031663f166d9eb6109d86105a6565b336000356001600160e01b0319166040518463ffffffff1660e01b8152600401610a04939291906115b2565b602060405180830381865afa158015610a21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4591906115e7565b610a6457336040516311bf00c960e01b81526004016103b7919061159e565b600054600160a01b900460ff16610a8e5760405163473b682f60e11b815260040160405180910390fd5b3360009081526002602090815260408083206001600160a01b038616845290915281208054839290610ac1908490611650565b90915550506001600160a01b038216600090815260046020908152604080832033845290915281208054839290610af990849061161f565b90915550506001600160a01b03821660009081526003602052604081208054839290610b2690849061161f565b90915550610b4090506001600160a01b0383163383611294565b60405181815233906001600160a01b038416907f7f04a714958851e1d87b504651ba77ab02f62bae8879f577bf3e07cf8567aba29060200160405180910390a35050565b6000546001600160a01b031663f166d9eb610b9d6105a6565b336000356001600160e01b0319166040518463ffffffff1660e01b8152600401610bc9939291906115b2565b602060405180830381865afa158015610be6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0a91906115e7565b610c2957336040516311bf00c960e01b81526004016103b7919061159e565b6001600160a01b0380841660009081526001602090815260408083209386168352929052908120549082821115610c6957610c648383611650565b610c6c565b60005b6001600160a01b038681166000818152600160209081526040808320948a16808452948252918290208590559051848152939450919290917f40730d80659c76c95521f0340872d27fdc8b3c47befe2ca569d2c2eedc8a049e91015b60405180910390a35050505050565b6000546001600160a01b031663f166d9eb610cf06105a6565b336000356001600160e01b0319166040518463ffffffff1660e01b8152600401610d1c939291906115b2565b602060405180830381865afa158015610d39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5d91906115e7565b610d7c57336040516311bf00c960e01b81526004016103b7919061159e565b6001600160a01b0380841660009081526001602090815260408083209386168352929052908120549082610db283600019611650565b1115610dc757610dc2838361161f565b610dcb565b6000195b6001600160a01b038681166000818152600160209081526040808320948a16808452948252918290208590559051848152939450919290917f8bbc2784c9e4073e20f60d8c7218cbd211c43ca2ee041bc037f977693a0c8c1b9101610cc8565b6000546001600160a01b03163314610e58573360405163053e900f60e21b81526004016103b7919061159e565b565b6000546001600160a01b031663f166d9eb610e736105a6565b336000356001600160e01b0319166040518463ffffffff1660e01b8152600401610e9f939291906115b2565b602060405180830381865afa158015610ebc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee091906115e7565b610eff57336040516311bf00c960e01b81526004016103b7919061159e565b600554600114610f3e5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016103b7565b60026005556001600160a01b0380831660009081526004602090815260408083209387168352929052908120549003610f8a5760405163a4255dc560e01b815260040160405180910390fd5b6040516370a0823160e01b81526000906001600160a01b038416906370a0823190610fb990309060040161159e565b602060405180830381865afa158015610fd6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffa9190611637565b90506110116001600160a01b0384163330856113a1565b600081846001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401611040919061159e565b602060405180830381865afa15801561105d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110819190611637565b61108b9190611650565b9050828111156110985750815b6001600160a01b038085166000908152600460209081526040808320938916835292905290812080548392906110cf908490611650565b90915550506001600160a01b038416600090815260036020526040812080548392906110fc908490611650565b92505081905550846001600160a01b0316846001600160a01b03167feef1a28252f7c3266ccea3202ee9693f0834485bc3551310a406e04829c7e2cf8360405161114891815260200190565b60405180910390a350506001600555505050565b6000546001600160a01b031663f166d9eb6111756105a6565b336000356001600160e01b0319166040518463ffffffff1660e01b81526004016111a1939291906115b2565b602060405180830381865afa1580156111be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e291906115e7565b61120157336040516311bf00c960e01b81526004016103b7919061159e565b6001600160a01b038084166000908152600260209081526040808320938616835292905290812054611234908390611650565b6001600160a01b038581166000818152600260209081526040808320948916808452948252918290208590559051848152939450919290917fbb8caa1e59333c99899b67ccacb2b942c5a5ebf1a2bff4932b50274da81fe8d5910161044f565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392908716916112f09190611667565b6000604051808303816000865af19150503d806000811461132d576040519150601f19603f3d011682016040523d82523d6000602084013e611332565b606091505b509150915081801561135c57508051158061135c57508080602001905181019061135c91906115e7565b61139a5760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b60448201526064016103b7565b5050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392908816916114059190611667565b6000604051808303816000865af19150503d8060008114611442576040519150601f19603f3d011682016040523d82523d6000602084013e611447565b606091505b509150915081801561147157508051158061147157508080602001905181019061147191906115e7565b6114b45760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b60448201526064016103b7565b505050505050565b6001600160a01b03811681146114d157600080fd5b50565b6000806000606084860312156114e957600080fd5b83356114f4816114bc565b92506020840135611504816114bc565b929592945050506040919091013590565b60006020828403121561152757600080fd5b8135611532816114bc565b9392505050565b6000806040838503121561154c57600080fd5b8235611557816114bc565b91506020830135611567816114bc565b809150509250929050565b6000806040838503121561158557600080fd5b8235611590816114bc565b946020939093013593505050565b6001600160a01b0391909116815260200190565b6001600160d81b03199390931683526001600160a01b039190911660208301526001600160e01b031916604082015260600190565b6000602082840312156115f957600080fd5b8151801515811461153257600080fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561163257611632611609565b500190565b60006020828403121561164957600080fd5b5051919050565b60008282101561166257611662611609565b500390565b6000825160005b81811015611688576020818601810151858301520161166e565b81811115611697576000828501525b50919091019291505056fea2646970667358221220dca4a487bb6063832e66167c01764d322fd6437dd804dbd50495996eea6d38b764736f6c634300080f0033a264697066735822122068207dae026641585baa949a8d35bdf820a6510ae521bc2a65bf151f8186457f64736f6c634300080f0033";

type DeployTreasuryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeployTreasuryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeployTreasury__factory extends ContractFactory {
  constructor(...args: DeployTreasuryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DeployTreasury> {
    return super.deploy(overrides || {}) as Promise<DeployTreasury>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DeployTreasury {
    return super.attach(address) as DeployTreasury;
  }
  override connect(signer: Signer): DeployTreasury__factory {
    return super.connect(signer) as DeployTreasury__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployTreasuryInterface {
    return new utils.Interface(_abi) as DeployTreasuryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeployTreasury {
    return new Contract(address, _abi, signerOrProvider) as DeployTreasury;
  }
}
