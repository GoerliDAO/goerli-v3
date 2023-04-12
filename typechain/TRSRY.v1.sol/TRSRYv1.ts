/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface TRSRYv1Interface extends utils.Interface {
  functions: {
    "INIT()": FunctionFragment;
    "KEYCODE()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "activate()": FunctionFragment;
    "active()": FunctionFragment;
    "changeKernel(address)": FunctionFragment;
    "deactivate()": FunctionFragment;
    "debtApproval(address,address)": FunctionFragment;
    "decreaseDebtorApproval(address,address,uint256)": FunctionFragment;
    "decreaseWithdrawApproval(address,address,uint256)": FunctionFragment;
    "getReserveBalance(address)": FunctionFragment;
    "increaseDebtorApproval(address,address,uint256)": FunctionFragment;
    "increaseWithdrawApproval(address,address,uint256)": FunctionFragment;
    "incurDebt(address,uint256)": FunctionFragment;
    "kernel()": FunctionFragment;
    "repayDebt(address,address,uint256)": FunctionFragment;
    "reserveDebt(address,address)": FunctionFragment;
    "setDebt(address,address,uint256)": FunctionFragment;
    "totalDebt(address)": FunctionFragment;
    "withdrawApproval(address,address)": FunctionFragment;
    "withdrawReserves(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "INIT"
      | "KEYCODE"
      | "VERSION"
      | "activate"
      | "active"
      | "changeKernel"
      | "deactivate"
      | "debtApproval"
      | "decreaseDebtorApproval"
      | "decreaseWithdrawApproval"
      | "getReserveBalance"
      | "increaseDebtorApproval"
      | "increaseWithdrawApproval"
      | "incurDebt"
      | "kernel"
      | "repayDebt"
      | "reserveDebt"
      | "setDebt"
      | "totalDebt"
      | "withdrawApproval"
      | "withdrawReserves"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "INIT", values?: undefined): string;
  encodeFunctionData(functionFragment: "KEYCODE", values?: undefined): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(functionFragment: "activate", values?: undefined): string;
  encodeFunctionData(functionFragment: "active", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeKernel",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "debtApproval",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseDebtorApproval",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseWithdrawApproval",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveBalance",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseDebtorApproval",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseWithdrawApproval",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "incurDebt",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "repayDebt",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "reserveDebt",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setDebt",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "totalDebt",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawApproval",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawReserves",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "INIT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "KEYCODE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "activate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "active", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeKernel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deactivate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "debtApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseDebtorApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseWithdrawApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseDebtorApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseWithdrawApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "incurDebt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "repayDebt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reserveDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setDebt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalDebt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawReserves",
    data: BytesLike
  ): Result;

  events: {
    "DebtIncurred(address,address,uint256)": EventFragment;
    "DebtRepaid(address,address,uint256)": EventFragment;
    "DebtSet(address,address,uint256)": EventFragment;
    "DecreaseDebtorApproval(address,address,uint256)": EventFragment;
    "DecreaseWithdrawApproval(address,address,uint256)": EventFragment;
    "IncreaseDebtorApproval(address,address,uint256)": EventFragment;
    "IncreaseWithdrawApproval(address,address,uint256)": EventFragment;
    "Withdrawal(address,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DebtIncurred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DebtRepaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DebtSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DecreaseDebtorApproval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DecreaseWithdrawApproval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IncreaseDebtorApproval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IncreaseWithdrawApproval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
}

export interface DebtIncurredEventObject {
  token_: string;
  policy_: string;
  amount_: BigNumber;
}
export type DebtIncurredEvent = TypedEvent<
  [string, string, BigNumber],
  DebtIncurredEventObject
>;

export type DebtIncurredEventFilter = TypedEventFilter<DebtIncurredEvent>;

export interface DebtRepaidEventObject {
  token_: string;
  policy_: string;
  amount_: BigNumber;
}
export type DebtRepaidEvent = TypedEvent<
  [string, string, BigNumber],
  DebtRepaidEventObject
>;

export type DebtRepaidEventFilter = TypedEventFilter<DebtRepaidEvent>;

export interface DebtSetEventObject {
  token_: string;
  policy_: string;
  amount_: BigNumber;
}
export type DebtSetEvent = TypedEvent<
  [string, string, BigNumber],
  DebtSetEventObject
>;

export type DebtSetEventFilter = TypedEventFilter<DebtSetEvent>;

export interface DecreaseDebtorApprovalEventObject {
  debtor_: string;
  token_: string;
  newAmount_: BigNumber;
}
export type DecreaseDebtorApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  DecreaseDebtorApprovalEventObject
>;

export type DecreaseDebtorApprovalEventFilter =
  TypedEventFilter<DecreaseDebtorApprovalEvent>;

export interface DecreaseWithdrawApprovalEventObject {
  withdrawer_: string;
  token_: string;
  newAmount_: BigNumber;
}
export type DecreaseWithdrawApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  DecreaseWithdrawApprovalEventObject
>;

export type DecreaseWithdrawApprovalEventFilter =
  TypedEventFilter<DecreaseWithdrawApprovalEvent>;

export interface IncreaseDebtorApprovalEventObject {
  debtor_: string;
  token_: string;
  newAmount_: BigNumber;
}
export type IncreaseDebtorApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  IncreaseDebtorApprovalEventObject
>;

export type IncreaseDebtorApprovalEventFilter =
  TypedEventFilter<IncreaseDebtorApprovalEvent>;

export interface IncreaseWithdrawApprovalEventObject {
  withdrawer_: string;
  token_: string;
  newAmount_: BigNumber;
}
export type IncreaseWithdrawApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  IncreaseWithdrawApprovalEventObject
>;

export type IncreaseWithdrawApprovalEventFilter =
  TypedEventFilter<IncreaseWithdrawApprovalEvent>;

export interface WithdrawalEventObject {
  policy_: string;
  withdrawer_: string;
  token_: string;
  amount_: BigNumber;
}
export type WithdrawalEvent = TypedEvent<
  [string, string, string, BigNumber],
  WithdrawalEventObject
>;

export type WithdrawalEventFilter = TypedEventFilter<WithdrawalEvent>;

export interface TRSRYv1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TRSRYv1Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    INIT(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    KEYCODE(overrides?: CallOverrides): Promise<[string]>;

    VERSION(
      overrides?: CallOverrides
    ): Promise<[number, number] & { major: number; minor: number }>;

    activate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    active(overrides?: CallOverrides): Promise<[boolean]>;

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deactivate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    debtApproval(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    decreaseDebtorApproval(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    decreaseWithdrawApproval(
      withdrawer_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getReserveBalance(
      token_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    increaseDebtorApproval(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    increaseWithdrawApproval(
      withdrawer_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    incurDebt(
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    kernel(overrides?: CallOverrides): Promise<[string]>;

    repayDebt(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reserveDebt(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setDebt(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalDebt(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdrawApproval(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdrawReserves(
      to_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  INIT(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  KEYCODE(overrides?: CallOverrides): Promise<string>;

  VERSION(
    overrides?: CallOverrides
  ): Promise<[number, number] & { major: number; minor: number }>;

  activate(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  active(overrides?: CallOverrides): Promise<boolean>;

  changeKernel(
    newKernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deactivate(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  debtApproval(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  decreaseDebtorApproval(
    debtor_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  decreaseWithdrawApproval(
    withdrawer_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getReserveBalance(
    token_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  increaseDebtorApproval(
    debtor_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  increaseWithdrawApproval(
    withdrawer_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  incurDebt(
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  kernel(overrides?: CallOverrides): Promise<string>;

  repayDebt(
    debtor_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reserveDebt(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setDebt(
    debtor_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalDebt(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdrawApproval(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdrawReserves(
    to_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    INIT(overrides?: CallOverrides): Promise<void>;

    KEYCODE(overrides?: CallOverrides): Promise<string>;

    VERSION(
      overrides?: CallOverrides
    ): Promise<[number, number] & { major: number; minor: number }>;

    activate(overrides?: CallOverrides): Promise<void>;

    active(overrides?: CallOverrides): Promise<boolean>;

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    deactivate(overrides?: CallOverrides): Promise<void>;

    debtApproval(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decreaseDebtorApproval(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    decreaseWithdrawApproval(
      withdrawer_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getReserveBalance(
      token_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseDebtorApproval(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseWithdrawApproval(
      withdrawer_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    incurDebt(
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    kernel(overrides?: CallOverrides): Promise<string>;

    repayDebt(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    reserveDebt(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDebt(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalDebt(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawApproval(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawReserves(
      to_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DebtIncurred(address,address,uint256)"(
      token_?: PromiseOrValue<string> | null,
      policy_?: PromiseOrValue<string> | null,
      amount_?: null
    ): DebtIncurredEventFilter;
    DebtIncurred(
      token_?: PromiseOrValue<string> | null,
      policy_?: PromiseOrValue<string> | null,
      amount_?: null
    ): DebtIncurredEventFilter;

    "DebtRepaid(address,address,uint256)"(
      token_?: PromiseOrValue<string> | null,
      policy_?: PromiseOrValue<string> | null,
      amount_?: null
    ): DebtRepaidEventFilter;
    DebtRepaid(
      token_?: PromiseOrValue<string> | null,
      policy_?: PromiseOrValue<string> | null,
      amount_?: null
    ): DebtRepaidEventFilter;

    "DebtSet(address,address,uint256)"(
      token_?: PromiseOrValue<string> | null,
      policy_?: PromiseOrValue<string> | null,
      amount_?: null
    ): DebtSetEventFilter;
    DebtSet(
      token_?: PromiseOrValue<string> | null,
      policy_?: PromiseOrValue<string> | null,
      amount_?: null
    ): DebtSetEventFilter;

    "DecreaseDebtorApproval(address,address,uint256)"(
      debtor_?: PromiseOrValue<string> | null,
      token_?: PromiseOrValue<string> | null,
      newAmount_?: null
    ): DecreaseDebtorApprovalEventFilter;
    DecreaseDebtorApproval(
      debtor_?: PromiseOrValue<string> | null,
      token_?: PromiseOrValue<string> | null,
      newAmount_?: null
    ): DecreaseDebtorApprovalEventFilter;

    "DecreaseWithdrawApproval(address,address,uint256)"(
      withdrawer_?: PromiseOrValue<string> | null,
      token_?: PromiseOrValue<string> | null,
      newAmount_?: null
    ): DecreaseWithdrawApprovalEventFilter;
    DecreaseWithdrawApproval(
      withdrawer_?: PromiseOrValue<string> | null,
      token_?: PromiseOrValue<string> | null,
      newAmount_?: null
    ): DecreaseWithdrawApprovalEventFilter;

    "IncreaseDebtorApproval(address,address,uint256)"(
      debtor_?: PromiseOrValue<string> | null,
      token_?: PromiseOrValue<string> | null,
      newAmount_?: null
    ): IncreaseDebtorApprovalEventFilter;
    IncreaseDebtorApproval(
      debtor_?: PromiseOrValue<string> | null,
      token_?: PromiseOrValue<string> | null,
      newAmount_?: null
    ): IncreaseDebtorApprovalEventFilter;

    "IncreaseWithdrawApproval(address,address,uint256)"(
      withdrawer_?: PromiseOrValue<string> | null,
      token_?: PromiseOrValue<string> | null,
      newAmount_?: null
    ): IncreaseWithdrawApprovalEventFilter;
    IncreaseWithdrawApproval(
      withdrawer_?: PromiseOrValue<string> | null,
      token_?: PromiseOrValue<string> | null,
      newAmount_?: null
    ): IncreaseWithdrawApprovalEventFilter;

    "Withdrawal(address,address,address,uint256)"(
      policy_?: PromiseOrValue<string> | null,
      withdrawer_?: PromiseOrValue<string> | null,
      token_?: PromiseOrValue<string> | null,
      amount_?: null
    ): WithdrawalEventFilter;
    Withdrawal(
      policy_?: PromiseOrValue<string> | null,
      withdrawer_?: PromiseOrValue<string> | null,
      token_?: PromiseOrValue<string> | null,
      amount_?: null
    ): WithdrawalEventFilter;
  };

  estimateGas: {
    INIT(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    KEYCODE(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    activate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    active(overrides?: CallOverrides): Promise<BigNumber>;

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deactivate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    debtApproval(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decreaseDebtorApproval(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    decreaseWithdrawApproval(
      withdrawer_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getReserveBalance(
      token_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseDebtorApproval(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    increaseWithdrawApproval(
      withdrawer_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    incurDebt(
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    kernel(overrides?: CallOverrides): Promise<BigNumber>;

    repayDebt(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reserveDebt(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDebt(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalDebt(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawApproval(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawReserves(
      to_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    INIT(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    KEYCODE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    activate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    active(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deactivate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    debtApproval(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decreaseDebtorApproval(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    decreaseWithdrawApproval(
      withdrawer_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getReserveBalance(
      token_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseDebtorApproval(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    increaseWithdrawApproval(
      withdrawer_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    incurDebt(
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    repayDebt(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reserveDebt(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDebt(
      debtor_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalDebt(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawApproval(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawReserves(
      to_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
