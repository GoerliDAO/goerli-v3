/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MockGDAODeploy,
  MockGDAODeployInterface,
} from "../../DeployMockGDAO.s.sol/MockGDAODeploy";

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
        internalType: "contract GDAO",
        name: "mgdao",
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
  "0x60806040526000805460ff1916600117905534801561001d57600080fd5b506112bd8061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461007e578063f8ccbf4714610086575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b6040516001600160a01b0390911681526020015b60405180910390f35b6100616100a3565b6000546100939060ff1681565b6040519015158152602001610075565b6040516360f9bb1160e01b81526020600482015260076024820152660b9cd958dc995d60ca1b60448201526000908190737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb11906064016000604051808303816000875af1158015610111573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101399190810190610322565b604051636229498b60e01b8152909150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d90636229498b9061017890859085906004016103ce565b6020604051808303816000875af1158015610197573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101bb919061040f565b60405163ce817d4760e01b815260048101829052909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b15801561020b57600080fd5b505af115801561021f573d6000803e3d6000fd5b5050505060405161022f906102cf565b604051809103906000f08015801561024b573d6000803e3d6000fd5b5092507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b03166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156102b257600080fd5b505af11580156102c6573d6000803e3d6000fd5b50505050505090565b610e5f8061042983390190565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561030d5781810151838201526020016102f5565b8381111561031c576000848401525b50505050565b60006020828403121561033457600080fd5b81516001600160401b038082111561034b57600080fd5b818401915084601f83011261035f57600080fd5b815181811115610371576103716102dc565b604051601f8201601f19908116603f01168101908382118183101715610399576103996102dc565b816040528281528760208487010111156103b257600080fd5b6103c38360208301602088016102f2565b979650505050505050565b60408152600083518060408401526103ed8160608501602088016102f2565b63ffffffff93909316602083015250601f91909101601f191601606001919050565b60006020828403121561042157600080fd5b505191905056fe60806040523480156200001157600080fd5b506040518060400160405280600f81526020016e4d6f636b20476f65726c692044414f60881b815250604051806040016040528060058152602001644d4744414f60d81b815250816003908162000069919062000276565b50600462000078828262000276565b505050620000956200008f620000b160201b60201c565b620000b5565b620000ab3369d3c21bcecceda100000062000107565b62000369565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216620001625760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b806002600082825462000176919062000342565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620001fd57607f821691505b6020821081036200021e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001cd57600081815260208120601f850160051c810160208610156200024d5750805b601f850160051c820191505b818110156200026e5782815560010162000259565b505050505050565b81516001600160401b03811115620002925762000292620001d2565b620002aa81620002a38454620001e8565b8462000224565b602080601f831160018114620002e25760008415620002c95750858301515b600019600386901b1c1916600185901b1785556200026e565b600085815260208120601f198616915b828110156200031357888601518255948401946001909101908401620002f2565b5085821015620003325787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600082198211156200036457634e487b7160e01b600052601160045260246000fd5b500190565b610ae680620003796000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b57806323b872dd1461011d578063313ce56714610130578063395093511461013f57806340c10f191461015257806370a0823114610167578063715018a6146101905780638da5cb5b1461019857806395d89b41146101b8578063a457c2d7146101c0578063a9059cbb146101d3578063dd62ed3e146101e6578063f2fde38b146101f9575b600080fd5b6100d261020c565b6040516100df9190610904565b60405180910390f35b6100fb6100f6366004610975565b61029e565b60405190151581526020016100df565b6002545b6040519081526020016100df565b6100fb61012b36600461099f565b6102b6565b604051601281526020016100df565b6100fb61014d366004610975565b6102da565b610165610160366004610975565b6102fc565b005b61010f6101753660046109db565b6001600160a01b031660009081526020819052604090205490565b610165610312565b6101a0610326565b6040516001600160a01b0390911681526020016100df565b6100d2610335565b6100fb6101ce366004610975565b610344565b6100fb6101e1366004610975565b6103c4565b61010f6101f43660046109fd565b6103d2565b6101656102073660046109db565b6103fd565b60606003805461021b90610a30565b80601f016020809104026020016040519081016040528092919081815260200182805461024790610a30565b80156102945780601f1061026957610100808354040283529160200191610294565b820191906000526020600020905b81548152906001019060200180831161027757829003601f168201915b5050505050905090565b6000336102ac818585610476565b5060019392505050565b6000336102c485828561059a565b6102cf858585610614565b506001949350505050565b6000336102ac8185856102ed83836103d2565b6102f79190610a6a565b610476565b6103046107a6565b61030e8282610805565b5050565b61031a6107a6565b61032460006108b2565b565b6005546001600160a01b031690565b60606004805461021b90610a30565b6000338161035282866103d2565b9050838110156103b75760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102cf8286868403610476565b6000336102ac818585610614565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6104056107a6565b6001600160a01b03811661046a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103ae565b610473816108b2565b50565b6001600160a01b0383166104d85760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103ae565b6001600160a01b0382166105395760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103ae565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006105a684846103d2565b9050600019811461060e57818110156106015760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103ae565b61060e8484848403610476565b50505050565b6001600160a01b0383166106785760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103ae565b6001600160a01b0382166106da5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103ae565b6001600160a01b038316600090815260208190526040902054818110156107525760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103ae565b6001600160a01b0384811660008181526020818152604080832087870390559387168083529184902080548701905592518581529092600080516020610a91833981519152910160405180910390a361060e565b336107af610326565b6001600160a01b0316146103245760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103ae565b6001600160a01b03821661085b5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103ae565b806002600082825461086d9190610a6a565b90915550506001600160a01b03821660008181526020818152604080832080548601905551848152600080516020610a91833981519152910160405180910390a35050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208083528351808285015260005b8181101561093157858101830151858201604001528201610915565b81811115610943576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461097057600080fd5b919050565b6000806040838503121561098857600080fd5b61099183610959565b946020939093013593505050565b6000806000606084860312156109b457600080fd5b6109bd84610959565b92506109cb60208501610959565b9150604084013590509250925092565b6000602082840312156109ed57600080fd5b6109f682610959565b9392505050565b60008060408385031215610a1057600080fd5b610a1983610959565b9150610a2760208401610959565b90509250929050565b600181811c90821680610a4457607f821691505b602082108103610a6457634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115610a8b57634e487b7160e01b600052601160045260246000fd5b50019056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122068838687e32fd9483d8b7af047248a1fdd7ff80d968b67e640a7519e1cd2bd9c64736f6c634300080f0033a264697066735822122053d04d86507ccd9a4f35db8986a706cc8ebeff2a4d6963addaa557d13818e29664736f6c634300080f0033";

type MockGDAODeployConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockGDAODeployConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockGDAODeploy__factory extends ContractFactory {
  constructor(...args: MockGDAODeployConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockGDAODeploy> {
    return super.deploy(overrides || {}) as Promise<MockGDAODeploy>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockGDAODeploy {
    return super.attach(address) as MockGDAODeploy;
  }
  override connect(signer: Signer): MockGDAODeploy__factory {
    return super.connect(signer) as MockGDAODeploy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockGDAODeployInterface {
    return new utils.Interface(_abi) as MockGDAODeployInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockGDAODeploy {
    return new Contract(address, _abi, signerOrProvider) as MockGDAODeploy;
  }
}