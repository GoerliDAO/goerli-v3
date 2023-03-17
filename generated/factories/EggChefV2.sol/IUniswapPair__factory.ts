/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUniswapPair,
  IUniswapPairInterface,
} from "../../EggChefV2.sol/IUniswapPair";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    inputs: [],
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IUniswapPair__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapPairInterface {
    return new utils.Interface(_abi) as IUniswapPairInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapPair {
    return new Contract(address, _abi, signerOrProvider) as IUniswapPair;
  }
}
