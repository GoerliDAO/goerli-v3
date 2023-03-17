/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  OlympusERC20Token,
  OlympusERC20TokenInterface,
} from "../../OlympusERC20.sol/OlympusERC20Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_authority",
        type: "address",
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
        name: "value",
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
        internalType: "contract IOlympusAuthority",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
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
        name: "value",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract IOlympusAuthority",
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
        name: "account",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "burnFrom",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        name: "account_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
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
        name: "owner",
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
    inputs: [
      {
        internalType: "contract IOlympusAuthority",
        name: "_newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
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
        name: "recipient",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
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
  "0x7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610140526101a0604052600c6101609081526b15539055551213d49256915160a21b61018052600690620000559082620002aa565b503480156200006357600080fd5b50604051620019e0380380620019e0833981016040819052620000869162000376565b80604051806040016040528060078152602001664f6c796d70757360c81b81525080604051806040016040528060018152602001603160f81b815250604051806040016040528060078152602001664f6c796d70757360c81b815250604051806040016040528060038152602001624f484d60e81b81525060098260039081620001119190620002aa565b506004620001208382620002aa565b5060ff166080908152845160209586012084519486019490942060e08590526101008190524660c0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818b01819052818301999099526060810194909452938301919091523060a080840191909152835180840382018152929091019283905281519190960120909452505061012052600780546001600160a01b0319166001600160a01b03851690811790915591507f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a25050620003a8565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200023057607f821691505b6020821081036200025157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002a557600081815260208120601f850160051c81016020861015620002805750805b601f850160051c820191505b81811015620002a1578281556001016200028c565b5050505b505050565b81516001600160401b03811115620002c657620002c662000205565b620002de81620002d784546200021b565b8462000257565b602080601f831160018114620003165760008415620002fd5750858301515b600019600386901b1c1916600185901b178555620002a1565b600085815260208120601f198616915b82811015620003475788860151825594840194600190910190840162000326565b5085821015620003665787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156200038957600080fd5b81516001600160a01b0381168114620003a157600080fd5b9392505050565b60805160a05160c05160e0516101005161012051610140516115dd6200040360003960006106b601526000610b1a01526000610b6901526000610b4401526000610ac601526000610aed0152600061016301526115dd6000f3fe608060405234801561001057600080fd5b50600436106100f15760003560e01c806306fdde03146100f6578063095ea7b31461011457806318160ddd1461013757806323b872dd14610149578063313ce5671461015c5780633644e5151461018d578063395093511461019557806340c10f19146101a857806342966c68146101bd57806370a08231146101d057806379cc6790146101f95780637a9e5e4b1461020c5780637ecebe001461021f57806395d89b4114610232578063a457c2d71461023a578063a9059cbb1461024d578063bf7e214f14610260578063d505accf1461028b578063dd62ed3e1461029e575b600080fd5b6100fe6102b1565b60405161010b91906111b9565b60405180910390f35b610127610122366004611223565b610343565b604051901515815260200161010b565b6002545b60405190815260200161010b565b61012761015736600461124f565b610359565b60405160ff7f000000000000000000000000000000000000000000000000000000000000000016815260200161010b565b61013b6103c2565b6101276101a3366004611223565b6103d1565b6101bb6101b6366004611223565b610407565b005b6101bb6101cb366004611290565b6104ca565b61013b6101de3660046112a9565b6001600160a01b031660009081526020819052604090205490565b6101bb610207366004611223565b6104d7565b6101bb61021a3660046112a9565b6104e1565b61013b61022d3660046112a9565b6105d7565b6100fe6105f7565b610127610248366004611223565b610606565b61012761025b366004611223565b610655565b600754610273906001600160a01b031681565b6040516001600160a01b03909116815260200161010b565b6101bb6102993660046112c6565b610662565b61013b6102ac36600461133d565b6107c6565b6060600380546102c090611376565b80601f01602080910402602001604051908101604052809291908181526020018280546102ec90611376565b80156103395780601f1061030e57610100808354040283529160200191610339565b820191906000526020600020905b81548152906001019060200180831161031c57829003601f168201915b5050505050905090565b60006103503384846107f1565b50600192915050565b6000610366848484610916565b6103b884336103b385604051806060016040528060288152602001611517602891396001600160a01b038a1660009081526001602090815260408083203384529091529020549190610a87565b6107f1565b5060019392505050565b60006103cc610ac1565b905090565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916103509185906103b39086610bb7565b600760009054906101000a90046001600160a01b03166001600160a01b031663fbfa77cf6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561045a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047e91906113aa565b6001600160a01b0316336001600160a01b0316146006906104bb5760405162461bcd60e51b81526004016104b291906113c7565b60405180910390fd5b506104c68282610c1b565b5050565b6104d43382610ce8565b50565b6104c68282610dda565b600760009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa158015610534573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055891906113aa565b6001600160a01b0316336001600160a01b03161460069061058c5760405162461bcd60e51b81526004016104b291906113c7565b50600780546001600160a01b0319166001600160a01b0383169081179091556040517f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a250565b6001600160a01b0381166000908152600560205260408120545b92915050565b6060600480546102c090611376565b600061035033846103b385604051806060016040528060258152602001611583602591393360009081526001602090815260408083206001600160a01b038d1684529091529020549190610a87565b6000610350338484610916565b834211156106b25760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016104b2565b60007f00000000000000000000000000000000000000000000000000000000000000008888886106e18c610e26565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061073c82610e50565b9050600061074c82878787610e9e565b9050896001600160a01b0316816001600160a01b0316146107af5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016104b2565b6107ba8a8a8a6107f1565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166108535760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104b2565b6001600160a01b0382166108b45760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104b2565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03831661097a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104b2565b6001600160a01b0382166109dc5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104b2565b610a19816040518060600160405280602681526020016114f1602691396001600160a01b0386166000908152602081905260409020549190610a87565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610a489082610bb7565b6001600160a01b038381166000818152602081815260409182902094909455518481529092918616916000805160206115638339815191529101610909565b60008184841115610aab5760405162461bcd60e51b81526004016104b291906111b9565b506000610ab88486611489565b95945050505050565b6000467f00000000000000000000000000000000000000000000000000000000000000008103610b12577f000000000000000000000000000000000000000000000000000000000000000091505090565b5050604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b600080610bc483856114a0565b905083811015610c145760405162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b60448201526064016104b2565b9392505050565b6001600160a01b038216610c715760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104b2565b600254610c7e9082610bb7565b6002556001600160a01b038216600090815260208190526040902054610ca49082610bb7565b6001600160a01b0383166000818152602081815260408083209490945592518481529192909160008051602061156383398151915291015b60405180910390a35050565b6001600160a01b038216610d485760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104b2565b610d85816040518060600160405280602281526020016114cf602291396001600160a01b0385166000908152602081905260409020549190610a87565b6001600160a01b038316600090815260208190526040902055600254610dab9082610ec6565b6002556040518181526000906001600160a01b0384169060008051602061156383398151915290602001610cdc565b6000610e0a8260405180606001604052806024815260200161153f60249139610e0386336107c6565b9190610a87565b9050610e178333836107f1565b610e218383610ce8565b505050565b6001600160a01b0381166000908152600560205260409020805490610e4a81610f08565b50919050565b60006105f1610e5d610ac1565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610eaf87878787610f25565b91509150610ebc81611008565b5095945050505050565b6000610c1483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610a87565b6001816000016000828254610f1d91906114a0565b909155505050565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b03831115610f525750600090506003610fff565b8460ff16601b14158015610f6a57508460ff16601c14155b15610f7b5750600090506004610fff565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610fcf573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610ff857600060019250925050610fff565b9150600090505b94509492505050565b600081600481111561101c5761101c6114b8565b036110245750565b6001816004811115611038576110386114b8565b036110805760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b60448201526064016104b2565b6002816004811115611094576110946114b8565b036110e15760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104b2565b60038160048111156110f5576110f56114b8565b0361114d5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104b2565b6004816004811115611161576111616114b8565b036104d45760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016104b2565b600060208083528351808285015260005b818110156111e6578581018301518582016040015282016111ca565b818111156111f8576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b03811681146104d457600080fd5b6000806040838503121561123657600080fd5b82356112418161120e565b946020939093013593505050565b60008060006060848603121561126457600080fd5b833561126f8161120e565b9250602084013561127f8161120e565b929592945050506040919091013590565b6000602082840312156112a257600080fd5b5035919050565b6000602082840312156112bb57600080fd5b8135610c148161120e565b600080600080600080600060e0888a0312156112e157600080fd5b87356112ec8161120e565b965060208801356112fc8161120e565b95506040880135945060608801359350608088013560ff8116811461132057600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561135057600080fd5b823561135b8161120e565b9150602083013561136b8161120e565b809150509250929050565b600181811c9082168061138a57607f821691505b602082108103610e4a57634e487b7160e01b600052602260045260246000fd5b6000602082840312156113bc57600080fd5b8151610c148161120e565b600060208083526000845481600182811c9150808316806113e957607f831692505b858310810361140657634e487b7160e01b85526022600452602485fd5b878601838152602001818015611423576001811461143957611464565b60ff198616825284151560051b82019650611464565b60008b81526020902060005b8681101561145e57815484820152908501908901611445565b83019750505b50949998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b60008282101561149b5761149b611473565b500390565b600082198211156114b3576114b3611473565b500190565b634e487b7160e01b600052602160045260246000fdfe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212207af28fd170a9dcf56a82f420cadd2a3b5d67b674ff5317170d8e9927a374588664736f6c634300080f0033";

type OlympusERC20TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OlympusERC20TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OlympusERC20Token__factory extends ContractFactory {
  constructor(...args: OlympusERC20TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _authority: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OlympusERC20Token> {
    return super.deploy(
      _authority,
      overrides || {}
    ) as Promise<OlympusERC20Token>;
  }
  override getDeployTransaction(
    _authority: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_authority, overrides || {});
  }
  override attach(address: string): OlympusERC20Token {
    return super.attach(address) as OlympusERC20Token;
  }
  override connect(signer: Signer): OlympusERC20Token__factory {
    return super.connect(signer) as OlympusERC20Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OlympusERC20TokenInterface {
    return new utils.Interface(_abi) as OlympusERC20TokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OlympusERC20Token {
    return new Contract(address, _abi, signerOrProvider) as OlympusERC20Token;
  }
}
