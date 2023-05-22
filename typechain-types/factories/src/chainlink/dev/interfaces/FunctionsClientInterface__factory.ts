/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  FunctionsClientInterface,
  FunctionsClientInterfaceInterface,
} from "../../../../../src/chainlink/dev/interfaces/FunctionsClientInterface";

const _abi = [
  {
    inputs: [],
    name: "getDONPublicKey",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "err",
        type: "bytes",
      },
    ],
    name: "handleOracleFulfillment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class FunctionsClientInterface__factory {
  static readonly abi = _abi;
  static createInterface(): FunctionsClientInterfaceInterface {
    return new utils.Interface(_abi) as FunctionsClientInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FunctionsClientInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FunctionsClientInterface;
  }
}
