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
import type { Faucet, FaucetInterface } from "../Faucet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "gdao_",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "reserve_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "ethDrip_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gdaoDrip_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveDrip_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dripInterval_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "enum Faucet.Asset",
        name: "asset",
        type: "uint8",
      },
    ],
    name: "Faucet_DripFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum Faucet.Asset",
        name: "asset",
        type: "uint8",
      },
    ],
    name: "Faucet_DripOnCooldown",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum Faucet.Asset",
        name: "asset",
        type: "uint8",
      },
    ],
    name: "Faucet_InsufficientFunds",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Faucet.Asset",
        name: "asset",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Drip",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
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
        internalType: "enum Faucet.Asset",
        name: "asset_",
        type: "uint8",
      },
    ],
    name: "drip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Faucet.Asset",
        name: "",
        type: "uint8",
      },
    ],
    name: "dripAmount",
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
    name: "dripInterval",
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
    name: "dripTestAmounts",
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
        internalType: "enum Faucet.Asset",
        name: "",
        type: "uint8",
      },
    ],
    name: "lastDrip",
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
        internalType: "enum Faucet.Asset",
        name: "asset_",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "setDripAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "interval_",
        type: "uint256",
      },
    ],
    name: "setDripInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Faucet.Asset",
        name: "",
        type: "uint8",
      },
    ],
    name: "token",
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
    inputs: [
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "enum Faucet.Asset",
        name: "asset_",
        type: "uint8",
      },
    ],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080604052600160005534801561001557600080fd5b50604051610cb2380380610cb28339810160408190526100349161014d565b600180546001600160a01b039889166001600160a01b0319918216179091557fa15bc60c955c405d20d9149c709e2460f1c2d9a497496a7f46004d1772c3054c8054978916978216979097179096557fc3a24b0501bd2c13a7e57f2db4369ec4c223447539fc0724a9d55ac4a06ebd4d80549096169490961693909317909355600260208190527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b919091557fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e0929092556000919091527f679795a0195a1b76cdebb7c51d74e058aee92919b8c3389af86ef24535e8a28c556005556101c1565b6001600160a01b038116811461014a57600080fd5b50565b600080600080600080600060e0888a03121561016857600080fd5b875161017381610135565b602089015190975061018481610135565b604089015190965061019581610135565b80955050606088015193506080880151925060a0880151915060c0880151905092959891949750929550565b610ae2806101d06000396000f3fe6080604052600436106100855760003560e01c80631a624b17146100915780632c35c40b146100a8578063558d0423146100c85780636a2148111461011357806370fef9f61461012957806392c6672814610149578063a9a89db914610169578063cd3a886114610189578063f851a440146101b6578063fd00ea1c146101e357600080fd5b3661008c57005b600080fd5b34801561009d57600080fd5b506100a6610219565b005b3480156100b457600080fd5b506100a66100c33660046108f1565b610239565b3480156100d457600080fd5b506101006100e33660046108f1565b600460209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b34801561011f57600080fd5b5061010060055481565b34801561013557600080fd5b506100a6610144366004610932565b610416565b34801561015557600080fd5b506100a6610164366004610954565b61073a565b34801561017557600080fd5b506100a661018436600461097e565b6107a1565b34801561019557600080fd5b506101006101a4366004610932565b60026020526000908152604090205481565b3480156101c257600080fd5b506001546101d6906001600160a01b031681565b60405161010a9190610997565b3480156101ef57600080fd5b506101d66101fe366004610932565b6003602052600090815260409020546001600160a01b031681565b6102236000610416565b61022d6001610416565b6102376002610416565b565b6001546001600160a01b0316331461026c5760405162461bcd60e51b8152600401610263906109ab565b60405180910390fd5b6000816002811115610280576102806109d2565b0361031f576000826001600160a01b03164760405160006040518083038185875af1925050503d80600081146102d2576040519150601f19603f3d011682016040523d82523d6000602084013e6102d7565b606091505b505090508061031a5760405162461bcd60e51b815260206004820152600f60248201526e15da5d1a191c985dc811985a5b1959608a1b6044820152606401610263565b505050565b6104128260036000846002811115610339576103396109d2565b600281111561034a5761034a6109d2565b8152602081019190915260409081016000205490516370a0823160e01b81526001600160a01b03909116906370a0823190610389903090600401610997565b602060405180830381865afa1580156103a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ca91906109e8565b600360008560028111156103e0576103e06109d2565b60028111156103f1576103f16109d2565b81526020810191909152604001600020546001600160a01b031691906107d0565b5050565b6000546001146104555760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610263565b6002600081815560055433825260046020526040822090929091908490811115610481576104816109d2565b6002811115610492576104926109d2565b8152602001908152602001600020546104ab9190610a01565b4210156104cd57806040516368a886b760e11b81526004016102639190610a27565b60008160028111156104e1576104e16109d2565b036105e457600260008260028111156104fc576104fc6109d2565b600281111561050d5761050d6109d2565b81526020019081526020016000205447101561053e57806040516363dbac9160e01b81526004016102639190610a27565b6000336002828482811115610555576105556109d2565b6002811115610566576105666109d2565b81526020019081526020016000205460405160006040518083038185875af1925050503d80600081146105b5576040519150601f19603f3d011682016040523d82523d6000602084013e6105ba565b606091505b50509050806105de5781604051639e73bbe760e01b81526004016102639190610a27565b50610732565b600260008260028111156105fa576105fa6109d2565b600281111561060b5761060b6109d2565b81526020019081526020016000205460036000836002811115610630576106306109d2565b6002811115610641576106416109d2565b8152602081019190915260409081016000205490516370a0823160e01b81526001600160a01b03909116906370a0823190610680903090600401610997565b602060405180830381865afa15801561069d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c191906109e8565b10156106e257806040516363dbac9160e01b81526004016102639190610a27565b61073233600260008460028111156106fc576106fc6109d2565b600281111561070d5761070d6109d2565b815260200190815260200160002054600360008560028111156103e0576103e06109d2565b506001600055565b6001546001600160a01b031633146107645760405162461bcd60e51b8152600401610263906109ab565b806002600084600281111561077b5761077b6109d2565b600281111561078c5761078c6109d2565b81526020810191909152604001600020555050565b6001546001600160a01b031633146107cb5760405162461bcd60e51b8152600401610263906109ab565b600555565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283929087169161082c9190610a4f565b6000604051808303816000865af19150503d8060008114610869576040519150601f19603f3d011682016040523d82523d6000602084013e61086e565b606091505b50915091508180156108985750805115806108985750808060200190518101906108989190610a8a565b6108d65760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610263565b5050505050565b8035600381106108ec57600080fd5b919050565b6000806040838503121561090457600080fd5b82356001600160a01b038116811461091b57600080fd5b9150610929602084016108dd565b90509250929050565b60006020828403121561094457600080fd5b61094d826108dd565b9392505050565b6000806040838503121561096757600080fd5b610970836108dd565b946020939093013593505050565b60006020828403121561099057600080fd5b5035919050565b6001600160a01b0391909116815260200190565b6020808252600d908201526c26bab9ba1031329030b236b4b760991b604082015260600190565b634e487b7160e01b600052602160045260246000fd5b6000602082840312156109fa57600080fd5b5051919050565b60008219821115610a2257634e487b7160e01b600052601160045260246000fd5b500190565b6020810160038310610a4957634e487b7160e01b600052602160045260246000fd5b91905290565b6000825160005b81811015610a705760208186018101518583015201610a56565b81811115610a7f576000828501525b509190910192915050565b600060208284031215610a9c57600080fd5b8151801515811461094d57600080fdfea26469706673582212202e98fc0270d1962850f61b2798010953dce3ff9e52de1005960cb9b4b26190b364736f6c634300080f0033";

type FaucetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FaucetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Faucet__factory extends ContractFactory {
  constructor(...args: FaucetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    admin_: PromiseOrValue<string>,
    gdao_: PromiseOrValue<string>,
    reserve_: PromiseOrValue<string>,
    ethDrip_: PromiseOrValue<BigNumberish>,
    gdaoDrip_: PromiseOrValue<BigNumberish>,
    reserveDrip_: PromiseOrValue<BigNumberish>,
    dripInterval_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Faucet> {
    return super.deploy(
      admin_,
      gdao_,
      reserve_,
      ethDrip_,
      gdaoDrip_,
      reserveDrip_,
      dripInterval_,
      overrides || {}
    ) as Promise<Faucet>;
  }
  override getDeployTransaction(
    admin_: PromiseOrValue<string>,
    gdao_: PromiseOrValue<string>,
    reserve_: PromiseOrValue<string>,
    ethDrip_: PromiseOrValue<BigNumberish>,
    gdaoDrip_: PromiseOrValue<BigNumberish>,
    reserveDrip_: PromiseOrValue<BigNumberish>,
    dripInterval_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      admin_,
      gdao_,
      reserve_,
      ethDrip_,
      gdaoDrip_,
      reserveDrip_,
      dripInterval_,
      overrides || {}
    );
  }
  override attach(address: string): Faucet {
    return super.attach(address) as Faucet;
  }
  override connect(signer: Signer): Faucet__factory {
    return super.connect(signer) as Faucet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FaucetInterface {
    return new utils.Interface(_abi) as FaucetInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Faucet {
    return new Contract(address, _abi, signerOrProvider) as Faucet;
  }
}
