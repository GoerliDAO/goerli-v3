/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  StakingHelper,
  StakingHelperInterface,
} from "../../StakingHelper.sol/StakingHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_staking",
        type: "address",
      },
      {
        internalType: "address",
        name: "_GDAO",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "GDAO",
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
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "staking",
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
  "0x60c060405234801561001057600080fd5b5060405161053e38038061053e83398101604081905261002f91610089565b6001600160a01b03821661004257600080fd5b6001600160a01b03808316608052811661005b57600080fd5b6001600160a01b031660a052506100bc565b80516001600160a01b038116811461008457600080fd5b919050565b6000806040838503121561009c57600080fd5b6100a58361006d565b91506100b36020840161006d565b90509250929050565b60805160a05161043c6101026000396000818160b00152818161010d01526101fc015260008181604b015281816101cd0152818161029f0152610350015261043c6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634cf088d914610046578063a694fc3a14610096578063bc39493c146100ab575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a96100a43660046103c4565b6100d2565b005b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303816000875af115801561016b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018f91906103dd565b506040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af1158015610245573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026991906103dd565b506040517f7acb7757000000000000000000000000000000000000000000000000000000008152600481018290523360248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690637acb7757906044016020604051808303816000875af11580156102fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032191906103dd565b506040517f1e83409a0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690631e83409a90602401600060405180830381600087803b1580156103a957600080fd5b505af11580156103bd573d6000803e3d6000fd5b5050505050565b6000602082840312156103d657600080fd5b5035919050565b6000602082840312156103ef57600080fd5b815180151581146103ff57600080fd5b939250505056fea264697066735822122050585d8b136411fdbfb3a1b54359c2519743af00b4598cae5946426d7291fc3964736f6c634300080f0033";

type StakingHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakingHelper__factory extends ContractFactory {
  constructor(...args: StakingHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _staking: PromiseOrValue<string>,
    _GDAO: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StakingHelper> {
    return super.deploy(
      _staking,
      _GDAO,
      overrides || {}
    ) as Promise<StakingHelper>;
  }
  override getDeployTransaction(
    _staking: PromiseOrValue<string>,
    _GDAO: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_staking, _GDAO, overrides || {});
  }
  override attach(address: string): StakingHelper {
    return super.attach(address) as StakingHelper;
  }
  override connect(signer: Signer): StakingHelper__factory {
    return super.connect(signer) as StakingHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingHelperInterface {
    return new utils.Interface(_abi) as StakingHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingHelper {
    return new Contract(address, _abi, signerOrProvider) as StakingHelper;
  }
}
