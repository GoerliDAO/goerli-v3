/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ZuniswapV2Library,
  ZuniswapV2LibraryInterface,
} from "../ZuniswapV2Library";

const _abi = [
  {
    inputs: [],
    name: "InsufficientAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPath",
    type: "error",
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
        name: "reserveIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveOut",
        type: "uint256",
      },
    ],
    name: "getAmountIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
        name: "reserveIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveOut",
        type: "uint256",
      },
    ],
    name: "getAmountOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
        name: "reserveIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveOut",
        type: "uint256",
      },
    ],
    name: "quote",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x612b4061003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610620000735760003560e01c8063054d50d41462000078578063192128b214620000a25780633274946114620000d657806385f8c2591462000111578063ad615dec1462000128578063bb7b9c76146200013f575b600080fd5b6200008f620000893660046200081a565b62000164565b6040519081526020015b60405180910390f35b818015620000af57600080fd5b50620000c7620000c13660046200087a565b6200020b565b6040516200009991906200096a565b818015620000e357600080fd5b50620000fb620000f5366004620009b0565b62000398565b6040805192835260208301919091520162000099565b6200008f620001223660046200081a565b62000470565b6200008f620001393660046200081a565b6200051e565b8180156200014c57600080fd5b50620000c76200015e3660046200087a565b6200058e565b6000836000036200018857604051632ca2f52b60e11b815260040160405180910390fd5b82158062000194575081155b15620001b35760405163bb55fd2760e01b815260040160405180910390fd5b6000620001c3856103e562000a10565b90506000620001d3848362000a10565b9050600082620001e6876103e862000a10565b620001f2919062000a32565b905062000200818362000a4d565b979650505050505050565b606060028251101562000231576040516320db826760e01b815260040160405180910390fd5b600082516001600160401b038111156200024f576200024f62000864565b60405190808252806020026020018201604052801562000279578160200160208202803683370190505b5090508381600183516200028e919062000a70565b81518110620002a157620002a162000a8a565b602002602001018181525050600060018451620002bf919062000a70565b90505b80156200038f576000806200031d8887620002df60018762000a70565b81518110620002f257620002f262000a8a565b60200260200101518886815181106200030f576200030f62000a8a565b602002602001015162000398565b915091506200034a8484815181106200033a576200033a62000a8a565b6020026020010151838362000470565b846200035860018662000a70565b815181106200036b576200036b62000a8a565b60200260200101818152505050508080620003869062000aa0565b915050620002c2565b50949350505050565b600080600080620003aa8686620006f7565b91509150600080620003be8985856200072a565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b81526004016060604051808303816000875af1158015620003fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000424919062000ad2565b506001600160701b031691506001600160701b03169150836001600160a01b0316886001600160a01b0316146200045d57808262000460565b81815b909a909950975050505050505050565b6000836000036200049457604051632ca2f52b60e11b815260040160405180910390fd5b821580620004a0575081155b15620004bf5760405163bb55fd2760e01b815260040160405180910390fd5b6000620004cd858562000a10565b620004db906103e862000a10565b90506000620004eb868562000a70565b620004f9906103e562000a10565b905062000507818362000a4d565b6200051490600162000a32565b9695505050505050565b6000836000036200054257604051632ca2f52b60e11b815260040160405180910390fd5b8215806200054e575081155b156200056d5760405163bb55fd2760e01b815260040160405180910390fd5b826200057a838662000a10565b62000586919062000a4d565b949350505050565b6060600282511015620005b4576040516320db826760e01b815260040160405180910390fd5b600082516001600160401b03811115620005d257620005d262000864565b604051908082528060200260200182016040528015620005fc578160200160208202803683370190505b509050838160008151811062000616576200061662000a8a565b60200260200101818152505060005b6001845162000635919062000a70565b8110156200038f5760008062000685888785815181106200065a576200065a62000a8a565b60200260200101518886600162000672919062000a32565b815181106200030f576200030f62000a8a565b91509150620006b2848481518110620006a257620006a262000a8a565b6020026020010151838362000164565b84620006c085600162000a32565b81518110620006d357620006d362000a8a565b60200260200101818152505050508080620006ee9062000b28565b91505062000625565b600080826001600160a01b0316846001600160a01b0316106200071c5782846200071f565b83835b915091509250929050565b60008060006200073b8585620006f7565b6040516001600160601b0319606084811b8216602084015283901b1660348201529193509150869060480160405160208183030381529060405280519060200120604051806020016200078e906200080c565b6020820181038252601f19601f8201166040525080519060200120604051602001620007ea939291906001600160f81b0319815260609390931b6001600160601b03191660018401526015830191909152603582015260550190565b60408051601f1981840301815291905280516020909101209695505050505050565b611fc68062000b4583390190565b6000806000606084860312156200083057600080fd5b505081359360208301359350604090920135919050565b80356001600160a01b03811681146200085f57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6000806000606084860312156200089057600080fd5b6200089b8462000847565b9250602084810135925060408501356001600160401b0380821115620008c057600080fd5b818701915087601f830112620008d557600080fd5b813581811115620008ea57620008ea62000864565b8060051b604051601f19603f8301168101818110858211171562000912576200091262000864565b60405291825284820192508381018501918a8311156200093157600080fd5b938501935b828510156200095a576200094a8562000847565b8452938501939285019262000936565b8096505050505050509250925092565b6020808252825182820181905260009190848201906040850190845b81811015620009a45783518352928401929184019160010162000986565b50909695505050505050565b600080600060608486031215620009c657600080fd5b620009d18462000847565b9250620009e16020850162000847565b9150620009f16040850162000847565b90509250925092565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161562000a2d5762000a2d620009fa565b500290565b6000821982111562000a485762000a48620009fa565b500190565b60008262000a6b57634e487b7160e01b600052601260045260246000fd5b500490565b60008282101562000a855762000a85620009fa565b500390565b634e487b7160e01b600052603260045260246000fd5b60008162000ab25762000ab2620009fa565b506000190190565b80516001600160701b03811681146200085f57600080fd5b60008060006060848603121562000ae857600080fd5b62000af38462000aba565b925062000b036020850162000aba565b9150604084015163ffffffff8116811462000b1d57600080fd5b809150509250925092565b60006001820162000b3d5762000b3d620009fa565b506001019056fe60e06040523480156200001157600080fd5b506040518060400160405280600f81526020016e2d3ab734b9bbb0b82b19102830b4b960891b815250604051806040016040528060068152602001652d2aa724ab1960d11b815250601282600090816200006c9190620001df565b5060016200007b8382620001df565b5060ff81166080524660a052620000916200009e565b60c0525062000329915050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620000d29190620002ab565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200016557607f821691505b6020821081036200018657634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001da57600081815260208120601f850160051c81016020861015620001b55750805b601f850160051c820191505b81811015620001d657828155600101620001c1565b5050505b505050565b81516001600160401b03811115620001fb57620001fb6200013a565b62000213816200020c845462000150565b846200018c565b602080601f8311600181146200024b5760008415620002325750858301515b600019600386901b1c1916600185901b178555620001d6565b600085815260208120601f198616915b828110156200027c578886015182559484019460019091019084016200025b565b50858210156200029b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620002bb8162000150565b60018281168015620002d65760018114620002ec576200031d565b60ff19841687528215158302870194506200031d565b8760005260208060002060005b85811015620003145781548a820152908401908201620002f9565b50505082870194505b50929695505050505050565b60805160a05160c051611c6d6200035960003960006109640152600061092f015260006101f00152611c6d6000f3fe608060405234801561001057600080fd5b50600436106101125760003560e01c8063022c0d9f1461011757806306fdde031461012c5780630902f1ac1461014a578063095ea7b31461017e5780630dfe1681146101a157806318160ddd146101c157806323b872dd146101d8578063313ce567146101eb5780633644e51514610224578063485cc9551461022c5780635909c0d51461023f5780635a3d5493146102485780636a6278421461025157806370a08231146102645780637ecebe001461028457806389afcb44146102a457806395d89b41146102cc578063a9059cbb146102d4578063d21220a7146102e7578063d505accf146102fa578063dd62ed3e1461030d578063fff6cae914610338575b600080fd5b61012a61012536600461176d565b610340565b005b610134610739565b6040516101419190611830565b60405180910390f35b6101526107c7565b604080516001600160701b03948516815293909216602084015263ffffffff1690820152606001610141565b61019161018c366004611863565b6107f1565b6040519015158152602001610141565b6006546101b4906001600160a01b031681565b604051610141919061188d565b6101ca60025481565b604051908152602001610141565b6101916101e63660046118a1565b61084b565b6102127f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610141565b6101ca61092b565b61012a61023a3660046118dd565b610986565b6101ca60095481565b6101ca600a5481565b6101ca61025f366004611910565b6109f4565b6101ca610272366004611910565b60036020526000908152604090205481565b6101ca610292366004611910565b60056020526000908152604090205481565b6102b76102b2366004611910565b610c39565b60408051928352602083019190915201610141565b610134610f2c565b6101916102e2366004611863565b610f39565b6007546101b4906001600160a01b031681565b61012a61030836600461192b565b610f9f565b6101ca61031b3660046118dd565b600460209081526000928352604080842090915290825290205481565b61012a6111d0565b600b5460ff161561035057600080fd5b600b805460ff1916600117905584158015610369575083155b15610387576040516342301c2360e01b815260040160405180910390fd5b6000806103926107c7565b5091509150816001600160701b03168711806103b65750806001600160701b031686115b156103d45760405163bb55fd2760e01b815260040160405180910390fd5b86156103f1576006546103f1906001600160a01b031686896112d7565b851561040e5760075461040e906001600160a01b031686886112d7565b821561047b57604051630c68e5d560e41b81526001600160a01b0386169063c68e5d50906104489033908b908b908a908a9060040161199e565b600060405180830381600087803b15801561046257600080fd5b505af1158015610476573d6000803e3d6000fd5b505050505b6006546040516370a0823160e01b81526000916001600160a01b0316906370a08231906104ac90309060040161188d565b6020604051808303816000875af11580156104cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ef91906119ea565b6007546040516370a0823160e01b81529192506000916001600160a01b03909116906370a082319061052590309060040161188d565b6020604051808303816000875af1158015610544573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056891906119ea565b600854909150600090610585908b906001600160701b0316611a19565b83116105925760006105b3565b6008546105a9908b906001600160701b0316611a19565b6105b39084611a19565b6008549091506000906105d7908b90600160701b90046001600160701b0316611a19565b83116105e457600061060c565b600854610602908b90600160701b90046001600160701b0316611a19565b61060c9084611a19565b90508115801561061a575080155b156106385760405163098fb56160e01b815260040160405180910390fd5b6000610645836003611a30565b610651866103e8611a30565b61065b9190611a19565b9050600061066a836003611a30565b610676866103e8611a30565b6106809190611a19565b90506106986001600160701b03808916908a16611a30565b6106a590620f4240611a30565b6106af8284611a30565b10156106ce57604051632f62f0d960e21b815260040160405180910390fd5b6106da86868a8a6113c6565b604080518e8152602081018e90526001600160a01b038d169133917f2a9237ff5aa599ef4c5ee4b1142b53429d5755e2685fe6288b2e3320202115f5910160405180910390a35050600b805460ff191690555050505050505050505050565b6000805461074690611a4f565b80601f016020809104026020016040519081016040528092919081815260200182805461077290611a4f565b80156107bf5780601f10610794576101008083540402835291602001916107bf565b820191906000526020600020905b8154815290600101906020018083116107a257829003601f168201915b505050505081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b3360008181526004602090815260408083206001600160a01b03871680855292528083208590555191929091600080516020611c188339815191529061083a9086815260200190565b60405180910390a350600192915050565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146108a7576108828382611a19565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906108cf908490611a19565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611bf8833981519152906109189087815260200190565b60405180910390a3506001949350505050565b60007f000000000000000000000000000000000000000000000000000000000000000046146109615761095c611544565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6006546001600160a01b03161515806109a957506007546001600160a01b031615155b156109c65760405162dc149f60e41b815260040160405180910390fd5b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b6000806000610a016107c7565b506006546040516370a0823160e01b81529294509092506000916001600160a01b03909116906370a0823190610a3b90309060040161188d565b6020604051808303816000875af1158015610a5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7e91906119ea565b6007546040516370a0823160e01b81529192506000916001600160a01b03909116906370a0823190610ab490309060040161188d565b6020604051808303816000875af1158015610ad3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af791906119ea565b90506000610b0e6001600160701b03861684611a19565b90506000610b256001600160701b03861684611a19565b9050600254600003610b64576103e8610b46610b418385611a30565b6115de565b610b509190611a19565b9650610b5f60006103e861164e565b610bb3565b610bb0866001600160701b031660025484610b7f9190611a30565b610b899190611a99565b866001600160701b031660025484610ba19190611a30565b610bab9190611a99565b6116a8565b96505b60008711610bd457604051633489be7560e21b815260040160405180910390fd5b610bde888861164e565b610bea848488886113c6565b60408051838152602081018390526001600160a01b038a16917f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f910160405180910390a2505050505050919050565b6006546040516370a0823160e01b8152600091829182916001600160a01b0316906370a0823190610c6e90309060040161188d565b6020604051808303816000875af1158015610c8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb191906119ea565b6007546040516370a0823160e01b81529192506000916001600160a01b03909116906370a0823190610ce790309060040161188d565b6020604051808303816000875af1158015610d06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2a91906119ea565b3060009081526003602052604090205460025491925090610d4b8483611a30565b610d559190611a99565b600254909550610d658383611a30565b610d6f9190611a99565b9350841580610d7c575083155b15610d9a5760405163749383ad60e01b815260040160405180910390fd5b610da430826116c0565b600654610dbb906001600160a01b031687876112d7565b600754610dd2906001600160a01b031687866112d7565b6006546040516370a0823160e01b81526001600160a01b03909116906370a0823190610e0290309060040161188d565b6020604051808303816000875af1158015610e21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4591906119ea565b6007546040516370a0823160e01b81529194506001600160a01b0316906370a0823190610e7690309060040161188d565b6020604051808303816000875af1158015610e95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb991906119ea565b9150600080610ec66107c7565b5091509150610ed7858584846113c6565b60408051888152602081018890526001600160a01b038a1681830152905133917fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496919081900360600190a25050505050915091565b6001805461074690611a4f565b33600090815260036020526040812080548391908390610f5a908490611a19565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611bf88339815191529061083a9086815260200190565b42841015610fee5760405162461bcd60e51b815260206004820152601760248201527614115493525517d11150511312539157d1561412549151604a1b60448201526064015b60405180910390fd5b60006001610ffa61092b565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611106573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061113c5750876001600160a01b0316816001600160a01b0316145b6111795760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610fe5565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a1691600080516020611c18833981519152910160405180910390a350505050505050565b6000806111db6107c7565b506006546040516370a0823160e01b81529294509092506112d3916001600160a01b03909116906370a082319061121690309060040161188d565b6020604051808303816000875af1158015611235573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125991906119ea565b6007546040516370a0823160e01b81526001600160a01b03909116906370a082319061128990309060040161188d565b6020604051808303816000875af11580156112a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cc91906119ea565b84846113c6565b5050565b6040516001600160a01b03838116602483015260448201839052600091829186169060640160408051601f198184030181529181526020820180516001600160e01b031663a9059cbb60e01b179052516113319190611aad565b6000604051808303816000865af19150503d806000811461136e576040519150601f19603f3d011682016040523d82523d6000602084013e611373565b606091505b50915091508115806113a157508051158015906113a157508080602001905181019061139f9190611ac9565b155b156113bf576040516312171d8360e31b815260040160405180910390fd5b5050505050565b6001600160701b038411806113e157506001600160701b0383115b156113ff576040516389560ca160e01b815260040160405180910390fd5b60085463ffffffff600160e01b909104811642039081161580159061142d57506000836001600160701b0316115b801561144257506000826001600160701b0316115b156114ad578063ffffffff1661146a8461145b85611722565b6001600160e01b031690611741565b600980546001600160e01b03929092169290920201905563ffffffff81166114958361145b86611722565b600a80546001600160e01b0392909216929092020190555b506008805463ffffffff4216600160e01b026001600160e01b036001600160701b03878116600160701b9081026001600160e01b03199095168a83161794909417918216831794859055604080519382169282169290921783529290930490911660208201527fcf2aa50876cdfbb541206f89af0ee78d44a2abf8d328e37fa4917f982149848a910160405180910390a150505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516115769190611aeb565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000600382111561163f57508060006115f8600283611a99565b611603906001611b8a565b90505b818110156116395790508060028161161e8186611a99565b6116289190611b8a565b6116329190611a99565b9050611606565b50919050565b8115611649575060015b919050565b80600260008282546116609190611b8a565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020611bf883398151915291015b60405180910390a35050565b60008183106116b757816116b9565b825b9392505050565b6001600160a01b038216600090815260036020526040812080548392906116e8908490611a19565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611bf88339815191529060200161169c565b600061173b600160701b6001600160701b038416611ba2565b92915050565b60006116b96001600160701b03831684611bd1565b80356001600160a01b038116811461164957600080fd5b60008060008060006080868803121561178557600080fd5b853594506020860135935061179c60408701611756565b925060608601356001600160401b03808211156117b857600080fd5b818801915088601f8301126117cc57600080fd5b8135818111156117db57600080fd5b8960208285010111156117ed57600080fd5b9699959850939650602001949392505050565b60005b8381101561181b578181015183820152602001611803565b8381111561182a576000848401525b50505050565b602081526000825180602084015261184f816040850160208701611800565b601f01601f19169190910160400192915050565b6000806040838503121561187657600080fd5b61187f83611756565b946020939093013593505050565b6001600160a01b0391909116815260200190565b6000806000606084860312156118b657600080fd5b6118bf84611756565b92506118cd60208501611756565b9150604084013590509250925092565b600080604083850312156118f057600080fd5b6118f983611756565b915061190760208401611756565b90509250929050565b60006020828403121561192257600080fd5b6116b982611756565b600080600080600080600060e0888a03121561194657600080fd5b61194f88611756565b965061195d60208901611756565b95506040880135945060608801359350608088013560ff8116811461198157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60018060a01b038616815284602082015283604082015260806060820152816080820152818360a0830137600081830160a090810191909152601f909201601f19160101949350505050565b6000602082840312156119fc57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600082821015611a2b57611a2b611a03565b500390565b6000816000190483118215151615611a4a57611a4a611a03565b500290565b600181811c90821680611a6357607f821691505b60208210810361163957634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600082611aa857611aa8611a83565b500490565b60008251611abf818460208701611800565b9190910192915050565b600060208284031215611adb57600080fd5b815180151581146116b957600080fd5b600080835481600182811c915080831680611b0757607f831692505b60208084108203611b2657634e487b7160e01b86526022600452602486fd5b818015611b3a5760018114611b4f57611b7c565b60ff1986168952841515850289019650611b7c565b60008a81526020902060005b86811015611b745781548b820152908501908301611b5b565b505084890196505b509498975050505050505050565b60008219821115611b9d57611b9d611a03565b500190565b60006001600160e01b0382811684821681151582840482111615611bc857611bc8611a03565b02949350505050565b60006001600160e01b0383811680611beb57611beb611a83565b9216919091049291505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a26469706673582212208b98d02278a0f470f3c060e97dab2717bfec68a30058cf50970eac489b73c3db64736f6c634300080f0033a2646970667358221220ca6f30dc54e3628632635171e6a5c60bb3391e30a572033811d9a22e7840c8a564736f6c634300080f0033";

type ZuniswapV2LibraryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZuniswapV2LibraryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZuniswapV2Library__factory extends ContractFactory {
  constructor(...args: ZuniswapV2LibraryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZuniswapV2Library> {
    return super.deploy(overrides || {}) as Promise<ZuniswapV2Library>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ZuniswapV2Library {
    return super.attach(address) as ZuniswapV2Library;
  }
  override connect(signer: Signer): ZuniswapV2Library__factory {
    return super.connect(signer) as ZuniswapV2Library__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZuniswapV2LibraryInterface {
    return new utils.Interface(_abi) as ZuniswapV2LibraryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZuniswapV2Library {
    return new Contract(address, _abi, signerOrProvider) as ZuniswapV2Library;
  }
}
