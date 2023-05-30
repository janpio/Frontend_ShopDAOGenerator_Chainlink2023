import { DAODataType } from "../types/DAOdata";
export const DAOData: DAODataType = {
  id: "0",
  name: "DAO Name",
  storeUrl: "https://sample.myshopify.com/",
  symbol: "DAO",
  stats: { proposals: 3, holders: 3, voters: 3 },
  proposals: [
    {
      status: "Succeeded",
      title:
        "[EP3.5] [Executable] Activate new .eth Controller and Reverse Registrar",
      id: "429737...8242",
      createdAt: "Mar 29th, 2023",
      updatedAt: "Mar 30th, 2023",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.",
      imageUrl: ["https://tinyurl.com/yh2xkpzm"],
      category: "ProductPropose",
      author: {
        name: "0x1234567890abcdef0123456789abcdef01234567",
        avatarUrl: "https://tinyurl.com/2p8fy9ym",
      },
    },
    {
      status: "Pending",
      title: "[EP3.7] [Executable] Improve User Experience Design",
      id: "492720...3521",
      createdAt: "Apr 4th, 2023",
      updatedAt: "Apr 5th, 2023",
      description:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: ["https://tinyurl.com/yh2xkpzm"],
      category: "GeneralPropose",
      author: {
        name: "0x0123456789abcdef0123456789abcdef01234567",
        avatarUrl: "https://tinyurl.com/47fb3b7z",
      },
    },
    {
      status: "Active",
      title: "[EP3.8] [Executable] Enhance Security Measures",
      id: "574893...7243",
      createdAt: "Apr 6th, 2023",
      updatedAt: "Apr 7th, 2023",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imageUrl: ["https://tinyurl.com/yh2xkpzm"],
      category: "ProductPropose",
      author: {
        name: "0xabcdef0123456789abcdef0123456789abcdef12",
        avatarUrl: "https://tinyurl.com/3sy2cb7k",
      },
    },
    {
      status: "Executed",
      title: "[EP3.9] [Executable] Expand Market Reach",
      id: "686453...1254",
      createdAt: "Apr 8th, 2023",
      updatedAt: "Apr 9th, 2023",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: ["https://tinyurl.com/yh2xkpzm"],
      category: "GeneralPropose",
      author: {
        name: "0x0123456789abcdef0123456789abcdefabcdef01",
        avatarUrl: "https://tinyurl.com/2zkcysf9",
      },
    },
  ],
  contractParameters: {
    proposalThreshold: 0,
    quorumNeeded: "11.85M",
    proposalDelay: "a few seconds",
    votingPeriod: "5 hours",
    governor: "0xcDF27F107725988f2261Ce2256bDfCdE8B382B10",
    token: "0x4200000000000000000000000000000000000042",
    timelock: "0xcDF27F107725988f2261Ce2256bDfCdE8B382B10",
  },
};

