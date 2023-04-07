/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DeployDevFaucet,
  DeployDevFaucetInterface,
} from "../../DeployDevFaucet.s.sol/DeployDevFaucet";

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
        internalType: "contract Faucet",
        name: "faucet",
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
  "0x60806040526000805460ff1916600117905534801561001d57600080fd5b5061137c8061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c040622614610078578063f8ccbf4714610080575b600080fd5b61005b60008051602061132783398151915281565b6040516001600160a01b0390911681526020015b60405180910390f35b61005b61009d565b60005461008d9060ff1681565b604051901515815260200161006f565b6040516360f9bb1160e01b81526020600482015260076024820152660b9cd958dc995d60ca1b60448201526000908190600080516020611327833981519152906360f9bb11906064016000604051808303816000875af1158015610105573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261012d919081019061053e565b604051636229498b60e01b815290915060009060008051602061132783398151915290636229498b9061016690859085906004016105ea565b6020604051808303816000875af1158015610185573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a9919061062b565b60405163ce817d4760e01b8152600481018290529091506000805160206113278339815191529063ce817d4790602401600060405180830381600087803b1580156101f357600080fd5b505af1158015610207573d6000803e3d6000fd5b505060405163350d56bf60e01b815260206004820152600c60248201526b1313d0d05317d2d15493915360a21b604482015260009250600080516020611327833981519152915063350d56bf906064016020604051808303816000875af1158015610276573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029a9190610644565b60405163350d56bf60e01b815260206004820152600a6024820152694c4f43414c5f4744414f60b01b604482015290915081906000906000805160206113278339815191529063350d56bf906064016020604051808303816000875af1158015610308573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032c9190610644565b60405163350d56bf60e01b8152602060048201526008602482015267544553545f44414960c01b604482015290915081906000906000805160206113278339815191529063350d56bf906064016020604051808303816000875af1158015610398573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103bc9190610644565b6040519091508190670de0b6b3a76400009066038d7ea4c68000906a084595161401484a00000090610168906000908b90899088908890889088908890610402906104eb565b6001600160a01b03978816815295871660208701529590931660408501526060840191909152608083015260a082015260c081019190915260e001604051809103906000f080158015610459573d6000803e3d6000fd5b5090507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b03166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156104c057600080fd5b505af11580156104d4573d6000803e3d6000fd5b50505050809d505050505050505050505050505090565b610cb28061067583390190565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610529578181015183820152602001610511565b83811115610538576000848401525b50505050565b60006020828403121561055057600080fd5b81516001600160401b038082111561056757600080fd5b818401915084601f83011261057b57600080fd5b81518181111561058d5761058d6104f8565b604051601f8201601f19908116603f011681019083821181831017156105b5576105b56104f8565b816040528281528760208487010111156105ce57600080fd5b6105df83602083016020880161050e565b979650505050505050565b604081526000835180604084015261060981606085016020880161050e565b63ffffffff93909316602083015250601f91909101601f191601606001919050565b60006020828403121561063d57600080fd5b5051919050565b60006020828403121561065657600080fd5b81516001600160a01b038116811461066d57600080fd5b939250505056fe6080604052600160005534801561001557600080fd5b50604051610cb2380380610cb28339810160408190526100349161014d565b600180546001600160a01b039889166001600160a01b0319918216179091557fa15bc60c955c405d20d9149c709e2460f1c2d9a497496a7f46004d1772c3054c8054978916978216979097179096557fc3a24b0501bd2c13a7e57f2db4369ec4c223447539fc0724a9d55ac4a06ebd4d80549096169490961693909317909355600260208190527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b919091557fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e0929092556000919091527f679795a0195a1b76cdebb7c51d74e058aee92919b8c3389af86ef24535e8a28c556005556101c1565b6001600160a01b038116811461014a57600080fd5b50565b600080600080600080600060e0888a03121561016857600080fd5b875161017381610135565b602089015190975061018481610135565b604089015190965061019581610135565b80955050606088015193506080880151925060a0880151915060c0880151905092959891949750929550565b610ae2806101d06000396000f3fe6080604052600436106100855760003560e01c80631a624b17146100915780632c35c40b146100a8578063558d0423146100c85780636a2148111461011357806370fef9f61461012957806392c6672814610149578063a9a89db914610169578063cd3a886114610189578063f851a440146101b6578063fd00ea1c146101e357600080fd5b3661008c57005b600080fd5b34801561009d57600080fd5b506100a6610219565b005b3480156100b457600080fd5b506100a66100c33660046108f1565b610239565b3480156100d457600080fd5b506101006100e33660046108f1565b600460209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b34801561011f57600080fd5b5061010060055481565b34801561013557600080fd5b506100a6610144366004610932565b610416565b34801561015557600080fd5b506100a6610164366004610954565b61073a565b34801561017557600080fd5b506100a661018436600461097e565b6107a1565b34801561019557600080fd5b506101006101a4366004610932565b60026020526000908152604090205481565b3480156101c257600080fd5b506001546101d6906001600160a01b031681565b60405161010a9190610997565b3480156101ef57600080fd5b506101d66101fe366004610932565b6003602052600090815260409020546001600160a01b031681565b6102236000610416565b61022d6001610416565b6102376002610416565b565b6001546001600160a01b0316331461026c5760405162461bcd60e51b8152600401610263906109ab565b60405180910390fd5b6000816002811115610280576102806109d2565b0361031f576000826001600160a01b03164760405160006040518083038185875af1925050503d80600081146102d2576040519150601f19603f3d011682016040523d82523d6000602084013e6102d7565b606091505b505090508061031a5760405162461bcd60e51b815260206004820152600f60248201526e15da5d1a191c985dc811985a5b1959608a1b6044820152606401610263565b505050565b6104128260036000846002811115610339576103396109d2565b600281111561034a5761034a6109d2565b8152602081019190915260409081016000205490516370a0823160e01b81526001600160a01b03909116906370a0823190610389903090600401610997565b602060405180830381865afa1580156103a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ca91906109e8565b600360008560028111156103e0576103e06109d2565b60028111156103f1576103f16109d2565b81526020810191909152604001600020546001600160a01b031691906107d0565b5050565b6000546001146104555760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610263565b6002600081815560055433825260046020526040822090929091908490811115610481576104816109d2565b6002811115610492576104926109d2565b8152602001908152602001600020546104ab9190610a01565b4210156104cd57806040516368a886b760e11b81526004016102639190610a27565b60008160028111156104e1576104e16109d2565b036105e457600260008260028111156104fc576104fc6109d2565b600281111561050d5761050d6109d2565b81526020019081526020016000205447101561053e57806040516363dbac9160e01b81526004016102639190610a27565b6000336002828482811115610555576105556109d2565b6002811115610566576105666109d2565b81526020019081526020016000205460405160006040518083038185875af1925050503d80600081146105b5576040519150601f19603f3d011682016040523d82523d6000602084013e6105ba565b606091505b50509050806105de5781604051639e73bbe760e01b81526004016102639190610a27565b50610732565b600260008260028111156105fa576105fa6109d2565b600281111561060b5761060b6109d2565b81526020019081526020016000205460036000836002811115610630576106306109d2565b6002811115610641576106416109d2565b8152602081019190915260409081016000205490516370a0823160e01b81526001600160a01b03909116906370a0823190610680903090600401610997565b602060405180830381865afa15801561069d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c191906109e8565b10156106e257806040516363dbac9160e01b81526004016102639190610a27565b61073233600260008460028111156106fc576106fc6109d2565b600281111561070d5761070d6109d2565b815260200190815260200160002054600360008560028111156103e0576103e06109d2565b506001600055565b6001546001600160a01b031633146107645760405162461bcd60e51b8152600401610263906109ab565b806002600084600281111561077b5761077b6109d2565b600281111561078c5761078c6109d2565b81526020810191909152604001600020555050565b6001546001600160a01b031633146107cb5760405162461bcd60e51b8152600401610263906109ab565b600555565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283929087169161082c9190610a4f565b6000604051808303816000865af19150503d8060008114610869576040519150601f19603f3d011682016040523d82523d6000602084013e61086e565b606091505b50915091508180156108985750805115806108985750808060200190518101906108989190610a8a565b6108d65760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610263565b5050505050565b8035600381106108ec57600080fd5b919050565b6000806040838503121561090457600080fd5b82356001600160a01b038116811461091b57600080fd5b9150610929602084016108dd565b90509250929050565b60006020828403121561094457600080fd5b61094d826108dd565b9392505050565b6000806040838503121561096757600080fd5b610970836108dd565b946020939093013593505050565b60006020828403121561099057600080fd5b5035919050565b6001600160a01b0391909116815260200190565b6020808252600d908201526c26bab9ba1031329030b236b4b760991b604082015260600190565b634e487b7160e01b600052602160045260246000fd5b6000602082840312156109fa57600080fd5b5051919050565b60008219821115610a2257634e487b7160e01b600052601160045260246000fd5b500190565b6020810160038310610a4957634e487b7160e01b600052602160045260246000fd5b91905290565b6000825160005b81811015610a705760208186018101518583015201610a56565b81811115610a7f576000828501525b509190910192915050565b600060208284031215610a9c57600080fd5b8151801515811461094d57600080fdfea26469706673582212208e2d75518c0602d0d504b6ded9fcb21147e9ba509e50a08db0e8ef537e5df0db64736f6c634300080f00330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12da2646970667358221220d3386e5f2d581904f3aa97aab123f0f9c16360505137afa9252bc8458e6b983264736f6c634300080f0033";

type DeployDevFaucetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeployDevFaucetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeployDevFaucet__factory extends ContractFactory {
  constructor(...args: DeployDevFaucetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DeployDevFaucet> {
    return super.deploy(overrides || {}) as Promise<DeployDevFaucet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DeployDevFaucet {
    return super.attach(address) as DeployDevFaucet;
  }
  override connect(signer: Signer): DeployDevFaucet__factory {
    return super.connect(signer) as DeployDevFaucet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployDevFaucetInterface {
    return new utils.Interface(_abi) as DeployDevFaucetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeployDevFaucet {
    return new Contract(address, _abi, signerOrProvider) as DeployDevFaucet;
  }
}
