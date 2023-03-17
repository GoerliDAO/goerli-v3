/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface RolesConsumerInterface extends utils.Interface {
  functions: {
    "ROLES()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "ROLES"): FunctionFragment;

  encodeFunctionData(functionFragment: "ROLES", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ROLES", data: BytesLike): Result;

  events: {};
}

export interface RolesConsumer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RolesConsumerInterface;

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
  };

  ROLES(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    ROLES(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    ROLES(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ROLES(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}