/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  KernelAdapter,
  KernelAdapterInterface,
} from "../../Kernel.sol/KernelAdapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "caller_",
        type: "address",
      },
    ],
    name: "KernelAdapter_OnlyKernel",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract Kernel",
        name: "newKernel_",
        type: "address",
      },
    ],
    name: "changeKernel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kernel",
    outputs: [
      {
        internalType: "contract Kernel",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class KernelAdapter__factory {
  static readonly abi = _abi;
  static createInterface(): KernelAdapterInterface {
    return new utils.Interface(_abi) as KernelAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KernelAdapter {
    return new Contract(address, _abi, signerOrProvider) as KernelAdapter;
  }
}
