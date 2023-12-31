// contract addresses

import {
  HyperclusterABI,
  HyperclusterFactoryABI,
  HyperclusterFactorySepolia,
  HyperclusterSepolia,
} from "@/helpers/abi";

export const settings = {
  fuji: {
    HyperclusterImplementation: {
      address: "0x2Fd727eb120D927C2B5D2B7A0eD477B25eCd030A",
      explorerURL:
        "https://testnet.snowtrace.io/address/0x2Fd727eb120D927C2B5D2B7A0eD477B25eCd030A",
      abi: HyperclusterABI,
    },
    HyperclusterFactory: {
      address: "0xd8D374349D0f3c6c1aAa82dcBd742edfc1BFf28d",
      explorerURL:
        "https://testnet.snowtrace.io/address/0xf3Dfb114CFAe91FC391e3E76f208eBbF595dCA82",
      abi: HyperclusterFactoryABI,
    },
    CCIPBNM: "0xD21341536c5cF5EB1bcb58f6723cE26e8D8E90e4",
  },
  sepolia: {
    HyperclusterImplementation: {
      abi: HyperclusterABI,
    },
    HyperclusterFactory: {
      address: "0x8Bbc1A9c2C746B1499aAef93c591e7C6ACfa1c7f",
      abi: HyperclusterFactorySepolia,
    },
    CCIPBNM: "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05", // 0xD21341536c5cF5EB1bcb58f6723cE26e8D8E90e4
  },
  endpoint: process.env.NEXT_PUBLIC_VERCEL_ENV
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000",
  mockCampaigns: [
    { title: "Apecoin Referral Network", launchDate: "10 Dec 2023" },
    { title: "Apecoin XMAS Campaign", launchDate: "10 Dec 2023" },
    { title: "Apecoin Year Round", launchDate: "10 Dec 2023" },
    { title: "BAYC Apefest", launchDate: "10 Dec 2023" },
    { title: "Apecoin Insider", launchDate: "10 Dec 2023" },
  ],
  mockReferrals: [
    {
      address: "0x9B1430847BC9494AD87AaD01221C84F41649DB8A",
      referrals: 1,
      verified: true,
      tier: "C",
      activity: "4 hours ago",
      hash: "0x72b7a51cf5c279c842570f53a39980810b8400fa0a7ee2d345d89901d3a04f29",
    },
    {
      address: "0x9c6eCd3a702A29c3E195E4784a188bac9f67A8f3",
      referrals: 2,
      verified: true,
      tier: "B",
      activity: "2 days ago",
      hash: "0x233334bd2b82e594c34f3fbff948c540b854253969d13c9d364f42b77a10cb75",
    },
    {
      address: "0x5D8a483F53Dc95b346890aa045616c8a655816c4",
      referrals: 2,
      verified: true,
      tier: "A",
      activity: "1 week ago",
      hash: "0x5997b1edea9c77f985dfdfe5476220ad30acba38b4ab22251c07f955899fff2e",
    },
  ],
  mockTriggers: [
    {
      cah: "0xa6ed97be5e377a13dcaddb0f684192fa2c7ccbbd85115f7fd5c2f0179f3a6056",
      condition: "Price +1%",
      reward: 50,
      activity: "16 hours ago",
      hash: "0xa6ed97be5e377a13dcaddb0f684192fa2c7ccbbd85115f7fd5c2f0179f3a6056",
    },
    {
      cah: "0xaa62e9ce6a7424391af07199e6020c20a1298dc7facac98c07b5281ccaca45c6",
      condition: "Price +1%",
      reward: 100,
      activity: "5 days ago",
      hash: "0xaa62e9ce6a7424391af07199e6020c20a1298dc7facac98c07b5281ccaca45c6",
    },
    {
      cah: "0xcbaf0341d0e9ec3e3d1266189fca44109fe63c6daf1e26ee3755f70cdf55a21b",
      condition: "Price +1%",
      reward: 100,
      activity: "2 weeks ago",
      hash: "0xcbaf0341d0e9ec3e3d1266189fca44109fe63c6daf1e26ee3755f70cdf55a21b",
    },
  ],
};

console.log("this endpoint", settings.endpoint);

// http://localhost:3000/campaign/ire?ref=401c35625d67701f9b572fe8c8313d71b3618170a7f1b6c76de0b13d3e671979e7e687e142d057e258a5cc8a71293d21c6b9b2ca5ea52fff0b221c6933693805c5f1cd9bc457b9b3db59f8773c9a6ef1202193fc372b31aa32666eda3ea50aec
