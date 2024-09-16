/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "./common";

export type PermissionsStruct = {
  keycode: PromiseOrValue<BytesLike>;
  funcSelector: PromiseOrValue<BytesLike>;
};

export type PermissionsStructOutput = [string, string] & {
  keycode: string;
  funcSelector: string;
};

export interface MockModuleWriterInterface extends utils.Interface {
  functions: {
    "changeKernel(address)": FunctionFragment;
    "configureDependencies()": FunctionFragment;
    "isActive()": FunctionFragment;
    "kernel()": FunctionFragment;
    "requestPermissions()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "changeKernel"
      | "configureDependencies"
      | "isActive"
      | "kernel"
      | "requestPermissions"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "changeKernel",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "configureDependencies",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isActive", values?: undefined): string;
  encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "requestPermissions",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "changeKernel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "configureDependencies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isActive", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestPermissions",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockModuleWriter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockModuleWriterInterface;

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
    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    configureDependencies(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isActive(overrides?: CallOverrides): Promise<[boolean]>;

    kernel(overrides?: CallOverrides): Promise<[string]>;

    requestPermissions(
      overrides?: CallOverrides
    ): Promise<
      [PermissionsStructOutput[]] & { requests: PermissionsStructOutput[] }
    >;
  };

  changeKernel(
    newKernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  configureDependencies(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isActive(overrides?: CallOverrides): Promise<boolean>;

  kernel(overrides?: CallOverrides): Promise<string>;

  requestPermissions(
    overrides?: CallOverrides
  ): Promise<PermissionsStructOutput[]>;

  callStatic: {
    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    configureDependencies(overrides?: CallOverrides): Promise<string[]>;

    isActive(overrides?: CallOverrides): Promise<boolean>;

    kernel(overrides?: CallOverrides): Promise<string>;

    requestPermissions(
      overrides?: CallOverrides
    ): Promise<PermissionsStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    configureDependencies(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isActive(overrides?: CallOverrides): Promise<BigNumber>;

    kernel(overrides?: CallOverrides): Promise<BigNumber>;

    requestPermissions(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    configureDependencies(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    requestPermissions(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
