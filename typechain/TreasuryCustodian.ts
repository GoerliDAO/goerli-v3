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
} from "./common";

export type PermissionsStruct = {
  keycode: PromiseOrValue<BytesLike>;
  funcSelector: PromiseOrValue<BytesLike>;
};

export type PermissionsStructOutput = [string, string] & {
  keycode: string;
  funcSelector: string;
};

export interface TreasuryCustodianInterface extends utils.Interface {
  functions: {
    "ROLES()": FunctionFragment;
    "TRSRY()": FunctionFragment;
    "changeKernel(address)": FunctionFragment;
    "configureDependencies()": FunctionFragment;
    "decreaseDebt(address,address,uint256)": FunctionFragment;
    "grantDebtorApproval(address,address,uint256)": FunctionFragment;
    "grantWithdrawerApproval(address,address,uint256)": FunctionFragment;
    "increaseDebt(address,address,uint256)": FunctionFragment;
    "isActive()": FunctionFragment;
    "kernel()": FunctionFragment;
    "reduceDebtorApproval(address,address,uint256)": FunctionFragment;
    "reduceWithdrawerApproval(address,address,uint256)": FunctionFragment;
    "requestPermissions()": FunctionFragment;
    "revokePolicyApprovals(address,address[])": FunctionFragment;
    "withdrawReservesTo(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ROLES"
      | "TRSRY"
      | "changeKernel"
      | "configureDependencies"
      | "decreaseDebt"
      | "grantDebtorApproval"
      | "grantWithdrawerApproval"
      | "increaseDebt"
      | "isActive"
      | "kernel"
      | "reduceDebtorApproval"
      | "reduceWithdrawerApproval"
      | "requestPermissions"
      | "revokePolicyApprovals"
      | "withdrawReservesTo"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ROLES", values?: undefined): string;
  encodeFunctionData(functionFragment: "TRSRY", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeKernel",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "configureDependencies",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseDebt",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "grantDebtorApproval",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "grantWithdrawerApproval",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseDebt",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "isActive", values?: undefined): string;
  encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reduceDebtorApproval",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "reduceWithdrawerApproval",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "requestPermissions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revokePolicyApprovals",
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawReservesTo",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "ROLES", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TRSRY", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeKernel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "configureDependencies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantDebtorApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantWithdrawerApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isActive", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reduceDebtorApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reduceWithdrawerApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestPermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokePolicyApprovals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawReservesTo",
    data: BytesLike
  ): Result;

  events: {
    "ApprovalRevoked(address,address[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalRevoked"): EventFragment;
}

export interface ApprovalRevokedEventObject {
  policy_: string;
  tokens_: string[];
}
export type ApprovalRevokedEvent = TypedEvent<
  [string, string[]],
  ApprovalRevokedEventObject
>;

export type ApprovalRevokedEventFilter = TypedEventFilter<ApprovalRevokedEvent>;

export interface TreasuryCustodian extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TreasuryCustodianInterface;

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
    ROLES(overrides?: CallOverrides): Promise<[string]>;

    TRSRY(overrides?: CallOverrides): Promise<[string]>;

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    configureDependencies(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    decreaseDebt(
      token_: PromiseOrValue<string>,
      debtor_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    grantDebtorApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    grantWithdrawerApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    increaseDebt(
      token_: PromiseOrValue<string>,
      debtor_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isActive(overrides?: CallOverrides): Promise<[boolean]>;

    kernel(overrides?: CallOverrides): Promise<[string]>;

    reduceDebtorApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reduceWithdrawerApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestPermissions(
      overrides?: CallOverrides
    ): Promise<
      [PermissionsStructOutput[]] & { requests: PermissionsStructOutput[] }
    >;

    revokePolicyApprovals(
      policy_: PromiseOrValue<string>,
      tokens_: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawReservesTo(
      to_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  ROLES(overrides?: CallOverrides): Promise<string>;

  TRSRY(overrides?: CallOverrides): Promise<string>;

  changeKernel(
    newKernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  configureDependencies(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  decreaseDebt(
    token_: PromiseOrValue<string>,
    debtor_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  grantDebtorApproval(
    for_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  grantWithdrawerApproval(
    for_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  increaseDebt(
    token_: PromiseOrValue<string>,
    debtor_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isActive(overrides?: CallOverrides): Promise<boolean>;

  kernel(overrides?: CallOverrides): Promise<string>;

  reduceDebtorApproval(
    for_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reduceWithdrawerApproval(
    for_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestPermissions(
    overrides?: CallOverrides
  ): Promise<PermissionsStructOutput[]>;

  revokePolicyApprovals(
    policy_: PromiseOrValue<string>,
    tokens_: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawReservesTo(
    to_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ROLES(overrides?: CallOverrides): Promise<string>;

    TRSRY(overrides?: CallOverrides): Promise<string>;

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    configureDependencies(overrides?: CallOverrides): Promise<string[]>;

    decreaseDebt(
      token_: PromiseOrValue<string>,
      debtor_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    grantDebtorApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    grantWithdrawerApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseDebt(
      token_: PromiseOrValue<string>,
      debtor_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    isActive(overrides?: CallOverrides): Promise<boolean>;

    kernel(overrides?: CallOverrides): Promise<string>;

    reduceDebtorApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    reduceWithdrawerApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    requestPermissions(
      overrides?: CallOverrides
    ): Promise<PermissionsStructOutput[]>;

    revokePolicyApprovals(
      policy_: PromiseOrValue<string>,
      tokens_: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawReservesTo(
      to_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ApprovalRevoked(address,address[])"(
      policy_?: PromiseOrValue<string> | null,
      tokens_?: null
    ): ApprovalRevokedEventFilter;
    ApprovalRevoked(
      policy_?: PromiseOrValue<string> | null,
      tokens_?: null
    ): ApprovalRevokedEventFilter;
  };

  estimateGas: {
    ROLES(overrides?: CallOverrides): Promise<BigNumber>;

    TRSRY(overrides?: CallOverrides): Promise<BigNumber>;

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    configureDependencies(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    decreaseDebt(
      token_: PromiseOrValue<string>,
      debtor_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    grantDebtorApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    grantWithdrawerApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    increaseDebt(
      token_: PromiseOrValue<string>,
      debtor_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isActive(overrides?: CallOverrides): Promise<BigNumber>;

    kernel(overrides?: CallOverrides): Promise<BigNumber>;

    reduceDebtorApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reduceWithdrawerApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestPermissions(overrides?: CallOverrides): Promise<BigNumber>;

    revokePolicyApprovals(
      policy_: PromiseOrValue<string>,
      tokens_: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawReservesTo(
      to_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ROLES(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TRSRY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    configureDependencies(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    decreaseDebt(
      token_: PromiseOrValue<string>,
      debtor_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    grantDebtorApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    grantWithdrawerApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    increaseDebt(
      token_: PromiseOrValue<string>,
      debtor_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reduceDebtorApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reduceWithdrawerApproval(
      for_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestPermissions(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    revokePolicyApprovals(
      policy_: PromiseOrValue<string>,
      tokens_: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawReservesTo(
      to_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
