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

export interface GoerliDaoRolesInterface extends utils.Interface {
  functions: {
    "INIT()": FunctionFragment;
    "KEYCODE()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "changeKernel(address)": FunctionFragment;
    "ensureValidRole(bytes32)": FunctionFragment;
    "hasRole(address,bytes32)": FunctionFragment;
    "kernel()": FunctionFragment;
    "removeRole(bytes32,address)": FunctionFragment;
    "requireRole(bytes32,address)": FunctionFragment;
    "saveRole(bytes32,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "INIT"
      | "KEYCODE"
      | "VERSION"
      | "changeKernel"
      | "ensureValidRole"
      | "hasRole"
      | "kernel"
      | "removeRole"
      | "requireRole"
      | "saveRole"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "INIT", values?: undefined): string;
  encodeFunctionData(functionFragment: "KEYCODE", values?: undefined): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeKernel",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "ensureValidRole",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "requireRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "saveRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "INIT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "KEYCODE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeKernel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ensureValidRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requireRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "saveRole", data: BytesLike): Result;

  events: {
    "RoleGranted(bytes32,address)": EventFragment;
    "RoleRevoked(bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export interface RoleGrantedEventObject {
  role_: string;
  addr_: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role_: string;
  addr_: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface GoerliDaoRoles extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GoerliDaoRolesInterface;

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

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ensureValidRole(
      role_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    hasRole(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    kernel(overrides?: CallOverrides): Promise<[string]>;

    removeRole(
      role_: PromiseOrValue<BytesLike>,
      addr_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requireRole(
      role_: PromiseOrValue<BytesLike>,
      caller_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    saveRole(
      role_: PromiseOrValue<BytesLike>,
      addr_: PromiseOrValue<string>,
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

  changeKernel(
    newKernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ensureValidRole(
    role_: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<void>;

  hasRole(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  kernel(overrides?: CallOverrides): Promise<string>;

  removeRole(
    role_: PromiseOrValue<BytesLike>,
    addr_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requireRole(
    role_: PromiseOrValue<BytesLike>,
    caller_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<void>;

  saveRole(
    role_: PromiseOrValue<BytesLike>,
    addr_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    INIT(overrides?: CallOverrides): Promise<void>;

    KEYCODE(overrides?: CallOverrides): Promise<string>;

    VERSION(
      overrides?: CallOverrides
    ): Promise<[number, number] & { major: number; minor: number }>;

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    ensureValidRole(
      role_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    kernel(overrides?: CallOverrides): Promise<string>;

    removeRole(
      role_: PromiseOrValue<BytesLike>,
      addr_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    requireRole(
      role_: PromiseOrValue<BytesLike>,
      caller_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    saveRole(
      role_: PromiseOrValue<BytesLike>,
      addr_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RoleGranted(bytes32,address)"(
      role_?: PromiseOrValue<BytesLike> | null,
      addr_?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role_?: PromiseOrValue<BytesLike> | null,
      addr_?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address)"(
      role_?: PromiseOrValue<BytesLike> | null,
      addr_?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role_?: PromiseOrValue<BytesLike> | null,
      addr_?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    INIT(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    KEYCODE(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ensureValidRole(
      role_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasRole(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kernel(overrides?: CallOverrides): Promise<BigNumber>;

    removeRole(
      role_: PromiseOrValue<BytesLike>,
      addr_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requireRole(
      role_: PromiseOrValue<BytesLike>,
      caller_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    saveRole(
      role_: PromiseOrValue<BytesLike>,
      addr_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    INIT(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    KEYCODE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeKernel(
      newKernel_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ensureValidRole(
      role_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasRole(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeRole(
      role_: PromiseOrValue<BytesLike>,
      addr_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requireRole(
      role_: PromiseOrValue<BytesLike>,
      caller_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    saveRole(
      role_: PromiseOrValue<BytesLike>,
      addr_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
