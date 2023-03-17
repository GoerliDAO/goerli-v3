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

export interface KernelTestInterface extends utils.Interface {
  functions: {
    "IS_SCRIPT()": FunctionFragment;
    "IS_TEST()": FunctionFragment;
    "deployer()": FunctionFragment;
    "err()": FunctionFragment;
    "failed()": FunctionFragment;
    "multisig()": FunctionFragment;
    "setUp()": FunctionFragment;
    "testCorrectness_ActivatePolicy()": FunctionFragment;
    "testCorrectness_CallPublicPolicyFunction()": FunctionFragment;
    "testCorrectness_ChangeExecutor()": FunctionFragment;
    "testCorrectness_DeactivatePolicy()": FunctionFragment;
    "testCorrectness_EnsureContract()": FunctionFragment;
    "testCorrectness_EnsureValidKeycode()": FunctionFragment;
    "testCorrectness_InitializeKernel()": FunctionFragment;
    "testCorrectness_InitializeModule()": FunctionFragment;
    "testCorrectness_InstallModule()": FunctionFragment;
    "testCorrectness_MigrateKernel()": FunctionFragment;
    "testCorrectness_PolicyPermissions()": FunctionFragment;
    "testCorrectness_UpgradeModule()": FunctionFragment;
    "testRevert_ActivatePolicyTwice()": FunctionFragment;
    "user()": FunctionFragment;
    "userFactory()": FunctionFragment;
    "vm()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "IS_SCRIPT"
      | "IS_TEST"
      | "deployer"
      | "err"
      | "failed"
      | "multisig"
      | "setUp"
      | "testCorrectness_ActivatePolicy"
      | "testCorrectness_CallPublicPolicyFunction"
      | "testCorrectness_ChangeExecutor"
      | "testCorrectness_DeactivatePolicy"
      | "testCorrectness_EnsureContract"
      | "testCorrectness_EnsureValidKeycode"
      | "testCorrectness_InitializeKernel"
      | "testCorrectness_InitializeModule"
      | "testCorrectness_InstallModule"
      | "testCorrectness_MigrateKernel"
      | "testCorrectness_PolicyPermissions"
      | "testCorrectness_UpgradeModule"
      | "testRevert_ActivatePolicyTwice"
      | "user"
      | "userFactory"
      | "vm"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
  encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
  encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
  encodeFunctionData(functionFragment: "err", values?: undefined): string;
  encodeFunctionData(functionFragment: "failed", values?: undefined): string;
  encodeFunctionData(functionFragment: "multisig", values?: undefined): string;
  encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "testCorrectness_ActivatePolicy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testCorrectness_CallPublicPolicyFunction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testCorrectness_ChangeExecutor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testCorrectness_DeactivatePolicy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testCorrectness_EnsureContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testCorrectness_EnsureValidKeycode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testCorrectness_InitializeKernel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testCorrectness_InitializeModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testCorrectness_InstallModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testCorrectness_MigrateKernel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testCorrectness_PolicyPermissions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testCorrectness_UpgradeModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testRevert_ActivatePolicyTwice",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "user", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "userFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vm", values?: undefined): string;

  decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "err", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multisig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testCorrectness_ActivatePolicy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testCorrectness_CallPublicPolicyFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testCorrectness_ChangeExecutor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testCorrectness_DeactivatePolicy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testCorrectness_EnsureContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testCorrectness_EnsureValidKeycode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testCorrectness_InitializeKernel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testCorrectness_InitializeModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testCorrectness_InstallModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testCorrectness_MigrateKernel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testCorrectness_PolicyPermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testCorrectness_UpgradeModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testRevert_ActivatePolicyTwice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "user", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vm", data: BytesLike): Result;

  events: {
    "log(string)": EventFragment;
    "log_address(address)": EventFragment;
    "log_array(uint256[])": EventFragment;
    "log_array(int256[])": EventFragment;
    "log_array(address[])": EventFragment;
    "log_bytes(bytes)": EventFragment;
    "log_bytes32(bytes32)": EventFragment;
    "log_int(int256)": EventFragment;
    "log_named_address(string,address)": EventFragment;
    "log_named_array(string,uint256[])": EventFragment;
    "log_named_array(string,int256[])": EventFragment;
    "log_named_array(string,address[])": EventFragment;
    "log_named_bytes(string,bytes)": EventFragment;
    "log_named_bytes32(string,bytes32)": EventFragment;
    "log_named_decimal_int(string,int256,uint256)": EventFragment;
    "log_named_decimal_uint(string,uint256,uint256)": EventFragment;
    "log_named_int(string,int256)": EventFragment;
    "log_named_string(string,string)": EventFragment;
    "log_named_uint(string,uint256)": EventFragment;
    "log_string(string)": EventFragment;
    "log_uint(uint256)": EventFragment;
    "logs(bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "log"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_address"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_array(uint256[])"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_array(int256[])"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_array(address[])"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_address"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "log_named_array(string,uint256[])"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "log_named_array(string,int256[])"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "log_named_array(string,address[])"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "logs"): EventFragment;
}

