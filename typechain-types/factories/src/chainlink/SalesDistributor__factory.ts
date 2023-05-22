/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SalesDistributor,
  SalesDistributorInterface,
} from "../../../src/chainlink/SalesDistributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_salesDistributorClient",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "hyphenatedOrderId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSale",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalProfit",
        type: "uint256",
      },
    ],
    name: "ProfitsDistributed",
    type: "event",
  },
  {
    inputs: [],
    name: "USDC_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "nftAddress",
            type: "address[]",
          },
          {
            internalType: "string[]",
            name: "hyphenatedOrderIds",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "totalSale",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "totalProfit",
            type: "uint256[]",
          },
        ],
        internalType: "struct SalesDistributor.SaleDetails",
        name: "saleDetails",
        type: "tuple",
      },
    ],
    name: "distributeProfits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
    ],
    name: "getDistributionByNftAddress",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserProfit",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "salesDistributorClient",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_salesDistributorClient",
        type: "address",
      },
    ],
    name: "setSalesDistributorClient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalDistributedProfit",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalDistributedSales",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userProfits",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161100138038061100183398101604081905261002f916100ad565b6100383361005d565b600180546001600160a01b0319166001600160a01b03929092169190911790556100dd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100bf57600080fd5b81516001600160a01b03811681146100d657600080fd5b9392505050565b610f15806100ec6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c8063aa0a53fd11610081578063be3548361161005b578063be35483614610207578063ce261f7b14610227578063f2fde38b1461024757600080fd5b8063aa0a53fd146101b9578063b80202a8146101cc578063bb09d9b7146101ec57600080fd5b8063715018a6116100b2578063715018a61461018b5780638da5cb5b1461019557806399cb9a0d146101a657600080fd5b8063520ab54d146100d957806358e2040d146101155780635e8e7f7314610140575b600080fd5b6101026100e7366004610a80565b6001600160a01b031660009081526004602052604090205490565b6040519081526020015b60405180910390f35b600154610128906001600160a01b031681565b6040516001600160a01b03909116815260200161010c565b61017661014e366004610a80565b6001600160a01b03166000908152600260209081526040808320546003909252909120549091565b6040805192835260208301919091520161010c565b61019361025a565b005b6000546001600160a01b0316610128565b6101936101b4366004610ceb565b61026e565b6101936101c7366004610a80565b6108ed565b6101026101da366004610a80565b60036020526000908152604090205481565b610128732791bca1f2de4661ed88a30c99a7a9449aa8417481565b610102610215366004610a80565b60046020526000908152604090205481565b610102610235366004610a80565b60026020526000908152604090205481565b610193610255366004610a80565b610924565b6102626109b4565b61026c6000610a0e565b565b6001546001600160a01b031633146102f35760405162461bcd60e51b815260206004820152602a60248201527f43616c6c6572206973206e6f74207468652073616c657320646973747269627560448201527f746f7220636c69656e740000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60208101515181515114801561030f5750604081015151815151145b80156103215750606081015151815151145b6103935760405162461bcd60e51b815260206004820152603060248201527f416c6c2053616c6544657461696c7320617272617973206d757374206861766560448201527f207468652073616d65206c656e6774680000000000000000000000000000000060648201526084016102ea565b732791bca1f2de4661ed88a30c99a7a9449aa8417460005b8251518110156108e8576000836000015182815181106103cd576103cd610dc4565b60209081029190910101516040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529091506000906001600160a01b038516906370a082319060240160206040518083038186803b15801561043657600080fd5b505afa15801561044a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046e9190610dda565b90508460600151838151811061048657610486610dc4565b60200260200101518110156105035760405162461bcd60e51b815260206004820152602160248201527f4e6f7420656e6f756768205553444320666f7220646973747269627574696f6e60448201527f2e0000000000000000000000000000000000000000000000000000000000000060648201526084016102ea565b60005b826001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561053f57600080fd5b505afa158015610553573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105779190610dda565b811015610732576040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018290526000906001600160a01b03851690636352211e9060240160206040518083038186803b1580156105da57600080fd5b505afa1580156105ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106129190610df3565b9050856001600160a01b031663a9059cbb828960600151888151811061063a5761063a610dc4565b60200260200101516040518363ffffffff1660e01b81526004016106739291906001600160a01b03929092168252602082015260400190565b602060405180830381600087803b15801561068d57600080fd5b505af11580156106a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c59190610e10565b50866060015185815181106106dc576106dc610dc4565b602002602001015160046000836001600160a01b03166001600160a01b0316815260200190815260200160002060008282546107189190610e48565b9091555082915061072a905081610e60565b915050610506565b508460400151838151811061074957610749610dc4565b6020026020010151600260008760000151868151811061076b5761076b610dc4565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008282546107a29190610e48565b909155505060608501518051849081106107be576107be610dc4565b602002602001015160036000876000015186815181106107e0576107e0610dc4565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008282546108179190610e48565b9091555050845180518490811061083057610830610dc4565b60200260200101516001600160a01b03167f81832f05cdba4e5e011cf8718eaec07ad93c568f079c20abb5415acb011e81198660200151858151811061087857610878610dc4565b60200260200101518760400151868151811061089657610896610dc4565b6020026020010151886060015187815181106108b4576108b4610dc4565b60200260200101516040516108cb93929190610e7b565b60405180910390a2505080806108e090610e60565b9150506103ab565b505050565b6108f56109b4565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b61092c6109b4565b6001600160a01b0381166109a85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016102ea565b6109b181610a0e565b50565b6000546001600160a01b0316331461026c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102ea565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146109b157600080fd5b600060208284031215610a9257600080fd5b8135610a9d81610a6b565b9392505050565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715610add57610add610aa4565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610b0c57610b0c610aa4565b604052919050565b600067ffffffffffffffff821115610b2e57610b2e610aa4565b5060051b60200190565b600082601f830112610b4957600080fd5b81356020610b5e610b5983610b14565b610ae3565b82815260059290921b84018101918181019086841115610b7d57600080fd5b8286015b84811015610ba1578035610b9481610a6b565b8352918301918301610b81565b509695505050505050565b6000601f8381840112610bbe57600080fd5b82356020610bce610b5983610b14565b82815260059290921b85018101918181019087841115610bed57600080fd5b8287015b84811015610c8457803567ffffffffffffffff80821115610c125760008081fd5b818a0191508a603f830112610c275760008081fd5b85820135604082821115610c3d57610c3d610aa4565b610c4e828b01601f19168901610ae3565b92508183528c81838601011115610c655760008081fd5b8181850189850137506000908201870152845250918301918301610bf1565b50979650505050505050565b600082601f830112610ca157600080fd5b81356020610cb1610b5983610b14565b82815260059290921b84018101918181019086841115610cd057600080fd5b8286015b84811015610ba15780358352918301918301610cd4565b600060208284031215610cfd57600080fd5b813567ffffffffffffffff80821115610d1557600080fd5b9083019060808286031215610d2957600080fd5b610d31610aba565b823582811115610d4057600080fd5b610d4c87828601610b38565b825250602083013582811115610d6157600080fd5b610d6d87828601610bac565b602083015250604083013582811115610d8557600080fd5b610d9187828601610c90565b604083015250606083013582811115610da957600080fd5b610db587828601610c90565b60608301525095945050505050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215610dec57600080fd5b5051919050565b600060208284031215610e0557600080fd5b8151610a9d81610a6b565b600060208284031215610e2257600080fd5b81518015158114610a9d57600080fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115610e5b57610e5b610e32565b500190565b6000600019821415610e7457610e74610e32565b5060010190565b606081526000845180606084015260005b81811015610ea95760208188018101516080868401015201610e8c565b81811115610ebb576000608083860101525b5060208301949094525060408101919091526080601f909201601f1916010191905056fea2646970667358221220026f0a09cd6d60d25232a5e1272249f20463f1632368fbd6acc20b5f4dac782f64736f6c63430008090033";

type SalesDistributorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SalesDistributorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SalesDistributor__factory extends ContractFactory {
  constructor(...args: SalesDistributorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _salesDistributorClient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SalesDistributor> {
    return super.deploy(
      _salesDistributorClient,
      overrides || {}
    ) as Promise<SalesDistributor>;
  }
  override getDeployTransaction(
    _salesDistributorClient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_salesDistributorClient, overrides || {});
  }
  override attach(address: string): SalesDistributor {
    return super.attach(address) as SalesDistributor;
  }
  override connect(signer: Signer): SalesDistributor__factory {
    return super.connect(signer) as SalesDistributor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SalesDistributorInterface {
    return new utils.Interface(_abi) as SalesDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SalesDistributor {
    return new Contract(address, _abi, signerOrProvider) as SalesDistributor;
  }
}
