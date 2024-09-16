/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Authority, AuthorityInterface } from "../../Auth.sol/Authority";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
    ],
    name: "canCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class Authority__factory {
  static readonly abi = _abi;
  static createInterface(): AuthorityInterface {
    return new utils.Interface(_abi) as AuthorityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Authority {
    return new Contract(address, _abi, signerOrProvider) as Authority;
  }
}