export interface logEventObject {
  arg0: string;
}
export type logEvent = TypedEvent<[string], logEventObject>;

export type logEventFilter = TypedEventFilter<logEvent>;

export interface log_addressEventObject {
  arg0: string;
}
export type log_addressEvent = TypedEvent<[string], log_addressEventObject>;

export type log_addressEventFilter = TypedEventFilter<log_addressEvent>;

export interface log_array_uint256_array_EventObject {
  val: BigNumber[];
}
export type log_array_uint256_array_Event = TypedEvent<
  [BigNumber[]],
  log_array_uint256_array_EventObject
>;

export type log_array_uint256_array_EventFilter =
  TypedEventFilter<log_array_uint256_array_Event>;

export interface log_array_int256_array_EventObject {
  val: BigNumber[];
}
export type log_array_int256_array_Event = TypedEvent<
  [BigNumber[]],
  log_array_int256_array_EventObject
>;

export type log_array_int256_array_EventFilter =
  TypedEventFilter<log_array_int256_array_Event>;

export interface log_array_address_array_EventObject {
  val: string[];
}
export type log_array_address_array_Event = TypedEvent<
  [string[]],
  log_array_address_array_EventObject
>;

export type log_array_address_array_EventFilter =
  TypedEventFilter<log_array_address_array_Event>;

export interface log_bytesEventObject {
  arg0: string;
}
export type log_bytesEvent = TypedEvent<[string], log_bytesEventObject>;

export type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;

export interface log_bytes32EventObject {
  arg0: string;
}
export type log_bytes32Event = TypedEvent<[string], log_bytes32EventObject>;

export type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;

export interface log_intEventObject {
  arg0: BigNumber;
}
export type log_intEvent = TypedEvent<[BigNumber], log_intEventObject>;

export type log_intEventFilter = TypedEventFilter<log_intEvent>;

export interface log_named_addressEventObject {
  key: string;
  val: string;
}
export type log_named_addressEvent = TypedEvent<
  [string, string],
  log_named_addressEventObject
>;

export type log_named_addressEventFilter =
  TypedEventFilter<log_named_addressEvent>;

export interface log_named_array_string_uint256_array_EventObject {
  key: string;
  val: BigNumber[];
}
export type log_named_array_string_uint256_array_Event = TypedEvent<
  [string, BigNumber[]],
  log_named_array_string_uint256_array_EventObject
>;

export type log_named_array_string_uint256_array_EventFilter =
  TypedEventFilter<log_named_array_string_uint256_array_Event>;

export interface log_named_array_string_int256_array_EventObject {
  key: string;
  val: BigNumber[];
}
export type log_named_array_string_int256_array_Event = TypedEvent<
  [string, BigNumber[]],
  log_named_array_string_int256_array_EventObject
>;

export type log_named_array_string_int256_array_EventFilter =
  TypedEventFilter<log_named_array_string_int256_array_Event>;

export interface log_named_array_string_address_array_EventObject {
  key: string;
  val: string[];
}
export type log_named_array_string_address_array_Event = TypedEvent<
  [string, string[]],
  log_named_array_string_address_array_EventObject
>;

export type log_named_array_string_address_array_EventFilter =
  TypedEventFilter<log_named_array_string_address_array_Event>;

export interface log_named_bytesEventObject {
  key: string;
  val: string;
}
export type log_named_bytesEvent = TypedEvent<
  [string, string],
  log_named_bytesEventObject
>;

export type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;

export interface log_named_bytes32EventObject {
  key: string;
  val: string;
}
export type log_named_bytes32Event = TypedEvent<
  [string, string],
  log_named_bytes32EventObject
>;

export type log_named_bytes32EventFilter =
  TypedEventFilter<log_named_bytes32Event>;

export interface log_named_decimal_intEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_intEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_intEventObject
>;

export type log_named_decimal_intEventFilter =
  TypedEventFilter<log_named_decimal_intEvent>;

export interface log_named_decimal_uintEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_uintEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_uintEventObject
>;

export type log_named_decimal_uintEventFilter =
  TypedEventFilter<log_named_decimal_uintEvent>;

export interface log_named_intEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_intEvent = TypedEvent<
  [string, BigNumber],
  log_named_intEventObject
>;

export type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;

