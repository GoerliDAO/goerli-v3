/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { BondCallback, BondCallbackInterface } from "../BondCallback";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Kernel",
        name: "kernel_",
        type: "address",
      },
      {
        internalType: "contract IBondAggregator",
        name: "aggregator_",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "gdao_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Callback_InvalidParams",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Callback_MarketNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "Callback_TokensNotReceived",
    type: "error",
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
    name: "MINTR",
    outputs: [
      {
        internalType: "contract MINTRv1",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    inputs: [],
    name: "TRSRY",
    outputs: [
      {
        internalType: "contract TRSRYv1",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "aggregator",
    outputs: [
      {
        internalType: "contract IBondAggregator",
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
        name: "id_",
        type: "uint256",
      },
    ],
    name: "amountsForMarket",
    outputs: [
      {
        internalType: "uint256",
        name: "in_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "out_",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "approvedMarkets",
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
    inputs: [
      {
        internalType: "contract ERC20[]",
        name: "tokens_",
        type: "address[]",
      },
    ],
    name: "batchToTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "teller_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
    ],
    name: "blacklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "inputAmount_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "outputAmount_",
        type: "uint256",
      },
    ],
    name: "callback",
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
    name: "gdao",
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
    name: "operator",
    outputs: [
      {
        internalType: "contract Operator",
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
        internalType: "contract ERC20",
        name: "",
        type: "address",
      },
    ],
    name: "priorBalances",
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
  {
    inputs: [
      {
        internalType: "contract Operator",
        name: "operator_",
        type: "address",
      },
    ],
    name: "setOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "teller_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
    ],
    name: "whitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600180553480156200001557600080fd5b5060405162001f5a38038062001f5a833981016040819052620000389162000094565b600080546001600160a01b039485166001600160a01b0319918216179091556009805493851693821693909317909255600a8054919093169116179055620000e8565b6001600160a01b03811681146200009157600080fd5b50565b600080600060608486031215620000aa57600080fd5b8351620000b7816200007b565b6020850151909350620000ca816200007b565b6040850151909250620000dd816200007b565b809150509250925092565b611e6280620000f86000396000f3fe608060405234801561001057600080fd5b50600436106100f15760003560e01c806309c2c843146100f65780631074bce51461010b57806322f3e2d41461011e578063245a7bfc1461013b5780634657b36c1461015b5780634b9de77c1461016e578063570ca73514610181578063577de7d0146101945780635924be70146101a7578063650d6ed6146101bc57806380cee4ab146101ea578063853dc0da146101fd5780638aeb40fd1461022b578063923cb952146102535780639459b8751461026657806398fc55d81461027b578063a29a0d901461028e578063b3ab15fb146102a1578063d4aae0c4146102b4575b600080fd5b61010961010436600461196c565b6102c7565b005b610109610119366004611a30565b610489565b6101266105ce565b60405190151581526020015b60405180910390f35b60095461014e906001600160a01b031681565b6040516101329190611a5c565b610109610169366004611a70565b610645565b61010961017c366004611a8d565b61069d565b60085461014e906001600160a01b031681565b60075461014e906001600160a01b031681565b6101af610c8e565b6040516101329190611ab9565b6101dc6101ca366004611a70565b60056020526000908152604090205481565b604051908152602001610132565b60065461014e906001600160a01b031681565b61012661020b366004611a30565b600360209081526000928352604080842090915290825290205460ff1681565b61023e610239366004611b1c565b610f45565b60408051928352602083019190915201610132565b60025461014e906001600160a01b031681565b61026e610fac565b6040516101329190611b35565b610109610289366004611a30565b611153565b600a5461014e906001600160a01b031681565b6101096102af366004611a70565b6114f1565b60005461014e906001600160a01b031681565b60025460405163d09a20c560e01b81526d31b0b6363130b1b5afb0b236b4b760911b916001600160a01b03169063d09a20c59061030a9084903390600401611b83565b600060405180830381600087803b15801561032457600080fd5b505af1158015610338573d6000803e3d6000fd5b5050835160009250829150815b818110156104815785818151811061035f5761035f611b9a565b60200260200101519350836001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016103959190611a5c565b602060405180830381865afa1580156103b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d69190611bb0565b6006549093506103f3906001600160a01b038681169116856115b1565b6040516370a0823160e01b81526001600160a01b038516906370a082319061041f903090600401611a5c565b602060405180830381865afa15801561043c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104609190611bb0565b6001600160a01b038516600090815260056020526040902055600101610345565b505050505050565b60025460405163d09a20c560e01b81527118d85b1b189858dad7ddda1a5d195b1a5cdd60721b916001600160a01b03169063d09a20c5906104d09084903390600401611b83565b600060405180830381600087803b1580156104ea57600080fd5b505af11580156104fe573d6000803e3d6000fd5b5050600954604051633c5ad43d60e11b8152600481018690526001600160a01b0390911692506378b5a87a9150602401602060405180830381865afa15801561054b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056f9190611bc9565b6001600160a01b0316836001600160a01b0316146105a0576040516363d2088f60e11b815260040160405180910390fd5b506001600160a01b03909116600090815260036020908152604080832093835292905220805460ff19169055565b6000805460405163e52223bb60e01b81526001600160a01b039091169063e52223bb906105ff903090600401611a5c565b602060405180830381865afa15801561061c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106409190611bf6565b905090565b6000546001600160a01b0316331461067b573360405163053e900f60e21b81526004016106729190611a5c565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001146106dc5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610672565b600260015533600090815260036020908152604080832086845290915290205460ff1661071f57604051632c60e16760e01b815260048101849052602401610672565b6009546040516329023ca160e11b81526004810185905260009182916001600160a01b0390911690635204794290602401602060405180830381865afa15801561076d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107919190611bc9565b6001600160a01b031663acc5570c866040518263ffffffff1660e01b81526004016107be91815260200190565b60c060405180830381865afa1580156107db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ff9190611c11565b50506001600160a01b038116600090815260056020526040902054919550935061082c9250869150611c99565b6040516370a0823160e01b81526001600160a01b038316906370a0823190610858903090600401611a5c565b602060405180830381865afa158015610875573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108999190611bb0565b10156108b857604051638136384960e01b815260040160405180910390fd5b816001600160a01b0316816001600160a01b03161480156108e65750600a546001600160a01b038281169116145b156109b75760075460405162a952f560e11b81526001600160a01b0390911690630152a5ea9061091c9030908890600401611cbf565b600060405180830381600087803b15801561093657600080fd5b505af115801561094a573d6000803e3d6000fd5b505060075460405163bbaed5cb60e01b81526001600160a01b03909116925063bbaed5cb91506109809033908790600401611cbf565b600060405180830381600087803b15801561099a57600080fd5b505af11580156109ae573d6000803e3d6000fd5b50505050610ac8565b600a546001600160a01b0390811690821603610a6457600654604051632f42aef560e01b81526001600160a01b0390911690632f42aef590610a0190339086908890600401611cd8565b600060405180830381600087803b158015610a1b57600080fd5b505af1158015610a2f573d6000803e3d6000fd5b505060075460405162a952f560e11b81526001600160a01b039091169250630152a5ea91506109809030908890600401611cbf565b600a546001600160a01b0390811690831603610aac5760075460405163bbaed5cb60e01b81526001600160a01b039091169063bbaed5cb906109809033908790600401611cbf565b604051632c60e16760e01b815260048101869052602401610672565b6040516370a0823160e01b81526001600160a01b038216906370a0823190610af4903090600401611a5c565b602060405180830381865afa158015610b11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b359190611bb0565b6001600160a01b03808316600090815260056020526040908190209290925590516370a0823160e01b8152908316906370a0823190610b78903090600401611a5c565b602060405180830381865afa158015610b95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb99190611bb0565b6001600160a01b038316600090815260056020908152604080832093909355878252600490529081208054869290610bf2908490611c99565b9091555050600085815260046020526040902083906001016000828254610c199190611c99565b909155505060085460405163ab10477160e01b815260048101879052602481018590526001600160a01b039091169063ab10477190604401600060405180830381600087803b158015610c6b57600080fd5b505af1158015610c7f573d6000803e3d6000fd5b50506001805550505050505050565b60606000600660009054906101000a90046001600160a01b03166001600160a01b0316631ae7ec2e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ce5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d099190611cfc565b90506000600760009054906101000a90046001600160a01b03166001600160a01b0316631ae7ec2e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d849190611cfc565b60408051600580825260c08201909252919250816020015b6040805180820190915260008082526020820152815260200190600190039081610d9c575050604080518082019091526001600160d81b031984168152637375903d60e11b60208201528151919450908490600090610dfd57610dfd611b9a565b60200260200101819052506040518060400160405280836001600160d81b0319168152602001632f42aef560e01b6001600160e01b03191681525083600181518110610e4b57610e4b611b9a565b60200260200101819052506040518060400160405280826001600160d81b031916815260200163bbaed5cb60e01b6001600160e01b03191681525083600281518110610e9957610e99611b9a565b60200260200101819052506040518060400160405280826001600160d81b0319168152602001630152a5ea60e01b6001600160e01b03191681525083600381518110610ee757610ee7611b9a565b60200260200101819052506040518060400160405280826001600160d81b031916815260200163359fe78060e01b6001600160e01b03191681525083600481518110610f3557610f35611b9a565b6020026020010181905250505090565b600081815260046020526040808220815180830192839052839283929060029082845b815481526020019060010190808311610f68575050505050905080600060028110610f9557610f95611b9a565b602002015181600160200201519250925050915091565b6040805160038082526080820190925260609160208201838036833701905050905064545253525960d81b81600081518110610fea57610fea611b9a565b6001600160d81b0319909216602092830291909101909101526110126426a4a72a2960d91b90565b8160018151811061102557611025611b9a565b6001600160d81b03199092166020928302919091019091015261104d64524f4c455360d81b90565b8160028151811061106057611060611b9a565b60200260200101906001600160d81b03191690816001600160d81b031916815250506110a58160008151811061109857611098611b9a565b60200260200101516116c8565b600660006101000a8154816001600160a01b0302191690836001600160a01b031602179055506110e18160018151811061109857611098611b9a565b600760006101000a8154816001600160a01b0302191690836001600160a01b0316021790555061111d8160028151811061109857611098611b9a565b600280546001600160a01b0319166001600160a01b03928316179055600754600a5461115092908116911660001961176b565b90565b60025460405163d09a20c560e01b81527118d85b1b189858dad7ddda1a5d195b1a5cdd60721b916001600160a01b03169063d09a20c59061119a9084903390600401611b83565b600060405180830381600087803b1580156111b457600080fd5b505af11580156111c8573d6000803e3d6000fd5b5050600954604051633c5ad43d60e11b8152600481018690526001600160a01b0390911692506378b5a87a9150602401602060405180830381865afa158015611215573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112399190611bc9565b6001600160a01b0316836001600160a01b03161461126a576040516363d2088f60e11b815260040160405180910390fd5b6001600160a01b038381166000908152600360209081526040808320868452909152808220805460ff1916600117905560095490516329023ca160e11b81526004810186905291928392911690635204794290602401602060405180830381865afa1580156112dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113019190611bc9565b6001600160a01b03168460405160240161131d91815260200190565b60408051601f198184030181529181526020820180516001600160e01b031663b1283e7760e01b179052516113529190611d26565b6000604051808303816000865af19150503d806000811461138f576040519150601f19603f3d011682016040523d82523d6000602084013e611394565b606091505b5091509150816113b7576040516363d2088f60e11b815260040160405180910390fd5b6000806000806000858060200190518101906113d39190611d61565b9b505050509850509750975050509550506000846113f157836113fc565b6113fc84838561187a565b600a549091506001600160a01b039081169087160361147d57600754604051626b3fcf60e71b81526001600160a01b039091169063359fe780906114469030908590600401611cbf565b600060405180830381600087803b15801561146057600080fd5b505af1158015611474573d6000803e3d6000fd5b505050506114e4565b600654604051637375903d60e11b81526001600160a01b039091169063e6eb207a906114b19030908a908690600401611cd8565b600060405180830381600087803b1580156114cb57600080fd5b505af11580156114df573d6000803e3d6000fd5b505050505b5050505050505050505050565b60025460405163d09a20c560e01b81526d31b0b6363130b1b5afb0b236b4b760911b916001600160a01b03169063d09a20c5906115349084903390600401611b83565b600060405180830381600087803b15801561154e57600080fd5b505af1158015611562573d6000803e3d6000fd5b5050506001600160a01b038316905061158e576040516363d2088f60e11b815260040160405180910390fd5b50600880546001600160a01b0319166001600160a01b0392909216919091179055565b600080846001600160a01b031663a9059cbb60e01b85856040516024016115d9929190611cbf565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516116179190611d26565b6000604051808303816000865af19150503d8060008114611654576040519150601f19603f3d011682016040523d82523d6000602084013e611659565b606091505b50915091508180156116835750805115806116835750808060200190518101906116839190611bf6565b6116c15760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610672565b5050505050565b60008054604051632d37002d60e21b815282916001600160a01b03169063b4dc00b4906116f9908690600401611e17565b602060405180830381865afa158015611716573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061173a9190611bc9565b90506001600160a01b0381166117655782604051635c3fa9cd60e01b81526004016106729190611e17565b92915050565b600080846001600160a01b031663095ea7b360e01b8585604051602401611793929190611cbf565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516117d19190611d26565b6000604051808303816000865af19150503d806000811461180e576040519150601f19603f3d011682016040523d82523d6000602084013e611813565b606091505b509150915081801561183d57508051158061183d57508080602001905181019061183d9190611bf6565b6116c15760405162461bcd60e51b815260206004820152600e60248201526d1054141493d59157d1905253115160921b6044820152606401610672565b60008080600019858709858702925082811083820303915050806000036118b357600084116118a857600080fd5b508290049050611927565b8084116118bf57600080fd5b600084868809851960019081018716968790049682860381900495909211909303600082900391909104909201919091029190911760038402600290811880860282030280860282030280860282030280860282030280860282030280860290910302029150505b9392505050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461195957600080fd5b50565b803561196781611944565b919050565b6000602080838503121561197f57600080fd5b82356001600160401b038082111561199657600080fd5b818501915085601f8301126119aa57600080fd5b8135818111156119bc576119bc61192e565b8060051b604051601f19603f830116810181811085821117156119e1576119e161192e565b6040529182528482019250838101850191888311156119ff57600080fd5b938501935b82851015611a2457611a158561195c565b84529385019392850192611a04565b98975050505050505050565b60008060408385031215611a4357600080fd5b8235611a4e81611944565b946020939093013593505050565b6001600160a01b0391909116815260200190565b600060208284031215611a8257600080fd5b813561192781611944565b600080600060608486031215611aa257600080fd5b505081359360208301359350604090920135919050565b602080825282518282018190526000919060409081850190868401855b82811015611b0f57815180516001600160d81b03191685528601516001600160e01b031916868501529284019290850190600101611ad6565b5091979650505050505050565b600060208284031215611b2e57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b81811015611b775783516001600160d81b03191683529284019291840191600101611b51565b50909695505050505050565b9182526001600160a01b0316602082015260400190565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611bc257600080fd5b5051919050565b600060208284031215611bdb57600080fd5b815161192781611944565b8051801515811461196757600080fd5b600060208284031215611c0857600080fd5b61192782611be6565b60008060008060008060c08789031215611c2a57600080fd5b8651611c3581611944565b6020880151909650611c4681611944565b6040880151909550611c5781611944565b6060880151909450611c6881611944565b608088015190935065ffffffffffff81168114611c8457600080fd5b8092505060a087015190509295509295509295565b60008219821115611cba57634e487b7160e01b600052601160045260246000fd5b500190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b600060208284031215611d0e57600080fd5b81516001600160d81b03198116811461192757600080fd5b6000825160005b81811015611d475760208186018101518583015201611d2d565b81811115611d56576000828501525b509190910192915050565b6000806000806000806000806000806000806101808d8f031215611d8457600080fd5b8c51611d8f81611944565b60208e0151909c50611da081611944565b60408e0151909b50611db181611944565b60608e0151909a50611dc281611944565b9850611dd060808e01611be6565b975060a08d0151965060c08d0151955060e08d015194506101008d015193506101208d015192506101408d015191506101608d015190509295989b509295989b509295989b565b6001600160d81b03199190911681526020019056fea2646970667358221220609bf775c6db03d9a90742a22b00b22eb7f5d9a50f177e6113648e312b8e63c164736f6c634300080f0033";

type BondCallbackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BondCallbackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BondCallback__factory extends ContractFactory {
  constructor(...args: BondCallbackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    kernel_: PromiseOrValue<string>,
    aggregator_: PromiseOrValue<string>,
    gdao_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BondCallback> {
    return super.deploy(
      kernel_,
      aggregator_,
      gdao_,
      overrides || {}
    ) as Promise<BondCallback>;
  }
  override getDeployTransaction(
    kernel_: PromiseOrValue<string>,
    aggregator_: PromiseOrValue<string>,
    gdao_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      kernel_,
      aggregator_,
      gdao_,
      overrides || {}
    );
  }
  override attach(address: string): BondCallback {
    return super.attach(address) as BondCallback;
  }
  override connect(signer: Signer): BondCallback__factory {
    return super.connect(signer) as BondCallback__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BondCallbackInterface {
    return new utils.Interface(_abi) as BondCallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BondCallback {
    return new Contract(address, _abi, signerOrProvider) as BondCallback;
  }
}