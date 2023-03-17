/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ZuniswapV2Router,
  ZuniswapV2RouterInterface,
} from "../ZuniswapV2Router";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factoryAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ExcessiveInputAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientAAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientBAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientOutputAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "SafeTransferFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountADesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBDesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountAMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountAMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "removeLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountInMax",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "swapTokensForExactTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161330338038061330383398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b613270806100936000396000f3fe60806040523480156200001157600080fd5b5060043610620000525760003560e01c806342712a671462000057578063472b43f31462000086578063c0e3ee6b146200009d578063ca3d653914620000ca575b600080fd5b6200006e6200006836600462000d7a565b620000f2565b6040516200007d919062000e1e565b60405180910390f35b6200006e6200009736600462000d7a565b620002ea565b620000b4620000ae36600462000e64565b620003d0565b604080519283526020830191909152016200007d565b620000e1620000db36600462000ed2565b62000532565b6040516200007d9392919062000f4b565b600054604051630c90945960e11b815260609173__$df304eaf27f8038f137cf78d8c40bc5dc3$__9163192128b29162000141916001600160a01b03909116908a908990899060040162000f61565b600060405180830381865af41580156200015f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000189919081019062000fde565b90508481600183516200019d9190620010bd565b81518110620001b057620001b0620010d7565b60200260200101511115620001d85760405163e1b0da4f60e01b815260040160405180910390fd5b620002a084846000818110620001f257620001f2620010d7565b9050602002016020810190620002099190620010ed565b6000805433916200027c916001600160a01b0316908990899081620002325762000232620010d7565b9050602002016020810190620002499190620010ed565b898960018181106200025f576200025f620010d7565b9050602002016020810190620002769190620010ed565b6200070d565b84600081518110620002925762000292620010d7565b6020026020010151620007ef565b620002e181858580806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250879250620008e7915050565b95945050505050565b600054604051635dbdce3b60e11b815260609173__$df304eaf27f8038f137cf78d8c40bc5dc3$__9163bb7b9c769162000339916001600160a01b03909116908a908990899060040162000f61565b600060405180830381865af415801562000357573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000381919081019062000fde565b9050848160018351620003959190620010bd565b81518110620003a857620003a8620010d7565b60200260200101511015620001d8576040516342301c2360e01b815260040160405180910390fd5b6000805481908190620003ee906001600160a01b03168a8a6200070d565b6040516323b872dd60e01b81529091506001600160a01b038216906323b872dd906200042390339085908c9060040162001114565b6020604051808303816000875af115801562000443573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000469919062001138565b5060405163226bf2d160e21b81526001600160a01b038216906389afcb4490620004989087906004016200115c565b60408051808303816000875af1158015620004b7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004dd919062001170565b9093509150858310156200050457604051638dc525d160e01b815260040160405180910390fd5b84831015620005265760405163ef71d09160e01b815260040160405180910390fd5b50965096945050505050565b600080546040516334a2a5c360e11b81528291829182916001600160a01b0316906369454b86906200056b908e908e9060040162001195565b602060405180830381865afa15801562000589573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005af9190620011af565b6001600160a01b0316036200063a576000546040516364e329cb60e11b81526001600160a01b039091169063c9c6539690620005f2908d908d9060040162001195565b6020604051808303816000875af115801562000612573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006389190620011af565b505b6200064a8a8a8a8a8a8a62000ad8565b60008054929550909350906200066b906001600160a01b03168c8c6200070d565b90506200067b8b338387620007ef565b620006898a338386620007ef565b6040516335313c2160e11b81526001600160a01b03821690636a62784290620006b79088906004016200115c565b6020604051808303816000875af1158015620006d7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006fd9190620011cf565b9150509750975097945050505050565b60008060006200071e858562000d20565b6040516001600160601b0319606084811b8216602084015283901b166034820152919350915086906048016040516020818303038152906040528051906020012060405180602001620007719062000d53565b6020820181038252601f19601f8201166040525080519060200120604051602001620007cd939291906001600160f81b0319815260609390931b6001600160601b03191660018401526015830191909152603582015260550190565b60408051601f1981840301815291905280516020909101209695505050505050565b600080856001600160a01b0316858585604051602401620008139392919062001114565b60408051601f198184030181529181526020820180516001600160e01b03166323b872dd60e01b179052516200084a9190620011e9565b6000604051808303816000865af19150503d806000811462000889576040519150601f19603f3d011682016040523d82523d6000602084013e6200088e565b606091505b5091509150811580620008c05750805115801590620008c0575080806020019051810190620008be919062001138565b155b15620008df5760405163fb7f507960e01b815260040160405180910390fd5b505050505050565b60005b60018351620008fa9190620010bd565b81101562000ad2576000808483815181106200091a576200091a620010d7565b60200260200101518584600162000932919062001227565b81518110620009455762000945620010d7565b60200260200101519150915060006200095f838362000d20565b5090506000876200097286600162001227565b81518110620009855762000985620010d7565b60200260200101519050600080836001600160a01b0316866001600160a01b031614620009b557826000620009b9565b6000835b91509150600060028a51620009cf9190620010bd565b8810620009dd578862000a1e565b60005462000a1e906001600160a01b0316878c620009fd8c600262001227565b8151811062000a105762000a10620010d7565b60200260200101516200070d565b60005490915062000a3a906001600160a01b031688886200070d565b60405163022c0d9f60e01b815260048101859052602481018490526001600160a01b0383811660448301526080606483015260006084830152919091169063022c0d9f9060a401600060405180830381600087803b15801562000a9c57600080fd5b505af115801562000ab1573d6000803e3d6000fd5b5050505050505050505050808062000ac99062001242565b915050620008ea565b50505050565b60008054604051633274946160e01b81526001600160a01b0391821660048201528882166024820152908716604482015281908190819073__$df304eaf27f8038f137cf78d8c40bc5dc3$__906332749461906064016040805180830381865af415801562000b4b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000b71919062001170565b9150915081600014801562000b84575080155b1562000b965787935086925062000d13565b604051632b58577b60e21b815260009073__$df304eaf27f8038f137cf78d8c40bc5dc3$__9063ad615dec9062000bd6908c908790879060040162000f4b565b602060405180830381865af415801562000bf4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000c1a9190620011cf565b905087811162000c515785811162000c455760405163ef71d09160e01b815260040160405180910390fd5b88945092508262000d11565b604051632b58577b60e21b815260009073__$df304eaf27f8038f137cf78d8c40bc5dc3$__9063ad615dec9062000c91908c908790899060040162000f4b565b602060405180830381865af415801562000caf573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000cd59190620011cf565b90508981111562000cea5762000cea6200125e565b87811162000d0b57604051638dc525d160e01b815260040160405180910390fd5b94508793505b505b5050965096945050505050565b600080826001600160a01b0316846001600160a01b03161062000d4557828462000d48565b83835b915091509250929050565b611fc6806200127583390190565b6001600160a01b038116811462000d7757600080fd5b50565b60008060008060006080868803121562000d9357600080fd5b853594506020860135935060408601356001600160401b038082111562000db957600080fd5b818801915088601f83011262000dce57600080fd5b81358181111562000dde57600080fd5b8960208260051b850101111562000df457600080fd5b602083019550809450505050606086013562000e108162000d61565b809150509295509295909350565b6020808252825182820181905260009190848201906040850190845b8181101562000e585783518352928401929184019160010162000e3a565b50909695505050505050565b60008060008060008060c0878903121562000e7e57600080fd5b863562000e8b8162000d61565b9550602087013562000e9d8162000d61565b945060408701359350606087013592506080870135915060a087013562000ec48162000d61565b809150509295509295509295565b600080600080600080600060e0888a03121562000eee57600080fd5b873562000efb8162000d61565b9650602088013562000f0d8162000d61565b955060408801359450606088013593506080880135925060a0880135915060c088013562000f3b8162000d61565b8091505092959891949750929550565b9283526020830191909152604082015260600190565b6001600160a01b03858116825260208083018690526060604084018190528301849052600091859160808501845b8781101562000fba57843562000fa58162000d61565b84168252938201939082019060010162000f8f565b509998505050505050505050565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121562000ff257600080fd5b82516001600160401b03808211156200100a57600080fd5b818501915085601f8301126200101f57600080fd5b81518181111562001034576200103462000fc8565b8060051b604051601f19603f830116810181811085821117156200105c576200105c62000fc8565b6040529182528482019250838101850191888311156200107b57600080fd5b938501935b828510156200109b5784518452938501939285019262001080565b98975050505050505050565b634e487b7160e01b600052601160045260246000fd5b600082821015620010d257620010d2620010a7565b500390565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156200110057600080fd5b81356200110d8162000d61565b9392505050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6000602082840312156200114b57600080fd5b815180151581146200110d57600080fd5b6001600160a01b0391909116815260200190565b600080604083850312156200118457600080fd5b505080516020909101519092909150565b6001600160a01b0392831681529116602082015260400190565b600060208284031215620011c257600080fd5b81516200110d8162000d61565b600060208284031215620011e257600080fd5b5051919050565b6000825160005b818110156200120c5760208186018101518583015201620011f0565b818111156200121c576000828501525b509190910192915050565b600082198211156200123d576200123d620010a7565b500190565b600060018201620012575762001257620010a7565b5060010190565b634e487b7160e01b600052600160045260246000fdfe60e06040523480156200001157600080fd5b506040518060400160405280600f81526020016e2d3ab734b9bbb0b82b19102830b4b960891b815250604051806040016040528060068152602001652d2aa724ab1960d11b815250601282600090816200006c9190620001df565b5060016200007b8382620001df565b5060ff81166080524660a052620000916200009e565b60c0525062000329915050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620000d29190620002ab565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200016557607f821691505b6020821081036200018657634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001da57600081815260208120601f850160051c81016020861015620001b55750805b601f850160051c820191505b81811015620001d657828155600101620001c1565b5050505b505050565b81516001600160401b03811115620001fb57620001fb6200013a565b62000213816200020c845462000150565b846200018c565b602080601f8311600181146200024b5760008415620002325750858301515b600019600386901b1c1916600185901b178555620001d6565b600085815260208120601f198616915b828110156200027c578886015182559484019460019091019084016200025b565b50858210156200029b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620002bb8162000150565b60018281168015620002d65760018114620002ec576200031d565b60ff19841687528215158302870194506200031d565b8760005260208060002060005b85811015620003145781548a820152908401908201620002f9565b50505082870194505b50929695505050505050565b60805160a05160c051611c6d6200035960003960006109640152600061092f015260006101f00152611c6d6000f3fe608060405234801561001057600080fd5b50600436106101125760003560e01c8063022c0d9f1461011757806306fdde031461012c5780630902f1ac1461014a578063095ea7b31461017e5780630dfe1681146101a157806318160ddd146101c157806323b872dd146101d8578063313ce567146101eb5780633644e51514610224578063485cc9551461022c5780635909c0d51461023f5780635a3d5493146102485780636a6278421461025157806370a08231146102645780637ecebe001461028457806389afcb44146102a457806395d89b41146102cc578063a9059cbb146102d4578063d21220a7146102e7578063d505accf146102fa578063dd62ed3e1461030d578063fff6cae914610338575b600080fd5b61012a61012536600461176d565b610340565b005b610134610739565b6040516101419190611830565b60405180910390f35b6101526107c7565b604080516001600160701b03948516815293909216602084015263ffffffff1690820152606001610141565b61019161018c366004611863565b6107f1565b6040519015158152602001610141565b6006546101b4906001600160a01b031681565b604051610141919061188d565b6101ca60025481565b604051908152602001610141565b6101916101e63660046118a1565b61084b565b6102127f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610141565b6101ca61092b565b61012a61023a3660046118dd565b610986565b6101ca60095481565b6101ca600a5481565b6101ca61025f366004611910565b6109f4565b6101ca610272366004611910565b60036020526000908152604090205481565b6101ca610292366004611910565b60056020526000908152604090205481565b6102b76102b2366004611910565b610c39565b60408051928352602083019190915201610141565b610134610f2c565b6101916102e2366004611863565b610f39565b6007546101b4906001600160a01b031681565b61012a61030836600461192b565b610f9f565b6101ca61031b3660046118dd565b600460209081526000928352604080842090915290825290205481565b61012a6111d0565b600b5460ff161561035057600080fd5b600b805460ff1916600117905584158015610369575083155b15610387576040516342301c2360e01b815260040160405180910390fd5b6000806103926107c7565b5091509150816001600160701b03168711806103b65750806001600160701b031686115b156103d45760405163bb55fd2760e01b815260040160405180910390fd5b86156103f1576006546103f1906001600160a01b031686896112d7565b851561040e5760075461040e906001600160a01b031686886112d7565b821561047b57604051630c68e5d560e41b81526001600160a01b0386169063c68e5d50906104489033908b908b908a908a9060040161199e565b600060405180830381600087803b15801561046257600080fd5b505af1158015610476573d6000803e3d6000fd5b505050505b6006546040516370a0823160e01b81526000916001600160a01b0316906370a08231906104ac90309060040161188d565b6020604051808303816000875af11580156104cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ef91906119ea565b6007546040516370a0823160e01b81529192506000916001600160a01b03909116906370a082319061052590309060040161188d565b6020604051808303816000875af1158015610544573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056891906119ea565b600854909150600090610585908b906001600160701b0316611a19565b83116105925760006105b3565b6008546105a9908b906001600160701b0316611a19565b6105b39084611a19565b6008549091506000906105d7908b90600160701b90046001600160701b0316611a19565b83116105e457600061060c565b600854610602908b90600160701b90046001600160701b0316611a19565b61060c9084611a19565b90508115801561061a575080155b156106385760405163098fb56160e01b815260040160405180910390fd5b6000610645836003611a30565b610651866103e8611a30565b61065b9190611a19565b9050600061066a836003611a30565b610676866103e8611a30565b6106809190611a19565b90506106986001600160701b03808916908a16611a30565b6106a590620f4240611a30565b6106af8284611a30565b10156106ce57604051632f62f0d960e21b815260040160405180910390fd5b6106da86868a8a6113c6565b604080518e8152602081018e90526001600160a01b038d169133917f2a9237ff5aa599ef4c5ee4b1142b53429d5755e2685fe6288b2e3320202115f5910160405180910390a35050600b805460ff191690555050505050505050505050565b6000805461074690611a4f565b80601f016020809104026020016040519081016040528092919081815260200182805461077290611a4f565b80156107bf5780601f10610794576101008083540402835291602001916107bf565b820191906000526020600020905b8154815290600101906020018083116107a257829003601f168201915b505050505081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b3360008181526004602090815260408083206001600160a01b03871680855292528083208590555191929091600080516020611c188339815191529061083a9086815260200190565b60405180910390a350600192915050565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146108a7576108828382611a19565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906108cf908490611a19565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611bf8833981519152906109189087815260200190565b60405180910390a3506001949350505050565b60007f000000000000000000000000000000000000000000000000000000000000000046146109615761095c611544565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6006546001600160a01b03161515806109a957506007546001600160a01b031615155b156109c65760405162dc149f60e41b815260040160405180910390fd5b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b6000806000610a016107c7565b506006546040516370a0823160e01b81529294509092506000916001600160a01b03909116906370a0823190610a3b90309060040161188d565b6020604051808303816000875af1158015610a5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7e91906119ea565b6007546040516370a0823160e01b81529192506000916001600160a01b03909116906370a0823190610ab490309060040161188d565b6020604051808303816000875af1158015610ad3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af791906119ea565b90506000610b0e6001600160701b03861684611a19565b90506000610b256001600160701b03861684611a19565b9050600254600003610b64576103e8610b46610b418385611a30565b6115de565b610b509190611a19565b9650610b5f60006103e861164e565b610bb3565b610bb0866001600160701b031660025484610b7f9190611a30565b610b899190611a99565b866001600160701b031660025484610ba19190611a30565b610bab9190611a99565b6116a8565b96505b60008711610bd457604051633489be7560e21b815260040160405180910390fd5b610bde888861164e565b610bea848488886113c6565b60408051838152602081018390526001600160a01b038a16917f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f910160405180910390a2505050505050919050565b6006546040516370a0823160e01b8152600091829182916001600160a01b0316906370a0823190610c6e90309060040161188d565b6020604051808303816000875af1158015610c8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb191906119ea565b6007546040516370a0823160e01b81529192506000916001600160a01b03909116906370a0823190610ce790309060040161188d565b6020604051808303816000875af1158015610d06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2a91906119ea565b3060009081526003602052604090205460025491925090610d4b8483611a30565b610d559190611a99565b600254909550610d658383611a30565b610d6f9190611a99565b9350841580610d7c575083155b15610d9a5760405163749383ad60e01b815260040160405180910390fd5b610da430826116c0565b600654610dbb906001600160a01b031687876112d7565b600754610dd2906001600160a01b031687866112d7565b6006546040516370a0823160e01b81526001600160a01b03909116906370a0823190610e0290309060040161188d565b6020604051808303816000875af1158015610e21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4591906119ea565b6007546040516370a0823160e01b81529194506001600160a01b0316906370a0823190610e7690309060040161188d565b6020604051808303816000875af1158015610e95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb991906119ea565b9150600080610ec66107c7565b5091509150610ed7858584846113c6565b60408051888152602081018890526001600160a01b038a1681830152905133917fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496919081900360600190a25050505050915091565b6001805461074690611a4f565b33600090815260036020526040812080548391908390610f5a908490611a19565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611bf88339815191529061083a9086815260200190565b42841015610fee5760405162461bcd60e51b815260206004820152601760248201527614115493525517d11150511312539157d1561412549151604a1b60448201526064015b60405180910390fd5b60006001610ffa61092b565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611106573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061113c5750876001600160a01b0316816001600160a01b0316145b6111795760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610fe5565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a1691600080516020611c18833981519152910160405180910390a350505050505050565b6000806111db6107c7565b506006546040516370a0823160e01b81529294509092506112d3916001600160a01b03909116906370a082319061121690309060040161188d565b6020604051808303816000875af1158015611235573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125991906119ea565b6007546040516370a0823160e01b81526001600160a01b03909116906370a082319061128990309060040161188d565b6020604051808303816000875af11580156112a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cc91906119ea565b84846113c6565b5050565b6040516001600160a01b03838116602483015260448201839052600091829186169060640160408051601f198184030181529181526020820180516001600160e01b031663a9059cbb60e01b179052516113319190611aad565b6000604051808303816000865af19150503d806000811461136e576040519150601f19603f3d011682016040523d82523d6000602084013e611373565b606091505b50915091508115806113a157508051158015906113a157508080602001905181019061139f9190611ac9565b155b156113bf576040516312171d8360e31b815260040160405180910390fd5b5050505050565b6001600160701b038411806113e157506001600160701b0383115b156113ff576040516389560ca160e01b815260040160405180910390fd5b60085463ffffffff600160e01b909104811642039081161580159061142d57506000836001600160701b0316115b801561144257506000826001600160701b0316115b156114ad578063ffffffff1661146a8461145b85611722565b6001600160e01b031690611741565b600980546001600160e01b03929092169290920201905563ffffffff81166114958361145b86611722565b600a80546001600160e01b0392909216929092020190555b506008805463ffffffff4216600160e01b026001600160e01b036001600160701b03878116600160701b9081026001600160e01b03199095168a83161794909417918216831794859055604080519382169282169290921783529290930490911660208201527fcf2aa50876cdfbb541206f89af0ee78d44a2abf8d328e37fa4917f982149848a910160405180910390a150505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516115769190611aeb565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000600382111561163f57508060006115f8600283611a99565b611603906001611b8a565b90505b818110156116395790508060028161161e8186611a99565b6116289190611b8a565b6116329190611a99565b9050611606565b50919050565b8115611649575060015b919050565b80600260008282546116609190611b8a565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020611bf883398151915291015b60405180910390a35050565b60008183106116b757816116b9565b825b9392505050565b6001600160a01b038216600090815260036020526040812080548392906116e8908490611a19565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611bf88339815191529060200161169c565b600061173b600160701b6001600160701b038416611ba2565b92915050565b60006116b96001600160701b03831684611bd1565b80356001600160a01b038116811461164957600080fd5b60008060008060006080868803121561178557600080fd5b853594506020860135935061179c60408701611756565b925060608601356001600160401b03808211156117b857600080fd5b818801915088601f8301126117cc57600080fd5b8135818111156117db57600080fd5b8960208285010111156117ed57600080fd5b9699959850939650602001949392505050565b60005b8381101561181b578181015183820152602001611803565b8381111561182a576000848401525b50505050565b602081526000825180602084015261184f816040850160208701611800565b601f01601f19169190910160400192915050565b6000806040838503121561187657600080fd5b61187f83611756565b946020939093013593505050565b6001600160a01b0391909116815260200190565b6000806000606084860312156118b657600080fd5b6118bf84611756565b92506118cd60208501611756565b9150604084013590509250925092565b600080604083850312156118f057600080fd5b6118f983611756565b915061190760208401611756565b90509250929050565b60006020828403121561192257600080fd5b6116b982611756565b600080600080600080600060e0888a03121561194657600080fd5b61194f88611756565b965061195d60208901611756565b95506040880135945060608801359350608088013560ff8116811461198157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60018060a01b038616815284602082015283604082015260806060820152816080820152818360a0830137600081830160a090810191909152601f909201601f19160101949350505050565b6000602082840312156119fc57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600082821015611a2b57611a2b611a03565b500390565b6000816000190483118215151615611a4a57611a4a611a03565b500290565b600181811c90821680611a6357607f821691505b60208210810361163957634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600082611aa857611aa8611a83565b500490565b60008251611abf818460208701611800565b9190910192915050565b600060208284031215611adb57600080fd5b815180151581146116b957600080fd5b600080835481600182811c915080831680611b0757607f831692505b60208084108203611b2657634e487b7160e01b86526022600452602486fd5b818015611b3a5760018114611b4f57611b7c565b60ff1986168952841515850289019650611b7c565b60008a81526020902060005b86811015611b745781548b820152908501908301611b5b565b505084890196505b509498975050505050505050565b60008219821115611b9d57611b9d611a03565b500190565b60006001600160e01b0382811684821681151582840482111615611bc857611bc8611a03565b02949350505050565b60006001600160e01b0383811680611beb57611beb611a83565b9216919091049291505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a26469706673582212208b98d02278a0f470f3c060e97dab2717bfec68a30058cf50970eac489b73c3db64736f6c634300080f0033a264697066735822122070828fc75e2b47343c202e6ef6704aa7eee301ddff9285a84129c01355c8732e64736f6c634300080f0033";

