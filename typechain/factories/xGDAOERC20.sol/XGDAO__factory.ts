/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { XGDAO, XGDAOInterface } from "../../xGDAOERC20.sol/XGDAO";

const _abi = [
  {
    inputs: [],
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
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
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
    name: "approved",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "balanceFrom",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "balanceTo",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
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
    name: "delegates",
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
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
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
    inputs: [],
    name: "index",
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
        name: "_staking",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sGDAO",
        type: "address",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "migrated",
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
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
    name: "numCheckpoints",
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
    name: "sGDAO",
    outputs: [
      {
        internalType: "contract IsGDAO",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
  {
    inputs: [],
    name: "xGDAO",
    outputs: [
      {
        internalType: "contract IxGDAO",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600f81526020016e476f7665726e616e6365204744414f60881b81525060405180604001604052806005815260200164784744414f60d81b815250601282600390816200006b91906200013d565b5060046200007a83826200013d565b506005805460ff191660ff9290921691909117905550620002099050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620000c357607f821691505b602082108103620000e457634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200013857600081815260208120601f850160051c81016020861015620001135750805b601f850160051c820191505b8181101562000134578281556001016200011f565b5050505b505050565b81516001600160401b0381111562000159576200015962000098565b62000171816200016a8454620000ae565b84620000ea565b602080601f831160018114620001a95760008415620001905750858301515b600019600386901b1c1916600185901b17855562000134565b600085815260208120601f198616915b82811015620001da57888601518255948401946001909101908401620001b9565b5085821015620001f95787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61173680620002196000396000f3fe608060405234801561001057600080fd5b50600436106101495760003560e01c806306fdde031461014e578063095ea7b31461016c5780630cdfebfa1461018f5780631068361f146101d657806318160ddd146101eb57806319d40b08146101fd57806323b872dd146102285780632986c0e51461023b5780632c678c6414610243578063313ce56714610257578063395093511461026c57806340c10f191461027f578063587cde1e146102925780635c19a95c146102bb57806366a5236c146102ce5780636fcfff45146102e157806370a0823114610301578063782d6fe11461032a57806395d89b411461033d5780639ad60297146103455780639dc29fac14610358578063a457c2d71461036b578063a82487681461037e578063a9059cbb14610391578063b4b5ea57146103a4578063dd62ed3e146103b7578063e03481e1146103f0575b600080fd5b610156610408565b60405161016391906112ee565b60405180910390f35b61017f61017a36600461135f565b61049a565b6040519015158152602001610163565b6101c161019d36600461135f565b60086020908152600092835260408084209091529082529020805460019091015482565b60408051928352602083019190915201610163565b6101e96101e4366004611389565b6104b1565b005b6002545b604051908152602001610163565b600754610210906001600160a01b031681565b6040516001600160a01b039091168152602001610163565b61017f6102363660046113bc565b610613565b6101ef61067c565b60075461017f90600160a01b900460ff1681565b60055460405160ff9091168152602001610163565b61017f61027a36600461135f565b6106ef565b6101e961028d36600461135f565b610725565b6102106102a03660046113f8565b600a602052600090815260409020546001600160a01b031681565b6101e96102c93660046113f8565b61075d565b6101ef6102dc366004611413565b61076a565b6101ef6102ef3660046113f8565b60096020526000908152604090205481565b6101ef61030f3660046113f8565b6001600160a01b031660009081526020819052604090205490565b6101ef61033836600461135f565b61079e565b6101566109c4565b600654610210906001600160a01b031681565b6101e961036636600461135f565b6109d3565b61017f61037936600461135f565b610a07565b6101ef61038c366004611413565b610a56565b61017f61039f36600461135f565b610a7d565b6101ef6103b23660046113f8565b610a8a565b6101ef6103c5366004611389565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6005546102109061010090046001600160a01b031681565b6060600380546104179061142c565b80601f01602080910402602001604051908101604052809291908181526020018280546104439061142c565b80156104905780601f1061046557610100808354040283529160200191610490565b820191906000526020600020905b81548152906001019060200180831161047357829003601f168201915b5050505050905090565b60006104a7338484610aed565b5060015b92915050565b6007546001600160a01b031633146104e45760405162461bcd60e51b81526004016104db90611466565b60405180910390fd5b600754600160a01b900460ff16156105295760405162461bcd60e51b8152602060048201526008602482015267135a59dc985d195960c21b60448201526064016104db565b6007805460ff60a01b198116600160a01b179091556001600160a01b039081169083160361058c5760405162461bcd60e51b815260206004820152601060248201526f125b9d985b1a5908185c99dd5b595b9d60821b60448201526064016104db565b6001600160a01b0382166105b25760405162461bcd60e51b81526004016104db9061148d565b600780546001600160a01b0319166001600160a01b038481169190911790915581166105f05760405162461bcd60e51b81526004016104db9061148d565b600680546001600160a01b0319166001600160a01b039290921691909117905550565b6000610620848484610c12565b610672843361066d85604051806060016040528060288152602001611694602891396001600160a01b038a1660009081526001602090815260408083203384529091529020549190610d8e565b610aed565b5060019392505050565b60065460408051632986c0e560e01b815290516000926001600160a01b031691632986c0e59160048083019260209291908290030181865afa1580156106c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ea91906114b9565b905090565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916104a791859061066d9086610dba565b6007546001600160a01b0316331461074f5760405162461bcd60e51b81526004016104db90611466565b6107598282610dc6565b5050565b6107673382610e9e565b50565b60006104ab61077761067c565b61079861078660055460ff1690565b61079190600a6115cc565b8590610f1d565b90610f29565b60004382106108005760405162461bcd60e51b815260206004820152602860248201527f784744414f3a3a6765745072696f72566f7465733a206e6f74207965742064656044820152671d195c9b5a5b995960c21b60648201526084016104db565b6001600160a01b0383166000908152600960205260408120549081900361082b5760009150506104ab565b6001600160a01b038416600090815260086020526040812084916108506001856115db565b815260200190815260200160002060000154116108a5576001600160a01b03841660009081526008602052604081209061088b6001846115db565b8152602001908152602001600020600101549150506104ab565b6001600160a01b03841660009081526008602090815260408083208380529091529020548310156108da5760009150506104ab565b6000806108e86001846115db565b90505b81811115610994576000600261090184846115db565b61090b91906115f2565b61091590836115db565b6001600160a01b038816600090815260086020908152604080832084845282529182902082518084019093528054808452600190910154918301919091529192509087900361096e576020015194506104ab9350505050565b805187111561097f5781935061098d565b61098a6001836115db565b92505b50506108eb565b506001600160a01b0385166000908152600860209081526040808320938352929052206001015491505092915050565b6060600480546104179061142c565b6007546001600160a01b031633146109fd5760405162461bcd60e51b81526004016104db90611466565b6107598282610f35565b60006104a7338461066d856040518060600160405280602581526020016116dc602591393360009081526001602090815260408083206001600160a01b038d1684529091529020549190610d8e565b60006104ab610a6760055460ff1690565b610a7290600a6115cc565b61079861079161067c565b60006104a7338484610c12565b6001600160a01b03811660009081526009602052604081205480610aaf576000610ae6565b6001600160a01b038316600090815260086020526040812090610ad36001846115db565b8152602001908152602001600020600101545b9392505050565b6001600160a01b038316610b4f5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104db565b6001600160a01b038216610bb05760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104db565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316610c765760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104db565b6001600160a01b038216610cd85760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104db565b610ce3838383611033565b610d208160405180606001604052806026815260200161166e602691396001600160a01b0386166000908152602081905260409020549190610d8e565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610d4f9082610dba565b6001600160a01b038381166000818152602081815260409182902094909455518481529092918616916000805160206116bc8339815191529101610c05565b60008184841115610db25760405162461bcd60e51b81526004016104db91906112ee565b505050900390565b6000610ae68284611614565b6001600160a01b038216610e1c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104db565b610e27308383611033565b600254610e349082610dba565b6002556001600160a01b038216600090815260208190526040902054610e5a9082610dba565b6001600160a01b038316600081815260208181526040918290209390935551838152909130916000805160206116bc83398151915291015b60405180910390a35050565b6001600160a01b038083166000818152600a60208181526040808420805485845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610f1782848361106a565b50505050565b6000610ae6828461162c565b6000610ae682846115f2565b6001600160a01b038216610f955760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104db565b610fa182600083611033565b610fde8160405180606001604052806022815260200161164c602291396001600160a01b0385166000908152602081905260409020549190610d8e565b6001600160a01b03831660009081526020819052604090205560025461100490826111ad565b6002556040518181526000906001600160a01b038416906000805160206116bc83398151915290602001610e92565b6001600160a01b038084166000908152600a60205260408082205485841683529120546110659291821691168361106a565b505050565b816001600160a01b0316836001600160a01b03161415801561108c5750600081115b15611065576001600160a01b0383161561111d576001600160a01b03831660009081526009602052604081205490816110c65760006110fd565b6001600160a01b0385166000908152600860205260408120906110ea6001856115db565b8152602001908152602001600020600101545b9050600061110b82856111ad565b9050611119868484846111b9565b5050505b6001600160a01b03821615611065576001600160a01b0382166000908152600960205260408120549081611152576000611189565b6001600160a01b0384166000908152600860205260408120906111766001856115db565b8152602001908152602001600020600101545b905060006111978285610dba565b90506111a5858484846111b9565b505050505050565b6000610ae682846115db565b6000831180156111fd57506001600160a01b038416600090815260086020526040812043916111e96001876115db565b815260200190815260200160002060000154145b15611240576001600160a01b038416600090815260086020526040812082916112276001876115db565b81526020810191909152604001600020600101556112a4565b60408051808201825243815260208082018481526001600160a01b03881660009081526008835284812088825290925292902090518155905160019182015561128a908490611614565b6001600160a01b0385166000908152600960205260409020555b60408051838152602081018390526001600160a01b038616917fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724910160405180910390a250505050565b600060208083528351808285015260005b8181101561131b578581018301518582016040015282016112ff565b8181111561132d576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461135a57600080fd5b919050565b6000806040838503121561137257600080fd5b61137b83611343565b946020939093013593505050565b6000806040838503121561139c57600080fd5b6113a583611343565b91506113b360208401611343565b90509250929050565b6000806000606084860312156113d157600080fd5b6113da84611343565b92506113e860208501611343565b9150604084013590509250925092565b60006020828403121561140a57600080fd5b610ae682611343565b60006020828403121561142557600080fd5b5035919050565b600181811c9082168061144057607f821691505b60208210810361146057634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600d908201526c13db9b1e48185c1c1c9bdd9959609a1b604082015260600190565b60208082526012908201527116995c9bc81859191c995cdcc8199bdd5b9960721b604082015260600190565b6000602082840312156114cb57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115611523578160001904821115611509576115096114d2565b8085161561151657918102915b93841c93908002906114ed565b509250929050565b60008261153a575060016104ab565b81611547575060006104ab565b816001811461155d576002811461156757611583565b60019150506104ab565b60ff841115611578576115786114d2565b50506001821b6104ab565b5060208310610133831016604e8410600b84101617156115a6575081810a6104ab565b6115b083836114e8565b80600019048211156115c4576115c46114d2565b029392505050565b6000610ae660ff84168361152b565b6000828210156115ed576115ed6114d2565b500390565b60008261160f57634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115611627576116276114d2565b500190565b6000816000190483118215151615611646576116466114d2565b50029056fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212200835a0969a36e6376fd68a43bb39fa3f8f44cf667192b6ab3b3e1d646ee8f28d64736f6c634300080f0033";

type XGDAOConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: XGDAOConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class XGDAO__factory extends ContractFactory {
  constructor(...args: XGDAOConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<XGDAO> {
    return super.deploy(overrides || {}) as Promise<XGDAO>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): XGDAO {
    return super.attach(address) as XGDAO;
  }
  override connect(signer: Signer): XGDAO__factory {
    return super.connect(signer) as XGDAO__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XGDAOInterface {
    return new utils.Interface(_abi) as XGDAOInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): XGDAO {
    return new Contract(address, _abi, signerOrProvider) as XGDAO;
  }
}