export interface log_named_stringEventObject {
  key: string;
  val: string;
}
export type log_named_stringEvent = TypedEvent<
  [string, string],
  log_named_stringEventObject
>;

export type log_named_stringEventFilter =
  TypedEventFilter<log_named_stringEvent>;

export interface log_named_uintEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_uintEvent = TypedEvent<
  [string, BigNumber],
  log_named_uintEventObject
>;

export type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;

export interface log_stringEventObject {
  arg0: string;
}
export type log_stringEvent = TypedEvent<[string], log_stringEventObject>;

export type log_stringEventFilter = TypedEventFilter<log_stringEvent>;

export interface log_uintEventObject {
  arg0: BigNumber;
}
export type log_uintEvent = TypedEvent<[BigNumber], log_uintEventObject>;

export type log_uintEventFilter = TypedEventFilter<log_uintEvent>;

export interface logsEventObject {
  arg0: string;
}
export type logsEvent = TypedEvent<[string], logsEventObject>;

export type logsEventFilter = TypedEventFilter<logsEvent>;

export interface KernelTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KernelTestInterface;

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
    IS_SCRIPT(overrides?: CallOverrides): Promise<[boolean]>;

    IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;

    deployer(overrides?: CallOverrides): Promise<[string]>;

    err(overrides?: CallOverrides): Promise<[string]>;

    failed(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    multisig(overrides?: CallOverrides): Promise<[string]>;

    setUp(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testCorrectness_ActivatePolicy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testCorrectness_CallPublicPolicyFunction(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testCorrectness_ChangeExecutor(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testCorrectness_DeactivatePolicy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testCorrectness_EnsureContract(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testCorrectness_EnsureValidKeycode(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testCorrectness_InitializeKernel(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testCorrectness_InitializeModule(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testCorrectness_InstallModule(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testCorrectness_MigrateKernel(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testCorrectness_PolicyPermissions(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testCorrectness_UpgradeModule(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testRevert_ActivatePolicyTwice(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    user(overrides?: CallOverrides): Promise<[string]>;

    userFactory(overrides?: CallOverrides): Promise<[string]>;

    vm(overrides?: CallOverrides): Promise<[string]>;
  };

  IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

  IS_TEST(overrides?: CallOverrides): Promise<boolean>;

  deployer(overrides?: CallOverrides): Promise<string>;

  err(overrides?: CallOverrides): Promise<string>;

  failed(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  multisig(overrides?: CallOverrides): Promise<string>;

  setUp(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testCorrectness_ActivatePolicy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testCorrectness_CallPublicPolicyFunction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testCorrectness_ChangeExecutor(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testCorrectness_DeactivatePolicy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testCorrectness_EnsureContract(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testCorrectness_EnsureValidKeycode(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testCorrectness_InitializeKernel(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testCorrectness_InitializeModule(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testCorrectness_InstallModule(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testCorrectness_MigrateKernel(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testCorrectness_PolicyPermissions(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testCorrectness_UpgradeModule(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testRevert_ActivatePolicyTwice(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  user(overrides?: CallOverrides): Promise<string>;

  userFactory(overrides?: CallOverrides): Promise<string>;

  vm(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

    IS_TEST(overrides?: CallOverrides): Promise<boolean>;

    deployer(overrides?: CallOverrides): Promise<string>;

    err(overrides?: CallOverrides): Promise<string>;

    failed(overrides?: CallOverrides): Promise<boolean>;

    multisig(overrides?: CallOverrides): Promise<string>;

    setUp(overrides?: CallOverrides): Promise<void>;

    testCorrectness_ActivatePolicy(overrides?: CallOverrides): Promise<void>;

    testCorrectness_CallPublicPolicyFunction(
      overrides?: CallOverrides
    ): Promise<void>;

    testCorrectness_ChangeExecutor(overrides?: CallOverrides): Promise<void>;

    testCorrectness_DeactivatePolicy(overrides?: CallOverrides): Promise<void>;

    testCorrectness_EnsureContract(overrides?: CallOverrides): Promise<void>;

    testCorrectness_EnsureValidKeycode(
      overrides?: CallOverrides
    ): Promise<void>;

    testCorrectness_InitializeKernel(overrides?: CallOverrides): Promise<void>;

    testCorrectness_InitializeModule(overrides?: CallOverrides): Promise<void>;

    testCorrectness_InstallModule(overrides?: CallOverrides): Promise<void>;

    testCorrectness_MigrateKernel(overrides?: CallOverrides): Promise<void>;

    testCorrectness_PolicyPermissions(overrides?: CallOverrides): Promise<void>;

    testCorrectness_UpgradeModule(overrides?: CallOverrides): Promise<void>;

    testRevert_ActivatePolicyTwice(overrides?: CallOverrides): Promise<void>;

    user(overrides?: CallOverrides): Promise<string>;

    userFactory(overrides?: CallOverrides): Promise<string>;

    vm(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "log(string)"(arg0?: null): logEventFilter;
    log(arg0?: null): logEventFilter;

    "log_address(address)"(arg0?: null): log_addressEventFilter;
    log_address(arg0?: null): log_addressEventFilter;

    "log_array(uint256[])"(val?: null): log_array_uint256_array_EventFilter;
    "log_array(int256[])"(val?: null): log_array_int256_array_EventFilter;
    "log_array(address[])"(val?: null): log_array_address_array_EventFilter;

    "log_bytes(bytes)"(arg0?: null): log_bytesEventFilter;
    log_bytes(arg0?: null): log_bytesEventFilter;

    "log_bytes32(bytes32)"(arg0?: null): log_bytes32EventFilter;
    log_bytes32(arg0?: null): log_bytes32EventFilter;

    "log_int(int256)"(arg0?: null): log_intEventFilter;
    log_int(arg0?: null): log_intEventFilter;

    "log_named_address(string,address)"(
      key?: null,
      val?: null
    ): log_named_addressEventFilter;
    log_named_address(key?: null, val?: null): log_named_addressEventFilter;

    "log_named_array(string,uint256[])"(
      key?: null,
      val?: null
    ): log_named_array_string_uint256_array_EventFilter;
    "log_named_array(string,int256[])"(
      key?: null,
      val?: null
    ): log_named_array_string_int256_array_EventFilter;
    "log_named_array(string,address[])"(
      key?: null,
      val?: null
    ): log_named_array_string_address_array_EventFilter;

    "log_named_bytes(string,bytes)"(
      key?: null,
      val?: null
    ): log_named_bytesEventFilter;
    log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;

    "log_named_bytes32(string,bytes32)"(
      key?: null,
      val?: null
    ): log_named_bytes32EventFilter;
    log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;

    "log_named_decimal_int(string,int256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;
    log_named_decimal_int(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;

    "log_named_decimal_uint(string,uint256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;
    log_named_decimal_uint(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;

    "log_named_int(string,int256)"(
      key?: null,
      val?: null
    ): log_named_intEventFilter;
    log_named_int(key?: null, val?: null): log_named_intEventFilter;

    "log_named_string(string,string)"(
      key?: null,
      val?: null
    ): log_named_stringEventFilter;
    log_named_string(key?: null, val?: null): log_named_stringEventFilter;

    "log_named_uint(string,uint256)"(
      key?: null,
      val?: null
    ): log_named_uintEventFilter;
    log_named_uint(key?: null, val?: null): log_named_uintEventFilter;

    "log_string(string)"(arg0?: null): log_stringEventFilter;
    log_string(arg0?: null): log_stringEventFilter;

    "log_uint(uint256)"(arg0?: null): log_uintEventFilter;
    log_uint(arg0?: null): log_uintEventFilter;

    "logs(bytes)"(arg0?: null): logsEventFilter;
    logs(arg0?: null): logsEventFilter;
  };

  estimateGas: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<BigNumber>;

    IS_TEST(overrides?: CallOverrides): Promise<BigNumber>;

    deployer(overrides?: CallOverrides): Promise<BigNumber>;

    err(overrides?: CallOverrides): Promise<BigNumber>;

    failed(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    multisig(overrides?: CallOverrides): Promise<BigNumber>;

    setUp(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testCorrectness_ActivatePolicy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testCorrectness_CallPublicPolicyFunction(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testCorrectness_ChangeExecutor(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testCorrectness_DeactivatePolicy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testCorrectness_EnsureContract(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testCorrectness_EnsureValidKeycode(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testCorrectness_InitializeKernel(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testCorrectness_InitializeModule(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testCorrectness_InstallModule(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testCorrectness_MigrateKernel(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testCorrectness_PolicyPermissions(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testCorrectness_UpgradeModule(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testRevert_ActivatePolicyTwice(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    user(overrides?: CallOverrides): Promise<BigNumber>;

    userFactory(overrides?: CallOverrides): Promise<BigNumber>;

    vm(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    err(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    failed(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    multisig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setUp(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testCorrectness_ActivatePolicy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testCorrectness_CallPublicPolicyFunction(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testCorrectness_ChangeExecutor(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testCorrectness_DeactivatePolicy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testCorrectness_EnsureContract(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testCorrectness_EnsureValidKeycode(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testCorrectness_InitializeKernel(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testCorrectness_InitializeModule(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testCorrectness_InstallModule(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testCorrectness_MigrateKernel(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testCorrectness_PolicyPermissions(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testCorrectness_UpgradeModule(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testRevert_ActivatePolicyTwice(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    user(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vm(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
