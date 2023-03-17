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

export interface ZuniswapV2FactoryInterface extends utils.Interface {
  functions: {
    "allPairs(uint256)": FunctionFragment;
    "createPair(address,address)": FunctionFragment;
    "pairs(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "allPairs" | "createPair" | "pairs"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allPairs",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createPair",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "pairs",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "allPairs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createPair", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pairs", data: BytesLike): Result;

  events: {
    "PairCreated(address,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PairCreated"): EventFragment;
}

export interface PairCreatedEventObject {
  token0: string;
  token1: string;
  pair: string;
  arg3: BigNumber;
}
export type PairCreatedEvent = TypedEvent<
  [string, string, string, BigNumber],
  PairCreatedEventObject
>;

export type PairCreatedEventFilter = TypedEventFilter<PairCreatedEvent>;

export interface ZuniswapV2Factory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZuniswapV2FactoryInterface;

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
    allPairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pairs(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  allPairs(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  createPair(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pairs(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    allPairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    pairs(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "PairCreated(address,address,address,uint256)"(
      token0?: PromiseOrValue<string> | null,
      token1?: PromiseOrValue<string> | null,
      pair?: null,
      arg3?: null
    ): PairCreatedEventFilter;
    PairCreated(
      token0?: PromiseOrValue<string> | null,
      token1?: PromiseOrValue<string> | null,
      pair?: null,
      arg3?: null
    ): PairCreatedEventFilter;
  };

  estimateGas: {
    allPairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pairs(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allPairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pairs(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
