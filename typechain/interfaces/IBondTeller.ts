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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface IBondTellerInterface extends utils.Interface {
  functions: {
    "claimFees(address[],address)": FunctionFragment;
    "getFee(address)": FunctionFragment;
    "purchase(address,address,uint256,uint256,uint256)": FunctionFragment;
    "setCreateFeeDiscount(uint48)": FunctionFragment;
    "setProtocolFee(uint48)": FunctionFragment;
    "setReferrerFee(uint48)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimFees"
      | "getFee"
      | "purchase"
      | "setCreateFeeDiscount"
      | "setProtocolFee"
      | "setReferrerFee"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimFees",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getFee",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "purchase",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setCreateFeeDiscount",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setProtocolFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setReferrerFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "purchase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCreateFeeDiscount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReferrerFee",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IBondTeller extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBondTellerInterface;

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
    claimFees(
      tokens_: PromiseOrValue<string>[],
      to_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getFee(
      referrer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    purchase(
      recipient_: PromiseOrValue<string>,
      referrer_: PromiseOrValue<string>,
      id_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      minAmountOut_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setCreateFeeDiscount(
      discount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setProtocolFee(
      fee_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setReferrerFee(
      fee_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  claimFees(
    tokens_: PromiseOrValue<string>[],
    to_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getFee(
    referrer_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  purchase(
    recipient_: PromiseOrValue<string>,
    referrer_: PromiseOrValue<string>,
    id_: PromiseOrValue<BigNumberish>,
    amount_: PromiseOrValue<BigNumberish>,
    minAmountOut_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setCreateFeeDiscount(
    discount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setProtocolFee(
    fee_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setReferrerFee(
    fee_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimFees(
      tokens_: PromiseOrValue<string>[],
      to_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getFee(
      referrer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    purchase(
      recipient_: PromiseOrValue<string>,
      referrer_: PromiseOrValue<string>,
      id_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      minAmountOut_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, number]>;

    setCreateFeeDiscount(
      discount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setProtocolFee(
      fee_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setReferrerFee(
      fee_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    claimFees(
      tokens_: PromiseOrValue<string>[],
      to_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getFee(
      referrer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    purchase(
      recipient_: PromiseOrValue<string>,
      referrer_: PromiseOrValue<string>,
      id_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      minAmountOut_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setCreateFeeDiscount(
      discount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setProtocolFee(
      fee_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setReferrerFee(
      fee_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimFees(
      tokens_: PromiseOrValue<string>[],
      to_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getFee(
      referrer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    purchase(
      recipient_: PromiseOrValue<string>,
      referrer_: PromiseOrValue<string>,
      id_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      minAmountOut_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setCreateFeeDiscount(
      discount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setProtocolFee(
      fee_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setReferrerFee(
      fee_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}