export const DAODataList: DAODataType[] = [
  {
    id: "0",
    name: "DAO Name",
    storeUrl: "https://google.com",
    symbol: "DAO",
    stats: { proposals: 3, holders: 3, voters: 3 },
    proposals: [
      {
        status: "Defeated",
        title: "[EP3.7] [Executable] Improve User Experience Design",
        id: "492720...3521",
        createdAt: "Apr 4th, 2023",
        updatedAt: "Apr 5th, 2023",
        description:
          "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "ProductPropose",
        author: {
          name: "0x0123456789abcdef0123456789abcdef01234567",
          avatarUrl: "https://tinyurl.com/47fb3b7z",
        },
      },
      {
        status: "Succeeded",
        title: "[EP3.8] [Executable] Enhance Security Measures",
        id: "574893...7243",
        createdAt: "Apr 6th, 2023",
        updatedAt: "Apr 7th, 2023",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "GeneralPropose",
        author: {
          name: "0xabcdef0123456789abcdef0123456789abcdef12",
          avatarUrl: "https://tinyurl.com/3sy2cb7k",
        },
      },
      {
        status: "Executed",
        title: "[EP3.9] [Executable] Expand Market Reach",
        id: "686453...1254",
        createdAt: "Apr 8th, 2023",
        updatedAt: "Apr 9th, 2023",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "ProductPropose",
        author: {
          name: "0x0123456789abcdef0123456789abcdefabcdef01",
          avatarUrl: "https://tinyurl.com/2zkcysf9",
        },
      },
    ],
    contractParameters: {
      proposalThreshold: 0,
      quorumNeeded: "11.85M",
      proposalDelay: "a few seconds",
      votingPeriod: "5 hours",
      governor: "0xcDF27F107725988f2261Ce2256bDfCdE8B382B10",
      token: "0x4200000000000000000000000000000000000042",
      timelock: "0xcDF27F107725988f2261Ce2256bDfCdE8B382B10",
    },
  },
  {
    id: "1",
    name: "DAO Name 1",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "DAO1",
    stats: { proposals: 3, holders: 5, voters: 7 },
    proposals: [
      {
        status: "Pending",
        title: "[EP4.1] [Executable] Revamp Web Interface",
        id: "796352...5642",
        createdAt: "Apr 11th, 2023",
        updatedAt: "Apr 12th, 2023",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "ProductPropose",
        author: {
          name: "0xabcdefabcdefabcdefabcdefabcdefabcdef01",
          avatarUrl: "https://tinyurl.com/3h4bcsbb",
        },
      },
      {
        status: "Active",
        title: "[EP4.2] [Executable] Introduce New Product Line",
        id: "892647...2343",
        createdAt: "Apr 13th, 2023",
        updatedAt: "Apr 14th, 2023",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "ProductPropose",
        author: {
          name: "0x0123456789abcdefabcdefabcdefabcdefabcdef",
          avatarUrl: "https://tinyurl.com/22r5tz9n",
        },
      },
      {
        status: "Canceled",
        title: "[EP4.3] [Executable] Adopt Remote Work Policy",
        id: "982436...8721",
        createdAt: "Apr 15th, 2023",
        updatedAt: "Apr 16th, 2023",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "GeneralPropose",
        author: {
          name: "0xabcdef0123456789abcdef0123456789abcdef12",
          avatarUrl: "https://tinyurl.com/7zbsb86k",
        },
      },
    ],
    contractParameters: {
      proposalThreshold: 1,
      quorumNeeded: "5.85M",
      proposalDelay: "10 minutes",
      votingPeriod: "6 hours",
      governor: "0x3a3777a150d2465567e5b600a7be8b198ee2b469",
      token: "0x8f41f1707199ee0387f42a858d2aeca7a99c88a1",
      timelock: "0xb206b15d24cf760c01da2a2a85d5b2b05e6a6f48",
    },
  },
  {
    id: "2",
    name: "DAO Name 2",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "DAO2",
    stats: { proposals: 4, holders: 6, voters: 8 },
    proposals: [
      {
        status: "Defeated",
        title: "[EP4.4] [Executable] Implement AI Assistance",
        id: "234d74...8762",
        createdAt: "Apr 17th, 2023",
        updatedAt: "Apr 18th, 2023",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "ProductPropose",
        author: {
          name: "0x456789abcdefabcdefabcdefabcdefabcdef02",
          avatarUrl: "https://tinyurl.com/3hj9r32b",
        },
      },
      {
        status: "Defeated",
        title: "[EP4.4] [Executable] Implement AI Assistance",
        id: "234574...8762",
        createdAt: "Apr 17th, 2023",
        updatedAt: "Apr 18th, 2023",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "ProductPropose",
        author: {
          name: "0x456789abcdefabcdefabcdefabcdefabcdef02",
          avatarUrl: "https://tinyurl.com/3hj9r32b",
        },
      },
      {
        status: "Succeeded",
        title: "[EP4.5] [Executable] Open New Branch in Japan",
        id: "287654...2389",
        createdAt: "Apr 19th, 2023",
        updatedAt: "Apr 20th, 2023",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "GeneralPropose",
        author: {
          name: "0x0123456789abcdefabcdefabcdefabcdefabcdef03",
          avatarUrl: "https://tinyurl.com/2h2tz9kn",
        },
      },
      {
        status: "Queued",
        title: "[EP4.6] [Executable] Update Privacy Policy",
        id: "987345...1238",
        createdAt: "Apr 21st, 2023",
        updatedAt: "Apr 22nd, 2023",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "GeneralPropose",
        author: {
          name: "0xabcdef0123456789abcdef0123456789abcdef13",
          avatarUrl: "https://tinyurl.com/3zbsb86v",
        },
      },
    ],
    contractParameters: {
      proposalThreshold: 2,
      quorumNeeded: "6.85M",
      proposalDelay: "15 minutes",
      votingPeriod: "7 hours",
      governor: "0x1a3777a150d2465567e5b600a7be8b198ee2b469",
      token: "0x5f41f1707199ee0387f42a858d2aeca7a99c88a1",
      timelock: "0x9b206b15d24cf760c01da2a2a85d5b2b05e6a6f48",
    },
  },
  {
    id: "3",
    name: "CommerceDAO",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "CDAO",
    stats: { proposals: 6, holders: 50, voters: 30 },
    proposals: [
      {
        status: "Expired",
        title: "[EP5.1] [Executable] Enhance User Interface",
        id: "123454...8765",
        createdAt: "May 1st, 2023",
        updatedAt: "May 2nd, 2023",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "ProductPropose",
        author: {
          name: "0x6543789abcdefabcdefabcdefabcdefabcdef05",
          avatarUrl: "https://tinyurl.com/6gfr5d3v",
        },
      },
      {
        status: "Pending",
        title: "[EP5.2] [Executable] Expand Business to Europe",
        id: "2876754...2380",
        createdAt: "May 3rd, 2023",
        updatedAt: "May 4th, 2023",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "GeneralPropose",
        author: {
          name: "0x0873456789abcdefabcdefabcdefabcdefabcdef07",
          avatarUrl: "https://tinyurl.com/6gf7sdf",
        },
      },
      {
        status: "Active",
        title: "[EP5.3] [Executable] Upgrade Server Capacity",
        id: "9873485...1248",
        createdAt: "May 5th, 2023",
        updatedAt: "May 6th, 2023",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "ProductPropose",
        author: {
          name: "0xabcdef098765432109876543210987654321",
          avatarUrl: "https://tinyurl.com/6dfg5sdf",
        },
      },
      {
        status: "Canceled",
        title: "[EP5.4] [Executable] Introduce New Feature in App",
        id: "1234578...8778",
        createdAt: "May 7th, 2023",
        updatedAt: "May 8th, 2023",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "ProductPropose",
        author: {
          name: "0x8765439abcdefabcdefabcdefabcdefabcdef06",
          avatarUrl: "https://tinyurl.com/6gfd6gf",
        },
      },
      {
        status: "Pending",
        title: "[EP5.2] [Executable] Expand Business to Europe",
        id: "2876754...2380",
        createdAt: "May 3rd, 2023",
        updatedAt: "May 4th, 2023",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "GeneralPropose",
        author: {
          name: "0x0873456789abcdefabcdefabcdefabcdefabcdef07",
          avatarUrl: "https://tinyurl.com/6gf7sdf",
        },
      },
      {
        status: "Active",
        title: "[EP5.3] [Executable] Upgrade Server Capacity",
        id: "9873485...1248",
        createdAt: "May 5th, 2023",
        updatedAt: "May 6th, 2023",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "ProductPropose",
        author: {
          name: "0xabcdef098765432109876543210987654321",
          avatarUrl: "https://tinyurl.com/6dfg5sdf",
        },
      },
    ],
    contractParameters: {
      proposalThreshold: 5,
      quorumNeeded: "5.10M",
      proposalDelay: "30 minutes",
      votingPeriod: "9 hours",
      governor: "0x2a489f78ae73f522631d78e750bc0e4dd36a0f35",
      token: "0x6f63e65ea92a2233859b024c92c340d59d17b134",
      timelock: "0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63",
    },
  },
  {
    id: "4",
    name: "TradeDAO",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "TDAO",
    stats: { proposals: 1, holders: 100, voters: 80 },
    proposals: [
      {
        status: "Defeated",
        title: "[EP6.2] [Executable] Build New Headquarters",
        id: "5678994...5678",
        createdAt: "May 17th, 2023",
        updatedAt: "May 18th, 2023",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "GeneralPropose",
        author: {
          name: "0x3456789abcdefabcdefabcdefabcdefabcdefabc01",
          avatarUrl: "https://tinyurl.com/7j0k8l7",
        },
      },
    ],
    contractParameters: {
      proposalThreshold: 8,
      quorumNeeded: "7.10M",
      proposalDelay: "1 hour",
      votingPeriod: "10 hours",
      governor: "0x4b489f78fe73f522671d78f350bc1e4dd39a0f44",
      token: "0x7f53e69ea92b2233859b024c93c350d59d17b154",
      timelock: "0xa83f8d60db89ea8ca4eb9968c7aff8cfa05b3c73",
    },
  },
  {
    id: "5",
    name: "RetailDAO",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "RDAO",
    stats: { proposals: 2, holders: 120, voters: 110 },
    proposals: [
      {
        status: "Expired",
        title: "[EP7.1] [Executable] Develop VR Product Line",
        id: "234512...3456",
        createdAt: "May 22nd, 2023",
        updatedAt: "May 23rd, 2023",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "ProductPropose",
        author: {
          name: "0xfedcba9876543210abcdefabcdefabcdefabcdef03",
          avatarUrl: "https://tinyurl.com/8e0f1g2",
        },
      },
      {
        status: "Pending",
        title: "[EP7.2] [Executable] Acquire Tech Startup",
        id: "6789234...6789",
        createdAt: "May 24th, 2023",
        updatedAt: "May 25th, 2023",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "GeneralPropose",
        author: {
          name: "0x1234567890abcdefabcdefabcdefabcdefabcdef04",
          avatarUrl: "https://tinyurl.com/8g2h3i4",
        },
      },
    ],
    contractParameters: {
      proposalThreshold: 8,
      quorumNeeded: "7.10M",
      proposalDelay: "1 hour",
      votingPeriod: "10 hours",
      governor: "0x4b489f78fe73f522671d78f350bc1e4dd39a0f44",
      token: "0x7f53e69ea92b2233859b024c93c350d59d17b154",
      timelock: "0xa83f8d60db89ea8ca4eb9968c7aff8cfa05b3c73",
    },
  },
  {
    id: "6",
    name: "DigitalDAO",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "DDAO",
    stats: { proposals: 0, holders: 200, voters: 180 },
    proposals: [],
    contractParameters: {
      proposalThreshold: 10,
      quorumNeeded: "10.10M",
      proposalDelay: "2 hours",
      votingPeriod: "12 hours",
      governor: "0x5b689f78fe73f522671d78f350bc1e4dd49a0f55",
      token: "0x8f74e65ea92b2233859b024c93c350d59d17b164",
      timelock: "0xb93f9d60db89ea8ca4eb9968c7aff8cfa06b3c83",
    },
  },
  {
    id: "7",
    name: "GlobalDAO",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "GDAO",
    stats: { proposals: 6, holders: 300, voters: 280 },
    proposals: [
      {
        status: "Succeeded",
        title: "[EP8.1] [Executable] Implement AI Technology",
        id: "123456...7890",
        createdAt: "May 30th, 2023",
        updatedAt: "May 31st, 2023",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "ProductPropose",
        author: {
          name: "0x0987654321abcdefabcdefabcdefabcdefabcdef07",
          avatarUrl: "https://tinyurl.com/8m8n9o0",
        },
      },
      {
        status: "Succeeded",
        title: "[EP8.2] [Executable] Launch New Mobile App",
        id: "234567...8901",
        createdAt: "June 1st, 2023",
        updatedAt: "June 2nd, 2023",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "GeneralPropose",
        author: {
          name: "0x1234567890abcdefabcdefabcdefabcdefabcdef08",
          avatarUrl: "https://tinyurl.com/8o0p1q2",
        },
      },
      {
        status: "Succeeded",
        title: "[EP8.3] [Executable] Initiate Green Energy Project",
        id: "345678...9012",
        createdAt: "June 3rd, 2023",
        updatedAt: "June 4th, 2023",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "ProductPropose",
        author: {
          name: "0xabcdef0123456789abcdefabcdefabcdefabcdef09",
          avatarUrl: "https://tinyurl.com/8q2r3s4",
        },
      },
      {
        status: "Succeeded",
        title: "[EP8.4] [Executable] Implement Remote Working Policy",
        id: "456789...0123",
        createdAt: "June 5th, 2023",
        updatedAt: "June 6th, 2023",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "GeneralPropose",
        author: {
          name: "0x5678901234567890abcdefabcdefabcdefabcdef10",
          avatarUrl: "https://tinyurl.com/8s4t5u6",
        },
      },
      {
        status: "Defeated",
        title: "[EP8.5] [Executable] Restructure Company Management",
        id: "567890...1234",
        createdAt: "June 7th, 2023",
        updatedAt: "June 8th, 2023",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "ProductPropose",
        author: {
          name: "0x6789012345678901abcdefabcdefabcdefabcdef11",
          avatarUrl: "https://tinyurl.com/8u6v7w8",
        },
      },
      {
        status: "Active",
        title: "[EP8.6] [Executable] Expand into New Market",
        id: "678901...2345",
        createdAt: "June 9th, 2023",
        updatedAt: "June 10th, 2023",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: ["https://tinyurl.com/yh2xkpzm"],
        category: "GeneralPropose",
        author: {
          name: "0x7890123456789012abcdefabcdefabcdefabcdef12",
          avatarUrl: "https://tinyurl.com/8w8x9y0",
        },
      },
    ],
    contractParameters: {
      proposalThreshold: 12,
      quorumNeeded: "12.10M",
      proposalDelay: "3 hours",
      votingPeriod: "14 hours",
      governor: "0x6b889f78fe73f522671d78f350bc1e4dd59a0f66",
      token: "0x9f84e65ea92b2233859b024c93c350d59d17b174",
      timelock: "0xc93f9d60db89ea8ca4eb9968c7aff8cfa07b3c93",
    },
  },
  {
    id: "8",
    name: "GlobalBigPPDAO",
    storeUrl: "https://sample.myshopify.com/",
    symbol: "GBigPP",
    stats: { proposals: 0, holders: 300, voters: 280 },
    proposals: [],
    contractParameters: {
      proposalThreshold: 12,
      quorumNeeded: "12.10M",
      proposalDelay: "3 hours",
      votingPeriod: "14 hours",
      governor: "0x6b889f78fe73f522671d78f350bc1e4dd59a0f66",
      token: "0x9f84e65ea92b2233859b024c93c350d59d17b174",
      timelock: "0xc93f9d60db89ea8ca4eb9968c7aff8cfa07b3c93",
    },
  },
  {
    id: "9",
    name: "VercelDAO",
    storeUrl: "https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation#examples",
    symbol: "VDAO",
    stats: { proposals: 7, holders: 100, voters: 80 },
    proposals: [
      {
        status: "EXECUTED",
        title: "Proposal 1",
        id: "0x28ea5eb1bc53f3852158a46416341e9873c79d41",
        date: "Apr 30th, 2023",
        description: "Proposal executed",
      },
    ],
    contractParameters: {
      proposalThreshold: 8,
      quorumNeeded: "7.10M",
      proposalDelay: "1 hour",
      votingPeriod: "10 hours",
      governor: "0x4b489f78fe73f522671d78f350bc1e4dd39a0f44",
      token: "0x7f53e69ea92b2233859b024c93c350d59d17b154",
      timelock: "0xa83f8d60db89ea8ca4eb9968c7aff8cfa05b3c73",
    },
  },
];
