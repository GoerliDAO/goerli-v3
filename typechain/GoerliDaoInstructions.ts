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

export type InstructionStruct = {
  action: PromiseOrValue<BigNumberish>;
  target: PromiseOrValue<string>;
};

export type InstructionStructOutput = [number, string] & {
  action: number;
  target: string;
};

export interface GoerliDaoInstructionsInterface extends utils.Interface {
  functions: {
    "INIT()": FunctionFragment;
    "KEYCODE()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "changeKernel(address)": FunctionFragment;
    "getInstructions(uint256)": FunctionFragment;
    "kernel()": FunctionFragment;
    "store((uint8,address)[])": FunctionFragment;
    "storedInstructions(uint256,uint256)": FunctionFragment;
    "totalInstructions()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "INIT"
      | "KEYCODE"
      | "VERSION"
      | "changeKernel"
      | "getInstructions"
      | "kernel"
      | "store"
      | "storedInstructions"
      | "totalInstructions"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "INIT", values?: undefined): string;
  encodeFunctionData(functionFragment: "KEYCODE", values?: undefined): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeKernel",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getInstructions",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "store",
    values: [InstructionStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "storedInstructions",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalInstructions",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "INIT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "KEYCODE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeKernel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInstructions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "storedInstructions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalInstructions",
    data: BytesLike
  ): Result;

  events: {
    "InstructionsStored(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "InstructionsStored"): EventFragment;
}

export interface InstructionsStoredEventObject {
  instructionsId: BigNumber;
}
export type InstructionsStoredEvent = TypedEvent<
  [BigNumber],
  InstructionsStoredEventObject
>;

export type InstructionsStoredEventFilter =
  TypedEventFilter<InstructionsStoredEvent>;

export interface GoerliDaoInstructions extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GoerliDaoInstructionsInterface;

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

    getInstructions(
      instructionsId_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[InstructionStructOutput[]]>;

    kernel(overrides?: CallOverrides): Promise<[string]>;

    store(
      instructions_: InstructionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    storedInstructions(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number, string] & { action: number; target: string }>;

    totalInstructions(overrides?: CallOverrides): Promise<[BigNumber]>;
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

  getInstructions(
    instructionsId_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<InstructionStructOutput[]>;

  kernel(overrides?: CallOverrides): Promise<string>;

  store(
    instructions_: InstructionStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  storedInstructions(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[number, string] & { action: number; target: string }>;

  totalInstructions(overrides?: CallOverrides): Promise<BigNumber>;

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

    getInstructions(
      instructionsId_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<InstructionStructOutput[]>;

    kernel(overrides?: CallOverrides): Promise<string>;

    store(
      instructions_: InstructionStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    storedInstructions(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number, string] & { action: number; target: string }>;

    totalInstructions(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "InstructionsStored(uint256)"(
      instructionsId?: null
    ): InstructionsStoredEventFilter;
    InstructionsStored(instructionsId?: null): InstructionsStoredEventFilter;
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

    getInstructions(
      instructionsId_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kernel(overrides?: CallOverrides): Promise<BigNumber>;

    store(
      instructions_: InstructionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    storedInstructions(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalInstructions(overrides?: CallOverrides): Promise<BigNumber>;
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

    getInstructions(
      instructionsId_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    store(
      instructions_: InstructionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    storedInstructions(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalInstructions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