type ZuniswapV2RouterConstructorParams =
  | [linkLibraryAddresses: ZuniswapV2RouterLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZuniswapV2RouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class ZuniswapV2Router__factory extends ContractFactory {
  constructor(...args: ZuniswapV2RouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        ZuniswapV2Router__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: ZuniswapV2RouterLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$df304eaf27f8038f137cf78d8c40bc5dc3\\$__", "g"),
      linkLibraryAddresses[
        "src/test/lib/zuniswapv2/ZuniswapV2Library.sol:ZuniswapV2Library"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    factoryAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZuniswapV2Router> {
    return super.deploy(
      factoryAddress,
      overrides || {}
    ) as Promise<ZuniswapV2Router>;
  }
  override getDeployTransaction(
    factoryAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(factoryAddress, overrides || {});
  }
  override attach(address: string): ZuniswapV2Router {
    return super.attach(address) as ZuniswapV2Router;
  }
  override connect(signer: Signer): ZuniswapV2Router__factory {
    return super.connect(signer) as ZuniswapV2Router__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZuniswapV2RouterInterface {
    return new utils.Interface(_abi) as ZuniswapV2RouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZuniswapV2Router {
    return new Contract(address, _abi, signerOrProvider) as ZuniswapV2Router;
  }
}

export interface ZuniswapV2RouterLibraryAddresses {
  ["src/test/lib/zuniswapv2/ZuniswapV2Library.sol:ZuniswapV2Library"]: string;
}
