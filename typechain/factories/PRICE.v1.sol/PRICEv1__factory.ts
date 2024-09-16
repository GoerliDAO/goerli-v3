/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { PRICEv1, PRICEv1Interface } from "../../PRICE.v1.sol/PRICEv1";

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
        internalType: "address",
        name: "policy_",
        type: "address",
      },
    ],
    name: "Module_PolicyNotPermitted",
    type: "error",
  },
  {
    inputs: [],
    name: "Price_AlreadyInitialized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "priceFeed",
        type: "address",
      },
    ],
    name: "Price_BadFeed",
    type: "error",
  },
  {
    inputs: [],
    name: "Price_InvalidParams",
    type: "error",
  },
  {
    inputs: [],
    name: "Price_NotInitialized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "minimumTargetPrice_",
        type: "uint256",
      },
    ],
    name: "MinimumTargetPriceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint48",
        name: "movingAverageDuration_",
        type: "uint48",
      },
    ],
    name: "MovingAverageDurationChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "movingAverage_",
        type: "uint256",
      },
    ],
    name: "NewObservation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint48",
        name: "observationFrequency_",
        type: "uint48",
      },
    ],
    name: "ObservationFrequencyChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint48",
        name: "gdaoEthUpdateThreshold_",
        type: "uint48",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "reserveEthUpdateThreshold_",
        type: "uint48",
      },
    ],
    name: "UpdateThresholdsChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "INIT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "KEYCODE",
    outputs: [
      {
        internalType: "Keycode",
        name: "",
        type: "bytes5",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "major",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "minor",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
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
    inputs: [
      {
        internalType: "uint256",
        name: "minimumTargetPrice_",
        type: "uint256",
      },
    ],
    name: "changeMinimumTargetPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "movingAverageDuration_",
        type: "uint48",
      },
    ],
    name: "changeMovingAverageDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "observationFrequency_",
        type: "uint48",
      },
    ],
    name: "changeObservationFrequency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "gdaoEthUpdateThreshold_",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "reserveEthUpdateThreshold_",
        type: "uint48",
      },
    ],
    name: "changeUpdateThresholds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cumulativeObs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gdaoEthPriceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV2V3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gdaoEthUpdateThreshold",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMovingAverage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTargetPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "startObservations_",
        type: "uint256[]",
      },
      {
        internalType: "uint48",
        name: "lastObservationTime_",
        type: "uint48",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialized",
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
  {
    inputs: [],
    name: "lastObservationTime",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumTargetPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "movingAverageDuration",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextObsIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numObservations",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "observationFrequency",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "observations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reserveEthPriceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV2V3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reserveEthUpdateThreshold",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateMovingAverage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class PRICEv1__factory {
  static readonly abi = _abi;
  static createInterface(): PRICEv1Interface {
    return new utils.Interface(_abi) as PRICEv1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PRICEv1 {
    return new Contract(address, _abi, signerOrProvider) as PRICEv1;
  }
}
