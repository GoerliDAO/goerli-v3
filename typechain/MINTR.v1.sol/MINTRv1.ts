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

export interface MINTRv1Interface extends utils.Interface {
  functions: {
    "INIT()": FunctionFragment;
    "KEYCODE()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "activate()": FunctionFragment;
    "active()": FunctionFragment;
    "burnGdao(address,uint256)": FunctionFragment;
    "changeKernel(address)": FunctionFragment;
    "deactivate()": FunctionFragment;
    "decreaseMintApproval(address,uint256)": FunctionFragment;
    "gdao()": FunctionFragment;
    "increaseMintApproval(address,uint256)": FunctionFragment;
    "kernel()": FunctionFragment;
    "mintApproval(address)": FunctionFragment;
    "mintGdao(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "INIT"
      | "KEYCODE"
      | "VERSION"
      | "activate"
      | "active"
      | "burnGdao"
      | "changeKernel"
      | "deactivate"
      | "decreaseMintApproval"
      | "gdao"
      | "increaseMintApproval"
      | "kernel"
      | "mintApproval"
      | "mintGdao"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "INIT", values?: undefined): string;
  encodeFunctionData(functionFragment: "KEYCODE", values?: undefined): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(functionFragment: "activate", values?: undefined): string;
  encodeFunctionData(functionFragment: "active", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "burnGdao",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeKernel",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseMintApproval",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "gdao", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "increaseMintApproval",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mintApproval",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "mintGdao",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "INIT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "KEYCODE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "activate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "active", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnGdao", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeKernel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deactivate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseMintApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gdao", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseMintApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintGdao", data: BytesLike): Result;

  events: {
    "Burn(address,address,uint256)": EventFragment;
    "DecreaseMintApproval(address,uint256)": EventFragment;
    "IncreaseMintApproval(address,uint256)": EventFragment;
    "Mint(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DecreaseMintApproval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IncreaseMintApproval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
}

export interface BurnEventObject {
  policy_: string;
  from_: string;
  amount_: BigNumber;
}
export type BurnEvent = TypedEvent<
  [string, string, BigNumber],
  BurnEventObject
>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface DecreaseMintApprovalEventObject {
  policy_: string;
  newAmount_: BigNumber;
}
export type DecreaseMintApprovalEvent = TypedEvent<
  [string, BigNumber],
  DecreaseMintApprovalEventObject
>;

export type DecreaseMintApprovalEventFilter =
  TypedEventFilter<DecreaseMintApprovalEvent>;

export interface IncreaseMintApprovalEventObject {
  policy_: string;
  newAmount_: BigNumber;
}
export type IncreaseMintApprovalEvent = TypedEvent<
  [string, BigNumber],
  IncreaseMintApprovalEventObject
>;

export type IncreaseMintApprovalEventFilter =
  TypedEventFilter<IncreaseMintApprovalEvent>;

export interface MintEventObject {
  policy_: string;
  to_: string;
  amount_: BigNumber;
}
export type MintEvent = TypedEvent<
  [string, string, BigNumber],
  MintEventObject
>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface MINTRv1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MINTRv1Interface;

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

    burnGdao(
      from_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deactivate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    decreaseMintApproval(
      policy_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    gdao(overrides?: CallOverrides): Promise<[string]>;

    increaseMintApproval(
      policy_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    kernel(overrides?: CallOverrides): Promise<[string]>;

    mintApproval(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mintGdao(
      to_: PromiseOrValue<string>,
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

  burnGdao(
    from_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeKernel(
    newKernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deactivate(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  decreaseMintApproval(
    policy_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  gdao(overrides?: CallOverrides): Promise<string>;

  increaseMintApproval(
    policy_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  kernel(overrides?: CallOverrides): Promise<string>;

  mintApproval(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mintGdao(
    to_: PromiseOrValue<string>,
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

    burnGdao(
      from_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    deactivate(overrides?: CallOverrides): Promise<void>;

    decreaseMintApproval(
      policy_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    gdao(overrides?: CallOverrides): Promise<string>;

    increaseMintApproval(
      policy_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    kernel(overrides?: CallOverrides): Promise<string>;

    mintApproval(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintGdao(
      to_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Burn(address,address,uint256)"(
      policy_?: PromiseOrValue<string> | null,
      from_?: PromiseOrValue<string> | null,
      amount_?: null
    ): BurnEventFilter;
    Burn(
      policy_?: PromiseOrValue<string> | null,
      from_?: PromiseOrValue<string> | null,
      amount_?: null
    ): BurnEventFilter;

    "DecreaseMintApproval(address,uint256)"(
      policy_?: PromiseOrValue<string> | null,
      newAmount_?: null
    ): DecreaseMintApprovalEventFilter;
    DecreaseMintApproval(
      policy_?: PromiseOrValue<string> | null,
      newAmount_?: null
    ): DecreaseMintApprovalEventFilter;

    "IncreaseMintApproval(address,uint256)"(
      policy_?: PromiseOrValue<string> | null,
      newAmount_?: null
    ): IncreaseMintApprovalEventFilter;
    IncreaseMintApproval(
      policy_?: PromiseOrValue<string> | null,
      newAmount_?: null
    ): IncreaseMintApprovalEventFilter;

    "Mint(address,address,uint256)"(
      policy_?: PromiseOrValue<string> | null,
      to_?: PromiseOrValue<string> | null,
      amount_?: null
    ): MintEventFilter;
    Mint(
      policy_?: PromiseOrValue<string> | null,
      to_?: PromiseOrValue<string> | null,
      amount_?: null
    ): MintEventFilter;
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

    burnGdao(
      from_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deactivate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    decreaseMintApproval(
      policy_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    gdao(overrides?: CallOverrides): Promise<BigNumber>;

    increaseMintApproval(
      policy_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    kernel(overrides?: CallOverrides): Promise<BigNumber>;

    mintApproval(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintGdao(
      to_: PromiseOrValue<string>,
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

    burnGdao(
      from_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deactivate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    decreaseMintApproval(
      policy_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    gdao(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseMintApproval(
      policy_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintApproval(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintGdao(
      to_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
