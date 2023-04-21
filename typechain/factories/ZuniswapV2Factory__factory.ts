/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ZuniswapV2Factory,
  ZuniswapV2FactoryInterface,
} from "../ZuniswapV2Factory";

const _abi = [
  {
    inputs: [],
    name: "IdenticalAddresses",
    type: "error",
  },
  {
    inputs: [],
    name: "PairExists",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "PairCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allPairs",
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
    ],
    name: "createPair",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pairs",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612e33806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631e3dd18b1461004657806369454b8614610082578063c9c65396146100c0575b600080fd5b6100596100543660046104a4565b6100d3565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100596100903660046104e6565b600060208181529281526040808220909352908152205473ffffffffffffffffffffffffffffffffffffffff1681565b6100596100ce3660046104e6565b61010a565b600181815481106100e357600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610171576040517fbd969eb000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16106101ae5783856101b1565b84845b909250905073ffffffffffffffffffffffffffffffffffffffff8216610203576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8281166000908152602081815260408083208585168452909152902054161561026d576040517f3d77e89100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006040518060200161027f90610497565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f9091011660408190527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606086811b8216602084015285901b166034820152909150600090604801604051602081830303815290604052805190602001209050808251602084016000f56040517f485cc95500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff868116600483015285811660248301529196509086169063485cc95590604401600060405180830381600087803b15801561038857600080fd5b505af115801561039c573d6000803e3d6000fd5b5050505073ffffffffffffffffffffffffffffffffffffffff84811660008181526020818152604080832088861680855290835281842080547fffffffffffffffffffffffff0000000000000000000000000000000000000000908116978d1697881790915584845282852086865284528285208054821688179055600180548082018255958190527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6909501805490911687179055925481519586529185019190915290927f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9910160405180910390a35050505092915050565b6128e48061051a83390190565b6000602082840312156104b657600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146104e157600080fd5b919050565b600080604083850312156104f957600080fd5b610502836104bd565b9150610510602084016104bd565b9050925092905056fe60e06040523480156200001157600080fd5b506040518060400160405280600f81526020016e2d3ab734b9bbb0b82b19102830b4b960891b815250604051806040016040528060068152602001652d2aa724ab1960d11b815250601282600090816200006c9190620001df565b5060016200007b8382620001df565b5060ff81166080524660a052620000916200009e565b60c0525062000329915050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620000d29190620002ab565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200016557607f821691505b6020821081036200018657634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001da57600081815260208120601f850160051c81016020861015620001b55750805b601f850160051c820191505b81811015620001d657828155600101620001c1565b5050505b505050565b81516001600160401b03811115620001fb57620001fb6200013a565b62000213816200020c845462000150565b846200018c565b602080601f8311600181146200024b5760008415620002325750858301515b600019600386901b1c1916600185901b178555620001d6565b600085815260208120601f198616915b828110156200027c578886015182559484019460019091019084016200025b565b50858210156200029b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620002bb8162000150565b60018281168015620002d65760018114620002ec576200031d565b60ff19841687528215158302870194506200031d565b8760005260208060002060005b85811015620003145781548a820152908401908201620002f9565b50505082870194505b50929695505050505050565b60805160a05160c05161258b620003596000396000610c2d01526000610bf8015260006102ac015261258b6000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c80635909c0d5116100d857806395d89b411161008c578063d505accf11610066578063d505accf146103a3578063dd62ed3e146103b6578063fff6cae9146103e157600080fd5b806395d89b4114610368578063a9059cbb14610370578063d21220a71461038357600080fd5b80636a627842116100bd5780636a6278421461030d57806370a082311461032057806389afcb441461034057600080fd5b80635909c0d5146102fb5780635a3d54931461030457600080fd5b806318160ddd1161012f578063313ce56711610114578063313ce567146102a75780633644e515146102e0578063485cc955146102e857600080fd5b806318160ddd1461027d57806323b872dd1461029457600080fd5b80630902f1ac116101605780630902f1ac146101af578063095ea7b3146102155780630dfe16811461023857600080fd5b8063022c0d9f1461017c57806306fdde0314610191575b600080fd5b61018f61018a366004611fca565b6103e9565b005b6101996109a9565b6040516101a6919061208e565b60405180910390f35b600754604080516dffffffffffffffffffffffffffff80841682526e01000000000000000000000000000084041660208201527c010000000000000000000000000000000000000000000000000000000090920463ffffffff16908201526060016101a6565b6102286102233660046120df565b610a37565b60405190151581526020016101a6565b6005546102589073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a6565b61028660025481565b6040519081526020016101a6565b6102286102a2366004612109565b610ab0565b6102ce7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016101a6565b610286610bf4565b61018f6102f6366004612145565b610c4f565b61028660085481565b61028660095481565b61028661031b366004612178565b610d16565b61028661032e366004612178565b60036020526000908152604090205481565b61035361034e366004612178565b611030565b604080519283526020830191909152016101a6565b610199611438565b61022861037e3660046120df565b611445565b6006546102589073ffffffffffffffffffffffffffffffffffffffff1681565b61018f6103b1366004612193565b6114ca565b6102866103c4366004612145565b600460209081526000928352604080842090915290825290205481565b61018f6117d2565b600a5460ff16156103f957600080fd5b600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905584158015610430575083155b15610467576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806104c36007546dffffffffffffffffffffffffffff808216926e01000000000000000000000000000083049091169163ffffffff7c01000000000000000000000000000000000000000000000000000000009091041690565b5091509150816dffffffffffffffffffffffffffff168711806104f55750806dffffffffffffffffffffffffffff1686115b1561052c576040517fbb55fd2700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8615610556576005546105569073ffffffffffffffffffffffffffffffffffffffff16868961196c565b8515610580576006546105809073ffffffffffffffffffffffffffffffffffffffff16868861196c565b8215610613576040517fc68e5d5000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86169063c68e5d50906105e09033908b908b908a908a90600401612206565b600060405180830381600087803b1580156105fa57600080fd5b505af115801561060e573d6000803e3d6000fd5b505050505b6005546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a08231906024016020604051808303816000875af1158015610684573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a8919061227e565b6006546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015291925060009173ffffffffffffffffffffffffffffffffffffffff909116906370a08231906024016020604051808303816000875af115801561071e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610742919061227e565b600754909150600090610766908b906dffffffffffffffffffffffffffff166122c6565b831161077357600061079b565b600754610791908b906dffffffffffffffffffffffffffff166122c6565b61079b90846122c6565b6007549091506000906107d1908b906e01000000000000000000000000000090046dffffffffffffffffffffffffffff166122c6565b83116107de576000610818565b60075461080e908b906e01000000000000000000000000000090046dffffffffffffffffffffffffffff166122c6565b61081890846122c6565b905081158015610826575080155b1561085d576040517f098fb56100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061086a8360036122dd565b610876866103e86122dd565b61088091906122c6565b9050600061088f8360036122dd565b61089b866103e86122dd565b6108a591906122c6565b90506108c46dffffffffffffffffffffffffffff808916908a166122dd565b6108d190620f42406122dd565b6108db82846122dd565b1015610913576040517fbd8bc36400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61091f86868a8a611acd565b604080518e8152602081018e905273ffffffffffffffffffffffffffffffffffffffff8d169133917f2a9237ff5aa599ef4c5ee4b1142b53429d5755e2685fe6288b2e3320202115f5910160405180910390a35050600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555050505050505050505050565b600080546109b69061231a565b80601f01602080910402602001604051908101604052809291908181526020018280546109e29061231a565b8015610a2f5780601f10610a0457610100808354040283529160200191610a2f565b820191906000526020600020905b815481529060010190602001808311610a1257829003601f168201915b505050505081565b33600081815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610a9f9086815260200190565b60405180910390a350600192915050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526004602090815260408083203384529091528120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610b4457610b1283826122c6565b73ffffffffffffffffffffffffffffffffffffffff861660009081526004602090815260408083203384529091529020555b73ffffffffffffffffffffffffffffffffffffffff851660009081526003602052604081208054859290610b799084906122c6565b909155505073ffffffffffffffffffffffffffffffffffffffff808516600081815260036020526040908190208054870190555190918716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610be19087815260200190565b60405180910390a3506001949350505050565b60007f00000000000000000000000000000000000000000000000000000000000000004614610c2a57610c25611d30565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b60055473ffffffffffffffffffffffffffffffffffffffff16151580610c8c575060065473ffffffffffffffffffffffffffffffffffffffff1615155b15610cc3576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6005805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560068054929093169116179055565b6000806000610d746007546dffffffffffffffffffffffffffff808216926e01000000000000000000000000000083049091169163ffffffff7c01000000000000000000000000000000000000000000000000000000009091041690565b506005546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015292945090925060009173ffffffffffffffffffffffffffffffffffffffff909116906370a08231906024016020604051808303816000875af1158015610dee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e12919061227e565b6006546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015291925060009173ffffffffffffffffffffffffffffffffffffffff909116906370a08231906024016020604051808303816000875af1158015610e88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eac919061227e565b90506000610eca6dffffffffffffffffffffffffffff8616846122c6565b90506000610ee86dffffffffffffffffffffffffffff8616846122c6565b9050600254600003610f27576103e8610f09610f0483856122dd565b611dca565b610f1391906122c6565b9650610f2260006103e8611e3a565b610f84565b610f81866dffffffffffffffffffffffffffff1660025484610f4991906122dd565b610f539190612396565b866dffffffffffffffffffffffffffff1660025484610f7291906122dd565b610f7c9190612396565b611eb3565b96505b60008711610fbe576040517fd226f9d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fc88888611e3a565b610fd484848888611acd565b604080518381526020810183905273ffffffffffffffffffffffffffffffffffffffff8a16917f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f910160405180910390a2505050505050919050565b6005546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000918291829173ffffffffffffffffffffffffffffffffffffffff16906370a08231906024016020604051808303816000875af11580156110a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110c9919061227e565b6006546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015291925060009173ffffffffffffffffffffffffffffffffffffffff909116906370a08231906024016020604051808303816000875af115801561113f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611163919061227e565b306000908152600360205260409020546002549192509061118484836122dd565b61118e9190612396565b60025490955061119e83836122dd565b6111a89190612396565b93508415806111b5575083155b156111ec576040517f749383ad00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111f63082611ecb565b60055461121a9073ffffffffffffffffffffffffffffffffffffffff16878761196c565b60065461123e9073ffffffffffffffffffffffffffffffffffffffff16878661196c565b6005546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a08231906024016020604051808303816000875af11580156112ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d2919061227e565b6006546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015291945073ffffffffffffffffffffffffffffffffffffffff16906370a08231906024016020604051808303816000875af1158015611343573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611367919061227e565b91506000806113c56007546dffffffffffffffffffffffffffff808216926e01000000000000000000000000000083049091169163ffffffff7c01000000000000000000000000000000000000000000000000000000009091041690565b50915091506113d685858484611acd565b604080518881526020810188905273ffffffffffffffffffffffffffffffffffffffff8a1681830152905133917fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496919081900360600190a25050505050915091565b600180546109b69061231a565b336000908152600360205260408120805483919083906114669084906122c6565b909155505073ffffffffffffffffffffffffffffffffffffffff8316600081815260036020526040908190208054850190555133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610a9f9086815260200190565b42841015611539576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064015b60405180910390fd5b60006001611545610bf4565b604080517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9602082015273ffffffffffffffffffffffffffffffffffffffff808d1692820192909252908a1660608201526080810189905260a0810188905260c001604051602081830303815290604052805190602001206040516020016115ff9291907f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa15801561167b573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116158015906116f657508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b61175c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f494e56414c49445f5349474e45520000000000000000000000000000000000006044820152606401611530565b73ffffffffffffffffffffffffffffffffffffffff90811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60008061182e6007546dffffffffffffffffffffffffffff808216926e01000000000000000000000000000083049091169163ffffffff7c01000000000000000000000000000000000000000000000000000000009091041690565b506005546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529294509092506119689173ffffffffffffffffffffffffffffffffffffffff909116906370a08231906024016020604051808303816000875af11580156118a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118cd919061227e565b6006546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a08231906024016020604051808303816000875af115801561193d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611961919061227e565b8484611acd565b5050565b60405173ffffffffffffffffffffffffffffffffffffffff8381166024830152604482018390526000918291861690606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905251611a1f91906123aa565b6000604051808303816000865af19150503d8060008114611a5c576040519150601f19603f3d011682016040523d82523d6000602084013e611a61565b606091505b5091509150811580611a8f5750805115801590611a8f575080806020019051810190611a8d91906123c6565b155b15611ac6576040517f90b8ec1800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b6dffffffffffffffffffffffffffff841180611af657506dffffffffffffffffffffffffffff83115b15611b2d576040517f89560ca100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60075463ffffffff7c01000000000000000000000000000000000000000000000000000000009091048116420390811615801590611b7b57506000836dffffffffffffffffffffffffffff16115b8015611b9757506000826dffffffffffffffffffffffffffff16115b15611c41578063ffffffff16611bd484611bb085611f59565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1690611f8a565b600880547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff929092169290920201905563ffffffff8116611c1483611bb086611f59565b600980547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff92909216929092020190555b506007805463ffffffff42167c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff6dffffffffffffffffffffffffffff8781166e0100000000000000000000000000009081027fffffffff000000000000000000000000000000000000000000000000000000009095168a83161794909417918216831794859055604080519382169282169290921783529290930490911660208201527fcf2aa50876cdfbb541206f89af0ee78d44a2abf8d328e37fa4917f982149848a910160405180910390a150505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051611d6291906123e8565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b60006003821115611e2b5750806000611de4600283612396565b611def9060016124be565b90505b81811015611e2557905080600281611e0a8186612396565b611e1491906124be565b611e1e9190612396565b9050611df2565b50919050565b8115611e35575060015b919050565b8060026000828254611e4c91906124be565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000818152600360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91015b60405180910390a35050565b6000818310611ec25781611ec4565b825b9392505050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526003602052604081208054839290611f009084906122c6565b909155505060028054829003905560405181815260009073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001611ea7565b6000611f846e0100000000000000000000000000006dffffffffffffffffffffffffffff84166124d6565b92915050565b6000611ec46dffffffffffffffffffffffffffff83168461251a565b803573ffffffffffffffffffffffffffffffffffffffff81168114611e3557600080fd5b600080600080600060808688031215611fe257600080fd5b8535945060208601359350611ff960408701611fa6565b9250606086013567ffffffffffffffff8082111561201657600080fd5b818801915088601f83011261202a57600080fd5b81358181111561203957600080fd5b89602082850101111561204b57600080fd5b9699959850939650602001949392505050565b60005b83811015612079578181015183820152602001612061565b83811115612088576000848401525b50505050565b60208152600082518060208401526120ad81604085016020870161205e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600080604083850312156120f257600080fd5b6120fb83611fa6565b946020939093013593505050565b60008060006060848603121561211e57600080fd5b61212784611fa6565b925061213560208501611fa6565b9150604084013590509250925092565b6000806040838503121561215857600080fd5b61216183611fa6565b915061216f60208401611fa6565b90509250929050565b60006020828403121561218a57600080fd5b611ec482611fa6565b600080600080600080600060e0888a0312156121ae57600080fd5b6121b788611fa6565b96506121c560208901611fa6565b95506040880135945060608801359350608088013560ff811681146121e957600080fd5b9699959850939692959460a0840135945060c09093013592915050565b73ffffffffffffffffffffffffffffffffffffffff8616815284602082015283604082015260806060820152816080820152818360a0830137600081830160a090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101949350505050565b60006020828403121561229057600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156122d8576122d8612297565b500390565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561231557612315612297565b500290565b600181811c9082168061232e57607f821691505b602082108103611e25577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826123a5576123a5612367565b500490565b600082516123bc81846020870161205e565b9190910192915050565b6000602082840312156123d857600080fd5b81518015158114611ec457600080fd5b600080835481600182811c91508083168061240457607f831692505b6020808410820361243c577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b8180156124505760018114612483576124b0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861689528415158502890196506124b0565b60008a81526020902060005b868110156124a85781548b82015290850190830161248f565b505084890196505b509498975050505050505050565b600082198211156124d1576124d1612297565b500190565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8083168185168183048111821515161561251157612511612297565b02949350505050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8084168061254957612549612367565b9216919091049291505056fea264697066735822122042968ac75b84c2936fde8569a07f49e23a73b84acdb3774c42b93d4a2456573164736f6c634300080f0033a264697066735822122047a37e209a9653b5f7d33535e7588bfb39448d137a5779bef954b01a301e7b8d64736f6c634300080f0033";

type ZuniswapV2FactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZuniswapV2FactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZuniswapV2Factory__factory extends ContractFactory {
  constructor(...args: ZuniswapV2FactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZuniswapV2Factory> {
    return super.deploy(overrides || {}) as Promise<ZuniswapV2Factory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ZuniswapV2Factory {
    return super.attach(address) as ZuniswapV2Factory;
  }
  override connect(signer: Signer): ZuniswapV2Factory__factory {
    return super.connect(signer) as ZuniswapV2Factory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZuniswapV2FactoryInterface {
    return new utils.Interface(_abi) as ZuniswapV2FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZuniswapV2Factory {
    return new Contract(address, _abi, signerOrProvider) as ZuniswapV2Factory;
  }
}
